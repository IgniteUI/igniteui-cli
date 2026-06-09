import type { ExternalLogin } from '../models/external-login.js';
import type { OAuthProvider } from './external-auth-config.js';
import { oauthConfig } from './external-auth-config.js';
import { generateCodeVerifier, generateCodeChallenge, buildAuthUrl } from './pkce.js';

// sessionStorage keys
const VERIFIER_KEY = '_pkce_verifier';
const STATE_KEY = '_oauth_state';
const FB_USER_KEY = '_fb_user';
const ACTIVE_PROVIDER_KEY = '_ext_active_provider';

// Declared by the Facebook JS SDK (loaded via script tag in index.html)
declare const FB: any;

// Set to true once FB.init() has been called in this session.
// Prevents FB.logout() from being called before initialization.
let fbInitialized = false;

/**
 * Decode a JWT payload segment. Handles Base64URL encoding (no padding, - and _ chars)
 * which `atob()` does not accept natively - missing padding causes `InvalidCharacterError`.
 */
function decodeJwtPayload(token: string): any {
  const base64url = token.split('.')[1];
  const base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, '=');
  return JSON.parse(atob(padded));
}

/**
 * Waits until the Facebook JS SDK has loaded and is available on window.
 * The SDK is loaded with `async defer` so it may not be ready when login() is called.
 */
function waitForFB(): Promise<void> {
  return new Promise(resolve => {
    if (typeof (window as any).FB !== 'undefined') { resolve(); return; }
    const id = setInterval(() => {
      if (typeof (window as any).FB !== 'undefined') { clearInterval(id); resolve(); }
    }, 50);
  });
}

/**
 * External (social) authentication service.
 * Supports Google and Microsoft via OIDC/PKCE, and Facebook via the JS SDK.
 *
 * Usage: call login(provider) to start the flow; call handleRedirect(provider)
 * on the matching redirect page to complete it and retrieve the user profile.
 */
export const ExternalAuth = {
  /** Returns true if any provider (or the specific provider) is configured. */
  hasProvider(provider?: OAuthProvider): boolean {
    if (provider) {
      return provider in oauthConfig && (oauthConfig as any)[provider] != null;
    }
    return Object.values(oauthConfig).some(v => v != null);
  },

  /** Initiate login for the given provider. Redirects the page to the provider's auth endpoint. */
  async login(provider: OAuthProvider): Promise<void> {
    localStorage.setItem(ACTIVE_PROVIDER_KEY, provider);
    if (provider === 'google') {
      const cfg = oauthConfig.google!;
      const verifier = generateCodeVerifier();
      const challenge = await generateCodeChallenge(verifier);
      sessionStorage.setItem(VERIFIER_KEY, verifier);
      const state = crypto.randomUUID();
      sessionStorage.setItem(STATE_KEY, state);
      const redirectUri = `${window.location.origin}/auth/redirect-google`;
      window.location.href = buildAuthUrl('https://accounts.google.com/o/oauth2/v2/auth', {
        response_type: 'code',
        client_id: cfg.clientId,
        redirect_uri: redirectUri,
        scope: 'openid profile email',
        code_challenge: challenge,
        code_challenge_method: 'S256',
        state,
      });
    } else if (provider === 'microsoft') {
      const cfg = oauthConfig.microsoft!;
      const tenantId = cfg.tenantId ?? 'common';
      const verifier = generateCodeVerifier();
      const challenge = await generateCodeChallenge(verifier);
      sessionStorage.setItem(VERIFIER_KEY, verifier);
      const state = crypto.randomUUID();
      sessionStorage.setItem(STATE_KEY, state);
      const redirectUri = `${window.location.origin}/auth/redirect-microsoft`;
      window.location.href = buildAuthUrl(
        `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize`,
        {
          response_type: 'code',
          client_id: cfg.clientId,
          redirect_uri: redirectUri,
          scope: 'openid profile email',
          code_challenge: challenge,
          code_challenge_method: 'S256',
          state,
        }
      );
    } else if (provider === 'facebook') {
      const cfg = oauthConfig.facebook!;
      // Wait for the SDK to load (it is included with `async defer` in index.html
      // and may not be available yet when the user clicks the login button).
      await waitForFB();
      FB.init({ appId: cfg.clientId, xfbml: false, version: 'v3.1' });
      fbInitialized = true;
      FB.login(
        (response: any) => {
          if (response.authResponse) {
            FB.api(
              '/me?fields=id,email,name,first_name,last_name,picture',
              (res: any) => {
                const user: ExternalLogin = {
                  id: res.id,
                  name: res.name,
                  given_name: res.first_name,
                  family_name: res.last_name,
                  email: res.email,
                  // Facebook returns picture as an object: { data: { url, width, height } }
                  picture: res.picture?.data?.url,
                  externalToken: FB.getAuthResponse()?.accessToken ?? '',
                };
                sessionStorage.setItem(FB_USER_KEY, JSON.stringify(user));
                window.location.href = '/auth/redirect-facebook';
              }
            );
          }
        },
        { scope: 'public_profile,email' }
      );
    }
  },

  /**
   * Complete the OAuth redirect flow and return the external user profile.
   * Call this from the /auth/redirect-{provider} page.
   *
   * For Google/Microsoft: exchanges the authorization code (PKCE) for tokens.
   * For Facebook: reads the profile stored during the FB.login() popup flow.
   */
  async handleRedirect(provider: OAuthProvider): Promise<ExternalLogin> {
    if (provider === 'facebook') {
      const stored = sessionStorage.getItem(FB_USER_KEY);
      if (!stored) throw new Error('No Facebook user data found. Please try again.');
      sessionStorage.removeItem(FB_USER_KEY);
      return JSON.parse(stored) as ExternalLogin;
    }

    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (!code) throw new Error('Missing authorization code in redirect URL.');

    // Validate the state parameter to prevent CSRF attacks.
    const returnedState = params.get('state');
    const savedState = sessionStorage.getItem(STATE_KEY);
    sessionStorage.removeItem(STATE_KEY);
    if (!returnedState || returnedState !== savedState) {
      throw new Error('OAuth state mismatch. The request may have been tampered with.');
    }

    const verifier = sessionStorage.getItem(VERIFIER_KEY);
    if (!verifier) throw new Error('Missing PKCE code verifier. Please try again.');
    sessionStorage.removeItem(VERIFIER_KEY);

    if (provider === 'google') {
      const cfg = oauthConfig.google!;
      const redirectUri = `${window.location.origin}/auth/redirect-google`;
      const res = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: cfg.clientId,
          redirect_uri: redirectUri,
          code,
          code_verifier: verifier,
        }),
      });
      if (!res.ok) throw new Error('Google token exchange failed.');
      const data = await res.json();
      // Decode the id_token to extract user claims - no extra userinfo request needed
      const payload = decodeJwtPayload(data.id_token);
      return {
        id: payload.sub,
        name: payload.name,
        given_name: payload.given_name,
        family_name: payload.family_name,
        email: payload.email,
        picture: payload.picture,
        externalToken: data.access_token,
      };
    }

    if (provider === 'microsoft') {
      const cfg = oauthConfig.microsoft!;
      const tenantId = cfg.tenantId ?? 'common';
      const redirectUri = `${window.location.origin}/auth/redirect-microsoft`;
      const res = await fetch(
        `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: cfg.clientId,
            redirect_uri: redirectUri,
            code,
            code_verifier: verifier,
          }),
        }
      );
      if (!res.ok) throw new Error('Microsoft token exchange failed.');
      const data = await res.json();
      const payload = decodeJwtPayload(data.id_token);
      return {
        id: payload.oid ?? payload.sub,
        name: payload.name,
        email: payload.email ?? payload.preferred_username,
        externalToken: data.access_token,
      };
    }

    throw new Error(`Unknown provider: ${provider}`);
  },

  /**
   * Sign out from the active external provider (if any) and clear its stored state.
   * Call this alongside clearing local user state on logout.
   */
  logout(): void {
    const provider = localStorage.getItem(ACTIVE_PROVIDER_KEY) as OAuthProvider | null;
    localStorage.removeItem(ACTIVE_PROVIDER_KEY);
    sessionStorage.removeItem(VERIFIER_KEY);
    sessionStorage.removeItem(FB_USER_KEY);

    if (!provider) return;

    if (provider === 'google') {
      // Redirect to Google's end-session endpoint to clear the Google session.
      // The user is returned to the app root after sign-out.
      const cfg = oauthConfig.google;
      if (cfg) {
        window.location.href = `https://accounts.google.com/logout`;
        return;
      }
    }

    if (provider === 'microsoft') {
      const cfg = oauthConfig.microsoft;
      if (cfg) {
        const tenantId = cfg.tenantId ?? 'common';
        const postLogoutRedirectUri = encodeURIComponent(window.location.origin);
        window.location.href =
          `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/logout` +
          `?post_logout_redirect_uri=${postLogoutRedirectUri}`;
        return;
      }
    }

    if (provider === 'facebook') {
      // Only call FB.logout() when the SDK was initialised in this session.
      // Calling it on a fresh page load (before FB.init) throws an error.
      try {
        if (fbInitialized && typeof FB !== 'undefined') {
          FB.logout();
        }
      } catch {
        // SDK not loaded - nothing to do
      }
    }
  },
};

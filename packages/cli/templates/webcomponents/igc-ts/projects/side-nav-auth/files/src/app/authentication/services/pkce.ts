// PKCE (Proof Key for Code Exchange) utilities for OAuth 2.0 Authorization Code Flow.
// https://tools.ietf.org/html/rfc7636

function base64UrlEncode(bytes: Uint8Array): string {
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

/** Generate a cryptographically random PKCE code verifier (43–128 chars, URL-safe). */
export function generateCodeVerifier(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return base64UrlEncode(bytes);
}

/** Compute the S256 code challenge from a code verifier. */
export async function generateCodeChallenge(verifier: string): Promise<string> {
  const data = new TextEncoder().encode(verifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return base64UrlEncode(new Uint8Array(digest));
}

/** Build a URL with query parameters from a plain object. */
export function buildAuthUrl(endpoint: string, params: Record<string, string>): string {
  const url = new URL(endpoint);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, v);
  }
  return url.toString();
}

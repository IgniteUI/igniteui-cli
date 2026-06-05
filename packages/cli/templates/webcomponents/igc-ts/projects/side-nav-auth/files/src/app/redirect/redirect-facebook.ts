import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { ExternalAuth } from '../authentication/services/externalAuth.js';
import { Authentication } from '../authentication/services/authentication.js';
import { UserStore } from '../authentication/services/userStore.js';
import type { User } from '../authentication/models/user.js';

/**
 * Handles the Facebook login redirect.
 * Facebook uses a popup (JS SDK) instead of PKCE, so this page reads the profile
 * that was stored in sessionStorage during the FB.login() callback.
 */
@customElement('app-redirect-facebook')
export class RedirectFacebookElement extends LitElement {
  @state() private error = '';

  connectedCallback() {
    super.connectedCallback();
    this._handleRedirect();
  }

  private async _handleRedirect() {
    try {
      const externalUser = await ExternalAuth.handleRedirect('facebook');
      const result = await Authentication.loginWith(externalUser);
      if (result.user) {
        UserStore.setUser(result.user as User);
        this.dispatchEvent(new CustomEvent('auth-change', { bubbles: true, composed: true }));
        Router.go('/auth/profile');
      } else {
        this.error = result.error ?? 'Facebook sign-in failed.';
      }
    } catch (e: any) {
      console.error('Facebook sign-in failed:', e);
      this.error = 'Facebook sign-in failed. Please try again.';
    }
  }

  render() {
    if (this.error) {
      return html`
        <div style="padding:2rem;color:#d32f2f">
          <p>${this.error}</p>
          <button @click=${() => Router.go('/')}>Back to Home</button>
        </div>
      `;
    }
    return html`<p style="padding:2rem">Signing in with Facebook…</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-redirect-facebook': RedirectFacebookElement;
  }
}

import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { ExternalAuth } from '../authentication/services/externalAuth.js';
import { Authentication } from '../authentication/services/authentication.js';
import { UserStore } from '../authentication/services/userStore.js';
import type { User } from '../authentication/models/user.js';

/** Handles the OAuth redirect from Google. Exchanges the authorization code for a user profile. */
@customElement('app-redirect-google')
export class RedirectGoogleElement extends LitElement {
  @state() private error = '';

  connectedCallback() {
    super.connectedCallback();
    this._handleRedirect();
  }

  private async _handleRedirect() {
    try {
      const externalUser = await ExternalAuth.handleRedirect('google');
      const result = await Authentication.loginWith(externalUser);
      if (result.user) {
        UserStore.setUser(result.user as User);
        this.dispatchEvent(new CustomEvent('auth-change', { bubbles: true, composed: true }));
        Router.go('/auth/profile');
      } else {
        this.error = result.error ?? 'Google sign-in failed.';
      }
    } catch (e: any) {
      console.error('Google sign-in failed:', e);
      this.error = 'Google sign-in failed. Please try again.';
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
    return html`<p style="padding:2rem">Signing in with Google…</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-redirect-google': RedirectGoogleElement;
  }
}

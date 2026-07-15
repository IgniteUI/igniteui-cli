import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { ExternalAuth } from '../authentication/services/externalAuth.js';
import { Authentication } from '../authentication/services/authentication.js';
import { UserStore } from '../authentication/services/userStore.js';
import type { User } from '../authentication/models/user.js';

/** Handles the OAuth redirect from Microsoft. Exchanges the authorization code for a user profile. */
@customElement('app-redirect-microsoft')
export class RedirectMicrosoftElement extends LitElement {
  @state() private error = '';

  connectedCallback() {
    super.connectedCallback();
    this._handleRedirect();
  }

  private async _handleRedirect() {
    try {
      const externalUser = await ExternalAuth.handleRedirect('microsoft');
      const result = await Authentication.loginWith(externalUser);
      if (result.user) {
        UserStore.setUser(result.user as User);
        this.dispatchEvent(new CustomEvent('auth-change', { bubbles: true, composed: true }));
        Router.go('/auth/profile');
      } else {
        this.error = result.error ?? 'Microsoft sign-in failed.';
      }
    } catch (e: any) {
      console.error('Microsoft sign-in failed:', e);
      this.error = 'Microsoft sign-in failed. Please try again.';
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
    return html`<p style="padding:2rem">Signing in with Microsoft…</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-redirect-microsoft': RedirectMicrosoftElement;
  }
}

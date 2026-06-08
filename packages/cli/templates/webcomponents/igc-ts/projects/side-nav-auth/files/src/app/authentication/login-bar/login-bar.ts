import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcDropdownComponent, IgcDropdownItemComponent } from 'igniteui-webcomponents';
import { UserStore } from '../services/userStore.js';
import { ExternalAuth } from '../services/externalAuth.js';
import type { User } from '../models/user.js';
import '../login-dialog/login-dialog.js';

defineComponents(IgcAvatarComponent, IgcButtonComponent, IgcDropdownComponent, IgcDropdownItemComponent);

@customElement('auth-login-bar')
export class LoginBarElement extends LitElement {
  @state() private currentUser: User | null = UserStore.getUser();

  static styles = css`
    :host {
      display: contents;
    }

    .login-btn {
      border: 1px solid rgba(0, 117, 210, 0.35);
      background: #fff;
      color: #0075d2;
      font-size: .875rem;
      font-weight: 600;
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 4px;
      white-space: nowrap;
      text-transform: none;
    }

    .login-btn:hover {
      background: #e8f3fc;
    }

    .profile-avatar {
      cursor: pointer;
      color: #0075d2;
      --ig-avatar-background: #fff;
      --ig-avatar-color: #0075d2;
      --ig-avatar-initials-font-size: 0.875rem;
    }

    .profile-avatar:focus-visible {
      outline: 2px solid #fff;
      outline-offset: 2px;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('auth-change', this.handleAuthChange as EventListener);
  }

  disconnectedCallback() {
    this.removeEventListener('auth-change', this.handleAuthChange as EventListener);
    super.disconnectedCallback();
  }

  private handleAuthChange = () => {
    this.currentUser = UserStore.getUser();
  };

  private handleMenuSelect(e: CustomEvent) {
    // igcChange detail is the selected IgcDropdownItemComponent element
    const value = (e.detail as any)?.value;
    if (value === 'profile') {
      Router.go('/auth/profile');
    } else if (value === 'logout') {
      ExternalAuth.logout();
      UserStore.clearUser();
      this.currentUser = null;
      Router.go('/');
    }
  }

  render() {
    if (!this.currentUser) {
      return html`
        <button class="login-btn" type="button" @click=${() => (this.shadowRoot?.querySelector('auth-login-dialog') as any)?.open()}>Log In</button>
        <auth-login-dialog @auth-change=${this.handleAuthChange}></auth-login-dialog>
      `;
    }

    const initials = UserStore.getInitials(this.currentUser);

    return html`
      <igc-dropdown placement="bottom-end" @igcChange=${this.handleMenuSelect}>
        <igc-avatar
          slot="target"
          class="profile-avatar"
          shape="circle"
          size="small"
          src=${this.currentUser.picture ?? ''}
          tabindex="0"
          aria-label="Open profile menu"
        >${initials}</igc-avatar>
        <igc-dropdown-item value="profile">Profile</igc-dropdown-item>
        <igc-dropdown-item value="logout">Log Out</igc-dropdown-item>
      </igc-dropdown>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'auth-login-bar': LoginBarElement;
  }
}

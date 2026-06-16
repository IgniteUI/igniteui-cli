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

    .login-btn::part(base) {
      color: #0075d2;
      background: #fff;
      border-color: rgba(0, 117, 210, 0.35);
      font-weight: 600;
      white-space: nowrap;
    }

    .login-btn::part(base):hover {
      background: #e8f3fc;
    }

    .profile-avatar {
      cursor: pointer;
      color: #0075d2;
      --ig-avatar-background: #fff;
      --ig-avatar-color: #0075d2;
      --ig-avatar-initials-font-size: 0.875rem;
    }

    igc-dropdown-item:hover,
    igc-dropdown-item[active]:hover {
      background: #e8f3fc;
      color: #0075d2;
    }

    igc-dropdown-item[active] {
      background: #e8f3fc;
      color: #0075d2;
    }

    igc-dropdown-item[selected],
    igc-dropdown-item[selected]:hover,
    igc-dropdown-item[selected][active] {
      background: #e8f3fc;
      color: #0075d2;
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
        <igc-button variant="outlined" class="login-btn" @click=${() => (this.shadowRoot?.querySelector('auth-login-dialog') as any)?.open()}>Log In</igc-button>
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

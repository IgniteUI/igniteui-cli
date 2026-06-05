import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent } from 'igniteui-webcomponents';
import { UserStore } from '../services/userStore.js';
import type { User } from '../models/user.js';
import '../login-dialog/login-dialog.js';

defineComponents(IgcAvatarComponent, IgcButtonComponent);

@customElement('auth-login-bar')
export class LoginBarElement extends LitElement {
  @state() private menuOpen = false;
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

    .avatar-wrapper {
      position: relative;
    }

    .avatar-btn {
      width: 36px;
      height: 36px;
      border: 2px solid rgba(0, 117, 210, 0.35);
      border-radius: 50%;
      background: #fff;
      cursor: pointer;
      overflow: hidden;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .avatar-initials {
      font-size: .75rem;
      font-weight: 700;
      color: #0075d2;
      line-height: 1;
    }

    .menu {
      position: absolute;
      right: 0;
      top: calc(100% + 6px);
      margin: 0;
      padding: 4px 0;
      list-style: none;
      background: #fff;
      border-radius: 6px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, .15);
      min-width: 140px;
      z-index: 1000;
    }

    .menu-item {
      width: 100%;
      border: none;
      background: transparent;
      padding: 10px 16px;
      text-align: left;
      font-size: .875rem;
      color: #2d2d2d;
      cursor: pointer;
    }

    .menu-item:hover {
      background: #f5f5f5;
    }
  `;

  private _outsideClickHandler?: (e: MouseEvent) => void;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('auth-change', this.handleAuthChange as EventListener);
  }

  disconnectedCallback() {
    this.removeEventListener('auth-change', this.handleAuthChange as EventListener);
    if (this._outsideClickHandler) {
      document.removeEventListener('mousedown', this._outsideClickHandler);
    }
    super.disconnectedCallback();
  }

  private handleAuthChange = () => {
    this.currentUser = UserStore.getUser();
    this.menuOpen = false;
  };

  private openMenu() {
    this.menuOpen = true;
    this._outsideClickHandler = (e: MouseEvent) => {
      if (!this.shadowRoot?.contains(e.composedPath()[0] as Node)) {
        this.menuOpen = false;
        document.removeEventListener('mousedown', this._outsideClickHandler!);
      }
    };
    document.addEventListener('mousedown', this._outsideClickHandler);
  }

  private handleMenuSelect(action: 'profile' | 'logout') {
    this.menuOpen = false;
    if (action === 'profile') {
      Router.go('/auth/profile');
    } else {
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
      <div class="avatar-wrapper">
        <button
          class="avatar-btn"
          type="button"
          aria-label="Open profile menu"
          @click=${this.openMenu}
        >
          ${this.currentUser.picture
            ? html`<img class="avatar-img" src=${this.currentUser.picture} alt=${this.currentUser.name} />`
            : html`<span class="avatar-initials">${initials}</span>`
          }
        </button>
        ${this.menuOpen ? html`
          <ul class="menu" role="menu">
            <li role="menuitem">
              <button class="menu-item" type="button" @click=${() => this.handleMenuSelect('profile')}>Profile</button>
            </li>
            <li role="menuitem">
              <button class="menu-item" type="button" @click=${() => this.handleMenuSelect('logout')}>Log Out</button>
            </li>
          </ul>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'auth-login-bar': LoginBarElement;
  }
}

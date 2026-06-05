import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcDialogComponent, IgcIconComponent } from 'igniteui-webcomponents';
import { Authentication } from '../services/authentication.js';
import { UserStore } from '../services/userStore.js';
import type { User } from '../models/user.js';

defineComponents(IgcDialogComponent, IgcIconComponent);

@customElement('auth-login-dialog')
export class LoginDialogElement extends LitElement {
  @state() private showLogin = true;
  @state() private error = '';
  @state() private _loginValid = false;
  @state() private _registerValid = false;

  static styles = css`
    igc-dialog::part(base) {
      max-width: 24rem;
      width: calc(100vw - 48px);
    }

    igc-dialog::part(title) {
      font-size: 1.125rem;
      font-weight: 600;
      color: #2d2d2d;
    }

    .form {
      display: flex;
      flex-flow: column;
      gap: 16px;
      padding: 4px 0;
    }

    .field {
      position: relative;
    }

    input {
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      padding: 0 36px 0 12px;
      border: 1px solid #c4c4c4;
      border-radius: 4px;
      font-size: 1rem;
      color: #2d2d2d;
      outline: none;
    }

    input:focus {
      border-color: #239ef0;
    }

    .input-icon {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      color: #0075d2;
      --igc-icon-size: 20px;
      width: 20px;
      height: 20px;
    }

    .error {
      margin: 0;
      font-size: .875rem;
      color: #d32f2f;
    }

    .submit-btn {
      width: 100%;
      min-height: 36px;
      border: none;
      border-radius: 4px;
      background: #239ef0;
      color: #fff;
      font-size: .875rem;
      font-weight: 600;
      text-transform: uppercase;
      cursor: pointer;
    }

    .submit-btn:hover {
      background: #1a8fd8;
    }

    .submit-btn:disabled {
      background: #e0e0e0;
      color: #767676;
      cursor: default;
    }

    .link-btn {
      align-self: center;
      border: none;
      background: transparent;
      color: #0075d2;
      font-size: .875rem;
      cursor: pointer;
      text-decoration: underline;
      padding: 0;
    }
  `;

  private dialogRef: IgcDialogComponent | null = null;

  public open() {
    this.showLogin = true;
    this.error = '';
    this.dialogRef?.show();
  }

  firstUpdated() {
    this.dialogRef = this.shadowRoot?.querySelector('igc-dialog') ?? null;
  }

  private checkLoginValidity = (e: Event) => {
    this._loginValid = (e.currentTarget as HTMLFormElement).checkValidity();
  };

  private checkRegisterValidity = (e: Event) => {
    this._registerValid = (e.currentTarget as HTMLFormElement).checkValidity();
  };

  private handleLoginSubmit = async (e: Event) => {
    e.preventDefault();
    this.error = '';
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const result = await Authentication.login({
      email: data.get('email') as string,
      password: data.get('password') as string,
    });
    if (result.user) {
      form.reset();
      this._loginValid = false;
      UserStore.setUser(result.user as User);
      this.dialogRef?.hide();
      this.dispatchEvent(new CustomEvent('auth-change', { bubbles: true, composed: true }));
      Router.go('/auth/profile');
    } else {
      this.error = result.error ?? 'Login failed';
    }
  };

  private handleRegisterSubmit = async (e: Event) => {
    e.preventDefault();
    this.error = '';
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const result = await Authentication.register({
      given_name: data.get('given_name') as string,
      family_name: data.get('family_name') as string,
      email: data.get('email') as string,
      password: data.get('password') as string,
    });
    if (result.user) {
      form.reset();
      this._registerValid = false;
      UserStore.setUser(result.user as User);
      this.dialogRef?.hide();
      this.dispatchEvent(new CustomEvent('auth-change', { bubbles: true, composed: true }));
      Router.go('/auth/profile');
    } else {
      this.error = result.error ?? 'Registration failed';
    }
  };

  render() {
    const title = this.showLogin ? 'Login' : 'Register';

    const loginForm = html`
      <form class="form" @submit=${this.handleLoginSubmit} @input=${this.checkLoginValidity} novalidate>
        <div class="field">
          <input id="loginEmail" name="email" type="email" placeholder="Email" autocomplete="email" required />
          <igc-icon name="account_circle" collection="material" class="input-icon"></igc-icon>
        </div>
        <div class="field">
          <input id="loginPassword" name="password" type="password" placeholder="Password" autocomplete="current-password" required />
          <igc-icon name="lock" collection="material" class="input-icon"></igc-icon>
        </div>
        ${this.error ? html`<p class="error">${this.error}</p>` : ''}
        <button class="submit-btn" type="submit" ?disabled=${!this._loginValid}>Log In</button>
        <button class="link-btn" type="button" @click=${() => { this.showLogin = false; this.error = ''; }}>
          Create new account
        </button>
      </form>
    `;

    const registerForm = html`
      <form class="form" @submit=${this.handleRegisterSubmit} @input=${this.checkRegisterValidity} novalidate>
        <div class="field">
          <input id="regFirst" name="given_name" type="text" placeholder="First Name" autocomplete="given-name" required />
          <igc-icon name="assignment_ind" collection="material" class="input-icon"></igc-icon>
        </div>
        <div class="field">
          <input id="regLast" name="family_name" type="text" placeholder="Last Name" autocomplete="family-name" />
          <igc-icon name="assignment_ind" collection="material" class="input-icon"></igc-icon>
        </div>
        <div class="field">
          <input id="regEmail" name="email" type="email" placeholder="Email" autocomplete="email" required />
          <igc-icon name="account_circle" collection="material" class="input-icon"></igc-icon>
        </div>
        <div class="field">
          <input id="regPassword" name="password" type="password" placeholder="Password" autocomplete="new-password" required />
          <igc-icon name="lock" collection="material" class="input-icon"></igc-icon>
        </div>
        ${this.error ? html`<p class="error">${this.error}</p>` : ''}
        <button class="submit-btn" type="submit" ?disabled=${!this._registerValid}>Sign Up</button>
        <button class="link-btn" type="button" @click=${() => { this.showLogin = true; this.error = ''; }}>
          Have an account?
        </button>
      </form>
    `;
    return html`
      <igc-dialog .title=${title} ?closeOnOutsideClick=${true}>
        ${this.showLogin ? loginForm : registerForm}
        <span slot="footer"></span>
      </igc-dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'auth-login-dialog': LoginDialogElement;
  }
}

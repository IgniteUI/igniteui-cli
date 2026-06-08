import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcButtonComponent, IgcDialogComponent, IgcIconComponent, IgcInputComponent } from 'igniteui-webcomponents';
import { Authentication } from '../services/authentication.js';
import { ExternalAuth } from '../services/externalAuth.js';
import { UserStore } from '../services/userStore.js';
import type { User } from '../models/user.js';

defineComponents(IgcButtonComponent, IgcDialogComponent, IgcIconComponent, IgcInputComponent);

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
      border-bottom: none;
    }

    .form {
      display: flex;
      flex-flow: column;
      gap: 16px;
      padding: 8px 0 0;
    }

    .form > * {
      width: 100%;
    }

    igc-input {
      --ig-input-group-focused-secondary-color: #239ef0;
      --ig-input-group-focused-border-color: #239ef0;
      --ig-input-group-filled-text-color: #2d2d2d;
    }

    igc-input igc-icon {
      color: #0075d2;
      --ig-icon-size: 1.50rem;
    }

    .error {
      margin: 0;
      font-size: .875rem;
      color: #d32f2f;
    }

    .submit-btn {
      display: block;
    }

    .submit-btn::part(base) {
      width: 100%;
      min-height: 40px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .submit-btn:not([disabled])::part(base) {
      background: #239ef0;
      color: #fff;
    }

    .submit-btn:not([disabled])::part(base):hover {
      background: #1a8fd8;
    }

    .submit-btn[disabled]::part(base) {
      background: #e0e0e0;
      color: #767676;
    }

    .link-btn {
      align-self: center;
      text-align: center;
      color: #0075d2;
      font-size: .875rem;
      cursor: pointer;
      text-decoration: underline;
      text-transform: none;
    }

    .link-btn:hover,
    .link-btn:focus-visible {
      color: #005da8;
    }

    .social-login {
      display: grid;
      gap: 8px;
      padding-top: 16px;
      border-top: 1px solid #d7d7d7;
    }

    .social-btn {
      display: block;
    }

    .social-btn::part(base) {
      width: 100%;
      min-height: 40px;
      color: #fff;
      font-weight: 600;
      text-transform: uppercase;
    }

    .google::part(base)    { background: rgb(255, 19, 74); }
    .facebook::part(base)  { background: rgb(19, 119, 213); }
    .microsoft::part(base) { background: rgb(27, 158, 245); }
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
        <igc-input outlined type="email" name="email" label="Email" autocomplete="email" required>
          <igc-icon slot="suffix" name="account_circle" collection="material"></igc-icon>
        </igc-input>
        <igc-input outlined type="password" name="password" label="Password" autocomplete="current-password" required>
          <igc-icon slot="suffix" name="lock" collection="material"></igc-icon>
        </igc-input>
        ${this.error ? html`<p class="error">${this.error}</p>` : ''}
        <igc-button class="submit-btn" variant="contained" type="submit" ?disabled=${!this._loginValid}>Log In</igc-button>
        <a class="link-btn" @click=${() => { this.showLogin = false; this.error = ''; }} role="button" tabindex="0">Create new account</a>
        ${ExternalAuth.hasProvider() ? html`
          <div class="social-login">
            ${ExternalAuth.hasProvider('google') ? html`
              <igc-button class="social-btn google" variant="contained" type="button"
                @click=${() => ExternalAuth.login('google')}>Sign Up Google</igc-button>
            ` : ''}
            ${ExternalAuth.hasProvider('facebook') ? html`
              <igc-button class="social-btn facebook" variant="contained" type="button"
                @click=${() => ExternalAuth.login('facebook')}>Sign Up Facebook</igc-button>
            ` : ''}
            ${ExternalAuth.hasProvider('microsoft') ? html`
              <igc-button class="social-btn microsoft" variant="contained" type="button"
                @click=${() => ExternalAuth.login('microsoft')}>Sign Up Microsoft</igc-button>
            ` : ''}
          </div>
        ` : ''}
      </form>
    `;

    const registerForm = html`
      <form class="form" @submit=${this.handleRegisterSubmit} @input=${this.checkRegisterValidity} novalidate>
        <igc-input outlined type="text" name="given_name" label="First Name" autocomplete="given-name" required>
          <igc-icon slot="suffix" name="assignment_ind" collection="material"></igc-icon>
        </igc-input>
        <igc-input outlined type="text" name="family_name" label="Last Name" autocomplete="family-name">
          <igc-icon slot="suffix" name="assignment_ind" collection="material"></igc-icon>
        </igc-input>
        <igc-input outlined type="email" name="email" label="Email" autocomplete="email" required>
          <igc-icon slot="suffix" name="account_circle" collection="material"></igc-icon>
        </igc-input>
        <igc-input outlined type="password" name="password" label="Password" autocomplete="new-password" required>
          <igc-icon slot="suffix" name="lock" collection="material"></igc-icon>
        </igc-input>
        ${this.error ? html`<p class="error">${this.error}</p>` : ''}
        <igc-button class="submit-btn" variant="contained" type="submit" ?disabled=${!this._registerValid}>Sign Up</igc-button>
        <a class="link-btn" @click=${() => { this.showLogin = true; this.error = ''; }} role="button" tabindex="0">Have an account?</a>
      </form>
    `;
    return html`
      <igc-dialog .title=${title} .closeOnOutsideClick=${true}>
        <span slot="footer"></span>
        ${this.showLogin ? loginForm : registerForm}
      </igc-dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'auth-login-dialog': LoginDialogElement;
  }
}

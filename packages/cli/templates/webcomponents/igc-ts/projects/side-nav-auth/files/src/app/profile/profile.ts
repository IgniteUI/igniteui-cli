import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent } from 'igniteui-webcomponents';
import { UserStore } from '../authentication/services/userStore.js';

defineComponents(IgcAvatarComponent);

@customElement('app-profile')
export default class ProfilePage extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      padding: 48px 16px;
      width: 100%;
      box-sizing: border-box;
    }

    .card {
      align-self: flex-start;
      width: 100%;
      max-width: 640px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0, 0, 0, .08);
      padding: 32px;
      box-sizing: border-box;
    }

    .header {
      display: flex;
      align-items: center;
      gap: 20px;
      padding-bottom: 24px;
      border-bottom: 1px solid #d7eaf8;
    }

    .avatar {
      flex: 0 0 auto;
      --ig-avatar-background: #e0f2ff;
      --ig-avatar-color: #0075d2;
      --ig-avatar-size: 4rem;
    }

    .intro {
      min-width: 0;
    }

    .status {
      margin: 0 0 4px;
      color: #000;
      font-size: .875rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    .name {
      margin: 0;
      overflow-wrap: anywhere;
      color: #09f;
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.2;
    }

    .description {
      margin: 8px 0 0;
      color: #000;
      font-size: 1rem;
      line-height: 1.5;
    }

    .details {
      margin: 28px 0 0;
      padding: 0;
    }

    .row {
      display: grid;
      grid-template-columns: 140px minmax(0, 1fr);
      gap: 24px;
      padding: 14px 0;
      border-bottom: 1px solid #eef3f7;
    }

    dt {
      color: rgba(0, 0, 0, .62);
      font-size: .875rem;
      font-weight: 600;
      margin: 0;
    }

    dd {
      margin: 0;
      font-size: 1rem;
      color: #2d2d2d;
    }
  `;

  render() {
    const user = UserStore.getUser();
    const initials = user ? UserStore.getInitials(user) : 'U';

    return html`
      <div class="card">
        <div class="header">
          <igc-avatar
            class="avatar"
            shape="circle"
            src=${user?.picture ?? ''}
            initials=${user?.picture ? '' : initials}
          ></igc-avatar>
          <div class="intro">
            <p class="status">Signed in</p>
            <h1 class="name">${user?.name || 'Your profile'}</h1>
            <p class="description">Your account details are available on this protected route.</p>
          </div>
        </div>
        <dl class="details">
          <div class="row">
            <dt>First name</dt>
            <dd>${user?.given_name || 'Not provided'}</dd>
          </div>
          <div class="row">
            <dt>Last name</dt>
            <dd>${user?.family_name || 'Not provided'}</dd>
          </div>
          <div class="row">
            <dt>Email</dt>
            <dd>${user?.email || 'No email available'}</dd>
          </div>
        </dl>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-profile': ProfilePage;
  }
}

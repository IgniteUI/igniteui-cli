import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { UserStore } from '../../authentication/services/userStore.js';

@customElement('app-profile')
export default class ProfilePage extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      padding: 48px 16px;
      width: 100%;
    }

    .card {
      display: flex;
      flex-flow: column;
      align-items: center;
      gap: 12px;
      width: min(380px, 100%);
      padding: 32px 24px;
      border-radius: 8px;
      background: #fff;
      box-shadow: 0 2px 12px rgba(0, 0, 0, .08);
    }

    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: #239ef0;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .initials {
      font-size: 1.75rem;
      font-weight: 700;
      color: #fff;
      line-height: 1;
    }

    .name {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 600;
      color: #2d2d2d;
    }

    .email {
      margin: 0;
      font-size: .9375rem;
      color: #767676;
    }
  `;

  render() {
    const user = UserStore.getUser();
    const initials = user ? UserStore.getInitials(user) : '';

    return html`
      <div class="card">
        <div class="avatar">
          ${user?.picture
            ? html`<img class="avatar-img" src=${user.picture} alt=${user.name} />`
            : html`<span class="initials">${initials}</span>`
          }
        </div>
        <h2 class="name">${user?.given_name} ${user?.family_name}</h2>
        <p class="email">${user?.email}</p>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-profile': ProfilePage;
  }
}

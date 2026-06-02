import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-home')
export class HomeComponent extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      width: 100%;
      padding: 24px;
      text-align: center;
      box-sizing: border-box;
    }

    h1 {
      color: #09f;
      font-size: 80px;
      font-weight: 300;
      line-height: 1.2;
      margin: 0 0 16px;
    }

    h4 {
      font-size: 28px;
      font-weight: 400;
      line-height: 1.4;
      margin: 0 0 32px;
      max-width: 1120px;
    }

    p {
      font-size: 16px;
      margin: 0px 0px 8px 0px;
    }

    p:nth-last-child(2) {
      padding-top: 16px;
    }

    .content__container--wide {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      gap: 24px;
    }

    .content__link--github {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }

    .content__link--github::before {
      content: "";
      display: block;
      width: 24px;
      height: 24px;
      margin-right: 8px;
      background-image: url("./src/assets/GitHub/github.svg");
      background-repeat: no-repeat;
      background-size: 24px 24px;
      flex: 0 0 24px;
    }

    img {
      margin-bottom: 32px;
      max-height: 480px;
      max-width: 100%;
    }

    a {
      font-size: 16px;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 40px;
      }

      h4 {
        font-size: 20px;
      }
    }
  `;

  render() {
    return html`
      <h1>Welcome to Ignite UI for Web Components!</h1>
      <h4>A complete library of 50+ UI components for building modern web applications with reusable Web Components.</h4>
      <img src="./src/assets/astronaut-components.svg" alt="Ignite UI for Web Components">
      <p class="ig-typography__subtitle-1">Discover more at</p>
      <p>
        <a href="https://www.infragistics.com/products/ignite-ui-web-components" target="_blank" rel="noopener noreferrer">
          www.infragistics.com/products/ignite-ui-web-components
        </a>
      </p>
      <p>
        <a href="https://www.infragistics.com/products/indigo-design" target="_blank" rel="noopener noreferrer">
          www.infragistics.com/products/indigo-design
        </a>
      </p>
      <p class="ig-typography__subtitle-1">We are also on GitHub</p>
      <p class="content__container--wide">
        <a href="https://github.com/IgniteUI/igniteui-webcomponents" target="_blank" rel="noopener noreferrer" class="content__link--github">
          Ignite UI Web Components
        </a>
        <a href="https://github.com/IgniteUI/igniteui-cli" target="_blank" rel="noopener noreferrer" class="content__link--github">
          Ignite UI CLI
        </a>
      </p>
    `;
  }
}

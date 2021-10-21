import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lit-home')
export class HomeComponent extends LitElement {
  static styles = css`
    p {
      margin: 0px 0px 8px 0px;
    }
    img {
      margin-bottom: 48px;
      max-height: 480px;
      max-width: 100%;
    }
  `;

  render() {
    return html`
      <h1>Welcome to Ignite UI for Web Components!</h1>
      <h4>A complete library of UI components, giving you the ability to build modern web applications using encapsulation and the concept of reusable components in a dependency-free approach.</h4>
      <img src="./src/assets/astronaut-components.svg" alt="indigoDesign">
      <p class="igx-typography__subtitle-1">Discover more at</p>
      <p>
        <a href="https://www.infragistics.com/products/ignite-ui-web-components" target="_blank">
          www.infragistics.com/products/ignite-ui-web-components
        </a>
      </p>
      <p>
        <a href="https://www.infragistics.com/products/indigo-design" target="_blank">
          www.infragistics.com/products/indigo-design
        </a>
      </p>
      <p class="igx-typography__subtitle-1">We are also on GitHub</p>
      <p class="content__container--wide">
        <a href="https://github.com/IgniteUI/igniteui-cli" target="_blank">
          <span class="content__link-image"></span>Ignite UI CLI
        </a>
      </p>
    `;
  }
}

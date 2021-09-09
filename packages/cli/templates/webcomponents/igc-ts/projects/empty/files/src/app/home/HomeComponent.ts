import { html, css, LitElement } from 'lit';

export class HomeComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--test-component-test-text-color, #000);
    }

	.content {
		width: 100%;
		display: flex;
		text-align: center;
		flex-flow: column nowrap;
		justify-content: stretch;
		align-items: center;
		padding: 40px 24px 40px 24px;
		overflow: inherit;
	}

	.content p {
		margin: 0px 0px 8px 0px;
	}

	.content img {
		margin-bottom: 48px;
		max-height: 480px;
		max-width: 100%;
	}
  `;

  render() {
    return html`
    <div class="content">
        <h1 class="content__header content__subject">Welcome to Ignite UI for Web Components!</h1>
        <h4 class="content__subject">A complete library of UI components, giving you the ability to build modern web applications using encapsulation and the concept of reusable components in a dependency-free approach.</h4>
        <img src="./assets/astronaut-components.svg" class="content__image" alt="indigoDesign">
        <p class="igx-typography__subtitle-1">Discover more at</p>
        <p>
            <a href="https://www.infragistics.com/products/ignite-ui-web-components" target="_blank" class="content__link igx-typography__body-2">
            www.infragistics.com/products/ignite-ui-web-components
            </a>
        </p>
        <p>
            <a href="https://www.infragistics.com/products/indigo-design" target="_blank" class="content__link igx-typography__body-2">
                www.infragistics.com/products/indigo-design
            </a>
        </p>
        <p class="igx-typography__subtitle-1">We are also on GitHub</p>
        <p class="content__container--wide">
            <a href="https://github.com/IgniteUI/igniteui-cli" target="_blank" class="content__link--github igx-typography__body-2">
                <span class="content__link-image"></span>Ignite UI CLI
            </a>
        </p>
    </div>
    `;
  }
}

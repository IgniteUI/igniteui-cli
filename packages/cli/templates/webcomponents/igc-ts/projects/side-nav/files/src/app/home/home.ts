import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcIconComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcIconComponent);

@customElement('app-home')
export class HomeComponent extends LitElement {
  static styles = css`
    :host {
      display: flex;
      width: 100%;
      min-height: 100%;
    }

    .home {
      width: 100%;
      max-width: 920px;
      margin: auto;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: "Titillium Web", "Segoe UI", Arial, sans-serif;
    }

    .home__intro {
      max-width: 720px;
      margin: 0 auto 24px;
      text-align: center;
    }

    h1 {
      margin: 0 0 12px;
      color: #09f;
      font-size: 3rem;
      font-weight: 600;
      line-height: 1.2;
    }

    .home__description {
      margin: 0;
      color: #000;
      font-size: 1.125rem;
      line-height: 1.5;
    }

    .home__image {
      display: block;
      width: 500px;
      height: 350px;
      margin: 0 auto 28px;
      max-width: 100%;
      object-fit: contain;
    }

    .home__resources {
      display: grid;
      grid-template-columns: repeat(2, 300px);
      justify-content: center;
      margin: 0 auto;
      gap: 12px 64px;
    }

    .home__resource {
      display: flex;
      align-items: center;
      min-height: 64px;
      padding: 6px 0;
      color: rgba(0, 0, 0, .74);
      text-align: left;
      text-decoration: none;
    }

    .home__resource:hover strong {
      text-decoration: underline;
    }

    .home__resource igc-icon {
      flex: 0 0 28px;
      margin-right: 16px;
      color: #09f;
      font-size: 28px;
    }

    .home__resource strong,
    .home__resource small {
      display: block;
    }

    .home__resource strong {
      margin-bottom: 2px;
      color: #731963;
      font-size: 1rem;
    }

    .home__resource small {
      color: #000;
      font-size: 0.875rem;
      line-height: 1.4;
    }

    @media (max-width: 768px) {
      .home {
        padding: 32px 16px;
      }

      h1 {
        font-size: 2.25rem;
      }

      .home__image {
        width: 100%;
        height: 240px;
      }

      .home__resources {
        grid-template-columns: minmax(0, 300px);
        justify-content: center;
        gap: 4px;
      }
    }
  `;

  render() {
    return html`
      <main class="home">
        <div class="home__intro">
          <h1>Welcome to Ignite UI for Web Components!</h1>
          <p class="home__description">
            A routed application shell with a responsive side navigation drawer and curated Ignite UI resources.
          </p>
        </div>

        <img
          src="./src/assets/astronaut-components.svg"
          class="home__image"
          alt="Ignite UI for Web Components"
        >

        <div class="home__resources" role="navigation" aria-label="Ignite UI resources">
          <a class="home__resource" href="https://www.infragistics.com/products/ignite-ui-web-components" target="_blank" rel="noopener noreferrer">
            <igc-icon name="apps" collection="material"></igc-icon>
            <span>
              <strong>Component Demos</strong>
              <small>Browse Web Components demos and examples</small>
            </span>
          </a>
          <a class="home__resource" href="https://github.com/IgniteUI/igniteui-webcomponents" target="_blank" rel="noopener noreferrer">
            <igc-icon name="code" collection="material"></igc-icon>
            <span>
              <strong>Web Components Repository</strong>
              <small>Explore Ignite UI for Web Components on GitHub</small>
            </span>
          </a>
          <a class="home__resource" href="https://github.com/IgniteUI/igniteui-cli" target="_blank" rel="noopener noreferrer">
            <igc-icon name="build" collection="material"></igc-icon>
            <span>
              <strong>Ignite UI CLI</strong>
              <small>Review the CLI source and project tooling</small>
            </span>
          </a>
          <a class="home__resource" href="https://www.figma.com/@infragistics" target="_blank" rel="noopener noreferrer">
            <igc-icon name="palette" collection="material"></igc-icon>
            <span>
              <strong>Figma UI Kit</strong>
              <small>Open Infragistics design resources</small>
            </span>
          </a>
        </div>
      </main>
    `;
  }
}

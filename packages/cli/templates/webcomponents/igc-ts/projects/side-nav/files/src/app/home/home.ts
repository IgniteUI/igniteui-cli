import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcIconComponent,
  registerIconFromText,
} from 'igniteui-webcomponents';

const icons = [
  {
    name: 'apps',
    value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"/></svg>',
  },
  {
    name: 'build',
    value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>',
  },
  {
    name: 'code',
    value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>',
  },
  {
    name: 'palette',
    value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3C7 3 3 6.6 3 11c0 3.3 2.7 6 6 6h1.5c.8 0 1.5.7 1.5 1.5 0 .4-.2.7-.4 1-.2.3-.3.6-.3 1 0 .8.7 1.5 1.5 1.5H13c5 0 9-4 9-9 0-5.5-4-10-10-10zM6.5 11C5.7 11 5 10.3 5 9.5S5.7 8 6.5 8 8 8.7 8 9.5 7.3 11 6.5 11zm3-4C8.7 7 8 6.3 8 5.5S8.7 4 9.5 4s1.5.7 1.5 1.5S10.3 7 9.5 7zm5 0c-.8 0-1.5-.7-1.5-1.5S13.7 4 14.5 4 16 4.7 16 5.5 15.3 7 14.5 7zm3 4c-.8 0-1.5-.7-1.5-1.5S16.7 8 17.5 8 19 8.7 19 9.5 18.3 11 17.5 11z"/></svg>',
  },
];

defineComponents(IgcIconComponent);
icons.forEach((icon) => registerIconFromText(icon.name, icon.value, 'material'));

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

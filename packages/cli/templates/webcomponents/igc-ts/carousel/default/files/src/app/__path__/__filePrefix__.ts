import { html, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcCarouselComponent,
  IgcCarouselSlideComponent,
} from 'igniteui-webcomponents';

defineComponents(
  IgcCarouselComponent,
  IgcCarouselSlideComponent,
);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    igc-carousel {
      height: 260px;
    }
    .slide {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: white;
      font: 600 24px sans-serif;
    }
  `;

  render() {
    return html`
      <igc-carousel>
        <igc-carousel-slide>
          <div class="slide" style="background: #4a6fa5;">Slide 1</div>
        </igc-carousel-slide>
        <igc-carousel-slide>
          <div class="slide" style="background: #6b8f71;">Slide 2</div>
        </igc-carousel-slide>
        <igc-carousel-slide>
          <div class="slide" style="background: #a5644a;">Slide 3</div>
        </igc-carousel-slide>
      </igc-carousel>
    `;
  }
}

import {
  defineComponents,
  IgcAvatarComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcAvatarComponent);

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="description">
        <p>igc-avatar component</p>
      </div>
      <igc-avatar
        size="large"
        shape="circle"
        src="./src/assets/avatar1.jpg"
        alt="My avatar"
      >
      </igc-avatar>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));

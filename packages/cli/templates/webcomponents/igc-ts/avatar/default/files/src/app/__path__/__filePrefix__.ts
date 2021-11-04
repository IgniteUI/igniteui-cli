import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
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

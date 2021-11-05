import 'igniteui-webcomponents';

export default class $(ClassName) extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="description">
        <p>igc-list component</p>
      </div>
      <igc-list>
        <igc-list-header>
          <h1>Job Positions</h1>
        </igc-list-header>
        <igc-list-item>
          <igc-avatar slot="start" src="https://www.infragistics.com/angular-demos/assets/images/men/2.jpg" shape="circle">AA</igc-avatar>
          <h2 slot="title">Abraham Lee</h2>
          <span slot="subtitle">Software Developer</span>
          <igc-button slot="end" variant="outlined">Text</igc-button>
          <igc-button slot="end" variant="outlined">Call</igc-button>
        </igc-list-item>
        <igc-list-item>
          <igc-avatar slot="start" src="https://www.infragistics.com/angular-demos/assets/images/men/1.jpg" shape="circle">AA</igc-avatar>
          <h2 slot="title">John Smith</h2>
          <span slot="subtitle">Team Lead</span>
          <igc-button slot="end" variant="outlined">Text</igc-button>
          <igc-button slot="end" variant="outlined">Call</igc-button>
        </igc-list-item>
        <igc-list-item>
          <igc-avatar slot="start" src="https://www.infragistics.com/angular-demos/assets/images/men/3.jpg" shape="circle">AA</igc-avatar>
          <h2 slot="title">Jonathan Deberkow</h2>
          <span slot="subtitle">UX Designer</span>
          <igc-button slot="end" variant="outlined">Text</igc-button>
          <igc-button slot="end" variant="outlined">Call</igc-button>
        </igc-list-item>
    </igc-list>
    `;
  }
}

customElements.define('app-$(path)', $(ClassName));

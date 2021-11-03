import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'igniteui-webcomponents';

@customElement('lit-$(path)')
export default class $(ClassName) extends LitElement {

  render() {
    const employeeData = [
      {
        name: 'John Smith',
        position: 'Software Developer',
        avatar:
          'https://www.infragistics.com/angular-demos/assets/images/men/1.jpg',
      },
      {
        name: 'Abraham Lee',
        position: 'Team Lead',
        avatar:
          'https://www.infragistics.com/angular-demos/assets/images/men/2.jpg',
      },
      {
        name: 'Jonathan Deberkow',
        position: 'UX Designer',
        avatar:
          'https://www.infragistics.com/angular-demos/assets/images/men/3.jpg',
      },
    ];
    return html`
    <igc-list>
      <igc-list-header>
        <h1>Job Positions</h1>
      </igc-list-header>
      ${employeeData.map((employee) => {
        return html`
          <igc-list-item>
            <igc-avatar slot="start" src="./src/assets/avatar1.jpg" shape="circle"
              >AA</igc-avatar
            >
            <h2 slot="title">${employee.name}</h2>
            <span slot="subtitle">${employee.position}</span>
            <igc-button slot="end" variant="outlined"
              >Text</igc-button
            >
            <igc-button slot="end" variant="outlined"
              >Call</igc-button
            >
          </igc-list-item>
        `;
      })}
    </igc-list>
    `;
  }
}

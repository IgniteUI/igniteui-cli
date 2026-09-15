import { html, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  defineComponents,
  IgcAvatarComponent,
  IgcListComponent,
  IgcListItemComponent,
  IgcVirtualScrollComponent,
  type VirtualScrollItemContext,
  type VirtualScrollItemTemplate,
} from 'igniteui-webcomponents';

defineComponents(
  IgcVirtualScrollComponent,
  IgcListComponent,
  IgcListItemComponent,
  IgcAvatarComponent,
);

interface Employee {
  name: string;
  email: string;
}

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  // host must have an explicit width - it's a flex item with no intrinsic size
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    igc-virtual-scroll {
      height: 320px;
    }
  `;

  private employees: Employee[] = Array.from({ length: 1000 }, (_, i) => ({
    name: `Employee ${i + 1}`,
    email: `employee${i + 1}@example.com`,
  }));

  private itemTemplate: VirtualScrollItemTemplate<Employee> = (
    ctx: VirtualScrollItemContext<Employee>
  ) => html`
    <igc-list-item>
      <igc-avatar slot="start" shape="circle" initials=${ctx.value.name.slice(0, 2)}></igc-avatar>
      <span slot="title">${ctx.value.name}</span>
      <span slot="subtitle">${ctx.value.email}</span>
    </igc-list-item>
  `;

  render() {
    return html`
      <igc-list>
        <igc-virtual-scroll
          .data=${this.employees}
          .itemTemplate=${this.itemTemplate as VirtualScrollItemTemplate<unknown>}
        ></igc-virtual-scroll>
      </igc-list>
    `;
  }
}

---
title: Web Components Grid Cascading combos - Ignite UI for Web Components
_description: Perform updating via cascading combos in Grid, using Web Components Grid. See demos & examples!
_keywords: Web Components, Grid, IgcGrid, Ignite UI for Web Components, Infragistics
_license: commercial
_language: en
sharedComponents: ["Grid"]
mentionedTypes: ["Column", "Combo"]
namespace: Infragistics.Controls
_tocName: Cascading Combos
_premium: true
---

# Web Components Grid with Cascading Combos

The Grid's Editing functionality provides with the opportunity to use Cascading Combobox components. By selecting the value in any preceding [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html), the users will receive only the data that is relevant to their selection within the next Web Components Combobox component.

## Angular Grid with Cascading Combos Sample Overview

The sample below demonstrates how [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html) works with nested Cascading [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html) components.

<!-- ComponentStart: Grid -->

```typescript
export class WorldCitiesAbove500KItem {
    public constructor(init: Partial<WorldCitiesAbove500KItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public Name: string;
    public Country: string;
    public Region: string;
    public Population: number;

}
export class WorldCitiesAbove500K extends Array<WorldCitiesAbove500KItem> {
    public constructor(items: Array<WorldCitiesAbove500KItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new WorldCitiesAbove500KItem({ ID: 10000, Name: `Shanghai`, Country: `China`, Region: `Shanghai`, Population: 22315474 }),
                new WorldCitiesAbove500KItem({ ID: 10001, Name: `Istanbul`, Country: `Turkey`, Region: `Istanbul`, Population: 14804116 }),
                new WorldCitiesAbove500KItem({ ID: 10002, Name: `Buenos Aires`, Country: `Argentina`, Region: `Buenos Aires F.D.`, Population: 13076300 }),
                // ... 921 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<!-- ComponentEnd: Grid -->

## Setup

In order enable column editing, make sure [`editable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#editable) property is set to `true`.

Once the column editing is enabled, you can start by adding your [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html). Please note that here in order to have only one single selection available, you will need to use set the [`singleSelect`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#singleSelect) property.

<!-- WebComponents, Blazor, React -->

To get started with the [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html), first you need to import it:

<!-- WebComponents -->

```ts
import { IgcComboComponent, defineAllComponents } from 'igniteui-webcomponents';
defineAllComponents();
```

Then you should define the column template with the combo:

```ts
public webGridCountryDropDownTemplate: IgcRenderFunction<IgcCellTemplateContext> = (ctx: IgcCellTemplateContext) => {
    const id = ctx.cell.id.rowID;
    const comboId = "country_" + id;
    return html`<igc-combo placeholder="Choose Country..." value-key="Country" display-key="Country" id="${comboId}" single-select></igc-combo>`
}
```

- [`displayKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#displayKey) - Required for object arrays - Specifies which property will be used for the items' text. If no value is specified for [`displayKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#displayKey), the  combo will use the specified [`valueKey`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html#valueKey) (if any).

In order to handle the selection change, we need the `onChange` event. The emitted event arguments contain information about the selection prior to the change, the current selection and the items that were added or removed. Therefore, it will filter the values based on the selection of the previous combo.

```ts
 public countries = [...this.worldCitiesAbove500K].filter(x => this.countryNames.indexOf(x.Country) !== -1).filter((value, index, array) => array.findIndex(x => x.Country === value.Country) === index);
public bindEventsCountryCombo(rowId: any, cell: any) {
        const comboId = "country_" + rowId;
        var combo = document.getElementById(comboId) as IgcComboComponent<any>;
        combo?.addEventListener("igcChange", (e:any) => {
            const value = e.detail.newValue[0];
            cell.update(value);
            const nextCombo = document.getElementById("region_" + cell.id.rowID) as IgcComboComponent<any>;
            const nextProgress = document.getElementById("progress_region_" + cell.id.rowID) as IgcLinearProgressComponent;
            if (value === "") {
                nextCombo.deselect(nextCombo.value);
                nextCombo.disabled = true;
                nextCombo.data = [];
            } else {
                nextProgress.style.display = "block";
                setTimeout(() => {
                    nextProgress.style.display = "none";
                    nextCombo.disabled = false;
                    nextCombo.data = this.regions.filter(x => x.Country === value);
                }, 2000);

            }
        });
        combo?.addEventListener("igcOpening", (e:any) => {
            var currCombo = e.target;
            if (currCombo.data.length === 0) {
                combo.data = this.countries;
            };
        });
    }
```

<!-- end: WebComponents, Blazor, React -->

<!-- WebComponents -->

And lastly, adding the [`IgcLinearProgressComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclinearprogresscomponent.html), which is required while loading the list of data.
The `id` is necessary to set the value of `id` attribute.

```ts
    public webGridRegionDropDownTemplate: IgcRenderFunction<IgcCellTemplateContext> = (ctx: IgcCellTemplateContext) => {
        const id = ctx.cell.id.rowID;
        const comboId = "region_" + id;
        const progressId = "progress_region_" + id;
        return html`<div style="display:flex; flex-direction: column;"><igc-combo placeholder="Choose Region..." disabled value-key="Region" display-key="Region" id="${comboId}" single-select></igc-combo>
        <igc-linear-progress style="display:none;" indeterminate id="${progressId}"></<igc-linear-progress><div>`;
    }
```

<!-- end: WebComponents -->

## Known Issues and Limitations

|Limitation|Description|
|--- |--- |
| Combo drop-down list may hide behind other UI elements. | Due to the stacking order of elements in the grid the combo drop-down may hide behind other elements like header, footers etc. |

## Web Components Grid API Members

- [`IgcGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridcomponent.html)
- [`IgcComboComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccombocomponent.html)
- [`IgcLinearProgressComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclinearprogresscomponent.html)

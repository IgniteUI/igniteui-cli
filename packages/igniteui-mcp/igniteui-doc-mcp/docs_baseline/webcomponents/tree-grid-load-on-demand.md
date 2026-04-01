---
title: Web Components Tree Grid | Fastest Web Components Tree Table | Infragistics
_description: The Ignite UI for Web Components Tree Grid provides the necessary tools to load child data on demand when a parent row is expanded. That way the volume of data would be greatly reduced and can be retrieved only when the user needs it.
_keywords: Web Components tree grid, igniteui for Web Components, infragistics
_license: commercial
mentionedTypes: ["TreeGrid"]
namespace: Infragistics.Controls
_tocName: Load On Demand
_premium: true
---

# Tree Grid Load On Demand

The Ignite UI for Web Components Tree Grid can be rendered in such way that it requires the minimal amount of data to get from the server so the user could see it as quickly as possible. Then, only after the user expands a row, the children for that particular parent row will be loaded. This mechanism, also known as Load on Demand, can be easily configured to work with any remote data.

## Web Components Tree Grid Load On Demand Example

```typescript
export class EmployeesFlatDataItem {
    public constructor(init: Partial<EmployeesFlatDataItem>) {
        Object.assign(this, init);
    }

    public Age: number;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public Phone: string;
    public OnPTO: boolean;
    public ParentID: number;
    public Title: string;
    public hasEmployees: boolean;

}
export class EmployeesFlatData extends Array<EmployeesFlatDataItem> {
    public constructor() {
        super();
        this.push(new EmployeesFlatDataItem(
        {
            Age: 55,
            HireDate: `2008, 3, 20`,
            ID: 1,
            Name: `Johnathan Winchester`,
            Phone: `0251-031259`,
            OnPTO: false,
            ParentID: -1,
            Title: `Development Manager`
        }));
        this.push(new EmployeesFlatDataItem(
        {
            Age: 42,
            HireDate: `2014, 1, 22`,
            ID: 4,
            Name: `Ana Sanders`,
            Phone: `(21) 555-0091`,
            OnPTO: true,
            ParentID: -1,
            Title: `CEO`
        }));
        this.push(new EmployeesFlatDataItem(
        {
            Age: 49,
            HireDate: `2014, 1, 22`,
            ID: 18,
            Name: `Victoria Lincoln`,
            Phone: `(071) 23 67 22 20`,
            OnPTO: true,
            ParentID: -1,
            Title: `Accounting Manager`
        }));
        // ... 15 more items
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Usage

The Load on Demand feature is compatible with both types of Tree Grid data sources - primary and foreign keys or child collection. You only need to load the root level data in the Tree Grid and specify the necessary keys for one of the data source types. In order to load the child rows when the user expands a row, the Tree Grid provides the callback input property [`loadChildrenOnDemand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html#loadChildrenOnDemand).

<!-- WebComponents -->

```html
<igc-tree-grid id="treeGrid"></igc-tree-grid>
```

```ts
constructor() {
    var treeGrid = document.getElementById("treeGrid") as IgcTreeGridComponent;
    treeGrid.data = this.employeesFlatData;
    treeGrid.loadChildrenOnDemand = (parentID: any, done: (children: any[]) => void) => {
    this.getData(parentID, (children) => done(children));
    };
}
```

The LoadChildrenOnDemand callback provides two parameters:

- parentID - the ID of the parent row that is being expanded.
- done - callback that should be called with the children when they are retrieved from the server.

```typescript
public loadChildren = (parentID: any, done: (children: any[]) => void) => {
    this.getData(parentID, (children) => done(children));
}
```

<!-- end: WebComponents -->

After the user clicks the expand icon, it is replaced by a loading indicator. When the done callback is called, the loading indicator disappears and the children are loaded. The Tree Grid adds the children to the underlying data source and populates the necessary keys automatically.

### Expanding Indicator Visibility

If you have a way to provide an information whether a row has children prior to its expanding, you could use the [`hasChildrenKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html#hasChildrenKey) input property. This way you could provide a boolean property from the data objects which indicates whether an expansion indicator should be displayed.

```html
<igc-tree-grid id="treeGrid" primary-key="ID" foreign-key="ParentID" has-children-key="hasEmployees"></igc-tree-grid>
```

Note that setting the [`hasChildrenKey`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html#hasChildrenKey) property is not required. In case you don't provide it, expansion indicators will be displayed for each row. After expanding a row that has no children, you still need to call the done callback with undefined or empty array. In this case after the loading indicator disappears, the expansion indicator never shows up.

### Custom Loading Indicator

<!-- WebComponents -->

If you want to provide your own custom loading indicator, you can use the [`rowLoadingIndicatorTemplate`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html#rowLoadingIndicatorTemplate) option to set a custom template.The following code snippet demonstrates how set to it:

```ts
constructor() {
    var treeGrid = document.getElementById("treeGrid") as IgcTreeGridComponent;
    treeGrid.data = this.employeesFlatData;
    treeGrid.rowLoadingIndicatorTemplate = this.rowLoadingTemplate;
    treeGrid.loadChildrenOnDemand = (parentID: any, done: (children: any[]) => void) => {
               this.getData(parentID, (children) => done(children));
    };

}
public rowLoadingTemplate() {
    return html`<igc-icon name="loop" collection="material"></igc-icon>`;
}
```

<!-- end: WebComponents -->

## API References

- [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

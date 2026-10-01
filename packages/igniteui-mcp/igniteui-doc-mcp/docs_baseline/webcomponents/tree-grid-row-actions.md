---
title:  Row actions in Web Components Tree Grid - Infragistics
description: The IgcTreeGrid provides the ability to use ActionStrip and utilize CRUD for row/cell components and row pinning.
keywords: "Web Components, Tree Grid, IgcTreeGrid, Ignite UI for Web Components, Infragistics"
license: commercial
_canonicalLink: "grids/grid/row-actions"
llms:
  description: "The Ignite UI for Web Components Row Actions feature in Web Components Tree Grid enables developers to use an ActionStrip and utilize CRUD for row/cell components and row pinning."
_componentKey: TreeGrid
_tocName: Row Actions
_premium: true
---
# Row Actions in Web Components Tree Grid

The Ignite UI for Web Components Row Actions feature in Web Components Tree Grid enables developers to use an [`IgcActionStrip`](mcp:get_api_reference?platform=webcomponents&component=IgcActionStripComponent) and utilize CRUD for row/cell components and row pinning. There are several predefined UI controls for these operations that are applicable to a specific row in the [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent) – editing and pinning.

## Usage

The predefined actions UI components are:

- [`IgcGridEditingActions`](mcp:get_api_reference?platform=webcomponents&component=IgcGridEditingActionsComponent) - includes functionality and UI specifically designed for the [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent) editing. It allows you to quickly toggle edit mode for cells or rows, depending on the [`IgcTreeGrid.rowEditable`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent&member=rowEditable) option and row deletion of the [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent).

- [`IgcGridPinningActions`](mcp:get_api_reference?platform=webcomponents&component=IgcGridPinningActionsComponent) - includes functionality and UI specifically designed for the [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent) row pinning. It allows you to quickly pin rows and navigate between pinned rows and their disabled counterparts.

They are added inside the [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent) and this is all needed to have an [`IgcActionStrip`](mcp:get_api_reference?platform=webcomponents&component=IgcActionStripComponent) providing default interactions.

**Note:** 
When [`IgcActionStripComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcActionStripComponent) is a child component of the [`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent), hovering a row will automatically show the UI.

## Custom Implementation

These components expose templates giving flexibility for customization. For instance, if we would like to use the [`IgcActionStrip`](mcp:get_api_reference?platform=webcomponents&component=IgcActionStripComponent) for a Gmail scenario with row actions such as **delete**, **edit** and etc. You can simply create button component with icon, add click event to it and insert it into the [`IgcActionStrip`](mcp:get_api_reference?platform=webcomponents&component=IgcActionStripComponent).

```html
<igc-tree-grid>
    <igc-action-strip #actionstrip>
        <igc-grid-pinning-actions></igc-grid-pinning-actions>
        <igc-grid-editing-actions edit-row="true" delete-row="true"></igc-grid-editing-actions>
    </igc-action-strip>
</igc-tree-grid>
```

```typescript
export class EmployeesFlatDetailsItem {
    public constructor(init: Partial<EmployeesFlatDetailsItem>) {
        Object.assign(this, init);
    }

    public Address: string;
    public Age: number;
    public City: string;
    public Country: string;
    public Fax: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public ParentID: number;
    public Phone: string;
    public PostalCode: number;
    public Title: string;
    public LastName: string;
    public FullAddress: string;

}
export class EmployeesFlatDetails extends Array<EmployeesFlatDetailsItem> {
    public constructor(items: Array<EmployeesFlatDetailsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatDetailsItem({ Address: `Obere Str. 57`, Age: 55, City: `Berlin`, Country: `Germany`, Fax: `030-0076545`, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, ParentID: -1, Phone: `030-0074321`, PostalCode: 12209, Title: `Development Manager`, LastName: `Winchester`, FullAddress: `Obere Str. 57, Berlin, Germany` }),
                new EmployeesFlatDetailsItem({ Address: `Avda. de la Constitución 2222`, Age: 42, City: `México D.F.`, Country: `Mexico`, Fax: `(51) 555-3745`, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, ParentID: -1, Phone: `(5) 555-4729`, PostalCode: 5021, Title: `CEO`, LastName: `Sanders`, FullAddress: `Avda. de la Constitución 2222, México D.F., Mexico` }),
                new EmployeesFlatDetailsItem({ Address: `Mataderos 2312`, Age: 49, City: `México D.F.`, Country: `Mexico`, Fax: `(5) 555-3995`, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, ParentID: -1, Phone: `(5) 555-3932`, PostalCode: 5023, Title: `Accounting Manager`, LastName: `Lincoln`, FullAddress: `Mataderos 2312, México D.F., Mexico` }),
                // ... 15 more items
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

## API References
[`IgcTreeGrid`](mcp:get_api_reference?platform=webcomponents&component=IgcTreeGridComponent)
[`IgcGridPinningActions`](mcp:get_api_reference?platform=webcomponents&component=IgcGridPinningActionsComponent)
[`IgcGridEditingActions`](mcp:get_api_reference?platform=webcomponents&component=IgcGridEditingActionsComponent)

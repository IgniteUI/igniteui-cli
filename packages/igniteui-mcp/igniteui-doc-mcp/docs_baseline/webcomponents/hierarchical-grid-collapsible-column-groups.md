---
title: Web Components Hierarchical Grid Collapsible Column Groups - Ignite UI for Web Components
_description: Take advantage of the capability to show\hide smaller and concise set of data with the use of collapsible column groups in our Web Components Hierarchical Grid. Try it now!
_keywords: Web Components, Hierarchical Grid, IgcHierarchicalGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["ColumnGroup"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/collapsible-column-groups
_tocName: Collapsible Column Groups
_premium: true
---

# Web Components Hierarchical Grid Collapsible Column Groups Overview

The Ignite UI for Web Components Collapsible Column Groups feature in Web Components Hierarchical Grid allows you to organize and manage multiple levels of nested columns and column groups in the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) by grouping them together and providing the option to collapse or expand these groups for improved data visualization and navigation.

## Web Components Hierarchical Grid Collapsible Column Groups Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Setup

To get started with the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) and the **Collapsible multi-column headers** feature, first you need to install Ignite UI for Web Components by typing the following command:

```cmd
npm install --save igniteui-webcomponents-core
npm install --save igniteui-webcomponents-grids
```

For a complete introduction to the Ignite UI for Web Components, read the [getting started](../../general-getting-started.md) topic.

Also, we strongly suggest that you take a brief look at [multi-column headers](multi-column-headers.md) topic, to see more detailed information on how to setup the column groups in your grid.

## Usage

**Collapsible Column Groups** is a part of the multi-column headers feature which provides a way to collapse/expand a column group to a smaller set of data. When a column group is collapsed, a subset of the columns will be shown to the end-user and the other child columns of the group will hide. Each collapsed/expanded column can be bound to the grid data source, or it may be unbound, thus calculated.

In order to define a column group as collapsible, you need to set the [`collapsible`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumngroupcomponent.html#collapsible) property on the [`columnGroup`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#columnGroup) to **true**.

You need to define the property [`visibleWhenCollapsed`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#visibleWhenCollapsed) to at least two child columns. At least one column must be visible when the group is collapsed ([`visibleWhenCollapsed`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#visibleWhenCollapsed) set to **true**) and at least one column must be hidden when the group is expanded ([`visibleWhenCollapsed`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#visibleWhenCollapsed) set to `false`), otherwise the **collapsible functionality will be disabled**. If [`visibleWhenCollapsed`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html#visibleWhenCollapsed) is not specified for some of the child columns, then this column will be always visible regardless of whether the parent state is expanded or collapsed.

Let's see the markup below:

```html
<igc-column-group header="Customer Information" collapsible="true"> <!-- Initially the column groups will be expanded--->
    <!--The column below will be visible when its parent is collapsed-->
    <igc-column field="CustomerName" header="Fullname" data-type="String" visible-when-collapsed="true"></igc-column>
    <!--The three columns below will be visible when its parent is expanded-->
    <igc-column field="CustomerID" header="Customer ID" data-type="String" visible-when-collapsed="false"></igc-column>
    <igc-column field="FirstName" header="First Name" data-type="String" visible-when-collapsed="false">
    </igc-column>
    <igc-column field="LastName" header="Last Name" data-type="String" visible-when-collapsed="false">
    </igc-column>
    <igc-column-group header="Customer Address"> <!--This column visibility will not be changed based on parent expand/collapsed state-->
        <igc-column field="Country" header="Country" data-type="String" sortable="true">
        </igc-column>
        <igc-column field="City" header="City" data-type="String" sortable="true">
        </igc-column>
    </igc-column-group>
</igc-column-group>
```

To summarize, every child column has three states:

- Can be always visible, no matter the expanded state of its parent.
- Can be visible, when its parent is collapsed.
- Can be hidden, when its parent is collapsed.

The initial state of the column group which is specified as collapsible is [`expanded`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumngroupcomponent.html#expanded) set to **true**, but you can easily change this behavior by setting it to **false**.

## Expand/Collapse Indicator Template

Default expand indicator for the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) is the following:

<img class="responsive-img" src="../../../images/general/expand_indicator.png" alt="expand_indicator" style="width: 450px; height: 130px"/>

Default collapse indicator for the [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html) is the following:

<img class="responsive-img" src="../../../images/general/collapsed_indicator.png" alt="collapsed_indicator" style="width: 400px; height: 130px"/>

Also, if you need to change the default expand/collapse indicator, we provide templating options in order to achieve this.

```html
<igc-column-group id="info" header="Customer Information" collapsible="true">
    <igc-column field="CustomerName" header="Fullname" data-type="String" visible-when-collapsed="true"></igc-column>
    <igc-column field="CustomerID" header="Customer ID" data-type="String" visible-when-collapsed="false"></igc-column>
    <igc-column-group id="address" header="Customer Address" collapsible="true">
        <igc-column field="Country" header="Country" data-type="String" sortable="true" visible-when-collapsed="true"></igc-column>
        <igc-column field="City" header="City" data-type="String" sortable="true" visible-when-collapsed="false"></igc-column>
    </igc-column-group>
</igc-column-group>
```

```ts
constructor() {
    var info = document.getElementById('info') as IgcColumnGroupComponent;
    var address = document.getElementById('address') as IgcColumnGroupComponent;
    info.collapsibleIndicatorTemplate = this.indTemplate;
    address.collapsibleIndicatorTemplate = this.indTemplate;
}

public indTemplate = (ctx: IgcColumnTemplateContext) => {
    return html`
        <igc-icon name="${ctx.column.expanded ? 'remove' : 'add'}" draggable="false"></igc-icon>
    `;
}
```

> **Note**
> Please keep in mind that initially collapse group option takes precedence over column hidden - If you declared your column to be hidden using the property
> hidden and you have a group defined where the same column should be shown, the column will be shown.

## API References

- [`IgcHierarchicalGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igchierarchicalgridcomponent.html)
- [`IgcColumnComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igccolumncomponent.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

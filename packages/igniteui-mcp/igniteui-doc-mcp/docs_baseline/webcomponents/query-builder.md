---
title: Web Components Query Builder | Infragistics
_description: Infragistics' Web Components Query Builder allows users to build complex custom queries in angular apps with a great UI experience. Try it Now.
_keywords: Web Components Query Builder, Ignite UI for Web Components, Infragistics
_license: MIT
mentionedTypes: ["QueryBuilder"]
_tocName: Query Builder
---

# Web Components Query Builder Overview

The Ignite UI for Web Components Query Builder provides a rich UI that allows developers to build complex data filtering queries for a specified data set. With this component, you can build an expression tree and specify AND/OR conditions between expressions, with editors and condition lists determined by each field's data type. The expression tree can then be easily transformed to a query in a format the backend supports.

```css
.wrapper{
    margin: 10px;
    height: 100%;
    overflow-y: auto;
}

.output-area{
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    margin: 0 20px 20px 20px;
}
```


# Getting started with Web Components Query Builder

To start using the `QueryBuilder`, first, you need to install the `Ignite UI for Web Components` package by running the following command:

```cmd
npm install igniteui-webcomponents igniteui-webcomponents-grids
```

You also need to reference the corresponding styles based on your project configuration.

```ts
import 'igniteui-webcomponents-grids/grids/themes/light/bootstrap.css';
```

# Using the Web Components Query Builder

If no expression tree is initially set, you start by choosing an entity and which of its fields the query should return. After that, conditions or sub-groups can be added.

In order to add a condition you select a field, an operand based on the field data type and a value if the operand is not unary. The operands `In` and `Not In` will allow you to create an inner query with conditions for a different entity instead of simply providing a value. Once the condition is committed, a chip with the condition information appears. By clicking or hovering the chip, you have the options to modify it or add another condition or group right after it.

Clicking on the (AND or OR) button placed above each group, will open a menu with options to change the group type or ungroup the conditions inside.

Since every condition is related to a specific field from a particular entity changing the entity will lead to resetting all preset conditions and groups.

You can start using the component by setting the `Entities` property to an array describing the entity name and an array of its fields, where each field is defined by its name and data type. Once a field is selected it will automatically assign the corresponding operands based on the data type.
The Query Builder has the [`IgcExpressionTree`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcexpressiontree.html) property. You could use it to set an initial state of the control and access the user-specified filtering logic.

```html
<igc-query-builder id="queryBuilder">
</igc-query-builder>
```

```ts
private queryBuilder: IgcQueryBuilderComponent;
public entities: any[] = [];
public ordersFields: any[] = [];
public expressionTree!: IgcExpressionTree;

constructor() {
  this.queryBuilder = document.getElementById('queryBuilder') as IgcQueryBuilderComponent;
  this.initFields();
}

private initFields(): void {
  this.ordersFields = [
    { field: 'orderId', dataType: 'number' },
    { field: 'customerId', dataType: 'string' },
    { field: 'orderDate', dataType: 'date' }
  ];

  this.entities = [
    { name: 'Orders', fields: this.ordersFields }
  ];

  const tree = new IgcFilteringExpressionsTree();
  tree.operator = FilteringLogic.And;
  tree.entity = 'Orders';

  this.expressionTree = tree;
  this.queryBuilder.entities = this.entities;
  this.queryBuilder.expressionTree = this.expressionTree;
}
```

The [`IgcExpressionTree`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcexpressiontree.html) is a bindable property which means you can subscribe to the `ExpressionTreeChange` event to receive notifications when the end-user changes the UI by creating, editing or removing conditions.

```ts
this.queryBuilder.addEventListener('expressionTreeChange', (e: CustomEvent<IgcExpressionTree>) => {
  this.expressionTree = e.detail;
  this.onExpressionTreeChange();
});
```

# Expressions Dragging

Condition chips can be easily repositioned using mouse Drag & Drop or Keyboard reordering approaches. With those, users can adjust their query logic dynamically.

- Dragging a chip does not modify its condition/contents, only its position.
- Chip can also be dragged along groups and subgroups. For example, grouping/ungrouping expressions is achieved via the Expressions Dragging functionality.
    In order to group already existing conditions, first you need to add a new group through the 'add' group button. Then via dragging, the required expressions can be moved to that group. In order to ungroup, you could drag all conditions outside their current group and once the last condition is moved out, the group will be deleted.

> [!NOTE]
> Chips from one query tree cannot be dragged in another, e.g. from parent to inner and vice versa.

<img class="responsive-img" alt="Animated Example of Query Builder Drag and Drop using the Mouse" src="../../images/general/query-builder-drag-and-drop.gif" />

## Keyboard interaction

**Key Combinations**

- <kbd>Tab</kbd> / <kbd>Shift + Tab</kbd> - navigates to the next/previous chip, drag indicator, remove button, 'add' expression button.
- <kbd>Arrow Down</kbd>/<kbd>Arrow Up</kbd> - when chip's drag indicator is focused, the chip can be moved up/down.
- <kbd>Space</kbd> / <kbd>Enter</kbd> - focused expression enters edit mode. If chip is been moved, this confirms it's new position.
- <kbd>Esc</kbd> - chip's reordering is canceled and it returns to it's original position.

> [!NOTE]
> Keyboard reordering provides the same functionality as mouse Drag & Drop. Once a chip is moved, user has to confirm the new position or cancel the reorder.

<img class="responsive-img" alt="Animated Example of Keyboard Drag and Drop Using the Ignite UI for Angular Query Builder" src="../../images/general/query-builder-keyboard-drag-and-drop.gif" />

## Templating

The Ignite UI for Web Components Query Builder allows defining templates for the component's header and search value:

### Header Template

By default the `{ComponentName}` header would not be displayed. In order to define such, the `igc-query-builder-header` component should be added inside `igc-query-builder`.

```html
<igc-query-builder id="queryBuilder">
  <igc-query-builder-header title="My Query Builder">
  </igc-query-builder-header>
</igc-query-builder>
```

### Search Value Template

The search value of a condition can be templated by setting the `SearchValueTemplate` property to a function that returns a lit-html template.

> [!Note]
> When using `SearchValueTemplate`, you must provide templates for all field types in your entity, or the query builder will not function correctly. It is mandatory to implement a default/fallback template that handles any fields or conditions not covered by specific custom templates. Without this, users will not be able to edit
> conditions for those fields.

```ts
constructor() {
  this.queryBuilder = document.getElementById('queryBuilder') as IgcQueryBuilderComponent;
  this.queryBuilder.searchValueTemplate = (ctx) => this.buildSearchValueTemplate(ctx);
}

private buildSearchValueTemplate(ctx: IgcQueryBuilderSearchValueContext) {
  const field = ctx.selectedField?.field;
  const condition = ctx.selectedCondition;
  const matchesEqualityCondition = condition === 'equals' || condition === 'doesNotEqual';

  if (!ctx.implicit) {
      ctx.implicit = { value: null };
  }

  // Custom template for Region field
  if (field === 'Region' && matchesEqualityCondition) {
      return this.buildRegionSelect(ctx);
  }

  // Custom template for OrderStatus field
  if (field === 'OrderStatus' && matchesEqualityCondition) {
      return this.buildStatusRadios(ctx);
  }

  // Custom template for date fields
  if (ctx.selectedField?.dataType === 'date') {
      return this.buildDatePicker(ctx);
  }

  // Custom template for time fields
  if (ctx.selectedField?.dataType === 'time') {
      return this.buildTimeInput(ctx);
  }

  // Default template for all other fields (string, number, boolean, etc.)
  // This ensures all fields have a functioning editor
  return this.buildDefaultInput(ctx);
}
```

Below are examples showing one template for each type of editor:

For the Region Select example:

```ts
// Field definition
{ field: 'Region', dataType: 'string' }

// Template
private buildRegionSelect(ctx: IgcQueryBuilderSearchValueContext) {
  const currentValue = ctx?.implicit?.value?.value ?? '';

  return html`
    <igc-select
      placeholder="Region"
      .value=${currentValue}
      @igcChange=${(event: CustomEvent<{ value: string }>) => {
        const region = this.regionOptions.find(o => o.value === event.detail.value);
        ctx.implicit.value = region ?? null;
      }}>
      ${this.regionOptions.map(option => html`
        <igc-select-item value=${option.value}>${option.text}</igc-select-item>
      `)}
    </igc-select>
  `;
}
```

For the Status Radio Group example:

```ts
// Field definition
{ field: 'OrderStatus', dataType: 'number' }

// Template
private buildStatusRadios(ctx: IgcQueryBuilderSearchValueContext) {
  const currentValue = ctx.implicit?.value?.toString() ?? '';

  return html`
    <igc-radio-group
      .alignment=${"horizontal"}
      .value=${currentValue}
      @igcChange=${(event: CustomEvent<{ value: string }>) => {
        ctx.implicit.value = Number(event.detail.value);
      }}>
      ${this.statusOptions.map(option => html`
        <igc-radio
          name="status"
          value=${option.value}
          ?checked=${option.value.toString() === currentValue}>
          ${option.text}
        </igc-radio>
      `)}
    </igc-radio-group>
  `;
}
```

For the Date Picker example:

```ts
// Field definition
{ field: 'OrderDate', dataType: 'date' }

// Template
private buildDatePicker(ctx: IgcQueryBuilderSearchValueContext) {
  const currentValue = ctx.implicit?.value instanceof Date
    ? ctx.implicit.value
    : ctx.implicit?.value ? new Date(ctx.implicit.value) : null;

  const allowedConditions = ['equals', 'doesNotEqual', 'before', 'after'];
  const isEnabled = allowedConditions.includes(ctx.selectedCondition ?? '');

  return html`
    <igc-date-picker
      .value=${currentValue}
      .disabled=${!isEnabled}
      @igcChange=${(event: CustomEvent) => {
        ctx.implicit.value = event.detail;
      }}>
    </igc-date-picker>
  `;
}
```

For the Time Input example:

```ts
// Field definition
{ field: 'RequiredTime', dataType: 'time' }

// Template
private buildTimeInput(ctx: IgcQueryBuilderSearchValueContext) {
  const currentValue = this.normalizeTimeValue(ctx.implicit?.value);
  const allowedConditions = ['at', 'not_at', 'at_before', 'at_after', 'before', 'after'];
  const isDisabled = !allowedConditions.includes(ctx.selectedCondition ?? '');

  return html`
    <igc-date-time-input
      .inputFormat=${"hh:mm tt"}
      .value=${currentValue}
      .disabled=${isDisabled}
      @igcChange=${(event: CustomEvent) => {
        ctx.implicit.value = event.currentTarget.value;
      }}>
      <igc-icon slot="prefix" name="clock" collection="material"></igc-icon>
    </igc-date-time-input>
  `;
}
```

For the Default Input template:

```ts
// Field definitions for string, number, and boolean types
{ field: 'ShipCountry', dataType: 'string' }
{ field: 'OrderID', dataType: 'number' }
{ field: 'IsRushOrder', dataType: 'boolean' }

// Template that handles all these types
private buildDefaultInput(ctx: IgcQueryBuilderSearchValueContext) {
  const dataType = ctx.selectedField?.dataType;
  const isNumber = dataType === 'number';
  const isBoolean = dataType === 'boolean';
  
  const placeholder = ctx.selectedCondition === 'inQuery' || ctx.selectedCondition === 'notInQuery'
    ? 'Sub-query results'
    : 'Value';

  const inputValue = ctx.implicit?.value ?? '';
  const disabledConditions = ['empty', 'notEmpty', 'null', 'notNull', 'inQuery', 'notInQuery'];
  const isDisabled = isBoolean || !ctx.selectedField || disabledConditions.includes(ctx.selectedCondition ?? '');

  return html`
    <igc-input 
      .value=${inputValue}
      ?disabled=${isDisabled}
      placeholder=${placeholder}
      type=${isNumber ? 'number' : 'text'}
      @input=${(event: Event) => {
        const target = event.target as HTMLInputElement;
        ctx.implicit.value = isNumber
          ? target.value === '' ? null : Number(target.value)
          : target.value;
      }}>
    </igc-input>
  `;
}
```

### Formatter

In order to change the appearance of the search value in the chip displayed when a condition is not in edit mode, you can set a formatter function to the fields array. The search value can be accessed through the value argument as follows:

```ts
this.ordersFields = [
  { field: 'OrderID', dataType: 'number' },
  { field: 'ShipCountry', dataType: 'string' },
  {
    field: 'OrderDate',
    dataType: 'date',
    formatter: (value: any) => value.toLocaleDateString(this.queryBuilder?.locale, { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  },
  {
    field: 'Region',
    dataType: 'string',
    formatter: (value: any) => value?.text ?? value?.value ?? value
  }
];
```

### Demo

We’ve created this example to show you the templating and formatter functionalities for the header and the search value of the Web Components Query Builder component.

```css
.wrapper{
    margin: 10px;
    height: 100%;
    overflow-y: auto;
}

.output-area{
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    margin: 0 20px 20px 20px;
    padding: 16px;
    background: #fff;
}
```


## API Reference

- `QueryBuilder`
- `QueryBuilderHeader`
- [`IgcExpressionTree`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcexpressiontree.html)
- [`IgcFilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcfilteringexpressionstree.html)
- `FilteringLogic`
- [`IgcStringFilteringOperand`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcstringfilteringoperand.html)
- `QueryBuilderSearchValueContext`
- [Styling & Themes](../themes/overview.md)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

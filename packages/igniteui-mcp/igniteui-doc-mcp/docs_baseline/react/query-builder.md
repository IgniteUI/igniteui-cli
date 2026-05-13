---
title: React Query Builder | Infragistics
_description: Infragistics' React Query Builder allows users to build complex custom queries in angular apps with a great UI experience. Try it Now.
_keywords: React Query Builder, Ignite UI for React, Infragistics
_license: MIT
mentionedTypes: ["QueryBuilder"]
_tocName: Query Builder
---

# React Query Builder Overview

The Ignite UI for React Query Builder provides a rich UI that allows developers to build complex data filtering queries for a specified data set. With this component, you can build an expression tree and specify AND/OR conditions between expressions, with editors and condition lists determined by each field's data type. The expression tree can then be easily transformed to a query in a format the backend supports.

```css
.wrapper {
    margin: 10px;
    height: 100%;
    overflow-y: auto;
}

.output-area {
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    margin: 0 20px 20px 20px;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  IgrQueryBuilder,
  IgrGrid,
  IgrFilteringExpressionsTree,
  IgrExpressionTree,
  FilteringLogic
} from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/material.css';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

// Field type definitions
interface Field {
  field: string;
  dataType: string;
}

interface Entity {
  name: string;
  fields: Field[];
}

interface SampleState {
  expressionTree: IgrExpressionTree | null;
}

export default class Sample extends React.Component<any, SampleState> {
  private queryBuilderRef: React.RefObject<IgrQueryBuilder>;
  private gridRef: React.RefObject<IgrGrid>;

  constructor(props: any) {
    super(props);

    this.queryBuilderRef = React.createRef();
    this.gridRef = React.createRef();

    this.state = {
      expressionTree: null
    };
  }

  componentDidMount() {
    // Initialize expression tree
    const tree = new IgrFilteringExpressionsTree();
    tree.operator = FilteringLogic.And;
    tree.entity = 'Orders';
    tree.returnFields = [
      'orderId',
      'customerId',
      'employeeId',
      'shipperId',
      'orderDate',
      'requiredDate',
      'shipVia',
      'freight',
      'shipName',
      'completed'
    ];

    this.setState({ expressionTree: tree });

    // Set up query builder
    if (this.queryBuilderRef.current && tree) {
      const queryBuilder = this.queryBuilderRef.current;
      queryBuilder.entities = this.entities as any;
      queryBuilder.expressionTree = tree;

      queryBuilder.addEventListener('expressionTreeChange', this.handleExpressionTreeChange);
    }

    // Set up grid
    if (this.gridRef.current) {
      const grid = this.gridRef.current;
      grid.height = '420px';
      grid.autoGenerate = true;
    }
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    // Fetch data when expression tree changes
    if (prevState.expressionTree !== this.state.expressionTree && this.state.expressionTree) {
      this.fetchData();
    }

    // Update query builder if expression tree changed
    if (this.queryBuilderRef.current && this.state.expressionTree && 
        prevState.expressionTree !== this.state.expressionTree) {
      const queryBuilder = this.queryBuilderRef.current;
      queryBuilder.expressionTree = this.state.expressionTree;
    }
  }

  componentWillUnmount() {
    if (this.queryBuilderRef.current) {
      this.queryBuilderRef.current.removeEventListener('expressionTreeChange', this.handleExpressionTreeChange);
    }
  }

  private handleExpressionTreeChange = (event: any) => {
    this.setState({ expressionTree: event.detail });
  };

  private get customersFields(): Field[] {
    return [
      { field: 'customerId', dataType: 'string' },
      { field: 'companyName', dataType: 'string' },
      { field: 'contactName', dataType: 'string' },
      { field: 'contactTitle', dataType: 'string' }
    ];
  }

  private get ordersFields(): Field[] {
    return [
      { field: 'orderId', dataType: 'number' },
      { field: 'customerId', dataType: 'string' },
      { field: 'employeeId', dataType: 'number' },
      { field: 'shipperId', dataType: 'number' },
      { field: 'orderDate', dataType: 'date' },
      { field: 'requiredDate', dataType: 'date' },
      { field: 'shipVia', dataType: 'string' },
      { field: 'freight', dataType: 'number' },
      { field: 'shipName', dataType: 'string' },
      { field: 'completed', dataType: 'boolean' }
    ];
  }

  private get entities(): Entity[] {
    return [
      { name: 'Customers', fields: this.customersFields },
      { name: 'Orders', fields: this.ordersFields }
    ];
  }

  private calculateColumnsInView = () => {
    if (!this.gridRef.current || !this.state.expressionTree) return;

    const grid = this.gridRef.current;
    const expressionTree = this.state.expressionTree;
    const returnFields = expressionTree.returnFields ?? [];

    if (returnFields.length === 0 || returnFields[0] === '*') {
      const selectedEntity = this.entities.find(e => e.name === expressionTree.entity);
      const selectedEntityFields = (selectedEntity?.fields ?? []).map(f => f.field);
      
      grid.columns.forEach(column => {
        column.hidden = !selectedEntityFields.includes(column.field);
      });
    } else {
      grid.columns.forEach(column => {
        column.hidden = !returnFields.includes(column.field);
      });
    }
  };

  private async fetchData() {
    const grid = this.gridRef.current;
    const expressionTree = this.state.expressionTree;

    if (!grid || !expressionTree) return;

    grid.isLoading = true;

    try {
      const response = await fetch(`${API_ENDPOINT}/QueryBuilder/ExecuteQuery`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expressionTree)
      });

      if (!response.ok) {
        throw new Error(`ExecuteQuery failed: ${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      const data = (Object.values(json)[0] as any[]) ?? [];
      grid.data = data;

      // Calculate column visibility after data loads
      await new Promise(resolve => requestAnimationFrame(() => resolve(null)));
      this.calculateColumnsInView();
    } catch (err) {
      console.error(err);
      grid.data = [];
    } finally {
      grid.isLoading = false;
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample ig-typography">
        <div className="wrapper">
          <IgrQueryBuilder ref={this.queryBuilderRef} id="queryBuilder"></IgrQueryBuilder>
          
          <div className="output-area">
            <IgrGrid ref={this.gridRef} id="grid"></IgrGrid>
          </div>
        </div>
      </div>
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

# Getting started with React Query Builder

To start using the `QueryBuilder`, first, you need to install the `Ignite UI for React` package by running the following command:

```cmd
npm install igniteui-react igniteui-react-grids
```

You also need to reference the corresponding styles based on your project configuration.

```ts
import 'igniteui-webcomponents-grids/grids/themes/light/bootstrap.css';
```

# Using the React Query Builder

If no expression tree is initially set, you start by choosing an entity and which of its fields the query should return. After that, conditions or sub-groups can be added.

In order to add a condition you select a field, an operand based on the field data type and a value if the operand is not unary. The operands `In` and `Not In` will allow you to create an inner query with conditions for a different entity instead of simply providing a value. Once the condition is committed, a chip with the condition information appears. By clicking or hovering the chip, you have the options to modify it or add another condition or group right after it.

Clicking on the (AND or OR) button placed above each group, will open a menu with options to change the group type or ungroup the conditions inside.

Since every condition is related to a specific field from a particular entity changing the entity will lead to resetting all preset conditions and groups.

You can start using the component by setting the `Entities` property to an array describing the entity name and an array of its fields, where each field is defined by its name and data type. Once a field is selected it will automatically assign the corresponding operands based on the data type.
The Query Builder has the [`IgrExpressionTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrexpressiontree.html) property. You could use it to set an initial state of the control and access the user-specified filtering logic.

```tsx
private queryBuilderRef: React.RefObject<IgcQueryBuilderComponent>;

constructor(props: any) {
  super(props);
  this.queryBuilderRef = React.createRef();
  this.state = {
    expressionTree: null
  };
}

componentDidMount() {
  const tree = new IgrFilteringExpressionsTree();
  tree.operator = FilteringLogic.And;
  tree.entity = 'Orders';

  this.setState({ expressionTree: tree });

  if (this.queryBuilderRef.current && tree) {
    const queryBuilder = this.queryBuilderRef.current;
    queryBuilder.entities = this.entities as any;
    queryBuilder.expressionTree = tree;
    queryBuilder.addEventListener('expressionTreeChange', this.handleExpressionTreeChange);
  }
}

componentWillUnmount() {
  if (this.queryBuilderRef.current) {
    this.queryBuilderRef.current.removeEventListener('expressionTreeChange', this.handleExpressionTreeChange);
  }
}

private handleExpressionTreeChange = (event: CustomEvent<IgcExpressionTree>) => {
  this.setState({ expressionTree: event.detail });
};

private get ordersFields(): Field[] {
  return [
    { field: 'orderId', dataType: 'number' },
    { field: 'customerId', dataType: 'string' },
    { field: 'orderDate', dataType: 'date' }
  ];
}

private get entities(): Entity[] {
  return [
    { name: 'Orders', fields: this.ordersFields }
  ];
}

private onExpressionTreeChange() {
  // Handle expression tree changes
  console.log('Expression tree changed:', this.state.expressionTree);
}

public render(): JSX.Element {
  return (
    <div className="container sample">
      <IgrQueryBuilder ref={this.queryBuilderRef} id="queryBuilder"></IgrQueryBuilder>
    </div>
  );
}
```

The [`IgrExpressionTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrexpressiontree.html) is stored in the component state which means you can subscribe to the `ExpressionTreeChange` event to receive notifications when the end-user changes the UI by creating, editing or removing conditions. The event listener is attached in `componentDidMount` and cleaned up in `componentWillUnmount`.

```tsx
private handleExpressionTreeChange = (event: CustomEvent<IgcExpressionTree>) => {
  this.setState({ expressionTree: event.detail });
  this.onExpressionTreeChange();
};
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

The Ignite UI for React Query Builder allows defining templates for the component's header and search value:

### Header Template

By default the `{ComponentName}` header would not be displayed. In order to define such, the `igc-query-builder-header` component should be added inside `igc-query-builder`.

### Search Value Template

The search value of a condition can be templated by setting the `SearchValueTemplate` property to a function that returns a lit-html template.

> [!Note]
> When using `SearchValueTemplate`, you must provide templates for all field types in your entity, or the query builder will not function correctly. It is mandatory to implement a default/fallback template that handles any fields or conditions not covered by specific custom templates. Without this, users will not be able to edit
> conditions for those fields.

```tsx
<IgrQueryBuilder 
  ref={this.queryBuilderRef} 
  id="queryBuilder"
  searchValueTemplate={this.buildSearchValueTemplate}>
  <IgrQueryBuilderHeader title="Query Builder Template Sample"></IgrQueryBuilderHeader>
</IgrQueryBuilder>
```

```tsx
componentDidMount() {
  if (this.queryBuilderRef.current && tree) {
    const queryBuilder = this.queryBuilderRef.current;
    queryBuilder.entities = this.entities as any;
    queryBuilder.expressionTree = tree;
  }
}

private buildSearchValueTemplate = (ctx: QueryBuilderSearchValueContext) => {
  const field = ctx.selectedField?.field;
  const condition = ctx.selectedCondition;
  const matchesEqualityCondition = condition === 'equals' || condition === 'doesNotEqual';

  if (!ctx.implicit) {
    ctx.implicit = { value: null };
  }

  if (field === 'Region' && matchesEqualityCondition) {
    return this.buildRegionSelect(ctx);
  }

  if (field === 'OrderStatus' && matchesEqualityCondition) {
    return this.buildStatusRadios(ctx);
  }

  if (ctx.selectedField?.dataType === 'date') {
    return this.buildDatePicker(ctx);
  }

  if (ctx.selectedField?.dataType === 'time') {
    return this.buildTimeInput(ctx);
  }

  return this.buildDefaultInput(ctx, matchesEqualityCondition);
};
```

Below are examples showing one template for each type of editor:

For the Region Select example:

```tsx
// Field definition
{ field: 'Region', dataType: 'string' }

// Template
private buildRegionSelect = (ctx: QueryBuilderSearchValueContext) => {
  const currentValue = ctx?.implicit?.value?.value ?? '';
  const key = `region-select-${currentValue}`;

  return (
    <IgrSelect
      className="qb-select"
      key={key}
      value={currentValue}
      change={(sender: any) => {
        const value = sender.value;
        const currentKey = ctx?.implicit?.value?.value ?? '';

        if (!value || value === currentKey) return;

        setTimeout(() => {
          ctx.implicit.value = this.regionOptions.find(option => option.value === value) ?? null;
        });
      }}>
      {this.regionOptions.map(option => (
        <IgrSelectItem key={option.value} value={option.value}>
          <span>{option.text}</span>
        </IgrSelectItem>
      ))}
    </IgrSelect>
  );
};
```

For the Status Radio Group example:

```tsx
// Field definition
{ field: 'OrderStatus', dataType: 'number' }

// Template
private buildStatusRadios = (ctx: QueryBuilderSearchValueContext) => {
  const implicitValue = ctx.implicit?.value;
  const currentValue = implicitValue === null ? '' : implicitValue.toString();
  const key = `status-radio-${currentValue}`;

  return (
    <IgrRadioGroup
      key={key}
      style={{ gap: '5px' }}
      alignment="horizontal"
      value={currentValue}
      change={(sender: any) => {
        const value = sender.value;
        if (value === undefined) return;

        const numericValue = Number(value);
        if (ctx.implicit.value === numericValue) return;

        setTimeout(() => {
          ctx.implicit.value = numericValue;
        });
      }}>
      {this.statusOptions.map(option => (
        <IgrRadio
          key={option.value}
          name="status"
          value={option.value.toString()}
          checked={option.value.toString() === currentValue}
          labelText={option.text}>
        </IgrRadio>
      ))}
    </IgrRadioGroup>
  );
};
```

For the Date Picker example:

```tsx
// Field definition
{ field: 'OrderDate', dataType: 'date' }

// Template
private buildDatePicker = (ctx: QueryBuilderSearchValueContext) => {
  const implicitValue = ctx.implicit?.value;
  const currentValue = implicitValue instanceof Date
    ? implicitValue
    : implicitValue
      ? new Date(implicitValue)
      : null;

  const allowedConditions = ['equals', 'doesNotEqual', 'before', 'after'];
  const isEnabled = allowedConditions.indexOf(ctx.selectedCondition ?? '') !== -1;
  const key = `date-picker-${currentValue}`;

  return (
    <IgrDatePicker
      key={key}
      value={currentValue}
      disabled={!isEnabled}
      click={(sender: any) => sender.show()}
      change={(sender: any) => {
        setTimeout(() => {
          ctx.implicit.value = sender.value;
        });
      }}>
    </IgrDatePicker>
  );
};
```

For the Time Input example:

```tsx
// Field definition
{ field: 'RequiredTime', dataType: 'time' }

// Template
private buildTimeInput = (ctx: QueryBuilderSearchValueContext) => {
  const currentValue = this.normalizeTimeValue(ctx.implicit?.value);
  const allowedConditions = ['at', 'not_at', 'at_before', 'at_after', 'before', 'after'];
  const isDisabled = ctx.selectedField == null || allowedConditions.indexOf(ctx.selectedCondition ?? '') === -1;
  const key = `time-input-${currentValue}`;

  return (
    <IgrDateTimeInput
      key={key}
      inputFormat="hh:mm tt"
      value={currentValue}
      disabled={isDisabled}
      change={(sender: any) => {
        setTimeout(() => {
          ctx.implicit.value = sender.value;
        });
      }}>
      <div slot="prefix">
        <IgrIcon name="clock" collection="material" />
      </div>
    </IgrDateTimeInput>
  );
};
```

For the Default Input template:

```tsx
// Field definitions for string, number, and boolean types
{ field: 'ShipCountry', dataType: 'string' }
{ field: 'OrderID', dataType: 'number' }
{ field: 'IsRushOrder', dataType: 'boolean' }

// Template that handles all these types
private buildDefaultInput = (ctx: QueryBuilderSearchValueContext, matchesEqualityCondition: boolean) => {
  const selectedField = ctx.selectedField;
  const dataType = selectedField?.dataType;
  const isNumber = dataType === 'number';
  const isBoolean = dataType === 'boolean';

  const placeholder = ctx.selectedCondition === 'inQuery' || ctx.selectedCondition === 'notInQuery'
    ? 'Sub-query results'
    : 'Value';

  const currentValue = typeof ctx.implicit?.value === 'object' && (ctx.implicit.value && 'text' in ctx.implicit.value)
    ? matchesEqualityCondition ? ctx.implicit.value.text : ''
    : ctx.implicit?.value;

  const inputValue = currentValue == null ? '' : currentValue;
  const disabledConditions = ['empty', 'notEmpty', 'null', 'notNull', 'inQuery', 'notInQuery'];
  const isDisabled = isBoolean || selectedField == null || disabledConditions.indexOf(ctx.selectedCondition ?? '') !== -1;
  const key = `default-input-${inputValue}`;

  return (
    <IgrInput 
      key={key}
      value={inputValue?.toString() || ''}
      disabled={isDisabled}
      placeholder={placeholder}
      type={isNumber ? 'number' : 'text'}
      input={(sender: any) => {
        const value = sender.value;
        setTimeout(() => {
          ctx.implicit.value = isNumber
            ? value === '' ? null : Number(value)
            : value;
        });
      }}>
    </IgrInput>
  );
};
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

We’ve created this example to show you the templating and formatter functionalities for the header and the search value of the React Query Builder component.

```css
.wrapper {
    margin: 10px;
    height: 100%;
    overflow-y: auto;
}

.output-area {
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    margin: 0 20px 20px 20px;
    padding: 16px;
    background: #fff;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { 
  IgrQueryBuilder,
  IgrQueryBuilderModule,
  IgrQueryBuilderHeader,
  IgrFilteringExpressionsTree,
  IgrExpressionTree,
  FilteringLogic,
  IgrStringFilteringOperand
} from 'igniteui-react-grids';

import {
  IgrDatePicker,
  IgrDatePickerModule,
  IgrDateTimeInput,
  IgrDateTimeInputModule,
  IgrSelect,
  IgrSelectModule,
  IgrSelectItem,
  IgrRadioGroup,
  IgrRadioGroupModule,
  IgrRadio,
  IgrInput,
  IgrInputModule,
  IgrIcon,
  IgrIconModule
} from 'igniteui-react';

import 'igniteui-react-grids/grids/themes/light/material.css';

// Register components
const mods: any[] = [
  IgrQueryBuilderModule,
  IgrDatePickerModule,
  IgrDateTimeInputModule,
  IgrSelectModule,
  IgrRadioGroupModule,
  IgrInputModule,
  IgrIconModule
];
mods.forEach((m) => m.register());

// Types
interface Field {
  field: string;
  dataType: string;
  formatter?: (value: any) => string;
}

interface Entity {
  name: string;
  fields: Field[];
}

interface RegionOption {
  text: string;
  value: string;
}

interface StatusOption {
  text: string;
  value: number;
}

interface QueryBuilderSearchValueContext {
  implicit: { value: any };
  selectedField?: Field;
  selectedCondition?: string;
  defaultSearchValueTemplate?: any;
}

interface SampleState {
  expressionTree: IgrExpressionTree | null;
}

export default class Sample extends React.Component<any, SampleState> {
  private queryBuilderRef: React.RefObject<IgrQueryBuilder>;
  private expressionOutputRef: React.RefObject<HTMLPreElement>;

  private regionOptions: RegionOption[] = [
    { text: 'Central North America', value: 'CNA' },
    { text: 'Central Europe', value: 'CEU' },
    { text: 'Mediterranean region', value: 'MED' },
    { text: 'Central Asia', value: 'CAS' },
    { text: 'South Asia', value: 'SAS' },
    { text: 'Western Africa', value: 'WAF' },
    { text: 'Amazonia', value: 'AMZ' },
    { text: 'Southern Africa', value: 'SAF' },
    { text: 'Northern Australia', value: 'NAU' }
  ];

  private statusOptions: StatusOption[] = [
    { text: 'New', value: 1 },
    { text: 'Shipped', value: 2 },
    { text: 'Done', value: 3 }
  ];

  constructor(props: any) {
    super(props);

    this.queryBuilderRef = React.createRef();
    this.expressionOutputRef = React.createRef();

    this.state = {
      expressionTree: null
    };
  }

  componentDidMount() {
    // Initialize expression tree
    const tree = new IgrFilteringExpressionsTree();
    tree.operator = FilteringLogic.And;
    tree.entity = 'Orders';
    tree.returnFields = ['*'];
    tree.filteringOperands.push({
      fieldName: 'Region',
      condition: IgrStringFilteringOperand.instance().condition('equals'),
      conditionName: 'equals',
      searchVal: this.regionOptions[0]
    } as any);
    tree.filteringOperands.push({
      fieldName: 'OrderStatus',
      condition: IgrStringFilteringOperand.instance().condition('equals'),
      conditionName: 'equals',
      searchVal: this.statusOptions[0].value
    } as any);

    this.setState({ expressionTree: tree });

    // Set up query builder
    if (this.queryBuilderRef.current && tree) {
      const queryBuilder = this.queryBuilderRef.current;
      queryBuilder.entities = this.entities as any;
      queryBuilder.expressionTree = tree;

      queryBuilder.addEventListener('expressionTreeChange', this.handleExpressionTreeChange);
    }
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    // Update query builder if expression tree changed
    if (this.queryBuilderRef.current && this.state.expressionTree && 
        prevState.expressionTree !== this.state.expressionTree) {
      const queryBuilder = this.queryBuilderRef.current;
      queryBuilder.expressionTree = this.state.expressionTree;
    }

    // Render expression tree output
    if (this.expressionOutputRef.current && this.state.expressionTree && 
        prevState.expressionTree !== this.state.expressionTree) {
      this.expressionOutputRef.current.textContent = JSON.stringify(this.state.expressionTree, null, 2);
    }
  }

  componentWillUnmount() {
    if (this.queryBuilderRef.current) {
      this.queryBuilderRef.current.removeEventListener('expressionTreeChange', this.handleExpressionTreeChange);
    }
  }

  private handleExpressionTreeChange = (event: any) => {
    this.setState({ expressionTree: event.detail });
  };

  private get ordersFields(): Field[] {
    return [
      { field: 'CompanyID', dataType: 'string' },
      { field: 'OrderID', dataType: 'number' },
      { field: 'Freight', dataType: 'number' },
      { field: 'ShipCountry', dataType: 'string' },
      { field: 'IsRushOrder', dataType: 'boolean' },
      {
        field: 'RequiredTime',
        dataType: 'time',
        formatter: (value: any) => {
          if (!value || !(value instanceof Date)) return '';
          return value.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
          });
        }
      },
      {
        field: 'OrderDate',
        dataType: 'date',
        formatter: (value: any) => {
          if (!value || !(value instanceof Date)) return '';
          return value.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          });
        }
      },
      {
        field: 'Region',
        dataType: 'string',
        formatter: (value: any) => value?.text ?? value?.value ?? value
      },
      {
        field: 'OrderStatus',
        dataType: 'number',
        formatter: (value: number) => this.statusOptions.find(option => option.value === value)?.text ?? value
      }
    ];
  }

  private get entities(): Entity[] {
    return [
      {
        name: 'Orders',
        fields: this.ordersFields
      }
    ];
  }

  private setImplicitValue(ctx: QueryBuilderSearchValueContext, value: any) {
    queueMicrotask(() => {
      ctx.implicit.value = value;
    });
  }

  private normalizeTimeValue = (value: unknown): Date | null => {
    if (!value) return null;
    if (value instanceof Date) return value;
    
    if (typeof value === 'string') {
      const isoCandidate = value.includes('T') ? value : `1970-01-01T${value}`;
      const parsed = new Date(isoCandidate);
      return isNaN(parsed.getTime()) ? null : parsed;
    }
    
    if (typeof value === 'number') {
      const parsed = new Date(value);
      return isNaN(parsed.getTime()) ? null : parsed;
    }
    
    return null;
  };

  private buildSearchValueTemplate = (ctx: QueryBuilderSearchValueContext) => {
    const field = ctx.selectedField?.field;
    const condition = ctx.selectedCondition;
    const matchesEqualityCondition = condition === 'equals' || condition === 'doesNotEqual';

    if (!ctx.implicit) {
      ctx.implicit = { value: null };
    }

    if (field === 'Region' && matchesEqualityCondition) {
      return this.buildRegionSelect(ctx);
    }

    if (field === 'OrderStatus' && matchesEqualityCondition) {
      return this.buildStatusRadios(ctx);
    }

    if (ctx.selectedField?.dataType === 'date') {
      return this.buildDatePicker(ctx);
    }

    if (ctx.selectedField?.dataType === 'time') {
      return this.buildTimeInput(ctx);
    }

    return this.buildDefaultInput(ctx, matchesEqualityCondition);
  };

  private buildRegionSelect = (ctx: QueryBuilderSearchValueContext) => {
    const currentValue = ctx?.implicit?.value?.value ?? '';
    const key = `region-select-${currentValue}`;

    return (
      <IgrSelect
        className="qb-select"
        key={key}
        value={currentValue}
        change={(sender: any) => {
          const value = sender.value;
          const currentKey = ctx?.implicit?.value?.value ?? '';

          if (!value || value === currentKey) return;

          this.setImplicitValue(ctx, this.regionOptions.find(option => option.value === value) ?? null);
        }}>
        {this.regionOptions.map(option => (
          <IgrSelectItem key={option.value} value={option.value}>
            <span>{option.text}</span>
          </IgrSelectItem>
        ))}
      </IgrSelect>
    );
  };

  private buildStatusRadios = (ctx: QueryBuilderSearchValueContext) => {
    const implicitValue = ctx.implicit?.value;
    const currentValue = implicitValue == null ? '' : implicitValue.toString();

    return (
      <IgrRadioGroup
        style={{ gap: '5px' }}
        alignment="horizontal">
        {this.statusOptions.map(option => (
          <IgrRadio
            key={option.value}
            name="status"
            value={option.value.toString()}
            checked={option.value.toString() === currentValue}
            onChange={(e: any) => {
              if (!e.detail.checked) return;
              const numericValue = Number(e.detail.value);
              if (ctx.implicit.value === numericValue) return;
              this.setImplicitValue(ctx, numericValue);
            }}>
              <span>{option.text}</span>
          </IgrRadio>
        ))}
      </IgrRadioGroup>
    );
  };

  private buildDatePicker = (ctx: QueryBuilderSearchValueContext) => {
    const implicitValue = ctx.implicit?.value;
    const currentValue = implicitValue instanceof Date
      ? implicitValue
      : implicitValue
        ? new Date(implicitValue)
        : null;

    const allowedConditions = ['equals', 'doesNotEqual', 'before', 'after'];
    const isEnabled = allowedConditions.indexOf(ctx.selectedCondition ?? '') !== -1;
    const key = `date-picker-${currentValue}`;

    return (
      <IgrDatePicker
        key={key}
        value={currentValue}
        disabled={!isEnabled}
        click={(sender: any) => sender.show()}
        change={(sender: any) => {
          this.setImplicitValue(ctx, sender.value);
        }}>
      </IgrDatePicker>
    );
  };

  private buildTimeInput = (ctx: QueryBuilderSearchValueContext) => {
    const currentValue = this.normalizeTimeValue(ctx.implicit?.value);
    const allowedConditions = ['at', 'not_at', 'at_before', 'at_after', 'before', 'after'];
    const isDisabled = ctx.selectedField == null || allowedConditions.indexOf(ctx.selectedCondition ?? '') === -1;
    const key = `time-input-${currentValue}`;

    return (
      <IgrDateTimeInput
        key={key}
        inputFormat="hh:mm tt"
        value={currentValue}
        disabled={isDisabled}
        change={(sender: any) => {
          this.setImplicitValue(ctx, sender.value);
        }}>
        <div slot="prefix">
          <IgrIcon name="clock" collection="material" />
        </div>
      </IgrDateTimeInput>
    );
  };

  private buildDefaultInput = (ctx: QueryBuilderSearchValueContext, matchesEqualityCondition: boolean) => {
    const selectedField = ctx.selectedField;
    const dataType = selectedField?.dataType;
    const isNumber = dataType === 'number';
    const isBoolean = dataType === 'boolean';

    const placeholder = ctx.selectedCondition === 'inQuery' || ctx.selectedCondition === 'notInQuery'
      ? 'Sub-query results'
      : 'Value';

    const currentValue = typeof ctx.implicit?.value === 'object' && (ctx.implicit.value && 'text' in ctx.implicit.value)
      ? matchesEqualityCondition ? ctx.implicit.value.text : ''
      : ctx.implicit?.value;

    const inputValue = currentValue == null ? '' : currentValue;
    const disabledConditions = ['empty', 'notEmpty', 'null', 'notNull', 'inQuery', 'notInQuery'];
    const isDisabled = isBoolean || selectedField == null || disabledConditions.indexOf(ctx.selectedCondition ?? '') !== -1;
    const key = `default-input-${inputValue}`;

    return (
      <IgrInput 
        key={key}
        value={inputValue?.toString() || ''}
        disabled={isDisabled}
        placeholder={placeholder}
        type={isNumber ? 'number' : 'text'}
        input={(sender: any) => {
          const value = sender.value;
          this.setImplicitValue(ctx, isNumber
            ? value === '' ? null : Number(value)
            : value);
        }}>
      </IgrInput>
    );
  };

  public render(): JSX.Element {
    return (
      <div className="container sample ig-typography">
        <div className="wrapper">
          <IgrQueryBuilder 
            ref={this.queryBuilderRef} 
            id="queryBuilder"
            searchValueTemplate={this.buildSearchValueTemplate}>
            <IgrQueryBuilderHeader title="Query Builder Template Sample"></IgrQueryBuilderHeader>
          </IgrQueryBuilder>
          
          <div className="output-area">
            <pre ref={this.expressionOutputRef} id="expressionOutput"></pre>
          </div>
        </div>
      </div>
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## API Reference

- `QueryBuilder`
- `QueryBuilderHeader`
- [`IgrExpressionTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrexpressiontree.html)
- [`IgrFilteringExpressionsTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrfilteringexpressionstree.html)
- `FilteringLogic`
- [`IgrStringFilteringOperand`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrstringfilteringoperand.html)
- `QueryBuilderSearchValueContext`
- [Styling & Themes](../themes/overview.md)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

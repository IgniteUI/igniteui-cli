# Class: IgxColumnLayoutComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-layout.component.ts:33](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-layout.component.ts#L33)

Column layout for declaration of Multi-row Layout

## Igx Parent

IgxGridComponent

## Extends

- [`IgxColumnGroupComponent`](IgxColumnGroupComponent.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxColumnLayoutComponent**(): `IgxColumnLayoutComponent`

#### Returns

`IgxColumnLayoutComponent`

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`constructor`](IgxColumnGroupComponent.md#constructor)

## Properties

### \_mergingComparer

> `protected` **\_mergingComparer**: (`prevRecord`, `record`, `field`) => `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1887](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1887)

#### Parameters

##### prevRecord

`any`

##### record

`any`

##### field

`string`

#### Returns

`boolean`

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`_mergingComparer`](IgxColumnGroupComponent.md#_mergingcomparer)

***

### \_pinningPosition

> `protected` **\_pinningPosition**: `any` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1837](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1837)

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`_pinningPosition`](IgxColumnGroupComponent.md#_pinningposition)

***

### \_vIndex

> `protected` **\_vIndex**: `number` = `NaN`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1836](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1836)

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`_vIndex`](IgxColumnGroupComponent.md#_vindex)

***

### additionalTemplateContext

> **additionalTemplateContext**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:878](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L878)

Sets/gets custom properties provided in additional template context.

```html
<igx-column [additionalTemplateContext]="contextObject">
  <ng-template igxCell let-cell="cell" let-props="additionalTemplateContext">
     {{ props }}
  </ng-template>
</igx-column>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`additionalTemplateContext`](IgxColumnGroupComponent.md#additionaltemplatecontext)

***

### autosizeHeader

> **autosizeHeader**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:299](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L299)

Sets/gets whether the column header is included in autosize logic.
Useful when template for a column header is sized based on parent, for example a default `div`.
Default value is `false`.
```typescript
let isResizable = this.column.resizable;
```
```html
<igx-column [resizable] = "true"></igx-column>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`autosizeHeader`](IgxColumnGroupComponent.md#autosizeheader)

***

### cellClasses

> **cellClasses**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:647](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L647)

Sets a conditional class selector of the column cells.
Accepts an object literal, containing key-value pairs,
where the key is the name of the CSS class, while the
value is either a callback function that returns a boolean,
or boolean, like so:
```typescript
callback = (rowData, columnKey, cellValue, rowIndex) => { return rowData[columnKey] > 6; }
cellClasses = { 'className' : this.callback };
```
```html
<igx-column [cellClasses] = "cellClasses"></igx-column>
<igx-column [cellClasses] = "{'class1' : true }"></igx-column>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`cellClasses`](IgxColumnGroupComponent.md#cellclasses)

***

### cellStyles

> **cellStyles**: `any` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:670](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L670)

Sets conditional style properties on the column cells.
Similar to `ngStyle` it accepts an object literal where the keys are
the style properties and the value is the expression to be evaluated.
As with `cellClasses` it accepts a callback function.
```typescript
styles = {
 background: 'royalblue',
 color: (rowData, columnKey, cellValue, rowIndex) => value.startsWith('Important') ? 'red': 'inherit'
}
```
```html
<igx-column [cellStyles]="styles"></igx-column>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`cellStyles`](IgxColumnGroupComponent.md#cellstyles)

***

### ~~children~~

> **children**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts:51](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts#L51)

#### Deprecated

in version 18.1.0. Use the `childColumns` property instead.

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`children`](IgxColumnGroupComponent.md#children)

***

### colEnd

> **colEnd**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:836](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L836)

Column index where the current field should end.
The amount of columns between colStart and colEnd will determine the amount of spanning columns to that field
```html
<igx-column-layout>
  <igx-column [colEnd]="3" [rowStart]="1" [colStart]="1"></igx-column>
</igx-column-layout>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`colEnd`](IgxColumnGroupComponent.md#colend)

***

### collapsibleIndicatorTemplate

> **collapsibleIndicatorTemplate**: `TemplateRef`\<[`IgxColumnTemplateContext`](../interfaces/IgxColumnTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts:201](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts#L201)

Allows you to define a custom template for expand/collapse indicator

#### Memberof

IgxColumnGroupComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`collapsibleIndicatorTemplate`](IgxColumnGroupComponent.md#collapsibleindicatortemplate)

***

### colStart

> **colStart**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:862](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L862)

Column index from which the field is starting.
```html
<igx-column-layout>
  <igx-column [colStart]="1" [rowStart]="1"></igx-column>
</igx-column-layout>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`colStart`](IgxColumnGroupComponent.md#colstart)

***

### dataType

> **dataType**: `GridColumnDataType` = `GridColumnDataType.String`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:804](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L804)

Sets/gets the data type of the column values.
Default value is `string`.
```typescript
let columnDataType = this.column.dataType;
```
```html
<igx-column [dataType] = "'number'"></igx-column>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`dataType`](IgxColumnGroupComponent.md#datatype)

***

### disableHiding

> **disableHiding**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:456](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L456)

Gets whether the hiding is disabled.
```typescript
let isHidingDisabled =  this.column.disableHiding;
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`disableHiding`](IgxColumnGroupComponent.md#disablehiding)

***

### disablePinning

> **disablePinning**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:468](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L468)

Gets whether the pinning is disabled.
```typescript
let isPinningDisabled =  this.column.disablePinning;
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`disablePinning`](IgxColumnGroupComponent.md#disablepinning)

***

### expandedChange

> **expandedChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:431](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L431)

Emitted when the column expanded or collapsed.

```html
<igx-column (expandedChange)="expandedChange($event)">
</igx-column>
```

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`expandedChange`](IgxColumnGroupComponent.md#expandedchange)

***

### filterable

> **filterable**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:267](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L267)

Sets/gets whether the column is filterable.
Default value is `true`.
```typescript
let isFilterable = this.column.filterable;
```
```html
<igx-column [filterable] = "false"></igx-column>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`filterable`](IgxColumnGroupComponent.md#filterable)

***

### filteringIgnoreCase

> **filteringIgnoreCase**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:759](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L759)

Sets/gets whether the column filtering should be case sensitive.
Default value is `true`.
```typescript
let filteringIgnoreCase = this.column.filteringIgnoreCase;
```
```html
<igx-column [filteringIgnoreCase] = "false"></igx-column>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`filteringIgnoreCase`](IgxColumnGroupComponent.md#filteringignorecase)

***

### formatter

> **formatter**: (`value`, `rowData?`) => `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:710](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L710)

Applies display format to cell values in the column. Does not modify the underlying data.

#### Parameters

##### value

`any`

##### rowData?

`any`

#### Returns

`any`

#### Remarks

Note: As the formatter is used in places like the Excel style filtering dialog, in certain
scenarios (remote filtering for example), the row data argument can be `undefined`.

In this example, we check to see if the column name is Salary, and then provide a method as the column formatter
to format the value into a currency string.

#### Examples

```typescript
columnInit(column: IgxColumnComponent) {
  if (column.field == "Salary") {
    column.formatter = (salary => this.format(salary));
  }
}

format(value: number) : string {
  return formatCurrency(value, "en-us", "$");
}
```

```typescript
const column = this.grid.getColumnByName('Address');
const addressFormatter = (address: string, rowData: any) => data.privacyEnabled ? 'unknown' : address;
column.formatter = addressFormatter;
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`formatter`](IgxColumnGroupComponent.md#formatter)

***

### grid

> **grid**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:59](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L59)

Represents the instance of the parent `GridType` that contains this column.

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`grid`](IgxColumnGroupComponent.md#grid)

***

### header

> **header**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:131](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L131)

Sets/gets the `header` value.
```typescript
let columnHeader = this.column.header;
```
```html
<igx-column [header] = "'ID'"></igx-column>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`header`](IgxColumnGroupComponent.md#header)

***

### headerClasses

> **headerClasses**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:566](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L566)

Sets/gets the class selector of the column header.
```typescript
let columnHeaderClass = this.column.headerClasses;
```
```html
<igx-column [headerClasses] = "'column-header'"></igx-column>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`headerClasses`](IgxColumnGroupComponent.md#headerclasses)

***

### headerGroupClasses

> **headerGroupClasses**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:603](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L603)

Sets/gets the class selector of the column group header.
```typescript
let columnHeaderClass = this.column.headerGroupClasses;
```
```html
<igx-column [headerGroupClasses] = "'column-group-header'"></igx-column>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`headerGroupClasses`](IgxColumnGroupComponent.md#headergroupclasses)

***

### headerGroupStyles

> **headerGroupStyles**: `any` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:624](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L624)

Sets conditional style properties on the column header group wrapper.
Similar to `ngStyle` it accepts an object literal where the keys are
the style properties and the value is the expression to be evaluated.
```typescript
styles = {
 background: 'royalblue',
 color: (column) => column.pinned ? 'red': 'inherit'
}
```
```html
<igx-column [headerGroupStyles]="styles"></igx-column>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`headerGroupStyles`](IgxColumnGroupComponent.md#headergroupstyles)

***

### headerStyles

> **headerStyles**: `any` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:587](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L587)

Sets conditional style properties on the column header.
Similar to `ngStyle` it accepts an object literal where the keys are
the style properties and the value is the expression to be evaluated.
```typescript
styles = {
 background: 'royalblue',
 color: (column) => column.pinned ? 'red': 'inherit'
}
```
```html
<igx-column [headerStyles]="styles"></igx-column>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`headerStyles`](IgxColumnGroupComponent.md#headerstyles)

***

### hiddenChange

> **hiddenChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:419](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L419)

Emitted when the column is hidden or shown.

```html
<igx-column (hiddenChange)="hiddenChange($event)">
</igx-column>
```

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`hiddenChange`](IgxColumnGroupComponent.md#hiddenchange)

***

### parent

> **parent**: [`ColumnType`](../interfaces/ColumnType.md) = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1809](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1809)

Sets/gets the parent column.
```typescript
let parentColumn = this.column.parent;
```
```typescript
this.column.parent = higherLevelColumn;
```

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`parent`](IgxColumnGroupComponent.md#parent)

***

### pinnedChange

> **pinnedChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:902](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L902)

Emitted when the column is pinned/unpinned.

```html
<igx-column (pinnedChange)="pinnedChange($event)">
</igx-column>
```

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`pinnedChange`](IgxColumnGroupComponent.md#pinnedchange)

***

### platform

> `protected` **platform**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:64](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L64)

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`platform`](IgxColumnGroupComponent.md#platform)

***

### resizable

> **resizable**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:282](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L282)

Sets/gets whether the column is resizable.
Default value is `false`.
```typescript
let isResizable = this.column.resizable;
```
```html
<igx-column [resizable] = "true"></igx-column>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`resizable`](IgxColumnGroupComponent.md#resizable)

***

### rowEnd

> **rowEnd**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:822](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L822)

Row index where the current field should end.
The amount of rows between rowStart and rowEnd will determine the amount of spanning rows to that field
```html
<igx-column-layout>
  <igx-column [rowEnd]="2" [rowStart]="1" [colStart]="1"></igx-column>
</igx-column-layout>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`rowEnd`](IgxColumnGroupComponent.md#rowend)

***

### rowStart

> **rowStart**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:849](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L849)

Row index from which the field is starting.
```html
<igx-column-layout>
  <igx-column [rowStart]="1" [colStart]="1"></igx-column>
</igx-column-layout>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`rowStart`](IgxColumnGroupComponent.md#rowstart)

***

### searchable

> **searchable**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts:142](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts#L142)

Sets/gets whether the column group is `searchable`.
Default value is `true`.
```typescript
let isSearchable =  this.columnGroup.searchable;
```
```html
 <igx-column-group [searchable] = "false"></igx-column-group>
```

#### Memberof

IgxColumnGroupComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`searchable`](IgxColumnGroupComponent.md#searchable)

***

### sortable

> **sortable**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:161](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L161)

Sets/gets whether the column is sortable.
Default value is `false`.
```typescript
let isSortable = this.column.sortable;
```
```html
<igx-column [sortable] = "true"></igx-column>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`sortable`](IgxColumnGroupComponent.md#sortable)

***

### sortingIgnoreCase

> **sortingIgnoreCase**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:774](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L774)

Sets/gets whether the column sorting should be case sensitive.
Default value is `true`.
```typescript
let sortingIgnoreCase = this.column.sortingIgnoreCase;
```
```html
<igx-column [sortingIgnoreCase] = "false"></igx-column>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`sortingIgnoreCase`](IgxColumnGroupComponent.md#sortingignorecase)

***

### summaryFormatter

> **summaryFormatter**: (`summary`, `summaryOperand`) => `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:743](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L743)

The summaryFormatter is used to format the display of the column summaries.

In this example, we check to see if the column name is OrderDate, and then provide a method as the summaryFormatter
to change the locale for the dates to 'fr-FR'. The summaries with the count key are skipped so they are displayed as numbers.

```typescript
columnInit(column: IgxColumnComponent) {
  if (column.field == "OrderDate") {
    column.summaryFormatter = this.summaryFormat;
  }
}

summaryFormat(summary: IgxSummaryResult, summaryOperand: IgxSummaryOperand): string {
  const result = summary.summaryResult;
  if(summaryResult.key !== 'count' && result !== null && result !== undefined) {
     const pipe = new DatePipe('fr-FR');
     return pipe.transform(result,'mediumDate');
  }
  return result;
}
```

#### Parameters

##### summary

[`IgxSummaryResult`](../interfaces/IgxSummaryResult.md)

##### summaryOperand

[`IgxSummaryOperand`](IgxSummaryOperand.md)

#### Returns

`any`

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`summaryFormatter`](IgxColumnGroupComponent.md#summaryformatter)

***

### title

> **title**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:146](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L146)

Sets/gets the `title` value.
```typescript
let title = this.column.title;
```
```html
<igx-column [title] = "'Some column tooltip'"></igx-column>
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`title`](IgxColumnGroupComponent.md#title)

***

### widthChange

> **widthChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:890](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L890)

Emitted when the column width changes.

```html
<igx-column (widthChange)="widthChange($event)">
</igx-column>
```

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`widthChange`](IgxColumnGroupComponent.md#widthchange)

## Accessors

### childColumns

#### Get Signature

> **get** **childColumns**(): [`ColumnType`](../interfaces/ColumnType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts:347](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts#L347)

A list containing all the child columns under this column (if any).
Empty without children or if this column is not Group or Layout.

##### Returns

[`ColumnType`](../interfaces/ColumnType.md)[]

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`childColumns`](IgxColumnGroupComponent.md#childcolumns)

***

### collapsible

#### Set Signature

> **set** **collapsible**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts:63](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts#L63)

Set if the column group is collapsible.
Default value is `false`
```html
 <igx-column-group [collapsible] = "true"></igx-column-group>
```

##### Memberof

IgxColumnGroupComponent

##### Parameters

###### value

`boolean`

##### Returns

`void`

Optional
Indicated whether the column can be collapsed. If the value is true, the column can be collapsed
It is used in tree grid and for navigation

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`collapsible`](IgxColumnGroupComponent.md#collapsible)

***

### columnGroup

#### Get Signature

> **get** **columnGroup**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts:363](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts#L363)

Returns a boolean indicating if the column is a `ColumnGroup`.
```typescript
let isColumnGroup =  this.columnGroup.columnGroup
```

##### Memberof

IgxColumnGroupComponent

##### Returns

`boolean`

Specifies whether the column belongs to a group of columns.

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`columnGroup`](IgxColumnGroupComponent.md#columngroup)

***

### columnLayout

#### Get Signature

> **get** **columnLayout**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-layout.component.ts:52](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-layout.component.ts#L52)

Returns a boolean indicating if the column is a `ColumnLayout` for multi-row layout.
```typescript
let columnGroup =  this.column.columnGroup;
```

##### Memberof

IgxColumnComponent

##### Returns

`boolean`

#### Overrides

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`columnLayout`](IgxColumnGroupComponent.md#columnlayout)

***

### columnLayoutChild

#### Get Signature

> **get** **columnLayoutChild**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1599](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1599)

Returns a boolean indicating if the column is a child of a `ColumnLayout` for multi-row layout.
```typescript
let columnLayoutChild =  this.column.columnLayoutChild;
```

##### Memberof

IgxColumnComponent

##### Returns

`boolean`

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`columnLayoutChild`](IgxColumnGroupComponent.md#columnlayoutchild)

***

### disabledSummaries

#### Get Signature

> **get** **disabledSummaries**(): `string`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1165](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1165)

Sets/gets the summary operands to exclude from display.
Accepts an array of string keys representing the summary types to disable, such as 'Min', 'Max', 'Count' etc.
```typescript
let disabledSummaries = this.column.disabledSummaries;
```
```html
<igx-column [disabledSummaries]="['min', 'max', 'average']"></igx-column>
```

##### Memberof

IgxColumnComponent

##### Returns

`string`[]

#### Set Signature

> **set** **disabledSummaries**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1169](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1169)

##### Parameters

###### value

`string`[]

##### Returns

`void`

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`disabledSummaries`](IgxColumnGroupComponent.md#disabledsummaries)

***

### editable

#### Get Signature

> **get** **editable**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:222](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L222)

Gets whether the column is editable.
Default value is `false`.
```typescript
let isEditable = this.column.editable;
```

##### Memberof

IgxColumnComponent

##### Returns

`boolean`

#### Set Signature

> **set** **editable**(`editable`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:249](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L249)

Sets whether the column is editable.
```typescript
this.column.editable = true;
```
```html
<igx-column [editable] = "true"></igx-column>
```

##### Memberof

IgxColumnComponent

##### Parameters

###### editable

`boolean`

##### Returns

`void`

Indicated whether the column can be edited. If the value is true, the column can be edited

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`editable`](IgxColumnGroupComponent.md#editable)

***

### editorOptions

#### Get Signature

> **get** **editorOptions**(): [`IColumnEditorOptions`](../interfaces/IColumnEditorOptions.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1735](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1735)

Sets properties on the default column editors

##### Returns

[`IColumnEditorOptions`](../interfaces/IColumnEditorOptions.md)

#### Set Signature

> **set** **editorOptions**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1732](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1732)

Pass optional properties for the default column editors.

##### Remarks

Options may be applicable only to specific column type editors.

##### Example

```typescript
const editorOptions: IColumnEditorOptions = {
     dateTimeFormat: 'MM/dd/YYYY',
}
```
```html
<igx-column dataType="date" [editorOptions]="editorOptions"></igx-column>
```

##### Memberof

IgxColumnComponent

##### Parameters

###### value

[`IColumnEditorOptions`](../interfaces/IColumnEditorOptions.md)

##### Returns

`void`

Sets properties on the default column editors

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`editorOptions`](IgxColumnGroupComponent.md#editoroptions)

***

### errorTemplate

#### Get Signature

> **get** **errorTemplate**(): `TemplateRef`\<[`IgxCellTemplateContext`](../interfaces/IgxCellTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1441](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1441)

Returns a reference to the validation error template.
```typescript
let errorTemplate = this.column.errorTemplate;
```

##### Returns

`TemplateRef`\<[`IgxCellTemplateContext`](../interfaces/IgxCellTemplateContext.md)\>

#### Set Signature

> **set** **errorTemplate**(`template`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1459](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1459)

Sets the error template.
```html
<ng-template igxCellValidationError let-cell="cell" #errorTemplate >
    <div *ngIf="cell.validation.errors?.['forbiddenName']">
     This name is forbidden.
    </div>
</ng-template>
```
```typescript
@ViewChild("'errorTemplate'", {read: TemplateRef })
public errorTemplate: TemplateRef<any>;
this.column.errorTemplate = this.errorTemplate;
```

##### Parameters

###### template

`TemplateRef`\<[`IgxCellTemplateContext`](../interfaces/IgxCellTemplateContext.md)\>

##### Returns

`void`

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`errorTemplate`](IgxColumnGroupComponent.md#errortemplate)

***

### expanded

#### Set Signature

> **set** **expanded**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts:90](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts#L90)

Set whether the group is expanded or collapsed initially.
Applied only if the collapsible property is set to `true`
Default value is `true`
```html
 const state = false
 <igx-column-group [(expand)] = "state"></igx-column-group>
```

##### Memberof

IgxColumnGroupComponent

##### Parameters

###### value

`boolean`

##### Returns

`void`

Indicates if the column is currently expanded or collapsed. If the value is true, the column is expanded

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`expanded`](IgxColumnGroupComponent.md#expanded)

***

### field

#### Get Signature

> **get** **field**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:82](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L82)

The internal field name, used in expressions and queries.

##### Returns

`string`

#### Set Signature

> **set** **field**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:78](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L78)

Sets/gets the `field` value.
```typescript
let columnField = this.column.field;
```
```html
<igx-column [field] = "'ID'"></igx-column>
```

##### Memberof

IgxColumnComponent

##### Parameters

###### value

`string`

##### Returns

`void`

The internal field name, used in expressions and queries.

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`field`](IgxColumnGroupComponent.md#field)

***

### filterCellTemplate

#### Get Signature

> **get** **filterCellTemplate**(): `TemplateRef`\<[`IgxColumnTemplateContext`](../interfaces/IgxColumnTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1474](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1474)

Returns a reference to the `filterCellTemplate`.
```typescript
let filterCellTemplate = this.column.filterCellTemplate;
```

##### Memberof

IgxColumnComponent

##### Returns

`TemplateRef`\<[`IgxColumnTemplateContext`](../interfaces/IgxColumnTemplateContext.md)\>

#### Set Signature

> **set** **filterCellTemplate**(`template`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1492](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1492)

Sets the quick filter template.
```html
<ng-template #filterCellTemplate IgxFilterCellTemplate let-column="column">
   <input (input)="onInput()">
</ng-template>
```
```typescript
@ViewChild("'filterCellTemplate'", {read: TemplateRef })
public filterCellTemplate: TemplateRef<any>;
this.column.filterCellTemplate = this.filterCellTemplate;
```

##### Memberof

IgxColumnComponent

##### Parameters

###### template

`TemplateRef`\<[`IgxColumnTemplateContext`](../interfaces/IgxColumnTemplateContext.md)\>

##### Returns

`void`

Represents a custom template for filtering
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`filterCellTemplate`](IgxColumnGroupComponent.md#filtercelltemplate)

***

### filteringExpressionsTree

#### Get Signature

> **get** **filteringExpressionsTree**(): [`FilteringExpressionsTree`](FilteringExpressionsTree.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1793](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1793)

Returns the filteringExpressionsTree of the column.
```typescript
let tree =  this.column.filteringExpressionsTree;
```

##### Memberof

IgxColumnComponent

##### Returns

[`FilteringExpressionsTree`](FilteringExpressionsTree.md)

The filtering expressions for the column.
The type contains properties and methods for filtering: filteringOperands, operator (logic), fieldName, etc.

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`filteringExpressionsTree`](IgxColumnGroupComponent.md#filteringexpressionstree)

***

### filters

#### Get Signature

> **get** **filters**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts:152](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts#L152)

Gets the column group `filters`.
```typescript
let columnGroupFilters = this.columnGroup.filters;
```

##### Memberof

IgxColumnGroupComponent

##### Returns

`any`

#### Set Signature

> **set** **filters**(`classRef`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts:165](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts#L165)

Sets the column group `filters`.
```typescript
this.columnGroup.filters = IgxStringFilteringOperand;
```

##### Memberof

IgxColumnGroupComponent

##### Parameters

###### classRef

`any`

##### Returns

`void`

Optional filtering operands that apply to this field.

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`filters`](IgxColumnGroupComponent.md#filters)

***

### groupable

#### Get Signature

> **get** **groupable**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:204](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L204)

Sets/gets whether the column is groupable.
Default value is `false`.
```typescript
let isGroupable = this.column.groupable;
```
```html
<igx-column [groupable] = "true"></igx-column>
```

##### Memberof

IgxColumnComponent

##### Returns

`boolean`

#### Set Signature

> **set** **groupable**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:207](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L207)

Indicates whether a column can be put in a group. If the value is true, the column can be put in a group

##### Parameters

###### value

`boolean`

##### Returns

`void`

Indicates whether a column can be put in a group. If the value is true, the column can be put in a group

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`groupable`](IgxColumnGroupComponent.md#groupable)

***

### groupingComparer

#### Get Signature

> **get** **groupingComparer**(): (`a`, `b`, `currRec?`, `groupRec?`) => `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1263](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1263)

Gets the function that compares values for grouping.
```typescript
let groupingComparer = this.column.groupingComparer'
```

##### Memberof

IgxColumnComponent

##### Returns

(`a`, `b`, `currRec?`, `groupRec?`) => `number`

#### Set Signature

> **set** **groupingComparer**(`funcRef`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1277](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1277)

Sets a custom function to compare values for grouping.
Subsequent values in the sorted data that the function returns 0 for are grouped.
```typescript
this.column.groupingComparer = (a: any, b: any, currRec?: any, groupRec?: any) => { return a === b ? 0 : -1; }
```

##### Memberof

IgxColumnComponent

##### Parameters

###### funcRef

(`a`, `b`, `currRec?`, `groupRec?`) => `number`

##### Returns

`void`

Represents a method with custom grouping comparator to determine the members of the group.

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`groupingComparer`](IgxColumnGroupComponent.md#groupingcomparer)

***

### hasSummary

#### Get Signature

> **get** **hasSummary**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:312](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L312)

Gets a value indicating whether the summary for the column is enabled.
```typescript
let hasSummary = this.column.hasSummary;
```

##### Memberof

IgxColumnComponent

##### Returns

`boolean`

#### Set Signature

> **set** **hasSummary**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:324](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L324)

Sets a value indicating whether the summary for the column is enabled.
Default value is `false`.
```html
<igx-column [hasSummary] = "true"></igx-column>
```

##### Memberof

IgxColumnComponent

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`hasSummary`](IgxColumnGroupComponent.md#hassummary)

***

### headerTemplate

#### Get Signature

> **get** **headerTemplate**(): `TemplateRef`\<[`IgxColumnTemplateContext`](../interfaces/IgxColumnTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1375](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1375)

Returns a reference to the header template.
```typescript
let headerTemplate = this.column.headerTemplate;
```

##### Memberof

IgxColumnComponent

##### Returns

`TemplateRef`\<[`IgxColumnTemplateContext`](../interfaces/IgxColumnTemplateContext.md)\>

#### Set Signature

> **set** **headerTemplate**(`template`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1396](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1396)

Sets the header template.
Note that the column header height is fixed and any content bigger than it will be cut off.
```html
<ng-template #headerTemplate>
  <div style = "background-color:black" (click) = "changeColor(val)">
      <span style="color:red" >{{column.field}}</span>
  </div>
</ng-template>
```
```typescript
@ViewChild("'headerTemplate'", {read: TemplateRef })
public headerTemplate: TemplateRef<any>;
this.column.headerTemplate = this.headerTemplate;
```

##### Memberof

IgxColumnComponent

##### Parameters

###### template

`TemplateRef`\<[`IgxColumnTemplateContext`](../interfaces/IgxColumnTemplateContext.md)\>

##### Returns

`void`

The template reference for the custom header of the column
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`headerTemplate`](IgxColumnGroupComponent.md#headertemplate)

***

### hidden

#### Get Signature

> **get** **hidden**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-layout.component.ts:101](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-layout.component.ts#L101)

Gets whether the column group is hidden.
```typescript
let isHidden = this.columnGroup.hidden;
```

##### Memberof

IgxColumnGroupComponent

##### Returns

`boolean`

#### Set Signature

> **set** **hidden**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-layout.component.ts:114](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-layout.component.ts#L114)

Sets the column layout hidden property.
```typescript
<igx-column-layout [hidden] = "true"></igx-column->
```

##### Memberof

IgxColumnGroupComponent

##### Parameters

###### value

`boolean`

##### Returns

`void`

Indicates whether a column is currently hidden (not visible). If the value is true, the column is not visible

#### Overrides

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`hidden`](IgxColumnGroupComponent.md#hidden)

***

### index

#### Get Signature

> **get** **index**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1041](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1041)

Gets the column index.
```typescript
let columnIndex = this.column.index;
```

##### Memberof

IgxColumnComponent

##### Returns

`number`

The index of the column within the grid.
Includes the hidden columns when counting

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`index`](IgxColumnGroupComponent.md#index)

***

### level

#### Get Signature

> **get** **level**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1624](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1624)

Returns the level of the column in a column group.
Returns `0` if the column doesn't have a `parent`.
```typescript
let columnLevel =  this.column.level;
```

##### Memberof

IgxColumnComponent

##### Returns

`number`

Represents the hierarchical level of the column in the column layout

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`level`](IgxColumnGroupComponent.md#level)

***

### maxWidth

#### Get Signature

> **get** **maxWidth**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:549](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L549)

##### Returns

`string`

#### Set Signature

> **set** **maxWidth**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:544](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L544)

Sets/gets the maximum `width` of the column.
```typescript
let columnMaxWidth = this.column.width;
```
```html
<igx-column [maxWidth] = "'150px'"></igx-column>
```

##### Memberof

IgxColumnComponent

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`maxWidth`](IgxColumnGroupComponent.md#maxwidth)

***

### merge

#### Get Signature

> **get** **merge**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:94](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L94)

Sets/gets whether to merge cells in this column.
```html
<igx-column [merge]="true"></igx-column>
```

##### Returns

`boolean`

#### Set Signature

> **set** **merge**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:98](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L98)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`merge`](IgxColumnGroupComponent.md#merge)

***

### mergingComparer

#### Get Signature

> **get** **mergingComparer**(): (`prevRecord`, `record`, `field`) => `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1237](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1237)

Gets the function that compares values for merging.
```typescript
let mergingComparer = this.column.mergingComparer'
```

##### Returns

(`prevRecord`, `record`, `field`) => `boolean`

#### Set Signature

> **set** **mergingComparer**(`funcRef`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1248](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1248)

Sets a custom function to compare values for merging.
```typescript
this.column.mergingComparer = (prevRecord: any, record: any, field: string) => { return prevRecord[field] === record[field]; }
```

##### Parameters

###### funcRef

(`prevRecord`, `record`, `field`) => `boolean`

##### Returns

`void`

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`mergingComparer`](IgxColumnGroupComponent.md#mergingcomparer)

***

### minWidth

#### Get Signature

> **get** **minWidth**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1020](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1020)

##### Returns

`string`

#### Set Signature

> **set** **minWidth**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1012](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1012)

Sets/gets the minimum `width` of the column.
Default value is `88`;
```typescript
let columnMinWidth = this.column.minWidth;
```
```html
<igx-column [minWidth] = "'100px'"></igx-column>
```

##### Memberof

IgxColumnComponent

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`minWidth`](IgxColumnGroupComponent.md#minwidth)

***

### pinned

#### Get Signature

> **get** **pinned**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1078](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1078)

Gets whether the column is `pinned`.
```typescript
let isPinned = this.column.pinned;
```

##### Memberof

IgxColumnComponent

##### Returns

`boolean`

#### Set Signature

> **set** **pinned**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1095](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1095)

Sets whether the column is pinned.
Default value is `false`.
```html
<igx-column [pinned] = "true"></igx-column>
```

Two-way data binding.
```html
<igx-column [(pinned)] = "model.columns[0].isPinned"></igx-column>
```

##### Memberof

IgxColumnComponent

##### Parameters

###### value

`boolean`

##### Returns

`void`

Indicates if the column is currently pinned. If the value is true, the column is pinned

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`pinned`](IgxColumnGroupComponent.md#pinned)

***

### pinningPosition

#### Get Signature

> **get** **pinningPosition**(): [`ColumnPinningPosition`](../enumerations/ColumnPinningPosition.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1053](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1053)

Gets the pinning position of the column.
```typescript
let pinningPosition = this.column.pinningPosition;

##### Returns

[`ColumnPinningPosition`](../enumerations/ColumnPinningPosition.md)

#### Set Signature

> **set** **pinningPosition**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1064](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1064)

Sets the pinning position of the column.
```html
<igx-column [pinningPosition]="1"></igx-column>
```

##### Parameters

###### value

[`ColumnPinningPosition`](../enumerations/ColumnPinningPosition.md)

##### Returns

`void`

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`pinningPosition`](IgxColumnGroupComponent.md#pinningposition)

***

### pipeArgs

#### Get Signature

> **get** **pipeArgs**(): [`IColumnPipeArgs`](../interfaces/IColumnPipeArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1710](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1710)

Optional arguments for any pipe applied to the field.

##### Returns

[`IColumnPipeArgs`](../interfaces/IColumnPipeArgs.md)

#### Set Signature

> **set** **pipeArgs**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1704](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1704)

##### Remarks

Pass optional parameters for DatePipe and/or DecimalPipe to format the display value for date and numeric columns.
Accepts an `IColumnPipeArgs` object with any of the `format`, `timezone` and `digitsInfo` properties.
For more details see https://angular.io/api/common/DatePipe and https://angular.io/api/common/DecimalPipe

##### Example

```typescript
const pipeArgs: IColumnPipeArgs = {
     format: 'longDate',
     timezone: 'UTC',
     digitsInfo: '1.1-2'
}
```
```html
<igx-column dataType="date" [pipeArgs]="pipeArgs"></igx-column>
<igx-column dataType="number" [pipeArgs]="pipeArgs"></igx-column>
```

##### Memberof

IgxColumnComponent

##### Parameters

###### value

[`IColumnPipeArgs`](../interfaces/IColumnPipeArgs.md)

##### Returns

`void`

Optional arguments for any pipe applied to the field.

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`pipeArgs`](IgxColumnGroupComponent.md#pipeargs)

***

### selectable

#### Get Signature

> **get** **selectable**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts:175](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts#L175)

Returns if the column group is selectable
```typescript
let columnGroupSelectable = this.columnGroup.selectable;
```

##### Memberof

IgxColumnGroupComponent

##### Returns

`boolean`

Indicates if the column can be selected. If the value is true, the column can be selected

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`selectable`](IgxColumnGroupComponent.md#selectable)

***

### selected

#### Get Signature

> **get** **selected**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts:269](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts#L269)

Returns if the column group is selected.
```typescript
let isSelected = this.columnGroup.selected;
```

##### Memberof

IgxColumnGroupComponent

##### Returns

`boolean`

#### Set Signature

> **set** **selected**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts:283](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts#L283)

Select/deselect the column group.
```typescript
this.columnGroup.selected = true;
```

##### Memberof

IgxColumnGroupComponent

##### Parameters

###### value

`boolean`

##### Returns

`void`

Indicates if the column is currently selected. If the value is true, the column is selected

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`selected`](IgxColumnGroupComponent.md#selected)

***

### sortStrategy

#### Get Signature

> **get** **sortStrategy**(): [`ISortingStrategy`](../interfaces/ISortingStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1213](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1213)

Gets the column `sortStrategy`.
```typescript
let sortStrategy = this.column.sortStrategy
```

##### Memberof

IgxColumnComponent

##### Returns

[`ISortingStrategy`](../interfaces/ISortingStrategy.md)

#### Set Signature

> **set** **sortStrategy**(`classRef`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1225](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1225)

Sets the column `sortStrategy`.
```typescript
this.column.sortStrategy = new CustomSortingStrategy().
class CustomSortingStrategy extends SortingStrategy {...}
```

##### Memberof

IgxColumnComponent

##### Parameters

###### classRef

[`ISortingStrategy`](../interfaces/ISortingStrategy.md)

##### Returns

`void`

The sorting strategy used for sorting this column.
The interface contains a method sort that sorts the provided data based on the given sorting expressions

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`sortStrategy`](IgxColumnGroupComponent.md#sortstrategy)

***

### summaries

#### Get Signature

> **get** **summaries**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts:113](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts#L113)

Gets the column group `summaries`.
```typescript
let columnGroupSummaries = this.columnGroup.summaries;
```

##### Memberof

IgxColumnGroupComponent

##### Returns

`any`

#### Set Signature

> **set** **summaries**(`classRef`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts:126](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-group.component.ts#L126)

Sets the column group `summaries`.
```typescript
this.columnGroup.summaries = IgxNumberSummaryOperand;
```

##### Memberof

IgxColumnGroupComponent

##### Parameters

###### classRef

`any`

##### Returns

`void`

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`summaries`](IgxColumnGroupComponent.md#summaries)

***

### summaryTemplate

#### Get Signature

> **get** **summaryTemplate**(): `TemplateRef`\<[`IgxSummaryTemplateContext`](../interfaces/IgxSummaryTemplateContext.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1307](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1307)

Returns a reference to the `summaryTemplate`.
```typescript
let summaryTemplate = this.column.summaryTemplate;
```

##### Memberof

IgxColumnComponent

##### Returns

`TemplateRef`\<[`IgxSummaryTemplateContext`](../interfaces/IgxSummaryTemplateContext.md)\>

#### Set Signature

> **set** **summaryTemplate**(`template`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1326](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1326)

Sets the summary template.
```html
<ng-template #summaryTemplate igxSummary let-summaryResults>
   <p>{{ summaryResults[0].label }}: {{ summaryResults[0].summaryResult }}</p>
   <p>{{ summaryResults[1].label }}: {{ summaryResults[1].summaryResult }}</p>
</ng-template>
```
```typescript
@ViewChild("'summaryTemplate'", {read: TemplateRef })
public summaryTemplate: TemplateRef<any>;
this.column.summaryTemplate = this.summaryTemplate;
```

##### Memberof

IgxColumnComponent

##### Parameters

###### template

`TemplateRef`\<[`IgxSummaryTemplateContext`](../interfaces/IgxSummaryTemplateContext.md)\>

##### Returns

`void`

The template reference for a summary of the column
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`summaryTemplate`](IgxColumnGroupComponent.md#summarytemplate)

***

### topLevelParent

#### Get Signature

> **get** **topLevelParent**(): [`ColumnType`](../interfaces/ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:2503](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L2503)

Returns a reference to the top level parent column.
```typescript
let topLevelParent =  this.column.topLevelParent;
```

##### Returns

[`ColumnType`](../interfaces/ColumnType.md)

Optional
The root parent of this column (if any).
If there is no root parent, that means the current column is the root parent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`topLevelParent`](IgxColumnGroupComponent.md#toplevelparent)

***

### visibleIndex

#### Get Signature

> **get** **visibleIndex**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-layout.component.ts:79](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-layout.component.ts#L79)

Gets the column visible index.
If the column is not visible, returns `-1`.
```typescript
let visibleColumnIndex =  this.column.visibleIndex;
```

##### Memberof

IgxColumnComponent

##### Returns

`number`

The index of the column within the grid.
Does not include the hidden columns when counting

#### Overrides

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`visibleIndex`](IgxColumnGroupComponent.md#visibleindex)

***

### visibleWhenCollapsed

#### Get Signature

> **get** **visibleWhenCollapsed**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1677](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1677)

##### Returns

`boolean`

#### Set Signature

> **set** **visibleWhenCollapsed**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:1668](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L1668)

Indicates whether the column will be visible when its parent is collapsed.
```html
<igx-column-group>
  <igx-column [visibleWhenCollapsed]="true"></igx-column>
</igx-column-group>
```

##### Memberof

IgxColumnComponent

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`visibleWhenCollapsed`](IgxColumnGroupComponent.md#visiblewhencollapsed)

***

### width

#### Get Signature

> **get** **width**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-layout.component.ts:44](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-layout.component.ts#L44)

Gets the width of the column layout.
```typescript
let columnGroupWidth = this.columnGroup.width;
```

##### Memberof

IgxColumnGroupComponent

##### Returns

`any`

#### Set Signature

> **set** **width**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column-layout.component.ts:50](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column-layout.component.ts#L50)

Gets the width of the column group.
```typescript
let columnGroupWidth = this.columnGroup.width;
```

##### Memberof

IgxColumnGroupComponent

##### Parameters

###### val

`any`

##### Returns

`void`

#### Overrides

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`width`](IgxColumnGroupComponent.md#width)

## Methods

### autosize()

> **autosize**(`byHeaderOnly?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:2543](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L2543)

Autosize the column to the longest currently visible cell value, including the header cell.
```typescript
@ViewChild('grid') grid: IgxGridComponent;
let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
column.autosize();
```

#### Parameters

##### byHeaderOnly?

`boolean` = `false`

Set if column should be autosized based only on the header content.

#### Returns

`void`

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`autosize`](IgxColumnGroupComponent.md#autosize)

***

### getColumnSizesString()

> `protected` **getColumnSizesString**(`children`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:2669](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L2669)

#### Parameters

##### children

`QueryList`\<[`IgxColumnComponent`](IgxColumnComponent.md)\>

#### Returns

`string`

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`getColumnSizesString`](IgxColumnGroupComponent.md#getcolumnsizesstring)

***

### move()

> **move**(`index`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:2434](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L2434)

Moves a column to the specified visible index.
If passed index is invalid, or if column would receive a different visible index after moving, moving is not performed.
If passed index would move the column to a different column group. moving is not performed.

#### Parameters

##### index

`number`

#### Returns

`void`

#### Example

```typescript
column.move(index);
```

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`move`](IgxColumnGroupComponent.md#move)

***

### pin()

> **pin**(`index?`, `pinningPosition?`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:2239](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L2239)

Pins the column in the specified position at the provided index in that pinned area.
Defaults to index `0` if not provided, or to the initial index in the pinned area.
Returns `true` if the column is successfully pinned. Returns `false` if the column cannot be pinned.
Column cannot be pinned if:
- Is already pinned
- index argument is out of range
```typescript
let success = this.column.pin();
```

#### Parameters

##### index?

`number`

##### pinningPosition?

[`ColumnPinningPosition`](../enumerations/ColumnPinningPosition.md)

#### Returns

`boolean`

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`pin`](IgxColumnGroupComponent.md#pin)

***

### unpin()

> **unpin**(`index?`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/columns/column.component.ts:2349](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/columns/column.component.ts#L2349)

Unpins the column and place it at the provided index in the unpinned area.
Defaults to index `0` if not provided, or to the initial index in the unpinned area.
Returns `true` if the column is successfully unpinned. Returns `false` if the column cannot be unpinned.
Column cannot be unpinned if:
- Is already unpinned
- index argument is out of range
```typescript
let success = this.column.unpin();
```

#### Parameters

##### index?

`number`

#### Returns

`boolean`

#### Memberof

IgxColumnComponent

#### Inherited from

[`IgxColumnGroupComponent`](IgxColumnGroupComponent.md).[`unpin`](IgxColumnGroupComponent.md#unpin)

# Class: IgxPivotDataSelectorComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts:56](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts#L56)

Pivot Data Selector provides means to configure the pivot state of the Pivot Grid via a vertical panel UI

## Igx Module

IgxPivotGridModule

## Igx Group

Grids & Lists

## Igx Keywords

data selector, pivot, grid

## Igx Theme

pivot-data-selector-theme

## Remarks

The Ignite UI Data Selector has a searchable list with the grid data columns,
there are also four expandable areas underneath for filters, rows, columns, and values
is used for grouping and aggregating simple flat data into a pivot table.

## Example

```html
<igx-pivot-grid #grid1 [data]="data" [pivotConfiguration]="configuration">
</igx-pivot-grid>
<igx-pivot-data-selector [grid]="grid1"></igx-pivot-data-selector>
```

## Constructors

### Constructor

> **new IgxPivotDataSelectorComponent**(): `IgxPivotDataSelectorComponent`

#### Returns

`IgxPivotDataSelectorComponent`

## Properties

### animationSettings

> **animationSettings**: `object`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts:215](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts#L215)

#### closeAnimation

> **closeAnimation**: `any`

#### openAnimation

> **openAnimation**: `any`

***

### columnsExpanded

> **columnsExpanded**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts:78](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts#L78)

Gets/sets whether the columns panel is expanded
Get
```typescript
 const columnsPanelState: boolean = this.dataSelector.columnsExpanded;
```
Set
```html
<igx-pivot-data-selector [grid]="grid1" [columnsExpanded]="columnsPanelState"></igx-pivot-data-selector>
```

Two-way data binding:
```html
<igx-pivot-data-selector [grid]="grid1" [(columnsExpanded)]="columnsPanelState"></igx-pivot-data-selector>
```

***

### columnsExpandedChange

> **columnsExpandedChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts:90](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts#L90)

Emitted when the columns panel is expanded or collapsed.

#### Example

```html
<igx-pivot-data-selector #grid [data]="localData" [height]="'305px'"
             (columnsExpandedChange)="columnsExpandedChange($event)"></igx-pivot-data-selector>
```

***

### filtersExpanded

> **filtersExpanded**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts:140](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts#L140)

Gets/sets whether the filters panel is expanded
Get
```typescript
 const filtersPanelState: boolean = this.dataSelector.filtersExpanded;
```
Set
```html
<igx-pivot-data-selector [grid]="grid1" [filtersExpanded]="filtersPanelState"></igx-pivot-data-selector>
```

Two-way data binding:
```html
<igx-pivot-data-selector [grid]="grid1" [(filtersExpanded)]="filtersPanelState"></igx-pivot-data-selector>
```

***

### filtersExpandedChange

> **filtersExpandedChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts:152](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts#L152)

Emitted when the filters panel is expanded or collapsed.

#### Example

```html
<igx-pivot-data-selector #grid [data]="localData" [height]="'305px'"
             (filtersExpandedChange)="filtersExpandedChange($event)"></igx-pivot-data-selector>
```

***

### rowsExpanded

> **rowsExpanded**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts:109](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts#L109)

Gets/sets whether the rows panel is expanded
Get
```typescript
 const rowsPanelState: boolean = this.dataSelector.rowsExpanded;
```
Set
```html
<igx-pivot-data-selector [grid]="grid1" [rowsExpanded]="rowsPanelState"></igx-pivot-data-selector>
```

Two-way data binding:
```html
<igx-pivot-data-selector [grid]="grid1" [(rowsExpanded)]="rowsPanelState"></igx-pivot-data-selector>
```

***

### rowsExpandedChange

> **rowsExpandedChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts:121](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts#L121)

Emitted when the rows panel is expanded or collapsed.

#### Example

```html
<igx-pivot-data-selector #grid [data]="localData" [height]="'305px'"
             (rowsExpandedChange)="rowsExpandedChange($event)"></igx-pivot-data-selector>
```

***

### valuesExpanded

> **valuesExpanded**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts:171](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts#L171)

Gets/sets whether the values panel is expanded
Get
```typescript
 const valuesPanelState: boolean = this.dataSelector.valuesExpanded;
```
Set
```html
<igx-pivot-data-selector [grid]="grid1" [valuesExpanded]="valuesPanelState"></igx-pivot-data-selector>
```

Two-way data binding:
```html
<igx-pivot-data-selector [grid]="grid1" [(valuesExpanded)]="valuesPanelState"></igx-pivot-data-selector>
```

***

### valuesExpandedChange

> **valuesExpandedChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts:183](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts#L183)

Emitted when the values panel is expanded or collapsed.

#### Example

```html
<igx-pivot-data-selector #grid [data]="localData" [height]="'305px'"
             (valuesExpandedChange)="valuesExpandedChange($event)"></igx-pivot-data-selector>
```

## Accessors

### grid

#### Get Signature

> **get** **grid**(): [`PivotGridType`](../interfaces/PivotGridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts:311](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts#L311)

Returns the grid.

##### Returns

[`PivotGridType`](../interfaces/PivotGridType.md)

#### Set Signature

> **set** **grid**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts:303](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts#L303)

Sets the grid.

##### Parameters

###### value

[`PivotGridType`](../interfaces/PivotGridType.md)

##### Returns

`void`

***

### size

#### Get Signature

> **get** `protected` **size**(): `Size`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts:193](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/pivot-grid/src/pivot-data-selector.component.ts#L193)

##### Returns

`Size`

# Class: IgxGridExpandableCellComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/grid/src/expandable-cell.component.ts:40](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/grid/src/expandable-cell.component.ts#L40)

Providing reference to `IgxGridCellComponent`:
```typescript
@ViewChild('grid', { read: IgxGridComponent })
 public grid: IgxGridComponent;
```
```typescript
 let column = this.grid.columnList.first;
```
```typescript
 let cell = column.cells[0];
```

## Extends

- [`IgxGridCellComponent`](IgxGridCellComponent.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxGridExpandableCellComponent**(): `IgxGridExpandableCellComponent`

#### Returns

`IgxGridExpandableCellComponent`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`constructor`](IgxGridCellComponent.md#constructor)

## Properties

### \_lastSearchInfo

> `protected` **\_lastSearchInfo**: [`ISearchInfo`](../interfaces/ISearchInfo.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:843](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L843)

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`_lastSearchInfo`](IgxGridCellComponent.md#_lastsearchinfo)

***

### activeHighlightClass

> **activeHighlightClass**: `string` = `'igx-highlight__active'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:821](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L821)

Sets/gets the active highlight class class of the cell.
Default value is `"igx-highlight__active"`.
```typescript
let activeHighlightClass = this.cell.activeHighlightClass;
```
```typescript
this.cell.activeHighlightClass = 'igx-cell-highlight_active';
```

#### Memberof

IgxGridCellComponent

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`activeHighlightClass`](IgxGridCellComponent.md#activehighlightclass)

***

### addRowCellTemplate

> `protected` **addRowCellTemplate**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:763](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L763)

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`addRowCellTemplate`](IgxGridCellComponent.md#addrowcelltemplate)

***

### cdr

> **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:116](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L116)

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`cdr`](IgxGridCellComponent.md#cdr)

***

### cellTemplate

> **cellTemplate**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:246](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L246)

Sets/gets the template of the cell.
```html
<ng-template #cellTemplate igxCell let-value>
  <div style="font-style: oblique; color:blueviolet; background:red">
      <span>{{value}}</span>
  </div>
</ng-template>
```
```typescript
@ViewChild('cellTemplate',{read: TemplateRef})
cellTemplate: TemplateRef<any>;
```
```typescript
this.cell.cellTemplate = this.cellTemplate;
```
```typescript
let template =  this.cell.cellTemplate;
```

#### Memberof

IgxGridCellComponent

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`cellTemplate`](IgxGridCellComponent.md#celltemplate)

***

### cellValidationErrorTemplate

> **cellValidationErrorTemplate**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:249](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L249)

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`cellValidationErrorTemplate`](IgxGridCellComponent.md#cellvalidationerrortemplate)

***

### column

> **column**: [`ColumnType`](../interfaces/ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:162](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L162)

Gets the column of the cell.
```typescript
 let cellColumn = this.cell.column;
```

#### Memberof

IgxGridCellComponent

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`column`](IgxGridCellComponent.md#column)

***

### defaultCellTemplate

> `protected` **defaultCellTemplate**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:751](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L751)

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`defaultCellTemplate`](IgxGridCellComponent.md#defaultcelltemplate)

***

### defaultPinnedIndicator

> `protected` **defaultPinnedIndicator**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:757](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L757)

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`defaultPinnedIndicator`](IgxGridCellComponent.md#defaultpinnedindicator)

***

### document

> **document**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/grid/src/expandable-cell.component.ts:41](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/grid/src/expandable-cell.component.ts#L41)

***

### editMode

> **editMode**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:522](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L522)

Returns whether the cell is in edit mode.

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`editMode`](IgxGridCellComponent.md#editmode)

***

### emptyCellTemplate

> `protected` **emptyCellTemplate**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:754](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L754)

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`emptyCellTemplate`](IgxGridCellComponent.md#emptycelltemplate)

***

### formatter

> **formatter**: (`value`, `rowData?`, `columnData?`) => `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:277](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L277)

Gets the cell formatter.
```typescript
let cellForamatter = this.cell.formatter;
```

#### Parameters

##### value

`any`

##### rowData?

`any`

##### columnData?

`any`

#### Returns

`any`

#### Memberof

IgxGridCellComponent

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`formatter`](IgxGridCellComponent.md#formatter)

***

### grid

> **grid**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:114](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L114)

Represents the grid instance containing the cell

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`grid`](IgxGridCellComponent.md#grid)

***

### highlightClass

> **highlightClass**: `string` = `'igx-highlight'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:807](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L807)

Sets/gets the highlight class of the cell.
Default value is `"igx-highlight"`.
```typescript
let highlightClass = this.cell.highlightClass;
```
```typescript
this.cell.highlightClass = 'igx-cell-highlight';
```

#### Memberof

IgxGridCellComponent

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`highlightClass`](IgxGridCellComponent.md#highlightclass)

***

### indentationDiv

> **indentationDiv**: `ElementRef`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/grid/src/expandable-cell.component.ts:53](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/grid/src/expandable-cell.component.ts#L53)

***

### indicator

> **indicator**: `ElementRef`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/grid/src/expandable-cell.component.ts:50](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/grid/src/expandable-cell.component.ts#L50)

***

### inlineEditorTemplate

> `protected` **inlineEditorTemplate**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:760](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L760)

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`inlineEditorTemplate`](IgxGridCellComponent.md#inlineeditortemplate)

***

### isMerged

> **isMerged**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:175](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L175)

Gets whether this cell is a merged cell.

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`isMerged`](IgxGridCellComponent.md#ismerged)

***

### overlayService

> `protected` **overlayService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:115](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L115)

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`overlayService`](IgxGridCellComponent.md#overlayservice)

***

### pinnedIndicator

> **pinnedIndicator**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:252](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L252)

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`pinnedIndicator`](IgxGridCellComponent.md#pinnedindicator)

***

### platformUtil

> `protected` **platformUtil**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:120](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L120)

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`platformUtil`](IgxGridCellComponent.md#platformutil)

***

### role

> **role**: `string` = `'gridcell'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:537](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L537)

Sets/get the `role` property of the cell.
Default value is `"gridcell"`.
```typescript
this.cell.role = 'grid-cell';
```
```typescript
let cellRole = this.cell.role;
```

#### Memberof

IgxGridCellComponent

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`role`](IgxGridCellComponent.md#role)

***

### rowData

> **rowData**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:214](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L214)

Gets the data of the row of the cell.
```typescript
let rowData = this.cell.rowData;
```

#### Memberof

IgxGridCellComponent

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`rowData`](IgxGridCellComponent.md#rowdata)

***

### selectionService

> `protected` **selectionService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:113](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L113)

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`selectionService`](IgxGridCellComponent.md#selectionservice)

***

### value

> **value**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:266](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L266)

Sets/gets the cell value.
```typescript
this.cell.value = "Cell Value";
```
```typescript
let cellValue = this.cell.value;
```

#### Memberof

IgxGridCellComponent

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`value`](IgxGridCellComponent.md#value)

***

### width

> **width**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:630](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L630)

Gets the width of the cell.
```typescript
let cellWidth = this.cell.width;
```

#### Memberof

IgxGridCellComponent

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`width`](IgxGridCellComponent.md#width)

***

### zone

> `protected` **zone**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:118](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L118)

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`zone`](IgxGridCellComponent.md#zone)

## Accessors

### ariaColIndex

#### Get Signature

> **get** `protected` **ariaColIndex**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:746](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L746)

##### Returns

`number`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`ariaColIndex`](IgxGridCellComponent.md#ariacolindex)

***

### ariaRowIndex

#### Get Signature

> **get** `protected` **ariaRowIndex**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:740](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L740)

##### Returns

`number`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`ariaRowIndex`](IgxGridCellComponent.md#ariarowindex)

***

### ariaSelected

#### Get Signature

> **get** **ariaSelected**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:640](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L640)

##### Returns

`boolean`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`ariaSelected`](IgxGridCellComponent.md#ariaselected)

***

### attrCellID

#### Get Signature

> **get** **attrCellID**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:420](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L420)

##### Returns

`string`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`attrCellID`](IgxGridCellComponent.md#attrcellid)

***

### booleanClass

#### Get Signature

> **get** **booleanClass**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:452](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L452)

##### Returns

`any`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`booleanClass`](IgxGridCellComponent.md#booleanclass)

***

### cellID

#### Get Signature

> **get** **cellID**(): `object`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:413](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L413)

Gets the ID of the cell.
```typescript
let cellID = this.cell.cellID;
```

##### Memberof

IgxGridCellComponent

##### Returns

`object`

###### columnID

> **columnID**: `number`

###### rowID

> **rowID**: `any`

###### rowIndex

> **rowIndex**: `number`

Optional; The `cellID` is the unique key, used to identify the cell

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`cellID`](IgxGridCellComponent.md#cellid)

***

### cellSelectionMode

#### Set Signature

> **set** **cellSelectionMode**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:477](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L477)

##### Parameters

###### value

[`GridSelectionMode`](../type-aliases/GridSelectionMode.md)

##### Returns

`void`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`cellSelectionMode`](IgxGridCellComponent.md#cellselectionmode)

***

### colEnd

#### Get Signature

> **get** **colEnd**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:609](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L609)

##### Returns

`number`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`colEnd`](IgxGridCellComponent.md#colend)

***

### colStart

#### Get Signature

> **get** **colStart**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:617](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L617)

##### Returns

`number`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`colStart`](IgxGridCellComponent.md#colstart)

***

### columnIndex

#### Get Signature

> **get** **columnIndex**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:383](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L383)

Gets the `index` of the cell column.
```typescript
let columnIndex = this.cell.columnIndex;
```

##### Memberof

IgxGridCellComponent

##### Returns

`number`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`columnIndex`](IgxGridCellComponent.md#columnindex)

***

### columnSelected

#### Get Signature

> **get** **columnSelected**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:684](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L684)

Gets whether the cell column is selected.
```typescript
let isCellColumnSelected = this.cell.columnSelected;
```

##### Memberof

IgxGridCellComponent

##### Returns

`any`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`columnSelected`](IgxGridCellComponent.md#columnselected)

***

### context

#### Get Signature

> **get** **context**(): [`IgxCellTemplateContext`](../interfaces/IgxCellTemplateContext.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:287](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L287)

Gets the cell template context object.
```typescript
 let context = this.cell.context();
```

##### Memberof

IgxGridCellComponent

##### Returns

[`IgxCellTemplateContext`](../interfaces/IgxCellTemplateContext.md)

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`context`](IgxGridCellComponent.md#context)

***

### editable

#### Get Signature

> **get** **editable**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:721](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L721)

Returns whether the cell is editable.

##### Returns

`boolean`

Indicates whether the cell can be edited.

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`editable`](IgxGridCellComponent.md#editable)

***

### editValue

#### Get Signature

> **get** **editValue**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:712](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L712)

Gets the current edit value while a cell is in edit mode.
Only for cell editing mode.
```typescript
let editValue = this.cell.editValue;
```

##### Memberof

IgxGridCellComponent

##### Returns

`any`

#### Set Signature

> **set** **editValue**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:697](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L697)

Sets the current edit value while a cell is in edit mode.
Only for cell editing mode.
```typescript
this.cell.editValue = value;
```

##### Memberof

IgxGridCellComponent

##### Parameters

###### value

`any`

##### Returns

`void`

The value to display when the cell is in edit mode.

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`editValue`](IgxGridCellComponent.md#editvalue)

***

### formControl

#### Get Signature

> **get** `protected` **formControl**(): `FormControl`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:593](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L593)

Gets the formControl responsible for value changes and validation for this cell.

##### Returns

`FormControl`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`formControl`](IgxGridCellComponent.md#formcontrol)

***

### gridColumnSpan

#### Get Signature

> **get** **gridColumnSpan**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:601](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L601)

##### Returns

`number`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`gridColumnSpan`](IgxGridCellComponent.md#gridcolumnspan)

***

### gridID

#### Get Signature

> **get** **gridID**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:357](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L357)

Gets the `id` of the grid in which the cell is stored.
```typescript
let gridId = this.cell.gridID;
```

##### Memberof

IgxGridCellComponent

##### Returns

`any`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`gridID`](IgxGridCellComponent.md#gridid)

***

### gridRowSpan

#### Get Signature

> **get** **gridRowSpan**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:597](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L597)

##### Returns

`number`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`gridRowSpan`](IgxGridCellComponent.md#gridrowspan)

***

### highlight

#### Get Signature

> **get** `protected` **highlight**(): [`IgxTextHighlightDirective`](IgxTextHighlightDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:777](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L777)

##### Returns

[`IgxTextHighlightDirective`](IgxTextHighlightDirective.md)

#### Set Signature

> **set** `protected` **highlight**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:766](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L766)

##### Parameters

###### value

[`IgxTextHighlightDirective`](IgxTextHighlightDirective.md)

##### Returns

`void`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`highlight`](IgxGridCellComponent.md#highlight)

***

### minHeight

#### Get Signature

> **get** `protected` **minHeight**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:733](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L733)

##### Returns

`any`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`minHeight`](IgxGridCellComponent.md#minheight)

***

### nativeElement

#### Get Signature

> **get** **nativeElement**(): `HTMLElement`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:464](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L464)

Returns a reference to the nativeElement of the cell.
```typescript
let cellNativeElement = this.cell.nativeElement;
```

##### Memberof

IgxGridCellComponent

##### Returns

`HTMLElement`

Represents the native HTML element of the cell itself

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`nativeElement`](IgxGridCellComponent.md#nativeelement)

***

### pinnedIndicatorTemplate

#### Get Signature

> **get** **pinnedIndicatorTemplate**(): `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:342](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L342)

Gets the pinned indicator template.
```typescript
let template = this.cell.pinnedIndicatorTemplate;
```

##### Memberof

IgxGridCellComponent

##### Returns

`TemplateRef`\<`any`\>

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`pinnedIndicatorTemplate`](IgxGridCellComponent.md#pinnedindicatortemplate)

***

### readonly

#### Get Signature

> **get** **readonly**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:548](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L548)

Gets whether the cell is editable.
```typescript
let isCellReadonly = this.cell.readonly;
```

##### Memberof

IgxGridCellComponent

##### Returns

`boolean`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`readonly`](IgxGridCellComponent.md#readonly)

***

### row

#### Get Signature

> **get** **row**(): [`RowType`](../interfaces/RowType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:201](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L201)

Gets the row of the cell.
```typescript
let cellRow = this.cell.row;
```

##### Memberof

IgxGridCellComponent

##### Returns

[`RowType`](../interfaces/RowType.md)

Represents the row that the cell belongs to

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`row`](IgxGridCellComponent.md#row)

***

### rowEnd

#### Get Signature

> **get** **rowEnd**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:605](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L605)

##### Returns

`number`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`rowEnd`](IgxGridCellComponent.md#rowend)

***

### rowIndex

#### Get Signature

> **get** **rowIndex**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:371](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L371)

Gets the `index` of the row where the cell is stored.
```typescript
let rowIndex = this.cell.rowIndex;
```

##### Memberof

IgxGridCellComponent

##### Returns

`number`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`rowIndex`](IgxGridCellComponent.md#rowindex)

***

### rowStart

#### Get Signature

> **get** **rowStart**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:613](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L613)

##### Returns

`number`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`rowStart`](IgxGridCellComponent.md#rowstart)

***

### selected

#### Get Signature

> **get** **selected**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:653](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L653)

Gets whether the cell is selected.
```typescript
let isSelected = this.cell.selected;
```

##### Memberof

IgxGridCellComponent

##### Returns

`boolean`

#### Set Signature

> **set** **selected**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:665](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L665)

Selects/deselects the cell.
```typescript
this.cell.selected = true.
```

##### Memberof

IgxGridCellComponent

##### Parameters

###### val

`boolean`

##### Returns

`void`

Indicates whether the cell is currently selected. It is false, if the sell is not selected, and true, if it is.

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`selected`](IgxGridCellComponent.md#selected)

***

### selectionNode

#### Get Signature

> **get** `protected` **selectionNode**(): [`ISelectionNode`](../interfaces/ISelectionNode.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:781](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L781)

##### Returns

[`ISelectionNode`](../interfaces/ISelectionNode.md)

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`selectionNode`](IgxGridCellComponent.md#selectionnode)

***

### template

#### Get Signature

> **get** **template**(): `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:317](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L317)

Gets the cell template.
```typescript
let template = this.cell.template;
```

##### Memberof

IgxGridCellComponent

##### Returns

`TemplateRef`\<`any`\>

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`template`](IgxGridCellComponent.md#template)

***

### title

#### Get Signature

> **get** **title**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:425](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L425)

An optional title to display for the cell

##### Returns

`any`

An optional title to display for the cell

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`title`](IgxGridCellComponent.md#title)

***

### visibleColumnIndex

#### Get Signature

> **get** **visibleColumnIndex**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:397](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L397)

Returns the column visible index.
```typescript
let visibleColumnIndex = this.cell.visibleColumnIndex;
```

##### Memberof

IgxGridCellComponent

##### Returns

`number`

#### Set Signature

> **set** **visibleColumnIndex**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:401](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L401)

The index of the column that the cell belongs to. It counts only the visible (not hidden) columns

##### Parameters

###### val

`number`

##### Returns

`void`

The index of the column that the cell belongs to. It counts only the visible (not hidden) columns

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`visibleColumnIndex`](IgxGridCellComponent.md#visiblecolumnindex)

## Methods

### clearHighlight()

> **clearHighlight**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:1206](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L1206)

Clears the highlight of the text in the cell.
```typescript
this.cell.clearHighLight();
```

#### Returns

`void`

#### Memberof

IgxGridCellComponent

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`clearHighlight`](IgxGridCellComponent.md#clearhighlight)

***

### highlightText()

> **highlightText**(`text`, `caseSensitive?`, `exactMatch?`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:1194](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L1194)

If the provided string matches the text in the cell, the text gets highlighted.
```typescript
this.cell.highlightText('Cell Value', true);
```

#### Parameters

##### text

`string`

##### caseSensitive?

`boolean`

##### exactMatch?

`boolean`

#### Returns

`number`

#### Memberof

IgxGridCellComponent

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`highlightText`](IgxGridCellComponent.md#highlighttext)

***

### ngAfterViewInit()

> **ngAfterViewInit**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:899](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L899)

#### Returns

`void`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`ngAfterViewInit`](IgxGridCellComponent.md#ngafterviewinit)

***

### setEditMode()

> **setEditMode**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:999](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L999)

Starts/ends edit mode for the cell.

```typescript
cell.setEditMode(true);
```

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`setEditMode`](IgxGridCellComponent.md#seteditmode)

***

### update()

> **update**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/cell.component.ts:1024](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/cell.component.ts#L1024)

Sets new value to the cell.
```typescript
this.cell.update('New Value');
```

#### Parameters

##### val

`any`

#### Returns

`void`

#### Memberof

IgxGridCellComponent

#### Inherited from

[`IgxGridCellComponent`](IgxGridCellComponent.md).[`update`](IgxGridCellComponent.md#update)

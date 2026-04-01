# Class: IgxGridExcelStyleFilteringComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts:67](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts#L67)

A component used for presenting Excel style filtering UI for a specific column.
It is used internally in the Grid, but could also be hosted in a container outside of it.

Example:
```html
<igx-grid-excel-style-filtering
    [column]="grid1.columns[0]">
</igx-grid-excel-style-filtering>
```

## Extends

- `BaseFilteringComponent`

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxGridExcelStyleFilteringComponent**(): `IgxGridExcelStyleFilteringComponent`

#### Returns

`IgxGridExcelStyleFilteringComponent`

#### Inherited from

`BaseFilteringComponent.constructor`

## Properties

### cdr

> `protected` **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/base-filtering.component.ts:9](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/base-filtering.component.ts#L9)

#### Inherited from

`BaseFilteringComponent.cdr`

***

### computedStyles

> `protected` **computedStyles**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts:401](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts#L401)

***

### element

> **element**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/base-filtering.component.ts:10](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/base-filtering.component.ts#L10)

#### Inherited from

`BaseFilteringComponent.element`

***

### gridAPI?

> `protected` `optional` **gridAPI?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts:69](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts#L69)

***

### mainDropdown

> **mainDropdown**: `ElementRef`\<`HTMLElement`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts:132](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts#L132)

#### Overrides

`BaseFilteringComponent.mainDropdown`

***

### platform

> `protected` **platform**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/base-filtering.component.ts:11](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/base-filtering.component.ts#L11)

#### Inherited from

`BaseFilteringComponent.platform`

## Accessors

### column

#### Get Signature

> **get** **column**(): [`ColumnType`](../interfaces/ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts:176](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts#L176)

Returns the current column.

##### Returns

[`ColumnType`](../interfaces/ColumnType.md)

#### Set Signature

> **set** **column**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts:162](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts#L162)

Sets the column.

##### Parameters

###### value

[`ColumnType`](../interfaces/ColumnType.md)

##### Returns

`void`

#### Overrides

`BaseFilteringComponent.column`

***

### maxHeight

#### Get Signature

> **get** **maxHeight**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts:259](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts#L259)

Gets the maximum height.

Setting value in template:
```ts
[maxHeight]="'<number><unit (px|rem|etc..)>'"
```

Example for setting a value:
```ts
[maxHeight]="'700px'"
```

##### Returns

`string`

#### Set Signature

> **set** **maxHeight**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts:268](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts#L268)

Sets the maximum height.

##### Parameters

###### value

`string`

##### Returns

`void`

***

### minHeight

#### Get Signature

> **get** **minHeight**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts:221](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts#L221)

Gets the minimum height.

Setting value in template:
```ts
[minHeight]="'<number><unit (px|rem|etc..)>'"
```

Example for setting a value:
```ts
[minHeight]="'700px'"
```

##### Returns

`string`

#### Set Signature

> **set** **minHeight**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts:230](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts#L230)

Sets the minimum height.

##### Parameters

###### value

`string`

##### Returns

`void`

***

### shouldApplySizes

#### Get Signature

> **get** `protected` **shouldApplySizes**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts:79](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts#L79)

##### Returns

`boolean`

***

### size

#### Get Signature

> **get** `protected` **size**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts:403](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts#L403)

##### Returns

`string`

## Methods

### afterColumnChange()

> `protected` **afterColumnChange**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts:407](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-filtering.component.ts#L407)

#### Returns

`void`

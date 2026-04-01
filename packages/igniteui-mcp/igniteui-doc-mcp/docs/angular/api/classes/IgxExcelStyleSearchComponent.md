# Class: IgxExcelStyleSearchComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts:40](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts#L40)

A component used for presenting Excel style search UI.

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxExcelStyleSearchComponent**(): `IgxExcelStyleSearchComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts:193](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts#L193)

#### Returns

`IgxExcelStyleSearchComponent`

## Properties

### activeDescendant

> `protected` **activeDescendant**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts:183](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts#L183)

***

### cancelButton

> `protected` **cancelButton**: [`IgxButtonDirective`](IgxButtonDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts:60](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts#L60)

***

### cdr

> **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts:41](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts#L41)

***

### esf

> **esf**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts:42](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts#L42)

***

### platform

> `protected` **platform**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts:43](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts#L43)

## Accessors

### focusedItem

#### Get Signature

> **get** `protected` **focusedItem**(): `ActiveElement`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts:389](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts#L389)

##### Returns

`ActiveElement`

#### Set Signature

> **set** `protected` **focusedItem**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts:393](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts#L393)

##### Parameters

###### val

`ActiveElement`

##### Returns

`void`

***

### id

#### Get Signature

> **get** `protected` **id**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts:374](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts#L374)

##### Returns

`string`

#### Set Signature

> **set** `protected` **id**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts:377](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts#L377)

##### Parameters

###### value

`string`

##### Returns

`void`

## Methods

### getItemId()

> `protected` **getItemId**(`index`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts:381](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts#L381)

#### Parameters

##### index

`number`

#### Returns

`string`

***

### handleKeyDown()

> `protected` **handleKeyDown**(`event`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts:651](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts#L651)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`void`

***

### ngAfterViewInit()

> **ngAfterViewInit**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts:242](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts#L242)

#### Returns

`void`

***

### ngOnDestroy()

> **ngOnDestroy**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts:249](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts#L249)

#### Returns

`void`

***

### onFocus()

> `protected` **onFocus**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts:687](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts#L687)

#### Returns

`void`

***

### onFocusOut()

> `protected` **onFocusOut**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts:699](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts#L699)

#### Returns

`void`

***

### setActiveDescendant()

> `protected` **setActiveDescendant**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts:385](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/filtering/excel-style/excel-style-search.component.ts#L385)

#### Returns

`void`

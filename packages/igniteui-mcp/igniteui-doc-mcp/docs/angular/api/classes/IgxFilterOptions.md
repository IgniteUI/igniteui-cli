# Class: IgxFilterOptions

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/filter/filter.directive.ts:12](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/filter/filter.directive.ts#L12)

## Constructors

### Constructor

> **new IgxFilterOptions**(): `IgxFilterOptions`

#### Returns

`IgxFilterOptions`

## Properties

### inputValue

> **inputValue**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/filter/filter.directive.ts:14](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/filter/filter.directive.ts#L14)

***

### items

> **items**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/filter/filter.directive.ts:20](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/filter/filter.directive.ts#L20)

***

### key

> **key**: `string` \| `string`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/filter/filter.directive.ts:17](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/filter/filter.directive.ts#L17)

## Methods

### formatter()

> **formatter**(`valueToTest`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/filter/filter.directive.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/filter/filter.directive.ts#L46)

#### Parameters

##### valueToTest

`string`

#### Returns

`string`

***

### get\_value()

> **get\_value**(`item`, `key`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/filter/filter.directive.ts:27](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/filter/filter.directive.ts#L27)

#### Parameters

##### item

`any`

##### key

`string`

#### Returns

`string`

***

### matchFn()

> **matchFn**(`valueToTest`, `inputValue`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/filter/filter.directive.ts:54](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/filter/filter.directive.ts#L54)

#### Parameters

##### valueToTest

`string`

##### inputValue

`string`

#### Returns

`boolean`

***

### metConditionFn()

> **metConditionFn**(`item`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/filter/filter.directive.ts:60](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/filter/filter.directive.ts#L60)

#### Parameters

##### item

`any`

#### Returns

`void`

***

### overdueConditionFn()

> **overdueConditionFn**(`item`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/filter/filter.directive.ts:68](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/filter/filter.directive.ts#L68)

#### Parameters

##### item

`any`

#### Returns

`void`

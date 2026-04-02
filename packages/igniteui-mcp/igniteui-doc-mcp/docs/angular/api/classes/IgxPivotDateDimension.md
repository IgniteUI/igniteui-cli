# Class: IgxPivotDateDimension

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts:48](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts#L48)

Configuration of a pivot dimension.

## Implements

- [`IPivotDimension`](../interfaces/IPivotDimension.md)

## Constructors

### Constructor

> **new IgxPivotDateDimension**(`inBaseDimension?`, `inOptions?`): `IgxPivotDateDimension`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts:125](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts#L125)

Creates additional pivot date dimensions based on a provided dimension describing date data:

#### Parameters

##### inBaseDimension?

[`IPivotDimension`](../interfaces/IPivotDimension.md) = `null`

##### inOptions?

[`IPivotDateDimensionOptions`](../interfaces/IPivotDateDimensionOptions.md) = `{}`

Options for the predefined date dimensions whether to show quarter, years and etc.

#### Returns

`IgxPivotDateDimension`

#### Example

```typescript
// Displays only years as parent dimension to the base dimension provided.
new IgxPivotDateDimension({ memberName: 'Date', enabled: true }, { total: false, months: false });
```

## Properties

### dataType?

> `optional` **dataType?**: `GridColumnDataType`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts:55](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts#L55)

Gets/Sets data type

#### Implementation of

[`IPivotDimension`](../interfaces/IPivotDimension.md).[`dataType`](../interfaces/IPivotDimension.md#datatype)

***

### defaultOptions

> **defaultOptions**: `object`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts:59](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts#L59)

Default options.

#### fullDate

> **fullDate**: `boolean` = `true`

#### months

> **months**: `boolean` = `true`

#### total

> **total**: `boolean` = `true`

#### years

> **years**: `boolean` = `true`

***

### displayName

> **displayName**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts:109](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts#L109)

Display name to show instead of the field name of this value. *

#### Implementation of

[`IPivotDimension`](../interfaces/IPivotDimension.md).[`displayName`](../interfaces/IPivotDimension.md#displayname)

***

### enabled

> **enabled**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts:50](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts#L50)

Enables/Disables a particular dimension from pivot structure.

#### Implementation of

[`IPivotDimension`](../interfaces/IPivotDimension.md).[`enabled`](../interfaces/IPivotDimension.md#enabled)

## Accessors

### baseDimension

#### Get Signature

> **get** **baseDimension**(): [`IPivotDimension`](../interfaces/IPivotDimension.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts:84](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts#L84)

Gets/Sets the base dimension that is used by this class to determine the other dimensions and their values.
Having base dimension set is required in order for the Date Dimensions to show.

##### Returns

[`IPivotDimension`](../interfaces/IPivotDimension.md)

#### Set Signature

> **set** **baseDimension**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts:87](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts#L87)

##### Parameters

###### value

[`IPivotDimension`](../interfaces/IPivotDimension.md)

##### Returns

`void`

***

### options

#### Get Signature

> **get** **options**(): [`IPivotDateDimensionOptions`](../interfaces/IPivotDateDimensionOptions.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts:95](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts#L95)

Gets/Sets the options for the predefined date dimensions whether to show quarter, years and etc.

##### Returns

[`IPivotDateDimensionOptions`](../interfaces/IPivotDateDimensionOptions.md)

#### Set Signature

> **set** **options**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts:98](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts#L98)

##### Parameters

###### value

[`IPivotDateDimensionOptions`](../interfaces/IPivotDateDimensionOptions.md)

##### Returns

`void`

***

### resourceStrings

#### Get Signature

> **get** **resourceStrings**(): `PrefixedResourceStrings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts:76](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts#L76)

##### Returns

`PrefixedResourceStrings`

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts:72](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts#L72)

Gets/Sets the resource strings.

##### Remarks

By default it uses EN resources.

##### Parameters

###### value

`PrefixedResourceStrings`

##### Returns

`void`

## Methods

### initialize()

> `protected` **initialize**(`inBaseDimension`, `inOptions`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts:133](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/pivot-grid-dimensions.ts#L133)

#### Parameters

##### inBaseDimension

`any`

##### inOptions

`any`

#### Returns

`void`

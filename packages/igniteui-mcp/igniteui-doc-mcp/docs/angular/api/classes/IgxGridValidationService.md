# Class: IgxGridValidationService

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-validation.service.ts:7](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-validation.service.ts#L7)

## Constructors

### Constructor

> **new IgxGridValidationService**(): `IgxGridValidationService`

#### Returns

`IgxGridValidationService`

## Accessors

### valid

#### Get Signature

> **get** **valid**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-validation.service.ts:19](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-validation.service.ts#L19)

Gets whether state is valid.

##### Returns

`boolean`

## Methods

### clear()

> **clear**(`key?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-validation.service.ts:214](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-validation.service.ts#L214)

Clears validation state by key or all states if none is provided.

#### Parameters

##### key?

`any`

Optional. The key of the record for which to clear state.

#### Returns

`void`

***

### getInvalid()

> **getInvalid**(): [`IRecordValidationState`](../interfaces/IRecordValidationState.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-validation.service.ts:144](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-validation.service.ts#L144)

Returns all invalid record states.

#### Returns

[`IRecordValidationState`](../interfaces/IRecordValidationState.md)[]

***

### isFieldInvalid()

> **isFieldInvalid**(`formGroup`, `fieldName`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-validation.service.ts:108](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-validation.service.ts#L108)

Checks the validity of the native ngControl

#### Parameters

##### formGroup

`FormGroup`

##### fieldName

`string`

#### Returns

`boolean`

***

### isFieldValidAfterEdit()

> **isFieldValidAfterEdit**(`formGroup`, `fieldName`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-validation.service.ts:116](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-validation.service.ts#L116)

Checks the validity of the native ngControl after edit

#### Parameters

##### formGroup

`FormGroup`

##### fieldName

`string`

#### Returns

`boolean`

***

### markAsTouched()

> **markAsTouched**(`key`, `field?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-validation.service.ts:188](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-validation.service.ts#L188)

Marks the associated record or field as touched.

#### Parameters

##### key

`any`

The id of the record that will be marked as touched.

##### field?

`string`

Optional. The field from the record that will be marked as touched. If not provided all fields will be touched.

#### Returns

`void`

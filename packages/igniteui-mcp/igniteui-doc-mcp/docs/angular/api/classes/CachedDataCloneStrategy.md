# Class: CachedDataCloneStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/data-clone-strategy.ts:26](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/data-clone-strategy.ts#L26)

Data clone strategy that is uses cache to deep clone primitive values, dates and objects.
It allows using circular references inside object.

## Implements

- [`IDataCloneStrategy`](../interfaces/IDataCloneStrategy.md)

## Constructors

### Constructor

> **new CachedDataCloneStrategy**(): `CachedDataCloneStrategy`

#### Returns

`CachedDataCloneStrategy`

## Methods

### clone()

> **clone**(`data`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/data-clone-strategy.ts:27](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/data-clone-strategy.ts#L27)

Clones provided data

#### Parameters

##### data

`any`

primitive value, date and object to be cloned

#### Returns

`any`

deep copy of provided value

#### Implementation of

[`IDataCloneStrategy`](../interfaces/IDataCloneStrategy.md).[`clone`](../interfaces/IDataCloneStrategy.md#clone)

# Class: DefaultDataCloneStrategy

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/data-clone-strategy.ts:16](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/data-clone-strategy.ts#L16)

Simplified data clone strategy that deep clones primitive values, dates and objects.
Does not support circular references in objects.

## Implements

- [`IDataCloneStrategy`](../interfaces/IDataCloneStrategy.md)

## Constructors

### Constructor

> **new DefaultDataCloneStrategy**(): `DefaultDataCloneStrategy`

#### Returns

`DefaultDataCloneStrategy`

## Methods

### clone()

> **clone**(`data`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/data-clone-strategy.ts:17](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/data-clone-strategy.ts#L17)

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

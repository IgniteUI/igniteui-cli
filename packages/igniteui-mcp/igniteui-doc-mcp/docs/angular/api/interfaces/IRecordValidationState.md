# Interface: IRecordValidationState

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:313](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L313)

Interface representing the validation state of a record in the grid.
- `key`: The unique identifier of the record.
- `fields`: An array of the validation state of individual fields in the record.

## Extends

- [`IGridValidationState`](IGridValidationState.md)

## Properties

### errors?

> `readonly` `optional` **errors?**: `ValidationErrors`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:305](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L305)

#### Inherited from

[`IGridValidationState`](IGridValidationState.md).[`errors`](IGridValidationState.md#errors)

***

### fields

> **fields**: [`IFieldValidationState`](IFieldValidationState.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:315](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L315)

***

### key

> **key**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:314](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L314)

***

### status

> `readonly` **status**: [`ValidationStatus`](../type-aliases/ValidationStatus.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/grid.interface.ts:304](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/grid.interface.ts#L304)

#### Inherited from

[`IGridValidationState`](IGridValidationState.md).[`status`](IGridValidationState.md#status)

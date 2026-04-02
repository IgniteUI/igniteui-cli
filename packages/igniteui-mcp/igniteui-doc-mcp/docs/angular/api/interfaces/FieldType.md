# Interface: FieldType

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:103](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L103)

Describes a field that can be used in the Grid and QueryBuilder components.

## Extended by

- [`ColumnType`](ColumnType.md)

## Properties

### dataType

> **dataType**: `GridColumnDataType`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:123](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L123)

The data type of the field.

***

### defaultDateTimeFormat?

> `optional` **defaultDateTimeFormat?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:148](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L148)

Default date/time format for Date/Time fields.

***

### defaultTimeFormat?

> `optional` **defaultTimeFormat?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:143](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L143)

Default time format for Date/Time fields.

***

### editorOptions?

> `optional` **editorOptions?**: [`IFieldEditorOptions`](IFieldEditorOptions.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:128](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L128)

Options for the editor associated with this field.

***

### field

> **field**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:112](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L112)

The internal field name, used in expressions and queries.

***

### filters?

> `optional` **filters?**: [`IgxFilteringOperand`](../classes/IgxFilteringOperand.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:133](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L133)

Optional filtering operands that apply to this field.

***

### header?

> `optional` **header?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:117](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L117)

Optional column header for UI display purposes.

***

### label?

> `optional` **label?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:107](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L107)

Display label for the field.

***

### pipeArgs?

> `optional` **pipeArgs?**: [`IFieldPipeArgs`](IFieldPipeArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:138](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L138)

Optional arguments for any pipe applied to the field.

## Methods

### formatter()?

> `optional` **formatter**(`value`, `rowData?`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:157](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L157)

Optional formatter function to transform the value before display.

#### Parameters

##### value

`any`

The value of the field.

##### rowData?

`any`

Optional row data that contains this field.

#### Returns

`any`

The formatted value.

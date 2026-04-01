# Interface: IColumnPipeArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:42](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L42)

## Extends

- [`IFieldPipeArgs`](IFieldPipeArgs.md)

## Properties

### currencyCode?

> `optional` **currencyCode?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:29](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L29)

The currency code of type string, default value undefined

#### Inherited from

[`IFieldPipeArgs`](IFieldPipeArgs.md).[`currencyCode`](IFieldPipeArgs.md#currencycode)

***

### digitsInfo?

> `optional` **digitsInfo?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:27](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L27)

Decimal representation options, specified by a string in the following format:
`{minIntegerDigits}`.`{minFractionDigits}`-`{maxFractionDigits}`.
`minIntegerDigits`: The minimum number of integer digits before the decimal point. Default is 1.
`minFractionDigits`: The minimum number of digits after the decimal point. Default is 0.
`maxFractionDigits`: The maximum number of digits after the decimal point. Default is 3.

#### Inherited from

[`IFieldPipeArgs`](IFieldPipeArgs.md).[`digitsInfo`](IFieldPipeArgs.md#digitsinfo)

***

### display?

> `optional` **display?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L34)

Allow us to display currency 'symbol' or 'code' or 'symbol-narrow' or our own string.
The value is of type string. By default is set to 'symbol'

#### Inherited from

[`IFieldPipeArgs`](IFieldPipeArgs.md).[`display`](IFieldPipeArgs.md#display)

***

### format?

> `optional` **format?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:17](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L17)

The date/time components that a date column will display, using predefined options or a custom format string.

#### Inherited from

[`IFieldPipeArgs`](IFieldPipeArgs.md).[`format`](IFieldPipeArgs.md#format)

***

### timezone?

> `optional` **timezone?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:19](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L19)

A timezone offset (such as '+0430'), or a standard UTC/GMT or continental US timezone abbreviation.

#### Inherited from

[`IFieldPipeArgs`](IFieldPipeArgs.md).[`timezone`](IFieldPipeArgs.md#timezone)

***

### weekStart?

> `optional` **weekStart?**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:37](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L37)

The first week day to be displayed in calendar when filtering or editing a date column

#### Inherited from

[`IFieldPipeArgs`](IFieldPipeArgs.md).[`weekStart`](IFieldPipeArgs.md#weekstart)

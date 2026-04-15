# Interface: IFieldPipeArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L15)

## Extended by

- [`IColumnPipeArgs`](IColumnPipeArgs.md)

## Properties

### currencyCode?

> `optional` **currencyCode?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:29](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L29)

The currency code of type string, default value undefined

***

### digitsInfo?

> `optional` **digitsInfo?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:27](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L27)

Decimal representation options, specified by a string in the following format:
`{minIntegerDigits}`.`{minFractionDigits}`-`{maxFractionDigits}`.
`minIntegerDigits`: The minimum number of integer digits before the decimal point. Default is 1.
`minFractionDigits`: The minimum number of digits after the decimal point. Default is 0.
`maxFractionDigits`: The maximum number of digits after the decimal point. Default is 3.

***

### display?

> `optional` **display?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L34)

Allow us to display currency 'symbol' or 'code' or 'symbol-narrow' or our own string.
The value is of type string. By default is set to 'symbol'

***

### format?

> `optional` **format?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:17](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L17)

The date/time components that a date column will display, using predefined options or a custom format string.

***

### timezone?

> `optional` **timezone?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:19](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L19)

A timezone offset (such as '+0430'), or a standard UTC/GMT or continental US timezone abbreviation.

***

### weekStart?

> `optional` **weekStart?**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:37](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L37)

The first week day to be displayed in calendar when filtering or editing a date column

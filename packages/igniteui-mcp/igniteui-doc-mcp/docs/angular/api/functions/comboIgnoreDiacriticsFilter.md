# Function: comboIgnoreDiacriticsFilter()

> **comboIgnoreDiacriticsFilter**\<`T`\>(`collection`, `searchValue`, `filteringOptions`): `T`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.pipes.ts:106](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.pipes.ts#L106)

Combo filter function which does not distinguish between accented letters and their base letters.
For example, when filtering for "resume", this function will match both "resume" and "résumé".

## Type Parameters

### T

`T`

## Parameters

### collection

`T`[]

### searchValue

`string`

### filteringOptions

[`IComboFilteringOptions`](../interfaces/IComboFilteringOptions.md)

## Returns

`T`[]

## Example

```html
<igx-combo [filterFunction]="comboIgnoreDiacriticFilterFunction"></igx-combo>
```

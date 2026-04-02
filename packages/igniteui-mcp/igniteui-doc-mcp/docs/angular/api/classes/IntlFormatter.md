# Class: IntlFormatter

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-intl.ts:14](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-intl.ts#L14)

## Extends

- [`BaseFormatter`](BaseFormatter.md)

## Constructors

### Constructor

> **new IntlFormatter**(): `IntlFormatter`

#### Returns

`IntlFormatter`

#### Inherited from

[`BaseFormatter`](BaseFormatter.md).[`constructor`](BaseFormatter.md#constructor)

## Properties

### IntlDateTimeStyleValues

> `protected` **IntlDateTimeStyleValues**: `object`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts:22](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts#L22)

#### full

> **full**: `string` = `'Full'`

#### long

> **long**: `string` = `'Long'`

#### medium

> **medium**: `string` = `'Medium'`

#### short

> **short**: `string` = `'Short'`

#### Inherited from

[`BaseFormatter`](BaseFormatter.md).[`IntlDateTimeStyleValues`](BaseFormatter.md#intldatetimestylevalues)

## Methods

### formatCurrency()

> **formatCurrency**(`value`, `locale?`, `display?`, `currencyCode?`, `digitsInfo?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-intl.ts:51](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-intl.ts#L51)

Format number as a currency based on locale

#### Parameters

##### value

`string` \| `number`

##### locale?

`string`

##### display?

`string`

##### currencyCode?

`string`

##### digitsInfo?

`string`

#### Returns

`string`

#### Overrides

[`BaseFormatter`](BaseFormatter.md).[`formatCurrency`](BaseFormatter.md#formatcurrency)

***

### formatDate()

> **formatDate**(`value`, `format`, `locale`, `timezone?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-intl.ts:24](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-intl.ts#L24)

Format provided date to reflect locales format. Similar to Angular's formatDate.

#### Parameters

##### value

`string` \| `number` \| `Date`

##### format

`string`

##### locale

`string`

##### timezone?

`string`

#### Returns

`string`

#### Overrides

[`BaseFormatter`](BaseFormatter.md).[`formatDate`](BaseFormatter.md#formatdate)

***

### formatNumber()

> **formatNumber**(`value`, `locale?`, `digitsInfo?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-intl.ts:43](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-intl.ts#L43)

Format number value based on locale

#### Parameters

##### value

`string` \| `number`

##### locale?

`string`

##### digitsInfo?

`string`

#### Returns

`string`

#### Overrides

[`BaseFormatter`](BaseFormatter.md).[`formatNumber`](BaseFormatter.md#formatnumber)

***

### formatPercent()

> **formatPercent**(`value`, `locale?`, `digitsInfo?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-intl.ts:47](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-intl.ts#L47)

Format number value as percent based on locale

#### Parameters

##### value

`string` \| `number`

##### locale?

`string`

##### digitsInfo?

`string`

#### Returns

`string`

#### Overrides

[`BaseFormatter`](BaseFormatter.md).[`formatPercent`](BaseFormatter.md#formatpercent)

***

### getCurrencyCode()

> **getCurrencyCode**(`_locale`, `overrideCode?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-intl.ts:55](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-intl.ts#L55)

Retrieve the currency code of the locale provided.
Angular provides locale data for them, if using that.
When using Intl, it should be user defined and defaults to USD.

#### Parameters

##### \_locale

`string`

##### overrideCode?

`string`

#### Returns

`string`

#### Overrides

[`BaseFormatter`](BaseFormatter.md).[`getCurrencyCode`](BaseFormatter.md#getcurrencycode)

***

### getCurrencySymbol()

> **getCurrencySymbol**(`currencyCode`, `locale?`, `currencyDisplay?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-intl.ts:59](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-intl.ts#L59)

Get the currency symbol based on a currency code.

#### Parameters

##### currencyCode

`string`

##### locale?

`string`

##### currencyDisplay?

keyof `NumberFormatOptionsCurrencyDisplayRegistry` = `"symbol"`

#### Returns

`string`

#### Overrides

[`BaseFormatter`](BaseFormatter.md).[`getCurrencySymbol`](BaseFormatter.md#getcurrencysymbol)

***

### getFormatOptions()

> **getFormatOptions**(`format`): `DateTimeFormatOptions`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts:51](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts#L51)

Get Intl options based on format provided:

date and time formats - short, medium, long, full

date formats - shortDate, mediumDate, longDate, fullDate

time formats - shortTime, mediumTime, longTime, fullTime

#### Parameters

##### format

`string`

#### Returns

`DateTimeFormatOptions`

Return the resolved options or null if not matching any of the above.

#### Inherited from

[`BaseFormatter`](BaseFormatter.md).[`getFormatOptions`](BaseFormatter.md#getformatoptions)

***

### getLocaleDateTimeFormat()

> **getLocaleDateTimeFormat**(`locale`, `forceLeadingZero?`, `options?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts:73](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts#L73)

Returns the date and time format based on a provided locale and options.

#### Parameters

##### locale

`string`

##### forceLeadingZero?

`boolean` = `false`

##### options?

`DateTimeFormatOptions`

#### Returns

`string`

#### Inherited from

[`BaseFormatter`](BaseFormatter.md).[`getLocaleDateTimeFormat`](BaseFormatter.md#getlocaledatetimeformat)

***

### getLocaleFirstDayOfWeek()

> **getLocaleFirstDayOfWeek**(`locale?`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-intl.ts:63](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-intl.ts#L63)

Get first day of the week.
Angular's default: 0...6.
Intl default: 1...7.

#### Parameters

##### locale?

`string`

#### Returns

`number`

#### Overrides

[`BaseFormatter`](BaseFormatter.md).[`getLocaleFirstDayOfWeek`](BaseFormatter.md#getlocalefirstdayofweek)

***

### verifyLocale()

> **verifyLocale**(`locale`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-intl.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-intl.ts#L15)

#### Parameters

##### locale

`string`

#### Returns

`string`

#### Overrides

[`BaseFormatter`](BaseFormatter.md).[`verifyLocale`](BaseFormatter.md#verifylocale)

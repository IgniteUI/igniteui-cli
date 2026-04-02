# Class: BaseFormatter

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts:21](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts#L21)

## Extended by

- [`IntlFormatter`](IntlFormatter.md)

## Constructors

### Constructor

> **new BaseFormatter**(): `BaseFormatter`

#### Returns

`BaseFormatter`

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

## Methods

### formatCurrency()

> **formatCurrency**(`value`, `locale?`, `display?`, `currencyCode?`, `digitsInfo?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts:101](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts#L101)

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

***

### formatDate()

> **formatDate**(`value`, `format`, `locale`, `timezone?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts:80](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts#L80)

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

***

### formatNumber()

> **formatNumber**(`value`, `locale`, `digitsInfo?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts:85](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts#L85)

Format number value based on locale

#### Parameters

##### value

`string` \| `number`

##### locale

`string`

##### digitsInfo?

`string`

#### Returns

`string`

***

### formatPercent()

> **formatPercent**(`value`, `locale`, `digitsInfo?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts:93](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts#L93)

Format number value as percent based on locale

#### Parameters

##### value

`string` \| `number`

##### locale

`string`

##### digitsInfo?

`string`

#### Returns

`string`

***

### getCurrencyCode()

> **getCurrencyCode**(`locale`, `overrideCode?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts:114](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts#L114)

Retrieve the currency code of the locale provided.
Angular provides locale data for them, if using that.
When using Intl, it should be user defined and defaults to USD.

#### Parameters

##### locale

`string`

##### overrideCode?

`string`

#### Returns

`string`

***

### getCurrencySymbol()

> **getCurrencySymbol**(`currencyCode`, `locale`, `currencyDisplay?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts:123](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts#L123)

Get the currency symbol based on a currency code.

#### Parameters

##### currencyCode

`string`

##### locale

`string`

##### currencyDisplay?

keyof `NumberFormatOptionsCurrencyDisplayRegistry` = `"symbol"`

#### Returns

`string`

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

***

### getLocaleFirstDayOfWeek()

> **getLocaleFirstDayOfWeek**(`locale`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts:136](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts#L136)

Get first day of the week.
Angular's default: 0...6.
Intl default: 1...7.

#### Parameters

##### locale

`string`

#### Returns

`number`

***

### verifyLocale()

> **verifyLocale**(`locale`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts:30](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/i18n/formatters/formatter-base.ts#L30)

#### Parameters

##### locale

`string`

#### Returns

`string`

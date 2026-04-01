# Class: CalendarDay

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L34)

## Constructors

### Constructor

> **new CalendarDay**(`args`): `CalendarDay`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:51](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L51)

#### Parameters

##### args

`CalendarDayParams`

#### Returns

`CalendarDay`

## Accessors

### date

#### Get Signature

> **get** **date**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:110](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L110)

Returns the date

##### Returns

`number`

***

### day

#### Get Signature

> **get** **day**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:95](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L95)

Returns the day of the week (Sunday = 0).

##### Returns

`number`

***

### month

#### Get Signature

> **get** **month**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:105](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L105)

Returns the month.

##### Returns

`number`

***

### native

#### Get Signature

> **get** **native**(): `Date`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:220](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L220)

Returns the underlying native date instance.

##### Returns

`Date`

***

### timestamp

#### Get Signature

> **get** **timestamp**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:115](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L115)

Returns the timestamp since epoch in milliseconds.

##### Returns

`number`

***

### week

#### Get Signature

> **get** **week**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:120](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L120)

Returns the ISO 8601 week number.

##### Returns

`number`

***

### weekend

#### Get Signature

> **get** **weekend**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:230](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L230)

Whether the current date is a weekend day.

##### Remarks

This is naive, since it does not account for locale specifics.

##### Returns

`boolean`

***

### year

#### Get Signature

> **get** **year**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:100](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L100)

Returns the full year.

##### Returns

`number`

***

### today

#### Get Signature

> **get** `static` **today**(): `CalendarDay`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:38](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L38)

Constructs and returns the current day.

##### Returns

`CalendarDay`

## Methods

### add()

> **add**(`unit`, `value`): `CalendarDay`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:71](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L71)

#### Parameters

##### unit

[`DayInterval`](../type-aliases/DayInterval.md)

##### value

`number`

#### Returns

`CalendarDay`

***

### clone()

> **clone**(): `CalendarDay`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:56](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L56)

Returns a copy of this instance.

#### Returns

`CalendarDay`

***

### equalTo()

> **equalTo**(`value`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:234](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L234)

#### Parameters

##### value

[`DayParameter`](../type-aliases/DayParameter.md)

#### Returns

`boolean`

***

### getWeekNumber()

> **getWeekNumber**(`weekStart?`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:129](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L129)

Gets the week number based on week start day.
Uses ISO 8601 (first Thursday rule) only when weekStart is Monday (1).
For other week starts, uses simple counting from January 1st.

#### Parameters

##### weekStart?

`number` = `1`

#### Returns

`number`

***

### greaterThan()

> **greaterThan**(`value`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:238](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L238)

#### Parameters

##### value

[`DayParameter`](../type-aliases/DayParameter.md)

#### Returns

`boolean`

***

### greaterThanOrEqual()

> **greaterThanOrEqual**(`value`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:241](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L241)

#### Parameters

##### value

[`DayParameter`](../type-aliases/DayParameter.md)

#### Returns

`boolean`

***

### lessThan()

> **lessThan**(`value`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:245](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L245)

#### Parameters

##### value

[`DayParameter`](../type-aliases/DayParameter.md)

#### Returns

`boolean`

***

### lessThanOrEqual()

> **lessThanOrEqual**(`value`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:249](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L249)

#### Parameters

##### value

[`DayParameter`](../type-aliases/DayParameter.md)

#### Returns

`boolean`

***

### set()

> **set**(`args`): `CalendarDay`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:63](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L63)

Returns a new instance with values replaced.

#### Parameters

##### args

`Partial`\<`CalendarDayParams`\>

#### Returns

`CalendarDay`

***

### toString()

> **toString**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:253](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L253)

#### Returns

`string`

***

### from()

> `static` **from**(`date`): `CalendarDay`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/model.ts:43](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/model.ts#L43)

Constructs a new CalendarDay instance from a Date object.

#### Parameters

##### date

`Date`

#### Returns

`CalendarDay`

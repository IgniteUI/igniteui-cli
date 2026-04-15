# Function: calendarRange()

> **calendarRange**(`options`): `Generator`\<[`CalendarDay`](../classes/CalendarDay.md), `void`, `unknown`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/date-common/util/helpers.ts:92](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/date-common/util/helpers.ts#L92)

Returns a generator yielding day values between `start` and `end` (non-inclusive)
by a given `unit` as a step.

## Parameters

### options

[`CalendarRangeParams`](../type-aliases/CalendarRangeParams.md)

## Returns

`Generator`\<[`CalendarDay`](../classes/CalendarDay.md), `void`, `unknown`\>

## Remarks

By default, `unit` is set to 'day'.

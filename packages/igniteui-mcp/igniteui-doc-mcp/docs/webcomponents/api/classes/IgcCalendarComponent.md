# Class: IgcCalendarComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/calendar.ts:107](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/calendar.ts#L107)

Represents a calendar that lets users
to select a date value in a variety of different ways.

## Element

igc-calendar

## Slot

- The default slot for the calendar.

## Slot

title - Renders the title of the calendar header.

## Slot

header-date - Renders content instead of the current date/range in the calendar header.

## Fires

igcChange - Emitted when calendar changes its value.

## Csspart

header - The header element of the calendar.

## Csspart

header-title - The header title element of the calendar.

## Csspart

header-date - The header date element of the calendar.

## Csspart

content - The content element which contains the views and navigation elements of the calendar.

## Csspart

content-vertical - The content element which contains the views and navigation elements of the calendar in vertical orientation.

## Csspart

navigation - The navigation container element of the calendar.

## Csspart

months-navigation - The months navigation button element of the calendar.

## Csspart

years-navigation - The years navigation button element of the calendar.

## Csspart

years-range - The years range element of the calendar.

## Csspart

navigation-buttons - The navigation buttons container of the calendar.

## Csspart

navigation-button - Previous/next navigation button of the calendar.

## Csspart

days-view-container - The days view container element of the calendar.

## Csspart

days-view - Days view element of the calendar.

## Csspart

months-view - The months view element of the calendar.

## Csspart

years-view - The years view element of the calendar.

## Csspart

days-row - Days row element of the calendar.

## Csspart

label - Week header label element of the calendar.

## Csspart

week-number - Week number element of the calendar.

## Csspart

week-number-inner - Week number inner element of the calendar.

## Csspart

date - Date element of the calendar.

## Csspart

date-inner - Date inner element of the calendar.

## Csspart

first - The first selected date element of the calendar in range selection.

## Csspart

last - The last selected date element of the calendar in range selection.

## Csspart

inactive - Inactive date element of the calendar.

## Csspart

hidden - Hidden date element of the calendar.

## Csspart

weekend - Weekend date element of the calendar.

## Csspart

range - Range selected element of the calendar.

## Csspart

special - Special date element of the calendar.

## Csspart

disabled - Disabled date element of the calendar.

## Csspart

single - Single selected date element of the calendar.

## Csspart

preview - Range selection preview date element of the calendar.

## Csspart

month - Month element of the calendar.

## Csspart

month-inner - Month inner element of the calendar.

## Csspart

year - Year element of the calendar.

## Csspart

year-inner - Year inner element of the calendar.

## Csspart

selected - Indicates selected state. Applies to date, month and year elements of the calendar.

## Csspart

current - Indicates current state. Applies to date, month and year elements of the calendar.

## Extends

- `EventEmitterInterface`\<`IgcCalendarComponentEventMap`, `this`\> & `IgcCalendarBaseComponent`\<`this`\>

## Properties

### activeView

> **activeView**: `CalendarActiveView` = `'days'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/calendar.ts:232](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/calendar.ts#L232)

The current active view of the component.

#### Attr

active-view

#### Default

```ts
"days"
```

***

### formatOptions

> **formatOptions**: `Pick`\<`Intl.DateTimeFormatOptions`, `"month"` \| `"weekday"`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/calendar.ts:236](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/calendar.ts#L236)

The options used to format the months and the weekdays in the calendar views.

***

### headerOrientation

> **headerOrientation**: `CalendarHeaderOrientation` = `'horizontal'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/calendar.ts:207](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/calendar.ts#L207)

The orientation of the calendar header.

#### Attr

header-orientation

#### Default

```ts
"horizontal"
```

***

### hideHeader

> **hideHeader**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/calendar.ts:199](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/calendar.ts#L199)

Whether to render the calendar header part.
When the calendar selection is set to `multiple` the header is always hidden.

#### Attr

hide-header

#### Default

```ts
false
```

***

### hideOutsideDays

> **hideOutsideDays**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/calendar.ts:189](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/calendar.ts#L189)

Whether to show the dates that do not belong to the current active month.

#### Attr

hide-outside-days

#### Default

```ts
false
```

***

### orientation

> **orientation**: `ContentOrientation` = `'horizontal'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/calendar.ts:216](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/calendar.ts#L216)

The orientation of the calendar months when more than one month
is being shown.

#### Attr

orientation

#### Default

```ts
"horizontal"
```

***

### selection

> **selection**: `CalendarSelection` = `'single'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/base.ts:121](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/base.ts#L121)

Sets the type of selection in the component.

#### Attr

selection

#### Default

```ts
single
```

#### Inherited from

`EventEmitterMixin< IgcCalendarComponentEventMap, Constructor<IgcCalendarBaseComponent> >(IgcCalendarBaseComponent).selection`

***

### showWeekNumbers

> **showWeekNumbers**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/base.ts:129](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/base.ts#L129)

Whether to show the week numbers.

#### Attr

show-week-numbers

#### Default

```ts
false
```

#### Inherited from

`EventEmitterMixin< IgcCalendarComponentEventMap, Constructor<IgcCalendarBaseComponent> >(IgcCalendarBaseComponent).showWeekNumbers`

***

### visibleMonths

> **visibleMonths**: `number` = `1`

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/calendar.ts:224](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/calendar.ts#L224)

The number of months displayed in the days view.

#### Attr

visible-months

#### Default

```ts
1
```

***

### weekStart

> **weekStart**: `WeekDays` = `'sunday'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/base.ts:137](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/base.ts#L137)

Gets/Sets the first day of the week.

#### Attr

week-start

#### Default

```ts
sunday
```

#### Inherited from

`EventEmitterMixin< IgcCalendarComponentEventMap, Constructor<IgcCalendarBaseComponent> >(IgcCalendarBaseComponent).weekStart`

***

### tagName

> `readonly` `static` **tagName**: `"igc-calendar"` = `'igc-calendar'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/calendar.ts:111](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/calendar.ts#L111)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Accessors

### activeDate

#### Set Signature

> **set** **activeDate**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/base.ts:103](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/base.ts#L103)

Get/Set the date which is shown in view and is highlighted. By default it is the current date.

##### Parameters

###### value

`string` \| `Date` \| `null` \| `undefined`

##### Returns

`void`

#### Inherited from

`EventEmitterMixin< IgcCalendarComponentEventMap, Constructor<IgcCalendarBaseComponent> >(IgcCalendarBaseComponent).activeDate`

***

### disabledDates

#### Set Signature

> **set** **disabledDates**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/base.ts:176](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/base.ts#L176)

Gets/Sets the disabled dates for the component.

##### Parameters

###### value

`DateRangeDescriptor`[]

##### Returns

`void`

#### Inherited from

`EventEmitterMixin< IgcCalendarComponentEventMap, Constructor<IgcCalendarBaseComponent> >(IgcCalendarBaseComponent).disabledDates`

***

### locale

#### Set Signature

> **set** **locale**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/base.ts:144](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/base.ts#L144)

Gets/Sets the locale used for formatting and displaying the dates in the component.

##### Attr

locale

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

`EventEmitterMixin< IgcCalendarComponentEventMap, Constructor<IgcCalendarBaseComponent> >(IgcCalendarBaseComponent).locale`

***

### resourceStrings

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/base.ts:156](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/base.ts#L156)

The resource strings for localization.

##### Parameters

###### value

`IgcCalendarResourceStrings`

##### Returns

`void`

#### Inherited from

`EventEmitterMixin< IgcCalendarComponentEventMap, Constructor<IgcCalendarBaseComponent> >(IgcCalendarBaseComponent).resourceStrings`

***

### specialDates

#### Set Signature

> **set** **specialDates**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/base.ts:166](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/base.ts#L166)

Gets/Sets the special dates for the component.

##### Parameters

###### value

`DateRangeDescriptor`[]

##### Returns

`void`

#### Inherited from

`EventEmitterMixin< IgcCalendarComponentEventMap, Constructor<IgcCalendarBaseComponent> >(IgcCalendarBaseComponent).specialDates`

***

### value

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/base.ts:74](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/base.ts#L74)

The current value of the calendar.
Used when selection is set to single

##### Attr

value

##### Parameters

###### value

`string` \| `Date` \| `null` \| `undefined`

##### Returns

`void`

#### Inherited from

`EventEmitterMixin< IgcCalendarComponentEventMap, Constructor<IgcCalendarBaseComponent> >(IgcCalendarBaseComponent).value`

***

### values

#### Set Signature

> **set** **values**(`values`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/calendar/base.ts:91](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/calendar/base.ts#L91)

The current values of the calendar.
Used when selection is set to multiple of range.

##### Attr

values

##### Parameters

###### values

`string` \| (`string` \| `Date`)[] \| `null` \| `undefined`

##### Returns

`void`

#### Inherited from

`EventEmitterMixin< IgcCalendarComponentEventMap, Constructor<IgcCalendarBaseComponent> >(IgcCalendarBaseComponent).values`

# Class: IgxCalendarComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:75](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L75)

Calendar provides a way to display date information.

## Igx Module

IgxCalendarModule

## Igx Theme

igx-calendar-theme, igx-icon-theme

## Igx Keywords

calendar, datepicker, schedule, date

## Igx Group

Scheduling

## Remarks

The Ignite UI Calendar provides an easy way to display a calendar and allow users to select dates using single, multiple
or range selection.

@example:
```html
<igx-calendar selection="range"></igx-calendar>
```

## Extends

- `IgxCalendarBaseDirective`

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Properties

### \_destroyRef

> `protected` **\_destroyRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:32](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L32)

#### Inherited from

[`IgxMonthPickerComponent`](IgxMonthPickerComponent.md).[`_destroyRef`](IgxMonthPickerComponent.md#_destroyref)

***

### \_localeId

> `protected` **\_localeId**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L34)

#### Inherited from

[`IgxMonthPickerComponent`](IgxMonthPickerComponent.md).[`_localeId`](IgxMonthPickerComponent.md#_localeid)

***

### activeViewChanged

> **activeViewChanged**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:106](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L106)

Emits an event when the active view is changed.
```html
<igx-calendar (activeViewChanged)="activeViewChanged($event)"></igx-calendar>
```
```typescript
public activeViewChanged(event: CalendarView) {
 let activeView = event;
}
```

#### Inherited from

[`IgxMonthPickerComponent`](IgxMonthPickerComponent.md).[`activeViewChanged`](IgxMonthPickerComponent.md#activeviewchanged)

***

### activeViewIdx

> `protected` **activeViewIdx**: `number` = `0`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:42](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L42)

Holds month view index we are operating on.

#### Inherited from

[`IgxMonthPickerComponent`](IgxMonthPickerComponent.md).[`activeViewIdx`](IgxMonthPickerComponent.md#activeviewidx)

***

### cdr?

> `protected` `optional` **cdr?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:36](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L36)

#### Inherited from

[`IgxMonthPickerComponent`](IgxMonthPickerComponent.md).[`cdr`](IgxMonthPickerComponent.md#cdr)

***

### hasHeader

> **hasHeader**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:115](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L115)

Sets/gets whether the calendar has header.
Default value is `true`.

#### Example

```html
<igx-calendar [hasHeader]="false"></igx-calendar>
```

***

### headerOrientation

> **headerOrientation**: `"horizontal"` \| `"vertical"` = `'horizontal'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:133](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L133)

***

### hideOutsideDays

> **hideOutsideDays**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:71](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L71)

Sets/gets whether the outside dates (dates that are out of the current month) will be hidden.
Default value is `false`.
```html
<igx-calendar [hideOutsideDays]="true"></igx-calendar>
```
```typescript
let hideOutsideDays = this.calendar.hideOutsideDays;
```

#### Inherited from

[`IgxMonthPickerComponent`](IgxMonthPickerComponent.md).[`hideOutsideDays`](IgxMonthPickerComponent.md#hideoutsidedays)

***

### i18nFormatter

> `protected` **i18nFormatter**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:37](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L37)

#### Inherited from

[`IgxMonthPickerComponent`](IgxMonthPickerComponent.md).[`i18nFormatter`](IgxMonthPickerComponent.md#i18nformatter)

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:103](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L103)

Sets/gets the `id` of the calendar.

#### Remarks

If not set, the `id` will have value `"igx-calendar-0"`.

#### Example

```html
<igx-calendar id="my-first-calendar"></igx-calendar>
```

#### Memberof

IgxCalendarComponent

***

### keyboardNavigation?

> `protected` `optional` **keyboardNavigation?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:35](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L35)

#### Inherited from

[`IgxMonthPickerComponent`](IgxMonthPickerComponent.md).[`keyboardNavigation`](IgxMonthPickerComponent.md#keyboardnavigation)

***

### orientation

> **orientation**: `"horizontal"` \| `"vertical"` = `'horizontal'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:130](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L130)

***

### platform

> `protected` **platform**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:33](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L33)

#### Inherited from

[`IgxMonthPickerComponent`](IgxMonthPickerComponent.md).[`platform`](IgxMonthPickerComponent.md#platform)

***

### selected

> **selected**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:78](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L78)

Emits an event when a date is selected.
Provides reference the `selectedDates` property.

#### Inherited from

[`IgxMonthPickerComponent`](IgxMonthPickerComponent.md).[`selected`](IgxMonthPickerComponent.md#selected)

***

### showWeekNumbers

> **showWeekNumbers**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:166](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L166)

Show/hide week numbers

#### Example

```html
<igx-calendar [showWeekNumbers]="true"></igx-calendar>
``

***

### vertical

> **vertical**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:127](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L127)

Sets/gets whether the calendar header will be in vertical position.
Default value is `false`.

#### Example

```html
<igx-calendar [vertical]="true"></igx-calendar>
```

***

### viewDateChanged

> **viewDateChanged**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:92](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L92)

Emits an event when the month in view is changed.
```html
<igx-calendar (viewDateChanged)="viewDateChanged($event)"></igx-calendar>
```
```typescript
public viewDateChanged(event: IViewDateChangeEventArgs) {
 let viewDate = event.currentValue;
}
```

#### Inherited from

[`IgxMonthPickerComponent`](IgxMonthPickerComponent.md).[`viewDateChanged`](IgxMonthPickerComponent.md#viewdatechanged)

## Accessors

### activeDescendant

#### Get Signature

> **get** `protected` **activeDescendant**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:461](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L461)

##### Returns

`number`

#### Set Signature

> **set** `protected` **activeDescendant**(`date`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:469](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L469)

##### Parameters

###### date

`Date`

##### Returns

`void`

***

### activeView

#### Get Signature

> **get** **activeView**(): [`IgxCalendarView`](../type-aliases/IgxCalendarView.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:374](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L374)

Gets the current active view.
```typescript
this.activeView = calendar.activeView;
```

##### Returns

[`IgxCalendarView`](../type-aliases/IgxCalendarView.md)

#### Set Signature

> **set** **activeView**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:387](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L387)

Sets the current active view.
```html
<igx-calendar [activeView]="year" #calendar></igx-calendar>
```
```typescript
calendar.activeView = IgxCalendarView.YEAR;
```

##### Parameters

###### val

[`IgxCalendarView`](../type-aliases/IgxCalendarView.md)

##### Returns

`void`

#### Inherited from

`IgxCalendarBaseDirective.activeView`

***

### context

#### Get Signature

> **get** **context**(): `object`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:368](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L368)

Gets the context for the template marked with either `igxCalendarSubHeaderMonth`
or `igxCalendarSubHeaderYear` directive.

##### Example

```typescript
let context =  this.calendar.context;
```

##### Returns

`object`

###### $implicit

> **$implicit**: \{ `date`: `Date`; `index`: `number`; \} \| `object`[] = `formatObject`

***

### disabledDates

#### Get Signature

> **get** **disabledDates**(): [`DateRangeDescriptor`](../interfaces/DateRangeDescriptor.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:567](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L567)

Gets the disabled dates descriptors.

##### Returns

[`DateRangeDescriptor`](../interfaces/DateRangeDescriptor.md)[]

#### Set Signature

> **set** **disabledDates**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:583](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L583)

Sets the disabled dates' descriptors.
```typescript
@ViewChild("MyCalendar")
public calendar: IgxCalendarComponent;
ngOnInit(){
   this.calendar.disabledDates = [
    {type: DateRangeType.Between, dateRange: [new Date("2020-1-1"), new Date("2020-1-15")]},
    {type: DateRangeType.Weekends}];
}
```

##### Parameters

###### value

[`DateRangeDescriptor`](../interfaces/DateRangeDescriptor.md)[]

##### Returns

`void`

#### Inherited from

`IgxCalendarBaseDirective.disabledDates`

***

### formatOptions

#### Get Signature

> **get** **formatOptions**(): [`IFormattingOptions`](../interfaces/IFormattingOptions.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:338](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L338)

Gets the date format options of the views.

##### Returns

[`IFormattingOptions`](../interfaces/IFormattingOptions.md)

#### Set Signature

> **set** **formatOptions**(`formatOptions`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:346](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L346)

Sets the date format options of the views.
Default is { day: 'numeric', month: 'short', weekday: 'short', year: 'numeric' }

##### Parameters

###### formatOptions

[`IFormattingOptions`](../interfaces/IFormattingOptions.md)

##### Returns

`void`

#### Inherited from

`IgxCalendarBaseDirective.formatOptions`

***

### formatViews

#### Get Signature

> **get** **formatViews**(): [`IFormattingViews`](../interfaces/IFormattingViews.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:355](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L355)

Gets whether the `day`, `month` and `year` should be rendered
according to the locale and formatOptions, if any.

##### Returns

[`IFormattingViews`](../interfaces/IFormattingViews.md)

#### Set Signature

> **set** **formatViews**(`formatViews`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:363](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L363)

Sets whether the `day`, `month` and `year` should be rendered
according to the locale and formatOptions, if any.

##### Parameters

###### formatViews

[`IFormattingViews`](../interfaces/IFormattingViews.md)

##### Returns

`void`

#### Inherited from

`IgxCalendarBaseDirective.formatViews`

***

### headerContext

#### Get Signature

> **get** **headerContext**(): `object`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:355](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L355)

Gets the context for the template marked with the `igxCalendarHeader` directive.

##### Example

```typescript
let headerContext =  this.calendar.headerContext;
```

##### Returns

`object`

###### $implicit

> **$implicit**: \{ `date`: `Date`; `index`: `number`; \} \| `object`[] = `formatObject`

***

### headerTemplate

#### Get Signature

> **get** **headerTemplate**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:299](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L299)

Gets the header template.

##### Example

```typescript
let headerTemplate =  this.calendar.headerTeamplate;
```

##### Memberof

IgxCalendarComponent

##### Returns

`any`

#### Set Signature

> **set** **headerTemplate**(`directive`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:315](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L315)

Sets the header template.

##### Example

```html
<igx-calendar headerTemplateDirective="igxCalendarHeader"></igx-calendar>
```

##### Memberof

IgxCalendarComponent

##### Parameters

###### directive

`any`

##### Returns

`void`

***

### headerTitleTemplate

#### Get Signature

> **get** **headerTitleTemplate**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:270](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L270)

Gets the header template.

##### Example

```typescript
let headerTitleTemplate = this.calendar.headerTitleTeamplate;
```

##### Memberof

IgxCalendarComponent

##### Returns

`any`

#### Set Signature

> **set** **headerTitleTemplate**(`directive`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:286](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L286)

Sets the header template.

##### Example

```html
<igx-calendar headerTitleTemplateDirective="igxCalendarHeaderTitle"></igx-calendar>
```

##### Memberof

IgxCalendarComponent

##### Parameters

###### directive

`any`

##### Returns

`void`

***

### locale

#### Get Signature

> **get** **locale**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:319](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L319)

Gets the `locale` of the calendar.
If not set, defaults to application's locale.

##### Returns

`string`

#### Set Signature

> **set** **locale**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:327](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L327)

Sets the `locale` of the calendar.
Expects a valid BCP 47 language tag.

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

`IgxCalendarBaseDirective.locale`

***

### monthsViewNumber

#### Get Signature

> **get** **monthsViewNumber**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:145](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L145)

Sets/gets the number of month views displayed.
Default value is `1`.

##### Example

```html
<igx-calendar [monthsViewNumber]="2"></igx-calendar>
```

##### Returns

`number`

#### Set Signature

> **set** **monthsViewNumber**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:149](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L149)

##### Parameters

###### val

`number`

##### Returns

`void`

***

### resourceStrings

#### Get Signature

> **get** **resourceStrings**(): `PrefixedResourceStrings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:292](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L292)

An accessor that returns the resource strings.

##### Returns

`PrefixedResourceStrings`

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:285](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L285)

An accessor that sets the resource strings.
By default it uses EN resources.

##### Parameters

###### value

`PrefixedResourceStrings`

##### Returns

`void`

#### Inherited from

`IgxCalendarBaseDirective.resourceStrings`

***

### selection

#### Get Signature

> **get** **selection**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:509](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L509)

Gets the selection type.
Default value is `"single"`.
Changing the type of selection resets the currently
selected values if any.

##### Returns

`string`

#### Set Signature

> **set** **selection**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:516](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L516)

Sets the selection.

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

`IgxCalendarBaseDirective.selection`

***

### showActiveDay

#### Get Signature

> **get** `protected` **showActiveDay**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:457](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L457)

##### Returns

`boolean`

***

### specialDates

#### Get Signature

> **get** **specialDates**(): [`DateRangeDescriptor`](../interfaces/DateRangeDescriptor.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:608](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L608)

Gets the special dates descriptors.

##### Returns

[`DateRangeDescriptor`](../interfaces/DateRangeDescriptor.md)[]

#### Set Signature

> **set** **specialDates**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:624](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L624)

Sets the special dates' descriptors.
```typescript
@ViewChild("MyCalendar")
public calendar: IgxCalendarComponent;
ngOnInit(){
   this.calendar.specialDates = [
    {type: DateRangeType.Between, dateRange: [new Date("2020-1-1"), new Date("2020-1-15")]},
    {type: DateRangeType.Weekends}];
}
```

##### Parameters

###### value

[`DateRangeDescriptor`](../interfaces/DateRangeDescriptor.md)[]

##### Returns

`void`

#### Inherited from

`IgxCalendarBaseDirective.specialDates`

***

### subheaderTemplate

#### Get Signature

> **get** **subheaderTemplate**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:327](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L327)

Gets the subheader template.

##### Example

```typescript
let subheaderTemplate = this.calendar.subheaderTemplate;
```

##### Returns

`any`

#### Set Signature

> **set** **subheaderTemplate**(`directive`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:343](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L343)

Sets the subheader template.

##### Example

```html
<igx-calendar subheaderTemplate="igxCalendarSubheader"></igx-calendar>
```

##### Memberof

IgxCalendarComponent

##### Parameters

###### directive

`any`

##### Returns

`void`

***

### value

#### Get Signature

> **get** **value**(): `Date` \| `Date`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:636](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L636)

Gets the selected date(s).

When selection is set to `single`, it returns
a single `Date` object.
Otherwise it is an array of `Date` objects.

##### Returns

`Date` \| `Date`[]

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:651](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L651)

Sets the selected date(s).

When selection is set to `single`, it accepts
a single `Date` object.
Otherwise it is an array of `Date` objects.

##### Parameters

###### value

`string` \| `Date` \| `Date`[]

##### Returns

`void`

#### Inherited from

`IgxCalendarBaseDirective.value`

***

### viewDate

#### Get Signature

> **get** **viewDate**(): `Date`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:537](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L537)

Gets the date that is presented. By default it is the current date.

##### Returns

`Date`

#### Set Signature

> **set** **viewDate**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:544](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L544)

Sets the date that will be presented in the default view when the component renders.

##### Parameters

###### value

`string` \| `Date`

##### Returns

`void`

#### Inherited from

`IgxCalendarBaseDirective.viewDate`

***

### weekStart

#### Get Signature

> **get** **weekStart**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:302](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L302)

Gets the start day of the week.
Can return a numeric or an enum representation of the week day.
If not set, defaults to the first day of the week for the application locale.

##### Returns

`number`

#### Set Signature

> **set** **weekStart**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:310](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L310)

Sets the start day of the week.
Can be assigned to a numeric value or to `WEEKDAYS` enum value.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`IgxCalendarBaseDirective.weekStart`

## Methods

### deselectDate()

> **deselectDate**(`value?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:1025](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L1025)

Deselects date(s) (based on the selection type).

#### Parameters

##### value?

`string` \| `Date` \| `Date`[]

#### Returns

`void`

#### Example

```typescript
 this.calendar.deselectDate(new Date(`2018-06-12`));
````

#### Overrides

`IgxCalendarBaseDirective.deselectDate`

***

### formattedYears()

> **formattedYears**(`value`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:464](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L464)

#### Parameters

##### value

`Date`

#### Returns

`string`

#### Inherited from

`IgxCalendarBaseDirective.formattedYears`

***

### getDecadeRange()

> `protected` **getDecadeRange**(): `object`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:491](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L491)

#### Returns

`object`

##### end

> **end**: `string`

##### start

> **start**: `string`

#### Inherited from

`IgxCalendarBaseDirective.getDecadeRange`

***

### nextNavLabel()

> `protected` **nextNavLabel**(`detail?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:480](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L480)

#### Parameters

##### detail?

`string`

#### Returns

`string`

#### Inherited from

`IgxCalendarBaseDirective.nextNavLabel`

***

### ngAfterViewInit()

> **ngAfterViewInit**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:473](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L473)

#### Returns

`void`

***

### onMouseDown()

> `protected` **onMouseDown**(`event`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:439](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L439)

#### Parameters

##### event

`MouseEvent`

#### Returns

`void`

***

### onWrapperBlur()

> `protected` **onWrapperBlur**(`_event`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:526](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L526)

#### Parameters

##### \_event

`FocusEvent`

#### Returns

`void`

***

### onWrapperFocus()

> `protected` **onWrapperFocus**(`_event`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:521](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L521)

#### Parameters

##### \_event

`FocusEvent`

#### Returns

`void`

***

### prevNavLabel()

> `protected` **prevNavLabel**(`detail?`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:469](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L469)

#### Parameters

##### detail?

`string`

#### Returns

`string`

#### Inherited from

`IgxCalendarBaseDirective.prevNavLabel`

***

### selectDate()

> **selectDate**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:719](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L719)

Selects date(s) (based on the selection type).

#### Parameters

##### value

`string` \| `Date` \| `Date`[]

#### Returns

`void`

#### Inherited from

`IgxCalendarBaseDirective.selectDate`

***

### updateActiveDescendant()

> **updateActiveDescendant**(`date`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts:982](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar.component.ts#L982)

#### Parameters

##### date

`Date`

#### Returns

`void`

# Class: IgxDaysViewComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:58](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L58)

## Extends

- `IgxCalendarBaseDirective`

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Properties

### \_destroyRef

> `protected` **\_destroyRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:32](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L32)

#### Inherited from

`IgxCalendarBaseDirective._destroyRef`

***

### \_localeId

> `protected` **\_localeId**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L34)

#### Inherited from

`IgxCalendarBaseDirective._localeId`

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

`IgxCalendarBaseDirective.activeViewChanged`

***

### activeViewIdx

> `protected` **activeViewIdx**: `number` = `0`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:42](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L42)

Holds month view index we are operating on.

#### Inherited from

`IgxCalendarBaseDirective.activeViewIdx`

***

### cdr

> **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:60](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L60)

#### Overrides

`IgxCalendarBaseDirective.cdr`

***

### defaultClass

> **defaultClass**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:213](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L213)

***

### el

> `protected` **el**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:59](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L59)

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

`IgxCalendarBaseDirective.hideOutsideDays`

***

### i18nFormatter

> `protected` **i18nFormatter**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:37](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L37)

#### Inherited from

`IgxCalendarBaseDirective.i18nFormatter`

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:76](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L76)

Sets/gets the `id` of the days view.
If not set, the `id` will have value `"igx-days-view-0"`.
```html
<igx-days-view id="my-days-view"></igx-days-view>
```
```typescript
let daysViewId = this.daysView.id;
```

***

### keyboardNavigation?

> `protected` `optional` **keyboardNavigation?**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:35](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L35)

#### Inherited from

`IgxCalendarBaseDirective.keyboardNavigation`

***

### platform

> `protected` **platform**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:33](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L33)

#### Inherited from

`IgxCalendarBaseDirective.platform`

***

### role

> **role**: `string` = `'grid'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:84](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L84)

***

### selected

> **selected**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:78](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L78)

Emits an event when a date is selected.
Provides reference the `selectedDates` property.

#### Inherited from

`IgxCalendarBaseDirective.selected`

***

### showWeekNumbers

> **showWeekNumbers**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:115](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L115)

Show/hide week numbers

#### Example

```html
<igx-days-view [showWeekNumbers]="true"></igx-days-view>
``

***

### tabIndex

> **tabIndex**: `number` = `0`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:80](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L80)

***

### viewClass

> `readonly` **viewClass**: `true` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:87](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L87)

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

`IgxCalendarBaseDirective.viewDateChanged`

## Accessors

### activeDate

#### Get Signature

> **get** **activeDate**(): `Date`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:128](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L128)

##### Returns

`Date`

***

### activeDescendant

#### Get Signature

> **get** `protected` **activeDescendant**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:100](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L100)

##### Returns

`number`

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

### calendarMonth

#### Get Signature

> **get** `protected` **calendarMonth**(): [`CalendarDay`](CalendarDay.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:424](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L424)

##### Returns

[`CalendarDay`](CalendarDay.md)[]

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

### hideLeadingDays

#### Get Signature

> **get** **hideLeadingDays**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:152](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L152)

##### Returns

`boolean`

#### Set Signature

> **set** **hideLeadingDays**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:147](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L147)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### hideTrailingDays

#### Get Signature

> **get** **hideTrailingDays**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:162](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L162)

##### Returns

`boolean`

#### Set Signature

> **set** **hideTrailingDays**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:157](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L157)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isBootstrap

#### Get Signature

> **get** `protected` **isBootstrap**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:227](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L227)

##### Returns

`boolean`

***

### isFluent

#### Get Signature

> **get** `protected` **isFluent**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:222](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L222)

##### Returns

`boolean`

***

### isIndigo

#### Get Signature

> **get** `protected` **isIndigo**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:232](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L232)

##### Returns

`boolean`

***

### isMaterial

#### Get Signature

> **get** `protected` **isMaterial**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:217](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L217)

##### Returns

`boolean`

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

### monthWeeks

#### Get Signature

> **get** `protected` **monthWeeks**(): [`CalendarDay`](CalendarDay.md)[][]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:428](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L428)

##### Returns

[`CalendarDay`](CalendarDay.md)[][]

***

### previewRangeDate

#### Get Signature

> **get** **previewRangeDate**(): `Date`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:142](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L142)

##### Returns

`Date`

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

> **get** **showActiveDay**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:171](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L171)

##### Returns

`boolean`

#### Set Signature

> **set** **showActiveDay**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:167](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L167)

##### Parameters

###### value

`boolean`

##### Returns

`void`

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

### standalone

#### Get Signature

> **get** **standalone**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:91](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L91)

##### Returns

`boolean`

#### Set Signature

> **set** **standalone**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:95](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L95)

##### Parameters

###### value

`boolean`

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

### weekNumberHeader

#### Get Signature

> **get** `protected` **weekNumberHeader**(): `object`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:471](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L471)

##### Returns

`object`

###### long

> **long**: `string`

###### short

> **short**: `string`

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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts:746](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/calendar-base.ts#L746)

Deselects date(s) (based on the selection type).

#### Parameters

##### value?

`string` \| `Date` \| `Date`[]

#### Returns

`void`

#### Inherited from

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

### isWithinPreviewRange()

> `protected` **isWithinPreviewRange**(`date`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:607](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L607)

#### Parameters

##### date

`Date`

#### Returns

`boolean`

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

### ngAfterContentChecked()

> **ngAfterContentChecked**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts:265](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/days-view/days-view.component.ts#L265)

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

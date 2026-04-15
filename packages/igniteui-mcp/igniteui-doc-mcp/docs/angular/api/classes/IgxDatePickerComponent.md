# Class: IgxDatePickerComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:108](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L108)

Date Picker displays a popup calendar that lets users select a single date.

## Igx Module

IgxDatePickerModule

## Igx Theme

igx-calendar-theme, igx-icon-theme

## Igx Group

Scheduling

## Igx Keywords

datepicker, calendar, schedule, date

## Example

```html
<igx-date-picker [(ngModel)]="selectedDate"></igx-date-picker>
```

## Extends

- [`PickerBaseDirective`](PickerBaseDirective.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxDatePickerComponent**(): `IgxDatePickerComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:531](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L531)

#### Returns

`IgxDatePickerComponent`

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`constructor`](PickerBaseDirective.md#constructor)

## Properties

### \_collapsed

> `protected` **\_collapsed**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:297](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L297)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`_collapsed`](PickerBaseDirective.md#_collapsed)

***

### \_defaultLocale

> `protected` **\_defaultLocale**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:294](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L294)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`_defaultLocale`](PickerBaseDirective.md#_defaultlocale)

***

### \_destroy$

> `protected` **\_destroy$**: `Subject`\<`void`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:333](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L333)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`_destroy$`](PickerBaseDirective.md#_destroy)

***

### \_displayFormat

> `protected` **\_displayFormat**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:296](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L296)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`_displayFormat`](PickerBaseDirective.md#_displayformat)

***

### \_inputFormat

> `protected` **\_inputFormat**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:295](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L295)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`_inputFormat`](PickerBaseDirective.md#_inputformat)

***

### \_inputGroupType

> `protected` **\_inputGroupType**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:33](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L33)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`_inputGroupType`](PickerBaseDirective.md#_inputgrouptype)

***

### \_locale

> `protected` **\_locale**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:293](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L293)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`_locale`](PickerBaseDirective.md#_locale)

***

### \_localeId

> `protected` **\_localeId**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:32](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L32)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`_localeId`](PickerBaseDirective.md#_localeid)

***

### \_maxValue

> `protected` **\_maxValue**: `string` \| `Date`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:300](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L300)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`_maxValue`](PickerBaseDirective.md#_maxvalue)

***

### \_minValue

> `protected` **\_minValue**: `string` \| `Date`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:299](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L299)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`_minValue`](PickerBaseDirective.md#_minvalue)

***

### \_type

> `protected` **\_type**: [`IgxInputGroupType`](../type-aliases/IgxInputGroupType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:298](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L298)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`_type`](PickerBaseDirective.md#_type)

***

### \_weekStart

> `protected` **\_weekStart**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:301](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L301)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`_weekStart`](PickerBaseDirective.md#_weekstart)

***

### calendarFormat

> **calendarFormat**: [`IFormattingOptions`](../interfaces/IFormattingOptions.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:334](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L334)

Gets/Sets the format options of the `IgxDatePickerComponent`.

#### Example

```typescript
this.datePicker.calendarFormat = {day: "numeric",  month: "long", weekday: "long", year: "numeric"};
```

***

### cancelButtonLabel

> **cancelButtonLabel**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:221](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L221)

Gets/Sets the cancel button's label.

#### Example

```html
<igx-date-picker cancelButtonLabel="Cancel"></igx-date-picker>
```

***

### closed

> **closed**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:274](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L274)

Emitted after the calendar has closed.

#### Example

```html
<igx-date-picker (closed)="handleClosed($event)"></igx-date-picker>
```

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`closed`](PickerBaseDirective.md#closed)

***

### closing

> **closing**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:263](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L263)

Emitted when the calendar has started closing, cancelable.

#### Example

```html
<igx-date-picker (closing)="handleClosing($event)"></igx-date-picker>
```

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`closing`](PickerBaseDirective.md#closing)

***

### disabled

> **disabled**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:144](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L144)

Enables or disables the picker.

#### Example

```html
<igx-date-picker [disabled]="'true'"></igx-date-picker>
```

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`disabled`](PickerBaseDirective.md#disabled)

***

### displayMonthsCount

> **displayMonthsCount**: `number` = `1`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:152](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L152)

Gets/Sets the number of month views displayed.

#### Remarks

Default value is `1`.

#### Examples

```html
<igx-date-picker [displayMonthsCount]="2"></igx-date-picker>
```

```typescript
let monthViewsDisplayed = this.datePicker.displayMonthsCount;
```

***

### element

> **element**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:31](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L31)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`element`](PickerBaseDirective.md#element)

***

### formatter

> **formatter**: (`val`) => `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:199](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L199)

Gets/Sets a custom formatter function on the selected or passed date.

#### Parameters

##### val

`Date`

#### Returns

`string`

#### Example

```html
<igx-date-picker [value]="date" [formatter]="formatter"></igx-date-picker>
```

***

### formatViews

> **formatViews**: [`IFormattingViews`](../interfaces/IFormattingViews.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:287](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L287)

Gets/Sets the format views of the `IgxDatePickerComponent`.

#### Example

```typescript
let formatViews = this.datePicker.formatViews;
 this.datePicker.formatViews = {day:false, month: false, year:false};
```

***

### headerOrientation

> **headerOrientation**: [`PickerHeaderOrientation`](../type-aliases/PickerHeaderOrientation.md) = `PickerHeaderOrientation.Horizontal`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:111](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L111)

Gets/Sets the orientation of the `IgxDatePickerComponent` header.

#### Example

```html
<igx-date-picker headerOrientation="vertical"></igx-date-picker>
```

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`headerOrientation`](PickerBaseDirective.md#headerorientation)

***

### hideHeader

> **hideHeader**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:122](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L122)

Gets/Sets whether the header is hidden in dialog mode.

#### Example

```html
<igx-date-picker mode="dialog" [hideHeader]="true"></igx-date-picker>
```

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`hideHeader`](PickerBaseDirective.md#hideheader)

***

### hideOutsideDays

> **hideOutsideDays**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:134](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L134)

Gets/Sets whether the inactive dates will be hidden.

#### Remarks

Applies to dates that are out of the current month.
Default value is `false`.

#### Examples

```html
<igx-date-picker [hideOutsideDays]="true"></igx-date-picker>
```

```typescript
let hideOutsideDays = this.datePicker.hideOutsideDays;
```

***

### i18nFormatter

> `protected` **i18nFormatter**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L34)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`i18nFormatter`](PickerBaseDirective.md#i18nformatter)

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:273](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L273)

Gets/Sets the value of `id` attribute.

#### Remarks

If not provided it will be automatically generated.

#### Example

```html
<igx-date-picker [id]="'igx-date-picker-3'" cancelButtonLabel="cancel" todayButtonLabel="today"></igx-date-picker>
```

***

### inputGroup

> `protected` **inputGroup**: [`IgxInputGroupComponent`](IgxInputGroupComponent.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:291](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L291)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`inputGroup`](PickerBaseDirective.md#inputgroup)

***

### mode

> **mode**: [`PickerInteractionMode`](../type-aliases/PickerInteractionMode.md) = `PickerInteractionMode.DropDown`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:100](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L100)

Can be `dropdown` with editable input field or `dialog` with readonly input field.

#### Remarks

Default mode is `dropdown`

#### Example

```html
<igx-date-picker mode="dialog"></igx-date-picker>
```

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`mode`](PickerBaseDirective.md#mode)

***

### opened

> **opened**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:252](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L252)

Emitted after the calendar has opened.

#### Example

```html
<igx-date-picker (opened)="handleOpened($event)"></igx-date-picker>
```

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`opened`](PickerBaseDirective.md#opened)

***

### opening

> **opening**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:241](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L241)

Emitted when the calendar has started opening, cancelable.

#### Example

```html
<igx-date-picker (opening)="handleOpening($event)"></igx-date-picker>
```

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`opening`](PickerBaseDirective.md#opening)

***

### orientation

> **orientation**: [`PickerCalendarOrientation`](../type-aliases/PickerCalendarOrientation.md) = `PickerCalendarOrientation.Horizontal`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:161](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L161)

Gets/Sets the orientation of the multiple months displayed in the picker's calendar's days view.

#### Example

```ts
<igx-date-picker orientation="vertical"></igx-date-picker>
```

***

### outlet

> **outlet**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:260](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L260)

Gets/Sets the container used for the popup element.

#### Remarks

`outlet` is an instance of `IgxOverlayOutletDirective` or an `ElementRef`.

#### Example

```html
<div igxOverlayOutlet #outlet="overlay-outlet"></div>
//..
<igx-date-picker [outlet]="outlet"></igx-date-picker>
//..
```

#### Overrides

[`IgxTimePickerComponent`](IgxTimePickerComponent.md).[`outlet`](IgxTimePickerComponent.md#outlet)

***

### overlaySettings

> **overlaySettings**: [`OverlaySettings`](../interfaces/OverlaySettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:133](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L133)

Overlay settings used to display the pop-up element.

#### Example

```html
<igx-date-picker [overlaySettings]="customOverlaySettings"></igx-date-picker>
```

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`overlaySettings`](PickerBaseDirective.md#overlaysettings)

***

### placeholder

> **placeholder**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:86](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L86)

Sets the `placeholder` of the picker's input.

#### Example

```html
<igx-date-picker [placeholder]="'Choose your date'"></igx-date-picker>
```

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`placeholder`](PickerBaseDirective.md#placeholder)

***

### prefixes

> `protected` **prefixes**: `QueryList`\<`IgxPrefixDirective`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:285](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L285)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`prefixes`](PickerBaseDirective.md#prefixes)

***

### resourceStrings

> **resourceStrings**: `PrefixedResourceStrings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:397](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L397)

Gets/Sets the resource strings for the picker's default toggle icon.
By default it uses EN resources.

***

### showWeekNumbers

> **showWeekNumbers**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:172](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L172)

Show/hide week numbers

#### Example

```html
<igx-date-picker [showWeekNumbers]="true"></igx-date-picker>
``

***

### spinDelta

> **spinDelta**: `Pick`\<[`DatePartDeltas`](../interfaces/DatePartDeltas.md), `"date"` \| `"month"` \| `"year"`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:244](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L244)

Delta values used to increment or decrement each editor date part on spin actions.
All values default to `1`.

#### Example

```html
<igx-date-picker [spinDelta]="{ date: 5, month: 2 }"></igx-date-picker>
```

***

### spinLoop

> **spinLoop**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:232](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L232)

Specify if the currently spun date segment should loop over.

#### Example

```html
<igx-date-picker [spinLoop]="false"></igx-date-picker>
```

***

### suffixes

> `protected` **suffixes**: `QueryList`\<`IgxSuffixDirective`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:288](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L288)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`suffixes`](PickerBaseDirective.md#suffixes)

***

### tabIndex

> **tabIndex**: `string` \| `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:230](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L230)

Gets/Sets the default template editor's tabindex.

#### Example

```html
<igx-date-picker [tabIndex]="1"></igx-date-picker>
```

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`tabIndex`](PickerBaseDirective.md#tabindex)

***

### todayButtonLabel

> **todayButtonLabel**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:210](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L210)

Gets/Sets the today button's label.

#### Example

```html
<igx-date-picker todayButtonLabel="Today"></igx-date-picker>
```

***

### validationFailed

> **validationFailed**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:426](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L426)

Emitted when the user types/spins invalid date in the date-picker editor.

#### Example

```html
<igx-date-picker (validationFailed)="onValidationFailed($event)"></igx-date-picker>
```

***

### valueChange

> **valueChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:415](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L415)

Emitted when the picker's value changes.

#### Remarks

Used for `two-way` bindings.

#### Example

```html
<igx-date-picker [(value)]="date"></igx-date-picker>
```

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`valueChange`](PickerBaseDirective.md#valuechange)

## Accessors

### activeDate

#### Get Signature

> **get** **activeDate**(): `Date`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:180](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L180)

Gets/Sets the date which is shown in the calendar picker and is highlighted.
By default it is the current date, or the value of the picker, if set.

##### Returns

`Date`

#### Set Signature

> **set** **activeDate**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:186](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L186)

##### Parameters

###### value

`Date`

##### Returns

`void`

***

### collapsed

#### Get Signature

> **get** **collapsed**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:312](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L312)

Gets the picker's pop-up state.

##### Example

```typescript
const state = this.picker.collapsed;
```

##### Returns

`boolean`

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`collapsed`](PickerBaseDirective.md#collapsed)

***

### disabledDates

#### Get Signature

> **get** **disabledDates**(): [`DateRangeDescriptor`](../interfaces/DateRangeDescriptor.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:299](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L299)

Gets/Sets the disabled dates descriptors.

##### Example

```typescript
let disabledDates = this.datepicker.disabledDates;
this.datePicker.disabledDates = [ {type: DateRangeType.Weekends}, ...];
```

##### Returns

[`DateRangeDescriptor`](../interfaces/DateRangeDescriptor.md)[]

#### Set Signature

> **set** **disabledDates**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:302](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L302)

##### Parameters

###### value

[`DateRangeDescriptor`](../interfaces/DateRangeDescriptor.md)[]

##### Returns

`void`

***

### displayFormat

#### Get Signature

> **get** **displayFormat**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:73](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L73)

##### Returns

`string`

#### Set Signature

> **set** **displayFormat**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:69](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L69)

The format used to display the picker's value when it's not being edited.

##### Remarks

Uses Angular's DatePipe.

##### Example

```html
<igx-date-picker displayFormat="EE/M/yy"></igx-date-picker>
```

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`displayFormat`](PickerBaseDirective.md#displayformat)

***

### inputFormat

#### Get Signature

> **get** **inputFormat**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:52](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L52)

##### Returns

`string`

#### Set Signature

> **set** **inputFormat**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:48](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L48)

The editor's input mask.

##### Remarks

Also used as a placeholder when none is provided.

##### Example

```html
<igx-date-picker inputFormat="dd/MM/yy"></igx-date-picker>
```

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`inputFormat`](PickerBaseDirective.md#inputformat)

***

### locale

#### Get Signature

> **get** **locale**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:157](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L157)

Gets the `locale` of the date-picker.
If not set, defaults to applciation's locale..

##### Returns

`string`

#### Set Signature

> **set** **locale**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:165](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L165)

Sets the `locale` of the date-picker.
Expects a valid BCP 47 language tag.

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`locale`](PickerBaseDirective.md#locale)

***

### maxValue

#### Get Signature

> **get** **maxValue**(): `string` \| `Date`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:388](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L388)

##### Returns

`string` \| `Date`

#### Set Signature

> **set** **maxValue**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:383](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L383)

The maximum value the picker will accept.

##### Example

```ts
<igx-date-picker [maxValue]="maxDate"></igx-date-picker>
```

##### Parameters

###### value

`string` \| `Date`

##### Returns

`void`

***

### minValue

#### Get Signature

> **get** **minValue**(): `string` \| `Date`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:372](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L372)

##### Returns

`string` \| `Date`

#### Set Signature

> **set** **minValue**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:367](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L367)

The minimum value the picker will accept.

##### Example

```ts
<igx-date-picker [minValue]="minDate"></igx-date-picker>
```

##### Parameters

###### value

`string` \| `Date`

##### Returns

`void`

***

### specialDates

#### Get Signature

> **get** **specialDates**(): [`DateRangeDescriptor`](../interfaces/DateRangeDescriptor.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:317](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L317)

Gets/Sets the special dates descriptors.

##### Example

```typescript
let specialDates = this.datepicker.specialDates;
this.datePicker.specialDates = [ {type: DateRangeType.Weekends}, ... ];
```

##### Returns

[`DateRangeDescriptor`](../interfaces/DateRangeDescriptor.md)[]

#### Set Signature

> **set** **specialDates**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:320](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L320)

##### Parameters

###### value

[`DateRangeDescriptor`](../interfaces/DateRangeDescriptor.md)[]

##### Returns

`void`

***

### toggleContainer

#### Get Signature

> **get** `protected` **toggleContainer**(): `HTMLElement`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:552](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L552)

##### Returns

`HTMLElement`

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`toggleContainer`](PickerBaseDirective.md#togglecontainer)

***

### type

#### Get Signature

> **get** **type**(): [`IgxInputGroupType`](../type-aliases/IgxInputGroupType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:217](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L217)

##### Returns

[`IgxInputGroupType`](../type-aliases/IgxInputGroupType.md)

#### Set Signature

> **set** **type**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:214](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L214)

Determines how the picker's input will be styled.

##### Remarks

Default is `box`.

##### Example

```html
<igx-date-picker [type]="'line'"></igx-date-picker>
```

##### Parameters

###### val

[`IgxInputGroupType`](../type-aliases/IgxInputGroupType.md)

##### Returns

`void`

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`type`](PickerBaseDirective.md#type)

***

### value

#### Get Signature

> **get** **value**(): `string` \| `Date`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:347](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L347)

Gets/Sets the selected date.

##### Example

```html
<igx-date-picker [value]="date"></igx-date-picker>
```

##### Returns

`string` \| `Date`

#### Set Signature

> **set** **value**(`date`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:350](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L350)

##### Parameters

###### date

`string` \| `Date`

##### Returns

`void`

***

### weekStart

#### Get Signature

> **get** **weekStart**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:176](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L176)

Gets the start day of the week.
Can return a numeric or an enum representation of the week day.
If not set, defaults to the first day of the week for the application locale.

##### Returns

`number`

#### Set Signature

> **set** **weekStart**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:184](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L184)

Sets the start day of the week.
Can be assigned to a numeric value or to `WEEKDAYS` enum value.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`weekStart`](PickerBaseDirective.md#weekstart)

## Methods

### clear()

> **clear**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:685](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L685)

Clears the input field and the picker's value.

#### Returns

`void`

#### Example

```typescript
this.datePicker.clear();
```

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`clear`](PickerBaseDirective.md#clear)

***

### close()

> **close**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:636](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L636)

Closes the picker's dropdown or dialog.

#### Returns

`void`

#### Example

```html
<igx-date-picker #picker></igx-date-picker>

<button type="button" igxButton (click)="picker.close()">Close Dialog</button>
```

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`close`](PickerBaseDirective.md#close)

***

### decrement()

> **decrement**(`datePart?`, `delta?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:716](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L716)

Decrement a specified `DatePart`

#### Parameters

##### datePart?

[`DatePart`](../enumerations/DatePart.md)

The optional DatePart to decrement. Defaults to Date.

##### delta?

`number`

The optional delta to decrement by. Overrides `spinDelta`.

#### Returns

`void`

#### Example

```typescript
this.datePicker.decrement(DatePart.Date);
```

***

### increment()

> **increment**(`datePart?`, `delta?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:702](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L702)

Increment a specified `DatePart`.

#### Parameters

##### datePart?

[`DatePart`](../enumerations/DatePart.md)

The optional DatePart to increment. Defaults to Date.

##### delta?

`number`

The optional delta to increment by. Overrides `spinDelta`.

#### Returns

`void`

#### Example

```typescript
this.datePicker.increment(DatePart.Date);
```

***

### initLocale()

> `protected` **initLocale**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:385](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L385)

#### Returns

`void`

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`initLocale`](PickerBaseDirective.md#initlocale)

***

### onResourceChange()

> `protected` **onResourceChange**(`args`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:391](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L391)

#### Parameters

##### args

`CustomEvent`\<`IResourceChangeEventArgs`\>

#### Returns

`void`

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`onResourceChange`](PickerBaseDirective.md#onresourcechange)

***

### open()

> **open**(`settings?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:587](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L587)

Opens the picker's dropdown or dialog.

#### Parameters

##### settings?

[`OverlaySettings`](../interfaces/OverlaySettings.md)

#### Returns

`void`

#### Example

```html
<igx-date-picker #picker></igx-date-picker>

<button type="button" igxButton (click)="picker.open()">Open Dialog</button>
```

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`open`](PickerBaseDirective.md#open)

***

### select()

> **select**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:653](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L653)

Selects a date.

#### Parameters

##### value

`Date`

#### Returns

`void`

#### Remarks

Updates the value in the input field.

#### Example

```typescript
this.datePicker.select(date);
```

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`select`](PickerBaseDirective.md#select)

***

### selectToday()

> **selectToday**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:667](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L667)

Selects today's date and closes the picker.

#### Returns

`void`

#### Example

```html
<igx-date-picker #picker></igx-date-picker>

<button type="button" igxButton (click)="picker.selectToday()">Select Today</button>
```

***

### toggle()

> **toggle**(`settings?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:618](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L618)

Toggles the picker's dropdown or dialog

#### Parameters

##### settings?

[`OverlaySettings`](../interfaces/OverlaySettings.md)

#### Returns

`void`

#### Example

```html
<igx-date-picker #picker></igx-date-picker>

<button type="button" igxButton (click)="picker.toggle()">Toggle Dialog</button>
```

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`toggle`](PickerBaseDirective.md#toggle)

***

### updateResources()

> `protected` **updateResources**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts:1011](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/date-picker.component.ts#L1011)

#### Returns

`void`

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`updateResources`](PickerBaseDirective.md#updateresources)

# Class: IgxDateRangePickerComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:108](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L108)

Provides the ability to select a range of dates from a calendar UI or editable inputs.

## Igx Module

IgxDateRangeModule

## Igx Theme

igx-input-group-theme, igx-calendar-theme, igx-date-range-picker-theme

## Igx Keywords

date, range, date range, date picker

## Igx Group

scheduling

## Remarks

It displays the range selection in a single or two input fields.
The default template displays a single *readonly* input field
while projecting `igx-date-range-start` and `igx-date-range-end`
displays two *editable* input fields.

## Example

```html
<igx-date-range-picker mode="dropdown"></igx-date-range-picker>
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

## Constructors

### Constructor

> **new IgxDateRangePickerComponent**(): `IgxDateRangePickerComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:658](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L658)

#### Returns

`IgxDateRangePickerComponent`

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

### customRanges

> **customRanges**: [`CustomDateRange`](../interfaces/CustomDateRange.md)[] = `[]`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:429](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L429)

Custom ranges rendered as chips.

#### Example

```html
<igx-date-range-picker [(usePredefinedRanges)]="true"></igx-date-range-picker>
``

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

### element

> **element**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:31](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L31)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`element`](PickerBaseDirective.md#element)

***

### formatter

> **formatter**: (`val`) => `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:176](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L176)

A custom formatter function, applied on the selected or passed in date.

#### Parameters

##### val

[`DateRange`](../interfaces/DateRange.md)

#### Returns

`string`

#### Example

```typescript
private dayFormatter = new Intl.DateTimeFormat("en", { weekday: "long" });
private monthFormatter = new Intl.DateTimeFormat("en", { month: "long" });

public formatter(date: Date): string {
 return `${this.dayFormatter.format(date)} - ${this.monthFormatter.format(date)} - ${date.getFullYear()}`;
}
```
```html
<igx-date-range-picker [formatter]="formatter"></igx-date-range-picker>
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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:157](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L157)

Gets/Sets whether dates that are not part of the current month will be displayed.

#### Remarks

Default value is `false`.

#### Example

```html
<igx-date-range-picker [hideOutsideDays]="true"></igx-date-range-picker>
```

***

### hint

> **hint**: [`IgxHintDirective`](IgxHintDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:453](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L453)

***

### i18nFormatter

> `protected` **i18nFormatter**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L34)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`i18nFormatter`](PickerBaseDirective.md#i18nformatter)

***

### inputGroup

> `protected` **inputGroup**: [`IgxInputGroupComponent`](IgxInputGroupComponent.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:291](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L291)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`inputGroup`](PickerBaseDirective.md#inputgroup)

***

### label

> **label**: [`IgxLabelDirective`](IgxLabelDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:450](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L450)

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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:143](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L143)

Gets/Sets the orientation of the multiple months displayed in the picker's calendar's days view.

#### Example

```ts
<igx-date-range-picker orientation="vertical"></igx-date-range-picker>
```

***

### outlet

> **outlet**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:382](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L382)

Gets/Sets the container used for the popup element.

#### Remarks

`outlet` is an instance of `IgxOverlayOutletDirective` or an `ElementRef`.

#### Example

```html
<div igxOverlayOutlet #outlet="overlay-outlet"></div>
//..
<igx-date-range-picker [outlet]="outlet"></igx-date-range-picker>
//..
```

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`outlet`](PickerBaseDirective.md#outlet)

***

### overlaySettings

> **overlaySettings**: [`OverlaySettings`](../interfaces/OverlaySettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:233](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L233)

Custom overlay settings that should be used to display the calendar.

#### Example

```html
<igx-date-range-picker [overlaySettings]="customOverlaySettings"></igx-date-range-picker>
```

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`overlaySettings`](PickerBaseDirective.md#overlaysettings)

***

### pickerActions

> **pickerActions**: [`IgxPickerActionsDirective`](IgxPickerActionsDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:456](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L456)

***

### placeholder

> **placeholder**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:366](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L366)

Sets the `placeholder` for single-input `IgxDateRangePickerComponent`.

#### Example

```html
<igx-date-range-picker [placeholder]="'Choose your dates'"></igx-date-range-picker>
```

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`placeholder`](PickerBaseDirective.md#placeholder)

***

### platform

> `protected` **platform**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:110](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L110)

***

### prefixes

> `protected` **prefixes**: `QueryList`\<`IgxPrefixDirective`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts:285](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-picker/picker-base.directive.ts#L285)

#### Inherited from

[`PickerBaseDirective`](PickerBaseDirective.md).[`prefixes`](PickerBaseDirective.md#prefixes)

***

### showWeekNumbers

> **showWeekNumbers**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:396](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L396)

Show/hide week numbers

#### Remarks

Default is `false`.

#### Example

```html
<igx-date-range-picker [showWeekNumbers]="true"></igx-date-range-picker>
``

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

### usePredefinedRanges

> **usePredefinedRanges**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:419](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L419)

Whether to render built-in predefined ranges.

#### Example

```html
<igx-date-range-picker [(usePredefinedRanges)]="true"></igx-date-range-picker>
``

***

### valueChange

> **valueChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:432](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L432)

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`valueChange`](PickerBaseDirective.md#valuechange)

## Accessors

### activeDate

#### Get Signature

> **get** **activeDate**(): `Date`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:494](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L494)

Gets/Sets the date which is shown in the calendar picker and is highlighted.
By default it is the current date, or the value of the picker, if set.

##### Returns

`Date`

#### Set Signature

> **set** **activeDate**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:500](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L500)

##### Parameters

###### value

`Date`

##### Returns

`void`

***

### cancelButtonText

#### Get Signature

> **get** **cancelButtonText**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:218](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L218)

##### Returns

`string`

#### Set Signature

> **set** **cancelButtonText**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:214](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L214)

Overrides the default text of the calendar dialog **Cancel** button.

##### Remarks

Defaults to the value from resource strings, `"Cancel"` for the built-in EN.
The button will only show up in `dialog` mode.

##### Example

```html
<igx-date-range-picker cancelButtonText="取消"></igx-date-range-picker>
```

##### Parameters

###### value

`string`

##### Returns

`void`

***

### collapsed

#### Get Signature

> **get** **collapsed**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:549](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L549)

Gets calendar state.

```typescript
let state = this.dateRange.collapsed;
```

##### Returns

`boolean`

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`collapsed`](PickerBaseDirective.md#collapsed)

***

### disabledDates

#### Get Signature

> **get** **disabledDates**(): [`DateRangeDescriptor`](../interfaces/DateRangeDescriptor.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:316](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L316)

Gets/Sets the disabled dates descriptors.

##### Example

```typescript
let disabledDates = this.dateRangePicker.disabledDates;
this.dateRangePicker.disabledDates = [ {type: DateRangeType.Weekends}, ...];
```

##### Returns

[`DateRangeDescriptor`](../interfaces/DateRangeDescriptor.md)[]

#### Set Signature

> **set** **disabledDates**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:319](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L319)

##### Parameters

###### value

[`DateRangeDescriptor`](../interfaces/DateRangeDescriptor.md)[]

##### Returns

`void`

***

### displayFormat

#### Get Signature

> **get** **displayFormat**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:252](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L252)

The format used to display the picker's value when it's not being edited.

##### Remarks

Uses Angular's DatePipe.

##### Example

```html
<igx-date-picker displayFormat="EE/M/yy"></igx-date-picker>
```

##### Returns

`string`

#### Set Signature

> **set** **displayFormat**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:248](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L248)

The format used when editable inputs are not focused.

##### Remarks

Uses Angular's DatePipe.

##### Example

```html
<igx-date-range-picker displayFormat="EE/M/yy"></igx-date-range-picker>
```

##### Parameters

###### value

`string`

##### Returns

`void`

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`displayFormat`](PickerBaseDirective.md#displayformat)

***

### displayMonthsCount

#### Get Signature

> **get** **displayMonthsCount**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:128](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L128)

The number of displayed month views.

##### Remarks

Default is `2`.

##### Example

```html
<igx-date-range-picker [displayMonthsCount]="3"></igx-date-range-picker>
```

##### Returns

`number`

#### Set Signature

> **set** **displayMonthsCount**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:132](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L132)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### doneButtonText

#### Get Signature

> **get** **doneButtonText**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:195](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L195)

##### Returns

`string`

#### Set Signature

> **set** **doneButtonText**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:191](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L191)

Overrides the default text of the calendar dialog **Done** button.

##### Remarks

Defaults to the value from resource strings, `"Done"` for the built-in EN.
The button will only show up in `dialog` mode.

##### Example

```html
<igx-date-range-picker doneButtonText="完了"></igx-date-range-picker>
```

##### Parameters

###### value

`string`

##### Returns

`void`

***

### inputFormat

#### Get Signature

> **get** **inputFormat**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:269](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L269)

The editor's input mask.

##### Remarks

Also used as a placeholder when none is provided.

##### Example

```html
<igx-date-picker inputFormat="dd/MM/yy"></igx-date-picker>
```

##### Returns

`string`

#### Set Signature

> **set** **inputFormat**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:265](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L265)

The expected user input format and placeholder.

##### Example

```html
<igx-date-range-picker inputFormat="dd/MM/yy"></igx-date-range-picker>
```

##### Parameters

###### value

`string`

##### Returns

`void`

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`inputFormat`](PickerBaseDirective.md#inputformat)

***

### locale

#### Get Signature

> **get** **locale**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:515](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L515)

Gets the `locale` of the date-range-picker.
If not set, defaults to application's locale.

##### Returns

`string`

#### Set Signature

> **set** **locale**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:523](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L523)

Sets the `locale` of the date-picker.
Expects a valid BCP 47 language tag.

##### Parameters

###### value

`string`

##### Returns

`void`

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`locale`](PickerBaseDirective.md#locale)

***

### maxValue

#### Get Signature

> **get** **maxValue**(): `string` \| `Date`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:302](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L302)

##### Returns

`string` \| `Date`

#### Set Signature

> **set** **maxValue**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:297](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L297)

The maximum value in a valid range.

##### Example

```ts
<igx-date-range-picker [maxValue]="maxDate"></igx-date-range-picker>
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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:286](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L286)

##### Returns

`string` \| `Date`

#### Set Signature

> **set** **minValue**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:281](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L281)

The minimum value in a valid range.

##### Example

```ts
<igx-date-range-picker [minValue]="minDate"></igx-date-range-picker>
```

##### Parameters

###### value

`string` \| `Date`

##### Returns

`void`

***

### resourceStrings

#### Get Signature

> **get** **resourceStrings**(): `PrefixedResourceStrings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:353](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L353)

An accessor that returns the resource strings.

##### Returns

`PrefixedResourceStrings`

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:346](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L346)

An accessor that sets the resource strings.
By default it uses EN resources.

##### Parameters

###### value

`PrefixedResourceStrings`

##### Returns

`void`

***

### specialDates

#### Get Signature

> **get** **specialDates**(): [`DateRangeDescriptor`](../interfaces/DateRangeDescriptor.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:334](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L334)

Gets/Sets the special dates descriptors.

##### Example

```typescript
let specialDates = this.dateRangePicker.specialDates;
this.dateRangePicker.specialDates = [ {type: DateRangeType.Weekends}, ... ];
```

##### Returns

[`DateRangeDescriptor`](../interfaces/DateRangeDescriptor.md)[]

#### Set Signature

> **set** **specialDates**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:337](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L337)

##### Parameters

###### value

[`DateRangeDescriptor`](../interfaces/DateRangeDescriptor.md)[]

##### Returns

`void`

***

### toggleContainer

#### Get Signature

> **get** `protected` **toggleContainer**(): `HTMLElement`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:588](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L588)

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

> **get** **value**(): [`DateRange`](../interfaces/DateRange.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:565](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L565)

The currently selected value / range from the calendar

##### Remarks

The current value is of type `DateRange`

##### Example

```typescript
const newValue: DateRange = { start: new Date("2/2/2012"), end: new Date("3/3/2013")};
this.dateRangePicker.value = newValue;
```

##### Returns

[`DateRange`](../interfaces/DateRange.md)

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:570](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L570)

##### Parameters

###### value

[`DateRange`](../interfaces/DateRange.md)

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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:771](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L771)

Clears the input field(s) and the picker's value.

#### Returns

`void`

#### Example

```typescript
this.dateRangePicker.clear();
```

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`clear`](PickerBaseDirective.md#clear)

***

### close()

> **close**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:721](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L721)

Closes the date range picker's dropdown or dialog.

#### Returns

`void`

#### Example

```html
<igx-date-range-picker #dateRange></igx-date-range-picker>

<button type="button" igxButton (click)="dateRange.close()">Close Dialog</button>
```

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`close`](PickerBaseDirective.md#close)

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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:1323](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L1323)

#### Parameters

##### args

`CustomEvent`\<`IResourceChangeEventArgs`\>

#### Returns

`void`

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`onResourceChange`](PickerBaseDirective.md#onresourcechange)

***

### onStatusChanged()

> `protected` **onStatusChanged**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:916](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L916)

#### Returns

`void`

***

### open()

> **open**(`overlaySettings?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:691](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L691)

Opens the date range picker's dropdown or dialog.

#### Parameters

##### overlaySettings?

[`OverlaySettings`](../interfaces/OverlaySettings.md)

#### Returns

`void`

#### Example

```html
<igx-date-range-picker #dateRange></igx-date-range-picker>

<button type="button" igxButton (click)="dateRange.open()">Open Dialog</button
```

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`open`](PickerBaseDirective.md#open)

***

### select()

> **select**(`startDate`, `endDate?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:757](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L757)

Selects a range of dates. If no `endDate` is passed, range is 1 day (only `startDate`)

#### Parameters

##### startDate

`Date`

##### endDate?

`Date`

#### Returns

`void`

#### Example

```typescript
public selectFiveDayRange() {
 const today = new Date();
 const inFiveDays = new Date(new Date().setDate(today.getDate() + 5));
 this.dateRange.select(today, inFiveDays);
}
```

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`select`](PickerBaseDirective.md#select)

***

### toggle()

> **toggle**(`overlaySettings?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:737](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L737)

Toggles the date range picker's dropdown or dialog

#### Parameters

##### overlaySettings?

[`OverlaySettings`](../interfaces/OverlaySettings.md)

#### Returns

`void`

#### Example

```html
<igx-date-range-picker #dateRange></igx-date-range-picker>

<button type="button" igxButton (click)="dateRange.toggle()">Toggle Dialog</button>
```

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`toggle`](PickerBaseDirective.md#toggle)

***

### updateResources()

> `protected` **updateResources**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts:1331](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker.component.ts#L1331)

#### Returns

`void`

#### Overrides

[`PickerBaseDirective`](PickerBaseDirective.md).[`updateResources`](PickerBaseDirective.md#updateresources)

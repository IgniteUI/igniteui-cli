# Class: IgcDateRangePickerComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:193](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L193)

The igc-date-range-picker allows the user to select a range of dates.

## Element

igc-date-range-picker

## Slot

prefix - Renders content before the input (single input).

## Slot

prefix-start - Renders content before the start input (two inputs).

## Slot

prefix-end - Renders content before the end input (two inputs).

## Slot

suffix - Renders content after the input (single input).

## Slot

suffix-start - Renders content after the start input (single input).

## Slot

suffix-end - Renders content after the end input (single input).

## Slot

helper-text - Renders content below the input.

## Slot

bad-input - Renders content when the value is in the disabledDates ranges.

## Slot

value-missing - Renders content when the required validation fails.

## Slot

range-overflow - Renders content when the max validation fails.

## Slot

range-underflow - Renders content when the min validation fails.

## Slot

custom-error - Renders content when setCustomValidity(message) is set.

## Slot

invalid - Renders content when the component is in invalid state (validity.valid = false).

## Slot

title - Renders content in the calendar title.

## Slot

header-date - Renders content instead of the current date/range in the calendar header.

## Slot

clear-icon - Renders a clear icon template.

## Slot

clear-icon-start - Renders a clear icon template for the start input (two inputs).

## Slot

clear-icon-end - Renders a clear icon template for the end input (two inputs).

## Slot

calendar-icon - Renders the icon/content for the calendar picker.

## Slot

calendar-icon-start - Renders the icon/content for the calendar picker for the start input (two inputs).

## Slot

calendar-icon-end - Renders the icon/content for the calendar picker for the end input (two inputs).

## Slot

calendar-icon-open - Renders the icon/content for the picker in open state.

## Slot

calendar-icon-open-start - Renders the icon/content for the picker in open state for the start input (two inputs).

## Slot

calendar-icon-open-end - Renders the icon/content for the picker in open state for the end input (two inputs).

## Slot

actions - Renders content in the action part of the picker in open state.

## Slot

separator - Renders the separator element between the two inputs.

## Fires

igcOpening - Emitted just before the calendar dropdown is shown.

## Fires

igcOpened - Emitted after the calendar dropdown is shown.

## Fires

igcClosing - Emitted just before the calendar dropdown is hidden.

## Fires

igcClosed - Emitted after the calendar dropdown is hidden.

## Fires

igcChange - Emitted when the user modifies and commits the elements's value.

## Fires

igcInput - Emitted when when the user types in the element.

## Csspart

separator - The separator element between the two inputs.

## Csspart

ranges - The wrapper that renders the custom and predefined ranges.

## Csspart

label - The label wrapper that renders content above the target input.

## Csspart

calendar-icon - The calendar icon wrapper for closed state (single input).

## Csspart

calendar-icon-start - The calendar icon wrapper for closed state for the start input (two inputs).

## Csspart

calendar-icon-end - The calendar icon wrapper for closed state for the end input (two inputs).

## Csspart

calendar-icon-open - The calendar icon wrapper for opened state (single input).

## Csspart

calendar-icon-open-start - The calendar icon wrapper for opened state for the start input (two inputs).

## Csspart

calendar-icon-open-end - The calendar icon wrapper for opened state for the end input (two inputs).

## Csspart

clear-icon - The clear icon wrapper (single input).

## Csspart

clear-icon-start - The clear icon wrapper for the start input (two inputs).

## Csspart

clear-icon-end - The clear icon wrapper for the end input (two inputs).

## Csspart

actions - The wrapper for the custom actions area.

## Csspart

clear-icon - The clear icon wrapper.

## Csspart

input - The native input element.

## Csspart

prefix - The prefix wrapper.

## Csspart

suffix - The suffix wrapper.

## Csspart

helper-text - The helper-text wrapper that renders content below the target input.

## Csspart

header - The calendar header element.

## Csspart

header-title - The calendar header title element.

## Csspart

header-date - The calendar header date element.

## Csspart

calendar-content - The calendar content element which contains the views and navigation elements.

## Csspart

navigation - The calendar navigation container element.

## Csspart

months-navigation - The calendar months navigation button element.

## Csspart

years-navigation - The calendar years navigation button element.

## Csspart

years-range - The calendar years range element.

## Csspart

navigation-buttons - The calendar navigation buttons container.

## Csspart

navigation-button - The calendar previous/next navigation button.

## Csspart

days-view-container - The calendar days view container element.

## Csspart

days-view - The calendar days view element.

## Csspart

months-view - The calendar months view element.

## Csspart

years-view - The calendar years view element.

## Csspart

days-row - The calendar days row element.

## Csspart

calendar-label - The calendar week header label element.

## Csspart

week-number - The calendar week number element.

## Csspart

week-number-inner - The calendar week number inner element.

## Csspart

date - The calendar date element.

## Csspart

date-inner - The calendar date inner element.

## Csspart

first - The calendar first selected date element in range selection.

## Csspart

last - The calendar last selected date element in range selection.

## Csspart

inactive - The calendar inactive date element.

## Csspart

hidden - The calendar hidden date element.

## Csspart

weekend - The calendar weekend date element.

## Csspart

range - The calendar range selected element.

## Csspart

special - The calendar special date element.

## Csspart

disabled - The calendar disabled date element.

## Csspart

single - The calendar single selected date element.

## Csspart

preview - The calendar range selection preview date element.

## Csspart

month - The calendar month element.

## Csspart

month-inner - The calendar month inner element.

## Csspart

year - The calendar year element.

## Csspart

year-inner - The calendar year inner element.

## Csspart

selected - The calendar selected state for element(s). Applies to date, month and year elements.

## Csspart

current - The calendar current state for element(s). Applies to date, month and year elements.

## Extends

- `FormRequiredInterface`\<`this`\> & `FormAssociatedElementInterface`\<`this`\> & `EventEmitterInterface`\<`IgcDateRangePickerComponentEventMap`, `this`\> & `IgcBaseComboBoxLikeComponent`\<`this`\>

## Properties

### customRanges

> **customRanges**: `CustomDateRange`[] = `[]`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:332](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L332)

Renders chips with custom ranges based on the elements of the array.

***

### disabled

> **disabled**: `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:29](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L29)

The disabled state of the component.

#### Attr

#### Default

```ts
false
```

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDateRangePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).disabled`

***

### headerOrientation

> **headerOrientation**: `ContentOrientation` = `'horizontal'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:561](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L561)

The orientation of the calendar header.

#### Attr

header-orientation

***

### hideHeader

> **hideHeader**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:575](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L575)

Determines whether the calendar hides its header.

#### Attr

hide-header

***

### hideOutsideDays

> **hideOutsideDays**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:602](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L602)

Controls the visibility of the dates that do not belong to the current month.

#### Attr

hide-outside-days

***

### invalid

> **invalid**: `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:36](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L36)

Sets the control into invalid state (visual state only).

#### Attr

#### Default

```ts
false
```

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDateRangePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).invalid`

***

### keepOpenOnOutsideClick

> **keepOpenOnOutsideClick**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L42)

Whether the component dropdown should be kept open on clicking outside of it.

#### Attr

keep-open-on-outside-click

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDateRangePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).keepOpenOnOutsideClick`

***

### keepOpenOnSelect

> **keepOpenOnSelect**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:31](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L31)

Whether the component dropdown should be kept open on selection.

#### Attr

keep-open-on-select

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDateRangePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).keepOpenOnSelect`

***

### label

> **label**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:412](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L412)

The label of the control (single input).

#### Attr

label

***

### labelEnd

> **labelEnd**: `string` = `''`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:426](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L426)

The label attribute of the end input.

#### Attr

label-end

***

### labelStart

> **labelStart**: `string` = `''`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:419](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L419)

The label attribute of the start input.

#### Attr

label-start

***

### mode

> **mode**: `PickerMode` = `'dropdown'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:339](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L339)

Determines whether the calendar is opened in a dropdown or a modal dialog

#### Attr

mode

***

### name

> **name**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L42)

The name attribute of the control.

#### Attr

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDateRangePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).name`

***

### nonEditable

> **nonEditable**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:398](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L398)

Whether to allow typing in the input.

#### Attr

non-editable

***

### open

> **open**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:49](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L49)

Sets the open state of the component.

#### Attr

#### Inherited from

[`IgcDropdownComponent`](IgcDropdownComponent.md).[`open`](IgcDropdownComponent.md#open)

***

### orientation

> **orientation**: `ContentOrientation` = `'horizontal'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:568](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L568)

The orientation of the multiple months displayed in the calendar's days view.

#### Attr

***

### outlined

> **outlined**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:405](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L405)

Whether the control will have outlined appearance.

#### Attr

***

### placeholderEnd

> **placeholderEnd**: `string` = `''`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:454](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L454)

The placeholder attribute of the end input.

#### Attr

placeholder-end

***

### placeholderStart

> **placeholderStart**: `string` = `''`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:447](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L447)

The placeholder attribute of the start input.

#### Attr

placeholder-start

***

### prompt

> **prompt**: `string` = `'_'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:460](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L460)

The prompt symbol to use for unfilled parts of the mask.

#### Attr

***

### readOnly

> **readOnly**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:391](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L391)

Makes the control a readonly field.

#### Attr

readonly

***

### showWeekNumbers

> **showWeekNumbers**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:595](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L595)

Whether to show the number of the week in the calendar.

#### Attr

show-week-numbers

***

### specialDates

> **specialDates**: `DateRangeDescriptor`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:606](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L606)

Gets/sets special dates.

***

### usePredefinedRanges

> **usePredefinedRanges**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:357](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L357)

Whether the control will show chips with predefined ranges.

#### Attr

***

### useTwoInputs

> **useTwoInputs**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:346](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L346)

Use two inputs to display the date range values. Makes the input editable in dropdown mode.

#### Attr

use-two-inputs

***

### weekStart

> **weekStart**: `WeekDays` = `'sunday'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:610](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L610)

Sets the start day of the week for the calendar.

***

### tagName

> `readonly` `static` **tagName**: `"igc-date-range-picker"` = `'igc-date-range-picker'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:199](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L199)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Accessors

### activeDate

#### Set Signature

> **set** **activeDate**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:582](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L582)

Gets/Sets the date which is shown in the calendar picker and is highlighted.
By default it is the current date.

##### Parameters

###### value

`string` \| `Date` \| `null` \| `undefined`

##### Returns

`void`

***

### defaultValue

#### Set Signature

> **set** **defaultValue**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:156](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L156)

The initial value of the component.

##### Parameters

###### value

`unknown`

##### Returns

`void`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDateRangePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).defaultValue`

***

### disabledDates

#### Set Signature

> **set** **disabledDates**(`dates`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:530](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L530)

Gets/sets disabled dates.

##### Parameters

###### dates

`DateRangeDescriptor`[]

##### Returns

`void`

***

### displayFormat

#### Set Signature

> **set** **displayFormat**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:468](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L468)

Format to display the value in when not editing.
Defaults to the locale format if not set.

##### Attr

display-format

##### Parameters

###### value

`string`

##### Returns

`void`

***

### form

#### Get Signature

> **get** **form**(): `HTMLFormElement` \| `null`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:45](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L45)

Returns the HTMLFormElement associated with this element.

##### Returns

`HTMLFormElement` \| `null`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDateRangePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).form`

***

### inputFormat

#### Set Signature

> **set** **inputFormat**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:485](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L485)

The date format to apply on the inputs.
Defaults to the current locale Intl.DateTimeFormat

##### Attr

input-format

##### Parameters

###### value

`string`

##### Returns

`void`

***

### locale

#### Set Signature

> **set** **locale**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:364](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L364)

The locale settings used to display the value.

##### Attr

##### Parameters

###### value

`string`

##### Returns

`void`

***

### max

#### Set Signature

> **set** **max**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:518](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L518)

The maximum value required for the date range picker to remain valid.

##### Attr

##### Parameters

###### value

`string` \| `Date` \| `null` \| `undefined`

##### Returns

`void`

***

### min

#### Set Signature

> **set** **min**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:503](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L503)

The minimum value required for the date range picker to remain valid.

##### Attr

##### Parameters

###### value

`string` \| `Date` \| `null` \| `undefined`

##### Returns

`void`

***

### placeholder

#### Set Signature

> **set** **placeholder**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:433](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L433)

The placeholder attribute of the control (single input).

##### Attr

##### Parameters

###### value

`string`

##### Returns

`void`

***

### required

#### Set Signature

> **set** **required**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:174](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L174)

When set, makes the component a required field for validation.

##### Attr

##### Default

```ts
false
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDateRangePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).required`

***

### resourceStrings

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:374](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L374)

The resource strings of the date range picker.

##### Parameters

###### value

`IgcDateRangePickerResourceStrings`

##### Returns

`void`

***

### validationMessage

#### Get Signature

> **get** **validationMessage**(): `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:54](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L54)

A string containing the validation message of this element.

##### Returns

`string`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDateRangePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).validationMessage`

***

### validity

#### Get Signature

> **get** **validity**(): `ValidityState`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:51](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L51)

Returns a ValidityState object which represents the different validity states
the element can be in, with respect to constraint validation.

##### Returns

`ValidityState`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDateRangePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).validity`

***

### value

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:319](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L319)

The value of the picker

##### Attr

##### Parameters

###### value

`string` \| `DateRangeValue` \| `null` \| `undefined`

##### Returns

`void`

***

### visibleMonths

#### Get Signature

> **get** **visibleMonths**(): `number`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:549](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L549)

The number of months displayed in the calendar.

##### Attr

visible-months

##### Returns

`number`

***

### willValidate

#### Get Signature

> **get** **willValidate**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:60](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L60)

A boolean value which returns true if the element is a submittable element
that is a candidate for constraint validation.

##### Returns

`boolean`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDateRangePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).willValidate`

## Methods

### checkValidity()

> **checkValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:140](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L140)

Checks for validity of the control and emits the invalid event if it invalid.

#### Returns

`boolean`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDateRangePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).checkValidity`

***

### clear()

> **clear**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:651](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L651)

Clears the input parts of the component of any user input

#### Returns

`void`

***

### hide()

> **hide**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:107](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L107)

Hides the component.

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDateRangePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).hide`

***

### reportValidity()

> **reportValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:143](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L143)

Checks for validity of the control and shows the browser message if it invalid.

#### Returns

`boolean`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDateRangePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).reportValidity`

***

### select()

> **select**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-range-picker/date-range-picker.ts:661](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-range-picker/date-range-picker.ts#L661)

Selects a date range value in the picker

#### Parameters

##### value

`DateRangeValue` \| `null`

#### Returns

`void`

***

### setCustomValidity()

> **setCustomValidity**(`message`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:149](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L149)

Sets a custom validation message for the control.
As long as `message` is not empty, the control is considered invalid.

#### Parameters

##### message

`string`

#### Returns

`void`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDateRangePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).setCustomValidity`

***

### show()

> **show**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:102](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L102)

Shows the component.

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDateRangePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).show`

***

### toggle()

> **toggle**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:112](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L112)

Toggles the open state of the component.

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDateRangePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).toggle`

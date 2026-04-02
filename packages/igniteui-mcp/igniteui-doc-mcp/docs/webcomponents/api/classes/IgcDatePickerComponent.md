# Class: IgcDatePickerComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:173](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L173)

igc-date-picker is a feature rich component used for entering a date through manual text input or
choosing date values from a calendar dialog that pops up.

## Element

igc-date-picker

## Slot

prefix - Renders content before the input.

## Slot

suffix - Renders content after the input.

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

calendar-icon - Renders the icon/content for the calendar picker.

## Slot

calendar-icon-open - Renders the icon/content for the picker in open state.

## Slot

actions - Renders content in the action part of the picker in open state.

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

label - The label wrapper that renders content above the target input.

## Csspart

container - The main wrapper that holds all main input elements.

## Csspart

input - The native input element.

## Csspart

prefix - The prefix wrapper.

## Csspart

suffix - The suffix wrapper.

## Csspart

calendar-icon - The calendar icon wrapper for closed state.

## Csspart

calendar-icon-open - The calendar icon wrapper for opened state.

## Csspart

clear-icon - The clear icon wrapper.

## Csspart

actions - The actions wrapper.

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

- `FormRequiredInterface`\<`this`\> & `FormAssociatedElementInterface`\<`this`\> & `EventEmitterInterface`\<`IgcDatePickerComponentEventMap`, `this`\> & `IgcBaseComboBoxLikeComponent`\<`this`\>

## Properties

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

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDatePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).disabled`

***

### headerOrientation

> **headerOrientation**: `CalendarHeaderOrientation` = `'horizontal'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:351](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L351)

The orientation of the calendar header.

#### Attr

header-orientation

***

### hideHeader

> **hideHeader**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:365](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L365)

Determines whether the calendar hides its header.

#### Attr

hide-header

***

### hideOutsideDays

> **hideOutsideDays**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:372](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L372)

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

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDatePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).invalid`

***

### keepOpenOnOutsideClick

> **keepOpenOnOutsideClick**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L42)

Whether the component dropdown should be kept open on clicking outside of it.

#### Attr

keep-open-on-outside-click

#### Inherited from

[`IgcDateRangePickerComponent`](IgcDateRangePickerComponent.md).[`keepOpenOnOutsideClick`](IgcDateRangePickerComponent.md#keepopenonoutsideclick)

***

### keepOpenOnSelect

> **keepOpenOnSelect**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:31](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L31)

Whether the component dropdown should be kept open on selection.

#### Attr

keep-open-on-select

#### Inherited from

[`IgcDateRangePickerComponent`](IgcDateRangePickerComponent.md).[`keepOpenOnSelect`](IgcDateRangePickerComponent.md#keepopenonselect)

***

### label

> **label**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:266](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L266)

The label of the datepicker.

#### Attr

label

***

### mode

> **mode**: `PickerMode` = `'dropdown'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:273](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L273)

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

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDatePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).name`

***

### nonEditable

> **nonEditable**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:280](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L280)

Whether to allow typing in the input.

#### Attr

non-editable

***

### open

> **open**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:259](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L259)

Sets the state of the datepicker dropdown.

#### Attr

#### Overrides

[`IgcDropdownComponent`](IgcDropdownComponent.md).[`open`](IgcDropdownComponent.md#open)

***

### orientation

> **orientation**: `ContentOrientation` = `'horizontal'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:358](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L358)

The orientation of the multiple months displayed in the calendar's days view.

#### Attr

***

### outlined

> **outlined**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:395](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L395)

Whether the control will have outlined appearance.

#### Attr

***

### placeholder

> **placeholder**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:402](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L402)

The placeholder attribute of the control.

#### Attr

***

### prompt

> **prompt**: `string` = `'_'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:450](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L450)

The prompt symbol to use for unfilled parts of the mask.

#### Attr

***

### readOnly

> **readOnly**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:287](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L287)

Makes the control a readonly field.

#### Attr

readonly

***

### showWeekNumbers

> **showWeekNumbers**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:416](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L416)

Whether to show the number of the week in the calendar.

#### Attr

show-week-numbers

***

### specialDates

> **specialDates**: `DateRangeDescriptor`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:388](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L388)

Gets/sets special dates.

***

### visibleMonths

> **visibleMonths**: `number` = `1`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:409](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L409)

The number of months displayed in the calendar.

#### Attr

visible-months

***

### weekStart

> **weekStart**: `WeekDays` = `'sunday'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:479](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L479)

Sets the start day of the week for the calendar.

***

### tagName

> `readonly` `static` **tagName**: `"igc-date-picker"` = `'igc-date-picker'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:179](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L179)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Accessors

### activeDate

#### Set Signature

> **set** **activeDate**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:308](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L308)

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

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDatePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).defaultValue`

***

### disabledDates

#### Set Signature

> **set** **disabledDates**(`dates`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:376](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L376)

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

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:424](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L424)

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

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDatePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).form`

***

### inputFormat

#### Set Signature

> **set** **inputFormat**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:438](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L438)

The date format to apply on the input.
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

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:457](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L457)

Gets/Sets the locale used for formatting the display value.

##### Attr

locale

##### Parameters

###### value

`string`

##### Returns

`void`

***

### max

#### Set Signature

> **set** **max**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:336](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L336)

The maximum value required for the date picker to remain valid.

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

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:321](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L321)

The minimum value required for the date picker to remain valid.

##### Attr

##### Parameters

###### value

`string` \| `Date` \| `null` \| `undefined`

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

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDatePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).required`

***

### resourceStrings

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:469](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L469)

The resource strings for localization.

##### Parameters

###### value

`IgcCalendarResourceStrings`

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

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDatePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).validationMessage`

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

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDatePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).validity`

***

### value

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:295](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L295)

The value of the picker

##### Attr

##### Parameters

###### value

`string` \| `Date` \| `null` \| `undefined`

##### Returns

`void`

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

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDatePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).willValidate`

## Methods

### checkValidity()

> **checkValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:140](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L140)

Checks for validity of the control and emits the invalid event if it invalid.

#### Returns

`boolean`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDatePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).checkValidity`

***

### clear()

> **clear**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:636](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L636)

Clears the input part of the component of any user input

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

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDatePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).hide`

***

### reportValidity()

> **reportValidity**(): `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/forms/types.ts:143](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/forms/types.ts#L143)

Checks for validity of the control and shows the browser message if it invalid.

#### Returns

`boolean`

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDatePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).reportValidity`

***

### select()

> **select**(): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:653](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L653)

Selects the text in the input of the component

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

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDatePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).setCustomValidity`

***

### setSelectionRange()

> **setSelectionRange**(`start`, `end`, `direction?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:659](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L659)

Sets the text selection range in the input of the component

#### Parameters

##### start

`number`

##### end

`number`

##### direction?

`SelectionRangeDirection`

#### Returns

`void`

***

### show()

> **show**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:102](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L102)

Shows the component.

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDatePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).show`

***

### stepDown()

> **stepDown**(`datePart?`, `delta?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:648](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L648)

Decrements the passed in date part

#### Parameters

##### datePart?

[`DatePart`](../enumerations/DatePart.md)

##### delta?

`number`

#### Returns

`void`

***

### stepUp()

> **stepUp**(`datePart?`, `delta?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/date-picker/date-picker.ts:643](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/date-picker/date-picker.ts#L643)

Increments the passed in date part

#### Parameters

##### datePart?

[`DatePart`](../enumerations/DatePart.md)

##### delta?

`number`

#### Returns

`void`

***

### toggle()

> **toggle**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/combo-box.ts:112](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/combo-box.ts#L112)

Toggles the open state of the component.

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`FormAssociatedRequiredMixin( EventEmitterMixin< IgcDatePickerComponentEventMap, AbstractConstructor<IgcBaseComboBoxLikeComponent> >(IgcBaseComboBoxLikeComponent) ).toggle`

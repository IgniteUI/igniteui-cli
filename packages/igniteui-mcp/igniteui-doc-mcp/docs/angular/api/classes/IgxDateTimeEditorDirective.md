# Class: IgxDateTimeEditorDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:52](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L52)

Date Time Editor provides a functionality to input, edit and format date and time.

## Igx Module

IgxDateTimeEditorModule

## Igx Parent

IgxInputGroup

## Igx Theme

igx-input-theme

## Igx Keywords

date, time, editor

## Igx Group

Scheduling

## Remarks

The Ignite UI Date Time Editor Directive makes it easy for developers to manipulate date/time user input.
It requires input in a specified or default input format which is visible in the input element as a placeholder.
It allows the input of only date (ex: 'dd/MM/yyyy'), only time (ex:'HH:mm tt') or both at once, if needed.
Supports display format that may differ from the input format.
Provides methods to increment and decrement any specific/targeted `DatePart`.

**Note:** This directive uses the Mask Directive internally and requires `type="text"` on the input element.
Input elements with `type="date"` or other date/time types are not supported, as they do not allow
programmatic cursor positioning and text selection required for mask functionality.

## Example

```html
<igx-input-group>
  <input type="text" igxInput [igxDateTimeEditor]="'dd/MM/yyyy'" [displayFormat]="'shortDate'" [(ngModel)]="date"/>
</igx-input-group>
```

## Extends

- [`IgxMaskDirective`](IgxMaskDirective.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxDateTimeEditorDirective**(): `IgxDateTimeEditorDirective`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:301](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L301)

#### Returns

`IgxDateTimeEditorDirective`

#### Overrides

[`IgxMaskDirective`](IgxMaskDirective.md).[`constructor`](IgxMaskDirective.md#constructor)

## Properties

### \_composing

> `protected` **\_composing**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:132](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L132)

#### Inherited from

[`IgxMaskDirective`](IgxMaskDirective.md).[`_composing`](IgxMaskDirective.md#_composing)

***

### \_compositionStartIndex

> `protected` **\_compositionStartIndex**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:133](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L133)

#### Inherited from

[`IgxMaskDirective`](IgxMaskDirective.md).[`_compositionStartIndex`](IgxMaskDirective.md#_compositionstartindex)

***

### \_focused

> `protected` **\_focused**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:134](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L134)

#### Inherited from

[`IgxMaskDirective`](IgxMaskDirective.md).[`_focused`](IgxMaskDirective.md#_focused)

***

### \_onChangeCallback

> `protected` **\_onChangeCallback**: (`_`) => `void` = `noop`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:148](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L148)

#### Parameters

##### \_

`any`

#### Returns

`void`

#### Inherited from

[`IgxMaskDirective`](IgxMaskDirective.md).[`_onChangeCallback`](IgxMaskDirective.md#_onchangecallback)

***

### \_onTouchedCallback

> `protected` **\_onTouchedCallback**: () => `void` = `noop`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:147](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L147)

#### Returns

`void`

#### Inherited from

[`IgxMaskDirective`](IgxMaskDirective.md).[`_onTouchedCallback`](IgxMaskDirective.md#_ontouchedcallback)

***

### defaultFormatType

> **defaultFormatType**: `"date"` \| `"dateTime"` \| `"time"` = `'date'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:196](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L196)

Specify the default input format type. Defaults to `date`, which includes
only date parts for editing. Other valid options are `time` and `dateTime`.

#### Example

```html
<input igxDateTimeEditor [defaultFormatType]="'dateTime'">
```

***

### displayValuePipe

> **displayValuePipe**: `PipeTransform`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:66](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L66)

Specifies a pipe to be used on blur.
```html
<input [displayValuePipe] = "displayFormatPipe">
```

#### Inherited from

[`IgxMaskDirective`](IgxMaskDirective.md).[`displayValuePipe`](IgxMaskDirective.md#displayvaluepipe)

***

### elementRef

> `protected` **elementRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:14](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L14)

#### Inherited from

[`IgxMaskDirective`](IgxMaskDirective.md).[`elementRef`](IgxMaskDirective.md#elementref)

***

### focusedValuePipe

> **focusedValuePipe**: `PipeTransform`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:75](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L75)

Specifies a pipe to be used on focus.
```html
<input [focusedValuePipe] = "inputFormatPipe">
```

#### Inherited from

[`IgxMaskDirective`](IgxMaskDirective.md).[`focusedValuePipe`](IgxMaskDirective.md#focusedvaluepipe)

***

### includeLiterals

> **includeLiterals**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:57](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L57)

Specifies if the bound value includes the formatting symbols.
```html
<input [includeLiterals] = "true">
```

#### Inherited from

[`IgxMaskDirective`](IgxMaskDirective.md).[`includeLiterals`](IgxMaskDirective.md#includeliterals)

***

### locale

> **locale**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:72](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L72)

Locale settings used for value formatting.

#### Remarks

Uses Angular's `LOCALE_ID` by default. Affects both input mask and display format if those are not set.
If a `locale` is set, it must be registered via `registerLocaleData`.
Please refer to https://angular.io/guide/i18n#i18n-pipes.
If it is not registered, `Intl` will be used for formatting.

#### Example

```html
<input igxDateTimeEditor [locale]="'en'">
```

***

### maskParser

> `protected` **maskParser**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L15)

#### Inherited from

[`IgxMaskDirective`](IgxMaskDirective.md).[`maskParser`](IgxMaskDirective.md#maskparser)

***

### platform

> `protected` **platform**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:17](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L17)

#### Inherited from

[`IgxMaskDirective`](IgxMaskDirective.md).[`platform`](IgxMaskDirective.md#platform)

***

### promptChar

> **promptChar**: `string` = `'_'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:48](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L48)

Sets the character representing a fillable spot in the input mask.
Default value is "'_'".
```html
<input [promptChar] = "'/'">
```

#### Inherited from

[`IgxMaskDirective`](IgxMaskDirective.md).[`promptChar`](IgxMaskDirective.md#promptchar)

***

### renderer

> `protected` **renderer**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:16](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L16)

#### Inherited from

[`IgxMaskDirective`](IgxMaskDirective.md).[`renderer`](IgxMaskDirective.md#renderer)

***

### spinDelta

> **spinDelta**: [`DatePartDeltas`](../interfaces/DatePartDeltas.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:208](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L208)

Delta values used to increment or decrement each editor date part on spin actions.
All values default to `1`.

#### Example

```html
<input igxDateTimeEditor [spinDelta]="{date: 5, minute: 30}">
```

***

### spinLoop

> **spinLoop**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:125](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L125)

Specify if the currently spun date segment should loop over.

#### Example

```html
<input igxDateTimeEditor [spinLoop]="false">
```

***

### validationFailed

> **validationFailed**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:230](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L230)

Emitted when the editor is not within a specified range or when the editor's value is in an invalid state.

#### Example

```html
<input igxDateTimeEditor [minValue]="minDate" [maxValue]="maxDate" (validationFailed)="onValidationFailed($event)"/>
```

***

### valueChange

> **valueChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:219](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L219)

Emitted when the editor's value has changed.

#### Example

```html
<input igxDateTimeEditor (valueChange)="valueChange($event)"/>
```

***

### valueChanged

> **valueChanged**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:85](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L85)

Emits an event each time the value changes.
Provides `rawValue: string` and `formattedValue: string` as event arguments.
```html
<input (valueChanged) = "valueChanged(rawValue: string, formattedValue: string)">
```

#### Inherited from

[`IgxMaskDirective`](IgxMaskDirective.md).[`valueChanged`](IgxMaskDirective.md#valuechanged)

## Accessors

### displayFormat

#### Get Signature

> **get** **displayFormat**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:142](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L142)

##### Returns

`string`

#### Set Signature

> **set** **displayFormat**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:137](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L137)

Set both pre-defined format options such as `shortDate` and `longDate`,
as well as constructed format string using characters supported by `DatePipe`, e.g. `EE/MM/yyyy`.

##### Example

```html
<input igxDateTimeEditor [displayFormat]="'shortDate'">
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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:162](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L162)

##### Returns

`string`

#### Set Signature

> **set** **inputFormat**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:155](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L155)

Expected user input format (and placeholder).

##### Example

```html
<input [igxDateTimeEditor]="'dd/MM/yyyy'">
```

##### Parameters

###### value

`string`

##### Returns

`void`

***

### mask

#### Get Signature

> **get** **mask**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:26](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L26)

Sets the input mask.
```html
<input [igxMask] = "'00/00/0000'">
```

##### Returns

`string`

#### Set Signature

> **set** **mask**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:30](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L30)

##### Parameters

###### val

`string`

##### Returns

`void`

#### Inherited from

[`IgxMaskDirective`](IgxMaskDirective.md).[`mask`](IgxMaskDirective.md#mask)

***

### maxValue

#### Get Signature

> **get** **maxValue**(): `string` \| `Date`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:106](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L106)

Maximum value required for the editor to remain valid.

##### Remarks

If a `string` value is passed in, it must be in the defined input format.

##### Example

```html
<input igxDateTimeEditor [maxValue]="maxDate">
```

##### Returns

`string` \| `Date`

#### Set Signature

> **set** **maxValue**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:111](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L111)

##### Parameters

###### value

`string` \| `Date`

##### Returns

`void`

***

### minValue

#### Get Signature

> **get** **minValue**(): `string` \| `Date`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:85](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L85)

Minimum value required for the editor to remain valid.

##### Remarks

If a `string` value is passed, it must be in the defined input format.

##### Example

```html
<input igxDateTimeEditor [minValue]="minDate">
```

##### Returns

`string` \| `Date`

#### Set Signature

> **set** **minValue**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:90](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L90)

##### Parameters

###### value

`string` \| `Date`

##### Returns

`void`

***

### value

#### Get Signature

> **get** **value**(): `string` \| `Date`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:182](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L182)

##### Returns

`string` \| `Date`

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:175](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L175)

Editor value.

##### Example

```html
<input igxDateTimeEditor [value]="date">
```

##### Parameters

###### value

`string` \| `Date`

##### Returns

`void`

## Methods

### clear()

> **clear**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:347](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L347)

Clear the input element value.

#### Returns

`void`

***

### decrement()

> **decrement**(`datePart?`, `delta?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:375](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L375)

Decrement specified DatePart.

#### Parameters

##### datePart?

[`DatePart`](../enumerations/DatePart.md)

The optional DatePart to decrement. Defaults to Date or Hours (when Date is absent from the inputFormat - ex:'HH:mm').

##### delta?

`number`

The optional delta to decrement by. Overrides `spinDelta`.

#### Returns

`void`

***

### increment()

> **increment**(`datePart?`, `delta?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:360](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L360)

Increment specified DatePart.

#### Parameters

##### datePart?

[`DatePart`](../enumerations/DatePart.md)

The optional DatePart to increment. Defaults to Date or Hours (when Date is absent from the inputFormat - ex:'HH:mm').

##### delta?

`number`

The optional delta to increment by. Overrides `spinDelta`.

#### Returns

`void`

***

### onWheel()

> **onWheel**(`event`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts:308](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/date-time-editor/date-time-editor.directive.ts#L308)

#### Parameters

##### event

`WheelEvent`

#### Returns

`void`

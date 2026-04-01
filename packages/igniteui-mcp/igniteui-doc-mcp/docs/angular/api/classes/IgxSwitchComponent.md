# Class: IgxSwitchComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/switch/src/switch/switch.component.ts:44](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/switch/src/switch/switch.component.ts#L44)

The Switch component is a binary choice selection component.

## Igx Module

IgxSwitchModule

## Igx Theme

igx-switch-theme, igx-tooltip-theme

## Igx Keywords

switch, states, tooltip

## Igx Group

Data Entry & Display

## Remarks

The Ignite UI Switch lets the user toggle between on/off or true/false states.

## Example

```html
<igx-switch [checked]="true">
  Simple switch
</igx-switch>
```

## Extends

- [`CheckboxBaseDirective`](CheckboxBaseDirective.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxSwitchComponent**(): `IgxSwitchComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:237](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L237)

#### Returns

`IgxSwitchComponent`

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`constructor`](CheckboxBaseDirective.md#constructor)

## Properties

### ariaLabel

> **ariaLabel**: `string` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:235](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L235)

Sets/gets the value of the `aria-label` attribute.

#### Example

```html
<igx-checkbox aria-label="Checkbox1"></igx-checkbox>
```
```typescript
let ariaLabel = this.checkbox.ariaLabel;
```

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`ariaLabel`](CheckboxBaseDirective.md#arialabel)

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:221](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L221)

Sets/gets the `aria-labelledby` attribute.
If not set, the `aria-labelledby` will be equal to the value of `labelId` attribute.

#### Example

```html
<igx-checkbox aria-labelledby="Checkbox1"></igx-checkbox>
```
```typescript
let ariaLabelledBy = this.checkbox.ariaLabelledBy;
```

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`ariaLabelledBy`](CheckboxBaseDirective.md#arialabelledby)

***

### cdr

> `protected` **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:27](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L27)

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`cdr`](CheckboxBaseDirective.md#cdr)

***

### change

> `readonly` **change**: `EventEmitter`\<[`IChangeCheckboxEventArgs`](../interfaces/IChangeCheckboxEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:36](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L36)

An event that is emitted after the checkbox state is changed.
Provides references to the `IgxCheckboxComponent` and the `checked` property as event arguments.

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`change`](CheckboxBaseDirective.md#change)

***

### cssClass

> **cssClass**: `string` = `'igx-switch'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/switch/src/switch/switch.component.ts:56](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/switch/src/switch/switch.component.ts#L56)

Returns the class of the switch component.

#### Example

```typescript
let switchClass = this.switch.cssClass;
```

#### Overrides

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`cssClass`](CheckboxBaseDirective.md#cssclass)

***

### destroyRef

> `protected` **destroyRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:335](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L335)

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`destroyRef`](CheckboxBaseDirective.md#destroyref)

***

### disabled

> **disabled**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/switch/src/switch/switch.component.ts:85](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/switch/src/switch/switch.component.ts#L85)

Sets/gets the `disabled` attribute.
Default value is `false`.

#### Example

```html
<igx-switch disabled><igx-switch>
```

#### Overrides

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`disabled`](CheckboxBaseDirective.md#disabled)

***

### disableRipple

> **disableRipple**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:206](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L206)

Enables/Disables the ripple effect.
If not set, `disableRipple` will have value `false`.

#### Example

```html
<igx-checkbox [disableRipple]="true"></igx-checkbox>
```
```typescript
let isRippleDisabled = this.checkbox.desableRipple;
```

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`disableRipple`](CheckboxBaseDirective.md#disableripple)

***

### focused

> **focused**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/switch/src/switch/switch.component.ts:113](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/switch/src/switch/switch.component.ts#L113)

Sets/gets whether the switch component is on focus.
Default value is `false`.

#### Example

```typescript
this.switch.focused = true;
```

#### Overrides

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`focused`](CheckboxBaseDirective.md#focused)

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:123](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L123)

Sets/gets the `id` of the checkbox component.
If not set, the `id` of the first checkbox component will be `"igx-checkbox-0"`.

#### Example

```html
<igx-checkbox id="my-first-checkbox"></igx-checkbox>
```
```typescript
let checkboxId =  this.checkbox.id;
```

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`id`](CheckboxBaseDirective.md#id)

***

### indeterminate

> **indeterminate**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:70](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L70)

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`indeterminate`](CheckboxBaseDirective.md#indeterminate)

***

### invalid

> **invalid**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/switch/src/switch/switch.component.ts:101](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/switch/src/switch/switch.component.ts#L101)

Sets/gets whether the switch component is invalid.
Default value is `false`.

#### Example

```html
<igx-switch invalid></igx-switch>
```
```typescript
let isInvalid = this.switch.invalid;
```

#### Overrides

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`invalid`](CheckboxBaseDirective.md#invalid)

***

### labelId

> **labelId**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:137](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L137)

Sets/gets the id of the `label` element.
If not set, the id of the `label` in the first checkbox component will be `"igx-checkbox-0-label"`.

#### Example

```html
<igx-checkbox labelId="Label1"></igx-checkbox>
```
```typescript
let labelId =  this.component.labelId;
```

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`labelId`](CheckboxBaseDirective.md#labelid)

***

### labelPosition

> **labelPosition**: `string` = `LabelPosition.AFTER`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:191](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L191)

Sets/gets the position of the `label`.
 If not set, the `labelPosition` will have value `"after"`.

#### Example

```html
<igx-checkbox labelPosition="before"></igx-checkbox>
```
```typescript
let labelPosition =  this.checkbox.labelPosition;
```

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`labelPosition`](CheckboxBaseDirective.md#labelposition)

***

### name

> **name**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:163](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L163)

Sets/gets the `name` attribute.

#### Example

```html
<igx-checkbox name="Checkbox1"></igx-checkbox>
```
```typescript
let name =  this.checkbox.name;
```

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`name`](CheckboxBaseDirective.md#name)

***

### nativeInput

> **nativeInput**: `ElementRef`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:54](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L54)

Returns reference to the native checkbox element.

#### Example

```typescript
let checkboxElement =  this.component.checkboxElement;
```

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`nativeInput`](CheckboxBaseDirective.md#nativeinput)

***

### nativeLabel

> **nativeLabel**: `ElementRef`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:65](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L65)

Returns reference to the native label element.
```typescript

@example
let labelElement =  this.component.nativeLabel;
```

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`nativeLabel`](CheckboxBaseDirective.md#nativelabel)

***

### ngControl

> **ngControl**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:29](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L29)

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`ngControl`](CheckboxBaseDirective.md#ngcontrol)

***

### placeholderLabel

> **placeholderLabel**: `ElementRef`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:107](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L107)

Returns reference to the label placeholder element.
```typescript

@example
let labelPlaceholder =  this.component.placeholderLabel;
```

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`placeholderLabel`](CheckboxBaseDirective.md#placeholderlabel)

***

### readonly

> **readonly**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:69](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L69)

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`readonly`](CheckboxBaseDirective.md#readonly)

***

### tabindex

> **tabindex**: `number` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:176](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L176)

Sets/gets the value of the `tabindex` attribute.

#### Example

```html
<igx-checkbox [tabindex]="1"></igx-checkbox>
```
```typescript
let tabIndex =  this.checkbox.tabindex;
```

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`tabindex`](CheckboxBaseDirective.md#tabindex)

***

### themeToken

> `protected` **themeToken**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:28](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L28)

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`themeToken`](CheckboxBaseDirective.md#themetoken)

***

### value

> **value**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:150](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L150)

Sets/gets the `value` attribute.

#### Example

```html
<igx-checkbox [value]="'CheckboxValue'"></igx-checkbox>
```
```typescript
let value =  this.checkbox.value;
```

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`value`](CheckboxBaseDirective.md#value)

## Accessors

### checked

#### Get Signature

> **get** **checked**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/switch/src/switch/switch.component.ts:71](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/switch/src/switch/switch.component.ts#L71)

##### Returns

`boolean`

#### Set Signature

> **set** **checked**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/switch/src/switch/switch.component.ts:68](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/switch/src/switch/switch.component.ts#L68)

Sets/gets whether the switch is on or off.
Default value is 'false'.

##### Example

```html
 <igx-switch [checked]="true"></igx-switch>
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Overrides

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`checked`](CheckboxBaseDirective.md#checked)

***

### nativeElement

#### Get Signature

> **get** **nativeElement**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:94](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L94)

Returns reference to the `nativeElement` of the igx-checkbox/igx-switch.

##### Example

```typescript
let nativeElement = this.component.nativeElement;
```

##### Returns

`any`

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`nativeElement`](CheckboxBaseDirective.md#nativeelement)

***

### required

#### Get Signature

> **get** **required**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:267](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L267)

Sets/gets whether the checkbox is required.
If not set, `required` will have value `false`.

##### Example

```html
<igx-checkbox required></igx-checkbox>
```
```typescript
let isRequired = this.checkbox.required;
```

##### Returns

`boolean`

#### Set Signature

> **set** **required**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:270](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L270)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`CheckboxBaseDirective`](CheckboxBaseDirective.md).[`required`](CheckboxBaseDirective.md#required)

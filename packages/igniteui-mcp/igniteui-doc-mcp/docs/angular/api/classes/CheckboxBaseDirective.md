# Class: CheckboxBaseDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:26](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L26)

## Extended by

- [`IgxCheckboxComponent`](IgxCheckboxComponent.md)
- [`IgxRadioComponent`](IgxRadioComponent.md)
- [`IgxSwitchComponent`](IgxSwitchComponent.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new CheckboxBaseDirective**(): `CheckboxBaseDirective`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:237](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L237)

#### Returns

`CheckboxBaseDirective`

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

***

### cdr

> `protected` **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:27](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L27)

***

### change

> `readonly` **change**: `EventEmitter`\<[`IChangeCheckboxEventArgs`](../interfaces/IChangeCheckboxEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:36](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L36)

An event that is emitted after the checkbox state is changed.
Provides references to the `IgxCheckboxComponent` and the `checked` property as event arguments.

***

### cssClass

> **cssClass**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:67](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L67)

***

### destroyRef

> `protected` **destroyRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:335](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L335)

***

### disabled

> **disabled**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:68](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L68)

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

***

### focused

> **focused**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:71](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L71)

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

***

### indeterminate

> **indeterminate**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:70](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L70)

***

### invalid

> **invalid**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:72](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L72)

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

***

### nativeInput

> **nativeInput**: `ElementRef`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:54](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L54)

Returns reference to the native checkbox element.

#### Example

```typescript
let checkboxElement =  this.component.checkboxElement;
```

***

### nativeLabel

> **nativeLabel**: `ElementRef`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:65](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L65)

Returns reference to the native label element.
```typescript

@example
let labelElement =  this.component.nativeLabel;
```

***

### ngControl

> **ngControl**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:29](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L29)

***

### placeholderLabel

> **placeholderLabel**: `ElementRef`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:107](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L107)

Returns reference to the label placeholder element.
```typescript

@example
let labelPlaceholder =  this.component.placeholderLabel;
```

***

### readonly

> **readonly**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:69](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L69)

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

***

### themeToken

> `protected` **themeToken**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:28](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L28)

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

## Accessors

### checked

#### Get Signature

> **get** **checked**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:75](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L75)

##### Returns

`boolean`

#### Set Signature

> **set** **checked**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts:79](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/checkbox/checkbox-base.directive.ts#L79)

##### Parameters

###### value

`boolean`

##### Returns

`void`

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

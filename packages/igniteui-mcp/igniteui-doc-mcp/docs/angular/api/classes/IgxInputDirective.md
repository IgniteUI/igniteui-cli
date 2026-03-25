# Class: IgxInputDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:53](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L53)

The `igxInput` directive creates single- or multiline text elements, covering common scenarios when dealing with form inputs.

## Igx Module

IgxInputGroupModule

## Igx Parent

Data Entry & Display

## Igx Theme

igx-input-group-theme

## Igx Keywords

input, input group, form, field, validation

## Igx Group

presentation

## Example

```html
<input-group>
 <label for="address">Address</label>
 <input igxInput name="address" type="text" [(ngModel)]="customer.address">
</input-group>
```

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxInputDirective**(): `IgxInputDirective`

#### Returns

`IgxInputDirective`

## Properties

### cdr

> `protected` **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:58](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L58)

***

### element

> `protected` **element**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:57](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L57)

***

### formControl

> `protected` **formControl**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:56](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L56)

***

### inputGroup

> **inputGroup**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:54](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L54)

***

### isInput

> **isInput**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:76](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L76)

Sets/gets whether the `"igx-input-group__input"` class is added to the host element.
Default value is `false`.

#### Examples

```typescript
this.igxInput.isInput = true;
```

```typescript
let isCLassAdded = this.igxInput.isInput;
```

***

### isTextArea

> **isTextArea**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:92](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L92)

Sets/gets whether the `"class.igx-input-group__textarea"` class is added to the host element.
Default value is `false`.

#### Examples

```typescript
this.igxInput.isTextArea = true;
```

```typescript
let isCLassAdded = this.igxInput.isTextArea;
```

***

### ngModel

> `protected` **ngModel**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:55](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L55)

***

### renderer

> `protected` **renderer**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:59](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L59)

## Accessors

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:162](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L162)

Gets the `disabled` property

##### Example

```typescript
@ViewChild('igxInput', {read: IgxInputDirective})
 public igxInput: IgxInputDirective;
let isDisabled = this.igxInput.disabled;
```

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:145](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L145)

Sets the `disabled` property.

##### Example

```html
<input-group>
 <input igxInput #igxInput [disabled]="true">
</input-group>
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### focused

#### Get Signature

> **get** **focused**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:453](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L453)

Gets whether the igxInput is focused.

##### Example

```typescript
let isFocused = this.igxInput.focused;
```

##### Returns

`any`

***

### hasPlaceholder

#### Get Signature

> **get** **hasPlaceholder**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:415](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L415)

Gets whether the igxInput has a placeholder.

##### Example

```typescript
let hasPlaceholder = this.igxInput.hasPlaceholder;
```

##### Returns

`any`

***

### isValid

#### Get Signature

> **get** **isValid**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:488](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L488)

Gets whether the igxInput is valid.

##### Example

```typescript
let valid = this.igxInput.isValid;
```

##### Returns

`boolean`

***

### nativeElement

#### Get Signature

> **get** **nativeElement**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:348](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L348)

Gets the `nativeElement` of the igxInput.

##### Example

```typescript
let igxInputNativeElement = this.igxInput.nativeElement;
```

##### Returns

`any`

***

### placeholder

#### Get Signature

> **get** **placeholder**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:426](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L426)

Gets the placeholder element of the igxInput.

##### Example

```typescript
let igxInputPlaceholder = this.igxInput.placeholder;
```

##### Returns

`any`

***

### required

#### Get Signature

> **get** **required**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:189](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L189)

Gets whether the igxInput is required.

##### Example

```typescript
let isRequired = this.igxInput.required;
```

##### Returns

`boolean`

#### Set Signature

> **set** **required**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:177](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L177)

Sets the `required` property.

##### Example

```html
<input-group>
 <input igxInput #igxInput required>
</input-group>
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### valid

#### Get Signature

> **get** **valid**(): [`IgxInputState`](../enumerations/IgxInputState.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:464](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L464)

Gets the state of the igxInput.

##### Example

```typescript
let igxInputState = this.igxInput.valid;
```

##### Returns

[`IgxInputState`](../enumerations/IgxInputState.md)

#### Set Signature

> **set** **valid**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:476](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L476)

Sets the state of the igxInput.

##### Example

```typescript
this.igxInput.valid = IgxInputState.INVALID;
```

##### Parameters

###### value

[`IgxInputState`](../enumerations/IgxInputState.md)

##### Returns

`void`

***

### value

#### Get Signature

> **get** **value**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:130](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L130)

Gets the `value` property.

##### Example

```typescript
@ViewChild('igxInput', {read: IgxInputDirective})
 public igxInput: IgxInputDirective;
let inputValue = this.igxInput.value;
```

##### Returns

`any`

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:116](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L116)

Sets the `value` property.

##### Example

```html
<input-group>
 <input igxInput #igxInput [value]="'IgxInput Value'">
</input-group>
```

##### Parameters

###### value

`any`

##### Returns

`void`

## Methods

### focus()

> **focus**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts:337](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-input/input.directive.ts#L337)

Sets a focus on the igxInput.

#### Returns

`void`

#### Example

```typescript
this.igxInput.focus();
```

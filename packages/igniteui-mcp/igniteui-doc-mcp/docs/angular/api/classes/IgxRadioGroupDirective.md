# Class: IgxRadioGroupDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:61](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L61)

Radio group directive renders set of radio buttons.

## Igx Module

IgxRadioModule

## Igx Theme

igx-radio-theme

## Igx Keywords

radiogroup, radio, button, input

## Igx Group

Data Entry & Display

## Remarks

The Ignite UI Radio Group allows the user to select a single option from an available set of options that are listed side by side.

@example:
```html
<igx-radio-group name="radioGroup">
  <igx-radio *ngFor="let item of ['Foo', 'Bar', 'Baz']" value="{{item}}">
     {{item}}
  </igx-radio>
</igx-radio-group>
```

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxRadioGroupDirective**(): `IgxRadioGroupDirective`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:486](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L486)

#### Returns

`IgxRadioGroupDirective`

## Properties

### change

> `readonly` **change**: `EventEmitter`\<[`IChangeCheckboxEventArgs`](../interfaces/IChangeCheckboxEventArgs.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:196](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L196)

An event that is emitted after the radio group `value` is changed.

#### Remarks

Provides references to the selected `IgxRadioComponent` and the `value` property as event arguments.

#### Example

```html
<igx-radio-group (change)="handler($event)"></igx-radio-group>
```

***

### ngControl

> **ngControl**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:62](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L62)

## Accessors

### alignment

#### Get Signature

> **get** **alignment**(): [`RadioGroupAlignment`](../type-aliases/RadioGroupAlignment.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:312](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L312)

Returns the alignment of the `igx-radio-group`.
```typescript
@ViewChild("MyRadioGroup")
public radioGroup: IgxRadioGroupDirective;
ngAfterViewInit(){
   let radioAlignment = this.radioGroup.alignment;
}
```

##### Returns

[`RadioGroupAlignment`](../type-aliases/RadioGroupAlignment.md)

#### Set Signature

> **set** **alignment**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:326](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L326)

Allows you to set the radio group alignment.
Available options are `RadioGroupAlignment.horizontal` (default) and `RadioGroupAlignment.vertical`.
```typescript
public alignment = RadioGroupAlignment.vertical;
//..
```
```html
<igx-radio-group [alignment]="alignment"></igx-radio-group>
```

##### Parameters

###### value

[`RadioGroupAlignment`](../type-aliases/RadioGroupAlignment.md)

##### Returns

`void`

***

### invalid

#### Get Signature

> **get** **invalid**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:175](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L175)

Sets/gets whether the radio group is invalid.

##### Remarks

If not set, `invalid` will have value `false`.

##### Example

```html
<igx-radio-group [invalid] = "true"></igx-radio-group>
```

##### Returns

`boolean`

#### Set Signature

> **set** **invalid**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:179](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L179)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:111](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L111)

Sets/gets the `name` attribute of the radio group component. All child radio buttons inherits this name.

##### Example

```html
<igx-radio-group name = "Radio1"></igx-radio-group>
 ```

##### Returns

`string`

#### Set Signature

> **set** **name**(`newValue`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:114](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L114)

##### Parameters

###### newValue

`string`

##### Returns

`void`

***

### radioButtons

#### Get Signature

> **get** **radioButtons**(): `QueryList`\<[`IgxRadioComponent`](IgxRadioComponent.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:77](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L77)

Returns reference to the child radio buttons.

##### Example

```typescript
let radioButtons =  this.radioGroup.radioButtons;
```

##### Returns

`QueryList`\<[`IgxRadioComponent`](IgxRadioComponent.md)\>

***

### required

#### Get Signature

> **get** **required**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:133](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L133)

Sets/gets whether the radio group is required.

##### Remarks

If not set, `required` will have value `false`.

##### Example

```html
<igx-radio-group [required] = "true"></igx-radio-group>
```

##### Returns

`boolean`

#### Set Signature

> **set** **required**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:137](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L137)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### selected

#### Get Signature

> **get** **selected**(): [`IgxRadioComponent`](IgxRadioComponent.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:152](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L152)

Sets/gets the selected child radio button.

##### Example

```typescript
let selectedButton = this.radioGroup.selected;
this.radioGroup.selected = selectedButton;
```

##### Returns

[`IgxRadioComponent`](IgxRadioComponent.md)

#### Set Signature

> **set** **selected**(`selected`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:156](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L156)

##### Parameters

###### selected

[`IgxRadioComponent`](IgxRadioComponent.md)

##### Returns

`void`

***

### value

#### Get Signature

> **get** **value**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:91](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L91)

Sets/gets the `value` attribute.

##### Example

```html
<igx-radio-group [value] = "'radioButtonValue'"></igx-radio-group>
```

##### Returns

`any`

#### Set Signature

> **set** **value**(`newValue`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:95](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L95)

##### Parameters

###### newValue

`any`

##### Returns

`void`

## Methods

### handleClick()

> `protected` **handleClick**(`event`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:246](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L246)

#### Parameters

##### event

`MouseEvent`

#### Returns

`void`

***

### handleKeyDown()

> `protected` **handleKeyDown**(`event`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:255](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L255)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`void`

***

### ngDoCheck()

> **ngDoCheck**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:414](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L414)

#### Returns

`void`

***

### writeValue()

> **writeValue**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts:449](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/radio/src/radio/radio-group/radio-group.directive.ts#L449)

Sets the "checked" property value on the radio input element.

#### Parameters

##### value

`any`

#### Returns

`void`

#### Remarks

Checks whether the provided value is consistent to the current radio button.
If it is, the checked attribute will have value `true` and selected property will contain the selected `IgxRadioComponent`.

#### Example

```typescript
this.radioGroup.writeValue('radioButtonValue');
```

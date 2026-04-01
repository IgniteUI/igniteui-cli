# Class: IgxMaskDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:13](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L13)

## Extended by

- [`IgxDateTimeEditorDirective`](IgxDateTimeEditorDirective.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxMaskDirective**(): `IgxMaskDirective`

#### Returns

`IgxMaskDirective`

## Properties

### \_composing

> `protected` **\_composing**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:132](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L132)

***

### \_compositionStartIndex

> `protected` **\_compositionStartIndex**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:133](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L133)

***

### \_focused

> `protected` **\_focused**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:134](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L134)

***

### \_onChangeCallback

> `protected` **\_onChangeCallback**: (`_`) => `void` = `noop`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:148](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L148)

#### Parameters

##### \_

`any`

#### Returns

`void`

***

### \_onTouchedCallback

> `protected` **\_onTouchedCallback**: () => `void` = `noop`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:147](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L147)

#### Returns

`void`

***

### displayValuePipe

> **displayValuePipe**: `PipeTransform`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:66](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L66)

Specifies a pipe to be used on blur.
```html
<input [displayValuePipe] = "displayFormatPipe">
```

***

### elementRef

> `protected` **elementRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:14](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L14)

***

### focusedValuePipe

> **focusedValuePipe**: `PipeTransform`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:75](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L75)

Specifies a pipe to be used on focus.
```html
<input [focusedValuePipe] = "inputFormatPipe">
```

***

### includeLiterals

> **includeLiterals**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:57](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L57)

Specifies if the bound value includes the formatting symbols.
```html
<input [includeLiterals] = "true">
```

***

### maskParser

> `protected` **maskParser**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L15)

***

### platform

> `protected` **platform**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:17](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L17)

***

### promptChar

> **promptChar**: `string` = `'_'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:48](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L48)

Sets the character representing a fillable spot in the input mask.
Default value is "'_'".
```html
<input [promptChar] = "'/'">
```

***

### renderer

> `protected` **renderer**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:16](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L16)

***

### valueChanged

> **valueChanged**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts:85](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/mask/mask.directive.ts#L85)

Emits an event each time the value changes.
Provides `rawValue: string` and `formattedValue: string` as event arguments.
```html
<input (valueChanged) = "valueChanged(rawValue: string, formattedValue: string)">
```

## Accessors

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

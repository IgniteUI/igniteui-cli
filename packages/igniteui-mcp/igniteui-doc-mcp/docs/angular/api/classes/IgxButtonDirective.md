# Class: IgxButtonDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/button.directive.ts:48](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/button.directive.ts#L48)

The Button directive provides the Ignite UI Button functionality to every component that's intended to be used as a button.

## Igx Module

IgxButtonModule

## Igx Parent

Data Entry & Display

## Igx Theme

igx-button-theme

## Igx Keywords

button, span, div, click

## Remarks

The Ignite UI Button directive is intended to be used by any button, span or div and turn it into a fully functional button.

## Example

```html
<button type="button" igxButton="outlined">A Button</button>
```

## Extends

- `IgxButtonBaseDirective`

## Constructors

### Constructor

> **new IgxButtonDirective**(): `IgxButtonDirective`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/button.directive.ts:124](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/button.directive.ts#L124)

#### Returns

`IgxButtonDirective`

#### Overrides

`IgxButtonBaseDirective.constructor`

## Properties

### buttonClick

> **buttonClick**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/button-base.ts:35](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/button-base.ts#L35)

Emitted when the button is clicked.

#### Inherited from

[`IgxIconButtonDirective`](IgxIconButtonDirective.md).[`buttonClick`](IgxIconButtonDirective.md#buttonclick)

***

### buttonSelected

> **buttonSelected**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/button.directive.ts:57](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/button.directive.ts#L57)

Called when the button is selected.

***

### disabled

> **disabled**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/button-base.ts:91](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/button-base.ts#L91)

Enables/disables the button.

#### Example

```html
<button igxButton="fab" disabled></button>
```

#### Inherited from

[`IgxIconButtonDirective`](IgxIconButtonDirective.md).[`disabled`](IgxIconButtonDirective.md#disabled)

***

### element

> **element**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/button-base.ts:27](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/button-base.ts#L27)

#### Inherited from

[`IgxIconButtonDirective`](IgxIconButtonDirective.md).[`element`](IgxIconButtonDirective.md#element)

***

### focused

> `protected` **focused**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/button-base.ts:79](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/button-base.ts#L79)

Sets/gets whether the button component is on focus.
Default value is `false`.
```typescript
this.button.focus = true;
```
```typescript
let isFocused =  this.button.focused;
```

#### Inherited from

[`IgxIconButtonDirective`](IgxIconButtonDirective.md).[`focused`](IgxIconButtonDirective.md#focused)

***

### role

> **role**: `string` = `'button'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/button-base.ts:47](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/button-base.ts#L47)

Sets/gets the `role` attribute.

#### Example

```typescript
this.button.role = 'navbutton';
let buttonRole = this.button.role;
```

#### Inherited from

[`IgxIconButtonDirective`](IgxIconButtonDirective.md).[`role`](IgxIconButtonDirective.md#role)

## Accessors

### label

#### Set Signature

> **set** **label**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/button.directive.ts:153](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/button.directive.ts#L153)

Sets the `aria-label` attribute.

##### Example

```html
<button type="button" igxButton="flat" igxLabel="Label"></button>
```

##### Parameters

###### value

`string`

##### Returns

`void`

***

### nativeElement

#### Get Signature

> **get** **nativeElement**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/button-base.ts:143](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/button-base.ts#L143)

Returns the underlying DOM element.

##### Returns

`any`

#### Inherited from

`IgxButtonBaseDirective.nativeElement`

***

### selected

#### Get Signature

> **get** **selected**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/button.directive.ts:120](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/button.directive.ts#L120)

##### Returns

`boolean`

#### Set Signature

> **set** **selected**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/button.directive.ts:113](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/button.directive.ts#L113)

Gets or sets whether the button is selected.
Mainly used in the IgxButtonGroup component and it will have no effect if set separately.

##### Example

```html
<button type="button" igxButton="flat" [selected]="button.selected"></button>
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### type

#### Set Signature

> **set** **type**(`type`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/button.directive.ts:137](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/button.directive.ts#L137)

Sets the type of the button.

##### Example

```html
<button type="button" igxButton="outlined"></button>
```

##### Parameters

###### type

[`IgxButtonType`](../type-aliases/IgxButtonType.md)

##### Returns

`void`

## Methods

### emitSelected()

> `protected` **emitSelected**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/button.directive.ts:97](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/button.directive.ts#L97)

#### Returns

`void`

***

### ngAfterViewInit()

> **ngAfterViewInit**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/button-base.ts:112](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/button-base.ts#L112)

#### Returns

`void`

#### Inherited from

`IgxButtonBaseDirective.ngAfterViewInit`

***

### ngOnDestroy()

> **ngOnDestroy**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/button-base.ts:123](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/button-base.ts#L123)

#### Returns

`void`

#### Inherited from

`IgxButtonBaseDirective.ngOnDestroy`

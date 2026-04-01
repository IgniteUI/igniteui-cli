# Class: IgxIconButtonDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/icon-button.directive.ts:23](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/icon-button.directive.ts#L23)

The IgxIconButtonDirective provides a way to use an icon as a fully functional button.

## Example

```html
<button type="button" igxIconButton="outlined">
     <igx-icon>home</igx-icon>
</button>
```

## Extends

- `IgxButtonBaseDirective`

## Constructors

### Constructor

> **new IgxIconButtonDirective**(): `IgxIconButtonDirective`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/icon-button.directive.ts:26](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/icon-button.directive.ts#L26)

#### Returns

`IgxIconButtonDirective`

#### Overrides

`IgxButtonBaseDirective.constructor`

## Properties

### buttonClick

> **buttonClick**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/button-base.ts:35](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/button-base.ts#L35)

Emitted when the button is clicked.

#### Inherited from

`IgxButtonBaseDirective.buttonClick`

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

`IgxButtonBaseDirective.disabled`

***

### element

> **element**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/button-base.ts:27](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/button-base.ts#L27)

#### Inherited from

`IgxButtonBaseDirective.element`

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

`IgxButtonBaseDirective.focused`

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

`IgxButtonBaseDirective.role`

## Accessors

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

### type

#### Set Signature

> **set** **type**(`type`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/button/icon-button.directive.ts:52](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/button/icon-button.directive.ts#L52)

Sets the type of the icon button.

##### Example

```html
<button type="button" igxIconButton="flat"></button>
```

##### Parameters

###### type

[`IgxIconButtonType`](../type-aliases/IgxIconButtonType.md)

##### Returns

`void`

## Methods

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

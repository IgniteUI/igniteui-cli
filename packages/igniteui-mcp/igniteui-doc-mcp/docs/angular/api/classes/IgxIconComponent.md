# Class: IgxIconComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.component.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.component.ts#L34)

Icon provides a way to include material icons to markup

## Igx Module

IgxIconModule

## Igx Theme

igx-icon-theme

## Igx Keywords

icon, picture

## Igx Group

Display

## Remarks

The Ignite UI Icon makes it easy for developers to include material design icons directly in their markup. The icons
support different icon families and can be marked as active or disabled using the `active` property. This will change the appearance
of the icon.

## Example

```html
<igx-icon family="filter-icons" active="true">home</igx-icon>
```

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxIconComponent**(): `IgxIconComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.component.ts:118](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.component.ts#L118)

#### Returns

`IgxIconComponent`

## Properties

### active

> **active**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.component.ts:116](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.component.ts#L116)

An

#### Input

property that allows you to disable the `active` property. By default it's applied.

#### Example

```html
<igx-icon [active]="false">settings</igx-icon>
```

***

### ariaHidden

> **ariaHidden**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.component.ts:83](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.component.ts#L83)

The `aria-hidden` attribute of the icon.
 By default is set to 'true'.

***

### el

> **el**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.component.ts:35](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.component.ts#L35)

***

### family

> **family**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.component.ts:94](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.component.ts#L94)

An

#### Input

property that sets the value of the `family`. By default it's "material".

#### Example

```html
<igx-icon family="material">settings</igx-icon>
```

***

### name

> **name**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.component.ts:105](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.component.ts#L105)

Set the `name` of the icon.

#### Example

```html
<igx-icon name="contains" family="filter-icons"></igx-icon>
```

## Accessors

### elementClasses

#### Get Signature

> **get** `protected` **elementClasses**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.component.ts:45](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.component.ts#L45)

##### Returns

`string`

***

### getActive

#### Get Signature

> **get** **getActive**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.component.ts:193](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.component.ts#L193)

An accessor that returns the value of the active property.

##### Example

```typescript
@ViewChild("MyIcon")
public icon: IgxIconComponent;
ngAfterViewInit() {
   let iconActive = this.icon.getActive;
}
```

##### Returns

`boolean`

***

### getFamily

#### Get Signature

> **get** **getFamily**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.component.ts:177](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.component.ts#L177)

An accessor that returns the value of the family property.

##### Example

```typescript
 @ViewChild("MyIcon")
public icon: IgxIconComponent;
ngAfterViewInit() {
   let iconFamily = this.icon.getFamily;
}
```

##### Returns

`string`

***

### getInactive

#### Get Signature

> **get** **getInactive**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.component.ts:73](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.component.ts#L73)

An accessor that returns inactive property.

##### Example

```typescript
@ViewChild("MyIcon")
public icon: IgxIconComponent;
ngAfterViewInit() {
   let iconActive = this.icon.getInactive;
}
```

##### Returns

`boolean`

***

### getName

#### Get Signature

> **get** **getName**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.component.ts:209](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.component.ts#L209)

An accessor that returns the value of the iconName property.

##### Example

```typescript
@ViewChild("MyIcon")
public icon: IgxIconComponent;
ngAfterViewInit() {
   let name = this.icon.getName;
}
```

##### Returns

`string`

***

### getSvg

#### Get Signature

> **get** **getSvg**(): `SafeHtml`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.component.ts:225](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.component.ts#L225)

An accessor that returns the underlying SVG image as SafeHtml.

##### Example

```typescript
@ViewChild("MyIcon")
public icon: IgxIconComponent;
ngAfterViewInit() {
   let svg: SafeHtml = this.icon.getSvg;
}
```

##### Returns

`SafeHtml`

***

### iconRef

#### Get Signature

> **get** `protected` **iconRef**(): [`IconReference`](../type-aliases/IconReference.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.component.ts:157](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.component.ts#L157)

##### Returns

[`IconReference`](../type-aliases/IconReference.md)

#### Set Signature

> **set** `protected` **iconRef**(`ref`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.component.ts:161](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.component.ts#L161)

##### Parameters

###### ref

[`IconReference`](../type-aliases/IconReference.md)

##### Returns

`void`

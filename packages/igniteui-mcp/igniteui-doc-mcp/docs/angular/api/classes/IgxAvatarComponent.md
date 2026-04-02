# Class: IgxAvatarComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts:50](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts#L50)

Avatar provides a way to display an image, icon or initials to the user.

## Igx Module

IgxAvatarModule

## Igx Theme

igx-avatar-theme, igx-icon-theme

## Igx Keywords

avatar, profile, picture, initials

## Igx Group

Layouts

## Remarks

The Ignite UI Avatar provides an easy way to add an avatar icon to your application.  This icon can be an
image, someone's initials or a material icon from the Google Material icon set.

## Example

```html
<igx-avatar initials="MS" shape="rounded" size="large">
</igx-avatar>
```

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxAvatarComponent**(): `IgxAvatarComponent`

#### Returns

`IgxAvatarComponent`

## Properties

### ariaLabel

> **ariaLabel**: `string` = `'avatar'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts:63](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts#L63)

Returns the `aria-label` attribute of the avatar.

#### Example

```typescript
let ariaLabel = this.avatar.ariaLabel;
```

***

### ~~bgColor~~

> **bgColor**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts:164](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts#L164)

Sets the background color of the avatar.

#### Example

```html
<igx-avatar bgColor="yellow"></igx-avatar>
```

#### Igx Friendly Name

Background color

#### Deprecated

in version 17.2.0.

***

### ~~color~~

> **color**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts:149](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts#L149)

Sets the color of the avatar's initials or icon.

#### Example

```html
<igx-avatar color="blue"></igx-avatar>
```

#### Deprecated

in version 17.2.0.

***

### elementRef

> **elementRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts:51](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts#L51)

***

### icon

> **icon**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts:186](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts#L186)

Sets an icon to the avatar. All icons from the material icon set are supported.

#### Example

```html
<igx-avatar icon="phone"></igx-avatar>
```

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts:111](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts#L111)

Sets the `id` of the avatar. If not set, the first avatar component will have `id` = `"igx-avatar-0"`.

#### Example

```html
<igx-avatar id="my-first-avatar"></igx-avatar>
```

***

### initials

> **initials**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts:175](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts#L175)

Sets initials to the avatar.

#### Example

```html
<igx-avatar initials="MN"></igx-avatar>
```

***

### role

> **role**: `string` = `'img'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts:74](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts#L74)

Returns the `role` attribute of the avatar.

#### Example

```typescript
let avatarRole = this.avatar.role;
```

***

### roleDescription

> **roleDescription**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts:99](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts#L99)

Returns the type of the avatar.
The avatar can be:
- `"initials type avatar"`
- `"icon type avatar"`
- `"image type avatar"`.
- `"custom type avatar"`.

#### Example

```typescript
let avatarDescription = this.avatar.roleDescription;
```

***

### shape

> **shape**: `"circle"` \| `"square"` \| `"rounded"` = `'square'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts:123](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts#L123)

Sets square, rounded or circular shape to the avatar.
By default the shape of the avatar is square.

#### Example

```html
<igx-avatar shape="rounded"></igx-avatar>
```

## Accessors

### componentSize

#### Get Signature

> **get** `protected` **componentSize**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts:304](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts#L304)

##### Returns

`string`

***

### size

#### Get Signature

> **get** **size**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts:238](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts#L238)

Returns the size of the avatar.

##### Example

```typescript
let avatarSize = this.avatar.size;
```

##### Returns

`string`

#### Set Signature

> **set** **size**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts:251](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts#L251)

Sets the size  of the avatar.
By default, the size is `"small"`. It can be set to `"medium"` or `"large"`.

##### Example

```html
<igx-avatar size="large"></igx-avatar>
```

##### Parameters

###### value

`string`

##### Returns

`void`

***

### src

#### Get Signature

> **get** **src**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts:202](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts#L202)

##### Returns

`string`

#### Set Signature

> **set** **src**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts:198](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts#L198)

Sets the image source of the avatar.

##### Example

```html
<igx-avatar src="images/picture.jpg"></igx-avatar>
```

##### Igx Friendly Name

Image URL

##### Parameters

###### value

`string`

##### Returns

`void`

***

### type

#### Get Signature

> **get** **type**(): [`IgxAvatarType`](../type-aliases/IgxAvatarType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts:271](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/avatar/src/avatar/avatar.component.ts#L271)

Returns the type of the avatar.

##### Example

```typescript
let avatarType = this.avatar.type;
```

##### Returns

[`IgxAvatarType`](../type-aliases/IgxAvatarType.md)

# Class: IgxBadgeComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/badge/src/badge/badge.component.ts:44](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/badge/src/badge/badge.component.ts#L44)

Badge provides visual notifications used to decorate avatars, menus, etc.

## Igx Module

IgxBadgeModule

## Igx Theme

igx-badge-theme

## Igx Keywords

badge, icon, notification

## Igx Group

Data Entry & Display

## Remarks

The Ignite UI Badge is used to decorate avatars, navigation menus, or other components in the
application when visual notification is needed. They are usually designed as icons with a predefined
style to communicate information, success, warnings, or errors.

## Example

```html
<igx-avatar>
  <igx-badge icon="check" type="success"></igx-badge>
</igx-avatar>

## Constructors

### Constructor

> **new IgxBadgeComponent**(): `IgxBadgeComponent`

#### Returns

`IgxBadgeComponent`

## Properties

### cssClass

> **cssClass**: `string` = `'igx-badge'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/badge/src/badge/badge.component.ts:139](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/badge/src/badge/badge.component.ts#L139)

Sets/gets the css class to use on the badge.

#### Example

```typescript
@ViewChild("MyBadge", { read: IgxBadgeComponent })
public badge: IgxBadgeComponent;

badge.cssClass = 'my-badge-class';
```

***

### dot

> **dot**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/badge/src/badge/badge.component.ts:200](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/badge/src/badge/badge.component.ts#L200)

Sets/gets whether the badge is displayed as a dot.
When true, the badge will be rendered as a minimal 8px indicator without any content.
Default value is `false`.

#### Example

```html
<igx-badge dot type="success"></igx-badge>
```

***

### icon

> **icon**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/badge/src/badge/badge.component.ts:105](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/badge/src/badge/badge.component.ts#L105)

Sets/gets an icon for the badge from the material icons set.

#### Remarks

Has priority over the `value` property.
If neither a `value` nor an `icon` is set the content of the badge will be empty.
Providing an invalid value won't display anything.

#### Example

```html
<igx-badge icon="check"></igx-badge>
```

***

### iconSet

> **iconSet**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/badge/src/badge/badge.component.ts:111](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/badge/src/badge/badge.component.ts#L111)

The name of the icon set. Used in case the icon is from a different icon set.

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/badge/src/badge/badge.component.ts:59](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/badge/src/badge/badge.component.ts#L59)

Sets/gets the `id` of the badge.

#### Remarks

If not set, the `id` will have value `"igx-badge-0"`.

#### Example

```html
<igx-badge id="igx-badge-2"></igx-badge>
```

***

### label

> **label**: `string` = `'badge'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/badge/src/badge/badge.component.ts:173](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/badge/src/badge/badge.component.ts#L173)

Sets/gets the aria-label attribute value.

#### Example

```typescript
@ViewChild("MyBadge", { read: IgxBadgeComponent })
public badge: IgxBadgeComponent;

badge.label = 'badge';
```

***

### outlined

> **outlined**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/badge/src/badge/badge.component.ts:186](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/badge/src/badge/badge.component.ts#L186)

Sets/gets whether the badge is outlined.
Default value is `false`.

#### Example

```html
<igx-badge outlined></igx-badge>
```

***

### role

> **role**: `string` = `'status'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/badge/src/badge/badge.component.ts:125](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/badge/src/badge/badge.component.ts#L125)

Sets/gets the role attribute value.

#### Example

```typescript
@ViewChild("MyBadge", { read: IgxBadgeComponent })
public badge: IgxBadgeComponent;

badge.role = 'status';
```

***

### shape

> **shape**: `"square"` \| `"rounded"` = `'rounded'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/badge/src/badge/badge.component.ts:151](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/badge/src/badge/badge.component.ts#L151)

Sets a square shape to the badge, if `shape` is set to `square`.
By default the shape of the badge is rounded.

#### Example

```html
<igx-badge shape="square"></igx-badge>
```

***

### type

> **type**: `string` = `IgxBadgeType.PRIMARY`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/badge/src/badge/badge.component.ts:74](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/badge/src/badge/badge.component.ts#L74)

Sets/gets the type of the badge.

#### Remarks

Allowed values are `primary`, `info`, `success`, `warning`, `error`.
Providing an invalid value won't display a badge.

#### Example

```html
<igx-badge type="success"></igx-badge>
```

***

### value

> **value**: `string` \| `number` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/badge/src/badge/badge.component.ts:89](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/badge/src/badge/badge.component.ts#L89)

Sets/gets the value to be displayed inside the badge.

#### Remarks

If an `icon` property is already set the `icon` will be displayed.
If neither a `value` nor an `icon` is set the content of the badge will be empty.

#### Example

```html
<igx-badge value="11"></igx-badge>
```

## Accessors

### errorClass

#### Get Signature

> **get** **errorClass**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/badge/src/badge/badge.component.ts:235](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/badge/src/badge/badge.component.ts#L235)

##### Returns

`boolean`

***

### infoClass

#### Get Signature

> **get** **infoClass**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/badge/src/badge/badge.component.ts:220](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/badge/src/badge/badge.component.ts#L220)

##### Returns

`boolean`

***

### successClass

#### Get Signature

> **get** **successClass**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/badge/src/badge/badge.component.ts:225](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/badge/src/badge/badge.component.ts#L225)

##### Returns

`boolean`

***

### warningClass

#### Get Signature

> **get** **warningClass**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/badge/src/badge/badge.component.ts:230](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/badge/src/badge/badge.component.ts#L230)

##### Returns

`boolean`

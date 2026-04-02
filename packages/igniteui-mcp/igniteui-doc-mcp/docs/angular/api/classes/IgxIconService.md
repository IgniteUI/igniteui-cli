# Class: IgxIconService

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.service.ts:39](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.service.ts#L39)

**Ignite UI for Angular Icon Service** -

The Ignite UI Icon Service makes it easy for developers to include custom SVG images and use them with IgxIconComponent.
In addition it could be used to associate a custom class to be applied on IgxIconComponent according to given font-family.

Example:
```typescript
this.iconService.setFamily('material', { className: 'material-icons', type: 'font' });
this.iconService.addSvgIcon('aruba', '/assets/svg/country_flags/aruba.svg', 'svg-flags');
```

## Constructors

### Constructor

> **new IgxIconService**(): `IgxIconService`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.service.ts:68](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.service.ts#L68)

#### Returns

`IgxIconService`

## Properties

### document

> `protected` **document**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.service.ts:45](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.service.ts#L45)

***

### iconLoaded

> **iconLoaded**: `Observable`\<[`IgxIconLoadedEvent`](../interfaces/IgxIconLoadedEvent.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.service.ts:56](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.service.ts#L56)

Observable that emits when an icon is successfully loaded
through a HTTP request.

#### Example

```typescript
this.service.iconLoaded.subscribe((ev: IgxIconLoadedEvent) => ...);
```

## Accessors

### defaultFamily

#### Get Signature

> **get** **defaultFamily**(): [`IconFamily`](../interfaces/IconFamily.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.service.ts:94](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.service.ts#L94)

Returns the default font-family.
```typescript
  const defaultFamily = this.iconService.defaultFamily;
```

##### Returns

[`IconFamily`](../interfaces/IconFamily.md)

#### Set Signature

> **set** **defaultFamily**(`family`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.service.ts:104](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.service.ts#L104)

Sets the default font-family.
```typescript
  this.iconService.defaultFamily = 'svg-flags';
```

##### Parameters

###### family

[`IconFamily`](../interfaces/IconFamily.md)

##### Returns

`void`

## Methods

### addIconRef()

> **addIconRef**(`name`, `family`, `icon`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.service.ts:178](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.service.ts#L178)

Adds an icon reference meta for an icon in a meta family.
 Executes only if no icon reference is found.
```typescript
  this.iconService.addIconRef('aruba', 'default', { name: 'aruba', family: 'svg-flags' });
```

#### Parameters

##### name

`string`

##### family

`string`

##### icon

[`IconMeta`](../interfaces/IconMeta.md)

#### Returns

`void`

***

### addSvgIcon()

> **addSvgIcon**(`name`, `url`, `family?`, `stripMeta?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.service.ts:261](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.service.ts#L261)

Adds an SVG image to the cache. SVG source is an url.
```typescript
  this.iconService.addSvgIcon('aruba', '/assets/svg/country_flags/aruba.svg', 'svg-flags');
```

#### Parameters

##### name

`string`

##### url

`string`

##### family?

`string` = `...`

##### stripMeta?

`boolean` = `false`

#### Returns

`void`

***

### addSvgIconFromText()

> **addSvgIconFromText**(`name`, `iconText`, `family?`, `stripMeta?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.service.ts:308](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.service.ts#L308)

Adds an SVG image to the cache. SVG source is its text.
```typescript
  this.iconService.addSvgIconFromText('simple', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <path d="M74 74h54v54H74" /></svg>', 'svg-flags');
```

#### Parameters

##### name

`string`

##### iconText

`string`

##### family?

`string` = `...`

##### stripMeta?

`boolean` = `false`

#### Returns

`void`

***

### familyClassName()

> **familyClassName**(`alias`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.service.ts:131](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.service.ts#L131)

Returns the custom class, if any, associated to a given font-family.
```typescript
  const familyClass = this.iconService.familyClassName('material');
```

#### Parameters

##### alias

`string`

#### Returns

`string`

***

### getIconRef()

> **getIconRef**(`name`, `family`): [`IconReference`](../type-aliases/IconReference.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.service.ts:222](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.service.ts#L222)

Returns the icon reference meta for an icon in a given family.
```typescript
  const iconRef = this.iconService.getIconRef('aruba', 'default');
```

#### Parameters

##### name

`string`

##### family

`string`

#### Returns

[`IconReference`](../type-aliases/IconReference.md)

***

### getSvgIcon()

> **getSvgIcon**(`name`, `family`): `SafeHtml`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.service.ts:352](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.service.ts#L352)

Returns the cached SVG image as string.
```typescript
  const svgIcon = this.iconService.getSvgIcon('aruba', 'svg-flags');
```

#### Parameters

##### name

`string`

##### family

`string`

#### Returns

`SafeHtml`

***

### isSvgIconCached()

> **isSvgIconCached**(`name`, `family`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.service.ts:334](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.service.ts#L334)

Returns whether a given SVG image is present in the cache.
```typescript
  const isSvgCached = this.iconService.isSvgIconCached('aruba', 'svg-flags');
```

#### Parameters

##### name

`string`

##### family

`string`

#### Returns

`boolean`

***

### ~~registerFamilyAlias()~~

> **registerFamilyAlias**(`alias`, `className?`, `type?`): `this`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.service.ts:116](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.service.ts#L116)

Registers a custom class to be applied to IgxIconComponent for a given font-family.
```typescript
  this.iconService.registerFamilyAlias('material', 'material-icons');
```

#### Parameters

##### alias

`string`

##### className?

`string` = `alias`

##### type?

`IconType` = `"font"`

#### Returns

`this`

#### Deprecated

in version 18.1.0. Use `setFamily` instead.

***

### setFamily()

> **setFamily**(`name`, `meta`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.service.ts:167](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.service.ts#L167)

Creates a family to className relationship that is applied to the IgxIconComponent
  whenever that family name is used.
```typescript
  this.iconService.setFamily('material', { className: 'material-icons', type: 'liga' });
```

#### Parameters

##### name

`string`

##### meta

[`FamilyMeta`](../interfaces/FamilyMeta.md)

#### Returns

`void`

***

### setIconRef()

> **setIconRef**(`name`, `family`, `icon`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/icon/src/icon/icon.service.ts:201](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/icon/src/icon/icon.service.ts#L201)

Similar to addIconRef, but always sets the icon reference meta for an icon in a meta family.
```typescript
  this.iconService.setIconRef('aruba', 'default', { name: 'aruba', family: 'svg-flags' });
```

#### Parameters

##### name

`string`

##### family

`string`

##### icon

[`IconMeta`](../interfaces/IconMeta.md)

#### Returns

`void`

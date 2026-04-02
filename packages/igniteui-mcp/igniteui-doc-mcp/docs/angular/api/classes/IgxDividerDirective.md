# Class: IgxDividerDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts:16](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts#L16)

## Constructors

### Constructor

> **new IgxDividerDirective**(): `IgxDividerDirective`

#### Returns

`IgxDividerDirective`

## Properties

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts:29](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts#L29)

Sets/gets the `id` of the divider.
If not set, `id` will have value `"igx-divider-0"`;
```html
<igx-divider id="my-divider"></igx-divider>
```
```typescript
let dividerId =  this.divider.id;
```

***

### middle

> **middle**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts:64](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts#L64)

If set to `true` and an `inset` value has been provided,
the divider will start shrinking from both ends.
```html
<igx-divider [middle]="true"></igx-divider>
```

***

### role

> **role**: `string` = `'separator'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts:37](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts#L37)

Sets the value of `role` attribute.
If not the default value of `separator` will be used.

***

### type

> **type**: `string` = `IgxDividerType.SOLID`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts:48](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts#L48)

Sets the type of the divider. The default value
is `default`. The divider can also be `dashed`;
```html
<igx-divider type="dashed"></igx-divider>
```

***

### vertical

> **vertical**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts:74](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts#L74)

Sets the divider in vertical orientation.
```html
<igx-divider [vertical]="true"></igx-divider>
```

## Accessors

### inset

#### Get Signature

> **get** **inset**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts:97](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts#L97)

Gets the current divider inset in terms of
inset-inline-start representation as applied to the divider.
```typescript
const inset = this.divider.inset;
```

##### Returns

`string`

#### Set Signature

> **set** **inset**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts:86](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts#L86)

Sets the inset of the divider from the side(s).
If the divider attribute `middle` is set to `true`,
it will inset the divider on both sides.
```typescript
this.divider.inset = '32px';
```

##### Parameters

###### value

`string`

##### Returns

`void`

***

### isDashed

#### Get Signature

> **get** **isDashed**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts:51](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts#L51)

##### Returns

`boolean`

***

### isSolid

#### Get Signature

> **get** **isSolid**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts:116](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/divider/divider.directive.ts#L116)

A getter that returns `true` if the type of the divider is `default`;
```typescript
const isDefault = this.divider.isDefault;
```

##### Returns

`boolean`

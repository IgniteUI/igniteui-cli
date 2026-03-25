# Class: IgxNavigationService

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/navigation/nav.service.ts:10](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/navigation/nav.service.ts#L10)

Common service to be injected between components where those implementing common
ToggleView interface can register and toggle directives can call their methods.
TODO: Track currently active? Events?

## Constructors

### Constructor

> **new IgxNavigationService**(): `IgxNavigationService`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/navigation/nav.service.ts:13](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/navigation/nav.service.ts#L13)

#### Returns

`IgxNavigationService`

## Methods

### add()

> **add**(`id`, `navItem`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/navigation/nav.service.ts:17](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/navigation/nav.service.ts#L17)

#### Parameters

##### id

`string`

##### navItem

[`IToggleView`](../interfaces/IToggleView.md)

#### Returns

`void`

***

### close()

> **close**(`id`, ...`args`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/navigation/nav.service.ts:41](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/navigation/nav.service.ts#L41)

#### Parameters

##### id

`string`

##### args

...`any`[]

#### Returns

`any`

***

### get()

> **get**(`id`): [`IToggleView`](../interfaces/IToggleView.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/navigation/nav.service.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/navigation/nav.service.ts#L25)

#### Parameters

##### id

`string`

#### Returns

[`IToggleView`](../interfaces/IToggleView.md)

***

### open()

> **open**(`id`, ...`args`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/navigation/nav.service.ts:36](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/navigation/nav.service.ts#L36)

#### Parameters

##### id

`string`

##### args

...`any`[]

#### Returns

`any`

***

### remove()

> **remove**(`id`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/navigation/nav.service.ts:21](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/navigation/nav.service.ts#L21)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### toggle()

> **toggle**(`id`, ...`args`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/navigation/nav.service.ts:31](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/navigation/nav.service.ts#L31)

#### Parameters

##### id

`string`

##### args

...`any`[]

#### Returns

`any`

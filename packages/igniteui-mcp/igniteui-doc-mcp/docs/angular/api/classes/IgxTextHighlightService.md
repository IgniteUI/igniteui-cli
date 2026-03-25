# Class: IgxTextHighlightService

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.service.ts:7](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.service.ts#L7)

## Constructors

### Constructor

> **new IgxTextHighlightService**(): `IgxTextHighlightService`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.service.ts:11](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.service.ts#L11)

#### Returns

`IgxTextHighlightService`

## Properties

### highlightGroupsMap

> **highlightGroupsMap**: `Map`\<`string`, [`IActiveHighlightInfo`](../interfaces/IActiveHighlightInfo.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.service.ts:8](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.service.ts#L8)

***

### onActiveElementChanged

> **onActiveElementChanged**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.service.ts:9](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.service.ts#L9)

## Methods

### clearActiveHighlight()

> **clearActiveHighlight**(`groupName`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.service.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.service.ts#L25)

Clears any existing highlight.

#### Parameters

##### groupName

`any`

#### Returns

`void`

***

### destroyGroup()

> **destroyGroup**(`groupName`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.service.ts:35](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.service.ts#L35)

Destroys a highlight group.

#### Parameters

##### groupName

`string`

#### Returns

`void`

***

### setActiveHighlight()

> **setActiveHighlight**(`groupName`, `highlight`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.service.ts:17](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.service.ts#L17)

Activates the highlight at a given index.
(if such index exists)

#### Parameters

##### groupName

`string`

##### highlight

[`IActiveHighlightInfo`](../interfaces/IActiveHighlightInfo.md)

#### Returns

`void`

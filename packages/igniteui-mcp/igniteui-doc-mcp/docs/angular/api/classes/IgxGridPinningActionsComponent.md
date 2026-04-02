# Class: IgxGridPinningActionsComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-actions/grid-pinning-actions.component.ts:23](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-actions/grid-pinning-actions.component.ts#L23)

Grid Pinning Actions for the Action Strip

## Igx Parent

IgxActionStripComponent

## Extends

- [`IgxGridActionsBaseDirective`](IgxGridActionsBaseDirective.md)

## Constructors

### Constructor

> **new IgxGridPinningActionsComponent**(): `IgxGridPinningActionsComponent`

#### Returns

`IgxGridPinningActionsComponent`

#### Inherited from

[`IgxGridActionsBaseDirective`](IgxGridActionsBaseDirective.md).[`constructor`](IgxGridActionsBaseDirective.md#constructor)

## Properties

### asMenuItems

> **asMenuItems**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-actions/grid-actions-base.directive.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-actions/grid-actions-base.directive.ts#L34)

Gets/Sets if the action buttons will be rendered as menu items. When in menu, items will be rendered with text label.

#### Example

```html
 <igx-grid-pinning-actions [asMenuItems]='true'></igx-grid-pinning-actions>
 <igx-grid-editing-actions [asMenuItems]='true'></igx-grid-editing-actions>
```

#### Inherited from

[`IgxGridActionsBaseDirective`](IgxGridActionsBaseDirective.md).[`asMenuItems`](IgxGridActionsBaseDirective.md#asmenuitems)

***

### differs

> `protected` **differs**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-actions/grid-actions-base.directive.ts:18](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-actions/grid-actions-base.directive.ts#L18)

#### Inherited from

[`IgxGridActionsBaseDirective`](IgxGridActionsBaseDirective.md).[`differs`](IgxGridActionsBaseDirective.md#differs)

***

### iconService

> `protected` **iconService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-actions/grid-actions-base.directive.ts:17](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-actions/grid-actions-base.directive.ts#L17)

#### Inherited from

[`IgxGridActionsBaseDirective`](IgxGridActionsBaseDirective.md).[`iconService`](IgxGridActionsBaseDirective.md#iconservice)

## Methods

### pin()

> **pin**(`event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-actions/grid-pinning-actions.component.ts:88](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-actions/grid-pinning-actions.component.ts#L88)

Pin the row according to the context.

#### Parameters

##### event?

`any`

#### Returns

`void`

#### Example

```typescript
this.gridPinningActions.pin();
```

***

### scrollToRow()

> **scrollToRow**(`event`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-actions/grid-pinning-actions.component.ts:122](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-actions/grid-pinning-actions.component.ts#L122)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### unpin()

> **unpin**(`event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-actions/grid-pinning-actions.component.ts:109](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-actions/grid-pinning-actions.component.ts#L109)

Unpin the row according to the context.

#### Parameters

##### event?

`any`

#### Returns

`void`

#### Example

```typescript
this.gridPinningActions.unpin();
```

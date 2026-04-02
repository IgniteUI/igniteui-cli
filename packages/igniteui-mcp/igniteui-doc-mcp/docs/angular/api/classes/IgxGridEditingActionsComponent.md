# Class: IgxGridEditingActionsComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-actions/grid-editing-actions.component.ts:23](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-actions/grid-editing-actions.component.ts#L23)

Grid Editing Actions for the Action Strip

## Igx Parent

IgxActionStripComponent

## Extends

- [`IgxGridActionsBaseDirective`](IgxGridActionsBaseDirective.md)

## Constructors

### Constructor

> **new IgxGridEditingActionsComponent**(): `IgxGridEditingActionsComponent`

#### Returns

`IgxGridEditingActionsComponent`

#### Inherited from

[`IgxGridActionsBaseDirective`](IgxGridActionsBaseDirective.md).[`constructor`](IgxGridActionsBaseDirective.md#constructor)

## Properties

### addChild

> **addChild**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-actions/grid-editing-actions.component.ts:98](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-actions/grid-editing-actions.component.ts#L98)

An input to enable/disable action strip child row adding button

***

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

### deleteRow

> **deleteRow**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-actions/grid-editing-actions.component.ts:59](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-actions/grid-editing-actions.component.ts#L59)

An input to enable/disable action strip row deleting button

***

### differs

> `protected` **differs**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-actions/grid-actions-base.directive.ts:18](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-actions/grid-actions-base.directive.ts#L18)

#### Inherited from

[`IgxGridActionsBaseDirective`](IgxGridActionsBaseDirective.md).[`differs`](IgxGridActionsBaseDirective.md#differs)

***

### editRow

> **editRow**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-actions/grid-editing-actions.component.ts:53](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-actions/grid-editing-actions.component.ts#L53)

An input to enable/disable action strip row editing button

***

### iconService

> `protected` **iconService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-actions/grid-actions-base.directive.ts:17](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-actions/grid-actions-base.directive.ts#L17)

#### Inherited from

[`IgxGridActionsBaseDirective`](IgxGridActionsBaseDirective.md).[`iconService`](IgxGridActionsBaseDirective.md#iconservice)

## Accessors

### addRow

#### Get Signature

> **get** **addRow**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-actions/grid-editing-actions.component.ts:41](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-actions/grid-editing-actions.component.ts#L41)

##### Returns

`boolean`

#### Set Signature

> **set** **addRow**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-actions/grid-editing-actions.component.ts:38](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-actions/grid-editing-actions.component.ts#L38)

An input to enable/disable action strip row adding button

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### hasChildren

#### Get Signature

> **get** **hasChildren**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-actions/grid-editing-actions.component.ts:87](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-actions/grid-editing-actions.component.ts#L87)

##### Returns

`boolean`

## Methods

### startEdit()

> **startEdit**(`event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/grid-actions/grid-editing-actions.component.ts:112](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/grid-actions/grid-editing-actions.component.ts#L112)

Enter row or cell edit mode depending the grid rowEditable option

#### Parameters

##### event?

`any`

#### Returns

`void`

#### Example

```typescript
this.gridEditingActions.startEdit();
```

# Class: IgxGridToolbarHidingComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-hiding.component.ts:32](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-hiding.component.ts#L32)

Provides a pre-configured column hiding component for the grid.

## Igx Module

IgxGridToolbarModule

## Igx Parent

IgxGridToolbarComponent, IgxGridToolbarActionsComponent

## Example

```html
 <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
```

## Extends

- `BaseToolbarColumnActionsDirective`

## Constructors

### Constructor

> **new IgxGridToolbarHidingComponent**(): `IgxGridToolbarHidingComponent`

#### Returns

`IgxGridToolbarHidingComponent`

#### Inherited from

`BaseToolbarColumnActionsDirective.constructor`

## Properties

### buttonText

> **buttonText**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:189](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L189)

#### Inherited from

`BaseToolbarColumnActionsDirective.buttonText`

***

### checkAllText

> **checkAllText**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:183](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L183)

#### Inherited from

`BaseToolbarColumnActionsDirective.checkAllText`

***

### closed

> **closed**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:79](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L79)

Emits an event after the toggle container is closed.

#### Inherited from

`BaseToolbarColumnActionsDirective.closed`

***

### closing

> **closing**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:73](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L73)

Emits an event before the toggle container is closed.

#### Inherited from

`BaseToolbarColumnActionsDirective.closing`

***

### columnActionsUI

> `protected` **columnActionsUI**: [`IgxColumnActionsComponent`](IgxColumnActionsComponent.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:191](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L191)

#### Inherited from

`BaseToolbarColumnActionsDirective.columnActionsUI`

***

### columnDisplayOrder

> **columnDisplayOrder**: [`ColumnDisplayOrder`](../type-aliases/ColumnDisplayOrder.md) = `ColumnDisplayOrder.DisplayOrder`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:174](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L174)

#### Inherited from

`BaseToolbarColumnActionsDirective.columnDisplayOrder`

***

### columnListHeight

> **columnListHeight**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:29](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L29)

Sets the height of the column list in the dropdown.

#### Inherited from

`BaseToolbarColumnActionsDirective.columnListHeight`

***

### columnsAreaMaxHeight

> **columnsAreaMaxHeight**: `string` = `'100%'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:177](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L177)

#### Inherited from

[`IgxGridToolbarPinningComponent`](IgxGridToolbarPinningComponent.md).[`columnsAreaMaxHeight`](IgxGridToolbarPinningComponent.md#columnsareamaxheight)

***

### columnToggle

> **columnToggle**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:85](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L85)

Emits when after a column's checked state is changed

#### Inherited from

`BaseToolbarColumnActionsDirective.columnToggle`

***

### filterCriteria

> **filterCriteria**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:171](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L171)

#### Inherited from

[`IgxGridToolbarPinningComponent`](IgxGridToolbarPinningComponent.md).[`filterCriteria`](IgxGridToolbarPinningComponent.md#filtercriteria)

***

### hideFilter

> **hideFilter**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:168](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L168)

#### Inherited from

[`IgxGridToolbarPinningComponent`](IgxGridToolbarPinningComponent.md).[`hideFilter`](IgxGridToolbarPinningComponent.md#hidefilter)

***

### indentetion

> **indentetion**: `number` = `30`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:186](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L186)

#### Inherited from

[`IgxGridToolbarPinningComponent`](IgxGridToolbarPinningComponent.md).[`indentetion`](IgxGridToolbarPinningComponent.md#indentetion)

***

### opened

> **opened**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:67](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L67)

Emits an event after the toggle container is opened.

#### Inherited from

`BaseToolbarColumnActionsDirective.opened`

***

### opening

> **opening**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:61](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L61)

Emits an event before the toggle container is opened.

#### Inherited from

`BaseToolbarColumnActionsDirective.opening`

***

### prompt

> **prompt**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:41](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L41)

The placeholder text for the search input.

#### Inherited from

`BaseToolbarColumnActionsDirective.prompt`

***

### title

> **title**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:35](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L35)

Title text for the column action component

#### Inherited from

`BaseToolbarColumnActionsDirective.title`

***

### toolbar

> `protected` **toolbar**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:23](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L23)

#### Inherited from

`BaseToolbarColumnActionsDirective.toolbar`

***

### uncheckAllText

> **uncheckAllText**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:180](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L180)

#### Inherited from

`BaseToolbarColumnActionsDirective.uncheckAllText`

## Accessors

### overlaySettings

#### Get Signature

> **get** **overlaySettings**(): [`OverlaySettings`](../interfaces/OverlaySettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:54](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L54)

Returns overlay settings

##### Returns

[`OverlaySettings`](../interfaces/OverlaySettings.md)

#### Set Signature

> **set** **overlaySettings**(`overlaySettings`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:47](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L47)

Sets overlay settings

##### Parameters

###### overlaySettings

[`OverlaySettings`](../interfaces/OverlaySettings.md)

##### Returns

`void`

#### Inherited from

`BaseToolbarColumnActionsDirective.overlaySettings`

## Methods

### checkAll()

> **checkAll**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:193](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L193)

#### Returns

`void`

#### Inherited from

`BaseToolbarColumnActionsDirective.checkAll`

***

### uncheckAll()

> **uncheckAll**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:197](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L197)

#### Returns

`void`

#### Inherited from

`BaseToolbarColumnActionsDirective.uncheckAll`

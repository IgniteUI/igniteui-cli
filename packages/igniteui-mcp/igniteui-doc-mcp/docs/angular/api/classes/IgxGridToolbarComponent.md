# Class: IgxGridToolbarComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.component.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.component.ts#L34)

Provides a context-aware container component for UI operations for the grid components.

## Igx Module

IgxGridToolbarModule

## Igx Parent

IgxGridComponent, IgxTreeGridComponent, IgxHierarchicalGridComponent, IgxPivotGridComponent

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxGridToolbarComponent**(): `IgxGridToolbarComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.component.ts:94](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.component.ts#L94)

#### Returns

`IgxGridToolbarComponent`

## Properties

### \_grid

> `protected` **\_grid**: [`GridType`](../interfaces/GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.component.ts:91](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.component.ts#L91)

***

### showProgress

> **showProgress**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.component.ts:48](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.component.ts#L48)

When enabled, shows the indeterminate progress bar.

#### Remarks

By default this will be toggled, when the default exporter component is present
and an exporting is in progress.

***

### sub

> `protected` **sub**: `Subscription`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.component.ts:92](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.component.ts#L92)

## Accessors

### grid

#### Get Signature

> **get** **grid**(): [`GridType`](../interfaces/GridType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.component.ts:61](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.component.ts#L61)

Gets/sets the grid component for the toolbar component.

##### Deprecated

since version 17.1.0. No longer required to be set for the Hierarchical Grid child grid template

##### Remarks

Usually you should not set this property in the context of the default grid/tree grid.
The only grids that demands this to be set are the hierarchical child grids. For additional
information check the toolbar topic.

##### Returns

[`GridType`](../interfaces/GridType.md)

#### Set Signature

> **set** **grid**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.component.ts:68](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.component.ts#L68)

##### Parameters

###### value

[`GridType`](../interfaces/GridType.md)

##### Returns

`void`

***

### nativeElement

#### Get Signature

> **get** **nativeElement**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.component.ts:73](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.component.ts#L73)

Returns the native DOM element of the toolbar component

##### Returns

`any`

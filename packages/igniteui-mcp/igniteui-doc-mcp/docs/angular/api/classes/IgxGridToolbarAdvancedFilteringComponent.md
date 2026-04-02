# Class: IgxGridToolbarAdvancedFilteringComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-advanced-filtering.component.ts:31](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-advanced-filtering.component.ts#L31)

Provides a pre-configured button to open the advanced filtering dialog of the grid.

## Igx Module

IgxGridToolbarModule

## Igx Parent

IgxGridToolbarComponent, IgxGridToolbarActionsComponent

## Example

```html
<igx-grid-toolbar-advanced-filtering></igx-grid-toolbar-advanced-filtering>
<igx-grid-toolbar-advanced-filtering>Custom text</igx-grid-toolbar-advanced-filtering>
```

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxGridToolbarAdvancedFilteringComponent**(): `IgxGridToolbarAdvancedFilteringComponent`

#### Returns

`IgxGridToolbarAdvancedFilteringComponent`

## Properties

### numberOfColumns

> `protected` **numberOfColumns**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-advanced-filtering.component.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-advanced-filtering.component.ts#L34)

***

### overlaySettings

> **overlaySettings**: [`OverlaySettings`](../interfaces/OverlaySettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-advanced-filtering.component.ts:44](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-advanced-filtering.component.ts#L44)

## Methods

### extractUniqueFieldNamesFromFilterTree()

> `protected` **extractUniqueFieldNamesFromFilterTree**(`filteringTree?`): `string`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-advanced-filtering.component.ts:59](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-advanced-filtering.component.ts#L59)

#### Parameters

##### filteringTree?

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

#### Returns

`string`[]

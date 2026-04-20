---
title: Code Splitting and Multiple Entry Points | Ignite UI for Angular | Infragistics
_description: Learn how to optimize your Angular application bundle size using Ignite UI for Angular's multiple entry points for better tree-shaking and code splitting.
_keywords: ignite ui for angular, code splitting, entry points, tree-shaking, lazy loading, bundle optimization
_tocName: Multiple Entry Points
---

# Code Splitting and Multiple Entry Points

Starting with version 21.0.0, Ignite UI for Angular supports multiple entry points, enabling better tree-shaking, code splitting, and lazy loading of components. This architectural improvement allows you to import only the components and utilities you need, significantly reducing your application's bundle size.

## Overview

Previously, all Ignite UI for Angular components were exported from a single entry point (`igniteui-angular`). While convenient, this approach bundled all components together, making it difficult for build tools to eliminate unused code effectively.

With the new multiple entry points architecture, each component or group of related components has its own dedicated entry point. This allows modern bundlers to:

- **Enable code splitting** - Each component can be lazy-loaded separately on demand
- **Reduce initial bundle size** - Import only what your application actually needs in the initial load
- **Improve build performance** - Smaller dependency graphs lead to faster builds

## Benefits

✅ **Code Splitting** - Each component is lazy-loadable  
✅ **Smaller Initial Bundles** - Import only what you need  
✅ **Better Performance** - Reduced individual bundle sizes mean faster load times  
✅ **Clean Architecture** - No circular dependencies  
✅ **Full Backwards Compatibility** - Main entry point still works  
✅ **Granular Grid Imports** - Load only the specific grid type you need

## Entry Points Structure

### Core Entry Points

- `igniteui-angular/core` - Core utilities, services, and base types (e.g., `IgxOverlayService`)
- `igniteui-angular/directives` - Common directives

### Component Entry Points

Each component has its own entry point following the pattern `igniteui-angular/<component-name>`:

- `igniteui-angular/accordion`
- `igniteui-angular/action-strip`
- `igniteui-angular/avatar`
- `igniteui-angular/badge`
- `igniteui-angular/banner`
- `igniteui-angular/bottom-nav`
- `igniteui-angular/button`
- `igniteui-angular/button-group`
- `igniteui-angular/calendar`
- `igniteui-angular/card`
- `igniteui-angular/carousel`
- `igniteui-angular/chat`
- `igniteui-angular/checkbox`
- `igniteui-angular/chips`
- `igniteui-angular/combo`
- `igniteui-angular/date-picker`
- `igniteui-angular/date-range-picker`
- `igniteui-angular/dialog`
- `igniteui-angular/drop-down`
- `igniteui-angular/expansion-panel`
- `igniteui-angular/icon`
- `igniteui-angular/input-group`
- `igniteui-angular/list`
- `igniteui-angular/navbar`
- `igniteui-angular/navigation-drawer`
- `igniteui-angular/paginator`
- `igniteui-angular/progressbar`
- `igniteui-angular/query-builder`
- `igniteui-angular/radio`
- `igniteui-angular/select`
- `igniteui-angular/simple-combo`
- `igniteui-angular/slider`
- `igniteui-angular/snackbar`
- `igniteui-angular/splitter`
- `igniteui-angular/stepper`
- `igniteui-angular/switch`
- `igniteui-angular/tabs`
- `igniteui-angular/time-picker`
- `igniteui-angular/toast`
- `igniteui-angular/tree`

### Grid Entry Points

Grid components are split into granular entry points for optimal code splitting:

- `igniteui-angular/grids/core` - Shared grid infrastructure (columns, toolbar, filtering, sorting, pipes, and utilities)
- `igniteui-angular/grids/grid` - Data Grid component (`IgxGridComponent`)
- `igniteui-angular/grids/tree-grid` - Tree Grid component (`IgxTreeGridComponent`)
- `igniteui-angular/grids/hierarchical-grid` - Hierarchical Grid component (`IgxHierarchicalGridComponent`, `IgxRowIslandComponent`)
- `igniteui-angular/grids/pivot-grid` - Pivot Grid component (`IgxPivotGridComponent`, `IgxPivotDataSelectorComponent`)

## Migration

### Automatic Migration

The recommended approach is to migrate your imports automatically during the `ng update` process. When updating to version 21.0.0, you'll be prompted to migrate imports:

```cmd
ng update igniteui-angular
```

When prompted, choose **"Yes"** to migrate imports to new entry points for optimal bundle sizes.

Alternatively, you can run the migration separately:

```cmd
ng update igniteui-angular --migrate-only --from=20.1.0 --to=21.0.0
```

### Manual Migration

If you prefer to migrate manually or need to update specific imports, follow this pattern:

#### Before (v20.x and earlier)

```typescript
import { 
  IgxGridComponent,
  IgxTreeGridComponent,
  IgxInputDirective,
  IgxBottomNavComponent,
  Direction, 
  GridBaseAPIService,
  IgxOverlayService,
  IFilteringExpression
} from 'igniteui-angular';
```

#### After (v21.0.0)

```typescript
import { IgxOverlayService, IFilteringExpression } from 'igniteui-angular/core';
import { GridBaseAPIService } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxInputDirective } from 'igniteui-angular/input-group';
import { IgxBottomNavComponent } from 'igniteui-angular/bottom-nav';
import { CarouselAnimationDirection } from 'igniteui-angular/carousel';
```

### Type Renames

To avoid naming conflicts with the new architecture, some types have been renamed:

- `Direction` → `CarouselAnimationDirection` (in the carousel entry point)

```typescript
// Before
import { Direction } from 'igniteui-angular';

// After
import { CarouselAnimationDirection } from 'igniteui-angular/carousel';
```

## Backwards Compatibility

The main entry point (`igniteui-angular`) maintains **full backwards compatibility** by re-exporting all granular entry points. You can continue using imports from the main entry point without any changes:

```typescript
// This still works and will continue to work
import { IgxGridComponent, IgxButtonDirective } from 'igniteui-angular';
```

However, **we strongly recommend migrating to the new entry points** to take advantage of better tree-shaking and smaller bundle sizes.

## Usage Examples

### Example 1: Simple Component Usage

If you only need a button and an input, import just those entry points:

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { 
  IgxInputGroupComponent, 
  IgxInputDirective, 
  IgxLabelDirective 
} from 'igniteui-angular/input-group';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    IgxButtonDirective,
    IgxInputGroupComponent,
    IgxInputDirective,
    IgxLabelDirective
  ],
  template: `
    <igx-input-group>
      <label igxLabel>Name</label>
      <input igxInput type="text" />
    </igx-input-group>
    <button igxButton="contained">Submit</button>
  `
})
export class FormComponent {}
```

### Example 2: Grid with Specific Features

Import only the grid type you need along with core grid utilities:

```typescript
import { Component } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxGridToolbarComponent } from 'igniteui-angular/grids/core';

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [IgxGridComponent, IgxGridToolbarComponent],
  template: `
    <igx-grid [data]="data" [autoGenerate]="true">
      <igx-grid-toolbar></igx-grid-toolbar>
    </igx-grid>
  `
})
export class DataGridComponent {
  public data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];
}
```

### Example 3: Lazy Loading Components

With the new entry points, you can easily lazy-load components:

```typescript
// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'grid',
    loadComponent: () => 
      import('./features/grid/grid.component')
        .then(m => m.GridComponent)
  },
  {
    path: 'tree-grid',
    loadComponent: () => 
      import('./features/tree-grid/tree-grid.component')
        .then(m => m.TreeGridComponent)
  }
];
```

```typescript
// features/grid/grid.component.ts
import { Component } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [IgxGridComponent],
  template: `<igx-grid [data]="data" [autoGenerate]="true"></igx-grid>`
})
export class GridComponent {
  public data = [];
}
```

## Migration Options Summary

You have three options when updating to v21.0.0:

### Option 1: Migrate During Update (Recommended)

```cmd
ng update igniteui-angular
```

When prompted, choose **"Yes"** to migrate imports.

### Option 2: Keep Using Main Entry Point

```cmd
ng update igniteui-angular
```

When prompted, choose **"No"** to continue using the main entry point. The library remains fully backwards compatible, but you won't benefit from optimal bundle sizes.

### Option 3: Migrate Later

Update without migrating (choose "No" when prompted):

```cmd
ng update igniteui-angular
```

Migrate manually later:

```cmd
ng update igniteui-angular --migrate-only --from=20.1.0 --to=21.0.0
```

## Best Practices

1. **Use specific entry points** - Import from the most specific entry point possible (e.g., `igniteui-angular/grids/grid` instead of `igniteui-angular`)
2. **Leverage lazy loading** - Combine entry points with Angular's lazy loading for even better performance
3. **Import only what you need** - Don't import the entire `core` entry point if you only need one service
4. **Check bundle analyzer** - Use tools like [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) to verify your bundle size improvements
5. **Update regularly** - Keep your Ignite UI for Angular version up to date to benefit from the latest optimizations

## Additional Resources

- [Angular Package Format - Entry Points and Code Splitting](https://angular.io/guide/angular-package-format#entrypoints-and-code-splitting)
- [Ignite UI for Angular Update Guide](update-guide.md)
- [Ignite UI for Angular CHANGELOG](https://github.com/IgniteUI/igniteui-angular/blob/master/CHANGELOG.md)
- [Ignite UI for Angular GitHub Repository](https://github.com/IgniteUI/igniteui-angular)

## API References

For detailed information about specific components and their APIs, refer to the component documentation:

- [Grid](../grid/grid.md)
- [Tree Grid](../treegrid/tree-grid.md)
- [Hierarchical Grid](../hierarchicalgrid/hierarchical-grid.md)
- [Pivot Grid](../pivotGrid/pivot-grid.md)
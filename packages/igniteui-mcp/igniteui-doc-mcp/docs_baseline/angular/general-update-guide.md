---
title: Update Guide | Ignite UI for Angular | Infragistics
_description: Check out this article on updating how to update to a newer version of the Ignite UI for Angular library.
_keywords: ignite ui for angular, update, npm package, material components
_tocName: Update guide
---

<!-- markdownlint-disable MD024 -->

# Update Guide

In the Ignite UI for Angular [versioning](https://github.com/IgniteUI/igniteui-angular/wiki/Ignite-UI-for-Angular-versioning) the first number always matches the major version of Angular the code supports and the second is dedicated for major version releases. Breaking changes may be introduced between major releases.
A comprehensive list of changes for each release of **Ignite UI for Angular** can be found in the product [CHANGELOG](https://github.com/IgniteUI/igniteui-angular/blob/master/CHANGELOG.md)

The Ignite UI for Angular package also supports automatic version migration through `ng update` schematics. Those will attempt to migrate all possible breaking changes (renamed selectors, classes and @Input/Output properties), however there might be still changes that cannot be migrated. Those are usually related to typescript application logic and will be described [additionally below](#additional-manual-changes).

First run the [**`ng update`**](https://angular.io/cli/update) command which will analyze your application and available updates for its packages.

```cmd
ng update
```

To update the **Ignite UI for Angular** licensed package run the following command:

```cmd
ng update @infragistics/igniteui-angular
```

To update the **Ignite UI for Angular** free package run the following command:

```cmd
ng update igniteui-angular
```

When you update `@infragistics/igniteui-angular` or `igniteui-angular` - it's recommended to update `@angular/core`, `@angular/cli` and `igniteui-cli` packages to their matching versions.
To update the **Ignite UI CLI** package run the following command:

```cmd
ng update igniteui-cli
```

To update the **Angular Core** package run the following command:

```cmd
ng update @angular/core
```

To update the **Angular CLI** package use the following command:

```cmd
ng update @angular/cli
```

>[!NOTE]
> If the `ng update` command fails because of package dependency mismatches, then revert the update, delete the `node_modules` folder and rerun the update with `--force` flag.

## Additional manual changes


Unfortunately not all changes can be automatically updated. Changes below are split into sections as they occur in the versions, so if any updates are required you should start from your current version and apply further updates from bottom to top.

For example: if you are updating from version 6.2.4 to 7.1.0 you'd start from the "From 6.x .." section apply those changes and work your way up:

## From 21.0.x to 21.1.x

Version 21.1.0 ships with a new `tokens` mixin that can be used in place of the now deprecated `css-vars` mixin of our Sass theming framework. On the surface, this is a cosmetic change, however, the new `tokens` mixin produces universal global component theme tokens that work across all of our Ignite UI frameworks. The `css-vars` mixin is now deprecated and will be removed in a future version, so we recommend switching to the new `tokens` mixin as soon as possible.

The `tokens` mixin generates CSS variable tokens for components in `global` or `scoped` modes, with a universal `--ig-*` fallback chain and proper rewriting of local token references.

**Global mode** (default) — emits universal `--ig-{component}-{property}` tokens. Local `var()` references are rewritten to their global equivalents so derived values (e.g., `adaptive-contrast`) resolve correctly at any scope. Sizable expressions are skipped; pass concrete values instead.

```scss
// Input:
@include tokens(avatar-theme($background: red));

// Output:
:root {
  --ig-avatar-background: red;
  /* ... remaining avatar properties ... */
}
```

**Scoped mode** — emits component-scoped variables (`--{property}`) with a fallback chain: configured prefix (`--igx-*`) -> universal (`--ig-*`) -> schema default. When called from the stylesheet root, the theme's `selector` is used to create the rule. When called inside a selector, both the current selector and the component selector receive the variables. Essentially, this yields the same result as the now deprecated `css-vars` mixin.

```scss
// Input (from root):
@include tokens(avatar-theme($background: red), $mode: 'scoped');

// Output:
igx-avatar {
  --background: var(--igx-avatar-background, var(--ig-avatar-background, red));
  /* ... remaining avatar properties ... */
}
```

```scss
// Input (from within a selector):
.my-theme {
  @include tokens(avatar-theme($background: red), $mode: 'scoped');
}

// Output:
.my-theme,
.my-theme igx-avatar {
  --background: var(--igx-avatar-background, var(--ig-avatar-background, red));
  /* ... */
}
```

> [!NOTE]
> In scoped mode, the `selector` property in the produced theme map is required to determine the component selector for proper variable scoping. If the mixin is called from the stylesheet root, the generated rule will use the theme's internal `selector` value. If called from within a selector, both that selector and the component selector will receive the variables.

```scss
// Global override:
:root {
  @include tokens(avatar-theme($background: orange));
}
// Result: --ig-avatar-background: orange;

// Scoped consumption (no explicit override):
@include tokens(avatar-theme($schema: $schema), $mode: 'scoped');
// Result: --background resolves through var(--igx-avatar-background, var(--ig-avatar-background, #000))
//         and picks up the global orange value from --ig-avatar-background.
```

> [!IMPORTANT]
> **Global overrides flow into scoped mode.** Because scoped variables fall back to `--ig-*` tokens, setting a global token at `:root` will propagate to all scoped instances:

## From 20.x to 21.0.x

### Multiple Entry Points Support

Version 21.0.0 introduces **multiple entry points** for better tree-shaking and code splitting. The main entry point (`igniteui-angular`) remains fully backwards compatible, but migrating to granular entry points is recommended for optimal bundle sizes.

**Key changes:**
- Components organized into dedicated entry points (e.g., `igniteui-angular/grids/grid`, `igniteui-angular/button`)
- Some components relocated (input directives, autocomplete, radio group)
- Type rename: `Direction` → `CarouselAnimationDirection`

**Migration:**

When updating, you'll be prompted to migrate imports automatically:

```cmd
ng update igniteui-angular
```

Choose **"Yes"** when prompted, or migrate later with:

```cmd
ng update igniteui-angular --migrate-only --from=20.1.0 --to=21.0.0
```

For complete details on entry points, migration options, breaking changes, and usage examples, see the [Code Splitting and Multiple Entry Points guide](code-splitting-and-multiple-entry-points.md).

### Dependency Injection Refactor

All internal dependency injection now uses the `inject()` API. This generally doesn't affect application code, but if you extend Ignite UI components or services, you may need to update your constructors to use `inject()` instead of constructor parameters.

## From 17.2.x to 18.0.x

### Breaking changes

- In version 18.0.x the deprecated `displayDensity` property is removed in favor of the custom CSS property `--ig-size`. For further reference please see the update guide [from 16.0.x to 16.1.x](#from-160x-to-161x).

### General

- `IgxPivotGrid`

### Breaking changes

- The property `showPivotConfigurationUI` of pivot grid is changed and extended to `pivotUI`.

```html
// version 17.2.x
<igx-pivot-grid [data]="data" [pivotConfiguration]="pivotConfig" [showPivotConfigurationUI]="false">
</igx-pivot-grid>

// version 18.0.x
<igx-pivot-grid [data]="data" [pivotConfiguration]="pivotConfig" [pivotUI]="{ showConfiguration: false }">
</igx-pivot-grid>
```

## From 17.0.x to 17.1.x

### General

- `IgxGrid`, `IgxTreeGrid`, `IgxHierarchicalGrid`
  - **Breaking Changes**
    - `rowAdd` and `rowDelete` events now emit event argument of type `IRowDataCancelableEventArgs` instead of `IGridEditEventArgs`. The two interfaces are still compatible, however redundant for these events properties `cellID`, `newValue`, `oldValue`, `isAddRow` are deprecated in `IRowDataCancelableEventArgs` and will be removed in a future version. Switching to the correct new interfaces should reveal any deprecated use that can be safely removed.
  - **Deprecations**
    - `rowID` property has been deprecated in the following interfaces: `IGridEditDoneEventArgs`, `IPathSegment`, `IRowToggleEventArgs`, `IPinRowEventArgs`, `IgxAddRowParent` and will be removed in a future version. Use `rowKey` instead.
    - `primaryKey` property has been deprecated in the following interfaces: `IRowDataEventArgs`, `IGridEditDoneEventArgs`. Use `rowKey` instead.
    - `data` property has been deprecated in the following interfaces: `IRowDataEventArgs`. Use `rowData` instead.

### Breaking changes

- In version 17.1.x the `icon` type of the `igxButton` directive has been changed to the `igxIconButton` directive of type `flat`. Automatic migrations are available and will be applied on `ng update`. However, some of the `igxButton` input properties that could previously be used with the `icon` type buttons, cannot be applied to the newly created `igxIconButton`. If you have used the `igxButtonColor` or the `igxButtonBackground` properties with a button of type `icon`, you should update it as follows:

```html
// version 17.0.x
<button igxButton="icon" [igxButtonBackground]="'red'">
    <igx-icon fontSet="material">search</igx-icon>
</button>

// version 17.1.x
<button igxIconButton="flat" [style.background]="'red'">
    <igx-icon fontSet="material">search</igx-icon>
</button>
```

**NOTE**: Users have to manually add the `IgxIconButtonDirective` into their imports:

```typescript
import { IgxIconButtonDirective } from 'igniteui-angular';

@Component({
    ...
    imports: [IgxIconButtonDirective]
})
```

## From 16.1.x to 17.0.x

### General

- In 17.0 Angular have removed the `@nguniversal/*` packages. If the project uses these packages a standard `ng update` call will cause an error in the `igniteui-angular` migrations due to improperly modified `package-lock.json` - more details can be found in [issue #13668](https://github.com/IgniteUI/igniteui-angular/issues/13668). To update to `17.0.x` one of the following additional steps needs to be taken:
  - Delete the `package-lock.json` file before running `ng update`
  - Run `npm dedupe --legacy-peer-deps` before running `ng update igniteui-angular`

**Breaking change**

- In `IgxCombo`'s `selectionChanging` event arguments type `IComboSelectionChangingEventArgs` has these changes:
  - properties `newSelection` and `oldSelection` have been renamed to `newValue` and `oldValue` respectively to better reflect their function. Just like Combo's `value`, those will emit either the specified property values or full data items depending on whether `valueKey` is set or not. Automatic migrations are available and will be applied on `ng update`.
  - two new properties `newSelection` and `oldSelection` are exposed in place of the old ones that are no longer affected by `valueKey` and consistently emit items from Combo's `data`.
  - properties `added` and `removed` now always contain data items, regardless of `valueKey` being set. This aligns them with the updated `newSelection` and `oldSelection` properties.

If your code in `selectionChanging` event handler was depending on reading `valueKeys` from the event argument, update it as follows:

```typescript
  // version 16.1.x
  public handleSelectionChanging(e: IComboSelectionChangingEventArgs): void {
    this.addedItems = e.added;
    this.removedItems = e.removed;
  }

  // version 17.0.x
  public handleSelectionChanging(e: IComboSelectionChangingEventArgs): void {
    this.addedItems = e.added.map(i => {
       return i[e.owner?.valueKey]
    });
    this.removedItems = e.removed.map(i => {
       return i[e.owner?.valueKey]
    });
  }
```

- `getCurrentResourceStrings` has been removed. Use the specific component string imports instead.
  - E.g. EN strings come from `igniteui-angular`: `import { GridResourceStringsEN } from 'igniteui-angular';`
  - E.g. DE or other language strings come from `igniteui-angular-i18n`: `import { GridResourceStringsDE } from 'igniteui-angular-i18n';`

    Usage examples can be found in the updated [Localization (i18n)](localization.md) doc.

## From 16.0.x to 16.1.x

### General

#### **Non-breaking changes**

- We are moving away from the `DisplayDensityToken` injection token as a way to set the size of the components in favor of a simpler, more robust way - using CSS custom properties. For that reason the `DisplayDensityToken` injection token is now deprecated. This ripples across all components that expose the `displayDensity` input property. The token and input properties will be removed in 17.0.0. We urge you to do the following:

Remove all declarations where the `DisplayDensityToken` is provided:

```typescript
// *.component.ts
// remove the provider declaration for `DisplayDensityToken`
providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: DisplayDensity.compact } }],
```

Remove all bindings or programmatic assignments to the `displayDensity` input property:

```html
<!-- Remove `[displayDensity]="'compact'"` -->
<igx-grid [displayDensity]="'compact'">...</igx-grid>
```

Instead, use the custom CSS property `--ig-size` to achieve the same result as with `displayDensity`:

```css
/* 
Add --ig-size to a component or global file.
Available values are:
  - compact: --ig-size-small
  - cosy: --ig-size-medium
  - comfortable: --ig-size-large
*/
igx-grid {
    --ig-size: var(--ig-size-small);
}
```

## From 15.1.x to 16.0.x

- The upgrade to Angular 16 comes with changes in how `NgModules` operate under the hood. Previously, adding a module that internally depends on another would make the declarations of both available in your app. This behavior was not intended and Angular 16 changes it. If your app was depending on this behavior, e.g. you were only importing a module containing many internal dependencies like `IgxGridModule` and using components coming with those, you will need to manually add the modules for each component your app uses separately.

- **Breaking changes**
- In 16.0.x, all grid properties, related to paging, are removed. Paging behavior is now configured and controlled entirely through the `IgxPaginatorComponent`.
To enable paging in the grid, initialize the `IgxPaginatorComponent` in the grid and set related input properties and attach to event handlers to the paginator itself:

```html
<igx-grid ...>
    <igx-paginator #paginator [totalRecords]="totalRecords" [perPage]="25" (pageChange)="pageChange($event) (perPageChange)="perPageChange($event)">
    </igx-paginator>
<igx-grid>
```

```typescript
@ViewChild('grid', { static: true }) private grid: IgxGridComponent;
@ViewChild('paginator', { static: true }) private paginator: IgxPaginatorComponent;

// prior version 16.0.x
public onButtonClick(event) {
    this.grid.nextPage();
    this.grid.previousPage();
    this.grid.paginate(0);
}

// from version 16.0.x
public onButtonClick(event) {
    this.paginator.nextPage();
    this.paginator.previousPage();
    this.paginator.paginate(0);
}
```

- In 16.0.x, grid method `getCellByColumnVisibleIndex(rowIndex: number, index: number)` is removed. Instead, use: `getCellByKey(rowSelector: any, columnField: string)` or `getCellByColumn(rowIndex: number, columnField: string)`. Example:

```typescript
 // prior version 16.0.x
 const cell = grid.getCellByColumnVisibleIndex(rowIndex, columnIndex);

 // after version 16.0.x
 const rowKey = grid.getRowByIndex(rowIndex).key;
 const columnField = grid.getColumnByVisibleIndex(columnIndex).field;
 const cell = grid.getCellByKey(rowKey, columnField);
 const cell = grid.getCellByColumn(rowIndex, columnField);
```


## From 15.0.x to 15.1.x

- **Breaking change**
- `rowSelectionChanging` arguments type is changed. Now the `oldSelection`, `newSelection`, `added` and `removed` collections, part of the `IRowSelectionEventArgs` interface, no longer consist of the row keys of the selected elements (when the grid has set a primaryKey), but now in any case the row data is emitted. When the grid is working with remote data and a `primaryKey` is set - for the selected rows that are not currently part of the grid view, a partial row data object will be emitted.

If your code in `rowSelectionChanging` event handler was depending on reading primaryKeys from the event argument, update it as follows:

```typescript
  // prior version 15.1.x
  public handleRowSelection(e: IRowSelectionEventArgs): void {
    this.selectedRows = e.newSelection;
  }

  // after version 15.1.x
  public handleRowSelection(e: IRowSelectionEventArgs): void {
    this.selectedRows = e.newSelection.map(rec => {
       return rec[e.owner?.primaryKey]
    });
  }
```

- **Behavioral Change**
When selected row is deleted from the grid component, `rowSelectionChanging` event is not emitted.

- **Visual Change**
- In 15.1 the sizes of the input components have increased. This is more noticeable when using the Material theme. We do this to match Material spec. If your application is negatively affected by the change, you can use the displayDensity input and set it to a more dense setting, e.g. from comfortable to cozy or from cozy to compact.

  **Example**

```html
    <igx-input-group displayDensity="cosy">
        ...
    </igx-input-group>

    <igx-select displayDensity="cosy">
        ...
    </igx-select>

    <igx-combo displayDensity="cosy">
        
    </igx-combo>

    <igx-simple-combo displayDensity="cosy">
        ...
    </igx-simple-combo>
```

- In 15.1 select and combo component now have background around the toggle icon. You can change the background and the icon color using scss or css.

    **Example**

    ```scss
    $my-select: select-theme(
        $toggle-button-background: red,
        $toggle-button-foreground: #fff,
    );

    $my-combo: combo-theme(
        $toggle-button-background: red,
        $toggle-button-foreground: #fff,
    );

    @include css-vars($my-select);
    @include css-vars($my-combo);
    ```

    **Example**

    ```css
    .igx-select {
        --igx-select-toggle-button-background: red;
        --igx-select-toggle-button-foreground: #fff;
    }
    
    .igx-combo {
        --igx-combo-toggle-button-background: red;
        --igx-combo-toggle-button-foreground: #fff;
    }
    ```

## From 14.2.x to 15.0.x

### General

- `igxGrid`, `igxHierarchicalGrid`, `igxTreeGrid`
  - Parameters in grid templates now have types for their context. This can also cause issues if the app is in strict template mode and uses the wrong type. References to the template that may require conversion:
    - `IgxColumnComponent` - [`ColumnType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/columntype.html) (for example the column parameter in `igxFilterCellTemplate`)
    - `IgxGridCell` - [`CellType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/celltype.html) (for example the cell parameter in `igxCell` template)
- Ignite UI for Angular has a dependency on [igniteui-theming](https://github.com/IgniteUI/igniteui-theming). Add the following preprocessor configuration in your `angular.json` file.

    ```json

 "build": {
   "options": {
     "stylePreprocessorOptions": {
  "includePaths": ["node_modules"]
     }
   }
 }
    ```

- **Breaking Change** - All global CSS variables for theme configuration, colors, elevations, and typography have changed the prefix from `--igx` to `--ig`. This change doesn't affect global component variables;

    **Example**:

    In 14.2.x:

    ```css
    :root {
        --igx-typography: 'Titillium Web', sans-serif; 
    }
    ```

    In 15.0.x this becomes:

    ```css
    :root {
        --ig-typography: 'Titillium Web', sans-serif; 
    }
    ```

### Themes

- **Breaking Change** - The `grays` input argument has been renamed to `gray`.<br />
Here's how that will affect existing code:

    In 14.2.x:

    ```scss
    $my-palette: palette(
        $primary: #09f,
        $secondary: #e41c77,
        $grays: #000
    );

    .my-class {
        background: color($color: 'grays', $variant: 300);
        color: contrast-color($color: 'grays', $variant: 300);
        border-color: hsl(var(--igx-grays-500));
    }
    ```

    In 15.0.x and going forward:

    ```scss
    $my-palette: palette(
        $primary: #09f,
        $secondary: #e41c77,
        $gray: #000
    );
    
    .my-class {
        background: color($color: 'gray', $variant: 300);
        color: contrast-color($color: 'gray', $variant: 300);
        border-color: hsl(var(--ig-gray-500));
    }
    ```


- **Breaking Change** - **Generating CSS variables** for a palette is now done by the **palette mixin**, instead of the **palette-vars mixin**.

- **Breaking Change** - The **palette function** now **requires a surface color to be passed**, while passing a value for the `gray` color is optional. If a value for the gray base color is not provided, it will be generated automatically based on the lightness of the surface color - light surface color results in a black(#000) gray base color, whereas a dark surface color generates a white(#fff) base gray color. When you're generating a palette, you have to keep in mind that there are no longer default values for **info, success, error and warn** colors. You have to set them explicitly if you want to use them. You can also grab those colors from an existing palette if you don't want to come up with the values yourself.

  #### Example

    ```scss
    $my-palette: palette(
        $primary: #09f,
        $secondary: #e41c77,
        $surface: #fff,
        $info: color($light-material-palette, 'info'),
        $success: color($light-material-palette, 'success'),
        $error: color($light-material-palette, 'error'),
        $warn: color($light-material-palette, 'warn'),
    );

    @include palette($my-palette);
    ```

- **Breaking Change** - **The palette parameter is now removed from all component themes.** You can **use the palette mixin** to scope a custom palette in for a custom component component theme. Since we dropped support for IE11 all component themes refer to the global CSS variables for colors, elevations, typography, etc., therefore passing a custom palette to a component theme is no longer necessary.

    Generating a custom theme with a custom palette:

    ```scss
    // app.component.scss

    $my-palette: palette(
        $primary: royalblue,
        $secondary: orange,
        $surface: white
    );

    $avatar: avatar-theme(
        $background: color($color: 'primary'), 
        $color: contrast-color($color: 'primary')
    );

    :host ::ng-deep {
        // Include the custom palette in the scope of the app component.
        // It will have a higher specificity than the global palette.
        @include palette($my-palette):
        
        .my-avatar {
            @include avatar($avatar);
        }
    }
    ```

### Typography

- **Breaking Change** - The **type-style** mixin now doesn't accept type-scale as a parameter, only the category name.

    In 14.2.x and prior:

    ```scss
    .my-class {
        @include type-style($type-scale: $my-type-scale, $category: h1);
    }
    ```

    In 15.0.x and forward:

    ```scss
    .my-class {
        @include type-style(h1);
    }
    ```

### Elevations

- **Breaking Change** - The **elevation function** now has only one named argument - **$name (the elevation name)**.
- **Breaking Change** - The **elevations function** has been removed, you can now configure the elevation colors, using the `configure-elevations` mixin.

    In 14.2.x and prior:

    ```scss
    .my-class {
        box-shadow: elevation($elevations, $elevation: 8);
    }
    ```

    In 15.0.x and forward:

    ```scss
    .my-class {
        box-shadow: elevation(8);
    }
    ```

### Grid Toolbar

- **Breaking Change** - The `IgxGridToolbarTitleDirective` and `IgxGridToolbarActionsDirective` have been converted to components, keeping only the element selector. For apps using the preferred element markup of `<igx-grid-toolbar-title>` and `<igx-grid-toolbar-actions>` there should be no functional change. Apps using the `igxGridToolbarTitle` and `igxGridToolbarActions` directives on other elements will need to convert those to the mentioned elements instead:

    _From:_

    ```html
    <igx-grid-toolbar>
        <span igxGridToolbarTitle>Title</span >
        <div igxGridToolbarActions>
            ...
        </div>
    </igx-grid-toolbar>
    ```

    _To:_

    ```html
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Title</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            ...
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
    ```

## From 13.1.x to 13.2.x

### Themes

- **Breaking Change** - All RTL specific stylesheets have been removed. Ignite UI themes now support RTL direction by default. Users who have previously used `*-rtl.css` specific themes must switch to the regular theme files.

## From 13.0.x to 13.1.x

### General

- `igxGrid`, `igxHierarchicalGrid`, `igxTreeGrid`
  - **Breaking Change** - The columns' `movable` property has been deprecated. Use the exposed grid `moving` property instead:

    ```html
    <igx-grid [moving]="true">
    </igx-grid>
    ```

- `IgxHierarchicalGrid`
  - **Breaking Change** - The public API service for igxHierarchicalGrid and igxRowIsland components `hgridAPI` is renamed to `gridAPI`.
- `IgxToast`
  - **Breaking Change** - The `igx-toast` deprecated `position` property has been removed. We suggest using `positionSettings` property as follows:

    ```typescript
    @ViewChild('toast', { static: true }) public toast: IgxToastComponent;

    public ngOnInit(): void {
        this.toast.positionSettings.verticalDirection = VerticalAlignment.Middle;
    }
    ```

## From 12.2.x to 13.0.x

### General

- `IE discontinued support`
- `IgxDialog`
  - **Breaking Change** - The default positionSettings open/close animation has been changed to `fadeIn`/`fadeOut`.
- `igxGrid`, `igxHierarchicalGrid`, `igxTreeGrid`
  - **Breaking Change** - The following deprecated inputs have been removed - `showToolbar`, `toolbarTitle`, `columnHiding`, `columnHidingTitle`, `hiddenColumnsText`, `columnPinning`, `columnPinningTitle`, `pinnedColumnsText`. Use `IgxGridToolbarComponent`, `IgxGridToolbarHidingComponent`, `IgxGridToolbarPinningComponent` instead.
  - **Breaking Change** - Upon adding of `igx-toolbar` component, now you should manually specify which features you want to enable - Column Hiding, Pinning, Excel Exporting. Advanced Filtering may be enabled through the `allowAdvancedFiltering` input property on the grid, but it is recommended to enable it declaratively with markup, as with the other features.
  - **Breaking Change** - The `rowSelected` event is renamed to `rowSelectionChanging` to better reflect its function.
  - **Breaking Change** - The `columnSelected` event is renamed to `columnSelectionChanging` to better reflect its function.
  - **Breaking Change** - `columnsCollection` is removed. Use `columns` instead. If at certain occasions `columns` return empty array, query the columns using `ViewChildren` and access those in `ngAfterViewInit`:

    ```typescript
    @ViewChildren(IgxColumnComponent, { read: IgxColumnComponent })
    public columns: QueryList<IgxColumnComponent>;
    ```

  - **Breaking change** - when applying a custom directive on the grid, inject the `IGX_GRID_BASE` token in the constructor in order to get reference to the hosting grid:

    ```html
    <igx-grid customDirective ...></igx-grid>
    ```

    ```typescript
    @Directive({
        selector: '[customDirective]'
    })
    export class customDirective {

    constructor(@Host() @Optional() @Inject(IGX_GRID_BASE) grid: IgxGridBaseDirective) { }
    ```

- `RowDirective`, `RowType`
  - **Breaking Change** - `rowData` and `rowID` properties are removed from `RowDirective` and from classes implementing the `RowType` interface. Use `data` and `key` instead. Use `ng update` for automatic migration. Automatic migration will not be able to pick up some examples from templates, where the template context object is not typed:

    ```html
    <ng-template igxCell let-cell="cell">
        <span>{{ cell.rowID }}</span>
        <span>{{ cell.row.rowData.ProductID }}</span>
    </ng-template>
    ```

    Update such templates manually to

    ```html
    <span>{{ cell.key }}</span>
    <span>{{ cell.row.data.ProductID }}</span>
    ```

- `igxGrid`
  - Exposed a `groupStrategy` input that functions similarly to `sortStrategy`, allowing customization of the grouping behavior of the grid.
- `IgxCsvExporterService`, `IgxExcelExporterService`
  - Exporter services are no longer required to be provided in the application since they are now injected on a root level.
- `IgxGridToolbarPinningComponent`, `IgxGridToolbarHidingComponent`
  - Exposed new input `buttonText` which sets the text that is displayed inside the dropdown button in the toolbar.
- `IgxCombo`
  - Added `groupSortingDirection` input, which allows you to set groups sorting order.
- `IgxGrid`, `IgxTreeGrid`, `IgxHierarchicalGrid`
  - Added new directives for re-templating header sorting indicators - `IgxSortHeaderIconDirective`, `IgxSortAscendingHeaderIconDirective` and `IgxSortDescendingHeaderIconDirective`.
- `IgxDialog`
  - Added `focusTrap` input to set whether the Tab key focus is trapped within the dialog when opened. Defaults to `true`.
- `IgxColumnActionsComponent`
  - **Breaking Change** - The following input has been removed
    - Input `columns`. Use `igxGrid` `columns` input instead.
- `IgxCarousel`
  - **Breaking Changes** -The carousel animation type `CarouselAnimationType` is renamed to `HorizontalAnimationType`.
- `IgxGridStateDirective` - now supports `disableHiding` column prop and column groups

### Theming

- Icon component `color` property has been deprecated. Use `style.color` CSS property to change its default color. Examples:

```html
<igx-icon [style.color]="'#e41c77'">home</igx-icon>
```

```html
<igx-icon style.color="{{ col.hasSummary ? '#e41c77' : '' }}">functions</igx-icon>
```

- Sass Modules:
The theming engine has switched to [Sass modules](https://sass-lang.com/documentation/at-rules/use). This change means all theming library functions (component themes, etc.), mixins (component mixins, etc.), and variables are now being `forwarded` from a single file. To correctly use the Sass theming library, your project should utilize Dart Sass version 1.33.0 or later and change all imports of the theming library from:

```scss
// free version
@import '~igniteui-angular/lib/core/styles/themes/index';

// licensed version
@import '~@infragistics/igniteui-angular/lib/core/styles/themes/index';
```

to:

```scss
// free version
@use 'igniteui-angular/theming' as *;

// licensed version:
@use '@infragistics/igniteui-angular/theming' as *;
```

If you want to import the entire theming library only once and then use it in other Sass files in your app, make sure to do forward it. Imported Sass files are not going to be automatically forwarded.

Before:

```scss
// _variables.scss
// free version
@import '~igniteui-angular/lib/core/styles/themes/index';

// licensed version
@import '~@infragistics/igniteui-angular/lib/core/styles/themes/index';

// _other-file.scss
@import 'variables';
```

After:

```scss
// _variables.scss
// free versioin
@use 'igniteui-angular/theming' as *;
@forward 'igniteui-angular/theming';

// licensed version
@use '@infragistics/igniteui-angular/theming' as *;
@forward '@infragistics/igniteui-angular/theming';


// _other-file.scss
@use 'variables' as *;
```

- Palettes and Schemas:

- CSS palette variables do not refer to HEX values anymore, instead they represent a list of 3 values H, S, and L, which means they should be passed to either the `hsl` or `hsla` CSS functions.

Before:

```scss
.some-class {
    background: var(--igx-surface-500); // returns HEX color
}
```

After:

```scss
.some-class {
    background: hsl(var(--igx-surface-500)); // returns a list of H, S, L
}
```

This was done so that palettes can be changed at runtime using CSS variables only. In this way the alpha channel for a given palette color can be modified at runtime without affecting the underlying palette color.

- Please ensure the correct palette and component schema are passed to your custom-made component and global themes. If you want to create a global dark theme, make sure to select a lighter color shade for your gray color, for instance:

```scss
$my-dark-palette: palette(
    $primary: olive,
    $secondary: yellow,
    $grays: #fff
);

@include dark-theme($palette: $my-dark-palette);
```

Likewise, light themes require a darker shade of gray and a light color schema.

If you've not excluded any component themes from the global theme but you still want to create your own custom replacement themes using the `css-vars` mixin, make sure the theme is passed the correct palette and corresponding schema:

```scss
$my-custom-grid: grid-theme(
    $palette: $my-dark-palette,
    $schema: $dark-schema
);

@include css-vars($my-custom-grid);
```

- Excluded Component Themes:

In case you've excluded some component themes from the global theme and you've created custom replacement themes, you should ensure that the component mixin is included and is passed the correct component theme:

```scss
$my-dark-palette: palette(
    ...
    $exclude: ('igx-grid')
);

$my-custom-grid: grid-theme(
    $palette: $my-dark-palette,
    $schema: $dark-schema
);

// Ensuregrid is included:
@include grid($my-custom-grid);
```

In case your custom component themes are declared in a separate component Sass file, other than the global `styles.scss`, ensure the `core` mixin is also included.

```scss
// free version
@use 'igniteui-angular/theming' as *;

// licensed version
@use '@infragistics/igniteui-angular/theming' as *;

// Include the core module mixin.
@include core();

// Create your theme.
$my-custom-grid: grid-theme(
    $palette: $my-dark-palette,
    $schema: $dark-schema
);

// Include your custom theme styles.
@include grid($my-custom-grid);
```

To get a better grasp on the Sass Module System, you can read [this great article](https://css-tricks.com/introducing-sass-modules/) by [Miriam Suzanne](https://css-tricks.com/author/miriam/);

## From 12.0.x to 12.1.x

### Grids

- Breaking Changes:
  - [`IgxPaginatorComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPaginatorComponent.html) - The way the Paginator is instantiated in the grid has changed. It is now a separate component projected in the grid tree. Thus the `[paging]="true"` property is removed from all grids and all other properties related to the paginator in the grid are deprecated. It is recommended to follow the guidance for enabling `Grid Paging` features as described in the [Paging topic](../grid/paging.md).
  - [`IgxPageSizeSelectorComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPageSizeSelectorComponent.html) and [`IgxPageNavigationComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxPageNavigationComponent.html) are introduced to ease the implementation of any custom content:

    ```html
    <igx-paginator #paginator>
        <igx-paginator-content>
            <igx-page-size></igx-page-size>
            [My custom text]
            <igx-page-nav></igx-page-nav>
        </igx-paginator-content>
    </igx-paginator>
    ```

  - The API for the paging component was changed during the refactor and many of the old properties are now deprecated. Unfortunately, having
    an adequate migration for some of these changes is complicated to say the least, so any errors should be handled at application level.
  - The following properties are deprecated from the Grid:
    - paging, perPage page, totalPages, isFirstPage, isLastPage, pageChange, perPageChange, pagingDone
  - The following methods, also are deprecated:
    - nextPage()
    - previousPage()
  - The following property has been removed:
    - paginationTemplate - in order to define a custom template, use the `igx-paginator-content`
  - HierarchicalGrid specifics - The following usage of `*igxPaginator` Directive is necessary when it comes to enabling paging on RowIslands:

    ```html
    <igx-hierarchical-grid #hGrid >
        <igx-column *ngFor="let c of hColumns" [field]="c.field">
        </igx-column>
        <igx-row-island [key]="'childData'" [autoGenerate]="true">
            <igx-row-island [key]="'childData'" [autoGenerate]="true">
                <igx-paginator *igxPaginator></igx-paginator>
            </igx-row-island>
            <igx-paginator *igxPaginator></igx-paginator>
        </igx-row-island>
        <igx-row-island [key]="'childData2'" [autoGenerate]="true">
            <igx-paginator *igxPaginator></igx-paginator>
        </igx-row-island>

        <igx-paginator></igx-paginator>
    </igx-hierarchical-grid>
    ```

  - While the migration will move your template content inside the `igx-paginator-content` content, it might not resolve all template bindings. Make sure to check your template files after the migration. The following bindings should be changed manually as these properties have been removed (`pagerEnabled`, `pagerHidden`, `dropdownEnabled`, `dropdownHidden`):

    _From:_

    ```html
    <igx-paginator #paginator
        [pagerEnabled]="!isPagerDisabled" [pagerHidden]="isPagerHidden"
        [dropdownHidden]="isDropdownHidden">
    </igx-paginator>
    ```

    _To:_

    ```html
    <igx-paginator #paginator *ngIf="!isPagerDisabled">
        <igx-paginator-content>
            <igx-page-size *ngIf="isDropdownHidden"></igx-page-size>
            <igx-page-nav *ngIf="isPagerHidden"></igx-page-nav>
        </igx-paginator-content>
    </igx-paginator>
    ```

  - IgxGridCellComponent, IgxTreeGridCellComponent, IgxHierarchicalGridCellComponent, IgxGridExpandableCellComponent are no longer exposed in the public API. See sections below for detail guide on upgrading to the new `IgxGridCell`.


- Grid Deprecation:
  - The DI pattern for providing `IgxGridTransaction` is deprecated. The following will still work, but you are advised to refactor it, as it **will likely be removed** in a future version:

    ```typescript
    @Component({
        template: `<igx-grid [data]="data">
        ...
        </igx-grid>`,
        providers: [{ provide: IgxGridTransaction, useClass: IgxTransactionService }],
        ...
    })
    export class MyCustomComponent {
        ...
    }
    ```

    In order to achieve the above behavior, you should use the the newly added [`batchEditing`](../grid/batch-editing.md) input:

    ```typescript
    @Component({
        template: `<igx-grid [data]="data" [batchEditing]="true">
        ...
        </igx-grid>`
        ...
    })
    export class MyCustomComponent {
        ...
    }
    ```

  - `getCellByColumnVisibleIndex` is now deprecated and will be removed in next major version. Use `getCellByKey`, `getCellByColumn` instead.


### IgxGridCell migration

- _IgxGridCellComponent_, _IgxTreeGridCellComponent_, _IgxHierarchicalGridCellComponent_, _IgxGridExpandableCellComponent_ are no longer exposed in the public API.

- Public APIs, which used to return an instance of one of the above, now return an instance of [`IgxGridCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html):

```ts
const cell = grid.getCellByColumn(0, 'ProductID');     // returns IgxGridCell
const cell = grid.getCellByKey('ALFKI', 'ProductID');  // returns IgxGridCell
const cell = grid.getCellByColumnVisibleIndex(0, 0);   // returns IgxGridCell
const rowCells = grid.getRowByIndex(0).cells;          // returns IgxGridCell[]
const selectedCells = grid.selectedCells;              // returns IgxGridCell[]
const cells = grid.getColumnByName('ProductID').cells; // returns IgxGridCell[]
```

- `cell` property in the `IGridCellEventArgs` event arguments emitted by _cellClick_, _selected_, _contextMenu_ and _doubleClick_ events is now an instance of [`IgxGridCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)
- `let-cell` property in cell template is now `IgxGridCell`.
- `getCellByColumnVisibleIndex` is now deprecated and will be removed in next major version. Use `getCellByKey`, `getCellByColumn` instead.

Please note:

- _ng update_ will migrate the uses of _IgxGridCellComponent_, _IgxTreeGridCellComponent_, _IgxHierarchicalGridCellComponent_, _IgxGridExpandableCellComponent_, like imports, typings and casts. If a place in your code using any of the above is not migrated, just remove the typing/cast, or change it with [`IgxGridCell`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html).
- _getCellByIndex_ and other methods will return undefined, if the row at that index is not a data row, but is IgxGroupByRow, IgxSummaryRow, details row, etc.


### Themes

Due to complaints pertaining to compilation warnings (see [#9793](https://github.com/IgniteUI/igniteui-angular/issues/9793)) we now use the [`math.div`](https://sass-lang.com/documentation/modules/math#div) function; This functionality is supported by [Dart Sass](https://sass-lang.com/dart-sass) from version 1.33.0 onward.

#### Solution

If for any reason you see Sass compilation errors saying `math.div` is not a known function it means you are using an outdated version of Sass in your project.

1. Update to the latest version of Angular using `ng update` - Angular 12.1.0+ uses the dart-sass compiler by default.

    ```sh
    ng update [options]
    ```

    If for some reason you don't use the Ignite UI/Angular CLI, you'd need to replace `node-sass` with `sass` in your Node project.

    ```sh
    npm uninstall node-sass
    npm install sass --save-dev
    ```

2. If for some reason you cannot upgrade to the latest version of Angular using the method above, you can fall back to the old Sass division method by setting a global flag in your Sass file:

    ```scss
    $__legacy-libsass: true;
    ```

## From 11.1.x to 12.0.x

### Themes

- Breaking Changes:
  - `IgxAvatar` theme has been simplified. The number of theme params (`avatar-theme`) has been reduced significantly and no longer includes prefixed parameters(`icon-*`, `initials-*`, `image-*`) and suffixed parameters(`border-radius-*`). Updates performed with `ng update` will migrate existing avatar themes, but some additional tweaking may be required to account for the absence of prefixed and suffixed params.

    You will need to modify existing type specific avatar themes in the following way:

    For example, this:

    ```scss
    $avatar-theme: avatar-theme(
        $initials-background: blue,
        $initials-color: orange,
        $icon-background: blue,
        $icon-color: orange,
    );

    @include avatar($avatar-theme);
    ```

    Needs to be transformed into this:

    ```scss
    $initials-avatar: avatar-theme(
        $background: blue,
        $color: orange,
    );

    $icon-avatar: avatar-theme(
        $background: blue,
        $color: orange,
    );

    .initials-avatar {
        @include avatar($initials-avatar);
    }

    .icon-avatar {
        @include avatar($icon-avatar);
    }
    ```

  - `IgxButton` theme has been simplified. The number of theme params (`button-theme`) has been reduced significantly and no longer includes prefixed parameters (`flat-*`, `raised-*`, etc.). Updates performed with `ng update` will migrate existing button themes, but some additional tweaking may be required to account for the absence of prefixed params.

    In order to achieve the same result as from the code snippet below.

    ```html
    <button igxButton="raised">Raised button</button>
    <button igxButton="outlined">Outlined button</button>
    ```

    ```scss
    $my-button-theme: button-theme(
        $raised-background: red,
        $outlined-outline-color: green
    );

    @include css-vars($my-button-theme);
    ```

    You have to create a separate theme for each button type and scope it to a CSS selector.

    ```html
    <div class="my-raised-btn">
    <button igxButton="raised">Raised button</button>
    </div>
    <div class="my-outlined-btn">
        <button igxButton="outlined">Outlined button</button>
    </div>
    ```

    ```scss
    $my-raised-button: button-theme(
        $background: red
    );

    $my-outlined-button: button-theme(
        $border-color: red
    );

    .my-raised-btn {
        @include css-vars($my-raised-button);
     }

    .my-outlined-btn {
        @include css-vars($my-outlined-button);
    }
    ```

    As you can see, since the `button-theme` params now have the same names for each button type, we have to scope our button themes to a CSS selector in order to have different colors for different types.

    Here you can see all the [available properties](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-theme) of the `button-theme`

  - The `typography` mixin is no longer implicitly included with `core`. To use our typography styles you have to include the mixin explicitly after `core` and before `theme`:

    ```scss
    // in styles.scss

    @include core();

    @include typography(
        $font-family: $material-typeface,
        $type-scale: $material-type-scale
    );

    @include theme();
    ```

    > [!IMPORTANT]
    > The `core` mixin should always be included first.

    For each theme included in Ignite UI for Angular we provide specific `font-family` and `type-scale` variables which you can use:

| **Theme** | **Font Family**     | **Type Scale**        |
| :-------- | :------------------ | :-------------------- |
| Material  | $material-typeface  | $material-type-scale  |
| Fluent    | $fluent-typeface    | $fluent-type-scale    |
| Bootstrap | $bootstrap-typeface | $bootstrap-type-scale |
| Indigo    | $indigo-typeface    | $indigo-type-scale    |

### IgxBottomNav component

The [**IgxBottomNavComponent**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbottomnavcomponent.html) was completely refactored in order to provide more flexible and descriptive way to define tab headers and contents. It is recommended that you update via **ng update** in order to migrate the existing **igx-bottom-nav** definitions to the new ones.


- Template
  - The new structure defines bottom navigation item components each wrapping a header and a content component. The headers usually contain an icon ([`Material guidelines`](https://material.io/components/bottom-navigation#usage)) but may as well have a label or any other custom content.
  - For header styling purposes we introduced two new directives - `igxBottomNavHeaderLabel` and `igxBottomNavHeaderIcon`.
  - Since the header component now allows adding any content, the `igxTab` directive, which was previously used to retemplate the tab's header, was removed because it is no longer necessary.
  - When the component is used in navigation scenario, the `routerLink` directive needs to be attached to the header component.

    ```html
    <igx-bottom-nav>
        <igx-bottom-nav-item>
            <igx-bottom-nav-header>
                <igx-icon igxBottomNavHeaderIcon>folder</igx-icon>
                <span igxBottomNavHeaderLabel>Tab 1</span>
            </igx-bottom-nav-header>
            <igx-bottom-nav-content>
                Content 1
            </igx-bottom-nav-content>
        </igx-bottom-nav-item>
        ...
    </igx-bottom-nav>
    ```

- API changes
  - The `id`, `itemStyle`, `panels`, `viewTabs`, `contentTabs` and `tabs` properties were removed. Currently, the [`items`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbottomnavcomponent.html#items) property returns the collection of tabs.
  - The following properties were changed:
    - The tab item's `isSelected` property was renamed to [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbottomnavitemcomponent.html#selected).
    - The `selectedTab` property was renamed to [`selectedItem`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbottomnavcomponent.html#selectedItem).
  - The `onTabSelected` and `onTabDeselected` events were removed. We introduced three new events, [`selectedIndexChanging`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbottomnavcomponent.html#selectedIndexChanging),[`selectedIndexChange`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbottomnavcomponent.html#selectedIndexChange) and [`selectedItemChange`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbottomnavcomponent.html#selectedItemChange), which provide more flexibility and control over the tabs' selection. Unfortunately, having an adequate migration for these event changes is complicated to say the least, so any errors should be handled at project level.

### IgxTabs component

The [**IgxTabsComponent**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtabscomponent.html) was completely refactored in order to provide more flexible and descriptive way to define tab headers and contents. It is recommended that you update via **ng update** in order to migrate the existing **igx-tabs** definitions to the new ones.


- Template
  - The new structure defines tab item components each wrapping a header and a content component. The headers usually contain an icon and a label but may as well have any other custom content.
  - For header styling purposes we introduced two new directives - `igxTabHeaderLabel` and `igxTabHeaderIcon`.
  - Since the header component now allows adding any content, the `igxTab` directive, which was previously used to retemplate the tab's header, was removed because it is no longer necessary.
  - When the component is used in navigation scenario, the `routerLink` directive needs to be attached to the header component.

    ```html
    <igx-tabs>
        <igx-tab-item>
            <igx-tab-header>
                <igx-icon igxTabHeaderIcon>folder</igx-icon>
                <span igxTabHeaderLabel>Tab 1</span>
            </igx-tab-header>
            <igx-tab-content>
                <h1>Tab 1 Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </igx-tab-content>
        </igx-tab-item>
    ...
    </igx-tabs>
    ```

- API changes
  - The `id`, `groups`, `viewTabs`, `contentTabs` and `tabs` properties were removed. Currently, the [`items`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtabscomponent.html#items) property returns the collection of tabs.
  - The following properties were changed:
    - The tab item's `isSelected` property was renamed to [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtabitemcomponent.html#selected).
    - The `selectedTabItem` property was shortened to [`selectedItem`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtabscomponent.html#selectedItem).
    - The `type` property, with its contentFit and fixed options, is no longer available. The header sizing & positioning mode is currently controlled by the [`tabAlignment`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtabscomponent.html#tabAlignment) input property which accepts four different values - start (default), center, end and justify. The old `contentFit` type corresponds to the current `start` alignment value and the old `fixed` type - to the current `justify` value.
  - The `tabItemSelected` and `tabItemDeselected` events were removed. We introduced three new events, [`selectedIndexChanging`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtabscomponent.html#selectedIndexChanging), [`selectedIndexChange`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtabscomponent.html#selectedindexchange) and [`selectedItemChange`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtabscomponent.html#selectedIndexChange), which provide more flexibility and control over the tabs' selection. Unfortunately, having an adequate migration for these event changes is complicated to say the least, so any errors should be handled at project level.

### IgxGridComponent, IgxTreeGridComponent, IgxHierarchicalGridComponent

- _IgxGridRowComponent_, _IgxTreeGridRowComponent_, _IgxHierarchicalRowComponent_, _IgxGridGroupByRowComponent_ are no longer exposed in the public API.
- Public APIs, which used to return an instance of one of the above, now return objects implementing the public [`RowType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/rowtype.html) interface:

```ts
const row = grid.getRowByIndex(0);
const row = grid.getRowByKey(2);
const row = cell.row;
```

While the public API of [`RowType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/rowtype.html) is the same as what _IgxRowComponent_ and others used to expose, please note:

- _toggle_ method, exposed by the _IgxHierarchicalRowComponent_ is not available. Use [`expanded`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/rowtype.html#expanded) property for all row types:

```ts
grid.getRowByIndex(0).expanded = false;
```

*row.rowData_ and _row.rowID_ are deprecated and will be entirely removed with version 13. Please use _row.data_ and _row.key_ instead.

- _row_ property in the event arguments emitted by _onRowPinning_, and _dragData_ property in the event arguments emitted by _onRowDragStart_, _onRowDragEnd_ is now implementing [`RowType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/rowtype.html)
- _ng update_ will migrate most of the uses of _IgxGridRowComponent_, _IgxTreeGridRowComponent_, _IgxHierarchicalRowComponent_, _IgxGridGroupByRowComponent_ , like imports, typings and casts. If a place in your code using any of the above is not migrated, just remove the typing/cast, or change it with [`RowType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/rowtype.html).
- _getRowByIndex_ will now return a [`RowType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/rowtype.html) object, if the row at that index is a summary row (previously used to returned _undefined_). _row.isSummaryRow_ and _row.isGroupByRow_ return true if the row at the index is a summary row or a group by row.

### IgxInputGroupComponent

- The `disabled` property has been removed. The property was misleading, as the state of the input group was always managed by the underlying `igxInput`.
  - Running `ng update` will handle all instances in which `[disabled]` was used as an `@Input` in templates.
  - If you are referencing the property in a `.ts` file:

    ```typescript
    export class CustomComponent {
        public inputGroup: IgxInputGroupComponent
        ...
        this.inputGroup.disabled = false;
    }
    ```

    you should please manually update your code to reference the underlying input directive's `disabled` property:

    ```typescript
    export class CustomComponent {
        public input: IgxInputDirective
        ...
        this.input.disabled = false;
    }
    ```

### IgxDateTimeDirective, IgxDatePickerComponent, IgxTimePickerComponent, IgxDateRangePickerComponent

- The `value` property for IgxDateTimeDirective, IgxDatePickerComponent, IgxTimePickerComponent, IgxDateRangePickerComponent now accepts ISO 8601 string format. This means that `value` type could be `Date` or `string`.
- The `inputFormat` property of IgxDateTimeDirective, IgxDatePickerComponent, IgxTimePickerComponent, IgxDateRangePickerComponent now doesn't accept `y` for the year part. You should update it to `yy`.

## From 10.2.x to 11.0.x

- IgxGrid, IgxTreeGrid, IgxHierarchicalGrid
  - The way the toolbar is instantiated in the grid has changed. It is now a separate component projected in the grid tree. Thus the `showToolbar` property is removed from
    all grids and all other properties related to the toolbar in the grid are deprecated.
    It is recommended to follow the recommended way for enabling
    toolbar features as described in the [Toolbar topic](../grid/toolbar.md).
  - The `igxToolbarCustomContent` directive is removed. While the migration will move
    your template content inside the toolbar content, it does not try to resolve template bindings. Make sure to check your template files after the migration.
  - The API for the toolbar component was changed during the refactor and many of the old properties are now removed. Unfortunately, having
    an adequate migration for these changes is complicated to say the least, so any errors should be handled at project level.

## From 10.0.x to 10.1.x

- IgxGrid, IgxTreeGrid, IgxHierarchicalGrid
  - Since we have removed the `IgxExcelStyleSortingTemplateDirective`, `IgxExcelStyleHidingTemplateDirective`, `IgxExcelStyleMovingTemplateDirective`, `IgxExcelStylePinningTemplateDirective`, and `IgxExcelStyleSelectingTemplateDirective` directives used for templating some parts of the Excel style filter menu, you could use the newly added directives for templating the column and filter operations areas - `IgxExcelStyleColumnOperationsTemplateDirective` and `IgxExcelStyleFilterOperationsTemplateDirective`. We have also exposed all internal components of the Excel style filter menu so that they can be used inside custom templates. You can find more information about the new template directives in the [Excel-Style Filtering Topic](../grid/excel-style-filtering.md#templates).
- IgxGrid
  - The `selectedRows()` method has been refactored into an input property named. This breaking change allows users to easily change the grid's selection state at runtime. Pre-selection of rows is also supported. All instances where the `selectedRows()` method is called have to be rewritten without any parentheses.
  - Binding to the `selectedRows` input property could look something like this:

    ```typescript
    public mySelectedRows = [0, 1, 2];
    ```

    ```html
    <igx-grid [data]="myData" rowSelection="multiple"
        primaryKey="ID" [selectedRows]="mySelectedRows">
        <!-- ... -->
    </igx-grid>
    ```

## From 9.0.x to 10.0.x

- IgxDropdown
  - The display property of the dropdown item has been changed from `flex` to `block`. We have done this in order to have truncated text enabled by default. Due to that change, if there is more than text in the content of the dropdown item, the layout needs to be handled on the application level.

  - The following example demonstrates how to style a dropdown item with an icon and text content so that they are vertically aligned.

    ```html
    <igx-drop-down-item>
        <div class="my-styles">
            <igx-icon>alarm</igx-icon>
            <span>item text</span>
        </div>
    </igx-drop-down-item>
    ```

    ```scss
    .my-styles {
        display: flex;
        align-items: center;

        span {
          margin-left: 8px;
        }
    }
    ```

## From 8.x.x to 9.0.x

Due to a breaking change in Angular 9 Hammer providers are no longer implicitly added
[please, refer to the following document for details:](https://github.com/angular/angular/blob/master/CHANGELOG.md#breaking-changes-9 ) Because of this the following components require `HammerModule` to be imported in the root module of the application in order for **touch** interactions to work as expected:

- igxGrid
- igxHierarchicalGrid
- igxTreeGrid
- igxList
- igxNavigationDrawer
- igxTimePicker
- igxDatePicker
- igxMonthPicker
- _igxSlider_*
- igxCalendar
- igxCarousel

> **\* Note** - igxSlider requires the HammerModule for _**all**_ user interactions.

You can use the following code snippet to update your app's root module file.

```typescript
import { HammerModule } from "@angular/platform-browser";

@NgModule({
    ...
    imports: [
        ...
        HammerModule
    ]
})
```

Due to name changes made in some of the `Enumerations` we export, manual update is needed for their members. Here's a list of all changes made that require manual update:

- AvatarType.`DEFAULT` -> IgxAvatarType.`CUSTOM`
- Type.`DEFAULT` -> IgxBadgeType.`PRIMARY`
- IgxCardType.`DEFAULT` -> IgxCardType.`ELEVATED`
- IgxCardActionsLayout.`DEFAULT` -> IgxCardActionsLayout.`START`
- IgxDividerType.`DEFAULT` -> IgxDividerType.`SOLID`
- IgxProgressType.`DANGER` -> IgxProgressType.`ERROR`

The `ng update` process will update all enumeration names, like `AvatarType`, `Type`, et al. to `IgxAvatarType` and `IgxBadgeType`, respectively. All other enumeration member names remain unchanged.

## From 8.1.x to 8.2.x

- IgxDrag
  - Since `hideBaseOnDrag` and `visible` inputs are being deprecated, in order to achieve the same functionality in your application, you can use any way of hiding the base element that Angular provides. One example is setting the `visibility` style to `hidden`, since it will only make in invisible and keep its space that it takes in the DOM:

    ```html
    <div igxDrag [ngStyle]="{ 'visibility': targetDragged ? 'hidden' : 'visible' }"
        (dragStart)="onDragStarted($event)" (dragEnd)="onDragEnded($event)">
        Drag me!
    </div>
    ```

    ```typescript
    public targetDragged = false;

    public onDragStarted(event) {
        this.targetDragged = true;
    }

    public onDragEnded(event) {
        this.targetDragged = false;
    }
    ```

  - Since `animateOnRelease` and `dropFinished()` are also being deprecated, any `dropFinished()` method usage should be replaced with `transitionToOrigin()`. Otherwise you would need to call `transitionToOrigin()` depending on when you would want the dragged element to transition back to its original location. Note that  if the dragged element DOM position is changed, then its original location will also change based on that.

- IgxDrop
  - Due to the default drop strategy provided with the `IxgDrop` directive is no longer applied by default, in order to continue having the same behavior, you need to set the new input `dropStrategy` to be the provided `IgxAppendDropStrategy` implementation.

    ```html
    <div igxDrop [dropStrategy]="appendStrategy"></div>
    ```

    ```typescript
    import { IgxAppendDropStrategy } from 'igniteui-angular';
    // import { IgxAppendDropStrategy } from '@infragistics/igniteui-angular'; for licensed package

    public appendStrategy = IgxAppendDropStrategy;
    ```

  - Any use of interfaces `IgxDropEnterEventArgs` and `IgxDropLeaveEventArgs` should be replaced with `IDragBaseEventArgs`.
  - Also any use of the  `IgxDropEventArgs` interface should be replaced with `IDropDroppedEventArgs`.

- IgxRowDragDirective
  - `IRowDragStartEventArgs` and `IRowDragEndEventArgs` have argument's name changed in order to be more clear to what it relates to. `owner` argument is renamed to `dragDirective`.
    The `owner` argument now provides a reference to the owner component. If your code was like:

    ```typescript
    public dragStart(event) {
        const directive = event.owner;
    }
    ```

    From version 8.2.x it should be updated to:

    ```typescript
    public dragStart(event) {
        const directive = event.dragDirective;
        const grid = event.owner;
    }
    ```

- IgxCombo
  - The way that the [`igx-combo`](../combo.md) handles selection and data binding is changed.

  - If the combo's [`valueKey`] input is defined, the control will look for that specific property in the passed array of data items when performing selection.
    **All** selection events are handled with the value of the data items' `valueKey` property.
    All combos that have `valueKey` specified should have their selection/two-way binding consist only of the values for the object property specified in the input:

    ```html
    <igx-combo [data]="cities" valueKey="id" displayKey="name"></igx-combo>
    ```

    ```typescript
    export class MyExampleCombo {
        public data: { name: string, id: string }[] = [{ name: 'London', id: 'UK01' }, { name: 'Sofia', id: 'BG01' }, ...];
        ...
        selectFavorites() {
            // Selection is handled with the data entries' id properties
            this.combo.selectItems(['UK01', 'BG01']);
        }
    }
    ```

  - If the combo **does not** have a `valueKey` defined, **all** selection events are handled with **equality (===)**.
    All combos that **do not** have a `valueKey` specified should have their selection/two-way binding handled with **references** to their data items:

    ```html
    <igx-combo [data]="cities" displayKey="name"></igx-combo>
    ```

    ```typescript
    export class MyExampleCombo {
        public data: { name: string, id: string }[] = [{ name: 'London', id: 'UK01' }, { name: 'Sofia', id: 'BG01' }, ...];
        ...
        selectFavorites() {
            // Selection is handled with references to the data entries
            this.combo.selectItems([this.data[0], this.data[1]]);
        }
    }
    ```

    You can read more about setting up the combo in the [readme](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/combo/README.md#value-binding) and in the [official documentation](../combo.md#selection-api).

## From 8.0.x to 8.1.x

- The `igx-paginator` component is introduced as a standalone component and is also used in the Grid components.
Keep in mind that if you have set the `paginationTemplate`, you may have to modify your CSS to display the pagination correctly. This is due to the fact that the template is no longer applied under a paging-specific container with CSS rules to center content, so you might need to add them manually.
The style should be something similar to:

```html
<igx-grid #grid [data]="data" [paging]="true" [perPage]="10" [paginationTemplate]="pager">
</igx-grid>
<ng-template #pager>
    <div class="pagination-container"></div>
</ng-template>
```

```css
.pagination-container {
 display: flex;
 justify-content: center;
 align-items: center;
}
```

## From 7.3.x to 8.0.x

- While updating, if you face the following error `Package "@angular/compiler-cli" has an incompatible peer dependency to "typescript" (requires ">=3.1.1 <3.3", would install "3.4.5").`, you should update `@angular/core` package first. This is related to this known [Angular CLI issue](https://github.com/angular/angular-cli/issues/13095)
- While updating the `igniteui-angular` package, if you see the following error `Package "igniteui-angular" has an incompatible peer dependency to "web-animations-js" (requires "^2.3.1", would install "2.3.2-pr208")`, you should update using `ng update igniteui-angular --force`. This could happen if you update `@angular/core` and `@angular/cli` before updating `igniteui-angular`.

## From 7.2.x or 7.3.x to 7.3.4

- If you use the `filterGlobal` method of `IgxGrid`, `IgxTreeGrid` or `IgxHierarchicalGrid`, you should know that the `condition` parameter is no longer optional. When the `filterGlobal` method is called with an invalid condition, it will not clear the existing filters for all columns.

## From 7.1.x to 7.2.x

- If you use an IgxCombo with `combo.value`, you should know that now `combo.value` is only a getter.
- If you use `IgxTextHighlightDirective`, you should know that the `page` input property is deprecated. `rowIndex`, `columnIndex` and `page` properties of the `IActiveHighlightInfo` interface are also deprecated. Instead, `row` and `column` optional properties are added.
- If you use the `button-theme`, you should know that the `$button-roundness` has been replaced for each button type with: `$flat-border-radius`, `$raised-border-radius`, `$outline-border-radius`, `$fab-border-radius`,  `$icon-border-radius`.

## From 7.0.x to 7.1.x

- If you use an IgxGrid with summaries in your application, you should know that now the `IgxSummaryOperand.operate()` method is called with empty data in order to calculate the necessary height for the summary row. For custom summary operands, the method should always return an array of IgxSummaryResult with proper length.

 Before version 7.1:

```typescript
export class CustomSummary extends IgxNumberSummaryOperand {
 public operate(data?: any[]): IgxSummaryResult[] {
  return [{
   key: 'average',
   label: 'average',
   summaryResult: IgxNumberSummaryOperand.average(data).toFixed(2)
  }];
 }
}
```

 Since version 7.1:

```typescript
export class CustomSummary extends IgxNumberSummaryOperand {
 public operate(data?: any[]): IgxSummaryResult[] {
  return [{
   key: 'average',
   label: 'average',
   summaryResult: data.length ?  IgxNumberSummaryOperand.average(data).toFixed(2) : null
  }];
 }
}
```

## From 6.0.x to 6.1.x

- If you use an IgxCombo control in your application and you have set the `itemsMaxWidth` option, you should change this option to `itemsWidth`

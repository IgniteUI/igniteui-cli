# Troubleshooting

## Issue: Components render without styles

**Cause:** Missing theme CSS import. Without the theme CSS, components will render with broken layouts, missing icons (showing placeholders), and no visual styling.

**Solution:** Add the theme CSS import **before** any component usage. In Vite/CRA apps, add it to your entry point. In Next.js, add it to each client component file or the root layout:

```tsx
// Always required for core components
import 'igniteui-webcomponents/themes/light/bootstrap.css';

// Also required when using grids (IgrGrid, IgrTreeGrid, etc.)
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
```

**Next.js example:**

```tsx
'use client';

import 'igniteui-webcomponents/themes/light/bootstrap.css';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

import { IgrNavbar, IgrButton } from 'igniteui-react';
import { IgrGrid, IgrColumn, IgrPaginator } from 'igniteui-react-grids';
```

## Issue: Grid renders but icons show as placeholders and styles are missing

**Cause:** The grid theme CSS (`igniteui-react-grids/grids/themes/...`) is not imported. The base theme CSS alone is not enough for grids.

**Solution:** Import **both** theme CSS files:

```tsx
import 'igniteui-webcomponents/themes/light/bootstrap.css';    // Base theme
import 'igniteui-react-grids/grids/themes/light/bootstrap.css'; // Grid theme
```

## Issue: Grid Lite does not render or compilation error

**Cause:** `IgrGridLite` is a React wrapper component from `igniteui-react/grid-lite`. It requires **both** `igniteui-react` and `igniteui-grid-lite` packages to be installed. It uses the `Igr` prefix (like all other Ignite UI React wrappers) and does **not** require any `.register()` call.

**Solution:**

1. Install both required packages: `npm install igniteui-react igniteui-grid-lite`
2. Import `IgrGridLite` from `igniteui-react/grid-lite`
3. Wrap in a sized container (see [CHARTS-GRIDS.md](./CHARTS-GRIDS.md) for a full example)

## Issue: `IgrGridLite` is confused with `IgrGrid` from `igniteui-react-grids`

**Solution:** These are different components:
- `igniteui-react/grid-lite` → lightweight MIT grid (`IgrGridLite`, React wrapper — no `.register()` needed, requires both `igniteui-react` and `igniteui-grid-lite` packages)
- `igniteui-react-grids` → full-featured commercial grids (`IgrGrid`, `IgrTreeGrid`, etc. — React wrappers)

Import from the correct package for your needs:

```tsx
// Lightweight grid (MIT, React wrapper, no registration needed)
import { IgrGridLite } from 'igniteui-react/grid-lite';

// Full-featured grid (commercial, React wrapper)
import { IgrGrid } from 'igniteui-react-grids';
```

## Issue: Events fire but have unexpected shape

**Cause:** Ignite UI events are `CustomEvent` objects from the underlying web component, not React `SyntheticEvent` objects.

**Solution:** Type the handler parameter as `CustomEvent` and access `.detail` for event-specific data or `.target` for the element:

```tsx
const handleChange = (e: CustomEvent) => {
  const target = e.target as HTMLElement;
  const detail = e.detail;
  // Use target or detail as appropriate
};
```

## Issue: Component methods not accessible

**Solution:** Use `useRef` with the component type:

```tsx
const dialogRef = useRef<IgrDialog>(null);

// Call imperative method
dialogRef.current?.show();
```

## Issue: Chart / gauge / map does not render or is invisible

**Cause:** Two common causes:
1. The corresponding module was not registered (e.g., `IgrCategoryChartModule.register()` was not called)
2. The parent container has no explicit dimensions — these components inherit size from their container and will be invisible if the container has zero height/width

**Solution:**

1. **Register the module** at the top level of the file (outside the component):

```tsx
import { IgrCategoryChart, IgrCategoryChartModule } from 'igniteui-react-charts';
IgrCategoryChartModule.register();
```

2. **Wrap the chart in a sized container** with explicit dimensions:

```css
.chart-container {
  min-width: 400px;
  min-height: 300px;
  flex-grow: 1;
  flex-basis: 0;
}
.chart-container > * { height: 100%; width: 100%; }
```

```tsx
<div className={styles['chart-container']}>
  <IgrCategoryChart dataSource={data} />
</div>
```

## Issue: IgrTabs used for navigation fills the entire view with content

**Cause:** Inline content was included in `IgrTab` elements when using tabs for navigation with React Router. The tab content areas take up space and push the routed content out of view.

**Solution:** When using `IgrTabs` for navigation, use **only the label** (via `label` prop or `slot="label"`) — do NOT include inline content. Let the router's `<Outlet />` render the content:

```tsx
// ✅ Correct — navigation tabs with label-only (no inline content)
<IgrTabs onChange={handleTabChange}>
  <IgrTab label="Dashboard" selected={location.pathname === '/dashboard'} />
  <IgrTab label="Orders" selected={location.pathname === '/orders'} />
</IgrTabs>
<Outlet />

// ❌ Wrong — inline content creates unwanted space when used for navigation
<IgrTabs>
  <IgrTab label="Dashboard">
    <p>This content will show and take up space!</p>  {/* Don't do this for navigation */}
  </IgrTab>
  <IgrTab label="Orders">
    <p>This content will show and take up space!</p>  {/* Don't do this for navigation */}
  </IgrTab>
</IgrTabs>
```

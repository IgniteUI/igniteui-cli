# Charts, Gauges, Maps & Grid Lite

## Module Registration

> **⚠️ IMPORTANT:** Unlike core UI components (from `igniteui-react`), chart, gauge, and map components from `igniteui-react-charts`, `igniteui-react-gauges`, and `igniteui-react-maps` **require explicit module registration** before use. You must import the corresponding `*Module` class and call `.register()` at the module level (outside the component function).
>
> **Grid Lite** (`IgrGridLite` from `igniteui-react/grid-lite`) is a React wrapper component that works like any other React component — no `.register()` needed, but requires both `igniteui-react` and `igniteui-grid-lite` packages installed.

### Registration Syntax

```tsx
import { IgrCategoryChart, IgrCategoryChartModule } from 'igniteui-react-charts';

// ⚠️ REQUIRED — register the module before using the component
IgrCategoryChartModule.register();
```

### Common Module Registrations

| Component | Module Import | Registration |
|---|---|---|
| `IgrCategoryChart` | `IgrCategoryChartModule` | `IgrCategoryChartModule.register()` |
| `IgrPieChart` | `IgrPieChartModule` | `IgrPieChartModule.register()` |
| `IgrFinancialChart` | `IgrFinancialChartModule` | `IgrFinancialChartModule.register()` |
| `IgrRadialGauge` | `IgrRadialGaugeModule` | `IgrRadialGaugeModule.register()` |
| `IgrLinearGauge` | `IgrLinearGaugeModule` | `IgrLinearGaugeModule.register()` |
| `IgrGeographicMap` | `IgrGeographicMapModule` | `IgrGeographicMapModule.register()` |
| `IgrGridLite` | (no registration needed) | N/A — works like standard React component |

## Container Sizing (REQUIRED)

> **⚠️ CRITICAL:** Charts, gauges, maps, and Grid Lite **require an explicit-sized container** to render. They inherit their dimensions from the parent element — if the parent has no height/width, the component will not be visible. Always wrap these components in a container with explicit `min-width`, `min-height`, or `flex-grow` styling.

```css
/* Chart container CSS */
.chart-container {
  min-width: 400px;
  min-height: 300px;
  flex-grow: 1;
  flex-basis: 0;
}

/* Ensure the chart fills its container */
.chart-container > * {
  height: 100%;
  width: 100%;
}
```

## Complete Chart Example

```tsx
import { IgrCategoryChart, IgrCategoryChartModule } from 'igniteui-react-charts';
import styles from './dashboard-view.module.css';

// Register the chart module (required, called once at module level)
IgrCategoryChartModule.register();

export default function DashboardView() {
  const salesData = [
    { month: 'Jan', revenue: 12500 },
    { month: 'Feb', revenue: 18200 },
    { month: 'Mar', revenue: 15800 },
  ];

  return (
    <div className={styles['chart-container']}>
      <IgrCategoryChart
        dataSource={salesData}
        chartType="column"
        xAxisTitle="Month"
        yAxisTitle="Revenue ($)"
      />
    </div>
  );
}
```

```css
/* dashboard-view.module.css */
.chart-container {
  min-width: 400px;
  min-height: 300px;
  flex-grow: 1;
  flex-basis: 0;
}
.chart-container > * {
  height: 100%;
  width: 100%;
}
```

## Complete Grid Lite Example

> **⚠️ IMPORTANT:** Grid Lite (`IgrGridLite` from `igniteui-react/grid-lite`) requires installing both `igniteui-react` and `igniteui-grid-lite` packages. It's a React wrapper component (uses `Igr` prefix) and works like any standard React component — no `.register()` needed.

**Installation:**
```bash
npm install igniteui-react igniteui-grid-lite
```

**Usage:**
```tsx
import { IgrGridLite } from 'igniteui-react/grid-lite';
import { useGetCustomers } from '../hooks/northwind-hooks';
import styles from './master-view.module.css';

export default function MasterView() {
  const { northwindCustomers } = useGetCustomers();

  return (
    <div className={styles['grid-lite']}>
      <IgrGridLite data={northwindCustomers} />
    </div>
  );
}
```

```css
/* master-view.module.css */
.grid-lite {
  min-width: 400px;
  min-height: 220px;
  flex-grow: 1;
  flex-basis: 0;
}
```

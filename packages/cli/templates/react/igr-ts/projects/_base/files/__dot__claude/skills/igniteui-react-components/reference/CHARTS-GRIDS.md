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
| `IgrDataChart` | `IgrDataChartCoreModule` + category/annotation modules (see [Complete Data Chart Example](#complete-data-chart-example)) | Multiple `.register()` calls required |
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

## Complete Data Chart Example

> **⚠️ IMPORTANT:** `IgrDataChart` requires registering **multiple modules** depending on the series type used. For bar charts, register the modules shown below. If you miss any module, the chart or axis types will silently fail to render.

### Module Registration for Bar Charts

```tsx
import {
  IgrLegendModule,
  IgrDataChartCoreModule,
  IgrDataChartCategoryCoreModule,
  IgrDataChartCategoryModule,
  IgrDataChartInteractivityModule,
  IgrDataChartVerticalCategoryModule,
  IgrDataChartAnnotationModule,
} from 'igniteui-react-charts';

// Register all required modules once at module level (outside any component)
IgrLegendModule.register();
IgrDataChartCoreModule.register();
IgrDataChartCategoryCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartVerticalCategoryModule.register();
IgrDataChartAnnotationModule.register();
```

| Module | Purpose |
|---|---|
| `IgrDataChartCoreModule` | Core chart infrastructure |
| `IgrDataChartCategoryCoreModule` | Base for category series |
| `IgrDataChartCategoryModule` | Column, Line, Area, Spline etc. |
| `IgrDataChartVerticalCategoryModule` | **Bar series** (horizontal bars) |
| `IgrDataChartInteractivityModule` | Mouse hover, selection |
| `IgrDataChartAnnotationModule` | Tooltip layers, callout layers |
| `IgrLegendModule` | `IgrLegend` component |

### Axis Choice for Bar Charts

| Chart Orientation | Category Axis | Value Axis |
|---|---|---|
| Bar (horizontal) | `IgrCategoryYAxis` | `IgrNumericXAxis` |
| Column (vertical) | `IgrCategoryXAxis` | `IgrNumericYAxis` |

> **Bar charts are horizontal** — categories go on the Y-axis and numeric values on the X-axis. This is the opposite of column charts.

### Complete Bar Chart Component (Multiple Series)

```tsx
import { useRef } from 'react';
import {
  IgrLegendModule,
  IgrDataChartCoreModule,
  IgrDataChartCategoryCoreModule,
  IgrDataChartCategoryModule,
  IgrDataChartInteractivityModule,
  IgrDataChartVerticalCategoryModule,
  IgrDataChartAnnotationModule,
  IgrLegend,
  IgrDataChart,
  IgrCategoryYAxis,
  IgrNumericXAxis,
  IgrCategoryHighlightLayer,
  IgrBarSeries,
  IgrDataToolTipLayer,
} from 'igniteui-react-charts';
import styles from './bar-chart-view.module.css';

// Register all required modules once at module level
IgrLegendModule.register();
IgrDataChartCoreModule.register();
IgrDataChartCategoryCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartVerticalCategoryModule.register();
IgrDataChartAnnotationModule.register();

interface MovieFranchise {
  franchise: string;
  totalRevenue: number;   // total box office in billions USD
  highestGrossing: number; // highest single film in billions USD
}

const movieData: MovieFranchise[] = [
  { franchise: 'Marvel Universe', totalRevenue: 22.55, highestGrossing: 2.80 },
  { franchise: 'Star Wars',       totalRevenue: 10.32, highestGrossing: 2.07 },
  { franchise: 'Harry Potter',    totalRevenue:  9.19, highestGrossing: 1.34 },
  { franchise: 'Avengers',        totalRevenue:  7.76, highestGrossing: 2.80 },
  { franchise: 'Spider Man',      totalRevenue:  7.22, highestGrossing: 1.28 },
  { franchise: 'James Bond',      totalRevenue:  7.12, highestGrossing: 1.11 },
];

export default function BarChartView() {
  const legendRef = useRef<IgrLegend>(null);

  return (
    <div className={styles['chart-wrapper']}>
      <h3 className={styles['legend-title']}>Highest Grossing Movie Franchises</h3>

      {/* Legend must be rendered before the chart so the ref is populated */}
      <IgrLegend ref={legendRef} orientation="Horizontal" />

      <div className={styles['chart-container']}>
        <IgrDataChart legend={legendRef.current ?? undefined}>
          {/*
           * IgrCategoryYAxis  — category axis for horizontal bar charts.
           * - label:          field name that supplies the axis labels.
           * - dataSource:     the data array (required on the axis for bar charts).
           * - isInverted:     renders top-to-bottom instead of bottom-to-top.
           * - gap / overlap:  control bar spacing (gap) and multi-series overlap.
           */}
          <IgrCategoryYAxis
            name="yAxis"
            label="franchise"
            dataSource={movieData}
            isInverted={true}
            gap={0.5}
            overlap={-0.1}
            useEnhancedIntervalManagement={true}
            enhancedIntervalPreferMoreCategoryLabels={true}
          />

          {/* IgrNumericXAxis — value axis; start at 0 per bar chart best practices */}
          <IgrNumericXAxis
            name="xAxis"
            title="Billions of U.S. Dollars"
          />

          {/* Highlight the hovered category row across all series */}
          <IgrCategoryHighlightLayer name="categoryHighlight" />

          {/* First series — total franchise revenue */}
          <IgrBarSeries
            name="totalRevenueSeries"
            xAxisName="xAxis"
            yAxisName="yAxis"
            title="Total Revenue of Franchise"
            valueMemberPath="totalRevenue"
            dataSource={movieData}
            showDefaultTooltip={true}
            isTransitionInEnabled={true}
            isHighlightingEnabled={true}
          />

          {/* Second series — highest grossing single film */}
          <IgrBarSeries
            name="highestGrossingSeries"
            xAxisName="xAxis"
            yAxisName="yAxis"
            title="Highest Grossing Movie in Series"
            valueMemberPath="highestGrossing"
            dataSource={movieData}
            showDefaultTooltip={true}
            isTransitionInEnabled={true}
            isHighlightingEnabled={true}
          />

          {/* Rich tooltip layer — shows all series values on hover */}
          <IgrDataToolTipLayer name="tooltips" />
        </IgrDataChart>
      </div>
    </div>
  );
}
```

```css
/* bar-chart-view.module.css */
.chart-wrapper {
  display: flex;
  flex-direction: column;
  min-width: 500px;
}

.legend-title {
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5rem;
}

.chart-container {
  min-height: 400px;
  flex-grow: 1;
  flex-basis: 0;
}

/* Make the chart fill its container */
.chart-container > * {
  height: 100%;
  width: 100%;
}
```

### Key Props Reference for `IgrBarSeries`

| Prop | Type | Description |
|---|---|---|
| `name` | `string` | Unique identifier — **required** when referencing the series from other elements |
| `xAxisName` | `string` | Must match the `name` of an `IgrNumericXAxis` declared in the same chart |
| `yAxisName` | `string` | Must match the `name` of an `IgrCategoryYAxis` declared in the same chart |
| `valueMemberPath` | `string` | Field name in the data object that holds the bar length value |
| `dataSource` | `any[]` | The data array — can differ per series for independent datasets |
| `title` | `string` | Series label shown in the legend |
| `isTransitionInEnabled` | `boolean` | Animates bars on initial render |
| `isHighlightingEnabled` | `boolean` | Dims other series when one is hovered |
| `showDefaultTooltip` | `boolean` | Shows a simple built-in tooltip (use `IgrDataToolTipLayer` for richer output) |

### Available Bar Chart Variants

| Variant | Component | Module |
|---|---|---|
| Bar (horizontal) | `IgrBarSeries` | `IgrDataChartVerticalCategoryModule` |
| Stacked Bar | `IgrStackedBarSeries` + `IgrStackedFragmentSeries` | `IgrDataChartStackedModule` |
| Stacked 100% Bar | `IgrStacked100BarSeries` + `IgrStackedFragmentSeries` | `IgrDataChartStackedModule` |

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
      <IgrGridLite data={northwindCustomers} autoGenerate={true} />
    </div>
  );
}
```

```css
/* master-view.module.css */
.grid-lite {
  min-width: 400px;
  height: 600px;
  flex-grow: 1;
  flex-basis: 0;
}
```

## Grid Lite Example with Column Configurations and Templates

Use `IgrGridLiteColumn` to define columns explicitly with typed `dataType` and optional `cellTemplate` for custom rendering. Set `autoGenerate={false}` (or omit it) when providing explicit columns.

```tsx
import { IgrGridLite, IgrGridLiteColumn, type IgrCellContext } from 'igniteui-react/grid-lite';
import styles from './order-list.module.css';

interface Order {
  id: number;
  customer: string;
  total: number;
  date: Date;
  status: 'pending' | 'shipped' | 'delivered';
}

const orders: Order[] = [
  { id: 1, customer: 'Alice', total: 149.99, date: new Date('2024-03-01'), status: 'delivered' },
  { id: 2, customer: 'Bob', total: 89.50, date: new Date('2024-03-10'), status: 'shipped' },
  { id: 3, customer: 'Carol', total: 220.00, date: new Date('2024-03-15'), status: 'pending' },
];

// Simple cell templates — render JSX based on the cell value or row data
const currencyTemplate = (ctx: IgrCellContext<Order>) => (
  <span>${(ctx.value as number).toFixed(2)}</span>
);

const dateTemplate = (ctx: IgrCellContext<Order>) => (
  <span>${(ctx.value as Date).toLocaleDateString()}</span>
);

const statusTemplate = (ctx: IgrCellContext<Order>) => {
  const colors: Record<Order['status'], string> = {
    pending: 'orange',
    shipped: 'blue',
    delivered: 'green',
  };
  return <span style={{ color: colors[ctx.value as Order['status']] }}>{ctx.value}</span>;
};

export default function OrderList() {
  return (
    <div className={styles['grid-lite']}>
      <IgrGridLite data={orders}>
        {/* dataType ensures correct sorting and filtering behavior */}
        <IgrGridLiteColumn field="id" dataType="number" />
        <IgrGridLiteColumn field="customer" dataType="string" />
        {/* Columns with custom cell templates */}
        <IgrGridLiteColumn field="date" cellTemplate={dateTemplate} />
        <IgrGridLiteColumn field="total" dataType="number" cellTemplate={currencyTemplate} />
        <IgrGridLiteColumn field="status" dataType="string" cellTemplate={statusTemplate} />
      </IgrGridLite>
    </div>
  );
}
```

```css
/* order-list.module.css */
.grid-lite {
  min-width: 400px;
  height: 600px;
  flex-grow: 1;
  flex-basis: 0;
}
```

> **Column configuration notes:**
> - `dataType` accepts `"string"` (default), `"number"`, `"boolean"` — set it explicitly so sorting and filtering work correctly for each column type.
> - `cellTemplate` receives an `IgrCellContext<T>` where `ctx.value` is the cell value and `ctx.row.data` is the full row object.
> - When using `cellTemplate`, define the function outside the component (or memoize it) to avoid unnecessary re-renders.

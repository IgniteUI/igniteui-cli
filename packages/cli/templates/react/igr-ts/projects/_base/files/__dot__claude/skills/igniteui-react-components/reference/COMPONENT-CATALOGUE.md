# Component Catalogue

## Available Packages

Ignite UI for React is distributed across several packages depending on your needs:

| Package | License | Install | Best For |
|---|---|---|---|
| [`igniteui-react`](https://www.npmjs.com/package/igniteui-react) | MIT | `npm install igniteui-react` | General UI components (inputs, layouts, notifications, scheduling) |
| [`igniteui-grid-lite`](https://www.npmjs.com/package/igniteui-grid-lite) | MIT | `npm install igniteui-react igniteui-grid-lite` | Lightweight grid (Grid Lite) — requires both packages, import from `igniteui-react/grid-lite` |
| [`igniteui-react-grids`](https://www.npmjs.com/package/igniteui-react-grids) | Commercial | `npm install igniteui-react-grids` (trial) | Advanced data grids (Data Grid, Tree Grid, Hierarchical Grid, Pivot Grid) |
| [`igniteui-react-charts`](https://www.npmjs.com/package/igniteui-react-charts) | Commercial | `npm install igniteui-react-charts` (trial) | Charts (Category, Financial, Pie, Scatter, etc.) |
| [`igniteui-react-maps`](https://www.npmjs.com/package/igniteui-react-maps) | Commercial | `npm install igniteui-react-maps` (trial) | Geographic maps |
| [`igniteui-react-gauges`](https://www.npmjs.com/package/igniteui-react-gauges) | Commercial | `npm install igniteui-react-gauges` (trial) | Radial and linear gauges |
| [`reveal-sdk-wrappers-react`](https://www.npmjs.com/package/reveal-sdk-wrappers-react) | Commercial | `npm install reveal-sdk-wrappers-react` | Embedded BI dashboards (Reveal SDK) |

> **Note:** The lightweight Grid Lite (`IgrGridLite` from `igniteui-react/grid-lite`) requires installing both `igniteui-react` and `igniteui-grid-lite` packages. It's a React wrapper component (uses `Igr` prefix) that works like any other React component — no `.register()` needed. See [CHARTS-GRIDS.md](./CHARTS-GRIDS.md) for setup details.

---

## Component Catalogue by UI Pattern

Use the tables below to map a UI need to the right React component. All components use the **`Igr`** prefix.

### Inputs & Forms

| UI Need | Component | Import | Docs |
|---|---|---|---|
| Text field / text input | `IgrInput` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/input) |
| Multi-line text | `IgrTextarea` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/text-area) |
| Checkbox | `IgrCheckbox` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/checkbox) |
| On/off toggle | `IgrSwitch` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/switch) |
| Single choice from a list | `IgrRadio` / `IgrRadioGroup` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/radio) |
| Star / score rating | `IgrRating` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/rating) |
| Formatted / masked text input | `IgrMaskInput` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/mask-input) |
| Date and time input | `IgrDateTimeInput` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/date-time-input) |
| File upload | `IgrFileInput` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/file-input) |
| Simple dropdown / select | `IgrSelect` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/select) |
| Searchable dropdown, single or multi-select | `IgrCombo` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/combo/overview) |
| Grouped toggle buttons | `IgrButtonGroup` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/button-group) |
| Range / numeric slider | `IgrSlider` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/slider) |
| Range slider (two handles) | `IgrRangeSlider` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/slider) |

### Buttons & Actions

| UI Need | Component | Import | Docs |
|---|---|---|---|
| Standard clickable button | `IgrButton` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/button) |
| Icon-only button | `IgrIconButton` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/icon-button) |
| Click ripple effect | `IgrRipple` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/ripple) |
| Removable tag / filter chip | `IgrChip` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/chip) |

### Scheduling & Date Pickers

| UI Need | Component | Import | Docs |
|---|---|---|---|
| Full calendar view | `IgrCalendar` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/scheduling/calendar) |
| Date picker (popup calendar) | `IgrDatepicker` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/scheduling/date-picker) |
| Date range selection | `IgrDateRangePicker` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/scheduling/date-range-picker) |

### Notifications & Feedback

| UI Need | Component | Import | Docs |
|---|---|---|---|
| Brief auto-dismiss notification | `IgrToast` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/notifications/toast) |
| Actionable dismissible notification bar | `IgrSnackbar` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/notifications/snackbar) |
| Persistent status banner | `IgrBanner` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/notifications/banner) |
| Modal confirmation or content dialog | `IgrDialog` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/notifications/dialog) |
| Tooltip on hover | `IgrTooltip` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/tooltip) |
| Small count / status indicator | `IgrBadge` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/badge) |

### Progress Indicators

| UI Need | Component | Import | Docs |
|---|---|---|---|
| Horizontal progress bar | `IgrLinearProgress` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/linear-progress) |
| Circular / spinner progress | `IgrCircularProgress` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/circular-progress) |

### Layouts & Containers

| UI Need | Component | Import | Docs |
|---|---|---|---|
| Generic content card | `IgrCard` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/layouts/card) |
| User avatar / profile image | `IgrAvatar` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/layouts/avatar) |
| Icon display | `IgrIcon` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/layouts/icon) |
| Horizontal or vertical divider | `IgrDivider` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/layouts/divider) |
| Collapsible section | `IgrExpansionPanel` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/layouts/expansion-panel) |
| Multiple collapsible sections | `IgrAccordion` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/layouts/accordion) |
| Tabbed content panels (with inline content) | `IgrTabs` (content in `IgrTab`) | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/layouts/tabs) |
| Image / content slideshow | `IgrCarousel` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/layouts/carousel) |
| Multi-step wizard / onboarding flow | `IgrStepper` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/layouts/stepper) |
| Resizable, draggable dashboard tiles | `IgrTileManager` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/layouts/tile-manager) |

### Navigation

| UI Need | Component | Import | Docs |
|---|---|---|---|
| Top application bar / toolbar | `IgrNavbar` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/menus/navbar) |
| Side navigation drawer | `IgrNavDrawer` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/menus/navigation-drawer) |
| Tab-based navigation (with router) | `IgrTabs` (label-only, no content) | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/layouts/tabs) |
| Context menu / actions dropdown | `IgrDropdown` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/inputs/dropdown) |

### Lists & Data Display

| UI Need | Component | Import | Docs |
|---|---|---|---|
| Simple scrollable list | `IgrList` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/grids/list) |
| Hierarchical / tree data | `IgrTree` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/grids/tree) |
| Tabular data (MIT, lightweight) | `IgrGridLite` | `igniteui-react/grid-lite` (requires both `igniteui-react` and `igniteui-grid-lite` packages) | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/grid-lite/overview) |
| Full-featured tabular data grid | `IgrDataGrid` | `igniteui-react-grids` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/grids/grid/overview) |
| Nested / master-detail grid | `IgrHierarchicalGrid` | `igniteui-react-grids` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/grids/hierarchical-grid/overview) |
| Parent-child relational tree grid | `IgrTreeGrid` | `igniteui-react-grids` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/grids/tree-grid/overview) |
| Cross-tabulation / BI pivot table | `IgrPivotGrid` | `igniteui-react-grids` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/grids/pivot-grid/overview) |

### Charts & Data Visualization

> **⚠️ IMPORTANT:** Chart, gauge, and map components require **explicit module registration** and a **sized container**. Import the `*Module` class and call `.register()` at module level, and wrap the component in a container with explicit `min-width`/`min-height` or `flex-grow`. See [CHARTS-GRIDS.md](./CHARTS-GRIDS.md) for details.

| UI Need | Component | Module Registration | Import | Docs |
|---|---|---|---|---|
| Category / bar / line chart | `IgrCategoryChart` | `IgrCategoryChartModule.register()` | `igniteui-react-charts` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/charts/chart-overview) |
| Pie / doughnut chart | `IgrPieChart` | `IgrPieChartModule.register()` | `igniteui-react-charts` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/charts/chart-overview) |
| Financial / stock chart | `IgrFinancialChart` | `IgrFinancialChartModule.register()` | `igniteui-react-charts` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/charts/chart-overview) |
| Radial gauge | `IgrRadialGauge` | `IgrRadialGaugeModule.register()` | `igniteui-react-gauges` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/gauges/radial-gauge) |
| Linear gauge | `IgrLinearGauge` | `IgrLinearGaugeModule.register()` | `igniteui-react-gauges` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/gauges/linear-gauge) |
| Geographic map | `IgrGeographicMap` | `IgrGeographicMapModule.register()` | `igniteui-react-maps` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/maps/geographic-map) |

### Conversational / AI

| UI Need | Component | Import | Docs |
|---|---|---|---|
| Chat / AI assistant message thread | `IgrChat` | `igniteui-react` | [Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/interactivity/chat) |

### Embedded Analytics / BI Dashboards (Reveal SDK)

| UI Need | Component | Import | Docs |
|---|---|---|---|
| Embedded BI dashboard viewer | `RvRevealView` | `reveal-sdk-wrappers-react` | [Docs](https://help.revealbi.io/web/getting-started-react/) |

> **Note:** Reveal SDK is a companion product for embedding interactive dashboards and data visualizations. It uses separate packages (`reveal-sdk-wrappers-react`, `reveal-sdk-wrappers`) and requires a backend Reveal server URL. See [REVEAL-SDK.md](./REVEAL-SDK.md) for setup instructions and [../igniteui-react-customize-theme/SKILL.md](../igniteui-react-customize-theme/SKILL.md) for syncing Reveal's theme with Ignite UI theming tokens.

---

## Step-by-Step: Choosing Components for a UI

Follow these steps when a user describes a UI requirement:

### Step 1 — Identify UI patterns

Break the described UI into atomic patterns. Examples:
- "A booking form" → date input, text inputs, button, maybe a calendar picker
- "An admin dashboard" → navbar, nav drawer, cards, data grid, charts
- "A notification center" → snackbar or toast, badge, list
- "A settings page" → tabs or accordion, switch, input, select, button

### Step 2 — Map patterns to components

Use the **Component Catalogue** tables above to find matching components. When in doubt:

| If the user needs… | Prefer… | Over… |
|---|---|---|
| Simple static list | `IgrList` | Data Grid |
| Basic dropdown | `IgrSelect` | `IgrCombo` |
| Searchable or multi-select dropdown | `IgrCombo` | `IgrSelect` |
| Tabular data with basic display | `IgrGridLite` (grid-lite) | `IgrDataGrid` (commercial) |
| Tabular data, advanced features needed | `IgrDataGrid` | `IgrGridLite` (grid-lite) |
| Single dismissible message | `IgrToast` | `IgrSnackbar` |
| Message requiring user action | `IgrSnackbar` | `IgrToast` |
| Collapsible single section | `IgrExpansionPanel` | `IgrAccordion` |
| Multiple collapsible sections | `IgrAccordion` | `IgrExpansionPanel` |
| Stepped wizard UI | `IgrStepper` | `IgrTabs` |
| Content tabs / view switching (inline content) | `IgrTabs` (content in `IgrTab`) | `IgrStepper` |
| Tab-based navigation (with React Router) | `IgrTabs` (label-only) | `IgrTabs` (with content) |

### Step 3 — Check the package

Confirm which package provides the component:

- **MIT components** (inputs, layout, notifications, scheduling, chat) → `igniteui-react`
- **Lightweight grid** (Grid Lite) → `igniteui-react/grid-lite` *(MIT, requires both `igniteui-react` and `igniteui-grid-lite` packages)*
- **Advanced grids** (Data Grid, Tree Grid, Hierarchical Grid, Pivot Grid) → `igniteui-react-grids` *(commercial)*
- **Charts** → `igniteui-react-charts` *(commercial)*
- **Maps** → `igniteui-react-maps` *(commercial)*
- **Gauges** → `igniteui-react-gauges` *(commercial)*

### Step 4 — Link to official resources

Always direct the user to the official documentation linked in the tables above. Key entry points:

- **Getting started**: [Ignite UI for React Docs](https://www.infragistics.com/products/ignite-ui-react/react/components/general-getting-started)
- **React examples**: [https://github.com/IgniteUI/igniteui-react-examples](https://github.com/IgniteUI/igniteui-react-examples)
- **npm package**: [https://www.npmjs.com/package/igniteui-react](https://www.npmjs.com/package/igniteui-react)
- **GitHub repository**: [https://github.com/IgniteUI/igniteui-react](https://github.com/IgniteUI/igniteui-react)

### Step 5 — Provide a starter code snippet

Once components are identified, give the user a minimal working React snippet. Example for an admin dashboard shell:

```tsx
import { IgrNavbar, IgrNavDrawer, IgrNavDrawerItem, IgrCard, IgrCardHeader, IgrCardContent } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

function Dashboard() {
  return (
    <>
      <IgrNavbar>
        <h1>My Dashboard</h1>
      </IgrNavbar>

      <IgrNavDrawer open>
        <IgrNavDrawerItem>
          <span slot="icon">🏠</span>
          <span slot="content">Home</span>
        </IgrNavDrawerItem>
        <IgrNavDrawerItem>
          <span slot="icon">⚙️</span>
          <span slot="content">Settings</span>
        </IgrNavDrawerItem>
      </IgrNavDrawer>

      <main>
        <IgrCard>
          <IgrCardHeader>
            <h3 slot="title">Summary</h3>
          </IgrCardHeader>
          <IgrCardContent>Dashboard content here</IgrCardContent>
        </IgrCard>
      </main>
    </>
  );
}
```

---

## Common UI Scenarios → Recommended Component Sets

### Login / Authentication Form

- `IgrInput` — email and password fields
- `IgrCheckbox` — "Remember me"
- `IgrButton` — submit
- `IgrSnackbar` — error/success feedback

### User Profile / Settings Page

- `IgrAvatar` — profile picture
- `IgrTabs` — section navigation (Profile, Security, Notifications)
- `IgrInput` / `IgrTextarea` — editable fields
- `IgrSwitch` — feature toggles
- `IgrSelect` — preference dropdowns
- `IgrButton` — save/cancel actions

### Data Table / Admin List View

- `IgrInput` — search bar
- `IgrCombo` — filter dropdowns
- `IgrGridLite` (grid-lite) or `IgrDataGrid` — tabular data
- `IgrButton` / `IgrIconButton` — actions
- `IgrDialog` — confirm delete modal
- `IgrBadge` — status indicators

### Booking / Reservation Form

- `IgrDateRangePicker` — check-in / check-out
- `IgrInput` — guest details
- `IgrSelect` — room type
- `IgrStepper` — multi-step booking flow
- `IgrButton` — next / confirm
- `IgrToast` — booking confirmation

### Analytics / Reporting Dashboard

- `IgrNavbar` — top bar
- `IgrNavDrawer` — side navigation
- `IgrCard` — KPI summary cards
- `IgrTabs` or `IgrTileManager` — section layout
- `IgrDataGrid` or `IgrPivotGrid` — detailed data tables
- `IgrCategoryChart` — charts (from `igniteui-react-charts`)
- `IgrLinearProgress` / `IgrCircularProgress` — loading indicators

### Master-Detail with Tab Navigation (React Router)

- `IgrNavbar` — top bar
- `IgrTabs` — **navigation only** (label-only, no inline content); each `IgrTab` triggers a route change
- React Router `<Outlet />` — renders the routed child view below the tabs
- Active tab synced to the current route via `selected` prop

> **⚠️ Important — Tabs for navigation vs. tabs for content:**
> - **Tabs as content panels** (`IgrTabs` with content in `IgrTab`): Content is rendered inside each tab. Use when the tab content is inline and does not require routing.
> - **Tabs as navigation** (`IgrTabs` with label-only tabs): Tabs act as route links. The routing outlet (`<Outlet />`) renders the content. **Do NOT add inline content in `IgrTab` in this case** — use only the `label` prop or `slot="label"`. See [JSX-PATTERNS.md](./JSX-PATTERNS.md) for a full React Router example.

---

## Searching the Documentation

If you are unsure about a component or need more information:

1. **Browse the docs** at `https://www.infragistics.com/products/ignite-ui-react/react/components/` — the left sidebar groups components by category
2. **Use the naming convention**: React components use the `Igr` prefix followed by PascalCase name (e.g., `IgrDateRangePicker`, `IgrNavDrawer`). The docs URL typically uses kebab-case: `components/scheduling/date-range-picker`
3. **Check the examples repo** at [igniteui-react-examples](https://github.com/IgniteUI/igniteui-react-examples) for working sample applications

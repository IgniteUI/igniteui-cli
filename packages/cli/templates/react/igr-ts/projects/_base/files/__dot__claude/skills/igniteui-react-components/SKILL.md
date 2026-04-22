---
name: igniteui-react-components
description: This skill identifies the right Ignite UI for React components for any UI pattern and covers installing, importing, and using them — including JSX patterns, event handling, refs, forms, and TypeScript. Use this when choosing components, setting up a React project, writing component JSX, handling events, or integrating with React state and form libraries.
user-invocable: true
---

# Ignite UI for React Components

This skill covers everything from identifying the right component for a UI requirement to installing, setting up, and using Ignite UI for React components — including JSX patterns, event handling, refs, controlled/uncontrolled form components, and TypeScript.

## Before You Answer

- Do not guess package names or import paths from memory.
- First identify the component family, then read the relevant reference files from the Content Guide below.
- Check `package.json` and keep public or licensed package names consistent.
- If the required package is not present in `package.json`, add or install the correct Ignite UI dependency first. Absence from `package.json` does not mean the package is invalid.

### Package Routing

| Component family | Install packages | Import from |
|---|---|---|
| Core UI components | `igniteui-react` | `igniteui-react` |
| Advanced grids | `igniteui-react-grids` (trial) `@infragistics/igniteui-react-grids` (licensed) | `igniteui-react-grids` |
| Grid Lite | `igniteui-react`, `igniteui-grid-lite` | `igniteui-react`, `igniteui-grid-lite` |
| Charts | `igniteui-react-charts` (trial) `@infragistics/igniteui-react-charts` (licensed) | `igniteui-react-charts` |
| Gauges | `igniteui-react-gauges` (trial) `@infragistics/igniteui-react-gauges` (licensed) | `igniteui-react-gauges` |
| Maps | `igniteui-react-maps` (trial) `@infragistics/igniteui-react-maps` (licensed) | `igniteui-react-maps` |

## Example Usage

- "What component should I use to display a list of items with actions?"
- "I need a date picker for a booking form in React"
- "Build a dashboard layout with cards and a data grid"
- "What's the best component for a navigation sidebar?"
- "I need a searchable dropdown with multi-select"
- "How do I install Ignite UI for React?"
- "Set up igniteui-react in my project"
- "How do I handle events on IgrCombo?"
- "How do I use IgrInput with React Hook Form?"
- "Show me how to use refs with IgrDialog"
- "What TypeScript types should I use for IgrButton props?"
- "How do I pass children vs slots to Ignite UI components?"

## Related Skills

- [igniteui-react-customize-theme](../igniteui-react-customize-theme/SKILL.md) — Theme and style components
- [igniteui-react-optimize-bundle-size](../igniteui-react-optimize-bundle-size/SKILL.md) — Reduce bundle size

## When to Use

- Deciding which component fits a UI requirement
- User describes a UI pattern and needs a matching component name
- User wants to explore what components are available
- Setting up Ignite UI for React in a new or existing project
- Writing JSX that uses Ignite UI components
- Handling events from Ignite UI components
- Integrating components with React state or form libraries
- Using refs to call imperative methods on components
- Working with TypeScript prop types

---

## Content Guide

This skill is organized into focused reference files. Load the appropriate file for the situation:

| Topic | File | When to Use |
|---|---|---|
| Component Catalogue | [COMPONENT-CATALOGUE.md](./reference/COMPONENT-CATALOGUE.md) | Mapping UI patterns to components, available packages, common UI scenarios |
| Installation & Setup | [INSTALLATION.md](./reference/INSTALLATION.md) | Setting up packages, importing theme CSS, Next.js setup |
| JSX Patterns | [JSX-PATTERNS.md](./reference/JSX-PATTERNS.md) | Props, children, slots, IgrTabs content vs navigation |
| Event Handling | [EVENT-HANDLING.md](./reference/EVENT-HANDLING.md) | Event props, CustomEvent types, common events |
| Refs & Forms | [REFS-FORMS.md](./reference/REFS-FORMS.md) | useRef, controlled/uncontrolled forms, React Hook Form |
| Charts, Gauges, Maps & Grid Lite | [CHARTS-GRIDS.md](./reference/CHARTS-GRIDS.md) | Module registration, container sizing |
| Troubleshooting | [TROUBLESHOOTING.md](./reference/TROUBLESHOOTING.md) | Common issues and solutions |

---

## Quick Start (Core UI Example)

This example uses the core UI package `igniteui-react`. For grids, Grid Lite, charts, gauges, and maps, use the package routing table above first.

### 1. Install Core UI Package

```bash
npm install igniteui-react
```

### 2. Import Theme CSS (REQUIRED)

```tsx
// main.tsx
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

> **CRITICAL:** Without the theme CSS, components will render without styles and icons will be broken. See [INSTALLATION.md](./reference/INSTALLATION.md) for all available themes and setup.

### 3. Use Components

```tsx
import { IgrButton, IgrInput } from 'igniteui-react';

function App() {
  return (
    <div>
      <IgrInput label="Name" />
      <IgrButton><span>Submit</span></IgrButton>
    </div>
  );
}
```

> **No `defineComponents()` needed.** React wrappers auto-register. See [CHARTS-GRIDS.md](./reference/CHARTS-GRIDS.md) for exceptions (charts, gauges, maps).

---

## Key Concepts

### Choosing the Right Component

Use [COMPONENT-CATALOGUE.md](./reference/COMPONENT-CATALOGUE.md) to map any UI need to the right `Igr*` component and package. For quick guidance:

- **MIT package** (`igniteui-react`) — inputs, buttons, layout, navigation, notifications, scheduling, AI chat
- **Lightweight grid** (MIT) — `IgrGridLite` from `igniteui-react/grid-lite` (requires both `igniteui-react` and `igniteui-grid-lite`)
- **Commercial** — `igniteui-react-grids` (advanced grids), `igniteui-react-charts`, `igniteui-react-gauges`, `igniteui-react-maps`

### Theme CSS Import

- **Always import theme CSS** before using components. **For grids**, also import `igniteui-react-grids/grids/themes/...`
- see [INSTALLATION.md](./reference/INSTALLATION.md)

### JSX Patterns

- Use props just like any React component
- Use `slot` attribute for named slots: `<span slot="icon">📊</span>`
- See [JSX-PATTERNS.md](./reference/JSX-PATTERNS.md)

### IgrTabs: Content vs Navigation

- **Content panels**: Use `IgrTab` with inline content (label via `label` prop or `slot="label"`)
- **Navigation (router)**: Use **only `IgrTab`** with label-only (no inline content)
- See [JSX-PATTERNS.md](./reference/JSX-PATTERNS.md)

### Events

- Events are `CustomEvent` objects, not React `SyntheticEvent`
- Access data via `e.target` or `e.detail`
- See [EVENT-HANDLING.md](./reference/EVENT-HANDLING.md)

### Refs

- Use `useRef<IgrDialog>(null)` with the component type:
- See [REFS-FORMS.md](./reference/REFS-FORMS.md)

### Charts, Gauges, Maps & Grid Lite

- **Charts/Gauges/Maps require explicit registration**: `IgrCategoryChartModule.register()`
- **All require sized container**: `min-width`, `min-height`, or `flex-grow`
- **Grid Lite** requires both `igniteui-react` and `igniteui-grid-lite` packages, import from `igniteui-react/grid-lite`
- See [CHARTS-GRIDS.md](./reference/CHARTS-GRIDS.md)

---

## Best Practices

1. **Use the package routing table first**
2. **Import theme CSS first** — components need it to render correctly
3. **Register chart/gauge/map modules** — call `.register()` at module level
4. **Wrap charts/gauges/maps in sized containers** — they need explicit dimensions
5. **Use named imports** — enables tree-shaking
6. **Handle events as `CustomEvent`** — not `React.SyntheticEvent`
7. **Use refs sparingly** — prefer declarative props
8. **Check slot names** in the docs

## Additional Resources

- [Ignite UI for React — Getting Started](https://www.infragistics.com/products/ignite-ui-react/react/components/general-getting-started)
- [React Examples Repository](https://github.com/IgniteUI/igniteui-react-examples)
- [npm: igniteui-react](https://www.npmjs.com/package/igniteui-react)
- [@lit/react Documentation](https://lit.dev/docs/frameworks/react/)

# Installation & Setup

## Install the Package

```bash
# Core UI components (MIT)
npm install igniteui-react

# If you need the lightweight grid (MIT)
# Requires BOTH packages - igniteui-react and igniteui-grid-lite
npm install igniteui-react igniteui-grid-lite

# If you need advanced grids (commercial)
npm install igniteui-react-grids

# If you need charts (commercial)
npm install igniteui-react-charts

# If you need gauges (commercial)
npm install igniteui-react-gauges

# If you need maps (commercial)
npm install igniteui-react-maps
```

## Peer Dependencies

`igniteui-react` requires `react` and `react-dom` (v18+ or v19+). These are typically already in your project:

```bash
npm install react react-dom
```

## Import a Theme (REQUIRED)

> **CRITICAL:** Components will render without styles, with broken icons and missing visuals if the theme CSS is not imported. **Always import the theme CSS before using any Ignite UI component.**

Import one theme CSS file in your entry point (`main.tsx`, `index.tsx`, or `App.tsx`). The theme CSS must be imported **in every file that uses Ignite UI components** if your framework does not have a single global entry point (e.g., Next.js — see below).

```tsx
// main.tsx or index.tsx
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

Available themes:

| Import | Theme |
|---|---|
| `igniteui-webcomponents/themes/light/bootstrap.css` | Bootstrap Light |
| `igniteui-webcomponents/themes/dark/bootstrap.css` | Bootstrap Dark |
| `igniteui-webcomponents/themes/light/material.css` | Material Light |
| `igniteui-webcomponents/themes/dark/material.css` | Material Dark |
| `igniteui-webcomponents/themes/light/fluent.css` | Fluent Light |
| `igniteui-webcomponents/themes/dark/fluent.css` | Fluent Dark |
| `igniteui-webcomponents/themes/light/indigo.css` | Indigo Light |
| `igniteui-webcomponents/themes/dark/indigo.css` | Indigo Dark |

Grid theme CSS files follow the same pattern under `igniteui-react-grids/grids/themes/`.

**For grids**, you **must also** import the grid theme CSS. Without it, the grid will be missing styles and icons will show as placeholders:

```tsx
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
```

## Next.js Setup

In Next.js, there is no single `main.tsx` entry point. Import the theme CSS **in each client component file** that uses Ignite UI components, or in a shared layout component:

```tsx
// app/components/DataTable.tsx
'use client';

import 'igniteui-webcomponents/themes/light/bootstrap.css';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

import { IgrGrid, IgrColumn, IgrPaginator } from 'igniteui-react-grids';

export default function DataTable({ data }: { data: any[] }) {
  return (
    <IgrGrid data={data} autoGenerate={false}>
      <IgrColumn field="name" header="Name" />
      <IgrColumn field="email" header="Email" />
      <IgrPaginator perPage={10} />
    </IgrGrid>
  );
}
```

Alternatively, import themes once in a root layout:

```tsx
// app/layout.tsx
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## Minimal App Example (Vite / CRA)

```tsx
// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

```tsx
// App.tsx
import { IgrButton, IgrInput } from 'igniteui-react';

function App() {
  return (
    <div>
      <IgrInput label="Name" />
      <IgrButton><span>Submit</span></IgrButton>
    </div>
  );
}

export default App;
```

> **No `defineComponents()` needed.** React wrappers auto-register. See [CHARTS-GRIDS.md](./reference/CHARTS-GRIDS.md) for exceptions (charts, gauges, maps).

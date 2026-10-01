---
title: "Virtual Scroll"
description: "The Virtual Scroll is a component that renders only the items in its viewport plus a small buffer, so large lists scroll smoothly."
keywords: "Web Components Virtual Scroll, virtualization, virtual list, large lists, infinite scroll, remote data, Ignite UI for Web Components"
last_updated: "2026-09-25"
license: MIT
mentionedTypes: ["VirtualScroll"]
relatedComponents: ["List", "Grid", "Card"]
llms:
  description: "The Ignite UI for Web Components Virtual Scroll is a component that renders large lists by keeping only the items in its viewport, plus a configurable buffer, in the DOM."
_tocName: Virtual Scroll
---
# Virtual Scroll Component

The Ignite UI for Web Components Virtual Scroll is a component that renders large lists by keeping only the items in its viewport, plus a configurable buffer, in the DOM. The scrollbar still spans the whole collection, so a virtual list of a hundred thousand items scrolls like a regular list.

## Live Demo

```typescript
export type DepartmentVariant = "primary" | "info" | "success" | "warning" | "danger";

export interface Employee {
    id: number;
    name: string;
    initials: string;
    email: string;
    department: string;
    variant: DepartmentVariant;
    bio: string | null;
}

const DEPARTMENTS = ["Engineering", "Design", "Marketing", "Sales", "HR", "Finance", "Legal", "Operations"];
const VARIANTS: DepartmentVariant[] = ["primary", "info", "success", "warning", "danger"];

const FIRST_NAMES = ["Alice", "Bob", "Carol", "David", "Eve", "Frank", "Grace", "Henry", "Iris", "Jack", "Karen", "Leo", "Mia", "Noah", "Olivia", "Paul"];

const LAST_NAMES = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson"];

const BIOS = [
    "Leads a cross-functional team across three time zones and owns the quarterly delivery plan.",
    "Specializes in scalable service architecture.",
    "Passionate about accessible, pixel-perfect user interfaces and design systems that scale across products.",
    "Drives product strategy and stakeholder alignment.",
    "Champions data-driven decision making, runs the weekly metrics review and mentors new analysts."
];

export function createEmployee(index: number): Employee {
    const first = FIRST_NAMES[index % FIRST_NAMES.length];
    const last = LAST_NAMES[Math.floor(index / FIRST_NAMES.length) % LAST_NAMES.length];
    const departmentIndex = index % DEPARTMENTS.length;

    return {
        id: index + 1,
        name: `${first} ${last}`,
        initials: `${first[0]}${last[0]}`,
        email: `${first.toLowerCase()}.${last.toLowerCase()}${index + 1}@example.com`,
        department: DEPARTMENTS[departmentIndex],
        variant: VARIANTS[departmentIndex % VARIANTS.length],
        bio: index % 3 === 0 ? BIOS[index % BIOS.length] : null
    };
}

export function generateEmployees(count: number, startIndex = 0): Employee[] {
    return Array.from({ length: count }, (_, i) => createEmployee(startIndex + i));
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.employees__viewport {
    block-size: 480px;
}
```

## Anatomy

The Web Components Virtual Scroll renders the visible items plus a configurable buffer, and its track preserves the scroll range of the whole collection.

<style>{`
  .virtual-scroll-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .virtual-scroll-anatomy .igd-anatomy__image {
    max-width: 520px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Host:</strong> The scroll container. Its fixed height (width when horizontal) sets how many items are visible.<br />
<strong>2. Track:</strong> A spacer sized to the estimated length of the whole collection, so the scrollbar spans every item.<br />
<strong>3. Content element:</strong> Holds only the rendered items. It starts at the first rendered buffer item, above the viewport, and takes its size from the rendered items.<br />
<strong>4. Item wrapper:</strong> One per rendered item. It hosts the item template and is the box that gets measured.<br />
<strong>5. Over-scan buffer:</strong> The <code>overScan</code> items (2 by default) rendered past each edge of the viewport.</span>

```text
igc-virtual-scroll                            — scrollable viewport
└── [part="virtualization-track"]             — provides the collection's scroll range
    └── [part="virtualization-content"]       — positions the rendered window
        └── div[data-vs-index]                — one wrapper per rendered item; hosts the item template
```

## Getting Started

Set up Ignite UI for Web Components with the [Getting Started](../general-getting-started.md) topic, then register the `IgcVirtualScroll` and give it an item template and data:

```ts
import { defineComponents, IgcVirtualScrollComponent } from 'igniteui-webcomponents';
import type { VirtualScrollItemContext } from 'igniteui-webcomponents';
import { html } from 'lit';

defineComponents(IgcVirtualScrollComponent);

const virtualScroll = document.querySelector('igc-virtual-scroll') as IgcVirtualScrollComponent<Item>;
virtualScroll.itemTemplate = (ctx: VirtualScrollItemContext<Item>) =>
    html`<div class="row">${ctx.index}: ${ctx.value.name}</div>`;
virtualScroll.data = Array.from({ length: 100_000 }, (_, i) => ({ name: `Item ${i}` }));
```

```html
<igc-virtual-scroll style="height: 400px"></igc-virtual-scroll>
```

The Virtual Scroll host needs a fixed height for vertical scrolling or a fixed width for horizontal scrolling. A host that grows with its content renders every item, so the list is not virtualized.

### Prerequisites and Version Compatibility

| Requirement | Value |
| --- | --- |
| Package | `igniteui-webcomponents` (MIT) |
| First release with the component | 7.3.0 |
| Item templates | Lit's `html` tag. `lit` is a dependency of `igniteui-webcomponents`; add it to your own dependencies when you import it directly. |

## Usage

### Item Template

The Virtual Scroll item template receives the item and its position in the whole collection. Use the index and the total count for position-dependent content, such as alternating styles or `aria-posinset` and `aria-setsize`.

Set `itemTemplate` to a function that returns a Lit template. The function receives a `VirtualScrollItemContext` with `value` (the item), `index`, `count`, `isFirst`, and `isLast`. Without an item template, the component renders nothing.

```ts
virtualScroll.itemTemplate = (ctx: VirtualScrollItemContext<Employee>) => html`
    <igc-list-item aria-posinset=${ctx.index + 1} aria-setsize=${ctx.count}>
        <igc-avatar slot="start" shape="circle" initials=${ctx.value.initials}></igc-avatar>
        <span slot="title">${ctx.value.name}</span>
        <span slot="subtitle">${ctx.value.email}</span>
    </igc-list-item>
`;
```

### Data

The Virtual Scroll `data` collection is compared by reference. Assign a new array to update the list; changing the bound array in place, for example with `push`, does not update it.

```ts
virtualScroll.data = [...virtualScroll.data, newEmployee];
```

When `data` changes, the component keeps the measured sizes of the items before the first changed index and measures the rest again when they render. Appending keeps every existing measurement; replacing, filtering, or sorting discards the measurements from the first changed item onwards.

An item keeps its element while its key is in the rendered window. Without `keyFunction` the index is the key, so after a sort, an insert, or a removal the element at an index stays put and shows its new item. Return a stable id from `keyFunction` when items move within `data`:

```ts
virtualScroll.keyFunction = (employee) => employee.id;
```

### Estimated Item Size

The Virtual Scroll `estimatedItemSize` is the size in pixels an item has until it renders and is measured (`50` by default). Items can have different sizes: each measured size replaces the estimate.

Set the estimate close to the average item size so that the first render lands near the real content. Once items are measured, their average replaces the estimate for the items that are not measured yet, so the scrollbar and `scrollToIndex` correct themselves even when the estimate is off.

```html
<igc-virtual-scroll estimated-item-size="80" style="height: 480px"></igc-virtual-scroll>
```

```typescript
export type DepartmentVariant = "primary" | "info" | "success" | "warning" | "danger";

export interface Employee {
    id: number;
    name: string;
    initials: string;
    email: string;
    department: string;
    variant: DepartmentVariant;
    bio: string | null;
}

const DEPARTMENTS = ["Engineering", "Design", "Marketing", "Sales", "HR", "Finance", "Legal", "Operations"];
const VARIANTS: DepartmentVariant[] = ["primary", "info", "success", "warning", "danger"];

const FIRST_NAMES = ["Alice", "Bob", "Carol", "David", "Eve", "Frank", "Grace", "Henry", "Iris", "Jack", "Karen", "Leo", "Mia", "Noah", "Olivia", "Paul"];

const LAST_NAMES = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson"];

const BIOS = [
    "Leads a cross-functional team across three time zones and owns the quarterly delivery plan.",
    "Specializes in scalable service architecture.",
    "Passionate about accessible, pixel-perfect user interfaces and design systems that scale across products.",
    "Drives product strategy and stakeholder alignment.",
    "Champions data-driven decision making, runs the weekly metrics review and mentors new analysts."
];

export function createEmployee(index: number): Employee {
    const first = FIRST_NAMES[index % FIRST_NAMES.length];
    const last = LAST_NAMES[Math.floor(index / FIRST_NAMES.length) % LAST_NAMES.length];
    const departmentIndex = index % DEPARTMENTS.length;

    return {
        id: index + 1,
        name: `${first} ${last}`,
        initials: `${first[0]}${last[0]}`,
        email: `${first.toLowerCase()}.${last.toLowerCase()}${index + 1}@example.com`,
        department: DEPARTMENTS[departmentIndex],
        variant: VARIANTS[departmentIndex % VARIANTS.length],
        bio: index % 3 === 0 ? BIOS[index % BIOS.length] : null
    };
}

export function generateEmployees(count: number, startIndex = 0): Employee[] {
    return Array.from({ length: count }, (_, i) => createEmployee(startIndex + i));
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.employees__viewport {
    block-size: 480px;
}

.employees__bio {
    display: block;
    padding-block-start: 4px;
    white-space: normal;
    color: var(--ig-gray-700);
}
```

Items are measured by their border box, so margins are not part of an item's size. Space items with padding, or with a `gap` inside the item, instead of margins.

### Orientation

The Virtual Scroll `orientation` sets the scroll axis: `vertical` (default) or `horizontal`. In a horizontal list, give each item a width and the host a height. In a right-to-left context, horizontal scrolling and item positioning are mirrored.

```html
<igc-virtual-scroll orientation="horizontal" estimated-item-size="220" style="height: 200px"></igc-virtual-scroll>
```

```typescript
export type DepartmentVariant = "primary" | "info" | "success" | "warning" | "danger";

export interface Employee {
    id: number;
    name: string;
    initials: string;
    email: string;
    department: string;
    variant: DepartmentVariant;
    bio: string | null;
}

const DEPARTMENTS = ["Engineering", "Design", "Marketing", "Sales", "HR", "Finance", "Legal", "Operations"];
const VARIANTS: DepartmentVariant[] = ["primary", "info", "success", "warning", "danger"];

const FIRST_NAMES = ["Alice", "Bob", "Carol", "David", "Eve", "Frank", "Grace", "Henry", "Iris", "Jack", "Karen", "Leo", "Mia", "Noah", "Olivia", "Paul"];

const LAST_NAMES = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson"];

const BIOS = [
    "Leads a cross-functional team across three time zones and owns the quarterly delivery plan.",
    "Specializes in scalable service architecture.",
    "Passionate about accessible, pixel-perfect user interfaces and design systems that scale across products.",
    "Drives product strategy and stakeholder alignment.",
    "Champions data-driven decision making, runs the weekly metrics review and mentors new analysts."
];

export function createEmployee(index: number): Employee {
    const first = FIRST_NAMES[index % FIRST_NAMES.length];
    const last = LAST_NAMES[Math.floor(index / FIRST_NAMES.length) % LAST_NAMES.length];
    const departmentIndex = index % DEPARTMENTS.length;

    return {
        id: index + 1,
        name: `${first} ${last}`,
        initials: `${first[0]}${last[0]}`,
        email: `${first.toLowerCase()}.${last.toLowerCase()}${index + 1}@example.com`,
        department: DEPARTMENTS[departmentIndex],
        variant: VARIANTS[departmentIndex % VARIANTS.length],
        bio: index % 3 === 0 ? BIOS[index % BIOS.length] : null
    };
}

export function generateEmployees(count: number, startIndex = 0): Employee[] {
    return Array.from({ length: count }, (_, i) => createEmployee(startIndex + i));
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.cards {
    block-size: 200px;
}

/* Items are measured by their border box, so the spacing between cards is
   padding on the item wrapper rather than a margin. */
.cards__item {
    box-sizing: border-box;
    inline-size: 220px;
    block-size: 100%;
    padding: 8px;

    & igc-card {
        block-size: 100%;
    }
}

.cards__item--wide {
    inline-size: 320px;
}
```

### Over-Scan

The Virtual Scroll `overScan` is the number of extra items rendered beyond each edge of the viewport (`2` by default). A larger value reduces blank areas during fast scrolling and renders more elements.

```html
<igc-virtual-scroll over-scan="6" style="height: 400px"></igc-virtual-scroll>
```

### Scroll to Index

The Virtual Scroll `scrollToIndex` method scrolls an item into view. Its options are those of the native `scrollIntoView`: `block` (`start`, `center`, `end`, or `nearest`), `inline` for a horizontal list, and `behavior` (`auto` or `smooth`). Items that have not rendered only have an estimated size, so the component measures the items where it lands and corrects the position; the returned promise resolves on the final position.

```ts
await virtualScroll.scrollToIndex(index, { block: 'center' });
```

```typescript
export type DepartmentVariant = "primary" | "info" | "success" | "warning" | "danger";

export interface Employee {
    id: number;
    name: string;
    initials: string;
    email: string;
    department: string;
    variant: DepartmentVariant;
    bio: string | null;
}

const DEPARTMENTS = ["Engineering", "Design", "Marketing", "Sales", "HR", "Finance", "Legal", "Operations"];
const VARIANTS: DepartmentVariant[] = ["primary", "info", "success", "warning", "danger"];

const FIRST_NAMES = ["Alice", "Bob", "Carol", "David", "Eve", "Frank", "Grace", "Henry", "Iris", "Jack", "Karen", "Leo", "Mia", "Noah", "Olivia", "Paul"];

const LAST_NAMES = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson"];

const BIOS = [
    "Leads a cross-functional team across three time zones and owns the quarterly delivery plan.",
    "Specializes in scalable service architecture.",
    "Passionate about accessible, pixel-perfect user interfaces and design systems that scale across products.",
    "Drives product strategy and stakeholder alignment.",
    "Champions data-driven decision making, runs the weekly metrics review and mentors new analysts."
];

export function createEmployee(index: number): Employee {
    const first = FIRST_NAMES[index % FIRST_NAMES.length];
    const last = LAST_NAMES[Math.floor(index / FIRST_NAMES.length) % LAST_NAMES.length];
    const departmentIndex = index % DEPARTMENTS.length;

    return {
        id: index + 1,
        name: `${first} ${last}`,
        initials: `${first[0]}${last[0]}`,
        email: `${first.toLowerCase()}.${last.toLowerCase()}${index + 1}@example.com`,
        department: DEPARTMENTS[departmentIndex],
        variant: VARIANTS[departmentIndex % VARIANTS.length],
        bio: index % 3 === 0 ? BIOS[index % BIOS.length] : null
    };
}

export function generateEmployees(count: number, startIndex = 0): Employee[] {
    return Array.from({ length: count }, (_, i) => createEmployee(startIndex + i));
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.employees__viewport {
    block-size: 400px;
}

.toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
    margin-block-end: 16px;
}

.toolbar__index {
    inline-size: 140px;
}

.toolbar__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.employees__item--highlighted {
    animation: highlight 1.5s ease-out;
}

@keyframes highlight {
    from {
        box-shadow: inset 0 0 0 3px var(--ig-warn-500);
    }

    to {
        box-shadow: inset 0 0 0 3px transparent;
    }
}
```

With `block: 'nearest'`, the position does not change when the item is already fully visible. Indices outside the collection are clamped to the first or last item.

### Infinite Scroll

The Virtual Scroll `igcDataRequest` event supports append-only loading from remote data. It is emitted when the rendered window nears the end of `data`, and on the first render when the loaded items do not fill the viewport. Append the requested items as a new array:

```ts
virtualScroll.addEventListener('igcDataRequest', (event: CustomEvent<VirtualScrollDataRequest>) => {
    const { startIndex, count } = event.detail;
    fetchEmployees(startIndex, count).then(page => {
        virtualScroll.data = [...virtualScroll.data, ...page];
    });
});
```

```typescript
export type DepartmentVariant = "primary" | "info" | "success" | "warning" | "danger";

export interface Employee {
    id: number;
    name: string;
    initials: string;
    email: string;
    department: string;
    variant: DepartmentVariant;
    bio: string | null;
}

const DEPARTMENTS = ["Engineering", "Design", "Marketing", "Sales", "HR", "Finance", "Legal", "Operations"];
const VARIANTS: DepartmentVariant[] = ["primary", "info", "success", "warning", "danger"];

const FIRST_NAMES = ["Alice", "Bob", "Carol", "David", "Eve", "Frank", "Grace", "Henry", "Iris", "Jack", "Karen", "Leo", "Mia", "Noah", "Olivia", "Paul"];

const LAST_NAMES = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson"];

const BIOS = [
    "Leads a cross-functional team across three time zones and owns the quarterly delivery plan.",
    "Specializes in scalable service architecture.",
    "Passionate about accessible, pixel-perfect user interfaces and design systems that scale across products.",
    "Drives product strategy and stakeholder alignment.",
    "Champions data-driven decision making, runs the weekly metrics review and mentors new analysts."
];

export function createEmployee(index: number): Employee {
    const first = FIRST_NAMES[index % FIRST_NAMES.length];
    const last = LAST_NAMES[Math.floor(index / FIRST_NAMES.length) % LAST_NAMES.length];
    const departmentIndex = index % DEPARTMENTS.length;

    return {
        id: index + 1,
        name: `${first} ${last}`,
        initials: `${first[0]}${last[0]}`,
        email: `${first.toLowerCase()}.${last.toLowerCase()}${index + 1}@example.com`,
        department: DEPARTMENTS[departmentIndex],
        variant: VARIANTS[departmentIndex % VARIANTS.length],
        bio: index % 3 === 0 ? BIOS[index % BIOS.length] : null
    };
}

export function generateEmployees(count: number, startIndex = 0): Employee[] {
    return Array.from({ length: count }, (_, i) => createEmployee(startIndex + i));
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.employees__viewport {
    block-size: 440px;
}

/* Reserve the space for the progress bar so the list does not shift or overflow while loading. */
.employees__status {
    block-size: 4px;
    overflow: hidden;
}

.employees__status igc-linear-progress {
    --ig-linear-bar-track-height: 4px;
}
```

Only one data request is pending at a time; the next one follows the next `data` change. An empty `data` emits no request, so load the first page yourself. When the source has no more items, stop appending: the component does not request the same start index again.

### Layout Complete

The Virtual Scroll `layoutComplete` property is a promise that resolves when the current render, the measurements it triggers, and the renders they schedule are complete. Await it before you read rendered items after a `data` change, a scroll, or a resize.

```ts
virtualScroll.data = await fetchEmployees();
await virtualScroll.layoutComplete;
```

### Do/Don't

The Virtual Scroll usually works as the scroll container of a long list, keeping only the items in its viewport, plus a small buffer, in the DOM. Avoid it for a list short enough to render at once, and as you write the item template, keep each item state in the data rather than in its elements: item elements are reused, so DOM state the template does not bind shows on whichever item takes the element.

<style>{`
  .vs-guidance {
    /* The screenshots are exported at this width; the panel is capped to it so
       the card and its label share one edge. */
    --vs-card-width: 537px;

    display: grid;
    /* Tracks are exactly the card width, not 1fr, so the gap between the two
       panels is the 26px of the design rather than 26px plus leftover track. */
    grid-template-columns: repeat(auto-fit, minmax(min(var(--vs-card-width), 100%), var(--vs-card-width)));

    /* The tracks are a fixed width, so centre them when the pair is narrower
       than the content column instead of leaving the slack on one side. */
    justify-content: center;
    grid-template-rows: auto auto;
    gap: 26px;
    align-items: stretch;
    width: 100%;

    /* Roomier than the 26px the page gives its other blocks: this one is a
       pair of tall images, so it needs more air before the next section. */
    margin: 0 0 48px;
    isolation: isolate;
  }

  .vs-guidance__panel {
    display: grid;
    grid-row: span 2;
    grid-template-rows: subgrid;
    gap: 26px;
    margin: 0;
    min-width: 0;
  }

  .vs-guidance__frame {
    display: grid;
    place-items: center;
    min-height: 0;
  }

  .vs-guidance__frame img {
    display: block;
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: contain;
    margin: 0;
    border-radius: 4px;
  }

  .vs-guidance__caption {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0;
    padding: 0;
    text-align: start;
  }

  .vs-guidance__label {
    font-weight: 600;
  }

  .vs-guidance__caption p {
    margin: 0;
    font-size: 14px;
  }

  .vs-guidance__panel--do .vs-guidance__label {
    color: light-dark(var(--ig-success-700), var(--ig-success-100));
  }

  .vs-guidance__panel--dont .vs-guidance__label {
    color: light-dark(var(--ig-error-700), var(--ig-error-300));
  }
`}</style>

<div class="vs-guidance">
<figure class="vs-guidance__panel vs-guidance__panel--do">
<div class="vs-guidance__frame">

</div>
<figcaption class="vs-guidance__caption">
<span class="vs-guidance__label">Do</span>

Use the Virtual Scroll for a long list that is too large to render at once, such as a directory, a feed, a log, or a strip of cards, including lists that load remote data while scrolling.

</figcaption>
</figure>
<figure class="vs-guidance__panel vs-guidance__panel--dont">
<div class="vs-guidance__frame">

</div>
<figcaption class="vs-guidance__caption">
<span class="vs-guidance__label">Don't</span>

Render a short list directly with the [List](../grids/list.md). Use the [Web Components Data Grid](../grids/data-grid.md) for tabular data with columns, sorting, or filtering. Show a small set of rich items as [Card](./card.md) elements without virtualization.

</figcaption>
</figure>
</div>

## Properties

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `data` | `T[]` | `[]` | The collection to virtualize. Compared by reference. Property only. |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | The scroll axis. Attribute: `orientation`. |
| `overScan` | `number` | `2` | Extra items rendered beyond each edge of the viewport. Attribute: `over-scan`. |
| `estimatedItemSize` | `number` | `50` | The size in pixels of an item until it is measured. A non-positive value uses `50`. Attribute: `estimated-item-size`. |
| `itemTemplate` | `VirtualScrollItemTemplate<T> \| null` | `null` | The function that renders each item. Property only. |
| `keyFunction` | `VirtualScrollKeyFunction<T> \| null` | `null` | Returns an item's key, so an item keeps its element when it moves in `data`. Without it, the index is the key. Property only. |
| `layoutComplete` | `Promise<void>` (read-only) | — | Resolves when rendering and item measurement have settled. |

## Methods

| Name | Returns | Description |
| --- | --- | --- |
| `scrollToIndex(index: number, options?: ScrollIntoViewOptions)` | `Promise<void>` | Scrolls the item at `index` into view and resolves when the corrected position is stable. |

## Events

| Name | Detail | Description |
| --- | --- | --- |
| `igcStateChange` | `VirtualScrollState` | Emitted when the rendered window changes: `startIndex`, `endIndex`, `viewportSize`, `totalSize`. |
| `igcDataRequest` | `VirtualScrollDataRequest` | Emitted when the rendered window nears the end of `data`: `startIndex`, `count`. |

## Styling

The Web Components Virtual Scroll has no theme of its own: it lays out the viewport, and the rendered items take their styles from the elements and components in the item template.

The component renders into its light DOM, so regular selectors reach the rendered items. Its default styles give the host a height of `18.75rem`; override the height to size the viewport.

```css
igc-virtual-scroll.employees {
    height: 480px;
}

igc-virtual-scroll.employees [data-vs-index]:nth-child(even) {
    background: var(--ig-gray-100);
}
```

## Accessibility

The Web Components Virtual Scroll keeps only the rendered window in the DOM, so the item template has to expose each item's position in the whole collection.

### Keyboard Interaction

The Web Components Virtual Scroll adds no key handlers. The host is a native scroll container, and a focused scroll container scrolls with the browser's keys:

| Key | Action |
| --- | --- |
| Arrow Up / Arrow Down | Scrolls a vertical list. |
| Arrow Left / Arrow Right | Scrolls a horizontal list. |
| Page Up / Page Down | Scrolls by about one viewport. |
| Home / End | Scrolls to the start or the end of the collection. |

The host has no `tabindex`. Browsers differ in whether a scroll container without focusable content can receive focus, so set `tabindex="0"` on the host when the items contain nothing focusable. Focus inside an item does not survive that item leaving the rendered window, so move focus deliberately before it does.

### Screen Readers / ARIA

- The track, the content element, and the item wrappers have `role="presentation"`. The host has no role: place it inside an element with a list role, such as `igc-list`, or give it `role="list"` when the items render `role="listitem"`.
- Map the `index` and `count` context properties to `aria-posinset` and `aria-setsize`.
- Give a focusable host a role that supports an accessible name, such as `role="list"`, and name it with `aria-label` or `aria-labelledby`.

### Accessibility Compliance

Infragistics documents the accessibility standards that Ignite UI for Web Components targets in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic. This topic makes no conformance claim for the Virtual Scroll: the table lists what the component provides, and the list after it covers what the application must add.

| Criterion | How the component supports the requirement |
| --- | --- |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) | The wrappers are presentational, so the list structure comes from the host and the item template, which can expose each item's position with `aria-posinset` and `aria-setsize`. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The host is a native scroll container that scrolls with the keyboard once it has focus. Reaching it with the keyboard depends on the application; see the list below. |

Your responsibilities:

- Make the host keyboard-reachable with `tabindex="0"` when the items contain nothing focusable, and give it an accessible name.
- Expose the item position with `aria-posinset` and `aria-setsize` from the item template.
- Provide list semantics that fit the item template (see [Screen Readers / ARIA](#screen-readers--aria)).
- Keep application state, such as a selection, in the data rather than in the rendered item elements.

## Troubleshooting

### Why does the Virtual Scroll render no items?

The host has no size on the scroll axis, the item template is missing, or `data` is empty. Give the host a fixed height (vertical) or width (horizontal), set the item template, and check the bound collection.

### Why does the list not update when I add an item?

The Virtual Scroll compares `data` by reference, so a change in place is not detected. Assign a new array, for example `[...items, newItem]`.

### Why does the scrollbar change size while I scroll?

Items that have not rendered use `estimatedItemSize`, and the total size is corrected as items are measured.

The average measured size then replaces the estimate for the items that are not measured yet, so the correction settles as you scroll. Set `estimatedItemSize` close to the average item size to make the first render land near the real content.

### Why do items drift out of place further down the list?

Margins are not part of an item's measured size. Replace item margins with padding, or with a `gap` inside the item.

## Known Limitations

- The Web Components Virtual Scroll virtualizes one axis. Rows and columns that are both virtualized require a grid.
- Item elements are reused as the window moves, so DOM state that the item template does not bind, such as a checkbox without a bound `checked`, shows on whichever item takes the element. Bind all item state, and write user changes back to the item.

## API References

- `IgcVirtualScroll`

## Dependencies

The Web Components Virtual Scroll has no dependencies on other components and needs no theme of its own. It uses `lit` to render item templates, and the components in the item template need a theme stylesheet.

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

## Related Components

- [List](../grids/list.md) - Use the List for a short list, or as the container of a virtualized list.
- [Data Grid](../grids/data-grid.md) - Use the Data Grid for tabular data with columns, sorting, or filtering.
- [Card](./card.md) - Use cards for a small set of rich items, or as items of a horizontal Virtual Scroll.

## FAQ

  **Q: How many items can the Virtual Scroll handle?**

    The Web Components Virtual Scroll keeps only the items in its viewport and the over-scan buffer in the DOM, so the size of the collection does not change how many elements render. When the total size of a collection exceeds the browser's scroll limit, the Virtual Scroll maps the collection onto the scroll range the browser supports.
  
  **Q: Do Virtual Scroll items need the same size?**

    Items in the Web Components Virtual Scroll can have different sizes, because each item is measured once it renders. Set `estimatedItemSize` close to the average item size so that the scrollbar is accurate before items are measured.

    Once items are measured, their average replaces the estimate for the items that are not measured yet.

  
  **Q: How do I scroll the Virtual Scroll to a specific item?**

    Call the Web Components Virtual Scroll `scrollToIndex` method with the item index and optional `block` and `behavior` options. The method returns a promise that resolves when the corrected position is stable.
  
  **Q: How do I load remote data into the Virtual Scroll while the user scrolls?**

    The Web Components Virtual Scroll supports append-only loading through the `igcDataRequest` event. Handle the event and assign a new array that includes the requested items to `data`.

  


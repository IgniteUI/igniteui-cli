---
title: "Breadcrumbs"
description: "The Ignite UI for React Breadcrumbs component renders an ordered trail of navigation items separated by a configurable icon, communicating a user's location within a site's hierarchy and providing a way back to higher-level pages."
keywords: "React Breadcrumbs, Ignite UI for React, breadcrumb, navigation trail, current page, aria-current, separator, prefix, suffix"
license: MIT
mentionedTypes: ["Breadcrumbs", "Breadcrumb"]
relatedComponents: ["Navbar", "NavigationDrawer"]
last_updated: "2026-09-08"
llms:
  description: "The Ignite UI for React Breadcrumbs component renders an ordered trail of navigation items separated by a configurable icon, communicating a user's location within a site's hierarchy and providing a way back to higher-level pages."
_tocName: Breadcrumbs
---
# Breadcrumbs Component 

The Ignite UI for React Breadcrumbs component renders an ordered trail of navigation items separated by a configurable icon, communicating a user's location within a site's hierarchy and providing a way back to higher-level pages.

## Live Demo

The React Breadcrumbs demo shows a three-item trail with the current page marked at the end.

```css
.sample {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--ig-font-family);
  overflow: auto;
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrBreadcrumbs, IgrBreadcrumb, IgrIcon, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/material.css";

const homeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const notificationsIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>';

export default function BreadcrumbsOverview() {
  useEffect(() => {
    registerIconFromText("home", homeIcon);
    registerIconFromText("notifications", notificationsIcon);
  }, []);

  return (
    <div className="sample">
      <nav aria-label="Breadcrumb">
        <IgrBreadcrumbs>
          <IgrBreadcrumb>
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb>
            <IgrIcon slot="prefix" name="notifications" />
            <a href="/home/item" onClick={(e) => e.preventDefault()}>Item</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb>
            <IgrIcon slot="prefix" name="notifications" />
            <a href="/home/item/item" onClick={(e) => e.preventDefault()}>Item</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb>
            <IgrIcon slot="prefix" name="notifications" />
            <a href="/home/item/item/item" onClick={(e) => e.preventDefault()}>Item</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb current={true}>
            <IgrIcon slot="prefix" name="notifications" />
            <a href="/home/item/item/item/current" onClick={(e) => e.preventDefault()}>Current Item</a>
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
      </nav>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BreadcrumbsOverview />);
```

## Anatomy

The React Breadcrumbs component is a pair of elements - a container that manages shared state and renders as an ARIA list, and one or more item children that render arbitrary slotted content followed by a separator.

**Breadcrumbs anatomy:** The Breadcrumbs component is composed of a container that renders an ARIA list and one or more items that render slotted content followed by a separator.

<style>{`
  .breadcrumbs-anatomy {
    --igd-anatomy-padding: 0px;
  }

  [id^="cw-"][id*="breadcrumbs-states"][id$="-example"] .igd-sample-frame {
    width: 90%;
  }

  @media (max-width: 650px) {
    [id^="cw-"][id*="breadcrumbs"][id$="-example"] .igd-sample-frame {
      height: 90%;
    }

    [id^="cw-"][id*="breadcrumbs-wrapping"][id$="-example"] .igd-sample-frame,
    [id^="cw-"][id*="breadcrumbs-size"][id$="-example"] .igd-sample-frame{
      width: 90%;
    }
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Breadcrumbs Item:</strong> represents a single level within the breadcrumb trail<br />
<strong>2. Breadcrumbs Item Icon (optional):</strong> could be displayed on the right or on the left side of the label<br />
<strong>3. Separator:</strong> a visual element that divides individual items and indicates directionality within the hierarchy<br />
<strong>4. Current Item:</strong> represents the active level within the breadcrumb trail,typically non-clickable</span>

```text
<igc-breadcrumbs role="list">
  <igc-breadcrumb role="listitem">
    ├── ::part(label)
    │   ├── slot="prefix"                 // optional prefix content
    │   ├── default slot                  // main content, typically <a>
    │   └── slot="suffix"                 // optional suffix content
    └── ::part(separator)                 // hidden on the last item
        └── slot="separator"              // per-item override
  </igc-breadcrumb>
  <!-- more <igc-breadcrumb> items ... -->
  <igc-breadcrumb current role="listitem" aria-current="page">
    <!-- last item, no trailing separator -->
  </igc-breadcrumb>
</igc-breadcrumbs>
```

## Getting Started

To use the React Breadcrumbs, follow the [Ignite UI for React Getting Started](../general-getting-started.md) topic for the basic project setup, then register the components.

The Breadcrumbs component requires `igniteui-react` 19.9.0 or later.

Import the `IgrBreadcrumbs` and `IgrBreadcrumb` wrappers and a theme:

```tsx
import { IgrBreadcrumbs, IgrBreadcrumb } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

Compose a trail by placing one breadcrumb item per level inside the Breadcrumbs container. Each item accepts arbitrary content in its default slot, most commonly an anchor that handles the navigation:

```tsx
<IgrBreadcrumbs>
  <IgrBreadcrumb><a href="/home">Home</a></IgrBreadcrumb>
  <IgrBreadcrumb><a href="/home/products">Products</a></IgrBreadcrumb>
  <IgrBreadcrumb current={true}><a href="/home/products/laptop">Laptop</a></IgrBreadcrumb>
</IgrBreadcrumbs>
```

## Usage

### Current Page

Mark the item that represents the currently viewed page with the `current` property. The item reflects it as an attribute and sets `aria-current="page"`, so screen readers announce the current page.

```tsx
<IgrBreadcrumbs>
  <IgrBreadcrumb><a href="/home">Home</a></IgrBreadcrumb>
  <IgrBreadcrumb current={true}><a href="/home/dashboard">Dashboard</a></IgrBreadcrumb>
</IgrBreadcrumbs>
```

### Shared Separator

Use the `separator` property on the container to set a shared separator icon for every item in the trail. The value is an icon name from the registered icon collection, and the container propagates it to each item.

```tsx
<IgrBreadcrumbs separator="slash">
  <IgrBreadcrumb><a href="/home">Home</a></IgrBreadcrumb>
  <IgrBreadcrumb><a href="/home/products">Products</a></IgrBreadcrumb>
  <IgrBreadcrumb><a href="/home/products/laptops">Laptops</a></IgrBreadcrumb>
  <IgrBreadcrumb current={true}><a href="/home/products/laptops/gaming">Gaming Laptop</a></IgrBreadcrumb>
</IgrBreadcrumbs>
```

```css
.sample {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  font-family: "Aktiv Grotesk", sans-serif;
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrBreadcrumbs, IgrBreadcrumb, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/material.css";

const slashIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M12.8535 3C13.3976 3 13.7655 3.55489 13.5537 4.05604L7.85788 17.5331C7.73829 17.8161 7.46093 18 7.15374 18C6.60638 18 6.23639 17.4416 6.44976 16.9375L12.1535 3.46381C12.2725 3.18266 12.5482 3 12.8535 3Z" fill="currentColor"/></svg>';

export default function BreadcrumbsCustomSeparator() {
  useEffect(() => {
    registerIconFromText("slash", slashIcon);
  }, []);

  return (
    <div className="sample">
      <nav aria-label="Breadcrumb">
        <IgrBreadcrumbs separator="slash">
          <IgrBreadcrumb><a href="/home" onClick={(e) => e.preventDefault()}>Home</a></IgrBreadcrumb>
          <IgrBreadcrumb><a href="/home/products" onClick={(e) => e.preventDefault()}>Products</a></IgrBreadcrumb>
          <IgrBreadcrumb><a href="/home/products/laptops" onClick={(e) => e.preventDefault()}>Laptops</a></IgrBreadcrumb>
          <IgrBreadcrumb current={true}><a href="/home/products/laptops/gaming" onClick={(e) => e.preventDefault()}>Gaming Laptop</a></IgrBreadcrumb>
        </IgrBreadcrumbs>
      </nav>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BreadcrumbsCustomSeparator />);
```

The trailing separator is automatically hidden on the last item in the trail, so you never need to omit it manually.

### Per-Item Separator Override

The separator can also be overridden for a single item by slotting content into that item's `separator` slot. This is useful for mixing text separators (such as `/` or `›`) with icons, or for using an entirely different separator at each boundary.

```tsx
<IgrBreadcrumbs>
  <IgrBreadcrumb>
    <a href="/home">Home</a>
    <span slot="separator">/</span>
  </IgrBreadcrumb>
  <IgrBreadcrumb current={true}><a href="/home/settings">Settings</a></IgrBreadcrumb>
</IgrBreadcrumbs>
```

### Prefix and Suffix Content

Each breadcrumb item exposes `prefix` and `suffix` slots for supplementary content such as icons, badges, or status indicators around the main content.

```tsx
<IgrBreadcrumbs>
  <IgrBreadcrumb>
    <IgrIcon slot="prefix" name="home"></IgrIcon>
    <a href="/home">Home</a>
  </IgrBreadcrumb>
  <IgrBreadcrumb>
    <a href="/home/profile">Mail</a>
  </IgrBreadcrumb>
  <IgrBreadcrumb>
    <a href="/home/profile">Messages</a>
  </IgrBreadcrumb>
  <IgrBreadcrumb current={true}>
    <a href="/home/inbox">Inbox</a>
    <IgrBadge slot="suffix" outlined={true} variant="danger">3</IgrBadge>
  </IgrBreadcrumb>
</IgrBreadcrumbs>
```

```css
.sample {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  font-family: "Aktiv Grotesk", sans-serif;
}

igc-badge::part(base) {
  color: var(--ig-gray-50);
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrBreadcrumbs, IgrBreadcrumb, IgrIcon, IgrBadge, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/material.css";

const homeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

export default function BreadcrumbsPrefixSuffix() {
  useEffect(() => {
    registerIconFromText("home", homeIcon);
  }, []);

  return (
    <div className="sample">
      <nav aria-label="Breadcrumb">
        <IgrBreadcrumbs>
          <IgrBreadcrumb>
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb>
            <a href="/home/profile" onClick={(e) => e.preventDefault()}>Mail</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb>
            <a href="/home/profile" onClick={(e) => e.preventDefault()}>Messages</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb current={true}>
            <a href="/home/inbox" onClick={(e) => e.preventDefault()}>Inbox</a>
            <IgrBadge slot="suffix" outlined={true} variant="danger">3</IgrBadge>
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
      </nav>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BreadcrumbsPrefixSuffix />);
```

### Wrapping and Long Trails

The container renders its items on a single wrapping row using flex layout. When a trail is longer than the available width, the items wrap to the next line automatically - no additional configuration is required.

```css
.sample {
  display: flex;
  justify-content: center;
  align-items: center;
}

igc-breadcrumbs {
  max-width: 16rem;
}
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrBreadcrumbs, IgrBreadcrumb } from "igniteui-react";
import "igniteui-webcomponents/themes/light/material.css";

export default function BreadcrumbsWrapping() {
  return (
    <div className="sample">
      <nav aria-label="Breadcrumb">
        <IgrBreadcrumbs>
          <IgrBreadcrumb>
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb>
            <a href="/home/billing" onClick={(e) => e.preventDefault()}>Billing</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb>
            <a href="/home/billing/subscriptions" onClick={(e) => e.preventDefault()}>Subscriptions</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb current={true}>
            <a href="/home/billing/subscriptions/add-seats" onClick={(e) => e.preventDefault()}>How to add seats to an existing subscription</a>
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
      </nav>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BreadcrumbsWrapping />);
```

In Right-to-Left layouts, the separator icon is mirrored automatically without additional configuration, so a right-pointing chevron becomes left-pointing without changing the icon name.

### Size

Control the Breadcrumbs size by setting the `--ig-size` variable to one of three options: `--ig-size-small`, `--ig-size-medium`, or `--ig-size-large`. This can be used to adjust the text and icon sizes within the breadcrumbs, along with their paddings.

```css
.small {
  --ig-size: var(--ig-size-small);
}

.medium {
  --ig-size: var(--ig-size-medium);
}

.large {
  --ig-size: var(--ig-size-large);

  margin-block-start: -0.25rem;
}

.sample {
  display: flex;
  justify-content: center;
  font-family: "Aktiv Grotesk", sans-serif;
}

span {
  color: #7d8a96;
  width: 3.75rem;
  margin-inline-end: 2rem;
  font-size: 0.875rem;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (width < 290px) {
  span {
    width: auto;
    margin-inline-end: 1rem;
  }

  .sample {
    overflow: auto;
  }
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrBreadcrumbs, IgrBreadcrumb, IgrIcon, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/material.css";

const homeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const notificationsIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>';

export default function BreadcrumbsSizes() {
  useEffect(() => {
    registerIconFromText("home", homeIcon);
    registerIconFromText("notifications", notificationsIcon);
  }, []);

  return (
    <div className="sample">
      <nav aria-label="Breadcrumb">
        <IgrBreadcrumbs className="small">
          <span>Small</span>
          <IgrBreadcrumb>
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb>
            <IgrIcon slot="prefix" name="notifications" />
            <a href="/home/item" onClick={(e) => e.preventDefault()}>Item</a>
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
        <IgrBreadcrumbs className="medium">
          <span>Medium</span>
          <IgrBreadcrumb>
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb>
            <IgrIcon slot="prefix" name="notifications" />
            <a href="/home/item" onClick={(e) => e.preventDefault()}>Item</a>
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
        <IgrBreadcrumbs className="large">
          <span>Large</span>
          <IgrBreadcrumb>
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb>
            <IgrIcon slot="prefix" name="notifications" />
            <a href="/home/item" onClick={(e) => e.preventDefault()}>Item</a>
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
      </nav>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BreadcrumbsSizes />);
```

### States

Breadcrumbs support various visual states such as `hover`, `focus`, `pressed`, and `disabled` and also combinations like `focus-hover` and `focus-pressed`. These states help indicate the current interaction status of each breadcrumb item.

```css
.state-hover {
  igc-icon {
    color: var(--hover-icon-color);
  }

  a {
    color: var(--hover-text-color);
  }
}

.state-focused {
  igc-icon {
    color: var(--focus-icon-color);
  }

  a {
    color: var(--focus-text-color);
    text-decoration: underline var(--focus-underline-color);
  }
}

.state-pressed {
  igc-icon {
    color: var(--pressed-icon-color);
  }

  a {
    color: var(--pressed-text-color);
  }
}

.state-focused-hover {
  igc-icon {
    color: var(--focus-hover-icon-color);
  }

  a {
    color: var(--focus-hover-text-color);
    text-decoration: underline var(--focus-hover-underline-color);
  }
}

.state-focused-pressed {
  igc-icon {
    color: var(--focus-pressed-icon-color);
  }

  a {
    color: var(--focus-pressed-text-color);
    text-decoration: underline var(--focus-pressed-underline-color);
  }
}

.state-disabled {
  igc-icon {
    color: var(--disabled-icon-color);
  }

  a {
    color: var(--disabled-text-color);
  }
}

:host {
    overflow: auto;
}

:root {
    overflow: auto;
}

.sample {
  display: flex;
  justify-content: center;
  max-height: 15rem;
  overflow: auto;
  font-family: "Aktiv Grotesk", sans-serif;
}

span {
  color: #7d8a96;
  font-size: 0.875rem;
  margin-block-end: 1rem;
}

nav {
  display: grid;
  column-gap: 3rem;
  row-gap: 1rem;
}

igc-breadcrumbs {
  flex-direction: column;
  height: fit-content;
}

igc-breadcrumbs:nth-of-type(-n+3) {
  grid-row: 1;
}

igc-breadcrumbs:nth-of-type(n+4) {
  grid-row: 2;
}

@media (width < 510px) {
  igc-breadcrumbs:nth-of-type(-n+3),
  igc-breadcrumbs:nth-of-type(n+4) {
    grid-row: unset;
  }

  nav {
    row-gap: 3rem;
  }

  .sample {
    max-height: unset;
  }
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrBreadcrumbs, IgrBreadcrumb, IgrIcon, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/material.css";

const homeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

export default function BreadcrumbsStates() {
  useEffect(() => {
    registerIconFromText("home", homeIcon);
  }, []);

  return (
    <div className="sample">
      <nav aria-label="Breadcrumb">
        <IgrBreadcrumbs>
          <span>Idle</span>
          <IgrBreadcrumb>
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
            <IgrIcon slot="suffix" name="home" />
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
        <IgrBreadcrumbs>
          <span>Hover</span>
          <IgrBreadcrumb className="state-hover">
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
            <IgrIcon slot="suffix" name="home" />
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
        <IgrBreadcrumbs>
          <span>Focused</span>
          <IgrBreadcrumb className="state-focused">
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
            <IgrIcon slot="suffix" name="home" />
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
        <IgrBreadcrumbs>
          <span>Pressed</span>
          <IgrBreadcrumb className="state-pressed">
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
            <IgrIcon slot="suffix" name="home" />
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
        <IgrBreadcrumbs>
          <span>Focused &amp; Hover</span>
          <IgrBreadcrumb className="state-focused-hover">
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
            <IgrIcon slot="suffix" name="home" />
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
        <IgrBreadcrumbs>
          <span>Focused &amp; Pressed</span>
          <IgrBreadcrumb className="state-focused-pressed">
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
            <IgrIcon slot="suffix" name="home" />
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
        <IgrBreadcrumbs>
          <span>Disabled</span>
          <IgrBreadcrumb className="state-disabled">
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
            <IgrIcon slot="suffix" name="home" />
          </IgrBreadcrumb>
        </IgrBreadcrumbs>
      </nav>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BreadcrumbsStates />);
```

### Do/Don't

Use breadcrumbs to orient users in content-rich applications with three or more levels of hierarchy by providing a clear, low-friction path to navigate back to parent pages. Do not use breadcrumbs in flat, single-level site structures where they create unnecessary visual clutter, or in sequential step-by-step processes where progress indicators are required instead.

<table class="table" style="width: 100%; margin: 0 auto 26px;">
  <tbody>
    <tr>
      <td style="width: 50%; border: none; padding: 0 13px 13px 0;">
      </td>
      <td style="width: 50%; border: none; padding: 0 0 13px 13px;">
      </td>
    </tr>
    <tr>
      <td style="border: none; padding: 13px 13px 13px 0; color: green;">
        <strong>Do</strong>
      </td>
      <td style="border: none; padding: 13px 0 13px 13px; color: red;">
        <strong>Don't</strong>
      </td>
    </tr>
    <tr>
      <td style="border: none; padding: 13px 13px 13px 0; text-align: left;">
        Use breadcrumbs for complex products where content is nested deeper than two levels.
      </td>
      <td style="border: none; padding: 13px 0 13px 13px; text-align: left;">
        Avoid using breadcrumbs as primary navigation and if your hierarchy contains only one level.
      </td>
    </tr>
  </tbody>
</table>

## Properties

The container exposes the shared separator, and each item exposes its state.

**`IgrBreadcrumbs`**

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `separator` | `string` | `'tree_expand'` | The icon name used as the default separator between items. Propagated to every item in the trail. |

**`IgrBreadcrumb`**

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `current` | `boolean` | `false` | Marks the item as the current page and sets `aria-current="page"`. |
| `disabled` | `boolean` | `false` | Disables the item, sets `aria-disabled="true"`, and removes the slotted content from the tab sequence. |

## Styling

```css
igc-breadcrumbs {
  --ig-breadcrumb-text-color: var(--ig-gray-900);
  --ig-breadcrumb-icon-color: #8b5bb1;
  --ig-breadcrumb-hover-text-color: var(--ig-gray-900);
  --ig-breadcrumb-hover-icon-color: #8b5bb1;
  --ig-breadcrumb-focus-text-color: var(--ig-gray-900);
  --ig-breadcrumb-focus-icon-color: #8b5bb1;
  --ig-breadcrumb-current-text-color: #8b5bb1;
  --ig-breadcrumb-separator-color: #8b5bb1;
  --ig-breadcrumb-focus-pressed-text-color: var(--ig-gray-900);
  --ig-breadcrumb-focus-pressed-icon-color: #8b5bb1;
}

.sample {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrBreadcrumbs, IgrBreadcrumb, IgrIcon, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const homeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const musicNoteIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>';

export default function BreadcrumbsStyling() {
  useEffect(() => {
    registerIconFromText("home", homeIcon);
    registerIconFromText("music_note", musicNoteIcon);
  }, []);

  return (
    <div className="sample">
      <nav aria-label="Breadcrumb">
        <IgrBreadcrumbs separator="music_note">
          <IgrBreadcrumb>
            <IgrIcon slot="prefix" name="home" />
            <a href="/home" onClick={(e) => e.preventDefault()}>Home</a>
          </IgrBreadcrumb>
          <IgrBreadcrumb><a href="/home/item" onClick={(e) => e.preventDefault()}>Item</a></IgrBreadcrumb>
          <IgrBreadcrumb><a href="/home/item/item" onClick={(e) => e.preventDefault()}>Item</a></IgrBreadcrumb>
          <IgrBreadcrumb><a href="/home/item/item/item" onClick={(e) => e.preventDefault()}>Item</a></IgrBreadcrumb>
          <IgrBreadcrumb current={true}><a href="/home/item/item/item/current" onClick={(e) => e.preventDefault()}>Current Item</a></IgrBreadcrumb>
        </IgrBreadcrumbs>
      </nav>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BreadcrumbsStyling />);
```

The React Breadcrumbs appearance is controlled through CSS variables, CSS parts, and the theming system.

### Styling Variables

| Variable | What it changes |
| -- | -- |
| `--ig-breadcrumb-text-color` | The text color of the breadcrumb. |
| `--ig-breadcrumb-icon-color` | The color of the breadcrumb icon. |
| `--ig-breadcrumb-current-text-color` | The text color of the currently selected breadcrumb item. |
| `--ig-breadcrumb-current-icon-color` | The icon color of the currently selected breadcrumb item. |
| `--ig-breadcrumb-pressed-text-color` | The text color of the breadcrumb when pressed. |
| `--ig-breadcrumb-pressed-icon-color` | The color of the breadcrumb icon when pressed. |
| `--ig-breadcrumb-hover-text-color` | The text color of the breadcrumb when hovered. |
| `--ig-breadcrumb-hover-icon-color` | The color of the breadcrumb icon when hovered. |
| `--ig-breadcrumb-focus-text-color` | The text color of the breadcrumb when focused. |
| `--ig-breadcrumb-focus-icon-color` | The color of the breadcrumb icon when focused. |
| `--ig-breadcrumb-focus-underline-color` | The text underline color of the breadcrumb on focus. Only used in the Material theme. |
| `--ig-breadcrumb-focus-border-color` | The focus border color. |
| `--ig-breadcrumb-focus-hover-text-color` | The text color of the breadcrumb when focused and hovered. |
| `--ig-breadcrumb-focus-hover-icon-color` | The color of the breadcrumb icon when focused and hovered. |
| `--ig-breadcrumb-focus-hover-underline-color` | The text underline color of the breadcrumb on focus and hover. Only used in the Material theme. |
| `--ig-breadcrumb-focus-pressed-text-color` | The text color of the breadcrumb when focused and pressed. |
| `--ig-breadcrumb-focus-pressed-icon-color` | The color of the breadcrumb icon when focused and pressed. |
| `--ig-breadcrumb-focus-pressed-underline-color` | The text underline color of the breadcrumb on focus and pressed. Only used in the Material theme. |
| `--ig-breadcrumb-disabled-text-color` | The text color of the breadcrumb when disabled. |
| `--ig-breadcrumb-disabled-icon-color` | The color of the breadcrumb icon when disabled. |
| `--ig-breadcrumb-separator-color` | The color of the breadcrumb separator. |

### Style Parts

**`IgrBreadcrumb`**

| Part | What it styles |
| -- | -- |
| `label` | The container wrapping the prefix, default, and suffix slots. |
| `separator` | The container wrapping the separator slot content. |

### Sass Theming

Use the `breadcrumb-theme` function for customizing the appearance of the Breadcrumbs through Sass.

```scss
@use "igniteui-theming/sass/themes" as *;

$my-breadcrumb-theme: breadcrumb-theme(
    $text-color: #1E2125,
    $icon-color: #8B5BB1
);

:root {
  @include tokens($my-breadcrumb-theme);
}
```

### CSS Variables

Set component CSS variables directly when you need local styling without a Sass build step.

```css
igc-breadcrumbs {
  --ig-breadcrumb-text-color: var(--ig-primary-50);
  --ig-breadcrumb-icon-color: var(--ig-primary-200);
  --ig-breadcrumb-separator-color: var(--ig-gray-200);
}

igc-breadcrumb::part(label) {
  padding-inline: 0.25rem;
}
```

### Styling with Tailwind

Combine Tailwind utility classes with the Breadcrumbs CSS variables for utility-first styling. [Set up Tailwind](../themes/tailwind.md) with the Ignite UI theme first:

```css
@import "tailwindcss/theme.css";
@import "tailwindcss/utilities.css";
```

```jsx
<IgrBreadcrumbs className="!light-breadcrumb ![--ig-breadcrumb-text-color:var(--ig-primary-50)]">
  <IgrBreadcrumb><a href="/">Root</a></IgrBreadcrumb>
  <IgrBreadcrumb current={true}><a href="/current">Current</a></IgrBreadcrumb>
</IgrBreadcrumbs>
```

```css
@import "tailwindcss/theme.css";
@import "tailwindcss/utilities.css";

.sample {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  font-family: "Aktiv Grotesk", sans-serif;
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrBreadcrumbs, IgrBreadcrumb, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const slashIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M12.8535 3C13.3976 3 13.7655 3.55489 13.5537 4.05604L7.85788 17.5331C7.73829 17.8161 7.46093 18 7.15374 18C6.60638 18 6.23639 17.4416 6.44976 16.9375L12.1535 3.46381C12.2725 3.18266 12.5482 3 12.8535 3Z" fill="currentColor"/></svg>';

export default function BreadcrumbsTailwindStyling() {
  useEffect(() => {
    registerIconFromText("slash", slashIcon);
  }, []);

  return (
    <div className="sample">
      <nav aria-label="Breadcrumb">
        <IgrBreadcrumbs
          separator="slash"
          className="!light-breadcrumb ![--ig-breadcrumb-text-color:var(--ig-primary-50)] ![--ig-breadcrumb-hover-text-color:var(--ig-primary-50)] ![--ig-breadcrumb-focus-text-color:var(--ig-primary-50)] ![--ig-breadcrumb-current-text-color:var(--ig-primary-200)] ![--ig-breadcrumb-separator-color:var(--ig-primary-200)] ![--ig-breadcrumb-focus-pressed-text-color:var(--ig-primary-50)] ![padding:0.5rem_1.125rem] ![background:#002146] ![border-radius:3.125rem] max-[235px]:![border-radius:0]"
        >
          <IgrBreadcrumb><a href="/" onClick={(e) => e.preventDefault()}>Home</a></IgrBreadcrumb>
          <IgrBreadcrumb><a href="/electronics" onClick={(e) => e.preventDefault()}>Electronics</a></IgrBreadcrumb>
          <IgrBreadcrumb><a href="/electronics/audio" onClick={(e) => e.preventDefault()}>Audio</a></IgrBreadcrumb>
          <IgrBreadcrumb><a href="/electronics/audio/headphones" onClick={(e) => e.preventDefault()}>Headphones</a></IgrBreadcrumb>
          <IgrBreadcrumb current={true}><a href="/electronics/audio/headphones/sony-x" onClick={(e) => e.preventDefault()}>Sony X Wireless</a></IgrBreadcrumb>
        </IgrBreadcrumbs>
      </nav>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BreadcrumbsTailwindStyling />);
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the component's default styles.

## Accessibility

The React Breadcrumbs follows the ARIA breadcrumb navigation pattern. The container exposes the ARIA `list` role, each item exposes the `listitem` role, and the current item is announced with `aria-current="page"`.

### Accessible Navigation Landmark

Wrap the trail in a `<nav>` element with an `aria-label` so assistive technology exposes it as a navigation landmark. The label belongs on the `<nav>`, not on the list, per the ARIA breadcrumb pattern.

```tsx
<nav aria-label="Breadcrumb">
  <IgrBreadcrumbs>
    <IgrBreadcrumb><a href="/">Root</a></IgrBreadcrumb>
    <IgrBreadcrumb current={true}><a href="/products">Products</a></IgrBreadcrumb>
  </IgrBreadcrumbs>
</nav>
```

### Keyboard Interaction

The Breadcrumbs components do not implement custom keyboard handling — navigation relies on the native behavior of the slotted interactive content:

| Key | Action |
| -- | -- |
| `Tab` / `Shift` + `Tab` | Moves focus between the interactive elements (typically links) slotted into each breadcrumb item. |
| `Enter` / `Space` | Activates the currently focused link, following the native behavior of the slotted element. |

### Screen Readers / ARIA

- The `Breadcrumbs` host has `role="list"`.
- Each `Breadcrumb` host has `role="listitem"`.
- Setting `current` to `true` applies `aria-current="page"` to the host; setting it back to `false` removes the attribute.
- Setting `disabled` to `true` applies `aria-disabled="true"` to the host.
- The separator icons are decorative and are not announced by screen readers.

### Accessibility Compliance

Infragistics documents Ignite UI for React accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| -- | -- |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) | The container and items expose the `list` / `listitem` roles, and the current item exposes `aria-current="page"`. |
| [2.4.8 Location](https://www.w3.org/WAI/WCAG21/Understanding/location) | The trail visually and programmatically communicates the current page's location within the site hierarchy. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The `<nav>` wrapper carries the accessible name; the `list`/`listitem` roles carry the structural semantics. |

Your responsibilities:

- Wrap the Breadcrumbs container in a `<nav>` element and set a descriptive `aria-label`, such as `"Breadcrumb"` or `"Product category"`.
- Mark exactly one item as `current` per trail so screen readers announce a single current page.
- Provide a meaningful text label inside each slotted anchor; do not rely on prefix icons alone to communicate the destination.

## Troubleshooting

The React Breadcrumbs troubleshooting guidance follows a problem → cause → fix format for common integration and rendering issues.

### Why is my separator not visible on some items?

The separator is automatically hidden on the last item in the trail — this is the intended behavior for the ARIA breadcrumb pattern. If it is missing from an unexpected item, check whether that item is the last visible child of the container.

### Why is the custom icon name I set on 'separator' not rendering?

The separator icon must be registered with the icon registry. Register the icon before rendering the trail, or fall back to the default `tree_expand` icon that ships with the theme.

### Why does the trail not wrap in RTL?

Wrapping is not RTL-specific — it happens whenever the total content width exceeds the container width. In RTL contexts, the visual order is reversed and the separator icon is mirrored automatically; if the trail still overflows, check whether a parent element is preventing the container from taking up its natural width.

## Known Limitations

The React Breadcrumbs has the following platform-independent limitations.

- The Breadcrumbs components do not implement custom keyboard handling — activation depends on the interactive element slotted into each item (usually an anchor).
- The Breadcrumbs do not render a `<nav>` landmark of their own; the consuming application must provide the `<nav aria-label="...">` wrapper.
- The container does not truncate long trails automatically. Combine the natural flex wrapping with your own overflow strategy (e.g. collapsing intermediate items into a menu) when a single-line trail is required at narrow widths.

## API References

Use these API references for the complete Breadcrumbs API surface.

`IgrBreadcrumbs`<br />
`IgrBreadcrumb`

## Dependencies

The React Breadcrumbs requires a theme stylesheet to apply its visual styling. See the framework-specific setup in **Getting Started**.

## Additional Resources

Use these resources for support and related Ignite UI documentation.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

## Related Components

Use these related components when the navigation surface is broader than a single hierarchy trail.

- [Navbar](../menus/navbar.md) — For the primary application header with actions and identity.
- [Navigation Drawer](../menus/navigation-drawer.md) — For a persistent or collapsible side navigation with grouped links.

## FAQ

  **Q: How do I change the separator icon between items?**

    Set the `separator` property on the Breadcrumbs container to the name of any registered icon; the container propagates the icon to every descendant item. To override the separator for a single item, slot the replacement content into that item's `separator` slot.
  

  **Q: Do I need to manually hide the last separator?**

    No. The Breadcrumb item automatically hides its trailing separator when it is the last item in the trail, so you can render the items in a loop without any special-casing.
  

  **Q: Does the Breadcrumbs component render a `<nav>` landmark itself?**

    No. The Breadcrumbs renders as an ARIA `list` of `listitem` children. Following the ARIA breadcrumb pattern, the consuming application wraps the container in `<nav aria-label="Breadcrumb">` (or a more specific label) so the accessible name lives on the landmark rather than on the list.
  

  **Q: How do I mark the current page?**

    Set the `current` property on the Breadcrumb item that represents the currently viewed page. The item reflects `current` as an attribute and applies `aria-current="page"` on the host, so screen readers announce which entry is the current page.
  

  **Q: Which package should I install for Breadcrumbs?**

    The Breadcrumbs ships in the `igniteui-react` package.
  


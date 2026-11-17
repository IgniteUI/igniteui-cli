---
title: "React Right-to-Left (RTL) Support"
description: "Ignite UI for React components support right-to-left (RTL) layouts through the HTML dir attribute, with the same theme for both directions."
keywords: "Ignite UI for React, Infragistics, RTL, right-to-left, dir attribute, mirroring, keyboard navigation"
license: MIT
last_updated: "2026-10-27"
platformType: web-only
mentionedTypes: ["Icon"]
llms:
  description: "Ignite UI for React components support right-to-left (RTL) layouts: set dir=\"rtl\" on the page and the components mirror their layout and most of their keyboard interaction, with no separate RTL theme."
_tocName: RTL Support
---
import ApiLink from 'igniteui-astro-components/components/mdx/ApiLink.astro';
import DocsAside from 'igniteui-astro-components/components/mdx/DocsAside.astro';
import Sample from 'igniteui-astro-components/components/mdx/Sample.astro';
import Faq from 'igniteui-astro-components/components/mdx/Faq.astro';
import FaqItem from 'igniteui-astro-components/components/mdx/FaqItem.astro';

# Right-to-Left (RTL) Support

Ignite UI for React components support right-to-left (RTL) layouts: set `dir="rtl"` on the page and the components mirror their layout and most of their keyboard interaction, with no separate RTL theme.

## Overview

Ignite UI for React takes the direction from the standard HTML `dir` attribute. No component has a direction property, and there is no RTL version of a theme: the theme you already load serves both directions.

| Layer | How it follows the direction |
|---|---|
| **Styles** | Component styles use CSS logical properties, such as `margin-inline-start`, and direction selectors, so the layout mirrors as soon as the direction changes. |
| **Interaction** | Components with horizontal keyboard or pointer interaction, such as Carousel, Slider, Stepper and Tabs, read the direction when the user interacts with them. In RTL, the <kbd>Arrow Left</kbd> and <kbd>Arrow Right</kbd> keys follow the reading direction. |

A few components follow the direction only in part. [Known Limitations](#known-limitations) lists them for React.

## Before You Start

**RTL mirrors the layout; it does not translate text.** The `dir` attribute changes the reading direction only. To show the component strings in another language, see [Localization](../localization.md).

**Set the direction in one place.** For a whole application, set `dir="rtl"` on the `body` element. To mirror only part of a page, set it on a container instead, as described in [Apply RTL to Part of a Page](#apply-rtl-to-part-of-a-page).

**Your own content needs logical properties too.** The components mirror themselves, but styles you write with physical properties, such as `margin-left`, stay where you put them. See [Style Your Own Content for RTL](#style-your-own-content-for-rtl).

## Next Steps

- [Enable RTL for the whole application](#enable-rtl-for-the-whole-application) in the host page.
- [Switch the direction at runtime](#switch-the-direction-at-runtime) when the user changes the language.
- Check the [Known Limitations](#known-limitations) for the components your application uses.

## Available Tools

| Tool | Where | What it does |
|---|---|---|
| `dir` attribute | Any HTML element, usually `body` | Sets the direction of the element and of everything inside it. Accepts `rtl`, `ltr` and `auto`. |
| CSS logical properties | Your stylesheets | Place content relative to the reading direction, such as `padding-inline-start` in place of `padding-left`. |
| `:dir(rtl)` pseudo-class | Your stylesheets | Matches an element whose direction is right-to-left, whether the `dir` attribute is on the element or on an ancestor. |

For directional icons, the Icon and the Icon Button also have a [`mirrored`](mcp:get_api_reference?platform=react&component=IgrIcon&member=mirrored) property. See [Mirror a Directional Icon](#mirror-a-directional-icon).

## Common Workflows

### Enable RTL for the Whole Application

Set `dir="rtl"` on the `body` element of the host page. Every Ignite UI for React component on the page renders right-to-left.

Set the attribute in the `index.html` of your application:

```html
<!doctype html>
<html lang="ar">
  <head>
    <meta charset="utf-8" />
    <title>My App</title>
  </head>
  <body dir="rtl">
    <!-- application content -->
  </body>
</html>
```

### Switch the Direction at Runtime

To change the direction while the application runs, for example when the user picks another language, set the `dir` attribute of the `body` element. The component styles update at once, and the components read the new direction the next time the user interacts with them.

```tsx
function setDirection(dir: 'ltr' | 'rtl') {
  document.body.dir = dir;
}
```

### Apply RTL to Part of a Page

To mirror only part of a page, such as a panel with Arabic or Hebrew content, set `dir="rtl"` on the element that contains it and leave the `body` left-to-right. The components inside the element follow its direction.

The following sample places a Calendar in a container with `dir="rtl"`. Select **Change Directionality** to switch the container between right-to-left and left-to-right.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
    --ig-size: var(--ig-size-large);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 1rem;
}
```
```tsx
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButton, IgrCalendar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

export default function CalendarRtl() {
    const [direction, setDirection] = useState<'ltr' | 'rtl'>('rtl');

    const toggleDirection = () => {
        setDirection(direction === 'rtl' ? 'ltr' : 'rtl');
    };

    return (
        <div className="sample">
            <IgrButton variant="contained" onClick={toggleDirection}>Change Directionality</IgrButton>
            <div className="calendar-container" dir={direction}>
                <IgrCalendar />
            </div>
        </div>
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<CalendarRtl />);
```

The Carousel and the Navigation Drawer mirror their navigation buttons, indicators and slide direction only when `dir="rtl"` is on the `body` element or on the component itself. Inside a right-to-left container, set `dir="rtl"` on these two components as well:

```tsx
<div dir="rtl">
  <IgrCarousel dir="rtl"></IgrCarousel>
</div>
```

### Mirror a Directional Icon

Icons are not mirrored automatically, because most icons look the same in both directions. For an icon that points in the reading direction, such as an arrow, set [`mirrored`](mcp:get_api_reference?platform=react&component=IgrIcon&member=mirrored) to flip it in a right-to-left layout. The [Icon](../layouts/icon.md#mirrored) and the [Icon Button](../inputs/icon-button.md#mirrored) support it.

### Style Your Own Content for RTL

Write the styles of your own content with CSS logical properties, so they mirror together with the components. Use the `:dir(rtl)` pseudo-class for a rule that applies in one direction only:

```css
.toolbar {
  padding-inline-start: 16px; /* left in LTR, right in RTL */
}

.next-icon:dir(rtl) {
  transform: scaleX(-1);
}
```

## Known Limitations

The following components follow the direction only in part in Ignite UI for React.

| Component | What does not follow the direction |
|---|---|
| [Grid](../grids/data-grid.md), [Tree Grid](../grids/tree-grid/overview.md), [Hierarchical Grid](../grids/hierarchical-grid/overview.md), [Pivot Grid](../grids/pivot-grid/overview.md) | The layout and the horizontal scrolling follow the direction, but the keyboard navigation does not. <kbd>Arrow Left</kbd> moves the focus to the previous column and <kbd>Arrow Right</kbd> to the next one, so in RTL, <kbd>Arrow Left</kbd> moves the focus to the right. |
| [Calendar](../scheduling/calendar.md), including the calendar of the [Date Picker](../scheduling/date-picker.md) and the [Date Range Picker](../scheduling/date-range-picker.md) | <kbd>Arrow Left</kbd> moves to the previous day and <kbd>Arrow Right</kbd> to the next one in both directions. |
| [Carousel](../layouts/carousel.md), [Navigation Drawer](../menus/navigation-drawer.md) | The navigation buttons, the indicators and the slide direction mirror only when `dir="rtl"` is on the `body` element or on the component itself, not on the `html` element or on another ancestor. |

If a component does not follow the direction as described on this page, report it on the <a href="https://github.com/IgniteUI/igniteui-react/issues" target="_blank" rel="noopener noreferrer">Ignite UI for React issue tracker</a>.

## Troubleshooting

### Why do the Carousel arrows point the wrong way?

The Carousel and the Navigation Drawer combine the direction of the `body` element with their own `dir` attribute. When `dir="rtl"` is on the `html` element only, they render left-to-right; when it is on both the `body` element and the component, the two cancel out. Set `dir="rtl"` in one place: on the `body` element for the whole page, or on the component for a component inside a right-to-left container.

### Why does my own content stay on the left in RTL?

Styles that use physical properties, such as `margin-left` or `float: left`, do not mirror. Replace them with logical properties, such as `margin-inline-start` or `float: inline-start`, as shown in [Style Your Own Content for RTL](#style-your-own-content-for-rtl).

## Additional Resources

- [Accessibility Compliance](accessibility-compliance.md) — the accessibility standards Ignite UI for React targets.
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/dir" target="_blank" rel="noopener noreferrer">The `dir` attribute on MDN</a> — values and inheritance.
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values" target="_blank" rel="noopener noreferrer">CSS logical properties and values on MDN</a> — the properties that mirror with the direction.
- <a href="https://www.w3.org/International/questions/qa-html-dir" target="_blank" rel="noopener noreferrer">Structural markup and right-to-left text in HTML (W3C)</a> — where to set the direction in a document.

## FAQ

  **Q: How do I enable RTL in Ignite UI for React?**

    Set `dir="rtl"` on the `body` element of the host page. Ignite UI for React components take their direction from the `dir` attribute, so no component setting or extra package is needed. To mirror only part of a page, set the attribute on a container element instead.
  

  **Q: Do I need a separate theme for RTL in Ignite UI for React?**

    No. The Ignite UI for React themes support both directions, and the same theme CSS serves left-to-right and right-to-left pages. 
  

  **Q: Can I switch between LTR and RTL without reloading the page?**

    Yes. Change the `dir` attribute of the `body` element, or of the container that holds the components. The Ignite UI for React component styles update at once, and the components read the new direction the next time the user interacts with them.
  

  **Q: Do the Ignite UI for React grids support RTL?**

    In part. The Grid, Tree Grid, Hierarchical Grid and Pivot Grid lay out their columns and scroll horizontally in the page direction, but their arrow-key navigation is not mirrored. In RTL, Arrow Left moves the focus to the previous column, which is on the right.
  

  **Q: Does RTL translate the text of the Ignite UI for React components?**

    No. The `dir` attribute changes only the reading direction and the layout. Translating the built-in component strings is a separate localization step.
  


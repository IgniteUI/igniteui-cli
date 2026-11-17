---
title: "Angular Right-to-Left (RTL) Support"
description: "Ignite UI for Angular components support right-to-left (RTL) layouts through the HTML dir attribute, with the same theme for both directions."
keywords: "Ignite UI for Angular, Infragistics, RTL, right-to-left, dir attribute, mirroring, keyboard navigation"
license: MIT
last_updated: "2026-10-27"
platformType: web-only
mentionedTypes: ["Icon"]
llms:
  description: "Ignite UI for Angular components support right-to-left (RTL) layouts: set dir=\"rtl\" on the page and the components mirror their layout and most of their keyboard interaction, with no separate RTL theme."
_tocName: RTL Support
---
import ApiLink from 'igniteui-astro-components/components/mdx/ApiLink.astro';
import DocsAside from 'igniteui-astro-components/components/mdx/DocsAside.astro';
import Sample from 'igniteui-astro-components/components/mdx/Sample.astro';
import Faq from 'igniteui-astro-components/components/mdx/Faq.astro';
import FaqItem from 'igniteui-astro-components/components/mdx/FaqItem.astro';

# Right-to-Left (RTL) Support

Ignite UI for Angular components support right-to-left (RTL) layouts: set `dir="rtl"` on the page and the components mirror their layout and most of their keyboard interaction, with no separate RTL theme.

## Overview

Ignite UI for Angular takes the direction from the standard HTML `dir` attribute. No component has a direction property, and there is no RTL version of a theme: the theme you already load serves both directions.

| Layer | How it follows the direction |
|---|---|
| **Styles** | Component styles use CSS logical properties, such as `margin-inline-start`, and direction selectors, so the layout mirrors as soon as the direction changes. |
| **Interaction** | Components with horizontal keyboard or pointer interaction, such as Carousel, Slider, Stepper and Tabs, read the direction when the user interacts with them. In RTL, the <kbd>Arrow Left</kbd> and <kbd>Arrow Right</kbd> keys follow the reading direction. |

A few components follow the direction only in part. [Known Limitations](#known-limitations) lists them for Angular.

## Before You Start

**RTL mirrors the layout; it does not translate text.** The `dir` attribute changes the reading direction only. To show the component strings in another language, see [Localization](../general/localization.md).

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

## Common Workflows

### Enable RTL for the Whole Application

Set `dir="rtl"` on the `body` element of the host page. Every Ignite UI for Angular component on the page renders right-to-left.

Set the attribute in `src/index.html`:

```html
<!doctype html>
<html lang="ar">
  <head>
    <meta charset="utf-8" />
    <title>My App</title>
  </head>
  <body dir="rtl">
    <app-root></app-root>
  </body>
</html>
```

### Switch the Direction at Runtime

To change the direction while the application runs, for example when the user picks another language, set the `dir` attribute of the `body` element. The component styles update at once, and the components read the new direction the next time the user interacts with them.

```ts
import { Component, DOCUMENT, inject } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    private readonly document = inject(DOCUMENT);

    public setDirection(dir: 'ltr' | 'rtl') {
        this.document.body.dir = dir;
    }
}
```

### Apply RTL to Part of a Page

To mirror only part of a page, such as a panel with Arabic or Hebrew content, set `dir="rtl"` on the element that contains it and leave the `body` left-to-right. The components inside the element follow its direction.

The following sample places a Calendar in a container with `dir="rtl"`. Select **Change Directionality** to switch the container between right-to-left and left-to-right.

```typescript
import { Component } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular/calendar';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-calendar-rtl',
    styleUrls: ['./calendar-rtl.component.scss'],
    templateUrl: './calendar-rtl.component.html',
    imports: [IgxButtonDirective, IgxCalendarComponent]
})
export class CalendarRtlComponent {
    public direction: 'ltr' | 'rtl' = 'rtl';

    public toggleDirection(): void {
        this.direction = this.direction === 'rtl' ? 'ltr' : 'rtl';
    }
}
```
```html
<div class="sample">
    <button igxButton="contained" (click)="toggleDirection()">Change Directionality</button>
    <div class="calendar-container" [attr.dir]="direction">
        <igx-calendar></igx-calendar>
    </div>
</div>
```
```scss
.sample {
    --ig-size: var(--ig-size-large);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 1rem;
}
```

### Mirror a Directional Icon

Icons are not mirrored automatically, and the Angular Icon has no option to mirror an icon. For a directional icon in a right-to-left layout, use an icon that points in the reading direction, such as `arrow_back` in place of `arrow_forward`.

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

The following components follow the direction only in part in Ignite UI for Angular.

| Component | What does not follow the direction |
|---|---|
| [Grid](../grid/grid.md), [Tree Grid](../treegrid/tree-grid.md), [Hierarchical Grid](../hierarchicalgrid/hierarchical-grid.md), [Pivot Grid](../pivotgrid/pivot-grid.md) | The layout and the horizontal scrolling follow the direction, but the keyboard navigation does not. <kbd>Arrow Left</kbd> moves the focus to the previous column and <kbd>Arrow Right</kbd> to the next one, so in RTL, <kbd>Arrow Left</kbd> moves the focus to the right. |
| [Calendar](../calendar.md), including the calendar of the [Date Picker](../date-picker.md) and the [Date Range Picker](../date-range-picker.md) | <kbd>Arrow Left</kbd> moves to the previous day and <kbd>Arrow Right</kbd> to the next one in both directions. |
| [Tree](../tree.md) | <kbd>Arrow Left</kbd> collapses a node or moves to its parent, and <kbd>Arrow Right</kbd> expands it, in both directions. |
| [Icon](../layouts/icon.md) | Has no option to mirror an icon. See [Mirror a Directional Icon](#mirror-a-directional-icon). |

If a component does not follow the direction as described on this page, report it on the <a href="https://github.com/IgniteUI/igniteui-angular/issues" target="_blank" rel="noopener noreferrer">Ignite UI for Angular issue tracker</a>.

## Troubleshooting

### Why does `$direction: rtl` fail to compile?

The `core()` mixin, called `igx-core()` before version 13.1.0, no longer has a `$direction` parameter. Version 13.2.0 removed it, together with the RTL-specific `*-rtl.css` theme files, because the regular themes support both directions. Replace `@include igx-core($direction: rtl)` or `@include core($direction: rtl)` with `@include core()`, use the regular theme files, and set the `dir` attribute as described in [Enable RTL for the Whole Application](#enable-rtl-for-the-whole-application). Running `ng update` to 13.2.0 or later makes both changes to your Sass for you.

### Why don't the components follow a direction change at runtime?

Versions earlier than 21.2.0 read the direction once, from the `body` or the `html` element, when the application starts. In those versions, set the `dir` attribute before the application bootstraps, or update to 21.2.0 or later, where the components read the direction each time the user interacts with them.

### Why does my own content stay on the left in RTL?

Styles that use physical properties, such as `margin-left` or `float: left`, do not mirror. Replace them with logical properties, such as `margin-inline-start` or `float: inline-start`, as shown in [Style Your Own Content for RTL](#style-your-own-content-for-rtl).

## Additional Resources

- [Accessibility Compliance](accessibility-compliance.md) — the accessibility standards Ignite UI for Angular targets.
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/dir" target="_blank" rel="noopener noreferrer">The `dir` attribute on MDN</a> — values and inheritance.
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values" target="_blank" rel="noopener noreferrer">CSS logical properties and values on MDN</a> — the properties that mirror with the direction.
- <a href="https://www.w3.org/International/questions/qa-html-dir" target="_blank" rel="noopener noreferrer">Structural markup and right-to-left text in HTML (W3C)</a> — where to set the direction in a document.

## FAQ

  **Q: How do I enable RTL in Ignite UI for Angular?**

    Set `dir="rtl"` on the `body` element of the host page. Ignite UI for Angular components take their direction from the `dir` attribute, so no component setting or extra package is needed. To mirror only part of a page, set the attribute on a container element instead.
  

  **Q: Do I need a separate theme for RTL in Ignite UI for Angular?**

    No. The Ignite UI for Angular themes support both directions, and the same theme CSS serves left-to-right and right-to-left pages. The RTL-specific `*-rtl.css` theme files were removed in version 13.2.0.
  

  **Q: Can I switch between LTR and RTL without reloading the page?**

    Yes. Change the `dir` attribute of the `body` element, or of the container that holds the components. The Ignite UI for Angular component styles update at once, and the components read the new direction the next time the user interacts with them.
  

  **Q: Do the Ignite UI for Angular grids support RTL?**

    In part. The Grid, Tree Grid, Hierarchical Grid and Pivot Grid lay out their columns and scroll horizontally in the page direction, but their arrow-key navigation is not mirrored. In RTL, Arrow Left moves the focus to the previous column, which is on the right.
  

  **Q: Does RTL translate the text of the Ignite UI for Angular components?**

    No. The `dir` attribute changes only the reading direction and the layout. Translating the built-in component strings is a separate localization step.
  


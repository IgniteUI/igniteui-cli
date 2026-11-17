---
title: "Web Components Card Component"
description: "Web Components Card organizes related media, text, and actions in one flexible content container."
keywords: "Web Components Card, card component, content container, media card, Ignite UI for Web Components, Infragistics"
license: MIT
last_updated: "2026-07-30"
mentionedTypes: ["Card", "CardActions", "CardContent", "CardHeader", "CardMedia", "Avatar", "Button", "Icon", "IconButton", "Ripple"]
relatedComponents: ["Grid", "List"]
llms:
  description: "The Ignite UI for Web Components Card organizes related media, text, and actions in one flexible content container."
_tocName: Card
---
# Card

The Ignite UI for Web Components Card organizes related media, text, and actions in one flexible content container.

Use the card to group content about a single subject, such as a product, article, contact, location, or dashboard item.

## Live Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
    padding: 3.5rem 1.5rem;
}

.card-options {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

.card-container {
    --ig-size: var(--ig-size-small);

    inline-size: 100%;
    max-inline-size: 360px;
    min-inline-size: 220px;
}

.card-container igc-card-media img {
    inline-size: 100%;
    aspect-ratio: 15 / 8;
    object-fit: cover;
}

.card-container igc-card-content p {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.5;
}

.card-actions-start,
.card-actions-end {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.hidden {
    display: none;
}
```

## Anatomy

The card is a container whose standard building blocks are header, media, content, and actions.

**Web Components Card anatomy anatomy:** The card anatomy labels the header, media, content, and actions regions.

<div class="card-anatomy-legend ig-typography__body-2">
  <div>
    <strong>A - Media Container</strong>
    <span>1. Image (optional)</span>
  </div>
  <div>
    <strong>B - Card Header</strong>
    <span>2. Title</span>
    <span>3. Avatar (optional)</span>
    <span>4. Subtitle</span>
  </div>
  <div>
    <strong>C - Content area</strong>
    <span>5. Paragraph</span>
  </div>
  <div>
    <strong>D - Card Footer</strong>
    <span>6. Action Buttons, Icon Buttons</span>
  </div>
</div>

<style>{`
  .card-anatomy {
    --igd-anatomy-padding: 8px;
  }

  .card-anatomy .igd-anatomy__image {
    max-width: 800px;
  }

  .card-anatomy-legend {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 48px;
    margin-bottom: 24px;
  }

  .card-anatomy-legend div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .card-anatomy-legend strong {
    margin-bottom: 12px;
  }

  .card-anatomy-legend span {
    display: block;
  }

  @media (max-width: 768px) {
    .card-anatomy-legend {
      grid-template-columns: 1fr 1fr;
      row-gap: 24px;
    }
  }

  @media (max-width: 480px) {
    .card-anatomy-legend {
      grid-template-columns: 1fr;
    }
  }
`}</style>

```text
igc-card                         // host - groups related content
├─ igc-card-media                 // optional media region
│  └─ default slot                // image, video, or other media content
├─ igc-card-header                // optional header region
│  ├─ [slot="thumbnail"]          // optional avatar, icon, or small image
│  ├─ [slot="title"]              // card title
│  ├─ [slot="subtitle"]           // optional card subtitle
│  └─ default slot                // optional additional header content
├─ igc-card-content               // optional body region
│  └─ default slot                // text, lists, or custom content
└─ igc-card-actions               // optional action region
   ├─ [slot="start"]              // leading actions
   ├─ default slot                // centered actions
   └─ [slot="end"]                // trailing actions
```

## Getting Started

To use the Web Components Card, follow the [Ignite UI for Web Components Getting Started](../general-getting-started.md) topic for the basic project setup, then register the component for your target platform.

For Web Components using the **igniteui-webcomponents** package, install the package:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcCard`](mcp:get_api_reference?platform=webcomponents&component=IgcCardComponent), its theme CSS, and register the component, like so:

```ts
import { defineComponents, IgcCardComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcCardComponent);
```

Registering the card also registers the card header, media, content, and actions sub-components. Register any other components your card content uses, such as the avatar, button, and icon button:

```ts
import {
  defineComponents,
  IgcAvatarComponent,
  IgcButtonComponent,
  IgcCardComponent,
  IgcIconButtonComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcCardComponent, IgcAvatarComponent, IgcButtonComponent, IgcIconButtonComponent);
```

The simplest way to start using the [`IgcCard`](mcp:get_api_reference?platform=webcomponents&component=IgcCardComponent) is as follows:

```html
<igc-card>
  <igc-card-header>
    <h3 slot="title">Title</h3>
  </igc-card-header>
  <igc-card-content>
    <p>Content</p>
  </igc-card-content>
</igc-card>
```

## Usage

Compose a card from the card container and whichever sub-components your content needs.

### Media

Use [`IgcCardMedia`](mcp:get_api_reference?platform=webcomponents&component=IgcCardMediaComponent) to place images, video, or other media content in the card.

```html
<igc-card-media>
  <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50" alt="New York city skyline" />
</igc-card-media>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: flex-start;
    justify-content: center;
    gap: 1.25rem;
    padding: 2rem 0.5rem;
}

.media-card {
    --ig-card-border-radius: 0.25rem;

    flex: 1 1 15rem;
    max-inline-size: 16rem;
}

.media-card__media {
    block-size: 6.5rem;
}

.media-card__media img {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
}

.media-card igc-card-header {
    padding: 1rem 1rem 0;
}

.media-card [slot="title"] {
    margin-block-end: 0;
    color: var(--ig-gray-900);
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0.15px;
}

.media-card [slot="subtitle"] {
    color: var(--ig-gray-900);
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0.1px;
}

.media-card igc-card-actions {
    padding: 1.5rem 1rem 0.75rem;
    flex-wrap: nowrap;
}

.media-card__icons {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--ig-gray-900);
}

.media-card__icons igc-icon {
    --ig-icon-size: 1rem;
}

.media-card__action {
    --ig-size: var(--ig-size-small);
}

.media-card__action::part(base) {
    padding: 0;
    background: transparent;
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.25px;
    text-transform: uppercase;
}
```

### Position

Place the media above or below the header. The card renders its regions in the order you add them, so the element order in your markup sets the media position.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: flex-start;
    justify-content: center;
    gap: 3.5rem;
    padding: 2rem 1rem;
}

.card-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
}

.card-item__label {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    line-height: 20px;
    letter-spacing: 0.3px;
}

.position-card {
    --ig-card-border-radius: 0.25rem;

    inline-size: 16rem;
}

.position-card__media {
    block-size: 6.5rem;
}

.position-card__media img {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
}

.position-card igc-card-header {
    padding: 1rem 1rem 0;
}

.position-card [slot="title"] {
    margin-block-end: 0;
    color: var(--ig-gray-900);
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.15px;
}

.position-card [slot="subtitle"] {
    color: var(--ig-gray-900);
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.1px;
}

.position-card igc-card-actions {
    padding: 1.5rem 1.5rem 0.5rem;
    flex-wrap: nowrap;
}

.position-card igc-card-header + igc-card-media {
    margin-block-start: 0.5rem;
}

.position-card igc-card-media + igc-card-actions {
    padding-block-start: 1rem;
}

.position-card__icons {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    color: var(--ig-gray-900);
}

.position-card__icons igc-icon {
    --ig-icon-size: 1rem;
}

.position-card__action {
    --ig-size: var(--ig-size-small);
}

.position-card__action::part(base) {
    padding: 0;
    background: transparent;
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.25px;
    text-transform: uppercase;
}
```

### Header Slots

Use the header slots to define thumbnail, title, subtitle, and additional header content.

```html
<igc-card-header>
  <igc-avatar slot="thumbnail" initials="TS"></igc-avatar>
  <h3 slot="title">Title</h3>
  <span slot="subtitle">Subtitle</span>
</igc-card-header>
```

Pass a heading element, such as `<h3>`, to the `title` slot so the card takes its place in the document outline, and use a neutral inline element such as `<span>` for the `subtitle`. The header resets the margin and font of slotted content, so the heading keeps the card typography.

### Content

Use [`IgcCardContent`](mcp:get_api_reference?platform=webcomponents&component=IgcCardContentComponent) for the card body text, lists, or custom content.

```html
<igc-card-content>
  <p>New York City comprises five boroughs where the Hudson River meets the Atlantic Ocean.</p>
</igc-card-content>
```

### Elevated

Set [`elevated`](mcp:get_api_reference?platform=webcomponents&component=IgcCardComponent&member=elevated) when the card should use the elevated visual treatment.

```html
<igc-card elevated>
  ...
</igc-card>
```

### Actions Slots

Use the actions slots to place leading, centered, and trailing actions in [`IgcCardActions`](mcp:get_api_reference?platform=webcomponents&component=IgcCardActionsComponent).

```html
<igc-card-actions>
  <igc-button slot="start">Like</igc-button>
  <igc-button>Comment</igc-button>
  <igc-icon-button slot="end" name="more_vert"></igc-icon-button>
</igc-card-actions>
```

### Actions Orientation

Use the [`orientation`](mcp:get_api_reference?platform=webcomponents&component=IgcCardActionsComponent&member=orientation) property to arrange [`IgcCardActions`](mcp:get_api_reference?platform=webcomponents&component=IgcCardActionsComponent) content horizontally or vertically. The actions are horizontal by default, so set `orientation` to `vertical` to stack them.

```html
<igc-card-actions orientation="vertical">
  <igc-button slot="start">Like</igc-button>
  <igc-button slot="start">Share</igc-button>
  <igc-icon-button slot="end" name="more_vert"></igc-icon-button>
</igc-card-actions>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 3rem;
    padding: 2.5rem 1.5rem;
}

.card-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
}

.card-item__label {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    line-height: 20px;
    letter-spacing: 0.3px;
}

.post-card {
    --ig-card-border-radius: 0.5rem;

    inline-size: 310px;
}

.post-card igc-card-header {
    padding: 1rem 1rem 0;
}

.post-card [slot="title"] {
    color: var(--ig-gray-900);
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0.15px;
}

.post-card [slot="subtitle"] {
    color: var(--ig-gray-600);
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0.1px;
}

.post-card igc-card-content {
    padding: 1.5rem 1rem 0;
    overflow: visible;
}

.post-card igc-card-content p {
    margin: 0;
    color: var(--ig-gray-700);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.25px;
}

.post-card igc-card-actions {
    padding: 0.75rem 1rem 0.5rem;
}

.post-card igc-icon-button {
    --ig-size: var(--ig-size-small);
    --ig-flat-icon-button-foreground: var(--ig-gray-900);
}

.post-card igc-card-actions igc-icon-button:not(:first-of-type) {
    margin-inline-start: 0.5rem;
}

.post-card--vertical {
    flex-direction: row;
    inline-size: 390px;
}

.post-card--vertical igc-card-content {
    padding-block-end: 1rem;
}

.post-card__body {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    min-inline-size: 0;
}

.post-card--vertical igc-card-actions {
    justify-content: flex-start;
    margin-block-start: 0;
    padding: 1rem 1rem 1rem 0;
}
```

### Layout

Use layout wrappers when card sections need to be arranged horizontally or split between media and content areas.

For a horizontal card, group the header and content in one wrapper, add the actions beside that wrapper, and apply a flex row to the card content.

```html
<igc-card>
  <div class="card-horizontal">
    <div>
      <igc-card-header>
        <img src="https://dl.infragistics.com/x/img/music/rozes.jpg" slot="thumbnail" alt="Rozes album cover" />
        <span slot="title">Rozes</span>
        <span slot="subtitle">Under the Grave (2016)</span>
      </igc-card-header>
      <igc-card-content>
        <p>As I have always said: I write what's real and what's true, even if it means throwing myself under the bus.</p>
      </igc-card-content>
    </div>
    <div class="divider"></div>
    <igc-card-actions>
      <igc-icon-button variant="flat" name="skip_previous" aria-label="Previous track"></igc-icon-button>
      <igc-icon-button variant="flat" name="play_arrow" aria-label="Play"></igc-icon-button>
      <igc-icon-button variant="flat" name="skip_next" aria-label="Next track"></igc-icon-button>
    </igc-card-actions>
  </div>
</igc-card>
```

```css
.card-horizontal {
  display: flex;
  flex-direction: row;
  flex: 1 1 0%;
}

.card-horizontal igc-card-actions {
  justify-content: center;
}
```

For a semi-horizontal card, keep the header, content, and actions stacked in one column, then place the media section beside that column.

```html
<igc-card>
  <div class="semi-horizontal">
    <div>
      <igc-card-header>
        <igc-avatar src="https://dl.infragistics.com/x/img/music/singer_with_mic.jpg" slot="thumbnail"></igc-avatar>
        <span slot="title">HERE</span>
        <span slot="subtitle">by Mellow D</span>
      </igc-card-header>
      <igc-card-content>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </igc-card-content>
      <igc-card-actions>
        <igc-button>Play Album</igc-button>
      </igc-card-actions>
    </div>
    <igc-card-media class="card-media">
      <img src="https://dl.infragistics.com/x/img/music/singer_female.jpg" alt="Singer" />
    </igc-card-media>
  </div>
</igc-card>
```

```css
.semi-horizontal {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}

.card-media {
  width: 96px;
  min-width: 96px;
}
```

### Do/Don't

The card usually works as an overview UI and an entry point for more detailed information. Avoid clogging it with too much information, and as you create dashboards with it, size and arrange the cards consistently in order to form a layout grid with equal horizontal and vertical gaps between cards.

<div class="card-guidance">
  <figure class="card-guidance__item">
    
    <figcaption>
      <span class="card-guidance__do">Do</span>
      <span class="card-guidance__text">Keep body text brief and focused on essential information for quick readability.</span>
    </figcaption>
  </figure>
  <figure class="card-guidance__item">
    
    <figcaption>
      <span class="card-guidance__not">Don't</span>
      <span class="card-guidance__text">Avoid overloading the card body with long paragraphs or unnecessary detail.</span>
    </figcaption>
  </figure>
</div>

<style>{`
  .card-guidance {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    margin-bottom: 24px;
  }

  .card-guidance__item {
    margin: 0;
  }

  .card-guidance__item img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid #d3d3d3;
  }

  .card-guidance figcaption {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-top: 12px;
    text-align: start;
    font: inherit;
    color: inherit;
  }

  .card-guidance__do,
  .card-guidance__not {
    font-size: 18px;
    font-weight: 600;
  }

  .card-guidance__do {
    color: #0f8a3d;
  }

  .card-guidance__not {
    color: #d0273c;
  }

  @media (max-width: 600px) {
    .card-guidance {
      grid-template-columns: 1fr;
    }
  }
`}</style>

## Properties

The card API exposes container appearance and action-layout controls.

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| [`elevated`](mcp:get_api_reference?platform=webcomponents&component=IgcCardComponent&member=elevated) | `boolean` | `false` | Sets the card to use an elevated appearance with shadow. |
| [`orientation`](mcp:get_api_reference?platform=webcomponents&component=IgcCardActionsComponent&member=orientation) | `"horizontal" \| "vertical"` | `"horizontal"` | Sets the layout orientation of [`IgcCardActions`](mcp:get_api_reference?platform=webcomponents&component=IgcCardActionsComponent). |

## Styling

The card appearance is controlled through theme variables.

| Variable | What it changes |
| -- | -- |
| `--ig-card-background` | Card background color. |
| `--ig-card-outline-color` | Card outline color. |
| `--ig-card-header-text-color` | Card title text color. |
| `--ig-card-subtitle-text-color` | Card subtitle text color. |
| `--ig-card-content-text-color` | Card content text color. |
| `--ig-card-actions-text-color` | Card actions text color. |
| `--ig-card-resting-shadow` | Card shadow in its resting state. |
| `--ig-card-hover-shadow` | Card shadow in its hover state. |
| `--ig-card-border-radius` | Card border radius. |

The card header also exposes CSS parts for its text containers.

| CSS Part | Description |
| -- | -- |
| `header` | Card header text container. |
| `title` | Title slot wrapper. |
| `subtitle` | Subtitle slot wrapper. |

### Sass Theming

Use the `card-theme` function when your application customizes Ignite UI themes through Sass.

```scss
@use "igniteui-theming/sass/themes" as *;

$custom-card-theme: card-theme(
  $background: #1f2937,
  $border-radius: 12px,
  $header-text-color: #ffffff,
  $content-text-color: #e5e7eb
);

:root {
  @include tokens($custom-card-theme);
}
```

### CSS Variables

Set component CSS variables directly when you need local styling without a Sass build step.

```css
igc-card {
  --ig-card-background: var(--ig-secondary-900);
  --ig-card-header-text-color: var(--ig-secondary-900-contrast);
  --ig-card-content-text-color: var(--ig-secondary-900-contrast);
}

igc-card-header::part(subtitle) {
  color: var(--ig-warn-500);
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@import url("https://use.typekit.net/bng2zgw.css");

.container.sample {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3.75rem;
    padding: 2.5rem 1.5rem;
}

.balance-card {
    --ig-card-border-radius: 1rem;
    --ig-card-outline-color: #99c9ff;

    position: relative;
    inline-size: 312px;
    padding: 0.5rem;
    background: #e6f2ff;
}

.balance-card igc-card-header {
    padding: 1rem 1rem 0;
}

.balance-card [slot="title"] {
    color: #004699;
    font-family: "aktiv-grotesk", "Aktiv Grotesk", Arial, sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.1px;
}

.trend-chip {
    position: absolute;
    block-size: 24px;
    inset-block-start: 1.5rem;
    inset-inline-end: 1.5rem;
    z-index: 1;
}

.trend-chip::part(base) {
    box-sizing: border-box;
    block-size: 24px;
    padding: 2px 6px;
    border: none;
    border-radius: 16px;
    background: #cce4ff;
    color: #004699;
    font-family: "Titillium Web", Verdana, Tahoma, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.25px;
}

.trend-chip::part(prefix) {
    color: #004699;
}

.trend-chip igc-icon {
    --ig-icon-size: 1.25rem;
}

.balance-card igc-card-content {
    padding: 0 1rem;
    overflow: visible;
}

.balance-amount {
    display: block;
    color: #0176ff;
    font-family: "aktiv-grotesk", "Aktiv Grotesk", Arial, sans-serif;
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.5rem;
    letter-spacing: 0;
}

.balance-card igc-card-actions {
    padding: 1rem;
}

.balance-actions {
    display: inline-flex;
    gap: 0.5rem;
}

.balance-actions igc-icon-button {
    --ig-flat-icon-button-foreground: #004699;
}

.balance-actions igc-icon-button::part(base) {
    inline-size: 2.25rem;
    block-size: 2.25rem;
    border-radius: 50%;
    background: #ffffff;
}

.support-card {
    --ig-card-border-radius: 1rem;
    --ig-card-outline-color: #e5ebf3;

    position: relative;
    inline-size: 246px;
    padding: 0.5rem;
    background: #ffffff;
}

.support-media {
    block-size: 124px;
    padding: 1rem;
    border-radius: 1rem;
}

.support-media img {
    inline-size: 100%;
    block-size: 100%;
    object-fit: contain;
}

.support-tag {
    position: absolute;
    inset-block-start: 0.75rem;
    inset-inline-start: 1rem;
    z-index: 1;
}

.support-tag::part(base) {
    box-sizing: border-box;
    block-size: 24px;
    padding: 2px 10px;
    border: none;
    border-radius: 16px;
    background: #e6f2ff;
    color: #004699;
    font-family: "Titillium Web", Verdana, Tahoma, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.25px;
}

.support-card igc-card-header {
    padding: 1rem 1rem 0;
}

.support-card [slot="title"] {
    color: #004699;
    margin-block-end: 0;
    font-family: "aktiv-grotesk", "Aktiv Grotesk", Arial, sans-serif;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.25rem;
    letter-spacing: 0;
}

.support-card igc-card-actions {
    padding: 1rem 1rem 0.5rem;
}

.support-link {
    color: #7d91ab;
    font-family: "aktiv-grotesk", "Aktiv Grotesk", Arial, sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1rem;
    letter-spacing: 0.15px;
}
```

### Styling with Tailwind

Use Tailwind utility classes when your application already uses Tailwind and you want the card layout and local color choices to stay in the component markup.

```css
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@source "../index.html";

.sample {
    display: grid;
    grid-template-columns: repeat(auto-fit, 21.5rem);
    gap: 2.5rem;
    place-content: center;
    height: 100vh;
}

igc-card:nth-of-type(2) {
    align-self: center;
}

igc-card-header {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 100%;
    padding: 1rem;
}

igc-card-header::part(header) {
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    justify-content: center;
}

igc-card-header [slot="thumbnail"] {
    margin-inline-end: 1rem;
}

.card-sample-custom-subtitle {
    display: block;
    color: var(--ig-gray-700);
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin: 0 1rem 0.5rem;
}

.stats-title {
    color: var(--ig-gray-900);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
}

.stats-subtitle {
    color: var(--ig-gray-500);
    font-size: 0.875rem;
    line-height: 1.25rem;
}
```

## Accessibility

The card is a container. Grouping and media semantics come from the card regions, while keyboard operability and accessible names come from the content you place inside them.

### Keyboard Interaction

The card and its header, media, content, and actions regions declare no key handlers and are not in the tab order. Focus moves through the focusable content you place inside them, in DOM order.

| Key | Action |
| -- | -- |
| <kbd>Tab</kbd> | Moves focus to the next focusable element inside the card, such as a button or link in the content or actions area. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves focus to the previous focusable element inside the card. |

The actions area always renders its leading region, then its centered content, then its trailing region. Switching the actions to a vertical layout restyles them without reordering the DOM, so keyboard and screen reader order stay the same.

### Screen Readers / ARIA

- The card and every card region render plain slots and set no `role` or `aria-*` attributes. The wrapper elements inside the header have no accessible name and create no landmarks. Add a role and an accessible name on the card host yourself when your information architecture needs one.
- The `title` and `subtitle` slots render whatever element you pass and do not impose a heading level.
- Add `alt` text to images in the media region.
- Give icon-only buttons in the actions area an accessible name; the icon alone provides none.
- Use a single interactive element when the whole card triggers one action, rather than attaching a click handler to the container, so the action keeps a role and a name.

### Accessibility Compliance

Infragistics documents Ignite UI for Web Components accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| -- | -- |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) | The card regions project slotted content without rewriting it, so headings, text, lists, media, and controls keep their native semantics. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) | The card adds no key handling and no focus traps of its own, so keyboard-operable content inside it stays operable. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html) | The actions area renders its `start` slot, default slot, and `end` slot in a fixed DOM order that the vertical orientation does not change. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) | The card sets no implicit role, which leaves the name, role, and value of every control to the content you supply. |

Your responsibilities:

- Pass a real heading element to the title so the card takes its place in the document outline, and keep the subtitle as plain text.
- Provide alternative text for meaningful media, and give the media region an accessible name wherever it is exposed as an image.
- Give icon-only action buttons an accessible name.
- Keep DOM order and visual order aligned when you build horizontal or split card layouts with CSS.
- Keep sufficient contrast when overriding card colors.

## API References

Use these API references for the complete card, card section, and supporting component APIs.

[`IgcCard`](mcp:get_api_reference?platform=webcomponents&component=IgcCardComponent)
[`IgcCardActions`](mcp:get_api_reference?platform=webcomponents&component=IgcCardActionsComponent)
[`IgcCardContent`](mcp:get_api_reference?platform=webcomponents&component=IgcCardContentComponent)
[`IgcCardHeader`](mcp:get_api_reference?platform=webcomponents&component=IgcCardHeaderComponent)
[`IgcCardMedia`](mcp:get_api_reference?platform=webcomponents&component=IgcCardMediaComponent)
[`IgcAvatar`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent)
[`IgcButton`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent)
[`IgcIconButton`](mcp:get_api_reference?platform=webcomponents&component=IgcIconButtonComponent)
[`IgcIcon`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent)
[`IgcRipple`](mcp:get_api_reference?platform=webcomponents&component=IgcRippleComponent)

## Dependencies

The card uses its own header, media, content, and actions sub-components. Cards that include thumbnails, actions, icons, or ripples also depend on the corresponding [`IgcAvatar`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent), [`IgcButton`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent), [`IgcIconButton`](mcp:get_api_reference?platform=webcomponents&component=IgcIconButtonComponent), [`IgcIcon`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent), and [`IgcRipple`](mcp:get_api_reference?platform=webcomponents&component=IgcRippleComponent) components.

Register the card component and any supporting components that your card content uses.

## Additional Resources

Use these resources to continue with Ignite UI for Web Components Card support, source, and related layout guidance.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

## Related Components

Use the [Grid](../grids/data-grid.md) when users need dense tabular data with sorting, filtering, and column-level interaction. Use the [List](../grids/list.md) when repeated items should remain compact and primarily vertical.

## FAQ

  **Q: How do I make an entire card clickable without breaking screen readers?**

    The card is a plain container and adds no interactive behavior, so wrapping the whole card in a link is a common but harmful shortcut: the accessible name of that link becomes every piece of text in the card. Put a real link or button on the card title instead, then stretch it over the card with an absolutely positioned pseudo-element that covers the card box. The title stays the accessible name, the whole rectangle stays clickable, and text selection and middle-click keep working.
  
  **Q: How do I make cards in a row or grid the same height?**

    The card sizes itself from its content and does not equalize heights across siblings. Lay the cards out in a CSS grid or a flex row so each card stretches to the row height, give the media region a fixed height or `aspect-ratio`, and clamp the title and body to a set number of lines with `-webkit-line-clamp`. Unequal card heights almost always come from letting each image and each paragraph decide its own height.
  
  **Q: Why is my card image cropped, and how do I control its size?**

    The card media region stretches its content to the full width and height of the region and applies `object-fit: cover`, so the image is cropped rather than distorted. Size the media region itself with CSS `height` or `aspect-ratio`; changing the dimensions of the image inside has no effect.
  
  **Q: Why do my card actions appear in a different region than the one I placed them in?**

    Content in the `end` slot of the card actions takes an automatic leading margin so it aligns with the opposite edge of the actions area, which makes a single trailing action look detached from the rest. Move the element to the `start` slot or to the default slot when it belongs with the other actions. The three regions always render in `start`, default, `end` order regardless of the orientation.
  
  **Q: When should I use Grid or List instead of Card?**

    Use Grid when the data is dense and tabular and readers need to scan, sort, or compare across columns, and use List when many short, uniform rows must fit in a small space. Use Card when each item deserves its own media, longer text, and its own actions. A long scroll of cards is usually a list in disguise.
  


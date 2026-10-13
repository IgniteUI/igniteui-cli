---
title: "Carousel"
description: "Use the Ignite UI for Web Components Carousel component to show slide-based content with navigation, indicators, animation, and automatic transitions."
keywords: "Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Carousel component, Web Components Carousel control"
license: MIT
mentionedTypes: ["Carousel", "CarouselSlide", "CarouselIndicator", "Icon", "Input", "Button"]
relatedComponents: ["Tabs", "Stepper"]
last_updated: "2026-08-17"
llms:
  description: "The Ignite UI for Web Components Carousel is a slide-based layout component for presenting images, cards, or other content with navigation controls and indicators."
_tocName: Carousel
---
# Carousel Component

The Ignite UI for Web Components Carousel is a slide-based layout component for presenting images, cards, or other content with navigation controls and indicators.

Use the Carousel when users need to browse a small collection of related slides one at a time, with optional animation, custom navigation, and automatic transitions.

## Live Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.carousel-container {
    padding: 16px;
}

.image-container {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
}

img {
    object-fit: fill;
    max-width: 90%;
}

igc-carousel {
    margin-inline: auto;
    max-width: 75%;
    height: 450px;
}

igc-carousel-slide::part(base) {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 75%;
    margin-inline: auto;
}
```

## Anatomy

The Carousel component is composed of a host element, projected slides, navigation controls, and indicators that select the active slide.

**Web Components Carousel anatomy anatomy:** The carousel anatomy labels the slide area, navigation controls, and indicators.

<style>{`
  .carousel-anatomy {
    --igd-anatomy-padding: 48px 32px;
  }

  .carousel-anatomy .igd-anatomy__image {
    max-width: 420px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Slides:</strong> The content panels that cycle through the carousel, each displaying an image, text, or media.<br />
<strong>2. Navigation Icon Buttons:</strong> Navigate previous and next slides.<br />
<strong>3. Indicators:</strong> Show the total number of slides and highlight the currently active one.</span>

```text
igc-carousel                     // host - coordinates slides, navigation, and indicators
|- igc-carousel-slide             // slide item
|- igc-carousel-indicator          // optional custom indicator for a slide
|- [slot="previous-button"]        // optional custom previous navigation content
`- [slot="next-button"]            // optional custom next navigation content
```

## Getting Started

The Web Components Carousel requires the carousel component, slide component, and theme stylesheet before you declare slides.

Install Ignite UI for Web Components and configure the theme from the [Getting Started](../general-getting-started.md) topic before adding the Carousel to an application.

Import and register the [`IgcCarousel`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent) component and its theme.

```ts
import { defineComponents, IgcCarouselComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcCarouselComponent);
```

## Usage

The Web Components Carousel is configured by placing slide components inside the host and then enabling the navigation, indicator, and transition behavior your layout needs.

### Slides

Use the [`IgcCarousel`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent) selector to wrap your slides. The slides may contain images, text, forms, or other components.

```html
<igc-carousel>
    <igc-carousel-slide>
        <img src="assets/images/carousel/ignite-ui-indigo-design.png" alt="Ignite UI Indigo Design" />
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/slider-image-chart.png" alt="Chart preview" />
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/ignite-ui-charts.png" alt="Ignite UI Charts" />
    </igc-carousel-slide>
</igc-carousel>
```

### Active Slide

Set the [`active`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselSlideComponent&member=active) property on the slide that should be selected when the Carousel renders.

```html
<igc-carousel>
    <igc-carousel-slide>
        ...
    </igc-carousel-slide>
    <igc-carousel-slide active>
        ...
    </igc-carousel-slide>
</igc-carousel>
```

**Note:** 
If no active slide is set, the first one is active by default. If multiple slides are active during initial rendering or later updates, the last active slide is used.

### Configuration

Use the Carousel configuration properties to control looping, indicator placement, navigation visibility, and orientation.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.configuration-sample {
    display: grid;
    width: min(860px, calc(100% - 32px));
    gap: 16px;
    margin: 16px auto 0;
}

.configuration-controls {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    align-items: center;
    justify-content: end;
    gap: 16px;
}

igc-switch {
    --ig-size: var(--ig-size-small);
}

igc-carousel {
    height: 340px;
    overflow: hidden;
    border: 1px solid var(--ig-gray-300);
    border-radius: 8px;
    background: var(--ig-surface-500);
}

igc-carousel::part(previous),
igc-carousel::part(next) {
    width: 40px;
    height: 40px;
}

igc-carousel::part(previous) {
    left: 16px;
}

igc-carousel::part(next) {
    right: 16px;
}

igc-carousel-slide {
    display: grid;
    height: 100%;
    place-items: center;
    background:
        linear-gradient(135deg, color-mix(in srgb, var(--ig-primary-500) 12%, transparent), transparent 42%),
        linear-gradient(315deg, color-mix(in srgb, var(--ig-secondary-500) 12%, transparent), transparent 42%),
        var(--ig-gray-100);
}

.slide-card {
    display: grid;
    width: min(420px, 100%);
    gap: 10px;
    margin: 0;
    padding: 28px;
    border: 1px solid var(--ig-gray-300);
    border-radius: 8px;
    color: var(--ig-gray-900);
    background: color-mix(in srgb, var(--ig-surface-500) 88%, transparent);
    box-shadow: 0 14px 34px rgb(0 0 0 / 0.14);
}

.slide-card span {
    color: var(--ig-primary-500);
    font-size: 12px;
    font-weight: 700;
}

.slide-card h3 {
    margin: 0;
    font-size: 28px;
    line-height: 1.2;
}

.slide-card p {
    margin: 0;
    color: var(--ig-gray-700);
    line-height: 1.45;
}

@media (max-width: 760px) {
    .configuration-controls {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        justify-content: stretch;
    }
}
```

The [`disableLoop`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent&member=disableLoop) property disables the looping behavior that moves from the last slide to the first slide, or from the first slide to the last slide.

```html
<igc-carousel disable-loop="true">
    ...
</igc-carousel>
```

Use the [`indicatorsOrientation`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent&member=indicatorsOrientation) property to change where the indicators are positioned.

```html
<igc-carousel indicators-orientation="start">
    ...
</igc-carousel>
```

Use [`hideIndicators`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent&member=hideIndicators) to hide the indicators and [`hideNavigation`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent&member=hideNavigation) to hide the navigation buttons.

```html
<igc-carousel hide-navigation="true" hide-indicators="true">
    ...
</igc-carousel>
```

Use the [`vertical`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent&member=vertical) property to display the Carousel in vertical mode.

```html
<igc-carousel vertical="true">
    ...
</igc-carousel>
```

### Custom Indicators

Use the [`IgcCarouselIndicator`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselIndicatorComponent) component to replace the default indicator content.

```html
<igc-carousel>
    <igc-carousel-indicator>
        <span>Off</span>
        <span slot="active">On</span>
    </igc-carousel-indicator>
    <igc-carousel-indicator>
        <span>Off</span>
        <span slot="active">On</span>
    </igc-carousel-indicator>
    <igc-carousel-slide>
        <img src="assets/images/card/media/the_red_ice_forest.jpg" alt="Red ice forest" />
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/card/media/yosemite.jpg" alt="Yosemite" />
    </igc-carousel-slide>
</igc-carousel>
```

Provide both the default indicator content and the `active` slot content for each custom indicator.

### Custom Navigation Buttons

Use the `previous-button` and `next-button` slots to provide custom navigation button content.

```html
<igc-carousel>
    <igc-icon slot="previous-button" name="previous" collection="material"></igc-icon>
    <igc-icon slot="next-button" name="next" collection="material"></igc-icon>
    ...
</igc-carousel>
```

Use text, SVG, or [`IgcIcon`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent) content in these slots when the default navigation controls do not fit the design.

### Slide Content

Place forms, images, and other components inside a slide when each step in the Carousel needs richer content.

```html
<igc-carousel>
    <igc-carousel-slide>
        <div>
            <img src="assets/images/svg/carousel/SignUp.svg" alt="Sign up" />
            <form>
                <igc-input type="text" placeholder="Username">
                    <igc-icon slot="prefix" name="person"></igc-icon>
                </igc-input>
                <igc-input type="password" placeholder="Password">
                    <igc-icon slot="prefix" name="password"></igc-icon>
                </igc-input>
                <igc-button type="reset">Sign In</igc-button>
            </form>
        </div>
    </igc-carousel-slide>
</igc-carousel>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.carousel-container {
  width: min(760px, 100%);
  margin: 16px auto 0;
}

igc-carousel {
  height: 440px;
  overflow: hidden;
  border: 1px solid var(--ig-gray-300);
  border-radius: 8px;
  background: var(--ig-surface-500);
}

igc-carousel::part(previous),
igc-carousel::part(next) {
  width: 40px;
  height: 40px;
}

igc-carousel::part(previous) {
  left: 16px;
}

igc-carousel::part(next) {
  right: 16px;
}

igc-carousel::part(indicators) {
  background: transparent;
}

igc-carousel-slide {
  display: grid;
  box-sizing: border-box;
  height: 100%;
  padding-bottom: 48px;
  place-items: center;
}

igc-carousel-slide.slide-frame {
  background: var(--ig-gray-100);
}

.slide-shell {
  display: grid;
  grid-template-columns: minmax(0, 390px) 120px;
  width: fit-content;
  height: auto;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin: 0 auto;
  padding: 24px 0;
}

igc-carousel-slide.slide-coast {
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--ig-primary-500) 12%, transparent), transparent 45%),
    var(--ig-gray-100);
}

igc-carousel-slide.slide-city {
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--ig-secondary-500) 12%, transparent), transparent 45%),
    var(--ig-gray-100);
}

igc-carousel-slide.slide-resort {
  padding-bottom: 76px;
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--ig-success-500) 12%, transparent), transparent 45%),
    var(--ig-gray-100);
}

.feature-card {
  display: grid;
  gap: 14px;
  padding: 22px 24px;
  border: 1px solid var(--ig-gray-300);
  border-radius: 8px;
  background: color-mix(in srgb, var(--ig-surface-500) 86%, transparent);
  box-shadow: 0 14px 34px rgb(0 0 0 / 0.14);
}

.slide-label {
  color: var(--ig-primary-500);
  font-size: 12px;
  font-weight: 700;
}

.feature-copy {
  display: grid;
  gap: 8px;
}

.feature-copy h3 {
  margin: 0;
  color: var(--ig-gray-900);
  font-size: 24px;
  line-height: 1.2;
}

.feature-copy p {
  margin: 0 0 8px;
  color: var(--ig-gray-700);
  line-height: 1.45;
}

.feature-card igc-button {
  justify-self: start;
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip-row span {
  padding: 6px 10px;
  border: 1px solid var(--ig-gray-300);
  border-radius: 999px;
  color: var(--ig-gray-700);
  background: var(--ig-surface-500);
  font-size: 14px;
}

.route-visual {
  display: grid;
  width: 120px;
  height: 180px;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  gap: 8px;
}

.route-visual span {
  display: block;
  border-radius: 8px;
  background: color-mix(in srgb, var(--ig-surface-500) 72%, transparent);
  box-shadow: 0 10px 24px rgb(0 0 0 / 0.12);
}

.route-visual span:nth-child(1) {
  height: 46%;
  opacity: 0.75;
}

.route-visual span:nth-child(2) {
  height: 82%;
}

.route-visual span:nth-child(3) {
  height: 62%;
  opacity: 0.9;
}

.event-card {
  gap: 10px;
  padding: 18px 22px;
}

.event-summary {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border: 1px solid var(--ig-gray-300);
  border-radius: 8px;
  background: var(--ig-surface-500);
}

.event-date {
  display: grid;
  width: 46px;
  padding: 4px 0;
  place-items: center;
  border-radius: 6px;
  color: var(--ig-primary-500);
  background: color-mix(in srgb, var(--ig-primary-500) 16%, transparent);
  font-size: 10px;
  font-weight: 700;
  line-height: 1.1;
}

.event-date strong {
  color: var(--ig-gray-900);
  font-size: 22px;
}

.event-details {
  display: grid;
  gap: 3px;
  color: var(--ig-gray-700);
  font-size: 14px;
}

.event-details strong {
  color: var(--ig-gray-900);
  font-size: 15px;
}

.event-visual {
  position: relative;
  width: 120px;
  height: 180px;
}

.ticket-stack {
  position: absolute;
  top: 10px;
  left: 20px;
  width: 96px;
  height: 144px;
}

.ticket {
  position: absolute;
  display: grid;
  width: 96px;
  height: 144px;
  border-radius: 10px;
  background: color-mix(in srgb, var(--ig-surface-500) 74%, transparent);
  box-shadow: 0 10px 24px rgb(0 0 0 / 0.12);
}

.ticket--back {
  top: 12px;
  left: -20px;
  opacity: 0.56;
  transform: rotate(-8deg);
}

.ticket--front {
  inset: 0;
  grid-template-rows: 1fr auto 1fr;
  padding: 18px;
  transform: rotate(5deg);
}

.ticket--front span {
  display: block;
  height: 8px;
  border-radius: 999px;
  background: var(--ig-primary-300);
}

.ticket--front span:nth-child(2) {
  width: 72%;
  background: var(--ig-primary-500);
}

.ticket--front span:nth-child(3) {
  align-self: end;
  width: 54%;
  background: var(--ig-gray-300);
}

.offer-summary {
  display: grid;
  gap: 4px;
  color: var(--ig-gray-700);
  font-size: 14px;
}

.offer-card {
  gap: 8px;
  padding: 16px 22px;
}

.offer-summary > div {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.offer-summary strong {
  color: var(--ig-gray-900);
  font-size: 24px;
}

.addon-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 12px;
  border-radius: 8px;
  color: var(--ig-gray-700);
  background: var(--ig-gray-100);
  font-size: 14px;
}

.addon-row strong {
  color: var(--ig-gray-900);
}

.amenity-visual {
  display: grid;
  width: 120px;
  height: 180px;
  align-content: center;
  gap: 12px;
}

.amenity-visual span {
  display: block;
  height: 44px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--ig-surface-500) 74%, transparent);
  box-shadow: 0 10px 24px rgb(0 0 0 / 0.12);
}

.amenity-visual span:nth-child(1) {
  width: 78%;
}

.amenity-visual span:nth-child(2) {
  width: 100%;
  background: color-mix(in srgb, var(--ig-surface-500) 90%, transparent);
}

.amenity-visual span:nth-child(3) {
  width: 62%;
  justify-self: end;
}

@media (max-width: 720px) {
  .slide-shell {
    grid-template-columns: 1fr;
    padding: 32px 64px;
  }

  .feature-visual,
  .event-visual,
  .amenity-visual {
    display: none;
  }
}
```

### Animations

Set the [`animationType`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent&member=animationType) property to change the slide transition animation.

```html
<igc-carousel animation-type="fade">
    ...
</igc-carousel>
```

Set the [`animationType`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent&member=animationType) property to `none` to disable animations.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.carousel-wrapper {
    display: flex;
    width: min(860px, calc(100% - 32px));
    flex-direction: column;
    gap: 16px;
    margin: 16px auto 0;
}

.action-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;
}

.action {
    display: flex;
    align-items: center;
    gap: 8px;
}

.action-label {
    color: var(--ig-gray-700);
}

igc-select {
    width: 150px;
    --ig-size: var(--ig-size-small);
}

igc-switch {
    --ig-size: var(--ig-size-small);
}

igc-carousel {
    height: 360px;
    overflow: hidden;
    border: 1px solid var(--ig-gray-300);
    border-radius: 8px;
    background: var(--ig-surface-500);
}

igc-carousel::part(previous),
igc-carousel::part(next) {
    width: 40px;
    height: 40px;
    transition: opacity 120ms ease-in-out;
}

igc-carousel.is-orientation-changing::part(previous),
igc-carousel.is-orientation-changing::part(next) {
    opacity: 0;
    pointer-events: none;
}

igc-carousel::part(previous) {
    left: 16px;
}

igc-carousel::part(next) {
    right: 16px;
}

igc-carousel[vertical]::part(previous),
igc-carousel[vertical]::part(next) {
    left: auto;
    right: 16px;
    transform: none;
}

.slide-wrapper {
    position: relative;
    display: grid;
    box-sizing: border-box;
    place-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 56px 84px;
    overflow: hidden;
    background:
        linear-gradient(135deg, color-mix(in srgb, var(--ig-primary-500) 8%, transparent), transparent 46%),
        linear-gradient(315deg, color-mix(in srgb, var(--ig-secondary-500) 10%, transparent), transparent 42%),
        var(--ig-gray-100);
}

.slide-content {
    position: relative;
    z-index: 1;
    width: min(460px, calc(100% - 128px));
    max-width: 460px;
    color: var(--ig-gray-900);
}

.slide-label {
    display: block;
    margin-bottom: 12px;
    color: var(--ig-primary-500);
    font-size: 12px;
    font-weight: 700;
}

.slide-content h3 {
    margin: 0;
    font-size: 32px;
    line-height: 1.15;
}

.slide-content p {
    margin: 12px 0 0;
    color: var(--ig-gray-700);
    font-size: 18px;
    line-height: 1.45;
}

.slide-details {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    margin-top: 28px;
    padding: 10px 14px;
    border: 1px solid var(--ig-gray-300);
    border-radius: 999px;
    background: color-mix(in srgb, var(--ig-surface-500) 72%, transparent);
}

.slide-details span {
    color: var(--ig-gray-700);
}

.slide-details strong {
    color: var(--ig-gray-900);
}

.slide-preview {
    position: absolute;
    z-index: 0;
    right: 84px;
    top: 50%;
    display: grid;
    width: 120px;
    height: 220px;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 14px;
    transform: translateY(-50%);
}

.slide-preview span {
    display: block;
    border-radius: 8px;
    background: color-mix(in srgb, var(--ig-primary-500) 20%, transparent);
    box-shadow: 0 10px 24px rgb(0 0 0 / 0.12);
}

.slide-preview span:nth-child(1) {
    height: 120px;
    opacity: 0.55;
}

.slide-preview span:nth-child(2) {
    height: 180px;
    background: var(--ig-primary-300);
}

.slide-preview span:nth-child(3) {
    height: 92px;
    opacity: 0.75;
}

@media (max-width: 640px) {
    .action-wrapper {
        align-items: flex-start;
        flex-direction: column;
        gap: 12px;
    }

    .slide-wrapper {
        grid-template-columns: 1fr;
        gap: 28px;
        padding: 32px 64px;
    }

    .slide-preview {
        position: static;
        width: 100%;
        height: 120px;
        transform: none;
    }

    .slide-content h3 {
        font-size: 28px;
    }
}
```

### Touch Gestures

Use the Carousel on touch-enabled devices when swipe navigation should mirror the configured slide transition.

### Automatic Transitioning

Set the [`interval`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent&member=interval) property to create an automatic slideshow.

Set [`disablePauseOnInteraction`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent&member=disablePauseOnInteraction) to `true` when automatic transitioning should continue during pointer or keyboard interaction.

```html
<igc-carousel interval="2000" disable-pause-on-interaction="true">
    ...
</igc-carousel>
```

**Note:** 
Hovering over carousel content or moving keyboard focus into carousel content pauses automatic transitioning. Automatic transitioning resumes when the pointer or keyboard focus leaves the carousel.

### Thumbnail Indicators

Use custom indicators with thumbnail images when each indicator should preview its corresponding slide.

```html
<igc-carousel disable-pause-on-interaction="true" hide-navigation="true" vertical="true" interval="2000" animation-type="fade">
    <igc-carousel-indicator>
        <img class="blurred" src="assets/images/carousel/WonderfulCoastThumb.png" width="50" height="60" alt="Wonderful coast thumbnail" />
        <img slot="active" src="assets/images/carousel/WonderfulCoastThumb.png" width="50" height="60" alt="Wonderful coast thumbnail active" />
    </igc-carousel-indicator>
    <igc-carousel-slide>
        <img src="assets/images/carousel/WonderfulCoast.png" alt="Wonderful coast" />
    </igc-carousel-slide>
</igc-carousel>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
igc-carousel {
    height: 420px;
    margin: 16px auto 0;
    max-width: 75%;
}

igc-carousel::part(indicators) {
    border-radius: 2px;
}

igc-carousel-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.blurred {
    filter: blur(2px);
    opacity: 0.5;
}
```

### Do/Don't

**When to use:** Use Carousel when the interface needs to show a compact set of related visual or mixed-content slides that users browse one at a time.

**When not to use:** Do not use Carousel for primary navigation, long sequential workflows, or content users must compare side by side. Use [Tabs](./tabs.md) for switching between named sections, or [Stepper](./stepper.md) for guided sequential tasks.

<div class="table-responsive">
<table class="table" style="width: 100%; table-layout: fixed; border-collapse: collapse; border: 1px solid #d3d3d3; margin-bottom: 24px;">
<thead>
<tr>
<th style="width: 50%; background-color: #d3d3d3; text-align: left; padding: 16px 20px; font-size: 18px; font-weight: 500;">Do</th>
<th style="width: 50%; background-color: #d3d3d3; text-align: left; padding: 16px 20px; font-size: 18px; font-weight: 500;">Don't</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
<td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
</tr>
<tr>
<td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
<td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
</tr>
</tbody>
</table>
</div>

## Properties

The following Carousel properties cover the configuration used most often in slide-based layouts.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`active`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselSlideComponent&member=active) | `boolean` | `false` | Marks a slide as active. |
| [`disableLoop`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent&member=disableLoop) | `boolean` | `false` | Disables looping between the first and last slides. |
| [`disablePauseOnInteraction`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent&member=disablePauseOnInteraction) | `boolean` | See API | Keeps automatic transitioning from pausing on pointer or keyboard interaction. |
| [`hideIndicators`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent&member=hideIndicators) | `boolean` | `false` | Hides the slide indicators. |
| [`hideNavigation`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent&member=hideNavigation) | `boolean` | `false` | Hides the previous and next navigation buttons. |
| [`indicatorsOrientation`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent&member=indicatorsOrientation) | `CarouselIndicatorsOrientation` | See API | Controls where the indicators are positioned. |
| [`interval`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent&member=interval) | `number` | See API | Sets the automatic transition interval in milliseconds. |
| [`vertical`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent&member=vertical) | `boolean` | `false` | Displays the Carousel in vertical orientation. |

## Styling

The Carousel can be styled through its exposed parts, custom indicator content, and custom navigation slots.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.styled-carousel {
    width: min(860px, 100%);
    height: 430px;
    margin: 16px auto 0;
    border: 1px solid var(--ig-gray-300);
    border-radius: 8px;
    overflow: hidden;
    background: var(--ig-surface-500);
}

.styled-carousel::part(indicators) {
    gap: 8px;
    padding: 6px 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.82);
    box-shadow: 0 6px 16px rgba(11, 31, 53, 0.16);
}

.styled-carousel::part(previous),
.styled-carousel::part(next) {
    display: grid;
    width: 40px;
    height: 40px;
    place-items: center;
    border-radius: 50%;
    color: var(--ig-gray-800);
    background: rgba(255, 255, 255, 0.88);
    box-shadow: 0 6px 16px rgba(11, 31, 53, 0.22);
}

.carousel-navigation-button {
    display: inline-grid;
    width: 20px;
    height: 20px;
    place-items: center;
    line-height: 1;
}

.carousel-navigation-button igc-icon {
    width: 20px;
    height: 20px;
    color: inherit;
}

.carousel-indicator {
    display: block;
    width: 9px;
    height: 9px;
    border: 2px solid var(--ig-gray-600);
    border-radius: 50%;
    background: transparent;
}

.carousel-indicator-active {
    border-color: var(--ig-primary-500);
    background: var(--ig-primary-500);
}

.slide-card {
    position: relative;
    display: grid;
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
}

.slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slide-content {
    position: absolute;
    inset: auto 56px 44px 56px;
    max-width: 380px;
    padding: 20px 24px;
    border-radius: 8px;
    color: var(--ig-gray-900);
    background: rgba(255, 255, 255, 0.88);
    box-shadow: 0 14px 34px rgba(11, 31, 53, 0.18);
}

.slide-label {
    display: block;
    margin-bottom: 8px;
    color: var(--ig-primary-600);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0;
}

.slide-content h3 {
    margin: 0;
    font-size: 24px;
    line-height: 1.2;
}

.slide-content p {
    margin: 8px 0 0;
    color: var(--ig-gray-700);
    line-height: 1.45;
}
```

### Sass Theming

Use Sass theming when the Carousel needs theme-level changes that should stay consistent across the application.

Use `$button-background` and `$indicator-background` as the primary theme parameters. The theme derives related interaction-state colors from them; use the remaining parameters for specific refinements.

| Parameter | Description |
| --- | --- |
| `$button-background` | Primary parameter for the idle previous and next navigation button background. |
| `$indicator-background` | Primary parameter for the indicator container background. |
| `$slide-background` | Background color of each slide. |
| `$button-hover-background` | Navigation button background on hover. |
| `$button-disabled-background` | Navigation button background when disabled. |
| `$button-arrow-color` | Idle navigation arrow color. |
| `$button-hover-arrow-color` | Navigation arrow color on hover. |
| `$button-focus-arrow-color` | Navigation arrow color on focus. |
| `$button-disabled-arrow-color` | Navigation arrow color when disabled. |
| `$button-border-color` | Idle navigation button border color. |
| `$button-hover-border-color` | Navigation button border color on hover. |
| `$button-focus-border-color` | Navigation button border color on focus. |
| `$button-disabled-border-color` | Navigation button border color when disabled. |
| `$label-indicator-background` | Background color of the text-based indicator label. |
| `$indicator-dot-color` | Idle indicator dot color. |
| `$indicator-hover-dot-color` | Indicator dot color on hover. |
| `$indicator-focus-color` | Indicator dot and border color on focus. |
| `$indicator-border-color` | Idle indicator border color. |
| `$indicator-active-dot-color` | Active indicator dot color. |
| `$indicator-active-border-color` | Active indicator border color. |
| `$indicator-active-hover-dot-color` | Active indicator dot and border color on hover. |
| `$button-shadow` | Elevation or shadow under navigation buttons. |
| `$border-radius` | Border radius for navigation buttons and the indicator container. |

### Parts and Slots

Use the exposed slots and parts when only a specific Carousel surface needs custom content or local styling.

| Surface | What it customizes |
| --- | --- |
| `previous-button` slot | Replaces the previous navigation button content. |
| `next-button` slot | Replaces the next navigation button content. |
| [`IgcCarouselIndicator`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselIndicatorComponent) | Replaces the default slide indicator content. |

### Styling with Tailwind

Use Tailwind utility classes with the Ignite UI for Web Components Carousel when you need utility-first layout styling together with Ignite UI component tokens.

```css
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@source "../index.html";

/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.styled-carousel::part(indicators) {
    gap: 8px;
    padding: 6px 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.82);
    box-shadow: 0 6px 16px rgba(11, 31, 53, 0.16);
}

.styled-carousel::part(previous),
.styled-carousel::part(next) {
    display: grid;
    width: 40px;
    height: 40px;
    place-items: center;
    border-radius: 50%;
    color: var(--ig-gray-800);
    background: rgba(255, 255, 255, 0.88);
    box-shadow: 0 6px 16px rgba(11, 31, 53, 0.22);
}

.carousel-navigation-button igc-icon {
    width: 20px;
    height: 20px;
    color: inherit;
}
```

## Accessibility

The Web Components Carousel exposes carousel, slide, and indicator semantics for keyboard and assistive technology users.

### Keyboard Interaction

| Key | Action |
| --- | --- |
| <kbd>Space</kbd> or <kbd>Enter</kbd> | Activates the focused navigation button. |
| <kbd>Arrow Left</kbd> | Moves indicator focus to the previous slide indicator, or to the next indicator in right-to-left mode. |
| <kbd>Arrow Right</kbd> | Moves indicator focus to the next slide indicator, or to the previous indicator in right-to-left mode. |
| <kbd>Home</kbd> | Moves indicator focus to the first slide indicator, or to the last indicator in right-to-left mode. |
| <kbd>End</kbd> | Moves indicator focus to the last slide indicator, or to the first indicator in right-to-left mode. |

### Screen Readers / ARIA

The Carousel provides ARIA roles and state for the host, slides, indicators, and navigation controls.

| Element | Role or attribute | Purpose |
| --- | --- | --- |
| Carousel host | `role="region"` and `aria-roledescription="carousel"` | Identifies the Carousel as a navigable content region. |
| Slides container | `aria-live="polite"` or `aria-live="off"` | Announces slide changes when automatic playback is not active. |
| Slide | `role="tabpanel"`, `aria-roledescription="slide"`, and `aria-label` | Identifies each slide and its position in the set. |
| Indicator container | `role="tablist"` | Groups the slide indicators. |
| Indicator | `role="tab"`, `aria-label`, and `aria-selected` | Identifies the slide represented by the indicator and whether it is selected. |
| Navigation buttons | `aria-label` | Names the previous and next slide actions. |

### Accessibility Compliance

Infragistics documents Ignite UI for Web Components accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| --- | --- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html) | Navigation buttons and indicators support keyboard operation. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html) | Carousel keyboard interaction does not require focus to remain inside the component. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html) | The host, slides, indicators, and navigation controls expose roles, names, and selected state. |

Application authors still need to provide meaningful slide content, image alternative text, and enough contrast for custom indicator or navigation content.

## API References

The generated API references list the complete Carousel, slide, indicator, and supporting component APIs.

[`IgcCarousel`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselComponent)
[`IgcCarouselSlide`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselSlideComponent)
[`IgcCarouselIndicator`](mcp:get_api_reference?platform=webcomponents&component=IgcCarouselIndicatorComponent)
[`IgcIcon`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent)
[`IgcInput`](mcp:get_api_reference?platform=webcomponents&component=IgcInputComponent)
[`IgcButton`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent)

## Dependencies

The Carousel examples rely on the Carousel slide and indicator types, the theme stylesheet, and supporting input, icon, and button components when those components appear inside slides or navigation slots.

## Additional Resources

Use these resources for broader product support and source information.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

## Related Components

Use these related layout components when Carousel is not the best match for the interaction model.

- [Tabs](./tabs.md) - Use Tabs when users need to switch between named sections without slide-style navigation.
- [Stepper](./stepper.md) - Use Stepper when users need to complete a guided sequence of steps.

## FAQ

  **Q: Should a carousel autoplay?**

    Prefer manual navigation when possible. If a carousel rotates automatically, provide a clear way to pause and resume it so users have enough time to read and interact with each slide.
  
  **Q: What should happen when someone hovers over or focuses a carousel?**

    Pause automatic rotation while the user is reading or interacting with the carousel. Do not resume it until the user explicitly chooses to continue.
  
  **Q: How many slides should a carousel contain?**

    Keep the set small and focused. A short collection of related slides is easier to discover and scan than a long sequence with hidden content.
  
  **Q: Can a slide contain forms, buttons, or multiple actions?**

    Yes, when the interactive content has a predictable focus order and the slide does not change while the user is interacting with it. Keep the actions focused on the slide's primary task.
  
  **Q: Should the indicator dots be interactive?**

    Make indicators interactive when they represent direct navigation to individual slides. This gives users a way to reach specific content without repeatedly selecting previous or next.
  
  **Q: When should I use a static layout instead of a carousel?**

    Use a static list, grid, tabs, or a stepper when users need to compare items, read every item, or find a specific item immediately. A carousel works best for a compact sequence of related content.
  


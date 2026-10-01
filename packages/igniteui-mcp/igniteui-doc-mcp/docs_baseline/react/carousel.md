---
title: "Carousel"
description: "Use the Ignite UI for React Carousel component to show slide-based content with navigation, indicators, animation, and automatic transitions."
keywords: "Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Carousel component, React Carousel control"
license: MIT
mentionedTypes: ["Carousel", "CarouselSlide", "CarouselIndicator", "Icon", "Input", "Button"]
relatedComponents: ["Tabs", "Stepper"]
last_updated: "2026-08-17"
llms:
  description: "The Ignite UI for React Carousel is a slide-based layout component for presenting images, cards, or other content with navigation controls and indicators."
_tocName: Carousel
---
# Carousel Component

The Ignite UI for React Carousel is a slide-based layout component for presenting images, cards, or other content with navigation controls and indicators.

Use the Carousel when users need to browse a small collection of related slides one at a time, with optional animation, custom navigation, and automatic transitions.

## Live Demo

```css
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
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import {
  IgrCarousel,
  IgrCarouselSlide,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./CarouselOverview.css";
import "./index.css";


export default function CarouselOverview() {
  return (
    <div className="carousel-container">
      <IgrCarousel>
        <IgrCarouselSlide>
          <div className="image-container">
            <img src="https://dl.infragistics.com/x/img/carousel/ignite-ui-angular-indigo-design.png" />
          </div>
        </IgrCarouselSlide>
        <IgrCarouselSlide>
          <div className="image-container">
            <img src="https://dl.infragistics.com/x/img/carousel/slider-image-chart.png" />
          </div>
        </IgrCarouselSlide>
        <IgrCarouselSlide>
          <div className="image-container">
            <img src="https://dl.infragistics.com/x/img/carousel/ignite-ui-angular-charts.png" />
          </div>
        </IgrCarouselSlide>
      </IgrCarousel>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselOverview />);
```

## Anatomy

The Carousel component is composed of a host element, projected slides, navigation controls, and indicators that select the active slide.

**React Carousel anatomy anatomy:** The carousel anatomy labels the slide area, navigation controls, and indicators.

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

The React Carousel requires the carousel component, slide component, and theme stylesheet before you declare slides.

Install Ignite UI for React and configure the theme from the [Getting Started](../general-getting-started.md) topic before adding the Carousel to an application.

Import the Carousel wrapper components and the theme stylesheet.

```tsx
import { IgrCarousel, IgrCarouselSlide } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

## Usage

The React Carousel is configured by placing slide components inside the host and then enabling the navigation, indicator, and transition behavior your layout needs.

### Slides

Use the [`IgrCarousel`](mcp:get_api_reference?platform=react&component=IgrCarousel) selector to wrap your slides. The slides may contain images, text, forms, or other components.

```tsx
<IgrCarousel>
    <IgrCarouselSlide>
        <img src="assets/images/carousel/ignite-ui-angular-indigo-design.png" alt="Ignite UI Indigo Design" />
    </IgrCarouselSlide>
    <IgrCarouselSlide>
        <img src="assets/images/carousel/slider-image-chart.png" alt="Chart preview" />
    </IgrCarouselSlide>
    <IgrCarouselSlide>
        <img src="assets/images/carousel/ignite-ui-angular-charts.png" alt="Ignite UI Charts" />
    </IgrCarouselSlide>
</IgrCarousel>
```

### Active Slide

Set the [`active`](mcp:get_api_reference?platform=react&component=IgrCarouselSlide&member=active) property on the slide that should be selected when the Carousel renders.

```tsx
<IgrCarousel>
    <IgrCarouselSlide>
        ...
    </IgrCarouselSlide>
    <IgrCarouselSlide active={true}>
        ...
    </IgrCarouselSlide>
</IgrCarousel>
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
```tsx
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  IgrCarousel,
  IgrCarouselSlide,
  IgrCheckboxChangeEventArgs,
  IgrSwitch,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

const slides = [
  {
    title: "Coastal route",
    subtitle: "A compact visual slide for checking navigation and indicators.",
    label: "01",
  },
  {
    title: "City guide",
    subtitle: "A second slide makes loop behavior easy to verify.",
    label: "02",
  },
  {
    title: "Resort access",
    subtitle: "Use the controls to compare the Carousel configuration states.",
    label: "03",
  },
];

export default function CarouselConfiguration() {
  const [hideNavigation, setHideNavigation] = useState(false);
  const [hideIndicators, setHideIndicators] = useState(false);
  const [disableLoop, setDisableLoop] = useState(false);

  const onHideNavigationChange = (e: IgrCheckboxChangeEventArgs) => {
    setHideNavigation(e.detail.checked);
  };

  const onHideIndicatorsChange = (e: IgrCheckboxChangeEventArgs) => {
    setHideIndicators(e.detail.checked);
  };

  const onDisableLoopChange = (e: IgrCheckboxChangeEventArgs) => {
    setDisableLoop(e.detail.checked);
  };

  return (
    <div className="configuration-sample">
      <div className="configuration-controls">
        <IgrSwitch onChange={onHideNavigationChange}>
          <span>Hide navigation</span>
        </IgrSwitch>
        <IgrSwitch onChange={onHideIndicatorsChange}>
          <span>Hide indicators</span>
        </IgrSwitch>
        <IgrSwitch onChange={onDisableLoopChange}>
          <span>Disable loop</span>
        </IgrSwitch>
      </div>
      <IgrCarousel
        hideNavigation={hideNavigation}
        hideIndicators={hideIndicators}
        disableLoop={disableLoop}
      >
        {slides.map((slide) => (
          <IgrCarouselSlide key={slide.title}>
            <article className="slide-card">
              <span>{slide.label}</span>
              <h3>{slide.title}</h3>
              <p>{slide.subtitle}</p>
            </article>
          </IgrCarouselSlide>
        ))}
      </IgrCarousel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselConfiguration />);
```

The [`disableLoop`](mcp:get_api_reference?platform=react&component=IgrCarousel&member=disableLoop) property disables the looping behavior that moves from the last slide to the first slide, or from the first slide to the last slide.

```tsx
<IgrCarousel disableLoop={true}>
    ...
</IgrCarousel>
```

Use the [`indicatorsOrientation`](mcp:get_api_reference?platform=react&component=IgrCarousel&member=indicatorsOrientation) property to change where the indicators are positioned.

```tsx
<IgrCarousel indicatorsOrientation={CarouselIndicatorsOrientation.Start}>
    ...
</IgrCarousel>
```

Use [`hideIndicators`](mcp:get_api_reference?platform=react&component=IgrCarousel&member=hideIndicators) to hide the indicators and [`hideNavigation`](mcp:get_api_reference?platform=react&component=IgrCarousel&member=hideNavigation) to hide the navigation buttons.

```tsx
<IgrCarousel hideNavigation={true} hideIndicators={true}>
    ...
</IgrCarousel>
```

Use the [`vertical`](mcp:get_api_reference?platform=react&component=IgrCarousel&member=vertical) property to display the Carousel in vertical mode.

```tsx
<IgrCarousel vertical={true}>
    ...
</IgrCarousel>
```

### Custom Indicators

Use the [`IgrCarouselIndicator`](mcp:get_api_reference?platform=react&component=IgrCarouselIndicator) component to replace the default indicator content.

```tsx
<IgrCarousel>
    <IgrCarouselIndicator>
        <span>Off</span>
        <span slot="active">On</span>
    </IgrCarouselIndicator>
    <IgrCarouselIndicator>
        <span>Off</span>
        <span slot="active">On</span>
    </IgrCarouselIndicator>
    <IgrCarouselSlide>
        <img src="assets/images/carousel/ignite-ui-angular-indigo-design.png" alt="Ignite UI Indigo Design" />
    </IgrCarouselSlide>
    <IgrCarouselSlide>
        <img src="assets/images/carousel/slider-image-chart.png" alt="Chart preview" />
    </IgrCarouselSlide>
</IgrCarousel>
```

Provide both the default indicator content and the `active` slot content for each custom indicator.

### Custom Navigation Buttons

Use the `previous-button` and `next-button` slots to provide custom navigation button content.

```tsx
<IgrCarousel>
    <IgrIcon slot="previous-button" name="previous" collection="material"></IgrIcon>
    <IgrIcon slot="next-button" name="next" collection="material"></IgrIcon>
    ...
</IgrCarousel>
```

Use text, SVG, or [`IgrIcon`](mcp:get_api_reference?platform=react&component=IgrIcon) content in these slots when the default navigation controls do not fit the design.

### Slide Content

Place forms, images, and other components inside a slide when each step in the Carousel needs richer content.

```tsx
<IgrCarousel>
    <IgrCarouselSlide>
        <div>
            <img src="assets/images/svg/carousel/SignUp.svg" alt="Sign up" />
            <form>
                <IgrInput type="text" placeholder="Username">
                    <IgrIcon slot="prefix" name="person"></IgrIcon>
                </IgrInput>
                <IgrInput type="password" placeholder="Password">
                    <IgrIcon slot="prefix" name="password"></IgrIcon>
                </IgrInput>
                <IgrButton type="reset">
                    <span>Sign In</span>
                </IgrButton>
            </form>
        </div>
    </IgrCarouselSlide>
</IgrCarousel>
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
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  IgrButton,
  IgrCarousel,
  IgrCarouselSlide,
  IgrCheckbox,
  IgrIcon,
  IgrInput,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

const icons = [
  {
    name: "password",
    iconText:
      '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V10.0546C19.8648 10.1379 20.5907 10.348 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C16.867 10 16.4515 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8ZM14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16Z"/></svg>',
  },
  {
    name: "search",
    iconText:
      '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>',
  },
];

export default function CarouselComponents() {
  useEffect(() => {
    icons.forEach((icon) => {
      registerIconFromText(icon.name, icon.iconText);
    });
  }, []);

  return (
    <div className="carousel-container">
      <IgrCarousel>
        <IgrCarouselSlide className="slide-frame slide-coast">
          <article className="slide-shell">
            <form className="feature-card">
              <div className="feature-copy">
                <span className="slide-label">Featured route</span>
                <h3>Coastal weekend</h3>
                <p>Browse curated travel ideas and search directly from the active slide.</p>
              </div>
              <IgrInput type="text" placeholder="City or landmark">
                <IgrIcon slot="prefix" name="search"></IgrIcon>
              </IgrInput>
              <div className="chip-row" aria-label="Route highlights">
                <span>3 stops</span>
                <span>Sea view</span>
                <span>Weekend</span>
              </div>
              <IgrButton type="reset">
                <span>Explore</span>
              </IgrButton>
            </form>
            <div className="feature-visual route-visual" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </article>
        </IgrCarouselSlide>
        <IgrCarouselSlide className="slide-frame slide-city">
          <article className="slide-shell">
            <section className="feature-card event-card">
              <div className="feature-copy">
                <span className="slide-label">City guide</span>
                <h3>Museum night pass</h3>
                <p>Reserve a late gallery visit and keep the event details visible in the active slide.</p>
              </div>
              <div className="event-summary" aria-label="Museum night pass details">
                <div className="event-date" aria-hidden="true">
                  <span>FRI</span>
                  <strong>18</strong>
                  <span>OCT</span>
                </div>
                <div className="event-details">
                  <strong>6:30 PM - 10:00 PM</strong>
                  <span>North wing galleries</span>
                </div>
              </div>
              <IgrCheckbox>Send event reminder</IgrCheckbox>
              <IgrButton>
                <span>Notify Me</span>
              </IgrButton>
            </section>
            <div className="event-visual" aria-hidden="true">
              <span className="ticket-stack">
                <span className="ticket ticket--back"></span>
                <span className="ticket ticket--front">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </span>
            </div>
          </article>
        </IgrCarouselSlide>
        <IgrCarouselSlide className="slide-frame slide-resort">
          <article className="slide-shell">
            <form className="feature-card offer-card">
              <div className="feature-copy">
                <span className="slide-label">Seasonal offer</span>
                <h3>Resort day access</h3>
                <p>Build a compact offer configuration that lets users review inclusions before applying a code.</p>
              </div>
              <div className="offer-summary" aria-label="Day pass summary">
                <div>
                  <span>Day pass</span>
                  <strong>$89</strong>
                </div>
                <span>Pool access and spa credit included</span>
              </div>
              <div className="addon-row">
                <span>Lunch add-on</span>
                <strong>+$18</strong>
              </div>
              <IgrInput type="text" placeholder="Promo code">
                <IgrIcon slot="prefix" name="password"></IgrIcon>
              </IgrInput>
              <IgrButton type="reset">
                <span>Apply Code</span>
              </IgrButton>
            </form>
            <div className="amenity-visual" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </article>
        </IgrCarouselSlide>
      </IgrCarousel>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselComponents />);
```

### Animations

Set the [`animationType`](mcp:get_api_reference?platform=react&component=IgrCarousel&member=animationType) property to change the slide transition animation.

```tsx
<IgrCarousel animationType="fade">
    ...
</IgrCarousel>
```

Set the [`animationType`](mcp:get_api_reference?platform=react&component=IgrCarousel&member=animationType) property to `none` to disable animations.

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
```tsx
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  HorizontalTransitionAnimation,
  IgrCarousel,
  IgrCarouselSlide,
  IgrCheckboxChangeEventArgs,
  IgrSelect,
  IgrSelectItem,
  IgrSwitch,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

const animationTypes: Array<{ value: HorizontalTransitionAnimation; label: string }> = [
  { value: "slide", label: "Slide" },
  { value: "fade", label: "Fade" },
  { value: "none", label: "None" },
];

const slides = [
  {
    title: "Slide transition",
    subtitle: "Moves content horizontally or vertically to preserve directional context.",
    label: "01",
    detail: "Best for sequential browsing",
    metric: "320ms",
  },
  {
    title: "Fade transition",
    subtitle: "Cross-fades between slides when the relationship between items is looser.",
    label: "02",
    detail: "Best for featured content",
    metric: "240ms",
  },
  {
    title: "No transition",
    subtitle: "Updates the active slide immediately for reduced motion or dense workflows.",
    label: "03",
    detail: "Best for direct state changes",
    metric: "0ms",
  },
];

export default function CarouselAnimations() {
  const [animationType, setAnimationType] = useState<HorizontalTransitionAnimation>('slide');
  const [isCarouselVertical, setIsCarouselVertical] = useState<boolean>(false);
  const [isOrientationChanging, setIsOrientationChanging] = useState(false);
  const orientationTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => {
    if (orientationTimer.current !== undefined) {
      window.clearTimeout(orientationTimer.current);
    }
  }, []);

  const onSelectChange = (e: CustomEvent<IgrSelectItem>) => {
    const value = e.detail.value as HorizontalTransitionAnimation;
    setAnimationType(value);
  }

  const onSwitchChange = (e: IgrCheckboxChangeEventArgs) => {
    const isVertical = e.detail.checked;

    if (orientationTimer.current !== undefined) {
      window.clearTimeout(orientationTimer.current);
    }

    setIsOrientationChanging(true);

    orientationTimer.current = window.setTimeout(() => {
      setIsCarouselVertical(isVertical);
      window.requestAnimationFrame(() => setIsOrientationChanging(false));
    }, 120);
  }

  return (
    <div className="carousel-wrapper">
      <div className="action-wrapper">
        <div className="action">
          <span className="action-label">Animation</span>
          <IgrSelect onChange={onSelectChange}>
            {animationTypes.map((animation) => (
              <IgrSelectItem
                key={animation.value}
                value={animation.value}
                selected={animationType === animation.value}
              >
                <span>{animation.label}</span>
              </IgrSelectItem>
            ))}
          </IgrSelect>
        </div>
        <div className="action">
          <IgrSwitch
            onChange={onSwitchChange}
            labelPosition="before"
          >
            <span>Vertical</span>
          </IgrSwitch>
        </div>
      </div>
      <IgrCarousel
        className={isOrientationChanging ? "is-orientation-changing" : undefined}
        hideIndicators={true}
        animationType={animationType}
        vertical={isCarouselVertical}
      >
        {slides.map((slide) => (
          <IgrCarouselSlide key={slide.title}>
            <article className="slide-wrapper">
              <div className="slide-content">
                <span className="slide-label">{slide.label}</span>
                <h3>{slide.title}</h3>
                <p>{slide.subtitle}</p>
                <div className="slide-details">
                  <span>{slide.detail}</span>
                  <strong>{slide.metric}</strong>
                </div>
              </div>
              <div className="slide-preview" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </article>
          </IgrCarouselSlide>
        ))}
      </IgrCarousel>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselAnimations />);
```

### Touch Gestures

Use the Carousel on touch-enabled devices when swipe navigation should mirror the configured slide transition.

### Automatic Transitioning

Set the [`interval`](mcp:get_api_reference?platform=react&component=IgrCarousel&member=interval) property to create an automatic slideshow.

Set [`disablePauseOnInteraction`](mcp:get_api_reference?platform=react&component=IgrCarousel&member=disablePauseOnInteraction) to `true` when automatic transitioning should continue during pointer or keyboard interaction.

```tsx
<IgrCarousel interval={2000} disablePauseOnInteraction={true}>
    ...
</IgrCarousel>
```

**Note:** 
Hovering over carousel content or moving keyboard focus into carousel content pauses automatic transitioning. Automatic transitioning resumes when the pointer or keyboard focus leaves the carousel.

### Thumbnail Indicators

Use custom indicators with thumbnail images when each indicator should preview its corresponding slide.

```tsx
const images = [
    {
        src: "assets/images/carousel/WonderfulCoast.png",
        alt: "Wonderful Coast",
    },
];

<IgrCarousel disablePauseOnInteraction={true} hideNavigation={true} interval={2000} vertical={true} animationType="fade">
    {images.map((image, index) => (
        <React.Fragment key={index}>
            <IgrCarouselSlide>
                <img src={image.src} alt={image.alt} />
            </IgrCarouselSlide>
            <IgrCarouselIndicator>
                <img
                    className="blurred"
                    src={image.src.replace(".png", "Thumb.png")}
                    alt={`${image.alt} thumbnail`}
                    width="50"
                    height="60"
                />
                <img
                    slot="active"
                    src={image.src.replace(".png", "Thumb.png")}
                    alt={`${image.alt} thumbnail active`}
                    width="50"
                    height="60"
                />
            </IgrCarouselIndicator>
        </React.Fragment>
    ))}
</IgrCarousel>
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
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import {
  IgrCarousel,
  IgrCarouselIndicator,
  IgrCarouselSlide,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";


export default function CarouselThumbnail() {
  const images = [
    {
      src: "https://dl.infragistics.com/x/img/carousel/WonderfulCoast.png",
      alt: "Wonderful Coast",
    },
    {
      src: "https://dl.infragistics.com/x/img/carousel/CulturalDip.png",
      alt: "Cultural Dip",
    },
    {
      src: "https://dl.infragistics.com/x/img/carousel/GoldenBeaches.png",
      alt: "Golden Beaches",
    },
    {
      src: "https://dl.infragistics.com/x/img/carousel/IslandOfHistory.png",
      alt: "Island Of History",
    },
    {
      src: "https://dl.infragistics.com/x/img/carousel/AmazingBridge.png",
      alt: "Amazing Bridge",
    },
  ];

  return (
    <div className="container sample">
      <IgrCarousel
        disablePauseOnInteraction={true}
        hideNavigation={true}
        interval={2000}
        vertical={true}
        animationType="fade"
      >
        {images.map((image, index) => {
          return (
            <React.Fragment key={index}>
              <IgrCarouselSlide>
                <img src={image.src} alt={image.alt} />
              </IgrCarouselSlide>
              <IgrCarouselIndicator>
                <img
                  className="blurred"
                  src={image.src.replace(".png", "Thumb.png")}
                  alt={`${image.alt} Thumb`}
                  width="50"
                  height="60"
                />
                <img
                  slot="active"
                  src={image.src.replace(".png", "Thumb.png")}
                  alt={`${image.alt} Thumb Active`}
                  width="50"
                  height="60"
                />
              </IgrCarouselIndicator>
            </React.Fragment>
          );
        })}
      </IgrCarousel>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselThumbnail />);
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
| [`active`](mcp:get_api_reference?platform=react&component=IgrCarouselSlide&member=active) | `boolean` | `false` | Marks a slide as active. |
| [`disableLoop`](mcp:get_api_reference?platform=react&component=IgrCarousel&member=disableLoop) | `boolean` | `false` | Disables looping between the first and last slides. |
| [`disablePauseOnInteraction`](mcp:get_api_reference?platform=react&component=IgrCarousel&member=disablePauseOnInteraction) | `boolean` | See API | Keeps automatic transitioning from pausing on pointer or keyboard interaction. |
| [`hideIndicators`](mcp:get_api_reference?platform=react&component=IgrCarousel&member=hideIndicators) | `boolean` | `false` | Hides the slide indicators. |
| [`hideNavigation`](mcp:get_api_reference?platform=react&component=IgrCarousel&member=hideNavigation) | `boolean` | `false` | Hides the previous and next navigation buttons. |
| [`indicatorsOrientation`](mcp:get_api_reference?platform=react&component=IgrCarousel&member=indicatorsOrientation) | `CarouselIndicatorsOrientation` | See API | Controls where the indicators are positioned. |
| [`interval`](mcp:get_api_reference?platform=react&component=IgrCarousel&member=interval) | `number` | See API | Sets the automatic transition interval in milliseconds. |
| [`vertical`](mcp:get_api_reference?platform=react&component=IgrCarousel&member=vertical) | `boolean` | `false` | Displays the Carousel in vertical orientation. |

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
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import {
  IgrCarousel,
  IgrCarouselIndicator,
  IgrCarouselSlide,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

const chevronLeft =
  '<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>';
const chevronRight =
  '<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>';

const slides = [
  {
    title: "Coastal retreat",
    subtitle: "A quiet route along cliffs, beach towns, and open water.",
    image: "https://dl.infragistics.com/x/img/carousel/WonderfulCoast.png",
    alt: "Wonderful coast",
    label: "01",
  },
  {
    title: "Cultural district",
    subtitle: "Museums, galleries, and historic streets in one walkable plan.",
    image: "https://dl.infragistics.com/x/img/carousel/CulturalDip.png",
    alt: "Cultural district",
    label: "02",
  },
  {
    title: "Golden beaches",
    subtitle: "A sunny itinerary built around swimming, dining, and sunsets.",
    image: "https://dl.infragistics.com/x/img/carousel/GoldenBeaches.png",
    alt: "Golden beaches",
    label: "03",
  },
];

export default function CarouselStyling() {
  React.useEffect(() => {
    registerIconFromText("chevron-left", chevronLeft);
    registerIconFromText("chevron-right", chevronRight);
  }, []);

  return (
    <div className="container sample center">
      <IgrCarousel className="styled-carousel">
        <span slot="previous-button" className="carousel-navigation-button">
          <IgrIcon name="chevron-left"></IgrIcon>
        </span>
        <span slot="next-button" className="carousel-navigation-button">
          <IgrIcon name="chevron-right"></IgrIcon>
        </span>

        {slides.map((slide) => (
          <React.Fragment key={slide.title}>
            <IgrCarouselSlide>
              <article className="slide-card">
                <img className="slide-image" src={slide.image} alt={slide.alt} />
                <div className="slide-content">
                  <span className="slide-label">{slide.label}</span>
                  <h3>{slide.title}</h3>
                  <p>{slide.subtitle}</p>
                </div>
              </article>
            </IgrCarouselSlide>
            <IgrCarouselIndicator>
              <span className="carousel-indicator"></span>
              <span slot="active" className="carousel-indicator carousel-indicator-active"></span>
            </IgrCarouselIndicator>
          </React.Fragment>
        ))}
      </IgrCarousel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselStyling />);
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
| [`IgrCarouselIndicator`](mcp:get_api_reference?platform=react&component=IgrCarouselIndicator) | Replaces the default slide indicator content. |

### Styling with Tailwind

Use Tailwind utility classes with the Ignite UI for React Carousel when you need utility-first layout styling together with Ignite UI component tokens.

```css
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@source "./index.tsx";

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
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrButton,
  IgrCarousel,
  IgrCarouselIndicator,
  IgrCarouselSlide,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const chevronLeft =
  '<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>';
const chevronRight =
  '<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>';

const slides = [
  {
    title: "Scenic getaway",
    subtitle: "A flexible travel plan built around memorable views and time to explore.",
    image: "https://dl.infragistics.com/x/img/carousel/AdobeStock_1937350575-s.png",
    alt: "Scenic travel destination",
    label: "01",
    details: ["3 days", "8 stops", "Flexible dates"],
    tags: ["Scenic route", "Flexible pace"],
  },
  {
    title: "Mountain trail ride",
    subtitle: "A high-energy route through rugged terrain, with technical descents and open trail views.",
    image: "https://dl.infragistics.com/x/img/carousel/AdobeStock_215535179-s.png",
    alt: "Mountain trail ride",
    label: "02",
    details: ["1 day", "12 km", "Advanced"],
    tags: ["Mountain bike", "Trail ride"],
  },
  {
    title: "Weekend escape",
    subtitle: "A short break with unhurried moments, fresh perspectives, and room to recharge.",
    image: "https://dl.infragistics.com/x/img/carousel/AdobeStock_637533323-s.png",
    alt: "Weekend escape",
    label: "03",
    details: ["Weekend", "5 highlights", "Year round"],
    tags: ["Unwind", "Go at your pace"],
  },
];

export default function CarouselTailwindStyling() {
  React.useEffect(() => {
    registerIconFromText("chevron-left", chevronLeft);
    registerIconFromText("chevron-right", chevronRight);
  }, []);

  return (
    <div className="container sample center">
      <IgrCarousel className="styled-carousel mx-auto mt-4 h-[430px] w-full max-w-[960px] overflow-hidden rounded-lg border border-[var(--ig-gray-300)] bg-[var(--ig-surface-500)]">
        <span slot="previous-button" className="carousel-navigation-button inline-grid h-5 w-5 place-items-center leading-none">
          <IgrIcon name="chevron-left"></IgrIcon>
        </span>
        <span slot="next-button" className="carousel-navigation-button inline-grid h-5 w-5 place-items-center leading-none">
          <IgrIcon name="chevron-right"></IgrIcon>
        </span>

        {slides.map((slide) => (
          <React.Fragment key={slide.title}>
            <IgrCarouselSlide>
              <article className="m-0 grid h-full w-full overflow-hidden bg-[var(--ig-gray-100)] md:grid-cols-[1.15fr_0.85fr]">
                <img className="h-52 w-full object-cover md:h-full" src={slide.image} alt={slide.alt} />
                <section className="grid content-center gap-5 bg-[var(--ig-surface-500)] py-10 pl-8 pr-24 text-[var(--ig-gray-900)]">
                  <div>
                    <span className="mb-2 block text-xs font-bold leading-none text-[var(--ig-primary-600)]">{slide.label} / ITINERARY</span>
                    <h3 className="m-0 text-2xl leading-tight">{slide.title}</h3>
                    <p className="mb-0 mt-2 leading-snug text-[var(--ig-gray-700)]">{slide.subtitle}</p>
                  </div>
                  <div className="grid grid-cols-3 divide-x divide-[var(--ig-gray-300)] border-y border-[var(--ig-gray-300)] py-3">
                    {slide.details.map((detail) => (
                      <span key={detail} className="px-2 text-center text-xs font-semibold text-[var(--ig-gray-700)] first:pl-0 last:pr-0">
                        {detail}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {slide.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-[var(--ig-gray-300)] px-3 py-1 text-xs text-[var(--ig-gray-700)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <IgrButton>
                    <span>View itinerary</span>
                  </IgrButton>
                </section>
              </article>
            </IgrCarouselSlide>
            <IgrCarouselIndicator>
              <span className="block h-[9px] w-[9px] rounded-full border-2 border-[var(--ig-gray-600)] bg-transparent"></span>
              <span
                slot="active"
                className="block h-[9px] w-[9px] rounded-full border-2 border-[var(--ig-primary-500)] bg-[var(--ig-primary-500)]"
              ></span>
            </IgrCarouselIndicator>
          </React.Fragment>
        ))}
      </IgrCarousel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselTailwindStyling />);
```

## Accessibility

The React Carousel exposes carousel, slide, and indicator semantics for keyboard and assistive technology users.

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

Infragistics documents Ignite UI for React accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| --- | --- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html) | Navigation buttons and indicators support keyboard operation. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html) | Carousel keyboard interaction does not require focus to remain inside the component. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html) | The host, slides, indicators, and navigation controls expose roles, names, and selected state. |

Application authors still need to provide meaningful slide content, image alternative text, and enough contrast for custom indicator or navigation content.

## API References

The generated API references list the complete Carousel, slide, indicator, and supporting component APIs.

[`IgrCarousel`](mcp:get_api_reference?platform=react&component=IgrCarousel)
[`IgrCarouselSlide`](mcp:get_api_reference?platform=react&component=IgrCarouselSlide)
[`IgrCarouselIndicator`](mcp:get_api_reference?platform=react&component=IgrCarouselIndicator)
[`IgrIcon`](mcp:get_api_reference?platform=react&component=IgrIcon)
[`IgrInput`](mcp:get_api_reference?platform=react&component=IgrInput)
[`IgrButton`](mcp:get_api_reference?platform=react&component=IgrButton)

## Dependencies

The Carousel examples rely on the Carousel slide and indicator types, the theme stylesheet, and supporting input, icon, and button components when those components appear inside slides or navigation slots.

## Additional Resources

Use these resources for broader product support and source information.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

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
  


---
title: "Carousel"
description: "Use the Ignite UI for Angular Carousel component to show slide-based content with navigation, indicators, animation, and automatic transitions."
keywords: "Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Carousel component, Angular Carousel control"
license: MIT
mentionedTypes: ["Carousel", "CarouselSlide", "CarouselIndicator", "Icon", "Input", "Button"]
relatedComponents: ["Tabs", "Stepper"]
last_updated: "2026-08-17"
llms:
  description: "The Ignite UI for Angular Carousel is a slide-based layout component for presenting images, cards, or other content with navigation controls and indicators."
_tocName: Carousel
---
# Carousel Component

The Ignite UI for Angular Carousel is a slide-based layout component for presenting images, cards, or other content with navigation controls and indicators.

Use the Carousel when users need to browse a small collection of related slides one at a time, with optional animation, custom navigation, and automatic transitions.

## Live Demo

```typescript
import { Component } from '@angular/core';
import { IgxCarouselComponent, IgxSlideComponent } from 'igniteui-angular/carousel';

@Component({
    selector: 'app-carousel-overview-sample',
    host: { class: 'ig-typography' },
    styleUrls: ['./carousel-overview-sample.component.scss'],
    templateUrl: './carousel-overview-sample.component.html',
    imports: [IgxCarouselComponent, IgxSlideComponent]
})
export class CarouselOverviewSampleComponent {
    public readonly slides = [
        {
            alt: 'Ignite UI Angular Indigo Design',
            src: 'https://dl.infragistics.com/x/img/carousel/ignite-ui-angular-indigo-design.png'
        },
        {
            alt: 'Chart preview',
            src: 'https://dl.infragistics.com/x/img/carousel/slider-image-chart.png'
        },
        {
            alt: 'Ignite UI Angular Charts',
            src: 'https://dl.infragistics.com/x/img/carousel/ignite-ui-angular-charts.png'
        }
    ];
}
```
```html
<div class="carousel-container">
  <igx-carousel>
    @for (slide of slides; track slide.src) {
      <igx-slide>
        <div class="image-container">
          <img [src]="slide.src" [alt]="slide.alt" />
        </div>
      </igx-slide>
    }
  </igx-carousel>
</div>
```
```scss
.carousel-container {
    padding: 16px;
}

.image-container {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
}

igx-carousel {
    height: 450px;
    margin-inline: auto;
    max-width: 75%;
}

img {
    max-height: 90%;
    max-width: 90%;
    object-fit: contain;
}

:host ::ng-deep .igx-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 75%;
    margin-inline: auto;
}
```

## Anatomy

The Carousel component is composed of a host element, projected slides, navigation controls, and indicators that select the active slide.

**Angular Carousel anatomy anatomy:** The carousel anatomy labels the slide area, navigation controls, and indicators.

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
igx-carousel                     // host - coordinates slides, navigation, and indicators
|- igx-slide                      // slide item
|- ng-template[igxCarouselIndicator]   // optional custom indicator template
|- ng-template[igxCarouselPrevButton]  // optional previous navigation template
`- ng-template[igxCarouselNextButton]  // optional next navigation template
```

## Getting Started

The Angular Carousel requires the carousel component, slide component, and theme stylesheet before you declare slides.

Install Ignite UI for Angular and configure the theme from the [Getting Started](../general/getting-started.md) topic before adding the Carousel to an application.

Import the Carousel directives and the Ignite UI theme stylesheet.

```ts
import { Component } from '@angular/core';
import { IGX_CAROUSEL_DIRECTIVES } from 'igniteui-angular/carousel';

@Component({
    selector: 'app-carousel-sample',
    imports: [IGX_CAROUSEL_DIRECTIVES],
    template: `
        <igx-carousel>
            <igx-slide>
                <img src="assets/images/carousel/ignite-ui-angular-indigo-design.png" alt="Ignite UI Indigo Design" />
            </igx-slide>
        </igx-carousel>
    `,
})
export class CarouselSampleComponent {}
```

## Usage

The Angular Carousel is configured by placing slide components inside the host and then enabling the navigation, indicator, and transition behavior your layout needs.

### Slides

Use the [`IgxCarousel`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent) selector to wrap your slides. The slides may contain images, text, forms, or other components.

```html
<igx-carousel>
    <igx-slide>
        <img src="assets/images/carousel/ignite-ui-angular-indigo-design.png" alt="Ignite UI Indigo Design" />
    </igx-slide>
    <igx-slide>
        <img src="assets/images/carousel/slider-image-chart.png" alt="Chart preview" />
    </igx-slide>
    <igx-slide>
        <img src="assets/images/carousel/ignite-ui-angular-charts.png" alt="Ignite UI Charts" />
    </igx-slide>
</igx-carousel>
```

### Active Slide

Set the [`active`](mcp:get_api_reference?platform=angular&component=IgxSlideComponent&member=active) input on the slide that should be selected when the Carousel renders.

```html
<igx-carousel>
    <igx-slide>
        ...
    </igx-slide>
    <igx-slide [active]="true">
        ...
    </igx-slide>
</igx-carousel>
```

**Note:** 
If no active slide is set, the first one is active by default. If multiple slides are active during initial rendering or later updates, the last active slide is used.

### Configuration

Use the Carousel configuration properties to control looping, indicator placement, navigation visibility, and orientation.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxCarouselComponent, IgxSlideComponent } from 'igniteui-angular/carousel';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

@Component({
    selector: 'app-carousel-configuration-sample',
    host: { class: 'ig-typography' },
    styleUrls: ['./carousel-configuration-sample.component.scss'],
    templateUrl: './carousel-configuration-sample.component.html',
    imports: [FormsModule, IgxCarouselComponent, IgxSlideComponent, IgxSwitchComponent]
})
export class CarouselConfigurationSampleComponent {
    public hideNavigation = false;
    public hideIndicators = false;
    public disableLoop = false;
}
```
```html
<div class="configuration-sample">
  <div class="configuration-controls">
    <igx-switch labelPosition="before" [(ngModel)]="hideNavigation">Hide navigation</igx-switch>
    <igx-switch labelPosition="before" [(ngModel)]="hideIndicators">Hide indicators</igx-switch>
    <igx-switch labelPosition="before" [(ngModel)]="disableLoop">Disable loop</igx-switch>
  </div>

  <igx-carousel [navigation]="!hideNavigation" [indicators]="!hideIndicators" [loop]="!disableLoop">
    <igx-slide>
      <article class="slide-card"><span>01</span><h3>Coastal route</h3><p>A compact visual slide for checking navigation and indicators.</p></article>
    </igx-slide>
    <igx-slide>
      <article class="slide-card"><span>02</span><h3>City guide</h3><p>A second slide makes loop behavior easy to verify.</p></article>
    </igx-slide>
    <igx-slide>
      <article class="slide-card"><span>03</span><h3>Resort access</h3><p>Use the controls to compare the Carousel configuration states.</p></article>
    </igx-slide>
  </igx-carousel>
</div>
```
```scss
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

igx-switch { --ig-size: var(--ig-size-small); }

igx-carousel {
    height: 340px;
    overflow: hidden;
    border: 1px solid var(--ig-gray-300);
    border-radius: 8px;
    background: var(--ig-surface-500);
}

:host ::ng-deep {
    .igx-carousel__arrow { width: 40px; height: 40px; }
    .igx-carousel__arrow--prev { left: 16px; }
    .igx-carousel__arrow--next { right: 16px; }
    .igx-slide {
        display: grid;
        height: 100%;
        place-items: center;
        background:
            linear-gradient(135deg, color-mix(in srgb, var(--ig-primary-500) 12%, transparent), transparent 42%),
            linear-gradient(315deg, color-mix(in srgb, var(--ig-secondary-500) 12%, transparent), transparent 42%),
            var(--ig-gray-100);
    }
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

.slide-card span { color: var(--ig-primary-500); font-size: 12px; font-weight: 700; }
.slide-card h3 { margin: 0; font-size: 28px; line-height: 1.2; }
.slide-card p { margin: 0; color: var(--ig-gray-700); line-height: 1.45; }

@media (max-width: 760px) {
    .configuration-controls { grid-template-columns: repeat(2, minmax(0, 1fr)); justify-content: stretch; }
}
```

Use the [`loop`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=loop) input to control whether the Carousel wraps from the last slide to the first slide, or from the first slide to the last slide.

```html
<igx-carousel [loop]="false">
    ...
</igx-carousel>
```

Use the [`indicatorsOrientation`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=indicatorsOrientation) property to change where the indicators are positioned.

```html
<igx-carousel indicatorsOrientation="start">
    ...
</igx-carousel>
```

Use [`indicators`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=indicators) to hide the indicators and [`navigation`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=navigation) to hide the navigation buttons.

```html
<igx-carousel [navigation]="false" [indicators]="false">
    ...
</igx-carousel>
```

Use the [`vertical`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=vertical) property to display the Carousel in vertical mode.

```html
<igx-carousel [vertical]="true">
    ...
</igx-carousel>
```

### Custom Indicators

Use the [`IgxCarouselIndicatorDirective`](mcp:get_api_reference?platform=angular&component=IgxCarouselIndicatorDirective) template directive to replace the default indicator content.

```html
<igx-carousel>
    <ng-template igxCarouselIndicator let-slide>
        <div [ngClass]="{ selected: slide.current === current }"></div>
    </ng-template>
    <igx-slide>
        <img src="assets/images/carousel/ignite-ui-angular-indigo-design.png" alt="Ignite UI Indigo Design" />
    </igx-slide>
    <igx-slide>
        <img src="assets/images/carousel/slider-image-chart.png" alt="Chart preview" />
    </igx-slide>
</igx-carousel>
```

### Custom Navigation Buttons

Use the [`IgxCarouselPrevButtonDirective`](mcp:get_api_reference?platform=angular&component=IgxCarouselPrevButtonDirective) and [`IgxCarouselNextButtonDirective`](mcp:get_api_reference?platform=angular&component=IgxCarouselNextButtonDirective) template directives to provide custom navigation button content.

```html
<igx-carousel>
    <ng-template igxCarouselPrevButton let-disabled>
        <button igxButton="fab" igxRipple="white" [disabled]="disabled">
            <igx-icon fontSet="material">navigate_before</igx-icon>
        </button>
    </ng-template>
    <ng-template igxCarouselNextButton let-disabled>
        <button igxButton="fab" igxRipple="white" [disabled]="disabled">
            <igx-icon fontSet="material">navigate_next</igx-icon>
        </button>
    </ng-template>
    ...
</igx-carousel>
```

Use text, SVG, or [`IgxIcon`](mcp:get_api_reference?platform=angular&component=IgxIconComponent) content in these templates when the default navigation controls do not fit the design.

### Slide Content

Place forms, images, and other components inside a slide when each step in the Carousel needs richer content.

```html
<igx-carousel>
    <igx-slide>
        <div>
            <img src="assets/images/svg/carousel/SignUp.svg" alt="Sign up" />
            <form>
                <igx-input-group>
                    <igx-prefix>
                        <igx-icon>person</igx-icon>
                    </igx-prefix>
                    <input igxInput type="text" placeholder="Username" />
                </igx-input-group>
                <igx-input-group>
                    <igx-prefix>
                        <igx-icon>password</igx-icon>
                    </igx-prefix>
                    <input igxInput type="password" placeholder="Password" />
                </igx-input-group>
                <button igxButton="contained" type="reset">Sign In</button>
            </form>
        </div>
    </igx-slide>
</igx-carousel>
```

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxCarouselComponent, IgxSlideComponent } from 'igniteui-angular/carousel';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-carousel-components-sample',
    host: { class: 'ig-typography' },
    styleUrls: ['./carousel-components-sample.component.scss'],
    templateUrl: './carousel-components-sample.component.html',
    imports: [
        IgxButtonDirective,
        IgxCarouselComponent,
        IgxCheckboxComponent,
        IgxIconComponent,
        IgxInputDirective,
        IgxInputGroupComponent,
        IgxPrefixDirective,
        IgxSlideComponent
    ]
})
export class CarouselComponentsSampleComponent { }
```
```html
<div class="carousel-container">
  <igx-carousel>
    <igx-slide class="slide-frame slide-coast">
      <article class="slide-shell">
        <form class="feature-card">
          <div class="feature-copy">
            <span class="slide-label">Featured route</span>
            <h3>Coastal weekend</h3>
            <p>Browse curated travel ideas and search directly from the active slide.</p>
          </div>
          <igx-input-group type="border">
            <igx-prefix><igx-icon>search</igx-icon></igx-prefix>
            <input igxInput type="text" placeholder="City or landmark" />
          </igx-input-group>
          <div class="chip-row" aria-label="Route highlights">
            <span>3 stops</span>
            <span>Sea view</span>
            <span>Weekend</span>
          </div>
          <button igxButton="contained" type="reset">Explore</button>
        </form>
        <div class="feature-visual route-visual" aria-hidden="true"><span></span><span></span><span></span></div>
      </article>
    </igx-slide>

    <igx-slide class="slide-frame slide-city">
      <article class="slide-shell">
        <section class="feature-card event-card">
          <div class="feature-copy">
            <span class="slide-label">City guide</span>
            <h3>Museum night pass</h3>
            <p>Reserve a late gallery visit and keep the event details visible in the active slide.</p>
          </div>
          <div class="event-summary" aria-label="Museum night pass details">
            <div class="event-date" aria-hidden="true"><span>FRI</span><strong>18</strong><span>OCT</span></div>
            <div class="event-details"><strong>6:30 PM - 10:00 PM</strong><span>North wing galleries</span></div>
          </div>
          <igx-checkbox>Send event reminder</igx-checkbox>
          <button igxButton="contained">Notify Me</button>
        </section>
        <div class="event-visual" aria-hidden="true">
          <span class="ticket-stack">
            <span class="ticket ticket--back"></span>
            <span class="ticket ticket--front"><span></span><span></span><span></span></span>
          </span>
        </div>
      </article>
    </igx-slide>

    <igx-slide class="slide-frame slide-resort">
      <article class="slide-shell">
        <form class="feature-card offer-card">
          <div class="feature-copy">
            <span class="slide-label">Seasonal offer</span>
            <h3>Resort day access</h3>
            <p>Build a compact offer configuration that lets users review inclusions before applying a code.</p>
          </div>
          <div class="offer-summary" aria-label="Day pass summary">
            <div><span>Day pass</span><strong>$89</strong></div>
            <span>Pool access and spa credit included</span>
          </div>
          <div class="addon-row"><span>Lunch add-on</span><strong>+$18</strong></div>
          <igx-input-group type="border">
            <igx-prefix><igx-icon>lock</igx-icon></igx-prefix>
            <input igxInput type="text" placeholder="Promo code" />
          </igx-input-group>
          <button igxButton="contained" type="reset">Apply Code</button>
        </form>
        <div class="amenity-visual" aria-hidden="true"><span></span><span></span><span></span></div>
      </article>
    </igx-slide>
  </igx-carousel>
</div>
```
```scss
.carousel-container {
    width: min(760px, 100%);
    margin: 16px auto 0;
}

igx-carousel {
    height: 440px;
    overflow: hidden;
    border: 1px solid var(--ig-gray-300);
    border-radius: 8px;
    background: var(--ig-surface-500);
}

:host ::ng-deep {
    .igx-carousel__nav-button {
        width: 40px;
        height: 40px;
    }

    .igx-slide {
        display: grid;
        box-sizing: border-box;
        height: 100%;
        padding-bottom: 48px;
        place-items: center;
    }

    .igx-slide.slide-frame {
        background: var(--ig-gray-100);
    }

    .igx-slide.slide-coast {
        background:
            linear-gradient(135deg, color-mix(in srgb, var(--ig-primary-500) 12%, transparent), transparent 45%),
            var(--ig-gray-100);
    }

    .igx-slide.slide-city {
        background:
            linear-gradient(135deg, color-mix(in srgb, var(--ig-secondary-500) 12%, transparent), transparent 45%),
            var(--ig-gray-100);
    }

    .igx-slide.slide-resort {
        padding-bottom: 76px;
        background:
            linear-gradient(135deg, color-mix(in srgb, var(--ig-success-500) 12%, transparent), transparent 45%),
            var(--ig-gray-100);
    }
}

.slide-shell {
    display: grid;
    width: fit-content;
    height: auto;
    grid-template-columns: minmax(0, 390px) 120px;
    align-items: center;
    justify-content: center;
    gap: 28px;
    margin: 0 auto;
    padding: 24px 0;
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

.feature-card button {
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

.route-visual span,
.ticket,
.amenity-visual span {
    display: block;
    border-radius: 8px;
    background: color-mix(in srgb, var(--ig-surface-500) 72%, transparent);
    box-shadow: 0 10px 24px rgb(0 0 0 / 0.12);
}

.route-visual span:nth-child(1) { height: 46%; opacity: 0.75; }
.route-visual span:nth-child(2) { height: 82%; }
.route-visual span:nth-child(3) { height: 62%; opacity: 0.9; }

.event-card { gap: 10px; padding: 18px 22px; }

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

.event-date strong { color: var(--ig-gray-900); font-size: 22px; }

.event-details { display: grid; gap: 3px; color: var(--ig-gray-700); font-size: 14px; }
.event-details strong { color: var(--ig-gray-900); font-size: 15px; }

.event-visual { position: relative; width: 120px; height: 180px; }

.ticket-stack {
    position: absolute;
    top: 10px;
    left: 20px;
    width: 96px;
    height: 144px;
}

.ticket { position: absolute; display: grid; width: 96px; height: 144px; border-radius: 10px; box-sizing: content-box; }
.ticket--back { top: 12px; left: -20px; opacity: 0.56; transform: rotate(-8deg); }

.ticket--front {
    inset: 0;
    grid-template-rows: 1fr auto 1fr;
    padding: 18px;
    transform: rotate(5deg);
}

.ticket--front span { display: block; height: 8px; border-radius: 999px; background: var(--ig-primary-300); }
.ticket--front span:nth-child(2) { width: 72%; background: var(--ig-primary-500); }
.ticket--front span:nth-child(3) { align-self: end; width: 54%; background: var(--ig-gray-300); }

.offer-summary { display: grid; gap: 4px; color: var(--ig-gray-700); font-size: 14px; }
.offer-card { gap: 8px; padding: 16px 22px; }
.offer-summary > div { display: flex; align-items: baseline; justify-content: space-between; }
.offer-summary strong { color: var(--ig-gray-900); font-size: 24px; }

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

.addon-row strong { color: var(--ig-gray-900); }

.amenity-visual { display: grid; width: 120px; height: 180px; align-content: center; gap: 12px; }
.amenity-visual span { height: 44px; border-radius: 12px; }
.amenity-visual span:nth-child(1) { width: 78%; }
.amenity-visual span:nth-child(2) { width: 100%; background: color-mix(in srgb, var(--ig-surface-500) 90%, transparent); }
.amenity-visual span:nth-child(3) { width: 62%; justify-self: end; }

@media (max-width: 720px) {
    .slide-shell { grid-template-columns: 1fr; padding: 32px 64px; }
    .feature-visual, .event-visual, .amenity-visual { display: none; }
}
```

### Animations

Set the [`animationType`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=animationType) property to change the slide transition animation.

```html
<igx-carousel animationType="fade">
    ...
</igx-carousel>
```

Set the [`animationType`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=animationType) property to `none` to disable animations.

```typescript
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselAnimationType, IgxCarouselComponent, IgxSlideComponent } from 'igniteui-angular/carousel';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

@Component({
    selector: 'app-carousel-animations',
    host: { class: 'ig-typography' },
    styleUrls: ['./carousel-animations.component.scss'],
    templateUrl: './carousel-animations.component.html',
    imports: [
        FormsModule,
        IgxCarouselComponent,
        IgxSelectComponent,
        IgxSelectItemComponent,
        IgxSlideComponent,
        IgxSwitchComponent
    ]
})
export class CarouselAnimationsComponent {
    public animationType: CarouselAnimationType = CarouselAnimationType.slide;
    public isCarouselVertical = false;
    public isOrientationChanging = false;
    private orientationTimer?: ReturnType<typeof setTimeout>;
    public readonly animationTypes = [
        { label: 'Slide', value: CarouselAnimationType.slide },
        { label: 'Fade', value: CarouselAnimationType.fade },
        { label: 'None', value: CarouselAnimationType.none }
    ];
    public readonly slides = [
        {
            detail: 'Best for sequential browsing',
            label: '01',
            metric: '320ms',
            subtitle: 'Moves content horizontally or vertically to preserve directional context.',
            title: 'Slide transition'
        },
        {
            detail: 'Best for featured content',
            label: '02',
            metric: '240ms',
            subtitle: 'Cross-fades between slides when the relationship between items is looser.',
            title: 'Fade transition'
        },
        {
            detail: 'Best for direct state changes',
            label: '03',
            metric: '0ms',
            subtitle: 'Updates the active slide immediately for reduced motion or dense workflows.',
            title: 'No transition'
        }
    ];

    constructor(private cdr: ChangeDetectorRef) {}

    public changeOrientation(isVertical: boolean): void {
        if (this.orientationTimer !== undefined) {
            clearTimeout(this.orientationTimer);
        }

        this.isOrientationChanging = true;
        this.cdr.detectChanges();
        this.orientationTimer = setTimeout(() => {
            this.isCarouselVertical = isVertical;
            this.cdr.detectChanges();
            this.orientationTimer = setTimeout(() => {
                this.isOrientationChanging = false;
                this.cdr.detectChanges();
            }, 16);
        }, 120);
    }
}
```
```html
<div class="carousel-wrapper">
  <div class="action-wrapper">
    <div class="action">
      <span class="action-label">Animation</span>
      <igx-select type="border" [(ngModel)]="animationType">
        @for (animation of animationTypes; track animation.value) {
          <igx-select-item [value]="animation.value">{{ animation.label }}</igx-select-item>
        }
      </igx-select>
    </div>
    <div class="action">
      <igx-switch labelPosition="before" [ngModel]="isCarouselVertical" (ngModelChange)="changeOrientation($event)">Vertical</igx-switch>
    </div>
  </div>

  <igx-carousel [class.is-orientation-changing]="isOrientationChanging" [animationType]="animationType" [indicators]="false" [vertical]="isCarouselVertical">
    @for (slide of slides; track slide.title) {
      <igx-slide>
        <article class="slide-wrapper">
          <div class="slide-content">
            <span class="slide-label">{{ slide.label }}</span>
            <h3>{{ slide.title }}</h3>
            <p>{{ slide.subtitle }}</p>
            <div class="slide-details"><span>{{ slide.detail }}</span><strong>{{ slide.metric }}</strong></div>
          </div>
          <div class="slide-preview" aria-hidden="true"><span></span><span></span><span></span></div>
        </article>
      </igx-slide>
    }
  </igx-carousel>
</div>
```
```scss
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

.action { display: flex; align-items: center; gap: 8px; }
.action-label { color: var(--ig-gray-700); }

igx-select {
    width: 150px;
    --ig-size: 1;
}

:host ::ng-deep igx-select igx-input-group { --size: 2rem; }

igx-switch { --ig-size: var(--ig-size-small); }

igx-carousel {
    height: 360px;
    overflow: hidden;
    border: 1px solid var(--ig-gray-300);
    border-radius: 8px;
    background: var(--ig-surface-500);
}

:host ::ng-deep igx-carousel .igx-carousel__arrow--prev,
:host ::ng-deep igx-carousel .igx-carousel__arrow--next {
    transition: opacity 120ms ease-in-out;
}

:host ::ng-deep igx-carousel.is-orientation-changing .igx-carousel__arrow--prev,
:host ::ng-deep igx-carousel.is-orientation-changing .igx-carousel__arrow--next {
    opacity: 0;
    pointer-events: none;
}

:host ::ng-deep .igx-slide {
    height: 100%;
}

.slide-wrapper {
    position: relative;
    display: grid;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 56px 84px;
    overflow: hidden;
    place-items: center;
    background:
        linear-gradient(135deg, color-mix(in srgb, var(--ig-primary-500) 8%, transparent), transparent 46%),
        linear-gradient(315deg, color-mix(in srgb, var(--ig-secondary-500) 10%, transparent), transparent 42%),
        var(--ig-gray-100);
}

.slide-content { width: min(460px, calc(100% - 128px)); max-width: 460px; color: var(--ig-gray-900); }

.slide-label {
    display: block;
    margin-bottom: 12px;
    color: var(--ig-primary-500);
    font-size: 12px;
    font-weight: 700;
}

.slide-content h3 { margin: 0; font-size: 32px; line-height: 1.15; }
.slide-content p { margin: 12px 0 0; color: var(--ig-gray-700); font-size: 18px; line-height: 1.45; }

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

.slide-details span { color: var(--ig-gray-700); }
.slide-details strong { color: var(--ig-gray-900); }

.slide-preview {
    position: absolute;
    top: 50%;
    right: 84px;
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

.slide-preview span:nth-child(1) { height: 120px; opacity: 0.55; }
.slide-preview span:nth-child(2) { height: 180px; background: var(--ig-primary-300); }
.slide-preview span:nth-child(3) { height: 92px; opacity: 0.75; }

@media (max-width: 640px) {
    .action-wrapper { align-items: flex-start; flex-direction: column; gap: 12px; }
    .slide-wrapper { grid-template-columns: 1fr; gap: 28px; padding: 32px 64px; }
    .slide-preview { position: static; width: 100%; height: 120px; transform: none; }
    .slide-content h3 { font-size: 28px; }
}
```

### Touch Gestures

Use the Carousel on touch-enabled devices when swipe navigation should mirror the configured slide transition.

Set the [`gesturesSupport`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=gesturesSupport) input to `false` when pan gestures should be disabled.

```html
<igx-carousel [gesturesSupport]="false">
    ...
</igx-carousel>
```

### Automatic Transitioning

Set the [`interval`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=interval) input to create an automatic slideshow, and set [`pause`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=pause) to `false` when transitioning should not pause on interaction.

```html
<igx-carousel [interval]="2000" [pause]="false">
    ...
</igx-carousel>
```

**Note:** 
Hovering over carousel content or moving keyboard focus into carousel content pauses automatic transitioning. Automatic transitioning resumes when the pointer or keyboard focus leaves the carousel.

### Thumbnail Indicators

Use the [`IgxCarouselIndicatorDirective`](mcp:get_api_reference?platform=angular&component=IgxCarouselIndicatorDirective) template directive with a thumbnail image for each indicator when indicators should preview their corresponding slide.

```html
<igx-carousel [navigation]="false" [pause]="false" [interval]="2000" [vertical]="true" animationType="fade">
    <ng-template igxCarouselIndicator let-slide>
        <img
            [class.blurred]="!slide.active"
            [src]="slides[slide.index].thumbnail"
            [alt]="slides[slide.index].alt + ' thumbnail'"
            width="50"
            height="60" />
    </ng-template>

    @for (slide of slides; track slide.image) {
        <igx-slide>
            <img class="slide-image" [src]="slide.image" [alt]="slide.alt" />
        </igx-slide>
    }
</igx-carousel>
```

```typescript
import { Component } from '@angular/core';
import { IgxCarouselComponent, IgxCarouselIndicatorDirective, IgxSlideComponent } from 'igniteui-angular/carousel';

@Component({
    selector: 'app-carousel-thumbnail',
    host: { class: 'ig-typography' },
    styleUrls: ['./carousel-thumbnail.component.scss'],
    templateUrl: './carousel-thumbnail.component.html',
    imports: [IgxCarouselComponent, IgxCarouselIndicatorDirective, IgxSlideComponent]
})
export class CarouselThumbnailComponent {
    public readonly slides = [
        { alt: 'Wonderful coast', image: 'assets/images/carousel/WonderfulCoast.png', thumbnail: 'assets/images/carousel/WonderfulCoastThumb.png' },
        { alt: 'Cultural district', image: 'assets/images/carousel/CulturalDip.png', thumbnail: 'assets/images/carousel/CulturalDipThumb.png' },
        { alt: 'Golden beaches', image: 'assets/images/carousel/GoldenBeaches.png', thumbnail: 'assets/images/carousel/GoldenBeachesThumb.png' },
        { alt: 'Island of history', image: 'assets/images/carousel/IslandOfHistory.png', thumbnail: 'assets/images/carousel/IslandOfHistoryThumb.png' },
        { alt: 'Amazing bridge', image: 'assets/images/carousel/AmazingBridge.png', thumbnail: 'assets/images/carousel/AmazingBridgeThumb.png' }
    ];
}
```
```html
<div class="carousel-container">
  <igx-carousel [navigation]="false" [pause]="false" [interval]="2000" [vertical]="true" animationType="fade">
    <ng-template igxCarouselIndicator let-slide>
      <img
        [class.blurred]="!slide.active"
        [src]="slides[slide.index].thumbnail"
        [alt]="slides[slide.index].alt + ' thumbnail'"
        width="50"
        height="60" />
    </ng-template>

    @for (slide of slides; track slide.image) {
      <igx-slide>
        <img class="slide-image" [src]="slide.image" [alt]="slide.alt" />
      </igx-slide>
    }
  </igx-carousel>
</div>
```
```scss
.carousel-container {
    margin: 16px auto 0;
}

igx-carousel {
    height: 420px;
    margin-inline: auto;
    max-width: 75%;
}

:host ::ng-deep {
    .igx-carousel-indicators {
        border-radius: 2px;
    }

    .slide-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.blurred {
    filter: blur(2px);
    opacity: 0.5;
}
```

### Do/Don't

**When to use:** Use Carousel when the interface needs to show a compact set of related visual or mixed-content slides that users browse one at a time.

**When not to use:** Do not use Carousel for primary navigation, long sequential workflows, or content users must compare side by side. Use [Tabs](../tabs.md) for switching between named sections, or [Stepper](../stepper.md) for guided sequential tasks.

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
| [`loop`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=loop) | `boolean` | `true` | Enables looping between the first and last slides. |
| [`navigation`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=navigation) | `boolean` | `true` | Shows or hides the previous and next navigation buttons. |
| [`indicators`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=indicators) | `boolean` | `true` | Shows or hides the slide indicators. |
| [`indicatorsOrientation`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=indicatorsOrientation) | `string` | See API | Controls where the indicators are positioned. |
| [`interval`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=interval) | `number` | See API | Sets the automatic transition interval in milliseconds. |
| [`pause`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=pause) | `boolean` | See API | Controls whether automatic transitioning pauses on interaction. |
| [`vertical`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=vertical) | `boolean` | `false` | Displays the Carousel in vertical orientation. |
| [`gesturesSupport`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=gesturesSupport) | `boolean` | See API | Enables or disables pan gestures. |
| [`animationType`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent&member=animationType) | `string` | See API | Sets the slide transition animation. |

## Styling

The Carousel can be styled through its exposed parts, custom indicator content, and custom navigation slots.

```typescript
import { Component } from '@angular/core';
import {
    IgxCarouselComponent,
    IgxCarouselIndicatorDirective,
    IgxCarouselNextButtonDirective,
    IgxCarouselPrevButtonDirective,
    IgxSlideComponent
} from 'igniteui-angular/carousel';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-carousel-styling',
    host: { class: 'ig-typography' },
    styleUrls: ['./carousel-styling.component.scss'],
    templateUrl: './carousel-styling.component.html',
    imports: [
        IgxCarouselComponent,
        IgxCarouselIndicatorDirective,
        IgxCarouselNextButtonDirective,
        IgxCarouselPrevButtonDirective,
        IgxIconComponent,
        IgxSlideComponent
    ]
})
export class CarouselStylingComponent {
    public readonly slides = [
        {
            alt: 'Wonderful coast',
            image: 'https://dl.infragistics.com/x/img/carousel/WonderfulCoast.png',
            label: '01',
            subtitle: 'A quiet route along cliffs, beach towns, and open water.',
            title: 'Coastal retreat'
        },
        {
            alt: 'Cultural district',
            image: 'https://dl.infragistics.com/x/img/carousel/CulturalDip.png',
            label: '02',
            subtitle: 'Museums, galleries, and historic streets in one walkable plan.',
            title: 'Cultural district'
        },
        {
            alt: 'Golden beaches',
            image: 'https://dl.infragistics.com/x/img/carousel/GoldenBeaches.png',
            label: '03',
            subtitle: 'A sunny itinerary built around swimming, dining, and sunsets.',
            title: 'Golden beaches'
        }
    ];
}
```
```html
<div class="container sample center">
  <igx-carousel class="styled-carousel">
    <ng-template igxCarouselPrevButton>
      <span class="carousel-navigation-button"><igx-icon>chevron_left</igx-icon></span>
    </ng-template>
    <ng-template igxCarouselNextButton>
      <span class="carousel-navigation-button"><igx-icon>chevron_right</igx-icon></span>
    </ng-template>
    <ng-template igxCarouselIndicator let-slide>
      <span class="carousel-indicator" [class.carousel-indicator-active]="slide.active"></span>
    </ng-template>

    @for (slide of slides; track slide.image) {
      <igx-slide>
        <article class="slide-card">
          <img class="slide-image" [src]="slide.image" [alt]="slide.alt" />
          <div class="slide-content">
            <span class="slide-label">{{ slide.label }}</span>
            <h3>{{ slide.title }}</h3>
            <p>{{ slide.subtitle }}</p>
          </div>
        </article>
      </igx-slide>
    }
  </igx-carousel>
</div>
```
```scss
:host {
    display: block;
    width: 100%;
}

.container {
    width: min(860px, calc(100% - 32px));
    margin: 16px auto 0;
}

.styled-carousel {
    width: 100%;
    height: 430px;
    margin: 0;
    overflow: hidden;
    border: 1px solid var(--ig-gray-300);
    border-radius: 8px;
    background: var(--ig-surface-500);
}

:host ::ng-deep {
    .styled-carousel .igx-carousel-indicators {
        gap: 8px;
        padding: 6px 10px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.82);
        box-shadow: 0 6px 16px rgba(11, 31, 53, 0.16);
    }

    .styled-carousel .igx-carousel__arrow {
        display: grid;
        width: 40px;
        height: 40px;
        place-items: center;
        border: 0;
        border-radius: 50%;
        color: var(--ig-gray-800);
        background: rgba(255, 255, 255, 0.88);
        box-shadow: 0 6px 16px rgba(11, 31, 53, 0.22);
    }

    .styled-carousel .igx-slide {
        height: 100%;
    }
}

.carousel-navigation-button {
    display: inline-grid;
    width: 20px;
    height: 20px;
    place-items: center;
    line-height: 1;
}

.carousel-navigation-button igx-icon {
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

.slide-content h3 { margin: 0; font-size: 24px; line-height: 1.2; }
.slide-content p { margin: 8px 0 0; color: var(--ig-gray-700); line-height: 1.45; }
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
| [`IgxCarouselPrevButtonDirective`](mcp:get_api_reference?platform=angular&component=IgxCarouselPrevButtonDirective) | Replaces the previous navigation button content. |
| [`IgxCarouselNextButtonDirective`](mcp:get_api_reference?platform=angular&component=IgxCarouselNextButtonDirective) | Replaces the next navigation button content. |
| [`IgxCarouselIndicatorDirective`](mcp:get_api_reference?platform=angular&component=IgxCarouselIndicatorDirective) | Replaces the default slide indicator content. |

### Styling with Tailwind

Use Tailwind utility classes with the Ignite UI for Angular Carousel when you need utility-first layout styling together with Ignite UI component tokens.

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import {
    IgxCarouselComponent,
    IgxCarouselIndicatorDirective,
    IgxCarouselNextButtonDirective,
    IgxCarouselPrevButtonDirective,
    IgxSlideComponent
} from 'igniteui-angular/carousel';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-carousel-tailwind-styling',
    host: { class: 'ig-typography' },
    styleUrls: ['./carousel-tailwind-styling.component.scss'],
    templateUrl: './carousel-tailwind-styling.component.html',
    imports: [
        IgxButtonDirective,
        IgxCarouselComponent,
        IgxCarouselIndicatorDirective,
        IgxCarouselNextButtonDirective,
        IgxCarouselPrevButtonDirective,
        IgxIconComponent,
        IgxSlideComponent
    ]
})
export class CarouselTailwindStylingComponent {
    public readonly slides = [
        {
            alt: 'Scenic travel destination',
            details: ['3 days', '8 stops', 'Flexible dates'],
            image: 'https://dl.infragistics.com/x/img/carousel/AdobeStock_1937350575-s.png',
            label: '01',
            subtitle: 'A flexible travel plan built around memorable views and time to explore.',
            tags: ['Scenic route', 'Flexible pace'],
            title: 'Scenic getaway'
        },
        {
            alt: 'Mountain trail ride',
            details: ['1 day', '12 km', 'Advanced'],
            image: 'https://dl.infragistics.com/x/img/carousel/AdobeStock_215535179-s.png',
            label: '02',
            subtitle: 'A high-energy route through rugged terrain, with technical descents and open trail views.',
            tags: ['Mountain bike', 'Trail ride'],
            title: 'Mountain trail ride'
        },
        {
            alt: 'Weekend escape',
            details: ['Weekend', '5 highlights', 'Year round'],
            image: 'https://dl.infragistics.com/x/img/carousel/AdobeStock_637533323-s.png',
            label: '03',
            subtitle: 'A short break with unhurried moments, fresh perspectives, and room to recharge.',
            tags: ['Unwind', 'Go at your pace'],
            title: 'Weekend escape'
        }
    ];
}
```
```html
<div class="container sample center">
  <igx-carousel class="styled-carousel h-[430px] w-full overflow-hidden rounded-lg border border-[var(--ig-gray-300)] bg-[var(--ig-surface-500)]">
    <ng-template igxCarouselPrevButton>
      <span class="carousel-navigation-button inline-grid h-5 w-5 place-items-center leading-none"><igx-icon>chevron_left</igx-icon></span>
    </ng-template>
    <ng-template igxCarouselNextButton>
      <span class="carousel-navigation-button inline-grid h-5 w-5 place-items-center leading-none"><igx-icon>chevron_right</igx-icon></span>
    </ng-template>
    <ng-template igxCarouselIndicator let-slide>
      <span class="carousel-indicator" [class.carousel-indicator-active]="slide.active"></span>
    </ng-template>

    @for (slide of slides; track slide.image) {
      <igx-slide>
        <article class="m-0 grid h-full w-full overflow-hidden bg-[var(--ig-gray-100)] md:grid-cols-[1.15fr_0.85fr]">
          <img class="h-52 w-full object-cover md:h-full" [src]="slide.image" [alt]="slide.alt" />
          <section class="grid content-center gap-5 bg-[var(--ig-surface-500)] py-10 pl-8 pr-24 text-[var(--ig-gray-900)]">
            <div>
              <span class="mb-2 block text-xs font-bold leading-none text-[var(--ig-primary-600)]">{{ slide.label }} / ITINERARY</span>
              <h3 class="m-0 !text-2xl !leading-tight">{{ slide.title }}</h3>
              <p class="mb-0 mt-2 leading-snug text-[var(--ig-gray-700)]">{{ slide.subtitle }}</p>
            </div>
            <div class="grid grid-cols-3 divide-x divide-[var(--ig-gray-300)] border-y border-[var(--ig-gray-300)] py-3">
              @for (detail of slide.details; track detail) {
                <span class="px-2 text-center text-xs font-semibold text-[var(--ig-gray-700)] first:!pl-0 last:!pr-0">{{ detail }}</span>
              }
            </div>
            <div class="flex flex-wrap gap-2">
              @for (tag of slide.tags; track tag) {
                <span class="rounded-full border border-[var(--ig-gray-300)] px-3 py-1 text-xs text-[var(--ig-gray-700)]">{{ tag }}</span>
              }
            </div>
            <button igxButton="contained">View itinerary</button>
          </section>
        </article>
      </igx-slide>
    }
  </igx-carousel>
</div>
```
```scss
:host {
    display: block;
    width: 100%;
}

.container {
    width: min(960px, calc(100% - 32px));
    margin: 16px auto 0;
}

.styled-carousel {
    width: 100%;
    height: 430px;
    margin: 0;
}
:host ::ng-deep {
    .styled-carousel .igx-carousel-indicators {
        gap: 8px;
        padding: 6px 10px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.82);
        box-shadow: 0 6px 16px rgba(11, 31, 53, 0.16);
    }

    .styled-carousel .igx-carousel__arrow {
        display: grid;
        width: 40px;
        height: 40px;
        place-items: center;
        border: 0;
        border-radius: 50%;
        color: var(--ig-gray-800);
        background: rgba(255, 255, 255, 0.88);
        box-shadow: 0 6px 16px rgba(11, 31, 53, 0.22);
    }

    .styled-carousel .igx-slide {
        height: 100%;
    }
}

.carousel-navigation-button igx-icon {
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
```

## Accessibility

The Angular Carousel exposes carousel, slide, and indicator semantics for keyboard and assistive technology users.

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

Infragistics documents Ignite UI for Angular accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| --- | --- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html) | Navigation buttons and indicators support keyboard operation. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html) | Carousel keyboard interaction does not require focus to remain inside the component. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html) | The host, slides, indicators, and navigation controls expose roles, names, and selected state. |

Application authors still need to provide meaningful slide content, image alternative text, and enough contrast for custom indicator or navigation content.

## API References

The generated API references list the complete Carousel, slide, indicator, and supporting component APIs.

[`IgxCarousel`](mcp:get_api_reference?platform=angular&component=IgxCarouselComponent)
[`IgxSlide`](mcp:get_api_reference?platform=angular&component=IgxSlideComponent)
[`IgxCarouselIndicatorDirective`](mcp:get_api_reference?platform=angular&component=IgxCarouselIndicatorDirective)
[`IgxCarouselPrevButtonDirective`](mcp:get_api_reference?platform=angular&component=IgxCarouselPrevButtonDirective)
[`IgxCarouselNextButtonDirective`](mcp:get_api_reference?platform=angular&component=IgxCarouselNextButtonDirective)
[`IgxIcon`](mcp:get_api_reference?platform=angular&component=IgxIconComponent)
[`IgxInputGroup`](mcp:get_api_reference?platform=angular&component=IgxInputGroupComponent)
[`IgxButtonDirective`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective)

## Dependencies

The Carousel examples rely on the Carousel slide and indicator types, the theme stylesheet, and supporting input, icon, and button components when those components appear inside slides or navigation slots.

## Additional Resources

Use these resources for broader product support and source information.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

## Related Components

Use these related layout components when Carousel is not the best match for the interaction model.

- [Tabs](../tabs.md) - Use Tabs when users need to switch between named sections without slide-style navigation.
- [Stepper](../stepper.md) - Use Stepper when users need to complete a guided sequence of steps.

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
  


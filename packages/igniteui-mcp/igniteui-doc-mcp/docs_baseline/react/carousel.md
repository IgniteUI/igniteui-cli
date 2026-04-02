---
title: React Carousel | Infragistics
_description: Use Ignite UI for React Carousel component to navigate through a collection of slides, cards or page-based interfaces with endless programmatic features. Try it now
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Carousel component, React Carousel control
_license: MIT
mentionedTypes: ["Carousel"]
_tocName: Carousel
---

# React Carousel Overview

The Ignite UI for React Carousel is a responsive, lightweight component that provides the most flexible way to create slideshow-like web experience for users who navigate back and forth through a collection of images with text slides, links, and other html elements.

The React Carousel component allows you to use animations, slide transitions, and customization so you can easily tweak the interface and build React custom carousel.

## React Carousel Example

The React Carousel demo you see below shows slides containing only images.

```css
.carousel-container {
    padding: 16px;
}

.image-container {
    display: flex;
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


## Usage

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrCarousel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html), its necessary CSS, and register its module, like so:

```tsx
import { IgrCarousel, IgrCarouselSlide } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

Now that you have the Ignite UI for React Carousel imported, you can start with a basic configuration of the [`IgrCarousel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html) and its slides.

Use the [`IgrCarousel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html) selector to wrap your slides. The slides may feature any valid html content inside, including other components.

```tsx
<IgrCarousel>
    <IgrCarouselSlide>
        <img src="assets/images/carousel/ignite-ui-angular-indigo-design.png"/>
    </IgrCarouselSlide>
    <IgrCarouselSlide>
        <img src="assets/images/carousel/slider-image-chart.png"/>
    </IgrCarouselSlide>
    <IgrCarouselSlide>
        <img src="assets/images/carousel/ignite-ui-angular-charts.png"/>
    </IgrCarouselSlide>
</IgrCarousel>
```

If you want a slide to be active by default, use the `Active` attribute:

```tsx
<IgrCarousel>
    ...
    <IgrCarouselSlide>
        ...
    </IgrCarouselSlide>
    <IgrCarouselSlide active={true}>
        ...
    </IgrCarouselSlide>
</IgrCarousel>
```

> [!NOTE]
> If no active slide is set, the first one will be set by default. If there are multiple active slides on initial rendering or subsequent updates, only the last one will be taken into account.

## Examples

### Carousel Configuration

By default, the [`IgrCarousel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html) has its [`disableLoop`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html#disableLoop) property set to **false** (looping occurs when the first slide comes after the last by navigating using the Next action, or when the last slide comes after the first by using the Previous action). The looping behavior can be disabled by setting the value of the [`disableLoop`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html#disableLoop) property to **true**.

```tsx
<IgrCarousel disableLoop={true}>
    ...
</IgrCarousel>
```

To keep track of each slide index, the carousel has indicators that are positioned at the `end` of the carousel by default. In order to change this behavior, use the [`indicatorsOrientation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html#indicatorsOrientation) property and assign it to `start`.

```tsx
<IgrCarousel indicatorsOrientation={CarouselIndicatorsOrientation.Start}>
    ...
</IgrCarousel>
```

By default, the [`IgrCarousel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html) displays its navigation buttons and indicators. Use the [`hideIndicators`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html#hideIndicators) property to hide the indicators and the [`hideNavigation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html#hideNavigation) property to hide the navigation buttons.

```tsx
<IgrCarousel hideNavigation={true} hideIndicators={true}>
    ...
</IgrCarousel>
```

The [`IgrCarousel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html) supports vertical mode. Use the [`vertical`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html#vertical) property to enable it.

```tsx
<IgrCarousel vertical={true}>
    ...
</IgrCarousel>
```

### Custom indicators

To add React custom carousel indicators, use the [`IgrCarouselIndicator`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarouselindicator.html):

```tsx
<IgrCarousel>
  <IgrCarouselIndicator>
    <span key="empty">🤍</span>
    <span slot="active">
      ❤️
    </span>
  </IgrCarouselIndicator>
  <IgrCarouselIndicator>
    <span key="empty">🤍</span>
    <span slot="active">
      ❤️
    </span>
  </IgrCarouselIndicator
  <IgrCarouselSlide>
    <img
      src="https://www.infragistics.com/angular-demos-lob/assets/images/carousel/ignite-ui-angular-indigo-design.png"
    />
  </IgrCarouselSlide>
  <IgrCarouselSlide key="second">
    <img src="https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slider-image-chart.png"/>
  </IgrCarouselSlide>
</IgrCarousel>
```

The Ignite UI for React Carousel component allows users to use different elements for the active and inactive state of a single indicator. It is mandatory to provide two elements for each slot (empty and active) when declaring an indicator, even if they are the same.

### Custom navigation buttons

To achieve this, use the `previous-button` and `next-button` slots:

```tsx
<IgrCarousel>
    <IgrIcon slot="previous-button" name="previous" collection="material"></IgrIcon>
    <IgrIcon slot="next-button" name="next" collection="material"></IgrIcon>
    ...
</IgrCarousel>
```

### Slide containing other components

This carousel is going to contain slides with forms and images:

```tsx
<IgrCarousel>
    <IgrCarouselSlide>
      <div>
        <img src="assets/images/svg/carousel/SignUp.svg" />
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
    <IgrCarouselSlide>
      <div>
        <img src="assets/images/svg/carousel/Route.svg" />
        <form>
          <IgrInput type="text" placeholder="Search">
            <IgrIcon slot="prefix" name="search"></IgrIcon>
          </IgrInput>
          <IgrButton type="reset">
            <span>Search</span>
          </IgrButton>
        </form>
      </div>
    </IgrCarouselSlide>
</IgrCarousel>
```

#### Demo

```css
.carousel-container {
    padding: 16px;
}

igc-carousel {
    margin-inline: auto;
    max-width: 75%;
    height: 500px;
}

igc-carousel-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}

igc-carousel-slide div {
    text-align: center;
    max-width: 40%;
    margin-inline: auto;
}

igc-carousel-slide div * {
    margin-block: 8px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  IgrButton,
  IgrCarousel,
  IgrCarouselSlide,
  IgrIcon,
  IgrInput,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./CarouselComponents.css";
import "./index.css";

const icons = [
  {
    name: "person",
    iconText:
      '<svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"/></svg>',
  },
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
        <IgrCarouselSlide>
          <div>
            <img src="https://dl.infragistics.com/x/img/carousel/SignUp.svg" />
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
        <IgrCarouselSlide>
          <div>
            <img src="https://dl.infragistics.com/x/img/carousel/Route.svg" />
            <form>
              <IgrInput type="text" placeholder="Search">
                <IgrIcon slot="prefix" name="search"></IgrIcon>
              </IgrInput>
              <IgrButton type="reset">
                <span>Search</span>
              </IgrButton>
            </form>
          </div>
        </IgrCarouselSlide>
      </IgrCarousel>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselComponents />);
```


## Animations

Animated slide transitions provide the end-users a nice experience when interacting with the carousel.

The carousel is configured to use the `slide` animation by default, but it also supports `fade` as an alternative animation.

Use the [`animationType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html#animationType) property to change the animation.

```tsx
<IgrCarousel animationType="fade">
    ...
</IgrCarousel>
```

Setting `none` to the [`animationType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html#animationType) property disables the animations.

### Demo

The demo below demonstrates the different types of animations, which the carousel supports.

```css
.carousel-wrapper {
    height: 600px;
    width: 90%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.action-wrapper {
    height: 40px;
    width: 500px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.action {
    display: flex;
    align-items: center;
}

.slide-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

igc-carousel {
    border: 0.5px solid #dde0e4;
}

igc-select {
    width: 150px;
    margin-left: 10px;
    --ig-size: var(--ig-size-small);
}

igc-card {
    border: none;
}

igc-card-header {
    padding: 8px 16px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  HorizontalTransitionAnimation,
  IgrButton,
  IgrCard,
  IgrCardActions,
  IgrCardContent,
  IgrCardHeader,
  IgrCardMedia,
  IgrCarousel,
  IgrCarouselSlide,
  IgrCheckboxChangeEventArgs,
  IgrSelect,
  IgrSelectItem,
  IgrSwitch,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./CarouselAnimations.css";
import "./index.css";

export default function CarouselComponents() {

  const [animationType, setAnimationType] = useState<HorizontalTransitionAnimation>('slide');
  const [isCarouselVertical, setIsCarouselVertical] = useState<boolean>(false);

  const onSelectChange = (e: CustomEvent<IgrSelectItem>) => {
    const value = e.detail.value as HorizontalTransitionAnimation;
    setAnimationType(value);
  }

  const onSwitchChange = (e: IgrCheckboxChangeEventArgs) => {
    setIsCarouselVertical(e.detail.checked);
  }

  return (
    <div className="carousel-wrapper">
      <div className="action-wrapper">
        <div className="action">
          <span>Animation type</span>
          <IgrSelect onChange={onSelectChange}>
            <IgrSelectItem value="slide" selected={true}>
              <span>Slide</span>
            </IgrSelectItem>
            <IgrSelectItem value="fade">
              <span>Fade</span>
            </IgrSelectItem>
            <IgrSelectItem value="none">
              <span>None</span>
            </IgrSelectItem>
          </IgrSelect>
        </div>
        <div className="action">
          <IgrSwitch
            onChange={onSwitchChange}
            labelPosition="before"
          >
            <span>Vertical alignment</span>
          </IgrSwitch>
        </div>
      </div>
      <IgrCarousel 
        hideIndicators={true} 
        animationType={animationType} 
        vertical={isCarouselVertical}>
        <IgrCarouselSlide>
          <div className="slide-wrapper">
            <IgrCard>
              <IgrCardHeader>
                <h3 slot="title">
                  Ignite UI for Angular
                </h3>
              </IgrCardHeader>
              <IgrCardContent>
                <p>
                  30+ Material-based Angular components to code speedy web apps
                  faster.
                </p>
              </IgrCardContent>
              <IgrCardMedia>
                <img
                  src="https://dl.infragistics.com/x/img/carousel/slide1-angular.png"
                />
              </IgrCardMedia>
              <IgrCardActions>
                <IgrButton
                  slot="start"
                  href="https://www.infragistics.com/products/ignite-ui-angular"
                  target="_blank"
                  rel="noopener"
                >
                  <span>Visit Page</span>
                </IgrButton>
              </IgrCardActions>
            </IgrCard>
          </div>
        </IgrCarouselSlide>
        <IgrCarouselSlide>
          <div className="slide-wrapper">
            <IgrCard>
              <IgrCardHeader>
                <h3 slot="title">
                  Ignite UI for Javascript
                </h3>
              </IgrCardHeader>
              <IgrCardContent>
                <p>
                  A complete JavaScript UI library empowering you to build
                  data-rich responsive web apps.
                </p>
              </IgrCardContent>
              <IgrCardMedia>
                <img
                  src="https://dl.infragistics.com/x/img/carousel/slide2-ignite.png"
                />
              </IgrCardMedia>
              <IgrCardActions>
                <IgrButton
                  slot="start"
                  href="https://www.infragistics.com/products/ignite-ui"
                  target="_blank"
                  rel="noopener"
                >
                  <span>Visit Page</span>
                </IgrButton>
              </IgrCardActions>
            </IgrCard>
          </div>
        </IgrCarouselSlide>
        <IgrCarouselSlide>
          <div className="slide-wrapper">
            <IgrCard>
              <IgrCardHeader>
                <h3 slot="title">
                  Ultimate UI for ASP.NET
                </h3>
              </IgrCardHeader>
              <IgrCardContent>
                <p>
                  Build full-featured business apps with the most versatile set
                  of ASP.NET AJAX UI controls.
                </p>
              </IgrCardContent>
              <IgrCardMedia>
                <img
                  src="https://dl.infragistics.com/x/img/carousel/slide3-aspnet.png"
                />
              </IgrCardMedia>
              <IgrCardActions>
                <IgrButton
                  slot="start"
                  href="https://www.infragistics.com/products/aspnet"
                  target="_blank"
                  rel="noopener"
                >
                  <span>Visit Page</span>
                </IgrButton>
              </IgrCardActions>
            </IgrCard>
          </div>
        </IgrCarouselSlide>
      </IgrCarousel>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarouselComponents />);
```


## Navigation

Transition and navigation are the most important carousel features.

The navigation in the carousel can be handled by the user through navigation buttons, indicators, keyboard navigation and touch interaction on mobile devices.

### Touch gestures

By default, the carousel can be used on any touch-enabled device.

The carousel [animations](carousel.md#animations) are fully supported on touch devices, which makes the carousel consistent with any platform and great when used in progressive web applications ([PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)).

### Keyboard navigation

- Navigation buttons
  - <kbd>SPACE</kbd> or <kbd>ENTER</kbd> key - navigates to the next/previous slide.
- Indicators
  - <kbd>🡐</kbd> key - navigates to the previous (next in Right-to-Left mode) slide.
  - <kbd>🡒</kbd> key - navigates to the next (previous in Right-to-Left mode) slide.
  - <kbd>HOME</kbd> key - navigates to the first (last in Right-to-Left mode) slide.
  - <kbd>END</kbd> key - navigates to the last (first in Right-to-Left mode) slide.

### Automatic transitioning

The [`IgrCarousel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html) can be easily configured to change the slides automatically, without any user interaction. This way you can create your own slideshow by only setting a transition interval to the [`interval`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html#interval) property, which determines the amount of time in milliseconds between slides transition.

> [!NOTE]
> Hovering the mouse over any carousel content or moving keyboard focus to any of the carousel content pauses automatic transitioning. Automatic transitioning resumes when the mouse moves away from the carousel or when keyboard focus moves out of the carousel content.
> This can be prevented by setting [`disablePauseOnInteraction`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html#disablePauseOnInteraction) property to **true**.

```tsx
<IgrCarousel interval={2000} disablePauseOnInteraction={true}>
    ...
</IgrCarousel>
```

## Advanced Example

Let's create a fully automated carousel with looping enabled. We will configure the indicators to be a thumbnail representation of each slide.

To achieve this goal, we have to do the following configurations to the carousel:

- enable the [`disablePauseOnInteraction`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html#disablePauseOnInteraction) property
- enable the [`hideNavigation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html#hideNavigation) property
- enable the [`vertical`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html#vertical) property
- add transition [`interval`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html#interval)
- add custom [`IgrCarouselIndicator`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarouselindicator.html) for each slide

Our carousel will look like this in the template:

```tsx
const images = [
    {
        src: "assets/images/carousel/WonderfulCoast.png",
        alt: "Wonderful Coast",
    },
    {
        src: "assets/images/carousel/CulturalDip.png",
        alt: "Cultural Dip",
    },
    {
        src: "assets/images/carousel/GoldenBeaches.png",
        alt: "Golden Beaches",
    },
    {
        src: "assets/images/carousel/IslandOfHistory.png",
        alt: "Island Of History",
    },
    {
        src: "assets/images/carousel/AmazingBridge.png",
        alt: "Amazing Bridge",
    },
];

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
```

These configurations will have the following result:

```css
igc-carousel {
    margin-inline: auto;
    max-width: 75%;
}

igc-carousel::part(indicators) {
    border-radius: 2px;
}

.blurred {
    filter: blur(2px);
    opacity: 0.5;
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
  IgrCarouselIndicator,
  IgrCarouselSlide,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./CarouselThumbnail.css";
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


## Accessibility

### WAI-ARIA Roles, States, and Properties

- The Carousel base element role is [`region`](https://www.w3.org/TR/wai-aria-1.1/#region) - section containing content that is relevant to specific purpose and users will likely want to be able to navigate easily.
- Carousel indicators are with role [`tab`](https://www.w3.org/TR/wai-aria-1.1/#tab) - grouping label providing a mechanism for selecting the tab content that is to be rendered to the user
- The element that serves as the container for the set of tabs (carousel indicators) is with role [`tablist`](https://www.w3.org/TR/wai-aria-1.1/#tablist).
- Each slide element is set with role [`tabpanel`](https://www.w3.org/TR/wai-aria-1.1/#tabpanel).

### ARIA support

#### Carousel component

- **Attributes**
  - [aria-roledescription](https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription) set to "carousel".
  - [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) - used to set the priority with which screen reader should treat updates to live regions - the possible settings are: **off** and **polite**. The default setting is **polite** and is set to the element that serves as the container for the set of slides. When the [`interval`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html#interval) option is set and the carousel is in playing state, the **aria-live** attribute would be set to **off**.
  - [aria-label](https://www.w3.org/TR/wai-aria/states_and_properties#aria-label) (navigation buttons) - "Previous slide"/"Next slide".

#### Slide component

- **Attributes**
  - id - follows the pattern "igc-carousel-slide-${incremented_number}".
  - [aria-roledescription](https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription) set to "slide".
  - [aria-label](https://www.w3.org/TR/wai-aria/#aria-label) follows the pattern "${index + 1} of ${total}".

#### Indicator component

- **Attributes**
  - [aria-label](https://www.w3.org/TR/wai-aria/#aria-label) follows the pattern "Slide ${index + 1}"
  - [aria-selected](https://www.w3.org/TR/wai-aria-1.1/#aria-selected) set to **true** or **false** based on the active slide.

## API References

- [`IgrCarousel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarousel.html)
- [`IgrCarouselSlide`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarouselslide.html)
- [`IgrCarouselIndicator`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcarouselindicator.html)
- [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html)
- [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html)
- [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

---
title: Web Components Carousel | Infragistics
_description: Use Ignite UI for Web Components Carousel component to navigate through a collection of slides, cards or page-based interfaces with endless programmatic features. Try it now
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Carousel component, Web Components Carousel control
_license: MIT
mentionedTypes: ["Carousel"]
_tocName: Carousel
---

# Web Components Carousel Overview

The Ignite UI for Web Components Carousel is a responsive, lightweight component that provides the most flexible way to create slideshow-like web experience for users who navigate back and forth through a collection of images with text slides, links, and other html elements.

The Web Components Carousel component allows you to use animations, slide transitions, and customization so you can easily tweak the interface and build Web Components custom carousel.

## Web Components Carousel Example

The Web Components Carousel demo you see below shows slides containing only images.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
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

## Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcCarouselComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html), its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcCarouselComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcCarouselComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

Now that you have the Ignite UI for Web Components Carousel imported, you can start with a basic configuration of the [`IgcCarouselComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html) and its slides.

Use the [`IgcCarouselComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html) selector to wrap your slides. The slides may feature any valid html content inside, including other components.

```html
<igc-carousel>
    <igc-carousel-slide>
        <img src="assets/images/carousel/ignite-ui-indigo-design.png"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/slider-image-chart.png"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/ignite-ui-charts.png"/>
    </igc-carousel-slide>
</igc-carousel>
```

If you want a slide to be active by default, use the `Active` attribute:

```html
<igc-carousel>
    ...
    <igc-carousel-slide>
        ...
    </igc-carousel-slide>
    <igc-carousel-slide active>
        ...
    </igc-carousel-slide>
</igc-carousel>
```

> [!NOTE]
> If no active slide is set, the first one will be set by default. If there are multiple active slides on initial rendering or subsequent updates, only the last one will be taken into account.

## Examples

### Carousel Configuration

By default, the [`IgcCarouselComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html) has its [`disableLoop`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html#disableLoop) property set to **false** (looping occurs when the first slide comes after the last by navigating using the Next action, or when the last slide comes after the first by using the Previous action). The looping behavior can be disabled by setting the value of the [`disableLoop`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html#disableLoop) property to **true**.

```html
<igc-carousel disable-loop="true">
    ...
</igc-carousel>
```

To keep track of each slide index, the carousel has indicators that are positioned at the `end` of the carousel by default. In order to change this behavior, use the [`indicatorsOrientation`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html#indicatorsOrientation) property and assign it to `start`.

```html
<igc-carousel indicators-orientation="start">
    ...
</igc-carousel>
```

By default, the [`IgcCarouselComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html) displays its navigation buttons and indicators. Use the [`hideIndicators`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html#hideIndicators) property to hide the indicators and the [`hideNavigation`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html#hideNavigation) property to hide the navigation buttons.

```html
<igc-carousel hide-navigation="true" hide-indicators="true">
    ...
</igc-carousel>
```

The [`IgcCarouselComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html) supports vertical mode. Use the [`vertical`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html#vertical) property to enable it.

```html
<igc-carousel vertical="true">
    ...
</igc-carousel>
```

### Custom indicators

To add Web Components custom carousel indicators, use the [`IgcCarouselIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselindicatorcomponent.html):

```html
<igc-carousel>
    <igc-carousel-indicator>
        <span>🤍</span>
        <span slot="active">❤️</span>
    </igc-carousel-indicator>
    <igc-carousel-indicator>
        <span>🤍</span>
        <span slot="active">❤️</span>
    </igc-carousel-indicator>

    <igc-carousel-slide>
        <img src="assets/images/card/media/the_red_ice_forest.jpg" alt="the_red_ice_forest" />
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/card/media/yosemite.jpg" alt="yosemite" />
    </igc-carousel-slide>
</igc-carousel>
```

The Ignite UI for Web Components Carousel component allows users to use different elements for the active and inactive state of a single indicator. It is mandatory to provide two elements for each slot (empty and active) when declaring an indicator, even if they are the same.

### Custom navigation buttons

To achieve this, use the `previous-button` and `next-button` slots:

```html
<igc-carousel>
    <igc-icon slot="previous-button" name="previous" collection="material"></igc-icon>
    <igc-icon slot="next-button" name="next" collection="material"></igc-icon>
    ...
</igc-carousel>
```

### Slide containing other components

This carousel is going to contain slides with forms and images:

```html
<igc-carousel>
    <igc-carousel-slide>
        <div>
            <img src="assets/images/svg/carousel/SignUp.svg"/>
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
    <igc-carousel-slide>
        <div>
            <img src="assets/images/svg/carousel/Route.svg"/>
            <form>
                <igc-input type="text" placeholder="Search">
                    <igc-icon slot="prefix" name="search"></igc-icon>
                </igc-input>
                <igc-button type="reset">Search</igc-button>
            </form>
        </div>
    </igc-carousel-slide>
</igc-carousel>
```

#### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

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

## Animations

Animated slide transitions provide the end-users a nice experience when interacting with the carousel.

The carousel is configured to use the `slide` animation by default, but it also supports `fade` as an alternative animation.

Use the [`animationType`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html#animationType) property to change the animation.

```html
<igc-carousel animation-type="fade">
    ...
</igc-carousel>
```

Setting `none` to the [`animationType`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html#animationType) property disables the animations.

### Demo

The demo below demonstrates the different types of animations, which the carousel supports.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
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

The [`IgcCarouselComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html) can be easily configured to change the slides automatically, without any user interaction. This way you can create your own slideshow by only setting a transition interval to the [`interval`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html#interval) property, which determines the amount of time in milliseconds between slides transition.

> [!NOTE]
> Hovering the mouse over any carousel content or moving keyboard focus to any of the carousel content pauses automatic transitioning. Automatic transitioning resumes when the mouse moves away from the carousel or when keyboard focus moves out of the carousel content.
> This can be prevented by setting [`disablePauseOnInteraction`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html#disablePauseOnInteraction) property to **true**.

```html
<igc-carousel interval="2000" disable-pause-on-interaction="true">
    ...
</igc-carousel>
```

## Advanced Example

Let's create a fully automated carousel with looping enabled. We will configure the indicators to be a thumbnail representation of each slide.

To achieve this goal, we have to do the following configurations to the carousel:

- enable the [`disablePauseOnInteraction`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html#disablePauseOnInteraction) property
- enable the [`hideNavigation`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html#hideNavigation) property
- enable the [`vertical`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html#vertical) property
- add transition [`interval`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html#interval)
- add custom [`IgcCarouselIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselindicatorcomponent.html) for each slide

Our carousel will look like this in the template:

```html
<igc-carousel
    disable-pause-on-interaction="true"
    hide-navigation="true"
    vertical="true"
    interval="2000"
    animation-type="fade"
>
    <igc-carousel-indicator>
        <img class="blurred" src="assets/images/carousel/WonderfulCoastThumb.png" width="50" height="60"/>
        <img slot="active" src="assets/images/carousel/WonderfulCoastThumb.png" width="50" height="60"/>
    </igc-carousel-indicator>
    <igc-carousel-indicator>
        <img class="blurred" src="assets/images/carousel/CulturalDipThumb.png" width="50" height="60"/>
        <img slot="active" src="assets/images/carousel/CulturalDipThumb.png" width="50" height="60"/>
    </igc-carousel-indicator>
    <igc-carousel-indicator>
        <img class="blurred" src="assets/images/carousel/GoldenBeachesThumb.png" width="50" height="60"/>
        <img slot="active" src="assets/images/carousel/GoldenBeachesThumb.png" width="50" height="60"/>
    </igc-carousel-indicator>
    <igc-carousel-indicator>
        <img class="blurred" src="assets/images/carousel/IslandOfHistoryThumb.png" width="50" height="60"/>
        <img slot="active" src="assets/images/carousel/IslandOfHistoryThumb.png" width="50" height="60"/>
    </igc-carousel-indicator>
    <igc-carousel-indicator>
        <img class="blurred" src="assets/images/carousel/AmazingBridgeThumb.png" width="50" height="60"/>
        <img slot="active" src="assets/images/carousel/AmazingBridgeThumb.png" width="50" height="60"/>
    </igc-carousel-indicator>

    <igc-carousel-slide>
        <img src="assets/images/carousel/WonderfulCoast.png"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/CulturalDip.png"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/GoldenBeaches.png"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/IslandOfHistory.png"/>
    </igc-carousel-slide>
    <igc-carousel-slide>
        <img src="assets/images/carousel/AmazingBridge.png"/>
    </igc-carousel-slide>
</igc-carousel>
```

These configurations will have the following result:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
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
  - [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) - used to set the priority with which screen reader should treat updates to live regions - the possible settings are: **off** and **polite**. The default setting is **polite** and is set to the element that serves as the container for the set of slides. When the [`interval`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html#interval) option is set and the carousel is in playing state, the **aria-live** attribute would be set to **off**.
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

- [`IgcCarouselComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselcomponent.html)
- [`IgcCarouselSlideComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselslidecomponent.html)
- [`IgcCarouselIndicatorComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccarouselindicatorcomponent.html)
- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html)
- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html)
- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

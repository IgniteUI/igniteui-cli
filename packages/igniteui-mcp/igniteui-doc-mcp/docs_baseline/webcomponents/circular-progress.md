---
title: Web Components Circular Progress | Circular Progress | Infragistics
_description: Circular Progress Indicator component allows developers to display progress in a circle with endless customization options.
_keywords: Web Components Circular Progress, Ignite UI for Web Components, Infragistics
_license: MIT
mentionedTypes: ["CircularProgress", "CircularGradient"]
namespace: Infragistics.Controls
_tocName: Circular Progress
---

# Web Components Circular Progress Overview

The Ignite UI for Web Components Circular Progress Indicator component provides a visual indicator of an application’s process as it changes. The circular indicator updates its appearance as its state changes.

## Web Components Circular Progress Example

```css
#circular-progress{
    margin: 20px;
    --diameter: 50px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcCircularProgressComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccircularprogresscomponent.html), its necessary CSS, and register its module, like so:

```ts
import {defineComponents, IgcCircularProgressComponent} from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcCircularProgressComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the [`IgcCircularProgressComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccircularprogresscomponent.html) is as follows:

```html
<igc-circular-progress value="100"></igc-circular-progress>
```

### Progress Types

You can set the type of your indicator, using the [`variant`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccircularprogresscomponent.html#variant) attribute. There are five types of circular progress indicators - **primary** (default), **error**, **success**, **info**, and **warning**.

```html
<igc-circular-progress value="100" variant="success"></igc-circular-progress>
```

### Indeterminate Progress

If you want to track a process that is not determined precisely, you can set the [`indeterminate`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccircularprogresscomponent.html#indeterminate) property. Also, you can hide the default label of the Ignite UI for Web Components [`IgcCircularProgressComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccircularprogresscomponent.html) by setting the [`hideLabel`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccircularprogresscomponent.html#hideLabel) property and customize the progress indicator default label via the exposed [`labelFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccircularprogresscomponent.html#labelFormat) property.

```html
<igc-circular-progress value="100" indeterminate="true"></igc-circular-progress>
```

The following sample demonstrates the above configuration:

```css
#circular-progress {
    margin: 20px;
	--diameter: 50px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

### Animation Duration

You can use the [`animationDuration`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccircularprogresscomponent.html#animationDuration) property on the [`IgcCircularProgressComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccircularprogresscomponent.html) component to specify how long the animation cycle should take in milliseconds.

```html
<igc-circular-progress animation-duration="5000" indeterminate></igc-circular-progress>
```

### Gradient Progress

Customizing the progress bar in order to use a color gradient instead of a solid color could be done via the exposed `gradient` slot and [`IgcCircularGradientComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccirculargradientcomponent.html) which defines the gradient stops.

```css
#sample-content {
    width: 300px;
    display: flex;
    align-items: center;
    margin-top: 30px;
}

#circularProgress {
    margin-right: 50px;
    margin-left: 20px;
    --diameter: 50px;
    --stroke-thickness: 3px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


> [!Note]
> For each [`IgcCircularGradientComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccirculargradientcomponent.html) defined as gradient slot of Ignite UI for Web Components [`IgcCircularProgressComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccircularprogresscomponent.html) a [SVG stop](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop) element would be created. The values passed as `color`, `offset` and `opacity` would be set as stop-color, offset and stop-opacity of the SVG element without further validations.

```html
<igc-circular-progress>
    <igc-circular-gradient slot="gradient" offset="0%" color="#ff9a40"></igc-circular-gradient>
    <igc-circular-gradient slot="gradient" offset="50%" color="#1eccd4"></igc-circular-gradient>
    <igc-circular-gradient slot="gradient" offset="100%" color="#ff0079"></igc-circular-gradient>
</igc-circular-progress>
```

<div class="divider--half"></div>

## Styling

The [`IgcCircularProgressComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccircularprogresscomponent.html) component exposes CSS parts for almost all of its inner elements:

|Name|Description|
|--|--|
| `svg`               | The progress SVG element.                |
| `gradient_start`     | The progress linear-gradient start color. |
| `gradient_end`       | The progress linear-gradient end color.  |
| `track`              | The progress ring's track area.          |
| `fill`               | The progress indicator area.             |
| `label`              | The progress label.                      |
| `value`              | The progress label value.                |
| `indeterminate`      | The progress indeterminate state.        |
| `primary`            | The progress indicator primary state.    |
| `danger`             | The progress indicator error state.      |
| `warning`            | The progress indicator warning state.    |
| `info`               | The progress indicator info state.       |
| `success`            | The progress indicator success state.    |

Using this CSS parts we have almost full control over the Circular Progress styling.

```css

igc-circular-progress {
  margin: 20px;
  --diameter: 50px;
}

igc-circular-progress::part(gradient_end),
igc-circular-progress::part(gradient_start) {
  stop-color: var(--ig-success-200);
}

igc-circular-progress::part(track) {
  stroke: var(--ig-gray-400);
}

```

```css
igc-circular-progress {
  margin: 20px;
  --diameter: 50px;
}

igc-circular-progress::part(gradient_end),
igc-circular-progress::part(gradient_start) {
  stop-color: var(--ig-success-200);
}

igc-circular-progress::part(track) {
  stroke: var(--ig-gray-400);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## API References

- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html)
- [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html)
- [`IgcCircularGradientComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccirculargradientcomponent.html)
- [`IgcCircularProgressComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccircularprogresscomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

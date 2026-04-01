---
title: Web Components Linear Progress | Linear Progress | Infragistics
_description: Display a progress bar and customize its appearance with endless color and striping options with Linear Progress Indicator component.
_keywords: Web Components Linear Progress, Ignite UI for Web Components, Infragistics
_license: MIT
mentionedTypes: ["LinearProgress"]
_tocName: Linear Progress
---

# Web Components Linear Progress Overview

The Ignite UI for Web Components Linear Progress Indicator component provides a visual indicator of an application’s process as it changes. The [`IgcLinearProgressComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclinearprogresscomponent.html) indicator updates its appearance as its state changes. Also, you can style this component with a choice of colors in stripes or solids.

## Web Components Linear Progress Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Usage

<!-- WebComponents -->

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcLinearProgressComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclinearprogresscomponent.html), you need to register it as follows:

```ts
import {defineComponents, IgcLinearProgressComponent} from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcLinearProgressComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

<!-- end: WebComponents -->

The simplest way to start using the [`IgcLinearProgressComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclinearprogresscomponent.html) is as follows:

```html
<igc-linear-progress value="100"></igc-linear-progress>
```

### Progress Types

You can set the type of your indicator, using  the [`variant`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclinearprogresscomponent.html#variant) attribute. There are five types of linear progress indicators - **primary** (default), **error**, **success**, **info**, and **warning**.

```html
<igc-linear-progress value="100" variant="success"></igc-linear-progress>
```

### Striped Progress

You can make the indicator striped, using the [`striped`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclinearprogresscomponent.html#striped) property:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

### Indeterminate Progress

If you want to track a process that is not determined precisely, you can set the [`indeterminate`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclinearprogresscomponent.html#indeterminate) property.

### Animation Duration

The [`animationDuration`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclinearprogresscomponent.html#animationDuration) property is used to specify how long the animation cycle should take. It takes as value a number which represents the animation duration in milliseconds.

```html
<igc-linear-progress animation-duration="5000" indeterminate></igc-linear-progress>
```

### Text Properties

You can align the default value, using the [`labelAlign`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclinearprogresscomponent.html#labelAlign) property. Permitted values are **top**, **bottom**, **top-start**, **top-end**, **bottom-start** and **bottom-end**.

To hide the default label of the progress indicator, use the [`hideLabel`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclinearprogresscomponent.html#hideLabel) attribute.

The [`labelFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclinearprogresscomponent.html#labelFormat) property can be used to customize the [`IgcLinearProgressComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclinearprogresscomponent.html) default label.

The following sample demonstrates the above configuration:

```css
.progress-container{
    margin-bottom: 15px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

### Dynamic Progress

You can dynamically change the value of the progress indicator by using external controls like buttons. To achieve this, we can bind the value to a class property:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Styling

The [`IgcLinearProgressComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclinearprogresscomponent.html) component exposes CSS parts for almost all of its inner elements:

|Name|Description|
|--|--|
| `track`         | The progress ring's track area. |
| `fill`          | The progress indicator area. |
| `striped`       | The progress striped indicator. |
| `label`         | The progress indicator label. |
| `value`         | The progress label value. |
| `indeterminate` | The progress indeterminate state. |
| `primary`       | The progress indicator primary state. |
| `danger`        | The progress indicator error state. |
| `warning`       | The progress indicator warning state. |
| `info`          | The progress indicator info state. |
| `success`       | The progress indicator success state. |

Using this CSS parts we have almost full control of the Linear Progress styling.

```css
igc-linear-progress::part(track){
  background-color: var(--ig-gray-300)
}

igc-linear-progress::part(fill){
  background-color: var(--ig-primary-300)
}

igc-linear-progress::part(label){
  color: var(--ig-primary-300)
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


```css
igc-linear-progress::part(track){
  background-color: var(--ig-gray-300)
}

igc-linear-progress::part(fill){
  background-color: var(--ig-primary-300)
}

igc-linear-progress::part(label){
  color: var(--ig-primary-300)
}
```

## API References

- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html)
- [`IgcCalendarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccalendarcomponent.html)
- [`IgcLinearProgressComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclinearprogresscomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

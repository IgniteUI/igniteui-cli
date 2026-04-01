---
title: Web Components Button Component | Ignite UI for Web Components
_description: Get started with the Web Components Button Component. Select button variants, configure sizes, define styling, and gain flexibility through the Web Components Button OnClick event.
_keywords: Web Components, UI controls, web widgets, UI widgets, Web Components Button Components, Infragistics
mentionedTypes: ["Button", "ButtonBase"]
_license: MIT
_tocName: Button
---

# Web Components Button Overview

The Web Components Button Component lets you enable clickable elements that trigger actions in your Web Components app. You get full control over how you set button variants, configure styles for the wrapped element, and define sizes. The Button Component also gives flexibility through the Web Components Button <!-- WebComponents, Blazor -->OnClick event<!-- end: WebComponents, Blazor -->, toggle the Web Components button, disable the Web Components button, and more.

## Web Components Button Example

```css
.button-container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Usage

<!-- WebComponents -->

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html), its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcButtonComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcButtonComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

<!-- end: WebComponents -->

The simplest way to start using the [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html) is as follows:

```html
<igc-button>Click me</igc-button>
```

## Prefix / Suffix

With `prefix` and `suffix` slots of the [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html) component, we can add different content before and after the main content of the button.

```html
<igc-button type="button" variant="contained">
    <span slot="prefix">+</span>Click me<span slot="suffix">-</span>
</igc-button>
```

## Type

The button component will change its internal structure from a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) to an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) type element when the [`href`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html#href) attribute is set. In that case the button can be thought of as a regular link. Setting the [`href`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html#href) attribute will allow you to also set the [`rel`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html#rel), [`target`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html#target) and [`download`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html#download) attributes.
In the case when the button component uses an actual [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element internally, we can specify its [`Type`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html#Type) by setting the property to any of the following values:

- `Submit` - when we want to submit the form data
- `reset` - when we want to reset form data to its initial values
- `button` - when we want to add button with a custom functionality anywhere on a webpage

## Button Variants

### Contained Button

Use the [`variant`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html#variant) attribute to add a simple contained button in your component template. Note that if you do not set variant, by default it will be set to contained.

```html
<igc-button variant="contained">Contained</igc-button>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Outlined Button

All you have to do to create an `outlined` button is to change the value of the [`variant`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html#variant) property:

```html
<igc-button variant="outlined">Outlined</igc-button>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Flat Button

Analogically, we can switch to `flat` variant.

```html
<igc-button variant="flat">Flat</igc-button>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Floating Action Button

We can create a floating action button by setting the [`variant`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html#variant) property to `fab`:

```html
<igc-button variant="fab">Fab</igc-button>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Button Sizing

Users can change the size of the [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html) using the `--ig-size` CSS variable. In the following example, we will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size of the button.

```ts
import { defineComponents, IgcButtonComponent, IgcRadioComponent, IgcRadioGroupComponent } from 'igniteui-webcomponents';
defineComponents(IgcButtonComponent, IgcRadioComponent, IgcRadioGroupComponent);
```

```html
<igc-radio-group id="radio-group" alignment="horizontal">
    <igc-radio name="size" value="small" label-position="after">Small</igc-radio>
    <igc-radio name="size" value="medium" label-position="after" checked>Medium</igc-radio>
    <igc-radio name="size" value="large" label-position="after">Large</igc-radio>
</igc-radio-group>
```

```ts
this.radioGroup = document.getElementById('radio-group') as IgcRadioGroupComponent;
this.outlinedButton = document.getElementById('outlined-btn') as IgcButtonComponent;
this.flatButton = document.getElementById('flat-btn') as IgcButtonComponent;
this.containedButton = document.getElementById('contained-btn') as IgcButtonComponent;
this.fabButton = document.getElementById('fab-btn') as IgcButtonComponent;

this.radioGroup.addEventListener('click', (radio: any) => {
    this.outlinedButton.style.setProperty('--ig-size', `var(--ig-size-${radio.target.value})`);
    this.flatButton.style.setProperty('--ig-size', `var(--ig-size-${radio.target.value})`);
    this.containedButton.style.setProperty('--ig-size', `var(--ig-size-${radio.target.value})`);
    this.fabButton.style.setProperty('--ig-size', `var(--ig-size-${radio.target.value})`);
});
```

The result of implementing the above code should look like the following:

```css
.button-container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
}

#radio-group {
    display: flex;
    margin: 0 auto;
    width: 15%;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Download

Setting the [`download`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html#download) property will prompt the user to save the linked URL instead of navigating to it.

```html
<igc-button
    href=""
    variant="contained"
    download="url_to_content"
    target="_blank">
    Download
</igc-button>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Styling

The [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html) exposes three CSS parts which we can use for styling:

|Name|Description|
|--|--|
| `base` | The native button element of the igc-button component. |
| `prefix` | The prefix container of the igc-button component. |
| `suffix` | The suffix container of the igc-button component. |

The `base` CSS part allows us to style the wrapped element (`<button>` or `<a>`).

```css
igc-button::part(base) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
  padding: 18px;
}
```

```css
igc-button::part(base) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
  padding: 18px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## API References

- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html)
- [`Type`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html#Type)
- [`download`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html#download)
- [`href`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html#href)
- [`IgcRadioGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiogroupcomponent.html)
- [`IgcRadioComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiocomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

---
title: Web Components Button Component | Ignite UI for Web Components
_description: Get started with the Web Components Button Component. Select button variants, configure sizes, define styling, and gain flexibility through the Web Components Button OnClick event.
_keywords: Web Components, UI controls, web widgets, UI widgets, Web Components Button Components, Infragistics
mentionedTypes: ["Button", "ButtonBase"]
_license: MIT
_tocName: Button
---

# Web Components Button Overview

The Web Components Button Component lets you enable clickable elements that trigger actions in your Web Components app. You get full control over how you set button variants, configure styles for the wrapped element, and define sizes. The Button Component also gives flexibility through the Web Components Button OnClick event, toggle the Web Components button, disable the Web Components button, and more.

## Web Components Button Example

```css
.button-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
}
```

## Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcButtonComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent), its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcButtonComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcButtonComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the [`IgcButtonComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent) is as follows:

```html
<igc-button>Click me</igc-button>
```

## Prefix / Suffix

With `prefix` and `suffix` slots of the [`IgcButtonComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent) component, we can add different content before and after the main content of the button.

```html
<igc-button type="button" variant="contained">
    <span slot="prefix">+</span>Click me<span slot="suffix">-</span>
</igc-button>
```

## Type

The button component will change its internal structure from a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) to an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) type element when the [`href`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=href) attribute is set. In that case the button can be thought of as a regular link. Setting the [`href`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=href) attribute will allow you to also set the [`rel`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=rel), [`target`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=target) and [`download`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=download) attributes.
In the case when the button component uses an actual [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element internally, we can specify its [`Type`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=Type) by setting the property to any of the following values:

- `Submit` - when we want to submit the form data
- `reset` - when we want to reset form data to its initial values
- `button` - when we want to add button with a custom functionality anywhere on a webpage

## Button Variants

### Contained Button

Use the [`variant`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=variant) attribute to add a simple contained button in your component template. Note that if you do not set variant, by default it will be set to contained.

```html
<igc-button variant="contained">Contained</igc-button>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-button {
  width: 40%;
  margin: auto;
}
```

### Outlined Button

All you have to do to create an `outlined` button is to change the value of the [`variant`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=variant) property:

```html
<igc-button variant="outlined">Outlined</igc-button>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-button {
  width: 40%;
  margin: auto;
}
```

### Flat Button

Analogically, we can switch to `flat` variant.

```html
<igc-button variant="flat">Flat</igc-button>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container {
  background: var(--ig-surface-600);
}

igc-button {
  width: 40%;
  margin: auto;
  background: var(--ig-surface-50);
}
```

### Floating Action Button

We can create a floating action button by setting the [`variant`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=variant) property to `fab`:

```html
<igc-button variant="fab">Fab</igc-button>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-button {
  width: 40%;
  margin: auto;
}
```

## Button Sizing

Users can change the size of the [`IgcButtonComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent) using the `--ig-size` CSS variable. In the following example, we will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size of the button.

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
.container {
    justify-content: center;
}

.button-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
}

#radio-group {
    display: flex;
    justify-content: center;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Download

Setting the [`download`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=download) property will prompt the user to save the linked URL instead of navigating to it.

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

igc-button {
  width: 40%;
  margin: auto;
}
```

## Styling

The [`IgcButtonComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent) exposes three CSS parts which we can use for styling:

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
  background-color: var(--ig-warn-700);
  color: var(--ig-warn-700-contrast);
  padding: 18px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-button {
  width: 40%;
  margin: auto;
}
```

## API References

- [`IgcButtonComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent)
- [`Type`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=Type)
- [`download`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=download)
- [`href`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent&member=href)
- [`IgcRadioGroupComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioGroupComponent)
- [`IgcRadioComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioComponent)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

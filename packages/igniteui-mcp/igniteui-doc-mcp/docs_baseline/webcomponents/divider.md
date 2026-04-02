---
title: Web Components Divider | Layout Controls | Infragistics
_description: Use Infragistics' Web Components divider component to easily create a horizontal/vertical rule as a break between content to better organize information on a page.
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, Web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components DIvider components, Web Components Divider controls
_license: MIT
mentionedTypes: ["Divider"]
_tocName: Divider
---

# Web Components Divider

The Ignite UI for Web Components Divider allows the content author to easily create a horizontal/vertical rule as a break between content to better organize information on a page.

## Web Components Divider Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Dependencies

First, you need to install the Ignite UI for Web Components npm package by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcDividerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdividercomponent.html), you need to register it as follows:

```ts
import { defineComponents, IgcDividerComponent } from 'igniteui-webcomponents';

defineComponents(IgcDividerComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The [`IgcDividerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdividercomponent.html) is capable of displaying images, initials, or any other content, including icons. Declaring an [`IgcDividerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdividercomponent.html) is as simple as:

```html
<igc-divider></igc-divider>
```

## Usage

### Vertical Divider

If the [`vertical`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdividercomponent.html#vertical) attribute is set the direction of the divider would be changed from horizontal to vertical.

```html
<igc-divider vertical></igc-divider>
```

```css
p{
    text-align: justify;
}

.content{
    display:flex;
    gap: 16px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Type

The [`type`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdividercomponent.html#type) attribute determines whether to render a `solid` or a `dashed` divider line. The default value is `solid`.

```html
<igc-divider type="dashed"></igc-divider>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Inset Divider

The [`IgcDividerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdividercomponent.html) can be set in on both sides. To `inset` the divider, set the [`middle`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdividercomponent.html#middle) attribute to true in combination with the `--inset` css variable. This will shrink the divider line from both sides. The default value of the [`middle`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdividercomponent.html#middle) attribute is false.

```css
/* DividerStyles.css */
.withInset{
    --inset: 100px;
    --color:red;
}
```

```html
// Both side
<igc-divider middle="true" class="withInset"></igc-divider>
// Left side only
<igc-divider></igc-divider>
```

```css
.parent{
    display: flex;
    justify-content: space-between;   
}

.content{
    width: 45%;    
    padding: 20px;
}

.withInset{
    --inset: 100px;
    --color:red;
}

h4 {
    margin-top: 0;
}
p {
    margin-top: 0;
}
.mt {
    margin-top: 16px;
    margin-bottom: 0;
}
.mb {
    margin-bottom: 16px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Using Divider Inside Select Component

The following sample illustrates how the [`IgcDividerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdividercomponent.html) can be integrated within the [`IgcSelectComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html) in order to distinguish two groups of items.

```html
<igc-select>
  <igc-select-item>Item 1</igc-select-item>
  <igc-select-item>Item 2</igc-select-item>
  <igc-divider></igc-divider>
  <igc-select-item>Item 3</igc-select-item>
</igc-select>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## CSS Variables

### Inset

The `--inset` css variable shrinks the divider by the given amount from the start. If middle is set it will shrink from both sides.

### Color

The `--color` css variable sets the color of the divider.

<div class="divider--half"></div>

## API References

- [`IgcDividerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdividercomponent.html)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

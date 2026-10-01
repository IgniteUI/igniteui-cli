---
title: "Web Components Divider | Layout Controls | Infragistics"
description: Use Infragistics' Web Components divider component to easily create a horizontal/vertical rule as a break between content to better organize information on a page.
keywords: "Ignite UI for Web Components, UI controls, Web Components widgets, Web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components DIvider components, Web Components Divider controls"
license: MIT
mentionedTypes: ["Divider"]
llms:
  description: "The Ignite UI for Web Components Divider allows the content author to easily create a horizontal/vertical rule as a break between content to better organize information on a page."
_tocName: Divider
---
# Web Components Divider

The Ignite UI for Web Components Divider allows the content author to easily create a horizontal/vertical rule as a break between content to better organize information on a page.

## Web Components Divider Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Dependencies

First, you need to install the Ignite UI for Web Components npm package by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcDivider`](mcp:get_api_reference?platform=webcomponents&component=IgcDividerComponent), you need to register it as follows:

```ts
import { defineComponents, IgcDividerComponent } from 'igniteui-webcomponents';

defineComponents(IgcDividerComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The [`IgcDivider`](mcp:get_api_reference?platform=webcomponents&component=IgcDividerComponent) is capable of displaying images, initials, or any other content, including icons. Declaring an [`IgcDivider`](mcp:get_api_reference?platform=webcomponents&component=IgcDividerComponent) is as simple as:

```html
<igc-divider></igc-divider>
```

## Usage
### Vertical Divider

If the [`Vertical`](mcp:get_api_reference?platform=webcomponents&component=IgcDividerComponent&member=vertical) attribute is set the direction of the divider would be changed from horizontal to vertical.

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

The [`Type`](mcp:get_api_reference?platform=webcomponents&component=IgcDividerComponent&member=type) attribute determines whether to render a `solid` or a `dashed` divider line. The default value is `solid`.

```html
<igc-divider type="dashed"></igc-divider>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

### Inset Divider

The [`IgcDivider`](mcp:get_api_reference?platform=webcomponents&component=IgcDividerComponent) can be set in on both sides. To `inset` the divider, set the [`Middle`](mcp:get_api_reference?platform=webcomponents&component=IgcDividerComponent&member=middle) attribute to true in combination with the `--inset` css variable. This will shrink the divider line from both sides. The default value of the [`Middle`](mcp:get_api_reference?platform=webcomponents&component=IgcDividerComponent&member=middle) attribute is false.

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

The following sample illustrates how the [`IgcDivider`](mcp:get_api_reference?platform=webcomponents&component=IgcDividerComponent) can be integrated within the [`IgcSelect`](mcp:get_api_reference?platform=webcomponents&component=IgcSelectComponent) in order to distinguish two groups of items.

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

## API References
[`IgcDivider`](mcp:get_api_reference?platform=webcomponents&component=IgcDividerComponent)
## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

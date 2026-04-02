---
title: Web Components Chip | Infragistics
_description: Infragistics' Web Components Chip component allows you to display content in a predefined style to decorate other components anywhere in an application.
_keywords: Web Components, UI controls, web widgets, UI widgets, Web Components, Web Components Chip Components, Infragistics
_license: MIT
mentionedTypes: ["Chip"]
_tocName: Chip
---

# Web Components Chip Overview

Ignite UI for Web Components Chips help people enter information, make selections, filter content, or trigger actions.

## Web Components Chip Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider"></div>

## Usage

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcChipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html), its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcChipComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcChipComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the [`IgcChipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html) is as follows:

```html
<igc-chip></igc-chip>
```

To display a selectable chip, you can use the [`selectable`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html#selectable) property of the chip.

```html
<igc-chip selectable></igc-chip>
```

To display a removable chip, you can use the [`removable`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html#removable) property of the chip.

```html
<igc-chip removable></igc-chip>
```

## Examples

### Variants

The Ignite UI for Web Components chip supports several pre-defined stylistic variants. You can change the variant by assigning one of the supported values - `Primary`, `Info`, `Success`, `Warning`, or `Danger` to the [`variant`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html#variant) property.

```html
<igc-chip variant="success"></igc-chip>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Disabled

The Ignite UI for Web Components chip can be disabled by using the [`disabled`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html#disabled) property.

```html
<igc-chip disabled></igc-chip>
```

### Prefix / Suffix

With the `Prefix` and `Suffix` parts of the [`IgcChipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html) component and their slots, we can add different content before and after the main content of the chip. We provide default select and remove icons but you can customize them using the [`IgcSelectComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html) and `Remove` slots. You can add additional content before or after the main content, using the `Start` and `End` slots.

```html
<igc-chip selectable removable>
  <span slot="select"><igc-icon name="verified-account"></igc-icon></span>
  <span slot="start"><igc-icon name="brush"></igc-icon></span>
    Chip
  <span slot="end"><igc-icon name="blood"></igc-icon></span>
  <span slot="remove"><igc-icon name="pacifier"></igc-icon></span>
</igc-chip>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Size

We allow the user to choose the size of the [`IgcChipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html) by utilizing the `--ig-size` CSS variable:

```css
.size-small {
  --ig-size: var(--ig-size-small);
}

.size-medium {
  --ig-size: var(--ig-size-medium);
}

.size-large {
  --ig-size: var(--ig-size-large);
}
```

```css
.container {
  align-items: flex-start !important;
}

.small {
    --ig-size: var(--ig-size-small);
}

.medium {
    --ig-size: var(--ig-size-medium);
}

.large {
    --ig-size: var(--ig-size-large);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Styling

The [`IgcChipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html) component exposes a `base`, `prefix`, `suffix` CSS parts that can be used to change all of its style properties.

```css
igc-chip::part(base) {
  background: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}

igc-chip::part(suffix) {
  color: var(--ig-gray-400);
}
```

```css
igc-chip::part(base) {
  background: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}

igc-chip::part(suffix) {
  color: var(--ig-gray-400);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## API References

- [`IgcChipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchipcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

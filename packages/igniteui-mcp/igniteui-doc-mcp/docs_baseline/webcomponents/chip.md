---
title: "Chip"
description: "The Ignite UI for Web Components Chip is a compact element for tags, filters, and recipients that users can select or remove, with style variants and icon slots."
keywords: "Web Components Chip, chip component, selectable chip, removable chip, tags, filters, Ignite UI for Web Components, Infragistics"
license: MIT
last_updated: "2026-10-07"
mentionedTypes: ["Chip", "Icon"]
relatedComponents: ["Button", "Checkbox", "Badge"]
llms:
  description: "The Ignite UI for Web Components Chip is a compact element that represents a tag, filter, or person and that users can select or remove."
_tocName: Chip
---
# Chip Component

The Ignite UI for Web Components Chip is a compact element that represents a tag, filter, or person and that users can select or remove.

A chip can be selectable, removable, or both, and can show icons or other content before and after its label.

## Live Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.profile-card {
    --ig-size: var(--ig-size-medium);

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 21.875rem;
    padding: 1rem;
    border: 1px solid var(--ig-gray-200);
    border-radius: 0.25rem;
    background: var(--ig-surface-500);
}

.section-header {
    display: flex;
    align-items: center;
    height: 2rem;
    padding-inline: 1rem;
    color: var(--ig-secondary-500);
    font-family: var(--ig-overline-font-family, var(--ig-font-family));
    font-size: var(--ig-overline-font-size);
    font-weight: var(--ig-overline-font-weight);
    line-height: var(--ig-overline-line-height);
    letter-spacing: var(--ig-overline-letter-spacing);
    text-transform: var(--ig-overline-text-transform);
}

.name-input {
    --ig-size: var(--ig-size-small);
}

/* The chip host is a block box, so its line box would add height around the chip. */
.skill {
    display: flex;
}

/* The minimum height keeps the card from shrinking when no skill is selected. */
.chip-group {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    min-height: 2rem;
    padding: 0.25rem;
}

.actions {
    display: flex;
    justify-content: flex-end;
}
```

## Anatomy

The Web Components Chip is a container that holds a label and optional icons in a single row.

**Web Components Chip anatomy anatomy:** The chip anatomy labels the container, selection icon, left icon, label, right icon, and remove icon.

<style>{`
  .chip-anatomy {
    --igd-anatomy-padding: 72px 32px;
  }

  .chip-anatomy .igd-anatomy__image {
    max-width: 282.5px;
  }

  .chip-anatomy-legend {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 24px;
    margin-bottom: 24px;
  }

  .chip-anatomy-legend span {
    display: block;
  }

  @media (max-width: 768px) {
    .chip-anatomy-legend {
      grid-template-columns: 1fr;
    }
  }
`}</style>

<div class="chip-anatomy-legend ig-typography__body-2">
  <div>
    <span><strong>1. Container:</strong> holds all chip elements and defines its visual boundary</span>
    <span><strong>2. Selection Icon:</strong> indicates the chip is selected</span>
    <span><strong>3. Left Icon (optional):</strong> displayed on the left side of the label</span>
  </div>
  <div>
    <span><strong>4. Label:</strong> the text that identifies or describes the chip's value</span>
    <span><strong>5. Right Icon (optional):</strong> displayed on the right side of the label</span>
    <span><strong>6. Remove Icon:</strong> cancel icon indicates when a chip can be removed</span>
  </div>
</div>

```text
igc-chip                              // host
└─ div[part="base"]                   // chip wrapper
   ├─ button[part="action"]           // selection control; aria-pressed when selectable
   │  ├─ span[part="prefix"]          // hidden when empty and not selected
   │  │  ├─ slot[name="select"]       // default select icon, shown when selectable and selected
   │  │  ├─ slot[name="start"]        // content before the prefix content
   │  │  └─ slot[name="prefix"]       // content before the label
   │  ├─ span[part="content"]
   │  │  └─ slot                      // label (default slot)
   │  └─ span[part="suffix"]          // hidden when empty
   │     ├─ slot[name="end"]          // content before the suffix content
   │     └─ slot[name="suffix"]       // content after the label
   └─ span[part="remove"]             // rendered when removable and not disabled
      └─ slot[name="remove"]          // default remove icon button
```

## Getting Started

Install Ignite UI for Web Components and configure a theme, as described in the [Getting Started](../general-getting-started.md) topic, before you add the Web Components Chip to an application.

Import and register the [`IgcChip`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent) component and its theme.

```ts
import { defineComponents, IgcChipComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcChipComponent);
```

### Prerequisites and Version Compatibility

Some Web Components Chip features depend on the package version that your application uses.

- The `outlined` property is available in igniteui-webcomponents 7.3.0 and later.
- The `action` and `remove` parts are available in 7.3.1 and later. In earlier versions, the `base` part is the selection button and the remove icon renders inside it.
- The `start` and `end` slots are documented in 7.3.1 and later. Earlier versions render them but don't document them.

## Usage

Add a label to the Web Components Chip, then add icons, a type, a size, and selection or removal as your layout needs.

### Layout

The Web Components Chip supports content templating around its label. Place content in the `prefix` and `suffix` slots to show it before and after the label, such as text or an [Icon](../layouts/icon.md). Icons in the chip follow its size, so they also come in three sizes: large, medium, and small.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

.chip-layout {
    --ig-size: var(--ig-size-medium);

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem 3.75rem;
}

.chip-layout-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

/* The chip host is a block box, so its line box would add height around the chip. */
.chip-layout-item igc-chip {
    display: flex;
}

.chip-layout-item span {
    color: var(--ig-gray-600);
    font-family: aktiv-grotesk, sans-serif;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.3px;
}
```

Place the label in the default slot. The `start` slot renders before the prefix content, and the `end` slot renders before the suffix content. Use the `select` and `remove` slots to replace the default select and remove icons.

```html
<igc-chip selectable removable>
  <igc-icon slot="select" name="check"></igc-icon>
  <igc-icon slot="prefix" name="person"></igc-icon>
  Ana Zane
  <igc-icon slot="suffix" name="mail"></igc-icon>
  <igc-icon slot="remove" name="close"></igc-icon>
</igc-chip>
```

Custom content in the `remove` slot replaces the default remove icon, including its focus and accessible label. Make the replacement focusable and give it an accessible name.

### Types

The Web Components Chip provides two types: Default and Primary.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

.chip-types {
    --ig-size: var(--ig-size-medium);

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem 3.75rem;
}

.chip-types-item {
    display: flex;
    align-items: center;
    gap: 1.875rem;
}

/* The chip host is a block box, so its line box would add height around the chip. */
.chip-types-item igc-chip {
    display: flex;
}

.chip-types-item span {
    color: var(--ig-gray-600);
    font-family: aktiv-grotesk, sans-serif;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.3px;
}
```

Leave [`variant`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent&member=variant) unset for the default type, or set it to `primary` for the primary type. The variant also accepts `info`, `success`, `warning`, and `danger` for status colors.

```html
<igc-chip>Default</igc-chip>
<igc-chip variant="primary">Primary</igc-chip>
```

### Outlined

Set [`outlined`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent&member=outlined) to render the chip with a border and the outlined background. You can combine it with any variant.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

.chip-outlined {
    --ig-size: var(--ig-size-medium);

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem 2.5rem;
}

.chip-outlined-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

/* The chip host is a block box, so its line box would add height around the chip. */
.chip-outlined-item igc-chip {
    display: flex;
}

.chip-outlined-item span {
    color: var(--ig-gray-600);
    font-family: aktiv-grotesk, sans-serif;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.3px;
}
```

```html
<igc-chip outlined variant="info">Draft</igc-chip>
```

### Size

The Web Components Chip comes in three sizes:

- Large: suitable for interactive scenarios, such as action triggers.
- Medium: suitable for short areas, such as the recipient field of an email composer.
- Small: suitable for data-dense scenarios, such as the values in a grid cell.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

.chip-size {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem 3.75rem;
}

.chip-size-item {
    display: flex;
    align-items: center;
    gap: 1.875rem;
}

/* The chip host is a block box, so its line box would add height around the chip. */
.chip-size-item igc-chip {
    display: flex;
}

.chip-size-item span {
    color: var(--ig-gray-600);
    font-family: aktiv-grotesk, sans-serif;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.3px;
}

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

Set `--ig-size` to `var(--ig-size-small)`, `var(--ig-size-medium)`, or `var(--ig-size-large)` to change the chip size. Set it on a chip, or on a container to size all chips inside it.

```css
.filter-chips {
  --ig-size: var(--ig-size-small);
}
```

### Interaction State

The Web Components Chip can be enabled or disabled.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

.chip-states {
    --ig-size: var(--ig-size-medium);

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem 3.75rem;
}

.chip-states-item {
    display: flex;
    align-items: center;
    gap: 1.875rem;
}

/* The chip host is a block box, so its line box would add height around the chip. */
.chip-states-item igc-chip {
    display: flex;
}

.chip-states-item span {
    color: var(--ig-gray-600);
    font-family: aktiv-grotesk, sans-serif;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.3px;
}
```

Set [`disabled`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent&member=disabled) to prevent interaction. A disabled chip can't receive focus or be selected, and it doesn't render the remove icon, even when `removable` is set.

```html
<igc-chip disabled>Archived</igc-chip>
```

### State

When users interact with the Web Components Chip, it changes from its default idle state to hover, focused, and selected.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

.chip-state {
    --ig-size: var(--ig-size-medium);

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem 2.5rem;
}

.chip-state-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

/* The chip host is a block box, so its line box would add height around the chip. */
.chip-state-item igc-chip {
    display: flex;
}

.chip-state-item span {
    color: var(--ig-gray-600);
    font-family: aktiv-grotesk, sans-serif;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.3px;
}

/* Hover and focus only happen on interaction, so these chips show the colors the theme uses for them. */
igc-chip.state-hover::part(base) {
    background: var(--hover-background);
    color: var(--hover-text-color);
}

/* The focus ring color is transparent in themes that show focus through the background alone. */
igc-chip.state-focused::part(base) {
    background: var(--focus-background);
    color: var(--focus-text-color);
    outline: 0.25rem solid var(--focus-shadow-color);
}
```

The selected state needs selection to be enabled. Set [`selectable`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent&member=selectable) to let users toggle the chip by clicking it or pressing <kbd>Space</kbd> or <kbd>Enter</kbd>. Each toggle updates [`selected`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent&member=selected) and emits a selection event with the new state. Set `selected` to define the initial state.

The select icon and the pressed state appear only when `selectable` is set.

```html
<igc-chip selectable selected>Bold</igc-chip>
```

```ts
const chip = document.querySelector('igc-chip');

chip.addEventListener('igcSelect', (event) => {
  console.log(event.detail); // the new selected state
});
```

### Remove Chip

A removable Web Components Chip shows a remove icon at its end that users activate to request the chip's removal.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.chip-remove {
    --ig-size: var(--ig-size-medium);

    display: flex;
    align-items: center;
    justify-content: center;
}

/* A row as tall as the chip. The restore button can be taller in some themes, so it
   overflows the row evenly instead of resizing the sample when it replaces the chip. */
.chip-remove-slot {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.5rem;
}

/* The chip host is a block box, so its line box would add height around the chip. */
.chip-remove-slot igc-chip {
    display: flex;
}

.restore-button {
    --ig-size: var(--ig-size-small);
}
```

Set [`removable`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent&member=removable) to show the icon. Activating the icon emits a remove event, but the chip stays on the page. Remove the chip, or the item it represents, in the event handler.

```html
<igc-chip removable>Angular</igc-chip>
```

```ts
document.querySelectorAll('igc-chip[removable]').forEach((chip) => {
  chip.addEventListener('igcRemove', () => chip.remove());
});
```

### Chips Area

To organize a collection of chips, place them in a container that lays them out with a gap, such as a wrapping flex container.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.chips-area-sample {
    display: flex;
    align-items: center;
    justify-content: center;
}

.chips-area {
    --ig-size: var(--ig-size-large);

    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0.25rem;
}

/* The chip host is a block box, so its line box would add height around the chip. */
.chips-area igc-chip {
    display: flex;
}
```

The Web Components Chip has no separate chips area component, so the container's CSS sets the layout.

```css
.chips-area {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
```

### Localization

Set `locale` to show the built-in strings in a registered language, or set `resourceStrings` to provide your own. The chip uses these strings for the accessible label of the default remove icon. See [Localization](../localization.md) for registering languages.

```html
<igc-chip removable locale="de">Design</igc-chip>
```

```ts
const chip = document.querySelector('igc-chip');
chip.resourceStrings = { chip_remove: 'Remove tag' };
```

### Do/Don't

When using a Chip, the obround will automatically size itself to fit the content and you only need to adjust the size of the instance accordingly. If the Chip is used as an action trigger for related content, avoid using it in scenarios where there is only one available action, or for configurations presenting only one selectable option.

<style>{`
  .chip-guidance {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    margin-bottom: 24px;
  }

  .chip-guidance span {
    display: block;
  }

  .chip-guidance__image {
    display: block;
    width: 100%;
    height: auto;
    margin: 0 0 24px;
    border: 1px solid #D2DBE8;
  }

  .chip-guidance__label {
    margin-bottom: 12px;
    font-weight: 600;
  }

  .chip-guidance__label--do {
    color: light-dark(var(--ig-success-900), var(--ig-success-100));
  }

  .chip-guidance__label--dont {
    color: light-dark(var(--ig-error-700), var(--ig-error-300));
  }

  @media (max-width: 768px) {
    .chip-guidance {
      grid-template-columns: 1fr;
    }
  }
`}</style>

<div class="chip-guidance ig-typography__body-2">
  <div>
    
    <span class="chip-guidance__label chip-guidance__label--do">Do</span>
    <span>Use chips for grouped actions or a small set of related options.</span>
  </div>
  <div>
    
    <span class="chip-guidance__label chip-guidance__label--dont">Don't</span>
    <span>Avoid using a chip for single actions or single choices.</span>
  </div>
</div>

## Properties

The Web Components Chip exposes properties for selection, removal, state, and appearance.

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| [`disabled`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent&member=disabled) | `boolean` | `false` | Disables the chip and hides the remove icon. |
| [`outlined`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent&member=outlined) | `boolean` | `false` | Renders the chip with the outlined style. |
| [`removable`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent&member=removable) | `boolean` | `false` | Shows the remove icon. |
| [`selectable`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent&member=selectable) | `boolean` | `false` | Lets users toggle the selected state. |
| [`selected`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent&member=selected) | `boolean` | `false` | Sets the selected state. |
| [`variant`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent&member=variant) | `"primary" \| "info" \| "success" \| "warning" \| "danger"` | n/a | Sets the predefined color variant. |
| `locale` | `string` | n/a | Sets the language of the built-in strings. |
| `resourceStrings` | `IChipResourceStrings` | n/a | Sets custom strings for the built-in labels. |

## Events

The Web Components Chip emits events when users select or remove it.

| Name | Description |
| -- | -- |
| `igcSelect` | Emitted when the user toggles a selectable chip. `event.detail` is the new selected state. |
| `igcRemove` | Emitted when the user activates the remove icon. |

## Styling

Style the Web Components Chip with its CSS variables for token-level changes, and with its CSS parts when you need to target a specific element.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.chip-styling {
    --ig-size: var(--ig-size-medium);

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem 1.875rem;
}

/* The chip host is a block box, so its line box would add height around the chip. */
.chip-styling igc-chip {
    display: flex;
}

/* Default chip */
.tag-chip {
    --ig-chip-background: var(--ig-error-50);
    --ig-chip-text-color: var(--ig-error-50-contrast);
    --ig-chip-hover-background: var(--ig-error-100);
    --ig-chip-hover-text-color: var(--ig-error-100-contrast);
    --ig-chip-focus-background: var(--ig-error-200);
    --ig-chip-focus-text-color: var(--ig-error-200-contrast);
    --ig-chip-remove-icon-color: var(--ig-error-500);
    --ig-chip-remove-icon-color-focus: var(--ig-error-500);
}

/* Selected chip */
.filter-chip {
    --ig-chip-selected-background: var(--ig-primary-50);
    --ig-chip-selected-text-color: var(--ig-primary-50-contrast);
    --ig-chip-hover-selected-background: var(--ig-primary-100);
    --ig-chip-hover-selected-text-color: var(--ig-primary-100-contrast);
    --ig-chip-focus-selected-background: var(--ig-primary-200);
    --ig-chip-focus-selected-text-color: var(--ig-primary-200-contrast);
}

/* The prefix part holds the select icon. */
.filter-chip::part(prefix) {
    color: var(--ig-primary-500);
}

/* Outlined chips */
.product-chip {
    --ig-chip-outlined-background: var(--ig-surface-500);
    --ig-chip-outlined-text-color: var(--ig-gray-700);
    --ig-chip-border-color: var(--ig-gray-700);
    --ig-chip-hover-outlined-text-color: var(--ig-gray-800);
    --ig-chip-hover-border-color: var(--ig-gray-800);
    --ig-chip-focus-outlined-text-color: var(--ig-gray-900);
    --ig-chip-focus-border-color: var(--ig-gray-900);
}

.contact-chip {
    --ig-chip-outlined-background: var(--ig-secondary-100);
    --ig-chip-outlined-text-color: var(--ig-secondary-100-contrast);
    --ig-chip-border-color: var(--ig-secondary-500);
    --ig-chip-hover-outlined-background: var(--ig-secondary-200);
    --ig-chip-hover-outlined-text-color: var(--ig-secondary-200-contrast);
    --ig-chip-hover-border-color: var(--ig-secondary-500);
    --ig-chip-focus-outlined-background: var(--ig-secondary-300);
    --ig-chip-focus-outlined-text-color: var(--ig-secondary-300-contrast);
    --ig-chip-focus-border-color: var(--ig-secondary-500);
}

.contact-chip::part(prefix) {
    color: var(--ig-secondary-800);
}
```

| Variable | What it changes |
| -- | -- |
| `--ig-chip-background` | Background of the default (not outlined) chip. |
| `--ig-chip-text-color` | Text color of the default chip. |
| `--ig-chip-outlined-background` | Background of the outlined chip. |
| `--ig-chip-outlined-text-color` | Text color of the outlined chip. |
| `--ig-chip-border-color` | Border color of the outlined chip. |
| `--ig-chip-border-radius` | Corner radius of the chip. |
| `--ig-chip-hover-background` | Background of the default chip on hover. |
| `--ig-chip-focus-background` | Background of the default chip on focus. |
| `--ig-chip-focus-shadow-color` | Focus shadow color in the Bootstrap and Indigo themes. |
| `--ig-chip-selected-background` | Background of a selected chip. |
| `--ig-chip-selected-text-color` | Text color of a selected chip. |
| `--ig-chip-disabled-background` | Background of a disabled chip. |
| `--ig-chip-disabled-text-color` | Text color of a disabled chip. |
| `--ig-chip-remove-icon-color` | Color of the remove icon. |
| `--ig-chip-remove-icon-color-focus` | Color of the remove icon on focus. |
| `--ig-chip-size` | Height of the chip. |
| `--ig-size` | Shared component size token used to derive the chip size. |

| CSS Part | Description |
| -- | -- |
| `base` | The chip wrapper. |
| `action` | The selection control that wraps the prefix, content, and suffix. |
| `prefix` | The container for the select icon and the `start` and `prefix` content. |
| `content` | The wrapper around the default slot. |
| `suffix` | The container for the `end` and `suffix` content. |
| `remove` | The container of the remove control. |

### Sass Theming

Use the `chip-theme` function when your application customizes Ignite UI themes through Sass. Set `$background`, or `$outlined-background` for outlined chips, and the theme derives the text, hover, focus, and selected colors from it. Override any other parameter when you need a specific value.

```scss
@use "igniteui-theming/sass/themes" as *;

$custom-chip-theme: chip-theme(
  $background: #011627,
  $remove-icon-color: #fecc47
);

:root {
  @include tokens($custom-chip-theme);
}
```

### CSS Variables

Set the chip CSS variables directly when you need local styling without a Sass build step. Set them on a chip, or on a container to style all chips inside it.

```css
.filter-chips {
  --ig-chip-background: var(--ig-primary-500);
  --ig-chip-text-color: var(--ig-primary-500-contrast);
  --ig-chip-remove-icon-color: var(--ig-primary-500-contrast);
}
```

To style a single element of the chip, target its CSS part.

```css
igc-chip::part(suffix) {
  color: var(--ig-gray-400);
}
```

### Styling with Tailwind

You can style the Web Components Chip with Tailwind utility classes, and set its CSS variables through arbitrary properties such as `[--ig-chip-background:var(--ig-primary-600)]`. Make sure to set up Tailwind first, as described in [Tailwind](../themes/tailwind.md).

```typescript
// Material icons used by the sample, registered in the "material" collection.
export const icons: Record<string, string> = {
    self_improvement: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="6" r="2"/><path d="M21,16v-2c-2.24,0-4.16-0.96-5.6-2.68l-1.34-1.6C13.68,9.26,13.12,9,12.53,9h-1.05c-0.59,0-1.15,0.26-1.53,0.72l-1.34,1.6 C7.16,13.04,5.24,14,3,14v2c2.77,0,5.19-1.17,7-3.25V15l-3.88,1.55C5.45,16.82,5,17.48,5,18.21C5,19.2,5.8,20,6.79,20H9v-0.5 c0-1.38,1.12-2.5,2.5-2.5h3c0.28,0,0.5,0.22,0.5,0.5S14.78,18,14.5,18h-3c-0.83,0-1.5,0.67-1.5,1.5V20h7.21 C18.2,20,19,19.2,19,18.21c0-0.73-0.45-1.39-1.12-1.66L14,15v-2.25C15.81,14.83,18.23,16,21,16z"/></svg>',
    pool: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64-1.11 0-1.73-.37-2.18-.64-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36v2zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64 1.11 0 1.73.37 2.18.64.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36z"/><circle cx="16.5" cy="5.5" r="2.5"/></svg>',
    hiking: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.5,5.5c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S12.4,5.5,13.5,5.5z M17.5,10.78c-1.23-0.37-2.22-1.17-2.8-2.18l-1-1.6 c-0.41-0.65-1.11-1-1.84-1c-0.78,0-1.59,0.5-1.78,1.44S7,23,7,23h2.1l1.8-8l2.1,2v6h2v-7.5l-2.1-2l0.6-3c1,1.15,2.41,2.01,4,2.34V23 H19V9h-1.5L17.5,10.78z M7.43,13.13l-2.12-0.41c-0.54-0.11-0.9-0.63-0.79-1.17l0.76-3.93c0.21-1.08,1.26-1.79,2.34-1.58l1.16,0.23 L7.43,13.13z"/></svg>',
    fitness_center: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/></svg>',
    directions_bike: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/></svg>',
    sports_tennis: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.52,2.49c-2.34-2.34-6.62-1.87-9.55,1.06c-1.6,1.6-2.52,3.87-2.54,5.46c-0.02,1.58,0.26,3.89-1.35,5.5l-4.24,4.24 l1.42,1.42l4.24-4.24c1.61-1.61,3.92-1.33,5.5-1.35s3.86-0.94,5.46-2.54C21.38,9.11,21.86,4.83,19.52,2.49z M10.32,11.68 c-1.53-1.53-1.05-4.61,1.06-6.72s5.18-2.59,6.72-1.06c1.53,1.53,1.05,4.61-1.06,6.72S11.86,13.21,10.32,11.68z"/><path d="M18,17c0.53,0,1.04,0.21,1.41,0.59c0.78,0.78,0.78,2.05,0,2.83C19.04,20.79,18.53,21,18,21s-1.04-0.21-1.41-0.59 c-0.78-0.78-0.78-2.05,0-2.83C16.96,17.21,17.47,17,18,17 M18,15c-1.02,0-2.05,0.39-2.83,1.17c-1.56,1.56-1.56,4.09,0,5.66 C15.95,22.61,16.98,23,18,23s2.05-0.39,2.83-1.17c1.56-1.56,1.56-4.09,0-5.66C20.05,15.39,19.02,15,18,15L18,15z"/></svg>',
    sports_soccer: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M13,5.3l1.35-0.95 c1.82,0.56,3.37,1.76,4.38,3.34l-0.39,1.34l-1.35,0.46L13,6.7V5.3z M9.65,4.35L11,5.3v1.4L7.01,9.49L5.66,9.03L5.27,7.69 C6.28,6.12,7.83,4.92,9.65,4.35z M7.08,17.11l-1.14,0.1C4.73,15.81,4,13.99,4,12c0-0.12,0.01-0.23,0.02-0.35l1-0.73L6.4,11.4 l1.46,4.34L7.08,17.11z M14.5,19.59C13.71,19.85,12.87,20,12,20s-1.71-0.15-2.5-0.41l-0.69-1.49L9.45,17h5.11l0.64,1.11 L14.5,19.59z M14.27,15H9.73l-1.35-4.02L12,8.44l3.63,2.54L14.27,15z M18.06,17.21l-1.14-0.1l-0.79-1.37l1.46-4.34l1.39-0.47 l1,0.73C19.99,11.77,20,11.88,20,12C20,13.99,19.27,15.81,18.06,17.21z"/></svg>',
    sports_baseball: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M5.61,16.78C4.6,15.45,4,13.8,4,12 s0.6-3.45,1.61-4.78C7.06,8.31,8,10.05,8,12S7.06,15.69,5.61,16.78z M12,20c-1.89,0-3.63-0.66-5-1.76c1.83-1.47,3-3.71,3-6.24 S8.83,7.23,7,5.76C8.37,4.66,10.11,4,12,4s3.63,0.66,5,1.76c-1.83,1.47-3,3.71-3,6.24s1.17,4.77,3,6.24C15.63,19.34,13.89,20,12,20 z M18.39,16.78C16.94,15.69,16,13.95,16,12s0.94-3.69,2.39-4.78C19.4,8.55,20,10.2,20,12S19.4,15.45,18.39,16.78z"/></svg>',
    close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
    add: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>',
};
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@layer theme, base, components, utilities;
/* Aktiv Grotesk sits before the Tailwind imports, where an @import is still valid once they are inlined. */
@import url("https://use.typekit.net/bng2zgw.css");
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@source "./index.ts";
@source "../index.html";

@theme {
    /* The design's own palette. It lives here instead of coming from the theme
       palette, so the sample keeps its colors in every theme. */
    --color-activity-primary: #006ae6;
    --color-activity-primary-strong: #0055b8;
    --color-activity-tint: #e6f2ff;
    --color-activity-tint-strong: #cce4ff;
    --color-activity-surface: #e5ebf3;
    --color-activity-ink: #00142b;
}
```

## Accessibility

The Web Components Chip supports keyboard operation and exposes its state to assistive technology.

### Keyboard Interaction

Keyboard users reach each chip with <kbd>Tab</kbd>, followed by its remove control when the chip is removable. Disabled chips are skipped.

| Key | Action |
| -- | -- |
| <kbd>Space</kbd> / <kbd>Enter</kbd> | On the selection button, toggles `selected` when `selectable` is set and emits the select event. On the remove control, emits the remove event. |

### Screen Readers / ARIA

The Web Components Chip exposes its state through native semantics and ARIA attributes, and takes its accessible name from its content.

- The selection control is a native `button`. When `selectable` is set, `aria-pressed` reflects the `selected` state.
- The default select icon is hidden from assistive technology, because `aria-pressed` already conveys the selected state.
- The default remove icon is a separate control with `role="button"`, `tabindex="0"`, and an `aria-label` that defaults to "remove chip".
- A disabled chip disables its native button, so assistive technology reports the chip as unavailable.

You can change the labels of the default icons, as shown in [Localization](#localization).

### Accessibility Compliance

Infragistics documents Ignite UI for Web Components accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| -- | -- |
| [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color) | A selectable chip shows the select icon while it is selected, in addition to its selected colors. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The selection button and the remove control both work with <kbd>Space</kbd> and <kbd>Enter</kbd>. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap) | <kbd>Tab</kbd> and <kbd>Shift</kbd> + <kbd>Tab</kbd> move focus out of the chip, which never holds focus. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order) | Focus moves from the selection button to the remove control in document order. |
| [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible) | The focused chip shows a focus background, plus a focus shadow in the Bootstrap and Indigo themes, and the focused remove icon changes color. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The selection control is a native button that exposes its pressed state, and the remove control exposes a button role and a label. |

Your responsibilities:

- Give every chip a text label that identifies the item it represents.
- Move focus to a logical place, such as the next chip, after you remove a chip in the remove event handler.
- Keep sufficient contrast between the chip background and its text and icons when you override the theme colors.
- Keep a visible focus indicator when you restyle the chip.
- Keep chips and their remove controls large enough to tap when you use the small size or a custom `--ig-chip-size`.

- Keep custom `remove` slot content focusable and labeled, as described in [Layout](#layout).

Known exceptions:

- In releases based on `igniteui-webcomponents` 7.4.1 and earlier, an `aria-label` set on the chip element doesn't reach the selection button, so it doesn't change the chip's accessible name. Name the chip through its content instead.

## Troubleshooting

Use this section when a chip doesn't behave or look as expected after a change or an upgrade.

### Why does the chip stay on the page after I click the remove icon?

The remove event only notifies your application. Remove the chip in the event handler, as shown in [Remove Chip](#remove-chip).

### Why did my `::part(base)` styles change after an upgrade?

Starting with `igniteui-webcomponents` 7.3.1, the `base` part is the chip wrapper, the selection button is the `action` part, and the remove control is in the `remove` part. Move styles that targeted the button to `::part(action)`.

### Why doesn't my focus outline variable apply anymore?

The `--ig-chip-focus-outline-color` and `--ig-chip-focus-selected-outline-color` variables were replaced by `--ig-chip-focus-shadow-color` and `--ig-chip-focus-selected-shadow-color` in `igniteui-webcomponents` 7.3.0. Rename the variables in your styles.

## API References

Use these API references for the complete chip API surface.

[`IgcChip`](mcp:get_api_reference?platform=webcomponents&component=IgcChipComponent)
[`IgcIcon`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent)

## Dependencies

The Web Components Chip renders its default select and remove icons with the [`IgcIcon`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent) component, which is included with the chip.

Register any custom icons that you place in the chip slots.

## Additional Resources

Use these resources for support and related Ignite UI for Web Components documentation.

- [Icon](../layouts/icon.md)
- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

## Related Components

Use these related components when a chip isn't the best match for the interaction.

- [Button](./button.md) - A control that runs a command, such as submitting a form or opening a dialog.
- [Checkbox](./checkbox.md) - A form control for an on/off choice or a set of independent choices.
- [Badge](./badge.md) - A small, non-interactive indicator for a status, count, or notification.

## FAQ

  **Q: When should I use a Chip instead of a Button?**

    A Ignite UI for Web Components Chip represents an item, such as a tag, filter, or recipient, that users can select or remove. A Button runs a single command, so choose it when users trigger an action rather than pick or dismiss an item.
  

  **Q: How do I allow only one selected chip at a time?**

    Handle the selection event of each Ignite UI for Web Components Chip in the group. When a chip becomes selected, set `selected` to `false` on the other chips.
  

  **Q: Can I replace the Chip's remove icon?**

    Yes. Put your own content in the `remove` slot of the Ignite UI for Web Components Chip, and keep that content focusable and labeled, because it replaces the built-in control.
  

  **Q: Can users reorder chips?**

    Not directly. The Ignite UI for Web Components Chip has no drag or reorder support, so change the order of the chips in your data or markup.
  

  **Q: How do I change the size of the Chip?**

    Assign one of the shared size tokens, `var(--ig-size-small)`, `var(--ig-size-medium)`, or `var(--ig-size-large)`, to the `--ig-size` CSS variable of the Ignite UI for Web Components Chip.
  


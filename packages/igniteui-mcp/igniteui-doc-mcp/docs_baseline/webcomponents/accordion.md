---
title: "Web Components Accordion Component | Layouts | Infragistics"
description: "Web Components Accordion is a layout component for organizing expandable and collapsible content panels in a vertical container."
keywords: "Web Components Accordion, accordion component, expandable panels, Ignite UI for Web Components, Infragistics"
license: MIT
last_updated: "2026-07-30"
mentionedTypes: ["Accordion", "ExpansionPanel"]
namespace: Infragistics.Controls
relatedComponents: ["ExpansionPanel"]
llms:
  description: "The Ignite UI for Web Components Accordion helps developers group related content into expandable and collapsible panels inside a vertical layout."
_tocName: Accordion
---
# Accordion Component

The Ignite UI for Web Components Accordion is a layout component for organizing expandable content panels in a single vertical container.

## Live Demo

```css
.accordion-sample {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

.accordion-content {
    width: min(720px, 100%);
    margin: 0 auto;
    padding: 24px;
    box-sizing: border-box;
}

.accordion-toolbar {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 12px;
}

.accordion-sample igc-accordion {
    display: block;
    border: 1px solid var(--ig-gray-300);
    border-radius: 4px;
}
```

## Anatomy

The accordion structure consists of an accordion container with one or more expansion panel children.

**Web Components Accordion anatomy anatomy:** The accordion anatomy labels the accordion host and child expansion panel structure.

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Header:</strong> displays the section title and description and can be clicked to reveal or hide the panel's content<br />
<strong>2. Icon:</strong> indicates if the panel is open or closed. Could be placed on the left or on the right side of the header<br />
<strong>3. Panel:</strong> the section of content linked to an accordion header</span>

<style>{`
  .accordion-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .accordion-anatomy .igd-anatomy__image {
    max-width: 640px;
  }
`}</style>

```text
igc-accordion                    // host - manages a set of expansion panels
└─ igc-expansion-panel            // child panel
   ├─ [slot="title"]              // panel header title
   ├─ [slot="subtitle"]           // optional header subtitle
   ├─ [slot="indicator"]          // custom collapsed/default indicator
   ├─ [slot="indicator-expanded"] // optional custom expanded-state indicator
   └─ default slot                // expandable panel content
```

## Getting Started

Use the accordion with the Ignite UI for Web Components version installed in your application. Complete the shared [Getting Started](../general-getting-started.md) topic before adding framework-specific imports or registration.

Register the accordion and expansion panel components before you use them.

```ts
import {
  defineComponents,
  IgcAccordionComponent,
  IgcExpansionPanelComponent,
} from 'igniteui-webcomponents';

defineComponents(IgcAccordionComponent, IgcExpansionPanelComponent);
```

## Usage

Build the accordion by placing one or more [`IgcExpansionPanel`](mcp:get_api_reference?platform=webcomponents&component=IgcExpansionPanelComponent) components inside an [`IgcAccordion`](mcp:get_api_reference?platform=webcomponents&component=IgcAccordionComponent) container.

### Single Expansion

Set [`SingleExpand`](mcp:get_api_reference?platform=webcomponents&component=IgcAccordionComponent&member=singleExpand) to switch between one-open-panel behavior and multiple-open-panel behavior.

```html
<igc-accordion single-expand="true">
  <igc-expansion-panel>
    <span slot="title">Title Panel 1</span>
    <p>Content Panel 1</p>
  </igc-expansion-panel>
  <igc-expansion-panel>
    <span slot="title">Title Panel 2</span>
    <p>Content Panel 2</p>
  </igc-expansion-panel>
</igc-accordion>
```

### Programmatic Expansion

Use [`HideAll`](mcp:get_api_reference?platform=webcomponents&component=IgcAccordionComponent&member=hideAll) and [`ShowAll`](mcp:get_api_reference?platform=webcomponents&component=IgcAccordionComponent&member=showAll) to collapse or expand all available panels programmatically.

**Note:** 
Calling [`ShowAll`](mcp:get_api_reference?platform=webcomponents&component=IgcAccordionComponent&member=showAll) expands all panels, even when [`SingleExpand`](mcp:get_api_reference?platform=webcomponents&component=IgcAccordionComponent&member=singleExpand) is `true`.


```html
<button id="show-all">Show All</button>
<button id="hide-all">Hide All</button>

<igc-accordion id="accordion">
  <igc-expansion-panel>
    <span slot="title">Title Panel 1</span>
    <p>Content Panel 1</p>
  </igc-expansion-panel>
  <igc-expansion-panel>
    <span slot="title">Title Panel 2</span>
    <p>Content Panel 2</p>
  </igc-expansion-panel>
</igc-accordion>
```

```ts
const accordion = document.getElementById('accordion') as IgcAccordionComponent;

document.getElementById('show-all').addEventListener('click', () => accordion.showAll());
document.getElementById('hide-all').addEventListener('click', () => accordion.hideAll());
```

```css
.accordion-sample {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

.accordion-content {
    width: min(720px, 100%);
    margin: 0 auto;
    padding: 24px;
    box-sizing: border-box;
}

.accordion-toolbar {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-bottom: 12px;
}

.action-button {
    min-width: 96px;
}

.accordion-sample igc-accordion {
    display: block;
    border: 1px solid var(--ig-gray-300);
    border-radius: 4px;
}
```

### Customize Panel Content

Customize the panel headers and content through the underlying [`IgcExpansionPanel`](mcp:get_api_reference?platform=webcomponents&component=IgcExpansionPanelComponent) slots.

```html
<igc-accordion>
  <igc-expansion-panel open>
    <span slot="title">Billing</span>
    <span slot="subtitle">Payment and invoice settings</span>
    <p>Update payment methods, billing contacts, and invoice delivery options.</p>
  </igc-expansion-panel>
</igc-accordion>
```

```css
.accordion-sample {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

.accordion-content {
    width: min(760px, 100%);
    margin: 0 auto;
    padding: 24px;
    box-sizing: border-box;
}

.accordion-sample igc-accordion {
    display: block;
    border: 1px solid var(--ig-gray-300);
    border-radius: 4px;
}

.panel-description {
    margin: 0 0 16px;
    color: var(--ig-gray-700);
}

.categories-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px 24px;
    max-width: 520px;
}

.category-option,
.rating-option {
    margin: 4px 0;
}

.range-summary {
    display: flex;
    justify-content: space-between;
    max-width: 560px;
    margin-bottom: 4px;
    font-weight: 600;
}

.cost-slider {
    max-width: 560px;
    margin: 8px 0 0;
}

.rating-options {
    display: grid;
    gap: 8px;
    max-width: 360px;
}

.rating-control {
    flex-direction: row;
}

.time-input {
    max-width: 260px;
}

.size-small {
    --ig-size: var(--ig-size-small);
}
```

### Nest Accordions

Nest an accordion inside an expansion panel when you need a second level of grouped disclosure.

```html
<igc-accordion>
  <igc-expansion-panel open>
    <span slot="title">Workspace Settings</span>
    <igc-accordion>
      <igc-expansion-panel>
        <span slot="title">Notifications</span>
        <p>Configure email and product notification preferences.</p>
      </igc-expansion-panel>
    </igc-accordion>
  </igc-expansion-panel>
</igc-accordion>
```

```css
.accordion-sample {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

.accordion-content {
    width: min(760px, 100%);
    margin: 0 auto;
    padding: 24px;
    box-sizing: border-box;
}

.accordion-toolbar {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 12px;
}

.accordion-sample igc-accordion {
    display: block;
    border: 1px solid var(--ig-gray-300);
    border-radius: 4px;
}
```

### Do/Don't

**When to use:** Use the accordion when you need to organize secondary content, FAQ entries, settings groups, or other related vertical sections that users expand on demand. Keep panel titles short and descriptive, and enable single-expansion behavior when users should focus on one section at a time.

**When not to use:** Use the [Expansion Panel](./expansion-panel.md) when you need a single standalone expandable section instead of a coordinated container that manages multiple panels together. Do not use an accordion to hide essential primary content or to group unrelated sections.

<div class="table-responsive">
  <table class="table" style="width: 100%; table-layout: fixed; border-collapse: collapse; border: 1px solid #d3d3d3; margin-bottom: 24px;">
    <thead>
      <tr>
        <th style="width: 50%; background-color: #d3d3d3; text-align: left; padding: 16px 20px; font-size: 18px; font-weight: 500;">Do</th>
        <th style="width: 50%; background-color: #d3d3d3; text-align: left; padding: 16px 20px; font-size: 18px; font-weight: 500;">Don't</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
        <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
      </tr>
    </tbody>
  </table>
</div>

## Properties

The accordion exposes container-level controls; panel-specific state is configured on each [`IgcExpansionPanel`](mcp:get_api_reference?platform=webcomponents&component=IgcExpansionPanelComponent).

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| [`SingleExpand`](mcp:get_api_reference?platform=webcomponents&component=IgcAccordionComponent&member=singleExpand) | `boolean` | `false` | Controls whether one or multiple panels can stay expanded at the same time. |
| [`Panels`](mcp:get_api_reference?platform=webcomponents&component=IgcAccordionComponent&member=panels) | [`ExpansionPanel[]`](mcp:get_api_reference?platform=webcomponents&component=IgcExpansionPanelComponent) | n/a | Returns the collection of child expansion panels in the accordion. |

## Methods

Use the accordion methods when you need to change panel state from your code.

| Name | Description |
| -- | -- |
| [`ShowAll`](mcp:get_api_reference?platform=webcomponents&component=IgcAccordionComponent&member=showAll) | Expands all available panels. |
| [`HideAll`](mcp:get_api_reference?platform=webcomponents&component=IgcAccordionComponent&member=hideAll) | Collapses the available panels. |

## Styling

Style the Web Components accordion with CSS parts and Ignite UI theme variables.

```css
.accordion-sample {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

.accordion-content {
    width: min(720px, 100%);
    margin: 0 auto;
    padding: 24px;
    box-sizing: border-box;
}

.accordion-sample igc-accordion {
    display: block;
    border: 1px solid var(--ig-gray-300);
    border-radius: 4px;
}

.accordion-sample igc-expansion-panel {
    background-color: var(--ig-gray-50);
    color: var(--ig-gray-900);
    border-radius: 4px;
}

.accordion-sample igc-expansion-panel::part(header) {
    background-color: var(--ig-gray-100);
}

.accordion-sample igc-expansion-panel[open]::part(header) {
    background-color: var(--ig-primary-50);
}

.accordion-sample igc-expansion-panel::part(indicator) {
    color: var(--ig-primary-500);
}

.accordion-sample igc-expansion-panel::part(title) {
    color: var(--ig-gray-900);
    font-weight: 600;
}

.accordion-sample igc-expansion-panel[open]::part(title),
.accordion-sample igc-expansion-panel[open]::part(subtitle) {
    color: var(--ig-primary-700);
}

.accordion-sample igc-expansion-panel::part(content) {
    color: var(--ig-gray-700);
}
```

Style the accordion by targeting the parts exposed by its child [`IgcExpansionPanel`](mcp:get_api_reference?platform=webcomponents&component=IgcExpansionPanelComponent) components.

### Styling Variables

Use Ignite UI for Web Components theme CSS variables as values when styling the expansion panel parts.

| Variable | What it changes |
| -- | -- |
| `--ig-secondary-900` | Supplies the dark background color used by the panel and header in the example below. |
| `--ig-secondary-900-contrast` | Supplies a readable foreground color for content on `--ig-secondary-900`. |
| `--ig-warn-500` | Supplies the accent color used by the indicator, title, and subtitle in the example below. |

```css
igc-expansion-panel {
  background-color: var(--ig-secondary-900);
  color: var(--ig-secondary-900-contrast);
}

igc-expansion-panel::part(header) {
  background-color: var(--ig-secondary-900);
}

igc-expansion-panel::part(indicator),
igc-expansion-panel::part(title),
igc-expansion-panel::part(subtitle) {
  color: var(--ig-warn-500);
}
```

### CSS Parts

| Part | What it changes |
| -- | -- |
| `header` | The container for the expansion indicator, title, and subtitle. |
| `title` | The title container. |
| `subtitle` | The subtitle container. |
| `indicator` | The indicator container. |
| `content` | The expansion panel content wrapper. |

### Styling with Tailwind

Use Tailwind utility classes with CSS part selectors when you want to keep the styling close to the component markup.

```css
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@source "./index.html";

.accordion-tailwind-sample {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
```

## Accessibility

The accordion supports keyboard interaction for moving focus between panels and changing their expanded state.

### Keyboard Interaction

Use the keyboard shortcuts below to move through the accordion and open or close panels.

| Key | Action |
| -- | -- |
| <kbd>Down Arrow</kbd> | Moves focus to the panel below. |
| <kbd>Up Arrow</kbd> | Moves focus to the panel above. |
| <kbd>Alt</kbd> + <kbd>Down Arrow</kbd> | Opens the focused panel. |
| <kbd>Alt</kbd> + <kbd>Up Arrow</kbd> | Closes the focused panel. |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Down Arrow</kbd> | Opens all enabled panels. If [`SingleExpand`](mcp:get_api_reference?platform=webcomponents&component=IgcAccordionComponent&member=singleExpand) is `true`, opens only the focused panel. |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Up Arrow</kbd> | Closes all enabled panels. |
| <kbd>Home</kbd> | Moves focus to the first enabled panel. |
| <kbd>End</kbd> | Moves focus to the last enabled panel. |

### Screen Readers / ARIA

The accordion's accessibility semantics are provided through its child expansion panels and their headers.

- Each panel header exposes `role="button"`, `aria-expanded`, and `aria-controls`.
- Each panel body exposes `role="region"` and a label through `aria-labelledby` or `aria-label`.
- Use clear title text for each panel so assistive technologies can announce a meaningful label.
- Keep interactive content inside panel bodies in a logical tab order.

### Accessibility Compliance

Infragistics documents Ignite UI for Web Components accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic. The accordion's compliance evidence comes from the child [`IgcExpansionPanel`](mcp:get_api_reference?platform=webcomponents&component=IgcExpansionPanelComponent) components that provide the interactive headers and regions.

| Criterion | How the component complies |
| -- | -- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The accordion supports keyboard commands for moving focus and opening or closing panels. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order) | Focus moves through enabled panels in sequence, with shortcuts for jumping to the first and last panel. |

Your responsibilities:

- Provide panel titles that describe the content behind each disclosure area.
- Preserve a logical focus order in the surrounding page layout.
- Validate any custom styling against your application's contrast and focus-indicator requirements.

## API References

[`IgcAccordion`](mcp:get_api_reference?platform=webcomponents&component=IgcAccordionComponent)
[`IgcExpansionPanel`](mcp:get_api_reference?platform=webcomponents&component=IgcExpansionPanelComponent)

## Dependencies

The accordion depends on [`IgcExpansionPanel`](mcp:get_api_reference?platform=webcomponents&component=IgcExpansionPanelComponent) for its visible sections.

## Additional Resources

Use these resources to continue with Ignite UI for Web Components Accordion support, source, and related layout guidance.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

## Related Components

- [Expansion Panel](./expansion-panel.md) - The collapsible section the accordion is built from. See it for configuring individual panels.

## FAQ

  **Q: Should multiple accordion panels be open at the same time?**

    Allow multiple panels to stay open when users need to compare or cross-reference their content. Use single-expansion behavior when the workflow is clearer with one active section at a time.
  
  **Q: When should I avoid using an accordion?**

    Avoid using an accordion for essential, long, or comparison-heavy content that users need to read at once. Use clear headings, a separate page, or another layout when hiding the content would make it harder to find or compare.
  
  **Q: How should I write accordion headers?**

    Use short, descriptive headers that clearly identify the content revealed by each panel. Users should be able to scan the headers and decide which section to open.
  
  **Q: Can an accordion header contain other buttons or links?**

    Avoid placing other interactive controls inside an accordion header. Keep secondary actions outside the header so the panel trigger remains clear and does not contain nested interactive elements.
  


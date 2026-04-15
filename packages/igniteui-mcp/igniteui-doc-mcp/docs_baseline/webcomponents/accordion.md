---
title: Web Components Accordion | Accordion | Infragistics
_description: Accordion is used to build vertical expandable panels in accordion menu.
_keywords: Web Components Accordion, Ignite UI for Web Components, Infragistics
_license: MIT
mentionedTypes: ["Accordion", "Infragistics.Controls.Layouts.Implementation.ExpansionPanel"]
namespace: Infragistics.Controls
_tocName: Accordion
---

# Web Components Accordion Overview

The Ignite UI for Web Components Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page. It offers keyboard navigation and API to control the underlying panels' expansion state.

Users are enabled to interact and navigate among a list of items, such as thumbnails or labels. Each one of those items can be toggled (expanded or collapsed) in order to reveal the containing information. Depending on the configuration, there can be a single or multiple expanded items at a time.

## Web Components Accordion Example

The following is a basic Ignite UI for Web Components Accordion example of a FAQ section. It operates as an accordion, with individually working sections. You can toggle each text block with a single click, while expanding multiple panels at the same time. This way you can read information more easily, without having to go back and forth between an automatically expanding and collapsing panel, which conceals the previously opened section every time.

In it, you can see how to define an accordion and its expansion panels. The sample also demonstrates the two types of expansion behavior. The switch button sets the [`singleExpand`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcaccordioncomponent.html#singleExpand) property to toggle between single and multiple branches to be expanded at a time.

```css
igc-accordion {
    width: 100%;
}

.sample-wrapper {
    overflow-y: auto;
    max-height: 380px;
    margin: 8px;
}

igc-switch {
    padding: 16px;
}

igc-expansion-panel {
    border: 1px solid rgba(174, 174, 174, 0.25);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Getting Started with Web Components Accordion

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcAccordionComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcaccordioncomponent.html), you need to register it as follows:

```ts
import { defineComponents, IgcAccordionComponent } from 'igniteui-webcomponents';

defineComponents(IgcAccordionComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

Before using the [`IgcAccordionComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcaccordioncomponent.html), you need to register it as follows:

Now you can start with a basic configuration of the [`IgcAccordionComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcaccordioncomponent.html) and its panels.

## Usage

Each section in the Web Components Accordion Component is defined using an Web Components Expansion Panel.
Panels provide `Disabled` and `Open` properties, which give you the ability to configure the states of the panel as per your requirement.

### Declaring an Accordion

The accordion wraps all expansion panels declared inside it.

```html
<igc-accordion id="accordion" single-expand="true">
    <igc-expansion-panel>
        <div slot="title">Title Panel 1</div>
        <div>
            Content Panel 1
        </div>
    </igc-expansion-panel>
    <igc-expansion-panel>
        <div slot="title">Title Panel 2</div>
        <div>
            Content Panel 2
        </div>
    </igc-expansion-panel>
</igc-accordion>
```

Using the `Panels` accessor you can get a reference to the collection containing all expansion panels children of the [`IgcAccordionComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcaccordioncomponent.html).

```typescript
private accordion: IgcAccordionComponent;
private panels: IgcExpansionPanelComponent[];

constructor() {
    this.accordion = document.getElementById("accordion") as IgcAccordionComponent;
    this.panels = this.accordion.panels;
}
```

As demonstrated above, the [`singleExpand`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcaccordioncomponent.html#singleExpand)property gives you the ability to set whether single or multiple panels can be expanded at a time.

By using the [`hideAll`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcaccordioncomponent.html#hideAll) and [`showAll`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcaccordioncomponent.html#showAll) methods you can respectively collapse and expand all [`IgcExpansionPanelComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcexpansionpanelcomponent.html)s of the [`IgcAccordionComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcaccordioncomponent.html) programmatically.

> [!Note]
> If [`singleExpand`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcaccordioncomponent.html#singleExpand) property is set to **true** calling [`showAll`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcaccordioncomponent.html#showAll) method would expand only the focused panel.

### Web Components Accordion Customization Example

With the Web Components Accordion, you can customize the header and content panel's appearance.

The sample below demonstrates how elaborate filtering options can be implemented using the built-in slots of the [`IgcExpansionPanelComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcexpansionpanelcomponent.html).

```css
igc-accordion {
    width: 100%;
}

.sample-wrapper {
    overflow-y: auto;
    max-height: 530px;
    margin: 8px;
}

igc-range-slider {
    margin: 24px;
}

.categories-container {
    display: flex;
    flex-flow: column nowrap;
}

igc-checkbox,
igc-radio {
    margin: 4px 0;
}

igc-expansion-panel {
    border: 1px solid rgba(174, 174, 174, 0.25);
}

igc-rating {
    flex-direction: row;
}

.size-small {
  --ig-size: var(--ig-size-small);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

### Nested Web Components Accordions Scenario

In the following Web Components Accordion example is created a complex FAQ section in order to illustrate how you can go about this common application scenario. In the sample nested [`IgcAccordionComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcaccordioncomponent.html) is achieved by adding an accordion inside an expansion panel.

```css
igc-accordion {
    width: 100%;
}

.sample-wrapper {
    overflow-y: auto;
    max-height: 470px;
    margin: 8px;
}

igc-switch {
    padding: 16px;
}

igc-expansion-panel {
    border: 1px solid rgba(174, 174, 174, 0.25);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Keyboard Navigation

Keyboard navigation in the Web Components Accordion provides a rich variety of keyboard interactions to the end-user. This functionality is enabled by default and allows end-users to easily navigate through the panels.

The Accordion navigation is compliant with W3C accessibility standards and convenient to use.

**Key Combinations**

- <kbd>↓</kbd> - moves the focus to the panel below
- <kbd>↑</kbd> - moves the focus to the panel above
- <kbd>ALT</kbd> + <kbd>↓</kbd> - opens the focused panel in the accordion
- <kbd>ALT</kbd> + <kbd>↑</kbd> - closes the focused panel in the accordion
- <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>↓</kbd> - opens all enabled panels (if singleExpand is set to true opens the focused panel)
- <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>↑</kbd> - closes all enabled panels
- <kbd>HOME</kbd> - navigates to the FIRST enabled panel in the accordion
- <kbd>END</kbd> - navigates to the LAST enabled panel in the accordion

<div class="divider"></div>

## API References

- [`IgcAccordionComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcaccordioncomponent.html)
- [`IgcExpansionPanelComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcexpansionpanelcomponent.html)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

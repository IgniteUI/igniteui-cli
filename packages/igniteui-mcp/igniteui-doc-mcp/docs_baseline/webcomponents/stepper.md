---
title: Web Components Stepper Component - Ignite UI for Web Components
_description: Web Components Stepper component is used to visualize content as a process and to show its progress by dividing the content into logical steps. Try it for FREE.
_keywords: Web Components Stepper, Ignite UI for Web Components, Infragistics
_license: MIT
mentionedTypes: ["Stepper"]
_tocName: Stepper
---

# Web Components Stepper Overview

The Web Components Stepper Component provides a wizard-like workflow and is used for showing progress through numbered steps. It enables developers to divide a lengthy content into a sequence of logical steps, helping end-users more easily navigate the entire process. The Web Components Stepper is displayed as a vertical or a horizontal line. The Web Components Stepper has multiple features like step validation, styling, orientation and keyboard navigation.

## Web Components Stepper Example

The following Ignite UI for Web Components Stepper Example below shows the component in action. It visualizes the process that an end-user must pass through to configure an order details, following several consecutive steps.

```css
igc-switch {
    margin-left: 0.5rem;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## Getting Started with Web Components Stepper

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html), you need to register it as follows:

```ts
import { defineComponents, IgcStepperComponent } from 'igniteui-webcomponents';

defineComponents(IgcStepperComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

Now you can start with a basic configuration of the Web Components [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html) and its steps.

## How To Use Web Components Stepper

The [`IgcStepComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcstepcomponent.html) is the representation of every step that belongs to the [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html). Steps provide [`invalid`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcstepcomponent.html#invalid), [`active`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcstepcomponent.html#active), [`optional`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcstepcomponent.html#optional), [`disabled`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcstepcomponent.html#disabled) and [`complete`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcstepcomponent.html#complete) properties, which give you the ability to configure the step states according to your business requirement.

### Declaring Web Components Stepper

Steps can be declared using one of the following approaches.

- Iterating through a data set

```html
<igc-stepper>
    ${stepsData.map((step) => html`
    <igc-step .disabled=${step.disabled}>
        <div slot="indicator">
            <igc-icon .iconName=${step.indicator}></igc-icon>
        </div>

        <p slot="title">${step.title}</p>
    </igc-step>
    `
</igc-stepper>
```

- Creating static steps

```html
<igc-stepper>
    <igc-step>
       <p slot="title">Step 1</p>
    </igc-step>
    <igc-step>
       <p slot="title">Step 2</p>
    </igc-step>
</igc-stepper>
```

For each step the user has the ability to configure indicator, title and subtitle using the `Indicator`, `Title` and `Subtitle` slots as follows:

> [!Note]
> The `Default` [`IgcStepComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcstepcomponent.html) slot renders the content of the step.

```html
<igc-stepper>
    <igc-step>
       <igc-icon slot="indicator" iconName="home"></igc-icon>
       <p slot="title">Home</p>
       <p slot="subtitle">Home Sub Title</p>
       <div>
          Step Content
       </div>
    </igc-step>
</igc-stepper>
```

<img class="responsive-img" style="margin-bottom:10px; -webkit-box-shadow: 4px 4px 4px 4px #ccc; -moz-box-shadow: 4px 4px 4px 4px #ccc; box-shadow: 4px 4px 4px 4px #ccc; max-width: 500px" src="../../images/stepper/stepper-step.png" alt="stepper-step"/>

### Orientation in Web Components Stepper

You can customize the stepper orientation through the exposed [`orientation`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html#orientation) property. It could be set to **horizontal** **(default value)** or **vertical**.

**Horizontal Stepper Orientation**

**horizontal**is the default value for the [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html) orientation property.
When the Web Components stepper is horizontally orientated you have the opportunity to determine whether the steps’ content would be displayed above or below the steps’ headers. This could be achieved by setting the [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html) [`contentTop`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html#contentTop) boolean property, which default value is **false**. In case it is enabled the steps’ content would be displayed above the steps’ headers.

<img class="responsive-img" style="margin-bottom:10px; -webkit-box-shadow: 4px 4px 4px 4px #ccc; -moz-box-shadow: 4px 4px 4px 4px #ccc; box-shadow: 4px 4px 4px 4px #ccc; max-width: 800px"  src="../../images/stepper/stepper-contentTop.png" alt="stepper-contentTop" />

**Vertical Stepper Orientation**

You can easily switch from the horizontal to vertical layout. In order to change the default orientation you should set the [`orientation`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html#orientation) property to **vertical**.

The sample below demonstrates how stepper orientation and titles position could be changed runtime.

```css
.container {
    padding: 1rem;
}

.radio-groups {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.radio-group {
    margin-right: 2rem;
}

.radio-group-container {
    padding: 0.5rem;
    border: 1px solid gainsboro;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

### Step States

Web Components [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html) supports five steps states and each of them apply different styles by default:

- **active** - Determines whether the step is the currently displayed. By design, if the user does not explicitly set some step’s active attribute to **true**, the initial active step would be the first non-disabled step.
- **disabled** - Determines whether the step is intractable. By default, the disabled attribute of a step is set to **false**.
- **invalid** - Determines whether the step is valid. Based on its value it is decided whether the user will have the ability to move forward in linear stepper mode. Its default value is **false**.
- **optional** - By default, the optional attribute of a step is set to **false**. If validity of a step in linear stepper is not required, then the optional attribute can be enabled in order to be able to move forward independently from the step validity.
- **complete** - By default, the complete attribute of a step returns **false**. The user, however, can override this default complete behavior by setting the complete attribute as needed. When step is marked as complete not only that the style of the step header is changed by default, but also the style of the progress line between the completed step and the next one.

### Linear Web Components Stepper

The Web Components [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html) gives you the opportunity to set its steps flow using the [`linear`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html#linear) property. By default, linear is set to **false** and the user is enabled to select any non-disabled step in the [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html).

```html
<igc-stepper linear="true">
    <igc-step>
       <p slot="title">Step 1</p>
    </igc-step>
    <igc-step>
       <p slot="title">Step 2</p>
    </igc-step>
</igc-stepper>
```

When the linear property is set to **true**, the stepper will require the current non-optional step to be valid before proceeding to the next one.

If the current non-optional step is not valid you cannot go forward to the next step until you validate the current one.

> [!Note]
> Optional steps validity is not taken into account in order to move forward.

### Step Interactions

[`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html) provides the following API methods for step interactions:

- **navigateTo** – activates the step by given index.
- **next** - activates the next non-disabled step.
- **prev** – activates the previous non-disabled step.
- **reset** – resets the stepper to its initial state.

> [!Note]
> The reset method would reset the stepper to its initial state, i.e. activates the first step. It would not clear the step\`s content. This should be done manually.

### Customizing the Steps

The Ignite UI for Web Components Stepper gives you the ability to configure different options for titles, indicators and more.

This could be achieved through the [`stepType`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html#stepType) property of the [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html). It takes the following values:

- Full **(default value)**
- Indicator
- Title

**full**

If titles and subtitles are defined, with this setup both indicators and titles would be rendered.

The user would also have the ability to define the position of the title for the steps, so it could be placed before, after, above or below the step indicator.
The user can configure the title position using the [`titlePosition`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html#titlePosition) property. It takes the following values:

- undefined **(default value)**
- end
- start
- bottom
- top

When the Web Components [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html) is horizontally orientated and the title position **is not defined**, the titles would be displayed **below** the indicators.

When the orientation is set to vertical and the title position **is not defined**, the titles would be displayed **after** the indicators.

> [!Note]
> **titlePosition** property is applicable **only** when the stepper stepType property is set to **full**.

**indicator**

If you want to display only indicators for the steps, set the stepType option to **indicator**.

The step indicator supports any content, however with the restriction that its size would be always **24 pixels**. Having this in mind, we recommend using [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html) or [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html) as step indicators.

**Title**

If you want to display only titles for the steps, set the stepType option to **title**.

In this way if subtitles are defined, they will also be rendered below the step title.

> [!Note]
> This container could be re-templated as per your requirement without any size restrictions. For example, you could add an indicator with size greater than 24 pixels inside it.

The sample below demonstrates all exposed step types and how they could be changed:

```css
.radio-group-container {
    width: fit-content;
    padding: 0.5rem;
    border: 1px solid gainsboro;
    margin-bottom: 1rem;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

### Stepper Animations

The Web Components [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html) Animations provide the end-users with a beautiful experience interacting with the defined steps. The available animation options differ depending on the orientation of the stepper.

When the stepper is horizontally orientated, it is configured to use the `slide` animation by default. It also supports `fade` as an alternative. The animations are configured through the [`horizontalAnimation`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html#horizontalAnimation) input.

In a vertically orientated layout, the animation type could be defined using the [`verticalAnimation`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html#verticalAnimation) property. By default, its value is set to `grow` and the user has the ability to set it to `fade` as well.

Setting `none` to both animation type inputs disables stepper animations.

The [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html) component also gives you the ability to configure the duration of the transition between the steps. This could be achieved through the `animationDuration` property, which takes a number as an argument and it is common to both orientations. The default value is set to 320ms.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.container {
    padding: 1rem;
}

.settings {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.125rem;
    background: hsl(var(--ig-gray-100));
    padding: 1.125rem;
    border: 1px solid hsl(var(--ig-gray-300));
    border-radius: .25rem;
    margin-bottom: 2rem;
}
```

<div class="divider--half"></div>

## Keyboard Navigation

The Ignite UI for Web Components Stepper provides a rich variety of keyboard interactions to the end-user. This functionality is enabled by default and allows end-users to easily navigate through the steps.
The Web Components [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html) navigation is compliant with [W3 accessability standards](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/) and convenient to use.

**Key Combinations**

- <kbd>TAB</kbd> - moves the focus to the next tabbable element
- <kbd>SHIFT</kbd> + <kbd>TAB</kbd> - moves the focus to the previous tabbable element
- <kbd>↓</kbd> - moves the focus to the header of the next accessible step when the stepper is **vertically orientated**
- <kbd>↑</kbd> - moves the focus to the header of the previous accessible step when the stepper is **vertically orientated**
- <kbd>←</kbd> - moves the focus to the header of the previous accessible step in both orientations
- <kbd>→</kbd> - moves the focus to the header of the next accessible step in both orientations
- <kbd>HOME</kbd> - moves the focus to the header of the FIRST enabled step in the stepper
- <kbd>END</kbd> - moves the focus to the header of the LAST enabled step in the stepper
- <kbd>ENTER</kbd> or <kbd>SPACE</kbd> - activates the currently focused step

## Styling Web Components Stepper

You can change the appearance of the [`IgcStepComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcstepcomponent.html), by using some of the exposed CSS parts listed below:

| Part name | Description |
| ---------|------------ |
| `header-container` | Wrapper of the step's header and its separators. |
| `disabled` | Indicates a disabled state. Applies to header-container. |
| `complete-start` | Indicates a complete state of the current step. Applies to header-container. |
| `complete-end` | Indicates a complete state of the previous step. Applies to header-container. |
| `optional` | Indicates an optional state. Applies to header-container. |
| `invalid` | Indicates an invalid state. Applies to header-container. |
| `top` | Indicates that the title should be above the indicator. Applies to header-container. |
| `bottom` | Indicates that the title should be below the indicator. Applies to header-container. |
| `start` | Indicates that the title should be before the indicator. Applies to header-container. |
| `end` | Indicates that the title should be after the indicator. Applies to header-container. |
| `header` | Wrapper of the step's indicator and text. |
| `indicator` | The indicator of the step. |
| `text` | Wrapper of the step's title and subtitle. |
| `empty` | Indicates that no title and subtitle has been provided to the step. Applies to text. |
| `title` | The title of the step. |
| `subtitle` | The subtitle of the step. |
| `body` | Wrapper of the step's content. |
| `content` | The steps content. |

Using these CSS parts we can customize thе appearance of the [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html) component like this:

```css
igc-step::part(title) {
  color: var(--ig-primary-500);
}
igc-step[active]::part(indicator) {
  background-color: var(--ig-primary-500);
}
igc-step::part(indicator) {
  background-color: var(--ig-surface-500);
}
```

```css
:root {
  --color-teal: rgba(77, 182, 172, 1);
  --color-dark-navy: rgba(26, 35, 126, 1);
  --color-aqua-gray: rgba(208, 236, 236, 1);
  --color-white: rgba(255, 255, 255, 1);

  --color-teal-hover: rgba(26, 35, 126, 1);
  --color-teal-shadow: rgba(77, 182, 172, 0.5);
}

igc-button::part(base) {
  margin: 1rem 0.5rem 0 0;
  background-color: var(--color-teal);
  color: var(--color-white);
  font-weight: 600;
  transition: background-color 0.25s ease, transform 0.1s ease;
}

igc-button:hover::part(base) {
  background-color: var(--color-dark-navy);
}

igc-button:active::part(base) {
  transform: scale(0.96);
}

igc-step::part(title) {
  color: var(--color-dark-navy);
  font-variant: small-caps;
  font-weight: bold;
}

igc-step::part(indicator) {
  border-radius: 12px 6px 12px 6px;
  background-color: var(--color-aqua-gray);
  color: var(--color-dark-navy);
  transition: all 0.2s ease;
}

igc-step[active]::part(indicator) {
  background-color: var(--color-teal);
  box-shadow: 0 2px 8px var(--color-teal-shadow);
  transform: scale(1.04);
}

igc-step[active]:active::part(indicator) {
  transform: scale(1.08);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```css
.container {
  padding: 1rem;
}
```

<div class="divider--half"></div>

## API References

- [`IgcStepperComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcsteppercomponent.html)
- [`IgcStepComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcstepcomponent.html)
- [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html)
- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

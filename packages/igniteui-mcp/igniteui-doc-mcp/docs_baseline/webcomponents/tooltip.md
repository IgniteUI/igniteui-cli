---
title: Web Components Tooltip | Infragistics
_description: The Ignite UI for Web Components Tooltip component provides us with the ability to easily create a tooltip and attach it into an element.
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Tooltip components
_license: MIT
mentionedTypes: ["Tooltip", "PopoverPlacement"]
_tocName: Tooltip
---

# Web Components Tooltip

The Ignite UI for Web Components Tooltip component provides a way to display a tooltip for a specific element. A tooltip is a popup that displays information related to an element, usually when the element receives keyboard focus or when the mouse hovers over it.

## Ignite UI for Web Components Tooltip Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-avatar {
  --ig-size: var(--ig-size-medium);
}
```

### Getting Started

To start using the [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html), first, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

After that, you need to import the [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html), its necessary CSS, and register its module, as follows:

```ts
import { defineComponents, IgcTooltipComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcTooltipComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

Now you can start with a basic configuration of the Web Components [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html).

```html
<igc-tooltip anchor="hover-button">
  Congrats you've hovered the button!
</igc-tooltip>

<igc-button id="hover-button">Hover me</igc-button>
```

## Usage

### Tooltip target

To attach a tooltip to the desired element, use the [`anchor`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#anchor) property of the [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html) and set it to the ID of the target element.

```html
<igc-button id="target-button">Hover me</igc-button>
<igc-tooltip anchor="target-button">
  Congrats you've hovered the button!
</igc-tooltip>
```

You can also specify the target by passing the element instance directly:

```html
<igc-tooltip id="tooltip">
  Congrats you've hovered the button!
</igc-tooltip>
<igc-button id="hover-button">Hover me</igc-button>
```

```ts
constructor() {
  const anchor = document.querySelector('#hover-button') as IgcButtonComponent;
  const tooltip = document.querySelector('#tooltip') as IgcTooltipComponent;
  tooltip.anchor = anchor;
}
```

### Tooltip content

The tooltip content is defined by placing custom content between the opening and closing tags of the [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html).

```html
<igc-tooltip>
  This is my custom content here.
</igc-tooltip>
```

Alternatively, to set simple text, you can use the [`message`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#message) property.

```html
<igc-tooltip message="This is my custom content here."></igc-tooltip>
```

If you use both approaches (slotted content and the [`message`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#message) property), the slotted content will take priority and the [`message`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#message) value will be ignored.

```html
<igc-button id="target-button">Hover me</igc-button>
<igc-tooltip anchor="target-button" message="I will be hidden.">
  I will be shown!
</igc-tooltip>
```

In this example, the slotted content (“I will be shown!”) will be displayed instead of the [`message`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#message) property value.

The [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html) content can be more than just simple text. Since the [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html) is a regular element in the markup, you can enhance its content by adding any elements you need and styling them accordingly.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-icon:hover {
  cursor: pointer;
  color: var(--ig-primary-500);
}

.map {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 272px;
  background-image: url("https://dl.infragistics.com/x/img/card/media/infragisticsMap.png");
  border: 1px solid var(--ig-gray-300);
}

.locationTooltipContent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  margin-right: 10px;
  width: 45px;
}

igc-tooltip::part(base) {
  max-width: 240px;
}
```

### Show/Hide delay settings

If you want to control the delay before showing and hiding the [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html), you can use the [`showDelay`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#showDelay) and [`hideDelay`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#hideDelay) properties. Both properties accept a number value representing time in milliseconds.

```html
<igc-tooltip show-delay="600" hide-delay="800">
  Her name is Madelyn James.
</igc-tooltip>
```

> [!NOTE]
> It's important to note that the Tooltip API methods — [`show`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#show), [`hide`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#hide), and [`toggle`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#toggle) — DO NOT take the [`showDelay`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#showDelay) and [`hideDelay`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#hideDelay) properties into account. They act immediately when invoked.

### Placement

The [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html) can also be positioned relative to its target element with ease. All you need to do is use the [`placement`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#placement) property along with one of the `PopoverPlacement` options.

If the [`placement`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#placement) property is not set, the default value is `Bottom`, which places the [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html) below the target element.

Additionally, you can make the [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html) "sticky" using the [`sticky`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#sticky) property, which adds a close button and keeps the [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html) visible until the user closes it manually - either by clicking the close button or pressing the `Esc` key. This behavior overrides the default hover behavior, preventing the [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html) from disappearing when the user stops hovering over the target element.

The [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html) also includes an optional arrow indicator that can be configured via the [`withArrow`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#withArrow) property. The arrow visually connects the tooltip to its anchor element and its position automatically adjusts based on the tooltip's [`placement`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#placement).

```html
<igc-button id="target-button">Hover me</igc-button>
<igc-tooltip anchor="target-button" placement="top-start" sticky with-arrow>
  Congrats you've hovered the button!
</igc-tooltip>
```

In the following example, you can see a demonstration of all tooltip placement options, arrow positioning behavior, and the [`sticky`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#sticky) property in action:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#tooltip-position {
  margin: 40px 0 0 120px;
  width: 400px;
  height: 120px;
}

igc-button::part(base) {
  height: 100%;
  border-radius: 0.5rem;
}
```

### Triggers

By default, the [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html) is triggered only while hovering over the target element. However, you can change this behavior using the [`showTriggers`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#showTriggers) and [`hideTriggers`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#hideTriggers) properties, which allow you to control when the [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html) appears and disappears. These properties accept event names as values—such as `click`, `focus`, or `keypress`—letting you trigger the [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html) in different scenarios.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#triggers-container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  gap: 0.6rem;

  & igc-card {
    max-width: 320px;
  }

  & igc-card-header {
    min-height: 3rem;
  }

  & igc-card-content {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: space-between;
  }
}

.sample {
  padding: 0.5rem 0rem 0rem 0.5rem;
}
```

### Advanced Example

The [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html) integrates seamlessly with other components, allowing you to create advanced tooltips that contain components within them.
In the following example, you can see how we create descriptive tooltips by using the [`IgcListComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclistcomponent.html), [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html), [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html), [`IgcBadgeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbadgecomponent.html), [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html), [`IgcCardComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardcomponent.html) and [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html) components.

```typescript
export class IncomeTaxesItem {
  public constructor(init: Partial<IncomeTaxesItem>) {
    Object.assign(this, init);
  }
  public year?: string;
  public revenue?: number;
}
export class IncomeTaxes extends Array<IncomeTaxesItem> {
  public constructor(items: Array<IncomeTaxesItem> | number = -1) {
    if (Array.isArray(items)) {
      super(...items);
    } else {
      const newItems = [
        new IncomeTaxesItem(
          {
            year: `2021`,
            revenue: 15
          }),
        new IncomeTaxesItem(
          {
            year: `2022`,
            revenue: 30
          }),
        new IncomeTaxesItem(
          {
            year: `2023`,
            revenue: 18
          }),
          // ... 2 more items
      ];
      super(...newItems.slice(0));
    }
  }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    max-height: max-content;
    max-width: 680px;
    gap: 1rem;
}

.sample {
    padding: 1rem;
}

igc-tooltip::part(bottom) {
    display: none;
}

igc-tooltip::part(base) {
    color: var(--ig-primary-300-contrast);
    background-color: var(--ig-surface-50);
    border: 1px solid var(--ig-gray-300);
    box-shadow: var(--ig-elevation-1);
    max-width: unset;
}

.triggerWrapper {
    border: 1px solid var(--ig-gray-200);
    border-radius: 0.25rem;
    background-color: #f5f5f5;

    h3 {
        color: #000
    }

    .trigger {
        border: 1px solid var(--ig-gray-300);
        width: 280px;
        height: max-content;
        margin: 0px 1rem 1rem;

        igc-list-item {
            padding: 0.5rem 1rem;
        }

        p[slot="start"] {
            font-size: 0.875rem;
            line-height: 1.5rem;
            letter-spacing: 0.25px;
            font-weight: 400;
            color: var(--ig-gray-900);
        }

        span {
            display: block;
            font-size: 0.8125rem;
            line-height: 1.375rem;
            letter-spacing: 0.3px;
            color: var(--ig-gray-600);
            text-decoration: underline;
        }

        .headingWrapper {
            display: flex;

            igc-icon {
                --size: 1.25rem
            }

            h6 {
                font-size: var(--ig-h6-font-size);
                font-weight: var(--ig-h6-font-weight);
                line-height: var(--ig-h6-line-height); 
                letter-spacing: var(--ig-h6-letter-spacing);
                margin: unset;
                padding-left: 0.5rem;
                color: var(--ig-gray-900);
            }
        }

        .secondary {
            color: var(--ig-success-500);
            font-size: 0.875rem;
            line-height: 1.25rem;
            letter-spacing: 0.25px;
        }

        igc-avatar {
            --size: 2.5rem;
        }
    }
}

.trigger:nth-of-type(6) {
    cursor: pointer;
}

.trigger:nth-of-type(n+5) {
    margin-left: 1.5rem;
}

.list::part(base) {
    padding: unset;
}

.list {

    igc-list {
        width: 300px;
        padding: 1rem;
        gap: 1rem;
        letter-spacing: 0.15px;
        border-radius: 0.25rem;

        h6 {
            font-size: var(--ig-h6-font-size);
            font-weight: var(--ig-h6-font-weight);
            line-height: var(--ig-h6-line-height); 
            margin: unset;
        }

        igc-list-item {
            padding: 0.5rem 0.5rem 0.5rem 0.281rem;
            --item-text-color: var(--ig-gray-900);
            cursor: pointer;
            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 400;
            letter-spacing: 0.15px;
        }

        igc-list-header {
            margin-left: 0.5rem;
        }

        igc-icon {
            --size: 0.938rem;
            --ig-icon-color: var(--ig-gray-700);
            display: inline-block;
            vertical-align: middle;
            margin-right: 1rem;
        }
    }
}

.chart::part(base) {
    border-radius: 0.5rem;
    padding: 1rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
}

.chart {

    h6 {
        font-size: var(--ig-h6-font-size);
        font-weight: var(--ig-h6-font-weight);
        letter-spacing: var(--ig-h6-letter-spacing);
        line-height: var(--ig-h6-line-height); 
        margin: unset;
    }

    igc-category-chart {
        width: 317px;
        height: 178px;
        border: 1px solid #E0E0E0;
        border-radius: 0.375rem;
    }

    .content {
        font-size: 0.813rem;
        font-weight: 400;
        line-height: 1.125rem;
        letter-spacing: 0.3px;
        color: var(--ig-gray-700);
        width: 317px;
    }

    p {
        margin: unset;
    }
}

.employee::part(base) {
    border-radius: 0.5rem;
    padding: 1rem;
    gap: 1rem;
}

.employee {

    igc-avatar {
        --size: 5.5rem
    }

    .textWrapper {
        width: 159px;

        p {
            margin: unset;
        }

        h6 {
            font-size: var(--ig-h6-font-size);
            font-weight: var(--ig-h6-font-weight);
            line-height: var(--ig-h6-line-height); 
            letter-spacing: var(--ig-h6-letter-spacing);
            margin: unset;
        }

        p:not(.title) {
            font-size: 0.875rem;
            line-height: 1.25rem;
            font-weight: 400;
            letter-spacing: 0.25px;
            color: var(--ig-gray-700);
        }
    }
}

.avatarWrapper {
    line-height: 0;
    position: relative;

    igc-badge {
        --background-color: var(--ig-error-500);
        --_badge-size: 1.25rem;
        box-shadow: var(--ig-elevation-1);
        position: absolute;
        bottom: -3px;
        right: -3px;
    }
}

.multiline::part(base) {
    border-radius: 0.125rem;
    gap: 0.5rem;
    background-color: var(--ig-error-50);
		border: unset;
    padding: 0.188rem 0.5rem;
}

.multiline::part(bottom) {
    display: block;
    border-bottom-color: var(--ig-error-50);
}

.multiline {
    igc-icon {
        color: var(--ig-error-500);
        --size: 0.938rem;
        width: 1.125rem;
        height: 1.125rem;
    }

    p {
        font-size: 0.625rem;
        width: 158px;
        line-height: 1rem;
        letter-spacing: 0.33px;
        margin: unset;
    }
}

.btcBtn::part(base) {
    border-radius: 0.25rem;
    padding: 1rem 1rem 0.5rem 1rem;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
}

.btcBtn {

    igc-card {
        background-color: var(--ig-gray-50);
        padding: 0.5rem;
        border-radius: 0.125rem;
        letter-spacing: 0.15px;
        width: 268px;
        border: none;

        .titleWrapper {
            display: flex;
            width: 4.25rem;
            justify-content: space-between;

            h6 {
                font-size: var(--ig-h6-font-size);
                font-weight: var(--ig-h6-font-weight);
                line-height: var(--ig-h6-line-height); 
                margin: unset;
            }

            igc-icon {
                --size: 1.25rem;
                width: 1.5rem;
            }
        }

        .detail {
            font-size: 0.75rem;
            font-weight: 600;
            line-height: 1rem;
            margin-bottom: unset;
        }

        .subtitle {
            font-size: 1rem;
            line-height: 1.5rem;
            margin-top: unset;
            color: var(--ig-gray-900);
        }

        .exchangeWrapper {

            .detail {
                color: var(--ig-secondary-300);
                margin: 1rem 0 0.125rem 0;
            }
        }

        .assetsWrapper {

            .detail {
                color: var(--ig-primary-300);
                margin: 0 0 0.125rem 0;
            }

            .subtitle {
                margin-bottom: unset;
            }
        }
    }

    .footerWrapper {
        width: 100%;
        gap: 0.313rem;
        display: flex;
        justify-content: flex-end;

        igc-button {
            font-size: 0.875rem;
            line-height: 1rem;
            letter-spacing: 0.75px;
        }
    }
}

.btc::part(base) {
    border-radius: 0.25rem;
    padding: 1rem;
    gap: 0.5rem;
    display: flex;
    justify-content: space-between;
    width: 280px;
    --ig-icon-color: var(--ig-gray-700);
}

.btc {

    igc-card {
        padding: 0.5rem;
        letter-spacing: 0.15px;
        border: none;

        .titleWrapper {
            display: flex;
            width: 4.25rem;
            justify-content: space-between;

            h6 {
                font-size: var(--ig-h6-font-size);
                font-weight: var(--ig-h6-font-weight);
                line-height: var(--ig-h6-line-height); 
                margin: unset;
            }

            igc-icon {
                --size: 1.25rem;
                width: 1.5rem;
            }
        }

        .detail {
            font-size: 0.75rem;
            font-weight: 600;
            line-height: 1rem;
            margin-bottom: unset;
        }

        .subtitle {
            font-size: 1rem;
            line-height: 1.5rem;
            margin-top: unset;
            color: var(--ig-gray-900);
        }

        .exchangeWrapper {

            .detail {
                color: var(--ig-secondary-300);
                margin: 0.5rem 0 0.125rem 0;
            }

            .subtitle {
                margin-bottom: 0.5rem;
            }
        }

        .assetsWrapper {

            .detail {
                color: var(--ig-primary-300);
                margin: 0 0 0.125rem 0;
            }

            .subtitle {
                margin-bottom: unset;
            }
        }
    }
}
```

### Additional Properties

Apart from the properties we've already covered, the [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html) component offers a variety of additional properties that allow you to further configure its behavior, position, and appearance.

|Name|Type|Description|
|--|--|--|
| [`open`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#open) | boolean | Determines whether the tooltip is visible. |
| [`withArrow`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#withArrow) | boolean | Determines whether to render an arrow indicator for the tooltip. |
| [`offset`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#offset) | number | Sets the pixel distance between the tooltip and its [`anchor`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#anchor). |

### Methods

In addition to its configurable properties, the [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html) also exposes three methods that you can use:

|Name|Description|
|--|--|
| [`show`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#show) | Displays the tooltip if it’s not already shown. If a target is provided, it sets the target as a transient [`anchor`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#anchor). |
| [`hide`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#hide) | Hides the tooltip if it’s not already hidden. |
| [`toggle`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#toggle) |  Toggles the tooltip between the shown and hidden states. |

## Accessibility & ARIA Support

The [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html) is built with accessibility in mind and includes the following ARIA attributes:

- `role` - When the tooltip is in its default behavior, `role="tooltip"` is applied. If the [`sticky`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html#sticky) property is enabled, the role changes to `status`.
- `inert` - Dynamically toggled based on visibility. When the tooltip is hidden, it becomes inert.
- `aria-atomic` - Set to true, ensuring that the entire tooltip content is announced when it changes.
- `aria-live` - Set to polite, indicating to screen readers that updates should be announced only when the user is idle.

## Styling

The [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html) component exposes two CSS parts that you can use for styling:

|Name|Description|
|--|--|
| `base` | The base wrapper of the tooltip component. |
| `top, right, bottom, left ...` | The area containing the tooltip arrow. The part name matches the value of the tooltip placement property. |

```css
igc-tooltip::part(base) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}

igc-tooltip::part(bottom) {
  border-bottom-color: var(--ig-primary-500);
}
```

```css
igc-avatar {
  --ig-size: var(--ig-size-medium);
}

igc-tooltip::part(base) {
  background-color: var(--ig-primary-300);
  color: var(--ig-primary-300-contrast);
}

igc-tooltip::part(bottom) {
  border-bottom-color: var(--ig-primary-300);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<div class="divider--half"></div>

## API References

- [`IgcTooltipComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctooltipcomponent.html)
- [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html)
- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html)
- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html)
- [`IgcCardComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardcomponent.html)
- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html)
- [`IgcBadgeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbadgecomponent.html)
- [`IgcListComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclistcomponent.html)
- [`IgcCategoryChartComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igccategorychartcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

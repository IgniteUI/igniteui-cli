---
title: React Tooltip | Infragistics
_description: The Ignite UI for React Tooltip component provides us with the ability to easily create a tooltip and attach it into an element.
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Tooltip components
_license: MIT
mentionedTypes: ["Tooltip", "PopoverPlacement"]
_tocName: Tooltip
---

# React Tooltip

The Ignite UI for React Tooltip component provides a way to display a tooltip for a specific element. A tooltip is a popup that displays information related to an element, usually when the element receives keyboard focus or when the mouse hovers over it.

## Ignite UI for React Tooltip Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-avatar {
  --ig-size: var(--ig-size-medium);
}
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrAvatar, IgrTooltip } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class TooltipOverview extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="container sample">
        <IgrAvatar id="avatar" shape="circle"
          src="https://dl.infragistics.com/x/img/avatars/10.jpg"
        ></IgrAvatar>
        <IgrTooltip placement="bottom-start" anchor="avatar">
          Her name is Madelyn James
        </IgrTooltip>
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TooltipOverview />);
```


### Getting Started

To start using the [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html), first, you need to install the Ignite UI for React by running the following command:

```cmd
npm install igniteui-react
```

After that, you need to import the [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html) component and its necessary CSS as follows:

```tsx
import { IgrTooltip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

Now you can start with a basic configuration of the React [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html).

```tsx
<IgrTooltip anchor="hover-button">
  Congrats you have hovered the button!
</IgrTooltip>

<IgrButton id="hover-button">Hover me</IgrButton>
```

## Usage

### Tooltip target

To attach a tooltip to the desired element, use the [`anchor`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#anchor) property of the [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html) and set it to the ID of the target element.

```tsx
<IgrButton id="target-button">Hover me</IgrButton>
<IgrTooltip anchor="target-button">
  Congrats you have hovered the button!
</IgrTooltip>
```

You can also specify the target by passing the element instance directly:

```tsx
const anchor = document.querySelector('#hover-button') as IgrButton;
const tooltip = document.querySelector('#tooltip') as IgrTooltip;
tooltip.anchor = anchor;
```

```tsx
<IgrTooltip id="tooltip">
  Congrats you have hovered the button!
</IgrTooltip>
<IgrButton id="hover-button">Hover me</IgrButton>
```

### Tooltip content

The tooltip content is defined by placing custom content between the opening and closing tags of the [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html).

```tsx
<IgrTooltip>
  Congrats you have hovered the button!
</IgrTooltip>
```

Alternatively, to set simple text, you can use the [`message`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#message) property.

```tsx
<IgrTooltip message="This is my custom content here."></IgrTooltip>
```

If you use both approaches (slotted content and the [`message`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#message) property), the slotted content will take priority and the [`message`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#message) value will be ignored.

```tsx
<IgrButton id="target-button">Hover me</IgrButton>
<IgrTooltip anchor="target-button" message="I will be hidden.">
  I will be shown!
</IgrTooltip>
```

In this example, the slotted content (“I will be shown!”) will be displayed instead of the [`message`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#message) property value.

The [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html) content can be more than just simple text. Since the [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html) is a regular element in the markup, you can enhance its content by adding any elements you need and styling them accordingly.

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
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrAvatar, IgrTooltip, IgrIcon, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const location =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/></svg>';

registerIconFromText("location_on", location, "material");

export default class TooltipRich extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="container sample center">
        <div className="map">
          <IgrIcon
            id="location_icon"
            slot="actions"
            collection="material"
            name="location_on"
          ></IgrIcon>
          <IgrTooltip anchor="location_icon" className="locationTooltip">
            <div className="locationTooltipContent">
              <IgrAvatar
                className="logo"
                src="https://dl.infragistics.com/x/img/browsers/ig.png.png"
                shape="square"
              ></IgrAvatar>
              <div>
                <div>Infragistics Inc. HQ</div>
                <div>2 Commerce Dr, Cranbury, NJ 08512, USA</div>
              </div>
            </div>
          </IgrTooltip>
        </div>
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TooltipRich />);
```


### Show/Hide delay settings

If you want to control the delay before showing and hiding the [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html), you can use the [`showDelay`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#showDelay) and [`hideDelay`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#hideDelay) properties. Both properties accept a number value representing time in milliseconds.

```tsx
<IgrTooltip showDelay="600" hideDelay="800">
  Her name is Madelyn James.
</IgrTooltip>
```

> [!NOTE]
> It's important to note that the Tooltip API methods — [`show`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#show), [`hide`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#hide), and [`toggle`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#toggle) — DO NOT take the [`showDelay`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#showDelay) and [`hideDelay`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#hideDelay) properties into account. They act immediately when invoked.

### Placement

The [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html) can also be positioned relative to its target element with ease. All you need to do is use the [`placement`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#placement) property along with one of the `PopoverPlacement` options.

If the [`placement`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#placement) property is not set, the default value is `Bottom`, which places the [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html) below the target element.

Additionally, you can make the [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html) "sticky" using the [`sticky`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#sticky) property, which adds a close button and keeps the [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html) visible until the user closes it manually - either by clicking the close button or pressing the `Esc` key. This behavior overrides the default hover behavior, preventing the [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html) from disappearing when the user stops hovering over the target element.

The [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html) also includes an optional arrow indicator that can be configured via the [`withArrow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#withArrow) property. The arrow visually connects the tooltip to its anchor element and its position automatically adjusts based on the tooltip's [`placement`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#placement).

```tsx
<IgrButton id="target-button">Hover me</IgrButton>
<IgrTooltip anchor="target-button" placement="top-start" sticky withArrow={true}>
  Congrats you have hovered the button!
</IgrTooltip>
```

In the following example, you can see a demonstration of all tooltip placement options, arrow positioning behavior, and the [`sticky`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#sticky) property in action:

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
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrButton, IgrTooltip } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

type PopoverPlacement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "right"
  | "right-start"
  | "right-end"
  | "left"
  | "left-start"
  | "left-end";

export default class TooltipPlacement extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  Positions = ["top", "bottom", "left", "right"].flatMap((each) => [
    each,
    `${each}-start`,
    `${each}-end`,
  ]) as Array<PopoverPlacement>;

  public render(): JSX.Element {
    return (
      <div className="container sample">
        <IgrButton
          variant="outlined"
          id="tooltip-position"
        >Click to trigger all supported placements
        </IgrButton>

        {this.Positions.map((pos) => (
          <IgrTooltip
            anchor="tooltip-position"
            showTriggers="click"
            showDelay={0}
            hideDelay={0}
            sticky={true}
            withArrow={true}
            placement={pos}
            key={pos}
          >
            <div>
              <strong>{pos}</strong>
            </div>
          </IgrTooltip>
        ))}
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TooltipPlacement />);
```


### Triggers

By default, the [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html) is triggered only while hovering over the target element. However, you can change this behavior using the [`showTriggers`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#showTriggers) and [`hideTriggers`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#hideTriggers) properties, which allow you to control when the [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html) appears and disappears. These properties accept event names as values—such as `click`, `focus`, or `keypress`—letting you trigger the [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html) in different scenarios.

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
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrTooltip, IgrButton, IgrInput, IgrCard, IgrCardContent, IgrCardHeader } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class TooltipTriggers extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="container sample">
        <div id="triggers-container">
          <IgrCard>
            <IgrCardHeader>
              <h4 slot="title">Default triggers</h4>
            </IgrCardHeader>
            <IgrCardContent>
              <p>
                Hovering over the button below will display the tooltip using
                its default configuration: it appears on{" "}
                <strong>pointer enter</strong> and hides on{" "}
                <strong>pointer leave</strong> or <strong>click</strong>.
              </p>
              <IgrButton variant="outlined" id="triggers-default">
                Hover over me
              </IgrButton>
              <IgrTooltip anchor="triggers-default">
                I am show on pointer enter and hidden on pointer leave and/or
                click.
              </IgrTooltip>
            </IgrCardContent>
          </IgrCard>

          <IgrCard>
            <IgrCardHeader>
              <h4 slot="title">Focus based</h4>
            </IgrCardHeader>
            <IgrCardContent>
              <p>
                In this instance, the tooltip is bound to show on its anchor
                <strong>focus</strong> and will hide when its anchor is
                <strong>blurred</strong>.
              </p>
              <p>
                Try to navigate with a Tab key to the anchor to see the effect.
              </p>
              <IgrButton variant="outlined" id="triggers-focus-blur">
                Focus me
              </IgrButton>
              <IgrTooltip
                anchor="triggers-focus-blur"
                show-delay="0"
                hide-delay="0"
                show-triggers="focus"
                hide-triggers="blur"
              >
                I am shown on focus and hidden on blur.
              </IgrTooltip>
            </IgrCardContent>
          </IgrCard>

          <IgrCard>
            <IgrCardHeader>
              <h4 slot="title">Same trigger(s) for showing and hiding</h4>
            </IgrCardHeader>
            <IgrCardContent>
              <p>
                The same trigger can be bound to both show and hide the tooltip.
                The button below has its tooltip bound to show/hide on
                <strong>click</strong>.
              </p>
              <IgrButton variant="outlined" id="triggers-click">
                Click
              </IgrButton>
              <IgrTooltip
                show-delay="0"
                hide-delay="0"
                anchor="triggers-click"
                show-triggers="click"
                hide-triggers="click"
              >
                I am show on click and will hide on anchor click.
              </IgrTooltip>
            </IgrCardContent>
          </IgrCard>

          <IgrCard>
            <IgrCardHeader>
              <h4 slot="title">Keyboard interactions</h4>
            </IgrCardHeader>
            <IgrCardContent>
              <p>
                Keyboard interactions are also supported. The button below has
                its tooltip bound to show on a <strong>keypress</strong> and
                hide on a<strong>keypress</strong> or <strong>blur</strong>.
              </p>
              <p>Try it out by focusing the button and pressing a key.</p>
              <IgrButton variant="outlined" id="triggers-keypress">
                Press a key
              </IgrButton>
              <IgrTooltip
                anchor="triggers-keypress"
                show-triggers="keypress"
                hide-triggers="keypress blur"
              >
                I am shown on a keypress and will hide on a keypress or blur.
              </IgrTooltip>
            </IgrCardContent>
          </IgrCard>

          <IgrCard>
            <IgrCardHeader>
              <h4 slot="title">Custom events</h4>
            </IgrCardHeader>
            <IgrCardContent>
              <p>
                The tooltip supports any DOM event, including custom events. Try
                entering a value in the input below, then &quot;commit&quot; it
                by either <strong>blurring</strong> the input or pressing{" "}
                <strong>Enter</strong>.
              </p>
              <IgrInput id="triggers-custom" label="Username"></IgrInput>
              <IgrTooltip anchor="triggers-custom" show-triggers="igcChange">
                Value changed!
              </IgrTooltip>
            </IgrCardContent>
          </IgrCard>
        </div>
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TooltipTriggers />);
```


### Advanced Example

The [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html) integrates seamlessly with other components, allowing you to create advanced tooltips that contain components within them.
In the following example, you can see how we create descriptive tooltips by using the [`IgrList`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlist.html), [`IgrAvatar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html), [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html), [`IgrBadge`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbadge.html), [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html), [`IgrCard`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcard.html) and [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html) components.

```typescript
export class IncomeTaxesItem {
  public constructor(init: Partial<IncomeTaxesItem>) {
    Object.assign(this, init);
  }
  public year: string;
  public revenue: number;
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

    .ig-category-chart {
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
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrList,
  IgrListItem,
  IgrListHeader,
  IgrBadge,
  IgrButton,
  IgrCard,
  IgrAvatar,
  IgrTooltip,
  IgrIcon,
  registerIconFromText,
  IgrCardHeader,
} from "igniteui-react";
import {
  IgrCategoryChartModule,
  IgrCategoryChart,
} from "igniteui-react-charts";
import { IncomeTaxes } from "./IncomeTaxes";
import "igniteui-webcomponents/themes/light/material.css";

IgrCategoryChartModule.register();

const dollarIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>';
const filterIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z"/></svg>';
const linkIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#999999"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/></svg>';
const infoIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#999999"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>';
const blockIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448Z"/></svg>';
const btcIcon = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.339 11.5126C12.339 12.9126 9.93898 12.7486 9.17798 12.7476L9.18298 10.2676C9.94498 10.2686 12.34 10.0526 12.339 11.5126ZM11.82 8.01263C11.82 6.68463 9.82001 6.88363 9.18701 6.88363V9.13263C9.81901 9.13263 11.817 9.28463 11.82 8.01163V8.01263ZM20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10ZM12.952 9.406C13.6673 9.0676 14.0651 8.29005 13.921 7.512C13.8 6.177 12.644 5.728 11.189 5.6V3.749H10.062V5.549C9.762 5.549 9.462 5.549 9.162 5.559V3.745H8.036V5.595C7.792 5.6 7.553 5.604 7.319 5.604V5.6H5.765V6.8C5.765 6.8 6.597 6.785 6.584 6.8C6.89841 6.76025 7.18651 6.98023 7.231 7.294L7.223 12.365C7.20855 12.5849 7.01895 12.7517 6.799 12.738C6.813 12.751 5.98 12.738 5.98 12.738L5.754 14.083C6.308 14.083 7.488 14.083 8.025 14.093V15.966H9.15V14.113C9.459 14.12 9.758 14.123 10.05 14.123V15.967H11.177V14.098C13.072 13.992 14.398 13.517 14.565 11.739C14.6866 11.213 14.581 10.6602 14.274 10.2161C13.967 9.77207 13.487 9.47797 12.952 9.406Z" fill="#DF1B74"/></svg>';

registerIconFromText("dollar", dollarIcon);
registerIconFromText("filter", filterIcon);
registerIconFromText("link", linkIcon);
registerIconFromText("info", infoIcon);
registerIconFromText("block", blockIcon);
registerIconFromText("btc", btcIcon);
export default class TooltipAdvanced extends React.Component<any, any> {
  private chart: IgrCategoryChart;
  private chartRef(r: IgrCategoryChart) {
    this.chart = r;
    this.setState({});
  }

  constructor(props: any) {
    super(props);
    this.chartRef = this.chartRef.bind(this);
  }

  public render(): JSX.Element {
    return (
      <div className="container sample center">
        <IgrCard className="triggerWrapper">
          <IgrCardHeader>
            <h3 slot="title">Containing list</h3>
          </IgrCardHeader>
          <IgrList className="trigger" id="trigger1">
            <IgrListItem>
              <p slot="start">Credits</p>
              <span slot="end">($2.4T)</span>
            </IgrListItem>
          </IgrList>
        </IgrCard>
        <IgrTooltip
          className="list"
          anchor="trigger1"
          placement="bottom"
          hideDelay={0}
          showDelay={0}
        >
          <IgrList>
            <h6>Credits</h6>
            <IgrListItem>
              <IgrIcon name="dollar"></IgrIcon>Amount - 1,678,345
            </IgrListItem>
            <div className="toolsWrapper">
              <IgrListHeader>Tools</IgrListHeader>
              <IgrListItem>
                <IgrIcon name="filter"></IgrIcon>Filter
              </IgrListItem>
              <IgrListItem>
                <IgrIcon name="link"></IgrIcon>Retail Banking
              </IgrListItem>
              <IgrListItem>
                <IgrIcon name="info"></IgrIcon>More Info
              </IgrListItem>
            </div>
          </IgrList>
        </IgrTooltip>
        <IgrCard className="triggerWrapper">
          <IgrCardHeader>
            <h3 slot="title">Containing chart</h3>
          </IgrCardHeader>
          <IgrList className="trigger" id="trigger2">
            <IgrListItem>
              <p slot="start">Individual Income Taxes</p>
              <span slot="end">($2.4T)</span>
            </IgrListItem>
          </IgrList>
        </IgrCard>
        <IgrTooltip
          className="chart"
          anchor="trigger2"
          placement="bottom"
          hideDelay={0}
          showDelay={0}
        >
          <h6>Individual Income Taxes</h6>
          <IgrCategoryChart
            ref={this.chartRef}
            chartType="SplineArea"
            dataSource={this.incomeTaxes}
            includedProperties={["year", "revenue"]}
            yAxisTitle="IFT"
            yAxisTitleLeftMargin="10"
            yAxisTitleRightMargin="5"
            yAxisLabelLeftMargin="0"
            markerTypes="none"
            toolTipType="none"
            isHorizontalZoomEnabled="false"
            isVerticalZoomEnabled="false"
          ></IgrCategoryChart>
          <p className="content">
            In fiscal year (FY) 2024, the largest source of federal revenue was
            Individual Income Taxes (49.3% of total revenue). So far in fiscal
            year 2025, the largest source of federal revenue is Individual
            Income Taxes (50.6% of total revenue).
          </p>
        </IgrTooltip>
        <IgrCard className="triggerWrapper">
          <IgrCardHeader>
            <h3 slot="title">Containing badge</h3>
          </IgrCardHeader>
          <IgrList className="trigger" id="trigger3">
            <IgrListItem>
              <div className="avatarWrapper" slot="start">
                <IgrAvatar
                  id="avatar"
                  src="https://dl.infragistics.com/x/img/avatars/10.jpg"
                  shape="circle"
                ></IgrAvatar>
                <IgrBadge>
                  <IgrIcon name="block"></IgrIcon>
                </IgrBadge>
              </div>
              <p slot="title">Eliza Morales</p>
            </IgrListItem>
          </IgrList>
        </IgrCard>
        <IgrTooltip
          className="employee"
          anchor="trigger3"
          placement="bottom"
          hideDelay={0}
          showDelay={0}
        >
          <div className="avatarWrapper">
            <IgrAvatar
              id="avatar"
              src="https://dl.infragistics.com/x/img/avatars/10.jpg"
              shape="circle"
            ></IgrAvatar>
            <IgrBadge>
              <IgrIcon name="block"></IgrIcon>
            </IgrBadge>
          </div>
          <div className="textWrapper">
            <h6>Eliza Morales</h6>
            <p className="occupation">Software Engineer</p>
            <p className="status">In a meeting</p>
            <p className="availability">Available at 2:00 pm</p>
          </div>
        </IgrTooltip>
        <IgrCard className="triggerWrapper">
          <IgrCardHeader>
            <h3 slot="title">Containing icon</h3>
          </IgrCardHeader>
          <IgrList className="trigger" id="trigger4">
            <IgrListItem>
              <div className="avatarWrapper" slot="start">
                <IgrAvatar
                  id="avatar"
                  src="https://dl.infragistics.com/x/img/avatars/5.jpg"
                  shape="circle"
                ></IgrAvatar>
                <IgrBadge>
                  <IgrIcon name="block"></IgrIcon>
                </IgrBadge>
              </div>
              <p slot="title">Aron Watson</p>
            </IgrListItem>
          </IgrList>
        </IgrCard>
        <IgrTooltip
          className="multiline"
          anchor="trigger4"
          placement="bottom"
          hideDelay={0}
          showDelay={0}
        >
          <IgrIcon name="block"></IgrIcon>
          <p>
            Notifications are silenced while I focus. Please reach out only for
            urgent matters.
          </p>
        </IgrTooltip>
        <IgrCard className="triggerWrapper">
          <IgrCardHeader>
            <h3 slot="title">Containing buttons</h3>
          </IgrCardHeader>
          <IgrList className="trigger" id="trigger5">
            <IgrListItem>
              <div className="headingWrapper" slot="start">
                <IgrIcon slot="start" name="btc"></IgrIcon>
                <h6 slot="title" className="heading">
                  BTC
                </h6>
              </div>
              <p slot="end" className="secondary">
                Daily: + $45
              </p>
            </IgrListItem>
          </IgrList>
        </IgrCard>
        <IgrTooltip
          className="btcBtn"
          anchor="trigger5"
          placement="bottom"
          hideDelay={0}
          showDelay={0}
        >
          <IgrCard className="contentWrapper">
            <div className="titleWrapper">
              <h6>BTC</h6>
              <IgrIcon name="btc"></IgrIcon>
            </div>
            <div className="exchangeWrapper">
              <p className="detail">Exchange Balance</p>
              <p className="subtitle">USD 356.12.45</p>
            </div>
            <div className="assetsWrapper">
              <p className="detail">Assets Balance</p>
              <p className="subtitle">USD 46.28.79</p>
            </div>
          </IgrCard>
          <div className="footerWrapper">
            <IgrButton variant="flat">Deposit</IgrButton>
            <IgrButton variant="flat">Withdraw</IgrButton>
          </div>
        </IgrTooltip>
        <IgrCard className="triggerWrapper">
          <IgrCardHeader>
            <h3 slot="title">Advanced sticky tooltip</h3>
          </IgrCardHeader>
          <IgrList className="trigger" id="trigger6">
            <IgrListItem>
              <div className="headingWrapper" slot="start">
                <IgrIcon slot="start" name="btc"></IgrIcon>
                <h6 slot="title" className="heading">
                  BTC
                </h6>
              </div>
              <p slot="end" className="secondary">
                Daily: + 2,6%
              </p>
            </IgrListItem>
          </IgrList>
        </IgrCard>
        <IgrTooltip
          className="btc"
          anchor="trigger6"
          sticky
          placement="bottom"
          hideDelay={0}
          showDelay={0}
        >
          <IgrCard className="contentWrapper">
            <div className="titleWrapper">
              <h6>BTC</h6>
              <IgrIcon name="btc"></IgrIcon>
            </div>
            <div className="exchangeWrapper">
              <p className="detail">Exchange Balance</p>
              <p className="subtitle">USD 356.12.45</p>
            </div>
            <div className="assetsWrapper">
              <p className="detail">Assets Balance</p>
              <p className="subtitle">USD 46.28.79</p>
            </div>
          </IgrCard>
        </IgrTooltip>
      </div>
    );
  }

  private _incomeTaxes: IncomeTaxes = null;
  public get incomeTaxes(): IncomeTaxes {
    if (this._incomeTaxes == null) {
      this._incomeTaxes = new IncomeTaxes();
    }
    return this._incomeTaxes;
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TooltipAdvanced />);
```


### Additional Properties

Apart from the properties we've already covered, the [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html) component offers a variety of additional properties that allow you to further configure its behavior, position, and appearance.

|Name|Type|Description|
|--|--|--|
| [`open`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#open) | boolean | Determines whether the tooltip is visible. |
| [`withArrow`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#withArrow) | boolean | Determines whether to render an arrow indicator for the tooltip. |
| [`offset`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#offset) | number | Sets the pixel distance between the tooltip and its [`anchor`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#anchor). |

### Methods

In addition to its configurable properties, the [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html) also exposes three methods that you can use:

|Name|Description|
|--|--|
| [`show`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#show) | Displays the tooltip if it’s not already shown. If a target is provided, it sets the target as a transient [`anchor`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#anchor). |
| [`hide`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#hide) | Hides the tooltip if it’s not already hidden. |
| [`toggle`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#toggle) |  Toggles the tooltip between the shown and hidden states. |

## Accessibility & ARIA Support

The [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html) is built with accessibility in mind and includes the following ARIA attributes:

- `role` - When the tooltip is in its default behavior, `role="tooltip"` is applied. If the [`sticky`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html#sticky) property is enabled, the role changes to `status`.
- `inert` - Dynamically toggled based on visibility. When the tooltip is hidden, it becomes inert.
- `aria-atomic` - Set to true, ensuring that the entire tooltip content is announced when it changes.
- `aria-live` - Set to polite, indicating to screen readers that updates should be announced only when the user is idle.

## Styling

The [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html) component exposes two CSS parts that you can use for styling:

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

igc-avatar {
  --ig-size: var(--ig-size-medium);
}
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./Styling.css";
import "./index.css";
import { IgrAvatar, IgrTooltip } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class TooltipStyling extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="container sample">
        <IgrAvatar id="avatar" shape="circle"
          src="https://dl.infragistics.com/x/img/avatars/10.jpg"
        ></IgrAvatar>
        <IgrTooltip placement="bottom-start" anchor="avatar" withArrow={true}>
          Her name is Madelyn James
        </IgrTooltip>
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TooltipStyling />);
```


<div class="divider--half"></div>

## API References

- [`IgrTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtooltip.html)
- [`IgrAvatar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html)
- [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html)
- [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html)
- [`IgrCard`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcard.html)
- [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html)
- [`IgrBadge`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbadge.html)
- [`IgrList`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlist.html)
- [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

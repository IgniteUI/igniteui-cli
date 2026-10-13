---
title: "React Accordion Component | Layouts | Infragistics"
description: "React Accordion is a layout component for organizing expandable and collapsible content panels in a vertical container."
keywords: "React Accordion, accordion component, expandable panels, Ignite UI for React, Infragistics"
license: MIT
last_updated: "2026-07-30"
mentionedTypes: ["Accordion", "ExpansionPanel"]
namespace: Infragistics.Controls
relatedComponents: ["ExpansionPanel"]
llms:
  description: "The Ignite UI for React Accordion helps developers group related content into expandable and collapsible panels inside a vertical layout."
_tocName: Accordion
---
# Accordion Component

The Ignite UI for React Accordion is a layout component for organizing expandable content panels in a single vertical container.

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
```tsx
import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrAccordion,
    IgrCheckboxChangeEventArgs,
    IgrExpansionPanel,
    IgrSwitch
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function AccordionOverview() {
    const accordionRef = useRef<IgrAccordion>(null);

    const switchChange = (e: IgrCheckboxChangeEventArgs) => {
        if (accordionRef.current) {
            accordionRef.current.singleExpand = e.detail.checked;
        }
    };

    return (
        <div className="accordion-sample">
            <div className="accordion-content">
                <div className="accordion-toolbar">
                    <IgrSwitch onChange={switchChange}>
                        <span>Single Expand</span>
                    </IgrSwitch>
                </div>

                <IgrAccordion ref={accordionRef}>
                    <IgrExpansionPanel open>
                        <span slot="title">Account</span>
                        <span slot="subtitle">Profile and security settings</span>
                        <p>Update your profile details, password, and sign-in preferences.</p>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel>
                        <span slot="title">Notifications</span>
                        <span slot="subtitle">Email and product updates</span>
                        <p>Choose which notifications you receive and how often they are delivered.</p>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel>
                        <span slot="title">Billing</span>
                        <span slot="subtitle">Payment and invoice settings</span>
                        <p>Manage payment methods, billing contacts, and invoice delivery options.</p>
                    </IgrExpansionPanel>
                </IgrAccordion>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AccordionOverview />);
```

## Anatomy

The accordion structure consists of an accordion container with one or more expansion panel children.

**React Accordion anatomy anatomy:** The accordion anatomy labels the accordion host and child expansion panel structure.

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

Use the accordion with the Ignite UI for React version installed in your application. Complete the shared [Getting Started](../general-getting-started.md) topic before adding framework-specific imports or registration.

Import the React wrappers and the theme stylesheet before you render the accordion.

```tsx
import { IgrAccordion, IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

## Usage

Build the accordion by placing one or more [`IgrExpansionPanel`](mcp:get_api_reference?platform=react&component=IgrExpansionPanel) components inside an [`IgrAccordion`](mcp:get_api_reference?platform=react&component=IgrAccordion) container.

### Single Expansion

Set [`SingleExpand`](mcp:get_api_reference?platform=react&component=IgrAccordion&member=singleExpand) to switch between one-open-panel behavior and multiple-open-panel behavior.

```tsx
<IgrAccordion singleExpand={true}>
  <IgrExpansionPanel>
    <span slot="title">Title Panel 1</span>
    <p>Content Panel 1</p>
  </IgrExpansionPanel>
  <IgrExpansionPanel>
    <span slot="title">Title Panel 2</span>
    <p>Content Panel 2</p>
  </IgrExpansionPanel>
</IgrAccordion>
```

### Programmatic Expansion

Use [`HideAll`](mcp:get_api_reference?platform=react&component=IgrAccordion&member=hideAll) and [`ShowAll`](mcp:get_api_reference?platform=react&component=IgrAccordion&member=showAll) to collapse or expand all available panels programmatically.

**Note:** 
Calling [`ShowAll`](mcp:get_api_reference?platform=react&component=IgrAccordion&member=showAll) expands all panels, even when [`SingleExpand`](mcp:get_api_reference?platform=react&component=IgrAccordion&member=singleExpand) is `true`.


```tsx
const accordionRef = useRef<IgrAccordion>(null);

return (
  <>
    <IgrButton onClick={() => accordionRef.current?.showAll()}>Show All</IgrButton>
    <IgrButton onClick={() => accordionRef.current?.hideAll()}>Hide All</IgrButton>

    <IgrAccordion ref={accordionRef}>
      <IgrExpansionPanel>
        <span slot="title">Title Panel 1</span>
        <p>Content Panel 1</p>
      </IgrExpansionPanel>
      <IgrExpansionPanel>
        <span slot="title">Title Panel 2</span>
        <p>Content Panel 2</p>
      </IgrExpansionPanel>
    </IgrAccordion>
  </>
);
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
```tsx
import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrAccordion, IgrButton, IgrExpansionPanel } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function AccordionProgrammaticExpansion() {
  const accordionRef = useRef<IgrAccordion>(null);

  return (
    <div className="accordion-sample">
      <div className="accordion-content">
        <div className="accordion-toolbar">
          <IgrButton
            className="action-button"
            variant="contained"
            onClick={() => accordionRef.current?.showAll()}
          >
            <span>Show All</span>
          </IgrButton>
          <IgrButton
            className="action-button"
            variant="contained"
            onClick={() => accordionRef.current?.hideAll()}
          >
            <span>Hide All</span>
          </IgrButton>
        </div>

        <IgrAccordion ref={accordionRef}>
          <IgrExpansionPanel open>
            <span slot="title">Billing</span>
            <span slot="subtitle">Invoices and payment settings</span>
            <p>
              Review invoices, update payment methods, and manage billing
              contacts.
            </p>
          </IgrExpansionPanel>

          <IgrExpansionPanel open>
            <span slot="title">Security</span>
            <span slot="subtitle">Password and access controls</span>
            <p>
              Configure password rules, multi-factor authentication, and
              recovery options.
            </p>
          </IgrExpansionPanel>

          <IgrExpansionPanel open>
            <span slot="title">Notifications</span>
            <span slot="subtitle">Product updates and account alerts</span>
            <p>
              Choose which product updates and account alerts are sent to your
              team.
            </p>
          </IgrExpansionPanel>
        </IgrAccordion>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AccordionProgrammaticExpansion />);
```

### Customize Panel Content

Customize the panel headers and content through the underlying [`IgrExpansionPanel`](mcp:get_api_reference?platform=react&component=IgrExpansionPanel) slots.

```tsx
<IgrAccordion>
  <IgrExpansionPanel open>
    <span slot="title">Billing</span>
    <span slot="subtitle">Payment and invoice settings</span>
    <p>Update payment methods, billing contacts, and invoice delivery options.</p>
  </IgrExpansionPanel>
</IgrAccordion>
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
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrAccordion,
  IgrCheckbox,
  IgrCheckboxChangeEventArgs,
  IgrDateTimeInput,
  IgrExpansionPanel,
  IgrIcon,
  IgrRadio,
  IgrRadioGroup,
  IgrRating,
  IgrRangeSlider,
  IgrRadioChangeEventArgs,
  IgrRangeSliderValueEventArgs,
  IgrComponentDateValueChangedEventArgs,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

type Category = { checked: boolean; type: string };

const ratingOptions = [2, 3, 4, 5];

const clearIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'><path d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /></svg>";
const clockIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'><path d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' /></svg>";

export default class AccordionCustomization extends React.Component<any, any> {
  private categories = [
    { checked: false, type: "Bike" },
    { checked: false, type: "Motorcycle" },
    { checked: false, type: "Car" },
    { checked: false, type: "Taxi" },
    { checked: false, type: "Public Transport" },
  ];

  private dateTimeInput: IgrDateTimeInput;
  private transportationPanel: IgrExpansionPanel;

  constructor(props: any) {
    super(props);
    this.state = {
      categories: this.categories,
      cost: { lower: 200, upper: 800 },
      rating: "",
      time: "Any time",
    };

    this.categoriesChange = this.categoriesChange.bind(this);
    this.costRangeChange = this.costRangeChange.bind(this);
    this.ratingChange = this.ratingChange.bind(this);
    this.timeChange = this.timeChange.bind(this);
    this.clearTime = this.clearTime.bind(this);
    this.dateTimeInputRef = this.dateTimeInputRef.bind(this);
    this.transportationPanelRef = this.transportationPanelRef.bind(this);

    registerIconFromText("clear", clearIcon, "material");
    registerIconFromText("clock", clockIcon, "material");
  }

  public componentDidMount() {
    if (this.transportationPanel) {
      this.transportationPanel.open = true;
    }
  }

  public render(): JSX.Element {
    const selectedCategories = this.state.categories
      .filter((c: Category) => c.checked)
      .map((c: Category) => c.type)
      .join(", ");

    return (
      <div className="accordion-sample">
        <div className="accordion-content">
          <IgrAccordion>
            <IgrExpansionPanel ref={this.transportationPanelRef}>
              <span slot="title">
                Transportation{selectedCategories && `: ${selectedCategories}`}
              </span>
              <span slot="subtitle">Choose how you want to travel</span>
              <span>
                <p className="panel-description">
                  Select one or more transportation options for your trip.
                </p>
                <div className="categories-container">
                  {this.state.categories.map((c: Category) => {
                    return (
                      <IgrCheckbox
                        className="category-option"
                        key={"checkbox-" + c.type}
                        onChange={(e: IgrCheckboxChangeEventArgs) =>
                          this.categoriesChange(e, c.type)
                        }
                      >
                        <span>{c.type}</span>
                      </IgrCheckbox>
                    );
                  })}
                </div>
              </span>
            </IgrExpansionPanel>
            <IgrExpansionPanel>
              <span slot="title">
                Budget: ${this.state.cost.lower} - ${this.state.cost.upper}
              </span>
              <span slot="subtitle">Set the price range</span>
              <span>
                <p className="panel-description">
                  Adjust the minimum and maximum cost for available options.
                </p>
                <div className="range-summary">
                  <span>${this.state.cost.lower}</span>
                  <span>${this.state.cost.upper}</span>
                </div>
                <IgrRangeSlider
                  className="cost-slider"
                  min={0}
                  max={1000}
                  lower={this.state.cost.lower}
                  upper={this.state.cost.upper}
                  onChange={this.costRangeChange}
                ></IgrRangeSlider>
              </span>
            </IgrExpansionPanel>
            <IgrExpansionPanel>
              <span slot="title">
                Minimum Rating{this.state.rating && ": "}
                {this.state.rating}
              </span>
              <span slot="subtitle">Filter by review score</span>
              <span>
                <p className="panel-description">
                  Choose the lowest rating you want to include in the results.
                </p>
                <IgrRadioGroup className="rating-options">
                  {ratingOptions.map((rating) => {
                    return (
                      <IgrRadio
                        className="rating-option"
                        key={`${rating}star`}
                        name="rating"
                        value={rating.toString()}
                        onChange={this.ratingChange}
                      >
                        <IgrRating
                          label={`${rating} star${
                            rating > 1 ? "s" : ""
                          } or more`}
                          max={5}
                          value={rating}
                          className="rating-control size-small"
                          readOnly={true}
                        ></IgrRating>
                      </IgrRadio>
                    );
                  })}
                </IgrRadioGroup>
              </span>
            </IgrExpansionPanel>
            <IgrExpansionPanel>
              <span slot="title">
                Arrival Time
                {this.state.time !== "Any time" && `: ${this.state.time}`}
              </span>
              <span slot="subtitle">Set the latest arrival time</span>
              <span>
                <p className="panel-description">
                  Pick the latest acceptable arrival time for your trip.
                </p>
                <IgrDateTimeInput
                  className="time-input size-small"
                  inputFormat="hh:mm tt"
                  label="Arrive before"
                  ref={this.dateTimeInputRef}
                  onChange={this.timeChange}
                >
                  <span slot="prefix">
                    <IgrIcon name="clock" collection="material" />
                  </span>
                  <span slot="suffix" onClick={this.clearTime}>
                    <IgrIcon name="clear" collection="material" />
                  </span>
                </IgrDateTimeInput>
              </span>
            </IgrExpansionPanel>
          </IgrAccordion>
        </div>
      </div>
    );
  }

  public categoriesChange(e: IgrCheckboxChangeEventArgs, type: string) {
    const categoryIndex = this.categories.findIndex((c) => c.type === type);
    if (categoryIndex === -1) {
      return;
    }
    let categoriesCopy = this.state.categories;
    categoriesCopy[categoryIndex].checked = e.detail.checked;
    this.setState({
      categories: categoriesCopy,
    });
  }

  public costRangeChange(e: IgrRangeSliderValueEventArgs) {
    this.setState({
      cost: { lower: e.detail.lower, upper: e.detail.upper },
    });
  }

  public ratingChange(e: IgrRadioChangeEventArgs) {
    if (!e.detail.value) {
      return;
    }
    this.setState({
      rating: `${+e.detail.value} star${
        +e.detail.value > 1 ? "s" : ""
      } or more`,
    });
  }

  public timeChange(e: IgrComponentDateValueChangedEventArgs) {
    const s = e.target as IgrDateTimeInput;
    const result =
      s.value !== null
        ? e.detail.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        : "Any time";
    this.setState({
      time: result,
    });
  }

  public clearTime() {
    this.dateTimeInput.clear();
    this.setState({
      time: "Any time",
    });
  }

  public dateTimeInputRef(input: IgrDateTimeInput) {
    if (!input) {
      return;
    }
    this.dateTimeInput = input;
  }

  public transportationPanelRef(panel: IgrExpansionPanel) {
    if (!panel) {
      return;
    }
    this.transportationPanel = panel;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AccordionCustomization />);
```

### Nest Accordions

Nest an accordion inside an expansion panel when you need a second level of grouped disclosure.

```tsx
<IgrAccordion>
  <IgrExpansionPanel open>
    <span slot="title">Workspace Settings</span>
    <IgrAccordion>
      <IgrExpansionPanel>
        <span slot="title">Notifications</span>
        <p>Configure email and product notification preferences.</p>
      </IgrExpansionPanel>
    </IgrAccordion>
  </IgrExpansionPanel>
</IgrAccordion>
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
```tsx
import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrAccordion,
  IgrCheckboxChangeEventArgs,
  IgrExpansionPanel,
  IgrSwitch,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function AccordionNestedScenario() {
  const outerAccordionRef = useRef<IgrAccordion>(null);
  const innerAccordionRef = useRef<IgrAccordion>(null);

  const switchChange = (e: IgrCheckboxChangeEventArgs) => {
    const { checked } = e.detail;

    if (outerAccordionRef.current) {
      outerAccordionRef.current.singleExpand = checked;
    }

    if (innerAccordionRef.current) {
      innerAccordionRef.current.singleExpand = checked;
    }
  };

  return (
    <div className="accordion-sample">
      <div className="accordion-content">
        <div className="accordion-toolbar">
          <IgrSwitch onChange={switchChange}>
            <span>Single Expand</span>
          </IgrSwitch>
        </div>

        <IgrAccordion ref={outerAccordionRef}>
          <IgrExpansionPanel open>
            <span slot="title">Workspace Settings</span>
            <span slot="subtitle">
              Nested account, access, and billing options
            </span>

            <IgrAccordion ref={innerAccordionRef}>
              <IgrExpansionPanel open>
                <span slot="title">Profile</span>
                <span slot="subtitle">Name, photo, and contact details</span>
                <p>
                  Update the public information shown to other workspace
                  members.
                </p>
              </IgrExpansionPanel>

              <IgrExpansionPanel>
                <span slot="title">Security</span>
                <span slot="subtitle">Password and sign-in preferences</span>
                <p>
                  Review active sessions, change your password, and configure
                  sign-in requirements.
                </p>
              </IgrExpansionPanel>

              <IgrExpansionPanel>
                <span slot="title">Notifications</span>
                <span slot="subtitle">Email and product updates</span>
                <p>
                  Choose the messages you receive for comments, assignments, and
                  releases.
                </p>
              </IgrExpansionPanel>
            </IgrAccordion>
          </IgrExpansionPanel>

          <IgrExpansionPanel>
            <span slot="title">Team Access</span>
            <span slot="subtitle">Members, roles, and permissions</span>
            <p>
              Invite teammates, assign roles, and review workspace permissions.
            </p>
          </IgrExpansionPanel>

          <IgrExpansionPanel>
            <span slot="title">Billing</span>
            <span slot="subtitle">Plan, invoices, and payment method</span>
            <p>
              Manage subscription details, billing contacts, and invoice
              delivery.
            </p>
          </IgrExpansionPanel>
        </IgrAccordion>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AccordionNestedScenario />);
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

The accordion exposes container-level controls; panel-specific state is configured on each [`IgrExpansionPanel`](mcp:get_api_reference?platform=react&component=IgrExpansionPanel).

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| [`SingleExpand`](mcp:get_api_reference?platform=react&component=IgrAccordion&member=singleExpand) | `boolean` | `false` | Controls whether one or multiple panels can stay expanded at the same time. |
| [`Panels`](mcp:get_api_reference?platform=react&component=IgrAccordion&member=panels) | [`ExpansionPanel[]`](mcp:get_api_reference?platform=react&component=IgrExpansionPanel) | n/a | Returns the collection of child expansion panels in the accordion. |

## Methods

Use the accordion methods when you need to change panel state from your code.

| Name | Description |
| -- | -- |
| [`ShowAll`](mcp:get_api_reference?platform=react&component=IgrAccordion&member=showAll) | Expands all available panels. |
| [`HideAll`](mcp:get_api_reference?platform=react&component=IgrAccordion&member=hideAll) | Collapses the available panels. |

## Styling

Style the React accordion with CSS parts and Ignite UI theme variables.

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
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrAccordion, IgrExpansionPanel } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function AccordionStyling() {
  return (
    <div className="accordion-sample">
      <div className="accordion-content">
        <IgrAccordion>
          <IgrExpansionPanel open>
            <span slot="title">Getting Started</span>
            <span slot="subtitle">Setup and onboarding</span>
            <p>
              Find installation steps, project setup guidance, and resources for
              building your first application.
            </p>
          </IgrExpansionPanel>

          <IgrExpansionPanel>
            <span slot="title">Billing</span>
            <span slot="subtitle">Invoices and payment methods</span>
            <p>
              Review invoices, update payment methods, and manage billing
              contacts for your account.
            </p>
          </IgrExpansionPanel>

          <IgrExpansionPanel>
            <span slot="title">Security</span>
            <span slot="subtitle">Access and authentication</span>
            <p>
              Configure password rules, multi-factor authentication, and
              recovery options for your team.
            </p>
          </IgrExpansionPanel>
        </IgrAccordion>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AccordionStyling />);
```

Style the accordion by targeting the parts exposed by its child [`IgrExpansionPanel`](mcp:get_api_reference?platform=react&component=IgrExpansionPanel) components.

### Styling Variables

Use Ignite UI for React theme CSS variables as values when styling the expansion panel parts.

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
@source "./index.tsx";

.accordion-tailwind-sample {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrAccordion, IgrExpansionPanel } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const panelClassName = [
  "rounded",
  "bg-[var(--ig-gray-50)]",
  "text-[var(--ig-gray-900)]",
  "[&::part(header)]:bg-[var(--ig-gray-100)]",
  "[&[open]::part(header)]:bg-[var(--ig-primary-50)]",
  "[&::part(indicator)]:text-[var(--ig-primary-500)]",
  "[&::part(title)]:font-semibold",
  "[&::part(title)]:text-[var(--ig-gray-900)]",
  "[&[open]::part(title)]:text-[var(--ig-primary-700)]",
  "[&[open]::part(subtitle)]:text-[var(--ig-primary-700)]",
  "[&::part(content)]:text-[var(--ig-gray-700)]",
].join(" ");

export default function AccordionTailwindStyling() {
  return (
    <div className="accordion-tailwind-sample">
      <div className="accordion-tailwind-content box-border mx-auto w-[min(720px,100%)] p-6">
        <IgrAccordion className="block rounded border border-[var(--ig-gray-300)]">
          <IgrExpansionPanel className={panelClassName} open>
            <span slot="title">Getting Started</span>
            <span slot="subtitle">Setup and onboarding</span>
            <p>
              Find installation steps, project setup guidance, and resources for
              building your first application.
            </p>
          </IgrExpansionPanel>

          <IgrExpansionPanel className={panelClassName}>
            <span slot="title">Billing</span>
            <span slot="subtitle">Invoices and payment methods</span>
            <p>
              Review invoices, update payment methods, and manage billing
              contacts for your account.
            </p>
          </IgrExpansionPanel>

          <IgrExpansionPanel className={panelClassName}>
            <span slot="title">Security</span>
            <span slot="subtitle">Access and authentication</span>
            <p>
              Configure password rules, multi-factor authentication, and
              recovery options for your team.
            </p>
          </IgrExpansionPanel>
        </IgrAccordion>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AccordionTailwindStyling />);
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
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Down Arrow</kbd> | Opens all enabled panels. If [`SingleExpand`](mcp:get_api_reference?platform=react&component=IgrAccordion&member=singleExpand) is `true`, opens only the focused panel. |
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

Infragistics documents Ignite UI for React accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic. The accordion's compliance evidence comes from the child [`IgrExpansionPanel`](mcp:get_api_reference?platform=react&component=IgrExpansionPanel) components that provide the interactive headers and regions.

| Criterion | How the component complies |
| -- | -- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The accordion supports keyboard commands for moving focus and opening or closing panels. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order) | Focus moves through enabled panels in sequence, with shortcuts for jumping to the first and last panel. |

Your responsibilities:

- Provide panel titles that describe the content behind each disclosure area.
- Preserve a logical focus order in the surrounding page layout.
- Validate any custom styling against your application's contrast and focus-indicator requirements.

## API References

[`IgrAccordion`](mcp:get_api_reference?platform=react&component=IgrAccordion)
[`IgrExpansionPanel`](mcp:get_api_reference?platform=react&component=IgrExpansionPanel)

## Dependencies

The accordion depends on [`IgrExpansionPanel`](mcp:get_api_reference?platform=react&component=IgrExpansionPanel) for its visible sections.

The accordion also depends on the shared theme stylesheet for its default appearance.

## Additional Resources

Use these resources to continue with Ignite UI for React Accordion support, source, and related layout guidance.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

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
  


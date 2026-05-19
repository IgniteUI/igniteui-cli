---
title: React Accordion | Accordion | Infragistics
_description: Accordion is used to build vertical expandable panels in accordion menu.
_keywords: React Accordion, Ignite UI for React, Infragistics
_license: MIT
mentionedTypes: ["Accordion", "Infragistics.Controls.Layouts.Implementation.ExpansionPanel"]
namespace: Infragistics.Controls
_tocName: Accordion
---

# React Accordion Overview

The Ignite UI for React Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page. It offers keyboard navigation and API to control the underlying panels' expansion state.

Users are enabled to interact and navigate among a list of items, such as thumbnails or labels. Each one of those items can be toggled (expanded or collapsed) in order to reveal the containing information. Depending on the configuration, there can be a single or multiple expanded items at a time.

## React Accordion Example

The following is a basic Ignite UI for React Accordion example of a FAQ section. It operates as an accordion, with individually working sections. You can toggle each text block with a single click, while expanding multiple panels at the same time. This way you can read information more easily, without having to go back and forth between an automatically expanding and collapsing panel, which conceals the previously opened section every time.

In it, you can see how to define an accordion and its expansion panels. The sample also demonstrates the two types of expansion behavior. The switch button sets the [`singleExpand`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igraccordion.html#singleExpand) property to toggle between single and multiple branches to be expanded at a time.

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
```tsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './AccordionOverview.css';
import {
    IgrAccordion, IgrExpansionPanel, IgrSwitch,
    IgrCheckboxChangeEventArgs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function AccordionOverview() {

    const [singleExpand, setSingleExpand] = useState<boolean>(false);

    const switchChange = (e: IgrCheckboxChangeEventArgs) => {
        setSingleExpand(e.detail.checked);
    }
  
    return (
        <div id="root">
            <IgrSwitch onChange={switchChange}><span>Single Expand</span></IgrSwitch>
            <div className="sample-wrapper">
                <IgrAccordion singleExpand={singleExpand}>
                    <IgrExpansionPanel>
                        <h1 slot="title">What has changed about subscription and pricing model?</h1>
                        <span>We have moved to a subscription-based pricing model for all our developer tools. This makes it easier
                            for you to manage your license subscriptions and allows us to provide a better level of service for you. We
                            updated our pricing and packages to provide you with flexible options and the best value. This includes Ignite UI
                            (formerly Ignite UI for JavaScript) which includes all of our JavaScript framework components for web development,
                            including: Angular, ASP.NET (Core and MVC), Blazor, JQuery, React and Web Components, as well as Infragistics Professional,
                            Infragistics Ultimate, our Ultimate UI products. We also offer multi-year subscriptions options with a built-in discount,
                            so you can see the value up front. With these updates we are confident that we are providing the best platforms and the best
                            price.</span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel>
                        <h1 slot="title">Who will the updated changes impact?</h1>
                        <span>The license updates will impact all new and current customers using Ignite UI, Infragistics Professional and
                            Infragistics Ultimate. Specifically, we have also made updates to our product and packaging for Ignite UI for JavaScript,
                            Ignite UI for Angular, Ignite UI for React and Ignite UI for Web components. For more information, please refer to this
                            blog: Announcement: Changes to Ignite UI Product & Packaging The pricing has been updated for all products and packages.
                            So, all new or additional licenses will be sold based on our new pricing and packages. All existing license agreements will
                            be honored and renewed based upon the current agreement.</span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel>
                        <h1 slot="title">What is the difference between your old model and your current subscription model for Ignite UI?</h1>
                        <span>For Ignite UI customers, we are moving away from NPM for licensed packages. The current NPM packages will be replaced with
                            packages that include a “Trial Version” watermark. Licensed packages for Ignite UI will be available from our cloud hosted ProGet
                            server. For more information, please refer to this article: Moving from Trial to Licensed Ignite UI NPM Packages</span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel>
                        <h1 slot="title">What happens if I don&apos;t renew my subscription?</h1>
                        <span>Any unlicensed or trial versions of Ignite UI for Angular, React and Web Components will now include this watermark.</span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel>
                        <h1 slot="title">If I don&apos;t renew my subscription will I still have access to previous versions of Infragistics products?</h1>
                        <span>Any version of Infragistics software which you have downloaded can continue to be used perpetually. Access to download any new or
                            previous versions through our customer portal and package feeds will require maintaining an active subscription by continuing
                            to renew it.</span>
                    </IgrExpansionPanel>
                </IgrAccordion>
            </div>
        </div>
        
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AccordionOverview />);
```

<div class="divider--half"></div>

## Getting Started with React Accordion

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrAccordion`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igraccordion.html) and the [`IgrExpansionPanel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrexpansionpanel.html) and its necessary CSS, like so:

```tsx
import {
  IgrAccordion,
  IgrExpansionPanel,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

```

Before using the [`IgrAccordion`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igraccordion.html), you need to register it as follows:

Now you can start with a basic configuration of the [`IgrAccordion`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igraccordion.html) and its panels.

## Usage

Each section in the React Accordion Component is defined using an React Expansion Panel.
Panels provide `Disabled` and `Open` properties, which give you the ability to configure the states of the panel as per your requirement.

### Declaring an Accordion

The accordion wraps all expansion panels declared inside it.

```tsx
<IgrAccordion singleExpand={true}>
  <IgrExpansionPanel>
    <div slot="title">Title Panel 1</div>
    <div>Content Panel 1</div>
  </IgrExpansionPanel>
  <IgrExpansionPanel>
    <div slot="title">Title Panel 2</div>
    <div>Content Panel 2</div>
  </IgrExpansionPanel>
</IgrAccordion>
```

As demonstrated above, the [`singleExpand`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igraccordion.html#singleExpand)property gives you the ability to set whether single or multiple panels can be expanded at a time.

By using the [`hideAll`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igraccordion.html#hideAll) and [`showAll`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igraccordion.html#showAll) methods you can respectively collapse and expand all [`IgrExpansionPanel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrexpansionpanel.html)s of the [`IgrAccordion`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igraccordion.html) programmatically.

> [!Note]
> If [`singleExpand`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igraccordion.html#singleExpand) property is set to **true** calling [`showAll`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igraccordion.html#showAll) method would expand only the focused panel.

### React Accordion Customization Example

With the React Accordion, you can customize the header and content panel's appearance.

The sample below demonstrates how elaborate filtering options can be implemented using the built-in slots of the [`IgrExpansionPanel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrexpansionpanel.html).

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
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./AccordionCustomization.css";
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

  constructor(props: any) {
    super(props);
    this.state = {
      categories: this.categories,
      cost: { lower: 200, upper: 800 },
      rating: "",
      time: "Time",
    };

    this.categoriesChange = this.categoriesChange.bind(this);
    this.costRangeChange = this.costRangeChange.bind(this);
    this.ratingChange = this.ratingChange.bind(this);
    this.timeChange = this.timeChange.bind(this);
    this.clearTime = this.clearTime.bind(this);
    this.dateTimeInputRef = this.dateTimeInputRef.bind(this);

    registerIconFromText("clear", clearIcon, "material");
    registerIconFromText("clock", clockIcon, "material");
  }

  public render(): JSX.Element {
    return (
      <div id="root">
        <div className="sample-wrapper">
          <IgrAccordion>
            <IgrExpansionPanel>
              <h1 slot="title">
                Categories
                {this.state.categories.some((c: Category) => c.checked) && ": "}
                {this.state.categories
                  .filter((c: Category) => c.checked)
                  .map((c: Category) => c.type)
                  .join(", ")}
              </h1>
              <span>
                <div className="categories-container">
                  {this.state.categories.map((c: Category) => {
                    return (
                      <IgrCheckbox
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
              <h1 slot="title">
                Cost: $<span id="lowerCost">{this.state.cost.lower}</span> to $
                <span id="upperCost">{this.state.cost.upper}</span>
              </h1>
              <span>
                <IgrRangeSlider
                  min={0}
                  max={1000}
                  lower={this.state.cost.lower}
                  upper={this.state.cost.upper}
                  onChange={this.costRangeChange}
                ></IgrRangeSlider>
              </span>
            </IgrExpansionPanel>
            <IgrExpansionPanel>
              <h1 slot="title">
                Rating{this.state.rating && ": "}
                {this.state.rating}
              </h1>
              <span>
                <IgrRadioGroup alignment="horizontal">
                  {[1, 2, 3, 4].map((rating) => {
                    return (
                      <IgrRadio
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
                          value={rating + 0.5}
                          className="size-small"
                          readOnly={true}
                        ></IgrRating>
                      </IgrRadio>
                    );
                  })}
                </IgrRadioGroup>
              </span>
            </IgrExpansionPanel>
            <IgrExpansionPanel>
              <h1 slot="title">
                {this.state.time}
              </h1>
              <span>
                <IgrDateTimeInput
                  className="size-small"
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
        ? `Arrive before ${e.detail.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}`
        : "Time";
    this.setState({
      time: result,
    });
  }

  public clearTime() {
    this.dateTimeInput.clear();
    this.setState({
      time: "Time",
    });
  }

  public dateTimeInputRef(input: IgrDateTimeInput) {
    if (!input) {
      return;
    }
    this.dateTimeInput = input;
  }
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AccordionCustomization />);
```

<div class="divider--half"></div>

### Nested React Accordions Scenario

In the following React Accordion example is created a complex FAQ section in order to illustrate how you can go about this common application scenario. In the sample nested [`IgrAccordion`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igraccordion.html) is achieved by adding an accordion inside an expansion panel.

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
```tsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './AccordionNestedScenario.css';
import {
    IgrAccordion, IgrExpansionPanel, IgrSwitch,
    IgrCheckboxChangeEventArgs
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function AccordionNestedScenario() {

    const [singleExpand, setSingleExpand] = useState<boolean>(false);
    
    const switchChange = (e: IgrCheckboxChangeEventArgs) => {
        setSingleExpand(e.detail.checked);
    }

    return (
        <div id="root">
            <IgrSwitch onChange={switchChange}><span>Single Expand</span></IgrSwitch>
            <div className="sample-wrapper">
                <IgrAccordion singleExpand={singleExpand}>
                    <IgrExpansionPanel>
                        <h1 slot="title">What has changed about subscription and pricing model?</h1>
                        <span>We have moved to a subscription-based pricing model for all our developer tools. This makes it easier
                            for you to manage your license subscriptions and allows us to provide a better level of service for you. We
                            updated our pricing and packages to provide you with flexible options and the best value. This includes Ignite UI
                            (formerly Ignite UI for JavaScript) which includes all of our JavaScript framework components for web development,
                            including: Angular, ASP.NET (Core and MVC), Blazor, JQuery, React and Web Components, as well as Infragistics Professional,
                            Infragistics Ultimate, our Ultimate UI products. We also offer multi-year subscriptions options with a built-in discount,
                            so you can see the value up front. With these updates we are confident that we are providing the best platforms and the best
                            price.</span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel>
                        <h1 slot="title">Who will the updated changes impact?</h1>
                        <span>The license updates will impact all new and current customers using Ignite UI, Infragistics Professional and
                            Infragistics Ultimate. Specifically, we have also made updates to our product and packaging for Ignite UI for JavaScript,
                            Ignite UI for Angular, Ignite UI for React and Ignite UI for Web components. For more information, please refer to this
                            blog: Announcement: Changes to Ignite UI Product & Packaging The pricing has been updated for all products and packages.
                            So, all new or additional licenses will be sold based on our new pricing and packages. All existing license agreements will
                            be honored and renewed based upon the current agreement.</span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel>
                        <h1 slot="title">What is the difference between your old model and your current subscription model for Ignite UI?</h1>
                        <span>For Ignite UI customers, we are moving away from NPM for licensed packages. The current NPM packages will be replaced with
                            packages that include a “Trial Version” watermark. Licensed packages for Ignite UI will be available from our cloud hosted ProGet
                            server. For more information, please refer to this article: Moving from Trial to Licensed Ignite UI NPM Packages</span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel>
                        <h1 slot="title">Common questions about renewal.</h1>
                        <span>
                            <IgrAccordion>
                                <IgrExpansionPanel>
                                    <h1 slot="title">What happens if I don&apos;t renew my subscription?</h1>
                                    <span>Any unlicensed or trial versions of Ignite UI for Angular, React and Web Components will now include this watermark.</span>
                                </IgrExpansionPanel>
                                <IgrExpansionPanel>
                                    <h1 slot="title">If I don&apos;t renew my subscription will I still have access to previous versions of Infragistics products?</h1>
                                    <span>Any version of Infragistics software which you have downloaded can continue to be used perpetually. Access to download any new or
                                        previous versions through our customer portal and package feeds will require maintaining an active subscription by continuing
                                        to renew it.</span>
                                </IgrExpansionPanel>
                                <IgrExpansionPanel>
                                    <h1 slot="title">Will I be automatically charged for my renewal/ Can I be automatically charged for renewal?</h1>
                                    <span>Any new subscriptions purchased online, via our eCommerce system, will renew automatically. Subscription renewal can be canceled,
                                        at any time, before the next automatic renewal date. Subscriptions purchased directly from Infragistics or Infragistics&apos; partners are
                                        subject to the renewal terms that were agreed upon as part of that purchase.</span>
                                </IgrExpansionPanel>
                            </IgrAccordion>
                        </span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel>
                        <h1 slot="title">I split my work across two computers. Can I install on both using my single-user license?</h1>
                        <span>The Infragistics Ultimate license is tied to the user, and not the computer. That means you&apos;re welcome to install and use Ignite UI,
                            Infragistics Professional, and Infragistics Ultimate on any computer you use. However, if we notice a large number of activations using the
                            same license, we may contact you to verify this behavior.</span>
                    </IgrExpansionPanel>
                    <IgrExpansionPanel>
                        <h1 slot="title">I used up my trial for an earlier version of Infragistics Ultimate. Can I start a new trial when a major version is released?</h1>
                        <span>Yes! If you have tried a previous version in the past, and used up your 30-day trial, you can try the next major version for another 30 days!
                            You can do this in the following two ways:
                            <ul>
                                <li>If you have days remaining in your 30-day trial period for the current version (e.g., the
                                    Version 15.1 Volume Release), use the Check for Update option inside the Platform Installer or
                                    your account. You will be able to start a fresh trial for the next major version (e.g., 20.1
                                    Volume Release)</li>
                                <li>If you have used up the 30-day trial for the previous major version (e.g., the 19.2 Volume
                                    Release), simply download and install Infragistics Ultimate from our <a
                                        href="https://www.infragistics.com/products/ultimate">website</a> (This will also allow you
                                    to start a new trial.)</li>
                            </ul></span>
                    </IgrExpansionPanel>
                </IgrAccordion>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AccordionNestedScenario />);
```

<div class="divider--half"></div>

## Keyboard Navigation

Keyboard navigation in the React Accordion provides a rich variety of keyboard interactions to the end-user. This functionality is enabled by default and allows end-users to easily navigate through the panels.

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

- [`IgrAccordion`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igraccordion.html)
- [`IgrExpansionPanel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrexpansionpanel.html)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

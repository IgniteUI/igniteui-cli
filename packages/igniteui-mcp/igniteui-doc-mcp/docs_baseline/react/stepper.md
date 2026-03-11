---
title: React Stepper Component - Ignite UI for React
_description: React Stepper component is used to visualize content as a process and to show its progress by dividing the content into logical steps. Try it for FREE.
_keywords: React Stepper, Ignite UI for React, Infragistics
_license: MIT
mentionedTypes: ["Stepper"]
_tocName: Stepper
---

# React Stepper Overview

The React Stepper Component provides a wizard-like workflow and is used for showing progress through numbered steps. It enables developers to divide a lengthy content into a sequence of logical steps, helping end-users more easily navigate the entire process. The React Stepper is displayed as a vertical or a horizontal line. The React Stepper has multiple features like step validation, styling, orientation and keyboard navigation.

## React Stepper Example

The following Ignite UI for React Stepper Example below shows the component in action. It visualizes the process that an end-user must pass through to configure an order details, following several consecutive steps.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

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

igc-switch {
    margin: 0.5rem;
}

igc-button {
    margin: 1rem 0.5rem 0 0;
}
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrStepper,
  IgrStep,
  IgrRadio,
  IgrRadioGroup,
  IgrButton,
  IgrSwitch,
  IgrCheckboxChangeEventArgs,
  IgrComponentValueChangedEventArgs,
  IgrInput,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class LinearStepper extends React.Component<any, any> {
  private stepperRef = React.createRef<IgrStepper>();
  private InfoForm = React.createRef<any>();
  private AddressForm = React.createRef<any>();
  private activeStepIndex = 0;

  constructor(props: any) {
    super(props);
    this.state = {
      linear: false,
      firstStepInvalid: true,
      secondStepInvalid: true,
    };
    this.onSwitchChange = this.onSwitchChange.bind(this);
  }

  componentDidMount() {
    this.InfoForm.current.addEventListener("igcInput", this.onInput.bind(this));
    this.AddressForm.current.addEventListener(
      "igcInput",
      this.onInput.bind(this)
    );
  }

  public render(): JSX.Element {
    return (
      <div className="container sample">
        <IgrSwitch onChange={this.onSwitchChange}>
          <span>Linear</span>
        </IgrSwitch>

        <IgrStepper ref={this.stepperRef} linear={this.state.linear}>
          <IgrStep
            invalid={this.state.linear && this.state.firstStepInvalid}
          >
            <span slot="title">
              Personal Info
            </span>
            <form ref={this.InfoForm}>
              <IgrInput
                required
                label="Full Name"
                type="text"
                name="fullName"
              ></IgrInput>
              <IgrInput
                required
                label="Email"
                type="email"
                name="email"
              ></IgrInput>

              <IgrButton
                disabled={this.state.linear && this.state.firstStepInvalid}
                onClick={() => {
                  this.stepperRef.current.next();
                }}
              >
                <span>NEXT</span>
              </IgrButton>
            </form>
          </IgrStep>
          <IgrStep
            invalid={this.state.linear && this.state.secondStepInvalid}
          >
            <span slot="title">
              Delivery address
            </span>
            <form ref={this.AddressForm}>
              <IgrInput
                required
                label="City"
                type="text"
                name="city"
              ></IgrInput>
              <IgrInput
                required
                label="Street"
                type="text"
                name="street"
              ></IgrInput>
              <IgrButton
                onClick={() => {
                  this.stepperRef.current.prev();
                }}
              >
                <span>PREVIOUS</span>
              </IgrButton>
              <IgrButton
                disabled={this.state.linear && this.state.secondStepInvalid}
                onClick={() => {
                  this.stepperRef.current.next();
                }}
              >
                <span>NEXT</span>
              </IgrButton>
            </form>
          </IgrStep>
          <IgrStep optional>
            <span slot="title">
              Billing address
            </span>
            <span slot="subtitle">
              (optional)
            </span>
            <form>
              <IgrInput
                required
                label="City"
                type="text"
                name="bill-city"
              ></IgrInput>
              <IgrInput
                required
                label="Street"
                type="text"
                name="bill-street"
              ></IgrInput>
              <IgrButton
                onClick={() => {
                  this.stepperRef.current.prev();
                }}
              >
                <span>PREVIOUS</span>
              </IgrButton>
              <IgrButton
                onClick={() => {
                  this.stepperRef.current.next();
                }}
              >
                <span>NEXT</span>
              </IgrButton>
            </form>
          </IgrStep>
          <IgrStep>
            <span slot="title">
              Payment
            </span>
            <IgrRadioGroup>
              <IgrRadio name="payment" checked>
                <span>PayPal (n@mail.com; 18/02/2021)</span>
              </IgrRadio>
              <IgrRadio name="payment">
                <span>Visa (**** **** **** 1234; 12/23)</span>
              </IgrRadio>
              <IgrRadio name="payment">
                <span>
                  MasterCard (**** **** **** 5678; 12/24)
                </span>
              </IgrRadio>
            </IgrRadioGroup>
            <IgrButton
              onClick={() => {
                this.stepperRef.current.prev();
              }}
            >
              <span>PREVIOUS</span>
            </IgrButton>
            <IgrButton
              onClick={() => {
                this.stepperRef.current.next();
              }}
            >
              <span>SUBMIT</span>
            </IgrButton>
          </IgrStep>
          <IgrStep>
            <span slot="title">
              Delivery status
            </span>
            <p>
              Your order is on its way. Expect delivery on 25th September 2021.
              Delivery address: San Jose, CA 94243.
            </p>
            <IgrButton
              onClick={() => {
                this.stepperRef.current.prev();
              }}
            >
              <span>PREVIOUS</span>
            </IgrButton>
            <IgrButton
              onClick={() => {
                this.stepperRef.current.reset();
              }}
            >
              <span>RESET</span>
            </IgrButton>
          </IgrStep>
        </IgrStepper>
      </div>
    );
  }

  public onSwitchChange(e: IgrCheckboxChangeEventArgs) {
    this.setState({ linear: e.detail.checked });
    if (e.detail.checked) {
      this.checkActiveStepValidity();
    }
  }

  public onInput(s: IgrInput, e: IgrComponentValueChangedEventArgs) {
    if (!this.state.linear) return;

    this.checkActiveStepValidity();
  }

  private checkActiveStepValidity() {
    const activeStep = this.activeStep;
    if (activeStep && this.activeStepIndex === 0) {
      const isInvalidForm = this.checkFormValidity(this.InfoForm);
      this.setState({ firstStepInvalid: isInvalidForm });
    }
    if (activeStep && this.activeStepIndex === 1) {
      const isInvalidForm = this.checkFormValidity(this.AddressForm);
      this.setState({ secondStepInvalid: isInvalidForm });
    }
  }

  private checkFormValidity(form: any) {
    let isInvalidForm = false;
    for (const element of form.current.children) {
      if (
        element.tagName.toLowerCase() === "igc-input" &&
        element.value === ""
      ) {
        const oldInvalid = element.invalid;
        const isElementInvalid = !element.checkValidity();
        element.invalid = oldInvalid;
        if (isElementInvalid) {
          isInvalidForm = true;
          break;
        }
      }
    }
    return isInvalidForm;
  }

  private get activeStep(): IgrStep | undefined {
    return this.stepperRef.current.steps.find(
      (step: IgrStep, index: number) => {
        this.activeStepIndex = index;
        return step.active;
      }
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LinearStepper />);
```


<div class="divider--half"></div>

## Getting Started with React Stepper

<!-- React -->

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrStepper`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html) and its necessary CSS, like so:

```tsx
import { IgrStepper, IgrStep } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

Now you can start with a basic configuration of the React [`IgrStepper`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html) and its steps.

## How To Use React Stepper

The [`IgrStep`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstep.html) is the representation of every step that belongs to the [`IgrStepper`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html). Steps provide [`invalid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstep.html#invalid), [`active`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstep.html#active), [`optional`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstep.html#optional), [`disabled`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstep.html#disabled) and [`complete`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstep.html#complete) properties, which give you the ability to configure the step states according to your business requirement.

### Declaring React Stepper

Steps can be declared using one of the following approaches.

- Iterating through a data set

```tsx
<IgrStepper>
    {this.StepsData.map(item =>
        <IgrStep key={item.title} disabled={item.disabled}>
            <p slot="title">{item.title}</p>
        </IgrStep>
    }
</IgrStepper>
```

- Creating static steps

```tsx
<IgrStepper>
    <IgrStep>
       <p slot="title">Step 1</p>
    </IgrStep>
     <IgrStep>
       <p slot="title">Step 2</p>
    </IgrStep>
</IgrStepper>
```

For each step the user has the ability to configure indicator, title and subtitle using the `Indicator`, `Title` and `Subtitle` slots as follows:

> \[!Note]
> The `Default` [`IgrStep`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstep.html) slot renders the content of the step.

```tsx
<IgrStepper>
    <IgrStep>
        <IgrIcon slot="indicator" name="home" collection="material" />
        <p slot="title">Home</p>
        <p slot="subtitle">Home Sub Title</p>
        <div>
            Step Content
            ...
        </div>
    </IgrStep>
</IgrStepper>
```

<img class="responsive-img" style="margin-bottom:10px; -webkit-box-shadow: 4px 4px 4px 4px #ccc; -moz-box-shadow: 4px 4px 4px 4px #ccc; box-shadow: 4px 4px 4px 4px #ccc; max-width: 500px" src="../../images/stepper/stepper-step.png" alt="stepper-step"/>

### Orientation in React Stepper

You can customize the stepper orientation through the exposed [`orientation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html#orientation) property. It could be set to **horizontal** **(default value)** or **vertical**.

**Horizontal Stepper Orientation**

**horizontal**is the default value for the [`IgrStepper`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html) orientation property.
When the React stepper is horizontally orientated you have the opportunity to determine whether the steps’ content would be displayed above or below the steps’ headers. This could be achieved by setting the [`IgrStepper`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html) [`contentTop`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html#contentTop) boolean property, which default value is **false**. In case it is enabled the steps’ content would be displayed above the steps’ headers.

<img class="responsive-img" style="margin-bottom:10px; -webkit-box-shadow: 4px 4px 4px 4px #ccc; -moz-box-shadow: 4px 4px 4px 4px #ccc; box-shadow: 4px 4px 4px 4px #ccc; max-width: 800px"  src="../../images/stepper/stepper-contentTop.png" alt="stepper-contentTop" />

**Vertical Stepper Orientation**

You can easily switch from the horizontal to vertical layout. In order to change the default orientation you should set the [`orientation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html#orientation) property to **vertical**.

The sample below demonstrates how stepper orientation and titles position could be changed runtime.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrButton,
    IgrRadio,
    IgrRadioChangeEventArgs,
    IgrRadioGroup,
    IgrStep,
    IgrStepper,
    StepperOrientation,
    StepperTitlePosition,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export interface StepperOrientationProps {
    orientation: StepperOrientation;
    titlePosition: StepperTitlePosition;
  }

export default class StepperOrientationSample extends React.Component<any, StepperOrientationProps> {
    private stepperRef = React.createRef<IgrStepper>();

    constructor(props: StepperOrientationProps) {
        super(props);
        this.state = { orientation: "horizontal", titlePosition: "auto" };
        this.handleTitlePositionChange = this.handleTitlePositionChange.bind(this);
        this.handleOrientationChange = this.handleOrientationChange.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="radio-groups">
                    <div className="radio-group">
                        <label>Title position</label>
                        <div className="radio-group-container">
                            <IgrRadioGroup alignment="horizontal" onChange={this.handleTitlePositionChange} value={this.state.titlePosition}>
                                <IgrRadio name="title" value="top"><span>Top</span></IgrRadio>
                                <IgrRadio name="title" value="bottom"><span>Bottom</span></IgrRadio>
                                <IgrRadio name="title" value="start"><span>Start</span></IgrRadio>
                                <IgrRadio name="title" value="end"><span>End</span></IgrRadio>
                                <IgrRadio name="title" value="auto"><span>Auto (default)</span></IgrRadio>
                            </IgrRadioGroup>
                        </div>
                    </div>
                    <div className="radio-group">
                        <label>Orientation</label>
                        <div className="radio-group-container">
                            <IgrRadioGroup alignment="horizontal" onChange={this.handleOrientationChange} value={this.state.orientation}>
                                <IgrRadio name="orientation" value="horizontal"><span>Horizontal</span></IgrRadio>
                                <IgrRadio name="orientation" value="vertical"><span>Vertical</span></IgrRadio>
                            </IgrRadioGroup>
                        </div>
                    </div>
                </div>
                <IgrStepper ref={this.stepperRef} orientation={this.state.orientation} titlePosition={this.state.titlePosition}>
                    <IgrStep>
                        <span slot="title">Order</span>
                        <IgrButton onClick={() => { this.stepperRef.current.next(); }}><span>NEXT</span></IgrButton>
                    </IgrStep>
                    <IgrStep>
                        <span slot="title">Payment</span>
                        <IgrButton onClick={() => { this.stepperRef.current.prev(); }}><span>PREVIOUS</span></IgrButton>
                        <IgrButton onClick={() => { this.stepperRef.current.next(); }}><span>NEXT</span></IgrButton>
                    </IgrStep>
                    <IgrStep>
                        <span slot="title">Confirmation</span>
                        <IgrButton onClick={() => { this.stepperRef.current.prev(); }}><span>PREVIOUS</span></IgrButton>
                        <IgrButton onClick={() => { this.stepperRef.current.reset(); }}><span>RESET</span></IgrButton>
                    </IgrStep>
                </IgrStepper>
            </div>
        );
    }

    public handleTitlePositionChange(e: IgrRadioChangeEventArgs) {
        const newTitlePosition = e.detail.value as StepperTitlePosition;
        this.setState({ titlePosition: newTitlePosition });
    }

    public handleOrientationChange(e: IgrRadioChangeEventArgs) {
        const newOrientation = e.detail.value as StepperOrientation;
        this.setState({ orientation: newOrientation, titlePosition: "auto" });
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StepperOrientationSample />);
```


<div class="divider--half"></div>

### Step States

React [`IgrStepper`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html) supports five steps states and each of them apply different styles by default:

- **active** - Determines whether the step is the currently displayed. By design, if the user does not explicitly set some step’s active attribute to **true**, the initial active step would be the first non-disabled step.
- **disabled** - Determines whether the step is intractable. By default, the disabled attribute of a step is set to **false**.
- **invalid** - Determines whether the step is valid. Based on its value it is decided whether the user will have the ability to move forward in linear stepper mode. Its default value is **false**.
- **optional** - By default, the optional attribute of a step is set to **false**. If validity of a step in linear stepper is not required, then the optional attribute can be enabled in order to be able to move forward independently from the step validity.
- **complete** - By default, the complete attribute of a step returns **false**. The user, however, can override this default complete behavior by setting the complete attribute as needed. When step is marked as complete not only that the style of the step header is changed by default, but also the style of the progress line between the completed step and the next one.

### Linear React Stepper

The React [`IgrStepper`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html) gives you the opportunity to set its steps flow using the [`linear`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html#linear) property. By default, linear is set to **false** and the user is enabled to select any non-disabled step in the [`IgrStepper`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html).

```tsx
<IgrStepper linear={true}>
    <IgrStep>
       <p slot="title">Step 1</p>
    </IgrStep>
     <IgrStep>
       <p slot="title">Step 2</p>
    </IgrStep>
</IgrStepper>
```

When the linear property is set to **true**, the stepper will require the current non-optional step to be valid before proceeding to the next one.

If the current non-optional step is not valid you cannot go forward to the next step until you validate the current one.

> \[!Note]
> Optional steps validity is not taken into account in order to move forward.

### Step Interactions

[`IgrStepper`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html) provides the following API methods for step interactions:

- **navigateTo** – activates the step by given index.
- **next** - activates the next non-disabled step.
- **prev** – activates the previous non-disabled step.
- **reset** – resets the stepper to its initial state.

> \[!Note]
> The reset method would reset the stepper to its initial state, i.e. activates the first step. It would not clear the step\`s content. This should be done manually.

### Customizing the Steps

The Ignite UI for React Stepper gives you the ability to configure different options for titles, indicators and more.

This could be achieved through the [`stepType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html#stepType) property of the [`IgrStepper`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html). It takes the following values:

- Full **(default value)**
- Indicator
- Title

**full**

If titles and subtitles are defined, with this setup both indicators and titles would be rendered.

The user would also have the ability to define the position of the title for the steps, so it could be placed before, after, above or below the step indicator.
The user can configure the title position using the [`titlePosition`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html#titlePosition) property. It takes the following values:

- undefined **(default value)**
- end
- start
- bottom
- top

When the React [`IgrStepper`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html) is horizontally orientated and the title position **is not defined**, the titles would be displayed **below** the indicators.

When the orientation is set to vertical and the title position **is not defined**, the titles would be displayed **after** the indicators.

> \[!Note]
> **titlePosition** property is applicable **only** when the stepper stepType property is set to **full**.

**indicator**

If you want to display only indicators for the steps, set the stepType option to **indicator**.

The step indicator supports any content, however with the restriction that its size would be always **24 pixels**. Having this in mind, we recommend using [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html) or [`IgrAvatar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html) as step indicators.

**Title**

If you want to display only titles for the steps, set the stepType option to **title**.

In this way if subtitles are defined, they will also be rendered below the step title.

> \[!Note]
> This container could be re-templated as per your requirement without any size restrictions. For example, you could add an indicator with size greater than 24 pixels inside it.

The sample below demonstrates all exposed step types and how they could be changed:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.radio-group-container {
    width: fit-content;
    padding: 0.5rem;
    border: 1px solid gainsboro;
    margin-bottom: 1rem;
}
```
```tsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrStepper, IgrStep, IgrRadio, IgrRadioGroup, StepperStepType, IgrRadioChangeEventArgs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';


export default function StepperStepTypes() {

    const [stepType, setStepType] = useState<StepperStepType>("full");

    const onStepTypeChange = (e: IgrRadioChangeEventArgs) => {
        const newStepType = e.detail.value as StepperStepType;
        setStepType(newStepType);
    }

    
    return (
        <div className="container sample">
            <label>Step type</label>
            <div className="radio-group-container">
                <IgrRadioGroup alignment="horizontal">
                    <IgrRadio name="type" value="indicator" onChange={onStepTypeChange}><span>Indicator</span></IgrRadio>
                    <IgrRadio name="type" value="title" onChange={onStepTypeChange}><span>Title</span></IgrRadio>
                    <IgrRadio name="type" value="full" onChange={onStepTypeChange} checked={stepType === 'full'}><span>Full</span></IgrRadio>
                </IgrRadioGroup>
            </div>
            <IgrStepper stepType={stepType}>
                <IgrStep>
                    <span slot="title">Pricing Plan</span>
                </IgrStep>
                <IgrStep>
                    <span slot="title">Car Details</span>
                </IgrStep>
                <IgrStep>
                    <span slot="title">Payment</span>
                </IgrStep>
            </IgrStepper>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StepperStepTypes />);
```


<div class="divider--half"></div>

### Stepper Animations

The React [`IgrStepper`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html) Animations provide the end-users with a beautiful experience interacting with the defined steps. The available animation options differ depending on the orientation of the stepper.

When the stepper is horizontally orientated, it is configured to use the `slide` animation by default. It also supports `fade` as an alternative. The animations are configured through the [`horizontalAnimation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html#horizontalAnimation) input.

In a vertically orientated layout, the animation type could be defined using the [`verticalAnimation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html#verticalAnimation) property. By default, its value is set to `grow` and the user has the ability to set it to `fade` as well.

Setting `none` to both animation type inputs disables stepper animations.

The [`IgrStepper`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html) component also gives you the ability to configure the duration of the transition between the steps. This could be achieved through the `animationDuration` property, which takes a number as an argument and it is common to both orientations. The default value is set to 320ms.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

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

igc-button {
    margin: 1rem 0.5rem 0 0;
}
```
```tsx
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrStepper,
  IgrStep,
  IgrRadio,
  IgrRadioGroup,
  IgrButton,
  IgrInput,
  IgrSelect,
  IgrSelectItem,
  IgrSelectItemComponentEventArgs,
  IgrComponentValueChangedEventArgs,
  StepperOrientation,
  HorizontalTransitionAnimation,
  StepperVerticalAnimation,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function StepperAnimations() {

    const stepperRef = useRef<IgrStepper>(null);
    const [orientation, setOrientation] = useState<StepperOrientation>("horizontal");
    const [horizontalAnimation, setHorizontalAnimation] = useState<HorizontalTransitionAnimation>("slide");
    const [verticalAnimation, setVerticalAnimation] = useState<StepperVerticalAnimation>("grow");
    const [animationDuration, setAnimationDuration] = useState("320");
    

    const orientationChange = (e: IgrSelectItemComponentEventArgs) => {
        const selectedValue = e.detail.value as StepperOrientation;
        setOrientation(selectedValue);
    }
    
    const horizontalAnimationChange = (e: IgrSelectItemComponentEventArgs) => {
        const selectedValue = e.detail.value as HorizontalTransitionAnimation;
        setHorizontalAnimation(selectedValue);

    }

    const verticalAnimationChange = (e: IgrSelectItemComponentEventArgs) => {
        const selectedValue = e.detail.value as StepperVerticalAnimation;
        setVerticalAnimation(selectedValue);
    }

    const animationDurationChange = (e: IgrComponentValueChangedEventArgs) => {
        const animationDuration = e.detail;
        setAnimationDuration(animationDuration);
    }

    return (
      <div className="container sample">
        <article className="settings">
          <IgrSelect label="Orienation" onChange={orientationChange}>
            <IgrSelectItem value="horizontal" selected={orientation === 'horizontal'}>
              <span>Horizontal</span>
            </IgrSelectItem>
            <IgrSelectItem value="vertical">
              <span>Vertical</span>
            </IgrSelectItem>
          </IgrSelect>
          <IgrSelect
            label="Vertical Animation"
            onChange={verticalAnimationChange}
          >
            <IgrSelectItem value="grow" selected={verticalAnimation === 'grow'}>
              <span>Grow</span>
            </IgrSelectItem>
            <IgrSelectItem value="fade">
              <span>Fade</span>
            </IgrSelectItem>
            <IgrSelectItem value="none">
              <span>None</span>
            </IgrSelectItem>
          </IgrSelect>
          <IgrSelect
            label="Horizontal Animation"
            onChange={horizontalAnimationChange}
          >
            <IgrSelectItem value="slide" selected={horizontalAnimation === 'slide'}>
              <span>Slide</span>
            </IgrSelectItem>
            <IgrSelectItem value="fade">
              <span>Fade</span>
            </IgrSelectItem>
            <IgrSelectItem value="none">
              <span>None</span>
            </IgrSelectItem>
          </IgrSelect>
          <IgrInput
            type="number"
            value={animationDuration}
            label="Duration"
            onChange={animationDurationChange}
          >
            <span slot="suffix">ms</span>
          </IgrInput>
        </article>

        <IgrStepper
          ref={stepperRef}
          orientation={orientation}
          horizontalAnimation={horizontalAnimation}
          verticalAnimation={verticalAnimation}
          animationDuration={+animationDuration}
        >
          <IgrStep>
            <span slot="title">Personal Info</span>
            <form>
              <IgrInput
                label="Full Name"
                type="text"
                name="fullName"
              ></IgrInput>
              <IgrInput label="Email" type="email" name="email"></IgrInput>

              <IgrButton
                onClick={() => {
                  stepperRef.current.next();
                }}
              >
                <span>NEXT</span>
              </IgrButton>
            </form>
          </IgrStep>
          <IgrStep>
            <span slot="title">Delivery address</span>
            <form>
              <IgrInput label="City" type="text" name="city"></IgrInput>
              <IgrInput label="Street" type="text" name="street"></IgrInput>

              <IgrButton
                onClick={() => {
                  stepperRef.current.prev();
                }}
              >
                <span>PREVIOUS</span>
              </IgrButton>
              <IgrButton
                onClick={() => {
                  stepperRef.current.next();
                }}
              >
                <span>NEXT</span>
              </IgrButton>
            </form>
          </IgrStep>
          <IgrStep>
            <span slot="title">Payment</span>
            <IgrRadioGroup>
              <IgrRadio name="payment" checked>
                <span>PayPal (n@mail.com; 18/02/2021)</span>
              </IgrRadio>
              <IgrRadio name="payment">
                <span>Visa (**** **** **** 1234; 12/23)</span>
              </IgrRadio>
              <IgrRadio name="payment">
                <span>MasterCard (**** **** **** 5678; 12/24)</span>
              </IgrRadio>
            </IgrRadioGroup>

            <IgrButton
              onClick={() => {
                stepperRef.current.prev();
              }}
            >
              <span>PREVIOUS</span>
            </IgrButton>
            <IgrButton
              onClick={() => {
                stepperRef.current.next();
              }}
            >
              <span>SUBMIT</span>
            </IgrButton>
          </IgrStep>
          <IgrStep>
            <span slot="title">Delivery status</span>
            <p>
              Your order is on its way. Expect delivery on 25th September 2021.
              Delivery address: San Jose, CA 94243.
            </p>

            <IgrButton
              onClick={() => {
                stepperRef.current.prev();
              }}
            >
              <span>PREVIOUS</span>
            </IgrButton>
            <IgrButton
              onClick={() => {
                stepperRef.current.reset();
              }}
            >
              <span>RESET</span>
            </IgrButton>
          </IgrStep>
        </IgrStepper>
      </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StepperAnimations />);
```


<div class="divider--half"></div>

## Keyboard Navigation

The Ignite UI for React Stepper provides a rich variety of keyboard interactions to the end-user. This functionality is enabled by default and allows end-users to easily navigate through the steps.
The React [`IgrStepper`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html) navigation is compliant with [W3 accessability standards](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/) and convenient to use.

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

## Styling React Stepper

You can change the appearance of the [`IgrStep`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstep.html), by using some of the exposed CSS parts listed below:

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

Using these CSS parts we can customize thе appearance of the [`IgrStepper`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html) component like this:

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

<!-- React,Blazor -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

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
```tsx
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrStepper,
  IgrStep,
  IgrRadio,
  IgrRadioGroup,
  IgrButton,
  IgrInput,
  IgrSelect,
  IgrSelectItem,
  IgrSelectItemComponentEventArgs,
  IgrComponentValueChangedEventArgs,
  StepperOrientation,
  HorizontalTransitionAnimation,
  StepperVerticalAnimation,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const personalInfoIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>';
const addressIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/></svg>';
const paymentIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v2h20V6c0-1.1-.9-2-2-2zM2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H2v8zm4-3h4v2H6v-2z"/></svg>';
const deliveryStatusIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2a2 2 0 1 0 4 0h8a2 2 0 1 0 4 0h3v-5l-4-4zm-5 5H4V6h11v7zm2-4.17L19.17 13H17V8.83zM6 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm12 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>';

export default function StepperStyling() {
  const stepperRef = useRef<IgrStepper>(null);
  const [orientation, setOrientation] =
    useState<StepperOrientation>("horizontal");
  const [horizontalAnimation, setHorizontalAnimation] =
    useState<HorizontalTransitionAnimation>("slide");
  const [verticalAnimation, setVerticalAnimation] =
    useState<StepperVerticalAnimation>("grow");
  const [animationDuration, setAnimationDuration] = useState("320");

  useEffect(() => {
    registerIconFromText("personal", personalInfoIcon, "material");
    registerIconFromText("address", addressIcon, "material");
    registerIconFromText("payment", paymentIcon, "material");
    registerIconFromText("delivery", deliveryStatusIcon, "material");
  }, []);

  const orientationChange = (e: IgrSelectItemComponentEventArgs) => {
    const selectedValue = e.detail.value as StepperOrientation;
    setOrientation(selectedValue);
  };

  const horizontalAnimationChange = (e: IgrSelectItemComponentEventArgs) => {
    const selectedValue = e.detail.value as HorizontalTransitionAnimation;
    setHorizontalAnimation(selectedValue);
  };

  const verticalAnimationChange = (e: IgrSelectItemComponentEventArgs) => {
    const selectedValue = e.detail.value as StepperVerticalAnimation;
    setVerticalAnimation(selectedValue);
  };

  const animationDurationChange = (e: IgrComponentValueChangedEventArgs) => {
    const animationDuration = e.detail;
    setAnimationDuration(animationDuration);
  };

  return (
    <div className="container sample">
      <article className="settings">
        <IgrSelect label="Orienation" onChange={orientationChange}>
          <IgrSelectItem
            value="horizontal"
            selected={orientation === "horizontal"}
          >
            <span>Horizontal</span>
          </IgrSelectItem>
          <IgrSelectItem value="vertical">
            <span>Vertical</span>
          </IgrSelectItem>
        </IgrSelect>
        <IgrSelect
          label="Vertical Animation"
          onChange={verticalAnimationChange}
        >
          <IgrSelectItem value="grow" selected={verticalAnimation === "grow"}>
            <span>Grow</span>
          </IgrSelectItem>
          <IgrSelectItem value="fade">
            <span>Fade</span>
          </IgrSelectItem>
          <IgrSelectItem value="none">
            <span>None</span>
          </IgrSelectItem>
        </IgrSelect>
        <IgrSelect
          label="Horizontal Animation"
          onChange={horizontalAnimationChange}
        >
          <IgrSelectItem
            value="slide"
            selected={horizontalAnimation === "slide"}
          >
            <span>Slide</span>
          </IgrSelectItem>
          <IgrSelectItem value="fade">
            <span>Fade</span>
          </IgrSelectItem>
          <IgrSelectItem value="none">
            <span>None</span>
          </IgrSelectItem>
        </IgrSelect>
        <IgrInput
          type="number"
          value={animationDuration}
          label="Duration"
          onChange={animationDurationChange}
        >
          <span slot="suffix">ms</span>
        </IgrInput>
      </article>

      <IgrStepper
        ref={stepperRef}
        orientation={orientation}
        horizontalAnimation={horizontalAnimation}
        verticalAnimation={verticalAnimation}
        animationDuration={+animationDuration}
      >
        <IgrStep>
          <IgrIcon slot="indicator" name="personal" collection="material" />
          <p slot="title">Personal Info</p>
          <form>
            <IgrInput label="Full Name" type="text" name="fullName"></IgrInput>
            <IgrInput label="Email" type="email" name="email"></IgrInput>

            <IgrButton
              onClick={() => {
                stepperRef.current.next();
              }}
            >
              <span>NEXT</span>
            </IgrButton>
          </form>
        </IgrStep>

        <IgrStep>
          <IgrIcon slot="indicator" name="address" collection="material" />
          <span slot="title">Delivery address</span>
          <form>
            <IgrInput label="City" type="text" name="city"></IgrInput>
            <IgrInput label="Street" type="text" name="street"></IgrInput>

            <IgrButton
              onClick={() => {
                stepperRef.current.prev();
              }}
            >
              <span>PREVIOUS</span>
            </IgrButton>
            <IgrButton
              onClick={() => {
                stepperRef.current.next();
              }}
            >
              <span>NEXT</span>
            </IgrButton>
          </form>
        </IgrStep>
        <IgrStep>
          <IgrIcon slot="indicator" name="payment" collection="material" />
          <span slot="title">Payment</span>
          <IgrRadioGroup>
            <IgrRadio name="payment" checked>
              <span>PayPal (n@mail.com; 18/02/2021)</span>
            </IgrRadio>
            <IgrRadio name="payment">
              <span>Visa (**** **** **** 1234; 12/23)</span>
            </IgrRadio>
            <IgrRadio name="payment">
              <span>MasterCard (**** **** **** 5678; 12/24)</span>
            </IgrRadio>
          </IgrRadioGroup>

          <IgrButton
            onClick={() => {
              stepperRef.current.prev();
            }}
          >
            <span>PREVIOUS</span>
          </IgrButton>
          <IgrButton
            onClick={() => {
              stepperRef.current.next();
            }}
          >
            <span>SUBMIT</span>
          </IgrButton>
        </IgrStep>
        <IgrStep>
          <IgrIcon slot="indicator" name="delivery" collection="material" />
          <span slot="title">Delivery status</span>
          <p>
            Your order is on its way. Expect delivery on 25th September 2021.
            Delivery address: San Jose, CA 94243.
          </p>

          <IgrButton
            onClick={() => {
              stepperRef.current.prev();
            }}
          >
            <span>PREVIOUS</span>
          </IgrButton>
          <IgrButton
            onClick={() => {
              stepperRef.current.reset();
            }}
          >
            <span>RESET</span>
          </IgrButton>
        </IgrStep>
      </IgrStepper>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StepperStyling />);
```


<!-- end: React,Blazor -->

<div class="divider--half"></div>

## API References

- [`IgrStepper`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstepper.html)
- [`IgrStep`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrstep.html)
- [`IgrAvatar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html)
- [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

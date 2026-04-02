---
title: React Slider & Range Slider Components | Ignite UI for React
_description: Learn how to configure a selection in a given range by using the thumb track with React Slider & Range Slider part of Ignite UI for React. Choose between single and range slider.
_keywords: React, UI controls, web widgets, UI widgets, React Slider Components, Infragistics
mentionedTypes: ["Slider", "SliderLabel", "RangeSlider"]
_license: MIT
_tocName: Slider & Range Slider
---

# React Slider & Range Slider Overview

The React Slider & Range Slider components allow selection in a given range by moving the thumb along the track. The track can be defined as continuous or stepped and you can choose between single and range slider.

## React Slider & Range Slider Example

```css
igc-slider,
igc-range-slider {
    padding: 30px 30px  0px 30px;
    flex-grow: 1;
}

.slider-container {
    display: flex;
    align-items: baseline;
}

.slider-label {
    width: 100px;
    text-align: end;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider, IgrRangeSlider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './SliderOverviewStyle.css';

export default function SliderOverview() {

    return (
        <div className="container sample">
            <div className="slider-component">
                <span className="slider-label">Slider</span>
                <IgrSlider value={40} />
                <span className="slider-label">Range Slider</span>
                <IgrRangeSlider lower={20} upper={70}></IgrRangeSlider>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderOverview/>);
```


## Usage

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrSlider`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrslider.html) and [`IgrRangeSlider`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrangeslider.html)and its necessary CSS, like so:

```tsx
import { IgrSlider, IgrRangeSlider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

The simplest way to start using the [`IgrSlider`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrslider.html) and [`IgrRangeSlider`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrangeslider.html) is as follows:

```tsx
<IgrSlider value="40" />
  <span className="slider-label"></span>
<IgrRangeSlider lower="20" upper="70"></IgrRangeSlider>
```

### Value

The main difference between the Slider and Range Slider components is that the Slider component has a single thumb, while the Range Slider component has two thumbs. The single thumb of the Slider component displays its [`value`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrslider.html#value) property. The two thumbs of the Range Slider component display its [`lower`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrangeslider.html#lower) and [`upper`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrangeslider.html#upper) value properties.

Both sliders emit two events when any of the values is changed. The [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html) event is emitted whenever a value is changed using keyboard or drag interaction while the `Change` event is emitted when the value change is committed on drag end or keyboard interaction.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrSlider, IgrRangeSlider } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function SliderValue() {

  const [sliderVal, setSliderVal] = useState(40);
  const [rangeLower, setRangeLower] = useState(20);
  const [rangeUpper, setRangeUpper] = useState(70);

  const handleSliderInput = (event: any) => {
    setSliderVal(event.detail);
  };

  const handleRangeInput = (event: any) => {
    const { lower, upper } = event.detail;
    setRangeLower(lower);
    setRangeUpper(upper);
  };

  return (
    <div className="container sample">
      <div className="slider-component">
        <IgrSlider
          style={{ padding: "30px 30px  0px 30px" }}
          onInput={handleSliderInput}
          value={sliderVal}
        />
        <div style={{ paddingLeft: "30px", display: "flex" }}>
          <span style={{ whiteSpace: "pre" }}>Value: {sliderVal}</span>
        </div>

        <IgrRangeSlider
          style={{ padding: "30px 30px  0px 30px" }}
          onInput={handleRangeInput}
          lower={rangeLower}
          upper={rangeUpper}
        ></IgrRangeSlider>
        <div style={{ paddingLeft: "30px", display: "flex" }}>
          <span style={{ whiteSpace: "pre" }}>Lower: {rangeLower}</span>
          <span style={{ whiteSpace: "pre" }}>, Upper: {rangeUpper}</span>
        </div>
      </div>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SliderValue />);
```


While dragging a slider thumb, it displays its value in a tooltip. You could hide this tooltip using the [`hideTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#hideTooltip) property.

### Disabled

You can use the [`disabled`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#disabled) property of the sliders to disable their user interactions.

```css
igc-slider {
    padding: 30px 30px  0px 30px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './SliderDisabledStyle.css';

export default function SliderDisabled() {

    return (
        <div className="container sample">
            <IgrSlider value={40} disabled={true}/>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderDisabled/>);
```


### Constraints

The track of the sliders has a minimum and maximum values which are configured using the [`min`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html#min) and [`max`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html#max) properties. Additionally, you can restrict the thumb dragging using the [`lowerBound`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#lowerBound) and [`upperBound`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#upperBound) properties.

```css
igc-slider {
    padding: 30px 30px  0px 30px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './SliderConstraintsStyle.css';

export default function SliderConstraints() {

    return (
        <div className="container sample">
            <IgrSlider max={1000} min={100} lowerBound={200} upperBound={800} value={400} primaryTicks={2}/>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderConstraints/>);
```


### Step

The [`step`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html#step) property specifies the granularity of the slider that the value must adhere to. By default, the slider track looks continuous. Setting the [`discreteTrack`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#discreteTrack) property of the slider to **true** will make it to display the steps on the track.

```css
igc-slider {
    padding: 30px 30px  0px 30px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './SliderDiscreteStyle.css';

export default function SliderDiscrete() {

    return (
        <div className="container sample">
            <IgrSlider step={10} discreteTrack={true}/>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderDiscrete/>);
```


If the [`step`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html#step) property is set to `0`, no stepping is implied and any value in the slider range is allowed. In this case, the slider will look continuous even if [`discreteTrack`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#discreteTrack) is set to **true**.

### Tick Marks

The slider components could display tick marks and labels. The slider components support two types of tick marks: primary and secondary. In order to display the primary tick marks, you should set the [`primaryTicks`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#primaryTicks) property to a value greater than `1`. The number of primary ticks will be evenly distributed on the track. In order to display the secondary tick marks, you should set the [`secondaryTicks`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#secondaryTicks) property to a value greater than `0`. The value of [`secondaryTicks`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#secondaryTicks) specifies the number of secondary ticks between every two primary ticks.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SliderTicks() {

    return (
        <div className="container sample">
            <IgrSlider style={{padding: "30px 30px  0px 30px"}}
                primaryTicks={3} 
                secondaryTicks={4} />
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderTicks/>);
```


Additionally, you could configure the orientation of the tick marks using the [`tickOrientation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#tickOrientation) property. By default, the [`tickOrientation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#tickOrientation) value is `end` which displays the ticks below the slider track. You could set it to `start` which displays them above the track and `mirror` which mirrors the ticks above and below the track.

By default, the tick marks display labels with their values. You could modify the rotation of the tick labels using the `SliderTickLabelRotation` property. Additionally, you could hide the labels of the primary and secondary ticks using the [`hidePrimaryLabels`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#hidePrimaryLabels) and [`hideSecondaryLabels`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#hideSecondaryLabels) properties.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SliderTickLabels() {

    return (
        <div className="container sample">
            <IgrSlider style={{padding: "30px 30px  0px 30px"}}
                primaryTicks={6} 
                secondaryTicks={1}
                tickOrientation="mirror" 
                tickLabelRotation={-90} 
                hideSecondaryLabels={true}>
            </IgrSlider>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderTickLabels/>);
```


### Value Format

If you want to format the thumb and tick label values, the slider provides [`valueFormat`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#valueFormat), [`valueFormatOptions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#valueFormatOptions) and [`locale`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#locale) properties. Тhe [`valueFormatOptions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#valueFormatOptions) allows you to specify the number of fraction and significant digits, style (decimal, currency, percent, unit), notation and others taking into account the specified [`locale`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#locale). The [`valueFormat`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#valueFormat) is a string which may contain the `{0}` identifier which will be replaced by the value with applied format options.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider, NumberFormatOptions } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SliderValueFormat() {

    const formatOptions1: NumberFormatOptions = {
        style: "currency",
        currency: "USD"
    };
    const formatOptions2 = { minimumFractionDigits: 1};

    return (
        <div className="container sample">
            <IgrSlider 
                style={{padding: "30px 50px"}}
                primaryTicks={2}
                secondaryTicks={4}
                valueFormatOptions={formatOptions1}>
            </IgrSlider>
            <IgrSlider 
                style={{padding: "30px 50px"}}
                valueFormat="Storage {0} GB"
                valueFormatOptions={formatOptions2}>
            </IgrSlider>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderValueFormat/>);
```


### Labels

In some cases you would want to format the values of the slider as string values i.e. map the values **\[0, 1, 2]** to **\['Low', 'Medium', 'High']**. For this scenario the slider allows you to define [`IgrSliderLabel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderlabel.html) elements inside it. The text content of the slider labels is going to be used for thumb and tick labels. Please note that when slider labels are provided, the [`min`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#min), [`max`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#max) and [`step`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#step) properties are automatically calculated so that they do not allow values that do not map to the provided labels. In the case of 'Low', 'Medium' and 'High' labels, [`min`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#min) is set to `0`, [`max`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#max) is set to `2` and [`step`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#step) is set to `1`.

```css
igc-slider {
    padding: 30px 30px  0px 30px;
    width: 300px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider, IgrSliderLabel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './SliderLabelsStyle.css';

export default function SliderLabels() {

    return (
        <div className="container sample">
            <IgrSlider primaryTicks={3} >
                <IgrSliderLabel><span>Low</span></IgrSliderLabel>
                <IgrSliderLabel><span>Medium</span></IgrSliderLabel>
                <IgrSliderLabel><span>High</span></IgrSliderLabel>
            </IgrSlider>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderLabels/>);
```


## Styling

The [`IgrSlider`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrslider.html) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `base` | The base wrapper of the slider. |
| `ticks` | The ticks container. |
| `tick-group` | The tick group container. |
| `tick` | The tick element. |
| `tick-label` | The tick label element. |
| `tick-label-inner` | The inner element of the tick label. |
| `thumbs` | The thumbs container. |
| `thumb` | The thumb element. |
| `thumb-label` | The label container of the thumb tooltip. |
| `thumb-label-inner` | The label element of the thumb tooltip. |
| `track` | The track container. |
| `steps` | The track steps element. |
| `inactive` | The inactive element of the track. |
| `fill` | The filled part of the track. |

The following sample demonstrates how to style the track fill and thumb parts:

```css
igc-slider {
    padding: 30px 30px  0px 30px;
}

igc-range-slider {
    padding: 30px 30px  0px 30px;
}

igc-slider::part(thumb) {
background: #28a745;
}

igc-slider::part(thumb):focus {
    background: #28a745;
    box-shadow: 0 0 0 2px #28a74694;
}

igc-slider::part(fill) {
    display: block;
    background: #28a745;
}

igc-range-slider::part(thumb) {
    background: orange;
}

igc-range-slider::part(thumb):focus {
    background: navy;
    box-shadow: 0 0 0 2px orange;
}

igc-range-slider::part(track) {
    display: block;
    background: navy;
}

igc-range-slider::part(thumb-label-inner) {
    background: navy;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider, IgrRangeSlider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './SliderStyling.css';

export default function SliderStyling() {

    return (
        <div className="container sample">
            <div className="slider-container">
                <span className="slider-label"> Slider</span>
                <IgrSlider value={40}/>
            </div>
            <div className="slider-container">
                <span className="slider-label"> Range Slider</span>
                <IgrRangeSlider lower={20} upper={70}>
                </IgrRangeSlider>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderStyling/>);
```


## API References

- [`hidePrimaryLabels`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#hidePrimaryLabels)
- [`hideSecondaryLabels`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#hideSecondaryLabels)
- [`hideTooltip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#hideTooltip)
- [`primaryTicks`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#primaryTicks)
- [`IgrRangeSlider`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrangeslider.html)
- [`secondaryTicks`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#secondaryTicks)
- [`IgrSliderLabel`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderlabel.html)
- [`IgrSlider`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrslider.html)
- `SliderTickLabelRotation`
- [`tickOrientation`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#tickOrientation)
- [`upperBound`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#upperBound)
- [`valueFormatOptions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#valueFormatOptions)
- [`valueFormat`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrsliderbase.html#valueFormat)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

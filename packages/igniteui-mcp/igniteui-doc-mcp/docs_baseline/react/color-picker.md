---
title: "Color Picker"
description: "The Ignite UI for React Color Picker is a form-associated component that lets users pick and edit a color through an interactive dropdown with a gradient canvas, hue and alpha sliders, format switching, an eye-dropper, and predefined swatches."
keywords: "React Color Picker, Ignite UI for React, color picker, color input, hex, rgb, hsl, alpha, swatches, eye-dropper, form-associated"
license: MIT
mentionedTypes: ["ColorPicker"]
last_updated: "2026-09-23"
llms:
  description: "The Ignite UI for React Color Picker is a form-associated component that lets users pick and edit a color through an interactive dropdown with a gradient canvas, hue and alpha sliders, format switching, an eye-dropper, and predefined swatches."
_tocName: Color Picker
---
# Color Picker Component 

The Ignite UI for React Color Picker is a form-associated component that lets users pick and edit a color through an interactive dropdown with a gradient canvas, hue and alpha sliders, format switching, an eye-dropper, and predefined swatches.

## Live Demo

The React Color Picker demo shows the anchor in `input` mode that previews the currently selected color and opens a dropdown where you can edit or select a different color.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
    align-items: center;
}

igc-card {
    width: 22rem;
}

.sample igc-card h2 {
    margin: 0 0 1rem;
    font-size: 1.25rem;
    line-height: 1.25rem;
    color: var(--ig-gray-900);
}

igc-card-content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

igc-select {
    width: 100%;
}

.color-row {
    position: relative;
}

igc-color-picker {
    width: 100%;
}

igc-color-picker::part(color-picker) {
    width: 100%;
    grid-template-columns: auto;
}

igc-color-picker::part(picker) {
    --picker-elevation: var(--ig-elevation-12);
}

igc-icon-button {
    position: absolute;
    right: 0.5rem;
    align-self: center;
    z-index: 1;
}

igc-card-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.stepper {
    display: flex;
    gap: 0.375rem;
}

.stepper .dot {
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 50%;
    background: var(--ig-gray-300);
}

.stepper .dot.active {
    background: var(--ig-secondary-500);
}

@media (width < 420px) {
    .container {
        width: fit-content;
    }
}
```
```tsx
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import {
  IgrButton,
  IgrCard,
  IgrCardActions,
  IgrCardContent,
  IgrColorPicker,
  IgrIconButton,
  IgrSelect,
  IgrSelectItem,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

const refreshIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08a5.99 5.99 0 0 1-5.65 4c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>';

export default function ColorPickerOverview() {
  const pickerRef = useRef<IgrColorPicker>(null);

  useEffect(() => {
    registerIconFromText("refresh", refreshIcon, "material");
  }, []);

  const resetColor = () => {
    if (pickerRef.current) {
      pickerRef.current.value = "";
    }
  };

  return (
    <div className="container sample">
      <IgrCard>
        <IgrCardContent>
          <h2>Choose your interior color</h2>
          <IgrSelect label="Type of wall paints" value="satin" outlined={true}>
            <IgrSelectItem value="matte"><span>Matte</span></IgrSelectItem>
            <IgrSelectItem value="satin"><span>Satin</span></IgrSelectItem>
            <IgrSelectItem value="eggshell"><span>Eggshell</span></IgrSelectItem>
            <IgrSelectItem value="gloss"><span>Gloss</span></IgrSelectItem>
          </IgrSelect>
          <IgrSelect label="Paint quantity" value="3l" outlined={true}>
            <IgrSelectItem value="1l"><span>1 litre</span></IgrSelectItem>
            <IgrSelectItem value="3l"><span>3 litres</span></IgrSelectItem>
            <IgrSelectItem value="5l"><span>5 litres</span></IgrSelectItem>
            <IgrSelectItem value="10l"><span>10 litres</span></IgrSelectItem>
          </IgrSelect>
          <div className="color-row">
            <IgrColorPicker ref={pickerRef} mode="input" value="#0598fa" />
            <IgrIconButton
              id="colorReset"
              name="refresh"
              collection="material"
              variant="flat"
              onClick={resetColor}
            />
          </div>
        </IgrCardContent>
        <IgrCardActions>
          <IgrButton variant="flat">Back</IgrButton>
          <div className="stepper">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot active"></span>
          </div>
          <IgrButton variant="flat">Confirm</IgrButton>
        </IgrCardActions>
      </IgrCard>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPickerOverview />);
```

## Anatomy

The React Color Picker is composed of an anchor that opens a popover dropdown containing the picker surface — a gradient canvas, hue and alpha sliders, format-aware color inputs, action buttons, and an optional swatch grid.

**Color Picker anatomy:** Parts of the Color Picker: the input and default anchors, and the picker dropdown with its canvas, sliders, inputs, action buttons, and swatches.

<style>{`
  .color-picker-anatomy {
    --igd-anatomy-padding: 0px;
  }

  [id^="cw-"][id*="color-picker"][id$="-example"]:not([id*="overview"], [id*="tailwind-styling"]) .igd-sample-frame {
    height: 80%;
  }

  [id^="cw-"][id*="color-picker-overview"][id$="-example"] .igd-sample-frame,
  [id^="cw-"][id*="color-picker-tailwind-styling"][id$="-example"] .igd-sample-frame {
    height: 90%;
  }

  [id^="cw-"][id*="color-picker-overview"][id$="-example"] .igd-sample-frame {
    width: 75%;
  }

  [id^="cw-"][id*="color-picker-swatches"][id$="-example"] .igd-sample-frame {
    width: 80%;
  }

  [id^="cw-"][id*="color-picker-styling"][id$="-example"] .igd-sample-frame,
  [id^="cw-"][id*="color-picker-tailwind-styling"][id$="-example"] .igd-sample-frame {
    width: 90%;
  }

  @media (width < 580px) {
    [id^="cw-"][id*="color-picker"][id$="-example"] .igd-sample-frame {
      width: 90%;
    }
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>A - Input Color Picker</strong><br /><br />
<strong>1. Input mode:</strong> The Color Picker rendered with `mode="input"`.<br />
<strong>2. Color anchor/Fill:</strong> Triggers the picker dropdown and shows the currently selected color.<br />
<strong>3. Label:</strong> The label for the input color picker.<br />
<strong>4. Placeholder:</strong> The pattern of the active format, such as `#rrggbb`, shown while the input is empty.<br />
<strong>5. Suffix Container:</strong> The container for suffix elements, such as action buttons.<br />
<strong>6. Hint:</strong> The hint text for the input color picker.<br /></span>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>B - Default Color Picker</strong><br /><br />
<strong>1. Color anchor:</strong> Triggers the picker dropdown.<br />
<strong>2. Fill:</strong> Shows the currently selected color.<br />
<strong>3. Label:</strong> The label for the color picker.<br />
<strong>4. Hint:</strong> The hint text for the color picker.<br /></span>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>C - Color Picker Dropdown</strong><br /><br />
<strong>1. Color Picker dropdown:</strong> The popover containing all color selection controls.<br />
<strong>2. Gradient canvas:</strong> An HSV saturation/value area with a draggable marker.<br />
<strong>3. Color Picker marker:</strong> A draggable marker that indicates the currently selected color on the gradient canvas.<br />
<strong>4. Hue slider:</strong> A range slider for the base color.<br />
<strong>5. Hue slider handle:</strong> A draggable marker that indicates the currently selected hue on the hue slider.<br />
<strong>6. Copy button:</strong> Copy the currently selected color to the clipboard.<br />
<strong>7. Eye-dropper button:</strong> Activate the eye-dropper tool for selecting colors from the screen.<br />
<strong>8. Alpha slider:</strong> An optional opacity slider, shown when `show-alpha` is set.<br />
<strong>9. Alpha slider handle:</strong> A draggable marker that indicates the currently selected alpha value on the alpha slider.<br />
<strong>10. Opacity value:</strong> The currently selected opacity value on the alpha slider.<br />
<strong>11. Format switcher:</strong> A dropdown for selecting the color format (`hex`, `rgb`, `hsl`).<br />
<strong>12. Color value:</strong> The currently selected color value displayed according to the chosen format (`hex`, `rgb`, `hsl`).<br />
<strong>13. Swatches:</strong> An optional grid of predefined color swatches.<br /></span>

```text
<igc-color-picker>
└── ::part(color-picker)
    ├── igc-popover
    │   ├── ::part(anchor)                   // trigger button (default mode) or swatch button in the input prefix (input mode)
    │   │                                    // also ::part(empty) with no value, ::part(input-mode) in input mode
    │   └── ::part(picker)                   // dropdown, role="dialog"
    │       ├── ::part(picker-canvas)        // gradient canvas
    │       │   └── ::part(marker)           // focusable slider; also ::part(dragging) while dragged
    │       ├── ::part(main-row)
    │       │   ├── ::part(hue)              // hue range slider
    │       │   └── ::part(buttons)
    │       │       ├── ::part(copy)         // copy-to-clipboard button
    │       │       └── ::part(eye-dropper)  // eye-dropper button
    │       ├── ::part(alpha-row)            // rendered when show-alpha is set
    │       │   ├── ::part(alpha)            // alpha range slider
    │       │   └── ::part(alpha-input)      // alpha percentage input
    │       ├── ::part(inputs-row)
    │       │   ├── ::part(format-select)    // format switcher, hidden when hide-formats is set
    │       │   └── color value input
    │       └── ::part(swatches)             // rendered when swatches is non-empty
    │           └── ::part(swatch)           // individual swatch buttons
    ├── ::part(label)                        // default mode, rendered when label is set
    └── helper text and validation messages
```

## Getting Started

To use the React Color Picker, complete the [Ignite UI for React Getting Started](../general-getting-started.md) topic for the basic project setup, then register the component.

The Color Picker requires `igniteui-react` 19.9.0 or later.

Import the `IgrColorPicker` wrapper and a theme:

```tsx
import { IgrColorPicker } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

Render the Color Picker with a label:

```tsx
<IgrColorPicker label="Pick a color"></IgrColorPicker>
```

## Usage

Set `value` to any CSS color string: hex (with or without the leading `#`), `rgb`/`rgba`, `hsl`/`hsla`, or a named color. An empty or invalid string clears the value, and the anchor shows a checkered pattern.

```tsx
<IgrColorPicker value="#1976d2"></IgrColorPicker>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-color-picker::part(picker) {
    margin-top: 0.5rem;
}

.sample {
    align-items: center;
}
```
```tsx
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrColorPicker } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function ColorPickerValue() {
  const pickerRef = useRef<IgrColorPicker>(null);

  useEffect(() => {
    pickerRef.current?.toggle();
  }, []);

  return (
    <div className="container sample">
      <IgrColorPicker ref={pickerRef} value="#1976d2" label="Pick a color" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPickerValue />);
```

### Mode

The `mode` property controls the anchor presentation. Its default value, `default`, renders a trigger button that previews the current color; `input` renders an editable text field with a color swatch prefix. Both anchors open the same picker dropdown.

```tsx
<IgrColorPicker mode="input" label="Background"></IgrColorPicker>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-color-picker::part(picker) {
    margin-top: 0.5rem;
}

.sample {
    align-items: center;
}
```
```tsx
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrColorPicker } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function ColorPickerInput() {
  const pickerRef = useRef<IgrColorPicker>(null);

  useEffect(() => {
    pickerRef.current?.toggle();
  }, []);

  return (
    <div className="container sample">
      <IgrColorPicker ref={pickerRef} mode="input" label="Background" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPickerInput />);
```

### Format

Use the `format` property to control how the color is serialized. Supported values are `hex`, `rgb`, and `hsl`. Changing the format re-serializes the existing color without altering it, so no `igcInput` or `igcChange` event is emitted.

```tsx
<IgrColorPicker format="rgb" value="#1976d2"></IgrColorPicker>
```

To hide the built-in format switcher and lock the picker to a single format, set the `hideFormats` property.

```tsx
<IgrColorPicker hideFormats={true} format="hex"></IgrColorPicker>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-color-picker::part(picker) {
    margin-top: 0.5rem;
}

.sample {
    align-items: center;
}
```
```tsx
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrColorPicker } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function ColorPickerFormat() {
  const pickerRef = useRef<IgrColorPicker>(null);

  useEffect(() => {
    pickerRef.current?.toggle();
  }, []);

  return (
    <div className="container sample">
      <IgrColorPicker ref={pickerRef} format="rgb" label="Pick a color" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPickerFormat />);
```

### Alpha

By default the picker edits fully opaque colors. Enable the alpha slider and its percentage input by setting the `showAlpha` property.

```tsx
<IgrColorPicker showAlpha={true} value="rgba(25, 118, 210, 0.5)"></IgrColorPicker>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-color-picker::part(picker) {
    margin-top: 0.5rem;
}

.sample {
    align-items: center;
}
```
```tsx
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrColorPicker } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function ColorPickerAlpha() {
  const pickerRef = useRef<IgrColorPicker>(null);

  useEffect(() => {
    pickerRef.current?.toggle();
  }, []);

  return (
    <div className="container sample">
      <IgrColorPicker
        ref={pickerRef}
        label="Pick a color"
        showAlpha={true}
        value="rgba(25, 118, 210, 0.5)"
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPickerAlpha />);
```

### Swatches

Provide a list of predefined colors through the `swatches` property. When set, the picker renders a swatch grid below the color inputs. Clicking a swatch applies it as the current color. There is no limit to the number of swatches you can define.

```tsx
<IgrColorPicker swatches={['#f44336', '#e91e63', '#9c27b0', '#3f51b5', '#2196f3', '#4caf50']}></IgrColorPicker>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

igc-color-picker::part(picker) {
    margin-top: 0.5rem;
}

@media (width < 450px) {
    .container {
        flex-direction: column;
        justify-content: normal;
        gap: 35%;
        align-items: center;
    }
}
```
```tsx
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrColorPicker } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const oneLineSwatches = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#3f51b5",
  "#2196f3",
  "#4caf50",
];

const multiLineSwatches = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#3f51b5",
  "#2196f3",
  "#4caf50",
  "#ffeb3b",
  "#ff9800",
  "#795548",
  "#607d8b",
  "#ffffff",
  "#000000",
  "#0000ff",
  "#00ff00",
  "#ff00ff",
  "#00ffff",
  "#ff0000",
  "#ffff00",
  "#ff00ff",
  "#00ffff",
  "#c0c0c0",
  "#808080",
  "#800000",
  "#808000",
];

export default function ColorPickerSwatches() {
  const oneLineRef = useRef<IgrColorPicker>(null);
  const multiLineRef = useRef<IgrColorPicker>(null);

  useEffect(() => {
    oneLineRef.current?.toggle();
    multiLineRef.current?.toggle();
  }, []);

  return (
    <div className="container sample">
      <IgrColorPicker
        ref={oneLineRef}
        id="one-line"
        label="Pick a color"
        swatches={oneLineSwatches}
      />
      <IgrColorPicker
        ref={multiLineRef}
        id="multi-line"
        label="Pick a color"
        swatches={multiLineSwatches}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPickerSwatches />);
```

### Disabled

Set the `disabled` property to disable the Color Picker.

```tsx
<IgrColorPicker disabled={true} value="#1976d2"></IgrColorPicker>
```

### Validation

Mark the control as `required` to fail form validation when no color is selected. The component supports the standard form-associated API — `checkValidity`, `reportValidity`, and `setCustomValidity`.

Show helper and validation messages under the anchor through these slots:

- `helper-text` – Displays a hint or instructional message below the anchor.
- `value-missing` – Renders custom content when the required field validation fails.
- `invalid` – Renders custom content when the component is in an invalid state.
- `custom-error` – Displays content when a custom validation message is set using `setCustomValidity()`.

```tsx
<IgrColorPicker required={true} label="Brand color">
  <span slot="helper-text">Pick the primary brand color.</span>
  <span slot="value-missing">A color is required.</span>
</IgrColorPicker>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    font-family: "Aktiv Grotesk", sans-serif;
}

span {
    display: block;
    text-align: center;
    margin-block-end: 1rem;
    color: var(--ig-gray-600);
    font-size: 0.875rem;
}

igc-color-picker::part(picker) {
    margin-top: 0.5rem;
}

@media (width < 450px) {
    .container {
        flex-direction: column;
        justify-content: normal;
        gap: 20%;
        align-items: center;
    }
}
```
```tsx
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrColorPicker } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function ColorPickerStates() {
  const defaultRef = useRef<IgrColorPicker>(null);
  const [invalid, setInvalid] = useState(true);

  useEffect(() => {
    defaultRef.current?.toggle();
  }, []);

  return (
    <div className="container sample">
      <div>
        <span>Default state</span>
        <IgrColorPicker ref={defaultRef} id="defaultPicker" label="Pick a color" />
      </div>
      <div>
        <span>Invalid state</span>
        <IgrColorPicker
          id="invalidPicker"
          invalid={invalid}
          required={true}
          label="Pick a color"
          onInput={() => setInvalid(false)}
        />
      </div>
      <div>
        <span>Disabled state</span>
        <IgrColorPicker disabled={true} label="Pick a color" />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPickerStates />);
```

### Size

Control the Color Picker size by setting the `--ig-size` variable to one of three options: `--ig-size-small`, `--ig-size-medium`, or `--ig-size-large`. This can be used to adjust the size of both the default and input mode anchors, as well as the dropdown window.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.smallPicker {
    --ig-size: var(--ig-size-small);
}

.mediumPicker {
    --ig-size: var(--ig-size-medium);
}

.largePicker {
    --ig-size: var(--ig-size-large);
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    font-family: "Aktiv Grotesk", sans-serif;
}

span {
    display: block;
    text-align: center;
    margin-block-end: 1rem;
    color: var(--ig-gray-600);
    font-size: 0.875rem;
}

igc-color-picker::part(picker) {
    margin-top: 0.5rem;
}

@media (width < 450px) {
    .container {
        flex-direction: column;
        justify-content: normal;
        gap: 1rem;
        align-items: center;
    }
}
```
```tsx
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrColorPicker } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function ColorPickerSizes() {
  const smallRef = useRef<IgrColorPicker>(null);

  useEffect(() => {
    smallRef.current?.toggle();
  }, []);

  return (
    <div className="container sample">
      <div>
        <span>Small</span>
        <IgrColorPicker ref={smallRef} className="smallPicker" label="Pick a color" />
      </div>
      <div>
        <span>Medium</span>
        <IgrColorPicker className="mediumPicker" label="Pick a color" />
      </div>
      <div>
        <span>Large</span>
        <IgrColorPicker className="largePicker" label="Pick a color" />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPickerSizes />);
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.smallPicker {
    --ig-size: var(--ig-size-small);
}

.mediumPicker {
    --ig-size: var(--ig-size-medium);
}

.largePicker {
    --ig-size: var(--ig-size-large);
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    font-family: "Aktiv Grotesk", sans-serif;
}

span {
    display: block;
    text-align: center;
    margin-block-end: 1rem;
    color: var(--ig-gray-600);
    font-size: 0.875rem;
}

igc-color-picker::part(picker) {
    margin-top: 0.5rem;
}

@media (width < 450px) {
    .container {
        flex-direction: column;
        justify-content: normal;
        gap: 5.5rem;
        align-items: center;
    }
}
```
```tsx
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrColorPicker } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function ColorPickerInputSizes() {
  const smallRef = useRef<IgrColorPicker>(null);

  useEffect(() => {
    smallRef.current?.toggle();
  }, []);

  return (
    <div className="container sample">
      <div>
        <span>Small</span>
        <IgrColorPicker ref={smallRef} className="smallPicker" mode="input" label="Pick a color" />
      </div>
      <div>
        <span>Medium</span>
        <IgrColorPicker className="mediumPicker" mode="input" label="Pick a color" />
      </div>
      <div>
        <span>Large</span>
        <IgrColorPicker className="largePicker" mode="input" label="Pick a color" />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPickerInputSizes />);
```

### Do/Don't

**When to use:** Use the Color Picker when users need to enter or edit an arbitrary color through a visual editor and the value must take part in form submission and validation. Always provide a clear label, and prefer `input` mode when the picker sits alongside other form fields.

**When not to use:** When users only choose from a small fixed set of colors, render that set as regular buttons or a select instead.

<table class="table" style="width: 100%; margin: 0 auto 26px;">
  <tbody>
    <tr>
      <td style="width: 50%; border: none; padding: 0 13px 13px 0;">
      </td>
      <td style="width: 50%; border: none; padding: 0 0 13px 13px;">
      </td>
    </tr>
    <tr>
      <td style="border: none; padding: 13px 13px 13px 0; color: green;">
        <strong>Do</strong>
      </td>
      <td style="border: none; padding: 13px 0 13px 13px; color: red;">
        <strong>Don't</strong>
      </td>
    </tr>
    <tr>
      <td style="border: none; padding: 13px 13px 13px 0; text-align: left;">
        Bring in the full Color Picker for open-ended, creative tasks — a drawing tool's brush, an illustration fill, a chart series, a custom theme.
      </td>
      <td style="border: none; padding: 13px 0 13px 13px; text-align: left;">
        Avoid using the Color Picker if users only need to select from a set palette or don't require advanced customization options.
      </td>
    </tr>
  </tbody>
</table>

## Properties

The React Color Picker exposes properties for its content, presentation, and form association.

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `value` | `string` | `''` | The current color, serialized in the active format. |
| `label` | `string` | — | The label of the anchor. In `mode="input"` it is forwarded to the anchor input's own label. |
| `format` | `'hex' \| 'rgb' \| 'hsl'` | `'hex'` | The output format used when serializing the value string. |
| `mode` | `'default' \| 'input'` | `'default'` | Whether the anchor is a trigger button (`default`) or an editable text field with a swatch prefix (`input`). |
| `swatches` | `string[]` | `[]` | Predefined color strings rendered as a selectable swatch grid. |
| `hideFormats` | `boolean` | `false` | Whether to hide the format switcher. |
| `showAlpha` | `boolean` | `false` | Whether to show the alpha slider and its percentage input. |
| `required` | `boolean` | `false` | Whether the control is required for form validation. |
| `disabled` | `boolean` | `false` | The disabled state of the control. |
| `open` | `boolean` | `false` | The open state of the picker dropdown. |
| `name` | `string` | — | The name of the control for form submission. |
| `invalid` | `boolean` | `false` | Sets or returns the invalid visual state of the control. |

## Methods

| Name | Return type | Description |
| -- | -- | -- |
| `show` | `Promise<boolean>` | Opens the picker dropdown without emitting `igcOpening` or `igcOpened`. |
| `hide` | `Promise<boolean>` | Closes the picker dropdown without emitting `igcClosing` or `igcClosed`. |
| `toggle` | `Promise<boolean>` | Toggles the open state of the picker dropdown without emitting events. |
| `checkValidity` | `boolean` | Checks the validity of the control without showing a message. |
| `reportValidity` | `boolean` | Checks the validity of the control and reports it to the user. |
| `setCustomValidity` | `void` | Sets a custom validation message. Pass an empty string to clear. |

## Events

| Name | Cancelable | Detail | Description |
| -- | -- | -- | -- |
| `igcInput` | No | `string` | Emitted on every interim change from the gradient canvas, the hue and alpha sliders, the alpha input, a swatch, or the eye-dropper. |
| `igcChange` | No | `string` | Emitted when focus leaves the component and the color differs from the one it had when focus entered. |
| `igcOpening` | Yes | `void` | Emitted just before the user opens the picker dropdown. Cancel with `event.preventDefault()`. |
| `igcOpened` | No | `void` | Emitted after the user opens the picker dropdown. |
| `igcClosing` | Yes | `void` | Emitted just before the user closes the picker dropdown. Cancel with `event.preventDefault()`. |
| `igcClosed` | No | `void` | Emitted after the user closes the picker dropdown. |

## Styling

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
    align-items: center;
}

igc-color-picker {
    --ig-color-picker-picker-background: #e6f2ff;
    --ig-color-picker-picker-border-color: #a9b8cc;
    --ig-color-picker-picker-border-radius: 1rem;
    --ig-color-picker-picker-elevation: none;
}

igc-color-picker::part(anchor) {
    border: 0.125rem solid #a9b8cc;
}

igc-color-picker::part(picker-canvas) {
    border-radius: 0.25rem;
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./layout.css";
import "./index.css";
import { IgrColorPicker, IgrIconButton, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/material.css";

const textColorIcon =
  '<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M0.875 13C0.627083 13 0.419271 12.9156 0.251563 12.7466C0.0838543 12.5777 0 12.3685 0 12.1188C0 11.8691 0.0838543 11.6581 0.251563 11.4858C0.419271 11.3134 0.627083 11.2273 0.875 11.2273H13.125C13.3729 11.2273 13.5807 11.3117 13.7484 11.4806C13.9161 11.6495 14 11.8588 14 12.1085C14 12.3581 13.9161 12.5691 13.7484 12.7415C13.5807 12.9138 13.3729 13 13.125 13H0.875ZM3.04233 8.42439L5.97917 0.517045C6.04398 0.352904 6.14096 0.225694 6.2701 0.135417C6.39925 0.0451389 6.54532 0 6.70833 0H7.30382C7.47396 0 7.62384 0.0451389 7.75347 0.135417C7.8831 0.225694 7.98032 0.352904 8.04514 0.517045L10.9618 8.42045C11.059 8.66979 11.0388 8.90451 10.901 9.12462C10.7633 9.34457 10.5587 9.45455 10.2871 9.45455C10.1212 9.45455 9.96998 9.40785 9.83354 9.31445C9.69695 9.22105 9.59988 9.0954 9.54236 8.9375L8.89583 7.04167H5.1258L4.44792 8.96212C4.39931 9.10985 4.3097 9.22885 4.1791 9.31913C4.0485 9.40941 3.90331 9.45455 3.74354 9.45455C3.46775 9.45455 3.25694 9.34375 3.11111 9.12216C2.96528 8.90057 2.94235 8.66798 3.04233 8.42439ZM5.59028 5.66288H8.40972L7.06003 1.77273H6.97569L5.59028 5.66288Z" fill="currentColor"/></svg>';

const alignJustifyIcon =
  '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M0.696429 13C0.499107 13 0.333705 12.9336 0.200223 12.8009C0.0667412 12.6682 0 12.5038 0 12.3076C0 12.1115 0.0667412 11.9457 0.200223 11.8103C0.333705 11.6749 0.499107 11.6071 0.696429 11.6071H12.3036C12.5009 11.6071 12.6663 11.6735 12.7998 11.8062C12.9333 11.9389 13 12.1033 13 12.2995C13 12.4957 12.9333 12.6615 12.7998 12.7969C12.6663 12.9323 12.5009 13 12.3036 13H0.696429ZM0.696429 10.0982C0.499107 10.0982 0.333705 10.0319 0.200223 9.89915C0.0667412 9.76644 0 9.60201 0 9.40585C0 9.20969 0.0667412 9.0439 0.200223 8.90848C0.333705 8.77307 0.499107 8.70536 0.696429 8.70536H12.3036C12.5009 8.70536 12.6663 8.77171 12.7998 8.90442C12.9333 9.03713 13 9.20156 13 9.39772C13 9.59388 12.9333 9.75967 12.7998 9.89509C12.6663 10.0305 12.5009 10.0982 12.3036 10.0982H0.696429ZM0.696429 7.19643C0.499107 7.19643 0.333705 7.13007 0.200223 6.99737C0.0667412 6.86466 0 6.70022 0 6.50406C0 6.3079 0.0667412 6.14211 0.200223 6.0067C0.333705 5.87128 0.499107 5.80357 0.696429 5.80357H12.3036C12.5009 5.80357 12.6663 5.86993 12.7998 6.00263C12.9333 6.13534 13 6.29978 13 6.49594C13 6.6921 12.9333 6.85789 12.7998 6.9933C12.6663 7.12872 12.5009 7.19643 12.3036 7.19643H0.696429ZM0.696429 4.29464C0.499107 4.29464 0.333705 4.22829 0.200223 4.09558C0.0667412 3.96287 0 3.79844 0 3.60228C0 3.40612 0.0667412 3.24033 0.200223 3.10491C0.333705 2.96949 0.499107 2.90179 0.696429 2.90179H12.3036C12.5009 2.90179 12.6663 2.96814 12.7998 3.10085C12.9333 3.23356 13 3.39799 13 3.59415C13 3.79031 12.9333 3.9561 12.7998 4.09152C12.6663 4.22693 12.5009 4.29464 12.3036 4.29464H0.696429ZM0.696429 1.39286C0.499107 1.39286 0.333705 1.3265 0.200223 1.1938C0.0667412 1.06109 0 0.896652 0 0.700492C0 0.504331 0.0667412 0.338542 0.200223 0.203125C0.333705 0.0677083 0.499107 0 0.696429 0H12.3036C12.5009 0 12.6663 0.0663537 12.7998 0.199062C12.9333 0.33177 13 0.496205 13 0.692366C13 0.888526 12.9333 1.05432 12.7998 1.18973C12.6663 1.32515 12.5009 1.39286 12.3036 1.39286H0.696429Z" fill="currentColor"/></svg>';

const alignRightIcon =
  '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M0.696429 1.39286C0.499107 1.39286 0.333705 1.3265 0.200223 1.1938C0.0667412 1.06109 0 0.896652 0 0.700492C0 0.504331 0.0667412 0.338542 0.200223 0.203125C0.333705 0.0677083 0.499107 0 0.696429 0H12.3036C12.5009 0 12.6663 0.0663537 12.7998 0.199062C12.9333 0.33177 13 0.496205 13 0.692366C13 0.888526 12.9333 1.05432 12.7998 1.18973C12.6663 1.32515 12.5009 1.39286 12.3036 1.39286H0.696429ZM4.41071 4.29464C4.21339 4.29464 4.04799 4.22829 3.91451 4.09558C3.78103 3.96287 3.71429 3.79844 3.71429 3.60228C3.71429 3.40612 3.78103 3.24033 3.91451 3.10491C4.04799 2.96949 4.21339 2.90179 4.41071 2.90179H12.3036C12.5009 2.90179 12.6663 2.96814 12.7998 3.10085C12.9333 3.23356 13 3.39799 13 3.59415C13 3.79031 12.9333 3.9561 12.7998 4.09152C12.6663 4.22693 12.5009 4.29464 12.3036 4.29464H4.41071ZM0.696429 7.19643C0.499107 7.19643 0.333705 7.13007 0.200223 6.99737C0.0667412 6.86466 0 6.70022 0 6.50406C0 6.3079 0.0667412 6.14211 0.200223 6.0067C0.333705 5.87128 0.499107 5.80357 0.696429 5.80357H12.3036C12.5009 5.80357 12.6663 5.86993 12.7998 6.00263C12.9333 6.13534 13 6.29978 13 6.49594C13 6.6921 12.9333 6.85789 12.7998 6.9933C12.6663 7.12872 12.5009 7.19643 12.3036 7.19643H0.696429ZM4.41071 10.0982C4.21339 10.0982 4.04799 10.0319 3.91451 9.89915C3.78103 9.76644 3.71429 9.60201 3.71429 9.40585C3.71429 9.20969 3.78103 9.0439 3.91451 8.90848C4.04799 8.77307 4.21339 8.70536 4.41071 8.70536H12.3036C12.5009 8.70536 12.6663 8.77171 12.7998 8.90442C12.9333 9.03713 13 9.20156 13 9.39772C13 9.59388 12.9333 9.75967 12.7998 9.89509C12.6663 10.0305 12.5009 10.0982 12.3036 10.0982H4.41071ZM0.696429 13C0.499107 13 0.333705 12.9336 0.200223 12.8009C0.0667412 12.6682 0 12.5038 0 12.3076C0 12.1115 0.0667412 11.9457 0.200223 11.8103C0.333705 11.6749 0.499107 11.6071 0.696429 11.6071H12.3036C12.5009 11.6071 12.6663 11.6735 12.7998 11.8062C12.9333 11.9389 13 12.1033 13 12.2995C13 12.4957 12.9333 12.6615 12.7998 12.7969C12.6663 12.9323 12.5009 13 12.3036 13H0.696429Z" fill="currentColor"/></svg>';

const alignCenterIcon =
  '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M0.696429 13C0.499107 13 0.333705 12.9336 0.200223 12.8009C0.0667412 12.6682 0 12.5038 0 12.3076C0 12.1115 0.0667412 11.9457 0.200223 11.8103C0.333705 11.6749 0.499107 11.6071 0.696429 11.6071H12.3036C12.5009 11.6071 12.6663 11.6735 12.7998 11.8062C12.9333 11.9389 13 12.1033 13 12.2995C13 12.4957 12.9333 12.6615 12.7998 12.7969C12.6663 12.9323 12.5009 13 12.3036 13H0.696429ZM3.48214 10.0982C3.28482 10.0982 3.11942 10.0319 2.98594 9.89915C2.85246 9.76644 2.78571 9.60201 2.78571 9.40585C2.78571 9.20969 2.85246 9.0439 2.98594 8.90848C3.11942 8.77307 3.28482 8.70536 3.48214 8.70536H9.51786C9.71518 8.70536 9.88058 8.77171 10.0141 8.90442C10.1475 9.03713 10.2143 9.20156 10.2143 9.39772C10.2143 9.59388 10.1475 9.75967 10.0141 9.89509C9.88058 10.0305 9.71518 10.0982 9.51786 10.0982H3.48214ZM0.696429 7.19643C0.499107 7.19643 0.333705 7.13007 0.200223 6.99737C0.0667412 6.86466 0 6.70022 0 6.50406C0 6.3079 0.0667412 6.14211 0.200223 6.0067C0.333705 5.87128 0.499107 5.80357 0.696429 5.80357H12.3036C12.5009 5.80357 12.6663 5.86993 12.7998 6.00263C12.9333 6.13534 13 6.29978 13 6.49594C13 6.6921 12.9333 6.85789 12.7998 6.9933C12.6663 7.12872 12.5009 7.19643 12.3036 7.19643H0.696429ZM3.48214 4.29464C3.28482 4.29464 3.11942 4.22829 2.98594 4.09558C2.85246 3.96287 2.78571 3.79844 2.78571 3.60228C2.78571 3.40612 2.85246 3.24033 2.98594 3.10491C3.11942 2.96949 3.28482 2.90179 3.48214 2.90179H9.51786C9.71518 2.90179 9.88058 2.96814 10.0141 3.10085C10.1475 3.23356 10.2143 3.39799 10.2143 3.59415C10.2143 3.79031 10.1475 3.9561 10.0141 4.09152C9.88058 4.22693 9.71518 4.29464 9.51786 4.29464H3.48214ZM0.696429 1.39286C0.499107 1.39286 0.333705 1.3265 0.200223 1.1938C0.0667412 1.06109 0 0.896652 0 0.700492C0 0.504331 0.0667412 0.338542 0.200223 0.203125C0.333705 0.0677083 0.499107 0 0.696429 0H12.3036C12.5009 0 12.6663 0.0663537 12.7998 0.199062C12.9333 0.33177 13 0.496205 13 0.692366C13 0.888526 12.9333 1.05432 12.7998 1.18973C12.6663 1.32515 12.5009 1.39286 12.3036 1.39286H0.696429Z" fill="currentColor"/></svg>';

const alignLeftIcon =
  '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M0.696429 13C0.499107 13 0.333705 12.9336 0.200223 12.8009C0.0667412 12.6682 0 12.5038 0 12.3076C0 12.1115 0.0667412 11.9457 0.200223 11.8103C0.333705 11.6749 0.499107 11.6071 0.696429 11.6071H12.3036C12.5009 11.6071 12.6663 11.6735 12.7998 11.8062C12.9333 11.9389 13 12.1033 13 12.2995C13 12.4957 12.9333 12.6615 12.7998 12.7969C12.6663 12.9323 12.5009 13 12.3036 13H0.696429ZM0.696429 10.0982C0.499107 10.0982 0.333705 10.0319 0.200223 9.89915C0.0667412 9.76644 0 9.60201 0 9.40585C0 9.20969 0.0667412 9.0439 0.200223 8.90848C0.333705 8.77307 0.499107 8.70536 0.696429 8.70536H8.58929C8.78661 8.70536 8.95201 8.77171 9.08549 8.90442C9.21897 9.03713 9.28571 9.20156 9.28571 9.39772C9.28571 9.59388 9.21897 9.75967 9.08549 9.89509C8.95201 10.0305 8.78661 10.0982 8.58929 10.0982H0.696429ZM0.696429 7.19643C0.499107 7.19643 0.333705 7.13007 0.200223 6.99737C0.0667412 6.86466 0 6.70022 0 6.50406C0 6.3079 0.0667412 6.14211 0.200223 6.0067C0.333705 5.87128 0.499107 5.80357 0.696429 5.80357H12.3036C12.5009 5.80357 12.6663 5.86993 12.7998 6.00263C12.9333 6.13534 13 6.29978 13 6.49594C13 6.6921 12.9333 6.85789 12.7998 6.9933C12.6663 7.12872 12.5009 7.19643 12.3036 7.19643H0.696429ZM0.696429 4.29464C0.499107 4.29464 0.333705 4.22829 0.200223 4.09558C0.0667412 3.96287 0 3.79844 0 3.60228C0 3.40612 0.0667412 3.24033 0.200223 3.10491C0.333705 2.96949 0.499107 2.90179 0.696429 2.90179H8.58929C8.78661 2.90179 8.95201 2.96814 9.08549 3.10085C9.21897 3.23356 9.28571 3.39799 9.28571 3.59415C9.28571 3.79031 9.21897 3.9561 9.08549 4.09152C8.95201 4.22693 8.78661 4.29464 8.58929 4.29464H0.696429ZM0.696429 1.39286C0.499107 1.39286 0.333705 1.3265 0.200223 1.1938C0.0667412 1.06109 0 0.896652 0 0.700492C0 0.504331 0.0667412 0.338542 0.200223 0.203125C0.333705 0.0677083 0.499107 0 0.696429 0H12.3036C12.5009 0 12.6663 0.0663537 12.7998 0.199062C12.9333 0.33177 13 0.496205 13 0.692366C13 0.888526 12.9333 1.05432 12.7998 1.18973C12.6663 1.32515 12.5009 1.39286 12.3036 1.39286H0.696429Z" fill="currentColor"/></svg>';

const shapesIcon =
  '<svg width="15.2708" height="14.5" viewBox="0 0 15.2708 14.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M0.104167 5.375L2.8125 0.645833C2.88194 0.520833 2.97569 0.427083 3.09375 0.364583C3.21181 0.302083 3.33333 0.270833 3.45833 0.270833C3.58333 0.270833 3.70486 0.302083 3.82292 0.364583C3.94097 0.427083 4.03472 0.520833 4.10417 0.645833L6.8125 5.375C6.88194 5.5 6.91667 5.62847 6.91667 5.76042C6.91667 5.89236 6.88194 6.01389 6.8125 6.125C6.74306 6.23611 6.65625 6.32639 6.55208 6.39583C6.44792 6.46528 6.32049 6.5 6.16979 6.5H0.746875C0.596181 6.5 0.46875 6.46528 0.364583 6.39583C0.260417 6.32639 0.173611 6.23611 0.104167 6.125C0.0347222 6.01389 0 5.89236 0 5.76042C0 5.62847 0.0347222 5.5 0.104167 5.375ZM1.33333 13.62C0.75 13.0333 0.458333 12.3281 0.458333 11.5044C0.458333 10.6681 0.75 9.95833 1.33333 9.375C1.91667 8.79167 2.625 8.5 3.45833 8.5C4.29167 8.5 5 8.79167 5.58333 9.375C6.16667 9.95833 6.45833 10.6667 6.45833 11.5C6.45833 12.3333 6.16667 13.0417 5.58333 13.625C5 14.2083 4.29167 14.5 3.45833 14.5C2.625 14.5 1.91667 14.2067 1.33333 13.62ZM4.52083 12.5581C4.8125 12.2635 4.95833 11.9094 4.95833 11.4956C4.95833 11.0819 4.81104 10.7292 4.51646 10.4375C4.22188 10.1458 3.86771 10 3.45396 10C3.04021 10 2.6875 10.1473 2.39583 10.4419C2.10417 10.7365 1.95833 11.0906 1.95833 11.5044C1.95833 11.9181 2.10563 12.2708 2.40021 12.5625C2.69479 12.8542 3.04896 13 3.46271 13C3.87646 13 4.22917 12.8527 4.52083 12.5581ZM2.0625 5H4.85417L3.45833 2.52083L2.0625 5ZM8.45833 13.7508V9.25583C8.45833 9.04361 8.53014 8.86458 8.67375 8.71875C8.81736 8.57292 8.99528 8.5 9.2075 8.5H13.7025C13.9147 8.5 14.0938 8.57181 14.2396 8.71542C14.3854 8.85903 14.4583 9.03694 14.4583 9.24917V13.7442C14.4583 13.9564 14.3865 14.1354 14.2429 14.2813C14.0993 14.4271 13.9214 14.5 13.7092 14.5H9.21417C9.00195 14.5 8.82292 14.4282 8.67708 14.2846C8.53125 14.141 8.45833 13.9631 8.45833 13.7508ZM9.95833 13H12.9583V10H9.95833V13ZM10.9792 6.10417L9.91667 5.20833C9.04167 4.47222 8.44444 3.90278 8.125 3.5C7.80556 3.09722 7.64583 2.63097 7.64583 2.10125C7.64583 1.51986 7.84028 1.02431 8.22917 0.614583C8.61806 0.204861 9.12125 0 9.73875 0C10.0935 0 10.4132 0.0729167 10.6979 0.21875C10.9826 0.364583 11.2361 0.590278 11.4583 0.895833C11.6806 0.590278 11.9375 0.364583 12.2292 0.21875C12.5208 0.0729167 12.8415 0 13.1913 0C13.7999 0 14.2986 0.203195 14.6875 0.609584C15.0764 1.01597 15.2708 1.51417 15.2708 2.10417C15.2708 2.63194 15.1146 3.09028 14.8021 3.47917C14.4896 3.86806 13.8958 4.4375 13.0208 5.1875L11.9375 6.10417C11.8033 6.21528 11.6448 6.27083 11.4619 6.27083C11.279 6.27083 11.1181 6.21528 10.9792 6.10417ZM11.4583 4.5C12.4028 3.70833 13.0243 3.16319 13.3229 2.86458C13.6215 2.56597 13.7708 2.30556 13.7708 2.08333C13.7708 1.93056 13.7153 1.79514 13.6042 1.67708C13.4931 1.55903 13.3629 1.5 13.2138 1.5C13.099 1.5 12.9931 1.52778 12.8958 1.58333C12.7986 1.63889 12.7153 1.70833 12.6458 1.79167L11.4583 2.89583L10.2917 1.79167C10.2083 1.70833 10.1166 1.63889 10.0165 1.58333C9.91646 1.52778 9.81375 1.5 9.70833 1.5C9.55556 1.5 9.42361 1.55903 9.3125 1.67708C9.20139 1.79514 9.14583 1.93056 9.14583 2.08333C9.14583 2.31944 9.30208 2.59028 9.61458 2.89583C9.92708 3.20139 10.5417 3.73611 11.4583 4.5Z" fill="currentColor"/></svg>';

const imageIcon =
  '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M1.5 14C1.0875 14 0.734375 13.8507 0.440625 13.5521C0.146875 13.2535 0 12.9028 0 12.5V1.5C0 1.09722 0.146875 0.746528 0.440625 0.447917C0.734375 0.149306 1.0875 0 1.5 0H12.5C12.9125 0 13.2656 0.149306 13.5594 0.447917C13.8531 0.746528 14 1.09722 14 1.5V12.5C14 12.9028 13.8531 13.2535 13.5594 13.5521C13.2656 13.8507 12.9125 14 12.5 14H1.5ZM1.5 12.5H12.5V1.5H1.5V12.5ZM3.25 11H10.754C10.9041 11 11.0139 10.9306 11.0833 10.7917C11.1528 10.6528 11.1389 10.5208 11.0417 10.3958L8.79167 7.39583C8.71875 7.28472 8.62153 7.22917 8.5 7.22917C8.37847 7.22917 8.28125 7.28472 8.20833 7.39583L6.25 10L5.04167 8.39583C4.96875 8.28472 4.87153 8.22917 4.75 8.22917C4.62847 8.22917 4.53125 8.28472 4.45833 8.39583L2.96208 10.3965C2.86236 10.521 2.84896 10.6528 2.92188 10.7917C2.99479 10.9306 3.10417 11 3.25 11Z" fill="currentColor"/></svg>';

const layoutIcon =
  '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M1.5 14C1.09722 14 0.746528 13.8507 0.447917 13.5521C0.149306 13.2535 0 12.9028 0 12.5V1.5C0 1.0875 0.149306 0.734376 0.447917 0.440626C0.746528 0.146876 1.09722 0 1.5 0H12.5C12.9125 0 13.2656 0.146876 13.5594 0.440626C13.8531 0.734376 14 1.0875 14 1.5V12.5C14 12.9028 13.8531 13.2535 13.5594 13.5521C13.2656 13.8507 12.9125 14 12.5 14H1.5ZM1.5 12.5H6.25V1.5H1.5V12.5ZM7.75 12.5H12.5V7H7.75V12.5ZM7.75 5.5H12.5V1.5H7.75V5.5Z" fill="currentColor"/></svg>';

const barChartIcon =
  '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M1.5 14C1.0875 14 0.734375 13.8531 0.440625 13.5594C0.146875 13.2656 0 12.9125 0 12.5V1.5C0 1.0875 0.146875 0.734376 0.440625 0.440626C0.734375 0.146876 1.0875 0 1.5 0H12.5C12.9125 0 13.2656 0.146876 13.5594 0.440626C13.8531 0.734376 14 1.0875 14 1.5V12.5C14 12.9125 13.8531 13.2656 13.5594 13.5594C13.2656 13.8531 12.9125 14 12.5 14H1.5ZM1.5 12.5H12.5V1.5H1.5V12.5ZM3.21875 5.21562C3.07292 5.35937 3 5.5375 3 5.75V10.25C3 10.4625 3.07146 10.6406 3.21438 10.7844C3.35729 10.9281 3.53438 11 3.74563 11C3.95688 11 4.13542 10.9281 4.28125 10.7844C4.42708 10.6406 4.5 10.4625 4.5 10.25V5.75C4.5 5.5375 4.42854 5.35937 4.28562 5.21562C4.14271 5.07187 3.96562 5 3.75437 5C3.54312 5 3.36458 5.07187 3.21875 5.21562ZM6.46875 3.21562C6.32292 3.35937 6.25 3.5375 6.25 3.75V10.25C6.25 10.4625 6.32146 10.6406 6.46438 10.7844C6.60729 10.9281 6.78438 11 6.99563 11C7.20688 11 7.38542 10.9281 7.53125 10.7844C7.67708 10.6406 7.75 10.4625 7.75 10.25V3.75C7.75 3.5375 7.67854 3.35937 7.53563 3.21562C7.39271 3.07187 7.21563 3 7.00438 3C6.79313 3 6.61458 3.07187 6.46875 3.21562ZM9.71875 8.215C9.57292 8.35847 9.5 8.53618 9.5 8.74813V10.2446C9.5 10.4565 9.57146 10.6354 9.71437 10.7813C9.85729 10.9271 10.0344 11 10.2456 11C10.4569 11 10.6354 10.9283 10.7813 10.785C10.9271 10.6415 11 10.4638 11 10.2519V8.75542C11 8.54347 10.9285 8.36458 10.7856 8.21875C10.6427 8.07292 10.4656 8 10.2544 8C10.0431 8 9.86458 8.07167 9.71875 8.215Z" fill="currentColor"/></svg>';

const editorIcons: Record<string, string> = {
  "text-color": textColorIcon,
  "align-justify": alignJustifyIcon,
  "align-right": alignRightIcon,
  "align-center": alignCenterIcon,
  "align-left": alignLeftIcon,
  shapes: shapesIcon,
  image: imageIcon,
  layout: layoutIcon,
  "bar-chart": barChartIcon,
};

export default function ColorPickerStyling() {
  useEffect(() => {
    for (const [name, svg] of Object.entries(editorIcons)) {
      registerIconFromText(name, svg);
    }
  }, []);

  return (
    <div className="container sample">
      <div className="editor-toolbar">
        <div className="toolbar-group">
          <span className="toolbar-group-label">Text</span>
          <div className="toolbar-actions">
            <IgrIconButton variant="flat" name="text-color" aria-label="Text color" />
          </div>
        </div>
        <div className="toolbar-group">
          <span className="toolbar-group-label">Alignment</span>
          <div className="toolbar-actions" data-single-select="true">
            <IgrIconButton variant="flat" name="align-justify" aria-label="Justify" />
            <IgrIconButton variant="flat" name="align-right" aria-label="Align right" />
            <IgrIconButton variant="flat" name="align-center" aria-label="Align center" />
            <IgrIconButton variant="flat" name="align-left" aria-label="Align left" />
          </div>
        </div>
        <div className="toolbar-group">
          <span className="toolbar-group-label">Content</span>
          <div className="toolbar-actions">
            <IgrIconButton variant="flat" name="shapes" aria-label="Shapes" />
            <IgrIconButton variant="flat" name="image" aria-label="Image" />
            <IgrIconButton variant="flat" name="layout" aria-label="Layout" />
          </div>
        </div>
        <div className="toolbar-group">
          <span className="toolbar-group-label">Charts</span>
          <div className="toolbar-actions">
            <IgrIconButton variant="flat" name="bar-chart" aria-label="Bar chart" />
          </div>
        </div>
        <div className="toolbar-group">
          <span className="toolbar-group-label">Colors</span>
          <div className="toolbar-actions">
            <IgrColorPicker mode="input" placeholder="Color" />
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPickerStyling />);
```
```css
.editor-toolbar {
    display: flex;
    align-items: stretch;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 1rem;
    background: #00142b;
    font-family: "Aktiv Grotesk", sans-serif;
}

.toolbar-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
}

.toolbar-group .toolbar-actions {
    flex: 1;
}

.toolbar-group-label {
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1rem;
    letter-spacing: 0.009375rem;
    color: #d2dbe8;
}

.toolbar-actions {
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    background: #556c86;
}

igc-icon-button::part(base) {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    border-radius: 1.125rem;
    background: transparent;
    color: #fcfcfc;
}

igc-icon-button::part(icon) {
    --size: 0.875rem;
}

igc-icon-button:hover::part(base) {
    background: rgb(255 255 255 / 15%);
}

igc-icon-button {
    --foreground: #fff;
    padding: 0.5rem;
}

igc-color-picker {
    --ig-size: var(--ig-size-small);
    --ig-input-group-border-color: transparent;
    --ig-input-group-hover-border-color: rgb(255 255 255 / 15%);
    --ig-input-group-focused-border-color: transparent;
    --ig-input-group-border-border-radius: 0.5rem;
    --ig-input-group-filled-text-color: #fff;
    --ig-input-group-filled-text-hover-color: #fff;
    --ig-input-group-focused-text-color: #fff;
    --ig-input-group-placeholder-color: #fff;
    --ig-input-group-hover-placeholder-color: #fff;
    --ig-input-group-focus-placeholder-color: #fff;

    width: 8.75rem;
}

igc-color-picker::part(picker) {
    --ig-input-group-filled-text-color: var(--ig-gray-900);
    --ig-input-group-filled-text-hover-color: var(--ig-gray-900);
    --ig-input-group-focused-text-color: var(--ig-gray-900);
    --ig-input-group-placeholder-color: var(--ig-gray-900);
    --ig-input-group-hover-placeholder-color: var(--ig-gray-900);
    --ig-input-group-focus-placeholder-color: var(--ig-gray-900);
    --ig-input-group-border-color: var(--ig-gray-500);
    --ig-input-group-hover-border-color: var(--ig-gray-500);
    --ig-input-group-focused-border-color: var(--ig-gray-500);
    --ig-input-group-border-border-radius: 0.25rem;

    margin-top: 1.25rem;
}

igc-color-picker::part(anchor) {
    width: 1rem;
    height: 1rem;
    border-radius: 0.1875rem;
}

.toolbar-group:nth-child(2) {
    igc-icon-button:nth-of-type(2) {
        padding-inline: unset;
    }

    igc-icon-button:nth-of-type(3) {
        padding-inline-end: unset;
    }
}

.toolbar-group:nth-child(3) igc-icon-button:nth-of-type(2) {
    padding-inline: unset;
}

@media (width < 640px) {
    .container {
        width: fit-content;
    }
}
```

The React Color Picker appearance can be customized through CSS variables, CSS parts and the theming system.

### Styling Variables

| Variable | What it changes |
| -- | -- |
| `--ig-color-picker-label-color` | Color of the color picker label. |
| `--ig-color-picker-label-color-invalid` | Color of the label when the component is invalid. |
| `--ig-color-picker-label-color-disabled` | Color of the label when the component is disabled. |
| `--ig-color-picker-anchor-background` | Background color of the color picker anchor. |
| `--ig-color-picker-anchor-background-hover` | Background color of the anchor on hover. |
| `--ig-color-picker-anchor-background-focus-visible` | Background color of the anchor when focus is visible. |
| `--ig-color-picker-anchor-background-focus-visible-hover` | Background color of the anchor when focus is visible and it is hovered. |
| `--ig-color-picker-anchor-background-active` | Background color of the anchor while active. |
| `--ig-color-picker-anchor-background-active-focus-visible` | Background color of the anchor while active with visible focus. |
| `--ig-color-picker-anchor-background-disabled` | Background color of the anchor when disabled. |
| `--ig-color-picker-anchor-outline-color` | Focus-visible outline color of the anchor. |
| `--ig-color-picker-anchor-border-color` | Border color of the anchor. |
| `--ig-color-picker-anchor-border-color-disabled` | Border color of the anchor when disabled. |
| `--ig-color-picker-anchor-border-radius` | Border radius of the anchor. |
| `--ig-color-picker-swatch-preview-border-color` | Border color of the color preview inside the anchor. |
| `--ig-color-picker-picker-background` | Background color of the picker dropdown. |
| `--ig-color-picker-picker-border-color` | Border color of the picker dropdown. |
| `--ig-color-picker-picker-border-radius` | Border radius of the picker dropdown. |
| `--ig-color-picker-picker-canvas-border-color` | Border color of the picker gradient canvas. |
| `--ig-color-picker-picker-elevation` | Shadow of the picker dropdown. |
| `--ig-color-picker-slider-track-border-color` | Border color of the hue and alpha slider tracks. |
| `--ig-color-picker-slider-track-border-radius` | Border radius of the hue and alpha slider tracks. |
| `--ig-color-picker-slider-thumb-border-color` | Border color of the hue and alpha slider thumbs. |
| `--ig-color-picker-swatch-separator-color` | Color of the separator above the swatch grid. |
| `--ig-color-picker-swatch-border-color` | Border color of the predefined color swatches. |
| `--ig-color-picker-swatch-border-radius` | Border radius of the predefined color swatches. |
| `--ig-color-picker-swatch-size` | Size of the predefined color swatches. |
| `--ig-color-picker-transparency-grid-odd` | Odd checker color in the transparency grid. |
| `--ig-color-picker-transparency-grid-even` | Even checker color in the transparency grid. |
| `--ig-color-picker-invalid-color` | Color used for invalid-state indicators. |
| `--ig-color-picker-marker-size` | Size of the marker on the picker gradient canvas. |
| `--ig-color-picker-marker-elevation` | Shadow of the marker on the picker gradient canvas. |
| `--ig-color-picker-marker-color` | Color of the marker on the picker gradient canvas. |

### Style Parts

| Part | What it styles |
| -- | -- |
| `color-picker` | The wrapper around the anchor, label, and helper text. |
| `anchor` | The trigger element that opens the picker (the button in default mode, or the swatch prefix in input mode). |
| `empty` | Applied alongside `anchor` when no color value is set, rendering a checkered background. |
| `input-mode` | Applied alongside `anchor` in input mode. |
| `label` | The label rendered above the anchor in default mode. |
| `picker` | The popover container holding the canvas, sliders, inputs, and swatches. |
| `picker-canvas` | The gradient canvas. |
| `marker` | The draggable marker on the gradient canvas. |
| `dragging` | Applied alongside `marker` while the marker is being dragged. |
| `main-row` | The row containing the hue slider and the copy/eye-dropper buttons. |
| `alpha-row` | The row containing the alpha slider and input, rendered when `show-alpha` is set. |
| `alpha-input` | The alpha percentage input. |
| `inputs-row` | The row containing the format select and the color value input. |
| `buttons` | The wrapper around the copy and eye-dropper buttons. |
| `hue` | The hue range slider. |
| `alpha` | The alpha (opacity) range slider. |
| `copy` | The copy-to-clipboard icon button. |
| `eye-dropper` | The eye-dropper icon button. |
| `format-select` | The select control used to switch the color string format. |
| `swatches` | The container of predefined color swatches. |
| `swatch` | An individual predefined color swatch button. |

### Sass Theming

Use the `color-picker-theme` function for customizing the appearance of the Color Picker through Sass.

```scss
@use "igniteui-theming/sass/themes" as *;

$custom-color-picker-theme: color-picker-theme(
  $picker-background: #e6f2ff,
  $picker-border-color: #a9b8cc,
  $picker-border-radius: 1rem
);

:root {
  @include tokens($custom-color-picker-theme);
}
```

### CSS Variables

Set component CSS variables directly when you need local styling without a Sass build step.

```css
igc-color-picker {
  --ig-color-picker-picker-background: #e6f2ff;
  --ig-color-picker-picker-border-color: #a9b8cc;
  --ig-color-picker-picker-border-radius: 1rem;
  --ig-color-picker-picker-elevation: none;
}

igc-color-picker::part(picker-canvas) {
  border-radius: 1rem;
}
```

### Styling with Tailwind

Style the Color Picker with the custom Tailwind utility classes from `igniteui-theming`. [Set up Tailwind](../themes/tailwind.md) with the Ignite UI theme first:

```css
@import "tailwindcss/theme.css";
@import "tailwindcss/utilities.css";
```

Apply the `light-color-picker` utility to give the Color Picker its theme variables, then override individual variables with arbitrary-property classes. The `!` prefix marks the utility as important so it takes precedence over the component's default theme styles.

```tsx
<IgrColorPicker className="!light-color-picker [--ig-color-picker-picker-background:#fff0eb] [--ig-color-picker-picker-border-color:#f95924]"></IgrColorPicker>
```

```css
@import "tailwindcss/theme.css";
@import "tailwindcss/utilities.css";

igc-color-picker::part(copy),
igc-color-picker::part(eye-dropper) {
  --foreground: #c6451b;
}

igc-color-picker::part(picker) {
  --ig-input-group-border-color: #f95924;
  --ig-input-group-hover-border-color: #f95924;
  --ig-input-group-focused-border-color: #f95924;

  margin-top: 1.25rem;
}

igc-color-picker::part(buttons) {
  gap: 0rem;
}

igc-color-picker {
  --ig-color-picker-picker-elevation: none;
}

.sample {
  --ig-font-family: "Aktiv Grotesk", sans-serif;

  display: flex;
  height: fit-content;
  max-width: 55rem;
  margin-inline: auto;
}

.theme-editor {
  width: 100%;
  border-radius: 0.75rem;
  border: 0.063rem solid;
  padding: 1.5rem;
  border-color: var(--ig-gray-200);
  background: var(--ig-surface-500);
}

.theme-editor-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 0.063rem solid;
  border-color: var(--ig-gray-200);
  font-family: "Aktiv Grotesk", sans-serif;
}

.sample .theme-editor-header h2 {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: var(--ig-gray-900);
  letter-spacing: 0.009rem;
}

.sample .theme-editor-header p {
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0.125rem 0 0;
  color: var(--ig-gray-600);
}

igc-icon-button::part(icon) {
  --size: 1.5rem;
}

.swatches {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1.5rem 1rem 1rem;
}

.swatch-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 8.5rem;
  width: 100%;
}

.swatch-item igc-color-picker {
  --ig-color-picker-anchor-border-radius: 0.375rem;
  --ig-color-picker-label-color: var(--ig-gray-900);
}

.swatch-item igc-color-picker::part(label) {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
}

igc-color-picker::part(anchor) {
  --anchor-border-radius: 0.25rem;
  --anchor-border-color: var(--ig-gray-600);
  --swatch-preview-border-color: var(--ig-gray-300);
}

.swatch-item.disabled igc-color-picker {
  --ig-color-picker-label-color-disabled: var(--ig-gray-400);
}

.swatch-item.disabled .swatch-hint {
  color: var(--ig-gray-400);
}

.swatch-hint {
  font-size: 0.75rem;
  line-height: 1rem;
  color: var(--ig-gray-600);
}

igc-card {
  margin-block-start: 1rem;
  border-radius: 0.5rem;
  background: var(--preview-bg);
  border: 0.063rem solid var(--preview-border);
  box-shadow: var(--ig-elevation-4);
}

igc-chip {
  --ig-size: var(--ig-size-large);
  --ig-chip-background: color-mix(in srgb, var(--preview-accent) 25%, transparent);
  --ig-chip-hover-background: color-mix(in srgb, var(--preview-accent) 75%, transparent);
  --ig-chip-text-color: var(--preview-accent);
}

igc-button {
  --ig-size: var(--ig-size-medium);
}

igc-button::part(base) {
  text-transform: capitalize;
}

#readMoreBtn {
  --background: var(--preview-accent);
  --foreground: var(--preview-bg);
  --hover-background: hsl(from var(--preview-accent) h s 40%);
}

#saveBtn {
  --foreground: var(--preview-accent);
  --hover-foreground: hsl(from var(--preview-accent) h s 40%);
  --border-color: var(--preview-accent);
  --hover-border-color: hsl(from var(--preview-accent) h s 40%);

  &::part(base) {
    min-width: unset;
  }
}

#previewTitle,
#previewText {
  color: var(--preview-text);
}

#previewTitle {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  margin: 1rem 0 0.25rem;
  letter-spacing: 0.009rem;
}

#previewText {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
}

.preview-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

@media (width < 420px) {
  .sample {
    width: fit-content;
    overflow-y: auto;
  }
}
```
```tsx
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrButton,
  IgrCard,
  IgrCardContent,
  IgrChip,
  IgrColorPicker,
  IgrIconButton,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/material.css";

const refreshIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08a5.99 5.99 0 0 1-5.65 4c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>';

const defaults = {
  background: "#1a314a",
  text: "#e5ebf3",
  accent: "#f9592a",
  border: "#00142b",
};

const pickerClassName =
  "!light-color-picker [--ig-color-picker-picker-background:#FFF0EB] [--ig-color-picker-picker-border-color:#F95924] [--ig-color-picker-picker-border-radius:0.5rem]";

export default function ColorPickerTailwindStyling() {
  const cardRef = useRef<HTMLElement>(null);
  const [background, setBackground] = useState(defaults.background);
  const [text, setText] = useState(defaults.text);
  const [accent, setAccent] = useState(defaults.accent);
  const [border, setBorder] = useState(defaults.border);

  useEffect(() => {
    registerIconFromText("refresh", refreshIcon, "material");
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    card?.style.setProperty("--preview-bg", background);
    card?.style.setProperty("--preview-text", text);
    card?.style.setProperty("--preview-accent", accent);
    card?.style.setProperty("--preview-border", border);
  }, [background, text, accent, border]);

  const resetTheme = () => {
    setBackground(defaults.background);
    setText(defaults.text);
    setAccent(defaults.accent);
    setBorder(defaults.border);
  };

  return (
    <div className="sample">
      <div className="theme-editor">
        <div className="theme-editor-header">
          <div>
            <h2>Theme Editor</h2>
            <p>Use the pickers to style the card.</p>
          </div>
          <IgrIconButton
            id="resetTheme"
            name="refresh"
            collection="material"
            variant="flat"
            onClick={resetTheme}
          />
        </div>
        <div className="swatches">
          <div className="swatch-item">
            <IgrColorPicker
              className={pickerClassName}
              id="bgPicker"
              value={background}
              label="Background"
              onInput={(e: CustomEvent<string>) => setBackground(e.detail)}
            >
              <span slot="helper-text">Card surface color</span>
            </IgrColorPicker>
          </div>
          <div className="swatch-item">
            <IgrColorPicker
              className={pickerClassName}
              id="textPicker"
              value={text}
              size="small"
              label="Text"
              onInput={(e: CustomEvent<string>) => setText(e.detail)}
            >
              <span slot="helper-text" className="swatch-hint">
                Body &amp; heading color
              </span>
            </IgrColorPicker>
          </div>
          <div className="swatch-item">
            <IgrColorPicker
              className={pickerClassName}
              id="accentPicker"
              value={accent}
              size="small"
              label="Accent"
              onInput={(e: CustomEvent<string>) => setAccent(e.detail)}
            >
              <span slot="helper-text" className="swatch-hint">
                Button &amp; tag color
              </span>
            </IgrColorPicker>
          </div>
          <div className="swatch-item">
            <IgrColorPicker
              className={pickerClassName}
              id="borderPicker"
              value={border}
              size="small"
              label="Border"
              onInput={(e: CustomEvent<string>) => setBorder(e.detail)}
            >
              <span slot="helper-text" className="swatch-hint">
                Card edge color
              </span>
            </IgrColorPicker>
          </div>
          <div className="swatch-item disabled">
            <IgrColorPicker
              className={pickerClassName}
              disabled={true}
              value="#7d91ab"
              size="small"
              label="Shadow (Pro)"
            >
              <span slot="helper-text" className="swatch-hint">
                Upgrade to unlock
              </span>
            </IgrColorPicker>
          </div>
        </div>
        <IgrCard ref={cardRef as any}>
          <IgrCardContent>
            <IgrChip>Design</IgrChip>
            <h3 id="previewTitle">Color Picker in Practice</h3>
            <p id="previewText">
              Pick colors above to see them applied live across every element of this
              card.
            </p>
            <div className="preview-actions">
              <IgrButton id="readMoreBtn" variant="contained">Read more</IgrButton>
              <IgrButton id="saveBtn" variant="outlined">Save</IgrButton>
            </div>
          </IgrCardContent>
        </IgrCard>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPickerTailwindStyling />);
```

## Accessibility

The React Color Picker is a keyboard-operable, form-associated control. The anchor is either a labelled button (default mode) or an editable input (input mode), and the open picker traps focus.

### Keyboard Interaction

The keybindings below are skipped while the component is `disabled`.

| Key | Action |
| -- | -- |
| `Alt` + `ArrowDown` | Toggles the picker dropdown. |
| `Alt` + `ArrowUp` | Closes the picker dropdown and returns focus to the anchor. |
| `Escape` | Closes the picker dropdown and returns focus to the anchor. |
| `Arrow` keys | When the gradient canvas marker is focused, moves the marker by one step in the pressed direction. |
| `ArrowUp` / `ArrowDown` | When the alpha input is focused, increases or decreases the opacity by 1%. |
| `Tab` | Moves focus between the interactive elements inside the open picker. |

### Screen Readers / ARIA

- The anchor sets `aria-haspopup="dialog"` and `aria-expanded`, and references the helper-text container via `aria-describedby` so helper and validation messages are announced.
- The picker dropdown has `role="dialog"` and the accessible name `Color picker`.
- The gradient canvas marker has `role="slider"` and announces both axes through `aria-valuetext` (for example, `Saturation 50%, brightness 80%`).
- The hue and alpha sliders are native `input[type="range"]` elements labelled via `aria-label` (`Hue`, `Alpha slider`).
- The format switcher and the color value input carry visually-hidden labels; the copy and eye-dropper buttons expose visually-hidden text.
- Each swatch button exposes its color through `aria-label`.
- While the picker is open, focus is trapped within it; the picker content is `inert` while closed and excluded from the tab order.

### Accessibility Compliance

Infragistics documents Ignite UI for React accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| -- | -- |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) | The component exposes its label, helper text, and validation messages through `aria-describedby` and slot projection. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | Opening and closing the picker, the gradient marker, the sliders, the inputs, the format switcher, and the swatches are keyboard operable. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The anchor exposes `aria-haspopup` and `aria-expanded`, the marker exposes `role="slider"` with its value, the sliders expose accessible labels, and swatches expose their color via `aria-label`. |

Your responsibilities:

- Provide an accessible label through the `label` property or a projected label so the anchor is identifiable to screen readers.
- Do not rely on color alone to convey required or invalid state; use the validation slots or helper text.
- Keep sufficient contrast when overriding theme styles for the anchor and picker surface.

## Troubleshooting

The React Color Picker troubleshooting guidance follows a problem → cause → fix format for common integration and platform issues.

### Why did my color value clear or revert?

Assigning an empty, whitespace-only, or invalid string to `value` clears the color instead of keeping the previous value. An invalid string typed into the color input reverts to the current color instead. Assign a valid CSS color string, and make sure the environment supports `OffscreenCanvas` (see Known Limitations).

### Why is the emitted value in a different format than what I typed?

The value is always serialized in the active `format`, so an input string does not round-trip byte-for-byte. For example, typing `red` with `format="hex"` produces `#ff0000`. Set `format` to the notation you expect to read back.

### Why is no `igcInput` emitted while I type a color?

The color input commits a typed color when it changes, not on every keystroke, and a typed color emits no `igcInput`. Listen for `igcChange`, which fires when focus leaves the component with a different color.

### Known Limitations

- The eye-dropper button is enabled only in browsers that implement the [`EyeDropper`](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper) API. Support is detected once, when the component is created.
- Copying to the clipboard depends on `navigator.clipboard` and a secure context (HTTPS or `localhost`); it silently does nothing where the API is unavailable or permission is denied.
- The component parses every color string through an `OffscreenCanvas` 2D context. Where `OffscreenCanvas` is unavailable, every value resolves to empty.
- The built-in accessible labels, such as `Hue`, `Alpha slider`, `Open color picker`, and `Copy color value to clipboard`, are English-only and not localized.

## API References

Use these API references for the complete Color Picker API surface.

`IgrColorPicker`

## Dependencies

The React Color Picker requires a theme stylesheet to apply its visual styling. See the setup in **Getting Started**.

## Additional Resources

Use these resources for support and related Ignite UI documentation.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

## FAQ

  **Q: How do I bind the Color Picker to a form?**

    Set the `name` attribute to the form field name and place the Color Picker inside a `<form>` element. The current serialized color is submitted under that name, and the control participates in `required` validation and form reset through the standard form-associated element APIs.

  

  **Q: How is `igcInput` different from `igcChange`?**

    `igcInput` fires on every interim interaction with the canvas, the sliders, the alpha input, a swatch, or the eye-dropper. `igcChange` fires once, when focus leaves the Color Picker and the color differs from the one it had when focus entered, matching the semantics of the native `change` event. A color typed into the color input emits only `igcChange`.
  

  **Q: Which package provides the Color Picker?**

    The Color Picker ships in the `igniteui-react` package.
  


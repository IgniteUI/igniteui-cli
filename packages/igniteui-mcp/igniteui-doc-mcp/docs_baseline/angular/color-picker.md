---
title: "Color Picker"
description: "The Ignite UI for Angular Color Picker is a form-associated component that lets users pick and edit a color through an interactive dropdown with a gradient canvas, hue and alpha sliders, format switching, an eye-dropper, and predefined swatches."
keywords: "Angular Color Picker, Ignite UI for Angular, color picker, color input, hex, rgb, hsl, alpha, swatches, eye-dropper, form-associated"
license: MIT
mentionedTypes: ["ColorPicker"]
last_updated: "2026-09-23"
llms:
  description: "The Ignite UI for Angular Color Picker is a form-associated component that lets users pick and edit a color through an interactive dropdown with a gradient canvas, hue and alpha sliders, format switching, an eye-dropper, and predefined swatches."
_tocName: Color Picker
---
# Color Picker Component 

The Ignite UI for Angular Color Picker is a form-associated component that lets users pick and edit a color through an interactive dropdown with a gradient canvas, hue and alpha sliders, format switching, an eye-dropper, and predefined swatches.

## Live Demo

The Angular Color Picker demo shows the anchor in `input` mode that previews the currently selected color and opens a dropdown where you can edit or select a different color.

```typescript
import { Component, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';
import { IgxCardComponent, IgxCardContentDirective, IgxCardActionsComponent } from 'igniteui-angular/card';
import { IgxButtonDirective, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';

defineComponents(IgcColorPickerComponent);

@Component({
    selector: 'app-color-picker-overview',
    styleUrls: ['./color-picker-overview.component.scss'],
    templateUrl: './color-picker-overview.component.html',
    imports: [
        FormsModule,
        IgxCardComponent,
        IgxCardContentDirective,
        IgxCardActionsComponent,
        IgxButtonDirective,
        IgxIconButtonDirective,
        IgxIconComponent,
        IgxSelectComponent,
        IgxSelectItemComponent,
        IgxLabelDirective
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ColorPickerOverviewComponent {
    @ViewChild('picker', { static: true })
    public picker!: ElementRef<IgcColorPickerComponent>;

    public paintTypes = ['Matte', 'Satin', 'Eggshell', 'Gloss'];
    public paintQuantities = ['1 litre', '3 litres', '5 litres', '10 litres'];

    public resetColor(): void {
        this.picker.nativeElement.value = '';
    }
}
```
```html
<div class="sample-container">
    <igx-card>
        <igx-card-content>
            <h2>Choose your interior color</h2>
            <igx-select value="Satin" type="border">
                <label igxLabel>Type of wall paints</label>
                @for (item of paintTypes; track item) {
                    <igx-select-item [value]="item">{{ item }}</igx-select-item>
                }
            </igx-select>
            <igx-select value="3 litres" type="border">
                <label igxLabel>Paint quantity</label>
                @for (item of paintQuantities; track item) {
                    <igx-select-item [value]="item">{{ item }}</igx-select-item>
                }
            </igx-select>
            <div class="color-row">
                <igc-color-picker #picker mode="input" value="#0598fa"></igc-color-picker>
                <button igxIconButton="flat" (click)="resetColor()">
                    <igx-icon>refresh</igx-icon>
                </button>
            </div>
        </igx-card-content>
        <igx-card-actions>
            <button igxButton="flat" igxStart>Back</button>
            <div class="stepper">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot active"></span>
            </div>
            <button igxButton="flat" igxEnd>Confirm</button>
        </igx-card-actions>
    </igx-card>
</div>
```
```scss
.sample-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block-start: 0.5rem;
}

igx-card {
    --ig-size: 2;

    width: 22rem;
}

h2 {
    margin: 0 0 1rem;
    font-size: 1.25rem;
    color: var(--ig-gray-900);
}

igx-card-content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

igx-select {
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

.igx-icon-button {
    position: absolute;
    right: 0.5rem;
    align-self: center;
    z-index: 1;
}

igx-card-actions {
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

::ng-deep {
    .igx-card-actions__end {
        margin-inline-start: unset;
    }
}
```

## Anatomy

The Angular Color Picker is composed of an anchor that opens a popover dropdown containing the picker surface — a gradient canvas, hue and alpha sliders, format-aware color inputs, action buttons, and an optional swatch grid.

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

To use the Angular Color Picker, complete the [Ignite UI for Angular Getting Started](../general/getting-started.md) topic for the basic project setup, then register the component.

The Color Picker requires `igniteui-webcomponents` 7.3.0 or later.

Ignite UI for Angular renders the Color Picker as a web component, so install `igniteui-webcomponents` in your Angular project:

```cmd
npm install igniteui-webcomponents
```

Import [`IgcColorPickerComponent`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcColorPickerComponent) and a theme, then register the component:

```ts
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcColorPickerComponent);
```

Add `CUSTOM_ELEMENTS_SCHEMA` to the Angular component that renders `igc-color-picker`:

```ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
```

Render the Color Picker with a label:

```html
<igc-color-picker label="Pick a color"></igc-color-picker>
```

## Usage

Set `value` to any CSS color string: hex (with or without the leading `#`), `rgb`/`rgba`, `hsl`/`hsla`, or a named color. An empty or invalid string clears the value, and the anchor shows a checkered pattern.

```html
<igc-color-picker value="#1976d2"></igc-color-picker>
```

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';

defineComponents(IgcColorPickerComponent);

@Component({
    selector: 'app-color-picker-value',
    styleUrls: ['./color-picker-value.component.scss'],
    templateUrl: './color-picker-value.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ColorPickerValueComponent implements AfterViewInit {
    @ViewChild('colorPicker', { static: true })
    colorPicker!: ElementRef<IgcColorPickerComponent>;

    ngAfterViewInit() {
        this.colorPicker.nativeElement.toggle();
    }
}
```
```html
<div class="sample-container">
    <igc-color-picker #colorPicker value="#1976d2" label="Pick a color"></igc-color-picker>
</div>
```
```scss
.sample-container {
    --ig-size: 2;

    display: flex;
    justify-content: center;
    padding-block-start: 0.5rem;
}

igc-color-picker::part(picker) {
    --picker-elevation: var(--ig-elevation-4);

    margin-top: 0.5rem;
}

:root {
    overflow: auto;
}
```

### Mode

The `mode` property controls the anchor presentation. Its default value, `default`, renders a trigger button that previews the current color; `input` renders an editable text field with a color swatch prefix. Both anchors open the same picker dropdown.

```html
<igc-color-picker mode="input" label="Background"></igc-color-picker>
```

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';

defineComponents(IgcColorPickerComponent);

@Component({
    selector: 'app-color-picker-input',
    styleUrls: ['./color-picker-input.component.scss'],
    templateUrl: './color-picker-input.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ColorPickerInputComponent implements AfterViewInit {
    @ViewChild('colorPicker', { static: true })
    colorPicker!: ElementRef<IgcColorPickerComponent>;

    ngAfterViewInit() {
        this.colorPicker.nativeElement.toggle();
    } 
}
```
```html
<div class="sample-container">
    <igc-color-picker #colorPicker mode="input" label="Background"></igc-color-picker>
</div>
```
```scss
.sample-container {
    --ig-size: 2;

    display: flex;
    justify-content: center;
    padding-block-start: 0.5rem;
}

igc-color-picker::part(picker) {
    --picker-elevation: var(--ig-elevation-4);

    margin-top: 0.5rem;
}
```

### Format

Use the `format` property to control how the color is serialized. Supported values are `hex`, `rgb`, and `hsl`. Changing the format re-serializes the existing color without altering it, so no `igcInput` or `igcChange` event is emitted.

```html
<igc-color-picker format="rgb" value="#1976d2"></igc-color-picker>
```

To hide the built-in format switcher and lock the picker to a single format, set the `hideFormats` property.

```html
<igc-color-picker hide-formats format="hex"></igc-color-picker>
```

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';

defineComponents(IgcColorPickerComponent);

@Component({
    selector: 'app-color-picker-format',
    styleUrls: ['./color-picker-format.component.scss'],
    templateUrl: './color-picker-format.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ColorPickerFormatComponent implements AfterViewInit {
    @ViewChild('colorPicker', { static: true })
    colorPicker!: ElementRef<IgcColorPickerComponent>;

    ngAfterViewInit() {
        this.colorPicker.nativeElement.toggle();
    } 
}
```
```html
<div class="sample-container">
    <igc-color-picker #colorPicker format="rgb" label="Pick a color"></igc-color-picker>
</div>
```
```scss
.sample-container {
    --ig-size: 2;

    display: flex;
    justify-content: center;
    padding-block-start: 0.5rem;
}

igc-color-picker::part(picker) {
    --picker-elevation: var(--ig-elevation-4);

    margin-top: 0.5rem;
}
```

### Alpha

By default the picker edits fully opaque colors. Enable the alpha slider and its percentage input by setting the `showAlpha` property.

```html
<igc-color-picker show-alpha value="rgba(25, 118, 210, 0.5)"></igc-color-picker>
```

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';

defineComponents(IgcColorPickerComponent);

@Component({
    selector: 'app-color-picker-alpha',
    styleUrls: ['./color-picker-alpha.component.scss'],
    templateUrl: './color-picker-alpha.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ColorPickerAlphaComponent implements AfterViewInit {
    @ViewChild('colorPicker', { static: true })
    colorPicker!: ElementRef<IgcColorPickerComponent>;

    ngAfterViewInit() {
        this.colorPicker.nativeElement.toggle();
    }
}
```
```html
<div class="sample-container">
    <igc-color-picker #colorPicker label="Pick a color" show-alpha value="rgba(25, 118, 210, 0.5)"></igc-color-picker>
</div>
```
```scss
.sample-container {
    --ig-size: 2;

    display: flex;
    justify-content: center;
    padding-block-start: 0.5rem;
}

igc-color-picker::part(picker) {
    --picker-elevation: var(--ig-elevation-4);

    margin-top: 0.5rem;
}
```

### Swatches

Provide a list of predefined colors through the `swatches` property. When set, the picker renders a swatch grid below the color inputs. Clicking a swatch applies it as the current color. There is no limit to the number of swatches you can define.

```ts
const picker = document.querySelector('igc-color-picker');
picker.swatches = ['#f44336', '#e91e63', '#9c27b0', '#3f51b5', '#2196f3', '#4caf50'];
```

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';

defineComponents(IgcColorPickerComponent);

@Component({
    selector: 'app-color-picker-swatches',
    styleUrls: ['./color-picker-swatches.component.scss'],
    templateUrl: './color-picker-swatches.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ColorPickerSwatchesComponent implements AfterViewInit {
    public oneLineSwatches = ['#f44336', '#e91e63', '#9c27b0', '#3f51b5', '#2196f3', '#4caf50'];

    public multiLineSwatches = [
        '#f44336', '#e91e63', '#9c27b0', '#3f51b5', '#2196f3', '#4caf50', '#ffeb3b', '#ff9800', '#795548', '#607d8b', '#ffffff', '#000000', '#0000ff', '#00ff00', '#ff00ff', '#00ffff', '#ff0000', '#ffff00', '#ff00ff', '#00ffff', '#c0c0c0', '#808080', '#800000', '#808000'
    ];

    @ViewChild('colorPicker1', { static: true })
    colorPicker1!: ElementRef<IgcColorPickerComponent>;

    @ViewChild('colorPicker2', { static: true })
    colorPicker2!: ElementRef<IgcColorPickerComponent>;

    ngAfterViewInit() {
        this.colorPicker1.nativeElement.toggle();
        this.colorPicker2.nativeElement.toggle();
    }
}
```
```html
<div class="sample-container">
    <igc-color-picker #colorPicker1 label="Pick a color" [swatches]="oneLineSwatches"></igc-color-picker>
    <igc-color-picker #colorPicker2 label="Pick a color" [swatches]="multiLineSwatches"></igc-color-picker>
</div>
```
```scss
.sample-container {
    --ig-size: 2;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-block-start: 0.5rem;
}

igc-color-picker::part(picker) {
    --picker-elevation: var(--ig-elevation-4);

    margin-top: 0.5rem;
}
```

### Disabled

Set the `disabled` property to disable the Color Picker.

```html
<igc-color-picker disabled value="#1976d2"></igc-color-picker>
```

### Validation

Mark the control as `required` to fail form validation when no color is selected. The component supports the standard form-associated API — `checkValidity`, `reportValidity`, and `setCustomValidity`.

Show helper and validation messages under the anchor through these slots:

- `helper-text` – Displays a hint or instructional message below the anchor.
- `value-missing` – Renders custom content when the required field validation fails.
- `invalid` – Renders custom content when the component is in an invalid state.
- `custom-error` – Displays content when a custom validation message is set using `setCustomValidity()`.

```html
<igc-color-picker required label="Brand color">
  <span slot="helper-text">Pick the primary brand color.</span>
  <span slot="value-missing">A color is required.</span>
</igc-color-picker>
```

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';

defineComponents(IgcColorPickerComponent);

@Component({
    selector: 'app-color-picker-states',
    styleUrls: ['./color-picker-states.component.scss'],
    templateUrl: './color-picker-states.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ColorPickerStatesComponent implements AfterViewInit {
    public invalid = true;

    public onInput(): void {
        this.invalid = false;
    }

    @ViewChild('colorPicker', { static: true })
    colorPicker!: ElementRef<IgcColorPickerComponent>;

    ngAfterViewInit() {
        this.colorPicker.nativeElement.toggle();
    }
}
```
```html
<div class="sample-container">
    <div>
        <span>Default state</span>
        <igc-color-picker #colorPicker label="Pick a color"></igc-color-picker>
    </div>
    <div>
        <span>Invalid state</span>
        <igc-color-picker [invalid]="invalid" required label="Pick a color" (igcInput)="onInput()"></igc-color-picker>
    </div>
    <div>
        <span>Disabled state</span>
        <igc-color-picker disabled label="Pick a color"></igc-color-picker>
    </div>
</div>
```
```scss
.sample-container {
    --ig-size: 2;

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    padding-block-start: 0.5rem;
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
    --picker-elevation: var(--ig-elevation-4);

    margin-top: 0.5rem;
}

@media (width < 450px) {
    .sample-container {
        flex-direction: column;
        align-items: center;
    }
}
```

### Size

Control the Color Picker size by setting the `--ig-size` variable to one of three options: `--ig-size-small`, `--ig-size-medium`, or `--ig-size-large`. This can be used to adjust the size of both the default and input mode anchors, as well as the dropdown window.

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';

defineComponents(IgcColorPickerComponent);

@Component({
    selector: 'app-color-picker-sizes',
    styleUrls: ['./color-picker-sizes.component.scss'],
    templateUrl: './color-picker-sizes.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ColorPickerSizesComponent implements AfterViewInit {
    @ViewChild('colorPicker', { static: true })
    colorPicker!: ElementRef<IgcColorPickerComponent>;

    ngAfterViewInit() {
        this.colorPicker.nativeElement.toggle();
    }
}
```
```html
<div class="sample-container">
    <div>
        <span>Small</span>
        <igc-color-picker #colorPicker class="small-picker" label="Pick a color"></igc-color-picker>
    </div>
    <div>
        <span>Medium</span>
        <igc-color-picker class="medium-picker" label="Pick a color"></igc-color-picker>
    </div>
    <div>
        <span>Large</span>
        <igc-color-picker class="large-picker" label="Pick a color"></igc-color-picker>
    </div>
</div>
```
```scss
.small-picker {
    --ig-size: var(--ig-size-small);
}

.medium-picker {
    --ig-size: var(--ig-size-medium);
}

.large-picker {
    --ig-size: var(--ig-size-large);
}

.sample-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    padding-block-start: 0.5rem;
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
    --picker-elevation: var(--ig-elevation-4);

    margin-top: 0.5rem;
}

@media (width < 450px) {
    .sample-container {
        flex-direction: column;
        align-items: center;
    }
}
```

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';

defineComponents(IgcColorPickerComponent);

@Component({
    selector: 'app-color-picker-input-sizes',
    styleUrls: ['./color-picker-input-sizes.component.scss'],
    templateUrl: './color-picker-input-sizes.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ColorPickerInputSizesComponent implements AfterViewInit {
    @ViewChild('colorPicker', { static: true })
    colorPicker!: ElementRef<IgcColorPickerComponent>;

    ngAfterViewInit() {
        this.colorPicker.nativeElement.toggle();
    }
}
```
```html
<div class="sample-container">
    <div>
        <span>Small</span>
        <igc-color-picker #colorPicker class="small-picker" mode="input" label="Pick a color"></igc-color-picker>
    </div>
    <div>
        <span>Medium</span>
        <igc-color-picker class="medium-picker" mode="input" label="Pick a color"></igc-color-picker>
    </div>
    <div>
        <span>Large</span>
        <igc-color-picker class="large-picker" mode="input" label="Pick a color"></igc-color-picker>
    </div>
</div>
```
```scss
.small-picker {
    --ig-size: var(--ig-size-small);
}

.medium-picker {
    --ig-size: var(--ig-size-medium);
}

.large-picker {
    --ig-size: var(--ig-size-large);
}

.sample-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    padding-block-start: 0.5rem;
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
    --picker-elevation: var(--ig-elevation-4);

    margin-top: 0.5rem;
}

@media (width < 450px) {
    .sample-container {
        flex-direction: column;
        align-items: center;
    }
}
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

## Using the Color Picker in Angular Forms

To use the Color Picker web component in an Angular form and bind it with `formControlName` or `ngModel`, Angular requires an implementation of its `ControlValueAccessor` interface. Ignite UI for Angular provides one as the `IgcFormControlDirective`, which attaches to supported web components by their element selector. As of version 22.2.0, it supports `igc-color-picker` in addition to `igc-rating`.

Import `IgcFormControlDirective` together with `ReactiveFormsModule`, or `FormsModule` if you bind with `ngModel`:

```ts
import { ReactiveFormsModule } from '@angular/forms';
import { IgcFormControlDirective } from 'igniteui-angular/directives';
// import { IgcFormControlDirective } from '@infragistics/igniteui-angular/directives'; for licensed package

@Component({
    imports: [ReactiveFormsModule, IgcFormControlDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LabelFormComponent {...}
```

Then bind the Color Picker to a `FormControl` with `formControlName`. The control receives the color in the active `format` and updates when focus leaves the Color Picker with a different color:

```html
<form [formGroup]="labelForm">
  <igc-color-picker formControlName="color" label="Label color" required></igc-color-picker>
</form>
```

**Note:** 
The directive handles only the value binding. Keep `CUSTOM_ELEMENTS_SCHEMA` if you use Angular property binding for other Color Picker properties, such as `[swatches]="swatches"`.

The following sample uses the Color Picker in a reactive form with required validation:

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';
import { IgcFormControlDirective, IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxCardComponent, IgxCardContentDirective } from 'igniteui-angular/card';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';

defineComponents(IgcColorPickerComponent);

interface LabelForm {
    name: FormControl<string | null>;
    color: FormControl<string | null>;
    textColor: FormControl<string | null>;
}

const initialValue = { name: '', color: '', textColor: '#000000' };

@Component({
    selector: 'app-color-picker-reactive-form',
    styleUrls: ['./color-picker-reactive-form.component.scss'],
    templateUrl: './color-picker-reactive-form.component.html',
    imports: [
        ReactiveFormsModule,
        IgcFormControlDirective,
        IgxButtonDirective,
        IgxCardComponent,
        IgxCardContentDirective,
        IgxInputGroupComponent,
        IgxInputDirective,
        IgxLabelDirective,
        IgxHintDirective
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ColorPickerReactiveFormComponent {
    public swatches = ['#d32f2f', '#f57c00', '#fbc02d', '#388e3c', '#1976d2', '#7b1fa2', '#455a64'];

    public labelForm = new FormGroup<LabelForm>({
        name: new FormControl(initialValue.name, Validators.required),
        color: new FormControl(initialValue.color, Validators.required),
        textColor: new FormControl(initialValue.textColor)
    });

    public get name() {
        return this.labelForm.controls.name;
    }

    public get color() {
        return this.labelForm.controls.color;
    }

    public onReset(form: HTMLFormElement): void {
        form.reset();
        this.labelForm.reset(initialValue);
    }
}
```
```html
<div class="sample-container">
    <igx-card>
        <igx-card-content>
            <form #formRef [formGroup]="labelForm">
                <h2>Create a label</h2>
                <igx-input-group type="border">
                    <label igxLabel for="labelName">Label name</label>
                    <input igxInput id="labelName" name="name" formControlName="name" autocomplete="off" />
                    @if (name.touched && name.invalid) {
                        <igx-hint>A label name is required.</igx-hint>
                    }
                </igx-input-group>
                <igc-color-picker
                    formControlName="color"
                    name="color"
                    mode="input"
                    label="Label color"
                    required
                    [swatches]="swatches"
                    [invalid]="color.touched && color.invalid">
                    <span slot="helper-text">Pick a swatch or select any color value.</span>
                    <span slot="value-missing">A label color is required.</span>
                </igc-color-picker>
                <igc-color-picker
                    formControlName="textColor"
                    name="textColor"
                    label="Text color"
                    hide-formats>
                </igc-color-picker>
                <div class="preview">
                    <span class="preview-caption">Preview</span>
                    <span class="preview-label"
                        [style.background]="labelForm.value.color || 'var(--ig-gray-200)'"
                        [style.color]="labelForm.value.textColor || 'inherit'">
                        {{ labelForm.value.name || 'Label' }}
                    </span>
                </div>
                <div class="actions">
                    <button igxButton="flat" type="button" (click)="onReset(formRef)">Reset</button>
                    <button igxButton="contained" type="submit" [disabled]="labelForm.invalid">Create</button>
                </div>
            </form>
        </igx-card-content>
    </igx-card>
</div>
```
```scss
.sample-container {
    --ig-size: 2;

    display: flex;
    justify-content: center;
    padding-block-start: 0.5rem;
}

igx-card {
    width: 24rem;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

h2 {
    margin: 0;
    font-size: 1.25rem;
    color: var(--ig-gray-900);
}

igc-color-picker[mode="input"] {
    width: 100%;
}

igc-color-picker[mode="input"]::part(color-picker) {
    width: 100%;
    grid-template-columns: auto;
}

igc-color-picker::part(picker) {
    --picker-elevation: var(--ig-elevation-4);

    margin-top: 0.5rem;
}

.preview {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.preview-caption {
    font-size: 0.875rem;
    color: var(--ig-gray-600);
}

.preview-label {
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.875rem;
    font-weight: 600;
}

.actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
}
```

## Properties

The Angular Color Picker exposes properties for its content, presentation, and form association.

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

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

defineComponents(IgcColorPickerComponent);

@Component({
    selector: 'app-color-picker-styling',
    styleUrls: ['./color-picker-styling.component.scss'],
    templateUrl: './color-picker-styling.component.html',
    imports: [IgxIconButtonDirective, IgxIconComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ColorPickerStylingComponent {}
```
```html
<div class="sample-container">
    <div class="editor-toolbar">
        <div class="toolbar-group">
            <span class="toolbar-group-label">Text</span>
            <div class="toolbar-actions">
                <button igxIconButton="flat" aria-label="Text color">
                    <igx-icon>format_color_text</igx-icon>
                </button>
            </div>
        </div>
        <div class="toolbar-group">
            <span class="toolbar-group-label">Alignment</span>
            <div class="toolbar-actions">
                <button igxIconButton="flat" aria-label="Justify">
                    <igx-icon>format_align_justify</igx-icon>
                </button>
                <button igxIconButton="flat" aria-label="Align right">
                    <igx-icon>format_align_right</igx-icon>
                </button>
                <button igxIconButton="flat" aria-label="Align center">
                    <igx-icon>format_align_center</igx-icon>
                </button>
                <button igxIconButton="flat" aria-label="Align left">
                    <igx-icon>format_align_left</igx-icon>
                </button>
            </div>
        </div>
        <div class="toolbar-group">
            <span class="toolbar-group-label">Content</span>
            <div class="toolbar-actions">
                <button igxIconButton="flat" aria-label="Shapes">
                    <igx-icon>category</igx-icon>
                </button>
                <button igxIconButton="flat" aria-label="Image">
                    <igx-icon>image</igx-icon>
                </button>
                <button igxIconButton="flat" aria-label="Layout">
                    <igx-icon>dashboard</igx-icon>
                </button>
            </div>
        </div>
        <div class="toolbar-group">
            <span class="toolbar-group-label">Charts</span>
            <div class="toolbar-actions">
                <button igxIconButton="flat" aria-label="Bar chart">
                    <igx-icon>bar_chart</igx-icon>
                </button>
            </div>
        </div>
        <div class="toolbar-group">
            <span class="toolbar-group-label">Colors</span>
            <div class="toolbar-actions">
                <igc-color-picker mode="input" placeholder="Color"></igc-color-picker>
            </div>
        </div>
    </div>
</div>
```
```scss
@use "layout.scss";

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

The Angular Color Picker appearance can be customized through CSS variables, CSS parts and the theming system.

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

```html
<igc-color-picker class="!light-color-picker [--ig-color-picker-picker-background:#fff0eb] [--ig-color-picker-picker-border-color:#f95924]"></igc-color-picker>
```

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';
import { IgxCardComponent, IgxCardContentDirective } from 'igniteui-angular/card';
import { IgxButtonDirective, IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxChipComponent } from 'igniteui-angular/chips';

defineComponents(IgcColorPickerComponent);

const defaults = {
    background: '#1a314a',
    text: '#e5ebf3',
    accent: '#f9592a',
    border: '#00142b'
};

@Component({
    selector: 'app-color-picker-tailwind-styling',
    styleUrls: ['./color-picker-tailwind-styling.component.scss'],
    templateUrl: './color-picker-tailwind-styling.component.html',
    imports: [
        IgxCardComponent,
        IgxCardContentDirective,
        IgxButtonDirective,
        IgxIconButtonDirective,
        IgxRippleDirective,
        IgxIconComponent,
        IgxChipComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ColorPickerTailwindStylingComponent {
    public background = defaults.background;
    public text = defaults.text;
    public accent = defaults.accent;
    public border = defaults.border;

    public onBackgroundInput(event: Event): void {
        this.background = (event as CustomEvent<string>).detail;
    }

    public onTextInput(event: Event): void {
        this.text = (event as CustomEvent<string>).detail;
    }

    public onAccentInput(event: Event): void {
        this.accent = (event as CustomEvent<string>).detail;
    }

    public onBorderInput(event: Event): void {
        this.border = (event as CustomEvent<string>).detail;
    }

    public reset(): void {
        this.background = defaults.background;
        this.text = defaults.text;
        this.accent = defaults.accent;
        this.border = defaults.border;
    }
}
```
```html
<div class="sample-container">
    <div class="theme-editor">
        <div class="theme-editor-header">
            <div>
                <h2>Theme Editor</h2>
                <p>Use the pickers to style the card.</p>
            </div>
            <button igxIconButton="flat" igxRipple aria-label="Reset theme" (click)="reset()">
                <igx-icon>refresh</igx-icon>
            </button>
        </div>
        <div class="swatches">
            <div class="swatch-item">
                <igc-color-picker
                    class="!light-color-picker [--ig-color-picker-picker-background:#fff0eb] [--ig-color-picker-picker-border-color:#f95924] [--ig-color-picker-anchor-background-hover:#e9e9e914] [--ig-color-picker-picker-border-radius:0.5rem]"
                    [value]="background" label="Background" (igcInput)="onBackgroundInput($event)">
                    <span slot="helper-text">Card surface color</span>
                </igc-color-picker>
            </div>
            <div class="swatch-item">
                <igc-color-picker
                    class="!light-color-picker [--ig-color-picker-picker-background:#fff0eb] [--ig-color-picker-picker-border-color:#f95924] [--ig-color-picker-anchor-background-hover:#e9e9e914] [--ig-color-picker-picker-border-radius:0.5rem]"
                    [value]="text" size="small" label="Text" (igcInput)="onTextInput($event)">
                    <span slot="helper-text" class="swatch-hint">Body &amp; heading color</span>
                </igc-color-picker>
            </div>
            <div class="swatch-item">
                <igc-color-picker
                    class="!light-color-picker [--ig-color-picker-picker-background:#fff0eb] [--ig-color-picker-picker-border-color:#f95924] [--ig-color-picker-anchor-background-hover:#e9e9e914] [--ig-color-picker-picker-border-radius:0.5rem]"
                    [value]="accent" size="small" label="Accent" (igcInput)="onAccentInput($event)">
                    <span slot="helper-text" class="swatch-hint">Button &amp; tag color</span>
                </igc-color-picker>
            </div>
            <div class="swatch-item">
                <igc-color-picker
                    class="!light-color-picker [--ig-color-picker-picker-background:#fff0eb] [--ig-color-picker-picker-border-color:#f95924] [--ig-color-picker-anchor-background-hover:#e9e9e914] [--ig-color-picker-picker-border-radius:0.5rem]"
                    [value]="border" size="small" label="Border" (igcInput)="onBorderInput($event)">
                    <span slot="helper-text" class="swatch-hint">Card edge color</span>
                </igc-color-picker>
            </div>
            <div class="swatch-item disabled">
                <igc-color-picker
                    class="!light-color-picker [--ig-color-picker-picker-background:#fff0eb] [--ig-color-picker-picker-border-color:#f95924] [--ig-color-picker-anchor-background-hover:#e9e9e914] [--ig-color-picker-picker-border-radius:0.5rem]"
                    disabled value="#7d91ab" size="small" label="Shadow (Pro)">
                    <span slot="helper-text" class="swatch-hint">Upgrade to unlock</span>
                </igc-color-picker>
            </div>
        </div>
        <igx-card [style.--preview-bg]="background" [style.--preview-text]="text"
            [style.--preview-accent]="accent" [style.--preview-border]="border">
            <igx-card-content>
                <igx-chip class="preview-chip">Design</igx-chip>
                <h3 class="preview-title">Color Picker in Practice</h3>
                <p class="preview-text">Pick colors above to see them applied live across every element of this card.</p>
                <div class="preview-actions">
                    <button igxButton="contained" igxRipple class="preview-primary">Read more</button>
                    <button igxButton="outlined" igxRipple class="preview-secondary">Save</button>
                </div>
            </igx-card-content>
        </igx-card>
    </div>
</div>
```
```scss
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

.sample-container {
    --ig-size: 2;

    display: flex;
    height: fit-content;
    max-width: 55rem;
    margin-inline: auto;
    padding-block-start: 0.5rem;
}

.theme-editor {
    --ig-font-family: "Aktiv Grotesk", sans-serif;

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
}

.theme-editor-header h2 {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
    margin: 0;
    color: var(--ig-gray-900);
    letter-spacing: 0.009rem;
}

.theme-editor-header p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin: 0.125rem 0 0;
    color: var(--ig-gray-600);
}

.theme-editor-header igx-icon {
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

igx-card {
    margin-block-start: 1rem;
    border-radius: 0.5rem;
    background: var(--preview-bg);
    border: 0.063rem solid var(--preview-border);
    box-shadow: var(--ig-elevation-4);
}

.preview-chip {
    --ig-size: var(--ig-size-large);
    --ig-chip-background: color-mix(in srgb, var(--preview-accent) 25%, transparent);
    --ig-chip-hover-background: color-mix(in srgb, var(--preview-accent) 75%, transparent);
    --ig-chip-text-color: var(--preview-accent);
}

.preview-primary,
.preview-secondary {
    --ig-size: var(--ig-size-medium);
    text-transform: capitalize;
}

.preview-primary {
    --background: var(--preview-accent);
    --foreground: var(--preview-bg);
    --hover-background: hsl(from var(--preview-accent) h s 40%);
}

.preview-secondary {
    --foreground: var(--preview-accent);
    --hover-foreground: hsl(from var(--preview-accent) h s 40%);
    --border-color: var(--preview-accent);
    --hover-border-color: hsl(from var(--preview-accent) h s 40%);
    min-width: unset;
}

.preview-title,
.preview-text {
    color: var(--preview-text);
}

.preview-title {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
    margin: 1rem 0 0.25rem;
    letter-spacing: 0.009rem;
}

.preview-text {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
}

.preview-actions {
    display: flex;
    gap: 0.75rem;
    margin-top: 1.25rem;
}
```

## Accessibility

The Angular Color Picker is a keyboard-operable, form-associated control. The anchor is either a labelled button (default mode) or an editable input (input mode), and the open picker traps focus.

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

Infragistics documents Ignite UI for Angular accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

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

The Angular Color Picker troubleshooting guidance follows a problem → cause → fix format for common integration and platform issues.

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

[`IgcColorPickerComponent`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcColorPickerComponent)

## Dependencies

The Angular Color Picker requires a theme stylesheet to apply its visual styling. See the setup in **Getting Started**.

## Additional Resources

Use these resources for support and related Ignite UI documentation.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

## FAQ

  **Q: How do I bind the Color Picker to a form?**

    Set the `name` attribute to the form field name and place the Color Picker inside a `<form>` element. The current serialized color is submitted under that name, and the control participates in `required` validation and form reset through the standard form-associated element APIs.
    In Angular reactive forms, import `IgcFormControlDirective` and bind the Color Picker with `formControlName`. See [Using the Color Picker in Angular Reactive Forms](#using-the-color-picker-in-angular-forms).
  

  **Q: How is `igcInput` different from `igcChange`?**

    `igcInput` fires on every interim interaction with the canvas, the sliders, the alpha input, a swatch, or the eye-dropper. `igcChange` fires once, when focus leaves the Color Picker and the color differs from the one it had when focus entered, matching the semantics of the native `change` event. A color typed into the color input emits only `igcChange`.
  

  **Q: Which package provides the Color Picker?**

    The Color Picker ships in the `igniteui-webcomponents` package, version 7.3.0 or later.
    Angular applications install it directly because `igniteui-angular` does not include the Color Picker.

  


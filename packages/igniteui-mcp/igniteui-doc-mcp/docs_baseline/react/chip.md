---
title: React Chip | Infragistics
_description: Infragistics' React Chip component allows you to display content in a predefined style to decorate other components anywhere in an application.
_keywords: React, UI controls, web widgets, UI widgets, Web Components, React Chip Components, Infragistics
_license: MIT
mentionedTypes: ["Chip"]
_tocName: Chip
---

# React Chip Overview

Ignite UI for React Chips help people enter information, make selections, filter content, or trigger actions.

## React Chip Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ChipOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    private handleChipRemove = (event: CustomEvent<boolean>) => {
        const chip = event.target as IgrChip;
        chip.remove();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                 <IgrChip selectable={true} removable={true} onRemove={this.handleChipRemove}>
                     <span>Chip</span>
                 </IgrChip>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChipOverview/>);
```


<div class="divider"></div>

## Usage

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrChip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchip.html) and its necessary CSS, like so:

```tsx
import { IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

The simplest way to start using the [`IgrChip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchip.html) is as follows:

```tsx
<IgrChip></IgrChip>
```

To display a selectable chip, you can use the [`selectable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchip.html#selectable) property of the chip.

```tsx
<IgrChip selectable={true}></IgrChip>
```

To display a removable chip, you can use the [`removable`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchip.html#removable) property of the chip.

```tsx
<IgrChip removable={true}></IgrChip>
```

## Examples

### Variants

The Ignite UI for React chip supports several pre-defined stylistic variants. You can change the variant by assigning one of the supported values - `Primary`, `Info`, `Success`, `Warning`, or `Danger` to the [`variant`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchip.html#variant) property.

```tsx
<IgrChip variant="success"></IgrChip>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ChipVariants extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    private handleChipRemove = (event: CustomEvent<boolean>) => {
        const chip = event.target as IgrChip;
        chip.remove();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" style={{flexDirection: "row", gap: "8px", alignItems: "baseline"}}>
                 <IgrChip variant="primary" selectable={true} removable={true} onRemove={this.handleChipRemove}>
                     <span>Primary</span>
                 </IgrChip>
                 <IgrChip variant="info" selectable={true} removable={true} onRemove={this.handleChipRemove}>
                     <span>Info</span>
                 </IgrChip>
                 <IgrChip variant="success" selectable={true} removable={true} onRemove={this.handleChipRemove}>
                     <span>Success</span>
                 </IgrChip>
                 <IgrChip variant="warning" selectable={true} removable={true} onRemove={this.handleChipRemove}>
                     <span>Warning</span>
                 </IgrChip>
                 <IgrChip variant="danger" selectable={true} removable={true} onRemove={this.handleChipRemove}>
                     <span>Danger</span>
                 </IgrChip>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChipVariants/>);
```


### Disabled

The Ignite UI for React chip can be disabled by using the [`disabled`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchip.html#disabled) property.

```tsx
<IgrChip disabled={true}></IgrChip>
```

### Prefix / Suffix

With the `Prefix` and `Suffix` parts of the [`IgrChip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchip.html) component and their slots, we can add different content before and after the main content of the chip. We provide default select and remove icons but you can customize them using the [`IgrSelect`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html) and `Remove` slots. You can add additional content before or after the main content, using the `Start` and `End` slots.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const customSelectIconText = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" /></svg>';
const customRemoveIconText = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /> </svg>';
const brushIconText = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="bqbrush-desc bqbrush-title"><title id="bqbrush-title">Brush Icon</title><desc id="bqbrush-desc">A picture showing a painting brush.</desc><path d="M13.093 6.743a1.074 1.074 0 011.306.251l.237.237-6.4 6.4-.242-.231a1.074 1.074 0 01-.251-1.306c.446-.693 1.553-2.516.515-3.554-1.584-1.585-2.225-.94-3.809-2.528S2.714 3 3.354 2.354s2.073-.489 3.658 1.095.943 2.225 2.527 3.809c1.038 1.042 2.861-.069 3.554-.515zm6.93 5.874L15.31 7.9 8.9 14.31l4.433 4.433c-.039.159-.084.327-.137.508 0 0-.8 2.749.8 2.749s.8-2.749.8-2.749a10.75 10.75 0 01-.272-1.14L16.2 16.44a8.944 8.944 0 00-2.072-3.314s.555-.545 3.323 2.063l.811-.811-1.54-2.5 2.5 1.539z"/></svg>';
const brickIconText = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="bpbrick-wall-desc bpbrick-wall-title"><title id="bpbrick-wall-title">Brick Wall Icon</title><desc id="bpbrick-wall-desc">A picture depicting a wall made of bricks.</desc><path d="M6 5H2V1h4zm10-4H8v4h8zM2 11h8V7H2zm10 0h8V7h-8zM22 1h-4v4h4zM6 13H2v4h4zm10 0H8v4h8zM2 23h8v-4H2zm10 0h8v-4h-8zm10-10h-4v4h4z"/></svg>';
const dogIconText = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M18,4C16.29,4 15.25,4.33 14.65,4.61C13.88,4.23 13,4 12,4C11,4 10.12,4.23 9.35,4.61C8.75,4.33 7.71,4 6,4C3,4 1,12 1,14C1,14.83 2.32,15.59 4.14,15.9C4.78,18.14 7.8,19.85 11.5,20V15.72C10.91,15.35 10,14.68 10,14C10,13 12,13 12,13C12,13 14,13 14,14C14,14.68 13.09,15.35 12.5,15.72V20C16.2,19.85 19.22,18.14 19.86,15.9C21.68,15.59 23,14.83 23,14C23,12 21,4 18,4M4.15,13.87C3.65,13.75 3.26,13.61 3,13.5C3.25,10.73 5.2,6.4 6.05,6C6.59,6 7,6.06 7.37,6.11C5.27,8.42 4.44,12.04 4.15,13.87M9,12A1,1 0 0,1 8,11C8,10.46 8.45,10 9,10A1,1 0 0,1 10,11C10,11.56 9.55,12 9,12M15,12A1,1 0 0,1 14,11C14,10.46 14.45,10 15,10A1,1 0 0,1 16,11C16,11.56 15.55,12 15,12M19.85,13.87C19.56,12.04 18.73,8.42 16.63,6.11C17,6.06 17.41,6 17.95,6C18.8,6.4 20.75,10.73 21,13.5C20.75,13.61 20.36,13.75 19.85,13.87Z" /> </svg>';

export default class ChipMultiple extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        registerIconFromText(
            "custom-select", customSelectIconText, "material"
        );
        registerIconFromText(
            "custom-remove", customRemoveIconText, "material"
        );
        registerIconFromText(
            "brush", brushIconText, "material"
        );
        registerIconFromText(
            "brick-wall", brickIconText, "material"
        );
        registerIconFromText(
            "dog-icon", dogIconText, "material"
        );
    }

    private handleChipRemove = (event: CustomEvent<boolean>) => {
        const chip = event.target as IgrChip;
        chip.remove();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{flexDirection: "row", gap: "8px"}}>
                    <IgrChip selectable={true} removable={true} onRemove={this.handleChipRemove}>
                        <span slot="select">
                            <IgrIcon name="custom-select" collection="material"></IgrIcon>
                        </span>
                        <span>Custom Icons</span>
                        <span slot="remove">
                            <IgrIcon name="custom-remove" collection="material"></IgrIcon>
                        </span>
                    </IgrChip>
                    <IgrChip removable={true} onRemove={this.handleChipRemove}>
                        <span slot="start">
                            <IgrIcon name="brush" collection="material"></IgrIcon>
                        </span>
                        <span>Start Slot</span>
                    </IgrChip>
                    <IgrChip selectable={true}>
                        <span>End Slot</span>
                        <span slot="end">
                            <IgrIcon name="brick-wall" collection="material"></IgrIcon>
                        </span>
                    </IgrChip>
                    <IgrChip disabled={true}>
                        <span>Disabled Chip</span>
                        <span slot="end">
                            <IgrIcon name="dog-icon" collection="material"></IgrIcon>
                        </span>
                    </IgrChip>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChipMultiple/>);
```


## Size

We allow the user to choose the size of the [`IgrChip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchip.html) by utilizing the `--ig-size` CSS variable:

```tsx
<IgrChip className="size-small" selectable={true} removable={true}>
    <span>Chip</span>
</IgrChip>
<IgrChip className="size-medium" selectable={true} removable={true}>
    <span>Chip</span>
</IgrChip>
<IgrChip className="size-large" selectable={true} removable={true}>
    <span>Chip</span>
</IgrChip>
```

```css
.size-small {
  --ig-size: var(--ig-size-small);
}

.size-medium {
  --ig-size: var(--ig-size-medium);
}

.size-large {
  --ig-size: var(--ig-size-large);
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.size-small {
    --ig-size: var(--ig-size-small);
}

.size-medium {
    --ig-size: var(--ig-size-medium);
}

.size-large {
    --ig-size: var(--ig-size-large);
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ChipSize extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    private handleChipRemove = (event: CustomEvent<boolean>) => {
        const chip = event.target as IgrChip;
        chip.remove();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" style={{flexDirection: "row", gap: "8px", alignItems: "baseline"}}>
                 <IgrChip className="size-small" selectable={true} removable={true} onRemove={this.handleChipRemove}>
                     <span>Chip</span>
                 </IgrChip>
                 <IgrChip className="size-medium" selectable={true} removable={true} onRemove={this.handleChipRemove}>
                     <span>Chip</span>
                 </IgrChip>
                 <IgrChip className="size-large" selectable={true} removable={true} onRemove={this.handleChipRemove}>
                     <span>Chip</span>
                 </IgrChip>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChipSize/>);
```


## Styling

The [`IgrChip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchip.html) component exposes a `base`, `prefix`, `suffix` CSS parts that can be used to change all of its style properties.

```css
igc-chip::part(base) {
  background: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
}

igc-chip::part(suffix) {
  color: var(--ig-gray-400);
}
```

```css
igc-chip::part(base) {
    background: #011627;
    color: #ECAA53;
}

igc-chip::part(suffix) {
    color: #B7B6C2;
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
import './ChipStyle.css';
import { IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ChipStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    private handleChipRemove = (event: CustomEvent<boolean>) => {
        const chip = event.target as IgrChip;
        chip.remove();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" style={{flexDirection: "row", gap: "8px"}}>
                 <IgrChip selectable={true} removable={true} onRemove={this.handleChipRemove}>
                     <span>Chip</span>
                 </IgrChip>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChipStyling/>);
```


## API References

- [`IgrChip`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrchip.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

---
title: React MaskInput | Infragistics
_description: Infragistics' React MaskInput allows the user to control input and format the visible value based on configurable mask rules
_keywords: React input, Ignite UI for React, Infragistics
_license: MIT
mentionedTypes: ["MaskInput"]
_tocName: Mask Input
---

## React Mask Input Overview

The Ignite UI for React Mask Input is an input field that allows the developer to control user input and format the visible value, based on configurable rules. It provides different input options and ease in use and configuration.

### React Mask Input Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrMaskInput, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const locationIconText = '<svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="locationIconTitle" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"> <title id="locationIconTitle">Location</title> <path d="M12,21 C16,16.8 18,12.8 18,9 C18,5.6862915 15.3137085,3 12,3 C8.6862915,3 6,5.6862915 6,9 C6,12.8 8,16.8 12,21 Z"/> <circle cx="12" cy="9" r="1"/> </svg>';

export default class MaskInputOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        registerIconFromText("location", locationIconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrMaskInput mask="00000">
                    <span slot="prefix">
                        <IgrIcon name="location" collection="material"></IgrIcon>
                    </span>
                    <span slot="helper-text">ZIP Code</span>
                </IgrMaskInput>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MaskInputOverview/>);
```


## Usage

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrMaskInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrmaskinput.html), its necessary CSS, and register its module, like so:

```tsx
import { IgrMaskInput } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

```tsx
<IgrMaskInput mask="00000">
    <span slot="prefix">
        <IgrIcon ref={iconLocationRef} name="location" collection="material"></IgrIcon>
    </span>
    <span slot="helper-text">ZIP Code</span>
</IgrMaskInput>
```

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

### Mask Rules

The table bellow shows the supported built-in mask rules:

| Mask Character | Description |
| :--- | :--- |
| 0 | Digit character \[0-9]. Entry is required. |
| 9 | Digit character \[0-9]. Entry is optional. |
| # | Digit character \[0-9], plus (+), or minus (-) sign. Entry is required. |
| L | Letter character. Entry is required. |
| ? | Letter character. Entry is optional. |
| A | Alphanumeric (letter or digit) character. Entry is required. |
| a | Alphanumeric (letter or digit) character. Entry is optional. |
| & | Any keyboard character. Entry is required. |
| C | Any keyboard character. Entry is optional. |
| \ | Escapes a mask flag and turns it into a literal. |

These flags also participate in the component validation - i.e., the input becomes invalid if some but not all required positions are filled (no positions filled/empty value is still a responsibility of `required`). This applies to both stand-alone inputs and when included in a form.

### Applying Mask

Applying the mask is pretty straightforward. All you need to do is provide a predetermined pattern to the [`mask`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrmaskinput.html#mask) property of the input.

In the example below, we will apply a mask for a phone number with an extension code.

```tsx
<IgrMaskInput mask="(####) 00-00-00 Ext. 9999">
    <span slot="prefix">
        <IgrIcon ref={iconPhoneRef} name="phone" collection="material"></IgrIcon>
    </span>
    <span slot="helper-text">Phone number</span>
</IgrMaskInput>
```

After that you should see the following in your browser:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrMaskInput, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const phoneIconText = '<svg width="24px" height="24px" viewBox="0 0 12 12" enable-background="new 0 0 12 12" id="Слой_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M6.2478638,8.4810181C6.1535645,8.5752563,6.0301514,8.6223755,5.9067383,8.6223755   S5.6599121,8.5752563,5.5656128,8.4810181L3.5189819,6.4343872C3.4247437,6.3400879,3.3775635,6.2166748,3.3775635,6.0932617   s0.0471802-0.2468872,0.1414185-0.3411255l1.0233154-1.0233154L1.8134766,2l-0.682251,0.6821899   c-1.5083008,1.5083618-1.5083008,3.9494019,0,5.4577026l2.7288818,2.7288208   c0.3770752,0.3770752,0.812439,0.6599121,1.2769775,0.8484497C5.6015625,11.9057007,6.0952759,12,6.5889282,12   c0.4937134,0,0.9873657-0.0942993,1.4519043-0.2828369s0.8999023-0.4713745,1.2769775-0.8484497L10,10.1865234L7.2711792,7.4577026   L6.2478638,8.4810181z" fill="#1D1D1B"/><path d="M6.5,1H6v1h0.5C8.4296875,2,10,3.5703125,10,5.5V6h1V5.5C11,3.0185547,8.9814453,1,6.5,1z" fill="#1D1D1B"/><path d="M8,5.5V6h1V5.5C9,4.121582,7.878418,3,6.5,3H6v1h0.5C7.3271484,4,8,4.6728516,8,5.5z" fill="#1D1D1B"/></g></svg>';

export default class MaskInputApplyingMask extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        registerIconFromText("phone", phoneIconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrMaskInput mask="(####) 00-00-00 Ext. 9999">
                    <span slot="prefix">
                        <IgrIcon name="phone" collection="material"></IgrIcon>
                    </span>
                    <span slot="helper-text">Phone number</span>
                </IgrMaskInput>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MaskInputApplyingMask/>);
```


### Prompt Character

Developers can customize the prompt symbol used for unfilled parts of the mask. To do this, simply provide any character to the [`prompt`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrmaskinputbase.html#prompt) property:

```tsx
<IgrMaskInput mask="(####) 00-00-00 Ext. 9999" prompt="-"></IgrMaskInput>
```

By default, the `prompt` character is **underscore**.

### Placeholder

Developers can also take advantage of the [`placeholder`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinputbase.html#placeholder) property, which serves the purpose of the native input placeholder attribute. If no value is provided for the placeholder, the value of the mask is used as such.

```tsx
<IgrMaskInput mask="00/00/0000" placeholder="dd/MM/yyyy"></IgrMaskInput>
```

### Value Modes

The [`IgrMaskInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrmaskinput.html) exposes a [`valueMode`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrmaskinput.html#valueMode) property that lets you choose between `raw` and `withFormatting` options to configure which input value (formatted or raw) to bind in your form when a specific mask is applied. By default, [`valueMode`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrmaskinput.html#valueMode) is set to `raw`. Try it for yourself in the example below:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrMaskInput, IgrIcon, IgrRadioGroup, IgrRadio, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class MaskInputValueModes extends React.Component<any, any> {

    public maskRef: IgrMaskInput;

    constructor(props: any) {
        super(props);
        this.onMaskRef = this.onMaskRef.bind(this);
        this.state = { value: "", mode: "raw" };

        const fileIconText = '<svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="document"><polyline class="cls-1" points="25 9 25 29 7 29 7 3 16 3"/><line class="cls-1" x1="16" x2="25" y1="3" y2="9"/><line class="cls-1" x1="16" x2="16" y1="3" y2="9"/><line class="cls-1" x1="25" x2="16" y1="9" y2="9"/><line class="cls-1" x1="11" x2="16" y1="17" y2="17"/><line class="cls-1" x1="11" x2="20" y1="21" y2="21"/></g></svg>';
        registerIconFromText("file", fileIconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrMaskInput ref={this.onMaskRef} onInput={(e) => this.onInputChange(e)}>
                    <span slot="prefix">
                        <IgrIcon name="file" collection="material"></IgrIcon>
                    </span>
                </IgrMaskInput>

                <div id="content" style={{ width: "100%", height: "inherit" }}>
                    <IgrRadioGroup alignment="horizontal" style={{ marginBottom: "10px" }}>
                        <IgrRadio name="position" value="raw" label-position="after" onChange={(e) => this.onRadioChange(e)} checked={this.state.mode === "raw"}><span>raw</span></IgrRadio>
                        <IgrRadio name="position" value="withFormatting" label-position="after" onChange={(e) => this.onRadioChange(e)} checked={this.state.mode === "withFormatting"}><span>withFormatting</span></IgrRadio>
                    </IgrRadioGroup>

                    <span id="value-span">Value: {this.state.value}</span>
                </div>
            </div>
        );
    }

    public onMaskRef(mask: IgrMaskInput) {
        if (!mask) { return; }
        this.maskRef = mask;
    }

    public onInputChange(event: any) {
        console.log(event)
        if (this.maskRef) {
            this.setState({ value: this.maskRef.value })
        }
    }

    public onRadioChange(event: any) {
        if (this.maskRef) {
            const mode = event.detail.value;
            this.maskRef.valueMode = mode;
            this.setState({
                mode: mode,
                value: this.maskRef.value
            });
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MaskInputValueModes />);
```


## Styling

The [`IgrMaskInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrmaskinput.html) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `container` | The main wrapper that holds all main input elements. |
| `input` | The native input element. |
| `label` | The native label element. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |
| `helper-text` | The helper text wrapper. |

```css
igc-mask-input::part(input) {
  background-color: var(--ig-primary-100);
  border-color: var(--ig-secondary-500);
  box-shadow: none;
}

igc-mask-input::part(input)::placeholder {
  color: var(--ig-primary-100-contrast);
}
```




## Assumptions and limitations

- The masked input does not expose a _type_ attribute since it is always an input of type **text**.
- Undo/redo behavior is currently unsupported.

## API References

- [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html)
- [`IgrMaskInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrmaskinput.html)
- [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html)
- [`IgrRadio`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradio.html)
- [`IgrRadioGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradiogroup.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

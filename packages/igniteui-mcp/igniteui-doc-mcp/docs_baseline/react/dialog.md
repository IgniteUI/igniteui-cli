---
title: React Dialog | Infragistics
_description: With Ignite UI for React Dialog component, developers can easily integrate a dialog window centered on top of app content.
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Dialog components
_license: MIT
mentionedTypes: ["Dialog"]
_tocName: Dialog
---

# React Dialog Overview

The Ignite UI for React Dialog component is used to display some information or prompt the user for an action or confirmation. It is shown in a modal window, which means that the user is not allowed to interact with the main app until a certain action is performed that closes the dialog.

## Ignite UI for React Dialog Example

This sample demonstrates how to create a Dialog component in React.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrDialog } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class DialogOverview extends React.Component<any, any> {

    public dialogRef: IgrDialog;

    constructor(props: any) {
        super(props);
        this.onDialogRef = this.onDialogRef.bind(this);
        this.onDialogShow = this.onDialogShow.bind(this);
        this.onDialogHide = this.onDialogHide.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrButton variant="contained" onClick={this.onDialogShow}>
                    <span>Show Dialog</span>
                </IgrButton>

                <IgrDialog title="Confirmation" ref={this.onDialogRef}>
                    <p>Are you sure you want to delete the Annual_Report_2016.pdf and Annual_Report_2017.pdf files?</p>
                    <div slot="footer">
                        <IgrButton onClick={this.onDialogHide} variant="flat"><span>Cancel</span></IgrButton>
                        <IgrButton onClick={this.onDialogHide} variant="flat"><span>OK</span></IgrButton>
                    </div>
                </IgrDialog>
            </div>
        );
    }

    public onDialogRef(dialog: IgrDialog){
        if (!dialog) { return; }
        this.dialogRef = dialog;
    }

    public onDialogShow() {
        if(this.dialogRef){
            this.dialogRef.show();
        }
    }

    public onDialogHide() {
        if(this.dialogRef){
            this.dialogRef.hide();
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DialogOverview/>);
```


<div class="divider--half"></div>

### Usage

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the React [`IgrDialog`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdialog.html) and its necessary CSS, like so:

```tsx
import { IgrDialog } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to display the dialog component is to use its [`show`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdialog.html#show) method and call it on a button click.

```tsx
<IgrButton variant="contained" clicked={this.onDialogShow}>
    <span>Show Dialog</span>
</IgrButton>

<IgrDialog ref={this.onDialogRef}>
    <span>Dialog Message</span>
</IgrDialog>

public onDialogRef(dialog: IgrDialog) {
    if (!dialog) { return; }
    this.dialogRef = dialog;
}

public onDialogShow() {
    if (this.dialogRef) {
        this.dialogRef.show();
    }
}
```

The Dialog component provides an [`open`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdialog.html#open) property, which gives you the ability to configure its state as per your application scenario.

Use the [`title`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdialog.html#title) property to set the title of the dialog. However, if any content is provided in the `title` slot, it will take precedence over the property.

Action buttons or additional information can be placed in the bottom part of the dialog via the `footer` slot. If no content is added there, a default `OK` button will be shown that closes the Dialog when clicked. In case you do not want this button to be shown you can set the [`hideDefaultAction`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdialog.html#hideDefaultAction) property to **true**. The default value is **false**.

### Closing

By default, the Dialog is closed automatically when the user presses `ESC`. You could prevent this behavior using the [`keepOpenOnEscape`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdialog.html#keepOpenOnEscape) property. The default value is **false**. If there is an open dropdown (or any other element that should handle `ESC` internally) in the dialog, pressing `ESC` once will close the dropdown and pressing it again will close the dialog.

Use the [`closeOnOutsideClick`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdialog.html#closeOnOutsideClick) property to configure if the dialog should be closed when clicking outside of it. The default value is **false**.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrDialog, IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class DialogClosingVariations extends React.Component<any, any> {

    public dialogRef: IgrDialog;

    constructor(props: any) {
        super(props);
        this.onDialogRef = this.onDialogRef.bind(this);
        this.onDialogShow = this.onDialogShow.bind(this);
        this.onDialogHide = this.onDialogHide.bind(this);
        this.onSwitchChangeEscape = this.onSwitchChangeEscape.bind(this);
        this.onSwitchChangeClick = this.onSwitchChangeClick.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrSwitch labelPosition="before" onChange={this.onSwitchChangeEscape}><span>keepOpenOnEscape</span></IgrSwitch>
                <IgrSwitch labelPosition="before" onChange={this.onSwitchChangeClick}><span>closeOnOutsideClick</span></IgrSwitch>

                <IgrButton variant="contained" onClick={this.onDialogShow}>
                    <span>Show Dialog</span>
                </IgrButton>

                <IgrDialog title="Confirmation" ref={this.onDialogRef}>
                    <p>Are you sure you want to delete the Annual_Report_2016.pdf and Annual_Report_2017.pdf files?</p>
                    <div slot="footer">
                        <IgrButton onClick={this.onDialogHide} variant="flat"><span>Cancel</span></IgrButton>
                        <IgrButton onClick={this.onDialogHide} variant="flat"><span>OK</span></IgrButton>
                    </div>
                </IgrDialog>
            </div>
        );
    }

    public onDialogRef(dialog: IgrDialog){
        if (!dialog) { return; }
        this.dialogRef = dialog;
    }

    public onDialogShow() {
        if(this.dialogRef){
            this.dialogRef.show();
        }
    }

    public onDialogHide() {
        if(this.dialogRef){
            this.dialogRef.hide();
        }
    }

    public onSwitchChangeEscape(e: any) {
        this.dialogRef.keepOpenOnEscape = e.detail.checked;
    }

    public onSwitchChangeClick(e: any) {
        this.dialogRef.closeOnOutsideClick = e.detail.checked;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DialogClosingVariations/>);
```


### Form

Form elements can close a Dialog if they have the attribute `method="dialog"`. Submitting the form will trigger the closing of the dialog.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrDialog, IgrInput, IgrIcon,registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const usernameIconText = '<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/></svg>';
const passwordIconText = '<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0151 13.6556C14.8093 14.3587 16.9279 13.9853 18.3777 12.5355C20.3304 10.5829 20.3304 7.41709 18.3777 5.46447C16.4251 3.51184 13.2593 3.51184 11.3067 5.46447C9.85687 6.91426 9.48353 9.03288 10.1866 10.8271M12.9964 13.6742L6.82843 19.8422L4.2357 19.6065L4 17.0138L10.168 10.8458M15.5493 8.31568V8.29289" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

export default class DialogForm extends React.Component<any, any> {

    public dialogRef: IgrDialog;
    public passwordIcon: IgrIcon;
    public usernameIcon: IgrIcon;

    constructor(props: any) {
        super(props);
        this.onDialogRef = this.onDialogRef.bind(this);
        this.onDialogShow = this.onDialogShow.bind(this);
        registerIconFromText("username", usernameIconText, "material");
        registerIconFromText("password", passwordIconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrButton variant="contained" onClick={this.onDialogShow}>
                    <span>Show Dialog</span>
                </IgrButton>

                <IgrDialog title="Login" ref={this.onDialogRef}>
                    <form>
                        <IgrInput label="Username">
                            <span slot="prefix">
                                <IgrIcon name="username" collection="material"/>
                            </span>
                        </IgrInput>
                        <br />
                        <IgrInput type="password" label="Password">
                            <span slot="prefix">
                                <IgrIcon name="password" collection="material"/>
                            </span>
                        </IgrInput>
                        <br />
                        <div style={{display: "flex", justifyContent: "flex-end"}}>
                            <IgrButton type="reset" variant="flat"><span>Reset</span></IgrButton>
                            <IgrButton type="submit" variant="flat"><span>Submit</span></IgrButton>
                        </div>
                    </form>


                    <div slot="footer">
                        <IgrButton><span>Create an account</span></IgrButton>
                    </div>
                </IgrDialog>
            </div>
        );
    }

    public onDialogRef(dialog: IgrDialog){
        if (!dialog) { return; }
        this.dialogRef = dialog;
    }

    public onDialogShow() {
        if(this.dialogRef){
            this.dialogRef.show();
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DialogForm/>);
```


## Styling

The [`IgrDialog`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdialog.html) component exposes several CSS parts to give you full control over its style:

|Name|Description|
|--|--|
| `base` | The base wrapper of the dialog. |
| `title` | The title container. |
| `footer` | The footer container. |
| `content` | The content container. |

```css
igc-dialog::part(content) {
  background: var(--ig-secondary-800);
  color: var(--ig-secondary-800-contrast);
}

igc-dialog::part(title),
igc-dialog::part(footer) {
  background: var(--ig-secondary-800);
  color: var(--ig-warn-500);
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-dialog::part(content) {
    background: #011627;
    color: white;
}

igc-dialog::part(title),
igc-dialog::part(footer) {
    background: #011627;
    color: #ECAA53;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrDialog } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class DialogStyling extends React.Component<any, any> {

    public dialogRef: IgrDialog;

    constructor(props: any) {
        super(props);
        this.onDialogRef = this.onDialogRef.bind(this);
        this.onDialogShow = this.onDialogShow.bind(this);
        this.onDialogHide = this.onDialogHide.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrButton variant="contained" onClick={this.onDialogShow}>
                    <span>Show Dialog</span>
                </IgrButton>

                <IgrDialog title="Confirmation" ref={this.onDialogRef}>
                    <h1 slot="title">Styled Title</h1>
                    <p>Are you sure you want to delete the Annual_Report_2016.pdf and Annual_Report_2017.pdf files?</p>
                    <div slot="footer">
                        <IgrButton onClick={this.onDialogHide} variant="flat"><span>Cancel</span></IgrButton>
                        <IgrButton onClick={this.onDialogHide} variant="flat"><span>OK</span></IgrButton>
                    </div>
                </IgrDialog>
            </div>
        );
    }

    public onDialogRef(dialog: IgrDialog){
        if (!dialog) { return; }
        this.dialogRef = dialog;
    }

    public onDialogShow() {
        if(this.dialogRef){
            this.dialogRef.show();
        }
    }

    public onDialogHide() {
        if(this.dialogRef){
            this.dialogRef.hide();
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DialogStyling/>);
```


<div class="divider--half"></div>

## API References

- [`keepOpenOnEscape`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdialog.html#keepOpenOnEscape)
- [`closeOnOutsideClick`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdialog.html#closeOnOutsideClick)
- [`hide`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdialog.html#hide)
- [`hideDefaultAction`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdialog.html#hideDefaultAction)
- [`open`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdialog.html#open)
- [`title`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdialog.html#title)
- [`IgrDialog`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdialog.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

---
title: React Text Area | Data Visualization Tools | Infragistics
_description: Infragistics' React Text Area is a component where the user can enter a sizable amount of free-form text.
_keywords: Ignite UI for React, UI controls, React widgets, Web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Input, React Textarea components, React Textarea controls
mentionedTypes: ["Input", "Icon", "Textarea", "Toast"]
_license: MIT
_tocName: Text Area
---

# React Text Area Overview

The Ignite UI for React Text Area represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizable amount of free-form text, for example a comment on a review or feedback form.

## React Text Area Example

<div class="divider--half"></div>

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTextarea } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function TextAreaOverview() {

    return (
        <div className="sample">
            <IgrTextarea rows={3} label="Tell us your story:"><span>It was a dark and stormy night...</span></IgrTextarea>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TextAreaOverview/>);
```

## Dependencies

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrTextarea`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtextarea.html) and its necessary CSS like so:

```tsx
import { IgrTextarea } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

After we import the [`IgrTextarea`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtextarea.html) component we are ready to start using it, so let's add our first Text Area.

```tsx
<IgrTextarea rows="5" label="Tell us your story:"><span>It was a dark and stormy night...</span></IgrTextarea>
```

## Prefix, Suffix &  Helper Text

With `prefix` and `suffix` slots we can add different content before and after the main content of the Text Area. The `helper-text` slot provides a hint placed below the Text Area. In the following sample we will create a new Text Area field with a text prefix, an icon suffix and a helper text as a hint:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTextarea, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function TextAreaSlots() {

    useEffect(() => {
        registerIconFromText( "feedback",
            `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm-40-160h80v-240h-80v240ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>`,
            "material");
    }, []);

    return (
        <div className="sample">
            <IgrTextarea label="Your feedback">
                <span slot="prefix">
                <IgrIcon name='feedback' collection="material"></IgrIcon>
                </span>                    
                <p slot="helper-text">Give us a short description of what you liked/disliked</p>
            </IgrTextarea>
        </div>
    );
}


// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TextAreaSlots/>);
```

## Text Area Resizing

There are three different resize options of the [`IgrTextarea`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtextarea.html). When set to `none`, the text area does not resize and uses a scroll bar to show overflow text. When set to `vertical` (the default option), the text area lets the user resize it vertically. When set to `auto`, the text area shows all the user input at once. Overflow text wraps onto a new line and expands the text area automatically.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTextarea } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function TextAreaResize() {

    return (
        <div className="sample container">
           <IgrTextarea label="Resize: none" resize="none">                                      
                <p slot="helper-text">This textarea does not resize and uses a scroll bar to show overflow text.</p>
            </IgrTextarea>
            <IgrTextarea label="Resize: vertical (default)">                                    
                <p slot="helper-text">This textarea lets the user resize vertically.</p>
            </IgrTextarea>
            <IgrTextarea label="Resize: auto" resize="auto">                                       
                <p slot="helper-text">This textarea shows all the user input at once. Overflow text wraps onto a new line and expands the text area.</p>
            </IgrTextarea>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TextAreaResize/>);
```

## Form Integration

The sample below shows how a [`IgrTextarea`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtextarea.html) could be integrated into a form.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.controls {
    margin-top: 1rem;
}
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrTextarea, IgrButton, IgrToast } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function TextAreaFormIntegration() {
  let toastRef: IgrToast;

  const onToastRef = (toast: IgrToast) => {
    if (!toast) {
      return;
    }
    toastRef = toast;
  };

  const onSubmitButtonClicked = (e: React.FormEvent<HTMLFormElement>) => {
    if (toastRef) {
      e.preventDefault();
      toastRef.show();
    }
  };

  return (
    <div className="sample">
      <form id="form" onSubmit={onSubmitButtonClicked}>
        <IgrTextarea
          rows={3}
          name="user_feedback"
          label="Your review"
          required
        ></IgrTextarea>
        <div className="controls">
          <IgrButton type="submit">
            <span>Submit review</span>
          </IgrButton>
          <IgrButton type="reset" variant="outlined">
            <span>Reset</span>
          </IgrButton>
        </div>
        <IgrToast
          id="submitted"
          position="top"
          displayTime={1000}
          ref={onToastRef}
        >
          <span>Your review was submitted</span>
        </IgrToast>
      </form>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TextAreaFormIntegration />);
```

## Styling

The [`IgrTextarea`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtextarea.html) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `container` | The main wrapper that holds all main input elements. |
| `input` | The native input element. |
| `label` | The native label element. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |
| `helper-text` | The helper text wrapper. |

```css
igc-textarea::part(input) {
  background-color: var(--ig-info-100);
  border-color: var(--ig-primary-400);
}

igc-textarea::part(label) {
  color: var(--ig-gray-800);
}

igc-textarea::part(prefix),
igc-textarea::part(suffix) {
  color: var(--ig-primary-500-contrast);
  border-color: var(--ig-primary-500);
  background-color: var(--ig-primary-500);
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
igc-textarea::part(input) {
    background-color: rgb(169, 214, 229);
    border-color: rgb(42, 111, 151);
}

igc-textarea::part(label) {
    color: rgb(1, 42, 74);
}

igc-textarea::part(prefix),
igc-textarea::part(suffix) {
    color: white;
    border-color: rgb(42, 111, 151);
    background-color: rgb(70, 143, 175);
}
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTextarea, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function TextAreaStyling() {

    useEffect(() => {
        registerIconFromText( "feedback",
            `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm-40-160h80v-240h-80v240ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>`,
            "material");
    }, []);
    
    return (
        <div className="sample">
            <IgrTextarea label="Steps to reproduce">
                <span slot="prefix">
                <IgrIcon name='feedback' collection="material"></IgrIcon>
                </span>                    
                <p slot="helper-text">Provide a detailed description of the steps that led to the issue you experienced</p>
            </IgrTextarea>
        </div>
    );
}


// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TextAreaStyling/>);
```

<div class="divider"></div>

## API References

- [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html)
- [`IgrTextarea`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtextarea.html)
- [`IgrToast`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtoast.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

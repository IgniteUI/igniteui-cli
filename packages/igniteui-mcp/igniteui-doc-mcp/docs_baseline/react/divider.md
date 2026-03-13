---
title: React Divider | Layout Controls | Infragistics
_description: Use Infragistics' React divider component to easily create a horizontal/vertical rule as a break between content to better organize information on a page.
_keywords: Ignite UI for React, UI controls, React widgets, Web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React DIvider components, React Divider controls
_license: MIT
mentionedTypes: ["Divider"]
_tocName: Divider
---

# React Divider

The Ignite UI for React Divider allows the content author to easily create a horizontal/vertical rule as a break between content to better organize information on a page.

## React Divider Example

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDividerModule, IgrDivider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDividerModule.register();

export default class DividerOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <p>First paragraph</p>
                <IgrDivider key="divider"></IgrDivider>
                <p>Second paragraph</p>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DividerOverview />);
```


<div class="divider--half"></div>

## Dependencies

<!-- React -->

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrDivider`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdivider.html), its necessary CSS, and register its module, like so:

```tsx
import { IgrDividerModule, IgrDivider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDividerModule.register();
```

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

The [`IgrDivider`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdivider.html) is capable of displaying images, initials, or any other content, including icons. Declaring an [`IgrDivider`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdivider.html) is as simple as:

```tsx
<IgrDivider></IgrDivider>
```

## Usage

### Vertical Divider

If the [`vertical`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdivider.html#vertical) attribute is set the direction of the divider would be changed from horizontal to vertical.

```tsx
<IgrDivider vertical></IgrDivider>
```

```css
p{
    text-align: justify;
}

.content{
    display:flex;
    gap: 16px;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDividerModule, IgrDivider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDividerModule.register();

export default class DividerVertical extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa officiis
                        suscipit veniam vitae. Ab ad, dolores iure nostrum quo ratione rerum
                        sapiente ullam. Adipisci alias architecto eligendi est, expedita,
                        explicabo fugiat iure laudantium minima molestiae molestias nam
                        obcaecati placeat provident, quam repellendus vitae! Cupiditate eveniet,
                        facere harum hic quisquam sed.
                    </p>
                    <IgrDivider key="divider" vertical></IgrDivider>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa officiis
                        suscipit veniam vitae. Ab ad, dolores iure nostrum quo ratione rerum
                        sapiente ullam. Adipisci alias architecto eligendi est, expedita,
                        explicabo fugiat iure laudantium minima molestiae molestias nam
                        obcaecati placeat provident, quam repellendus vitae! Cupiditate eveniet,
                        facere harum hic quisquam sed.
                    </p>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DividerVertical />);
```


### Type

The [`type`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdivider.html#type) attribute determines whether to render a `solid` or a `dashed` divider line. The default value is `solid`.

```tsx
<IgrDivider type="dashed"></IgrDivider>
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDividerModule, IgrDivider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDividerModule.register();

export default class DividerDashed extends React.Component<any, any> {

    constructor(props: any) {
        super(props);  
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <p>First paragraph</p>
                <IgrDivider key="divider" type="dashed"></IgrDivider>
                <p>Second paragraph</p>
            </div>
        );
    }

    
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DividerDashed/>);
```


### Inset Divider

The [`IgrDivider`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdivider.html) can be set in on both sides. To `inset` the divider, set the [`middle`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdivider.html#middle) attribute to true in combination with the `--inset` css variable. This will shrink the divider line from both sides. The default value of the [`middle`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdivider.html#middle) attribute is false.

```css
/* DividerStyles.css */
.withInset{
    --inset: 100px;
    --color:red;
}
```

```tsx
// Both side
<IgrDivider middle="true" className="withInset"></IgrDivider>
// Left side only
<IgrDivider  className="withInset"></IgrDivider>
```

```css
.parent{
    display: flex;
    justify-content: space-between;   
}

.content{
    width: 45%;    
    padding: 20px;
}

.withInset{
    --inset: 100px;
    --color:red;
}

h4 {
    margin-top: 0;
}
p {
    margin-top: 0;
}
.mt {
    margin-top: 16px;
    margin-bottom: 0;
}
.mb {
    margin-bottom: 16px;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDividerModule, IgrDivider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDividerModule.register();

export default class DividerMiddle extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <div className="parent">
                    <div className="content">
                        <h4 className="mb">Both sides inset.</h4>
                        <IgrDivider key="divider2" className="withInset" middle={true}></IgrDivider>
                        <p className="mt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias at consectetur dolor magnam maiores nihil quasi quod repudiandae similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, culpa delectus eius fuga ipsa iste laborum nemo, numquam omnis perferendis soluta sunt. Animi asperiores aspernatur assumenda doloribus eligendi.</p>
                    </div>
                    <div className="content">
                        <h4 className="mb">Left side only(default).</h4>
                        <IgrDivider key="divider2" className="withInset"></IgrDivider>
                        <p className="mt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias at consectetur dolor magnam maiores nihil quasi quod repudiandae similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, culpa delectus eius fuga ipsa iste laborum nemo, numquam omnis perferendis soluta sunt. Animi asperiores aspernatur assumenda doloribus eligendi.</p>
                    </div>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DividerMiddle />);
```


### Using Divider Inside Select Component

The following sample illustrates how the [`IgrDivider`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdivider.html) can be integrated within the [`IgrSelect`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrselect.html) in order to distinguish two groups of items.

```tsx
<IgrSelect>
  <IgrSelectItem><span>Item 1</span></IgrSelectItem>
  <IgrSelectItem><span>Item 2</span></IgrSelectItem>
  <IgrDivider></IgrDivider>
  <IgrSelectItem><span>Item 2</span></IgrSelectItem>
</IgrSelect>

```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrDividerModule,
    IgrDivider,
    IgrSelectModule,
    IgrSelectItemModule,
    IgrSelect,
    IgrSelectItem,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDividerModule.register();
IgrSelectModule.register();
IgrSelectItemModule.register();

export default class DividerSelect extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrSelect key="select">
                    <IgrSelectItem key="item1"><span>Item 1</span></IgrSelectItem>
                    <IgrSelectItem key="item2"><span>Item 2</span></IgrSelectItem>
                    <IgrDivider key="divider"></IgrDivider>
                    <IgrSelectItem key="item3"><span>Item 3</span></IgrSelectItem>
                </IgrSelect>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DividerSelect />);
```


## CSS Variables

### Inset

The `--inset` css variable shrinks the divider by the given amount from the start. If middle is set it will shrink from both sides.

### Color

The `--color` css variable sets the color of the divider.

<div class="divider--half"></div>

## API References

- [`IgrDivider`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrdivider.html)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

---
title: React Navbar | Infragistics
_description: Infragistics' React navbar provides optimal UI experience with seamless integration to allow users to move within an application smoothly. Improve your application with Ignite UI for  React!
_keywords: React navbar, Ignite UI for React, Infragistics
_license: MIT
mentionedTypes: ["Navbar"]
_tocName: Navbar
---

# React Navbar Overview

The Ignite UI for React Navbar informs the user of their current position in an app. The Navigation Bar can also provide links to quick actions such as search or favorite, helping users navigate smoothly through an application without trying to move to invalid routes or states. The bar sits at the top of the container it is placed in.

## React Navbar Example

The following example represents a [`IgrNavbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavbar.html) with icons and text header:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrNavbar, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const favoriteIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
const moreVertIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>';

export default class NavbarOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);        
        registerIconFromText("home", homeIcon, "material");
        registerIconFromText("search", searchIcon, "material");
        registerIconFromText("favorite", favoriteIcon, "material");
        registerIconFromText("more_vert", moreVertIcon, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrNavbar style={{ height: '65px' }}>
                    <div slot="start">
                        <IgrIcon name="home" collection="material" />
                    </div>
                    <h2>Sample App</h2>
                    <div slot="end">
                        <IgrIcon name="search" collection="material" />
                    </div>
                    <div slot="end">
                        <IgrIcon name="favorite" collection="material" />
                    </div>
                    <div slot="end">
                        <IgrIcon name="more_vert" collection="material" />
                    </div>
                </IgrNavbar>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NavbarOverview/>);
```


## Usage

Before using the [`IgrNavbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavbar.html), you need to register it as follows:

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrNavbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavbar.html) and its necessary CSS like so:

```tsx
import { IgrNavbar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

Then in the template of [`IgrNavbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavbar.html), you can add the following code to show a basic [`IgrNavbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavbar.html) with a title only:

```tsx
<IgrNavbar>
    <span>Navigation Title</span>
</IgrNavbar>
```

### Content

You can enhance the [`IgrNavbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavbar.html) component by adding [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html) or other components at the start or end position as content, allowing users to navigate to key positions directly from the bar:

```tsx
 <IgrNavbar>
    <div slot="start">
        <IgrIcon name="home" collection="material" />
    </div>
    <h2>Sample App</h2>
    <div slot="end">
        <IgrIcon name="search" collection="material" />
    </div>
    ...
</IgrNavbar>

```

## Styling

The `NavBar` component exposes several CSS parts, giving you full control over its style:

|Name|Description|
|--|--|
| `base` | The base wrapper of the navigation bar. |
| `start` | The left aligned icon container. |
| `middle` | The navigation bar title container. |
| `end` | The right aligned action icons container. |

```css
igc-icon {
  color: var(--ig-primary-500);
}

igc-navbar {
  background-color: var(--ig-secondary-200);
}

igc-navbar::part(middle) {
  font-family: Titillium Web, sans-serif;
  color: var(--ig-primary-500);;
}
```

If all went well, you should see the following in your browser:

```css
igc-icon {
    color: currentColor !important;
}

igc-navbar {
    background-color: #232121
}

igc-navbar::part(start) {
    color: #f23269;
}

igc-navbar::part(middle) {
    font-family: Titillium Web,sans-serif;
    color: #e9e8ea
}

igc-navbar::part(end) {
    color: #e9e8ea
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './NavbarStyling.css';
import { IgrNavbar, IgrIcon, IgrNavbarModule, IgrIconModule, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrNavbarModule.register();
IgrIconModule.register();

const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const favoriteIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
const moreVertIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>';

export default class NavbarStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);        
        registerIconFromText("home", homeIcon, "material");
        registerIconFromText("search", searchIcon, "material");
        registerIconFromText("favorite", favoriteIcon, "material");
        registerIconFromText("more_vert", moreVertIcon, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrNavbar style={{height: '65px'}}>
                    <div slot="start">
                        <IgrIcon name="home" collection="material" />
                    </div>
                    <h2>Sample App</h2>
                    <div slot="end">
                        <IgrIcon name="search" collection="material" />
                    </div>
                    <div slot="end">
                        <IgrIcon name="favorite" collection="material" />
                    </div>
                    <div slot="end">
                        <IgrIcon name="more_vert" collection="material" />
                    </div>
                </IgrNavbar>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NavbarStyling/>);
```


<div class="divider"></div>

## API References

- [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html)
- [`IgrNavbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavbar.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

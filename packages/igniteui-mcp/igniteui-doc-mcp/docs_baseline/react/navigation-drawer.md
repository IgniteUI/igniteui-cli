---
title: React NavDrawer | Infragistics
_description: Infragistics' React NavDrawer provides side navigation that can be expanded or collapsed within the content
_keywords: React navbar, Ignite UI for React, Infragistics
_license: MIT
mentionedTypes: ["NavDrawer"]
_tocName: Navigation Drawer
---

# React Navigation Drawer Overview

The Ignite UI for React Navigation Drawer provides side navigation that can be expanded or collapsed within the content. A mini version provides quick access to navigation even when closed. Its content is completely customizable while also providing default menu item styling.

## React Navigation Drawer Example

This sample demonstrates how to create [`IgrNavDrawer`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavdrawer.html) component.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem, IgrIcon, IgrIconButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const menuIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>';

export default class NavDrawerAddDrawerItems extends React.Component<any, any> {
    private navDrawer: IgrNavDrawer;

    constructor(props: any) {
        super(props);
        this.onNavDrawerClick = this.onNavDrawerClick.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.navDrawerRef = this.navDrawerRef.bind(this);

        registerIconFromText("home", homeIcon, "material");
        registerIconFromText("search", searchIcon, "material");
        registerIconFromText("menu", menuIcon, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrIconButton style={{ margin: "10px" }}
                    onClick={this.toggleDrawer}
                    name="menu"
                    collection="material"
                    variant="flat">
                </IgrIconButton>
                <div onClick={this.onNavDrawerClick}>
                    <IgrNavDrawer open={true} ref={this.navDrawerRef}>
                        <IgrNavDrawerHeaderItem>
                            <span>Sample Drawer</span>
                        </IgrNavDrawerHeaderItem>

                        <IgrNavDrawerItem>
                            <div slot="icon">
                                <IgrIcon name="home" collection="material" />
                            </div>
                            <span slot="content">Home</span>
                        </IgrNavDrawerItem>

                        <IgrNavDrawerItem>
                            <div slot="icon">
                                <IgrIcon name="search" collection="material" />
                            </div>
                            <span slot="content">Search</span>
                        </IgrNavDrawerItem>
                    </IgrNavDrawer>
                </div>
            </div>
        );
    }

    public navDrawerRef(navDrawer: IgrNavDrawer) {
        if (!navDrawer) { return; }
        this.navDrawer = navDrawer;
    }

    public toggleDrawer() {
        if (this.navDrawer) {
            this.navDrawer.toggle();
        }
    }

    public onNavDrawerClick(e: any) {
        const drawerItem: any = e.target.closest('igc-nav-drawer-item') ??
            (e.target.parentElement?.closest('igc-nav-drawer-item') ??
                null)

        if (!drawerItem) { return; }

        drawerItem.active = true;
        const navDrawer = drawerItem.parentElement;
        Array.from(navDrawer.querySelectorAll('igc-nav-drawer-item'))
            .filter((item: any) => item !== drawerItem)
            .forEach((child: any) => child.active = false);
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NavDrawerAddDrawerItems />);
```

## Usage

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrNavDrawer`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavdrawer.html), its necessary CSS, and register its module, like so:

```tsx
import { IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

Before using the [`IgrNavDrawer`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavdrawer.html), you need to register it as follows:

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

## Adding Navigation Drawer Items

The simplest way to start using the [`IgrNavDrawer`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavdrawer.html) is as follows:

```tsx
<IgrNavDrawer open={true}>
    <IgrNavDrawerHeaderItem>
        <span>Sample Drawer</span>
    </IgrNavDrawerHeaderItem>
    <IgrNavDrawerItem>
        <div slot="icon">
            <IgrIcon name="home" collection="material" />
        </div>
        <span slot="content">Home</span>
    </IgrNavDrawerItem>
    <IgrNavDrawerItem>
        <div slot="icon">
            <IgrIcon name="search" collection="material" />
        </div>
        <span slot="content">Search</span>
    </IgrNavDrawerItem>
</IgrNavDrawer>
```

If all went well, you should see the following in your browser:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem, IgrIcon, IgrIconButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const menuIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>';

export default class NavDrawerAddDrawerItems extends React.Component<any, any> {
    private navDrawer: IgrNavDrawer;

    constructor(props: any) {
        super(props);
        this.onNavDrawerClick = this.onNavDrawerClick.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.navDrawerRef = this.navDrawerRef.bind(this);

        registerIconFromText("home", homeIcon, "material");
        registerIconFromText("search", searchIcon, "material");
        registerIconFromText("menu", menuIcon, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrIconButton style={{ margin: "10px" }}
                    onClick={this.toggleDrawer}
                    name="menu"
                    collection="material"
                    variant="flat">
                </IgrIconButton>
                <div onClick={this.onNavDrawerClick}>
                    <IgrNavDrawer open={true} ref={this.navDrawerRef}>
                        <IgrNavDrawerHeaderItem>
                            <span>Sample Drawer</span>
                        </IgrNavDrawerHeaderItem>

                        <IgrNavDrawerItem>
                            <div slot="icon">
                                <IgrIcon name="home" collection="material" />
                            </div>
                            <span slot="content">Home</span>
                        </IgrNavDrawerItem>

                        <IgrNavDrawerItem>
                            <div slot="icon">
                                <IgrIcon name="search" collection="material" />
                            </div>
                            <span slot="content">Search</span>
                        </IgrNavDrawerItem>
                    </IgrNavDrawer>
                </div>
            </div>
        );
    }

    public navDrawerRef(navDrawer: IgrNavDrawer) {
        if (!navDrawer) { return; }
        this.navDrawer = navDrawer;
    }

    public toggleDrawer() {
        if (this.navDrawer) {
            this.navDrawer.toggle();
        }
    }

    public onNavDrawerClick(e: any) {
        const drawerItem: any = e.target.closest('igc-nav-drawer-item') ??
            (e.target.parentElement?.closest('igc-nav-drawer-item') ??
                null)

        if (!drawerItem) { return; }

        drawerItem.active = true;
        const navDrawer = drawerItem.parentElement;
        Array.from(navDrawer.querySelectorAll('igc-nav-drawer-item'))
            .filter((item: any) => item !== drawerItem)
            .forEach((child: any) => child.active = false);
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NavDrawerAddDrawerItems />);
```

## Navbar Integration

While any content can be provided in the drawer, the [`IgrNavDrawerItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavdraweritem.html) is available to apply out-of-the-box styling to the items.

To enhance our component a bit, we can use it in conjunction with the [`IgrNavbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavbar.html). This way we can achieve a more completed look and use the drawer's methods. Let's look at how we can use this in the next example:

```tsx
<IgrNavbar>
    <div slot="start">
        <IgrIcon name="menu" collection="material"/>
    </div>
    <h2>Home</h2>
</IgrNavbar>

<IgrNavDrawer>
    <IgrNavDrawerHeaderItem>
        <span>Sample Drawer</span>
    </IgrNavDrawerHeaderItem>
    <IgrNavDrawerItem>
        <div slot="icon">
            <IgrIcon name="home" collection="material" />
        </div>
        <span slot="content">Home</span>
    </IgrNavDrawerItem>
    <IgrNavDrawerItem>
        <div slot="icon">
            <IgrIcon name="search" collection="material" />
        </div>
        <span slot="content">Search</span>
    </IgrNavDrawerItem>
</IgrNavDrawer>
```

Let's also add some radio buttons to display all `position` values. This way whenever one gets selected, we will change the position of the drawer.

```tsx
<IgrRadioGroup alignment="horizontal">
    <IgrRadio value="start" labelPosition="after" checked={this.state.drawerPosition === "start"} onChange={this.onRadioChange}>
        <span>Start</span>
    </IgrRadio>
    <IgrRadio value="end" labelPosition="after" checked={this.state.drawerPosition === "end"} onChange={this.onRadioChange}>
        <span>End</span>
    </IgrRadio>
    <IgrRadio value="top" labelPosition="after" checked={this.state.drawerPosition === "top"} onChange={this.onRadioChange}>
        <span>Top</span>
    </IgrRadio>
    <IgrRadio value="bottom" labelPosition="after" checked={this.state.drawerPosition === "bottom"} onChange={this.onRadioChange}>
        <span>Bottom</span>
    </IgrRadio>
</IgrRadioGroup>

<IgrNavDrawer position={this.state.drawerPosition} />

public onRadioChange(e: IgrRadioChangeEventArgs) {
    if (e.checked == true) {
        this.setState({ drawerPosition: e.detail.value });
    }
}
```

And finally, we need a way to open and close our navigation drawer. There are a couple of ways to achieve this, but for the sake of this example we will do the following:

```tsx
public onMenuIconClick() {
    if (this.navDrawerRef) {
        this.navDrawerRef.show();
    }
}
```

If all goes well, your component should now look like this:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrNavbar, IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem, IgrIcon, IgrRadioGroup, IgrRadio, registerIconFromText, IgrRadioChangeEventArgs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const menuIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>';

export default class NavDrawerAddPositionsNavbar extends React.Component<any, any> {

    public navDrawer: IgrNavDrawer;

    constructor(props: any) {
        super(props);

        this.state = { drawerPosition: "start", title: "Home" };

        registerIconFromText("home", homeIcon, "material");
        registerIconFromText("search", searchIcon, "material");
        registerIconFromText("menu", menuIcon, "material");

        this.navDrawerRef = this.navDrawerRef.bind(this);
        this.onMenuIconClick = this.onMenuIconClick.bind(this);
        this.onNavDrawerClick = this.onNavDrawerClick.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div onClick={this.onNavDrawerClick}>
                    <IgrNavDrawer ref={this.navDrawerRef} position={this.state.drawerPosition}>
                        <IgrNavDrawerHeaderItem>
                            <span>Sample Drawer</span>
                        </IgrNavDrawerHeaderItem>

                        <IgrNavDrawerItem>
                            <div slot="icon">
                                <IgrIcon name="home" collection="material" />
                            </div>
                            <span slot="content">Home</span>
                        </IgrNavDrawerItem>

                        <IgrNavDrawerItem>
                            <div slot="icon">
                                <IgrIcon name="search" collection="material" />
                            </div>
                            <span slot="content">Search</span>
                        </IgrNavDrawerItem>
                    </IgrNavDrawer>
                </div>
                <div>
                    <IgrRadioGroup alignment="horizontal" style={{ marginBottom: '10px' }}>
                        <IgrRadio name="position" value="start" labelPosition="after" checked={this.state.drawerPosition === "start"} onChange={this.onRadioChange}>
                            <span>Start</span>
                        </IgrRadio>
                        <IgrRadio name="position" value="end" labelPosition="after" checked={this.state.drawerPosition === "end"} onChange={this.onRadioChange}>
                            <span>End</span>
                        </IgrRadio>
                        <IgrRadio name="position" value="top" labelPosition="after" checked={this.state.drawerPosition === "top"} onChange={this.onRadioChange}>
                            <span>Top</span>
                        </IgrRadio>
                        <IgrRadio name="position" value="bottom" labelPosition="after" checked={this.state.drawerPosition === "bottom"} onChange={this.onRadioChange}>
                            <span>Bottom</span>
                        </IgrRadio>
                    </IgrRadioGroup>
                    <IgrNavbar>
                        <div slot="start" onClick={this.onMenuIconClick}>
                            <IgrIcon name="menu" collection="material" />
                        </div>
                        <h2>{this.state.title}</h2>
                    </IgrNavbar>
                </div>
            </div>
        );
    }

    public onMenuIconClick() {
        if (this.navDrawer) {
            this.navDrawer.show();
        }
    }

    public onNavDrawerClick(e: any) {
        const drawerItem: any = e.target.closest('igc-nav-drawer-item') ??
            (e.target.parentElement?.closest('igc-nav-drawer-item') ??
                null)

        if (!drawerItem) { return; }

        drawerItem.active = true;
        const navDrawer = drawerItem.parentElement;
        Array.from(navDrawer.querySelectorAll('igc-nav-drawer-item'))
            .filter((item: any) => item !== drawerItem)
            .forEach((child: any) => child.active = false);

        this.setState({ title: drawerItem.textContent });
    }

    public navDrawerRef(navDrawer: IgrNavDrawer) {
        if (!navDrawer) { return; }
        this.navDrawer = navDrawer;
    }

    public onRadioChange(e: IgrRadioChangeEventArgs) {
        if (e.detail.checked) {
            this.setState({ drawerPosition: e.detail.value });
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NavDrawerAddPositionsNavbar />);
```

## Mini Variant

With the mini variant, the Navigation Drawer changes its width instead of closing. It is used to maintain quick navigation, available at all times, leaving just the icons. To achieve that, you only need to set up the `mini` slot of the drawer.

```tsx
<IgrNavDrawer>
    <IgrNavDrawerItem>
        <div slot="icon">
            <IgrIcon name="home" collection="material" />
        </div>
        <span slot="content">Home</span>
    </IgrNavDrawerItem>
    <IgrNavDrawerItem>
        <div slot="icon">
            <IgrIcon name="search" collection="material"/>
        </div>
        <span slot="content">Search</span>
    </IgrNavDrawerItem>
    <div slot="mini">
        <IgrNavDrawerItem>
            <div slot="icon">
                <IgrIcon name="home" collection="material"/>
            </div>
        </IgrNavDrawerItem>
        <IgrNavDrawerItem>
            <div slot="icon">
                <IgrIcon name="search" collection="material" />
            </div>
        </IgrNavDrawerItem>
    </div>
</IgrNavDrawer>

<IgrButton clicked={this.onButtonClick}>
    <span>Toggle</span>
</IgrButton>
```

And here's the result:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrNavDrawer, IgrNavDrawerItem, IgrIcon, IgrButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

export default class NavDrawerAddMini extends React.Component<any, any> {
    public navDrawer: IgrNavDrawer;

    constructor(props: any) {
        super(props);
        this.onNavDrawerClick = this.onNavDrawerClick.bind(this);
        this.navDrawerRef = this.navDrawerRef.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);

        registerIconFromText("home", homeIcon, "material");
        registerIconFromText("search", searchIcon, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div style={{ width: '100%' }}>
                    <IgrButton onClick={this.onButtonClick} style={{ marginLeft: '70px' }}>
                        <span>Toggle</span>
                    </IgrButton>
                </div>
                <div onClick={this.onNavDrawerClick}>
                    <IgrNavDrawer ref={this.navDrawerRef}>
                        <IgrNavDrawerItem >
                            <div slot="icon">
                                <IgrIcon name="home" collection="material" />
                            </div>
                            <span slot="content">Home</span>
                        </IgrNavDrawerItem>

                        <IgrNavDrawerItem>
                            <div slot="icon">
                                <IgrIcon name="search" collection="material" />
                            </div>
                            <span slot="content">Search</span>
                        </IgrNavDrawerItem>

                        <div slot="mini">
                            <IgrNavDrawerItem>
                                <div slot="icon">
                                    <IgrIcon name="home" collection="material" />
                                </div>
                            </IgrNavDrawerItem>

                            <IgrNavDrawerItem>
                                <div slot="icon">
                                    <IgrIcon name="search" collection="material" />
                                </div>
                            </IgrNavDrawerItem>
                        </div>
                    </IgrNavDrawer>
                </div>
            </div>
        );
    }

    public navDrawerRef(navDrawer: IgrNavDrawer) {
        if (!navDrawer) { return; }
        this.navDrawer = navDrawer;
    }

    public onNavDrawerClick(e: any) {
        const drawerItem: any = e.target.closest('igc-nav-drawer-item') ??
            (e.target.parentElement?.closest('igc-nav-drawer-item') ??
                null)

        if (!drawerItem) { return; }

        drawerItem.active = true;
        const navDrawer = drawerItem.parentElement;
        Array.from(navDrawer.querySelectorAll('igc-nav-drawer-item'))
            .filter((item: any) => item !== drawerItem)
            .forEach((child: any) => child.active = false);

        const iconName = drawerItem.querySelector('igc-icon')!.name;
        const icons = document.querySelectorAll(`igc-icon`);

        icons.forEach((icon: any) => {
            const parentItem = icon.parentElement!.closest('igc-nav-drawer-item') as IgrNavDrawerItem;
            if (!parentItem) { return; }

            if (icon.name === iconName) {
                parentItem.active = true;
            } else {
                parentItem.active = false;
            }
        });
    }

    public onButtonClick() {
        if (this.navDrawer) {
            this.navDrawer.toggle();
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NavDrawerAddMini />);
```

## Styling

The [`IgrNavDrawer`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavdrawer.html) exposes several CSS parts - `base`, `main`, and `mini`, giving you full control over their styling.

```scss
igc-nav-drawer::part(base) {
  background: var(--ig-secondary-500);
}

igc-nav-drawer-item::part(base) {
  color: var(--ig-secondary-500-contrast);
}

igc-nav-drawer-item::part(base):hover {
  background-color: var(--ig-gray-800);
}

igc-nav-drawer-item[active]::part(base) {
  background: var(--ig-warn-500);
  color: var(--ig-warn-500-contrast);
}

igc-nav-drawer-header-item {
  color: var(--ig-warn-500);
}
```

```css
igc-nav-drawer::part(base) {
    background: #2d313a;
}

igc-nav-drawer-item::part(base) {
    color: #fff;
}

igc-nav-drawer-item::part(base):hover {
    background-color: #3D4149;
}

igc-nav-drawer-item[active]::part(base) {
    background: #f3c03e;
    color: #2c2c2c
}

igc-nav-drawer-header-item {
    color: #f3c03e
}

igc-icon-button::part(base) {
    background: #2d313a;
}

igc-icon-button::part(icon) {
    color: #f3c03e
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './NavDrawerStyling.css';
import { IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem, IgrIcon, IgrIconButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const menuIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>';

export default class NavDrawerStyling extends React.Component<any, any> {
    private navDrawer: IgrNavDrawer;

    constructor(props: any) {
        super(props);
        this.onNavDrawerClick = this.onNavDrawerClick.bind(this);
        this.navDrawerRef = this.navDrawerRef.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);

        registerIconFromText("home", homeIcon, "material");
        registerIconFromText("search", searchIcon, "material");
        registerIconFromText("menu", menuIcon, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrIconButton style={{ margin: "10px" }}
                    onClick={this.toggleDrawer}
                    name="menu"
                    collection="material"
                    variant="flat">
                </IgrIconButton>
                <div onClick={this.onNavDrawerClick}>
                    <IgrNavDrawer open={true} ref={this.navDrawerRef}>
                        <IgrNavDrawerHeaderItem>
                            <span>Sample Drawer</span>
                        </IgrNavDrawerHeaderItem>

                        <IgrNavDrawerItem>
                            <div slot="icon">
                                <IgrIcon name="home" collection="material" />
                            </div>
                            <span slot="content">Home</span>
                        </IgrNavDrawerItem>

                        <IgrNavDrawerItem>
                            <div slot="icon">
                                <IgrIcon name="search" collection="material" />
                            </div>
                            <span slot="content">Search</span>
                        </IgrNavDrawerItem>
                    </IgrNavDrawer>
                </div>
            </div>
        );
    }

    public toggleDrawer() {
        if (this.navDrawer) {
            this.navDrawer.toggle();
        }
    }

    public onNavDrawerClick(e: any) {
        const drawerItem: any = e.target.closest('igc-nav-drawer-item') ??
            (e.target.parentElement?.closest('igc-nav-drawer-item') ??
                null)

        if (!drawerItem) { return; }

        drawerItem.active = true;
        const navDrawer = drawerItem.parentElement;
        Array.from(navDrawer.querySelectorAll('igc-nav-drawer-item'))
            .filter((item: any) => item !== drawerItem)
            .forEach((child: any) => child.active = false);
    }

    public navDrawerRef(navDrawer: IgrNavDrawer) {
        if (!navDrawer) { return; }
        this.navDrawer = navDrawer;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NavDrawerStyling />);
```

## API References

- [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html)
- [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html)
- [`IgrNavDrawerHeaderItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavdrawerheaderitem.html)
- [`IgrNavDrawerItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavdraweritem.html)
- [`IgrNavDrawer`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavdrawer.html)
- [`IgrNavbar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrnavbar.html)
- [`IgrRadioGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradiogroup.html)
- [`IgrRadio`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradio.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

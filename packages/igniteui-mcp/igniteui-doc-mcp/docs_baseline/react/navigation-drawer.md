---
title: "React NavDrawer | Infragistics"
description: Infragistics' React NavDrawer provides side navigation that can be expanded or collapsed within the content
keywords: "React navbar, Ignite UI for React, Infragistics"
license: MIT
mentionedTypes: ["NavDrawer"]
llms:
  description: "The Ignite UI for React Navigation Drawer provides side navigation that can be expanded or collapsed within the content."
_tocName: Navigation Drawer
---
# React Navigation Drawer Overview

The Ignite UI for React Navigation Drawer provides side navigation that can be expanded or collapsed within the content. A mini version provides quick access to navigation even when closed. Its content is completely customizable while also providing default menu item styling.

## React Navigation Drawer Example

This sample demonstrates how to create [`IgrNavDrawer`](mcp:get_api_reference?platform=react&component=IgrNavDrawer) component.

```tsx
import { useRef, type MouseEvent } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem, IgrIcon, IgrIconButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const menuIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>';

registerIconFromText("home", homeIcon, "material");
registerIconFromText("search", searchIcon, "material");
registerIconFromText("menu", menuIcon, "material");

export default function NavDrawerAddDrawerItems() {
    const navDrawer = useRef<IgrNavDrawer>(null);

    function toggleDrawer() {
        navDrawer.current?.toggle();
    }

    // Mark the clicked item active and its siblings inactive
    function onNavDrawerClick(e: MouseEvent<HTMLDivElement>) {
        const drawerItem = (e.target as Element).closest<IgrNavDrawerItem>('igc-nav-drawer-item');
        if (!drawerItem) { return; }

        drawerItem.active = true;
        const parent = drawerItem.parentElement!;
        Array.from(parent.querySelectorAll<IgrNavDrawerItem>('igc-nav-drawer-item'))
            .filter(item => item !== drawerItem)
            .forEach(child => child.active = false);
    }

    return (
        <div className="container sample">
            <IgrIconButton style={{ margin: "10px" }}
                onClick={toggleDrawer}
                name="menu"
                collection="material"
                variant="flat">
            </IgrIconButton>
            <div onClick={onNavDrawerClick}>
                <IgrNavDrawer open={true} ref={navDrawer}>
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

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<NavDrawerAddDrawerItems/>);
```

## Usage

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrNavDrawer`](mcp:get_api_reference?platform=react&component=IgrNavDrawer), its necessary CSS, and register its module, like so:

```tsx
import { IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

## Adding Navigation Drawer Items

The simplest way to start using the [`IgrNavDrawer`](mcp:get_api_reference?platform=react&component=IgrNavDrawer) is as follows:

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
import { useRef, type MouseEvent } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem, IgrIcon, IgrIconButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const menuIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>';

registerIconFromText("home", homeIcon, "material");
registerIconFromText("search", searchIcon, "material");
registerIconFromText("menu", menuIcon, "material");

export default function NavDrawerAddDrawerItems() {
    const navDrawer = useRef<IgrNavDrawer>(null);

    function toggleDrawer() {
        navDrawer.current?.toggle();
    }

    // Mark the clicked item active and its siblings inactive
    function onNavDrawerClick(e: MouseEvent<HTMLDivElement>) {
        const drawerItem = (e.target as Element).closest<IgrNavDrawerItem>('igc-nav-drawer-item');
        if (!drawerItem) { return; }

        drawerItem.active = true;
        const parent = drawerItem.parentElement!;
        Array.from(parent.querySelectorAll<IgrNavDrawerItem>('igc-nav-drawer-item'))
            .filter(item => item !== drawerItem)
            .forEach(child => child.active = false);
    }

    return (
        <div className="container sample">
            <IgrIconButton style={{ margin: "10px" }}
                onClick={toggleDrawer}
                name="menu"
                collection="material"
                variant="flat">
            </IgrIconButton>
            <div onClick={onNavDrawerClick}>
                <IgrNavDrawer open={true} ref={navDrawer}>
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

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<NavDrawerAddDrawerItems/>);
```

## Navbar Integration

While any content can be provided in the drawer, the [`IgrNavDrawerItem`](mcp:get_api_reference?platform=react&component=IgrNavDrawerItem) is available to apply out-of-the-box styling to the items.

To enhance our component a bit, we can use it in conjunction with the [`IgrNavbar`](mcp:get_api_reference?platform=react&component=IgrNavbar). This way we can achieve a more completed look and use the drawer's methods. Let's look at how we can use this in the next example:

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

Let's also add some radio buttons to display all [`position`](mcp:get_api_reference?platform=react&component=IgrNavDrawer&member=position) values. This way whenever one gets selected, we will change the position of the drawer.

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
import { useRef, useState, type MouseEvent } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrNavbar, IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem, IgrIcon, IgrRadioGroup, IgrRadio, registerIconFromText, IgrRadioChangeEventArgs, type NavDrawerPosition } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const menuIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>';

registerIconFromText("home", homeIcon, "material");
registerIconFromText("search", searchIcon, "material");
registerIconFromText("menu", menuIcon, "material");

export default function NavDrawerAddPositionsNavbar() {
    const navDrawer = useRef<IgrNavDrawer>(null);
    const [drawerPosition, setDrawerPosition] = useState<NavDrawerPosition>("start");
    const [title, setTitle] = useState<string | null>("Home");

    function onMenuIconClick() {
        navDrawer.current?.show();
    }

    // Mark the clicked item active and its siblings inactive
    function onNavDrawerClick(e: MouseEvent<HTMLDivElement>) {
        const drawerItem = (e.target as Element).closest<IgrNavDrawerItem>('igc-nav-drawer-item');
        if (!drawerItem) { return; }

        drawerItem.active = true;
        const parent = drawerItem.parentElement!;
        Array.from(parent.querySelectorAll<IgrNavDrawerItem>('igc-nav-drawer-item'))
            .filter(item => item !== drawerItem)
            .forEach(child => child.active = false);

        setTitle(drawerItem.textContent);
    }

    function onRadioChange(e: IgrRadioChangeEventArgs) {
        if (e.detail.checked) {
            setDrawerPosition(e.detail.value as NavDrawerPosition);
        }
    }

    return (
        <div className="container sample">
            <div onClick={onNavDrawerClick}>
                <IgrNavDrawer ref={navDrawer} position={drawerPosition}>
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
                    <IgrRadio name="position" value="start" labelPosition="after" checked={drawerPosition === "start"} onChange={onRadioChange}>
                        <span>Start</span>
                    </IgrRadio>
                    <IgrRadio name="position" value="end" labelPosition="after" checked={drawerPosition === "end"} onChange={onRadioChange}>
                        <span>End</span>
                    </IgrRadio>
                    <IgrRadio name="position" value="top" labelPosition="after" checked={drawerPosition === "top"} onChange={onRadioChange}>
                        <span>Top</span>
                    </IgrRadio>
                    <IgrRadio name="position" value="bottom" labelPosition="after" checked={drawerPosition === "bottom"} onChange={onRadioChange}>
                        <span>Bottom</span>
                    </IgrRadio>
                </IgrRadioGroup>
                <IgrNavbar>
                    <div slot="start" onClick={onMenuIconClick}>
                        <IgrIcon name="menu" collection="material" />
                    </div>
                    <h2>{title}</h2>
                </IgrNavbar>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<NavDrawerAddPositionsNavbar/>);
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
import { useRef, type MouseEvent } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrNavDrawer, IgrNavDrawerItem, IgrIcon, IgrButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

registerIconFromText("home", homeIcon, "material");
registerIconFromText("search", searchIcon, "material");

export default function NavDrawerAddMini() {
    const navDrawer = useRef<IgrNavDrawer>(null);

    // Mark the clicked item active and its siblings inactive
    function onNavDrawerClick(e: MouseEvent<HTMLDivElement>) {
        const drawerItem = (e.target as Element).closest<IgrNavDrawerItem>('igc-nav-drawer-item');
        if (!drawerItem) { return; }

        drawerItem.active = true;
        const parent = drawerItem.parentElement!;
        Array.from(parent.querySelectorAll<IgrNavDrawerItem>('igc-nav-drawer-item'))
            .filter(item => item !== drawerItem)
            .forEach(child => child.active = false);

        // Sync the matching item in the other variant (main <-> mini)
        const iconName = drawerItem.querySelector<IgrIcon>('igc-icon')!.name;
        const icons = document.querySelectorAll<IgrIcon>('igc-icon');

        icons.forEach(icon => {
            const parentItem = icon.parentElement!.closest<IgrNavDrawerItem>('igc-nav-drawer-item');
            if (!parentItem) { return; }

            parentItem.active = icon.name === iconName;
        });
    }

    function onButtonClick() {
        navDrawer.current?.toggle();
    }

    return (
        <div className="container sample">
            <div style={{ width: '100%' }}>
                <IgrButton onClick={onButtonClick} style={{ marginLeft: '70px' }}>
                    <span>Toggle</span>
                </IgrButton>
            </div>
            <div onClick={onNavDrawerClick}>
                <IgrNavDrawer ref={navDrawer}>
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

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<NavDrawerAddMini/>);
```

## Styling

The [`IgrNavDrawer`](mcp:get_api_reference?platform=react&component=IgrNavDrawer) exposes several CSS parts - `base`, `main`, and `mini`, giving you full control over their styling.

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
import { useRef, type MouseEvent } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './NavDrawerStyling.css';
import { IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem, IgrIcon, IgrIconButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const menuIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>';

registerIconFromText("home", homeIcon, "material");
registerIconFromText("search", searchIcon, "material");
registerIconFromText("menu", menuIcon, "material");

export default function NavDrawerStyling() {
    const navDrawer = useRef<IgrNavDrawer>(null);

    function toggleDrawer() {
        navDrawer.current?.toggle();
    }

    // Mark the clicked item active and its siblings inactive
    function onNavDrawerClick(e: MouseEvent<HTMLDivElement>) {
        const drawerItem = (e.target as Element).closest<IgrNavDrawerItem>('igc-nav-drawer-item');
        if (!drawerItem) { return; }

        drawerItem.active = true;
        const parent = drawerItem.parentElement!;
        Array.from(parent.querySelectorAll<IgrNavDrawerItem>('igc-nav-drawer-item'))
            .filter(item => item !== drawerItem)
            .forEach(child => child.active = false);
    }

    return (
        <div className="container sample">
            <IgrIconButton style={{ margin: "10px" }}
                onClick={toggleDrawer}
                name="menu"
                collection="material"
                variant="flat">
            </IgrIconButton>
            <div onClick={onNavDrawerClick}>
                <IgrNavDrawer open={true} ref={navDrawer}>
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

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<NavDrawerStyling/>);
```

## API References

[`IgrButton`](mcp:get_api_reference?platform=react&component=IgrButton)<br />
[`IgrIcon`](mcp:get_api_reference?platform=react&component=IgrIcon)<br />
[`IgrNavDrawerHeaderItem`](mcp:get_api_reference?platform=react&component=IgrNavDrawerHeaderItem)<br />
[`IgrNavDrawerItem`](mcp:get_api_reference?platform=react&component=IgrNavDrawerItem)<br />
[`IgrNavDrawer`](mcp:get_api_reference?platform=react&component=IgrNavDrawer)<br />
[`IgrNavbar`](mcp:get_api_reference?platform=react&component=IgrNavbar)<br />
[`IgrRadioGroup`](mcp:get_api_reference?platform=react&component=IgrRadioGroup)<br />
[`IgrRadio`](mcp:get_api_reference?platform=react&component=IgrRadio)<br />

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

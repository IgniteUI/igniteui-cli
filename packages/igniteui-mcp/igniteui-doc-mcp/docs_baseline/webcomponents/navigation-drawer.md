---
title: Web Components NavDrawer | Infragistics
_description: Infragistics' Web Components NavDrawer provides side navigation that can be expanded or collapsed within the content
_keywords: Web Components navbar, Ignite UI for Web Components, Infragistics
_license: MIT
mentionedTypes: ["NavDrawer"]
_tocName: Navigation Drawer
---

# Web Components Navigation Drawer Overview

The Ignite UI for Web Components Navigation Drawer provides side navigation that can be expanded or collapsed within the content. A mini version provides quick access to navigation even when closed. Its content is completely customizable while also providing default menu item styling.

## Web Components Navigation Drawer Example

This sample demonstrates how to create [`IgcNavDrawerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdrawercomponent.html) component.

```css
#button-wrapper{
    padding: 16px;
}

igc-icon-button::part(icon) {
    --size: 32px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Usage

<!-- WebComponents -->

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

```ts
import { defineComponents, IgcNavDrawerComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavDrawerComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

## Adding Navigation Drawer Items

The simplest way to start using the [`IgcNavDrawerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdrawercomponent.html) is as follows:

```html
<igc-nav-drawer open="true">
    <igc-nav-drawer-header-item>
        Sample Drawer
    </igc-nav-drawer-header-item>
    <igc-nav-drawer-item>
        <igc-icon slot="icon" name="home"></igc-icon>
        <span slot="content">Home</span>
    </igc-nav-drawer-item>
    <igc-nav-drawer-item>
        <igc-icon slot="icon" name="search"></igc-icon>
        <span slot="content">Search</span>
    </igc-nav-drawer-item>
</igc-nav-drawer>
```

If all went well, you should see the following in your browser:

```css
#button-wrapper{
    padding: 16px;
}

igc-icon-button::part(icon) {
    --size: 32px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Navbar Integration

While any content can be provided in the drawer, the [`IgcNavDrawerItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdraweritemcomponent.html) is available to apply out-of-the-box styling to the items.

To enhance our component a bit, we can use it in conjunction with the [`IgcNavbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavbarcomponent.html). This way we can achieve a more completed look and use the drawer's methods. Let's look at how we can use this in the next example:

```html
<igc-navbar>
  <igc-icon slot="start" name="menu" id="menu"></igc-icon>
  <h2>Home</h2>
</igc-navbar>

<igc-nav-drawer id="navDrawer">
    <igc-nav-drawer-header-item>
        Sample Drawer
    </igc-nav-drawer-header-item>
    <igc-nav-drawer-item>
        <igc-icon slot="icon" name="home"></igc-icon>
        <span slot="content">Home</span>
    </igc-nav-drawer-item>
    <igc-nav-drawer-item>
        <igc-icon slot="icon" name="search"></igc-icon>
        <span slot="content">Search</span>
    </igc-nav-drawer-item>
</igc-nav-drawer>
```

Let's also add some radio buttons to display all `position` values. This way whenever one gets selected, we will change the position of the drawer.

```ts
// ...
import { defineComponents, IgcNavDrawerComponent, IgcRadioComponent, IgcRadioGroupComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavDrawerComponent, IgcRadioComponent, IgcRadioGroupComponent);
this.navDrawer = document.getElementById('navDrawer') as IgcNavDrawerComponent;
this.radioGroup = document.getElementById('radio-group') as IgcRadioGroupComponent;
this.radioGroup.addEventListener('click', (radio: any) => {
    this.navDrawer.position = radio.target.value;
});
```

```html
<igc-radio-group id="radio-group" alignment="horizontal">
    <igc-radio name="position" value="start" label-position="after" checked>Start</igc-radio>
    <igc-radio name="position" value="end" label-position="after">End</igc-radio>
    <igc-radio name="position" value="top" label-position="after">Top</igc-radio>
    <igc-radio name="position" value="bottom" label-position="after">Bottom</igc-radio>
</igc-radio-group>
```

And finally, we need a way to open and close our navigation drawer. There are a couple of ways to achieve this, but for the sake of this example we will do the following:

```ts
// ...
const menu = document.getElementById('menu');
const navDrawer = document.querySelector('igc-nav-drawer') as IgcNavDrawerComponent;

menu!.addEventListener('click', () => {
    navDrawer.show();
})

document.getElementById('root')!.onclick = (e) => {
    if (e.target != document.getElementById('navDrawer')) {
        navDrawer.hide();
    }
}
```

If all goes well, your component should now look like this:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Mini Variant

With the mini variant, the Navigation Drawer changes its width instead of closing. It is used to maintain quick navigation, available at all times, leaving just the icons. To achieve that, you only need to set up the `mini` slot of the drawer.

```html
<igc-nav-drawer position="start">
    <igc-nav-drawer-header-item>Sample Drawer</igc-nav-drawer-header-item>
    <igc-nav-drawer-item>
        <igc-icon slot="icon" name="home"></igc-icon>
        <span slot="content">Home</span>
    </igc-nav-drawer-item>
    <igc-nav-drawer-item>
        <igc-icon slot="icon" name="search"></igc-icon>
        <span slot="content">Search</span>
    </igc-nav-drawer-item>
    <div slot="mini">
        <igc-nav-drawer-item>
            <igc-icon slot="icon" name="home"></igc-icon>
        </igc-nav-drawer-item>
        <igc-nav-drawer-item>
            <igc-icon slot="icon" name="search"></igc-icon>
        </igc-nav-drawer-item>
    </div>
</igc-nav-drawer>
```

And here's the result:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Styling

The [`IgcNavDrawerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdrawercomponent.html) exposes several CSS parts - `base`, `main`, and `mini`, giving you full control over their styling.

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
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```css
#button-wrapper {
  padding: 16px;
}

igc-icon-button::part(icon) {
  color: var(--ig-secondary-500);
}
```


## API References

- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html)
- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html)
- [`IgcNavDrawerHeaderItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdrawerheaderitemcomponent.html)
- [`IgcNavDrawerItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdraweritemcomponent.html)
- [`IgcNavDrawerComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavdrawercomponent.html)
- [`IgcNavbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcnavbarcomponent.html)
- [`IgcRadioGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiogroupcomponent.html)
- [`IgcRadioComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiocomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

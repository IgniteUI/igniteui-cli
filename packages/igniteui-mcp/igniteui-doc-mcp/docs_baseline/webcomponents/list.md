---
title: Web Components List Component | Infragistics
_description: Infragistics' Web Components List component helps you with presenting a group of items. Learn how Ignite UI for Web Components can help you better display your data!
_keywords: Web Components List, Item List, overview, Ignite UI for Web Components, data binding, Infragistics
_license: MIT
mentionedTypes: ["List", "ListHeader", "ListItem", "Avatar", "Button", "RadioGroup", "Radio"]
_tocName: List
---

# Web Components List Overview

The Ignite UI for Web Components List element is extremely useful when presenting a group of items. You can create a simple list of textual items, or a more complex one, containing an array of different layout elements. The [`IgcListComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclistcomponent.html) component displays rows of items and supports one or more headers as well. Each list item is completely templatable and will support any valid HTML or other components.

## Web Components List Example

The following example represents a list populated with contacts with a name and a phone number properties. The [`IgcListComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclistcomponent.html) component demonstrated below uses the [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html) and [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html) elements to enrich the user experience and expose the capabilities of setting avatar picture and buttons for text and call actions.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Usage

At its core the list web component allows you to easily display a vertical list of items.

<!-- WebComponents -->

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

```ts
import { defineComponents, IgcListComponent } from 'igniteui-webcomponents';

defineComponents(IgcListComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

### Add List Items

Now, we can add the following code to get a simple list of items:

```html
    <igc-list>
        <igc-list-header>Header</igc-list-header>
        <igc-list-item>
            <h2 slot="title">Item 1</h2>
        </igc-list-item>
        <igc-list-item>
            <h2 slot="title">Item 2</h2>
        </igc-list-item>
        <igc-list-item>
            <h2 slot="title">Item 3</h2>
        </igc-list-item>
    </igc-list>
```

If all went well, you should see the following in your browser:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


Let's up our game a bit and enhance our list items. Say we want to create a list of contacts with a name and a phone number displayed under the name. To achieve that we can use some of the slots that come with the list items as demonstrated in the next example:

```html
<igc-list>
    <igc-list-header>
        <h1>Contacts</h1>
    </igc-list-header>
    <igc-list-item>
        <h2 slot="title">Terrance Orta</h2>
        <span slot="subtitle">770-504-2217</span>
    </igc-list-item>
    <igc-list-item>
        <h2 slot="title">Richard Mahoney</h2>
        <span slot="subtitle">423-676-2869</span>
    </igc-list-item>
    <igc-list-item>
        <h2 slot="title">Donna Price</h2>
        <span slot="subtitle">859-496-2817</span>
    </igc-list-item>
</igc-list>
```

After implementing the above code, our list component should now look like the following:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Adding Avatar and Buttons

We can use some of our other components in conjunction with the [`IgcListComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclistcomponent.html) component to enrich the experience and add some functionality. We can have a nice picture avatar to the left of the name and phone values. Additionally, we can add some buttons to the right of them to allow the user to text and call contacts, so let's update our contacts list component to show the avatar and the buttons. We can do that by using some of the list item's slots.

```html
    <igc-list>
        <igc-list-header>
            <h1>Job Positions</h1>
        </igc-list-header>
        <igc-list-item>
            <igc-avatar slot="start" src="https://randomuser.me/api/portraits/men/27.jpg" shape="circle">
                AA
            </igc-avatar>
            <h2 slot="title">Terrance Orta</h2>
            <span slot="subtitle">770-504-2217</span>
            <igc-button slot="end" variant="outlined">
                Text
            </igc-button>
            <igc-button slot="end" variant="outlined">
                Call
            </igc-button>
        </igc-list-item>
        <igc-list-item>
            <igc-avatar slot="start" src="https://randomuser.me/api/portraits/men/1.jpg" shape="circle">
                AA
            </igc-avatar>
            <h2 slot="title">Richard Mahoney</h2>
            <span slot="subtitle">423-676-2869</span>
            <igc-button slot="end" variant="outlined">
                Text
            </igc-button>
            <igc-button slot="end" variant="outlined">
                Call
            </igc-button>
        </igc-list-item>
        <igc-list-item>
            <igc-avatar slot="start" src="https://randomuser.me/api/portraits/women/50.jpg" shape="circle">
                AA
            </igc-avatar>
            <h2 slot="title">Donna Price</h2>
            <span slot="subtitle">859-496-2817</span>
            <igc-button slot="end" variant="outlined">
                Text
            </igc-button>
            <igc-button slot="end" variant="outlined">
                Call
            </igc-button>
        </igc-list-item>
    </igc-list>
```

The `start` slot is meant to be used for adding some kind of media before all other content of our list items. The target element, in our case the [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html) component, will also be provided with a default position and spacing.

The `end` slot is meant to be used for list items that have some kind of action or metadata, represented, for example, by a switch, a button, a checkbox, etc. We will use [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html) components.

Let's also allow the user to change the size of the list using the `--ig-size` CSS variable. We will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size of the list.

```html
<igc-radio-group id="radio-group" alignment="horizontal">
    <igc-radio name="size" value="small" label-position="after">Small</igc-radio>
    <igc-radio name="size" value="medium" label-position="after">Medium</igc-radio>
    <igc-radio name="size" value="large" label-position="after" checked>Large</igc-radio>
</igc-radio-group>
```

```ts
this.list = document.getElementById('list') as IgcListComponent;
this.radioGroup = document.getElementById('radio-group') as IgcRadioGroupComponent;

this.radioGroup.addEventListener('click', (radio: any) => {
    this.list.style.setProperty('--ig-size', `var(--ig-size-${radio.target.value})`);
});
```

The result of implementing the above code should look like the following:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Styling

The [`IgcListComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclistcomponent.html) exposes several CSS parts, giving you full control over its style:

|Name|Description|
|--|--|
| `start` | The start container. |
| `end` | The end container. |
| `content` | The header and custom content container. |
| `header` | The title and subtitle container. |
| `title` | The title container. |
| `subtitle` | The subtitle container. |

```css
igc-list-header {
  font-size: 20px;
  font-weight: 700;
  color: var(--ig-primary-700);
}

igc-list-item::part(title) {
  font-size: 18px;
  color: var(--ig-primary-600);
}

igc-list-item::part(subtitle) {
  color: var(--ig-primary-300);
}
```

```css
igc-list-header {
  font-size: 20px;
  font-weight: 700;
  color: var(--ig-primary-700);
}

igc-list-item::part(title) {
  font-size: 18px;
  color: var(--ig-primary-600);
}

igc-list-item::part(subtitle) {
  color: var(--ig-primary-300);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


In this article we covered a lot of ground with the [`IgcListComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclistcomponent.html) component. First, we created a simple list with text items. Then, we created a list of contact items and added functionality to them by using some additional Ignite UI for Web Components components, like the [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html) and [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html). Finally, we changed the component's appearance through the exposed CSS parts.

<div class="divider--half"></div>

## API References

- [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html)
- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html)
- [`IgcRadioGroupComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiogroupcomponent.html)
- [`IgcRadioComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcradiocomponent.html)
- [`IgcListHeaderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclistheadercomponent.html)
- [`IgcListItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclistitemcomponent.html)
- [`IgcListComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igclistcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

---
title: "Web Components List Component | Infragistics"
description: Infragistics' Web Components List component helps you with presenting a group of items. Learn how Ignite UI for Web Components can help you better display your data!
keywords: "Web Components List, Item List, overview, Ignite UI for Web Components, data binding, Infragistics"
license: MIT
mentionedTypes: ["List", "ListHeader", "ListItem", "Avatar", "Button", "RadioGroup", "Radio"]
llms:
  description: "The Ignite UI for Web Components List element is extremely useful when presenting a group of items."
_tocName: List
---
# Web Components List Overview

The Ignite UI for Web Components List element is extremely useful when presenting a group of items. You can create a simple list of textual items, or a more complex one, containing an array of different layout elements. The [`IgcList`](mcp:get_api_reference?platform=webcomponents&component=IgcListComponent) component displays rows of items and supports one or more headers as well. Each list item is completely templatable and will support any valid HTML or other components.

## Web Components List Example

The following example represents a list populated with contacts with a name and a phone number properties. The [`IgcList`](mcp:get_api_reference?platform=webcomponents&component=IgcListComponent) component demonstrated below uses the [`IgcAvatar`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent) and [`IgcButton`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent) elements to enrich the user experience and expose the capabilities of setting avatar picture and buttons for text and call actions.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Usage

At its core the list web component allows you to easily display a vertical list of items.

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcList`](mcp:get_api_reference?platform=webcomponents&component=IgcListComponent), you need to register it as follows:

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
    <span slot="title">Terrance Orta</span>
    <span slot="subtitle">770-504-2217</span>
  </igc-list-item>
  <igc-list-item>
    <span slot="title">Richard Mahoney</span>
    <span slot="subtitle">423-676-2869</span>
  </igc-list-item>
  <igc-list-item>
    <span slot="title">Donna Price</span>
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

We can use some of our other components in conjunction with the [`IgcList`](mcp:get_api_reference?platform=webcomponents&component=IgcListComponent) component to enrich the experience and add some functionality. We can have a nice picture avatar to the left of the name and phone values. Additionally, we can add some buttons to the right of them to allow the user to text and call contacts, so let's update our contacts list component to show the avatar and the buttons. We can do that by using some of the list item's slots.

```html
<igc-list>
  <igc-list-header>
    <h1>Job Positions</h1>
  </igc-list-header>
  <igc-list-item>
    <igc-avatar slot="start" src="https://randomuser.me/api/portraits/men/27.jpg" shape="circle">
      AA
    </igc-avatar>
    <span slot="title">Terrance Orta</span>
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
    <span slot="title">Richard Mahoney</span>
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
    <span slot="title">Donna Price</span>
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

The `start` slot is meant to be used for adding some kind of media before all other content of our list items. The target element, in our case the [`IgcAvatar`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent) component, will also be provided with a default position and spacing.

The `end` slot is meant to be used for list items that have some kind of action or metadata, represented, for example, by a switch, a button, a checkbox, etc. We will use [`IgcButton`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent) components.

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

### Recommended Elements for Slots

When slotting content into the `title` and `subtitle` slots, we recommend using `<span>` elements rather than heading elements (`<h1>`–`<h6>`). Heading elements carry built-in styling (such as font size, line height, and margins) that can interfere with the component's intended typography and layout. Using a `<span>` provides a neutral container that inherits the component's styles cleanly.

To achieve the best results, we recommend using the [`<igc-avatar>`](../layouts/avatar.md) component for the `start` slot, which is intended for media content. For the `end` slot, which is intended to be used for actions, we recommend using components such as [`<igc-button>`](../inputs/button.md), [`<igc-switch>`](../inputs/switch.md), [`<igc-checkbox>`](../inputs/checkbox.md), etc., depending on the type of content you want to display. However, for those two slots, you can also use plain HTML elements, such as `<img>` for the `start` slot and `<button>` or another interactive element for the `end` slot, as long as they are appropriate for the content you want to display.

```html
<igc-list>
  <igc-list-header>Title</igc-list-header>
  <igc-list-item>
    <igc-avatar slot="start" src="https://randomuser.me/api/portraits/men/27.jpg"></igc-avatar>
    <span slot="title">Terrance Orta</span>
    <span slot="subtitle">770-504-2217</span>
    <igc-button slot="end" variant="outlined">Call</igc-button>
  </igc-list-item>
</igc-list>
```

## Styling

The [`IgcList`](mcp:get_api_reference?platform=webcomponents&component=IgcListComponent) exposes several CSS parts, giving you full control over its style:

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

In this article we covered a lot of ground with the [`IgcList`](mcp:get_api_reference?platform=webcomponents&component=IgcListComponent) component. First, we created a simple list with text items. Then, we created a list of contact items and added functionality to them by using some additional Ignite UI for Web Components components, like the [`IgcAvatar`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent) and [`IgcButton`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent). Finally, we changed the component's appearance through the exposed CSS parts.

## API References

[`IgcAvatar`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent)<br />
[`IgcButton`](mcp:get_api_reference?platform=webcomponents&component=IgcButtonComponent)<br />
[`IgcRadioGroup`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioGroupComponent)<br />
[`IgcRadio`](mcp:get_api_reference?platform=webcomponents&component=IgcRadioComponent)<br />
[`IgcListHeader`](mcp:get_api_reference?platform=webcomponents&component=IgcListHeaderComponent)<br />
[`IgcListItem`](mcp:get_api_reference?platform=webcomponents&component=IgcListItemComponent)<br />
[`IgcList`](mcp:get_api_reference?platform=webcomponents&component=IgcListComponent)<br />

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

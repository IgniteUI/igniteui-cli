---
title: Card Component
_description: Present users with dashboards and engaging text, images, icons or buttons as an entry point for detailed information with Ignite UI for Web Card component.
_keywords: Ignite UI for Web Components, UI controls, Web widgets, web widgets, UI widgets, Native Web Components Suite, Native Web Controls, Native Web Components Library, Web Card component, Web Card controls
_license: MIT
mentionedTypes: ["Card", "CardActions", "CardContent", "CardHeader", "CardMedia", "Avatar", "Button", "Icon", "IconButton", "Ripple"]
_tocName: Card
---

# Web Components Card Overview

The Ignite UI for Web Components Card displays text, images, icons, and buttons in a visually rich presentation that can serve as an entry point to more detailed information. Cards can be used to create a multimedia dashboard.

## Web Components Card Example

```css
.card-wrapper {
    max-width: 320px;
    min-width: 220px;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Usage

Cards allow you to easily display content composed of different types of objects or similar objects whose size and supported actions can vary.

### Getting Started

<!-- WebComponents -->

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

```ts
import { defineComponents, IgcCardComponent } from 'igniteui-webcomponents';

defineComponents(IgcCardComponent );
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

Then, to represent the demo card template, we can add the following code:

```html
<igc-card>
    <igc-card-media>
        <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50">
    </igc-card-media>

    <igc-card-header>
        <h3 slot="title">New York</h3>
        <h5 slot="subtitle">City in New York</h5>
    </igc-card-header>

    <igc-card-content>
        <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.</p>
    </igc-card-content>

    <igc-card-actions>
        <igc-button slot="start">
            <igc-ripple></igc-ripple>
            Read more
        </igc-button>
        <div slot="end">
            <igc-icon-button name="twitter" style="margin-right: 10px;">
                <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button name="facebook">
                <igc-ripple></igc-ripple>
            </igc-icon-button>
        </div>
    </igc-card-actions>
</igc-card>
```

You will notice a few things above. First, when we want to *tag* an element as a header title, like the `h3` heading, we place it between the [`IgcCardHeaderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardheadercomponent.html) tags and set its slot name to `title`. Conversely, if we wanted to make another heading element a `subtitle` we would name its slot `subtitle`.

Any image or video we want to show in the card, we wrap inside the [`IgcCardMediaComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardmediacomponent.html) tags. The [`IgcCardMediaComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardmediacomponent.html) allows us to size the content placed inside so that it maintains its aspect ratio while filling the element’s entire content box. If the object's aspect ratio does not match the aspect ratio of its box, then the object will be clipped to fit.

You can place anything inside the [`IgcCardContentComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardcontentcomponent.html) tags. Usually text goes there.

Finally, the [`IgcCardActionsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardactionscomponent.html) is where you'd place any actionable items, like buttons.

### Media, Thumbs, and Avatars

If you want to show an image or icon in the card header next to the title and subtitle, you can do it by assigning the element's slot property to `thumbnail`.

Taking the card above as an example, we can edit the contents of the [`IgcCardHeaderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardheadercomponent.html) and add an avatar with `slot="thumbnail"`:

```html
<igc-card-header>
    <igc-avatar slot="thumbnail" src="path/to/image" initials="TS"></igc-avatar>

    <h3 slot="title">Title</h3>
    <h5 slot="subtitle">Subtitle</h5>
</igc-card-header>
```

The above example will show the avatar alongside the title and subtitle in the card header.

### Outlined cards

The card has an `outlined` attribute which, if set, removes any shadows from the card, replacing them with a thin border to separate the card from the background.

### Horizontal Layout

By default all sections of the card (header, content, media, actions) are laid out vertically. This is nice when we have a lot of vertical space. Say we wanted to lay out the sections in the card horizontally. We can achieve such a layout with some simple CSS.

Here's an example of an outlined horizontal card:

```html
<igc-card outlined>
    <div class="card-horizontal">
        <div>
            <igc-card-header>
                <img src="ROZES-Under-the-Grave.jpg" slot="thumbnail">
                <h5 slot="title">Rozes</h5>
                <h5 slot="subtitle">Under the Grave (2016)</h5>
            </igc-card-header>
            <igc-card-content>
                <p>As I have always said: I write what’s real and what’s true,
                    even if it means throwing myself under the bus.</p>
            </igc-card-content>
        </div>
        <div class="divider"></div>
        <igc-card-actions>
            <igc-icon-button name="previous"></igc-icon-button>
            <igc-icon-button name="play"></igc-icon-button>
            <igc-icon-button name="next"></igc-icon-button>
        </igc-card-actions>
    </div>
</igc-card>
```

We are using an additional `div` element to bundle the [`IgcCardHeaderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardheadercomponent.html) and [`IgcCardContentComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardcontentcomponent.html) together, keeping them aligned vertically, and applying the `.card-horizontal` class to the wrapping `div` element to align the two sections of the card horizontally.

The styles that `.card-horizontal` class applies are:

```css
.card-horizontal {
    display: flex;
    flex-direction: row;
    flex: 1 1 0%;
}

.card-horizontal img {
    width: 64px;
    height: 64px;
}

.card-horizontal igc-card-actions {
    justify-content: center;
}
```

If everything went well, our card should look like this:

```css
.card-wrapper {
    max-width: 400px;
    min-width: 250px;
}

.card-horizontal {
    display: flex;
    flex-direction: row;
    flex: 1 1 0%;
}

.card-horizontal img {
    width: 64px;
    height: 64px;
}

.card-horizontal igc-card-actions {
    justify-content: center;
}

.divider {
    border-right: 1px solid darkgray;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Alternative layouts

You can get even more creative with the layout of the [`IgcCardComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardcomponent.html).

Below is an example showing how you can create a semi-horizontal card, where we have every section of the card laid out vertically, while the [`IgcCardMediaComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardmediacomponent.html) appears alongside the vertical sections.

```html
<igc-card>
    <div class="semi-horizontal">
        <div>
            <igc-card-header>
                <igc-avatar src="mellow_d.jpg" slot="thumbnail">MD</igc-avatar>
                <h5 slot="title">HERE</h5>
                <h5 slot="subtitle">by Mellow D</h5>
            </igc-card-header>
            <igc-card-content>
                <p>Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.</p>
            </igc-card-content>
            <igc-card-actions>
                <igc-button>play album</igc-button>
            </igc-card-actions>
        </div>
        <igc-card-media class="card-media">
            <img src="here_media.jpg">
        </igc-card-media>
    </div>
</igc-card>
```

```css
.semi-horizontal {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
}

.card-media {
    width: 96px;
    min-width: 96px;
}
```

```css
.card-wrapper {
    max-width: 400px;
    min-width: 250px;
}

.semi-horizontal {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
}

.card-media {
    width: 96px;
    min-width: 96px;
}

.divider {
    border-right: 1px solid darkgray;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Card Actions

The card actions area allows additional configuration to what we have already mentioned.

You can reverse the order of the text button and the icon buttons by switching their slot names.

```html
<igc-card-actions>
    <igc-button slot="end">
        <igc-ripple></igc-ripple>
        Read more
    </igc-button>
    <div slot="start">
        <igc-icon-button name="twitter">
            <igc-ripple></igc-ripple>
        </igc-icon-button>
        <igc-icon-button name="facebook">
            <igc-ripple></igc-ripple>
        </igc-icon-button>
    </div>
</igc-card-actions>
```

Now the icon buttons will appear before the text button.

You can also add more content in-between by simply omitting the slot property and let the elements go to the default slot.

## Styling

Since the card is a container that wraps different elements, styling is done by styling its building blocks - the [`IgcCardHeaderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardheadercomponent.html), [`IgcCardContentComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardcontentcomponent.html), [`IgcCardMediaComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardmediacomponent.html) and [`IgcCardActionsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardactionscomponent.html) sub-components.

```css
igc-card {
  background-color: var(--ig-secondary-900);
}

igc-card-content,
igc-card-header::part(title) {
  color: var(--ig-primary-500-contrast);
}

igc-card-header > *[slot="subtitle"] {
  color: var(--ig-warn-500);
  opacity: 0.9;
}

igc-icon-button::part(base) {
  background-color: var(--ig-primary-300);
}
```

```css
igc-card {
  background-color: var(--ig-secondary-900);
}

igc-card-content,
igc-card-header::part(title) { 
  color: var(--ig-primary-500-contrast);
}

igc-card-header > *[slot="subtitle"] {
  color: var(--ig-warn-500);
  opacity: 0.9;
}

igc-icon-button::part(base) {
  background-color: var(--ig-primary-300);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```css
.card-wrapper {
  max-width: 320px;
  min-width: 220px;
}

igc-icon-button+igc-icon-button {
  margin-left: 10px;
}
```


### Summary

In this article we covered a lot of ground with the card component. We created a simple card and added some images to make it a bit more appealing. We used some additional Web Components inside our card, like avatars, buttons and icons, to enrich the experience and add some functionality. And finally, we changed the card's appearance by changing the major colors of the building blocks.

<div class="divider"></div>

## API References

- [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html)
- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html)
- [`IgcCardActionsComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardactionscomponent.html)
- [`IgcCardContentComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardcontentcomponent.html)
- [`IgcCardHeaderComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardheadercomponent.html)
- [`IgcCardMediaComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardmediacomponent.html)
- [`IgcCardComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccardcomponent.html)
- [`IgcIconButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconbuttoncomponent.html)
- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

---
title: Card Component
_description: Present users with dashboards and engaging text, images, icons or buttons as an entry point for detailed information with Ignite UI for Web Card component.
_keywords: Ignite UI for React, UI controls, Web widgets, web widgets, UI widgets, Native Web Components Suite, Native Web Controls, Native Web Components Library, Web Card component, Web Card controls
_license: MIT
mentionedTypes: ["Card", "CardActions", "CardContent", "CardHeader", "CardMedia", "Avatar", "Button", "Icon", "IconButton", "Ripple"]
_tocName: Card
---

# React Card Overview

The Ignite UI for React Card displays text, images, icons, and buttons in a visually rich presentation that can serve as an entry point to more detailed information. Cards can be used to create a multimedia dashboard.

## React Card Example

```css
.card-wrapper {
    max-width: 320px;
    min-width: 220px;
}

.center {
    align-items: center;
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./CardOverview.css";
import {
  IgrCard,
  IgrCardMedia,
  IgrCardHeader,
  IgrCardContent,
  IgrCardActions,
  IgrIconButton,
  IgrButton,
  IgrRipple,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const twitterIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1.13 6v.39a8.61 8.61 0 01-13.25 7.25 5.69 5.69 0 00.72 0 6 6 0 003.76-1.3 3 3 0 01-2.83-2.1 2.75 2.75 0 00.57.05 3 3 0 00.8-.1 3 3 0 01-2.43-3 3.13 3.13 0 001.37.38 3 3 0 01-.93-4 8.57 8.57 0 006.24 3.17 3.1 3.1 0 01-.08-.74 3 3 0 015.24-2A6.38 6.38 0 0019 6.22a3.07 3.07 0 01-1.36 1.68 6.22 6.22 0 001.74-.48A6.09 6.09 0 0117.87 9z"></path></svg>';
const facebookIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22zm0-20a10 10 0 00-1.727 19.841v-7.6h-2.61v-3.018h2.61V8.995A3.641 3.641 0 0114.16 5a21.367 21.367 0 012.332.119v2.7h-1.6c-1.255 0-1.5.6-1.5 1.471v1.929h2.993L16 14.245h-2.6v7.647A9.994 9.994 0 0012 2z"></path></svg>';

export default function CardOverview() {
  useEffect(() => {
    registerIconFromText("twitter", twitterIcon, "material");
    registerIconFromText("facebook", facebookIcon, "material");
  }, []);

  return (
    <div className="container sample center">
      <div className="card-wrapper">
        <IgrCard>
          <IgrCardMedia>
            <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50"></img>
          </IgrCardMedia>
          <IgrCardHeader>
            <h3 slot="title">New York City</h3>
            <h5 slot="subtitle">City in New York</h5>
          </IgrCardHeader>
          <IgrCardContent>
            <p>
              New York City comprises 5 boroughs sitting where the Hudson River
              meets the Atlantic Ocean. At its core is Manhattan, a densely
              populated borough that’s among the world’s major commercial,
              financial and cultural centers.
            </p>
          </IgrCardContent>
          <IgrCardActions>
            <IgrButton>
              <span>Read more</span>
              <IgrRipple />
            </IgrButton>
            <div slot="end">
              <IgrIconButton
                style={{ marginRight: "10px" }}
                name="twitter"
                collection="material"
              >
                <IgrRipple />
              </IgrIconButton>
              <IgrIconButton name="facebook" collection="material">
                <IgrRipple />
              </IgrIconButton>
            </div>
          </IgrCardActions>
        </IgrCard>
      </div>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardOverview />);
```


<div class="divider--half"></div>

## Usage

Cards allow you to easily display content composed of different types of objects or similar objects whose size and supported actions can vary.

### Getting Started

<!-- React -->

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrCard`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcard.html) and its necessary CSS, like so:

```tsx
import { IgrCard, IgrCardHeader, IgrCardContent, IgrCardMedia, IgrCardActions } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

Then, to represent the demo card template, we can add the following code:

```tsx
<IgrCard>
    <IgrCardMedia>
        <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50"></img>
    </IgrCardMedia>
    <IgrCardHeader>
        <h3 slot="title">New York City</h3>
        <h5 slot="subtitle">City in New York</h5>
    </IgrCardHeader>
    <IgrCardContent>
        <p>New York City comprises 5 boroughs sitting where the
            Hudson River meets the Atlantic Ocean. At its core is Manhattan,
            a densely populated borough that’s among the world’s major commercial,
            financial and cultural centers.</p>
    </IgrCardContent>
    <IgrCardActions>
        <IgrButton>
            <span>Read more</span>
            <IgrRipple />
        </IgrButton>
        <div slot="end">
            <IgrIconButton name="twitter" collection="material">
                <IgrRipple />
            </IgrIconButton>
            <IgrIconButton name="facebook" collection="material">
                <IgrRipple />
            </IgrIconButton>
        </div>
    </IgrCardActions>
</IgrCard>
```

You will notice a few things above. First, when we want to *tag* an element as a header title, like the `h3` heading, we place it between the [`IgrCardHeader`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcardheader.html) tags and set its slot name to `title`. Conversely, if we wanted to make another heading element a `subtitle` we would name its slot `subtitle`.

Any image or video we want to show in the card, we wrap inside the [`IgrCardMedia`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcardmedia.html) tags. The [`IgrCardMedia`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcardmedia.html) allows us to size the content placed inside so that it maintains its aspect ratio while filling the element’s entire content box. If the object's aspect ratio does not match the aspect ratio of its box, then the object will be clipped to fit.

You can place anything inside the [`IgrCardContent`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcardcontent.html) tags. Usually text goes there.

Finally, the [`IgrCardActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcardactions.html) is where you'd place any actionable items, like buttons.

### Media, Thumbs, and Avatars

If you want to show an image or icon in the card header next to the title and subtitle, you can do it by assigning the element's slot property to `thumbnail`.

Taking the card above as an example, we can edit the contents of the [`IgrCardHeader`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcardheader.html) and add an avatar with `slot="thumbnail"`:

```tsx
<IgrCardHeader>
    <div slot="thumbnail">
        <IgrAvatar src="path/to/image" initials="TS" />
    </div>
    <h3 slot="title">Title</h3>
    <h5 slot="subtitle">Subtitle</h5>
</IgrCardHeader>
```

The above example will show the avatar alongside the title and subtitle in the card header.

### Outlined cards

The card has an `outlined` attribute which, if set, removes any shadows from the card, replacing them with a thin border to separate the card from the background.

### Horizontal Layout

By default all sections of the card (header, content, media, actions) are laid out vertically. This is nice when we have a lot of vertical space. Say we wanted to lay out the sections in the card horizontally. We can achieve such a layout with some simple CSS.

Here's an example of an outlined horizontal card:

```tsx
<IgrCard>
    <div className="card-horizontal">
        <div>
            <IgrCardHeader>
                <img src="https://static.infragistics.com/xplatform/images/music/rozes.jpg" slot="thumbnail"></img>
                <h5 slot="title">Rozes</h5>
                <h5 slot="subtitle">Under the Grave (2016)</h5>
            </IgrCardHeader>
            <IgrCardContent>
                <p>As I have always said: I write what’s real and what’s true,
                    even if it means throwing myself under the bus.</p>
            </IgrCardContent>
        </div>
        <div className="divider"></div>
        <IgrCardActions>
            <span className="material-icons">skip_previous</span>
            <span className="material-icons">play_arrow</span>
            <span className="material-icons">skip_next</span>
        </IgrCardActions>
    </div>
</IgrCard>
```

We are using an additional `div` element to bundle the [`IgrCardHeader`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcardheader.html) and [`IgrCardContent`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcardcontent.html) together, keeping them aligned vertically, and applying the `.card-horizontal` class to the wrapping `div` element to align the two sections of the card horizontally.

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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './CardHorizontal.css';
import { IgrCard, IgrCardHeader, IgrCardContent, IgrCardActions } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function CardHorizontal() {

    return (
        <div className="container sample">
            <div className="card-wrapper">
                <IgrCard>
                    <div className="card-horizontal">
                        <div>
                            <IgrCardHeader>
                                <img src="https://dl.infragistics.com/x/img/music/rozes.jpg" slot="thumbnail"></img>
                                <h5 slot="title">Rozes</h5>
                                <h5 slot="subtitle">Under the Grave (2016)</h5>
                            </IgrCardHeader>
                            <IgrCardContent>
                                <p>As I have always said: I write what’s real and what’s true,
                                    even if it means throwing myself under the bus.</p>
                            </IgrCardContent>
                        </div>
                        <div className="divider"></div>
                        <IgrCardActions>
                            <span className="material-icons">skip_previous</span>
                            <span className="material-icons">play_arrow</span>
                            <span className="material-icons">skip_next</span>
                        </IgrCardActions>
                    </div>
                </IgrCard>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CardHorizontal/>);
```


### Alternative layouts

You can get even more creative with the layout of the [`IgrCard`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcard.html).

Below is an example showing how you can create a semi-horizontal card, where we have every section of the card laid out vertically, while the [`IgrCardMedia`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcardmedia.html) appears alongside the vertical sections.

```tsx
<IgrCard>
    <div className="semi-horizontal">
        <div>
            <IgrCardHeader>
                <IgrAvatar src="https://static.infragistics.com/xplatform/images/music/singer_with_mic.jpg" slot="thumbnail" />
                <h5 slot="title">HERE</h5>
                <h5 slot="subtitle">by Mellow D</h5>
            </IgrCardHeader>
            <IgrCardContent>
                <p>Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.</p>
            </IgrCardContent>
            <IgrCardActions>
                <IgrButton><span>Play Album</span></IgrButton>
            </IgrCardActions>
        </div>

        <IgrCardMedia className='card-media'>
            <img src="https://static.infragistics.com/xplatform/images/music/singer_female.jpg"></img>
        </IgrCardMedia>
    </div>
</IgrCard>
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

.center {
    align-items: center;
}
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./CardSemiHorizontal.css";
import {
  IgrCard,
  IgrCardHeader,
  IgrCardContent,
  IgrCardActions,
  IgrCardMedia,
  IgrAvatar,
  IgrButton,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function CardSemiHorizontal() {
  return (
    <div className="container sample center">
      <div className="card-wrapper">
        <IgrCard>
          <div className="semi-horizontal">
            <div>
              <IgrCardHeader>
                <IgrAvatar
                  src="https://dl.infragistics.com/x/img/music/singer_with_mic.jpg"
                  slot="thumbnail"
                />
                <h5 slot="title">HERE</h5>
                <h5 slot="subtitle">by Mellow D</h5>
              </IgrCardHeader>

              <IgrCardContent>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </IgrCardContent>

              <IgrCardActions>
                <IgrButton>
                  <span>Play Album</span>
                </IgrButton>
              </IgrCardActions>
            </div>

            <IgrCardMedia className="card-media">
              <img src="https://dl.infragistics.com/x/img/music/singer_female.jpg"></img>
            </IgrCardMedia>
          </div>
        </IgrCard>
      </div>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardSemiHorizontal />);
```


### Card Actions

The card actions area allows additional configuration to what we have already mentioned.

You can reverse the order of the text button and the icon buttons by switching their slot names.

```tsx
<IgrCardActions>
    <IgrButton>
        <span>Read more</span>
        <IgrRipple />
    </IgrButton>
    <div slot="start">
        <IgrIconButton className="marginIcon" name="twitter" collection="material">
            <IgrRipple />
        </IgrIconButton>
        <IgrIconButton name="facebook" collection="material">
            <IgrRipple />
        </IgrIconButton>
    </div>
</IgrCardActions>
```

Now the icon buttons will appear before the text button.

You can also add more content in-between by simply omitting the slot property and let the elements go to the default slot.

## Styling

Since the card is a container that wraps different elements, styling is done by styling its building blocks - the [`IgrCardHeader`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcardheader.html), [`IgrCardContent`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcardcontent.html), [`IgrCardMedia`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcardmedia.html) and [`IgrCardActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcardactions.html) sub-components.

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
.card-wrapper {
    max-width: 320px;
    min-width: 220px;
}

igc-card {
    background-color: #011627;
}

igc-card-content,
igc-card-header > *[slot="title"]{
    color: #FEFEFE;
}

igc-card-header > *[slot="subtitle"] {
    color: #ECAA53;
    opacity: 0.9;
}

igc-icon-button+igc-icon-button {
    margin-left: 10px;
}

.center {
    align-items: center;
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./CardStyling.css";
import {
  IgrCard,
  IgrCardMedia,
  IgrCardHeader,
  IgrCardContent,
  IgrCardActions,
  IgrIconButton,
  IgrRipple,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const twitterIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1.13 6v.39a8.61 8.61 0 01-13.25 7.25 5.69 5.69 0 00.72 0 6 6 0 003.76-1.3 3 3 0 01-2.83-2.1 2.75 2.75 0 00.57.05 3 3 0 00.8-.1 3 3 0 01-2.43-3 3.13 3.13 0 001.37.38 3 3 0 01-.93-4 8.57 8.57 0 006.24 3.17 3.1 3.1 0 01-.08-.74 3 3 0 015.24-2A6.38 6.38 0 0019 6.22a3.07 3.07 0 01-1.36 1.68 6.22 6.22 0 001.74-.48A6.09 6.09 0 0117.87 9z'></path></svg>";
const facebookIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 22zm0-20a10 10 0 00-1.727 19.841v-7.6h-2.61v-3.018h2.61V8.995A3.641 3.641 0 0114.16 5a21.367 21.367 0 012.332.119v2.7h-1.6c-1.255 0-1.5.6-1.5 1.471v1.929h2.993L16 14.245h-2.6v7.647A9.994 9.994 0 0012 2z'></path></svg>";
const instagramIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14.64A5.64 5.64 0 1117.64 12 5.65 5.65 0 0112 17.64zm5.86-10.18a1.32 1.32 0 111.32-1.32 1.32 1.32 0 01-1.32 1.32zM15.66 12A3.66 3.66 0 1112 8.34 3.66 3.66 0 0115.66 12z'></path></svg>";

export default function CardStyling() {
  useEffect(() => {
    registerIconFromText("facebook", facebookIcon, "material");
    registerIconFromText("twitter", twitterIcon, "material");
    registerIconFromText("instagram", instagramIcon, "material");
  }, []);

  return (
    <div className="container sample center">
      <div className="card-wrapper">
        <IgrCard>
          <IgrCardMedia>
            <img src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"></img>
          </IgrCardMedia>
          <IgrCardHeader className="header">
            <h3 slot="title">Jane Doe</h3>
            <h5 slot="subtitle">Professional Photographer</h5>
          </IgrCardHeader>
          <IgrCardContent>
            <p>
              Hi! I am Jane, photographer and filmmaker. Photography is a way of
              feeling, of touching, of loving. What you have caught on film is
              captured forever... it remembers little things, long after you
              have forgotten everything.
            </p>
          </IgrCardContent>
          <IgrCardActions>
            <div slot="end">
              <IgrIconButton name="twitter" collection="material">
                <IgrRipple />
              </IgrIconButton>
              <IgrIconButton name="facebook" collection="material">
                <IgrRipple />
              </IgrIconButton>
              <IgrIconButton name="instagram" collection="material">
                <IgrRipple />
              </IgrIconButton>
            </div>
          </IgrCardActions>
        </IgrCard>
      </div>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardStyling />);
```


### Summary

In this article we covered a lot of ground with the card component. We created a simple card and added some images to make it a bit more appealing. We used some additional React inside our card, like avatars, buttons and icons, to enrich the experience and add some functionality. And finally, we changed the card's appearance by changing the major colors of the building blocks.

<div class="divider"></div>

## API References

- [`IgrAvatar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html)
- [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html)
- [`IgrCardActions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcardactions.html)
- [`IgrCardContent`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcardcontent.html)
- [`IgrCardHeader`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcardheader.html)
- [`IgrCardMedia`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcardmedia.html)
- [`IgrCard`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcard.html)
- [`IgrIconButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igriconbutton.html)
- [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

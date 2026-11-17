---
title: "React Card Component"
description: "React Card organizes related media, text, and actions in one flexible content container."
keywords: "React Card, card component, content container, media card, Ignite UI for React, Infragistics"
license: MIT
last_updated: "2026-07-30"
mentionedTypes: ["Card", "CardActions", "CardContent", "CardHeader", "CardMedia", "Avatar", "Button", "Icon", "IconButton", "Ripple"]
relatedComponents: ["Grid", "List"]
llms:
  description: "The Ignite UI for React Card organizes related media, text, and actions in one flexible content container."
_tocName: Card
---
# Card

The Ignite UI for React Card organizes related media, text, and actions in one flexible content container.

Use the card to group content about a single subject, such as a product, article, contact, location, or dashboard item.

## Live Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
    padding: 3.5rem 1.5rem;
}

.card-options {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

.card-container {
    --ig-size: var(--ig-size-small);

    inline-size: 100%;
    max-inline-size: 360px;
    min-inline-size: 220px;
}

.card-container igc-card-media img {
    inline-size: 100%;
    aspect-ratio: 15 / 8;
    object-fit: cover;
}

.card-container igc-card-content p {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.5;
}

.card-actions-start,
.card-actions-end {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
```
```tsx
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrAvatar,
    IgrButton,
    IgrCard,
    IgrCardActions,
    IgrCardContent,
    IgrCardHeader,
    IgrCardMedia,
    IgrCheckboxChangeEventArgs,
    IgrIconButton,
    IgrSwitch,
    registerIconFromText
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const addIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>';

export default function CardOverview() {
    const [media, setMedia] = useState(true);
    const [header, setHeader] = useState(true);
    const [content, setContent] = useState(true);
    const [actions, setActions] = useState(true);

    useEffect(() => {
        registerIconFromText('add', addIcon, 'material');
    }, []);

    return (
        <div className="container sample">
            <div className="card-options">
                <IgrSwitch labelPosition="before" checked={media}
                    onChange={(e: IgrCheckboxChangeEventArgs) => setMedia(e.detail.checked)}>
                    <span>Media</span>
                </IgrSwitch>
                <IgrSwitch labelPosition="before" checked={header}
                    onChange={(e: IgrCheckboxChangeEventArgs) => setHeader(e.detail.checked)}>
                    <span>Header</span>
                </IgrSwitch>
                <IgrSwitch labelPosition="before" checked={content}
                    onChange={(e: IgrCheckboxChangeEventArgs) => setContent(e.detail.checked)}>
                    <span>Content</span>
                </IgrSwitch>
                <IgrSwitch labelPosition="before" checked={actions}
                    onChange={(e: IgrCheckboxChangeEventArgs) => setActions(e.detail.checked)}>
                    <span>Actions</span>
                </IgrSwitch>
            </div>

            <div className="card-container">
                <IgrCard>
                    {media && (
                        <IgrCardMedia>
                            <img
                                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50"
                                alt="Mountain range above the clouds at sunset" />
                        </IgrCardMedia>
                    )}
                    {header && (
                        <IgrCardHeader>
                            <IgrAvatar
                                slot="thumbnail"
                                shape="circle"
                                src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                                alt="profile picture" />
                            <span slot="title">Title</span>
                            <span slot="subtitle">Subtitle</span>
                        </IgrCardHeader>
                    )}
                    {content && (
                        <IgrCardContent>
                            <p>
                                A paragraph is a self-contained unit of a discourse in writing
                                dealing with a particular point or idea.
                            </p>
                        </IgrCardContent>
                    )}
                    {actions && (
                        <IgrCardActions>
                            <div className="card-actions-start" slot="start">
                                <IgrButton variant="flat">Button</IgrButton>
                                <IgrButton variant="flat">Button</IgrButton>
                            </div>
                            <div className="card-actions-end" slot="end">
                                <IgrIconButton variant="flat" name="add" collection="material" />
                                <IgrIconButton variant="flat" name="add" collection="material" />
                                <IgrIconButton variant="flat" name="add" collection="material" />
                            </div>
                        </IgrCardActions>
                    )}
                </IgrCard>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CardOverview/>);
```

## Anatomy

The card is a container whose standard building blocks are header, media, content, and actions.

**React Card anatomy anatomy:** The card anatomy labels the header, media, content, and actions regions.

<div class="card-anatomy-legend ig-typography__body-2">
  <div>
    <strong>A - Media Container</strong>
    <span>1. Image (optional)</span>
  </div>
  <div>
    <strong>B - Card Header</strong>
    <span>2. Title</span>
    <span>3. Avatar (optional)</span>
    <span>4. Subtitle</span>
  </div>
  <div>
    <strong>C - Content area</strong>
    <span>5. Paragraph</span>
  </div>
  <div>
    <strong>D - Card Footer</strong>
    <span>6. Action Buttons, Icon Buttons</span>
  </div>
</div>

<style>{`
  .card-anatomy {
    --igd-anatomy-padding: 8px;
  }

  .card-anatomy .igd-anatomy__image {
    max-width: 800px;
  }

  .card-anatomy-legend {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 48px;
    margin-bottom: 24px;
  }

  .card-anatomy-legend div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .card-anatomy-legend strong {
    margin-bottom: 12px;
  }

  .card-anatomy-legend span {
    display: block;
  }

  @media (max-width: 768px) {
    .card-anatomy-legend {
      grid-template-columns: 1fr 1fr;
      row-gap: 24px;
    }
  }

  @media (max-width: 480px) {
    .card-anatomy-legend {
      grid-template-columns: 1fr;
    }
  }
`}</style>

```text
igc-card                         // host - groups related content
├─ igc-card-media                 // optional media region
│  └─ default slot                // image, video, or other media content
├─ igc-card-header                // optional header region
│  ├─ [slot="thumbnail"]          // optional avatar, icon, or small image
│  ├─ [slot="title"]              // card title
│  ├─ [slot="subtitle"]           // optional card subtitle
│  └─ default slot                // optional additional header content
├─ igc-card-content               // optional body region
│  └─ default slot                // text, lists, or custom content
└─ igc-card-actions               // optional action region
   ├─ [slot="start"]              // leading actions
   ├─ default slot                // centered actions
   └─ [slot="end"]                // trailing actions
```

## Getting Started

To use the React Card, follow the [Ignite UI for React Getting Started](../general-getting-started.md) topic for the basic project setup, then register the component for your target platform.

For React using the **igniteui-react** package, install the package:

```cmd
npm install igniteui-react
```

You will then need to import the Card wrappers and the theme CSS, like so:

```tsx
import {
  IgrCard,
  IgrCardActions,
  IgrCardContent,
  IgrCardHeader,
  IgrCardMedia,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

Import any other wrappers your card content uses, such as `IgrAvatar`, `IgrButton`, and `IgrIconButton`.

The simplest way to start using the [`IgrCard`](mcp:get_api_reference?platform=react&component=IgrCard) is as follows:

```tsx
<IgrCard>
  <IgrCardHeader>
    <h3 slot="title">Title</h3>
  </IgrCardHeader>
  <IgrCardContent>
    <p>Content</p>
  </IgrCardContent>
</IgrCard>
```

## Usage

Compose a card from the card container and whichever sub-components your content needs.

### Media

Use [`IgrCardMedia`](mcp:get_api_reference?platform=react&component=IgrCardMedia) to place images, video, or other media content in the card.

```tsx
<IgrCardMedia>
  <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50" alt="New York city skyline" />
</IgrCardMedia>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: flex-start;
    justify-content: center;
    gap: 1.25rem;
    padding: 2rem 0.5rem;
}

.media-card {
    --ig-card-border-radius: 0.25rem;

    flex: 1 1 15rem;
    max-inline-size: 16rem;
}

.media-card__media {
    block-size: 6.5rem;
}

.media-card__media img {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
}

.media-card igc-card-header {
    padding: 1rem 1rem 0;
}

.media-card [slot="title"] {
    margin-block-end: 0;
    color: var(--ig-gray-900);
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0.15px;
}

.media-card [slot="subtitle"] {
    color: var(--ig-gray-900);
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0.1px;
}

.media-card igc-card-actions {
    padding: 1.5rem 1rem 0.75rem;
    flex-wrap: nowrap;
}

.media-card__icons {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--ig-gray-900);
}

.media-card__icons igc-icon {
    --ig-icon-size: 1rem;
}

.media-card__action {
    --ig-size: var(--ig-size-small);
}

.media-card__action::part(base) {
    padding: 0;
    background: transparent;
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.25px;
    text-transform: uppercase;
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrButton,
  IgrCard,
  IgrCardActions,
  IgrCardHeader,
  IgrCardMedia,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const videocamIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path></svg>';

const bluetoothIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"></path></svg>';

const volumeOffIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></svg>';

const directionsBusIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"></path></svg>';

const directionsCarIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"></path></svg>';

const flightIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path></svg>';

const placeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>';

const pinRightIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(-45 12 12)"><path d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"></path></g></svg>';

export default function CardMedia() {
  useEffect(() => {
    registerIconFromText("videocam", videocamIcon, "material");
    registerIconFromText("bluetooth", bluetoothIcon, "material");
    registerIconFromText("volume-off", volumeOffIcon, "material");
    registerIconFromText("directions-bus", directionsBusIcon, "material");
    registerIconFromText("directions-car", directionsCarIcon, "material");
    registerIconFromText("flight", flightIcon, "material");
    registerIconFromText("place", placeIcon, "material");
    registerIconFromText("pin-right", pinRightIcon, "material");
  }, []);

  return (
    <div className="container sample card-container">
      <IgrCard className="media-card">
        <IgrCardMedia className="media-card__media">
          <img
            src="https://dl.infragistics.com/x/img/card/card-2.png"
            alt="A meeting room with a long table and chairs"
          />
        </IgrCardMedia>
        <IgrCardHeader>
          <span slot="title">Book your meeting room</span>
          <span slot="subtitle">Max 15 seats / 10 m2</span>
        </IgrCardHeader>
        <IgrCardActions>
          <div slot="start" className="media-card__icons">
            <IgrIcon name="videocam" collection="material" />
            <IgrIcon name="bluetooth" collection="material" />
            <IgrIcon name="volume-off" collection="material" />
          </div>
          <IgrButton slot="end" variant="flat" className="media-card__action">
            Book now
          </IgrButton>
        </IgrCardActions>
      </IgrCard>

      <IgrCard className="media-card">
        <IgrCardMedia className="media-card__media">
          <img
            src="https://dl.infragistics.com/x/img/card/card-map-1.png"
            alt="A street map with the event space marked"
          />
        </IgrCardMedia>
        <IgrCardHeader>
          <span slot="title">Main Event Space</span>
          <span slot="subtitle">Floor 4, Suite 402</span>
        </IgrCardHeader>
        <IgrCardActions>
          <div slot="start" className="media-card__icons">
            <IgrIcon name="directions-bus" collection="material" />
            <IgrIcon name="directions-car" collection="material" />
            <IgrIcon name="flight" collection="material" />
          </div>
          <IgrButton slot="end" variant="flat" className="media-card__action">
            Get directions
          </IgrButton>
        </IgrCardActions>
      </IgrCard>

      <IgrCard className="media-card">
        <IgrCardMedia className="media-card__media">
          <img
            src="https://dl.infragistics.com/x/img/card/card-map-2.png"
            alt="A map of Europe showing the sales region"
          />
        </IgrCardMedia>
        <IgrCardHeader>
          <span slot="title">View your coverage area</span>
          <span slot="subtitle">Sales region</span>
        </IgrCardHeader>
        <IgrCardActions>
          <div slot="start" className="media-card__icons">
            <IgrIcon name="place" collection="material" />
            <IgrIcon name="pin-right" collection="material" />
          </div>
          <IgrButton slot="end" variant="flat" className="media-card__action">
            See details
          </IgrButton>
        </IgrCardActions>
      </IgrCard>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<CardMedia />);
```

### Position

Place the media above or below the header. The card renders its regions in the order you add them, so the element order in your markup sets the media position.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: flex-start;
    justify-content: center;
    gap: 3.5rem;
    padding: 2rem 1rem;
}

.card-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
}

.card-item__label {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    line-height: 20px;
    letter-spacing: 0.3px;
}

.position-card {
    --ig-card-border-radius: 0.25rem;

    inline-size: 16rem;
}

.position-card__media {
    block-size: 6.5rem;
}

.position-card__media img {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
}

.position-card igc-card-header {
    padding: 1rem 1rem 0;
}

.position-card [slot="title"] {
    margin-block-end: 0;
    color: var(--ig-gray-900);
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.15px;
}

.position-card [slot="subtitle"] {
    color: var(--ig-gray-900);
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.1px;
}

.position-card igc-card-actions {
    padding: 1.5rem 1.5rem 0.5rem;
    flex-wrap: nowrap;
}

.position-card igc-card-header + igc-card-media {
    margin-block-start: 0.5rem;
}

.position-card igc-card-media + igc-card-actions {
    padding-block-start: 1rem;
}

.position-card__icons {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    color: var(--ig-gray-900);
}

.position-card__icons igc-icon {
    --ig-icon-size: 1rem;
}

.position-card__action {
    --ig-size: var(--ig-size-small);
}

.position-card__action::part(base) {
    padding: 0;
    background: transparent;
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.25px;
    text-transform: uppercase;
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrButton,
  IgrCard,
  IgrCardActions,
  IgrCardHeader,
  IgrCardMedia,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const videocamIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path></svg>';

const bluetoothIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"></path></svg>';

const volumeOffIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path></svg>';

const roomImage = "https://dl.infragistics.com/x/img/card/card-2.png";

export default function CardPosition() {
  useEffect(() => {
    registerIconFromText("videocam", videocamIcon, "material");
    registerIconFromText("bluetooth", bluetoothIcon, "material");
    registerIconFromText("volume-off", volumeOffIcon, "material");
  }, []);

  return (
    <div className="container sample card-container">
      <div className="card-item">
        <span className="card-item__label">Media before header</span>

        <IgrCard className="position-card">
          <IgrCardMedia className="position-card__media">
            <img src={roomImage} alt="A meeting room with a long table and chairs" />
          </IgrCardMedia>
          <IgrCardHeader>
            <span slot="title">Book your meeting room</span>
            <span slot="subtitle">Max 15 seats / 10 m2</span>
          </IgrCardHeader>
          <IgrCardActions>
            <div slot="start" className="position-card__icons">
              <IgrIcon name="videocam" collection="material" />
              <IgrIcon name="bluetooth" collection="material" />
              <IgrIcon name="volume-off" collection="material" />
            </div>
            <IgrButton slot="end" variant="flat" className="position-card__action">
              Book now
            </IgrButton>
          </IgrCardActions>
        </IgrCard>
      </div>

      <div className="card-item">
        <span className="card-item__label">Media after header</span>

        <IgrCard className="position-card">
          <IgrCardHeader>
            <span slot="title">Book your meeting room</span>
            <span slot="subtitle">Max 15 seats / 10 m2</span>
          </IgrCardHeader>
          <IgrCardMedia className="position-card__media">
            <img src={roomImage} alt="A meeting room with a long table and chairs" />
          </IgrCardMedia>
          <IgrCardActions>
            <div slot="start" className="position-card__icons">
              <IgrIcon name="videocam" collection="material" />
              <IgrIcon name="bluetooth" collection="material" />
              <IgrIcon name="volume-off" collection="material" />
            </div>
            <IgrButton slot="end" variant="flat" className="position-card__action">
              Book now
            </IgrButton>
          </IgrCardActions>
        </IgrCard>
      </div>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<CardPosition />);
```

### Header Slots

Use the header slots to define thumbnail, title, subtitle, and additional header content.

```tsx
<IgrCardHeader>
  <IgrAvatar slot="thumbnail" initials="TS" />
  <h3 slot="title">Title</h3>
  <span slot="subtitle">Subtitle</span>
</IgrCardHeader>
```

Pass a heading element, such as `<h3>`, to the `title` slot so the card takes its place in the document outline, and use a neutral inline element such as `<span>` for the `subtitle`. The header resets the margin and font of slotted content, so the heading keeps the card typography.

### Content

Use [`IgrCardContent`](mcp:get_api_reference?platform=react&component=IgrCardContent) for the card body text, lists, or custom content.

```tsx
<IgrCardContent>
  <p>New York City comprises five boroughs where the Hudson River meets the Atlantic Ocean.</p>
</IgrCardContent>
```

### Elevated

Set [`elevated`](mcp:get_api_reference?platform=react&component=IgrCard&member=elevated) when the card should use the elevated visual treatment.

```tsx
<IgrCard elevated={true}>
  ...
</IgrCard>
```

### Actions Slots

Use the actions slots to place leading, centered, and trailing actions in [`IgrCardActions`](mcp:get_api_reference?platform=react&component=IgrCardActions).

```tsx
<IgrCardActions>
  <IgrButton slot="start">Like</IgrButton>
  <IgrButton>Comment</IgrButton>
  <IgrIconButton slot="end" name="more_vert" />
</IgrCardActions>
```

### Actions Orientation

Use the [`orientation`](mcp:get_api_reference?platform=react&component=IgrCardActions&member=orientation) property to arrange [`IgrCardActions`](mcp:get_api_reference?platform=react&component=IgrCardActions) content horizontally or vertically. The actions are horizontal by default, so set `orientation` to `vertical` to stack them.

```tsx
<IgrCardActions orientation="vertical">
  <IgrButton slot="start">Like</IgrButton>
  <IgrButton slot="start">Share</IgrButton>
  <IgrIconButton slot="end" name="more_vert" />
</IgrCardActions>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.container.sample {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 3rem;
    padding: 2.5rem 1.5rem;
}

.card-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
}

.card-item__label {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    line-height: 20px;
    letter-spacing: 0.3px;
}

.post-card {
    --ig-card-border-radius: 0.5rem;

    inline-size: 310px;
}

.post-card igc-card-header {
    padding: 1rem 1rem 0;
}

.post-card [slot="title"] {
    color: var(--ig-gray-900);
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0.15px;
}

.post-card [slot="subtitle"] {
    color: var(--ig-gray-600);
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0.1px;
}

.post-card igc-card-content {
    padding: 1.5rem 1rem 0;
    overflow: visible;
}

.post-card igc-card-content p {
    margin: 0;
    color: var(--ig-gray-700);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.25px;
}

.post-card igc-card-actions {
    padding: 0.75rem 1rem 0.5rem;
}

.post-card igc-icon-button {
    --ig-size: var(--ig-size-small);
    --ig-flat-icon-button-foreground: var(--ig-gray-900);
}

.post-card igc-card-actions igc-icon-button:not(:first-of-type) {
    margin-inline-start: 0.5rem;
}

.post-card--vertical {
    flex-direction: row;
    inline-size: 390px;
}

.post-card--vertical igc-card-content {
    padding-block-end: 1rem;
}

.post-card__body {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    min-inline-size: 0;
}

.post-card--vertical igc-card-actions {
    justify-content: flex-start;
    margin-block-start: 0;
    padding: 1rem 1rem 1rem 0;
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrAvatar,
  IgrCard,
  IgrCardActions,
  IgrCardContent,
  IgrCardHeader,
  IgrIconButton,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const favoriteIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>';

const bookmarkIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></svg>';

const linkedinIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>';

export default function CardActions() {
  useEffect(() => {
    registerIconFromText("favorite", favoriteIcon, "material");
    registerIconFromText("bookmark", bookmarkIcon, "material");
    registerIconFromText("linkedin", linkedinIcon, "material");
  }, []);

  return (
    <div className="container sample card-container">
      <div className="card-item">
        <span className="card-item__label">Horizontal actions (default)</span>

        <IgrCard className="post-card">
          <IgrCardHeader>
            <IgrAvatar
              slot="thumbnail"
              shape="circle"
              src="https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png"
            />
            <span slot="title">Lena Fischer</span>
            <span slot="subtitle">@lena &middot; 2h ago</span>
          </IgrCardHeader>
          <IgrCardContent>
            <p>
              Just shipped our new design system &#128640; Six months of tokens,
              components, and documentation &mdash; and it&rsquo;s finally live.
              So proud of the team.
            </p>
          </IgrCardContent>
          <IgrCardActions orientation="horizontal">
            <IgrIconButton
              slot="end"
              variant="flat"
              name="favorite"
              collection="material"
              aria-label="Like"
            />
            <IgrIconButton
              slot="end"
              variant="flat"
              name="bookmark"
              collection="material"
              aria-label="Save"
            />
            <IgrIconButton
              slot="end"
              variant="flat"
              name="linkedin"
              collection="material"
              aria-label="Share on LinkedIn"
            />
          </IgrCardActions>
        </IgrCard>
      </div>

      <div className="card-item">
        <span className="card-item__label">Vertical actions</span>

        <IgrCard className="post-card post-card--vertical">
          <div className="post-card__body">
            <IgrCardHeader>
              <IgrAvatar
                slot="thumbnail"
                shape="circle"
                src="https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png"
              />
              <span slot="title">Lena Fischer</span>
              <span slot="subtitle">@lena &middot; 2h ago</span>
            </IgrCardHeader>
            <IgrCardContent>
              <p>
                Just shipped our new design system &#128640; Six months of
                tokens, components, and documentation &mdash; and it&rsquo;s
                finally live. So proud of the team.
              </p>
            </IgrCardContent>
          </div>

          <IgrCardActions orientation="vertical">
            <IgrIconButton
              variant="flat"
              name="favorite"
              collection="material"
              aria-label="Like"
            />
            <IgrIconButton
              variant="flat"
              name="bookmark"
              collection="material"
              aria-label="Save"
            />
            <IgrIconButton
              variant="flat"
              name="linkedin"
              collection="material"
              aria-label="Share on LinkedIn"
            />
          </IgrCardActions>
        </IgrCard>
      </div>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<CardActions />);
```

### Layout

Use layout wrappers when card sections need to be arranged horizontally or split between media and content areas.

For a horizontal card, group the header and content in one wrapper, add the actions beside that wrapper, and apply a flex row to the card content.

```tsx
<IgrCard>
  <div className="card-horizontal">
    <div>
      <IgrCardHeader>
        <img src="https://dl.infragistics.com/x/img/music/rozes.jpg" slot="thumbnail" alt="Rozes album cover" />
        <span slot="title">Rozes</span>
        <span slot="subtitle">Under the Grave (2016)</span>
      </IgrCardHeader>
      <IgrCardContent>
        <p>As I have always said: I write what's real and what's true, even if it means throwing myself under the bus.</p>
      </IgrCardContent>
    </div>
    <div className="divider"></div>
    <IgrCardActions>
      <IgrIconButton variant="flat" name="skip_previous" aria-label="Previous track" />
      <IgrIconButton variant="flat" name="play_arrow" aria-label="Play" />
      <IgrIconButton variant="flat" name="skip_next" aria-label="Next track" />
    </IgrCardActions>
  </div>
</IgrCard>
```

```css
.card-horizontal {
  display: flex;
  flex-direction: row;
  flex: 1 1 0%;
}

.card-horizontal igc-card-actions {
  justify-content: center;
}
```

For a semi-horizontal card, keep the header, content, and actions stacked in one column, then place the media section beside that column.

```tsx
<IgrCard>
  <div className="semi-horizontal">
    <div>
      <IgrCardHeader>
        <IgrAvatar src="https://dl.infragistics.com/x/img/music/singer_with_mic.jpg" slot="thumbnail" />
        <span slot="title">HERE</span>
        <span slot="subtitle">by Mellow D</span>
      </IgrCardHeader>
      <IgrCardContent>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </IgrCardContent>
      <IgrCardActions>
        <IgrButton>Play Album</IgrButton>
      </IgrCardActions>
    </div>
    <IgrCardMedia className="card-media">
      <img src="https://dl.infragistics.com/x/img/music/singer_female.jpg" alt="Singer" />
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

### Do/Don't

The card usually works as an overview UI and an entry point for more detailed information. Avoid clogging it with too much information, and as you create dashboards with it, size and arrange the cards consistently in order to form a layout grid with equal horizontal and vertical gaps between cards.

<div class="card-guidance">
  <figure class="card-guidance__item">
    
    <figcaption>
      <span class="card-guidance__do">Do</span>
      <span class="card-guidance__text">Keep body text brief and focused on essential information for quick readability.</span>
    </figcaption>
  </figure>
  <figure class="card-guidance__item">
    
    <figcaption>
      <span class="card-guidance__not">Don't</span>
      <span class="card-guidance__text">Avoid overloading the card body with long paragraphs or unnecessary detail.</span>
    </figcaption>
  </figure>
</div>

<style>{`
  .card-guidance {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    margin-bottom: 24px;
  }

  .card-guidance__item {
    margin: 0;
  }

  .card-guidance__item img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid #d3d3d3;
  }

  .card-guidance figcaption {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-top: 12px;
    text-align: start;
    font: inherit;
    color: inherit;
  }

  .card-guidance__do,
  .card-guidance__not {
    font-size: 18px;
    font-weight: 600;
  }

  .card-guidance__do {
    color: #0f8a3d;
  }

  .card-guidance__not {
    color: #d0273c;
  }

  @media (max-width: 600px) {
    .card-guidance {
      grid-template-columns: 1fr;
    }
  }
`}</style>

## Properties

The card API exposes container appearance and action-layout controls.

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| [`elevated`](mcp:get_api_reference?platform=react&component=IgrCard&member=elevated) | `boolean` | `false` | Sets the card to use an elevated appearance with shadow. |
| [`orientation`](mcp:get_api_reference?platform=react&component=IgrCardActions&member=orientation) | `"horizontal" \| "vertical"` | `"horizontal"` | Sets the layout orientation of [`IgrCardActions`](mcp:get_api_reference?platform=react&component=IgrCardActions). |

## Styling

The card appearance is controlled through theme variables.

| Variable | What it changes |
| -- | -- |
| `--ig-card-background` | Card background color. |
| `--ig-card-outline-color` | Card outline color. |
| `--ig-card-header-text-color` | Card title text color. |
| `--ig-card-subtitle-text-color` | Card subtitle text color. |
| `--ig-card-content-text-color` | Card content text color. |
| `--ig-card-actions-text-color` | Card actions text color. |
| `--ig-card-resting-shadow` | Card shadow in its resting state. |
| `--ig-card-hover-shadow` | Card shadow in its hover state. |
| `--ig-card-border-radius` | Card border radius. |

The card header also exposes CSS parts for its text containers.

| CSS Part | Description |
| -- | -- |
| `header` | Card header text container. |
| `title` | Title slot wrapper. |
| `subtitle` | Subtitle slot wrapper. |

### Sass Theming

Use the `card-theme` function when your application customizes Ignite UI themes through Sass.

```scss
@use "igniteui-theming/sass/themes" as *;

$custom-card-theme: card-theme(
  $background: #1f2937,
  $border-radius: 12px,
  $header-text-color: #ffffff,
  $content-text-color: #e5e7eb
);

:root {
  @include tokens($custom-card-theme);
}
```

### CSS Variables

Set component CSS variables directly when you need local styling without a Sass build step.

```css
igc-card {
  --ig-card-background: var(--ig-secondary-900);
  --ig-card-header-text-color: var(--ig-secondary-900-contrast);
  --ig-card-content-text-color: var(--ig-secondary-900-contrast);
}

igc-card-header::part(subtitle) {
  color: var(--ig-warn-500);
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@import url("https://use.typekit.net/bng2zgw.css");

.container.sample {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3.75rem;
    padding: 2.5rem 1.5rem;
}

.balance-card {
    --ig-card-border-radius: 1rem;
    --ig-card-outline-color: #99c9ff;

    position: relative;
    inline-size: 312px;
    padding: 0.5rem;
    background: #e6f2ff;
}

.balance-card igc-card-header {
    padding: 1rem 1rem 0;
}

.balance-card [slot="title"] {
    color: #004699;
    font-family: "aktiv-grotesk", "Aktiv Grotesk", Arial, sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.1px;
}

.trend-chip {
    position: absolute;
    block-size: 24px;
    inset-block-start: 1.5rem;
    inset-inline-end: 1.5rem;
    z-index: 1;
}

.trend-chip::part(base) {
    box-sizing: border-box;
    block-size: 24px;
    padding: 2px 6px;
    border: none;
    border-radius: 16px;
    background: #cce4ff;
    color: #004699;
    font-family: "Titillium Web", Verdana, Tahoma, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.25px;
}

.trend-chip::part(prefix) {
    color: #004699;
}

.trend-chip igc-icon {
    --ig-icon-size: 1.25rem;
}

.balance-card igc-card-content {
    padding: 0 1rem;
    overflow: visible;
}

.balance-amount {
    display: block;
    color: #0176ff;
    font-family: "aktiv-grotesk", "Aktiv Grotesk", Arial, sans-serif;
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.5rem;
    letter-spacing: 0;
}

.balance-card igc-card-actions {
    padding: 1rem;
}

.balance-actions {
    display: inline-flex;
    gap: 0.5rem;
}

.balance-actions igc-icon-button {
    --ig-flat-icon-button-foreground: #004699;
}

.balance-actions igc-icon-button::part(base) {
    inline-size: 2.25rem;
    block-size: 2.25rem;
    border-radius: 50%;
    background: #ffffff;
}

.support-card {
    --ig-card-border-radius: 1rem;
    --ig-card-outline-color: #e5ebf3;

    position: relative;
    inline-size: 246px;
    padding: 0.5rem;
    background: #ffffff;
}

.support-media {
    block-size: 124px;
    padding: 1rem;
    border-radius: 1rem;
}

.support-media img {
    inline-size: 100%;
    block-size: 100%;
    object-fit: contain;
}

.support-tag {
    position: absolute;
    inset-block-start: 0.75rem;
    inset-inline-start: 1rem;
    z-index: 1;
}

.support-tag::part(base) {
    box-sizing: border-box;
    block-size: 24px;
    padding: 2px 10px;
    border: none;
    border-radius: 16px;
    background: #e6f2ff;
    color: #004699;
    font-family: "Titillium Web", Verdana, Tahoma, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.25px;
}

.support-card igc-card-header {
    padding: 1rem 1rem 0;
}

.support-card [slot="title"] {
    color: #004699;
    margin-block-end: 0;
    font-family: "aktiv-grotesk", "Aktiv Grotesk", Arial, sans-serif;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.25rem;
    letter-spacing: 0;
}

.support-card igc-card-actions {
    padding: 1rem 1rem 0.5rem;
}

.support-link {
    color: #7d91ab;
    font-family: "aktiv-grotesk", "Aktiv Grotesk", Arial, sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1rem;
    letter-spacing: 0.15px;
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrCard,
  IgrCardActions,
  IgrCardContent,
  IgrCardHeader,
  IgrCardMedia,
  IgrChip,
  IgrIcon,
  IgrIconButton,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const trendingUpIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg>';

const linkIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg>';

const moreVertIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>';

export default function CardStyling() {
  useEffect(() => {
    registerIconFromText("trending-up", trendingUpIcon, "material");
    registerIconFromText("link", linkIcon, "material");
    registerIconFromText("more-vert", moreVertIcon, "material");
  }, []);

  return (
    <div className="container sample">
      <IgrCard className="balance-card">
        <IgrChip className="trend-chip">
          <IgrIcon slot="prefix" name="trending-up" collection="material" />
          <span>+12.4%</span>
        </IgrChip>
        <IgrCardHeader>
          <span slot="title">Total balance</span>
        </IgrCardHeader>
        <IgrCardContent>
          <span className="balance-amount">$24,860</span>
        </IgrCardContent>
        <IgrCardActions>
          <div slot="end" className="balance-actions">
            <IgrIconButton
              variant="flat"
              name="link"
              collection="material"
              aria-label="Copy account link"
            />
            <IgrIconButton
              variant="flat"
              name="more-vert"
              collection="material"
              aria-label="More options"
            />
          </div>
        </IgrCardActions>
      </IgrCard>

      <IgrCard className="support-card">
        <IgrChip className="support-tag">Support</IgrChip>
        <IgrCardMedia className="support-media">
          <img
            src="https://dl.infragistics.com/x/img/card/card-3.png"
            alt="Support agent reviewing system dashboards on a laptop"
          />
        </IgrCardMedia>
        <IgrCardHeader>
          <span slot="title">Review the issue and check system logs</span>
        </IgrCardHeader>
        <IgrCardActions>
          <span className="support-link">Find out more</span>
        </IgrCardActions>
      </IgrCard>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardStyling />);
```

### Styling with Tailwind

Use Tailwind utility classes when your application already uses Tailwind and you want the card layout and local color choices to stay in the component markup.

```css
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@source "./index.tsx";

.sample {
  display: grid;
  grid-template-columns: repeat(auto-fit, 21.5rem);
  gap: 2.5rem;
  place-content: center;
  height: 100vh;
}

igc-card:nth-of-type(2) {
  align-self: center;
}

igc-card-header {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
  padding: 1rem;
}

igc-card-header::part(header) {
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  flex: 1 1 auto;
  justify-content: center;
}

igc-card-header [slot="thumbnail"] {
  margin-inline-end: 1rem;
}

.card-sample-custom-subtitle {
  display: block;
  color: var(--ig-gray-700);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0 1rem 0.5rem;
}

.stats-title {
  color: var(--ig-gray-900);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
}

.stats-subtitle {
  color: var(--ig-gray-500);
  font-size: 0.875rem;
  line-height: 1.25rem;
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrAvatar,
  IgrButton,
  IgrCard,
  IgrCardActions,
  IgrCardContent,
  IgrCardHeader,
  IgrCardMedia,
  IgrDivider,
  IgrIcon,
  IgrIconButton,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const instagramIcon =
  '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_instagram)"><path d="M5.27258 0.0629438C4.31498 0.108124 3.66103 0.260944 3.08935 0.485584C2.49769 0.716164 1.99621 1.02558 1.49725 1.52634C0.998295 2.0271 0.691035 2.52894 0.462075 3.1215C0.240495 3.69444 0.0903746 4.34892 0.0480746 5.30706C0.0057746 6.2652 -0.00358541 6.57318 0.00109459 9.01722C0.00577459 11.4613 0.0165746 11.7676 0.0630146 12.7277C0.108735 13.6852 0.261015 14.3389 0.485655 14.9108C0.716595 15.5024 1.02565 16.0037 1.52659 16.5029C2.02753 17.002 2.52901 17.3086 3.12301 17.5379C3.69541 17.7591 4.35008 17.9099 5.30804 17.9519C6.266 17.9938 6.57434 18.0035 9.01766 17.9989C11.461 17.9942 11.7686 17.9834 12.7285 17.9378C13.6885 17.8923 14.3388 17.7389 14.9109 17.5154C15.5025 17.2839 16.0042 16.9754 16.503 16.4743C17.0017 15.9731 17.3088 15.4709 17.5376 14.878C17.7594 14.3056 17.91 13.651 17.9516 12.6937C17.9935 11.7331 18.0034 11.4263 17.9988 8.98266C17.9941 6.53898 17.9831 6.23262 17.9376 5.27286C17.892 4.3131 17.7396 3.66132 17.5151 3.0891C17.2838 2.49744 16.9751 1.9965 16.4743 1.497C15.9736 0.997504 15.471 0.690604 14.8783 0.462364C14.3055 0.240784 13.6512 0.0897638 12.6933 0.0483638C11.7353 0.00696385 11.427 -0.00365615 8.98274 0.00102385C6.53852 0.00570385 6.23252 0.0161439 5.27258 0.0629438ZM5.3777 16.3328C4.5002 16.2946 4.02373 16.1488 3.70621 16.0268C3.28573 15.8648 2.98621 15.6689 2.66977 15.3556C2.35333 15.0422 2.15893 14.7416 1.99477 14.322C1.87147 14.0045 1.72297 13.5286 1.68193 12.6511C1.63729 11.7026 1.62793 11.4179 1.62271 9.01506C1.61749 6.61224 1.62667 6.32784 1.66825 5.37906C1.70569 4.50228 1.85239 4.02528 1.97425 3.70794C2.13625 3.28692 2.33137 2.98794 2.64547 2.67168C2.95957 2.35542 3.25927 2.16066 3.67921 1.9965C3.99637 1.87266 4.4723 1.72542 5.34944 1.68366C6.29858 1.63866 6.58298 1.62966 8.98544 1.62444C11.3879 1.61922 11.673 1.62822 12.6225 1.66998C13.4993 1.70814 13.9765 1.8534 14.2935 1.97598C14.7141 2.13798 15.0135 2.33256 15.3297 2.6472C15.646 2.96184 15.8409 3.26046 16.0051 3.6813C16.1291 3.99756 16.2763 4.4733 16.3177 5.35098C16.3629 6.30012 16.3732 6.5847 16.3775 8.98698C16.3818 11.3893 16.3734 11.6746 16.3318 12.623C16.2934 13.5005 16.148 13.9771 16.0258 14.295C15.8638 14.7153 15.6685 15.015 15.3542 15.3311C15.0399 15.6472 14.7406 15.8419 14.3205 16.0061C14.0037 16.1297 13.5272 16.2773 12.6508 16.3191C11.7016 16.3637 11.4172 16.3731 9.01388 16.3783C6.61052 16.3835 6.32701 16.3738 5.37787 16.3328M12.7147 4.1898C12.715 4.40342 12.7787 4.61214 12.8977 4.78955C13.0167 4.96697 13.1856 5.10511 13.3831 5.18651C13.5806 5.26792 13.7978 5.28892 14.0073 5.24687C14.2167 5.20482 14.409 5.1016 14.5597 4.95028C14.7105 4.79895 14.813 4.60631 14.8543 4.39671C14.8956 4.18712 14.8738 3.96999 14.7917 3.77279C14.7095 3.57559 14.5708 3.40717 14.3929 3.28884C14.2151 3.17051 14.0061 3.10758 13.7925 3.108C13.5061 3.10858 13.2317 3.22286 13.0296 3.42573C12.8275 3.62859 12.7142 3.90343 12.7147 4.1898ZM4.37887 9.00894C4.38391 11.5613 6.4568 13.6258 9.00866 13.6209C11.5605 13.616 13.6264 11.5433 13.6215 8.99094C13.6167 6.43854 11.5432 4.37358 8.99102 4.37862C6.4388 4.38366 4.37401 6.4569 4.37887 9.00894ZM5.99996 9.0057C5.99878 8.41235 6.17358 7.83197 6.50226 7.33796C6.83093 6.84396 7.29871 6.4585 7.84645 6.23035C8.39419 6.0022 8.99728 5.9416 9.57947 6.0562C10.1616 6.17081 10.6968 6.45548 11.1172 6.87421C11.5376 7.29294 11.8243 7.82694 11.9413 8.40866C12.0582 8.99038 12 9.59371 11.774 10.1424C11.548 10.691 11.1644 11.1603 10.6717 11.4909C10.179 11.8215 9.59931 11.9986 9.00595 11.9998C8.61197 12.0007 8.22168 11.9239 7.85737 11.7738C7.49307 11.6238 7.16189 11.4035 6.88275 11.1254C6.6036 10.8474 6.38197 10.5171 6.2305 10.1534C6.07903 9.78967 6.00069 9.39969 5.99996 9.0057Z" fill="black"/></g><defs><clipPath id="clip0_instagram"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>';

const berealIcon =
  '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_bereal)"><path d="M11.7436 8.30078C11.4476 8.30078 11.2191 8.38594 11.0568 8.55329C10.8934 8.72024 10.7917 8.94745 10.75 9.23493H12.7337C12.7121 8.92888 12.61 8.69732 12.4261 8.53906C12.2435 8.3804 12.0155 8.30078 11.7436 8.30078Z" fill="black"/><path d="M7.41904 8.18753C7.5854 8.08617 7.66839 7.90598 7.66839 7.64716C7.66839 7.36126 7.55853 7.17139 7.33823 7.08011C7.14895 7.01668 6.90653 6.98389 6.61273 6.98389H5.46875V8.33987H6.76941C7.03653 8.33987 7.25268 8.28909 7.41904 8.18753Z" fill="black"/><path d="M7.40284 9.46179C7.25723 9.39442 7.05175 9.36004 6.78818 9.35767H5.46875V10.9958H6.76763C7.03456 10.9958 7.24103 10.9608 7.3902 10.8879C7.6591 10.754 7.79385 10.4989 7.79385 10.1203C7.79385 9.80103 7.66325 9.58034 7.40284 9.46179Z" fill="black"/><path d="M8.98867 0.098877C4.07826 0.098877 0.0976562 4.07948 0.0976562 8.98989C0.0976562 13.9003 4.07826 17.8809 8.98867 17.8809C13.8991 17.8809 17.8797 13.9003 17.8797 8.98989C17.8797 4.07948 13.8991 0.098877 8.98867 0.098877ZM10.4952 6.17144H12.9707V6.7863H10.4952V6.17144ZM8.81382 11.1887C8.69744 11.38 8.55281 11.5414 8.37895 11.6716C8.18334 11.822 7.95158 11.9251 7.68525 11.9802C7.41812 12.0354 7.12887 12.0632 6.81729 12.0632H4.04922V5.91656H7.01783C7.76606 5.92881 8.29656 6.14556 8.60991 6.57134C8.79781 6.83254 8.89107 7.1457 8.89107 7.51003C8.89107 7.88583 8.79682 8.18654 8.60695 8.41494C8.50144 8.54297 8.34536 8.65954 8.13889 8.76465C8.45165 8.87905 8.68895 9.05944 8.8476 9.3076C9.00724 9.55497 9.08707 9.85528 9.08707 10.208C9.08687 10.5727 8.99697 10.8999 8.81382 11.1887ZM13.9269 9.99438H10.7212C10.7388 10.437 10.8917 10.7464 11.1814 10.9234C11.3561 11.0344 11.5679 11.0888 11.816 11.0888C12.0776 11.0888 12.2908 11.0226 12.4548 10.8866C12.5443 10.8145 12.6231 10.713 12.6913 10.5845H13.8663C13.8355 10.8459 13.694 11.1109 13.4397 11.3804C13.0457 11.8085 12.4933 12.0231 11.7838 12.0231C11.1976 12.0231 10.6811 11.8421 10.2328 11.4814C9.7859 11.1194 9.56145 10.5322 9.56145 9.71757C9.56145 8.95374 9.76298 8.3691 10.1672 7.96209C10.5731 7.55429 11.0968 7.35138 11.7423 7.35138C12.125 7.35138 12.47 7.41974 12.7776 7.55725C13.0845 7.69497 13.338 7.91151 13.5377 8.20926C13.7185 8.47145 13.8347 8.77473 13.8888 9.1199C13.9188 9.32123 13.9325 9.61305 13.9269 9.99438Z" fill="black"/></g><defs><clipPath id="clip0_bereal"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>';

const threadsIcon =
  '<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.98612 6.768C5.68237 6.5655 4.67438 5.86575 4.67438 5.86575C5.52488 4.64963 6.6465 4.176 8.19788 4.176C9.29475 4.176 10.2262 4.54387 10.8911 5.2425C11.556 5.94112 11.9351 6.94012 12.0217 8.217C12.3907 8.37225 12.7301 8.55375 13.0399 8.7615C14.2875 9.59963 14.9738 10.854 14.9738 12.2906C14.9738 15.3461 12.4695 18 7.93575 18C4.04325 18 0 15.7354 0 8.99325C0 2.28825 3.91725 0 7.9245 0C9.77625 0 14.1187 0.273374 15.75 5.6655L14.22 6.06262C12.9555 2.22075 10.3084 1.60875 7.88175 1.60875C3.87112 1.60875 1.602 4.05113 1.602 9.2475C1.602 13.9084 4.13775 16.3834 7.93575 16.3834C11.0599 16.3834 13.3886 14.76 13.3886 12.3829C13.3886 10.7651 12.0296 9.99 11.9599 9.99C11.6944 11.3783 10.9834 13.7137 7.86037 13.7137C6.04012 13.7137 4.47075 12.456 4.47075 10.809C4.47075 8.45775 6.70275 7.60613 8.4645 7.60613C9.12375 7.60613 9.92025 7.65112 10.3354 7.73438C10.3354 7.01775 9.72787 5.79037 8.19788 5.79037C6.79162 5.79037 6.43613 6.246 5.985 6.76687L5.98612 6.768ZM8.6805 9.21375C6.3855 9.21375 6.0885 10.1925 6.0885 10.8068C6.0885 11.7945 7.26188 12.1208 7.8885 12.1208C9.036 12.1208 10.2139 11.8035 10.3995 9.39487C9.83623 9.26346 9.25879 9.20262 8.6805 9.21375Z" fill="black"/></svg>';

const plusIcon =
  '<svg width="16" height="16" viewBox="0 -960 960 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" fill="#000000"/></svg>';

const profileStats = [
  { value: "23.9K", label: "Likes" },
  { value: "163", label: "Posts" },
  { value: "23.9K", label: "Views" },
];

export default function CardTailwindStyling() {
  useEffect(() => {
    registerIconFromText("instagram", instagramIcon, "material");
    registerIconFromText("bereal", berealIcon, "material");
    registerIconFromText("threads", threadsIcon, "material");
    registerIconFromText("plus", plusIcon, "material");
  }, []);

  return (
    <div className='sample font-["Aktiv_Grotesk",Arial,sans-serif]'>
      <IgrCard className="[--ig-card-border-radius:30px] [--ig-card-outline-color:transparent]">
        <IgrCardMedia className="h-[189px]">
          <img
            className="object-cover"
            src="https://dl.infragistics.com/x/img/avatars/image-bg4.png"
            alt="Cafe interior"
          />
        </IgrCardMedia>
        <IgrCardHeader>
          <IgrAvatar
            className="[--ig-size:var(--ig-size-medium)]"
            slot="thumbnail"
            shape="circle"
            src="https://dl.infragistics.com/x/img/avatars/avatar-profile-09.png"
            alt="A profile photo of Kate Thompson."
          />
          <span slot="title">Kate Thompson</span>
        </IgrCardHeader>
        <p className="card-sample-custom-subtitle">
          3D Artist. Turning polygons into worlds and immersive digital
          realities
        </p>
        <IgrCardContent>
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr]">
            {profileStats.map((stat, index) => (
              <React.Fragment key={stat.label}>
                <div className="flex min-w-0 flex-col items-center gap-1 px-3">
                  <span className="stats-title">{stat.value}</span>
                  <span className="stats-subtitle">{stat.label}</span>
                </div>
                {index < profileStats.length - 1 && (
                  <IgrDivider className="h-12" vertical />
                )}
              </React.Fragment>
            ))}
          </div>
        </IgrCardContent>
        <IgrCardActions>
          <IgrButton className="[--ig-contained-button-active-background:var(--ig-gray-400)] [--ig-contained-button-active-foreground:#000000] [--ig-contained-button-background:var(--ig-gray-200)] [--ig-contained-button-border-radius:16px] [--ig-contained-button-focus-background:var(--ig-gray-300)] [--ig-contained-button-focus-foreground:#000000] [--ig-contained-button-foreground:#000000] [--ig-contained-button-hover-background:var(--ig-gray-300)] [--ig-contained-button-hover-foreground:#000000] [--ig-contained-button-icon-color:#000000] [--ig-size:var(--ig-size-small)]">
            <span className="inline-flex items-center gap-1">
              <span>FOLLOW</span>
              <IgrIcon name="plus" collection="material" />
            </span>
          </IgrButton>
          <div slot="end" className="inline-flex gap-1">
            <IgrIconButton
              variant="flat"
              name="instagram"
              collection="material"
              aria-label="Open Instagram profile"
            />
            <IgrIconButton
              variant="flat"
              name="bereal"
              collection="material"
              aria-label="Open BeReal profile"
            />
            <IgrIconButton
              variant="flat"
              name="threads"
              collection="material"
              aria-label="Open Threads profile"
            />
          </div>
        </IgrCardActions>
      </IgrCard>

      <IgrCard className="[--ig-card-border-radius:30px] [--ig-card-outline-color:transparent]">
        <IgrCardHeader>
          <span
            slot="thumbnail"
            className="inline-flex rounded-full p-[5px] bg-[linear-gradient(40deg,#D2F586,#A0C9FF)]"
          >
            <IgrAvatar
              className="[--ig-size:var(--ig-size-medium)]"
              shape="circle"
              src="https://dl.infragistics.com/x/img/avatars/avatar-profile-09.png"
              alt="A profile photo of Kate Thompson."
            />
          </span>
          <span slot="title">Kate Thompson</span>
        </IgrCardHeader>
        <p className="card-sample-custom-subtitle">
          3D Artist. Turning polygons into worlds and immersive digital
          realities
        </p>
        <IgrCardContent>
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr]">
            {profileStats.map((stat, index) => (
              <React.Fragment key={stat.label}>
                <div className="flex min-w-0 flex-col items-center gap-1 px-3">
                  <span className="stats-title">{stat.value}</span>
                  <span className="stats-subtitle">{stat.label}</span>
                </div>
                {index < profileStats.length - 1 && (
                  <IgrDivider className="h-12" vertical />
                )}
              </React.Fragment>
            ))}
          </div>
        </IgrCardContent>
        <IgrCardActions>
          <IgrButton className="[--ig-contained-button-active-background:var(--ig-gray-400)] [--ig-contained-button-active-foreground:#000000] [--ig-contained-button-background:var(--ig-gray-200)] [--ig-contained-button-border-radius:16px] [--ig-contained-button-focus-background:var(--ig-gray-300)] [--ig-contained-button-focus-foreground:#000000] [--ig-contained-button-foreground:#000000] [--ig-contained-button-hover-background:var(--ig-gray-300)] [--ig-contained-button-hover-foreground:#000000] [--ig-contained-button-icon-color:#000000] [--ig-size:var(--ig-size-small)]">
            <span className="inline-flex items-center gap-1">
              <span>FOLLOW</span>
              <IgrIcon name="plus" collection="material" />
            </span>
          </IgrButton>
          <div slot="end" className="inline-flex items-center gap-1">
            <IgrIconButton
              variant="flat"
              name="instagram"
              collection="material"
              aria-label="Open Instagram profile"
            />
            <IgrIconButton
              variant="flat"
              name="bereal"
              collection="material"
              aria-label="Open BeReal profile"
            />
            <IgrIconButton
              variant="flat"
              name="threads"
              collection="material"
              aria-label="Open Threads profile"
            />
          </div>
        </IgrCardActions>
      </IgrCard>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<CardTailwindStyling />);
```

## Accessibility

The card is a container. Grouping and media semantics come from the card regions, while keyboard operability and accessible names come from the content you place inside them.

### Keyboard Interaction

The card and its header, media, content, and actions regions declare no key handlers and are not in the tab order. Focus moves through the focusable content you place inside them, in DOM order.

| Key | Action |
| -- | -- |
| <kbd>Tab</kbd> | Moves focus to the next focusable element inside the card, such as a button or link in the content or actions area. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves focus to the previous focusable element inside the card. |

The actions area always renders its leading region, then its centered content, then its trailing region. Switching the actions to a vertical layout restyles them without reordering the DOM, so keyboard and screen reader order stay the same.

### Screen Readers / ARIA

- The card and every card region render plain slots and set no `role` or `aria-*` attributes. The wrapper elements inside the header have no accessible name and create no landmarks. Add a role and an accessible name on the card host yourself when your information architecture needs one.
- The `title` and `subtitle` slots render whatever element you pass and do not impose a heading level.
- Add `alt` text to images in the media region.
- Give icon-only buttons in the actions area an accessible name; the icon alone provides none.
- Use a single interactive element when the whole card triggers one action, rather than attaching a click handler to the container, so the action keeps a role and a name.

### Accessibility Compliance

Infragistics documents Ignite UI for React accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| -- | -- |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) | The card regions project slotted content without rewriting it, so headings, text, lists, media, and controls keep their native semantics. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) | The card adds no key handling and no focus traps of its own, so keyboard-operable content inside it stays operable. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html) | The actions area renders its `start` slot, default slot, and `end` slot in a fixed DOM order that the vertical orientation does not change. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) | The card sets no implicit role, which leaves the name, role, and value of every control to the content you supply. |

Your responsibilities:

- Pass a real heading element to the title so the card takes its place in the document outline, and keep the subtitle as plain text.
- Provide alternative text for meaningful media, and give the media region an accessible name wherever it is exposed as an image.
- Give icon-only action buttons an accessible name.
- Keep DOM order and visual order aligned when you build horizontal or split card layouts with CSS.
- Keep sufficient contrast when overriding card colors.

## API References

Use these API references for the complete card, card section, and supporting component APIs.

[`IgrCard`](mcp:get_api_reference?platform=react&component=IgrCard)
[`IgrCardActions`](mcp:get_api_reference?platform=react&component=IgrCardActions)
[`IgrCardContent`](mcp:get_api_reference?platform=react&component=IgrCardContent)
[`IgrCardHeader`](mcp:get_api_reference?platform=react&component=IgrCardHeader)
[`IgrCardMedia`](mcp:get_api_reference?platform=react&component=IgrCardMedia)
[`IgrAvatar`](mcp:get_api_reference?platform=react&component=IgrAvatar)
[`IgrButton`](mcp:get_api_reference?platform=react&component=IgrButton)
[`IgrIconButton`](mcp:get_api_reference?platform=react&component=IgrIconButton)
[`IgrIcon`](mcp:get_api_reference?platform=react&component=IgrIcon)
[`IgrRipple`](mcp:get_api_reference?platform=react&component=IgrRipple)

## Dependencies

The card uses its own header, media, content, and actions sub-components. Cards that include thumbnails, actions, icons, or ripples also depend on the corresponding [`IgrAvatar`](mcp:get_api_reference?platform=react&component=IgrAvatar), [`IgrButton`](mcp:get_api_reference?platform=react&component=IgrButton), [`IgrIconButton`](mcp:get_api_reference?platform=react&component=IgrIconButton), [`IgrIcon`](mcp:get_api_reference?platform=react&component=IgrIcon), and [`IgrRipple`](mcp:get_api_reference?platform=react&component=IgrRipple) components.

Import the card wrappers and any supporting wrappers that your card content uses. Include a Ignite UI for React theme stylesheet once in your application.

## Additional Resources

Use these resources to continue with Ignite UI for React Card support, source, and related layout guidance.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

## Related Components

Use the [Grid](../grids/data-grid.md) when users need dense tabular data with sorting, filtering, and column-level interaction. Use the [List](../grids/list.md) when repeated items should remain compact and primarily vertical.

## FAQ

  **Q: How do I make an entire card clickable without breaking screen readers?**

    The card is a plain container and adds no interactive behavior, so wrapping the whole card in a link is a common but harmful shortcut: the accessible name of that link becomes every piece of text in the card. Put a real link or button on the card title instead, then stretch it over the card with an absolutely positioned pseudo-element that covers the card box. The title stays the accessible name, the whole rectangle stays clickable, and text selection and middle-click keep working.
  
  **Q: How do I make cards in a row or grid the same height?**

    The card sizes itself from its content and does not equalize heights across siblings. Lay the cards out in a CSS grid or a flex row so each card stretches to the row height, give the media region a fixed height or `aspect-ratio`, and clamp the title and body to a set number of lines with `-webkit-line-clamp`. Unequal card heights almost always come from letting each image and each paragraph decide its own height.
  
  **Q: Why is my card image cropped, and how do I control its size?**

    The card media region stretches its content to the full width and height of the region and applies `object-fit: cover`, so the image is cropped rather than distorted. Size the media region itself with CSS `height` or `aspect-ratio`; changing the dimensions of the image inside has no effect.
  
  **Q: Why do my card actions appear in a different region than the one I placed them in?**

    Content in the `end` slot of the card actions takes an automatic leading margin so it aligns with the opposite edge of the actions area, which makes a single trailing action look detached from the rest. Move the element to the `start` slot or to the default slot when it belongs with the other actions. The three regions always render in `start`, default, `end` order regardless of the orientation.
  
  **Q: When should I use Grid or List instead of Card?**

    Use Grid when the data is dense and tabular and readers need to scan, sort, or compare across columns, and use List when many short, uniform rows must fit in a small space. Use Card when each item deserves its own media, longer text, and its own actions. A long scroll of cards is usually a list in disguise.
  


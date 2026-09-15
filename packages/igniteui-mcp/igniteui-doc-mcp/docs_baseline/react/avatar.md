---
title: React Avatar | Layout Controls | Infragistics
_description: Use Infragistics' React avatar component to display an image, icon, or initials.
_keywords: avatar, layout, Ignite UI for React, Infragistics
_license: MIT
mentionedTypes: ["Avatar"]
_tocName: Avatar
---

# React Avatar

The Ignite UI for React Avatar helps to display initials, images, or icons in your application.

## React Icon Avatar Example



<div class="divider--half"></div>

## Usage

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrAvatar`](mcp:get_api_reference?platform=react&component=IgrAvatar) and its necessary CSS, like so:

```tsx
import { IgrAvatar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

Before using the [`IgrAvatar`](mcp:get_api_reference?platform=react&component=IgrAvatar), you need to register it as follows:

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

The [`IgrAvatar`](mcp:get_api_reference?platform=react&component=IgrAvatar) is capable of displaying images, initials, or any other content, including icons. Declaring an [`IgrAvatar`](mcp:get_api_reference?platform=react&component=IgrAvatar) is as simple as:

```tsx
<IgrAvatar />
```

The avatar has several attributes that allow rendering different content based on the context. The most basic way to display content in the boundaries of the avatar is to provide content between the opening and closing tags.

```tsx
<IgrAvatar>
    <IgrIcon name="home" />
</IgrAvatar>
```

### Initials

If the [`initials`](mcp:get_api_reference?platform=react&component=IgrAvatar&member=initials) attribute is set all children elements of the avatar will be ignored and the string passed to this attribute will be displayed.

```tsx
<IgrAvatar initials="AZ">
    <IgrIcon name="home" />
</IgrAvatar>
```



### Image

The avatar can also display an image when the [`src`](mcp:get_api_reference?platform=react&component=IgrAvatar&member=src) attribute is assigned a valid URL to a static asset. In that case the [`initials`](mcp:get_api_reference?platform=react&component=IgrAvatar&member=initials) value will be ignored and children elements will not be rendered.

```tsx
<IgrAvatar initials="AZ"
           src="https://static.infragistics.com/xplatform/images/people/men/1.jpg"
           alt="A photo of a man.">
    <IgrIcon name="home" />
</IgrAvatar>
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function AvatarImage() {

    return (
        <div className="container sample">
            <IgrAvatar src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png" alt="A photo of a man." />
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AvatarImage/>);
```

### Shape

The avatar supports three shapes - `circle`, `rounded`, and `square`. The default shape of the avatar is `square` and it can be changed via the `shape` attribute.

```css
.avatar-shape-sample {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: auto auto;
  place-content: center;
  place-items: center;
  column-gap: 2.5rem;
  row-gap: 0.5rem;
  height: 100vh;
  padding: 2rem;
}

:where(igc-avatar) {
  --ig-size: var(--ig-size-small);
  grid-row: 1;
}

:where(span) {
  grid-row: 2;
  text-align: center;
  color: var(--ig-gray-600);
  font-family: "Aktiv Grotesk", Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0;
}

:where(igc-badge) {
  --ig-size: var(--ig-size-small);
  --ig-badge-icon-color: #ffffff;
  --ig-badge-text-color: #ffffff;

  position: absolute;
  inset-block-start: anchor(85.5%);
  inset-inline-start: anchor(85.5%);
  translate: -50% -50%;
}

.avatar-shape-sample igc-avatar:nth-of-type(1) {
  anchor-name: --circle;
}

.avatar-shape-sample igc-avatar:nth-of-type(2) {
  anchor-name: --square;
}

.avatar-shape-sample igc-avatar:nth-of-type(3) {
  anchor-name: --rounded;
}

.avatar-shape-sample igc-badge:nth-of-type(1) {
  position-anchor: --circle;
}

.avatar-shape-sample igc-badge:nth-of-type(2) {
  position-anchor: --square;
}

.avatar-shape-sample igc-badge:nth-of-type(3) {
  position-anchor: --rounded;
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrAvatar,
  IgrBadge,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const mailIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>';

const checkIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m9 16.17-4.17-4.17-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z"/></svg>';

export default function AvatarShape() {
  useEffect(() => {
    registerIconFromText("mail", mailIcon, "material");
    registerIconFromText("check", checkIcon, "material");
  }, []);

  return (
    <div className="avatar-shape-sample">
      <IgrAvatar
        shape="circle"
        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png"
        alt="A profile photo of a man."
      />
      <IgrBadge dot={true} outlined={true} variant="success" />
      <span>Circle</span>

      <IgrAvatar shape="square">
        <IgrIcon name="mail" collection="material" />
      </IgrAvatar>
      <IgrBadge outlined={true} shape="square" variant="info">
        2
      </IgrBadge>
      <span>Square</span>

      <IgrAvatar
        shape="rounded"
        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png"
        alt="A profile photo of a man."
      />
      <IgrBadge outlined={true} shape="rounded" variant="success">
        <IgrIcon name="check" collection="material" />
      </IgrBadge>
      <span>Rounded</span>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AvatarShape />);
```

### Size

Apart from the shape, the size of the avatar can also be changed by utilizing the `--ig-size` CSS variable. The supported sizes are `small` (default), `medium`, and `large`. The following code snippet shows how to use a different component size:

```css
igc-avatar {
  --ig-size: var(--ig-size-large);
}
```

```css
.avatar-size-sample {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: auto auto;
  place-content: center;
  place-items: center;
  column-gap: 3rem;
  row-gap: 0.5rem;
  height: 100vh;
  padding: 2rem;
}

:where(igc-avatar) {
  grid-row: 1;
}

:where(span) {
  grid-row: 2;
  text-align: center;
  color: var(--ig-gray-600);
  font-family: "Aktiv Grotesk", Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0;
}

:where(igc-badge) {
  position: absolute;
  inset-block-start: anchor(85.5%);
  inset-inline-start: anchor(85.5%);
  translate: -50% -50%;
}

.avatar-size-sample igc-avatar:nth-of-type(1) {
  --ig-size: var(--ig-size-large);
  anchor-name: --large;
}

.avatar-size-sample igc-avatar:nth-of-type(2) {
  --ig-size: var(--ig-size-medium);
  anchor-name: --medium;
}

.avatar-size-sample igc-avatar:nth-of-type(3) {
  --ig-size: var(--ig-size-small);
  anchor-name: --small;
}

.avatar-size-sample igc-badge:nth-of-type(1) {
  --ig-size: var(--ig-size-large);
  position-anchor: --large;
}

.avatar-size-sample igc-badge:nth-of-type(2) {
  --ig-size: var(--ig-size-medium);
  position-anchor: --medium;
}

.avatar-size-sample igc-badge:nth-of-type(3) {
  --ig-size: var(--ig-size-small);
  position-anchor: --small;
}
```
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrAvatar, IgrBadge } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function AvatarSize() {
  return (
    <div className="avatar-size-sample">
      <IgrAvatar
        shape="circle"
        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-05.png"
        alt="A profile photo of a man."
      />
      <IgrBadge dot={true} outlined={true} variant="success" />
      <span>Large</span>

      <IgrAvatar
        shape="circle"
        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-03.png"
        alt="A profile photo of a man."
      />
      <IgrBadge dot={true} outlined={true} variant="success" />
      <span>Medium</span>

      <IgrAvatar
        shape="circle"
        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
        alt="A profile photo of a man."
      />
      <IgrBadge dot={true} outlined={true} variant="success" />
      <span>Small</span>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AvatarSize />);
```

### Styling

The [`IgrAvatar`](mcp:get_api_reference?platform=react&component=IgrAvatar) component exposes several CSS parts, giving you full control over its style:

|Name|Description|
|--|--|
| `base` | The base wrapper of the avatar. |
| `initials` | The initials wrapper of the avatar. |
| `image` | The image wrapper of the avatar. |
| `icon` | The icon wrapper of the avatar. |

```css
igc-avatar::part(base) {
  --size: 60px;
  color: var(--ig-success-500-contrast);
  background: var(--ig-success-500);;
  border-radius: 20px;
}
```

```typescript
export const checkIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m9 16.17-4.17-4.17-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z"/></svg>';

export const calendarTodayIcon =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V8H20V21Z" fill="#424242"/></svg>';

export const xIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';

export const horizontalRuleIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M160-440v-80h640v80H160Z"/></svg>';

export const peopleIcon =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="#424242"/></svg>';
```
```css
.sample {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.chat-list {
  --ig-list-header-text-color: var(--ig-gray-900);
  max-width: 20.5rem;
}

.chat-list * {
  font-family: "Aktiv Grotesk", Arial, sans-serif;
}

.chat-list [slot="title"] {
  font-weight: 600;
}

.chat-list [slot="end"] {
  color: var(--ig-gray-600);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.chat-list-item--split {
  --border-width: 0.0625rem;
  --border-color: var(--ig-gray-300);
}

:where(igc-avatar) {
  --ig-size: var(--ig-size-small);
  --ig-avatar-background: var(--ig-gray-300);
  --ig-avatar-color: var(--ig-gray-300-contrast);
  --ig-avatar-icon-color: var(--ig-gray-300-contrast);
}

.avatar-icon {
  --ig-size: var(--ig-size-small);
}

.avatar-with-badge {
  position: relative;
}

:where(igc-badge) {
  --ig-size: var(--ig-size-small);
  --ig-badge-icon-color: #ffffff;
  --ig-badge-text-color: #ffffff;
}

.avatar-status {
  --ig-size: var(--ig-size-small);
  position: absolute;
  inset-inline-end: -0.25rem;
  inset-block-end: -0.25rem;
}

.avatar-muted-badge {
  --ig-badge-background-color: var(--ig-gray-500);
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrList,
  IgrListHeader,
  IgrListItem,
  IgrAvatar,
  IgrBadge,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import {
  calendarTodayIcon,
  checkIcon,
  horizontalRuleIcon,
  peopleIcon,
  xIcon,
} from "./icons";

type AvatarListItem = {
  title: string;
  subtitle: string;
  end: string;
  avatar: {
    src?: string;
    icon?: string;
    initials?: string;
    alt: string;
    className?: string;
  };
  badge?: {
    icon: string;
    variant: "success" | "info" | "warning" | "danger" | "primary";
    className?: string;
  };
};

type AvatarListSection = {
  header: string;
  items: AvatarListItem[];
};

const sections: AvatarListSection[] = [
  {
    header: "Chats",
    items: [
      {
        title: "Nick Evans",
        subtitle: "Hi Samira, thanks for the ...",
        end: "9:44 AM",
        avatar: {
          src: "https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png",
          alt: "A profile photo of Nick Evans.",
        },
        badge: {
          icon: "check",
          variant: "success",
        },
      },
      {
        title: "James Ford",
        subtitle: "I'll send the text and im ...",
        end: "8:30 AM",
        avatar: {
          initials: "JF",
          alt: "A profile photo of Nick Evans.",
          className: "avatar-muted",
        },
        badge: {
          icon: "x",
          variant: "primary",
          className: "avatar-muted-badge",
        },
      },
      {
        title: "Kate Porter",
        subtitle: "That's great!",
        end: "Yesterday",
        avatar: {
          src: "https://dl.infragistics.com/x/img/avatars/avatar-profile-08.png",
          alt: "A profile photo of Nick Evans.",
        },
        badge: {
          icon: "horizontalRule",
          variant: "danger",
        },
      },
    ],
  },
  {
    header: "Meetings",
    items: [
      {
        title: "Weekly Meeting",
        subtitle: "https://www.infra.com",
        end: "Monday",
        avatar: {
          icon: "calendar",
          alt: "Calendar Icon.",
          className: "avatar-meeting",
        },
      },
      {
        title: "Design Discussion",
        subtitle: "https://www.infra.com",
        end: "11:30 AM",
        avatar: {
          icon: "people",
          alt: "Group Icon.",
          className: "avatar-meeting",
        },
      },
    ],
  },
];

function renderAvatar(item: AvatarListItem) {
  return (
    <IgrAvatar
      className={`profile-avatar${item.avatar.className ? ` ${item.avatar.className}` : ""}`}
      shape="circle"
      src={item.avatar.src}
      initials={item.avatar.initials}
      alt={item.avatar.alt}
    >
      {item.avatar.icon && (
        <IgrIcon className="avatar-icon" name={item.avatar.icon} collection="material" />
      )}
    </IgrAvatar>
  );
}

export default function AvatarStyling() {
  useEffect(() => {
    registerIconFromText("calendar", calendarTodayIcon, "material");
    registerIconFromText("check", checkIcon, "material");
    registerIconFromText("x", xIcon, "material");
    registerIconFromText("horizontalRule", horizontalRuleIcon, "material");
    registerIconFromText("people", peopleIcon, "material");
  }, []);

  return (
    <div className="container sample">
      <IgrList className="chat-list">
        {sections.map((section) => (
          <React.Fragment key={section.header}>
            <IgrListHeader>{section.header}</IgrListHeader>
            {section.items.map((item) => (
              <IgrListItem
                className={section.header === "Chats" ? "chat-list-item--split" : undefined}
                key={`${section.header}-${item.title}-${item.end}`}
              >
                <div className="avatar-with-badge" slot="start">
                  {renderAvatar(item)}
                  {item.badge && (
                    <IgrBadge
                      className={`avatar-status avatar-check-badge${
                        item.badge.className ? ` ${item.badge.className}` : ""
                      }`}
                      outlined={true}
                      shape="rounded"
                      variant={item.badge.variant}
                    >
                      <IgrIcon name={item.badge.icon} collection="material" />
                    </IgrBadge>
                  )}
                </div>
                <h2 slot="title">{item.title}</h2>
                <span slot="subtitle">{item.subtitle}</span>
                <div slot="end">{item.end}</div>
              </IgrListItem>
            ))}
          </React.Fragment>
        ))}
      </IgrList>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AvatarStyling />);
```

<div class="divider--half"></div>

## API References

- [`IgrAvatar`](mcp:get_api_reference?platform=react&component=IgrAvatar)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

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

```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';


const homeIcon =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

export default function AvatarIcon() {

    useEffect(() => {
        registerIconFromText("home", homeIcon, "material");
    }, []);

    return (
        <div className="container sample">
            <IgrAvatar>
                <IgrIcon name="home" collection="material" />
            </IgrAvatar>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AvatarIcon/>);
```

<div class="divider--half"></div>

## Usage

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrAvatar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html) and its necessary CSS, like so:

```tsx
import { IgrAvatar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

Before using the [`IgrAvatar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html), you need to register it as follows:

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

The [`IgrAvatar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html) is capable of displaying images, initials, or any other content, including icons. Declaring an [`IgrAvatar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html) is as simple as:

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

If the [`initials`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html#initials) attribute is set all children elements of the avatar will be ignored and the string passed to this attribute will be displayed.

```tsx
<IgrAvatar initials="AZ">
    <IgrIcon name="home" />
</IgrAvatar>
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function AvatarInitials() {

    return (
        <div className="container sample">
            <IgrAvatar initials="AZ"/>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AvatarInitials/>);
```

### Image

The avatar can also display an image when the [`src`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html#src) attribute is assigned a valid URL to a static asset. In that case the [`initials`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html#initials) value will be ignored and children elements will not be rendered.

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
            <IgrAvatar src="https://dl.infragistics.com/x/img/people/men/11.png" alt="A photo of a man." />
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AvatarImage/>);
```

### Shape

The avatar supports three shapes - `circle`, `rounded`, and `square`. The default shape of the avatar is `square` and it can be changed via the `shape` attribute.

```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const homeIcon =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

export default function AvatarShape() {

    useEffect(() => {
        registerIconFromText("home", homeIcon, "material");
    }, []);
    
    return (
        <div className="container sample">
            <IgrAvatar shape="rounded">
                <IgrIcon name="home" collection="material" />
            </IgrAvatar>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AvatarShape/>);
```

### Size

Apart from the shape, the size of the avatar can also be changed by utilizing the `--ig-size` CSS variable. The supported sizes are `small` (default), `medium`, and `large`. The following code snippet shows how to use a different component size:

```css
igc-avatar {
  --ig-size: var(--ig-size-large);
}
```

```css
.size-small {
    --ig-size: var(--ig-size-small);
}

.size-medium {
    --ig-size: var(--ig-size-medium);
}

.size-large {
    --ig-size: var(--ig-size-large);
}

.sample {
    flex-direction: row;
    gap: 10px;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function AvatarSize() {

    return (
        <div className="container sample">
            <IgrAvatar initials='L' className='size-large'/>
            <IgrAvatar initials='M' className='size-medium'/>
            <IgrAvatar initials='S' className='size-small'/>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AvatarSize/>);
```

### Styling

The [`IgrAvatar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html) component exposes several CSS parts, giving you full control over its style:

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

```css
.sizes .size-small {
    --ig-size: var(--ig-size-small);
}

.sizes .size-medium {
    --ig-size: var(--ig-size-medium);
}

.sizes .size-large,
.size-large {
    --ig-size: var(--ig-size-large);
}

.sample {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 10px;
    margin-top: 20px;
}

.sizes {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

igc-avatar::part(base) {
    background: var(--ig-success-100);
    border: 2px solid var(--ig-error-500);
}

igc-avatar::part(initials) {
    color: var(--ig-success-500-contrast);
    background: var(--ig-error-500);
    padding: 5px 10px;
    margin: 10px;
    border-radius: 50px;
    /* border: 1px solid greenyellow; */
}

igc-avatar::part(image) {
    border-radius: 20px;
    padding: 5px;
    border: 2px solid var(--ig-primary-500);
}
```
```tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';


const homeIcon =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

export default function AvatarStyling() {

    useEffect(() => {
        registerIconFromText("home", homeIcon, "material");
    }, []);
    
    return (
        <div className="container sample">

            <IgrAvatar 
                src="https://dl.infragistics.com/x/img/people/men/11.png" 
                alt="A photo of a man." 
                className='size-large'/>
            
            <div className='sizes'>
                <IgrAvatar initials='L' className='size-large'/>
                <IgrAvatar initials='M' className='size-medium'/>
                <IgrAvatar initials='S' className='size-small'/>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AvatarStyling/>);
```

<div class="divider--half"></div>

## API References

- [`IgrAvatar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

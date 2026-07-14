---
title: React Badge | Infragistics
_description: Infragistics' React Badge component allows you to display content in a predefined style to decorate other components anywhere in an application.
_keywords: React, UI controls, web widgets, UI widgets, Web Components, React Badge Components, Infragistics
_license: MIT
mentionedTypes: ["Badge"]
_tocName: Badge
---

# React Badge Overview

The Ignite UI for React Badge is a component used in conjunction with avatars, navigation menus, or other components in an application when a visual notification is needed. Badges are usually designed with predefined styles to communicate information, success, warnings, or errors.

## React Badge Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.wrapper {
  position: relative;
  display: flex;
  width: fit-content;
  align-items: center;
  margin-block: 1rem;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid var(--ig-gray-300);
  border-radius: .25rem;
}

igc-avatar {
  @container style(--ig-theme: indigo) {
    --ig-size: var(--ig-size-large);
  }

  anchor-name: --avatar;
}

igc-badge {
  --size: .75rem;

  position: absolute;
  inset-block-end: anchor(--avatar bottom);
  inset-inline-end: anchor(--avatar right);
}

span {
  display: block;
  font-weight: 600;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBadge, IgrAvatar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class BadgeOutlined extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <section className="wrapper">
        <header>
          <IgrAvatar initials="TO" shape="circle" />
          <IgrBadge outlined={true} variant="danger" />
        </header>
        <span>Terrance Orta</span>
      </section>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeOutlined />);
```

<div class="divider"></div>

## Usage

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrBadge`](mcp:get_api_reference?platform=react&component=IgrBadge) and its necessary CSS like so:

```tsx
import { IgrBadge } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

The simplest way to start using the [`IgrBadge`](mcp:get_api_reference?platform=react&component=IgrBadge) is as follows:

```tsx
<IgrBadge />
```

To display a subtle border around the badge, you can set the [`outlined`](mcp:get_api_reference?platform=react&component=IgrBadge&member=outlined) attribute of the badge.

```tsx
<IgrBadge outlined={true} ></IgrBadge>
```

## Examples

### Variants

The Ignite UI for React badge supports several pre-defined stylistic variants. You can change the variant by assigning one of the supported values - `primary`(default), `info`, `success`, `warning`, or `danger` to the [`variant`](mcp:get_api_reference?platform=react&component=IgrBadge&member=variant) attribute.

```tsx
<IgrBadge variant="success" ></IgrBadge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBadge } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class BadgeVariants extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
			<div className="sample">
                <IgrBadge variant="success" />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeVariants/>);
```

### Shape

The badge component supports `rounded`(default) and `square` shapes. These values can be assigned to the [`shape`](mcp:get_api_reference?platform=react&component=IgrBadge&member=shape) attribute.

```tsx
<IgrBadge shape="square" ></IgrBadge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBadge } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class BadgeShape extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
			<div className="sample">
                 <IgrBadge shape="square" />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeShape/>);
```

### Dot

The Ignite UI for React badge component can also render as a minimal dot indicator for notifications by setting its `dot` attribute. Dot badges do not support content, but they can be outlined and can use any of the available dot types (e.g., primary, success, info, etc.).

```tsx
<IgrBadge dot={true} ></IgrBadge>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrBadge } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class BadgeDot extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="sample">
        <IgrBadge dot={true} />
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeDot />);
```

## Styling

The [`IgrBadge`](mcp:get_api_reference?platform=react&component=IgrBadge) component exposes a `base` CSS part that can be used to change all of its style properties.

```css
igc-badge::part(base) {
    --background-color: var(--ig-error-A100);
    --border-radius: 2px;
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-badge::part(base) {
    --background-color: var(--ig-error-A100);
    --border-radius: 2px;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBadge } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class BadgeStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
			<div className="sample">
                 <IgrBadge shape="square" />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeStyling/>);
```

<div class="divider--half"></div>

## API References

- [`IgrBadge`](mcp:get_api_reference?platform=react&component=IgrBadge)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

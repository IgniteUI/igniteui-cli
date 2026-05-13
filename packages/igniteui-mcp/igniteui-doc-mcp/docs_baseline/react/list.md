---
title: React List Component | Infragistics
_description: Infragistics' React List component helps you with presenting a group of items. Learn how Ignite UI for React can help you better display your data!
_keywords: React List, Item List, overview, Ignite UI for React, data binding, Infragistics
_license: MIT
mentionedTypes: ["List", "ListHeader", "ListItem", "Avatar", "Button", "RadioGroup", "Radio"]
_tocName: List
---

# React List Overview

The Ignite UI for React List element is extremely useful when presenting a group of items. You can create a simple list of textual items, or a more complex one, containing an array of different layout elements. The [`IgrList`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlist.html) component displays rows of items and supports one or more headers as well. Each list item is completely templatable and will support any valid HTML or other components.

## React List Example

The following example represents a list populated with contacts with a name and a phone number properties. The [`IgrList`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlist.html) component demonstrated below uses the [`IgrAvatar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html) and [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html) elements to enrich the user experience and expose the capabilities of setting avatar picture and buttons for text and call actions.

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
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrList, IgrListItem, IgrListHeader, IgrRadioGroup, IgrRadio, IgrAvatar, IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ListOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);        
        this.state = { listSize: "medium" };
        this.onRadioChange = this.onRadioChange.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrRadioGroup alignment="horizontal" style={{marginBottom: '10px'}}>
                    <IgrRadio name="size" value="small" labelPosition="after" checked={this.state.listSize === "small" } onChange={this.onRadioChange}>
                        <span>Small</span>
                    </IgrRadio>
                    <IgrRadio name="size" value="medium" labelPosition="after" checked={this.state.listSize === "medium" } onChange={this.onRadioChange}>
                        <span>Medium</span>
                    </IgrRadio>
                    <IgrRadio name="size" value="large" labelPosition="after" checked={ this.state.listSize === "large" } onChange={this.onRadioChange}>
                        <span>Large</span>
                    </IgrRadio>
                </IgrRadioGroup>

                <IgrList className={'size-' + this.state.listSize}>
                    <IgrListHeader>
                        <span>Contacts</span>
                    </IgrListHeader>
                    <IgrListItem>
                        <div slot="start">
                            <IgrAvatar src="https://dl.infragistics.com/x/img/avatars/8.jpg" shape="circle" />
                        </div>                        
                        <h2 slot="title">Terrance Orta</h2>
                        <span slot="subtitle">770-504-2217</span>
                        <div slot="end">
                            <IgrButton variant="outlined">
                                <span>Text</span>
                            </IgrButton>
                        </div>
                        <div slot="end">
                            <IgrButton variant="outlined">
                                <span>Call</span>
                            </IgrButton>
                        </div>
                    </IgrListItem>
                    <IgrListItem>
                        <div slot="start">
                            <IgrAvatar src="https://dl.infragistics.com/x/img/avatars/17.jpg" shape="circle" />
                        </div>
                        <h2 slot="title">Richard Mahoney</h2>
                        <span slot="subtitle">423-676-2869</span>
                        <div slot="end">
                            <IgrButton variant="outlined">
                                <span>Text</span>
                            </IgrButton>
                        </div>
                        <div slot="end">
                            <IgrButton variant="outlined">
                                <span>Call</span>
                            </IgrButton>
                        </div>
                    </IgrListItem>
                    <IgrListItem>
                        <div slot="start">
                            <IgrAvatar src="https://dl.infragistics.com/x/img/avatars/9.jpg" shape="circle" />
                        </div>
                        <h2 slot="title">Donna Price</h2>
                        <span slot="subtitle">859-496-2817</span>
                        <div slot="end">
                            <IgrButton variant="outlined">
                                <span>Text</span>
                            </IgrButton>
                        </div>
                        <div slot="end">
                            <IgrButton variant="outlined">
                                <span>Call</span>
                            </IgrButton>
                        </div>
                    </IgrListItem>
                </IgrList>
            </div>
        );
    }

    public onRadioChange(e: any) {
        if (e.detail.checked == true) {
            this.setState({ listSize: e.detail.value });
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListOverview/>);
```

<div class="divider--half"></div>

## Usage

At its core the list web component allows you to easily display a vertical list of items.

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrList`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlist.html) and its necessary CSS, like so:

```tsx
import { IgrList, IgrListHeader, IgrListItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

Before using the [`IgrList`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlist.html), you need to register it as follows:

For a complete introduction to the Ignite UI for React, read the [**Getting Started**](../general-getting-started.md) topic.

### Add List Items

Now, we can add the following code to get a simple list of items:

```tsx
<IgrList>
    <IgrListHeader>
        <span>Header</span>
    </IgrListHeader>
    <IgrListItem>
        <h2 slot="title">Item 1</h2>
    </IgrListItem>
    <IgrListItem>
        <h2 slot="title">Item 2</h2>
    </IgrListItem>
    <IgrListItem>
        <h2 slot="title">Item 3</h2>
    </IgrListItem>
</IgrList>
```

If all went well, you should see the following in your browser:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrList, IgrListItem, IgrListHeader } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ListAddListItems extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrList>
                    <IgrListHeader>
                        <span>Header</span>
                    </IgrListHeader>
                    <IgrListItem>
                        <h2 slot="title">Item 1</h2>
                    </IgrListItem>
                    <IgrListItem>
                        <h2 slot="title">Item 2</h2>
                    </IgrListItem>
                    <IgrListItem>
                        <h2 slot="title">Item 3</h2>
                    </IgrListItem>
                </IgrList>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListAddListItems/>);
```

Let's up our game a bit and enhance our list items. Say we want to create a list of contacts with a name and a phone number displayed under the name. To achieve that we can use some of the slots that come with the list items as demonstrated in the next example:

```tsx
<IgrList>
    <IgrListHeader>
        <span>Contacts</span>
    </IgrListHeader>
    <IgrListItem>
        <h2 slot="title">Terrance Orta</h2>
        <span slot="subtitle">770-504-2217</span>
    </IgrListItem>
    <IgrListItem>
        <h2 slot="title">Richard Mahoney</h2>
        <span slot="subtitle">423-676-2869</span>
    </IgrListItem>
    <IgrListItem>
        <h2 slot="title">Donna Price</h2>
        <span slot="subtitle">859-496-2817</span>
    </IgrListItem>
</IgrList>
```

After implementing the above code, our list component should now look like the following:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrList, IgrListItem, IgrListHeader } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ListItemContent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrList>
                    <IgrListHeader>
                        <span>Contacts</span>
                    </IgrListHeader>
                    <IgrListItem>
                        <h2 slot="title">Terrance Orta</h2>
                        <span slot="subtitle">770-504-2217</span>
                    </IgrListItem>
                    <IgrListItem>
                        <h2 slot="title">Richard Mahoney</h2>
                        <span slot="subtitle">423-676-2869</span>
                    </IgrListItem>
                    <IgrListItem>
                        <h2 slot="title">Donna Price</h2>
                        <span slot="subtitle">859-496-2817</span>
                    </IgrListItem>
                </IgrList>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListItemContent/>);
```

### Adding Avatar and Buttons

We can use some of our other components in conjunction with the [`IgrList`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlist.html) component to enrich the experience and add some functionality. We can have a nice picture avatar to the left of the name and phone values. Additionally, we can add some buttons to the right of them to allow the user to text and call contacts, so let's update our contacts list component to show the avatar and the buttons. We can do that by using some of the list item's slots.

```tsx
<IgrList>
    <IgrListHeader>
        <span>Contacts</span>
    </IgrListHeader>
    <IgrListItem>
        <div slot="start">
            <IgrAvatar src="https://static.infragistics.com/xplatform/images/avatars/8.jpg" shape="circle" />
        </div>
        <h2 slot="title">Terrance Orta</h2>
        <span slot="subtitle">770-504-2217</span>
        <div slot="end">
            <IgrButton variant="outlined">
                <span>Text</span>
            </IgrButton>
        </div>
        <div slot="end">
            <IgrButton variant="outlined">
                <span>Call</span>
            </IgrButton>
        </div>
    </IgrListItem>
    <IgrListItem>
        <div slot="start">
            <IgrAvatar src="https://static.infragistics.com/xplatform/images/avatars/17.jpg" shape="circle" />
        </div>
        <h2 slot="title">Richard Mahoney</h2>
        <span slot="subtitle">423-676-2869</span>
        <div slot="end">
            <IgrButton variant="outlined">
                <span>Text</span>
            </IgrButton>
        </div>
        <div slot="end">
            <IgrButton variant="outlined">
                <span>Call</span>
            </IgrButton>
        </div>
    </IgrListItem>
    <IgrListItem>
        <div slot="start">
            <IgrAvatar src="https://static.infragistics.com/xplatform/images/avatars/9.jpg" shape="circle" />
        </div>
        <h2 slot="title">Donna Price</h2>
        <span slot="subtitle">859-496-2817</span>
        <div slot="end">
            <IgrButton variant="outlined">
                <span>Text</span>
            </IgrButton>
        </div>
        <div slot="end">
            <IgrButton variant="outlined">
                <span>Call</span>
            </IgrButton>
        </div>
    </IgrListItem>
</IgrList>
```

The `start` slot is meant to be used for adding some kind of media before all other content of our list items. The target element, in our case the [`IgrAvatar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html) component, will also be provided with a default position and spacing.

The `end` slot is meant to be used for list items that have some kind of action or metadata, represented, for example, by a switch, a button, a checkbox, etc. We will use [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html) components.

Let's also allow the user to change the size of the list using the `--ig-size` CSS variable. We will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size of the list.

```tsx
<IgrRadioGroup alignment="horizontal" style={{marginBottom: '10px'}}>
    <IgrRadio name="size" value="small" labelPosition="after" checked={this.state.listSize === "small" } onChange={this.onRadioChange}>
        <span>Small</span>
    </IgrRadio>
    <IgrRadio name="size" value="medium" labelPosition="after" checked={this.state.listSize === "medium" } onChange={this.onRadioChange}>
        <span>Medium</span>
    </IgrRadio>
    <IgrRadio name="size" value="large" labelPosition="after" checked={ this.state.listSize === "large" } onChange={this.onRadioChange}>
        <span>Large</span>
    </IgrRadio>
</IgrRadioGroup>

<IgrList size={this.state.listSize} />

public onRadioChange(e: any) {
    if (e.detail.checked == true) {
        this.setState({ listSize: e.detail.value });
    }
}
```

The result of implementing the above code should look like the following:

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
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrList, IgrListItem, IgrListHeader, IgrRadioGroup, IgrRadio, IgrAvatar, IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ListOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);        
        this.state = { listSize: "medium" };
        this.onRadioChange = this.onRadioChange.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrRadioGroup alignment="horizontal" style={{marginBottom: '10px'}}>
                    <IgrRadio name="size" value="small" labelPosition="after" checked={this.state.listSize === "small" } onChange={this.onRadioChange}>
                        <span>Small</span>
                    </IgrRadio>
                    <IgrRadio name="size" value="medium" labelPosition="after" checked={this.state.listSize === "medium" } onChange={this.onRadioChange}>
                        <span>Medium</span>
                    </IgrRadio>
                    <IgrRadio name="size" value="large" labelPosition="after" checked={ this.state.listSize === "large" } onChange={this.onRadioChange}>
                        <span>Large</span>
                    </IgrRadio>
                </IgrRadioGroup>

                <IgrList className={'size-' + this.state.listSize}>
                    <IgrListHeader>
                        <span>Contacts</span>
                    </IgrListHeader>
                    <IgrListItem>
                        <div slot="start">
                            <IgrAvatar src="https://dl.infragistics.com/x/img/avatars/8.jpg" shape="circle" />
                        </div>                        
                        <h2 slot="title">Terrance Orta</h2>
                        <span slot="subtitle">770-504-2217</span>
                        <div slot="end">
                            <IgrButton variant="outlined">
                                <span>Text</span>
                            </IgrButton>
                        </div>
                        <div slot="end">
                            <IgrButton variant="outlined">
                                <span>Call</span>
                            </IgrButton>
                        </div>
                    </IgrListItem>
                    <IgrListItem>
                        <div slot="start">
                            <IgrAvatar src="https://dl.infragistics.com/x/img/avatars/17.jpg" shape="circle" />
                        </div>
                        <h2 slot="title">Richard Mahoney</h2>
                        <span slot="subtitle">423-676-2869</span>
                        <div slot="end">
                            <IgrButton variant="outlined">
                                <span>Text</span>
                            </IgrButton>
                        </div>
                        <div slot="end">
                            <IgrButton variant="outlined">
                                <span>Call</span>
                            </IgrButton>
                        </div>
                    </IgrListItem>
                    <IgrListItem>
                        <div slot="start">
                            <IgrAvatar src="https://dl.infragistics.com/x/img/avatars/9.jpg" shape="circle" />
                        </div>
                        <h2 slot="title">Donna Price</h2>
                        <span slot="subtitle">859-496-2817</span>
                        <div slot="end">
                            <IgrButton variant="outlined">
                                <span>Text</span>
                            </IgrButton>
                        </div>
                        <div slot="end">
                            <IgrButton variant="outlined">
                                <span>Call</span>
                            </IgrButton>
                        </div>
                    </IgrListItem>
                </IgrList>
            </div>
        );
    }

    public onRadioChange(e: any) {
        if (e.detail.checked == true) {
            this.setState({ listSize: e.detail.value });
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListOverview/>);
```

## Styling

The [`IgrList`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlist.html) exposes several CSS parts, giving you full control over its style:

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
    color: #3f51b5;
}

igc-list-item::part(title) {
    font-size: 18px;
    color: #3f51b5;
}

igc-list-item::part(subtitle) {
    color: #0099ff;
}

igc-list-item::part(end) {
    --igc-secondary-500: 230,48%,47%;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ListStyling.css';
import { IgrList, IgrListItem, IgrListHeader, IgrAvatar, IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ListStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrList>
                    <IgrListHeader>
                        <span>Contacts</span>
                    </IgrListHeader>
                    <IgrListItem>
                        <div slot="start">
                            <IgrAvatar src="https://dl.infragistics.com/x/img/avatars/8.jpg" shape="circle" />
                        </div>                        
                        <h2 slot="title">Terrance Orta</h2>
                        <span slot="subtitle">770-504-2217</span>
                        <div slot="end">
                            <IgrButton variant="contained">
                                <span>Text</span>
                            </IgrButton>
                        </div>
                        <div slot="end">
                            <IgrButton variant="contained">
                                <span>Call</span>
                            </IgrButton>
                        </div>
                    </IgrListItem>
                    <IgrListItem>
                        <div slot="start">
                            <IgrAvatar src="https://dl.infragistics.com/x/img/avatars/17.jpg" shape="circle" />
                        </div>
                        <h2 slot="title">Richard Mahoney</h2>
                        <span slot="subtitle">423-676-2869</span>
                        <div slot="end">
                            <IgrButton variant="contained">
                                <span>Text</span>
                            </IgrButton>
                        </div>
                        <div slot="end">
                            <IgrButton variant="contained">
                                <span>Call</span>
                            </IgrButton>
                        </div>
                    </IgrListItem>
                    <IgrListItem>
                        <div slot="start">
                            <IgrAvatar src="https://dl.infragistics.com/x/img/avatars/9.jpg" shape="circle" />
                        </div>
                        <h2 slot="title">Donna Price</h2>
                        <span slot="subtitle">859-496-2817</span>
                        <div slot="end">
                            <IgrButton variant="contained">
                                <span>Text</span>
                            </IgrButton>
                        </div>
                        <div slot="end">
                            <IgrButton variant="contained">
                                <span>Call</span>
                            </IgrButton>
                        </div>
                    </IgrListItem>
                </IgrList>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListStyling/>);
```

In this article we covered a lot of ground with the [`IgrList`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlist.html) component. First, we created a simple list with text items. Then, we created a list of contact items and added functionality to them by using some additional Ignite UI for React components, like the [`IgrAvatar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html) and [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html). Finally, we changed the component's appearance through the exposed CSS parts.

<div class="divider--half"></div>

## API References

- [`IgrAvatar`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igravatar.html)
- [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html)
- [`IgrRadioGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradiogroup.html)
- [`IgrRadio`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrradio.html)
- [`IgrListHeader`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlistheader.html)
- [`IgrListItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlistitem.html)
- [`IgrList`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrlist.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

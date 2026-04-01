---
title: React Tree Component | Infragistics
_description: With React Tree component you can display hierarchical data in a tree-view structure, customize nodes easily and load data on demand. Try it now.
_keywords: React Tree, Item Tree, overview, Ignite UI for React, Infragistics
_license: MIT
mentionedTypes: ["Tree", "TreeItem", "Icon", "CircularProgress"]
_tocName: Tree
---

# React Tree Overview

Ignite UI for React Tree, also known as TreeView component, is a high-performance control that visualizes expandable data structures within a tree-like UI, enabling you to apply load on demand for child items. The Ignite UI for React Tree also provides features like expanding and collapsing nodes, nested app navigation, Ignite UI for React Tree nodes either can be generated manually or from a bound data source.

For end-users this means they can easily navigate across different app pages, use selection, checkboxes, add texts, icons, images and more.

The Ignite UI for React Tree component allows users to represent hierarchical data in a tree-view structure, maintaining parent-child relationships, as well as to define static tree-view structure without a corresponding data model. Its primary purpose is to allow end-users to visualize and navigate within hierarchical data structures. The [`IgrTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html) component also provides load on demand capabilities, item activation, multiple and cascade selection of items through built-in checkboxes, built-in keyboard navigation and more.

## React Tree Example

In this basic Ignite UI for React Tree example, you can see how to define a tree and its items by specifying the item hierarchy.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTree, IgrTreeItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class TreeBasicExample extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrTree>
                    <IgrTreeItem label='North America'>
                        <IgrTreeItem label='United States' />
                        <IgrTreeItem label='Canada' />
                        <IgrTreeItem label='Mexico' />
                    </IgrTreeItem>
                    <IgrTreeItem label='South America'>
                        <IgrTreeItem label='Brazil' />
                        <IgrTreeItem label='Uruguay' />
                    </IgrTreeItem>
                    <IgrTreeItem label='Europe'>
                        <IgrTreeItem label='United Kingdom' />
                        <IgrTreeItem label='Germany' />
                        <IgrTreeItem label='Bulgaria' />
                    </IgrTreeItem>
                </IgrTree>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TreeBasicExample/>);
```


<div class="divider--half"></div>

## How to Use Ignite UI for React Tree With Ignite UI

<!-- React -->

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

You will then need to import the [`IgrTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html)and its necessary CSS, like so:

```tsx
import { IgrTree, IgrTreeItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

The simplest way to start using the [`IgrTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html) is as follows:

### Declaring a tree

[`IgrTreeItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtreeitem.html) is the representation of every item that belongs to the [`IgrTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html).
Items provide [`disabled`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtreeitem.html#disabled), [`active`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtreeitem.html#active), [`selected`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtreeitem.html#selected) and [`expanded`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtreeitem.html#expanded) properties, which give you opportunity to configure the states of the item as per your requirement.
The [`value`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtreeitem.html#value) property can be used to add a reference to the data entry the item represents.

Items can be bound to a data model so that their expanded and selected states are reflected in the underlying data as well.

- Declaring a tree by creating static unbound items

In order to render a tree you do not necessarily need a data set - individual items can be created without an underlying data model using the exposed [`label`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtreeitem.html#label) property or provide a custom slot content for the [`IgrTreeItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtreeitem.html) label.

```tsx
<IgrTree>
    <IgrTreeItem label='North America'>
        <IgrTreeItem label='United States' />
        <IgrTreeItem label='Canada' />
        <IgrTreeItem label='Mexico' />
    </IgrTreeItem>
    <IgrTreeItem label='South America'>
        <IgrTreeItem label='Brazil' />
        <IgrTreeItem label='Uruguay' />
    </IgrTreeItem>
    <IgrTreeItem label='Europe'>
        <IgrTreeItem label='United Kingdom' />
        <IgrTreeItem label='Germany' />
        <IgrTreeItem label='Bulgaria' />
    </IgrTreeItem>
</IgrTree>
```

> \[!Note]
> You can provide a custom slot content for each [`IgrTreeItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtreeitem.html)'s indentation, expansion and label area respectively using the provided `indentation`, `indicator` and `label` slots.

### Item Interactions

[`IgrTreeItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtreeitem.html) could be expanded or collapsed:

- by clicking on the item expand indicator (default behavior).
- by clicking on the item if the [`IgrTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html) [`toggleNodeOnClick`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html#toggleNodeOnClick) property is set to `true`.

By default, multiple items could be expanded at the same time. In order to change this behavior and allow expanding only single branch at a time, the [`singleBranchExpand`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html#singleBranchExpand) property could be enabled. This way when an item is expanded, all of the others already expanded branches in the same level will be collapsed.

## React Tree Selection

In order to setup item selection in the Ignite UI for React Tree component, you just need to set its [`selection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html#selection) property. This property accepts the following three modes: **None**, **Multiple** and **Cascade**. Below we will take a look at each of them in more detail.

### None

In the [`IgrTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html) by default item selection is disabled. Users cannot select or deselect an item through UI interaction, but these actions can still be completed through the provided API method.

### Multiple

To enable multiple item selection in the [`IgrTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html) just set the [`selection`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html#selection) property to **multiple**. This will render a checkbox for every item. Each item has two states - selected or not. This mode supports multiple selection.

```tsx
<IgrTree selection="multiple" />
```

### Cascade

To enable cascade item selection in the [`IgrTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html), just set the selection property to **cascade**. This will render a checkbox for every item.

```tsx
<IgrTree selection="cascade" />
```

In this mode a parent's selection state entirely depends on the selection state of its children. When a parent has some selected and some deselected children, its checkbox is in an indeterminate state.

## Keyboard Navigation

Keyboard navigation in [`IgrTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html) provides a rich variety of keyboard interactions for the user. This functionality is enabled by default and allows users to navigate through the items.

The [`IgrTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html) navigation is compliant with W3C accessibility standards and convenient to use.

**Key Combinations**

- <kbd>↓</kbd> - navigates to the next visible item. Marks the item as active. Does nothing if on the LAST item.
- <kbd>CTRL</kbd> + <kbd>↓</kbd> - navigates to the next visible item. Does nothing if on the LAST item.
- <kbd>↑</kbd> - navigates to the previous visible item. Marks the item as active. Does nothing if on the FIRST item.
- <kbd>CTRL</kbd> + <kbd>↑</kbd> - navigates to the previous visible item. Does nothing if on the FIRST item.
- <kbd>←</kbd> - on an expanded parent item, collapses it. If the item is collapsed or does not have children, moves to its parent item. Does nothing if there is no parent item.
- <kbd>→</kbd> - on an expanded parent item, navigates to the first child of the item. If on a collapsed parent item, expands it. Does nothing if the item does not have children.
- <kbd>HOME</kbd> - navigates to the FIRST item.
- <kbd>END</kbd> - navigates to the LAST visible item.
- <kbd>TAB</kbd> - navigates to the next focusable element on the page, outside of the tree.
- <kbd>SHIFT</kbd> + <kbd>TAB</kbd> - navigates to the previous focusable element on the page, outside of the tree.
- <kbd>SPACE</kbd> - toggles selection of the current item. Marks the node as active.
- <kbd>SHIFT</kbd> + <kbd>SPACE</kbd> - toggles selection of all items between the active one and the one pressed Space while holding <kbd>SHIFT</kbd> if selection is enabled.
- <kbd>ENTER</kbd> - activates the focused item. If the item has link in it, opens the link.
- <kbd>\*</kbd> - expands the item and all sibling items on the same level.

When selection is enabled, end-user selection of items is only allowed through the rendered checkbox. Since both selection types allow multiple selection, the following mouse and keyboard interactions are available:

- <kbd>Click</kbd> - when performed on the item checkbox, toggles selection of the item if selection is enabled. Otherwise, focuses the item
- <kbd>SHIFT</kbd> + <kbd>Click</kbd> - when performed on the item checkbox, toggles selection of all items between the active one and the one clicked while holding <kbd>SHIFT</kbd> if selection is enabled

## Styling

You can change the appearance of the [`IgrTreeItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtreeitem.html), by using some of the exposed CSS parts listed below:

| Part name | Description |
| ---------|------------ |
| `wrapper` | The wrapper for the tree item. |
| `selected`  | Indicates selected state. Applies to `wrapper`. |
| `focused` | Indicates focused state. Applies to `wrapper`. |
| `active` | Indicates an active state. Applies to `wrapper`. |
| `indicator` | The expand indicator of the tree item. |
| `label` | The tree item content. |
| `text` | The tree item displayed text. |
| `select` | The checkbox of the tree item when selection is enabled. |

Using these CSS parts we can customize thе appearance of the [`IgrTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html) component like this:

```css
igc-tree-item {
    --background-active: var(--ig-secondary-500);
    --foreground-active: var(--ig-secondary-500-contrast);
}
```

```css
igc-tree-item {
    --background-active: var(--ig-secondary-500);
    --foreground-active: var(--ig-secondary-500-contrast);
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTree, IgrTreeItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class TreeStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrTree>
                    <IgrTreeItem label='North America'>
                        <IgrTreeItem label='United States' />
                        <IgrTreeItem label='Canada' />
                        <IgrTreeItem label='Mexico' />
                    </IgrTreeItem>
                    <IgrTreeItem label='South America'>
                        <IgrTreeItem label='Brazil' />
                        <IgrTreeItem label='Uruguay' />
                    </IgrTreeItem>
                    <IgrTreeItem label='Europe'>
                        <IgrTreeItem label='United Kingdom' />
                        <IgrTreeItem label='Germany' />
                        <IgrTreeItem label='Bulgaria' />
                    </IgrTreeItem>
                </IgrTree>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TreeStyling/>);
```


<div class="divider--half"></div>

## API References

- [`IgrTree`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtree.html)
- [`IgrTreeItem`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrtreeitem.html)
- [`IgrIcon`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igricon.html)
- [`IgrCircularProgress`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcircularprogress.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

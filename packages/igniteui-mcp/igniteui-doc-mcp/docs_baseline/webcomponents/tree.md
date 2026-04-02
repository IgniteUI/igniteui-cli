---
title: Web Components Tree Component | Infragistics
_description: With Web Components Tree component you can display hierarchical data in a tree-view structure, customize nodes easily and load data on demand. Try it now.
_keywords: Web Components Tree, Item Tree, overview, Ignite UI for Web Components, Infragistics
_license: MIT
mentionedTypes: ["Tree", "TreeItem", "Icon", "CircularProgress"]
_tocName: Tree
---

# Web Components Tree Overview

Ignite UI for Web Components Tree, also known as TreeView component, is a high-performance control that visualizes expandable data structures within a tree-like UI, enabling you to apply load on demand for child items. The Ignite UI for Web Components Tree also provides features like expanding and collapsing nodes, nested app navigation, Ignite UI for Web Components Tree nodes either can be generated manually or from a bound data source.

For end-users this means they can easily navigate across different app pages, use selection, checkboxes, add texts, icons, images and more.

The Ignite UI for Web Components Tree component allows users to represent hierarchical data in a tree-view structure, maintaining parent-child relationships, as well as to define static tree-view structure without a corresponding data model. Its primary purpose is to allow end-users to visualize and navigate within hierarchical data structures. The [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html) component also provides load on demand capabilities, item activation, multiple and cascade selection of items through built-in checkboxes, built-in keyboard navigation and more.

## Web Components Tree Example

In this basic Ignite UI for Web Components Tree example, you can see how to define a tree and its items by specifying the item hierarchy.

```css
igc-tree {
    width: 320px;
    max-height: 360px;
    overflow-y: auto;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## How to Use Ignite UI for Web Components Tree With Ignite UI

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Before using the [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html), you need to register it as follows:

```ts
import { defineComponents, IgcTreeComponent } from 'igniteui-webcomponents';
defineComponents(IgcTreeComponent);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html) is as follows:

### Declaring a tree

[`IgcTreeItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreeitemcomponent.html) is the representation of every item that belongs to the [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html).
Items provide [`disabled`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreeitemcomponent.html#disabled), [`active`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreeitemcomponent.html#active), [`selected`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreeitemcomponent.html#selected) and [`expanded`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreeitemcomponent.html#expanded) properties, which give you opportunity to configure the states of the item as per your requirement.
The [`value`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreeitemcomponent.html#value) property can be used to add a reference to the data entry the item represents.

Items can be declared using one of the following approaches.

- Declaring the tree and its items by specifying the item hierarchy and iterating through a data set

```html
<igc-tree>
    ${data.map((x) => html`
        <igc-tree-item .value=${x} .expanded=${x.expanded} .label=${x.label}>
              ${x.children.map((y) => html`
                  <igc-tree-item .value=${y} .expanded=${y.expanded}>
                      <span slot="label">${y.label}</slot>
                  </igc-tree-item>
              `
        </igc-tree-item>
    `
</igc-tree>
```

Items can be bound to a data model so that their expanded and selected states are reflected in the underlying data as well.

- Declaring a tree by creating static unbound items

In order to render a tree you do not necessarily need a data set - individual items can be created without an underlying data model using the exposed [`label`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreeitemcomponent.html#label) property or provide a custom slot content for the [`IgcTreeItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreeitemcomponent.html) label.

```html
<igc-tree>
    <igc-tree-item>
        <div slot="label">
            I am a parent item 1
            <img src="hard_coded_src.webb" alt="Alt Text">
        </div>
        <igc-tree-item label="I am a child item 1">
        </igc-tree-item>
    </igc-tree-item>

    <igc-tree-item>
        <div slot="label">
            I am a parent item 2
            <img src="hard_coded_src.webb" alt="Alt Text">
        </div>
        <igc-tree-item label="I am a child item 1">
        </igc-tree-item>
    </igc-tree-item>
</igc-tree>
```

> [!Note]
> You can provide a custom slot content for each [`IgcTreeItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreeitemcomponent.html)'s indentation, expansion and label area respectively using the provided `indentation`, `indicator` and `label` slots.

### Item Interactions

[`IgcTreeItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreeitemcomponent.html) could be expanded or collapsed:

- by clicking on the item expand indicator (default behavior).
- by clicking on the item if the [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html) [`toggleNodeOnClick`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html#toggleNodeOnClick) property is set to `true`.

```html
<igc-tree toggle-node-on-click="true">
    <igc-tree-item label="North America">
        <igc-tree-item label="United States"></igc-tree-item>
        <igc-tree-item label="Canada"></igc-tree-item>
        <igc-tree-item label="Mexico"></igc-tree-item>
    </igc-tree-item>
    <igc-tree-item label="South America">
        <igc-tree-item label="Brazil"></igc-tree-item>
    </igc-tree-item>
</igc-tree>
```

By default, multiple items could be expanded at the same time. In order to change this behavior and allow expanding only single branch at a time, the [`singleBranchExpand`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html#singleBranchExpand) property could be enabled. This way when an item is expanded, all of the others already expanded branches in the same level will be collapsed.

```html
<igc-tree single-branch-expand="true">
    <igc-tree-item label="North America">
        <igc-tree-item label="United States"></igc-tree-item>
        <igc-tree-item label="Canada"></igc-tree-item>
        <igc-tree-item label="Mexico"></igc-tree-item>
    </igc-tree-item>
    <igc-tree-item label="South America">
        <igc-tree-item label="Brazil"></igc-tree-item>
    </igc-tree-item>
</igc-tree>
```

In addition, the [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html) provides the following API methods for item interactions:

- [`expand`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreeitemcomponent.html#expand) - expands all items. If an items array is passed, expands only the specified items.
- [`collapse`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreeitemcomponent.html#collapse) - collapses all items. If an items array is passed, collapses only the specified items.
- [`IgcSelectComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcselectcomponent.html) - selects all items. If an items array is passed, selects only the specified items. Does not emit `selection` event.
- `Tree.Deselect` - deselects all items. If an items array is passed, deselects only the specified items. Does not emit `selection` event.

## Web Components Tree Selection

In order to setup item selection in the Ignite UI for Web Components Tree component, you just need to set its [`selection`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html#selection) property. This property accepts the following three modes: **None**, **Multiple** and **Cascade**. Below we will take a look at each of them in more detail.

### None

In the [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html) by default item selection is disabled. Users cannot select or deselect an item through UI interaction, but these actions can still be completed through the provided API method.

### Multiple

To enable multiple item selection in the [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html) just set the [`selection`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html#selection) property to **multiple**. This will render a checkbox for every item. Each item has two states - selected or not. This mode supports multiple selection.

```html
<igc-tree selection="multiple">
</igc-tree>
```

### Cascade

To enable cascade item selection in the [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html), just set the selection property to **cascade**. This will render a checkbox for every item.

```html
<igc-tree selection="Cascade">
</igc-tree>
```

In this mode a parent's selection state entirely depends on the selection state of its children. When a parent has some selected and some deselected children, its checkbox is in an indeterminate state.

## Keyboard Navigation

Keyboard navigation in [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html) provides a rich variety of keyboard interactions for the user. This functionality is enabled by default and allows users to navigate through the items.

The [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html) navigation is compliant with W3C accessibility standards and convenient to use.

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

## Web Components Tree Load On Demand

The Ignite UI for Web Components Tree can be rendered in such way that it requires the minimal amount of data to be retrieved from the server so the user could see it as quickly as possible. With this dynamic data loading approach, only after the user expands an item, the children for that particular parent item will be retrieved. This mechanism, also known as Load on Demand, can be easily configured to work with any remote data.

```typescript
import { IgcTreeItemComponent } from "igniteui-webcomponents";
import { REMOTE_DATA, SelectableItemData } from "./LoadOnDemandData";

export class DataService {
    /**
     * As we are simulating remote data operations,
     * this set is used to store the selection state of the records before reloading.
     */
    private _selected: Set<string> = new Set<string>();

    public getChildren(parent: SelectableItemData): Promise<SelectableItemData[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const passed = REMOTE_DATA.map((item) => {
                    const selectionState: Partial<SelectableItemData> = {};
                    // If the record persists in the set it is marked as selected
                    if (this._selected.has(item.Name)) {
                        selectionState.Selected = true;
                    } else {
                        selectionState.Selected = parent.Selected;
                    }
                    return Object.assign({}, item, selectionState);
                });
                return resolve(passed);
            }, 2000);
        });
    }

    public setSelected(item: IgcTreeItemComponent) {
        const name = item.value.Name;

        if (item.value.Selected) {
            this._selected.add(name);
        } else {
            this._selected.delete(name);
        }
    }
}
```
```typescript
export interface ItemData {
    Name: string;
    Icon: string;
    Files?: ItemData[];
}

export interface SelectableItemData extends ItemData {
    Selected?: boolean;
}

export const REMOTE_DATA: ItemData[] = [
    { Name: 'DESKTOP-XYZ', Icon: 'desktop' },
    { Name: 'DESKTOP-ABC', Icon: 'desktop' },
    { Name: 'DESKTOP-123', Icon: 'desktop' }
];
export const DATA: ItemData[] = [
    {
        Name: 'Computer', Icon: 'desktop', Files: [
            {
                Name: 'Documents',
                Icon: 'docs_folder',
                Files:
                    [
                        { Name: 'Report 2016', Icon: 'report' },
                        { Name: 'Report 2017', Icon: 'report' },
                        { Name: 'Report 2018', Icon: 'report' },
                        { Name: 'Report 2019', Icon: 'report' },
                        { Name: 'Report 2020', Icon: 'report' }
                    ]
            },
            {
                Name: 'Music',
                Icon: 'album',
                Files:
                    [
                        { Name: 'Track 1', Icon: 'music' },
                        { Name: 'Track 2', Icon: 'music' },
                        { Name: 'Track 3', Icon: 'music' },
                        { Name: 'Track 4', Icon: 'music' },
                        { Name: 'Track 5', Icon: 'music' }
                    ]
            },
            {
                Name: 'Pictures',
                Icon: 'pictures',
                Files:
                    [
                        { Name: 'Image 101', Icon: 'picture' },
                        { Name: 'Image 102', Icon: 'picture' },
                        { Name: 'Image 103', Icon: 'picture' },
                        { Name: 'Image 104', Icon: 'picture' },
                        { Name: 'Image 105', Icon: 'picture' }
                    ]
            },
            {
                Name: 'Recycle Bin',
                Icon: 'bin',
                Files:
                    [
                        { Name: 'Track 6', Icon: 'music' },
                        { Name: 'Track 7', Icon: 'music' },
                        { Name: 'Image 106', Icon: 'picture' },
                        { Name: 'Image 107', Icon: 'picture' }
                    ]
            }
        ],
    },
    {
        Name: 'Network',
        Icon: 'network',
        Files: []
    }
];
```
```typescript
export const ICONS = [
    {
        name: "album",
        value: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g id="disc" transform="translate(1.000000, 1.000000)" fill-rule="nonzero">
            <path d="M9.84615385,0 C4.40829118,0 0,4.2533122 0,9.5 C0,14.7466878 4.40829118,19 9.84615385,19 C15.2840165,19 19.6923077,14.7466878 19.6923077,9.5 C19.6923077,4.2533122 15.2840165,0 9.84615385,0 Z M9.84615385,12.5121951 C8.12470994,12.5121951 6.72420263,11.1609707 6.72420263,9.5 C6.72420263,7.83902927 8.12470994,6.48780488 9.84615385,6.48780488 C11.5675977,6.48780488 12.9681051,7.83902927 12.9681051,9.5 C12.9681051,11.1609707 11.5675977,12.5121951 9.84615385,12.5121951 Z" id="Shape" fill="#69A7FF">
            </path>
            <g transform="translate(4.803002, 0.000000)">
                <path d="M8.16510319,9.5 C8.16510319,11.1609707 6.76459587,12.5121951 5.04315197,12.5121951 L5.04315197,19 C10.4810146,19 14.8893058,14.7466878 14.8893058,9.5 C14.8893058,4.2533122 10.4810146,0 5.04315197,0 L5.04315197,6.48780488 C6.76459587,6.48780488 8.16510319,7.83902927 8.16510319,9.5 Z" id="Path" fill="#4B88D5">
                </path>
                <path d="M5.04315197,4.63414634 C2.26235797,4.63414634 0,6.81696829 0,9.5 C0,12.1830317 2.26235797,14.3658537 5.04315197,14.3658537 C7.82394597,14.3658537 10.0863039,12.1830317 10.0863039,9.5 C10.0863039,6.81696829 7.82394597,4.63414634 5.04315197,4.63414634 Z M5.04315197,11.5853659 C3.85138311,11.5853659 2.88180113,10.6498707 2.88180113,9.5 C2.88180113,8.35012927 3.85138311,7.41463415 5.04315197,7.41463415 C6.23492083,7.41463415 7.20450281,8.35012927 7.20450281,9.5 C7.20450281,10.6498707 6.23492083,11.5853659 5.04315197,11.5853659 Z" id="Shape" fill="#F9F9F9">
                </path>
                <path d="M5.04315197,7.41463415 C6.23492083,7.41463415 7.20450281,8.35012927 7.20450281,9.5 C7.20450281,10.6498707 6.23492083,11.5853659 5.04315197,11.5853659 L5.04315197,14.3658537 C7.82394597,14.3658537 10.0863039,12.1830317 10.0863039,9.5 C10.0863039,6.81696829 7.82394597,4.63414634 5.04315197,4.63414634 L5.04315197,7.41463415 Z" id="Path" fill="#CBC9C2">
                </path>
            </g>
        </g>
        <path d="M11.6875,18.7773438 C11.6875,19.1335977 11.9757773,19.421875 12.3320312,19.421875 C12.6882852,19.421875 12.9765625,19.1335977 12.9765625,18.7773438 L12.9765625,11.529418 L12.3886211,10.4083203 L11.6875,11.8977461 L11.6875,18.7773438 Z" id="Path" fill="#09A76D">
        </path>
        <path d="M20.7109375,16.1992188 C20.7109375,16.5554727 20.9992148,16.84375 21.3554688,16.84375 C21.7117227,16.84375 22,16.5554727 22,16.1992188 L22,8.95125 L21.3875664,7.83719922 L20.7109375,9.31962109 L20.7109375,16.1992188 Z" id="Path" fill="#02905D">
        </path>
        <path d="M10.3984375,7.17578125 C10.3984375,8.9546875 8.9546875,10.3984375 7.17578125,10.3984375 C6.81480078,10.3984375 6.53125,10.1148008 6.53125,9.75390625 C6.53125,9.39292578 6.81480078,9.109375 7.17578125,9.109375 C8.24574609,9.109375 9.109375,8.24566016 9.109375,7.17578125 C9.109375,6.55698828 8.82582422,5.98980078 8.32304687,5.61597266 C7.29179688,4.86827344 6.11445312,3.91015625 5.19921875,2.76284766 L5.19921875,12.9765625 C5.19921875,13.337457 4.91566797,13.6210938 4.5546875,13.6210938 C4.19370703,13.6210938 3.91015625,13.337457 3.91015625,12.9765625 L3.91015625,0.64453125 C3.91015625,0.360894531 4.090625,0.115972656 4.36128516,0.0257382813 C4.42582422,0.012890625 4.49023438,0 4.5546875,0 C4.76089453,0 4.9671875,0.103082031 5.09605078,0.283550781 L5.83081641,1.40503516 C6.68164062,2.66835937 7.9234375,3.72109375 9.08355078,4.57183203 C9.90859375,5.17773438 10.3984375,6.15737891 10.3984375,7.17578125 Z" id="Path" fill="#FEA613">
        </path>
        <path d="M10.3984375,7.17578125 C10.3984375,8.9546875 8.9546875,10.3984375 7.17578125,10.3984375 C6.81480078,10.3984375 6.53125,10.1148008 6.53125,9.75390625 C6.53125,9.39292578 6.81480078,9.109375 7.17578125,9.109375 C8.24574609,9.109375 9.109375,8.24566016 9.109375,7.17578125 C9.109375,6.55698828 8.82582422,5.98980078 8.32304687,5.61597266 C7.29179688,4.86827344 6.11445312,3.91015625 5.19921875,2.76284766 L5.19921875,12.9765625 C5.19921875,13.337457 4.91566797,13.6210938 4.5546875,13.6210938 L4.5546875,0 C4.76089453,0 4.9671875,0.103082031 5.09605078,0.283550781 L5.83081641,1.40503516 C6.68164062,2.66835937 7.9234375,3.72109375 9.08355078,4.57183203 C9.90859375,5.17773438 10.3984375,6.15737891 10.3984375,7.17578125 Z" id="Path" fill="#FEA613">
        </path>
        <path d="M10.3984375,22 C8.97655859,22 7.8203125,20.84375 7.8203125,19.421875 C7.8203125,17.9999961 8.97655859,16.84375 10.3984375,16.84375 C11.8203125,16.84375 12.9765625,17.9999961 12.9765625,19.421875 C12.9765625,20.84375 11.8203125,22 10.3984375,22 Z" id="Path" fill="#57BE92">
        </path>
        <path d="M4.5546875,11.2878906 C4.090625,10.7464414 3.39448828,10.3984375 2.62109375,10.3984375 C1.20316797,10.3984375 0,11.5585508 0,12.9765625 C0,14.3944883 1.20316797,15.5546875 2.62109375,15.5546875 C3.39448828,15.5546875 4.090625,15.2065977 4.5546875,14.6652344 C4.9671875,14.2140195 5.19921875,13.6210938 5.19921875,12.9765625 C5.19921875,12.3320312 4.9671875,11.7390195 4.5546875,11.2878906 Z" id="Path" fill="#FDB441">
        </path>
        <path d="M19.421875,19.421875 C17.9999961,19.421875 16.84375,18.265625 16.84375,16.84375 C16.84375,15.4218711 17.9999961,14.265625 19.421875,14.265625 C20.84375,14.265625 22,15.4218711 22,16.84375 C22,18.265625 20.84375,19.421875 19.421875,19.421875 Z" id="Path" fill="#09A76D">
        </path>
        <path d="M5.19921875,12.9765625 C5.19921875,13.6210937 4.9671875,14.2140195 4.5546875,14.6652344 L4.5546875,11.2878906 C4.9671875,11.7390195 5.19921875,12.3320312 5.19921875,12.9765625 Z" id="Path" fill="#FDBF00">
        </path>
        <path d="M21.7421875,5.37105078 C21.5875,5.25507812 21.3684023,5.21636328 21.175,5.26788281 L16.84375,6.50542578 L12.1515625,7.84600781 C11.8809023,7.92335156 11.6875,8.18116406 11.6875,8.46480078 L11.6875,11.8936641 L12.9765625,11.5327695 L16.84375,10.4241328 L20.7109375,9.31553906 L22,8.95464453 L22,5.88671875 C22,5.68042578 21.9097656,5.5 21.7421875,5.37105078 Z" id="Path" fill="#57BE92">
        </path>
        <path d="M22,5.88671875 L22,8.9546875 L20.7109375,9.31558203 L16.84375,10.4241758 L16.84375,6.50546875 L21.175,5.26792578 C21.3684023,5.21640625 21.5875,5.25512109 21.7421875,5.37109375 C21.9097656,5.5 22,5.68042578 22,5.88671875 Z" id="Path" fill="#09A76D">
        </path>
    </svg>`
    },
    {
        name: "bin",
        value: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <style type="text/css">
            .st0{fill:#57BE92;}
            .st1{fill:#09A76D;}
            .st2{fill:#F3F3F3;}
            .st3{fill:#02905D;}
        </style>
        <path id="path-1" class="st0" d="M16.1,22.8H7.9c-0.9,0-1.7-0.7-1.7-1.6L5,6.9h14l-1.2,14.3C17.7,22.1,17,22.8,16.1,22.8z"/>
        <path id="Path" class="st1" d="M15.6,20.9l0.7,1.8v0.1c-0.1,0-0.1,0-0.2,0h-0.5L15,21.2c-0.1-0.2,0-0.4,0.2-0.4
            C15.4,20.7,15.6,20.8,15.6,20.9z"/>
        <path id="Path_1_" class="st1" d="M8.8,20.6C9,20.7,9.1,20.9,9,21.1l-0.6,1.7H7.9c-0.1,0-0.1,0-0.2,0v-0.1l0.7-1.8
            C8.4,20.7,8.6,20.6,8.8,20.6z"/>
        <path id="Path_2_" class="st1" d="M16.3,6.9L16.3,6.9l-0.7,1.9c0,0.1-0.2,0.2-0.3,0.2h-0.1C15,9,14.9,8.8,15,8.6l0.6-1.7
            C15.6,6.9,16.3,6.9,16.3,6.9z"/>
        <path id="Path_3_" class="st1" d="M8.4,6.8L9,8.5c0.1,0.2,0,0.4-0.2,0.4H8.7C8.5,9,8.4,8.9,8.4,8.7L7.7,7V6.9L8.4,6.8L8.4,6.8z"/>
        <path id="Path_4_" class="st1" d="M17.7,6.9l-1.2,14.3c-0.1,0.9-0.8,1.6-1.7,1.6h1.3c0.9,0,1.7-0.7,1.7-1.6L19,6.9H17.7z"/>
        <path id="Path_5_" class="st0" d="M17.3,2.2c-0.2-0.5-0.7-0.9-1.3-0.9H7.9c-0.6,0-1.1,0.4-1.3,0.9l-1,3.3H7l0.8-2.8
            c0-0.1,0.1-0.2,0.3-0.2h7.7c0.1,0,0.2,0.1,0.3,0.2L17,5.5h1.4L17.3,2.2z"/>
        <path id="Path_6_" class="st2" d="M17.3,13.3c-0.1-0.1-0.3-0.1-0.5,0.1l-0.6,0.8c-0.4-3.4-5.2-4.7-7.3-2c-0.3,0.3,0.2,0.7,0.5,0.4
            c1.8-2.4,5.9-1.2,6.2,1.7l-1-0.7c-0.3-0.3-0.7,0.3-0.4,0.5c0,0,1.5,1.2,1.6,1.2l0,0l0,0c0.1,0,0.3,0,0.3-0.1l0,0l0,0l1.2-1.5
            C17.4,13.6,17.4,13.4,17.3,13.3L17.3,13.3z"/>
        <path id="Path_7_" class="st2" d="M15.7,16c-0.2-0.1-0.4,0-0.4,0.2c-1.5,3.8-7.4,2.2-6.7-1.9c0.2,0.1,0.8,1.2,1,1.1
            c0.3,0,0.4-0.3,0.3-0.5l-1.2-1.5l0,0l0,0c-0.1-0.1-0.3-0.1-0.4-0.1l0,0l0,0l-1.5,1.2c-0.3,0.3,0.1,0.8,0.4,0.5L8,14.4
            c-0.6,4.7,6.3,6.5,8,2C16,16.3,15.9,16.1,15.7,16L15.7,16z"/>
        <path id="Path_8_" class="st1" d="M19.1,6.9H4.9c-0.2,0-0.3-0.2-0.3-0.3V5.8c0-0.2,0.2-0.3,0.3-0.3h14.2c0.2,0,0.3,0.2,0.3,0.3v0.8
            C19.4,6.8,19.3,6.9,19.1,6.9z"/>
        <path id="Path_9_" class="st3" d="M19.1,5.5h-1.3c0.2,0,0.3,0.2,0.3,0.3v0.8c0,0.2-0.2,0.3-0.3,0.3h1.3c0.2,0,0.3-0.2,0.3-0.3V5.9
            C19.4,5.7,19.3,5.5,19.1,5.5L19.1,5.5z"/>
        <path id="Path_10_" class="st3" d="M7,5.5l0.8-2.8c0-0.1,0.1-0.2,0.3-0.2h7.7c0.1,0,0.2,0.1,0.3,0.2L17,5.5"/>
        </svg>`
    },
    {
        name: "desktop",
        value: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g id="desktop" transform="translate(1.000000, 1.000000)" fill-rule="nonzero">
            <path d="M12.1982696,17.2635815 L8.47376258,18.5915493 L8.33255533,19.0851107 C8.13203219,19.7876056 7.37022133,20.362173 6.63983903,20.362173 L6.63983903,20.694165 L14.3641851,20.694165 L12.1982696,17.2635815 Z" id="Path" fill="#ADACA7">
            </path>
            <path d="M13.6674447,19.0851107 L13.1468813,17.2635815 L11,15.9356137 L8.85311871,17.2635815 L8.47376258,18.5915493 L12.1982696,18.5915493 L12.3394769,19.0851107 C12.54,19.7876056 13.3018109,20.362173 14.0321932,20.362173 L14.6961771,20.694165 L15.360161,20.362173 C14.6297787,20.362173 13.8679678,19.7876056 13.6674447,19.0851107 Z" id="Path" fill="#8F8F8B">
            </path>
            <path d="M19.3440644,17.2635815 L20.6720322,17.2635815 C21.4024145,17.2635815 22,16.665996 22,15.9356137 L22,13.2796781 L19.3440644,10.6237425 L19.3440644,17.2635815 Z" id="Path" fill="#ADACA7">
            </path>
            <path d="M0,15.9356137 C0,16.665996 0.597585513,17.2635815 1.32796781,17.2635815 L19.3440644,17.2635815 C20.0744467,17.2635815 20.6720322,16.665996 20.6720322,15.9356137 L20.6720322,7.96780684 L0,13.2796781 L0,15.9356137 Z" id="Path" fill="#CBC9C2">
            </path>
            <path d="M20.6720322,0 L19.3440644,0 L20.6720322,13.2796781 L22,13.2796781 L22,1.32796781 C22,0.597585513 21.4024145,0 20.6720322,0 Z" id="Path" fill="#404242">
            </path>
            <path d="M20.6720322,1.32796781 C20.6720322,0.597585513 20.0744467,0 19.3440644,0 L1.32796781,0 C0.597585513,0 0,0.597585513 0,1.32796781 L0,13.2796781 L20.6720322,13.2796781 L20.6720322,11.9517103 L11,6.63926358 L20.6720322,1.32796781 Z" id="Path" fill="#565959">
            </path>
            <path d="M20.6720322,1.32774648 L19.34433,1.3268169 C19.34433,1.32703823 11,6.63926358 11,6.63926358 C11,6.63926358 19.3441529,11.9517103 19.3440644,11.9517103 C19.3440644,11.9517103 20.6720322,11.9508249 20.6720322,11.9508249 C20.6720322,11.9508249 20.6718994,1.32792354 20.6720322,1.32774648 Z" id="Path" fill="#4B88D5">
            </path>
            <path d="M19.3440644,1.32774648 L1.33186318,1.32677264 C1.33075654,1.32730382 1.32982696,11.9514889 1.32796781,11.9517103 C1.32796781,11.9517103 19.3431791,11.9508249 19.3436217,11.9508249 C19.3438431,11.9508249 19.3422052,1.32792354 19.3440644,1.32774648 Z" id="Path" fill="#69A7FF">
            </path>
            <circle id="Oval" fill="#F3F3F3" cx="11" cy="15.2716298" r="1">
            </circle>
            <path d="M17.861167,21.0261569 L4.138833,21.0261569 C3.95548491,21.0261569 3.80684105,20.8775573 3.80684105,20.694165 C3.80684105,20.5107726 3.95548491,20.362173 4.138833,20.362173 L17.861167,20.362173 C18.0445151,20.362173 18.193159,20.5107726 18.193159,20.694165 C18.193159,20.8775573 18.0445151,21.0261569 17.861167,21.0261569 Z" id="Path" fill="#8F8F8B">
            </path>
        </g>
    </svg>`
    },
    {
        name: "docs_folder",
        value: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g id="folder" transform="translate(2.000000, 1.000000)" fill-rule="nonzero">
            <path d="M15.8430508,0.664640625 L14.85,0.664640625 C14.85,0.297644531 14.5525273,0 14.1853594,0 L2.62530469,0 C2.25826562,0 1.96066406,0.297558594 1.96066406,0.664640625 L1.96066406,18.3290078 C1.96066406,18.6960898 2.25826562,18.9936484 2.62530469,18.9936484 C15.2264922,18.9936484 14.2443555,19.0324062 14.4613906,18.9330625 C14.6295703,18.8560625 14.7599375,18.7111289 14.8175156,18.5333672 L15.8430508,18.5333672 C15.8430508,18.405793 15.8430508,0.913730469 15.8430508,0.664640625 Z" id="Path" fill="#69A7FF">
            </path>
            <path d="M15.5670195,0 L14.1853594,0 C14.5524414,0 14.85,0.297558594 14.85,0.664640625 L14.85,18.3290078 C14.85,18.6960898 14.5524414,18.9936484 14.1853594,18.9936484 L15.5670195,18.9936484 C15.9341016,18.9936484 16.2316602,18.6960898 16.2316602,18.3290078 L16.2316602,0.664640625 C16.2316602,0.297558594 15.9341016,0 15.5670195,0 L15.5670195,0 Z" id="Path" fill="#4B88D5">
            </path>
            <path d="M16.2316602,4.55305469 L13.1617578,1.48315234 L3.9194375,1.48315234 C3.4120625,1.48315234 3.00072266,1.89449219 3.00072266,2.40186719 L3.00072266,18.8285625 C3.00072266,18.8850234 3.00656641,18.9400234 3.01632031,18.9936484 L15.5670195,18.9936484 C15.9341016,18.9936484 16.2316602,18.6960898 16.2316602,18.3290078 L16.2316602,4.55305469 Z" id="Path" fill="#8EBDFF">
            </path>
            <path d="M17.3204023,4.72415625 L15.7626563,3.75151563 L14.4177773,1.48315234 L5.17545703,1.48315234 C4.66808203,1.48315234 4.25674219,1.89449219 4.25674219,2.40186719 L4.25674219,18.8285625 C4.25674219,19.3359375 4.66808203,19.7472773 5.17545703,19.7472773 L17.3025703,19.7472773 C17.3085859,19.7472773 17.3144297,19.7465039 17.3204023,19.746375 L17.3204023,4.72415625 Z" id="Path" fill="#EAF6FF">
            </path>
            <path d="M18.2212852,5.28666016 L16.839668,4.42397656 L16.839668,18.8286055 C16.839668,19.3359805 16.4283281,19.7473203 15.9209531,19.7473203 L17.3026133,19.7473203 C17.8099883,19.7473203 18.2213281,19.3359805 18.2213281,18.8286055 L18.2213281,5.28666016 L18.2212852,5.28666016 Z" id="Path" fill="#D8ECFE">
            </path>
            <path d="M15.3364922,5.28666016 L18.2212852,5.28666016 L14.4177773,1.48315234 L14.4177773,4.36794531 C14.4177773,4.87532031 14.8291172,5.28666016 15.3364922,5.28666016 Z" id="Path" fill="#8EBDFF">
            </path>
            <g id="Group" transform="translate(6.101562, 6.703125)" fill="#8EBDFF">
                <path d="M9.91482422,0.665457031 L0.360121094,0.665457031 C0.176558594,0.665457031 0.0278007812,0.51665625 0.0278007812,0.333136719 C0.0278007812,0.149617187 0.176558594,0.00081640625 0.360121094,0.00081640625 L9.91482422,0.00081640625 C10.0983867,0.00081640625 10.2471445,0.149617187 10.2471445,0.333136719 C10.2471445,0.51665625 10.0983867,0.665457031 9.91482422,0.665457031 Z" id="Path">
                </path>
                <path d="M9.91482422,2.86416797 L0.360121094,2.86416797 C0.176558594,2.86416797 0.0278007812,2.71536719 0.0278007812,2.53184766 C0.0278007812,2.34832812 0.176558594,2.19952734 0.360121094,2.19952734 L9.91482422,2.19952734 C10.0983867,2.19952734 10.2471445,2.34832812 10.2471445,2.53184766 C10.2471445,2.71536719 10.0983867,2.86416797 9.91482422,2.86416797 Z" id="Path">
                </path>
            </g>
            <path d="M19.63775,11 L18.9175078,11 C18.763293,10.7333789 18.4750586,10.5545859 18.150043,10.5545859 C17.6941875,10.5545859 7.63477344,10.5545859 6.99346484,10.5545859 L5.82686328,8.62438672 L5.11968359,8.62438672 C4.99546094,8.4583125 4.79922266,8.35772266 4.58773047,8.35772266 L0.699875,8.35772266 C0.332792969,8.35772266 0.035234375,8.65532422 0.035234375,9.02236328 L0.035234375,21.1137695 C0.035234375,21.6032266 0.432007813,21.999957 0.921421875,21.999957 L18.150043,21.999957 C18.2963945,21.999957 18.4451953,21.9620586 18.5768086,21.8893125 L18.5785273,21.8893125 C18.6902031,21.8274805 18.7867969,21.7419727 18.8623359,21.6399648 L19.63775,21.6399648 L19.63775,11 L19.63775,11 Z" id="Path" fill="#FDB441">
            </path>
            <g id="Group" transform="translate(4.554688, 8.335938)" fill="#FEA613">
                <path d="M0.621972656,0.378296875 L1.58494531,2.21864844 L2.96660547,2.21864844 L2.00363281,0.378296875 C1.88894922,0.159113281 1.66207422,0.0217851563 1.41474609,0.0217851563 L0.0330859375,0.0217851563 C0.280414062,0.0217851563 0.507289062,0.159113281 0.621972656,0.378296875 L0.621972656,0.378296875 Z" id="Path">
                </path>
                <path d="M14.9770156,2.21864844 L13.5953984,2.21864844 C14.0848555,2.21864844 14.4815859,2.61542187 14.4815859,3.10483594 L14.4815859,12.777832 C14.4815859,13.2672891 14.0848125,13.6640195 13.5953984,13.6640195 L14.9770156,13.6640195 C15.4664727,13.6640195 15.8632031,13.2672461 15.8632031,12.777832 L15.8632031,3.10487891 C15.8632031,2.61542188 15.4664297,2.21864844 14.9770156,2.21864844 Z" id="Path">
                </path>
            </g>
        </g>
    </svg>`
    },
    {
        name: "music",
        value: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6875,18.7773438 C11.6875,19.1335977 11.9757773,19.421875 12.3320312,19.421875 C12.6882852,19.421875 12.9765625,19.1335977 12.9765625,18.7773438 L12.9765625,11.529418 L12.3886211,10.4083203 L11.6875,11.8977461 L11.6875,18.7773438 Z" id="Path" fill="#09A76D">
        </path>
        <path d="M20.7109375,16.1992188 C20.7109375,16.5554727 20.9992148,16.84375 21.3554688,16.84375 C21.7117227,16.84375 22,16.5554727 22,16.1992188 L22,8.95125 L21.3875664,7.83719922 L20.7109375,9.31962109 L20.7109375,16.1992188 Z" id="Path" fill="#02905D">
        </path>
        <path d="M10.3984375,7.17578125 C10.3984375,8.9546875 8.9546875,10.3984375 7.17578125,10.3984375 C6.81480078,10.3984375 6.53125,10.1148008 6.53125,9.75390625 C6.53125,9.39292578 6.81480078,9.109375 7.17578125,9.109375 C8.24574609,9.109375 9.109375,8.24566016 9.109375,7.17578125 C9.109375,6.55698828 8.82582422,5.98980078 8.32304687,5.61597266 C7.29179688,4.86827344 6.11445312,3.91015625 5.19921875,2.76284766 L5.19921875,12.9765625 C5.19921875,13.337457 4.91566797,13.6210938 4.5546875,13.6210938 C4.19370703,13.6210938 3.91015625,13.337457 3.91015625,12.9765625 L3.91015625,0.64453125 C3.91015625,0.360894531 4.090625,0.115972656 4.36128516,0.0257382813 C4.42582422,0.012890625 4.49023438,0 4.5546875,0 C4.76089453,0 4.9671875,0.103082031 5.09605078,0.283550781 L5.83081641,1.40503516 C6.68164062,2.66835937 7.9234375,3.72109375 9.08355078,4.57183203 C9.90859375,5.17773438 10.3984375,6.15737891 10.3984375,7.17578125 Z" id="Path" fill="#FEA613">
        </path>
        <path d="M10.3984375,7.17578125 C10.3984375,8.9546875 8.9546875,10.3984375 7.17578125,10.3984375 C6.81480078,10.3984375 6.53125,10.1148008 6.53125,9.75390625 C6.53125,9.39292578 6.81480078,9.109375 7.17578125,9.109375 C8.24574609,9.109375 9.109375,8.24566016 9.109375,7.17578125 C9.109375,6.55698828 8.82582422,5.98980078 8.32304687,5.61597266 C7.29179688,4.86827344 6.11445312,3.91015625 5.19921875,2.76284766 L5.19921875,12.9765625 C5.19921875,13.337457 4.91566797,13.6210938 4.5546875,13.6210938 L4.5546875,0 C4.76089453,0 4.9671875,0.103082031 5.09605078,0.283550781 L5.83081641,1.40503516 C6.68164062,2.66835937 7.9234375,3.72109375 9.08355078,4.57183203 C9.90859375,5.17773438 10.3984375,6.15737891 10.3984375,7.17578125 Z" id="Path" fill="#FEA613">
        </path>
        <path d="M10.3984375,22 C8.97655859,22 7.8203125,20.84375 7.8203125,19.421875 C7.8203125,17.9999961 8.97655859,16.84375 10.3984375,16.84375 C11.8203125,16.84375 12.9765625,17.9999961 12.9765625,19.421875 C12.9765625,20.84375 11.8203125,22 10.3984375,22 Z" id="Path" fill="#57BE92">
        </path>
        <path d="M4.5546875,11.2878906 C4.090625,10.7464414 3.39448828,10.3984375 2.62109375,10.3984375 C1.20316797,10.3984375 0,11.5585508 0,12.9765625 C0,14.3944883 1.20316797,15.5546875 2.62109375,15.5546875 C3.39448828,15.5546875 4.090625,15.2065977 4.5546875,14.6652344 C4.9671875,14.2140195 5.19921875,13.6210938 5.19921875,12.9765625 C5.19921875,12.3320312 4.9671875,11.7390195 4.5546875,11.2878906 Z" id="Path" fill="#FDB441">
        </path>
        <path d="M19.421875,19.421875 C17.9999961,19.421875 16.84375,18.265625 16.84375,16.84375 C16.84375,15.4218711 17.9999961,14.265625 19.421875,14.265625 C20.84375,14.265625 22,15.4218711 22,16.84375 C22,18.265625 20.84375,19.421875 19.421875,19.421875 Z" id="Path" fill="#09A76D">
        </path>
        <path d="M5.19921875,12.9765625 C5.19921875,13.6210937 4.9671875,14.2140195 4.5546875,14.6652344 L4.5546875,11.2878906 C4.9671875,11.7390195 5.19921875,12.3320312 5.19921875,12.9765625 Z" id="Path" fill="#FDBF00">
        </path>
        <path d="M21.7421875,5.37105078 C21.5875,5.25507812 21.3684023,5.21636328 21.175,5.26788281 L16.84375,6.50542578 L12.1515625,7.84600781 C11.8809023,7.92335156 11.6875,8.18116406 11.6875,8.46480078 L11.6875,11.8936641 L12.9765625,11.5327695 L16.84375,10.4241328 L20.7109375,9.31553906 L22,8.95464453 L22,5.88671875 C22,5.68042578 21.9097656,5.5 21.7421875,5.37105078 Z" id="Path" fill="#57BE92">
        </path>
        <path d="M22,5.88671875 L22,8.9546875 L20.7109375,9.31558203 L16.84375,10.4241758 L16.84375,6.50546875 L21.175,5.26792578 C21.3684023,5.21640625 21.5875,5.25512109 21.7421875,5.37109375 C21.9097656,5.5 22,5.68042578 22,5.88671875 Z" id="Path" fill="#09A76D">
        </path>
    </svg>`
    },
    {
        name: "picture",
        value: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.72886905,4.11701984 L21.0065079,4.11701984 C21.5566389,4.11701984 21.9864246,4.56400397 21.9864246,5.09693651 L21.9864246,17.9047341 C21.9864246,18.4548651 21.5394405,18.8846508 21.0065079,18.8846508 L3.72886905,18.8846508 C3.1787381,18.8846508 2.74895238,18.4376667 2.74895238,17.9047341 L2.74895238,5.09698016 C2.74895238,4.56400397 3.19593651,4.11701984 3.72886905,4.11701984 Z" id="Path" fill="#F3F3F3" fill-rule="nonzero">
        </path>
        <path d="M4.88072619,5.49236905 L19.8890913,5.49236905 C20.3016786,5.49236905 20.6455159,5.83620635 20.6455159,6.24879365 L20.6455159,16.770119 C20.6455159,17.1827063 20.3016786,17.5265437 19.8890913,17.5265437 L4.88072619,17.5265437 C4.46813889,17.5265437 4.12430159,17.1827063 4.12430159,16.770119 L4.12430159,6.24879365 C4.12430159,5.83620635 4.45094048,5.49236905 4.88072619,5.49236905 Z" id="Path" fill="#69A7FF" fill-rule="nonzero">
        </path>
        <path d="M4.12430159,6.24879365 L4.12430159,9.92781349 C4.29619841,9.9450119 4.46813889,9.96221032 4.64003571,9.96221032 C6.82336111,9.96221032 8.59414286,8.19147222 8.59414286,6.00810317 C8.59414286,5.83620635 8.57694444,5.66426587 8.55974603,5.49236905 L4.88072619,5.49236905 C4.45094048,5.49236905 4.12430159,5.83620635 4.12430159,6.24879365 Z" id="Path" fill="#FDB441" fill-rule="nonzero">
        </path>
        <path d="M15.365004,13.9163175 C14.9352183,13.9163175 14.5054325,13.9507143 14.11,14.0022659 L14.11,16.770119 C14.11,17.1827063 14.4538373,17.5265437 14.8664246,17.5265437 L20.5912698,17.5265437 C20.6256667,17.3718016 20.6428651,17.2343016 20.6428651,17.0795595 C20.6428651,15.3260198 18.2875992,13.9163175 15.365004,13.9163175 Z" id="Path" fill="#09A76D" fill-rule="nonzero" transform="translate(17.376433, 15.721431) scale(-1, 1) translate(-17.376433, -15.721431) ">
        </path>
        <path d="M12.7158452,12.3690278 C8.00531349,12.3690278 4.17155159,14.6726984 4.12,17.5265437 L15.2258532,17.5265437 C15.6384405,17.5265437 15.9822778,17.1827063 15.9822778,16.770119 L15.9822778,12.7644603 C14.9679643,12.5237698 13.8677024,12.3690278 12.7158452,12.3690278 Z" id="Path" fill="#57BE92" fill-rule="nonzero" transform="translate(10.051139, 14.947786) scale(-1, 1) translate(-10.051139, -14.947786) ">
        </path>
    </svg>`
    },
    {
        name: "pictures",
        value: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.672390909,11.2621253 L14.5709608,1.17591329 C15.0031489,0.862682645 15.6276339,0.954420916 15.9408802,1.38664972 L23.3745309,11.5892356 C23.6877615,12.0214237 23.5898755,12.6298934 23.141575,12.9492623 L9.2430458,23.0354586 C8.81085775,23.3486893 8.18637271,23.256951 7.87312643,22.8247222 L0.45553187,12.6159729 C0.142301228,12.1837849 0.240202859,11.5753559 0.672390909,11.2621253 Z" id="Path" fill="#CBC9C2" fill-rule="nonzero">
        </path>
        <path d="M3.11287302,8.26887698 L17.6226587,4.4007619 C18.0180476,4.29761508 18.4306786,4.53830556 18.5510238,4.93369444 L21.2673254,15.0252341 C21.3704722,15.420623 21.1297817,15.833254 20.7343929,15.9364008 L6.22456349,19.8045159 C5.8291746,19.9076627 5.41654365,19.6669722 5.29619841,19.2715833 L2.57994048,9.18004365 C2.45959524,8.78461111 2.70028571,8.37202381 3.11287302,8.26887698 Z" id="Path" fill="#8EBDFF" fill-rule="nonzero" transform="translate(11.920065, 12.102639) rotate(-21.000000) translate(-11.920065, -12.102639) ">
        </path>
        <path d="M1.7203254,8.28896032 L18.3103333,3.85347222 C18.8260675,3.71592857 19.3761984,4.02536905 19.5137421,4.54114683 L22.797373,16.7300635 C22.9349167,17.2457976 22.6254762,17.7787738 22.0925,17.9162738 L5.50253571,22.3517619 C4.98680159,22.4893056 4.43667063,22.1798651 4.29912698,21.6640873 L1.03269444,9.47517063 C0.895150794,8.95943651 1.20459127,8.42650397 1.7203254,8.28896032 Z" id="Path" fill="#CBC9C2" fill-rule="nonzero">
        </path>
        <path d="M3.11287302,9.26887698 L17.6226587,5.4007619 C18.0180476,5.29761508 18.4306786,5.53830556 18.5510238,5.93369444 L21.2673254,16.0252341 C21.3704722,16.420623 21.1297817,16.833254 20.7343929,16.9364008 L6.22456349,20.8045159 C5.8291746,20.9076627 5.41654365,20.6669722 5.29619841,20.2715833 L2.57994048,10.1800437 C2.45959524,9.78461111 2.70028571,9.37202381 3.11287302,9.26887698 Z" id="Path" fill="#8EBDFF" fill-rule="nonzero">
        </path>
        <path d="M4.72886905,8.11701984 L22.0065079,8.11701984 C22.5566389,8.11701984 22.9864246,8.56400397 22.9864246,9.09693651 L22.9864246,21.9047341 C22.9864246,22.4548651 22.5394405,22.8846508 22.0065079,22.8846508 L4.72886905,22.8846508 C4.1787381,22.8846508 3.74895238,22.4376667 3.74895238,21.9047341 L3.74895238,9.09698016 C3.74895238,8.56400397 4.19593651,8.11701984 4.72886905,8.11701984 Z" id="Path" fill="#F3F3F3" fill-rule="nonzero">
        </path>
        <path d="M5.88072619,9.49236905 L20.8890913,9.49236905 C21.3016786,9.49236905 21.6455159,9.83620635 21.6455159,10.2487937 L21.6455159,20.770119 C21.6455159,21.1827063 21.3016786,21.5265437 20.8890913,21.5265437 L5.88072619,21.5265437 C5.46813889,21.5265437 5.12430159,21.1827063 5.12430159,20.770119 L5.12430159,10.2487937 C5.12430159,9.83620635 5.45094048,9.49236905 5.88072619,9.49236905 Z" id="Path" fill="#69A7FF" fill-rule="nonzero">
        </path>
        <path d="M5.12430159,10.2487937 L5.12430159,13.9278135 C5.29619841,13.9450119 5.46813889,13.9622103 5.64003571,13.9622103 C7.82336111,13.9622103 9.59414286,12.1914722 9.59414286,10.0081032 C9.59414286,9.83620635 9.57694444,9.66426587 9.55974603,9.49236905 L5.88072619,9.49236905 C5.45094048,9.49236905 5.12430159,9.83620635 5.12430159,10.2487937 Z" id="Path" fill="#FDB441" fill-rule="nonzero">
        </path>
        <path d="M6.37930556,17.9163175 C5.94951984,17.9163175 5.51973413,17.9507143 5.12430159,18.0022659 L5.12430159,20.770119 C5.12430159,21.1827063 5.46813889,21.5265437 5.88072619,21.5265437 L11.6055714,21.5265437 C11.6399683,21.3718016 11.6571667,21.2343016 11.6571667,21.0795595 C11.6571667,19.3260198 9.30190079,17.9163175 6.37930556,17.9163175 Z" id="Path" fill="#09A76D" fill-rule="nonzero">
        </path>
        <path d="M18.3618849,16.3690278 C13.6513532,16.3690278 9.81759127,18.6726984 9.76603968,21.5265437 L20.8718929,21.5265437 C21.2844802,21.5265437 21.6283175,21.1827063 21.6283175,20.770119 L21.6283175,16.7644603 C20.614004,16.5237698 19.5137421,16.3690278 18.3618849,16.3690278 Z" id="Path" fill="#57BE92" fill-rule="nonzero">
        </path>
    </svg>`
    },
    {
        name: "report",
        value: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g id="google-docs" transform="translate(4.000000, 1.000000)" fill-rule="nonzero">
            <path d="M16.7578125,5.80078125 L12.2460938,4.51171875 L10.9570312,0 L1.93359375,0 C0.865691406,0 0,0.865691406 0,1.93359375 L0,20.0664062 C0,21.1343086 0.865691406,22 1.93359375,22 L14.8242188,22 C15.8921211,22 16.7578125,21.1343086 16.7578125,20.0664062 L16.7578125,5.80078125 Z" id="Path" fill="#69A7FF">
            </path>
            <path d="M16.7578125,5.80078125 L16.7578125,20.0664062 C16.7578125,21.1343086 15.8921211,22 14.8242188,22 L8.37890625,22 L8.37890625,0 L10.9570312,0 L12.2460938,4.51171875 L16.7578125,5.80078125 Z" id="Path" fill="#4B88D5">
            </path>
            <path d="M16.7578125,5.80078125 L12.2460938,5.80078125 C11.5371094,5.80078125 10.9570312,5.22070312 10.9570312,4.51171875 L10.9570312,0 C11.1246094,0 11.2921875,0.064453125 11.4081602,0.193402344 L16.5644102,5.34965234 C16.6933594,5.465625 16.7578125,5.63320312 16.7578125,5.80078125 Z" id="Path" fill="#8EBDFF">
            </path>
            <path d="M12.2460938,10.3554688 L4.51171875,10.3554688 C4.15546484,10.3554688 3.8671875,10.0671914 3.8671875,9.7109375 C3.8671875,9.35468359 4.15546484,9.06640625 4.51171875,9.06640625 L12.2460938,9.06640625 C12.6023477,9.06640625 12.890625,9.35468359 12.890625,9.7109375 C12.890625,10.0671914 12.6023477,10.3554688 12.2460938,10.3554688 Z" id="Path" fill="#F3F3F3">
            </path>
            <path d="M12.2460938,12.9335938 L4.51171875,12.9335938 C4.15546484,12.9335938 3.8671875,12.6453164 3.8671875,12.2890625 C3.8671875,11.9328086 4.15546484,11.6445312 4.51171875,11.6445312 L12.2460938,11.6445312 C12.6023477,11.6445312 12.890625,11.9328086 12.890625,12.2890625 C12.890625,12.6453164 12.6023477,12.9335938 12.2460938,12.9335938 Z" id="Path" fill="#F3F3F3">
            </path>
            <path d="M12.2460938,15.5117188 L4.51171875,15.5117188 C4.15546484,15.5117188 3.8671875,15.2234414 3.8671875,14.8671875 C3.8671875,14.5109336 4.15546484,14.2226562 4.51171875,14.2226562 L12.2460938,14.2226562 C12.6023477,14.2226562 12.890625,14.5109336 12.890625,14.8671875 C12.890625,15.2234414 12.6023477,15.5117188 12.2460938,15.5117188 Z" id="Path" fill="#F3F3F3">
            </path>
            <path d="M9.66796875,18.0898438 L4.51171875,18.0898438 C4.15546484,18.0898438 3.8671875,17.8015664 3.8671875,17.4453125 C3.8671875,17.0890586 4.15546484,16.8007812 4.51171875,16.8007812 L9.66796875,16.8007812 C10.0242227,16.8007812 10.3125,17.0890586 10.3125,17.4453125 C10.3125,17.8015664 10.0242227,18.0898438 9.66796875,18.0898438 Z" id="Path" fill="#F3F3F3">
            </path>
            <g id="Group" transform="translate(8.378906, 9.066406)" fill="#E3E7EA">
                <path d="M0,9.0234375 L1.2890625,9.0234375 C1.64531641,9.0234375 1.93359375,8.73516016 1.93359375,8.37890625 C1.93359375,8.02265234 1.64531641,7.734375 1.2890625,7.734375 L0,7.734375 L0,9.0234375 Z" id="Path">
                </path>
                <path d="M0,6.4453125 L3.8671875,6.4453125 C4.22344141,6.4453125 4.51171875,6.15703516 4.51171875,5.80078125 C4.51171875,5.44452734 4.22344141,5.15625 3.8671875,5.15625 L0,5.15625 L0,6.4453125 Z" id="Path">
                </path>
                <path d="M0,3.8671875 L3.8671875,3.8671875 C4.22344141,3.8671875 4.51171875,3.57891016 4.51171875,3.22265625 C4.51171875,2.86640234 4.22344141,2.578125 3.8671875,2.578125 L0,2.578125 L0,3.8671875 Z" id="Path">
                </path>
                <path d="M0,1.2890625 L3.8671875,1.2890625 C4.22344141,1.2890625 4.51171875,1.00078516 4.51171875,0.64453125 C4.51171875,0.288277344 4.22344141,0 3.8671875,0 L0,0 L0,1.2890625 Z" id="Path">
                </path>
            </g>
        </g>
    </svg>`
    },
    {
        name: "network",
        value: `
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="network" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="desktop" transform="translate(1.000000, 1.000000)" fill-rule="nonzero">
                <path d="M7.20806841,10.6736842 L5.00722334,11.4947368 L4.9237827,11.7998947 C4.80529175,12.2342316 4.35513078,12.5894737 3.92354125,12.5894737 L3.92354125,12.7947368 L8.48792757,12.7947368 L7.20806841,10.6736842 Z" id="Path" fill="#ADACA7"></path>
                <path d="M8.0762173,11.7998947 L7.76861167,10.6736842 L6.5,9.85263158 L5.23138833,10.6736842 L5.00722334,11.4947368 L7.20806841,11.4947368 L7.29150905,11.7998947 C7.41,12.2342316 7.86016097,12.5894737 8.2917505,12.5894737 L8.68410463,12.7947368 L9.07645875,12.5894737 C8.64486922,12.5894737 8.19470825,12.2342316 8.0762173,11.7998947 Z" id="Path" fill="#8F8F8B"></path>
                <path d="M11.4305835,10.6736842 L12.2152918,10.6736842 C12.6468813,10.6736842 13,10.3042105 13,9.85263158 L13,8.21052632 L11.4305835,6.56842105 L11.4305835,10.6736842 Z" id="Path" fill="#ADACA7"></path>
                <path d="M0,9.85263158 C0,10.3042105 0.353118712,10.6736842 0.784708249,10.6736842 L11.4305835,10.6736842 C11.862173,10.6736842 12.2152918,10.3042105 12.2152918,9.85263158 L12.2152918,4.92631579 L0,8.21052632 L0,9.85263158 Z" id="Path" fill="#CBC9C2"></path>
                <path d="M12.2152918,0 L11.4305835,0 L12.2152918,8.21052632 L13,8.21052632 L13,0.821052632 C13,0.369473684 12.6468813,0 12.2152918,0 Z" id="Path" fill="#404242"></path>
                <path d="M12.2152918,0.821052632 C12.2152918,0.369473684 11.862173,0 11.4305835,0 L0.784708249,0 C0.353118712,0 0,0.369473684 0,0.821052632 L0,8.21052632 L12.2152918,8.21052632 L12.2152918,7.38947368 L6.5,4.10490737 L12.2152918,0.821052632 Z" id="Path" fill="#565959"></path>
                <path d="M12.2152918,0.820915789 L11.4307404,0.820341053 C11.4307404,0.820477895 6.5,4.10490737 6.5,4.10490737 C6.5,4.10490737 11.4306358,7.38947368 11.4305835,7.38947368 C11.4305835,7.38947368 12.2152918,7.38892632 12.2152918,7.38892632 C12.2152918,7.38892632 12.2152133,0.821025263 12.2152918,0.820915789 Z" id="Path" fill="#4B88D5"></path>
                <path d="M11.4305835,0.820915789 L0.78701006,0.820313684 C0.786356137,0.820642105 0.785806841,7.38933684 0.784708249,7.38947368 C0.784708249,7.38947368 11.4300604,7.38892632 11.4303219,7.38892632 C11.4304527,7.38892632 11.4294849,0.821025263 11.4305835,0.820915789 Z" id="Path" fill="#69A7FF"></path>
                <ellipse id="Oval" fill="#F3F3F3" cx="6.5" cy="9.44210526" rx="1" ry="1"></ellipse>
                <path d="M10.554326,13 L2.44567404,13 C2.33733199,13 2.24949698,12.9081242 2.24949698,12.7947368 C2.24949698,12.6813495 2.33733199,12.5894737 2.44567404,12.5894737 L10.554326,12.5894737 C10.662668,12.5894737 10.750503,12.6813495 10.750503,12.7947368 C10.750503,12.9081242 10.662668,13 10.554326,13 Z" id="Path" fill="#8F8F8B"></path>
            </g>
            <path d="M8.90591029,20.3398629 C6.81470393,20.5347547 4.5294371,18.9119556 4.98767279,16.2973475 C5.14700091,16.4342459 5.76188372,17.4713826 6.02137201,17.4150936 C6.28365326,17.4230428 6.44981341,17.0910662 6.27884076,16.886535 C6.27205169,16.8780272 5.10282904,15.3825428 5.09689935,15.3751092 C5.09612591,15.3741209 5.09526654,15.3732615 5.0944931,15.3723162 C5.08890716,15.3653123 5.08306341,15.3585233 5.07691888,15.352035 C4.97581341,15.2426795 4.80110247,15.217242 4.67327044,15.2951444 C4.66497747,15.3000428 4.65702826,15.3053279 4.64925091,15.3109139 C4.63627435,15.3182186 3.13898529,16.4921678 3.12635247,16.5009334 C2.7886181,16.7571131 3.19866888,17.2827498 3.52935638,17.0161717 C3.52931341,17.0161717 4.31289154,16.4034373 4.31289154,16.4034373 C3.93797429,19.4129001 6.57152754,21.2109668 8.98559004,20.9829055 C9.14881316,20.9674855 9.2880384,20.8404883 9.26049533,20.6182064 C9.23295227,20.3959245 9.06788635,20.3247674 8.90591029,20.3398629 Z" id="Path" fill="#CBC9C2" fill-rule="nonzero"></path>
            <path d="M20.6459103,8.08986289 C18.5547039,8.28475472 16.2694371,6.66195556 16.7276728,4.04734748 C16.8870009,4.18424591 17.5018837,5.22138263 17.761372,5.16509357 C18.0236533,5.17304279 18.1898134,4.84106623 18.0188408,4.63653498 C18.0120517,4.62802716 16.842829,3.13254279 16.8368993,3.1251092 C16.8361259,3.12412091 16.8352665,3.12326154 16.8344931,3.12231623 C16.8289072,3.11531232 16.8230634,3.10852326 16.8169189,3.10203498 C16.7158134,2.99267951 16.5411025,2.96724201 16.4132704,3.04514435 C16.4049775,3.05004279 16.3970283,3.05532795 16.3892509,3.06091388 C16.3762743,3.06821857 14.8789853,4.24216779 14.8663525,4.25093341 C14.5286181,4.5071131 14.9386689,5.03274982 15.2693564,4.7661717 C15.2693134,4.7661717 16.0528915,4.15343732 16.0528915,4.15343732 C15.6779743,7.16290008 18.3115275,8.96096684 20.72559,8.73290552 C20.8888132,8.71748551 21.0280384,8.59048833 21.0004953,8.36820643 C20.9729523,8.14592454 20.8078864,8.07476738 20.6459103,8.08986289 Z" id="Path-Copy" fill="#CBC9C2" fill-rule="nonzero" transform="translate(17.871996, 5.876153) rotate(180.000000) translate(-17.871996, -5.876153) "></path>
            <g id="desktop-copy" transform="translate(10.000000, 10.000000)" fill-rule="nonzero">
                <path d="M7.20806841,10.6736842 L5.00722334,11.4947368 L4.9237827,11.7998947 C4.80529175,12.2342316 4.35513078,12.5894737 3.92354125,12.5894737 L3.92354125,12.7947368 L8.48792757,12.7947368 L7.20806841,10.6736842 Z" id="Path" fill="#ADACA7"></path>
                <path d="M8.0762173,11.7998947 L7.76861167,10.6736842 L6.5,9.85263158 L5.23138833,10.6736842 L5.00722334,11.4947368 L7.20806841,11.4947368 L7.29150905,11.7998947 C7.41,12.2342316 7.86016097,12.5894737 8.2917505,12.5894737 L8.68410463,12.7947368 L9.07645875,12.5894737 C8.64486922,12.5894737 8.19470825,12.2342316 8.0762173,11.7998947 Z" id="Path" fill="#8F8F8B"></path>
                <path d="M11.4305835,10.6736842 L12.2152918,10.6736842 C12.6468813,10.6736842 13,10.3042105 13,9.85263158 L13,8.21052632 L11.4305835,6.56842105 L11.4305835,10.6736842 Z" id="Path" fill="#ADACA7"></path>
                <path d="M0,9.85263158 C0,10.3042105 0.353118712,10.6736842 0.784708249,10.6736842 L11.4305835,10.6736842 C11.862173,10.6736842 12.2152918,10.3042105 12.2152918,9.85263158 L12.2152918,4.92631579 L0,8.21052632 L0,9.85263158 Z" id="Path" fill="#CBC9C2"></path>
                <path d="M12.2152918,0 L11.4305835,0 L12.2152918,8.21052632 L13,8.21052632 L13,0.821052632 C13,0.369473684 12.6468813,0 12.2152918,0 Z" id="Path" fill="#404242"></path>
                <path d="M12.2152918,0.821052632 C12.2152918,0.369473684 11.862173,0 11.4305835,0 L0.784708249,0 C0.353118712,0 0,0.369473684 0,0.821052632 L0,8.21052632 L12.2152918,8.21052632 L12.2152918,7.38947368 L6.5,4.10490737 L12.2152918,0.821052632 Z" id="Path" fill="#565959"></path>
                <path d="M12.2152918,0.820915789 L11.4307404,0.820341053 C11.4307404,0.820477895 6.5,4.10490737 6.5,4.10490737 C6.5,4.10490737 11.4306358,7.38947368 11.4305835,7.38947368 C11.4305835,7.38947368 12.2152918,7.38892632 12.2152918,7.38892632 C12.2152918,7.38892632 12.2152133,0.821025263 12.2152918,0.820915789 Z" id="Path" fill="#4B88D5"></path>
                <path d="M11.4305835,0.820915789 L0.78701006,0.820313684 C0.786356137,0.820642105 0.785806841,7.38933684 0.784708249,7.38947368 C0.784708249,7.38947368 11.4300604,7.38892632 11.4303219,7.38892632 C11.4304527,7.38892632 11.4294849,0.821025263 11.4305835,0.820915789 Z" id="Path" fill="#69A7FF"></path>
                <ellipse id="Oval" fill="#F3F3F3" cx="6.5" cy="9.44210526" rx="1" ry="1"></ellipse>
                <path d="M10.554326,13 L2.44567404,13 C2.33733199,13 2.24949698,12.9081242 2.24949698,12.7947368 C2.24949698,12.6813495 2.33733199,12.5894737 2.44567404,12.5894737 L10.554326,12.5894737 C10.662668,12.5894737 10.750503,12.6813495 10.750503,12.7947368 C10.750503,12.9081242 10.662668,13 10.554326,13 Z" id="Path" fill="#8F8F8B"></path>
            </g>
        </g>
    </svg>`
    },
    {
        name: "refresh",
        value: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
        </svg>`
    }
];
```
```css
igc-tree {
    width: 320px;
    max-height: 360px;
    overflow-y: auto;
}

.tree-item-icon {
    display: flex;
    align-items: center;
    vertical-align: middle;
}

.item-refresh {
    cursor: pointer;
    padding: 0px 4px;
    color: var(--igx-success-500);
}

.item {
    display: flex;
    align-items: center;
}

.item-title {
    margin: 0 10px;
    vertical-align: middle;
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


After the user clicks the expand icon, it is replaced by a loading indicator. When the loading property resolves to false, the loading indicator disappears and the children are loaded.

You can provide a custom slot content for the loading area using the `loadingIndicator` slot. If such slot is not defined, the [`IgcCircularProgressComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccircularprogresscomponent.html) is used.

### Load On Demand With Virtualization

Loading a greater number of children on demand in the Ignite UI for Web Components Tree might negatively impact performance since the tree items are declaratively defined by design. The following demo showcases how the [@lit-labs/virtualizer](https://github.com/lit/lit/tree/main/packages/labs/virtualizer) library can be used to render the child tree items in a virtualized container. The result is improved performance as only the visible chunk of children is rendered in the DOM.

```typescript
import { DataServiceResult, ItemData, SelectableItemData } from "./TreeLoadOnDemandVirtualizedData";

export class DataService {
    /**
     * As we are simulating remote data operations,
     * this set is used to store the selection state of the records before reloading.
     */
    private REMOTE_DATA: ItemData[];

    public constructor() {
        this.REMOTE_DATA = Array.from({ length: 2000 }, (_, idx) => ({ Name: `DESKTOP-${idx}`, Icon: "desktop" }));
    }

    public getChildren(parent: SelectableItemData): Promise<DataServiceResult> {
        return new Promise((resolve) => setTimeout(() => resolve({ Data: this.REMOTE_DATA, TotalCount: 2000 }), 2000));
    }
}
```
```typescript
export const ICONS = [
    {
        name: "album",
        value: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g id="disc" transform="translate(1.000000, 1.000000)" fill-rule="nonzero">
            <path d="M9.84615385,0 C4.40829118,0 0,4.2533122 0,9.5 C0,14.7466878 4.40829118,19 9.84615385,19 C15.2840165,19 19.6923077,14.7466878 19.6923077,9.5 C19.6923077,4.2533122 15.2840165,0 9.84615385,0 Z M9.84615385,12.5121951 C8.12470994,12.5121951 6.72420263,11.1609707 6.72420263,9.5 C6.72420263,7.83902927 8.12470994,6.48780488 9.84615385,6.48780488 C11.5675977,6.48780488 12.9681051,7.83902927 12.9681051,9.5 C12.9681051,11.1609707 11.5675977,12.5121951 9.84615385,12.5121951 Z" id="Shape" fill="#69A7FF">
            </path>
            <g transform="translate(4.803002, 0.000000)">
                <path d="M8.16510319,9.5 C8.16510319,11.1609707 6.76459587,12.5121951 5.04315197,12.5121951 L5.04315197,19 C10.4810146,19 14.8893058,14.7466878 14.8893058,9.5 C14.8893058,4.2533122 10.4810146,0 5.04315197,0 L5.04315197,6.48780488 C6.76459587,6.48780488 8.16510319,7.83902927 8.16510319,9.5 Z" id="Path" fill="#4B88D5">
                </path>
                <path d="M5.04315197,4.63414634 C2.26235797,4.63414634 0,6.81696829 0,9.5 C0,12.1830317 2.26235797,14.3658537 5.04315197,14.3658537 C7.82394597,14.3658537 10.0863039,12.1830317 10.0863039,9.5 C10.0863039,6.81696829 7.82394597,4.63414634 5.04315197,4.63414634 Z M5.04315197,11.5853659 C3.85138311,11.5853659 2.88180113,10.6498707 2.88180113,9.5 C2.88180113,8.35012927 3.85138311,7.41463415 5.04315197,7.41463415 C6.23492083,7.41463415 7.20450281,8.35012927 7.20450281,9.5 C7.20450281,10.6498707 6.23492083,11.5853659 5.04315197,11.5853659 Z" id="Shape" fill="#F9F9F9">
                </path>
                <path d="M5.04315197,7.41463415 C6.23492083,7.41463415 7.20450281,8.35012927 7.20450281,9.5 C7.20450281,10.6498707 6.23492083,11.5853659 5.04315197,11.5853659 L5.04315197,14.3658537 C7.82394597,14.3658537 10.0863039,12.1830317 10.0863039,9.5 C10.0863039,6.81696829 7.82394597,4.63414634 5.04315197,4.63414634 L5.04315197,7.41463415 Z" id="Path" fill="#CBC9C2">
                </path>
            </g>
        </g>
        <path d="M11.6875,18.7773438 C11.6875,19.1335977 11.9757773,19.421875 12.3320312,19.421875 C12.6882852,19.421875 12.9765625,19.1335977 12.9765625,18.7773438 L12.9765625,11.529418 L12.3886211,10.4083203 L11.6875,11.8977461 L11.6875,18.7773438 Z" id="Path" fill="#09A76D">
        </path>
        <path d="M20.7109375,16.1992188 C20.7109375,16.5554727 20.9992148,16.84375 21.3554688,16.84375 C21.7117227,16.84375 22,16.5554727 22,16.1992188 L22,8.95125 L21.3875664,7.83719922 L20.7109375,9.31962109 L20.7109375,16.1992188 Z" id="Path" fill="#02905D">
        </path>
        <path d="M10.3984375,7.17578125 C10.3984375,8.9546875 8.9546875,10.3984375 7.17578125,10.3984375 C6.81480078,10.3984375 6.53125,10.1148008 6.53125,9.75390625 C6.53125,9.39292578 6.81480078,9.109375 7.17578125,9.109375 C8.24574609,9.109375 9.109375,8.24566016 9.109375,7.17578125 C9.109375,6.55698828 8.82582422,5.98980078 8.32304687,5.61597266 C7.29179688,4.86827344 6.11445312,3.91015625 5.19921875,2.76284766 L5.19921875,12.9765625 C5.19921875,13.337457 4.91566797,13.6210938 4.5546875,13.6210938 C4.19370703,13.6210938 3.91015625,13.337457 3.91015625,12.9765625 L3.91015625,0.64453125 C3.91015625,0.360894531 4.090625,0.115972656 4.36128516,0.0257382813 C4.42582422,0.012890625 4.49023438,0 4.5546875,0 C4.76089453,0 4.9671875,0.103082031 5.09605078,0.283550781 L5.83081641,1.40503516 C6.68164062,2.66835937 7.9234375,3.72109375 9.08355078,4.57183203 C9.90859375,5.17773438 10.3984375,6.15737891 10.3984375,7.17578125 Z" id="Path" fill="#FEA613">
        </path>
        <path d="M10.3984375,7.17578125 C10.3984375,8.9546875 8.9546875,10.3984375 7.17578125,10.3984375 C6.81480078,10.3984375 6.53125,10.1148008 6.53125,9.75390625 C6.53125,9.39292578 6.81480078,9.109375 7.17578125,9.109375 C8.24574609,9.109375 9.109375,8.24566016 9.109375,7.17578125 C9.109375,6.55698828 8.82582422,5.98980078 8.32304687,5.61597266 C7.29179688,4.86827344 6.11445312,3.91015625 5.19921875,2.76284766 L5.19921875,12.9765625 C5.19921875,13.337457 4.91566797,13.6210938 4.5546875,13.6210938 L4.5546875,0 C4.76089453,0 4.9671875,0.103082031 5.09605078,0.283550781 L5.83081641,1.40503516 C6.68164062,2.66835937 7.9234375,3.72109375 9.08355078,4.57183203 C9.90859375,5.17773438 10.3984375,6.15737891 10.3984375,7.17578125 Z" id="Path" fill="#FEA613">
        </path>
        <path d="M10.3984375,22 C8.97655859,22 7.8203125,20.84375 7.8203125,19.421875 C7.8203125,17.9999961 8.97655859,16.84375 10.3984375,16.84375 C11.8203125,16.84375 12.9765625,17.9999961 12.9765625,19.421875 C12.9765625,20.84375 11.8203125,22 10.3984375,22 Z" id="Path" fill="#57BE92">
        </path>
        <path d="M4.5546875,11.2878906 C4.090625,10.7464414 3.39448828,10.3984375 2.62109375,10.3984375 C1.20316797,10.3984375 0,11.5585508 0,12.9765625 C0,14.3944883 1.20316797,15.5546875 2.62109375,15.5546875 C3.39448828,15.5546875 4.090625,15.2065977 4.5546875,14.6652344 C4.9671875,14.2140195 5.19921875,13.6210938 5.19921875,12.9765625 C5.19921875,12.3320312 4.9671875,11.7390195 4.5546875,11.2878906 Z" id="Path" fill="#FDB441">
        </path>
        <path d="M19.421875,19.421875 C17.9999961,19.421875 16.84375,18.265625 16.84375,16.84375 C16.84375,15.4218711 17.9999961,14.265625 19.421875,14.265625 C20.84375,14.265625 22,15.4218711 22,16.84375 C22,18.265625 20.84375,19.421875 19.421875,19.421875 Z" id="Path" fill="#09A76D">
        </path>
        <path d="M5.19921875,12.9765625 C5.19921875,13.6210937 4.9671875,14.2140195 4.5546875,14.6652344 L4.5546875,11.2878906 C4.9671875,11.7390195 5.19921875,12.3320312 5.19921875,12.9765625 Z" id="Path" fill="#FDBF00">
        </path>
        <path d="M21.7421875,5.37105078 C21.5875,5.25507812 21.3684023,5.21636328 21.175,5.26788281 L16.84375,6.50542578 L12.1515625,7.84600781 C11.8809023,7.92335156 11.6875,8.18116406 11.6875,8.46480078 L11.6875,11.8936641 L12.9765625,11.5327695 L16.84375,10.4241328 L20.7109375,9.31553906 L22,8.95464453 L22,5.88671875 C22,5.68042578 21.9097656,5.5 21.7421875,5.37105078 Z" id="Path" fill="#57BE92">
        </path>
        <path d="M22,5.88671875 L22,8.9546875 L20.7109375,9.31558203 L16.84375,10.4241758 L16.84375,6.50546875 L21.175,5.26792578 C21.3684023,5.21640625 21.5875,5.25512109 21.7421875,5.37109375 C21.9097656,5.5 22,5.68042578 22,5.88671875 Z" id="Path" fill="#09A76D">
        </path>
    </svg>`
    },
    {
        name: "bin",
        value: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <style type="text/css">
            .st0{fill:#57BE92;}
            .st1{fill:#09A76D;}
            .st2{fill:#F3F3F3;}
            .st3{fill:#02905D;}
        </style>
        <path id="path-1" class="st0" d="M16.1,22.8H7.9c-0.9,0-1.7-0.7-1.7-1.6L5,6.9h14l-1.2,14.3C17.7,22.1,17,22.8,16.1,22.8z"/>
        <path id="Path" class="st1" d="M15.6,20.9l0.7,1.8v0.1c-0.1,0-0.1,0-0.2,0h-0.5L15,21.2c-0.1-0.2,0-0.4,0.2-0.4
            C15.4,20.7,15.6,20.8,15.6,20.9z"/>
        <path id="Path_1_" class="st1" d="M8.8,20.6C9,20.7,9.1,20.9,9,21.1l-0.6,1.7H7.9c-0.1,0-0.1,0-0.2,0v-0.1l0.7-1.8
            C8.4,20.7,8.6,20.6,8.8,20.6z"/>
        <path id="Path_2_" class="st1" d="M16.3,6.9L16.3,6.9l-0.7,1.9c0,0.1-0.2,0.2-0.3,0.2h-0.1C15,9,14.9,8.8,15,8.6l0.6-1.7
            C15.6,6.9,16.3,6.9,16.3,6.9z"/>
        <path id="Path_3_" class="st1" d="M8.4,6.8L9,8.5c0.1,0.2,0,0.4-0.2,0.4H8.7C8.5,9,8.4,8.9,8.4,8.7L7.7,7V6.9L8.4,6.8L8.4,6.8z"/>
        <path id="Path_4_" class="st1" d="M17.7,6.9l-1.2,14.3c-0.1,0.9-0.8,1.6-1.7,1.6h1.3c0.9,0,1.7-0.7,1.7-1.6L19,6.9H17.7z"/>
        <path id="Path_5_" class="st0" d="M17.3,2.2c-0.2-0.5-0.7-0.9-1.3-0.9H7.9c-0.6,0-1.1,0.4-1.3,0.9l-1,3.3H7l0.8-2.8
            c0-0.1,0.1-0.2,0.3-0.2h7.7c0.1,0,0.2,0.1,0.3,0.2L17,5.5h1.4L17.3,2.2z"/>
        <path id="Path_6_" class="st2" d="M17.3,13.3c-0.1-0.1-0.3-0.1-0.5,0.1l-0.6,0.8c-0.4-3.4-5.2-4.7-7.3-2c-0.3,0.3,0.2,0.7,0.5,0.4
            c1.8-2.4,5.9-1.2,6.2,1.7l-1-0.7c-0.3-0.3-0.7,0.3-0.4,0.5c0,0,1.5,1.2,1.6,1.2l0,0l0,0c0.1,0,0.3,0,0.3-0.1l0,0l0,0l1.2-1.5
            C17.4,13.6,17.4,13.4,17.3,13.3L17.3,13.3z"/>
        <path id="Path_7_" class="st2" d="M15.7,16c-0.2-0.1-0.4,0-0.4,0.2c-1.5,3.8-7.4,2.2-6.7-1.9c0.2,0.1,0.8,1.2,1,1.1
            c0.3,0,0.4-0.3,0.3-0.5l-1.2-1.5l0,0l0,0c-0.1-0.1-0.3-0.1-0.4-0.1l0,0l0,0l-1.5,1.2c-0.3,0.3,0.1,0.8,0.4,0.5L8,14.4
            c-0.6,4.7,6.3,6.5,8,2C16,16.3,15.9,16.1,15.7,16L15.7,16z"/>
        <path id="Path_8_" class="st1" d="M19.1,6.9H4.9c-0.2,0-0.3-0.2-0.3-0.3V5.8c0-0.2,0.2-0.3,0.3-0.3h14.2c0.2,0,0.3,0.2,0.3,0.3v0.8
            C19.4,6.8,19.3,6.9,19.1,6.9z"/>
        <path id="Path_9_" class="st3" d="M19.1,5.5h-1.3c0.2,0,0.3,0.2,0.3,0.3v0.8c0,0.2-0.2,0.3-0.3,0.3h1.3c0.2,0,0.3-0.2,0.3-0.3V5.9
            C19.4,5.7,19.3,5.5,19.1,5.5L19.1,5.5z"/>
        <path id="Path_10_" class="st3" d="M7,5.5l0.8-2.8c0-0.1,0.1-0.2,0.3-0.2h7.7c0.1,0,0.2,0.1,0.3,0.2L17,5.5"/>
        </svg>`
    },
    {
        name: "desktop",
        value: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g id="desktop" transform="translate(1.000000, 1.000000)" fill-rule="nonzero">
            <path d="M12.1982696,17.2635815 L8.47376258,18.5915493 L8.33255533,19.0851107 C8.13203219,19.7876056 7.37022133,20.362173 6.63983903,20.362173 L6.63983903,20.694165 L14.3641851,20.694165 L12.1982696,17.2635815 Z" id="Path" fill="#ADACA7">
            </path>
            <path d="M13.6674447,19.0851107 L13.1468813,17.2635815 L11,15.9356137 L8.85311871,17.2635815 L8.47376258,18.5915493 L12.1982696,18.5915493 L12.3394769,19.0851107 C12.54,19.7876056 13.3018109,20.362173 14.0321932,20.362173 L14.6961771,20.694165 L15.360161,20.362173 C14.6297787,20.362173 13.8679678,19.7876056 13.6674447,19.0851107 Z" id="Path" fill="#8F8F8B">
            </path>
            <path d="M19.3440644,17.2635815 L20.6720322,17.2635815 C21.4024145,17.2635815 22,16.665996 22,15.9356137 L22,13.2796781 L19.3440644,10.6237425 L19.3440644,17.2635815 Z" id="Path" fill="#ADACA7">
            </path>
            <path d="M0,15.9356137 C0,16.665996 0.597585513,17.2635815 1.32796781,17.2635815 L19.3440644,17.2635815 C20.0744467,17.2635815 20.6720322,16.665996 20.6720322,15.9356137 L20.6720322,7.96780684 L0,13.2796781 L0,15.9356137 Z" id="Path" fill="#CBC9C2">
            </path>
            <path d="M20.6720322,0 L19.3440644,0 L20.6720322,13.2796781 L22,13.2796781 L22,1.32796781 C22,0.597585513 21.4024145,0 20.6720322,0 Z" id="Path" fill="#404242">
            </path>
            <path d="M20.6720322,1.32796781 C20.6720322,0.597585513 20.0744467,0 19.3440644,0 L1.32796781,0 C0.597585513,0 0,0.597585513 0,1.32796781 L0,13.2796781 L20.6720322,13.2796781 L20.6720322,11.9517103 L11,6.63926358 L20.6720322,1.32796781 Z" id="Path" fill="#565959">
            </path>
            <path d="M20.6720322,1.32774648 L19.34433,1.3268169 C19.34433,1.32703823 11,6.63926358 11,6.63926358 C11,6.63926358 19.3441529,11.9517103 19.3440644,11.9517103 C19.3440644,11.9517103 20.6720322,11.9508249 20.6720322,11.9508249 C20.6720322,11.9508249 20.6718994,1.32792354 20.6720322,1.32774648 Z" id="Path" fill="#4B88D5">
            </path>
            <path d="M19.3440644,1.32774648 L1.33186318,1.32677264 C1.33075654,1.32730382 1.32982696,11.9514889 1.32796781,11.9517103 C1.32796781,11.9517103 19.3431791,11.9508249 19.3436217,11.9508249 C19.3438431,11.9508249 19.3422052,1.32792354 19.3440644,1.32774648 Z" id="Path" fill="#69A7FF">
            </path>
            <circle id="Oval" fill="#F3F3F3" cx="11" cy="15.2716298" r="1">
            </circle>
            <path d="M17.861167,21.0261569 L4.138833,21.0261569 C3.95548491,21.0261569 3.80684105,20.8775573 3.80684105,20.694165 C3.80684105,20.5107726 3.95548491,20.362173 4.138833,20.362173 L17.861167,20.362173 C18.0445151,20.362173 18.193159,20.5107726 18.193159,20.694165 C18.193159,20.8775573 18.0445151,21.0261569 17.861167,21.0261569 Z" id="Path" fill="#8F8F8B">
            </path>
        </g>
    </svg>`
    },
    {
        name: "docs_folder",
        value: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g id="folder" transform="translate(2.000000, 1.000000)" fill-rule="nonzero">
            <path d="M15.8430508,0.664640625 L14.85,0.664640625 C14.85,0.297644531 14.5525273,0 14.1853594,0 L2.62530469,0 C2.25826562,0 1.96066406,0.297558594 1.96066406,0.664640625 L1.96066406,18.3290078 C1.96066406,18.6960898 2.25826562,18.9936484 2.62530469,18.9936484 C15.2264922,18.9936484 14.2443555,19.0324062 14.4613906,18.9330625 C14.6295703,18.8560625 14.7599375,18.7111289 14.8175156,18.5333672 L15.8430508,18.5333672 C15.8430508,18.405793 15.8430508,0.913730469 15.8430508,0.664640625 Z" id="Path" fill="#69A7FF">
            </path>
            <path d="M15.5670195,0 L14.1853594,0 C14.5524414,0 14.85,0.297558594 14.85,0.664640625 L14.85,18.3290078 C14.85,18.6960898 14.5524414,18.9936484 14.1853594,18.9936484 L15.5670195,18.9936484 C15.9341016,18.9936484 16.2316602,18.6960898 16.2316602,18.3290078 L16.2316602,0.664640625 C16.2316602,0.297558594 15.9341016,0 15.5670195,0 L15.5670195,0 Z" id="Path" fill="#4B88D5">
            </path>
            <path d="M16.2316602,4.55305469 L13.1617578,1.48315234 L3.9194375,1.48315234 C3.4120625,1.48315234 3.00072266,1.89449219 3.00072266,2.40186719 L3.00072266,18.8285625 C3.00072266,18.8850234 3.00656641,18.9400234 3.01632031,18.9936484 L15.5670195,18.9936484 C15.9341016,18.9936484 16.2316602,18.6960898 16.2316602,18.3290078 L16.2316602,4.55305469 Z" id="Path" fill="#8EBDFF">
            </path>
            <path d="M17.3204023,4.72415625 L15.7626563,3.75151563 L14.4177773,1.48315234 L5.17545703,1.48315234 C4.66808203,1.48315234 4.25674219,1.89449219 4.25674219,2.40186719 L4.25674219,18.8285625 C4.25674219,19.3359375 4.66808203,19.7472773 5.17545703,19.7472773 L17.3025703,19.7472773 C17.3085859,19.7472773 17.3144297,19.7465039 17.3204023,19.746375 L17.3204023,4.72415625 Z" id="Path" fill="#EAF6FF">
            </path>
            <path d="M18.2212852,5.28666016 L16.839668,4.42397656 L16.839668,18.8286055 C16.839668,19.3359805 16.4283281,19.7473203 15.9209531,19.7473203 L17.3026133,19.7473203 C17.8099883,19.7473203 18.2213281,19.3359805 18.2213281,18.8286055 L18.2213281,5.28666016 L18.2212852,5.28666016 Z" id="Path" fill="#D8ECFE">
            </path>
            <path d="M15.3364922,5.28666016 L18.2212852,5.28666016 L14.4177773,1.48315234 L14.4177773,4.36794531 C14.4177773,4.87532031 14.8291172,5.28666016 15.3364922,5.28666016 Z" id="Path" fill="#8EBDFF">
            </path>
            <g id="Group" transform="translate(6.101562, 6.703125)" fill="#8EBDFF">
                <path d="M9.91482422,0.665457031 L0.360121094,0.665457031 C0.176558594,0.665457031 0.0278007812,0.51665625 0.0278007812,0.333136719 C0.0278007812,0.149617187 0.176558594,0.00081640625 0.360121094,0.00081640625 L9.91482422,0.00081640625 C10.0983867,0.00081640625 10.2471445,0.149617187 10.2471445,0.333136719 C10.2471445,0.51665625 10.0983867,0.665457031 9.91482422,0.665457031 Z" id="Path">
                </path>
                <path d="M9.91482422,2.86416797 L0.360121094,2.86416797 C0.176558594,2.86416797 0.0278007812,2.71536719 0.0278007812,2.53184766 C0.0278007812,2.34832812 0.176558594,2.19952734 0.360121094,2.19952734 L9.91482422,2.19952734 C10.0983867,2.19952734 10.2471445,2.34832812 10.2471445,2.53184766 C10.2471445,2.71536719 10.0983867,2.86416797 9.91482422,2.86416797 Z" id="Path">
                </path>
            </g>
            <path d="M19.63775,11 L18.9175078,11 C18.763293,10.7333789 18.4750586,10.5545859 18.150043,10.5545859 C17.6941875,10.5545859 7.63477344,10.5545859 6.99346484,10.5545859 L5.82686328,8.62438672 L5.11968359,8.62438672 C4.99546094,8.4583125 4.79922266,8.35772266 4.58773047,8.35772266 L0.699875,8.35772266 C0.332792969,8.35772266 0.035234375,8.65532422 0.035234375,9.02236328 L0.035234375,21.1137695 C0.035234375,21.6032266 0.432007813,21.999957 0.921421875,21.999957 L18.150043,21.999957 C18.2963945,21.999957 18.4451953,21.9620586 18.5768086,21.8893125 L18.5785273,21.8893125 C18.6902031,21.8274805 18.7867969,21.7419727 18.8623359,21.6399648 L19.63775,21.6399648 L19.63775,11 L19.63775,11 Z" id="Path" fill="#FDB441">
            </path>
            <g id="Group" transform="translate(4.554688, 8.335938)" fill="#FEA613">
                <path d="M0.621972656,0.378296875 L1.58494531,2.21864844 L2.96660547,2.21864844 L2.00363281,0.378296875 C1.88894922,0.159113281 1.66207422,0.0217851563 1.41474609,0.0217851563 L0.0330859375,0.0217851563 C0.280414062,0.0217851563 0.507289062,0.159113281 0.621972656,0.378296875 L0.621972656,0.378296875 Z" id="Path">
                </path>
                <path d="M14.9770156,2.21864844 L13.5953984,2.21864844 C14.0848555,2.21864844 14.4815859,2.61542187 14.4815859,3.10483594 L14.4815859,12.777832 C14.4815859,13.2672891 14.0848125,13.6640195 13.5953984,13.6640195 L14.9770156,13.6640195 C15.4664727,13.6640195 15.8632031,13.2672461 15.8632031,12.777832 L15.8632031,3.10487891 C15.8632031,2.61542188 15.4664297,2.21864844 14.9770156,2.21864844 Z" id="Path">
                </path>
            </g>
        </g>
    </svg>`
    },
    {
        name: "music",
        value: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6875,18.7773438 C11.6875,19.1335977 11.9757773,19.421875 12.3320312,19.421875 C12.6882852,19.421875 12.9765625,19.1335977 12.9765625,18.7773438 L12.9765625,11.529418 L12.3886211,10.4083203 L11.6875,11.8977461 L11.6875,18.7773438 Z" id="Path" fill="#09A76D">
        </path>
        <path d="M20.7109375,16.1992188 C20.7109375,16.5554727 20.9992148,16.84375 21.3554688,16.84375 C21.7117227,16.84375 22,16.5554727 22,16.1992188 L22,8.95125 L21.3875664,7.83719922 L20.7109375,9.31962109 L20.7109375,16.1992188 Z" id="Path" fill="#02905D">
        </path>
        <path d="M10.3984375,7.17578125 C10.3984375,8.9546875 8.9546875,10.3984375 7.17578125,10.3984375 C6.81480078,10.3984375 6.53125,10.1148008 6.53125,9.75390625 C6.53125,9.39292578 6.81480078,9.109375 7.17578125,9.109375 C8.24574609,9.109375 9.109375,8.24566016 9.109375,7.17578125 C9.109375,6.55698828 8.82582422,5.98980078 8.32304687,5.61597266 C7.29179688,4.86827344 6.11445312,3.91015625 5.19921875,2.76284766 L5.19921875,12.9765625 C5.19921875,13.337457 4.91566797,13.6210938 4.5546875,13.6210938 C4.19370703,13.6210938 3.91015625,13.337457 3.91015625,12.9765625 L3.91015625,0.64453125 C3.91015625,0.360894531 4.090625,0.115972656 4.36128516,0.0257382813 C4.42582422,0.012890625 4.49023438,0 4.5546875,0 C4.76089453,0 4.9671875,0.103082031 5.09605078,0.283550781 L5.83081641,1.40503516 C6.68164062,2.66835937 7.9234375,3.72109375 9.08355078,4.57183203 C9.90859375,5.17773438 10.3984375,6.15737891 10.3984375,7.17578125 Z" id="Path" fill="#FEA613">
        </path>
        <path d="M10.3984375,7.17578125 C10.3984375,8.9546875 8.9546875,10.3984375 7.17578125,10.3984375 C6.81480078,10.3984375 6.53125,10.1148008 6.53125,9.75390625 C6.53125,9.39292578 6.81480078,9.109375 7.17578125,9.109375 C8.24574609,9.109375 9.109375,8.24566016 9.109375,7.17578125 C9.109375,6.55698828 8.82582422,5.98980078 8.32304687,5.61597266 C7.29179688,4.86827344 6.11445312,3.91015625 5.19921875,2.76284766 L5.19921875,12.9765625 C5.19921875,13.337457 4.91566797,13.6210938 4.5546875,13.6210938 L4.5546875,0 C4.76089453,0 4.9671875,0.103082031 5.09605078,0.283550781 L5.83081641,1.40503516 C6.68164062,2.66835937 7.9234375,3.72109375 9.08355078,4.57183203 C9.90859375,5.17773438 10.3984375,6.15737891 10.3984375,7.17578125 Z" id="Path" fill="#FEA613">
        </path>
        <path d="M10.3984375,22 C8.97655859,22 7.8203125,20.84375 7.8203125,19.421875 C7.8203125,17.9999961 8.97655859,16.84375 10.3984375,16.84375 C11.8203125,16.84375 12.9765625,17.9999961 12.9765625,19.421875 C12.9765625,20.84375 11.8203125,22 10.3984375,22 Z" id="Path" fill="#57BE92">
        </path>
        <path d="M4.5546875,11.2878906 C4.090625,10.7464414 3.39448828,10.3984375 2.62109375,10.3984375 C1.20316797,10.3984375 0,11.5585508 0,12.9765625 C0,14.3944883 1.20316797,15.5546875 2.62109375,15.5546875 C3.39448828,15.5546875 4.090625,15.2065977 4.5546875,14.6652344 C4.9671875,14.2140195 5.19921875,13.6210938 5.19921875,12.9765625 C5.19921875,12.3320312 4.9671875,11.7390195 4.5546875,11.2878906 Z" id="Path" fill="#FDB441">
        </path>
        <path d="M19.421875,19.421875 C17.9999961,19.421875 16.84375,18.265625 16.84375,16.84375 C16.84375,15.4218711 17.9999961,14.265625 19.421875,14.265625 C20.84375,14.265625 22,15.4218711 22,16.84375 C22,18.265625 20.84375,19.421875 19.421875,19.421875 Z" id="Path" fill="#09A76D">
        </path>
        <path d="M5.19921875,12.9765625 C5.19921875,13.6210937 4.9671875,14.2140195 4.5546875,14.6652344 L4.5546875,11.2878906 C4.9671875,11.7390195 5.19921875,12.3320312 5.19921875,12.9765625 Z" id="Path" fill="#FDBF00">
        </path>
        <path d="M21.7421875,5.37105078 C21.5875,5.25507812 21.3684023,5.21636328 21.175,5.26788281 L16.84375,6.50542578 L12.1515625,7.84600781 C11.8809023,7.92335156 11.6875,8.18116406 11.6875,8.46480078 L11.6875,11.8936641 L12.9765625,11.5327695 L16.84375,10.4241328 L20.7109375,9.31553906 L22,8.95464453 L22,5.88671875 C22,5.68042578 21.9097656,5.5 21.7421875,5.37105078 Z" id="Path" fill="#57BE92">
        </path>
        <path d="M22,5.88671875 L22,8.9546875 L20.7109375,9.31558203 L16.84375,10.4241758 L16.84375,6.50546875 L21.175,5.26792578 C21.3684023,5.21640625 21.5875,5.25512109 21.7421875,5.37109375 C21.9097656,5.5 22,5.68042578 22,5.88671875 Z" id="Path" fill="#09A76D">
        </path>
    </svg>`
    },
    {
        name: "picture",
        value: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.72886905,4.11701984 L21.0065079,4.11701984 C21.5566389,4.11701984 21.9864246,4.56400397 21.9864246,5.09693651 L21.9864246,17.9047341 C21.9864246,18.4548651 21.5394405,18.8846508 21.0065079,18.8846508 L3.72886905,18.8846508 C3.1787381,18.8846508 2.74895238,18.4376667 2.74895238,17.9047341 L2.74895238,5.09698016 C2.74895238,4.56400397 3.19593651,4.11701984 3.72886905,4.11701984 Z" id="Path" fill="#F3F3F3" fill-rule="nonzero">
        </path>
        <path d="M4.88072619,5.49236905 L19.8890913,5.49236905 C20.3016786,5.49236905 20.6455159,5.83620635 20.6455159,6.24879365 L20.6455159,16.770119 C20.6455159,17.1827063 20.3016786,17.5265437 19.8890913,17.5265437 L4.88072619,17.5265437 C4.46813889,17.5265437 4.12430159,17.1827063 4.12430159,16.770119 L4.12430159,6.24879365 C4.12430159,5.83620635 4.45094048,5.49236905 4.88072619,5.49236905 Z" id="Path" fill="#69A7FF" fill-rule="nonzero">
        </path>
        <path d="M4.12430159,6.24879365 L4.12430159,9.92781349 C4.29619841,9.9450119 4.46813889,9.96221032 4.64003571,9.96221032 C6.82336111,9.96221032 8.59414286,8.19147222 8.59414286,6.00810317 C8.59414286,5.83620635 8.57694444,5.66426587 8.55974603,5.49236905 L4.88072619,5.49236905 C4.45094048,5.49236905 4.12430159,5.83620635 4.12430159,6.24879365 Z" id="Path" fill="#FDB441" fill-rule="nonzero">
        </path>
        <path d="M15.365004,13.9163175 C14.9352183,13.9163175 14.5054325,13.9507143 14.11,14.0022659 L14.11,16.770119 C14.11,17.1827063 14.4538373,17.5265437 14.8664246,17.5265437 L20.5912698,17.5265437 C20.6256667,17.3718016 20.6428651,17.2343016 20.6428651,17.0795595 C20.6428651,15.3260198 18.2875992,13.9163175 15.365004,13.9163175 Z" id="Path" fill="#09A76D" fill-rule="nonzero" transform="translate(17.376433, 15.721431) scale(-1, 1) translate(-17.376433, -15.721431) ">
        </path>
        <path d="M12.7158452,12.3690278 C8.00531349,12.3690278 4.17155159,14.6726984 4.12,17.5265437 L15.2258532,17.5265437 C15.6384405,17.5265437 15.9822778,17.1827063 15.9822778,16.770119 L15.9822778,12.7644603 C14.9679643,12.5237698 13.8677024,12.3690278 12.7158452,12.3690278 Z" id="Path" fill="#57BE92" fill-rule="nonzero" transform="translate(10.051139, 14.947786) scale(-1, 1) translate(-10.051139, -14.947786) ">
        </path>
    </svg>`
    },
    {
        name: "pictures",
        value: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.672390909,11.2621253 L14.5709608,1.17591329 C15.0031489,0.862682645 15.6276339,0.954420916 15.9408802,1.38664972 L23.3745309,11.5892356 C23.6877615,12.0214237 23.5898755,12.6298934 23.141575,12.9492623 L9.2430458,23.0354586 C8.81085775,23.3486893 8.18637271,23.256951 7.87312643,22.8247222 L0.45553187,12.6159729 C0.142301228,12.1837849 0.240202859,11.5753559 0.672390909,11.2621253 Z" id="Path" fill="#CBC9C2" fill-rule="nonzero">
        </path>
        <path d="M3.11287302,8.26887698 L17.6226587,4.4007619 C18.0180476,4.29761508 18.4306786,4.53830556 18.5510238,4.93369444 L21.2673254,15.0252341 C21.3704722,15.420623 21.1297817,15.833254 20.7343929,15.9364008 L6.22456349,19.8045159 C5.8291746,19.9076627 5.41654365,19.6669722 5.29619841,19.2715833 L2.57994048,9.18004365 C2.45959524,8.78461111 2.70028571,8.37202381 3.11287302,8.26887698 Z" id="Path" fill="#8EBDFF" fill-rule="nonzero" transform="translate(11.920065, 12.102639) rotate(-21.000000) translate(-11.920065, -12.102639) ">
        </path>
        <path d="M1.7203254,8.28896032 L18.3103333,3.85347222 C18.8260675,3.71592857 19.3761984,4.02536905 19.5137421,4.54114683 L22.797373,16.7300635 C22.9349167,17.2457976 22.6254762,17.7787738 22.0925,17.9162738 L5.50253571,22.3517619 C4.98680159,22.4893056 4.43667063,22.1798651 4.29912698,21.6640873 L1.03269444,9.47517063 C0.895150794,8.95943651 1.20459127,8.42650397 1.7203254,8.28896032 Z" id="Path" fill="#CBC9C2" fill-rule="nonzero">
        </path>
        <path d="M3.11287302,9.26887698 L17.6226587,5.4007619 C18.0180476,5.29761508 18.4306786,5.53830556 18.5510238,5.93369444 L21.2673254,16.0252341 C21.3704722,16.420623 21.1297817,16.833254 20.7343929,16.9364008 L6.22456349,20.8045159 C5.8291746,20.9076627 5.41654365,20.6669722 5.29619841,20.2715833 L2.57994048,10.1800437 C2.45959524,9.78461111 2.70028571,9.37202381 3.11287302,9.26887698 Z" id="Path" fill="#8EBDFF" fill-rule="nonzero">
        </path>
        <path d="M4.72886905,8.11701984 L22.0065079,8.11701984 C22.5566389,8.11701984 22.9864246,8.56400397 22.9864246,9.09693651 L22.9864246,21.9047341 C22.9864246,22.4548651 22.5394405,22.8846508 22.0065079,22.8846508 L4.72886905,22.8846508 C4.1787381,22.8846508 3.74895238,22.4376667 3.74895238,21.9047341 L3.74895238,9.09698016 C3.74895238,8.56400397 4.19593651,8.11701984 4.72886905,8.11701984 Z" id="Path" fill="#F3F3F3" fill-rule="nonzero">
        </path>
        <path d="M5.88072619,9.49236905 L20.8890913,9.49236905 C21.3016786,9.49236905 21.6455159,9.83620635 21.6455159,10.2487937 L21.6455159,20.770119 C21.6455159,21.1827063 21.3016786,21.5265437 20.8890913,21.5265437 L5.88072619,21.5265437 C5.46813889,21.5265437 5.12430159,21.1827063 5.12430159,20.770119 L5.12430159,10.2487937 C5.12430159,9.83620635 5.45094048,9.49236905 5.88072619,9.49236905 Z" id="Path" fill="#69A7FF" fill-rule="nonzero">
        </path>
        <path d="M5.12430159,10.2487937 L5.12430159,13.9278135 C5.29619841,13.9450119 5.46813889,13.9622103 5.64003571,13.9622103 C7.82336111,13.9622103 9.59414286,12.1914722 9.59414286,10.0081032 C9.59414286,9.83620635 9.57694444,9.66426587 9.55974603,9.49236905 L5.88072619,9.49236905 C5.45094048,9.49236905 5.12430159,9.83620635 5.12430159,10.2487937 Z" id="Path" fill="#FDB441" fill-rule="nonzero">
        </path>
        <path d="M6.37930556,17.9163175 C5.94951984,17.9163175 5.51973413,17.9507143 5.12430159,18.0022659 L5.12430159,20.770119 C5.12430159,21.1827063 5.46813889,21.5265437 5.88072619,21.5265437 L11.6055714,21.5265437 C11.6399683,21.3718016 11.6571667,21.2343016 11.6571667,21.0795595 C11.6571667,19.3260198 9.30190079,17.9163175 6.37930556,17.9163175 Z" id="Path" fill="#09A76D" fill-rule="nonzero">
        </path>
        <path d="M18.3618849,16.3690278 C13.6513532,16.3690278 9.81759127,18.6726984 9.76603968,21.5265437 L20.8718929,21.5265437 C21.2844802,21.5265437 21.6283175,21.1827063 21.6283175,20.770119 L21.6283175,16.7644603 C20.614004,16.5237698 19.5137421,16.3690278 18.3618849,16.3690278 Z" id="Path" fill="#57BE92" fill-rule="nonzero">
        </path>
    </svg>`
    },
    {
        name: "report",
        value: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g id="google-docs" transform="translate(4.000000, 1.000000)" fill-rule="nonzero">
            <path d="M16.7578125,5.80078125 L12.2460938,4.51171875 L10.9570312,0 L1.93359375,0 C0.865691406,0 0,0.865691406 0,1.93359375 L0,20.0664062 C0,21.1343086 0.865691406,22 1.93359375,22 L14.8242188,22 C15.8921211,22 16.7578125,21.1343086 16.7578125,20.0664062 L16.7578125,5.80078125 Z" id="Path" fill="#69A7FF">
            </path>
            <path d="M16.7578125,5.80078125 L16.7578125,20.0664062 C16.7578125,21.1343086 15.8921211,22 14.8242188,22 L8.37890625,22 L8.37890625,0 L10.9570312,0 L12.2460938,4.51171875 L16.7578125,5.80078125 Z" id="Path" fill="#4B88D5">
            </path>
            <path d="M16.7578125,5.80078125 L12.2460938,5.80078125 C11.5371094,5.80078125 10.9570312,5.22070312 10.9570312,4.51171875 L10.9570312,0 C11.1246094,0 11.2921875,0.064453125 11.4081602,0.193402344 L16.5644102,5.34965234 C16.6933594,5.465625 16.7578125,5.63320312 16.7578125,5.80078125 Z" id="Path" fill="#8EBDFF">
            </path>
            <path d="M12.2460938,10.3554688 L4.51171875,10.3554688 C4.15546484,10.3554688 3.8671875,10.0671914 3.8671875,9.7109375 C3.8671875,9.35468359 4.15546484,9.06640625 4.51171875,9.06640625 L12.2460938,9.06640625 C12.6023477,9.06640625 12.890625,9.35468359 12.890625,9.7109375 C12.890625,10.0671914 12.6023477,10.3554688 12.2460938,10.3554688 Z" id="Path" fill="#F3F3F3">
            </path>
            <path d="M12.2460938,12.9335938 L4.51171875,12.9335938 C4.15546484,12.9335938 3.8671875,12.6453164 3.8671875,12.2890625 C3.8671875,11.9328086 4.15546484,11.6445312 4.51171875,11.6445312 L12.2460938,11.6445312 C12.6023477,11.6445312 12.890625,11.9328086 12.890625,12.2890625 C12.890625,12.6453164 12.6023477,12.9335938 12.2460938,12.9335938 Z" id="Path" fill="#F3F3F3">
            </path>
            <path d="M12.2460938,15.5117188 L4.51171875,15.5117188 C4.15546484,15.5117188 3.8671875,15.2234414 3.8671875,14.8671875 C3.8671875,14.5109336 4.15546484,14.2226562 4.51171875,14.2226562 L12.2460938,14.2226562 C12.6023477,14.2226562 12.890625,14.5109336 12.890625,14.8671875 C12.890625,15.2234414 12.6023477,15.5117188 12.2460938,15.5117188 Z" id="Path" fill="#F3F3F3">
            </path>
            <path d="M9.66796875,18.0898438 L4.51171875,18.0898438 C4.15546484,18.0898438 3.8671875,17.8015664 3.8671875,17.4453125 C3.8671875,17.0890586 4.15546484,16.8007812 4.51171875,16.8007812 L9.66796875,16.8007812 C10.0242227,16.8007812 10.3125,17.0890586 10.3125,17.4453125 C10.3125,17.8015664 10.0242227,18.0898438 9.66796875,18.0898438 Z" id="Path" fill="#F3F3F3">
            </path>
            <g id="Group" transform="translate(8.378906, 9.066406)" fill="#E3E7EA">
                <path d="M0,9.0234375 L1.2890625,9.0234375 C1.64531641,9.0234375 1.93359375,8.73516016 1.93359375,8.37890625 C1.93359375,8.02265234 1.64531641,7.734375 1.2890625,7.734375 L0,7.734375 L0,9.0234375 Z" id="Path">
                </path>
                <path d="M0,6.4453125 L3.8671875,6.4453125 C4.22344141,6.4453125 4.51171875,6.15703516 4.51171875,5.80078125 C4.51171875,5.44452734 4.22344141,5.15625 3.8671875,5.15625 L0,5.15625 L0,6.4453125 Z" id="Path">
                </path>
                <path d="M0,3.8671875 L3.8671875,3.8671875 C4.22344141,3.8671875 4.51171875,3.57891016 4.51171875,3.22265625 C4.51171875,2.86640234 4.22344141,2.578125 3.8671875,2.578125 L0,2.578125 L0,3.8671875 Z" id="Path">
                </path>
                <path d="M0,1.2890625 L3.8671875,1.2890625 C4.22344141,1.2890625 4.51171875,1.00078516 4.51171875,0.64453125 C4.51171875,0.288277344 4.22344141,0 3.8671875,0 L0,0 L0,1.2890625 Z" id="Path">
                </path>
            </g>
        </g>
    </svg>`
    },
    {
        name: "network",
        value: `
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="network" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="desktop" transform="translate(1.000000, 1.000000)" fill-rule="nonzero">
                <path d="M7.20806841,10.6736842 L5.00722334,11.4947368 L4.9237827,11.7998947 C4.80529175,12.2342316 4.35513078,12.5894737 3.92354125,12.5894737 L3.92354125,12.7947368 L8.48792757,12.7947368 L7.20806841,10.6736842 Z" id="Path" fill="#ADACA7"></path>
                <path d="M8.0762173,11.7998947 L7.76861167,10.6736842 L6.5,9.85263158 L5.23138833,10.6736842 L5.00722334,11.4947368 L7.20806841,11.4947368 L7.29150905,11.7998947 C7.41,12.2342316 7.86016097,12.5894737 8.2917505,12.5894737 L8.68410463,12.7947368 L9.07645875,12.5894737 C8.64486922,12.5894737 8.19470825,12.2342316 8.0762173,11.7998947 Z" id="Path" fill="#8F8F8B"></path>
                <path d="M11.4305835,10.6736842 L12.2152918,10.6736842 C12.6468813,10.6736842 13,10.3042105 13,9.85263158 L13,8.21052632 L11.4305835,6.56842105 L11.4305835,10.6736842 Z" id="Path" fill="#ADACA7"></path>
                <path d="M0,9.85263158 C0,10.3042105 0.353118712,10.6736842 0.784708249,10.6736842 L11.4305835,10.6736842 C11.862173,10.6736842 12.2152918,10.3042105 12.2152918,9.85263158 L12.2152918,4.92631579 L0,8.21052632 L0,9.85263158 Z" id="Path" fill="#CBC9C2"></path>
                <path d="M12.2152918,0 L11.4305835,0 L12.2152918,8.21052632 L13,8.21052632 L13,0.821052632 C13,0.369473684 12.6468813,0 12.2152918,0 Z" id="Path" fill="#404242"></path>
                <path d="M12.2152918,0.821052632 C12.2152918,0.369473684 11.862173,0 11.4305835,0 L0.784708249,0 C0.353118712,0 0,0.369473684 0,0.821052632 L0,8.21052632 L12.2152918,8.21052632 L12.2152918,7.38947368 L6.5,4.10490737 L12.2152918,0.821052632 Z" id="Path" fill="#565959"></path>
                <path d="M12.2152918,0.820915789 L11.4307404,0.820341053 C11.4307404,0.820477895 6.5,4.10490737 6.5,4.10490737 C6.5,4.10490737 11.4306358,7.38947368 11.4305835,7.38947368 C11.4305835,7.38947368 12.2152918,7.38892632 12.2152918,7.38892632 C12.2152918,7.38892632 12.2152133,0.821025263 12.2152918,0.820915789 Z" id="Path" fill="#4B88D5"></path>
                <path d="M11.4305835,0.820915789 L0.78701006,0.820313684 C0.786356137,0.820642105 0.785806841,7.38933684 0.784708249,7.38947368 C0.784708249,7.38947368 11.4300604,7.38892632 11.4303219,7.38892632 C11.4304527,7.38892632 11.4294849,0.821025263 11.4305835,0.820915789 Z" id="Path" fill="#69A7FF"></path>
                <ellipse id="Oval" fill="#F3F3F3" cx="6.5" cy="9.44210526" rx="1" ry="1"></ellipse>
                <path d="M10.554326,13 L2.44567404,13 C2.33733199,13 2.24949698,12.9081242 2.24949698,12.7947368 C2.24949698,12.6813495 2.33733199,12.5894737 2.44567404,12.5894737 L10.554326,12.5894737 C10.662668,12.5894737 10.750503,12.6813495 10.750503,12.7947368 C10.750503,12.9081242 10.662668,13 10.554326,13 Z" id="Path" fill="#8F8F8B"></path>
            </g>
            <path d="M8.90591029,20.3398629 C6.81470393,20.5347547 4.5294371,18.9119556 4.98767279,16.2973475 C5.14700091,16.4342459 5.76188372,17.4713826 6.02137201,17.4150936 C6.28365326,17.4230428 6.44981341,17.0910662 6.27884076,16.886535 C6.27205169,16.8780272 5.10282904,15.3825428 5.09689935,15.3751092 C5.09612591,15.3741209 5.09526654,15.3732615 5.0944931,15.3723162 C5.08890716,15.3653123 5.08306341,15.3585233 5.07691888,15.352035 C4.97581341,15.2426795 4.80110247,15.217242 4.67327044,15.2951444 C4.66497747,15.3000428 4.65702826,15.3053279 4.64925091,15.3109139 C4.63627435,15.3182186 3.13898529,16.4921678 3.12635247,16.5009334 C2.7886181,16.7571131 3.19866888,17.2827498 3.52935638,17.0161717 C3.52931341,17.0161717 4.31289154,16.4034373 4.31289154,16.4034373 C3.93797429,19.4129001 6.57152754,21.2109668 8.98559004,20.9829055 C9.14881316,20.9674855 9.2880384,20.8404883 9.26049533,20.6182064 C9.23295227,20.3959245 9.06788635,20.3247674 8.90591029,20.3398629 Z" id="Path" fill="#CBC9C2" fill-rule="nonzero"></path>
            <path d="M20.6459103,8.08986289 C18.5547039,8.28475472 16.2694371,6.66195556 16.7276728,4.04734748 C16.8870009,4.18424591 17.5018837,5.22138263 17.761372,5.16509357 C18.0236533,5.17304279 18.1898134,4.84106623 18.0188408,4.63653498 C18.0120517,4.62802716 16.842829,3.13254279 16.8368993,3.1251092 C16.8361259,3.12412091 16.8352665,3.12326154 16.8344931,3.12231623 C16.8289072,3.11531232 16.8230634,3.10852326 16.8169189,3.10203498 C16.7158134,2.99267951 16.5411025,2.96724201 16.4132704,3.04514435 C16.4049775,3.05004279 16.3970283,3.05532795 16.3892509,3.06091388 C16.3762743,3.06821857 14.8789853,4.24216779 14.8663525,4.25093341 C14.5286181,4.5071131 14.9386689,5.03274982 15.2693564,4.7661717 C15.2693134,4.7661717 16.0528915,4.15343732 16.0528915,4.15343732 C15.6779743,7.16290008 18.3115275,8.96096684 20.72559,8.73290552 C20.8888132,8.71748551 21.0280384,8.59048833 21.0004953,8.36820643 C20.9729523,8.14592454 20.8078864,8.07476738 20.6459103,8.08986289 Z" id="Path-Copy" fill="#CBC9C2" fill-rule="nonzero" transform="translate(17.871996, 5.876153) rotate(180.000000) translate(-17.871996, -5.876153) "></path>
            <g id="desktop-copy" transform="translate(10.000000, 10.000000)" fill-rule="nonzero">
                <path d="M7.20806841,10.6736842 L5.00722334,11.4947368 L4.9237827,11.7998947 C4.80529175,12.2342316 4.35513078,12.5894737 3.92354125,12.5894737 L3.92354125,12.7947368 L8.48792757,12.7947368 L7.20806841,10.6736842 Z" id="Path" fill="#ADACA7"></path>
                <path d="M8.0762173,11.7998947 L7.76861167,10.6736842 L6.5,9.85263158 L5.23138833,10.6736842 L5.00722334,11.4947368 L7.20806841,11.4947368 L7.29150905,11.7998947 C7.41,12.2342316 7.86016097,12.5894737 8.2917505,12.5894737 L8.68410463,12.7947368 L9.07645875,12.5894737 C8.64486922,12.5894737 8.19470825,12.2342316 8.0762173,11.7998947 Z" id="Path" fill="#8F8F8B"></path>
                <path d="M11.4305835,10.6736842 L12.2152918,10.6736842 C12.6468813,10.6736842 13,10.3042105 13,9.85263158 L13,8.21052632 L11.4305835,6.56842105 L11.4305835,10.6736842 Z" id="Path" fill="#ADACA7"></path>
                <path d="M0,9.85263158 C0,10.3042105 0.353118712,10.6736842 0.784708249,10.6736842 L11.4305835,10.6736842 C11.862173,10.6736842 12.2152918,10.3042105 12.2152918,9.85263158 L12.2152918,4.92631579 L0,8.21052632 L0,9.85263158 Z" id="Path" fill="#CBC9C2"></path>
                <path d="M12.2152918,0 L11.4305835,0 L12.2152918,8.21052632 L13,8.21052632 L13,0.821052632 C13,0.369473684 12.6468813,0 12.2152918,0 Z" id="Path" fill="#404242"></path>
                <path d="M12.2152918,0.821052632 C12.2152918,0.369473684 11.862173,0 11.4305835,0 L0.784708249,0 C0.353118712,0 0,0.369473684 0,0.821052632 L0,8.21052632 L12.2152918,8.21052632 L12.2152918,7.38947368 L6.5,4.10490737 L12.2152918,0.821052632 Z" id="Path" fill="#565959"></path>
                <path d="M12.2152918,0.820915789 L11.4307404,0.820341053 C11.4307404,0.820477895 6.5,4.10490737 6.5,4.10490737 C6.5,4.10490737 11.4306358,7.38947368 11.4305835,7.38947368 C11.4305835,7.38947368 12.2152918,7.38892632 12.2152918,7.38892632 C12.2152918,7.38892632 12.2152133,0.821025263 12.2152918,0.820915789 Z" id="Path" fill="#4B88D5"></path>
                <path d="M11.4305835,0.820915789 L0.78701006,0.820313684 C0.786356137,0.820642105 0.785806841,7.38933684 0.784708249,7.38947368 C0.784708249,7.38947368 11.4300604,7.38892632 11.4303219,7.38892632 C11.4304527,7.38892632 11.4294849,0.821025263 11.4305835,0.820915789 Z" id="Path" fill="#69A7FF"></path>
                <ellipse id="Oval" fill="#F3F3F3" cx="6.5" cy="9.44210526" rx="1" ry="1"></ellipse>
                <path d="M10.554326,13 L2.44567404,13 C2.33733199,13 2.24949698,12.9081242 2.24949698,12.7947368 C2.24949698,12.6813495 2.33733199,12.5894737 2.44567404,12.5894737 L10.554326,12.5894737 C10.662668,12.5894737 10.750503,12.6813495 10.750503,12.7947368 C10.750503,12.9081242 10.662668,13 10.554326,13 Z" id="Path" fill="#8F8F8B"></path>
            </g>
        </g>
    </svg>`
    },
    {
        name: "refresh",
        value: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
        </svg>`
    }
];
```
```css
igc-tree {
    width: 320px;
    max-height: 360px;
    overflow-y: auto;
}

.tree-item-icon {
    display: flex;
    align-items: center;
    vertical-align: middle;
}

.item-refresh {
    cursor: pointer;
    padding: 0px 4px;
    color: var(--igx-success-500);
}

.item {
    display: flex;
    align-items: center;
}

.item-title {
    margin: 0 10px;
    vertical-align: middle;
}

lit-virtualizer igc-tree-item {
    width: 100%;
}
```
```typescript
export interface DataServiceResult {
    Data: ItemData[];
    TotalCount: number;
}
export interface ItemData {
    Name: string;
    Icon: string;
    Files?: ItemData[];
}

export interface SelectableItemData extends ItemData {
    Selected?: boolean;
}

export const RemoteItem: SelectableItemData = {
    Name: "Network",
    Icon: "network"
};

export const DATA: SelectableItemData[] = [
    {
        Name: "Computer",
        Icon: "desktop",
        Files: [
            {
                Name: "Documents",
                Icon: "docs_folder",
                Files: [
                    { Name: "Report 2016", Icon: "report" },
                    { Name: "Report 2017", Icon: "report" },
                    { Name: "Report 2018", Icon: "report" },
                    { Name: "Report 2019", Icon: "report" },
                    { Name: "Report 2020", Icon: "report" }
                ]
            },
            {
                Name: "Music",
                Icon: "album",
                Files: [
                    { Name: "Track 1", Icon: "music" },
                    { Name: "Track 2", Icon: "music" },
                    { Name: "Track 3", Icon: "music" },
                    { Name: "Track 4", Icon: "music" },
                    { Name: "Track 5", Icon: "music" }
                ]
            },
            {
                Name: "Pictures",
                Icon: "pictures",
                Files: [
                    { Name: "Image 101", Icon: "picture" },
                    { Name: "Image 102", Icon: "picture" },
                    { Name: "Image 103", Icon: "picture" },
                    { Name: "Image 104", Icon: "picture" },
                    { Name: "Image 105", Icon: "picture" }
                ]
            },
            {
                Name: "Recycle Bin",
                Icon: "bin",
                Files: [
                    { Name: "Track 6", Icon: "music" },
                    { Name: "Track 7", Icon: "music" },
                    { Name: "Image 106", Icon: "picture" },
                    { Name: "Image 107", Icon: "picture" }
                ]
            }
        ]
    }
];
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

## Styling

You can change the appearance of the [`IgcTreeItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreeitemcomponent.html), by using some of the exposed CSS parts listed below:

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

Using these CSS parts we can customize thе appearance of the [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html) component like this:

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
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```css
igc-tree {
  width: 320px;
  max-height: 360px;
  overflow-y: auto;
}
```


<div class="divider--half"></div>

## API References

- [`IgcTreeComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreecomponent.html)
- [`IgcTreeItemComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igctreeitemcomponent.html)
- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html)
- [`IgcCircularProgressComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igccircularprogresscomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

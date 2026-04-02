---
title: Blazor Tree Component | Infragistics
_description: With Blazor Tree component you can display hierarchical data in a tree-view structure, customize nodes easily and load data on demand. Try it now.
_keywords: Blazor Tree, Item Tree, overview, Ignite UI for Blazor, Infragistics
_license: MIT
mentionedTypes: ["Tree", "TreeItem", "Icon", "CircularProgress"]
_tocName: Tree
---

# Blazor Tree Overview

Ignite UI for Blazor Tree, also known as TreeView component, is a high-performance control that visualizes expandable data structures within a tree-like UI, enabling you to apply load on demand for child items. The Ignite UI for Blazor Tree also provides features like expanding and collapsing nodes, nested app navigation, Ignite UI for Blazor Tree nodes either can be generated manually or from a bound data source.

For end-users this means they can easily navigate across different app pages, use selection, checkboxes, add texts, icons, images and more.

The Ignite UI for Blazor Tree component allows users to represent hierarchical data in a tree-view structure, maintaining parent-child relationships, as well as to define static tree-view structure without a corresponding data model. Its primary purpose is to allow end-users to visualize and navigate within hierarchical data structures. The [`IgbTree`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTree.html) component also provides load on demand capabilities, item activation, multiple and cascade selection of items through built-in checkboxes, built-in keyboard navigation and more.

## Blazor Tree Example

In this basic Ignite UI for Blazor Tree example, you can see how to define a tree and its items by specifying the item hierarchy.

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center">
    <style>
        igc-tree {
            width: 320px;
            max-height: 360px;
            overflow-y: auto;
        }
    </style>

    <IgbTree>
          <IgbTreeItem Label="North America">
            <IgbTreeItem Label="United States"></IgbTreeItem>
            <IgbTreeItem Label="Canada"></IgbTreeItem>
            <IgbTreeItem Label="Mexico"></IgbTreeItem>
          </IgbTreeItem>
          <IgbTreeItem Label="South America">
            <IgbTreeItem Label="Brazil"></IgbTreeItem>
            <IgbTreeItem Label="Uruguay"></IgbTreeItem>
          </IgbTreeItem>
          <IgbTreeItem Label="Europe">
            <IgbTreeItem Label="United Kingdom"></IgbTreeItem>
            <IgbTreeItem Label="Germany"></IgbTreeItem>
            <IgbTreeItem Label="Bulgaria"></IgbTreeItem>
          </IgbTreeItem>
    </IgbTree>
</div>

@code {

}
```


<div class="divider--half"></div>

## How to Use Ignite UI for Blazor Tree With Ignite UI

You will also need to link an additional CSS file to apply the styling to the [`IgbTree`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTree.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
    typeof(IgbTreeModule),
    typeof(IgbTreeItemModule)
);
```

The simplest way to start using the [`IgbTree`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTree.html) is as follows:

### Declaring a tree

[`IgbTreeItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeItem.html) is the representation of every item that belongs to the [`IgbTree`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTree.html).
Items provide [`Disabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeItem.html#IgniteUI_Blazor_Controls_IgbTreeItem_Disabled), [`Active`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeItem.html#IgniteUI_Blazor_Controls_IgbTreeItem_Active), [`Selected`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeItem.html#IgniteUI_Blazor_Controls_IgbTreeItem_Selected) and [`Expanded`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeItem.html#IgniteUI_Blazor_Controls_IgbTreeItem_Expanded) properties, which give you opportunity to configure the states of the item as per your requirement.
The [`Value`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeItem.html#IgniteUI_Blazor_Controls_IgbTreeItem_Value) property can be used to add a reference to the data entry the item represents.

Items can be declared using one of the following approaches.

- Declaring the tree and its items by specifying the item hierarchy and iterating through a data set

```razor
<IgbTree>
    @foreach (var student in this.Students)
    {
        <IgbTreeItem Value="@item.Id" Label="@item.Name">
        </IgbTreeItem>
    }
</IgbTree>
```

Items can be bound to a data model so that their expanded and selected states are reflected in the underlying data as well.

- Declaring a tree by creating static unbound items

In order to render a tree you do not necessarily need a data set - individual items can be created without an underlying data model using the exposed [`Label`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeItem.html#IgniteUI_Blazor_Controls_IgbTreeItem_Label) property or provide a custom slot content for the [`IgbTreeItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeItem.html) label.

```razor
<IgbTree>
    <IgbTreeItem Label="North America">
        <IgbTreeItem Label="United States"></IgbTreeItem>
        <IgbTreeItem Label="Canada"></IgbTreeItem>
        <IgbTreeItem Label="Mexico"></IgbTreeItem>
    </IgbTreeItem>
    <IgbTreeItem Label="South America">
        <IgbTreeItem Label="Brazil"></IgbTreeItem>
        <IgbTreeItem Label="Uruguay"></IgbTreeItem>
    </IgbTreeItem>
    <IgbTreeItem Label="Europe">
        <IgbTreeItem Label="United Kingdom"></IgbTreeItem>
        <IgbTreeItem Label="Germany"></IgbTreeItem>
        <IgbTreeItem Label="Bulgaria"></IgbTreeItem>
    </IgbTreeItem>
</IgbTree>
```

> [!Note]
> You can provide a custom slot content for each [`IgbTreeItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeItem.html)'s indentation, expansion and label area respectively using the provided `indentation`, `indicator` and `label` slots.

### Item Interactions

[`IgbTreeItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeItem.html) could be expanded or collapsed:

- by clicking on the item expand indicator (default behavior).
- by clicking on the item if the [`IgbTree`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTree.html) [`ToggleNodeOnClick`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTree.html#IgniteUI_Blazor_Controls_IgbTree_ToggleNodeOnClick) property is set to `true`.

By default, multiple items could be expanded at the same time. In order to change this behavior and allow expanding only single branch at a time, the [`SingleBranchExpand`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTree.html#IgniteUI_Blazor_Controls_IgbTree_SingleBranchExpand) property could be enabled. This way when an item is expanded, all of the others already expanded branches in the same level will be collapsed.

## Blazor Tree Selection

In order to setup item selection in the Ignite UI for Blazor Tree component, you just need to set its [`Selection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTree.html#IgniteUI_Blazor_Controls_IgbTree_Selection) property. This property accepts the following three modes: **None**, **Multiple** and **Cascade**. Below we will take a look at each of them in more detail.

### None

In the [`IgbTree`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTree.html) by default item selection is disabled. Users cannot select or deselect an item through UI interaction, but these actions can still be completed through the provided API method.

### Multiple

To enable multiple item selection in the [`IgbTree`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTree.html) just set the [`Selection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTree.html#IgniteUI_Blazor_Controls_IgbTree_Selection) property to **multiple**. This will render a checkbox for every item. Each item has two states - selected or not. This mode supports multiple selection.

```razor
<IgbTree Selection=TreeSelection.Multiple>
</IgbTree>
```

### Cascade

To enable cascade item selection in the [`IgbTree`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTree.html), just set the selection property to **cascade**. This will render a checkbox for every item.

```razor
<IgbTree Selection=TreeSelection.Cascade>
</IgbTree>
```

In this mode a parent's selection state entirely depends on the selection state of its children. When a parent has some selected and some deselected children, its checkbox is in an indeterminate state.

## Keyboard Navigation

Keyboard navigation in [`IgbTree`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTree.html) provides a rich variety of keyboard interactions for the user. This functionality is enabled by default and allows users to navigate through the items.

The [`IgbTree`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTree.html) navigation is compliant with W3C accessibility standards and convenient to use.

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

You can change the appearance of the [`IgbTreeItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeItem.html), by using some of the exposed CSS parts listed below:

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

Using these CSS parts we can customize thе appearance of the [`IgbTree`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTree.html) component like this:

```css
igc-tree-item {
    --background-active: var(--ig-secondary-500);
    --foreground-active: var(--ig-secondary-500-contrast);
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center">
    <style>
        igc-tree {
            width: 320px;
            max-height: 360px;
            overflow-y: auto;
        }
    </style>

    <IgbTree>
          <IgbTreeItem Label="North America">
            <IgbTreeItem Label="United States"></IgbTreeItem>
            <IgbTreeItem Label="Canada"></IgbTreeItem>
            <IgbTreeItem Label="Mexico"></IgbTreeItem>
          </IgbTreeItem>
          <IgbTreeItem Label="South America">
            <IgbTreeItem Label="Brazil"></IgbTreeItem>
            <IgbTreeItem Label="Uruguay"></IgbTreeItem>
          </IgbTreeItem>
          <IgbTreeItem Label="Europe">
            <IgbTreeItem Label="United Kingdom"></IgbTreeItem>
            <IgbTreeItem Label="Germany"></IgbTreeItem>
            <IgbTreeItem Label="Bulgaria"></IgbTreeItem>
          </IgbTreeItem>
    </IgbTree>
</div>

@code {

}
```


<div class="divider--half"></div>

## API References

- [`IgbTree`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTree.html)
- [`IgbTreeItem`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeItem.html)
- [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html)
- [`IgbCircularProgress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCircularProgress.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

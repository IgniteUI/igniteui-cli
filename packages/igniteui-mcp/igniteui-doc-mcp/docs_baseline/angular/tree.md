---
title: Angular Tree Component - Ignite UI for Angular | MIT license
_description: With Ignite UI for Angular Tree component, you can display hierarchical data in a tree-view structure, customize nodes easily and load data on demand. Try for FREE
_keywords: angular tree, angular tree component, angular tree view, angular tree view component, angular ui components, ignite ui for angular, UI controls, infragistics
_license: MIT
_tocName: Tree
---
<style type="text/css">
    code-view .codesandbox-btn {
        display: none !important;
    }
</style>

# Angular Tree Component Overview

The Angular Tree Component allows users to represent hierarchical data in a tree-view structure with parent-child relationships, as well as to define static tree-view structure without a corresponding data model. Its primary purpose is to allow end-users to visualize and navigate within hierarchical data structures. The Ignite UI for Angular Tree Component also provides load on demand capabilities, item activation, bi-state and tri-state cascading selection of items through built-in checkboxes, built-in keyboard navigation and more.

## Angular Tree Example

In this basic Angular Tree example, you can see how to define an `igx-tree` and its nodes by specifying the node hierarchy and iterating through a hierarchical data set.

```typescript
import { Component } from '@angular/core';
import { DATA } from '../../../data/animations-data';
import { IgxTreeComponent, IgxTreeNodeComponent } from 'igniteui-angular/tree';


@Component({
    selector: 'app-tree-basic-sample',
    templateUrl: './tree-basic-sample.component.html',
    styleUrls: ['./tree-basic-sample.component.scss'],
    imports: [IgxTreeComponent, IgxTreeNodeComponent]
})
export class TreeBasicSampleComponent {
    public data = DATA;

    constructor() { }

}
```
```html
<div class="sample-wrapper">
  <igx-tree class="tree-root">
    @for (type of data; track type) {
      <igx-tree-node>
        {{ type.Name }}
        @for (value of type.Children; track value) {
          <igx-tree-node>
            {{ value.Name }}
          </igx-tree-node>
        }
      </igx-tree-node>
    }
  </igx-tree>
</div>
```
```scss
:host {
    display: block;
    padding: 16px;
}

.tree-root {
    max-height: 360px;
    overflow-y: auto;
    width: 320px;
}

.sample-wrapper {
    margin: 0 auto;
    padding: 10px;
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Tree

To get started with the Ignite UI for Angular Tree component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxTreeModule` in your app.module file.

```typescript
// app.module.ts

...
import { IgxTreeModule } from 'igniteui-angular/tree';
// import { IgxTreeModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxTreeModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxTreeComponent` as a standalone dependency, or use the [`IGX_TREE_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/tree/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_TREE_DIRECTIVES } from 'igniteui-angular/tree';
// import { IGX_TREE_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-tree>
        <igx-tree-node>
            Angular Libraries
            <igx-tree-node>Ignite UI for Angular</igx-tree-node>
            <igx-tree-node>Angular Material</igx-tree-node>
        </igx-tree-node>
        <igx-tree-node>
            Web Component Libraries
            <igx-tree-node>Ignite UI for Web Components</igx-tree-node>
            <igx-tree-node>Open UI 5</igx-tree-node>
        </igx-tree-node>
        <igx-tree-node>
            Blazor Libraries
            <igx-tree-node>Ignite UI for Blazor</igx-tree-node>
        </igx-tree-node>
    </igx-tree>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_TREE_DIRECTIVES]
    /* or imports: [IgxTreeComponent, IgxTreeNodeComponent] */
})
export class HomeComponent {}
```

Now that we have the Ignite UI for Angular Tree module or directives imported, let’s get started with a basic configuration of the `igx-tree` and its nodes.

## Using the Angular Tree

[IgxTreeNodesComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreenodecomponent.html) is the representation of every node that belongs to the [IgxTreeComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreecomponent.html).  
Nodes provide [disabled](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreenodecomponent.html#disabled), [active](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreenodecomponent.html#active), [selected](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreenodecomponent.html#selected) and [expanded](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreenodecomponent.html#expanded) properties, which give you opportunity to configure the states of the node as per your requirement.
[data](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreenodecomponent.html#data) property can be used to add a reference to the data entry the node represents. Binding `[data]` is required for searching through nodes using [IgxTreeComponent.findNodes()](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreecomponent.html#findNodes).

### Declaring a tree

Nodes can be declared using one of the following approaches.

- Declaring the tree and its nodes by specifying the node hierarchy and iterating through a data set

```html
<igx-tree>
 <igx-tree-node *ngFor="let node of data" [data]="node" [expanded]="isNodeExpaded(node)" [selected]="isNodeSelected(node)">
  {{ node.text }}
  <img [src]="node.image" [alt]="node.imageAlt" />
  <igx-tree-node *ngFor="let child of node.children" [data]="child" [expanded]="isNodeExpaded(child)" [selected]="isNodeSelected(child)">
            {{ child.text }}
  </igx-tree-node>
 </igx-tree-node>
</igx-tree>
```

Nodes can be bound to a data model so that their expanded and selected states are reflected in the underlying data as well.

```html
<igx-tree (nodeSelection)="handleSelectionEvent($event)">
 <igx-tree-node *ngFor="let node of data" [data]="node" [(expanded)]="node.expanded" [(selected)]="node.selected">
  {{ node.text }}
  <img [src]="node.image" [alt]="node.imageAlt" />
  <igx-tree-node *ngFor="let child of node.children" [data]="child">
   <a igxTreeNodeLink [href]="child.url" target="_blank">
                {{ child.text }}
            </a>
  </igx-tree-node>
 </igx-tree-node>
</igx-tree>
```

- Declaring a tree by creating static unbound nodes

In order to render a tree you do not necessarily need a data set - individual nodes can be created without an underlying data model:

```html
<igx-tree>
 <igx-tree-node [expanded]="true" [selected]="false">
  I am a parent node 1
  <img src="hard_coded_src.webb" alt="Alt Text" />  
  <igx-tree-node [expanded]="true" [selected]="false">
   I am a child node 1
   <igx-tree-node>
    <a igxTreeNodeLink href="https://google.com" target="_blank">
        I am a child node of the child
    </a>
   </igx-tree-node>
  </igx-tree-node>
 </igx-tree-node>

 <igx-tree-node [expanded]="false" [selected]="false">
  I am a parent node 2
  <img src="hard_coded_src.webb" alt="Alt Text" />
        <igx-tree-node [expanded]="false" [selected]="false">
   I am a child node 1
  </igx-tree-node>
 </igx-tree-node>

    <igx-tree-node [selected]="false" [disabled]="true">
  I am a parent node 3
 </igx-tree-node>
</igx-tree>
```

### Nodes with links

When a node should render a link, the `IgxTreeNodeLink` directive should be added to the `<a>` tag. This will ensure the proper aria role is assigned to the node's DOM elements.

```html
<igx-tree>
 <igx-tree-node *ngFor="let node of data" [data]="node" [expanded]="isNodeExpaded(node)" [selected]="isNodeSelected(node)">
  {{ node.text }}
  <img [src]="node.image" [alt]="node.imageAlt" />
  <igx-tree-node *ngFor="let child of node.children" [data]="child">
            <a igxTreeNodeLink [href]="child.url" target="_blank">
                {{ child.text }}
            </a>
  </igx-tree-node>
 </igx-tree-node>
</igx-tree>
```

### Node Interactions

[IgxTreeNodeComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreenodecomponent.html) could be expanded or collapsed:

- by clicking on the node expand indicator _(default behavior)_.
- by clicking on the node if the `igx-tree` [toggleNodeOnClick](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreecomponent.html#toggleNodeOnClick) property is set to `true`.

```html
<igx-tree [toggleNodeOnClick]="true">
 <igx-tree-node *ngFor="let node of data" [data]="node">
  {{ node.text }}
  <igx-tree-node *ngFor="let child of node.children" [data]="child">
                {{ child.text }}
  </igx-tree-node>
 </igx-tree-node>
</igx-tree>
```

By default, multiple nodes could be expanded at the same time. In order to change this behavior and allow expanding only single branch at a time, the [singleBranchExpand](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreecomponent.html#singleBranchExpand) property could be enabled. This way when a node is expanded, all of the others already expanded branches in the same level will be collapsed.

```html
<igx-tree [singleBranchExpand]="true">
 <igx-tree-node *ngFor="let node of data" [data]="node">
  {{ node.text }}
  <igx-tree-node *ngFor="let child of node.children" [data]="child">
                {{ child.text }}
  </igx-tree-node>
 </igx-tree-node>
</igx-tree>
```

In addition, the IgxTree provides the following API methods for node interactions:

- [**expand**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreenodecomponent.html#expand) - expands the node with animation.
- [**collapse**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreenodecomponent.html#collapse) - collapses the node with animation.
- [**toggle**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreenodecomponent.html#toggle) - toggles node expansion state with animation.
- [**collapseAll**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreecomponent.html#collapseAll) - collapses the specified nodes with animation. If no nodes are passed, collapses all parent nodes.
- [**expandAll**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreecomponent.html#expandAll) - sets the specified nodes as expanded with animation. If no nodes are passed, expands all parent nodes.
- [**deselectAll**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreecomponent.html#deselectAll) - deselects all nodes. If a nodes array is passed, deselects only the specified nodes. Does not emit nodeSelection event.

### Finding Nodes

You can find a specific node within an IgxTree by using the [findNodes](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreecomponent.html#findNodes) method. It returns an array of nodes, which match the specified data.
When finding nodes in more complex data structure scenarios, like composite primary keys, you can pass a custom comparer function in order to specify the criteria for finding nodes based on the data.

```html
<igx-tree>
 <igx-tree-node *ngFor="let node of data" [data]="node" [expanded]="isNodeExpaded(node)" [selected]="isNodeSelected(node)">
  {{ node.text }}
  <img [src]="node.image" alt="node.imageAlt" />
  <igx-tree-node *ngFor="let child of node.children" [data]="child" [expanded]="isNodeExpaded(child)" [selected]="isNodeSelected(child)">
            {{ child.text }}
  </igx-tree-node>
 </igx-tree-node>
</igx-tree>
```

```typescript
export class MyTreeViewComponent {
  public data: { [key: string]: any, valueKey: string } = MY_DATA;
  @ViewChild(IgxTreeComponent, { read: IgxTreeComponent })
  public tree;

  findNode(valueKey: string) {
    const comparer: IgxTreeSearchResolver =
      (data: any, node: IgxTreeNodeComponent) => node.data.valueKey === data;
    const matchingNodes: IgxTreeNode<{ [key: string]: any, valueKey: string }>[] = this.tree.findNodes(valueKey, comparer);
  }
}
```

### Templating

To create a reusable template for your nodes, declare `<ng-template>` **within `igx-tree`**.

```html
<igx-tree>
    <igx-tree-node *ngFor="let node of data" [data]="node">
        <ng-container *ngTemplateOutlet="#nodeTemplate; context: { $implicit: node }"></ng-container>
        <igx-tree-node *ngFor="let child of node.ChildCompanies" [data]="child">
            <ng-container *ngTemplateOutlet="#nodeTemplate; context: { $implicit: child}"></ng-container>
        </igx-tree-node>
    </igx-tree-node>
    <ng-template #nodeTemplate let-data>
        <div class="node-header company">
            <igx-icon class="company__logo">{{ data.Logo }}</igx-icon>
            <div class="company__name">{{ data.CompanyName }}</div>
        </div>
    </ng-template>
</igx-tree>
```

Additionally, by using the [expandIndicator](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreecomponent.html#expandIndicator) input you have the ability to set a custom template to be used for rendering the expand/collapse indicators of nodes.

```html
<igx-tree>
    <igx-tree-node *ngFor="let node of data" [data]="node">
    </igx-tree-node>
    <ng-template igxTreeExpandIndicator let-expanded>
        <igx-icon>{{ expanded ? 'expand_less' : 'expand_more' }}</igx-icon>
    </ng-template>
</igx-tree>
```

## Angular Tree Selection

In order to setup node selection in the `igx-tree`, you just need to set its [selection](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreecomponent.html#selection) property. This property accepts the following three modes: **None**, **BiState** and **Cascading**. Below we will take a look at each of them in more detail.

### None

In the `igx-tree` by default node selection is disabled. Users cannot select or deselect a node through UI interaction, but these actions can still be completed through the provided API method.

### Bi-State

To enable bi-state node selection in the `igx-tree` just set the [selection](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreecomponent.html#selection) property to **BiState**. This will render a checkbox for every node. Each node has two states - selected or not. This mode supports multiple selection.

```html
<igx-tree selection="BiState">
</igx-tree>
```

### Cascading

To enable cascading node selection in the `igx-tree`, just set the selection property to **Cascading**. This will render a checkbox for every node.

```html
<igx-tree selection="Cascading">
</igx-tree>
```

In this mode a parent's selection state entirely depends on the selection state of its children. When a parent has some selected and some deselected children, its checkbox is in an indeterminate state.

### Angular Tree Checkbox

The Angular Tree component provides built-in support for checkboxes, allowing users to select more than one item.

The TreeView checkboxes also have a tri-state mode, which is applicable only for partially selected parent nodes. In this mode, a parent node will go into the indeterminate state when some but not all of the child nodes are checked.

## Keyboard Navigation

Keyboard navigation in IgxTree provides a rich variety of keyboard interactions for the user. This functionality is enabled by default and allows users to navigate through the nodes.

The IgxTree navigation is compliant with W3C accessibility standards and convenient to use.

**Key Combinations**

- <kbd>Arrow Down</kbd> - navigates to the next visible node. Marks the node as active. Does nothing if on the LAST node
- <kbd>Ctrl + Arrow Down</kbd> - navigates to the next visible node. Does nothing if on the LAST node
- <kbd>Arrow Up</kbd> - navigates to the previous visible node. Marks the node as active. Does nothing if on the FIRST node
- <kbd>Ctrl + Arrow Up</kbd> - navigates to the previous visible node. Does nothing if on the FIRST node
- <kbd>Arrow Left</kbd> - on an expanded parent node, collapses it. If on a child node, moves to its parent node.
- <kbd>Arrow Right</kbd> - on an expanded parent node, navigates to the first child of the node. If on a collapsed parent node, expands it.
- <kbd>Home</kbd> - navigates to the FIRST node
- <kbd>End</kbd> - navigates to the LAST visible node
- <kbd>Tab</kbd> - navigates to the next focusable element on the page, outside of the tree
- <kbd>Shift + Tab</kbd> - navigates to the previous focusable element on the page, outside of the tree
- <kbd>Space</kbd> - toggles selection of the current node. Marks the node as active.
- <kbd>Shift + Space</kbd> - toggles selection of all nodes between the active one and the one pressed Space while holding Shift if selection is enabled
- <kbd>Enter</kbd> - activates the focused node. If the node has link in it, open the link
- <kbd>*</kbd> - expands the node and all sibling nodes on the same level

When selection is enabled, end-user selection of nodes is only allowed through the rendered checkbox. Since both selection types allow multiple selection, the following mouse + keyboard interactions are available:

- <kbd>Click</kbd> - when performed on the node checkbox, toggles selection of the node if selection is enabled. Otherwise, focuses the node
- <kbd>Shift + Click</kbd> - when performed on the node checkbox, toggles selection of all nodes between the active one and the one clicked while holding Shift if selection is enabled

## Angular Tree Load On Demand

The Ignite UI for Angular IgxTree can be rendered in such way that it requires the minimal amount of data to be retrieved from the server so the user could see it as quickly as possible. With this dynamic data loading approach, only after the user expands a node, the children for that particular parent node will be retrieved. This mechanism, also known as Load on Demand, can be easily configured to work with any remote data.

### Demo

```typescript
import { Component, AfterViewInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxTreeComponent, IgxTreeNodeComponent } from 'igniteui-angular/tree';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { icons } from './services/svgIcons';
import { DATA, NodeData, REMOTE_ROOT, SelectableNodeData } from '../../../data/tree-file-data';
import { DataService } from './services/data.service';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { isPlatformBrowser, NgTemplateOutlet } from '@angular/common';
@Component({
    selector: 'app-tree-advanced-sample',
    templateUrl: './tree-advanced-sample.component.html',
    styleUrls: ['./tree-advanced-sample.component.scss'],
    providers: [DataService],
    imports: [IgxTreeComponent, IgxTreeNodeComponent, NgTemplateOutlet, IgxIconComponent, IgxTooltipTargetDirective, IgxTooltipDirective]
})
export class TreeAdvancedSampleComponent implements AfterViewInit, OnDestroy {
    private iconService = inject(IgxIconService);
    private dataService = inject(DataService);
    private platformId = inject(PLATFORM_ID);

    public family = 'tree-icons';
    public data = DATA;
    public loading = false;
    public showRefresh = false;
    public remoteRoot = REMOTE_ROOT;
    public remoteData: SelectableNodeData[] = [];
    private destroy$ = new Subject<void>();
    constructor() {
        this.dataService.data.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            this.loading = false;
            this.remoteData = data;
        });
    }

    public ngAfterViewInit() {
        const treeIcons = icons;
        if (isPlatformBrowser(this.platformId)) {
            treeIcons.forEach(icon => {
                if (!this.iconService.isSvgIconCached(icon.name, this.family)) {
                    this.iconService.addSvgIconFromText(icon.name, icon.value, this.family);
                }
            });
        }
    }

    public refreshData(node: IgxTreeNodeComponent<NodeData>) {
        // clear data and remove cache (this.remoteData);
        this.dataService.clearData();
        this.remoteData = [];
        this.getNodeData(node, true);
    }

    public getNodeData(node: IgxTreeNodeComponent<any>, evt: boolean) {
        // cache data
        if (this.remoteData?.length) {
            return;
        }
        if (evt) {
            this.showRefresh = true;
            this.loading = true;
            this.dataService.getData();
            this.dataService.data.pipe(take(1)).subscribe((data) => {
                // if node is selected, mark all stateless child nodes as selected
                if (node.selected) {
                    data.forEach(e => {
                        if (e.Selected === undefined) {
                            e.Selected = true;
                        }
                    });
                }
            });
        }
    }

    public handleSelection(node: NodeData, selected: boolean) {
        this.dataService.toggleSelected(node, selected);
    }

    public ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
```
```html
<div class="sample-wrapper">
  <igx-tree selection="Cascading" class="tree-root">
    @for (root of data; track root) {
      <igx-tree-node [expanded]="true" [active]="true" [data]="root">
        <ng-container *ngTemplateOutlet="nodeTemplate; context: { $implicit: root }"></ng-container>
        @for (folder of root.Files; track folder) {
          <igx-tree-node #subfolder [data]="folder">
            <ng-container *ngTemplateOutlet="nodeTemplate; context: { $implicit: folder }"></ng-container>
            @for (file of folder.Files; track file) {
              <igx-tree-node [data]="file">
                <ng-container *ngTemplateOutlet="nodeTemplate; context: { $implicit: file }"></ng-container>
              </igx-tree-node>
            }
          </igx-tree-node>
        }
      </igx-tree-node>
    }
    <igx-tree-node #remote [loading]="loading" [disabled]="loading" [data]="remoteRoot"
      (expandedChange)="getNodeData(remote, $event)">
      <div class="node">
        <igx-icon class="tree-node-icon" [family]="family" [name]="remoteRoot.Icon"></igx-icon>
        <span class="node-title">{{ remoteRoot.Name }}</span>
        @if (showRefresh) {
          <igx-icon class="tree-node-icon node-refresh" (click)="refreshData(remote)" #target="tooltipTarget"
          [showDelay]="600" [hideDelay]="100" [igxTooltipTarget]="tooltipRef">refresh</igx-icon>
        }
      </div>
      @if (!remoteData?.length && !remote.loading) {
        <igx-tree-node #dummyNode [data]="{}" [disabled]="true">
        </igx-tree-node>
      }
      @for (entry of remoteData; track entry) {
        <igx-tree-node [data]="entry" [selected]="!!entry.Selected"
          (selectedChange)="handleSelection(entry, $event)">
          <ng-container *ngTemplateOutlet="nodeTemplate; context: { $implicit: entry }"></ng-container>
        </igx-tree-node>
      }
    </igx-tree-node>
  </igx-tree>
  <ng-template #nodeTemplate let-data>
    <div class="node">
      <igx-icon class="tree-node-icon" [family]="family" [name]="data.Icon"></igx-icon>
      <span class="node-title">{{ data.Name }}</span>
    </div>
  </ng-template>
</div>
<div #tooltipRef="tooltip" igxTooltip>
  Reload Remote Data
</div>
```
```scss
.tree-node-icon {
    display: flex;
    align-items: center;
    vertical-align: middle;
}

.node-refresh {
    cursor: pointer;
    padding: 0px 4px;
    color: var(--ig-success-500);
}

.node {
    display: flex;
    align-items: center;
}

.node-title {
    margin-left: 10px;
    vertical-align: middle;
}

.sample-wrapper {
    margin: 0 auto;
    padding: 10px;
}

.tree-root {
    max-height: 360px;
    overflow-y: auto;
    width: 320px;
}
```

After the user clicks the expand icon, it is replaced by a loading indicator. When the [loading](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreenodecomponent.html#loading) property resolves to `false`, the loading indicator disappears and the children are loaded.

## Styling

### Tree Theme Property Map

When you modify a primary property, all related dependent properties are automatically updated to reflect the change:

<table class="collapsible-table">
  <thead>
    <tr>
      <th>Primary Property</th>
      <th>Dependent Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="group">
    <tr class="primary">
      <td><details><summary><strong>$background</strong></summary></details></td>
      <td>$foreground</td>
      <td>The color used for the tree node content.</td>
    </tr>
    <tr class="dependent"><td></td><td>$background-selected</td><td>The background color used for the selected tree node.</td></tr>
    <tr class="dependent"><td></td><td>$hover-color</td><td>The background color used for the tree node on hover.</td></tr>
    <tr class="dependent"><td></td><td>$background-active</td><td>The background color used for the active tree node.</td></tr>
    <tr class="dependent"><td></td><td>$background-disabled</td><td>The background color used for the tree node in disabled state.</td></tr>
  </tbody>
  <tbody class="group">
    <tr class="primary">
      <td><details><summary><strong>$background-selected</strong></summary></details></td>
      <td>$foreground-selected</td>
      <td>The color used for the content of the selected tree node.</td>
    </tr>
    <tr class="dependent"><td></td><td>$hover-selected-color</td><td>The background color used for the selected tree node on hover.</td></tr>
  </tbody>
  <tbody class="group">
    <tr class="primary">
      <td><details><summary><strong>$background-active</strong></summary></details></td>
      <td>$foreground-active</td>
      <td>The color used for the content of the active tree node.</td>
    </tr>
    <tr class="dependent"><td></td><td>$background-active-selected</td><td>The background color used for the active selected tree node.</td></tr>
  </tbody>
  <tbody class="group">
    <tr class="primary">
      <td><strong>$background-active-selected</strong></td>
      <td>$foreground-active-selected</td>
      <td>The color used for the content of the active selected tree node.</td>
    </tr>
  </tbody>
  <tbody class="group">
    <tr class="primary">
      <td><strong>$background-disabled</strong></td>
      <td>$foreground-disabled</td>
      <td>The color used for the content of the disabled tree node.</td>
    </tr>
  </tbody>
</table>

Using the [Ignite UI for Angular Theming](themes/index.md), we can greatly alter the tree appearance. First, in order for us to use the functions exposed by the theme engine, we need to import the `index` file in our style file:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [tree-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-tree-theme) and provide just the `$background` parameter, the theme will automatically calculate all the other necessary colors, of course you can override any of the other properties:

```scss
$custom-tree-theme: tree-theme(
  $background: #ecaa53,
);
```

The last step is to include the component's theme.

```scss
@include css-vars($custom-tree-theme);
```

### Demo

```typescript
import { Component } from '@angular/core';
import { DATA } from '../../../data/animations-data';
import { IgxTreeComponent, IgxTreeNodeComponent } from 'igniteui-angular/tree';


@Component({
    selector: 'app-tree-styling',
    templateUrl: './tree-styling.component.html',
    styleUrls: ['./tree-styling.component.scss'],
    imports: [IgxTreeComponent, IgxTreeNodeComponent]
})
export class TreeStylingComponent {
    public data = DATA;

    constructor() { }

}
```
```html
<div class="sample-wrapper">
  <igx-tree class="tree-root">
    @for (type of data; track type) {
      <igx-tree-node>
        {{ type.Name }}
        @for (value of type.Children; track value) {
          <igx-tree-node>
            {{ value.Name }}
          </igx-tree-node>
        }
      </igx-tree-node>
    }
  </igx-tree>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-tree-theme: tree-theme(
  $background: #ecaa53,
);

@include css-vars($custom-tree-theme);
```

### Styling with Tailwind

You can style the tree using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the Tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-tree`, `dark-tree`.

Once applied, these classes enable dynamic theme calculations. You can then override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [IgxTree Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-tree-theme). The syntax is as follows:

```html
<igx-tree class="tree-root">
    @for (type of data; track type) {
      <igx-tree-node class="!light-tree ![--background:#81B698]">
        {{ type.Name }}
        @for (value of type.Children; track value) {
          <igx-tree-node class="!light-tree ![--background:#81B698]">
            {{ value.Name }}
          </igx-tree-node>
        }
      </igx-tree-node>
    }
</igx-tree>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your tree should look like this:

<div class="sample-container loading" style="height:400px">
    <iframe id="tree-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/lists/tree-tailwind-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## Known Issues and Limitations

|Limitation|Description|
|--- |--- |
| Recursive template nodes | The `igx-tree` does not support recursively creating the igx-tree-nodes via template. [Learn more](https://github.com/IgniteUI/igniteui-angular/wiki/Tree-Specification#assumptions-and-limitations). All of the nodes should be declared manually, meaning if you intend to visualize a very deep hierarchy, this would impact the size of your template file. The tree is intended to be primarily used as a layout / navigational component. If a hierarchical data source with numerous levels of depth and homogenous data needs to be visualized, you could use the [**IgxTreeGrid**](treegrid/tree-grid.md)|
|Using IgxTreeNodes with old View Engine (pre-Ivy)|There is an issue in Angular's View Engine (pre-Ivy) that prevents the tree from being used when `enableIvy: false` is set in tsconfig.json|
|Tab navigation in FireFox|Tabbing into the tree via keyboard navigation, when the tree has a scrollbar, will first focus the igx-tree-node element. This is the default behavior in FireFox, however it can be resolved by putting an explicit `tabIndex = -1` on the tree.|

## API References

<div class="divider"></div>

- [IgxTreeComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreecomponent.html)
- [IgxTreeNodeComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreenodecomponent.html)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

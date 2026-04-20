---
title: Tree Grid load on demand - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Tree Grid provides the necessary tools to load child data on demand when a parent row is expanded. That way the volume of data would be greatly reduced and can be retrieved only when the user needs it.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, Tree Grid, Tree Table
_license: commercial
_tocName: Load On Demand
_premium: true
---

# Tree Grid Load On Demand

The Ignite UI for Angular [`IgxTreeGrid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) can be rendered in such way that it requires the minimal amount of data to get from the server so the user could see it as quickly as possible. Then, only after the user expands a row, the children for that particular parent row will be loaded. This mechanism, also known as Load on Demand, can be easily configured to work with any remote data.

## Angular Tree Grid Load On Demand Example


```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { TreeGridLoadOnDemandService } from './remoteService';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-load-on-demand-sample',
    styleUrls: ['./tree-grid-load-on-demand-sample.component.scss'],
    templateUrl: './tree-grid-load-on-demand-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridLoadOnDemandSampleComponent implements OnInit {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data = [];
    private dataService = new TreeGridLoadOnDemandService();

    constructor() { }

    public ngOnInit() {
        this.treeGrid.isLoading = true;
        this.dataService.getData(-1, (children) => {
            this.data = children;
            this.treeGrid.isLoading = false;
        });
    }

    public loadChildren = (parentID: any, done: (children: any[]) => void) => {
        this.dataService.getData(parentID, (children) => done(children));
    };
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" width="100%" height="400px"
        primaryKey="ID" foreignKey="ParentID" [moving]="true"
        [loadChildrenOnDemand]="loadChildren" hasChildrenKey="hasEmployees">
        <igx-column field="Name" dataType="string" [sortable]="true" [editable]="true" [resizable]="true" ></igx-column>
        <igx-column field="JobTitle" dataType="string" [sortable]="true" [editable]="true" [resizable]="true" ></igx-column>
        <igx-column field="Age" dataType="number" [sortable]="true" [editable]="true" [resizable]="true" ></igx-column>
    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 15px;
}
```

<div class="divider--half"></div>

### Usage

The Load on Demand feature is compatible with both types of Tree Grid data sources - [`primary and foreign keys`](tree-grid.md#primary-and-foreign-keys) or [`child collection`](tree-grid.md#child-collection). You only need to load the root level data in the Tree Grid and specify the necessary keys for one of the data source types. In order to load the child rows when the user expands a row, the Tree Grid provides the callback input property [`loadChildrenOnDemand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#loadChildrenOnDemand).

```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
        [loadChildrenOnDemand]="loadChildren">
        ...
</igx-tree-grid>
```

The [`loadChildrenOnDemand`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#loadChildrenOnDemand) callback provides two parameters:

- parentID - the ID of the parent row that is being expanded.
- done - callback that should be called with the children when they are retrieved from the server.

```typescript
public loadChildren = (parentID: any, done: (children: any[]) => void) => {
    this.dataService.getData(parentID, (children) => done(children));
}
```

After the user clicks the expand icon, it is replaced by a loading indicator. When the `done` callback is called, the loading indicator disappears and the children are loaded. The Tree Grid adds the children to the underlying data source and populates the necessary keys automatically.

If you have a way to provide an information whether a row has children prior to its expanding, you could use the [`hasChildrenKey`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#hasChildrenKey) input property. This way you could provide a boolean property from the data objects which indicates whether an expansion indicator should be displayed.

```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
        [loadChildrenOnDemand]="loadChildren" hasChildrenKey="hasEmployees">
        ...
</igx-tree-grid>
```

Note that setting the [`hasChildrenKey`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#hasChildrenKey) property is not required. In case you don't provide it, expansion indicators will be displayed for each row. After expanding a row that has no children, you still need to call the `done` callback with undefined or empty array. In this case after the loading indicator disappears, the expansion indicator never shows up.

If you want to provide your own custom loading indicator, you may create an ng-template and mark it with the `igxRowLoadingIndicator` directive. The following code snippet demonstrates how to define such custom template:

```html
<igx-tree-grid ...>

    ...

    <ng-template igxRowLoadingIndicator>
        <igx-icon fontSet="material">loop</igx-icon>
    </ng-template>
</igx-tree-grid>
```

> [!NOTE]
> This component uses Material Icons. Add the following link to your `index.html`: `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

## API References

<div class="divider--half"></div>

- [IgxTreeGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)
- [IgxGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)

## Additional Resources

<div class="divider--half"></div>

- [Tree Grid overview](tree-grid.md)
- [Tree Grid Virtualization and Performance](virtualization.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

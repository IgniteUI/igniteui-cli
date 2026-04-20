---
title:  Angular Grid Size - Ignite UI for Angular
_description: Learn how to apply size capabilities to the Tree grid component. You can use a set of compact view options in the Ignite UI for Angular.
_keywords: material density, size igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/display-density
_tocName: Size
_premium: true
---
# Angular Tree Grid Size
**IgxTreeGrid** design is based on [Material Design Guidelines](https://material.io/design). We currently provide an option to choose between predefined set of size options that will bring a small, medium, or large view respectively. By selecting the right size for your Material UI table / Material UI grid you can significantly improve the user experience when interacting with large amounts of content.
## Angular Tree Grid Size Example
```typescript
import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxColumnGroupComponent, IgxNumberSummaryOperand, IgxSummaryOperand } from 'igniteui-angular/grids/core';
import { IgxSummaryResult } from 'igniteui-angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { DatePipe } from '@angular/common';

class CustomNumberSummary {
    public operate(data?: any[]): IgxSummaryResult[] {
        const result = new IgxSummaryOperand().operate(data);
        result.push({
            key: 'Min',
            label: 'Min',
            summaryResult: IgxNumberSummaryOperand.min(data)
        });
        result.push({
            key: 'max',
            label: 'Max',
            summaryResult: IgxNumberSummaryOperand.max(data)
        });
        return result;
    }
}

@Component({
    selector: 'app-tree-grid-displaydensity-sample',
    styleUrls: ['./tree-grid-displaydensity-sample.component.scss'],
    templateUrl: './tree-grid-displaydensity-sample.component.html',
    imports: [IgxButtonGroupComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent, IgxCellTemplateDirective, DatePipe]
})
export class TreeGridDisplaydensitySampleComponent implements OnInit {
    @ViewChild('treeGrid', { read: IgxTreeGridComponent, static: true })
    public treeGrid: IgxTreeGridComponent;
    @ViewChild(IgxButtonGroupComponent, { static: true }) public buttonGroup: IgxButtonGroupComponent;
    public data;
    public size = 'small';
    public sizes;
    public numberSummaries = CustomNumberSummary;

    public ngOnInit() {
        this.data = generateEmployeeDetailedFlatData();
        this.sizes = [
            {
                label: 'small',
                selected: this.size === 'small',
                togglable: true
            },
            {
                label: 'medium',
                selected: this.size === 'medium',
                togglable: true
            },
            {
                label: 'large',
                selected: this.size === 'large',
                togglable: true
            }
        ];
    }

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }

    public selectSize(event) {
        this.size = this.sizes[event.index].label;
        this.treeGrid.reflow();
    }
}
```
```html
<div class="density-chooser">
    <igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
</div>
<igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" width="100%"
    height="550px" [allowFiltering]="true">
    <igx-column field="Name" dataType="string" [sortable]="true" [hasSummary]="true" width="200px"></igx-column>
    <igx-column-group [pinned]="false" header="General Information">
        <igx-column field="HireDate" dataType="date" [sortable]="true" [hasSummary]="true">
            <ng-template igxCell let-cell="cell" let-val>
                {{val | date:'dd/MM/yyyy'}}
            </ng-template>
        </igx-column>
        <igx-column-group header="Personal Details">
            <igx-column field="ID" dataType="number" [filterable]="false"></igx-column>
            <igx-column field="Title" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Age" dataType="number" [sortable]="true" [hasSummary]="true"
                [summaries]="numberSummaries" [filterable]="false"></igx-column>
        </igx-column-group>
    </igx-column-group>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Country" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="City" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Address" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Fax" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="PostalCode" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Country" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="City" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Address" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="Fax" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="PostalCode" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-tree-grid>
```
```scss
:host {
    display: block;
    padding: 8px;
}

.density-chooser {
    margin-bottom: 16px;
}
igx-buttongroup{
    display: block;
    width: 500px;
}
```
<div class="divider--half"></div>
## Usage
As you can see in the demo above, the [**IgxTreeGrid**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) provides three size options: **small**, **medium** and **large**. The code snippet below shows how to set size:
```html
<igx-tree-grid #treeGrid [data]="data" style="--ig-size: var(--ig-size-small)">
</igx-tree-grid>
```
And now let's see in details how each option reflects on the Tree Grid component. When you switch between different sizes the height of each Tree Grid element and the corresponding paddings will be changed. Also if you want to apply custom column [**width**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#width), please consider the fact that it must be bigger than the sum of left and right padding.
- **--ig-size-large** - this is the default Tree Grid size with the lowest intense and row height equal to `50px`. Left and Right paddings are `24px`; Minimal column [`width`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#width) is `80px`;
- **--ig-size-medium** - this is the middle size with `40px` row height. Left and Right paddings are `16px`; Minimal column [`width`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#width) is `64px`;
- **--ig-size-small** - this is the smallest size with `32px` row height. Left and Right paddings are `12px`; Minimal column [`width`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#width) is `56px`;
> [!NOTE]
> Please keep in mind that currently you **can not** override any of the sizes.
Let's now continue with our sample and see in action how each size is applied. Let's first add a button which will help us to switch between each size:
```html
<div class="density-chooser">
    <igx-buttongroup [values]="sizes"></igx-buttongroup>
</div>
```
```typescript
@ViewChild(IgxButtonGroupComponent) public buttonGroup: IgxButtonGroupComponent;
public size = 'small';
public sizes;
public ngOnInit() {
    this.sizes = [
        {
            label: 'small',
            selected: this.size === 'small',
            togglable: true
        },
        {
            label: 'medium',
            selected: this.sie === 'medium',
            togglable: true
        },
        {
            label: 'large',
            selected: this.size === 'large',
            togglable: true
        }
    ];
}
```
Now we can add the markup.
```html
<div class="density-chooser">
    <igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
</div>
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" width="100%"
    height="550px" [allowFiltering]="true">
    <igx-column field="Name" dataType="string" [sortable]="true" [hasSummary]="true" width="200px"></igx-column>
    <igx-column-group [pinned]="false" header="General Information">
        <igx-column field="HireDate" dataType="date" [sortable]="true" [hasSummary]="true">
            <ng-template igxCell let-cell="cell" let-val>
                {{val | date:'dd/MM/yyyy'}}
            </ng-template>
        </igx-column>
        <igx-column-group header="Person Details">
            <igx-column field="ID" dataType="number" [filterable]="false"></igx-column>
            <igx-column field="Title" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Age" dataType="number" [sortable]="true" [hasSummary]="true"
                [summaries]="numberSummaries" [filterable]="false"></igx-column>
        </igx-column-group>
    </igx-column-group>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Country" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="City" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Address" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Fax" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="PostalCode" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
    <igx-column-group header="Address Information">
        <igx-column-group header="Location">
            <igx-column field="Country" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="City" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
            <igx-column field="Address" dataType="string" [sortable]="true" [hasSummary]="true"></igx-column>
        </igx-column-group>
        <igx-column-group header="Contact Information">
            <igx-column field="Phone" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="Fax" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
            <igx-column field="PostalCode" dataType="string" [sortable]="true" [resizable]="true"></igx-column>
        </igx-column-group>
    </igx-column-group>
</igx-tree-grid>
```
Finally, let's provide the necessary logic in order to actually apply the size:
```typescript
@ViewChild('treeGrid', { read: IgxTreeGridComponent })
public treeGrid: IgxTreeGridComponent;
public selectSize(event: any) {
    this.size = this.sizes[event.index].label;
}
@HostBinding('style.--ig-size')
protected get sizeStyle() {
    return `var(--ig-size-${this.size})`;
}
```
Another option that [**IgxTreeGrid**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) provides for you, in order to be able to change the height of the rows in the Tree Grid, is the property [`rowHeight`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowheight). So let's see in action how this property affects the Tree Grid layout along with the `--ig-size` CSS variable.
Please keep in mind the following:
- `--ig-size` CSS variable will have **NO** impact on row height **if there is [rowHeight](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowheight) specified**;
- `--ig-size` will **affect all of the rest elements in the Tree Grid**, as it has been described above;
And now we can extend our sample and add [`rowHeight`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#rowHeight) property to the Tree Grid:

 ```html
 <igx-tree-grid #treeGrid [data]="data" [rowHeight]="'80px'" width="100%" 
 height="550px" [allowFiltering]="true">
 ..............
 </igx-tree-grid>
 ```
<div class="divider--half"></div>
## API References
<div class="divider--half"></div>
- [IgxTreeGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html)
- [IgxTreeGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
<div class="divider--half"></div>
## Additional Resources
- [Tree Grid overview](tree-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Editing](editing.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
* [Searching](search.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

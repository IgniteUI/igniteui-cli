---
title:  Angular Grid Size - Ignite UI for Angular
_description: Learn how to apply size capabilities to the Hierarchical grid component. You can use a set of compact view options in the Ignite UI for Angular.
_keywords: material density, size, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/display-density
_tocName: Size
_premium: true
---
# Angular Hierarchical Grid Size
**IgxHierarchicalGrid** design is based on [Material Design Guidelines](https://material.io/design). We currently provide an option to choose between predefined set of size options that will bring a small, medium, or large view respectively. By selecting the right size for your Material UI table / Material UI grid you can significantly improve the user experience when interacting with large amounts of content.
## Angular Hierarchical Grid Size Example
```typescript
import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-density',
    styleUrls: ['./hierarchical-grid-density.component.scss'],
    templateUrl: 'hierarchical-grid-density.component.html',
    imports: [IgxButtonGroupComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})

export class HGridDisplayDensitySampleComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;
    public size = 'small';
    public sizes;

    constructor() {

    }
    public ngOnInit(): void {
        this.localdata = CUSTOMERS;
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

    public selectSize(event: any) {
        this.size = this.sizes[event.index].label;
        this.hierarchicalGrid.reflow();
    }
}
```
```html
<div class="density-chooser">
    <igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
</div>
<igx-hierarchical-grid [igxPreventDocumentScroll]="true"  #hierarchicalGrid [data]="localdata" [height]="'600px'" [width]="'100%'" [allowFiltering]="true">
    <igx-column field="CustomerID"></igx-column>
    <igx-column field="CompanyName"></igx-column>
    <igx-column field="ContactName"></igx-column>
    <igx-column field="ContactTitle"></igx-column>
    <igx-column field="Address"></igx-column>
    <igx-column field="City"></igx-column>
    <igx-column field="PostalCode"></igx-column>
    <igx-column field="Country"></igx-column>
    <igx-column field="Phone"></igx-column>
    <igx-column field="Fax"></igx-column>

    <igx-row-island [height]="null" [key]="'Orders'" [autoGenerate]="false">
            <igx-column field="OrderID"></igx-column>
            <igx-column field="EmployeeID"></igx-column>
            <igx-column field="OrderDate" [dataType]="'date'"></igx-column>
            <igx-column field="RequiredDate" [dataType]="'date'"></igx-column>
            <igx-column field="ShippedDate" [dataType]="'date'"></igx-column>
            <igx-column field="ShipVia"></igx-column>
            <igx-column field="Freight"></igx-column>
            <igx-column field="ShipName"></igx-column>
            <igx-column field="ShipAddress"></igx-column>
            <igx-column field="ShipCity"></igx-column>
            <igx-column field="ShipPostalCode"></igx-column>
            <igx-column field="ShipCountry"></igx-column>
        <igx-row-island [height]="null" [key]="'OrderDetails'" [autoGenerate]="false">
                <igx-column field="ProductID"></igx-column>
                <igx-column field="UnitPrice"></igx-column>
                <igx-column field="Quantity"></igx-column>
                <igx-column field="Discount"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
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
As you can see in the demo above, the [**IgxHierarchicalGrid**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html) provides three size options: **small**, **medium** and **large**. The code snippet below shows how to set size:
```html
<igx-hierarchical-grid #hierarchicalGrid [data]="data" style="--ig-size: var(--ig-size-small)">
</igx-hierarchical-grid>
```
And now let's see in details how each option reflects on the Hierarchical Grid component. When you switch between different sizes the height of each Hierarchical Grid element and the corresponding paddings will be changed. Also if you want to apply custom column [**width**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#width), please consider the fact that it must be bigger than the sum of left and right padding.
- **--ig-size-large** - this is the default Hierarchical Grid size with the lowest intense and row height equal to `50px`. Left and Right paddings are `24px`; Minimal column [`width`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#width) is `80px`;
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
<igx-hierarchical-grid #hGrid [data]="localdata" [height]="'600px'" [width]="'100%'" [allowFiltering]="true">
    <igx-column field="CustomerID"></igx-column>
    <igx-column field="CompanyName"></igx-column>
    <igx-column field="ContactName"></igx-column>
    <igx-column field="ContactTitle"></igx-column>
    <igx-column field="Address"></igx-column>
    <igx-column field="City"></igx-column>
    <igx-column field="PostalCode"></igx-column>
    <igx-column field="Country"></igx-column>
    <igx-column field="Phone"></igx-column>
    <igx-column field="Fax"></igx-column>

    <igx-row-island [key]="'Orders'" [autoGenerate]="false" #layout1 >
            <igx-column field="OrderID"></igx-column>
            <igx-column field="EmployeeID"></igx-column>
            <igx-column field="OrderDate"></igx-column>
            <igx-column field="RequiredDate"></igx-column>
            <igx-column field="ShippedDate"></igx-column>
            <igx-column field="ShipVia"></igx-column>
            <igx-column field="Freight"></igx-column>
            <igx-column field="ShipName"></igx-column>
            <igx-column field="ShipAddress"></igx-column>
            <igx-column field="ShipCity"></igx-column>
            <igx-column field="ShipPostalCode"></igx-column>
            <igx-column field="ShipCountry"></igx-column>
        <igx-row-island [key]="'OrderDetails'" [autoGenerate]="false">
                <igx-column field="ProductID"></igx-column>
                <igx-column field="UnitPrice"></igx-column>
                <igx-column field="Quantity"></igx-column>
                <igx-column field="Discount"></igx-column>
        </igx-row-island>
    </igx-row-island>
</igx-hierarchical-grid>
```
Finally, let's provide the necessary logic in order to actually apply the size:
```typescript
@ViewChild('hierarchicalGrid', { read: IgxHierarchicalGridComponent })
public hierarchicalGrid: IgxHierarchicalGridComponent;
public selectSize(event: any) {
    this.size = this.sizes[event.index].label;
}
@HostBinding('style.--ig-size')
protected get sizeStyle() {
    return `var(--ig-size-${this.size})`;
}
```
Another option that [**IgxHierarchicalGrid**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html) provides for you, in order to be able to change the height of the rows in the Hierarchical Grid, is the property [`rowHeight`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowheight). So let's see in action how this property affects the Hierarchical Grid layout along with the `--ig-size` CSS variable.
Please keep in mind the following:
- `--ig-size` CSS variable will have **NO** impact on row height **if there is [rowHeight](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowheight) specified**;
- `--ig-size` will **affect all of the rest elements in the Hierarchical Grid**, as it has been described above;
And now we can extend our sample and add [`rowHeight`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html#rowHeight) property to the Hierarchical Grid:

 ```html
 <igx-hierarchical-grid #hierarchicalGrid [data]="data" [rowHeight]="'80px'" width="100%" 
 height="550px" [allowFiltering]="true">
 ..............
 </igx-hierarchical-grid>
 ```
<div class="divider--half"></div>
## API References
<div class="divider--half"></div>
- [IgxHierarchicalGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html)
- [IgxHierarchicalGridComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
- [IgxColumnComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html)
<div class="divider--half"></div>
## Additional Resources
- [Hierarchical Grid overview](hierarchical-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Editing](editing.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

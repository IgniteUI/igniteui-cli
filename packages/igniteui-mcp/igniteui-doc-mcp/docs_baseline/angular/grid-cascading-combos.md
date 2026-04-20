---
title: Cascading combos in Angular Grid Grid - Infragistics
_description: Grid with Cascading Combos. See the sample here.
_keywords: angular cascading combos with grid, ignite ui for angular, infragistics
_license: commercial
_tocName: Grid with Cascading combos
_premium: true
---
# Angular Grid with Cascading Combos
The Grid's Editing functionality provides with the opportunity to use [Cascading Combos](../simple-combo.md#cascading-scenario). By selecting the value in any preceding [Combos](../combo.md), the users will receive only the data that is relevant to their selection within the next Combo.
## Angular Grid with Cascading Combos Sample Overview
The sample below demonstrates how `Grid` works with nested `Cascading Combos`.
```typescript
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ISimpleComboSelectionChangingEventArgs, IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxLinearProgressBarComponent } from 'igniteui-angular/progressbar';
import { Country, getCitiesByCountry, getCountries } from '../../data/cities15000-regions-countries';
import { DATA } from '../../data/data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'grid-cascading-combos',
    templateUrl: './grid-cascading-combos.component.html',
    styleUrls: ['./grid-cascading-combos.component.scss'],
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxSimpleComboComponent, FormsModule, IgxLinearProgressBarComponent]
})
export class GridCascadingCombosComponent implements OnInit {
    @ViewChildren(IgxSimpleComboComponent)
    public combos: QueryList<IgxSimpleComboComponent>;

    public selectedCountryName: string;
    public selectedRegionName: string;
    public selectedCityId: number;
    public countriesData: Country[];
    private loadingTime = 0;
    public data;

    public ngOnInit() {
        this.data = DATA;
        this.countriesData = getCountries([
            'United States',
            'Japan',
            'United Kingdom'
        ]);
    }

    public countryChanging(e: ISimpleComboSelectionChangingEventArgs, cell) {
        const ID = cell.row.data.ID;
        cell.row.data.loadingRegion = true;
        const nextRegionCombo = this.combos.filter(
            (combo) => combo.id === 'region-' + ID
        )[0];
        const nextCityCombo = this.combos.filter(
            (combo) => combo.id === 'city-' + ID
        )[0];
        this.clearOldData(cell, nextRegionCombo, nextCityCombo);
        this.selectedCountryName = e.newValue;
        cell.update(e.newValue ? e.newValue : '');
        if (e.newValue) {
            this.loadingTime = 2000;
        }
        setTimeout(() => {
            nextRegionCombo.data = getCitiesByCountry([this.selectedCountryName])
                .map((c) => ({ name: c.region, country: c.country }))
                .filter((v, i, a) => a.findIndex((r) => r.name === v.name) === i);
            cell.row.data.loadingRegion = false;
        }, this.loadingTime);
        this.selectedRegionName = null;
        this.selectedCityId = null;
        this.loadingTime = 0;
    }

    public regionChanging(e: ISimpleComboSelectionChangingEventArgs, cell) {
        const nextComboID = 'city-' + cell.row.data.ID;
        cell.row.data.loadingCity = true;
        const cityCombo = this.combos.filter(
            (combo) => combo.id === nextComboID
        )[0];
        this.clearOldData(cell, null, cityCombo);

        this.selectedRegionName = e.newValue;
        cell.update(e.newValue ? e.newValue : '');
        if (e.newValue) {
            this.loadingTime = 2000;
        }
        setTimeout(() => {
            cityCombo.data = getCitiesByCountry([this.selectedCountryName]).filter(
                (c) => c.region === this.selectedRegionName
            );
            cell.row.data.loadingCity = false;
        }, this.loadingTime);
        this.selectedCityId = null;
        this.loadingTime = 0;
    }
    public cityChanging(e: ISimpleComboSelectionChangingEventArgs, cell) {
        cell.update(e.newValue);
        this.selectedCityId = e.newValue;
    }

    private clearOldData(cell, RegionCombo, CityCombo) {
        const nextCellIndex = cell.column.visibleIndex + 1;
        cell.row.cells[nextCellIndex].update('');

        if (CityCombo !== null) {
            CityCombo.data = [];
        }
        if (RegionCombo !== null) {
            RegionCombo.data = [];
            cell.row.cells[nextCellIndex + 1].update('');
        }
    }
}
```
```html
<div class="grid__wrapper">
  <div class="sample__header">
    <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [autoGenerate]="false" width="100%"
      height="500px" [primaryKey]="'ID'">
      <igx-column field="ID" header="ID" [dataType]="'number'" width="50px">
      </igx-column>
      <igx-column field="Country" header="Country" dataType="string" width="220px">
        <ng-template igxCell let-cell="cell">
          <igx-simple-combo [id]="'country-' + cell.row.data.ID" [data]="countriesData"
            (selectionChanging)="countryChanging($event, cell)" placeholder="Choose Country..."
            [ngModel]="cell.value === '' ? undefined : cell.value" [valueKey]="'name'" [displayKey]="'name'"
            width="100%" [overlaySettings]="{ outlet: grid1.outlet }">
          </igx-simple-combo>
        </ng-template>
      </igx-column>
      <igx-column field="Region" header="Region" dataType="string" width="220px">
        <ng-template igxCell let-cell="cell">
          <div>
            <igx-simple-combo [id]="'region-' + cell.row.data.ID"
              (selectionChanging)="regionChanging($event, cell)" placeholder="Choose Region..."
              [ngModel]="cell.value === '' ? undefined : cell.value" [valueKey]="'name'"
              [displayKey]="'name'" [disabled]="cell.row.cells[1].value === ''" [overlaySettings]="{ outlet: grid1.outlet }">
            </igx-simple-combo>
            @if (cell.row.data.loadingRegion) {
              <igx-linear-bar [id]="'region-progress-' + cell.row.data.ID"
                type="info" [indeterminate]="true">
              </igx-linear-bar>
            }
          </div>
        </ng-template>
      </igx-column>
      <igx-column field="City" header="City" width="220px" dataType="number">
        <ng-template igxCell let-cell="cell">
          <div>
            <igx-simple-combo [id]="'city-' + cell.row.data.ID" placeholder="Choose City..."
              (selectionChanging)="cityChanging($event, cell)"
              [ngModel]="!cell.value ? undefined : cell.value" [valueKey]="'id'" [displayKey]="'name'"
              [disabled]="cell.row.cells[2].value === ''" [overlaySettings]="{ outlet: grid1.outlet }">
            </igx-simple-combo>
            @if (cell.row.data.loadingCity) {
              <igx-linear-bar [id]="'city-progress-' + cell.row.data.ID"
                type="info" [indeterminate]="true">
              </igx-linear-bar>
            }
          </div>
        </ng-template>
      </igx-column>
    </igx-grid>
  </div>
</div>
```
```scss
.grid__wrapper {
    --ig-size: var(--ig-size-medium);
    padding: 16px;

    igx-simple-combo {
        --ig-size: var(--ig-size-small);
    }
}

.dialogNewRecord {
    > * {
        margin-bottom: 8px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    #discontinued {
        margin-top: 15px;
    }
}

:host{
    ::ng-deep{
        .igx-grid {
            margin-top: 10px;
        }
        .igx-checkbox {
            margin-top: 5px;
            margin-bottom: 5px;
            padding-top: 8px;
            padding-bottom: 5px;
        }
        .reorderLevelInput {
            color: black;
            width: 100%;
        }
        @media screen and (max-width: 934px) {
            .igx-grid {
                overflow-x: none;
            }
        }
    }
}

.default-theme {
    .addProdBtn.igx-button--contained {
        background-color: lightgrey;
        color: black;
        &:hover {
            background-color: rgba(0, 0, 0, 0.26)
        }
    }
}
```
## Setup
In order enable column editing, make sure [`editable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#editable) property is set to **true**.
Once the column editing is enabled, you can start by adding your [Single Select ComboBox](../simple-combo.md). Please note that here in order to have only one single selection available, you will need to use [igxSimpleCombo](../simple-combo.md) instead of modifying the igxCombo.
To get started with the [Simple ComboBox component](../simple-combo.md#angular-simple-combobox-features), first you need to import the `IgxSimpleComboModule` in your **app.module.ts** file:
```typescript
import { IgxSimpleComboModule } from 'igniteui-angular/simple-combo';
@NgModule({
    imports: [
        ...
        IgxSimpleComboModule,
        ...
    ]
})
export class AppModule {}
```
Then, in the template, you should bind the combos [igx-simple-combo](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsimplecombocomponent.html) to some data.
- `displayKey` - _Required for object arrays_ - Specifies which property will be used for the items' text. If no value is specified for [displayKey](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxSimpleComboComponent.html#displayKey), the simple combobox will use the specified `valueKey` (if any).
```typescript
export class MySimpleComboComponent implements OnInit {
    public countriesData: Country[];
    public selectedCountry: Country;
    public selectedCity: City;

    public ngOnInit() {
        this.countriesData = getCountries([
            'United States',
            'Japan',
            'United Kingdom'
        ]);
    }
}
```
In order to handle the selection change, we need [selectionChanging()](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxComboComponent.html#selectionChanging). The emitted event arguments, [IComboSelectionChangingEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/icomboselectionchangingeventargs.html), contain information about the selection prior to the change, the current selection and the items that were added or removed. Therefore, it will filter the values based on the selection of the previous combo.
```html
<igx-combo [data]="countriesData" (selectionChanging)="countryChanging($event)"></igx-combo>
```
```typescript
public countryChanging(event: IComboSelectionChangingEventArgs) {
    if (event.added.length) {
        event.newSelection = event.added;
    }
}
```
And lastly, adding the [Linear Progress](../linear-progress.md), which is required while loading the list of data.
The [`id`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlinearprogressbarcomponent.html#id) is necessary to set the value of `id` attribute.
```html
 <igx-linear-bar 
    [id]="'region-progress-' + cell.row.data.ID" 
    [style.visibility]="'hidden'"
    type="info" [indeterminate]="true">
</igx-linear-bar>
```
## API References
<div class="divider--half"></div>
- [IgxSimpleComboComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsimplecombocomponent.html)
- [IgxComboComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-combo-theme)
- [IgxLinearProgressBarComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlinearprogressbarcomponent.html)
- [IgxLinearProgressBarComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-progress-linear-theme)
## Additional Resources
- [Grid Editing](editing.md)
- [Single Select ComboBox](../simple-combo.md)
- [Cascading Combos](../simple-combo.md#cascading-scenario)
- [Linear Progress](../linear-progress.md)

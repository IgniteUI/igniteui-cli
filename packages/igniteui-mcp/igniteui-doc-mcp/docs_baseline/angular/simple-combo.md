---
title: Single Select ComboBox Component - MIT license 
_description: The Ignite UI for Angular Simple ComboBox provides a powerful input, combining features of the basic HTML input, select, filtering and custom drop-down lists. Try it for FREE
_keywords: angular single selection combobox, angular combobox component, angular single selection combobox component, angular combo, angular ui components, ignite ui for angular, infragistics
_license: MIT
_tocName: Single Select ComboBox
---

# Angular Single Select ComboBox Component Overview

The Angular Single Select ComboBox component is a modification of [ComboBox component](combo.md) that allows single selection. We call it "simple combo". Due to high demand for single-selection mode for the original ComboBox component, we created an extension component which offers an editable search input that allows users to choose an option from a predefined list of items and to input custom values.

## Angular Simple ComboBox Example

In this Angular Simple ComboBox example, you can see how users can select the chart's trend line type. In addition, the Simple ComboBox exposes keyboard navigation and custom styling capabilities.

<div class="divider--half"></div>

```typescript
import { Component, OnInit } from '@angular/core';
import { IgRect } from 'igniteui-angular-core';
import { StockData, updatedStockData } from '../../../data/stocks-data';
import { IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { FormsModule } from '@angular/forms';

import { IgxFinancialChartCoreModule, IgxFinancialChartModule } from 'igniteui-angular-charts';

@Component({
    selector: 'app-simple-combo-main',
    templateUrl: 'simple-combo-main.component.html',
    styleUrls: ['simple-combo-main.component.scss'],
    imports: [IgxSimpleComboComponent, FormsModule, IgxButtonGroupComponent, IgxButtonDirective, IgxFinancialChartModule, IgxFinancialChartCoreModule]
})
export class SimpleComboMainComponent implements OnInit {
    public data: StockData[] = updatedStockData;
    public selectedRange: string;
    public trendLineType: string;
    public trendLineTypes: string[] = [
        'CubicFit',
        'LinearFit',
        'QuinticFit',
        'QuarticFit',
        'ExponentialFit',
        'PowerLawFit',
        'LogarithmicFit',
        'CumulativeAverage',
        'ExponentialAverage',
        'SimpleAverage',
        'ModifiedAverage',
        'WeightedAverage',
        'None'
    ];
    public windowRect: IgRect = { top: 0, left: 0, width: 1, height: 1 };
    public ranges: string[] = ['1M', '3M', '6M', 'YTD', '1Y', 'ALL'];

    public rangeButtonClick(range: string) {
        this.selectedRange = range;
        let startDate = new Date(Date.now());
        switch (range) {
            case '1M':
                startDate.setMonth(startDate.getMonth() - 1);
                break;
            case '3M':
                startDate.setMonth(startDate.getMonth() - 3);
                break;
            case '6M':
                startDate.setMonth(startDate.getMonth() - 6);
                break;
            case 'YTD':
                startDate = new Date(startDate.getFullYear(), 0, 1);
                break;
            case '1Y':
                startDate.setFullYear(startDate.getFullYear() - 1);
                break;
            case 'ALL':
                startDate = this.data[0].time;
                break;
        }
        this.windowRect = this.getWindowRect(startDate);
    }

    public ngOnInit(): void {
        this.selectedRange = this.ranges[0];
        this.trendLineType = this.trendLineTypes[0];
        this.rangeButtonClick(this.selectedRange);
    }

    private getWindowRect(startDate: Date): IgRect {
        const startDateIndex = this.data.findIndex(d => d.time > startDate);
        return {
            top: 0,
            left: startDateIndex / this.data.length,
            width: 1 - startDateIndex / this.data.length,
            height: 1
        };
    }
}
```
```html
<div class="sample-wrapper">
  <div class="combo-section">
    <igx-simple-combo class="input-container"
      [data]="trendLineTypes"
      [(ngModel)]="trendLineType"
      [type]="'border'"
    ></igx-simple-combo>
    <igx-buttongroup>
      @for (range of ranges; track range) {
        <button igxButton
          [selected]="range === selectedRange"
          (buttonClick)="rangeButtonClick(range)"
        >{{range}}</button>
      }
    </igx-buttongroup>
  </div>
  <igx-financial-chart
    width="100%"
    height="100%"
    [dataSource]="data"
    trendLineBrushes="rgba(0, 101, 209, 1)"
    zoomSliderType="None"
    [isToolbarVisible]="false"
    [trendLineType]="trendLineType"
    [windowRect]="windowRect"
  ></igx-financial-chart>
</div>
```
```scss
.sample-wrapper {
    padding: 1rem 1rem 6rem 1rem;
    width: 100%;
    height: 100%;
}
.combo-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
}

.input-container {
    flex-grow: 1;
    max-width: 300px;
}
```

<div class="divider--half"></div>

## Angular Simple ComboBox Features

The simple combobox control exposes the following features:
    - Data Binding - local data and remote data
    - Value Binding
    - Filtering
    - Grouping
    - Custom Values
    - Templates
    - Integration with Template Driven Forms and Reactive Forms

## Getting Started with Ignite UI for Angular Simple ComboBox

To get started with the Ignite UI for Angular Simple ComboBox component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxSimpleComboModule` in your **app.module.ts** file.

```typescript
import { IgxSimpleComboModule } from 'igniteui-angular/simple-combo';
// import { IgxSimpleComboModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxSimpleComboModule,
        ...
    ]
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxSimpleComboComponent` as a standalone dependency, or use the [`IGX_SIMPLE_COMBO_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/simple-combo/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_SIMPLE_COMBO_DIRECTIVES } from 'igniteui-angular/simple-combo';
// import { IGX_SIMPLE_COMBO_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-simple-combo></igx-simple-combo>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_SIMPLE_COMBO_DIRECTIVES]
    /* or imports: [IgxSimpleComboComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Simple ComboBox module or directives imported, you can start using the `igx-simple-combo` component.

## Using the Angular Simple ComboBox

Just like the regular combobox, you can bind the [igx-simple-combo](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsimplecombocomponent.html) to data.

```typescript
export class MySimpleComboComponent implements OnInit {
    public cities: City[];

    public ngOnInit() {
        this.cities = getCitiesByPopulation(10000000);
    }
}
```

```html
<igx-simple-combo [data]="cities"></igx-simple-combo>
```

Our simple combobox is now bound to the array of cities.

### Data value and display properties

Since the simple combobox is bound to an array of complex data (i.e. objects), we need to specify a property that the control will use to handle the selected items. The control exposes two `@Input` properties - [valueKey](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxSimpleComboComponent.html#valueKey) and [displayKey](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxSimpleComboComponent.html#displayKey):

- `valueKey` - _Optional, recommended for object arrays_ - Specifies which property of the data entries will be stored for the simple combobox's selection. If `valueKey` is omitted, the simple combobox value will use references to the data entries (i.e. the selection will be an array of entries from `igxSimpleCombo.data`).
- `displayKey` - _Required for object arrays_ - Specifies which property will be used for the items' text. If no value is specified for `displayKey`, the simple combobox will use the specified `valueKey` (if any).

In our case, we want the simple combobox to display the `name` of each city and its value to store the `id` of each city. Therefore, we are binding these properties as values to the simple combobox's `displayKey` and `valueKey`, respectively:

```html
<igx-simple-combo [data]="cities" [displayKey]="'name'" [valueKey]="'id'"></igx-simple-combo>
```

> [!Note]
> When the data source is comprised of a simple type (e.g. `string[]`, `number[]`), **do not** specify a `valueKey` and `displayKey`.

### Two-Way Binding

The simple combobox component fully supports two-way data-binding with `[(ngModel)]` as well as usage in [template driven](https://angular.io/guide/forms) and [reactive](https://angular.io/guide/reactive-forms) forms. The simple combobox selection can be accessed either through two-way binding or through the [selection API](#selection-api). We can pass in an item of the same type as the ones in the simple combobox's selection (based on `valueKey`) and any time one changes, the other is updated accordingly.

In the following example, the first city in the provided data will initially be selected. Any further changes in the simple combobox's selection will reflect on the `selectedCities`.

```html
<igx-simple-combo [data]="cities" [(ngModel)]="selectedCity" [displayKey]="'name'" [valueKey]="'id'"></igx-simple-combo>
```

```typescript
export class MySimpleComboComponent implements OnInit {
    public cities: City[];
    public selectedCity: number;

    public ngOnInit(): void {
        this.cities = getCitiesByPopulation(10000000);
        this.selectedCity = this.cities[0].id;
    }
}
```


```typescript
import { Component, OnInit } from '@angular/core';
import { City, getCitiesByPopulation } from '../../../data/cities15000-regions-countries';
import { IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-simple-combo-usage',
    templateUrl: 'simple-combo-usage.component.html',
    styleUrls: ['simple-combo-usage.component.scss'],
    imports: [IgxSimpleComboComponent, FormsModule]
})
export class SimpleComboUsageComponent implements OnInit {
    public cities: City[];
    public selectedCity: number;

    public ngOnInit(): void {
        this.cities = getCitiesByPopulation(10000000);
        this.selectedCity = this.cities[0].id;
    }
}
```
```html
<div class="sample-wrapper">
  <div class="combo-section">
    <igx-simple-combo [data]="cities" [displayKey]="'name'" [valueKey]="'id'" [(ngModel)]="selectedCity">
    </igx-simple-combo>
  </div>
  @if (!!selectedCity) {
    <div>
      <h6>Selected City's Id:</h6>
      <div>{{ selectedCity }}</div>
    </div>
  }
</div>
```
```scss
.sample-wrapper {
    width: 430px;
    margin: 16px;
}

.combo-section {
    width: 100%;
    margin-bottom: 16px;
}
```


Two-way binding can also be achieved without a specified `valueKey`. For example, if `valueKey` is omitted, the bound model will look like this:

```typescript
export class MySimpleComboComponent {
    public cities: City[] = [
                   { name: 'Sofia', id: '1' }, { name: 'London', id: '2' }, ...];
    public selectedCity: City = this.cities[0];
}
```


### Selection API

The simple combobox component exposes API that allows getting and manipulating the current selection state of the control.

One way to get its selection is via the [selection](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsimplecombocomponent.html#selection) property. It returns a value which corresponds to the selected item, depending on the specified [valueKey](#data-value-and-display-properties) (if any).

In our example, `selection` will return the selected city's `id`:

```typescript
export class MySimpleComboComponent {
    ...
    public selection: string = this.simpleCombo.selection;
}
```

Using the selection API, you can also change the simple combobox's selected item without user interaction with the control - via a button click, as a response to an Observable changing, etc. For example, we can implement a button that selects a city, using the [select](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsimplecombocomponent.html#select) method:

```html
<igx-simple-combo [data]="cities" [displayKey]="'name'" [valueKey]="'id'"></igx-simple-combo>
<button igxButton (click)="selectFavorite()">Select Favorite</button>
```

When the button is clicked, `London` will be added to the simple combobox's selection:

```typescript
export class MySimpleComboComponent {
    @ViewChild(IgxSimpleComboComponent, { read: IgxSimpleComboComponent, static: true })
    public simpleCombo: IgxSimpleComboComponent;
    ...
    selectFavorites(): void {
        this.simpleCombo.select('2');
    }
}
```

The simple combobox also fires an event every time its selection changes - [selectionChanging](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxSimpleComboComponent.html#selectionChanging). The emitted event arguments, [ISimpleComboSelectionChangingEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/isimplecomboselectionchangingeventargs.html), contain information about the selection prior to the change, the current selection and the displayed item. The event can also be cancelled, preventing the selection from taking place.

Binding to the event can be done through the proper `@Output` property on the `igx-simple-combo` tag:

```html
<igx-simple-combo [data]="cities" [displayKey]="'name'" [valueKey]="'id'"
           (selectionChanging)="handleCityChange($event)">
</igx-simple-combo>
```

<div class="divider--half"></div>

## Keyboard Navigation

When the simple combobox is closed and focused:

- `ArrowDown` or `Alt` + `ArrowDown` will open the simple combobox's dropdown.

> [!NOTE]
> Any other key stroke will be handled by the input.

When the simple combobox is opened and an item in the list is focused:

- `ArrowDown` will move to the next list item. If the active item is the last one in the list and custom values are enabled, the focus will be moved to the Add item button.

- `ArrowUp` will move to the previous list item. If the active item is the first one in the list, the focus will be moved back to the search input while also selecting all of the text in the input.

- `End` will move to the last list item.

- `Home` will move to the first list item.

- `Space` will select/deselect the active list item.

- `Enter` will select/deselect the active list item and will close the list.

- `Esc` will close the list.

When the simple combobox is opened and allow custom values are enabled, and add item button is focused:

- `Enter` will add a new item with `valueKey` and `displayKey` equal to the text in the search input and will select the new item.

- `ArrowUp` will move the focus back to the last list item or if the list is empty, will move the focus to the input.

## Cascading Scenario

The following sample demonstrates a scenario where the [igx-simple-combo](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsimplecombocomponent.html) is used:


```typescript
import { Component, OnInit } from '@angular/core';
import { ISimpleComboSelectionChangingEventArgs, IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';
import { IgxLinearProgressBarComponent } from 'igniteui-angular/progressbar';
import { City, Country, getCitiesByCountry, getCountries, Region } from '../../../data/cities15000-regions-countries';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-simple-combo-cascading',
    templateUrl: 'simple-combo-cascading.component.html',
    styleUrls: ['simple-combo-cascading.component.scss'],
    imports: [IgxSimpleComboComponent, FormsModule, IgxLinearProgressBarComponent]
})
export class SimpleComboCascadingComponent implements OnInit {
    public selectedCountry: Country;
    public selectedRegion: Region;
    public selectedCity: City;
    public countriesData: Country[];
    public regionData: Region[] = [];
    public citiesData: City[] = [];
    public isLoadingRegions: boolean = false;
    public isLoadingCities: boolean = false;
    private loadingTime = 0;

    public ngOnInit(): void {
        this.countriesData = getCountries(['United States', 'Japan', 'United Kingdom']);
    }

    public countryChanging(e: ISimpleComboSelectionChangingEventArgs) {
        this.selectedCountry = e.newValue as Country;
        if (e.newValue){
            this.regionData = [];
            this.isLoadingRegions = true;
            this.loadingTime = 2000;
        } else {
            this.selectedRegion = undefined;
            this.selectedCity = undefined;
        }
        setTimeout(() => {
            this.regionData = getCitiesByCountry([this.selectedCountry?.name])
            .map(c => ({name: c.region, country: c.country}))
            .filter((v, i, a) => a.findIndex(r => r.name === v.name) === i);
            this.isLoadingRegions = false;
        }, this.loadingTime)
        this.citiesData = [];
        this.loadingTime = 0;
    }

    public regionChanging(e: ISimpleComboSelectionChangingEventArgs) {
        this.selectedRegion = e.newValue as Region;
        if (e.newValue){
            this.citiesData = [];
            this.isLoadingCities = true;
            this.loadingTime = 2000;
        } else {
            this.selectedCity = undefined;
        }
        setTimeout(() => {
            this.citiesData = getCitiesByCountry([this.selectedCountry?.name])
            .filter(c => c.region === this.selectedRegion?.name);
            this.isLoadingCities = false;
        }, this.loadingTime)
        this.loadingTime = 0;
    }
}
```
```html
<div class="sample-wrapper">
  <div class="combo-section">
    <igx-simple-combo #country
      [data]="countriesData"
      (selectionChanging)="countryChanging($event)"
      placeholder="Choose Country..."
      [(ngModel)]="selectedCountry"
      [displayKey]="'name'">
    </igx-simple-combo>
  </div>
  <div class="combo-section">
    <igx-simple-combo #region
      [data]="regionData"
      (selectionChanging)="regionChanging($event)"
      placeholder="Choose Region..."
      [(ngModel)]="selectedRegion"
      [displayKey]="'name'"
      [disabled]="regionData.length === 0">
    </igx-simple-combo>
    @if (isLoadingRegions) {
      <igx-linear-bar
        type="info"
        [indeterminate]="true">
      </igx-linear-bar>
    }
  </div>
  <div class="combo-section">
    <igx-simple-combo #city
      [data]="citiesData"
      placeholder="Choose City..."
      [(ngModel)]="selectedCity"
      [displayKey]="'name'"
      [disabled]="citiesData.length === 0">
    </igx-simple-combo>
    @if (isLoadingCities) {
      <igx-linear-bar
        type="info"
        [indeterminate]="true">
      </igx-linear-bar>
    }
  </div>
</div>
```
```scss
.sample-wrapper {
    width: 430px;
    margin: 16px;
}

.combo-section {
    margin: 20px 10px;
}
```


Check out our [Angular Grid with Cascading Combos Sample](../components/grid/cascading-combos.md).

<div class="divider--half"></div>

### Template Configuration

The API of the simple combobox is used to get the selected item from one component and load the data source for the next one, as well as clear the selection and data source when needed.

```html
<igx-simple-combo #country
    [data]="countriesData"
    (selectionChanging)="countryChanging($event)"
    placeholder="Choose Country..."
    [(ngModel)]="selectedCountry"
    [displayKey]="'name'">
</igx-simple-combo>
<igx-simple-combo #region
    [data]="regionData"
    (selectionChanging)="regionChanging($event)"
    placeholder="Choose Region..."
    [(ngModel)]="selectedRegion"
    [displayKey]="'name'"
    [disabled]="regionData.length === 0">
</igx-simple-combo>
<igx-simple-combo #city
    [data]="citiesData"
    placeholder="Choose City..."
    [(ngModel)]="selectedCity"
    [displayKey]="'name'"
    [disabled]="citiesData.length === 0">
</igx-simple-combo>
```

### Component Definition

```typescript
export class SimpleComboCascadingComponent implements OnInit {
    public selectedCountry: Country;
    public selectedRegion: Region;
    public selectedCity: City;
    public countriesData: Country[];
    public regionData: Region[] = [];
    public citiesData: City[] = [];
    public ngOnInit(): void {
        this.countriesData = getCountries(['United States', 'Japan', 'United Kingdom']);
    }

    public countryChanging(e: ISimpleComboSelectionChangingEventArgs) {
        this.selectedCountry = e.newSelection as Country;
        this.regionData = getCitiesByCountry([this.selectedCountry?.name])
            .map(c => ({name: c.region, country: c.country}))
            .filter((v, i, a) => a.findIndex(r => r.name === v.name) === i);
        this.selectedRegion = null;
        this.selectedCity = null;
        this.citiesData = [];
    }

    public regionChanging(e: ISimpleComboSelectionChangingEventArgs) {
        this.selectedRegion = e.newSelection as Region;
        this.citiesData = getCitiesByCountry([this.selectedCountry?.name])
            .filter(c => c.region === this.selectedRegion?.name);
        this.selectedCity = null;
    }
}
```

## Angular Simple ComboBox Remote Binding

The Ignite UI for Angular Simple ComboBox Component exposes an API that allows binding a combobox to a remote service and retrieving data on demand.

### Demo

The sample below demonstrates remote binding using the [dataPreLoad](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxSimpleComboComponent.html#dataPreLoad) property to load new chunk of remote data and following the steps described in [ComboBox Remote Binding](combo-remote.md):

```typescript
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { IComboSearchInputEventArgs } from 'igniteui-angular/combo';
import { IForOfState } from 'igniteui-angular/directives';
import { ISimpleComboSelectionChangingEventArgs, IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { VerticalAlignment } from 'igniteui-angular/core';
import { RemoteNWindService } from '../../../services/remoteNwind.service';
import { AsyncPipe } from '@angular/common';

@Component({
    providers: [RemoteNWindService],
    selector: 'app-simple-combo-remote',
    templateUrl: './simple-combo-remote.component.html',
    styleUrls: ['./simple-combo-remote.component.scss'],
    imports: [IgxSimpleComboComponent, IgxToastComponent, AsyncPipe]
})
export class SimpleComboRemoteComponent implements OnInit, AfterViewInit {
    private remoteService = inject(RemoteNWindService);
    cdr = inject(ChangeDetectorRef);

    @ViewChild('loadingToast')
    public loadingToast: IgxToastComponent;

    @ViewChild('remoteSimpleCombo', { read: IgxSimpleComboComponent, static: true })
    public remoteSimpleCombo: IgxSimpleComboComponent;

    public prevRequest: any;
    public rData: any;
    private searchText: string = null;
    private defaultVirtState: IForOfState = { chunkSize: 6, startIndex: 0 };
    private currentVirtState: IForOfState = { chunkSize: 6, startIndex: 0 };
    private itemID = 1;
    private itemCount: number = 0;
    private hasSelection: boolean;
    private additionalScroll: number = 0;

    public ngOnInit() {
        this.rData = this.remoteService.remoteData;
    }

    public ngAfterViewInit() {
        const initSize = {
            startIndex: 0,
            chunkSize: Math.ceil(this.remoteSimpleCombo.itemsMaxHeight / this.remoteSimpleCombo.itemHeight)
        };
        this.remoteService.getData(initSize, null, (data) => {
            this.remoteSimpleCombo.totalItemCount = data['@odata.count'];
            this.itemCount = this.remoteSimpleCombo.totalItemCount;
        });
    }

    public dataLoading() {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }
        this.loadingToast.positionSettings.verticalDirection = VerticalAlignment.Middle;
        this.loadingToast.autoHide = false;
        this.loadingToast.open('Loading Remote Data...');
        this.cdr.detectChanges();

        this.prevRequest = this.remoteService.getData(
            this.remoteSimpleCombo.virtualizationState,
            this.searchText,
            (data) => {
                this.remoteSimpleCombo.totalItemCount = data['@odata.count'];
                this.loadingToast.close();
                this.cdr.detectChanges();
            }
        );
    }

    public onOpened() {
        const scroll: number = this.remoteSimpleCombo.virtualScrollContainer.getScrollForIndex(this.itemID - 1);
        this.remoteSimpleCombo.virtualScrollContainer.scrollPosition = scroll + this.additionalScroll;
        this.cdr.detectChanges();
    }

    public onClosing() {
        this.searchText = '';
    }

    public onClosed() {
        this.currentVirtState.startIndex = (this.itemID || 1) - 1;
        this.remoteService.getData(
            this.currentVirtState,
            this.searchText,
            (data) => {
                this.remoteSimpleCombo.totalItemCount = data['@odata.count'];
                this.cdr.detectChanges();
            }
        );
    }

    public handleSelectionChanging(evt: ISimpleComboSelectionChangingEventArgs) {
        this.hasSelection = evt.newValue !== undefined;

        if (!this.hasSelection) {
            this.itemID = 1;
            this.currentVirtState = this.defaultVirtState;
            return;
        }

        this.currentVirtState.chunkSize = Math.ceil(this.remoteSimpleCombo.itemsMaxHeight / this.remoteSimpleCombo.itemHeight);

        this.itemCount === evt.newValue ?
            this.additionalScroll = this.remoteSimpleCombo.itemHeight :
            this.additionalScroll = 0;

        if (this.itemCount - evt.newValue >= this.currentVirtState.chunkSize - 1) {
            this.itemID = this.currentVirtState.startIndex = evt.newValue;
        } else {
            this.itemID = this.currentVirtState.startIndex = this.itemCount - (this.currentVirtState.chunkSize - 1);
        }
    }

    public handleSearchInputUpdate(searchData: IComboSearchInputEventArgs) {
        this.currentVirtState.startIndex = 0;
        this.currentVirtState.chunkSize = Math.ceil(this.remoteSimpleCombo.itemsMaxHeight / this.remoteSimpleCombo.itemHeight);
        this.searchText = searchData?.searchText || '';
        this.remoteService.getData(
            this.searchText ? this.currentVirtState : this.defaultVirtState,
            this.searchText,
            (data) => {
                this.remoteSimpleCombo.totalItemCount = data['@odata.count'];
            }
        );
    }
}
```
```html
<igx-simple-combo #remoteSimpleCombo class="combo" 
    [itemsMaxHeight]="250"
    [itemHeight]="48"
    [data]="rData | async"
    [valueKey]="'ProductID'"
    [displayKey]="'ProductName'"    
    placeholder="Product"
    (dataPreLoad)="dataLoading()"
    (closing)="onClosing()" (opened)="onOpened()"
    (closed)="onClosed()"
    (selectionChanging)="handleSelectionChanging($event)"
    (searchInputUpdate)="handleSearchInputUpdate($event)">
</igx-simple-combo>
<igx-toast #loadingToast></igx-toast>
```
```scss
.combo {
    margin: 8px;
    width: 430px;
}
```

## Styling

Using the [`Ignite UI for Angular Theming`](themes/index.md), we can greatly alter the simple combobox appearance. First, in order for us to use the functions exposed by the theme engine, we need to import the `index` file in our style file:

```scss
@use 'igniteui-angular/theming' as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`combo-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-combo-theme) and accepts the `$empty-list-background` parameter:

```scss
$custom-simple-combo-theme: combo-theme(
  $empty-list-background: #1a5214
);
```

The [`IgxSimpleComboComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsimplecombocomponent.html) uses the [`IgxDropDownComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html) internally as an item container. It also includes the [`IgxInputGroup`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputgroupcomponent.html) component. Creating new themes, that extend these components' themes, and scoping them under the respective classes will let's you change the simple combobox styles:

```scss
$custom-drop-down-theme: drop-down-theme(
  $background-color: #d9f5d6,
  $header-text-color: #1a5214,
  $item-text-color: #1a5214,

  $focused-item-background: #72da67,
  $focused-item-text-color: #1a5214,
  $hover-item-background: #a0e698,
  $hover-item-text-color: #1a5214,

  $selected-item-background: #a0e698,
  $selected-item-text-color: #1a5214,
  $selected-hover-item-background: #72da67,
  $selected-hover-item-text-color: #1a5214,
  $selected-focus-item-background: #72da67,
  $selected-focus-item-text-color: #1a5214,
);
```

The last step is to include the component's theme.

```scss
:host ::ng-deep {
  @include css-vars($custom-combo-theme);
  @include css-vars($custom-drop-down-theme);
}
```

> [!NOTE]
> The [`IgxSimpleCombo`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsimplecombocomponent.html) component uses the [`IgxOverlay`](overlay.md) service to hold and display the simple combobox items list container. To properly scope your styles you might have to use an [`OverlaySetting.outlet`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html#outlet). For more details check the [`IgxOverlay Styling Guide`](overlay-styling.md). Also is necessary to use `::ng-deep` when we are styling the components.
> [!Note]
> The default `type` of the `IgxSimpleCombo` is `box` unlike the [`IgxSelect`](select.md) where it is `line`.

### Demo

```typescript
import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { City, getCitiesByPopulation } from '../../../data/cities15000-regions-countries';
import { IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';

@Component({
    selector: 'app-simple-combo-styling',
    templateUrl: 'simple-combo-styling.component.html',
    styleUrls: ['simple-combo-styling.component.scss'],
    imports: [IgxSimpleComboComponent]
})
export class SimpleComboStylingComponent implements OnInit {
    element = inject(ElementRef);

    public cities: City[];

    ngOnInit(): void {
        this.cities = getCitiesByPopulation(10000000);
    }
}
```
```html
<div class="sample-wrapper">
    <div class="input-row">
        <igx-simple-combo
            [overlaySettings]="{ outlet: element.nativeElement }"
            [data]="cities" [displayKey]="'name'">
        </igx-simple-combo>
    </div>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-simple-combo-theme: combo-theme(
  $empty-list-background: #1a5214
);

$custom-drop-down-theme: drop-down-theme(
  $background-color: #d9f5d6,
  $header-text-color: #1a5214,
  $item-text-color: #1a5214,

  $focused-item-background: #72da67,
  $focused-item-text-color: #1a5214,
  $hover-item-background: #a0e698,
  $hover-item-text-color: #1a5214,

  $selected-item-background: #a0e698,
  $selected-item-text-color: #1a5214,
  $selected-hover-item-background: #72da67,
  $selected-hover-item-text-color: #1a5214,
  $selected-focus-item-background: #72da67,
  $selected-focus-item-text-color: #1a5214,
);

:host ::ng-deep {
  @include css-vars($custom-simple-combo-theme);
  @include css-vars($custom-drop-down-theme);
}
```


<div class="divider--half"></div>

## Known Issues

- The simple combobox does not have input for sizing its height. In the future, the [IgxInputGroup](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputgroupcomponent.html) component will expose an option that allows custom sizing, and then the [IgxSimpleCombo](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsimplecombocomponent.html) will use the same functionality for proper styling and better consistency.
- When the simple combobox is bound to an array of primitive data which contains `undefined` (i.e. `[ undefined, ...]`), `undefined` is not displayed in the dropdown. When it is bound to an array of complex data (i.e. objects) and the value used for `valueKey` is `undefined`, the item will be displayed in the dropdown, but cannot be selected.
- When the simple combobox is bound via `ngModel` and is marked as `required`, `null`, `undefined` and `''` values cannot be selected.
- When the simple combobox is bound to a remote service and there is a predefined selection, its input will remain blank until the requested data is loaded.

> [!NOTE]
> The simple combobox uses `igxForOf` directive internally hence all `igxForOf` limitations are valid for the simple combobox. For more details see [igxForOf Known Issues](for-of.md#known-limitations) section.

## API Summary

<div class="divider--half"></div>

- [IgxSimpleComboComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsimplecombocomponent.html)
- [IgxComboComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-combo-theme)

Additional components and/or directives with relative APIs that were used:

- [IgxDropDownComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html)
- [IgxInputGroupComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputgroupcomponent.html)

## Theming Dependencies

- [IgxDropDown Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-drop-down-theme)
- [IgxIcon Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)
- [IgxOverlay Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)

## Additional Resources

<div class="divider--half"></div>

- [ComboBox Features](combo-features.md)
- [ComboBox Remote Binding](combo-remote.md)
- [ComboBox Templates](combo-templates.md)
- [Template Driven Forms Integration](input-group.md)
- [Reactive Forms Integration](angular-reactive-form-validation.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

---
_tocName: Column Data Types
_premium: true
---
---title: Column Data Types in Angular - Ignite UI for Angular_description: Handle cell and editing templates in Angular by choosing from several predefined column data types - number, string, date, boolean, currency and percent column._keywords: column data type, ignite ui for angular, infragistics_license: commercial---# Angular Grid Column TypesIgnite UI for Angular Grid provides a default handling of _number_, _string_, _date_, _boolean_, _currency_ and _percent_ column data types, based on which the appearance of the default and editing templates will be present.## Angular Column Types Example```typescript
/*eslint-disable*/
import { Component, OnInit } from "@angular/core";
import { registerLocaleData, NgClass } from "@angular/common";
import localeBG from '@angular/common/locales/bg';
import localeDE from '@angular/common/locales/de';
import localeFR from '@angular/common/locales/fr';
import localeJA from '@angular/common/locales/ja';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent, IgxTimeSummaryOperand } from 'igniteui-angular/grids/core';
import { FormsModule } from "@angular/forms";
import { IgxPreventDocumentScrollDirective } from "../../directives/prevent-scroll.directive";

@Component({
    selector: "grid-column-data-types-sample",
    styleUrls: ["./grid-column-data-types-sample.component.scss"],
    templateUrl: "grid-column-data-types-sample.component.html",
    imports: [IgxSelectComponent, FormsModule, IgxPrefixDirective, IgxSelectItemComponent, IgxHintDirective, IgxSuffixDirective, IgxIconComponent, IgxInputGroupComponent, IgxTooltipTargetDirective, IgxTooltipDirective, IgxInputDirective, NgClass, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class GridColumnDataTypesSampleComponent implements OnInit {
    public IgxTimeSummaryOperand = IgxTimeSummaryOperand;

    public digitsInfoMessage: string = 'Applicable to number, currency and percent type columns';

    // Number options
    public options = {
        digitsInfo: '1.4-4',
        currencyCode: ''
    };
    public formatOptions = this.options;

    // Different locales
    public locales = ["BG", "EN", "DE", "FR", "JA"];
    public locale = "EN";

    // DateTime formats
    public dateTimeFormats = [
        { format: "short", eq: "'M/d/yy, h:mm a'" },
        { format: "long", eq: "'MMMM d, y, h:mm:ss a z'"},
        { format: "full", eq: "'EEEE, MMMM d, y, h:mm:ss a zzzz'"},
    ];

    // Date formats
    public dateFormats = [
        { format: "shortDate", eq: "'M/d/yy'" },
        { format: "mediumDate", eq: "'MMMM d, y'"},
        { format: "longDate", eq: "'MMMM d, y'"},
        { format: "fullDate", eq: "'EEEE, MMMM d, y'"}
    ];

    // Time formats
    public timeFormats = [
        { format: "shortTime", eq: "'h:mm a'" },
        { format: "mediumTime", eq: "'h:mm:ss a'"},
        { format: "longTime", eq: "'h:mm:ss a z'"},
        { format: "fullTime", eq: "'h:mm:ss a zzzz'"},
    ];

    // DateTime options
    public dateTimeOptions = {
        format: 'long'
    };
    public formatDateTimeOptions = this.dateTimeOptions;

    // Date options
    public dateOptions = {
        format: 'mediumDate'
    };
    public formatDateOptions = this.dateOptions;

    // Time options
    public timeOptions = {
        format: 'shortTime'
    };
    public formatTimeOptions = this.timeOptions;

    // Currency format options
    public currencyCodes = ["USD", "BGN", "EUR", "JPY"];

    public data: any[] = [{
        ProductID: 1,
        ProductName: "Chai",
        SupplierID: 1,
        CategoryID: 1,
        QuantityPerUnit: "10 boxes x 20 bags",
        ProductImage: "assets/images/products/chai.jpg",
        UnitPrice: 18.0000,
        UnitsInStock: 39,
        UnitsOnOrder: 0.030,
        ReorderLevel: 10,
        Discontinued: false,
        OrderDate: new Date("2012-02-12"),
        OrderDateDelay: new Date(new Date("2012-02-12").setHours(3, 20)),
        OrderFullDate: new Date(new Date("2012-02-12").setHours(3, 20))
      }, {
        ProductID: 2,
        ProductName: "Chang",
        ProductImage: "assets/images/products/chang.jpg",
        SupplierID: 1,
        CategoryID: 1,
        QuantityPerUnit: "24 - 12 oz bottles",
        UnitPrice: 19.0000,
        UnitsInStock: 17,
        UnitsOnOrder: 0.040,
        ReorderLevel: 25,
        Discontinued: true,
        OrderDate: new Date("2003-03-17"),
        OrderDateDelay: new Date(new Date("2003-03-17").setHours(5, 40)),
        OrderFullDate: new Date(new Date("2003-03-17").setHours(5, 40))
      }, {
        ProductID: 3,
        ProductName: "Aniseed Syrup",
        ProductImage: "assets/images/products/aniseed.jpg",
        SupplierID: 1,
        CategoryID: 2,
        QuantityPerUnit: "12 - 550 ml bottles",
        UnitPrice: 10.0000,
        UnitsInStock: 13,
        UnitsOnOrder: 0.070,
        ReorderLevel: 25,
        Discontinued: false,
        OrderDate: new Date("2006-03-17"),
        OrderDateDelay: new Date(new Date("2006-03-17").setHours(1, 55)),
        OrderFullDate: new Date(new Date("2006-03-17").setHours(1, 55))
      }, {
        ProductID: 4,
        ProductName: "Chef Antons Cajun Seasoning",
        ProductImage: "assets/images/products/cajun-seasoning.jpg",
        SupplierID: 2,
        CategoryID: 2,
        QuantityPerUnit: "48 - 6 oz jars",
        UnitPrice: 22.0000,
        UnitsInStock: 53,
        UnitsOnOrder: 0.030,
        ReorderLevel: 0,
        Discontinued: false,
        OrderDate: new Date("2016-03-17"),
        OrderDateDelay: new Date(new Date("2016-03-17").setHours(11, 11)),
        OrderFullDate: new Date(new Date("2016-03-17").setHours(11, 11))
      }, {
        ProductID: 5,
        ProductName: "Chef Antons Gumbo Mix",
        ProductImage: "assets/images/products/chef-antons-gumbo-mix.jpg",
        SupplierID: 2,
        CategoryID: 2,
        QuantityPerUnit: "36 boxes",
        UnitPrice: 21.3500,
        UnitsInStock: 0,
        UnitsOnOrder: 0.030,
        ReorderLevel: 0,
        Discontinued: true,
        OrderDate: new Date("2011-11-11"),
        OrderDateDelay: null,
        OrderFullDate: null
      }, {
        ProductID: 6,
        ProductName: "Grandmas Boysenberry Spread",
        ProductImage: "assets/images/products/grandmas-boysenberry-spread.jpg",
        SupplierID: 3,
        CategoryID: 2,
        QuantityPerUnit: "12 - 8 oz jars",
        UnitPrice: 25.0000,
        UnitsInStock: 0,
        UnitsOnOrder: 0.030,
        ReorderLevel: 25,
        Discontinued: false,
        OrderDate: new Date("2017-12-17"),
        OrderDateDelay: new Date(new Date("2017-12-17").setHours(2, 15)),
        OrderFullDate: new Date(new Date("2017-12-17").setHours(2, 15))
      }, {
        ProductID: 7,
        ProductName: "Uncle Bobs Organic Dried Pears",
        ProductImage: "assets/images/products/uncle-bobs-organic-dried-pears.jpg",
        SupplierID: 3,
        CategoryID: 7,
        QuantityPerUnit: "12 - 1 lb pkgs.",
        UnitPrice: 30.0000,
        UnitsInStock: 150,
        UnitsOnOrder: 0.030,
        ReorderLevel: 10,
        Discontinued: false,
        OrderDate: new Date("2016-07-17"),
        OrderDateDelay: undefined,
        OrderFullDate: new Date(new Date("2016-07-17").setHours(1, 55))
      }, {
        ProductID: 8,
        ProductName: "Northwoods Cranberry Sauce",
        ProductImage: "assets/images/products/cranberry-sauce.jpg",
        SupplierID: 3,
        CategoryID: 2,
        QuantityPerUnit: "12 - 12 oz jars",
        UnitPrice: 40.0000,
        UnitsInStock: 6,
        UnitsOnOrder: 0.030,
        ReorderLevel: 0,
        Discontinued: false,
        OrderDate: new Date("2018-01-17"),
        OrderDateDelay: null,
        OrderFullDate: new Date(new Date("2018-01-17").setHours(1, 55))
      }, {
        ProductID: 9,
        ProductName: "Mishi Kobe Niku",
        ProductImage: "assets/images/products/mishi-kobe-niku.jpg",
        SupplierID: 4,
        CategoryID: 6,
        QuantityPerUnit: "18 - 500 g pkgs.",
        UnitPrice: 97.0000,
        UnitsInStock: 29,
        UnitsOnOrder: 0.030,
        ReorderLevel: 0,
        Discontinued: true,
        OrderDate: new Date("2010-02-17"),
        OrderDateDelay: new Date(new Date("2010-02-17").setHours(8, 10)),
        OrderFullDate: new Date(new Date("2010-02-17").setHours(8, 10))
      }
    ];

    private regEx = new RegExp('^[0-9]+.[0-9]+-[0-9]$')

    constructor() {
    }
    public ngOnInit(): void {
        registerLocaleData(localeBG);
        registerLocaleData(localeDE);
        registerLocaleData(localeFR);
        registerLocaleData(localeJA);
    }

    public reset() {
        this.options.digitsInfo = '1.4-4';
        this.formatOptions = Object.assign({}, this.formatOptions, this.options);
    }
    public clearCode(event) {
        event.preventDefault();
        this.options.currencyCode = '';
        this.formatOptions = Object.assign({}, this.formatOptions, this.options);
    }
    public modelChange() {
        if (this.options.digitsInfo.match(this.regEx)) {
            if (Number(this.options.digitsInfo.substr(2, 1)) > Number(this.options.digitsInfo.substr(4, 1))) {
                this.digitsInfoMessage = 'The minimum number of digits after fraction (x) is higher than the maximum (x).';
            } else {
                this.digitsInfoMessage = 'Applicable to number, currency and percent type columns';
                this.formatOptions = Object.assign({}, this.formatOptions, this.options);
            }
        }
    }

    public selectionChanging(event) {
        this.dateTimeOptions.format = event.newSelection.value;
        this.formatDateTimeOptions = Object.assign({}, this.formatDateTimeOptions, this.dateTimeOptions);
    }

    public selectionDateChanging(event) {
        this.dateOptions.format = event.newSelection.value;
        this.formatDateOptions = Object.assign({}, this.formatDateOptions, this.dateOptions);
    }

    public selectionTimeChanging(event) {
        this.timeOptions.format = event.newSelection.value;
        this.formatTimeOptions = Object.assign({}, this.formatTimeOptions, this.timeOptions);
    }

    public currencySelectionChanging(event) {
        this.options.currencyCode = event.newSelection.value;
        this.formatOptions = Object.assign({}, this.formatOptions, this.options);
    }

    public warningClass() {
        if (!this.digitsInfoMessage.startsWith('Applicable')) return 'warning';
    }
}
```
```html
<div class="wrapper">
  <span class="location-wrapper">
    <igx-select #select [(ngModel)]="locale">
      <igx-prefix class="ellipsis">Locale: </igx-prefix>
      @for (locale of locales; track locale) {
        <igx-select-item [value]="locale">
          {{ locale }}
        </igx-select-item>
      }
      <igx-hint>Applicable to date, number, currency and percent type columns</igx-hint>
    </igx-select>

    <igx-select #select [(ngModel)]="dateTimeOptions.format" (selectionChanging)="selectionChanging($event)">
      <igx-prefix class="ellipsis">DateTime format: </igx-prefix>
      @for (dateFormat of dateTimeFormats; track dateFormat) {
        <igx-select-item [value]="dateFormat.format"
          [text]="dateFormat.format + ' ---> ' + dateFormat.eq">
          {{ dateFormat.format }}
        </igx-select-item>
      }
      <igx-hint>Applied to 'dateTime' type column only</igx-hint>
    </igx-select>

    <igx-select #select [(ngModel)]="dateOptions.format" (selectionChanging)="selectionDateChanging($event)">
      <igx-prefix class="ellipsis">Date format: </igx-prefix>
      @for (dateFormat of dateFormats; track dateFormat) {
        <igx-select-item [value]="dateFormat.format"
          [text]="dateFormat.format + ' ---> ' + dateFormat.eq">
          {{ dateFormat.format }}
        </igx-select-item>
      }
      <igx-hint>Applied to 'date' type column only</igx-hint>
    </igx-select>

    <igx-select #select [(ngModel)]="timeOptions.format" (selectionChanging)="selectionTimeChanging($event)">
      <igx-prefix class="ellipsis">Time format: </igx-prefix>
      @for (timeFormat of timeFormats; track timeFormat) {
        <igx-select-item [value]="timeFormat.format"
          [text]="timeFormat.format + ' ---> ' + timeFormat.eq">
          {{ timeFormat.format }}
        </igx-select-item>
      }
      <igx-hint>Applied to 'time' type column only</igx-hint>
    </igx-select>

    <!-- Timezone selection removed as time-only columns are not timezone-aware -->

    <igx-select #select [(ngModel)]="options.currencyCode" (selectionChanging)="currencySelectionChanging($event)">
      <igx-prefix class="ellipsis">Currency Code: </igx-prefix>
      @for (currencyCode of currencyCodes; track currencyCode) {
        <igx-select-item [value]="currencyCode">
          {{ currencyCode }}
        </igx-select-item>
      }
      <igx-hint>Applicable to currency type columns</igx-hint>
      <igx-suffix>
        @if (options.currencyCode.length > 0) {
          <igx-icon class="prefixIcon" (click)="clearCode($event)">clear
          </igx-icon>
        }
      </igx-suffix>
    </igx-select>
    <br />
    <igx-input-group type="search" class="searchInputGroup">
      <igx-prefix class="ellipsis">
        <div #target="tooltipTarget" [igxTooltipTarget]="tooltipRef" [showDelay]="0" [hideDelay]="0">Set digits
          info
        </div>
        <div #tooltipRef="tooltip" igxTooltip>
          <span style="width: 300px"> Decimal representation options, specified by a string in the following
          format: minIntegerDigits.minFractionDigits-maxFractionDigits</span>
        </div>
      </igx-prefix>
      <input name="info" igxInput placeholder="Digits info" [(ngModel)]="options.digitsInfo"
        (ngModelChange)="modelChange()" />
        <igx-suffix>
          @if (options.digitsInfo.length > 0) {
            <igx-icon class="prefixIcon" (click)="reset()">clear
            </igx-icon>
          }
        </igx-suffix>
        <igx-hint [ngClass]="warningClass()" position="start">{{ digitsInfoMessage }}</igx-hint>
      </igx-input-group>
    </span>

    <span class="grid-wrapper">
      <igx-grid [igxPreventDocumentScroll]="true" #grid1 [data]="data" [allowFiltering]="true" [locale]="locale"
        [filterMode]="'excelStyleFilter'" [autoGenerate]="false" [height]="null">
        <igx-column field="ProductName" [width]="'120px'" header="Prod. Name" [sortable]="true" [hasSummary]="true"
          [editable]="true" [dataType]="'string'" [resizable]="true">
        </igx-column>
        <igx-column field="ProductImage" [width]="'60px'" header="Image" [dataType]="'image'" [resizable]="true">
        </igx-column>
        <igx-column field="UnitPrice" [width]="'100px'" header="Unit Price" [sortable]="true" [hasSummary]="true" [editable]="true"
          [pipeArgs]="formatOptions" [dataType]="'number'" [resizable]="true">
        </igx-column>
        <igx-column field="OrderFullDate" [width]="'250px'" header="Order Full Date" [sortable]="true" [hasSummary]="true" [editable]="true"
          [pipeArgs]="formatDateTimeOptions" [dataType]="'dateTime'" [resizable]="true">
        </igx-column>
        <igx-column field="OrderDate" [width]="'160px'" header="Order Date" [sortable]="true" [hasSummary]="true" [editable]="true"
          [pipeArgs]="formatDateOptions" [dataType]="'date'" [resizable]="true">
        </igx-column>
        <igx-column field="OrderDateDelay" [width]="'120px'" header="Order Time" [sortable]="true" [hasSummary]="true" [editable]="true"
          [pipeArgs]="formatTimeOptions" [dataType]="'time'" [resizable]="true" [summaries]="IgxTimeSummaryOperand">
        </igx-column>
        <igx-column field="UnitsInStock" [width]="'120px'" header="Stock Value" [sortable]="true" [hasSummary]="true"
          [editable]="true" [pipeArgs]="formatOptions" [dataType]="'currency'" [resizable]="true">
        </igx-column>
        <igx-column field="UnitsOnOrder" [width]="'120px'" header="% Change" [sortable]="true" [hasSummary]="true"
          [editable]="true" [pipeArgs]="formatOptions" [dataType]="'percent'" [resizable]="true">
        </igx-column>
        <igx-column field="Discontinued" [width]="'120px'" header="Discontinued" [sortable]="true" [hasSummary]="true"
          [editable]="true" [dataType]="'boolean'" [resizable]="true">
        </igx-column>
      </igx-grid>
    </span>
  </div>
```
```scss
@use '../../../variables' as *;

igx-select,
igx-input-group {
    --ig-size: var(--ig-size-small);
}

.grid-wrapper {
    --ig-size: var(--ig-size-small);
    margin: 15px;
}

.location-wrapper {
    min-width: 278px;
    margin: 18px;
}

.wrapper {
    display: grid;
    grid-template-columns: 1fr 3fr;
}

.ellipsis {
    @include ellipsis();
}

.warning {
    color:red;
}
```## Default templateIf you want to enable a data type-specific template, you should set the column [`dataType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#dataType) input otherwise the column will be treated as a string column since that is the default value for column dataType. Let's see what are the default templates for each type.### StringThis column [`dataType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#dataType) is not changing the appearance or format of the cell value.### NumberIf the [`dataType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#dataType) is set to _number_, the cell value will be formatted based on application or grid's [`locale`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#locale) settings, as well as when [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#pipeArgs) property is specified. Then the number format will be changed based on them, for example it might change the:- Number of digits after the decimal point- Decimal separator with `,` or `.````tspublic options = {
  digitsInfo: '1.4-4',};public formatOptions = this.options;``````html<igx-column [pipeArgs]="formatOptions" [dataType]="'number'"></igx-column>```### DateTime, Date and TimeThe appearance of the date portions will be set (e.g. day, month, year) based on [`locale`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#locale) format or [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#pipeArgs) input. The pipe arguments can be used to specify a custom [date format](https://angular.io/api/common/DatePipe#pre-defined-format-options) or [timezone](https://angular.io/api/common/DatePipe#parameters):- **format** - The default value for formatting the date is 'mediumDate'. Other available options are 'short', 'long', 'shortDate', 'fullDate', 'longTime', 'fullTime' and etc. This is a full list of all available [pre-defined Angular format options](https://angular.io/api/common/DatePipe#pre-defined-format-options) (legacy).- **timezone** - The user's local system timezone is the default value. The timezone offset or standard GMT/UTC or continental US timezone abbreviation can also be passed. Different timezone examples which will display the corresponding time of the location anywhere in the world:

 > Note: Since 20.2.x, if you have the Angular localization disabled, the list of available format options can be found in our new [localization topic](../general/localization.md#formatting).```tspublic formatDateOptions = {
    /** The date/time components that a date column will display, using predefined options or a custom format string. */
    /** e.g 'dd/mm/yyyy' or 'shortDate' **/
    format: 'longDate',
    /** A timezone offset (such as '+0430'), or a standard UTC/GMT or continental US timezone abbreviation. */
    timezone: 'GMT'};public formatOptions = this.options;``````html<igx-column [pipeArgs]="formatDateOptions" [dataType]="'date'"></igx-column>```Available timezones:| Timezone                  | Value                     ||---------------------------| ------------------------- || Alpha Time Zone           |‘UTC+1’                    || Australian Central Time   |‘UTC+9:30/ +10:30’         || Arabia Standard Time      |‘UTC+3’                    || Central Standard Time     |‘UTC-6’                    || China Standard Time       |‘UTC+8’                    || Delta Time Zone           |‘UTC+4’                    || Greenwich Mean Time       |‘UTC+0’                    || Gulf Standard Time        |‘UTC+4’                    || Hawaii Standard Time      |‘UTC-10’                   || India Standard Time       |‘UTC+4’                    |<div class="divider--half"></div>The Grid accepts date values of type _Date object_, _Number (milliseconds)_, _An ISO date-time string_. This section shows [how to configure a custom display format](grid.md#custom-display-format).As you can see in the sample, we specify a different format options in order to showcase the available formats for the specific column type. For example, below you can find the format options for the _time_ portion of the date object:```ts// Time format with equivalent examplepublic timeFormats = [
    { format: 'shortTime', eq: 'h:mm a' },
    { format: 'mediumTime', eq: 'h:mm:ss a' },
    { format: 'longTime', eq: 'h:mm:ss a z' },
    { format: 'fullTime', eq: 'h:mm:ss a zzzz' },];```#### Cell editingWhen it comes to cell editing based on the column type a different editor will appear:- dateTime - [IgxDateTimeEditor directive](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatetimeeditordirective.html) will be used. This editor will give you a mask directions for the input elements part of the DateTime object.- date - [IgxDatePicker component](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdatepickercomponent.html) will be used.- time - [IgxTimePicker component](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtimepickercomponent.html) will be used.#### FilteringThe same editors listed above will be used when it comes to Quick Filtering/Excel-style Filtering. These are the following filtering operands that each type exposes:- dateTime and date - Equals, Does Not Equal, Before, After, Today, Yesterday, This Month, Last Month, Next Month, This Year, Last Year, Next Year, Empty, Not Empty, Null, Not Null;- time - At, Not At, Before, After, At or Before, At or After, Empty, Not Empty, Null, Not Null;#### SummariesThe available Summary operands will be **Count**, **Earliest** (date/time) and **Latest** (date/time).#### SortingTime type column sorts based on the time portion of the object, ms will be disregarded.Date type column sorts based on the date portion, disregards the time portion.DateTime column sorts based on the full date### BooleanThe default template is using material icons for visualization of boolean values - 'clear' icon for _false_ values and 'check' icon for _true_ values. As for the editing template, it is using [igx-checkbox](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcheckboxcomponent.html) component.```html<igx-column [dataType]="'boolean'"></igx-column>```### Currency#### Default templateThe default template will show a numeric value with currency symbol that would be either prefixed or suffixed. Both currency symbol location and number value formatting is based on the provided Application [`LOCALE_ID`](https://angular.io/api/core/LOCALE_ID) or Grid [`locale`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#locale)._By using LOCALE_ID_```tsimport { LOCALE_ID } from '@angular/core';...

 @Component({
    selector: 'app-component.sample',
    templateUrl: 'grid-component.sample.html',
    providers: [{provide: LOCALE_ID, useValue: 'fr-FR' }]})```_By using Grid's locale_```html<igx-grid [locale]="'fr-FR'" [data]="data"></igx-grid>```By using the [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#pipeArgs) input the end-user can customize the number format by _decimal point_, _currencyCode_ and _display_.```tspublic options = {
  digitsInfo: '3.4-4',
  currencyCode: 'USD',
  display: 'symbol-narrow'};public formatOptions = this.options;``````html<igx-column field="UnitsInStock"
    [pipeArgs]="formatOptions"
    [dataType]="'currency'"></igx-column>```| Parameter                 | Description                                                ||---------------------------| -------------------------                                  || digitsInfo                | Represents Decimal representation of currency value        || currencyCode              | ISO 4217 currency code                                     || display*                  | Displays the value by narrow or wide symbol                |*display - for the default en-US locale, the code USD can be represented by the narrow symbol $ or the wide symbol US$.Upon editing of cell's value the _currency symbol_ will be visible as suffix or prefix. More about that could be found in the official [Cell editing topic](cell-editing.md#cell-editing-templates).>[!NOTE]> When using up/down arrow keys the value will increment/decrement with a step based on the digitsInfo - minFractionDigits (The minimum number of digits after the decimal point. Default is 0)### PercentDefault template is showing the percent equivalent of the underlying numeric value. The displayed cell value is a multiplied result by display factor of '100' - for example, as the default factor is 100 and the "value" passed to the cell is 0.123, then the displayed cell value will be "12.3%".When it comes to cell editing, the value will be the same as the data source value - the display factor is '1'. Upon editing of the cell a preview of the percent value will be shown as a suffix element.For example, while editing '0.0547' the preview element will show '5.47%'.```tspublic options = {
    /**
    * Decimal representation options, specified by a string in the following format:
    * `{minIntegerDigits}`.`{minFractionDigits}`-`{maxFractionDigits}`.
    * `minIntegerDigits`: The minimum number of integer digits before the decimal point. Default is 1.
    * `minFractionDigits`: The minimum number of digits after the decimal point. Default is 0.
    * `maxFractionDigits`: The maximum number of digits after the decimal point. Default is 3.
    */
    digitsInfo: '2.2-3'};public formatPercentOptions = this.options;``````html<igx-column field="UnitsInStock"
    [pipeArgs]="formatPercentOptions"
    [dataType]="'percent'"></igx-column>```>[!NOTE]> When using up/down arrow keys the value will increment/decrement with a step based on the digitsInfo - minFractionDigits (The minimum number of digits after the decimal point. Default is 0)### ImageDefault template is using the value coming from the data as an image source to a default image template. The default image template will extract the name of the image file and set it as `alt` attribute of the image to meet the accessibility requirement. The displayed cell size is adjusted to the sizes of the images rendered, so keep in mind that large images will still be rendered and the grid rows will become as large as the images in the image column. Filtering, sorting and grouping will be turned off by default for image type columns. If you want to enable them, you need to provide custom strategies which perform the data operations.```html<igx-column [dataType]="'image'"></igx-column>```When [auto-generating](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#autoGenerate) columns, the grid analyses the values in the first data record. If a value is of type string and matches the pattern of a url ending in an image extension (gif, jpg, jpeg, tiff, png, webp, bmp) then the column will automatically be marked as `dataType === GridColumnDataType.Image` and a default image template will be rendered.## Default editing templateSee the editing templates part of [Grid Editing topic](editing.md#editing-templates)## Custom editing template and formatterCustom template and column formatter definition will always take precedence over the column data type set:### Custom template```html<igx-grid #grid1 [data]="data | async" [autoGenerate]="false">
    <igx-column [field]="'UnitsInStock'" [dataType]="'currency'" [pipeArgs]="formatOptions" [editable]="true">
        <ng-template igxCellEditor let-value>
            {{ value | currency:'USD':'symbol':'1.0-0'}}
        </ng-template>
    </igx-column></igx-grid>```### Column formatter```ts
 // Through column formatter propertypublic formatCurrency(value: number) {
    return `Dollar sign ${value.toFixed(0)}`;}public init(column: IgxColumnComponent) {
    switch (column.field) {
        case 'UnitsInStock':
            column.formatter = this.formatCurrency;
            break;
        default:
            return;}```## API References- [IgxGridCell](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcell.html)- Column [pipeArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#pipeArgs)- Grid [locale](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#locale)- Column [dataType](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcolumncomponent.html#dataType)## Additional Resources<div class="divider--half"></div>- For custom templates you can see [cell editing topic](cell-editing.md#cell-editing-templates)- [Grid overview topic](grid.md)- [Editing topic](editing.md)- [Summaries topic](summaries.md)

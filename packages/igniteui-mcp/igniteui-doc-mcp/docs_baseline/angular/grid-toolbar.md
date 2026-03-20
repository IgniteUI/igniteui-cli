---
_tocName: Toolbar
_premium: true
---
---title: Angular Grid Toolbar - Ignite UI for Angular_description: Use Angular Data Grid Toolbar for essential UI operations. Hosts different UI controls for the Grid’s features - column hiding, pinning, excel exporting, etc._keywords: angular toolbar, igniteui for angular, infragistics_license: commercial---# Angular Grid ToolbarThe Grid in Ignite UI for Angular provides an [`IgxGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarcomponent.html) which is essentially a container for **UI** operations. The Angular toolbar is located at the top of the Angular component, i.e the Grid and it matches its horizontal size. The toolbar container can host predefined UI controls for the following Grid's features:- Column Hiding- Column Pinning- Exporting to Excel, CSV and PDF- Advanced Filteringor just any other custom content. The toolbar and the predefined UI components support Angular events and expose API for developers.## Angular Toolbar Grid Example```typescript
import { Component} from '@angular/core';
import { athletesData } from '../../data/athletesData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-toolbar-sample-1',
    styleUrls: ['./grid-toolbar-sample-1.component.scss'],
    templateUrl: './grid-toolbar-sample-1.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent]
})
export class GridToolbarSample1Component {

    public data: any[];

    constructor() {
        this.data = athletesData;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid1 id="grid1" [data]="data" [autoGenerate]="false" height="400px">

        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Grid Toolbar</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-advanced-filtering></igx-grid-toolbar-advanced-filtering>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
                <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column field="Name" header="Athlete" width="200">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner">
                    <igx-avatar [src]="cell.row.data.Avatar" shape="circle" size="small"></igx-avatar>
                    <span class="athlete_name">{{ cell.value }}</span>
                </div>
            </ng-template>
        </igx-column>

        <igx-column field="CountryName" header="Country" width="200">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner">
                    <igx-avatar [src]="cell.row.data.CountryFlag" shape="circle" size="small"></igx-avatar>
                    <span class="country_name">{{ cell.value }}</span>
                </div>
            </ng-template>
        </igx-column>

        <igx-column field="BeatsPerMinute" header="Beats Per Minute">
            <ng-template igxCell let-val>
                <div class="cell__inner">{{ val }}</div>
            </ng-template>
        </igx-column>

        <igx-column field="TopSpeed" header="Top Speed">
            <ng-template igxCell let-val>
                <div class="cell__inner">{{ val }}</div>
            </ng-template>

        </igx-column>

        <igx-column field="AthleteNumber" header="ID">
            <ng-template igxCell let-val>
                <div class="cell__inner">{{ val }}</div>
            </ng-template>
        </igx-column>

        <igx-column field="TrackProgress" header="Progress">
            <ng-template igxCell let-val>
                <div class="cell__inner">{{ val }}</div>
            </ng-template>
        </igx-column>
    </igx-grid>

</div>
```
```scss
.grid__wrapper {
     margin: 16px;
}

.cell__inner {
    display: flex;
    align-items: center;
    height: 100%;
}

.cell__inner {
    position: relative;
    justify-content: space-between;
}

.athlete_name {
    margin-left: 30px;
}

.country_name {
    margin-left: 30px;
}
```The predefined `actions` and `title` UI components are added inside the `<igx-grid-toolbar>` and this is all needed to have a toolbar providing default interactions with the corresponding Grid features:```html<igx-grid [data]="data" [autoGenerate]="true">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Grid Toolbar</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-advanced-filtering><igx-grid-toolbar-advanced-filtering>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar></igx-grid>```> Note: As seen in the code snippet above, the predefined `actions` UI components are wrapped in the [`<igx-grid-toolbar-actions>` container](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaractionscomponent.html). This way, the toolbar title is aligned to the left of the toolbar and the actions are aligned to the right of the toolbar.Of course, each of these UIs can be added independently of each other, or may not be added at all. This way the toolbar container will be rendered empty:```html<igx-grid [data]="data" [autoGenerate]="true">
    <igx-grid-toolbar>
    </igx-grid-toolbar></igx-grid>```For a comprehensive look over each of the default UI components, continue reading the **Features** sectionbelow.## FeaturesThe toolbar is great at separating logic/interactions which affects the grid as a whole.As shown above, it can be configured to provide default components for controlling, column hiding, column pinning,advanced filtering and exporting data from the grid.These features can be enabled independently from each other by following a pattern similar to the card component ofthe Ignite UI for Angular suite.Listed below are the main features of the toolbar with example code for each of them.```typescript
import { Component } from '@angular/core';
import { AbsoluteScrollStrategy, AutoPositionStrategy, GlobalPositionStrategy } from 'igniteui-angular/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { scaleInCenter, scaleOutCenter } from 'igniteui-angular/animations';
import { athletesData } from '../../data/athletesData';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-grid-toolbar-sample-2',
    styleUrls: ['./grid-toolbar-sample-2.component.scss'],
    templateUrl: './grid-toolbar-sample-2.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxSwitchComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent]
})
export class GridToolbarSample2Component {

    data: any[];
    toolbarTitle = 'Grid toolbar';
    enableHiding = true;
    enablePinning = true;
    enableExport = true;
    enableFiltering = true;
    public positionStrategyScaleCenter = new GlobalPositionStrategy({
        openAnimation: scaleInCenter,
        closeAnimation: scaleOutCenter
    });
    public overlaySettingsScaleCenter = {
        positionStrategy: this.positionStrategyScaleCenter,
        scrollStrategy: new AbsoluteScrollStrategy(),
        modal: true,
        closeOnEscape: true
    };

    public positionStrategyAuto = new AutoPositionStrategy();
    public overlaySettingsAuto = {
        positionStrategy: this.positionStrategyAuto,
        scrollStrategy: new AbsoluteScrollStrategy(),
        modal: false,
        closeOnEscape: false
    };

    constructor() {
        this.data = athletesData;
    }
}
```
```html
<div class="grid__wrapper">
  <div class="control-panel">
    <igx-input-group type="box">
      <label for="toolbarTitle" igxLabel>Change Toolbar title</label>
      <input name="toolbarTitle" id="toolbarTitle" type="text" igxInput [(ngModel)]="toolbarTitle" />
    </igx-input-group>
    <div class="control-panel__switches">
      <igx-switch [(ngModel)]="enableFiltering">Advanced Filtering</igx-switch>
      <igx-switch [(ngModel)]="enableHiding">Column hiding</igx-switch>
      <igx-switch [(ngModel)]="enablePinning">Column pinning</igx-switch>
      <igx-switch [(ngModel)]="enableExport">Exporting</igx-switch>
    </div>
  </div>
  <igx-grid [igxPreventDocumentScroll]="true" [data]="data" [autoGenerate]="false" height="280px">
    <igx-grid-toolbar>
      <igx-grid-toolbar-title>{{ toolbarTitle }}</igx-grid-toolbar-title>
      <igx-grid-toolbar-actions>
        @if (enableFiltering) {
          <igx-grid-toolbar-advanced-filtering [overlaySettings]="overlaySettingsAuto"></igx-grid-toolbar-advanced-filtering>
        }
        @if (enableHiding) {
          <igx-grid-toolbar-hiding [overlaySettings]="overlaySettingsAuto"></igx-grid-toolbar-hiding>
        }
        @if (enablePinning) {
          <igx-grid-toolbar-pinning [overlaySettings]="overlaySettingsScaleCenter"></igx-grid-toolbar-pinning>
        }
        @if (enableExport) {
          <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
        }
      </igx-grid-toolbar-actions>
    </igx-grid-toolbar>


    <igx-column field="Name" header="Athlete" width="200">
      <ng-template igxCell let-cell="cell">
        <div class="cell__inner">
          <igx-avatar [src]="cell.row.data.Avatar" shape="circle" size="small"></igx-avatar>
          <span class="athlete-name">{{ cell.value }}</span>
        </div>
      </ng-template>
    </igx-column>

    <igx-column field="CountryName" header="Country" width="200">
      <ng-template igxCell let-cell="cell">
        <div class="cell__inner">
          <igx-avatar [src]="cell.row.data.CountryFlag" shape="circle" size="small"></igx-avatar>
          <span class="country-name">{{ cell.value }}</span>
        </div>
      </ng-template>
    </igx-column>

    <igx-column field="BeatsPerMinute" header="Beats Per Minute" >
      <ng-template igxCell let-val>
        <div class="cell__inner">{{ val }}</div>
      </ng-template>
    </igx-column>

    <igx-column field="TopSpeed" header="Top Speed">
      <ng-template igxCell let-val>
        <div class="cell__inner">{{ val }}</div>
      </ng-template>

    </igx-column>

    <igx-column field="AthleteNumber" header="ID">
      <ng-template igxCell let-val>
        <div class="cell__inner">{{ val }}</div>
      </ng-template>
    </igx-column>

    <igx-column field="TrackProgress" header="Progress">
      <ng-template igxCell let-val>
        <div class="cell__inner">{{ val }}</div>
      </ng-template>
    </igx-column>
  </igx-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.control-panel {
    margin-bottom: 16px;

    &__switches {
        margin-top: 16px;

        > * {
            margin-left: 32px;

            &:first-of-type {
                margin-left: 0;
            }
        }
    }
}

.athlete-name {
    margin-left: 8px;
}

.country-name {
    margin-left: 8px;
}
```### TitleSetting a title for the toolbar in your grid is achieved by using the [IgxGridToolbarTitleComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbartitlecomponent.html).Users can provide anything from simple text to more involved templates.```html<igx-grid-toolbar>
    <igx-grid-toolbar-title>Grid toolbar title</igx-grid-toolbar-title></igx-grid-toolbar>```### ActionsThe toolbar exposes a [specific container](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaractionscomponent.html) where users can place actions/interactions in relation to the parent grid.As with the title portion of the toolbar, users can provide anything inside that template part, including the defaulttoolbar interaction components.```html<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <button igxButton>Action</button>
        <igx-select></igx-select>
        ...
    </igx-grid-toolbar-actions></igx-grid-toolbar>```Each action now exposes a way to change the overlay settings of the actions dialog by using the [`overlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarhidingcomponent.html#overlaySettings) input, example:```html<igx-grid-toolbar-actions>
    <igx-grid-toolbar-pinning [overlaySettings]="overlaySettingsScaleCenter"></igx-grid-toolbar-pinning>
    <igx-grid-toolbar-hiding [overlaySettings]="overlaySettingsAuto"></igx-grid-toolbar-hiding></igx-grid-toolbar-actions>``````tspublic data: any[];public positionStrategyScaleCenter = new GlobalPositionStrategy({
    openAnimation: scaleInCenter,
    closeAnimation: scaleOutCenter});public overlaySettingsScaleCenter = {
    positionStrategy: this.positionStrategyScaleCenter,
    scrollStrategy: new AbsoluteScrollStrategy(),
    modal: true,
    closeOnEscape: true};public positionStrategyAuto = new AutoPositionStrategy();public overlaySettingsAuto = {
    positionStrategy: this.positionStrategyAuto,
    scrollStrategy: new AbsoluteScrollStrategy(),
    modal: false,
    closeOnEscape: false};constructor() {
    this.data = athletesData;}```The default overlaySettings are using _ConnectedPositionStrategy_ with _Absolute_ scroll strategy, _modal_ set to false, with enabled _close on escape_ and _close on outside click_ interactions.### Column pinning[Toolbar Pinning component](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarpinningcomponent.html) provides the default UI for interacting with column pinning in the grid.The component is setup to work out of the box with the parent grid containing the toolbar as well as several input properties for customizing the UI, such as the componenttitle, the placeholder for the component input and the height of the dropdown itself.```html<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-pinning
            title="Grid pinned columns"
            prompt="Filter column collection"
            columnListHeight="400px"
        >
        </igx-grid-toolbar-pinning>
    </igx-grid-toolbar-actions></igx-grid-toolbar>```### Column hiding[Toolbar Hiding component](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarhidingcomponent.html) provides the defaultUI for interacting with column hiding. Exposes the same input properties for customizing the UI, such as the componenttitle, the placeholder for the component input and the height of the dropdown itself.```html<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-hiding
            title="Grid column hiding"
            prompt="Filter column collection"
            columnListHeight="400px"
        >
        </igx-grid-toolbar-hiding>
    </igx-grid-toolbar-actions></igx-grid-toolbar>```### Advanced filtering[Toolbar Advanced Filtering component](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaradvancedfilteringcomponent.html) provides the default UI for the Advanced Filtering feature. The component exposes a way to change the default text of the button.```html<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-advanced-filtering>Custom text for the toggle button</igx-grid-toolbar-advanced-filtering>
    </igx-grid-toolbar-actions></igx-grid-toolbar>```### Data exportingAs with the rest of the toolbar actions, exporting is provided through a [Toolbar Exporter component](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarexportercomponent.html) out of the box.The exporting component is using the respective service for the target data format ([Excel](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporterservice.html), [CSV](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcsvexporterservice.html), [PDF](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporterservice.html)). That means if the respective service is not provided through the dependency injection chain, the componentwon't be able to export anything.If you need a refresher on the DI in Angular, check the [official guide](https://angular.io/guide/dependency-injection). Here is a sample snippet showing how to enableall export services for your application.```typescript// app.module.tsimport { IgxExcelExporterService, IgxCsvExporterService, IgxPdfExporterService } from 'igniteui-angular/grids/core';// import { IgxExcelExporterService, IgxCsvExporterService, IgxPdfExporterService } from '@infragistics/igniteui-angular/grids/core'; for licensed package@NgModule({
    ...
    providers: [IgxExcelExporterService, IgxCsvExporterService, IgxPdfExporterService ]})export class AppModule { ... }```> [!Note]> In v12.2.1 and later, the exporter services are provided in root, which means you no longer need to declare them in the AppModule providers.The toolbar exporter component exposes several input properties for customizing both the UI and the exporting experience.These range from changing the display text, to enabling/disabling options in the dropdown to customizing the name of thegenerated file. For full reference, consult the [API documentation](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarexportercomponent.html) for the toolbar exporter component.Here is a snippet showing some of the options which can be customized through the Angular template:```html<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-exporter
            <!-- If active, enables the CSV export entry in the dropdown UI -->
            [exportCSV]="csvExportEnabled"
            <!-- If active, enables the excel export entry in the dropdown UI -->
            [exportExcel]="excelExportEnabled"
            <!-- If active, enables the PDF export entry in the dropdown UI -->
            [exportPDF]="pdfExportEnabled"
            <!-- The name of the generated export file without the file extension -->
            filename="exported_data"
        >
            Custom text for the exporter button
            <span excelText>Custom text for the excel export entry</span>
            <span csvText>Custom text for the CSV export entry</span>
            <span pdfText>Custom text for the PDF export entry</span>
        </igx-grid-toolbar-exporter>
    </igx-grid-toolbar-actions></igx-grid-toolbar>```In addition to changing the exported filename, the user can further configure the exporter options by waiting for the [toolbarExporting](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#toolbarExporting) event and customizing the options entry in the event properties.> [!NOTE]> By default when exporting to CSV the exporter exports using a comma separator and uses a '.csv' extension for the output file.> You can customize these exporting parameters by subscribing to events of the exporter or changing the values of the exporter options fields.> You can also cancel the export process by setting the cancel field of the event args to true.The following code snippet demonstrates subscribing to the toolbar exporting event and configuring the exporter options:```html<igx-grid (toolbarExporting)="configureExport($event)" ></igx-grid>``````typescriptconfigureExport(args: IGridToolbarExportEventArgs) {
    const options: IgxExporterOptionsBase = args.options;
    
    options.fileName = `Report_${new Date().toDateString()}`;

    if (options instanceof IgxExcelExporterOptions) {
        options.columnWidth = 10;
    } else {
        options.fileType = CsvFileTypes.TSV;
        options.valueDelimiter = '\t';
    }

    args.exporter.columnExporting.subscribe((columnArgs: IColumnExportingEventArgs) => {
        @@if (igxName === 'IgxGrid') {
        // Don't export image fields
        columnArgs.cancel = columnArgs.header === 'Athlete' ||
                            columnArgs.header === 'Country';
        }
        @@if (igxName === 'IgxTreeGrid') {
        // Don't export image field
        columnArgs.cancel = columnArgs.header === 'Name';
        }
    });}```The following sample demonstrates how to customize the exported files:```typescript
import { Component } from '@angular/core';
import {
    CsvFileTypes,
    IColumnExportingEventArgs,
    IgxCsvExporterOptions,
    IgxExcelExporterOptions,
    IgxExporterOptionsBase,
    IGridToolbarExportEventArgs,
    IgxCellTemplateDirective,
    IgxColumnComponent,
    IgxGridToolbarActionsComponent,
    IgxGridToolbarComponent,
    IgxGridToolbarExporterComponent,
    IgxGridToolbarTitleComponent
} from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { athletesData } from '../../data/athletesData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-toolbar-sample-3',
    styleUrls: ['./grid-toolbar-sample-3.component.scss'],
    templateUrl: './grid-toolbar-sample-3.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent]
})
export class GridToolbarSample3Component {

    public data: any[];

    constructor() {
        this.data = athletesData;
    }

    public configureExport(args: IGridToolbarExportEventArgs) {
        // You can customize the exporting from this event
        const options: IgxExporterOptionsBase = args.options;

        options.fileName = `Report_${new Date().toDateString()}`;

        if (options instanceof IgxExcelExporterOptions) {
            const excelOptions = options as IgxExcelExporterOptions;
            excelOptions.columnWidth = 10;
        } else {
            const csvOptions = options as IgxCsvExporterOptions;
            csvOptions.fileType = CsvFileTypes.TSV;
            csvOptions.valueDelimiter = '\t';
        }

        args.exporter.columnExporting.subscribe((columnArgs: IColumnExportingEventArgs) => {
            // Don't export image fields
            columnArgs.cancel = columnArgs.header === 'Athlete' ||
                columnArgs.header === 'Country';
        });
    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid1 id="grid1" [data]="data" [autoGenerate]="false" height="400px"
        (toolbarExporting)="configureExport($event)"
    >
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Grid toolbar</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>


        <igx-column field="Name" header="Athlete" width="200">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner">
                    <igx-avatar [src]="cell.row.data.Avatar" shape="circle" size="small"></igx-avatar>
                    <span class="athlete_name">{{ cell.value }}</span>
                </div>
            </ng-template>
        </igx-column>

        <igx-column field="CountryName" header="Country" width="200">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner">
                    <igx-avatar [src]="cell.row.data.CountryFlag" shape="circle" size="small"></igx-avatar>
                    <span class="country_name">{{ cell.value }}</span>
                </div>
            </ng-template>
        </igx-column>

        <igx-column field="BeatsPerMinute" header="Beats Per Minute">
            <ng-template igxCell let-val>
                <div class="cell__inner">{{ val }}</div>
            </ng-template>
        </igx-column>

        <igx-column field="TopSpeed" header="Top Speed">
            <ng-template igxCell let-val>
                <div class="cell__inner">{{ val }}</div>
            </ng-template>

        </igx-column>

        <igx-column field="AthleteNumber" header="ID">
            <ng-template igxCell let-val>
                <div class="cell__inner">{{ val }}</div>
            </ng-template>
        </igx-column>

        <igx-column field="TrackProgress" header="Progress">
            <ng-template igxCell let-val>
                <div class="cell__inner">{{ val }}</div>
            </ng-template>
        </igx-column>
    </igx-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 15px;
}

.cell__inner {
    display: flex;
    align-items: center;
    height: 100%;
}

.cell__inner {
    position: relative;
    justify-content: space-between;
}

.athlete_name {
    margin-left: 30px;
}

.country_name {
    margin-left: 30px;
}
```<div class="divider"></div>## Exporting IndicatorWhen using the default toolbar exporter component, whenever an export operation takes place the toolbar will show a progress indicator while the operation is in progress.Moreover, users can set the toolbar [showProgress](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarcomponent.html#showProgress) property and use for their own long running operationsor just as another way to signify an action taking place in the grid.The sample below has significant amount of data. While the data is being exported, the progress bar is shown. Additionally, it has another button that simulates a long running operation in the grid:```typescript
import { Component } from '@angular/core';
import { DATA } from '../../data/nwindData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent } from 'igniteui-angular/grids/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-grid-export-visualization',
    templateUrl: './grid-export-visualization.component.html',
    styleUrls: ['./grid-export-visualization.component.scss'],
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxButtonDirective, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, CurrencyPipe]
})
export class GridExportVisualizationComponent {
    public localData = [];
    constructor() {
        for (let i = 0; i < 1000; i++) {
            for (let c = 0; c < DATA.length; c++) {
                this.localData.push(DATA[c]);
            }
        }
    }

    public formatDate(val) {
        if (val !== 'Select All') {
            return new Intl.DateTimeFormat('en-US').format(val);
        } else {
            return val;
        }
    }

    longRunning(toolbar: any) {
        toolbar.showProgress = true;
        setTimeout(() => toolbar.showProgress = false, 5000);
    }
}
```
```html
<div class="grid__wrapper">
  <igx-grid [igxPreventDocumentScroll]="true" [data]="localData" [moving]="true" [autoGenerate]="false" height="350px" width="100%">
    <igx-grid-toolbar #toolbar>
      <igx-grid-toolbar-actions>
        <button [disabled]="toolbar.showProgress" (click)="longRunning(toolbar)" igxButton>
          Simulate long running operation
        </button>
        <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
      </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

    <igx-column field="ProductName" header="Product Name" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [sortable]="true" [dataType]="'string'">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [sortable]="true" dataType="number">
      <ng-template igxCell let-cell="cell" let-val let-row>
        {{+val | currency}}
      </ng-template>
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [sortable]="true" [dataType]="'date'" [formatter]="formatDate">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [sortable]="true" [dataType]="'boolean'">
      <ng-template igxCell let-cell="cell" let-val>
        @if (val) {
          <img src="assets/images/grid/active.png" title="Continued" alt="Continued" />
        }
        @if (!val) {
          <img src="assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
        }
      </ng-template>
    </igx-column>
  </igx-grid>

</div>
```
```scss
.grid__wrapper {
    margin: 10px;
}
```<div class="divider--half"></div>## Custom Content> [!NOTE]> This replaces the old toolbar template directive. If you are migrating from a version before v11 our migrations will handle> the moving of the template content. However, we do not handle the bindings in the template, so make sure to double check the modified> template files after the migration completes.If the actions part of the toolbar component is not sufficient for a particular use case, the toolbar itself has a general content projection whereusers can provide additional UI. If the user needs the respective grid instance for API calls or bindings, they can create a template reference variable.Here is a sample snippet:```html<igx-grid #gridRef ...>

    ...
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>{{ titleBinding }}</igx-grid-toolbar-title>

        <!--
            Everything between the toolbar tags except the default toolbar components/directives
            will be projected as custom content.
         -->
        <button igxButton="flat" igxRipple (click)="#gridRef.clearSort()">
            <igx-icon fontSet="material">clear</igx-icon>
            Clear Sort
        </button>

        <igx-grid-toolbar-actions>
            ...
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar></igx-grid>```The following sample demonstrates how to add an additional button to the toolbar to clear the sorting set by clicking on the columns' headers:```typescript
import { Component } from '@angular/core';
import { athletesData } from '../../data/athletesData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-toolbar-sample-4',
    styleUrls: ['./grid-toolbar-sample-4.component.scss'],
    templateUrl: './grid-toolbar-sample-4.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent]
})
export class GridToolbarSample4Component {
    public data: any[];

    constructor() {
        this.data = athletesData;
    }

}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid1 id="grid1" [data]="data" [autoGenerate]="false" height="400px">
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Athletes</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <button igxButton="flat" igxRipple (click)="grid1.clearSort()">
                    <igx-icon family="material">clear</igx-icon>
                    <span>Clear Sort</span>
                </button>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
                <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column field="Name" header="Athlete" width="200" [sortable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner">
                    <igx-avatar [src]="cell.row.data.Avatar" shape="circle" size="small"></igx-avatar>
                    <span class="athlete_name">{{ cell.value }}</span>
                </div>
            </ng-template>
        </igx-column>

        <igx-column field="CountryName" header="Country" width="200" [sortable]="true">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner">
                    <igx-avatar [src]="cell.row.data.CountryFlag" shape="circle" size="small"></igx-avatar>
                    <span class="country_name">{{ cell.value }}</span>
                </div>
            </ng-template>
        </igx-column>

        <igx-column field="BeatsPerMinute" header="Beats Per Minute" [sortable]="true">
            <ng-template igxCell let-val>
                <div class="cell__inner">{{ val }}</div>
            </ng-template>
        </igx-column>

        <igx-column field="TopSpeed" header="Top Speed" [sortable]="true">
            <ng-template igxCell let-val>
                <div class="cell__inner">{{ val }}</div>
            </ng-template>

        </igx-column>

        <igx-column field="AthleteNumber" header="ID" [sortable]="true">
            <ng-template igxCell let-val>
                <div class="cell__inner">{{ val }}</div>
            </ng-template>
        </igx-column>

        <igx-column field="TrackProgress" header="Progress" [sortable]="true">
            <ng-template igxCell let-val>
                <div class="cell__inner">{{ val }}</div>
            </ng-template>
        </igx-column>



    </igx-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 15px;
}

.cell__inner {
    display: flex;
    align-items: center;
    height: 100%;
}

.cell__inner {
    position: relative;
    justify-content: space-between;
}

.athlete_name {
    margin-left: 30px;
}

.country_name {
    margin-left: 30px;
}
```<div class="divider"></div>## StylingTo get started with styling the toolbar, we need to import the index file, where all the theme functions and component mixins live:```scss@use "igniteui-angular/theming" as *;// IMPORTANT: Prior to Ignite UI for Angular version 13 use:// @import '~igniteui-angular/lib/core/styles/themes/index';```First, let's create a new palette.```scss$my-dark-palette: palette(
  $primary: #2466ff,
  $secondary: #ffcd0f,
  $surface: #2a2b2f,
  $grays: #fff,);$my-dark-color: color($my-dark-palette, 'surface');```Now, create a new theme that extends the [`grid-toolbar-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-toolbar-theme) and modify the `$background-color` and the `$title-text-color` parameters.```scss$dark-grid-toolbar-theme: grid-toolbar-theme(
  $background-color: $my-dark-color,
  $title-text-color: color($my-dark-palette, 'secondary'),
  $dropdown-background: $my-dark-color,);```To theme the column actions menus of the toolbar, we have to change the theme of the [`column-actions-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-igx-column-actionsr-theme) component.```scss$dark-column-actions-theme: column-actions-theme(
  $title-color: color($my-dark-palette, 'secondary'),
  $background-color: color($my-dark-palette, 'surface'));```Since the column actions are using other components - `igx-button` and `igx-checkbox` we need to change their themes to match our new toolbar theme.```scss$dark-button-theme: outlined-button-theme(
  $background: color($my-dark-palette, 'secondary'),
  $hover-background: color($my-dark-palette, 'grays', 100),
  $hover-foreground: color($my-dark-palette, 'secondary'));$dark-checkbox-theme: checkbox-theme(
  $tick-color: $my-dark-color,);```The last step is to **include** the newly created themes.```scss:host {
    @include tokens($dark-grid-toolbar-theme);
    @include tokens($dark-column-actions-theme);
    @include tokens($dark-checkbox-theme);
    @include tokens($dark-button-theme);}```>[!NOTE]>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep` to style the components inside the grid toolbar component:```scss@include tokens($dark-grid-toolbar-theme);:host {
  ::ng-deep {
    @include tokens($dark-column-actions-theme);
    @include tokens($dark-checkbox-theme);
    @include tokens($dark-button-theme);
  }}```### Demo```typescript
import { Component } from '@angular/core';
import { athletesData } from '../../data/athletesData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-toolbar-style',
    styleUrls: ['./grid-toolbar-style.component.scss'],
    templateUrl: './grid-toolbar-style.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent]
})
export class GridToolbarStyleComponent {

    public data: any[];

    constructor() {
        this.data = athletesData;
    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid1 id="grid1" [data]="data" [autoGenerate]="false" height="400px">

        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Grid Toolbar</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
                <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>


        <igx-column field="Name" header="Athlete" width="200">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner">
                    <igx-avatar [src]="cell.row.data.Avatar" shape="circle" size="small"></igx-avatar>
                    <span class="athlete_name">{{ cell.value }}</span>
                </div>
            </ng-template>
        </igx-column>

        <igx-column field="CountryName" header="Country" width="200">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner">
                    <igx-avatar [src]="cell.row.data.CountryFlag" shape="circle" size="small"></igx-avatar>
                    <span class="country_name">{{ cell.value }}</span>
                </div>
            </ng-template>
        </igx-column>

        <igx-column field="BeatsPerMinute" header="Beats Per Minute" >
            <ng-template igxCell let-val>
                <div class="cell__inner">{{ val }}</div>
            </ng-template>
        </igx-column>

        <igx-column field="TopSpeed" header="Top Speed">
            <ng-template igxCell let-val>
                <div class="cell__inner">{{ val }}</div>
            </ng-template>

        </igx-column>

        <igx-column field="AthleteNumber" header="ID">
            <ng-template igxCell let-val>
                <div class="cell__inner">{{ val }}</div>
            </ng-template>
        </igx-column>

        <igx-column field="TrackProgress" header="Progress">
            <ng-template igxCell let-val>
                <div class="cell__inner">{{ val }}</div>
            </ng-template>
        </igx-column>
    </igx-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$my-dark-palette: palette(
  $primary: #2466ff,
  $secondary: #ffcd0f,
  $surface: #2a2b2f,
  $gray: #fff,
);

$my-dark-color: color($my-dark-palette, 'surface');

$dark-button-theme: flat-button-theme(
  $hover-foreground: color($my-dark-palette, 'secondary')
);

$dark-grid-toolbar-theme: grid-toolbar-theme(
  $background-color: $my-dark-color,
  $title-text-color: color($my-dark-palette, 'secondary'),
  $dropdown-background: $my-dark-color,
);

$dark-column-actions-theme: column-actions-theme(
  $title-color: color($my-dark-palette, 'secondary'),
  $background-color: color($my-dark-palette, 'surface')
);

$dark-checkbox-theme: checkbox-theme(
  $tick-color: $my-dark-color,
);

igx-grid {
  @include palette($my-dark-palette);
  @include tokens($dark-grid-toolbar-theme);
  @include tokens($dark-column-actions-theme);
  @include tokens($dark-checkbox-theme);
  @include tokens($dark-button-theme);
}

:host {
  ::ng-deep {
    .igx-grid-toolbar__actions {
      .igx-button--outlined {
        margin-left: 0.5rem;
        border: none;
      }
    }
  }
}
```<div class="divider"></div>## API ReferencesThe Grid Toolbar service has a few more APIs to explore, which are listed below.- [`IgxGridToolbarActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaractionscomponent.html)- [`IgxGridToolbarAdvancedFilteringComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaradvancedfilteringcomponent.html)- [`IgxGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarcomponent.html)- [`IgxGridToolbarExporterComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarexportercomponent.html)- [`IgxGridToolbarHidingComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarhidingcomponent.html)- [`IgxGridToolbarPinningComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarpinningcomponent.html)- [`IgxGridToolbarTitleComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbartitlecomponent.html)[`IgxGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) events:- [`toolbarExporting`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#toolbarExporting)Styles:- [`IgxGridComponent Styles`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)## Additional Resources<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

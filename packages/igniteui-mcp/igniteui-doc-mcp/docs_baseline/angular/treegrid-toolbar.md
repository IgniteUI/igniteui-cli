---
title: Angular Grid Toolbar - Ignite UI for Angular
_description: Use Angular Tree Grid Toolbar for essential UI operations. Hosts different UI controls for the Grid’s features - column hiding, pinning, excel exporting, etc.
_keywords: angular toolbar, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/toolbar
_tocName: Toolbar
_premium: true
---
# Angular Tree Grid Toolbar
The Tree Grid in Ignite UI for Angular provides an [`IgxGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarcomponent.html) which is essentially a container for **UI** operations. The Angular toolbar is located at the top of the Angular component, i.e the Tree Grid and it matches its horizontal size. The toolbar container can host predefined UI controls for the following Tree Grid's features:
- Column Hiding
- Column Pinning
- Exporting to Excel, CSV and PDF
- Advanced Filtering
or just any other custom content. The toolbar and the predefined UI components support Angular events and expose API for developers.
## Angular Toolbar Grid Example
```typescript
import { Component } from '@angular/core';
import { EMPLOYEE_FLAT_AVATARS_DATA } from '../data/employees-flat-avatars';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-toolbar-sample-4',
    styleUrls: ['./tree-grid-toolbar-sample-4.component.scss'],
    templateUrl: './tree-grid-toolbar-sample-4.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent]
})
export class TreeGridToolbarSample4Component {

    public data: any[];

    constructor() {
        this.data = EMPLOYEE_FLAT_AVATARS_DATA();
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true"  #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" height="400px">
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Tree Grid Toolbar</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-advanced-filtering></igx-grid-toolbar-advanced-filtering>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
                <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column field="Name" width="25%">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner">
                    <igx-avatar [src]="cell.row.data.Avatar" shape="circle" size="small"></igx-avatar>
                    <span class="name">{{ cell.value }}</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Title" dataType="string" width="25%"></igx-column>
        <igx-column field="ID" dataType="number" width="15%"></igx-column>
        <igx-column field="Age" dataType="number" width="15%"></igx-column>
        <igx-column field="HireDate" dataType="date" width="20%"></igx-column>
    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cell__inner {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    justify-content: space-between;
}

.name {
    margin-left: 30px;
}
```
The predefined `actions` and `title` UI components are added inside the `<igx-grid-toolbar>` and this is all needed to have a toolbar providing default interactions with the corresponding Grid features:
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Tree Grid Toolbar</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-advanced-filtering><igx-grid-toolbar-advanced-filtering>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-tree-grid>
```
> Note: As seen in the code snippet above, the predefined `actions` UI components are wrapped in the [`<igx-grid-toolbar-actions>` container](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaractionscomponent.html). This way, the toolbar title is aligned to the left of the toolbar and the actions are aligned to the right of the toolbar.
Of course, each of these UIs can be added independently of each other, or may not be added at all. This way the toolbar container will be rendered empty:
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true">
    <igx-grid-toolbar>
    </igx-grid-toolbar>
</igx-tree-grid>
```
For a comprehensive look over each of the default UI components, continue reading the **Features** section
below.
## Features
The toolbar is great at separating logic/interactions which affects the grid as a whole.
As shown above, it can be configured to provide default components for controlling, column hiding, column pinning,
advanced filtering and exporting data from the grid.
These features can be enabled independently from each other by following a pattern similar to the card component of
the Ignite UI for Angular suite.
Listed below are the main features of the toolbar with example code for each of them.
```typescript
import { Component } from '@angular/core';
import { EMPLOYEE_FLAT_AVATARS_DATA } from '../data/employees-flat-avatars';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-toolbar-sample-1',
    styleUrls: ['./tree-grid-toolbar-sample-1.component.scss'],
    templateUrl: './tree-grid-toolbar-sample-1.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxSwitchComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent]
})
export class TreeGridToolbarSample1Component {

    data: any[];
    toolbarTitle = 'Tree grid toolbar';
    enableHiding = true;
    enablePinning = true;
    enableExport = true;
    enableFiltering = true;

    constructor() {
        this.data = EMPLOYEE_FLAT_AVATARS_DATA();
    }
}
```
```html
<div class="grid__wrapper">
  <div class="control_panel">
    <igx-input-group>
      <label for="toolbarTitle" igxLabel>Toolbar title</label>
      <input name="toolbarTitle" type="text" igxInput [(ngModel)]="toolbarTitle" />
    </igx-input-group>
    <div>
      <igx-switch [(ngModel)]="enableFiltering">Advanced Filtering</igx-switch>
      <igx-switch [(ngModel)]="enableHiding">Column hiding</igx-switch>
      <igx-switch [(ngModel)]="enablePinning">Column pinning</igx-switch>
      <igx-switch [(ngModel)]="enableExport">Exporting</igx-switch>
    </div>
  </div>
  <igx-tree-grid [igxPreventDocumentScroll]="true" #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" height="310px">
    <igx-grid-toolbar>
      <igx-grid-toolbar-title>{{ toolbarTitle }}</igx-grid-toolbar-title>
      <igx-grid-toolbar-actions>
        @if (enableFiltering) {
          <igx-grid-toolbar-advanced-filtering></igx-grid-toolbar-advanced-filtering>
        }
        @if (enableHiding) {
          <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
        }
        @if (enablePinning) {
          <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
        }
        @if (enableExport) {
          <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
        }
      </igx-grid-toolbar-actions>
    </igx-grid-toolbar>

    <igx-column field="Name" width="25%">
      <ng-template igxCell let-cell="cell">
        <div class="cell__inner">
          <igx-avatar [src]="cell.row.data.Avatar" shape="circle" size="small"></igx-avatar>
          <span class="name">{{ cell.value }}</span>
        </div>
      </ng-template>
    </igx-column>
    <igx-column field="Title" dataType="string"></igx-column>
    <igx-column field="ID" dataType="number"></igx-column>
    <igx-column field="Age" dataType="number"></igx-column>
    <igx-column field="HireDate" dataType="date"></igx-column>
  </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 10px;
}

.control_panel {
    width: 700px;
    margin-bottom: 10px;
}

.cell__inner {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    justify-content: space-between;
}

.name {
    margin-left: 30px;
}
```
### Title
Setting a title for the toolbar in your grid is achieved by using the [IgxGridToolbarTitleComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbartitlecomponent.html).
Users can provide anything from simple text to more involved templates.
```html
<igx-grid-toolbar>
    <igx-grid-toolbar-title>Grid toolbar title</igx-grid-toolbar-title>
</igx-grid-toolbar>
```
### Actions
The toolbar exposes a [specific container](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaractionscomponent.html) where users can place actions/interactions in relation to the parent grid.
As with the title portion of the toolbar, users can provide anything inside that template part, including the default
toolbar interaction components.
```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <button igxButton>Action</button>
        <igx-select></igx-select>
        ...
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```
Each action now exposes a way to change the overlay settings of the actions dialog by using the [`overlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarhidingcomponent.html#overlaySettings) input, example:
```html
<igx-grid-toolbar-actions>
    <igx-grid-toolbar-pinning [overlaySettings]="overlaySettingsScaleCenter"></igx-grid-toolbar-pinning>
    <igx-grid-toolbar-hiding [overlaySettings]="overlaySettingsAuto"></igx-grid-toolbar-hiding>
</igx-grid-toolbar-actions>
```
```ts
public data: any[];
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
```
The default overlaySettings are using _ConnectedPositionStrategy_ with _Absolute_ scroll strategy, _modal_ set to false, with enabled _close on escape_ and _close on outside click_ interactions.
### Column pinning
[Toolbar Pinning component](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarpinningcomponent.html) provides the default UI for interacting with column pinning in the grid.
The component is setup to work out of the box with the parent grid containing the toolbar as well as several input properties for customizing the UI, such as the component
title, the placeholder for the component input and the height of the dropdown itself.
```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-pinning
            title="Grid pinned columns"
            prompt="Filter column collection"
            columnListHeight="400px"
        >
        </igx-grid-toolbar-pinning>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```
### Column hiding
[Toolbar Hiding component](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarhidingcomponent.html) provides the default
UI for interacting with column hiding. Exposes the same input properties for customizing the UI, such as the component
title, the placeholder for the component input and the height of the dropdown itself.
```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-hiding
            title="Grid column hiding"
            prompt="Filter column collection"
            columnListHeight="400px"
        >
        </igx-grid-toolbar-hiding>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```
### Advanced filtering
[Toolbar Advanced Filtering component](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaradvancedfilteringcomponent.html) provides the default UI for the Advanced Filtering feature. The component exposes a way to change the default text of the button.
```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-advanced-filtering>Custom text for the toggle button</igx-grid-toolbar-advanced-filtering>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```
### Data exporting
As with the rest of the toolbar actions, exporting is provided through a [Toolbar Exporter component](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarexportercomponent.html) out of the box.
The exporting component is using the respective service for the target data format ([Excel](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexcelexporterservice.html), [CSV](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcsvexporterservice.html), [PDF](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxpdfexporterservice.html)). That means if the respective service is not provided through the dependency injection chain, the component
won't be able to export anything.
If you need a refresher on the DI in Angular, check the [official guide](https://angular.io/guide/dependency-injection). Here is a sample snippet showing how to enable
all export services for your application.
```typescript
// app.module.ts
import { IgxExcelExporterService, IgxCsvExporterService, IgxPdfExporterService } from 'igniteui-angular/grids/core';
// import { IgxExcelExporterService, IgxCsvExporterService, IgxPdfExporterService } from '@infragistics/igniteui-angular/grids/core'; for licensed package
@NgModule({
    ...
    providers: [IgxExcelExporterService, IgxCsvExporterService, IgxPdfExporterService ]
})
export class AppModule { ... }
```
> [!Note]
> In v12.2.1 and later, the exporter services are provided in root, which means you no longer need to declare them in the AppModule providers.
The toolbar exporter component exposes several input properties for customizing both the UI and the exporting experience.
These range from changing the display text, to enabling/disabling options in the dropdown to customizing the name of the
generated file. For full reference, consult the [API documentation](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarexportercomponent.html) for the toolbar exporter component.
Here is a snippet showing some of the options which can be customized through the Angular template:
```html
<igx-grid-toolbar>
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
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```
In addition to changing the exported filename, the user can further configure the exporter options by waiting for the [toolbarExporting](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#toolbarExporting) event and customizing the options entry in the event properties.
> [!NOTE]
> By default when exporting to CSV the exporter exports using a comma separator and uses a '.csv' extension for the output file.
> You can customize these exporting parameters by subscribing to events of the exporter or changing the values of the exporter options fields.
> You can also cancel the export process by setting the cancel field of the event args to true.
The following code snippet demonstrates subscribing to the toolbar exporting event and configuring the exporter options:
```html
<igx-tree-grid (toolbarExporting)="configureExport($event)" ></igx-tree-grid>
```
```typescript
configureExport(args: IGridToolbarExportEventArgs) {
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
    });
}
```
The following sample demonstrates how to customize the exported files:
```typescript
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
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { EMPLOYEE_FLAT_AVATARS_DATA } from '../data/employees-flat-avatars';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-toolbar-sample-2',
    styleUrls: ['./tree-grid-toolbar-sample-2.component.scss'],
    templateUrl: './tree-grid-toolbar-sample-2.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent]
})
export class TreeGridToolbarSample2Component {

    public data: any[];

    constructor() {
        this.data = EMPLOYEE_FLAT_AVATARS_DATA();
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
            // Don't export image field
            columnArgs.cancel = columnArgs.header === 'Name';
        });
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true" #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
        [autoGenerate]="false" height="400px" (toolbarExporting)="configureExport($event)">
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Grid toolbar</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column field="Name" header="Name" width="25%">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner">
                    <igx-avatar [src]="cell.row.data.Avatar" shape="circle" size="small"></igx-avatar>
                    <span class="name">{{ cell.value }}</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Title" dataType="string" width="25%"></igx-column>
        <igx-column field="ID" dataType="number" width="15%"></igx-column>
        <igx-column field="Age" dataType="number" width="15%"></igx-column>
        <igx-column field="HireDate" dataType="date" width="20%"></igx-column>
    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cell__inner {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    justify-content: space-between;
}

.name {
    margin-left: 30px;
}
```
<div class="divider"></div>
## Exporting Indicator
When using the default toolbar exporter component, whenever an export operation takes place the toolbar will show a progress indicator while the operation is in progress.
Moreover, users can set the toolbar [showProgress](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarcomponent.html#showProgress) property and use for their own long running operations
or just as another way to signify an action taking place in the grid.
The sample below has significant amount of data. While the data is being exported, the progress bar is shown. Additionally, it has another button that simulates a long running operation in the grid:
```typescript
import { Component } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent } from 'igniteui-angular/grids/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-tree-grid-export-visualization',
    templateUrl: './tree-grid-export-visualization.component.html',
    styleUrls: ['./tree-grid-export-visualization.component.scss'],
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxButtonDirective, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, CurrencyPipe]
})
export class TreeGridExportVisualizationComponent {
    public localData = [];
    private data = ORDERS_DATA;

    constructor() {
        const offsetStep = Math.max(...this.data.map(item => item.ID)) + 1;

        for (let i = 0; i < 9000; i += 3) {
            const offset = (i / 3) * offsetStep;

            for (let c = 0; c < this.data.length; c++) {
                const item = this.data[c];
                this.localData.push({
                    ...item,
                    ID: item.ID + offset,
                    ParentID: item.ParentID === -1 ? -1 : item.ParentID + offset,
                    OrderDate: new Date(item.OrderDate)
                });
            }
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
    <igx-tree-grid [igxPreventDocumentScroll]="true" [data]="localData" [autoGenerate]="false" primaryKey="ID"
        foreignKey="ParentID" height="350px" width="100%">
        <igx-grid-toolbar #toolbar>
            <igx-grid-toolbar-actions>
                <button [disabled]="toolbar.showProgress" (click)="longRunning(toolbar)" igxButton>
                    Simulate long running operation
                </button>
                <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column field="ID" header="Order ID">
        </igx-column>
        <igx-column field="Name" header="Order Product">
        </igx-column>
        <igx-column field="Category" header="Category">
        </igx-column>
        <igx-column field="Units" header="Units" [dataType]="'number'">
        </igx-column>
        <igx-column field="UnitPrice" header="Unit Price" dataType="number">
            <ng-template igxCell let-cell="cell" let-val let-row>
                {{+val | currency}}
            </ng-template>
        </igx-column>
        <igx-column field="Price" header="Price" dataType="number">
            <ng-template igxCell let-cell="cell" let-val let-row>
                {{+val | currency}}
            </ng-template>
        </igx-column>
        <igx-column field="OrderDate" header="Order Date" [dataType]="'date'">
        </igx-column>
    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 10px;
}
```
<div class="divider--half"></div>
## Custom Content
> [!NOTE]
> This replaces the old toolbar template directive. If you are migrating from a version before v11 our migrations will handle
> the moving of the template content. However, we do not handle the bindings in the template, so make sure to double check the modified
> template files after the migration completes.
If the actions part of the toolbar component is not sufficient for a particular use case, the toolbar itself has a general content projection where
users can provide additional UI. If the user needs the respective grid instance for API calls or bindings, they can create a template reference variable.
Here is a sample snippet:
```html
<igx-tree-grid #gridRef ...>

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
    </igx-grid-toolbar>
</igx-tree-grid>
```
The following sample demonstrates how to add an additional button to the toolbar to clear the sorting set by clicking on the columns' headers:
```typescript
import { Component } from '@angular/core';
import { EMPLOYEE_FLAT_AVATARS_DATA } from '../data/employees-flat-avatars';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-toolbar-sample-3',
    styleUrls: ['./tree-grid-toolbar-sample-3.component.scss'],
    templateUrl: './tree-grid-toolbar-sample-3.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent]
})
export class TreeGridToolbarSample3Component {

    public data: any[];

    constructor() {
        this.data = EMPLOYEE_FLAT_AVATARS_DATA();
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true" #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
        [autoGenerate]="false" height="400px">
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Tree Grid Toolbar</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <button igxButton="flat" igxRipple (click)="treeGrid.clearSort()">
                    <igx-icon family="material">clear</igx-icon>
                    <span>Clear Sort</span>
                </button>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
                <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column field="Name" header="Name" width="25%">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner">
                    <igx-avatar [src]="cell.row.data.Avatar" shape="circle" size="small"></igx-avatar>
                    <span class="name">{{ cell.value }}</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Title" dataType="string" [sortable]="true" width="25%"></igx-column>
        <igx-column field="ID" dataType="number" [sortable]="true" width="15%"></igx-column>
        <igx-column field="Age" dataType="number" [sortable]="true" width="15%"></igx-column>
        <igx-column field="HireDate" dataType="date" [sortable]="true" width="20%"></igx-column>


    </igx-tree-grid>
</div>
```
```scss
.grid__wrapper {
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cell__inner {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    justify-content: space-between;
}

.name {
    margin-left: 30px;
}
```
<div class="divider"></div>
## Styling
To get started with styling the toolbar, we need to import the index file, where all the theme functions and component mixins live:
```scss
@use "igniteui-angular/theming" as *;
// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```
First, let's create a new palette.
```scss
$my-dark-palette: palette(
  $primary: #2466ff,
  $secondary: #ffcd0f,
  $surface: #2a2b2f,
  $grays: #fff,
);
$my-dark-color: color($my-dark-palette, 'surface');
```
Now, create a new theme that extends the [`grid-toolbar-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-toolbar-theme) and modify the `$background-color` and the `$title-text-color` parameters.
```scss
$dark-grid-toolbar-theme: grid-toolbar-theme(
  $background-color: $my-dark-color,
  $title-text-color: color($my-dark-palette, 'secondary'),
  $dropdown-background: $my-dark-color,
);
```
To theme the column actions menus of the toolbar, we have to change the theme of the [`column-actions-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-igx-column-actionsr-theme) component.
```scss
$dark-column-actions-theme: column-actions-theme(
  $title-color: color($my-dark-palette, 'secondary'),
  $background-color: color($my-dark-palette, 'surface')
);
```
Since the column actions are using other components - `igx-button` and `igx-checkbox` we need to change their themes to match our new toolbar theme.
```scss
$dark-button-theme: outlined-button-theme(
  $background: color($my-dark-palette, 'secondary'),
  $hover-background: color($my-dark-palette, 'grays', 100),
  $hover-foreground: color($my-dark-palette, 'secondary')
);
$dark-checkbox-theme: checkbox-theme(
  $tick-color: $my-dark-color,
);
```
The last step is to **include** the newly created themes.
```scss
:host {
    @include tokens($dark-grid-toolbar-theme);
    @include tokens($dark-column-actions-theme);
    @include tokens($dark-checkbox-theme);
    @include tokens($dark-button-theme);
}
```
>[!NOTE]
>If the component is using an [`Emulated`](../themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep` to style the components inside the grid toolbar component:
```scss
@include tokens($dark-grid-toolbar-theme);
:host {
  ::ng-deep {
    @include tokens($dark-column-actions-theme);
    @include tokens($dark-checkbox-theme);
    @include tokens($dark-button-theme);
  }
}
```
### Demo
```typescript
import { Component } from '@angular/core';
import { EMPLOYEE_FLAT_AVATARS_DATA } from '../data/employees-flat-avatars';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-toolbar-style',
    styleUrls: ['./tree-grid-toolbar-style.component.scss'],
    templateUrl: './tree-grid-toolbar-style.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent]
})
export class TreeGridToolbarStyleComponent {

    public data: any[];

    constructor() {
        this.data = EMPLOYEE_FLAT_AVATARS_DATA();
    }
}
```
```html
<div class="grid__wrapper">
    <igx-tree-grid [igxPreventDocumentScroll]="true" #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
        [autoGenerate]="false" height="400px">
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Tree Grid Toolbar</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
                <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column field="Name" width="250px">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner">
                    <igx-avatar [src]="cell.row.data.Avatar" shape="circle" size="small"></igx-avatar>
                    <span class="name">{{ cell.value }}</span>
                </div>
            </ng-template>
        </igx-column>
        <igx-column [field]="'Title'" dataType="string" width="200px"></igx-column>
        <igx-column [field]="'ID'" dataType="number" width="200px"></igx-column>
        <igx-column [field]="'Age'" dataType="number" width="200px"></igx-column>
        <igx-column [field]="'HireDate'" dataType="date" width="200px"></igx-column>
    </igx-tree-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$dark-button-theme: outlined-button-theme(
  $background: #ffcd0f,
  $foreground: #292826,
  $hover-background: #404040,
  $hover-foreground: #ffcd0f
);

$dark-grid-toolbar-theme: grid-toolbar-theme(
  $background-color: #292826,
  $title-text-color: #ffcd0f
);


:host {
  @include tokens($dark-grid-toolbar-theme);

  .igx-grid-toolbar__actions {
    @include tokens($dark-button-theme);

    .igx-button--outlined {
      margin-left: 0.5rem;
      border: none;
    }
  }
}
```
<div class="divider"></div>
## API References
The Grid Toolbar service has a few more APIs to explore, which are listed below.
- [`IgxGridToolbarActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaractionscomponent.html)
- [`IgxGridToolbarAdvancedFilteringComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbaradvancedfilteringcomponent.html)
- [`IgxGridToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarcomponent.html)
- [`IgxGridToolbarExporterComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarexportercomponent.html)
- [`IgxGridToolbarHidingComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarhidingcomponent.html)
- [`IgxGridToolbarPinningComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbarpinningcomponent.html)
- [`IgxGridToolbarTitleComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridtoolbartitlecomponent.html)
[`IgxTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) events:
- [`toolbarExporting`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#toolbarExporting)
Styles:
- [`IgxTreeGridComponent Styles`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-grid-theme)
## Additional Resources
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

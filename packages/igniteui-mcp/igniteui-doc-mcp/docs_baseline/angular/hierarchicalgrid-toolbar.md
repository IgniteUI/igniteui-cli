---
title: Angular Grid Toolbar - Ignite UI for Angular
description: Use Angular Hierarchical Grid Toolbar for essential UI operations. Hosts different UI controls for the Grid’s features - column hiding, pinning, excel exporting, etc.
keywords: angular toolbar, igniteui for angular, infragistics
license: commercial
_canonicalLink: grid/toolbar
llms:
  description: "The Hierarchical Grid in Ignite UI for Angular provides a GridToolbar which is essentially a container for UI operations."
_tocName: Toolbar
_premium: true
---
# Angular Hierarchical Grid Toolbar

The Hierarchical Grid in Ignite UI for Angular provides an [`IgxGridToolbar`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarComponent) which is essentially a container for **UI** operations. The Angular toolbar is located at the top of the Angular component, i.e the Hierarchical Grid and it matches its horizontal size. The toolbar container can host predefined UI controls for the following Hierarchical Grid's features:

- Column Hiding
- Column Pinning
- Exporting to Excel, CSV and PDF
- Advanced Filtering

or just any other custom content. The toolbar and the predefined UI components support Angular events and expose API for developers.

## Angular Toolbar Grid Example

```typescript
import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarComponent, IgxGridToolbarDirective, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-toolbar-title',
    styleUrls: ['./hierarchical-grid-toolbar-title.component.scss'],
    templateUrl: 'hierarchical-grid-toolbar-title.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxGridToolbarDirective]
})

export class HGridToolbarTitleSampleComponent {

    public data: any[];

    constructor() {
        this.data = SINGERS;
    }
}
```
```html
<div class="hgrid-wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  #hierarchicalGrid class="hgrid" [data]="data" height="480px" rowHeight="65px">
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Singers</igx-grid-toolbar-title>
        </igx-grid-toolbar>

        <igx-column field="Artist" width="150px"></igx-column>
        <igx-column field="Photo">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" width="200px"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" width="200px"></igx-column>

        <igx-row-island [height]="null" key="Albums" [autoGenerate]="false">
            <igx-grid-toolbar *igxGridToolbar="let childGrid">
                <igx-grid-toolbar-title>Albums</igx-grid-toolbar-title>
            </igx-grid-toolbar>

            <igx-column field="Album"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" dataType="date"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200"></igx-column>

        <igx-row-island [height]="null" key="Songs" [autoGenerate]="false">
            <igx-grid-toolbar *igxGridToolbar="let childGrid">
                <igx-grid-toolbar-title>Songs</igx-grid-toolbar-title>
            </igx-grid-toolbar>

                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date"></igx-column>
                <igx-column field="Genre"></igx-column>
        </igx-row-island>
    </igx-row-island>

    <igx-row-island [height]="null" key="Tours" [autoGenerate]="false">
        <igx-grid-toolbar *igxGridToolbar="let childGrid">
            <igx-grid-toolbar-title>Tours</igx-grid-toolbar-title>
        </igx-grid-toolbar>

        <igx-column field="Tour"></igx-column>
        <igx-column field="StartedOn" header="Started on"></igx-column>
        <igx-column field="Location"></igx-column>
        <igx-column field="Headliner"></igx-column>
    </igx-row-island>

    </igx-hierarchical-grid>
</div>
```
```scss
.hgrid-wrapper {
    padding: 16px;
}
.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}
```

The predefined `actions` and `title` UI components are added inside the `<igx-grid-toolbar>` and this is all needed to have a toolbar providing default interactions with the corresponding Grid features:

```html
<igx-hierarchical-grid [data]="data">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>Hierarchical Grid Toolbar</igx-grid-toolbar-title>
        <igx-grid-toolbar-actions>
            <igx-grid-toolbar-advanced-filtering></igx-grid-toolbar-advanced-filtering>
            <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            <igx-grid-toolbar-exporter></igx-grid-toolbar-exporter>
        </igx-grid-toolbar-actions>
    </igx-grid-toolbar>
</igx-hierarchical-grid>
```

**Note:** 
As seen in the code snippet above, the predefined `actions` UI components are wrapped in the [`` <igx-grid-toolbar-actions>` container ``](mcp:get_api_reference?platform=angular&component=IgxGridToolbarActionsComponent). This way, the toolbar title is aligned to the left of the toolbar and the actions are aligned to the right of the toolbar.

Of course, each of these UIs can be added independently of each other, or may not be added at all. This way the toolbar container will be rendered empty:

```html
<igx-hierarchical-grid [data]="data">
    <igx-grid-toolbar>
    </igx-grid-toolbar>
</igx-hierarchical-grid>
```

For a comprehensive look over each of the default UI components, continue reading the **Features** section
below.

## Toolbar with child grids

Due to certain limitations in how the child grids of an IgxHierarchicalGrid are implemented and how DI scope works, when defining a toolbar component inside the `igx-row-island` tags use the `igxGridToolbar` directive with the template shorthand. This allows child grids to create their own separate toolbar instances:

```html
<igx-hierarchical-grid>
    ...
    <igx-row-island>
        <igx-grid-toolbar *igxGridToolbar>
            <igx-grid-toolbar-title>Child toolbar</igx-grid-toolbar-title>
        </igx-grid-toolbar>
    </igx-row-island>
    ...
</igx-hierarchical-grid>
```

The toolbar template context implicitly exposes a reference to the respective grid instance, which you can use for any other binding/logic needs. See below for an example.

### With versions prior to 17.1.0

Versions prior to 17.1.0 also required to pass the provided grid instance as an input property to the toolbar itself. This will make sure you always have the correct grid instance in the scope of your template:

```html
<igx-hierarchical-grid>
    ...
    <igx-row-island>
        <!--
            You can name the binding from igxGridToolbar however you want. Just make sure to use
            it inside the template if you need to access the grid instance.
        -->
        <igx-grid-toolbar [grid]="gridRef" *igxGridToolbar="let gridRef">
            <igx-grid-toolbar-title>Child toolbar {{ gridRef.parentIsland.level }}</igx-grid-toolbar-title>
        </igx-grid-toolbar>
    </igx-row-island>
    ...
</igx-hierarchical-grid>
```

## Features

The toolbar is great at separating logic/interactions which affects the grid as a whole.
As shown above, it can be configured to provide default components for controlling, column hiding, column pinning,
advanced filtering and exporting data from the grid.
These features can be enabled independently from each other by following a pattern similar to the card component of
the Ignite UI for Angular suite.
Listed below are the main features of the toolbar with example code for each of them.

```typescript
import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-hierarchical-grid-toolbar-options',
    styleUrls: ['./hierarchical-grid-toolbar-options.component.scss'],
    templateUrl: 'hierarchical-grid-toolbar-options.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxSwitchComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})

export class HGridToolbarOptionsSampleComponent {
    public data: any[];
    toolbarTitle = 'Singers';
    enableHiding = true;
    enablePinning = true;
    enableExport = true;
    enableFiltering = true;

    constructor() {
        this.data = SINGERS;
    }
}
```
```html
<div class="hgrid__wrapper">
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
  <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  #hierarchicalGrid class="hgrid" [data]="data" height="390px" width="100%" rowHeight="65px">
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

    <igx-column field="Artist" width="150px"></igx-column>
    <igx-column field="Photo">
      <ng-template igxCell let-cell="cell">
        <div class="cell__inner_2">
          <img [src]="cell.value" class="photo" />
        </div>
      </ng-template>
    </igx-column>
    <igx-column field="Debut"></igx-column>
    <igx-column field="GrammyNominations" header="Grammy Nominations" width="200px"></igx-column>
    <igx-column field="GrammyAwards" header="Grammy Awards" width="200px"></igx-column>

    <igx-row-island [height]="null" key="Albums" [autoGenerate]="false">
      <igx-column field="Album"></igx-column>
      <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
      <igx-column field="BillboardReview" header="Billboard Review"></igx-column>
      <igx-column field="USBillboard200" header="US Billboard 200"></igx-column>
      <igx-row-island [height]="null" key="Songs" [autoGenerate]="false">
        <igx-column field="Number" header="No."></igx-column>
        <igx-column field="Title"></igx-column>
        <igx-column field="Released" dataType="date"></igx-column>
        <igx-column field="Genre"></igx-column>
      </igx-row-island>
    </igx-row-island>

    <igx-row-island [height]="null" key="Tours" [autoGenerate]="false">
      <igx-column field="Tour"></igx-column>
      <igx-column field="StartedOn" header="Started on"></igx-column>
      <igx-column field="Location"></igx-column>
      <igx-column field="Headliner"></igx-column>
    </igx-row-island>

  </igx-hierarchical-grid>
</div>
```
```scss
.hgrid__wrapper {
    margin: 16px;
}

.control_panel {
    width: 700px;
    margin-bottom: 10px;
}

.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}
```

### Title

Setting a title for the toolbar in your grid is achieved by using the [`IgxGridToolbarTitle`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarTitleComponent).
Users can provide anything from simple text to more involved templates.

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-title>Grid toolbar title</igx-grid-toolbar-title>
</igx-grid-toolbar>
```

### Actions

The toolbar exposes a [`specific container`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarActionsComponent) where users can place actions/interactions in relation to the parent grid.
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

Each action now exposes a way to change the overlay settings of the actions dialog by using the [`overlaySettings`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarHidingComponent&member=overlaySettings) input, example:

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

[`Toolbar Pinning component`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarPinningComponent) provides the default UI for interacting with column pinning in the grid.
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

[`Toolbar Hiding component`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarHidingComponent) provides the default
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

[`Toolbar Advanced Filtering component`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarAdvancedFilteringComponent) provides the default UI for the Advanced Filtering feature. The component exposes a way to change the default text of the button.

```html
<igx-grid-toolbar>
    <igx-grid-toolbar-actions>
        <igx-grid-toolbar-advanced-filtering>Custom text for the toggle button</igx-grid-toolbar-advanced-filtering>
    </igx-grid-toolbar-actions>
</igx-grid-toolbar>
```

### Data exporting

**Note:** 
When exporting the Hierarchical Grid or any of its child grids down the hierarchy, the exported data will be a flat collection of rows
belonging to their respective grid (the child grids will not be included in the exported data).

As with the rest of the toolbar actions, exporting is provided through a [`Toolbar Exporter component`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarExporterComponent) out of the box.
The exporting component is using the respective service for the target data format ([`Excel`](mcp:get_api_reference?platform=angular&component=IgxExcelExporterService), [`CSV`](mcp:get_api_reference?platform=angular&component=IgxCsvExporterService), [`PDF`](mcp:get_api_reference?platform=angular&component=IgxPdfExporterService)). That means if the respective service is not provided through the dependency injection chain, the component
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

**Note:** 
In v12.2.1 and later, the exporter services are provided in root, which means you no longer need to declare them in the AppModule providers.

The toolbar exporter component exposes several input properties for customizing both the UI and the exporting experience.
These range from changing the display text, to enabling/disabling options in the dropdown to customizing the name of the
generated file. For full reference, consult the [`API documentation`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarExporterComponent) for the toolbar exporter component.

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

The following sample demonstrates how to customize the exported files:

## Exporting Indicator

When using the default toolbar exporter component, whenever an export operation takes place the toolbar will show a progress indicator while the operation is in progress.
Moreover, users can set the toolbar [`showProgress`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarComponent&member=showProgress) property and use for their own long running operations
or just as another way to signify an action taking place in the grid.
The sample below has significant amount of data. While the data is being exported, the progress bar is shown. Additionally, it has another button that simulates a long running operation in the grid:

## Custom Content

**Note:** 
This replaces the old toolbar template directive. If you are migrating from a version before v11 our migrations will handle
the moving of the template content. However, we do not handle the bindings in the template, so make sure to double check the modified
template files after the migration completes.

If the actions part of the toolbar component is not sufficient for a particular use case, the toolbar itself has a general content projection where
users can provide additional UI. If the user needs the respective grid instance for API calls or bindings, they can create a template reference variable.

Here is a sample snippet:

```html
<igx-hierarchical-grid #gridRef ...>

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

</igx-hierarchical-grid>
```

The following sample demonstrates how to add an additional button to the toolbar to clear the sorting set by clicking on the columns' headers:

```typescript
import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarDirective, IgxGridToolbarHidingComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-toolbar-custom',
    styleUrls: ['./hierarchical-grid-toolbar-custom.component.scss'],
    templateUrl: 'hierarchical-grid-toolbar-custom.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxGridToolbarHidingComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxGridToolbarDirective]
})

export class HGridToolbarCustomSampleComponent {
    public data: any[];

    constructor() {
        this.data = SINGERS;
    }
}
```
```html
<div class="hgrid__wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true"  #hierarchicalGrid class="hgrid" [data]="data" height="480px" width="100%" rowHeight="65px">
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Singers</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <button igxButton="flat" igxRipple (click)="hierarchicalGrid.clearSort()">
                    <igx-icon family="material">clear</igx-icon>
                    <span>Clear Sort</span>
                </button>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column field="Artist" width="150px" [sortable]="true"></igx-column>
        <igx-column field="Photo">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut" [sortable]="true"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" width="200px" [sortable]="true"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" width="200px" [sortable]="true"></igx-column>



        <igx-row-island [height]="null" key="Albums" [autoGenerate]="false">
            <igx-grid-toolbar *igxGridToolbar="let childGrid">
                <igx-grid-toolbar-title>Albums</igx-grid-toolbar-title>
                <button igxButton="flat" igxRipple [igxRippleCentered]="true" (click)="childGrid.clearSort()">
                    <igx-icon family="material">clear</igx-icon>
                    <span>Clear Sort</span>
                </button>
                <igx-grid-toolbar-actions>
                    <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                </igx-grid-toolbar-actions>
            </igx-grid-toolbar>

            <igx-column field="Album" [sortable]="true"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" dataType="date" [sortable]="true"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review" [sortable]="true"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200" [sortable]="true"></igx-column>
            <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false">
                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date"></igx-column>
                <igx-column field="Genre"></igx-column>
            </igx-row-island>

    </igx-row-island>

    <igx-row-island [height]="null" key="Tours" [autoGenerate]="false">
        <igx-column field="Tour"></igx-column>
        <igx-column field="StartedOn" header="Started on"></igx-column>
        <igx-column field="Location"></igx-column>
        <igx-column field="Headliner"></igx-column>
    </igx-row-island>

    </igx-hierarchical-grid>
</div>
```
```scss
.hgrid__wrapper {
    margin: 16px;
}
.photo {
    vertical-align: middle;
    max-height: 62px;
}
.cell__inner_2 {
    margin: 1px
}
```

<igc-divider></igc-divider>

## Styling

To get started with styling the toolbar, we need to import the index file, where all the theme functions and the `tokens()` mixin are exported:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Next, create a new theme that extends the `grid-toolbar-theme`.

```scss
$accent: #ffcd0f;

$grid-toolbar-theme: grid-toolbar-theme(
  $background: #170237,
  $border-color: $accent,
  $title-text-color: #f6d8d8,
  $item-hover-background: rgb(246 216 216 / 0.3),
);
```

The last step is to **include** the newly created themes.

```scss
:host {
  igx-grid-toolbar {
    @include tokens($grid-toolbar-theme);
  }
}
```

**Note:** 
In some component templates, Emulated View Encapsulation can still prevent the generated token declarations from reaching nested Ignite UI elements. If the theme does not take effect, use `::ng-deep` as shown below or move the theme to a global stylesheet.


```scss
:host ::ng-deep {
  igx-grid-toolbar {
    @include tokens($grid-toolbar-theme);
  }
}
```

### Demo

```typescript
import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-toolbar-style',
    styleUrls: ['./hierarchical-grid-toolbar-style.component.scss'],
    templateUrl: './hierarchical-grid-toolbar-style.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})
export class HierarchicalGridToolbarStyleComponent {
    public data: any[];

    constructor() {
        this.data = SINGERS;
    }
}
```
```html
<div class="hgrid_wrapper">
    <igx-hierarchical-grid [igxPreventDocumentScroll]="true" #hierarchicalGrid class="hgrid" [data]="data" [height]="'500px'"
        [width]="'100%'" [rowHeight]="'65px'">
        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Singers</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column field="Artist" width="150px"></igx-column>
        <igx-column field="Photo">
            <ng-template igxCell let-cell="cell">
                <div class="cell__inner_2">
                    <img [src]="cell.value" class="photo" />
                </div>
            </ng-template>
        </igx-column>
        <igx-column field="Debut"></igx-column>
        <igx-column field="GrammyNominations" header="Grammy Nominations" width="200px"></igx-column>
        <igx-column field="GrammyAwards" header="Grammy Awards" width="200px"></igx-column>

        <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false">
            <igx-column field="Album"></igx-column>
            <igx-column field="LaunchDate" header="Launch Date" [dataType]="'date'"></igx-column>
            <igx-column field="BillboardReview" header="Billboard Review"></igx-column>
            <igx-column field="USBillboard200" header="US Billboard 200"></igx-column>
            <igx-row-island [height]="null" [key]="'Songs'" [autoGenerate]="false">
                <igx-column field="Number" header="No."></igx-column>
                <igx-column field="Title"></igx-column>
                <igx-column field="Released" dataType="date"></igx-column>
                <igx-column field="Genre"></igx-column>
            </igx-row-island>
        </igx-row-island>

        <igx-row-island [height]="null" [key]="'Tours'" [autoGenerate]="false">
            <igx-column field="Tour"></igx-column>
            <igx-column field="StartedOn" header="Started on"></igx-column>
            <igx-column field="Location"></igx-column>
            <igx-column field="Headliner"></igx-column>
        </igx-row-island>

    </igx-hierarchical-grid>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$background: #19171b;
$foreground: #eeece1;
$accent: #ffcd0f;

$grid-theme: grid-theme(
	$background: $background,
	$foreground: $foreground,
	$accent-color: $accent,
);

$grid-toolbar-theme: grid-toolbar-theme(
	$background: #170237,
	$border-color: $accent,
	$title-text-color: #f6d8d8,
	$item-hover-background: rgb(246 216 216 / 0.3),
);

:host ::ng-deep {
	igx-hierarchical-grid {
		@include tokens($grid-theme);
	}
	
	igx-grid-toolbar {
		@include tokens($grid-toolbar-theme);
	}
}
```

<igc-divider></igc-divider>

## API References
The Grid Toolbar service has a few more APIs to explore, which are listed below.
- [`IgxGridToolbarActions`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarActionsComponent)
- [`IgxGridToolbarAdvancedFiltering`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarAdvancedFilteringComponent)
- [`IgxGridToolbar`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarComponent)
- [`IgxGridToolbarExporter`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarExporterComponent)
- [`IgxGridToolbarHiding`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarHidingComponent)
- [`IgxGridToolbarPinning`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarPinningComponent)
- [`IgxGridToolbarTitle`](mcp:get_api_reference?platform=angular&component=IgxGridToolbarTitleComponent)
[`IgxHierarchicalGrid`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent) events:
- [`toolbarExporting`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent&member=toolbarExporting)
Styles:
- `IgxHierarchicalGridComponent Styles`
## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

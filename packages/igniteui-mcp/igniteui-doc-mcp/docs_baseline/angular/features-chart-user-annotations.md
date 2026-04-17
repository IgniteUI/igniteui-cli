---
title: Angular Chart User Annotations | Data Visualization | Infragistics
_description: Infragistics' Angular Chart User Annotations
_keywords: Angular Charts, User Annotations, Infragistics
mentionedTypes: ["DataChart", "UserAnnotationLayer", "UserStripAnnotation", "UserSliceAnnotation", "UserPointAnnotation", "Toolbar", "UserAnnotationInformation", "SeriesViewer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart User Annotations
_premium: true
---

# Angular Chart User Annotation Layer <label class="badge badge--preview">PREVIEW</label>

In Ignite UI for Angular, you can annotate the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) with slice, strip, and point annotations at runtime using the user annotations feature. This allows the end user to add more details to the plot such as calling out single important events such as company quarter reports by using the slice annotation or events that have a duration by using the strip annotation. You can also call out individual points on the plotted series by using the point annotation or any combination of these three.

This is directly integrated with the available tools of the [`IgxToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html). The following topic explains, with examples, how you can utilize the [`IgxToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) to add user annotations to the plot area of the chart, as well as how to do add these user annotations programmatically.

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { IgxToolbarModule } from 'igniteui-angular-layouts';
import { IgxColorEditorModule } from 'igniteui-angular-inputs';

import { 
  IgxAnnotationLayerProxyModule, 
  IgxDataChartToolbarModule, 
  IgxDataChartCoreModule, 
  IgxDataChartCategoryModule,
  IgxDataChartInteractivityModule,
  IgxDataChartAnnotationDynamicModule, 
  IgxDataChartCategoryTrendLineModule 
} from 'igniteui-angular-charts';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    IgxToolbarModule,
    IgxDataChartToolbarModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartAnnotationDynamicModule,
    IgxDataChartInteractivityModule,
    IgxAnnotationLayerProxyModule,
    IgxDataChartCategoryTrendLineModule,
    IgxColorEditorModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgxToolbarComponent } from 'igniteui-angular-layouts';
import { IgxColorEditorComponent } from 'igniteui-angular-inputs';

import { IgxDataChartComponent, IgxUserAnnotationInformation } from 'igniteui-angular-charts';

@Component({
    standalone: false,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements AfterViewInit
{
    @ViewChild("toolbar", { static: true } )
    private toolbar: IgxToolbarComponent
    @ViewChild("chart", { static: true } )
    private chart: IgxDataChartComponent

    @ViewChild("annotationBadgeColorEditor", { static: true } )
    private annotationBadgeColorEditor: IgxColorEditorComponent
    @ViewChild("annotationMainColorEditor", { static: true } )
    private annotationMainColorEditor: IgxColorEditorComponent

    private annotationInfo: IgxUserAnnotationInformation;

    public annotationLabel: string = "Enter Label";
    public annotationDetails: string = "Enter Details";

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

    public constructor(private _detector: ChangeDetectorRef)
    {
        this.onUserAnnotationInformationRequested = this.onUserAnnotationInformationRequested.bind(this);
        this.onUserAnnotationTooltipContentUpdating = this.onUserAnnotationTooltipContentUpdating.bind(this);
        this.onDoneBtnClick = this.onDoneBtnClick.bind(this);
        this.onInitializeToolbar = this.onInitializeToolbar.bind(this);
    }

    public ngAfterViewInit(): void
    {
        window.setTimeout(() => this.onInitializeToolbar(), 1000);
    }

    public onInitializeToolbar() {
        for (let toolbarMenu of this.toolbar.actualActions) {
            if (toolbarMenu.actionId === "AnnotationMenu") {
                toolbarMenu.openSubMenu();
            }
        }
    }

    public onUserAnnotationInformationRequested(e: any) {
        this.annotationInfo = e.args.annotationInfo;

        this.toggleDialogState(true);
    }

    public onUserAnnotationTooltipContentUpdating(e: any) {
        var details = e.args.annotationInfo.annotationData;

        if (e.args.content.children.length == 0) {
            var element = document.createElement("div");
            element.textContent = details;
            element.style = "color: white";
            e.args.content.appendChild(element);
        }
        else {
            var element: HTMLDivElement = e.args.content.children[0];
            element.textContent = details;
        }
    }

    public onDoneBtnClick() {

        this.annotationInfo.label = this.annotationLabel;
        this.annotationInfo.annotationData = this.annotationDetails;
        this.annotationInfo.mainColor = this.annotationMainColorEditor.value;
        this.annotationInfo.badgeColor = this.annotationBadgeColorEditor.value;
 
        this.chart.finishAnnotationFlow(this.annotationInfo);

        this.toggleDialogState(false);
    }

    public onCancelBtnClick() {
        this.chart.cancelAnnotationFlow(this.annotationInfo.annotationId);

        this.toggleDialogState(false);
    }

    public toggleDialogState(open: boolean) {
        var popup = document.getElementById('annotationPopup') as HTMLDivElement;

        if (open) {
            popup.style.display = "flex";
        }
        else {
            popup.style.display = "none";
        }
    }

}
```
```html
<div class="container vertical sample">
  <div style="display: flex; flex-direction: row">
    <div style="margin-left: 1.25rem;">
      <igx-toolbar
      name="toolbar"
      #toolbar
      [target]="chart"
      orientation="Horizontal">
      </igx-toolbar>
    </div>
  </div>
  <div class="container fill">
    <igx-data-chart 
    isHorizontalZoomEnabled="true" 
    isVerticalZoomEnabled="true" 
    computedPlotAreaMarginMode="Series"
      name="chart" #chart isUserAnnotationsEnabled="true" 
      (userAnnotationInformationRequested)="onUserAnnotationInformationRequested($event)"
      (userAnnotationToolTipContentUpdating)="onUserAnnotationTooltipContentUpdating($event)">
      <igx-category-x-axis name="xAxis" #xAxis [dataSource]="countryRenewableElectricity" label="year">
      </igx-category-x-axis>
      <igx-numeric-y-axis name="yAxis" #yAxis title="TWh" >
      </igx-numeric-y-axis>

      <igx-line-series name="lineSeries1" #lineSeries1 title="Electricity" [xAxis]="xAxis" [yAxis]="yAxis"
        [dataSource]="countryRenewableElectricity" valueMemberPath="america">
      </igx-line-series>
      <igx-line-series name="LineSeries2" #lineSeries2 title="Electricity" [xAxis]="xAxis" [yAxis]="yAxis"
        [dataSource]="countryRenewableElectricity" valueMemberPath="europe">
      </igx-line-series>
      <igx-line-series name="LineSeries3" #lineSeries3 title="Electricity" [xAxis]="xAxis" [yAxis]="yAxis"
        [dataSource]="countryRenewableElectricity" valueMemberPath="china">
      </igx-line-series>
    </igx-data-chart>
  
    <div class="container vertical options" id="annotationPopup"
    style="position: fixed; display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 13rem;
    height: 21rem;
    background-color: white;
    border: 1px black solid;
    border-radius: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    box-shadow: 0.05rem 0.05rem 0.5rem 0.05rem gray;">

      <label>Label:</label>
      <input #annotationInput name="annotationInput" display-type="text" style="width: calc(100% - 0.4rem);"
      [(ngModel)]="annotationLabel">

      <label>Details:</label>
      <textarea #annotationTextArea name="annotationTextArea" style="width: calc(100% - 0.25rem); height: 4rem; resize: none;"
      [(ngModel)]="annotationDetails">
      </textarea>
    
      <label>Badge Color:</label>
      <igx-color-editor #annotationBadgeColorEditor name="annotationBadgeColorEditor" value="black"></igx-color-editor>
    
      <label>Main Color:</label>
      <igx-color-editor #annotationMainColorEditor name="annotationMainColorEditor" value="black"></igx-color-editor>

      <div class="container horizontal" style="height: auto; justify-content: center; align-items: center; padding: 1rem; gap: 1rem;">
        <button (click)="onDoneBtnClick()" id="doneButton">Done</button>
        <button (click)="onCancelBtnClick()" id="cancelButton">Cancel</button>
      </div>
    </div>
  </div>
</div>
```
```scss
/* styles are loaded the Shared CSS file located at:
https://dl.infragistics.com/x/css/samples/shared.v8.css
*/
.aboveContentSplit {
    display: flex;
    flex-direction: row;
}
.aboveContentLeftContainer {
    margin-left: 1.25rem;
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    align-items: flex-end;
}
.aboveContentRightContainer {
    margin-right: 1.25rem;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: flex-end;
}
```

> [!Note]
> This feature is designed to support X and Y axes and does not currently support radial or angular axes.

## Using the User Annotations with the Toolbar

The [`IgxToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) exposes an Annotations menu item with two tools with the labels of "Annotate Chart" and "Delete Note." In order for this menu item to appear, you first need to set the [`isUserAnnotationsEnabled`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#isUserAnnotationsEnabled) property on the corresponding chart to `true`.

The "Annotate Chart" option that appears after opening allows you to annotate the plot area of the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html). This can be done by adding slice, strip, or point annotations. You can add a slice annotation by clicking on a label on the X or Y axis. You can add a strip annotation by clicking and dragging in the plot area. Also, you can add a point annotation by clicking on a point in a series plotted in the chart.

<img class="responsive-img" src="../../../images/charts/data-chart-user-annotation-create.gif"
alt="Angular user-annotation-create"/>

You can delete the annotations that you have previously added by selecting the "Delete Note" menu item and then clicking on the axis annotation for the slice or strip user annotations, or by clicking the corresponding data point for the point user annotation.

<img class="responsive-img" src="../../../images/charts/data-chart-user-annotation-delete.gif"
alt="Angular user-annotation-delete"/>

When adding one of these user annotations via the `XamToolbar`, the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) will raise an event named `UserAnnotationInformationRequested` where you can provide more information for the user annotations. This event's arguments have a property named `AnnotationInfo` that will return a [`IgxUserAnnotationInformation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html) object that allows the configuration of multiple different aspects of the annotation to be added.

The table below details the different configurable properties on [`IgxUserAnnotationInformation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html):

| Property                                                                                                                                                                                                  | Type     | Description                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`annotationData`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#annotationData)                     | `string` | This property allows additional information for the user annotation. This property is designed to be utilized with the `UserAnnotationToolTipContentUpdating` event to show additional information in the annotation's tooltip. |
| [`annotationId`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#annotationId)                         | `string` | This read-only property returns the unique string ID of the user annotation.                                                                                                                                                    |
| [`badgeColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#badgeColor)                             | `string` | This property gets or sets the color to use for the badge in the user annotation.                                                                                                                                               |
| [`badgeImageUri`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#badgeImageUri)                       | `string` | This property gets or sets a path to an image to use for the badge in the user annotation.                                                                                                                                      |
| [`dialogSuggestedXLocation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#dialogSuggestedXLocation) | `double` | This property gets a recommended X location to show a dialog based on the location that the user annotation was added.                                                                                                          |
| [`dialogSuggestedYLocation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#dialogSuggestedYLocation) | `double` | This property gets a recommended Y location to show a dialog based on the location that the user annotation was added.                                                                                                          |
| [`label`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#label)                                       | `string` | This property gets or sets the label to be shown in the user annotation.                                                                                                                                                        |
| [`mainColor`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#mainColor)                               | `string` | This property gets or sets the color to be used to fill the background of the user annotation.                                                                                                                                  |

After you have made the changes to the annotation through the `UserAnnotationInformationRequested` event, you should invoke the [`finishAnnotationFlow`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html#finishAnnotationFlow) method on the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) to finish creating the annotation and commit the changes to it. Alternatively, you can also cancel the annotation's creation by calling [`cancelAnnotationFlow`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html#cancelAnnotationFlow) and passing the [`annotationId`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#annotationId) of the annotation, which can be obtained from the `AnnotationInfo` parameter of the `UserAnnotationInformationRequested` event's arguments, as mentioned above. This will remove the annotation from the plot area.

## Using the User Annotations Programmatically

When using the [`IgxUserAnnotationLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html) programmatically, you can invoke two different methods on the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) to put the chart into a mode where you can add or remove a user annotation. These methods are named [`startCreatingAnnotation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#startCreatingAnnotation) and [`startDeletingAnnotation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#startDeletingAnnotation), respectively.

After invoking [`startCreatingAnnotation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#startCreatingAnnotation), you can add a slice annotation by clicking on a label on the X or Y axis, add a strip annotation by clicking and dragging in the plot area and releasing the mouse button, or add a point annotation by clicking on a data point on a series plotted in the chart.

Adding one of these user annotations will raise an event named `UserAnnotationInformationRequested`, where you can provide more information for the user annotation. This event's arguments have a property named `AnnotationInfo` that will return a [`IgxUserAnnotationInformation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html) object that allows the configuration of multiple different aspects of the annotation to be added.

After you have made the changes to the annotation through the `UserAnnotationInformationRequested` event, you should invoke the [`finishAnnotationFlow`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html#finishAnnotationFlow) method on the [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) to finish creating the annotation and commit the changes to it. Alternatively, you can also cancel the annotation's creation by calling [`cancelAnnotationFlow`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html#cancelAnnotationFlow) and passing the [`annotationId`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html#annotationId) of the annotation, which can be obtained from the `AnnotationInfo` parameter of the `UserAnnotationInformationRequested` event's arguments, as mentioned above. This will remove the annotation from the plot area.

Once the user annotation has been added to the chart, it will appear in the [`IgxSeriesComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html) collection as a [`IgxUserAnnotationLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html). The [`IgxUserAnnotationLayerComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html) has an [`annotations`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationlayercomponent.html#annotations) collection that can store [`IgxUserSliceAnnotation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxusersliceannotation.html), [`IgxUserStripAnnotation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserstripannotation.html) and [`IgxUserPointAnnotation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserpointannotation.html) elements depending on the type of annotations added to the plot area.

## User Annotation ToolTip

Each of the user annotations can show a tooltip on mouse hover to add even more detail to the annotations.

The chart exposes a `UserAnnotationToolTipContentUpdating` event that you can handle to update the content of the tooltip for the user annotation as the tooltip is shown. The event arguments of this event exposes two properties: `Content` and `AnnotationInfo`.

The tooltip is designed to work in tandem with the `UserAnnotationInformationRequested` event so that you can provide more detail to the user annotation via that event's [`annotationData`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserbaseannotation.html#annotationData) property. The `AnnotationInfo` property on the event arguments of the `UserAnnotationToolTipContentUpdating` event will be the same instance as the `AnnotationInfo` property in the `UserAnnotationInformationRequested` that you can modify in that event. This allows you to utilize the information provided to the user annotation on its creation and provide even more information within the tooltip.

## API References

The following is a list of API members mentioned in the above sections:

- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).[`isUserAnnotationsEnabled`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#isUserAnnotationsEnabled)
- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).`SeriesViewer.UserAnnotationInformationRequested`
- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).`SeriesViewer.userAnnotationToolTipContentUpdating`
- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).[`cancelAnnotationFlow`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#cancelAnnotationFlow)
- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).[`startCreatingAnnotation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#startCreatingAnnotation)
- [`IgxDataChartComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html).[`startDeletingAnnotation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#startDeletingAnnotation)
- [`IgxUserAnnotationInformation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserannotationinformation.html)
- [`IgxUserSliceAnnotation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxusersliceannotation.html)
- [`IgxUserStripAnnotation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserstripannotation.html)
- [`IgxUserPointAnnotation`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxuserpointannotation.html)
- [`IgxToolbarComponent`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html)

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Data Annotations](chart-data-annotations.md)

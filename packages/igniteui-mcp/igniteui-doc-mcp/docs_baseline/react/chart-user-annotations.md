---
title: React Chart User Annotations | Data Visualization | Infragistics
_description: Infragistics' React Chart User Annotations
_keywords: React Charts, User Annotations, Infragistics
mentionedTypes: ["DataChart", "UserAnnotationLayer", "UserStripAnnotation", "UserSliceAnnotation", "UserPointAnnotation", "Toolbar", "UserAnnotationInformation", "SeriesViewer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart User Annotations
_premium: true
---

# React Chart User Annotation Layer <label class="badge badge--preview">PREVIEW</label>

In Ignite UI for React, you can annotate the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) with slice, strip, and point annotations at runtime using the user annotations feature. This allows the end user to add more details to the plot such as calling out single important events such as company quarter reports by using the slice annotation or events that have a duration by using the strip annotation. You can also call out individual points on the plotted series by using the point annotation or any combination of these three.

This is directly integrated with the available tools of the [`IgrToolbar`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolbar.html). The following topic explains, with examples, how you can utilize the [`IgrToolbar`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolbar.html) to add user annotations to the plot area of the chart, as well as how to do add these user annotations programmatically.

```typescript
export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor(items: Array<CountryRenewableElectricityItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityItem({ year: `2009`, europe: 34, china: 21, america: 19 }),
                new CountryRenewableElectricityItem({ year: `2010`, europe: 43, china: 26, america: 24 }),
                new CountryRenewableElectricityItem({ year: `2011`, europe: 66, china: 29, america: 28 }),
                // ... 9 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
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

.annotationPopup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    height: 350px;
    background-color: white;
    border: 1px black solid;
    display: none;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrToolbarModule } from 'igniteui-react-layouts';
import { IgrDataChartToolbarModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrAnnotationLayerProxyModule, IgrDataChartCategoryTrendLineModule } from 'igniteui-react-charts';
import { IgrToolbar } from 'igniteui-react-layouts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrLineSeries, IgrSeriesViewer,
         IIgrSeriesViewerProps, IgrUserAnnotationToolTipContentUpdatingEventArgs,
         IgrUserAnnotationInformationEventArgs, IgrUserAnnotationInformation  } from 'igniteui-react-charts';
import { CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgrTextarea, IgrInput } from 'igniteui-react';
import { IgrColorEditor } from 'igniteui-react-inputs';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrToolbarModule,
    IgrDataChartToolbarModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartAnnotationModule,
    IgrDataChartInteractivityModule,
    IgrAnnotationLayerProxyModule,
    IgrDataChartCategoryTrendLineModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {

    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }

    private labelInput: IgrInput;
    private labelInputRef(r: IgrInput) {
        this.labelInput = r;
        this.setState({});
    }

    private detailTextArea: IgrTextarea;
    private detailTextAreaRef(r: IgrTextarea) {
        this.detailTextArea = r;
        this.setState({});
    }

    private badgeColorPicker: IgrColorEditor;
    private badgeColorPickerRef(r: IgrColorEditor) {
        this.badgeColorPicker = r;
        this.setState({});
    }

    private mainColorPicker: IgrColorEditor;
    private mainColorPickerRef(r: IgrColorEditor) {
        this.mainColorPicker = r;
        this.setState({});
    }   

    private currentAnnotationInfo: IgrUserAnnotationInformation;

    constructor(props: any) {
        super(props);        
        this.chartRef = this.chartRef.bind(this);
        this.onDoneButtonClick = this.onDoneButtonClick.bind(this);
        this.onCancelButtonClick = this.onCancelButtonClick.bind(this);
        this.badgeColorPickerRef = this.badgeColorPickerRef.bind(this);
        this.mainColorPickerRef = this.mainColorPickerRef.bind(this);
        this.labelInputRef = this.labelInputRef.bind(this);
        this.detailTextAreaRef = this.detailTextAreaRef.bind(this);
        this.onUserAnnotationInformationRequested = this.onUserAnnotationInformationRequested.bind(this);
        this.onUserAnnotationToolTipContentUpdating = this.onUserAnnotationToolTipContentUpdating.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="aboveContentSplit">
                    <div className="aboveContentLeftContainer">
                        <div>
                            <IgrToolbar target={this.chart}
                                orientation="Horizontal">
                            </IgrToolbar>
                        </div>
                    </div>
                </div>

                <div className="container fill">
                    <IgrDataChart
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        computedPlotAreaMarginMode="Series"
                        isUserAnnotationsEnabled={true}
                        userAnnotationInformationRequested={this.onUserAnnotationInformationRequested}
                        userAnnotationToolTipContentUpdating={this.onUserAnnotationToolTipContentUpdating}
                        ref={this.chartRef}>
                        <IgrCategoryXAxis
                            name="xAxis"
                            dataSource={this.countryRenewableElectricity}
                            label="year">
                        </IgrCategoryXAxis>
                        <IgrNumericYAxis
                            name="yAxis"
                            title="TWh">
                        </IgrNumericYAxis>
                        <IgrLineSeries
                            name="lineSeries1"
                            title="Electricity"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            dataSource={this.countryRenewableElectricity}
                            valueMemberPath="america">
                        </IgrLineSeries>
                        <IgrLineSeries
                            name="LineSeries2"
                            title="Electricity"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            dataSource={this.countryRenewableElectricity}
                            valueMemberPath="europe">
                        </IgrLineSeries>
                        <IgrLineSeries
                            name="LineSeries3"
                            title="Electricity"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            dataSource={this.countryRenewableElectricity}
                            valueMemberPath="china">
                        </IgrLineSeries>
                    </IgrDataChart>

                    <div className='annotationPopup' >
                        <div>
                            <label>Label:</label>
                            <IgrInput ref={this.labelInputRef} />
                        </div>

                        <div>
                            <label>Details:</label>
                            <IgrTextarea ref={this.detailTextAreaRef} />
                        </div>

                        <div>
                            <label>Badge Color:</label>
                            <IgrColorEditor ref={this.badgeColorPickerRef} useTopLayer={true} openAsChild={true} />

                            <label>Main Color:</label>
                            <IgrColorEditor ref={this.mainColorPickerRef} useTopLayer={true} openAsChild={true} />
                        </div>

                        <div>
                            <button onClick={this.onDoneButtonClick}>Done</button>
                            <button onClick={this.onCancelButtonClick}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    public onUserAnnotationInformationRequested(s: IgrSeriesViewer<IIgrSeriesViewerProps>, e: IgrUserAnnotationInformationEventArgs){
        this.currentAnnotationInfo = e.annotationInfo;
        this.toggleDialogState(true);    
    }

    public onUserAnnotationToolTipContentUpdating(s: IgrSeriesViewer<IIgrSeriesViewerProps>, e: IgrUserAnnotationToolTipContentUpdatingEventArgs){
        var tooltipText = e.annotationInfo.annotationData;

        if (e.content.children.length == 0) {
            var element = document.createElement("div");
            element.textContent = tooltipText;
            e.content.appendChild(element);
        }
        else {
            var element: HTMLDivElement = e.content.children[0];
            element.textContent = tooltipText;
        }
    }

    public onDoneButtonClick(){    
        this.currentAnnotationInfo.label = this.labelInput.value;
        this.currentAnnotationInfo.annotationData = this.detailTextArea.value;
        this.currentAnnotationInfo.mainColor = this.mainColorPicker.value;
        this.currentAnnotationInfo.badgeColor = this.badgeColorPicker.value;

        this.chart.finishAnnotationFlow(this.currentAnnotationInfo);

        this.toggleDialogState(false);
    }

    public onCancelButtonClick(){
        this.chart.cancelAnnotationFlow(this.currentAnnotationInfo.annotationId);
        this.toggleDialogState(false);
    }

    public toggleDialogState(open: boolean): void {
        var popup = document.getElementsByClassName('annotationPopup')[0] as HTMLDivElement;

        if (open) {
            popup.style.display = "block";
        }
        else {
            popup.style.display = "none";
        }
    }

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


> [!Note]
> This feature is designed to support X and Y axes and does not currently support radial or angular axes.

## Using the User Annotations with the Toolbar

The [`IgrToolbar`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolbar.html) exposes an Annotations menu item with two tools with the labels of "Annotate Chart" and "Delete Note." In order for this menu item to appear, you first need to set the [`isUserAnnotationsEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#isUserAnnotationsEnabled) property on the corresponding chart to `true`.

The "Annotate Chart" option that appears after opening allows you to annotate the plot area of the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html). This can be done by adding slice, strip, or point annotations. You can add a slice annotation by clicking on a label on the X or Y axis. You can add a strip annotation by clicking and dragging in the plot area. Also, you can add a point annotation by clicking on a point in a series plotted in the chart.

<img class="responsive-img" src="../../../images/charts/data-chart-user-annotation-create.gif"
alt="React user-annotation-create"/>

You can delete the annotations that you have previously added by selecting the "Delete Note" menu item and then clicking on the axis annotation for the slice or strip user annotations, or by clicking the corresponding data point for the point user annotation.

<img class="responsive-img" src="../../../images/charts/data-chart-user-annotation-delete.gif"
alt="React user-annotation-delete"/>

When adding one of these user annotations via the `XamToolbar`, the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) will raise an event named `UserAnnotationInformationRequested` where you can provide more information for the user annotations. This event's arguments have a property named `AnnotationInfo` that will return a [`IgrUserAnnotationInformation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationinformation.html) object that allows the configuration of multiple different aspects of the annotation to be added.

The table below details the different configurable properties on [`IgrUserAnnotationInformation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationinformation.html):

| Property | Type | Description |
|------------|---------|-------------|
|[`annotationData`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationinformation.html#annotationData)|`string`|This property allows additional information for the user annotation. This property is designed to be utilized with the `UserAnnotationToolTipContentUpdating` event to show additional information in the annotation's tooltip.|
|[`annotationId`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationinformation.html#annotationId)|`string`|This read-only property returns the unique string ID of the user annotation.|
|[`badgeColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationinformation.html#badgeColor)|`string`|This property gets or sets the color to use for the badge in the user annotation.|
|[`badgeImageUri`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationinformation.html#badgeImageUri)|`string`|This property gets or sets a path to an image to use for the badge in the user annotation.|
|[`dialogSuggestedXLocation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationinformation.html#dialogSuggestedXLocation)|`double`|This property gets a recommended X location to show a dialog based on the location that the user annotation was added.|
|[`dialogSuggestedYLocation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationinformation.html#dialogSuggestedYLocation)|`double`|This property gets a recommended Y location to show a dialog based on the location that the user annotation was added.|
|[`label`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationinformation.html#label)|`string`|This property gets or sets the label to be shown in the user annotation.|
|[`mainColor`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationinformation.html#mainColor)|`string`|This property gets or sets the color to be used to fill the background of the user annotation.|

After you have made the changes to the annotation through the `UserAnnotationInformationRequested` event, you should invoke the [`finishAnnotationFlow`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationlayer.html#finishAnnotationFlow) method on the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) to finish creating the annotation and commit the changes to it. Alternatively, you can also cancel the annotation's creation by calling [`cancelAnnotationFlow`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationlayer.html#cancelAnnotationFlow) and passing the [`annotationId`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationinformation.html#annotationId) of the annotation, which can be obtained from the `AnnotationInfo` parameter of the `UserAnnotationInformationRequested` event's arguments, as mentioned above. This will remove the annotation from the plot area.

## Using the User Annotations Programmatically

When using the [`IgrUserAnnotationLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationlayer.html) programmatically, you can invoke two different methods on the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) to put the chart into a mode where you can add or remove a user annotation. These methods are named [`startCreatingAnnotation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#startCreatingAnnotation) and [`startDeletingAnnotation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#startDeletingAnnotation), respectively.

After invoking [`startCreatingAnnotation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#startCreatingAnnotation), you can add a slice annotation by clicking on a label on the X or Y axis, add a strip annotation by clicking and dragging in the plot area and releasing the mouse button, or add a point annotation by clicking on a data point on a series plotted in the chart.

Adding one of these user annotations will raise an event named `UserAnnotationInformationRequested`, where you can provide more information for the user annotation. This event's arguments have a property named `AnnotationInfo` that will return a [`IgrUserAnnotationInformation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationinformation.html) object that allows the configuration of multiple different aspects of the annotation to be added.

After you have made the changes to the annotation through the `UserAnnotationInformationRequested` event, you should invoke the [`finishAnnotationFlow`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationlayer.html#finishAnnotationFlow) method on the [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) to finish creating the annotation and commit the changes to it. Alternatively, you can also cancel the annotation's creation by calling [`cancelAnnotationFlow`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationlayer.html#cancelAnnotationFlow) and passing the [`annotationId`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationinformation.html#annotationId) of the annotation, which can be obtained from the `AnnotationInfo` parameter of the `UserAnnotationInformationRequested` event's arguments, as mentioned above. This will remove the annotation from the plot area.

Once the user annotation has been added to the chart, it will appear in the [`IgrSeries`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseries.html) collection as a [`IgrUserAnnotationLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationlayer.html). The [`IgrUserAnnotationLayer`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationlayer.html) has an [`annotations`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationlayer.html#annotations) collection that can store [`IgrUserSliceAnnotation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrusersliceannotation.html), [`IgrUserStripAnnotation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserstripannotation.html) and [`IgrUserPointAnnotation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserpointannotation.html) elements depending on the type of annotations added to the plot area.

## User Annotation ToolTip

Each of the user annotations can show a tooltip on mouse hover to add even more detail to the annotations.

The chart exposes a `UserAnnotationToolTipContentUpdating` event that you can handle to update the content of the tooltip for the user annotation as the tooltip is shown. The event arguments of this event exposes two properties: `Content` and `AnnotationInfo`.

The tooltip is designed to work in tandem with the `UserAnnotationInformationRequested` event so that you can provide more detail to the user annotation via that event's [`annotationData`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserbaseannotation.html#annotationData) property. The `AnnotationInfo` property on the event arguments of the `UserAnnotationToolTipContentUpdating` event will be the same instance as the `AnnotationInfo` property in the `UserAnnotationInformationRequested` that you can modify in that event. This allows you to utilize the information provided to the user annotation on its creation and provide even more information within the tooltip.

## API References

The following is a list of API members mentioned in the above sections:

- [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html).[`isUserAnnotationsEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#isUserAnnotationsEnabled)
- [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html).`SeriesViewer.UserAnnotationInformationRequested`
- [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html).`SeriesViewer.userAnnotationToolTipContentUpdating`
- [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html).[`cancelAnnotationFlow`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#cancelAnnotationFlow)
- [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html).[`startCreatingAnnotation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#startCreatingAnnotation)
- [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html).[`startDeletingAnnotation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrseriesviewer.html#startDeletingAnnotation)
- [`IgrUserAnnotationInformation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserannotationinformation.html)
- [`IgrUserSliceAnnotation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrusersliceannotation.html)
- [`IgrUserStripAnnotation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserstripannotation.html)
- [`IgrUserPointAnnotation`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igruserpointannotation.html)
- [`IgrToolbar`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolbar.html)

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Data Annotations](chart-data-annotations.md)

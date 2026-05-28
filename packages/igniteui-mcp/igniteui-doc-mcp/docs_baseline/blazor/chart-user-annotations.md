---
title: Blazor Chart User Annotations | Data Visualization | Infragistics
_description: Infragistics' Blazor Chart User Annotations
_keywords: Blazor Charts, User Annotations, Infragistics
mentionedTypes: ["DataChart", "UserAnnotationLayer", "UserStripAnnotation", "UserSliceAnnotation", "UserPointAnnotation", "Toolbar", "UserAnnotationInformation", "SeriesViewer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart User Annotations
_premium: true
---

# Blazor Chart User Annotation Layer <label class="badge badge--preview">PREVIEW</label>

In Ignite UI for Blazor, you can annotate the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart) with slice, strip, and point annotations at runtime using the user annotations feature. This allows the end user to add more details to the plot such as calling out single important events such as company quarter reports by using the slice annotation or events that have a duration by using the strip annotation. You can also call out individual points on the plotted series by using the point annotation or any combination of these three.

This is directly integrated with the available tools of the [`IgbToolbar`](mcp:get_api_reference?platform=blazor&component=IgbToolbar). The following topic explains, with examples, how you can utilize the [`IgbToolbar`](mcp:get_api_reference?platform=blazor&component=IgbToolbar) to add user annotations to the plot area of the chart, as well as how to do add these user annotations programmatically.

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JS;

<div class="container vertical">
    <div id="aboveContentSplit">
        <div id="aboveContentLeftContainer">
            <IgbToolbar @ref="toolbar" Orientation="ToolbarOrientation.Horizontal" />
        </div>        
    </div>
    <div class="container vertical fill">
        <IgbDataChart 
        IsHorizontalZoomEnabled="true"
        IsVerticalZoomEnabled="true" 
        IsUserAnnotationsEnabled="true"
        UserAnnotationInformationRequested="OnUserAnnotationInfoRequested"
        UserAnnotationToolTipContentUpdatingScript="onUserAnnotationToolTipContentUpdatingScript"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        @ref="chart">
            <IgbCategoryXAxis Name="xAxis" DataSource="CountryRenewableElectricity"
            Interval="1" Label="Year">
            </IgbCategoryXAxis>

            <IgbNumericYAxis Name="yAxis" Title="TWh" />

            <IgbLineSeries Title="Electricity"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="CountryRenewableElectricity"
            ValueMemberPath="America">
            </IgbLineSeries>

            <IgbLineSeries Title="Electricity"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="CountryRenewableElectricity"
            ValueMemberPath="Europe">
            </IgbLineSeries>

            <IgbLineSeries Title="Electricity"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="CountryRenewableElectricity"
            ValueMemberPath="China">
            </IgbLineSeries>
        </IgbDataChart>

        <div class="container vertical options annotationDialogPopup">
            
            <label>Label:</label>
            <IgbInput @ref=AnnotationInput DisplayType="@InputType.Text" Value="Enter Label"/>
            
            <label>Details:</label>
            <IgbTextarea @ref=AnnotationTextArea Resize="TextareaResize.None" Value="Enter Details"/>
            
            <label>Badge Color:</label>
            <IgbColorEditor id="annotationBadgeColorEditor"  />

            <label>Main Color:</label>
            <IgbColorEditor id="annotationMainColorEditor" />

            <div class="container horizontal annotationDialogButtons">
                <button @onclick="OnDoneButtonClick">Done</button>
                <button @onclick="OnCancelButtonClick">Cancel</button>
            </div>
        </div>
    </div>
</div>

@code {

    private Action BindElements { get; set; }
    private IgbInput AnnotationInput{ get; set; }
    private IgbTextarea AnnotationTextArea{ get; set; }    
    private IgbUserAnnotationInformation AnnotationInfo{ get; set; }
    private IgbToolbar toolbar;
    private IgbDataChart chart;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var toolbar = this.toolbar;
        var chart = this.chart;

        this.BindElements = () => { toolbar.Target = this.chart; };
        this.BindElements();
    }

    public void OnUserAnnotationInfoRequested(IgbUserAnnotationInformationEventArgs e){
        this.AnnotationInfo = e.AnnotationInfo;
        JS.InvokeVoidAsync("onUserAnnotationToggleDialog", new object[] { true });        
    }

    public async void OnDoneButtonClick(MouseEventArgs e){

        if (this.AnnotationInfo == null) return;

        this.AnnotationInfo.Label = this.AnnotationInput.GetCurrentValue();
        this.AnnotationInfo.AnnotationData = this.AnnotationTextArea.GetCurrentValue();

        string badgeColor = await JS.InvokeAsync<string>("getBadgeColor");
        string mainColor = await JS.InvokeAsync<string>("getMainColor");

        this.AnnotationInfo.BadgeColor = badgeColor;
        this.AnnotationInfo.MainColor = mainColor;

        await this.chart.FinishAnnotationFlowAsync(this.AnnotationInfo);

        await JS.InvokeVoidAsync("onUserAnnotationToggleDialog", new object[] { false });                
    }

    public void OnCancelButtonClick(MouseEventArgs e)
    {
        if (this.AnnotationInfo != null)
        {
            this.chart.CancelAnnotationFlow(this.AnnotationInfo.AnnotationId);
        }
        
        JS.InvokeVoidAsync("onUserAnnotationToggleDialog", new object[] { false });
    }    

    private CountryRenewableElectricity _countryRenewableElectricity = null;
    public CountryRenewableElectricity CountryRenewableElectricity
    {
        get
        {
            if (_countryRenewableElectricity == null)
            {
                _countryRenewableElectricity = new CountryRenewableElectricity();
            }
            return _countryRenewableElectricity;
        }
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class CountryRenewableElectricityItem
{
    public string Year { get; set; }
    public double Europe { get; set; }
    public double China { get; set; }
    public double America { get; set; }
}

public class CountryRenewableElectricity
    : List<CountryRenewableElectricityItem>
{
    public CountryRenewableElectricity()
    {
        this.Add(new CountryRenewableElectricityItem() { Year = @"2009", Europe = 34, China = 21, America = 19 });
        this.Add(new CountryRenewableElectricityItem() { Year = @"2010", Europe = 43, China = 26, America = 24 });
        this.Add(new CountryRenewableElectricityItem() { Year = @"2011", Europe = 66, China = 29, America = 28 });
        // ... 9 more items
    }
}
```

> [!Note]
> This feature is designed to support X and Y axes and does not currently support radial or angular axes.

## Using the User Annotations with the Toolbar

The [`IgbToolbar`](mcp:get_api_reference?platform=blazor&component=IgbToolbar) exposes an Annotations menu item with two tools with the labels of "Annotate Chart" and "Delete Note." In order for this menu item to appear, you first need to set the [`IsUserAnnotationsEnabled`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=IsUserAnnotationsEnabled) property on the corresponding chart to `true`.

The "Annotate Chart" option that appears after opening allows you to annotate the plot area of the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart). This can be done by adding slice, strip, or point annotations. You can add a slice annotation by clicking on a label on the X or Y axis. You can add a strip annotation by clicking and dragging in the plot area. Also, you can add a point annotation by clicking on a point in a series plotted in the chart.

<img class="responsive-img" src="../../../images/charts/data-chart-user-annotation-create.gif"
alt="Blazor user-annotation-create"/>

You can delete the annotations that you have previously added by selecting the "Delete Note" menu item and then clicking on the axis annotation for the slice or strip user annotations, or by clicking the corresponding data point for the point user annotation.

<img class="responsive-img" src="../../../images/charts/data-chart-user-annotation-delete.gif"
alt="Blazor user-annotation-delete"/>

When adding one of these user annotations via the `XamToolbar`, the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart) will raise an event named `UserAnnotationInformationRequested` where you can provide more information for the user annotations. This event's arguments have a property named `AnnotationInfo` that will return a [`IgbUserAnnotationInformation`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationInformation) object that allows the configuration of multiple different aspects of the annotation to be added.

The table below details the different configurable properties on [`IgbUserAnnotationInformation`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationInformation):

| Property | Type | Description |
|------------|---------|-------------|
|[`AnnotationData`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationInformation&member=AnnotationData)|`string`|This property allows additional information for the user annotation. This property is designed to be utilized with the `UserAnnotationToolTipContentUpdating` event to show additional information in the annotation's tooltip.|
|[`AnnotationId`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationInformation&member=AnnotationId)|`string`|This read-only property returns the unique string ID of the user annotation.|
|[`BadgeColor`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationInformation&member=BadgeColor)|`string`|This property gets or sets the color to use for the badge in the user annotation.|
|[`BadgeImageUri`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationInformation&member=BadgeImageUri)|`string`|This property gets or sets a path to an image to use for the badge in the user annotation.|
|[`DialogSuggestedXLocation`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationInformation&member=DialogSuggestedXLocation)|`double`|This property gets a recommended X location to show a dialog based on the location that the user annotation was added.|
|[`DialogSuggestedYLocation`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationInformation&member=DialogSuggestedYLocation)|`double`|This property gets a recommended Y location to show a dialog based on the location that the user annotation was added.|
|[`Label`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationInformation&member=Label)|`string`|This property gets or sets the label to be shown in the user annotation.|
|[`MainColor`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationInformation&member=MainColor)|`string`|This property gets or sets the color to be used to fill the background of the user annotation.|

After you have made the changes to the annotation through the `UserAnnotationInformationRequested` event, you should invoke the [`FinishAnnotationFlow`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationLayer&member=FinishAnnotationFlow) method on the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart) to finish creating the annotation and commit the changes to it. Alternatively, you can also cancel the annotation's creation by calling [`CancelAnnotationFlow`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationLayer&member=CancelAnnotationFlow) and passing the [`AnnotationId`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationInformation&member=AnnotationId) of the annotation, which can be obtained from the `AnnotationInfo` parameter of the `UserAnnotationInformationRequested` event's arguments, as mentioned above. This will remove the annotation from the plot area.

## Using the User Annotations Programmatically

When using the [`IgbUserAnnotationLayer`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationLayer) programmatically, you can invoke two different methods on the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart) to put the chart into a mode where you can add or remove a user annotation. These methods are named [`StartCreatingAnnotation`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=StartCreatingAnnotation) and [`StartDeletingAnnotation`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=StartDeletingAnnotation), respectively.

After invoking [`StartCreatingAnnotation`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=StartCreatingAnnotation), you can add a slice annotation by clicking on a label on the X or Y axis, add a strip annotation by clicking and dragging in the plot area and releasing the mouse button, or add a point annotation by clicking on a data point on a series plotted in the chart.

Adding one of these user annotations will raise an event named `UserAnnotationInformationRequested`, where you can provide more information for the user annotation. This event's arguments have a property named `AnnotationInfo` that will return a [`IgbUserAnnotationInformation`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationInformation) object that allows the configuration of multiple different aspects of the annotation to be added.

After you have made the changes to the annotation through the `UserAnnotationInformationRequested` event, you should invoke the [`FinishAnnotationFlow`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationLayer&member=FinishAnnotationFlow) method on the [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart) to finish creating the annotation and commit the changes to it. Alternatively, you can also cancel the annotation's creation by calling [`CancelAnnotationFlow`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationLayer&member=CancelAnnotationFlow) and passing the [`AnnotationId`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationInformation&member=AnnotationId) of the annotation, which can be obtained from the `AnnotationInfo` parameter of the `UserAnnotationInformationRequested` event's arguments, as mentioned above. This will remove the annotation from the plot area.

Once the user annotation has been added to the chart, it will appear in the [`Series`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=Series) collection as a [`IgbUserAnnotationLayer`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationLayer). The [`IgbUserAnnotationLayer`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationLayer) has an [`Annotations`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationLayer&member=Annotations) collection that can store [`IgbUserSliceAnnotation`](mcp:get_api_reference?platform=blazor&component=IgbUserSliceAnnotation), [`IgbUserStripAnnotation`](mcp:get_api_reference?platform=blazor&component=IgbUserStripAnnotation) and [`IgbUserPointAnnotation`](mcp:get_api_reference?platform=blazor&component=IgbUserPointAnnotation) elements depending on the type of annotations added to the plot area.

## User Annotation ToolTip

Each of the user annotations can show a tooltip on mouse hover to add even more detail to the annotations.

The chart exposes a `UserAnnotationToolTipContentUpdating` event that you can handle to update the content of the tooltip for the user annotation as the tooltip is shown. The event arguments of this event exposes two properties: `Content` and `AnnotationInfo`.

The tooltip is designed to work in tandem with the `UserAnnotationInformationRequested` event so that you can provide more detail to the user annotation via that event's [`AnnotationData`](mcp:get_api_reference?platform=blazor&component=IgbUserStripAnnotation&member=AnnotationData) property. The `AnnotationInfo` property on the event arguments of the `UserAnnotationToolTipContentUpdating` event will be the same instance as the `AnnotationInfo` property in the `UserAnnotationInformationRequested` that you can modify in that event. This allows you to utilize the information provided to the user annotation on its creation and provide even more information within the tooltip.

## API References

The following is a list of API members mentioned in the above sections:

- [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart).[`IsUserAnnotationsEnabled`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=IsUserAnnotationsEnabled)
- [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart).`SeriesViewer.UserAnnotationInformationRequested`
- [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart).`SeriesViewer.userAnnotationToolTipContentUpdating`
- [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart).[`CancelAnnotationFlow`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=CancelAnnotationFlow)
- [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart).[`StartCreatingAnnotation`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=StartCreatingAnnotation)
- [`IgbDataChart`](mcp:get_api_reference?platform=blazor&component=IgbDataChart).[`StartDeletingAnnotation`](mcp:get_api_reference?platform=blazor&component=IgbSeriesViewer&member=StartDeletingAnnotation)
- [`IgbUserAnnotationInformation`](mcp:get_api_reference?platform=blazor&component=IgbUserAnnotationInformation)
- [`IgbUserSliceAnnotation`](mcp:get_api_reference?platform=blazor&component=IgbUserSliceAnnotation)
- [`IgbUserStripAnnotation`](mcp:get_api_reference?platform=blazor&component=IgbUserStripAnnotation)
- [`IgbUserPointAnnotation`](mcp:get_api_reference?platform=blazor&component=IgbUserPointAnnotation)
- [`IgbToolbar`](mcp:get_api_reference?platform=blazor&component=IgbToolbar)

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Data Annotations](chart-data-annotations.md)

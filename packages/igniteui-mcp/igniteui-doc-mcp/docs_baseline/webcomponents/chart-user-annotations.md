---
title: "Web Components Chart User Annotations | Data Visualization | Infragistics"
description: Infragistics' Web Components Chart User Annotations
keywords: "Web Components Charts, User Annotations, Infragistics"
mentionedTypes: ["DataChart", "UserAnnotationLayer", "UserStripAnnotation", "UserSliceAnnotation", "UserPointAnnotation", "Toolbar", "UserAnnotationInformation", "SeriesViewer"]
namespace: Infragistics.Controls.Charts
llms:
  description: "In Ignite UI for Web Components, you can annotate the DataChart with slice, strip, and point annotations at runtime using the user annotations feature."
_tocName: Chart User Annotations
_premium: true
---
# Web Components Chart User Annotation Layer 

In Ignite UI for Web Components, you can annotate the [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) with slice, strip, and point annotations at runtime using the user annotations feature. This allows the end user to add more details to the plot such as calling out single important events such as company quarter reports by using the slice annotation or events that have a duration by using the strip annotation. You can also call out individual points on the plotted series by using the point annotation or any combination of these three.

This is directly integrated with the available tools of the `IgcToolbar`. The following topic explains, with examples, how you can utilize the `IgcToolbar` to add user annotations to the plot area of the chart, as well as how to do add these user annotations programmatically.

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
```

**Note:** 
This feature is designed to support X and Y axes and does not currently support radial or angular axes.

## Using the User Annotations with the Toolbar

The `IgcToolbar` exposes an Annotations menu item with two tools with the labels of "Annotate Chart" and "Delete Note." In order for this menu item to appear, you first need to set the [`IsUserAnnotationsEnabled`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=isUserAnnotationsEnabled) property on the corresponding chart to `true`.

The "Annotate Chart" option that appears after opening allows you to annotate the plot area of the [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent). This can be done by adding slice, strip, or point annotations. You can add a slice annotation by clicking on a label on the X or Y axis. You can add a strip annotation by clicking and dragging in the plot area. Also, you can add a point annotation by clicking on a point in a series plotted in the chart.

You can delete the annotations that you have previously added by selecting the "Delete Note" menu item and then clicking on the axis annotation for the slice or strip user annotations, or by clicking the corresponding data point for the point user annotation.

When adding one of these user annotations via the `IgcToolbar`, the [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) will raise an event named `UserAnnotationInformationRequested` where you can provide more information for the user annotations. This event's arguments have a property named `AnnotationInfo` that will return a [`IgcUserAnnotationInformation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation) object that allows the configuration of multiple different aspects of the annotation to be added.

The table below details the different configurable properties on [`IgcUserAnnotationInformation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation):

| Property | Type | Description |
|------------|---------|-------------|
|[`AnnotationData`](mcp:get_api_reference?platform=webcomponents&component=IgcUserStripAnnotation&member=annotationData)|`string`|This property allows additional information for the user annotation. This property is designed to be utilized with the `UserAnnotationToolTipContentUpdating` event to show additional information in the annotation's tooltip.|
|[`AnnotationId`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation&member=annotationId)|`string`|This read-only property returns the unique string ID of the user annotation.|
|[`BadgeColor`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation&member=badgeColor)|`string`|This property gets or sets the color to use for the badge in the user annotation.|
|[`BadgeImageUri`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation&member=badgeImageUri)|`string`|This property gets or sets a path to an image to use for the badge in the user annotation.|
|[`DialogSuggestedXLocation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation&member=dialogSuggestedXLocation)|`double`|This property gets a recommended X location to show a dialog based on the location that the user annotation was added.|
|[`DialogSuggestedYLocation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation&member=dialogSuggestedYLocation)|`double`|This property gets a recommended Y location to show a dialog based on the location that the user annotation was added.|
|[`Label`](mcp:get_api_reference?platform=webcomponents&component=IgcUserStripAnnotation&member=label)|`string`|This property gets or sets the label to be shown in the user annotation.|
|[`MainColor`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation&member=mainColor)|`string`|This property gets or sets the color to be used to fill the background of the user annotation.|

After you have made the changes to the annotation through the `UserAnnotationInformationRequested` event, you should invoke the [`FinishAnnotationFlow`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=finishAnnotationFlow) method on the [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) to finish creating the annotation and commit the changes to it. Alternatively, you can also cancel the annotation's creation by calling [`CancelAnnotationFlow`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=cancelAnnotationFlow) and passing the [`AnnotationId`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation&member=annotationId) of the annotation, which can be obtained from the `AnnotationInfo` parameter of the `UserAnnotationInformationRequested` event's arguments, as mentioned above. This will remove the annotation from the plot area.

## Using the User Annotations Programmatically

When using the [`IgcUserAnnotationLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationLayerComponent) programmatically, you can invoke two different methods on the [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) to put the chart into a mode where you can add or remove a user annotation. These methods are named [`StartCreatingAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=startCreatingAnnotation) and [`StartDeletingAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=startDeletingAnnotation), respectively.

After invoking [`StartCreatingAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=startCreatingAnnotation), you can add a slice annotation by clicking on a label on the X or Y axis, add a strip annotation by clicking and dragging in the plot area and releasing the mouse button, or add a point annotation by clicking on a data point on a series plotted in the chart.

Adding one of these user annotations will raise an event named `UserAnnotationInformationRequested`, where you can provide more information for the user annotation. This event's arguments have a property named `AnnotationInfo` that will return a [`IgcUserAnnotationInformation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation) object that allows the configuration of multiple different aspects of the annotation to be added.

After you have made the changes to the annotation through the `UserAnnotationInformationRequested` event, you should invoke the [`FinishAnnotationFlow`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=finishAnnotationFlow) method on the [`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) to finish creating the annotation and commit the changes to it. Alternatively, you can also cancel the annotation's creation by calling [`CancelAnnotationFlow`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=cancelAnnotationFlow) and passing the [`AnnotationId`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation&member=annotationId) of the annotation, which can be obtained from the `AnnotationInfo` parameter of the `UserAnnotationInformationRequested` event's arguments, as mentioned above. This will remove the annotation from the plot area.

Once the user annotation has been added to the chart, it will appear in the [`Series`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent&member=Series) collection as a [`IgcUserAnnotationLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationLayerComponent). The [`IgcUserAnnotationLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationLayerComponent) has an [`Annotations`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationLayerComponent&member=annotations) collection that can store [`IgcUserSliceAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserSliceAnnotation), [`IgcUserStripAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserStripAnnotation) and [`IgcUserPointAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserPointAnnotation) elements depending on the type of annotations added to the plot area.

## User Annotation ToolTip

Each of the user annotations can show a tooltip on mouse hover to add even more detail to the annotations.

The chart exposes a `UserAnnotationToolTipContentUpdating` event that you can handle to update the content of the tooltip for the user annotation as the tooltip is shown. The event arguments of this event exposes two properties: `Content` and `AnnotationInfo`.

The tooltip is designed to work in tandem with the `UserAnnotationInformationRequested` event so that you can provide more detail to the user annotation via that event's `AnnotationInfo.AnnotationData` property. The `AnnotationInfo` property on the event arguments of the `UserAnnotationToolTipContentUpdating` event will be the same instance as the `AnnotationInfo` property in the `UserAnnotationInformationRequested` that you can modify in that event. This allows you to utilize the information provided to the user annotation on its creation and provide even more information within the tooltip.

## API References
[`IgcDataChart`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent)
[`IgcUserAnnotationLayer`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationLayerComponent)
[`IgcUserAnnotationInformation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation)
[`IgcUserSliceAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserSliceAnnotation)
[`IgcUserStripAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserStripAnnotation)
[`IgcUserPointAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserPointAnnotation)
## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Data Annotations](chart-data-annotations.md)

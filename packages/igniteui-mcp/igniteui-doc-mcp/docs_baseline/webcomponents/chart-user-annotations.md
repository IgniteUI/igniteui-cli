---
title: Web Components Chart User Annotations | Data Visualization | Infragistics
_description: Infragistics' Web Components Chart User Annotations
_keywords: Web Components Charts, User Annotations, Infragistics
mentionedTypes: ["DataChart", "UserAnnotationLayer", "UserStripAnnotation", "UserSliceAnnotation", "UserPointAnnotation", "Toolbar", "UserAnnotationInformation", "SeriesViewer"]
namespace: Infragistics.Controls.Charts
_tocName: Chart User Annotations
_premium: true
---

# Web Components Chart User Annotation Layer <label class="badge badge--preview">PREVIEW</label>

In Ignite UI for Web Components, you can annotate the [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) with slice, strip, and point annotations at runtime using the user annotations feature. This allows the end user to add more details to the plot such as calling out single important events such as company quarter reports by using the slice annotation or events that have a duration by using the strip annotation. You can also call out individual points on the plotted series by using the point annotation or any combination of these three.

This is directly integrated with the available tools of the [`IgcToolbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolbarcomponent.html). The following topic explains, with examples, how you can utilize the [`IgcToolbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolbarcomponent.html) to add user annotations to the plot area of the chart, as well as how to do add these user annotations programmatically.

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

> [!Note]
> This feature is designed to support X and Y axes and does not currently support radial or angular axes.

## Using the User Annotations with the Toolbar

The [`IgcToolbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolbarcomponent.html) exposes an Annotations menu item with two tools with the labels of "Annotate Chart" and "Delete Note." In order for this menu item to appear, you first need to set the [`isUserAnnotationsEnabled`](mcp:get_api_reference?platform=webcomponents&component=IgcSeriesViewerComponent&member=isUserAnnotationsEnabled) property on the corresponding chart to `true`.

The "Annotate Chart" option that appears after opening allows you to annotate the plot area of the [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent). This can be done by adding slice, strip, or point annotations. You can add a slice annotation by clicking on a label on the X or Y axis. You can add a strip annotation by clicking and dragging in the plot area. Also, you can add a point annotation by clicking on a point in a series plotted in the chart.

<img class="responsive-img" src="../../../images/charts/data-chart-user-annotation-create.gif"
alt="Web Components user-annotation-create"/>

You can delete the annotations that you have previously added by selecting the "Delete Note" menu item and then clicking on the axis annotation for the slice or strip user annotations, or by clicking the corresponding data point for the point user annotation.

<img class="responsive-img" src="../../../images/charts/data-chart-user-annotation-delete.gif"
alt="Web Components user-annotation-delete"/>

When adding one of these user annotations via the `XamToolbar`, the [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) will raise an event named `UserAnnotationInformationRequested` where you can provide more information for the user annotations. This event's arguments have a property named `AnnotationInfo` that will return a [`IgcUserAnnotationInformation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation) object that allows the configuration of multiple different aspects of the annotation to be added.

The table below details the different configurable properties on [`IgcUserAnnotationInformation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation):

| Property | Type | Description |
|------------|---------|-------------|
|[`annotationData`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation&member=annotationData)|`string`|This property allows additional information for the user annotation. This property is designed to be utilized with the `UserAnnotationToolTipContentUpdating` event to show additional information in the annotation's tooltip.|
|[`annotationId`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation&member=annotationId)|`string`|This read-only property returns the unique string ID of the user annotation.|
|[`badgeColor`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation&member=badgeColor)|`string`|This property gets or sets the color to use for the badge in the user annotation.|
|[`badgeImageUri`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation&member=badgeImageUri)|`string`|This property gets or sets a path to an image to use for the badge in the user annotation.|
|[`dialogSuggestedXLocation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation&member=dialogSuggestedXLocation)|`double`|This property gets a recommended X location to show a dialog based on the location that the user annotation was added.|
|[`dialogSuggestedYLocation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation&member=dialogSuggestedYLocation)|`double`|This property gets a recommended Y location to show a dialog based on the location that the user annotation was added.|
|[`label`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation&member=label)|`string`|This property gets or sets the label to be shown in the user annotation.|
|[`mainColor`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation&member=mainColor)|`string`|This property gets or sets the color to be used to fill the background of the user annotation.|

After you have made the changes to the annotation through the `UserAnnotationInformationRequested` event, you should invoke the [`finishAnnotationFlow`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationLayerComponent&member=finishAnnotationFlow) method on the [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) to finish creating the annotation and commit the changes to it. Alternatively, you can also cancel the annotation's creation by calling [`cancelAnnotationFlow`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationLayerComponent&member=cancelAnnotationFlow) and passing the [`annotationId`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation&member=annotationId) of the annotation, which can be obtained from the `AnnotationInfo` parameter of the `UserAnnotationInformationRequested` event's arguments, as mentioned above. This will remove the annotation from the plot area.

## Using the User Annotations Programmatically

When using the [`IgcUserAnnotationLayerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationLayerComponent) programmatically, you can invoke two different methods on the [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) to put the chart into a mode where you can add or remove a user annotation. These methods are named [`startCreatingAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcSeriesViewerComponent&member=startCreatingAnnotation) and [`startDeletingAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcSeriesViewerComponent&member=startDeletingAnnotation), respectively.

After invoking [`startCreatingAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcSeriesViewerComponent&member=startCreatingAnnotation), you can add a slice annotation by clicking on a label on the X or Y axis, add a strip annotation by clicking and dragging in the plot area and releasing the mouse button, or add a point annotation by clicking on a data point on a series plotted in the chart.

Adding one of these user annotations will raise an event named `UserAnnotationInformationRequested`, where you can provide more information for the user annotation. This event's arguments have a property named `AnnotationInfo` that will return a [`IgcUserAnnotationInformation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation) object that allows the configuration of multiple different aspects of the annotation to be added.

After you have made the changes to the annotation through the `UserAnnotationInformationRequested` event, you should invoke the [`finishAnnotationFlow`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationLayerComponent&member=finishAnnotationFlow) method on the [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent) to finish creating the annotation and commit the changes to it. Alternatively, you can also cancel the annotation's creation by calling [`cancelAnnotationFlow`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationLayerComponent&member=cancelAnnotationFlow) and passing the [`annotationId`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation&member=annotationId) of the annotation, which can be obtained from the `AnnotationInfo` parameter of the `UserAnnotationInformationRequested` event's arguments, as mentioned above. This will remove the annotation from the plot area.

Once the user annotation has been added to the chart, it will appear in the [`IgcSeriesComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcSeriesComponent) collection as a [`IgcUserAnnotationLayerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationLayerComponent). The [`IgcUserAnnotationLayerComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationLayerComponent) has an [`annotations`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationLayerComponent&member=annotations) collection that can store [`IgcUserSliceAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserSliceAnnotation), [`IgcUserStripAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserStripAnnotation) and [`IgcUserPointAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserPointAnnotation) elements depending on the type of annotations added to the plot area.

## User Annotation ToolTip

Each of the user annotations can show a tooltip on mouse hover to add even more detail to the annotations.

The chart exposes a `UserAnnotationToolTipContentUpdating` event that you can handle to update the content of the tooltip for the user annotation as the tooltip is shown. The event arguments of this event exposes two properties: `Content` and `AnnotationInfo`.

The tooltip is designed to work in tandem with the `UserAnnotationInformationRequested` event so that you can provide more detail to the user annotation via that event's [`annotationData`](mcp:get_api_reference?platform=webcomponents&component=IgcUserStripAnnotation&member=annotationData) property. The `AnnotationInfo` property on the event arguments of the `UserAnnotationToolTipContentUpdating` event will be the same instance as the `AnnotationInfo` property in the `UserAnnotationInformationRequested` that you can modify in that event. This allows you to utilize the information provided to the user annotation on its creation and provide even more information within the tooltip.

## API References

The following is a list of API members mentioned in the above sections:

- [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent).[`isUserAnnotationsEnabled`](mcp:get_api_reference?platform=webcomponents&component=IgcSeriesViewerComponent&member=isUserAnnotationsEnabled)
- [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent).`SeriesViewer.UserAnnotationInformationRequested`
- [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent).`SeriesViewer.userAnnotationToolTipContentUpdating`
- [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent).[`cancelAnnotationFlow`](mcp:get_api_reference?platform=webcomponents&component=IgcSeriesViewerComponent&member=cancelAnnotationFlow)
- [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent).[`startCreatingAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcSeriesViewerComponent&member=startCreatingAnnotation)
- [`IgcDataChartComponent`](mcp:get_api_reference?platform=webcomponents&component=IgcDataChartComponent).[`startDeletingAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcSeriesViewerComponent&member=startDeletingAnnotation)
- [`IgcUserAnnotationInformation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserAnnotationInformation)
- [`IgcUserSliceAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserSliceAnnotation)
- [`IgcUserStripAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserStripAnnotation)
- [`IgcUserPointAnnotation`](mcp:get_api_reference?platform=webcomponents&component=IgcUserPointAnnotation)
- [`IgcToolbarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_layouts.igctoolbarcomponent.html)

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Data Annotations](chart-data-annotations.md)

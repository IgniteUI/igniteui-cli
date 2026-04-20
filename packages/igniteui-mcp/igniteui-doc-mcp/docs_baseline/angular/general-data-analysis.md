---
title: Data analysis capabilities | Angular Universal | Ignite UI for Angular | Infragistics
_description: How to use chart integration functionality with Ignite UI for Angular and provide the data analysis means to achieve better business objectives.
_keywords: data analysis, ignite ui for angular, infragistics
_tocName: Data Analysis
---

<style>
    .full-screen-btn {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        font-size: 13px;
        font-weight: 400;
        color: #fff;
        border: 0;
        text-transform: uppercase;
        padding: 8px 16px;
        margin: 24px 0;
        outline-style: none;
        -webkit-transition: all 0.25s ease-out;
        transition: all 0.25s ease-out;
        background: #0099ff;
    }
    .full-screen-btn:hover, .full-screen-btn:focus {
        color: white;
        -webkit-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.26), 0 8px 10px 1px rgba(0, 0, 0, 0.12), 0 3px 14px 2px rgba(0, 0, 0, 0.08);
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.26), 0 8px 10px 1px rgba(0, 0, 0, 0.12), 0 3px 14px 2px rgba(0, 0, 0, 0.08);
    }
    .full-screen-btn::before {
        content: "";
        display: inline-block;
        width: 28px;
        height: 28px;
        margin-right: 8px;
        background-image: url("../../images/general/fullscreen-white-18dp.svg");
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .full-screen-btn[disabled] {
        color: rgba(0, 0, 0, 0.28);
        background: #eee;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .full-screen-btn[disabled]::before {
        background-image: url("../../images/general/fullscreen-white-18dp.svg");
    }

</style>

# Data Analysis

Data analysis is the process of examining, transforming, and arranging data in a specific way to generate useful information based on it. It also allows for reaching certain outcomes and conclusions through analytical and logical reasoning.

>[!NOTE]
>This functionality will be introduced in **Ignite UI for Angular** as external package in order to ease the configuration and limit the required code at minimum

## Data Analysis with DockManager

Go ahead and perform a `cell range selection` or `column selection` in order to enable the `Chart types view` based on the selected data. This view is part of [Dock Manager's](../dock-manager.md) right pane. From there you can:

- Choose specific chart type and visualize it in separate pane.
- Or use the `Data Analysis` context button to show different text formatting options.

<div class="sample-container loading" style="height: 580px;">
    <iframe id="data-analysis-dock-manager" frameborder="0" seamless width="100%" height="100%" src="{environment:lobDemosBaseUrl}/grid-dynamic-chart-data/data-analysis-dock-manager" onload="onSampleIframeContentLoaded(this);" class="no-theming"></iframe>
</div>

<button class="full-screen-btn" onclick='window.open("{environment:lobDemosBaseUrl}/grid-dynamic-chart-data/data-analysis-dock-manager")'>View in full screen</button>

> [!NOTE]
> The [Dock Manager Web component](../dock-manager.md) provides means to manage the layout of the application through panes, and allowing the end-users to customize it further by pinning, resizing, moving and hiding panes. After selecting data, go ahead and create a couple of charts and pin them (by dragging) to the available areas

Keep in mind (sample related):

- On new data selection chart data will be updated.
- If multi-cell range selection is applied, only the `Text formatting` functionality will be available.
- If selected data is not compatible for any of the charts - an "Incompatible data" warning message will be shown.

## Data Analysis Package

You can start using this functionality by following the steps below. Keep in mind that **igniteui-angular-extras** package is only available through our [private npm feed](https://packages.infragistics.com/npm/js-licensed/). If you have a [valid commercial license](ignite-ui-licensing.md#license-agreements), you will have access to the private feed.

Let's start with:

- Installing the package in your application

```cmd
npm install @infragistics/igniteui-angular-extras
```

- Installing the package peer dependencies

```cmd
npm install @infragistics/igniteui-angular igniteui-angular-core igniteui-angular-charts
```

- After the installation of the packages go ahead and:
  - Add the `IgxExtrasModule` to your app.module.ts
  - Apply `igxChartIntegration`, `igxConditionalFormatting`, `igxContextMenu` directives to your grid

```html
<igx-grid #grid1 igxChartIntegration igxConditionalFormatting igxContextMenu
    [data]="localData" [autoGenerate]="true">
    <igx-paginator>
    </igx-paginator>
</igx-grid>
```

And that's it! You can now perform **cell range selection** and follow the data analysis flow.

## Data Analysis Button

The data analysis button is the outlet to visualize your selected data in various ways:

<img class="responsive-img" src="../../images/general/data-analysis-button.png" alt="Data analysis button" />

This way every range selection performed in the grid can be easily analyzed in a single click.

The button is rendered on every range selection at the **bottom-right** of the selection and hides when the selection is inactive. Horizontal and vertical scrolling reposition the button so that it is always rendered at its designated position.

## Chart Integration

This section introduces Grid's integration with charting functionality, which allows the end user to visualize a chart based on Grid's selected data and choose different chart types if needed.

The chart will be shown by selecting a range of cells and by clicking on the show analysis button.

>[!NOTE]
>The chart creation option is only available when there are numeric values in the selected data.

<div class="sample-container loading" style="height: 750px;">
    <iframe id="grid-dynamic-chart" frameborder="0" seamless="" width="100%" height="100%" src="{environment:lobDemosBaseUrl}/grid-dynamic-chart-data/data-analysis" class="lazyload no-theming"></iframe>
</div>

<button class="full-screen-btn" onclick='window.open("{environment:lobDemosBaseUrl}/grid-dynamic-chart-data/data-analysis")'>View in full screen</button>

We currently support the following Chart types:

- [Column Chart](../charts/types/column-chart.md),
[Area Chart](../charts/types/stacked-chart.md),
[Line Chart](../charts/types/line-chart.md),
[Bar Chart](../charts/types/line-chart.md),
- [Stacked Chart](../charts/types/stacked-chart.md),
[Stacked 100% Chart](../charts/types/stacked-chart.md),
- [Pie Chart](../charts/types/pie-chart.md),
[Scatter Chart](../charts/types/stacked-chart.md),
[Bubble Chart](../charts/types/bubble-chart.md)
 In order to show meaningful Bubble Chart we disable the preview when the data is not in valid format.

## Conditional Cell Formatting

If you have a Grid with thousands of rows of data it would be very difficult to see patterns and trends just from examining the raw information. Similar to charts and sparklines, `Conditional formatting` provides another way to visualize data and make it easier to understand.

Understanding conditional formatting - it allows for applying formatting such as colors and data bars to cells based on `their value` in the range selection. The [sample below](#demo) demonstrates how you can configure the Grid to apply `Conditional Formatting`. It depends on the `Conditional formatting selection type` what condition `rules` will be shown. Below you will find the predefined styles (presets) that you can use in order to quickly apply conditional formatting to your data. The formatting of a range gets cleared when performing formatting on different range or through the clear button. The clear button is only active when there is an applied formatting.

### Number range selection

- `Data Bars` - Data bars can help you spot larger and smaller numbers, such as top-selling and bottom-selling products. This preset makes it very easy to visualize values in a range of selected cells. A longer bar represents a higher value. A cell that holds  value of 0 has no data bar all other cells are filled proportionally. Positive values are with `green` color  and  negative values will be `red`

<img class="responsive-img" src="../../images/general/data-bars-formatting.png" alt="Data bars formatting" />


> `Lowest threshold` - Below 33% of the maximum cell value in range selection.
> `Highest threshold` - Above 66% of the maximum cell value in range selection.

<img class="responsive-img" src="../../images/general/color-scale-formatting.png" alt="Color scale formatting" />

- `Top 10%` - Use this preset to highlight the values which are equivalent to top 10% of the selected data.

<img class="responsive-img" src="../../images/general/top-10-percent.png" alt="Top 10% formatting" />

- `Greater than` - This preset marks all values `Greater than the average`
- `Duplicate values` - Marks all duplicate values.
- `Unique values` - All cell values that are unique will be marked (`blue` background color).

<img class="responsive-img" src="../../images/general/unique-values-formatting.png" alt="Unique values formatting" />

- `Empty`- Marks all cells with `undefined` values

### Text range selection

- `Text contains` - Marks all cells that contain the cell value from the `top-left most selected cell`. Example:

<img class="responsive-img" src="../../images/general/contains-formatting.png" alt="Text contains formatting" />

- `Duplicate values` - Marks all duplicate values.
- `Unique values` - All cell values that are unique will be marked (`blue` background color).
- `Empty`- Marks all cells with `undefined` values

### Demo

<div class="sample-container loading" style="height: 750px;">
    <iframe id="grid-dynamic-chart" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:lobDemosBaseUrl}/grid-dynamic-chart-data/data-analysis" class="lazyload no-theming"></iframe>
</div>

<button class="full-screen-btn" onclick='window.open("{environment:lobDemosBaseUrl}/grid-dynamic-chart-data/data-analysis")'>View in full screen</button>

## Data Analysis Package API

### IgxConditionalFormattingDirective

<div class="divider--half"></div>

| API                         |                                                                                                                       Description                  |                                                                                                                                                                            Arguments |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------: | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `ConditionalFormattingType` |                                                                          An **enum**, which represents the conditional formatting types            |                                                                                                                                                                                      |
| `IFormatColors`             |                                                                               An **interface**, which represents the formatting colors             |                                                                                                                                                                                      |
| `formatter`: **string**     |                                                                       An **input** property, which sets/gets the current formatting type           |                                                                                                                                                                                      |
| `formatColors`              |                                                                     An **input** property, which sets/gets the current formatting colors           |                                                                                                                                                               `val`: _IFormatColors_ |
| `onFormattersReady`         |                                  An **event**, which emits the applicable `formatting types` for the selected data, when they are determined.      |                                                                                                                                                                                      |
| `formatCells`               | Applies conditional formatting for the selected cells. Usage: <br/> **this.conditionalFormatting.formatCells(ConditionalFormattingType.dataBars)** | `formatterName`: **string**, `formatRange`?: [GridSelectionRange](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/gridselectionrange.html) [ ], <br /> `reset`: boolean (**true** by default) |
| `clearFormatting`           |                      Removes the conditional formatting from the selected cells. Usage: <br /> **this.conditionalFormatting.clearFormatting()**    |                                                                                                                                                                                      |

### IgxChartIntegrationDirective

<div class="divider--half"></div>

| API                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                            | Arguments                                                                                                |
| :--------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| `CHART_TYPE`                                   | An **enum**, representing the supported chart types                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                          |
| `OPTIONS_TYPE`                                 | An **enum**, representing the supported options type, which can be applied to a chart component                                                                                                                                                                                                                                                                                                                                                        |                                                                                                          |
| `IOptions`                                     | An **interface** for chart property options                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                          |
| `chartFactory`                                 | Creates a chart component, based on the provided chart type. Usage: <br /> **this.chartIntegration.chartFactory(CHART_TYPE.COLUMN_GROUPED, this.viewContainerRef)**                                                                                                                                                                                                                                                                                    | `type`: **any[ ]**, viewContainerRef: [`ViewContainerRef`](https://angular.io/api/core/ViewContainerRef) |
| `setChartComponentOptions`                     | Sets property options to a chart component. Usage: <br /> **this.chartIntegration.setChartComponentOptions(CHART_TYPE.PIE, OPTIONS_TYPE.CHART, {allowSliceExplosion: true, sliceClick: (evt) => { evt.args.isExploded = !evt.args.isExploded; } })**                                                                                                                                                                                                   | `chart`: _CHART_TYPE_, `optionsType`: _OPTIONS_TYPE_, `options`: _IOptions_                              |
| `getAvailableCharts`                           | Returns the enabled chart types                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                          |
| `enableCharts`                                 | Enables the provided chart types. By default all chart types are enabled                                                                                                                                                                                                                                                                                                                                                                               | `types`: _CHART_TYPE_ [ ]                                                                                |
| `disableCharts`                                | Disables the provided chart types                                                                                                                                                                                                                                                                                                                                                                                                                      | `types`: _CHART_TYPE_ [ ]                                                                                |
| `onChartTypesDetermined`                       | An **event**, emitted when the chart types, applicable for the `chartData`, are determined. This event emits an object of type `IDeterminedChartTypesArgs`, which has 2 properties: <br /> `chartsAvailabilty`: _Map<CHART_TYPE, boolean>_ - the enabled/disabled chart types, <br /> `chartsForCreation`: _CHART_TYPE[]_ - the applicable chart types for the `chartData`                                                                             |                                                                                                          |
| `onChartCreationDone`                          | An event, emitted when a chart is created. This event emits the chart component, which is created                                                                                                                                                                                                                                                                                                                                                      |                                                                                                          |
| `chartData`: **any[ ]**                        | An **input** property, which sets/gets the data for the charts                                                                                                                                                                                                                                                                                                                                                                                         | `selectedData`: **any[ ]**                                                                               |
| `useLegend`: **boolean**                       | An **input**, which enables/disables the legend usage for all chart types. By default it is set to **true**                                                                                                                                                                                                                                                                                                                                            |                                                                                                          |
| `defaultLabelMemberPath`: **string**           | An **input** property, which sets/gets the default label member path for the charts. By default the label member path will be determined, based on the provided data. <br />( **if the provided data records have properties with string values, the first string property name of the first data record in the `chartData` will be selected as a label member path for the charts, if not, the label member path will have value _'Index'_.** ) <br/> |                                                                                                          |
| `scatterChartYAxisValueMemberPath`: **string** | An **input** property, which sets/gets the default radius member path for the scatter bubble chart. **If not set, the default Y axis value member path will be the first numeric property name of the first data record in the `chartData`**                                                                                                                                                                                                           | `path`: **string**                                                                                       |
| `bubbleChartRadiusMemberPath`: **string**      | An **input** property, which sets/gets the default radius member path for the scatter bubble chart. **If not set, the default radius member path will be the second numeric property name of the first data record in the `chartData`**                                                                                                                                                                                                                | `path`: **string**                                                                                       |


## Useful resources

<div class="divider--half"></div>

- [Angular Universal guide](https://angular.io/guide/universal)
- [Ignite UI Starter Kit](https://github.com/IgniteUI/ng-universal-example)
- [Server-side rendering terminology](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)
- [Getting started with Ignite UI for Angular](getting-started.md)
- [Ignite UI CLI Guide](cli/step-by-step-guide-using-cli.md)
- [Ignite UI for Angular Schematics Guide](cli/step-by-step-guide-using-angular-schematics.md)

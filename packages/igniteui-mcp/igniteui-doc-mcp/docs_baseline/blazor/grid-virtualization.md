---
title: Blazor Grid Virtualization and Performance - Ignite UI for Blazor
_description: The Ignite UI for Blazor Virtualization is the core mechanic behind the speed & performance of the grid when handling large data sets. Try for free!
_keywords: Blazor Grid, Grid performance, data table virtualization, Ignite UI for Blazor
_license: commercial
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/virtualization
_tocName: Virtualization and performance
_premium: true
---

# Blazor Grid Virtualization and Performance

In Ignite UI for Blazor, the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) control virtualizes its content both vertically and horizontally.

<!-- ComponentStart: Grid, HierarchicalGrid -->

## Blazor Grid Virtualization and Performance Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="FinancialDataAll"
        Name="grid"
        @ref="grid"
        Id="grid"
        AllowFiltering="true">
            <IgbColumn
            Field="Category"
            Width="120px">
            </IgbColumn>

            <IgbColumn
            Field="Type"
            Filterable="false"
            Width="150px">
            </IgbColumn>

            <IgbColumn
            Field="Open"
            Width="120px"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="Price"
            Width="120px"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="Change"
            Width="120px"
            DataType="GridColumnDataType.Number"
            BodyTemplateScript="WebGridCurrencyCellTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="ChangePercent"
            Header="Change(%)"
            Width="120px"
            DataType="GridColumnDataType.Number"
            BodyTemplateScript="WebGridCurrencyCellTemplate"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="YearlyChange"
            Header="Change On Year(%)"
            Width="150px"
            DataType="GridColumnDataType.Number"
            BodyTemplateScript="WebGridCurrencyCellTemplate"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbColumn
            Field="Buy"
            Width="130px"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="Sell"
            Width="130px"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="Spread"
            Width="130px"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Volume"
            Width="130px"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="High"
            Width="130px"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="Low"
            Width="130px"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="YearlyHigh"
            Header="High(Y)"
            Width="130px"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="YearlyLow"
            Header="Low(Y)"
            Width="130px"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

            <IgbColumn
            Field="YearlyStart"
            Header="Start(Y)"
            Width="130px"
            DataType="GridColumnDataType.Currency">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var column1 = this.column1;
        var column2 = this.column2;
        var column3 = this.column3;

    }

    private IgbGrid grid;
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumn column3;

    private FinancialDataAll _financialDataAll = null;
    public FinancialDataAll FinancialDataAll
    {
        get
        {
            if (_financialDataAll == null)
            {
                _financialDataAll = new FinancialDataAll();
            }
            return _financialDataAll;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class FinancialDataAllItem
{
    public string Category { get; set; }
    public string Type { get; set; }
    public double Spread { get; set; }
    public double Open { get; set; }
    public double Price { get; set; }
    public double Buy { get; set; }
    public double Sell { get; set; }
    public double Change { get; set; }
    public double ChangePercent { get; set; }
    public double Volume { get; set; }
    public double High { get; set; }
    public double Low { get; set; }
    public double YearlyHigh { get; set; }
    public double YearlyLow { get; set; }
    public double YearlyStart { get; set; }
    public double YearlyChange { get; set; }
    public string Settlement { get; set; }
    public string Contract { get; set; }
    public string Region { get; set; }
    public string Country { get; set; }
    public string Risk { get; set; }
    public string Sector { get; set; }
    public string Currency { get; set; }
    public string Security { get; set; }
    public string Issuer { get; set; }
    public string Maturity { get; set; }
    public string IndGroup { get; set; }
    public string IndSector { get; set; }
    public string IndCategory { get; set; }
    public string CUSIP { get; set; }
    public string Cpn { get; set; }
    public double KRD_3YR { get; set; }
    public double ZV_SPREAD { get; set; }
    public double KRD_5YR { get; set; }
    public double KRD_1YR { get; set; }
    public double ID { get; set; }
}

public class FinancialDataAll
    : List<FinancialDataAllItem>
{
    public FinancialDataAll()
    {
        this.Add(new FinancialDataAllItem() { Category = @"Fuel", Type = @"Ethanol", Spread = 0.01, Open = 1.512, Price = 2.76, Buy = 2.75, Sell = 2.76, Change = 0.01, ChangePercent = 0.2, Volume = 14, High = 2.75, Low = 1.12, YearlyHigh = 2.75, YearlyLow = 1.12, YearlyStart = 1.48, YearlyChange = 86.7, Settlement = @"Cash", Contract = @"CFD", Region = @"Middle East", Country = @"Saudi Arabia", Risk = @"Low", Sector = @"Government", Currency = @"EUR", Security = @"Good", Issuer = @"American Airlines", Maturity = @"2022-02-11", IndGroup = @"Airlines", IndSector = @"Consumer, Cyclical", IndCategory = @"Airlines", CUSIP = @"1765866", Cpn = @"7.875", KRD_3YR = 6E-05, ZV_SPREAD = 28.302, KRD_5YR = 0, KRD_1YR = -0.00187, ID = 0 });
        this.Add(new FinancialDataAllItem() { Category = @"Fuel", Type = @"Natural Gas", Spread = 0.02, Open = 2.094, Price = 2.07, Buy = 2.09, Sell = 2.09, Change = -0.03, ChangePercent = -1.8, Volume = 2783, High = 2.11, Low = 2.09, YearlyHigh = 3.2, YearlyLow = 1.84, YearlyStart = 2.52, YearlyChange = -16.51, Settlement = @"Credit", Contract = @"Options", Region = @"Middle East", Country = @"Saudi Arabia", Risk = @"High", Sector = @"Public", Currency = @"PLN", Security = @"High", Issuer = @"Delta Airlines", Maturity = @"2022-02-22", IndGroup = @"Airlines", IndSector = @"Consumer, Cyclical", IndCategory = @"Airlines", CUSIP = @"1765866", Cpn = @"7.875", KRD_3YR = 6E-05, ZV_SPREAD = 28.302, KRD_5YR = 0, KRD_1YR = -0.00187, ID = 1 });
        this.Add(new FinancialDataAllItem() { Category = @"Agriculture", Type = @"Cotton", Spread = 0.01, Open = 61.77, Price = 62.9, Buy = 61.77, Sell = 61.77, Change = 1.14, ChangePercent = 1.84, Volume = 3612, High = 62.06, Low = 61.32, YearlyHigh = 67.59, YearlyLow = 54.33, YearlyStart = 60.96, YearlyChange = 1.31, Settlement = @"Cash", Contract = @"Options", Region = @"North America", Country = @"United States", Risk = @"Low", Sector = @"Private", Currency = @"EUR", Security = @"Good", Issuer = @"Southwest", Maturity = @"2022-05-23", IndGroup = @"Airlines", IndSector = @"Consumer, Cyclical", IndCategory = @"Airlines", CUSIP = @"1765866", Cpn = @"7.875", KRD_3YR = 6E-05, ZV_SPREAD = 28.302, KRD_5YR = 0, KRD_1YR = -0.00187, ID = 2 });
        // ... 997 more items
    }
}
```


<!-- ComponentEnd: Grid, HierarchicalGrid -->

## Enabling Virtualization

The [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) now optimizes DOM rendering and memory consumption by rendering only what is currently visible in the view port and swapping the displayed data while the user scrolls the data horizontally/vertically. The [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)'s [`Width`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Width) and `Height` defaults to `100%` which will enable virtualization if the content displayed cannot fit inside the available space and scrollbars are required either vertically or horizontally.

However, it is also possible to explicitly set the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)'s [`Width`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Width) and/or `Height` to `null` which means that the related dimension will be determined by the total size of the items inside. No scrollbar will then be shown and all items will be rendered along the respective dimension (columns if [`Width`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Width) is `null` and rows if `Height` is `null`).

The size of the data chunks is determined by:

- The row height for the vertical (row) virtualization. This is determined by the [`RowHeight`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowHeight) option and is 50(px) by default.
- The individual column widths in pixels for the horizontal (column) virtualization. They can be determined by either setting explicit width for each column component or setting the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)'s [`ColumnWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_ColumnWidth) option, which will be applied to all columns that don't have explicit width set.

In most cases, letting the grid apply its default behavior by leaving dimensions unset will produce the desired layout. For column widths it is determined by the column count, the columns with set width, and the calculated width of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)'s container. The grid will try to fit all columns inside the available space as long as the width it attempts to assign is not under 136(px). In such cases, columns with unassigned width will receive the minimum width of 136(px) and a horizontal scrollbar will be shown. The grid will be horizontally virtualized.

Explicitly setting column widths in percentages (%) will, in most cases, create a grid that is not virtualized horizontally as it will not have a horizontal scrollbar.

<!-- Blazor -->

## Templating

When needing to customize one of the existing templates in the grid, Blazor provides two possible ways to define a template:

- via a server-side template, using the related component property (i.e. [`BodyTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_BodyTemplate) property) or declaratively with the template name. For example:

```razor
<IgbColumn>
    <BodyTemplate>
        Template content here
    </BodyTemplate>
</IgbColumn>
```

This will render the template after first requesting and resolving it from the server.

- via a client-template using the `Script` equivalent of the property (i.e. `BodyTemplateScript`) to set it to the name of the client-side function handler, for example:

```razor
<IgbColumn BodyTemplateScript="CellTemplate">
</IgbColumn>
```

```
igRegisterScript("CellTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`Template content here`;
}, false);

```

The handler then renders the provided lit template directly in the DOM as needed.

> \[!Note]
> While both approaches are valid, the server-side templates do require a round-trip request to the server to retrieve and resolve the custom template before rendering it on the client. As such the client-template approach is more optimized and recommended, especially in scenarios with many templates that need frequent updates as there may be a noticeable delay between the related user-interaction and the template updates.

<!-- end: Blazor -->

## Virtualization Limitations

On Mac OS horizontal scrollbar is not visible when "Show scrollbars only when scrolling" system option is set to true (which is the default value). This is because the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)’s row container has an overflow set to hidden. Change the option to "Always" and the scrollbar will appear.

## FAQ

### Why is having dimensions in the Grid is necessary for virtualization to work?

Without information about the sizes of the container and the items before rendering them setting the width or height of a scrollbar or determining which of the items should be in the view when you scroll to a random location in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) is erroneous. Any assumptions on what the actual dimensions might be could lead to unnatural behavior of the scrollbar and ultimately suboptimal experience for the end-user. This is why setting the related dimensions is enforced in order for virtualization to take effect.

## API References

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)

## Additional Resources

- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

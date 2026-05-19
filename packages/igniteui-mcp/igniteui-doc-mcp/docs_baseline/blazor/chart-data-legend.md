---
title: Blazor Chart Data Legend | Data Visualization Tools | Infragistics
_description: Use Infragistics Ignite UI for Blazor chart with the data legend!
_keywords: Blazor charts, chart legend, legend, legend types, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["XamCategoryChart", "XamDataLegend", "Series", "DataLegendSummaryType", "DataAbbreviationMode" ]
namespace: Infragistics.Controls.Charts
_tocName: Chart Data Legend
_premium: true
---

# Blazor Data Legend

In Ignite UI for Blazor, the [`IgbDataLegend`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html) is highly-customizable version of the [`Legend`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_Legend), that shows values of series and provides many configuration properties for filtering series rows and values columns, styling and formatting values. This legend updates when moving the mouse inside of the plot area of the [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html), [`IgbFinancialChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbFinancialChart.html), and [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html). Also, it has a persistent state that remembers the last hovered point when the user's mouse pointer exits the plot area. It displays this content using a set of three type of rows (header, series, summary) and four types of columns (title, label, value, unit).

## Blazor Data Legend Rows

The rows of the [`IgbDataLegend`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html) include the header row, series row(s), and the summary row. The header row displays the axis label of the point that is hovered, and can be changed using the [`HeaderText`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_HeaderText) property.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Highest Grossing Movie Franchises
    </div>
    <div class="legend">
        <IgbDataLegend
        Name="legend"
        @ref="legend"
        UnitsText="B">
        </IgbDataLegend>

    </div>
    <div class="container vertical fill">
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        ChartType="CategoryChartType.Column"
        DataSource="HighestGrossingMovies"
        XAxisInterval="1"
        YAxisTitle="Billions of U.S. Dollars"
        YAxisTitleLeftMargin="10"
        YAxisTitleRightMargin="5"
        YAxisLabelLeftMargin="0"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        CrosshairsSnapToData="true">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;

        this.BindElements = () => {
            legend.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbDataLegend legend;
    private IgbCategoryChart chart;

    private HighestGrossingMovies _highestGrossingMovies = null;
    public HighestGrossingMovies HighestGrossingMovies
    {
        get
        {
            if (_highestGrossingMovies == null)
            {
                _highestGrossingMovies = new HighestGrossingMovies();
            }
            return _highestGrossingMovies;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class HighestGrossingMoviesItem
{
    public string Franchise { get; set; }
    public double TotalRevenue { get; set; }
    public double HighestGrossing { get; set; }
}

public class HighestGrossingMovies
    : List<HighestGrossingMoviesItem>
{
    public HighestGrossingMovies()
    {
        this.Add(new HighestGrossingMoviesItem() { Franchise = @"Marvel Universe", TotalRevenue = 22.55, HighestGrossing = 2.8 });
        this.Add(new HighestGrossingMoviesItem() { Franchise = @"Star Wars", TotalRevenue = 10.32, HighestGrossing = 2.07 });
        this.Add(new HighestGrossingMoviesItem() { Franchise = @"Harry Potter", TotalRevenue = 9.19, HighestGrossing = 1.34 });
        // ... 3 more items
    }
}
```

### Header Row

The header row displays the current label of x-axis when hovering mouse over category series and financial series. You can use [`HeaderFormatDate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_HeaderFormatDate) and [`HeaderFormatTime`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_HeaderFormatTime) properties to format date and time in the [`IgbDataLegend`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html) if the x-axis shows dates. For other types of series, the [`IgbDataLegend`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html) does not render the header row.

### Series Row

The series row represents each series plotted in the chart. These rows will display the legend badge, series title, actual/abbreviated value of the the series, and abbreviation symbol or unit of measurement, if specified. You can filter series rows by setting [`IncludedSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_IncludedSeries) or [`ExcludedSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ExcludedSeries) properties to a collection of series' indexes (1, 2, 3) or series' titles (Tesla, Microsoft).

### Summary Row

Finally, there is a summary row that displays the total of all series values. The default summary title can be changed using the [`SummaryTitleText`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_SummaryTitleText) property of the legend. Also, you can use the [`SummaryType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_SummaryType) property to customize whether you display the `Total`, `Min`, `Max`, or `Average` of series values in the summary row.

## Blazor Data Legend Columns

The columns of the [`IgbDataLegend`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html) include the series title, label, value of data column, and optional unit associated with the value. Some series in the chart can have multiple columns for label, value, and units. For example, financial price series has **High**, **Low**, **Open**, and **Close** data columns which can be filtered in the [`IgbDataLegend`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html) using the [`IncludedColumns`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_IncludedColumns) or [`ExcludedColumns`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ExcludedColumns) properties.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend">
        <IgbDataLegend
        Name="legend"
        @ref="legend"
        IncludedColumns="@(new string[] { "Open", "Close", "High", "Low", "Change" })">
        </IgbDataLegend>

    </div>
    <div class="container vertical fill">
        <IgbFinancialChart
        Name="chart"
        @ref="chart"
        ChartType="FinancialChartType.Candle"
        IsVerticalZoomEnabled="true"
        IsHorizontalZoomEnabled="true"
        DataSource="MultipleStocks"
        DataToolTipHeaderFormatTime="DataLegendHeaderTimeMode.None"
        ZoomSliderType="FinancialChartZoomSliderType.None">
        </IgbFinancialChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;

        this.BindElements = () => {
            legend.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbDataLegend legend;
    private IgbFinancialChart chart;

    private MultipleStocks _multipleStocks = null;
    public MultipleStocks MultipleStocks
    {
        get
        {
            if (_multipleStocks == null)
            {
                MultipleStocks.Fetch().ContinueWith((t) => {_multipleStocks = t.Result;  StateHasChanged(); });
            }
            return _multipleStocks;
        }
    }

}
```
```csharp
//begin async data
    using System;
    using System.Collections.Generic;
    using System.Text.Json;
    using System.Threading;
    using System.Threading.Tasks;
    using System.Net.Http;
    using System.Collections.ObjectModel;
    using IgniteUI.Blazor.Controls;

    public class MultipleStocks : List<TitledStockData>
    {
        public async static Task<MultipleStocks> Fetch()
        {
            var google = await MultipleStocks.GetGoogleStock();
            var amazon = await MultipleStocks.GetAmazonStock();

            var val = new MultipleStocks();
            val.Add(google);
            val.Add(amazon);
            return val;
        }

        /** gets Amazon stock OHLC prices from a .JSON file */
        public async static Task<TitledStockData> GetAmazonStock()
        {
            var url = "https://static.infragistics.com/xplatform/data/stocks/stockAmazon.json";
            var data = await Fetch(url);
            var stockData = ConvertData(data);
            stockData[0].Title = "Amazon";
            return stockData;
        }

        /** gets Tesla stock OHLC prices from a .JSON file */
        public async static Task<TitledStockData> GetTeslaStock()
        {
            var url = "https://static.infragistics.com/xplatform/data/stocks/stockTesla.json";
            var data = await Fetch(url);
            var stockData = ConvertData(data);
            stockData[0].Title = "Tesla";
            return stockData;
        }

        /** gets Microsoft stock OHLC prices from a .JSON file */
        public async static Task<TitledStockData> GetMicrosoftStock()
        {
            var url = "https://static.infragistics.com/xplatform/data/stocks/stockMicrosoft.json";
            var data = await Fetch(url);
            var stockData = ConvertData(data);
            stockData[0].Title = "Microsoft";
            return stockData;
        }

        /** gets Google stock OHLC prices from a .JSON file */
        public async static Task<TitledStockData> GetGoogleStock()
        {
            var url = "https://static.infragistics.com/xplatform/data/stocks/stockGoogle.json";
            var data = await Fetch(url);
            var stockData = ConvertData(data);
            stockData[0].Title = "Google";
            return stockData;
        }

        private async static Task<Dictionary<string, object>[]> Fetch(string url)
        {
            HttpClient client = new HttpClient();
            var str = await client.GetStringAsync(url);
            var arr = JsonSerializer.Deserialize<Dictionary<string, object>[]>(str);
            return arr;
        }

        public static TitledStockData ConvertData(Dictionary<string, object>[] arr)
        {
            var ret = new TitledStockData();

            foreach (var json in arr)
            {
                var date = ((JsonElement)json["date"]).GetString();
                var parts = date.Split('-'); // "2020-01-01"
                var item = new MultipleStocksItem();
                item.Date = new DateTime(int.Parse(parts[0]), int.Parse(parts[1]) + 1, int.Parse(parts[2]),12,0,0);
                item.Open = ((JsonElement)json["open"]).GetDouble();
                item.High = ((JsonElement)json["high"]).GetDouble();
                item.Low = ((JsonElement)json["low"]).GetDouble();
                item.Close = ((JsonElement)json["close"]).GetDouble();
                item.Volume = ((JsonElement)json["volume"]).GetDouble();
                ret.Add(item);
            }

            return ret;
        }
    }

    public class MultipleStocksItem
    {
        [DataSeriesMemberIntent(DataSeriesIntent.SeriesTitle)]
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public double Open { get; set; }
        public double High { get; set; }
        public double Low { get; set; }
        public double Close { get; set; }
        public double Volume { get; set; }
    }

    public class TitledStockData
        : ObservableCollection<MultipleStocksItem>
    {

    }
    //end async data
```

Setting values on the [`IncludedColumns`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_IncludedColumns) and [`ExcludedColumns`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ExcludedColumns) properties, depends on type of series and how many data columns they support. For example, you can set [`IncludedColumns`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_IncludedColumns) property to a collection of **Open** and **Close** strings and the legend will show only open and close values for stock prices when the chart is plotting financial series. The following table lists all column names that can be use to filter columns in data legend.

|  Type of Series  | Column Names |
| -----------------|-------------- |
| Category Series  | Value |
| Radial Series    | Value |
| Polar Series     | Radius, Angle |
| Bubble Series    | X, Y, Radius |
| Scatter Series   | X, Y |
| Range Series     | High, Low |
| Financial Series | High, Low, Open, Close, Change, TypicalPrice, Volume |

Where the **TypicalPrice** and percentage **Change** of OHLC prices are automatically calculated by financial series so you do not need to include them in your data sources.

### Title Column

The title column displays legend badges and series titles, which come from the `Title` property of the different [`IgbSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html) plotted in the chart.

### Label Column

The label column displays short name on the left side of value column, e.g. "O" for **Open** stock price. You can toggle visibility of this column using the [`LabelDisplayMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_LabelDisplayMode) property.

### Value Column

The value column displays values of series as abbreviated text which can be formatted using the [`ValueFormatAbbreviation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ValueFormatAbbreviation) property to apply the same abbreviation for all numbers by setting this property to `Shared`. Alternatively, a user can select other abbreviations such as `Independent`, `Kilo`, `Million`, etc. Precision of abbreviated values is controlled using the [`ValueFormatMinFractions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ValueFormatMinFractions) and [`ValueFormatMaxFractions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ValueFormatMaxFractions) for minimum and maximum digits, respectively.

### Unit Column

The unit column displays an abbreviation symbol on the right side of value column. The unit symbol depends on the [`ValueFormatAbbreviation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ValueFormatAbbreviation) property, e.g. "M" for the `Million` abbreviation.

### Customizing Columns

You can customize text displayed in the **Label** and **Unit** columns using  properties that end with **MemberAsLegendLabel** and **MemberAsLegendUnit** on each series. The following table shows some possible customizations of the **Label** and **Unit** columns.

|  Type of Series | Series Properties |
| ------|---- |
| Category Series | ValueMemberAsLegendLabel="$" <br> ValueMemberAsLegendUnit="M" |
| Radial Series | ValueMemberAsLegendLabel="Distance:" <br> ValueMemberAsLegendUnit="KM" |
| Polar Series | RadiusMemberAsLegendLabel="Radius:" <br> RadiusMemberAsLegendUnit="KM" <br> AngleMemberAsLegendLabel="Angle:" <br> AngleMemberAsLegendUnit="°" |
| Range Series | HighMemberAsLegendLabel="H:" <br> HighMemberAsLegendUnit="K" <br> LowMemberAsLegendLabel="L:" <br> LowMemberAsLegendUnit="K" |
| Financial Series | OpenMemberAsLegendLabel="O:" <br> OpenMemberAsLegendUnit="K" <br> HighMemberAsLegendLabel="H:" <br> HighMemberAsLegendUnit="K" <br> LowMemberAsLegendLabel="L:" <br> LowMemberAsLegendUnit="K" <br> CloseMemberAsLegendLabel="C:" <br> CloseMemberAsLegendUnit="K" <br> |

Also, you can use the `UnitText` property on the [`IgbDataLegend`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html) to change text displayed in all Unit columns.

## Layout Mode

Legend items can be positioned in a vertical or table structure via the [`LayoutMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_LayoutMode) property. The default value is `Table`, which retains the same look and feel as seen in previous releases.

eg.

<img src="../../../images/general/layout_mode.png" alt="Layout Mode" />

## Blazor Data Legend Styling

The [`IgbDataLegend`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html) provides properties for styling each type of column. Each of these properties begins with **Title**, **Label**, **Value**, or **Units**. You can style the text's color, font, and margin. For example, if you wanted to set the text color of all columns, you would set the [`TitleTextColor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_TitleTextColor), [`LabelTextColor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_LabelTextColor), [`ValueTextColor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ValueTextColor), and [`UnitsTextColor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_UnitsTextColor) properties. The following example demonstrates a utilization of the styling properties mentioned above:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend">
        <IgbDataLegend
        Name="legend"
        @ref="legend"
        IncludedColumns="@(new string[] { "Open", "Close", "High", "Low", "Change" })"
        LabelTextColor="#4a4a4a"
        UnitsText="K"
        UnitsTextColor="#00ad03"
        UnitsTextFontFamily="Verdana"
        UnitsTextFontWeight="Bold"
        ValueFormatMode="DataLegendValueMode.Currency"
        ValueTextColor="#00ad03"
        ValueTextFontFamily="Verdana"
        ValueTextFontWeight="Bold">
        </IgbDataLegend>

    </div>
    <div class="container vertical fill">
        <IgbFinancialChart
        Name="chart"
        @ref="chart"
        IsVerticalZoomEnabled="true"
        IsHorizontalZoomEnabled="true"
        DataSource="StockGoogle"
        ToolTipType="ToolTipType.None"
        YAxisTitle="Thousands of Dollars ($)"
        ZoomSliderType="FinancialChartZoomSliderType.None">
        </IgbFinancialChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;

        this.BindElements = () => {
            legend.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbDataLegend legend;
    private IgbFinancialChart chart;

    private StockGoogle _stockGoogle = null;
    public StockGoogle StockGoogle
    {
        get
        {
            if (_stockGoogle == null)
            {
                _stockGoogle = new StockGoogle();
            }
            return _stockGoogle;
        }
    }

}
```
```csharp
//begin data
using System;
using System.Collections.Generic;
public class StockGoogle : List<StockItem> {

	public StockGoogle(){

     this.Add(new StockItem(){Date=new DateTime(2014,03,01,13,0,0), Open= 559.6, High= 568.2, Low= 558.4, Close= 566.9, Volume= 2182626 });
     this.Add(new StockItem(){Date=new DateTime(2014,03,02,13,0,0), Open= 562.4, High= 571.8, Low= 561.4, Close= 567.0, Volume= 2088804 });
     this.Add(new StockItem(){Date=new DateTime(2014,03,03,13,0,0), Open= 569.9, High= 587.3, Low= 564.1, Close= 569.7, Volume= 5087530 });
     // ... 81 more items
    // this.Add(new StockItem(){Date=new DateTime(2014,06,31,13,0,0), Open= 580.6, High= 583.6, Low= 570.0, Close= 571.6, Volume= 2099516 });
     this.Add(new StockItem(){Date=new DateTime(2014,07,01,13,0,0), Open= 570.4, High= 576.0, Low= 562.9, Close= 566.1, Volume= 1950171 });
     this.Add(new StockItem(){Date=new DateTime(2014,07,04,13,0,0), Open= 569.0, High= 575.4, Low= 564.1, Close= 573.1, Volume= 1427169 });
     this.Add(new StockItem(){Date=new DateTime(2014,07,05,13,0,0), Open= 570.0, High= 572.0, Low= 562.6, Close= 565.1, Volume= 1556685 });
     // ... 61 more items
     //this.Add(new StockItem(){Date=new DateTime(2014,09,31,13,0,0), Open= 559.4, High= 559.6, Low= 554.8, Close= 559.1, Volume= 2032887 });
     this.Add(new StockItem(){Date=new DateTime(2014,10,03,13,0,0), Open= 555.5, High= 557.9, Low= 553.2, Close= 555.2, Volume= 1378511 });
     this.Add(new StockItem(){Date=new DateTime(2014,10,04,13,0,0), Open= 553.0, High= 555.5, Low= 549.3, Close= 554.1, Volume= 1240761 });
     this.Add(new StockItem(){Date=new DateTime(2014,10,05,13,0,0), Open= 556.8, High= 556.8, Low= 544.0, Close= 545.9, Volume= 2026740 });
     // ... 37 more items
     //this.Add(new StockItem(){Date=new DateTime(2014,11,31,13,0,0), Open= 531.3, High= 532.6, Low= 525.8, Close= 526.4, Volume= 1371819 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,02,13,0,0), Open= 529.0, High= 531.3, Low= 524.1, Close= 524.8, Volume= 1446662 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,05,13,0,0), Open= 523.3, High= 524.3, Low= 513.1, Close= 513.9, Volume= 2054238 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,06,13,0,0), Open= 515.0, High= 516.2, Low= 501.1, Close= 502.0, Volume= 2891950 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,07,13,0,0), Open= 507.0, High= 507.2, Low= 499.6, Close= 501.1, Volume= 2059366 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,08,13,0,0), Open= 498.0, High= 503.5, Low= 491.0, Close= 502.7, Volume= 3344395 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,09,13,0,0), Open= 504.8, High= 504.9, Low= 494.8, Close= 496.2, Volume= 2065715 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,12,13,0,0), Open= 494.9, High= 496.0, Low= 487.6, Close= 492.6, Volume= 2320446 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,13,13,0,0), Open= 498.8, High= 503.0, Low= 492.4, Close= 496.2, Volume= 2365687 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,14,13,0,0), Open= 494.6, High= 503.2, Low= 493.0, Close= 500.9, Volume= 2229638 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,15,13,0,0), Open= 505.6, High= 505.7, Low= 497.8, Close= 501.8, Volume= 2711355 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,16,13,0,0), Open= 500.0, High= 508.2, Low= 500.0, Close= 508.1, Volume= 2292043 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,20,13,0,0), Open= 511.0, High= 512.5, Low= 506.0, Close= 506.9, Volume= 2225922 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,21,13,0,0), Open= 507.3, High= 519.3, Low= 506.2, Close= 518.0, Volume= 2262455 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,22,13,0,0), Open= 521.5, High= 536.3, Low= 519.7, Close= 534.4, Volume= 2669558 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,23,13,0,0), Open= 535.6, High= 542.2, Low= 533.0, Close= 540.0, Volume= 2275485 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,26,13,0,0), Open= 538.5, High= 539.0, Low= 529.7, Close= 535.2, Volume= 1539524 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,27,13,0,0), Open= 530.0, High= 530.7, Low= 518.2, Close= 518.6, Volume= 1898844 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,28,13,0,0), Open= 522.8, High= 523.0, Low= 510.0, Close= 510.0, Volume= 1679230 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,29,13,0,0), Open= 511.0, High= 511.1, Low= 501.2, Close= 510.7, Volume= 4174924 });
     //this.Add(new StockItem(){Date=new DateTime(2015,00,30,13,0,0), Open= 515.9, High= 539.9, Low= 515.5, Close= 534.5, Volume= 5590977 });
     this.Add(new StockItem(){Date=new DateTime(2015,01,02,13,0,0), Open= 531.7, High= 533.0, Low= 518.5, Close= 528.5, Volume= 2841976 });
     this.Add(new StockItem(){Date=new DateTime(2015,01,03,13,0,0), Open= 528.0, High= 533.4, Low= 523.3, Close= 529.2, Volume= 2033085 });
     this.Add(new StockItem(){Date=new DateTime(2015,01,04,13,0,0), Open= 529.2, High= 532.7, Low= 521.3, Close= 522.8, Volume= 1659125 });
     // ... 36 more items
     //this.Add(new StockItem(){Date=new DateTime(2015,02,30,13,0,0), Open= 551.6, High= 553.5, Low= 548.2, Close= 552.0, Volume= 1283958 });
     //this.Add(new StockItem(){Date=new DateTime(2015,02,31,13,0,0), Open= 550.0, High= 554.7, Low= 546.7, Close= 548.0, Volume= 1583677 });
     this.Add(new StockItem(){Date=new DateTime(2015,03,01,13,0,0), Open= 548.6, High= 551.1, Low= 539.5, Close= 542.6, Volume= 1957718 });
     this.Add(new StockItem(){Date=new DateTime(2015,03,02,13,0,0), Open= 540.9, High= 540.9, Low= 533.9, Close= 535.5, Volume= 1711737 });
     this.Add(new StockItem(){Date=new DateTime(2015,03,06,13,0,0), Open= 532.2, High= 538.4, Low= 529.6, Close= 536.8, Volume= 1320767 });
     // ... 81 more items
     //this.Add(new StockItem(){Date=new DateTime(2015,06,31,13,0,0), Open= 631.4, High= 632.9, Low= 625.5, Close= 625.6, Volume= 1706149 });
     this.Add(new StockItem(){Date=new DateTime(2015,07,03,13,0,0), Open= 625.3, High= 633.1, Low= 625.3, Close= 631.2, Volume= 1304511 });
     this.Add(new StockItem(){Date=new DateTime(2015,07,04,13,0,0), Open= 628.4, High= 634.8, Low= 627.2, Close= 629.3, Volume= 1490881 });
     this.Add(new StockItem(){Date=new DateTime(2015,07,05,13,0,0), Open= 634.3, High= 647.9, Low= 633.2, Close= 643.8, Volume= 2334266 });
     // ... 102 more items
     //this.Add(new StockItem(){Date=new DateTime(2015,11,31,13,0,0), Open= 769.5, High= 769.5, Low= 758.3, Close= 758.9, Volume= 1500923 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,04,13,0,0), Open= 743.0, High= 744.1, Low= 731.3, Close= 741.8, Volume= 3258199 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,05,13,0,0), Open= 746.5, High= 752.0, Low= 738.6, Close= 742.6, Volume= 1950691 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,06,13,0,0), Open= 730.0, High= 747.2, Low= 728.9, Close= 743.6, Volume= 1947034 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,07,13,0,0), Open= 730.3, High= 738.5, Low= 719.1, Close= 726.4, Volume= 2963741 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,08,13,0,0), Open= 731.5, High= 733.2, Low= 713.0, Close= 714.5, Volume= 2450857 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,11,13,0,0), Open= 716.6, High= 718.9, Low= 703.5, Close= 716.0, Volume= 2090621 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,12,13,0,0), Open= 721.7, High= 728.8, Low= 717.3, Close= 726.1, Volume= 2024509 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,13,13,0,0), Open= 730.9, High= 734.7, Low= 698.6, Close= 700.6, Volume= 2468295 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,14,13,0,0), Open= 705.4, High= 721.9, Low= 689.1, Close= 714.7, Volume= 2211853 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,15,13,0,0), Open= 692.3, High= 706.7, Low= 685.4, Close= 694.5, Volume= 3592449 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,19,13,0,0), Open= 703.3, High= 710.0, Low= 693.4, Close= 701.8, Volume= 2258479 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,20,13,0,0), Open= 688.6, High= 706.9, Low= 673.3, Close= 698.5, Volume= 3439386 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,21,13,0,0), Open= 702.2, High= 719.2, Low= 694.5, Close= 706.6, Volume= 2410263 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,22,13,0,0), Open= 723.6, High= 728.1, Low= 720.1, Close= 725.3, Volume= 2006528 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,25,13,0,0), Open= 723.6, High= 729.7, Low= 710.0, Close= 711.7, Volume= 1704641 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,26,13,0,0), Open= 713.9, High= 718.3, Low= 706.5, Close= 713.0, Volume= 1324300 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,27,13,0,0), Open= 713.7, High= 718.2, Low= 694.4, Close= 700.0, Volume= 2139970 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,28,13,0,0), Open= 722.2, High= 733.7, Low= 712.4, Close= 731.0, Volume= 2658016 });
     //this.Add(new StockItem(){Date=new DateTime(2016,00,29,13,0,0), Open= 731.5, High= 745.0, Low= 726.8, Close= 743.0, Volume= 3394935 });
     this.Add(new StockItem(){Date=new DateTime(2016,01,01,13,0,0), Open= 750.5, High= 757.9, Low= 743.3, Close= 752.0, Volume= 4801816 });
     this.Add(new StockItem(){Date=new DateTime(2016,01,02,13,0,0), Open= 784.5, High= 789.9, Low= 764.6, Close= 764.6, Volume= 6332431 });
     this.Add(new StockItem(){Date=new DateTime(2016,01,03,13,0,0), Open= 770.2, High= 774.5, Low= 720.5, Close= 727.0, Volume= 6162333 });
     // ... 36 more items
     //this.Add(new StockItem(){Date=new DateTime(2016,02,29,13,0,0), Open= 734.6, High= 747.3, Low= 728.8, Close= 744.8, Volume= 1902128 });
     //this.Add(new StockItem(){Date=new DateTime(2016,02,30,13,0,0), Open= 750.1, High= 757.9, Low= 748.7, Close= 750.5, Volume= 1780998 });
    // this.Add(new StockItem(){Date=new DateTime(2016,02,31,13,0,0), Open= 749.3, High= 750.9, Low= 740.9, Close= 745.0, Volume= 1712375 });
     this.Add(new StockItem(){Date=new DateTime(2016,03,01,13,0,0), Open= 738.6, High= 750.3, Low= 737.0, Close= 749.9, Volume= 1574870 });
     this.Add(new StockItem(){Date=new DateTime(2016,03,04,13,0,0), Open= 750.1, High= 752.8, Low= 742.4, Close= 745.3, Volume= 1131843 });
     this.Add(new StockItem(){Date=new DateTime(2016,03,05,13,0,0), Open= 738.0, High= 742.8, Low= 735.4, Close= 737.8, Volume= 1129829 });
     // ... 38 more items
     //this.Add(new StockItem(){Date=new DateTime(2016,04,31,13,0,0), Open= 731.7, High= 739.7, Low= 731.3, Close= 735.7, Volume= 2129545 });
     this.Add(new StockItem(){Date=new DateTime(2016,05,01,13,0,0), Open= 734.5, High= 737.2, Low= 730.7, Close= 734.1, Volume= 1253593 });
     this.Add(new StockItem(){Date=new DateTime(2016,05,02,13,0,0), Open= 732.5, High= 733.0, Low= 724.2, Close= 730.4, Volume= 1341807 });
     this.Add(new StockItem(){Date=new DateTime(2016,05,03,13,0,0), Open= 729.3, High= 729.5, Low= 720.6, Close= 722.3, Volume= 1226253 });
     // ... 103 more items
    // this.Add(new StockItem(){Date=new DateTime(2016,09,31,13,0,0), Open= 795.5, High= 796.9, Low= 784.0, Close= 784.5, Volume= 2427284 });
     this.Add(new StockItem(){Date=new DateTime(2016,10,01,13,0,0), Open= 782.9, High= 789.5, Low= 775.5, Close= 783.6, Volume= 2406356 });
     this.Add(new StockItem(){Date=new DateTime(2016,10,02,13,0,0), Open= 778.2, High= 781.6, Low= 763.5, Close= 768.7, Volume= 1918414 });
     this.Add(new StockItem(){Date=new DateTime(2016,10,03,13,0,0), Open= 767.3, High= 770.0, Low= 759.0, Close= 762.1, Volume= 1943175 });
     // ... 39 more items
     //this.Add(new StockItem(){Date=new DateTime(2017,00,03,13,0,0), Open= 778.8, High= 789.6, Low= 775.8, Close= 786.1, Volume= 1657268 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,04,13,0,0), Open= 788.4, High= 791.3, Low= 783.2, Close= 786.9, Volume= 1072958 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,05,13,0,0), Open= 786.1, High= 794.5, Low= 785.0, Close= 794.0, Volume= 1335167 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,06,13,0,0), Open= 795.3, High= 807.9, Low= 792.2, Close= 806.1, Volume= 1640170 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,09,13,0,0), Open= 806.4, High= 810.0, Low= 802.8, Close= 806.6, Volume= 1274645 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,10,13,0,0), Open= 807.9, High= 809.1, Low= 803.5, Close= 804.8, Volume= 1176780 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,11,13,0,0), Open= 805.0, High= 808.1, Low= 801.4, Close= 807.9, Volume= 1065936 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,12,13,0,0), Open= 807.1, High= 807.4, Low= 799.2, Close= 806.4, Volume= 1353057 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,13,13,0,0), Open= 807.5, High= 811.2, Low= 806.7, Close= 807.9, Volume= 1099215 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,17,13,0,0), Open= 807.1, High= 807.1, Low= 800.4, Close= 804.6, Volume= 1362115 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,18,13,0,0), Open= 805.8, High= 806.2, Low= 801.0, Close= 806.1, Volume= 1294407 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,19,13,0,0), Open= 805.1, High= 809.5, Low= 801.8, Close= 802.2, Volume= 919325 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,20,13,0,0), Open= 806.9, High= 806.9, Low= 801.7, Close= 805.0, Volume= 1670045 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,23,13,0,0), Open= 807.3, High= 820.9, Low= 803.7, Close= 819.3, Volume= 1963628 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,24,13,0,0), Open= 822.3, High= 825.9, Low= 817.8, Close= 823.9, Volume= 1474010 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,25,13,0,0), Open= 829.6, High= 835.8, Low= 825.1, Close= 835.7, Volume= 1627304 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,26,13,0,0), Open= 837.8, High= 838.0, Low= 827.0, Close= 832.1, Volume= 2973891 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,27,13,0,0), Open= 834.7, High= 842.0, Low= 820.4, Close= 823.3, Volume= 2965771 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,30,13,0,0), Open= 814.7, High= 815.8, Low= 799.8, Close= 802.3, Volume= 3246573 });
     //this.Add(new StockItem(){Date=new DateTime(2017,00,31,13,0,0), Open= 796.9, High= 801.3, Low= 790.5, Close= 796.8, Volume= 2160556 });
     this.Add(new StockItem(){Date=new DateTime(2017,01,01,13,0,0), Open= 799.7, High= 801.2, Low= 791.2, Close= 795.7, Volume= 2029744 });
     this.Add(new StockItem(){Date=new DateTime(2017,01,02,13,0,0), Open= 793.8, High= 802.7, Low= 792.0, Close= 798.5, Volume= 1532138 });
     this.Add(new StockItem(){Date=new DateTime(2017,01,03,13,0,0), Open= 803.0, High= 806.0, Low= 800.4, Close= 801.5, Volume= 1463448 });
     // ... 36 more items
     //this.Add(new StockItem(){Date=new DateTime(2017,02,29,13,0,0), Open= 825.0, High= 832.8, Low= 822.4, Close= 831.4, Volume= 1786321 });
     //this.Add(new StockItem(){Date=new DateTime(2017,02,30,13,0,0), Open= 833.5, High= 833.7, Low= 829.0, Close= 831.5, Volume= 1055339 });
     //this.Add(new StockItem(){Date=new DateTime(2017,02,31,13,0,0), Open= 829.0, High= 831.6, Low= 827.4, Close= 829.6, Volume= 1401893 });
     this.Add(new StockItem(){Date=new DateTime(2017,03,03,13,0,0), Open= 829.2, High= 840.9, Low= 829.2, Close= 838.5, Volume= 1671503 });
     this.Add(new StockItem(){Date=new DateTime(2017,03,04,13,0,0), Open= 831.4, High= 835.2, Low= 829.0, Close= 834.6, Volume= 1045363 });
     this.Add(new StockItem(){Date=new DateTime(2017,03,05,13,0,0), Open= 835.5, High= 842.5, Low= 830.7, Close= 831.4, Volume= 1555328 });
     // ... 37 more items
     //this.Add(new StockItem(){Date=new DateTime(2017,04,31,13,0,0), Open= 975.0, High= 979.3, Low= 960.2, Close= 964.9, Volume= 2448067 });
     this.Add(new StockItem(){Date=new DateTime(2017,05,01,13,0,0), Open= 969.0, High= 971.5, Low= 960.0, Close= 967.0, Volume= 1410458 });
     this.Add(new StockItem(){Date=new DateTime(2017,05,02,13,0,0), Open= 969.5, High= 975.9, Low= 966.0, Close= 975.6, Volume= 1750955 });
     this.Add(new StockItem(){Date=new DateTime(2017,05,05,13,0,0), Open= 976.5, High= 986.9, Low= 975.1, Close= 983.7, Volume= 1252106 });
     // ... 38 more items
     //this.Add(new StockItem(){Date=new DateTime(2017,06,31,13,0,0), Open= 941.9, High= 943.6, Low= 926.0, Close= 930.5, Volume= 1970095 });
     this.Add(new StockItem(){Date=new DateTime(2017,07,01,13,0,0), Open= 932.4, High= 937.5, Low= 929.3, Close= 930.8, Volume= 1277734 });
     this.Add(new StockItem(){Date=new DateTime(2017,07,02,13,0,0), Open= 928.6, High= 932.6, Low= 916.7, Close= 930.4, Volume= 1824448 });
     this.Add(new StockItem(){Date=new DateTime(2017,07,03,13,0,0), Open= 930.3, High= 932.2, Low= 922.2, Close= 923.6, Volume= 1202512 });
     // ... 61 more items
     //this.Add(new StockItem(){Date=new DateTime(2017,09,31,13,0,0), Open= 1015.2, High= 1024.0, Low= 1010.4, Close= 1016.6, Volume= 1331391 });
     this.Add(new StockItem(){Date=new DateTime(2017,10,01,13,0,0), Open= 1017.2, High= 1029.7, Low= 1017.0, Close= 1025.5, Volume= 1373444 });
     this.Add(new StockItem(){Date=new DateTime(2017,10,02,13,0,0), Open= 1021.8, High= 1028.1, Low= 1013.0, Close= 1025.6, Volume= 1048970 });
     this.Add(new StockItem(){Date=new DateTime(2017,10,03,13,0,0), Open= 1022.1, High= 1032.7, Low= 1020.3, Close= 1032.5, Volume= 1076350 });
     // ... 59 more items

	}
}
public class StockItem {
    public double? Open {get;set;}
    public double? Close {get;set;}
    public double? High {get;set;}
    public double? Low {get;set;}
    public double? Volume {get;set;}

    public DateTime? Date {get;set;}

  }
  //end data
```

## Blazor Data Legend Value Formatting

The [`IgbDataLegend`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html) provides automatic abbreviation of large numbers using its [`ValueFormatAbbreviation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ValueFormatAbbreviation) property. This adds a multiplier in the units column such as kilo, million, billion, etc. You can customize the number of fractional digits that are displayed by setting the [`ValueFormatMinFractions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ValueFormatMinFractions) and [`ValueFormatMaxFractions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ValueFormatMaxFractions). This will allow you to determine the minimum and maximum number of digits that appear after the decimal point, respectively.
The following example demonstrates how to use those properties:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend-title">
        Highest Grossing Movie Franchises
    </div>
    <div class="legend">
        <IgbDataLegend
        Name="legend"
        @ref="legend"
        ValueFormatMode="DataLegendValueMode.Decimal"
        ValueFormatMinFractions="1"
        UnitsText="B">
        </IgbDataLegend>

    </div>
    <div class="container vertical fill">
        <IgbCategoryChart
        Name="chart"
        @ref="chart"
        ChartType="CategoryChartType.Column"
        DataSource="HighestGrossingMovies"
        XAxisInterval="1"
        YAxisTitle="Billions of U.S. Dollars"
        YAxisTitleLeftMargin="10"
        YAxisTitleRightMargin="5"
        YAxisLabelLeftMargin="0"
        IsHorizontalZoomEnabled="false"
        IsVerticalZoomEnabled="false"
        ToolTipType="ToolTipType.None"
        CrosshairsDisplayMode="CrosshairsDisplayMode.None"
        IsCategoryHighlightingEnabled="true">
        </IgbCategoryChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;

        this.BindElements = () => {
            legend.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbDataLegend legend;
    private IgbCategoryChart chart;

    private HighestGrossingMovies _highestGrossingMovies = null;
    public HighestGrossingMovies HighestGrossingMovies
    {
        get
        {
            if (_highestGrossingMovies == null)
            {
                _highestGrossingMovies = new HighestGrossingMovies();
            }
            return _highestGrossingMovies;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class HighestGrossingMoviesItem
{
    public string Franchise { get; set; }
    public double TotalRevenue { get; set; }
    public double HighestGrossing { get; set; }
}

public class HighestGrossingMovies
    : List<HighestGrossingMoviesItem>
{
    public HighestGrossingMovies()
    {
        this.Add(new HighestGrossingMoviesItem() { Franchise = @"Marvel Universe", TotalRevenue = 22.55, HighestGrossing = 2.8 });
        this.Add(new HighestGrossingMoviesItem() { Franchise = @"Star Wars", TotalRevenue = 10.32, HighestGrossing = 2.07 });
        this.Add(new HighestGrossingMoviesItem() { Franchise = @"Harry Potter", TotalRevenue = 9.19, HighestGrossing = 1.34 });
        // ... 3 more items
    }
}
```

## Blazor Data Legend Value Mode

You have the ability to change the default decimal display of values within the [`IgbDataLegend`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html) to a currency by changing the [`ValueFormatMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ValueFormatMode) property. Also, you can change the culture of the displayed currency symbol by setting the [`ValueFormatCulture`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ValueFormatCulture) property a culture tag. For example, the following example data legend with the [`ValueFormatCulture`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ValueFormatCulture) set to "en-GB" to display British Pounds (£) symbol:

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend">
        <IgbDataLegend
        Name="legend"
        @ref="legend"
        IncludedColumns="@(new string[] { "Close", "Change", "Value" })"
        ExcludedColumns="@(new string[] { "High", "Low", "Open", "Volume" })"
        LabelDisplayMode="DataLegendLabelMode.Hidden"
        ValueFormatMode="DataLegendValueMode.Currency"
        ValueFormatCulture="en-GB">
        </IgbDataLegend>

    </div>
    <div class="container vertical fill">
        <IgbFinancialChart
        Name="chart"
        @ref="chart"
        ChartType="FinancialChartType.Candle"
        DataSource="MultipleStocks"
        DataToolTipValueFormatMode="DataLegendValueMode.Currency"
        DataToolTipValueFormatCulture="en-GB"
        DataToolTipLabelDisplayMode="DataLegendLabelMode.Hidden"
        DataToolTipIncludedColumns="@(new string[] { "Close", "Change", "Value" })"
        DataToolTipHeaderFormatTime="DataLegendHeaderTimeMode.None"
        ZoomSliderType="FinancialChartZoomSliderType.None">
        </IgbFinancialChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;

        this.BindElements = () => {
            legend.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbDataLegend legend;
    private IgbFinancialChart chart;

    private MultipleStocks _multipleStocks = null;
    public MultipleStocks MultipleStocks
    {
        get
        {
            if (_multipleStocks == null)
            {
                MultipleStocks.Fetch().ContinueWith((t) => {_multipleStocks = t.Result;  StateHasChanged(); });
            }
            return _multipleStocks;
        }
    }

}
```
```csharp
//begin async data
    using System;
    using System.Collections.Generic;
    using System.Text.Json;
    using System.Threading;
    using System.Threading.Tasks;
    using System.Net.Http;
    using System.Collections.ObjectModel;
    using IgniteUI.Blazor.Controls;

    public class MultipleStocks : List<TitledStockData>
    {
        public async static Task<MultipleStocks> Fetch()
        {
            var google = await MultipleStocks.GetGoogleStock();
            var amazon = await MultipleStocks.GetAmazonStock();

            var val = new MultipleStocks();
            val.Add(google);
            val.Add(amazon);
            return val;
        }

        /** gets Amazon stock OHLC prices from a .JSON file */
        public async static Task<TitledStockData> GetAmazonStock()
        {
            var url = "https://static.infragistics.com/xplatform/data/stocks/stockAmazon.json";
            var data = await Fetch(url);
            var stockData = ConvertData(data);
            stockData[0].Title = "Amazon";
            return stockData;
        }

        /** gets Tesla stock OHLC prices from a .JSON file */
        public async static Task<TitledStockData> GetTeslaStock()
        {
            var url = "https://static.infragistics.com/xplatform/data/stocks/stockTesla.json";
            var data = await Fetch(url);
            var stockData = ConvertData(data);
            stockData[0].Title = "Tesla";
            return stockData;
        }

        /** gets Microsoft stock OHLC prices from a .JSON file */
        public async static Task<TitledStockData> GetMicrosoftStock()
        {
            var url = "https://static.infragistics.com/xplatform/data/stocks/stockMicrosoft.json";
            var data = await Fetch(url);
            var stockData = ConvertData(data);
            stockData[0].Title = "Microsoft";
            return stockData;
        }

        /** gets Google stock OHLC prices from a .JSON file */
        public async static Task<TitledStockData> GetGoogleStock()
        {
            var url = "https://static.infragistics.com/xplatform/data/stocks/stockGoogle.json";
            var data = await Fetch(url);
            var stockData = ConvertData(data);
            stockData[0].Title = "Google";
            return stockData;
        }

        private async static Task<Dictionary<string, object>[]> Fetch(string url)
        {
            HttpClient client = new HttpClient();
            var str = await client.GetStringAsync(url);
            var arr = JsonSerializer.Deserialize<Dictionary<string, object>[]>(str);
            return arr;
        }

        public static TitledStockData ConvertData(Dictionary<string, object>[] arr)
        {
            var ret = new TitledStockData();

            foreach (var json in arr)
            {
                var date = ((JsonElement)json["date"]).GetString();
                var parts = date.Split('-'); // "2020-01-01"
                var item = new MultipleStocksItem();
                item.Date = new DateTime(int.Parse(parts[0]), int.Parse(parts[1]) + 1, int.Parse(parts[2]),12,0,0);
                item.Open = ((JsonElement)json["open"]).GetDouble();
                item.High = ((JsonElement)json["high"]).GetDouble();
                item.Low = ((JsonElement)json["low"]).GetDouble();
                item.Close = ((JsonElement)json["close"]).GetDouble();
                item.Volume = ((JsonElement)json["volume"]).GetDouble();
                ret.Add(item);
            }

            return ret;
        }
    }

    public class MultipleStocksItem
    {
        [DataSeriesMemberIntent(DataSeriesIntent.SeriesTitle)]
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public double Open { get; set; }
        public double High { get; set; }
        public double Low { get; set; }
        public double Close { get; set; }
        public double Volume { get; set; }
    }

    public class TitledStockData
        : ObservableCollection<MultipleStocksItem>
    {

    }
    //end async data
```

## Blazor Data Legend Grouping

[`DataLegendGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataLegendGroup) can be set, on all types of series, to a string that will categorize a group of series in Data Legend. Each group will have its own summary row displayed before another group of series is displayed:
By default, DataLegend will hide names of groups, but you can display group names by setting the [`GroupRowVisible`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_GroupRowVisible) property to true.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend">
        <IgbDataLegend
        Name="legend"
        @ref="legend"
        GroupRowVisible="true">
        </IgbDataLegend>

    </div>
    <div class="container vertical fill">
        <IgbDataChart
        Name="chart"
        @ref="chart">
            <IgbCategoryXAxis
            Name="xAxis"
            @ref="xAxis"
            DataSource="OlympicMedalsTopCountriesWithTotals"
            Label="Year">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis">
            </IgbNumericYAxis>

            <IgbColumnSeries
            Name="ColumnSeries1"
            @ref="columnSeries1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="OlympicMedalsTopCountriesWithTotals"
            Title="America"
            ValueMemberPath="America"
            DataLegendGroup="Medals by Country">
            </IgbColumnSeries>

            <IgbColumnSeries
            Name="ColumnSeries2"
            @ref="columnSeries2"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="OlympicMedalsTopCountriesWithTotals"
            Title="China"
            ValueMemberPath="China"
            DataLegendGroup="Medals by Country">
            </IgbColumnSeries>

            <IgbColumnSeries
            Name="ColumnSeries3"
            @ref="columnSeries3"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="OlympicMedalsTopCountriesWithTotals"
            Title="Russia"
            ValueMemberPath="Russia"
            DataLegendGroup="Medals by Country">
            </IgbColumnSeries>

        </IgbDataChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        var columnSeries1 = this.columnSeries1;
        var columnSeries2 = this.columnSeries2;
        var columnSeries3 = this.columnSeries3;

        this.BindElements = () => {
            legend.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbDataLegend legend;
    private IgbDataChart chart;
    private IgbCategoryXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbColumnSeries columnSeries1;
    private IgbColumnSeries columnSeries2;
    private IgbColumnSeries columnSeries3;

    private OlympicMedalsTopCountriesWithTotals _olympicMedalsTopCountriesWithTotals = null;
    public OlympicMedalsTopCountriesWithTotals OlympicMedalsTopCountriesWithTotals
    {
        get
        {
            if (_olympicMedalsTopCountriesWithTotals == null)
            {
                _olympicMedalsTopCountriesWithTotals = new OlympicMedalsTopCountriesWithTotals();
            }
            return _olympicMedalsTopCountriesWithTotals;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class OlympicMedalsTopCountriesWithTotalsItem
{
    public string Year { get; set; }
    public double America { get; set; }
    public double AmericaGold { get; set; }
    public double China { get; set; }
    public double ChinaGold { get; set; }
    public double Russia { get; set; }
    public double RussiaGold { get; set; }
    public double Total { get; set; }
}

public class OlympicMedalsTopCountriesWithTotals
    : List<OlympicMedalsTopCountriesWithTotalsItem>
{
    public OlympicMedalsTopCountriesWithTotals()
    {
        this.Add(new OlympicMedalsTopCountriesWithTotalsItem() { Year = @"1996", America = 148, AmericaGold = 50, China = 110, ChinaGold = 40, Russia = 95, RussiaGold = 20, Total = 353 });
        this.Add(new OlympicMedalsTopCountriesWithTotalsItem() { Year = @"2000", America = 142, AmericaGold = 40, China = 115, ChinaGold = 45, Russia = 91, RussiaGold = 40, Total = 348 });
        this.Add(new OlympicMedalsTopCountriesWithTotalsItem() { Year = @"2004", America = 134, AmericaGold = 35, China = 121, ChinaGold = 55, Russia = 86, RussiaGold = 25, Total = 341 });
        // ... 3 more items
    }
}
```

## Blazor Data Legend Styling & Events

Several properties are exposed including grouping portions of the legend.

- `GroupRowMargin`
- `GroupTextMargin`
- [`GroupTextColor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_GroupTextColor)
- `GroupTextFontSize`
- `GroupTextFontFamily`
- `GroupTextFontStyle`
- `GroupTextFontStretch`
- `GroupTextFontWeight`
- `HeaderTextMargin`
- [`HeaderTextColor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_HeaderTextColor)
- `HeaderTextFontSize`
- `HeaderTextFontFamily`
- `HeaderTextFontStyle`
- `HeaderTextFontStretch`
- `HeaderTextFontWeight`

The [`IgbDataLegend`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html) has several events that fire when rendering their corresponding row, even during mouse interactions where the values are updating. These events are listed below with a description of what they are designed to be used for:

- `StyleGroupRow`: This event fires for each group to style text displayed in group rows.
- `StyleHeaderRow`: This event fires when rendering the header row.
- `StyleSeriesRow`: This event fires once for each series row, which allows conditional styling of the values of the series.
- `StyleSeriesColumn`: This event fires once for each series column, which allows conditional styling of the different columns for the series in the chart.
- `StyleSummaryRow`: This event fires once when rendering the summary row.
- `StyleSummaryColumn`: This event fires once when rendering the summary column.

Some of the events exposes a [`IgbDataLegendStylingRowEventArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegendStylingRowEventArgs.html) parameter as its arguments, which lets you customize each item's text, text color, and the overall visibility of the row. The event arguments also expose event-specific properties. For example, since the `StyleSeriesRow` event fires for each series, the event arguments will return the series index and series title for the row that represents the series.

`StyleSummaryColumn` and `SeriesStyleColumn` events expose a [`IgbDataLegendStylingColumnEventArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegendStylingColumnEventArgs.html) parameter as its arguments, for customizing each field in the series. The event arguments also expose event-specific properties such as column index and value member related properties about the columns.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="legend">
        <IgbDataLegend
        Name="legend"
        @ref="legend"
        GroupRowVisible="true"
        GroupTextColor="purple"
        GroupTextFontSize="20"
        GroupTextFontFamily="Arial"
        GroupTextFontStyle="Italic"
        GroupTextFontWeight="Bold">
        </IgbDataLegend>

    </div>
    <div class="container vertical fill">
        <IgbDataChart
        ShouldAutoExpandMarginForInitialLabels="true"
        ComputedPlotAreaMarginMode="ComputedPlotAreaMarginMode.Series"
        Name="chart"
        @ref="chart"
        HighlightedValuesDisplayMode="SeriesHighlightedValuesDisplayMode.Overlay">
            <IgbCategoryXAxis
            Name="xAxis"
            @ref="xAxis"
            DataSource="OlympicMedalsTopCountriesWithTotals"
            Label="Year">
            </IgbCategoryXAxis>

            <IgbNumericYAxis
            Name="yAxis"
            @ref="yAxis">
            </IgbNumericYAxis>

            <IgbColumnSeries
            Name="ColumnSeries1"
            @ref="columnSeries1"
            XAxisName="xAxis"
            YAxisName="yAxis"
            DataSource="OlympicMedalsTopCountriesWithTotals"
            Title=""
            ValueMemberPath="Total"
            DataLegendGroup="Total Medals"
            HighlightedValuesDataLegendGroup="Country"
            HighlightedValueMemberPath="America"
            HighlightedTitleSuffix="America">
            </IgbColumnSeries>

            <IgbDataToolTipLayer
            Name="dataToolTipLayer"
            @ref="dataToolTipLayer"
            GroupRowVisible="true"
            GroupingMode="DataToolTipLayerGroupingMode.Grouped">
            </IgbDataToolTipLayer>

        </IgbDataChart>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var legend = this.legend;
        var chart = this.chart;
        var xAxis = this.xAxis;
        var yAxis = this.yAxis;
        var columnSeries1 = this.columnSeries1;
        var dataToolTipLayer = this.dataToolTipLayer;

        this.BindElements = () => {
            legend.Target = this.chart;
        };
        this.BindElements();

    }

    private IgbDataLegend legend;
    private IgbDataChart chart;
    private IgbCategoryXAxis xAxis;
    private IgbNumericYAxis yAxis;
    private IgbColumnSeries columnSeries1;
    private IgbDataToolTipLayer dataToolTipLayer;

    private OlympicMedalsTopCountriesWithTotals _olympicMedalsTopCountriesWithTotals = null;
    public OlympicMedalsTopCountriesWithTotals OlympicMedalsTopCountriesWithTotals
    {
        get
        {
            if (_olympicMedalsTopCountriesWithTotals == null)
            {
                _olympicMedalsTopCountriesWithTotals = new OlympicMedalsTopCountriesWithTotals();
            }
            return _olympicMedalsTopCountriesWithTotals;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class OlympicMedalsTopCountriesWithTotalsItem
{
    public string Year { get; set; }
    public double America { get; set; }
    public double AmericaGold { get; set; }
    public double China { get; set; }
    public double ChinaGold { get; set; }
    public double Russia { get; set; }
    public double RussiaGold { get; set; }
    public double Total { get; set; }
}

public class OlympicMedalsTopCountriesWithTotals
    : List<OlympicMedalsTopCountriesWithTotalsItem>
{
    public OlympicMedalsTopCountriesWithTotals()
    {
        this.Add(new OlympicMedalsTopCountriesWithTotalsItem() { Year = @"1996", America = 148, AmericaGold = 50, China = 110, ChinaGold = 40, Russia = 95, RussiaGold = 20, Total = 353 });
        this.Add(new OlympicMedalsTopCountriesWithTotalsItem() { Year = @"2000", America = 142, AmericaGold = 40, China = 115, ChinaGold = 45, Russia = 91, RussiaGold = 40, Total = 348 });
        this.Add(new OlympicMedalsTopCountriesWithTotalsItem() { Year = @"2004", America = 134, AmericaGold = 35, China = 121, ChinaGold = 55, Russia = 86, RussiaGold = 25, Total = 341 });
        // ... 3 more items
    }
}
```

## API References

- [`ExcludedColumns`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ExcludedColumns)
- [`ExcludedSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ExcludedSeries)
- [`HeaderFormatDate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_HeaderFormatDate)
- [`HeaderFormatTime`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_HeaderFormatTime)
- [`HeaderText`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_HeaderText)
- [`IncludedColumns`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_IncludedColumns)
- [`IncludedSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_IncludedSeries)
- [`LabelDisplayMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_LabelDisplayMode)
- [`LabelTextColor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegendStylingColumnEventArgs.html#IgniteUI_Blazor_Controls_IgbDataLegendStylingColumnEventArgs_LabelTextColor)
- `StyleHeaderRow`:
- `StyleSeriesColumn`:
- `StyleSeriesRow`
- `StyleSeriesRow`:
- `StyleSummaryColumn`:
- `StyleSummaryRow`:
- [`SummaryTitleText`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_SummaryTitleText)
- [`SummaryType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_SummaryType)
- [`TitleTextColor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_TitleTextColor)
- `UnitText`
- [`UnitsTextColor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegendStylingColumnEventArgs.html#IgniteUI_Blazor_Controls_IgbDataLegendStylingColumnEventArgs_UnitsTextColor)
- [`ValueFormatAbbreviation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ValueFormatAbbreviation)
- [`ValueFormatCulture`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ValueFormatCulture)
- [`ValueFormatMaxFractions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ValueFormatMaxFractions)
- [`ValueFormatMaxFractions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ValueFormatMaxFractions)
- [`ValueFormatMinFractions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ValueFormatMinFractions)
- [`ValueFormatMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegend.html#IgniteUI_Blazor_Controls_IgbDataLegend_ValueFormatMode)
- [`ValueTextColor`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataLegendStylingColumnEventArgs.html#IgniteUI_Blazor_Controls_IgbDataLegendStylingColumnEventArgs_ValueTextColor)

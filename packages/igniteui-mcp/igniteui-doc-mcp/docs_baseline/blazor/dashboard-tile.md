---
title: Blazor Dashboard Tile Component | Ignite UI for Blazor
_description: See how you can easily get started with Blazor Dashboard Tile Component.
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Dashboard components, Blazor Dashboard Tile controls
_license: commercial
mentionedTypes: ["Toolbar", "CategoryChart", "XamDataChart", "XamRadialGauge", "XamLinearGauge", "XamGeographicMap"]
_tocName: Charting in Dashboards
_premium: true
---

# Blazor Dashboard Tile <label class="badge badge--preview">PREVIEW</label>

The Blazor Dashboard Tile is a automatic data visualization component which determines via analysis of a DataSource collection/array or single data point what would be the most appropriate visualization to display. It then also provides a further suite of tools in its embedded [`IgbToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolbar.html) that let you alter the visualization that is presented in a variety of ways.

A wide variety of visualizations may be selected for display depending on the shape of the provided data including, but not limited to: Category Charts, Radial and Polar Charts, Scatter Charts, Geographic Maps, Radial and Linear Gauges, Financial Charts and Stacked Charts.

Interacting with the chart type menu in the toolbar will allow for selecting a different visualization among the list of likely candidates.

## Blazor Dashboard Tile Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical fill">
        <IgbDashboardTile
        Name="dashboard"
        @ref="dashboard"
        DataSource="RetailSalesPerformanceLocalDataSource">
        </IgbDashboardTile>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var dashboard = this.dashboard;

    }

    private IgbDashboardTile dashboard;

    private RetailSalesPerformanceLocalDataSource _retailSalesPerformanceLocalDataSource = null;
    public RetailSalesPerformanceLocalDataSource RetailSalesPerformanceLocalDataSource
    {
        get
        {
            if (_retailSalesPerformanceLocalDataSource == null)
            {
                _retailSalesPerformanceLocalDataSource = new RetailSalesPerformanceLocalDataSource();
            }
            return _retailSalesPerformanceLocalDataSource;
        }
    }

}
```
```csharp
//begin data
    using System;
    using System.Collections.Generic;
    using System.Text.Json;
    using System.Collections.ObjectModel;
    using IgniteUI.Blazor.Controls;

    public class RetailSalesPerformanceLocalDataSource : IgbLocalDataSource
    {

        public RetailSalesPerformanceLocalDataSource(){

			      List<RetailSalesPerformanceDataItem> data = new List<RetailSalesPerformanceDataItem>();

            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Cleaning",
                Product = "Vacuum A",
                Sales = 694,
                Revenue = 528828,
                Profit = 105765.6
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Cleaning",
                Product = "Mop B",
                Sales = 675,
                Revenue = 382050,
                Profit = 76410.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Laptops",
                Product = "Laptop C",
                Sales = 671,
                Revenue = 504592,
                Profit = 100918.40000000001
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Bedroom",
                Product = "Wardrobe B",
                Sales = 212,
                Revenue = 54060,
                Profit = 10812.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Kitchen",
                Product = "Blender A",
                Sales = 181,
                Revenue = 79821,
                Profit = 15964.2
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Bedroom",
                Product = "Dresser C",
                Sales = 434,
                Revenue = 148428,
                Profit = 29685.600000000002
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Office",
                Product = "Desk A",
                Sales = 441,
                Revenue = 244314,
                Profit = 48862.8
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Bedroom",
                Product = "Dresser C",
                Sales = 429,
                Revenue = 167739,
                Profit = 33547.8
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Office",
                Product = "Desk A",
                Sales = 537,
                Revenue = 516594,
                Profit = 103318.8
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Cleaning",
                Product = "Broom C",
                Sales = 439,
                Revenue = 340225,
                Profit = 68045.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Laundry",
                Product = "Dryer B",
                Sales = 338,
                Revenue = 176774,
                Profit = 35354.8
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Laundry",
                Product = "Iron C",
                Sales = 510,
                Revenue = 380460,
                Profit = 76092.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Mobile Phones",
                Product = "Smartphone A",
                Sales = 882,
                Revenue = 480690,
                Profit = 96138.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Kitchen",
                Product = "Microwave B",
                Sales = 504,
                Revenue = 195048,
                Profit = 39009.6
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Office",
                Product = "Desk A",
                Sales = 633,
                Revenue = 243072,
                Profit = 48614.4
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Cleaning",
                Product = "Broom C",
                Sales = 772,
                Revenue = 470148,
                Profit = 94029.6
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Tablets",
                Product = "Tablet B",
                Sales = 910,
                Revenue = 413140,
                Profit = 82628.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Bedroom",
                Product = "Dresser C",
                Sales = 53,
                Revenue = 48813,
                Profit = 9762.6
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Mobile Phones",
                Product = "Smartphone C",
                Sales = 741,
                Revenue = 259350,
                Profit = 51870.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Cleaning",
                Product = "Vacuum A",
                Sales = 944,
                Revenue = 607936,
                Profit = 121587.20000000001
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Kitchen",
                Product = "Toaster C",
                Sales = 644,
                Revenue = 293020,
                Profit = 58604.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Tablets",
                Product = "Tablet B",
                Sales = 692,
                Revenue = 405512,
                Profit = 81102.40000000001
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Living Room",
                Product = "Coffee Table B",
                Sales = 378,
                Revenue = 300888,
                Profit = 60177.600000000006
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Bedroom",
                Product = "Bed A",
                Sales = 717,
                Revenue = 205779,
                Profit = 41155.8
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Laundry",
                Product = "Washing Machine",
                Sales = 399,
                Revenue = 83391,
                Profit = 16678.2
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Laundry",
                Product = "Dryer B",
                Sales = 107,
                Revenue = 55533,
                Profit = 11106.6
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Mobile Phones",
                Product = "Smartphone A",
                Sales = 853,
                Revenue = 512653,
                Profit = 102530.6
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Kitchen",
                Product = "Toaster C",
                Sales = 830,
                Revenue = 392590,
                Profit = 78518.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Mobile Phones",
                Product = "Smartphone C",
                Sales = 527,
                Revenue = 463760,
                Profit = 92752.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Kitchen",
                Product = "Toaster C",
                Sales = 847,
                Revenue = 579348,
                Profit = 115869.6
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Living Room",
                Product = "TV Stand C",
                Sales = 692,
                Revenue = 382676,
                Profit = 76535.2
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Laptops",
                Product = "Laptop A",
                Sales = 799,
                Revenue = 288439,
                Profit = 57687.8
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Living Room",
                Product = "Coffee Table B",
                Sales = 764,
                Revenue = 374360,
                Profit = 74872.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Living Room",
                Product = "TV Stand C",
                Sales = 263,
                Revenue = 88894,
                Profit = 17778.8
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Bedroom",
                Product = "Bed A",
                Sales = 784,
                Revenue = 254800,
                Profit = 50960.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Laundry",
                Product = "Dryer B",
                Sales = 958,
                Revenue = 695508,
                Profit = 139101.6
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Laptops",
                Product = "Laptop B",
                Sales = 528,
                Revenue = 209616,
                Profit = 41923.200000000004
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Laptops",
                Product = "Laptop B",
                Sales = 499,
                Revenue = 257983,
                Profit = 51596.600000000006
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Office",
                Product = "Bookshelf C",
                Sales = 385,
                Revenue = 346500,
                Profit = 69300.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Mobile Phones",
                Product = "Smartphone A",
                Sales = 388,
                Revenue = 84972,
                Profit = 16994.4
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Laundry",
                Product = "Dryer B",
                Sales = 347,
                Revenue = 99936,
                Profit = 19987.2
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Office",
                Product = "Bookshelf C",
                Sales = 337,
                Revenue = 252413,
                Profit = 50482.600000000006
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Laptops",
                Product = "Laptop B",
                Sales = 985,
                Revenue = 246250,
                Profit = 49250.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Living Room",
                Product = "TV Stand C",
                Sales = 881,
                Revenue = 870428,
                Profit = 174085.6
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Bedroom",
                Product = "Wardrobe B",
                Sales = 508,
                Revenue = 325628,
                Profit = 65125.600000000006
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Office",
                Product = "Chair B",
                Sales = 87,
                Revenue = 85347,
                Profit = 17069.4
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Bedroom",
                Product = "Dresser C",
                Sales = 86,
                Revenue = 50740,
                Profit = 10148.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Laptops",
                Product = "Laptop B",
                Sales = 699,
                Revenue = 320142,
                Profit = 64028.4
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Cleaning",
                Product = "Vacuum A",
                Sales = 57,
                Revenue = 12483,
                Profit = 2496.6000000000004
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Tablets",
                Product = "Tablet C",
                Sales = 65,
                Revenue = 15860,
                Profit = 3172.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Living Room",
                Product = "Sofa A",
                Sales = 67,
                Revenue = 39396,
                Profit = 7879.200000000001
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Living Room",
                Product = "Sofa A",
                Sales = 835,
                Revenue = 617065,
                Profit = 123413.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Bedroom",
                Product = "Wardrobe B",
                Sales = 333,
                Revenue = 115884,
                Profit = 23176.800000000003
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Laptops",
                Product = "Laptop A",
                Sales = 802,
                Revenue = 737840,
                Profit = 147568.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Living Room",
                Product = "Sofa A",
                Sales = 483,
                Revenue = 318780,
                Profit = 63756.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Cleaning",
                Product = "Vacuum A",
                Sales = 586,
                Revenue = 395550,
                Profit = 79110.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Living Room",
                Product = "TV Stand C",
                Sales = 971,
                Revenue = 208765,
                Profit = 41753.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Bedroom",
                Product = "Wardrobe B",
                Sales = 464,
                Revenue = 409248,
                Profit = 81849.6
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Tablets",
                Product = "Tablet A",
                Sales = 933,
                Revenue = 880752,
                Profit = 176150.40000000002
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Laundry",
                Product = "Washing Machine",
                Sales = 812,
                Revenue = 614684,
                Profit = 122936.8
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Living Room",
                Product = "Coffee Table B",
                Sales = 499,
                Revenue = 398202,
                Profit = 79640.40000000001
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Laundry",
                Product = "Dryer B",
                Sales = 376,
                Revenue = 344040,
                Profit = 68808.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Tablets",
                Product = "Tablet A",
                Sales = 368,
                Revenue = 354384,
                Profit = 70876.8
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Cleaning",
                Product = "Broom C",
                Sales = 539,
                Revenue = 446831,
                Profit = 89366.20000000001
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Living Room",
                Product = "Sofa A",
                Sales = 954,
                Revenue = 221328,
                Profit = 44265.600000000006
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Tablets",
                Product = "Tablet A",
                Sales = 118,
                Revenue = 69856,
                Profit = 13971.2
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Laundry",
                Product = "Washing Machine",
                Sales = 839,
                Revenue = 315464,
                Profit = 63092.8
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Cleaning",
                Product = "Broom C",
                Sales = 207,
                Revenue = 42435,
                Profit = 8487.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Office",
                Product = "Chair B",
                Sales = 604,
                Revenue = 197508,
                Profit = 39501.600000000006
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Office",
                Product = "Bookshelf C",
                Sales = 187,
                Revenue = 171479,
                Profit = 34295.8
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Cleaning",
                Product = "Vacuum A",
                Sales = 709,
                Revenue = 627465,
                Profit = 125493.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Mobile Phones",
                Product = "Smartphone B",
                Sales = 197,
                Revenue = 51811,
                Profit = 10362.2
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Cleaning",
                Product = "Vacuum A",
                Sales = 374,
                Revenue = 147356,
                Profit = 29471.2
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Cleaning",
                Product = "Mop B",
                Sales = 340,
                Revenue = 82280,
                Profit = 16456.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Mobile Phones",
                Product = "Smartphone C",
                Sales = 538,
                Revenue = 432014,
                Profit = 86402.8
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Bedroom",
                Product = "Bed A",
                Sales = 270,
                Revenue = 126900,
                Profit = 25380.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Cleaning",
                Product = "Vacuum A",
                Sales = 161,
                Revenue = 106743,
                Profit = 21348.600000000002
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Laundry",
                Product = "Washing Machine",
                Sales = 571,
                Revenue = 367724,
                Profit = 73544.8
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Kitchen",
                Product = "Toaster C",
                Sales = 425,
                Revenue = 308975,
                Profit = 61795.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Office",
                Product = "Bookshelf C",
                Sales = 100,
                Revenue = 37200,
                Profit = 7440.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Living Room",
                Product = "Sofa A",
                Sales = 1000,
                Revenue = 886000,
                Profit = 177200.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Mobile Phones",
                Product = "Smartphone A",
                Sales = 202,
                Revenue = 107464,
                Profit = 21492.800000000003
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Kitchen",
                Product = "Microwave B",
                Sales = 877,
                Revenue = 182416,
                Profit = 36483.200000000004
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Tablets",
                Product = "Tablet A",
                Sales = 401,
                Revenue = 247818,
                Profit = 49563.600000000006
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Bedroom",
                Product = "Wardrobe B",
                Sales = 830,
                Revenue = 528710,
                Profit = 105742.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Tablets",
                Product = "Tablet C",
                Sales = 547,
                Revenue = 136203,
                Profit = 27240.600000000002
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Laptops",
                Product = "Laptop B",
                Sales = 539,
                Revenue = 343882,
                Profit = 68776.40000000001
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Kitchen",
                Product = "Microwave B",
                Sales = 334,
                Revenue = 164996,
                Profit = 32999.200000000004
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Living Room",
                Product = "TV Stand C",
                Sales = 232,
                Revenue = 180960,
                Profit = 36192.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Tablets",
                Product = "Tablet C",
                Sales = 448,
                Revenue = 351680,
                Profit = 70336.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Mobile Phones",
                Product = "Smartphone B",
                Sales = 387,
                Revenue = 279801,
                Profit = 55960.200000000004
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Cleaning",
                Product = "Mop B",
                Sales = 69,
                Revenue = 49473,
                Profit = 9894.6
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Kitchen",
                Product = "Toaster C",
                Sales = 859,
                Revenue = 359921,
                Profit = 71984.2
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Office",
                Product = "Chair B",
                Sales = 322,
                Revenue = 112056,
                Profit = 22411.2
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Tablets",
                Product = "Tablet A",
                Sales = 143,
                Revenue = 54912,
                Profit = 10982.400000000001
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Laptops",
                Product = "Laptop B",
                Sales = 844,
                Revenue = 642284,
                Profit = 128456.8
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Laptops",
                Product = "Laptop A",
                Sales = 735,
                Revenue = 386610,
                Profit = 77322.0
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Electronics",
                Subcategory = "Mobile Phones",
                Product = "Smartphone A",
                Sales = 431,
                Revenue = 125852,
                Profit = 25170.4
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Furniture",
                Subcategory = "Living Room",
                Product = "Sofa A",
                Sales = 926,
                Revenue = 623198,
                Profit = 124639.6
            });
            data.Add(new RetailSalesPerformanceDataItem()
            {
                Category = "Home Appliances",
                Subcategory = "Cleaning",
                Product = "Broom C",
                Sales = 117,
                Revenue = 50193,
                Profit = 10038.6
            });

		this.DataSource = data;

		}
    }

        public class RetailSalesPerformanceDataItem
    {
        public string Category { get; set; }
        public string Subcategory { get; set; }
        public string Product { get; set; }
        public int Sales { get; set; }
        public double Revenue { get; set; }
        public double Profit { get; set; }
    }

    //end data
```


## Dependencies

Add the **IgniteUI.Blazor.Controls** namespace in the **\_Imports.razor** file:

```razor
@using IgniteUI.Blazor.Controls
```

The following modules are suggested when using the Dashboard Tile component:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(
    typeof(IgbDataChartDashboardTileModule),
    typeof(IgbRadialGaugeDashboardTileModule),
    typeof(IgbLinearGaugeDashboardTileModule),
    typeof(IgbGeographicMapDashboardTileModule),
    typeof(IgbPieChartDashboardTileModule),
    typeof(IgbDashboardTileModule)
);
```

## Usage

Depending on what you bind the Dashboard Tile's `DataSource` property to will determine which visualization you see by default, as the control will evaluate the data you bind and then choose a visualization from the Ignite UI for Blazor toolset to show. The data visualization controls that are included to be shown in the Dashboard Tile are the following:

- [IgbCategoryChart](charts/chart-overview.md)
- [IgbDataChart](charts/chart-overview.md)
- [IgbDataPieChart](charts/types/data-pie-chart.md)
- [IgbGeographicMap](geo-map.md)
- [IgbLinear Gauge](linear-gauge.md)
- [IgbRadialGauge](radial-gauge.md)

The data visualization that is chosen by default is mainly dependent on the schema and the count of the `DataSource` that you have bound. For example, if you bind a single numeric value, you will get a [`IgbRadialGauge`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html), but if you bind a collection of value-label pairs that are easy to distinguish from each other, you will likely get a `XamDataPieChart`. If you bind an `DataSource` that has more value paths, you will receive a [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html) with multiple column series or line series, depending mainly on the count of the collection bound. You can also bind to a `ShapeDataSource` or data the appears to contain geographic points to receive a [`IgbGeographicMap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html).

You are not locked into a single visualization when you bind the `DataSource`, and you can tell the control that you want to see a particular visualization by setting its `VisualizationType` property. For example, if you specifically wanted to see a line chart, you could define the Dashboard Tile like so:

<!-- TODO SAMPLE -->

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical fill">
        <IgbDashboardTile
        TileTitle="Sample Gauge"
        Name="dashboard"
        @ref="dashboard"
        DataSource="DashboardGaugeDataSource">
        </IgbDashboardTile>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var dashboard = this.dashboard;

    }

    private IgbDashboardTile dashboard;

    private DashboardGaugeDataSource _dashboardGaugeDataSource = null;
    public DashboardGaugeDataSource DashboardGaugeDataSource
    {
        get
        {
            if (_dashboardGaugeDataSource == null)
            {
                _dashboardGaugeDataSource = new DashboardGaugeDataSource();
            }
            return _dashboardGaugeDataSource;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class DashboardGaugeDataSourceItem
{
    public double Value { get; set; }
}

public class DashboardGaugeDataSource
    : List<DashboardGaugeDataSourceItem>
{
    public DashboardGaugeDataSource()
    {
        this.Add(new DashboardGaugeDataSourceItem() { Value = 40 });
    }
}
```


The visualization or properties of the visualization are also configurable using the [`IgbToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolbar.html) at the top of the control. This [`IgbToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolbar.html) has the default tools for the current visualization with the addition of four Dashboard Tile specific ones, highlighted below:

<img src="../images/dashboard-tile-toolbar.png" alt="Dashboard Tile Toolbar"/>

From left to right:

- The first tool will show a data grid with the `DataSource` provided to the control. This is a toggle tool, so if you click it again after showing the grid, it will revert to the visualization.
- The second tool allows you to configure the settings of the current data visualization.
- The third tool allows you to change the current visualization, allowing you to plot a different series type or show a different type of visualization altogether. This can be set on the control by setting the `VisualizationType` property, mentioned above.
- The last tool allows you to configure which properties on your underlying data item are included for the control. You can configure this by setting the [`IncludedProperties`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_IncludedProperties) or [`ExcludedProperties`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDomainChart.html#IgniteUI_Blazor_Controls_IgbDomainChart_ExcludedProperties) collection on the control.

This demo demonstrates dashboard tile integration with the Blazor Pie Chart. The toolbar options at the top right provides access to styling and changing the data visualization.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical fill">
        <IgbDashboardTile
        Name="dashboard"
        @ref="dashboard"
        DataSource="EnergyGlobalDemand">
        </IgbDashboardTile>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var dashboard = this.dashboard;

    }

    private IgbDashboardTile dashboard;

    private EnergyGlobalDemand _energyGlobalDemand = null;
    public EnergyGlobalDemand EnergyGlobalDemand
    {
        get
        {
            if (_energyGlobalDemand == null)
            {
                _energyGlobalDemand = new EnergyGlobalDemand();
            }
            return _energyGlobalDemand;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EnergyGlobalDemandItem
{
    public double Value { get; set; }
    public string Category { get; set; }
    public string Summary { get; set; }
}

public class EnergyGlobalDemand
    : List<EnergyGlobalDemandItem>
{
    public EnergyGlobalDemand()
    {
        this.Add(new EnergyGlobalDemandItem() { Value = 37, Category = @"Cooling", Summary = @"Cooling 37%" });
        this.Add(new EnergyGlobalDemandItem() { Value = 25, Category = @"Residential", Summary = @"Residential 25%" });
        this.Add(new EnergyGlobalDemandItem() { Value = 12, Category = @"Heating", Summary = @"Heating 12%" });
        // ... 2 more items
    }
}
```


This demo demonstrates dashboard tile integration with the Blazor Geographic Map. The toolbar options at the top right provides access to styling and changing the data visualization.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical fill">
        <IgbDashboardTile
        Name="dashboard"
        @ref="dashboard"
        TileTitle="World Cities"
        DataSource="WorldCities">
        </IgbDashboardTile>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var dashboard = this.dashboard;

    }

    private IgbDashboardTile dashboard;

    private WorldCities _worldCities = null;
    public WorldCities WorldCities
    {
        get
        {
            if (_worldCities == null)
            {
                _worldCities = new WorldCities();
            }
            return _worldCities;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class WorldCitiesItem
{
    public bool Capital { get; set; }
    public double Population { get; set; }
    public double Y { get; set; }
    public double X { get; set; }
    public string Country { get; set; }
    public string Name { get; set; }
}

public class WorldCities
    : List<WorldCitiesItem>
{
    public WorldCities()
    {
        this.Add(new WorldCitiesItem() { Capital = true, Population = 23.62, Y = 35.68, X = 139.81, Country = @"Japan", Name = @"Tokyo" });
        this.Add(new WorldCitiesItem() { Capital = false, Population = 16.47, Y = 40.75, X = -74.1, Country = @"US", Name = @"New York" });
        this.Add(new WorldCitiesItem() { Capital = true, Population = 15.85, Y = 37.54, X = 126.94, Country = @"South Korea", Name = @"Seoul" });
        // ... 603 more items
    }
}
```


## API References

- [`IgbToolbar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToolbar.html)
- [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html)
- [`IgbDataChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataChart.html)
- [`IgbDataPieChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataPieChart.html)
- [`IgbGeographicMap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html)
- [`IgbLinearGauge`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearGauge.html)
- [`IgbRadialGauge`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadialGauge.html)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

---
title: React Dashboard Tile Component | Ignite UI for React
_description: See how you can easily get started with React Dashboard Tile Component.
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Dashboard components, React Dashboard Tile controls
_license: commercial
mentionedTypes: ["Toolbar", "CategoryChart", "XamDataChart", "XamRadialGauge", "XamLinearGauge", "XamGeographicMap"]
_tocName: Charting in Dashboards
_premium: true
---

# React Dashboard Tile <label class="badge badge--preview">PREVIEW</label>

The React Dashboard Tile is a automatic data visualization component which determines via analysis of a DataSource collection/array or single data point what would be the most appropriate visualization to display. It then also provides a further suite of tools in its embedded [`IgrToolbar`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolbar.html) that let you alter the visualization that is presented in a variety of ways.

A wide variety of visualizations may be selected for display depending on the shape of the provided data including, but not limited to: Category Charts, Radial and Polar Charts, Scatter Charts, Geographic Maps, Radial and Linear Gauges, Financial Charts and Stacked Charts.

Interacting with the chart type menu in the toolbar will allow for selecting a different visualization among the list of likely candidates.

## React Dashboard Tile Example

```typescript
//begin data

import { LocalDataSource } from "igniteui-react-core";

export class RetailSalesPerformanceLocalDataSource extends LocalDataSource {

  public constructor() {
    super();

    var data = [
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Vacuum A",
        "UnitSales": 694,
        "Revenue": 528828,
        "Profit": 105765.6
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Mop B",
        "UnitSales": 675,
        "Revenue": 382050,
        "Profit": 76410.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop C",
        "UnitSales": 671,
        "Revenue": 504592,
        "Profit": 100918.40000000001
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Wardrobe B",
        "UnitSales": 212,
        "Revenue": 54060,
        "Profit": 10812.0
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Kitchen",
        "Product": "Blender A",
        "UnitSales": 181,
        "Revenue": 79821,
        "Profit": 15964.2
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Dresser C",
        "UnitSales": 434,
        "Revenue": 148428,
        "Profit": 29685.600000000002
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Desk A",
        "UnitSales": 441,
        "Revenue": 244314,
        "Profit": 48862.8
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Dresser C",
        "UnitSales": 429,
        "Revenue": 167739,
        "Profit": 33547.8
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Desk A",
        "UnitSales": 537,
        "Revenue": 516594,
        "Profit": 103318.8
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Broom C",
        "UnitSales": 439,
        "Revenue": 340225,
        "Profit": 68045.0
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Dryer B",
        "UnitSales": 338,
        "Revenue": 176774,
        "Profit": 35354.8
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Iron C",
        "UnitSales": 510,
        "Revenue": 380460,
        "Profit": 76092.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone A",
        "UnitSales": 882,
        "Revenue": 480690,
        "Profit": 96138.0
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Kitchen",
        "Product": "Microwave B",
        "UnitSales": 504,
        "Revenue": 195048,
        "Profit": 39009.6
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Desk A",
        "UnitSales": 633,
        "Revenue": 243072,
        "Profit": 48614.4
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Broom C",
        "UnitSales": 772,
        "Revenue": 470148,
        "Profit": 94029.6
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet B",
        "UnitSales": 910,
        "Revenue": 413140,
        "Profit": 82628.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Dresser C",
        "UnitSales": 53,
        "Revenue": 48813,
        "Profit": 9762.6
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone C",
        "UnitSales": 741,
        "Revenue": 259350,
        "Profit": 51870.0
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Vacuum A",
        "UnitSales": 944,
        "Revenue": 607936,
        "Profit": 121587.20000000001
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Kitchen",
        "Product": "Toaster C",
        "UnitSales": 644,
        "Revenue": 293020,
        "Profit": 58604.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet B",
        "UnitSales": 692,
        "Revenue": 405512,
        "Profit": 81102.40000000001
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "Coffee Table B",
        "UnitSales": 378,
        "Revenue": 300888,
        "Profit": 60177.600000000006
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Bed A",
        "UnitSales": 717,
        "Revenue": 205779,
        "Profit": 41155.8
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Washing Machine",
        "UnitSales": 399,
        "Revenue": 83391,
        "Profit": 16678.2
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Dryer B",
        "UnitSales": 107,
        "Revenue": 55533,
        "Profit": 11106.6
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone A",
        "UnitSales": 853,
        "Revenue": 512653,
        "Profit": 102530.6
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Kitchen",
        "Product": "Toaster C",
        "UnitSales": 830,
        "Revenue": 392590,
        "Profit": 78518.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone C",
        "UnitSales": 527,
        "Revenue": 463760,
        "Profit": 92752.0
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Kitchen",
        "Product": "Toaster C",
        "UnitSales": 847,
        "Revenue": 579348,
        "Profit": 115869.6
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "TV Stand C",
        "UnitSales": 692,
        "Revenue": 382676,
        "Profit": 76535.2
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop A",
        "UnitSales": 799,
        "Revenue": 288439,
        "Profit": 57687.8
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "Coffee Table B",
        "UnitSales": 764,
        "Revenue": 374360,
        "Profit": 74872.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "TV Stand C",
        "UnitSales": 263,
        "Revenue": 88894,
        "Profit": 17778.8
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Bed A",
        "UnitSales": 784,
        "Revenue": 254800,
        "Profit": 50960.0
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Dryer B",
        "UnitSales": 958,
        "Revenue": 695508,
        "Profit": 139101.6
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop B",
        "UnitSales": 528,
        "Revenue": 209616,
        "Profit": 41923.200000000004
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop B",
        "UnitSales": 499,
        "Revenue": 257983,
        "Profit": 51596.600000000006
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Bookshelf C",
        "UnitSales": 385,
        "Revenue": 346500,
        "Profit": 69300.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone A",
        "UnitSales": 388,
        "Revenue": 84972,
        "Profit": 16994.4
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Dryer B",
        "UnitSales": 347,
        "Revenue": 99936,
        "Profit": 19987.2
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Bookshelf C",
        "UnitSales": 337,
        "Revenue": 252413,
        "Profit": 50482.600000000006
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop B",
        "UnitSales": 985,
        "Revenue": 246250,
        "Profit": 49250.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "TV Stand C",
        "UnitSales": 881,
        "Revenue": 870428,
        "Profit": 174085.6
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Wardrobe B",
        "UnitSales": 508,
        "Revenue": 325628,
        "Profit": 65125.600000000006
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Chair B",
        "UnitSales": 87,
        "Revenue": 85347,
        "Profit": 17069.4
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Dresser C",
        "UnitSales": 86,
        "Revenue": 50740,
        "Profit": 10148.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop B",
        "UnitSales": 699,
        "Revenue": 320142,
        "Profit": 64028.4
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Vacuum A",
        "UnitSales": 57,
        "Revenue": 12483,
        "Profit": 2496.6000000000004
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet C",
        "UnitSales": 65,
        "Revenue": 15860,
        "Profit": 3172.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "Sofa A",
        "UnitSales": 67,
        "Revenue": 39396,
        "Profit": 7879.200000000001
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "Sofa A",
        "UnitSales": 835,
        "Revenue": 617065,
        "Profit": 123413.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Wardrobe B",
        "UnitSales": 333,
        "Revenue": 115884,
        "Profit": 23176.800000000003
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop A",
        "UnitSales": 802,
        "Revenue": 737840,
        "Profit": 147568.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "Sofa A",
        "UnitSales": 483,
        "Revenue": 318780,
        "Profit": 63756.0
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Vacuum A",
        "UnitSales": 586,
        "Revenue": 395550,
        "Profit": 79110.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "TV Stand C",
        "UnitSales": 971,
        "Revenue": 208765,
        "Profit": 41753.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Wardrobe B",
        "UnitSales": 464,
        "Revenue": 409248,
        "Profit": 81849.6
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet A",
        "UnitSales": 933,
        "Revenue": 880752,
        "Profit": 176150.40000000002
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Washing Machine",
        "UnitSales": 812,
        "Revenue": 614684,
        "Profit": 122936.8
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "Coffee Table B",
        "UnitSales": 499,
        "Revenue": 398202,
        "Profit": 79640.40000000001
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Dryer B",
        "UnitSales": 376,
        "Revenue": 344040,
        "Profit": 68808.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet A",
        "UnitSales": 368,
        "Revenue": 354384,
        "Profit": 70876.8
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Broom C",
        "UnitSales": 539,
        "Revenue": 446831,
        "Profit": 89366.20000000001
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "Sofa A",
        "UnitSales": 954,
        "Revenue": 221328,
        "Profit": 44265.600000000006
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet A",
        "UnitSales": 118,
        "Revenue": 69856,
        "Profit": 13971.2
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Washing Machine",
        "UnitSales": 839,
        "Revenue": 315464,
        "Profit": 63092.8
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Broom C",
        "UnitSales": 207,
        "Revenue": 42435,
        "Profit": 8487.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Chair B",
        "UnitSales": 604,
        "Revenue": 197508,
        "Profit": 39501.600000000006
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Bookshelf C",
        "UnitSales": 187,
        "Revenue": 171479,
        "Profit": 34295.8
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Vacuum A",
        "UnitSales": 709,
        "Revenue": 627465,
        "Profit": 125493.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone B",
        "UnitSales": 197,
        "Revenue": 51811,
        "Profit": 10362.2
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Vacuum A",
        "UnitSales": 374,
        "Revenue": 147356,
        "Profit": 29471.2
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Mop B",
        "UnitSales": 340,
        "Revenue": 82280,
        "Profit": 16456.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone C",
        "UnitSales": 538,
        "Revenue": 432014,
        "Profit": 86402.8
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Bed A",
        "UnitSales": 270,
        "Revenue": 126900,
        "Profit": 25380.0
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Vacuum A",
        "UnitSales": 161,
        "Revenue": 106743,
        "Profit": 21348.600000000002
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Laundry",
        "Product": "Washing Machine",
        "UnitSales": 571,
        "Revenue": 367724,
        "Profit": 73544.8
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Kitchen",
        "Product": "Toaster C",
        "UnitSales": 425,
        "Revenue": 308975,
        "Profit": 61795.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Bookshelf C",
        "UnitSales": 100,
        "Revenue": 37200,
        "Profit": 7440.0
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "Sofa A",
        "UnitSales": 1000,
        "Revenue": 886000,
        "Profit": 177200.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone A",
        "UnitSales": 202,
        "Revenue": 107464,
        "Profit": 21492.800000000003
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Kitchen",
        "Product": "Microwave B",
        "UnitSales": 877,
        "Revenue": 182416,
        "Profit": 36483.200000000004
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet A",
        "UnitSales": 401,
        "Revenue": 247818,
        "Profit": 49563.600000000006
      },
      {
        "Category": "Furniture",
        "Subcategory": "Bedroom",
        "Product": "Wardrobe B",
        "UnitSales": 830,
        "Revenue": 528710,
        "Profit": 105742.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet C",
        "UnitSales": 547,
        "Revenue": 136203,
        "Profit": 27240.600000000002
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop B",
        "UnitSales": 539,
        "Revenue": 343882,
        "Profit": 68776.40000000001
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Kitchen",
        "Product": "Microwave B",
        "UnitSales": 334,
        "Revenue": 164996,
        "Profit": 32999.200000000004
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "TV Stand C",
        "UnitSales": 232,
        "Revenue": 180960,
        "Profit": 36192.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet C",
        "UnitSales": 448,
        "Revenue": 351680,
        "Profit": 70336.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone B",
        "UnitSales": 387,
        "Revenue": 279801,
        "Profit": 55960.200000000004
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Mop B",
        "UnitSales": 69,
        "Revenue": 49473,
        "Profit": 9894.6
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Kitchen",
        "Product": "Toaster C",
        "UnitSales": 859,
        "Revenue": 359921,
        "Profit": 71984.2
      },
      {
        "Category": "Furniture",
        "Subcategory": "Office",
        "Product": "Chair B",
        "UnitSales": 322,
        "Revenue": 112056,
        "Profit": 22411.2
      },
      {
        "Category": "Electronics",
        "Subcategory": "Tablets",
        "Product": "Tablet A",
        "UnitSales": 143,
        "Revenue": 54912,
        "Profit": 10982.400000000001
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop B",
        "UnitSales": 844,
        "Revenue": 642284,
        "Profit": 128456.8
      },
      {
        "Category": "Electronics",
        "Subcategory": "Laptops",
        "Product": "Laptop A",
        "UnitSales": 735,
        "Revenue": 386610,
        "Profit": 77322.0
      },
      {
        "Category": "Electronics",
        "Subcategory": "Mobile Phones",
        "Product": "Smartphone A",
        "UnitSales": 431,
        "Revenue": 125852,
        "Profit": 25170.4
      },
      {
        "Category": "Furniture",
        "Subcategory": "Living Room",
        "Product": "Sofa A",
        "UnitSales": 926,
        "Revenue": 623198,
        "Profit": 124639.6
      },
      {
        "Category": "Home Appliances",
        "Subcategory": "Cleaning",
        "Product": "Broom C",
        "UnitSales": 117,
        "Revenue": 50193,
        "Profit": 10038.6
      }
    ];

    this.dataSource = data;
  }

}

//end data
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDashboardTileModule, IgrDataChartDashboardTileModule, IgrGeographicMapDashboardTileModule, IgrLinearGaugeDashboardTileModule, IgrPieChartDashboardTileModule, IgrRadialGaugeDashboardTileModule } from 'igniteui-react-dashboards';
import { IgrDashboardTile } from 'igniteui-react-dashboards';
import { RetailSalesPerformanceLocalDataSource } from './RetailSalesPerformanceLocalDataSource';

const mods: any[] = [
    IgrDashboardTileModule,
    IgrDataChartDashboardTileModule,
    IgrGeographicMapDashboardTileModule,
    IgrLinearGaugeDashboardTileModule,
    IgrPieChartDashboardTileModule,
    IgrRadialGaugeDashboardTileModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private dashboard: IgrDashboardTile
    private dashboardRef(r: IgrDashboardTile) {
        this.dashboard = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.dashboardRef = this.dashboardRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDashboardTile
                    ref={this.dashboardRef}
                    dataSource={this.retailSalesPerformanceLocalDataSource}>
                </IgrDashboardTile>
            </div>
        </div>
        );
    }

    private _retailSalesPerformanceLocalDataSource: RetailSalesPerformanceLocalDataSource = null;
    public get retailSalesPerformanceLocalDataSource(): RetailSalesPerformanceLocalDataSource {
        if (this._retailSalesPerformanceLocalDataSource == null)
        {
            this._retailSalesPerformanceLocalDataSource = new RetailSalesPerformanceLocalDataSource();
        }
        return this._retailSalesPerformanceLocalDataSource;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Dependencies

<!-- Angular, WebComponents, React -->

Install the following packages in the Ignite UI for React toolset:

```cmd
npm install igniteui-react-charts
npm install igniteui-react-core
npm install igniteui-react-dashboards
npm install igniteui-react-gauges
npm install igniteui-react-data-grids
npm install igniteui-react-inputs
npm install igniteui-react-layouts
npm install igniteui-react-maps
```

The following modules are suggested when using the Dashboard Tile component:

```ts
import { IgrDashboardTileModule, IgrDataChartDashboardTileModule, IgrRadialGaugeDashboardTileModule,
         IgrLinearGaugeDashboardTileModule, IgrGeographicMapDashboardTileModule,
         IgrPieChartDashboardTileModule } from "igniteui-react-dashboards";

IgrDataChartDashboardTileModule.register();
IgrRadialGaugeDashboardTileModule.register();
IgrLinearGaugeDashboardTileModule.register();
IgrGeographicMapDashboardTileModule.register();
IgrPieChartDashboardTileModule.register();
IgrDashboardTileModule.register();
```

<!-- end:Angular, WebComponents, React -->

## Usage

Depending on what you bind the Dashboard Tile's `DataSource` property to will determine which visualization you see by default, as the control will evaluate the data you bind and then choose a visualization from the Ignite UI for React toolset to show. The data visualization controls that are included to be shown in the Dashboard Tile are the following:

- [IgrCategoryChart](charts/chart-overview.md)
- [IgrDataChart](charts/chart-overview.md)
- [IgrDataPieChart](charts/types/data-pie-chart.md)
- [IgrGeographicMap](geo-map.md)
- [IgrLinear Gauge](linear-gauge.md)
- [IgrRadialGauge](radial-gauge.md)

The data visualization that is chosen by default is mainly dependent on the schema and the count of the `DataSource` that you have bound. For example, if you bind a single numeric value, you will get a [`IgrRadialGauge`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html), but if you bind a collection of value-label pairs that are easy to distinguish from each other, you will likely get a `XamDataPieChart`. If you bind an `DataSource` that has more value paths, you will receive a [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html) with multiple column series or line series, depending mainly on the count of the collection bound. You can also bind to a `ShapeDataSource` or data the appears to contain geographic points to receive a [`IgrGeographicMap`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html).

You are not locked into a single visualization when you bind the `DataSource`, and you can tell the control that you want to see a particular visualization by setting its `VisualizationType` property. For example, if you specifically wanted to see a line chart, you could define the Dashboard Tile like so:

<!-- TODO SAMPLE -->

```typescript
export class DashboardGaugeDataSourceItem {
    public constructor(init: Partial<DashboardGaugeDataSourceItem>) {
        Object.assign(this, init);
    }

    public value: number;

}
export class DashboardGaugeDataSource extends Array<DashboardGaugeDataSourceItem> {
    public constructor(items: Array<DashboardGaugeDataSourceItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new DashboardGaugeDataSourceItem({ value: 40 }),
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDashboardTileModule, IgrDataChartDashboardTileModule, IgrGeographicMapDashboardTileModule, IgrLinearGaugeDashboardTileModule, IgrPieChartDashboardTileModule, IgrRadialGaugeDashboardTileModule } from 'igniteui-react-dashboards';
import { IgrDashboardTile } from 'igniteui-react-dashboards';
import { DashboardGaugeDataSourceItem, DashboardGaugeDataSource } from './DashboardGaugeDataSource';

const mods: any[] = [
    IgrDashboardTileModule,
    IgrDataChartDashboardTileModule,
    IgrGeographicMapDashboardTileModule,
    IgrLinearGaugeDashboardTileModule,
    IgrPieChartDashboardTileModule,
    IgrRadialGaugeDashboardTileModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private dashboard: IgrDashboardTile
    private dashboardRef(r: IgrDashboardTile) {
        this.dashboard = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.dashboardRef = this.dashboardRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDashboardTile
                    tileTitle="Sample Gauge"
                    ref={this.dashboardRef}
                    dataSource={this.dashboardGaugeDataSource}>
                </IgrDashboardTile>
            </div>
        </div>
        );
    }

    private _dashboardGaugeDataSource: DashboardGaugeDataSource = null;
    public get dashboardGaugeDataSource(): DashboardGaugeDataSource {
        if (this._dashboardGaugeDataSource == null)
        {
            this._dashboardGaugeDataSource = new DashboardGaugeDataSource();
        }
        return this._dashboardGaugeDataSource;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


The visualization or properties of the visualization are also configurable using the [`IgrToolbar`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolbar.html) at the top of the control. This [`IgrToolbar`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolbar.html) has the default tools for the current visualization with the addition of four Dashboard Tile specific ones, highlighted below:

<img src="../images/dashboard-tile-toolbar.png" alt="Dashboard Tile Toolbar"/>

From left to right:

- The first tool will show a data grid with the `DataSource` provided to the control. This is a toggle tool, so if you click it again after showing the grid, it will revert to the visualization.
- The second tool allows you to configure the settings of the current data visualization.
- The third tool allows you to change the current visualization, allowing you to plot a different series type or show a different type of visualization altogether. This can be set on the control by setting the `VisualizationType` property, mentioned above.
- The last tool allows you to configure which properties on your underlying data item are included for the control. You can configure this by setting the [`includedProperties`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#includedProperties) or [`excludedProperties`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdomainchart.html#excludedProperties) collection on the control.

This demo demonstrates dashboard tile integration with the React Pie Chart. The toolbar options at the top right provides access to styling and changing the data visualization.

```typescript
export class EnergyGlobalDemandItem {
    public constructor(init: Partial<EnergyGlobalDemandItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public category: string;
    public summary: string;

}
export class EnergyGlobalDemand extends Array<EnergyGlobalDemandItem> {
    public constructor(items: Array<EnergyGlobalDemandItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EnergyGlobalDemandItem({ value: 37, category: `Cooling`, summary: `Cooling 37%` }),
                new EnergyGlobalDemandItem({ value: 25, category: `Residential`, summary: `Residential 25%` }),
                new EnergyGlobalDemandItem({ value: 12, category: `Heating`, summary: `Heating 12%` }),
                // ... 2 more items
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDashboardTileModule, IgrDataChartDashboardTileModule, IgrGeographicMapDashboardTileModule, IgrLinearGaugeDashboardTileModule, IgrPieChartDashboardTileModule, IgrRadialGaugeDashboardTileModule } from 'igniteui-react-dashboards';
import { IgrDashboardTile } from 'igniteui-react-dashboards';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';

const mods: any[] = [
    IgrDashboardTileModule,
    IgrDataChartDashboardTileModule,
    IgrGeographicMapDashboardTileModule,
    IgrLinearGaugeDashboardTileModule,
    IgrPieChartDashboardTileModule,
    IgrRadialGaugeDashboardTileModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private dashboard: IgrDashboardTile
    private dashboardRef(r: IgrDashboardTile) {
        this.dashboard = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.dashboardRef = this.dashboardRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDashboardTile
                    ref={this.dashboardRef}
                    dataSource={this.energyGlobalDemand}>
                </IgrDashboardTile>
            </div>
        </div>
        );
    }

    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


This demo demonstrates dashboard tile integration with the React Geographic Map. The toolbar options at the top right provides access to styling and changing the data visualization.

```typescript
export class WorldCitiesItem {
    public constructor(init: Partial<WorldCitiesItem>) {
        Object.assign(this, init);
    }

    public capital: boolean;
    public population: number;
    public y: number;
    public x: number;
    public country: string;
    public name: string;

}
export class WorldCities extends Array<WorldCitiesItem> {
    public constructor(items: Array<WorldCitiesItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new WorldCitiesItem({ capital: true, population: 23.62, y: 35.68, x: 139.81, country: `Japan`, name: `Tokyo` }),
                new WorldCitiesItem({ capital: false, population: 16.47, y: 40.75, x: -74.1, country: `US`, name: `New York` }),
                new WorldCitiesItem({ capital: true, population: 15.85, y: 37.54, x: 126.94, country: `South Korea`, name: `Seoul` }),
                // ... 603 more items
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
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDashboardTileModule, IgrDataChartDashboardTileModule, IgrGeographicMapDashboardTileModule, IgrLinearGaugeDashboardTileModule, IgrPieChartDashboardTileModule, IgrRadialGaugeDashboardTileModule } from 'igniteui-react-dashboards';
import { IgrDashboardTile } from 'igniteui-react-dashboards';
import { WorldCitiesItem, WorldCities } from './WorldCities';

const mods: any[] = [
    IgrDashboardTileModule,
    IgrDataChartDashboardTileModule,
    IgrGeographicMapDashboardTileModule,
    IgrLinearGaugeDashboardTileModule,
    IgrPieChartDashboardTileModule,
    IgrRadialGaugeDashboardTileModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private dashboard: IgrDashboardTile
    private dashboardRef(r: IgrDashboardTile) {
        this.dashboard = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.dashboardRef = this.dashboardRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDashboardTile
                    ref={this.dashboardRef}
                    tileTitle="World Cities"
                    dataSource={this.worldCities}>
                </IgrDashboardTile>
            </div>
        </div>
        );
    }

    private _worldCities: WorldCities = null;
    public get worldCities(): WorldCities {
        if (this._worldCities == null)
        {
            this._worldCities = new WorldCities();
        }
        return this._worldCities;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## API References

- [`IgrToolbar`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_layouts.igrtoolbar.html)
- [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html)
- [`IgrDataChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatachart.html)
- [`IgrDataPieChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrdatapiechart.html)
- [`IgrGeographicMap`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_maps.igrgeographicmap.html)
- [`IgrLinearGauge`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrlineargauge.html)
- [`IgrRadialGauge`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_gauges.igrradialgauge.html)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

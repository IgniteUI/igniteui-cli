---
title: Angular Excel Library| Working with Sparklines | Infragistics
_description: Use sparkline charts in Infragistics' Angular excel library to visual data trends across a region of cells in your worksheet. View Ignite UI for Angular excel engine tutorials!
_keywords: Excel library, sparkline chart, Ignite UI for Angular, Infragistics
_license: commercial
mentionedTypes: ["Workbook"]
_tocName: Working with Sparklines
_premium: true
---

# Angular Working with Sparklines

The Infragistics Angular Excel Library has support for adding sparklines to an Excel Worksheet. These can be used to show simple visual representations of data trends across a region of cells of data in your worksheet. For example, if you wanted to see your Excel data across a particular cell region visualized as a simple column or line sparkline chart, this feature can help you to achieve that.

## Angular Working with Sparklines Example

```typescript
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxButtonModule, IgxGridModule } from "igniteui-angular";
import { IgxSparklineModule } from "igniteui-angular-charts";
import { IgxExcelModule } from "igniteui-angular-excel";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,

],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,    
    IgxButtonModule,    
    IgxGridModule,
    IgxSparklineModule,
    IgxExcelModule
],
  providers: [],
  schemas: []
})
export class AppModule {}
```
```typescript
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { WorkbookFormat } from "igniteui-angular-excel";
import { SparklineType } from "igniteui-angular-excel";
import { Workbook } from "igniteui-angular-excel";
import { ExcelUtility } from "./ExcelUtility";

@Component({
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    @ViewChild("grid", { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    public data: any[];

    constructor() {
    }

    public exportGrid() {
        const headers = ["Orders", "Company Name", "Contact Name", "Contact Title", "Country"];
        const keys = ["Orders", "CompanyName", "ContactName", "ContactTitle", "Country"];
        const orderHeaders = ["Customer ID", "Order ID", "Freight"];

        const wb = new Workbook(WorkbookFormat.Excel2007);
        const exportSheet = wb.worksheets().add("Sheet1");
        const ordersSheet = wb.worksheets().add("Orders");

        exportSheet.defaultColumnWidth = 300 * 20;
        exportSheet.defaultRowHeight = 50 * 20;

        for (let i = 0; i < headers.length; i++) {
            exportSheet.rows(0).cells(i).value = headers[i];
        }

        for (let i = 0; i < this.data.length; i++) {
            const item = this.data[i];
            const orders = item.Orders;

            for (let j = 0; j < orders.length; j++) {
                ordersSheet.rows(i).cells(j).value = orders[j].Freight;
            }
        }

        for (let i = 0; i < this.data.length; i++) {

            const index = (i + 1).toString();
            const dataItem = this.data[i];

            for (let j = 0; j < headers.length; j++) {
                if (j === 0) {
                    exportSheet.sparklineGroups().add(SparklineType.Column,
                         "A" + (i + 2).toString(), "Orders!A" + index + ":F" + index);
                } else {
                    exportSheet.rows(i + 1).cells(j).value = dataItem[keys[j]];
                }
            }
        }

        ExcelUtility.save(wb, "myWorksheet");
    }

    public ngOnInit(): void {
        const companies = ["Amazon", "Ford", "Jaguar", "Tesla", "IBM", "Microsoft" ];
        const firstNames = ["Andrew", "Mike", "Martin", "Ann", "Victoria", "John", "Brian", "Jason", "David" ];
        const lastNames = ["Smith", "Jordan", "Johnson", "Anderson", "Louis", "Phillips", "Williams", "Novak" ];
        const cities = ["London", "Paris", "Boston", "Berlin" ];
        const countries = ["UK", "France", "USA", "Germany" ];
        const titles = ["Sales Rep.", "Owner", "Administrator", "Manager" ];
        const streets = ["Main St", "Madison St", "Broad Way" ];
        const shippings = ["Federal Ex", "UPS Air", "UPS Ground" ];

        const data = new Array<any>();
        // generating excel data source
        for (let i = 0; i < 10; i++) {
            const companyName = this.getItem(companies);
            const contactTitle = this.getItem(titles);
            const country = this.getItem(countries);
            const city = this.getItem(cities);
            const shipping = this.getItem(shippings);
            const contactName = this.getItem(firstNames) + " " + this.getItem(lastNames);
            const employeeName = this.getItem(firstNames) + " " + this.getItem(lastNames);
            const address = this.getRandom(10, 60) + " " + this.getItem(streets);
            const postalCode = this.getRandom(100, 400) + " " + this.getRandom(50, 90);
            const customerID = "CID-" + this.getRandom(500, 900);
            const phone = this.getRandom(500, 900) + "-" + this.getRandom(200, 900) + "-" + this.getRandom(2000, 9000);
            const fax = this.getRandom(500, 900) + "-" + this.getRandom(200, 900) + "-" + this.getRandom(2000, 9000);

            const companyOrders = new Array<any>();
            for (let o = 0; o < 6; o++) {
                const reqDate = "2020-06-" + this.getRandom(1, 25) + "T" + this.getRandom(10, 12) + ":00:00";
                const shipDate = "2020-06-" + this.getRandom(1, 25) + "T" + this.getRandom(10, 12) + ":00:00";
                const orderDate = "2020-05-" + this.getRandom(1, 25) + "T" + this.getRandom(10, 12) + ":00:00";
                const order = {
                    ContactName: contactName,
                    CustomerID: customerID,
                    EmployeeID: this.getRandom(1000, 8000),
                    EmployeeName: employeeName,
                    Freight: this.getRandom(1, 10),
                    OrderDate: orderDate,
                    OrderID: this.getRandom(3000, 5000),
                    RequiredDate: reqDate,
                    ShipAddress: address,
                    ShipCity: city,
                    ShipCountry: country,
                    ShipName: companyName,
                    ShipPostalCode: postalCode,
                    ShipRegion: null,
                    ShipVia: this.getRandom(1, 10),
                    ShippedDate: shipDate,
                    ShipperID: this.getRandom(1, 10),
                    ShipperName: shipping,
                    TotalItems: this.getRandom(10, 20),
                    TotalPrice: this.getRandom(400, 600)
                };
                companyOrders.push(order);
            }
            const dataItem = {
                Address: address,
                City: city,
                CompanyName: companyName,
                ContactName: contactName,
                ContactTitle: contactTitle,
                Country: country,
                Fax: fax,
                ID: customerID,
                Orders: companyOrders,
                Phone: phone,
                PostalCode: postalCode,
                Region: null
            };
            data.push(dataItem);
        }
        this.data = data;

    }
    public getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    public getItem(array: string[]): string {
        const i = this.getRandom(0, array.length - 1);
        return array[i];
    }
}
```
```html
<div class="container">
    <div class="options">
        <button (click)="exportGrid()">Export to Excel</button>
    </div>
    <igx-grid #grid [data]="data" [autoGenerate]="false" height="500px" width="100%">
        <igx-column field="Orders" header="Order History" resizable=true>
            <ng-template igxCell let-cell="cell" let-val>
              <igx-sparkline height="100%" width="100%" minimum=0 displayType="column" [dataSource]="val" valueMemberPath="Freight">
              </igx-sparkline>
            </ng-template>
          </igx-column>
        <igx-column field="CompanyName" header="Company Name"></igx-column>
        <igx-column field="ContactName" header="Contact Name"></igx-column>
        <igx-column field="ContactTitle" header="Contact Title"></igx-column>
        <igx-column field="Country" header="Country"></igx-column>
    </igx-grid>
</div>
```
```scss
.container {
    display: flex;
    flex-flow: column;
    height: 100%;
    min-width: 300px;
}

.options {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 10px;
    margin-left: 10px;
}
```


<div class="divider--half"></div>

## Supported Sparklines

The following is a list of the supported predefined sparkline types.

- Line
- Column
- Stacked (Win/Loss)

The following code demonstrates how to programmatically add Sparklines to a Worksheet via the sparklineGroups collection:

```ts
var workbook: Workbook;
var sheet1 = workbook.worksheets().add("Sparklines");
var sheet2 = workbook.worksheets().add("Data");
sheet1.sparklineGroups().add(SparklineType.Line, "Sparklines!A1:A1", "Data!A2:A11");
sheet1.sparklineGroups().add(SparklineType.Column, "Sparklines!B1:B1", "Data!A2:A11");
workbook.save(workbook, "Sparklines.xlsx");
```

## API References

- [`Workbook`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.workbook.html)

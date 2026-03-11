---
title: React Excel Library| Working with Sparklines | Infragistics
_description: Use sparkline charts in Infragistics' React excel library to visual data trends across a region of cells in your worksheet. View Ignite UI for React excel engine tutorials!
_keywords: Excel library, sparkline chart, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Workbook"]
_tocName: Working with Sparklines
_premium: true
---

# React Working with Sparklines

The Infragistics React Excel Library has support for adding sparklines to an Excel Worksheet. These can be used to show simple visual representations of data trends across a region of cells of data in your worksheet. For example, if you wanted to see your Excel data across a particular cell region visualized as a simple column or line sparkline chart, this feature can help you to achieve that.

## React Working with Sparklines Example

```typescript
export class ExcelSharedData {

}
```
```typescript
import { saveAs } from "file-saver";
import { Workbook } from 'igniteui-react-excel';
import { WorkbookFormat } from 'igniteui-react-excel';
import { WorkbookSaveOptions } from 'igniteui-react-excel';
import { WorkbookLoadOptions } from 'igniteui-react-excel';
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();

export class ExcelUtility {

    public static getExtension(format: WorkbookFormat): string {
        switch (format) {
            case WorkbookFormat.StrictOpenXml:
            case WorkbookFormat.Excel2007:
                return ".xlsx";
            case WorkbookFormat.Excel2007MacroEnabled:
                return ".xlsm";
            case WorkbookFormat.Excel2007MacroEnabledTemplate:
                return ".xltm";
            case WorkbookFormat.Excel2007Template:
                return ".xltx";
            case WorkbookFormat.Excel97To2003:
                return ".xls";
            case WorkbookFormat.Excel97To2003Template:
                return ".xlt";
        }
    }

    public static load(file: File): Promise<Workbook> {
        return new Promise<Workbook>((resolve, reject) => {
            ExcelUtility.readFileAsUint8Array(file).then((a) => {
                Workbook.load(a, new WorkbookLoadOptions(), (w) => {
                    resolve(w);
                }, (e) => {
                    reject(e);
                });
            }, (e) => {
                reject(e);
            });
        });
    }

    public static loadFromUrl(url: string): Promise<Workbook> {
        return new Promise<Workbook>((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open("GET", url, true);
            req.responseType = "arraybuffer";
            req.onload = (d): void => {
                const data = new Uint8Array(req.response);
                Workbook.load(data, new WorkbookLoadOptions(), (w) => {
                    resolve(w);
                }, (e) => {
                    reject(e);
                });
            };
            req.send();
        });
    }

    public static save(workbook: Workbook, fileNameWithoutExtension: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const opt = new WorkbookSaveOptions();
            opt.type = "blob";

            workbook.save(opt, (d) => {
                const fileExt = ExcelUtility.getExtension(workbook.currentFormat);
                const fileName = fileNameWithoutExtension + fileExt;
                saveAs(d as Blob, fileName);
                resolve(fileName);
            }, (e) => {
                reject(e);
            });
        });
    }

    private static readFileAsUint8Array(file: File): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            const fr = new FileReader();
            fr.onerror = (e): void => {
                reject(fr.error);
            };

            if (fr.readAsBinaryString) {
                fr.onload = (e): void => {
                    const rs = (fr as any).resultString;
                    const str: string = rs != null ? rs : fr.result;
                    const result = new Uint8Array(str.length);
                    for (let i = 0; i < str.length; i++) {
                        result[i] = str.charCodeAt(i);
                    }
                    resolve(result);
                };
                fr.readAsBinaryString(file);
            } else {
                fr.onload = (e): void => {
                    resolve(new Uint8Array(fr.result as ArrayBuffer));
                };
                fr.readAsArrayBuffer(file);
            }
        });
    }
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ExcelUtility } from './ExcelUtility';
import { Workbook } from 'igniteui-react-excel';
import { WorkbookFormat } from 'igniteui-react-excel';
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrTemplateColumn, IIgrCellTemplateProps } from 'igniteui-react-data-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-data-grids';
import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';
import { SparklineType } from 'igniteui-react-excel';

IgrDataGridModule.register();

IgrSparklineModule.register();

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();

export default class ExcelLibraryWorkingWithSparklines extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.exportGrid = this.exportGrid.bind(this);

        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <button className="options-button" onClick={this.exportGrid}>Export</button>
                </div>
                <IgrDataGrid autoGenerateColumns={false} dataSource={this.data} height="calc(100% - 30px)" width="100%">
                    <IgrTemplateColumn width="*>90" field="Orders" template={this.templateColTestMethod} />
                    <IgrTextColumn width="*>130" field="CompanyName"  headerText="Company" />
                    <IgrTextColumn width="*>90"  field="ContactName" headerText="Name" />
                    <IgrTextColumn width="*>70"  field="ContactTitle" headerText="Title" />
                    <IgrTextColumn width="*>90"  field="Country" headerText="Country" />
                </IgrDataGrid>
            </div>
        );
    }

    public templateColTestMethod(props: IIgrCellTemplateProps) {
        const tmpl = props.dataContext as IgrTemplateCellInfo;

        return (
            <IgrSparkline dataSource={tmpl.rowItem.Orders} height="40px" width="200px"
                          displayType="Column" valueMemberPath="Freight" minimum={0} />
        );
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
                    exportSheet.sparklineGroups().add(SparklineType.Column, "A" + (i + 2).toString(), "Orders!A" + index + ":F" + index);
                }
                else {
                    exportSheet.rows(i + 1).cells(j).value = dataItem[keys[j]];
                }
            }
        }

        ExcelUtility.save(wb, "myWorksheet");
    }

    public initData() {
        const companies = ["Amazon", "Ford", "Jaguar", "Tesla", "IBM", "Microsoft"];
        const firstNames = ["Andrew", "Mike", "Martin", "Ann", "Victoria", "John", "Brian", "Jason", "David"];
        const lastNames = ["Smith", "Jordan", "Johnson", "Anderson", "Louis", "Phillips", "Williams", "Novak"];
        const cities = ["London", "Paris", "Boston", "Berlin"];
        const countries = ["UK", "France", "USA", "Germany"];
        const titles = ["Sales Rep.", "Owner", "Administrator", "Manager"];
        const streets = ["Main St", "Madison St", "Broad Way"];
        const shippings = ["Federal Ex", "UPS Air", "UPS Ground"];

        const data = new Array<any>();
        // generating excel data source
        for (let i = 0; i < 20; i++) {
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
                    Freight: this.getRandom(3, 10),
                    OrderDate: orderDate,
                    OrderID: this.getRandom(3000, 5000),
                    RequiredDate: reqDate,
                    ShipAddress: address,
                    ShipCity: city,
                    ShipCountry: country,
                    ShipName: companyName,
                    ShipPostalCode: postalCode,
                    ShipRegion: "",
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
                Region: ""
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

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExcelLibraryWorkingWithSparklines/>);
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

- [`Workbook`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_excel.workbook.html)

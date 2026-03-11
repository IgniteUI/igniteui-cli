---
title: React Data Grid | Comparison Table | Data Binding | Infragistics
_description: Use Infragistics' React grid component to bind to comparison data. View our Ignite UI for React table demos!
_keywords: React Table, Data Grid, column template, comparison data, Ignite UI for React, data binding, Infragistics
mentionedTypes: ["Grid", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Binding Comparison Data
_premium: true
---

# React Binding Comparison Data

The Ignite UI for React Data Table / Data Grid supports [template columns](column-types.md#template-column) to insert images.

## React Binding Comparison Data Example

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// grid modules:
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrTemplateColumn } from 'igniteui-react-data-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-data-grids';
import { IgrTemplateHeader } from 'igniteui-react-data-grids';
import { IgrTemplateCellUpdatingEventArgs } from 'igniteui-react-data-grids';
import { IgrTemplateHeaderCellUpdatingEventArgs } from 'igniteui-react-data-grids';

IgrDataGridModule.register();

export default class DataGridTypeComparisonTable extends React.Component<any, any> {

    public data: any[];
    public VerticalHeader: IgrTemplateHeader;
    public HorizontalRightHeader: IgrTemplateHeader;
    public HorizontalLeftHeader: IgrTemplateHeader;
    public cellSize: number = 50;

    public genders: string[] = ["male", "female"];
    public maleNames: string[] = ["Kyle", "Oscar", "Ralph", "Mike", "Bill", "Frank", "Howard", "Jack", "Larry", "Pete", "Steve", "Vince", "Mark", "Alex", "Max", "Brian", "Chris", "Andrew", "Martin", "Mike", "Steve", "Glenn", "Bruce"];
    public femaleNames: string[] = ["Gina", "Irene", "Katie", "Brenda", "Casey", "Fiona", "Holly", "Kate", "Liz", "Pamela", "Nelly", "Marisa", "Monica", "Anna", "Jessica", "Sofia", "Isabella", "Margo", "Jane", "Audrey", "Sally", "Melanie", "Greta", "Aurora", "Sally"];
    public lastNames: string[] = ["Adams", "Crowley", "Ellis", "Martinez", "Irvine", "Maxwell", "Clark", "Owens", "Rooney", "Lincoln", "Thomas", "Spacey", "Betts", "King", "Newton", "Fitzgerald", "Holmes", "Jefferson", "Landry", "Newberry", "Perez", "Spencer", "Starr", "Carter", "Edwards", "Stark", "Johnson", "Fitz", "Chief", "Blanc", "Perry", "Stone", "Williams", "Lane", "Jobs", "Adama", "Power", "Tesla"];
    public skillNames = ["JavaScript", "Angular", "React", "C#", "C++", "Swift", "VB", "Python", "Ruby", "XAML"];

    constructor(props: any) {
        super(props);

        this.createData();

        this.VerticalHeader = new IgrTemplateHeader({});
        this.VerticalHeader.cellUpdating = (s, e) => this.onVerticalHeaderUpdating(s, e);

        this.HorizontalRightHeader = new IgrTemplateHeader({});
        this.HorizontalRightHeader.cellUpdating = (s, e) => this.onHorizontalHeaderUpdating(s, e, "right");

        this.HorizontalLeftHeader = new IgrTemplateHeader({});
        this.HorizontalLeftHeader.cellUpdating = (s, e) => this.onHorizontalHeaderUpdating(s, e, "left");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDataGrid
                    height="100%"
                    width="100%"

                    rowHeight={this.cellSize}
                    rowSeparatorHeight="1"
                    rowSeparatorBackground="lightgray"
                    headerSeparatorBackground="lightgray"
                    headerSeparatorWidth="1"
                    headerHeight="110"

                    columnResizingMode="None"
                    autoGenerateColumns="false"
                    dataSource={this.data}>

                    <IgrTextColumn field="Name"
                    header={this.HorizontalRightHeader}
                    headerText="Skills"
                    horizontalAlignment="right"
                    width="*>110" />

                    {this.renderDataColumns()}

                    <IgrTextColumn field="Skills"
                    header={this.HorizontalLeftHeader}
                    headerText="Total"
                    horizontalAlignment="left"
                    width="*>110" />

               </IgrDataGrid>
            </div>
        );
    }

    public renderDataColumns(): JSX.Element[] {
        const columns: JSX.Element[] = [];

        for (let i = 0; i < this.skillNames.length; i++) {
            const name = this.skillNames[i];
            columns.push(this.renderColumn(name));
        }
        return columns;
    }

    public renderColumn(columnPath: string, columnName?: string) {
        if (columnName === undefined) {
            columnName = columnPath;
        }
        return <IgrTemplateColumn
        key={columnPath}
        field={columnPath}
        headerText={columnName}
        width={this.cellSize.toString()}
        paddingBottom="0" paddingLeft="0"
        paddingRight="0" paddingTop="0"
        header={this.VerticalHeader}
        cellUpdating={this.onCellUpdating}
        horizontalAlignment="center"
        verticalAlignment="bottom"
        border="lightgray"
        borderLeftWidth="0.5"
        borderRightWidth="0.5"
        borderTopWidth="0"
        borderBottomWidth="0"
        />;
    }

    public onVerticalHeaderUpdating = (s: IgrTemplateHeader, e: IgrTemplateHeaderCellUpdatingEventArgs) => {
        const content = e.content as HTMLDivElement;
        let label: HTMLSpanElement | null = null;
        if (content.childElementCount === 0) {
            content.style.lineHeight = "140px";
            label = document.createElement("div");
            label.style.background = "transparent";
            label.style.color = "rgb(24, 29, 31)";
            label.style.fontSize = "13px";
            label.style.fontFamily = "Verdana";
            label.style.transform = "rotate(270deg)";
            label.style.transformOrigin = "center";
            content.appendChild(label);
        } else {
            label = content.children[0] as HTMLDivElement;
        }

        const info = e.cellInfo as IgrTemplateCellInfo;
        label.textContent = info.value;
    }

    public onHorizontalHeaderUpdating = (s: IgrTemplateHeader, e: IgrTemplateHeaderCellUpdatingEventArgs, align: string) => {
        const content = e.content as HTMLDivElement;
        let label: HTMLSpanElement | null = null;
        if (content.childElementCount === 0) {
            content.style.lineHeight = "140px";
            label = document.createElement("div");
            label.style.background = "transparent";
            label.style.color = "rgb(24, 29, 31)";
            label.style.fontSize = "13px";
            label.style.fontFamily = "Verdana";
            label.style.verticalAlign = "bottom";
            label.style.textAlign = align;
            content.appendChild(label);
        } else {
            label = content.children[0] as HTMLDivElement;
        }

        const info = e.cellInfo as IgrTemplateCellInfo;
        label.textContent = info.value;
    }

    public onCellUpdating = (s: IgrTemplateColumn, e: IgrTemplateCellUpdatingEventArgs) => {
        const content = e.content as HTMLDivElement;
        const info = e.cellInfo as IgrTemplateCellInfo;
        let cell: HTMLDivElement | null = null;

        if (content.childElementCount === 0) {
            content.style.margin = "0px";
            content.style.padding = "0px";
            cell = document.createElement("div");
            cell.style.margin = "0px";
            cell.style.padding = "0px";
            cell.style.textAlign = "center";
            cell.style.fontFamily = "Verdana";
            cell.style.fontSize = "x-large";
            cell.style.color = "#fdb417";
            content.appendChild(cell);
        } else {
            cell = content.children[0] as HTMLDivElement;
        }

        if (info.value) {
            cell.textContent = "\u2605";
        } else {
            cell.textContent = "";
        }
    }

    public createData() {

        this.data = [];
        for (let row = 0; row < 20; row++) {

            const person: any = {};
            person.ID = row;
            person.Gender = this.getRandomGender();
            person.FirstName = this.getRandomNameFirst(person.Gender);
            person.LastName = this.getRandomNameLast();
            person.Name = person.FirstName + " " + person.LastName;
            person.Skills = 0;
            // generating experience level for all skills
            for (let c = 0; c < this.skillNames.length; c++) {
                const month = this.skillNames[c];
                const rand = Math.random();
                person[month] = rand > 0.65;
                person.Skills += rand > 0.65 ? 1 : 0;
            }
            this.data.push(person);
        }

        this.data.sort(this.compareData);
    }

    public compareData(a: any, b: any): number {
        if (a.Name < b.Name) {
            return 1;
        }
        if (a.Name > b.Name) {
            return -1;
        }
        return 0;
    }

    public getRandomGender(): string {
        return this.getRandomItem(this.genders);
    }
    public getRandomNameLast(): string {
        return this.getRandomItem(this.lastNames);
    }

    public getRandomNameFirst(gender: string): string {
        if (gender === "male") {
            return this.getRandomItem(this.maleNames);
        }
        else {
            return this.getRandomItem(this.femaleNames);
        }
    }

    public getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

    public getRandomItem(array: any[]): any {
        const index = Math.round(this.getRandomNumber(0, array.length - 1));
        return array[index];
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridTypeComparisonTable/>);
```


## API References

- [`IgrDataGrid`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_grids.igrdatagrid.html)

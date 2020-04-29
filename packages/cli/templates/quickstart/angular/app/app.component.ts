import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1 id='mainheader'>My IgniteUI Angular App</h1>
    <h2>igGrid</h2>
        <ig-grid
        widgetId='grid1'
        [autoCommit]='true'
        [dataSource]='data'
        [autoGenerateColumns]='true'
        >
    </ig-grid>

    <h2>igEditors</h2>
    <ig-text-editor value="John"></ig-text-editor>
    <br/>
    <ig-date-editor value='{{currDate | date}}'></ig-date-editor>
     <br/>
     <ig-mask-editor value='mask edit'></ig-mask-editor>
     <br/>
     <ig-currency-editor value='40'></ig-currency-editor>
     <br/>
     <ig-numeric-editor value='40'></ig-numeric-editor>
      <br/>
     <ig-percent-editor value='40'></ig-percent-editor>
      <br/>
     <ig-date-picker value='{{currDate | date}}'></ig-date-picker>

     <h2>igCombo</h2>
     <ig-combo [dataSource]='data' textKey='Name' valueKey='ProductID' [(ngModel)]="value"></ig-combo >

     <h2>igTree</h2>
     <ig-tree widgetId='tree1' [dataSource]='treeData' [bindings]="treeBinding"></ig-tree>

     <h2>igDialog</h2>
     <ig-dialog [(state)]='dialogState' (stateChanged)='stateChanged()'></ig-dialog>
     <button (click)='btnClicked()'>Open Dialog</button>

     <h2>igDataChart</h2>
     <ig-data-chart [(options)]="chartOptions" widgetId='datachart1'></ig-data-chart>
    `
})
export class AppComponent {
    private data: any;
    private currDate: Date;
    private value: any;
    private treeData: any;
    private treeBinding: any;
    private dialogState: string;
    private chartOptions: any;

   constructor() {
        this.data = this.getData();
        this.currDate = new Date();
        this.value = 1;
        this.treeData = this.getTreeData();
        this.treeBinding = {
                    textKey: 'RegionName',
                    valueKey: 'ID',
                    childDataProperty: 'Countries',
                    bindings: {
                        textKey: 'CountryName',
                        valueKey: 'ID'
                    }
        };
        this.dialogState = 'closed';
        this.chartOptions = {
            dataSource: this.getChartData(),
              axes: [{
                        name: 'NameAxis',
                        type: 'categoryX',
                        title: 'Country',
                        label: 'CountryName'
                    },
                    {
                        name: 'PopulationAxis',
                        type: 'numericY',
                        minimumValue: 0,
                        title: 'Millions of People',
                    }],
                series: [{
                        name: '2015Population',
                        type: 'column',
                        isHighlightingEnabled: true,
                        isTransitionInEnabled: true,
                        xAxis: 'NameAxis',
                        yAxis: 'PopulationAxis',
                        valueMemberPath: 'Pop2015'
                    }]
        };
   }

    btnClicked() {
        this.dialogState = 'opened';
   }

    stateChanged() {
         this.dialogState = 'closed';
    }

    getData() {
        return [
                    { 'ProductID': 1, 'Name': 'Adjustable Race', 'ProductNumber': 'AR-5381'},
                    { 'ProductID': 2, 'Name': 'Bearing Ball', 'ProductNumber': 'BA-8327'},
                    { 'ProductID': 3, 'Name': 'BB Ball Bearing', 'ProductNumber': 'BE-2349'},
                    { 'ProductID': 4, 'Name': 'Headset Ball Bearings', 'ProductNumber': 'BE-2908'},
                    { 'ProductID': 5, 'Name': 'Blade', 'ProductNumber': 'BL-2036'},
                    { 'ProductID': 6, 'Name': 'LL Crankarm', 'ProductNumber': 'CA-5965'},
                    { 'ProductID': 7, 'Name': 'ML Crankarm', 'ProductNumber': 'CA-6738'},
                    { 'ProductID': 8, 'Name': 'HL Crankarm', 'ProductNumber': 'CA-7457'},
                    { 'ProductID': 9, 'Name': 'Chainring Bolts', 'ProductNumber': 'CB-2903'}
                ];
    }
    getTreeData() {
        return [
                {
                    'ID': 1, 'RegionName': 'North America', 'Countries':
                    [
                        { 'ID': 1, 'CountryName': 'United States' },
                        { 'ID': 2, 'CountryName': 'Canada' },
                        { 'ID': 3, 'CountryName': 'Mexico' }
                    ]
                },
                {
                    'ID': 2, 'RegionName': 'South America', 'Countries':
                    [
                        { 'ID': 4, 'CountryName': 'Brazil' },
                        { 'ID': 5, 'CountryName': 'Uruguay' }
                    ]
                },
                {
                    'ID': 3, 'RegionName': 'Europe', 'Countries':
                    [
                        { 'ID': 6, 'CountryName': 'United Kingdom' },
                        { 'ID': 7, 'CountryName': 'Germany' },
                        { 'ID': 8, 'CountryName': 'Bulgaria' }
                    ]
                }
                ];
    }

    getChartData() {
        return [
                { 'CountryName': 'China', 'Pop1995': 1216, 'Pop2005': 1297, 'Pop2015': 1361, 'Pop2025': 1394 },
                { 'CountryName': 'India', 'Pop1995': 920, 'Pop2005': 1090, 'Pop2015': 1251, 'Pop2025': 1396 },
                { 'CountryName': 'United States', 'Pop1995': 266, 'Pop2005': 295, 'Pop2015': 322, 'Pop2025': 351 },
                { 'CountryName': 'Indonesia', 'Pop1995': 197, 'Pop2005': 229, 'Pop2015': 256, 'Pop2025': 277 },
                { 'CountryName': 'Brazil', 'Pop1995': 161, 'Pop2005': 186, 'Pop2015': 204, 'Pop2025': 218 }
                ];
    }
 }

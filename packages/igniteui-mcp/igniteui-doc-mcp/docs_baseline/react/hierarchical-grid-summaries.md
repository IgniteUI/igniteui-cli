---
title: React Hierarchical Grid Summaries - Ignite UI for React
_description: Configure React Hierarchical Grid summaries in the group footer of the column and use the option to set custom React template in the Ignite UI for React Material table
_keywords: React Hierarchical Grid summaries, React, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["GridBaseDirective", "Column", "SummaryOperand"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/summaries
_tocName: Summaries
_premium: true
---

# React Hierarchical Grid Summaries

The Ignite UI for React Summaries feature in React Hierarchical Grid functions on a per-column level as group footer. React IgrHierarchicalGrid summaries is powerful feature which enables the user to see column information in a separate container with a predefined set of default summary items, depending on the type of data within the column or by implementing a custom  template in the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html).

## React Hierarchical Grid Summaries Overview Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="ID">
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="number"
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="number"
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="number"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="number"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string">
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                hasSummary={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="date">
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string">
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


> \[!Note]
> The summary of the column is a **function of all column values**, unless filtering is applied, then the summary of the column will be **function of the filtered result values**

[`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) summaries can also be enabled on a per-column level in Ignite UI for React, which means that you can activate it only for columns that you need. [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) summaries gives you a predefined set of default summaries, depending on the type of data in the column, so that you can save some time:

For `string` and `boolean` [`dataType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#dataType), the following function is available:

- Count

For `number`, `currency` and `percent` data types, the following functions are available:

- Count
- Min
- Max
- Average
- Sum

For `date` data type, the following functions are available:

- Count
- Earliest
- Latest

All available column data types could be found in the official [Column types topic](column-types.md#default-template).

[`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) summaries are enabled per-column by setting [`hasSummary`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#hasSummary) property to **true**. It is also important to keep in mind that the summaries for each column are resolved according to the column data type. In the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) the default column data type is `string`, so if you want `number` or `date` specific summaries you should specify the [`dataType`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#dataType) property as `number` or `date`. Note that the summary values will be displayed localized, according to the grid [`locale`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#locale) and column [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#pipeArgs).

```tsx
<IgrHierarchicalGrid autoGenerate={false} data={singersData} ref={hierarchicalGridRef} primaryKey="ID">
    <IgrColumn field="Artist" header="Artist" hasSummary={true}></IgrColumn>
    <IgrColumn field="Photo" header="Photo" dataType="image"></IgrColumn>
    <IgrColumn field="Debut" header="Debut" hasSummary={true}></IgrColumn>
    <IgrColumn field="GrammyNominations" header="Grammy Nominations" dataType="number" hasSummary={true}></IgrColumn>
    <IgrColumn field="GrammyAwards" header="Grammy Awards" dataType="number" hasSummary={true}></IgrColumn>
    <IgrRowIsland childDataKey="Albums" autoGenerate={false}>
        <IgrColumn field="Album" header="Album" dataType="string"></IgrColumn>
        <IgrColumn field="LaunchDate" header="Launch Date" dataType="date"></IgrColumn>
        <IgrColumn field="BillboardReview" header="Billboard Review" dataType="number" hasSummary={true}></IgrColumn>
        <IgrColumn field="USBillboard200" header="US Billboard 200" dataType="number" hasSummary={true} ></IgrColumn>
     </IgrRowIsland>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

The other way to enable/disable summaries for a specific column or a list of columns is to use the public method [`enableSummaries`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#enableSummaries)/[`disableSummaries`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#disableSummaries) of the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html).

```tsx
const enableSummary = () => {
    hierarchicalGridRef.current.enableSummaries([
        {fieldName: 'GrammyNominations'},
        {fieldName: 'GrammyAwards'}
    ]);
}
const disableSummary = () => {
    hierarchicalGridRef.current.disableSummaries(['GrammyNominations']);
}

<IgrHierarchicalGrid autoGenerate={false} data={singersData} ref={hierarchicalGridRef} primaryKey="ID">
    <IgrColumn field="Artist" header="Artist" hasSummary={true}></IgrColumn>
    <IgrColumn field="Photo" header="Photo" dataType="image"></IgrColumn>
    <IgrColumn field="Debut" header="Debut" hasSummary={true}></IgrColumn>
    <IgrColumn field="GrammyNominations" header="Grammy Nominations" dataType="number" hasSummary={true}></IgrColumn>
    <IgrColumn field="GrammyAwards" header="Grammy Awards" dataType="number" hasSummary={true}></IgrColumn>
</IgrHierarchicalGrid>
<button onClick={enableSummary}>Enable Summary</button>
<button onClick={disableSummary}>Disable Summary </button>
```

<!-- ComponentEnd: HierarchicalGrid -->

### Summary Template

[`summaryTemplate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#summaryTemplate) targets the column summary providing as a context the column summary results.

```tsx
const summaryTemplate = (ctx: IgrSummaryTemplateContext) => {
  return (
    <>
      <span>My custom summary template</span>
      <span>{ctx.implicit[0].label} - {ctx.implicit[0].summaryResult}</span>
    </>
  );
}

<IgrColumn hasSummary={true} summaryTemplate={summaryTemplate}></IgrColumn>
```

When a default summary is defined, the height of the summary area is calculated by design depending on the column with the largest number of summaries and the `--ig-size` of the grid. Use the [`summaryRowHeight`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#summaryRowHeight) input property to override the default value. As an argument it expects a number value, and setting a falsy value will trigger the default sizing behavior of the grid footer.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.summary-temp {
	display: flex;
	flex-direction: column;
	margin: 0 1px;
	font-size: 14px;
	line-height: 24px;
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
	> * {
		padding: 8px 0;
		line-height: 18px;
		border-bottom: 1px dashed hsla(var(--igx-gray-400));
		&:last-child {
			border-bottom: none;
		}
	}
}
.summary-temp span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    justify-content: space-between;
    color: hsla(var(--ig-gray-900));
}
.summary-temp span span {
    user-select: all;
    max-width: 300px;
    padding-right: 8px;
}
.summary-temp span strong {
    font-size: 12px;
    text-transform: uppercase;
    min-width: 70px;
    justify-self: flex-start;
    text-align: left;
    color: hsla(var(--ig-secondary-600));
    user-select: none;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebHierarchicalGridDescriptionModule } from 'igniteui-react-core';
import SingersData from './SingersData.json';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { IgrSummaryTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private summaryRowHeightEditor: IgrPropertyEditorPropertyDescription
    private toggleSummariesEditor: IgrPropertyEditorPropertyDescription
    private sizeEditor: IgrPropertyEditorPropertyDescription
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.webHierarchicalGridHasSummariesChange = this.webHierarchicalGridHasSummariesChange.bind(this);
        this.webHierarchicalGridSetGridSize = this.webHierarchicalGridSetGridSize.bind(this);
        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.hierarchicalGrid}
                    descriptionType="WebHierarchicalGrid"
                    isHorizontal="true"
                    isWrappingEnabled="false"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="SummaryRowHeight"
                        label="Summary Row Height"
                        valueType="Number"
                        name="SummaryRowHeightEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        label="Toggle Summaries"
                        valueType="Boolean1"
                        primitiveValue="True"
                        changed={this.webHierarchicalGridHasSummariesChange}
                        name="ToggleSummariesEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        name="SizeEditor"
                        label="Grid Size:"
                        valueType="EnumValue"
                        dropDownNames={["Small", "Medium", "Large"]}
                        dropDownValues={["Small", "Medium", "Large"]}
                        changed={this.webHierarchicalGridSetGridSize}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="ID">
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        hasSummary={true}
                        summaries={this.singerSummary}>
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="number"
                        hasSummary={true}
                        summaryTemplate={this.webHierarchicalGridSummaryTemplateStyle}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="number"
                        hasSummary={true}
                        summaryTemplate={this.webHierarchicalGridSummaryTemplate}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            hasSummary={true}
                            summaryTemplate={this.webRowIslandGridSummaryTemplateStyle}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="number"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="number"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string"
                                hasSummary={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                hasSummary={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="date"
                                hasSummary={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string"
                                hasSummary={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            WebHierarchicalGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webHierarchicalGridHasSummariesChange(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        let newValue = sender.primitiveValue as boolean;
        const grid = this.hierarchicalGrid;
        var column1 = grid.getColumnByName("Photo");
        var column2 = grid.getColumnByName("GrammyNominations");
        var column3 = grid.getColumnByName("GrammyAwards");

        column1.hasSummary = newValue;
        column2.hasSummary = newValue;
        column3.hasSummary = newValue;
    }

    public webHierarchicalGridSetGridSize(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var newVal = (args.newValue as string).toLowerCase();
        var grid = document.getElementById("hierarchicalGrid");
        grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
    }

    public webHierarchicalGridSummaryTemplateStyle = (e: { dataContext: IgrSummaryTemplateContext }) => {
        const summaryResults = e.dataContext.implicit;
        return (
            <div className="summary-temp">
                <span><strong>{ summaryResults[0].label }</strong><span>{ (summaryResults[0] as any).summaryResult }</span></span>
                <span><strong>{ summaryResults[1].label }</strong><span>{ (summaryResults[1] as any).summaryResult }</span></span>
                <span><strong>{ summaryResults[2].label }</strong><span>{ (summaryResults[2] as any).summaryResult }</span></span>
            </div>
        );
    }

    public webHierarchicalGridSummaryTemplate = (e: { dataContext: IgrSummaryTemplateContext }) => {
        const summaryResults = e.dataContext.implicit;
        return (
            <div className="summary-temp">
                <span>{ summaryResults[0].label }<span>{ (summaryResults[0] as any).summaryResult }</span></span>
                <span>{ summaryResults[1].label }<span>{ (summaryResults[1] as any).summaryResult }</span></span>
                <span>{ summaryResults[2].label }<span>{ (summaryResults[2] as any).summaryResult }</span></span>
            </div>
        );
    }

    public webRowIslandGridSummaryTemplateStyle = (e: { dataContext: IgrSummaryTemplateContext }) => {
        const summaryResults = e.dataContext.implicit;
        return (
            <div className="summary-temp">
                <span><strong>{ summaryResults[0].label }</strong><span>{ (summaryResults[0] as any).summaryResult }</span></span>
                <span><strong>{ summaryResults[1].label }</strong><span>{ (new Date((summaryResults[2] as any).summaryResult)).toDateString() }</span></span>
            </div>
        );
    }

    private singerSummary = {
        sum(data: any[] = []): number {
            return data.length && data.filter((el) => el === 0 || Boolean(el)).length ? data.filter((el) => el === 0 || Boolean(el)).reduce((a, b) => +a + +b) : 0;
        },
        operate(data?: any[], allData: any[] = [], fieldName = ''): any[] {
            const result = [] as any[];
            result.push({
                key: 'nominatedSingers',
                label: 'Nominated Singers',
                summaryResult: allData.filter((rec) => rec['GrammyNominations'] > 0).length
            });
            result.push({
                key: 'singersWithAwards',
                label: 'Singers with Awards',
                summaryResult: allData.filter((rec) => rec['GrammyAwards'] > 0).length
            });
            result.push({
                key: 'nominations',
                label: 'Total Nominations',
                summaryResult: this.sum(allData.map(r => r['GrammyNominations']))
            } );
            result.push({
                key: 'awards',
                label: 'Total Awards',
                summaryResult: this.sum(allData.map(r => r['GrammyAwards']))
            });
            return result;
        }
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


## Disabled Summaries

<!-- React -->

The [`disabledSummaries`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#disabledSummaries) property provides precise per-column control over the React Hierarchical Grid summary feature. This property enables users to customize the summaries displayed for each column in the IgrHierarchicalGrid, ensuring that only the most relevant and meaningful data is shown. For example, you can exclude specific summary types, such as **\['count', 'min', 'max']** by specifying their summary keys in an array.

<!-- end: React -->

<!-- WebComponents, React, Blazor -->

This property can also be modified **dynamically at runtime** through code, providing flexibility to adapt the IgrHierarchicalGrid's summaries to changing application states or user actions.

<!-- end: WebComponents, React, Blazor -->

<!-- React -->

The following examples illustrate how to use the `disabledSummaries` property to manage summaries for different columns and exclude specific default and custom summary types in the React Hierarchical Grid:

<!-- end: React -->

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

<!-- React -->

```tsx
<!-- Disable default summaries -->
<IgrColumn
    field="UnitPrice"
    header="Unit Price"
    dataType="number"
    hasSummary={true}
    disabledSummaries={['count', 'sum', 'average']}
/>

<!-- Disable custom summaries -->
<IgrColumn
    field="UnitsInStock"
    header="Units In Stock"
    dataType="number"
    hasSummary={true}
    summaries={discontinuedSummary}
    disabledSummaries={['discontinued', 'totalDiscontinued']}
/>
```

<!-- end: React -->

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

For `UnitPrice`, default summaries like `count`, `sum`, and `average` are disabled, leaving others like `min` and `max` active.

<!-- React -->

For `UnitsInStock`, custom summaries such as `discontinued` and `totalDiscontinued` are excluded using the [`disabledSummaries`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#disabledSummaries) property.

At runtime, summaries can also be dynamically disabled using the [`disabledSummaries`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#disabledSummaries) property. For example, you can set or update the property on specific columns programmatically to adapt the displayed summaries based on user actions or application state changes.

<!-- end: React -->

```css
.grid-wrapper {
    margin: 0 auto;
    padding: 16px;
    height: 87%;
}

.grid-wrapper .summaries {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.grid-wrapper .summaries-title {
    margin: 0 0 1rem 0;
    flex-basis: 100%;
    font-weight: bold;
}

.grid-wrapper .summary-button {
    margin-right: 1rem;
}

igc-dialog {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
}

igc-dialog::part(title) {
    color: #1E6DFE;
}

.summaries-dialog-items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.summaries-dialog-items .summaries-dialog-item {
    display: flex;
    align-items: center;
    padding: 0 1rem;
}
```
```tsx
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrButton, IgrDialog, IgrCheckbox } from 'igniteui-react';
import { IgrSummaryOperand, IgrSummaryResult, IgrHierarchicalGrid, IgrRowIsland, IgrColumn } from 'igniteui-react-grids';
import  SingersData from './SingersData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

export class GrammySummary extends IgrSummaryOperand {
    operate(data: any[] = [], allData: any[] = [], fieldName: string = ""): IgrSummaryResult[] {
        const result: IgrSummaryResult[] = [];

        result.push({
            key: "count",
            label: "Count",
            summaryResult: allData.filter((rec) => rec["Artist"] !== undefined && rec["Artist"] !== null && rec["Artist"] !== "").length
        });

        result.push({
            key: "nominatedSingers",
            label: "Nominated Singers",
            summaryResult: allData.filter((rec) => rec["GrammyNominations"] > 0).length
        });

        result.push({
            key: "singersWithAwards",
            label: "Singers with Awards",
            summaryResult: allData.filter((rec) => rec["GrammyAwards"] > 0).length
        });

        result.push({
            key: "nominations",
            label: "Total Nominations",
            summaryResult: allData.reduce((sum, rec) => sum + (rec["GrammyNominations"] || 0), 0)
        });

        result.push({
            key: "awards",
            label: "Total Awards",
            summaryResult: allData.reduce((sum, rec) => sum + (rec["GrammyAwards"] || 0), 0)
        });

        return result;
    }
}

interface SummaryColumn {
    field: string;
    header: string;
    hasSummary: boolean;
    dataType?: string;
    summaries?: any;
    disabledSummaries: string[];
}
  
export default function DisabledSummariesHierarchicalGridSample() {
    // State
    const [singersData, setSingersData] = useState<any[]>([]);
    const [currentColumn, setCurrentColumn] = useState<SummaryColumn | null>(null);
    const [currentColumnSource, setCurrentColumnSource] = useState<"dialog" | "toggle" | null>(null);
    const [pendingUpdateType, setPendingUpdateType] = useState<null | "disableAll" | "enableAll">(null);
    const [disableAllBtnDisabled, setDisableAllBtnDisabled] = useState(false);
    const [enableAllBtnDisabled, setEnableAllBtnDisabled] = useState(false);
    const [checkboxStates, setCheckboxStates] = useState([]);

    const [columns, setColumns] = useState([
        { field: "Artist", header: "Artist", hasSummary: true, disabledSummaries: [] },
        { field: "Photo", header: "Photo", dataType: "image", hasSummary: true, summaries: GrammySummary, disabledSummaries: [] },
        { field: "Debut", header: "Debut", hasSummary: true, disabledSummaries: [] },
        { field: "GrammyNominations", header: "Grammy Nominations", dataType: "number", hasSummary: true, disabledSummaries: [] },
        { field: "GrammyAwards", header: "Grammy Awards", dataType: "number", hasSummary: true, disabledSummaries: [] }
    ]);

    // Refs
    let hierarchicalGrid: IgrHierarchicalGrid;
    const hierarchicalGridRef = (ref: IgrHierarchicalGrid) => {
        hierarchicalGrid = ref;
    };
    let dialog: IgrDialog;
    const dialogRef = (ref: IgrDialog) => {
        dialog = ref;
        if (dialog) {
          dialog.closeOnOutsideClick = true;
          dialog.keepOpenOnEscape = false;
        }
    };

    useEffect(() => {
        setSingersData(SingersData);
    }, []);

    useEffect(() => {
        if (!currentColumn) return;
    
        const shouldShowDialog = currentColumnSource === "dialog";
        const shouldMarkForCheck =
          currentColumnSource === "toggle" ||
          pendingUpdateType === "disableAll" ||
          pendingUpdateType === "enableAll";
    
        if (shouldShowDialog) {
          updateCheckboxes();
          dialog?.show();
          setCurrentColumnSource(null);
        }
    
        if (shouldMarkForCheck && hierarchicalGrid) {
          updateCheckboxes();
          hierarchicalGrid.markForCheck();
          setPendingUpdateType(null);
          setCurrentColumnSource(null);
        }
    }, [currentColumn, currentColumnSource, pendingUpdateType, hierarchicalGrid]);

    const openDialog = (column: any) => {
        const columnState = columns.find((c) => c.field === column.field);
        setCurrentColumn(columnState!);
        setCurrentColumnSource("dialog");
        setCheckboxStates([]);
    };

    const getSummaryResults = (
        operand: any,
        data: any[],
        field: string
      ): IgrSummaryResult[] => {
        if (typeof operand === "function") {
          operand = new operand();
        }
        if (operand instanceof IgrSummaryOperand) {
          return operand.operate([], data, field, null);
        } else if (!operand) {
          return new IgrSummaryOperand().operate([], data, field, null);
        }
        return [];
    };

    const getDefaultSummaries = (
        data: any[],
        field: string
      ): IgrSummaryResult[] => {
        const columnInstance = hierarchicalGrid.columns.find((c) => c.field === field);
        if (
          columnInstance &&
          columnInstance.summaries &&
          typeof columnInstance.summaries.operate === "function"
        ) {
          return columnInstance.summaries.operate([], data, field, null);
        }
        return [];
    };

    const updateCheckboxes = () => {
        if (!currentColumn || !hierarchicalGrid) return;
    
        const gridData: any[] = hierarchicalGrid.data;
        let allSummaries: IgrSummaryResult[] = [];
        if (currentColumn.summaries) {
          allSummaries = getSummaryResults(
            currentColumn.summaries,
            gridData,
            currentColumn.field
          );
        } else {
          allSummaries = getDefaultSummaries(gridData, currentColumn.field);
        }
    
        let allDisabled: boolean = true;
        let allEnabled: boolean = true;
    
        const newCheckboxStates: any[] = allSummaries.map((summary) => {
          const isDisabled = currentColumn.disabledSummaries.includes(summary.key);
          if (isDisabled) {
            allEnabled = false;
          } else {
            allDisabled = false;
          }
          return {
            label: summary.label,
            key: summary.key,
            checked: isDisabled,
          };
        });
    
        setCheckboxStates(newCheckboxStates);
        setDisableAllBtnDisabled(allDisabled);
        setEnableAllBtnDisabled(allEnabled);
    };

    const toggleSummary = (summaryKey: string) => {
        if (!currentColumn || !hierarchicalGrid) return;
    
        const updatedDisabledSummaries = currentColumn.disabledSummaries.includes(
          summaryKey
        )
          ? currentColumn.disabledSummaries.filter((key: any) => key !== summaryKey)
          : [...currentColumn.disabledSummaries, summaryKey];
    
        const updatedColumns = columns.map((col: any) =>
          col.field === currentColumn.field
            ? { ...col, disabledSummaries: updatedDisabledSummaries }
            : col
        );
    
        setCurrentColumn((prev) => ({
          ...prev,
          disabledSummaries: updatedDisabledSummaries,
        }));
        setColumns(updatedColumns);
        setCurrentColumnSource("toggle");
    };

    const disableAllSummaries = () => {
        if (!currentColumn || !hierarchicalGrid) return;
    
        const gridData: any[] = hierarchicalGrid.data;
        let allSummaries: IgrSummaryResult[] = currentColumn.summaries
          ? getSummaryResults(
              currentColumn.summaries,
              gridData,
              currentColumn.field
            )
          : getDefaultSummaries(gridData, currentColumn.field);
    
        const allSummaryKeys: string[] = allSummaries.map((s) => s.key);
    
        const updatedColumns = columns.map((col: any) =>
          col.field === currentColumn.field
            ? { ...col, disabledSummaries: allSummaryKeys }
            : col
        );
    
        setCurrentColumn((prev) => ({
          ...prev,
          disabledSummaries: allSummaryKeys,
        }));
        setColumns(updatedColumns);
        setDisableAllBtnDisabled(true);
        setEnableAllBtnDisabled(false);
    
        setPendingUpdateType("disableAll");
    };

    const enableAllSummaries = () => {
        if (!currentColumn || !hierarchicalGrid) return;
    
        const updatedColumns = columns.map((col: any) =>
          col.field === currentColumn.field
            ? { ...col, disabledSummaries: [] }
            : col
        );
    
        setCurrentColumn((prev) => ({ ...prev, disabledSummaries: [] }));
        setColumns(updatedColumns);
        setDisableAllBtnDisabled(false);
        setEnableAllBtnDisabled(true);
    
        setPendingUpdateType("enableAll");
    };

    return (
        <div className="grid-wrapper container sample ig-typography">
                <div className="summaries">
                    <p className="summaries-title">Disable Summaries for Column:</p>
                    {columns.map((col: any) => (
                        <IgrButton
                            key={col.field}
                            className="summary-button"
                            variant="contained"
                            onClick={() => openDialog({ field: col.field, header: col.header })}
                        >
                            <span>{col.header}</span>
                        </IgrButton>
                    ))}
                </div>
                <IgrDialog ref={dialogRef} title={currentColumn ? `Disable Summaries for ${currentColumn.header}` : ""}>
                    <div className="summaries-dialog-items">
                         {currentColumn && checkboxStates.map((checkbox: any) => (
                            <IgrCheckbox
                                key={checkbox.key}
                                className="summaries-dialog-item"
                                checked={checkbox.checked}
                                onClick={() => toggleSummary(checkbox.key)}
                            >
                                <span>{checkbox.label}</span>
                            </IgrCheckbox>
                        ))}
                    </div>
                    <IgrButton key="disableAll" slot="footer" variant="flat" onClick={disableAllSummaries} disabled={disableAllBtnDisabled}><span>Disable All</span></IgrButton>
                    <IgrButton key="enableAll" slot="footer" variant="flat" onClick={enableAllSummaries} disabled={enableAllBtnDisabled}><span>Enable All</span></IgrButton>
                </IgrDialog>

                <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={singersData}
                    ref={hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="ID">
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        hasSummary={true}
                        disabledSummaries={columns.find((col: any) => col.field === "Artist")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        hasSummary={true}
                        summaries={GrammySummary}
                        disabledSummaries={columns.find((col: any) => col.field === "Photo")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        hasSummary={true}
                        disabledSummaries={columns.find((col: any) => col.field === "Debut")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="number"
                        hasSummary={true}
                        disabledSummaries={columns.find((col: any) => col.field === "GrammyNominations")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="number"
                        hasSummary={true}
                        disabledSummaries={columns.find((col: any) => col.field === "GrammyAwards")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="number"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="number"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string"
                                hasSummary={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                hasSummary={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="date"
                                hasSummary={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string"
                                hasSummary={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string"
                            hasSummary={true}>
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
                </div>
        </div>
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DisabledSummariesHierarchicalGridSample/>);
```


<!-- Angular, WebComponents, React -->

## Formatting summaries

By default, summary results, produced by the built-in summary operands, are localized and formatted according to the grid [`locale`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#locale) and column [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#pipeArgs). When using custom operands, the [`locale`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#locale) and [`pipeArgs`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#pipeArgs) are not applied. If you want to change the default appearance of the summary results, you may format them using the [`summaryFormatter`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#summaryFormatter) property.

```tsx
const summaryFormatter = (summary: IgrSummaryResult, summaryOperand: IgrSummaryOperand): string => {
    const result = summary.summaryResult;
    if (summary.key !== "count" && result !== null && result !== undefined) {
      const format = new Intl.DateTimeFormat("en", { year: "numeric" });
      return format.format(new Date(result));
    }
    return result;
  }

<IgrColumn hasSummary={true} summaryFormatter={summaryFormatter}></IgrColumn>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';
import { IgrSummaryResult, IgrSummaryOperand } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }
    private debutColumn: IgrColumn

    constructor(props: any) {
        super(props);

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
        this.webHierarchicalGridRenderedExpand = this.webHierarchicalGridRenderedExpand.bind(this);
        this.webHierarchicalGridSummaryFormatter = this.webHierarchicalGridSummaryFormatter.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="ID"
                    allowFiltering={true}
                    filterMode="excelStyleFilter"
                    onRendered={this.webHierarchicalGridRenderedExpand}>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut Decade"
                        sortable={true}
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="number"
                        sortable={true}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}
                        allowFiltering={true}
                        filterMode="excelStyleFilter">
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            sortable={true}
                            hasSummary={true}
                            summaryFormatter={this.webHierarchicalGridSummaryFormatter}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="number"
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="number"
                            sortable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string">
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string">
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="date">
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string">
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }


    public webHierarchicalGridRenderedExpand(args:any): void {
        var hierarchicalGrid = this.hierarchicalGrid;
        hierarchicalGrid.expandAll();
        setTimeout(() => {
            hierarchicalGrid.getColumnByName("Debut").formatter = (value: number) => Math.floor(value / 10) * 10 + 's';
        }, 100);
    }

    public webHierarchicalGridSummaryFormatter(summary: IgrSummaryResult, summaryOperand: IgrSummaryOperand): string {
        const result = summary.summaryResult;
        if (summary.key !== "count" && result !== null && result !== undefined) {
            const format = new Intl.DateTimeFormat("en", { year: "numeric" });
            return format.format(new Date(result));
        }
        return result;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- end: Angular, WebComponents, React -->

## Keyboard Navigation

The summary rows can be navigated with the following keyboard interactions:

- <kbd>UP</kbd> - navigates one cell up.
- <kbd>DOWN</kbd> - navigates one cell down.
- <kbd>LEFT</kbd> - navigates one cell left.
- <kbd>RIGHT</kbd> - navigates one cell right.
- <kbd>CTRL</kbd> + <kbd>LEFT</kbd> or <kbd>HOME</kbd> - navigates to the leftmost cell.
- <kbd>CTRL</kbd> + <kbd>RIGHT</kbd> or <kbd>END</kbd> - navigates to the rightmost cell.

<!-- WebComponents, Blazor, React -->

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```tsx
<IgrHierarchicalGrid className="hierarchicalGrid">
</IgrHierarchicalGrid>
```

Then set the related CSS properties for that class:

```css
.hierarchicalGrid {
    --ig-grid-summary-background-color:#e0f3ff;
    --ig-grid-summary-focus-background-color: rgba( #94d1f7, .3 );
    --ig-grid-summary-label-color: rgb(228, 27, 117);
    --ig-grid-summary-result-color: black;
}
```

### Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

#hierarchicalGrid {
    --ig-grid-summary-background-color:#e0f3ff;
    --ig-grid-summary-focus-background-color: rgba( #94d1f7, .3 );
    --ig-grid-summary-label-color: rgb(228, 27, 117);
    --ig-grid-summary-result-color: black;
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="ID">
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="number"
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="number"
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="number"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="number"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string">
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                hasSummary={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="date">
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string">
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: WebComponents, Blazor, React -->

## API References

- [`IgrSummaryOperand`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrsummaryoperand.html)
- [`IgrNumberSummaryOperand`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrnumbersummaryoperand.html)
- [`IgrDateSummaryOperand`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrdatesummaryoperand.html)
- [`columnGroup`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html#columnGroup)
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

---
title: React Tree Grid Clipboard Interactions - Ignite UI for React
_description: The React Tree Grid Clipboard functionality provides fast, easy and customizable way to copy, paste and export data to Excel or other programs. Try it now!
_keywords: React, Tree Grid, IgrTreeGrid, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/clipboard-interactions
_tocName: Clipboard Interactions
_premium: true
---

# React Tree Grid Clipboard Overview

Copy to clipboard operations are now available in the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html). This functionality provides a fast, easy and customizable way to copy data of the React [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) through the current multi cell data select. System Clipboard behavior gives the user ability to copy data from the [`IgrTreeGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrtreegrid.html) into Excel or other external programs.

## React Tree Grid Clipboard Example

```typescript
export class EmployeesFlatDetailsItem {
    public constructor(init: Partial<EmployeesFlatDetailsItem>) {
        Object.assign(this, init);
    }

    public Address: string;
    public Age: number;
    public City: string;
    public Country: string;
    public Fax: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public ParentID: number;
    public Phone: string;
    public PostalCode: number;
    public Title: string;
    public LastName: string;
    public FullAddress: string;

}
export class EmployeesFlatDetails extends Array<EmployeesFlatDetailsItem> {
    public constructor(items: Array<EmployeesFlatDetailsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatDetailsItem(
                {
                    Address: `Obere Str. 57`,
                    Age: 55,
                    City: `Berlin`,
                    Country: `Germany`,
                    Fax: `030-0076545`,
                    HireDate: `2008-03-20`,
                    ID: 1,
                    Name: `Johnathan Winchester`,
                    ParentID: -1,
                    Phone: `030-0074321`,
                    PostalCode: 12209,
                    Title: `Development Manager`,
                    LastName: `Winchester`,
                    FullAddress: `Obere Str. 57, Berlin, Germany`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `Avda. de la Constitución 2222`,
                    Age: 42,
                    City: `México D.F.`,
                    Country: `Mexico`,
                    Fax: `(5) 555-3745`,
                    HireDate: `2014-01-22`,
                    ID: 4,
                    Name: `Ana Sanders`,
                    ParentID: -1,
                    Phone: `(5) 555-4729`,
                    PostalCode: 5021,
                    Title: `CEO`,
                    LastName: `Sanders`,
                    FullAddress: `Avda. de la Constitución 2222, México D.F., Mexico`
                }),
                new EmployeesFlatDetailsItem(
                {
                    Address: `Mataderos 2312`,
                    Age: 49,
                    City: `México D.F.`,
                    Country: `Mexico`,
                    Fax: `(5) 555-3995`,
                    HireDate: `2014-01-22`,
                    ID: 18,
                    Name: `Victoria Lincoln`,
                    ParentID: -1,
                    Phone: `(5) 555-3932`,
                    PostalCode: 5023,
                    Title: `Accounting Manager`,
                    LastName: `Lincoln`,
                    FullAddress: `Mataderos 2312, México D.F., Mexico`
                }),
                // ... 15 more items
            ];
            super(...(newItems.slice(0, items)));
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

import { IgrColumnComponentEventArgs, IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { EmployeesFlatDetails } from './EmployeesFlatDetails';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import { IgrInput, IgrSwitch, IgrButton } from 'igniteui-react';

const mods: any[] = [
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private defaultSeparator = " ";
    private treeGrid: IgrTreeGrid;
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.defaultSeparator = this.treeGrid.clipboardOptions.separator;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.state = {
            separator: '\t',
            clipboardEnabled: true,
            clipboardHeaders: true,
            clipboardFormatters: true
        };

        this.treeGridRef = this.treeGridRef.bind(this);
        this.handleSeparatorChange = this.handleSeparatorChange.bind(this);
        this.handleClipboardEnabledChange = this.handleClipboardEnabledChange.bind(this);
        this.handleClipboardHeadersChange = this.handleClipboardHeadersChange.bind(this);
        this.handleClipboardFormattersChange = this.handleClipboardFormattersChange.bind(this);
        this.handleClearSelection = this.handleClearSelection.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options horizontal" style={{ gap: '50px' }}>
                <IgrInput
                    key="separatorInput"
                    value={this.state.separator}
                    onChange={this.handleSeparatorChange}
                >
                    <span key="separatorPrefix" slot="prefix">Change copy separator:</span>
                    <span key="separatorHelperText" slot="helper-text">The default value is a single tabulation.</span>
                </IgrInput>
                <IgrSwitch
                    key="clipboardEnabledSwitch"
                    checked={this.state.clipboardEnabled}
                    labelPosition="before"
                    onChange={this.handleClipboardEnabledChange}
                >
                    <span key="clipboardEnabledLabel">Grid copy behavior</span>
                </IgrSwitch>
                <IgrSwitch
                    key="clipboardHeadersSwitch"
                    checked={this.state.clipboardHeaders}
                    labelPosition="before"
                    onChange={this.handleClipboardHeadersChange}
                >
                    <span key="clipboardHeadersLabel">Copying of header labels</span>
                </IgrSwitch>
                <IgrSwitch
                    key="clipboardFormattersSwitch"
                    checked={this.state.clipboardFormatters}
                    labelPosition="before"
                    onChange={this.handleClipboardFormattersChange}
                >
                    <span key="clipboardFormattersLabel">Copying column formatters</span>
                </IgrSwitch>
                <IgrButton 
                    key="clearSelectionButton" 
                    onClick={this.handleClearSelection} 
                    style={{ marginTop: '0.5rem' }}
                >
                    <span key="clearSelectionLabel">Clear selection</span>
                </IgrButton>
            </div>

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesFlatDetails}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    columnSelection="multiple"
                    clipboardOptions={{
                        enabled: this.state.clipboardEnabled,
                        copyHeaders: this.state.clipboardHeaders,
                        copyFormatters: this.state.clipboardFormatters,
                        separator: this.state.separator
                    }}
                    onColumnInit={this.webGridClipboardOperationsColumnInit}
                >
                    <IgrColumn field="ID" header="ID" dataType="number" sortable />
                    <IgrColumn field="Name" dataType="string" sortable disableHiding />
                    <IgrColumn field="Title" dataType="string" sortable disableHiding />
                    <IgrColumn field="HireDate" dataType="date" sortable hidden />
                    <IgrColumn field="Age" dataType="number" sortable hidden />
                    <IgrColumn field="Address" dataType="string" sortable />
                    <IgrColumn field="City" dataType="string" sortable />
                    <IgrColumn field="Country" dataType="string" sortable />
                    <IgrColumn field="Fax" dataType="string" sortable />
                    <IgrColumn field="PostalCode" header="Postal Code" dataType="string" sortable />
                    <IgrColumn field="Phone" dataType="string" sortable />
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesFlatDetails: EmployeesFlatDetails = null;
    public get employeesFlatDetails(): EmployeesFlatDetails {
        if (this._employeesFlatDetails == null)
        {
            this._employeesFlatDetails = new EmployeesFlatDetails();
        }
        return this._employeesFlatDetails;
    }

    private handleSeparatorChange(event: any) {
        this.setState({ separator: event.detail.value || this.defaultSeparator });
    }

    private handleClipboardEnabledChange(event: any) {
        this.setState({ clipboardEnabled: event.detail.checked });
    }

    private handleClipboardHeadersChange(event: any) {
        this.setState({ clipboardHeaders: event.detail.checked });
    }

    private handleClipboardFormattersChange(event: any) {
        this.setState({ clipboardFormatters: event.detail.checked });
    }

    private handleClearSelection() {
        this.treeGrid.clearCellSelection();
    }

    private webGridClipboardOperationsColumnInit = (args: IgrColumnComponentEventArgs) => {
        let column = args.detail;
        column.formatter = (val: any) => "** " + val + " **"
        column.header = "🎉" + column.field;
    }
}

// rendering the above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);
```


## Functionality

Copy behavior is working with the default interaction defined by the browser and operating system. Thus for the copy and paste behaviors, these are:

- Windows/Unix based
  - <kbd>CTRL</kbd> + <kbd>C</kbd> / <kbd>CTRL</kbd> + <kbd>Ins</kbd> as a keyboard shortcut
  - <kbd>CTRL</kbd> + <kbd>V</kbd> / <kbd>SHIFT</kbd> + <kbd>Ins</kbd> as a keyboard shortcut
  - Copy action through the browser menu
- macOS
  - <kbd>CMD</kbd> + <kbd>C</kbd> as a keyboard shortcut
  - <kbd>CMD</kbd> + <kbd>V</kbd> as a keyboard shortcut
  - Copy action through the browser menu

## Limitations

- Both the **cut** and **copy** events are not natively supported in Internet Explorer. The exception is the
    **paste** event (IE 11) which is emitted but does not expose the `ClipboardData` property in the event.

> \[!Note]
> In order to **copy** cells in IE 11, you can use the keyboard selection. Hold the <kbd>SHIFT</kbd> key in order to make a multi-cell selection, press <kbd>CTRL</kbd> + <kbd>C</kbd> in order to copy.

- The copy behavior is disabled while the grid is in edit mode.
- The current version of this feature covers only the **copy** from grid behavior. Later on we plan to expose `paste` within grid behavior.

## API Usage

We expose [`clipboardOptions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#clipboardOptions) property, which handles the following options:

- `Enabled` Enables/disables copying of selected cells.
- `CopyHeaders` Include the associated headers when copying.
- `CopyFormatters` Apply any existing column formatters to the copied data.
- `Separator` The string separator to use the for formatting the data in the clipboard. Default is `/t`

> \[!Note]
> Excel can automatically detect text that is separated by tabs (tab-delimited `/t`) and properly paste the data into separate columns. When the paste format doesn't work, and everything you paste appears in a single column, then Excel's delimiter is set to another character, or your text is using spaces instead of tabs.

- `GridCopy` Emitted when a copy operation is executed. Fired only if copy behavior is enabled through the [`clipboardOptions`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#clipboardOptions).

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

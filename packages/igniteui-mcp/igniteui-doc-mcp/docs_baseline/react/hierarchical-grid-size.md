---
title: React Hierarchical Grid Size - Ignite UI for React
_description: Learn how to apply different size capabilities to the Hierarchical Grid component. You can use a set of compact view options in the Ignite UI for React.
_keywords:  material size, React, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/size
_tocName: Size
_premium: true
---

# React Hierarchical Grid Size

The Ignite UI for React Size feature in React Hierarchical Grid allows users to control the spacing and layout of data within the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html). By changing `--ig-size`, you can significantly improve the user experience when interacting with large amounts of content. They can choose from three size options:

- `--ig-size-large`
- `--ig-size-medium`
- `--ig-size-small`

## React Hierarchical Grid Size Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
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
import HierarchicalCustomers from './HierarchicalCustomers.json';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private sizeEditor: IgrPropertyEditorPropertyDescription
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.webHierarchicalGridSetGridSize = this.webHierarchicalGridSetGridSize.bind(this);
        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.hierarchicalGrid}
                    descriptionType="WebHierarchicalGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
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
                    data={this.hierarchicalCustomers}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    allowFiltering={true}>
                    <IgrColumn
                        field="CustomerID"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        dataType="string">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate={false}>
                        <IgrColumn
                            field="OrderID"
                            dataType="number">
                        </IgrColumn>
                        <IgrColumn
                            field="EmployeeID"
                            dataType="number">
                        </IgrColumn>
                        <IgrColumn
                            field="OrderDate"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="RequiredDate"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedDate"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipVia"
                            dataType="number">
                        </IgrColumn>
                        <IgrColumn
                            field="Freight"
                            dataType="number">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipName"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipAddress"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipCity"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipPostalCode"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipCountry"
                            dataType="string">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate={false}>
                            <IgrColumn
                                field="ProductID"
                                dataType="number">
                            </IgrColumn>
                            <IgrColumn
                                field="UnitPrice"
                                dataType="number">
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                dataType="number">
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                dataType="number">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _hierarchicalCustomers: any[] = HierarchicalCustomers;
    public get hierarchicalCustomers(): any[] {
        return this._hierarchicalCustomers;
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

    public webHierarchicalGridSetGridSize(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var newVal = (args.newValue as string).toLowerCase();
        var grid = document.getElementById("hierarchicalGrid");
        grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

## Usage

As you can see in the demo above, the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) provides three size options:  **small**, **medium** and **large**. The code snippet below shows how to set `--ig-size` either inline or part of a CSS class:

```css
.gridSize {
    --ig-size: var(--ig-size-medium);
}
```

```tsx
<IgrHierarchicalGrid className="gridSize"></IgrHierarchicalGrid>
```

And now let's see in details how each option reflects on the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) component. When you switch between different size options the height of each [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) element and the corresponding paddings will be changed. Also if you want to apply custom column [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width), please consider the fact that it must be bigger than the sum of left and right padding:

- **large** - this is the default [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) size with the lowest intense and row height equal to `50px`. Left and Right paddings are `24px`; Minimal column [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) is `80px`;
- **medium** - this is the middle intense size with `40px` row height. Left and Right paddings are `16px`; Minimal column [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) is `64px`;
- **small** - this is the size with highest intense and `32px` row height. Left and Right paddings are `12px`; Minimal column [`width`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#width) is `56px`;

> [!Note]
> Please keep in mind that currently you **can not** override any of the sizes.

Let's now continue with our sample and see in action how the `--ig-size` is applied. Let's first add a button which will help us to switch between each size:

```tsx
<IgrPropertyEditorPanel
    ref={propertyEditorRef}
    componentRenderer={renderer}
    target={grid}
    descriptionType="WebHierarchicalGrid"
    isHorizontal={true}
    isWrappingEnabled={true}>
    <IgrPropertyEditorPropertyDescription
        name="SizeEditor"
        label="Grid Size:"
        valueType="EnumValue"
        dropDownNames={["Small", "Medium", "Large"]}
        dropDownValues={["Small", "Medium", "Large"]}
        changed={webGridSetGridSize}>
    </IgrPropertyEditorPropertyDescription>
</IgrPropertyEditorPanel>
```

<!-- ComponentEnd: HierarchicalGrid -->

Now we can add the markup.

```tsx
<IgrHierarchicalGrid
    autoGenerate={false}
    ref={grid}
    allowFiltering={true}>
    <IgrColumn field="CustomerID" dataType="string"></IgrColumn>
    <IgrColumn field="CompanyName" dataType="string"></IgrColumn>
    <IgrColumn field="ContactName" dataType="string"></IgrColumn>
    <IgrColumn field="Address" dataType="string"></IgrColumn>
    <IgrColumn field="City" dataType="string"></IgrColumn>
    <IgrColumn field="PostalCode" dataType="string"></IgrColumn>
    <IgrColumn field="Country" dataType="string"></IgrColumn>
    <IgrColumn field="Phone" dataType="string"></IgrColumn>
    <IgrColumn field="Fax" dataType="string"></IgrColumn>

    <IgrRowIsland childDataKey="Orders" autoGenerate={false}>
        <IgrColumn field="OrderID" dataType="number"></IgrColumn>
        <IgrColumn field="EmployeeID" dataType="number"></IgrColumn>
        <IgrColumn field="OrderDate" dataType="date"></IgrColumn>
        <IgrColumn field="RequiredDate" dataType="date"></IgrColumn>
        <IgrColumn field="ShippedDate" dataType="date"></IgrColumn>
        <IgrColumn field="ShipVia" dataType="number"></IgrColumn>
        <IgrColumn field="Freight" dataType="number"></IgrColumn>
        <IgrColumn field="ShipName" dataType="string"></IgrColumn>
        <IgrColumn field="ShipAddress" dataType="string"></IgrColumn>
        <IgrColumn field="ShipCity" dataType="string"></IgrColumn>
        <IgrColumn field="ShipPostalCode" dataType="string"></IgrColumn>
        <IgrColumn field="ShipCountry" dataType="string"></IgrColumn>

        <IgrRowIsland childDataKey="OrderDetails" autoGenerate={false}>
            <IgrColumn field="ProductID" dataType="number"></IgrColumn>
            <IgrColumn field="UnitPrice" dataType="number"></IgrColumn>
            <IgrColumn field="Quantity" dataType="number"></IgrColumn>
            <IgrColumn field="Discount" dataType="number"></IgrColumn>
        </IgrRowIsland>
    </IgrRowIsland>
</IgrHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

Finally, let's provide the necessary logic in order to actually apply the size:

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

```tsx
private propertyEditor: IgrPropertyEditorPanel
private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
}
private sizeEditor: IgrPropertyEditorPropertyDescription
private grid: IgrHierarchicalGrid
private gridRef(r: IgrHierarchicalGrid) {
    this.grid = r;
    this.setState({});
}

constructor(props: any) {
    super(props);

    this.propertyEditorRef = this.propertyEditorRef.bind(this);
    this.webGridSetGridSize = this.webGridSetGridSize.bind(this);
    this.gridRef = this.gridRef.bind(this);
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

public webGridSetGridSize(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
    var newVal = (args.newValue as string).toLowerCase();
    var grid = document.getElementById("grid");
    grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
}
```

Another option that [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) provides for you, in order to be able to change the height of the rows in the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html), is the property [`rowHeight`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowHeight). So let's see in action how this property affects the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html) layout along with the `--ig-size`.

Please keep in mind the following:

- `--ig-size` CSS variable will have no impact on row height **if there is [`rowHeight`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowHeight) specified**.
- `--ig-size` will **affect all of the rest elements in the Hierarchical Grid**, as it has been described above.

We can now extend our sample and add [`rowHeight`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrgridbasedirective.html#rowHeight) property to the [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html):

```tsx
<IgrHierarchicalGrid className="gridSize" rowHeight="80px" width="100%" height="550px" allowFiltering={true}></IgrHierarchicalGrid>
```

## API References

- [`IgrHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrhierarchicalgrid.html)
- [`IgrColumn`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react-grids.igrcolumn.html)

Our community is active and always welcoming to new ideas.

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

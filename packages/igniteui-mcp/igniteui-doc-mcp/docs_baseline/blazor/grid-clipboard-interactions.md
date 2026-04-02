---
title: Blazor Grid Clipboard Interactions - Ignite UI for Blazor
_description: The Blazor Grid Clipboard functionality provides fast, easy and customizable way to copy, paste and export data to Excel or other programs. Try it now!
_keywords: Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/clipboard-interactions
_tocName: Clipboard Interactions
_premium: true
---

# Blazor Grid Clipboard Overview

Copy to clipboard operations are now available in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html). This functionality provides a fast, easy and customizable way to copy data of the Blazor [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) through the current multi cell data select. System Clipboard behavior gives the user ability to copy data from the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) into Excel or other external programs.

## Blazor Grid Clipboard Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical">
    <div class="options horizontal" style="gap:50px;">
        <IgbInput onkeyup="inputChange()" id="input">
            <span slot="prefix">Change copy separator:</span>
            <span slot="helper-text">The default value is a single tabulation.</span>
        </IgbInput>
        <IgbSwitch Checked=true onclick="toggleClipboardOperations()" id="copyEnable">Grid copy behavior</IgbSwitch>
        <IgbSwitch Checked=true onclick="toggleHeaderCopy()" id="headerCopy">Copying of header labels</IgbSwitch>
        <IgbSwitch Checked=true  onclick="toggleFormatterCopy()" id="formatterCopy">Copying column formatters</IgbSwitch>
        <IgbButton Checked=true  onclick="clearSelection()" id="btn">Clear Selection</IgbButton>
    </div>
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Id="grid"
        Name="grid"
        @ref="grid"
        Data="NwindData"
        RowEditable="true"
        RenderedScript="WebGridClipboardCustomOperationsRendered"
        ColumnInitScript="WebGridClipboardCustomOperationsColumnInit">
            <IgbColumn
            Field="ProductID"
            Header="Product ID">
            </IgbColumn>

            <IgbColumn
            Field="ProductName"
            Header="Product Name">
            </IgbColumn>

            <IgbColumn
            Field="SupplierID"
            Header="Supplier ID">
            </IgbColumn>

            <IgbColumn
            Field="CategoryID"
            Header="Category ID">
            </IgbColumn>

            <IgbColumn
            Field="QuantityPerUnit"
            Header="Quantity Per Unit">
            </IgbColumn>

            <IgbColumn
            Field="UnitPrice"
            Header="Unit Price">
            </IgbColumn>

            <IgbColumn
            Field="UnitsInStock"
            Header="Units In Stock">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {
    private IgbGrid grid;
    private NwindData _nwindData = null;

    public NwindData NwindData
    {
        get
        {
            if (_nwindData == null)
            {
                _nwindData = new NwindData();
            }
            return _nwindData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class NwindDataItem
{
    public double ProductID { get; set; }
    public string ProductName { get; set; }
    public double SupplierID { get; set; }
    public double CategoryID { get; set; }
    public string QuantityPerUnit { get; set; }
    public double UnitPrice { get; set; }
    public double UnitsInStock { get; set; }
    public double UnitsOnOrder { get; set; }
    public double ReorderLevel { get; set; }
    public bool Discontinued { get; set; }
    public string OrderDate { get; set; }
    public double Rating { get; set; }
    public List<NwindDataItem_LocationsItem> Locations { get; set; }
}
public class NwindDataItem_LocationsItem
{
    public string Shop { get; set; }
    public string LastInventory { get; set; }
}

public class NwindData
    : List<NwindDataItem>
{
    public NwindData()
    {
        this.Add(new NwindDataItem() { ProductID = 1, ProductName = @"Chai", SupplierID = 1, CategoryID = 1, QuantityPerUnit = @"10 boxes x 20 bags", UnitPrice = 18, UnitsInStock = 39, UnitsOnOrder = 30, ReorderLevel = 10, Discontinued = false, OrderDate = @"2012-02-12", Rating = 5, Locations = new List<NwindDataItem_LocationsItem>()
        {
            new NwindDataItem_LocationsItem() { Shop = @"Fun-Tasty Co.", LastInventory = @"2018-06-12" },
            new NwindDataItem_LocationsItem() { Shop = @"Farmer Market", LastInventory = @"2018-04-04" }}
            new NwindDataItem_LocationsItem() { Shop = @"Super Market", LastInventory = @"2018-09-09" }}
            // ... 3 more items
    }
}
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

> [!Note]
> In order to **copy** cells in IE 11, you can use the keyboard selection. Hold the <kbd>SHIFT</kbd> key in order to make a multi-cell selection, press <kbd>CTRL</kbd> + <kbd>C</kbd> in order to copy.

- The copy behavior is disabled while the grid is in edit mode.
- The current version of this feature covers only the **copy** from grid behavior. Later on we plan to expose `paste` within grid behavior.

## API Usage

We expose [`ClipboardOptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_ClipboardOptions) property, which handles the following options:

- `Enabled` Enables/disables copying of selected cells.
- `CopyHeaders` Include the associated headers when copying.
- `CopyFormatters` Apply any existing column formatters to the copied data.
- `Separator` The string separator to use the for formatting the data in the clipboard. Default is `/t`

> [!Note]
> Excel can automatically detect text that is separated by tabs (tab-delimited `/t`) and properly paste the data into separate columns. When the paste format doesn't work, and everything you paste appears in a single column, then Excel's delimiter is set to another character, or your text is using spaces instead of tabs.

- `GridCopy` Emitted when a copy operation is executed. Fired only if copy behavior is enabled through the [`ClipboardOptions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_ClipboardOptions).

## Additional Resources

<!-- ComponentStart: Grid -->

- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Selection](selection.md)
- [Virtualization and Performance](virtualization.md)
- [Multi-column headers](multi-column-headers.md)

<!-- ComponentEnd: Grid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

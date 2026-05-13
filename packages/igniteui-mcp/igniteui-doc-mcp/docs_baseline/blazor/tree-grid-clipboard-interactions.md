---
title: Blazor Tree Grid Clipboard Interactions - Ignite UI for Blazor
_description: The Blazor Tree Grid Clipboard functionality provides fast, easy and customizable way to copy, paste and export data to Excel or other programs. Try it now!
_keywords: Blazor, Tree Grid, IgbTreeGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/clipboard-interactions
_tocName: Clipboard Interactions
_premium: true
---

# Blazor Tree Grid Clipboard Overview

Copy to clipboard operations are now available in the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html). This functionality provides a fast, easy and customizable way to copy data of the Blazor [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) through the current multi cell data select. System Clipboard behavior gives the user ability to copy data from the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) into Excel or other external programs.

## Blazor Tree Grid Clipboard Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical">
    <div class="options vertical">
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
    </div>
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Name="treeGrid"
        @ref="treeGrid"
        Id="grid"
        Data="EmployeesData"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        RenderedScript="WebTreeGridClipboardCustomOperationsRendered"
        ColumnInitScript="WebTreeGridClipboardCustomOperationsColumnInit">
            <IgbColumn
            Field="ID"
            DataType="GridColumnDataType.Number"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String"
            Sortable="true"
            DisableHiding="true">
            </IgbColumn>

            <IgbColumn
            Field="Title"
            DataType="GridColumnDataType.String"
            Sortable="true"
            DisableHiding="true">
            </IgbColumn>

            <IgbColumn
            Field="HireDate"
            DataType="GridColumnDataType.Date"
            Sortable="true"
            Hidden="true">
            </IgbColumn>

            <IgbColumn
            Field="Age"
            DataType="GridColumnDataType.Number"
            Sortable="true"
            Hidden="true">
            </IgbColumn>

            <IgbColumn
            Field="Address"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="City"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Fax"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

            <IgbColumn
            Field="Phone"
            DataType="GridColumnDataType.String"
            Sortable="true">
            </IgbColumn>

        </IgbTreeGrid>

    </div>
</div>

@code {
    private IgbTreeGrid treeGrid;

    private EmployeeBasicData _EmployeesData = null;
    public EmployeeBasicData EmployeesData
    {
        get
        {
            if (_EmployeesData == null)
            {
                _EmployeesData = new EmployeeBasicData();
            }
            return _EmployeesData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeeBasicInfo
{
    public string Address { get; set; }
    public double Age { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string Fax { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public double ParentID { get; set; }
    public string Phone { get; set; }
    public double PostalCode { get; set; }
    public string Title { get; set; }
    public string LastName { get; set; }
    public string FullAddress { get; set; }
}

public class EmployeeBasicData // EmployeesFlatDetails
    : List<EmployeeBasicInfo>
{
    public EmployeeBasicData()
    {
        this.Add(new EmployeeBasicInfo()
        {
            Address = @"Obere Str. 57",
            Age = 55,
            City = @"Berlin",
            Country = @"Germany",
            Fax = @"030-0076545",
            HireDate = @"2008-03-20",
            ID = 1,
            Name = @"Johnathan Winchester",
            ParentID = -1,
            Phone = @"030-0074321",
            PostalCode = 12209,
            Title = @"Development Manager",
            LastName = @"Winchester",
            FullAddress = @"Obere Str. 57, Berlin, Germany"
        });
        this.Add(new EmployeeBasicInfo()
        {
            Address = @"Avda. de la Constitución 2222",
            Age = 42,
            City = @"México D.F.",
            Country = @"Mexico",
            Fax = @"(51) 555-3745",
            HireDate = @"2014-01-22",
            ID = 4,
            Name = @"Ana Sanders",
            ParentID = -1,
            Phone = @"(5) 555-4729",
            PostalCode = 5021,
            Title = @"CEO",
            LastName = @"Sanders",
            FullAddress = @"Avda. de la Constitución 2222, México D.F., Mexico"
        });
        this.Add(new EmployeeBasicInfo()
        {
            Address = @"Mataderos 2312",
            Age = 49,
            City = @"México D.F.",
            Country = @"Mexico",
            Fax = @"(5) 555-3995",
            HireDate = @"2014-01-22",
            ID = 18,
            Name = @"Victoria Lincoln",
            ParentID = -1,
            Phone = @"(5) 555-3932",
            PostalCode = 5023,
            Title = @"Accounting Manager",
            LastName = @"Lincoln",
            FullAddress = @"Mataderos 2312, México D.F., Mexico"
        });
        // ... 15 more items
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

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

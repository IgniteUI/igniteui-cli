---
title: Blazor Grid Row Selection - Ignite UI for Blazor
_description: Perform data manipulation without affecting the underlying data with Grid Batch Editing, using Blazor Grid. See demos & examples!
_keywords: Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["GridBaseDirective", "RowSelectorTemplateDetails", "HeadSelectorTemplateDetails", "Checkbox"]
sharedComponents: ["Grid", "TreeGrid", "PivotGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-selection
_tocName: Row Selection
_premium: true
---

# Blazor Grid Row Selection

The Ignite UI for Blazor Row Selection feature in Blazor Grid allows users to interactively select, highlight, or deselect a single or multiple rows of data. There are several selection modes available in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html):

- None Selection
- Multiple Selection
- Single Selection

## Blazor Row Selection Example

<!-- ComponentStart: Grid, HierarchicalGrid -->

The sample below demonstrates the three types of [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)'s **row selection** behavior. Use the drop-down below to enable each of the available selection modes. Use the checkbox to _hide_ or _show_ the row selector checkboxes.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="WebGrid"
        IsWrappingEnabled="true"
        IsHorizontal="true"

        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            Name="selectionType"
            @ref="selectionType"
            PropertyPath="RowSelection"
            ValueType="PropertyEditorValueType.EnumValue"
            Label="Row Selection"
            DropDownNames="@(new string[] { "None", "Single", "Multiple" })"
            DropDownValues="@(new string[] { "None", "Single", "Multiple" })">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            Name="hideRowSelectors"
            @ref="hideRowSelectors"
            PropertyPath="HideRowSelectors">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="FinancialDataAll"
        PrimaryKey="ID"
        Moving="true"
        Id="grid1"
        Name="grid1"
        @ref="grid1">
            <IgbColumn
            Field="Category">
            </IgbColumn>

            <IgbColumn
            Field="Type">
            </IgbColumn>

            <IgbColumn
            Field="Price"
            DataType="GridColumnDataType.Currency"
            PipeArgs="ColumnPipeArgs1"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Buy"
            DataType="GridColumnDataType.Currency"
            PipeArgs="ColumnPipeArgs2"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="Sell"
            DataType="GridColumnDataType.Currency"
            PipeArgs="ColumnPipeArgs3"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbColumn
            Field="Change"
            BodyTemplateScript="WebGridCurrencyCellTemplate"
            Name="column4"
            @ref="column4">
            </IgbColumn>

            <IgbColumn
            Field="ChangePercent"
            Header="Change Percent"
            DataType="GridColumnDataType.Number"
            BodyTemplateScript="WebGridCurrencyCellTemplate"
            Name="column5"
            @ref="column5">
            </IgbColumn>

            <IgbColumn
            Field="YearlyChange"
            Header="Yearly Change"
            DataType="GridColumnDataType.Number"
            BodyTemplateScript="WebGridCurrencyCellTemplate"
            Name="column6"
            @ref="column6">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var selectionType = this.selectionType;
        var hideRowSelectors = this.hideRowSelectors;
        var grid1 = this.grid1;
        var column1 = this.column1;
        var column2 = this.column2;
        var column3 = this.column3;
        var column4 = this.column4;
        var column5 = this.column5;
        var column6 = this.column6;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.grid1;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription selectionType;
    private IgbPropertyEditorPropertyDescription hideRowSelectors;
    private IgbGrid grid1;
    private IgbColumn column1;
    private IgbColumnPipeArgs _columnPipeArgs1 = null;
    public IgbColumnPipeArgs ColumnPipeArgs1
    {
        get
        {
            if (this._columnPipeArgs1 == null)
            {
                var columnPipeArgs1 = new IgbColumnPipeArgs();
                columnPipeArgs1.CurrencyCode = "USD";
                columnPipeArgs1.DigitsInfo = "1.2-2";
                this._columnPipeArgs1 = columnPipeArgs1;
            }
            return this._columnPipeArgs1;
        }
    }
    private IgbColumn column2;
    private IgbColumnPipeArgs _columnPipeArgs2 = null;
    public IgbColumnPipeArgs ColumnPipeArgs2
    {
        get
        {
            if (this._columnPipeArgs2 == null)
            {
                var columnPipeArgs2 = new IgbColumnPipeArgs();
                columnPipeArgs2.CurrencyCode = "USD";
                columnPipeArgs2.DigitsInfo = "1.2-2";
                this._columnPipeArgs2 = columnPipeArgs2;
            }
            return this._columnPipeArgs2;
        }
    }
    private IgbColumn column3;
    private IgbColumnPipeArgs _columnPipeArgs3 = null;
    public IgbColumnPipeArgs ColumnPipeArgs3
    {
        get
        {
            if (this._columnPipeArgs3 == null)
            {
                var columnPipeArgs3 = new IgbColumnPipeArgs();
                columnPipeArgs3.CurrencyCode = "USD";
                columnPipeArgs3.DigitsInfo = "1.2-2";
                this._columnPipeArgs3 = columnPipeArgs3;
            }
            return this._columnPipeArgs3;
        }
    }
    private IgbColumn column4;
    private IgbColumn column5;
    private IgbColumn column6;

    private FinancialDataAll _financialDataAll = null;
    public FinancialDataAll FinancialDataAll
    {
        get
        {
            if (_financialDataAll == null)
            {
                _financialDataAll = new FinancialDataAll();
            }
            return _financialDataAll;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class FinancialDataAllItem
{
    public string Category { get; set; }
    public string Type { get; set; }
    public double Spread { get; set; }
    public double Open { get; set; }
    public double Price { get; set; }
    public double Buy { get; set; }
    public double Sell { get; set; }
    public double Change { get; set; }
    public double ChangePercent { get; set; }
    public double Volume { get; set; }
    public double High { get; set; }
    public double Low { get; set; }
    public double YearlyHigh { get; set; }
    public double YearlyLow { get; set; }
    public double YearlyStart { get; set; }
    public double YearlyChange { get; set; }
    public string Settlement { get; set; }
    public string Contract { get; set; }
    public string Region { get; set; }
    public string Country { get; set; }
    public string Risk { get; set; }
    public string Sector { get; set; }
    public string Currency { get; set; }
    public string Security { get; set; }
    public string Issuer { get; set; }
    public string Maturity { get; set; }
    public string IndGroup { get; set; }
    public string IndSector { get; set; }
    public string IndCategory { get; set; }
    public string CUSIP { get; set; }
    public string Cpn { get; set; }
    public double KRD_3YR { get; set; }
    public double ZV_SPREAD { get; set; }
    public double KRD_5YR { get; set; }
    public double KRD_1YR { get; set; }
    public double ID { get; set; }
}

public class FinancialDataAll
    : List<FinancialDataAllItem>
{
    public FinancialDataAll()
    {
        this.Add(new FinancialDataAllItem() { Category = @"Fuel", Type = @"Ethanol", Spread = 0.01, Open = 1.512, Price = 2.76, Buy = 2.75, Sell = 2.76, Change = 0.01, ChangePercent = 0.2, Volume = 14, High = 2.75, Low = 1.12, YearlyHigh = 2.75, YearlyLow = 1.12, YearlyStart = 1.48, YearlyChange = 86.7, Settlement = @"Cash", Contract = @"CFD", Region = @"Middle East", Country = @"Saudi Arabia", Risk = @"Low", Sector = @"Government", Currency = @"EUR", Security = @"Good", Issuer = @"American Airlines", Maturity = @"2022-02-11", IndGroup = @"Airlines", IndSector = @"Consumer, Cyclical", IndCategory = @"Airlines", CUSIP = @"1765866", Cpn = @"7.875", KRD_3YR = 6E-05, ZV_SPREAD = 28.302, KRD_5YR = 0, KRD_1YR = -0.00187, ID = 0 });
        this.Add(new FinancialDataAllItem() { Category = @"Fuel", Type = @"Natural Gas", Spread = 0.02, Open = 2.094, Price = 2.07, Buy = 2.09, Sell = 2.09, Change = -0.03, ChangePercent = -1.8, Volume = 2783, High = 2.11, Low = 2.09, YearlyHigh = 3.2, YearlyLow = 1.84, YearlyStart = 2.52, YearlyChange = -16.51, Settlement = @"Credit", Contract = @"Options", Region = @"Middle East", Country = @"Saudi Arabia", Risk = @"High", Sector = @"Public", Currency = @"PLN", Security = @"High", Issuer = @"Delta Airlines", Maturity = @"2022-02-22", IndGroup = @"Airlines", IndSector = @"Consumer, Cyclical", IndCategory = @"Airlines", CUSIP = @"1765866", Cpn = @"7.875", KRD_3YR = 6E-05, ZV_SPREAD = 28.302, KRD_5YR = 0, KRD_1YR = -0.00187, ID = 1 });
        this.Add(new FinancialDataAllItem() { Category = @"Agriculture", Type = @"Cotton", Spread = 0.01, Open = 61.77, Price = 62.9, Buy = 61.77, Sell = 61.77, Change = 1.14, ChangePercent = 1.84, Volume = 3612, High = 62.06, Low = 61.32, YearlyHigh = 67.59, YearlyLow = 54.33, YearlyStart = 60.96, YearlyChange = 1.31, Settlement = @"Cash", Contract = @"Options", Region = @"North America", Country = @"United States", Risk = @"Low", Sector = @"Private", Currency = @"EUR", Security = @"Good", Issuer = @"Southwest", Maturity = @"2022-05-23", IndGroup = @"Airlines", IndSector = @"Consumer, Cyclical", IndCategory = @"Airlines", CUSIP = @"1765866", Cpn = @"7.875", KRD_3YR = 6E-05, ZV_SPREAD = 28.302, KRD_5YR = 0, KRD_1YR = -0.00187, ID = 2 });
        // ... 997 more items
    }
}
```

## Setup

In order to setup row selection in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html), you just need to set the [`RowSelection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowSelection) property. This property accepts `GridSelectionMode` enumeration.

`GridSelectionMode` exposes the following modes:

- **None**
- **Single**
- **Multiple**

Below we will take a look at each of them in more detail.

### None Selection

In the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) by default row selection is disabled ([`RowSelection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowSelection) is None). So you can **not** select or deselect a row through interaction with the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) UI, the only way to complete these actions is to use the provided API methods.

### Single Selection

Single row selection can now be easily set up, the only thing you need to do, is to set [`RowSelection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowSelection) to `Single` property. This gives you the opportunity to **select only one row within a grid**. You can select a row by clicking on a cell or pressing the <kbd>SPACE</kbd> key when you focus on a cell of the row, and of course you can select a row by clicking on the row selector field. When row is selected or deselected `RowSelectionChanging` event is emitted.

```razor
    <IgbGrid Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Single
             PrimaryKey="Key"
             @ref=Grid
             AutoGenerate=true
             RowSelectionChanging='RowSelectionChanging'
             Data=northwindEmployees>
    </IgbGrid>
@code {
    private void RowSelectionChanging(IgbRowSelectionEventArgs args)
    {
        // handler for selection change
    }
}
```

### Multiple Selection

To enable multiple row selection in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) just set the [`RowSelection`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowSelection) property to `Multiple`. This will enable a row selector field on each row and in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) header. The row selector allows users to select multiple rows, with the selection persisting through scrolling, paging, and data operations, such as sorting and filtering. The row also can be selected by clicking on a cell or by pressing the <kbd>SPACE</kbd> key when a cell is focused. If you have selected one row and click on another while holding the <kbd>SHIFT</kbd> key, this will select the whole range of rows. In this selection mode, when you click on a single row, the previous selected rows will be deselected. If you **click** while holding the <kbd>CTRL</kbd> key, the row will be toggled and the previous selection will be preserved.

```razor
    <IgbGrid Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             @ref=Grid
             AutoGenerate=true
             Data=northwindEmployees>
    </IgbGrid>
```

**Notes**

<!-- ComponentStart: Grid, HierarchicalGrid -->

<!-- ComponentEnd: Grid, HierarchicalGrid -->

- Row selection will trigger `RowSelectionChanging` event. This event gives you information about the **new selection**, **old selection**, the rows that have been **added** and **removed** from the old selection. Also the event is **cancellable**, so this allows you to prevent selection.
- When row selection is enabled row selectors are displayed, but if you don't want to show them, you can set [`HideRowSelectors`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_HideRowSelectors) to **true**.
- When you switch between row selection modes at runtime, this will clear the previous row selection state.

## API usage

### Select Rows Programmatically

The code snippet below can be used to select one or multiple rows simultaneously (via [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey)). Additionally, the second parameter of this method is a boolean property through which you may choose whether the previous row selection will be cleared or not. The previous selection is preserved by default.

```razor
    <IgbGrid Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             @ref=grid
             AutoGenerate=true
             Data=northwindEmployees>
    </IgbGrid>
    <IgbButton @onclick=Select>Select</IgbButton>
    @code {
        public IgbGrid grid;
        private async void Select()
        {
            object[] array = new object[] { 1,2, 5 };
            await this.grid.SelectRowsAsync(array, true);
        }
    }
```

This will add the rows which correspond to the data entries with IDs 1, 2 and 5 to the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) selection.

### Deselect Rows

If you need to deselect rows programmatically, you can use the [`DeselectRows`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_DeselectRows) method.

```razor
    <IgbGrid Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             @ref=grid
             AutoGenerate=true
             Data=northwindEmployees>
    </IgbGrid>
    <IgbButton @onclick=Deselect>Deselect</IgbButton>
    @code {
        public IgbGrid grid;
        private async void Deselect()
        {
            object[] array = new object[] { 1, 2, 5 };
            await this.grid.DeselectRowsAsync(array);
        }
    }
```

### Row Selection Event

When there is some change in the row selection `RowSelectionChanging` event is emitted. `RowSelectionChanging` exposes the following arguments:

- `OldSelection`  - array of row IDs that contains the previous state of the row selection.
- `NewSelection` - array of row IDs that match the new state of the row selection.
- `Added` - array of row IDs that are currently added to the selection.
- `Removed` - array of row IDs that are currently removed according old selection state.
- `Event` - the original event that triggered row selection change.
- `Cancel` - allows you the prevent the row selection change.

```razor
    <IgbGrid Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             @ref=Grid
             AutoGenerate=true
             RowSelectionChanging='RowSelectionChanging'
             Data=northwindEmployees>
    </IgbGrid>
@code {
    private void RowSelectionChanging(IgbRowSelectionEventArgs args)
    {
        // handler
    }
}
```

### Select All Rows

Another useful API method that [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) provides is [`SelectAllRows`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SelectAllRows). By default this method will select all data rows, but if filtering is applied, it will select only the rows that match the filter criteria. If you call the method with **false** parameter, `SelectAllRows(false)` will always select all data in the grid, even if filtering is applied.

> **Note** Keep in mind that [`SelectAllRows`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SelectAllRows) will not select the rows that are deleted.

### Deselect All Rows

[`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) provides a [`DeselectAllRows`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_DeselectAllRows) method, which by default will deselect all data rows, but if filtering is applied will deselect only the rows that match the filter criteria. If you call the method with **false** parameter, `DeselectAllRows(false)` will always clear all row selection state even if filtering is applied.

### How to get Selected Rows

If you need to see which rows are currently selected, you can get their row IDs with the [`SelectedRows`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SelectedRows) getter.

```razor
    <IgbGrid Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             @ref=grid
             AutoGenerate=true
             Data=northwindEmployees>
    </IgbGrid>
    <IgbButton @onclick=GetSelected>Get selected</IgbButton>
    @code {
        public IgbGrid grid;
        private async void GetSelected()
        {
            var selected = this.grid.SelectedRows;
        }
    }
```

Additionally, assigning row IDs to [`SelectedRows`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SelectedRows) will allow you to change the grid's selection state.

```razor
<IgbGrid Width="100%"
             Id="grid"
             Height="100%"
             RowSelection=GridSelectionMode.Multiple
             PrimaryKey="Key"
             SelectedRows=selectedRows
             @ref=Grid
             AutoGenerate=true
             Data=northwindEmployees>
</IgbGrid>

@code {
    public object[] selectedRows = new object[] { 1, 2, 5 };
}
```

### Row Selector Templates

You can template header and row selectors in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) and also access their contexts which provide useful functionality for different scenarios.

By default, the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) **handles all row selection interactions** on the row selector's parent container or on the row itself, leaving just the state visualization for the template. Overriding the base functionality should generally be done using the [RowSelectionChanging event](#row-selection-event). In case you implement a custom template with a [`Click`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckboxBase.html#IgniteUI_Blazor_Controls_IgbCheckboxBase_Click) handler which overrides the base functionality, you should stop the event's propagation to preserve the correct row state.

#### Row Template

To create a custom row selector template,  within the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) you can use the [`RowSelectorTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowSelectorTemplate) property. From the template you can access the implicitly provided context variable, with properties that give you information about the row's state.

The [`Selected`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowSelectorTemplateDetails.html#IgniteUI_Blazor_Controls_IgbRowSelectorTemplateDetails_Selected) property shows whether the current row is selected or not while the [`Index`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowSelectorTemplateDetails.html#IgniteUI_Blazor_Controls_IgbRowSelectorTemplateDetails_Index) property can be used to access the row index.

```razor
igRegisterScript("WebGridRowSelectorTemplate", (ctx) => {
    var html = window.igTemplating.html;
    if (ctx.implicit.selected) {
        return html`<div style="justify-content: space-evenly;display: flex;width: 70px;">
    <span> ${ctx.implicit.index}</span>
<igc-checkbox checked></igc-checkbox>
</div>`;
    } else {
        return html`<div style="justify-content: space-evenly;display: flex;width: 70px;">
    <span> ${ctx.implicit.index}</span>
<igc-checkbox></igc-checkbox>
</div>`;
    }
}, false);
```

The [`RowID`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowSelectorTemplateDetails.html#IgniteUI_Blazor_Controls_IgbRowSelectorTemplateDetails_RowID) property can be used to get a reference of an [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) row. This is useful when you implement a `click` handler on the row selector element.

In the above example we are using an [`IgbCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckbox.html) and we bind `rowContext.selected` to its [`Checked`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckboxBase.html#IgniteUI_Blazor_Controls_IgbCheckboxBase_Checked) property. See this in action in our [Row Numbering Demo](#row-numbering-demo).

### Header Template

To create a custom header selector template, within the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html), you can use the [`HeadSelectorTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_HeadSelectorTemplate) property. From the template you can access the implicitly provided context variable, with properties that give you information about the header's state.

The [`SelectedCount`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHeadSelectorTemplateDetails.html#IgniteUI_Blazor_Controls_IgbHeadSelectorTemplateDetails_SelectedCount) property shows you how many rows are currently selected while [`TotalCount`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHeadSelectorTemplateDetails.html#IgniteUI_Blazor_Controls_IgbHeadSelectorTemplateDetails_TotalCount) shows you how many rows there are in the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) in total.

```razor
public RenderFragment<IgbHeadSelectorTemplateContext> Template = (context) =>
{
    return @<div> <img style="min-width:80px;" src="https://www.infragistics.com/angular-demos-lob/assets/images/card/avatars/igLogo.png"/></div>;
};
```

The [`SelectedCount`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHeadSelectorTemplateDetails.html#IgniteUI_Blazor_Controls_IgbHeadSelectorTemplateDetails_SelectedCount) and [`TotalCount`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHeadSelectorTemplateDetails.html#IgniteUI_Blazor_Controls_IgbHeadSelectorTemplateDetails_TotalCount) properties can be used to determine if the head selector should be checked or indeterminate (partially selected).

### Row Numbering Demo

This demo shows the usage of custom header and row selectors. The latter uses [`Index`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowSelectorTemplateDetails.html#IgniteUI_Blazor_Controls_IgbRowSelectorTemplateDetails_Index) to display row numbers and an [`IgbCheckbox`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCheckbox.html) bound to [`Selected`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowSelectorTemplateDetails.html#IgniteUI_Blazor_Controls_IgbRowSelectorTemplateDetails_Selected).

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="true"
        Name="grid"
        @ref="grid"
        Data="CustomersData"
        RowSelection="GridSelectionMode.Multiple"
        RowSelectorTemplateScript="WebGridRowSelectorTemplate"
        HeadSelectorTemplateScript="WebGridHeaderRowSelectorTemplate">
            <IgbColumn
            Field="ContactName">
            </IgbColumn>

            <IgbColumn
            Field="Country">
            </IgbColumn>

            <IgbColumn
            Field="City">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode">
            </IgbColumn>

            <IgbColumn
            Field="Company">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;

    }

    private IgbGrid grid;

    private CustomersData _customersData = null;
    public CustomersData CustomersData
    {
        get
        {
            if (_customersData == null)
            {
                _customersData = new CustomersData();
            }
            return _customersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CustomersDataItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public double PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
}

public class CustomersData
    : List<CustomersDataItem>
{
    public CustomersData()
    {
        this.Add(new CustomersDataItem() { ID = @"ALFKI", Company = @"Alfreds Futterkiste", ContactName = @"Maria Anders", ContactTitle = @"Sales Representative", Address = @"Obere Str. 57", City = @"Berlin", Region = @"East", PostalCode = 12209, Country = @"Germany", Phone = @"030-0074321", Fax = @"030-0076545" });
        this.Add(new CustomersDataItem() { ID = @"ANATR", Company = @"Ana Trujillo Emparedados y helados", ContactName = @"Ana Trujillo", ContactTitle = @"Owner", Address = @"Avda. de la Constitución 2222", City = @"México D.F.", Region = @"South", PostalCode = 5021, Country = @"Mexico", Phone = @"(5) 555-4729", Fax = @"(5) 555-3745" });
        this.Add(new CustomersDataItem() { ID = @"ANTON", Company = @"Antonio Moreno Taquería", ContactName = @"Antonio Moreno", ContactTitle = @"Owner", Address = @"Mataderos 2312", City = @"México D.F.", Region = @"South", PostalCode = 5023, Country = @"Mexico", Phone = @"(5) 555-3932", Fax = @"(5) 555-3745" });
        // ... 24 more items
    }
}
```

<!-- ComponentStart: Grid, TreeGrid -->

### Excel Style Row Selectors Demo

This demo uses custom templates to resemble Excel-like header and row selectors.

<!-- NOTE this sample is differed -->

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="CustomersData"
        Name="grid"
        @ref="grid"
        Id="grid"
        RowSelection="GridSelectionMode.Multiple"
        RowSelectorTemplateScript="WebGridRowSelectorExcelTemplate"
        HeadSelectorTemplateScript="WebGridHeaderRowSelectorExcelTemplate">
            <IgbPaginator
            Name="paginator"
            @ref="paginator"
            PerPage="15"
            SelectOptions="@(new double[] { 5, 10, 15, 25, 50 })"
            ResourceStrings="PaginatorResourceStrings1">
            </IgbPaginator>

            <IgbColumn
            Field="ContactName"
            Header="Name">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            Header="Country">
            </IgbColumn>

            <IgbColumn
            Field="City"
            Header="City">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Header="Postal Code">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Header="Company">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var paginator = this.paginator;

    }

    private IgbGrid grid;
    private IgbPaginator paginator;
    private IgbPaginatorResourceStrings _paginatorResourceStrings1 = null;
    public IgbPaginatorResourceStrings PaginatorResourceStrings1
    {
        get
        {
            if (this._paginatorResourceStrings1 == null)
            {
                var paginatorResourceStrings1 = new IgbPaginatorResourceStrings();
                paginatorResourceStrings1.Igx_paginator_label = "Items per page";
                this._paginatorResourceStrings1 = paginatorResourceStrings1;
            }
            return this._paginatorResourceStrings1;
        }
    }

    private CustomersData _customersData = null;
    public CustomersData CustomersData
    {
        get
        {
            if (_customersData == null)
            {
                _customersData = new CustomersData();
            }
            return _customersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CustomersDataItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public double PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
}

public class CustomersData
    : List<CustomersDataItem>
{
    public CustomersData()
    {
        this.Add(new CustomersDataItem() { ID = @"ALFKI", Company = @"Alfreds Futterkiste", ContactName = @"Maria Anders", ContactTitle = @"Sales Representative", Address = @"Obere Str. 57", City = @"Berlin", Region = @"East", PostalCode = 12209, Country = @"Germany", Phone = @"030-0074321", Fax = @"030-0076545" });
        this.Add(new CustomersDataItem() { ID = @"ANATR", Company = @"Ana Trujillo Emparedados y helados", ContactName = @"Ana Trujillo", ContactTitle = @"Owner", Address = @"Avda. de la Constitución 2222", City = @"México D.F.", Region = @"South", PostalCode = 5021, Country = @"Mexico", Phone = @"(5) 555-4729", Fax = @"(5) 555-3745" });
        this.Add(new CustomersDataItem() { ID = @"ANTON", Company = @"Antonio Moreno Taquería", ContactName = @"Antonio Moreno", ContactTitle = @"Owner", Address = @"Mataderos 2312", City = @"México D.F.", Region = @"South", PostalCode = 5023, Country = @"Mexico", Phone = @"(5) 555-3932", Fax = @"(5) 555-3745" });
        // ... 24 more items
    }
}
```

<!-- ComponentEnd: Grid, TreeGrid -->

### Conditional Selection Demo

This demo prevents some rows from being selected using the `RowSelectionChanging` event and a custom template with disabled checkbox for non-selectable rows.

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="CustomersData"
        Name="grid"
        @ref="grid"
        Id="grid"
        PrimaryKey="ID"
        RowSelection="GridSelectionMode.Multiple"
        RowSelectionChangingScript="WebGridRowSelectionConditional">
            <IgbColumn
            Field="ContactName"
            Header="Name"
            Width="20%">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            Header="Country"
            Width="20%">
            </IgbColumn>

            <IgbColumn
            Field="City"
            Header="City"
            Width="20%">
            </IgbColumn>

            <IgbColumn
            Field="PostalCode"
            Width="20%">
            </IgbColumn>

            <IgbColumn
            Field="Company"
            Width="20%">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;

    }

    private IgbGrid grid;

    private CustomersData _customersData = null;
    public CustomersData CustomersData
    {
        get
        {
            if (_customersData == null)
            {
                _customersData = new CustomersData();
            }
            return _customersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class CustomersDataItem
{
    public string ID { get; set; }
    public string Company { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public double PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
}

public class CustomersData
    : List<CustomersDataItem>
{
    public CustomersData()
    {
        this.Add(new CustomersDataItem() { ID = @"ALFKI", Company = @"Alfreds Futterkiste", ContactName = @"Maria Anders", ContactTitle = @"Sales Representative", Address = @"Obere Str. 57", City = @"Berlin", Region = @"East", PostalCode = 12209, Country = @"Germany", Phone = @"030-0074321", Fax = @"030-0076545" });
        this.Add(new CustomersDataItem() { ID = @"ANATR", Company = @"Ana Trujillo Emparedados y helados", ContactName = @"Ana Trujillo", ContactTitle = @"Owner", Address = @"Avda. de la Constitución 2222", City = @"México D.F.", Region = @"South", PostalCode = 5021, Country = @"Mexico", Phone = @"(5) 555-4729", Fax = @"(5) 555-3745" });
        this.Add(new CustomersDataItem() { ID = @"ANTON", Company = @"Antonio Moreno Taquería", ContactName = @"Antonio Moreno", ContactTitle = @"Owner", Address = @"Mataderos 2312", City = @"México D.F.", Region = @"South", PostalCode = 5023, Country = @"Mexico", Phone = @"(5) 555-3932", Fax = @"(5) 555-3745" });
        // ... 24 more items
    }
}
```

## API References

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)
- [`IgbGridRow`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridRow.html)

## Additional Resources

<!-- ComponentStart: Grid, TreeGrid -->

- [Selection](selection.md)
- [Cell selection](cell-selection.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Virtualization and Performance](virtualization.md)

<!-- ComponentEnd: Grid, TreeGrid -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

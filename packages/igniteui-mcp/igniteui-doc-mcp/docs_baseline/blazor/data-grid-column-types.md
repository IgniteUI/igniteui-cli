---
title: Blazor Data Grid | Column Types | Infragistics
_description: Learn how Infragistics' Ignite UI for Blazor data table & grid supports four column types to display your content such as Image, Text, Numeric, DataTime or a Template Column. View Ignite UI for Blazor tutorials!
_keywords: Blazor Table, Data Grid, column types, Ignite UI for Blazor, Infragistics
mentionedTypes: [ "Grid","CellInfo", "TemplateCellInfo", "DataGridColumn"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/grid/column-types
_tocName: Column Types
_premium: true
---

> [!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

# Blazor Column Types

The Ignite UI for Blazor Data Table / Data Grid supports 5 column types, plus a Template Column type, giving you complete flexibility over the way your data is displayed in the Blazor data grid. Column types supported are Text column, Numeric column, DateTime column, Image column, ComboBox and Template.

Each column binds to data by setting the [`Field`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridColumn.html#IgniteUI_Blazor_Controls_IgbDataGridColumn_Field) property to the name of the corresponding property on the items of your underlying data source bound to the Blazor data grid.

## Blazor Column Types Example

```razor
@using System.ComponentModel
@using IgniteUI.Blazor.Controls


<div class="container vertical">

    <div class="container vertical">

        @if (Employees != null && CountryNames != null)
        {
            <div style="overflow: hidden">
                <IgbDataGrid Height="100%" Width="100%"
                  @ref="@DataGridRef"
                  RowHeight="50"
                  DataSource="Employees"
                  AutoGenerateColumns="false"
                  ActivationMode="GridActivationMode.Cell">

                    <IgbImageColumn IsEditable="false" Width="100" Field="Photo" PaddingTop="5" PaddingBottom="5" PaddingRight="10"
                                HorizontalAlignment="@CellContentHorizontalAlignment.Stretch" />

                    <IgbTextColumn Width="@("*>130")" Field="Name" />

                    @*NOTE: CellUpdatingScript is implemented in wwwroot/*.js file *@
                    <IgbTemplateColumn Width="@("*>160")" Field="Sales" CellUpdatingScript="onUpdatingSalesColumn"
                                    HorizontalAlignment="@CellContentHorizontalAlignment.Center"
                                    />

                    <IgbNumericColumn Width="@("*>130")" Field="Salary" PositivePrefix="$"
                                ShowGroupingSeparator="true"
                                MaxFractionDigits="0"
                                MinFractionDigits="0" />

                    <IgbDateTimeColumn Width="@("*>140")" Field="Birthday" HeaderText="Date of Birth" />

                    <IgbComboBoxColumn Width="@("*>120")" Field="Country" DataSource="CountryNames" />
                    <IgbImageColumn IsEditable="false" Width="@("*>110")" Field="CountryFlag" HeaderText="Flag"
                                PaddingTop="5" PaddingBottom="5" PaddingRight="10"
                                HorizontalAlignment="@CellContentHorizontalAlignment.Stretch" />

                    @*NOTE: CellUpdatingScript is implemented in wwwroot/*.js file *@
                    <IgbTemplateColumn Width="@("*>170")" Field="Address" CellUpdatingScript="onUpdatingAddressColumn" />
                    <IgbTemplateColumn Width="@("*>130")" Field="Phone" CellUpdatingScript="onUpdatingPhoneColumn" />

                    <IgbTextColumn Width="@("*>120")" Field="Income" />
                    <IgbNumericColumn Width="100" Field="Age" HorizontalAlignment="@CellContentHorizontalAlignment.Left"/>

                </IgbDataGrid>
            </div>
        }


    </div>
</div>

@code {

    protected List<Employee> Employees;
    protected List<Country> CountryNames;

    private IgbDataGrid _grid;
    private IgbDataGrid DataGridRef
    {
        get { return _grid; }
        set { _grid = value; }
    }

    protected override void OnInitialized()
    {
        this.Employees = EmployeeData.Create(50, false);
        for (int i = 0; i < this.Employees.Count; i++)
        {
            this.Employees[i].PropertyChanged += OnPropertyChanged;
        }

        this.CountryNames = new List<Country> {
            new Country { Name = "Canada" },
            new Country { Name = "France" },
            new Country { Name = "Poland" },
            new Country { Name = "UK" },
            new Country { Name = "USA" }
        };
    }

    protected void OnPropertyChanged(object item, PropertyChangedEventArgs args)
    {
        var employee = item as Employee;

        if (this._grid != null && employee != null)
            this._grid.NotifyUpdateItem(this.Employees, employee.Index, employee);
    }

    public class Country
    {
        public string Name { get; set; }
    }

}
```


<div class="divider--half"></div>

## Text Column

The Blazor data grid is used for displaying formatted text in its associated cells. This is the default column type used to display data of the string type.

## Numeric Column

The [`IgbNumericColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericColumn.html) is used for displaying a formatted numeric value in its associated cells and enables control of decimal place placement within cells and displaying fractional digits.

## DateTime Column

The [`IgbDateTimeColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeColumn.html) is used for displaying Date objects in its associated cells and enables control to format the Date objects how you see fit.

## Image Column

The [`IgbImageColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbImageColumn.html) is used for displaying an image within a cell and exposes options for image stretch customization for cells by using its [`ImageStretchOption`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbImageColumn.html#IgniteUI_Blazor_Controls_IgbImageColumn_ImageStretchOption) option.

You can also choose what type of resource your image is by setting the `ImageResourceType` option.

## ComboBox Column

The [`IgbComboBoxColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbComboBoxColumn.html) is used for displaying a drop-down list from which your end users can select a single item.

Data binding can be achieved using an array of complex objects via the column's `DataSource` property.

The [`TextField`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbComboBoxColumn.html#IgniteUI_Blazor_Controls_IgbComboBoxColumn_TextField) property determines which value is shown when users make a selection.

The [`ValueField`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbComboBoxColumn.html#IgniteUI_Blazor_Controls_IgbComboBoxColumn_ValueField) property determines the bound value of the underlying data item selected. This is necessary if your list of objects have several properties.

## Template Column

The [`IgbTemplateColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTemplateColumn.html) is used in conjunction with a cell template. It enables you to apply a custom template to the column's cell. This is done by handling the `CellUpdating` event of the template column.

The `CellUpdating` event's arguments expose the [`IgbTemplateColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTemplateColumn.html) that fires the event as well as a [`IgbTemplateCellUpdatingEventArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTemplateCellUpdatingEventArgs.html) parameter. This event arguments parameter exposes a `Content` property that returns the HTMLDivElement that will be placed within the associated cells of the column. You can then append new elements to this div.

The [`IgbTemplateCellUpdatingEventArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTemplateCellUpdatingEventArgs.html) also exposes a `CellInfo` property that you can use to get a `TemplateCellInfo` object. This object exposes information about the cell and the row, such as the index, underlying data item, and appearance of the cell.

## Sparkline Column

You can embed Sparkline components in [`IgbTemplateColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTemplateColumn.html) to show more complex data structures.
Refer to the [Column Sparkline](type-sparkline-table.md) topic for information on how to do this.

## Code Snippet

The following demonstrates the implementation of each of the columns described in this topic:

The following is a sample data source to use with the above columns.

```razor
<IgbDataGrid Height="100%" Width="100%"
    DefaultColumnMinWidth="120"
    AutoGenerateColumns="false"
    DataSource="DataSource">
    <IgbTextColumn Field="FirstName" HeaderText="First Name" />
    <IgbTextColumn Field="LastName" HeaderText="Last Name" />
    <IgbComboBoxColumn Field="City" />
    <IgbTemplateColumn Field="Address" HeaderText="Address" CellUpdatingScript="onUpdatingAddressColumn" />
    <IgbImageColumn Field="Photo" HeaderText="Photo" />
    <IgbNumericColumn Field="Age" HeaderText="Age" />
    <IgbDateTimeColumn Field="Birthday" HeaderText="Date of Birth" />
</IgbDataGrid>

// In JS file:
function onUpdatingAddressColumn(grid, args) {
    let content = args.content;
    let info = args.cellInfo;
    let item = info.rowItem;
    let span1 = null;
    let span2 = null;

    if (content.childElementCount === 0) {
        content.style.fontFamily = "Verdana";
        content.style.fontSize = "13px";
        content.style.verticalAlign = "center";
        content.style.lineHeight = "normal";
        content.style.display = "flex";
        content.style.flexDirection = "column";
        content.style.justifyContent = "center";
        content.style.height = "100%";
        content.style.width = "100%";
        content.style.color = "rgb(24, 29, 31)";
        // stacking above elements in the content of grid's cell
        span1 = document.createElement("span");
        span2 = document.createElement("span");
        content.appendChild(span1);
        content.appendChild(span2);
    }
    else {
        span1 = content.children[0];
        span2 = content.children[1];
    }

    if (span1 && span2) {
        // updating elements in the content of grid's cell
        span1.textContent = item.Street;
        span2.textContent = item.City + ", " + item.Country;
    }
}

igRegisterScript("onUpdatingAddressColumn", onUpdatingAddressColumn, false);
```

## API References

- [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html)
- `CellInfo`
- `CellUpdating`
- [`IgbComboBoxColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbComboBoxColumn.html)
- `Content`
- `DataSource`
- [`IgbDateTimeColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDateTimeColumn.html)
- [`Field`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGridColumn.html#IgniteUI_Blazor_Controls_IgbDataGridColumn_Field)
- [`IgbImageColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbImageColumn.html)
- `ImageResourceType`
- [`ImageStretchOption`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbImageColumn.html#IgniteUI_Blazor_Controls_IgbImageColumn_ImageStretchOption)
- [`IgbNumericColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbNumericColumn.html)
- `TemplateCellInfo`
- [`IgbTemplateCellUpdatingEventArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTemplateCellUpdatingEventArgs.html)
- [`IgbTemplateColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTemplateColumn.html)
- `TextField`
- `ValueField`

---
title: Blazor Master-Detail Grid - Infragistics
_description: Define expandable detail view template for data in rows with Ignite UI Blazor Grid. Useful for displaying master-detail style data in a hierarchical structure.
_keywords: Blazor, {ComponentKeywords}, Ignite UI for Blazor, master detail, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid"]
_tocName: Master-Detail
_premium: true
---

# Blazor Master-Detail Grid

The [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) component supports specifying a detail template that displays additional details for a particular row by expanding/collapsing its content. When specified each record acts as a master, which upon expansion shows a customizable details template with contextual data for the current record.

This mode is useful when you need to display master-detail style data in a hierarchical structure.

## Blazor Grid Master-Detail Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="CustomersData"
        PrimaryKey="ID"
        DetailTemplateScript="WebGridMasterDetailTemplate"
        Name="grid"
        @ref="grid">
            <IgbColumn
            Field="ContactName"
            Header="Contact"
            Width="250px"
            Resizable="false">
            </IgbColumn>

            <IgbColumn
            Header="Address"
            Field="Address"
            Editable="true"
            Width="250px"
            Resizable="false">
            </IgbColumn>

            <IgbColumn
            Header="Country"
            Field="Country">
            </IgbColumn>

            <IgbColumn
            Header="Region"
            Field="Region">
            </IgbColumn>

            <IgbColumn
            Header="Phone"
            Field="Phone">
            </IgbColumn>

            <IgbColumn
            Header="Fax"
            Field="Fax">
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

## Configuration

To configure the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) to display in master-detail mode you need to specify a template for the grid:

```razor
    <IgbGrid DetailTemplateScript="DetailTemplate"  AutoGenerate=true  Data=northwindEmployees></IgbGrid>
```

Context of the template is the master record data, so that values from the master record can be displayed in the detail template. For example:

```razor
// In JavaScript
igRegisterScript("DetailTemplate", (ctx) => {
    var html = window.igTemplating.html;
    var data = ctx.implicit;
    return html` <div class="contact-container">
        <span><strong>Name:</strong> ${data.ContactName}</span> <br/>
        <span><strong>Title:</strong> ${data.ContactTitle}</span> <br/>
        <span><strong>Company:</strong> ${data.CompanyName}</span> <br/>
    </div>`;
}, false);
```

## API

Additional API methods for controlling the expansion states are also exposed:

- [`ExpandAll`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_ExpandAll)
- [`CollapseAll`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_CollapseAll)
- [`ToggleRow`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_ToggleRow)
- [`ExpandRow`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_ExpandRow)
- [`CollapseRow`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_CollapseRow)

## Keyboard navigation

- When focus is on a detail row:

  - <kbd>🡑</kbd> - navigates one row up, focusing a cell from the previous row.
  - <kbd>🡓</kbd> - navigates one row down, focusing a cell from the next row.
  - <kbd>TAB</kbd> - Allows focus to move to the next focusable element inside the template if there are focusable elements, otherwise moves to the next grid row.
  - <kbd>SHIFT</kbd> + <kbd><kbd>TAB</kbd> - moves the focus to the previous row.

- When focus is on a data row with expander:
  - <kbd>ALT</kbd> + <kbd>🡒</kbd> or <kbd>ALT</kbd> + <kbd>🡓</kbd> - expands the row.
  - <kbd>ALT</kbd> + <kbd>🡐</kbd> or <kbd>ALT</kbd> + <kbd>🡑</kbd> - collapses the row.

## Known Issues and Limitations

|Known Limitations| Description|
| --- | --- |
| Tab navigation inside the custom detail template may not update the master grid scroll position in case the next focused element is outside the visible view port.| Tab navigation inside the custom detail template is left up to the browser. |
| Details template will not be exported to Excel.| As the details template can contain any type of content we cannot export it to excel out of the box.|
| The search feature will not highlight elements from the details template. | |

## API References

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)
- `HierarchicalGridRow`

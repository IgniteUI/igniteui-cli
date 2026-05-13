---
title: Blazor Tree Grid Size - Ignite UI for Blazor
_description: Learn how to apply different size capabilities to the Tree Grid component. You can use a set of compact view options in the Ignite UI for Blazor.
_keywords:  material size, Blazor, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/size
_tocName: Size
_premium: true
---

# Blazor Tree Grid Size

The Ignite UI for Blazor Size feature in Blazor Tree Grid allows users to control the spacing and layout of data within the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html). By changing `--ig-size`, you can significantly improve the user experience when interacting with large amounts of content. They can choose from three size options:

- `--ig-size-large`
- `--ig-size-medium`
- `--ig-size-small`

## Blazor Tree Grid Size Example

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="options vertical">
        <IgbPropertyEditorPanel
        Name="PropertyEditor"
        @ref="propertyEditor"

        DescriptionType="WebTreeGrid"
        IsHorizontal="true"
        IsWrappingEnabled="true">
            <IgbPropertyEditorPropertyDescription
            Name="SizeEditor"
            @ref="sizeEditor"
            Label="Grid Size:"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "Small", "Medium", "Large" })"
            DropDownValues="@(new string[] { "Small", "Medium", "Large" })"
            ChangedScript="WebTreeGridSetGridSize">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbTreeGrid
        AutoGenerate="false"
        Name="treeGrid"
        @ref="treeGrid"
        Id="treeGrid"
        Data="EmployeesFlatDetails"
        PrimaryKey="ID"
        ForeignKey="ParentID"
        AllowFiltering="true">
            <IgbColumn
            Field="Name"
            DataType="GridColumnDataType.String"
            Sortable="true"
            HasSummary="true"
            Width="200">
            </IgbColumn>

            <IgbColumnGroup
            Header="General Information">
                <IgbColumn
                Field="HireDate"
                DataType="GridColumnDataType.Date"
                Sortable="true"
                HasSummary="true">
                </IgbColumn>

                <IgbColumnGroup
                Header="Personal Details">
                    <IgbColumn
                    Field="ID"
                    DataType="GridColumnDataType.Number"
                    Filterable="false">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    HasSummary="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Age"
                    DataType="GridColumnDataType.Number"
                    Sortable="true"
                    HasSummary="true"
                    Filterable="false">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

            <IgbColumnGroup
            Header="Address Information">
                <IgbColumnGroup
                Header="Location">
                    <IgbColumn
                    Field="Country"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    HasSummary="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="City"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    HasSummary="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Address"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    HasSummary="true">
                    </IgbColumn>

                </IgbColumnGroup>

                <IgbColumnGroup
                Header="Contact Information">
                    <IgbColumn
                    Field="Phone"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    HasSummary="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Fax"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    HasSummary="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="PostalCode"
                    DataType="GridColumnDataType.String"
                    Sortable="true"
                    HasSummary="true">
                    </IgbColumn>

                </IgbColumnGroup>

            </IgbColumnGroup>

        </IgbTreeGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditor = this.propertyEditor;
        var sizeEditor = this.sizeEditor;
        var treeGrid = this.treeGrid;

        this.BindElements = () => {
            propertyEditor.Target = this.treeGrid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditor;
    private IgbPropertyEditorPropertyDescription sizeEditor;
    private IgbTreeGrid treeGrid;

    private EmployeesFlatDetails _employeesFlatDetails = null;
    public EmployeesFlatDetails EmployeesFlatDetails
    {
        get
        {
            if (_employeesFlatDetails == null)
            {
                _employeesFlatDetails = new EmployeesFlatDetails();
            }
            return _employeesFlatDetails;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesFlatDetailsItem
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

public class EmployeesFlatDetails
    : List<EmployeesFlatDetailsItem>
{
    public EmployeesFlatDetails()
    {
        this.Add(new EmployeesFlatDetailsItem() { Address = @"Obere Str. 57", Age = 55, City = @"Berlin", Country = @"Germany", Fax = @"030-0076545", HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", ParentID = -1, Phone = @"030-0074321", PostalCode = 12209, Title = @"Development Manager", LastName = @"Winchester", FullAddress = @"Obere Str. 57, Berlin, Germany" });
        this.Add(new EmployeesFlatDetailsItem() { Address = @"Avda. de la Constitución 2222", Age = 42, City = @"México D.F.", Country = @"Mexico", Fax = @"(51) 555-3745", HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", ParentID = -1, Phone = @"(5) 555-4729", PostalCode = 5021, Title = @"CEO", LastName = @"Sanders", FullAddress = @"Avda. de la Constitución 2222, México D.F., Mexico" });
        this.Add(new EmployeesFlatDetailsItem() { Address = @"Mataderos 2312", Age = 49, City = @"México D.F.", Country = @"Mexico", Fax = @"(5) 555-3995", HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", ParentID = -1, Phone = @"(5) 555-3932", PostalCode = 5023, Title = @"Accounting Manager", LastName = @"Lincoln", FullAddress = @"Mataderos 2312, México D.F., Mexico" });
        // ... 15 more items
    }
}
```

## Usage

As you can see in the demo above, the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) provides three size options:  **small**, **medium** and **large**. The code snippet below shows how to set `--ig-size` either inline or part of a CSS class:

```css
.gridSize {
    --ig-size: var(--ig-size-medium);
}
```

```razor
<IgbTreeGrid Class="gridSize" Data=northwindEmployees @ref=grid>
</IgbTreeGrid>
```

And now let's see in details how each option reflects on the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) component. When you switch between different size options the height of each [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) element and the corresponding paddings will be changed. Also if you want to apply custom column [`Width`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Width), please consider the fact that it must be bigger than the sum of left and right padding:

- **large** - this is the default [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) size with the lowest intense and row height equal to `50px`. Left and Right paddings are `24px`; Minimal column [`Width`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Width) is `80px`;
- **medium** - this is the middle intense size with `40px` row height. Left and Right paddings are `16px`; Minimal column [`Width`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Width) is `64px`;
- **small** - this is the size with highest intense and `32px` row height. Left and Right paddings are `12px`; Minimal column [`Width`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Width) is `56px`;

> [!Note]
> Please keep in mind that currently you **can not** override any of the sizes.

Let's now continue with our sample and see in action how the `--ig-size` is applied. Let's first add a button which will help us to switch between each size:

<!-- ComponentStart: TreeGrid -->

```razor
<div class="options vertical">
    <IgbPropertyEditorPanel
    DescriptionType="WebTreeGrid"
    IsHorizontal="true"
    IsWrappingEnabled="true"
    Name="PropertyEditor"
    @ref="propertyEditor">
        <IgbPropertyEditorPropertyDescription
        Name="SizeEditor"
        @ref="sizeEditor"
        Label="Grid Size:"
        ValueType="PropertyEditorValueType.EnumValue"
        DropDownNames="@(new string[] { "Small", "Medium", "Large" })"
        DropDownValues="@(new string[] { "Small", "Medium", "Large" })"
        ChangedScript="WebGridSetGridSize">
        </IgbPropertyEditorPropertyDescription>
    </IgbPropertyEditorPanel>
</div>
```

<!-- ComponentEnd: TreeGrid -->

Now we can add the markup.

```razor
<IgbTreeGrid AutoGenerate="false" Name="treeGrid" @ref="treeGrid" Id="grid" Data="EmployeesFlatDetails" PrimaryKey="ID"
 ForeignKey="ParentID" AllowFiltering="true">
    <IgbColumn Field="Name" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true" Width="200">
    </IgbColumn>
    <IgbColumnGroup Header="General Information">
        <IgbColumn Field="HireDate" DataType="GridColumnDataType.Date" Sortable="true" HasSummary="true">
        </IgbColumn>
        <IgbColumnGroup Header="Personal Details">
            <IgbColumn Field="ID" DataType="GridColumnDataType.Number" Filterable="false">
            </IgbColumn>
            <IgbColumn Field="Title" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true">
            </IgbColumn>
            <IgbColumn Field="Age" DataType="GridColumnDataType.Number" Sortable="true" HasSummary="true" Filterable="false">
            </IgbColumn>
        </IgbColumnGroup>
    </IgbColumnGroup>
    <IgbColumnGroup Header="Address Information">
        <IgbColumnGroup Header="Location">
            <IgbColumn Field="Country" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true">
            </IgbColumn>
            <IgbColumn Field="City" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true">
            </IgbColumn>
            <IgbColumn Field="Address" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true">
            </IgbColumn>
        </IgbColumnGroup>
        <IgbColumnGroup Header="Contact Information">
            <IgbColumn Field="Phone" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true">
            </IgbColumn>
            <IgbColumn Field="Fax" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true">
            </IgbColumn>
            <IgbColumn Field="PostalCode" DataType="GridColumnDataType.String" Sortable="true" HasSummary="true">
            </IgbColumn>
        </IgbColumnGroup>
    </IgbColumnGroup>
</IgbTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

Finally, let's provide the necessary logic in order to actually apply the size:

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

```razor
@code {
    // In JavaScript
    igRegisterScript("WebGridSetGridSize", (sender, evtArgs) => {
        var newVal = evtArgs.newValue.toLowerCase();
        var grid = document.getElementById("grid");
        grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
    }, false);
}
```

Another option that [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) provides for you, in order to be able to change the height of the rows in the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html), is the property [`RowHeight`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowHeight). So let's see in action how this property affects the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) layout along with the `--ig-size`.

Please keep in mind the following:

- `--ig-size` CSS variable will have no impact on row height **if there is [`RowHeight`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowHeight) specified**.
- `--ig-size` will **affect all of the rest elements in the Tree Grid**, as it has been described above.

We can now extend our sample and add [`RowHeight`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowHeight) property to the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html):

```razor
<IgbTreeGrid
   @ref="grid"
   Id="grid"
   Class="gridSize"
   Width="100%"
   Height="100%"
   AutoGenerate="true"
   Data="northwindEmployees"
   RowHeight="rowHeight">
</IgbTreeGrid>

@code {
   private string rowHeight = "80px";
}
```

## API References

- [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

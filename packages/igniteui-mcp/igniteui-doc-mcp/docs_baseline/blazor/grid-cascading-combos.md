---
title: Blazor Grid Cascading combos - Ignite UI for Blazor
_description: Perform updating via cascading combos in Grid, using Blazor Grid. See demos & examples!
_keywords: Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
_language: en
sharedComponents: ["Grid"]
mentionedTypes: ["Column", "Combo"]
namespace: Infragistics.Controls
_tocName: Cascading Combos
_premium: true
---

# Blazor Grid with Cascading Combos

The Grid's Editing functionality provides with the opportunity to use Cascading Combobox components. By selecting the value in any preceding [`IgbCombo`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html), the users will receive only the data that is relevant to their selection within the next Blazor Combobox component.

## Angular Grid with Cascading Combos Sample Overview

The sample below demonstrates how [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) works with nested Cascading [`IgbCombo`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html) components.

<!-- ComponentStart: Grid -->

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbGrid
        AutoGenerate="false"
        Data="WorldCitiesAbove500K"
        PrimaryKey="ID"
        Name="grid"
        @ref="grid"
        RenderedScript="WebGridWithComboRendered">
            <IgbColumn
            Field="ID"
            Header="ID"
            DataType="GridColumnDataType.Number">
            </IgbColumn>

            <IgbColumn
            Field="Country"
            Header="Country"
            BodyTemplateScript="WebGridCountryDropDownTemplate"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Region"
            Header="Region"
            BodyTemplateScript="WebGridRegionDropDownTemplate"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="City"
            Header="City"
            BodyTemplateScript="WebGridCityDropDownTemplate"
            Name="column3"
            @ref="column3">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var grid = this.grid;
        var column1 = this.column1;
        var column2 = this.column2;
        var column3 = this.column3;

    }

    private IgbGrid grid;
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumn column3;

    private WorldCitiesAbove500K _worldCitiesAbove500K = null;
    public WorldCitiesAbove500K WorldCitiesAbove500K
    {
        get
        {
            if (_worldCitiesAbove500K == null)
            {
                _worldCitiesAbove500K = new WorldCitiesAbove500K();
            }
            return _worldCitiesAbove500K;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class WorldCitiesAbove500KItem
{
    public double ID { get; set; }
    public string Name { get; set; }
    public string Country { get; set; }
    public string Region { get; set; }
    public double Population { get; set; }
}

public class WorldCitiesAbove500K
    : List<WorldCitiesAbove500KItem>
{
    public WorldCitiesAbove500K()
    {
        this.Add(new WorldCitiesAbove500KItem() { ID = 10000, Name = @"Shanghai", Country = @"China", Region = @"Shanghai", Population = 22315474 });
        this.Add(new WorldCitiesAbove500KItem() { ID = 10001, Name = @"Istanbul", Country = @"Turkey", Region = @"Istanbul", Population = 14804116 });
        this.Add(new WorldCitiesAbove500KItem() { ID = 10002, Name = @"Buenos Aires", Country = @"Argentina", Region = @"Buenos Aires F.D.", Population = 13076300 });
        // ... 921 more items
    }
}
```

<!-- ComponentEnd: Grid -->

## Setup

In order enable column editing, make sure [`Editable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Editable) property is set to `true`.

Once the column editing is enabled, you can start by adding your [`IgbCombo`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html). Please note that here in order to have only one single selection available, you will need to use set the [`SingleSelect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_SingleSelect) property.

<!-- WebComponents, Blazor, React -->

To get started with the [`IgbCombo`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html), first you need to import it:

```razor
builder.Services.AddIgniteUIBlazor(
    typeof(IgbGridModule),
    typeof(IgbComboModule)
);
```

Then you should define the column template with the combo:

```razor
<IgbColumn Field="Country" Header="Country" BodyTemplate="WebGridCountryDropDownTemplate"></IgbColumn>

@code{
    public static RenderFragment<IgbCellTemplateContext> WebGridCountryDropDownTemplate = (context) =>
    {
        var id = "country_" + context.Cell.Id.RowID;
        return @<IgbCombo id="@id" Placeholder="Choose Country..." SingleSelect=true ValueKey="Country" DisplayKey="Country" ChangeScript="CountryChange"></IgbCombo>;
    };
}

```

- [`DisplayKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_DisplayKey) - Required for object arrays - Specifies which property will be used for the items' text. If no value is specified for [`DisplayKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_DisplayKey), the  combo will use the specified [`ValueKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html#IgniteUI_Blazor_Controls_IgbCombo_ValueKey) (if any).

In order to handle the selection change, we need the `onChange` event. The emitted event arguments contain information about the selection prior to the change, the current selection and the items that were added or removed. Therefore, it will filter the values based on the selection of the previous combo.

```razor
//In Javascript
igRegisterScript("CountryChange", (ctx) => {
    const value = e.detail.newValue;
    cell.update(value);
    const nextCombo = document.getElementById("region_" + cell.id.rowID);
    const nextProgress = document.getElementById("progress_region_" + cell.id.rowID);
    if (value === "") {
        nextCombo.deselect(nextCombo.value);
        nextCombo.disabled = true;
        nextCombo.data = [];
    } else {
        nextProgress.style.display = "block";
        setTimeout(() => {
            nextProgress.style.display = "none";
            nextCombo.disabled = false;
            nextCombo.data = this.regions.filter(x => x.Country === value);
        }, 2000);
    }
});
```

<!-- end: WebComponents, Blazor, React -->

<!-- Blazor -->

And lastly, adding the [`IgbLinearProgress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearProgress.html), which is required while loading the list of data.

```razor
    public static RenderFragment<IgbCellTemplateContext> WebGridRegionDropDownTemplate = (context) =>
    {
        var id = "region_" + context.Cell.Id.RowID;
        return @<div style="display:flex;flex-direction:column;"><IgbCombo id="@id" Placeholder="Choose Region..." SingleSelect=true ValueKey="Region" DisplayKey="Region" ChangeScript="RegionChange"></IgbCombo><IgbLinearProgress Indeterminate=true></IgbLinearProgress></div>;
    };
```

<!-- end: Blazor -->

## Known Issues and Limitations

|Limitation|Description|
|--- |--- |
| Combo drop-down list may hide behind other UI elements. | Due to the stacking order of elements in the grid the combo drop-down may hide behind other elements like header, footers etc. |

## Blazor Grid API Members

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)
- [`IgbCombo`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCombo.html)
- [`IgbLinearProgress`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbLinearProgress.html)

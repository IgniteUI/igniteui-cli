---
title: "Blazor Grid Cascading combos - Ignite UI for Blazor"
description: Perform updating via cascading combos in Grid, using Blazor Grid. See demos & examples!
keywords: "Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics"
license: commercial
_language: en
llms:
  description: "The Grid's Editing functionality provides with the opportunity to use Cascading Combobox components."
_componentKey: Grid
_tocName: Cascading Combos
_premium: true
---
# Blazor Grid with Cascading Combos

The Grid's Editing functionality provides with the opportunity to use Cascading Combobox components. By selecting the value in any preceding [`IgbCombo`](mcp:get_api_reference?platform=blazor&component=IgbComboModule), the users will receive only the data that is relevant to their selection within the next Blazor Combobox component.

## Blazor Grid with Cascading Combos Sample Overview

The sample below demonstrates how [`IgbGrid`](mcp:get_api_reference?platform=blazor&component=IgbGrid) works with nested Cascading [`IgbCombo`](mcp:get_api_reference?platform=blazor&component=IgbComboModule) components.

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

## Setup

In order enable column editing, make sure [`IgbColumn.editable`](mcp:get_api_reference?platform=blazor&component=IgbColumn&member=editable) property is set to `true`.

Once the column editing is enabled, you can start by adding your [`IgbCombo`](mcp:get_api_reference?platform=blazor&component=IgbComboModule). Please note that here in order to have only one single selection available, you will need to use set the [`IgbCombo.singleSelect`](mcp:get_api_reference?platform=blazor&component=IgbComboModule&member=singleSelect) property.

To get started with the [`IgbCombo`](mcp:get_api_reference?platform=blazor&component=IgbComboModule), first you need to import it:

```csharp
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

- [`IgbCombo.displayKey`](mcp:get_api_reference?platform=blazor&component=IgbComboModule&member=displayKey) - Required for object arrays - Specifies which property will be used for the items' text. If no value is specified for [`IgbCombo.displayKey`](mcp:get_api_reference?platform=blazor&component=IgbComboModule&member=displayKey), the  combo will use the specified [`IgbCombo.valueKey`](mcp:get_api_reference?platform=blazor&component=IgbComboModule&member=valueKey) (if any).

In order to handle the selection change, we need the change event. The emitted event arguments contain information about the selection prior to the change, the current selection and the items that were added or removed. Therefore, it will filter the values based on the selection of the previous combo.

```javascript
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

And lastly, adding the [`IgbLinearProgress`](mcp:get_api_reference?platform=blazor&component=IgbLinearProgress), which is required while loading the list of data.

```csharp
    public static RenderFragment<IgbCellTemplateContext> WebGridRegionDropDownTemplate = (context) =>
    {
        var id = "region_" + context.Cell.Id.RowID;
        return @<div style="display:flex;flex-direction:column;"><IgbCombo id="@id" Placeholder="Choose Region..." SingleSelect=true ValueKey="Region" DisplayKey="Region" ChangeScript="RegionChange"></IgbCombo><IgbLinearProgress Indeterminate=true></IgbLinearProgress></div>;
    };
```

## Known Issues and Limitations

|Limitation|Description|
|--- |--- |
| Combo drop-down list may hide behind other UI elements. | Due to the stacking order of elements in the grid the combo drop-down may hide behind other elements like header, footers etc. |

## API References
[`IgbGrid`](mcp:get_api_reference?platform=blazor&component=IgbGrid)
[`IgbColumn`](mcp:get_api_reference?platform=blazor&component=IgbColumn)
[`IgbCombo`](mcp:get_api_reference?platform=blazor&component=IgbComboModule)
[`IgbLinearProgress`](mcp:get_api_reference?platform=blazor&component=IgbLinearProgress)

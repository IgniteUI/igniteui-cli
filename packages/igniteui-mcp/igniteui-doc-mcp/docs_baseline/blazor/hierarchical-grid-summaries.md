---
title: Blazor Hierarchical Grid Summaries - Ignite UI for Blazor
_description: Configure Blazor Hierarchical Grid summaries in the group footer of the column and use the option to set custom Blazor template in the Ignite UI for Blazor Material table
_keywords: Blazor Hierarchical Grid summaries, Blazor, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["GridBaseDirective", "Column", "SummaryOperand"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/summaries
_tocName: Summaries
_premium: true
---

# Blazor Hierarchical Grid Summaries

The Ignite UI for Blazor Summaries feature in Blazor Hierarchical Grid functions on a per-column level as group footer. Blazor HierarchicalGrid summaries is powerful feature which enables the user to see column information in a separate container with a predefined set of default summary items, depending on the type of data within the column or by implementing a custom  template in the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html).

## Blazor Hierarchical Grid Summaries Overview Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="SingersData"
        Name="hierarchicalGrid"
        @ref="hierarchicalGrid"
        Id="hierarchicalGrid"
        PrimaryKey="ID">
            <IgbColumn
            Field="Artist"
            Header="Artist"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="Photo"
            Header="Photo"
            DataType="GridColumnDataType.Image">
            </IgbColumn>

            <IgbColumn
            Field="Debut"
            Header="Debut"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyNominations"
            Header="Grammy Nominations"
            DataType="GridColumnDataType.Number"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyAwards"
            Header="Grammy Awards"
            DataType="GridColumnDataType.Number"
            HasSummary="true">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Albums"
            AutoGenerate="false">
                <IgbColumn
                Field="Album"
                Header="Album"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="LaunchDate"
                Header="Launch Date"
                DataType="GridColumnDataType.Date">
                </IgbColumn>

                <IgbColumn
                Field="BillboardReview"
                Header="Billboard Review"
                DataType="GridColumnDataType.Number"
                HasSummary="true">
                </IgbColumn>

                <IgbColumn
                Field="USBillboard200"
                Header="US Billboard 200"
                DataType="GridColumnDataType.Number"
                HasSummary="true">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="Songs"
                AutoGenerate="false">
                    <IgbColumn
                    Field="Number"
                    Header="No."
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    Header="Title"
                    DataType="GridColumnDataType.String"
                    HasSummary="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Released"
                    Header="Released"
                    DataType="GridColumnDataType.Date">
                    </IgbColumn>

                    <IgbColumn
                    Field="Genre"
                    Header="Genre"
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbRowIsland>

            <IgbRowIsland
            ChildDataKey="Tours"
            AutoGenerate="false">
                <IgbColumn
                Field="Tour"
                Header="Tour"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="StartedOn"
                Header="Started on"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="Location"
                Header="Location"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="Headliner"
                Header="Headliner"
                DataType="GridColumnDataType.String">
                </IgbColumn>

            </IgbRowIsland>

        </IgbHierarchicalGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var hierarchicalGrid = this.hierarchicalGrid;

    }

    private IgbHierarchicalGrid hierarchicalGrid;

    private SingersData _singersData = null;
    public SingersData SingersData
    {
        get
        {
            if (_singersData == null)
            {
                _singersData = new SingersData();
            }
            return _singersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class SingersDataItem
{
    public double ID { get; set; }
    public string Artist { get; set; }
    public string Photo { get; set; }
    public double Debut { get; set; }
    public double GrammyNominations { get; set; }
    public double GrammyAwards { get; set; }
    public bool HasGrammyAward { get; set; }
    public List<SingersDataItem_ToursItem> Tours { get; set; }
    public List<SingersDataItem_AlbumsItem> Albums { get; set; }
}
public class SingersDataItem_ToursItem
{
    public string Tour { get; set; }
    public string StartedOn { get; set; }
    public string Location { get; set; }
    public string Headliner { get; set; }
    public string TouredBy { get; set; }
}
public class SingersDataItem_AlbumsItem
{
    public string Album { get; set; }
    public string LaunchDate { get; set; }
    public double BillboardReview { get; set; }
    public double USBillboard200 { get; set; }
    public string Artist { get; set; }
    public List<SingersDataItem_AlbumsItem_SongsItem> Songs { get; set; }
}
public class SingersDataItem_AlbumsItem_SongsItem
{
    public double Number { get; set; }
    public string Title { get; set; }
    public string Released { get; set; }
    public string Genre { get; set; }
    public string Album { get; set; }
}

public class SingersData
    : List<SingersDataItem>
{
    public SingersData()
    {
        this.Add(new SingersDataItem() { ID = 0, Artist = @"Naomí Yepes", Photo = @"https://dl.infragistics.com/x/img/people/names/naomi.png", Debut = 2011, GrammyNominations = 6, GrammyAwards = 0, HasGrammyAward = false, Tours = new List<SingersDataItem_ToursItem>()
        {
            new SingersDataItem_ToursItem() { Tour = @"Faithful Tour", StartedOn = @"Sep 12", Location = @"Worldwide", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"City Jam Sessions", StartedOn = @"Aug 13", Location = @"North America", Headliner = @"YES", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"Christmas NYC 2013", StartedOn = @"Dec 13", Location = @"United States", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            // ... 18 more items
        }
        , Albums = new List<SingersDataItem_AlbumsItem>()
        {
            new SingersDataItem_AlbumsItem() { Album = @"Emergency", LaunchDate = @"March 6, 2004", BillboardReview = 98, USBillboard200 = 69, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Gentle Falling", Released = @"26 Apr 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Calling in the Fire", Released = @"03 Sep 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Fire of Shadow", Released = @"05 Jan 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Dancing in the Dream", Released = @"15 Apr 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Calling in the Shadow", Released = @"09 Oct 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Falling in the Sky", Released = @"08 Mar 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Calling in the Storm", Released = @"05 Dec 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Falling in the River", Released = @"19 Aug 2019", Genre = @"Electro house Electropop", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Electric Fire", Released = @"30 Nov 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Lonely River", Released = @"11 Nov 2019", Genre = @"Electro house Electropop", Album = @"Emergency" }}
             },
            new SingersDataItem_AlbumsItem() { Album = @"Bursting bubbles", LaunchDate = @"April 17, 2006", BillboardReview = 69, USBillboard200 = 39, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Lonely Dream", Released = @"11 Dec 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Fire of River", Released = @"01 Aug 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Wicked Falling", Released = @"25 Jan 2019", Genre = @"*", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Crying in the Shadow", Released = @"04 Jan 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Wild Burning", Released = @"10 May 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Waiting in the Heart", Released = @"07 Aug 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Fire of Fire", Released = @"16 May 2019", Genre = @"Electro house Electropop", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Bright Heart", Released = @"14 Mar 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Lonely Fire", Released = @"15 Oct 2019", Genre = @"R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Sky of Dream", Released = @"20 Jun 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" }}
             }}
    }
}
```


> [!Note]
> The summary of the column is a **function of all column values**, unless filtering is applied, then the summary of the column will be **function of the filtered result values**

[`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) summaries can also be enabled on a per-column level in Ignite UI for Blazor, which means that you can activate it only for columns that you need. [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) summaries gives you a predefined set of default summaries, depending on the type of data in the column, so that you can save some time:

For `string` and `boolean` [`DataType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DataType), the following function is available:

- Count

For `number`, `currency` and `percent` data types, the following functions are available:

- Count
- Min
- Max
- Average
- Sum

For `date` data type, the following functions are available:

- Count
- Earliest
- Latest

All available column data types could be found in the official [Column types topic](column-types.md#default-template).

[`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) summaries are enabled per-column by setting [`HasSummary`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_HasSummary) property to **true**. It is also important to keep in mind that the summaries for each column are resolved according to the column data type. In the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) the default column data type is `string`, so if you want `number` or `date` specific summaries you should specify the [`DataType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DataType) property as `number` or `date`. Note that the summary values will be displayed localized, according to the grid [`Locale`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_Locale) and column [`PipeArgs`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_PipeArgs).

<!-- ComponentStart: HierarchicalGrid -->

```razor
<IgbHierarchicalGrid AutoGenerate="false" Data="SingersData" Name="hierarchicalGrid" @ref="hierarchicalGrid" Id="hierarchicalGrid" PrimaryKey="ID">
        <IgbColumn Field="Artist" HasSummary="true"></IgbColumn>
        <IgbColumn Field="Photo" DataType="GridColumnDataType.Image"></IgbColumn>
        <IgbColumn Field="Debut" HasSummary="true"></IgbColumn>
        <IgbColumn Field="GrammyNominations" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
        <IgbColumn Field="GrammyAwards" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
        <IgbRowIsland ChildDataKey="Albums" AutoGenerate="false">
            <IgbColumn Field="Album" DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="LaunchDate" DataType="GridColumnDataType.Date"></IgbColumn>
            <IgbColumn Field="BillboardReview" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
            <IgbColumn Field="USBillboard200" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
        </IgbRowIsland>
</IgbHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

The other way to enable/disable summaries for a specific column or a list of columns is to use the public method [`EnableSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_EnableSummaries)/[`DisableSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_DisableSummaries) of the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html).

<!-- ComponentStart: HierarchicalGrid -->

```razor
<IgbHierarchicalGrid AutoGenerate="false" Data="SingersData" Name="hierarchicalGrid" @ref="hierarchicalGrid" Id="hierarchicalGrid" PrimaryKey="ID">
    <IgbColumn Field="Artist" HasSummary="true"></IgbColumn>
    <IgbColumn Field="Photo" DataType="GridColumnDataType.Image"></IgbColumn>
    <IgbColumn Field="Debut" HasSummary="true"></IgbColumn>
    <IgbColumn Field="GrammyNominations" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
    <IgbColumn Field="GrammyAwards" DataType="GridColumnDataType.Number" HasSummary="true"></IgbColumn>
</IgbHierarchicalGrid>

@code {
    public async void DisableSummaries()
    {
        object[] disabledSummaries = { "GrammyNominations" };
        await this.hierarchicalGrid.DisableSummariesAsync(disabledSummaries);
    }
}
```

<!-- ComponentEnd: HierarchicalGrid -->

## Custom Hierarchical Grid Summaries

If these functions do not fulfill your requirements you can provide a custom summary for the specific columns.

<!-- ComponentStart: Grid, HierarchicalGrid -->

```razor

//In JavaScript
class WebGridDiscontinuedSummary {
    operate(data, allData, fieldName) {
        const discontinuedData = allData.filter((rec) => rec['Discontinued']).map(r => r[fieldName]);
        const result = [];
        result.push({
            key: 'products',
            label: 'Products',
            summaryResult: data.length
        });
        result.push({
            key: 'total',
            label: 'Total Items',
            summaryResult: data.length ? data.reduce((a, b) => +a + +b) : 0
        });
        result.push({
            key: 'discontinued',
            label: 'Discontinued Products',
            summaryResult: allData.map(r => r['Discontinued']).filter((rec) => rec).length
        });
        result.push({
            key: 'totalDiscontinued',
            label: 'Total Discontinued Items',
            summaryResult: discontinuedData.length ? discontinuedData.reduce((a, b) => +a + +b) : 0
        });
        return result;
    }
}
```

<!-- ComponentEnd: Grid, HierarchicalGrid -->

As seen in the examples, the base classes expose the `Operate` method, so you can choose to get all default summaries and modify the result, or calculate entirely new summary results.

The method returns a list of [`IgbSummaryResult`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSummaryResult.html).

and take optional parameters for calculating the summaries.
See [Custom summaries, which access all data](#custom-summaries-which-access-all-data) section below.

> [!Note]
> In order to calculate the summary row height properly, the Hierarchical Grid needs the `Operate` method to always return an array of [`IgbSummaryResult`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSummaryResult.html) with the proper length even when the data is empty.

```razor
<IgbHierarchicalGrid
        AutoGenerate="true"
        Name="hierarchicalGrid"
        @ref="hierarchicalGrid"
        Data="SingersData"
        PrimaryKey="ID"
        ColumnInitScript="WebHierarchicalGridCustomSummary">
</IgbHierarchicalGrid>

// In Javascript
igRegisterScript("WebHierarchicalGridCustomSummary", (event) => {
    if (event.detail.field === "GrammyAwards") {
        event.detail.summaries = WebHierarchicalGridSummary;
    }
}, false);
```

<!-- ComponentEnd: HierarchicalGrid -->

### Custom summaries, which access all data

Now you can access all Hierarchical Grid data inside the custom column summary. Two additional optional parameters are introduced in the SummaryOperand `Operate` method.
As you can see in the code snippet below the operate method has the following three parameters:

- columnData - gives you an array that contains the values only for the current column
- allGridData - gives you the whole grid data source
- fieldName - current column field

```razor
class WebGridDiscontinuedSummary {
    operate(data, allData, fieldName) {
        const discontinuedData = allData.filter((rec) => rec['Discontinued']).map(r => r[fieldName]);
        result.push({
            key: 'totalDiscontinued',
            label: 'Total Discontinued Items',
            summaryResult: discontinuedData.length ? discontinuedData.reduce((a, b) => +a + +b) : 0
        });
        return result;
    }
}
```

<!-- ComponentEnd: Grid, HierarchicalGrid -->

<!-- ComponentStart: HierarchicalGrid -->

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="SingersData"
        Name="hierarchicalGrid"
        @ref="hierarchicalGrid"
        Id="hierarchicalGrid"
        PrimaryKey="ID">
            <IgbColumn
            Field="Artist"
            Header="Artist"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="Photo"
            Header="Photo"
            DataType="GridColumnDataType.Image">
            </IgbColumn>

            <IgbColumn
            Field="Debut"
            Header="Debut"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyNominations"
            Header="Grammy Nominations"
            DataType="GridColumnDataType.Number"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyAwards"
            Header="Grammy Awards"
            DataType="GridColumnDataType.Number"
            HasSummary="true">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Albums"
            AutoGenerate="false">
                <IgbColumn
                Field="Album"
                Header="Album"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="LaunchDate"
                Header="Launch Date"
                DataType="GridColumnDataType.Date">
                </IgbColumn>

                <IgbColumn
                Field="BillboardReview"
                Header="Billboard Review"
                DataType="GridColumnDataType.Number"
                HasSummary="true">
                </IgbColumn>

                <IgbColumn
                Field="USBillboard200"
                Header="US Billboard 200"
                DataType="GridColumnDataType.Number"
                HasSummary="true">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="Songs"
                AutoGenerate="false">
                    <IgbColumn
                    Field="Number"
                    Header="No."
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    Header="Title"
                    DataType="GridColumnDataType.String"
                    HasSummary="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Released"
                    Header="Released"
                    DataType="GridColumnDataType.Date">
                    </IgbColumn>

                    <IgbColumn
                    Field="Genre"
                    Header="Genre"
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbRowIsland>

            <IgbRowIsland
            ChildDataKey="Tours"
            AutoGenerate="false">
                <IgbColumn
                Field="Tour"
                Header="Tour"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="StartedOn"
                Header="Started on"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="Location"
                Header="Location"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="Headliner"
                Header="Headliner"
                DataType="GridColumnDataType.String">
                </IgbColumn>

            </IgbRowIsland>

        </IgbHierarchicalGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var hierarchicalGrid = this.hierarchicalGrid;

    }

    private IgbHierarchicalGrid hierarchicalGrid;

    private SingersData _singersData = null;
    public SingersData SingersData
    {
        get
        {
            if (_singersData == null)
            {
                _singersData = new SingersData();
            }
            return _singersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class SingersDataItem
{
    public double ID { get; set; }
    public string Artist { get; set; }
    public string Photo { get; set; }
    public double Debut { get; set; }
    public double GrammyNominations { get; set; }
    public double GrammyAwards { get; set; }
    public bool HasGrammyAward { get; set; }
    public List<SingersDataItem_ToursItem> Tours { get; set; }
    public List<SingersDataItem_AlbumsItem> Albums { get; set; }
}
public class SingersDataItem_ToursItem
{
    public string Tour { get; set; }
    public string StartedOn { get; set; }
    public string Location { get; set; }
    public string Headliner { get; set; }
    public string TouredBy { get; set; }
}
public class SingersDataItem_AlbumsItem
{
    public string Album { get; set; }
    public string LaunchDate { get; set; }
    public double BillboardReview { get; set; }
    public double USBillboard200 { get; set; }
    public string Artist { get; set; }
    public List<SingersDataItem_AlbumsItem_SongsItem> Songs { get; set; }
}
public class SingersDataItem_AlbumsItem_SongsItem
{
    public double Number { get; set; }
    public string Title { get; set; }
    public string Released { get; set; }
    public string Genre { get; set; }
    public string Album { get; set; }
}

public class SingersData
    : List<SingersDataItem>
{
    public SingersData()
    {
        this.Add(new SingersDataItem() { ID = 0, Artist = @"Naomí Yepes", Photo = @"https://dl.infragistics.com/x/img/people/names/naomi.png", Debut = 2011, GrammyNominations = 6, GrammyAwards = 0, HasGrammyAward = false, Tours = new List<SingersDataItem_ToursItem>()
        {
            new SingersDataItem_ToursItem() { Tour = @"Faithful Tour", StartedOn = @"Sep 12", Location = @"Worldwide", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"City Jam Sessions", StartedOn = @"Aug 13", Location = @"North America", Headliner = @"YES", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"Christmas NYC 2013", StartedOn = @"Dec 13", Location = @"United States", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            // ... 18 more items
        }
        , Albums = new List<SingersDataItem_AlbumsItem>()
        {
            new SingersDataItem_AlbumsItem() { Album = @"Emergency", LaunchDate = @"March 6, 2004", BillboardReview = 98, USBillboard200 = 69, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Gentle Falling", Released = @"26 Apr 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Calling in the Fire", Released = @"03 Sep 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Fire of Shadow", Released = @"05 Jan 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Dancing in the Dream", Released = @"15 Apr 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Calling in the Shadow", Released = @"09 Oct 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Falling in the Sky", Released = @"08 Mar 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Calling in the Storm", Released = @"05 Dec 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Falling in the River", Released = @"19 Aug 2019", Genre = @"Electro house Electropop", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Electric Fire", Released = @"30 Nov 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Lonely River", Released = @"11 Nov 2019", Genre = @"Electro house Electropop", Album = @"Emergency" }}
             },
            new SingersDataItem_AlbumsItem() { Album = @"Bursting bubbles", LaunchDate = @"April 17, 2006", BillboardReview = 69, USBillboard200 = 39, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Lonely Dream", Released = @"11 Dec 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Fire of River", Released = @"01 Aug 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Wicked Falling", Released = @"25 Jan 2019", Genre = @"*", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Crying in the Shadow", Released = @"04 Jan 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Wild Burning", Released = @"10 May 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Waiting in the Heart", Released = @"07 Aug 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Fire of Fire", Released = @"16 May 2019", Genre = @"Electro house Electropop", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Bright Heart", Released = @"14 Mar 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Lonely Fire", Released = @"15 Oct 2019", Genre = @"R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Sky of Dream", Released = @"20 Jun 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" }}
             }}
    }
}
```


<!-- ComponentEnd: HierarchicalGrid -->

### Summary Template

[`SummaryTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_SummaryTemplate) targets the column summary providing as a context the column summary results.

```razor
<IgbColumn HasSummary="true" SummaryTemplateScript="SummaryTemplate">
</IgbColumn>

igRegisterScript("SummaryTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<div>
    <span> ${ctx.implicit[0].label} - ${ctx.implicit[0].summaryResult} </span>
</div>`
}, false);
```

When a default summary is defined, the height of the summary area is calculated by design depending on the column with the largest number of summaries and the `--ig-size` of the grid. Use the [`SummaryRowHeight`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_SummaryRowHeight) input property to override the default value. As an argument it expects a number value, and setting a falsy value will trigger the default sizing behavior of the grid footer.

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="options vertical">
        <IgbPropertyEditorPanel

        DescriptionType="WebHierarchicalGrid"
        IsHorizontal="true"
        IsWrappingEnabled="false"
        Name="propertyEditorPanel1"
        @ref="propertyEditorPanel1">
            <IgbPropertyEditorPropertyDescription
            PropertyPath="SummaryRowHeight"
            Label="Summary Row Height"
            ValueType="PropertyEditorValueType.Number"
            Name="SummaryRowHeightEditor"
            @ref="summaryRowHeightEditor">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            Label="Toggle Summaries"
            ValueType="PropertyEditorValueType.Boolean1"
            PrimitiveValue="true"
            Changed="WebHierarchicalGridHasSummariesChange"
            Name="ToggleSummariesEditor"
            @ref="toggleSummariesEditor">
            </IgbPropertyEditorPropertyDescription>

            <IgbPropertyEditorPropertyDescription
            Name="SizeEditor"
            @ref="sizeEditor"
            Label="Grid Size:"
            ValueType="PropertyEditorValueType.EnumValue"
            DropDownNames="@(new string[] { "Small", "Medium", "Large" })"
            DropDownValues="@(new string[] { "Small", "Medium", "Large" })"
            ChangedScript="WebHierarchicalGridSetGridSize">
            </IgbPropertyEditorPropertyDescription>

        </IgbPropertyEditorPanel>

    </div>
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="SingersData"
        Name="hierarchicalGrid"
        @ref="hierarchicalGrid"
        Id="hierarchicalGrid"
        PrimaryKey="ID">
            <IgbColumn
            Field="Artist"
            Header="Artist"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="Photo"
            Header="Photo"
            DataType="GridColumnDataType.Image"
            HasSummary="true"
            Summaries="SingerSummary"
            Name="column1"
            @ref="column1">
            </IgbColumn>

            <IgbColumn
            Field="Debut"
            Header="Debut">
            </IgbColumn>

            <IgbColumn
            Field="GrammyNominations"
            Header="Grammy Nominations"
            DataType="GridColumnDataType.Number"
            HasSummary="true"
            SummaryTemplate="WebHierarchicalGridSummaryTemplateStyle"
            Name="column2"
            @ref="column2">
            </IgbColumn>

            <IgbColumn
            Field="GrammyAwards"
            Header="Grammy Awards"
            DataType="GridColumnDataType.Number"
            HasSummary="true"
            SummaryTemplate="WebHierarchicalGridSummaryTemplate"
            Name="column3"
            @ref="column3">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Albums"
            AutoGenerate="false">
                <IgbColumn
                Field="Album"
                Header="Album"
                DataType="GridColumnDataType.String"
                HasSummary="true">
                </IgbColumn>

                <IgbColumn
                Field="LaunchDate"
                Header="Launch Date"
                DataType="GridColumnDataType.Date"
                HasSummary="true"
                SummaryTemplate="WebRowIslandGridSummaryTemplateStyle"
                Name="column4"
                @ref="column4">
                </IgbColumn>

                <IgbColumn
                Field="BillboardReview"
                Header="Billboard Review"
                DataType="GridColumnDataType.Number"
                HasSummary="true">
                </IgbColumn>

                <IgbColumn
                Field="USBillboard200"
                Header="US Billboard 200"
                DataType="GridColumnDataType.Number"
                HasSummary="true">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="Songs"
                AutoGenerate="false">
                    <IgbColumn
                    Field="Number"
                    Header="No."
                    DataType="GridColumnDataType.String"
                    HasSummary="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    Header="Title"
                    DataType="GridColumnDataType.String"
                    HasSummary="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Released"
                    Header="Released"
                    DataType="GridColumnDataType.Date"
                    HasSummary="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Genre"
                    Header="Genre"
                    DataType="GridColumnDataType.String"
                    HasSummary="true">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbRowIsland>

        </IgbHierarchicalGrid>

    </div>
</div>

@code {

    private Action BindElements { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var propertyEditorPanel1 = this.propertyEditorPanel1;
        var summaryRowHeightEditor = this.summaryRowHeightEditor;
        var toggleSummariesEditor = this.toggleSummariesEditor;
        var sizeEditor = this.sizeEditor;
        var hierarchicalGrid = this.hierarchicalGrid;
        var column1 = this.column1;
        var column2 = this.column2;
        var column3 = this.column3;
        var column4 = this.column4;

        this.BindElements = () => {
            propertyEditorPanel1.Target = this.hierarchicalGrid;
        };
        this.BindElements();

    }

    private IgbPropertyEditorPanel propertyEditorPanel1;
    private IgbPropertyEditorPropertyDescription summaryRowHeightEditor;
    private IgbPropertyEditorPropertyDescription toggleSummariesEditor;
    private IgbPropertyEditorPropertyDescription sizeEditor;
    private IgbHierarchicalGrid hierarchicalGrid;
    private IgbColumn column1;
    private IgbColumn column2;
    private IgbColumn column3;
    private IgbColumn column4;

    public void WebHierarchicalGridHasSummariesChange(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        bool newValue = bool.Parse(args.NewValue.ToString());

        var hierarchicalGrid = this.hierarchicalGrid;
        var column1 = hierarchicalGrid.GetColumns().ElementAt(1);
        var column2 = hierarchicalGrid.GetColumns().ElementAt(3);
        var column3 = hierarchicalGrid.GetColumns().ElementAt(4);

        column1.HasSummary = newValue;
        column2.HasSummary = newValue;
        column3.HasSummary = newValue;
    }

    public RenderFragment<IgbSummaryTemplateContext> WebHierarchicalGridSummaryTemplateStyle = (ctx) => {
        var summaryResults = ctx.Implicit;
        return @<div class="summary-temp">
            <span><strong>@(summaryResults[0].Label)</strong><span>@(summaryResults[0].Result)</span></span>
            <span><strong>@(summaryResults[1].Label)</strong><span>@(summaryResults[1].Result)</span></span>
            <span><strong>@(summaryResults[2].Label)</strong><span>@(summaryResults[2].Result)</span></span>
        </div>;
    };

    public RenderFragment<IgbSummaryTemplateContext> WebHierarchicalGridSummaryTemplate = (ctx) => {
        var summaryResults = ctx.Implicit;
        return @<div class="summary-temp">
            <span>@(summaryResults[0].Label)<span>@(summaryResults[0].Result)</span></span>
            <span>@(summaryResults[1].Label)<span>@(summaryResults[1].Result)</span></span>
            <span>@(summaryResults[2].Label)<span>@(summaryResults[2].Result)</span></span>
        </div>;
    };

    public RenderFragment<IgbSummaryTemplateContext> WebRowIslandGridSummaryTemplateStyle = (ctx) => {
        var summaryResults = ctx.Implicit;
        return @<div class="summary-temp">
            <span><strong>@(summaryResults[0].Label)</strong><span>@(summaryResults[0].Result)</span></span>
            <span><strong>@(summaryResults[1].Label)</strong><span>@((DateTime)(summaryResults[1].Result))</span></span>
        </div>;
    };

        private object SingerSummary = new
        {
            operate = new Func<object[], object[], string, IgbSummaryResult[]>((data, allData, fieldName) =>
            {
                var sum = (object[] data) =>
                {
                    return data.Length > 0 && data.Select(el => (double)el).Where((el) => el != null).Count() > 0 ?
                        data.Select(el => (double)el).Where((el) => el != null).Aggregate((a, b) => a + b) :
                        0;
                };
                var result = new IgbSummaryResult[] { };
                result.Append(new IgbSummaryResult
                    {
                        Key = "nominatedSingers",
                        Label =  "Nominated Singers",
                        Result = allData.Count(rec => (int)((Dictionary<string, object>)rec)["GrammyNominations"] > 0)
                    });
                result.Append(new IgbSummaryResult
                    {
                        Key = "singersWithAwards",
                        Label = "Singers with Awards",
                        Result = allData.Count(rec => (int)((Dictionary<string, object>)rec)["GrammyAwards"] > 0)
                    });
                result.Append(new IgbSummaryResult
                    {
                        Key = "nominations",
                        Label = "Total Nominations",
                        Result = sum(allData.Select(r => (object)((int)((Dictionary<string, object>)r)["GrammyNominations"])).ToArray())
                    });
                result.Append(new IgbSummaryResult
                    {
                        Key = "awards",
                        Label = "Total Awards",
                        Result = sum(allData.Select(r => (object)((int)((Dictionary<string, object>)r)["GrammyAwards"])).ToArray())
                    });
                return result;
            })
        };
    private SingersData _singersData = null;
    public SingersData SingersData
    {
        get
        {
            if (_singersData == null)
            {
                _singersData = new SingersData();
            }
            return _singersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class SingersDataItem
{
    public double ID { get; set; }
    public string Artist { get; set; }
    public string Photo { get; set; }
    public double Debut { get; set; }
    public double GrammyNominations { get; set; }
    public double GrammyAwards { get; set; }
    public bool HasGrammyAward { get; set; }
    public List<SingersDataItem_ToursItem> Tours { get; set; }
    public List<SingersDataItem_AlbumsItem> Albums { get; set; }
}
public class SingersDataItem_ToursItem
{
    public string Tour { get; set; }
    public string StartedOn { get; set; }
    public string Location { get; set; }
    public string Headliner { get; set; }
    public string TouredBy { get; set; }
}
public class SingersDataItem_AlbumsItem
{
    public string Album { get; set; }
    public string LaunchDate { get; set; }
    public double BillboardReview { get; set; }
    public double USBillboard200 { get; set; }
    public string Artist { get; set; }
    public List<SingersDataItem_AlbumsItem_SongsItem> Songs { get; set; }
}
public class SingersDataItem_AlbumsItem_SongsItem
{
    public double Number { get; set; }
    public string Title { get; set; }
    public string Released { get; set; }
    public string Genre { get; set; }
    public string Album { get; set; }
}

public class SingersData
    : List<SingersDataItem>
{
    public SingersData()
    {
        this.Add(new SingersDataItem() { ID = 0, Artist = @"Naomí Yepes", Photo = @"https://dl.infragistics.com/x/img/people/names/naomi.png", Debut = 2011, GrammyNominations = 6, GrammyAwards = 0, HasGrammyAward = false, Tours = new List<SingersDataItem_ToursItem>()
        {
            new SingersDataItem_ToursItem() { Tour = @"Faithful Tour", StartedOn = @"Sep 12", Location = @"Worldwide", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"City Jam Sessions", StartedOn = @"Aug 13", Location = @"North America", Headliner = @"YES", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"Christmas NYC 2013", StartedOn = @"Dec 13", Location = @"United States", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            // ... 18 more items
        }
        , Albums = new List<SingersDataItem_AlbumsItem>()
        {
            new SingersDataItem_AlbumsItem() { Album = @"Emergency", LaunchDate = @"March 6, 2004", BillboardReview = 98, USBillboard200 = 69, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Gentle Falling", Released = @"26 Apr 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Calling in the Fire", Released = @"03 Sep 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Fire of Shadow", Released = @"05 Jan 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Dancing in the Dream", Released = @"15 Apr 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Calling in the Shadow", Released = @"09 Oct 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Falling in the Sky", Released = @"08 Mar 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Calling in the Storm", Released = @"05 Dec 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Falling in the River", Released = @"19 Aug 2019", Genre = @"Electro house Electropop", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Electric Fire", Released = @"30 Nov 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Lonely River", Released = @"11 Nov 2019", Genre = @"Electro house Electropop", Album = @"Emergency" }}
             },
            new SingersDataItem_AlbumsItem() { Album = @"Bursting bubbles", LaunchDate = @"April 17, 2006", BillboardReview = 69, USBillboard200 = 39, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Lonely Dream", Released = @"11 Dec 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Fire of River", Released = @"01 Aug 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Wicked Falling", Released = @"25 Jan 2019", Genre = @"*", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Crying in the Shadow", Released = @"04 Jan 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Wild Burning", Released = @"10 May 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Waiting in the Heart", Released = @"07 Aug 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Fire of Fire", Released = @"16 May 2019", Genre = @"Electro house Electropop", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Bright Heart", Released = @"14 Mar 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Lonely Fire", Released = @"15 Oct 2019", Genre = @"R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Sky of Dream", Released = @"20 Jun 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" }}
             }}
    }
}
```


## Disabled Summaries

The [`DisabledSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DisabledSummaries) property provides precise per-column control over the Blazor Hierarchical Grid summary feature. This property enables users to customize the summaries displayed for each column in the HierarchicalGrid, ensuring that only the most relevant and meaningful data is shown. For example, you can exclude specific summary types, such as **\['count', 'min', 'max']** by specifying their summary keys in an array.

This property can also be modified **dynamically at runtime** through code, providing flexibility to adapt the HierarchicalGrid's summaries to changing application states or user actions.

The following examples illustrate how to use the [`DisabledSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DisabledSummaries) property to manage summaries for different columns and exclude specific default and custom summary types in the Blazor Hierarchical Grid:

<!-- ComponentStart: Grid, HierarchicalGrid, TreeGrid -->

```razor
<!-- Disable default summaries -->
<IgbColumn
    Field="UnitPrice"
    Header="Unit Price"
    DataType="GridColumnDataType.Number"
    HasSummary="true"
    DisabledSummaries="['count', 'sum', 'average']" />

<!-- Disable custom summaries -->
<IgbColumn
    Field="UnitsInStock"
    Header="Units In Stock"
    DataType="GridColumnDataType.Number"
    HasSummary="true"
    Summaries="discontinuedSummary"
    DisabledSummaries="['discontinued', 'totalDiscontinued']" />
```

<!-- ComponentEnd: Grid, HierarchicalGrid, TreeGrid -->

For `UnitPrice`, default summaries like `count`, `sum`, and `average` are disabled, leaving others like `min` and `max` active.

For `UnitsInStock`, custom summaries such as `discontinued` and `totalDiscontinued` are excluded using the [`DisabledSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DisabledSummaries) property.

At runtime, summaries can also be dynamically disabled using the [`DisabledSummaries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_DisabledSummaries) property. For example, you can set or update the property on specific columns programmatically to adapt the displayed summaries based on user actions or application state changes.

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <div class="wrapper">
            <span class="summaries-title">Disable Summaries for Column:</span>
            <div class="summaries-buttons">
                @if (hierarchicalGrid != null && columns?.Length > 0)
                {
                    @foreach (IgbColumn column in columns)
                    {
                        <IgbButton Variant="ButtonVariant.Contained" class="summary-button"
                                   @onclick="() => OnDialogShow(column)">@column.Header</IgbButton>
                    }
                }
            </div>

            <IgbDialog @ref="dialog" Title="@dialogTitle" CloseOnOutsideClick="true">
                <div class="summaries-dialog-items">
                    @if (currentColumn != null && currentColumn.HasSummary && summaries.Count() > 0)
                    {
                        @foreach (var summary in this.summaries)
                        {
                            <IgbCheckbox Value="@summary.Key" Checked="@currentColDisabledSummaries.Contains(summary.Key)"
                                         Change="@((evt) => ToggleSummary(evt))">@summary.Value</IgbCheckbox>
                        }
                    }
                </div>
                <IgbButton slot="footer" Variant=@ButtonVariant.Flat Disabled="currentColDisabledSummaries.Count == summaries.Count()"
                           @onclick="() => ToggleAllSummaries(false)">Disable All</IgbButton>
                <IgbButton slot="footer" Variant=@ButtonVariant.Flat Disabled="currentColDisabledSummaries.Count == 0"
                           @onclick="() => ToggleAllSummaries(true)">Enable All</IgbButton>
            </IgbDialog>
            <IgbHierarchicalGrid AutoGenerate="false"
                                 Data="SingersData"
                                 Name="hierarchicalGrid"
                                 @ref="hierarchicalGrid"
                                 Id="hierarchicalGrid"
                                 PrimaryKey="ID"
                                 ColumnInitScript="ColumnInitScript">
                <IgbColumn Field="Artist"
                           Header="Artist"
                           @ref="artist"
                           HasSummary="true">
                </IgbColumn>

                <IgbColumn Field="Photo"
                           Header="Photo"
                           @ref="photo"
                           HasSummary="true"
                           DataType="GridColumnDataType.Image">
                </IgbColumn>

                <IgbColumn Field="Debut"
                           Header="Debut"
                           @ref="debut"
                           HasSummary="true">
                </IgbColumn>

                <IgbColumn Field="GrammyNominations"
                           Header="Grammy Nominations"
                           @ref="grammyNominations"
                           DataType="GridColumnDataType.Number"
                           HasSummary="true">
                </IgbColumn>

                <IgbColumn Field="GrammyAwards"
                           Header="Grammy Awards"
                           @ref="grammyAwards"
                           DataType="GridColumnDataType.Number"
                           HasSummary="true">
                </IgbColumn>

                <IgbRowIsland ChildDataKey="Albums"
                              AutoGenerate="false">
                    <IgbColumn Field="Album"
                               Header="Album"
                               DataType="GridColumnDataType.String">
                    </IgbColumn>

                    <IgbColumn Field="LaunchDate"
                               Header="Launch Date"
                               DataType="GridColumnDataType.Date">
                    </IgbColumn>

                    <IgbColumn Field="BillboardReview"
                               Header="Billboard Review"
                               DataType="GridColumnDataType.Number"
                               HasSummary="true">
                    </IgbColumn>

                    <IgbColumn Field="USBillboard200"
                               Header="US Billboard 200"
                               DataType="GridColumnDataType.Number"
                               HasSummary="true">
                    </IgbColumn>

                    <IgbRowIsland ChildDataKey="Songs"
                                  AutoGenerate="false">
                        <IgbColumn Field="Number"
                                   Header="No."
                                   DataType="GridColumnDataType.String">
                        </IgbColumn>

                        <IgbColumn Field="Title"
                                   Header="Title"
                                   DataType="GridColumnDataType.String"
                                   HasSummary="true">
                        </IgbColumn>

                        <IgbColumn Field="Released"
                                   Header="Released"
                                   DataType="GridColumnDataType.Date">
                        </IgbColumn>

                        <IgbColumn Field="Genre"
                                   Header="Genre"
                                   DataType="GridColumnDataType.String">
                        </IgbColumn>

                    </IgbRowIsland>

                </IgbRowIsland>

                <IgbRowIsland ChildDataKey="Tours"
                              AutoGenerate="false">
                    <IgbColumn Field="Tour"
                               Header="Tour"
                               DataType="GridColumnDataType.String">
                    </IgbColumn>

                    <IgbColumn Field="StartedOn"
                               Header="Started on"
                               DataType="GridColumnDataType.String">
                    </IgbColumn>

                    <IgbColumn Field="Location"
                               Header="Location"
                               DataType="GridColumnDataType.String">
                    </IgbColumn>

                    <IgbColumn Field="Headliner"
                               Header="Headliner"
                               DataType="GridColumnDataType.String">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbHierarchicalGrid>
        </div>

    </div>
</div>

@code {
    private IgbHierarchicalGrid hierarchicalGrid;
    private IgbColumn artist;
    private IgbColumn photo;
    private IgbColumn debut;
    private IgbColumn grammyNominations;
    private IgbColumn grammyAwards;

    private IgbColumn[] columns { get; set; } = [];
    private IgbColumn currentColumn;

    private Dictionary<string, string> summaries = [];
    private List<string> currentColDisabledSummaries { get; set; } = new List<string>();

    private IgbDialog dialog;
    private string dialogTitle;

    private SingersData _singersData = null;
    public SingersData SingersData
    {
        get
        {
            if (_singersData == null)
            {
                _singersData = new SingersData();
            }
            return _singersData;
        }
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            if (hierarchicalGrid != null)
            {
                columns = new IgbColumn[] { artist, photo, debut, grammyNominations, grammyAwards };
                StateHasChanged();
            }
        }
    }

    public async Task OnDialogShow(IgbColumn column)
    {
        if (this.dialog != null)
        {
            this.currentColumn = column;
            this.dialogTitle = "Disable Summaries for: " + column.Header;
            this.currentColDisabledSummaries.Clear();
            if (currentColumn.DisabledSummaries != null)
            {
                this.currentColDisabledSummaries = currentColumn.DisabledSummaries.ToList();
            }
            await this.GetSummaryKeysAsync();
            await this.dialog.ShowAsync();
        }
    }

    private async Task GetSummaryKeysAsync()
    {
        if (currentColumn != null && currentColumn.HasSummary)
        {
            summaries = await JS.InvokeAsync<Dictionary<string, string>>("getHGridSummaries", currentColumn.Field);
            StateHasChanged();
        }
    }

    public async Task ToggleSummary(IgbCheckboxChangeEventArgs eventArgs)
    {
        if (currentColumn != null && currentColumn.HasSummary)
        {
            string summaryKey = eventArgs.Detail.Value;
            if (eventArgs.Detail.Checked && !currentColDisabledSummaries.Contains(summaryKey))
            {
                currentColDisabledSummaries.Add(summaryKey);
            }
            else if (!eventArgs.Detail.Checked && currentColDisabledSummaries.Contains(summaryKey))
            {
                currentColDisabledSummaries.Remove(eventArgs.Detail.Value);
            }
            currentColumn.DisabledSummaries = currentColDisabledSummaries.ToArray();
        }
    }

    public async Task ToggleAllSummaries(bool enable)
    {
        if (currentColumn != null && currentColumn.HasSummary)
        {
            if (enable)
            {
                currentColDisabledSummaries.Clear();
            }
            else
            {
                currentColDisabledSummaries = summaries.Keys.ToList();
            }
            currentColumn.DisabledSummaries = currentColDisabledSummaries.ToArray();
        }
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class SingersDataItem
{
    public double ID { get; set; }
    public string Artist { get; set; }
    public string Photo { get; set; }
    public double Debut { get; set; }
    public double GrammyNominations { get; set; }
    public double GrammyAwards { get; set; }
    public bool HasGrammyAward { get; set; }
    public List<SingersDataItem_ToursItem> Tours { get; set; }
    public List<SingersDataItem_AlbumsItem> Albums { get; set; }
}
public class SingersDataItem_ToursItem
{
    public string Tour { get; set; }
    public string StartedOn { get; set; }
    public string Location { get; set; }
    public string Headliner { get; set; }
    public string TouredBy { get; set; }
}
public class SingersDataItem_AlbumsItem
{
    public string Album { get; set; }
    public string LaunchDate { get; set; }
    public double BillboardReview { get; set; }
    public double USBillboard200 { get; set; }
    public string Artist { get; set; }
    public List<SingersDataItem_AlbumsItem_SongsItem> Songs { get; set; }
}
public class SingersDataItem_AlbumsItem_SongsItem
{
    public double Number { get; set; }
    public string Title { get; set; }
    public string Released { get; set; }
    public string Genre { get; set; }
    public string Album { get; set; }
}

public class SingersData
    : List<SingersDataItem>
{
    public SingersData()
    {
        this.Add(new SingersDataItem() { ID = 0, Artist = @"Naomí Yepes", Photo = @"https://dl.infragistics.com/x/img/people/names/naomi.png", Debut = 2011, GrammyNominations = 6, GrammyAwards = 0, HasGrammyAward = false, Tours = new List<SingersDataItem_ToursItem>()
        {
            new SingersDataItem_ToursItem() { Tour = @"Faithful Tour", StartedOn = @"Sep 12", Location = @"Worldwide", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"City Jam Sessions", StartedOn = @"Aug 13", Location = @"North America", Headliner = @"YES", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"Christmas NYC 2013", StartedOn = @"Dec 13", Location = @"United States", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            // ... 18 more items
        }
        , Albums = new List<SingersDataItem_AlbumsItem>()
        {
            new SingersDataItem_AlbumsItem() { Album = @"Emergency", LaunchDate = @"March 6, 2004", BillboardReview = 98, USBillboard200 = 69, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Gentle Falling", Released = @"26 Apr 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Calling in the Fire", Released = @"03 Sep 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Fire of Shadow", Released = @"05 Jan 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Dancing in the Dream", Released = @"15 Apr 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Calling in the Shadow", Released = @"09 Oct 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Falling in the Sky", Released = @"08 Mar 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Calling in the Storm", Released = @"05 Dec 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Falling in the River", Released = @"19 Aug 2019", Genre = @"Electro house Electropop", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Electric Fire", Released = @"30 Nov 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Lonely River", Released = @"11 Nov 2019", Genre = @"Electro house Electropop", Album = @"Emergency" }}
             },
            new SingersDataItem_AlbumsItem() { Album = @"Bursting bubbles", LaunchDate = @"April 17, 2006", BillboardReview = 69, USBillboard200 = 39, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Lonely Dream", Released = @"11 Dec 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Fire of River", Released = @"01 Aug 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Wicked Falling", Released = @"25 Jan 2019", Genre = @"*", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Crying in the Shadow", Released = @"04 Jan 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Wild Burning", Released = @"10 May 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Waiting in the Heart", Released = @"07 Aug 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Fire of Fire", Released = @"16 May 2019", Genre = @"Electro house Electropop", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Bright Heart", Released = @"14 Mar 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Lonely Fire", Released = @"15 Oct 2019", Genre = @"R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Sky of Dream", Released = @"20 Jun 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" }}
             }}
    }
}
```


## Keyboard Navigation

The summary rows can be navigated with the following keyboard interactions:

- <kbd>UP</kbd> - navigates one cell up.
- <kbd>DOWN</kbd> - navigates one cell down.
- <kbd>LEFT</kbd> - navigates one cell left.
- <kbd>RIGHT</kbd> - navigates one cell right.
- <kbd>CTRL</kbd> + <kbd>LEFT</kbd> or <kbd>HOME</kbd> - navigates to the leftmost cell.
- <kbd>CTRL</kbd> + <kbd>RIGHT</kbd> or <kbd>END</kbd> - navigates to the rightmost cell.

## Styling

In addition to the predefined themes, the grid could be further customized by setting some of the available [CSS properties](../theming-grid.md).
In case you would like to change some of the colors, you need to set a class for the grid first:

```razor
<IgbHierarchicalGrid class="hierarchicalGrid"></IgbHierarchicalGrid>
```

Then set the related CSS properties for that class:

```css
.hierarchicalGrid {
    --ig-grid-summary-background-color:#e0f3ff;
    --ig-grid-summary-focus-background-color: rgba( #94d1f7, .3 );
    --ig-grid-summary-label-color: rgb(228, 27, 117);
    --ig-grid-summary-result-color: black;
}
```

### Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="SingersData"
        Name="hierarchicalGrid"
        @ref="hierarchicalGrid"
        Id="hierarchicalGrid"
        PrimaryKey="ID">
            <IgbColumn
            Field="Artist"
            Header="Artist"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="Photo"
            Header="Photo"
            DataType="GridColumnDataType.Image">
            </IgbColumn>

            <IgbColumn
            Field="Debut"
            Header="Debut"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyNominations"
            Header="Grammy Nominations"
            DataType="GridColumnDataType.Number"
            HasSummary="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyAwards"
            Header="Grammy Awards"
            DataType="GridColumnDataType.Number"
            HasSummary="true">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Albums"
            AutoGenerate="false">
                <IgbColumn
                Field="Album"
                Header="Album"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="LaunchDate"
                Header="Launch Date"
                DataType="GridColumnDataType.Date">
                </IgbColumn>

                <IgbColumn
                Field="BillboardReview"
                Header="Billboard Review"
                DataType="GridColumnDataType.Number"
                HasSummary="true">
                </IgbColumn>

                <IgbColumn
                Field="USBillboard200"
                Header="US Billboard 200"
                DataType="GridColumnDataType.Number"
                HasSummary="true">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="Songs"
                AutoGenerate="false">
                    <IgbColumn
                    Field="Number"
                    Header="No."
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    Header="Title"
                    DataType="GridColumnDataType.String"
                    HasSummary="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Released"
                    Header="Released"
                    DataType="GridColumnDataType.Date">
                    </IgbColumn>

                    <IgbColumn
                    Field="Genre"
                    Header="Genre"
                    DataType="GridColumnDataType.String">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbRowIsland>

            <IgbRowIsland
            ChildDataKey="Tours"
            AutoGenerate="false">
                <IgbColumn
                Field="Tour"
                Header="Tour"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="StartedOn"
                Header="Started on"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="Location"
                Header="Location"
                DataType="GridColumnDataType.String">
                </IgbColumn>

                <IgbColumn
                Field="Headliner"
                Header="Headliner"
                DataType="GridColumnDataType.String">
                </IgbColumn>

            </IgbRowIsland>

        </IgbHierarchicalGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var hierarchicalGrid = this.hierarchicalGrid;

    }

    private IgbHierarchicalGrid hierarchicalGrid;

    private SingersData _singersData = null;
    public SingersData SingersData
    {
        get
        {
            if (_singersData == null)
            {
                _singersData = new SingersData();
            }
            return _singersData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class SingersDataItem
{
    public double ID { get; set; }
    public string Artist { get; set; }
    public string Photo { get; set; }
    public double Debut { get; set; }
    public double GrammyNominations { get; set; }
    public double GrammyAwards { get; set; }
    public bool HasGrammyAward { get; set; }
    public List<SingersDataItem_ToursItem> Tours { get; set; }
    public List<SingersDataItem_AlbumsItem> Albums { get; set; }
}
public class SingersDataItem_ToursItem
{
    public string Tour { get; set; }
    public string StartedOn { get; set; }
    public string Location { get; set; }
    public string Headliner { get; set; }
    public string TouredBy { get; set; }
}
public class SingersDataItem_AlbumsItem
{
    public string Album { get; set; }
    public string LaunchDate { get; set; }
    public double BillboardReview { get; set; }
    public double USBillboard200 { get; set; }
    public string Artist { get; set; }
    public List<SingersDataItem_AlbumsItem_SongsItem> Songs { get; set; }
}
public class SingersDataItem_AlbumsItem_SongsItem
{
    public double Number { get; set; }
    public string Title { get; set; }
    public string Released { get; set; }
    public string Genre { get; set; }
    public string Album { get; set; }
}

public class SingersData
    : List<SingersDataItem>
{
    public SingersData()
    {
        this.Add(new SingersDataItem() { ID = 0, Artist = @"Naomí Yepes", Photo = @"https://dl.infragistics.com/x/img/people/names/naomi.png", Debut = 2011, GrammyNominations = 6, GrammyAwards = 0, HasGrammyAward = false, Tours = new List<SingersDataItem_ToursItem>()
        {
            new SingersDataItem_ToursItem() { Tour = @"Faithful Tour", StartedOn = @"Sep 12", Location = @"Worldwide", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"City Jam Sessions", StartedOn = @"Aug 13", Location = @"North America", Headliner = @"YES", TouredBy = @"Naomí Yepes" },
            new SingersDataItem_ToursItem() { Tour = @"Christmas NYC 2013", StartedOn = @"Dec 13", Location = @"United States", Headliner = @"NO", TouredBy = @"Naomí Yepes" },
            // ... 18 more items
        }
        , Albums = new List<SingersDataItem_AlbumsItem>()
        {
            new SingersDataItem_AlbumsItem() { Album = @"Emergency", LaunchDate = @"March 6, 2004", BillboardReview = 98, USBillboard200 = 69, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Gentle Falling", Released = @"26 Apr 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Calling in the Fire", Released = @"03 Sep 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Fire of Shadow", Released = @"05 Jan 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Dancing in the Dream", Released = @"15 Apr 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Calling in the Shadow", Released = @"09 Oct 2019", Genre = @"R&B", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Falling in the Sky", Released = @"08 Mar 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Calling in the Storm", Released = @"05 Dec 2019", Genre = @"ethno-tunes", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Falling in the River", Released = @"19 Aug 2019", Genre = @"Electro house Electropop", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Electric Fire", Released = @"30 Nov 2019", Genre = @"Crunk reggaeton", Album = @"Emergency" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Lonely River", Released = @"11 Nov 2019", Genre = @"Electro house Electropop", Album = @"Emergency" }}
             },
            new SingersDataItem_AlbumsItem() { Album = @"Bursting bubbles", LaunchDate = @"April 17, 2006", BillboardReview = 69, USBillboard200 = 39, Artist = @"Ahmad Nazeri", Songs = new List<SingersDataItem_AlbumsItem_SongsItem>()
            {
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 1, Title = @"Lonely Dream", Released = @"11 Dec 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 2, Title = @"Fire of River", Released = @"01 Aug 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 3, Title = @"Wicked Falling", Released = @"25 Jan 2019", Genre = @"*", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 4, Title = @"Crying in the Shadow", Released = @"04 Jan 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 5, Title = @"Wild Burning", Released = @"10 May 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 6, Title = @"Waiting in the Heart", Released = @"07 Aug 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 7, Title = @"Fire of Fire", Released = @"16 May 2019", Genre = @"Electro house Electropop", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 8, Title = @"Bright Heart", Released = @"14 Mar 2019", Genre = @"Synth-pop R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 9, Title = @"Lonely Fire", Released = @"15 Oct 2019", Genre = @"R&B", Album = @"Bursting bubbles" },
                new SingersDataItem_AlbumsItem_SongsItem() { Number = 10, Title = @"Sky of Dream", Released = @"20 Jun 2019", Genre = @"ethno-tunes", Album = @"Bursting bubbles" }}
             }}
    }
}
```


<!-- ComponentEnd: HierarchicalGrid -->

## API References

- `SummaryOperand`
- `NumberSummaryOperand`
- `DateSummaryOperand`
- [`IgbColumnGroup`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumnGroup.html)
- [`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

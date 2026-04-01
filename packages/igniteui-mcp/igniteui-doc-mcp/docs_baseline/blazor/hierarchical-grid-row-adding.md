---
title: Blazor Hierarchical Grid Row Adding - Ignite UI for Blazor
_description: Learn how to use and customize the built-in row adding functionality with Blazor and utilize intuitive grid row adding and CRUD capabilities.
_keywords: Blazor, Hierarchical Grid, IgbHierarchicalGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.HierarchicalGrid", "Infragistics.Controls.HierarchicalGridRow", "Infragistics.Controls.GridCell", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: grids/grid/row-adding
_tocName: Row Adding
_premium: true
---

# Blazor Hierarchical Grid Row Adding

<!-- ComponentStart: Grid, HierarchicalGrid -->

The Ignite UI for Blazor Row Adding feature in Blazor Hierarchical Grid enables users to input and submit new data records without navigating to a separate form or page. With the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html), users can manipulate data through inline row adding and a powerful API for CRUD operations.
Add an [`IgbActionStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActionStrip.html) component with editing actions enabled in the grid's template. After that hover a row and use the provided button. Finally press <kbd>ALT</kbd> + <kbd>+</kbd> to spawn the row adding UI.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

## Blazor Hierarchical Grid Row Adding Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbHierarchicalGrid
        AutoGenerate="false"
        Data="SingersData"
        Id="hGrid"
        Name="hGrid"
        @ref="hGrid"
        PrimaryKey="ID"
        RowEditable="true">
            <IgbActionStrip
            >
                <IgbGridEditingActions
                AddRow="true">
                </IgbGridEditingActions>

            </IgbActionStrip>

            <IgbColumn
            Field="Artist"
            Header="Artist"
            DataType="GridColumnDataType.String"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="Debut"
            Header="Debut"
            DataType="GridColumnDataType.Number"
            MinWidth="88px"
            MaxWidth="230px"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyNominations"
            Header="Grammy Nominations"
            DataType="GridColumnDataType.String"
            Resizable="true">
            </IgbColumn>

            <IgbColumn
            Field="GrammyAwards"
            Header="Grammy Awards"
            DataType="GridColumnDataType.String"
            Resizable="true">
            </IgbColumn>

            <IgbRowIsland
            ChildDataKey="Albums"
            AutoGenerate="false"
            PrimaryKey="Album"
            RowEditable="true">
                <IgbColumn
                Field="Album"
                Header="Album"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="LaunchDate"
                Header="Launch Date"
                DataType="GridColumnDataType.Date"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="BillboardReview"
                Header="Billboard Review"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="USBillboard200"
                Header="US Billboard 200"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbRowIsland
                ChildDataKey="Songs"
                AutoGenerate="false"
                PrimaryKey="Title"
                RowEditable="true">
                    <IgbActionStrip
                    >
                        <IgbGridEditingActions
                        AddRow="true">
                        </IgbGridEditingActions>

                    </IgbActionStrip>

                    <IgbColumn
                    Field="Number"
                    Header="No."
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Title"
                    Header="Title"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Released"
                    Header="Released"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                    <IgbColumn
                    Field="Genre"
                    Header="Genre"
                    DataType="GridColumnDataType.String"
                    Resizable="true">
                    </IgbColumn>

                </IgbRowIsland>

            </IgbRowIsland>

            <IgbRowIsland
            ChildDataKey="Tours"
            AutoGenerate="false"
            PrimaryKey="Tour"
            RowEditable="true">
                <IgbActionStrip
                >
                    <IgbGridEditingActions
                    AddRow="true">
                    </IgbGridEditingActions>

                </IgbActionStrip>

                <IgbColumn
                Field="Tour"
                Header="Tour"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="StartedOn"
                Header="Started on"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="Location"
                Header="Location"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

                <IgbColumn
                Field="Headliner"
                Header="Headliner"
                DataType="GridColumnDataType.String"
                Resizable="true">
                </IgbColumn>

            </IgbRowIsland>

        </IgbHierarchicalGrid>

    </div>
</div>

@code {

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        var hGrid = this.hGrid;

    }

    private IgbHierarchicalGrid hGrid;

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


## Row Adding Usage

Then define a [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) with bound data source, [`RowEditable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowEditable) set to true and an [`IgbActionStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActionStrip.html) component with editing actions enabled. The `AddRow` input controls the visibility of the button that spawns the row adding UI.

<!-- ComponentEnd: TreeGrid -->

<!-- Blazor -->

<!-- ComponentStart: HierarchicalGrid -->

```razor
<IgbHierarchicalGrid AutoGenerate="false" Id="hGrid" PrimaryKey="Debut" RowEditable="true">
    <IgbColumn Field="Artist" Header="Artist" DataType="GridColumnDataType.String"></IgbColumn>
    <IgbColumn Field="HasGrammyAward" Header="Has Grammy Award" DataType="GridColumnDataType.Boolean"></IgbColumn>
    <IgbColumn Field="Debut" Header="Debut" DataType="GridColumnDataType.Number"></IgbColumn>
    <IgbColumn Field="GrammyNominations" Header="Grammy Nominations" DataType="GridColumnDataType.Number"></IgbColumn>
    <IgbColumn Field="GrammyAwards" Header="Grammy Awards" DataType="GridColumnDataType.Number"></IgbColumn>

    <IgbActionStrip>
        <IgbGridEditingActions AddRow="true"></IgbGridEditingActions>
    </IgbActionStrip>

    <IgbRowIsland AutoGenerate="false" Key="Albums" PrimaryKey="USBillboard200" RowEditable="true">
        <IgbColumn Field="Album" Header="Album" DataType="GridColumnDataType.Number"></IgbColumn>
        <IgbColumn Field="LaunchDate" Header="Launch Date" DataType="GridColumnDataType.Date"></IgbColumn>
        <IgbColumn Field="BillboardReview" Header="Billboard Review" DataType="GridColumnDataType.Number"></IgbColumn>
        <IgbColumn Field="USBillboard200" Header="US Billboard 200" DataType="GridColumnDataType.Number"></IgbColumn>
        <IgbColumn Field="GrammyAwards" Header="Grammy Awards" DataType="GridColumnDataType.Number"></IgbColumn>

        <IgbRowIsland AutoGenerate="false" Key="Songs" PrimaryKey="Number" RowEditable="true">
            <IgbColumn Field="Number" Header="Number" DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="Title" DataType="GridColumnDataType.String"></IgbColumn>
            <IgbColumn Field="Released" DataType="GridColumnDataType.Date"></IgbColumn>
            <IgbColumn Field="Genre" DataType="GridColumnDataType.String"></IgbColumn>

            <IgbActionStrip>
                <IgbGridEditingActions AddRow="true"></IgbGridEditingActions>
            </IgbActionStrip>
        </IgbRowIsland>

        <IgbActionStrip>
            <IgbGridEditingActions AddRow="true"></IgbGridEditingActions>
        </IgbActionStrip>
    </IgbRowIsland>
</IgbHierarchicalGrid>
```

<!-- ComponentEnd: HierarchicalGrid -->

<!-- end: Blazor -->

> **Note**:
> Setting primary key is mandatory for row adding operations.

> **Note**:
> Every column excluding the primary key one is editable in the row adding UI by default. If you want to disable editing for a specific column, then you have to set the [`Editable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Editable) column's input to `false`.

<!-- ComponentStart: Grid, HierarchicalGrid -->

> **Note**:
> The [`IgbGridEditingActions`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridEditingActions.html) input controlling the visibility of the add row button may use the action strip context (which is of type [`IgbRowType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRowType.html) to fine tune which records the button shows for.

<!-- ComponentEnd: Grid, HierarchicalGrid -->

The internal `BaseTransactionService` is automatically provided for [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html). It holds pending cell changes until the row state is submitted or cancelled.

## Start Row Adding Programmatically

[`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) allows to programmatically spawn the add row UI by using two different public methods. One that accepts a row ID for specifying the row under which the UI should spawn and another that works by index. You can use these methods to spawn the UI anywhere within the current data view. Changing the page or specifying a row that is e.g. filtered out is not supported.

<!-- ComponentStart: Grid, HierarchicalGrid -->

Using [`BeginAddRowById`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_BeginAddRowById) requires you to specify the row to use as context for the operation by its `RowID` (PK). The method then functions as though the end-user clicked on the add row action strip button for the specified row, spawning the UI under it. You can also make the UI spawn as the very first row in the grid by passing `null` for the first parameter.

```razor
@code {
    await this.grid.BeginAddRowByIdAsync('ALFKI', false);  // Spawns the add row UI under the row with PK 'ALFKI'
    await this.grid.BeginAddRowByIdAsync(null, false);     // Spawns the add row UI as the first record
}
```

The `BeginAddRowByIndex` method works similarly but requires you to specify the index at which the UI should spawn. Allowed values range between 0 and the size of the data view - 1.

```razor
@code {
    await this.grid.BeginAddRowByIndexAsync(10);   // Spawns the add row UI at index 10
    await this.grid.BeginAddRowByIndexAsync(0);    // Spawns the add row UI as the first record
}
```

<!-- ComponentEnd: Grid, HierarchicalGrid -->

## Positioning

- The default position of row add UI is below the row that the end user clicked the add row button for.

- The [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) scrolls to fully display the add row UI automatically.

- The overlay for the add row UI maintains its position during scrolling.

## Behavior

The add row UI has the same behavior as the row editing one as they are designed to provide a consistent editing experience to end users. Please, refer to the [Hierarchical Grid Row Editing](row-editing.md) topic for more information.

After a new row is added through the row adding UI, its position and/or visibility is determined by the sorting, filtering and grouping state of the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html). In a [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) that does not have any of these states applied, it appears as the last record. A snackbar is briefly displayed containing a button the end user may use to scroll the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) to its position if it is not in view.

## Keyboard Navigation

- <kbd>ALT</kbd> + <kbd>+</kbd> - Enters edit mode for adding a row

<!---->

- <kbd>ESC</kbd> exits row adding mode without submitting any changes

- <kbd>TAB</kbd> move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.

## Feature Integration

- Any row adding operation will stop if the data view of the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html) gets modified. Any changes made by the end user are submitted. Operations that change the data view include but are not limited to sorting, grouping, filtering, paging, etc.

- Summaries are updated after the row add operation finishes. The same is valid for the other data view dependant features such as sorting, filtering, etc.

<!-- ComponentStart: HierarchicalGrid -->

- When spawning the UI for the [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html), any child layout currently expanded for a row that the end user clicks the add row button for is collapsed.

<!-- ComponentEnd: HierarchicalGrid -->

## Customizing Row Adding Overlay

### Customizing Text

<!-- WebComponents, React, Blazor -->

Customizing the text of the row adding overlay is possible using the [`RowAddTextTemplate`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowAddTextTemplate).

<!-- end: WebComponents, React, Blazor -->

<!-- Blazor -->

<!-- ComponentStart: Grid, TreeGrid, HierarchicalGrid -->

```razor
<IgbHierarchicalGrid Data="data" PrimaryKey="ProductID" AutoGenerate="false" RowEditable="true" RowAddTextTemplate="addTextTemplate">
</IgbHierarchicalGrid>

@code {
    private RenderFragment<IgbGridEmptyTemplateContext> addTextTemplate = (context) =>
    {
        return @<span>Adding Row</span>;
    };
}
```

<!-- ComponentEnd: Grid, TreeGrid, HierarchicalGrid -->

<!-- end: Blazor -->

<!-- Blazor -->

### Customizing Buttons

Customizing the buttons of the row editing overlay is possible by using the `RowEditActions` template.

<!--
REQUIRES FIX!
```ts
this.grid.rowEditActionsTemplate = (endRowEdit: IgcGridRowEditActionsTemplateContext) => {
    return html`
        <button @click="${evt => endRowEdit.implicit(false, evt)}">Cancel</button>
        <button @click="${evt => endRowEdit.implicit(true, evt)}">Apply</button>
    `;
}
```
-->

```razor
<IgbHierarchicalGrid Data="data" PrimaryKey="ProductID" AutoGenerate="false" RowEditable="true" RowEditActionsTemplateScript="rowEditActionsTemplate">
</IgbHierarchicalGrid>

//In JavaScript:
igRegisterScript("rowEditActionsTemplate", (endRowEdit) => {
    var html = window.igTemplating.html;
    return html`<div class="row-actions">
        <button @click="${evt => endRowEdit.implicit(false, evt)}">Cancel</button>
        <button @click="${evt => endRowEdit.implicit(true, evt)}">Apply</button>
    </div>`
}, false);
```

> **Note**:
> Using `RowEditActions` template will change edit actions for both editing and adding overlay buttons.

<!-- end: Blazor -->

## Styling

The row adding UI comprises the buttons in the [`IgbActionStrip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbActionStrip.html) editing actions, the editing editors and overlay, as well as the snackbar which allows end users to scroll to the newly added row. To style these components you may refer to these comprehensive guides in their respective topics:

- [Hierarchical Grid Row Editing](row-editing.md#styling)
- [Snackbar](../../notifications/snackbar.md#styling)

<!-- - [ActionStrip](../action-strip.md#styling) -->

## API References

- [`RowEditable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RowEditable)
- `RowEditEnter`
- `RowEdit`
- `RowEditDone`
- `RowEditCancel`
- `EndEdit`
- [`PrimaryKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_PrimaryKey)
- [`IgbHierarchicalGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbHierarchicalGrid.html)

## Additional Resources

- [Hierarchical Grid Editing](editing.md)

<!-- * [Hierarchical Grid Transactions](batch-editing.md) -->

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

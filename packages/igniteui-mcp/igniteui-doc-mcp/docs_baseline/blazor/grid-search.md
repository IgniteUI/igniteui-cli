---
title: Blazor Grid Search Filter - Ignite UI for Blazor
_description: Perform data manipulation without affecting the underlying data with Grid Batch Editing, using Blazor Grid. See demos & examples!
_keywords: Blazor, Grid, IgbGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid", "Infragistics.Controls.GridCell", "Infragistics.Controls.GridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid"]
namespace: Infragistics.Controls
_tocName: Search
_premium: true
---

# Blazor Grid Search Filter

The Ignite UI for Blazor Search Filter feature in Blazor Grid enables the process of finding values in the collection of data. We make it easier to set up this functionality and it can be implemented with a search input box, buttons, keyboard navigation and other useful features for an even better user experience. While browsers natively provide content search functionality, most of the time the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) virtualizes its columns and rows that are out of view. In these cases, the native browser search is unable to search data in the virtualized cells, since they are not part of the DOM. We have extended the Blazor Material table-based grid with a **search API** that allows you to search through the **virtualized content** of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html).

## Blazor Search Example

The following example represents [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) with search input box that allows searching in all columns and rows, as well as specific filtering options for each column.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical">

        @if (marketData != null)
        {
            <div style="margin-bottom: 1rem">

                <IgbInput ValueChanging="OnValueChanging" Value="@searchText" @onkeydown="OnSearchKeyDown">
                    @if (searchText.Length == 0)
                    {
                        <IgbIcon @ref="searchIconRef" slot="prefix" IconName="search" Collection="material"/>
                    }
                    @if (searchText.Length > 0)
                    {
                        <IgbIcon slot="prefix" IconName="clear" Collection="material" @onclick="ClearSearch"/>
                    }

                    <div class="chips" slot="suffix">
                        <IgbChip Selectable=true SelectedChanged="UpdateCase">
                            Case Sensitive
                        </IgbChip>
                        <IgbChip  Selectable=true SelectedChanged="UpdateExactSearch">
                            Exact Match
                        </IgbChip>
                    </div>
                    <div class="searchButtons" slot="suffix">
                        <IgbIconButton Variant="IconButtonVariant.Flat" @onclick="PrevSearch">
                            <IgbIcon IconName="prev" Collection="material"/>
                        </IgbIconButton>
                        <IgbIconButton Variant="IconButtonVariant.Flat" @onclick="NextSearch">
                            <IgbIcon IconName="next" Collection="material" />
                        </IgbIconButton>
                    </div>
                </IgbInput>
            </div>

            <div class="container vertical">

                <IgbGrid @ref=grid Class="gridSize" Width="100%" Height="100%" AllowFiltering=true AutoGenerate=false Data=marketData>
                    <IgbColumn Field="IndustrySector" Header="Industry Sector" DataType="GridColumnDataType.String" Sortable=true></IgbColumn>
                    <IgbColumn Field="IndustryGroup" Header="Industry Group" DataType="GridColumnDataType.String" Sortable=true></IgbColumn>
                    <IgbColumn Field="SectorType" Header="Sector Type" DataType="GridColumnDataType.String" Sortable=true></IgbColumn>
                    <IgbColumn Field="KRD" DataType="GridColumnDataType.Number" Sortable=true></IgbColumn>
                    <IgbColumn Field="MarketNotion" Header="Market Notion" DataType="GridColumnDataType.Number" Sortable=true></IgbColumn>
                </IgbGrid>
            </div>
        }

</div>

@code {
    private List<MarketRecord> marketData;
    private IgbGrid grid;

    public bool caseSensitive = false;
    public bool exactMatch = false;
    public string searchText = "";

    private IgbIcon searchIconRef { get; set; }
    const string searchIcon = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' /></svg>";
    const string prevIcon = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path></svg>";
    const string nextIcon = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path></svg>";
    const string clearIcon = "<svg width='24' height='24' viewBox='0 0 24 24' title='Clear'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path></svg>";

    protected override void OnInitialized()
    {
        this.marketData = MarketData.GetData();
    }

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.searchIconRef != null && firstRender)
        {
            this.searchIconRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.searchIconRef.RegisterIconFromTextAsync("search", searchIcon, "material");
                this.searchIconRef.RegisterIconFromTextAsync("prev", prevIcon, "material");
                this.searchIconRef.RegisterIconFromTextAsync("next", nextIcon, "material");
                this.searchIconRef.RegisterIconFromTextAsync("clear", clearIcon, "material");
            }));
        }
    }

    private void OnSearchKeyDown(KeyboardEventArgs evt)
    {
        if (evt.Key == "Enter" && !evt.ShiftKey) {
            this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
        } else if (evt.Key == "Enter") {
            this.grid.FindPrevAsync(this.searchText, this.caseSensitive, this.exactMatch);
        }
    }

    public void OnValueChanging(string newValue)
    {
        this.searchText = newValue;
        this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public void PrevSearch()
    {
        this.grid.FindPrevAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public void NextSearch()
    {
        this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public void ClearSearch()
    {
        this.searchText = "";
        this.grid.ClearSearchAsync();
    }

    public void UpdateCase(bool selected) {
        this.caseSensitive = selected;
        this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public void UpdateExactSearch(bool selected) {
        this.exactMatch = selected;
        this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```


## Blazor Search Usage

### Grid Setup

Let's start by creating our grid and binding it to our data. We will also add some custom styles for the components we will be using!

<!-- ComponentStart: Grid -->

```css
.gridSize {
    --ig-size: var(--ig-size-small);
}
```

```razor
<IgbGrid @ref=grid Class="gridSize" Width="100%" Height="480px" AllowFiltering=true AutoGenerate=false Data=marketData>
    <IgbColumn Field="IndustrySector" DataType="GridColumnDataType.String" Sortable=true></IgbColumn>
    <IgbColumn Field="IndustryGroup" DataType="GridColumnDataType.String" Sortable=true></IgbColumn>
    <IgbColumn Field="SectorType" DataType="GridColumnDataType.String" Sortable=true></IgbColumn>
    <IgbColumn Field="KRD" DataType="GridColumnDataType.Number" Sortable=true></IgbColumn>
    <IgbColumn Field="MarketNotion" DataType="GridColumnDataType.Number" Sortable=true></IgbColumn>
</IgbGrid>

@code {
    protected override void OnInitialized()
    {
        base.OnInitialized();
        this.marketData = MarketData.GetData();
    }
}
```

<!-- ComponentEnd: Grid -->

Great, and now let's prepare for the search API of our [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)! We can create a few properties, which can be used for storing the currently searched text and whether the search is case sensitive and/or by an exact match.

<!-- ComponentStart: Grid -->

```razor
public string searchText = "";
public bool caseSensitive = false;
public bool exactMatch = false;
```

<!-- ComponentEnd: Grid -->

### Blazor Search Box Input

<!-- Blazor -->

Now let's create our search input! By binding our `SearchText` to the `Value` property to our newly created input and subscribe to the `ValueChanging` event, we can detect every single `SearchText` modification by the user. This will allow us to use the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)'s [`FindNext`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindNext) and [`FindPrev`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindPrev) methods to highlight all the occurrences of the `SearchText` and scroll to the next/previous one (depending on which method we have invoked).

<!-- end: Blazor -->

Both the [`FindNext`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindNext) and the [`FindPrev`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindPrev) methods have three arguments:

- `Text`: **string** (the text we are searching for)
- (optional) `CaseSensitive`: **boolean** (should the search be case sensitive or not, default value is false)
- (optional) `ExactMatch`: **boolean** (should the search be by an exact match or not, default value is false)

When searching by an exact match, the search API will highlight as results only the cell values that match entirely the `SearchText` by taking the case sensitivity into account as well. For example the strings '*software*' and '*Software*' are an exact match with a disregard for the case sensitivity.

The methods from above return a **number** value (the number of times the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) contains the given string).

<!-- ComponentStart: Grid -->

```razor
<IgbInput ValueChanging="valueChanging" Value="@searchText" />
```

<!-- ComponentEnd: Grid -->

### Add Search Buttons

In order to freely search and navigate among our search results, let's create a couple of buttons by invoking the [`FindNext`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindNext) and the [`FindPrev`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindPrev) methods inside the buttons' respective click event handlers.

<!-- ComponentStart: Grid -->

```razor
<IgbIconButton Variant="IconButtonVariant.Flat" @onclick="PrevSearch">
    <IgbIcon IconName="prev" Collection="material"/>
</IgbIconButton>
<IgbIconButton Variant="IconButtonVariant.Flat" @onclick="NextSearch">
    <IgbIcon IconName="next" Collection="material" />
</IgbIconButton>

@code {
    private IgbGrid grid;
    public void PrevSearch()
    {
        this.grid.FindPrevAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public void NextSearch()
    {
        this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```

### Add Keyboard Search

We can also allow the users to navigate the results by using the keyboard's arrow keys and the <kbd>ENTER</kbd> key. In order to achieve this, we can handle the **keydown** event of our search input by preventing the default caret movement of the input with the `PreventDefault` method and invoke the [`FindNext`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindNext)/[`FindPrev`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindPrev) methods depending on which key the user has pressed.

<!-- Blazor -->

We can also allow the users to navigate the results by using the keyboard's <kbd>ENTER</kbd> key. In order to achieve this, we can handle the **keydown** event of our search and invoke the [`FindNext`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindNext)/[`FindPrev`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindPrev) methods depending on if the user has pressed <kbd>SHIFT</kbd> as well or not.

<!-- end: Blazor -->

```razor
<IgbInput ValueChanging="valueChanging" Value="@searchText" @onkeydown="OnSearchKeyDown"/>

@code {
    private void OnSearchKeyDown(KeyboardEventArgs evt)
    {
        if (evt.Key == "Enter" && !evt.ShiftKey) {
            this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
        } else if (evt.Key == "Enter") {
            this.grid.FindPrevAsync(this.searchText, this.caseSensitive, this.exactMatch);
        }
    }
}
```

<!-- ComponentEnd: Grid -->

### Case Sensitive and Exact Match

<!-- ComponentStart: Grid -->

<!-- ComponentEnd: Grid -->

<!-- Blazor -->

Now let's allow the user to choose whether the search should be case sensitive and/or by an exact match. For this purpose we can use simple selectable `Chips` and bind to the `SelectedChanged` event to determine when the user interacts with them.

<!-- end: Blazor -->

```razor
<IgbChip Selectable=true SelectedChanged="UpdateCase">
    Case Sensitive
</IgbChip>
<IgbChip  Selectable=true SelectedChanged="UpdateExactSearch">
    Exact Match
</IgbChip>

@code {
    public void UpdateCase(bool selected) {
        this.caseSensitive = selected;
        this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public void UpdateExactSearch(bool selected) {
        this.exactMatch = selected;
        this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```

### Persistence

What if we would like to filter and sort our [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) or even to add and remove records? After such operations, the highlights of our current search automatically update and persist over any text that matches the `SearchText`! Furthermore, the search will work with paging and will persist the highlights through changes of the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)'s `PerPage` property.

### Adding icons

By using some of our other components, we can create an enriched user interface and improve the overall design of our entire search bar! We can have a nice search or delete icon on the left of the search input, a couple of chips for our search options and some material design icons combined with nice ripple styled buttons for our navigation on the right.

<!-- Blazor -->

To do this, let's go and grab the [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html), [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html), [`IgbIconButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIconButton.html) and the [`IgbChip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChip.html) modules.

<!-- end: Blazor -->

<!-- ComponentStart: Grid -->

```razor
// eg. Program.cs register the following:
builder.Services.AddIgniteUIBlazor(
    typeof(IgbGridModule),
    typeof(IgbInputModule),
    typeof(IgbIconButtonModule),
    typeof(IgbIconModule)
);
```

<!-- ComponentEnd: Grid -->

```razor
@code {
    private IgbIcon searchIconRef { get; set; }
    const string searchIcon = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' /></svg>";
    const string prevIcon = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path></svg>";
    const string nextIcon = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path></svg>";
    const string clearIcon = "<svg width='24' height='24' viewBox='0 0 24 24' title='Clear'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path></svg>";

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.searchIconRef != null && firstRender)
        {
            this.searchIconRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.searchIconRef.RegisterIconFromTextAsync("search", searchIcon, "material");
                this.searchIconRef.RegisterIconFromTextAsync("prev", prevIcon, "material");
                this.searchIconRef.RegisterIconFromTextAsync("next", nextIcon, "material");
                this.searchIconRef.RegisterIconFromTextAsync("clear", clearIcon, "material");
            }));
        }
    }
}
```

<!-- WebComponents, Blazor -->

Finally, let's update our template with the new components!

<!-- Blazor -->

We will wrap all of our components inside an [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html). On the left we will toggle between a search and a delete/clear icon (depending on whether the search input is empty or not). In the center, we will position the input itself. In addition, whenever the delete icon is clicked, we will update our `SearchText` and invoke the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)'s [`ClearSearch`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_ClearSearch) method to clear the highlights.

<!-- end: Blazor -->

<!-- ComponentEnd: Grid -->

```razor
<IgbInput ValueChanging="OnValueChanging" Value="@searchText" @onkeydown="OnSearchKeyDown">
    @if (searchText.Length == 0)
    {
        <IgbIcon @ref="searchIconRef" slot="prefix" IconName="search" Collection="material"/>
    }
    @if (searchText.Length > 0)
    {
        <IgbIcon slot="prefix" IconName="clear" Collection="material" @onclick="ClearSearch"/>
    }

    <div class="chips" slot="suffix">
        <IgbChip Selectable=true SelectedChanged="UpdateCase">
            Case Sensitive
        </IgbChip>
        <IgbChip  Selectable=true SelectedChanged="UpdateExactSearch">
            Exact Match
        </IgbChip>
    </div>
    <div class="searchButtons" slot="suffix">
        <IgbIconButton Variant="IconButtonVariant.Flat" @onclick="PrevSearch">
            <IgbIcon IconName="prev" Collection="material"/>
        </IgbIconButton>
        <IgbIconButton Variant="IconButtonVariant.Flat" @onclick="NextSearch">
            <IgbIcon IconName="next" Collection="material" />
        </IgbIconButton>
    </div>
</IgbInput>

@code {

    public void clearSearch()
    {
        this.searchText = "";
        this.grid.ClearSearchAsync();
    }
}
```

<!-- Angular, Blazor, WebComponents -->

On the right in our input group, let's create three separate containers with the following purposes:

<!-- end: Angular, Blazor, WebComponents -->

- For displaying a couple of chips that toggle the `CaseSensitive` and the `ExactMatch` properties. We have replaced the checkboxes with two stylish chips. Whenever a chip is clicked, we invoke its respective handler.

```razor
    <div class="chips" slot="suffix">
        <IgbChip Selectable=true SelectedChanged="UpdateCase">
            Case Sensitive
        </IgbChip>
        <IgbChip  Selectable=true SelectedChanged="UpdateExactSearch">
            Exact Match
        </IgbChip>
    </div>

@code {
    public void UpdateCase(bool selected) {
        this.caseSensitive = selected;
        this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public void UpdateExactSearch(bool selected) {
        this.exactMatch = selected;
        this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```

<!-- Angular, WebComponents, Blazor -->

- For the search navigation buttons, we have added two ripple styled buttons with material icons. The handlers for the click events remain the same - invoking the [`FindNext`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindNext)/[`FindPrev`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindPrev) methods.

```razor
<div class="searchButtons" slot="suffix">
    <IgbIconButton Variant="IconButtonVariant.Flat" @onclick="PrevSearch">
        <IgbIcon IconName="prev" Collection="material"/>
    </IgbIconButton>
    <IgbIconButton Variant="IconButtonVariant.Flat" @onclick="NextSearch">
        <IgbIcon IconName="next" Collection="material" />
    </IgbIconButton>
</div>
@code {
    public void PrevSearch()
    {
        this.grid.FindPrevAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public void NextSearch()
    {
        this.grid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```

## Known Limitations

|Limitation|Description|
|--- |--- |
|Searching in cells with a template|The search functionality highlights work only for the default cell templates. If you have a column with custom cell template, the highlights will not work so you should either use alternative approaches, such as a column formatter, or set the [`Searchable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Searchable) property on the column to false.|
|Remote Virtualization| The search will not work properly when using remote virtualization|
|Cells with cut off text| When the text in the cell is too large to fit and the text we are looking for is cut off by the ellipsis, we will still scroll to the cell and include it in the match count, but nothing will be highlighted |

## API References

In this article we implemented our own search bar for the [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) with some additional functionality when it comes to navigating between the search results. We also used some additional Ignite UI for Blazor components like icons, chips and inputs. The search API is listed below.

[`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) methods:

- [`FindNext`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindNext)
- [`FindPrev`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindPrev)
- [`ClearSearch`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_ClearSearch)
- [`RefreshSearch`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RefreshSearch)

[`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) properties:

- [`Searchable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Searchable)

Additional components with relative APIs that were used:

- [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html)
- [`IgbChip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChip.html)

<!-- Blazor -->

- [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html)
- [`IgbIconButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIconButton.html)

<!-- end: Blazor -->

## Additional Resources

- [Virtualization and Performance](virtualization.md)
- [Filtering](filtering.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

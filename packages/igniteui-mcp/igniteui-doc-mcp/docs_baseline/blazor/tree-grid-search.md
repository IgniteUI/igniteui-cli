---
title: Blazor Tree Grid Search Filter - Ignite UI for Blazor
_description: Perform data manipulation without affecting the underlying data with Tree Grid Batch Editing, using Blazor Tree Grid. See demos & examples!
_keywords: Blazor, Tree Grid, IgbTreeGrid, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid"]
namespace: Infragistics.Controls
_tocName: Search
_premium: true
---

# Blazor Tree Grid Search Filter

The Ignite UI for Blazor Search Filter feature in Blazor Tree Grid enables the process of finding values in the collection of data. We make it easier to set up this functionality and it can be implemented with a search input box, buttons, keyboard navigation and other useful features for an even better user experience. While browsers natively provide content search functionality, most of the time the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) virtualizes its columns and rows that are out of view. In these cases, the native browser search is unable to search data in the virtualized cells, since they are not part of the DOM. We have extended the Blazor Material table-based grid with a **search API** that allows you to search through the **virtualized content** of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html).

## Blazor Search Example

The following example represents [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) with search input box that allows searching in all columns and rows, as well as specific filtering options for each column.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <div style="margin-bottom: 1rem">
        <IgbInput ValueChanging="OnValueChanging" Value="@searchText" @onkeydown="OnSearchKeyDown">
            @if (searchText.Length == 0)
            {
                <IgbIcon @ref="searchIconRef" slot="prefix" IconName="search" Collection="material" />
            }
            @if (searchText.Length > 0)
            {
                <IgbIcon slot="prefix" IconName="clear" Collection="material" @onclick="ClearSearch" />
            }

            <div class="chips" slot="suffix">
                <IgbChip Selectable=true SelectedChanged="UpdateCase">
                    Case Sensitive
                </IgbChip>
                <IgbChip Selectable=true SelectedChanged="UpdateExactSearch">
                    Exact Match
                </IgbChip>
            </div>
            <div class="searchButtons" slot="suffix">
                <IgbIconButton Variant="IconButtonVariant.Flat" @onclick="PrevSearch">
                    <IgbIcon IconName="prev" Collection="material" />
                </IgbIconButton>
                <IgbIconButton Variant="IconButtonVariant.Flat" @onclick="NextSearch">
                    <IgbIcon IconName="next" Collection="material" />
                </IgbIconButton>
            </div>
        </IgbInput>
    </div>

    <div class="container vertical">
        <IgbTreeGrid @ref=treeGrid AutoGenerate=false Data=EmployeesFlatData PrimaryKey="ID" ForeignKey="ParentID" AllowFiltering=true Height="100%" Width="100%">
            <IgbColumn Field="Name" DataType="GridColumnDataType.String" Sortable=true></IgbColumn>
            <IgbColumn Field="ID" DataType="GridColumnDataType.Number" Sortable=true></IgbColumn>
            <IgbColumn Field="Title" DataType="GridColumnDataType.String" Sortable=true></IgbColumn>
            <IgbColumn Field="Age" DataType="GridColumnDataType.Number" Sortable=true></IgbColumn>
            <IgbColumn Field="HireDate" DataType="GridColumnDataType.Date" Sortable=true></IgbColumn>
        </IgbTreeGrid>
    </div>
</div>

@code {
    private IgbTreeGrid treeGrid;

    public bool caseSensitive = false;
    public bool exactMatch = false;
    public string searchText = "";

    private IgbIcon searchIconRef { get; set; }
    const string searchIcon = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' /></svg>";
    const string prevIcon = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path></svg>";
    const string nextIcon = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path></svg>";
    const string clearIcon = "<svg width='24' height='24' viewBox='0 0 24 24' title='Clear'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path></svg>";

    private EmployeesFlatData _employeesFlatData = null;
    public EmployeesFlatData EmployeesFlatData
    {
        get
        {
            if (_employeesFlatData == null)
            {
                _employeesFlatData = new EmployeesFlatData();
            }
            return _employeesFlatData;
        }
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
        if (evt.Key == "Enter" || evt.Key == "ArrowDown") {
            this.treeGrid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
        } else if (evt.Key == "ArrowUp") {
            this.treeGrid.FindPrevAsync(this.searchText, this.caseSensitive, this.exactMatch);
        }
    }

    public void OnValueChanging(string newValue)
    {
        this.searchText = newValue;
        this.treeGrid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public void PrevSearch()
    {
        this.treeGrid.FindPrevAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public void NextSearch()
    {
        this.treeGrid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public void ClearSearch()
    {
        this.searchText = "";
        this.treeGrid.ClearSearchAsync();
    }

    public void UpdateCase(bool selected) {
        this.caseSensitive = selected;
        this.treeGrid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public void UpdateExactSearch(bool selected) {
        this.exactMatch = selected;
        this.treeGrid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesFlatDataItem
{
    public double Age { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public string Phone { get; set; }
    public bool OnPTO { get; set; }
    public double ParentID { get; set; }
    public string Title { get; set; }
}

public class EmployeesFlatData
    : List<EmployeesFlatDataItem>
{
    public EmployeesFlatData()
    {
        this.Add(new EmployeesFlatDataItem() { Age = 55, HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", Phone = @"0251-031259", OnPTO = false, ParentID = -1, Title = @"Development Manager" });
        this.Add(new EmployeesFlatDataItem() { Age = 42, HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", Phone = @"(21) 555-0091", OnPTO = true, ParentID = -1, Title = @"CEO" });
        this.Add(new EmployeesFlatDataItem() { Age = 49, HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", Phone = @"(071) 23 67 22 20", OnPTO = true, ParentID = -1, Title = @"Accounting Manager" });
        // ... 15 more items
    }
}
```


## Blazor Search Usage

### Tree Grid Setup

Let's start by creating our grid and binding it to our data. We will also add some custom styles for the components we will be using!

```razor
<IgbTreeGrid @ref=treeGrid AutoGenerate=false Data=EmployeesFlatData PrimaryKey="ID" ForeignKey="ParentID" AllowFiltering=true Height="100%" Width="100%">
    <IgbColumn Field="Name" DataType="GridColumnDataType.String" Sortable=true></IgbColumn>
    <IgbColumn Field="ID" DataType="GridColumnDataType.Number" Sortable=true></IgbColumn>
    <IgbColumn Field="Title" DataType="GridColumnDataType.String" Sortable=true></IgbColumn>
    <IgbColumn Field="Age" DataType="GridColumnDataType.Number" Sortable=true></IgbColumn>
    <IgbColumn Field="HireDate" DataType="GridColumnDataType.Date" Sortable=true></IgbColumn>
</IgbTreeGrid>
```

<!-- ComponentEnd: TreeGrid -->

Great, and now let's prepare for the search API of our [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)! We can create a few properties, which can be used for storing the currently searched text and whether the search is case sensitive and/or by an exact match.

<!-- ComponentStart: TreeGrid -->

```razor
private IgbTreeGrid treeGrid;

public string searchText = "";
public bool caseSensitive = false;
public bool exactMatch = false;
```

<!-- ComponentEnd: TreeGrid -->

### Blazor Search Box Input

Now let's create our search input! By binding our `SearchText` to the `Value` property to our newly created input and subscribe to the `ValueChanging` event, we can detect every single `SearchText` modification by the user. This will allow us to use the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)'s [`FindNext`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindNext) and [`FindPrev`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindPrev) methods to highlight all the occurrences of the `SearchText` and scroll to the next/previous one (depending on which method we have invoked).

Both the [`FindNext`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindNext) and the [`FindPrev`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindPrev) methods have three arguments:

- `Text`: **string** (the text we are searching for)
- (optional) `CaseSensitive`: **boolean** (should the search be case sensitive or not, default value is false)
- (optional) `ExactMatch`: **boolean** (should the search be by an exact match or not, default value is false)

When searching by an exact match, the search API will highlight as results only the cell values that match entirely the `SearchText` by taking the case sensitivity into account as well. For example the strings '_software_' and '_Software_' are an exact match with a disregard for the case sensitivity.

The methods from above return a **number** value (the number of times the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) contains the given string).

<!-- ComponentStart: TreeGrid -->

```razor
<IgbInput ValueChanging="OnValueChanging" Value="@searchText" />

public void NextSearch()
{
    this.treeGrid.FindNext(this.searchText, this.caseSensitive, this.exactMatch);
}
```

<!-- ComponentEnd: TreeGrid -->

### Add Search Buttons

In order to freely search and navigate among our search results, let's create a couple of buttons by invoking the [`FindNext`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindNext) and the [`FindPrev`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindPrev) methods inside the buttons' respective click event handlers.

<!-- ComponentStart: TreeGrid -->

```razor
<IgbIconButton Variant="IconButtonVariant.Flat" @onclick="PrevSearch">
    <IgbIcon IconName="prev" Collection="material"/>
</IgbIconButton>
<IgbIconButton Variant="IconButtonVariant.Flat" @onclick="NextSearch">
    <IgbIcon IconName="next" Collection="material" />
</IgbIconButton>

@code {
    private IgbTreeGrid treeGrid;

    public void PrevSearch()
    {
        this.treeGrid.FindPrevAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public void NextSearch()
    {
        this.treeGrid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```

### Add Keyboard Search

We can also allow the users to navigate the results by using the keyboard's arrow keys and the <kbd>ENTER</kbd> key. In order to achieve this, we can handle the **keydown** event of our search input by preventing the default caret movement of the input with the `PreventDefault` method and invoke the [`FindNext`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindNext)/[`FindPrev`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindPrev) methods depending on which key the user has pressed.

```razor
<IgbInput ValueChanging="OnValueChanging" Value="@searchText" @onkeydown="OnSearchKeyDown" />

@code {
    private void OnSearchKeyDown(KeyboardEventArgs evt)
    {
        if (evt.Key == "Enter" || evt.Key == "ArrowDown") {
            this.treeGrid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
        } else if (evt.Key == "ArrowUp") {
            this.treeGrid.FindPrevAsync(this.searchText, this.caseSensitive, this.exactMatch);
        }
    }

    public void OnValueChanging(string newValue)
    {
        this.searchText = newValue;
        this.treeGrid.FindNextAsync(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```

<!-- ComponentEnd: TreeGrid -->

### Case Sensitive and Exact Match

<!-- ComponentStart: TreeGrid -->

<!-- ComponentEnd: TreeGrid -->

Now let's allow the user to choose whether the search should be case sensitive and/or by an exact match. For this purpose we can use simple selectable `Chips` and bind to the `SelectedChanged` event to determine when the user interacts with them.

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

What if we would like to filter and sort our [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) or even to add and remove records? After such operations, the highlights of our current search automatically update and persist over any text that matches the `SearchText`! Furthermore, the search will work with paging and will persist the highlights through changes of the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html)'s `PerPage` property.

### Adding icons

By using some of our other components, we can create an enriched user interface and improve the overall design of our entire search bar! We can have a nice search or delete icon on the left of the search input, a couple of chips for our search options and some material design icons combined with nice ripple styled buttons for our navigation on the right.

To do this, let's go and grab the [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html), [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html), [`IgbIconButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIconButton.html) and the [`IgbChip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChip.html) modules.

<!-- ComponentStart: TreeGrid -->

```razor
// eg. Program.cs register the following:
builder.Services.AddIgniteUIBlazor(
    typeof(IgbTreeGridModule),
    typeof(IgbInputModule),
    typeof(IgbIconButtonModule),
    typeof(IgbIconModule)
);
```

<!-- ComponentEnd: TreeGrid -->

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

Finally, let's update our template with the new components!

<!-- ComponentEnd: TreeGrid -->

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

On the right in our input group, let's create three separate containers with the following purposes:

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

In this article we implemented our own search bar for the [`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) with some additional functionality when it comes to navigating between the search results. We also used some additional Ignite UI for Blazor components like icons, chips and inputs. The search API is listed below.

[`IgbTreeGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTreeGrid.html) methods:

- [`FindNext`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindNext)
- [`FindPrev`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_FindPrev)
- [`ClearSearch`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_ClearSearch)
- [`RefreshSearch`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGridBaseDirective.html#IgniteUI_Blazor_Controls_IgbGridBaseDirective_RefreshSearch)

[`IgbColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html) properties:

- [`Searchable`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbColumn.html#IgniteUI_Blazor_Controls_IgbColumn_Searchable)

Additional components with relative APIs that were used:

- [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html)
- [`IgbChip`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbChip.html)

<!---->

- [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html)
- [`IgbIconButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIconButton.html)

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

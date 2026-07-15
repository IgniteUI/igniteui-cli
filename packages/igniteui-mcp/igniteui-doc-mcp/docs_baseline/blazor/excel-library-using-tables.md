---
title: Blazor Excel Library| Using Tables | Infragistics
_description: Use Infragistics' Blazor excel library's table functionality to format your data in rows and columns. View Ignite UI for Blazor excel tutorials for more information!
_keywords: Excel library, tables, Ignite UI for Blazor, Infragistics
_license: commercial
mentionedTypes: ["Workbook", "WorksheetTable", "Worksheet", "SortSettings"]
_tocName: Using Tables
_premium: true
---

# Blazor Using Tables

The Infragistics Blazor Excel Engine's `WorksheetTable` functionality allows you to format your data in rows and columns The data in a worksheet table can be managed independently from the data in the other rows and columns in a `Worksheet`.

<!--## Blazor Using Tables Example


`sample="/excel/excel-library/working-with-tables", height="500", alt="Blazor Using Tables Example"`


-->

<div class="divider--half"></div>

## Adding a Table to a Worksheet

Worksheet tables in the Infragistics Blazor Excel Engine are represented by the `WorksheetTable` object and are added in the worksheet's `Tables` collection. In order to add a table, you need to invoke the `Add` method on this collection. In this method, you can specify the region in which you would like to add a table, whether or not the table should contain headers, and optionally, specify the table's style as a `WorksheetTableStyle` object.

The following code demonstrates how you can add a table with headers to a `Worksheet` spanning a region of A1 to G10, where A1 to G1 will be the column headers:

```razor
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.Worksheets.Add("Sheet1");

worksheet.Tables.Add("A1:G10", true);
```

Once you have added a table, you can modify it by adding or deleting rows and columns by calling the `InsertColumns`, `InsertDataRows`, `DeleteColumns`, or `DeleteDataRows` methods on the `WorksheetTable`. You can also set a new table range by using the `Resize` method of the table.

The following code snippet shows the usage of these methods:

```razor
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.Worksheets.Add("Sheet1");
var table = worksheet.Tables.Add("A1:G10", true);

//Will add 5 columns at index 1.
table.InsertColumns(1, 5);

//Will add 5 rows at index 0.
table.InsertDataRows(0, 5);

//Will delete 5 columns starting at index 1.
table.DeleteColumns(1, 5);

//Will delete 5 rows starting at index 0.
table.DeleteDataRows(0, 5);

//Will resize the table to be in the region of A1:G15.
table.Resize("A1:G15");
```

## Filtering Tables

Filtering is done by applying a filter on a column in the `WorksheetTable`. When the filter is applied on a column, all filters in the table will be reevaluated to determine which rows meet the criteria of all filters applied.

If the data in the table is subsequently changed or you change the `Hidden` property of the rows, the filter conditions will not automatically reevaluate. The filter conditions in a table are only reapplied when table column filters are added, removed, modified, or when the `ReapplyFilters` method is called on the table.

The following are the filter types available to the columns of your `WorksheetTable`:

- `AverageFilter` - Cells can be filtered based on whether they are above or below the average value of all cells in the column.
- `CustomFilter` - Cells can be filtered based on one or more custom conditions.
- `DatePeriodFilter` - Only cells with dates in a specific month or quarter of any year will be displayed.
- `FillFilter` - Only cells with a specific fill will be displayed.
- `FixedValuesFilter` - Cells which only match specific display values or which fall within a specific group of dates/times will be displayed.
- `FontColorFilter` - Only cells with a specific font color will be displayed.
- `RelativeDateRangeFilter` - Cells with date values can be filtered based on whether they occur within a relative time range of the date when the filter was applied, such as the next day or previous quarter.
- `TopOrBottomFilter` - This filter allows for filtering the top or bottom N values. It also allows filtering the top or bottom N% values.
- `YearToDateFilter` - Cells with date values can be filtered if they occur between the start of the year and the date on which the filter was applied.

The following code snippet demonstrates how to apply an "above average" filter to a `WorksheetTable`'s first column:

```razor
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.Worksheets.Add("Sheet1");
var table = worksheet.Tables.Add("A1:G10", true);

table.Columns[0].ApplyAverageFilter(Documents.Excel.Filtering.AverageFilterType.AboveAverage);
```

## Sorting Tables

Sorting is done by setting a sorting condition on a table column. When a sorting condition is set on a column, all sorting conditions in the table will be reevaluated to determine the order of the cells in the table. When cells need to be moved to meet their sort criteria, the entire row of cells in the table is moved as a unit.

If the data in the table is subsequently changed, the sort conditions do not automatically reevaluate. The sort conditions in a table are only reapplied when sort conditions are added, removed, modified, or when the `ReapplySortConditions` method is called on the table. When sorting conditions are reevaluated, only the visible cells are sorted. All cells in hidden rows are kept in place.

In addition to accessing sort conditions from the table columns, they are also exposed off the `WorksheetTable`'s `SortSettings` property's `SortConditions` collection. This is an ordered collection of columns/sort condition pairs. The order of this collection is the precedence of the sorting.

The following sort condition types are available to set on columns:

- `OrderedSortCondition` - Sort cells in an ascending or descending order based on their value.
- `CustomListSortCondition` - Sort cells in a defined order based on their text or display value. For example, this might be useful for sorting days as they appear on a calendar, rather than alphabetically.
- `FillSortCondition` - Sort cells based on whether their fill is a specific pattern or gradient.
- `FontColorSortCondition` - Sort cells based on whether their font is a specific color.

There is also a `CaseSensitive` property on the `SortSettings` of the `WorksheetTable` to determine whether strings should be sorted case sensitively or not.

The following code snippet demonstrates how to apply an `OrderedSortCondition` to a `WorksheetTable`:

```razor
var workbook = new Workbook(WorkbookFormat.Excel2007);
var worksheet = workbook.Worksheets.Add("Sheet1");
var table = worksheet.Tables.Add("A1:G10", true);

table.Columns[0].SortCondition = new Infragistics.Documents.Excel.Sorting.OrderedSortCondition(Documents.Excel.Sorting.SortDirection.Ascending);

//Alternative
table.SortSettings.SortConditions.Add(table.Columns[0], new Infragistics.Documents.Excel.Sorting.OrderedSortCondition(Documents.Excel.Sorting.SortDirection.Ascending));
```

## API References

- `DeleteColumns`
- `DeleteDataRows`
- `FillFilter`
- `InsertColumns`
- `InsertDataRows`
- `SortConditions`
- `SortSettings`
- `Tables`
- `WorksheetTableStyle`
- `WorksheetTable`

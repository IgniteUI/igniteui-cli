# Type Alias: GridKeydownTargetType

> **GridKeydownTargetType** = `"dataCell"` \| `"summaryCell"` \| `"groupRow"` \| `"hierarchicalRow"` \| `"headerCell"` \| `"masterDetailRow"`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/common/enums.ts:40](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/common/enums.ts#L40)

Type representing the type of the target object (elements of the grid) for keydown (fired when a key is pressed) events in the grid.
- 'dataCell': Represents a data cell within the grid. It contains and displays individual data values
- 'summaryCell': Summary cells display aggregated/summarized data at the bottom of the grid. They provide insights like total record count, min/max values, etc.
- 'groupRow': Group row within the grid. Group rows are used to group related data rows by columns. Contains the related group expression, level, sub-records and group value.
- 'hierarchicalRow': Hierarchical rows are similar to group rows, but represent a more complex hierarchical structure, allowing for nested grouping
- 'headerCell': Represents a header cell within the grid. Header cells are used to display column headers, providing context and labels for the columns.
- 'masterDetailRow': Represents a grid row that can be expanded in order to show additional information

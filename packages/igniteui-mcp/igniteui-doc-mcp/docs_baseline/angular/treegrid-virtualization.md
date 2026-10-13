---
title: Angular Grid Virtualization and Performance - Ignite UI for Angular
description: The Ignite UI for Angular Virtualization directive is the core mechanic behind the speed & performance of the grid when handling large data sets. Try for free!
keywords: angular data grid, grid performance, data table virtualization, ignite ui for angular
license: commercial
_canonicalLink: grid/virtualization
llms:
  description: "In Ignite UI for Angular, the TreeGrid control now utilizes the igxForOf directive and virtualizes its content both vertically and horizontally."
_tocName: Virtualization and performance
_premium: true
---
# Angular Tree Grid Virtualization and Performance

In Ignite UI for Angular, the [`IgxTreeGrid`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent) control now utilizes the [`igxForOf`](mcp:get_api_reference?platform=angular&component=IgxForOfDirective) directive and virtualizes its content both vertically and horizontally.

## Enabling Virtualization

By utilizing the [`igxForOf`](mcp:get_api_reference?platform=angular&component=IgxForOfDirective) directive the IgxTreeGrid now optimizes DOM rendering and memory consumption by rendering only what is currently visible in the view port and swapping the displayed data while the user scrolls the data horizontally/vertically. [`IgxTreeGrid`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent)'s [`width`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=width) and [`height`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=height) defaults to `100%` which will enable virtualization if the content displayed cannot fit inside the available space and scrollbars are required either vertically or horizontally. However, it is also possible to explicitly set the Tree Grid's [`width`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=width) and/or [`height`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=height) to `null` which means that the related dimension will be determined by the total size of the items inside. No scrollbar will then be shown and all items will be rendered along the respective dimension (columns if [`width`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=width) is `null` and rows if [`height`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=height) is `null`).

The size of the data chunks is determined by:

- The row height for the vertical (row) virtualization. This is determined by the [`rowHeight`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=rowheight) option and is 50(px) by default.
- The individual column widths in pixels for the horizontal (column) virtualization. They can be determined by either setting explicit width for each column component or setting the Tree Grid's [`columnWidth`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent&member=columnWidth) option, which will be applied to all columns that don't have explicit width set.

In most cases, letting the grid apply its default behavior by leaving dimensions unset will produce the desired layout. For column widths it is determined by the column count, the columns with set width, and the calculated width of the Tree Grid's container. The grid will try to fit all columns inside the available space as long as the width it attempts to assign is not under 136(px). In such cases, columns with unassigned width will receive the minimum width of 136(px) and a horizontal scrollbar will be shown. The grid will be horizontally virtualized.

Explicitly setting column widths in percentages (%) will, in most cases, create a grid that is not virtualized horizontally as it will not have a horizontal scrollbar.

## Virtualization Limitations

- On Mac OS horizontal scrollbar is not visible when "Show scrollbars only when scrolling" system option is set to true (which is the default value). This is because the Tree Grid’s row container has an overflow set to hidden. Change the option to "Always" and the scrollbar will appear.

## FAQ

### Why having dimensions in the Tree Grid is necessary for virtualization to work?

Without information about the sizes of the container and the items before rendering them setting the width or height of a scrollbar or determining which of the items should be in the view when you scroll to a random location in the Tree Grid is erroneous. Any assumptions on what the actual dimensions might be could lead to unnatural behavior of the scrollbar and ultimately suboptimal experience for the end-user. This is why setting the related dimensions is enforced in order for virtualization to take effect.

## API References
- [`IgxTreeGrid`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent)
- `IgxTreeGridComponent Styles`
- [`IgxColumn`](mcp:get_api_reference?platform=angular&component=IgxColumnComponent)
- [`IgxForOfDirective`](mcp:get_api_reference?platform=angular&component=IgxForOfDirective)
- [`IgxIForOfState`](mcp:get_api_reference?platform=angular&component=IForOfState)
## Additional Resources

- [Tree Grid overview](/treegrid/tree-grid)
- [Paging](/treegrid/paging)
- [Filtering](/treegrid/filtering)
- [Sorting](/treegrid/sorting)
- [Summaries](/treegrid/summaries)
- [Column Moving](/treegrid/column-moving)
- [Column Pinning](/treegrid/column-pinning)
- [Column Resizing](/treegrid/column-resizing)
- [Selection](/treegrid/selection)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

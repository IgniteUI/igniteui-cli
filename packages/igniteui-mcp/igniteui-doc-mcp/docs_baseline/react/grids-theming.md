---
title: React Grid theming | Real-Time React Tables | The Lightweight React Web Components table | Infragistics
_description: .
_keywords: React data grid, infragistics, data grids theming, theming, Ignite UI for React, table
_license: commercial
mentionedTypes: ["Infragistics.Controls.Grid.Implementation.Grid"]
namespace: Infragistics.Controls
_tocName: Theming
_premium: true
---

# Theme React Data Grid

With the React Theming engine, the Ignite UI for React Grid can be easily customized to match your brand identity.
In addition to predefined themes and palettes, you can further customize the look and feel of your data grid by using a set of CSS custom properties.

## Available Theming Properties

| Property name                            | Type                     | Description                                                                                  |
|------------------------------------------|--------------------------|----------------------------------------------------------------------------------------------|
| --grid-elevation                         | number between 0-24      | The elevation level, to be used for the grid                                                 |
| --drag-elevation                         | number between 0-24      | The elevation level, to be used for movable elements (ex. column header)                     |
| --grouparea-color                        | color                    | The grid group area text color                                                               |
| --grouparea-background                   | color                    | The grid group area text color                                                               |
| --drop-area-text-color                   | color                    | The drop area text color                                                                     |
| --drop-area-icon-color                   | color                    | The drop area icon color                                                                     |
| --drop-area-background                   | color                    | The drop area background color                                                               |
| --drop-area-on-drop-background           | color                    | The drop area background on drop color                                                       |
| --header-background                      | color                    | The grid header background color                                                             |
| --header-text-color                      | color                    | The grid header text color                                                                   |
| --header-selected-background             | color                    | The grid header background color when selected (ex. column selection).                      |
| --header-selected-text-color             | color                    | The grid header text color when selected (ex. column selection).                            |
| --sortable-header-icon-hover-color       | color                    | The icon color on hover in grid header when the column is sortable.                         |
| --sorted-header-icon-color               | color                    | The sorted table header icon color                                                           |
| --header-border-width                    | border-width             | The border width used for header borders.                                                   |
| --header-border-style                    | border-style             | The border style used for header borders. Can be 'dotted', 'dashed' or 'solid'               |
| --header-border-color                    | color                    | The color used for header borders.                                                          |
| --ghost-header-background                | color                    | The dragged header background color.                                                        |
| --ghost-header-text-color                | color                    | The dragged header text color.                                                              |
| --ghost-header-icon-color                | color                    | The dragged header icon color.                                                              |
| --filtering-background-and               | color                    | The background color of advanced filtering "AND" condition.                                 |
| --filtering-background-or                | color                    | The background color on focus/selected of advanced filtering "AND" condition.               |
| --filtering-background-and--focus        | color                    | The background color of advanced filtering "OR" condition.                                  |
| --filtering-background-or--focus         | color                    | The background color on focus/selected of advanced filtering "OR" condition.                |
| --grid-border-color                      | color                    | The border color surrounding the grid.                                                      |
| --content-background                     | color                    | The grid body background color.                                                             |
| --content-text-color                     | color                    | The grid body text color.                                                                   |
| --row-odd-background                     | color                    | The background color of odd rows.                                                           |
| --row-even-background                    | color                    | The background color of even rows.                                                          |
| --row-odd-text-color                     | color                    | The text color of odd rows.                                                                 |
| --row-even-text-color                    | color                    | The text color of even rows.                                                                |
| --row-selected-background                | color                    | The selected row background color.                                                          |
| --tree-selected-filtered-row-text-color  | color                    | The selected/filtered row text color                                                         |
| --row-selected-text-color                | color                    | The selected row text color.                                                                |
| --cell-selected-within-background        | color                    | The background of the selected cell inside a selected row/column.                           |
| --cell-selected-within-text-color        | color                    | The color of the selected cell inside a selected row/column.                                |
| --row-selected-hover-background          | color                    | The selected row hover background.                                                          |
| --row-selected-hover-text-color          | color                    | The selected row hover tex                                                                   |
| --row-hover-background                   | color                    | The hover row background color.                                                             |
| --row-hover-text-color                   | color                    | The hover row text color.                                                                   |
| --row-border-color                       | color                    | The border color between the grid body rows.                                                |
| --pinned-border-width                    | border-width             | The border width of the pinned rows/columns.                                                |
| --pinned-border-style                    | border-style             | The border style of the pinned rows/columns. Can be 'dotted', 'dashed' or 'solid'            |
| --pinned-border-color                    | color                    | The border color of the pinned rows/columns.                                                |
| --cell-active-border-color               | color                    | The active(focused) cell border color.                                                      |
| --cell-selected-background               | color                    | The selected cell background color.                                                         |
| --tree-selected-filtered-cell-text-color | color                    | The selected/filtered cell text color                                                        |
| --cell-selected-text-color               | color                    | The selected cell text color.                                                               |
| --cell-editing-background                | color                    | The background color of a cell in edit mode.                                                |
| --edit-mode-color                        | color                    | The text color in edit mode                                                                  |
| --edited-row-indicator                   | color                    | The indicator's color of edited row.                                                        |
| --cell-new-color                         | color                    | The text color of a new, unedited cell. Used when adding new row in a grid.                 |
| --cell-edited-value-color                | color                    | The color of cell edited value.                                                             |
| --cell-disabled-color                    | color                    | The text color of a disabled cell.                                                          |
| --resize-line-color                      | color                    | The grid header resize line color.                                                          |
| --drop-indicator-color                   | color                    | The color of the drop indicator.                                                            |
| --group-label-column-name-text           | color                    | The grid group row column name text color.                                                  |
| --group-label-icon                       | color                    | The grid group row icon color.                                                              |
| --group-label-text                       | color                    | The grid group row text color.                                                              |
| --expand-all-icon-color                  | color                    | The grid header expand all group rows icon color.                                           |
| --expand-all-icon-hover-color            | color                    | The grid header expand all group rows icon hover color.                                     |
| --expand-icon-color                      | color                    | The grid row expand icon color.                                                             |
| --expand-icon-hover-color                | color                    | The grid row expand icon hover color.                                                       |
| --active-expand-icon-color               | color                    | The drop area background on drop color.                                                     |
| --active-expand-icon-hover-color         | color                    | The drop area background on drop color.                                                     |
| --group-count-background                 | color                    | The grid group row cont badge background color.                                             |
| --group-count-text-color                 | color                    | The grid group row cont badge text color.                                                   |
| --group-row-background                   | color                    | The grid group row background color.                                                        |
| --group-row-selected-background          | color                    | The drop area background on drop color.                                                     |
| --filtering-header-background            | color                    | The background color of the filtered column header.                                         |
| --filtering-header-text-color            | color                    | The text color color of the filtered column header.                                         |
| --filtering-row-background               | color                    | The background color of the filtering row.                                                  |
| --filtering-row-text-color               | color                    | The text-color color of the filtering row.                                                  |
| --tree-filtered-text-color               | color                    | The grouping row background color on focus.                                                 |
| --body-summaries-background              | color                    | The background color of the summary groups located the body.                                |
| --body-summaries-text-color              | color                    | The text color of the summary groups located the body.                                      |
| --root-summaries-background              | color                    | The background color of the summary groups located the footer.                              |
| --root-summaries-text-color              | color                    | The text color of the summary groups located the footer.                                    |
| --row-highlight                          | color                    | The grid row highlight color.                                                               |
| --row-ghost-background                   | color                    | The background color of the dragged row.                                                    |
| --row-drag-color                         | color                    | The color of the drag handle.                                                               |
| --drop-area-border-radius                | number between 0 and 1   | The border radius used for drop-area. Can be a fraction between 0 and 1, pixels, or percent. |

## How to use

As mentioned above Using the CSS vars from the table allow us to style our grid. Let's say that we want to change the grid to use a Dark Theme, by changing the following header background and text colors etc., we can do that like so in a file optionally called dark-theme.css.

import "./dark-theme.css";

```css
.ig-data-grid {
  /* shared variables used in custom properties */
  --cell-text-color:#58258b;
  --cell-background:#191919;
  --cell-selected-background: #58258b;
  --cell-selected-within-text-color: #191919;
  --cell-selected-within-background: #58258b;

  --row-selected-background:var(--cell-selected-background);
  --row-hover-background:var(--cell-selected-background);
  --row-hover-text-color:var(--cell-background);

  --header-background: #58258b;
  --header-text-color: #191919;
  --header-separator-background: #58258b;
  --header-separator-width: 5px;

  --section-header-background: #191919;
  --section-header-text-color: #58258b;
  --section-header-selected-background: #58258b;
  --section-header-selected-text-color: #191919;

  --row-separator-background: #191919;
  --row-separator-last-sticky-row-background: #191919;
  --row-separator-pinned-row-background: #58258b;
  --row-separator-sticky-row-background: #58258b;

  --column-resizing-separator-background: #58258b;
  --column-moving-separator-background: #58258b;


  --filtering-header-background: #272727;
  --filtering-header-text-color: #ffffff;
  --filtering-row-background: #272727;
  --filtering-row-text-color: #ffffff;
  --tree-filtered-text-color: #ffffff;

  --summary-root-background: #7446b9;
  --summary-root-label-text-color: #191919;
  --summary-root-value-text-color: #191919;
}

.ig-grid-column-options {
  --background-color: black;
  --text-color: #7446b9;
  --summary-list-text-color: #7446b9;
  --summary-list-background: #191919;
}

.ig-data-grid-toolbar {
  --background-color: #191919;
  --text-color: #58258b;
  --dialog-background-color: #191919;
}

.ig-column-chooser {
  --background-color: #191919;
  --title-color: green;
  --select-all-caption-text-color: #58258b;
  --search-icon-color: #58258b;
  --search-text-color: #58258b;
  --search-background-color: #191919;
  --search-border-color: #58258b;
  --search-text-style: 12px 'Courier';
}

.ig-column-pinning {
  --background-color: white;
  --text-color: #7446b9;
  --select-all-caption-text-color: #58258b;
  --search-icon-color: #58258b;
  --search-text-color: #58258b;
  --search-background-color: #191919;
  --search-border-color: #58258b;
  --search-text-style: 12px 'Courier';
}
```

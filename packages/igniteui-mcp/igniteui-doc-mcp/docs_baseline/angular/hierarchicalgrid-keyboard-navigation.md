---
title: Angular Hierarchical Grid Keyboard Navigation - Ignite UI for Angular
description: Learn how to use Hierarchical Grid Keyboard Navigation with Ignite UI for Angular. With Keyboard interaction, users can quickly navigate between cells, rows, and columns.
keywords: keyboard navigation, ignite ui for angular, infragistics
license: commercial
_canonicalLink: grid/keyboard-navigation
llms:
  description: "Keyboard navigation in the IgxHierarchicalGrid provides a rich variety of keyboard interactions for the user."
_tocName: Keyboard navigation
_premium: true
---
# Angular Hierarchical Grid Keyboard Navigation

 Keyboard navigation in the **IgxHierarchicalGrid** provides a rich variety of keyboard interactions for the user. It enhances the accessibility of the **IgxHierarchicalGrid** and allows to navigate through any type of elements inside (cell, row, column header, toolbar, footer, etc.). This functionality is enabled by default, and the developer has the option to override any of the default behaviors in an easy way.

The tabulations of the IgxHierarchicalGrid has been reduced so that the navigation is compliant with W3C accessibility standards and convenient to use.

Currently, the IgxHierarchicalGrid introduces the following tab stops:

- **GroupBy or Toolbar area** (if enabled);
- **IgxHierarchicalGrid header**;
- **IgxHierarchicalGrid body**;
- **Column summaries** (if enabled);
- **IgxHierarchicalGrid paginator** (if enabled);

**Note:** 
Due to this change, navigating between the cells with <kbd>tab</kbd> and <kbd>Shift + Tab</kbd> is no longer supported in the IgxHierarchicalGrid.
Pressing the <kbd>Tab</kbd> key now goes through the tab stops in the following order: **GroupBy** / **Toolbar** -> **Headers** -> **Body** -> **Summaries** -> **Footer / Paginator**.

**Note:** 
Exposing any **focusable** element into the **IgxHierarchicalGrid** body via template may introduce **side effects** in the keyboard navigation, since the default
browser behavior is not prevented. It is the developer's responsibility to prevent or modify it appropriately.

## Header Navigation

A full _keyboard navigation_ support in the **IgxHierarchicalGrid** header is now introduced. Column headers can be easily traversed with the arrow keys. Additionally, there are a number of key combinations that trigger actions on the columns like **filtering**, **sorting**, **grouping** and etc.
When the **IgxHierarchicalGrid** header container is focused, the following key combinations are available:

### Key Combinations

- <kbd>Arrow Up</kbd> navigates one cell up in the headers (no looping). Available only when Multi-row Layout (MRL) or Multi-column Headers (MCH) are defined
- <kbd>Arrow Down</kbd> navigates one cell down in the headers (no wrapping). Available only when Multi-row Layout (MRL) or Multi-column Headers (MCH) are defined
- <kbd>Arrow Left</kbd> navigates one cell left (no looping)
- <kbd>Arrow Right</kbd> navigates one cell right (no wrapping between lines)
- <kbd>Ctrl + Arrow Left</kbd> navigates to the leftmost cell in the row; if MRL or MCH are enabled, navigates to the leftmost cell at the same level
- <kbd>Home</kbd> navigates to the leftmost cell in  the row; if MRL or MCH are enabled, navigates to the leftmost cell at the same level
- <kbd>Ctrl + Arrow Right</kbd> navigates to the rightmost cell in row; if MRL or MCH are enabled, navigates to the rightmost cell at the same level
- <kbd>End</kbd> navigates to the rightmost cell in row; if MRL or MCH are enabled, navigates to the rightmost cell at the same level
- <kbd>Alt + L</kbd> opens Advanced Filtering dialog if Advanced Filtering is enabled
- <kbd>Ctrl + Shift + L</kbd> opens the Excel Style Filter dialog or the default (row) filter if the column is filterable
- <kbd>Ctrl + Arrow Up</kbd> sorts the active column header in ASC order. If the column is already sorted in ASC, sorting state is cleared
- <kbd>Ctrl + Arrow Down</kbd> sorts the active column header in DSC order. If the column is already sorted in DSC, sorting state is cleared
- <kbd>Space</kbd> selects the column; If the column is already selected, selection is cleared


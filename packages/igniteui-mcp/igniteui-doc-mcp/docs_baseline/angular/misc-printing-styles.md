---
title: Print Layout
_description: 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, printing styles, @media print 
_tocName: Printing styles
---

# Printing styles

<p class="highlight">The Ignite UI for Angular theming engine provides some default printing styles, which make sure that our components have at least the bare minimum to look the same on paper as they appear on the web page.</p>
<div class="divider--half"></div>

## How to make use of the printing styles

In order to make sure that the components will be fully visible on the paper, you need to make sure that they are the same size or smaller than the document for print, otherwise, they will be cut off.

By `default` the `printing styles` are incorporated in the `compiled CSS`.
If you are not planning to print, we suggest you turn them off in order to reduce the size of the outputted CSS.

You can do that in your theme `SCSS` file:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';

// Turn the print styles off by setting the $print-layout param to false.
@include core($print-layout: false)

// Add the theme and the palette.
@include theme($default-palette);
```

Since **v13.2** we decided not to hide any component by default since we don't know what parts you want to be visible on paper, we leave that for you to decide.

In order to remove a piece or a whole component from the printed page, you can either add the class .igx-no-print to the element/component you don't want to print, or if you don't have access to the DOM you can directly target that element tag or class and set its display: none.

Let's say that you can't' accesses a button in the DOM to put `.igx-no-print` on it.
You can still hide that button from printing styles using SCSS.

```scss
@media print {
    [igxButton] {
        display: none;
    }
}
```

Here @media print is used in order to make sure that the styles you write inside will only take effect while printing.

If you want to print in black and white you can use `.igx-bw-print` class on any element and that element and everything inside it will turn black & white when printed.

To print the [`igx-grid`](../../grid/grid.md) we recommend using the [`export to excel`](../../grid/export-excel.md) feature or making a screenshot of the grid and printing it.

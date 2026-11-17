---
title: "React What's New | Ignite UI for React | Infragistics"
description: Learn about new features in the Ignite UI for React.
keywords: Changelog, What's New,  Ignite UI for React, Infragistics
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "DataChart", "Toolbar", "GeographicMap", "DatePicker", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend", "Grid", "GridSelectionMode", DataGridCellEventArgs, DataGridSelectionMode, DataSourceSummaryOperand, "RadialGauge", "RadialChart", "Toolbar"]
namespace: Infragistics.Controls.Charts
llms:
  description: "Release history for Ignite UI for React data visualization components, covering new features, fixes, and breaking changes."
_tocName: Changelog
---
# Ignite UI for React Changelog

All notable changes for each version of Ignite UI for React are documented on this page.

## **19.10.0 (September 2026)**

### igniteui-react-grids (Grids)

- [`IgrGrid`](mcp:get_api_reference?platform=react&component=IgrGrid), [`IgrTreeGrid`](mcp:get_api_reference?platform=react&component=IgrTreeGrid), [`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid), [`IgrPivotGrid`](mcp:get_api_reference?platform=react&component=IgrPivotGrid)
  - The Excel style filtering search list now uses the `IgrVirtualScroll` component. The list measures each row when the row renders. The measured size replaces the estimated size.
  - The markup of the Excel style filtering search list changed. The virtual scroll host and its item wrappers replace the internal display container and the vertical scrollbar helper. Update the applications and tests that access these elements directly.
  - The internal virtual scroll container of the Excel style filtering no longer has a nested list role. The listbox and its options do not change.
  - The `rowStyles`, `headerStyles` and `headerGroupStyles` properties now have the type `GridStyleCSSProperty | null`. Before, the type was `any`.
  - The scrollbars now use the standard `scrollbar-color` and `scrollbar-width` CSS properties. Before, they used the `::-webkit-scrollbar-*` pseudo-elements.
  - The scrollbars in the grids, the Column Actions and the Excel style filtering menus use the background and foreground colors of their host.

**Breaking Changes**

- **Theming**
  - Removed the `--ig-grid-summary-border-width` and `--ig-grid-summary-pinned-border-width` CSS variables. A summary cell now uses the border widths of the grid. The header border width sets the cell separator, and the pinned border width sets the pinned border.
  - You can still set the summary border styles and colors with `--ig-grid-summary-border-style`, `--ig-grid-summary-pinned-border-style`, `--ig-grid-summary-border-color` and `--ig-grid-summary-pinned-border-color`.
  - Most scrollbar theme variables now have no effect, because the standard scrollbar properties accept only two colors and three width keywords. `--sb-thumb-bg-color` and `--sb-track-bg-color` continue to work. The hover, border, corner and minimum height variables have no effect.
  - `--sb-size` no longer sets the scrollbar thickness, because `scrollbar-width` accepts only `auto`, `thin` or `none`. For a thinner scrollbar, set `--sb-width: thin` on the element that declares the scrollbar variables. You can also set `scrollbar-width: thin` directly on the scrolling element.

**Behavioral Changes**

- **Scrollbars**
  - The standard CSS properties cannot style or show the scrollbar arrow buttons. `scrollbar-width: thin` removes the arrow buttons on platforms that show them.
  - Firefox versions before 64 do not support `scrollbar-color` and `scrollbar-width`. These versions show the scrollbars with the default colors and size of the platform.
- **PDF export**
  - Summary rows now have the same background as the header row. As with the header background, the `showTableBorders` option controls this background.
  - The row dimension cells of a [`IgrPivotGrid`](mcp:get_api_reference?platform=react&component=IgrPivotGrid) export also have this background.
  - When a row dimension value repeats in consecutive records, the [`IgrPivotGrid`](mcp:get_api_reference?platform=react&component=IgrPivotGrid) export now shows the value one time, in one merged cell. The grid merges its row headers in the same way.
  - A value merges only under the same parent dimension. For example, the same date under two different cities gets two cells.
  - When a merged cell goes past the bottom of a page, the cell stops at the end of the page. The cell continues below the headers on the next page.

## **19.9.0 (September 2026)**

### igniteui-react

#### New Components

Ignite UI for React now includes these components from `igniteui-webcomponents` 7.3.0 and 7.4.0:

- [Breadcrumbs](./layouts/breadcrumbs.md) (`IgrBreadcrumbs` and `IgrBreadcrumb`) - Shows a navigation trail.
- [Color Picker](./inputs/color-picker.md) (`IgrColorPicker`) - Lets the user select a color. It supports different color formats and a custom palette.
- [QR Code](./inputs/qr-code.md) (`IgrQrCode`) - Renders a QR code as an SVG from the `value` property. It encodes the data in numeric, alphanumeric or byte mode.
- Virtual Scroll (`IgrVirtualScroll`) - Renders only the items in the viewport and the number of additional items that `overScan` sets. Use it for large or unbounded lists.
  - The component supports vertical and horizontal orientation, and right-to-left (RTL) layouts.
  - Item sizes can be fixed, estimated with `estimatedItemSize`, or variable. The component measures each rendered item and corrects the estimate.
  - Items that are not measured yet use the average measured size instead of `estimatedItemSize`. The scrollbar then agrees with the real content.
  - The component recycles item elements. An item that stays in the rendered window keeps its element. The elements of the items that leave the window show the items that enter it.
  - The `keyFunction` property returns the key of an item. With a key, an item keeps its element when it moves in `data`. Without `keyFunction`, the index is the key.
  - DOM state that the item template does not bind stays with the element. An example is the state of a checkbox without a `checked` binding. Bind this state in the item template.
  - The component operates correctly in lists that are larger than the maximum scroll size of the browser.

#### Changed

- Updated `igniteui-webcomponents` to 7.4.1. This update includes the [7.3.0](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#730---2026-08-26), [7.3.1](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#731---2026-09-01), [7.3.2](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#732---2026-09-09), [7.4.0](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#740---2026-09-23) and [7.4.1](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#741---2026-09-25) releases.
- Updated `igniteui-dockmanager` to 2.2.1 and `igniteui-grid-lite` to 0.11.0. Refer to the Dock Manager and Grid Lite sections.
- #### Library
  - Removed the `@lit-labs/virtualizer` dependency. The `IgrVirtualScroll` component now does the virtualization. The [`IgrCombo`](mcp:get_api_reference?platform=react&component=IgrCombo) list also uses it.
  - Updated the optional peer dependencies `dompurify`, `marked` and `shiki` to their current stable versions.
- #### Avatar
  - The component now has `role="img"`. Before, it had `image`, which is an ARIA 1.3 value that current tools do not support.
  - The accessible name comes from `alt`. If `alt` is not set, the name comes from `initials`. The role description is always `avatar`.
  - Before, the name was always "avatar", and `alt` or `initials` set the role description.
- #### Badge
  - The role description is always `badge`. Assistive technology no longer reads the `variant`.
  - The `icon` CSS part applies only when an [`IgrIcon`](mcp:get_api_reference?platform=react&component=IgrIcon) is the only content of the badge. This agrees with the documentation.
- #### Carousel
  - The component now delegates the focus in this order: the indicator container, the navigation buttons, then the first focusable element in the active slide.
- #### Chip
  - The type of the `onRemove` event no longer declares a boolean `detail`. The event never had this detail.
- #### Tile Manager
  - [`IgrTile`](mcp:get_api_reference?platform=react&component=IgrTile) now renders its resize handles directly. The `trigger-side`, `trigger` and `trigger-bottom` CSS parts keep their names.
  - The new `tile-container` CSS part contains the tile content and the resize handles.
- #### AI-Assisted Development - Skills
  - Reduced the React skills to the framework-specific facts that an agent cannot find by itself. The total size of the skills is approximately half of the previous size.
  - Merged the reference files into `COMPONENTS`, `USAGE`, `DATAVIZ`, `MCP` and `TROUBLESHOOTING`. Removed duplicate setup and theming guidance.
  - The skills now document the named-argument schemas of the MCP tools. The documentation tools take `framework`, and the API tools take `platform`.
  - Added `get_project_setup_guide`. Replaced `get_theming_guidance`, which does not exist, with `read_resource`.
  - The skills now document dark mode as a global switch that `--ig-theme-variant` and `configureTheme()` control. You cannot apply dark mode to only a part of the page with custom properties.
  - Corrected the palette override: all shades come from the `500` shade, for example `--ig-primary-500`. The `--ig-primary-h`, `-s` and `-l` tokens do not exist.
  - Corrected the Excel/CSV exporter import path to `igniteui-react-grids`. Corrected the form submit handler type to `React.FormEvent`, and the event handler types to the generated `Igr*EventArgs` aliases.
  - Removed the deprecated `IgrGridModule.register()` from the grid migration guidance. Replaced the `--ig-button-foreground` token example, because this token does not exist.
  - Added `license: MIT` to all skills. Each skill description now has `WHEN TO USE:` and `WHEN NOT TO USE:` sections, so that agents select the correct skill.
  - The skills README now lists the Grid Lite to premium grid migration skill.

#### New Features

- #### Button Group
  - The single selection modes (`single` and `single-required`) now use the radio group keyboard pattern:
    - The group is one tab stop.
    - The arrow keys move the focus and the selection together. They skip disabled buttons and wrap at the two ends.
    - With `alignment="horizontal"`, ArrowLeft and ArrowRight move the selection in the text direction. With `alignment="vertical"`, ArrowUp and ArrowDown move the selection.
    - The `multiple` mode does not change. Each button stays a tab stop.
  - The single selection modes now expose a `radiogroup` with `radio` buttons. Before, they exposed toggle buttons with `aria-pressed`.
  - The [`IgrButtonGroup`](mcp:get_api_reference?platform=react&component=IgrButtonGroup) host now has the `radiogroup` or `group` role and the disabled state. An `aria-label` or `aria-labelledby` on the host names the group.
  - In the single selection modes, `alignment` sets the `aria-orientation` of the radio group.
  - The `focused` CSS part of [`IgrToggleButton`](mcp:get_api_reference?platform=react&component=IgrToggleButton) is now documented.
- #### Calendar, Date Picker, Date Range Picker
  - [`IgrCalendar`](mcp:get_api_reference?platform=react&component=IgrCalendar) now exports the `label-inner`, `months-row` and `years-row` CSS parts. The pickers export them as `calendar-label-inner`, `months-row` and `years-row`.
- #### Chip
  - New `outlined` property. Set it to `true` to show an outlined chip.
  - The `start` and `end` slots, and the new `action` and `remove` CSS parts, are now documented.
- #### Combo, Color Picker, Date Picker, Date Range Picker, Dropdown, Select, Tooltip
  - New `scrollStrategy` property. It sets the popup behavior when a container scrolls:
    - `hide` (default) hides the popup while its anchor is fully out of view.
    - `scroll` keeps the popup visible and on its anchor.
    - `close` closes the component on each scroll. This also closes a `sticky` tooltip.
  - The date pickers ignore `scrollStrategy` in `dialog` mode.
- #### Dropdown
  - The target element now has `aria-haspopup="listbox"`. Before, it had `aria-haspopup="true"`.
  - While the list is open, `aria-activedescendant` on the target points to the active item. Screen readers announce this item.
- #### Icon
  - `registerIcon` and `registerIconFromText` now accept a `RegisterIconOptions` object as the third argument. The plain collection string continues to work.
  - `stripMeta: true` removes the `<title>` and `<desc>` elements from the stored SVG. This prevents the native browser tooltip on hover.
  - The title text stays available as the `aria-label` of the host [`IgrIcon`](mcp:get_api_reference?platform=react&component=IgrIcon) element.
- #### Mask Input, Date Time Input, Date Range Picker
  - The masked editors now support undo and redo:
    - Undo: `Ctrl + Z` or `Cmd + Z`.
    - Redo: `Ctrl + Y`, `Ctrl + Shift + Z` or `Cmd + Shift + Z`.
  - A sequence of typed characters is one undo step. A sequence of deletions is also one undo step.
  - A caret movement, a paste, a drop, a cut, a spin of a date part and an IME composition each start a new step.
  - A restored step emits `onInput`. Two-way bindings follow the undo.
  - The history stays when the focus changes. The component clears the history when you set the value programmatically, when the form resets the control, or when `mask`, `prompt` or `inputFormat` changes.
- #### Splitter
  - New `startCollapsed` and `endCollapsed` properties. They get and set the collapsed state of each pane.
  - New `onLayoutChanged` event. The component emits it after a user resize or a change of the expansion state.
  - The `onLayoutChanged` payload contains the current layout: `startSize`, `endSize`, `startCollapsed` and `endCollapsed`.
- #### Tabs
  - New `selectedTab` property. It returns the selected [`IgrTab`](mcp:get_api_reference?platform=react&component=IgrTab) element, or `null`.
  - `select()` now also accepts the `label` of a tab, in addition to its `id`. You can pass the value of `selected` back to `select()`.
  - The tab headers now have `aria-posinset` and `aria-setsize`. The strip has `aria-orientation`.
  - The selected panel is focusable. Keyboard users can reach panel content that has no focusable elements.
  - The strip keeps a tab stop when no tab is selected.
  - The component now finds [`IgrTab`](mcp:get_api_reference?platform=react&component=IgrTab) elements that come through an intermediate slot. Another component can wrap [`IgrTabs`](mcp:get_api_reference?platform=react&component=IgrTabs).
- #### Tooltip
  - The anchor now references the tooltip with `aria-describedby`. Screen readers announce the tooltip content as the description of the anchor.
  - In `sticky` mode, the default close action is a labeled `<button>`. You can reach and use it with the keyboard. The new `close-button` CSS part exposes it.
- #### Popover
  - Popover-based components now use native CSS anchor positioning in browsers that support it: Chrome and Edge 133+, Firefox 147+ and Safari 26+.
  - Other browsers continue to use `@floating-ui/dom`. They load it only when necessary.
- #### Themes
  - All components now have `forced-colors: active` styles in the Material, Bootstrap, Fluent and Indigo themes.
  - In Windows High Contrast mode, the components use the system colors (`CanvasText`, `Highlight`, `GrayText`, `LinkText`). The disabled, hover, focus and selected states stay different from each other.

#### Breaking Changes

- #### Chip
  - `part="base"` is now a plain wrapper. The selection control moved to the new `action` part. The remove control moved to the new `remove` part.
  - Move the `::part(base)` rules for the interactive surface to `::part(action)`.
  - `focus-shadow-color` and `focus-selected-shadow-color` replace the `focus-outline-color` and `focus-selected-outline-color` CSS variables.
- #### AI-Assisted Development - Skills
  - Renamed the `grid-lite-to-igr-grid-migration` skill to `igniteui-react-migrate-grid-lite-to-premium`. The new name uses the `igniteui-react-` prefix, as the other skills do.
  - Install the renamed skill again under the new folder name, and remove the old folder.
  - Renamed the `reference/` folder of each skill to `references/`. Install these skills again so that their links work: `igniteui-react-components`, `igniteui-react-customize-theme` and `igniteui-react-generate-from-image-design`.

#### Behavioral Changes

- #### Combo, Color Picker, Date Picker, Date Range Picker, Dropdown, Select, Tooltip
  - The popup now hides while its anchor is fully out of view. Before, the popup stayed visible. To keep the previous behavior, set `scrollStrategy="scroll"`.
- #### Dropdown, Select, Tooltip
  - The popup no longer moves along the viewport edge to stay in view. It only flips to the opposite side.
- #### Button Group
  - A disabled group no longer sets `disabled` on its buttons. The buttons inherit the disabled state.
  - A button that has its own `disabled` stays disabled when you enable the group again. A button that you add to a disabled group is also disabled.
  - In the single selection modes, the buttons are no longer separate tab stops. Refer to the keyboard pattern in New Features.
- #### Calendar, Date Picker, Date Range Picker
  - If `weekStart` is not set, the week starts on the first day of the week of the `locale`. The component gets this day from `Intl.Locale.prototype.getWeekInfo()`.
  - For example, the week starts on Monday for `bg` and on Sunday for `en`.
  - An explicit `weekStart` has priority. Set `weekStart` to `undefined` to use the locale value again. Browsers without `getWeekInfo()` use Sunday.
  - The header date and the month and year navigation use the field order of the `locale`. For example, for `ja` the year button comes before the month button. The years view continues to show plain numbers.
- #### Date Time Input, Date Picker, Date Range Picker
  - The components no longer change `value` while the user types. `value` changes only on commit, together with the `onChange` event. The components emit `onChange` on blur, as before.
  - Before, `value` changed on each keystroke, and no event announced the change.
  - You can now bind `value` externally, for example in an edit template of [`IgrGrid`](mcp:get_api_reference?platform=react&component=IgrGrid).
  - The `detail` of the `onInput` event contains the typed value. It also contains the result of a date part spin or of `Ctrl + ;`.
  - In a focused editor, a spin of a date part also waits for the commit on blur.
  - On an unfocused component, `stepUp()` and `stepDown()` change `value` immediately. `clear()`, `setRangeText()` and direct assignments also change `value` immediately.
  - In the pickers, the calendar continues to follow the typed date while the user types.
- #### Dropdown
  - The component no longer emits `onChange` when the user selects the item that is already selected. The list still closes.
- #### Tabs
  - The scroll buttons now scroll to the nearest tab that is not fully visible. Before, they scrolled a fixed step of 180px.
  - A tab below a scroll button counts as not visible. One click shows exactly one more tab.
- #### Tooltip
  - A tooltip that closes from a hide trigger now waits exactly `hideDelay`. Before, it waited an additional 180ms that was not documented.
  - In `sticky` mode, the default close button hides the tooltip immediately. It does not wait for `hideDelay`.
  - The default `showTriggers` and `hideTriggers` now include `focusin` and `focusout`. The tooltip opens when its anchor gets keyboard focus, and closes when the focus leaves the anchor.

#### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[2229](https://github.com/IgniteUI/igniteui-webcomponents/issues/2229), [7.3.0](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#730---2026-08-26)|Button Group|Single selection now tracks each element. Buttons without a `value`, or with the same `value`, can now take the selection. `selectedItems` now replaces the current selection. Before, it added to the selection. `selectedItems` no longer ignores buttons with an empty `value`. Buttons added to a disabled group no longer break the group state. The same applies to `focus()`, `blur()` and `click()` before the first render, and to toggle buttons that are not direct children.|
|[7.3.0](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#730---2026-08-26)|Calendar|A calendar with more than one visible month now has one live region and one tab stop. Time-only date strings resolve against the local date. `weekStart` is correct on the first render. Keyboard navigation over many disabled dates no longer freezes the browser.|
|[7.3.0](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#730---2026-08-26), [2378](https://github.com/IgniteUI/igniteui-webcomponents/pull/2378)|Carousel|A carousel that `pause()` stopped no longer starts again on pointer or focus. `isPlaying` and `isPaused` are correct after `interval` changes. The component clears unused timers. A carousel with fewer projected indicators than slides no longer causes an error. The carousel keeps an active slide when you remove the active slide, or when slides enter an empty carousel. Each indicator has `aria-controls`. The indicators set `aria-label` as a content attribute.|
|[2328](https://github.com/IgniteUI/igniteui-webcomponents/issues/2328)|Chat|With `adoptRootStyles` enabled, the component now tracks the stylesheets that the document gets after the initial adoption. The adoption keeps the theme styles of the message and input parts.|
|[2402](https://github.com/IgniteUI/igniteui-webcomponents/pull/2402)|Checkbox, Switch, Radio|An external `<label>` now names the control, through `for` or as a wrapper. A click on the label focuses and toggles the control. The host `aria-labelledby` now names the control.|
|[2357](https://github.com/IgniteUI/igniteui-webcomponents/pull/2357), [2402](https://github.com/IgniteUI/igniteui-webcomponents/pull/2402)|Color Picker|The picker canvas now responds to touch input. In `default` mode, an external `<label>`, the host `aria-labelledby` and the host `aria-label` name the trigger button. In `input` mode, the text input no longer has `aria-expanded`.|
|[2390](https://github.com/IgniteUI/igniteui-webcomponents/pull/2390), [2402](https://github.com/IgniteUI/igniteui-webcomponents/pull/2402)|Combo, Select|A click on the input label no longer opens and closes the list. The `label` property and an external `<label>` now name the input. Before, the selection status text named the input.|
|[7.3.0](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#730---2026-08-26), [2378](https://github.com/IgniteUI/igniteui-webcomponents/pull/2378)|Dropdown|`Enter` before an arrow key no longer causes an error. Keyboard navigation, `aria-haspopup` and `aria-expanded` are correct after the dropdown opens again, with or without an explicit target. `show()` with an unresolved target keeps the current target. Without an anchor, `show()` returns `false`. `clearSelection()` and the removal of the selected item reset the navigation. The accessibility tree shows the dropdown header and group labels correctly. The anchor names the list through `ariaLabelledByElements`.|
|[2378](https://github.com/IgniteUI/igniteui-webcomponents/pull/2378), [2398](https://github.com/IgniteUI/igniteui-webcomponents/pull/2398)|Date Picker|In dropdown mode, a `label` set after the first render now goes to the native input. The `container` CSS part is now exported.|
|[2398](https://github.com/IgniteUI/igniteui-webcomponents/pull/2398)|Date Range Picker|The `ranges` CSS part is now exported.|
|[7.3.0](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#730---2026-08-26), [2374](https://github.com/IgniteUI/igniteui-webcomponents/pull/2374)|Form associated components|Validation messages no longer disappear after the first failed form submission. The invalid styles follow the validity state. A host that starts invalid, for example a `required` input with `invalid`, now shows its validation messages.|
|[2390](https://github.com/IgniteUI/igniteui-webcomponents/pull/2390), [2402](https://github.com/IgniteUI/igniteui-webcomponents/pull/2402)|Input, Mask Input, Date Time Input, Date Picker, Date Range Picker, File Input, Textarea, Select, Combo, Color Picker|A click on the label now emits one `click` event from the component. A disabled component emits no `click` event. The host `aria-labelledby` and `aria-label` now name the native editor. All form associated components use this naming order: the host `aria-labelledby`, the external `<label>` elements, the own label, the host `aria-label`. A `<label>` added after the first render names the control. The helper text `aria-describedby` stays after a re-render.|
|[2402](https://github.com/IgniteUI/igniteui-webcomponents/pull/2402)|File Input|A click on an external `<label>` now focuses the native input and opens the file picker.|
|[7.3.0](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#730---2026-08-26)|Highlight|Recent Firefox versions show the matches again. The root node of the host now adopts the `::highlight()` rules. In Chromium, a component inside a different shadow root now resolves its `--background` and `--foreground` CSS variables correctly.|
|[7.3.0](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#730---2026-08-26)|Icon|An icon that renders through a reference now resolves when you register the target icon later. The icon has `role="img"` only when it has an accessible name.|
|[7.3.0](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#730---2026-08-26), [2402](https://github.com/IgniteUI/igniteui-webcomponents/pull/2402)|Rating|Values with a fractional `step` are now exact. `stepUp(n)` and `stepDown(n)` move by `n` steps. A non-numeric `max` or `step` falls back to a valid number. The accessible name, `aria-valuetext`, `aria-readonly` and `aria-disabled` are correct. An external `<label>` names the control. `onHover` now fires when the pointer leaves the component and enters again over the same symbol.|
|[7.3.0](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#730---2026-08-26)|Select|`ArrowUp` on a closed select with a selection now moves to the previous item. Type-ahead no longer causes an error on the first character. Type-ahead no longer blocks keyboard shortcuts. A selection of the selected item closes the list. The component keeps a `value` that you set before the matching item exists, and resolves it when you add the item. The input text comes only from the main content of the selected item.|
|[2402](https://github.com/IgniteUI/igniteui-webcomponents/pull/2402)|Slider|An external `<label>` and the host `aria-labelledby` now name the control. The slider follows changes of the host `aria-label` after the first render. Assistive technology no longer reads the value tooltip.|
|[1955](https://github.com/IgniteUI/igniteui-webcomponents/issues/1955), [7.3.0](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#730---2026-08-26)|Tabs|The scroll buttons in the Indigo theme are now opaque. With `activation="manual"`, `Enter` or `Space` on a tab now emits `onChange`. The selection stays correct when you set `selected` to `false` on the active tab, when you remove the last tab, and for disabled tabs. The start scroll button and click scrolling work correctly with browser zoom. A scroll of the strip now does less rendering work.|
|[2361](https://github.com/IgniteUI/igniteui-webcomponents/pull/2361)|Textarea|A change of `resize` from `auto` to a different value now releases the inline height. Projected text becomes the default value, as in a native `<textarea>`. The control stays pristine, and a form reset restores the text.|
|[2359](https://github.com/IgniteUI/igniteui-webcomponents/pull/2359)|Tile Manager|A swap of two positioned tiles no longer writes a column value into `rowStart`. A tile that you add next to a single positioned tile no longer overlaps it.|
|[7.3.0](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#730---2026-08-26)|Tooltip|`show()` and `hide()` cancel a queued transition in the opposite direction. The tooltip stays open when the pointer moves back over the anchor during the hide animation. `show(target)` no longer makes the `open` state incorrect. `withArrow` set at runtime now positions the arrow. The promises of delayed transitions now settle. `Escape` emits `onClosed` only when the tooltip is open.|
|[7.3.0](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#730---2026-08-26)|Tree|Operations on large or deeply nested trees are faster. A read of the `path` of an item now costs `depth`, not `2^depth`. Keyboard navigation is approximately 5 times faster. The removal of a subtree with selected items is approximately 2 times faster. `items`, `select()`, and the expansion or collapse of all items are 25-45% faster.|
|[2363](https://github.com/IgniteUI/igniteui-webcomponents/pull/2363)|Avatar, Badge|The avatar `<img>` now has `alt=""` when no alt text is set. The image is then decorative. A badge with an icon and text keeps its inline padding. The badge no longer clips the text.|
|[2362](https://github.com/IgniteUI/igniteui-webcomponents/pull/2362)|Chip|A removable chip now passes the `nested-interactive` accessibility audit, because the remove control is a sibling of the chip surface. The accessible name is the chip content. `Space` toggles the selection. `onRemove` fires only on removable chips. Focus on the remove control shows the focus state of the chip. The prefix and suffix wrappers hide correctly.|
|[2401](https://github.com/IgniteUI/igniteui-webcomponents/pull/2401)|Virtual Scroll|`scrollToIndex` with `block: 'nearest'` now aligns an item after the viewport to the end of the viewport, as native `scrollIntoView` does.|
|[180](https://github.com/IgniteUI/igniteui-react/pull/180)|igniteui-react-grids|The package now has an `exports` map. Bundlers and TypeScript resolve its entry points and type definitions.|

### igniteui-react-dockmanager (Dock Manager)

- [Dock Manager](./layouts/dock-manager.md) ([`IgrDockManager`](mcp:get_api_reference?platform=react&component=IgrDockManager)): Updated `igniteui-dockmanager` from 2.1.3 to 2.2.1. Refer to the [full changelog](https://github.com/IgniteUI/igniteui-dockmanager/blob/master/CHANGELOG.md).

#### New Features

- New CSS variables for the unpinned pane header: `--igc-unpinned-header-background` and `--igc-unpinned-header-text`.

#### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[128](https://github.com/IgniteUI/igniteui-dockmanager/issues/128)|IgrDockManager|The parent Dock Manager no longer handles the hidden tab selected event of a nested Dock Manager.|
|[130](https://github.com/IgniteUI/igniteui-dockmanager/issues/130)|IgrDockManager|A browser autofill suggestion in a content pane no longer causes an error when the user selects it.|
|[17574](https://github.com/IgniteUI/igniteui-angular/issues/17574)|IgrDockManager|A click on a slotted radio button no longer freezes the browser with Angular default change detection.|

### igniteui-grid-lite (Grid Lite)

- [Grid Lite](./grid-lite/overview.md) ([`IgrGridLite`](mcp:get_api_reference?platform=react&component=IgrGridLite)): Updated `igniteui-grid-lite` from 0.9.0 to 0.11.0. This update includes the [0.10.0](https://github.com/IgniteUI/igniteui-grid-lite/blob/master/CHANGELOG.md#0100---2026-08-26) and [0.11.0](https://github.com/IgniteUI/igniteui-grid-lite/blob/master/CHANGELOG.md#0110---2026-09-25) releases.

#### New Features

- The grid now implements the full ARIA grid pattern through `ElementInternals`: roles, row and column counts and indices, `aria-sort` and `aria-selected`. The filter row is a second header row.
- Keyboard navigation and a click now move the DOM focus to the active cell. Screen readers announce the cell.
- New public `columns` setter.

#### Changed

- Row virtualization now uses the `IgrVirtualScroll` component. Fewer rows outside the viewport render. Removed the `@lit-labs/virtualizer` dependency.
- Performance compared to 0.10.0, with 10,000 rows and 20 columns in an 800px-high grid:
  - Smooth scrolling runs at 60 fps. Before, it ran at 30 fps.
  - A jump to a distant scroll position is 8 times faster.
  - Sorting is 8 times faster.
  - With a cell template, the improvements are equal or larger.
- Navigation without a column keeps the current column.
- Cell activation now updates only the two affected rows. Before, it updated all visible rows.
- Rows reuse cells when the columns change. Sorting uses one shared collator. A `ResizeObserver` controls the scrollbar offset.
- The cancelable `onSorting` and `onFiltering` events fire before the state changes. Listeners can cancel or change the expression.
- The `onSorted` and `onFiltered` events fire after the data view updates.

#### Deprecated

- The positional arguments of `navigateTo(row, column?, activate?)`. Use `navigateTo(row, options)`.

#### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[78](https://github.com/IgniteUI/igniteui-grid-lite/pull/78)|IgrGridLite|Filters with only OR expressions no longer match all records.|
|[78](https://github.com/IgniteUI/igniteui-grid-lite/pull/78)|IgrGridLite|String filter conditions no longer cause an error on `null` or `undefined` cell values.|
|[78](https://github.com/IgniteUI/igniteui-grid-lite/pull/78)|IgrGridLite|Concurrent asynchronous data pipeline runs no longer apply their results in the wrong order.|
|[78](https://github.com/IgniteUI/igniteui-grid-lite/pull/78)|IgrGridLite|Declarative columns in a wrapper element no longer remove their sibling columns.|
|[78](https://github.com/IgniteUI/igniteui-grid-lite/pull/78)|IgrGridLite|Each grid instance now has its own navigation state. Navigation skips hidden columns and no longer produces invalid row indices.|
|[79](https://github.com/IgniteUI/igniteui-grid-lite/pull/79)|IgrGridLite|The grid now skips filter expressions with conditions that match no column.|

## **19.8.0 (July 2026)**

### igniteui-react

#### New Features

- #### AI-Assisted Development - Skills
  - New Grid Lite to Premium Data Grid migration skill. It maps imports, templates, sorting, filtering, server-side patterns, and toolbar and export flows ([#168](https://github.com/IgniteUI/igniteui-react/pull/168)).

#### Changed

- Updated `igniteui-webcomponents` to 7.2.4. This update includes the [7.2.2](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#722---2026-06-15), [7.2.3](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#723---2026-06-18) and [7.2.4](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#724---2026-06-29) patch releases.
- Updated `igniteui-dockmanager` to 2.1.3 and `igniteui-grid-lite` to 0.9.0. Refer to the Dock Manager and Grid Lite sections.
- #### Form associated components
  - An external `<label>` now links to the native input of [`IgrInput`](mcp:get_api_reference?platform=react&component=IgrInput), [`IgrMaskInput`](mcp:get_api_reference?platform=react&component=IgrMaskInput), [`IgrTextarea`](mcp:get_api_reference?platform=react&component=IgrTextarea), [`IgrDateTimeInput`](mcp:get_api_reference?platform=react&component=IgrDateTimeInput), [`IgrSelect`](mcp:get_api_reference?platform=react&component=IgrSelect), [`IgrCombo`](mcp:get_api_reference?platform=react&component=IgrCombo), [`IgrDatePicker`](mcp:get_api_reference?platform=react&component=IgrDatePicker) and [`IgrDateRangePicker`](mcp:get_api_reference?platform=react&component=IgrDateRangePicker).
  - Use the `for` and `id` attributes, or put the component inside the `<label>`. Assistive technology reads the label. A click on the label focuses the native input ([#2263](https://github.com/IgniteUI/igniteui-webcomponents/pull/2263)).
- #### Snackbar, Toast
  - The container positioning property now uses the new `NotificationPositioning` type ([#2251](https://github.com/IgniteUI/igniteui-webcomponents/pull/2251)).
- #### AI-Assisted Development - Skills
  - The React skills now use MCP documentation and API lookups for usage patterns ([#167](https://github.com/IgniteUI/igniteui-react/pull/167)).
  - The image-to-React generation guidance now uses the canonical MCP calls, for example `list_components('react')` and `get_doc('react', '<name>')` ([#167](https://github.com/IgniteUI/igniteui-react/pull/167), [#170](https://github.com/IgniteUI/igniteui-react/pull/170)).
  - The theme customization workflow now sets a safer order for palette, theme, typography and elevations. It finds the tokens before it overrides them ([#167](https://github.com/IgniteUI/igniteui-react/pull/167)).
  - Corrected the Nav Drawer CSS variable names in the guidance and gotchas references ([#169](https://github.com/IgniteUI/igniteui-react/pull/169)).
  - The grid guidance now tells agents not to use fixed column widths that leave empty space at the end. Agents use fixed widths only when the user requests them ([#170](https://github.com/IgniteUI/igniteui-react/pull/170)).
  - Removed unclear text and incorrect API usage patterns ([#170](https://github.com/IgniteUI/igniteui-react/pull/170)).

#### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[2237](https://github.com/IgniteUI/igniteui-webcomponents/pull/2237)|Expansion Panel|Fixed the line height of the title and subtitle slots.|
|[2256](https://github.com/IgniteUI/igniteui-webcomponents/pull/2256)|Popover based components|The popover position is now stable in ancestors with `position: sticky`.|
|[2257](https://github.com/IgniteUI/igniteui-webcomponents/pull/2257)|Tile Manager|Safari no longer selects text during a drag operation. The height no longer collapses when you maximize a spanning tile.|
|[2268](https://github.com/IgniteUI/igniteui-webcomponents/pull/2268)|Tabs|The selected tab header no longer scrolls into view on the first render.|

### igniteui-react-grids (Grids)

- Updated `igniteui-webcomponents-grids` to 7.2.0. This version uses `igniteui-angular` [22.0.0](https://github.com/IgniteUI/igniteui-angular/blob/master/CHANGELOG.md#2200).
- The derived Sass grid themes of `igniteui-angular` 22.0.0 apply only to the Angular theming API. They do not change the Ignite UI for React grids, which use CSS themes.

### igniteui-react-dockmanager (Dock Manager)

- [Dock Manager](./layouts/dock-manager.md) ([`IgrDockManager`](mcp:get_api_reference?platform=react&component=IgrDockManager)): Updated `igniteui-dockmanager` from 2.1.2 to 2.1.3. Refer to the [full changelog](https://github.com/IgniteUI/igniteui-dockmanager/blob/master/CHANGELOG.md).

#### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[125](https://github.com/IgniteUI/igniteui-dockmanager/issues/125)|IgrDockManager|The `tab-strip-area top` part now applies.|
|[126](https://github.com/IgniteUI/igniteui-dockmanager/issues/126)|IgrDockManager|The parent Dock Manager no longer handles the selected tab out of view event of a nested Dock Manager.|
|[127](https://github.com/IgniteUI/igniteui-dockmanager/issues/127)|IgrDockManager|The tab headers now have the correct `aria-label` values after you reorder the tabs.|

### igniteui-grid-lite (Grid Lite)

- [Grid Lite](./grid-lite/overview.md) ([`IgrGridLite`](mcp:get_api_reference?platform=react&component=IgrGridLite)): Updated `igniteui-grid-lite` from 0.8.0 to 0.9.0. Refer to the [full changelog](https://github.com/IgniteUI/igniteui-grid-lite/blob/master/CHANGELOG.md#090---2026-07-09).

#### Changed

- Sort and filter operations are faster on large data sets. The grid now calculates the sort keys and the filter expression trees in advance ([#63](https://github.com/IgniteUI/igniteui-grid-lite/pull/63)).
- The body cell and row themes now use the current `igniteui-theming` variables. Updated `igniteui-theming` to 27.3.0 ([#66](https://github.com/IgniteUI/igniteui-grid-lite/pull/66)).

#### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[66](https://github.com/IgniteUI/igniteui-grid-lite/pull/66)|IgrGridLite|The body cell and row border styles now use the correct theme variables in the default, odd, even, hover and active states.|

## **19.7.0 (May 2026)**

### igniteui-react

#### Changed

- Updated `igniteui-webcomponents` to 7.2.1. This update includes the [7.2.0](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#720---2026-05-27) release.
- Updated `igniteui-dockmanager` to 2.1.2 and `igniteui-grid-lite` to 0.8.0. Refer to the Dock Manager and Grid Lite sections.
- #### Form controls
  - [`IgrInput`](mcp:get_api_reference?platform=react&component=IgrInput), [`IgrMaskInput`](mcp:get_api_reference?platform=react&component=IgrMaskInput), [`IgrDateTimeInput`](mcp:get_api_reference?platform=react&component=IgrDateTimeInput), [`IgrCheckbox`](mcp:get_api_reference?platform=react&component=IgrCheckbox), [`IgrRadio`](mcp:get_api_reference?platform=react&component=IgrRadio), [`IgrSwitch`](mcp:get_api_reference?platform=react&component=IgrSwitch), [`IgrDatePicker`](mcp:get_api_reference?platform=react&component=IgrDatePicker) and [`IgrDateRangePicker`](mcp:get_api_reference?platform=react&component=IgrDateRangePicker) now submit their form when the user presses **Enter**, as native controls do ([#2213](https://github.com/IgniteUI/igniteui-webcomponents/pull/2213)).
- #### Input
  - Added theme support for the `date`, `time`, `datetime-local`, `week` and `month` input types. These types now have the same styles and floating label behavior in all themes ([#2223](https://github.com/IgniteUI/igniteui-webcomponents/pull/2223)).
- #### AI-Assisted Development - Skills
  - Updated the skills in the package.

#### New Features

- #### Date Range Picker
  - You can now edit the date range value in a single input field ([#1733](https://github.com/IgniteUI/igniteui-webcomponents/pull/1733)).
- #### Nav Drawer
  - For non-relative positions, [`IgrNavDrawer`](mcp:get_api_reference?platform=react&component=IgrNavDrawer) now uses the native Popover API. The API supplies modal semantics, a focus trap and accessibility support ([#2194](https://github.com/IgniteUI/igniteui-webcomponents/pull/2194)).
  - New `keepOpenOnEscape` property. It keeps the drawer open when the user presses **Escape**. It applies only to non-relative positions.
  - New `onClosing` event. The drawer emits it before a user interaction closes the drawer. You can cancel this event.
  - New `onClosed` event. The drawer emits it after a user interaction closes the drawer.
- #### Invoker Commands API
  - [`IgrButton`](mcp:get_api_reference?platform=react&component=IgrButton) and [`IgrIconButton`](mcp:get_api_reference?platform=react&component=IgrIconButton) now support the `command` and `commandFor` properties. With these properties, a button controls a target component without custom JavaScript ([#2225](https://github.com/IgniteUI/igniteui-webcomponents/pull/2225)).
  - [`IgrBanner`](mcp:get_api_reference?platform=react&component=IgrBanner), [`IgrDialog`](mcp:get_api_reference?platform=react&component=IgrDialog), [`IgrNavDrawer`](mcp:get_api_reference?platform=react&component=IgrNavDrawer), [`IgrSnackbar`](mcp:get_api_reference?platform=react&component=IgrSnackbar) and [`IgrToast`](mcp:get_api_reference?platform=react&component=IgrToast) now respond to the `--show`, `--hide` and `--toggle` commands from an invoker button.
- #### Snackbar, Toast
  - New `positioning` property (`viewport` or `container`). The components now render as a popover in the top layer of the browser.
  - With `positioning` set to `container`, the component anchors to its nearest visible ancestor instead of the viewport ([#2203](https://github.com/IgniteUI/igniteui-webcomponents/pull/2203)).

#### Breaking Changes

- #### Nav Drawer
  - Removed the `overlay` CSS part. Use the `::backdrop` pseudo-element of the `base` part, the `--ig-overlay-background-color` variable, or the theming package ([#2194](https://github.com/IgniteUI/igniteui-webcomponents/pull/2194)).

#### Deprecated

- #### Localization
  - The old resource string interfaces for [`IgrCalendar`](mcp:get_api_reference?platform=react&component=IgrCalendar), [`IgrChat`](mcp:get_api_reference?platform=react&component=IgrChat), [`IgrDatePicker`](mcp:get_api_reference?platform=react&component=IgrDatePicker) and [`IgrDateRangePicker`](mcp:get_api_reference?platform=react&component=IgrDateRangePicker) are deprecated. The components now use the `igniteui-i18n` resource keys.
  - You can no longer set individual `resourceStrings` properties. Set a complete resource strings object ([#2169](https://github.com/IgniteUI/igniteui-webcomponents/pull/2169)).

#### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[2219](https://github.com/IgniteUI/igniteui-webcomponents/pull/2219)|Button Group|The border color of the selected state is now correct in the focused and hover states.|
|[2224](https://github.com/IgniteUI/igniteui-webcomponents/pull/2224)|Combo|In single selection mode, the display value is now correct when the user moves the focus out with Tab after a partial search text.|
|[2228](https://github.com/IgniteUI/igniteui-webcomponents/pull/2228)|Stepper|A step that connects to the DOM before its parent stepper now gets the context when a stepper adopts it.|

### igniteui-react-dockmanager (Dock Manager)

- [Dock Manager](./layouts/dock-manager.md) ([`IgrDockManager`](mcp:get_api_reference?platform=react&component=IgrDockManager)): Updated `igniteui-dockmanager` from 2.1.1 to 2.1.2. Refer to the [full changelog](https://github.com/IgniteUI/igniteui-dockmanager/blob/master/CHANGELOG.md).

#### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[123](https://github.com/IgniteUI/igniteui-dockmanager/issues/123)|IgrDockManager|A press inside the pane content no longer takes the focus from slotted `<input>`, `<textarea>` and `<select>` elements.|
|[124](https://github.com/IgniteUI/igniteui-dockmanager/issues/124)|IgrDockManager|The unpinned tab area location no longer resets to `left` when a pane floats. The pane no longer disappears when you dock it again.|

### igniteui-grid-lite (Grid Lite)

- [Grid Lite](./grid-lite/overview.md) ([`IgrGridLite`](mcp:get_api_reference?platform=react&component=IgrGridLite)): Updated `igniteui-grid-lite` from 0.7.1 to 0.8.0. Refer to the [full changelog](https://github.com/IgniteUI/igniteui-grid-lite/blob/master/CHANGELOG.md#080---2026-05-27).

#### Changed

- Updated the styles of the filter row input. Refactored the common filter logic ([#54](https://github.com/IgniteUI/igniteui-grid-lite/pull/54)).
- Updated `igniteui-webcomponents` to 7.2.0. The grid now requires Node.js 22 or later ([#65](https://github.com/IgniteUI/igniteui-grid-lite/pull/65), [#64](https://github.com/IgniteUI/igniteui-grid-lite/pull/64)).

## **19.6.2 (April 2026)**

This entry also includes the 19.6.1 (April 2026) patch release.

### igniteui-react

#### Changed

- Updated `igniteui-webcomponents` to 7.1.3. This update includes the [7.1.1](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#711---2026-03-25), [7.1.2](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#712---2026-04-22) and [7.1.3](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#713---2026-04-28) patch releases.
- [Dock Manager](./layouts/dock-manager.md) ([`IgrDockManager`](mcp:get_api_reference?platform=react&component=IgrDockManager)): Updated `igniteui-dockmanager` to 2.1.1. This release changes only the build, CI/CD and development workflow ([#152](https://github.com/IgniteUI/igniteui-react/pull/152)).
- Updated `igniteui-grid-lite` to 0.7.1. Refer to the Grid Lite section.
- #### Button Group
  - Aligned the theme colors ([#2182](https://github.com/IgniteUI/igniteui-webcomponents/pull/2182)).
- #### Checkbox
  - Updated the disabled and indeterminate styles ([#2158](https://github.com/IgniteUI/igniteui-webcomponents/pull/2158)).
- #### Chip
  - The chip content is now inside a new part container. Updated the chip styles ([#2190](https://github.com/IgniteUI/igniteui-webcomponents/pull/2190)).
- #### Circular Progress
  - The circular and linear progress bars now use the same track color CSS variable ([#2185](https://github.com/IgniteUI/igniteui-webcomponents/pull/2185)).
- #### AI-Assisted Development - Skills
  - New `igniteui-react-generate-from-image-design` skill. It shows AI coding assistants how to build React views from design images, for example screenshots, mockups and wireframes ([#146](https://github.com/IgniteUI/igniteui-react/pull/146)).
  - The skills now use the Ignite UI CLI MCP server ([#151](https://github.com/IgniteUI/igniteui-react/pull/151), [#154](https://github.com/IgniteUI/igniteui-react/pull/154)).
  - 19.6.1: Clarified and expanded the guidance for grids, Grid Lite and forms ([#141](https://github.com/IgniteUI/igniteui-react/pull/141)). Added a complete data chart example ([#143](https://github.com/IgniteUI/igniteui-react/pull/143)) and package routing guidance ([#145](https://github.com/IgniteUI/igniteui-react/pull/145)).

#### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[2168](https://github.com/IgniteUI/igniteui-webcomponents/pull/2168)|Dropdown|Fixed the selected item styles.|
|[2184](https://github.com/IgniteUI/igniteui-webcomponents/pull/2184)|Linear Progress|The display size is now the same on all platforms.|
|[2173](https://github.com/IgniteUI/igniteui-webcomponents/pull/2173)|Tree|Fixed differences in the background styles.|
|[2209](https://github.com/IgniteUI/igniteui-webcomponents/issues/2209)|Stepper|In horizontal orientation, the height of the content area can now follow the content of the active step. Before, the height was always the height of the tallest step. The new `--body-grid-rows` CSS variable sets the row size of each step body. The default `1fr` expands the body to fit its content. `0fr` collapses the body to zero height.|

### igniteui-react-grids (Grids)

- Updated `igniteui-webcomponents-grids` to 7.1.0. This version uses `igniteui-angular` [21.2.0](https://github.com/IgniteUI/igniteui-angular/blob/master/CHANGELOG.md#2120).
- **Security** - Updated the `jspdf` dependency of the PDF export to 4.2.1. This version fixes a security vulnerability of earlier versions ([21.1.3](https://github.com/IgniteUI/igniteui-angular/blob/master/CHANGELOG.md#2113)).

### igniteui-grid-lite (Grid Lite)

- [Grid Lite](./grid-lite/overview.md) ([`IgrGridLite`](mcp:get_api_reference?platform=react&component=IgrGridLite)): Updated `igniteui-grid-lite` from 0.7.0 to 0.7.1. Refer to the [full changelog](https://github.com/IgniteUI/igniteui-grid-lite/blob/master/CHANGELOG.md#071---2026-04-01).

#### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[60](https://github.com/IgniteUI/igniteui-grid-lite/pull/60)|IgrGridLite|The `filterExpressions` and `sortExpressions` setters now replace the current state. Before, they added to it.|
|[55](https://github.com/IgniteUI/igniteui-grid-lite/pull/55)|IgrGridLite|An initial filter or sort state without a column configuration no longer causes an error.|
|[58](https://github.com/IgniteUI/igniteui-grid-lite/pull/58)|IgrGridLite|The grid now applies the adopted styles correctly in the connected callback.|

## **19.6.0 (June 2026)**

### igniteui-react-charts

#### New Features

- Added `Checkmark` option to the `MarkerType` enum. Use `MarkerType.Checkmark` on a series to display a V-shaped checkmark icon inside a circle. The new `MarkerAutomaticBehavior.Checkmark` enum value allows applying the checkmark shape to all series in the chart, and the `SeriesViewer.CheckmarkMarkerTemplate` property can be used to customize its template.
- Added `MarkerSize` support on marker-enabled chart series to control marker dimensions in device-independent pixels and reset to template-based sizing with `NaN`.

### igniteui-react

#### Changed

- [`IgrDockManager`](mcp:get_api_reference?platform=react&component=IgrDockManager): Updated to use the latest `igniteui-dockmanager@2.1.0` with new `minResizeWidth` and `minResizeHeight` properties, `paneFlyoutToggle` event; additional `layoutChange` event detail and fixes. See the [full changelog](https://github.com/IgniteUI/igniteui-dockmanager/blob/master/CHANGELOG.md#210).
- Updated to use the latest `igniteui-webcomponents@7.1.0` including new `IgrSplitter` and `IgrHighlight` container components and fixes. See the [full changelog](https://github.com/IgniteUI/igniteui-webcomponents/blob/master/CHANGELOG.md#710---2026-03-19).

#### New Features

- #### AI-Assisted Development - Agent Skills
  - Structured knowledge files that teach AI coding assistants (GitHub Copilot, Cursor, Windsurf, Claude, JetBrains AI, etc.) how to work with Ignite UI for React.
  - The skill files are included in the `igniteui-react` package and also live in the [skills/](https://github.com/IgniteUI/igniteui-react/tree/master/skills) directory:
    - **components** - Identify the right React components (`Igr*`) for a UI pattern, then install, import, and use them — JSX patterns, events, refs, forms, etc.
    - **customize-theme** - Customize styling using CSS custom properties, Sass, and the theming system in React, including using Ignite UI Theming MCP server.
    - **optimize-bundle-size** - Reduce bundle size with granular imports, tree-shaking, and lazy loading.
  - These skills are automatically discovered when placed in the agent's skills path (e.g. `.agents/skills` or `.claude/skills`).

## **19.5.2 (March 2026)**

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
| 3055 | IgrDataPieChart | missing styling properties for the Others Slice |
| 38668 | IgrDataTooltipLayer | TitleTextColor is overridden when chart's TitleTextColor is used |
| 41167 | Excel | Object's Formulas are not round-tripped - Added Excel support for round tripping the camera tool |
| 41419 | Excel | Saving a VBA Signed Excel file does not keep a signature/certificate. |
| 41594 | IgrDataChart | AssigningCategoryStyle args.GetItems is null or not working to update items in the fragment series. |

### Enhancements

### igniteui-react-charts

- Added `RangeBarSeries` support for horizontal range rendering in `IgrDataChart`.

## **19.5.1 (February 2026)**
### igniteui-react

#### New Features

- #### AI-Assisted Development - Copilot Skills
  - Four end-user skills are now shipped with the `igniteui-react` package under the `skills/` directory providing step-by-step guidance to GitHub Copilot and other LLM agents for common tasks:
    - **igniteui-wc-choose-components** - Identify the right component for a given UI pattern.
    - **igniteui-wc-integrate-with-framework** - Set up and use components in React, Angular, Vue, or vanilla JS.
    - **igniteui-wc-customize-component-theme** - Apply custom styles via CSS custom properties, parts, and the theming system.
    - **igniteui-wc-optimize-bundle-size** - Reduce production bundle size through selective imports and lazy loading.
- #### Chat
  - `adoptRootStyles` can now be toggled on/off at runtime.

#### Breaking Changes

- #### Themes
  - Changed global prefixes for CSS custom properties for component themes to align with other Ignite UI component libraries.

- #### Chat
  - Removed the `typingIndicator` template renderer. Use the `typing-indicator` slot instead.

- #### Tooltip
  - Removed the `disableArrow` deprecated property.

- #### Library
  - Minimum Node version required is now >= 22.

  #### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[2033](https://github.com/IgniteUI/igniteui-webcomponents/pull/2033)|Carousel|Context instantiation in Blazor|
|[2085](https://github.com/IgniteUI/igniteui-webcomponents/pull/2085)|Combo|Correct cursor style over non input parts|
|[2085](https://github.com/IgniteUI/igniteui-webcomponents/pull/2085)|Textarea|Correct cursor style over non input parts|

### igniteui-react-grids (Grids)

- [`IgrGrid`](mcp:get_api_reference?platform=react&component=IgrGrid), [`IgrTreeGrid`](mcp:get_api_reference?platform=react&component=IgrTreeGrid), [`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid), [`IgrPivotGrid`](mcp:get_api_reference?platform=react&component=IgrPivotGrid)
  - Improved performance by dynamically adjusting the scroll throttle based on the data displayed in grid.

**Breaking Changes**

- [`IgrGrid`](mcp:get_api_reference?platform=react&component=IgrGrid), [`IgrTreeGrid`](mcp:get_api_reference?platform=react&component=IgrTreeGrid), [`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid), [`IgrPivotGrid`](mcp:get_api_reference?platform=react&component=IgrPivotGrid)
  - Original `data` array mutations (like adding/removing/moving records in the original array) are no longer detected automatically. Components need an array reference change for the change to be detected.

**Localization(i18n)**

- [`IgrGrid`](mcp:get_api_reference?platform=react&component=IgrGrid), [`IgrTreeGrid`](mcp:get_api_reference?platform=react&component=IgrTreeGrid), [`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid), [`IgrPivotGrid`](mcp:get_api_reference?platform=react&component=IgrPivotGrid), [`IgrCombo`](mcp:get_api_reference?platform=react&component=IgrCombo), [`IgrDatePicker`](mcp:get_api_reference?platform=react&component=IgrDatePicker), [`IgrDateRangePicker`](mcp:get_api_reference?platform=react&component=IgrDateRangePicker), [`IgrCalendar`](mcp:get_api_reference?platform=react&component=IgrCalendar), [`IgrCarousel`](mcp:get_api_reference?platform=react&component=IgrCarousel), [`IgrChip`](mcp:get_api_reference?platform=react&component=IgrChip), [`IgrInput`](mcp:get_api_reference?platform=react&component=IgrInput), [`IgrTree`](mcp:get_api_reference?platform=react&component=IgrTree)
  - New `Intl` implementation for the grid components that format and render data like dates and numbers. Updated `Intl` implementation for [`IgrCalendar`](mcp:get_api_reference?platform=react&component=IgrCalendar), [`IgrDatePicker`](mcp:get_api_reference?platform=react&component=IgrDatePicker), and [`IgrDateRangePicker`](mcp:get_api_reference?platform=react&component=IgrDateRangePicker).
  - New localization implementation for the currently supported languages for all components that have resource strings in the currently supported languages.
  - New public localization API and package named `igniteui-i18n-resources` containing the new resources that are used in conjunction.

**PDF export**
- Added PDF export functionality allowing users to export grid data to PDF format.

**Popover API**

- Dropdown menus and dialogs are now using HTML Popover API to provide better positioning and accessibility.

## **19.3.2 (February 2026)**

### Enhancements

### igniteui-react-charts

Added OthersCategoryBrush and OthersCategoryOutline to DataPieChart and ProportionalCategoryAngleAxis

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|2270|IgrDataChart|Added OthersCategoryBrush and OthersCategoryOutline to DataPieChart and ProportionalCategoryAngleAxis |
|2251|igniteui-react-layouts|Skip resolving property editor props containing @constantValues |
|2353|IgrDataChart|syntax error while building infragistics.dvcommonwidget.js |
|2354|IgrDataChart|infragistics.dvcommonwidget.js has "unser" typo instead of "unset" in case names |
|2338|IgrDataPieChart|SeriesPointerMove event doesn't fire correctly when StartAngle is set |
|2235|Excel|Workbook.Load() throwing a Excel.FormulaParseException. |
|2234|IgrRadialChart|Added a check for bucket size equals to 0 |
|2234|IgrDataChart|fix GetCategoryIndexAxis() for annotation layers |

## **19.3.1 (December 2025)**

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|33808|IgrDataChart|The scale set for IntervalType Ticks in TimeAxisInterval is not displayed|
|34255|IgrDataChart|0.00001 scale tick marks are displayed overlapping each other|
|38510|IgrDataChart|AssigningCategoryStyle event support for Stacked Series|

### Enhancements

#### Charts

- Added LabelFormatOverride event to TimeXAxisLabelFormat so you can now override the formatting with an event at all time-formatting levels on the TimeXAxis.

- Adjusted the schema generation to account for more items to make it more likely to find valid values for properties.

## **19.3.0 (November 2025)**

### igniteui-react-charts (Charts)

####  User Annotations

In Ignite UI for React, you can now annotate the `IgrDataChart` with slice, strip, and point annotations at runtime using the new user annotations feature. This allows the end user to add more details to the plot such as calling out single important events such as company quarter reports by using the slice annotation or events that have a duration by using the strip annotation. You can also call out individual points on the plotted series by using the point annotation or any combination of these three.

This is directly integrated with the available tools of the [`Toolbar`](mcp:get_api_reference?platform=react&component=IgrGrid&member=toolbar).

####  Collision Detection for Axis Annotations

Ability for axis annotations to automatically detect collisions and truncate to fit better. To enable this feature you must set the following properties:

- `ShouldAvoidAnnotationCollisions`
- `ShouldAutoTruncateAnnotations`

### igniteui-react-maps (Geographic Map)

- Azure Map Imagery is now RTM.

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|40136|Excel Library|FormulaParseException exception when loading an Excel workbook|
|40262|IgrSpreadsheet|#Circularity! is displayed when there are warnings. Request to match Excel - display a value eg. 0 instead|
|40458|IgrSpreadsheet|When using Arial font, the igx-spreadsheet cuts off text in the cells|
|40490|IgrDatePicker|Inputs by Autofill won't give any effects for a date picker|

## **19.3.0 (October 2025)**

### New Components

- Added [`IgrChat`](mcp:get_api_reference?platform=react&component=IgrChat) component

### igniteui-react-grids (Grids)
- [`IgrGrid`](mcp:get_api_reference?platform=react&component=IgrGrid), [`IgrTreeGrid`](mcp:get_api_reference?platform=react&component=IgrTreeGrid), [`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid)
- Introduced a new cell merging feature that allows you to configure and merge cells in a column based on same data or other custom condition, into a single cell.

        It can be enabled on the individual columns:

```tsx
        <IgrColumn field="field" merge={true}></IgrColumn>
```

        The merging can be configured on the grid level to apply either:
  - `onSort` - only when the column is sorted.
  - `always` - always, regardless of data operations.

```tsx
        <IgrGrid cellMergeMode="always">
        </IgrGrid>
```

        The default `cellMergeMode` is `onSort`.

        The functionality can be modified by setting a custom `mergeStrategy` on the grid, in case some other merge conditions or logic is needed for a custom scenario.

        It's possible also to set a `mergeComparer` on the individual columns, in case some custom handling is needed for a particular data field.

- Added ability to pin individual columns to a specific side (start or end of the grid), so that you can now have pinning from both sides. This can be done either declaratively by setting the `pinningPosition` property on the column:

```tsx
        <IgrColumn field="Col1" pinned={true} pinningPosition="pinningPosition">
        </IgrColumn>
```

        ```ts
        pinningPosition = ColumnPinningPosition.End;
        ```

        Or with the API, via optional parameter:

        ```ts
        grid.pinColumn('Col1', 0, ColumnPinningPosition.End);
        grid.pinColumn('Col2', 0, ColumnPinningPosition.Start);
        ```

        If property `pinningPosition` is not set on a column, the column will default to the position specified on the grid's `pinning` options for `columns`.

- **Sorting improvements**
  - Improved sorting algorithm efficiency using Schwartzian transformation. This is a technique, also known as decorate-sort-undecorate, which avoids recomputing the sort keys by temporarily associating them with the original data records.
  - Refactored sorting algorithms from recursive to iterative.
- **Groupby improvements**
  - Refactored grouping algorithm from recursive to iterative.
  - Optimized grouping operations.

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[1853](https://github.com/IgniteUI/igniteui-webcomponents/pull/1853)| List |removed duplicated CSS variables across list components and themes|
|[1871](https://github.com/IgniteUI/igniteui-webcomponents/pull/1871)| Card |Consume colors from themes|
|[1873](https://github.com/IgniteUI/igniteui-webcomponents/pull/1873)| Card |Avatar size in card header|
|[1882](https://github.com/IgniteUI/igniteui-webcomponents/pull/1882)| Chat |Message actions not rendered after last message|
|[1885](https://github.com/IgniteUI/igniteui-webcomponents/pull/1885)| Date Picker |Change event not emitted for non-editable input configuration|
|[1894](https://github.com/IgniteUI/igniteui-webcomponents/pull/1894)| Date Picker | Issues when clearing the value and notch border in Material theme|

## **19.2.2 (October 2025)**

### igniteui-react-maps (Geographic Map)

####  Azure Map Imagery Support

The `IgrIgbGeographicMap` now supports Azure-based map imagery, allowing developers to display detailed, dynamic maps across multiple application types. You can combine multiple map layers, visualize geographic data, and create interactive mapping experiences with ease.

Note: Support for Bing Maps imagery is being phased out. Existing enterprise keys can still be used to access Bing Maps, ensuring your current applications continue to function while you transition to Azure maps.

Explore some of the publicly available [Azure maps here](https://azure.microsoft.com/en-us/products/azure-maps).

### igniteui-react-charts (Charts)

####  New Axis Label Events

The following events have been added to the `IgrIgbDataChart` to allow you to detect different operations on the axis labels:

- `LabelMouseDown`
- `LabelMouseUp`
- `LabelMouseEnter`
- `LabelMouseLeave`
- `LabelMouseMove`
- `LabelMouseClick`

####  Companion Axis

Added `CompanionAxis` properties to the X and Y axis that allow you to quickly create a clone of an existing axis. When enabled using the `CompanionAxisEnabled` property, this will default the cloned axis to the opposite position of the chart and you can then configure that axes' properties.

####  RadialPieSeries Inset Outlines

There is a new property called `UseInsetOutlines` to control how outlines on the `IgrRadialPieSeries` are rendered. Setting this value to **true** will inset the outlines within the slice shape, whereas a **false** (default) value will place the outlines half-in half-out along the edge of the slice shape.

**Breaking Changes**

- A fix was made due to an issue where the `PlotAreaPosition` and `ChartPosition` properties on `IgrChartMouseEventArgs` class were reversed. This will change the values that `PlotAreaPosition` and `ChartPosition` return.

### igniteui-react-grids (Grids)

####  Cell Suffix Content

Added support for suffix content within the cells that allows you to add additional text or icons to the end of the cell value and style it. The full list of added properties for the cell suffix content is listed below and is available on the `IgrDataGridColumn` and `CellInfo` class:

- `SuffixText`
- `SuffixTextColor`
- `SuffixTextFont`
- `SuffixIconName`
- `SuffixIconCollectionName`
- `SuffixIconStroke`
- `SuffixIconFill`
- `SuffixIconViewBoxLeft`
- `SuffixIconViewBoxTop`
- `SuffixIconViewBoxWidth`
- `SuffixIconViewBoxHeight`
- `TextDecoration`

Please note that the maximum size available for the icons is 24x24. You can provide an icon that is larger or smaller than this, but you will need to configure the viewbox settings in order to properly scale it to fit in the 24x24 space so it is fully visible.

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|31624 | `IgrCategoryChart` | Resizing the containing window of the `IgrCategoryChart` causes the chart to fail to render the series|
|27304 | `IgrDataChart` | Zoom rectangle is not positioned the same as the background rectangle|
|37930 | `IgrDataChart` | Data Annotation Overlay Text Color not working|
|30600 | `IgrDoughnutChart` | No textStyle property for either the chart or series (pie chart has this)|
|38231 | [`IgrGrid`](mcp:get_api_reference?platform=react&component=IgrGrid) | Unpinned column does not return to the original position if hidden columns exist|
|33861 | Excel Library | Adding line chart corrupts excel File for German culture|

### Enhancements

#### IgrBulletGraph

-  Added new `LabelsVisible` property

#### Charts

- New properties added to the DataToolTipLayer, ItemToolTipLayer, and CategoryToolTipLayer to aid in styling: `ToolTipBackground`, `ToolTipBorderBrush`, and `ToolTipBorderThickness`

- New properties added to the DataLegend to aid in styling: `ContentBackground`, `ContentBorderBrush`, and `ContentBorderThickness`. The `ContentBorderBrush` and `ContentBorderThickness` default to transparent and 0 respectively, so in order to see these borders, you will need to set these properties.

- Added a new property to `IgrChartMouseEventArgs` called `WorldPosition` that provides the world relative position of the mouse. This position will be a value between 0 and 1 for both the X and Y axis within the axis space.

- Added `HighlightingFadeOpacity` to `IgrSeriesViewer` and `IgrDomainChart`. This allows you to configure the opacity applied to highlighted series.

- Expose `CalloutLabelUpdating` event for domain charts.

#### IgrDataGrid

- Added new property called `stopPropagation` to DataGrid which prevents mouse events from bubbling to parent elements

#### IgrLinearGauge

-  Added new `LabelsVisible` property

## **19.2.1 (September 2025)**

### Enhancements
- Added enhancement DatePicker should update calendar view on typing, as Date Range Picker [1818](https://github.com/IgniteUI/igniteui-webcomponents/issues/1818)

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[1831](https://github.com/IgniteUI/igniteui-webcomponents/pull/1831)| Calendar |Navigation styling|
|[1833](https://github.com/IgniteUI/igniteui-webcomponents/pull/1833)|Card| Slotted igc-avatar size styles in supported themes|
|[1826](https://github.com/IgniteUI/igniteui-webcomponents/pull/1826)|Combo|Dropdown initial height|
|[1827](https://github.com/IgniteUI/igniteui-webcomponents/pull/1827)|Combo|Icon sizes styles for Indigo theme|
|[1834](https://github.com/IgniteUI/igniteui-webcomponents/pull/1834)|DatePicker, DateRangePicker|Disabled styles|
|[1820](https://github.com/IgniteUI/igniteui-webcomponents/pull/1820)|Input|Prefix and suffix slot styles for Bootstrap theme|
|[1824](https://github.com/IgniteUI/igniteui-webcomponents/pull/1824)|Input|Label and border styles for Material theme|
|[1836](https://github.com/IgniteUI/igniteui-webcomponents/pull/1836)|Input|Removed overridden tabindex property|
|[1827](https://github.com/IgniteUI/igniteui-webcomponents/pull/1827)|Select|Icon sizes styles for Indigo theme|
|[1809](https://github.com/IgniteUI/igniteui-webcomponents/pull/1809)|Switch|Use the new thumb hover property|
|[1837](https://github.com/IgniteUI/igniteui-webcomponents/pull/1837)|TileManager|Incorrect escape of internal regex|

## **19.2.0 (August 2025)**

- Form associated custom elements now expose the **ig-invalid** custom state for styling with the `:state()` CSS selector.
  [See here for additional information](https://developer.mozilla.org/en-US/docs/Web/CSS/:state)
- Form associated custom elements validity behavior. Now elements will try to mimic `:user-invalid`, and won't apply invalid
  styles unless interacted through the UI or through a form `requestSubmit()/reset()` invocation.

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[1786](https://github.com/IgniteUI/igniteui-webcomponents/pull/1786)|Input|Invalid state in **readonly** mode|
|[1786](https://github.com/IgniteUI/igniteui-webcomponents/pull/1786)|Input|Cannot style **helper-text**|
|[1795](https://github.com/IgniteUI/igniteui-webcomponents/pull/1795)|Card|Slotted igc-avatar in Indigo theme|
|[1786](https://github.com/IgniteUI/igniteui-webcomponents/pull/1786)|Combo|Border overlaps label text in invalid state|
|[1799](https://github.com/IgniteUI/igniteui-webcomponents/pull/1799)|Date Picker|Indigo elevation styles|
|[1783](https://github.com/IgniteUI/igniteui-webcomponents/pull/1783)|Date range picker|Return focus to main input on keyboard interactions|
|[1792](https://github.com/IgniteUI/igniteui-webcomponents/pull/1792)|Input|Placeholder and label alignment in Material theme|
|[1806](https://github.com/IgniteUI/igniteui-webcomponents/pull/1806)|Navigation drawer|Update **relative** positions styles and animation|
|[1786](https://github.com/IgniteUI/igniteui-webcomponents/pull/1786)|Select|Invalid state theming issues|
|[1797](https://github.com/IgniteUI/igniteui-webcomponents/pull/1797)|Textarea|Material theme interaction issues|
|[1797](https://github.com/IgniteUI/igniteui-webcomponents/pull/1797)|Textarea|Resizing behavior with suffix part|
|[1775](https://github.com/IgniteUI/igniteui-webcomponents/pull/1775)|Calendar|Vertical mode container paddings|
|[1731](https://github.com/IgniteUI/igniteui-webcomponents/issues/1731)|Carousel|Pause automatic rotation on pointer-initiated focus|
|[1772](https://github.com/IgniteUI/igniteui-webcomponents/issues/1772)|Carousel|Ensure `onSlideChanged` event is emitted when a slide is changed|
|[1765](https://github.com/IgniteUI/igniteui-webcomponents/pull/1765)|Date picker|Styling issues|
|[1764](https://github.com/IgniteUI/igniteui-webcomponents/pull/1764)|Date range picker|CSS borders and elevation|
|[1747](https://github.com/IgniteUI/igniteui-webcomponents/pull/1747)|File input|Bootstrap invalid box-shadow styles|
|[1672](https://github.com/IgniteUI/igniteui-webcomponents/pull/1672)|Stepper|Error when setting linear property in deferred rendering scenarios|
|[1768](https://github.com/IgniteUI/igniteui-webcomponents/pull/1768)|Textarea|Readonly state styles|
|[1755](https://github.com/IgniteUI/igniteui-webcomponents/pull/1755)|Dropdown|Icon size in Bootstrap theme|
|[1739](https://github.com/IgniteUI/igniteui-webcomponents/pull/1739)|Inputs|Label positioning and transition logic in Material theme|

## **19.1.0 (July 2025)**

-  Component - Date Range Picker

### Breaking Changes

#### File Input
- `onChange` & `onCancel` events detail now returns the underlying component `files` property.

#### Tooltip
- Tooltip events will no longer return its `anchor` target in its `detail` property

### Behavioral Changes

#### Tooltip
- **Behavioral change**: Tooltip default `placement` is 'bottom' now.
- **Behavioral change**: Tooltip will not render an arrow indicator by default unless `with-arrow` is set.

### Enhancements
- Updated the readonly styles of most form associated components across all themes to better signify when a component is in a readonly state.

### Bug Fixes

| Bug Number | Control | Description |
|------------|---------|-------------|
|[1710](https://github.com/IgniteUI/igniteui-webcomponents/issues/1710)|Calendar and Date Picker|Incorrect date rollover for in certain scenarios|
|[1728](https://github.com/IgniteUI/igniteui-webcomponents/pull/1728)|Combo|Case insensitive icon styles in themes|
|[1726](https://github.com/IgniteUI/igniteui-webcomponents/pull/1726)|Input|Replace border in fluent theme with a box-shadow|
|[1732](https://github.com/IgniteUI/igniteui-webcomponents/pull/1732)|Input|Focused state background color in Indigo theme|
|[1715](https://github.com/IgniteUI/igniteui-webcomponents/pull/1715)|Text Area|Label height and component height override|

## **19.0.1 (July 2025)**

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|36448 | `IgrRadialGauge` | Radial label format properties do not work. (eg. Title, SubTitles)|

### igniteui-react-charts (Charts)

- Add  `MaximumExtent` and `MaximumExtentPercentage` properties for use with axis labels.

## **19.0.0 (April 2025)**

### igniteui-react-maps (Geographic Map)

**Note:** 
As of June 30, 2025 all Microsoft Bing Maps for Enterprise Basic (Free) accounts will be retired. If you're still using an unpaid Basic Account and key, now is the time to act to avoid service disruptions. Bing Maps for Enterprise license holders can continue to use Bing Maps in their applications until June 30,2028.
For more details please visit:

[Microsoft Bing Blogs](https://blogs.bing.com/maps/2025-06/Bing-Maps-for-Enterprise-Basic-Account-shutdown-June-30,2025)

### igniteui-react-charts (Charts)

- Added  [Chart Data Annotations](./charts/features/chart-data-annotations.md) layers:
  - Data Annotation Band Layer
  - Data Annotation Line Layer
  - Data Annotation Rect Layer
  - Data Annotation Slice Layer
  - Data Annotation Strip Layer

- The [Data Tooltip](./charts/features/chart-data-tooltip.md) and [Data Legend](./charts/features/chart-data-legend.md) expose  `LayoutMode` property that you can use to layout the contents of the tooltip or legend in a table or vertical layout structure.

-  The `DefaultInteraction` property of the charts has been updated to include a new enumeration - `DragSelect` in which the dragged preview Rect will select the points contained within.

-  The [ValueOverlay and ValueLayer](./charts/features/chart-overlays.md), in addition to the  [Chart Data Annotations](./charts/features/chart-data-annotations.md) listed above now expose an `OverlayText` property that can be used to overlay additional annotation text in the plot area. These appearance of these annotations can be configured by using the many OverlayText-prefixed properties. For example, the `OverlayTextBrush` property will configure the color of the overlay text.

-  [Trendline Layer](./charts/features/chart-trendlines.md) series type that allows you to apply a single trend line per trend line layer to a particular series. This allows the usage of multiple trend lines on a single series since you can have multiple [TrendlineLayer](./charts/features/chart-overlays.md) series types in the chart.

### igniteui-react-dashboards (Dashboards)

- The `IgrDashboardTile` now supports propagating the aggregations from its DataGrid view to the chart visualization such as sorting, grouping, filtering and selection. This is currently supported by binding the `IgrDataSource` of the `IgrDashboardTile` to an instance of `IgrLocalDataSource`.

### igniteui-react-grids

**Breaking Changes**

- The `IgrDataGrid` & `IgrMultiColumnComboBox` are now part of the igniteui-react-data-grids package.

### Enhancements

#### Toolbar
- Value layers added from the toolbar now appear on the legend.
- The zoom reset tool has been moved to the zoom drop-down.

#### Data Pie Chart
- The chart now exposes a `GetOthersContext()` method. This will return the contents of the "others" slice.

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|25997 | `IgrDataGrid` | Summaries are only showing for first grouped child row|
|37023 | `IgrDataChart` | Tooltips are cut-off/offscreen if overflow hidden is set.|
|37685 | `IgrSpreadsheet` | Poor rendering of numbers formatted with Arial font.|
|37244 | Excel Library | Custom Data Validation is not working.|

## **19.0.0 (April 2025)**
**Note:** 
With 19.0.0 the React product introduces many breaking changes done to improve and streamline the API. Please refer to the full Update Guide.

[Update Guide](./update-guide.md)

### Removed
- [`IgrCheckboxChangeEventArgs`](mcp:get_api_reference?platform=react&component=IgrCheckboxChangeEventArgs) removed, use [`IgrCheckboxChangeEventArgs`](mcp:get_api_reference?platform=react&component=IgrCheckboxChangeEventArgs) instead.
- [`IgrRadioChangeEventArgs`](mcp:get_api_reference?platform=react&component=IgrRadioChangeEventArgs) removed, use [`IgrRadioChangeEventArgs`](mcp:get_api_reference?platform=react&component=IgrRadioChangeEventArgs) instead.
- `IgrRangeSliderValue` removed, use [`IgrRangeSliderValueEventArgs`](mcp:get_api_reference?platform=react&component=IgrRangeSliderValueEventArgs) instead.
- `ActiveStepChangingArgs` removed, use [`IgrActiveStepChangingEventArgs`](mcp:get_api_reference?platform=react&component=IgrActiveStepChangingEventArgs) instead.
- `ActiveStepChangedArgs` removed, use [`IgrActiveStepChangedEventArgs`](mcp:get_api_reference?platform=react&component=IgrActiveStepChangedEventArgs) instead.

### Enhancements

#### Stepper
Stepper Step's `titlePosition` now defaults to `auto`, instead of being undefined, which has the same behavior.

#### Tabs
igr-tab `panel` property is removed.

igr-tab-panel component is removed. The igr-tab now encompasses both the tab header and the tab content in a single component.

## **18.9.0 (April 2025)**

### New Components

- TileManager

### Enhancements

#### List
- Added new property on [`IgrListItem`](mcp:get_api_reference?platform=react&component=IgrListItem) called [`Selected`](mcp:get_api_reference?platform=react&component=IgrListItem&member=selected)

#### Accordion
- Added new events [`Open`](mcp:get_api_reference?platform=react&component=IgrDatePicker&member=open) and `Close`

### igniteui-react-grids

- **All Grids**
  - Allow applying initial filtering through [`FilteringExpressionsTree`](mcp:get_api_reference?platform=react&component=IgrGridBaseDirective&member=filteringExpressionsTree) property

### Deprecations

- The `clicked` event of the `Button` is deprecated. Use the native `onClick` handler.

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|25602 | `IgrDataGrid` | Loading a layout with one of the date-specific filter operators results in a TypeError console error|
|28480 | [`IgrCombo`](mcp:get_api_reference?platform=react&component=IgrCombo) | Undefined reference error is thrown when a datasource is replaced|
|30319 | `IgrDataGrid` | Records are sorted despite no value changed|
|32598 | `IgrDataGrid` | Multi-selection is not working correctly
|36374 | [`IgrInput`](mcp:get_api_reference?platform=react&component=IgrInput) | A previous value was bound when a form was submitted on any touch device|

## **18.8.1 (March 2025)**

### igniteui-react-grids
The following table lists the bug fixes made for the Ignite UI for React toolset for this release:

| Bug Number | Control | Description      |
|------------|---------|------------------|
|36864|Grids|There is wrong import path "grids/combined" for the react licensed package|

## **18.8.0 (February 2025)**

### igniteui-react-grids

- **All Grids**
  - Added new `disabledSummaries` for the columns of the grid, allowing the developers to skip some of the summaries
  - Encapsulate internal grid action button

### igniteui-react
- Added new `allowSplitterDock` property for `Dockmanager` that allows docking directly in a split.
- Added new `useFixedSize` property for the [`IgrSplitPane`](mcp:get_api_reference?platform=react&component=IgrSplitPane) of `Dockmanager` that allows new resize behavior.

### Enhancements

#### Toolbar

- Added new `groupHeaderTextStyle` property to [`Toolbar`](mcp:get_api_reference?platform=react&component=IgrGrid&member=toolbar) and `IgrToolPanel`. If set, it will apply to all `IgrToolActionGroupHeader` actions.
- Added new property on `IgrToolAction` called `TitleHorizontalAlignment` which controls the horizontal alignment of the title text.
- Added new property on `IgrToolActionSubPanel` called `itemSpacing` which controls the spacing between items inside the panel.

### Bug Fixes

The following table lists the bug fixes made for the Ignite UI for React toolset for this release:

| Bug Number | Control | Description      |
|------------|---------|------------------|
|30286 | `IgrDataChart` | Bubble Series tooltip content is switched to that of nearby bubble data in clicking a bubble|
|32906 | `IgrDataChart` | `IgrDataChart` is showing two xAxis on the top|
|33605 | `IgrDataChart` | ScatterLineSeries is not showing the color of the line correctly in the legend|
|34776 | `IgrDataChart` | Repeatedly showing and hiding the `IgrDataChart` causes memory leakage in JS Heap|
|35498 | `IgrDataChart` | Tooltips for the series specified in IncludedSeries are not displayed|
|34324 | [`IgrGrid`](mcp:get_api_reference?platform=react&component=IgrGrid) | Column hiding through condition in the grid template is not working|
|34678 | [`IgrGrid`](mcp:get_api_reference?platform=react&component=IgrGrid) | Enum values coerced to strings, breaking expected numeric behavior in some grid properties|
|32093 | [`IgrPivotGrid`](mcp:get_api_reference?platform=react&component=IgrPivotGrid) | PivotDateDimensionOptions are not applied to the PivotDateDimension|
|34053 | `IgrRadialGauge` | The position of the scale label is shifted|
|35496 | `IgrSpreadsheet` | Error when setting styles in Excel with images|
|36176 | Excel Library | Exception occurs when loading an Excel workbook that has a LET function|
|36379 | Excel Library | Colors with any alpha channel in an excel workbook fail to load|
|26218 | Excel Library | Chart's plot area right margin becomes narrower and fill pattern and fill foreground are gone just by loading an Excel file|
|34083 | Excel Library | TextOperatorConditionalFormat's is not loaded/saved properly if the text contains = in a template Excel file|
|35495 | Excel Library | Pictures in cells are lost when a template file is loaded|

## **18.7.7 (January 2025)**

- Bug Fixes

### igniteui-react-grids

- **All Grids**
  - Fixed a critical memory leak when components are opened in several duplicate browser tabs.

## **18.7.6 (December 2024)**

### igniteui-react-charts (Charts)

DashboardTile 

- New [Dashboard Tile](./dashboard-tile.md) component is a container control that analyzes and visualizes a bound ItemsSource collection or single point and returns an appropriate data visualization based on the schema and count of the data. This control utilizes a built-in [Toolbar](./menus/toolbar.md) component to allow you to make changes to the visualization at runtime, allowing you to see many different visualizations of your data with minimal code.

### igniteui-react-charts (Inputs)

-  [Color Editor](./inputs/color-editor.md) can be used as a standalone color picker and is now integrated into  ToolAction of [Toolbar](./menus/toolbar.md) component to update visualizations at runtime.

## **18.7.4 (November 2024)**

### General
- New [Carousel](./layouts/carousel.md) component.
- [`IgrInput`](mcp:get_api_reference?platform=react&component=IgrInput)
  - Changed `change` event argument type from `IgrComponentDataValueChangedEventArgs` to `IgrComponentValueChangedEventArgs`

## **18.7.0 (September 2024)**

### igniteui-react-charts (Charts)

- New [Data Pie Chart](./charts/types/data-pie-chart.md) - The `IgrDataPieChart` is a new component that renders a pie chart. This component works similarly to the `IgrCategoryChart`, in that it will automatically detect the properties on your underlying data model while allowing selection, highlighting, animation and legend support via the ItemLegend component.

- New [Proportional Category Angle Axis](./charts/types/radial-chart.md) - New axes for the Radial Pie Series in the `IgrDataChart`, to plot slices similar to a pie chart, a type of data visualization where data points are represented as segments within a circular graph.

- [`Toolbar`](mcp:get_api_reference?platform=react&component=IgrGrid&member=toolbar)

  - New ToolActionCheckboxList
        A new CheckboxList ToolAction that displays a collection of items with checkboxes for selecting. A grid inside ToolAction CheckboxList grows in height up to 5 items, then a scrollbar is displayed.
        Requires IgrCheckboxListModule to be registered.

  - New Filtering Support

  - Axis Field Changes
        New default IconMenu in Toolbar when targeting CategoryChart.
        Label fields are mapped to the X-axis and Value fields are mapped to the Y-axis.
        Target chart reacts in realtime to changes made. IconMenu is hidden when chart has no ItemsSource set.

### igniteui-react

- New [Banner](./notifications/banner.md) component.
- New [DatePicker](./scheduling/date-picker.md) component.
- New [`IgrDivider`](mcp:get_api_reference?platform=react&component=IgrDivider) component.
- Added support for native events to all components.
- [`IgrIcon`](mcp:get_api_reference?platform=react&component=IgrIcon)
  - Added [`setIconRef`](mcp:get_api_reference?platform=react&component=setIconRef) method. This allows to register and replace icons by SVG files.
  - All components now use icons by reference internally so that it's easy to replace them without explicitly providing custom templates.
- [`IgrCombo`](mcp:get_api_reference?platform=react&component=IgrCombo), [`IgrDatePicker`](mcp:get_api_reference?platform=react&component=IgrDatePicker), [`IgrDialog`](mcp:get_api_reference?platform=react&component=IgrDialog), [`IgrDropdown`](mcp:get_api_reference?platform=react&component=IgrDropdown),  [`IgrExpansionPanel`](mcp:get_api_reference?platform=react&component=IgrExpansionPanel), [`IgrNavDrawer`](mcp:get_api_reference?platform=react&component=IgrNavDrawer), [`IgrToast`](mcp:get_api_reference?platform=react&component=IgrToast), [`IgrSnackbar`](mcp:get_api_reference?platform=react&component=IgrSnackbar), **IgrSelectComponent**
  - Toggle methods `show`, `hide`, `toggle` methods return **true** now on success, otherwise **false**.
- **IgrButtonComponent**, [`IgrIconButton`](mcp:get_api_reference?platform=react&component=IgrIconButton), [`IgrCheckbox`](mcp:get_api_reference?platform=react&component=IgrCheckbox), [`IgrSwitch`](mcp:get_api_reference?platform=react&component=IgrSwitch), [`IgrCombo`](mcp:get_api_reference?platform=react&component=IgrCombo), [`IgrDateTimeInput`](mcp:get_api_reference?platform=react&component=IgrDateTimeInput), [`IgrInput`](mcp:get_api_reference?platform=react&component=IgrInput), [`IgrMaskInput`](mcp:get_api_reference?platform=react&component=IgrMaskInput), [`IgrRadio`](mcp:get_api_reference?platform=react&component=IgrRadio), **IgrSelectComponent**, [`IgrTextarea`](mcp:get_api_reference?platform=react&component=IgrTextarea)
  - Deprecated custom `focus` and `blur` events. Use the native `onFocus` and `onBlur` events instead
- [`IgrRadioGroup`](mcp:get_api_reference?platform=react&component=IgrRadioGroup)
  - Added [`Name`](mcp:get_api_reference?platform=react&component=IgrDatePicker&member=name) and [`Value`](mcp:get_api_reference?platform=react&component=IgrDatePicker&member=value) properties.

**Breaking Changes**

- Renamed old **IgrDatePicker** to **IgrXDatePicker**.
- Removed [`Form`](mcp:get_api_reference?platform=react&component=IgrIconButton&member=form) component. Use native form instead.
- Removed `size` property in favor of the `--ig-size` CSS custom property for the following components:
  - [`IgrAvatar`](mcp:get_api_reference?platform=react&component=IgrAvatar),  **IgrButtonComponent**, [`IgrIconButton`](mcp:get_api_reference?platform=react&component=IgrIconButton), [`IgrCalendar`](mcp:get_api_reference?platform=react&component=IgrCalendar), [`IgrChip`](mcp:get_api_reference?platform=react&component=IgrChip), [`IgrDropdown`](mcp:get_api_reference?platform=react&component=IgrDropdown), [`IgrIcon`](mcp:get_api_reference?platform=react&component=IgrIcon), [`IgrInput`](mcp:get_api_reference?platform=react&component=IgrInput), [`IgrList`](mcp:get_api_reference?platform=react&component=IgrList), [`IgrRating`](mcp:get_api_reference?platform=react&component=IgrRating), [`IgrSnackbar`](mcp:get_api_reference?platform=react&component=IgrSnackbar), [`IgrTabs`](mcp:get_api_reference?platform=react&component=IgrTabs), [`IgrTree`](mcp:get_api_reference?platform=react&component=IgrTree)
- [`IgrBadge`](mcp:get_api_reference?platform=react&component=IgrBadge), [`IgrChip`](mcp:get_api_reference?platform=react&component=IgrChip), [`IgrLinearProgress`](mcp:get_api_reference?platform=react&component=IgrLinearProgress), [`IgrCircularProgress`](mcp:get_api_reference?platform=react&component=IgrCircularProgress)
  - Renamed [`Variant`](mcp:get_api_reference?platform=react&component=IgrIconButton&member=variant) property type to [`StyleVariant`](mcp:get_api_reference?platform=react&component=StyleVariant).
- [`IgrCalendar`](mcp:get_api_reference?platform=react&component=IgrCalendar)
  - Renamed [`WeekStart`](mcp:get_api_reference?platform=react&component=IgrFieldPipeArgs&member=weekStart) property type to [`WeekDays`](mcp:get_api_reference?platform=react&component=WeekDays).
- [`IgrCheckbox`](mcp:get_api_reference?platform=react&component=IgrCheckbox), [`IgrSwitch`](mcp:get_api_reference?platform=react&component=IgrSwitch)
  - Changed `change` event argument type from `IgrComponentBoolValueChangedEventArgs` to [`IgrCheckboxChangeEventArgs`](mcp:get_api_reference?platform=react&component=IgrCheckboxChangeEventArgs).
- [`IgrCombo`](mcp:get_api_reference?platform=react&component=IgrCombo), **IgrSelectComponent**
  - Removed `positionStrategy`, `flip`, `sameWidth` properties.
- [`IgrDateTimeInput`](mcp:get_api_reference?platform=react&component=IgrDateTimeInput)
  - Removed `maxValue` and `minValue` properties. Use `max` and `min` instead.
- [`IgrDropdown`](mcp:get_api_reference?platform=react&component=IgrDropdown)
  - Removed `positionStrategy` property.
- [`IgrInput`](mcp:get_api_reference?platform=react&component=IgrInput)
  - Removed old named `maxlength` and `minlength` properties. Use `maxLength` and `minLength`.
  - Removed old named `readonly` and `inputmode` properties. Use `readOnly` and `inputMode`.
  - Changed `inputMode` type also to `string`.
- [`IgrRadio`](mcp:get_api_reference?platform=react&component=IgrRadio)
  - Changed `change` event argument type from `IgrComponentBoolValueChangedEventArgs` to [`IgrRadioChangeEventArgs`](mcp:get_api_reference?platform=react&component=IgrRadioChangeEventArgs).
- [`IgrRangeSlider`](mcp:get_api_reference?platform=react&component=IgrRangeSlider)
  - Removed `ariaThumbLower` and `ariaThumbUpper` properties. Use `thumbLabelLower` and `thumbLabelUpper` instead.
- [`IgrRating`](mcp:get_api_reference?platform=react&component=IgrRating)
  - Renamed `readonly` property to `readOnly`.

### igniteui-react-grids

- **All Grids**
  - Added new `RowClick` event.
- [`IgrPivotGrid`](mcp:get_api_reference?platform=react&component=IgrPivotGrid)
  - Added `sortable` property for a [`IgrPivotDimension`](mcp:get_api_reference?platform=react&component=IgrPivotDimension).
  - Added horizontal layout. Can be enabled inside the new `pivotUI` property as `rowLayout` `horizontal`.
  - Added row dimension summaries for horizontal layout only. Can be enabled for each [`IgrPivotDimension`](mcp:get_api_reference?platform=react&component=IgrPivotDimension) by setting `horizontalSummary` to **true**.
  - Added `horizontalSummariesPosition` property to the `pivotUI`, configuring horizontal summaries position.
  - Added row headers for the row dimensions. Can be enabled inside the new `pivotUI` property as `showHeaders` **true**.
  - Keyboard navigation now can move in to row headers back and forth from any row dimension headers or column headers.
  - Added keyboard interactions for row dimension collapse using <kbd>ALT</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> arrows and row headers sorting using <kbd>CTRL</kbd> + <kbd>↑</kbd> <kbd>↓</kbd> arrows.

**Breaking Changes**

- **All Grids**
  - [`IgrRowIsland`](mcp:get_api_reference?platform=react&component=IgrRowIsland)
  - Removed `displayDensity` deprecated property.
  - Renamed `actualColumns`, `contentColumns` properties to `actualColumnList` and `contentColumnList`. Use `columns` or `columnList` property to get all columns now.
  - Renamed `rowDelete` and `rowAdd` event argument type to [`IgrRowDataCancelableEventArgs`](mcp:get_api_reference?platform=react&component=IgrRowDataCancelableEventArgs).
  - Renamed `contextMenu` event argument type to [`IgrGridContextMenuEventArgs`](mcp:get_api_reference?platform=react&component=IgrGridContextMenuEventArgs).
  - Removed [`IgrGridEditEventArgs`](mcp:get_api_reference?platform=react&component=IgrGridEditEventArgs),  [`IgrGridEditDoneEventArgs`](mcp:get_api_reference?platform=react&component=IgrGridEditDoneEventArgs), [`IgrPinRowEventArgs`](mcp:get_api_reference?platform=react&component=IgrPinRowEventArgs) events `rowID` and `primaryKey` properties. Use `rowKey` instead.
- [`IgrPivotGrid`](mcp:get_api_reference?platform=react&component=IgrPivotGrid)
  - removed `showPivotConfigurationUI` property. Use `pivotUI` and set inside it the new `showConfiguration` option.
- [`IgrColumn`](mcp:get_api_reference?platform=react&component=IgrColumn)
  - Removed `movable` property. Use Grid's `moving` property now.
  - Removed `columnChildren` property. Use `childColumns` instead.
- [`IgrColumnGroup`](mcp:get_api_reference?platform=react&component=IgrColumnGroup)
  - Removed `children` property. Use `childColumns` instead.
- [`IgrPaginator`](mcp:get_api_reference?platform=react&component=IgrPaginator)
  - Removed `isFirstPageDisabled` and `isLastPageDisabled` properties. Use `isFirstPage` and `isLastPage` instead.

## **18.6.1 (June 2024)**

### igniteui-react
- [`IgrInput`](mcp:get_api_reference?platform=react&component=IgrInput), [`IgrTextarea`](mcp:get_api_reference?platform=react&component=IgrTextarea) - exposed [`ValidateOnly`](mcp:get_api_reference?platform=react&component=IgrInput&member=validateOnly) to enable validation rules being enforced without restricting user input.
- [`IgrDropdown`](mcp:get_api_reference?platform=react&component=IgrDropdown) - [`IgrPositionStrategy`](mcp:get_api_reference?platform=react&component=IgrPositionStrategy) property is deprecated. The dropdown now uses the `Popover` API to render its container in the top layer of the browser viewport, making the property obsolete.
- [`IgrDockManager`](mcp:get_api_reference?platform=react&component=IgrDockManager) - [`IgrSplitPane`](mcp:get_api_reference?platform=react&component=IgrSplitPane) [`IsMaximized`](mcp:get_api_reference?platform=react&component=IgrSplitPane&member=isMaximized) is deprecated. Having isMaximized set to true on a split pane level has no real effect as split panes serve as containers only, meaning they have no actual content to be shown maximized. Use the [`IsMaximized`](mcp:get_api_reference?platform=react&component=IgrSplitPane&member=isMaximized) property of [`IgrTabGroupPane`](mcp:get_api_reference?platform=react&component=IgrTabGroupPane) and/or [`IgrContentPane`](mcp:get_api_reference?platform=react&component=IgrContentPane) instead.

### igniteui-react-grids

- `DisplayDensity` deprecated in favor of the `--ig-size` CSS custom property. Check out the [Grid Size](./grids/grid/size.md) topic for more.

- [`IgrPivotGrid`](mcp:get_api_reference?platform=react&component=IgrPivotGrid) - Configuration of the component can now be applied correctly.
### igniteui-react-charts (Charts)

- [Data Legend Grouping](./charts/features/chart-data-legend.md#react-data-legend-grouping) & [Data Tooltip Grouping](./charts/features/chart-data-tooltip.md#react-data-tooltip-grouping-for-data-chart) - New grouping feature added. The property `GroupRowVisible` toggles grouping with each series opting in can assign group text via the `DataLegendGroup` property. If the same value is applied to more than one series then they will appear grouped. Useful for large datasets that need to be categorized and organized for all users.

- [Chart Selection](./charts/features/chart-data-selection.md) - New series selection styling. This is adopted broadly across all category, financial and radial series for `IgrCategoryChart` and `IgrDataChart`. Series can be clicked and shown a different color, brightened or faded, and focus outlines. Manage which items are effected through individual series or entire data item. Multiple series and markers are supported. Useful for illustrating various differences or similarities between values of a particular data item. Also  `SelectedSeriesItemsChanged` event and `SelectedSeriesItems` are available for additional help to build out robust business requirements surrounding other actions that can take place within an application such as a popup or other screen with data analysis based on the selection.

- [Proportional Category Angle Axis](./charts/types/radial-chart.md) - New axes for the Radial Pie Series in the `IgrDataChart`, to enable creating pie charts in the allowing robust visualizations using all the added power of the data chart.

- [Treemap Highlighting](./charts/types/treemap-chart.md#react-treemap-highlighting) - Now exposes a `HighlightingMode` property that allows you to configure the mouse-over highlighting of the items in the tree map. This property takes two options: `Brighten` where the highlight will apply to the item that you hover the mouse over only, and `FadeOthers` where the highlight of the hovered item will remain the same, but everything else will fade out. This highlight is animated, and can be controlled using the `HighlightingTransitionDuration` property.

- [Treemap Percent-based Highlighting](./charts/types/treemap-chart.md#react-treemap-percent-based-highlighting) - New percent-based highlighting, allowing nodes to represent progress or subset of a collection. The appearance is shown as a fill-in of its backcolor up to a specific value either by a member on your data item or by supplying a new `HighlightedItemsSource`. Can be toggled via `HighlightedValuesDisplayMode` and styled via `FillBrushes`.

- [`Toolbar`](mcp:get_api_reference?platform=react&component=IgrGrid&member=toolbar) - New `IsHighlighted` option for ToolAction for outlining a border around specific tools of choice.

### igniteui-react-gauges (Gauges)

- `IgrRadialGauge`
  - New label for the highlight needle. `HighlightLabelText` and `HighlightLabelSnapsToNeedlePivot` and many other styling related properties for the HighlightLabel were added.

## **18.6.0 (March 2024)**

### igniteui-react-charts

- New Data Filtering via the `InitialFilter` property. Apply filter expressions to filter the chart data to a subset of records. Can be used for drill down large data.

- `RadialChart`
  - New Label Mode
        The `IgrCategoryAngleAxis` for the now exposes a `LabelMode` property that allows you to further configure the location of the labels. This allows you to toggle between the default mode by selecting the `Center` enum, or use the new mode, `ClosestPoint`, which will bring the labels closer to the circular plot area.

### igniteui-react-grids

- New [[`IgrHierarchicalGrid`](mcp:get_api_reference?platform=react&component=IgrHierarchicalGrid)](./grids/hierarchical-grid/overview.md) component

### igniteui-react-gauges

- `IgrRadialGauge`
  - New title/subtitle properties. `TitleText`, `SubtitleText` will appear near the bottom the gauge. In addition, the various title/subtitle font properties were added such as `TitleFontSize`, `TitleFontFamily`, `TitleFontStyle`, `TitleFontWeight` and `TitleExtent`. Finally, the new `TitleDisplaysValue` will allow the value to correspond with the needle's position.
  - New `OpticalScalingEnabled` and `OpticalScalingSize` properties for the `IgrRadialGauge`. This new feature will manage the size at which labels, titles, and subtitles of the gauge have 100% optical scaling. You can read more about this new feature in this [topic](./radial-gauge.md#optical-scaling)
  - New highlight needle was added. `HighlightValue` and `HighlightValueDisplayMode` when both are provided a value and 'Overlay' setting, this will make the main needle to appear faded and a new needle will appear.
- `IgrLinearGauge`
  - New highlight needle was added. `HighlightValue` and `HighlightValueDisplayMode` when both are provided a value and 'Overlay' setting, this will make the main needle to appear faded and a new needle will appear.
- `IgrBulletGraph`
  - The Performance bar will now reflect a difference between the value and new `HighlightValue` when the `HighlightValueDisplayMode` is applied to the 'Overlay' setting. The highlight value will show a filtered/subset completed measured percentage as a filled in color while the remaining bar's appearance will appear faded to the assigned value, illustrating the performance in real-time.

### igniteui-react

- New [`IgrTextarea`](mcp:get_api_reference?platform=react&component=IgrTextarea) component
- New [`IgrButtonGroup`](mcp:get_api_reference?platform=react&component=IgrButtonGroup) component
- [`IgrDockManager`](mcp:get_api_reference?platform=react&component=IgrDockManager)
  - New [`ProximityDock`](mcp:get_api_reference?platform=react&component=IgrDockManager&member=proximityDock) property. If enabled, docking indicators are not visible and the end user can dock the dragged pane by dragging it close to the target pane edges.
  - New [`ContainedInBoundaries`](mcp:get_api_reference?platform=react&component=IgrDockManager&member=containedInBoundaries) property. Determines whether the floating panes are kept inside the Dock Manager boundaries. Defaults to `false`.
  - New [`ShowPaneHeaders`](mcp:get_api_reference?platform=react&component=IgrDockManager&member=showPaneHeaders) property. Determines whether pane headers are only shown on hover or always visible. Defaults to `always`.
- [`IgrInput`](mcp:get_api_reference?platform=react&component=IgrInput), [`IgrMaskInput`](mcp:get_api_reference?platform=react&component=IgrMaskInput), [`IgrDateTimeInput`](mcp:get_api_reference?platform=react&component=IgrDateTimeInput), [`IgrRating`](mcp:get_api_reference?platform=react&component=IgrRating)
  - `Readonly` has been renamed to [`ReadOnly`](mcp:get_api_reference?platform=react&component=IgrDatePicker&member=readOnly)
- [`IgrInput`](mcp:get_api_reference?platform=react&component=IgrInput)
  - `Maxlength` has been renamed to [`MaxLength`](mcp:get_api_reference?platform=react&component=IgrInput&member=maxLength)
  - `Minlength` has been renamed to [`MinLength`](mcp:get_api_reference?platform=react&component=IgrInput&member=minLength)
- [`IgrTree`](mcp:get_api_reference?platform=react&component=IgrTree)
  - Added `toggleNodeOnClick` property that determines whether clicking over a node will change its expanded state or not. Defaults to `false`.
- [`IgrRating`](mcp:get_api_reference?platform=react&component=IgrRating)
  - `allowReset` added. When enabled selecting the same value will reset the component. **Behavioral change** - In previous releases this was the default behavior of the rating component. Make sure to set `allowReset` if you need to keep this behavior in your application.
- [`Select`](mcp:get_api_reference?platform=react&component=IgrDatePicker&member=select), [`IgrDropdown`](mcp:get_api_reference?platform=react&component=IgrDropdown)
  - exposed `selectedItem`, `items` and `groups` getters

#### Deprecations

- The [`Form`](mcp:get_api_reference?platform=react&component=IgrIconButton&member=form) component has been deprecated. Please, use the native form element instead.
- The `size` property and attribute have been deprecated for all components. Use the `--ig-size` CSS custom property instead. The following example sets the size of the avatar component to small:

  ```css
  .avatar {
      --ig-size: var(--ig-size-small);
  }
  ```

- [`IgrDateTimeInput`](mcp:get_api_reference?platform=react&component=IgrDateTimeInput)
  - `MinValue` and `MaxValue` properties have been deprecated. Please, use [`Min`](mcp:get_api_reference?platform=react&component=IgrDatePicker&member=min) and [`Max`](mcp:get_api_reference?platform=react&component=IgrDatePicker&member=max) instead.
- [`IgrRangeSlider`](mcp:get_api_reference?platform=react&component=IgrRangeSlider)
  - `AriaLabelLower` and `AriaLabelUpper` properties have been deprecated. Please, use [`ThumbLabelLower`](mcp:get_api_reference?platform=react&component=IgrRangeSlider&member=thumbLabelLower) and [`ThumbLabelUpper`](mcp:get_api_reference?platform=react&component=IgrRangeSlider&member=thumbLabelUpper) instead.

#### Removed

- Removed our own `dir` attribute which shadowed the default one. This is a non-breaking change.
- [`IgrSlider`](mcp:get_api_reference?platform=react&component=IgrSlider) - `ariaLabel` shadowed property. This is a non-breaking change.
- [`IgrCheckbox`](mcp:get_api_reference?platform=react&component=IgrCheckbox) - `ariaLabelledBy` shadowed attribute. This is a non-breaking change.
- [`IgrSwitch`](mcp:get_api_reference?platform=react&component=IgrSwitch) - `ariaLabelledBy` shadowed attribute. This is a non-breaking change.
- [`IgrRadio`](mcp:get_api_reference?platform=react&component=IgrRadio) - `ariaLabelledBy` shadowed attribute. This is a non-breaking change.

## **18.5.0 (January 2024)**

### igniteui-react-charts (Charts)

- [Chart Highlight Filter](./charts/features/chart-highlight-filter.md) - The `IgrCategoryChart` and `IgrDataChart` now expose a way to highlight and animate in and out of a subset of data. The display of this highlight depends on the series type. For column and area series, the subset will be shown on top of the total set of data where the subset will be colored by the actual brush of the series, and the total set will have a reduced opacity. For line series, the subset will be shown as a dotted line.

## **18.4.0 (December 2023)**

### igniteui-react-grids (Grid)

- Added New Features - [State Persistence](./grids/grid/state-persistence.md)

## **18.3.0 (October 2023)**

### igniteui-react-grids - Toolbar - 

- Save tool action has been added to save the chart to an image via the clipboard.
- Vertical orientation has been added via the toolbar's `Orientation` property. By default the toolbar is horizontal, now the toolbar can be shown in vertical orientation where the tools will popup to the left/right respectfully.
- Custom SVG icons support was added via the toolbar's `renderImageFromText` method, further enhancing custom tool creation.

- [Grid](./grids/data-grid.md) - This is a new fully functional cross-platform grid and includes features like filtering, sorting, templates, row selection, row grouping, row pinning and movable columns.

### Deprecated Components

> [DataGrid](./grids/data-grid.md) - The DataGrid is deprecated, please use [Grid](./grids/data-grid.md)

## **18.2.0 (June 2023)**

### New Components

-  [Toolbar](./menus/toolbar.md) - This component is a companion container for UI operations to be used primarily with our charting components. The toolbar will dynamically update with a preset of properties and tool items when linked to our `IgrDataChart` or `IgrCategoryChart` components. You'll be able to create custom tools for your project allowing end users to provide changes, offering an endless amount of customization.

### igniteui-react-charts (Charts)

- [ValueLayer](./charts/features/chart-overlays.md#react-value-layer) - A new series type named the `IgrValueLayer` is now exposed which can allow you to render an overlay for different focal points of the plotted data such as Maximum, Minimum, and Average. This is applied to the `IgrCategoryChart` and `IgrFinancialChart` by adding to the new `ValueLines` collection.

- It is now possible to apply a **dash array** to the different parts of the series of the `IgrDataChart`. You can apply this to the [series](./charts/types/line-chart.md#react-styling-line-chart) plotted in the chart, the [gridlines](./charts/features/chart-axis-gridlines.md#react-axis-gridlines-properties) of the chart, and the [trendlines](./charts/features/chart-trendlines.md#react-chart-trendlines-dash-array-example) of the series plotted in the chart.

## **18.1.0 (November 2022)**

Added significant improvements to default behaviors, and refined the Category Chart API to make it easier to use. These new chart improvements include:

- Responsive layouts for horizontal label rotation based on browser / screen size.
- Enhanced rendering for rounded labels on all platforms.
- Added marker properties to StackedFragmentSeries.
- Added `ShouldPanOnMaximumZoom` property.
- New Category Axis Properties:
  - ZoomMaximumCategoryRange
  - ZoomMaximumItemSpan
  - ZoomToCategoryRange
  - ZoomToItemSpan
- New [Chart Aggregation](./charts/features/chart-data-aggregations.md) API for Grouping, Sorting and Summarizing Category string and numeric values, eliminating the need to pre-aggregate or calculate chart data:
  - InitialSortDescriptions
  - InitialSorts
  - SortDescriptions
  - InitialGroups
  - InitialGroupDescriptions
  - GroupDescriptions
  - InitialSummaries
  - InitialSummaryDescriptions
  - SummaryDescriptions
  - InitialGroupSortDescriptions
  - GroupSorts
  - GroupSortDescriptions

[Chart Aggregation](./charts/features/chart-data-aggregations.md) will not work when using `IncludedProperties` | `ExcludedProperties`. These properties on the chart are meant for non-aggregated data. Once you attempt to aggregate data these properties should no longer be used. The reason it does not work is because aggregation replaces the collection that is passed to the chart for render.  The include/exclude properties are designed to filter in/out properties of that data and those properties no longer exist in the new aggregated collection.

### igniteui-react-grids (Data Grid)

- Changed **IgrColumn** to `IgrDataGridColumn`
- Changed **GridCellEventArgs** to `IgrDataGridCellEventArgs`
- Changed **GridSelectionMode** to `IgrDataGridSelectionMode`
- Changed **SummaryOperand** to `IgrDataSourceSummaryOperand`

## **16.16.0 (June 2022)**
### igniteui-react-charts (Charts)

- Added the highly-configurable [DataLegend](./charts/features/chart-data-legend.md) component, which works much like the `Legend`, but it shows values of series and provides many configuration properties for filtering series rows and values columns, styling and formatting values.
- Added the highly-configurable [DataToolTip](./charts/features/chart-data-tooltip.md) which displays values and titles of series as well as legend badges of series in a tooltip. This is now the default tooltip for all chart types.
- Added animation and transition-in support for Stacked Series. Animations can be enabled by setting the `IsTransitionInEnabled` property to true. From there, you can set the `TransitionInDuration` property to determine how long your animation should take to complete and the `TransitionInMode` to determine the type of animation that takes place.
- Added `AssigningCategoryStyle` event, is now available to all series in `IgrDataChart`. This event is handled when you want to conditionally configure aspects of the series items such as `Fill` background-color and highlighting.
- New `AllowedPositions` enumeration for CalloutLayer. Used to limit where the callouts are to be placed within the chart. By default, the callouts are intelligently placed in the best place but this used to force for example `TopLeft`, `TopRight`, `BottomLeft` or `BottomRight`.
- New corner radius properties added for Annotation Layers; used to round-out the corners of each of the callouts. Note, a corner radius has now been added by default.
  - `CalloutCornerRadius` for CalloutLayer
  - `AxisAnnotationBackgroundCornerRadius` for FinalValueLayer
  - `XAxisAnnotationBackgroundCornerRadius` and `YAxisAnnotationBackgroundCornerRadius` for CrosshairLayer
- New `HorizontalViewScrollbarMode` and `VerticalViewScrollbarMode` enumeration to enable scrollbars in various ways. When paired with `IsVerticalZoomEnabled` or `IsHorizontalZoomEnabled`, you'll be able to persist or fade-in and out the scrollbars along the axes to navigate the chart.
- New `FavorLabellingScaleEnd`, determines whether the axis should favor emitting a label at the end of the scale. Only compatible with numeric axes (e.g. `IgrNumericXAxis`, `IgrNumericYAxis`, `PercentChangeAxis`).
- New `IsSplineShapePartOfRange` determines whether to include the spline shape in the axis range requested of the axis.
- New `XAxisMaximumGap`, determines the maximum allowed value for the plotted series when using `XAxisGap`. The gap determines the amount of space between columns or bars of plotted series.
- New `XAxisMinimumGapSize`, determines the minimum allowed pixel-based value for the plotted series when using `XAxisGap` to ensure there is always some spacing between each category.

### igniteui-react-grids (Data Grid)

Added New Feature - [Row Paging](./grids/grid/paging.md) which is used to split a large set of data into a sequence of pages that have similar content. With pagination, data can be displayed in a set number of rows, letting users “scroll” through their data, without needing a scroll bar. The UI for table pagination usually includes things like the current page, total pages, and clickable Previous and Next arrows/buttons that let users flip through the pages of data.

## **16.15.1 (December 2021)**

### igniteui-react-grids (Data Grid)

#### Data Grid
- Added `ValueMultiField`, of type string[], in the `IgrComboBoxColumn` to be used when your items in the drop down contain a key that consists of multiple fields.

**Note:** 
The following breaking changes were introduced

- Changed `ValueField` property from type string[] to string.

### igniteui-react-inputs (Inputs)

#### Date Picker
- Changed ValueChanged event to `SelectedValueChanged`.

#### Multi-Column ComboBox
- Changed `TextChanged` event to `TextValueChanged`.
- Changed `ValueChanged` event to `SelectedValueChanged`.

## **16.15.0 (November 2021)**

**Note:** 
Please ensure package "lit-html": "^2.0.0" or newer is added to your project for optimal compatibility.

### igniteui-react-charts (Charts)

This release introduces a few improvements and simplifications to visual design and configuration options for the geographic map and all chart components.

- Changed `YAxisLabelLocation` property's type to **YAxisLabelLocation** from **AxisLabelLocation** in `IgrFinancialChart` and `IgrCategoryChart`
- Changed `XAxisLabelLocation` property's type to **XAxisLabelLocation** from **AxisLabelLocation** in `IgrFinancialChart`
- Added `XAxisLabelLocation` property to `IgrCategoryChart`
- Added support for representing geographic series of `IgrGeographicMap` in a legend
- Added crosshair lines by default in `IgrFinancialChart` and `IgrCategoryChart`
- Added crosshair annotations by default in `IgrFinancialChart` and `IgrCategoryChart`
- Added final value annotation by default in `IgrFinancialChart`
- Added new properties in Category Chart and Financial Chart:
  - `CrosshairsLineThickness` and other properties for customizing crosshairs lines
  - `CrosshairsAnnotationXAxisBackground` and other properties for customizing crosshairs annotations
  - `FinalValueAnnotationsBackground` and other properties for customizing final value annotations
  - `AreaFillOpacity` that allow changing opacity of series fill (e.g. Area chart)
  - `MarkerThickness` that allows changing thickness of markers
- Added new properties in Category Chart, Financial Chart, Data Chart, and Geographic Map:
  - `MarkerAutomaticBehavior` that allows which marker type is assigned to multiple series in the same chart
  - `LegendItemBadgeShape` for setting badge shape of all series represented in a legend
  - `LegendItemBadgeMode` for setting badge complexity on all series in a legend
- Added new properties in Series in Data Chart and Geographic Map:
  - `LegendItemBadgeShape` for setting badge shape on specific series represented in a legend
  - `LegendItemBadgeMode` for setting badge complexity on specific series in a legend
- Changed default vertical crosshair line stroke from <span style="color:#000000">#000000</span> to <span style="color:#BBBBBB">#BBBBBB</span> in category chart and series
- Changed shape of markers to circle for all series plotted in the same chart. This can be reverted by setting chart's `MarkerAutomaticBehavior` property to `SmartIndexed` enum value
- Simplified shapes of series in chart's legend to display only circle, line, or square. This can be reverted by setting chart's `LegendItemBadgeMode` property to `MatchSeries` enum value
- Changed color palette of series and markers displayed in all charts to improve accessibility

| Old brushes/outlines | New outline/brushes |
| -------------------- | ------------------- |
| <span style="color:#8BDC5C">#8BDC5C</span> <br /><span style="color:#8B5BB1">#8B5BB1</span> <br /><span style="color:#6DB1FF">#6DB1FF</span> <br /><span style="color:#F8A15F">#F8A15F</span> <br /><span style="color:#EE5879">#EE5879</span> <br /><span style="color:#735656">#735656</span> <br /><span style="color:#F7D262">#F7D262</span> <br /><span style="color:#8CE7D9">#8CE7D9</span> <br /><span style="color:#E051A9">#E051A9</span> <br /><span style="color:#A8A8B7">#A8A8B7</span> | <span style="color:#8BDC5C">#8BDC5C</span> <br /><span style="color:#8961A9">#8961A9</span> <br /><span style="color:#6DB1FF">#6DB1FF</span> <br /><span style="color:#82E9D9">#82E9D9</span> <br /><span style="color:#EA3C63">#EA3C63</span> <br /><span style="color:#735656">#735656</span> <br /><span style="color:#F8CE4F">#F8CE4F</span> <br /><span style="color:#A8A8B7">#A8A8B7</span> <br /><span style="color:#E051A9">#E051A9</span> <br /><span style="color:#FF903B">#FF903B</span> <br /> |

### igniteui-react-grids (Data Grid)

- New Features Added:
  - [Filter Row](./grids/grid/filtering.md)
  - [Load/Save Layout Customizations](./grids/grid/state-persistence.md)
  - [GroupBy Area for column grouping](./grids/grid/groupby.md)
  - [Cell Merging](./grids/grid/cell-merging.md)
- New API:
  - Added `SelectionChanged` event. Used to detect changes on selection interactions
     e.g. Multiple row selection.
- Breaking Changes:
  - Changed grid's SummaryScope property's type to SummaryScope from `IgrDataSourceSummaryScope`
  - Changed GroupHeaderDisplayMode property's type to GroupHeaderDisplayMode from `IgrDataSourceSectionHeaderDisplayMode`

## **16.14.0 (April 2021)**
### igniteui-react-charts (Charts)

This release introduces several new and improved visual design and configuration options for all of the chart components, e.g. `IgrDataChart`, `IgrCategoryChart`, and `IgrFinancialChart`.

- Changed Bar/Column/Waterfall series to have square corners instead of rounded corners
- Changed Scatter High Density series’ colors for heat min property from <span style="color:#8a5bb1">#8a5bb1</span> to <span style="color:#000000">#000000</span>
- Changed Scatter High Density series’ colors for heat max property from <span style="color:#ee5879">#ee5879</span> to <span style="color:#ee5879">#ee5879</span>
- Changed Financial/Waterfall series’ `NegativeBrush` and `NegativeOutline` properties from <span style="color:#C62828">#C62828</span> to <span style="color:#ee5879">#ee5879</span>
- Changed marker's thickness to 2px from 1px
- Changed marker's fill to match the marker's outline for `IgrPointSeries`, `IgrBubbleSeries`, `IgrScatterSeries`, `IgrPolarScatterSeries`. You can use set `MarkerFillMode` property to Normal to undo this change
- Compressed labelling for the `IgrTimeXAxis` and `IgrOrdinalTimeXAxis`
- New Marker Properties:
  - series.`MarkerFillMode` - Can be set to `MatchMarkerOutline` so the marker depends on the outline
  - series.`MarkerFillOpacity` - Can be set to a value 0 to 1
  - series.`MarkerOutlineMode` - Can be set to `MatchMarkerBrush` so the marker's outline depends on the fill brush color
- New Series Property:
  - series.`OutlineMode` - Can be set to toggle the series outline visibility. Note, for Data Chart, the property is on the series
- New chart properties that define bleed over area introduced into the viewport when the chart is at the default zoom level. A common use case is to provide space between the axes and first/last data points. Note, the `ComputedPlotAreaMarginMode`, listed below, will automatically set the margin when markers are enabled. The others are designed to specify a `Double` to represent the thickness, where PlotAreaMarginLeft etc. adjusts the space to all four sides of the chart:
  - chart.`PlotAreaMarginLeft`
  - chart.`PlotAreaMarginTop`
  - chart.`PlotAreaMarginRight`
  - chart.`PlotAreaMarginBottom`
  - chart.`ComputedPlotAreaMarginMode`
- New Highlighting Properties
  - chart.`HighlightingMode` - Sets whether hovered or non-hovered series to fade, brighten
  - chart.`HighlightingBehavior` - Sets whether the series highlights depending on mouse position e.g. directly over or nearest item
  - Note, in previous releases the highlighting was limited to fade on hover.
- Added Highlighting Stacked, Scatter, Polar, Radial, and Shape series:
- Added Annotation layers to Stacked, Scatter, Polar, Radial, and Shape series:
- Added support for overriding the data source of individual stack fragments within a stacked series
- Added custom style events to Stacked, Scatter, Range, Polar, Radial, and Shape series
- Added support to automatically sync the vertical zoom to the series content
- Added support to automatically expanding the horizontal margins of the chart based on the initial labels displayed
- Redesigned color palette of series and markers:

| Old brushes/outlines | New outline/brushes |
| -------------------- | ------------------- |
| <span style="color:#7446B9">#7446B9</span> <br /><span style="color:#9FB328">#9FB328</span> <br /><span style="color:#F96232">#F96232</span> <br /><span style="color:#2E9CA6">#2E9CA6</span> <br /><span style="color:#DC3F76">#DC3F76</span> <br /><span style="color:#FF9800">#FF9800</span> <br /><span style="color:#3F51B5">#3F51B5</span> <br /><span style="color:#439C47">#439C47</span> <br /><span style="color:#795548">#795548</span> <br /><span style="color:#9A9A9A">#9A9A9A</span> | <span style="color:#8bdc5c">#8bdc5c</span> <br /><span style="color:#8b5bb1">#8b5bb1</span> <br /><span style="color:#6db1ff">#6db1ff</span> <br /><span style="color:#f8a15f">#f8a15f</span> <br /><span style="color:#ee5879">#ee5879</span> <br /><span style="color:#735656">#735656</span> <br /><span style="color:#f7d262">#f7d262</span> <br /><span style="color:#8ce7d9">#8ce7d9</span> <br /><span style="color:#e051a9">#e051a9</span> <br /><span style="color:#a8a8b7">#a8a8b7</span> <br /> |

for example:

|   |   |
|---|---|
|  |  |
|  |  |

#### Chart Legend

- Added horizontal `Orientation` property to ItemLegend that can be used with Bubble, Donut, and Pie Chart
- Added `LegendHighlightingMode` property - Enables series highlighting when hovering over legend items

### igniteui-react-maps (GeoMap)

**Note:** 
These features are CTP

- Added support for wrap around display of the map (scroll infinitely horizontally)
- Added support for shifting display of some map series while wrapping around the coordinate origin
- Added support for highlighting of the shape series
- Added support for some annotation layers for the shape series

### igniteui-react-grids (Data Grid)

- Added [`EditOnKeyPress`](mcp:get_api_reference?platform=react&component=IgrGrid&member=editOnKeyPress) aka Excel-style Editing, instantly begin editing when typing.
- Added [`EditModeClickAction`](mcp:get_api_reference?platform=react&component=IgrGrid&member=editModeClickAction) property - By default double-clicking is required to enter edit mode. This can be set to `SingleClick` to allow for edit mode to occur when selecting a new cell.
- Added `IgrEnterKeyBehaviors` property - aka Excel-style Navigation (Enter Behavior) – controls the behavior of the enter key, e.g. Options are (none, edit, move up, down, left, right)
- Added `IgrEnterKeyBehaviorAfterEdit` property - While in edit-mode, this property controls when enter is pressed, e.g. Options are (moves to the cell below, above, right, left)
- Added [`SelectAllRows`](mcp:get_api_reference?platform=react&component=IgrGrid&member=selectAllRows) - method.
- Added Row Range Selection - With [`GridSelectionMode`](mcp:get_api_reference?platform=react&component=GridSelectionMode) property set to MultipleRow the following new functionality is now included:
  - Click and drag to select rows
  - <kbd>SHIFT</kbd> and click to select multiple rows.
  - <kbd>SHIFT</kbd> and press the <kbd>↑</kbd> + <kbd>↓</kbd> arrow keys to select multiple rows.
- Pressing space bar toggles selection of active row via [`GridSelectionMode`](mcp:get_api_reference?platform=react&component=GridSelectionMode) property set to MultipleRow or SingleRow
- Added Column Summaries to Column Options Dialog.

### igniteui-react-inputs (Inputs)

#### Date Picker

- [`ShowTodayButton`](mcp:get_api_reference?platform=react&component=IgrDatePicker&member=showTodayButton) - Toggles Today button visibility
- [`Label`](mcp:get_api_reference?platform=react&component=IgrDatePicker&member=label) - Adds a label above the date value
- [`Placeholder`](mcp:get_api_reference?platform=react&component=IgrDatePicker&member=placeholder) property - adds custom text when no value is selected
- `FormatString` - Customize input date string e.g. (`yyyy-MM-dd`)
- [`DateFormat`](mcp:get_api_reference?platform=react&component=IgrDatePicker&member=dateFormat) - Specifies whether to display selected dates as LongDate or ShortDate
- [`FirstDayOfWeek`](mcp:get_api_reference?platform=react&component=IgrDatePicker&member=firstDayOfWeek) - Specifies first day of week
- [`FirstWeekOfYear`](mcp:get_api_reference?platform=react&component=IgrDatePicker&member=firstWeekOfYear) - Specifies when to display first week of the year, e.g. (First Full Week, First Four day Week)
- [`ShowWeekNumbers`](mcp:get_api_reference?platform=react&component=IgrDatePicker&member=showWeekNumbers) - Toggles Week number visibility
- [`MinDate`](mcp:get_api_reference?platform=react&component=IgrDatePicker&member=minDate) & [`MaxDate`](mcp:get_api_reference?platform=react&component=IgrDatePicker&member=maxDate) - Date limits, specifying a range of available selectable dates.
- Added Accessibility

## **16.12.3 (November 2020)**

### igniteui-react-grids (Data Grid)

**Note:** 
These breaking changes were introduce in the grid package.

- Changed name of PropertyPath

The data grid component property `propertyPath` has been renamed to `field`. This applies to all Column types, GroupDescription, SortDescription & SummaryDescription.

```tsx
 <IgrTextColumn field="Name"/>
```

```ts
import { IgrColumnSummaryDescription, IgrColumnSortDescription, IgrColumnGroupDescription } from 'igniteui-react-data-grids'
const productCount = new IgrColumnSummaryDescription();
productCount.field = "ProductName";
const colSortDesc = new IgrColumnSortDescription();
colSortDesc.field = "UnitsInStock";
const income = new IgrColumnGroupDescription();
income.field = "Income";
```

## **16.12.2 (April 2020)**

### igniteui-react-grids (Data Grid)

- Changed Name of Live Grid

The data grid component and it's corresponding module's names have changed from "LiveGrid" to "DataGrid".

**Note:** 
These breaking changes were introduce in these packages and components only:

The new code for importing the grid and it's corresponding module is:

```ts
import { IgrDataGrid } from "igniteui-react-data-grids";
import { IgrDataGridModule } from 'igniteui-react-data-grids';
```

- Required Peer Dependency for Data Grid

The data grid component requires the "inputs" package.

```cmd
npm install --save igniteui-react-inputs
```

## **16.11.7**

- Changed Import Statements

Import statements have been simplified to use just package names instead of full paths to API classes and enums.

**Note:** 
These breaking changes were introduce in these packages and components only:

| Affected Packages | Affected Components |
| ------------------|---------------------|
| <a href="https://www.npmjs.com/package/igniteui-react-excel/v/16.11.7" target="_blank">igniteui-react-excel</a> | [Excel Library](./excel-library.md)  |
| <a href="https://www.npmjs.com/package/igniteui-react-spreadsheet/v/16.11.7" target="_blank">igniteui-react-spreadsheet</a> | [Spreadsheet](./spreadsheet-overview.md) |
| <a href="https://www.npmjs.com/package/igniteui-react-maps/v/16.11.7" target="_blank">igniteui-react-maps</a> | [Geo Map](./geo-map.md), [Treemap](./charts/types/treemap-chart.md)  |
| <a href="https://www.npmjs.com/package/igniteui-react-gauges/v/16.11.7" target="_blank">igniteui-react-gauges</a> |  [Bullet Graph](./bullet-graph.md), [Linear Gauge](./linear-gauge.md), [Radial Gauge](./radial-gauge.md)   |
| <a href="https://www.npmjs.com/package/igniteui-react-charts/v/16.11.7" target="_blank">igniteui-react-charts</a>| Category Chart, Data Chart, Donut Chart, Financial Chart], Pie Chart, [Zoom Slider](./zoomslider-overview.md)  |
| <a href="https://www.npmjs.com/package/igniteui-react-core/v/16.11.7" target="_blank">igniteui-react-core</a> | all classes and enums  |
| <a href="https://www.npmjs.com/package/igniteui-react-grids/v/16.11.7" target="_blank">igniteui-react-grids</a> | [Data Grid](./grids/data-grid.md) |

- Code After Changes

Now, you need to use just package names instead of full paths to API classes and enums.

Please also note that the name of the Data Grid component and its corresponding modules have also changed.

```ts
// gauges:
import { IgrLinearGauge } from "igniteui-react-gauges";
import { IgrLinearGaugeModule } from "igniteui-react-gauges";
import { IgrLinearGraphRange } from "igniteui-react-gauges";
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';
import { IgrRadialGaugeRange } from 'igniteui-react-gauges';
import { SweepDirection } from 'igniteui-react-core';
// charts:
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
// maps:
import { IgrGeographicMap } from "igniteui-react-maps";
import { IgrGeographicMapModule } from "igniteui-react-maps";
// grids:
import { IgrLiveGrid } from "igniteui-react-data-grids";
import { IgrLiveGridModule } from 'igniteui-react-data-grids';
```

- Code Before Changes

Before, you had to import using full paths to API classes and enums:

```ts
// gauges:
import { IgrLinearGauge } from "igniteui-react-gauges/ES5/igr-linear-gauge";
import { IgrLinearGaugeModule } from "igniteui-react-gauges/ES5/igr-linear-gauge-module";
import { IgrLinearGraphRange } from "igniteui-react-gauges/ES5/igr-linear-graph-range";

import { IgrRadialGauge } from "igniteui-react-gauges/ES5/igr-radial-gauge";
import { IgrRadialGaugeModule } from "igniteui-react-gauges/ES5/igr-radial-gauge-module";
import { IgrRadialGaugeRange } from "igniteui-react-gauges/ES5/igr-radial-gauge-range";
import { SweepDirection } from "igniteui-react-core/ES5/SweepDirection";

// charts:
import { IgrFinancialChart } from "igniteui-react-charts/ES5/igr-financial-chart";
import { IgrFinancialChartModule } from "igniteui-react-charts/ES5/igr-financial-chart-module";
import { IgrDataChart } from "igniteui-react-charts/ES5/igr-data-chart";
import { IgrDataChartCoreModule } from "igniteui-react-charts/ES5/igr-data-chart-core-module";

// maps:
import { IgrGeographicMap } from "igniteui-react-maps/ES5/igr-geographic-map";
import { IgrGeographicMapModule } from "igniteui-react-maps/ES5/igr-geographic-map-module";

// grids:
import { IgrLiveGrid } from "igniteui-react-data-grids/ES5/igr-live-grid";
import { IgrLiveGridModule } from 'igniteui-react-data-grids/ES5/igr-live-grid-module';
```

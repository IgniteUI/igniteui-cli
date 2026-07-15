# Sizing - Grid Width, Height, Column Sizing & Cell Spacing

> **Part of the [`igniteui-blazor-grids`](../SKILL.md) skill hub.**
> For grid setup and column configuration — see [`structure.md`](./structure.md).

## Contents

- [Grid Width](#grid-width)
- [Grid Height](#grid-height)
- [Column Sizing](#column-sizing)
- [Row Height](#row-height)
- [Cell Spacing (CSS Variables)](#cell-spacing-css-variables)
- [Key Rules](#key-rules)

---

## Grid Width

### Pixel width

```razor
<IgbGrid Data="data" PrimaryKey="Id" Width="800px" Height="500px">
    ...
</IgbGrid>
```

### Percentage width

```razor
<IgbGrid Data="data" PrimaryKey="Id" Width="100%" Height="500px">
    ...
</IgbGrid>
```

### Default width

When `Width` is not set, the grid defaults to `100%` of its parent container.

### Key behavior

- If the total column width exceeds the grid width, a horizontal scrollbar appears and column virtualization activates.
- If the total column width is less than the grid width, columns stretch to fill (unless explicit widths are set).

---

## Grid Height

### Pixel height

```razor
<IgbGrid Data="data" PrimaryKey="Id" Width="100%" Height="600px">
    ...
</IgbGrid>
```

### Percentage height

```razor
<!-- Parent must have a defined height for percentage to work -->
<div style="height: 80vh;">
    <IgbGrid Data="data" PrimaryKey="Id" Width="100%" Height="100%">
        ...
    </IgbGrid>
</div>
```

### No height (null/unset)

When `Height` is not set, the grid renders **all rows** without a vertical scrollbar. This disables row virtualization.

```razor
<!-- No Height: renders all rows, no virtualization -->
<IgbGrid Data="data" PrimaryKey="Id" Width="100%">
    ...
</IgbGrid>
```

> **Warning:** Without a height, large datasets will render all rows to the DOM, causing severe performance degradation. Always set `Height` for datasets with more than 50 rows.

### Auto height

The grid does not have a built-in "auto height" mode. To fit a limited number of rows, calculate the height:

```razor
@{
    var rowCount = Math.Min(data.Count, 20);
    var gridHeight = $"{50 + rowCount * 50}px"; // 50px header + 50px per row
}

<IgbGrid Data="data" PrimaryKey="Id" Width="100%" Height="@gridHeight">
    ...
</IgbGrid>
```

---

## Column Sizing

### Fixed pixel width

```razor
<IgbColumn Field="Id" Header="ID" Width="80px" />
<IgbColumn Field="Name" Header="Name" Width="250px" />
<IgbColumn Field="Department" Header="Department" Width="200px" />
```

### Percentage width

```razor
<IgbColumn Field="Id" Header="ID" Width="10%" />
<IgbColumn Field="Name" Header="Name" Width="40%" />
<IgbColumn Field="Department" Header="Department" Width="25%" />
<IgbColumn Field="Salary" Header="Salary" Width="25%" />
```

### Auto-size (fit content)

No explicit width - the column auto-sizes:

```razor
<IgbColumn Field="Name" Header="Name" />
```

Without a `Width`, the grid distributes available space proportionally among columns.

### Min/Max width constraints

```razor
<IgbColumn Field="Name" Header="Name" Width="200px" MinWidth="100px" MaxWidth="400px" Resizable="true" />
```

- `MinWidth` prevents the column from shrinking below a threshold (useful with resizing).
- `MaxWidth` prevents the column from growing beyond a threshold.

### Column resizing

```razor
<IgbGrid Data="data" PrimaryKey="Id">
    <IgbColumn Field="Name" Header="Name" Width="200px" Resizable="true" />
    <IgbColumn Field="Department" Header="Department" Width="200px" Resizable="true" />
    <IgbColumn Field="Salary" Header="Salary" Width="150px" Resizable="true" />
</IgbGrid>
```

Users can drag column borders to resize. Combine with `MinWidth` and `MaxWidth` for constrained resizing.

### Auto-size column to fit content

Programmatically auto-size a column to fit its longest cell value:

```razor
@code {
    private IgbGrid grid = default!;

    private async Task AutoSizeNameColumn()
    {
        var column = grid.GetColumnByName("Name");
        await grid.AutoSizeColumnWidthAsync(column);
    }

    private async Task AutoSizeAllColumns()
    {
        await grid.AutoSizeColumnsWidthAsync();
    }
}
```

### Column auto-width on init

```razor
<IgbColumn Field="Name" Header="Name" AutoSize="true" />
```

When `AutoSize="true"`, the column width adjusts on initial render to fit the header and visible content.

---

## Row Height

### Default row height

The default row height depends on the theme's display density. Use `DisplayDensity` on the grid:

```razor
<IgbGrid Data="data" PrimaryKey="Id" DisplayDensity="DisplayDensity.Comfortable">
    ...
</IgbGrid>
```

| Display Density | Approximate Row Height |
|---|---|
| `Comfortable` | 50px (default) |
| `Cosy` | 40px |
| `Compact` | 32px |

### Custom row height

Use CSS to override row height:

```css
igc-grid::part(tbody-content) igc-grid-row {
    height: 60px;
}
```

Or use `RowHeight` parameter:

```razor
<IgbGrid Data="data" PrimaryKey="Id" RowHeight="60">
    ...
</IgbGrid>
```

---

## Cell Spacing (CSS Variables)

Control cell padding and spacing using CSS custom properties:

```css
igc-grid {
    --ig-grid-cell-padding-block: 12px;     /* top and bottom padding */
    --ig-grid-cell-padding-inline: 16px;    /* left and right padding */
}
```

### Available CSS variables for grid spacing

| CSS Variable | Description | Default |
|---|---|---|
| `--ig-grid-cell-padding-block` | Vertical cell padding | Theme-dependent |
| `--ig-grid-cell-padding-inline` | Horizontal cell padding | Theme-dependent |
| `--ig-size` | Overall component size (affects row height, cell padding) | `var(--ig-size-large)` |

### Sizing via `--ig-size`

The grid respects the global `--ig-size` CSS variable for responsive sizing:

```css
/* Compact grid */
igc-grid {
    --ig-size: var(--ig-size-small);
}

/* Medium grid */
igc-grid {
    --ig-size: var(--ig-size-medium);
}

/* Large grid (default) */
igc-grid {
    --ig-size: var(--ig-size-large);
}
```

### Scoped sizing

Apply different sizing to a specific grid:

```razor
<IgbGrid Data="data" PrimaryKey="Id" class="compact-grid">
    ...
</IgbGrid>

<style>
    .compact-grid {
        --ig-size: var(--ig-size-small);
    }
</style>
```

---

## Key Rules

1. **Always set `Height` for performance** - without it, virtualization is disabled and all rows render to the DOM.
2. **Percentage height needs a sized parent** - `Height="100%"` only works if the parent element has an explicit height.
3. **Box model is border-box** - column widths include padding and borders.
4. **Horizontal scroll triggers when columns overflow** - if total column width > grid width, a horizontal scrollbar appears.
5. **`MinWidth` and `MaxWidth` constrain resizing** - always set them when `Resizable="true"` for predictable UX.
6. **`--ig-size` controls the overall density** - it affects row height, cell padding, header height, and internal spacing.
7. **Column virtualization requires column widths** - without widths, the grid cannot calculate which columns are outside the viewport.
8. **Auto-size is a one-time operation** - `AutoSize="true"` on a column fits content at initial render; it doesn't update dynamically as data changes.
9. **Row height consistency** - all rows in a grid have the same height. Variable row height is not supported.
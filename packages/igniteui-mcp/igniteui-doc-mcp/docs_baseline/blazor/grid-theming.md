---
title: "Blazor Grid Theming - Ignite UI for Blazor"
description: A Ignite UI for Blazor Grid theme can be built from just a background, foreground and accent color. Generate the derived --ig-grid-* tokens with grid-theme(), the Theming MCP or the theme playground.
keywords: "Blazor Grid theming, Blazor Grid styling, grid theme, grid-theme, derived tokens, theming mcp, css variables, Ignite UI for Blazor, Infragistics"
license: commercial
_canonicalLink: "grids/grid/theming"
llms:
  description: "A Ignite UI for Blazor Grid theme can be built from a background, foreground and accent color, with every other --ig-grid-* color derived. Generate the derived tokens with grid-theme() (Sass), the Theming MCP or the theme playground; without them each property is independent."
_componentKey: Grid
_tocName: Theming
_premium: true
---
# Blazor Grid Theming

A Grid theme can be built from just a **background**, **foreground** and **accent** color, with every other color derived from them - the header, the rows, the borders, the summaries, the toolbar, the paginator and the filtering popups. The derived colors don't need to be written by hand; generate them with the [Theming MCP](../../ai/theming-mcp.md) or the [theme playground](#try-it).

The derivation lives in the generated theme, not in the component. Out of the box, each `--ig-grid-*` property is independent and changes only its own part of the Grid - see [Fine-tune individual properties](#fine-tune-individual-properties).

**Note:** 
There is no separate set of tokens per grid. The Grid, Tree Grid, Hierarchical Grid and Pivot Grid all read the same `--ig-grid-*` custom properties, so the same theme applies to any of them without modification.

## Blazor Grid Theming Example

The four themes below are custom - written for this sample, not shipped with the library. They share one generated block of derived tokens, so each theme only sets the primary tokens plus a few surface and border colors. Switching between them shows how far those few values reach in a generated theme.

```razor
@using IgniteUI.Blazor.Controls

@inject IJSRuntime JS

<link href="_content/IgniteUI.Blazor/themes/light/material.css" rel="stylesheet" />
<link href="_content/IgniteUI.Blazor/themes/grid/light/material.css" rel="stylesheet" />

<IgbThemeProvider Theme="Theme.Material" Variant="ThemeVariant.Light">
    <div class="container sample ig-typography">
        <div class="grid-theming-sample">
            <div class="theme-picker">
                <span class="theme-picker__label">Pick a theme</span>
                <IgbButtonGroup Selection="ButtonGroupSelection.SingleRequired" Select="OnThemeSelect">
                    <IgbToggleButton Value="theme-studio" Selected="@(ActiveTheme == "theme-studio")">
                        <span class="theme-swatch theme-swatch--studio"></span>Studio
                    </IgbToggleButton>
                    <IgbToggleButton Value="theme-ledger" Selected="@(ActiveTheme == "theme-ledger")">
                        <span class="theme-swatch theme-swatch--ledger"></span>Ledger
                    </IgbToggleButton>
                    <IgbToggleButton Value="theme-editorial" Selected="@(ActiveTheme == "theme-editorial")">
                        <span class="theme-swatch theme-swatch--editorial"></span>Editorial
                    </IgbToggleButton>
                    <IgbToggleButton Value="theme-midnight" Selected="@(ActiveTheme == "theme-midnight")">
                        <span class="theme-swatch theme-swatch--midnight"></span>Midnight
                    </IgbToggleButton>
                </IgbButtonGroup>
                <p class="theme-picker__hint">
                    Custom themes, not built-in: each is a set of <code>--ig-grid-*</code> variables
                    with its own background and accent.
                </p>
            </div>
            <div class="themed-grid @ActiveTheme">
                <IgbGrid
                AutoGenerate="false"
                Data="ThemingInvoices"
                Width="100%"
                Height="560px"
                AllowFiltering="true"
                FilterMode="FilterMode.ExcelStyleFilter"
                RowSelection="GridSelectionMode.Multiple"
                ColumnSelection="GridSelectionMode.Multiple"
                ColumnInitScript="GridThemingColumnInit">
                    <IgbGridToolbar>
                        <IgbGridToolbarTitle>Invoices</IgbGridToolbarTitle>
                        <IgbGridToolbarActions>
                            <IgbGridToolbarPinning></IgbGridToolbarPinning>
                            <IgbGridToolbarHiding></IgbGridToolbarHiding>
                        </IgbGridToolbarActions>
                    </IgbGridToolbar>
                    <IgbColumn
                    Field="ShipCountry"
                    Header="Country"
                    Width="160px"
                    Sortable="true"
                    Filterable="true"
                    Pinned="true">
                    </IgbColumn>
                    <IgbColumn
                    Field="ShipCity"
                    Header="City"
                    Width="160px"
                    Sortable="true"
                    Filterable="true">
                    </IgbColumn>
                    <IgbColumn
                    Field="ShipName"
                    Header="Ship Name"
                    Width="240px"
                    Sortable="true"
                    Filterable="true">
                    </IgbColumn>
                    <IgbColumn
                    Field="Salesperson"
                    Header="Salesperson"
                    Width="200px"
                    Sortable="true"
                    Filterable="true">
                    </IgbColumn>
                    <IgbColumn
                    Field="UnitPrice"
                    Header="Unit Price"
                    Width="140px"
                    DataType="GridColumnDataType.Number"
                    Sortable="true"
                    HasSummary="true"
                    FormatterScript="GridThemingCurrencyFormatter"
                    SummaryFormatterScript="GridThemingSummaryFormatter">
                    </IgbColumn>
                    <IgbColumn
                    Field="Quantity"
                    Header="Quantity"
                    Width="140px"
                    DataType="GridColumnDataType.Number"
                    Sortable="true">
                    </IgbColumn>
                    <IgbPaginator
                    PerPage="10">
                    </IgbPaginator>
                </IgbGrid>
            </div>
        </div>
    </div>
</IgbThemeProvider>

@code {
    public string ActiveTheme { get; set; } = "theme-studio";
    public void OnThemeSelect(IgbComponentValueChangedEventArgs args)
    {
        ActiveTheme = args.Detail;
    }

    private ThemingInvoices _themingInvoices = null;
    public ThemingInvoices ThemingInvoices
    {
        get
        {
            if (_themingInvoices == null)
            {
                _themingInvoices = new ThemingInvoices();
            }
            return _themingInvoices;
        }
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class ThemingInvoicesItem
{
    public string ShipCountry { get; set; }
    public string ShipCity { get; set; }
    public string ShipName { get; set; }
    public string Salesperson { get; set; }
    public double UnitPrice { get; set; }
    public double Quantity { get; set; }
}

public class ThemingInvoices
    : List<ThemingInvoicesItem>
{
    public ThemingInvoices()
    {
        this.Add(new ThemingInvoicesItem() { ShipCountry = @"Germany", ShipCity = @"Berlin", ShipName = @"Alfred's Futterkiste", Salesperson = @"Margaret Peacock", UnitPrice = 43.9, Quantity = 20 });
        this.Add(new ThemingInvoicesItem() { ShipCountry = @"Germany", ShipCity = @"Berlin", ShipName = @"Alfred's Futterkiste", Salesperson = @"Margaret Peacock", UnitPrice = 10, Quantity = 6 });
        this.Add(new ThemingInvoicesItem() { ShipCountry = @"Germany", ShipCity = @"Berlin", ShipName = @"Alfred's Futterkiste", Salesperson = @"Margaret Peacock", UnitPrice = 18, Quantity = 15 });
        // ... 319 more items
    }
}
```

## Create a theme

A generated theme is a block of `--ig-grid-*` custom properties declared on a class. The block holds the three primary tokens, plus every other token written as a CSS expression over them:

```css
.my-grid {
  --ig-grid-background: #08002e;
  --ig-grid-accent-color: #ff7d52;
  --ig-grid-foreground: hsla(from color(from var(--ig-grid-background) var(--y-contrast)) h 0 l/1);
  --ig-grid-header-background: color-mix(in srgb, var(--ig-grid-foreground) 6%, var(--ig-grid-background));
  --ig-grid-header-text-color: var(--ig-grid-foreground);
  --ig-grid-row-hover-background: color-mix(in srgb, var(--ig-grid-accent-color) 8%, var(--ig-grid-row-odd-background));
  /* … and the rest of the token set */
}
```

Pick the route that fits your toolchain - each one produces this same token set.

### Theming MCP

The [Ignite UI Theming MCP](../../ai/theming-mcp.md) generates the theme through your AI assistant. Ask for CSS output and it returns ready-to-use custom properties, so no local Sass toolchain is needed.

This is the recommended route for Blazor projects. Name the platform in your prompt:

> _"Using the Blazor platform, create a CSS grid theme for the `.my-grid` class with background #08002e and accent color #ff7d52."_

Add the generated CSS to your `wwwroot/css/app.css`.

### Theme playground

The [theme playground](#try-it) at the end of this topic generates the token set for any colors you pick. Select **Show code** to copy the complete CSS block.

### Keep the theme up to date

A generated CSS block is a snapshot of the library version it was generated for. Regenerate it after a Ignite UI for Blazor upgrade to pick up any new changes to the grid theme. With the Theming MCP or the playground, run the same prompt or colors again and replace the block.

## Apply the theme

Apply the class to the Grid:

```razor
<IgbGrid Class="my-grid"></IgbGrid>
```

With the class applied, the theme is complete. The Grid is now dark indigo with a coral accent, and the text, header, row borders, hover states, selection tints and popup chrome have all been computed from those two values. From here on, the primary tokens are all you need to change.

**Note:** 
Declare the primary tokens on the same element as the derived tokens, or on one of its ancestors. A custom property's `var()` references are resolved on the element where the property is declared, so primary tokens set on a descendant of that element are ignored by the derived block.

## Primary tokens

In a generated theme, the Grid is built from three primary tokens and every other color follows them.

| Token | What it controls in a generated theme |
| -- | -- |
| `--ig-grid-background` | The surface the whole component is built on. Every other surface and the default foreground are derived from it. |
| `--ig-grid-foreground` | Text and icons. Derived from the background by contrast when not set. |
| `--ig-grid-accent-color` | Interactive color: sort indicators, selection, hover tints, focus. |

`--ig-grid-foreground` is listed as primary but rarely needs setting. Left alone, it is chosen for contrast against the background, so a dark background produces light text and a light one produces dark text without a second declaration.

## How derivation works

The derived tokens in a generated theme are not fixed colors. Each one is a CSS expression over the primary tokens:

```css
.my-grid {
  --ig-grid-foreground: hsla(from color(from var(--ig-grid-background) var(--y-contrast)) h 0 l/1);
  --ig-grid-header-background: color-mix(in srgb, var(--ig-grid-foreground) 6%, var(--ig-grid-background));
  --ig-grid-row-hover-background: color-mix(in srgb, var(--ig-grid-accent-color) 8%, var(--ig-grid-row-odd-background));
  --ig-grid-sorted-header-icon-color: hsl(from var(--ig-grid-accent-color) h s l/0.7);
}
```

Two consequences follow. First, changing a primary token re-computes everything downstream, including at runtime through CSS custom properties. Second, the relationships hold whatever value you supply, so a theme cannot fall out of step with itself. Both hold only while the generated tokens are declared - remove them and every property goes back to being independent.

## Going deeper

In a generated theme, some tokens are derivation roots in their own right. Declaring one detaches it from the background, and whatever sits on it should derive from the new value instead.

`--ig-grid-header-background` is the clearest example. Left alone it is mixed from `--ig-grid-background`, and the header text follows `--ig-grid-foreground`. Declare it, and the header text is re-derived to take contrast against the header background itself:

```css
.my-grid {
  --ig-grid-header-background: #ff7d52;
  --ig-grid-header-text-color: hsla(from color(from var(--ig-grid-header-background) var(--y-contrast)) h 0 l/1);
}
```

**Note:** 
Reach for these only when you want a surface to stop tracking the background. Most derived tokens are best left alone - overriding one pins a value that would otherwise stay in step with the rest of the theme.

## Structure

Color is only half of a theme. Density and roundness are controlled by global design-system tokens rather than grid tokens, so you set them alongside the grid tokens:

```css
.my-grid {
  --ig-size: var(--ig-size-small);   /* small | medium | large */
  --ig-radius-factor: 0;             /* 0 to 1 */
}
```

Grid lines are theme tokens too. To hide one, tint it to the surface behind it rather than removing it, so the row metrics do not change between themes:

```css
.my-grid {
  /* horizontal dividers, blended away */
  --ig-grid-row-border-color: var(--ig-grid-background);
  /* vertical dividers, drawn in the same color the theme derives for rows */
  --ig-grid-body-column-border-color-odd: hsl(from color-mix(in srgb, var(--ig-grid-foreground) 16%, var(--ig-grid-background)) h s l/0.38);
  --ig-grid-body-column-border-color-even: hsl(from color-mix(in srgb, var(--ig-grid-foreground) 16%, var(--ig-grid-background)) h s l/0.38);
}
```

## Fine-tune individual properties

Out of the box, every `--ig-grid-*` property is independent. Each one resolves against the base palette - in the Material theme, for example, the header reads `var(--ig-grid-header-background, var(--ig-gray-100))` - so a single override changes only that part of the Grid and leaves the rest of the design untouched. This makes targeted adjustments safe and predictable:

```css
.my-grid {
  --ig-grid-header-background: #120b3d;
  --ig-grid-header-text-color: #ffffff;
}
```

The same independence applies to the primary tokens. Without a generated theme, `--ig-grid-background` and `--ig-grid-accent-color` are ordinary properties and do **not** carry into the rest of the Grid:

```css
/* The background changes, the header stays gray. */
.my-grid {
  --ig-grid-background: #08002e;
  --ig-grid-accent-color: #ff7d52;
}
```

To restyle the whole Grid from a few colors, [create a theme](#create-a-theme).

## Try it

Change a color and watch it reach the header, the rows, the summaries, the paginator and the filtering popups. Switch grids to confirm the same tokens serve all of them, then select **Show code** to copy the complete CSS block - the primary tokens together with every derived token.

```razor
@using IgniteUI.Blazor.Controls
@using System.Text.RegularExpressions

@inject IJSRuntime JS

<link href="_content/IgniteUI.Blazor/themes/light/material.css" rel="stylesheet" />
<link href="_content/IgniteUI.Blazor/themes/grid/light/material.css" rel="stylesheet" />

<IgbThemeProvider Theme="Theme.Material" Variant="ThemeVariant.Light">
    <div class="container sample ig-typography">
        <IgbIcon @ref="IconRegistrar" IconName="content_copy" Collection="material" style="display: none;"></IgbIcon>
        <div class="playground">
            <aside class="playground__rail">
                <IgbAccordion>
                    <IgbExpansionPanel>
                        <span slot="title">Grid Type</span>
                        <p class="playground__hint">
                            One set of grid tokens serves every grid. Switch here to see the same
                            tokens applied to a different one.
                        </p>
                        <IgbButtonGroup Alignment="ContentOrientation.Vertical" Selection="ButtonGroupSelection.SingleRequired" Select="OnPreviewSelect">
                            <IgbToggleButton Value="grid" Selected="@(Preview == "grid")">Flat</IgbToggleButton>
                            <IgbToggleButton Value="tree" Selected="@(Preview == "tree")">Tree</IgbToggleButton>
                            <IgbToggleButton Value="hierarchical" Selected="@(Preview == "hierarchical")">Hierarchical</IgbToggleButton>
                            <IgbToggleButton Value="pivot" Selected="@(Preview == "pivot")">Pivot</IgbToggleButton>
                        </IgbButtonGroup>
                    </IgbExpansionPanel>
                    <IgbExpansionPanel Open="true">
                        <span slot="title">Primary tokens</span>
                        <p class="playground__hint">
                            Start here. Background and accent are enough to theme the whole
                            grid &mdash; header, rows, icons and popups all derive from them.
                            Foreground is picked for contrast automatically; set it only to
                            override that.
                        </p>
                        <div class="playground__fields">
                            @foreach (var token in PrimaryTokens)
                            {
                                @ColorField(token)
                            }
                        </div>
                    </IgbExpansionPanel>
                    <IgbExpansionPanel>
                        <span slot="title">Header</span>
                        <p class="playground__hint">
                            Optional. The header normally derives from the background.
                            Declare one here and it detaches, becoming a root of its own &mdash;
                            its text then takes contrast against the new header rather
                            than following the grid foreground.
                        </p>
                        <div class="playground__fields">
                            @foreach (var token in HeaderTokens)
                            {
                                @ColorField(token)
                            }
                        </div>
                    </IgbExpansionPanel>
                    <IgbExpansionPanel Open="true">
                        <span slot="title">Structure</span>
                        <div class="playground__fields">
                            <div class="playground__control">
                                <span class="playground__label">Density</span>
                                <IgbButtonGroup Alignment="ContentOrientation.Vertical" Selection="ButtonGroupSelection.SingleRequired" Select="OnSizeSelect">
                                    <IgbToggleButton Value="small" Selected="@(Size == "small")">Small</IgbToggleButton>
                                    <IgbToggleButton Value="medium" Selected="@(Size == "medium")">Medium</IgbToggleButton>
                                    <IgbToggleButton Value="large" Selected="@(Size == "large")">Large</IgbToggleButton>
                                </IgbButtonGroup>
                            </div>
                            <div class="playground__control">
                                <span class="playground__label">Roundness</span>
                                <IgbButtonGroup Alignment="ContentOrientation.Vertical" Selection="ButtonGroupSelection.SingleRequired" Select="OnRoundnessSelect">
                                    <IgbToggleButton Value="0" Selected="@(RadiusFactor == "0")">Square</IgbToggleButton>
                                    <IgbToggleButton Value="0.4" Selected="@(RadiusFactor == "0.4")">Soft</IgbToggleButton>
                                    <IgbToggleButton Value="1" Selected="@(RadiusFactor == "1")">Round</IgbToggleButton>
                                </IgbButtonGroup>
                            </div>
                            <IgbSwitch Checked="@HorizontalDividers" Change="@(e => { HorizontalDividers = e.Detail.Checked; })">Horizontal dividers</IgbSwitch>
                            <IgbSwitch Checked="@VerticalDividers" Change="@(e => { VerticalDividers = e.Detail.Checked; })">Vertical dividers</IgbSwitch>
                            <IgbSwitch Checked="@Zebra" Change="@(e => { Zebra = e.Detail.Checked; })">Zebra rows</IgbSwitch>
                            <p class="playground__hint">
                                Both dividers use the same derived colour, and switching one
                                off tints it to the surface rather than removing it, so the
                                row metrics never change.
                            </p>
                        </div>
                    </IgbExpansionPanel>
                </IgbAccordion>
                <div class="playground__actions">
                    <IgbButton Variant="ButtonVariant.Outlined" @onclick="Reset">Reset</IgbButton>
                    <IgbButton Variant="ButtonVariant.Contained" @onclick="ShowCode">Show code</IgbButton>
                </div>
            </aside>
            <section class="playground__preview">
                <div class="playground__stage" id="gridThemePlaygroundStage" style="@StageStyle">
                    @switch (Preview)
                    {
                        case "grid":
                            <IgbGrid Data="ThemingInvoices" AutoGenerate="false" Width="100%" Height="100%"
                                AllowFiltering="true" FilterMode="FilterMode.ExcelStyleFilter" RowSelection="GridSelectionMode.Multiple"
                                ColumnInitScript="GridThemePlaygroundColumnInit">
                                <IgbColumn Field="ShipCountry" Header="Country" Width="150px" Sortable="true" Filterable="true" Groupable="true"></IgbColumn>
                                <IgbColumn Field="ShipCity" Header="City" Width="150px" Sortable="true" Filterable="true" Groupable="true"></IgbColumn>
                                <IgbColumn Field="ShipName" Header="Ship Name" Width="220px" Sortable="true" Filterable="true"></IgbColumn>
                                <IgbColumn Field="Salesperson" Header="Salesperson" Width="180px" Sortable="true" Filterable="true"></IgbColumn>
                                <IgbColumn Field="Quantity" Header="Quantity" Width="120px" DataType="GridColumnDataType.Number"
                                    Sortable="true" HasSummary="true" SummaryFormatterScript="GridThemePlaygroundSummaryFormatter"></IgbColumn>
                                <IgbPaginator PerPage="50"></IgbPaginator>
                            </IgbGrid>
                            break;
                        case "tree":
                            <IgbTreeGrid Data="EmployeesFlatAvatars" PrimaryKey="ID" ForeignKey="ParentID"
                                AutoGenerate="false" Width="100%" Height="100%"
                                AllowFiltering="true" FilterMode="FilterMode.ExcelStyleFilter" RowSelection="GridSelectionMode.Multiple">
                                <IgbColumn Field="Name" Width="260px" Sortable="true" Filterable="true"
                                    BodyTemplateScript="GridThemePlaygroundAvatarCellTemplate"></IgbColumn>
                                <IgbColumn Field="Title" DataType="GridColumnDataType.String" Sortable="true" Filterable="true"></IgbColumn>
                                <IgbColumn Field="Age" DataType="GridColumnDataType.Number" Sortable="true" Filterable="true"></IgbColumn>
                                <IgbColumn Field="HireDate" DataType="GridColumnDataType.Date" Sortable="true" Filterable="true"></IgbColumn>
                            </IgbTreeGrid>
                            break;
                        case "hierarchical":
                            <IgbHierarchicalGrid Data="SingersNestedData" AutoGenerate="false" Width="100%" Height="100%"
                                AllowFiltering="true" FilterMode="FilterMode.ExcelStyleFilter">
                                <IgbColumn Field="Artist" Sortable="true" Filterable="true"></IgbColumn>
                                <IgbColumn Field="Debut" DataType="GridColumnDataType.Number" Sortable="true" Filterable="true"></IgbColumn>
                                <IgbColumn Field="GrammyNominations" Header="Nominations" Sortable="true" Filterable="true"></IgbColumn>
                                <IgbColumn Field="GrammyAwards" Header="Awards" Sortable="true" Filterable="true"></IgbColumn>
                                <IgbRowIsland ChildDataKey="Albums" AutoGenerate="false">
                                    <IgbColumn Field="Album" Sortable="true"></IgbColumn>
                                    <IgbColumn Field="LaunchDate" Header="Launch Date" DataType="GridColumnDataType.Date" Sortable="true"></IgbColumn>
                                    <IgbColumn Field="BillboardReview" Header="Review" Sortable="true"></IgbColumn>
                                </IgbRowIsland>
                            </IgbHierarchicalGrid>
                            break;
                        case "pivot":
                            <IgbPivotGrid Data="PivotDataFlat" PivotConfiguration="PivotConfig"
                                Width="100%" Height="100%" AllowFiltering="true" FilterMode="FilterMode.ExcelStyleFilter">
                            </IgbPivotGrid>
                            break;
                    }
                </div>
            </section>
        </div>
        <IgbDialog @ref="CodeDialog" id="gridThemePlaygroundCodeDialog" CloseOnOutsideClick="true">
            <div slot="title" class="playground__dialog-title">Theme code</div>
            <div class="playground__dialog-body">
                <div class="playground__code-header">
                    <span>CSS variables</span>
                    <IgbIconButton class="playground__copy" IconName="@(Copied ? "check" : "content_copy")" Collection="material"
                        Variant="IconButtonVariant.Outlined" title="@(Copied ? "Copied" : "Copy code")" @onclick="Copy"></IgbIconButton>
                </div>
                <div class="playground__code">@((MarkupString)CodeHtml)</div>
            </div>
            <IgbButton slot="footer" Variant="ButtonVariant.Flat" @onclick="() => CodeDialog.HideAsync()">Close</IgbButton>
        </IgbDialog>
    </div>
</IgbThemeProvider>

@code {
    private const string CopyIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z\"/></svg>";
    private const string CheckIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\"/></svg>";

    public record TokenDescriptor(string Key, string CssVar, string Label);

    private static readonly TokenDescriptor[] PrimaryTokens =
    {
        new("background", "--ig-grid-background", "Background"),
        new("accentColor", "--ig-grid-accent-color", "Accent"),
        new("foreground", "--ig-grid-foreground", "Foreground")
    };
    private static readonly TokenDescriptor[] HeaderTokens =
    {
        new("headerBackground", "--ig-grid-header-background", "Header background"),
        new("headerForeground", "--ig-grid-header-text-color", "Header foreground")
    };
    private static readonly TokenDescriptor[] AllTokens = PrimaryTokens.Concat(HeaderTokens).ToArray();

    private const string HeaderTextOnHeader = "hsla(from color(from var(--ig-grid-header-background) var(--y-contrast)) h 0 l/1)";
    private const string Divider = "hsl(from color-mix(in srgb, var(--ig-grid-foreground) 16%, var(--ig-grid-background)) h s l/0.38)";
    private const string ZebraRows = "color-mix(in srgb, var(--ig-grid-foreground) 4%, var(--ig-grid-background))";
    private const string NoDivider = "var(--ig-grid-background)";

    private Dictionary<string, string> Colors = AllTokens.ToDictionary(t => t.Key, t => "");
    private string Size = "medium";
    private string RadiusFactor = "0.4";
    private bool HorizontalDividers = true;
    private bool VerticalDividers = false;
    private bool Zebra = false;
    private string Preview = "grid";

    private string CodeHtml = "";
    private bool Copied = false;

    private Dictionary<string, string> SeedColors = new();
    private List<string[]> ThemeTokens = new();
    private Dictionary<string, int> FieldRevisions = AllTokens.ToDictionary(t => t.Key, t => 0);

    private IgbDialog CodeDialog;
    private IgbIcon IconRegistrar;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (!firstRender) return;

        await IconRegistrar.EnsureReady();
        await IconRegistrar.RegisterIconFromTextAsync("content_copy", CopyIcon, "material");
        await IconRegistrar.RegisterIconFromTextAsync("check", CheckIcon, "material");

        ThemeTokens = await JS.InvokeAsync<List<string[]>>("gridThemePlayground.readCompiledTheme");
        SeedColors = await JS.InvokeAsync<Dictionary<string, string>>("gridThemePlayground.readSeedColors", "gridThemePlaygroundStage");
        foreach (var seed in SeedColors)
        {
            Colors[seed.Key] = seed.Value;
        }
        StateHasChanged();
    }

    private Dictionary<string, string> PreviewStyle
    {
        get
        {
            var style = new Dictionary<string, string>();

            foreach (var token in AllTokens)
            {
                if (!string.IsNullOrEmpty(Colors[token.Key]))
                {
                    style[token.CssVar] = Colors[token.Key];
                }
            }
            if (!string.IsNullOrEmpty(Colors["headerBackground"]) && string.IsNullOrEmpty(Colors["headerForeground"]))
            {
                style["--ig-grid-header-text-color"] = HeaderTextOnHeader;
            }

            style["--ig-size"] = $"var(--ig-size-{Size})";
            style["--ig-radius-factor"] = RadiusFactor;
            style["--ig-grid-row-border-color"] = HorizontalDividers ? Divider : NoDivider;

            var columnRule = VerticalDividers ? Divider : NoDivider;
            style["--ig-grid-body-column-border-color-odd"] = columnRule;
            style["--ig-grid-body-column-border-color-even"] = columnRule;

            if (Zebra)
            {
                style["--ig-grid-row-even-background"] = ZebraRows;
            }

            return style;
        }
    }

    private string StageStyle => string.Join(" ", PreviewStyle.Select(kv => $"{kv.Key}: {kv.Value};"));

    private string ExportCss
    {
        get
        {
            var overrides = PreviewStyle;

            if (ThemeTokens.Count == 0)
            {
                var only = overrides.Select(kv => $"  {kv.Key}: {kv.Value};");
                return "/* Overrides only -- requires a base grid theme to derive from. */\n.my-grid {\n" + string.Join("\n", only) + "\n}";
            }

            var emitted = new HashSet<string>();
            var lines = ThemeTokens.Select(token =>
            {
                emitted.Add(token[0]);
                return $"  {token[0]}: {(overrides.TryGetValue(token[0], out var value) ? value : token[1])};";
            }).ToList();
            var extras = overrides.Where(kv => !emitted.Contains(kv.Key)).Select(kv => $"  {kv.Key}: {kv.Value};");

            return ".my-grid {\n" + string.Join("\n", extras.Concat(lines)) + "\n}";
        }
    }

    private RenderFragment ColorField(TokenDescriptor token) => __builder =>
    {
        var value = Colors[token.Key];
        var isAuto = string.IsNullOrEmpty(value);

        <div class="color-field" @key="@($"{token.Key}-{FieldRevisions[token.Key]}")">
            <span class="color-field__label">@token.Label</span>
            <IgbInput Outlined="true" Placeholder="auto" spellcheck="false" Value="@value"
                Change="@(e => OnTextChange(token.Key, e.Detail))">
                <span slot="prefix" class="color-field__swatch-wrap">
                    <input type="color" aria-label="@token.Label" value="@(isAuto ? "#808080" : value)"
                        @oninput="@(e => SetColor(token.Key, e.Value?.ToString()))" />
                    <span class="color-field__swatch @(isAuto ? "color-field__swatch--auto" : "")"
                        style="@(isAuto ? "" : $"background: {value}")"></span>
                </span>
                @if (!isAuto)
                {
                    <button slot="suffix" type="button" class="color-field__reset" title="Reset to auto"
                        @onclick="@(() => SetColor(token.Key, ""))">&#8635;</button>
                }
            </IgbInput>
        </div>
    };

    private void SetColor(string key, string value)
    {
        Colors[key] = value ?? "";
    }

    private void OnTextChange(string key, string text)
    {
        var normalized = NormalizeHexColor(text);

        if (normalized != null)
        {
            SetColor(key, normalized);
        }
        else
        {
            FieldRevisions[key]++;
        }
    }

    private static string NormalizeHexColor(string raw)
    {
        var value = (raw ?? "").Trim();
        if (value.Length == 0) return null;
        if (!value.StartsWith("#")) value = "#" + value;

        if (Regex.IsMatch(value, "^#[0-9a-fA-F]{3}$"))
        {
            value = "#" + value[1] + value[1] + value[2] + value[2] + value[3] + value[3];
        }

        return Regex.IsMatch(value, "^#[0-9a-fA-F]{6}$") ? value.ToUpperInvariant() : null;
    }

    private void OnPreviewSelect(IgbComponentValueChangedEventArgs args)
    {
        _pivotConfig = null;
        Preview = args.Detail;
    }
    private void OnSizeSelect(IgbComponentValueChangedEventArgs args) => Size = args.Detail;
    private void OnRoundnessSelect(IgbComponentValueChangedEventArgs args) => RadiusFactor = args.Detail;

    private void Reset()
    {
        foreach (var token in AllTokens)
        {
            Colors[token.Key] = SeedColors.TryGetValue(token.Key, out var seed) ? seed : "";
            FieldRevisions[token.Key]++;
        }
        Size = "medium";
        RadiusFactor = "0.4";
        HorizontalDividers = true;
        VerticalDividers = false;
        Zebra = false;
    }

    private async Task ShowCode()
    {
        CodeHtml = await JS.InvokeAsync<string>("gridThemePlayground.highlight", ExportCss);
        StateHasChanged();
        await CodeDialog.ShowAsync();
    }

    private async Task Copy()
    {
        try
        {
            await JS.InvokeVoidAsync("navigator.clipboard.writeText", ExportCss);
        }
        catch (JSException)
        {
            return;
        }

        Copied = true;
        StateHasChanged();
        await Task.Delay(2000);
        Copied = false;
        StateHasChanged();
    }

    private IgbPivotConfiguration _pivotConfig = null;
    public IgbPivotConfiguration PivotConfig
    {
        get
        {
            if (_pivotConfig == null)
            {
                var sellerDimension = new IgbPivotDimension();
                sellerDimension.MemberName = "Seller";
                sellerDimension.MemberFunctionScript = "GridThemePlaygroundSellerMember";
                sellerDimension.Enabled = true;

                var cityDimension = new IgbPivotDimension();
                cityDimension.MemberName = "City";
                cityDimension.MemberFunctionScript = "GridThemePlaygroundCityMember";
                cityDimension.Enabled = true;
                cityDimension.ChildLevel = sellerDimension;

                var productDimension = new IgbPivotDimension();
                productDimension.MemberName = "Product";
                productDimension.MemberFunctionScript = "GridThemePlaygroundProductMember";
                productDimension.Enabled = true;

                var aggregator = new IgbPivotAggregator();
                aggregator.AggregatorName = PivotAggregationType.SUM;
                aggregator.Key = "sum";
                aggregator.Label = "Sum";

                var unitsValue = new IgbPivotValue();
                unitsValue.Member = "NumberOfUnits";
                unitsValue.Aggregate = aggregator;
                unitsValue.Enabled = true;

                var config = new IgbPivotConfiguration();
                config.Columns = [productDimension];
                config.Rows = [cityDimension];
                config.Values = [unitsValue];

                _pivotConfig = config;
            }
            return _pivotConfig;
        }
    }

    private ThemingInvoices _themingInvoices = null;
    public ThemingInvoices ThemingInvoices => _themingInvoices ??= new ThemingInvoices();

    private EmployeesFlatAvatars _employeesFlatAvatars = null;
    public EmployeesFlatAvatars EmployeesFlatAvatars => _employeesFlatAvatars ??= new EmployeesFlatAvatars();

    private SingersNestedData _singersNestedData = null;
    public SingersNestedData SingersNestedData => _singersNestedData ??= new SingersNestedData();

    private PivotDataFlat _pivotDataFlat = null;
    public PivotDataFlat PivotDataFlat => _pivotDataFlat ??= new PivotDataFlat();
}
```
```csharp
using System;
using System.Collections.Generic;
public class EmployeesFlatAvatarsItem
{
    public double Age { get; set; }
    public string Avatar { get; set; }
    public string HireDate { get; set; }
    public double ID { get; set; }
    public string Name { get; set; }
    public double ParentID { get; set; }
    public string Title { get; set; }
}

public class EmployeesFlatAvatars
    : List<EmployeesFlatAvatarsItem>
{
    public EmployeesFlatAvatars()
    {
        this.Add(new EmployeesFlatAvatarsItem() { Age = 55, Avatar = @"https://dl.infragistics.com/x/img/people/men/25.png", HireDate = @"2008-03-20", ID = 1, Name = @"Johnathan Winchester", ParentID = -1, Title = @"Development Manager" });
        this.Add(new EmployeesFlatAvatarsItem() { Age = 42, Avatar = @"https://dl.infragistics.com/x/img/people/women/14.png", HireDate = @"2014-01-22", ID = 4, Name = @"Ana Sanders", ParentID = -1, Title = @"CEO" });
        this.Add(new EmployeesFlatAvatarsItem() { Age = 49, Avatar = @"https://dl.infragistics.com/x/img/people/women/12.png", HireDate = @"2014-01-22", ID = 18, Name = @"Victoria Lincoln", ParentID = -1, Title = @"Accounting Manager" });
        // ... 15 more items
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class PivotDataFlatItem
{
    public string ProductName { get; set; }
    public double ProductUnitPrice { get; set; }
    public string SellerName { get; set; }
    public string SellerCity { get; set; }
    public string Date { get; set; }
    public double Value { get; set; }
    public double NumberOfUnits { get; set; }
}

public class PivotDataFlat
    : List<PivotDataFlatItem>
{
    public PivotDataFlat()
    {
        this.Add(new PivotDataFlatItem() { ProductName = @"Clothing", ProductUnitPrice = 12.8, SellerName = @"Stanley Brooker", SellerCity = @"Seattle", Date = @"01/01/2007", Value = 94.4, NumberOfUnits = 282 });
        this.Add(new PivotDataFlatItem() { ProductName = @"Clothing", ProductUnitPrice = 49.6, SellerName = @"Elisa Longbottom", SellerCity = @"Sofia", Date = @"01/05/2007", Value = 70.8, NumberOfUnits = 296 });
        this.Add(new PivotDataFlatItem() { ProductName = @"Bikes", ProductUnitPrice = 3.6, SellerName = @"Lydia Burson", SellerCity = @"Tokyo", Date = @"01/06/2007", Value = 35.8, NumberOfUnits = 68 });
        // ... 497 more items
    }
}
```
```csharp
using System;
using System.Collections.Generic;

public class SingersNestedItem
{
    public double ID { get; set; }
    public string Artist { get; set; }
    public string Photo { get; set; }
    public double Debut { get; set; }
    public double GrammyNominations { get; set; }
    public double GrammyAwards { get; set; }
    public bool HasGrammyAward { get; set; }
    public List<SingersNestedItem_TourInfo> Tours { get; set; }
    public List<SingersNestedItem_AlbumInfo> Albums { get; set; }
}

public class SingersNestedItem_TourInfo
{
    public string Tour { get; set; }
    public string StartedOn { get; set; }
    public string Location { get; set; }
    public string Headliner { get; set; }
    public string TouredBy { get; set; }
}

public class SingersNestedItem_AlbumInfo
{
    public string Album { get; set; }
    public string LaunchDate { get; set; }
    public double BillboardReview { get; set; }
    public double USBillboard200 { get; set; }
    public string Artist { get; set; }
    public List<SingersNestedItem_SongInfo> Songs { get; set; }
}

public class SingersNestedItem_SongInfo
{
    public double Number { get; set; }
    public string Title { get; set; }
    public string Released { get; set; }
    public string Genre { get; set; }
    public string Album { get; set; }
}

public class SingersNestedData : List<SingersNestedItem>
{
    public SingersNestedData()
    {
        this.Add(new SingersNestedItem
        {
            ID = 0,
            Artist = @"Naomí Yepes",
            Photo = @"https://dl.infragistics.com/x/img/people/names/naomi.png",
            Debut = 2011,
            GrammyNominations = 6,
            GrammyAwards = 0,
            HasGrammyAward = false,
            Tours = new List<SingersNestedItem_TourInfo>()
            {
                new SingersNestedItem_TourInfo
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"City Jam Sessions",
                    StartedOn = @"Aug 13",
                    Location = @"North America",
                    Headliner = @"YES",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Christmas NYC 2013",
                    StartedOn = @"Dec 13",
                    Location = @"United States",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Christmas NYC 2014",
                    StartedOn = @"Dec 14",
                    Location = @"North America",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Watermelon Tour",
                    StartedOn = @"Feb 15",
                    Location = @"Worldwide",
                    Headliner = @"YES",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Christmas NYC 2016",
                    StartedOn = @"Dec 16",
                    Location = @"United States",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"The Dragon Tour",
                    StartedOn = @"Feb 17",
                    Location = @"Worldwide",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Organic Sessions",
                    StartedOn = @"Aug 18",
                    Location = @"United States, England",
                    Headliner = @"YES",
                    TouredBy = @"Naomí Yepes"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Hope World Tour",
                    StartedOn = @"Mar 19",
                    Location = @"Worldwide",
                    Headliner = @"NO",
                    TouredBy = @"Naomí Yepes"
                }}
            ,
            Albums = new List<SingersNestedItem_AlbumInfo>()
            {
                new SingersNestedItem_AlbumInfo()
                    }

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Dream Driven",
                    LaunchDate = @"August 25, 2014",
                    BillboardReview = 81,
                    USBillboard200 = 1,
                    Artist = @"Naomí Yepes",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                        new SingersNestedItem_SongInfo
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 2,
                            Title = @"Ferocious",
                            Released = @"28 Apr 2014",
                            Genre = @"Dance-pop R&B",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 3,
                            Title = @"Going crazy",
                            Released = @"10 Feb 2015",
                            Genre = @"Dance-pop EDM",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 4,
                            Title = @"Future past",
                            Released = @"14 Jul 2021",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 5,
                            Title = @"Roaming like them",
                            Released = @"2 Jul 2014",
                            Genre = @"Electro house Electropop",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 6,
                            Title = @"Last Wishes",
                            Released = @"12 Aug 2014",
                            Genre = @"R&B",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 7,
                            Title = @"Stay where you are",
                            Released = @"14 Aug 1998",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 8,
                            Title = @"Imaginarium",
                            Released = @"15 Sep 2013",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 9,
                            Title = @"Tell me",
                            Released = @"30 Sep 2014",
                            Genre = @"Synth-pop R&B",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 10,
                            Title = @"Shredded into pieces",
                            Released = @"2 Sep 2011",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 11,
                            Title = @"Capture this moment",
                            Released = @"5 Jan 2011",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 12,
                            Title = @"Dream Driven",
                            Released = @"12 Dec 1999",
                            Genre = @"*",
                            Album = @"Dream Driven"
                        }}

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"The dragon journey",
                    LaunchDate = @"May 20, 2016",
                    BillboardReview = 60,
                    USBillboard200 = 2,
                    Artist = @"Naomí Yepes",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                    }

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Organic me",
                    LaunchDate = @"August 17, 2018",
                    BillboardReview = 82,
                    USBillboard200 = 1,
                    Artist = @"Naomí Yepes",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                        new SingersNestedItem_SongInfo
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 2,
                            Title = @"Early Morning Compass",
                            Released = @"15 Jan 2020",
                            Genre = @"mystical parody-bap ",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 3,
                            Title = @"Key Fields Forever",
                            Released = @"2 Jan 2020",
                            Genre = @"Dance-pop EDM",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 4,
                            Title = @"Stand by Your Goblins",
                            Released = @"20 Nov 2019",
                            Genre = @"*",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 5,
                            Title = @"Mad to Walk",
                            Released = @"12 May 2019",
                            Genre = @"Electro house Electropop",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 6,
                            Title = @"Alice's Waiting",
                            Released = @"28 Jan 2020",
                            Genre = @"R&B",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 7,
                            Title = @"We Shall Kiss",
                            Released = @"30 Oct 2019",
                            Genre = @"*",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 8,
                            Title = @"Behind Single Ants",
                            Released = @"2 Oct 2019",
                            Genre = @"*",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 9,
                            Title = @"Soap Autopsy",
                            Released = @"8 Aug 2019",
                            Genre = @"Synth-pop R&B",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 10,
                            Title = @"Have You Met Rich?",
                            Released = @"1 Jul 2019",
                            Genre = @"ethno-tunes",
                            Album = @"Organic me"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 11,
                            Title = @"Livin' on a Banana",
                            Released = @"22 Nov 2019",
                            Genre = @"Crunk reggaeton",
                            Album = @"Organic me"
                        }}

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Curiosity",
                    LaunchDate = @"December 7, 2019",
                    BillboardReview = 75,
                    USBillboard200 = 12,
                    Artist = @"Naomí Yepes",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                    }

                }}

        });
        this.Add(new SingersNestedItem
        {
            ID = 1,
            Artist = @"Babila Ebwélé",
            Photo = @"https://dl.infragistics.com/x/img/people/names/babila.png",
            Debut = 2009,
            GrammyNominations = 0,
            GrammyAwards = 11,
            HasGrammyAward = true,
            Tours = new List<SingersNestedItem_TourInfo>()
            {
                new SingersNestedItem_TourInfo
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"No foundations",
                    StartedOn = @"Jun 04",
                    Location = @"United States, Europe",
                    Headliner = @"YES",
                    TouredBy = @"Babila Ebwélé"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Crazy eyes",
                    StartedOn = @"Jun 08",
                    Location = @"North America",
                    Headliner = @"NO",
                    TouredBy = @"Babila Ebwélé"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Zero gravity",
                    StartedOn = @"Apr 19",
                    Location = @"United States",
                    Headliner = @"NO",
                    TouredBy = @"Babila Ebwélé"
                },
                new SingersNestedItem_TourInfo
                {
                    Tour = @"Battle with myself",
                    StartedOn = @"Mar 08",
                    Location = @"North America",
                    Headliner = @"YES",
                    TouredBy = @"Babila Ebwélé"
                }}
            ,
            Albums = new List<SingersNestedItem_AlbumInfo>()
            {
                new SingersNestedItem_AlbumInfo()
                        new SingersNestedItem_SongInfo
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 2,
                            Title = @"Early Morning Drive",
                            Released = @"20 May 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 3,
                            Title = @"Don't Natter",
                            Released = @"10 Jun 2019",
                            Genre = @"adult calypso-industrial",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 4,
                            Title = @"Stairway to Balloons",
                            Released = @"18 Jun 2019",
                            Genre = @"calypso and mariachi",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 5,
                            Title = @"The Number of your Apple",
                            Released = @"29 Oct 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 6,
                            Title = @"Your Delightful Heart",
                            Released = @"24 Feb 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 7,
                            Title = @"Nice Weather For Balloons",
                            Released = @"1 Aug 2019",
                            Genre = @"rap-hop",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 8,
                            Title = @"The Girl From Cornwall",
                            Released = @"4 May 2019",
                            Genre = @"enigmatic rock-and-roll",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 9,
                            Title = @"Here Without Jack",
                            Released = @"24 Oct 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 10,
                            Title = @"Born Rancid",
                            Released = @"19 Mar 2019",
                            Genre = @"*",
                            Album = @"Pushing up daisies"
                        }}

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Death's dead",
                    LaunchDate = @"June 8, 2016",
                    BillboardReview = 85,
                    USBillboard200 = 95,
                    Artist = @"Babila Ebwélé",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                        new SingersNestedItem_SongInfo
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 2,
                            Title = @"Ghost in My Rod",
                            Released = @"5 Oct 2019",
                            Genre = @"enigmatic rock-and-roll",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 3,
                            Title = @"Bed of Men",
                            Released = @"14 Nov 2019",
                            Genre = @"whimsical comedy-grass ",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 4,
                            Title = @"Don't Push",
                            Released = @"2 Jan 2020",
                            Genre = @"unblack electronic-trip-hop",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 5,
                            Title = @"Nice Weather For Men",
                            Released = @"18 Dec 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 6,
                            Title = @"Rancid Rhapsody",
                            Released = @"10 Mar 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 7,
                            Title = @"Push, Push, Push!",
                            Released = @"21 Feb 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 8,
                            Title = @"My Name is Sarah",
                            Released = @"15 Nov 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 9,
                            Title = @"The Girl From My Hotel",
                            Released = @"6 Nov 2019",
                            Genre = @"*",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 10,
                            Title = @"Free Box",
                            Released = @"18 Apr 2019",
                            Genre = @"splitter-funk",
                            Album = @"Death's dead"
                        },
                        new SingersNestedItem_SongInfo
                        {
                            Number = 11,
                            Title = @"Hotel Cardiff",
                            Released = @"30 Dec 2019",
                            Genre = @"guilty pleasure ebm",
                            Album = @"Death's dead"
                        }}

                }}

        });
        this.Add(new SingersNestedItem
        {
            ID = 2,
            Artist = @"Ahmad Nazeri",
            Photo = @"https://dl.infragistics.com/x/img/people/names/ahmad.png",
            Debut = 2004,
            GrammyNominations = 3,
            GrammyAwards = 1,
            HasGrammyAward = true,
            Tours = new List<SingersNestedItem_TourInfo>()
            {
            }
            ,
            Albums = new List<SingersNestedItem_AlbumInfo>()
            {
                new SingersNestedItem_AlbumInfo()
                    }

                },
                new SingersNestedItem_AlbumInfo()
                {
                    Album = @"Bursting bubbles",
                    LaunchDate = @"April 17, 2006",
                    BillboardReview = 69,
                    USBillboard200 = 39,
                    Artist = @"Ahmad Nazeri",
                    Songs = new List<SingersNestedItem_SongInfo>()
                    {
                    }

                }}

        });
        // ... 11 more items
    }
}
```
```csharp
using System;
using System.Collections.Generic;
public class ThemingInvoicesItem
{
    public string ShipCountry { get; set; }
    public string ShipCity { get; set; }
    public string ShipName { get; set; }
    public string Salesperson { get; set; }
    public double UnitPrice { get; set; }
    public double Quantity { get; set; }
}

public class ThemingInvoices
    : List<ThemingInvoicesItem>
{
    public ThemingInvoices()
    {
        this.Add(new ThemingInvoicesItem() { ShipCountry = @"Germany", ShipCity = @"Berlin", ShipName = @"Alfred's Futterkiste", Salesperson = @"Margaret Peacock", UnitPrice = 43.9, Quantity = 20 });
        this.Add(new ThemingInvoicesItem() { ShipCountry = @"Germany", ShipCity = @"Berlin", ShipName = @"Alfred's Futterkiste", Salesperson = @"Margaret Peacock", UnitPrice = 10, Quantity = 6 });
        this.Add(new ThemingInvoicesItem() { ShipCountry = @"Germany", ShipCity = @"Berlin", ShipName = @"Alfred's Futterkiste", Salesperson = @"Margaret Peacock", UnitPrice = 18, Quantity = 15 });
        // ... 319 more items
    }
}
```

## API References

- [`IgbGrid`](mcp:get_api_reference?platform=blazor&component=IgbGrid)

## Additional Resources

- [Grid Overview](../data-grid.md)

- [Palettes](../../themes/palettes.md)
- [Typography](../../themes/typography.md)

- [Size](size.md)
- [Conditional Styling](conditional-cell-styling.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

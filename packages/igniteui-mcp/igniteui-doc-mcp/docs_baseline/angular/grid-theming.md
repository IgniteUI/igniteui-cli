---
title: Angular Grid Theming - Ignite UI for Angular
description: The Ignite UI for Angular Grid is themed with grid-theme(), a Sass function that derives every color in the component from three primary tokens.
keywords: angular grid theming, angular grid styling, grid theme, ignite ui for angular, infragistics
license: commercial
last_updated: "2026-08-27"
llms:
  description: "The Ignite UI for Angular Grid is themed through grid-theme(), which derives every color from a background, foreground and accent token."
_tocName: Theming
_premium: true
---
# Angular Grid Theming

The Ignite UI for Angular Grid is themed through `grid-theme`, which derives every color from a background, foreground and accent token. Those three primary tokens reach everything the component renders: the header, the rows, the borders, the summaries, the toolbar, the paginator and the filtering popups.

**Note:** 
There is no separate theme function per grid. The Data Grid, Tree Grid, Hierarchical Grid and Pivot Grid all read `grid-theme()`, so the same theme applies to any of them without modification.

## Angular Grid Theming Example

The four themes below are custom — written for this sample, not shipped with the library. Each sets the three primary tokens and nothing else in the color space, so switching between them shows how far those three values reach.

```typescript
import { Component, signal } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxNumberSummaryOperand, IgxSummaryResult } from 'igniteui-angular/core';
import { IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { INVOICE_DATA } from '../../data/invoiceData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
class CompactSummary extends IgxNumberSummaryOperand {
    public override operate(data?: any[]): IgxSummaryResult[] {
        return super.operate(data).filter(r => r.key === 'count' || r.key === 'sum');
    }
}

@Component({
    selector: 'app-grid-theming',
    styleUrls: ['./grid-theming.component.scss'],
    templateUrl: './grid-theming.component.html',
    imports: [
        IgxButtonDirective,
        IgxButtonGroupComponent,
        IgxColumnComponent,
        IgxGridComponent,
        IgxGridToolbarActionsComponent,
        IgxGridToolbarComponent,
        IgxGridToolbarHidingComponent,
        IgxGridToolbarPinningComponent,
        IgxGridToolbarTitleComponent,
        IgxPaginatorComponent,
        IgxPreventDocumentScrollDirective
    ]
})
export class GridThemingComponent {
    public data = INVOICE_DATA;
    public compactSummary = CompactSummary;
    public themes = [
        { label: 'Studio', class: 'theme-studio', swatch: 'theme-swatch--studio' },
        { label: 'Ledger', class: 'theme-ledger', swatch: 'theme-swatch--ledger' },
        { label: 'Editorial', class: 'theme-editorial', swatch: 'theme-swatch--editorial' },
        { label: 'Midnight', class: 'theme-midnight', swatch: 'theme-swatch--midnight' }
    ];

    public activeTheme = signal(this.themes[0].class);

    public selectTheme(args: { index: number }) {
        this.activeTheme.set(this.themes[args.index].class);
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }
}
```
```html
<div class="sample grid-theming-sample">
    <div class="theme-picker">
        <span class="theme-picker__label">Pick a theme</span>

        <igx-buttongroup
            class="theme-switcher"
            selectionMode="singleRequired"
            (selected)="selectTheme($event)">
            @for (theme of themes; track theme.class) {
                <button igxButton [selected]="activeTheme() === theme.class">
                    <span class="theme-swatch" [class]="theme.swatch"></span>
                    {{ theme.label }}
                </button>
            }
        </igx-buttongroup>

        <p class="theme-picker__hint">
            Custom themes, not built-in: each is a <code>grid-theme()</code> with its
            own background and accent.
        </p>
    </div>

    <igx-grid
        [igxPreventDocumentScroll]="true"
        [class]="activeTheme()"
        [data]="data"
        [width]="'100%'"
        [height]="'560px'"
        [allowFiltering]="true"
        [filterMode]="'excelStyleFilter'"
        [rowSelection]="'multiple'"
        [columnSelection]="'multiple'">

        <igx-grid-toolbar>
            <igx-grid-toolbar-title>Invoices</igx-grid-toolbar-title>
            <igx-grid-toolbar-actions>
                <igx-grid-toolbar-pinning></igx-grid-toolbar-pinning>
                <igx-grid-toolbar-hiding></igx-grid-toolbar-hiding>
            </igx-grid-toolbar-actions>
        </igx-grid-toolbar>

        <igx-column field="ShipCountry" header="Country" width="160px"
            [sortable]="true" [filterable]="true" [pinned]="true">
        </igx-column>
        <igx-column field="ShipCity" header="City" width="160px"
            [sortable]="true" [filterable]="true">
        </igx-column>
        <igx-column field="ShipName" header="Ship Name" width="240px"
            [sortable]="true" [filterable]="true">
        </igx-column>
        <igx-column field="Salesperson" header="Salesperson" width="200px"
            [sortable]="true" [filterable]="true">
        </igx-column>
        <igx-column field="UnitPrice" header="Unit Price" width="140px"
            dataType="number" [formatter]="formatCurrency"
            [sortable]="true" [hasSummary]="true" [summaries]="compactSummary">
        </igx-column>
        <igx-column field="Quantity" header="Quantity" width="140px"
            dataType="number" [sortable]="true">
        </igx-column>

        <igx-paginator [perPage]="10"></igx-paginator>
    </igx-grid>
</div>
```
```scss
@use "igniteui-angular/theming" as *;

$studio-bg: #faf4ed;
$studio-accent: #907aa9;
$ledger-bg: #eceff4;
$ledger-accent: #5e81ac;
$editorial-bg: #333c43;
$editorial-accent: #a7c080;
$midnight-bg: #282a36;
$midnight-accent: #bd93f9;

:host {
    display: block;
    padding: 16px;
}

.theme-studio {
    --ig-size: var(--ig-size-large);
    --ig-radius-factor: 0.6;

    @include tokens(grid-theme(
        $background: $studio-bg,
        $foreground: #575279,
        $accent-color: $studio-accent,
        $header-background: #fffaf3,
        $header-border-color: #dfdad9,
        $row-border-color: #f2e9e1,
        $grid-border-color: #dfdad9,
        $grid-shadow: (0 1px 3px rgba(87, 82, 121, 0.10), 0 1px 2px rgba(87, 82, 121, 0.06))
    ));
}

.theme-ledger {
    --ig-size: var(--ig-size-small);
    --ig-radius-factor: 0;

    @include tokens(grid-theme(
        $background: $ledger-bg,
        $foreground: #2e3440,
        $accent-color: $ledger-accent,
        $header-background: #d8dee9,
        $row-odd-background: #eceff4,
        $row-even-background: #e5e9f0,
        $body-column-border-color-odd: #d8dee9,
        $body-column-border-color-even: #d8dee9,
        $row-border-color: #d8dee9,
        $grid-border-color: #c8d0dc
    ));
}

.theme-editorial {
    --ig-size: var(--ig-size-large);
    --ig-radius-factor: 0;

    @include tokens(grid-theme(
        $schema: $dark-material-schema,
        $background: $editorial-bg,
        $foreground: #d3c6aa,
        $accent-color: $editorial-accent,
        $header-background: #3a464c,
        $row-border-color: #333c43,
        $grid-border-color: #333c43
    ));
}

.theme-midnight {
    --ig-size: var(--ig-size-medium);
    --ig-radius-factor: 0.25;

    @include tokens(grid-theme(
        $schema: $dark-material-schema,
        $background: $midnight-bg,
        $foreground: #f8f8f2,
        $accent-color: $midnight-accent,
        $header-background: #21222c,
        $body-column-border-color-odd: #44475a,
        $body-column-border-color-even: #44475a,
        $row-border-color: #44475a,
        $grid-border-color: #44475a
    ));
}

.grid-theming-sample {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.theme-picker {
    --ig-button-group-elevation: 0;

    display: flex;
    flex-direction: column;
    gap: 6px;
    align-self: flex-start;
}

.theme-picker__label {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: var(--ig-gray-700);
}

.theme-picker__hint {
    margin: 0;
    font-size: 12px;
    line-height: 1.45;
    color: var(--ig-gray-600);

    code {
        font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
        font-size: 11px;
    }
}

.theme-swatch {
    display: inline-block;
    min-width: 14px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1px solid var(--ig-gray-300);
    vertical-align: -2px;
    background: linear-gradient(135deg, var(--swatch-bg) 0 50%, var(--swatch-accent) 50% 100%);
}

.theme-swatch--studio {
    --swatch-bg: #{$studio-bg};
    --swatch-accent: #{$studio-accent};
}

.theme-swatch--ledger {
    --swatch-bg: #{$ledger-bg};
    --swatch-accent: #{$ledger-accent};
}

.theme-swatch--editorial {
    --swatch-bg: #{$editorial-bg};
    --swatch-accent: #{$editorial-accent};
}

.theme-swatch--midnight {
    --swatch-bg: #{$midnight-bg};
    --swatch-accent: #{$midnight-accent};
}
```

## Getting started

Import the theming entry point, where the theme functions and the `tokens()` mixin are exported:

```scss
@use "igniteui-angular/theming" as *;
```

Then declare a theme and include it on the element you want to affect:

```scss
:host {
  @include tokens(grid-theme(
    $background: #08002e,
    $accent-color: #ff7d52
  ));
}
```

That is a complete theme. The Grid is now dark indigo with a coral accent, and the text, header, row borders, hover states, selection tints and popup chrome have all been computed for you.

## Primary tokens

The Grid theme is built from three tokens; every other color is derived from them.

| Token | What it controls |
| -- | -- |
| `$background` | The surface the whole component is built on. Every other surface and the default foreground are derived from it. |
| `$foreground` | Text and icons. Derived from `$background` by contrast when not set. |
| `$accent-color` | Interactive color: sort indicators, selection, hover tints, focus. |

`$foreground` is listed as primary but rarely needs setting. Left alone, it is chosen for contrast against the background, so a dark background produces light text and a light one produces dark text without a second declaration.

## How derivation works

When you declare a theme, the derived tokens are not resolved at build time into fixed colors. They are emitted as CSS expressions over the primary tokens you supplied:

```css
.my-grid {
  --ig-grid-foreground: hsla(from color(from var(--ig-grid-background) var(--y-contrast)) h 0 l/1);
  --ig-grid-header-background: color-mix(in srgb, var(--ig-grid-foreground) 6%, var(--ig-grid-background));
  --ig-grid-row-hover-background: color-mix(in srgb, var(--ig-grid-accent-color) 8%, var(--ig-grid-row-odd-background));
  --ig-grid-sorted-header-icon-color: hsl(from var(--ig-grid-accent-color) h s l/0.7);
}
```

Two consequences follow. Changing a primary token re-computes everything downstream, including at runtime through CSS custom properties. And the relationships hold whatever value you supply, so a theme cannot fall out of step with itself.

## Going deeper

Some tokens are derivation roots in their own right. Declaring one detaches it from the background, and whatever sits on it derives from the new value instead.

`$header-background` is the clearest example. Left alone it is mixed from `$background`, and the header text follows `$foreground`. Declare it, and the header text is re-derived to take contrast against the header itself:

```scss
:host {
  @include tokens(grid-theme(
    $background: #08002e,
    $accent-color: #ff7d52,
    $header-background: #ff7d52
  ));
}
```

**Note:** 
Reach for these only when you want a surface to stop tracking the background. Most tokens the theme documents as auto-derived are best left alone — overriding one pins a value that would otherwise stay in step with the rest of the theme.

## Structure

Color is only half of a theme. Density and roundness are controlled by global design-system tokens rather than `grid-theme()` parameters, so they are set as plain custom properties:

```scss
:host {
  --ig-size: var(--ig-size-small);   // small | medium | large
  --ig-radius-factor: 0;             // 0 to 1

  @include tokens(grid-theme(
    $background: #08002e,
    $accent-color: #ff7d52
  ));
}
```

Grid lines are theme parameters. To hide one, tint it to the surface behind it rather than removing it, so the row metrics do not change between themes:

```scss
@include tokens(grid-theme(
  // horizontal dividers, blended away
  $row-border-color: var(--ig-grid-background),
  // vertical dividers, drawn in the same color the theme derives for rows
  $body-column-border-color-odd: hsl(from color-mix(in srgb, var(--ig-grid-foreground) 16%, var(--ig-grid-background)) h s l/0.38),
  $body-column-border-color-even: hsl(from color-mix(in srgb, var(--ig-grid-foreground) 16%, var(--ig-grid-background)) h s l/0.38)
));
```

## CSS variables

The default appearance is deliberate, not derived: out of the box the Grid matches the Ignite UI design specification exactly, resolving against the base palette rather than computing colors from a background. Derivation is what you opt into when you declare a theme of your own.

That has one practical consequence for CSS-only theming. Until a theme is declared there are no derived expressions to override — the component reads `var(--ig-grid-header-background, var(--ig-gray-100))` and its siblings — so setting a couple of custom properties by hand does **not** cascade:

```css
/* Not enough on its own: the background changes, the header stays grey. */
.my-grid {
  --ig-grid-background: #08002e;
  --ig-grid-accent-color: #ff7d52;
}
```

To theme without a Sass build, declare the **full token set** — the roots plus the derived expressions that reference them. That block is self-contained, because each derived token is an expression over the roots:

```css
.my-grid {
  --ig-grid-background: #08002e;
  --ig-grid-accent-color: #ff7d52;
  --ig-grid-foreground: hsla(from color(from var(--ig-grid-background) var(--y-contrast)) h 0 l/1);
  --ig-grid-header-background: color-mix(in srgb, var(--ig-grid-foreground) 6%, var(--ig-grid-background));
  /* … and the rest of the theme's tokens */
}
```

Generating that by hand is impractical, so use the playground below: it emits the complete block for the colors you pick.

**Note:** 
Prefer the Sass route when you can. `grid-theme()` writes the derived tokens for you and keeps them in step with the library; a hand-maintained CSS block is a snapshot that will not pick up changes to the theme.

## Try it

Change a color and watch it reach the header, the rows, the summaries, the paginator and the filtering popups. Switch grids to confirm the same tokens serve all of them, and copy the generated theme when you are happy with it.

```typescript
import { Component, ElementRef, afterNextRender, computed, inject, signal, viewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxNumberSummaryOperand, IgxSummaryResult } from 'igniteui-angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxDialogActionsDirective, IgxDialogComponent, IgxDialogTitleDirective } from 'igniteui-angular/dialog';
import { IgxButtonDirective, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IGX_EXPANSION_PANEL_DIRECTIVES } from 'igniteui-angular/expansion-panel';
import { IgxCellTemplateDirective, IgxColumnComponent, IPivotConfiguration, IgxPivotNumericAggregate } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxPivotGridComponent } from 'igniteui-angular/grids/pivot-grid';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { INVOICE_DATA } from '../../data/invoiceData';
import { DATA as PIVOT_DATA } from '../../data/pivot-data';
import { SINGERS } from '../../data/singersData';
import { EMPLOYEE_FLAT_AVATARS_DATA } from '../../tree-grid/data/employees-flat-avatars';
import { ThemeColorFieldComponent } from './theme-color-field.component';

type TokenKey = 'background' | 'accentColor' | 'foreground' | 'headerBackground' | 'headerForeground';

interface TokenDescriptor {
    key: TokenKey;
    cssVar: string;
    scss: string;
    label: string;
}
class CompactSummary extends IgxNumberSummaryOperand {
    public override operate(data?: any[]): IgxSummaryResult[] {
        return super.operate(data).filter(r => r.key === 'count' || r.key === 'sum');
    }
}
const PRIMARY_TOKENS: TokenDescriptor[] = [
    { key: 'background', cssVar: '--ig-grid-background', scss: '$background', label: 'Background' },
    { key: 'accentColor', cssVar: '--ig-grid-accent-color', scss: '$accent-color', label: 'Accent' },
    { key: 'foreground', cssVar: '--ig-grid-foreground', scss: '$foreground', label: 'Foreground' }
];
const HEADER_TOKENS: TokenDescriptor[] = [
    { key: 'headerBackground', cssVar: '--ig-grid-header-background', scss: '$header-background', label: 'Header background' },
    { key: 'headerForeground', cssVar: '--ig-grid-header-text-color', scss: '$header-text-color', label: 'Header foreground' }
];

const ALL_TOKENS = [...PRIMARY_TOKENS, ...HEADER_TOKENS];

const EMPTY_COLORS: Record<TokenKey, string> = {
    background: '', accentColor: '', foreground: '', headerBackground: '', headerForeground: ''
};
/** What Sass emits for header text once $header-background is declared. */
const HEADER_TEXT_ON_HEADER = 'hsla(from color(from var(--ig-grid-header-background) var(--y-contrast)) h 0 l/1)';
const DIVIDER = 'hsl(from color-mix(in srgb, var(--ig-grid-foreground) 16%, var(--ig-grid-background)) h s l/0.38)';
const ZEBRA = 'color-mix(in srgb, var(--ig-grid-foreground) 4%, var(--ig-grid-background))';
const NO_DIVIDER = 'var(--ig-grid-background)';

@Component({
    selector: 'app-grid-theme-playground',
    styleUrls: ['./grid-theme-playground.component.scss'],
    templateUrl: './grid-theme-playground.component.html',
    imports: [
        IgxAccordionComponent, IGX_EXPANSION_PANEL_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective,
        IgxButtonGroupComponent, IgxCellTemplateDirective, IgxColumnComponent,
        IgxDialogActionsDirective, IgxDialogComponent, IgxDialogTitleDirective, IgxGridComponent,
        IgxHierarchicalGridComponent, IgxIconButtonDirective, IgxIconComponent, IgxPaginatorComponent, IgxPivotGridComponent, IgxRowIslandComponent,
        IgxSwitchComponent, IgxTreeGridComponent, ThemeColorFieldComponent
    ]
})
export class GridThemePlaygroundComponent {
    protected readonly primaryTokens = PRIMARY_TOKENS;
    protected readonly headerTokens = HEADER_TOKENS;
    protected readonly compactSummary = CompactSummary;

    protected readonly colors = signal<Record<TokenKey, string>>({ ...EMPTY_COLORS });
    protected readonly size = signal<'small' | 'medium' | 'large'>('medium');
    protected readonly radiusFactor = signal(0.4);
    protected readonly horizontalDividers = signal(true);
    protected readonly verticalDividers = signal(false);
    protected readonly zebra = signal(false);
    protected readonly preview = signal<'grid' | 'tree' | 'hierarchical' | 'pivot'>('grid');

    protected readonly copied = signal<'scss' | 'css' | null>(null);

    protected readonly sizes = [
        { label: 'Small', selected: false },
        { label: 'Medium', selected: true },
        { label: 'Large', selected: false }
    ];
    protected readonly roundnessOptions = [
        { label: 'Square', selected: false },
        { label: 'Soft', selected: true },
        { label: 'Round', selected: false }
    ];
    protected readonly previews = [
        { label: 'Flat', selected: true },
        { label: 'Tree', selected: false },
        { label: 'Hierarchical', selected: false },
        { label: 'Pivot', selected: false }
    ];

    public readonly data = INVOICE_DATA;
    public readonly treeData = EMPLOYEE_FLAT_AVATARS_DATA();
    public readonly hierarchicalData = SINGERS;
    public readonly pivotData = PIVOT_DATA;

    public pivotConfig: IPivotConfiguration = {
        columns: [{ memberName: 'Product', memberFunction: (data) => data.Product.Name, enabled: true }],
        rows: [{
            memberName: 'City',
            memberFunction: (data) => data.Seller.City,
            enabled: true,
            childLevel: { memberName: 'Seller', memberFunction: (data) => data.Seller.Name, enabled: true }
        }],
        values: [{
            member: 'NumberOfUnits',
            aggregate: { aggregator: IgxPivotNumericAggregate.sum, key: 'sum', label: 'Sum' },
            enabled: true
        }],
        filters: null
    };

    private readonly sanitizer = inject(DomSanitizer);

    protected readonly scssHtml = signal<SafeHtml | null>(null);
    protected readonly cssHtml = signal<SafeHtml | null>(null);

    private highlighter: { codeToHtml: (code: string, opts: { lang: string; theme: string }) => string } | null = null;

    private readonly stage = viewChild.required<ElementRef<HTMLElement>>('stage');
    /** The compiled theme, read from the stylesheet: the CSS export needs every
     *  token, not just the roots, to work in an app with no grid-theme(). */
    private readonly themeTokens = signal<[string, string][]>([]);

    constructor() {
        afterNextRender(() => {
            this.seedFromStylesheet();
            this.readCompiledTheme();
        });
    }
    protected readonly previewStyle = computed<Record<string, string>>(() => {
        const style: Record<string, string> = {};
        const colors = this.colors();

        for (const token of ALL_TOKENS) {
            if (colors[token.key]) {
                style[token.cssVar] = colors[token.key];
            }
        }
        if (colors.headerBackground && !colors.headerForeground) {
            style['--ig-grid-header-text-color'] = HEADER_TEXT_ON_HEADER;
        }

        style['--ig-size'] = `var(--ig-size-${this.size()})`;
        style['--ig-radius-factor'] = `${this.radiusFactor()}`;
        style['--ig-grid-row-border-color'] = this.horizontalDividers() ? DIVIDER : NO_DIVIDER;

        const columnRule = this.verticalDividers() ? DIVIDER : NO_DIVIDER;
        style['--ig-grid-body-column-border-color-odd'] = columnRule;
        style['--ig-grid-body-column-border-color-even'] = columnRule;

        if (this.zebra()) {
            style['--ig-grid-row-even-background'] = ZEBRA;
        }

        return style;
    });
    protected readonly exportScss = computed(() => {
        const colors = this.colors();
        const themeLines = ALL_TOKENS
            .filter(token => colors[token.key])
            .map(token => `    ${token.scss}: ${colors[token.key]},`);

        if (!this.horizontalDividers()) {
            themeLines.push(`    $row-border-color: ${NO_DIVIDER},`);
        }
        if (this.verticalDividers()) {
            themeLines.push(`    $body-column-border-color-odd: ${DIVIDER},`);
            themeLines.push(`    $body-column-border-color-even: ${DIVIDER},`);
        }
        if (this.zebra()) {
            themeLines.push(`    $row-even-background: ${ZEBRA},`);
        }

        const varLines = [
            `  --ig-size: var(--ig-size-${this.size()});`,
            `  --ig-radius-factor: ${this.radiusFactor()};`
        ];

        if (!themeLines.length) {
            return `.my-grid {\n${varLines.join('\n')}\n}`;
        }

        return `.my-grid {\n${varLines.join('\n')}\n\n  @include tokens(grid-theme(\n${themeLines.join('\n')}\n  ));\n}`;
    });

    protected readonly exportCss = computed(() => {
        const overrides = this.previewStyle();
        const base = this.themeTokens();

        if (!base.length) {
            const lines = Object.entries(overrides).map(([name, value]) => `  ${name}: ${value};`);
            return `/* Overrides only -- requires a grid-theme() base to derive from. */\n.my-grid {\n${lines.join('\n')}\n}`;
        }

        const emitted = new Set<string>();
        const lines = base.map(([name, value]) => {
            emitted.add(name);
            return `  ${name}: ${overrides[name] ?? value};`;
        });
        const extras = Object.entries(overrides)
            .filter(([name]) => !emitted.has(name))
            .map(([name, value]) => `  ${name}: ${value};`);

        return `.my-grid {\n${[...extras, ...lines].join('\n')}\n}`;
    });

    protected setColor(key: TokenKey, value: string): void {
        this.colors.update(current => ({ ...current, [key]: value }));
    }

    protected reset(): void {
        this.colors.set({ ...EMPTY_COLORS });
        this.size.set('medium');
        this.radiusFactor.set(0.4);
        this.horizontalDividers.set(true);
        this.verticalDividers.set(false);
        this.zebra.set(false);
        this.seedFromStylesheet();
    }

    protected async showCode(dialog: IgxDialogComponent): Promise<void> {
        if (!this.highlighter) {
            const [core, engine, scss, css, theme] = await Promise.all([
                import('shiki/core'),
                import('shiki/engine/javascript'),
                import('shiki/langs/scss.mjs'),
                import('shiki/langs/css.mjs'),
                import('shiki/themes/dark-plus.mjs')
            ]);

            this.highlighter = await core.createHighlighterCore({
                themes: [theme.default],
                langs: [scss.default, css.default],
                engine: engine.createJavaScriptRegexEngine()
            });
        }

        const render = (code: string | null, lang: string) => code
            ? this.sanitizer.bypassSecurityTrustHtml(this.highlighter.codeToHtml(code, { lang, theme: 'dark-plus' }))
            : null;

        this.scssHtml.set(render(this.exportScss(), 'scss'));
        this.cssHtml.set(render(this.exportCss(), 'css'));
        dialog.open();
    }

    protected copy(code: string | null, format: 'scss' | 'css'): void {
        if (!code) return;
        navigator.clipboard.writeText(code).then(() => {
            this.copied.set(format);
            setTimeout(() => this.copied.set(null), 2000);
        });
    }

    protected onSize(args: { index: number }): void {
        this.size.set((['small', 'medium', 'large'] as const)[args.index]);
    }

    protected onRoundness(args: { index: number }): void {
        this.radiusFactor.set([0, 0.4, 1][args.index]);
    }

    protected onPreview(args: { index: number }): void {
        this.preview.set((['grid', 'tree', 'hierarchical', 'pivot'] as const)[args.index]);
    }
    private readCompiledTheme(): void {
        const tokens: [string, string][] = [];

        for (const sheet of Array.from(document.styleSheets)) {
            let rules: CSSRuleList;

            try {
                rules = sheet.cssRules;
            } catch {
                continue; // cross-origin sheet, not ours
            }

            for (const rule of Array.from(rules)) {
                if (!(rule instanceof CSSStyleRule) || !rule.selectorText.includes('playground__stage')) {
                    continue;
                }

                for (let i = 0; i < rule.style.length; i++) {
                    const name = rule.style.item(i);
                    if (name.startsWith('--ig-')) {
                        tokens.push([name, rule.style.getPropertyValue(name).trim()]);
                    }
                }
            }
        }

        this.themeTokens.set(tokens);
    }

    private seedFromStylesheet(): void {
        const styles = getComputedStyle(this.stage().nativeElement);

        this.colors.update(current => ({
            ...current,
            background: styles.getPropertyValue('--ig-grid-background').trim(),
            accentColor: styles.getPropertyValue('--ig-grid-accent-color').trim()
        }));
    }
}
```
```html
<div class="playground">
    <aside class="playground__rail">
        <igx-accordion [singleBranchExpand]="false">
            <igx-expansion-panel [collapsed]="true">
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Grid Type</igx-expansion-panel-title>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p class="playground__hint">
                        One grid-theme() serves every grid. Switch here to see the same
                        tokens applied to a different one.
                    </p>
                    <igx-buttongroup [values]="previews" [alignment]="'vertical'" (selected)="onPreview($event)"></igx-buttongroup>
                </igx-expansion-panel-body>
            </igx-expansion-panel>

            <igx-expansion-panel [collapsed]="false">
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Primary tokens</igx-expansion-panel-title>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p class="playground__hint">
                        Start here. Background and accent are enough to theme the whole
                        grid &mdash; header, rows, icons and popups all derive from them.
                        Foreground is picked for contrast automatically; set it only to
                        override that.
                    </p>
                    <div class="playground__fields">
                        @for (token of primaryTokens; track token.key) {
                            <app-theme-color-field
                                [label]="token.label"
                                [value]="colors()[token.key]"
                                (valueChange)="setColor(token.key, $event)" />
                        }
                    </div>
                </igx-expansion-panel-body>
            </igx-expansion-panel>

            <igx-expansion-panel>
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Header</igx-expansion-panel-title>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p class="playground__hint">
                        Optional. The header normally derives from the background.
                        Declare one here and it detaches, becoming a root of its own —
                        its text then takes contrast against the new header rather
                        than following the grid foreground.
                    </p>
                    <div class="playground__fields">
                        @for (token of headerTokens; track token.key) {
                            <app-theme-color-field
                                [label]="token.label"
                                [value]="colors()[token.key]"
                                (valueChange)="setColor(token.key, $event)" />
                        }
                    </div>
                </igx-expansion-panel-body>
            </igx-expansion-panel>

            <igx-expansion-panel [collapsed]="false">
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Structure</igx-expansion-panel-title>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <div class="playground__fields">
                        <div class="playground__control">
                            <span class="playground__label">Density</span>
                            <igx-buttongroup [values]="sizes" [alignment]="'vertical'" (selected)="onSize($event)"></igx-buttongroup>
                        </div>
                        <div class="playground__control">
                            <span class="playground__label">Roundness</span>
                            <igx-buttongroup [values]="roundnessOptions" [alignment]="'vertical'" (selected)="onRoundness($event)"></igx-buttongroup>
                        </div>
                        <igx-switch [checked]="horizontalDividers()" (change)="horizontalDividers.set($event.checked)">
                            Horizontal dividers
                        </igx-switch>
                        <igx-switch [checked]="verticalDividers()" (change)="verticalDividers.set($event.checked)">
                            Vertical dividers
                        </igx-switch>
                        <igx-switch [checked]="zebra()" (change)="zebra.set($event.checked)">
                            Zebra rows
                        </igx-switch>
                        <p class="playground__hint">
                            Both dividers use the same derived colour, and switching one
                            off tints it to the surface rather than removing it, so the
                            row metrics never change.
                        </p>
                    </div>
                </igx-expansion-panel-body>
            </igx-expansion-panel>
        </igx-accordion>

        <div class="playground__actions">
            <button igxButton="outlined" type="button" (click)="reset()">Reset</button>
            <button igxButton="contained" type="button" (click)="showCode(code)">Show code</button>
        </div>
    </aside>
    <section class="playground__preview">
        <div class="playground__stage" #stage
            [style.--ig-grid-background]="previewStyle()['--ig-grid-background'] || null"
            [style.--ig-grid-foreground]="previewStyle()['--ig-grid-foreground'] || null"
            [style.--ig-grid-accent-color]="previewStyle()['--ig-grid-accent-color'] || null"
            [style.--ig-grid-header-background]="previewStyle()['--ig-grid-header-background'] || null"
            [style.--ig-grid-header-text-color]="previewStyle()['--ig-grid-header-text-color'] || null"
            [style.--ig-grid-row-border-color]="previewStyle()['--ig-grid-row-border-color'] || null"
            [style.--ig-grid-body-column-border-color-odd]="previewStyle()['--ig-grid-body-column-border-color-odd'] || null"
            [style.--ig-grid-body-column-border-color-even]="previewStyle()['--ig-grid-body-column-border-color-even'] || null"
            [style.--ig-grid-row-even-background]="previewStyle()['--ig-grid-row-even-background'] || null"
            [style.--ig-size]="previewStyle()['--ig-size'] || null"
            [style.--ig-radius-factor]="previewStyle()['--ig-radius-factor'] || null">

            @switch (preview()) {
                @case ('grid') {
                    <igx-grid [data]="data" [width]="'100%'" [height]="'100%'"
                        [allowFiltering]="true" [filterMode]="'excelStyleFilter'"
                        [rowSelection]="'multiple'">
                        <igx-column field="ShipCountry" header="Country" width="150px" [sortable]="true" [filterable]="true" [groupable]="true"></igx-column>
                        <igx-column field="ShipCity" header="City" width="150px" [sortable]="true" [filterable]="true" [groupable]="true"></igx-column>
                        <igx-column field="ShipName" header="Ship Name" width="220px" [sortable]="true" [filterable]="true"></igx-column>
                        <igx-column field="Salesperson" header="Salesperson" width="180px" [sortable]="true" [filterable]="true"></igx-column>
                        <igx-column field="Quantity" header="Quantity" width="120px" dataType="number"
                            [sortable]="true" [hasSummary]="true" [summaries]="compactSummary"></igx-column>
                        <igx-paginator [perPage]="50"></igx-paginator>
                    </igx-grid>
                }
                @case ('tree') {
                    @defer (on immediate) {
                        <igx-tree-grid [data]="treeData" primaryKey="ID" foreignKey="ParentID"
                            [autoGenerate]="false" [width]="'100%'" [height]="'100%'"
                            [allowFiltering]="true" [filterMode]="'excelStyleFilter'"
                            [rowSelection]="'multiple'">
                            <igx-column field="Name" width="260px" [sortable]="true" [filterable]="true">
                                <ng-template igxCell let-cell="cell">
                                    <div class="playground__cell">
                                        <igx-avatar [src]="cell.row.data.Avatar" shape="circle" size="small"></igx-avatar>
                                        <span>{{ cell.value }}</span>
                                    </div>
                                </ng-template>
                            </igx-column>
                            <igx-column field="Title" dataType="string" [sortable]="true" [filterable]="true"></igx-column>
                            <igx-column field="Age" dataType="number" [sortable]="true" [filterable]="true"></igx-column>
                            <igx-column field="HireDate" dataType="date" [sortable]="true" [filterable]="true"></igx-column>
                        </igx-tree-grid>
                    } @placeholder {
                        <div class="playground__loading">Loading preview…</div>
                    }
                }
                @case ('hierarchical') {
                    @defer (on immediate) {
                        <igx-hierarchical-grid [data]="hierarchicalData" [autoGenerate]="false"
                            [width]="'100%'" [height]="'100%'"
                            [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
                            <igx-column field="Artist" [sortable]="true" [filterable]="true"></igx-column>
                            <igx-column field="Debut" dataType="number" [sortable]="true" [filterable]="true"></igx-column>
                            <igx-column field="GrammyNominations" header="Nominations" [sortable]="true" [filterable]="true"></igx-column>
                            <igx-column field="GrammyAwards" header="Awards" [sortable]="true" [filterable]="true"></igx-column>
                            <igx-row-island [height]="null" [key]="'Albums'" [autoGenerate]="false">
                                <igx-column field="Album" [sortable]="true"></igx-column>
                                <igx-column field="LaunchDate" header="Launch Date" dataType="date" [sortable]="true"></igx-column>
                                <igx-column field="BillboardReview" header="Review" [sortable]="true"></igx-column>
                            </igx-row-island>
                        </igx-hierarchical-grid>
                    } @placeholder {
                        <div class="playground__loading">Loading preview…</div>
                    }
                }
                @case ('pivot') {
                    @defer (on immediate) {
                        <igx-pivot-grid [data]="pivotData" [pivotConfiguration]="pivotConfig"
                            [width]="'100%'" [height]="'100%'"
                            [allowFiltering]="true" [filterMode]="'excelStyleFilter'">
                        </igx-pivot-grid>
                    } @placeholder {
                        <div class="playground__loading">Loading preview…</div>
                    }
                }
            }
        </div>
    </section>
</div>

<igx-dialog #code [closeOnOutsideSelect]="true">
    <igx-dialog-title>
        <div class="playground__dialog-title">Theme code</div>
    </igx-dialog-title>

    <div class="playground__dialog-body">
        <igx-accordion [singleBranchExpand]="true">
            <igx-expansion-panel [collapsed]="false">
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>SCSS</igx-expansion-panel-title>
                    <button igxIconButton="outlined" type="button" class="playground__copy"
                        [title]="copied() === 'scss' ? 'Copied' : 'Copy code'"
                        (click)="copy(exportScss(), 'scss'); $event.stopPropagation()">
                        <igx-icon>{{ copied() === 'scss' ? 'check' : 'content_copy' }}</igx-icon>
                    </button>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <div class="playground__code" [innerHTML]="scssHtml()"></div>
                </igx-expansion-panel-body>
            </igx-expansion-panel>

            <igx-expansion-panel>
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>CSS variables</igx-expansion-panel-title>
                    <button igxIconButton="outlined" type="button" class="playground__copy"
                        [title]="copied() === 'css' ? 'Copied' : 'Copy code'"
                        (click)="copy(exportCss(), 'css'); $event.stopPropagation()">
                        <igx-icon>{{ copied() === 'css' ? 'check' : 'content_copy' }}</igx-icon>
                    </button>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <div class="playground__code" [innerHTML]="cssHtml()"></div>
                </igx-expansion-panel-body>
            </igx-expansion-panel>
        </igx-accordion>
    </div>

    <div igxDialogActions>
        <button igxButton="flat" type="button" (click)="code.close()">Close</button>
    </div>
</igx-dialog>
```
```scss
@use "igniteui-angular/theming" as *;

:host {
    display: block;
    block-size: 100%;
}

.playground {
    display: flex;
    align-items: stretch;
    gap: 20px;
    padding: 16px;
    box-sizing: border-box;
    block-size: 100%;
    min-block-size: 520px;
    overflow: hidden;
}

.playground__stage {
    @include tokens(grid-theme(
        $background: #08002e,
        $accent-color: #ff7d52
    ));
}

.playground__rail {
    --ig-size: var(--ig-size-medium);
    --ig-button-group-elevation: 0;

    flex: 0 0 280px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-block-size: 0;
    overflow-y: auto;
    padding-inline-end: 4px;

    igx-expansion-panel-title {
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.04em;
        color: var(--ig-gray-700);
    }
}

.playground__hint {
    margin: 0 0 10px;
    font-size: 12px;
    line-height: 1.45;
    color: var(--ig-gray-600);
}

.playground__fields {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.playground__control {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.playground__label {
    font-size: 12px;
    color: var(--ig-gray-700);
}

.playground__actions {
    position: sticky;
    inset-block-end: 0;
    z-index: 1;
    display: flex;
    gap: 8px;
    padding-block: 8px;
    background: var(--ig-surface-500);
    border-block-start: 1px solid var(--ig-gray-200);

    button {
        flex: 1;
    }
}

.playground__dialog-title {
    font-size: 16px;
    font-weight: 600;
}

.playground__dialog-body {
    --ig-size: var(--ig-size-medium);
    --ig-icon-size: 18px;
    --ig-h5-font-size: 14px;
    --ig-h5-font-weight: 600;
    --ig-expansion-panel-border-radius: 4px;
    --ig-expansion-panel-header-background: var(--ig-gray-100);

    inline-size: min(680px, 80vw);

    ::ng-deep .igx-expansion-panel__body {
        padding: 0;
    }
}

.playground__copy {
    margin-inline-start: auto;
}

.playground__export {
    border: 1px solid var(--ig-gray-300);
    border-radius: 6px;
    overflow: hidden;
}

.playground__code {
    ::ng-deep pre.shiki {
        margin: 0;
        padding: 10px 12px;
        font-size: 13px;
        line-height: 1.5;
        font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
        max-block-size: 55vh;
        overflow: auto;
        overscroll-behavior: contain;
    }
}

.playground__loading {
    display: grid;
    place-items: center;
    block-size: 100%;
    color: var(--ig-gray-600);
    font-size: 13px;
}

.playground__preview {
    flex: 1 1 auto;
    min-inline-size: 0;
    min-block-size: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.playground__stage {
    flex: 1 1 auto;
    min-block-size: 0;
    overflow: hidden;
}

.playground__cell {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 100%;
}

@media (max-width: 860px) {
    .playground {
        flex-direction: column;
        block-size: auto;
        overflow: visible;
    }

    .playground__rail {
        flex: 0 0 auto;
        overflow: visible;
    }

    .playground__stage {
        min-block-size: 460px;
    }
}
```

## API References

- [`IgxGrid`](mcp:get_api_reference?platform=angular&component=IgxGridComponent)
- `IgxGridComponent Styles`

## Additional Resources

- [Grid overview](/grid/grid)
- [Palettes](/themes/sass/palettes)
- [Typography](/themes/typography)

- [Size](/grid/display-density)
- [Conditional Styling](/grid/conditional-cell-styling)


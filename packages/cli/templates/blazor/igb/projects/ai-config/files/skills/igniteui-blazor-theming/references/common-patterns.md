# Common Theming Patterns

> **Part of the [`igniteui-blazor-theming`](../SKILL.md) skill hub.**

## Contents

- [Built-in Themes](#built-in-themes)
- [Switching Theme at Build Time](#switching-theme-at-build-time)
- [Dark Mode Toggle at Runtime](#dark-mode-toggle-at-runtime)
- [CSS Custom Properties (Design Tokens)](#css-custom-properties-design-tokens)
- [Scoped Component Theming](#scoped-component-theming)
- [CSS Parts](#css-parts)
- [Global Design Tokens](#global-design-tokens)
- [Key Rules](#key-rules)

---

## Built-in Themes

Ignite UI for Blazor ships 8 built-in themes (4 families × 2 modes):

| Theme | Light CSS path | Dark CSS path |
|---|---|---|
| Bootstrap | `themes/light/bootstrap.css` | `themes/dark/bootstrap.css` |
| Material | `themes/light/material.css` | `themes/dark/material.css` |
| Fluent | `themes/light/fluent.css` | `themes/dark/fluent.css` |
| Indigo | `themes/light/indigo.css` | `themes/dark/indigo.css` |

All paths are relative to `_content/IgniteUI.Blazor/`.

---

## Switching Theme at Build Time

Add a single `<link>` tag in your host page:

### Blazor Server / Web App - `Components/App.razor` or `Pages/_Host.cshtml`

```html
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

### Blazor WASM - `wwwroot/index.html`

```html
<link href="_content/IgniteUI.Blazor/themes/light/material.css" rel="stylesheet" />
```

### .NET 9+ Web App - use `Assets` collection

```razor
<link rel="stylesheet" href="@Assets["_content/IgniteUI.Blazor/themes/light/fluent.css"]" />
```

Replace the file name to switch the entire application theme. Only **one** theme CSS file should be loaded at a time.

---

## Dark Mode Toggle at Runtime

Switch themes dynamically by updating the `href` attribute of the theme `<link>` tag via JavaScript interop or by using a CSS class on the `<body>`:

### Approach 1 - Replace the stylesheet href (JS Interop)

```razor
@inject IJSRuntime JS

<IgbButton @onclick="ToggleDark">Toggle Dark Mode</IgbButton>

@code {
    bool IsDark = false;

    async Task ToggleDark()
    {
        IsDark = !IsDark;
        var theme = IsDark ? "dark/bootstrap" : "light/bootstrap";
        await JS.InvokeVoidAsync("setTheme", $"_content/IgniteUI.Blazor/themes/{theme}.css");
    }
}
```

```html
<!-- wwwroot/index.html or App.razor -->
<link id="igTheme" href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />

<script>
    window.setTheme = function (href) {
        document.getElementById('igTheme').setAttribute('href', href);
    };
</script>
```

### Approach 2 - Preload both themes and toggle link disabled states

```html
<link id="igLightTheme" href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
<link id="igDarkTheme" href="_content/IgniteUI.Blazor/themes/dark/bootstrap.css" rel="stylesheet" disabled />
```

```js
window.toggleDarkMode = function (isDark) {
    document.getElementById('igLightTheme').disabled = isDark;
    document.getElementById('igDarkTheme').disabled = !isDark;
};
```

---

## CSS Custom Properties (Design Tokens)

All visual attributes of Ignite UI components (colors, borders, shadows, fonts) are exposed as CSS custom properties. You override them by declaring the property in a CSS rule that matches the component's scope. Design tokens are the **primary** theming approach - prefer them over `::part()` selectors.

**Workflow:**

1. Call `get_component_design_tokens` to get all available tokens for a component.
2. Pick the tokens you want to change.
3. Write a CSS rule that overrides those tokens.

**File context matters:**

- **Global CSS file** (`app.css`) - write `igc-<tag> { --ig-<component>-<token>: value; }` directly.
- **`.razor.css` isolation file** - add `::deep` before the `igc-<tag>` selector.

```css
/* app.css - global, no ::deep needed */
:root {
    --ig-primary-500: #7b2fff;
    --ig-primary-600: #6200ee;
}

igc-chip {
    --ig-chip-background: var(--ig-primary-500);
    --ig-chip-text-color: var(--ig-primary-500-contrast);
}
```

```css
/* MyView.razor.css - isolation file, ::deep required */
::deep igc-chip {
    --ig-chip-background: var(--ig-primary-500);
    --ig-chip-text-color: var(--ig-primary-500-contrast);
}
```

> **AGENT INSTRUCTION:** Always call `get_component_design_tokens(component: "<component-or-variant>")` before styling a component. For variant-based components such as buttons, query the exact variant such as `contained-button` or `flat-button`. Do NOT guess token names from memory.

---

## Scoped Component Theming

Apply a custom theme to a specific component instance (without affecting all components):

```razor
<div class="my-custom-button">
    <IgbButton>Custom Style</IgbButton>
</div>
```

```css
/* Scoped token override in your app's CSS (global file, no ::deep) */
.my-custom-button igc-button {
    --ig-primary-500: #ff5722;
    --ig-primary-600: #e64a19;
}
```

When the scoped override is inside a `.razor.css` isolation file, add `::deep`:

```css
/* MyComponent.razor.css - isolation file */
::deep .my-custom-button igc-button {
    --ig-primary-500: #ff5722;
    --ig-primary-600: #e64a19;
}
```

Use `::part()` within a scoped selector only for properties not covered by tokens - verify via `get_component_design_tokens` first:

```css
/* Global CSS */
.my-custom-button igc-button::part(base) {
    border-radius: 20px;
    font-weight: 700;
}

/* Isolation file */
::deep .my-custom-button igc-button::part(base) {
    border-radius: 20px;
    font-weight: 700;
}
```

---

## CSS Parts

Some Ignite UI Blazor components expose shadow DOM parts via `::part()`. Use these for styling only after the Blazor component documentation confirms the exact part names. Prefer design token CSS custom properties (via `get_component_design_tokens` / `create_component_theme`) over `::part()` - tokens are the primary theming layer. Only reach for `::part()` when the property you need is not covered by any design token.

**`::part()` is not a replacement for design tokens.** Setting a design token (e.g., `--ig-chip-background`) is different from using `::part(base) { background: ... }`. Use the token approach when a token exists; use `::part()` for properties the token system does not expose.

**Workflow:**

1. Call `get_component_design_tokens` to check whether the desired property has a token.
2. If a token exists, set it via `igc-<tag> { --ig-<component>-<token>: value; }` - no `::part()` needed.
3. If no token covers it, call `get_doc` to see the component's CSS parts list, then use `igc-<component-tag>::part(<part-name>)`.

**File context:**

- **Global CSS file** (`app.css`): use `igc-<tag>::part(<name>) { ... }` directly.
- **`.razor.css` isolation file**: prefix with `::deep` → `::deep igc-<tag>::part(<name>) { ... }`.

Example - styling the dialog footer area (global CSS):

```css
/* app.css - global, no ::deep needed */
igc-dialog::part(footer) {
    background-color: #f5f5f5;
    border-top: 1px solid #e0e0e0;
    padding: 12px 16px;
}
```

Same override in a `.razor.css` isolation file:

```css
/* MyView.razor.css - isolation file, ::deep required */
::deep igc-dialog::part(footer) {
    background-color: #f5f5f5;
    border-top: 1px solid #e0e0e0;
    padding: 12px 16px;
}
```

> **AGENT INSTRUCTION:** Blazor renders Ignite UI components as web components with `igc-` tag names. The CSS selector uses the web component tag name (e.g., `igc-button`, `igc-dialog`) not the Razor component name (`IgbButton`). `::deep` is a Blazor CSS isolation combinator - it is only needed in `.razor.css` files, not in global stylesheets.

---

## Global Design Tokens

Use the MCP theming tools to generate CSS for global design tokens:

### Roundness (border-radius)

```bash
set_roundness(platform: "blazor", output: "css", radiusFactor: 0.5)
# Returns CSS custom properties to add to :root
```

`radiusFactor` is a value from 0 (square) to 1 (maximum roundness).

### Spacing

```bash
set_spacing(platform: "blazor", output: "css", spacing: 1.25)
# Returns spacing CSS custom properties to add to :root
```

### Size

```bash
set_size(platform: "blazor", output: "css", size: "small")
# Returns size CSS custom properties; values: "small" | "medium" | "large"
```

Add the returned CSS to your global `app.css` or `wwwroot/css/app.css` inside a `:root {}` selector.

---

## Key Rules

1. **Always use the MCP theming tools to get token names.** Do not hardcode CSS variable names without first calling `get_component_design_tokens`.
2. **Only one theme CSS file should be active at a time.** Loading multiple themes causes conflicts.
3. **CSS selectors use `igc-` tag names, not Razor component names.** `igc-button::part(base)`, not `IgbButton::part(base)`.
4. **Design token overrides go in a plain CSS file** - there is no Sass step for Blazor theming.
5. **Scoped theming works by wrapping the component in a container with a CSS class** and scoping the CSS selector to that container.
6. **`_content/IgniteUI.Blazor/themes/`** is the correct base path for all built-in theme CSS files.

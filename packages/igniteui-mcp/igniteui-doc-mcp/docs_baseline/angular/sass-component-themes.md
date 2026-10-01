---
title: Component Themes
description: The Ignite UI for Angular Theming component is developed in SASS with a low-difficulty API that offers restyling of one component, multiple components, or the entire suite.
keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Theming Component, Angular Theming
llms:
  description: "Component themes allow you to change the styles of specific component instances by overriding the globally defined theme."
_tocName: Component Themes
---
# Component Themes

<div class="highlight">
Component themes allow you to change the styles of specific component instances by overriding the globally defined theme.
</div>

## Overview

<hr/>

Ignite UI for Angular component themes use CSS custom properties. Each component ships its structural CSS in its own bundle, while Sass theme functions and the `tokens()` mixin generate the design-token values consumed by those styles. This keeps component CSS tree-shakable and lets applications override themes at runtime without regenerating structural rules.

<igc-divider></igc-divider>

## Creating Themes

<hr/>

A component theme has two parts:

- **The component theme function** — normalizes the supplied values and returns a theme map.
- **The `tokens()` mixin** — consumes that map and emits CSS custom properties in global or scoped mode.

The old per-component wrapper mixins no longer exist as of Ignite UI for Angular 22.1.0. Use `tokens()` for every component theme.

### The tokens mixin

The mode determines whether `tokens()` emits universal overrides or the complete local variables consumed by a component's structural stylesheet.

**Global mode (default)** — emits universal `--ig-{component}-{property}` tokens. Local var() references are rewritten to their global equivalents so derived values (e.g., `adaptive-contrast`) resolve correctly at any scope. Sizable expressions are skipped, you have to pass concrete values instead.

```scss
// Input:
@include tokens(avatar-theme($background: red));

// Output:
:root {
  --ig-avatar-background: red;
  /* ... remaining avatar properties ... */
}
```

**Scoped mode** — emits component-local variables (`--{property}`) with a fallback chain from the configured prefix (`--igx-*`) to universal tokens (`--ig-*`) and finally the schema default. When called from the stylesheet root, the theme map's selector is used. When called inside another selector, declarations are emitted for the current selector and the component selector.

```scss
// Input (from root):
@include tokens(avatar-theme($background: red), $mode: 'scoped');

// Output:
igx-avatar {
  --background: var(--igx-avatar-background, var(--ig-avatar-background, red));
  /* ... remaining avatar properties ... */
}


// Input (from within a selector):
.my-theme {
  @include tokens(avatar-theme($background: red), $mode: 'scoped');
}

// Output:
.my-theme,
.my-theme igx-avatar {
  --background: var(--igx-avatar-background, var(--ig-avatar-background, red));
  /* ... */
}
```

Use the default global mode for universal overrides that should apply application-wide or be inherited by multiple component instances. The component must remain included in the global [`theme()`](/themes/sass/global-themes) output so its local declarations can consume the universal tokens.

Defining an avatar theme:

```scss
// Change the background of the avatar to purple.
$avatar-purple-theme: avatar-theme(
  $background: purple,
);

// Pass the theme to tokens() in its default global mode.
@include tokens($avatar-purple-theme);
```

The code emits universal `--ig-avatar-*` overrides at `:root`. If another global `tokens()` call for the avatar appears later, normal cascade order makes the later values win.

For instance:

```scss
// ...
@include tokens($avatar-purple-theme);

// Later
$avatar-royalblue-theme: avatar-theme(
  $background: royalblue,
);

@include tokens($avatar-royalblue-theme);
```

In the above code, the de facto global theme is now the `$avatar-royalblue-theme` as it overwrites any previously included `tokens` mixins.

Use `$mode: 'scoped'` only when the theme must emit component-local declarations that are not already supplied by the global theme. Typical cases include components excluded from `theme()`, component-local sizing expressions, theme maps whose multiple selectors need local declarations, and themes that establish a different schema or light/dark variant. Pass that variant's `$schema` to the component theme function.

Do not select scoped mode merely because `tokens()` is nested in a selector or replaces a `css-vars()` call. If the component remains in the global `theme()` output, default global mode usually provides the intended override through the universal-token fallback chain. Use scoped mode only after determining that the customization depends on declarations the default mode does not emit.

Detached overlays do not inherit token overrides from the component that opened them. Emit the override globally or move the outlet beneath the themed container. Use scoped mode only if the overlay customization also requires component-local declarations that the global theme does not provide. See [Overlay Styling](/overlay-styling).

<igc-divider></igc-divider>

## Scoping Themes

<hr/>

As we saw in the previous example, when adding multiple themes targeting the same component at the same level, the last theme mixin takes precedence. This is due to the way the CSS cascade works. If you want to have two or more themes targeting the same type of component, you will have to scope them to a selector. For instance we can create multiple `igx-avatar` themes and scope them to specific CSS selectors we can later use in our component markup.

```scss
// ...
// CSS class selectors
.avatar-royalblue {
  @include tokens($avatar-royalblue-theme);
}

.avatar-purple {
  @include tokens($avatar-purple-theme);
}
```

In a component template:

```html
<div class="avatar-royalblue">

  <igx-avatar initials="AZ"></igx-avatar>
</div>

<div class="avatar-purple">

  <igx-avatar icon="home"></igx-avatar>
</div>
```

<igc-divider></igc-divider>

## Cascade Layers

<hr/>

Structural styles, design-system overrides, and derived/contextual tokens are split across component bundles and the global preset. Ignite UI declares them in the following [cascade layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) order: `ig.reset` → `ig.base` → `ig.material`/`ig.bootstrap`/`ig.fluent`/`ig.indigo` → `ig.derived`. A later layer wins over an earlier one regardless of bundle load order.

Wrap a third-party reset or normalize stylesheet in `ig.reset` so it cannot override component or typography styles:

```scss
@layer ig.reset {
  @import "minireset.css";
}
```

**Warning:** 
Unlayered application rules take precedence over Ignite UI's layered rules. Keep ordinary application overrides unlayered unless you intentionally want them to participate in the Ignite UI layer order.

## View Encapsulation

<hr/>

So far we've explored ways to create themes that are globally scoped, and are included in a single Sass file. However, this is not always desirable, and in some instances you will want the Sass file to be bound to a specific component. In those cases we have to take View Encapsulation, and specifically how it is emulated in Angular, into consideration.

The Angular team has adopted 3 strategies for View Encapsulation - Emulated(default), ShadowDom, and None. To learn more about each of these strategies, take a look at the [Angular Documentation](https://angular.dev/api/core/ViewEncapsulation). We will take a closer look at how to handle theming of Ignite UI for Angular components that are part of View Encapsulated parent components.

What exactly does `Emulated` View Encapsulation mean, anyway? This type of View Encapsulation does not take advantage of the Shadow DOM specification, instead it employs a way to bind styles for a component and its children by using a unique attribute identifier applied on the host element.

Let's take a look at an example using CSS variables. Let's create an avatar theme that is bound to specific parent component.

Here's our simple component:

```typescript
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-avatar",
  styleUrls: ["./app-avatar.component.scss"],
  template: `<igx-avatar [initials]="initials"></igx-avatar>`,
})
export class AvatarComponent extends Component {
  @Input() public initials = "AZ";
}
```

And this is what our Sass stylesheet looks like:

```scss
// app-avatar.component.scss

// Import the theming module
@use "igniteui-angular/theming" as *;

// !IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';

$avatar-royalblue-theme: avatar-theme(
  $background: royalblue,
);

:host {
  @include tokens($avatar-royalblue-theme);
}
```

The universal avatar tokens are declared on this host and inherited by its avatar. Angular's generated encapsulation attributes can still prevent selectors emitted by more complex component themes from matching nested or internal elements. If a local theme does not take effect, use `::ng-deep` around that include or move it to a global stylesheet. The theme remains limited to this `app-avatar` subtree unless it is emitted globally.

Shadow DOM boundaries and detached overlay outlets require the theme to be emitted where the target can inherit from it or where its selectors can match.

The above instance could also be achieved without using any Sass. All we need to do is to set the value of `--ig-avatar-background` CSS variable to the desired color:

```css
/* app-avatar.component.css */
:host {
  --ig-avatar-background: royalblue;
}
```

## API Overview

<hr/>

- `Global Theme`
- `Avatar Theme`

## Additional Resources

<hr/>

Learn how to configure a global theme:

- [Global Themes](/themes/sass/global-themes)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

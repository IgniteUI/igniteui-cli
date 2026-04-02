---
title: Component Themes
_description: The Ignite UI for Angular Theming component is developed in SASS with a low-difficulty API that offers restyling of one component, multiple components, or the entire suite.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Theming Component, Angular Theming
_tocName: Component Themes
---

# Component Themes

<p class="highlight">Component themes allow you to change the styles of specific component instances by overriding the globally defined theme.</p>

## Overview

<div class="divider--half"></div>

Before we dig deep into how you can create component-level themes, let's take a few moments to talk about how Ignite UI for Angular approaches component theming. Because we want to be able to support older browsers, like IE11, we have two completely different approaches for theming components.

- The first approach is to style component instances using [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables). By using CSS variables we gain the ability to create component themes without replicating their styles over and over again. Also, this approach allows us to modify the value of the CSS variables at runtime.
- The second approach is to create a new set of CSS rules that overwrite any previously declared CSS rules for a specific component. This approach is pretty straight-forward, and it is the only way we can provide sensible theming support for older browser, albeit it is not ideal as it adds a lot of additional CSS rules to the generated CSS theme.

We'll take a look at how these approaches work in practice, and how to use one instead of the other when generating component-level themes.

<div class="divider"></div>

## Creating Themes

<div class="divider--half"></div>

There are several parts to a component theme:

- **The component theme function** - A Sass function that normalizes the passed arguments and produces a theme to be consumed by a component mixin.
- **The Tokens mixin** - A Sass mixin that consumes a component theme that generates CSS variable tokens from an Ignite UI component theme.
- **The component mixin** - A Sass mixin that consumes a component theme and produces _CSS rules_ used to style a particular component.


### The tokens mixin

Using the `tokens` mixin is the preferred way to customize your components. It generates CSS custom properties (`design tokens`) from an Ignite UI component theme in either global or scoped mode.

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

**Scoped mode** — emits component-scoped variables `--{property}` with a fallback chain: configured prefix `(--igx-*) -> universal (--ig-*) -> schema default`. When called from the stylesheet root, the theme's selector is used to create the rule. When called inside a selector, both the current selector and the component selector receive the variables.

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

Say you want to create a new global avatar theme that has a different background color to the one we set in the avatar's default theme. As mentioned in the [**overview section**](#overview) there are 2 general approaches to creating a component theme.
There are even more ways you can organize and scope your component themes. The most straightforward way to do that is in the same file you defined your [**global theme**](./global-themes.md).

Defining an avatar theme:

```scss
// Change the background of the avatar to purple.
$avatar-purple-theme: avatar-theme(
  $background: purple,
);

// Pass the theme to the `tokens` mixin
:root {
  @include tokens($avatar-purple-theme);
}
```

The above code produces CSS variables for the `igx-avatar` component. These new CSS variables overwrite the default avatar rules.
Similarly, if you were to include `tokens` mixin later down in the global `scss` file, the mixin will again overwrite any previously defined themes.

For instance:

```scss
// ...
:root {
  @include tokens($avatar-purple-theme);
}

// Later
$avatar-royalblue-theme: avatar-theme(
  $background: royalblue,
);

:root {
  @include tokens($avatar-royalblue-theme);
}
```

In the above code, the de facto global theme is now the `$avatar-royalblue-theme` as it overwrites any previously included `tokens` mixins.

This brings us to our next point.

<div class="divider"></div>

## Scoping Themes

<div class="divider--half"></div>

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

<div class="divider"></div>

## View Encapsulation

<div class="divider--half"></div>

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

When using CSS variables, we don't have to use the `::ng-deep` pseudo-selector. With the code above we've created CSS variables for the `igx-avatar`, which will always have `royalblue` as its background color. The theme for our custom avatar will not 'leak' into other `igx-avatar` component instances, thus staying encapsulated within our custom `app-avatar` component.

The above instance could also be achieved without using any Sass. All we need to do is to set the value of `--ig-avatar-background` CSS variable to the desired color:

```css
/* app-avatar.component.css */
:host {
  --ig-avatar-background: royalblue;
}
```

<div class="divider-half"></div>

## API Overview

<div class="divider--half"></div>

- [Global Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-theme)
- [Avatar Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-avatar-theme)

## Additional Resources

<div class="divider--half"></div>

Learn how to configure a global theme:

- [Global Themes](./global-themes.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

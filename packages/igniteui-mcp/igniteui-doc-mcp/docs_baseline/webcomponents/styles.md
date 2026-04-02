---
title: Web Components Styling and Themes | Web Components Theming | Theme Switching | Infragistics
_description: Use Infragistics' Web Components components to create apps and improve data visualization with the world’s fastest, virtualized, real-time Web Components data grid and streaming financial and business and financial charts.
_keywords: Ignite UI for Web Components, Infragistics, Themes, Styling
_license: MIT
mentionedTypes: ["ConfigureTheme"]
_tocName: Styles
---

# Customizing Component Styles in Ignite UI for Web Components

The Ignite UI for Web Components components allow users to modify various parts of their stylesheet by exposing [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) and [CSS parts](https://developer.mozilla.org/en-US/docs/Web/CSS/::part).

## CSS Parts

Apart from the methods for customizing the various parts of the component's theme, like colors, shadows, typography, roundness, size, and spacing mentioned in the previous sections of this documentation, you can get your hands dirty by overwriting specific sections of the stylesheet of each component by targeting specific parts of it. All components expose various CSS parts that allow you to add or override existing styles defined internally for the component.

What parts a component exposes can be found out in the API documentation for each component. If you are the exploratory type and want to have a more hands-on approach to coding, you can always find that out by using the 'inspector' interface of your browser of choice.
For example, if you wanted to find what parts the avatar exposes, simply right-click on the component in your browser and click 'Inspect' (in Chrome). This will open up the web inspector and reveal the custom element markup in the elements explorer tab. You should see something similar to the screenshot below.

<img class="responsive-img" src="../../images/avatar-markup.png" alt="avatar markup"/>

You will notice that the [`IgcAvatarComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcavatarcomponent.html) exposes 4 parts - `base`, `icon`, `image`, and `initials` depending on the type of the avatar. Those parts allow you to overwrite styles defined within their scope.

So if you wanted to change the color of the initials to the primary color in your palette you can overwrite the color property in either `base` or `initials` like so:

```css
igc-avatar::part(base) {
  color: var(--ig-primary-500);
}
```

You can use the same approach to modify or add any property in the `base` part or any other part in any other component.

## CSS Variables

An alternative approach would be to modify the CSS variables responsible for various parts of the styling of the component. Conveniently, the avatar styles its initials using a variable from the existing palette. Upon closer inspection, we can see that the color variable is `--ig-gray-800`. Modifying the value of this variable in the scope of the avatar would also allow us to change the color of the initials.

```css
igc-avatar {
  --ig-gray-800: hsl(0, 0%, 62%);
}
```

Rewriting the value of the `--ig-gray-800` variable does the same as the previous example without explicitly overwriting the color property. This approach works, but could get a bit confusing to track where the color is coming from if you inspect the color property in isolation. Therefore, overwriting the color property in the base part is recommended.

## Conclusion

Having learned about CSS parts and CSS variables and in combination with the other methods listed in the documentation, you should be able to tailor the look of all components to your liking.

## API References

- `ConfigureTheme`

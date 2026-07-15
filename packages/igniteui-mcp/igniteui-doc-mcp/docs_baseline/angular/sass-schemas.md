---
title: Schemas
_description: Ignite UI for Angular theming schemas allow you to create recipes for component themes.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library 
_tocName: Schemas
---

# Schemas

<p class="highlight">Schemas are a simple, declarative way to list all properties a component theme uses.</p>

<div class="divider--half"></div>

## Overview

Schemas are like recipes. They are simple Sass maps, similar to JSON that allow us to define all properties a theme might use. Those properties can be colors, elevation levels, roundness, etc. Anything a theme consumes can be described as a `schema`, then passed to the global or component theme. A component schema can extend an existing component schema and override its properties.

**Schemas should be used when you want to change the default theme properties of a component in a way that will not result in duplicating CSS style rules or CSS variables**.

Let's take a look at the light Material Avatar schema:

```scss
$light-avatar: (
    background: (
        color: (
            'gray',
            400,
            0.54,
        ),
    ),
    color: (
        color: (
            'gray',
            800,
            0.96,
        ),
    ),
    icon-color: (
        color: (
            'gray',
            800,
            0.96,
        ),
    ),
    border-radius: rem(8px),
    size: (
        sizable: (
            rem(40px),
            rem(64px),
            rem(88px),
        ),
    ),
    default-size: 1,
);
```

As you can see from the example above, the component schema defines the properties the [Avatar Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-avatar-theme) consumes. It just prescribes the colors the avatar should use, without referencing a concrete color palette map.

Let's take the `background` property for example. It tells the avatar theme what the default background should be.

_The `background` can be assigned any value, that is, a value that can be assigned to the CSS `background-color` property._ You can also assign a map to `background`, like in the sample above. When you assign a map to the `background` property, the map should contain functions as the key names (e.g. `color`), and arguments for the functions as values for said keys. We do this to be able to resolve the values later on, when the avatar theme is being built. See, because we don't know the palette a user might pass to the avatar theme, we should be able to resolve it later on, only when the palette is known.

<div class="divider--half"></div>

## Extending Schemas

As you saw from the example above. Schemas are simple maps and as such can be extended by overriding some of their properties. You might want to _extend_ the material avatar schema by only changing its `background` property, without having to copy all other properties manually. This is easily done using the `extend` function we provide.

```scss
$my-avatar-schema: extend($light-avatar, (
    background: limegreen
));
```

Now the value of `$my-avatar-schema` will contain all properties of `$_light-avatar`, but the value for `background` will have be `limegreen`.

## Predefined Schemas

We provide predefined light and dark schemas that we use in our theme presets:

- Light Schemas
  - `$light-material-schema`
  - `$light-fluent-schema`
  - `$light-bootstrap-schema`
  - `$light-indigo-schema`
- Dark Schemas
  - `$dark-material-schema`
  - `$dark-fluent-schema`
  - `$dark-bootstrap-schema`
  - `$dark-indigo-schema`

We use the light and dark schemas accordingly with the light and dark palettes to create the component themes. For example, using the `$light-material-schema` along with the `$light-material-palette` will help us create all of the light material component themes. And vice versa - using the `$dark-material-schema` along with the `$dark-material-palette` will give us the dark material component themes.

## Consuming Schemas

Until now we have shown what a component schema is and how you can create one, but we have not talked about how you can use schemas in your Sass project.

Individual component schemas are bundled up in a global schema map for all components we have. So the `$light-avatar` schema is stored in the `$material-avatar` variable, which is then used in the global `$light-material-schema`. The `$light-material-schema` map contains all component names as keys, and their corresponding schemas as values. The `$light-material-schema` looks something like this:

```scss
$light-material-schema: (
    action-strip: $material-action-strip,
    avatar: $material-avatar,
    badge: $material-badge,
    ...
);
```

We do this so we can pass the entire `$light-material-schema` to the `theme` mixin. So for instance if we wanted to modify the `$light-material-schema` by replacing the default component schema the avatar component uses we might do:

```scss
$my-light-schema: extend($light-material-schema, (
    avatar: $my-avatar-schema
));
```

Now we can pass all that to the global theme mixin:

```scss
// styles.scss
@include theme(
    $schema: $my-light-schema,
    $palette: $default-palette
);
```

Avatars in your global theme will now use limegreen color for their background.

Some component schemas, like the button schema, have property definitions for roundness. This means that you can change the default button roundness for all buttons.

Let's see how individual component themes can use the schema we created above.

```scss
$my-avatar-theme: avatar-theme(
    $schema: $my-avatar-schema
);
```

Currently, the most common use case for schemas is when we want a specific element to have a different theme than the global one.
For example, if we had `$light-material-schema` applied for our global theme, and we wanted only one specific avatar component to use `$light-indigo-schema` we can do the following:

```scss
// We only get the avatar part of the light-indigo-schema
$indigo-avatar: map.get($light-indigo-schema, avatar);

// We include the specific schema to a class which we can then set on the avatar component that we want
.indigo-avatar {
    @include tokens(
        avatar-theme(
            $schema: $indigo-avatar
        )
    );
}
```

## Conclusions

Although schemas require a deeper knowledge of our theming library compared to theme functions and mixins, they allow us to declare component themes without increasing the size of the produced CSS. Another benefit of using schemas is how reusable and extensible they are as they are simple Sass maps. You can mix and match component schemas to create global theme schemas.

We use schemas internally to create variations that result in different pre-bundled themes for Material, Bootstrap, Fluent, and Indigo.

## API Overview

- [Light Components Schema](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/schemas#variable-light-material-schema)
- [Dark Components Schema](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/schemas#variable-dark-material-schema)
- [Global Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-theme)
- [Avatar Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-avatar-theme)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

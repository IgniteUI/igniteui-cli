---
title: Angular Icon Service – Ignite UI for Angular | Infragistics | MIT license
_description: Developers can unify and use various icon and font sets interchangeably with custom colors and more with Ignite UI for Angular Icon Service. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Icon components, Angular Icon controls, Angular Icon service
_license: MIT
_tocName: Icon Service
---

# Angular Icon Service Overview

<p class="highlight">The Ignite UI for Angular Icon Service allows developers to add new icons from various sources to their UIs.</p>

## Introduction

The Ignite UI for Angular Icon Service provides several methods that allow users to create and manage icon families.

The icon service can be imported directly from the Ignite UI for Angular package.

```ts
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxIconService } from 'igniteui-angular/core';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ IgxIconComponent ]
})
export class AppComponent implements OnInit {
    constructor(public iconService: IgxIconService) {}
}
```

```typescript
import { Component, inject } from '@angular/core';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxCardActionsComponent, IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective } from 'igniteui-angular/card';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxSuffixDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-icon-service-sample',
    styleUrls: ['./icon-service-sample.component.scss'],
    templateUrl: './icon-service-sample.component.html',
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxAvatarComponent, IgxIconComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardActionsComponent, IgxButtonDirective, IgxSuffixDirective]
})
export class IconServiceSampleComponent {
    private iconService = inject(IgxIconService);

    private weather = [{
        icon: 'partly_cloudy',
        description: '18° Partly Cloudy'
    },
    {
        icon: 'sunny',
        description: '23° Sunny'
    },
    {
        icon: 'thunderstorms',
        description: '15° Thunderstorms'
    }];

    protected get status() {
        return this.weather.at(0).description
    };

    constructor() {
        // Add the SVG assets to the icon service collection
        this.iconService.addSvgIcon('partly_cloudy', 'assets/images/icons/partly_cloudy.svg', 'weather');
        this.iconService.addSvgIcon('sunny', 'assets/images/icons/sunny.svg', 'weather');
        this.iconService.addSvgIcon('thunderstorms', 'assets/images/icons/thunderstorms.svg', 'weather');

        this.iconService.addIconRef('weather_status', 'default', {
            name: 'partly_cloudy',
            family: 'weather'
        });
    }

    protected updateWeather() {
        this.weather.unshift(this.weather.pop());

        this.iconService.setIconRef('weather_status', 'default', {
            name: this.weather.at(0).icon,
            family: 'weather'
        });
    }
}
```
```html
<div class="wrapper">
    <igx-card>
        <igx-card-header>
            <igx-avatar>
                <igx-icon family="default" name="weather_status"></igx-icon>
            </igx-avatar>
            <h3 igxCardHeaderTitle>{{ status }}</h3>
            <h6 igxCardHeaderSubtitle>Current Weather</h6>
        </igx-card-header>
        <igx-card-actions>
            <button igxButton="contained" igxEnd (click)="updateWeather()">
                <igx-icon name="sync" family="material"></igx-icon>
                <span>Refresh</span>
            </button>
        </igx-card-actions>
        <igx-icon family="default" name="weather_status" backdrop inert></igx-icon>
    </igx-card>
</div>
```
```scss
@use "../../../../variables" as *;

.wrapper {
    display: flex;
    flex-flow: row wrap;
    margin: rem(16px) 0;
}

igx-card {
    position: relative;
    z-index: 0;
    min-width: rem(320px);
}

igx-avatar {
    z-index: 1;
    --ig-size: var(--ig-size-medium);
    --background: hsla(var(--ig-secondary-500), 6%);
    border: 1px solid var(--ig-secondary-500);
    border-radius: rem(4px);

    igx-icon {
        --size: #{rem(48px)};
        color: var(--ig-secondary-500);
    }
}

igx-icon[backdrop] {
    --size: #{rem(128px)};
    inset-block: rem(18px);
    inset-inline: calc(100% - var(--size));
    z-index: -1;
    position: absolute;
    color: var(--ig-gray-300);
}
```

### Adding Icon Families

By default the Icon Service sets its default family to `material`.

Adding new families of icons is done using the `setFamily` method of the icon service. It creates an family entry with some metadata that instructs the `igx-icon` component about the icon(s) it should render.

Let's use a practical example to explain how the `setFamily` method works:

```ts
/** 
* The icon service associates a given family name (provided by the user) 
* with a specific CSS class (as documented in the providing icon font) 
* and corresponding icon name (documented in the icon font).
* NOTE: Material is already the default family.
*/ 
iconService.setFamily('material', { className: 'material-icons', type: 'liga' });
iconService.setFamily('fa-solid', { className: 'fas', type: 'font', prefix: 'fa' });
```

The example above creates two icon families: 'material' and 'fa-solid'. Their types are different, the `material` family is registered as `liga`, while the `fa-solid` family is registered as `font`. The difference between the two is how the `igx-icon` component would go about rendering them. Typically, [Font Awesome](https://fontawesome.com/) uses class names to specify code points to a **font** family, hence why we set its type to `font`. Anytime we have to rely on code points to render icons, we should set the type to `font`. The [Material Icons](https://material.io/icons) family is still a font family, however, the standard way to display an icon is to provide a `ligature` name, instead of a class name pointing to a specific code point. For that reason, we need to set the type to `liga`. There's a third family type - `svg`, it is reserved for icon families that will be comprised of SVGs that are registered through the Icon Service.

Having registered the two font families above, we can now consume their icons in a standardized way via the `igx-icon` component:

```html
<igx-icon family="material" name="home"></igx-icon>
<igx-icon family="fa-solid" name="car"></igx-icon>
```

> [!NOTE]
> To render icons from the default `material` family with `igx-icon`, add the following link to your `index.html`: `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

You might have noticed that for the `material` family we use the ligature `name` as name, while in the case of the `fa-solid` family we specify the `className` for name, which is `fa-car` but drop the `fa-` prefix as it has been specified when we registered the icon family in the previous step.

### Adding SVG Icons

The Ignite UI for Angular Icon Service allows us to associate SVG images with families and give them names so that they can be included via the `igx-icon` component in the same way as font-based icons. The SVGs should be resolved via either strings or via absolute URI to the SVG asset.

```ts
// Add a new 'material' icon called 'my-icon' from an SVG file
iconService.addSvgIcon('my-icon', 'my-icon.svg', 'material');

// Add a new 'fa-solid' icon called 'my-icon' from string 
iconService.addSvgIconFromText('my-icon', '<svg>...</svg>', 'fa-solid');
```

Later in markup:

```html
<igx-icon family="material" name="my-icon"></igx-icon>
<igx-icon family="fa-solid" name="my-icon"></igx-icon>
```

Note that we are adding custom SVG icons to families of type `liga` and `font`. This is possible because the `addSvgIcon` and `addSvgIconFromText` methods register the icons as `svg` type implicitly, allowing the `igx-icon` component to correctly render the SVG.

## Meta Families

The Ignite UI for Angular Icon Service allows us to create pseudo family maps that combine icons added via either setting a family of font icons or adding SVGs under a common umbrella so that it's easier to reference them.

```ts
// The `setIconRef` sets an icon reference in the icon map,
// assuming material and fa-solid have been added as families,
iconService.setIconRef('home', 'my-family', { family: 'material', name: 'home' });
iconService.setIconRef('home-alt', 'my-family', { family: 'fa-solid', name: 'home' });
iconService.setIconRef('car', 'my-family', { family: 'fa-solid', name: 'car' });
```

Later in markup:

```html
<igx-icon family="my-family" name="home"></igx-icon>
<igx-icon family="my-family" name="home-alt"></igx-icon>
<igx-icon family="my-family" name="car"></igx-icon>
```

## Icon Retrieval

It is possible to get an icon for a given `family` and icon `name` in order to read the original icon `type`, `name`, `family`, and `className`.

```ts
const { family, className, name, type } = iconService.getIcon('my-family', 'car');

console.log(family); // -> 'fa-solid'
console.log(className); // -> 'fas'
console.log(name); // -> 'fa-car'
console.log(type); // -> 'font'
```

## Internal Usage

Starting with version 18.1.0 of Ignite UI for Angular, we added a new `setFamily` method that allows us to create new families of icons in the Icon Service and associate them with CSS classes, types, and even prefixes. Additionally, icons used internally are now all declared by reference in a new `default` family with aliased names (see table bellow).

| Alias                            | Target Icon           | Target Family |
| :------------------------------- | :-------------------- | :------------ |
| **add**                          | add                   | material      |
| **add_child**                    | add-child             | imx-icons     |
| **add_row**                      | add-row               | imx-icons     |
| **arrow_back**                   | arrow_back            | material      |
| **arrow_drop_down**              | arrow_drop_up         | material      |
| **arrow_forward**                | arrow_forward         | material      |
| **arrow_next**                   | chevron_right         | material      |
| **arrow_prev**                   | chevron_left          | material      |
| **case_sensitive**               | case-sensitive        | imx-icons     |
| **carousel_next**                | arrow_forward         | material      |
| **carousel_prev**                | arrow_back            | material      |
| **chevron_left**                 | chevron_left          | material      |
| **chevron_right**                | chevron_right         | material      |
| **clock**                        | access_time           | material      |
| **close**                        | close                 | material      |
| **collapse**                     | expand_less           | material      |
| **confirm**                      | check                 | material      |
| **date_range**                   | date_range            | material      |
| **delete**                       | delete                | material      |
| **drag_indicator**               | drag_indicator        | material      |
| **edit**                         | edit                  | material      |
| **error**                        | error                 | material      |
| **expand**                       | expand_more           | material      |
| **expand_more**                  | expand_more           | material      |
| **file_download**                | file_download         | material      |
| **filter_all**                   | select-all            | imx-icons     |
| **filter_before**                | is-before             | imx-icons     |
| **filter_contains**              | contains              | imx-icons     |
| **filter_does_not_contain**      | does-not-contain      | imx-icons     |
| **filter_empty**                 | is-empty              | imx-icons     |
| **filter_equal**                 | equals                | imx-icons     |
| **filter_false**                 | is-false              | imx-icons     |
| **filter_greater_than**          | greater-than          | imx-icons     |
| **filter_greater_than_or_equal** | greater-than-or-equal | imx-icons     |
| **filter_in**                    | is-in                 | imx-icons     |
| **filter_last_month**            | last-month            | imx-icons     |
| **filter_last_year**             | last-year             | imx-icons     |
| **filter_less_than**             | less-than             | imx-icons     |
| **filter_less_than_or_equal**    | less-than-or-equal    | imx-icons     |
| **filter_next_month**            | next-month            | imx-icons     |
| **filter_next_year**             | next-year             | imx-icons     |
| **filter_not_empty**             | not-empty             | imx-icons     |
| **filter_not_equal**             | not-equal             | imx-icons     |
| **filter_not_null**              | is-not-null           | imx-icons     |
| **filter_null**                  | is-null               | imx-icons     |
| **filter_starts_with**           | starts-with           | imx-icons     |
| **filter_this_month**            | this-month            | imx-icons     |
| **filter_this_year**             | this-year             | imx-icons     |
| **filter_today**                 | today                 | imx-icons     |
| **filter_true**                  | is-true               | imx-icons     |
| **filter_yesterday**             | yesterday             | imx-icons     |
| **first_page**                   | first_page            | material      |
| **group_work**                   | group_work            | material      |
| **hide**                         | visibility_off        | material      |
| **import_export**                | import_export         | material      |
| **input_collapse**               | arrow_drop_up         | material      |
| **input_clear**                  | clear                 | material      |
| **input_expand**                 | arrow_drop_down       | material      |
| **jump_down**                    | jump-down             | imx-icons     |
| **jump_up**                      | jump-up               | imx-icons     |
| **last_page**                    | last_page             | material      |
| **more_vert**                    | more_vert             | material      |
| **next**                         | navigate_next         | material      |
| **pin**                          | pin-left              | imx-icons     |
| **prev**                         | navigate_before       | material      |
| **refresh**                      | refresh               | material      |
| **remove**                       | cancel                | material      |
| **search**                       | search                | material      |
| **selected**                     | done                  | material      |
| **show**                         | visibility            | material      |
| **sort_asc**                     | arrow_upward          | material      |
| **sort_desc**                    | arrow_downward        | material      |
| **functions**                    | functions             | material      |
| **table_rows**                   | table_rows            | material      |
| **today**                        | calendar_today        | material      |
| **tree_collapse**                | expand_more           | material      |
| **tree_expand**                  | chevron_right         | material      |
| **unfold_less**                  | unfold_less           | material      |
| **unfold_more**                  | unfold_more           | material      |
| **unpin**                        | unpin-left            | imx-icons     |
| **view_column**                  | view_column           | material      |

To take advantage of changing the internal icons by reference, as opposed by to creating custom templates, you can do the following to replace the expand/collapse icons in the combo and select components:

```ts
iconService.setIconRef('input_expand', 'default', {
    name: 'arrow_downward',
    family: 'material',
});

iconService.setIconRef('input_collapse', 'default', {
    name: 'arrow_upward',
    family: 'material',
});
```

This will set the expand and collapse icons to the `arrow_downward` and `arrow_upward` ligatures, respectively, from the `material` font family for all combo and select components.

Here's a breakdown of all icons as used by each component:

<style>
.table-responsive tbody tr td:first-of-type {
    width: 25%;
    min-width: fit-content;
}
</style>

### Action Strip

| Icon          | Description             |
| :------------ | :---------------------- |
| **add_child** | Used by the popup menu. |
| **add_row**   | Used by the popup menu. |
| **more_vert** | Used by the popup menu. |

### Calendar

| Icon           | Description                                             |
| :------------- | :------------------------------------------------------ |
| **arrow_prev** | Used by the header for navigating between months/years. |
| **arrow_next** | Used by the header for navigating between months/years. |

### Carousel

| Icon              | Description                         |
| :---------------- | :---------------------------------- |
| **carousel_prev** | Used for navigating between slides. |
| **carousel_next** | Used for navigating between slides. |

### Chip

| Icon         | Description                               |
| :----------- | :---------------------------------------- |
| **selected** | Used to indicate that a chip is selected. |
| **remove**   | Used for the remove button.               |

### Combo (incl. Simple Combo)

| Icon               | Description                                                  |
| :----------------- | :----------------------------------------------------------- |
| **case_sensitive** | Used to indicate and toggle case-sensitive filtering.        |
| **input_clear**    | Used for the clear button.                                   |
| **input_expand**   | Used for the toggle button when the combo menu is collapsed. |
| **input_collapse** | Used for the toggle button when the combo menu is expanded.  |

### Date Picker

| Icon            | Description                                          |
| :-------------- | :--------------------------------------------------- |
| **today**       | Used for the toggle button that triggers the picker. |
| **input_clear** | Used for the clear button.                           |

### Date Range Picker

| Icon           | Description                                          |
| :------------- | :--------------------------------------------------- |
| **date_range** | Used for the toggle button that triggers the picker. |

### Expansion Panel

| Icon         | Description                                                   |
| :----------- | :------------------------------------------------------------ |
| **expand**   | Used for the toggle button that triggers the expanded state.  |
| **collapse** | Used for the toggle button that triggers the collapsed state. |

### Grid

| Icon                | Description                                                                |
| :------------------ | :------------------------------------------------------------------------- |
| **add**             | Used in excel-filter menu to add filter entry.                             |
| **arrow_back**      | Used in various UI elements for moving a column backwards.                 |
| **arrow_drop_down** | Used in various buttons to indicate toggleable menus.                      |
| **arrow_forward**   | Used in various UI elements for moving a column forwards.                  |
| **cancel**          | Used in various UI elements for canceling operations.                      |
| **chevron_right**   | Used to indicate expandable menus, like in the excel style filtering.      |
| **close**           | Used to close an expanded menu.                                            |
| **confirm**         | Used to confirm an operation.                                              |
| **drag_indicator**  | Used to show a handle to indicate an item can be dragged.                  |
| **error**           | Used in editable cells to indicate erroneous data input.                   |
| **expand_more**     | Used by the excel filtering menu to indicate the addition of more filters. |
| **file_download**   | Used by the excel filter exporter.                                         |
| **filter_***        | Used for various filtering operands.                                       |
| **group_work**      | Used by the group-by drop area.                                            |
| **hide**            | Used by various UI elements for hiding columns.                            |
| **import_export**   | Used by the pivot data selector for moving.                                |
| **input_clear**     | Used by input fields for clearing input data.                              |
| **next**            | Used by the filtering row menu to navigate between chips.                  |
| **pin**             | Used by various UI elements for column pinning.                            |
| **prev**            | Used by the filtering row menu to navigate between chips.                  |
| **remove**          | Used by various UI elements as a removal indicator.                        |
| **refresh**         | Used by the filtering row menu to reload the filters.                      |
| **selected**        | Used by various UI elements to indicated active selection.                 |
| **show**            | Used by various UI elements for showing columns.                           |
| **sort_asc**        | Used by various UI elements to indicate sorting direction.                 |
| **sort_desc**       | Used by various UI elements to indicate sorting direction.                 |
| **functions**       | Used by the pivot grid and data selectors.                                 |
| **table_rows**      | Used by the pivot grid data selector.                                      |
| **tree_collapse**   | Used by tree-like structure to show less details.                          |
| **tree_expand**     | Used by tree-like structure to show more details.                          |
| **unpin**           | Used by various UI elements for column pinning.                            |
| **unfold_less**     | Used by the hierarchical grid to collapse all rows.                        |
| **unfold_more**     | Used by the hierarchical grid to expand all rows.                          |
| **view_column**     | Used by the pivot data selector.                                           |

### Input Group

| Icon            | Description                |
| :-------------- | :------------------------- |
| **input_clear** | Used for the clear button. |

### Paginator

| Icon           | Description                                                  |
| :------------- | :----------------------------------------------------------- |
| **first_page** | Used by the button used for navigating to the first page.    |
| **last_page**  | Used by the button used for navigating to the last page.     |
| **prev**       | Used by the button used for navigating to the previous page. |
| **next**       | Used by the button used for navigating to the next page.     |

### Query Builder

| Icon         | Description                                              |
| :----------- | :------------------------------------------------------- |
| **add**      | Used by the button for adding new filter entries.        |
| **close**    | Used by the button that closes the contextual menu.      |
| **edit**     | Used by the button for editing filter entries.           |
| **confirm**  | Used by the button to confirm adding new filter entries. |
| **ungroup**  | Used by the button to ungroup filter entries.            |
| **delete**   | Used by the button to delete filter entries.             |
| **filter_*** | Used for various filtering operands.                     |


### Select

| Icon               | Description                                                   |
| :----------------- | :------------------------------------------------------------ |
| **input_expand**   | Used for the toggle button when the select menu is collapsed. |
| **input_collapse** | Used for the toggle button when the select menu is expanded.  |

### Tabs

| Icon     | Description                                                 |
| :------- | :---------------------------------------------------------- |
| **prev** | Used by the button used for navigating to the previous tab. |
| **next** | Used by the button used for navigating to the next tab.     |


### Time Picker

| Icon      | Description                                          |
| :-------- | :--------------------------------------------------- |
| **clock** | Used for the toggle button that triggers the picker. |

### Tree

| Icon              | Description                                          |
| :---------------- | :--------------------------------------------------- |
| **tree_expand**   | Used for the toggle button that triggers the picker. |
| **tree_collapse** | Used for the toggle button that triggers the picker. |

## API

Here's a quick summary of all methods available via the Ignite UI for Angular Icon Service.

### Add Family

```ts
setFamily(name: string, meta: IconFamilyMeta): IgxIconService;
```

### Icon References

Set ONLY if NOT already present the icon map:

```ts
addIconRef(name: string, family: string, icon: IconMeta): void;
```

Set an Icon reference in the icon map (overridden if already present):

```ts
setIconRef(name: string, family: string, icon: IconMeta): void;
```

Get and Icon reference

```ts
getIconRef(family: string, name: string): IconReference;
```

### SVG Icons

From URI:

```ts
addSvgIcon(name: string, url: string, family: string, stripMeta = false): void;
```

From string:

```ts
addSvgIconFromText(name: string, iconText: string, family: string, stripMeta = false): void;
```

## API References

<div class="divider--half"></div>

- [IgxIconService](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxiconservice.html)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

---
title: "Angular Icon Component"
description: "The Ignite UI for Angular Icon renders named icons from registered icon sets, including custom SVG icons, with theme-based sizes and custom colors."
keywords: "Angular Icon, Ignite UI for Angular, SVG icon, icon set"
license: MIT
last_updated: "2026-10-06"
relatedComponents: ["IconButton"]
mentionedTypes: ["Icon"]
llms:
  description: "The Ignite UI for Angular Icon is a component that renders a named icon from a registered icon set, such as a collection of custom SVG icons."
_tocName: Icon
---
# Icon

The Ignite UI for Angular Icon is a component that renders a named icon from a registered icon set, such as a collection of custom SVG icons.

By default, the Angular Icon renders Material Icons ligatures. Register SVG icons and other icon fonts with the `IgxIconService` to use them the same way.

## Live Demo

```typescript
import { Component } from '@angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxNavDrawerItemDirective, IgxNavDrawerTemplateDirective, IgxNavigationDrawerComponent } from 'igniteui-angular/navigation-drawer';

interface MenuItem {
    label: string;
    icon: string;
}

@Component({
    selector: 'app-icon-overview',
    styleUrls: ['./icon-overview.component.scss'],
    templateUrl: './icon-overview.component.html',
    imports: [IgxNavigationDrawerComponent, IgxNavDrawerTemplateDirective, IgxNavDrawerItemDirective, IgxIconComponent]
})
export class IconOverviewComponent {
    public menuItems: MenuItem[] = [
        { label: 'Home', icon: 'home' },
        { label: 'Inbox', icon: 'mail' },
        { label: 'Reports', icon: 'assignment' },
        { label: 'Settings', icon: 'settings' },
        { label: 'Support', icon: 'feedback' }
    ];

    public activeItem = 'Home';
}
```
```html
<igx-nav-drawer class="menu" [isOpen]="true" [pin]="true" [pinThreshold]="0">
    <ng-template igxDrawer>
        @for (item of menuItems; track item.label) {
            <span igxDrawerItem [active]="item.label === activeItem" (click)="activeItem = item.label">
                <igx-icon [name]="item.icon"></igx-icon>
                <span>{{ item.label }}</span>
            </span>
        }
    </ng-template>
</igx-nav-drawer>
```
```scss
:host {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.menu {
    height: auto;
}

/* A pinned drawer fills the height of its container. Here it is only as tall
   as its items. */
.menu ::ng-deep .igx-nav-drawer__aside {
    height: auto;
    min-height: auto;
}
```

## Anatomy

An icon is a symbol representing a command, device, directory, or common action.

**Icon anatomy:** The Icon component draws one glyph from a registered icon set.

<style>{`
  .icon-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .icon-anatomy .igd-anatomy__image {
    max-width: 94.5px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Icon:</strong> a visual symbol used to represent actions, objects or ideas</span>

The `igx-icon` element renders one of the following, depending on the type of its icon family:

```text
igx-icon.igx-icon[aria-hidden="true"]   // host - also carries the family class, e.g. .material-icons
├─ ligature text                        // `liga` family - the icon name, e.g. home
├─ div > svg                            // SVG icon registered with IgxIconService
└─ ng-content                           // projected ligature text when `name` isn't set
```

For a `font` family, the classes on the host draw the glyph, and the element has no content.

## Getting Started

To use the Angular Icon, follow the [Ignite UI for Angular Getting Started](../general/getting-started.md) topic for the basic project setup, then add the component for your target platform.

If your project doesn't use Ignite UI for Angular yet, run `ng add igniteui-angular`. Then import the standalone [`IgxIcon`](mcp:get_api_reference?platform=angular&component=IgxIconComponent) and add it to the `imports` of your component:

```ts
import { Component } from '@angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-home',
    template: '<igx-icon name="home"></igx-icon>',
    imports: [IgxIconComponent]
})
export class HomeComponent {}
```

The `home` name is a Material Icons ligature, so the icon appears as soon as the Material Icons font loads.

## Usage

Use the Angular Icon to add a recognizable symbol to labels, buttons, list items, and navigation, or to show a status at a glance.

### Name and Family

The Angular Icon looks up its [`name`](mcp:get_api_reference?platform=angular&component=IgxIconComponent&member=name) in its [`family`](mcp:get_api_reference?platform=angular&component=IgxIconComponent&member=family). The default `material` family renders Material Icons ligatures, so the name is the ligature, such as `home` or `favorite`:

```html
<igx-icon name="home"></igx-icon>
<igx-icon name="favorite"></igx-icon>
```

You can also project the ligature as content:

```html
<igx-icon>bluetooth</igx-icon>
```

### SVG Icons

Register SVG icons with the [`IgxIconService`](mcp:get_api_reference?platform=angular&component=IgxIconService), then set their name and family on the icon. The [`addSvgIcon`](mcp:get_api_reference?platform=angular&component=IgxIconService&member=addSvgIcon) method fetches an SVG file from a URL, and [`addSvgIconFromText`](mcp:get_api_reference?platform=angular&component=IgxIconService&member=addSvgIconFromText) registers SVG markup:

```ts
import { Component, OnInit, inject } from '@angular/core';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';

const searchIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';

@Component({
    selector: 'app-filter-icons',
    template: `
        <igx-icon name="contains" family="filter-icons"></igx-icon>
        <igx-icon name="search" family="filter-icons"></igx-icon>
    `,
    imports: [IgxIconComponent]
})
export class FilterIconsComponent implements OnInit {
    private iconService = inject(IgxIconService);

    public ngOnInit() {
        this.iconService.addSvgIcon('contains', 'assets/images/svg/contains.svg', 'filter-icons');
        this.iconService.addSvgIconFromText('search', searchIcon, 'filter-icons');
    }
}
```

When an SVG icon and a ligature share the same name and family, the icon renders the SVG.

### Font Families

Use [`setFamily`](mcp:get_api_reference?platform=angular&component=IgxIconService&member=setFamily) to add another icon font, such as [Material Symbols](https://fonts.google.com/icons), as a family. Load the font stylesheet first:

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
```

Map the family name to the CSS class of the font and set its type to `liga`:

```ts
this.iconService.setFamily('material-symbols', { className: 'material-symbols-outlined', type: 'liga' });
```

Then set the family on the icon. Material Symbols is a variable font, so you can adjust settings such as fill and weight:

```html
<igx-icon family="material-symbols" name="diamond" class="custom-icon"></igx-icon>
```

```scss
.custom-icon {
  font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0, "opsz" 40;
}
```

The [Icon Service](../icon-service.md) topic covers families of the `font` type, name prefixes, and icon references.

### Size

The Angular Icon supports the small, medium, and large size presets of the theme, and uses the large preset by default. Set the `--ig-size` CSS variable to `--ig-size-small`, `--ig-size-medium`, or `--ig-size-large` to choose a preset:

```css
.small {
  --ig-size: var(--ig-size-small);
}

.medium {
  --ig-size: var(--ig-size-medium);
}
```

```html
<igx-icon class="small" name="build"></igx-icon>
```

For a size outside the presets, set `--size` on the icon. To resize all icons inside a container, set `--ig-icon-size` on the container:

```css
.custom-size {
  --size: 56px;
}

.toolbar {
  --ig-icon-size: 2rem;
}
```

```typescript
import { Component } from '@angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-icon-size',
    styleUrls: ['./icon-size.component.scss'],
    templateUrl: './icon-size.component.html',
    imports: [IgxIconComponent]
})
export class IconSizeComponent { }
```
```html
<div class="icon-sizes">
    <igx-icon class="size-large" name="notifications"></igx-icon>
    <span class="size-label">Large</span>
    <igx-icon class="size-medium" name="notifications"></igx-icon>
    <span class="size-label">Medium</span>
    <igx-icon class="size-small" name="notifications"></igx-icon>
    <span class="size-label">Small</span>
</div>
```
```scss
:host {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.icon-sizes {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: auto auto;
    place-items: center;
    column-gap: 4.25rem;
    row-gap: 1.0625rem;
}

.icon-sizes igx-icon {
    color: var(--ig-gray-800);
}

.size-large {
    --ig-size: var(--ig-size-large);
}

.size-medium {
    --ig-size: var(--ig-size-medium);
}

.size-small {
    --ig-size: var(--ig-size-small);
}

.size-label {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", Arial, sans-serif;
    font-size: 0.875rem;
    line-height: 1.25rem;
}
```

### Active

Set [`active`](mcp:get_api_reference?platform=angular&component=IgxIconComponent&member=active) to `false` to show the icon as inactive. An inactive icon uses the disabled color of the theme at a reduced opacity:

```html
<igx-icon name="volume_off" [active]="false"></igx-icon>
```

### Accessible Name

Hide a decorative icon from assistive technology, and give an icon that conveys meaning on its own an accessible name that describes that meaning.

The Angular Icon is hidden from assistive technology by default, because its [`ariaHidden`](mcp:get_api_reference?platform=angular&component=IgxIconComponent&member=ariaHidden) input sets `aria-hidden="true"`. To expose an icon that conveys meaning, set `ariaHidden` to `false`, and add the `img` role and an `aria-label`:

```html
<igx-icon name="warning" [ariaHidden]="false" role="img" aria-label="Warning"></igx-icon>
```

### Do/Don't

Carefully pick the Icon color to assure good contrast with the background and definitely avoid similar shades of the same color or combinations that create chromatic aberrations.

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin: 24px 0 16px;">
  
  
</div>

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin-bottom: 32px;">
  <div>
    <p style="color: #258b3b; font-weight: 600; margin: 0 0 8px;">Do</p>
    <p style="margin: 0;">Pick icon colors with strong contrast against the background.</p>
  </div>
  <div>
    <p style="color: #e40046; font-weight: 600; margin: 0 0 8px;">Don't</p>
    <p style="margin: 0;">Avoid shades similar to the background and color combinations that cause chromatic aberration.</p>
  </div>
</div>

## Properties

The Angular Icon exposes the following properties. See the API reference for the complete type definitions.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`name`](mcp:get_api_reference?platform=angular&component=IgxIconComponent&member=name) | `string` | — | The name of the icon. For a ligature family, the name is the ligature. |
| [`family`](mcp:get_api_reference?platform=angular&component=IgxIconComponent&member=family) | `string` | `material` | The icon family in which the name is looked up. |
| [`active`](mcp:get_api_reference?platform=angular&component=IgxIconComponent&member=active) | `boolean` | `true` | Whether the icon is active. An inactive icon uses the disabled color of the theme. |
| [`ariaHidden`](mcp:get_api_reference?platform=angular&component=IgxIconComponent&member=ariaHidden) | `boolean` | `true` | The value of the `aria-hidden` attribute of the icon. |

## Methods

The Angular Icon draws icons that you register with the following API.

Register icons and families with the following methods of the [`IgxIconService`](mcp:get_api_reference?platform=angular&component=IgxIconService), which is provided in the application root.

| Method | Description |
| --- | --- |
| [`addSvgIcon`](mcp:get_api_reference?platform=angular&component=IgxIconService&member=addSvgIcon) | Fetches an SVG file through `HttpClient` and caches it under a name in a family. |
| [`addSvgIconFromText`](mcp:get_api_reference?platform=angular&component=IgxIconService&member=addSvgIconFromText) | Caches SVG markup under a name in a family. |
| [`setFamily`](mcp:get_api_reference?platform=angular&component=IgxIconService&member=setFamily) | Associates a family name with a CSS class, an icon type (`liga`, `font`, or `svg`), and an optional name prefix. |
| [`setIconRef`](mcp:get_api_reference?platform=angular&component=IgxIconService&member=setIconRef) | Points an icon name in a family to another icon. |
| [`addIconRef`](mcp:get_api_reference?platform=angular&component=IgxIconService&member=addIconRef) | Points an icon name in a family to another icon only when the name has no reference yet. |

## Styling

The Angular Icon takes the color of the surrounding text by default. Change its color and size with the following CSS variables:

| Variable | What it changes |
| --- | --- |
| `--ig-icon-color` | The icon color. Set it on an icon, or on a container to recolor all icons inside it. |
| `--ig-icon-size` | The icon size. Set it on an icon, or on a container to resize all icons inside it. |
| `--size` | The size of the icon on which you set it. |
| `--ig-size` | The size preset: `--ig-size-small`, `--ig-size-medium`, or `--ig-size-large`. |
| `--ig-icon-disabled-color` | The color of an inactive icon. |

### Sass Theming

Create a theme with the `icon-theme` function and include it with the `tokens()` mixin. The function accepts the `$color`, `$size`, and `$disabled-color` parameters, and the mixin emits the matching `--ig-icon-*` variables in the scope where you include it.

```scss
@use "igniteui-angular/theming" as *;

$custom-icon-theme: icon-theme(
  $color: #1481b8,
  $disabled-color: #494949
);

:host {
  @include tokens($custom-icon-theme);
}
```

### CSS Variables

Set the color and size on an icon or a container when you need local styling without a Sass build step:

```html
<igx-icon name="home" [style.color]="'#e41c77'"></igx-icon>
```

```css
.toolbar {
  --ig-icon-color: var(--ig-primary-500);
}
```

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { PositionSettings } from 'igniteui-angular/core';
import { IgxButtonDirective, IgxIconButtonDirective, IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

interface ToolbarAction {
    icon: string;
    label: string;
}

@Component({
    selector: 'app-icon-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./icon-styling.component.scss'],
    templateUrl: './icon-styling.component.html',
    imports: [IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxTooltipDirective, IgxTooltipTargetDirective]
})
export class IconStylingComponent {
    public actions: ToolbarAction[] = [
        { icon: 'edit', label: 'Edit' },
        { icon: 'content_copy', label: 'Copy' },
        { icon: 'share', label: 'Share' },
        { icon: 'delete', label: 'Delete' }
    ];

    public tooltipPosition: PositionSettings = { offset: 25 };
}
```
```html
<div class="icon-styling">
    <div class="button-row">
        <button igxButton="contained" type="button" class="download-button">
            <igx-icon>download</igx-icon>
            Download
        </button>
        <button igxButton="outlined" type="button" class="continue-button">
            Continue
            <igx-icon>arrow_forward</igx-icon>
        </button>
        <button igxButton="outlined" type="button" class="delete-button">
            <igx-icon>delete</igx-icon>
            Delete
        </button>
        <button igxButton="fab" type="button" class="add-button" aria-label="Add">
            <igx-icon>add</igx-icon>
        </button>
    </div>
    <div class="icon-toolbar">
        @for (action of actions; track action.label) {
            <button
                igxIconButton="flat"
                type="button"
                [attr.aria-label]="action.label"
                [igxTooltipTarget]="tooltip"
                [hasArrow]="true"
                [positionSettings]="tooltipPosition">
                <igx-icon>{{ action.icon }}</igx-icon>
            </button>
            <span #tooltip="tooltip" igxTooltip class="icon-tooltip">{{ action.label }}</span>
        }
    </div>
</div>
```
```scss
@use "sass:meta";
@include meta.load-css("igniteui-angular/lib/core/styles/themes/presets/igniteui-bootstrap-light");

app-icon-styling {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.icon-styling {
    --ig-font-family: "Aktiv Grotesk", Arial, sans-serif;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.8125rem;
}

.button-row {
    /* The buttons keep the medium size of the design, while styles.scss asks
       the page for the large one. */
    --ig-size: var(--ig-size-medium);

    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.button-row .igx-button {
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.1px;
    text-transform: none;
}

.download-button {
    border-color: #a9b8cc;
    background: #e5ebf3;
    color: #344b65;
    box-shadow: none;
}

.download-button igx-icon {
    color: #344b65;
}

.continue-button {
    --ig-outlined-button-hover-background: rgb(0 93 204 / 8%);
    --ig-outlined-button-focus-hover-background: rgb(0 93 204 / 8%);
    --ig-outlined-button-active-background: rgb(0 93 204 / 16%);
    --ig-outlined-button-focus-background: rgb(0 93 204 / 16%);
    --ig-outlined-button-focus-visible-background: rgb(0 93 204 / 16%);

    border-color: #005dcc;
    color: #005dcc;
}

.continue-button igx-icon {
    color: #005dcc;
}

.delete-button {
    --ig-outlined-button-hover-background: rgb(223 27 116 / 8%);
    --ig-outlined-button-focus-hover-background: rgb(223 27 116 / 8%);
    --ig-outlined-button-active-background: rgb(223 27 116 / 16%);
    --ig-outlined-button-focus-background: rgb(223 27 116 / 16%);
    --ig-outlined-button-focus-visible-background: rgb(223 27 116 / 16%);

    border-color: #df1b74;
    color: #df1b74;
}

.delete-button igx-icon {
    color: #df1b74;
}

.add-button {
    --ig-size: var(--ig-size-small);

    width: 2.25rem;
    min-width: 0;
    height: 2.25rem;
    min-height: 0;
    padding: 0;
    border: 1px solid #0176ff;
    border-radius: 50%;
    background: #cce4ff;
    box-shadow: none;
}

.add-button igx-icon {
    color: #005dcc;
}

.icon-toolbar {
    display: flex;
    gap: 1.5rem;
    padding: 0.5rem;
    border: 1px solid #e5ebf3;
    border-radius: 999px;
    background: #fff;
}

.icon-toolbar .igx-icon-button {
    --ig-flat-icon-button-hover-background: #f8f8f8;
    --ig-flat-icon-button-focus-background: #e0e0e0;
    --ig-flat-icon-button-focus-hover-background: #f8f8f8;
    --ig-flat-icon-button-active-background: #e0e0e0;

    width: 1.5rem;
    min-width: 0;
    height: 1.5rem;
    min-height: 0;
    padding: 0;
    border-radius: 50%;
}

.icon-toolbar igx-icon {
    color: #344b65;
}

/* The tooltips are moved to the overlay, outside of the toolbar. */
.icon-tooltip {
    --ig-tooltip-background: rgb(52 75 101 / 90%);
    --ig-tooltip-text-color: #fff;
}
```

### Styling with Tailwind

You can style the Angular Icon with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](../themes/tailwind.md) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

Use the `light-icon` or `dark-icon` class for the corresponding theme, and override the generated CSS variables with arbitrary properties:

```html
<igx-icon name="person" class="!light-icon ![--color:#7B9E89] ![--size:48px]"></igx-icon>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the default theme styles of the Icon.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Component({
    selector: 'app-icon-tailwind-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./icon-tailwind-styling.component.scss'],
    templateUrl: './icon-tailwind-styling.component.html',
    imports: [
        IgxInputGroupComponent,
        IgxInputDirective,
        IgxLabelDirective,
        IgxPrefixDirective,
        IgxSuffixDirective,
        IgxHintDirective,
        IgxIconComponent,
        IgxIconButtonDirective
    ]
})
export class IconTailwindStylingComponent {
    public fieldClasses = 'w-[260px] [--ig-input-group-input-prefix-background:transparent] [--ig-input-group-input-prefix-background--filled:transparent] [--ig-input-group-input-prefix-background--focused:transparent] [--ig-input-group-input-suffix-background:transparent] [--ig-input-group-input-suffix-background--filled:transparent] [--ig-input-group-input-suffix-background--focused:transparent] [--ig-input-group-placeholder-color:#344b65] [--ig-input-group-hover-placeholder-color:#344b65] [--ig-input-group-focused-secondary-color:transparent]';
    public focusClasses = 'focus-within:[--ig-input-group-border-color:var(--ig-primary-500)] focus-within:[--ig-input-group-focused-border-color:var(--ig-primary-500)]';
    public invalidClasses = '[--ig-input-group-border-color:#ff134a] [--ig-input-group-focused-border-color:#ff134a]';

    public passwordVisible = false;
    public email = 'ana@';

    public get emailInvalid(): boolean {
        return !emailPattern.test(this.email);
    }

    public onEmailInput(event: Event): void {
        this.email = (event.target as HTMLInputElement).value;
    }
}
```
```html
<div class="flex flex-col gap-6 rounded-2xl border border-[#d2dbe8] bg-white px-[27px] py-[31px] [--ig-body-1-font-size:0.875rem] [--ig-font-family:'Aktiv_Grotesk',Arial,sans-serif] [--ig-size:var(--ig-size-medium)]">
    <igx-input-group class="search-field" [class]="fieldClasses + ' ' + focusClasses">
        <label igxLabel class="!text-xs !leading-4 !uppercase !text-[#344b65]">Search</label>
        <igx-prefix class="!ps-2">
            <igx-icon class="!text-[#344b65]">search</igx-icon>
        </igx-prefix>
        <input igxInput type="text" placeholder="Find a report..." />
    </igx-input-group>

    <igx-input-group [class]="fieldClasses + ' ' + focusClasses">
        <label igxLabel class="!text-xs !leading-4 !uppercase !text-[#344b65]">Password</label>
        <input igxInput [type]="passwordVisible ? 'text' : 'password'" value="reports-2026" />
        <igx-suffix class="!p-0">
            <button
                igxIconButton="flat"
                type="button"
                class="!h-full !w-[39px] !min-w-0 !rounded-none !p-0"
                [attr.aria-label]="passwordVisible ? 'Hide password' : 'Show password'"
                (click)="passwordVisible = !passwordVisible">
                <igx-icon class="!text-[#344b65]">{{ passwordVisible ? 'visibility' : 'visibility_off' }}</igx-icon>
            </button>
        </igx-suffix>
    </igx-input-group>

    <igx-input-group class="email-field" [class]="fieldClasses + ' ' + (emailInvalid ? invalidClasses : focusClasses)">
        <label igxLabel class="!text-xs !leading-4 !uppercase !text-[#344b65]">E-mail</label>
        <igx-prefix class="!ps-2">
            <igx-icon [class]="emailInvalid ? '!text-[#ff134a]' : '!text-[#344b65]'">mail</igx-icon>
        </igx-prefix>
        <input igxInput type="email" [value]="email" [attr.aria-invalid]="emailInvalid" (input)="onEmailInput($event)" />
        @if (emailInvalid) {
            <igx-suffix>
                <igx-icon class="!text-[#ff134a]">info</igx-icon>
            </igx-suffix>
        }
        @if (emailInvalid) {
            <igx-hint class="text-xs leading-4 tracking-[0.4px] text-[#ff134a]">Enter a complete address</igx-hint>
        }
    </igx-input-group>
</div>
```
```scss
@use "sass:meta";
@include meta.load-css("igniteui-angular/lib/core/styles/themes/presets/igniteui-bootstrap-light");

app-icon-tailwind-styling {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

/* The icons sit inside the field, so the input drops the border that would set
   them apart. The border is on the input's wrapper, which the template can't
   reach with a class. */
.search-field .igx-input-group__bundle-main,
.email-field .igx-input-group__bundle-main {
    border-inline-start-width: 0;
}

.email-field.igx-input-group--suffixed .igx-input-group__bundle-main {
    border-inline-end-width: 0;
}
```

## Accessibility

The Angular Icon is a non-interactive visual that either decorates nearby content or conveys meaning on its own.

### Keyboard Interaction

The Angular Icon doesn't receive focus and has no keyboard interaction: it sets no `tabindex` and handles no keyboard or pointer events. Use the [Icon Button](../icon-button.md) when users must activate an icon with the keyboard.

| Key | Action |
| --- | --- |
| n/a | The Icon is not keyboard interactive. |

### Screen Readers / ARIA

The Angular Icon makes no announcements of its own. What assistive technology reports depends on the accessible name of the icon:

- The icon sets `aria-hidden="true"` by default through its `ariaHidden` input, so assistive technology ignores it. An `aria-label` alone doesn't expose a hidden icon.
- The icon sets no role. When you set `ariaHidden` to `false` without a role and a label, screen readers read a ligature icon as its text, such as `home`.
- Set `ariaHidden` to `false`, add the `img` role, and add an `aria-label` to expose an icon that conveys meaning.
- The `active` input changes only the styling. The inactive state isn't exposed to assistive technology.

### Accessibility Compliance

Infragistics documents Ignite UI for Angular accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| --- | --- |
| [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content) | The icon is hidden from assistive technology by default, so decorative icons can be ignored, and it uses the `aria-label` that you set as its text alternative when you expose it. |

Your responsibilities:

- Give every icon that conveys meaning on its own an accessible name, and keep decorative icons hidden. See [Accessible Name](#accessible-name).
- Keep a contrast ratio of at least 3:1 between an icon that conveys information and its background, as [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast) requires, especially when you override the theme color.
- Use an Icon Button, not an Icon, for actions that users activate.
- Don't rely on the inactive styling alone to convey a state, as [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color) requires. Describe the state in text or in the accessible name.

## Troubleshooting

Use these answers when a Angular Icon doesn't render or doesn't look as expected.

### Why is my icon empty?

Check the following causes:

- A ligature icon needs the font of its family, such as Material Icons for the default `material` family. Check that the font stylesheet loads.
- An SVG icon needs the same name and family as its registration.
- `addSvgIcon` needs `HttpClient` to fetch the file. Check the network panel for a failed request.
- The service caches SVG icons only in the browser, so SVG icons don't render during server-side rendering.

### Why doesn't my SVG icon take the theme color?

The Angular Icon applies its color to the root `<svg>` element, and the child elements inherit it as their fill. A child element with a hardcoded color keeps that color:

```html
<svg viewBox="0 0 24 24">
  <path fill="#050d42" d="..." />
</svg>
```

Remove hardcoded colors from the child elements, or set the color on the root `<svg>` element, where the theme overrides it. To color part of an icon on purpose, use a theme color variable, such as `fill="var(--ig-primary-500)"`.

### Why does a tooltip appear when I hover an icon?

Browsers show the `<title>` element of an SVG as a native tooltip.

Pass `true` as the `stripMeta` argument of `addSvgIcon` or `addSvgIconFromText` to remove the `<title>` and `<desc>` elements from the cached SVG:

```ts
this.iconService.addSvgIcon('contains', 'assets/images/svg/contains.svg', 'filter-icons', true);
```

### Known Limitations

The Angular Icon has the following limitations:

- The Icon is a non-interactive visual: it doesn't receive focus or handle keyboard input.
- Theme colors reach the root `<svg>` element and the child elements that inherit its fill. Child elements with hardcoded colors keep them.
- The Angular Icon has no option to mirror an icon for right-to-left layouts.

## API References

The Angular Icon API reference lists the complete API surface for the target platform.

- [`IgxIcon`](mcp:get_api_reference?platform=angular&component=IgxIconComponent)
- [`IgxIconService`](mcp:get_api_reference?platform=angular&component=IgxIconService)
- `icon-theme`

## Dependencies

The Angular Icon requires a theme stylesheet to apply its theme-based size and color. See the framework-specific setup in [**Getting Started**](../general/getting-started.md).

Ligature icons of the default `material` family also require the Material Icons font, and `addSvgIcon` requires the Angular `HttpClient`.

## Additional Resources

The following resources provide more Angular Icon guidance and project support:

- [Icon - Design System Component](https://www.infragistics.com/products/indigo-design/help/components/icon)
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

For icon families, icon references, and the extended Material icon set, see the [Icon Service](../icon-service.md) and [Material Icons Extended](../material-icons-extended.md) topics.

## Related Components

The Angular Icon often appears inside other components. Use these components when an icon needs to do more than display a symbol:

- [Icon Button](../icon-button.md) - Use Icon Button when users click or press the icon to run an action.
- [Avatar](./avatar.md) - Use Avatar to represent a person or entity with an icon, initials, or an image.
- [Badge](../inputs/badge.md) - Use Badge to show a short status or count next to another element.

## FAQ

These questions cover common Angular Icon setup, accessibility, and usage scenarios.

  **Q: Does the Icon include Material Icons?**

    Yes. The Angular Icon renders Material Icons ligatures through its default `material` family when the Material Icons font is loaded, and the `ng add igniteui-angular` command adds that font. Register other icon fonts and SVG icons with the `IgxIconService`.
  
  **Q: How do I add a custom SVG icon?**

    Register the SVG with the `addSvgIcon` or `addSvgIconFromText` method of the `IgxIconService`, then set the same `name` and `family` on the Angular Icon. The service caches the SVG, so every Angular Icon with that name and family renders it.
  
  **Q: How do I make an icon accessible to screen readers?**

    The Angular Icon is hidden from screen readers by default through `aria-hidden="true"`. For an icon that conveys meaning on its own, set `[ariaHidden]="false"`, add `role="img"`, and add an `aria-label` that describes the meaning.
  
  **Q: Can I make an Icon clickable?**

    The Angular Icon doesn't receive focus or handle keyboard input, so a click handler on it excludes keyboard users. Use the Angular Icon Button for actions, because it places an icon inside a focusable button.
  
  **Q: Does the Icon support right-to-left layouts?**

    The Angular Icon has no option to mirror an icon. For a directional icon in a right-to-left layout, use an icon that points in the reading direction, such as `arrow_back` in place of `arrow_forward`.
  


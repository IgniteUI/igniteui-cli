---
title: "Checkbox"
description: "The Angular Checkbox lets users select, clear, or set an indeterminate option in forms and interactive interfaces."
keywords: "Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Checkbox components, Angular Checkbox controls"
license: MIT
last_updated: "2026-08-25"
relatedComponents: [Switch]
mentionedTypes: ["Checkbox"]
llms:
  description: "The Angular Checkbox is a component that lets you add checkboxes to your Angular apps."
_tocName: Checkbox
---
# Angular Checkbox Component

The Angular Checkbox is a component that lets you add checkboxes to your Angular apps. It behaves as a standard HTML checkbox, enabling users to select basic checked and unchecked states or an additional indeterminate state. You also get full control over the styling of the Angular checkbox component and ability to use it with forms.

## Live Demo

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxButtonDirective, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListThumbnailDirective } from 'igniteui-angular/list';

interface ShoppingItem {
    label: string;
    checked: boolean;
}

interface ShoppingGroup {
    title: string;
    items: ShoppingItem[];
}

@Component({
    selector: 'app-checkbox-overview',
    styleUrls: ['./checkbox-overview.component.scss'],
    templateUrl: './checkbox-overview.component.html',
    imports: [
        FormsModule,
        IgxCheckboxComponent,
        IgxListComponent,
        IgxListItemComponent,
        IgxListThumbnailDirective,
        IgxListActionDirective,
        IgxIconButtonDirective,
        IgxButtonDirective,
        IgxIconComponent
    ]
})
export class CheckboxOverviewComponent {
    public groups: ShoppingGroup[] = [
        {
            title: 'Grocery store',
            items: [
                { label: 'Bread', checked: false },
                { label: 'Milk 4l', checked: false },
                { label: 'Eggs 1 pack', checked: true }
            ]
        },
        {
            title: 'Fruit and vegetable shop',
            items: [
                { label: 'Strawberries', checked: false },
                { label: 'Lemons', checked: false },
                { label: 'Single Line Item', checked: true }
            ]
        }
    ];
}
```
```html
<div class="shopping-list">
    <igx-list class="list">
        @for (group of groups; track group.title) {
            <igx-list-item [isHeader]="true" class="group-header">
                <span class="group-title">{{ group.title }}</span>
            </igx-list-item>
            @for (item of group.items; track item.label) {
                <igx-list-item class="shopping-item" [class.shopping-item-checked]="item.checked">
                    <igx-checkbox igxListThumbnail [(ngModel)]="item.checked">
                        <span>{{ item.label }}</span>
                    </igx-checkbox>
                    <button igxListAction type="button" igxIconButton="flat" class="item-menu" [attr.aria-label]="'Options for ' + item.label">
                        <igx-icon>more_vert</igx-icon>
                    </button>
                </igx-list-item>
            }
        }
    </igx-list>

    <button igxButton="fab" type="button" class="add-item" aria-label="Add item">
        <igx-icon>add</igx-icon>
    </button>
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

.shopping-list {
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 1rem;
    width: 22.5rem;
    height: 24.3125rem;
    padding: 1rem 0;
    overflow: hidden;
    border-radius: 0.25rem;
    background: var(--ig-surface-raised);
    box-shadow: 0 0.0625rem 0.25rem rgb(0 0 0 / 16%);
}

/* Bootstrap draws its controls a size bigger than the other themes do, and at
   the large size styles.scss asks the page for, the rows stop fitting the
   card. Only Bootstrap steps down. */
@container style(--ig-theme: bootstrap) {
    .shopping-list {
        --ig-size: var(--ig-size-medium);
    }
}

.list {
    background: transparent;
    border: none;
    gap: 0.25rem;
    overflow: hidden;
}

/* The header keeps the theme's own overline typography; only the inset that
   lines it up with the rows below is the design's. */
.group-header {
    padding: 0 1rem;
    background: transparent;
}

.shopping-item + .group-header {
    margin-top: 0.75rem;
}

.group-title {
    color: var(--ig-secondary-500);
}

.shopping-item {
    background: transparent;
    border-bottom: none;
    --border-color: transparent;
    --border-width: 0;
}

/* The row's own padding and gap sit on the item's content wrapper. */
.shopping-item ::ng-deep .igx-list-item__content {
    padding: 0 1rem;
    gap: 0.5rem;
    background: transparent;
}

.shopping-item:hover,
.shopping-item:focus-within {
    background: transparent;
    box-shadow: none;
}

.shopping-item:hover ::ng-deep .igx-list-item__content,
.shopping-item:focus-within ::ng-deep .igx-list-item__content {
    background: transparent;
    box-shadow: none;
}

.shopping-item ::ng-deep .igx-list-item__thumbnail {
    margin-inline-start: 0.125rem;
}

.shopping-item igx-checkbox {
    --label-margin: 1.125rem;
}

.shopping-item-checked,
.shopping-item-checked:hover,
.shopping-item-checked:focus-within {
    background: var(--ig-gray-100);
    box-shadow: none;
}

.shopping-item-checked ::ng-deep .igx-list-item__content,
.shopping-item-checked:hover ::ng-deep .igx-list-item__content,
.shopping-item-checked:focus-within ::ng-deep .igx-list-item__content {
    background: var(--ig-gray-100);
}

.item-menu {
    color: var(--ig-gray-700);
}

.item-menu igx-icon {
    font-size: 1.5rem;
}

.add-item {
    --ig-size: var(--ig-size-large);
    --ig-fab-button-border-radius: 50%;
    position: absolute;
    inset-inline-end: 1rem;
    inset-block-end: 1rem;
}
```

## Anatomy

The Angular Checkbox renders a selectable control with an optional label.

**Checkbox anatomy:** The Checkbox component presents a selectable control with checked, unchecked, and indeterminate states.

<style>{`
  .checkbox-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .checkbox-anatomy .igd-anatomy__image {
    max-width: 142.5px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Checkbox Indicator:</strong> indicates the current state. By default it is unselected. Could be before or after the label<br />
<strong>2. Label (optional):</strong> specifies the target data available for selection and deselection</span>

The Angular Checkbox consists of an indicator and optional label content. Set the label position when the label should appear before or after the indicator.

```text
Checkbox
├── Checkbox Indicator
└── Label (optional)
```

## Getting Started

To use the Angular Checkbox, follow the [Ignite UI for Angular Getting Started](../general/getting-started.md) topic for the basic project setup, then install or register the component for your target platform.

Using the **igniteui-angular** package, install the package and import the Checkbox component:

```cmd
npm install igniteui-angular
```

```ts
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
```

Add `IgxCheckboxComponent` to the component `imports` collection, then use the `igx-checkbox` element in your template.

After registration, render the [`IgxCheckbox`](mcp:get_api_reference?platform=angular&component=IgxCheckboxComponent) with the platform-specific element or wrapper:

```html
<igx-checkbox></igx-checkbox>
```

## Usage

At its core, the [`IgxCheckbox`](mcp:get_api_reference?platform=angular&component=IgxCheckboxComponent) lets users choose between selected and unselected states, with support for an indeterminate state when an option represents a partial selection.

You can specify if the label should be positioned before or after the checkbox toggle by setting the [`LabelPosition`](mcp:get_api_reference?platform=angular&component=IgxCheckboxComponent&member=labelPosition) attribute of the checkbox. Allowed values are `before` and `after` (default):

```html
<igx-checkbox labelPosition="before">Label</igx-checkbox>
```

The checkbox can also be labelled by elements external to the checkbox. In this case, the user is given full control to position and style the label in accordance with their needs.

```html
<span id="checkbox-label">Label</span>
<igx-checkbox aria-labelledby="checkbox-label"></igx-checkbox>
```

### States

The Checkbox supports different state-related attributes. You can use the [`checked`](mcp:get_api_reference?platform=angular&component=IgxCheckboxComponent&member=checked) attribute to set the initial state of the checkbox to on or off.

```html
<igx-checkbox [checked]="true"></igx-checkbox>
```

You can use the [`indeterminate`](mcp:get_api_reference?platform=angular&component=IgxCheckboxComponent&member=indeterminate) attribute to set the checkbox's value to neither **true** nor **false**.

```html
<igx-checkbox [indeterminate]="true"></igx-checkbox>
```

You can use the [`disabled`](mcp:get_api_reference?platform=angular&component=IgxCheckboxComponent&member=disabled) attribute to disable the Checkbox.

```html
<igx-checkbox [disabled]="true"></igx-checkbox>
```

You can use the [`invalid`](mcp:get_api_reference?platform=angular&component=IgxCheckboxComponent&member=invalid) attribute to mark the Checkbox as invalid.

```html
<igx-checkbox [invalid]="true"></igx-checkbox>
```

You can use the [`required`](mcp:get_api_reference?platform=angular&component=IgxCheckboxComponent&member=required) property to mark the Checkbox as required.

```html
<igx-checkbox [required]="true"></igx-checkbox>
```

```typescript
import { Component } from '@angular/core';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';

@Component({
    selector: 'app-checkbox-states',
    styleUrls: ['./checkbox-states.component.scss'],
    templateUrl: './checkbox-states.component.html',
    imports: [IgxCheckboxComponent]
})
export class CheckboxStatesComponent { }
```
```html
<!-- the checkboxes are display-only, so user interaction is blocked -->
<div class="states">
    <div class="state">
        <span class="state-label">Indeterminate</span>
        <igx-checkbox [readonly]="true" [indeterminate]="true" aria-label="Indeterminate"></igx-checkbox>
    </div>
    <div class="state">
        <span class="state-label">On</span>
        <igx-checkbox [readonly]="true" [checked]="true" aria-label="On"></igx-checkbox>
    </div>
    <div class="state">
        <span class="state-label">Off</span>
        <igx-checkbox [readonly]="true" aria-label="Off"></igx-checkbox>
    </div>
    <div class="state">
        <span class="state-label">Disabled</span>
        <igx-checkbox [disabled]="true" aria-label="Disabled"></igx-checkbox>
    </div>
    <div class="state">
        <span class="state-label">Invalid</span>
        <igx-checkbox [readonly]="true" [invalid]="true" aria-label="Invalid"></igx-checkbox>
    </div>
    <div class="state">
        <span class="state-label">Required</span>
        <igx-checkbox [readonly]="true" [required]="true" aria-label="Required"></igx-checkbox>
    </div>
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

.states {
    display: flex;
    align-items: flex-end;
    gap: 4.5rem;
}

.state {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
}

/* the checkboxes are display-only, so they don't offer a pointer */
.state igx-checkbox {
    display: block;
    width: 1rem;
    height: 1rem;
    cursor: default;
}

.state igx-checkbox ::ng-deep .igx-checkbox__composite-wrapper {
    width: 1rem;
    height: 1rem;
    padding: 0;
}

.state-label {
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: var(--ig-gray-600);
}
```

### Do/Don't

When many Checkboxes are necessary, arrange them in a column group so users can quickly scan the list. Fewer Checkboxes may be arranged on a single line next to each other, but avoid arranging them in multiple columns.

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin: 24px 0 16px;">
  
  
</div>

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px;">
  <div>
    <p style="color: #258b3b; font-weight: 600; margin: 0 0 8px;">Do</p>
    <p style="margin: 0;">Stack checkboxes vertically in a single column to make options easy to scan and read.</p>
  </div>
  <div>
    <p style="color: #e40046; font-weight: 600; margin: 0 0 8px;">Don't</p>
    <p style="margin: 0;">Avoid arranging checkboxes into multiple columns, as this breaks vertical reading patterns and makes scanning difficult.</p>
  </div>
</div>

## Properties

The following properties cover the main Checkbox configuration options documented on this page. See the full API reference for the complete generated list.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`checked`](mcp:get_api_reference?platform=angular&component=IgxCheckboxComponent&member=checked) | `boolean` | `false` | Gets or sets whether the checkbox is selected. |
| [`indeterminate`](mcp:get_api_reference?platform=angular&component=IgxCheckboxComponent&member=indeterminate) | `boolean` | `false` | Gets or sets whether the checkbox is in an indeterminate state. |
| [`labelPosition`](mcp:get_api_reference?platform=angular&component=IgxCheckboxComponent&member=labelPosition) | `LabelPosition` | `after` | Sets the position of the checkbox label. |
| [`required`](mcp:get_api_reference?platform=angular&component=IgxCheckboxComponent&member=required) | `boolean` | `false` | Gets or sets whether the Checkbox is required. |
| [`invalid`](mcp:get_api_reference?platform=angular&component=IgxCheckboxComponent&member=invalid) | `boolean` | `false` | Gets or sets whether the Checkbox is invalid. |
| [`disabled`](mcp:get_api_reference?platform=angular&component=IgxCheckboxComponent&member=disabled) | `boolean` | `false` | Gets or sets whether the Checkbox is disabled. |
| [`value`](mcp:get_api_reference?platform=angular&component=IgxCheckboxComponent&member=value) | `any` | — | Gets or sets the value used when the Checkbox is submitted with a form. |
| [`name`](mcp:get_api_reference?platform=angular&component=IgxCheckboxComponent&member=name) | `string` | — | Gets or sets the name used when the Checkbox is submitted with a form. |

## Styling

The Angular Checkbox is styled through the Ignite UI for Angular Sass theme system and the CSS variables it generates.

### Sass Theming

Use the Ignite UI for Angular theme system to style the Checkbox consistently with the rest of your application. Verify the available Sass theme parameters in the API documentation before adding a custom theme.

The `checkbox-theme` exposes the following parameters:

| Primary Parameter | Related Parameters | Description |
| --- | --- | --- |
| `$empty-color` | `$empty-color-hover`, `$focus-outline-color` | Unchecked border color and related focus or hover states. |
| `$fill-color` | `$fill-color-hover`, `$tick-color`, `$focus-border-color`, `$disabled-indeterminate-color`, `$focus-outline-color` | Checked border, fill, tick, focus, and disabled-indeterminate colors. |
| `$error-color` | `$error-color-hover`, `$focus-outline-color-error` | Invalid-state border and fill colors. |
| `$label-color` | `$label-color-hover` | Checkbox label color. |

### Custom Styling

To customize the Checkbox theme, create a custom theme with the desired Sass properties:

```scss
@use "igniteui-angular/theming" as *;

$custom-checkbox-theme: checkbox-theme(
  $empty-color: #ecaa53,
  $fill-color: #ecaa53,
  $border-radius: 5px
);
```

Then include the custom theme in your application:

```scss
:host {
  @include tokens($custom-checkbox-theme);
}
```

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineSubTitleDirective, IgxListLineTitleDirective, IgxListThumbnailDirective } from 'igniteui-angular/list';

interface TeamMember {
    name: string;
    email: string;
    avatar: string;
    selected: boolean;
}

@Component({
    selector: 'app-checkbox-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./checkbox-styling.component.scss'],
    templateUrl: './checkbox-styling.component.html',
    imports: [
        FormsModule,
        IgxCheckboxComponent,
        IgxAvatarComponent,
        IgxListComponent,
        IgxListItemComponent,
        IgxListThumbnailDirective,
        IgxListLineTitleDirective,
        IgxListLineSubTitleDirective,
        IgxListActionDirective,
        IgxButtonDirective
    ]
})
export class CheckboxStylingComponent {
    public members: TeamMember[] = [
        { name: 'Emily Potter', email: 'emily@team.com', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png', selected: false },
        { name: 'Alex Lima', email: 'alex@team.com', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-05.png', selected: true },
        { name: 'Mateo García', email: 'mateo@team.com', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png', selected: false },
        { name: 'Kate Roberts', email: 'kate@team.com', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-08.png', selected: false }
    ];

    public get allSelected(): boolean {
        return this.members.every((member) => member.selected);
    }

    public get someSelected(): boolean {
        return this.members.some((member) => member.selected);
    }

    public toggleAll(checked: boolean): void {
        this.members.forEach((member) => member.selected = checked);
    }
}
```
```html
<div class="team-card">
    <p class="team-title">Team members</p>

    <igx-checkbox
        class="select-all"
        labelPosition="before"
        [checked]="allSelected"
        [indeterminate]="someSelected && !allSelected"
        (change)="toggleAll($event.checked)">
        <span>Select all</span>
    </igx-checkbox>

    <igx-list class="members">
        @for (member of members; track member.email) {
            <igx-list-item class="member" [class.member-selected]="member.selected">
                <igx-avatar igxListThumbnail [src]="member.avatar" shape="circle" [attr.aria-label]="member.name"></igx-avatar>
                <span igxListLineTitle class="member-name">{{ member.name }}</span>
                <span igxListLineSubTitle class="member-email">{{ member.email }}</span>
                <igx-checkbox
                    igxListAction
                    class="member-check"
                    [attr.aria-label]="member.name"
                    [(ngModel)]="member.selected"></igx-checkbox>
            </igx-list-item>
        }
    </igx-list>

    <button igxButton="contained" type="button" class="continue-button">Continue</button>
</div>
```
```scss
@use "sass:meta";
@import url("https://use.typekit.net/bng2zgw.css");
@include meta.load-css("igniteui-angular/lib/core/styles/themes/presets/igniteui-bootstrap-light");

app-checkbox-styling {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.team-card {
    /* The design's own palette and typeface. They are set here instead of
       coming from the theme, so the sample keeps its custom look in every theme. */
    --team-surface: #fff;
    --team-primary: #0176ff;
    --team-gray-100: #f3f6fa;
    --team-gray-200: #e5ebf3;
    --team-gray-400: #a9b8cc;
    --team-gray-500: #7d91ab;
    --team-gray-600: #556c86;
    --team-gray-700: #344b65;
    --team-gray-900: #00142b;
    /* aktiv-grotesk is the kit's family name. */
    --ig-font-family: aktiv-grotesk, sans-serif;

    --ig-checkbox-empty-color: var(--team-gray-400);
    --ig-checkbox-empty-color-hover: var(--team-gray-400);
    --ig-checkbox-fill-color: var(--team-primary);
    --ig-checkbox-fill-color-hover: var(--team-primary);
    --ig-checkbox-tick-color: #fff;
    --ig-checkbox-tick-color-hover: #fff;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 26.3125rem;
    padding: 0.5rem 0;
    border: 1px solid var(--team-gray-200);
    border-radius: 0.75rem;
    background: var(--team-surface);
    font-family: var(--ig-font-family);
}

.team-title {
    display: flex;
    align-items: center;
    height: 2rem;
    margin: 0;
    padding: 0 1rem;
    color: var(--team-gray-500);
    font-family: var(--ig-body-1-font-family, var(--ig-font-family));
    font-size: var(--ig-body-1-font-size);
    font-weight: var(--ig-body-1-font-weight);
    line-height: var(--ig-body-1-line-height);
    letter-spacing: var(--ig-body-1-letter-spacing);
    text-transform: var(--ig-body-1-text-transform);
}

.select-all {
    --ig-checkbox-empty-color: var(--team-gray-500);
    --ig-checkbox-empty-color-hover: var(--team-gray-500);
    --ig-checkbox-label-color: var(--team-gray-600);
    --ig-checkbox-label-color-hover: var(--team-gray-600);

    box-sizing: border-box;
    width: 100%;
    justify-content: space-between;
    padding: 0.5rem 1rem;
}

.select-all .igx-checkbox__label--before {
    margin-inline-start: 0;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0.15px;
}

/* A 24px slot around the 20px box, as in the design. */
.select-all .igx-checkbox__composite-wrapper,
.member-check .igx-checkbox__composite-wrapper {
    margin: 0.125rem;
}

.members {
    background: transparent;
    border: none;
    overflow: hidden;
}

.member {
    background: transparent;
    border-bottom: none;
    --border-color: transparent;
    --border-width: 0;
}

/* The row's own padding and gap sit on the item's content wrapper. */
.member .igx-list-item__content {
    gap: 1rem;
    padding: 0.5rem 1rem;
    background: transparent;
}

.member:hover,
.member:focus-within {
    background: transparent;
    box-shadow: none;
}

.member:hover .igx-list-item__content,
.member:focus-within .igx-list-item__content {
    background: transparent;
    box-shadow: none;
}

.member-selected,
.member-selected:hover,
.member-selected:focus-within {
    background: var(--team-gray-100);
}

.member-selected .igx-list-item__content,
.member-selected:hover .igx-list-item__content,
.member-selected:focus-within .igx-list-item__content {
    background: var(--team-gray-100);
}

.member igx-avatar {
    --ig-size: var(--ig-size-small);
}

.member .member-name {
    display: block;
    color: var(--team-gray-900);
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.125rem;
}

.member .member-email {
    display: block;
    color: var(--team-gray-700);
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.4px;
}

.continue-button {
    align-self: flex-end;
    margin: 1rem 1rem 0;
    min-width: auto;
    width: 5.25rem;
    min-height: 1.875rem;
    height: 1.875rem;
    padding: 0 0.75rem;
    border-color: var(--team-primary);
    background: var(--team-primary);
    color: #fff;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.375rem;
    letter-spacing: 0.1px;
    text-transform: none;
}
```

### Styling with Tailwind

You can style the Angular Checkbox with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

```html
<igx-checkbox class="![--tick-color:var(--ig-secondary-500)]"></igx-checkbox>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the Checkbox's default theme styles.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';

interface FilterOption {
    label: string;
    checked: boolean;
}

interface FilterSection {
    title: string;
    collapsed: boolean;
    options: FilterOption[];
}

@Component({
    selector: 'app-checkbox-tailwind-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./checkbox-tailwind-styling.component.scss'],
    templateUrl: './checkbox-tailwind-styling.component.html',
    imports: [
        FormsModule,
        IgxCheckboxComponent,
        IgxAccordionComponent,
        IgxExpansionPanelComponent,
        IgxExpansionPanelHeaderComponent,
        IgxExpansionPanelTitleDirective,
        IgxExpansionPanelBodyComponent
    ]
})
export class CheckboxTailwindStylingComponent {
    public sections: FilterSection[] = [
        {
            title: 'Brand',
            collapsed: false,
            options: [
                { label: 'Nike', checked: true },
                { label: 'Roxy', checked: false },
                { label: 'Guess', checked: false }
            ]
        },
        {
            title: 'Color',
            collapsed: false,
            options: [
                { label: 'Black', checked: false },
                { label: 'White', checked: true },
                { label: 'Gray', checked: false }
            ]
        },
        {
            title: 'Size',
            collapsed: false,
            options: [
                { label: 'Small', checked: false },
                { label: 'Medium', checked: true },
                { label: 'Large', checked: false },
                { label: 'Extra large', checked: false }
            ]
        }
    ];
}
```
```html
<div class="flex w-[218px] flex-col rounded-2xl border border-[#0176ff] bg-white p-[7px] [--ig-font-family:aktiv-grotesk,sans-serif]">
    <igx-accordion class="flex flex-col divide-y divide-[#e5ebf3] pb-2">
        @for (section of sections; track section.title) {
            <igx-expansion-panel
                class="[--ig-expansion-panel-body-background:transparent] [--ig-expansion-panel-expanded-margin:0] [--ig-expansion-panel-header-background:transparent] [--ig-expansion-panel-header-focus-background:transparent] [--ig-expansion-panel-header-icon-color:#1a314a]"
                [(collapsed)]="section.collapsed">
                <igx-expansion-panel-header [iconPosition]="'right'">
                    <igx-expansion-panel-title>
                        <span class="pb-2 text-base font-bold leading-5 text-[#004699]">{{ section.title }}</span>
                    </igx-expansion-panel-title>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <div class="flex flex-col">
                        @for (option of section.options; track option.label) {
                            <igx-checkbox
                                class="filter-option [--ig-checkbox-border-radius:0.125rem] [--ig-checkbox-empty-color-hover:#0176ff] [--ig-checkbox-empty-color:#a9b8cc] [--ig-checkbox-fill-color-hover:#0176ff] [--ig-checkbox-fill-color:#0176ff] [--ig-checkbox-label-color-hover:#1a314a] [--ig-checkbox-label-color:#1a314a] [--ig-checkbox-tick-color-hover:#fff] [--ig-checkbox-tick-color:#fff]"
                                [(ngModel)]="option.checked">
                                <span class="text-sm font-medium leading-6 tracking-[0.1px]">{{ option.label }}</span>
                            </igx-checkbox>
                        }
                    </div>
                </igx-expansion-panel-body>
            </igx-expansion-panel>
        }
    </igx-accordion>
</div>
```
```scss
@use "sass:meta";
@import url("https://use.typekit.net/bng2zgw.css");
@include meta.load-css("igniteui-angular/lib/core/styles/themes/presets/igniteui-bootstrap-light");

app-checkbox-tailwind-styling {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

/* The design's 44px header: an 8px inset around the title's 28px box. */
igx-expansion-panel-header .igx-expansion-panel__header-inner {
    padding: 0.5rem 1rem;
}

/* The body's own inset is the theme's, so it is set here instead: 6px, which
   the option's 10px of padding completes into the header's 16px. */
igx-expansion-panel-body {
    padding: 0 0.375rem 0.5rem;
}

/* A 40px row in every theme. The padding sits on the checkbox itself rather
   than on the box, so the padding a theme adds around the box for its ripple
   can no longer stretch the row. */
.filter-option {
    --label-margin: 0.75rem;

    padding: 0.5rem 0.625rem;
}
```

## Accessibility

The Angular Checkbox provides a selectable control with a label and state that must remain understandable for keyboard and assistive technology users.

### Keyboard Interaction

The Checkbox uses the keyboard behavior provided by its rendered control. A disabled Checkbox is
not keyboard interactive, and the Space key changes its checked state.

Use the keyboard interaction provided by the Checkbox and verify the focus and state-change behavior for the target platform.

| Key / interaction | Action |
| --- | --- |
| Tab / Shift+Tab | Moves focus to or away from the Checkbox when it is enabled and focusable. |
| Space | Toggles the checked state of the focused Checkbox. |
| Indeterminate state | The Checkbox exposes its current state when the indeterminate state is enabled. |

### Screen Readers / ARIA

The Checkbox exposes its checked state, disabled state, and, when configured, required, invalid,
and indeterminate states through the semantics of its rendered control.

- Provide meaningful label content for every Checkbox so assistive technology users can identify
  its purpose.
- When the label is outside the component, connect it with the supported Angular labelling
  mechanism and verify the announcement in the target platform.
- Preserve the Checkbox state semantics when customizing or wrapping the control.
- Change event handlers report state changes; add an accessible name separately when needed.

The checked, unchecked, required, invalid, disabled, and indeterminate states must remain available to assistive technology through the component's supported semantics. Verify the rendered announcement against the platform API documentation.

### Accessibility Compliance

Verify the rendered Angular Checkbox against the accessibility requirements of the application.

| Criterion | How the component supports the requirement |
| --- | --- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The enabled Checkbox can receive keyboard focus and its checked state can be changed with Space. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The Checkbox exposes its accessible name and current selection state through the rendered control and supported state semantics. |
| [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification) | When the Checkbox is invalid, expose the validation state and provide an appropriate message in the surrounding form. |

Your responsibilities:

- Give every Checkbox a meaningful accessible name.
- Keep focus visible and preserve sufficient contrast when customizing the Checkbox theme.
- Ensure required, invalid, disabled, and indeterminate states are also communicated when visual
  styling alone is insufficient.
- Test the rendered Checkbox with keyboard navigation and supported assistive technologies.

## API References

The Angular Checkbox API reference provides the complete API surface for the component.

[`IgxCheckbox`](mcp:get_api_reference?platform=angular&component=IgxCheckboxComponent)

## Dependencies

The Angular Checkbox requires a theme stylesheet to apply its visual styling. See the framework-specific setup in [**Getting Started**](../general/getting-started.md).

## Additional Resources

Use the following Angular resources for API details and project support:

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

## Related Components

The Angular Checkbox is intended for selectable form options. Use the following related component when you need an immediate on/off action instead:

- [`IgxSwitch`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent)

## FAQ

These frequently asked questions cover common Angular Checkbox selection, accessibility, form, and validation scenarios.

  **Q: Can I use the Checkbox with a form?**

    The Angular Checkbox works with `ngModel` and with reactive forms, so you can bind its checked state through a form control.
  
  **Q: How do I show a partially selected Checkbox?**

    The Angular Checkbox supports a third, indeterminate state for partially selected options. Set the `indeterminate` property to enable that state.
  
  **Q: How do I provide an accessible Checkbox label?**

    The Angular Checkbox should have meaningful label content so assistive technology users can identify its purpose. When the label is outside the component, connect it with the supported labelling mechanism such as `aria-labelledby`.
  
  **Q: How do I mark a Checkbox as required or invalid?**

    Set the `required` property to indicate that the Checkbox must be selected and the `invalid` property to expose a validation state. Provide an appropriate validation message in the surrounding form when the Checkbox is invalid.
  


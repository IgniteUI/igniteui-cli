---
title: "Button Component"
description: Get started with the Angular Button Component. Select button variants, configure sizes, define styling, and gain flexibility through the Angular Button OnClick event.
keywords: "Angular, UI controls, web widgets, UI widgets, Angular Button Components, Infragistics"
mentionedTypes: ["Button", "ButtonBase"]
license: MIT
last_updated: 2026-08-13
relatedComponents: ["IconButton"]
llms:
  description: "The Angular Button Component lets you enable clickable elements that trigger actions in your Angular app."
_tocName: Button
---
# Button Component

The Angular Button component lets you enable clickable elements that trigger actions in your Angular app. You get full control over button variants, styling, and sizes. The Button component also lets you handle clicks, toggle the button, and disable it when needed.

## Live Demo

```typescript
import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxInputDirective, IgxInputGroupComponent } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-button-overview',
    styleUrls: ['./button-overview.component.scss'],
    templateUrl: './button-overview.component.html',
    imports: [IgxAvatarComponent, IgxButtonDirective, IgxInputGroupComponent, IgxInputDirective]
})
export class ButtonOverviewComponent { }
```
```html
<div class="form">
    <igx-avatar shape="circle" src="https://dl.infragistics.com/x/img/avatars/14.jpg" alt="profile picture"></igx-avatar>
    <div class="fields">
        <igx-input-group>
            <input igxInput type="text" placeholder="First Name" />
        </igx-input-group>
        <igx-input-group>
            <input igxInput type="text" placeholder="Last Name" />
        </igx-input-group>
        <div class="actions">
            <button igxButton="flat">Cancel</button>
            <button igxButton="contained">Save</button>
        </div>
    </div>
</div>
```
```scss
.form {
    display: flex;
    justify-content: center;
    gap: 1.25rem;
    padding: 2.5rem;
}

.form igx-avatar {
    --ig-size: var(--ig-size-large);
}

.fields {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 260px;
    width: 100%;
}

:host ::ng-deep .fields .igx-input-group__bundle {
    background-color: var(--ig-gray-50);
}

:host ::ng-deep .fields igx-input-group,
:host ::ng-deep .fields igx-input-group .igx-input-group__input {
    --ig-size: var(--ig-size-medium);
}

:host ::ng-deep .fields .igx-input-group__input {
    margin: 0;
}
.actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 0.5rem;
}
```

## Anatomy

The Angular Button renders its label and optional prefix and suffix content in the component shadow DOM.

**Button anatomy:** The Button component renders an actionable control with optional prefix and suffix content.

<style>{`
    .button-anatomy {
        --igd-anatomy-padding: 64px;
    }

    .button-anatomy .igd-anatomy__image {
        max-width: 100%;
    }

    .button-anatomy-legend {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        column-gap: 48px;
        margin-bottom: 24px;
    }

    .button-anatomy-legend div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .button-anatomy-legend strong {
        margin-bottom: 12px;
    }

    .button-anatomy-legend span {
        display: block;
    }

    @media (max-width: 768px) {
        .button-anatomy-legend {
            grid-template-columns: 1fr 1fr;
            row-gap: 24px;
        }
    }

    @media (max-width: 480px) {
        .button-anatomy-legend {
            grid-template-columns: 1fr;
        }
    }
`}</style>

<div class="button-anatomy-legend ig-typography__body-2">
    <div>
        <strong>A - Contained Button</strong>
        <span>1. Icon (optional)</span>
        <span>2. Label</span>
        <span>3. Container</span>
    </div>
    <div>
        <strong>B - Outlined Button</strong>
        <span>4. Icon (optional)</span>
        <span>5. Label</span>
        <span>6. Container</span>
    </div>
    <div>
        <strong>C - Flat Button</strong>
        <span>7. Icon (optional)</span>
        <span>8. Label</span>
    </div>
    <div>
        <strong>D - Fab Icon Button</strong>
        <span>9. Icon</span>
        <span>10. Container</span>
    </div>
</div>

The Button renders its content inside the `base` CSS part. Use the default slot for the label and the `prefix` and `suffix` slots for optional content before and after the label.

```text
<igc-button>
├── ::part(base)
├── prefix slot
├── default slot content
└── suffix slot
</igc-button>
```

## Getting Started

To use the Angular Button, follow the [Ignite UI for Angular Getting Started](../general/getting-started.md) topic for the basic project setup, then register the component for your target platform.

For Angular using the **igniteui-angular** package, install the package:

```cmd
npm install igniteui-angular
```

Then import `IgxButtonDirective` and add it to the component `imports` collection.

```ts
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button',
    imports: [IgxButtonDirective],
    template: '<button igxButton>Save changes</button>'
})
export class ButtonComponent {}
```

The simplest way to start using the [`IgxButton`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective) is as follows:

```html
<button igxButton></button>
```

## Usage

Use the Angular Button to trigger an action, submit form data, or navigate to another page. Choose the appropriate button type and variant for the action, then add optional content such as icons when needed.

The Button content is placed in its default slot. Add the action label as the button content so that the purpose of the action is clear to all users.

```html
<button igxButton>Save changes</button>
```

With `prefix` and `suffix` slots of the [`IgxButton`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective) component, we can add different content before and after the main content of the button.

We recommend using a `<span>` element when adding simple text, symbols, or emojis, and an [`IgxIcon`](mcp:get_api_reference?platform=angular&component=IgxIconComponent) component when adding icons to the `prefix` and `suffix` slots.

```html
<button igxButton="contained">
    <span igxButtonIcon="prefix">download</span>
    Download
    <span igxButtonIcon="suffix">arrow_forward</span>
</button>
```

### Type

The button component will change its internal structure from a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) to an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) type element when the [`Href`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective&member=href) attribute is set. In that case the button can be thought of as a regular link. Setting the [`Href`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective&member=href) attribute will allow you to also set the [`Rel`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective&member=rel), [`Target`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective&member=target) and [`Download`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective&member=download) attributes.
In the case when the button component uses an actual [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element internally, we can specify its [`DisplayType`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective&member=type) by setting the property to any of the following values:

- `Submit` - when we want to submit the form data
- `reset` - when we want to reset form data to its initial values
- `button` - when we want to add button with a custom functionality anywhere on a webpage

### Variants

Five types of Buttons are supported: `contained` button for prominent primary actions, `outlined` button for secondary actions, `flat` button for subtle actions, `floating action` button (Fab) for prominent main actions, and `icon` button for actions represented by an icon. Icon Buttons can also use any of the other four variants.

#### Contained Button

Use the [`Variant`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective) attribute to add a simple contained button in your component template. Note that if you do not set variant, by default it will be set to contained.

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-contained',
    styleUrls: ['./button-contained.component.scss'],
    templateUrl: './button-contained.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonContainedComponent { }
```
```html
<div class="button-sample">
    <button igxButton="contained">
        <igx-icon family="material">notifications</igx-icon>
        Contained
        <igx-icon family="material">notifications</igx-icon>
    </button>
</div>
```
```scss
.button-sample {
    display: flex;
    padding: 2.5rem;
}

.button-sample button {
    width: 46%;
    margin: auto;
}
```

#### Outlined Button

All you have to do to create an `outlined` button is to change the value of the [`Variant`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective) property:

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-outlined',
    styleUrls: ['./button-outlined.component.scss'],
    templateUrl: './button-outlined.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonOutlinedComponent { }
```
```html
<div class="button-sample">
    <button igxButton="outlined">
        <igx-icon family="material">notifications</igx-icon>
        Outlined
        <igx-icon family="material">notifications</igx-icon>
    </button>
</div>
```
```scss
.button-sample {
    display: flex;
    padding: 2.5rem;
}

.button-sample button {
    width: 46%;
    margin: auto;
}
```

#### Flat Button

Analogically, we can switch to `flat` variant.

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-flat',
    styleUrls: ['./button-flat.component.scss'],
    templateUrl: './button-flat.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonFlatComponent { }
```
```html
<div class="button-sample">
    <button igxButton="flat">
        <igx-icon family="material">notifications</igx-icon>
        Flat
        <igx-icon family="material">notifications</igx-icon>
    </button>
</div>
```
```scss
.button-sample {
    display: flex;
    padding: 2.5rem;
}

.button-sample button {
    width: 46%;
    margin: auto;
}
```

#### Floating Action Button

We can create a floating action button by setting the [`Variant`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective) property to `fab`:

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-fab',
    styleUrls: ['./button-fab.component.scss'],
    templateUrl: './button-fab.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonFabComponent { }
```
```html
<div class="button-sample">
    <button igxButton="fab">
        <igx-icon family="material">add</igx-icon>
        Floating Action
        <igx-icon family="material">add</igx-icon>
    </button>
</div>
```
```scss
.button-sample {
    display: flex;
    padding: 2rem;
}

.button-sample button {
    width: 45%;
    margin: auto;
}
```

### States

You may also insert each Button in a disabled state because they all support both Enabled and Disabled variants. In Figma, you can switch between the two using a boolean property in the properties panel. In code, use the `disabled` property or attribute when an action is not currently available.

```html
<button igxButton="contained" [disabled]="true">Disabled</button>
```

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-states',
    styleUrls: ['./button-states.component.scss'],
    templateUrl: './button-states.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonStatesComponent { }
```
```html
<div class="button-container">
    <div class="button-item">
        <button igxButton="contained" [disabled]="true">
            <igx-icon family="material">notifications</igx-icon>
            Contained
            <igx-icon family="material">notifications</igx-icon>
        </button>
    </div>
    <div class="button-item">
        <button igxButton="outlined" [disabled]="true">
            <igx-icon family="material">notifications</igx-icon>
            Outlined
            <igx-icon family="material">notifications</igx-icon>
        </button>
    </div>
    <div class="button-item">
        <button igxButton="flat" [disabled]="true">
            <igx-icon family="material">notifications</igx-icon>
            Flat
            <igx-icon family="material">notifications</igx-icon>
        </button>
    </div>
    <div class="button-item">
        <button igxButton="fab" [disabled]="true">
            <igx-icon family="material">add</igx-icon>
            Floating Action
            <igx-icon family="material">add</igx-icon>
        </button>
    </div>
</div>
```
```scss
.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
}

.button-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}
```

### Interaction States

In Figma the Enabled buttons support **Idle**, **Hover**, **Focused** and **Focused & Hover** states which can be switched between by changing the `State` property. In code, these interaction states are provided by the platform Button component and should preserve a visible focus indicator for keyboard users.

```html
<button igxButton="contained" igxRipple="white" [igxRippleCentered]="true" [igxRippleDuration]="2000">
    Ripple
</button>
```

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-interaction-states',
    styleUrls: ['./button-interaction-states.component.scss'],
    templateUrl: './button-interaction-states.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonInteractionStatesComponent {
    public states = [
        { label: 'Idle', value: 'idle' },
        { label: 'Hover', value: 'state-hover' },
        { label: 'Focused', value: 'state-focused' },
        { label: 'Focused & Hover', value: 'state-focused-hover' }
    ];
}
```
```html
<div class="button-container">
    @for (state of states; track state.value) {
        <div class="button-item">
            <span class="button-label">{{ state.label }}</span>
            <button igxButton="contained" [class]="state.value">
                <igx-icon family="material">notifications</igx-icon>
                Contained
                <igx-icon family="material">notifications</igx-icon>
            </button>
        </div>
    }
</div>
```
```scss
@use "igniteui-angular/theming" as *;

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
}

.button-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    --hover-background: var(--ig-contained-button-hover-background);
    --hover-foreground: var(--ig-contained-button-hover-foreground);
    --focus-background: var(--ig-contained-button-focus-background);
    --focus-foreground: var(--ig-contained-button-focus-foreground);
    --focus-hover-background: var(--ig-contained-button-focus-hover-background);
    --focus-hover-foreground: var(--ig-contained-button-focus-hover-foreground);
}

.button-label {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 13px;
    font-weight: 400;
    font-style: normal;
    line-height: 20px;
    letter-spacing: 0.3px;
}

.button-item button.state-hover {
    background: var(--hover-background);
    color: var(--hover-foreground);
}

.button-item button.state-focused {
    background: var(--focus-background);
    color: var(--focus-foreground);
}

.button-item button.state-focused-hover {
    background: var(--focus-hover-background);
    color: var(--focus-hover-foreground);
}
```

### Layout Template

Contained, Outlined, Flat, and Floating Action Buttons support flexible icon and label templates. In Figma, to show or hide the icons, you can use the `Left Icon` and `Right Icon` boolean properties. If you want to have an Icon Button, you can set the `Content` property to `Icon`.

```html
<span igxButton="outlined" igxButtonColor="white" igxButtonBackground="#72da67" igxRipple="white">
    Span button
</span>
```

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-layout',
    styleUrls: ['./button-layout.component.scss'],
    templateUrl: './button-layout.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonLayoutComponent {
}
```
```html
<div class="button-container">
    <div class="button-item"><button igxButton="outlined"><igx-icon family="material">add</igx-icon>Add</button></div>
    <div class="button-item"><button igxButton="outlined">Buy Now</button></div>
    <div class="button-item"><button igxButton="outlined">Add<igx-icon family="material">add</igx-icon></button></div>
    <div class="button-item"><button igxButton="outlined"><igx-icon family="material">add</igx-icon>Floating Action</button></div>
    <div class="button-item"><button igxButton="outlined"><igx-icon family="material">add</igx-icon></button></div>
    <div class="button-item"><button igxButton="outlined">Floating Action</button></div>
    </div>
```
```scss
.button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;
    padding: 2.5rem;
}

.button-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
}

.button-container button {
    --ig-font-family: 'Titillium Web', sans-serif;
    --ig-button-text-transform: uppercase;

    font-size: 0.85rem;
    letter-spacing: 1px;
}
```

### Size

Users can change the size of the [`IgxButton`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective) using the `--ig-size` CSS variable.

```css
.button-size-small {
    --ig-size: var(--ig-size-small);
}
```

The result of implementing the above code should look like the following:

```typescript
import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-size',
    styleUrls: ['./button-size.component.scss'],
    templateUrl: './button-size.component.html',
    imports: [IgxButtonDirective, IgxIconComponent, TitleCasePipe]
})
export class ButtonSizeComponent {
    public sizes = ['large', 'medium', 'small'];
    public variants = ['contained', 'outlined', 'flat'] as const;
}
```
```html
<div class="size-grid">
    <div class="size-header"><span></span><span>Contained</span><span>Outlined</span><span>Flat</span><span>Fab</span></div>
    @for (size of sizes; track size) {
        <div class="size-row">
            <span class="size-label" [class]="'size-' + size">{{ size | titlecase }}</span>
            @for (variant of variants; track variant) {
                <button [igxButton]="variant" [class]="'size-' + size">
                    <igx-icon family="material">notifications</igx-icon>
                    {{ variant | titlecase }}
                    <igx-icon family="material">notifications</igx-icon>
                </button>
            }
            <button igxButton="fab" [class]="'size-' + size">
                <igx-icon family="material">add</igx-icon>
                Floating Action
                <igx-icon family="material">add</igx-icon>
            </button>
        </div>
    }
</div>
```
```scss
:host {
    display: flex;
    justify-content: center;
    align-items: center;
}

.size-grid {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
}

.size-row {
    display: grid;
    grid-template-columns: 70px repeat(4, minmax(0, 1fr));
    align-items: center;
    justify-items: center;
    column-gap: 1rem;
    row-gap: 0.5rem;
    width: 100%;
}

.size-header {
    display: grid;
    grid-template-columns: 70px repeat(4, minmax(0, 1fr));
    align-items: center;
    justify-items: center;
    column-gap: 1rem;
    width: 100%;
    color: var(--ig-gray-600);
    font: 13px/20px "Aktiv Grotesk", sans-serif;
    letter-spacing: .3px;
}

.size-label {
    justify-self: start;
    color: var(--ig-gray-600);
    font: 400 13px/20px "Aktiv Grotesk", sans-serif;
    letter-spacing: .3px;
}

.size-row button {
    width: auto;
    transform: scale(.9);
}

.size-small {
    --ig-size: var(--ig-size-small) !important;
}

.size-medium {
    --ig-size: var(--ig-size-medium) !important;
}

.size-large {
    --ig-size: var(--ig-size-large) !important;
}
```

### Download

Setting the [`Download`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective) Button attribute will prompt the user to save the linked URL instead of navigating to it.

```html
<button
    igxButton="contained"
    href=""
    download="url"
    target="_blank">
    Download
</button>
```

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-download',
    styleUrls: ['./button-download.component.scss'],
    templateUrl: './button-download.component.html',
    imports: [IgxButtonDirective]
})
export class ButtonDownloadComponent { }
```
```html
<div class="button-sample">
    <a igxButton="contained" href="" download="url" target="_blank">Download</a>
</div>
```
```scss
.button-sample {
    display: flex;
    padding: 2.5rem;
}

.button-sample a {
    width: 46%;
    margin: auto;
}
```

### Do/Don't

**When to use:** Use Button for actions that change state, submit data, or trigger an application command.

**When not to use:** Use [Icon Button](./icon-button.md) when the action is represented only by an icon and does not require a text label.

<div class="table-responsive">
    <table class="table" style="width: 100%; table-layout: fixed; border-collapse: collapse; border: 1px solid #d3d3d3; margin-bottom: 24px;">
        <thead>
            <tr>
                <th style="width: 50%; background-color: #d3d3d3; text-align: left; padding: 16px 20px; font-size: 18px; font-weight: 500;">Do</th>
                <th style="width: 50%; background-color: #d3d3d3; text-align: left; padding: 16px 20px; font-size: 18px; font-weight: 500;">Don't</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
                <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
            </tr>
            <tr>
                <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
                <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
            </tr>
            <tr>
                <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
                <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
            </tr>
        </tbody>
    </table>
</div>

## Properties

The Angular Button exposes platform-specific properties for controlling its content, appearance, and behavior.

The Angular Button is provided as a directive and exposes the following properties. Use the API reference for the complete type definitions.

| name | type | default | description |
| --- | --- | --- | --- |
| [`variant`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective) | string | `flat` | Sets the Button visual variant. |
| [`type`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective) | string | `button` | Sets the native button type. |

## Styling

Customize the Button with theme settings, CSS variables, or CSS parts to match the visual language of your application.

### Sass Theming

Use the standard Ignite UI for Angular theme workflow to customize the Button consistently with the rest of the application.

### CSS Variables

Use the generated CSS variables on the Button element to override the theme values for a specific instance. The variant-specific theme functions derive related interaction-state values from the primary theme parameters.

| Primary property | Dependent property | Description |
| --- | --- | --- |
| `$background` | `$hover-background`, `$focus-background`, `$active-background` | Button background colors for the interaction states. |
| `$foreground` | `$hover-foreground`, `$focus-foreground`, `$active-foreground` | Button text colors for the interaction states. |
| `$border-color` | `$hover-border-color`, `$focus-border-color`, `$active-border-color` | Button border colors for the interaction states. |
| `$shadow-color` | `$resting-shadow`, `$hover-shadow`, `$focus-shadow`, `$active-shadow` | Button shadow colors and elevations. |
| `$disabled-background` | `$disabled-foreground`, `$disabled-icon-color`, `$disabled-border-color` | Button colors when it is disabled. |

### Style Parts

The [`IgxButton`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective) exposes three CSS parts which we can use for styling:

|Name|Description|
|--|--|
| `base` | The native button element of the igc-button component. |
| `prefix` | The prefix container of the igc-button component. |
| `suffix` | The suffix container of the igc-button component. |

The `base` CSS part allows us to style the wrapped element (`<button>` or `<a>`).

```css
igc-button::part(base) {
  background-color: var(--ig-primary-500);
  color: var(--ig-primary-500-contrast);
  padding: 18px;
}
```

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./button-styling.component.scss'],
    templateUrl: './button-styling.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonStylingComponent { }
```
```html
<div class="button-grid">
    <div class="button-row">
        <button igxButton="contained" class="confirm-button">Confirm</button>
        <button igxButton="outlined" class="send-button">
            <igx-icon family="material">send</igx-icon>
            Send
        </button>
        <button igxButton="flat" class="cancel-button">Cancel</button>
        <button igxButton="fab" class="add-button">
            Add
            <igx-icon family="material">add</igx-icon>
        </button>
    </div>
</div>
```
```scss
@use "layout.scss";

// CSS variables approach

.confirm-button {
    --background: #1275c4;
    --foreground: #fff;
    --hover-background: #1275c4;
    --hover-foreground: #fff;
    &:hover { --hover-background: #0b4f8a; }
}

.send-button {
    --background: transparent;
    --border-color: #8a2be2;
    --foreground: #8a2be2;
    --hover-border-color: #8a2be2;
    --hover-foreground: #8a2be2;
    --icon-color: #8a2be2;
    --icon-color-hover: #8a2be2;
    &:hover { --hover-background: #8a2be2; --hover-border-color: #6a1bb1; --hover-foreground: #fff; --icon-color-hover: #fff; }
}

.cancel-button {
    --foreground: #1275c4;
    --hover-foreground: #1275c4;
    &:hover { --hover-background: #dbeeff; --hover-foreground: #063b68; }
}

.add-button {
    --background: #4caf50;
    --foreground: #000;
    --hover-background: #4caf50;
    --hover-foreground: #000;
    --icon-color: #000;
    --icon-color-hover: #000;
    --border-radius: 999px;
    &:hover { --hover-background: #257a2b; --hover-foreground: #fff; --icon-color-hover: #fff; }
}
```

### Styling with Tailwind

You can style the Button using custom Tailwind utility classes. Make sure to [set up Tailwind](/themes/tailwind) first.

Along with the Tailwind import in your global stylesheet, include the utility file:

```scss
@import "tailwindcss";
@use 'igniteui-theming/tailwind/utilities/material.css';
```

Use the variant-specific classes such as `light-flat-button`, `light-contained-button`, `light-outlined-button`, and `light-fab-button`:

```html
<button igxButton="contained" class="!light-contained-button ![--background:#7B9E89]">
    Contained Button
</button>
```

The exclamation mark (`!`) ensures that the utility class takes precedence over the Button's default theme.

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-tailwind-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./button-tailwind-styling.component.scss'],
    templateUrl: './button-tailwind-styling.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonTailwindStylingComponent { }
```
```html
<div class="button-grid flex flex-col items-center justify-center h-full gap-6 p-4">
  <div class="button-row grid grid-cols-4 items-center justify-items-center gap-12">
    <button igxButton="contained" class="confirm-button">Confirm</button>
    <button igxButton="outlined" class="send-button">
      <igx-icon family="material">send</igx-icon>
      Send
    </button>
    <button igxButton="flat" class="cancel-button">Cancel</button>
    <button igxButton="fab" class="add-button">
      Add
      <igx-icon family="material">add</igx-icon>
    </button>
  </div>
</div>
```
```scss
@use "layout.scss";

.confirm-button { --hover-background: #3730a3; --hover-foreground: #fff; }
.send-button { --hover-background: #db2777; --hover-border-color: #be185d; --hover-foreground: #fff; --icon-color-hover: #fff; }
.cancel-button { --hover-background: #fef3c7; --hover-foreground: #78350f; }
.add-button { --hover-background: #0f766e; --hover-foreground: #fff; --icon-color-hover: #fff; }
```

## Accessibility

The Angular Button is an interactive control for actions and, when `href` is set, navigation.
Use the native button behavior for commands and preserve the link behavior for navigation.

### Keyboard Interaction

The Button uses the keyboard behavior of its rendered native control. A disabled Button is not
interactive, and a Button with `href` is rendered as a link instead of a command button.

| Key | Action |
| -- | -- |
| Tab / Shift+Tab | Moves focus to or away from the Button when it is keyboard-focusable. |
| Enter / Space | Activates a focused command Button. Enter activates a Button used as a link. |

### Screen Readers / ARIA

The Button renders a native `button` for command actions and an `a` element when `href` is set.
The native element supplies the appropriate role and keyboard semantics.

- The Button uses the native `button` or `a` element, so assistive technology receives the
    corresponding native role and keyboard semantics.
- Provide an `aria-label` or another accessible naming mechanism for an icon-only Button.
- A disabled Button is not keyboard interactive.
- Click event handlers perform application actions; add an accessible name and state separately
    when the action is not conveyed by the visible content or native attributes.

### Accessibility Compliance

This topic does not make a product-level WCAG, Section 508, or EN 301 549 conformance claim. Verify the rendered Button and its surrounding application against the accessibility requirements that apply to the target project.

| Criterion | How the component supports the requirement |
| -- | -- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The native command button supports keyboard activation, and a Button with `href` uses native link activation. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The rendered native element supplies the role and state semantics. The visible Button content supplies the accessible name when it is meaningful. |
| [2.4.4 Link Purpose](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context) | When `href` is set, the Button becomes a navigation link; provide a name that identifies its destination or purpose. |

Your responsibilities:

- Give every Button a meaningful accessible name, especially icon-only Buttons.
- Use a command Button for actions and `href` for navigation; do not emulate one with the other.
- Do not rely on color, hover, or focus styling alone to communicate the action or state.
- Preserve sufficient contrast and a visible focus indicator when customizing the Button theme.

## Troubleshooting

Use this section to check boundaries and common decisions before treating Button as a command, navigation link, or form control.

### Why does the Button behave like a link?

When `href` is set, the Button is used for navigation rather than for a command action. Remove `href` when the control should trigger application logic instead of navigating to a URL.

### Why is the Button not keyboard-focusable?

Check whether the Button is disabled or whether the surrounding application changes its focus behavior. Use a focusable Button for actions that must be available through keyboard navigation.

### Known Limitations

The Button has the following platform-independent boundaries:

- Use a text label or another accessible naming mechanism for every action; an unlabeled icon-only Button does not communicate its purpose by itself.
- Setting `href` changes the Button from an action control to a navigation control. Use [Icon Button](./icon-button.md) for icon-only actions and verify its accessible name separately.
- The Button's visual appearance does not determine whether the surrounding application action is available or valid; application logic must provide that state and feedback.

## API References

The Angular Button API reference lists the complete verified API surface for the target platform.

[`IgxButton`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective)

## Dependencies

The Angular Button requires the corresponding Angular package and theme stylesheet. The sizing example also uses the [`IgxRadio`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent) and [`IgxRadioGroup`](mcp:get_api_reference?platform=angular&component=IgxRadioGroupDirective) components.

## Additional Resources

The following resources provide additional Angular Button guidance and project support.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

## Related Components

The Angular Button is commonly used with related components when an action needs a specialized presentation.

- [Icon Button](./icon-button.md) is intended for icon-only actions.

## FAQ

    **Q: Which component should I use for an icon-only action?**

        Use the [Icon Button](./icon-button.md) component and provide an accessible name for the action.
    
    **Q: How do I disable a Button?**

        Set the verified `disabled` property to make the Button unavailable and prevent it from being activated.
    
    **Q: How do I change the Button size?**

        Use the platform's supported sizing options or the `--ig-size` CSS variable to customize the Button density.
    


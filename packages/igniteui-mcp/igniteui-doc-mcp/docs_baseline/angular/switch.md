---
title: "Switch"
description: "Ignite UI for Angular Switch component enables developers to use binary on/off or true/false data input functions within their applications."
keywords: "Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Switch components, Angular Switch controls"
mentionedTypes: ["Switch"]
relatedComponents: [Checkbox, ToggleButton]
license: MIT
last_updated: "2026-08-31"
llms:
  description: "The Ignite UI for Angular Switch component is a binary choice selection component that behaves similarly to the switch component in iOS."
_tocName: Switch
---
# Switch Component

The Ignite UI for Angular Switch component is a binary choice selection component that behaves similarly to the switch component in iOS.

## Live Demo

```typescript
import { Component } from '@angular/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

@Component({
    selector: 'app-switch-overview',
    styleUrls: ['./switch-overview.component.scss'],
    templateUrl: './switch-overview.component.html',
    imports: [IgxSwitchComponent]
})
export class SwitchOverviewComponent { }
```
```html
<div class="notifications">
    <h6 class="notifications__title">Notifications</h6>
    <div class="notifications__row">
        <igx-switch labelPosition="before" [checked]="true">
            <span class="option">
                <span class="option__label">Push notifications</span>
                <span class="option__hint">Deliver alerts to this device</span>
            </span>
        </igx-switch>
    </div>
    <div class="notifications__row">
        <igx-switch labelPosition="before">
            <span class="option">
                <span class="option__label">Weekly digest</span>
                <span class="option__hint">Summary email every Monday</span>
            </span>
        </igx-switch>
    </div>
    <div class="notifications__row">
        <igx-switch labelPosition="before" [disabled]="true">
            <span class="option">
                <span class="option__label">SMS alerts</span>
                <span class="option__hint">Unavailable on your plan</span>
            </span>
        </igx-switch>
    </div>
</div>
```
```scss
:host {
    display: flex;
    place-content: center;
    place-items: center;
    padding: 16px;
}

.notifications {
    inline-size: 100%;
    max-inline-size: 384px;
    background: var(--ig-surface-500);
    border-radius: 4px;
    overflow: hidden;

    .notifications__title {
        margin: 0;
        padding: 16px;
        font: 400 10px / 16px "Titillium Web", sans-serif;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: var(--ig-secondary-500);
    }

    .notifications__row {
        padding-block: 12px;
        padding-inline: 16px;

        igx-switch {
            inline-size: 100%;
            justify-content: space-between;
            gap: 16px;
            transform: translateX(-10px);

            ::ng-deep .igx-switch__composite {
                transform: translateX(8px);
            }
        }
    }
}

.option {
    display: flex;
    flex-direction: column;
    gap: 2px;
    text-align: start;
    white-space: normal;

    .option__label {
        font-size: 16px;
        color: var(--ig-gray-900);
    }

    .option__hint {
        font-size: 13px;
        color: var(--ig-gray-700);
    }
}
```

## Anatomy

The Angular Switch contains a control for changing a binary state and an optional label.

**Switch anatomy:** The Switch component contains a control for changing a binary state and an optional label.

<style>{`
  .switch-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .switch-anatomy .igd-anatomy__image {
    max-width: 142.5px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Track:</strong> indicates the switch path between on and off states.<br />
<strong>2. Thumb:</strong> changes the current state.<br />
<strong>3. Label (optional):</strong> describes what the switch controls.</span>

The following diagram shows the logical structure of the Angular Switch. The control manages the binary state, while the optional label describes the setting controlled by the switch.

```text
Switch
├── Control
└── Label (optional)
```

## Getting Started

To use the Angular Switch, follow the [Ignite UI for Angular Getting Started](../general/getting-started.md) topic for the basic project setup, then register the component for your target platform.

At its core, the [`IgxSwitch`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent) component allows for toggling between on/off states. The default styling is done according to the selection controls specification in the Material Design guidelines.

For Angular using the **igniteui-angular** package, install the package:

```cmd
npm install igniteui-angular
```

Then import the `IgxSwitchComponent`:

```ts
import { IgxSwitchComponent } from 'igniteui-angular/switch';
```

The simplest way to start using the [`IgxSwitch`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent) is as follows:

```html
<igx-switch [checked]="true">Simple switch</igx-switch>
```

## Usage

Use the Angular Switch as a binary choice control for settings that take effect immediately when the user changes their state.

The following example shows the basic Switch configuration. To provide a meaningful label for the switch, simply place some text between the opening and closing tags:

```html
<igx-switch>Accept terms</igx-switch>
```

You can use the [`required`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent&member=required) property to mark the switch as required.

```html
<igx-switch [required]="true">Label</igx-switch>
```

You can use the [`invalid`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent&member=invalid) property to mark the switch as invalid.

```html
<igx-switch [invalid]="true">Label</igx-switch>
```

### Interaction States

The Switch can be inserted in an `Enabled` or `Disabled` state. In `Enabled` state, the switch also supports `Hover`, `Focused` and `Focused & Hover` states.

```typescript
import { Component } from '@angular/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

@Component({
    selector: 'app-switch-enabled',
    styleUrls: ['./switch-enabled.component.scss'],
    templateUrl: './switch-enabled.component.html',
    imports: [IgxSwitchComponent]
})
export class SwitchEnabledComponent { }
```
```html
<div class="states">
    <span class="states__corner"></span>
    <span class="states__column">Hover</span>
    <span class="states__column">Focused</span>
    <span class="states__column">Focused &amp; Hover</span>

    <span class="states__row">Enabled / On</span>
    <igx-switch labelPosition="before" [checked]="true">
        <span>Power</span>
    </igx-switch>
    <igx-switch labelPosition="before" [checked]="true">
        <span>Power</span>
    </igx-switch>
    <igx-switch labelPosition="before" [checked]="true">
        <span>Power</span>
    </igx-switch>

    <span class="states__row">Enabled / Off</span>
    <igx-switch labelPosition="before">
        <span>Power</span>
    </igx-switch>
    <igx-switch labelPosition="before">
        <span>Power</span>
    </igx-switch>
    <igx-switch labelPosition="before">
        <span>Power</span>
    </igx-switch>
</div>
```
```scss
:host {
    display: flex;
    place-content: center;
    place-items: center;
    padding: 16px;
}

.states {
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    gap: 32px 24px;

    .states__column,
    .states__row {
        font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
        letter-spacing: 0.1px;
        color: var(--ig-gray-600);
    }

    .states__column {
        text-align: center;
    }

    .states__row {
        text-align: end;
    }

    igx-switch {
        justify-self: center;
    }
}
```

### Disabled States

You may also set the state of the switch to `Disabled` to disallow user interaction with it. You can use the [`disabled`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent&member=disabled) attribute to set this state.

```html
<igx-switch [disabled]="true">Label</igx-switch>
```

```typescript
import { Component } from '@angular/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

@Component({
    selector: 'app-switch-disabled',
    styleUrls: ['./switch-disabled.component.scss'],
    templateUrl: './switch-disabled.component.html',
    imports: [IgxSwitchComponent]
})
export class SwitchDisabledComponent { }
```
```html
<div class="states">
    <div class="states__variant">
        <span class="states__label">Disabled Checked</span>
        <igx-switch labelPosition="before" [disabled]="true" [checked]="true">
            <span>Power</span>
        </igx-switch>
    </div>
    <div class="states__variant">
        <span class="states__label">Disabled Unchecked</span>
        <igx-switch labelPosition="before" [disabled]="true">
            <span>Power</span>
        </igx-switch>
    </div>
</div>
```
```scss
:host {
    display: flex;
    min-block-size: 100%;
    box-sizing: border-box;
    place-content: center;
    place-items: center;
    padding: 16px;
}

.states {
    --variant-gap: 60px;
    --label-gap: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--variant-gap);

    .states__variant {
        display: flex;
        align-items: center;
        gap: var(--label-gap);
    }

    .states__label {
        font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
        letter-spacing: 0.1px;
        color: var(--ig-gray-600);
    }
}
```

### On/Off States

The Switch can be set to an `On` or `Off` state to indicate whether a setting is enabled or disabled.

```html
<igx-switch [checked]="true">On</igx-switch>
<igx-switch [checked]="false">Off</igx-switch>
```

```typescript
import { Component } from '@angular/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

@Component({
    selector: 'app-switch-selected',
    styleUrls: ['./switch-selected.component.scss'],
    templateUrl: './switch-selected.component.html',
    imports: [IgxSwitchComponent]
})
export class SwitchSelectedComponent { }
```
```html
<div class="states">
    <span class="states__row">On</span>
    <igx-switch labelPosition="before" [checked]="true">
        <span>Power</span>
    </igx-switch>
    <igx-switch labelPosition="before" [checked]="true" [disabled]="true">
        <span>Power</span>
    </igx-switch>

    <span class="states__row">Off</span>
    <igx-switch labelPosition="before">
        <span>Power</span>
    </igx-switch>
    <igx-switch labelPosition="before" [disabled]="true">
        <span>Power</span>
    </igx-switch>
</div>
```
```scss
:host {
    display: flex;
    place-content: center;
    place-items: center;
    padding: 16px;
}

.states {
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    gap: 32px;
    transform: translateY(16px);

    .states__row {
        text-align: end;
        font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
        letter-spacing: 0.1px;
        color: var(--ig-gray-600);
    }

    .states__disabled {
        margin-inline-start: 16px;
    }
}
```

### Layout

You can specify if the label should be positioned before or after the switch toggle by setting the [`LabelPosition`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent&member=labelPosition) property of the switch. Allowed values are `before` and `after` (default):

```html
<igx-switch labelPosition="before">Label</igx-switch>
```

```typescript
import { Component } from '@angular/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

@Component({
    selector: 'app-switch-layout',
    styleUrls: ['./switch-layout.component.scss'],
    templateUrl: './switch-layout.component.html',
    imports: [IgxSwitchComponent]
})
export class SwitchLayoutComponent { }
```
```html
<div class="variants">
    <div class="variants__item">
        <span class="variants__label">Label Before</span>
        <igx-switch labelPosition="before" [checked]="true">
            <span>Power</span>
        </igx-switch>
    </div>
    <div class="variants__item">
        <span class="variants__label">Label After</span>
        <igx-switch labelPosition="after" [checked]="true">
            <span>Power</span>
        </igx-switch>
    </div>
</div>
```
```scss
:host {
    display: flex;
    min-block-size: 100%;
    box-sizing: border-box;
    place-content: center;
    place-items: center;
    padding: 16px;
}

.variants {
    --variant-gap: 60px;
    --label-gap: 30px;

    display: flex;
    inline-size: 100%;
    align-items: center;
    justify-content: center;
    gap: var(--variant-gap);

    .variants__item {
        display: flex;
        align-items: center;
        gap: var(--label-gap);
    }

    .variants__label {
        font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
        letter-spacing: 0.1px;
        color: var(--ig-gray-600);
    }
}
```

The switch can also be labelled by elements external to the switch. In this case, the user is given full control to position and style the label in accordance with their needs.

### Do/Don't

**When to use:** Use Switch for an immediate on/off setting that takes effect when the user changes it.

**When not to use:** Use [Checkbox](../checkbox.md) when users select one or more options for a later form submission, or [Button](./button.md) when the control represents an action or a toggleable command.

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
    </tbody>
  </table>
</div>

## Properties

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`checked`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent&member=checked) | `boolean` | `false` | Gets or sets whether the switch is on. |
| [`disabled`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent&member=disabled) | `boolean` | `false` | Gets or sets whether the switch is disabled. |
| [`invalid`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent&member=invalid) | `boolean` | `false` | Gets or sets whether the switch is invalid. |
| [`labelPosition`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent&member=labelPosition) | `ToggleLabelPosition` | `after` | Sets the position of the label relative to the control. |
| [`name`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent&member=name) | `string` | `-` | Sets the name used when the switch is submitted with a form. |
| [`required`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent&member=required) | `boolean` | `false` | Gets or sets whether the switch is required. |
| [`value`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent&member=value) | `string` | `-` | Sets the value used when the switch is submitted with a form. |

## Styling

The Angular Switch uses CSS parts and CSS variables to style its track, thumb, and label.

### Sass Theming

To get started with styling the switch, import the `index` file, where all the theme functions and the `tokens()` mixin are exported:

```scss
@use "igniteui-angular/theming" as *;
```

Then create a new theme that extends `switch-theme`. Providing `$thumb-off-color` and `$thumb-on-color` is enough to get a fully styled switch, because the theme generates the remaining colors from them:

```scss
$custom-switch-theme: switch-theme(
    $thumb-off-color: #7cadd5,
    $thumb-on-color: #ecaa53,
);
```

Finally, include the custom theme in your application:

```scss
:host {
  @include tokens($custom-switch-theme);
}
```

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxRadioComponent, IgxRadioGroupDirective, RadioGroupAlignment } from 'igniteui-angular/radio';
import {
  IgxExpansionPanelBodyComponent,
  IgxExpansionPanelComponent,
  IgxExpansionPanelHeaderComponent,
  IgxExpansionPanelIconDirective,
  IgxExpansionPanelTitleDirective
} from 'igniteui-angular/expansion-panel';

@Component({
  selector: 'app-switch-styling',
  styleUrls: ['./switch-styling.component.scss'],
  templateUrl: './switch-styling.component.html',
  imports: [
    IgxSwitchComponent,
    IgxRadioComponent,
    IgxRadioGroupDirective,
    IgxExpansionPanelComponent,
    IgxExpansionPanelHeaderComponent,
    IgxExpansionPanelTitleDirective,
    IgxExpansionPanelIconDirective,
    IgxExpansionPanelBodyComponent,
    FormsModule
  ]
})
export class SwitchStylingComponent {
  public alignment = RadioGroupAlignment.vertical;
  public method = 'app';
}
```
```html
<igx-expansion-panel class="security" #panel [collapsed]="false">
    <igx-expansion-panel-header [iconPosition]="'right'">
        <igx-expansion-panel-title>
            <span class="option">
                <span class="option__label">Two-factor authentication</span>
                <span class="option__hint">Extra sign-in verification</span>
            </span>
        </igx-expansion-panel-title>
        <igx-expansion-panel-icon>
            <!-- a click on the switch bubbles up to the panel header, so only the open state has to be mirrored back -->
            <igx-switch [checked]="!panel.collapsed"></igx-switch>
        </igx-expansion-panel-icon>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
        <igx-radio-group [alignment]="alignment">
            <igx-radio [(ngModel)]="method" value="app">Authenticator app</igx-radio>
            <igx-radio [(ngModel)]="method" value="key">Security key</igx-radio>
            <igx-radio [(ngModel)]="method" value="codes">Backup codes</igx-radio>
        </igx-radio-group>
    </igx-expansion-panel-body>
</igx-expansion-panel>
```
```scss
@use "igniteui-angular/theming" as *;

:host ::ng-deep igx-switch .igx-switch__thumb {
	min-width: 10px;
    transform: translateY(-1px);
}

:host ::ng-deep igx-switch .igx-switch__ripple {
    display: none;
}

:host {
    display: flex;
    place-content: center;
    place-items: center;
    min-block-size: 100%;
    padding: 1rem;
}

.security {
    display: block;
    inline-size: 100%;
    max-inline-size: 348px;
    background: var(--ig-surface-500);
    border: rem(1px) solid var(--ig-gray-300);
    border-radius: rem(16px);
    box-shadow: 0 rem(1px) rem(3px) rgb(0 0 0 / 12%);
    overflow: hidden;

    igx-expansion-panel-header {
        display: block !important;
    }

    ::ng-deep igx-expansion-panel-header > div {
        padding: rem(12px) rem(16px) !important;
        gap: rem(16px) !important;
    }

    igx-expansion-panel-title {
        flex: 1 1 auto;
        min-inline-size: 0;
    }

    igx-expansion-panel-icon {
        flex: 0 0 auto;
        transform: none;
        margin-inline-start: 0;
    }

    igx-expansion-panel-body {
        display: block;
        padding-inline-start: rem(5px);
        border-block-start: rem(1px) solid var(--ig-gray-300);
    }

    igx-switch {
        inline-size: rem(43px);
        block-size: rem(24px);
        transform: translateX(rem(2px));
    }

    igx-radio-group {
        display: flex;
        flex-direction: column;
        gap: rem(8px);
        margin-inline-start: rem(10px);
    }
}

.option {
    display: flex;
    flex-direction: column;
    gap: rem(2px);
    text-align: start;
    white-space: normal;
    min-inline-size: 0;

    .option__label {
        font: 600 #{rem(16px)} / #{rem(24px)} "Aktiv Grotesk", sans-serif;
        letter-spacing: #{rem(0.15px)};
        color: var(--ig-gray-700);
    }

    .option__hint {
        font: 500 #{rem(14px)} / #{rem(24px)} "Aktiv Grotesk", sans-serif;
        letter-spacing: #{rem(0.1px)};
        color: var(--ig-gray-600);
    }
}

igx-radio {
    font: 600 #{rem(12px)} / #{rem(16px)} "Aktiv Grotesk", sans-serif;
    letter-spacing: #{rem(0.15px)};
    color: var(--ig-primary-900);

    --fill-color: var(--ig-primary-500);
    --fill-color-hover: var(--ig-primary-500);
    --fill-hover-border-color: var(--ig-primary-500);
}

:host ::ng-deep igx-radio.igx-radio--checked .igx-radio__composite::after {
    background: transparent;
    border-color: transparent;
}

:host ::ng-deep igx-radio.igx-radio--checked .igx-radio__composite::before {
    transform: none !important;
}

:host ::ng-deep igx-radio .igx-radio__composite::before,
:host ::ng-deep igx-radio .igx-radio__composite::after {
    width: 16px;
    height: 16px;
}

:host ::ng-deep igx-radio .igx-radio__label {
    transform: translateY(-2px);
}

:host ::ng-deep igx-radio .igx-radio__composite,
:host ::ng-deep igx-radio .igx-radio__composite::before,
:host ::ng-deep igx-radio .igx-radio__composite::after {
    animation: none !important;
    transition: none !important;
}

:host ::ng-deep igx-radio .igx-radio__ripple {
    opacity: 0;
    pointer-events: none;
}
```

### Styling with Tailwind

You can style the switch using the Ignite UI Tailwind utility classes. Make sure to [set up Tailwind](/themes/misc/tailwind-classes) first, then import the utility file in your global stylesheet:

```scss
@import "tailwindcss";
@use 'igniteui-theming/tailwind/utilities/material.css';
```

Use `light-switch` or `dark-switch` for the corresponding theme and override the generated CSS variables with arbitrary properties. You can find the full list of properties in the `IgxSwitch Theme`:

```html
<igx-switch
  class="!light-switch ![--thumb-on-color:#FF4E00]"
  [checked]="true">
  Label
</igx-switch>
```

The exclamation mark (`!`) makes the utility class important so it takes precedence over the component theme.

```typescript
import { Component, inject } from '@angular/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';

const darkModeIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path style="fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-5.4-5.4c0-1.81.89-3.41 2.26-4.4A9.4 9.4 0 0 0 12 3z"/></svg>';

@Component({
    selector: 'app-switch-tailwind-styling',
    styleUrls: ['./switch-tailwind-styling.component.scss'],
    templateUrl: './switch-tailwind-styling.component.html',
    imports: [IgxSwitchComponent, IgxIconComponent]
})
export class SwitchTailwindStylingComponent {
    public isDarkMode = true;

    constructor() {
        inject(IgxIconService).addSvgIconFromText('dark_mode', darkModeIcon, 'material');
    }
}
```
```html
<div [class]="(isDarkMode ? 'dark ' : '') + 'w-full max-w-[384px] overflow-hidden rounded-lg shadow-[var(--ig-elevation-2)] bg-white dark:bg-[#1A314A]'">
    <div class="flex items-center justify-between gap-4 border-b border-gray-700 bg-gray-900 px-6 py-4 !bg-[#111827] !border-[#374151]">
        <span class="font-sans text-[14px] font-medium leading-6 tracking-[0.1px] text-[#E6F2FF]">Dashboard</span>
        <igx-switch labelPosition="before" [checked]="isDarkMode" (change)="isDarkMode = $event.checked"
            class="![--track-on-color:var(--color-blue-500)] ![--track-off-color:var(--color-slate-600)] ![--thumb-on-color:var(--color-white)] ![--thumb-off-color:var(--color-slate-300)] ![--track-on-hover-color:var(--color-blue-600)]">
            <span class="flex items-center gap-2 font-sans text-[14px] font-medium leading-6 tracking-[0.1px] text-[#E6F2FF]">
                <igx-icon family="material" name="dark_mode" class="![--size:20px] !text-[var(--ig-warn-300)]"></igx-icon>
                Dark mode
            </span>
        </igx-switch>
    </div>
    <div [class]="isDarkMode ? 'px-6 py-4 bg-[#1A314A]' : 'px-6 py-4 bg-white'">
        <h6 [class]="isDarkMode ? 'm-0 !font-sans !text-[16px] !leading-6 font-semibold text-gray-50' : 'm-0 !font-sans !text-[16px] !leading-6 font-semibold text-gray-800'">Revenue overview</h6>
        <p [class]="isDarkMode ? '!m-0 !mt-2 !font-sans !text-[14px] !leading-5 font-medium tracking-[0.25px] text-gray-400' : '!m-0 !mt-2 !font-sans !text-[14px] !leading-5 font-medium tracking-[0.25px] text-gray-700'">
            $84,290 this month, up 12% from July.<br />
            Your top-performing channel is Direct, driving 41% of total revenue.
        </p>
    </div>
</div>
```
```scss
:host ::ng-deep igx-switch .igx-switch__thumb {
	min-width: 10px;
}

:host ::ng-deep igx-switch .igx-switch__ripple {
	display: none;
}

:host {
	display: flex;
	place-content: center;
	place-items: center;
	padding: 40px;
}
```

## Accessibility

The Angular Switch exposes a binary state and supports an accessible name through its label or ARIA attributes.

### Keyboard Interaction

| Key | Action |
| --- | --- |
| Tab / Shift+Tab | Moves focus to or from the switch. |
| Space | Toggles the focused switch. |

### Screen Readers / ARIA

The Switch renders an interactive control with a binary checked state. Provide visible label content or an accessible name with `aria-label` or `aria-labelledby`, and keep the label specific to the setting controlled by the switch.

### Accessibility Compliance

Infragistics documents Ignite UI for Angular accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| --- | --- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The switch can be reached with the keyboard and toggled with Space. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The switch exposes an accessible name and its binary checked state through the rendered control. |

## Troubleshooting

Use this section to check boundaries and common decisions before treating Switch as a form field, interactive command, or setting control.

### Why does the Switch not submit with my form?

The Switch is form-associated but requires a `name` and `value` to contribute a value when the form is submitted. Set both properties and use the form integration supported by your target platform.

### Why is the Switch not announced correctly by a screen reader?

The Switch needs an accessible name. Add visible label content or reference an external label with `aria-labelledby`; use `aria-label` when visible text is not available.

### Known Limitations

The Angular Switch has the following platform-independent limitations:

- A Switch represents one binary setting; use a different control when users need multiple choices or a deferred form selection.
- A Switch does not provide an accessible name automatically when it has no label or ARIA naming attribute.

## API References

See the complete Angular Switch API reference:

[`IgxSwitch`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent)

`IgxSwitchComponent Theme`

## Dependencies

The Angular Switch requires a theme stylesheet to apply its visual styling. See the framework-specific setup in [**Getting Started**](../general/getting-started.md).

## Additional Resources

Use the following Angular resources for API details, examples, and project support:

- [Lists - Design System Pattern](https://www.infragistics.com/products/indigo-design/help/patterns/lists)
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

## Related Components

- [Checkbox](../checkbox.md) - Use Checkbox when users select one or more options, especially as part of a form.

- [Button](./button.md) - Use Button when the control represents a command or action rather than a setting.

## FAQ

  **Q: How do I set the Switch to its initial on or off state?**

    Set the [`checked`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent&member=checked) property to `true` for the on state or `false` for the off state. The property uses a Boolean value in React, Web Components, and Blazor syntax.
  
  **Q: How do I position the Switch label?**

    Place the label text inside the Switch and set the [`labelPosition`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent&member=labelPosition) property to `before` or `after`. The default label position is `after`.
  
  **Q: How do I submit a Switch value with a form?**

    Set both the [`name`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent&member=name) and [`value`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent&member=value) properties. In Blazor, use the `EditForm` component instead of a standard HTML `form`.
  
  **Q: How do I make a Switch required or invalid?**

    Set the [`required`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent&member=required) property when the setting must be selected, and set [`invalid`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent&member=invalid) when the control is in an invalid state. Use [`disabled`](mcp:get_api_reference?platform=angular&component=IgxSwitchComponent&member=disabled) when users must not be able to change the setting.
  


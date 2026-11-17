---
title: "Angular Radio Group Component"
description: "The Angular Radio and Radio Group let users select exactly one option from a set of mutually exclusive options, arranged vertically or horizontally."
keywords: "Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Radio Button components, Angular Radio Button controls, Angular Radio Group component, Angular Radio Group control"
license: MIT
last_updated: "2026-10-09"
relatedComponents: [Checkbox, Switch, Select]
mentionedTypes: ["Radio", "RadioGroup"]
llms:
  description: "The Angular Radio and Radio Group are components that let users select exactly one option from a set of mutually exclusive options."
_tocName: Radio Group
---
# Radio Group

The Angular Radio and Radio Group are components that let users select exactly one option from a set of mutually exclusive options. Each radio button represents one option, and the Radio Group arranges the radio buttons in a vertical or horizontal layout.

## Live Demo

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';

@Component({
    selector: 'app-radio-overview',
    templateUrl: './radio-overview.component.html',
    styleUrls: ['./radio-overview.component.scss'],
    imports: [IgxButtonDirective, IgxRadioComponent, IgxRadioGroupDirective]
})
export class RadioOverviewComponent { }
```
```html
<form class="feedback-form" (submit)="$event.preventDefault()">
    <span id="feedback-title" class="feedback-title">Does our app meet your expectations?</span>
    <igx-radio-group name="expectations" alignment="vertical" value="exceeds" aria-labelledby="feedback-title">
        <igx-radio value="exceeds">Exceeds expectations</igx-radio>
        <igx-radio value="meets">Meets expectations</igx-radio>
        <igx-radio value="below">Below expectations</igx-radio>
    </igx-radio-group>
    <button igxButton="contained" type="submit" class="feedback-send">Send</button>
</form>
```
```scss
:host {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.feedback-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-sizing: border-box;
    width: 22.5rem;
    padding: 1rem;

    /* The card of the design, in the surface color of the theme. */
    border-radius: 0.5rem;
    background: var(--ig-surface-base);
}

.feedback-title {
    color: var(--ig-gray-900);
    font-family: var(--ig-subtitle-1-font-family, var(--ig-font-family));
    font-size: var(--ig-subtitle-1-font-size);
    font-weight: var(--ig-subtitle-1-font-weight);
    line-height: var(--ig-subtitle-1-line-height);
    letter-spacing: var(--ig-subtitle-1-letter-spacing);
}

.feedback-send {
    align-self: center;
    width: 11.25rem;
    margin-top: 1rem;
}
```

## Anatomy

The Angular Radio Group contains radio buttons, and each radio button is made of a radio control and a label.

**Radio Group anatomy:** The Radio Group contains radio buttons, each made of a radio control and a label.

<style>{`
  .radio-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .radio-anatomy .igd-anatomy__image {
    max-width: 237.5px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Radio Button Label:</strong> indicates the content you want to select or unselect<br />
<strong>2. Radio Button:</strong> indicates if the state is selected. The default state of the input is unselected<br />
<strong>3. Button Group:</strong> a container that groups related options and allows only one selection at a time</span>

The following diagram shows the element structure of the Angular Radio Group. Each radio button pairs its radio control with label content, which can be placed before or after the control.

```text
igx-radio-group                  — groups the radio buttons
└── igx-radio                    — one per option
    ├── input.igx-radio__input   — the native radio input
    ├── .igx-radio__composite    — the radio control
    └── .igx-radio__label        — the projected label content
```

## Getting Started

To use the Angular Radio and Radio Group, follow the [Ignite UI for Angular Getting Started](../general/getting-started.md) topic for the basic project setup, then import or register the components for your target platform.

Import the [`IgxRadio`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent) component and the [`IgxRadioGroupDirective`](mcp:get_api_reference?platform=angular&component=IgxRadioGroupDirective) directive:

```ts
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';
```

Add both to the `imports` collection of your component, or add the `IGX_RADIO_GROUP_DIRECTIVES` collection, which contains them, and then use the `igx-radio-group` and `igx-radio` elements in your template.

After registration, place the Angular Radio components inside a Radio Group and give the group a `name`, so that users can select only one of the options. Set `value` on each radio button to identify the selected option.

```html
<igx-radio-group name="fruit" alignment="vertical" value="apple">
  <igx-radio value="apple">Apple</igx-radio>
  <igx-radio value="banana">Banana</igx-radio>
  <igx-radio value="mango">Mango</igx-radio>
</igx-radio-group>
```

### Prerequisites and Version Compatibility

The Angular Radio and Radio Group ship in the following package. The samples in this topic are built with the version listed next to it.

| Package | Version used in the samples |
| --- | --- |
| `igniteui-angular` | 22.2.0 |

## Usage

### Layout

The Angular Radio places its label after the radio control by default. Set the [`labelPosition`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent&member=labelPosition) property to `before` to place the label before the control. In a vertical Radio Group, radio buttons with the label before the control align to the end of the group.

```html
<igx-radio-group name="color" alignment="vertical" value="yellow">
  <igx-radio value="yellow" labelPosition="before">Yellow</igx-radio>
  <igx-radio value="orange" labelPosition="before">Orange</igx-radio>
</igx-radio-group>
```

A radio button can also be labelled by an element outside of it. Reference the element with `aria-labelledby` when you need full control over where the label sits and how it looks.

```html
<span id="radio-label">Express delivery</span>
<igx-radio aria-labelledby="radio-label" value="express"></igx-radio>
```

```typescript
import { Component } from '@angular/core';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';

@Component({
    selector: 'app-radio-layout',
    templateUrl: './radio-layout.component.html',
    styleUrls: ['./radio-layout.component.scss'],
    imports: [IgxRadioComponent, IgxRadioGroupDirective]
})
export class RadioLayoutComponent { }
```
```html
<div class="radio-layout-item">
    <span>Label After</span>
    <igx-radio-group name="color-after" alignment="vertical" value="yellow">
        <igx-radio value="yellow">Yellow</igx-radio>
        <igx-radio value="orange">Orange</igx-radio>
        <igx-radio value="purple">Purple</igx-radio>
    </igx-radio-group>
</div>
<div class="radio-layout-item">
    <igx-radio-group name="color-before" alignment="vertical" value="yellow">
        <igx-radio value="yellow" labelPosition="before">Yellow</igx-radio>
        <igx-radio value="orange" labelPosition="before">Orange</igx-radio>
        <igx-radio value="purple" labelPosition="before">Purple</igx-radio>
    </igx-radio-group>
    <span>Label Before</span>
</div>
```
```scss
/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

:host {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem 3.75rem;
    height: 100%;
}

.radio-layout-item {
    display: flex;
    align-items: center;
    gap: 1.875rem;
}

.radio-layout-item span {
    color: var(--ig-gray-600);
    font-family: aktiv-grotesk, sans-serif;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.3px;
}
```

### Orientation

The Angular Radio Group stacks its radio buttons in a column or places them in a row. Set the [`alignment`](mcp:get_api_reference?platform=angular&component=IgxRadioGroupDirective&member=alignment) property to `vertical` or `horizontal`. The default alignment is `horizontal`.

```html
<igx-radio-group name="chart" alignment="horizontal" value="line">
  <igx-radio value="line">Line</igx-radio>
  <igx-radio value="bar">Bar</igx-radio>
  <igx-radio value="pie">Pie</igx-radio>
</igx-radio-group>
```

```typescript
import { Component } from '@angular/core';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';

@Component({
    selector: 'app-radio-orientation',
    templateUrl: './radio-orientation.component.html',
    styleUrls: ['./radio-orientation.component.scss'],
    imports: [IgxRadioComponent, IgxRadioGroupDirective]
})
export class RadioOrientationComponent { }
```
```html
<div class="radio-orientation-item billing-cycle">
    <span id="billing-title" class="radio-orientation-title">Billing cycle</span>
    <igx-radio-group name="billing" alignment="vertical" value="monthly" aria-labelledby="billing-title">
        <igx-radio value="monthly">Monthly</igx-radio>
        <igx-radio value="annual">Annual</igx-radio>
        <igx-radio value="two-year">Two-year</igx-radio>
    </igx-radio-group>
</div>
<div class="radio-orientation-item chart-type">
    <span id="chart-title" class="radio-orientation-title">Chart type</span>
    <igx-radio-group name="chart" alignment="horizontal" value="line" aria-labelledby="chart-title">
        <igx-radio value="line">Line</igx-radio>
        <igx-radio value="bar">Bar</igx-radio>
        <igx-radio value="pie">Pie</igx-radio>
    </igx-radio-group>
</div>
```
```scss
:host {
    display: flex;
    flex-wrap: wrap;
    /* Centers the row of cards vertically, while the cards stay top-aligned to each other. */
    align-content: center;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem 3.75rem;
    height: 100%;
}

.radio-orientation-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-self: flex-start;
    box-sizing: border-box;
    padding: 1rem;

    /* The card of the design, in the surface color of the theme. */
    border-radius: 0.5rem;
    background: var(--ig-surface-base);
}

.billing-cycle {
    width: 13.9375rem;
}

.chart-type {
    width: 17.1875rem;
}

.radio-orientation-title {
    color: var(--ig-gray-900);
    font-family: var(--ig-subtitle-1-font-family, var(--ig-font-family));
    font-size: var(--ig-subtitle-1-font-size);
    font-weight: var(--ig-subtitle-1-font-weight);
    line-height: var(--ig-subtitle-1-line-height);
    letter-spacing: var(--ig-subtitle-1-letter-spacing);
}
```

### Interaction States

The Angular Radio shows a hover state when the pointer is over it and a focus ring when it receives keyboard focus. Set the [`invalid`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent&member=invalid) property to show the invalid state, which draws the radio control in the error color of the theme.

```html
<igx-radio value="daily" [invalid]="true">Daily Updates</igx-radio>
```

The following sample shows the hover, focused, and focused and hovered states for checked, unchecked, and invalid radio buttons.

```typescript
import { Component, ElementRef, afterNextRender, inject } from '@angular/core';
import { IgxRadioComponent } from 'igniteui-angular/radio';

@Component({
    selector: 'app-radio-interaction-state',
    templateUrl: './radio-interaction-state.component.html',
    styleUrls: ['./radio-interaction-state.component.scss'],
    imports: [IgxRadioComponent]
})
export class RadioInteractionStateComponent {
    constructor() {
        const element: HTMLElement = inject(ElementRef).nativeElement;

        // A keyup is what turns on a radio's keyboard focus ring, so dispatching one
        // shows the focused state without moving focus to the radio.
        afterNextRender(() => {
            element.querySelectorAll('.focused, .focused-hover').forEach((radio) => {
                radio.dispatchEvent(new KeyboardEvent('keyup'));
            });
        });
    }
}
```
```html
<!-- The radios only show their states, so they take no pointer or keyboard input. -->
<div class="radio-states-grid" inert>
    <span></span>
    <span class="column-caption">Hover</span>
    <span class="column-caption">Focused</span>
    <span class="column-caption">Focused &amp; Hover</span>
    <div class="radio-states-group">
        <span class="row-caption">Enabled / On</span>
        <igx-radio class="hover" [checked]="true">Daily Updates</igx-radio>
        <igx-radio class="focused" [checked]="true">Weekly Updates</igx-radio>
        <igx-radio class="focused-hover" [checked]="true">Monthly Updates</igx-radio>
        <span class="row-caption">Enabled / Off</span>
        <igx-radio class="hover off">Daily Updates</igx-radio>
        <igx-radio class="focused off">Weekly Updates</igx-radio>
        <igx-radio class="focused-hover off">Monthly Updates</igx-radio>
    </div>
    <div class="radio-states-group">
        <span class="row-caption">Invalid / On</span>
        <igx-radio class="hover" [checked]="true" [invalid]="true">Daily Updates</igx-radio>
        <igx-radio class="focused" [checked]="true" [invalid]="true">Weekly Updates</igx-radio>
        <igx-radio class="focused-hover" [checked]="true" [invalid]="true">Monthly Updates</igx-radio>
        <span class="row-caption">Invalid / Off</span>
        <igx-radio class="hover off" [invalid]="true">Daily Updates</igx-radio>
        <igx-radio class="focused off" [invalid]="true">Weekly Updates</igx-radio>
        <igx-radio class="focused-hover off" [invalid]="true">Monthly Updates</igx-radio>
    </div>
</div>
```
```scss
/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

:host {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.radio-states-grid {
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    gap: 1.875rem 3.25rem;
}

/* The enabled and the invalid rows each share the columns of the whole grid. */
.radio-states-group {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
    align-items: center;
    row-gap: 1.875rem;
}

.radio-states-group + .radio-states-group {
    margin-top: 1.25rem;
}

.radio-states-grid span {
    color: var(--ig-gray-600);
    font-family: aktiv-grotesk, sans-serif;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.3px;
}

.column-caption {
    text-align: center;
}

/* The row captions sit closer to the radios than the columns sit to each other. */
.row-caption {
    margin-inline-end: -1.3125rem;
}

/* Hover can't be turned on from code, so the hover columns take the theme's hover
   colors, and the Hover column also shows the ripple of the Material theme. */
.hover,
.focused-hover {
    --fill-color: var(--fill-color-hover);
    --label-color: var(--label-color-hover);
    --error-color: var(--error-color-hover);
}

.hover ::ng-deep .igx-radio__ripple {
    background: var(--empty-color);
    opacity: 0.06;
}

.hover.igx-radio--checked ::ng-deep .igx-radio__ripple {
    background: var(--fill-color);
}

.hover.igx-radio--invalid ::ng-deep .igx-radio__ripple {
    background: var(--error-color);
}

/* Fluent also draws a dot in an off radio on hover, which no color can show. The docs
   set data-ig-theme on the page, so the hover columns draw the dot in the Fluent theme. */
:host-context([data-ig-theme='fluent']) {
    .hover.off,
    .focused-hover.off {
        ::ng-deep .igx-radio__composite::before {
            background: light-dark(var(--ig-gray-700), var(--ig-gray-400));
            transform: scale(0.5);
        }
    }

    .hover.off.igx-radio--invalid,
    .focused-hover.off.igx-radio--invalid {
        ::ng-deep .igx-radio__composite::before {
            background: var(--ig-error-500);
        }
    }
}

/* Bootstrap and Indigo darken the ring of an off radio on hover, and Bootstrap darkens
   its focus color when the radio is also focused. */
:host-context([data-ig-theme='bootstrap']) {
    .hover.off:not(.igx-radio--invalid),
    .focused-hover.off:not(.igx-radio--invalid) {
        ::ng-deep .igx-radio__composite::after {
            border-color: var(--ig-gray-500);
        }
    }

    .focused-hover.off:not(.igx-radio--invalid) ::ng-deep .igx-radio__composite::after {
        border-color: hsl(from var(--ig-primary-200) h calc(s * 1.12) calc(l * 0.82));
    }
}

:host-context([data-ig-theme='indigo']) {
    .hover.off:not(.igx-radio--invalid),
    .focused-hover.off:not(.igx-radio--invalid) {
        ::ng-deep .igx-radio__composite::after {
            border-color: light-dark(var(--ig-gray-600), hsl(from var(--ig-primary-500-contrast) h s l / 0.8));
        }
    }
}
```

### Disabled States

Set the [`disabled`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent&member=disabled) property to disable a Angular Radio. A disabled radio button can't be selected, and keyboard navigation skips it.

```html
<igx-radio-group name="age" alignment="vertical" value="18-27">
  <igx-radio value="18-27">18-27</igx-radio>
  <igx-radio value="28-39">28-39</igx-radio>
  <igx-radio value="40-55" [disabled]="true">40-55</igx-radio>
</igx-radio-group>
```

```typescript
import { Component } from '@angular/core';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';

@Component({
    selector: 'app-radio-disabled',
    templateUrl: './radio-disabled.component.html',
    styleUrls: ['./radio-disabled.component.scss'],
    imports: [IgxRadioComponent, IgxRadioGroupDirective]
})
export class RadioDisabledComponent { }
```
```html
<div class="age-question">
    <span id="age-title" class="age-title">What is your age?</span>
    <igx-radio-group name="age" alignment="vertical" value="18-27" aria-labelledby="age-title">
        <igx-radio value="18-27">18-27</igx-radio>
        <igx-radio value="28-39">28-39</igx-radio>
        <igx-radio value="40-55" [disabled]="true">40-55</igx-radio>
    </igx-radio-group>
</div>
```
```scss
:host {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.age-question {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    /* The card of the design, in the surface color of the theme. */
    box-sizing: border-box;
    width: 13.9375rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background: var(--ig-surface-base);
}

.age-title {
    color: var(--ig-gray-900);
    font-family: var(--ig-subtitle-1-font-family, var(--ig-font-family));
    font-size: var(--ig-subtitle-1-font-size);
    font-weight: var(--ig-subtitle-1-font-weight);
    line-height: var(--ig-subtitle-1-line-height);
    letter-spacing: var(--ig-subtitle-1-letter-spacing);
}
```

### On/Off States

A Angular Radio is either on (checked) or off. Set the [`checked`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent&member=checked) property on a radio button to turn it on, or set the [`value`](mcp:get_api_reference?platform=angular&component=IgxRadioGroupDirective&member=value) of the Radio Group to turn on the radio button with the matching value. Turning a radio button on turns off the other radio buttons in the group.

```html
<igx-radio-group name="age" alignment="vertical" value="18-27">
  <igx-radio value="18-27">18-27</igx-radio>
  <igx-radio value="28-39">28-39</igx-radio>
  <igx-radio value="40-55">40-55</igx-radio>
</igx-radio-group>
```

```typescript
import { Component } from '@angular/core';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';

@Component({
    selector: 'app-radio-on-off-state',
    templateUrl: './radio-on-off-state.component.html',
    styleUrls: ['./radio-on-off-state.component.scss'],
    imports: [IgxRadioComponent, IgxRadioGroupDirective]
})
export class RadioOnOffStateComponent { }
```
```html
<div class="age-question">
    <span id="age-title" class="age-title">What is your age?</span>
    <igx-radio-group name="age" alignment="vertical" value="18-27" aria-labelledby="age-title">
        <igx-radio value="18-27">18-27</igx-radio>
        <igx-radio value="28-39">28-39</igx-radio>
        <igx-radio value="40-55">40-55</igx-radio>
    </igx-radio-group>
</div>
```
```scss
:host {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.age-question {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    /* The card of the design, in the surface color of the theme. */
    box-sizing: border-box;
    width: 13.9375rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background: var(--ig-surface-base);
}

.age-title {
    color: var(--ig-gray-900);
    font-family: var(--ig-subtitle-1-font-family, var(--ig-font-family));
    font-size: var(--ig-subtitle-1-font-size);
    font-weight: var(--ig-subtitle-1-font-weight);
    line-height: var(--ig-subtitle-1-line-height);
    letter-spacing: var(--ig-subtitle-1-letter-spacing);
}
```

### Forms

The Angular Radio submits the `value` of the selected radio button under the group's `name`. Set the [`required`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent&member=required) property on a radio button of the group to require a selection before the form is submitted.

The Radio Group works with template-driven and reactive forms. Bind the selected value with `ngModel` or a form control on `igx-radio-group`:

```html
<form [formGroup]="fruitsForm">
  <igx-radio-group name="fruit" alignment="vertical" formControlName="favoriteFruit">
    <igx-radio value="apple">Apple</igx-radio>
    <igx-radio value="banana">Banana</igx-radio>
    <igx-radio value="orange">Orange</igx-radio>
  </igx-radio-group>
</form>
```

### Do/Don't

When extending a Radio Group with additional items, make sure that they are aligned consistently and form a single column. Avoid layout in multiple columns, as well as situations with more than one Radio element with on state at a time.

<div class="igd-sample-container" data-spacing="lg">
  <div class="igd-sample-frame">
    
  </div>
</div>

## Properties

The following properties cover the Angular Radio and Radio Group options documented on this page. See the API references for the complete generated list.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`checked`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent&member=checked) | `boolean` | `false` | Gets or sets whether the radio button is on. |
| [`disabled`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent&member=disabled) | `boolean` | `false` | Gets or sets whether the radio button is disabled. |
| [`invalid`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent&member=invalid) | `boolean` | `false` | Gets or sets whether the radio button is in the invalid state. |
| [`labelPosition`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent&member=labelPosition) | `LabelPosition` | `after` | Sets whether the label is placed before or after the radio control. |
| [`required`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent&member=required) | `boolean` | `false` | Gets or sets whether a selection is required. |
| [`value`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent&member=value) | `any` | — | Gets or sets the value submitted with the form when the radio button is on. |
| [`alignment`](mcp:get_api_reference?platform=angular&component=IgxRadioGroupDirective&member=alignment) (Radio Group) | `RadioGroupAlignment` | `horizontal` | Sets whether the radio buttons are stacked in a column or placed in a row. |
| [`value`](mcp:get_api_reference?platform=angular&component=IgxRadioGroupDirective&member=value) (Radio Group) | `any` | — | Gets or sets the value of the radio button that is on. |
| [`name`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent&member=name) | `string` | — | Gets or sets the name that groups radio buttons together. |
| [`name`](mcp:get_api_reference?platform=angular&component=IgxRadioGroupDirective&member=name) (Radio Group) | `string` | — | Gets or sets the name applied to all radio buttons in the group. |

## Methods

The Angular Radio exposes the following methods.

| Name | Description |
| --- | --- |
| [`select()`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent&member=select) | Turns the radio button on and emits the `change` event. It does nothing when the radio button is already on. |
| [`deselect()`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent&member=deselect) | Turns the radio button off without emitting the `change` event. |

## Events

The Angular Radio emits an event when the user turns a radio button on.

| Name | Description |
| --- | --- |
| [`change`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent&member=change) (Radio and Radio Group) | Emitted when the checked state of a radio button changes. The event arguments carry the `checked` state and the `value` of the radio button. |

## Styling

The Angular Radio is styled through the Ignite UI for Angular theme and the CSS variables it generates. The following sample draws the radio buttons of a shipping form with a custom palette and typeface.

```typescript
import { Component } from '@angular/core';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';

interface ShippingMethod {
    value: string;
    name: string;
    detail: string;
    disabled?: boolean;
}

@Component({
    selector: 'app-radio-styling',
    templateUrl: './radio-styling.component.html',
    styleUrls: ['./radio-styling.component.scss'],
    imports: [IgxRadioComponent, IgxRadioGroupDirective]
})
export class RadioStylingComponent {
    public methods: ShippingMethod[] = [
        { value: 'standard', name: 'Standard', detail: '(2-4 business days)' },
        { value: 'express', name: 'Express', detail: '(next day by 6 pm)' },
        { value: 'pickup', name: 'Pickup point', detail: '(400 + locations)' },
        { value: 'same-day', name: 'Same-day', detail: '(not available)', disabled: true }
    ];
}
```
```html
<div class="shipping-card">
    <div class="shipping-header">
        <span id="shipping-title" class="shipping-title">Shipping method</span>
    </div>
    <igx-radio-group class="shipping-methods" name="shipping" alignment="vertical" value="standard" aria-labelledby="shipping-title">
        @for (method of methods; track method.value) {
            <igx-radio class="shipping-method" [value]="method.value" [disabled]="!!method.disabled">
                {{ method.name }} <span class="shipping-detail">{{ method.detail }}</span>
            </igx-radio>
        }
    </igx-radio-group>
</div>
```
```scss
/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

:host {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.shipping-card {
    /* The design's own palette. It is set here instead of coming from the theme,
       so the sample keeps its look in every theme. */
    --shipping-surface: #fff;
    --shipping-primary: #0176ff;
    --shipping-title: #00142b;
    --shipping-ink: #002b5c;
    --shipping-gray-100: #f3f6fa;
    --shipping-gray-300: #d2dbe8;
    --shipping-gray-400: #a9b8cc;
    --shipping-gray-600: #556c86;

    /* The colors of the hover and focus effects the theme draws around the radio. */
    --ig-radio-fill-color: var(--shipping-primary);
    --ig-radio-empty-color: var(--shipping-gray-400);

    box-sizing: border-box;
    width: 21.75rem;
    border: 1px solid var(--shipping-gray-300);
    border-radius: 1rem;
    background: var(--shipping-surface);
    font-family: aktiv-grotesk, sans-serif;
}

.shipping-header {
    box-sizing: border-box;
    height: 3.75rem;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--shipping-gray-300);
}

.shipping-title {
    color: var(--shipping-title);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0.15px;
}

.shipping-methods {
    row-gap: 0;
    padding: 1rem 1.5rem;
}

.shipping-method ::ng-deep .igx-radio__label {
    color: var(--shipping-ink);
    font-family: aktiv-grotesk, sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1rem;
    letter-spacing: 0.15px;
}

.shipping-detail {
    color: var(--shipping-gray-600);
}

.shipping-method.igx-radio--disabled ::ng-deep .igx-radio__label,
.shipping-method.igx-radio--disabled .shipping-detail {
    color: var(--shipping-gray-400);
}

/* The design draws the radio as a 2px ring with a 10px dot in a 40px slot. Each
   theme draws the radio its own way, so the whole radio is drawn here. */
.shipping-method {
    --label-margin: 0.125rem;
}

.shipping-method ::ng-deep .igx-radio__composite {
    width: 2.5rem;
    min-width: 2.5rem;
    height: 2.5rem;
}

.shipping-method ::ng-deep .igx-radio__composite::before,
.shipping-method ::ng-deep .igx-radio__composite::after {
    top: 0.625rem;
    inset-inline-start: 0.625rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
}

/* The ring */
.shipping-method ::ng-deep .igx-radio__composite::after {
    border: 0.125rem solid var(--shipping-gray-400);
    background: var(--shipping-surface);
}

.shipping-method.igx-radio--checked ::ng-deep .igx-radio__composite::after {
    border-color: var(--shipping-primary);
}

.shipping-method.igx-radio--disabled ::ng-deep .igx-radio__composite::after {
    border-color: var(--shipping-gray-300);
    background: var(--shipping-gray-100);
}

/* The dot */
.shipping-method ::ng-deep .igx-radio__composite::before {
    transform: scale(0);
    border: none;
    background: var(--shipping-primary);
}

.shipping-method.igx-radio--checked ::ng-deep .igx-radio__composite::before {
    transform: scale(0.5);
}
```

### Sass Theming

Create a theme with the `radio-theme` function and include it with the `tokens` mixin. Setting `$empty-color` and `$fill-color` is enough for a fully styled radio button, because the theme derives the remaining colors from them.

```scss
@use "igniteui-angular/theming" as *;

$custom-radio-theme: radio-theme(
  $empty-color: #345779,
  $fill-color: #2dabe8,
);

:host {
  @include tokens($custom-radio-theme);
}
```

When you set a primary parameter, the theme derives its dependent parameters:

| Primary parameter | Dependent parameters | What it changes |
| --- | --- | --- |
| `$empty-color` | `$hover-color`, `$focus-outline-color` (Indigo) | The border of an unchecked radio button. |
| `$fill-color` | `$fill-color-hover`, `$fill-hover-border-color`, `$focus-border-color` (Bootstrap), `$focus-outline-color` (Bootstrap), `$focus-outline-color-filled` (Indigo) | The border and dot of a checked radio button. |
| `$label-color` | `$label-color-hover` | The label text. |
| `$error-color` | `$error-color-hover`, `$focus-outline-color-error` | The label, border, and dot in the invalid state. |

### CSS Variables

Set the following CSS variables on a radio button, or on one of its ancestors, to change its colors without a Sass theme:

| Variable | What it changes |
| --- | --- |
| `--ig-radio-label-color` | The label text. |
| `--ig-radio-empty-color` | The border of an unchecked radio button. |
| `--ig-radio-empty-fill-color` | The fill of an unchecked radio button. |
| `--ig-radio-fill-color` | The border and dot of a checked radio button. |
| `--ig-radio-hover-color` | The border and dot on hover. |
| `--ig-radio-fill-color-hover` | The dot of a checked radio button on hover. |
| `--ig-radio-error-color` | The label, border, and dot in the invalid state. |
| `--ig-radio-disabled-color` | The border and dot of a disabled radio button. |
| `--ig-radio-disabled-label-color` | The label of a disabled radio button. |
| `--ig-radio-focus-outline-color` | The focus outline. |

### Styling with Tailwind

You can style the Angular Radio with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

Use the `light-radio` or `dark-radio` class for the corresponding theme and override its CSS variables with arbitrary properties:

```html
<igx-radio class="!light-radio ![--empty-color:#576E60] ![--fill-color:#7B9E89]" value="tokyo">Tokyo</igx-radio>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the default theme styles of the Radio.

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';

@Component({
    selector: 'app-radio-tailwind-styling',
    templateUrl: './radio-tailwind-styling.component.html',
    styleUrls: ['./radio-tailwind-styling.component.scss'],
    imports: [IgxButtonDirective, IgxRadioComponent, IgxRadioGroupDirective]
})
export class RadioTailwindStylingComponent {
    public format = 'csv';

    public formats = [
        { value: 'pdf', label: 'PDF Document' },
        { value: 'xls', label: 'XLS Editable spreadsheet' },
        { value: 'csv', label: 'CSV Raw data, no styling' }
    ];
}
```
```html
<div class="box-border flex w-[280px] flex-col overflow-hidden rounded-2xl border border-[var(--color-export-divider)] bg-white font-[aktiv-grotesk,sans-serif] [--ig-font-family:aktiv-grotesk,sans-serif] [--ig-radio-empty-color:var(--color-export-empty)] [--ig-radio-fill-color:var(--color-export-primary)]">
    <div class="flex flex-col border-b border-[var(--color-export-divider)] p-4 font-semibold tracking-[0.15px]">
        <span id="export-title" class="text-base leading-6 text-[var(--color-export-title)]">Export report</span>
        <span class="text-xs leading-4 text-[var(--color-export-muted)]">Choose a format to export</span>
    </div>
    <igx-radio-group class="!gap-0 px-6 py-3.5" name="format" alignment="vertical" [value]="format" (change)="format = $event.value" aria-labelledby="export-title">
        @for (option of formats; track option.value) {
            <igx-radio class="format-option" [value]="option.value">
                <span class="text-xs font-semibold leading-4 tracking-[0.15px] text-[var(--color-export-ink)]">{{ option.label }}</span>
            </igx-radio>
        }
    </igx-radio-group>
    <div class="flex justify-end gap-4 bg-[var(--color-export-tint)] p-4">
        <!-- The theme styles buttons in a later CSS layer than the utilities, so these are important.
             Without the theme's shadow, the focused button shows an outline instead. -->
        <button igxButton="flat" type="button"
            class="!h-[30px] !min-h-0 !min-w-0 !px-3 !shadow-none !text-sm !font-semibold !normal-case !leading-4 !tracking-[0.75px] [&.igx-button--focused]:!outline-2 [&.igx-button--focused]:!outline-offset-2 [&.igx-button--focused]:!outline-[color:var(--color-export-primary)] !rounded !border-transparent !bg-transparent !text-[var(--color-export-cancel)] hover:!bg-[var(--color-export-tint-strong)]">Cancel</button>
        <button igxButton="contained" type="button"
            class="!h-[30px] !min-h-0 !min-w-0 !px-3 !shadow-none !text-sm !font-semibold !normal-case !leading-4 !tracking-[0.75px] [&.igx-button--focused]:!outline-2 [&.igx-button--focused]:!outline-offset-2 [&.igx-button--focused]:!outline-[color:var(--color-export-primary)] !rounded-lg !border-[var(--color-export-primary)] !bg-[var(--color-export-primary)] !text-white hover:!border-[var(--color-export-primary-strong)] hover:!bg-[var(--color-export-primary-strong)]">Export as {{ format.toUpperCase() }}</button>
    </div>
</div>
```
```scss
/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

:host {
    /* The design's own palette. It lives here instead of coming from the theme
       palette, so the sample keeps its colors in every theme. */
    --color-export-primary: #0176ff;
    --color-export-primary-strong: #006ae6;
    --color-export-tint: #e6f2ff;
    --color-export-tint-strong: #cce4ff;
    --color-export-title: #00142b;
    --color-export-ink: #002b5c;
    --color-export-muted: #556c86;
    --color-export-divider: #d2dbe8;
    --color-export-empty: #a9b8cc;
    --color-export-cancel: #616161;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

/* The design draws the radio as a 2px ring with a 10px dot in a 40px slot. Each
   theme draws the radio its own way, so the whole radio is drawn here. */
.format-option {
    --label-margin: 0.125rem;
}

.format-option ::ng-deep .igx-radio__composite {
    width: 2.5rem;
    min-width: 2.5rem;
    height: 2.5rem;
}

.format-option ::ng-deep .igx-radio__composite::before,
.format-option ::ng-deep .igx-radio__composite::after {
    top: 0.625rem;
    inset-inline-start: 0.625rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
}

/* The ring */
.format-option ::ng-deep .igx-radio__composite::after {
    border: 0.125rem solid var(--color-export-empty);
    background: white;
}

.format-option.igx-radio--checked ::ng-deep .igx-radio__composite::after {
    border-color: var(--color-export-primary);
}

/* The dot */
.format-option ::ng-deep .igx-radio__composite::before {
    transform: scale(0);
    border: none;
    background: var(--color-export-primary);
}

.format-option.igx-radio--checked ::ng-deep .igx-radio__composite::before {
    transform: scale(0.5);
}
```

## Accessibility

The Angular Radio renders a native radio input, so assistive technologies announce each radio button with its role, label, and checked state.

### Keyboard Interaction

The Angular Radio Group moves focus and selection between its enabled radio buttons with the arrow keys. Disabled radio buttons are skipped.

| Key | Action |
| --- | --- |
| Tab / Shift+Tab | Moves focus into or out of the Radio Group. |
| Arrow Down / Arrow Right | Moves focus to the next enabled radio button and turns it on. From the last radio button, moves to the first one. In right-to-left layouts, Arrow Right moves to the previous radio button. |
| Arrow Up / Arrow Left | Moves focus to the previous enabled radio button and turns it on. From the first radio button, moves to the last one. In right-to-left layouts, Arrow Left moves to the next radio button. |
| Space | Turns on the focused radio button. |

### Screen Readers / ARIA

- Each Angular Radio renders a native `<input type="radio">`, which exposes the radio role, the checked state, and the disabled and required states. The input also sets `aria-invalid` from the `invalid` property.
- The label content of the radio button is its accessible name. When the label is outside the component, connect it with `aria-labelledby`.

- The `igx-radio-group` element doesn't render a `radiogroup` role. Add `role="radiogroup"` and an accessible name, for example with `aria-labelledby`, when the group needs to be announced as one question.

### Accessibility Compliance

Verify the rendered Angular Radio and Radio Group against the accessibility requirements of your application.

| Criterion | How the component supports the requirement |
| --- | --- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | Users move between the enabled radio buttons and turn them on with the arrow keys and Space. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | Each radio button exposes its label as the accessible name, the radio role, and its checked state through the native radio input. |

Your responsibilities:

- Give every radio button meaningful label content, and give the Radio Group an accessible name.
- Keep the focus ring visible and preserve sufficient contrast when you customize the Radio colors.
- Show a validation message when the Radio is invalid, so the error isn't conveyed by color alone. Show it in the surrounding form.
- Test the rendered Radio Group with keyboard navigation and the assistive technologies your users rely on.

## Known Limitations

The Angular Radio and Radio Group have the following known limitation:

- The `igx-radio-group` element doesn't render a `radiogroup` role. Add the role and an accessible name to the element yourself.

## API References

See the complete Angular Radio and Radio Group API references:

- [`IgxRadio`](mcp:get_api_reference?platform=angular&component=IgxRadioComponent)

- [`IgxRadioGroupDirective`](mcp:get_api_reference?platform=angular&component=IgxRadioGroupDirective)
- `IgxRadioComponent Theme`

## Dependencies

The Angular Radio requires a theme stylesheet to apply its visual styling. See the framework-specific setup in [**Getting Started**](../general/getting-started.md). The Radio also uses the `IgxRipple Theme` for its ripple effect.

## Additional Resources

Use the following Angular resources for API details and project support:

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

## Related Components

The Angular Radio is intended for one choice from a short list of mutually exclusive options. Use the following related components for other kinds of choices:

- [Checkbox](./checkbox.md) - Use Checkbox when users can select more than one option.
- [Switch](./switch.md) - Use Switch when the control turns a single setting on or off immediately.
- [Select](../select.md) - Use Select when the list of options is long or space is limited.

## FAQ

These frequently asked questions cover common Angular Radio and Radio Group selection, form, and state scenarios.

  **Q: How do I get the selected value when the user changes the selection?**

    Handle the `change` event on the Angular Radio Group. The change event arguments carry the `value` of the radio button the user turned on. You can also bind the selected value with `ngModel` or a form control on `igx-radio-group`. The change event doesn't fire when you set the Radio Group `value` in code.
  
  **Q: How do I select a radio button from code?**

    Set the Angular Radio Group `value` to the `value` of the radio button you want to turn on. Setting the Radio Group `value` doesn't fire the `change` event. To select a radio button and fire the `change` event, call the `select()` method of that radio button.
  
  **Q: How do I clear the selection of a Radio Group?**

    Users can't turn off a selected Angular Radio by clicking it again, which is the standard radio button behavior. To clear the selection in code, set the Radio Group `value`, or the form control bound to the group, to `null`. If users need to clear the selection themselves, add a "None" option or a separate clear button.
  
  **Q: Why can more than one radio button be on at the same time?**

    Angular Radio buttons are mutually exclusive when they're placed in the same `igx-radio-group`, which generates a shared `name` when you don't set one. Place radio buttons that belong together in one Radio Group instead of using standalone radio buttons.
  
  **Q: How do I make a selection required in a form?**

    Set `required` on the Angular Radio Group, or add `Validators.required` to the form control bound to the group. The form stays invalid until the user turns on one of the radio buttons.
  
  **Q: How do I disable all radio buttons of a Radio Group?**

    When the Angular Radio Group is bound to a reactive form control, call `disable()` on the control to disable all of its radio buttons. Without a form control, set `disabled` on each `igx-radio`, because the Radio Group doesn't have a `disabled` input.
  


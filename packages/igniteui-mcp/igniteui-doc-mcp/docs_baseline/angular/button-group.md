---
title: "Button Group"
description: The Ignite UI for Angular Button Group component organizes related toggle buttons and supports horizontal or vertical alignment, single or multiple selection, and toggling.
keywords: "Angular, UI controls, web widgets, UI widgets, Angular Button Group Components, Infragistics"
mentionedTypes: ["ToggleButton", "ButtonGroup"]
relatedComponents: [ToggleButton]
license: MIT
last_updated: "2026-07-28"
llms:
    description: "The Ignite UI for Angular Button Group organizes related toggle buttons into a group with horizontal or vertical alignment, single or multiple selection, and toggling."
_tocName: Button Group
---
# Button Group Component

The Angular Button Group component is used to organize buttons with the [`IgxButton`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective) directive into styled button groups with horizontal/vertical alignment, single/multiple selection and toggling.

## Live Demo

```typescript
import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

type AlbumSource = 'device' | 'cloud';

@Component({
    selector: 'app-button-group-overview',
    styleUrls: ['./button-group-overview.component.scss'],
    templateUrl: './button-group-overview.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupOverviewComponent {
    public rippleColor = 'gray';
    public source: AlbumSource = 'cloud';

    public albums: Record<AlbumSource, { title: string; photos: string[] }> = {
        device: {
            title: 'Trip around the world',
            photos: [
                'https://picsum.photos/id/1015/300/220',
                'https://picsum.photos/id/1016/300/220',
                'https://picsum.photos/id/1018/300/220',
                'https://picsum.photos/id/1019/300/220'
            ]
        },
        cloud: {
            title: 'Trip around the world',
            photos: [
                'https://picsum.photos/id/1036/300/220',
                'https://picsum.photos/id/1051/300/220',
                'https://picsum.photos/id/1062/300/220',
                'https://picsum.photos/id/1067/300/220'
            ]
        }
    };

    public get album() {
        return this.albums[this.source];
    }

    public selectSource(source: AlbumSource) {
        this.source = source;
    }
}
```
```html
<div class="sample-layout">
    <igx-buttongroup selectionMode="singleRequired">
        <button igxButton [igxRipple]="rippleColor" [selected]="source === 'device'" (click)="selectSource('device')">
            Device
        </button>
        <button igxButton [igxRipple]="rippleColor" [selected]="source === 'cloud'" (click)="selectSource('cloud')">
            Cloud
        </button>
    </igx-buttongroup>

    <div class="album">
        <p class="album-title">{{ album.title }}</p>
        <div class="album-photos">
            @for (photo of album.photos; track photo) {
                <img [src]="photo" [alt]="album.title" />
            }
        </div>
    </div>
</div>
```
```scss
@use 'igniteui-theming' as *;

:host {
    display: grid;
    place-items: center;
    height: 100vh;
}

.sample-layout {
    display: grid;
    width: rem(280px);
    gap: rem(8px);
}

igx-buttongroup {
    max-width: rem(280px);
}

.album-title {
    @include type-style('body-2');

    margin-block: 0 rem(8px);
    color: var(--ig-primary-500);
}

.album-photos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: rem(4px);
}

.album-photos img {
    width: 100%;
    object-fit: cover;
    display: block;
}
```

## Anatomy

The Angular Button Group organizes related Toggle Buttons into a single group with a shared container and individual button items.

**Button Group anatomy:** The Button Group component organizes related Toggle Buttons within a shared container, allowing users to make single or multiple selections.

<style>{`
  .button-group-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .button-group-anatomy .igd-anatomy__image {
    max-width: 520px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Container:</strong> Wraps the button's contents.<br />
<strong>2. Icon:</strong> Adds context to the button. Could be left, right, left and right or only icon.<br />
<strong>3. Label:</strong> The textual content that describes the button’s action to the user.</span>

The Angular Button Group contains Toggle Buttons, and each button can contain an icon and a label.

```text
Button Group
└── Toggle Button
    ├── Icon
    └── Label
```

## Getting Started

To use the Angular Button Group, follow the [Ignite UI for Angular Getting Started](/general/getting-started) topic for the basic project setup, then register the component for your target platform.

For Angular using the **igniteui-angular** package, install the package:

```cmd
ng add igniteui-angular
```

Then import `IGX_BUTTON_GROUP_DIRECTIVES` and the required standalone components in the component `imports` collection.

```ts
import { IGX_BUTTON_GROUP_DIRECTIVES } from 'igniteui-angular/button-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
```

The simplest way to start using the [`IgxButtonGroup`](mcp:get_api_reference?platform=angular&component=IgxButtonGroupComponent) is as follows:

```html
<igx-buttongroup></igx-buttongroup>
```

## Usage

Use the [`IgxButtonGroup`](mcp:get_api_reference?platform=angular&component=IgxButtonGroupComponent) to wrap buttons using the [`IgxButton`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective) directive. Set the `selected` input on a button to select it by default:

```html
<igx-buttongroup>
    <button igxButton>
        <igx-icon>format_align_left</igx-icon>
    </button>
    <button igxButton>
        <igx-icon>format_align_center</igx-icon>
    </button>
    <button igxButton selected>
        <igx-icon>format_align_justify</igx-icon>
    </button>
</igx-buttongroup>
```

### Alignment

The Button Group supports horizontal and vertical layouts. Use the [`Alignment`](mcp:get_api_reference?platform=angular&component=IgxButtonGroupComponent&member=alignment) property to set the orientation of the buttons in the group.

For Angular, set the `alignment` input with the `ButtonGroupAlignment` enum:

```ts
import { ButtonGroupAlignment } from 'igniteui-angular/button-group';

public alignment = ButtonGroupAlignment.vertical;
```

```html
<igx-buttongroup [alignment]="alignment">
    <button igxButton>Sofia</button>
    <button igxButton>London</button>
    <button igxButton selected>New York</button>
    <button igxButton>Tokyo</button>
</igx-buttongroup>
```

```typescript
import { Component } from '@angular/core';
import { ButtonGroupAlignment, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-group-alignment',
    styleUrls: ['./button-group-alignment.component.scss'],
    templateUrl: './button-group-alignment.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupAlignmentComponent {
    public rippleColor = 'gray';
    public cities = ['Sofia', 'London', 'New York'];

    public alignments: { label: string; value: ButtonGroupAlignment }[] = [
        { label: 'Horizontal', value: ButtonGroupAlignment.horizontal },
        { label: 'Vertical', value: ButtonGroupAlignment.vertical }
    ];
}
```
```html
<div class="sample-layout">
    @for (alignment of alignments; track alignment.value) {
        <div class="sample-inner-layout">
            <span>{{ alignment.label }}</span>
            <igx-buttongroup [alignment]="alignment.value">
                @for (city of cities; track city) {
                    <button igxButton [igxRipple]="rippleColor">{{ city }}</button>
                }
            </igx-buttongroup>
        </div>
    }
</div>
```
```scss
@use 'igniteui-theming' as *;

:host {
    display: grid;
    place-items: center;
    height: 100vh;
}

.sample-layout {
    display: flex;
    gap: rem(32px);
    align-items: start;
    justify-content: center;
    flex-wrap: wrap;
}

.sample-inner-layout {
    display: grid;
    gap: rem(8px);
    align-items: start;
}

igx-buttongroup {
    min-width: rem(280px);
}

span {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: rem(13px);
    font-weight: 400;
    line-height: rem(20px);
    letter-spacing: rem(0.3px);
    margin: rem(8px);
    text-align: center;
}
```

### Selection
In order to configure the Ignite UI for Angular Button Group selection, use its platform-specific selection property.

For Angular, use the [`selectionMode`](mcp:get_api_reference?platform=angular&component=IgxButtonGroupComponent&member=selectionMode) property. The available modes are:

- **single** - default selection mode of the button group. A single button can be selected/deselected by the user.
- **single-required** - mimics a radio group behavior. Only one button can be selected and once initial selection is made, deselection is not possible through user interaction.
- **multiple** - multiple buttons in the group can be selected and deselected.

The sample below demonstrates the exposed [`IgxButtonGroup`](mcp:get_api_reference?platform=angular&component=IgxButtonGroupComponent) selection modes:

The Angular selection modes are `single`, `singleRequired`, and `multi`.

Set the Angular `selectionMode` input to configure the selection behavior:

```html
<igx-buttongroup [selectionMode]="'multi'">
    <button igxButton selected>Bold</button>
    <button igxButton>Italic</button>
    <button igxButton>Underline</button>
</igx-buttongroup>
```

```typescript
import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

type SelectionMode = 'single' | 'singleRequired' | 'multi';

@Component({
    selector: 'app-button-group-selection',
    styleUrls: ['./button-group-selection.component.scss'],
    templateUrl: './button-group-selection.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class ButtonGroupSelectionComponent {
    public rippleColor = 'gray';

    public selectionModes: { label: string; value: SelectionMode }[] = [
        { label: 'Single', value: 'single' },
        { label: 'Single-Required', value: 'singleRequired' },
        { label: 'Multi', value: 'multi' }
    ];

    public isBoldSelected(mode: SelectionMode) {
        return mode === 'singleRequired' || mode === 'multi';
    }

    public isItalicSelected(mode: SelectionMode) {
        return mode === 'multi';
    }
}
```
```html
<article class="selection-samples">
    @for (mode of selectionModes; track mode.value) {
        <span class="sample-label">{{ mode.label }}</span>
        <igx-buttongroup [selectionMode]="mode.value">
            <button igxButton [igxRipple]="rippleColor" [selected]="isBoldSelected(mode.value)">
                <igx-icon>format_bold</igx-icon>
            </button>
            <button igxButton [igxRipple]="rippleColor" [selected]="isItalicSelected(mode.value)">
                <igx-icon>format_italic</igx-icon>
            </button>
            <button igxButton [igxRipple]="rippleColor">
                <igx-icon>format_underlined</igx-icon>
            </button>
        </igx-buttongroup>
    }
</article>
```
```scss
@use 'igniteui-theming' as *;

:host {
    container-type: inline-size;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: center;
    height: 100vh;
}

.selection-samples {
    display: grid;
    grid-template-columns: auto minmax(rem(180px), 1fr);
    align-items: center;
    gap: rem(24px) rem(32px);
    inline-size: 100%;
    max-inline-size: rem(380px);
    margin-inline: auto;
}

.sample-label {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: rem(13px);
    font-weight: 400;
    line-height: rem(20px);
    letter-spacing: rem(0.3px);
    text-align: end;
}

igx-buttongroup {
    inline-size: 100%;
}

@container (width < 22rem) {
    .selection-samples {
        grid-template-columns: minmax(0, 1fr);
        gap: rem(4px);
    }

    .sample-label {
        text-align: start;

        &:not(:first-of-type) {
            margin-block-start: rem(16px);
        }
    }
}
```

An [`IgxButton`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective) can be marked as selected via its `selected` input or through the [`values`](mcp:get_api_reference?platform=angular&component=IgxButtonGroupComponent&member=values) input of the Button Group.

**Note:** 

Set a unique `value` for each button when initializing the Button Group with its [`values`](mcp:get_api_reference?platform=angular&component=IgxButtonGroupComponent&member=values) input.

### States

Each button in the group supports enabled and disabled variants, which can also be selected or not selected. Use the state behavior provided by the contained [`IgxButton`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective) components.

```typescript
import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-group-states',
    styleUrls: ['./button-group-states.component.scss'],
    templateUrl: './button-group-states.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupStatesComponent {
    public rippleColor = 'gray';

    public rows: { label: string; selected: boolean }[] = [
        { label: 'Selected / Off', selected: false },
        { label: 'Selected / On', selected: true }
    ];
}
```
```html
<article class="states-matrix">
    <header class="states-row">
        <span class="row-label"></span>
        <span class="column-label">Enabled</span>
        <span class="column-label">Disabled</span>
    </header>

    @for (row of rows; track row.label) {
        <section class="states-row">
            <span class="row-label">{{ row.label }}</span>

            <div class="state-cell">
                <span class="cell-label">Enabled</span>
                <igx-buttongroup selectionMode="multi">
                    <button
                        igxButton
                        [igxRipple]="rippleColor"
                        [selected]="row.selected">Device</button>
                </igx-buttongroup>
            </div>

            <div class="state-cell">
                <span class="cell-label">Disabled</span>
                <igx-buttongroup selectionMode="multi">
                    <button igxButton disabled [selected]="row.selected">Cloud</button>
                </igx-buttongroup>
            </div>
        </section>
    }
</article>
```
```scss
@use 'igniteui-theming' as *;

:host {
    container-type: inline-size;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: center;
    height: 100vh;
}

.states-matrix {
    --state-columns: 2;

    display: grid;
    grid-template-columns: auto repeat(var(--state-columns), minmax(rem(120px), 1fr));
    gap: rem(16px);
    inline-size: 100%;
    max-inline-size: rem(520px);
    margin-inline: auto;
}

.states-row {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
    align-items: center;
}

.row-label,
.column-label,
.cell-label {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: rem(13px);
    font-weight: 400;
    line-height: rem(20px);
    letter-spacing: rem(0.3px);
}

.column-label,
.cell-label {
    text-align: center;
}

.cell-label {
    display: none;
}

.state-cell {
    display: grid;
    gap: rem(4px);
}

// Too narrow for the matrix: drop the header, let the cells wrap, and move
// each column label into the cell it describes.
@container (width < 24rem) {
    .states-matrix {
        grid-template-columns: minmax(0, 1fr);
    }

    .states-row {
        grid-template-columns: repeat(auto-fit, minmax(rem(140px), 1fr));
        column-gap: rem(8px);
    }

    header.states-row {
        display: none;
    }

    .row-label {
        grid-column: 1 / -1;
    }

    .cell-label {
        display: block;
        text-align: start;
        margin-block-start: rem(16px);
    }
}

// WARNING START: Demo overrides only. Do not copy to production.
// Interaction is disabled so the matrix stays a static picture of each state.
igx-buttongroup  {
    pointer-events: none;
}
// WARNING END
```

### Interaction States

The enabled buttons in the group support idle, hover, and focused interaction states. Use the state behavior provided by the contained [`IgxButton`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective) components.

```typescript
import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-group-interaction-states',
    styleUrls: ['./button-group-interaction-states.component.scss'],
    templateUrl: './button-group-interaction-states.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class ButtonGroupInteractionStatesComponent {
    public rippleColor = 'gray';

    public rows: { label: string; selected: boolean }[] = [
        { label: 'Selected / Off', selected: false },
        { label: 'Selected / On', selected: true }
    ];

    public states = ['idle', 'hover', 'focused'];

    public getLabel(state: string) {
        return state.charAt(0).toUpperCase() + state.slice(1);
    }
}
```
```html
<article class="states-matrix" [style.--state-columns]="states.length">
    <header class="states-row">
        <span class="row-label"></span>
        @for (state of states; track state) {
            <span class="column-label">{{ getLabel(state) }}</span>
        }
    </header>

    @for (row of rows; track row.label) {
        <section class="states-row">
            <span class="row-label">{{ row.label }}</span>
            @for (state of states; track state) {
                <div class="state-cell">
                    <span class="cell-label">{{ getLabel(state) }}</span>
                    <igx-buttongroup>
                        <button
                            igxButton
                            [igxRipple]="rippleColor"
                            [selected]="row.selected"
                            [class]="'state-' + state"
                            [class.state-selected]="row.selected">
                            <igx-icon>notifications</igx-icon>
                            Button
                            <igx-icon>notifications</igx-icon>
                        </button>
                    </igx-buttongroup>
                </div>
            }
        </section>
    }
</article>
```
```scss
@use "igniteui-theming/sass/typography" as *;

:host {
    container-type: inline-size;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-content: center;
    height: 100vh;
}

.states-matrix {
    display: grid;
    grid-template-columns: auto repeat(3, minmax(rem(124px), 1fr));
    gap: rem(16px);
    inline-size: 100%;
    max-inline-size: rem(680px);
    margin-inline: auto;
}

.states-row {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
    align-items: center;
}

.row-label,
.column-label,
.cell-label {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: rem(13px);
    font-weight: 400;
    line-height: rem(20px);
    letter-spacing: rem(0.3px);
}

.column-label,
.cell-label {
    text-align: center;
}

.cell-label {
    display: none;
}

.state-cell {
    display: grid;
    gap: rem(4px);
}

igx-icon {
    --ig-icon-size: #{rem(16px)};
}

@container (width < 34rem) {
    .states-matrix {
        grid-template-columns: minmax(0, 1fr);
    }

    .states-row {
        grid-template-columns: repeat(auto-fit, minmax(rem(150px), 1fr));
    }

    header.states-row {
        display: none;
    }

    .row-label {
        grid-column: 1 / -1;
    }

    .cell-label {
        display: block;
        text-align: start;
        margin-block-start: rem(16px);
    }

    .state-cell {
        margin-inline-end: rem(8px);
    }
}

// WARNING START: Demo overrides only. Do not copy to production.
// Forced state classes are used here solely to present all component states visually.
igx-buttongroup{
    pointer-events: none;
}

.igx-button-group__item.state-hover:not(.state-selected) {
    background: var(--item-hover-background);
    border-color: var(--item-hover-border-color);
    color: var(--item-hover-text-color);
}

.igx-button-group__item.state-idle.state-selected {
    background: var(--item-selected-background);
    border-color: var(--item-selected-border-color);
    color: var(--item-selected-text-color);
}

.igx-button-group__item.state-focused:not(.state-selected) {
    background: var(--item-focused-background);
    border-color: var(--item-focused-border-color);
    color: var(--item-focused-text-color);
}

.igx-button-group__item.state-hover.state-selected {
    background: var(--item-selected-hover-background);
    border-color: var(--item-selected-hover-border-color);
    color: var(--item-selected-hover-text-color);
}

.igx-button-group__item.state-focused.state-selected {
    background: var(--item-selected-focus-background);
    border-color: var(--item-selected-hover-border-color);
    color: var(--item-selected-text-color);
}
// WARNING END
```

### Layout Template

Each button can use text, an icon, or both. Keep the content style consistent across the group, and use the button content APIs to control the icon and label shown in each button.

```typescript
import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-group-layout',
    styleUrls: ['./button-group-layout.component.scss'],
    templateUrl: './button-group-layout.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class ButtonGroupLayoutComponent {
    public rippleColor = 'gray';

    public layouts = [
        { value: 'left', label: 'Left', icon: 'format_align_left' },
        { value: 'center', label: 'Center', icon: 'format_align_center' },
        { value: 'right', label: 'Right', icon: 'format_align_right' }
    ];
}
```
```html
<div class="sample-layout">
    <igx-buttongroup>
        @for (layout of layouts; track layout.value) {
            <button igxButton [igxRipple]="rippleColor">{{ layout.label }}</button>
        }
    </igx-buttongroup>
    <igx-buttongroup>
        @for (layout of layouts; track layout.value) {
            <button igxButton [igxRipple]="rippleColor">
                <igx-icon>{{ layout.icon }}</igx-icon>
            </button>
        }
    </igx-buttongroup>
</div>
```
```scss
@use 'igniteui-theming' as *;

:host {
    display: grid;
    place-items: center;
    height: 100vh;
}

.sample-layout {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: rem(60px);
}

igx-buttongroup {
    max-width: 400px;
    min-width: 280px;
}
```

### Custom Toggle Buttons

For Angular, use the `values` input to provide an array of customized buttons. Each item can define properties such as `label`, `icon`, `selected`, `disabled`, and `togglable`.

Define the button values in the component class:

```ts
interface IButton {
    label?: string;
    icon?: string;
    disabled?: boolean;
    togglable?: boolean;
    selected?: boolean;
    color?: string;
}

public bordersButtons: IButton[] = [
    { icon: 'border_top', selected: true },
    { icon: 'border_right' },
    { icon: 'border_bottom' },
    { icon: 'border_left' }
];
```

```html
<igx-buttongroup [selectionMode]="'multi'" [values]="bordersButtons"></igx-buttongroup>
```

See the Angular Button Group sample for the complete `values` model and configuration.

```typescript
import { Component, OnInit } from '@angular/core';
import { IgxButtonGroupComponent, IButtonGroupButton } from 'igniteui-angular/button-group';

interface IButton {
    ripple?: string;
    label?: string;
    disabled?: boolean;
    togglable?: boolean;
    selected?: boolean;
    color?: string;
    icon?: string;
}

class CustomToggle implements IButtonGroupButton {
    label: string;
    icon?: string;
    ripple?: string;
    selected?: boolean;
    disabled?: boolean;
    togglable?: boolean;
    color?: string;

    constructor(obj?: IButton) {
        this.ripple = obj.ripple || 'gray';
        this.label = obj.label;
        this.selected = obj.selected || false;
        this.togglable = obj.togglable || true;
        this.disabled = obj.disabled || false;
        this.color = obj.color;
        this.icon = obj.icon;
    }
}

@Component({
    selector: 'app-button-group-custom-toggle',
    styleUrls: ['./button-group-custom-toggle.component.scss'],
    templateUrl: './button-group-custom-toggle.component.html',
    imports: [IgxButtonGroupComponent]
})
export class ButtonGroupCustomToggleComponent implements OnInit {
    public bordersButtons: CustomToggle[];

    public ngOnInit() {
        this.bordersButtons = [
            new CustomToggle({ icon: 'border_top', selected: true }),
            new CustomToggle({ icon: 'border_right', selected: false }),
            new CustomToggle({ icon: 'border_bottom', selected: false }),
            new CustomToggle({ icon: 'border_left', selected: false })
        ];
    }
}
```
```html
<igx-buttongroup selectionMode="multi" [values]="bordersButtons"></igx-buttongroup>
```
```scss
@use 'igniteui-theming' as *;

:host {
    display: grid;
    place-items: center;
    height: 100vh;
}

igx-buttongroup {
    inline-size: rem(180px);
}
```

### Size
The `--ig-size` CSS custom property can be used to control the size of the button group.

```scss
igx-buttongroup {
    --ig-size: var(--ig-size-small);
}
```

```html
<igx-buttongroup></igx-buttongroup>
```

```typescript
import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-group-size',
    styleUrls: ['./button-group-size.component.scss'],
    templateUrl: './button-group-size.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupSizeComponent {
    public rippleColor = 'gray';
    public cities = ['Sofia', 'London', 'New York'];
    public sizes = ['small', 'medium', 'large'];

    public getLabel(size: string) {
        return size.charAt(0).toUpperCase() + size.slice(1);
    }

    public getSizeStyle(size: string) {
        return `var(--ig-size-${size})`;
    }
}
```
```html
<article class="button-group-size">
    @for (size of sizes; track size) {
        <span class="sample-label">{{ getLabel(size) }}</span>
        <igx-buttongroup>
            @for (city of cities; track city) {
                <button igxButton [igxRipple]="rippleColor">{{ city }}</button>
            }
        </igx-buttongroup>
    }
</article>
```
```scss
@use 'igniteui-theming' as *;

:host {
    container-type: inline-size;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    place-items: center;
    height: 100vh;
}

.button-group-size {
    display: grid;
    grid-template-columns: auto minmax(rem(240px), 1fr);
    align-items: center;
    gap: rem(24px) rem(32px);
    inline-size: 100%;
    max-inline-size: rem(480px);
    margin-inline: auto;
}

.sample-label {
    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: rem(13px);
    font-weight: 400;
    line-height: rem(20px);
    letter-spacing: rem(0.3px);
    text-align: end;
}

igx-buttongroup {
    &:nth-of-type(1n) {
        --ig-size: var(--ig-size-small);

        ::ng-deep button.igx-button-group__item {
            min-height: rem(32px);
        }
    }

    &:nth-of-type(2n) {
        --ig-size: var(--ig-size-medium);

        ::ng-deep button.igx-button-group__item {
            min-height: rem(40px);
        }
    }

    &:nth-of-type(3n) {
        --ig-size: var(--ig-size-large);

        ::ng-deep button.igx-button-group__item {
            min-height: rem(48px);
        }
    }
}

@container (width < 22rem) {
    .button-group-size {
        grid-template-columns: minmax(0, 1fr);
        gap: rem(4px);
    }

    .sample-label {
        text-align: start;

        &:not(:first-of-type) {
            margin-block-start: rem(16px);
        }
    }
}
```

### Do/Don't

**When to use:** Use a Button Group to organize related toggle actions where users may select one or more options.

**When not to use:** Do not use a Button Group for unrelated actions or for a single toggle action; use a standalone `IgxToggleButton` instead.

<div class="table-responsive">
    <table class="table" style="width: 100%; table-layout: fixed; border-collapse: collapse; border: 1px solid #d3d3d3;">
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

The Angular Button Group exposes the following properties.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`alignment`](mcp:get_api_reference?platform=angular&component=IgxButtonGroupComponent&member=alignment) | `ButtonGroupAlignment` | `horizontal` | Sets the orientation of the buttons in the group. |
| [`values`](mcp:get_api_reference?platform=angular&component=IgxButtonGroupComponent&member=values) | `IButton[]` | `[]` | Defines the button items displayed in the group. |

## Styling

The Angular Button Group theme exposes Sass parameters for the group items and their interaction states. Changing a primary theme property updates its related state properties to keep the component visually consistent.

### Sass Theming

Use the Angular theme system to customize the Button Group consistently with the rest of your application.

Import the Angular theming functions before creating a custom Button Group theme:

```scss
@use "igniteui-angular/theming" as *;
```

Create a theme with `button-group-theme` and include it in the component scope:

```scss
$custom-button-group: button-group-theme(
    $item-background: #57a5cd,
);

:host {
    @include tokens($custom-button-group);
}
```

### CSS Variables

Use the Angular theme tokens to customize the Button Group item colors and interaction states. The primary Sass parameters listed below update their related state tokens.

| Primary property | Dependent property | Description |
| --- | --- | --- |
| `$item-background` | `$item-hover-background` | Hover background for items. |
|  | `$item-selected-background` | Selected item background. |
|  | `$item-focused-background` | Focused item background. |
|  | `$disabled-background-color` | Disabled item background. |
|  | `$item-border-color` | Default item border color. |
|  | `$item-text-color` | Default item text color. |
|  | `$idle-shadow-color` | Idle item shadow color. |
| `$item-hover-background` | `$item-selected-hover-background` | Selected item hover background. |
|  | `$item-focused-hover-background` | Focused hover background. |
|  | `$item-hover-text-color` | Hovered item text color. |
|  | `$item-hover-icon-color` | Hovered item icon color. |
| `$item-selected-background` | `$item-selected-focus-background` | Selected item focus background. |
|  | `$disabled-selected-background` | Disabled selected background. |
|  | `$item-selected-text-color` | Selected item text color. |
|  | `$item-selected-icon-color` | Selected item icon color. |
|  | `$item-selected-hover-text-color` | Selected hovered item text color. |
|  | `$item-selected-hover-icon-color` | Selected hovered item icon color. |
| `$item-border-color` | `$item-hover-border-color` | Hovered item border color. |
|  | `$item-focused-border-color` | Focused item border color. |
|  | `$item-selected-border-color` | Selected item border color. |
|  | `$item-selected-hover-border-color` | Selected hovered item border color. |
|  | `$item-disabled-border` | Disabled item border color. |
|  | `$disabled-selected-border-color` | Disabled selected border color. |

### Style Parts

Use the following CSS parts to target the Button Group and its contained Toggle Buttons:

| Part | Component | What it styles |
| --- | --- | --- |
| `group` | [`IgxButtonGroup`](mcp:get_api_reference?platform=angular&component=IgxButtonGroupComponent) | The Button Group container. |
| `toggle` | `IgxToggleButton` | An individual Toggle Button. |

### Custom Styling

The following example changes the group background and padding, and changes the text color of the contained Toggle Buttons:

| Selector | Declaration | Effect |
| --- | --- | --- |
| `igx-button-group::part(group)` | `background-color`, `padding` | Changes the Button Group container background and spacing. |
| `igx-toggle-button::part(toggle)` | `color` | Changes the text color of an individual Toggle Button. |

```css
igx-button-group::part(group) {
    background-color: var(--ig-primary-500);
    padding: 8px;
}

igx-toggle-button::part(toggle) {
    color: var(--ig-secondary-300);
}
```

```typescript
import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-group-styling',
    styleUrls: ['./button-group-styling.component.scss'],
    templateUrl: './button-group-styling.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupStylingComponent {
    public rippleColor = 'gray';
    public layouts = ['Left', 'Center', 'Right'];
}
```
```html
<igx-buttongroup>
    @for (layout of layouts; track layout) {
        <button igxButton [igxRipple]="rippleColor" [selected]="layout === 'Left'">{{ layout }}</button>
    }
</igx-buttongroup>
```
```scss
@use "igniteui-angular/theming" as *;

:host {
    display: grid;
    place-items: center;
    height: 100vh;
}

igx-buttongroup {
    display: inline-block;
    width: 100%;
    max-width: rem(400px);
}

$custom-button-group: button-group-theme(
    $border-radius: 4px,
    $item-text-color: #4a5a66,
    $item-background: #cfe8fb,
    $item-border-color: #4da3e8,
    $item-hover-text-color: #4a5a66,
    $item-hover-background: #b3daf8,
    $item-hover-border-color: #4da3e8,
    $item-selected-text-color: #2f4d6a,
    $item-selected-background: #6db3ea,
    $item-selected-border-color: #4da3e8,
    $item-selected-hover-text-color: #2f4d6a,
    $item-selected-hover-background: #6db3ea
);

:host {
    @include tokens($custom-button-group);
}
```

### Styling with Tailwind

You can style the Angular Button Group with the Ignite UI Tailwind utility classes. First, [set up Tailwind](/themes/misc/tailwind-classes), then import the utility file in the global stylesheet:

```scss
@import "tailwindcss";
@use 'igniteui-theming/tailwind/utilities/material.css';
```

Use `light-button-group` or `dark-button-group` for the corresponding theme and override generated CSS variables with arbitrary properties:

```html
<igx-button-group class="!light-button-group ![--item-background:#7B9E89]">
</igx-button-group>
```

The exclamation mark (`!`) makes the utility class important so it takes precedence over the component theme.

```typescript
import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-button-group-tailwind-styling',
    styleUrls: ['./button-group-tailwind-styling.component.scss'],
    templateUrl: './button-group-tailwind-styling.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective]
})
export class ButtonGroupTailwindStylingComponent {
    public rippleColor = 'gray';
    public views = ['Day', 'Week', 'Month'];
}
```
```html
<igx-buttongroup
    class="![--elevation:0] ![--item-text-color:#6d28d9] ![--item-background:#ffffff] ![--item-border-color:#c4b5fd] ![--item-hover-text-color:#6d28d9] ![--item-hover-background:#fae8ff] ![--item-hover-border-color:#c4b5fd] ![--item-selected-text-color:#ffffff] ![--item-selected-background:#7c3aed] ![--item-selected-border-color:#c4b5fd] ![--item-selected-hover-text-color:#ffffff] ![--item-selected-hover-background:#7c3aed]">
    @for (view of views; track view) {
        <button igxButton [igxRipple]="rippleColor" [selected]="view === 'Week'">{{ view }}</button>
    }
</igx-buttongroup>
```
```scss
@use 'igniteui-theming' as *;

:host {
    display: grid;
    place-items: center;
    height: 100vh;
}

igx-buttongroup {
    display: inline-block;
    width: 100%;
    max-width: rem(400px);
}
```

## Accessibility

The Angular Button Group organizes related Toggle Buttons while exposing each button's selected and disabled state.

### Keyboard Interaction

The Button Group delegates keyboard interaction to its contained Toggle Buttons. Each Toggle Button renders a native button, so standard button keyboard behavior activates the focused item and updates its selection according to the configured selection mode.

| Key | Action |
| --- | --- |
| Tab / Shift+Tab | Moves focus to the next or previous enabled Toggle Button in the group. |
| Enter / Space | Activates the focused Toggle Button and selects or deselects it according to the configured selection mode. |

When the Button Group is disabled, it disables its contained Toggle Buttons so they are not keyboard interactive.

### Screen Readers / ARIA

The Button Group exposes a group relationship and each Toggle Button exposes its state through native button semantics.

- The group container uses `role="group"`.
- Angular updates each contained button's `aria-pressed` value when its selection changes and disables child buttons when the group is disabled.
- The group emits `selected` and `deselected` when a user changes selection. Each event provides the selected Toggle Button and its index.
- Provide visible text, an `igxLabel`, or another accessible name for every icon-only button.

### Accessibility Compliance

Infragistics documents Ignite UI for Angular accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| -- | -- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | Each Toggle Button uses a native button, so the group selection behavior is available through standard button keyboard activation. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The group exposes `role="group"`. Toggle Buttons expose native button semantics and update `aria-pressed` when selection changes; xplat Toggle Buttons also expose `aria-disabled`. |

Your responsibilities:

- Give each Toggle Button a clear visible label or accessible name, especially when it contains only an icon.
- Keep the group selection mode aligned with the control purpose, so users can understand whether one or multiple options may be selected.
- Preserve the logical button order and sufficient color contrast when customizing the group or its selected state.

## Troubleshooting

Use this section to check boundaries and common decisions before treating Button Group as a single toggle, form field, or action group.

### Why does selectedItems not select a button?

Ensure every Toggle Button has a unique `value` attribute. The `selectedItems` property depends on those values.

### Known Limitations

The Angular Button Group coordinates Toggle Buttons but does not replace their individual labels or accessible names.

- Selection behavior depends on the configured `selection` mode.
- The `selectedItems` property depends on unique `value` attributes on the contained Toggle Buttons.
- The Button Group does not provide labels or icons for its buttons; define the content of each Toggle Button separately.

## API References

The Angular Button Group API reference provides the complete API surface for the component and its related button functionality.

[`IgxButtonGroup`](mcp:get_api_reference?platform=angular&component=IgxButtonGroupComponent)
[`IgxButton`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective)
[`IgxRipple`](mcp:get_api_reference?platform=angular&component=IgxRippleDirective)
[`IgxIcon`](mcp:get_api_reference?platform=angular&component=IgxIconComponent)

## Dependencies

The Angular Button Group requires the Angular package and its theme stylesheet. The examples also use the [`IgxButton`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective), [`IgxIcon`](mcp:get_api_reference?platform=angular&component=IgxIconComponent), and [`IgxRipple`](mcp:get_api_reference?platform=angular&component=IgxRippleDirective) components.

## Additional Resources

Use the following Angular resources for API details and project support:

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

## Related Components

- [Button](./button.md) - Use Button when you need an individual action instead of a selectable group.

## FAQ

**Q: How do I set the selected buttons in a Button Group?**

Give every button item a unique value, then use the platform-specific selected-items setting to identify the items that should start selected. Unique values allow the group to track selection consistently across all supported platforms.

**Q: Can I use icons and labels in a Button Group?**

Yes. Each button item can contain an icon, a label, or both. Keep the content pattern consistent across the group and provide a visible label or accessible name when an icon alone does not explain the option.

**Q: Can I display a Button Group vertically?**

Yes. Set the platform-specific alignment property to the vertical option. Use horizontal alignment when the related choices should be presented in a single row.


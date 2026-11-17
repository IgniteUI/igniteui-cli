---
title: "Chip"
description: "The Ignite UI for Angular Chip is a compact element for tags, filters, and recipients that users can select or remove, with style variants and icon slots."
keywords: "Angular Chip, chip component, selectable chip, removable chip, tags, filters, Ignite UI for Angular, Infragistics"
license: MIT
last_updated: "2026-10-07"
mentionedTypes: ["Chip", "Icon"]
relatedComponents: ["Button", "Checkbox", "Badge"]
llms:
  description: "The Ignite UI for Angular Chip is a compact element that represents a tag, filter, or person and that users can select or remove."
_tocName: Chip
---
# Chip Component

The Ignite UI for Angular Chip is a compact element that represents a tag, filter, or person and that users can select or remove.

A chip can be selectable, removable, or both, and can show icons or other content before and after its label.

## Live Demo

```typescript
import { Component, ElementRef, Injector, ViewChild, afterNextRender, inject } from '@angular/core';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxInputDirective, IgxInputGroupComponent } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-chip-overview',
    templateUrl: './chip-overview.component.html',
    styleUrls: ['./chip-overview.component.scss'],
    imports: [IgxButtonDirective, IgxChipComponent, IgxInputDirective, IgxInputGroupComponent]
})
export class ChipOverviewComponent {
    @ViewChild('skillsGroup') private skillsGroup?: ElementRef<HTMLElement>;
    @ViewChild('selectedGroup') private selectedGroup?: ElementRef<HTMLElement>;

    public skills = ['Figma', 'React', 'CSS', 'Prototyping', 'Motion Design'];
    public selectedSkills = ['Prototyping', 'Motion Design'];
    private injector = inject(Injector);

    /** Both groups list the selected skills in the order of the skills list. */
    public get selected() {
        return this.skills.filter((skill) => this.selectedSkills.includes(skill));
    }

    public toggleSkill(skill: string, selected: boolean) {
        // The chip also reports the selection it receives through the binding, so skip what is already in place.
        if (selected === this.selectedSkills.includes(skill)) {
            return;
        }
        this.selectedSkills = selected
            ? [...this.selectedSkills, skill]
            : this.selectedSkills.filter((item) => item !== skill);
    }

    public removeSkill(skill: string) {
        const index = this.selected.indexOf(skill);
        this.toggleSkill(skill, false);

        // The removed chip is gone, so move focus to the next selected skill, or back to the skill itself when none is left.
        afterNextRender(() => {
            const remaining = this.selectedGroup?.nativeElement.querySelectorAll<HTMLElement>('igx-chip');
            const next = remaining?.[index] ?? remaining?.[index - 1];
            const target = next
                ? next.querySelector<HTMLElement>('.igx-chip__remove')
                : this.skillsGroup?.nativeElement.querySelectorAll<HTMLElement>('igx-chip')[this.skills.indexOf(skill)];
            target?.focus();
        }, { injector: this.injector });
    }
}
```
```html
<div class="profile-card">
    <div>
        <span class="section-header" id="name-header">Name</span>
        <igx-input-group class="name-input" type="border">
            <input igxInput value="Jordan Lee" aria-labelledby="name-header" />
        </igx-input-group>
    </div>
    <div>
        <span class="section-header" id="skills-header">Skills · {{ selected.length }} selected</span>
        <div #skillsGroup class="chip-group" role="group" aria-labelledby="skills-header">
            @for (skill of skills; track skill) {
                <igx-chip
                    outlined
                    selectable
                    [selected]="selectedSkills.includes(skill)"
                    (selectedChange)="toggleSkill(skill, $event)">
                    {{ skill }}
                </igx-chip>
            }
        </div>
    </div>
    <div>
        <span class="section-header" id="selected-header">Selected</span>
        <div #selectedGroup class="chip-group" role="group" aria-labelledby="selected-header">
            @for (skill of selected; track skill) {
                <igx-chip outlined removable (remove)="removeSkill(skill)">{{ skill }}</igx-chip>
            }
        </div>
    </div>
    <div class="actions">
        <button igxButton="contained">Save profile</button>
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
    box-sizing: border-box;
}

.profile-card {
    --ig-size: var(--ig-size-medium);

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 21.875rem;
    padding: 1rem;
    border: 1px solid var(--ig-gray-200);
    border-radius: 0.25rem;
    background: var(--ig-surface-base);
}

.section-header {
    display: flex;
    align-items: center;
    height: 2rem;
    padding-inline: 1rem;
    color: var(--ig-secondary-500);
    font-family: var(--ig-overline-font-family, var(--ig-font-family));
    font-size: var(--ig-overline-font-size);
    font-weight: var(--ig-overline-font-weight);
    line-height: var(--ig-overline-line-height);
    letter-spacing: var(--ig-overline-letter-spacing);
    text-transform: var(--ig-overline-text-transform);
}

.name-input {
    --ig-size: var(--ig-size-small);
}

/* The minimum height keeps the card from shrinking when no skill is selected. */
.chip-group {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    min-height: 2rem;
    padding: 0.25rem;
}

.actions {
    display: flex;
    justify-content: flex-end;
}
```

## Anatomy

The Angular Chip is a container that holds a label and optional icons in a single row.

**Angular Chip anatomy anatomy:** The chip anatomy labels the container, selection icon, left icon, label, right icon, and remove icon.

<style>{`
  .chip-anatomy {
    --igd-anatomy-padding: 72px 32px;
  }

  .chip-anatomy .igd-anatomy__image {
    max-width: 282.5px;
  }

  .chip-anatomy-legend {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 24px;
    margin-bottom: 24px;
  }

  .chip-anatomy-legend span {
    display: block;
  }

  @media (max-width: 768px) {
    .chip-anatomy-legend {
      grid-template-columns: 1fr;
    }
  }
`}</style>

<div class="chip-anatomy-legend ig-typography__body-2">
  <div>
    <span><strong>1. Container:</strong> holds all chip elements and defines its visual boundary</span>
    <span><strong>2. Selection Icon:</strong> indicates the chip is selected</span>
    <span><strong>3. Left Icon (optional):</strong> displayed on the left side of the label</span>
  </div>
  <div>
    <span><strong>4. Label:</strong> the text that identifies or describes the chip's value</span>
    <span><strong>5. Right Icon (optional):</strong> displayed on the right side of the label</span>
    <span><strong>6. Remove Icon:</strong> cancel icon indicates when a chip can be removed</span>
  </div>
</div>

```text
igx-chip[role="option"]               // host; aria-selected reflects `selected`
└─ div.igx-chip__item                 // chip wrapper; drag and drop target
   ├─ div.igx-chip__start
   │  ├─ div.igx-chip__select         // select icon, shown while selected
   │  └─ [igxPrefix]                  // content before the label
   ├─ div.igx-chip__content           // label (projected content)
   └─ div.igx-chip__end
      ├─ [igxSuffix]                  // content after the label
      └─ div.igx-chip__remove         // remove control, rendered when removable
```

## Getting Started

Install Ignite UI for Angular and configure a theme, as described in the [Getting Started](../general/getting-started.md) topic, before you add the Angular Chip to an application.

Import `IGX_CHIPS_DIRECTIVES` into your component. It includes the chip, the chips area, and the `igxPrefix` and `igxSuffix` directives.

```ts
import { Component } from '@angular/core';
import { IGX_CHIPS_DIRECTIVES } from 'igniteui-angular/chips';

@Component({
  selector: 'app-chip-sample',
  imports: [IGX_CHIPS_DIRECTIVES],
  template: `<igx-chip>Design</igx-chip>`,
})
export class ChipSampleComponent {}
```

### Prerequisites and Version Compatibility

Some Angular Chip features depend on the package version that your application uses.

Use the `igniteui-angular` package. The `outlined` input is available in 22.2.0 and later.

## Usage

Add a label to the Angular Chip, then add icons, a type, a size, and selection or removal as your layout needs.

### Layout

The Angular Chip supports content templating around its label. Mark content with the `igxPrefix` and `igxSuffix` directives to show it before and after the label, such as text or an [Icon](../layouts/icon.md). Icons in the chip follow its size, so they also come in three sizes: large, medium, and small.

```typescript
import { Component } from '@angular/core';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-chip-layout',
    templateUrl: './chip-layout.component.html',
    styleUrls: ['./chip-layout.component.scss'],
    // The chips only show their look, so inert keeps them out of the tab order and ignores pointer input.
    host: { inert: '' },
    imports: [IgxChipComponent, IgxIconComponent, IgxPrefixDirective, IgxSuffixDirective]
})
export class ChipLayoutComponent { }
```
```html
<div class="chip-layout-item">
    <span>Text</span>
    <igx-chip>Chip</igx-chip>
</div>
<div class="chip-layout-item">
    <span>Prefix</span>
    <igx-chip>
        <igx-icon igxPrefix name="arrow_upward"></igx-icon>
        Chip
    </igx-chip>
</div>
<div class="chip-layout-item">
    <span>Prefix+Suffix</span>
    <igx-chip>
        <igx-icon igxPrefix name="arrow_upward"></igx-icon>
        Chip
        <igx-icon igxSuffix name="account_circle"></igx-icon>
    </igx-chip>
</div>
<div class="chip-layout-item">
    <span>Suffix</span>
    <igx-chip>
        Chip
        <igx-icon igxSuffix name="account_circle"></igx-icon>
    </igx-chip>
</div>
```
```scss
/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

:host {
    --ig-size: var(--ig-size-medium);

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem 3.75rem;
    height: 100%;
}

.chip-layout-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.chip-layout-item span {
    color: var(--ig-gray-600);
    font-family: aktiv-grotesk, sans-serif;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.3px;
}
```

Place the label inside the chip. Set the [`selectIcon`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=selectIcon) and [`removeIcon`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=removeIcon) inputs to templates that replace the default select and remove icons.

```html
<igx-chip selectable removable [selectIcon]="selectIcon" [removeIcon]="removeIcon">
  <igx-icon igxPrefix>person</igx-icon>
  Ana Zane
  <igx-icon igxSuffix>mail</igx-icon>
</igx-chip>

<ng-template #selectIcon>
  <igx-icon>check_circle</igx-icon>
</ng-template>

<ng-template #removeIcon>
  <igx-icon>delete</igx-icon>
</ng-template>
```

Custom `selectIcon` and `removeIcon` templates replace the default icons, including their accessible labels, so give your icons an accessible label.

### Types

The Angular Chip provides two types: Default and Primary.

```typescript
import { Component } from '@angular/core';
import { IgxChipComponent } from 'igniteui-angular/chips';

@Component({
    selector: 'app-chip-types',
    templateUrl: './chip-types.component.html',
    styleUrls: ['./chip-types.component.scss'],
    // The chips only show their look, so inert keeps them out of the tab order and ignores pointer input.
    host: { inert: '' },
    imports: [IgxChipComponent]
})
export class ChipTypesComponent { }
```
```html
<div class="chip-types-item">
    <span>Default</span>
    <igx-chip removable>Chip</igx-chip>
</div>
<div class="chip-types-item">
    <span>Primary</span>
    <igx-chip removable variant="primary">Chip</igx-chip>
</div>
```
```scss
/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

:host {
    --ig-size: var(--ig-size-medium);

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem 3.75rem;
    height: 100%;
}

.chip-types-item {
    display: flex;
    align-items: center;
    gap: 1.875rem;
}

.chip-types-item span {
    color: var(--ig-gray-600);
    font-family: aktiv-grotesk, sans-serif;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.3px;
}
```

Leave [`variant`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=variant) unset for the default type, or set it to `primary` for the primary type. The variant also accepts `info`, `success`, `warning`, and `danger` for status colors.

```html
<igx-chip>Default</igx-chip>
<igx-chip variant="primary">Primary</igx-chip>
```

### Outlined

Set [`outlined`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=outlined) to render the chip with a border and the outlined background. You can combine it with any variant.

```typescript
import { Component } from '@angular/core';
import { IgxChipComponent, IgxChipTypeVariant } from 'igniteui-angular/chips';

@Component({
    selector: 'app-chip-outlined',
    styleUrls: ['./chip-outlined.component.scss'],
    templateUrl: './chip-outlined.component.html',
    imports: [IgxChipComponent]
})
export class ChipOutlinedComponent {
    public variants: { variant: IgxChipTypeVariant | undefined; label: string }[] = [
        { variant: undefined, label: 'Default' },
        { variant: IgxChipTypeVariant.PRIMARY, label: 'Primary' },
        { variant: IgxChipTypeVariant.INFO, label: 'Info' },
        { variant: IgxChipTypeVariant.SUCCESS, label: 'Success' },
        { variant: IgxChipTypeVariant.WARNING, label: 'Warning' },
        { variant: IgxChipTypeVariant.DANGER, label: 'Danger' }
    ];
}
```
```html
@for (item of variants; track item.label) {
    <div class="chip-outlined-item">
        <span>{{ item.label }}</span>
        <igx-chip [variant]="item.variant" outlined selectable removable>Chip</igx-chip>
    </div>
}
```
```scss
/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

:host {
    --ig-size: var(--ig-size-medium);

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem 2.5rem;
    height: 100%;
}

.chip-outlined-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.chip-outlined-item span {
    color: var(--ig-gray-600);
    font-family: aktiv-grotesk, sans-serif;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.3px;
}
```

```html
<igx-chip outlined variant="info">Draft</igx-chip>
```

### Size

The Angular Chip comes in three sizes:

- Large: suitable for interactive scenarios, such as action triggers.
- Medium: suitable for short areas, such as the recipient field of an email composer.
- Small: suitable for data-dense scenarios, such as the values in a grid cell.

```typescript
import { Component } from '@angular/core';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-chip-size',
    templateUrl: './chip-size.component.html',
    styleUrls: ['./chip-size.component.scss'],
    imports: [IgxChipComponent, IgxIconComponent, IgxPrefixDirective, IgxSuffixDirective]
})
export class ChipSizeComponent { }
```
```html
<div class="chip-size-item">
    <span>Small</span>
    <igx-chip class="size-small" selectable [selected]="true" removable>
        <igx-icon igxPrefix name="arrow_upward"></igx-icon>
        Chip
        <igx-icon igxSuffix name="account_circle"></igx-icon>
    </igx-chip>
</div>
<div class="chip-size-item">
    <span>Medium</span>
    <igx-chip class="size-medium" selectable [selected]="true" removable>
        <igx-icon igxPrefix name="arrow_upward"></igx-icon>
        Chip
        <igx-icon igxSuffix name="account_circle"></igx-icon>
    </igx-chip>
</div>
<div class="chip-size-item">
    <span>Large</span>
    <igx-chip class="size-large" selectable [selected]="true" removable>
        <igx-icon igxPrefix name="arrow_upward"></igx-icon>
        Chip
        <igx-icon igxSuffix name="account_circle"></igx-icon>
    </igx-chip>
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

.chip-size-item {
    display: flex;
    align-items: center;
    gap: 1.875rem;
}

.chip-size-item span {
    color: var(--ig-gray-600);
    font-family: aktiv-grotesk, sans-serif;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.3px;
}

.size-small {
    --ig-size: var(--ig-size-small);
}

.size-medium {
    --ig-size: var(--ig-size-medium);
}

.size-large {
    --ig-size: var(--ig-size-large);
}
```

Set `--ig-size` to `var(--ig-size-small)`, `var(--ig-size-medium)`, or `var(--ig-size-large)` to change the chip size. Set it on a chip, or on a container to size all chips inside it.

```css
.filter-chips {
  --ig-size: var(--ig-size-small);
}
```

### Interaction State

The Angular Chip can be enabled or disabled.

```typescript
import { Component } from '@angular/core';
import { IgxChipComponent } from 'igniteui-angular/chips';

@Component({
    selector: 'app-chip-interaction-state',
    templateUrl: './chip-interaction-state.component.html',
    styleUrls: ['./chip-interaction-state.component.scss'],
    // The chips only show their look, so inert keeps them out of the tab order and ignores pointer input.
    host: { inert: '' },
    imports: [IgxChipComponent]
})
export class ChipInteractionStateComponent { }
```
```html
<div class="chip-states-item">
    <span>Enabled</span>
    <igx-chip removable>Chip</igx-chip>
</div>
<div class="chip-states-item">
    <span>Disabled</span>
    <igx-chip removable disabled>Chip</igx-chip>
</div>
```
```scss
/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

:host {
    --ig-size: var(--ig-size-medium);

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem 3.75rem;
    height: 100%;
}

.chip-states-item {
    display: flex;
    align-items: center;
    gap: 1.875rem;
}

.chip-states-item span {
    color: var(--ig-gray-600);
    font-family: aktiv-grotesk, sans-serif;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.3px;
}
```

Set [`disabled`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=disabled) to prevent interaction. A disabled chip can't receive focus or be selected, and it doesn't render the remove icon, even when `removable` is set.

```html
<igx-chip disabled>Archived</igx-chip>
```

### State

When users interact with the Angular Chip, it changes from its default idle state to hover, focused, and selected.

```typescript
import { Component } from '@angular/core';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-chip-state',
    templateUrl: './chip-state.component.html',
    styleUrls: ['./chip-state.component.scss'],
    // The chips only show their look, so inert keeps them out of the tab order and ignores pointer input.
    host: { inert: '' },
    imports: [IgxChipComponent, IgxIconComponent, IgxPrefixDirective]
})
export class ChipStateComponent { }
```
```html
<div class="chip-state-item">
    <span>Idle</span>
    <igx-chip removable>
        <igx-icon igxPrefix name="arrow_upward"></igx-icon>
        Chip
    </igx-chip>
</div>
<div class="chip-state-item">
    <span>Hover</span>
    <igx-chip class="state-hover" removable>
        <igx-icon igxPrefix name="arrow_upward"></igx-icon>
        Chip
    </igx-chip>
</div>
<div class="chip-state-item">
    <span>Focused</span>
    <igx-chip class="state-focused" removable>
        <igx-icon igxPrefix name="arrow_upward"></igx-icon>
        Chip
    </igx-chip>
</div>
<div class="chip-state-item">
    <span>Selected</span>
    <igx-chip removable selectable [selected]="true">
        <igx-icon igxPrefix name="arrow_upward"></igx-icon>
        Chip
    </igx-chip>
</div>
```
```scss
/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

:host {
    --ig-size: var(--ig-size-medium);

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem 2.5rem;
    height: 100%;
}

.chip-state-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.chip-state-item span {
    color: var(--ig-gray-600);
    font-family: aktiv-grotesk, sans-serif;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.3px;
}

// Hover and focus only happen on interaction, so these chips show the colors the theme uses for them.
:host ::ng-deep igx-chip.state-hover .igx-chip__item {
    background: var(--hover-background);
    color: var(--hover-text-color);
}

// The focus ring color is transparent in themes that show focus through the background alone.
:host ::ng-deep igx-chip.state-focused .igx-chip__item {
    background: var(--focus-background);
    color: var(--focus-text-color);
    outline: 0.25rem solid var(--focus-shadow-color);
}
```

The selected state needs selection to be enabled. Set [`selectable`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=selectable) to let users toggle the chip by clicking it or pressing <kbd>Space</kbd>. Each toggle updates [`selected`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=selected) and emits a selection event with the new state. Set `selected` to define the initial state.

The cancelable `selectedChanging` event reports the new state in `selected`, and `selectedChanged` follows after the state changes. Bind `[(selected)]` to keep the state in your component. The select icon appears whenever `selected` is `true`.

```html
<igx-chip selectable [(selected)]="isBold" (selectedChanging)="onSelectedChanging($event)">Bold</igx-chip>
```

```ts
import { IChipSelectEventArgs } from 'igniteui-angular/chips';

public isBold = true;

public onSelectedChanging(event: IChipSelectEventArgs) {
  console.log(event.selected); // the new selected state
}
```

### Remove Chip

A removable Angular Chip shows a remove icon at its end that users activate to request the chip's removal.

```typescript
import { Component, ElementRef, Injector, ViewChild, afterNextRender, inject } from '@angular/core';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-chip-remove',
    templateUrl: './chip-remove.component.html',
    styleUrls: ['./chip-remove.component.scss'],
    imports: [IgxButtonDirective, IgxChipComponent]
})
export class ChipRemoveComponent {
    @ViewChild('chip', { read: ElementRef }) private chip?: ElementRef<HTMLElement>;
    @ViewChild('restore') private restore?: ElementRef<HTMLButtonElement>;

    public isVisible = true;
    private injector = inject(Injector);

    public toggleChip(visible: boolean) {
        this.isVisible = visible;

        // The control the user activated is gone, so move focus to the one that replaced it.
        afterNextRender(() => {
            const target = visible
                ? this.chip?.nativeElement.querySelector<HTMLElement>('.igx-chip__remove')
                : this.restore?.nativeElement;
            target?.focus();
        }, { injector: this.injector });
    }
}
```
```html
<div class="chip-remove-slot">
    @if (isVisible) {
        <igx-chip #chip removable (remove)="toggleChip(false)">Chip</igx-chip>
    } @else {
        <button #restore igxButton="flat" class="restore-button" (click)="toggleChip(true)">Restore chip</button>
    }
</div>
```
```scss
:host {
    --ig-size: var(--ig-size-medium);

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

/* A row as tall as the chip. The restore button can be taller in some themes, so it
   overflows the row evenly instead of resizing the sample when it replaces the chip. */
.chip-remove-slot {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.5rem;
}

.restore-button {
    --ig-size: var(--ig-size-small);
}
```

Set [`removable`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=removable) to show the icon. Activating the icon emits a remove event, but the chip stays on the page. Remove the chip, or the item it represents, in the event handler.

```html
@for (chip of chips; track chip.id) {
  <igx-chip [id]="chip.id" removable (remove)="onRemove($event)">{{ chip.text }}</igx-chip>
}
```

```ts
import { IBaseChipEventArgs } from 'igniteui-angular/chips';

public chips = [
  { id: 'angular', text: 'Angular' },
  { id: 'react', text: 'React' },
  { id: 'blazor', text: 'Blazor' },
];

public onRemove(event: IBaseChipEventArgs) {
  this.chips = this.chips.filter((chip) => chip.id !== event.owner.id);
}
```

### Chips Area

Use the [`IgxChipsArea`](mcp:get_api_reference?platform=angular&component=IgxChipsAreaComponent) component to organize a collection of chips.

```typescript
import { Component } from '@angular/core';
import { IgxChipComponent, IgxChipsAreaComponent } from 'igniteui-angular/chips';

@Component({
    selector: 'app-chip-area',
    templateUrl: './chip-area.component.html',
    styleUrls: ['./chip-area.component.scss'],
    imports: [IgxChipComponent, IgxChipsAreaComponent]
})
export class ChipAreaComponent {
    public chips = ['Chip', 'Chip', 'Chip'];
}
```
```html
<igx-chips-area>
    @for (label of chips; track $index) {
        <igx-chip>{{ label }}</igx-chip>
    }
</igx-chips-area>
```
```scss
:host {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

igx-chips-area {
    --ig-size: var(--ig-size-large);

    display: flex;
    flex-wrap: wrap;
    // The chips area takes the full width and packs its chips to the start.
    justify-content: center;
    gap: 0.5rem;
    padding: 0.25rem;
}
```

Inside the chips area, the arrow keys move focus between chips. When users drag a `draggable` chip over another chip, or press <kbd>Shift</kbd> and an arrow key, the chips area emits `reorder` with the new order. It also emits `selectionChange` with the selected chips. The chips area doesn't reorder the chips itself, so apply the new order to your data in the `reorder` handler.

```html
<igx-chips-area (reorder)="onReorder($event)">
  @for (chip of chips; track chip.id) {
    <igx-chip [id]="chip.id" [draggable]="true">{{ chip.text }}</igx-chip>
  }
</igx-chips-area>
```

```ts
import { IChipsAreaReorderEventArgs } from 'igniteui-angular/chips';

public onReorder(event: IChipsAreaReorderEventArgs) {
  this.chips = event.chipsArray.map((chip) => this.chips.find((item) => item.id === chip.id)!);
}
```

### Localization

The chip follows the language set through the global localization API, described in [Localization](../general/localization.md). Set `resourceStrings` to override the accessible labels of the default select and remove icons for a single chip.

```html
<igx-chip removable [resourceStrings]="{ igx_chip_remove: 'Remove tag' }">Design</igx-chip>
```

### Do/Don't

When using a Chip, the obround will automatically size itself to fit the content and you only need to adjust the size of the instance accordingly. If the Chip is used as an action trigger for related content, avoid using it in scenarios where there is only one available action, or for configurations presenting only one selectable option.

<style>{`
  .chip-guidance {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    margin-bottom: 24px;
  }

  .chip-guidance span {
    display: block;
  }

  .chip-guidance__image {
    display: block;
    width: 100%;
    height: auto;
    margin: 0 0 24px;
    border: 1px solid #D2DBE8;
  }

  .chip-guidance__label {
    margin-bottom: 12px;
    font-weight: 600;
  }

  .chip-guidance__label--do {
    color: light-dark(var(--ig-success-900), var(--ig-success-100));
  }

  .chip-guidance__label--dont {
    color: light-dark(var(--ig-error-700), var(--ig-error-300));
  }

  @media (max-width: 768px) {
    .chip-guidance {
      grid-template-columns: 1fr;
    }
  }
`}</style>

<div class="chip-guidance ig-typography__body-2">
  <div>
    
    <span class="chip-guidance__label chip-guidance__label--do">Do</span>
    <span>Use chips for grouped actions or a small set of related options.</span>
  </div>
  <div>
    
    <span class="chip-guidance__label chip-guidance__label--dont">Don't</span>
    <span>Avoid using a chip for single actions or single choices.</span>
  </div>
</div>

## Properties

The Angular Chip exposes properties for selection, removal, state, and appearance.

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| [`animateOnRelease`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=animateOnRelease) | `boolean` | `true` | Animates a dragged chip back to its place when it's released. |
| [`color`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=color) | `string` | n/a | Sets the chip background color. |
| [`data`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=data) | `any` | n/a | Stores data related to the chip. |
| [`disabled`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=disabled) | `boolean` | `false` | Disables the chip and hides the remove icon. |
| [`draggable`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=draggable) | `boolean` | `false` | Lets users drag the chip. |
| [`hideBaseOnDrag`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=hideBaseOnDrag) | `boolean` | `true` | Hides the original chip while a copy of it is dragged. |
| [`id`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=id) | `string` | generated | Sets the chip `id`. A unique value is generated when it isn't set. |
| [`outlined`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=outlined) | `boolean` | `false` | Renders the chip with the outlined style. |
| [`removable`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=removable) | `boolean` | `false` | Shows the remove icon. |
| [`removeIcon`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=removeIcon) | `TemplateRef` | n/a | Replaces the default remove icon. |
| [`resourceStrings`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=resourceStrings) | `IChipResourceStrings` | n/a | Sets custom strings for the built-in labels. |
| [`selectable`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=selectable) | `boolean` | `false` | Lets users toggle the selected state. |
| [`selected`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=selected) | `boolean` | `false` | Sets the selected state. Supports two-way binding. |
| [`selectIcon`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=selectIcon) | `TemplateRef` | n/a | Replaces the default select icon. |
| [`tabIndex`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=tabIndex) | `number` | `0` | Sets the chip `tabindex`. Disabled chips aren't focusable. |
| [`variant`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=variant) | `"primary" \| "info" \| "success" \| "warning" \| "danger"` | n/a | Sets the predefined color variant. |

The [`IgxChipsArea`](mcp:get_api_reference?platform=angular&component=IgxChipsAreaComponent) exposes properties for its size.

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| [`width`](mcp:get_api_reference?platform=angular&component=IgxChipsAreaComponent&member=width) | `number` | n/a | Sets the width of the chips area. |
| [`height`](mcp:get_api_reference?platform=angular&component=IgxChipsAreaComponent&member=height) | `number` | n/a | Sets the height of the chips area. |

## Events

The Angular Chip emits events when users select or remove it.

| Name | Description |
| -- | -- |
| [`selectedChanging`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=selectedChanging) | Emitted before the selected state changes. Set `cancel` to keep the current state. `selected` is the new state. |
| [`selectedChanged`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=selectedChanged) | Emitted after the selected state changes. |
| [`remove`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=remove) | Emitted when the user activates the remove icon or presses <kbd>Delete</kbd> on the chip. |
| [`chipClick`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=chipClick) | Emitted when the chip is clicked. Set `cancel` to prevent the selection change. |
| [`keyDown`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=keyDown) | Emitted when a key is pressed on the chip. Set `cancel` to skip the default keyboard handling. |
| [`moveStart`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=moveStart) | Emitted when the user starts dragging the chip. |
| [`moveEnd`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=moveEnd) | Emitted when the dragged chip is released and its return animation ends. |
| [`dragEnter`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=dragEnter) | Emitted when a dragged chip enters this chip. |
| [`dragLeave`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=dragLeave) | Emitted when a dragged chip leaves this chip. |
| [`dragOver`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=dragOver) | Emitted while a dragged chip is over this chip. |
| [`dragDrop`](mcp:get_api_reference?platform=angular&component=IgxChipComponent&member=dragDrop) | Emitted when a dragged chip is dropped on this chip. |

The [`IgxChipsArea`](mcp:get_api_reference?platform=angular&component=IgxChipsAreaComponent) emits events for the chips inside it.

| Name | Description |
| -- | -- |
| [`reorder`](mcp:get_api_reference?platform=angular&component=IgxChipsAreaComponent&member=reorder) | Emitted with the new order in `chipsArray` when a chip should move to a new position. |
| [`selectionChange`](mcp:get_api_reference?platform=angular&component=IgxChipsAreaComponent&member=selectionChange) | Emitted with the selected chips in `newSelection` when a chip is selected or deselected. |
| [`moveStart`](mcp:get_api_reference?platform=angular&component=IgxChipsAreaComponent&member=moveStart) | Emitted when the user starts dragging a chip in the area. |
| [`moveEnd`](mcp:get_api_reference?platform=angular&component=IgxChipsAreaComponent&member=moveEnd) | Emitted when the user stops dragging a chip in the area. |

## Styling

Style the Angular Chip with its CSS variables for token-level changes, and with its CSS classes when you need to target a specific element.

```typescript
import { Component, inject } from '@angular/core';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';

// The outline takes the chip text color, and the filled half keeps the warning color.
const halfStarIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.01 4.38.38-3.32 2.88 1 4.28L12 15.4z"/><path style="fill: var(--ig-warn-400)" d="M12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/></svg>';
const peopleIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>';

@Component({
    selector: 'app-chip-styling',
    styleUrls: ['./chip-styling.component.scss'],
    templateUrl: './chip-styling.component.html',
    imports: [IgxChipComponent, IgxIconComponent, IgxPrefixDirective, IgxSuffixDirective]
})
export class ChipStylingSampleComponent {
    constructor() {
        const iconService = inject(IgxIconService);
        iconService.addSvgIconFromText('star_half', halfStarIcon, 'styling');
        iconService.addSvgIconFromText('people', peopleIcon, 'styling');
    }
}
```
```html
<igx-chip class="tag-chip" removable>
    Prototyping
</igx-chip>
<igx-chip class="filter-chip" selectable [selected]="true">
    Motion Design
</igx-chip>
<igx-chip class="product-chip" outlined>
    Sony Headphones
    <igx-icon igxSuffix family="styling" name="star_half"></igx-icon>
</igx-chip>
<igx-chip class="contact-chip" outlined>
    <igx-icon igxPrefix family="styling" name="people"></igx-icon>
    Simon and Lisa
</igx-chip>
```
```scss
:host {
    --ig-size: var(--ig-size-medium);

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem 1.875rem;
    height: 100%;
}

// Default chip
.tag-chip {
    --ig-chip-background: var(--ig-error-50);
    --ig-chip-text-color: var(--ig-error-50-contrast);
    --ig-chip-hover-background: var(--ig-error-100);
    --ig-chip-hover-text-color: var(--ig-error-100-contrast);
    --ig-chip-focus-background: var(--ig-error-200);
    --ig-chip-focus-text-color: var(--ig-error-200-contrast);
    --ig-chip-remove-icon-color: var(--ig-error-500);
    --ig-chip-remove-icon-color-focus: var(--ig-error-500);
}

// Selected chip
.filter-chip {
    --ig-chip-selected-background: var(--ig-primary-50);
    --ig-chip-selected-text-color: var(--ig-primary-50-contrast);
    --ig-chip-hover-selected-background: var(--ig-primary-100);
    --ig-chip-hover-selected-text-color: var(--ig-primary-100-contrast);
    --ig-chip-focus-selected-background: var(--ig-primary-200);
    --ig-chip-focus-selected-text-color: var(--ig-primary-200-contrast);
}

// The start element holds the select icon.
:host ::ng-deep .filter-chip .igx-chip__start {
    color: var(--ig-primary-500);
}

// Outlined chips
// The design's blue-gray and orange are not in the theme palette, so these two
// chips take the design's own colors and darken them for hover and focus.
.product-chip {
    --ig-chip-outlined-background: var(--ig-surface-base);
    --ig-chip-outlined-text-color: #556c86;
    --ig-chip-border-color: #556c86;
    --ig-chip-hover-outlined-text-color: color-mix(in srgb, #556c86, black 20%);
    --ig-chip-hover-border-color: color-mix(in srgb, #556c86, black 20%);
    --ig-chip-focus-outlined-text-color: color-mix(in srgb, #556c86, black 40%);
    --ig-chip-focus-border-color: color-mix(in srgb, #556c86, black 40%);
}

.contact-chip {
    --ig-chip-outlined-background: #ffe1d6;
    --ig-chip-outlined-text-color: black;
    --ig-chip-border-color: #f95924;
    --ig-chip-hover-outlined-background: color-mix(in srgb, #ffe1d6, #f95924 25%);
    --ig-chip-hover-outlined-text-color: black;
    --ig-chip-hover-border-color: #f95924;
    --ig-chip-focus-outlined-background: color-mix(in srgb, #ffe1d6, #f95924 50%);
    --ig-chip-focus-outlined-text-color: black;
    --ig-chip-focus-border-color: #f95924;
}

:host ::ng-deep .contact-chip .igx-chip__start {
    color: #933313;
}
```

| Variable | What it changes |
| -- | -- |
| `--ig-chip-background` | Background of the default (not outlined) chip. |
| `--ig-chip-text-color` | Text color of the default chip. |
| `--ig-chip-outlined-background` | Background of the outlined chip. |
| `--ig-chip-outlined-text-color` | Text color of the outlined chip. |
| `--ig-chip-border-color` | Border color of the outlined chip. |
| `--ig-chip-border-radius` | Corner radius of the chip. |
| `--ig-chip-hover-background` | Background of the default chip on hover. |
| `--ig-chip-focus-background` | Background of the default chip on focus. |
| `--ig-chip-focus-shadow-color` | Focus shadow color in the Bootstrap and Indigo themes. |
| `--ig-chip-selected-background` | Background of a selected chip. |
| `--ig-chip-selected-text-color` | Text color of a selected chip. |
| `--ig-chip-disabled-background` | Background of a disabled chip. |
| `--ig-chip-disabled-text-color` | Text color of a disabled chip. |
| `--ig-chip-remove-icon-color` | Color of the remove icon. |
| `--ig-chip-remove-icon-color-focus` | Color of the remove icon on focus. |
| `--ig-chip-size` | Height of the chip. |
| `--ig-size` | Shared component size token used to derive the chip size. |

| Selector | Description |
| -- | -- |
| `igx-chip` | The chip host element. |
| `.igx-chip--outlined` | Applied when `outlined` is set. |
| `.igx-chip--disabled` | Applied when `disabled` is set. |
| `.igx-chip--primary` | Applied when `variant` is `primary`. The `info`, `success`, `warning`, and `danger` variants use the matching modifier. |
| `.igx-chip__item` | The chip wrapper. |
| `.igx-chip__item--selected` | Applied to the wrapper while the chip is selected. |
| `.igx-chip__start` | The container for the select icon and the prefix content. |
| `.igx-chip__content` | The container for the label. |
| `.igx-chip__end` | The container for the suffix content and the remove control. |
| `.igx-chip__remove` | The remove control. |

### Sass Theming

Use the `chip-theme` function when your application customizes Ignite UI themes through Sass. Set `$background`, or `$outlined-background` for outlined chips, and the theme derives the text, hover, focus, and selected colors from it. Override any other parameter when you need a specific value.

```scss
@use "igniteui-angular/theming" as *;

$custom-chip-theme: chip-theme(
  $background: #011627,
  $remove-icon-color: #fecc47
);

:root {
  @include tokens($custom-chip-theme);
}
```

### CSS Variables

Set the chip CSS variables directly when you need local styling without a Sass build step. Set them on a chip, or on a container to style all chips inside it.

```css
.filter-chips {
  --ig-chip-background: var(--ig-primary-500);
  --ig-chip-text-color: var(--ig-primary-500-contrast);
  --ig-chip-remove-icon-color: var(--ig-primary-500-contrast);
}
```

To style a single element of the chip, target its CSS class.

```css
igx-chip .igx-chip__end {
  color: var(--ig-gray-400);
}
```

### Styling with Tailwind

You can style the Angular Chip with Tailwind utility classes, and set its CSS variables through arbitrary properties such as `[--ig-chip-background:var(--ig-primary-600)]`. Make sure to set up Tailwind first, as described in [Tailwind](../themes/tailwind.md).

```typescript
import { Component, ElementRef, Injector, afterNextRender, inject } from '@angular/core';
import { IChipKeyDownEventArgs, IgxChipComponent } from 'igniteui-angular/chips';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxPrefixDirective } from 'igniteui-angular/input-group';
import { icons } from './icons';

interface Activity {
    label: string;
    icon: string;
}

const activities: Activity[] = [
    { label: 'Yoga', icon: 'self_improvement' },
    { label: 'Swimming', icon: 'pool' },
    { label: 'Hiking', icon: 'hiking' },
    { label: 'Lifting', icon: 'fitness_center' },
    { label: 'Cycling', icon: 'directions_bike' },
    { label: 'Tennis', icon: 'sports_tennis' },
    { label: 'Soccer', icon: 'sports_soccer' },
    { label: 'Baseball', icon: 'sports_baseball' }
];

@Component({
    selector: 'app-chip-tailwind-styling',
    styleUrls: ['./chip-tailwind-styling.component.scss'],
    templateUrl: './chip-tailwind-styling.component.html',
    imports: [IgxChipComponent, IgxIconComponent, IgxPrefixDirective]
})
export class ChipTailwindStylingSampleComponent {
    public selected: Activity[] = activities.slice(0, 2);

    private element: HTMLElement = inject(ElementRef).nativeElement;
    private injector = inject(Injector);

    constructor() {
        const iconService = inject(IgxIconService);
        Object.entries(icons).forEach(([name, svg]) => iconService.addSvgIconFromText(name, svg, 'activity'));
    }

    public get available(): Activity[] {
        return activities.filter((activity) => !this.selected.includes(activity));
    }

    // The chip only handles Space when it is selectable, so Enter and Space add the activity here.
    public onAvailableKeyDown(event: IChipKeyDownEventArgs, activity: Activity) {
        if (event.originalEvent.key === 'Enter' || event.originalEvent.key === ' ') {
            this.addActivity(activity);
        }
    }

    public addActivity(activity: Activity) {
        const available = this.available;
        const rest = available.filter((item) => item !== activity);
        const next = rest[Math.min(available.indexOf(activity), rest.length - 1)];
        this.selected = [...this.selected, activity];
        this.focusChip(next ? 'available' : 'selected', next ? next.label : activity.label);
    }

    public removeActivity(activity: Activity) {
        const rest = this.selected.filter((item) => item !== activity);
        const next = rest[Math.min(this.selected.indexOf(activity), rest.length - 1)];
        this.selected = rest;
        this.focusChip(next ? 'selected' : 'available', next ? next.label : activity.label);
    }

    // The chip that had focus is gone, so focus a chip in the same list, or the moved chip when that list is empty.
    private focusChip(list: 'selected' | 'available', label: string) {
        afterNextRender(() => {
            const chip = this.element.querySelector<HTMLElement>(`[data-activity="${label}"]`);
            const control = list === 'selected' ? chip?.querySelector<HTMLElement>('.igx-chip__remove') : chip;
            control?.focus();
        }, { injector: this.injector });
    }
}
```
```html
<div
    role="group"
    aria-labelledby="activity-title"
    class="box-border flex w-full max-w-[517px] flex-col gap-4 rounded-2xl bg-[var(--color-activity-surface)] p-4 font-[aktiv-grotesk,sans-serif] [--ig-font-family:aktiv-grotesk,sans-serif] [--ig-size:var(--ig-size-large)]">
    <!-- Not a heading: the theme's heading styles sit in a later CSS layer and would override these utilities. -->
    <span id="activity-title" class="flex h-8 items-center text-xl font-medium leading-6 text-[var(--color-activity-ink)]">Preferred Activity</span>
    <div role="group" aria-label="Selected activities" class="box-border flex min-h-[72px] flex-wrap items-center gap-4 rounded-2xl bg-white px-6 py-5">
        @for (activity of selected; track activity.label) {
            <igx-chip
                [attr.data-activity]="activity.label"
                class="flex [--ig-chip-border-radius:0.5rem] [--ig-chip-background:var(--color-activity-primary)] [--ig-chip-text-color:white] [--ig-chip-hover-background:var(--color-activity-primary-strong)] [--ig-chip-hover-text-color:white] [--ig-chip-focus-background:var(--color-activity-primary-strong)] [--ig-chip-focus-text-color:white] [--ig-chip-remove-icon-color:white] [--ig-chip-remove-icon-color-focus:white]"
                removable
                [removeIcon]="removeIcon"
                (remove)="removeActivity(activity)">
                <igx-icon igxPrefix family="activity" [name]="activity.icon"></igx-icon>
                <span class="text-sm font-medium leading-5 tracking-[0.25px]">{{ activity.label }}</span>
            </igx-chip>
            <ng-template #removeIcon>
                <igx-icon class="[--ig-icon-size:1.125rem]" family="activity" name="close" [attr.aria-label]="'Remove ' + activity.label"></igx-icon>
            </ng-template>
        }
        <!-- The theme colors icons from their token in a later CSS layer, so a text color utility would not apply. -->
        <igx-icon class="ms-auto [--ig-icon-color:var(--color-activity-primary)] [--ig-icon-size:1.125rem]" family="activity" name="add" aria-hidden="true"></igx-icon>
    </div>
    <div role="group" aria-label="Add an activity" class="flex flex-wrap gap-4 rounded-2xl bg-white p-5">
        @for (activity of available; track activity.label) {
            <igx-chip
                [attr.data-activity]="activity.label"
                class="flex [--ig-chip-border-radius:0.5rem] [--ig-chip-border-color:var(--color-activity-primary)] [--ig-chip-outlined-background:var(--color-activity-tint)] [--ig-chip-outlined-text-color:var(--color-activity-primary)] [--ig-chip-hover-outlined-background:var(--color-activity-tint-strong)] [--ig-chip-hover-outlined-text-color:var(--color-activity-primary)] [--ig-chip-hover-border-color:var(--color-activity-primary)] [--ig-chip-focus-outlined-background:var(--color-activity-tint-strong)] [--ig-chip-focus-outlined-text-color:var(--color-activity-primary)] [--ig-chip-focus-border-color:var(--color-activity-primary)]"
                outlined
                (chipClick)="addActivity(activity)"
                (keyDown)="onAvailableKeyDown($event, activity)">
                <igx-icon igxPrefix family="activity" [name]="activity.icon"></igx-icon>
                <span class="text-sm font-medium leading-5 tracking-[0.25px]">{{ activity.label }}</span>
            </igx-chip>
        }
    </div>
</div>
```
```scss
/* Aktiv Grotesk, from the same Adobe Fonts kit the docs use. */
@import url("https://use.typekit.net/bng2zgw.css");

:host {
    /* The design's own palette. It lives here instead of coming from the theme
       palette, so the sample keeps its colors in every theme. */
    --color-activity-primary: #006ae6;
    --color-activity-primary-strong: #0055b8;
    --color-activity-tint: #e6f2ff;
    --color-activity-tint-strong: #cce4ff;
    --color-activity-surface: #e5ebf3;
    --color-activity-ink: #00142b;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
}
```

## Accessibility

The Angular Chip supports keyboard operation and exposes its state to assistive technology.

### Keyboard Interaction

Keyboard users reach each chip with <kbd>Tab</kbd>, followed by its remove control when the chip is removable. Disabled chips are skipped.

| Key | Action |
| -- | -- |
| <kbd>Space</kbd> | On the chip, toggles `selected` when `selectable` is set. |
| <kbd>Space</kbd> / <kbd>Enter</kbd> | On the remove control, emits `remove`. |
| <kbd>Delete</kbd> | On a removable chip, emits `remove`. |
| <kbd>Arrow Left</kbd> / <kbd>Arrow Right</kbd> | Inside an `igx-chips-area`, moves focus to the previous or next chip. |
| <kbd>Shift</kbd> + <kbd>Arrow Left</kbd> / <kbd>Arrow Right</kbd> | Inside an `igx-chips-area`, emits `reorder` with the focused chip moved one position. |

### Screen Readers / ARIA

The Angular Chip exposes its state through native semantics and ARIA attributes, and takes its accessible name from its content.

- The chip host has `role="option"`, and `aria-selected` reflects the `selected` state.
- The `igx-chips-area` element has `role="listbox"` and the `aria-label` "chip area".
- The default select and remove icons have accessible labels.
- A disabled chip is removed from the tab order, but no ARIA attribute exposes its disabled state.

You can change the labels of the default icons, as shown in [Localization](#localization).

### Accessibility Compliance

Infragistics documents Ignite UI for Angular accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| -- | -- |
| [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color) | A selected chip shows the select icon in addition to its selected colors. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | Selection, removal, and reordering inside a chips area work from the keyboard. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap) | The chip handles its own keys but never intercepts <kbd>Tab</kbd>, so focus can always leave it. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order) | Inside a chips area, the arrow keys move focus between chips in their visual order. |
| [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible) | The focused chip shows a focus background, plus a focus shadow in the Bootstrap and Indigo themes. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The chip exposes the `option` role and its selected state, and the chips area exposes the `listbox` role. |

Your responsibilities:

- Give every chip a text label that identifies the item it represents.
- Move focus to a logical place, such as the next chip, after you remove a chip in the remove event handler.
- Keep sufficient contrast between the chip background and its text and icons when you override the theme colors.
- Keep a visible focus indicator when you restyle the chip.
- Keep chips and their remove controls large enough to tap when you use the small size or a custom `--ig-chip-size`.

- Place chips that users select inside an `igx-chips-area`, so their `option` role has a `listbox` parent.
- Label custom select and remove icon templates, as described in [Layout](#layout).

Known exceptions:

- The remove control is focusable and contains a labeled icon, but it doesn't expose a `button` role.
- The disabled state isn't exposed through ARIA, so screen readers don't announce a disabled chip as disabled. Describe the state in nearby text when users need to know it.

## Troubleshooting

Use this section when a chip doesn't behave or look as expected after a change or an upgrade.

### Why does the chip stay on the page after I click the remove icon?

The remove event only notifies your application. Remove the chip in the event handler, as shown in [Remove Chip](#remove-chip).

### Why doesn't my focus outline variable apply anymore?

In `igniteui-angular` 22.2.0, the `$focus-outline-color` and `$focus-selected-outline-color` parameters of `chip-theme` were replaced by `$focus-shadow-color` and `$focus-selected-shadow-color`. Rename the parameters, and the matching `--ig-chip-*` variables, in your styles.

## API References

Use these API references for the complete chip API surface.

[`IgxChip`](mcp:get_api_reference?platform=angular&component=IgxChipComponent)
[`IgxIcon`](mcp:get_api_reference?platform=angular&component=IgxIconComponent)

[`IgxChipsArea`](mcp:get_api_reference?platform=angular&component=IgxChipsAreaComponent)

## Dependencies

The Angular Chip renders its default select and remove icons with the [`IgxIcon`](mcp:get_api_reference?platform=angular&component=IgxIconComponent) component, which is included with the chip.

Icons that use Material Icons names, such as `<igx-icon>person</igx-icon>`, require the Material Icons font. Add `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">` to your `index.html`. The Sass styling workflow uses the `chip-theme` and `icon-theme` functions.

## Additional Resources

Use these resources for support and related Ignite UI for Angular documentation.

- [Icon](../layouts/icon.md)
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

## Related Components

Use these related components when a chip isn't the best match for the interaction.

- [Button](./button.md) - A control that runs a command, such as submitting a form or opening a dialog.
- [Checkbox](./checkbox.md) - A form control for an on/off choice or a set of independent choices.
- [Badge](./badge.md) - A small, non-interactive indicator for a status, count, or notification.

## FAQ

  **Q: When should I use a Chip instead of a Button?**

    A Ignite UI for Angular Chip represents an item, such as a tag, filter, or recipient, that users can select or remove. A Button runs a single command, so choose it when users trigger an action rather than pick or dismiss an item.
  

  **Q: How do I allow only one selected chip at a time?**

    Handle the selection event of each Ignite UI for Angular Chip in the group. When a chip becomes selected, set `selected` to `false` on the other chips.
  

  **Q: Can I replace the Chip's remove icon?**

    Yes. Pass a template to the `removeIcon` input of the Ignite UI for Angular Chip, and give the icon in it an accessible label, because it replaces the labeled default icon.
  

  **Q: Can users reorder chips?**

    Yes. Users can drag `draggable` chips, or press <kbd>Shift</kbd> and an arrow key, inside an `igx-chips-area`. The Ignite UI for Angular chips area reports the new order, and your application applies it.
  

  **Q: How do I change the size of the Chip?**

    Assign one of the shared size tokens, `var(--ig-size-small)`, `var(--ig-size-medium)`, or `var(--ig-size-large)`, to the `--ig-size` CSS variable of the Ignite UI for Angular Chip.
  


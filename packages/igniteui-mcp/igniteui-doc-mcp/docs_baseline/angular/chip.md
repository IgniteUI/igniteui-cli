---
title: Angular Chip Component – Ignite UI for Angular | Infragistics | MIT license
_description: The Ignite UI for Angular Chip component provide compact elements that represent an input, attribute, or action.
_keywords: Angular Chip, Angular Chip Component, Angular Chip Area, Angular Chip Area Component, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular UI Components
_license: MIT
_tocName: Chip
---

# Angular Chip Component Overview

[`The Angular Chip component`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html) is a visual element that displays information in an oval container. The component has various properties - it can be templated, deleted, and selected. Multiple chips can be reordered and visually connected to each other, using the chip area as a container.

## Angular Chip Example

```typescript
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { IBaseChipEventArgs, IgxChipComponent } from 'igniteui-angular/chips';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective } from 'igniteui-angular/input-group';


@Component({
    selector: 'app-chip-simple',
    styleUrls: ['./chip-simple.component.scss'],
    templateUrl: './chip-simple.component.html',
    imports: [IgxChipComponent, IgxIconComponent, IgxPrefixDirective]
})

export class ChipSimpleComponent {
    changeDetectionRef = inject(ChangeDetectorRef);

    public chipList = [
        {
           text: 'Country',
           id: '1',
           icon: 'place'
        },
        {
            text: 'City',
            id: '2',
            icon: 'location_city'
        },
        {
            text: 'Town',
            id: '3',
            icon: 'store'
        },
        {
            text: 'First Name',
            id: '4',
            icon: 'person_pin'
        }
    ];


    public chipRemoved(event: IBaseChipEventArgs) {
        this.chipList = this.chipList.filter((item) => item.id !== event.owner.id);
        this.changeDetectionRef.detectChanges();
    }
}
```
```html
<div class="sample-container">
  @for (chip of chipList; track chip) {
    <igx-chip
      [id]="chip.id"
      [selectable]="true"
      [removable]="true"
      (remove)="chipRemoved($event)"
      >
      <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
      {{chip.text}}
    </igx-chip>
  }
</div>
```
```scss
igx-chip {
    margin-right: 5px;
}

.sample-container {
    padding-top: 30px;
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Chip

To get started with the Ignite UI for Angular Chip component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the **IgxChipsModule** in the **app.module.ts** file:

```typescript
// app.module.ts

import { IgxChipsModule } from 'igniteui-angular/chips';
// import { IgxChipsModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxChipsModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxChipComponent` as a standalone dependency, or use the [`IGX_CHIPS_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/chips/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_CHIPS_DIRECTIVES } from 'igniteui-angular/chips';
import { NgFor } from '@angular/common';
// import { IGX_CHIPS_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: `
    <igx-chip *ngFor="let chip of chipList" [id]="chip.id">
      {{ chip.text }}
    </igx-chip>
  `,
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IGX_CHIPS_DIRECTIVES, NgFor],
})
export class HomeComponent {
  public chipList = [
    { text: 'Country', id: '1', icon: 'place' },
    { text: 'City', id: '2', icon: 'location_city' },
    { text: 'Address', id: '3', icon: 'home' },
    { text: 'Street', id: '4', icon: 'streetview' },
  ];
}
```

Now that you have the Ignite UI for Angular Chips module or directives imported, you can start using the `igx-chip` component.

## Using the Angular Chip Component

The [`IgxChipComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html) has an [`id`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html#id) input property so that the different chip instances can be easily distinguished. If an [`id`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html#id) is not provided, it will be automatically generated.

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id">
  {{chip.text}}
</igx-chip>
```

### Selection

<img class="responsive-img"  src="../images/chip/selecting_default.gif" alt="Selecting Default" />

Selection can be enabled by setting the [`selectable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html#selectable) input property to `true`. When selecting a chip, the [`selectedChanging`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html#selectedChanging) event is fired. It provides the new [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ichipselecteventargs.html#selected) value so you can get the new state and the original event in [`originalEvent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ichipselecteventargs.html#originalEvent) that triggered the selection change. If this is not done through user interaction but instead is done by setting the [`selected`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ichipselecteventargs.html#selected) property programmatically, the [`originalEvent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/ichipselecteventargs.html#originalEvent) argument has a value of `null`.

```html
<igx-chip *ngFor="let chip of chipList" [selectable]="true">
  <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
  {{chip.text}}
</igx-chip>
```

### Removing

<img class="responsive-img"  src="../images/chip/removing_default.gif" alt="Removing Default" />

Removing can be enabled by setting the [`removable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html#removable) input to `true`. When enabled, a remove button is rendered at the end of the chip. When removing a chip, the [`remove`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html#remove) event is emitted.

By default, the chip doesn't get automatically removed from the DOM tree upon clicking on the remove icon. Removal needs to be handled manually.

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id" [removable]="true" (remove)="chipRemoved($event)">
  <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
  {{chip.text}}
</igx-chip>
```

```typescript
public chipRemoved(event: IBaseChipEventArgs) {
    this.chipList = this.chipList.filter((item) => {
        return item.id !== event.owner.id;
    });
    this.changeDetectionRef.detectChanges();
}
```

### Dragging

Dragging can be enabled by setting the [`draggable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html#draggable) input to `true`. When enabled, you can click and drag the chip around.

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id" [draggable]="true">
  <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
  {{chip.text}}
</igx-chip>
```

> [!NOTE]
> To reorder the chips you need to handle the event using the [`IgxChipsAreaComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipsareacomponent.html).

<div class="divider"></div>

**To create the demo sample, we will use the features above:**

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id" [selectable]="true" [removable]="true" (remove)="chipRemoved($event)">
  <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
   {{chip.text}}
</igx-chip>
```

Then, we need to add the `chipList` and the function, that handles the [`remove`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html#remove) event:

```ts
import { IBaseChipEventArgs } from 'igniteui-angular/chips';
// import { IBaseChipEventArgs } from '@infragistics/igniteui-angular'; for licensed package
...
public chipList = [
    {
        text: 'Country',
        id: '1',
        icon: 'place'
    },
    {
        text: 'City',
        id: '2',
        icon: 'location_city'
    },
    {
        text: 'Town',
        id: '3',
        icon: 'store'
    },
    {
        text: 'First Name',
        id: '4',
        icon: 'person_pin'
    }
];

private changeDetectionRef: any;

public chipRemoved(event: IBaseChipEventArgs) {
    this.chipList = this.chipList.filter((item) => {
        return item.id !== event.owner.id;
    });
    this.changeDetectionRef.detectChanges();
}
```

If everything went well, you should see this in your browser:

```typescript
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { IBaseChipEventArgs, IgxChipComponent } from 'igniteui-angular/chips';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective } from 'igniteui-angular/input-group';


@Component({
    selector: 'app-chip-simple',
    styleUrls: ['./chip-simple.component.scss'],
    templateUrl: './chip-simple.component.html',
    imports: [IgxChipComponent, IgxIconComponent, IgxPrefixDirective]
})

export class ChipSimpleComponent {
    changeDetectionRef = inject(ChangeDetectorRef);

    public chipList = [
        {
           text: 'Country',
           id: '1',
           icon: 'place'
        },
        {
            text: 'City',
            id: '2',
            icon: 'location_city'
        },
        {
            text: 'Town',
            id: '3',
            icon: 'store'
        },
        {
            text: 'First Name',
            id: '4',
            icon: 'person_pin'
        }
    ];


    public chipRemoved(event: IBaseChipEventArgs) {
        this.chipList = this.chipList.filter((item) => item.id !== event.owner.id);
        this.changeDetectionRef.detectChanges();
    }
}
```
```html
<div class="sample-container">
  @for (chip of chipList; track chip) {
    <igx-chip
      [id]="chip.id"
      [selectable]="true"
      [removable]="true"
      (remove)="chipRemoved($event)"
      >
      <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
      {{chip.text}}
    </igx-chip>
  }
</div>
```
```scss
igx-chip {
    margin-right: 5px;
}

.sample-container {
    padding-top: 30px;
}
```

### Chip Templates

All of the [`IgxChipComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html)'s elements are templatable.

You can template the `prefix` and the `suffix` of the chip, using the `IgxPrefix` and the `IgxSuffix` directives:

<img class="responsive-img"  src="../images/chip/prefix_suffix.jpg" alt="Chip Prefix and Suffix" />

```html
<igx-chip>
  <igx-icon igxPrefix>insert_emoticon</igx-icon>
  <igx-icon igxSuffix style="transform: rotate(180deg)">insert_emoticon</igx-icon>
  <span>Why not both?</span>
</igx-chip>
```

You can customize the size of the chip, using the [`--ig-size`] CSS variable. By default it is set to `var(--ig-size-large)`. It can also be set to `var(--ig-size-medium)` or `var(--ig-size-small)`, while everything inside the chip retains its relative positioning:

<img class="responsive-img"  src="../images/chip/density.jpg" alt="Chip Density" />

```html
<igx-chip>Hi! My name is Chip!</igx-chip>

<igx-chip style="--ig-size: var(--ig-size-medium)">
  I can be smaller!
</igx-chip>

<igx-chip style="--ig-size: var(--ig-size-small)">
  <igx-icon igxPrefix>child_care</igx-icon>
  Even tiny!
</igx-chip>
```

You can customize the `select icon`, using the [`selectIcon`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html#selecticon) input. It accepts values of type `TemplateRef` and overrides the default icon while retaining the same functionality.

<img class="responsive-img"  src="../images/chip/selecting_custom.gif" alt="Selecting Custom" />

```html
<igx-chip *ngFor="let chip of chipList" [selectable]="true" [selectIcon]="mySelectIcon">
  <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
  {{chip.text}}
</igx-chip>

<ng-template #mySelectIcon>
  <igx-icon>check_circle</igx-icon>
</ng-template>
```

You can customize the `remove icon`, using the [`removeIcon`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html#removeIcon) input. It takes a value of type `TemplateRef` and renders it instead of the default remove icon.

<img class="responsive-img"  src="../images/chip/remove_icons.jpg" alt="Remove Icons" />

```html
<igx-chip *ngFor="let chip of chipList" [removable]="true" [removeIcon]="myRemoveIcon">
  <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
  {{chip.text}}
</igx-chip>

<ng-template #myRemoveIcon>
  <igx-icon>delete</igx-icon>
</ng-template>
```

<div class="divider"></div>

### Demo

To create the demo sample below, we will use the features above:

```html
<igx-chip
*ngFor="let chip of chipList"
[id]="chip.id"
[selectable]="true"
[removable]="true"
(remove)="chipRemoved($event)"
>
    <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
    {{chip.text}}
</igx-chip>
```

Then, we need to add the `chipList` and the function, that handles the [`remove`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html#remove) event:

```ts
import { IBaseChipEventArgs } from 'igniteui-angular/chips';
// import { IBaseChipEventArgs } from '@infragistics/igniteui-angular'; for licensed package
...
public chipList = [
    {
        text: 'Country',
        id: '1',
        icon: 'place'
    },
    {
        text: 'City',
        id: '2',
        icon: 'location_city'
    },
    {
        text: 'Town',
        id: '3',
        icon: 'store'
    },
    {
        text: 'First Name',
        id: '4',
        icon: 'person_pin'
    }
];

private changeDetectionRef: any;

public chipRemoved(event: IBaseChipEventArgs) {
    this.chipList = this.chipList.filter((item) => {
        return item.id !== event.owner.id;
    });
    this.changeDetectionRef.detectChanges();
}
```

If everything went well, you should see this in your browser:


```typescript
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { IBaseChipEventArgs, IgxChipComponent } from 'igniteui-angular/chips';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective } from 'igniteui-angular/input-group';


@Component({
    selector: 'app-chip-simple',
    styleUrls: ['./chip-simple.component.scss'],
    templateUrl: './chip-simple.component.html',
    imports: [IgxChipComponent, IgxIconComponent, IgxPrefixDirective]
})

export class ChipSimpleComponent {
    changeDetectionRef = inject(ChangeDetectorRef);

    public chipList = [
        {
           text: 'Country',
           id: '1',
           icon: 'place'
        },
        {
            text: 'City',
            id: '2',
            icon: 'location_city'
        },
        {
            text: 'Town',
            id: '3',
            icon: 'store'
        },
        {
            text: 'First Name',
            id: '4',
            icon: 'person_pin'
        }
    ];


    public chipRemoved(event: IBaseChipEventArgs) {
        this.chipList = this.chipList.filter((item) => item.id !== event.owner.id);
        this.changeDetectionRef.detectChanges();
    }
}
```
```html
<div class="sample-container">
  @for (chip of chipList; track chip) {
    <igx-chip
      [id]="chip.id"
      [selectable]="true"
      [removable]="true"
      (remove)="chipRemoved($event)"
      >
      <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
      {{chip.text}}
    </igx-chip>
  }
</div>
```
```scss
igx-chip {
    margin-right: 5px;
}

.sample-container {
    padding-top: 30px;
}
```

## Chip Area

The [`IgxChipsAreaComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipsareacomponent.html) is used when handling more complex scenarios that require interaction between chips (dragging, selection, navigation, etc.).

### Reorder Chips

<img class="responsive-img"  src="../images/chip/dragging.gif" alt="Dragging" />

The chip can be dragged by the end-user in order to change its position. The dragging is disabled by default but can be enabled using the [`draggable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html#draggable) input property. You need to handle the actual chip reordering manually. This is where the chip area comes in handy since it provides the [`reorder`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipsareacomponent.html#reorder) event that returns the new order when a chip is dragged over another chip.

```html
<igx-chips-area (reorder)="chipsOrderChanged($event)">
  <igx-chip *ngFor="let chip of chipList" [draggable]="'true'">
    <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
    {{chip.text}}
  </igx-chip>
</igx-chips-area>
```

```typescript
public chipsOrderChanged(event: IChipsAreaReorderEventArgs) {
    const newChipList = [];
    for (const chip of event.chipsArray) {
        const chipItem = this.chipList.filter((item) => {
            return item.id === chip.id;
        })[0];
        newChipList.push(chipItem);
    }
    this.chipList = newChipList;
}
```

### Keyboard Navigation

The chip can be focused using the `Tab` key or by clicking on it. When the chips are in a chip area, they can be reordered using keyboard navigation:

- Keyboard controls when the chip is focused:

  - <kbd>LEFT</kbd> - Moves the focus to the chip on the left.

    <img class="responsive-img"  src="../images/chip/arrow_left_key.gif" alt="Arrow Left Key" />

  - <kbd>RIGHT</kbd> - Moves the focus to the chip on the right.

    <img class="responsive-img"  src="../images/chip/arrow_right_key.gif" alt="Arrow Right Key" />

  - <kbd>SPACE</kbd> - Toggles chip selection if it is selectable.

    <img class="responsive-img"  src="../images/chip/space_key.gif" alt="Space Key" />

  - <kbd>DELETE</kbd> - Triggers the [`remove`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html#remove) event for the [`igxChip`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html) so the chip deletion can be handled manually.
  - <kbd>SHIFT</kbd> + <kbd>LEFT</kbd> - Triggers [`reorder`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipsareacomponent.html#reorder) event for the [`igxChipArea`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipsareacomponent.html) when the currently focused chip should move position to the left.
  - <kbd>SHIFT</kbd> + <kbd>RIGHT</kbd> - Triggers [`reorder`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipsareacomponent.html#reorder) event for the [`igxChipArea`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipsareacomponent.html) when the currently focused chip should move one position to the right.

- Keyboard controls when the remove button is focused:

  - <kbd>SPACE</kbd> or <kbd>ENTER</kbd> Fires the [`remove`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html#remove) output so the chip deletion can be handled manually.

<div class="divider--half"></div>

Here's an example of the chip area using IgxAvatar as prefix and custom icons for all chips:

```html
<igx-chips-area (reorder)="chipsOrderChanged($event)">
  <igx-chip
    *ngFor="let chip of chipList"
    [id]="chip.id"
    [selectable]="true"
    [selectIcon]="mySelectIcon"
    [removable]="true"
    [removeIcon]="myRemoveIcon"
    (remove)="chipRemoved($event)"
    [draggable]="'true'">
    <igx-avatar
      class="chip-avatar-resized"
      igxPrefix
      [src]="chip.photo"
      shape="circle">
    </igx-avatar>
    {{chip.name}}
  </igx-chip>
</igx-chips-area>

<ng-template #mySelectIcon>
  <igx-icon>check_circle</igx-icon>
</ng-template>

<ng-template #myRemoveIcon>
  <igx-icon>delete</igx-icon>
</ng-template>
```

Resize the avatar to fit the chip:

```scss
.chip-avatar-resized {
  width: 2em;
  height: 2em;
  min-width: 2em;
}
```

Add the `chipList` and the functions that handle the events:

```ts
import { IBaseChipEventArgs, IChipsAreaReorderEventArgs } from 'igniteui-angular/chips';
// import { IBaseChipEventArgs, IChipsAreaReorderEventArgs } from '@infragistics/igniteui-angular'; for licensed package

...
public chipList = [
    {
        id: '770-504-2217',
        name: 'Terrance Orta',
        photo: 'https://www.infragistics.com/angular-demos/assets/images/men/27.jpg'
    },
    {
        id: '423-676-2869',
        name: 'Richard Mahoney',
        photo: 'https://www.infragistics.com/angular-demos/assets/images/men/13.jpg'
    },
    {
        id: '859-496-2817',
        name: 'Donna Price',
        photo: 'https://www.infragistics.com/angular-demos/assets/images/women/50.jpg'
    }
];

private changeDetectionRef: any;

public chipRemoved(event: IBaseChipEventArgs) {
    this.chipList = this.chipList.filter((item) => {
        return item.id !== event.owner.id;
    });
    this.changeDetectionRef.detectChanges();
}

public chipsOrderChanged(event: IChipsAreaReorderEventArgs) {
    const newChipList = [];
    for (const chip of event.chipsArray) {
        const chipItem = this.chipList.filter((item) => {
            return item.id === chip.id;
        })[0];
        newChipList.push(chipItem);
    }
    this.chipList = newChipList;
}
```

If everything's set up correctly, you should see this in your browser:

### Demo

```typescript
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { IBaseChipEventArgs, IChipsAreaReorderEventArgs, IgxChipComponent, IgxChipsAreaComponent } from 'igniteui-angular/chips';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxPrefixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';


@Component({
    selector: 'app-chip-area-sample',
    styleUrls: ['./chip-area-sample.component.scss'],
    templateUrl: './chip-area-sample.component.html',
    imports: [IgxChipsAreaComponent, IgxChipComponent, IgxAvatarComponent, IgxPrefixDirective, IgxIconComponent]
})

export class ChipAreaSampleComponent {
    changeDetectionRef = inject(ChangeDetectorRef);

    public chipList = [
        {
            id: '770-504-2217',
            name: 'Terrance Orta',
            photo: 'assets/images/men/27.jpg'
        },
        {
            id: '423-676-2869',
            name: 'Richard Mahoney',
            photo: 'assets/images/men/13.jpg'
        },
        {
            id: '859-496-2817',
            name: 'Donna Price',
            photo: 'assets/images/women/50.jpg'
        }
    ];

    public chipRemoved(event: IBaseChipEventArgs) {
        this.chipList = this.chipList.filter((item) => item.id !== event.owner.id);
        this.changeDetectionRef.detectChanges();
    }

    public chipsOrderChanged(event: IChipsAreaReorderEventArgs) {
        const newChipList = [];
        for (const chip of event.chipsArray) {
            const chipItem = this.chipList.filter((item) => item.id === chip.id)[0];
            newChipList.push(chipItem);
        }
        this.chipList = newChipList;
    }
}
```
```html
<div class="sample-container">
  <igx-chips-area (reorder)="chipsOrderChanged($event)">
    @for (chip of chipList; track chip) {
      <igx-chip
        [id]="chip.id"
        [selectable]="true"
        [selectIcon]="mySelectIcon"
        [removable]="true"
        [removeIcon]="myRemoveIcon"
        (remove)="chipRemoved($event)"
        [draggable]="true">
        <igx-avatar
          class="chip-avatar-resized"
          igxPrefix
          [src]="chip.photo"
          shape="circle"
        ></igx-avatar>
        {{chip.name}}
      </igx-chip>
    }
  </igx-chips-area>
</div>

<ng-template #mySelectIcon>
  <igx-icon>check_circle</igx-icon>
</ng-template>

<ng-template #myRemoveIcon>
  <igx-icon>delete</igx-icon>
</ng-template>
```
```scss
igx-chip {
    margin-right: 5px;
}

.chip-avatar-resized {
    width: 2em;
    height: 2em;
    min-width: 2em;
}

.sample-container {
    padding-top: 30px;
}
```

## Styling

### Chip Theme Property Map

When you modify a primary property, all related dependent properties are updated automatically:

<table class="collapsible-table">
  <thead>
      <tr>
          <th>Primary Property</th>
          <th>Dependent Property</th>
          <th>Description</th>
      </tr>
  </thead>
  <tbody class="group">
    <tr class="primary">
        <td><details><summary><strong>$background</strong></summary></details></td>
        <td>$text-color</td>
        <td>The chip text color.</td>
    </tr>
    <tr class="dependent">
        <td></td>
        <td>$border-color</td>
        <td>The chip border color.</td>
    </tr>
    <tr class="dependent">
        <td></td>
        <td>$hover-background</td>
        <td>The chip hover background color.</td>
    </tr>
    <tr class="dependent">
        <td></td>
        <td>$hover-border-color</td>
        <td>The chip hover border color.</td>
    </tr>
    <tr class="dependent">
        <td></td>
        <td>$hover-text-color</td>
        <td>The chip hover text color.</td>
    </tr>
    <tr class="dependent">
        <td></td>
        <td>$focus-background</td>
        <td>The chip focus background color.</td>
    </tr>
    <tr class="dependent">
        <td></td>
        <td>$selected-background</td>
        <td>The chip selected background color.</td>
    </tr>
  </tbody>
  <tbody class="group">
    <tr class="primary">
        <td><details><summary><strong>$focus-background</strong></summary></details></td>
        <td>$focus-text-color</td>
        <td>The chip text focus color.</td>
    </tr>
    <tr class="dependent">
        <td></td>
        <td>$focus-border-color</td>
        <td>The chip focus border color.</td>
    </tr>
    <tr class="dependent">
        <td></td>
        <td>$focus-outline-color (bootstrap &amp; indigo variants only)</td>
        <td>The chip focus outline color.</td>
    </tr>
  </tbody>
  <tbody class="group">
    <tr class="primary">
        <td><details><summary><strong>$selected-background</strong></summary></details></td>
        <td>$selected-text-color</td>
        <td>The selected chip text color.</td>
    </tr>
    <tr class="dependent">
        <td></td>
        <td>$selected-border-color</td>
        <td>The selected chip border color.</td>
    </tr>
    <tr class="dependent">
        <td></td>
        <td>$hover-selected-background</td>
        <td>The selected chip hover background color.</td>
    </tr>
  </tbody>
  <tbody class="group">
    <tr class="primary">
        <td><details><summary><strong>$hover-selected-background</strong></summary></details></td>
        <td>$hover-selected-text-color</td>
        <td>The selected chip hover text color.</td>
    </tr>
    <tr class="dependent">
        <td></td>
        <td>$hover-selected-border-color</td>
        <td>The selected chip hover border color.</td>
    </tr>
    <tr class="dependent">
        <td></td>
        <td>$focus-selected-background</td>
        <td>The selected chip focus background color.</td>
    </tr>
  </tbody>
  <tbody class="group">
    <tr class="primary">
        <td><details><summary><strong>$focus-selected-background</strong></summary></details></td>
        <td>$focus-selected-text-color</td>
        <td>The selected chip text focus color.</td>
    </tr>
    <tr class="dependent">
        <td></td>
        <td>$focus-selected-border-color</td>
        <td>The selected chip focus border color.</td>
    </tr>
    <tr class="dependent">
        <td></td>
        <td>$focus-selected-outline-color (bootstrap &amp; indigo variants only)</td>
        <td>The chip focus outline color in selected state.</td>
    </tr>
  </tbody>
</table>

To get started with styling the chip, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`chip-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-chip-theme) and accepts some parameters that style the chip's items. By specifying the `$background` or the `$selected-background`, the theme automatically calculates appropriate state colors and contrast foregrounds. You can still override any other parameter with custom values as needed.

```scss
$custom-chip-theme: chip-theme(
    $background: #57a5cd,
    $selected-background: #ecaa53,
    $remove-icon-color: #d81414,
    $border-radius: 5px,
);
```

Finally, **include** the custom theme in your application:

```scss
:host {
  @include tokens($custom-chip-theme);
}
```

In the sample below, you can see how using the chip component with customized CSS variables allows you to create a design that visually resembles the chip used in the [`Ant`](https://ant.design/components/tag?theme=light#tag-demo-icon) design system.

```typescript
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { facebook, linkedin } from '@igniteui/material-icons-extended';
import { IgxChipComponent, IgxChipsAreaComponent } from 'igniteui-angular/chips';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxPrefixDirective } from 'igniteui-angular/input-group';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-chip',
  styleUrls: ['./chip-styling.component.scss'],
  templateUrl: './chip-styling.component.html',
  imports: [IgxChipsAreaComponent, IgxChipComponent, IgxIconComponent, IgxPrefixDirective, NgClass]
})

export class ChipStylingSampleComponent implements OnInit {
  changeDetectionRef = inject(ChangeDetectorRef);
  private iconService = inject(IgxIconService)
  public ngOnInit() {
    this.iconService.addSvgIconFromText('x', '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>');
    this.iconService.addSvgIconFromText('youtube', '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 13"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/> </svg>');
    this.iconService.addSvgIconFromText(facebook.name, facebook.value);
    this.iconService.addSvgIconFromText(linkedin.name, linkedin.value);
  }

  public chipList = [
    {
      text: 'X.com',
      class: 'xcom',
      icon: 'x'
    },
    {
      text: 'Youtube',
      class: 'youtube',
      icon: 'youtube'
    },
    {
      text: 'Facebook',
      class: 'facebook',
      icon: 'facebook'
    },
    {
      text: 'LinkedIn',
      class: 'linkedin',
      icon: 'linkedin'
    }
  ];
}
```
```html
<igx-chips-area>
  @for (chip of chipList; track chip) {
    <igx-chip [ngClass]="chip.class">
      <igx-icon igxPrefix name={{chip.icon}}></igx-icon>
      {{chip.text}}
    </igx-chip>
  }
</igx-chips-area>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

// CSS variables approach

igx-chip {
    --text-color: #fff;
    --hover-text-color: #fff;
    --focus-text-color: #fff;
    --border-radius: #{rem(5px)};
}

.xcom {
    --background: #000;
    --hover-background: #000;
    --focus-background: #323232;
}

.youtube {
    --background: #cd201f;
    --hover-background: #cd201f;
    --focus-background: #9f1717;
}

.facebook {
    --background: #3b5999;
    --hover-background: #3b5999;
    --focus-background: #2c4378;
}

.linkedin {
    --background: #55acee;
    --hover-background: #55acee;
    --focus-background: #4682af;
}

// Sass theme approach

// $custom-chip-theme: chip-theme(
//     $background: #cd201f,
//     $text-color: #fff,
//     $hover-background: #cd201f,
//     $focus-background: #9f1717,
//     $border-radius: rem(5px)
// );

// :host {
//     @include tokens($custom-chip-theme);
// }
```

### Styling with Tailwind

You can style the chip using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-chip`, `dark-chip`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [chip-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-chip-theme). The syntax is as follows:

```html
<igx-chip
  class="!light-chip
  ![--background:#99BAA6]
  ![--remove-icon-color:#C92828]"
  ...
>
  {{chip.text}}
</igx-chip>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your chips should look like this:

<div class="sample-container loading" style="height:80px">
    <iframe id="chip-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/data-display/chip-tailwind-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

### Custom sizing

You can either use the `--size` variable, targeting the `igx-chip` directly:

```scss
igx-chip {
  --size: 50px;
}
```

Or you can use the universal `--ig-chip-size` variable to target all instances:

```html
<div class="my-app">
  <igx-chip></igx-chip>
</div>
```

```scss
.my-app {
  --ig-chip-size: 50px;
}
```

You can also use one of the predefined sizes, assigning it to the `--ig-size` variable. The available values for `--ig-size` are `--ig-size-small`, `--ig-size-medium`, and `--ig-size-large`:

```scss
igx-chip {
  --ig-size: var(--ig-size-small);
}
```

Learn more about it in the [Size](display-density.md) article.

## API

- [IgxChipComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipcomponent.html)
- [IgxChipComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-chip-theme)
- [IgxChipsAreaComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchipsareacomponent.html)

## Theming Dependencies

- [IgxIcon Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)

## References

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

---
title: Angular Select Component - Ignite UI for Angular - MIT license 
_description: Learn how to configure Angular Select Component. Angular Select provides an input with Angular dropdown list, allowing single item selection of the Angular Combobox. Try it now.
_keywords:  angular select, angular select component, angular forms, angular form select component, angular ui components, igniteui for angular, infragistics
_license: MIT
_tocName: Select
---

# Angular Select Component Overview

Angular Select is a form component used for selecting a single value from a list of predefined values. The Angular Select Component provides functionality identical to the native HTML select element, but offers a lot more customization options. It is based on the [IgxDropDownComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html) and supports all of its features, including templating, virtualization, and customizing the dropdown list items.

## Angular Select Example

Below is a basic Angular Select example. It has a simple contextual menu that displays a list of several choices opening per click.

```typescript
import { Component } from '@angular/core';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';


@Component({
    selector: 'app-select-sample-1',
    styleUrls: ['select-sample-1.component.scss'],
    templateUrl: 'select-sample-1.component.html',
    imports: [IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent]
})
export class SelectSample1Component {
    public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango'];
}
```
```html
<igx-select #select>
  <label igxLabel>Simple Select</label>
  @for (item of items; track item) {
    <igx-select-item [value]="item">
      {{item}}
    </igx-select-item>
  }
</igx-select>
```
```scss
igx-select {
    width: 230px;
    padding-top: 70px;
    padding-left: 40px;
}
```

## Getting Started with Ignite UI for Angular Select

To get started with the Ignite UI for Angular Select component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxSelectModule` in the **app.module.ts** file.

```typescript
// app.module.ts
...
import { IgxSelectModule } from 'igniteui-angular/select';
// import { IgxSelectModule } from '@infragistics/igniteui-angular'; for licensed package
@NgModule({
    ...
    imports: [..., IgxSelectModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxSelectComponent` as a standalone dependency, or use the [`IGX_SELECT_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/select/src/select/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { FormsModule } from '@angular/forms';
import { IGX_SELECT_DIRECTIVES } from 'igniteui-angular/select';
// import { IGX_SELECT_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-select [(ngModel)]="selected">
        <label igxLabel>Simple Select</label>
        <igx-select-item value="Orange">Orange</igx-select-item>
        <igx-select-item value="Apple">Apple</igx-select-item>
        <igx-select-item value="Banana">Banana</igx-select-item>
        <igx-select-item value="Mango">Mango</igx-select-item>
    </igx-select>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_SELECT_DIRECTIVES, FormsModule]
    /* or imports: [IgxSelectComponent, IgxSelectItemComponent, IgxLabelDirective, FormsModule] */
})
export class HomeComponent {
    public selected: string;
}
```

Now that you have the Ignite UI for Angular Select module or directives imported, you can start using the `igx-select` component.

## Using the Angular Select

Add the `igx-select` along with a list of items to choose from. We use [`igx-select-item`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxselectitemcomponent.html) to display the items that the `igx-select` contains.

```html
<igx-select>
    <label igxLabel>Simple Select</label>
    <igx-select-item value="Orange">Orange</igx-select-item>
    <igx-select-item value="Apple">Apple</igx-select-item>
    <igx-select-item value="Banana">Banana</igx-select-item>
    <igx-select-item value="Mango">Mango</igx-select-item>
</igx-select>
```

Another way to do it would be to use a collection of items that we want to display using the [*ngFor](https://angular.io/api/common/NgForOf) structural directive:

```typescript
public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango'];
```

```html
<igx-select [(ngModel)]="selected">
    <label igxLabel>Simple Select</label>
    <igx-select-item *ngFor="let item of items" [value]="item">
        {{item}}
    </igx-select-item>
</igx-select>
```

By default, the Select component will use the `innerText` of the item element in the input field. In cases with more complex item templates, you can explicitly set the `text` property to specify what to display in the input field when this item is selected. For example:

```html
<igx-select>
    <igx-select-item *ngFor="let item of items" [value]="item.value" [text]="item.text">
        {{item.text}} ( {{item.count}} )
    </igx-select-item>
</igx-select>
```

To see the `text` property in action with a bit more sophisticated item templates, check the grouping sample below **Select with Groups** section.

### Input Properties

The Select component supports the following directives applicable to the [Input Group](input-group.md):

- `igxLabel` - No need to set the `for` property, as linking with the Angular Select input is handled automatically via `aria-labelledby`.
- `igx-prefix`/`igxPrefix`
- `igx-suffix`/`igxSuffix` - Note the built-in toggle button suffix will always be displayed last.
- `igx-hint`/`igxHint`

```html
<igx-select [(ngModel)]="selected">
    <label igxLabel>Pick a fruit</label>
    <igx-prefix>
        <span class="bio-prefix">BIO</span>
    </igx-prefix>
    <igx-suffix *ngIf="selected">
        <igx-icon (click)="clearSelection($event)">clear</igx-icon>
    </igx-suffix>
    <igx-hint>Choose a banana</igx-hint>
    <igx-select-item *ngFor="let item of items" [value]="item">
        {{item}}
    </igx-select-item>
</igx-select>
```

> [!NOTE]
> This component uses Material Icons. Add the following link to your `index.html`: `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxHintDirective, IgxLabelDirective, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-select-input-directives',
    styleUrls: ['select-input-directives.scss'],
    templateUrl: 'select-input-directives.html',
    imports: [IgxSelectComponent, FormsModule, IgxLabelDirective, IgxPrefixDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective, IgxSelectItemComponent]
})

export class SelectInputDirectivesComponent {
    @ViewChild(IgxSelectComponent, { static: true })
    public igxSelect: IgxSelectComponent;
    public selected = '';

    public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango'];

    public clearSelection(event: MouseEvent) {
        this.selected = '';
        // prevent the drop-down container from opening
        event.stopPropagation();
    }
}
```

>[!NOTE]
>If no [`placeholder`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxselectcomponent.html#placeholder) is specified for the Select component and there is no selection made, the `igxLabel` will transition and appear where you would expect the placeholder to be.

### Group Select Items

To help visually separate item groups, the select component supports item grouping by wrapping items in an `<igx-select-item-group>`.
This works best with hierarchical data that can be iterated to declare the components. In the following example, each group has a `label` and a collection of `items`:

```typescript
public greengrocery: Array<{ label: string, items: Array<{ type: string, origin: string }> }> = [
    { label: 'Fruits', items: [
            { type: 'Apple', origin: 'local' },
            { type: 'Orange', origin: 'import' },
            { type: 'Banana', origin: 'import'}
        ]
    },
    { label: 'Vegetables', items: [
            { type: 'Cucumber', origin: 'local' },
            { type: 'Potato', origin: 'import' },
            { type: 'Pepper', origin: 'local' }
        ]
    }
];
```

Then in your template file you can iterate over the objects and access their items accordingly:

```html
<igx-select #select>
    <label igxLabel>Select With Groups</label>
    <igx-select-item-group *ngFor="let group of greengrocery" [label]="group.label">
        <igx-select-item *ngFor="let item of group.items" [value]="item.type" [text]="item.type">
            {{item.type}}
            <igx-icon
                title="Local product"
                *ngIf="item.origin === 'local'; else templateImport"
            >local_shipping</igx-icon>
            <ng-template #templateImport>
                <igx-icon title="Import product">flight</igx-icon>
            </ng-template>
        </igx-select-item>
    </igx-select-item-group>
</igx-select>
```

```typescript
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { IgxSelectComponent, IgxSelectGroupComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';


@Component({
    selector: 'app-select-sample-2',
    styleUrls: ['select-sample-2.component.scss'],
    templateUrl: 'select-sample-2.component.html',
    imports: [IgxSelectComponent, IgxLabelDirective, IgxSelectGroupComponent, IgxSelectItemComponent, IgxIconComponent]
})
export class SelectSample2Component {
    element = inject(ElementRef);

    @ViewChild(IgxSelectComponent, { static: true })
    public select: IgxSelectComponent;

    public greengrocery: {
        label: string;
        items: { type: string; origin: string }[];
    }[] = [
        {
            label: 'Fruits',
            items:
            [
                { type: 'Apple', origin: 'local' },
                { type: 'Orange', origin: 'import' },
                { type: 'Banana', origin: 'import'}
            ]
        },
        {
            label: 'Vegetables',
            items:
            [
                { type: 'Cucumber', origin: 'local' },
                { type: 'Potato', origin: 'import' },
                { type: 'Pepper', origin: 'local' }
            ]
        }
    ];
}
```
```html
<igx-select #select>
  <label igxLabel>Select With Groups</label>
  @for (group of greengrocery; track group) {
    <igx-select-item-group [label]="group.label">
      @for (item of group.items; track item) {
        <igx-select-item [value]="item.type" [text]="item.type">
          {{item.type}}
          @if (item.origin === 'local') {
            <igx-icon
              title="Local product"
            >local_shipping</igx-icon>
          } @else {
            <igx-icon title="Import product">flight</igx-icon>
          }
        </igx-select-item>
      }
    </igx-select-item-group>
  }
</igx-select>
```
```scss
igx-select {
    width: 250px;
    padding-top: 70px;
    padding-left: 40px;
}

igx-select-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

:host ::ng-deep {
    .select__entry {
        span {
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding-right: 12px;
        }
    }
}
```

### Header & Footer

Currently, there are no default header and footer templates for the Select component. However, you can add a header or a footer template by marking them respectively with `igxSelectHeader` or `igxSelectFooter`. As these are custom templates, you should define their styling as well.
In this example, there are both header and footer ng-templates defined. In the header there is a basic filtering, implemented via [`igx-buttongroup`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbuttongroupcomponent.html). The footer includes static summary of all of the items, based on the delivery method.

```html
<igx-select>
    <label igxLabel>Pick your fruit</label>
    <igx-select-item *ngFor="let fruit of fruits" [value]="fruit.type" [text]="fruit.type" [ngSwitch]="fruit.delivery">
        {{fruit.type}}
        <igx-icon *ngSwitchCase="'flight'">flight</igx-icon>
        <igx-icon *ngSwitchCase="'train'">train</igx-icon>
        <igx-icon *ngSwitchCase="'boat'">directions_boat</igx-icon>
    </igx-select-item>
    <ng-template igxSelectHeader>
        <div class="custom-select-header">
            <span class="sample-template-heading">DELIVERY METHOD</span>
            <igx-buttongroup (click)="filter($event.target.title)">
                    <button igxButton title="flight"><igx-icon title="flight">flight</igx-icon></button>
                    <button igxButton title="train"><igx-icon title="train">train</igx-icon></button>
                    <button igxButton title="boat"><igx-icon title="boat">directions_boat</igx-icon></button>
            </igx-buttongroup>
        </div>
    </ng-template>
    <ng-template igxSelectFooter>
        <div class="custom-select-footer">
            <span class="sample-template-heading">TOTAL</span>
            <div class="sample-template-icons">
                <span class="sample-template-icons__item">
                    <igx-icon
                        title="flight"
                        [class.important-icon]="selected === 'flight'"
                    >flight</igx-icon>
                    {{flightCount}}
                </span>
                <span class="sample-template-icons__item">
                    <igx-icon
                        title="train"
                        [class.important-icon]="selected === 'train'"
                    >train</igx-icon>
                    {{trainCount}}
                </span>
                <span class="sample-template-icons__item">
                    <igx-icon
                        title="boat"
                        [class.important-icon]="selected === 'boat'"
                    >directions_boat
                    </igx-icon>
                    {{boatCount}}
                </span>
            </div>
        </div>
    </ng-template>
</igx-select>
```

```typescript
import { ChangeDetectorRef, Component, ElementRef, OnInit, inject } from '@angular/core';
import { IgxSelectComponent, IgxSelectFooterDirective, IgxSelectHeaderDirective, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-select-header-footer',
    styleUrls: ['select-header-footer.component.scss'],
    templateUrl: 'select-header-footer.component.html',
    imports: [IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent, IgxIconComponent, IgxSelectHeaderDirective, IgxButtonGroupComponent, IgxButtonDirective, IgxSelectFooterDirective]
})
export class SelectHeaderFooterComponent implements OnInit {
    cdr = inject(ChangeDetectorRef);
    element = inject(ElementRef);

    public flightCount: number;
    public trainCount: number;
    public boatCount: number;
    public selected: string;
    public fruits: { type: string; delivery: string }[];

    public fruitsDS: { type: string; delivery: string }[] = [
            { type: 'Apple', delivery: 'boat' },
            { type: 'Banana', delivery: 'flight'},
            { type: 'Blackberry', delivery: 'train'},
            { type: 'Blueberry', delivery: 'train'},
            { type: 'Coconut', delivery: 'flight'},
            { type: 'Cherry', delivery: 'boat'},
            { type: 'Grape', delivery: 'train'},
            { type: 'Japanese plum', delivery: 'flight'},
            { type: 'Pineapple', delivery: 'flight'},
            { type: 'Melon', delivery: 'flight'},
            { type: 'Orange', delivery: 'boat' },
            { type: 'Pear', delivery: 'train'},
            { type: 'Peach', delivery: 'boat'},
            { type: 'Pineapple', delivery: 'flight'},
            { type: 'Pomegranate', delivery: 'flight'},
            { type: 'Watermelon', delivery: 'train'}
        ];

    public ngOnInit() {
        this.flightCount = this.fruitsDS.filter(items => items.delivery === 'flight').length;
        this.trainCount = this.fruitsDS.filter(items => items.delivery === 'train').length;
        this.boatCount = this.fruitsDS.filter(items => items.delivery === 'boat').length;
        this.fruits = this.fruitsDS;
    }

    public filter(target: EventTarget) {
        let value = (target as HTMLButtonElement).title;
        if (this.selected === value) {
            this.fruits = this.fruitsDS;
            this.selected = 'allData';
            this.cdr.detectChanges();
            return;
        }
        this.selected = value;
        this.fruits = this.fruitsDS.filter(fruit => fruit.delivery === value);
        this.cdr.detectChanges();
    }
}
```
```html
<div class="header-footer-select-sample">
  <igx-select [overlaySettings]="{ outlet: element }">
    <label igxLabel>Pick your fruit</label>
    @for (fruit of fruits; track fruit) {
      <igx-select-item [value]="fruit.type" class="select__entry" [text]="fruit.type">
        {{fruit.type}}
        @switch (fruit.delivery) {
          @case ('flight') {
            <igx-icon>flight</igx-icon>
          }
          @case ('train') {
            <igx-icon>train</igx-icon>
          }
          @case ('boat') {
            <igx-icon>directions_boat</igx-icon>
          }
        }
      </igx-select-item>
    }
    <ng-template igxSelectHeader>
      <div class="custom-select-header">
        <span class="sample-template-heading">DELIVERY METHOD</span>
        <igx-buttongroup (click)="filter($event.target)">
          <button igxButton title="flight">
            <igx-icon title="flight">flight</igx-icon>
          </button>
          <button igxButton title="train">
            <igx-icon title="train">train</igx-icon>
          </button>
          <button igxButton title="boat">
            <igx-icon title="boat">directions_boat</igx-icon>
          </button>
        </igx-buttongroup>
      </div>
    </ng-template>
    <ng-template igxSelectFooter>
      <div class="custom-select-footer">
        <span class="sample-template-heading">TOTAL</span>
        <div class="sample-template-icons">
          <span class="sample-template-icons__item">
            <igx-icon title="flight" [class.important-icon]="selected === 'flight'">flight</igx-icon>
            {{flightCount}}
          </span>
          <span class="sample-template-icons__item">
            <igx-icon title="train" [class.important-icon]="selected === 'train'">train</igx-icon>
            {{trainCount}}
          </span>
          <span class="sample-template-icons__item">
            <igx-icon title="boat" [class.important-icon]="selected === 'boat'">directions_boat</igx-icon>
            {{boatCount}}
          </span>
        </div>
      </div>
    </ng-template>
  </igx-select>
</div>
```
```scss
@use '../../../../variables' as *;

.header-footer-select-sample {
    display: flex;
    height: 100%;
    align-items: center;
    margin-left: 48px;
}

:host ::ng-deep {
    .select__entry {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            display: flex;
            padding: 8px;
            justify-content: space-between;
            width: 100%;
        }
    }
}

igx-select {
    min-width: 320px;
}

.custom-select-header,
.custom-select-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    background: color($color: 'gray', $variant: 100);
    igx-icon {
        &.important-icon {
            color: color($color: 'primary', $variant: 500);
        }
    }
}

.sample-template-icons,
.sample-template-icons__item {
    display: flex;
    align-items: center;
    igx-icon {
        margin-right: 8px;
    }
}

.sample-template-icons__item {
    margin-left: 32px;
}

.custom-select-header {
    height: 56px;
}

.custom-select-footer {
    height: 44px;
}

.sample-template-heading {
    font-size: 12px;
}

.sample-template-heading {
    color: color($color: 'secondary');
}

$custom-button-group: button-group-theme(
    $schema: $light-schema,
    $shadow: none,
    $border-radius: 0,
    $item-background: color($color: 'gray', $variant: 300),
    $item-text-color: color($color: 'gray', $variant: 700),
    $item-hover-background: color($color: 'gray', $variant: 400),
    $item-hover-text-color: color($color: 'gray', $variant: 700),
    $item-border-color: color($color:  'gray', $variant: 700),
    $item-selected-text-color: #fff,
    $item-selected-background: color($color: 'primary', $variant: 500),
    $item-selected-border-color: color($color: 'primary', $variant: 500),
    $item-selected-hover-background: color($color: 'primary', $variant: 600)
);

:host ::ng-deep {
    @include tokens($custom-button-group);
}
```


### Custom Toggle Button in Angular Select

You can customize the default toggle button, using the `igxSelectToggleIcon` directive or setting a `TemplateRef` to the [`toggleIconTemplate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxselectcomponent.html#toggleIconTemplate) property.

```html
<igx-select #select>
    ...
    <ng-template igxSelectToggleIcon let-collapsed>
        <igx-icon>{{ collapsed ? 'add_circle' : 'add_circle_outline'}}</igx-icon>
    </ng-template>
    ...
<igx-select>
```

## Keyboard Navigation

- Open the `igx-select` by clicking on the `Space`, `Enter` or `ALT + Up/Down Arrow` keys, while the select is focused.
- Close the `igx-select` using the `ALT + Up/Down Arrow` combination or any of the `Enter`, `Space`, `Esc` or `Tab` keys.
- Using the `Up/Down Arrow` keys will navigate through the items.
- Using the `Home` or `End` keys will navigate you to the first and last items in the list.
- You can navigate through list items, starting with a certain character, by pressing the corresponding key.
- You can navigate to a specific item by rapidly typing the first few characters of the item you wish to go to.
- Select an item using the `Enter` or `Space` keys

>[!NOTE]
>`igx-select` supports only _single_ selection of items.

You can also try out the [drag and drop App Builder™](https://www.infragistics.com/products/appbuilder) to see how it automates certain processes and reduces the need for excessive hand coding when building your next Angular app.

## Custom Overlay Settings

You can create custom [`OverlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html). To do this you first define your template like so:

```html
<igx-select [overlaySettings]="customOverlaySettings">
    <igx-select-item *ngFor="let item of items">
        {{item}}
    </igx-select-item>
</igx-select>
```

- Where the `overlaySettings` property is bound to your custom settings.

Inside your class, you would have something along the lines of:

```typescript
export class MyClass implements OnInit {
    @ViewChild(IgxSelectComponent)
    public select: IgxSelectComponent;
    public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango', 'Tomato'];
    public customOverlaySettings: OverlaySettings;

    public ngOnInit(): void {
        const positionSettings: PositionSettings = {
            closeAnimation: scaleOutBottom,
            horizontalDirection: HorizontalAlignment.Right,
            horizontalStartPoint: HorizontalAlignment.Left,
            openAnimation: scaleInTop,
            verticalDirection: VerticalAlignment.Bottom,
            verticalStartPoint: VerticalAlignment.Bottom
        };
        this.customOverlaySettings = {
            target: this.select.inputGroup.element.nativeElement,
            positionStrategy: new ConnectedPositioningStrategy(
                positionSettings
            ),
            scrollStrategy: new AbsoluteScrollStrategy()
        };
    }
}
```

You can see that we create a [_PositionSettings_](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/positionsettings.html) object that is directly passed to our [_ConnectedPositioningStrategy_](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/connectedpositioningstrategy.html), it is not required to do it, but since we want to define a custom positioning, we use them to override the strategy's default settings.

- You can set all settings inside of the [_ngOnInit_](https://angular.io/api/core/OnInit) hook and this will automatically affect your template upon the component's generation.


```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbsoluteScrollStrategy, ConnectedPositioningStrategy, HorizontalAlignment, OverlaySettings, PositionSettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { scaleInTop, scaleOutBottom } from 'igniteui-angular/animations';


@Component({
    selector: 'app-select-sample-4',
    styleUrls: ['select-sample-4.component.scss'],
    templateUrl: 'select-sample-4.component.html',
    imports: [IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent]
})
export class SelectSample4Component implements OnInit {
    @ViewChild(IgxSelectComponent, { static: true })
    public igxSelect: IgxSelectComponent;
    public items: string[] = ['Orange', 'Apple', 'Banana'];
    public customOverlaySettings: OverlaySettings;

    public ngOnInit(): void {
        const positionSettings: PositionSettings = {
            closeAnimation: scaleOutBottom,
            horizontalDirection: HorizontalAlignment.Right,
            horizontalStartPoint: HorizontalAlignment.Left,
            openAnimation: scaleInTop,
            verticalDirection: VerticalAlignment.Bottom,
            verticalStartPoint: VerticalAlignment.Bottom
        };
        this.customOverlaySettings = {
            target: this.igxSelect.inputGroup.element.nativeElement,
            positionStrategy: new ConnectedPositioningStrategy(
                positionSettings
            ),
            scrollStrategy: new AbsoluteScrollStrategy()
        };
    }
}
```
```html
<div class="select-wrapper">
  <igx-select [overlaySettings]="customOverlaySettings">
    <label igxLabel>Select An Item</label>
    @for (item of items; track item) {
      <igx-select-item [value]="item">
        {{item}}
      </igx-select-item>
    }
  </igx-select>
</div>
```
```scss
.select-wrapper {
    display: flex;
    padding-top: 30px;
    padding-left: 20px;
}
```


You can also pass in a customized [OverlaySettings](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html) object to the [IgxSelectComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxselectcomponent.html#open)'s open function, where your template should look like this:

```html
<igx-select>
    <igx-select-item *ngFor="let item of items">
        {{item}}
    </igx-select-item>
</igx-select>

<button (click)="onClick($event)"></button>
```

And you class has the following:

```typescript
export class MyClass implements OnInit {
    /* -- */
    private otherCustomOverlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new AbsoluteScrollStrategy()
    }
    onClick(event: MouseEvent): void {
        this.select.open(this.otherCustomOverlaySettings)
    }
    /* -- */
}
```

>[!NOTE]
>If you pass in your custom settings both as an argument in the `open` function and in the template, `igx-select` will use the one provided in the `open` function. However, if you bind the settings to an internal event, such as `opening` or `opened` then `igx-select` will use the settings that are provided in the template.

## Styling

### Select Theme Property Map

When you modify a primary property, all related dependent properties are automatically updated to reflect the change:

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
        <td><details><summary><strong>$toggle-button-background</strong></summary></details></td>
        <td>$toggle-button-foreground</td>
        <td>Foreground color of the toggle button</td>
        </tr>
        <tr class="dependent"><td></td><td>$toggle-button-foreground-filled</td><td>Foreground color when toggle button is filled</td></tr>
        <tr class="dependent"><td></td><td>$toggle-button-background-focus</td><td>Background color when focused</td></tr>
        <tr class="dependent"><td></td><td>$toggle-button-background-focus--border (bootstrap/indigo)</td><td>Background when focused in border variant (Bootstrap/Indigo)</td></tr>
        <tr class="dependent"><td></td><td>$toggle-button-foreground-focus</td><td>Foreground color when toggle button is focused</td></tr>
    </tbody>
</table>

Every component has its own theme function.

To get the Select component styled, you have to style its containing components. In our case, these are the [input-group-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-input-group-theme) and the [drop-down-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-drop-down-theme).
Take a look at the [`Input Group`](input-group.md#styling) and the [`Drop Down`](drop-down.md#styling) styling sections to get a better understanding of how to style those two components.

We also have a [`select-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-select-theme) function which is used only for styling the button of our Select component. <br>
To get started with styling the Select component button, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`select-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-select-theme) and provide only the `$toggle-button-background` parameter. The theme function will automatically calculate all corresponding background and foreground colors for the different states based on this single value.

```scss
$custom-select-theme: select-theme(
  $toggle-button-background: #57a5cd,
);
```

The last step is to pass the custom radio theme in our application:

```scss
:host {
    @include tokens($custom-select-theme);
}
```

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbsoluteScrollStrategy, ConnectedPositioningStrategy, HorizontalAlignment, OverlaySettings, PositionSettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { scaleInTop, scaleOutBottom } from 'igniteui-angular/animations';


@Component({
    selector: 'app-select-styling',
    styleUrls: ['select-styling.component.scss'],
    templateUrl: 'select-styling.component.html',
    imports: [IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent]
})
export class SelectStylingComponent implements OnInit {
    @ViewChild(IgxSelectComponent, { static: true })
    public igxSelect: IgxSelectComponent;
    public items: string[] = ['Orange', 'Apple', 'Banana'];
    public customOverlaySettings: OverlaySettings;

    public ngOnInit(): void {
        const positionSettings: PositionSettings = {
            closeAnimation: scaleOutBottom,
            horizontalDirection: HorizontalAlignment.Right,
            horizontalStartPoint: HorizontalAlignment.Left,
            openAnimation: scaleInTop,
            verticalDirection: VerticalAlignment.Bottom,
            verticalStartPoint: VerticalAlignment.Bottom
        };
        this.customOverlaySettings = {
            target: this.igxSelect.inputGroup.element.nativeElement,
            positionStrategy: new ConnectedPositioningStrategy(
                positionSettings
            ),
            scrollStrategy: new AbsoluteScrollStrategy()
        };
    }
}
```
```html
<div class="select-wrapper">
  <igx-select [overlaySettings]="customOverlaySettings">
    <label igxLabel>Select An Item</label>
    @for (item of items; track item) {
      <igx-select-item [value]="item">
        {{item}}
      </igx-select-item>
    }
  </igx-select>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-select-theme: select-theme(
  $toggle-button-background: #57a5cd,
);

:host {
  @include tokens($custom-select-theme);
}
```

### Styling with Tailwind

You can style the select using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-select`, `dark-select`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [select-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-select-theme). The syntax is as follows:

```html
<igx-select
  class="!light-select ![--toggle-button-background:#99BAA6]">
  ...
</igx-select>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your select should look like this:

<div class="sample-container loading" style="height:220px">
    <iframe id="select-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/data-entries/select-tailwind-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>


<div class="divider--half"></div>

## API Reference

- [IgxSelectComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxselectcomponent.html)
- [IgxSelectItemComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxselectitemcomponent.html)
- [IgxDropDownComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html)
- [IgxDropDownItemComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdownitemcomponent.html)
- [OverlaySettings](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html)
- [ConnectedPositioningStrategy](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/connectedpositioningstrategy.html)
- [GlobalPositionStrategy](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/globalpositionstrategy.html#constructor)
- [AbsoluteScrollStrategy](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/absolutescrollstrategy.html)
- [PositionSettings](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/positionsettings.html)

## Theming Dependencies

- [IgxDropDown Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-drop-down-theme)
- [IgxIcon Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)
- [IgxOverlay Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)
- [IgxInputGroup Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-input-group-theme)

## Additional Resources

- [NgModel](https://angular.io/api/forms/NgModel)
- [ViewChild](https://angular.io/api/core/ViewChild)
- [ngForOf](https://angular.io/api/common/NgForOf)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

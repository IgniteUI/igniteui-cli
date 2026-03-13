---
title: Angular Drop Down Component –  Ignite UI For Angular - MIT license 
_description: Add interactivity and see styling options to a scrollable list of items in your app. Get started using the Drop Down Component in Ignite UI for Angular now.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library, Angular Drop Down component, Angular Drop Down control
_license: MIT
_tocName: Drop Down
---

# Angular Drop Down Component Overview

<p class="highlight">The Ignite UI for Angular Drop Down is a component, which displays a toggleable list of predefined values and allows users to easily select a single option item with a click. It can be quickly configured to act as a drop down menu or you can simply use it to deliver more useful visual information by grouping data. With grouping you can use both flat and hierarchical data. Drop Down component allows declarative binding, which makes it possible for you to embed additional content and links. This also leaves room for further UI customization and styling of the Angular drop down list appearance. In addition to this, it is packed with key features like keyboard dropdown navigation and virtualization. </p>

## Angular Drop Down Example

This Angular drop down example demonstrates the basic functionalities of a drop down list. Click on it to expand the preset options, select an item, and then close the drop down.

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-sample-1',
    styleUrls: ['./dropdown-sample-1.component.scss'],
    templateUrl: './dropdown-sample-1.component.html',
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownComponent, IgxDropDownItemComponent]
})
export class DropDownSample1Component {
    public items: { field: string }[] = [
        { field: 'Option 1' },
        { field: 'Option 2' },
        { field: 'Option 3' }
    ];
}
```
```html
<button class="button" igxButton="contained" [igxToggleAction]="dropdown"
[igxDropDownItemNavigation]="dropdown">Options</button>
<igx-drop-down #dropdown>
  @for (item of items; track item) {
    <igx-drop-down-item>
      {{ item.field }}
    </igx-drop-down-item>
  }
</igx-drop-down>
```
```scss
.button {
    margin: 8px;
    width: 128px;
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Drop Down

To get started with the Ignite UI for Angular Drop Down component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxDropDownModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxDropDownModule } from 'igniteui-angular/drop-down';
// import { IgxDropDownModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxDropDownModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxDropDownComponent` as a standalone dependency, or use the [`IGX_DROP_DOWN_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/drop-down/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { NgFor } from '@angular/common';
import { IGX_DROP_DOWN_DIRECTIVES } from 'igniteui-angular/drop-down';
import { IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxButtonDirective } from 'igniteui-angular/directives';
// import { IGX_DROP_DOWN_DIRECTIVES, IgxToggleActionDirective, IgxButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: `
    <button
      igxButton="contained"
      [igxToggleAction]="dropdown"
      [igxDropDownItemNavigation]="dropdown"
    >
      Options
    </button>
    <igx-drop-down #dropdown>
      <igx-drop-down-item *ngFor="let item of items">
        {{ item.field }}
      </igx-drop-down-item>
    </igx-drop-down>
  `,
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [ IGX_DROP_DOWN_DIRECTIVES, IgxToggleActionDirective, IgxButtonDirective, NgFor ],
  /* or imports: [IgxDropDownComponent, IgxDropDownItemComponent, IgxToggleActionDirective, IgxButtonDirective, NgFor] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Drop Down module or directives imported, you can start using the `igx-drop-down` component.

## Using the Angular Drop Down

### Add Drop Down

Let's create a simple drop-down that provides several option items to choose from. To achieve this, we will use the [IgxDropDownComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html) as well as the [IgxToggleAction](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoggleactiondirective.html) to open/close the drop-down.

```html
<!-- dropdown.component.html -->
<button igxButton="contained" [igxToggleAction]="dropdown" [igxDropDownItemNavigation]="dropdown">
  Options
</button>
<igx-drop-down #dropdown>
  <igx-drop-down-item *ngFor="let item of items">
    {{ item.field }}
  </igx-drop-down-item>
</igx-drop-down>
```

```typescript
// dropdown.component.ts
@Component({...})
export class MyDropDownComponent {
    public items: Array<{ field: string }> = [
        { field: 'Option 1' },
        { field: 'Option 2' },
        { field: 'Option 3' }
    ];
}
```

## More Angular Drop Down Examples

The default demo shows the use of a toggleable Drop Down List in Angular that lets end-users expand all predefined items and opt for one of them. Check out the following example and see the Angular Drop Down list in action.

### Predefined selected item

Let's say we want to have a predefined selected item. One way to do this, is by handling the [opening](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html#opening) event of the drop-down component.

```html
<!-- dropdown.component.html -->
<button igxButton="contained" [igxToggleAction]="dropdown" [igxDropDownItemNavigation]="dropdown">
  Options
</button>
<igx-drop-down #dropdown (opening)="dropdown.setSelectedItem(0)">
  <igx-drop-down-item *ngFor="let item of items">
    {{ item.field }}
  </igx-drop-down-item>
</igx-drop-down>
```

```typescript
// dropdown.component.ts
export class MyDropDownComponent {
  public items: Array<{ field: string }> = [
    { field: 'Option 1' },
    { field: 'Option 2' },
    { field: 'Option 3' },
  ];
}
```

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-sample-2',
    styleUrls: ['./dropdown-sample-2.component.scss'],
    templateUrl: './dropdown-sample-2.component.html',
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownComponent, IgxDropDownItemComponent]
})
export class DropDownSample2Component {
    public items: { field: string }[] = [
        { field: 'Option 1' },
        { field: 'Option 2' },
        { field: 'Option 3' }
    ];
}
```
```html
<button class="button" igxButton="contained" [igxToggleAction]="dropdown"
[igxDropDownItemNavigation]="dropdown">Options</button>
<igx-drop-down #dropdown (opening)="dropdown.setSelectedItem(0)">
  @for (item of items; track item) {
    <igx-drop-down-item>
      {{ item.field }}
    </igx-drop-down-item>
  }
</igx-drop-down>
```
```scss
.button {
    margin: 8px;
    width: 128px;
}
```

<div class="divider--half"></div>

### Grouping items

To provide a more useful visual information, use the [isHeader](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdownitemcomponent.html#isheader) property to group items semantically or the [disabled](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdownitemcomponent.html#disabled) property to display an item as a non-interactive. You can also set the [selected](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdownitemcomponent.html#selected) property on a particular item to make it the selected item. The `igx-drop-down` items have out-of-the-box support for `igxPrefix`, `igxSuffix`, and `igx-divider` directives that can contain or be set on HTML elements or other web components.

```html
<!-- dropdown.component.html -->
<button igxButton="contained" [igxToggleAction]="dropdown" [igxDropDownItemNavigation]="dropdown">
  Countries
</button>
<igx-drop-down #dropdown [width]="'240px'">
  <div class="drop-down__scroll-container">
    <igx-drop-down-item *ngFor="let item of items" [disabled]="item.disabled" [isHeader]="item.header" [selected]="item.selected">
      <igx-icon igxPrefix>place</igx-icon>
      {{ item.field }}
      <span igxSuffix>{{ item.code }}</span>
      <igx-divider></igx-divider>
    </igx-drop-down-item>
  </div>
</igx-drop-down>
```

```typescript
// dropdown.component.ts
export class MyDropDownComponent {
  public items: any[] = [
    { field: 'European Union', code: 'EU', header: true },
    { field: 'Germany', code: 'DE' },
    { field: 'Bulgaria', code: 'BG', selected: true },
    { field: 'France', code: 'FR', disabled: true },
    { field: 'North America', code: 'NA', header: true },
    { field: 'Canada', code: 'CA' },
    { field: 'United States', code: 'US' },
    { field: 'Mexico', code: 'MX' },
  ];
}
```

If the sample is configured properly, a list of countries should be displayed as a group under European Union header, France as a non-interactive item, and Bulgaria as a selected item:

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective, IgxDividerDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-sample-3',
    styleUrls: ['./dropdown-sample-3.component.scss'],
    templateUrl: './dropdown-sample-3.component.html',
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownComponent, IgxDropDownItemComponent, IgxIconComponent, IgxPrefixDirective, IgxSuffixDirective, IgxDividerDirective]
})
export class DropDownSample3Component {

    public items: any[] = [
        { field: 'European Union', code: 'EU', header: true },
        { field: 'Germany', code: 'DE' },
        { field: 'Bulgaria', code: 'BG', selected: true },
        { field: 'France', code: 'FR', disabled: true },
        { field: 'North America', code: 'NA', header: true },
        { field: 'Canada', code: 'CA' },
        { field: 'United States', code: 'US' },
        { field: 'Mexico', code: 'MX' }
    ];
}
```
```html
<button class="button" igxButton="contained" [igxToggleAction]="dropdown"
[igxDropDownItemNavigation]="dropdown">Countries</button>
<igx-drop-down #dropdown [width]="'240px'">
  <div class="drop-down__scroll-container">
    @for (item of items; track item) {
      <igx-drop-down-item [disabled]="item.disabled" [isHeader]="item.header"
        [selected]="item.selected" [class.drop-down-header]="item.header">
        <igx-icon igxPrefix>place</igx-icon>
        {{ item.field }}
        <span igxSuffix>{{ item.code }}</span>
        <igx-divider></igx-divider>
      </igx-drop-down-item>
    }
  </div>
</igx-drop-down>
```
```scss
.button {
    margin: 8px;
    width: 240px;
}

.drop-down__scroll-container {
    max-height: 240px;
}

.drop-down-header igx-icon {
    display: none;
}
```

### Grouping hierarchical data

The `igx-drop-down` items can also be grouped using the [`igx-drop-down-item-group`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowngroupcomponent.html) container, making it easier for users to differentiate separate categories. The `igx-drop-down-item-group` accepts `igx-drop-down-item` elements as its content and renders them in a grouped fashion.

```typescript
// dropdown.component.ts
export class MyCustomDropDownComponent {
    ...
    public foods: {
        name: string,
        entries: { name: string, refNo: string }[]
    }[] = [
    {
        name: 'Vegetables',
        entries: [{
            name: 'Cucumber',
            refNo: '00000'
        }, {
            name: 'Lettuce',
            refNo: '00001'
        },
        ...]
    }, {
        name: 'Fruits',
        entries: [{
            name: 'Banana',
            refNo: '10000'
        }, {
            name: 'Tomato',
            refNo: '10001'
        },
        ...]
    }, {
        name: 'Meats',
        entries: [{
            name: 'Chicken',
            refNo: '20000'
        }, {
            name: 'Beef',
            refNo: '20001'
        },
        ...]
    }];
}
```

```html
<igx-drop-down>
  <igx-drop-down-item-group *ngFor="let foodGroup of foods" [label]="foodGroup.name">
    <igx-drop-down-item *ngFor="let food of foodGroup.entries" [value]="food.refNo">
      {{ food.name }}
    </igx-drop-down-item>
  </igx-drop-down-item-group>
</igx-drop-down>
```

The group also has the additional functionality of disabling items inside of its body. For example, lets say we do not want the `Meats` food group to be selectable in our drop-down. Instead of disabling all of the entries in `Meats` separately, we can disable the group, as well as all of the child items inside:

```html
<igx-drop-down>
  <igx-drop-down-item-group *ngFor="let foodGroup of foods" [label]="foodGroup.name" [disabled]="foodGroup.name === 'Meats'">
    <igx-drop-down-item *ngFor="let food of foodGroup.entries" [value]="food.refNo">
      {{ food.name }}
    </igx-drop-down-item>
  </igx-drop-down-item-group>
</igx-drop-down>
```

You can see the results in the sample below:

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxDropDownComponent, IgxDropDownGroupComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { FormsModule } from '@angular/forms';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-sample-5',
    styleUrls: ['./dropdown-sample-5.component.scss'],
    templateUrl: './dropdown-sample-5.component.html',
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxSwitchComponent, FormsModule, IgxDropDownComponent, IgxDropDownGroupComponent, IgxDropDownItemComponent]
})
export class DropDownSample5Component {
    public disableMeats = false;

    // tslint:disable:object-literal-sort-keys
    public foods: {
        name: string;
        entries: { name: string; refNo: string }[];
    }[] = [{
        name: 'Vegetables',
        entries: [{
            name: 'Cucumber',
            refNo: `00000`
        }, {
            name: 'Lettuce',
            refNo: `00001`
        }, {
            name: 'Cabbage',
            refNo: `00002`
        }]
    }, {
        name: 'Fruits',
        entries: [{
            name: 'Banana',
            refNo: `10000`
        }, {
            name: 'Tomato',
            refNo: `10001`
        }, {
            name: 'Kiwi',
            refNo: `10002`
        }]
    }, {
        name: 'Meats',
        entries: [{
            name: 'Chicken',
            refNo: `20000`
        }, {
            name: 'Beef',
            refNo: `20001`
        }, {
            name: 'Veal',
            refNo: `20002`
        }]
    }];
}
```
```html
<div class='controls-wrapper'>
  <button class="button" igxButton="contained" [igxToggleAction]="dropDown"
  [igxDropDownItemNavigation]="dropDown">Foods</button>
  <igx-switch [(ngModel)]="disableMeats">
    Disable 'Meats'
  </igx-switch>
</div>
<igx-drop-down #dropDown [width]="'160px'">
  <div class="drop-down__scroll-container">
    @for (foodGroup of foods; track foodGroup) {
      <igx-drop-down-item-group [label]="foodGroup.name"
        [disabled]="disableMeats && foodGroup.name === 'Meats'">
        @for (food of foodGroup.entries; track food) {
          <igx-drop-down-item [value]='food.refNo'>
            {{ food.name }}
          </igx-drop-down-item>
        }
      </igx-drop-down-item-group>
    }
  </div>
</igx-drop-down>
```
```scss
.button {
    width: 160px;
}

.controls-wrapper {
    display: flex;
    flex-flow: row;
    max-width: 450px;
    margin: 8px;
}

igx-switch {
    padding-left: 24px;
}

.drop-down__scroll-container {
    max-height: 240px;
}
```

### Drop Down as menu

You can configure the drop-down to behave as a menu. To do this, set the [ISelectionEventArgs](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/iselectioneventargs.html) interface [cancel](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/iselectioneventargs.html#cancel) member to _true_ in the [selectionChanging](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html#selectionChanging) event handler. In this way, the selected item is not preserved when opening the menu and previous selections get invalidated. Still, you can get the clicked item through the [newSelection](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/iselectioneventargs.html#newSelection) member value in the event.

```html
<!-- dropdown.component.html -->
<div>
  <igx-navbar title="Contacts">
    <button
      [igxToggleAction]="menu"
      [igxToggleOutlet]="outlet"
      [overlaySettings]="overlaySettings"
      [igxDropDownItemNavigation]="menu"
      igxIconButton="flat"
    >
      <igx-icon fontSet="material">more_vert</igx-icon>
    </button>
    <igx-drop-down #menu (selectionChanging)="selectionHandler($event)">
      <igx-drop-down-item *ngFor="let item of items" [value]="item.text">
        <div>{{ item.text }}</div>
      </igx-drop-down-item>
    </igx-drop-down>
  </igx-navbar>

  <div>
    <ng-container *ngIf="text">
      <label igxLabel>{{ text }}</label>
    </ng-container>
  </div>

  <div igxOverlayOutlet #outlet="overlay-outlet"></div>
</div>
```

```typescript
// dropdown.component.ts
export class MyMenuComponent {
  public items: Array<{ text: string }> = [
    { text: "Add New Contact" },
    { text: "Edit Contact" },
    { text: "Refresh" },
    { text: "Help" },
  ];
  public text: string;
  public overlaySettings = {
    positionStrategy: new ConnectedPositioningStrategy({
      horizontalDirection: HorizontalAlignment.Left,
      horizontalStartPoint: HorizontalAlignment.Right,
      verticalStartPoint: VerticalAlignment.Bottom,
    }),
    scrollStrategy: new NoOpScrollStrategy(),
  };

  public selectionHandler(eventArgs: ISelectionEventArgs) {
    this.text = eventArgs.newSelection.value;
    eventArgs.cancel = true;
  }
}
```

```typescript
import { Component } from '@angular/core';
import { ConnectedPositioningStrategy, HorizontalAlignment, IgxOverlayOutletDirective, NoOpScrollStrategy, VerticalAlignment } from 'igniteui-angular/core';
import { ISelectionEventArgs, IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { IgxNavbarComponent } from 'igniteui-angular/navbar';
import { IgxIconButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxLabelDirective } from 'igniteui-angular/input-group';


@Component({
    selector: 'app-dropdown-menu',
    styleUrls: ['./dropdown-menu.component.scss'],
    templateUrl: './dropdown-menu.component.html',
    imports: [IgxNavbarComponent, IgxIconButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxIconComponent, IgxDropDownComponent, IgxDropDownItemComponent, IgxLabelDirective, IgxOverlayOutletDirective]
})
export class DropdownMenuComponent {
    public items: { text: string }[] =
        [{ text: 'Add New Contact' }, { text: 'Edit Contact' }, { text: 'Refresh' }, { text: 'Help' }];
    public text: string;
    public overlaySettings = {
        positionStrategy: new ConnectedPositioningStrategy({
            horizontalDirection: HorizontalAlignment.Left,
            horizontalStartPoint: HorizontalAlignment.Right,
            verticalStartPoint: VerticalAlignment.Bottom
        }),
        scrollStrategy: new NoOpScrollStrategy()
    };

    public onSelection(eventArgs: ISelectionEventArgs) {
        this.text = eventArgs.newSelection.value;
        eventArgs.cancel = true;
    }
}
```
```html
<div class="drop-down-wrapper">
  <igx-navbar title="Contacts">
    <button [igxToggleAction]="menu" [igxToggleOutlet]="outlet" [overlaySettings]="overlaySettings" [igxDropDownItemNavigation]="menu"
      igxIconButton="flat">
      <igx-icon family="material">more_vert</igx-icon>
    </button>
    <igx-drop-down #menu (selectionChanging)="onSelection($event)">
      @for (item of items; track item) {
        <igx-drop-down-item [value]="item.text">
          <div>
            {{ item.text }}
          </div>
        </igx-drop-down-item>
      }
    </igx-drop-down>
  </igx-navbar>

  <div class="textContainer">
    @if (text) {
      <label igxLabel>{{ text }}</label>
    }
  </div>

  <div class="overlayOutlet" igxOverlayOutlet #outlet="overlay-outlet"></div>
</div>
```
```scss
@use '../../../../variables' as *;

.drop-down-wrapper {
    width: 30%;
    margin: 8px;
    min-width: 280px;
    box-shadow: 0 1px 3px 0 elevation(2);

    .textContainer {
        height: 100px;
        border-radius: 2px;
        padding: 16px;
    }
}
```

### Multi-Level Drop Down menu

The following sample demonstrates how to implement a multi-level drop down menu that allows the user to quickly and easily navigate through a hierarchy of content by hovering on a series of nested menus.

For the implementation of the multi-level drop down menu we will use the [`IgxDropDownComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html) as well as a custom directive and service described below.

In order to configure the [`IgxDropDownItem`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdownitemcomponent.html) to open an additional drop down, add the `multiLevel` directive that would handle the [`overlay settings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html) of the nested drop down and manages its opened/closed state through its `innerDropdown` property.

```html
<igx-drop-down #dropdown1>
  <igx-drop-down-item [value]="'Web'" multiLevel [innerDropdown]="web">
    Web <igx-icon igxSuffix>chevron_right</igx-icon>
  </igx-drop-down-item>
  ...
</igx-drop-down>

<igx-drop-down #web>
  <igx-drop-down-item [value]="'App Builder'"> App Builder </igx-drop-down-item>
  ...
</igx-drop-down>
```

To configure the multi-level drop down to behave as a menu, you need to handle the [selectionChanging](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html#selectionChanging) event of all drop downs in the hierarchy and cancel the default behavior. Then, in order to handle the selection properly you could use the `MultiLevelService`'s `handleSelection` method and in order to prevent closing the drop down when clicking on a menu item, use the `MultiLevelService`'s `handleClosing` methods.

```ts
@ViewChildren(IgxDropDownComponent, { read: IgxDropDownComponent })
private _dropdowns: QueryList<IgxDropDownComponent>;

@ViewChild('dropdown1', { read: IgxDropDownComponent })
private _multiLevelDropdown: IgxDropDownComponent;

constructor(private _multiLevelService: MultiLevelService) { }

public ngAfterViewInit(): void {
    this._dropdowns.forEach((dropdown) => {
        dropdown.selectionChanging.subscribe((args) => {
            args.cancel = true;
            const value = args.newSelection.value;
            const categories = this._multiLevelService.categories;

            if (categories.includes(value)) {
                this.selection = '';
                return;
            }

            if (this._multiLevelService.isMultiLevel(dropdown)) {
                this._multiLevelService.handleSelection();
            } else {
                dropdown.close();
            }

            this.selection = value;
        });
    });

    this._multiLevelDropdown.closing.subscribe((args) => {
        this._multiLevelService.handleClosing(args);
    });
}
```

The result from the above configurations could be seen in the below sample.

```typescript
import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren, inject } from '@angular/core';
import { IgxDropDownComponent, IgxDropDownItemComponent } from 'igniteui-angular/drop-down';
import { ConnectedPositioningStrategy, HorizontalAlignment, OverlaySettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxNavbarComponent, IgxNavbarTitleDirective } from 'igniteui-angular/navbar';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxSuffixDirective } from 'igniteui-angular/input-group';
import {
  CROSS_PLATFORM_DATA,
  DESIGN_TO_CODE_DATA,
  DESKTOP_DATA,
  IGNITE_UI_DATA,
  SUPPORT_DATA,
  TESTING_TOOLS_DATA
} from './data';
import { MultiLevelService } from './multi-level.service';
import { MultiLevelDirective } from './multi-level.directive';


@Component({
    selector: 'app-dropdown-multi-level-menu',
    templateUrl: './dropdown-multi-level-menu.component.html',
    styleUrls: ['./dropdown-multi-level-menu.component.scss'],
    providers: [MultiLevelService],
    imports: [IgxNavbarComponent, IgxNavbarTitleDirective, IgxButtonDirective, IgxToggleActionDirective, IgxIconComponent, IgxDropDownComponent, IgxDropDownItemComponent, MultiLevelDirective, IgxSuffixDirective]
})
export class DropdownMultiLevelMenuComponent implements AfterViewInit {
  private _multiLevelService = inject(MultiLevelService);

  @ViewChildren(IgxDropDownComponent, { read: IgxDropDownComponent })
  private _dropdowns: QueryList<IgxDropDownComponent>;

  @ViewChild('dropdown1', { read: IgxDropDownComponent })
  private _multiLevelDropdown: IgxDropDownComponent;

  public supportData: string[] = SUPPORT_DATA;
  public desktopData: string[] = DESKTOP_DATA;
  public crossPlatformData: string[] = CROSS_PLATFORM_DATA;
  public designToCodeData: string[] = DESIGN_TO_CODE_DATA;
  public testingToolsData: string[] = TESTING_TOOLS_DATA;
  public igniteUIData: string[] = IGNITE_UI_DATA;

  public overlaySettings: OverlaySettings = {
    modal: false,
    positionStrategy: new ConnectedPositioningStrategy({
      horizontalStartPoint: HorizontalAlignment.Center,
      horizontalDirection: HorizontalAlignment.Center,
      verticalStartPoint: VerticalAlignment.Bottom,
      closeAnimation: undefined
    })
  };

  public selection: string = '';

  public ngAfterViewInit(): void {
    this._dropdowns.forEach((dropdown) => {
      dropdown.selectionChanging.subscribe((args) => {
        args.cancel = true;
        const value = args.newSelection.value;
        const categories = this._multiLevelService.categories;

        if (categories.includes(value)) {
          this.selection = '';
          return;
        }

        if (this._multiLevelService.isMultiLevel(dropdown)) {
          this._multiLevelService.handleSelection();
        } else {
          dropdown.close();
        }

        this.selection = value;
      });
    });

    this._multiLevelDropdown.closing.subscribe((args) => {
        this._multiLevelService.handleClosing(args);
    });
  }
}
```
```html
<div class="container">
  <igx-navbar>
    <div igxNavbarTitle>
      <img width="160px" src="https://static.infragistics.com/marketing/Website/General/Infragistics-horizontal.svg" />
    </div>

    <button igxButton [igxToggleAction]="dropdown1" [overlaySettings]="overlaySettings">
      <span>Design & Development</span> <igx-icon>expand_more</igx-icon>
    </button>
    <button igxButton [igxToggleAction]="dropdown2" [overlaySettings]="overlaySettings">
      <span>UX</span> <igx-icon>expand_more</igx-icon>
    </button>
    <button igxButton [igxToggleAction]="dropdown3" [overlaySettings]="overlaySettings">
      <span>Support</span> <igx-icon>expand_more</igx-icon>
    </button>
    <button igxButton [igxToggleAction]="dropdown4" [overlaySettings]="overlaySettings">
      <span>Pricing</span> <igx-icon>expand_more</igx-icon>
    </button>
  </igx-navbar>

  <div class="container">
    <p>{{ selection }}</p>
  </div>

  <!-- Drop Down Level 1 -->
  <igx-drop-down #dropdown1 [width]="'170px'">
    <igx-drop-down-item [value]="'Web'" multiLevel [innerDropdown]="web">
      Web <igx-icon igxSuffix>chevron_right</igx-icon>
    </igx-drop-down-item>

    <igx-drop-down-item [value]="'Desktop'" multiLevel [innerDropdown]="desktop">
      Desktop <igx-icon igxSuffix>chevron_right</igx-icon>
    </igx-drop-down-item>

    <igx-drop-down-item [value]="'Cross Platform'" multiLevel [innerDropdown]="crossPlatform">
      Cross Platform <igx-icon igxSuffix>chevron_right</igx-icon>
    </igx-drop-down-item>

    <igx-drop-down-item [value]="'Design to Code'" multiLevel [innerDropdown]="designToCode">
      Design to Code <igx-icon igxSuffix>chevron_right</igx-icon>
    </igx-drop-down-item>

    <igx-drop-down-item [value]="'Testing Tools'" multiLevel [innerDropdown]="testingTools">
      Testing Tools <igx-icon igxSuffix>chevron_right</igx-icon>
    </igx-drop-down-item>
  </igx-drop-down>

  <igx-drop-down #dropdown2>
    <igx-drop-down-item [value]="'Indigo.Design'">Indigo.Design</igx-drop-down-item>
    <igx-drop-down-item [value]="'App Builder'">App Builder</igx-drop-down-item>
  </igx-drop-down>

  <igx-drop-down #dropdown3>
    @for (item of supportData; track item) {
      <igx-drop-down-item [value]="item">
        {{ item }}
      </igx-drop-down-item>
    }
  </igx-drop-down>

  <igx-drop-down #dropdown4>
    <igx-drop-down-item [value]="'Product Pricing'">Product Pricing</igx-drop-down-item>
    <igx-drop-down-item [value]="'Contact Us'">Contact Us</igx-drop-down-item>
  </igx-drop-down>

  <!-- Drop Down Level 2 -->
  <igx-drop-down #web>
    <igx-drop-down-item [value]="'App Builder'">
      App Builder
    </igx-drop-down-item>
    <igx-drop-down-item [value]="'Ignite UI'" multiLevel [innerDropdown]="igniteUI">
      Ignite UI <igx-icon igxSuffix>chevron_right</igx-icon>
    </igx-drop-down-item>
  </igx-drop-down>

  <igx-drop-down #desktop>
    @for (item of desktopData; track item) {
      <igx-drop-down-item [value]="item">
        {{ item }}
      </igx-drop-down-item>
    }
  </igx-drop-down>

  <igx-drop-down #crossPlatform>
    @for (item of crossPlatformData; track item) {
      <igx-drop-down-item [value]="item">
        {{ item }}
      </igx-drop-down-item>
    }
  </igx-drop-down>

  <igx-drop-down #designToCode>
    @for (item of designToCodeData; track item) {
      <igx-drop-down-item [value]="item">
        {{ item }}
      </igx-drop-down-item>
    }
  </igx-drop-down>

  <igx-drop-down #testingTools>
    @for (item of testingToolsData; track item) {
      <igx-drop-down-item [value]="item">
        {{ item }}
      </igx-drop-down-item>
    }
  </igx-drop-down>

  <!-- Drop Down Level 3 -->
  <igx-drop-down #igniteUI>
    @for (item of igniteUIData; track item) {
      <igx-drop-down-item [value]="item">
        {{ item }}
      </igx-drop-down-item>
    }
  </igx-drop-down>
</div>
```
```scss
@use "../../../../variables" as *;

.container {
    padding: 16px;
}

igx-icon {
    --size: 18px;
}

[igxButton] {
    margin-inline-start: 0px;
}

[multiLevel] {
    cursor: default;
}

$custom-navbar-theme: navbar-theme(
    $background: #f8f9fa,
);

$custom-button-theme: button-theme(
    $foreground: #666,
    $hover-foreground: #0099ff,
    $focus-foreground: #0099ff,
    $active-foreground: #0099ff,
    $background: transparent,
    $hover-background: transparent,
    $focus-background: transparent,
    $active-background: transparent,
);

:host::ng-deep {
    --ig-button-font-size: 0.75rem;

    @include css-vars($custom-navbar-theme);
    @include css-vars($custom-button-theme);
}
```

> [!NOTE]
> To display the Dropdown component opened initially, it is recommended to set the open method as a callback of the requestAnimationFrame method. This will ensure that the DOM tree is repainted and all elements are correctly positioned.

### Navigation directive

Use the [igxDropDownItemNavigation](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdownitemnavigationdirective.html) directive to enable keyboard navigation for the `igxDropDown` component. In order to allow the directive to handle all triggered events, it should be applied to the active (focused) element or a parent container. By default, a drop-down or its items don't take focus, so the directive can be placed on a `button` or `input` that will control the drop-down. The navigation directive value should target a component that is an instance or a descendant of the [IgxDropDownBaseDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdownbasedirective.html) class.

The following sample demonstrates an input that opens and closes the `igxDropDown` instance on click. Applying the [igxDropDownItemNavigation](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdownitemnavigationdirective.html) directive on the input itself will enable keyboard navigation when using the up and down arrow keys. This relies on the default drop-down behavior with the [allowItemsFocus](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html#allowItemsFocus) property set to `false` to allow the input to maintain focus.

```html
<!-- input-dropdown.component.html -->
<igx-input-group #inputGroup [igxToggleAction]="dropDown">
  <input
    type="text"
    igxInput
    [igxDropDownItemNavigation]="dropDown"
    readonly="true"
    placeholder="choose an option"
    [value]="dropDown.selectedItem?.value"
    (keydown.ArrowDown)="openDropDown()"
  />

  <igx-suffix igxIconButton="flat" igxRipple>
    <igx-icon>arrow_drop{{ dropDown.collapsed ? '_down' : '_up' }}</igx-icon>
  </igx-suffix>
</igx-input-group>

<span>Selected: {{ dropDown.selectedItem?.value }}</span>
<igx-drop-down #dropDown [width]="'160px'">
  <igx-drop-down-item *ngFor="let item of items" [value]="item.field">
    {{ item.field }}
  </igx-drop-down-item>
</igx-drop-down>
```

```typescript
// input-dropdown.component.ts
export class InputDropDownComponent {
  @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;
  @ViewChild('inputGroup', { read: IgxInputGroupComponent })
  public inputGroup: IgxInputGroupComponent;

  public items: Array<{ field: string }> = [
    { field: 'Option 1' },
    { field: 'Option 2' },
    { field: 'Option 3' },
  ];

  public openDropDown() {
    if (this.igxDropDown.collapsed) {
      this.igxDropDown.open({
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy({
          target: this.inputGroup.element.nativeElement,
        }),
      });
    }
  }
}
```

```typescript
import { Component, ViewChild } from '@angular/core';
import { ConnectedPositioningStrategy } from 'igniteui-angular/core';
import { IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { IgxInputDirective, IgxInputGroupComponent, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconButtonDirective, IgxRippleDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-sample-4',
    styleUrls: ['./dropdown-sample-4.component.scss'],
    templateUrl: './dropdown-sample-4.component.html',
    imports: [IgxInputGroupComponent, IgxToggleActionDirective, IgxInputDirective, IgxDropDownItemNavigationDirective, IgxSuffixDirective, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IgxDropDownComponent, IgxDropDownItemComponent]
})
export class DropDownSample4Component {
    @ViewChild(IgxDropDownComponent, { static: true }) public igxDropDown: IgxDropDownComponent;
    @ViewChild('inputGroup', { read: IgxInputGroupComponent, static: true }) public inputGroup: IgxInputGroupComponent;

    public items: { field: string }[] = [
        { field: 'Option 1' },
        { field: 'Option 2' },
        { field: 'Option 3' }
    ];

    public openDropDown() {
        if (this.igxDropDown.collapsed) {
            this.igxDropDown.open({
                target: this.inputGroup.element.nativeElement,
                modal: false,
                positionStrategy: new ConnectedPositioningStrategy()
            });
        }
    }
}
```
```html
<igx-input-group #inputGroup [igxToggleAction]="dropDown" class="input-group">
  <input #input class="input" type="text" igxInput [igxDropDownItemNavigation]="dropDown" readonly="true"
    placeholder="Choose an option" [value]="dropDown.selectedItem?.value" (keydown.ArrowDown)="openDropDown()" />
    <igx-suffix igxIconButton="flat" class="dropdownToggleButton" igxRipple>
      <igx-icon>arrow_drop{{ dropDown.collapsed ? '_down' : '_up' }}</igx-icon>
    </igx-suffix>
  </igx-input-group>
  <span>Selected: {{ dropDown.selectedItem?.value }}</span>
  <igx-drop-down #dropDown [width]="'180px'">
    @for (item of items; track item) {
      <igx-drop-down-item [value]="item.field">
        {{ item.field }}
      </igx-drop-down-item>
    }
  </igx-drop-down>
```
```scss
:host {
    margin: 8px;
}

.input {
    padding-left: 0.2rem;
}

.input-group {
    width: 220px;
}

.igx-input-group {
    display: inline-block;
}

span {
    display: inline;
    padding-left: 24px;
}
```

<div class="divider--half"></div>

Applying the directive will ensure the following actions are executed as a result from the keyboard navigation:

| Name         | Description                                              |
| :----------- | :------------------------------------------------------- |
| `Enter`      | Select item from the drop down and closes the drop down. |
| `Space`      | Select item from the drop down and closes the drop down. |
| `Esc`        | Closes the drop down.                                    |
| `Arrow Down` | Navigate to the next item in the target component.       |
| `Arrow Up`   | Navigate to the previous item in the target component.   |
| `End`        | Navigate to the last item in the target component.       |
| `Home`       | Navigate to the first item in the target component.      |

When the `allowItemsFocus` property is enabled, the drop down items gain tab index and are focused when active. The focused drop-down items are the ones that trigger events, during keyboard navigation, which means that the navigation directive should be applied on the individual drop-down items.

```html
<igx-input-group [igxToggleAction]="dropDown">
  <input igxInput type="text" />
</igx-input-group>
<igx-drop-down #dropDown [allowItemsFocus]="true">
  <igx-drop-down-item *ngFor="let p of provinceData" [igxDropDownItemNavigation]="dropDown">
    {{ p }}
  </igx-drop-down-item>
</igx-drop-down>
```

## Styling

### Dropdown Theme Property Map

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
      <td>
        <details><summary><strong>$background-color</strong></summary></details>
      </td>
      <td>$item-text-color</td>
      <td>The drop-down item text color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-item-background</td>
      <td>The drop-down hover item background color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focused-item-background</td>
      <td>The drop-down focused item background color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focused-item-text-color</td>
      <td>The drop-down focused item text color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$selected-item-background</td>
      <td>The drop-down selected item background color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$disabled-item-text-color</td>
      <td>The drop-down disabled item text color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$header-text-color</td>
      <td>The drop-down header text color.</td>
    </tr>
  </tbody>
  <tbody class="group">
    <tr class="primary">
      <td>
        <details><summary><strong>$item-text-color</strong></summary></details>
      </td>
      <td>$item-icon-color</td>
      <td>The drop-down item icon color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-item-text-color</td>
      <td>The drop-down item hover text color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$hover-item-icon-color</td>
      <td>The drop-down item hover icon color.</td>
    </tr>
  </tbody>
  <tbody class="group">
    <tr class="primary">
      <td>
        <details><summary><strong>$selected-item-background</strong></summary></details>
      </td>
      <td>$selected-item-text-color</td>
      <td>The drop-down selected item text color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$selected-item-icon-color</td>
      <td>The drop-down selected item icon color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$selected-hover-item-background</td>
      <td>The drop-down selected item hover background color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$selected-hover-item-text-color</td>
      <td>The drop-down selected item hover text color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$selected-hover-item-icon-color</td>
      <td>The drop-down selected item hover icon color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$selected-focus-item-background</td>
      <td>The drop-down selected item focus background color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$selected-focus-item-text-color</td>
      <td>The drop-down selected item focus text color.</td>
    </tr>
    <tr class="dependent">
      <td></td>
      <td>$focused-item-border-color</td>
      <td>The drop-down item focused border color.</td>
    </tr>
  </tbody>
</table>

Using the [Ignite UI for Angular Theming](themes/index.md), we can greatly alter the drop-down appearance. First, in order for us to use the functions exposed by the theme engine, we need to import the `index` file in our style file:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`drop-down-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-drop-down-theme) and accepts some of the default theme's parameters. When you provide a certain background color, the theme automatically calculates the state colors and appropriate contrasting foregrounds. By setting the `$background` property, you'll get a fully styled dropdown.

```scss
$custom-drop-down-theme: drop-down-theme(
  $header-text-color: #345779,
  $item-text-color: #2dabe8,
  $hover-item-text-color: #345779,
  $selected-item-background: #345779,
);
```

The last step is to pass the custom drop-down theme to a class or element selector:

```scss
.drop-down__scroll-container {
  @include css-vars($custom-drop-down-theme);
}
```

### Demo

```typescript
import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ISelectionEventArgs, IgxDropDownComponent, IgxDropDownGroupComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { getHeroClassData, IHeroClass } from '../../../data/heroData';


@Component({
    selector: 'app-dropdown-styling',
    styleUrls: ['./dropdown-styling.component.scss'],
    templateUrl: './dropdown-styling.component.html',
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownComponent, IgxDropDownGroupComponent, IgxDropDownItemComponent]
})
export class DropDownStylingComponent implements OnInit {
    elem = inject(ElementRef);

    @ViewChild('button', { static: true }) public button: ElementRef;
    public heroClasses: IHeroClass[] = [];
    public hero = 'Choose your hero';

    public ngOnInit() {
        this.heroClasses = getHeroClassData();
    }

    public handleDropDownSelection(event: ISelectionEventArgs) {
        this.hero = event.newSelection.value;
    }
}
```
```html
<button #button class="drop-down" igxButton="contained" [igxToggleAction]="dropDown" [overlaySettings]="{outlet: elem}"
[igxDropDownItemNavigation]="dropDown">{{ hero }}</button>
<igx-drop-down #dropDown class="drop-down" (selectionChanging)="handleDropDownSelection($event)">
  <div class="drop-down__scroll-container">
    @for (classGroup of heroClasses; track classGroup) {
      <igx-drop-down-item-group [label]="classGroup['name']">
        @for (class of classGroup['entries']; track class) {
          <igx-drop-down-item [value]='class.name'>
            {{ class.name }}
          </igx-drop-down-item>
        }
      </igx-drop-down-item-group>
    }
  </div>
</igx-drop-down>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-drop-down-theme: drop-down-theme(
  $header-text-color: #345779,
  $item-text-color: #2dabe8,
  $hover-item-text-color: #345779,
  $selected-item-background: #345779,
);

.drop-down__scroll-container {
  @include css-vars($custom-drop-down-theme);
}
```

<div class="divider--half"></div>

## API Summary

- [IgxDropDownComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html)
- [IgxDropDownComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-drop-down-theme)
- [IgxDropDownItemComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdownitemcomponent.html).
- [IgxOverlay](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html)
- [IgxOverlay Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)
- [IgxDividerDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdividerdirective.html)
- [IgxDividerDirective Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-divider-theme)

## Theming Dependencies

- [IgxOverlay Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-overlay-theme)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

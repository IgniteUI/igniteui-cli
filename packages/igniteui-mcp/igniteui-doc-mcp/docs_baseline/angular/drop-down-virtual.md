---
title: Angular Drop Down Component – Ignite UI for Angular | Infragistics | MIT license
description: Use Ignite UI for Angular Virtualized Drop Down to display a very large list of items which supports a single item selection.
keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Drop Down components, Angular Drop Down controls, Angular Control Large Item List, Angular Control Singe Selection
license: MIT
llms:
  description: "The Ignite UI for Angular Drop Down component can host the Virtual Scroll component in order to display a very large list of items for its selection."
_tocName: Virtual Drop Down
---
# Virtual Drop Down

The Ignite UI for Angular Drop Down component can host the [Virtual Scroll](./layouts/virtual-scroll.md) component in order to display a very large list of items for its selection. Only the items in the drop-down's viewport are rendered, while selection and keyboard navigation work over the whole list.

## Angular Virtual Drop Down Example

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { IgxVirtualItemDirective, IgxVirtualScrollComponent } from 'igniteui-angular/virtual-scroll';

// tslint:disable:object-literal-sort-keys
// tslint:disable-next-line:interface-name
interface DataItem {
    id: string;
    name: string;
    header: boolean;
    disabled: boolean;
}

@Component({
    selector: 'app-drop-down-virtual',
    templateUrl: './drop-down-virtual.component.html',
    styleUrls: ['./drop-down-virtual.component.scss'],
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownComponent, IgxVirtualScrollComponent, IgxVirtualItemDirective, IgxDropDownItemComponent]
})
export class DropDownVirtualComponent {
  public items: DataItem[];
  public itemHeight = 40;

  constructor() {
    const itemsCollection: DataItem[] = [];
    for (let i = 0; i < 50; i++) {
        const series = (i * 10).toString();
        itemsCollection.push({
            id: series,
            name: `${series} Series`,
            header: true,
            disabled: false
        });
        for (let j = 0; j < 10; j++) {
            itemsCollection.push({
                id: `${series}_${j}`,
                name: `Series ${series}, ${i * 10 + j} Model`,
                header: false,
                disabled: j % 9 === 0
            });
        }
    }
    this.items = itemsCollection;
  }
}
```
```html
<button class="button" igxButton="contained" [igxToggleAction]="dropdown" [igxDropDownItemNavigation]="dropdown">Item Series</button>
<igx-drop-down #dropdown>
    <igx-virtual-scroll class="drop-down-virtual-wrapper" [data]="items" [estimatedItemSize]="itemHeight">
        <ng-template igxVirtualItem let-item let-index="index">
            <igx-drop-down-item [value]="item" [isHeader]="item.header" [disabled]="item.disabled" [index]="index">
                {{ item.name }}
            </igx-drop-down-item>
        </ng-template>
    </igx-virtual-scroll>
</igx-drop-down>
<div class="selection">Selected Model: <span>{{ dropdown.selectedItem?.value.name }}</span></div>
```
```scss
// The virtual scroll host is the scroll container, so it needs a fixed height.
.drop-down-virtual-wrapper {
    height: 240px;
    width: 180px;
}

:host {
    display: flex;
    flex-flow: row;
    margin: 8px;
}

.button {
    width: 180px;
}

.selection {
    line-height: 2.25rem;
    padding: 0px 8px;
}


.igx-drop-down__item {
    padding: 0 0.8rem;
}
```

## Usage

### First Steps

Import the drop-down together with the `IgxVirtualScroll` and the `IgxVirtualItemDirective`, which marks the template of a list item:

```typescript
// drop-down-virtual.component.ts
import { Component } from '@angular/core';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { IgxVirtualItemDirective, IgxVirtualScrollComponent } from 'igniteui-angular/virtual-scroll';
// import { IgxVirtualItemDirective, IgxVirtualScrollComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-drop-down-virtual',
    templateUrl: './drop-down-virtual.component.html',
    styleUrls: ['./drop-down-virtual.component.scss'],
    imports: [
        IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective,
        IgxDropDownComponent, IgxDropDownItemComponent,
        IgxVirtualScrollComponent, IgxVirtualItemDirective
    ]
})
export class DropDownVirtualComponent { }
```

### Template Configuration

Next, place an `igx-virtual-scroll` inside the drop-down and render each item with an `ng-template` marked with `igxVirtualItem`. The drop-down detects the projected virtual scroll and uses it for scrolling, keyboard navigation, and selection:

```html
<!-- drop-down-virtual.component.html -->
<button igxButton [igxToggleAction]="dropdown" [igxDropDownItemNavigation]="dropdown">
    Item Series
</button>
<igx-drop-down #dropdown>
    <igx-virtual-scroll class="drop-down-virtual-wrapper" [data]="items" [estimatedItemSize]="itemHeight">
        <ng-template igxVirtualItem let-item let-index="index">
            <igx-drop-down-item [value]="item" [isHeader]="item.header" [disabled]="item.disabled" [index]="index">
                {{ item.name }}
            </igx-drop-down-item>
        </ng-template>
    </igx-virtual-scroll>
</igx-drop-down>
<div>Selected Model: <span>{{ dropdown.selectedItem?.value.name }}</span></div>
```

The inputs of `igx-virtual-scroll` used here are:

- `data` - the whole list of items. It is compared by reference, so assign a new array to change it.
- `estimatedItemSize` - the height of an item (in `px`) before it is rendered and measured. Set it to the real height of the drop-down items, so that the scrollbar and keyboard navigation are accurate from the start.

In order to assure uniqueness of the items, pass `item` inside of the [`value`](mcp:get_api_reference?platform=angular&component=IgxDropDownItemComponent&member=value) input and `index` inside of the [`index`](mcp:get_api_reference?platform=angular&component=IgxDropDownItemComponent&member=index) input of the `igx-drop-down-item`.
To preserve selection while scrolling, the drop-down item needs to have a reference to the data items it is bound to.

**Note:** 
For the drop-down to work with a virtualized list of items, [`value`](mcp:get_api_reference?platform=angular&component=IgxDropDownItemComponent&member=value) and [`index`](mcp:get_api_reference?platform=angular&component=IgxDropDownItemComponent&member=index) inputs **must** be passed to all items.

**Note:** 
It is strongly advised for each item to have an unique value passed to the `[value]` input. Otherwise, it might lead to unexpected results (incorrect selection).

**Note:** 
When the drop-down uses virtualized items, the type of [`dropdown.selectedItem`](mcp:get_api_reference?platform=angular&component=IgxDropDownComponent&member=selecteditem) becomes `{ value: any, index: number }`, where `value` is a reference to the data item passed inside of the `[value]` input and `index` is the item's index in the data set

### Component Definition

Inside of the component, declare a moderately large list of items (containing both headers and disabled items), which will be displayed in the drop-down, and the height of an item:

```typescript
// drop-down-virtual.component.ts
export class DropDownVirtualComponent {
  public items: DataItem[];
  public itemHeight = 40;

  constructor() {
    const itemsCollection: DataItem[] = [];
    for (let i = 0; i < 50; i++) {
        const series = (i * 10).toString();
        itemsCollection.push({
            id: series,
            name: `${series} Series`,
            header: true,
            disabled: false
        });
        for (let j = 0; j < 10; j++) {
            itemsCollection.push({
                id: `${series}_${j}`,
                name: `Series ${series}, ${i * 10 + j} Model`,
                header: false,
                disabled: j % 9 === 0
            });
        }
    }
    this.items = itemsCollection;
  }
}
```

### Styles

The `igx-virtual-scroll` element is the scroll container of the list, so it needs a fixed height. No wrapping element or `overflow` rule is needed:

```scss
// drop-down-virtual.component.scss
.drop-down-virtual-wrapper {
    height: 240px;
    width: 180px;
}
```

## Remote Data

The `igx-drop-down` also supports loading pages of remote data. Bind the virtual scroll's `dataWindow` input to the loaded page, and load the next page from the range that the `stateChange` output reports. The list is as long as the whole remote collection, so the scrollbar spans every item, while only the loaded page is in memory.

### Template

The template differs from the previous example only in the data binding: `dataWindow` takes the place of `data`, and `stateChange` requests the pages. The `index` template variable is the index of the item in the whole remote collection:

```html
<igx-drop-down #remoteDropDown>
    <igx-virtual-scroll
        class="drop-down-virtual-wrapper"
        [dataWindow]="page()"
        [estimatedItemSize]="itemHeight"
        (stateChange)="onStateChange($event)">
        <ng-template igxVirtualItem let-item let-index="index">
            <igx-drop-down-item [value]="item.ProductName" [index]="index">
                {{ item.ProductName }}
            </igx-drop-down-item>
        </ng-template>
    </igx-virtual-scroll>
</igx-drop-down>
```

### Loading pages

First, define a remote service that returns a page of the collection together with the total number of records:

```typescript
// remote.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RemoteService {
    private http = inject(HttpClient);

    // Assuming that the API service is RESTful and can take the following:
    // skip: start index of the data that we fetch
    // count: number of records we fetch
    public getPage(skip: number, count: number): Observable<{ value: any[]; '@odata.count': number }> {
        return this.http.get<{ value: any[]; '@odata.count': number }>(
            `https://dummy.db/dummyEndpoint?$skip=${skip}&$top=${count}&$count=true`
        );
    }
}
```

In the component, keep the loaded page in a signal of type `VirtualDataWindow`. Load the first page on initialization, and a new one whenever `stateChange` reports a range that the loaded page does not cover. Cancel the previous request, so a slow response cannot replace a newer page:

```typescript
// drop-down-remote.component.ts
import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { VirtualDataWindow, VirtualScrollState } from 'igniteui-angular/virtual-scroll';
import { Subscription } from 'rxjs';

/** Extra records requested on each side of the range the viewport wants. */
const BUFFER = 10;

@Component({
    providers: [RemoteService],
    selector: 'app-drop-down-remote',
    templateUrl: './drop-down-remote.component.html',
    styleUrls: ['./drop-down-remote.component.scss'],
    imports: [/* the same imports as in the local example */]
})
export class DropDownRemoteComponent implements OnInit, OnDestroy {
    private remoteService = inject(RemoteService);
    public itemHeight = 40;
    public readonly page = signal<VirtualDataWindow<any>>({ items: [], startIndex: 0, totalCount: 0 });
    private pending?: Subscription;

    public ngOnInit() {
        this.loadPage(0, 2 * BUFFER);
    }

    public onStateChange(state: VirtualScrollState) {
        const page = this.page();
        if (state.startIndex >= page.startIndex && state.endIndex < page.startIndex + page.items.length) {
            return; // The loaded page already covers the range.
        }
        const startIndex = Math.max(0, state.startIndex - BUFFER);
        this.loadPage(startIndex, state.endIndex - startIndex + 1 + BUFFER);
    }

    public ngOnDestroy() {
        this.pending?.unsubscribe();
    }

    private loadPage(startIndex: number, count: number) {
        this.pending?.unsubscribe();
        this.pending = this.remoteService.getPage(startIndex, count).subscribe(data => {
            this.page.set({ items: data.value, startIndex, totalCount: data['@odata.count'] });
        });
    }
}
```

When the drop-down navigates to an item that is not loaded yet, for example with the `End` key, the virtual scroll scrolls to it, `stateChange` reports the new range, and the page that contains the item is loaded.

### Remote Virtualization - Demo

The result of the above configuration is a drop-down that dynamically loads the data it should display, depending on the scrollbar's state:

```typescript
import { Component, OnDestroy, OnInit, ViewChild, inject, signal } from '@angular/core';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { VerticalAlignment } from 'igniteui-angular/core';
import { IgxVirtualItemDirective, IgxVirtualScrollComponent, VirtualDataWindow, VirtualScrollState } from 'igniteui-angular/virtual-scroll';
import { Subscription } from 'rxjs';
import { RemoteNWindService } from '../../../services/remoteNwind.service';

/** Extra records requested on each side of the range the viewport wants. */
const BUFFER = 10;

@Component({
    providers: [RemoteNWindService],
    selector: 'app-drop-down-remote',
    templateUrl: './drop-down-remote.component.html',
    styleUrls: ['./drop-down-remote.component.scss'],
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownComponent, IgxVirtualScrollComponent, IgxVirtualItemDirective, IgxDropDownItemComponent, IgxToastComponent]
})
export class DropDownRemoteComponent implements OnInit, OnDestroy {
    private remoteService = inject(RemoteNWindService);

    @ViewChild('loadingToast', { read: IgxToastComponent, static: true })
    public loadingToast: IgxToastComponent;
    @ViewChild('remoteDropDown', { read: IgxDropDownComponent, static: true })
    public remoteDropDown: IgxDropDownComponent;
    public itemHeight = 40;

    /** The loaded page; the list is as long as `totalCount`, so the scrollbar spans every product. */
    public readonly page = signal<VirtualDataWindow<any>>({ items: [], startIndex: 0, totalCount: 0 });

    private pending: Subscription;

    public ngOnInit() {
        this.loadPage(0, 2 * BUFFER);
    }

    /** `stateChange` reports the range the viewport wants; load a page when the loaded one does not cover it. */
    public onStateChange(state: VirtualScrollState) {
        const page = this.page();
        if (state.startIndex >= page.startIndex && state.endIndex < page.startIndex + page.items.length) {
            return;
        }

        const startIndex = Math.max(0, state.startIndex - BUFFER);
        this.loadPage(startIndex, state.endIndex - startIndex + 1 + BUFFER);
    }

    public ngOnDestroy() {
        this.pending?.unsubscribe();
    }

    private loadPage(startIndex: number, count: number) {
        // Cancel the previous request, so a slow response cannot replace a newer page.
        this.pending?.unsubscribe();
        this.loadingToast.positionSettings.verticalDirection = VerticalAlignment.Middle;
        this.loadingToast.autoHide = false;
        this.loadingToast.open('Loading Remote Data...');

        this.pending = this.remoteService.getData({ startIndex, chunkSize: count }, null, (data) => {
            this.page.set({ items: data.value, startIndex, totalCount: data['@odata.count'] });
            this.loadingToast.close();
        });
    }
}
```
```html
<button class="button" igxButton="contained" [igxToggleAction]="remoteDropDown" [igxDropDownItemNavigation]="remoteDropDown">Products</button>
<igx-drop-down #remoteDropDown>
    <igx-virtual-scroll
        class="drop-down-virtual-wrapper"
        [dataWindow]="page()"
        [estimatedItemSize]="itemHeight"
        (stateChange)="onStateChange($event)">
        <ng-template igxVirtualItem let-item let-index="index">
            <igx-drop-down-item [value]="item.ProductName" [disabled]="item.disabled" [index]="index">
                {{ item.ProductName }}
            </igx-drop-down-item>
        </ng-template>
    </igx-virtual-scroll>
</igx-drop-down>
<div class="selection">Selected Product:
    <span>{{ remoteDropDown.selectedItem?.value }}</span>
</div>
<igx-toast #loadingToast></igx-toast>
```
```scss
// The virtual scroll host is the scroll container, so it needs a fixed height.
.drop-down-virtual-wrapper {
    width: 260px;
    height: 320px;
}

:host {
    display: flex;
    flex-flow: row;
    margin: 8px;
}

.button {
    width: 260px;
}

.selection {
    line-height: 2.25rem;
    padding: 0px 8px;
}

.igx-drop-down__item {
    padding: 0 0.8rem;
}
```

## Notes and Limitations

Using the drop-down with a virtualized list of items enforces some limitations. Please, be aware of the following when trying to set up a drop-down list with `igx-virtual-scroll`:

- The `igx-virtual-scroll` element must have a fixed `height`, because it is the scroll container of the list.
- `<igx-drop-down-item-group>` cannot be used for grouping items when the list is virtualized. Use the `isHeader` property instead
- The `items` accessor will return only the list of non-header drop-down items that are currently in the virtualized view.
- [`dropdown.selectedItem`](mcp:get_api_reference?platform=angular&component=IgxDropDownComponent&member=selectedItem) is of type `{ value: any, index: number }`
- The object emitted by [`selectionChanging`](mcp:get_api_reference?platform=angular&component=IgxDropDownComponent&member=selectionChanging) changes to `const emittedEvent: { newSelection: { value: any, index: number }, oldSelection: { value: any, index: number }, cancel: boolean, }`
- `dropdown.setSelectedItem` should be called with the **item's index in the data set**
- setting the drop-down item's `[selected]` input will **not** mark the item in the drop-down selection

The drop-down also works with a projected [`*igxFor`](./for-of.md) directive, as in earlier versions. The directive is deprecated in favor of the Virtual Scroll, so use `igx-virtual-scroll` for new drop-downs.

## API References
- `IgxVirtualScroll`
- [`IgxDropDown`](mcp:get_api_reference?platform=angular&component=IgxDropDownComponent)

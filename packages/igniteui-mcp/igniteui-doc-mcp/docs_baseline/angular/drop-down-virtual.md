---
title: Angular Drop Down Component – Ignite UI for Angular | Infragistics | MIT license
_description: Use Ignite UI for Angular Virtualized Drop Down to display a very large list of items which supports a single item selection.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Drop Down components, Angular Drop Down controls, Angular Control Large Item List, Angular Control Singe Selection
_license: MIT
_tocName: Virtual Drop Down
---

# Virtual Drop Down

The Ignite UI for Angular Drop Down component can fully integrate with the [`IgxForOf`](for-of.md) directive in order to display a very large list of items for its selection.

## Angular Virtual Drop Down Example

```typescript
import { Component } from '@angular/core';
import { IgxButtonDirective, IgxForOfDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';

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
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownComponent, IgxForOfDirective, IgxDropDownItemComponent]
})
export class DropDownVirtualComponent {
  public items: DataItem[];
  public itemHeight = 48;
  public itemsMaxHeight = 240;

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
    <div class="drop-down-virtual-wrapper">
        <igx-drop-down-item
            *igxFor="let item of items; index as index; scrollOrientation: 'vertical'; containerSize: itemsMaxHeight; itemSize: itemHeight;"
            [value]="item" [isHeader]="item.header" role="option" [disabled]="item.disabled"
            [index]="index">
            {{ item.name }}
        </igx-drop-down-item>
    </div>
</igx-drop-down>
<div class="selection">Selected Model: <span>{{ dropdown.selectedItem?.value.name }}</span></div>
```
```scss
.drop-down-virtual-wrapper {
    overflow: hidden;
    max-height: 240px;
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

<div class="divider--half"></div>

## Usage

### First Steps

In order to configure the drop-down to display a list of virtual items, you need to fulfill some prerequisites.
First, we need to import the `IgxForOfModule` in the module of the component that will declare our drop-down.

```typescript
// app.module.ts
import { IgxForOfModule } from 'igniteui-angular/directives';
// import { IgxForOfModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxForOfModule
    ]
})
export class AppModule {}
```

### Template Configuration

Next, we need to create the drop-down component's template, looping through the data using [`*igxFor`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html) instead of `*ngFor`. The `*igxFor` directive needs some additional configuration in order to properly display all of the items:

```html
<!-- drop-down-virtual.component.html -->
<button igxButton [igxToggleAction]="dropdown"
        [igxDropDownItemNavigation]="dropdown">
        Item Series
</button>
<igx-drop-down #dropdown>
    <div class="drop-down-virtual-wrapper" style="height: {{ itemsMaxHeight }}px;">
        <igx-drop-down-item
            *igxFor="let item of items; index as index;
                     scrollOrientation: 'vertical';
                     containerSize: itemsMaxHeight;
                     itemSize: itemHeight;"
            [value]="item" [isHeader]="item.header"
            role="option" [disabled]="item.disabled"
            [index]="index">
            {{ item.name }}
        </igx-drop-down-item>
    </div>
</igx-drop-down>
<div>Selected Model: <span>{{ dropdown.selectedItem?.value.name }}</span></div>
```

The additional parameters passed to the `*igxFor` directive are:

- `index` - captures the index of the current item in the data set
- `scrollOrientation` - should always be `'vertical'`
- `containerSize` - the size of the virtualized container (in `px`). This needs to be enforced on the wrapping `<div>` as well
- `itemSize` - the size of the items that will be displayed (in `px`)

In order to assure uniqueness of the items, pass `item` inside of the [`value`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdownitemcomponent.html#value) input and `index` inside of the [`index`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdownitemcomponent.html#index) input of the `igx-drop-down-item`.
To preserve selection while scrolling, the drop-down item needs to have a reference to the data items it is bound to.

> [!NOTE]
> For the drop-down to work with a virtualized list of items, [`value`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdownitemcomponent.html#value) and [`index`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdownitemcomponent.html#index) inputs **must** be passed to all items.
> [!NOTE]
> It is strongly advised for each item to have an unique value passed to the `[value]` input. Otherwise, it might lead to unexpected results (incorrect selection).
> [!NOTE]
> When the drop-down uses virtualized items, the type of [`dropdown.selectedItem`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html#selecteditem) becomes `{ value: any, index: number }`, where `value` is a reference to the data item passed inside of the `[value]` input and `index` is the item's index in the data set


### Component Definition

Inside of the component's constructor, we'll declare a moderately large list of items (containing both headers and disabled items), which will be displayed in the drop-down. We will also need to declare `itemHeight` and `itemsMaxHeight`:

```typescript
// drop-drop-virtual.component.ts
export class DropDownVirtualComponent {
  public items: DataItem[];
  public itemHeight = 48;
  public itemsMaxHeight = 320;

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

The last part of the configuration is to set `overflow: hidden` to the wrapping div in order to prevent the appearance of two scroll bars (one from the `igxFor` and one from the container itself):

```scss
// drop-drop-virtual.component.scss
.drop-down-virtual-wrapper {
  overflow: hidden;
}
```

## Remote Data

The `igx-drop-down` supports loading chunks of remote data using the `*igxFor` structural directive. The configuration is similar to the one with local items, the main difference being how data chunks are loaded.

### Template

The drop-down template does not need to change much compared to the previous example - we still need to specify a wrapping div, style it accordingly and write out the complete configuration for the `*igxFor`. Since we'll be getting our data from a remote source, we need to specify that our data will be an observable and pass it through Angular's `async` pipe:

```html
<igx-drop-down #remoteDropDown>
    <div class="drop-down-virtual-wrapper">
        <igx-drop-down-item
            *igxFor="let item of rData | async; index as index;
                     scrollOrientation: 'vertical';
                     containerSize: itemsMaxHeight;
                     itemSize: itemHeight;"
            [value]="item.ProductName" role="option"
            [disabled]="item.disabled" [index]="index">
            {{ item.ProductName }}
        </igx-drop-down-item>
    </div>
</igx-drop-down>
```

### Handling chunk load

As you can see, the template is almost identical to the one in the previous example. In this remote data scenario, the code behind will do most of the heavy lifting.

First, we need to define a remote service for fetching data:

```typescript
// remote.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IForOfState } from 'igniteui-angular/directives';
// import { IForOfState } from '@infragistics/igniteui-angular'; for licensed package
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class RemoteService {
    public remoteData: Observable<any[]>;
    private _remoteData: BehaviorSubject<any[]>;

    constructor(private http: HttpClient) {
        this._remoteData = new BehaviorSubject([]);
        this.remoteData = this._remoteData.asObservable();
    }

    public getData(data?: IForOfState, cb?: (any) => void): any {
        // Assuming that the API service is RESTful and can take the following:
        // skip: start index of the data that we fecth
        // count: number of records we fetch
    this.http.get(`https://dummy.db/dummyEndpoint?skip=${data.startIndex}&count=${data.chunkSize}`).subscribe((data) => {
        // emit the values through the _remoteData subject
        this._remoteData.next(data);
    })
}
```

The service exposes an `Observable` under `remoteData`. We will inject our service and bind to that property in our remote drop-down component:

```typescript
// remote-drop-down.component.ts
@Component({
    providers: [RemoteService],
    selector: 'app-drop-down-remote',
    templateUrl: './drop-down-remote.component.html',
    styleUrls: ['./drop-down-remote.component.scss']
})
export class DropDownRemoteComponent implements OnInit, OnDestroy {
    @ViewChild(IgxForOfDirective, { read: IgxForOfDirective })
    public remoteForDir: IgxForOfDirective<any>;
    @ViewChild('remoteDropDown', { read: IgxDropDownComponent })
    public remoteDropDown: IgxDropDownComponent;
    public itemHeight = 48;
    public itemsMaxHeight = 480;
    public prevRequest: Subscription;
    public rData: any;

    private destroy$ = new Subject();
    constructor(private remoteService: RemoteService) { }

    public ngAfterViewInit() {
        const initialState = { startIndex: 0, chunkSize: Math.ceil(this.itemsMaxHeight / this.itemHeight) }
        this.remoteService.getData(initialState, (data) => {
            this.remoteForDir.totalItemCount = data['@odata.count'];
        });
        // Subscribe to igxForOf.chunkPreload and load new data from service
        this.remoteForDir.chunkPreload.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            this.dataLoading(data);
        });
    }

    public dataLoading(evt) {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }
        this.prevRequest = this.remoteService.getData(
            evt,
            (data) => {
                this.remoteForDir.totalItemCount = data['@odata.count'];
            });
    }

    public ngOnInit() {
        this.rData = this.remoteService.remoteData;
    }

    public ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
```

Inside of the `ngAfterViewInit` hook, we call to get data for the initial state and subscribe to the `igxForOf` directive's [`chunkPreload`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html#chunkPreload) emitter. This subscription will be responsible for fetching data every time the loaded chunk changes. We use `pipe(takeUntil(this.destroy$))` so we can easily unsubscribe from the emitter on component destroy.

### Remote Virtualization - Demo

The result of the above configuration is a drop-down that dynamically loads the data it should display, depending on the scrollbar's state:


```typescript
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, AfterViewInit, inject } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { IForOfState, IgxButtonDirective, IgxForOfDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { VerticalAlignment } from 'igniteui-angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RemoteNWindService } from '../../../services/remoteNwind.service';
import { AsyncPipe } from '@angular/common';

// tslint:disable:object-literal-sort-keys
@Component({
    providers: [RemoteNWindService],
    selector: 'app-drop-down-remote',
    templateUrl: './drop-down-remote.component.html',
    styleUrls: ['./drop-down-remote.component.scss'],
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownComponent, IgxForOfDirective, IgxDropDownItemComponent, IgxToastComponent, AsyncPipe]
})
export class DropDownRemoteComponent implements OnInit, OnDestroy, AfterViewInit {
    private remoteService = inject(RemoteNWindService);
    cdr = inject(ChangeDetectorRef);

    @ViewChild('loadingToast', { read: IgxToastComponent, static: true })
    public loadingToast: IgxToastComponent;
    @ViewChild(IgxForOfDirective, { read: IgxForOfDirective, static: true })
    public remoteForDir: IgxForOfDirective<any>;
    @ViewChild('remoteDropDown', { read: IgxDropDownComponent, static: true })
    public remoteDropDown: IgxDropDownComponent;
    public itemHeight = 48;
    public itemsMaxHeight = 320;
    public prevRequest: Subscription;
    public rData: any;
    private destroy$ = new Subject<void>();

    public ngAfterViewInit() {
        const initialState: IForOfState = {
            startIndex: 0, chunkSize: Math.floor(this.itemsMaxHeight / this.itemHeight) + 1
        };
        this.remoteService.getData(initialState, null, (data) => {
            this.remoteForDir.totalItemCount = data['@odata.count'];
        });
        this.remoteForDir.chunkPreload.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            this.dataLoading(data);
        });
    }

    public dataLoading(evt) {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }
        this.loadingToast.positionSettings.verticalDirection = VerticalAlignment.Middle;
        this.loadingToast.autoHide = false;
        this.loadingToast.open('Loading Remote Data...');
        this.cdr.detectChanges();
        this.prevRequest = this.remoteService.getData(
            evt,
            null,
            (data) => {
                this.remoteForDir.totalItemCount = data['@odata.count'];
                this.loadingToast.close();
                this.cdr.detectChanges();
            });
    }

    public ngOnInit() {
        this.rData = this.remoteService.remoteData;
    }

    public ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
```
```html
<button class="button" igxButton="contained" [igxToggleAction]="remoteDropDown" [igxDropDownItemNavigation]="remoteDropDown">Products</button>
<igx-drop-down #remoteDropDown>
    <div class="drop-down-virtual-wrapper">
        <igx-drop-down-item
            *igxFor="let item of rData | async; index as index; scrollOrientation: 'vertical'; containerSize: itemsMaxHeight; itemSize: itemHeight;"
            [value]="item.ProductName" role="option" [disabled]="item.disabled" [index]="index"
            (onChunkPreload)="dataLoading($event)">
            {{ item.ProductName }}
        </igx-drop-down-item>
    </div>
</igx-drop-down>
<div class="selection">Selected Product:
    <span>{{ remoteDropDown.selectedItem?.value }}</span>
</div>
<igx-toast #loadingToast></igx-toast>
```
```scss
.drop-down-virtual-wrapper {
    overflow-y: hidden;
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

<div class="divider--half"></div>

## Notes and Limitations

Using the drop-down with a virtualized list of items enforces some limitations. Please, be aware of the following when trying to set up a drop-down list using `*igxFor`:

- The drop-down items that are being looped need to be passed in a wrapping element (e.g. `<div>`) which has the following css: `overflow: hidden` and `height` equal to `containerSize` in `px`
- `<igx-drop-down-item-group>` cannot be used for grouping items when the list is virtualized. Use the `isHeader` property instead
- The `items` accessor will return only the list of non-header drop-down items that are currently in the virtualized view.
- [`dropdown.selectedItem`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html#selectedItem) is of type `{ value: any, index: number }`
- The object emitted by [`selection`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html#selection) changes to `const emittedEvent: { newSelection: { value: any, index: number }, oldSelection: { value: any, index: number }, cancel: boolean, }`
- `dropdown.setSelectedItem` should be called with the **item's index in the data set**
- setting the drop-down item's `[selected]` input will **not** mark the item in the drop-down selection

## API References

- [IgxForOfDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html)
- [IgxDropDownComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdowncomponent.html)


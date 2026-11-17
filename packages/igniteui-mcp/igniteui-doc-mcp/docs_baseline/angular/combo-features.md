---
title: "Angular Combo Features"
description: "The Angular Combo binds to local data, filters its options as the user types, groups them by a data field, and can be disabled."
keywords: "Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo Features, Angular Combo Data Binding, Angular Combo Filtering, Angular Combo Grouping"
license: MIT
last_updated: "2026-11-16"
platformType: web-only
mentionedTypes: ["Combo"]
llms:
  description: "The Angular Combo binds to local data, filters its options as the user types, groups them by a data field, and can be disabled."
_tocName: Features
---
# Combo Component Features

The Angular Combo binds to local data, filters its options as the user types, groups them by a data field, and can be disabled.

The Combo can also load its data from a remote service in chunks, accept custom values, and show its list with custom overlay settings.

## Live Demo

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { localData } from './local-data';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-combo',
    styleUrls: ['./combo-features.component.scss'],
    templateUrl: './combo-features.component.html',
    imports: [IgxComboComponent, IgxSwitchComponent, FormsModule]
})
export class ComboFeaturesComponent implements OnInit{
    @ViewChild('combo', { read: IgxComboComponent, static: true }) public combo: IgxComboComponent;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    public GROUP_KEY = 'region';
    public lData: any[];
    public disableFiltering = false;
    public showSearchCaseIcon = false;
    public customValues = true;
    public disabled = false;

    public ngOnInit() {
        this.lData = localData;
    }

    public handleAddition(event) { }

    public enableGroups(event) {
        this.combo.groupKey = event.checked ? this.GROUP_KEY : '';
    }
}
```
```html
<igx-combo #combo class="combo" [data]="lData" [displayKey]="'field'" [valueKey]="'field'"
    placeholder="Location(s)" searchPlaceholder="Search..." [allowCustomValues]="customValues"
    (addition)="handleAddition($event)" [disableFiltering]="disableFiltering"
    [showSearchCaseIcon]="showSearchCaseIcon" [itemsMaxHeight]="255" [disabled]="disabled">
</igx-combo>

<igx-switch [(ngModel)]="disableFiltering">Disable Filtering</igx-switch><br />
<igx-switch [disabled]="disableFiltering" [(ngModel)]="showSearchCaseIcon">Show Case-sensitive Icon</igx-switch><br />
<igx-switch [(ngModel)]="customValues">Allow Custom Values</igx-switch><br />
<igx-switch (change)="enableGroups($event)">Enable Grouping</igx-switch><br />
<igx-switch [(ngModel)]="disabled">Disable Combo</igx-switch>
```
```scss
.combo, igx-switch {
    margin: 8px;
    width: 430px;
}
```

## Features

### Data Binding

The following snippets bind the Angular Combo to a local list of US states through its [`data`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=data) property, storing the code of each state and showing its name. The keys that the Combo reads from each item are described in [Data Binding](./overview.md#data-binding) in the Combo Overview topic.

```typescript
import { usStates } from './states-data';

export class ComboDataBindingComponent {
    // Items such as { id: 'CT', name: 'Connecticut', region: 'New England' }
    public usStates = usStates;
}
```

```html
<igx-combo [data]="usStates" valueKey="id" displayKey="name"></igx-combo>
```

### Remote Binding

The Combo can load its data from a remote service in chunks: it requests the items the user scrolls to through the [`dataPreLoad`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=dataPreLoad) event, and the service returns only those items. The sample below loads products from a remote service while the user scrolls and searches:

```typescript
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { IComboSearchInputEventArgs, IComboSelectionChangingEventArgs, IgxComboComponent } from 'igniteui-angular/combo';
import { IForOfState } from 'igniteui-angular/directives';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { VerticalAlignment } from 'igniteui-angular/core';
import { RemoteNWindService } from '../../../services/remoteNwind.service';
import { AsyncPipe } from '@angular/common';

@Component({
    providers: [RemoteNWindService],
    selector: 'app-combo-remote',
    styleUrls: ['./combo-remote.component.scss'],
    templateUrl: './combo-remote.component.html',
    imports: [IgxComboComponent, IgxToastComponent, AsyncPipe]
})
export class ComboRemoteComponent implements OnInit, AfterViewInit {
    private remoteService = inject(RemoteNWindService);
    cdr = inject(ChangeDetectorRef);

    @ViewChild('loadingToast')
    public loadingToast: IgxToastComponent;

    @ViewChild('remoteCombo')
    public remoteCombo: IgxComboComponent;

    public prevRequest: any;
    public rData: any;

    private searchText: string = null;
    private defaultVirtState: IForOfState = { chunkSize: 6, startIndex: 0 };
    private currentVirtState: IForOfState = { chunkSize: 6, startIndex: 0 };
    private itemID: number = 1;
    private itemCount: number = 0;
    private hasSelection: boolean;
    private additionalScroll: number = 0;

    public ngOnInit() {
        this.rData = this.remoteService.remoteData;
    }

    public ngAfterViewInit() {
        const initSize = {
            startIndex: 0,
            chunkSize: Math.ceil(250 / this.remoteCombo.itemHeight)
        };
        this.remoteService.getData(initSize, null, (data) => {
            this.remoteCombo.totalItemCount = data['@odata.count'];
            this.itemCount = this.remoteCombo.totalItemCount;
        });
    }

    public dataLoading() {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }
        this.loadingToast.positionSettings.verticalDirection = VerticalAlignment.Middle;
        this.loadingToast.autoHide = false;
        this.loadingToast.open('Loading Remote Data...');
        this.cdr.detectChanges();

        this.prevRequest = this.remoteService.getData(
            this.remoteCombo.virtualizationState,
            this.searchText,
            (data) => {
                this.remoteCombo.totalItemCount = data['@odata.count'];
                this.loadingToast.close();
                this.cdr.detectChanges();
            }
        );
    }

    public handleSearchInputUpdate(searchData: IComboSearchInputEventArgs) {
        this.currentVirtState.startIndex = 0;
        this.currentVirtState.chunkSize = Math.ceil(this.remoteCombo.itemsMaxHeight / this.remoteCombo.itemHeight);
        this.searchText = searchData?.searchText || '';
        this.remoteService.getData(
            this.searchText ? this.currentVirtState : this.defaultVirtState,
            this.searchText,
            (data) => {
                this.remoteCombo.totalItemCount = data['@odata.count'];
            }
        );
    }

    public onOpened() {
        // additionalScroll is one row, set when the selection is the last item. Landing a
        // row further down puts that item at the bottom of the viewport.
        void this.remoteCombo.virtualScrollContainer.scrollToIndex(this.itemID - 1 + (this.additionalScroll ? 1 : 0), { block: 'start' });
        this.cdr.detectChanges();
    }

    public onClosing() {
        this.searchText = '';
    }

    public onClosed() {
        this.currentVirtState.startIndex = (this.itemID || 1) - 1;
        this.remoteService.getData(
            this.currentVirtState,
            this.searchText,
            (data) => {
                this.remoteCombo.totalItemCount = data['@odata.count'];
                this.cdr.detectChanges();
            }
        );
    }

    public handleSelectionChanging(evt: IComboSelectionChangingEventArgs) {
        this.hasSelection = !!evt?.newValue.length;

        if (!this.hasSelection) {
            this.itemID = 1;
            this.currentVirtState = this.defaultVirtState;
            return;
        }

        const currentSelection = evt.newValue[evt.newValue.length - 1]
        this.currentVirtState.chunkSize = Math.ceil(this.remoteCombo.itemsMaxHeight / this.remoteCombo.itemHeight);

        this.itemCount === currentSelection ?
            this.additionalScroll = this.remoteCombo.itemHeight :
            this.additionalScroll = 0;

        if (this.itemCount - currentSelection >= this.currentVirtState.chunkSize - 1) {
            this.itemID = this.currentVirtState.startIndex = currentSelection;
        } else {
            this.itemID = this.currentVirtState.startIndex = this.itemCount - (this.currentVirtState.chunkSize - 1);
        }
    }
}
```
```html
<igx-combo #remoteCombo class="combo"
    [itemsMaxHeight]="250"
    [itemHeight]="48"
    [data]="rData | async"
    [valueKey]="'ProductID'"
    [displayKey]="'ProductName'"
    (dataPreLoad)="dataLoading()"
    (searchInputUpdate)="handleSearchInputUpdate($event)"
    (selectionChanging)="handleSelectionChanging($event)"
    (closing)="onClosing()" (opened)="onOpened()"
    (closed)="onClosed()"
    placeholder="Location(s)">
</igx-combo>
<igx-toast #loadingToast></igx-toast>
```
```scss
.combo {
    margin: 8px;
    width: 430px;
}
```

#### Define Remote Service

A remote service loads the items on demand from a server. The Combo exposes its [`virtualizationState`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=virtualizationState) property, which holds the index of the first item to load and the number of items to load. To size the scrollbar for all the items on the server, set the [`totalItemCount`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=totalItemCount) property to their total count.

The following service has a `getData()` method that builds the request from the state of the Combo and its search text, and emits the loaded items through an observable:

```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IForOfState } from 'igniteui-angular/directives';
// import { IForOfState } from '@infragistics/igniteui-angular/directives'; for licensed package
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RemoteNWindService {
    private http = inject(HttpClient);
    private url = 'https://services.odata.org/V4/Northwind/Northwind.svc/Products';

    public remoteData = new BehaviorSubject<any[]>([]);

    public getData(state: IForOfState, searchText: string, cb?: (data: any) => void) {
        return this.http.get(this.buildUrl(state, searchText)).subscribe((data: any) => {
            this.remoteData.next(data.value);
            cb?.(data);
        });
    }

    // Requests the chunk of items the Combo shows, and the total count of the matching items.
    private buildUrl(state: IForOfState, searchText: string): string {
        let query = `?$skip=${state.startIndex}&$top=${state.chunkSize}&$count=true`;
        if (searchText) {
            // Double the apostrophes for OData, then encode the text for the URL.
            const text = encodeURIComponent(searchText.replace(/'/g, "''"));
            query += `&$filter=contains(ProductName, '${text}')`;
        }
        return `${this.url}${query}`;
    }
}
```

#### Binding ComboBox to Remote Service

Bind the observable of the service to the Combo with the `async` pipe, and request a new chunk of items whenever the Combo raises [`dataPreLoad`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=dataPreLoad) or the search text changes:

```html
<igx-combo #remoteCombo
    [data]="rData | async"
    valueKey="ProductID"
    displayKey="ProductName"
    (dataPreLoad)="onDataPreLoad()"
    (searchInputUpdate)="onSearchInputUpdate($event)">
    <label igxLabel>Products</label>
</igx-combo>
```

```typescript
// The size of the first chunk, requested before the Combo reports how many items it shows.
const FIRST_CHUNK_SIZE = 10;

// The component lists RemoteNWindService in its providers, and the application
// providers include provideHttpClient(), which the service needs.
export class ComboRemoteComponent implements OnInit {
    @ViewChild('remoteCombo', { static: true })
    public remoteCombo: IgxComboComponent;

    private remoteService = inject(RemoteNWindService);
    public rData = this.remoteService.remoteData;
    private searchText = '';

    public ngOnInit() {
        this.loadChunk({ startIndex: 0, chunkSize: FIRST_CHUNK_SIZE });
    }

    // The Combo asks for the next chunk while the user scrolls.
    public onDataPreLoad() {
        this.loadChunk(this.remoteCombo.virtualizationState);
    }

    // The server filters the items: request the first chunk of the matching ones.
    public onSearchInputUpdate(event: IComboSearchInputEventArgs) {
        this.searchText = event.searchText;
        this.loadChunk({ startIndex: 0, chunkSize: FIRST_CHUNK_SIZE });
    }

    private loadChunk(state: IForOfState) {
        this.remoteService.getData(state, this.searchText, (data) => {
            // The total count sizes the scrollbar for all the items, not only the loaded chunk.
            this.remoteCombo.totalItemCount = data['@odata.count'];
        });
    }
}
```

#### Handling Selection

When the Combo is bound to remote data that loads in chunks, and the data items are objects, set the [`valueKey`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=valueKey) property. Without it, the Combo compares the selected items with the loaded items by reference, as described in the [Combo topic](./overview.md#data-binding). Every chunk the service loads creates new objects, so the Combo can't match the selected items with them.

**Note:** 
When binding the Combo to remote data, set the `valueKey` property to a property that is unique to each item.

### Custom Overlay Settings

The Combo shows its list of items in an overlay, which you can configure by passing [`OverlaySettings`](mcp:get_api_reference?platform=angular&component=OverlaySettings) to the [`overlaySettings`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=overlaySettings) input. The Combo merges these settings over its own defaults, so set only the ones to change. The following settings make the list modal, which dims the page behind it, and close it when the user clicks outside:

```typescript
import { OverlaySettings } from 'igniteui-angular/core';
// import { OverlaySettings } from '@infragistics/igniteui-angular/core'; for licensed package

export class ComboOverlayComponent {
    public overlaySettings: OverlaySettings = {
        modal: true,
        closeOnOutsideClick: true
    };
}
```

```html
<igx-combo [data]="people" [overlaySettings]="overlaySettings"></igx-combo>
```

```typescript
import { Component } from '@angular/core';
import { GlobalPositionStrategy, OverlaySettings } from 'igniteui-angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { scaleInCenter, scaleOutCenter } from 'igniteui-angular/animations';

@Component({
    selector: 'app-combo-overlay',
    templateUrl: 'combo-overlay.component.html',
    styleUrls: ['combo-overlay.component.scss'],
    imports: [IgxComboComponent]
})
export class ComboOverlayComponent {
    public items = [{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' },
    { name: 'Option 4' }, { name: 'Option 5' }, { name: 'Option 6' },
    { name: 'Option 7' }, { name: 'Option 8' }, { name: 'Option 9' }];

    public overlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy({ openAnimation: scaleInCenter, closeAnimation: scaleOutCenter }),
        modal: true,
        closeOnOutsideClick: true
    };
}
```
```html
<igx-combo
    placeholder="Choose option(s)"
    [data]="items"
    valueKey="name"
    displayKey="name"
    [overlaySettings]="overlaySettings">
</igx-combo>
```
```scss
.igx-combo {
    width: 430px;
    margin: 8px;
}
```

**Note:** 
By default, the Combo positions its list with the [`AutoPositionStrategy`](mcp:get_api_reference?platform=angular&component=AutoPositionStrategy), which opens the list below the input, or above it when there isn't enough room.

### Filtering

The Angular Combo filters its list of options as the user types in the search input of the dropdown. Filtering is on by default. Set [`disableFiltering`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=disableFiltering) to turn it off, which also hides the search input.

To let users switch the search between case-sensitive and case-insensitive, set [`showSearchCaseIcon`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=showSearchCaseIcon). The Combo then shows a case-sensitive icon in its search input. The icon has no effect while filtering is disabled, because the search input is hidden.

```html
<!-- Shows the case-sensitive icon in the search input -->
<igx-combo [showSearchCaseIcon]="true"></igx-combo>

<!-- Turns filtering off, which also hides the search input -->
<igx-combo [disableFiltering]="true"></igx-combo>
```

#### Filtering Options

The [`filteringOptions`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=filteringOptions) property configures how the Angular Combo matches the search text:

- `filteringKey` - the data field to search in. Defaults to the field set by `displayKey`.
- `caseSensitive` - whether the search is case-sensitive. Defaults to `false`. The case-sensitive icon toggles this value.

The following snippet searches the region of each state instead of its name, and makes the search case-sensitive:

```typescript
import { IComboFilteringOptions } from 'igniteui-angular/combo';
// import { IComboFilteringOptions } from '@infragistics/igniteui-angular/combo'; for licensed package

export class ComboDemo {
    public filteringOptions: IComboFilteringOptions = {
        filteringKey: 'region',
        caseSensitive: true
    };
}
```

```html
<igx-combo [filteringOptions]="filteringOptions"></igx-combo>
```

### Custom Values

The [`allowCustomValues`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=allowCustomValues) property lets users add items that are missing from the data. When the search text matches no item, the dropdown shows an **Add item** button, which adds the search text to the data as a new item.

```html
<igx-combo [allowCustomValues]="true"></igx-combo>
```

### Search Input Focus

When the dropdown of the Angular Combo opens, its search input receives focus.

Set the [`autoFocusSearch`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=autoFocusSearch) property to `false` to focus the list of items instead. On mobile devices, this keeps the software keyboard from opening with the dropdown.

```html
<igx-combo [autoFocusSearch]="false"></igx-combo>
```

### Grouping

Set [`groupKey`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=groupKey) to a field of the data items to group the options of the Angular Combo under a header for each value of that field:

```html
<igx-combo groupKey="region"></igx-combo>
```

**Note:** 
The [`groupKey`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=groupKey) property takes effect only when the data items are objects.

#### Sorting Direction

The [`groupSortingDirection`](mcp:get_api_reference?platform=angular&component=IgxComboComponent&member=groupSortingDirection) property sets the order of the groups in the Combo: `SortingDirection.Asc` (the default) sorts them in ascending order, `SortingDirection.Desc` in descending order, and `SortingDirection.None` keeps them in the order their first items appear in the data. The items inside each group keep their order in the data.

```typescript
import { SortingDirection } from 'igniteui-angular/core';
// import { SortingDirection } from '@infragistics/igniteui-angular/core'; for licensed package

export class ComboDemo {
    public groupSortingDirection = SortingDirection.Desc;
}
```

```html
<igx-combo groupKey="region" [groupSortingDirection]="groupSortingDirection"></igx-combo>
```

## API References

See the complete Angular Combo API reference:

- [`IgxCombo`](mcp:get_api_reference?platform=angular&component=IgxComboComponent)

- [`OverlaySettings`](mcp:get_api_reference?platform=angular&component=OverlaySettings)
- `IgxComboComponent Theme`

## Additional Resources

Use the following Angular resources to learn more about the Combo:

- [Combo Overview](./overview.md)
- [Combo Templates](./templates.md)
- [Single Selection Combo](./single-selection.md)
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

---
title: ComboBox Remote Binding - MIT license 
_description: The igx-combo exposes API that allows to bind a combo to a remote service and retrieve data on demand.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Combo components, Angular Combo controls, Angular Combo Remote Binding
_license: MIT
_tocName: Remote Binding
---

# ComboBox Remote Binding

<p class="highlight">
The Ignite UI for Angular ComboBox Component exposes an API that allows binding a combobox to a remote service and retrieving data on demand.
</p>

## Angular ComboBox Remote Binding Example

The sample below demonstrates remote binding using the [dataPreLoad](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxComboComponent.html#dataPreLoad) property to load new chunk of remote data:


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
        const scroll: number = this.remoteCombo.virtualScrollContainer.getScrollForIndex(this.itemID - 1);
        this.remoteCombo.virtualScrollContainer.scrollPosition = scroll + this.additionalScroll;
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


## Usage

To get started with the ComboBox component, first you need to import the `IgxComboModule` in your **app.module.ts** file. In this demo, a remote service is used for server requests, therefore, we also need to include the `HttpClientModule`:

```typescript
import { IgxComboModule } from 'igniteui-angular/combo';
// import { IgxComboModule } from '@infragistics/igniteui-angular'; for licensed package

import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        ...
        IgxComboModule,
        HttpClientModule,
        ...
    ]
})
export class AppModule {}
```

### Define Remote Service

When binding a combobox to remote data, we need to have an available service that will load data on demand from a server. The combobox component exposes the [virtualizationState](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxComboComponent.html#virtualizationState) property which gives the current state of a combobox - the first index and the number of items that need to be loaded. In order to show properly the scroll size, the [totalItemCount](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxComboComponent.html#totalItemCount) property should have value that corresponds to the total items on the server.

The code below defines a simple service that has a `getData()` method, which receives combobox's current state information and returns data as an observable:

```typescript
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

    // Use combobox current virtualization state and search text to build URL and request the new data.
    public getData(data?: IForOfState, searchText?: string, cb?: (any) => void): any { }
}
```

### Binding ComboBox to Remote Service

When data is returned from a service as an observable, we can set it to the combobox component using the [async](https://angular.io/api/common/AsyncPipe) pipe:

```html
<igx-combo [data]="rData | async"
           [valueKey]="'ProductID'"
           [displayKey]="'ProductName'"
           (dataPreLoad)="dataLoading($event)"
           (searchInputUpdate)="handleSearchInputUpdate($event)"
           (selectionChanging)="handleSelectionChanging($event)"
           (closing)="onClosing()"
           (opened)="onOpened()"
           (closed)="onClosed()"
           [disableFiltering]="false">
</igx-combo>
```

Here are some common cases when the combobox component needs to request new data:
    - when the combobox is initialized
    - when we scroll combobox's list - it will emit `dataPreLoad` along with the new combobox `virtualizationState`, which allows making a new request to the remote service.
    - when searching in a combobox - we need to make request to filter remote results.
    - when combobox is opened - we need to clear the results from any previous filter operations.

Below are listed the handlers that listen to the already defined actions and execute requests to the server:

```typescript
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';
// import { IgxComboComponent } from '@infragistics/igniteui-angular'; for licensed package

import { RemoteService } from '../../grid/services/remote.service';

@Component({
    providers: [RemoteService],
    selector: 'app-combo-remote',
    styleUrls: ['./combo-remote.component.scss'],
    templateUrl: './combo-remote.component.html'
})
export class ComboRemoteComponent implements OnInit {
    @ViewChild('remoteCombo', { read: IgxComboComponent }) public remoteCombo: IgxComboComponent;

    public prevRequest: any;
    public rData: any;

    private searchText: string = null;
    private defaultVirtState: IForOfState = { chunkSize: 6, startIndex: 0 };

    private currentVirtState: IForOfState = { chunkSize: 6, startIndex: 0 };
    private itemID: number = 1;
    private itemCount: number = 0;
    private hasSelection: boolean;
    private additionalScroll: number = 0;

    constructor(private remoteService: RemoteService, public cdr: ChangeDetectorRef) { }

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

    public dataLoading(evt) {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }
        this.prevRequest = this.remoteService.getData(
            this.remoteCombo.virtualizationState,
            this.searchText,
            (data) => {
                this.remoteCombo.totalItemCount = data['@odata.count'];
                this.cdr.detectChanges();
        });
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
        const scroll: number = this.remoteCombo.virtualScrollContainer.getScrollForIndex(this.itemID - 1);
        this.remoteCombo.virtualScrollContainer.scrollPosition = scroll + this.additionalScroll;
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
        this.hasSelection = !!evt?.newSelection.length;

        if (!this.hasSelection) {
            this.itemID = 1;
            this.currentVirtState = this.defaultVirtState;
            return;
        }

        const currentSelection = evt.newSelection[evt.newSelection.length - 1]
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

> [!Note]
> Anytime new data is loaded, we update the `totalItemCount` property, in order to have proper size of the list's scroll bar. In that case, the service returns total size using the property `@odata.count`.
> [!Note]
> A service needs to be included as a provider.

### Handling Selection

When using a combobox bound to remote data loaded in chunks and dealing with a more complex data type (e.g. objects), it is necessary to define a `valueKey`. As stated in the [combobox topic](combo.md#data-value-and-display-properties), when no `valueKey` is specified, the combobox will try to handle selection by `equality (===)`. Since the objects that will be marked as selected will not be the same as the object that are continuously loaded, the selection will fail.

> [!Note]
> When binding a combobox to remote data, make sure to specify a `valueKey`, representing a property that is unique to each item.

When the combobox is bound to remote data, setting value/selected items through API will only take into account the items that are loaded in the current chunk. If you want to set an initial value, make sure those specific items are loaded before selecting.

## API Summary

<div class="divider--half"></div>

- [IgxComboComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcombocomponent.html)
- [IgxComboComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-combo-theme)

## Additional Resources

<div class="divider--half"></div>

- [ComboBox Component](combo.md)
- [ComboBox Features](combo-features.md)
- [ComboBox Templates](combo-templates.md)
- [Template Driven Forms Integration](input-group.md)
- [Reactive Forms Integration](angular-reactive-form-validation.md)
- [Single Select ComboBox](simple-combo.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

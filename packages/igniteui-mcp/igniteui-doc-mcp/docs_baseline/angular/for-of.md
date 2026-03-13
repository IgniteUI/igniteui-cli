---
title: Angular Virtual For Directive - MIT license  
_description: Ignite UI for Angular now exposes a virtual igxFor directive similar to ngFor, which virtualizes DOM object rendering by visualizing only the visible chunks of the data in the DOM.
_keywords: Angular Virtual ForOf Directive, Native Angular Components Suite, Angular UI Components, Native Angular Components Library, Virtualization, Performance, Virtual directive, Angular Virtual For
_license: MIT
_tocName: Virtual For Directive
---

# Angular Virtual ForOf Directive Overview

<p class="highlight">The Ignite UI for Angular igxForOf directive is an alternative to ngForOf for templating large amounts of data. It uses virtualization behind the scenes to optimize DOM rendering and memory consumption.</p>

## Angular Virtual For Directive Example


```typescript
import { Component, OnInit } from '@angular/core';
import { IgxFilterOptions, IgxFilterPipe, IgxForOfDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineTitleDirective, IgxListThumbnailDirective } from 'igniteui-angular/list';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { femaleFNames, lastName, maleFNames, middleNames } from './names';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-igx-for-list',
    styleUrls: ['./igxFor.component.scss'],
    templateUrl: './igxFor.component.html',
    imports: [IgxInputGroupComponent, FormsModule, IgxInputDirective, IgxPrefixDirective, IgxIconComponent, IgxSuffixDirective, IgxListComponent, IgxListItemComponent, IgxForOfDirective, IgxRippleDirective, IgxAvatarComponent, IgxListThumbnailDirective, IgxListLineTitleDirective, IgxListActionDirective, IgxFilterPipe]
})
export class IgxForComponent implements OnInit {
    public search: string;
    public data = [];
    get fo() {
        const _fo = new IgxFilterOptions();
        _fo.key = 'name';
        _fo.inputValue = this.search;
        return _fo;
    }
    constructor() { }
    public ngOnInit() {
        const data = [];
        for (let i = 0; i < 100000; i++) {
            const item = this.generatePerson(i);
            data.push(item);
        }
        this.data = data;
    }
    private generatePerson(index) {
        const item = new Person();
        item.key = index;
        const gender = index % 2 === 0 ? 'M' : 'F';
        item.name = this.generateName(gender);
        item.avatar = 'assets/images/' +
            (gender === 'M' ? 'men' : 'women') +
            '/' + Math.floor((Math.random() * 100)) + '.jpg';
        item.favorite = Math.floor((Math.random() * 3)) % 3 === 0;
        return item;
    }
    private generateName(gender): string {
        let name = '';
        const fNames = gender === 'M' ? maleFNames : femaleFNames;
        name += fNames[Math.floor(Math.random() * fNames.length)] + ' ';
        name += middleNames[Math.floor(Math.random() * middleNames.length)] + ' ';
        name += lastName[Math.floor(Math.random() * lastName.length)];
        return name;
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    public toggleFavorite(item: any) {
        item.favorite = !item.favorite;
    }
}

export class Person {
    public key: number;
    public name: string;
    public favorite: boolean;
    public avatar: string;
}
```
```html
<igx-input-group class="search" type="search">
  <input #searchBar igxInput placeholder="Search Contacts" [(ngModel)]="search" />
  <igx-prefix>
    <igx-icon>search</igx-icon>
  </igx-prefix>
  @if (searchBar.value.length > 0) {
    <igx-suffix (click)="search = null">
      <igx-icon>clear</igx-icon>
    </igx-suffix>
  }
</igx-input-group>

<div class="list-sample">

  <igx-list>
    <igx-list-item [isHeader]="true">Contacts: {{(data | igxFilter: fo).length}} </igx-list-item>
    <div [style.height]="'500px'" [style.overflow]="'hidden'" [style.position]="'relative'">
      <igx-list-item
        [style.width]="'calc(100% - 18px)'"
        igxRipple="pink"
        igxRippleTarget=".igx-list__item"
        *igxFor="let item of data | igxFilter: fo; scrollOrientation : 'vertical'; containerSize: '500px'; itemSize: '50px'">
        <igx-avatar igxListThumbnail [src]="item.avatar" shape="circle"></igx-avatar>
        <span igxListLineTitle>{{ item.name }}</span>
        <igx-icon igxListAction [style.color]="item.favorite ? 'orange' : 'lightgray'" (click)="toggleFavorite(item)">star</igx-icon>
      </igx-list-item>
    </div>
  </igx-list>

</div>
```
```scss
:host {
    display: block;
    padding: 16px;
}

.search {
    margin-bottom: 16px;
}

.list-sample {
    display: block;
    position: relative;
    height: 550px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
}

igx-icon {
    cursor: pointer;
}

.item-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.contact {
    display: flex;
    flex: 1 0 240px;
    align-items: center;

    &__info {
      display: flex;
      flex-flow: column nowrap;
      margin-left: 24px;
    }
}
```

<div class="divider"></div>

## Getting Started with Ignite UI for Angular Virtual ForOf Directive

To get started with the Ignite UI for Angular [`igxFor`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html#igxForOf) directive, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxForOfModule` in your **app.module.ts** file.

```typescript
// app.module.ts

import { IgxForOfModule } from 'igniteui-angular/directives';
// import { IgxForOfModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxForOfModule,
        ...
    ]
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxForOfDirective` as a standalone dependency.

```typescript
// home.component.ts

import { IgxForOfDirective } from 'igniteui-angular/directives';
// import { IgxForOfDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <span #container>
        <ng-template *igxFor="data"></ng-template>
    </span>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxForOfDirective]
})
export class HomeComponent {
    public data: Employee [];
}
```

Now that you have the Ignite UI for Angular Tree Grid module or directives imported, you can start using the `igxFor` directive.

## Using the Angular Virtual ForOf

Now that we have the module or directive imported, let’s get started with a basic configuration of the `igxFor` that binds to local data:

```html
<span #container>
    <ng-template *igxFor="data"></ng-template>
</span>
```

The **data** property is an array that provides the data objects used to construct the virtualized DOM.

## Examples

The `igxFor` directive can be used to virtualize the data in vertical, horizontal or both directions.

Virtualization works similarly to Paging by slicing the data into smaller chucks which are swapped from a container viewport while the user scrolls the data horizontally/vertically. The difference with the Paging is that virtualization mimics the natural behavior of the scrollbar. The `igxFor` directive is creating scrollable containers and renders small chunks of the data. It is used inside the [`igxGrid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html) and it can be used to build a virtual [`igx-list`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlistcomponent.html).

### Vertical virtualization

```html
<igx-list>
    <div [style.height]="'500px'" [style.overflow]="'hidden'" [style.position]="'relative'">
        <igx-list-item [style.width]="'calc(100% - 18px)'"
            *igxFor="let item of data | igxFilter: fo;
                     scrollOrientation : 'vertical';
                     containerSize: '500px'; 
                     itemSize: '50px'">
            <div class="contact">
                <span class="name">{{item.name}}</span>
            </div>
        </igx-list-item>
    </div>
</igx-list>
```

_**Note:**_ It is strongly advised that the parent container of the [`igxForOf`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html#igxForOf) template has the following CSS rules applied: `height` for vertical and `width` for horizontal, `overflow: hidden` and `position: relative`. This is because the smooth scrolling behavior is achieved through content offsets that could visually affect other parts of the page if they remain visible.

### Horizontal virtualization

```html
<igx-list>
    <div [style.width]="'880px'" [style.overflow]="'hidden'" [style.position]="'relative'">
        <igx-list-item [style.width]="'220px'"
            *igxFor="let item of data | igxFilter: fo;
                     scrollOrientation : 'horizontal'; 
                     containerSize: '880px'; 
                     itemSize: '220px'">
            <div class="contact">
                <span class="name">{{item.name}}</span>
            </div>
        </igx-list-item>
    </div>
</igx-list>
```


```typescript
import { Component, OnInit } from '@angular/core';
import { IgxFilterOptions, IgxFilterPipe, IgxForOfDirective } from 'igniteui-angular/directives';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxListComponent, IgxListItemComponent } from 'igniteui-angular/list';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { femaleFNames, lastName, maleFNames } from '../names';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-igx-for-horizontal',
    styleUrls: ['./igxFor-horizontal.component.scss'],
    templateUrl: './igxFor-horizontal.component.html',
    imports: [IgxInputGroupComponent, FormsModule, IgxInputDirective, IgxPrefixDirective, IgxIconComponent, IgxSuffixDirective, IgxListComponent, IgxListItemComponent, IgxForOfDirective, IgxAvatarComponent, IgxFilterPipe]
})
export class IgxForHorizontalComponent implements OnInit {
    public search: string;
    public data = [];
    get fo() {
        const _fo = new IgxFilterOptions();
        _fo.key = 'name';
        _fo.inputValue = this.search;
        return _fo;
    }
    constructor() { }
    public ngOnInit() {
        const data = [];
        for (let i = 0; i < 100000; i++) {
            const item = this.generatePerson(i);
            data.push(item);
        }
        this.data = data;
    }
    private generatePerson(index) {
        const item = new Person();
        item.key = index;
        const gender = index % 2 === 0 ? 'M' : 'F';
        item.name = this.generateName(gender);
        item.avatar = 'assets/images/' +
            (gender === 'M' ? 'men' : 'women') +
            '/' + Math.floor((Math.random() * 100)) + '.jpg';
        return item;
    }
    private generateName(gender): string {
        let name = '';
        const fNames = gender === 'M' ? maleFNames : femaleFNames;
        name += fNames[Math.floor(Math.random() * fNames.length)] + ' ';
        name += lastName[Math.floor(Math.random() * lastName.length)];
        return name;
    }
}

export class Person {
    public key: number;
    public name: string;
    public avatar: string;
}
```
```html
<div class="sample-content">

  <igx-input-group class="search" type="search">
    <input #searchBar igxInput placeholder="Search Contacts" [(ngModel)]="search" />
    <igx-prefix>
      <igx-icon>search</igx-icon>
    </igx-prefix>
    @if (searchBar.value.length > 0) {
      <igx-suffix (click)="search = null">
        <igx-icon>clear</igx-icon>
      </igx-suffix>
    }
  </igx-input-group>

  <div class="list-sample">
    <igx-list>
      <igx-list-item [isHeader]="true">Contacts: {{(data | igxFilter: fo).length}} </igx-list-item>
      <div class="list-container" [style.width]="'880px'" [style.overflow]="'hidden'" [style.position]="'relative'">
        <igx-list-item
          style="overflow: hidden;"
          [style.min-width]="'220px'"
          [style.width]="'220px'"
          [style.max-width]="'220px'"
          *igxFor="let item of data | igxFilter: fo; scrollOrientation : 'horizontal'; containerSize: '880px'; itemSize: '220px'">
          <div class="item-container">
            <div class="contact">
              <igx-avatar [src]="item.avatar" shape="circle"></igx-avatar>
              <div class="contact__info">
                <span class="name">{{item.name}}</span>
              </div>
            </div>
          </div>
        </igx-list-item>
      </div>
    </igx-list>
  </div>

</div>
```
```scss
:host {
    display: block;
    padding: 16px;
    ::ng-deep {
        .list-container {
            display: flex;
            flex-direction: column;
            padding: 16px 8px 0;
            > igx-display-container {
                flex-direction: row;
                overflow: visible;
            }
        }
    }
}

.sample-content{
    max-width: 880px;
}

.search {
    margin-bottom: 16px;
    width: 100%;
}

.list-sample {
    display: block;
    position: relative;
    height: 150px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
}

.item-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 220px;
    flex: 0 0 220px;
}

.contact {
    display: flex;
    flex: 1 0 220px;
    align-items: center;

    &__info {
        display: flex;
        flex-flow: column nowrap;
        margin-left: 16px;
    }
}

.name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 80px;
}
```

<div class="divider--half"></div>

### Horizontal and vertical virtualization

```html
<table #container [style.width]='width' 
    [style.height]='height'
    [style.overflow]='"hidden"'
    [style.position]='"relative"'>
    <ng-template #scrollContainer igxFor let-rowData
        [igxForOf]="data"
        [igxForScrollOrientation]="'vertical'"
        [igxForContainerSize]='height'
        [igxForItemSize]='"50px"'>
        <tr [style.display]="'flex'" [style.height]="'50px'">
            <ng-template #childContainer igxFor let-col
                [igxForOf]="cols"
                [igxForScrollOrientation]="'horizontal'"
                [igxForScrollContainer]="parentVirtDir"
                [igxForContainerSize]='width'>
                    <td [style.min-width]='col.width + "px"'>
                        {{rowData[col.field]}}
                    </td>
            </ng-template>
        </tr>
    </ng-template>
</table>
```

The `igxFor` directive is used to virtualize data in both vertical and horizontal directions inside the `igxGrid`.

Follow the [Grid Virtualization](grid/virtualization.md) topic for more detailed information and demos.

### igxFor bound to remote service

The [`igxForOf`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html#igxForOf) directive can be bound to a remote service using the `Observable` property - `remoteData` (in the following case). The `chunkLoading` event should also be utilized to trigger the requests for data.

```html
<div style='height: 500px; overflow: hidden; position: relative;'>
    <ng-template igxFor let-item [igxForOf]="remoteData | async"
        (chunkPreload)="chunkLoading($event)"
        [igxForScrollOrientation]="'vertical'"
        [igxForContainerSize]='"500px"'
        [igxForItemSize]='"50px"'
        [igxForRemote]='true'
        let-rowIndex="index" #virtDirRemote>
        <div style='height:50px;'>{{item.ProductID}} : {{item.ProductName}}</div>
    </ng-template>
</div>
```

_**Note:**_ There is a requirement to set the [`totalItemCount`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html#totalItemCount) property in the instance of [`igxForOf`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html#igxForOf).

```typescript
this.virtDirRemote.totalItemCount = data['@odata.count'];
```

In order to access the directive instance from the component, it should be marked as `ViewChild`:

```typescript
@ViewChild('virtDirRemote', { read: IgxForOfDirective })
public virtDirRemote: IgxForOfDirective<any>;
```

After the request for loading the first chunk, the [`totalItemCount`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html#totalItemCount) can be set:

```typescript
public ngAfterViewInit() {
    this.remoteService.getData(this.virtDirRemote.state, (data) => {
        this.virtDirRemote.totalItemCount = data['@odata.count'];
    });
}
```

When requesting data you can take advantage of the [`IgxForOfState`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html#state) interface, which provides the [`startIndex`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html#state.startindex) and [`chunkSize`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html#state.chunkSize) properties. Note that initially the chunkSize will be 0, so you have to specify the size of the first loaded chunk (the best value is the initial [`igxForContainerSize`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html#igxforcontainersize) divided by the [`igxForItemSize`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html#igxForItemSize)).

```typescript
public getData(data?: IForOfState, cb?: (any) => void): any {
    var dataState = data;
    return this.http
        .get(this.buildUrl(dataState))
        .map((response) => response.json())
        .map((response) => {
            return response;
        })
        .subscribe((data) => {
            this._remoteData.next(data.value);
            if (cb) {
                cb(data);
            }
        });
}

private buildUrl(dataState: any): string {
    let qS: string = '?', requiredChunkSize: number;
    if (dataState) {
        const skip = dataState.startIndex;
            requiredChunkSize =  dataState.chunkSize === 0 ?
            // Set initial chunk size, the best value is igxForContainerSize
            // initially divided by igxForItemSize
            10 : dataState.chunkSize;
        const top = requiredChunkSize;
        qS += `$skip=${skip}&$top=${top}&$count=true`;
    }
    return `${this.url}${qS}`;
}
```

Every time the [`chunkPreload`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html#chunkPreload) event is thrown, a new chunk of data should be requested:

```typescript
chunkLoading(evt) {
    if(this.prevRequest){
        this.prevRequest.unsubscribe();
     }
     this.prevRequest = this.remoteService.getData(evt, ()=> {
        this.virtDirRemote.cdr.detectChanges();
    });
}
```

## Local Variables

The `igxFor` directive includes the following helper properties in its context: `even`, `odd`, `first` and `last`. They are used to identify the current element position in the collection. The following code snippet demonstrates how to use the `even` property in an `ng-template`. Аn `even` class will be assigned to every even div element:

```html
<ng-template igxFor let-item let-isEven="even"
             [igxForOf]="data" 
             [igxForScrollOrientation]="'vertical'" >
    <div [ngClass]="{even: isEven}"></div>
</ng-template>
```

## Known Limitations

|Limitation|Description|
|--- |--- |
| `scrollTo` method does not work correctly when the content size of the rendered templates changes post initialization | When the elements inside the template have a size, that changes runtime after initialization (for example as a result of content projection, remote request resolution etc.), then the `scrollTo` method will not be able to scroll to the correct index. The method will scroll to the position of the index before the runtime size change occurs, hence the location will not be correct after the size is changed later. A possible workaround is to use templates that do not change their size based on their content if the content is loaded later. |

## API References

- [IgxForOfDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxforofdirective.html)
- [IgxGridComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html)
- [IgxListComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlistcomponent.html)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

# Class: IgxPaginatorComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:51](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L51)

Paginator component description

## Igx Parent

IgxGridComponent, IgxTreeGridComponent, IgxHierarchicalGridComponent, IgxPivotGridComponent, *

## Constructors

### Constructor

> **new IgxPaginatorComponent**(): `IgxPaginatorComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:269](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L269)

#### Returns

`IgxPaginatorComponent`

## Properties

### \_page

> `protected` **\_page**: `number` = `0`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:125](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L125)

***

### \_perPage

> `protected` **\_perPage**: `number` = `15`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:128](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L128)

***

### \_selectOptions

> `protected` **\_selectOptions**: `number`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:127](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L127)

***

### \_totalRecords

> `protected` **\_totalRecords**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:126](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L126)

***

### pageChange

> **pageChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:93](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L93)

Emitted after the current page is changed.

#### Example

```html
<igx-paginator (pageChange)="onPageChange($event)"></igx-paginator>
```
```typescript
public onPageChange(page: number) {
  this.currentPage = page;
}
```

#### Implementation of

`IgxPaginatorToken.pageChange`

***

### paging

> **paging**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:106](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L106)

Emitted before paging is performed.

#### Remarks

Returns an object consisting of the current and next pages.

#### Example

```html
<igx-paginator (paging)="pagingHandler($event)"></igx-paginator>
```

***

### pagingDone

> **pagingDone**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:119](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L119)

Emitted after paging is performed.

#### Remarks

Returns an object consisting of the previous and current pages.

#### Example

```html
<igx-paginator (pagingDone)="pagingDone($event)"></igx-paginator>
```

***

### perPageChange

> **perPageChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:77](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L77)

Emitted when `perPage` property value of the paginator is changed.

#### Example

```html
<igx-paginator (perPageChange)="onPerPageChange($event)"></igx-paginator>
```
```typescript
public onPerPageChange(perPage: number) {
  this.perPage = perPage;
}
```

***

### totalPages

> **totalPages**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:124](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L124)

Total pages calculated from totalRecords and perPage

## Accessors

### isFirstPage

#### Get Signature

> **get** **isFirstPage**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:291](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L291)

Returns if the current page is the first page.
```typescript
const lastPage = this.paginator.isFirstPage;
```

##### Returns

`boolean`

***

### isLastPage

#### Get Signature

> **get** **isLastPage**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:281](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L281)

Returns if the current page is the last page.
```typescript
const lastPage = this.paginator.isLastPage;
```

##### Returns

`boolean`

***

### nativeElement

#### Get Signature

> **get** **nativeElement**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:314](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L314)

##### Returns

`any`

***

### overlaySettings

#### Get Signature

> **get** **overlaySettings**(): [`OverlaySettings`](../interfaces/OverlaySettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:244](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L244)

Sets custom OverlaySettings.
```html
<igx-paginator [overlaySettings] = "customOverlaySettings"></igx-paginator>
```

##### Returns

[`OverlaySettings`](../interfaces/OverlaySettings.md)

#### Set Signature

> **set** **overlaySettings**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:248](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L248)

##### Parameters

###### value

[`OverlaySettings`](../interfaces/OverlaySettings.md)

##### Returns

`void`

***

### page

#### Get Signature

> **get** **page**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:149](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L149)

Gets/Sets the current page of the paginator.
The default is 0.
```typescript
let page = this.paginator.page;
```

##### Memberof

IgxPaginatorComponent

##### Returns

`number`

#### Set Signature

> **set** **page**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:153](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L153)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IgxPaginatorToken.page`

***

### perPage

#### Get Signature

> **get** **perPage**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:180](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L180)

Gets/Sets the number of visible items per page in the paginator.
The default is 15.
```typescript
let itemsPerPage = this.paginator.perPage;
```

##### Memberof

IgxPaginatorComponent

##### Returns

`number`

#### Set Signature

> **set** **perPage**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:184](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L184)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IgxPaginatorToken.perPage`

***

### resourceStrings

#### Get Signature

> **get** **resourceStrings**(): `PrefixedResourceStrings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:265](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L265)

An accessor that returns the resource strings.

##### Returns

`PrefixedResourceStrings`

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:258](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L258)

An accessor that sets the resource strings.
By default it uses EN resources.

##### Parameters

###### value

`PrefixedResourceStrings`

##### Returns

`void`

***

### selectOptions

#### Get Signature

> **get** **selectOptions**(): `number`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:228](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L228)

Sets custom options in the select of the paginator
```typescript
let options = this.paginator.selectOptions;
```

##### Memberof

IgxPaginatorComponent

##### Returns

`number`[]

#### Set Signature

> **set** **selectOptions**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:232](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L232)

##### Parameters

###### value

`number`[]

##### Returns

`void`

***

### totalRecords

#### Get Signature

> **get** **totalRecords**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:206](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L206)

Sets the total records.
```typescript
let totalRecords = this.paginator.totalRecords;
```

##### Memberof

IgxPaginatorComponent

##### Returns

`number`

#### Set Signature

> **set** **totalRecords**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:210](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L210)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IgxPaginatorToken.totalRecords`

## Methods

### nextPage()

> **nextPage**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:326](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L326)

Goes to the next page of the `IgxPaginatorComponent`, if the paginator is not already at the last page.
```typescript
this.paginator.nextPage();
```

#### Returns

`void`

#### Memberof

IgxPaginatorComponent

***

### paginate()

> **paginate**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:353](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L353)

Goes to the desired page index.
```typescript
this.paginator.paginate(1);
```

#### Parameters

##### val

`number`

#### Returns

`void`

#### Memberof

IgxPaginatorComponent

#### Implementation of

`IgxPaginatorToken.paginate`

***

### previousPage()

> **previousPage**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts:339](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/paginator/src/paginator/paginator.component.ts#L339)

Goes to the previous page of the `IgxPaginatorComponent`, if the paginator is not already at the first page.
```typescript
this.paginator.previousPage();
```

#### Returns

`void`

#### Memberof

IgxPaginatorComponent

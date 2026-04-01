# Class: IgxListComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:153](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L153)

Displays a collection of data items in a templatable list format

## Igx Module

IgxListModule

## Igx Theme

igx-list-theme

## Igx Keywords

list, data

## Igx Group

Grids & Lists

## Remarks

The Ignite UI List displays rows of items and supports one or more header items as well as search and filtering
of list items. Each list item is completely templatable and will support any valid HTML or Angular component.

## Example

```html
<igx-list>
  <igx-list-item isHeader="true">Contacts</igx-list-item>
  <igx-list-item *ngFor="let contact of contacts">
    <span class="name">{{ contact.name }}</span>
    <span class="phone">{{ contact.phone }}</span>
  </igx-list-item>
</igx-list>
```

## Constructors

### Constructor

> **new IgxListComponent**(): `IgxListComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:469](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L469)

#### Returns

`IgxListComponent`

#### Overrides

`IgxListBaseDirective.constructor`

## Properties

### allowLeftPanning

> **allowLeftPanning**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:300](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L300)

Sets/gets whether the left panning of an item is allowed.

#### Remarks

Default value is `false`.

#### Example

```html
<igx-list [allowLeftPanning]="true"></igx-list>
```
```typescript
let isLeftPanningAllowed = this.list.allowLeftPanning;
```

#### Overrides

`IgxListBaseDirective.allowLeftPanning`

***

### allowRightPanning

> **allowRightPanning**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:317](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L317)

Sets/gets whether the right panning of an item is allowed.

#### Remarks

Default value is `false`.

#### Example

```html
<igx-list [allowRightPanning]="true"></igx-list>
```
```typescript
let isRightPanningAllowed = this.list.allowRightPanning;
```

#### Overrides

`IgxListBaseDirective.allowRightPanning`

***

### children

> **children**: `QueryList`\<[`IgxListItemComponent`](IgxListItemComponent.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:166](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L166)

Returns a collection of all items and headers in the list.

#### Example

```typescript
let listChildren: QueryList = this.list.children;
```

#### Overrides

`IgxListBaseDirective.children`

***

### dataLoadingTemplate

> **dataLoadingTemplate**: [`IgxDataLoadingTemplateDirective`](IgxDataLoadingTemplateDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:209](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L209)

Sets/gets the list loading template.

#### Remarks

This template is used by IgxList in case there are no list items defined and `isLoading` is set to `true`.

#### Example

```html
<igx-list>
  <ng-template igxDataLoading>
    <p>Patience, we are currently loading your data...</p>
  </ng-template>
</igx-list>
```
```typescript
let loadingTemplate = this.list.dataLoadingTemplate;
```

***

### el

> `protected` **el**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.common.ts:13](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.common.ts#L13)

#### Inherited from

`IgxListBaseDirective.el`

***

### element

> **element**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:154](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L154)

***

### emptyListTemplate

> **emptyListTemplate**: [`IgxEmptyListTemplateDirective`](IgxEmptyListTemplateDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:188](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L188)

Sets/gets the empty list template.

#### Remarks

This template is used by IgxList in case there are no list items
defined and `isLoading` is set to `false`.

#### Example

```html
<igx-list>
  <ng-template igxEmptyList>
    <p class="empty">No contacts! :(</p>
  </ng-template>
</igx-list>
```
```typescript
let emptyTemplate = this.list.emptyListTemplate;
```

***

### endPan

> **endPan**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:391](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L391)

Event emitted when a pan gesture is completed or canceled.

#### Remarks

Provides a reference to an object of type `IListItemPanningEventArgs` as an event argument.

#### Example

```html
<igx-list (endPan)="endPan($event)"></igx-list>
```

#### Overrides

`IgxListBaseDirective.endPan`

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:283](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L283)

Sets/gets the `id` of the list.

#### Remarks

If not set, the `id` of the first list component will be `"igx-list-0"`.

#### Example

```html
<igx-list id="my-first-list"></igx-list>
```
```typescript
let listId = this.list.id;
```

***

### isLoading

> **isLoading**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:335](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L335)

Sets/gets whether the list is currently loading data.

#### Remarks

Set it to display the dataLoadingTemplate while data is being retrieved.
Default value is `false`.

#### Example

```html
 <igx-list [isLoading]="true"></igx-list>
```
```typescript
let isLoading = this.list.isLoading;
```

***

### itemClicked

> **itemClicked**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:434](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L434)

Event emitted when a list item is clicked.

#### Remarks

Provides references to the `IgxListItemComponent` and `Event` as event arguments.

#### Example

```html
<igx-list (itemClicked)="onItemClicked($event)"></igx-list>
```

#### Overrides

`IgxListBaseDirective.itemClicked`

***

### leftPan

> **leftPan**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:349](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L349)

Event emitted when a left pan gesture is executed on a list item.

#### Remarks

Provides a reference to an object of type `IListItemPanningEventArgs` as an event argument.

#### Example

```html
<igx-list [allowLeftPanning]="true" (leftPan)="leftPan($event)"></igx-list>
```

#### Overrides

`IgxListBaseDirective.leftPan`

***

### listItemLeftPanningTemplate

> **listItemLeftPanningTemplate**: [`IgxListItemLeftPanningTemplateDirective`](IgxListItemLeftPanningTemplateDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:230](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L230)

Sets/gets the template for left panning a list item.

#### Remarks

Default value is `null`.

#### Example

```html
<igx-list [allowLeftPanning]="true">
  <ng-template igxListItemLeftPanning>
    <igx-icon>delete</igx-icon>Delete
  </ng-template>
</igx-list>
```
```typescript
let itemLeftPanTmpl = this.list.listItemLeftPanningTemplate;
```

#### Overrides

`IgxListBaseDirective.listItemLeftPanningTemplate`

***

### listItemRightPanningTemplate

> **listItemRightPanningTemplate**: [`IgxListItemRightPanningTemplateDirective`](IgxListItemRightPanningTemplateDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:251](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L251)

Sets/gets the template for right panning a list item.

#### Remarks

Default value is `null`.

#### Example

```html
<igx-list [allowRightPanning] = "true">
  <ng-template igxListItemRightPanning>
    <igx-icon>call</igx-icon>Dial
  </ng-template>
</igx-list>
```
```typescript
let itemRightPanTmpl = this.list.listItemRightPanningTemplate;
```

#### Overrides

`IgxListBaseDirective.listItemRightPanningTemplate`

***

### panEndTriggeringThreshold

> **panEndTriggeringThreshold**: `number` = `0.5`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:265](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L265)

Provides a threshold after which the item's panning will be completed automatically.

#### Remarks

By default this property is set to 0.5 which is 50% of the list item's width.

#### Example

```html
<igx-list [panEndTriggeringThreshold]="0.8"></igx-list>
```

#### Overrides

`IgxListBaseDirective.panEndTriggeringThreshold`

***

### panStateChange

> **panStateChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:420](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L420)

Event emitted when a pan gesture is executed on a list item.

#### Remarks

Provides references to the `IgxListItemComponent` and `IgxListPanState` as event arguments.

#### Example

```html
<igx-list (panStateChange)="panStateChange($event)"></igx-list>
```

#### Overrides

`IgxListBaseDirective.panStateChange`

***

### resetPan

> **resetPan**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:405](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L405)

Event emitted when a pan item is returned to its original position.

#### Remarks

Provides a reference to an object of type `IgxListComponent` as an event argument.

#### Example

```html
<igx-list (resetPan)="resetPan($event)"></igx-list>
```

#### Overrides

`IgxListBaseDirective.resetPan`

***

### rightPan

> **rightPan**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:363](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L363)

Event emitted when a right pan gesture is executed on a list item.

#### Remarks

Provides a reference to an object of type `IListItemPanningEventArgs` as an event argument.

#### Example

```html
<igx-list [allowRightPanning]="true" (rightPan)="rightPan($event)"></igx-list>
```

#### Overrides

`IgxListBaseDirective.rightPan`

***

### startPan

> **startPan**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:377](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L377)

Event emitted when a pan gesture is started.

#### Remarks

Provides a reference to an object of type `IListItemPanningEventArgs` as an event argument.

#### Example

```html
<igx-list (startPan)="startPan($event)"></igx-list>
```

#### Overrides

`IgxListBaseDirective.startPan`

## Accessors

### context

#### Get Signature

> **get** **context**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:582](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L582)

Gets the `context` object of the template binding.

##### Remarks

Gets the `context` object which represents the `template context` binding into the `list container`
by providing the `$implicit` declaration which is the `IgxListComponent` itself.

##### Example

```typescript
let listComponent =  this.list.context;
```

##### Returns

`any`

***

### headers

#### Get Signature

> **get** **headers**(): [`IgxListItemComponent`](IgxListItemComponent.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:558](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L558)

Gets the header list `items`.

##### Example

```typescript
let listHeaders: IgxListItemComponent[] =  this.list.headers;
```

##### Returns

[`IgxListItemComponent`](IgxListItemComponent.md)[]

***

### isListEmpty

#### Get Signature

> **get** **isListEmpty**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:517](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L517)

Gets a boolean indicating if the list is empty.

##### Example

```typescript
let isEmpty =  this.list.isListEmpty;
```

##### Returns

`boolean`

***

### items

#### Get Signature

> **get** **items**(): [`IgxListItemComponent`](IgxListItemComponent.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:538](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L538)

Gets the list `items` excluding the header ones.

##### Example

```typescript
let listItems: IgxListItemComponent[] = this.list.items;
```

##### Returns

[`IgxListItemComponent`](IgxListItemComponent.md)[]

***

### resourceStrings

#### Get Signature

> **get** **resourceStrings**(): `PrefixedResourceStrings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:465](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L465)

Returns the resource strings.

##### Returns

`PrefixedResourceStrings`

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:458](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L458)

Sets the resource strings.
By default it uses EN resources.

##### Parameters

###### value

`PrefixedResourceStrings`

##### Returns

`void`

***

### role

#### Get Signature

> **get** **role**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:500](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L500)

Gets/Sets the `role` attribute value.

##### Example

```typescript
let listRole =  this.list.role;
```

##### Returns

`string`

#### Set Signature

> **set** **role**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:504](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L504)

##### Parameters

###### val

`string`

##### Returns

`void`

***

### template

#### Get Signature

> **get** **template**(): `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list.component.ts:596](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list.component.ts#L596)

Gets a `TemplateRef` to the currently used template.

##### Example

```typescript
let listTemplate = this.list.template;
```

##### Returns

`TemplateRef`\<`any`\>

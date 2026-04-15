# Class: IgxForOfDirective\<T, U\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:88](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L88)

## Extended by

- [`IgxGridForOfDirective`](IgxGridForOfDirective.md)

## Type Parameters

### T

`T`

### U

`U` *extends* `T`[] = `T`[]

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxForOfDirective**\<`T`, `U`\>(): `IgxForOfDirective`\<`T`, `U`\>

#### Returns

`IgxForOfDirective`\<`T`, `U`\>

#### Inherited from

`IgxForOfToken<T,U>.constructor`

## Properties

### \_bScrollInternal

> `protected` **\_bScrollInternal**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:281](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L281)

If the next onScroll event is triggered due to internal setting of scrollTop

***

### \_differ

> `protected` **\_differ**: `any` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:275](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L275)

***

### \_differs

> `protected` **\_differs**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:91](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L91)

***

### \_embeddedViews

> `protected` **\_embeddedViews**: `EmbeddedViewRef`\<`any`\>[] = `[]`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:283](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L283)

***

### \_embeddedViewSizesCache

> `protected` **\_embeddedViewSizesCache**: `WeakMap`\<`EmbeddedViewRef`\<`any`\>, `number`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:99](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L99)

***

### \_injector

> `protected` **\_injector**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:92](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L92)

***

### \_sizesCache

> `protected` **\_sizesCache**: `number`[] = `[]`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:273](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L273)

***

### \_template

> `protected` **\_template**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:90](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L90)

***

### \_trackByFn

> `protected` **\_trackByFn**: `TrackByFunction`\<`T`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:276](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L276)

***

### \_virtScrollPosition

> `protected` **\_virtScrollPosition**: `number` = `0`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:279](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L279)

Internal track for scroll top that is being virtualized

***

### \_virtSize

> `protected` **\_virtSize**: `number` = `0`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:289](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L289)

Size that is being virtualized.

***

### \_zone

> `protected` **\_zone**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:94](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L94)

***

### beforeViewDestroyed

> **beforeViewDestroyed**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:236](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L236)

***

### cdr

> **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:93](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L93)

***

### chunkLoad

> **chunkLoad**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:199](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L199)

An event that is emitted after a new chunk has been loaded.
```html
<ng-template igxFor [igxForOf]="data" [igxForScrollOrientation]="'horizontal'" (chunkLoad)="loadChunk($event)"></ng-template>
```
```typescript
loadChunk(e){
alert("chunk loaded!");
}
```

#### Overrides

`IgxForOfToken.chunkLoad`

***

### chunkPreload

> **chunkPreload**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:251](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L251)

An event that is emitted on chunk loading to emit the current state information - startIndex, endIndex, totalCount.
Can be used for implementing remote load on demand for the igxFor data.
```html
<ng-template igxFor [igxForOf]="data" [igxForScrollOrientation]="'horizontal'" (chunkPreload)="chunkPreload($event)"></ng-template>
```
```typescript
chunkPreload(e){
alert("chunk is loading!");
}
```

#### Overrides

`IgxForOfToken.chunkPreload`

***

### contentObserver

> `protected` **contentObserver**: `ResizeObserver`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:285](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L285)

***

### contentResizeNotify

> `protected` **contentResizeNotify**: `Subject`\<`void`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:284](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L284)

***

### contentSizeChange

> **contentSizeChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:219](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L219)

An event that is emitted after the rendered content size of the igxForOf has been changed.

***

### dataChanged

> **dataChanged**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:233](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L233)

An event that is emitted after data has been changed.
```html
<ng-template igxFor [igxForOf]="data" [igxForScrollOrientation]="'horizontal'" (dataChanged)="dataChanged($event)"></ng-template>
```
```typescript
dataChanged(e){
alert("data changed!");
}
```

***

### document

> `protected` **document**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:97](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L97)

***

### func

> `protected` **func**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:272](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L272)

***

### igxForContainerSize

> **igxForContainerSize**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:167](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L167)

Sets the px-affixed size of the container along the axis of scrolling.
For "horizontal" orientation this value is the width of the container and for "vertical" is the height.
```html
<ng-template igxFor let-item [igxForOf]="data" [igxForContainerSize]="'500px'"
     [igxForScrollOrientation]="'horizontal'">
</ng-template>
```

#### Overrides

`IgxForOfToken.igxForContainerSize`

***

### igxForItemSize

> **igxForItemSize**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:185](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L185)

Sets the px-affixed size of the item along the axis of scrolling.
For "horizontal" orientation this value is the width of the column and for "vertical" is the height or the row.
```html
<ng-template igxFor let-item [igxForOf]="data" [igxForScrollOrientation]="'horizontal'" [igxForItemSize]="'50px'"></ng-template>
```

#### Overrides

`IgxForOfToken.igxForItemSize`

***

### igxForScrollContainer

> **igxForScrollContainer**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:155](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L155)

Optionally pass the parent `igxFor` instance to create a virtual template scrolling both horizontally and vertically.
```html
<ng-template #scrollContainer igxFor let-rowData [igxForOf]="data"
      [igxForScrollOrientation]="'vertical'"
      [igxForContainerSize]="'500px'"
      [igxForItemSize]="'50px'"
      let-rowIndex="index">
      <div [style.display]="'flex'" [style.height]="'50px'">
          <ng-template #childContainer igxFor let-item [igxForOf]="data"
              [igxForScrollOrientation]="'horizontal'"
              [igxForScrollContainer]="parentVirtDir"
              [igxForContainerSize]="'500px'">
                  <div [style.min-width]="'50px'">{{rowIndex}} : {{item.text}}</div>
          </ng-template>
      </div>
</ng-template>
```

***

### igxForScrollOrientation

> **igxForScrollOrientation**: `string` = `'vertical'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:133](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L133)

Specifies the scroll orientation.
Scroll orientation can be "vertical" or "horizontal".
```html
<ng-template igxFor let-item [igxForOf]="data" [igxForScrollOrientation]="'horizontal'"></ng-template>
```

***

### igxForSizePropName

> **igxForSizePropName**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:123](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L123)

Sets the property name from which to read the size in the data object.

***

### individualSizeCache

> `protected` **individualSizeCache**: `number`[] = `[]`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:277](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L277)

***

### platformUtil

> `protected` **platformUtil**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:96](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L96)

***

### scrollComponent

> `protected` **scrollComponent**: `VirtualHelperBaseDirective`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:274](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L274)

***

### state

> **state**: [`IForOfState`](../interfaces/IForOfState.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:267](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L267)

The current state of the directive. It contains `startIndex` and `chunkSize`.
state.startIndex - The index of the item at which the current visible chunk begins.
state.chunkSize - The number of items the current visible chunk holds.
These options can be used when implementing remote virtualization as they provide the necessary state information.
```typescript
const gridState = this.parentVirtDir.state;
```

#### Overrides

`IgxForOfToken.state`

***

### syncScrollService

> `protected` **syncScrollService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:95](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L95)

***

### viewObserver

> `protected` **viewObserver**: `ResizeObserver`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:286](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L286)

***

### viewResizeNotify

> `protected` **viewResizeNotify**: `Subject`\<`ResizeObserverEntry`[]\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:287](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L287)

## Accessors

### displayContainer

#### Get Signature

> **get** **displayContainer**(): `HTMLElement`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:347](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L347)

##### Returns

`HTMLElement`

***

### embeddedViewNodes

#### Get Signature

> **get** `protected` **embeddedViewNodes**(): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:421](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L421)

##### Returns

`any`[]

***

### igxForOf

#### Get Signature

> **get** **igxForOf**(): `U` & `T`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:108](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L108)

Sets the data to be rendered.
```html
<ng-template igxFor let-item [igxForOf]="data" [igxForScrollOrientation]="'horizontal'"></ng-template>
```

##### Returns

`U` & `T`[]

#### Set Signature

> **set** **igxForOf**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:112](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L112)

##### Parameters

###### value

`U` & `T`[]

##### Returns

`void`

#### Overrides

`IgxForOfToken.igxForOf`

***

### igxForTotalItemCount

#### Get Signature

> **get** **igxForTotalItemCount**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:315](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L315)

The total count of the virtual data items, when using remote service.
Similar to the property totalItemCount, but this will allow setting the data count into the template.
```html
<ng-template igxFor let-item [igxForOf]="data | async" [igxForTotalItemCount]="count | async"
 [igxForContainerSize]="'500px'" [igxForItemSize]="'50px'"></ng-template>
```

##### Returns

`number`

#### Set Signature

> **set** **igxForTotalItemCount**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:318](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L318)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### igxForTrackBy

#### Get Signature

> **get** **igxForTrackBy**(): `TrackByFunction`\<`T`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:1194](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L1194)

Gets the function used to track changes in the items collection.
By default the object references are compared. However this can be optimized if you have unique identifier
value that can be used for the comparison instead of the object ref or if you have some other property values
in the item object that should be tracked for changes.
This option is similar to ngForTrackBy.
```typescript
const trackFunc = this.parentVirtDir.igxForTrackBy;
```

##### Returns

`TrackByFunction`\<`T`\>

#### Set Signature

> **set** **igxForTrackBy**(`fn`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:1209](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L1209)

Sets the function used to track changes in the items collection.
This function can be set in scenarios where you want to optimize or
customize the tracking of changes for the items in the collection.
The igxForTrackBy function takes the index and the current item as arguments and needs to return the unique identifier for this item.
```typescript
this.parentVirtDir.igxForTrackBy = (index, item) => {
     return item.id + item.width;
};
```

##### Parameters

###### fn

`TrackByFunction`\<`T`\>

##### Returns

`void`

***

### scrollPosition

#### Get Signature

> **get** **scrollPosition**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:370](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L370)

Gets/Sets the scroll position.
```typescript
const position = directive.scrollPosition;
directive.scrollPosition = value;
```

##### Returns

`number`

#### Set Signature

> **set** **scrollPosition**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:373](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L373)

##### Parameters

###### val

`number`

##### Returns

`void`

#### Overrides

`IgxForOfToken.scrollPosition`

***

### sizesCache

#### Get Signature

> **get** `protected` **sizesCache**(): `number`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:392](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L392)

##### Returns

`number`[]

#### Set Signature

> **set** `protected` **sizesCache**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:395](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L395)

##### Parameters

###### value

`number`[]

##### Returns

`void`

***

### totalItemCount

#### Get Signature

> **get** **totalItemCount**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:328](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L328)

The total count of the virtual data items, when using remote service.
```typescript
this.parentVirtDir.totalItemCount = data.Count;
```

##### Returns

`number`

#### Set Signature

> **set** **totalItemCount**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:332](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L332)

##### Parameters

###### val

`number`

##### Returns

`void`

#### Overrides

`IgxForOfToken.totalItemCount`

***

### virtualHelper

#### Get Signature

> **get** **virtualHelper**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:351](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L351)

##### Returns

`any`

## Methods

### \_adjustScrollPositionAfterSizeChange()

> `protected` **\_adjustScrollPositionAfterSizeChange**(`sizeDiff`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:1543](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L1543)

#### Parameters

##### sizeDiff

`any`

#### Returns

`void`

***

### \_calcSize()

> `protected` **\_calcSize**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:1427](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L1427)

#### Returns

`number`

***

### \_calcVirtualScrollPosition()

> `protected` **\_calcVirtualScrollPosition**(`scrollPosition`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:1514](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L1514)

#### Parameters

##### scrollPosition

`number`

#### Returns

`void`

***

### \_getItemSize()

> `protected` **\_getItemSize**(`item`, `dimension`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:1522](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L1522)

#### Parameters

##### item

`any`

##### dimension

`string`

#### Returns

`number`

***

### \_recalcOnContainerChange()

> `protected` **\_recalcOnContainerChange**(`containerSizeInfo?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:1442](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L1442)

#### Parameters

##### containerSizeInfo?

`any` = `null`

#### Returns

`void`

***

### \_recalcScrollBarSize()

> `protected` **\_recalcScrollBarSize**(`containerSizeInfo?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:1401](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L1401)

#### Parameters

##### containerSizeInfo?

`any` = `null`

#### Returns

`void`

***

### \_updateScrollOffset()

> `protected` **\_updateScrollOffset**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:1527](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L1527)

#### Returns

`void`

***

### \_updateSizeCache()

> `protected` **\_updateSizeCache**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:1308](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L1308)

#### Returns

`void`

***

### addScroll()

> **addScroll**(`add`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:639](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L639)

Shifts the scroll thumb position.
```typescript
this.parentVirtDir.addScroll(5);
```

#### Parameters

##### add

`number`

negative value to scroll previous and positive to scroll next;

#### Returns

`boolean`

***

### addScrollTop()

> **addScrollTop**(`add`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:627](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L627)

Shifts the scroll thumb position.
```typescript
this.parentVirtDir.addScroll(5);
```

#### Parameters

##### add

`number`

#### Returns

`boolean`

***

### applyChunkSizeChange()

> `protected` **applyChunkSizeChange**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:1496](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L1496)

Recalculates chunkSize and adds/removes elements if need due to the change.
this.state.chunkSize is updated in @addLastElem() or @removeLastElem()

#### Returns

`void`

***

### getIndexAtScroll()

> **getIndexAtScroll**(`scrollOffset`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:827](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L827)

Returns the index of the element at the specified offset.
```typescript
this.parentVirtDir.getIndexAtScroll(100);
```

#### Parameters

##### scrollOffset

`number`

#### Returns

`number`

***

### getItemCountInView()

> **getItemCountInView**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:771](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L771)

Returns the total number of items that are fully visible.
```typescript
this.parentVirtDir.getItemCountInView();
```

#### Returns

`number`

***

### getMargin()

> `protected` **getMargin**(`node`, `dimension`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:1558](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L1558)

#### Parameters

##### node

`any`

##### dimension

`string`

#### Returns

`number`

***

### getNodeSize()

> `protected` **getNodeSize**(`rNode`, `_index`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:847](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L847)

#### Parameters

##### rNode

`Element`

##### \_index

`number`

#### Returns

`number`

***

### getScroll()

> **getScroll**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:788](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L788)

Returns a reference to the scrollbar DOM element.
This is either a vertical or horizontal scrollbar depending on the specified igxForScrollOrientation.
```typescript
dir.getScroll();
```

#### Returns

`any`

#### Overrides

`IgxForOfToken.getScroll`

***

### getScrollForIndex()

> **getScrollForIndex**(`index`, `bottom?`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:815](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L815)

Returns the scroll offset of the element at the specified index.
```typescript
this.parentVirtDir.getScrollForIndex(1);
```

#### Parameters

##### index

`number`

##### bottom?

`boolean`

#### Returns

`number`

#### Overrides

`IgxForOfToken.getScrollForIndex`

***

### getSizeAt()

> **getSizeAt**(`index`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:797](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L797)

Returns the size of the element at the specified index.
```typescript
this.parentVirtDir.getSizeAt(1);
```

#### Parameters

##### index

`number`

#### Returns

`number`

***

### isIndexOutsideView()

> **isIndexOutsideView**(`index`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:836](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L836)

Returns whether the target index is outside the view.
```typescript
this.parentVirtDir.isIndexOutsideView(10);
```

#### Parameters

##### index

`number`

#### Returns

`boolean`

***

### isScrollable()

> **isScrollable**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:417](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L417)

#### Returns

`boolean`

***

### ngAfterViewInit()

> **ngAfterViewInit**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:512](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L512)

#### Returns

`void`

***

### scrollNext()

> **scrollNext**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:718](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L718)

Scrolls by one item into the appropriate next direction.
For "horizontal" orientation that will be the right column and for "vertical" that is the lower row.
```typescript
this.parentVirtDir.scrollNext();
```

#### Returns

`void`

***

### scrollNextPage()

> **scrollNextPage**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:742](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L742)

Scrolls by one page into the appropriate next direction.
For "horizontal" orientation that will be one view to the right and for "vertical" that is one view to the bottom.
```typescript
this.parentVirtDir.scrollNextPage();
```

#### Returns

`void`

***

### scrollPrev()

> **scrollPrev**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:731](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L731)

Scrolls by one item into the appropriate previous direction.
For "horizontal" orientation that will be the left column and for "vertical" that is the upper row.
```typescript
this.parentVirtDir.scrollPrev();
```

#### Returns

`void`

***

### scrollPrevPage()

> **scrollPrevPage**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:753](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L753)

Scrolls by one page into the appropriate previous direction.
For "horizontal" orientation that will be one view to the left and for "vertical" that is one view to the top.
```typescript
this.parentVirtDir.scrollPrevPage();
```

#### Returns

`void`

***

### scrollTo()

> **scrollTo**(`index`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:691](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L691)

Scrolls to the specified index.
```typescript
this.parentVirtDir.scrollTo(5);
```

#### Parameters

##### index

`number`

#### Returns

`void`

#### Overrides

`IgxForOfToken.scrollTo`

***

### subscribeToViewObserver()

> `protected` **subscribeToViewObserver**(`target`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:523](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L523)

#### Parameters

##### target

`Element`

#### Returns

`void`

***

### updateSizes()

> `protected` **updateSizes**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:990](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L990)

#### Returns

`void`

***

### updateViewSizes()

> `protected` **updateViewSizes**(`entries`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:1003](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L1003)

#### Parameters

##### entries

`ResizeObserverEntry`[]

#### Returns

`void`

***

### verticalScrollHandler()

> **verticalScrollHandler**(`event`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/for-of/for\_of.directive.ts:413](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/for-of/for_of.directive.ts#L413)

#### Parameters

##### event

`any`

#### Returns

`void`

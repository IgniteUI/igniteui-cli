# Class: IgxColumnMovingDropDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/moving/moving.drop.directive.ts:13](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/moving/moving.drop.directive.ts#L13)

## Extends

- [`IgxDropDirective`](IgxDropDirective.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxColumnMovingDropDirective**(): `IgxColumnMovingDropDirective`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/moving/moving.drop.directive.ts:54](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/moving/moving.drop.directive.ts#L54)

#### Returns

`IgxColumnMovingDropDirective`

#### Overrides

[`IgxDropDirective`](IgxDropDirective.md).[`constructor`](IgxDropDirective.md#constructor)

## Properties

### \_dropStrategy

> `protected` **\_dropStrategy**: [`IDropStrategy`](../interfaces/IDropStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:1769](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L1769)

#### Inherited from

[`IgxDropDirective`](IgxDropDirective.md).[`_dropStrategy`](IgxDropDirective.md#_dropstrategy)

***

### \_renderer

> `protected` **\_renderer**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:1774](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L1774)

#### Inherited from

[`IgxDropDirective`](IgxDropDirective.md).[`_renderer`](IgxDropDirective.md#_renderer)

***

### dropChannel

> **dropChannel**: `string` \| `number` \| `string`[] \| `number`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:1646](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L1646)

A property that provides a way for igxDrag and igxDrop to be linked through channels.
It accepts single value or an array of values and evaluates then using strict equality.
```html
<div igxDrag [dragChannel]="'odd'">
        <span>95</span>
</div>
<div igxDrop [dropChannel]="['odd', 'irrational']">
        <span>Numbers drop area!</span>
</div>
```

#### Memberof

IgxDropDirective

#### Inherited from

[`IgxDropDirective`](IgxDropDirective.md).[`dropChannel`](IgxDropDirective.md#dropchannel)

***

### dropped

> **dropped**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:1751](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L1751)

Event triggered when dragged element is dropped in the area of the element.
Since the `igxDrop` has default logic that appends the dropped element as a child, it can be canceled here.
To cancel the default logic the `cancel` property of the event needs to be set to true.
```html
<div class="cageArea" igxDrop (dropped)="dragDrop()" (igxDragEnter)="onDragCageEnter()" (igxDragLeave)="onDragCageLeave()">
</div>
```
```typescript
public dragDrop(){
    alert("A draggable element has been dropped in the chip area!");
}
```

#### Memberof

IgxDropDirective

#### Inherited from

[`IgxDropDirective`](IgxDropDirective.md).[`dropped`](IgxDropDirective.md#dropped)

***

### element

> **element**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:1773](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L1773)

#### Inherited from

[`IgxDropDirective`](IgxDropDirective.md).[`element`](IgxDropDirective.md#element)

***

### enter

> **enter**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:1698](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L1698)

Event triggered when dragged element enters the area of the element.
```html
<div class="cageArea" igxDrop (enter)="dragEnter()" (igxDragEnter)="onDragCageEnter()" (igxDragLeave)="onDragCageLeave()">
</div>
```
```typescript
public dragEnter(){
    alert("A draggable element has entered the chip area!");
}
```

#### Memberof

IgxDropDirective

#### Inherited from

[`IgxDropDirective`](IgxDropDirective.md).[`enter`](IgxDropDirective.md#enter)

***

### leave

> **leave**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:1732](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L1732)

Event triggered when dragged element leaves the area of the element.
```html
<div class="cageArea" igxDrop (leave)="dragLeave()" (igxDragEnter)="onDragCageEnter()" (igxDragLeave)="onDragCageLeave()">
</div>
```
```typescript
public dragLeave(){
    alert("A draggable element has left the chip area!");
}
```

#### Memberof

IgxDropDirective

#### Inherited from

[`IgxDropDirective`](IgxDropDirective.md).[`leave`](IgxDropDirective.md#leave)

***

### over

> **over**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:1715](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L1715)

Event triggered when dragged element enters the area of the element.
```html
<div class="cageArea" igxDrop (enter)="dragEnter()" (igxDragEnter)="onDragCageEnter()" (igxDragLeave)="onDragCageLeave()">
</div>
```
```typescript
public dragEnter(){
    alert("A draggable element has entered the chip area!");
}
```

#### Memberof

IgxDropDirective

#### Inherited from

[`IgxDropDirective`](IgxDropDirective.md).[`over`](IgxDropDirective.md#over)

## Accessors

### column

#### Get Signature

> **get** **column**(): [`ColumnType`](../interfaces/ColumnType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/moving/moving.drop.directive.ts:27](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/moving/moving.drop.directive.ts#L27)

##### Returns

[`ColumnType`](../interfaces/ColumnType.md)

***

### data

#### Set Signature

> **set** **data**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/moving/moving.drop.directive.ts:18](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/moving/moving.drop.directive.ts#L18)

- Save data inside the `igxDrop` directive. This can be set when instancing `igxDrop` on an element.
```html
<div [igxDrop]="{ source: myElement }"></div>
```

##### Memberof

IgxDropDirective

##### Parameters

###### val

[`ColumnType`](../interfaces/ColumnType.md) \| [`IgxForOfDirective`](IgxForOfDirective.md)\<[`ColumnType`](../interfaces/ColumnType.md), [`ColumnType`](../interfaces/ColumnType.md)[]\>

##### Returns

`void`

#### Overrides

[`IgxDropDirective`](IgxDropDirective.md).[`data`](IgxDropDirective.md#data)

***

### dropStrategy

#### Get Signature

> **get** **dropStrategy**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:1679](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L1679)

##### Returns

`any`

#### Set Signature

> **set** **dropStrategy**(`classRef`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:1675](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L1675)

Sets a drop strategy type that will be executed when an `IgxDrag` element is released inside
 the current drop area. The provided strategies are:
 - IgxDefaultDropStrategy - This is the default base strategy and it doesn't perform any actions.
 - IgxAppendDropStrategy - Appends the dropped element to last position as a direct child to the `igxDrop`.
 - IgxPrependDropStrategy - Prepends the dropped element to first position as a direct child to the `igxDrop`.
 - IgxInsertDropStrategy - If the dropped element is released above a child element of the `igxDrop`, it will be inserted
     at that position. Otherwise the dropped element will be appended if released outside any child of the `igxDrop`.
```html
<div igxDrag>
     <span>DragMe</span>
</div>
<div igxDrop [dropStrategy]="myDropStrategy">
        <span>Numbers drop area!</span>
</div>
```
```typescript
import { IgxAppendDropStrategy } from 'igniteui-angular';

export class App {
     public myDropStrategy = IgxAppendDropStrategy;
}
```

##### Memberof

IgxDropDirective

##### Parameters

###### classRef

`any`

##### Returns

`void`

#### Inherited from

[`IgxDropDirective`](IgxDropDirective.md).[`dropStrategy`](IgxDropDirective.md#dropstrategy)

***

### horizontalScroll

#### Get Signature

> **get** **horizontalScroll**(): [`IgxGridForOfDirective`](IgxGridForOfDirective.md)\<[`ColumnType`](../interfaces/ColumnType.md), [`ColumnType`](../interfaces/ColumnType.md)[]\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/moving/moving.drop.directive.ts:36](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/moving/moving.drop.directive.ts#L36)

##### Returns

[`IgxGridForOfDirective`](IgxGridForOfDirective.md)\<[`ColumnType`](../interfaces/ColumnType.md), [`ColumnType`](../interfaces/ColumnType.md)[]\>

***

### isDropTarget

#### Get Signature

> **get** **isDropTarget**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/moving/moving.drop.directive.ts:31](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/moving/moving.drop.directive.ts#L31)

##### Returns

`boolean`

***

### nativeElement

#### Get Signature

> **get** **nativeElement**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/moving/moving.drop.directive.ts:42](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/moving/moving.drop.directive.ts#L42)

##### Returns

`any`

## Methods

### getInsertIndexAt()

> `protected` **getInsertIndexAt**(`draggedDir`, `elementsAtPoint`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:1966](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L1966)

#### Parameters

##### draggedDir

[`IgxDragDirective`](IgxDragDirective.md)

##### elementsAtPoint

`any`[]

#### Returns

`number`

#### Inherited from

[`IgxDropDirective`](IgxDropDirective.md).[`getInsertIndexAt`](IgxDropDirective.md#getinsertindexat)

***

### getWindowScrollLeft()

> `protected` **getWindowScrollLeft**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:1927](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L1927)

#### Returns

`number`

#### Inherited from

[`IgxDropDirective`](IgxDropDirective.md).[`getWindowScrollLeft`](IgxDropDirective.md#getwindowscrollleft)

***

### getWindowScrollTop()

> `protected` **getWindowScrollTop**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:1923](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L1923)

#### Returns

`number`

#### Inherited from

[`IgxDropDirective`](IgxDropDirective.md).[`getWindowScrollTop`](IgxDropDirective.md#getwindowscrolltop)

***

### isDragLinked()

> `protected` **isDragLinked**(`drag`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts:1931](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/drag-drop/drag-drop.directive.ts#L1931)

#### Parameters

##### drag

[`IgxDragDirective`](IgxDragDirective.md)

#### Returns

`boolean`

#### Inherited from

[`IgxDropDirective`](IgxDropDirective.md).[`isDragLinked`](IgxDropDirective.md#isdraglinked)

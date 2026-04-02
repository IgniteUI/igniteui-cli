# Class: IgxListItemComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L34)

The Ignite UI List Item component is a container intended for row items in the Ignite UI for Angular List component.

Example:
```html
<igx-list>
  <igx-list-item isHeader="true">Contacts</igx-list-item>
  <igx-list-item *ngFor="let contact of contacts">
    <span class="name">{{ contact.name }}</span>
    <span class="phone">{{ contact.phone }}</span>
  </igx-list-item>
</igx-list>
```

## Implements

- `IListChild`

## Constructors

### Constructor

> **new IgxListItemComponent**(): `IgxListItemComponent`

#### Returns

`IgxListItemComponent`

## Properties

### ariaLabel

> **ariaLabel**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:98](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L98)

Sets/gets the `aria-label` attribute of the `list item`.
```typescript
this.listItem.ariaLabel = "Item1";
```
```typescript
let itemAriaLabel = this.listItem.ariaLabel;
```

#### Memberof

IgxListItemComponent

***

### hidden

> **hidden**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:84](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L84)

Sets/gets whether the `list item` is hidden.
By default the `hidden` value is `false`.
```html
<igx-list-item [hidden] = "true">Hidden Item</igx-list-item>
```
```typescript
let isHidden =  this.listItem.hidden;
```

#### Memberof

IgxListItemComponent

***

### isHeader

> **isHeader**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:69](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L69)

Sets/gets whether the `list item` is a header.
```html
<igx-list-item [isHeader] = "true">Header</igx-list-item>
```
```typescript
let isHeader =  this.listItem.isHeader;
```

#### Memberof

IgxListItemComponent

***

### leftPanningTemplateElement

> **leftPanningTemplateElement**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L46)

Provides a reference to the template's base element shown when left panning a list item.
```typescript
const leftPanTmpl = this.listItem.leftPanningTemplateElement;
```

***

### list

> **list**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:35](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L35)

***

### rightPanningTemplateElement

> **rightPanningTemplateElement**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:55](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L55)

Provides a reference to the template's base element shown when right panning a list item.
```typescript
const rightPanTmpl = this.listItem.rightPanningTemplateElement;
```

***

### touchAction

> **touchAction**: `string` = `'pan-y'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:107](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L107)

Gets the `touch-action` style of the `list item`.
```typescript
let touchAction = this.listItem.touchAction;
```

## Accessors

### contentElement

#### Get Signature

> **get** **contentElement**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:189](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L189)

Returns a reference container which contains the list item's content.
```typescript
let listItemContainer =  this.listItem.contentElement.
```

##### Memberof

IgxListItemComponent

##### Returns

`any`

***

### context

#### Get Signature

> **get** **context**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:201](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L201)

Returns the `context` object which represents the `template context` binding into the `list item container`
by providing the `$implicit` declaration which is the `IgxListItemComponent` itself.
```typescript
let listItemComponent = this.listItem.context;
```

##### Returns

`any`

***

### display

#### Get Signature

> **get** **display**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:332](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L332)

Returns string value which describes the display mode of the `list item`.
```typescript
let isHidden = this.listItem.display;
```

##### Memberof

IgxListItemComponent

##### Returns

`string`

***

### element

#### Get Signature

> **get** **element**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:177](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L177)

Returns an element reference to the list item.
```typescript
let listItemElement =  this.listItem.element.
```

##### Memberof

IgxListItemComponent

##### Returns

`any`

***

### headerStyle

#### Get Signature

> **get** **headerStyle**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:306](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L306)

Indicates whether `list item` should have header style.
```typescript
let headerStyle =  this.listItem.headerStyle;
```

##### Memberof

IgxListItemComponent

##### Returns

`boolean`

***

### index

#### Get Signature

> **get** **index**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:153](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L153)

Gets the `index` of a `list item`.
```typescript
let itemIndex =  this.listItem.index;
```

##### Memberof

IgxListItemComponent

##### Returns

`number`

#### Set Signature

> **set** **index**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:165](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L165)

Sets the `index` of the `list item`.
```typescript
this.listItem.index = index;
```

##### Memberof

IgxListItemComponent

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IListChild.index`

***

### innerStyle

#### Get Signature

> **get** **innerStyle**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:319](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L319)

Applies the inner style of the `list item` if the item is not counted as header.
```typescript
let innerStyle =  this.listItem.innerStyle;
```

##### Memberof

IgxListItemComponent

##### Returns

`boolean`

***

### maxLeft

#### Get Signature

> **get** **maxLeft**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:229](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L229)

Gets the maximum left position of the `list item`.
```typescript
let maxLeft = this.listItem.maxLeft;
```

##### Memberof

IgxListItemComponent

##### Returns

`number`

***

### maxRight

#### Get Signature

> **get** **maxRight**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:241](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L241)

Gets the maximum right position of the `list item`.
```typescript
let maxRight = this.listItem.maxRight;
```

##### Memberof

IgxListItemComponent

##### Returns

`any`

***

### panState

#### Get Signature

> **get** **panState**(): [`IgxListPanState`](../enumerations/IgxListPanState.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:140](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L140)

Gets the `panState` of a `list item`.
```typescript
let itemPanState =  this.listItem.panState;
```

##### Memberof

IgxListItemComponent

##### Returns

[`IgxListPanState`](../enumerations/IgxListPanState.md)

***

### role

#### Get Signature

> **get** **role**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:265](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L265)

Gets/Sets the `role` attribute of the `list item`.
```typescript
let itemRole =  this.listItem.role;
```

##### Memberof

IgxListItemComponent

##### Returns

`string`

#### Set Signature

> **set** **role**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:269](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L269)

##### Parameters

###### val

`string`

##### Returns

`void`

***

### selected

#### Get Signature

> **get** **selected**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:289](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L289)

Sets/gets whether the `list item` is selected.
Selection is only applied to non-header items.
When selected, the CSS class 'igx-list__item-base--selected' is added to the item.
```html
<igx-list-item [selected]="true">Selected Item</igx-list-item>
```
```typescript
let isSelected = this.listItem.selected;
this.listItem.selected = true;
```

##### Memberof

IgxListItemComponent

##### Returns

`boolean`

#### Set Signature

> **set** **selected**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:293](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L293)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### width

#### Get Signature

> **get** **width**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/list/src/list/list-item.component.ts:215](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/list/src/list/list-item.component.ts#L215)

Gets the width of a `list item`.
```typescript
let itemWidth = this.listItem.width;
```

##### Memberof

IgxListItemComponent

##### Returns

`any`

# Class: IgxSelectComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:78](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L78)

**Ignite UI for Angular Select** -
[Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/select)

The `igxSelect` provides an input with dropdown list allowing selection of a single item.

Example:
```html
<igx-select #select1 [placeholder]="'Pick One'">
  <label igxLabel>Select Label</label>
  <igx-select-item *ngFor="let item of items" [value]="item.field">
    {{ item.field }}
  </igx-select-item>
</igx-select>
```

## Extends

- [`IgxDropDownComponent`](IgxDropDownComponent.md)

## Implements

- `IgxSelectBase`
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxSelectComponent**(): `IgxSelectComponent`

#### Returns

`IgxSelectComponent`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`constructor`](IgxDropDownComponent.md#constructor)

## Properties

### \_focusedItem

> `protected` **\_focusedItem**: `any` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:187](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L187)

#### Implementation of

`IgxSelectBase._focusedItem`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`_focusedItem`](IgxDropDownComponent.md#_focuseditem)

***

### \_height

> `protected` **\_height**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:186](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L186)

#### Implementation of

`IgxSelectBase._height`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`_height`](IgxDropDownComponent.md#_height)

***

### \_id

> `protected` **\_id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:188](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L188)

#### Implementation of

`IgxSelectBase._id`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`_id`](IgxDropDownComponent.md#_id)

***

### \_scrollPosition

> `protected` **\_scrollPosition**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:237](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L237)

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`_scrollPosition`](IgxDropDownComponent.md#_scrollposition)

***

### \_width

> `protected` **\_width**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:185](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L185)

#### Implementation of

`IgxSelectBase._width`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`_width`](IgxDropDownComponent.md#_width)

***

### cdr

> `protected` **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L25)

#### Implementation of

`IgxSelectBase.cdr`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`cdr`](IgxDropDownComponent.md#cdr)

***

### closed

> **closed**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:173](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L173)

Emitted after the dropdown is closed

```html
<igx-select (closed)='handleClosed($event)'></igx-select>
```

#### Overrides

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`closed`](IgxDropDownComponent.md#closed)

***

### closing

> **closing**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:163](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L163)

Emitted before the dropdown is closed

```html
<igx-select (closing)='handleClosing($event)'></igx-select>
```

#### Overrides

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`closing`](IgxDropDownComponent.md#closing)

***

### computedStyles

> `protected` **computedStyles**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:189](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L189)

#### Implementation of

`IgxSelectBase.computedStyles`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`computedStyles`](IgxDropDownComponent.md#computedstyles)

***

### destroy$

> `protected` **destroy$**: `Subject`\<`boolean`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:236](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L236)

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`destroy$`](IgxDropDownComponent.md#destroy)

***

### disabled

> **disabled**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:120](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L120)

Disables the component.
```html
<igx-select [disabled]="'true'"></igx-select>
```

***

### document

> **document**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:26](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L26)

#### Implementation of

`IgxSelectBase.document`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`document`](IgxDropDownComponent.md#document)

***

### elementRef

> `protected` **elementRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:24](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L24)

#### Implementation of

`IgxSelectBase.elementRef`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`elementRef`](IgxDropDownComponent.md#elementref)

***

### footerTemplate

> **footerTemplate**: `TemplateRef`\<`any`\> = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:240](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L240)

The custom template, if any, that should be used when rendering the FOOTER for the select items list

```typescript
// Set in typescript
const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
myComponent.select.footerTemplate = myCustomTemplate;
```
```html
<!-- Set in markup -->
 <igx-select #select>
     ...
     <ng-template igxSelectFooter>
         <div class="select__footer">
             This is a custom footer
         </div>
     </ng-template>
 </igx-select>
```

***

### headerTemplate

> **headerTemplate**: `TemplateRef`\<`any`\> = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:217](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L217)

The custom template, if any, that should be used when rendering the HEADER for the select items list

```typescript
// Set in typescript
const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
myComponent.select.headerTemplate = myCustomTemplate;
```
```html
<!-- Set in markup -->
 <igx-select #select>
     ...
     <ng-template igxSelectHeader>
         <div class="select__header">
             This is a custom header
         </div>
     </ng-template>
 </igx-select>
```

***

### internalSuffixes

> `protected` **internalSuffixes**: `QueryList`\<`IgxSuffixDirective`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:102](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L102)

***

### labelledBy

> **labelledBy**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:134](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L134)

Sets aria-labelledby attribute value.
```html
<igx-drop-down [labelledby]="labelId"></igx-drop-down>
```

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`labelledBy`](IgxDropDownComponent.md#labelledby)

***

### opened

> **opened**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:153](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L153)

Emitted after the dropdown is opened

```html
<igx-select (opened)='handleOpened($event)'></igx-select>
```

#### Overrides

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`opened`](IgxDropDownComponent.md#opened)

***

### opening

> **opening**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:143](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L143)

Emitted before the dropdown is opened

```html
<igx-select opening='handleOpening($event)'></igx-select>
```

#### Overrides

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`opening`](IgxDropDownComponent.md#opening)

***

### overlayService

> `protected` **overlayService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:80](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L80)

***

### overlaySettings

> **overlaySettings**: [`OverlaySettings`](../interfaces/OverlaySettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:129](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L129)

Sets custom OverlaySettings `IgxSelectComponent`.
```html
<igx-select [overlaySettings] = "customOverlaySettings"></igx-select>
```

***

### placeholder

> **placeholder**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:111](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L111)

Sets input placeholder.

***

### prefixes

> `protected` **prefixes**: `QueryList`\<`IgxPrefixDirective`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:96](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L96)

***

### role

> **role**: `string` = `'listbox'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:144](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L144)

Gets/sets the `role` attribute of the drop down. Default is 'listbox'.

```html
 <igx-drop-down [role]="customRole"></igx-drop-down-item>
```

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`role`](IgxDropDownComponent.md#role)

***

### scrollContainerRef

> `protected` **scrollContainerRef**: `ElementRef`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:153](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L153)

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`scrollContainerRef`](IgxDropDownComponent.md#scrollcontainerref)

***

### selection

> `protected` **selection**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:57](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L57)

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`selection`](IgxDropDownComponent.md#selection)

***

### selectionChanging

> **selectionChanging**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:36](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L36)

Emitted when item selection is changing, before the selection completes

```html
<igx-drop-down (selectionChanging)='handleSelection()'></igx-drop-down>
```

#### Implementation of

`IgxSelectBase.selectionChanging`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`selectionChanging`](IgxDropDownComponent.md#selectionchanging)

***

### suffixes

> `protected` **suffixes**: `QueryList`\<`IgxSuffixDirective`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:99](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L99)

***

### toggleDirective

> `protected` **toggleDirective**: [`IgxToggleDirective`](IgxToggleDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:150](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L150)

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`toggleDirective`](IgxDropDownComponent.md#toggledirective)

***

### toggleIconTemplate

> **toggleIconTemplate**: `TemplateRef`\<`any`\> = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:194](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L194)

The custom template, if any, that should be used when rendering the select TOGGLE(open/close) button

```typescript
// Set in typescript
const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
myComponent.select.toggleIconTemplate = myCustomTemplate;
```
```html
<!-- Set in markup -->
 <igx-select #select>
     ...
     <ng-template igxSelectToggleIcon let-collapsed>
         <igx-icon>{{ collapsed ? 'remove_circle' : 'remove_circle_outline'}}</igx-icon>
     </ng-template>
 </igx-select>
```

***

### virtDir

> `protected` **virtDir**: `IgxForOfToken`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:147](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L147)

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`virtDir`](IgxDropDownComponent.md#virtdir)

## Accessors

### collapsed

#### Get Signature

> **get** **collapsed**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:221](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L221)

Gets if the dropdown is collapsed

```typescript
let isCollapsed = this.dropdown.collapsed;
```

##### Returns

`boolean`

Gets if the dropdown is collapsed

#### Implementation of

`IgxSelectBase.collapsed`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`collapsed`](IgxDropDownComponent.md#collapsed)

***

### collectionLength

#### Get Signature

> **get** `protected` **collectionLength**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:230](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L230)

##### Returns

`number`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`collectionLength`](IgxDropDownComponent.md#collectionlength)

***

### element

#### Get Signature

> **get** **element**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:158](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L158)

Get dropdown html element

```typescript
let myDropDownElement = this.dropdown.element;
```

##### Returns

`any`

#### Implementation of

`IgxSelectBase.element`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`element`](IgxDropDownComponent.md#element)

***

### headers

#### Get Signature

> **get** **headers**(): [`IgxDropDownItemBaseDirective`](IgxDropDownItemBaseDirective.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:138](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L138)

Get all header items

```typescript
let myDropDownHeaderItems = this.dropdown.headers;
```

##### Returns

[`IgxDropDownItemBaseDirective`](IgxDropDownItemBaseDirective.md)[]

#### Implementation of

`IgxSelectBase.headers`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`headers`](IgxDropDownComponent.md#headers)

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:183](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L183)

Gets/Sets the drop down's id

```typescript
// get
let myDropDownCurrentId = this.dropdown.id;
```
```html
<!--set-->
<igx-drop-down [id]='newDropDownId'></igx-drop-down>
```

##### Returns

`string`

#### Set Signature

> **set** **id**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:186](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L186)

Gets/Sets the drop down's id

```typescript
// get
let myDropDownCurrentId = this.dropdown.id;
```
```html
<!--set-->
<igx-drop-down [id]='newDropDownId'></igx-drop-down>
```

##### Parameters

###### value

`string`

##### Returns

`void`

#### Implementation of

`IgxSelectBase.id`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`id`](IgxDropDownComponent.md#id)

***

### items

#### Get Signature

> **get** **items**(): [`IgxDropDownItemBaseDirective`](IgxDropDownItemBaseDirective.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:118](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L118)

Get all non-header items

```typescript
let myDropDownItems = this.dropdown.items;
```

##### Returns

[`IgxDropDownItemBaseDirective`](IgxDropDownItemBaseDirective.md)[]

#### Implementation of

`IgxSelectBase.items`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`items`](IgxDropDownComponent.md#items)

***

### listId

#### Get Signature

> **get** **listId**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:195](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L195)

Id of the internal listbox of the drop down

##### Returns

`string`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`listId`](IgxDropDownComponent.md#listid)

***

### type

#### Get Signature

> **get** **type**(): [`IgxInputGroupType`](../type-aliases/IgxInputGroupType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:297](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L297)

Sets how the select will be styled.
The allowed values are `line`, `box` and `border`. The input-group default is `line`.
```html
<igx-select [type]="'box'"></igx-select>
```

##### Returns

[`IgxInputGroupType`](../type-aliases/IgxInputGroupType.md)

#### Set Signature

> **set** **type**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:301](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L301)

##### Parameters

###### val

[`IgxInputGroupType`](../type-aliases/IgxInputGroupType.md)

##### Returns

`void`

***

### value

#### Get Signature

> **get** **value**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:278](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L278)

Gets/Sets the component value.

```typescript
// get
let selectValue = this.select.value;
```

```typescript
// set
this.select.value = 'London';
```
```html
<igx-select [value]="value"></igx-select>
```

##### Returns

`any`

#### Set Signature

> **set** **value**(`v`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:281](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L281)

##### Parameters

###### v

`any`

##### Returns

`void`

## Methods

### clearSelection()

> **clearSelection**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:574](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L574)

Clears the selection of the dropdown
```typescript
this.dropdown.clearSelection();
```

#### Returns

`void`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`clearSelection`](IgxDropDownComponent.md#clearselection)

***

### close()

> **close**(`event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:270](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L270)

Closes the dropdown

```typescript
this.dropdown.close();
```

#### Parameters

##### event?

`Event`

#### Returns

`void`

#### Implementation of

`IgxSelectBase.close`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`close`](IgxDropDownComponent.md#close)

***

### focusItem()

> `protected` **focusItem**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:601](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L601)

#### Parameters

##### value

`boolean`

#### Returns

`void`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`focusItem`](IgxDropDownComponent.md#focusitem)

***

### getNearestSiblingFocusableItemIndex()

> `protected` **getNearestSiblingFocusableItemIndex**(`startIndex`, `direction`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:308](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L308)

#### Parameters

##### startIndex

`number`

##### direction

`Navigate`

#### Returns

`number`

#### Implementation of

`IgxSelectBase.getNearestSiblingFocusableItemIndex`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`getNearestSiblingFocusableItemIndex`](IgxDropDownComponent.md#getnearestsiblingfocusableitemindex)

***

### inputGroupClick()

> **inputGroupClick**(`event`, `overlaySettings?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:401](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L401)

#### Parameters

##### event

`MouseEvent`

##### overlaySettings?

[`OverlaySettings`](../interfaces/OverlaySettings.md)

#### Returns

`void`

***

### isSelectionValid()

> `protected` **isSelectionValid**(`selection`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:591](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L591)

Checks whether the selection is valid
`null` - the selection should be emptied
Virtual? - the selection should at least have and `index` and `value` property
Non-virtual? - the selection should be a valid drop-down item and **not** be a header

#### Parameters

##### selection

`any`

#### Returns

`boolean`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`isSelectionValid`](IgxDropDownComponent.md#isselectionvalid)

***

### manageRequiredAsterisk()

> `protected` **manageRequiredAsterisk**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:569](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L569)

#### Returns

`void`

***

### navigate()

> `protected` **navigate**(`direction`, `currentIndex?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:562](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L562)

#### Parameters

##### direction

`Navigate`

##### currentIndex?

`number`

#### Returns

`void`

#### Implementation of

`IgxSelectBase.navigate`

#### Overrides

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`navigate`](IgxDropDownComponent.md#navigate)

***

### navigateItem()

> **navigateItem**(`index`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:316](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L316)

Navigates to the item on the specified index
If the data in the drop-down is virtualized, pass the index of the item in the virtualized data.

#### Parameters

##### index

`number`

#### Returns

`void`

#### Implementation of

`IgxSelectBase.navigateItem`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`navigateItem`](IgxDropDownComponent.md#navigateitem)

***

### onItemActionKey()

> **onItemActionKey**(`key`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:465](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L465)

Keydown Handler

#### Parameters

##### key

[`DropDownActionKey`](../type-aliases/DropDownActionKey.md)

##### event?

`Event`

#### Returns

`void`

#### Implementation of

`IgxSelectBase.onItemActionKey`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`onItemActionKey`](IgxDropDownComponent.md#onitemactionkey)

***

### onStatusChanged()

> `protected` **onStatusChanged**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:540](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L540)

#### Returns

`void`

***

### open()

> **open**(`overlaySettings?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select.component.ts:390](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select.component.ts#L390)

Opens the select

```typescript
this.select.open();
```

#### Parameters

##### overlaySettings?

[`OverlaySettings`](../interfaces/OverlaySettings.md)

#### Returns

`void`

#### Implementation of

`IgxSelectBase.open`

#### Overrides

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`open`](IgxDropDownComponent.md#open)

***

### scrollToHiddenItem()

> `protected` **scrollToHiddenItem**(`newItem`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts:287](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.base.ts#L287)

#### Parameters

##### newItem

[`IgxDropDownItemBaseDirective`](IgxDropDownItemBaseDirective.md)

#### Returns

`void`

#### Implementation of

`IgxSelectBase.scrollToHiddenItem`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`scrollToHiddenItem`](IgxDropDownComponent.md#scrolltohiddenitem)

***

### scrollToItem()

> `protected` **scrollToItem**(`item`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:597](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L597)

#### Parameters

##### item

[`IgxDropDownItemBaseDirective`](IgxDropDownItemBaseDirective.md)

#### Returns

`void`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`scrollToItem`](IgxDropDownComponent.md#scrolltoitem)

***

### setSelectedItem()

> **setSelectedItem**(`index`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:294](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L294)

Select an item by index

#### Parameters

##### index

`number`

of the item to select; If the drop down uses *igxFor, pass the index in data

#### Returns

`void`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`setSelectedItem`](IgxDropDownComponent.md#setselecteditem)

***

### skipHeader()

> `protected` **skipHeader**(`direction`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:616](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L616)

#### Parameters

##### direction

`Navigate`

#### Returns

`void`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`skipHeader`](IgxDropDownComponent.md#skipheader)

***

### toggle()

> **toggle**(`overlaySettings?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:281](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L281)

Toggles the dropdown

```typescript
this.dropdown.toggle();
```

#### Parameters

##### overlaySettings?

[`OverlaySettings`](../interfaces/OverlaySettings.md)

#### Returns

`void`

#### Implementation of

`IgxSelectBase.toggle`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`toggle`](IgxDropDownComponent.md#toggle)

***

### updateItemFocus()

> `protected` **updateItemFocus**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts:607](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down.component.ts#L607)

#### Returns

`void`

#### Inherited from

[`IgxDropDownComponent`](IgxDropDownComponent.md).[`updateItemFocus`](IgxDropDownComponent.md#updateitemfocus)

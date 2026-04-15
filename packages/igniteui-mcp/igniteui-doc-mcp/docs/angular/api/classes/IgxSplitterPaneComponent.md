# Class: IgxSplitterPaneComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts:22](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts#L22)

Represents individual resizable/collapsible panes.

## Igx Module

IgxSplitterModule

## Igx Parent

IgxSplitterComponent

## Igx Keywords

pane

## Igx Group

presentation

## Remarks

Users can control the resize behavior via the min and max size properties.

## Constructors

### Constructor

> **new IgxSplitterPaneComponent**(): `IgxSplitterPaneComponent`

#### Returns

`IgxSplitterPaneComponent`

## Properties

### collapsedChange

> **collapsedChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts:104](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts#L104)

Event fired when collapsed state of pane is changed.

#### Example

```html
<igx-splitter>
 <igx-splitter-pane (collapsedChange)='paneCollapsedChange($event)'>...</igx-splitter-pane>
</igx-splitter>
```

***

### resizable

> **resizable**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts:91](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts#L91)

Gets/Sets whether pane is resizable.

#### Example

```html
<igx-splitter>
 <igx-splitter-pane [resizable]='false'>...</igx-splitter-pane>
</igx-splitter>
```

#### Remarks

If pane is not resizable its related splitter bar cannot be dragged.

## Accessors

### collapsed

#### Get Signature

> **get** **collapsed**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts:228](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts#L228)

##### Returns

`boolean`

#### Set Signature

> **set** **collapsed**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts:215](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts#L215)

Gets/Sets whether current pane is collapsed.

##### Example

```typescript
const isCollapsed = pane.collapsed;
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### dragSize

#### Set Signature

> **set** **dragSize**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts:181](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts#L181)

##### Parameters

###### val

`any`

##### Returns

`void`

***

### maxSize

#### Get Signature

> **get** **maxSize**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts:68](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts#L68)

Gets/Set the maximum allowed size of the current pane.

##### Example

```html
<igx-splitter>
 <igx-splitter-pane [maxSize]='maxSize'>...</igx-splitter-pane>
</igx-splitter>
```

##### Returns

`string`

#### Set Signature

> **set** **maxSize**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts:71](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts#L71)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### minSize

#### Get Signature

> **get** **minSize**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts:47](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts#L47)

Gets/Sets the minimum allowed size of the current pane.

##### Example

```html
<igx-splitter>
 <igx-splitter-pane [minSize]='minSize'>...</igx-splitter-pane>
</igx-splitter>
```

##### Returns

`string`

#### Set Signature

> **set** **minSize**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts:50](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts#L50)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### order

#### Set Signature

> **set** **order**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts:111](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts#L111)

##### Parameters

###### val

`any`

##### Returns

`void`

***

### size

#### Get Signature

> **get** **size**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts:163](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts#L163)

Gets/Sets the size of the current pane.
 *

##### Example

```html
<igx-splitter>
 <igx-splitter-pane [size]='size'>...</igx-splitter-pane>
</igx-splitter>
```

##### Returns

`string`

#### Set Signature

> **set** **size**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts:167](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts#L167)

##### Parameters

###### value

`string`

##### Returns

`void`

## Methods

### toggle()

> **toggle**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts:244](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter-pane/splitter-pane.component.ts#L244)

Toggles the collapsed state of the pane.

#### Returns

`void`

#### Example

```typescript
pane.toggle();
```

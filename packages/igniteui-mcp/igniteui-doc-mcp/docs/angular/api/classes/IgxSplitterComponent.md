# Class: IgxSplitterComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts:50](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts#L50)

Provides a framework for a simple layout, splitting the view horizontally or vertically
into multiple smaller resizable and collapsible areas.

## Igx Module

IgxSplitterModule

## Igx Parent

Layouts

## Igx Theme

igx-splitter-theme

## Igx Keywords

splitter panes layout

## Igx Group

presentation

## Example

```html
<igx-splitter>
 <igx-splitter-pane>
     ...
 </igx-splitter-pane>
 <igx-splitter-pane>
     ...
 </igx-splitter-pane>
</igx-splitter>
```

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxSplitterComponent**(): `IgxSplitterComponent`

#### Returns

`IgxSplitterComponent`

## Properties

### document

> **document**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts:51](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts#L51)

***

### nonCollapsible

> **nonCollapsible**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts:190](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts#L190)

Sets the visibility of the handle and expanders in the splitter bar.
False by default

#### Example

```html
<igx-splitter [nonCollapsible]='true'>
</igx-splitter>
```

***

### panes

> **panes**: `QueryList`\<[`IgxSplitterPaneComponent`](IgxSplitterPaneComponent.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts:64](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts#L64)

Gets the list of splitter panes.

#### Example

```typescript
const panes = this.splitter.panes;
```

***

### resizeEnd

> **resizeEnd**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts:134](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts#L134)

Event fired when resizing of panes ends.

#### Example

```html
<igx-splitter (resizeEnd)='resizeEnd($event)'>
 <igx-splitter-pane>...</igx-splitter-pane>
</igx-splitter>
```

***

### resizeStart

> **resizeStart**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts:107](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts#L107)

Event fired when resizing of panes starts.

#### Example

```html
<igx-splitter (resizeStart)='resizeStart($event)'>
 <igx-splitter-pane>...</igx-splitter-pane>
</igx-splitter>
```

***

### resizing

> **resizing**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts:120](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts#L120)

Event fired when resizing of panes is in progress.

#### Example

```html
<igx-splitter (resizing)='resizing($event)'>
 <igx-splitter-pane>...</igx-splitter-pane>
</igx-splitter>
```

## Accessors

### type

#### Get Signature

> **get** **type**(): [`SplitterType`](../enumerations/SplitterType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts:170](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts#L170)

Gets/Sets the splitter orientation.

##### Example

```html
<igx-splitter [type]="type">...</igx-splitter>
```

##### Returns

[`SplitterType`](../enumerations/SplitterType.md)

#### Set Signature

> **set** **type**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts:173](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts#L173)

##### Parameters

###### value

[`SplitterType`](../enumerations/SplitterType.md)

##### Returns

`void`

## Methods

### onMoveEnd()

> **onMoveEnd**(`delta`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts:245](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/splitter/src/splitter/splitter.component.ts#L245)

#### Parameters

##### delta

`number`

#### Returns

`void`

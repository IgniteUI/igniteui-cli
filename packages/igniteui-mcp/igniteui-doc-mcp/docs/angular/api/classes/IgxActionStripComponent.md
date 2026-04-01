# Class: IgxActionStripComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts:95](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts#L95)

Action Strip provides templatable area for one or more actions.

## Igx Module

IgxActionStripModule

## Igx Theme

igx-action-strip-theme

## Igx Keywords

action, strip, actionStrip, pinning, editing

## Igx Group

Data Entry & Display

## Igx Parent

IgxGridComponent, IgxTreeGridComponent, IgxHierarchicalGridComponent, IgxRowIslandComponent, *

## Remarks

The Ignite UI Action Strip is a container, overlaying its parent container,
and displaying action buttons with action applicable to the parent component the strip is instantiated or shown for.

## Example

```html
<igx-action-strip #actionStrip>
    <igx-icon (click)="doSomeAction()"></igx-icon>
</igx-action-strip>

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxActionStripComponent**(): `IgxActionStripComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts:208](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts#L208)

#### Returns

`IgxActionStripComponent`

## Properties

### cdr

> **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts:100](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts#L100)

#### Implementation of

`IgxActionStripToken.cdr`

***

### context

> **context**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts:115](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts#L115)

Sets the context of an action strip.
The context should be an instance of a @Component, that has element property.
This element will be the placeholder of the action strip.

#### Example

```html
<igx-action-strip [context]="cell"></igx-action-strip>
```

#### Implementation of

`IgxActionStripToken.context`

***

### el

> `protected` **el**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts:98](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts#L98)

***

### hidden

> **hidden**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts:150](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts#L150)

Gets/Sets the visibility of the Action Strip.
Could be used to set if the Action Strip will be initially hidden.

#### Example

```html
 <igx-action-strip [hidden]="false">
```

***

### hostClass

> `protected` **hostClass**: `string` = `'igx-action-strip'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts:246](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts#L246)

Host `attr.class` binding.

***

### trackMenuItem

> `protected` **trackMenuItem**: `object` = `trackByIdentity`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts:329](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts#L329)

pin swapping w/ unpin resets the menuItems collection

## Accessors

### resourceStrings

#### Get Signature

> **get** **resourceStrings**(): `PrefixedResourceStrings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts:164](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts#L164)

##### Returns

`PrefixedResourceStrings`

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts:160](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts#L160)

Gets/Sets the resource strings.

##### Remarks

By default it uses EN resources.

##### Parameters

###### value

`PrefixedResourceStrings`

##### Returns

`void`

## Methods

### hide()

> **hide**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts:317](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts#L317)

Hiding the Action Strip and removing it from its current context element.

#### Returns

`void`

#### Example

```typescript
this.actionStrip.hide();
```

#### Implementation of

`IgxActionStripToken.hide`

***

### show()

> **show**(`context?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts:293](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/action-strip/src/action-strip/action-strip.component.ts#L293)

Showing the Action Strip and appending it the specified context element.

#### Parameters

##### context?

`any`

#### Returns

`void`

#### Example

```typescript
this.actionStrip.show(row);
```

#### Implementation of

`IgxActionStripToken.show`

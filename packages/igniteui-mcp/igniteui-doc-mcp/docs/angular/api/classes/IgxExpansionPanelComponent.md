# Class: IgxExpansionPanelComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts:32](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts#L32)

## Implements

- [`IgxExpansionPanelBase`](../interfaces/IgxExpansionPanelBase.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxExpansionPanelComponent**(): `IgxExpansionPanelComponent`

#### Returns

`IgxExpansionPanelComponent`

#### Inherited from

`ToggleAnimationPlayer.constructor`

## Properties

### \_animationSettings

> `protected` **\_animationSettings**: `ToggleAnimationSettings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts:63](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts#L63)

#### Inherited from

`ToggleAnimationPlayer._animationSettings`

***

### animationService

> `protected` **animationService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts:37](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts#L37)

#### Inherited from

`ToggleAnimationPlayer.animationService`

***

### collapsed

> **collapsed**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts:128](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts#L128)

Gets/sets whether the component is collapsed (its content is hidden)
Get
```typescript
 const myPanelState: boolean = this.panel.collapsed;
```
Set
```html
 this.panel.collapsed = true;
```

Two-way data binding:
```html
<igx-expansion-panel [(collapsed)]="model.isCollapsed"></igx-expansion-panel>
```

#### Implementation of

[`IgxExpansionPanelBase`](../interfaces/IgxExpansionPanelBase.md).[`collapsed`](../interfaces/IgxExpansionPanelBase.md#collapsed)

***

### contentCollapsed

> **contentCollapsed**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts:162](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts#L162)

Emitted when the expansion panel finishes collapsing
```typescript
 handleCollapsed(event: IExpansionPanelEventArgs)
```
```html
 <igx-expansion-panel (contentCollapsed)="handleCollapsed($event)">
     ...
 </igx-expansion-panel>
```

#### Implementation of

[`IgxExpansionPanelBase`](../interfaces/IgxExpansionPanelBase.md).[`contentCollapsed`](../interfaces/IgxExpansionPanelBase.md#contentcollapsed)

***

### contentCollapsing

> **contentCollapsing**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts:148](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts#L148)

Emitted when the expansion panel starts collapsing
```typescript
 handleCollapsing(event: IExpansionPanelCancelableEventArgs)
```
```html
 <igx-expansion-panel (contentCollapsing)="handleCollapsing($event)">
     ...
 </igx-expansion-panel>
```

#### Implementation of

[`IgxExpansionPanelBase`](../interfaces/IgxExpansionPanelBase.md).[`contentCollapsing`](../interfaces/IgxExpansionPanelBase.md#contentcollapsing)

***

### contentExpanded

> **contentExpanded**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts:190](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts#L190)

Emitted when the expansion panel finishes expanding
```typescript
 handleExpanded(event: IExpansionPanelEventArgs)
```
```html
 <igx-expansion-panel (contentExpanded)="handleExpanded($event)">
     ...
 </igx-expansion-panel>
```

#### Implementation of

[`IgxExpansionPanelBase`](../interfaces/IgxExpansionPanelBase.md).[`contentExpanded`](../interfaces/IgxExpansionPanelBase.md#contentexpanded)

***

### contentExpanding

> **contentExpanding**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts:176](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts#L176)

Emitted when the expansion panel starts expanding
```typescript
 handleExpanding(event: IExpansionPanelCancelableEventArgs)
```
```html
 <igx-expansion-panel (contentExpanding)="handleExpanding($event)">
     ...
 </igx-expansion-panel>
```

#### Implementation of

[`IgxExpansionPanelBase`](../interfaces/IgxExpansionPanelBase.md).[`contentExpanding`](../interfaces/IgxExpansionPanelBase.md#contentexpanding)

***

### destroy$

> `protected` **destroy$**: `Subject`\<`void`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts:61](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts#L61)

#### Inherited from

`ToggleAnimationPlayer.destroy$`

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts:89](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts#L89)

Sets/gets the `id` of the expansion panel component.
If not set, `id` will have value `"igx-expansion-panel-0"`;
```html
<igx-expansion-panel id = "my-first-expansion-panel"></igx-expansion-panel>
```
```typescript
let panelId =  this.panel.id;
```

#### Memberof

IgxExpansionPanelComponent

#### Implementation of

[`IgxExpansionPanelBase`](../interfaces/IgxExpansionPanelBase.md).[`id`](../interfaces/IgxExpansionPanelBase.md#id)

***

### players

> `protected` **players**: `Map`\<`string`, [`AnimationPlayer`](../interfaces/AnimationPlayer.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts:62](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/toggle-animation-component.ts#L62)

#### Inherited from

`ToggleAnimationPlayer.players`

## Accessors

### animationSettings

#### Get Signature

> **get** **animationSettings**(): `ToggleAnimationSettings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts:68](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts#L68)

Sets/gets the animation settings of the expansion panel component
Open and Close animation should be passed

Get
```typescript
 const currentAnimations = this.panel.animationSettings;
```
Set
```typescript
 import { slideInLeft, slideOutRight } from 'igniteui-angular';
 ...
 this.panel.animationsSettings = {
     openAnimation: slideInLeft,
     closeAnimation: slideOutRight
};
```
or via template
```typescript
 import { slideInLeft, slideOutRight } from 'igniteui-angular';
 ...
 myCustomAnimationObject = {
     openAnimation: slideInLeft,
     closeAnimation: slideOutRight
};
```html
 <igx-expansion-panel [animationSettings]='myCustomAnimationObject'>
 ...
 </igx-expansion-panel>
```

##### Returns

`ToggleAnimationSettings`

#### Set Signature

> **set** **animationSettings**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts:71](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts#L71)

##### Parameters

###### value

`ToggleAnimationSettings`

##### Returns

`void`

#### Implementation of

[`IgxExpansionPanelBase`](../interfaces/IgxExpansionPanelBase.md).[`animationSettings`](../interfaces/IgxExpansionPanelBase.md#animationsettings)

#### Overrides

`ToggleAnimationPlayer.animationSettings`

## Methods

### close()

> **close**(`evt?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts:314](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts#L314)

#### Parameters

##### evt?

`Event`

#### Returns

`void`

***

### collapse()

> **collapse**(`evt?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts:239](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts#L239)

Collapses the panel

```html
 <igx-expansion-panel #myPanel>
     ...
 </igx-expansion-panel>
 <button type="button" igxButton (click)="myPanel.collapse($event)">Collpase Panel</button>
```

#### Parameters

##### evt?

`Event`

#### Returns

`void`

#### Implementation of

[`IgxExpansionPanelBase`](../interfaces/IgxExpansionPanelBase.md).[`collapse`](../interfaces/IgxExpansionPanelBase.md#collapse)

***

### expand()

> **expand**(`evt?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts:271](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts#L271)

Expands the panel

```html
 <igx-expansion-panel #myPanel>
     ...
 </igx-expansion-panel>
 <button type="button" igxButton (click)="myPanel.expand($event)">Expand Panel</button>
```

#### Parameters

##### evt?

`Event`

#### Returns

`void`

#### Implementation of

[`IgxExpansionPanelBase`](../interfaces/IgxExpansionPanelBase.md).[`expand`](../interfaces/IgxExpansionPanelBase.md#expand)

***

### open()

> **open**(`evt?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts:310](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts#L310)

#### Parameters

##### evt?

`Event`

#### Returns

`void`

***

### toggle()

> **toggle**(`evt?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts:302](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.component.ts#L302)

Toggles the panel

```html
 <igx-expansion-panel #myPanel>
     ...
 </igx-expansion-panel>
 <button type="button" igxButton (click)="myPanel.toggle($event)">Expand Panel</button>
```

#### Parameters

##### evt?

`Event`

#### Returns

`void`

#### Implementation of

[`IgxExpansionPanelBase`](../interfaces/IgxExpansionPanelBase.md).[`toggle`](../interfaces/IgxExpansionPanelBase.md#toggle)

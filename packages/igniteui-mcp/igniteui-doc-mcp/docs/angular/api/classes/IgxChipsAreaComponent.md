# Class: IgxChipsAreaComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chips-area.component.ts:53](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chips-area.component.ts#L53)

The chip area allows you to perform more complex scenarios with chips that require interaction,
like dragging, selection, navigation, etc.

## Igx Module

IgxChipsModule

## Igx Theme

igx-chip-theme

## Igx Keywords

chip area, chip

## Igx Group

display

## Example

```html
<igx-chips-area>
   <igx-chip *ngFor="let chip of chipList" [id]="chip.id">
       <span>{{chip.text}}</span>
   </igx-chip>
</igx-chips-area>
```

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxChipsAreaComponent**(): `IgxChipsAreaComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chips-area.component.ts:184](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chips-area.component.ts#L184)

#### Returns

`IgxChipsAreaComponent`

## Properties

### ariaLabel

> **ariaLabel**: `string` = `'chip area'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chips-area.component.ts:80](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chips-area.component.ts#L80)

Returns the `aria-label` attribute of the chips area.

#### Example

```typescript
let ariaLabel = this.chipsArea.ariaLabel;
```

***

### cdr

> **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chips-area.component.ts:54](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chips-area.component.ts#L54)

***

### chipsList

> **chipsList**: `QueryList`\<[`IgxChipComponent`](IgxChipComponent.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chips-area.component.ts:174](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chips-area.component.ts#L174)

Holds the `IgxChipComponent` in the `IgxChipsAreaComponent`.

#### Example

```typescript
ngAfterViewInit(){
   let chips = this.chipsArea.chipsList;
}
```

***

### destroy$

> `protected` **destroy$**: `Subject`\<`boolean`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chips-area.component.ts:176](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chips-area.component.ts#L176)

***

### element

> **element**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chips-area.component.ts:55](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chips-area.component.ts#L55)

***

### height

> **height**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chips-area.component.ts:108](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chips-area.component.ts#L108)

Sets the height of the `IgxChipsAreaComponent`.

#### Example

```html
<igx-chips-area #chipsArea [width]="300" [height]="10" (onReorder)="chipsOrderChanged($event)"></igx-chips-area>
```

***

### hostClass

> `protected` **hostClass**: `string` = `'igx-chip-area'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chips-area.component.ts:179](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chips-area.component.ts#L179)

***

### moveEnd

> **moveEnd**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chips-area.component.ts:161](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chips-area.component.ts#L161)

Emits an event after an `IgxChipComponent` in the `IgxChipsAreaComponent` is moved.

#### Example

```html
<igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (moveEnd)="moveEnd($event)"></igx-chips-area>
```

***

### moveStart

> **moveStart**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chips-area.component.ts:150](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chips-area.component.ts#L150)

Emits an event when an `IgxChipComponent` in the `IgxChipsAreaComponent` is moved.

#### Example

```html
<igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (moveStart)="moveStart($event)"></igx-chips-area>
```

***

### reorder

> **reorder**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chips-area.component.ts:126](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chips-area.component.ts#L126)

Emits an event when `IgxChipComponent`s in the `IgxChipsAreaComponent` should be reordered.
Returns an array of `IgxChipComponent`s.

#### Example

```html
<igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (onReorder)="changedOrder($event)"></igx-chips-area>
```

***

### role

> **role**: `string` = `'listbox'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chips-area.component.ts:68](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chips-area.component.ts#L68)

Returns the `role` attribute of the chips area.

#### Example

```typescript
let chipsAreaRole = this.chipsArea.role;
```

***

### selectionChange

> **selectionChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chips-area.component.ts:139](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chips-area.component.ts#L139)

Emits an event when an `IgxChipComponent` in the `IgxChipsAreaComponent` is selected/deselected.
Fired after the chips area is initialized if there are initially selected chips as well.
Returns an array of selected `IgxChipComponent`s and the `IgxChipAreaComponent`.

#### Example

```html
<igx-chips-area #chipsArea [width]="'300'" [height]="'10'" (selectionChange)="selection($event)"></igx-chips-area>
```

***

### width

> **width**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chips-area.component.ts:91](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chips-area.component.ts#L91)

Sets the width of the `IgxChipsAreaComponent`.

#### Example

```html
<igx-chips-area #chipsArea [width]="300" [height]="10" (onReorder)="chipsOrderChanged($event)"></igx-chips-area>
```

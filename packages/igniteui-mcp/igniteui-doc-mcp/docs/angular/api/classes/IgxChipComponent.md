# Class: IgxChipComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:89](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L89)

Chip is compact visual component that displays information in an obround.

## Igx Module

IgxChipsModule

## Igx Theme

igx-chip-theme

## Igx Keywords

chip

## Igx Group

display

## Remarks

The Ignite UI Chip can be templated, deleted, and selected.
Multiple chips can be reordered and visually connected to each other.
Chips reside in a container called chips area which is responsible for managing the interactions between the chips.

## Example

```html
<igx-chip class="chipStyle" [id]="901" [draggable]="true" [removable]="true" (remove)="chipRemoved($event)">
   <igx-avatar class="chip-avatar-resized" igxPrefix></igx-avatar>
</igx-chip>
```

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxChipComponent**(): `IgxChipComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:614](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L614)

#### Returns

`IgxChipComponent`

## Properties

### \_movedWhileRemoving

> `protected` **\_movedWhileRemoving**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:609](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L609)

***

### \_selected

> `protected` **\_selected**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:607](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L607)

***

### \_selectedItemClass

> `protected` **\_selectedItemClass**: `string` = `'igx-chip__item--selected'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:608](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L608)

***

### \_tabIndex

> `protected` **\_tabIndex**: `any` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:606](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L606)

***

### animateOnRelease

> **animateOnRelease**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:187](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L187)

Enables/disables the draggable element animation when the element is released.
By default it's set to true.

#### Example

```html
<igx-chip [id]="'igx-chip-1'" [draggable]="true" [animateOnRelease]="false"></igx-chip>
```

***

### cdr

> **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:90](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L90)

***

### chipClick

> **chipClick**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:404](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L404)

Emits an event when the `IgxChipComponent` is clicked.
Returns the clicked `IgxChipComponent`, whether the event should be canceled.

#### Example

```html
<igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (click)="chipClick($event)">
```

***

### computedStyles

> `protected` **computedStyles**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:610](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L610)

***

### data

> **data**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:163](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L163)

Stores data related to the chip.

#### Example

```html
<igx-chip [data]="{ value: 'Country' }"></igx-chip>
```

***

### defaultClass

> `protected` **defaultClass**: `string` = `'igx-chip'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:496](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L496)

***

### disabled

> **disabled**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:268](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L268)

Disables the `IgxChipComponent`. When disabled it restricts user interactions
like focusing on click or tab, selection on click or Space, dragging.
By default it is set to false.

#### Example

```html
<igx-chip [id]="chip.id" [disabled]="true"></igx-chip>
```

***

### document

> **document**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:93](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L93)

***

### dragDirective

> **dragDirective**: [`IgxDragDirective`](IgxDragDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:537](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L537)

Property that contains a reference to the `IgxDragDirective` the `IgxChipComponent` uses for dragging behavior.

#### Example

```html
<igx-chip [id]="chip.id" [draggable]="true"></igx-chip>
```
```typescript
onMoveStart(event: IBaseChipEventArgs){
    let dragDirective = event.owner.dragDirective;
}
```

***

### dragDrop

> **dragDrop**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:493](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L493)

Emits an event when the `IgxChipComponent` has been dropped in the `IgxChipsAreaComponent`.
Returns the target `IgxChipComponent`, the drag `IgxChipComponent`, as  well as
the original drop event arguments.

#### Example

```html
<igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (dragDrop)="chipLeave($event)">
```

***

### dragEnter

> **dragEnter**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:454](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L454)

Emits an event when the `IgxChipComponent` has entered the `IgxChipsAreaComponent`.
Returns the target `IgxChipComponent`, the drag `IgxChipComponent`, as  well as
the original drop event arguments.

#### Example

```html
<igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (dragEnter)="chipEnter($event)">
```

***

### draggable

> **draggable**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:175](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L175)

Defines if the `IgxChipComponent` can be dragged in order to change it's position.
By default it is set to false.

#### Example

```html
<igx-chip [id]="'igx-chip-1'" [draggable]="true"></igx-chip>
```

***

### dragLeave

> **dragLeave**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:467](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L467)

Emits an event when the `IgxChipComponent` has left the `IgxChipsAreaComponent`.
Returns the target `IgxChipComponent`, the drag `IgxChipComponent`, as  well as
the original drop event arguments.

#### Example

```html
<igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (dragLeave)="chipLeave($event)">
```

***

### dragOver

> **dragOver**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:480](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L480)

Emits an event when the `IgxChipComponent` is over the `IgxChipsAreaComponent`.
Returns the target `IgxChipComponent`, the drag `IgxChipComponent`, as  well as
the original drop event arguments.

#### Example

```html
<igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (dragOver)="chipOver($event)">
```

***

### hideBaseOnDrag

> **hideBaseOnDrag**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:199](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L199)

Enables/disables the hiding of the base element that has been dragged.
By default it's set to true.

#### Example

```html
<igx-chip [id]="'igx-chip-1'" [draggable]="true" [hideBaseOnDrag]="false"></igx-chip>
```

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:120](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L120)

Sets the value of `id` attribute. If not provided it will be automatically generated.

#### Example

```html
<igx-chip [id]="'igx-chip-1'"></igx-chip>
```

***

### keyDown

> **keyDown**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:441](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L441)

Emits an event when the `IgxChipComponent` keyboard navigation is being used.
Returns the focused/selected `IgxChipComponent`, whether the event should be canceled,
if the `alt`, `shift` or `control` key is pressed and the pressed key name.

#### Example

```html
<igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (keyDown)="chipKeyDown($event)">
```

***

### moveEnd

> **moveEnd**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:380](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L380)

Emits an event when the `IgxChipComponent` moving ends.
Returns the moved `IgxChipComponent`.

#### Example

```html
<igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (moveEnd)="moveEnded($event)">
```

***

### moveStart

> **moveStart**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:368](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L368)

Emits an event when the `IgxChipComponent` moving starts.
Returns the moving `IgxChipComponent`.

#### Example

```html
<igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (moveStart)="moveStarted($event)">
```

***

### removable

> **removable**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:211](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L211)

Defines if the `IgxChipComponent` should render remove button and throw remove events.
By default it is set to false.

#### Example

```html
<igx-chip [id]="'igx-chip-1'" [draggable]="true" [removable]="true"></igx-chip>
```

***

### remove

> **remove**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:392](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L392)

Emits an event when the `IgxChipComponent` is removed.
Returns the removed `IgxChipComponent`.

#### Example

```html
<igx-chip #myChip [id]="'igx-chip-1'" [draggable]="true" (remove)="remove($event)">
```

***

### removeIcon

> **removeIcon**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:223](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L223)

Overrides the default icon that the chip applies to the remove button.

#### Example

```html
<igx-chip [id]="chip.id" [removable]="true" [removeIcon]="iconTemplate"></igx-chip>
<ng-template #iconTemplate><igx-icon>delete</igx-icon></ng-template>
```

***

### role

> **role**: `string` = `'option'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:131](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L131)

Returns the `role` attribute of the chip.

#### Example

```typescript
let chipRole = this.chip.role;
```

***

### selectable

> **selectable**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:235](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L235)

Defines if the `IgxChipComponent` can be selected on click or through navigation,
By default it is set to false.

#### Example

```html
<igx-chip [id]="chip.id" [draggable]="true" [removable]="true" [selectable]="true"></igx-chip>
```

***

### selectedChanged

> **selectedChanged**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:428](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L428)

Emits event when the `IgxChipComponent` is selected/deselected and any related animations and transitions also end.

#### Example

```html
<igx-chip #myChip [id]="'igx-chip-1'" [selectable]="true" (selectedChanged)="chipSelectEnd($event)">
```

***

### selectedChanging

> **selectedChanging**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:417](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L417)

Emits event when the `IgxChipComponent` is selected/deselected.
Returns the selected chip reference, whether the event should be canceled, what is the next selection state and
when the event is triggered by interaction `originalEvent` is provided, otherwise `originalEvent` is `null`.

#### Example

```html
<igx-chip #myChip [id]="'igx-chip-1'" [selectable]="true" (selectedChanging)="chipSelect($event)">
```

***

### selectIcon

> **selectIcon**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:247](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L247)

Overrides the default icon that the chip applies when it is selected.

#### Example

```html
<igx-chip [id]="chip.id" [selectable]="true" [selectIcon]="iconTemplate"></igx-chip>
<ng-template #iconTemplate><igx-icon>done_outline</igx-icon></ng-template>
```

***

### variant?

> `optional` **variant?**: [`IgxChipTypeVariant`](../type-aliases/IgxChipTypeVariant.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:109](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L109)

Sets/gets the variant of the chip.

#### Remarks

Allowed values are `primary`, `info`, `success`, `warning`, `danger`.
Providing no/nullish value leaves the chip in its default state.

#### Example

```html
<igx-chip variant="success"></igx-chip>
```

## Accessors

### chipSize

#### Get Signature

> **get** `protected` **chipSize**(): `Size`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:603](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L603)

##### Returns

`Size`

***

### color

#### Get Signature

> **get** **color**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:338](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L338)

Returns the background color of the `IgxChipComponent`.

##### Example

```typescript
@ViewChild('myChip')
public chip: IgxChipComponent;
ngAfterViewInit(){
    let chipColor = this.chip.color;
}
```

##### Returns

`any`

#### Set Signature

> **set** **color**(`newColor`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:322](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L322)

Sets the `IgxChipComponent` background color.
The `color` property supports string, rgb, hex.

##### Example

```html
<igx-chip #myChip [id]="'igx-chip-1'" [color]="'#ff0000'"></igx-chip>
```

##### Parameters

###### newColor

`any`

##### Returns

`void`

***

### isDanger

#### Get Signature

> **get** `protected` **isDanger**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:519](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L519)

##### Returns

`boolean`

***

### isInfo

#### Get Signature

> **get** `protected` **isInfo**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:504](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L504)

##### Returns

`boolean`

***

### isPrimary

#### Get Signature

> **get** `protected` **isPrimary**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:499](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L499)

##### Returns

`boolean`

***

### isSuccess

#### Get Signature

> **get** `protected` **isSuccess**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:509](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L509)

##### Returns

`boolean`

***

### isWarning

#### Get Signature

> **get** `protected` **isWarning**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:514](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L514)

##### Returns

`boolean`

***

### resourceStrings

#### Get Signature

> **get** **resourceStrings**(): `PrefixedResourceStrings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:354](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L354)

An accessor that returns the resource strings.

##### Returns

`PrefixedResourceStrings`

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:347](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L347)

An accessor that sets the resource strings.
By default it uses EN resources.

##### Parameters

###### value

`PrefixedResourceStrings`

##### Returns

`void`

***

### selected

#### Get Signature

> **get** **selected**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:301](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L301)

Returns if the `IgxChipComponent` is selected.

##### Example

```typescript
@ViewChild('myChip')
public chip: IgxChipComponent;
selectedChip(){
    let selectedChip = this.chip.selected;
}
```

##### Returns

`boolean`

#### Set Signature

> **set** **selected**(`newValue`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:285](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L285)

Sets the `IgxChipComponent` selected state.

##### Example

```html
<igx-chip #myChip [id]="'igx-chip-1'" [selectable]="true" [selected]="true">
```

Two-way data binding:
```html
<igx-chip #myChip [id]="'igx-chip-1'" [selectable]="true" [(selected)]="model.isSelected">
```

##### Parameters

###### newValue

`boolean`

##### Returns

`void`

***

### tabIndex

#### Get Signature

> **get** **tabIndex**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:147](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L147)

##### Returns

`number`

#### Set Signature

> **set** **tabIndex**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:143](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L143)

Sets the value of `tabindex` attribute. If not provided it will use the element's tabindex if set.

##### Example

```html
<igx-chip [id]="'igx-chip-1'" [tabIndex]="1"></igx-chip>
```

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### changeSelection()

> `protected` **changeSelection**(`newValue`, `srcEvent?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:882](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L882)

#### Parameters

##### newValue

`boolean`

##### srcEvent?

`any` = `null`

#### Returns

`void`

***

### ngOnDestroy()

> **ngOnDestroy**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:922](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L922)

#### Returns

`void`

***

### ngOnInit()

> **ngOnInit**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:918](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L918)

#### Returns

`void`

***

### onRemoveMouseDown()

> **onRemoveMouseDown**(`event`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:700](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L700)

#### Parameters

##### event

`PointerEvent` \| `MouseEvent`

#### Returns

`void`

***

### onSelectTransitionDone()

> **onSelectTransitionDone**(`event`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/chips/src/chips/chip.component.ts:642](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/chips/src/chips/chip.component.ts#L642)

#### Parameters

##### event

`any`

#### Returns

`void`

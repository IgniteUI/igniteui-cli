# Class: IgxCardActionsComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/card/src/card/card.component.ts:274](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/card/src/card/card.component.ts#L274)

IgxCardActions is container for the card actions.

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxCardActionsComponent**(): `IgxCardActionsComponent`

#### Returns

`IgxCardActionsComponent`

## Properties

### card

> **card**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/card/src/card/card.component.ts:275](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/card/src/card/card.component.ts#L275)

***

### layout

> **layout**: `string` = `IgxCardActionsLayout.START`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/card/src/card/card.component.ts:290](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/card/src/card/card.component.ts#L290)

Sets the layout style of the actions.
You can justify the elements slotted in the igx-card-action container
so that they are positioned equally from one another taking up all the
space available along the card actions axis.

#### Example

```html
<igx-card-actions layout="justify"></igx-card-actions>
```

***

### vertical

> **vertical**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/card/src/card/card.component.ts:298](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/card/src/card/card.component.ts#L298)

Sets the vertical attribute of the actions.
When set to `true` the actions will be layed out vertically.

## Accessors

### isJustifyLayout

#### Get Signature

> **get** **isJustifyLayout**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/card/src/card/card.component.ts:305](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/card/src/card/card.component.ts#L305)

A getter that returns `true` when the layout has been
set to `justify`.

##### Returns

`boolean`

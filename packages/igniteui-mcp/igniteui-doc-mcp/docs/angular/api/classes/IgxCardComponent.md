# Class: IgxCardComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/card/src/card/card.component.ts:190](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/card/src/card/card.component.ts#L190)

Card provides a way to display organized content in appealing way.

## Igx Module

IgxCardModule

## Igx Theme

igx-card-theme, igx-icon-theme, igx-button-theme

## Igx Keywords

card, button, avatar, icon

## Igx Group

Layouts

## Remarks

The Ignite UI Card serves as a container that allows custom content to be organized in an appealing way. There are
five sections in a card that you can use to organize your content. These are header, media, content, actions, and footer.

## Example

```html
<igx-card>
  <igx-card-header>
    <h3 igxCardHeaderTitle>{{title}}</h3>
    <h5 igxCardHeaderSubtitle>{{subtitle}}</h5>
  </igx-card-header>
  <igx-card-actions>
      <button type="button" igxButton igxRipple>Share</button>
      <button type="button" igxButton igxRipple>Play Album</button>
  </igx-card-actions>
</igx-card>
```

## Constructors

### Constructor

> **new IgxCardComponent**(): `IgxCardComponent`

#### Returns

`IgxCardComponent`

## Properties

### elevated

> **elevated**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/card/src/card/card.component.ts:243](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/card/src/card/card.component.ts#L243)

Sets/gets whether the card is elevated.
Default value is `false`.

#### Example

```html
<igx-card elevated></igx-card>
```
```typescript
let cardElevation = this.card.elevated;
```

***

### horizontal

> **horizontal**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/card/src/card/card.component.ts:257](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/card/src/card/card.component.ts#L257)

Sets the value of the `horizontal` attribute of the card.
Setting this to `true` will make the different card sections align horizontally,
essentially flipping the card to the side.

#### Example

```html
<igx-card [horizontal]="true"></igx-card>
```

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/card/src/card/card.component.ts:205](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/card/src/card/card.component.ts#L205)

Sets/gets the `id` of the card.
If not set, `id` will have value `"igx-card-0"`;

#### Example

```html
<igx-card id="my-first-card"></igx-card>
```
```typescript
let cardId =  this.card.id;
```

***

### role

> **role**: `string` = `'group'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/card/src/card/card.component.ts:227](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/card/src/card/card.component.ts#L227)

Sets the value of the `role` attribute of the card.
By default the value is set to `group`.

#### Example

```html
<igx-card role="group"></igx-card>
```

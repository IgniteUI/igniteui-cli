# Class: IgcButtonGroupComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/button-group/button-group.ts:38](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button-group/button-group.ts#L38)

The `igc-button-group` groups a series of `igc-toggle-button`s together, exposing features such as layout and selection.

## Element

igc-button-group

## Slot

- Renders `igc-toggle-button` component.

## Fires

igcSelect - Emitted when a button is selected through user interaction.

## Fires

igcDeselect - Emitted when a button is deselected through user interaction.

## Csspart

group - The button group container.

## Extends

- `EventEmitterInterface`\<`IgcButtonGroupComponentEventMap`, `this`\> & `LitElement`\<`this`\>

## Properties

### alignment

> **alignment**: `ContentOrientation` = `'horizontal'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button-group/button-group.ts:94](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button-group/button-group.ts#L94)

Sets the orientation of the buttons in the group.

#### Attr

***

### disabled

> **disabled**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button-group/button-group.ts:87](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button-group/button-group.ts#L87)

Disables all buttons inside the group.

#### Attr

***

### selection

> **selection**: `ButtonGroupSelection` = `'single'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button-group/button-group.ts:101](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button-group/button-group.ts#L101)

Controls the mode of selection for the button group.

#### Attr

***

### tagName

> `readonly` `static` **tagName**: `"igc-button-group"` = `'igc-button-group'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/button-group/button-group.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button-group/button-group.ts#L42)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Accessors

### selectedItems

#### Get Signature

> **get** **selectedItems**(): `string`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/button-group/button-group.ts:108](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/button-group/button-group.ts#L108)

Gets/Sets the currently selected buttons (their values).

##### Attr

##### Returns

`string`[]

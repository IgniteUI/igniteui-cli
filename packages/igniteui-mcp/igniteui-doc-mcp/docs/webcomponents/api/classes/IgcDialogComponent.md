# Class: IgcDialogComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/dialog/dialog.ts:45](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dialog/dialog.ts#L45)

Represents a Dialog component.

## Element

igc-dialog

## Fires

igcClosing - Emitter just before the dialog is closed. Cancelable.

## Fires

igcClosed - Emitted after closing the dialog.

## Slot

- Renders content inside the default slot of the dialog.

## Slot

title - Renders content in the title slot of the dialog header.

## Slot

message - Renders the message content of the dialog.

## Slot

footer - Renders content in the dialog footer.

## Csspart

base - The base wrapper of the dialog.

## Csspart

title - The title container of the dialog.

## Csspart

footer - The footer container of the dialog.

## Csspart

overlay - The backdrop overlay of the dialog.

## Extends

- `EventEmitterInterface`\<`IgcDialogComponentEventMap`, `this`\> & `LitElement`\<`this`\>

## Properties

### closeOnOutsideClick

> **closeOnOutsideClick**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dialog/dialog.ts:94](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dialog/dialog.ts#L94)

Whether the dialog should be closed when clicking outside of it.

#### Attr

close-on-outside-click

***

### hideDefaultAction

> **hideDefaultAction**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dialog/dialog.ts:104](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dialog/dialog.ts#L104)

Whether to hide the default action button for the dialog.

When there is projected content in the `footer` slot this property
has no effect.

#### Attr

hide-default-action

***

### keepOpenOnEscape

> **keepOpenOnEscape**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dialog/dialog.ts:87](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dialog/dialog.ts#L87)

Whether the dialog should be kept open when pressing the 'Escape' button.

#### Attr

keep-open-on-escape

***

### open

> **open**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dialog/dialog.ts:111](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dialog/dialog.ts#L111)

Whether the dialog is opened.

#### Attr

***

### returnValue

> **returnValue**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dialog/dialog.ts:122](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dialog/dialog.ts#L122)

Sets the return value for the dialog.

***

### title

> **title**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dialog/dialog.ts:118](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dialog/dialog.ts#L118)

Sets the title of the dialog.

#### Attr

#### Overrides

`EventEmitterMixin< IgcDialogComponentEventMap, Constructor<LitElement> >(LitElement).title`

***

### tagName

> `readonly` `static` **tagName**: `"igc-dialog"` = `'igc-dialog'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/dialog/dialog.ts:49](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dialog/dialog.ts#L49)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Methods

### hide()

> **hide**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/dialog/dialog.ts:229](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dialog/dialog.ts#L229)

Closes the dialog.

#### Returns

`Promise`\<`boolean`\>

***

### show()

> **show**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/dialog/dialog.ts:218](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dialog/dialog.ts#L218)

Opens the dialog.

#### Returns

`Promise`\<`boolean`\>

***

### toggle()

> **toggle**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/dialog/dialog.ts:234](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/dialog/dialog.ts#L234)

Toggles the open state of the dialog.

#### Returns

`Promise`\<`boolean`\>

# Class: IgcSnackbarComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/snackbar/snackbar.ts:35](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/snackbar/snackbar.ts#L35)

A snackbar component is used to provide feedback about an operation
by showing a brief message at the bottom of the screen.

## Element

igc-snackbar

## Slot

- Default slot to render the snackbar content.

## Slot

action - Renders the action part of the snackbar. Usually an interactive element (button)

## Fires

igcAction - Emitted when the snackbar action button is clicked.

## Csspart

base - The base wrapper of the snackbar component.

## Csspart

message - The snackbar message.

## Csspart

action - The default snackbar action button.

## Csspart

action-container - The area holding the actions.

## Extends

- `EventEmitterInterface`\<`IgcSnackbarComponentEventMap`, `this`\> & `IgcBaseAlertLikeComponent`\<`this`\>

## Properties

### actionText

> **actionText**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/snackbar/snackbar.ts:58](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/snackbar/snackbar.ts#L58)

The snackbar action button.

#### Attr

action-text

***

### displayTime

> **displayTime**: `number` = `4000`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/alert.ts:28](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/alert.ts#L28)

Determines the duration in ms in which the component will be visible.

#### Attr

display-time

#### Inherited from

[`IgcToastComponent`](IgcToastComponent.md).[`displayTime`](IgcToastComponent.md#displaytime)

***

### keepOpen

> **keepOpen**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/alert.ts:35](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/alert.ts#L35)

Determines whether the component should close after the `displayTime` is over.

#### Attr

keep-open

#### Inherited from

[`IgcToastComponent`](IgcToastComponent.md).[`keepOpen`](IgcToastComponent.md#keepopen)

***

### open

> **open**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/alert.ts:21](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/alert.ts#L21)

Whether the component is in shown state.

#### Attr

#### Inherited from

[`IgcToastComponent`](IgcToastComponent.md).[`open`](IgcToastComponent.md#open)

***

### position

> **position**: `AbsolutePosition` = `'bottom'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/alert.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/alert.ts#L42)

Sets the position of the component in the viewport.

#### Attr

#### Inherited from

`EventEmitterMixin< IgcSnackbarComponentEventMap, AbstractConstructor<IgcBaseAlertLikeComponent> >(IgcBaseAlertLikeComponent).position`

***

### tagName

> `readonly` `static` **tagName**: `"igc-snackbar"` = `'igc-snackbar'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/snackbar/snackbar.ts:39](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/snackbar/snackbar.ts#L39)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Methods

### hide()

> **hide**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/alert.ts:94](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/alert.ts#L94)

Closes the component.

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`EventEmitterMixin< IgcSnackbarComponentEventMap, AbstractConstructor<IgcBaseAlertLikeComponent> >(IgcBaseAlertLikeComponent).hide`

***

### show()

> **show**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/alert.ts:89](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/alert.ts#L89)

Opens the component.

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`EventEmitterMixin< IgcSnackbarComponentEventMap, AbstractConstructor<IgcBaseAlertLikeComponent> >(IgcBaseAlertLikeComponent).show`

***

### toggle()

> **toggle**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/mixins/alert.ts:99](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/mixins/alert.ts#L99)

Toggles the open state of the component.

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`EventEmitterMixin< IgcSnackbarComponentEventMap, AbstractConstructor<IgcBaseAlertLikeComponent> >(IgcBaseAlertLikeComponent).toggle`

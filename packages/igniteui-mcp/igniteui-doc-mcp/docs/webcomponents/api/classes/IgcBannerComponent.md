# Class: IgcBannerComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/banner/banner.ts:41](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/banner/banner.ts#L41)

The `igc-banner` component displays important and concise message(s) for a user to address, that is specific to a page or feature.

## Element

igc-banner

## Slot

- Renders the text content of the banner message.

## Slot

prefix - Renders additional content at the start of the message block.

## Slot

actions - Renders any action elements.

## Fires

igcClosing - Emitted before closing the banner - when a user interacts (click) with the default action of the banner.

## Fires

igcClosed - Emitted after the banner is closed - when a user interacts (click) with the default action of the banner.

## Csspart

base - The base wrapper of the banner component.

## Csspart

spacer - The inner wrapper that sets the space around the banner.

## Csspart

message - The part that holds the text and the illustration.

## Csspart

illustration - The part that holds the banner icon/illustration.

## Csspart

content - The part that holds the banner text content.

## Csspart

actions - The part that holds the banner action buttons.

## Extends

- `EventEmitterInterface`\<`IgcBannerComponentEventMap`, `this`\> & `LitElement`\<`this`\>

## Properties

### open

> **open**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/banner/banner.ts:61](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/banner/banner.ts#L61)

Determines whether the banner is being shown/hidden.

#### Attr

***

### tagName

> `readonly` `static` **tagName**: `"igc-banner"` = `'igc-banner'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/banner/banner.ts:45](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/banner/banner.ts#L45)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Methods

### hide()

> **hide**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/banner/banner.ts:94](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/banner/banner.ts#L94)

Hides the banner if not already hidden. Returns `true` when the animation has completed.

#### Returns

`Promise`\<`boolean`\>

***

### show()

> **show**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/banner/banner.ts:84](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/banner/banner.ts#L84)

Shows the banner if not already shown. Returns `true` when the animation has completed.

#### Returns

`Promise`\<`boolean`\>

***

### toggle()

> **toggle**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/banner/banner.ts:105](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/banner/banner.ts#L105)

Toggles between shown/hidden state. Returns `true` when the animation has completed.

#### Returns

`Promise`\<`boolean`\>

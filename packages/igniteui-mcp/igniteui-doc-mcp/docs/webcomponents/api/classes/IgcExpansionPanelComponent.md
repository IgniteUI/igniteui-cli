# Class: IgcExpansionPanelComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/expansion-panel/expansion-panel.ts:56](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/expansion-panel/expansion-panel.ts#L56)

The Expansion Panel Component provides a way to display information in a toggleable way -
compact summary view containing title and description and expanded detail view containing
additional content to the summary header.

## Element

igc-expansion-panel

## Slot

- renders the default content of the panel

## Slot

title - renders the title of the panel's header

## Slot

subtitle - renders the subtitle of the panel's header

## Slot

indicator - renders the expand/collapsed indicator

## Slot

indicator-expanded - renders the expanded state of the indicator

## Fires

igcOpening - Emitted before opening the expansion panel.

## Fires

igcOpened - Emitted after the expansion panel is opened.

## Fires

igcClosing - Emitted before closing the expansion panel.

## Fires

igcClosed - Emitted after the expansion panel is closed.

## Csspart

header - The container of the expansion indicator, title and subtitle.

## Csspart

title -  The title container.

## Csspart

subtitle - The subtitle container.

## Csspart

indicator - The indicator container.

## Csspart

content - The expansion panel's content wrapper.

## Extends

- `EventEmitterInterface`\<`IgcExpansionPanelComponentEventMap`, `this`\> & `LitElement`\<`this`\>

## Properties

### disabled

> **disabled**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/expansion-panel/expansion-panel.ts:89](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/expansion-panel/expansion-panel.ts#L89)

Get/Set whether the expansion panel is disabled. Disabled panels are ignored for user interactions.

#### Attr

***

### indicatorPosition

> **indicatorPosition**: `ExpansionPanelIndicatorPosition` = `'start'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/expansion-panel/expansion-panel.ts:96](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/expansion-panel/expansion-panel.ts#L96)

The indicator position of the expansion panel.

#### Attr

indicator-position

***

### open

> **open**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/expansion-panel/expansion-panel.ts:82](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/expansion-panel/expansion-panel.ts#L82)

Indicates whether the contents of the control should be visible.

#### Attr

***

### tagName

> `readonly` `static` **tagName**: `"igc-expansion-panel"` = `'igc-expansion-panel'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/expansion-panel/expansion-panel.ts:60](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/expansion-panel/expansion-panel.ts#L60)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Methods

### hide()

> **hide**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/expansion-panel/expansion-panel.ts:168](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/expansion-panel/expansion-panel.ts#L168)

Hides the panel content.

#### Returns

`Promise`\<`boolean`\>

***

### show()

> **show**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/expansion-panel/expansion-panel.ts:176](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/expansion-panel/expansion-panel.ts#L176)

Shows the panel content.

#### Returns

`Promise`\<`boolean`\>

***

### toggle()

> **toggle**(): `Promise`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/expansion-panel/expansion-panel.ts:163](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/expansion-panel/expansion-panel.ts#L163)

Toggles the panel open/close state.

#### Returns

`Promise`\<`boolean`\>

# Class: IgcTabsComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/tabs/tabs.ts:70](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tabs/tabs.ts#L70)

Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy.

The `<igc-tabs>` component allows the user to navigate between multiple `<igc-tab>` elements.
It supports keyboard navigation and provides API methods to control the selected tab.

## Element

igc-tabs

## Fires

igcChange - Emitted when the selected tab changes.

## Slot

- Renders the `IgcTabComponents` inside default slot.

## Csspart

start-scroll-button - The start scroll button displayed when the tabs overflow.

## Csspart

end-scroll-button - The end scroll button displayed when the tabs overflow.

## Csspart

selected-indicator - The indicator that shows which tab is selected.

## Extends

- `EventEmitterInterface`\<`IgcTabsComponentEventMap`, `this`\> & `LitElement`\<`this`\>

## Properties

### activation

> **activation**: `TabsActivation` = `'auto'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tabs/tabs.ts:135](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tabs/tabs.ts#L135)

Determines the tab activation. When set to auto,
the tab is instantly selected while navigating with the Left/Right Arrows, Home or End keys
and the corresponding panel is displayed.
When set to manual, the tab is only focused. The selection happens after pressing Space or Enter.

#### Attr

***

### alignment

> **alignment**: `TabsAlignment` = `'start'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tabs/tabs.ts:125](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tabs/tabs.ts#L125)

Sets the alignment for the tab headers

#### Attr

***

### tagName

> `readonly` `static` **tagName**: `"igc-tabs"` = `'igc-tabs'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tabs/tabs.ts:74](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tabs/tabs.ts#L74)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Accessors

### selected

#### Get Signature

> **get** **selected**(): `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tabs/tabs.ts:144](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tabs/tabs.ts#L144)

Returns the currently selected tab label or IDREF if no label property is set.

##### Returns

`string`

***

### tabs

#### Get Signature

> **get** **tabs**(): [`IgcTabComponent`](IgcTabComponent.md)[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/tabs/tabs.ts:139](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tabs/tabs.ts#L139)

Returns the direct `igc-tab` elements that are children of this element.

##### Returns

[`IgcTabComponent`](IgcTabComponent.md)[]

## Methods

### select()

#### Call Signature

> **select**(`id`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tabs/tabs.ts:392](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tabs/tabs.ts#L392)

Selects the specified tab and displays the corresponding panel.

##### Parameters

###### id

`string`

##### Returns

`void`

#### Call Signature

> **select**(`ref`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/tabs/tabs.ts:394](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/tabs/tabs.ts#L394)

Selects the specified tab and displays the corresponding panel.

##### Parameters

###### ref

[`IgcTabComponent`](IgcTabComponent.md)

##### Returns

`void`

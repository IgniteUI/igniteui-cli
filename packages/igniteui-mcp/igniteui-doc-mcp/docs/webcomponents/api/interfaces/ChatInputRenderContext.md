# Interface: ChatInputRenderContext

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:268](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L268)

The context object for renderers that deal with the chat input area.
It extends the base context with input-specific properties.

## Extends

- [`ChatRenderContext`](ChatRenderContext.md)

## Properties

### attachments

> **attachments**: [`IgcChatMessageAttachment`](IgcChatMessageAttachment.md)[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:272](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L272)

The list of attachments currently in the input area.

***

### instance

> **instance**: [`IgcChatComponent`](../classes/IgcChatComponent.md)

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:261](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L261)

The instance of the IgcChatComponent.

#### Inherited from

[`ChatRenderContext`](ChatRenderContext.md).[`instance`](ChatRenderContext.md#instance)

***

### value

> **value**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:276](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L276)

The current value of the input field.

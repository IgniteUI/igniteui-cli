# Interface: ChatMessageRenderContext

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:283](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L283)

The context object for renderers that deal with a specific chat message.
It extends the base context with the message data.

## Extends

- [`ChatRenderContext`](ChatRenderContext.md)

## Extended by

- [`ChatAttachmentRenderContext`](ChatAttachmentRenderContext.md)

## Properties

### instance

> **instance**: [`IgcChatComponent`](../classes/IgcChatComponent.md)

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:261](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L261)

The instance of the IgcChatComponent.

#### Inherited from

[`ChatRenderContext`](ChatRenderContext.md).[`instance`](ChatRenderContext.md#instance)

***

### message

> **message**: [`IgcChatMessage`](IgcChatMessage.md)

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:287](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L287)

The specific chat message being rendered.

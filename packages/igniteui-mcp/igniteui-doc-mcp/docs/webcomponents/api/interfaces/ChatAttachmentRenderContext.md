# Interface: ChatAttachmentRenderContext

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:294](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L294)

The context object for renderers that deal with a specific attachment within a message.
It extends the message context with the attachment data.

## Extends

- [`ChatMessageRenderContext`](ChatMessageRenderContext.md)

## Properties

### attachment

> **attachment**: [`IgcChatMessageAttachment`](IgcChatMessageAttachment.md)

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:298](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L298)

The specific attachment being rendered.

***

### instance

> **instance**: [`IgcChatComponent`](../classes/IgcChatComponent.md)

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:261](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L261)

The instance of the IgcChatComponent.

#### Inherited from

[`ChatMessageRenderContext`](ChatMessageRenderContext.md).[`instance`](ChatMessageRenderContext.md#instance)

***

### message

> **message**: [`IgcChatMessage`](IgcChatMessage.md)

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:287](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L287)

The specific chat message being rendered.

#### Inherited from

[`ChatMessageRenderContext`](ChatMessageRenderContext.md).[`message`](ChatMessageRenderContext.md#message)

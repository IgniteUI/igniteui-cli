# Interface: ChatRenderers

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:176](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L176)

A collection of optional rendering functions that allow for custom UI rendering.
Each property is a function that takes a context object and returns a template result.

## Properties

### attachment?

> `optional` **attachment?**: [`ChatTemplateRenderer`](../type-aliases/ChatTemplateRenderer.md)\<[`ChatAttachmentRenderContext`](ChatAttachmentRenderContext.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:180](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L180)

Custom renderer for a single chat message attachment.

***

### attachmentContent?

> `optional` **attachmentContent?**: [`ChatTemplateRenderer`](../type-aliases/ChatTemplateRenderer.md)\<[`ChatAttachmentRenderContext`](ChatAttachmentRenderContext.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:184](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L184)

Custom renderer for the content of an attachment.

***

### attachmentHeader?

> `optional` **attachmentHeader?**: [`ChatTemplateRenderer`](../type-aliases/ChatTemplateRenderer.md)\<[`ChatAttachmentRenderContext`](ChatAttachmentRenderContext.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:188](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L188)

Custom renderer for the header of an attachment.

***

### fileUploadButton?

> `optional` **fileUploadButton?**: [`ChatTemplateRenderer`](../type-aliases/ChatTemplateRenderer.md)\<[`ChatRenderContext`](ChatRenderContext.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:192](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L192)

Custom renderer for the file upload button in the input area.

***

### input?

> `optional` **input?**: [`ChatTemplateRenderer`](../type-aliases/ChatTemplateRenderer.md)\<[`ChatInputRenderContext`](ChatInputRenderContext.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:196](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L196)

Custom renderer for the main chat input field.

***

### inputActions?

> `optional` **inputActions?**: [`ChatTemplateRenderer`](../type-aliases/ChatTemplateRenderer.md)\<[`ChatRenderContext`](ChatRenderContext.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:200](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L200)

Custom renderer for the actions container within the input area.

***

### inputActionsEnd?

> `optional` **inputActionsEnd?**: [`ChatTemplateRenderer`](../type-aliases/ChatTemplateRenderer.md)\<[`ChatRenderContext`](ChatRenderContext.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:204](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L204)

Custom renderer for the actions at the end of the input area.

***

### inputActionsStart?

> `optional` **inputActionsStart?**: [`ChatTemplateRenderer`](../type-aliases/ChatTemplateRenderer.md)\<[`ChatRenderContext`](ChatRenderContext.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:208](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L208)

Custom renderer for the actions at the start of the input area.

***

### inputAttachments?

> `optional` **inputAttachments?**: [`ChatTemplateRenderer`](../type-aliases/ChatTemplateRenderer.md)\<[`ChatInputRenderContext`](ChatInputRenderContext.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:212](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L212)

Custom renderer for the attachment previews within the input field.

***

### message?

> `optional` **message?**: [`ChatTemplateRenderer`](../type-aliases/ChatTemplateRenderer.md)\<[`ChatMessageRenderContext`](ChatMessageRenderContext.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:216](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L216)

Custom renderer for an entire chat message bubble.

***

### messageActions?

> `optional` **messageActions?**: [`ChatTemplateRenderer`](../type-aliases/ChatTemplateRenderer.md)\<[`ChatMessageRenderContext`](ChatMessageRenderContext.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:220](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L220)

Custom renderer for message-specific actions (e.g., reply or delete buttons).

***

### messageAttachments?

> `optional` **messageAttachments?**: [`ChatTemplateRenderer`](../type-aliases/ChatTemplateRenderer.md)\<[`ChatMessageRenderContext`](ChatMessageRenderContext.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:224](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L224)

Custom renderer for the attachments associated with a message.

***

### messageContent?

> `optional` **messageContent?**: [`ChatTemplateRenderer`](../type-aliases/ChatTemplateRenderer.md)\<[`ChatMessageRenderContext`](ChatMessageRenderContext.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:228](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L228)

Custom renderer for the main text and content of a message.

***

### messageHeader?

> `optional` **messageHeader?**: [`ChatTemplateRenderer`](../type-aliases/ChatTemplateRenderer.md)\<[`ChatMessageRenderContext`](ChatMessageRenderContext.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:232](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L232)

Custom renderer for the header of a message, including sender and timestamp.

***

### sendButton?

> `optional` **sendButton?**: [`ChatTemplateRenderer`](../type-aliases/ChatTemplateRenderer.md)\<[`ChatRenderContext`](ChatRenderContext.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:236](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L236)

Custom renderer for the message send button.

***

### suggestionPrefix?

> `optional` **suggestionPrefix?**: [`ChatTemplateRenderer`](../type-aliases/ChatTemplateRenderer.md)\<[`ChatRenderContext`](ChatRenderContext.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:240](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L240)

Custom renderer for the prefix text shown before suggestions.

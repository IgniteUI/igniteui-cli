# Interface: IgcChatComponentEventMap

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:41](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L41)

Defines the custom events dispatched by the `<igc-chat>` component.

## Properties

### igcAttachmentAdded

> **igcAttachmentAdded**: `CustomEvent`\<[`IgcChatMessageAttachment`](IgcChatMessageAttachment.md)[]\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:61](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L61)

Dispatched when attachment(s) are added either through drag & drop or through
the default file input.

***

### igcAttachmentClick

> **igcAttachmentClick**: `CustomEvent`\<[`IgcChatMessageAttachment`](IgcChatMessageAttachment.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:55](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L55)

Dispatched when a chat message attachment is clicked.

***

### igcAttachmentDrag

> **igcAttachmentDrag**: `CustomEvent`\<`void`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:71](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L71)

Dispatched during an attachment drag operation.

***

### igcAttachmentDrop

> **igcAttachmentDrop**: `CustomEvent`\<`void`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:76](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L76)

Dispatched when an attachment is dropped (e.g., in a drag-and-drop operation).

***

### igcAttachmentRemoved

> **igcAttachmentRemoved**: `CustomEvent`\<[`IgcChatMessageAttachment`](IgcChatMessageAttachment.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:66](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L66)

Dispatched when an attachment is removed by the user.

***

### igcInputBlur

> **igcInputBlur**: `CustomEvent`\<`void`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:91](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L91)

Dispatched when the chat input field loses focus.

***

### igcInputChange

> **igcInputChange**: `CustomEvent`\<`string`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:96](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L96)

Dispatched when the content of the chat input changes.

***

### igcInputFocus

> **igcInputFocus**: `CustomEvent`\<`void`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:86](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L86)

Dispatched when the chat input field gains focus.

***

### igcMessageCreated

> **igcMessageCreated**: `CustomEvent`\<[`IgcChatMessage`](IgcChatMessage.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:45](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L45)

Dispatched when a new chat message is created (sent).

***

### igcMessageReact

> **igcMessageReact**: `CustomEvent`\<[`IgcChatMessageReaction`](IgcChatMessageReaction.md)\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:50](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L50)

Dispatched when a message is reacted to.

***

### igcTypingChange

> **igcTypingChange**: `CustomEvent`\<`boolean`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:81](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L81)

Dispatched when the typing status changes (e.g., user starts or stops typing).

# Interface: IgcChatMessage

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:6](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L6)

Represents a single chat message in the conversation.

## Properties

### attachments?

> `optional` **attachments?**: [`IgcChatMessageAttachment`](IgcChatMessageAttachment.md)[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:31](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L31)

Optional list of attachments associated with the message,
such as images, files, or links.

***

### id

> **id**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:10](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L10)

A unique identifier for the message.

***

### reactions?

> `optional` **reactions?**: `string`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:36](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L36)

Optional list of reactions associated with the message.

***

### sender

> **sender**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:20](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L20)

The identifier or name of the sender of the message.

***

### text

> **text**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:15](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L15)

The textual content of the message.

***

### timestamp?

> `optional` **timestamp?**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:25](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L25)

The timestamp indicating when the message was sent.

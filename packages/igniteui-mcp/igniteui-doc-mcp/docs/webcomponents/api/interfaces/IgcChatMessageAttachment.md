# Interface: IgcChatMessageAttachment

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:42](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L42)

Represents an attachment associated with a chat message.

## Properties

### file?

> `optional` **file?**: `File`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:62](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L62)

The actual File object, if the attachment was provided locally (e.g. via upload).

***

### id

> **id**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:46](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L46)

A unique identifier for the attachment.

***

### name

> **name**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:51](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L51)

The display name of the attachment (e.g. file name).

***

### thumbnail?

> `optional` **thumbnail?**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:72](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L72)

Optional URL to a thumbnail preview of the attachment (e.g. for images or videos).

***

### type?

> `optional` **type?**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:67](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L67)

The MIME type or a custom type identifier for the attachment (e.g. "image/png", "pdf", "audio").

***

### url?

> `optional` **url?**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:57](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L57)

The URL from which the attachment can be downloaded or viewed.
Typically used for attachments stored on a server or CDN.

# Class: IgcChatComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:185](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L185)

A chat UI component for displaying messages, attachments, and input interaction.

## Element

igc-chat

## Fires

igcMessageCreated - Dispatched when a new chat message is created (sent).

## Fires

igcMessageReact - Dispatched when a message is reacted to.

## Fires

igcAttachmentClick - Dispatched when a chat message attachment is clicked.

## Fires

igcAttachmentAdded - Dispatched when attachment(s) are added either through drag & drop or through the default file input.

## Fires

igcAttachmentRemoved - Dispatched when an attachment is removed by the user.

## Fires

igcAttachmentDrag - Dispatched during an attachment drag operation.

## Fires

igcAttachmentDrop - Dispatched when an attachment is dropped (e.g., in a drag-and-drop operation).

## Fires

igcTypingChange - Dispatched when the typing status changes (e.g., user starts or stops typing).

## Fires

igcInputFocus - Dispatched when the chat input field gains focus.

## Fires

igcInputBlur - Dispatched when the chat input field loses focus.

## Fires

igcInputChange - Dispatched when the content of the chat input changes.

## Slot

prefix - Slot for injecting content (e.g., avatar or icon) before the chat title.

## Slot

title - Slot for overriding the chat title content.

## Slot

actions - Slot for injecting header actions (e.g., buttons, menus).

## Slot

suggestions-header - Slot for rendering a custom header for the suggestions list.

## Slot

suggestions - Slot for rendering a custom list of quick reply suggestions.

## Slot

suggestions-actions - Slot for rendering additional actions.

## Slot

suggestion - Slot for rendering a single suggestion item.

## Slot

empty-state - Slot shown when there are no messages.

## Slot

typing-indicator - Slot for the "is typing" indicator.

## Csspart

chat-container - Styles the main chat container.

## Csspart

header - Styles the chat header container.

## Csspart

prefix - Styles the element before the chat title (e.g., avatar).

## Csspart

title - Styles the chat header title.

## Csspart

message-area-container - Styles the container holding the messages and (optional) suggestions.

## Csspart

message-list - Styles the message list container.

## Csspart

message-item - Styles each message wrapper.

## Csspart

typing-indicator - Styles the typing indicator container.

## Csspart

typing-dot - Styles individual typing indicator dots.

## Csspart

suggestions-container - Styles the container holding all suggestions.

## Csspart

suggestions-header - Styles the suggestions header.

## Csspart

suggestion - Styles each suggestion item.

## Csspart

suggestion-prefix - Styles the icon or prefix in a suggestion.

## Csspart

suggestion-title - Styles the text/title of a suggestion.

## Csspart

empty-state - Styles the empty state container when there are no messages.

## Csspart

input-area-container - Styles the wrapper around the chat input area.

## Csspart

input-area - Styles the main text input area.

## Csspart

input-attachments-container - Styles the container for attachments in the input.

## Csspart

input-attachment-container - Styles a single attachment in the input area.

## Csspart

input-attachment-name - Styles the file name of an attachment.

## Csspart

input-attachment-icon - Styles the icon of an attachment.

## Csspart

text-input - Styles the text input field for typing messages.

## Csspart

input-actions-container - Styles the container for input actions.

## Csspart

input-actions-start - Styles the group of actions at the start of the input after the default file upload.

## Csspart

input-actions-end - Styles the group of actions at the end of the input.

## Csspart

file-upload-container - Styles the container for the file upload input.

## Csspart

file-upload - Styles the file upload input itself.

## Csspart

send-button-container - Styles the container around the send button.

## Csspart

send-button - Styles the send button.

## Csspart

message-container - Styles the container of a single message.

## Csspart

message-list (forwarded) - Styles the internal list of messages.

## Csspart

message-header - Styles the header of a message (e.g., sender, timestamp).

## Csspart

message-content - Styles the text content of a message.

## Csspart

message-attachments-container - Styles the container for message attachments.

## Csspart

message-attachment - Styles a single message attachment.

## Csspart

message-actions-container - Styles the container holding message actions.

## Csspart

message-sent - Styles messages marked as sent by the current user.

## Csspart

attachment-header - Styles the header of an attachment block.

## Csspart

attachment-content - Styles the content of an attachment block.

## Csspart

attachment-icon - Styles the icon of an attachment.

## Csspart

file-name - Styles the file name shown in an attachment.

## Extends

- `EventEmitterInterface`\<[`IgcChatComponentEventMap`](../interfaces/IgcChatComponentEventMap.md), `this`\> & `LitElement`\<`this`\>

## Properties

### resourceStrings

> **resourceStrings**: `IgcChatResourceStrings` = `IgcChatResourceStringEN`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:307](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L307)

The resource strings of the chat.

***

### tagName

> `readonly` `static` **tagName**: `"igc-chat"` = `'igc-chat'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:189](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L189)

The **`tagName`** read-only property of the Element interface returns the tag name of the element on which it's called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

## Accessors

### draftMessage

#### Set Signature

> **set** **draftMessage**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:269](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L269)

The chat message currently being composed but not yet sent.
Includes the draft text and any attachments.

##### Parameters

###### value

###### attachments?

[`IgcChatMessageAttachment`](../interfaces/IgcChatMessageAttachment.md)[]

###### text

`string`

##### Returns

`void`

***

### messages

#### Set Signature

> **set** **messages**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:256](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L256)

The list of chat messages currently displayed.
Use this property to set or update the message history.

##### Parameters

###### value

[`IgcChatMessage`](../interfaces/IgcChatMessage.md)[]

##### Returns

`void`

***

### options

#### Set Signature

> **set** **options**(`value`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:295](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L295)

Controls the chat behavior and appearance through a configuration object.
Use this to toggle UI options, provide suggestions, templates, etc.

##### Parameters

###### value

[`IgcChatOptions`](../type-aliases/IgcChatOptions.md)

##### Returns

`void`

## Methods

### scrollToMessage()

> **scrollToMessage**(`messageId`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/chat.ts:330](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/chat.ts#L330)

Scrolls the view to a specific message by id.

#### Parameters

##### messageId

`string`

#### Returns

`void`

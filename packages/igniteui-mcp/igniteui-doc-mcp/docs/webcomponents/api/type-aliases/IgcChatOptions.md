# Type Alias: IgcChatOptions

> **IgcChatOptions** = `object`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:78](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L78)

Configuration options for customizing the behavior and appearance of the chat component.

## Properties

### acceptedFiles?

> `optional` **acceptedFiles?**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:100](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L100)

The accepted files that could be attached.
Defines the file types as a list of comma-separated values (e.g. "image/*,.pdf") that the file input should accept.

***

### adoptRootStyles?

> `optional` **adoptRootStyles?**: `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:150](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L150)

A boolean flag that, when `true`, enables a **quick and dirty workaround** for styling
components rendered within the Shadow DOM, from custom message renderers, by allowing them
to inherit styles from the document's root. This can be useful for developers who prefer not to handle
Shadow DOM encapsulation, but it is **not the recommended approach**.

It is highly advised to use standard Web Component styling methods first, in this order:

1.  **CSS Variables and Parts API**: Use the exposed `::part` API with custom CSS variables to style
your content in your custom renderers.

2.  **`link` elements**: For larger style sheets, link them directly within the Shadow DOM to maintain
encapsulation.

3.  **Inline `<style>` tags**: Use these for small, self-contained styles within a template.

This property should be used as a **last resort** as it can lead to **style leakage**, where
global styles unexpectedly bleed into the component, breaking encapsulation and causing
unpredictable visual issues.

***

### currentUserId?

> `optional` **currentUserId?**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:82](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L82)

The ID of the current user. Used to differentiate between incoming and outgoing messages.

***

### disableAutoScroll?

> `optional` **disableAutoScroll?**: `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:86](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L86)

If `true`, prevents the chat from automatically scrolling to the latest message.

***

### disableInputAttachments?

> `optional` **disableInputAttachments?**: `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:91](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L91)

If `true`, disables the ability to upload and send attachments.
Defaults to `false`.

***

### headerText?

> `optional` **headerText?**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:104](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L104)

Optional header text to display at the top of the chat component.

***

### inputPlaceholder?

> `optional` **inputPlaceholder?**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:109](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L109)

Optional placeholder text for the chat input area.
Provides a hint to the user about what they can type (e.g. "Type a message...").

***

### isTyping?

> `optional` **isTyping?**: `boolean`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:95](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L95)

Indicates whether the other user is currently typing a message.

***

### renderers?

> `optional` **renderers?**: [`ChatRenderers`](../interfaces/ChatRenderers.md)

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:155](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L155)

An object containing a collection of custom renderers for different parts of the chat UI.

***

### stopTypingDelay?

> `optional` **stopTypingDelay?**: `number`

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:127](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L127)

Time in milliseconds to wait before dispatching a stop typing event.
Default is `3000`.

***

### suggestions?

> `optional` **suggestions?**: `string`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:113](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L113)

Suggested text snippets or quick replies that can be shown as user-selectable options.

***

### suggestionsPosition?

> `optional` **suggestionsPosition?**: [`ChatSuggestionsPosition`](ChatSuggestionsPosition.md)

Defined in: [webcomponents/igniteui-webcomponents/src/components/chat/types.ts:122](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/chat/types.ts#L122)

Controls the position of the chat suggestions within the component layout.

- `"below-input"`: Renders suggestions below the chat input area.
- `"below-messages"`: Renders suggestions below the chat messages area.

Default is `"below-messages"`.

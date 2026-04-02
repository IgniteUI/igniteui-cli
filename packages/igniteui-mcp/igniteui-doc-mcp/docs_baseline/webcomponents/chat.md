---
title: Web Components Chat | Ignite UI for Web Components
_description: With Ignite UI for Web Components Chat, you can build interactive messaging experiences with support for messages, attachments, suggestions, typing indicators, and custom templates.
_keywords: Ignite UI for Web Components, UI controls, Web Components widgets, web widgets, UI widgets, Web Components, Native Web Components Components Suite, Native Web Components Controls, Native Web Components Components Library, Web Components Chat components, Web Components Chat controls
mentionedTypes: ["Chat"]
_license: MIT
_tocName: Chat
---

# Web Components Chat Overview

The Ignite UI for Web Components Chat component provides a complete solution for building conversational interfaces in your applications. Whether you are creating a customer support tool, a collaborative workspace, or a chatbot assistant, the Chat component gives you the building blocks you need: sending and receiving text messages, uploading file attachments, displaying quick reply suggestions, showing typing indicators when the other participant is writing a response.

Unlike a static message list, the [`IgcChatComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchatcomponent.html) component is interactive and designed for **real-time communication**. It manages input, rendering, and user interaction while giving you full control over how messages and attachments are displayed. It also exposes an extensive rendering API that lets you override any part of its layout or visuals.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Installation

To get started, install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

Once installed, you can import the component in your project and register it so it becomes available as a custom element:

```ts
import { defineComponents, IgcChatComponent } from "igniteui-webcomponents";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcChatComponent);
```

The CSS file includes one of our default themes. You can replace it with a different theme or create a custom one if you want the [`IgcChatComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchatcomponent.html) to match your application’s branding.

## Usage

The simplest way to use the [`IgcChatComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchatcomponent.html) is to declare it as follows:

```ts
const options: IgcChatOptions = {
  currentUserId: 'me',
  headerText: 'Support Chat',
};
```

```html
<igc-chat id="myChat" .options=${options}>
</igc-chat>
```

Here, the `currentUserId` property tells the component which messages are “outgoing” (sent by the current user) versus “incoming” (sent by others). The `headerText` provides a title for the chat window.

Once rendered, you can programmatically add messages:

```ts
const chat = document.getElementById('myChat');
const newMessage = {
  id: '1',
  sender: 'me',
  text: 'Hello! How can I help you?',
  timestamp: Date.now().toString()
};
chat.messages = [...chat.messages, newMessage ];

```

This approach makes it easy to plug the Chat into your own data source, such as a server endpoint, a chatbot engine, or a collaborative app backend.

### Properties

The [`IgcChatComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchatcomponent.html) component exposes several key properties that let you control its state and configuration:

| Name              | Description                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `messages`        | Array of messages (`ChatMessage[]`) displayed in the chat. You can bind to this to control which messages are shown.                                                 |
| `draftMessage`    | The current unsent message, represented as an object containing `text` and optional `attachments`. This is useful for saving or restoring message drafts.           |
| `options`         | Chat configuration ([`IgcChatOptions`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/types/igcchatoptions.html)) such as current user ID, input placeholders, accepted file types, quick reply suggestions, typing delay, and custom renderers. |
| `resourceStrings` | Localized resource strings for labels, headers, and system text. Use this property to adapt the component for different languages.                                  |

These properties make it straightforward to synchronize the Chat’s UI with your application’s state and backend.

### Attachments

Modern conversations are rarely limited to text alone. The Chat component includes built-in support for file attachments, allowing users to share images, documents, and other files.
By default, the input area includes an attachment button. You can control which file types are allowed by setting the `acceptedFiles` property:

```ts
const options: IgcChatOptions = {
  acceptedFiles="image/*,.pdf",
};
```

In this example, users will only be able to upload images and PDF files.
If your use case does not require attachments, you can easily turn them off:

```ts
const options: IgcChatOptions = {
  disableInputAttachments: true,
};
```

### Suggestions

Quick reply suggestions provide users with pre-defined responses they can tap to reply instantly. This feature is particularly useful in chatbots, customer service flows, or when guiding users through a structured process.
You can provide suggestions by binding an array of strings to the suggestions property. The `suggestions-position` attribute lets you control where they are displayed: either below the input area or below the messages list.

```ts
const options: IgcChatOptions = {
  currentUserId: "me",
  suggestions: ['Yes', 'No', 'Maybe later'],
  suggestionsPosition: "below-input"
};
```

```html
<igc-chat
  .options=${options}>
</igc-chat>
```

This approach helps streamline user interactions by reducing the need to type repetitive answers and improves the overall experience in guided conversations.

### Typing Indicator

Conversations feel more natural when participants can see that the other person is typing. The Chat component provides this behavior through the `isTyping` property of the options object.
When set to true, the chat shows a subtle typing indicator below the messages:

```ts
const options: IgcChatOptions = {
  isTyping: true
};
```

This feature is typically toggled programmatically, for example when receiving a typing event from your backend service.

### Custom Renderers

While the Chat component works out of the box with its default UI, many applications need to customize the look and feel. For example, you might want to add read receipts, display avatars, or replace the input area with a voice recording button.
The [`IgcChatComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchatcomponent.html) component addresses this need with a renderer system. A renderer is simply a function that returns a template for a given part of the UI. You can override as many or as few renderers as you like.

#### ChatTemplateRenderer

Every renderer follows the same function signature:

```ts
export type ChatTemplateRenderer<T> = (ctx: T) => unknown;
```

The ctx parameter provides different contextual data depending on what is being rendered.

#### Renderer Contexts

| Context Type                | Provided Data                                                                                                          |
| --------------------------- | -----------------------------------------------------------------------------------------------------------------------|
| `ChatRenderContext`       | `instance` (the chat component instance).                                               |
| `ChatInputRenderContext`      | Inherits `ChatRenderContext` and adds `attachments` (array of [`IgcChatMessageAttachment`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/interfaces/igcchatmessageattachment.html)) and `value` (current input text). |
| `ChatMessageRenderContext`    | Inherits `ChatRenderContext` and adds [`IgcChatMessage`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/interfaces/igcchatmessage.html) (the [`IgcChatMessage`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/interfaces/igcchatmessage.html) being rendered).                                     |
| `ChatAttachmentRenderContext` | Inherits `ChatMessageRenderContext` and adds `attachment` (the [`IgcChatMessageAttachment`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/interfaces/igcchatmessageattachment.html) being rendered).                     |

#### Available Renderers

The following parts of the Chat can be customized:

- Message-level: message, messageHeader, messageContent, messageAttachments, messageActions
- Attachment-level: attachment, attachmentHeader, attachmentContent
- Input-level: input, inputActions, inputActionsStart, inputActionsEnd, inputAttachments, fileUploadButton, sendButton
- Suggestions: suggestionPrefix
- Miscellaneous: typingIndicator

This level of granularity means you can tweak just one part (for example, how attachments look) without rewriting the entire chat layout.

#### Example: Custom Message Content

This example shows how to replace the message bubble with your own template:

```ts
const options = {
  renderers: {
    messageContent: (ctx) => {
      const { message } = ctx;
      return html`<div class="bubble custom">${message.content}</div>`;
    }
  }
};
```

#### Example: Custom Input Area

By default, the chat input is a text area. You can override it to provide a more tailored experience, such as adding a voice input button:

```ts
const options = {
  renderers: {
    input: (ctx) => html`
      <textarea placeholder=${ctx.instance?.options?.inputPlaceholder || 'Type here...'}>${ctx.value}</textarea>
      <button @click=${() => alert('Voice input!')}>🎤</button>
    `
  }
};
```

#### Example: Extending Input Actions

The [`IgcChatComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchatcomponent.html) component provides two renderers which are useful when you want to keep the default actions (upload and send) but extend them with additional controls:

- `inputActionsStart` – allows you to inject custom content after the built-in upload button.
- `inputActionsEnd` – allows you to inject custom content after the built-in send button.

For example, you might want to add a voice recording button after the upload button, or a menu of extra options after the send button.
In the following example, the default upload button is preserved, but we add a microphone button next to it. On the other end, we remove the default send button and replace it with a custom Ask button and a “more” menu:

```ts
const _actionsStartTemplate = () => html`
  <igc-icon-button variant="flat">🎤</igc-icon-button>
`;

const _actionsEndTemplate = (ctx: ChatRenderContext) => html`
  <div>
    <igc-button @click=${() => handleCustomSendClick(ctx.instance)}>Ask</igc-button>
    <igc-icon-button variant="flat" name="more_horiz"></igc-icon-button>
  </div>
`;

const options = {
  renderers: {
    inputActionsStart: _actionsStartTemplate,
    inputActionsEnd: _actionsEndTemplate,
    sendButton: () => nothing,
  },
};
```

In this setup:

- The upload button remains in place.
- A microphone button is added after it (inputActionsStart).
- The default send button is removed and replaced with a custom Ask button and a “more” icon (inputActionsEnd).

This approach gives you full flexibility over the chat input bar, letting you add, remove, or reorder actions without rebuilding the input area from scratch.

### Markdown Rendering

The Chat component includes built-in support for Markdown content through the `createMarkdownRenderer` helper, which is exported from the  `igniteui-webcomponents/extras`  entry point of the main package. This allows you to display messages with formatted text, links, lists, and even syntax-highlighted code blocks, while ensuring that all rendered HTML is sanitized for security.

> [!Note]
> To use the Markdown renderer, you need to install the following peer dependencies in your project:

```cmd
npm install marked marked-shiki shiki dompurify
```

By default, messages are rendered as plain text. If you want to enable Markdown support, you can override the messageContent renderer and use the Markdown renderer as shown below:

```ts
import { createMarkdownRenderer } from 'igniteui-webcomponents/extras';

// Create a reusable Markdown renderer instance
const markdownRenderer = await createMarkdownRenderer();

const options = {
  renderers: {
    messageContent: async ({ message }) => markdownRenderer(message),
  }
};
```

In this example:

- Each message’s text property will be parsed as Markdown using the [marked](https://github.com/markedjs/marked) library.
- The renderer sanitizes the output using [DOMPurify](https://github.com/cure53/DOMPurify)
- Links automatically open in a new tab with safe rel attributes.

#### Syntax Highlighting

The Markdown renderer also supports syntax highlighting for code blocks using [Shiki](https://shiki.matsu.io/). By default, it includes highlighting for JavaScript, TypeScript, HTML, and CSS with the github-light theme. You can customize this behavior through MarkdownRendererOptions:

```ts
const markdownRenderer = await createMarkdownRenderer({
  theme: { light: 'min-light' },
  languages: ['javascript', 'python']
});
```

This will enable highlighted code blocks for JavaScript, Python, and Go, styled with the GitHub dark theme.

#### Configuration Options

| Option          | Description                                                                     |
| --------------- | ------------------------------------------------------------------------------- |
| `noHighlighter` | If `true`, disables syntax highlighting entirely.                              |
| `languages`     | List of programming languages to support in highlighted code blocks.           |
| `theme`         | An object specifying **Shiki** themes to apply. Supports separate values for `light` and `dark` mode (e.g., `{ light: 'github-light', dark: 'github-dark' }`). |
| `sanitizer`     | A custom function to sanitize the final HTML. Defaults to `DOMPurify.sanitize`. |

### Events

To integrate with your application logic, the Chat component emits a set of events:

- igcMessageCreated – when a new message is created.
- igcMessageReact – when a message is reacted to.
- igcAttachmentClick – when an attachment is clicked.
- igcAttachmentAdded – when an attachment is added.
- igcAttachmentRemoved – when an attachment is removed.
- igcAttachmentDrag – while dragging an attachment.
- igcAttachmentDrop – when an attachment is dropped.
- igcTypingChange – when typing status changes.
- igcInputFocus / igcInputBlur – input focus events.
- igcInputChange – when the input value changes.

You can listen for these events and sync them with your backend:

```ts
chat.addEventListener('igcMessageCreated', (e) => {
  console.log('Message:', e.detail);
});
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Styling

The [`IgcChatComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchatcomponent.html) component exposes both **CSS parts** and **slots** for fine-grained customization of its appearance and structure.

### CSS Parts

| Part name                       | Description                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------------ |
| "chat-container"                | Styles the main chat container.                                                     |
| "header"                        | Styles the chat header container.                                                   |
| "prefix"                        | Styles the element before the chat title (e.g., avatar).                            |
| "title"                         | Styles the chat header title.                                                       |
| "message-area-container"        | Styles the container holding the messages and (optional) suggestions.               |
| "message-list"                  | Styles the message list container.                                                  |
| "message-item"                  | Styles each message wrapper.                                                        |
| "typing-indicator"              | Styles the typing indicator container.                                              |
| "typing-dot"                    | Styles individual typing indicator dots.                                            |
| "suggestions-container"         | Styles the container holding all suggestions.                                       |
| "suggestions-header"            | Styles the suggestions header.                                                      |
| "suggestion"                    | Styles each suggestion item.                                                        |
| "suggestion-prefix"             | Styles the icon or prefix in a suggestion.                                          |
| "suggestion-title"              | Styles the text/title of a suggestion.                                              |
| "empty-state"                   | Styles the empty state container when there are no messages.                        |
| "input-area-container"          | Styles the wrapper around the chat input area.                                      |
| "input-container"               | Styles the main input container.                                                    |
| "input-attachments-container"   | Styles the container for attachments in the input.                                  |
| "input-attachment-container"    | Styles a single attachment in the input area.                                       |
| "input-attachment-name"         | Styles the file name of an attachment.                                              |
| "input-attachment-icon"         | Styles the icon of an attachment.                                                   |
| "text-input"                    | Styles the text input field for typing messages.                                    |
| "input-actions-container"       | Styles the container for input actions.                                             |
| "input-actions-start"           | Styles the group of actions at the start of the input after the default file upload. |
| "input-actions-end"             | Styles the group of actions at the end of the input.                                |
| "file-upload-container"         | Styles the container for the file upload input.                                     |
| "file-upload"                   | Styles the file upload input itself.                                                |
| "send-button-container"         | Styles the container around the send button.                                        |
| "send-button"                   | Styles the send button.                                                             |
| "message-container"             | Styles the container of a single message.                                           |
| "message-list (forwarded)"      | Styles the internal list of messages.                                               |
| "message-header"                | Styles the header of a message (e.g., sender, timestamp).                           |
| "message-content"               | Styles the text content of a message.                                               |
| "message-attachments-container" | Styles the container for message attachments.                                       |
| "message-attachment"            | Styles a single message attachment.                                                 |
| "message-actions-container"     | Styles the container holding message actions.                                       |
| "message-sent"                  | Styles messages marked as sent by the current user.                                 |
| "attachment-header"             | Styles the header of an attachment block.                                           |
| "attachment-content"            | Styles the content of an attachment block.                                          |
| "attachment-icon"               | Styles the icon of an attachment.                                                   |
| "file-name"                     | Styles the file name shown in an attachment.                                        |

### Slots

| Slot name             | Description                                                              |
| --------------------- | ------------------------------------------------------------------------ |
| "prefix"              | Slot for injecting content (e.g., avatar or icon) before the chat title. |
| "title"               | Slot for overriding the chat title content.                             |
| "actions"             | Slot for injecting header actions (e.g., buttons, menus).               |
| "suggestions-header"  | Slot for rendering a custom header for the suggestions list.            |
| "suggestions"         | Slot for rendering a custom list of quick reply suggestions.            |
| "suggestions-actions" | Slot for rendering additional actions.                                  |
| "suggestion"          | Slot for rendering a single suggestion item.                            |
| "empty-state"         | Slot shown when there are no messages.                                  |

#### Root Style Adoption (adoptRootStyles)

The Chat component's options include a special flag for advanced styling scenarios:

| Option            | Type      | Default | Description        |
| ----------------- | --------- | ------- | ------------------ |
| `adoptRootStyles` | `boolean` | false   | When `true`, the component allows content rendered inside its Shadow DOM (e.g., from custom renderers) to inherit styles from the document's root. This provides a quick workaround for styling but is **not recommended** for production use. |

This property can be useful if you prefer not to deal with Shadow DOM encapsulation when applying global CSS to custom-rendered templates.
However, it comes with trade-offs:

- ✅ Convenience: Lets global styles (from the document) affect custom message renderers.
- ⚠️ Risky: Breaks encapsulation and can lead to style leakage, where global CSS unintentionally alters internal visuals.
- 🔒 One-time setting: This option can only be set at initialization. Changing it at runtime has no effect.

We highly recommend using the standard Web Component styling approaches before resorting to this property:

- CSS Variables and ::part API – Prefer customizing via exposed parts and variables.
- "<link>" elements – For larger stylesheets, inject them inside the Shadow DOM.
- Inline "<style>" tags – For small, scoped style overrides.

#### Example

```css
igc-chat::part(header) {
  background: var(--ig-primary-100);
}

igc-chat::part(message-container) {
  border-radius: 12px;
  padding: 0.5rem;
}

igc-chat::part(empty-state) {
  font-style: italic;
  color: var(--ig-gray-500);
}
```

This allows you to style the [`IgcChatComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchatcomponent.html) to match your brand without replacing its functionality.

```css
igc-chat {
  border: 2px solid var(--ig-gray-300);
 }

igc-chat::part(header) {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid var(--ig-gray-300);
  background-color: var(--ig-gray-200);
  font-family: 'Franklin Gothic Medium';
  color: var(--ig-gray-700);
}

igc-chat::part(message-container) {
  background: var(--igc-chat-bubble-bg, #eee);
  color: var(--igc-chat-text-color, #222);
  padding: 12px;
  border-radius: 8px;
  transition: background .15s;
}

igc-chat::part(message-sent) {
  background: var(--igc-chat-sent-bubble-bg, #e6f4ff);
  color: var(--igc-chat-sent-text-color, #03396b);
}

igc-chat::part(message-header) {
  color: #c00000; 
  font-weight: bold; 
  margin: 8px;
}

igc-chat::part(message-actions-container) {
  border-top: 1px solid var(--ig-gray-300);
}

igc-chat::part(suggestion) {
  background-color: var(--ig-primary-100);
  color: var(--ig-primary-800);
  margin: .125rem;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

igc-chat::part(message-attachment) {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  background: var(--igc-chat-sent-bubble-bg);

}

igc-chat::part(input-attachments-container) {
  border: 5px solid var(--ig-gray-300);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## API Reference

- [`IgcChatComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcchatcomponent.html)
- [`IgcChatOptions`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/types/igcchatoptions.html)
- [`IgcChatMessage`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/interfaces/igcchatmessage.html)
- [`IgcChatMessageAttachment`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/interfaces/igcchatmessageattachment.html)
- [`ChatRenderers`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/interfaces/chatrenderers.html)
- [`ChatTemplateRenderer`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/types/chattemplaterenderer.html)
- [Styling & Themes](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

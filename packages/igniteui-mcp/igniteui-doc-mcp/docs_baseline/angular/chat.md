---
title: Angular Chat | Ignite UI | Infragistics
_description: With the Ignite UI for Angular Chat component, you can build interactive messaging experiences with support for messages, attachments, suggestions, typing indicators, and custom templates.  
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Chat components, Angular Chat controls
_license: MIT
mentionedTypes: ["Chat"]  
_tocName: Chat
---

# Angular Chat Overview

The Chat component provides a complete solution for building conversational interfaces in your applications. Whether you are creating a customer support tool, a collaborative workspace, or a chatbot assistant, the Chat component gives you the building blocks you need: sending and receiving text messages, uploading file attachments, displaying quick reply suggestions, showing typing indicators when the other participant is writing a response.

Unlike a static message list, the Chat component is interactive and designed for **real-time communication**. It manages input, rendering, and user interaction while giving you full control over how messages and attachments are displayed. It also exposes an extensive rendering API that lets you override any part of its layout or visuals.

```typescript
import { Component, signal } from '@angular/core';
import { IgxChatComponent, IgxChatOptions } from 'igniteui-angular/chat';

@Component({
    selector: 'app-chat-overview-sample',
    styleUrls: ['./overview-sample.component.scss'],
    templateUrl: './overview-sample.component.html',
    imports: [IgxChatComponent]
})
export class ChatOverviewSampleComponent {
    public draftMessage = null;

    public messages = signal([
        {
            id: '1',
            text: `Hi, I have a question about my recent order, #7890.`,
            sender: 'user',
            timestamp: (Date.now() - 3500000).toString()
        },
        {
            id: '2',
            text: `Hello! I can help with that. What is your question regarding order #7890?`,
            sender: 'support',
            timestamp: (Date.now() - 3400000).toString()
        },
        {
            id: '3',
            text: `The tracking status shows 'delivered', but I haven't received it yet. Can you confirm the delivery location?`,
            sender: 'user',
            timestamp: (Date.now() - 3300000).toString()
        },
        {
            id: '4',
            text: `I've reviewed the delivery details. It seems the package was left in a different spot. Here's a photo from our delivery driver showing where it was placed. Please check your porch and side door.`,
            sender: 'support',
            timestamp: (Date.now() - 3200000).toString(),
            attachments: [
                {
                id: 'delivery-location-image',
                name: 'Delivery location',
                url: 'https://media.istockphoto.com/id/1207972183/photo/merchandise-delivery-from-online-ordering.jpg?s=612x612&w=0&k=20&c=cGcMqd_8FALv4Tueh7sllYZuDXurkfkqoJf6IAIWhJk=',
                type: 'image'
                }
            ]
        }
    ]);

    public options = signal<IgxChatOptions>({
        disableAutoScroll: false,
        disableInputAttachments: false,
        suggestions: [`It's there. Thanks.`, `It's not there.`],
        inputPlaceholder: 'Type your message here...',
        headerText: 'Customer Support'
    });

    constructor() {
    }

    public onMessageCreated(msg: any): void {
        const newMessage = msg;
        this.messages.update(messages => [...messages, newMessage]);
        this.options.update(options => ({ ...options, isTyping: true, suggestions: [] }));

        const messageText = msg.text.toLowerCase();
        const responseText = messageText.includes('not there')
        ? `We're sorry to hear that. Checking with the delivery service for more details.`
        : messageText.includes('it\'s there')
            ? `Glad to hear that! If you have any more questions or need further assistance, feel free to ask. We're here to help!`
            : `Our support team is currently unavailable. We'll get back to you as soon as possible.`;

        const responseMessage = {
            id: Date.now().toString(),
            text: responseText,
            sender: 'support',
            timestamp: Date.now().toString()
        };

        this.draftMessage = { text: '', attachments: [] };
        this.messages.update(messages => [...messages, responseMessage]);
        this.options.update(options => ({ ...options, isTyping: false }));
    }
}
```
```html
<div class="sample-column">
    <igx-chat
        [options]="options()"
        [messages]="messages()"
        [draftMessage]="draftMessage"
        (messageCreated)="onMessageCreated($event)">
    </igx-chat>
</div>
```
```scss
:host {
    display: block;
    padding: 16px;
}

igx-chat {
    height: 870px;
}
```

## Installation

To get started, install Ignite UI for Angular package as well as the Ignite UI for Web Component one that powers the UI:

```cmd
npm install igniteui-angular igniteui-webcomponents
```

[`IgxChatComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchatcomponent.html) provides Angular bindings (events, templates, DI, change detection, pipes), while the visual chat UI is rendered by the Web Component. Installing both ensures the chat behaves natively in Angular while leveraging the full Web Component UI.

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

Once installed, you can import the component in your project:

```ts
import { Component } from '@angular/core';
import { IgxChatComponent } from "igniteui-angular/chat";

@Component({
  ...
})
export class AppComponent { ... }
```

## Usage
Define the chat options and bind them in your template:

```ts
import { IgxChatComponent, IgxChatOptions } from "igniteui-angular/chat";

public options: IgxChatOptions  = {
  currentUserId: 'me',
  headerText: 'Support Chat',
};
```

```html
<igx-chat 
    [options]="options"
    [messages]="messages">
</igx-chat>
```

Here, the `currentUserId` property tells the component which messages are “outgoing” (sent by the current user) versus “incoming” (sent by others). The `headerText` provides a title for the chat window.

Once rendered, you can programmatically add messages by updating the bound messages array:

```ts
public addMessage() {    
    const newMessage = {
      id: '1',
      sender: 'me',
      text: 'Hello! How can I help you?',
      timestamp: Date.now().toString()
    };
    this.messages = [...this.messages, newMessage ];
}
```

This approach makes it easy to plug the Chat into your own data source, such as a server endpoint, a chatbot engine, or a collaborative app backend.

### Inputs
The Chat component exposes several key properties that let you control its state and configuration:

| Name           | Description                                                                                                                                                                                                   |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `messages`     | Array of messages (`IgcChatMessage[]`) displayed in the chat. You can bind to this to control which messages are shown.                                                                                       |
| `draftMessage` | The current unsent message, represented as an object containing `text` and optional `attachments`. This is useful for saving or restoring message drafts.                                                     |
| `options`      | Chat configuration ([`IgxChatOptions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/types/igxchatoptions.html)) such as current user ID, input placeholders, accepted file types, quick reply suggestions and typing behavior. |
| `templates`    | Custom Angular templates ([`IgxChatTemplates`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/types/igxchattemplates.html)) for message content, input, attachments, and other parts of the chat UI.                             |

These properties make it straightforward to synchronize the Chat’s UI with your application’s state and backend.

### Attachments
Modern conversations are rarely limited to text alone. The Chat component includes built-in support for file attachments, allowing users to share images, documents, and other files.
By default, the input area includes an attachment button. You can control which file types are allowed by setting the `acceptedFiles` property:

```ts
public options: IgxChatOptions = {
  acceptedFiles="image/*,.pdf",
};
```

In this example, users will only be able to upload images and PDF files.
If your use case does not require attachments, you can easily turn them off:

```ts
public options: IgxChatOptions = {
  disableInputAttachments: true,
};
```

### Suggestions
Quick reply suggestions provide users with pre-defined responses they can tap to reply instantly. This feature is particularly useful in chatbots, customer service flows, or when guiding users through a structured process.
You can provide suggestions by binding an array of strings to the suggestions property. The `suggestionsPosition` property lets you control where they are displayed: either below the input area or below the messages list.

```ts
public options: IgxChatOptions = {
  currentUserId: "me",
  suggestions: ['Yes', 'No', 'Maybe later'],
  suggestionsPosition: "below-input"
};
```

This approach helps streamline user interactions by reducing the need to type repetitive answers and improves the overall experience in guided conversations.

### Typing Indicator
Conversations feel more natural when participants can see that the other person is typing. The Chat component provides this behavior through the `isTyping` property of the options object.
When set to true, the chat shows a subtle typing indicator below the messages:

```ts
public options: IgxChatOptions = {
  isTyping: true
};
```

This feature is typically toggled programmatically, for example when receiving a typing event from your backend service.

### Custom Templates
While the Chat component works out of the box with its default UI, many applications need to customize the look and feel. For example, you might want to add read receipts, display avatars, or replace the input area with a voice recording button.
The Chat component addresses this need using Angular templates. Templates are provided via the `templates` input and use strongly typed Angular directives.

#### Available Templates
The following parts of the Chat can be customized:
- Message-level: message, messageHeader, messageContent, messageAttachments, messageActions
- Attachment-level: attachment, attachmentHeader, attachmentContent
- Input-level: input, inputActions, inputActionsStart, inputActionsEnd, inputAttachments, fileUploadButton, sendButton
- Suggestions: suggestionPrefix
- Miscellaneous: typingIndicator

This level of granularity means you can tweak just one part (for example, how attachments look) without rewriting the entire chat layout.

#### Custom Message Content

```html
<igx-chat
        [options]="options"
        [messages]="messages"
        [templates]="{ messageContent: messageContent }">
</igx-chat>
<ng-template #messageContent let-message igxChatMessageContext>
  <div class="custom-message">
    <strong>{{ message.sender }}:</strong> {{ message.text }}
  </div>
</ng-template>
```

Here:
- `let-message` exposes the message object.
- The [`igxChatMessageContext`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchatmessagecontextdirective.html) directive ensures proper typing for message templates.

#### Custom Input Area
By default, the chat input is a text area. You can override it to provide a more tailored experience, such as adding a voice input button:

```html
<igx-chat
  [options]="options"
  [templates]="{ input: customInput }">
</igx-chat>

<ng-template #customInput let-input igxChatInputContext>
  <div class="custom-input">
    <textarea [(ngModel)]="input.value"></textarea>
    <button (click)="speechToText()">🎤</button>
  </div>
</ng-template>
```

#### Extending Input Actions
The Chat component provides two templates which are useful when you want to keep the default actions (upload and send) but extend them with additional controls:
- `inputActionsStart` – allows you to inject custom content after the built-in upload button.
- `inputActionsEnd` – allows you to inject custom content after the built-in send button.

For example, you might want to add a voice recording button after the upload button, or a menu of extra options after the send button.
In the following example, the default upload button is preserved, but we add a microphone button next to it. On the other end, we remove the default send button and replace it with a custom Ask button and a “more” menu:

```html
<igx-chat
  [options]="options"
  [templates]="{
    inputActionsStart: inputStart,
    inputActionsEnd: inputEnd
  }">
</igx-chat>

<ng-template #inputStart>
  <button class="icon-btn">🎤</button>
</ng-template>

<ng-template #inputEnd>
  <button (click)="ask()">Ask</button>
  <button class="icon-btn">⋮</button>
</ng-template>
```

In this setup:
- The upload button remains in place.
- A microphone button is added after it (inputActionsStart).
- The default send button is removed and replaced with a custom Ask button and a “more” icon (inputActionsEnd).

This approach gives you full flexibility over the chat input bar, letting you add, remove, or reorder actions without rebuilding the input area from scratch.

### Markdown Support
The Chat component includes built-in support for Markdown content through `fromMarkdown` pipe, which transforms message text into safe HTML. This allows you to display messages with formatted text, links, lists, and even syntax-highlighted code blocks, while ensuring that all rendered HTML is sanitized for security.

Markdown rendering is performed asynchronously for performance reasons, so the `fromMarkdown` pipe must be combined with Angular’s `async` pipe.

Example — rendering markdown inside a template:

```html
<ng-template #messageContent let-message igxChatMessageContext>
    <div [innerHTML]="message.text | fromMarkdown | async"></div>
</ng-template>
```

In this example:
- Each message’s text property will be parsed as Markdown using the [marked](https://github.com/markedjs/marked) library.
- The renderer sanitizes the output using [DOMPurify](https://github.com/cure53/DOMPurify)
- Links automatically open in a new tab with safe rel attributes.

#### Syntax Highlighting
The `fromMarkdown` pipe also supports syntax highlighting for code blocks. When a message contains fenced code (```js...```), it will be rendered using [Shiki](https://shiki.matsu.io/), a high-fidelity code highlighter used by VS Code. By default, it includes highlighting for JavaScript, TypeScript, HTML, and CSS with the github-light theme.

Example — when a message contains:

```markdown
Here is a JavaScript example:
\`\`\`ts
function greet(name: string) {
  return `Hello, ${name}!`;
}
\`\`\`
```

The output inside the chat message will appear with:
- Automatic syntax highlighting
- Theme-aware styling (github-light / github-dark)
- Proper indentation and monospaced font
- No additional configuration is required — the default themes are loaded automatically.

### Outputs (Events)
To integrate with your application logic, the Chat component emits a set of events:
- messageCreated – when a new message is created.
- messageReact – when a message is reacted to.
- attachmentClick – when an attachment is clicked.
- attachmentAdded – when an attachment is added.
- attachmentRemoved – when an attachment is removed.
- attachmentDrag – while dragging an attachment.
- attachmentDrop – when an attachment is dropped.
- typingChange – when typing status changes.
- inputFocus / inputBlur – input focus events.
- inputChange – when the input value changes.

You can listen for these events and sync them with your backend:

```html
<igx-chat
        [options]="options"
        [messages]="messages"
        (messageCreated)="onMessageCreated($event)">
</igx-chat>
```

```typescript
import { AsyncPipe } from '@angular/common';
import { Component, effect, signal, viewChild } from '@angular/core';
import { IgxChatComponent, IgxChatMessageContextDirective, type IgxChatOptions } from 'igniteui-angular/chat';
import { MarkdownPipe } from 'igniteui-angular/chat-extras';

@Component({
    selector: 'app-chat-features-sample',
    styleUrls: ['./features-sample.component.scss'],
    templateUrl: './features-sample.component.html',
    imports: [IgxChatComponent, IgxChatMessageContextDirective, AsyncPipe, MarkdownPipe]
})
export class ChatFeaturesSampleComponent {
    private _messageHeader = viewChild.required('messageHeader');
    private _suggestionPrefix = viewChild.required('suggestionPrefix');
    private _messageContent = viewChild.required('messageContent');

    public draftMessage = null;
    public messages = signal([
        {
            id: '1',
            text: `Hello. How can we assist you today?`,
            sender: 'support',
            timestamp: (Date.now() - 3500000).toString()
        },
        {
            id: '2',
            text: `Hello. I have problem with styling IgcAvatarComponent. Can you take a look at the attached file and help me?`,
            sender: 'user',
            timestamp: (Date.now() - 3400000).toString(),
            attachments: [
                {
                id: 'AvatarStyles.css',
                name: 'AvatarStyles.css',
                url: './styles/AvatarStyles.css',
                type: 'text/css'
                }
            ]
        },
        {
            id: '3',
            text: `Sure, give me a moment to check the file.`,
            sender: 'support',
            timestamp: (Date.now() - 3300000).toString()
        },
        {
            id: '4',
            text:
        `Thank you for your patience. It seems that the issue is the name of the CSS part. Here is the fixed code:
\`\`\`css
igc-avatar::part(base) {
    --size: 60px;
    color: var(--ig-success-500-contrast);
    background: var(--ig-success-500);
    border-radius: 20px;
}
\`\`\`
        `,
            sender: 'support',
            timestamp: (Date.now() - 3200000).toString()
        }
    ]);

    public options = signal<IgxChatOptions>({
        disableAutoScroll: false,
        disableInputAttachments: false,
        inputPlaceholder: 'Type your message here...',
        headerText: 'Developer Support',
        suggestionsPosition: "below-input",
        suggestions: [ 'Send me an e-mail when support is available.' ]
    });

    public templates = signal({});

    constructor() {
        effect(() => {
            const messageHeader = this._messageHeader();
            const suggestionPrefix = this._suggestionPrefix();
            const messageContent = this._messageContent();

            if (messageHeader && suggestionPrefix && messageContent) {
                this.templates.set({
                    messageHeader: messageHeader,
                    suggestionPrefix: suggestionPrefix,
                    messageContent: messageContent
                });
            }
        });
    }

    public onMessageCreated(e: any): void {
        const newMessage = e;
        this.messages.update(messages => [...messages, newMessage]);
        this.options.update(options => ({ ...options, isTyping: true, suggestions: [] }));

        const responseMessage = {
            id: Date.now().toString(),
            text: 'Our support team is currently unavailable. We\'ll get back to you as soon as possible.',
            sender: 'support',
            timestamp: Date.now().toString()
        };

        this.draftMessage = { text: '', attachments: [] };
        this.messages.update(messages => [...messages, responseMessage]);
        this.options.update(options => ({ ...options, isTyping: false }));
    }
}
```
```html
<div class="sample-column">
    <igx-chat
        [options]="options()"
        [messages]="messages()"
        [draftMessage]="draftMessage"
        [templates]="templates()"
        (messageCreated)="onMessageCreated($event)">
    </igx-chat>

    <ng-template #messageHeader let-message>
        @if (message.sender !== 'user') {
            <div>
                <span style="font-weight: bold; color: #c00000;"
                >Developer Support</span
                >
            </div>
        }
    </ng-template>

    <ng-template #suggestionPrefix>
        <span style="font-weight: bold">💡</span>
    </ng-template>

    <ng-template #messageContent let-message igxChatMessageContext>
        <div [innerHTML]="message.text | fromMarkdown | async"></div>
    </ng-template>
</div>
```
```scss
:host {
    display: block;
    padding: 16px;
}

igx-chat {
    height: 870px;
}
```

<div class="divider--half"></div>

## Styling

The Chat component exposes both **CSS parts** and **slots** for fine-grained customization of its appearance and structure.

### CSS Parts

| Part name                       | Description                                                                          |
| :------------------------------ | :----------------------------------------------------------------------------------- |
| `chat-container`                | Styles the main chat container.                                                      |
| `header`                        | Styles the chat header container.                                                    |
| `prefix`                        | Styles the element before the chat title (e.g., avatar).                             |
| `title`                         | Styles the chat header title.                                                        |
| `message-area-container`        | Styles the container holding the messages and (optional) suggestions.                |
| `message-list`                  | Styles the message list container.                                                   |
| `message-item`                  | Styles each message wrapper.                                                         |
| `typing-indicator`              | Styles the typing indicator container.                                               |
| `typing-dot`                    | Styles individual typing indicator dots.                                             |
| `suggestions-container`         | Styles the container holding all suggestions.                                        |
| `suggestions-header`            | Styles the suggestions header.                                                       |
| `suggestion`                    | Styles each suggestion item.                                                         |
| `suggestion-prefix`             | Styles the icon or prefix in a suggestion.                                           |
| `suggestion-title`              | Styles the text/title of a suggestion.                                               |
| `empty-state`                   | Styles the empty state container when there are no messages.                         |
| `input-area-container`          | Styles the wrapper around the chat input area.                                       |
| `input-container`               | Styles the main input container.                                                     |
| `input-attachments-container`   | Styles the container for attachments in the input.                                   |
| `input-attachment-container`    | Styles a single attachment in the input area.                                        |
| `input-attachment-name`         | Styles the file name of an attachment.                                               |
| `input-attachment-icon`         | Styles the icon of an attachment.                                                    |
| `text-input`                    | Styles the text input field for typing messages.                                     |
| `input-actions-container`       | Styles the container for input actions.                                              |
| `input-actions-start`           | Styles the group of actions at the start of the input after the default file upload. |
| `input-actions-end`             | Styles the group of actions at the end of the input.                                 |
| `file-upload-container`         | Styles the container for the file upload input.                                      |
| `file-upload`                   | Styles the file upload input itself.                                                 |
| `send-button-container`         | Styles the container around the send button.                                         |
| `send-button`                   | Styles the send button.                                                              |
| `message-container`             | Styles the container of a single message.                                            |
| `message-list (forwarded)`      | Styles the internal list of messages.                                                |
| `message-header`                | Styles the header of a message (e.g., sender, timestamp).                            |
| `message-content`               | Styles the text content of a message.                                                |
| `message-attachments-container` | Styles the container for message attachments.                                        |
| `message-attachment`            | Styles a single message attachment.                                                  |
| `message-actions-container`     | Styles the container holding message actions.                                        |
| `message-sent`                  | Styles messages marked as sent by the current user.                                  |
| `attachment-header`             | Styles the header of an attachment block.                                            |
| `attachment-content`            | Styles the content of an attachment block.                                           |
| `attachment-icon`               | Styles the icon of an attachment.                                                    |
| `file-name`                     | Styles the file name shown in an attachment.                                         |

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

This allows you to style the `Chat` to match your brand without replacing its functionality.

### Slots

| Slot name             | Description                                                              |
| :-------------------- | :----------------------------------------------------------------------- |
| `prefix`              | Slot for injecting content (e.g., avatar or icon) before the chat title. |
| `title`               | Slot for overriding the chat title content.                              |
| `actions`             | Slot for injecting header actions (e.g., buttons, menus).                |
| `suggestions-header`  | Slot for rendering a custom header for the suggestions list.             |
| `suggestions`         | Slot for rendering a custom list of quick reply suggestions.             |
| `suggestions-actions` | Slot for rendering additional actions.                                   |
| `suggestion`          | Slot for rendering a single suggestion item.                             |
| `empty-state`         | Slot shown when there are no messages.                                   |

These slots allow injecting custom UI into the header or suggestions area:

```html
<igx-chat>
  <span slot="actions">
    <button class="icon">⚙️</button>
  </span>
</igx-chat>
```

#### Root Style Adoption (adoptRootStyles)

The Chat component's options include a special flag for advanced styling scenarios:

| Option            | Type      | Default | Description                                                                                                                                                                                                                                    |
| :---------------- | :-------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `adoptRootStyles` | `boolean` | false   | When `true`, the component allows content rendered inside its Shadow DOM (e.g., from custom renderers) to inherit styles from the document's root. This provides a quick workaround for styling but is **not recommended** for production use. |

This property can be useful if you prefer not to deal with Shadow DOM encapsulation when applying global CSS to custom-rendered templates.
However, it comes with trade-offs:
- ✅ Convenience: Lets global styles (from the document) affect custom message renderers.
- ⚠️ Risky: Breaks encapsulation and can lead to style leakage, where global CSS unintentionally alters internal visuals.
- 🔒 One-time setting: This option can only be set at initialization. Changing it at runtime has no effect.

We highly recommend using the standard Web Component styling approaches before resorting to this property:
- CSS Variables and ::part API – Prefer customizing via exposed parts and variables.
- `<link>` elements – For larger stylesheets, inject them inside the Shadow DOM.
- Inline `<style>` tags – For small, scoped style overrides.

```typescript
import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxChatComponent, IgxChatOptions } from 'igniteui-angular/chat';

@Component({
    selector: 'app-chat-styling-sample',
    styleUrls: ['./styling-sample.component.scss'],
    templateUrl: './styling-sample.component.html',
    imports: [IgxAvatarComponent, IgxChatComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatStylingSampleComponent {
    public draftMessage = { text: '', attachments: [] };

    public messages = signal([
        {
            id: '1',
            text: `Hi, I have a question about my recent order, #7890.`,
            sender: 'user',
            timestamp: (Date.now() - 3500000).toString()
        },
        {
            id: '2',
            text: `Hello! I can help with that. What is your question regarding order #7890?`,
            sender: 'support',
            timestamp: (Date.now() - 3400000).toString()
        },
        {
            id: '3',
            text: `The tracking status shows 'delivered', but I haven't received it yet. Can you confirm the delivery location?`,
            sender: 'user',
            timestamp: (Date.now() - 3300000).toString()
        },
        {
            id: '4',
            text: `I've reviewed the delivery details. It seems the package was left in a different spot. Here's a photo from our delivery driver showing where it was placed. Please check your porch and side door.`,
            sender: 'support',
            timestamp: (Date.now() - 3200000).toString(),
            attachments: [
                {
                id: 'delivery-location-image',
                name: 'Delivery location',
                url: 'https://media.istockphoto.com/id/1207972183/photo/merchandise-delivery-from-online-ordering.jpg?s=612x612&w=0&k=20&c=cGcMqd_8FALv4Tueh7sllYZuDXurkfkqoJf6IAIWhJk=',
                type: 'image'
                }
            ]
        }
    ]);

    public options = signal<IgxChatOptions>({
        disableAutoScroll: false,
        disableInputAttachments: false,
        suggestions: [`It's there. Thanks.`, `It's not there.`],
        inputPlaceholder: 'Type your message here...',
        headerText: 'Customer Support',
        adoptRootStyles: true
    });

    constructor() {}

    public onMessageCreated(msg: any): void {
        const newMessage = msg;
        this.messages.update(messages => ([...messages, newMessage]));
        this.options.update(options => ({ ...options, isTyping: true, suggestions: [] }));


        const messageText = msg.text.toLowerCase();
        const responseText = messageText.includes('not there')
        ? `We're sorry to hear that. Checking with the delivery service for more details.`
        : messageText.includes('it\'s there')
            ? `Glad to hear that! If you have any more questions or need further assistance, feel free to ask. We're here to help!`
            : `Our support team is currently unavailable. We'll get back to you as soon as possible.`;

        const responseMessage = {
            id: Date.now().toString(),
            text: responseText,
            sender: 'support',
            timestamp: Date.now().toString()
        };

        this.draftMessage = { text: '', attachments: [] };
        this.messages.update(messages => [...messages, responseMessage]);
        this.options.update(options => ({ ...options, isTyping: false }));
    }
}
```
```html
<div class="sample-column">
    <igx-chat
        [options]="options()"
        [messages]="messages()"
        [draftMessage]="draftMessage"
        [templates]="{ messageHeader: messageHeader }"
        (messageCreated)="onMessageCreated($event)">

        <ng-template #messageHeader let-message>
            @if (message.sender !== 'user') {
                <div style="display: flex; align-items: center; gap: 8px;">
                    <igx-avatar
                        shape="circle"
                        src="https://www.infragistics.com/angular-demos/assets/images/men/1.jpg"
                        size="small"
                    >
                    </igx-avatar>
                    <span style="font-weight: bold; color: #c00000;"
                    >Customer Support</span>
                </div>
            }
        </ng-template>
    </igx-chat>
</div>
```
```scss
// @use "igniteui-angular/theming" as *;
igx-chat {
    height: 870px;

    ::ng-deep {
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
    }
}
```

## API Reference

- [`IgxChatComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchatcomponent.html)
- [`IgxChatOptions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/types/igxchatoptions.html)
- [`IgxChatTemplates`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/types/igxchattemplates.html)
- [`IgxChatMessageContextDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchatmessagecontextdirective.html)
- [`IgxChatInputContextDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchatinputcontextdirective.html)
- [`IgxChatAttachmentContextDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxchatattachmentcontextdirective.html)
- [`Styling & Themes`](./themes/index.md)

## Additional Resources
Our community is active and always welcoming to new ideas.
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

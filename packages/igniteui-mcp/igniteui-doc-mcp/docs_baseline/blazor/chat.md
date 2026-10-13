---
title: "Blazor Chat | Ignite UI for Blazor"
description: With Ignite UI for Blazor Chat, you can build interactive messaging experiences with support for messages, attachments, suggestions, typing indicators, and custom templates.
keywords: "Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Chat components, Blazor Chat controls"
mentionedTypes: ["Chat"]
license: MIT
llms:
  description: "The Ignite UI for Blazor Chat component provides a complete solution for building conversational interfaces in your applications."
_tocName: Chat
---
# Blazor Chat Overview

The Ignite UI for Blazor Chat component provides a complete solution for building conversational interfaces in your applications. Whether you are creating a customer support tool, a collaborative workspace, or a chatbot assistant, the Chat component gives you the building blocks you need: sending and receiving text messages, uploading file attachments, displaying quick reply suggestions, showing typing indicators when the other participant is writing a response.

Unlike a static message list, the `IgbChat` component is interactive and designed for **real-time communication**. It manages input, rendering, and user interaction while giving you full control over how messages and attachments are displayed. It also exposes an extensive rendering API that lets you override any part of its layout or visuals.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbChat @ref="Chat" Options="Options" Messages="Messages" MessageCreated="OnMessageCreated" Height="100%"></IgbChat>
</div>

@code {
    public IgbChat Chat;
    public IgbChatMessage[] Messages = new IgbChatMessage[]
    {
        new IgbChatMessage()
        },
        new IgbChatMessage() {
          Id = "2",
          Text = "Hello! I can help with that. What is your question regarding order #7890?",
          Sender = "support",
          Timestamp = (DateTime.Now - TimeSpan.FromMilliseconds(3400000)).ToString()
        },
        new IgbChatMessage() {
          Id = "3",
          Text = "The tracking status shows 'delivered', but I haven't received it yet. Can you confirm the delivery location?",
          Sender = "user",
          Timestamp = (DateTime.Now - TimeSpan.FromMilliseconds(3300000)).ToString()
        },
        new IgbChatMessage() {
          Id = "4",
          Text = "I've reviewed the delivery details. It seems the package was left in a different spot. Here's a photo from our delivery driver showing where it was placed. Please check your porch and side door.",
          Sender = "support",
          Timestamp = (DateTime.Now - TimeSpan.FromMilliseconds(3200000)).ToString(),
          Attachments = new IgbChatMessageAttachment[]
          {
                new IgbChatMessageAttachment()
                }
            }
        }
    };

    public IgbChatOptions Options = new IgbChatOptions
    {
        DisableAutoScroll = false,
        DisableInputAttachments = false,
        Suggestions = new string[] { "It's there. Thanks.", "It's not there." },
        InputPlaceholder = "Type your message here...",
        HeaderText = "Customer Support",
        Renderers = new IgbChatRenderers()
        {
            MessageHeaderScript = "OnMessageHeaderTemplate"
        }
    };

    public void OnMessageCreated(IgbChatMessageEventArgs e)
    {
        Messages = Messages.Append(e.Detail).ToArray();

        IgbChatMessage responseMessage = new IgbChatMessage()
        {
            Id = DateTime.Now.Ticks.ToString(),
            Text = "Our support team is currently unavailable. We'll get back to you as soon as possible.",
            Sender = "support",
            Timestamp = DateTime.Now.ToString()
        };
        Messages = Messages.Append(responseMessage).ToArray();
        this.Chat.DraftMessage = new IgbChatDraftMessage()
        {
            Text = "",
            Attachments = new IgbChatMessageAttachment[] { }
        };
    }

}
```

## Installation

To get started, install the Ignite UI for Blazor by running the following command:

```cmd
Install-Package IgniteUI.Blazor
```

Or via .NET CLI:

```cmd
dotnet add package IgniteUI.Blazor
```

Once installed, you can import the component in your project and register it so it becomes available as a custom element:

```cs
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbChatModule));
```

You will also need to link an additional CSS file to apply the styling to the `IgbChat` component.

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The CSS file includes one of our default themes. You can replace it with a different theme or create a custom one if you want the `IgbChat` to match your application’s branding.

## Usage

The simplest way to use the `IgbChat` is to declare it as follows:

```cs
 public IgbChatOptions Options = new IgbChatOptions()
 {
  CurrentUserId = "user",
  HeaderText = "Support Chat"
 };
```

```razor
<IgbChat @ref="Chat" Options="Options">
</IgbChat>
```

Here, the `currentUserId` property tells the component which messages are “outgoing” (sent by the current user) versus “incoming” (sent by others). The `headerText` provides a title for the chat window.

Once rendered, you can programmatically add messages:

```razor
<IgbChat @ref="Chat" Options="Options" Messages="Messages" MessageCreated="OnMessageCreated" Height="100%"></IgbChat>
```

```cs
 public IgbChatMessage[] Messages = new IgbChatMessage[]
 {
     new IgbChatMessage()
     }
 }
```

The `Messages` collection is updated automatically when the user sends a message. You can handle the `MessageCreated` event to persist the message or perform other side effects; do not append the event detail to `Messages` again:

```cs
public void OnMessageCreated(IgbChatMessageEventArgs e)
{
  Console.WriteLine($"Message created: {e.Detail.Text}");
}
```

This approach makes it easy to plug the Chat into your own data source, such as a server endpoint, a chatbot engine, or a collaborative app backend.

### Properties
The `IgbChat` component exposes several key properties that let you control its state and configuration:

| Name                                                                                                                                    | Description                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Messages`               | Bidirectional array of messages (`IgbChatMessage`[]) displayed in the chat. The Chat updates the supplied collection when the user sends a message.                  |
| `DraftMessage`       | The current unsent message, represented as an object containing `text` and optional `attachments`. This is useful for saving or restoring message drafts.                          |
| `Options`                 | Chat configuration (`IgbChatOptions`) such as current user ID, input placeholders, accepted file types, quick reply suggestions, typing delay, and custom renderers. |
| `ResourceStrings` | Localized resource strings for labels, headers, and system text. Use this property to adapt the component for different languages.                                                 |

These properties make it straightforward to synchronize the Chat’s UI with your application’s state and backend.

#### Bidirectional Messages Collection

The `Messages` collection is bidirectional: the application provides the messages to display, and the Chat updates the original collection as the conversation continues. After the user sends a message, code holding a reference to the collection can access the newly created message.

The `MessageCreated` event is a notification for persistence or other side effects. Do not append the created message to the collection again.

If the original collection must remain unchanged, pass the Chat a shallow copy. Existing message objects are still shared; create a new instance of each message when building the copied collection if those objects must also remain independent.

```cs
IgbChatMessage[] chatMessages = originalMessages.ToArray();
```

```razor
<IgbChat Messages="chatMessages" Options="Options"></IgbChat>
```

### Suggestions
Quick reply suggestions provide users with pre-defined responses they can tap to reply instantly. This feature is particularly useful in chatbots, customer service flows, or when guiding users through a structured process.
You can provide suggestions by binding an array of strings to the suggestions property. The `suggestions-position` attribute lets you control where they are displayed: either below the input area or below the messages list.

```cs
public IgbChatOptions Options = new IgbChatOptions
{
  CurrentUserId = "me",
  Suggestions = new string[] { "Yes", "No", "Maybe later" },
  SuggestionsPosition = ChatSuggestionsPosition.BelowInput
};
```

This approach helps streamline user interactions by reducing the need to type repetitive answers and improves the overall experience in guided conversations.

### Typing Indicator
Conversations feel more natural when participants can see that the other person is typing. The Chat component provides this behavior through the `isTyping` property of the options object.
When set to true, the chat shows a subtle typing indicator below the messages:

```cs
public IgbChatOptions Options = new IgbChatOptions
{
  IsTyping = true
};
```

This feature is typically toggled programmatically, for example when receiving a typing event from your backend service.

### Custom Renderers
While the Chat component works out of the box with its default UI, many applications need to customize the look and feel. For example, you might want to add read receipts, display avatars, or replace the input area with a voice recording button.
The `IgbChat` component addresses this need with a renderer system. A renderer is simply a function that returns a template for a given part of the UI. You can override as many or as few renderers as you like.

#### ChatTemplateRenderer
Every renderer follows the same function signature:

```js
igRegisterScript("MyTemplate", (ctx) => {
}, false);
```

The ctx parameter provides different contextual data depending on what is being rendered.

#### Renderer Contexts

| Context Type                | Provided Data                                                                                                          |
| --------------------------- | -----------------------------------------------------------------------------------------------------------------------|
| `IgbChatRenderContext`       | `instance` (the chat component instance).                                                |
| `IgbChatInputRenderContext`      | Inherits `IgbChatRenderContext` and adds `attachments` (array of `IgbChatMessageAttachment`) and `value` (current input text). |
| `IgbChatMessageRenderContext`    | Inherits `IgbChatRenderContext` and adds `IgbChatMessage` (the `IgbChatMessage` being rendered).                                      |
| `IgbChatAttachmentRenderContext` | Inherits `IgbChatMessageRenderContext` and adds `attachment` (the `IgbChatMessageAttachment` being rendered).                      |

#### Available Renderers

The following parts of the Chat can be customized:
- Message-level: message, messageHeader, messageContent, messageAttachments, messageActions
- Attachment-level: attachment, attachmentHeader, attachmentContent
- Input-level: input, inputActions, inputActionsStart, inputActionsEnd, inputAttachments, fileUploadButton, sendButton
- Suggestions: suggestionPrefix

This level of granularity means you can tweak just one part (for example, how attachments look) without rewriting the entire chat layout.

#### Example: Custom Message Content
This example shows how to replace the message bubble with your own template:

```cs
public IgbChatOptions Options = new IgbChatOptions
{
    Renderers = new IgbChatRenderers()
    {
        MessageContentScript = "MessageContentScript"
    }
};
```

```js
igRegisterScript("MessageContentScript", (ctx) => {
    var html = window.igTemplating.html;
    return  html`<div class="bubble custom">${ctx.message.text}</div>`;
}, false);

```

#### Example: Custom Input Area
By default, the chat input is a text area. You can override it to provide a more tailored experience, such as adding a voice input button:

```cs
public IgbChatOptions Options = new IgbChatOptions
{
    Renderers = new IgbChatRenderers()
    {
        InputScript = "InputTemplate"
    }
};
```

```js
igRegisterScript("InputTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<textarea placeholder=${ctx.instance?.options?.inputPlaceholder || 'Type here...'}>${ctx.value}</textarea>
    <button @click=${() => alert('Voice input!')}>🎤</button>`;
}, false);
```

#### Example: Extending Input Actions
The `IgbChat` component provides two renderers which are useful when you want to keep the default actions (upload and send) but extend them with additional controls:
- `inputActionsStart` – allows you to inject custom content after the built-in upload button.
- `inputActionsEnd` – allows you to inject custom content after the built-in send button.

For example, you might want to add a voice recording button before the other buttons, or a menu of extra options after the send button.
In the following example, the default upload button is preserved, but we add a microphone button next to it. On the other end, we remove the default send button and replace it with a custom Ask button and a “more” menu:

```cs
public IgbChatOptions Options = new IgbChatOptions
{
  Renderers = new IgbChatRenderers()
  {
    InputActionsStartScript = "InputActionsStartTemplate",
    InputActionsEndScript = "InputActionsEndTemplate",
    SendButtonScript = "SendButtonTemplate"
  }
};
```

```js
igRegisterScript("SendButtonTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html``;
}, false);


igRegisterScript("InputActionsStartTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<igc-icon-button variant="flat">🎤</igc-icon-button>`;
}, false);

igRegisterScript("InputActionsEndTemplate", (ctx) => {
    var html = window.igTemplating.html;
    return html`<div>
    <igc-button @click=${() => handleCustomSendClick(ctx.instance)}>Ask</igc-button>
    <igc-icon-button variant="flat" name="more_horiz"></igc-icon-button>
  </div>`;
}, false);
```

In this setup:

- A microphone button is added after it (inputActionsStart).
- The default send button is removed and replaced with a custom Ask button and a “more” icon (inputActionsEnd).

This approach gives you full flexibility over the chat input bar, letting you add, remove, or reorder actions without rebuilding the input area from scratch.

### Events
To integrate with your application logic, the Chat component emits a set of events:

- MessageCreated – when a new message is created.
- MessageReact – when a message is reacted to.
- TypingChange – when typing status changes.
- InputFocus / onInputBlur – input focus events.
- InputChange – when the input value changes.

You can listen for these events and sync them with your backend:

```razor
<IgbChat MessageCreated="OnMessageCreated"></IgbChat>
```

```cs
public void OnMessageCreated(IgbChatMessageEventArgs e)
{
  Console.WriteLine($"Message: {e.Detail.Text}");
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbChat @ref="Chat" Options="Options" Messages="Messages" MessageCreated="OnMessageCreated" Height="100%"></IgbChat>
</div>

@code {
    public IgbChat Chat;
    public IgbChatMessage[] Messages = new IgbChatMessage[]
    {
        new IgbChatMessage()
        },
        new IgbChatMessage()
        {
          Id = "2",
          Text = "Hello. I have problem with styling IgcAvatarComponent. Can you take a look at the attached file and help me?",
          Sender = "user",
          Timestamp = (DateTime.Now - TimeSpan.FromMilliseconds(3400000)).ToString(),
          Attachments = new IgbChatMessageAttachment[]
          {
            new IgbChatMessageAttachment()
            }
          }
        },
        new IgbChatMessage()
        {
          Id = "3",
          Text = "Sure, give me a moment to check the file.",
          Sender = "support",
          Timestamp = (DateTime.Now - TimeSpan.FromMilliseconds(3300000)).ToString()
        },
        new IgbChatMessage()
        {
          Id = "4",
          Text =
          @"
            Thank you for your patience. It seems that the issue is the name of the CSS part. Here is the fixed file:
           ",
          Sender = "support",
          Timestamp = (DateTime.Now - TimeSpan.FromMilliseconds(3200000)).ToString(),
           Attachments = new IgbChatMessageAttachment[]
          {
            new IgbChatMessageAttachment()
            }
          }
        }
    };

    public IgbChatOptions Options = new IgbChatOptions
    {
        DisableAutoScroll = false,
        DisableInputAttachments = false,
        InputPlaceholder = "Type your message here...",
        HeaderText = "Developer Support",
        SuggestionsPosition = ChatSuggestionsPosition.BelowInput,
        Renderers = new IgbChatRenderers()
        {
            MessageHeaderScript = "OnMessageHeaderTemplate",
            SuggestionPrefixScript = "OnSuggestionPrefixTemplate"
        },
        Suggestions = new string[] { "Send me an e-mail when support is available." }
    };

    public void OnMessageCreated(IgbChatMessageEventArgs e)
    {
        Messages = Messages.Append(e.Detail).ToArray();

        IgbChatMessage responseMessage = new IgbChatMessage()
        {
            Id = DateTime.Now.Ticks.ToString(),
            Text = "Our support team is currently unavailable. We'll get back to you as soon as possible.",
            Sender = "support",
            Timestamp = DateTime.Now.ToString()
        };
        Messages = Messages.Append(responseMessage).ToArray();
        this.Chat.DraftMessage = new IgbChatDraftMessage()
        {
            Text = "",
            Attachments = new IgbChatMessageAttachment[] { }
        };
    }
}
```

## Styling

The `IgbChat` component exposes both **CSS parts** and **slots** for fine-grained customization of its appearance and structure.

### CSS Parts

| Part name                       | Description                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------------ |
| "chat-container"                | Styles the main chat container.                                                      |
| "header"                        | Styles the chat header container.                                                    |
| "prefix"                        | Styles the element before the chat title (e.g., avatar).                             |
| "title"                         | Styles the chat header title.                                                        |
| "message-area-container"        | Styles the container holding the messages and (optional) suggestions.                |
| "message-list"                  | Styles the message list container.                                                   |
| "message-item"                  | Styles each message wrapper.                                                         |
| "typing-indicator"              | Styles the typing indicator container.                                               |
| "typing-dot"                    | Styles individual typing indicator dots.                                             |
| "suggestions-container"         | Styles the container holding all suggestions.                                        |
| "suggestions-header"            | Styles the suggestions header.                                                       |
| "suggestion"                    | Styles each suggestion item.                                                         |
| "suggestion-prefix"             | Styles the icon or prefix in a suggestion.                                           |
| "suggestion-title"              | Styles the text/title of a suggestion.                                               |
| "empty-state"                   | Styles the empty state container when there are no messages.                         |
| "input-area-container"          | Styles the wrapper around the chat input area.                                       |
| "input-container"               | Styles the main input container.                                                     |
| "input-attachments-container"   | Styles the container for attachments in the input.                                   |
| "input-attachment-container"    | Styles a single attachment in the input area.                                        |
| "input-attachment-name"         | Styles the file name of an attachment.                                               |
| "input-attachment-icon"         | Styles the icon of an attachment.                                                    |
| "text-input"                    | Styles the text input field for typing messages.                                     |
| "input-actions-container"       | Styles the container for input actions.                                              |
| "input-actions-start"           | Styles the group of actions at the start of the input after the default file upload. |
| "input-actions-end"             | Styles the group of actions at the end of the input.                                 |
| "file-upload-container"         | Styles the container for the file upload input.                                      |
| "file-upload"                   | Styles the file upload input itself.                                                 |
| "send-button-container"         | Styles the container around the send button.                                         |
| "send-button"                   | Styles the send button.                                                              |
| "message-container"             | Styles the container of a single message.                                            |
| "message-list (forwarded)"      | Styles the internal list of messages.                                                |
| "message-header"                | Styles the header of a message (e.g., sender, timestamp).                            |
| "message-content"               | Styles the text content of a message.                                                |
| "message-attachments-container" | Styles the container for message attachments.                                        |
| "message-attachment"            | Styles a single message attachment.                                                  |
| "message-actions-container"     | Styles the container holding message actions.                                        |
| "message-sent"                  | Styles messages marked as sent by the current user.                                  |
| "attachment-header"             | Styles the header of an attachment block.                                            |
| "attachment-content"            | Styles the content of an attachment block.                                           |
| "attachment-icon"               | Styles the icon of an attachment.                                                    |
| "file-name"                     | Styles the file name shown in an attachment.                                         |

### Slots

| Slot name             | Description                                                              |
| --------------------- | ------------------------------------------------------------------------ |
| "prefix"              | Slot for injecting content (e.g., avatar or icon) before the chat title. |
| "title"               | Slot for overriding the chat title content.                              |
| "actions"             | Slot for injecting header actions (e.g., buttons, menus).                |
| "suggestions-header"  | Slot for rendering a custom header for the suggestions list.             |
| "suggestions"         | Slot for rendering a custom list of quick reply suggestions.             |
| "suggestions-actions" | Slot for rendering additional actions.                                   |
| "suggestion"          | Slot for rendering a single suggestion item.                             |
| "empty-state"         | Slot shown when there are no messages.                                   |

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
- `<link>` elements – For larger stylesheets, inject them inside the Shadow DOM.
- Inline `<style>` tags – For small, scoped style overrides.

#### Example

```css
igc-chat::part(header) {
  background-color: var(--ig-gray-800);
  color: var(--ig-warn-400);
}

igc-chat::part(message-container) {
  background: var(--ig-warn-200);
  color: var(--ig-warn-200-contrast);
}

igc-chat::part(message-sent) {
  background: var(--ig-warn-500);
  color: var(--ig-warn-500-contrast);
}

igc-chat::part(message-header) {
  color: var(--ig-warn-A700); 
}
```

This allows you to style the `IgbChat` to match your brand without replacing its functionality.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical chatCustom">
    <IgbChat @ref="Chat" Options="Options" Messages="Messages" MessageCreated="OnMessageCreated" Height="100%"></IgbChat>
</div>

@code {
    public IgbChat Chat;
    public IgbChatMessage[] Messages = new IgbChatMessage[]
    {
        new IgbChatMessage()
        },
        new IgbChatMessage() {
          Id = "2",
          Text = "Hello! I can help with that. What is your question regarding order #7890?",
          Sender = "support",
          Timestamp = (DateTime.Now - TimeSpan.FromMilliseconds(3400000)).ToString()
        },
        new IgbChatMessage() {
          Id = "3",
          Text = "The tracking status shows 'delivered', but I haven't received it yet. Can you confirm the delivery location?",
          Sender = "user",
          Timestamp = (DateTime.Now - TimeSpan.FromMilliseconds(3300000)).ToString()
        },
        new IgbChatMessage() {
          Id = "4",
          Text = "I've reviewed the delivery details. It seems the package was left in a different spot. Here's a photo from our delivery driver showing where it was placed. Please check your porch and side door.",
          Sender = "support",
          Timestamp = (DateTime.Now - TimeSpan.FromMilliseconds(3200000)).ToString(),
          Attachments = new IgbChatMessageAttachment[]
          {
                new IgbChatMessageAttachment()
                }
            }
        }
    };

    public IgbChatOptions Options = new IgbChatOptions
    {
        DisableAutoScroll = false,
        DisableInputAttachments = false,
        Suggestions = new string[] { "It's there. Thanks.", "It's not there." },
        InputPlaceholder = "Type your message here...",
        HeaderText = "Customer Support",
        Renderers = new IgbChatRenderers()
        {
            MessageHeaderScript = "OnMessageHeaderTemplate"
        }
    };

    public void OnMessageCreated(IgbChatMessageEventArgs e)
    {
        Messages = Messages.Append(e.Detail).ToArray();
    }

}
```

## API Reference

- `IgbChat`
- `IgbChatOptions`
- `IgbChatMessage`
- `IgbChatMessageAttachment`
- `IgbChatRenderers`
- `IgbChatTemplateRenderer`
- [Styling & Themes](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

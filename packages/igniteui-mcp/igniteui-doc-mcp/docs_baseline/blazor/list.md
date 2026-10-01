---
title: "Blazor List Component | Infragistics"
description: Infragistics' Blazor List component helps you with presenting a group of items. Learn how Ignite UI for Blazor can help you better display your data!
keywords: "Blazor List, Item List, overview, Ignite UI for Blazor, data binding, Infragistics"
license: MIT
mentionedTypes: ["List", "ListHeader", "ListItem", "Avatar", "Button", "RadioGroup", "Radio"]
llms:
  description: "The Ignite UI for Blazor List element is extremely useful when presenting a group of items."
_tocName: List
---
# Blazor List Overview

The Ignite UI for Blazor List element is extremely useful when presenting a group of items. You can create a simple list of textual items, or a more complex one, containing an array of different layout elements. The [`IgbList`](mcp:get_api_reference?platform=blazor&component=IgbList) component displays rows of items and supports one or more headers as well. Each list item is completely templatable and will support any valid HTML or other components.

## Blazor List Example

The following example represents a list populated with contacts with a name and a phone number properties. The [`IgbList`](mcp:get_api_reference?platform=blazor&component=IgbList) component demonstrated below uses the [`IgbAvatar`](mcp:get_api_reference?platform=blazor&component=IgbAvatar) and [`IgbButton`](mcp:get_api_reference?platform=blazor&component=IgbButton) elements to enrich the user experience and expose the capabilities of setting avatar picture and buttons for text and call actions.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbRadioGroup Alignment="@ContentOrientation.Horizontal">
        <IgbRadio name="size" Value="Small" label-position="after" Change="OnRadioOptionClick">Small</IgbRadio>
        <IgbRadio name="size" Value="Medium" label-position="after" Checked="true" Change="OnRadioOptionClick">Medium</IgbRadio>
        <IgbRadio name="size" Value="Large" label-position="after" Change="OnRadioOptionClick">Large</IgbRadio>
    </IgbRadioGroup>

    <IgbList style="margin-top: 10px;" class="@ListSize">
        <IgbListHeader>Contacts</IgbListHeader>
        <IgbListItem>
            <IgbAvatar slot="start" src="https://dl.infragistics.com/x/img/avatars/8.jpg" Shape="@AvatarShape.Circle"/>
            <span slot="title">Terrance Orta</span>
            <span slot="subtitle">770-504-2217</span>
            <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Text</IgbButton>
            <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Call</IgbButton>
        </IgbListItem>
        <IgbListItem>
            <IgbAvatar slot="start" src="https://dl.infragistics.com/x/img/avatars/17.jpg" Shape="@AvatarShape.Circle"/>
            <span slot="title">Richard Mahoney</span>
            <span slot="subtitle">423-676-2869</span>
            <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Text</IgbButton>
            <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Call</IgbButton>
        </IgbListItem>
        <IgbListItem>
            <IgbAvatar slot="start" src="https://dl.infragistics.com/x/img/avatars/9.jpg" Shape="@AvatarShape.Circle"/>
            <span slot="title">Donna Price</span>
            <span slot="subtitle">859-496-2817</span>
            <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Text</IgbButton>
            <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Call</IgbButton>
        </IgbListItem>
    </IgbList>
</div>

@code {

    public string ListSize { get; set; } = "size-medium";

    public void OnRadioOptionClick(IgbRadioChangeEventArgs e)
    {
        this.ListSize = $"size-{e.Detail.Value.ToLower()}";
    }
}
```

## Usage

At its core the list web component allows you to easily display a vertical list of items.

Before using the [`IgbList`](mcp:get_api_reference?platform=blazor&component=IgbList), you need to register it as follows:

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbListModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbList`](mcp:get_api_reference?platform=blazor&component=IgbList) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

### Add List Items

Now, we can add the following code to get a simple list of items:

```razor
<IgbList>
  <IgbListHeader>Header</IgbListHeader>
  <IgbListItem>
    <span slot="title">Item 1</span>
  </IgbListItem>
  <IgbListItem>
    <span slot="title">Item 2</span>
  </IgbListItem>
  <IgbListItem>
    <span slot="title">Item 3</span>
  </IgbListItem>
</IgbList>
```

If all went well, you should see the following in your browser:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbList>
        <IgbListHeader>Header</IgbListHeader>
        <IgbListItem>
            <span slot="title">Item 1</span>
        </IgbListItem>
        <IgbListItem>
            <span slot="title">Item 2</span>
        </IgbListItem>
        <IgbListItem>
            <span slot="title">Item 3</span>
        </IgbListItem>
    </IgbList>
</div>

@code {

}
```

Let's up our game a bit and enhance our list items. Say we want to create a list of contacts with a name and a phone number displayed under the name. To achieve that we can use some of the slots that come with the list items as demonstrated in the next example:

```razor
<IgbList>
  <IgbListHeader>
    <h1>Contacts</h1>
  </IgbListHeader>
  <IgbListItem>
    <span slot="title">Terrance Orta</span>
    <span slot="subtitle">770-504-2217</span>
  </IgbListItem>
  <IgbListItem>
    <span slot="title">Richard Mahoney</span>
    <span slot="subtitle">423-676-2869</span>
  </IgbListItem>
  <IgbListItem>
    <span slot="title">Donna Price</span>
    <span slot="subtitle">859-496-2817</span>
  </IgbListItem>
</IgbList>
```

After implementing the above code, our list component should now look like the following:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbList>
        <IgbListHeader>Contacts</IgbListHeader>
        <IgbListItem>
            <span slot="title">Terrance Orta</span>
            <span slot="subtitle">770-504-2217</span>
        </IgbListItem>
        <IgbListItem>
            <span slot="title">Richard Mahoney</span>
            <span slot="subtitle">423-676-2869</span>
        </IgbListItem>
        <IgbListItem>
            <span slot="title">Donna Price</span>
            <span slot="subtitle">859-496-2817</span>
        </IgbListItem>
    </IgbList>
</div>

@code {

}
```

### Adding Avatar and Buttons

We can use some of our other components in conjunction with the [`IgbList`](mcp:get_api_reference?platform=blazor&component=IgbList) component to enrich the experience and add some functionality. We can have a nice picture avatar to the left of the name and phone values. Additionally, we can add some buttons to the right of them to allow the user to text and call contacts, so let's update our contacts list component to show the avatar and the buttons. We can do that by using some of the list item's slots.

```razor
<IgbList>
  <IgbListHeader>
    <h1>Contacts</h1>
  </IgbListHeader>
  <IgbListItem>
    <IgbAvatar slot="start" src="https://static.infragistics.com/xplatform/images/avatars/8.jpg" Shape="@AvatarShape.Circle"/>
    <span slot="title">Terrance Orta</span>
    <span slot="subtitle">770-504-2217</span>
    <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Text</IgbButton>
    <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Call</IgbButton>
  </IgbListItem>
  <IgbListItem>
    <IgbAvatar slot="start" src="https://static.infragistics.com/xplatform/images/avatars/17.jpg" Shape="@AvatarShape.Circle"/>
    <span slot="title">Richard Mahoney</span>
    <span slot="subtitle">423-676-2869</span>
    <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Text</IgbButton>
    <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Call</IgbButton>
  </IgbListItem>
  <IgbListItem>
    <IgbAvatar slot="start" src="https://static.infragistics.com/xplatform/images/avatars/9.jpg" Shape="@AvatarShape.Circle"/>
    <span slot="title">Donna Price</span>
    <span slot="subtitle">859-496-2817</span>
    <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Text</IgbButton>
    <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Call</IgbButton>
  </IgbListItem>
</IgbList>
```

The `start` slot is meant to be used for adding some kind of media before all other content of our list items. The target element, in our case the [`IgbAvatar`](mcp:get_api_reference?platform=blazor&component=IgbAvatar) component, will also be provided with a default position and spacing.

The `end` slot is meant to be used for list items that have some kind of action or metadata, represented, for example, by a switch, a button, a checkbox, etc. We will use [`IgbButton`](mcp:get_api_reference?platform=blazor&component=IgbButton) components.

Let's also allow the user to change the size of the list using the `--ig-size` CSS variable. We will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size of the list.

```razor
<IgbRadioGroup Alignment="@ContentOrientation.Horizontal">
  <IgbRadio Value="Small" label-position="after" Change="OnRadioOptionClick">Small</IgbRadio>
  <IgbRadio Value="Medium" label-position="after" Change="OnRadioOptionClick">Medium</IgbRadio>
  <IgbRadio Value="Large" label-position="after" Checked="true" Change="OnRadioOptionClick">Large</IgbRadio>
</IgbRadioGroup>

<IgbList style="margin-top: 10px;" Size="@ListSize" />

@code {
  public SizableComponentSize ListSize { get; set; }

  public void OnRadioOptionClick(IgbComponentBoolValueChangedEventArgs e)
  {
    IgbRadio radio = e.Parent as IgbRadio;
    switch (radio.Value)
    {
      case "Small":
      {
        this.ListSize = SizableComponentSize.Small;
        break;
      }
      case "Medium":
      {
        this.ListSize = SizableComponentSize.Medium;
        break;
      }
      case "Large":
      {
        this.ListSize = SizableComponentSize.Large;
        break;
      }
    }
  }
}
```

The result of implementing the above code should look like the following:

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbRadioGroup Alignment="@ContentOrientation.Horizontal">
        <IgbRadio name="size" Value="Small" label-position="after" Change="OnRadioOptionClick">Small</IgbRadio>
        <IgbRadio name="size" Value="Medium" label-position="after" Checked="true" Change="OnRadioOptionClick">Medium</IgbRadio>
        <IgbRadio name="size" Value="Large" label-position="after" Change="OnRadioOptionClick">Large</IgbRadio>
    </IgbRadioGroup>

    <IgbList style="margin-top: 10px;" class="@ListSize">
        <IgbListHeader>Contacts</IgbListHeader>
        <IgbListItem>
            <IgbAvatar slot="start" src="https://dl.infragistics.com/x/img/avatars/8.jpg" Shape="@AvatarShape.Circle"/>
            <span slot="title">Terrance Orta</span>
            <span slot="subtitle">770-504-2217</span>
            <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Text</IgbButton>
            <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Call</IgbButton>
        </IgbListItem>
        <IgbListItem>
            <IgbAvatar slot="start" src="https://dl.infragistics.com/x/img/avatars/17.jpg" Shape="@AvatarShape.Circle"/>
            <span slot="title">Richard Mahoney</span>
            <span slot="subtitle">423-676-2869</span>
            <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Text</IgbButton>
            <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Call</IgbButton>
        </IgbListItem>
        <IgbListItem>
            <IgbAvatar slot="start" src="https://dl.infragistics.com/x/img/avatars/9.jpg" Shape="@AvatarShape.Circle"/>
            <span slot="title">Donna Price</span>
            <span slot="subtitle">859-496-2817</span>
            <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Text</IgbButton>
            <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Call</IgbButton>
        </IgbListItem>
    </IgbList>
</div>

@code {

    public string ListSize { get; set; } = "size-medium";

    public void OnRadioOptionClick(IgbRadioChangeEventArgs e)
    {
        this.ListSize = $"size-{e.Detail.Value.ToLower()}";
    }
}
```

### Recommended Elements for Slots

When slotting content into the `title` and `subtitle` slots, we recommend using `<span>` elements rather than heading elements (`<h1>`–`<h6>`). Heading elements carry built-in styling (such as font size, line height, and margins) that can interfere with the component's intended typography and layout. Using a `<span>` provides a neutral container that inherits the component's styles cleanly.

To achieve the best results, we recommend using the [`<igc-avatar>`](../layouts/avatar.md) component for the `start` slot, which is intended for media content. For the `end` slot, which is intended to be used for actions, we recommend using components such as [`<igc-button>`](../inputs/button.md), [`<igc-switch>`](../inputs/switch.md), [`<igc-checkbox>`](../inputs/checkbox.md), etc., depending on the type of content you want to display. However, for those two slots, you can also use plain HTML elements, such as `<img>` for the `start` slot and `<button>` or another interactive element for the `end` slot, as long as they are appropriate for the content you want to display.

```razor
<IgbList>
  <IgbListHeader>Title</IgbListHeader>
  <IgbListItem>
    <IgbAvatar slot="start" src="https://randomuser.me/api/portraits/men/27.jpg"/>
    <span slot="title">Terrance Orta</span>
    <span slot="subtitle">770-504-2217</span>
    <IgbButton slot="end" Variant="@ButtonVariant.Outlined">Call</IgbButton>
  </IgbListItem>
</IgbList>
```

## Styling

The [`IgbList`](mcp:get_api_reference?platform=blazor&component=IgbList) exposes several CSS parts, giving you full control over its style:

|Name|Description|
|--|--|
| `start` | The start container. |
| `end` | The end container. |
| `content` | The header and custom content container. |
| `header` | The title and subtitle container. |
| `title` | The title container. |
| `subtitle` | The subtitle container. |

```css
igc-list-header {
  font-size: 20px;
  font-weight: 700;
  color: var(--ig-primary-700);
}

igc-list-item::part(title) {
  font-size: 18px;
  color: var(--ig-primary-600);
}

igc-list-item::part(subtitle) {
  color: var(--ig-primary-300);
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <style>
        igc-list-header {
            font-size: 1.25rem;
            font-weight: 700;
            color: #3f51b5;
        }

        igc-list-item::part(title) {
            font-size: 1.125rem;
            color: #3f51b5;
        }

        igc-list-item::part(subtitle) {
            color: #0099ff;
        }

        igc-list-item::part(end) {
            --igc-secondary-500: 230,48%,47%;
        }
    </style>

    <IgbList>
        <IgbListHeader>Contacts</IgbListHeader>
        <IgbListItem>
            <IgbAvatar slot="start" src="https://dl.infragistics.com/x/img/avatars/8.jpg" Shape="@AvatarShape.Circle" />
            <span slot="title">Terrance Orta</span>
            <span slot="subtitle">770-504-2217</span>
            <IgbButton slot="end" Variant="@ButtonVariant.Contained">Text</IgbButton>
            <IgbButton slot="end" Variant="@ButtonVariant.Contained">Call</IgbButton>
        </IgbListItem>
        <IgbListItem>
            <IgbAvatar slot="start" src="https://dl.infragistics.com/x/img/avatars/17.jpg" Shape="@AvatarShape.Circle"/>
            <span slot="title">Richard Mahoney</span>
            <span slot="subtitle">423-676-2869</span>
            <IgbButton slot="end" Variant="@ButtonVariant.Contained">Text</IgbButton>
            <IgbButton slot="end" Variant="@ButtonVariant.Contained">Call</IgbButton>
        </IgbListItem>
        <IgbListItem>
            <IgbAvatar slot="start" src="https://dl.infragistics.com/x/img/avatars/9.jpg" Shape="@AvatarShape.Circle"/>
            <span slot="title">Donna Price</span>
            <span slot="subtitle">859-496-2817</span>
            <IgbButton slot="end" Variant="@ButtonVariant.Contained">Text</IgbButton>
            <IgbButton slot="end" Variant="@ButtonVariant.Contained">Call</IgbButton>
        </IgbListItem>
    </IgbList>
</div>

@code {

}
```

In this article we covered a lot of ground with the [`IgbList`](mcp:get_api_reference?platform=blazor&component=IgbList) component. First, we created a simple list with text items. Then, we created a list of contact items and added functionality to them by using some additional Ignite UI for Blazor components, like the [`IgbAvatar`](mcp:get_api_reference?platform=blazor&component=IgbAvatar) and [`IgbButton`](mcp:get_api_reference?platform=blazor&component=IgbButton). Finally, we changed the component's appearance through the exposed CSS parts.

## API References

[`IgbAvatar`](mcp:get_api_reference?platform=blazor&component=IgbAvatar)<br />
[`IgbButton`](mcp:get_api_reference?platform=blazor&component=IgbButton)<br />
[`IgbRadioGroup`](mcp:get_api_reference?platform=blazor&component=IgbRadioGroup)<br />
[`IgbRadio`](mcp:get_api_reference?platform=blazor&component=IgbRadio)<br />
[`IgbListHeader`](mcp:get_api_reference?platform=blazor&component=IgbListHeader)<br />
[`IgbListItem`](mcp:get_api_reference?platform=blazor&component=IgbListItem)<br />
[`IgbList`](mcp:get_api_reference?platform=blazor&component=IgbList)<br />

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

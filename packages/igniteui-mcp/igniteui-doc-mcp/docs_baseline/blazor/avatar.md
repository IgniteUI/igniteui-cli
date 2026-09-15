---
title: Blazor Avatar | Layout Controls | Infragistics
_description: Use Infragistics' Blazor avatar component to display an image, icon, or initials.
_keywords: avatar, layout, Ignite UI for Blazor, Infragistics
_license: MIT
mentionedTypes: ["Avatar"]
_tocName: Avatar
---

# Blazor Avatar

The Ignite UI for Blazor Avatar helps to display initials, images, or icons in your application.

## Blazor Icon Avatar Example



<div class="divider--half"></div>

## Usage

Before using the [`IgbAvatar`](mcp:get_api_reference?platform=blazor&component=IgbAvatar), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbAvatarModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbAvatar`](mcp:get_api_reference?platform=blazor&component=IgbAvatar) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

The [`IgbAvatar`](mcp:get_api_reference?platform=blazor&component=IgbAvatar) is capable of displaying images, initials, or any other content, including icons. Declaring an [`IgbAvatar`](mcp:get_api_reference?platform=blazor&component=IgbAvatar) is as simple as:

```razor
<IgbAvatar />
```

The avatar has several attributes that allow rendering different content based on the context. The most basic way to display content in the boundaries of the avatar is to provide content between the opening and closing tags.

```razor
<IgbAvatar>
  <IgbIcon Name="home" />
</IgbAvatar>
```

### Initials

If the [`Initials`](mcp:get_api_reference?platform=blazor&component=IgbAvatar&member=Initials) attribute is set all children elements of the avatar will be ignored and the string passed to this attribute will be displayed.

```razor
<!-- Initials("AZ") will be displayed instead of the icon. -->

<IgbAvatar Initials="AZ">
  <IgbIcon Name="home" />
</IgbAvatar>
```



### Image

The avatar can also display an image when the [`Src`](mcp:get_api_reference?platform=blazor&component=IgbAvatar&member=Src) attribute is assigned a valid URL to a static asset. In that case the [`Initials`](mcp:get_api_reference?platform=blazor&component=IgbAvatar&member=Initials) value will be ignored and children elements will not be rendered.

```razor
<IgbAvatar Initials="AZ"
           Src="https://static.infragistics.com/xplatform/images/people/GUY01.png"
           Alt="A photo of a man.">
  <IgbIcon Name="home" />
</IgbAvatar>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbAvatar Alt="A photo of a man." Src="https://dl.infragistics.com/x/img/people/men/01.png" />
</div>

@code {

}
```

### Shape

The avatar supports three shapes - `circle`, `rounded`, and `square`. The default shape of the avatar is `square` and it can be changed via the `shape` attribute.

```razor
@using IgniteUI.Blazor.Controls

<div class="avatar-shape-sample">
    <IgbAvatar
        Shape="@AvatarShape.Circle"
        Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png"
        Alt="A profile photo of a man." />
    <IgbBadge
        Dot="true"
        Outlined="true"
        Variant="@StyleVariant.Success" />
    <span>Circle</span>

    <IgbAvatar Shape="@AvatarShape.Square">
        <IgbIcon @ref="MailIconRef" IconName="mail" Collection="material" />
    </IgbAvatar>
    <IgbBadge
        Outlined="true"
        Shape="@BadgeShape.Square"
        Variant="@StyleVariant.Info">
        2
    </IgbBadge>
    <span>Square</span>

    <IgbAvatar
        Shape="@AvatarShape.Rounded"
        Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png"
        Alt="A profile photo of a man." />
    <IgbBadge
        Outlined="true"
        Shape="@BadgeShape.Rounded"
        Variant="@StyleVariant.Success">
        <IgbIcon @ref="CheckIconRef" IconName="check" Collection="material" />
    </IgbBadge>
    <span>Rounded</span>
</div>

@code {
    private const string MailIcon =
        "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z\"/></svg>";

    private const string CheckIcon =
        "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"m9 16.17-4.17-4.17-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z\"/></svg>";

    public IgbIcon MailIconRef { get; set; }
    public IgbIcon CheckIconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            if (MailIconRef != null)
            {
                await MailIconRef.EnsureReady();
                await MailIconRef.RegisterIconFromTextAsync("mail", MailIcon, "material");
            }

            if (CheckIconRef != null)
            {
                await CheckIconRef.EnsureReady();
                await CheckIconRef.RegisterIconFromTextAsync("check", CheckIcon, "material");
            }
        }
    }
}
```

### Size

Apart from the shape, the size of the avatar can also be changed by utilizing the `--ig-size` CSS variable. The supported sizes are `small` (default), `medium`, and `large`. The following code snippet shows how to use a different component size:

```css
igc-avatar {
  --ig-size: var(--ig-size-large);
}
```

```razor
@using IgniteUI.Blazor.Controls

<div class="avatar-size-sample">
    <IgbAvatar
        Shape="@AvatarShape.Circle"
        Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-05.png"
        Alt="A profile photo of a man." />
    <IgbBadge
        Dot="true"
        Outlined="true"
        Variant="@StyleVariant.Success" />
    <span>Large</span>

    <IgbAvatar
        Shape="@AvatarShape.Circle"
        Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-03.png"
        Alt="A profile photo of a man." />
    <IgbBadge
        Dot="true"
        Outlined="true"
        Variant="@StyleVariant.Success" />
    <span>Medium</span>

    <IgbAvatar
        Shape="@AvatarShape.Circle"
        Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
        Alt="A profile photo of a man." />
    <IgbBadge
        Dot="true"
        Outlined="true"
        Variant="@StyleVariant.Success" />
    <span>Small</span>
</div>
```

### Styling

The [`IgbAvatar`](mcp:get_api_reference?platform=blazor&component=IgbAvatar) component exposes several CSS parts, giving you full control over its style:

|Name|Description|
|--|--|
| `base` | The base wrapper of the avatar. |
| `initials` | The initials wrapper of the avatar. |
| `image` | The image wrapper of the avatar. |
| `icon` | The icon wrapper of the avatar. |

```css
igc-avatar::part(base) {
  --size: 60px;
  color: var(--ig-success-500-contrast);
  background: var(--ig-success-500);;
  border-radius: 20px;
}
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <IgbIcon class="icon-registrar" @ref="IconRef" IconName="check" Collection="material" />
    <IgbList class="chat-list">
        @foreach (var group in Sections)
        {
            <IgbListHeader>@group.Header</IgbListHeader>

            @foreach (var item in group.Items)
            {
                <IgbListItem class="@(group.Header == "Chats" ? "chat-list-item--split" : "meeting-list-item")">
                    <div class="avatar-with-badge" slot="start">
                        <IgbAvatar
                            class="@GetAvatarClass(item)"
                            Shape=AvatarShape.Circle
                            Src="@item.Avatar.Src"
                            Initials="@item.Avatar.Initials"
                            Alt="@item.Avatar.Alt">
                            @if (!string.IsNullOrEmpty(item.Avatar.Icon))
                            {
                                <IgbIcon class="avatar-icon" IconName="@item.Avatar.Icon" Collection="material" />
                            }
                        </IgbAvatar>

                        @if (item.Badge != null)
                        {
                            <IgbBadge
                                class="@GetBadgeClass(item)"
                                Outlined="true"
                                Shape="@BadgeShape.Rounded"
                                Variant="@item.Badge.Variant">
                                <IgbIcon IconName="@item.Badge.Icon" Collection="material" />
                            </IgbBadge>
                        }
                    </div>
                    <span slot="title">@item.Title</span>
                    <span slot="subtitle">@item.Subtitle</span>
                    <div slot="end">@item.End</div>
                </IgbListItem>
            }
        }
    </IgbList>
</div>

@code {
    private const string CheckIcon =
        "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"m9 16.17-4.17-4.17-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z\"/></svg>";

    private const string CalendarIcon =
        "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V8H20V21Z\" fill=\"#424242\"/></svg>";

    private const string XIcon =
        "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"currentColor\"><path d=\"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z\"/></svg>";

    private const string HorizontalRuleIcon =
        "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#ffffff\"><path d=\"M160-440v-80h640v80H160Z\"/></svg>";

    private const string PeopleIcon =
        "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z\" fill=\"#424242\"/></svg>";

    private readonly List<AvatarListSection> Sections = new()
    {
        new AvatarListSection
        {
            Header = "Chats",
            Items = new List<AvatarListItem>
            {
                new AvatarListItem
                    },
                    Badge = new BadgeData
                    {
                        Icon = "check",
                        Variant = StyleVariant.Success
                    }
                },
                new AvatarListItem
                {
                    Title = "James Ford",
                    Subtitle = "I'll send the text and im ...",
                    End = "8:30 AM",
                    Avatar = new AvatarData
                    {
                        Initials = "JF",
                        Alt = "A profile photo of James Ford.",
                        ClassName = "avatar-muted"
                    },
                    Badge = new BadgeData
                    {
                        Icon = "x",
                        Variant = StyleVariant.Primary,
                        ClassName = "avatar-muted-badge"
                    }
                },
                new AvatarListItem
                {
                    Title = "Kate Porter",
                    Subtitle = "That's great!",
                    End = "Yesterday",
                    Avatar = new AvatarData
                    {
                        Src = "https://dl.infragistics.com/x/img/avatars/avatar-profile-08.png",
                        Alt = "A profile photo of Kate Porter."
                    },
                    Badge = new BadgeData
                    {
                        Icon = "horizontalRule",
                        Variant = StyleVariant.Danger
                    }
                }
            }
        },
        new AvatarListSection
        {
            Header = "Meetings",
            Items = new List<AvatarListItem>
            {
                new AvatarListItem
                    }
                },
                new AvatarListItem
                {
                    Title = "Design Discussion",
                    Subtitle = "https://www.infra.com",
                    End = "11:30 AM",
                    Avatar = new AvatarData
                    {
                        Icon = "people",
                        Alt = "Group Icon.",
                        ClassName = "avatar-meeting"
                    }
                }
            }
        }
    };

    private IgbIcon IconRef { get; set; }

    private string GetAvatarClass(AvatarListItem item)
    {
        return string.IsNullOrEmpty(item.Avatar.ClassName)
            ? "profile-avatar"
            : $"profile-avatar {item.Avatar.ClassName}";
    }

    private string GetBadgeClass(AvatarListItem item)
    {
        return string.IsNullOrEmpty(item.Badge?.ClassName)
            ? "avatar-status avatar-check-badge"
            : $"avatar-status avatar-check-badge {item.Badge.ClassName}";
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && IconRef != null)
        {
            await IconRef.EnsureReady();
            await IconRef.RegisterIconFromTextAsync("calendar", CalendarIcon, "material");
            await IconRef.RegisterIconFromTextAsync("check", CheckIcon, "material");
            await IconRef.RegisterIconFromTextAsync("x", XIcon, "material");
            await IconRef.RegisterIconFromTextAsync("horizontalRule", HorizontalRuleIcon, "material");
            await IconRef.RegisterIconFromTextAsync("people", PeopleIcon, "material");
        }
    }

    private class AvatarListSection
    {
        public string Header { get; set; }
        public List<AvatarListItem> Items { get; set; }
    }

    private class AvatarListItem
    {
        public string Title { get; set; }
        public string Subtitle { get; set; }
        public string End { get; set; }
        public AvatarData Avatar { get; set; }
        public BadgeData Badge { get; set; }
    }

    private class AvatarData
    {
        public string Src { get; set; }
        public string Icon { get; set; }
        public string Initials { get; set; }
        public string Alt { get; set; }
        public string ClassName { get; set; }
    }

    private class BadgeData
    {
        public string Icon { get; set; }
        public StyleVariant Variant { get; set; }
        public string ClassName { get; set; }
    }
}
```

<div class="divider--half"></div>

## API References

- [`IgbAvatar`](mcp:get_api_reference?platform=blazor&component=IgbAvatar)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

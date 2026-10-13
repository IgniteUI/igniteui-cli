---
title: "Blazor Avatar Component | Layouts | Infragistics"
description: "Use the Blazor Avatar component to represent users, entities, or objects with images, initials, icons, or custom content."
keywords: "Blazor Avatar, avatar component, profile image, initials, Ignite UI for Blazor, Infragistics"
last_updated: "2026-07-29"
license: MIT
mentionedTypes: ["Avatar", "Badge", "Icon"]
relatedComponents: ["Badge"]
llms:
  description: "The Ignite UI for Blazor Avatar topic shows how to render user, entity, or object identity with images, initials, icons, custom content, shape, size, styling, and accessibility guidance."
_tocName: Avatar
---
# Avatar Component

The Ignite UI for Blazor Avatar represents a user, entity, or object with an image, initials, or custom content.

Use the avatar to provide a compact visual identity in lists, cards, profile menus, and activity feeds.

## Live Demo

```razor
@using IgniteUI.Blazor.Controls


<div class="sample avatar-overview-sample">
    <IgbAvatar
        class="profile-avatar"
        Shape="@AvatarShape.Circle"
        Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
        Alt="A profile photo of a man." />

    <IgbAvatar
        class="profile-avatar profile-status"
        Shape="@AvatarShape.Circle"
        Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png"
        Alt="A profile photo of a woman." />
    <IgbBadge
        class="status-badge"
        Dot="true"
        Outlined="true"
        Variant="@StyleVariant.Success" />

    <span class="avatar-stack" aria-label="Project members">
        <IgbAvatar
            class="profile-avatar"
            Shape="@AvatarShape.Circle"
            Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png"
            Alt="A profile photo of an animated kid." />
        <IgbAvatar
            class="profile-avatar"
            Shape="@AvatarShape.Circle"
            Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-03.png"
            Alt="A profile photo of a man." />
        <IgbAvatar
            class="profile-avatar"
            Shape="@AvatarShape.Circle"
            Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-08.png"
            Alt="A profile photo of an abstract flat cat." />
        <IgbAvatar
            class="profile-avatar"
            Shape="@AvatarShape.Circle"
            Initials="+3"
            Alt="Three additional project members." />
    </span>
</div>
```

## Anatomy

The avatar is a single host element that applies image semantics and renders one of the supported content patterns.

**Blazor Avatar anatomy anatomy:** The avatar anatomy labels the image, icon, and initials containers.

<style>{`
  .avatar-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .avatar-anatomy .igd-anatomy__image {
    max-width: 520px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Image container:</strong> Displays image content type.<br />
<strong>2. Icon container:</strong> Displays icon content type.<br />
<strong>3. Initials container:</strong> Displays text content type.</span>

```text
igc-avatar[role="img"]           // host - exposes the avatar
└─ div[part="base"]              // avatar wrapper
   ├─ span[part="initials"]      // rendered when `initials` is set
   ├─ slot                       // rendered when `initials` is not set
   └─ img[part="image"]          // rendered while `src` is set and loads
```

## Getting Started

Register the avatar module in `Program.cs` and add the theme stylesheet to your host page. If you have not set up Ignite UI for Blazor yet, complete the shared [Getting Started](../general-getting-started.md) topic first.

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbAvatarModule));
```

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

## Usage

Render an avatar with an image source, initials, or custom content in the default slot.

### Variants

Set only the content source you intend to show. The avatar renders [`Initials`](mcp:get_api_reference?platform=blazor&component=IgbAvatar&member=initials) when they are set, otherwise it renders default slot content, and it also renders an image element while [`Src`](mcp:get_api_reference?platform=blazor&component=IgbAvatar&member=src) is set and loads successfully.

```razor
<IgbAvatar Initials="AZ" />

<IgbAvatar
  Src="https://static.infragistics.com/xplatform/images/people/GUY01.png"
  Alt="A photo of Ana Zane" />

<IgbAvatar>
  <IgbIcon Name="home" />
</IgbAvatar>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="avatar-variants-sample">
    <IgbAvatar
        Shape="@AvatarShape.Circle"
        Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
        Alt="A profile photo of a man." />
    <IgbBadge
        Dot="true"
        Outlined="true"
        Variant="@StyleVariant.Success" />
    <span>Image</span>

    <IgbAvatar Shape="@AvatarShape.Circle">
        <IgbIcon @ref="MailIconRef" IconName="mail" Collection="material" />
    </IgbAvatar>
    <IgbBadge
        Outlined="true"
        Shape="@BadgeShape.Rounded"
        Variant="@StyleVariant.Info">
        2
    </IgbBadge>
    <span>Icon</span>

    <IgbAvatar
        Shape="@AvatarShape.Circle"
        Initials="AZ"
        Alt="Avatar with AZ initials." />
    <IgbBadge
        Outlined="true"
        Shape="@BadgeShape.Rounded"
        Variant="@StyleVariant.Success">
        <IgbIcon @ref="CheckIconRef" IconName="check" Collection="material" />
    </IgbBadge>
    <span>Initials</span>
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

### Shape

Set [`Shape`](mcp:get_api_reference?platform=blazor&component=IgbAvatar&member=shape) to `square`, `rounded`, or `circle`.

```razor
<IgbAvatar Initials="AZ" Shape="@AvatarShape.Circle" />
```

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

Set `--ig-size` to one of the shared size tokens when you need a preset avatar size.

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

### Do/Don't

**When to use:** Use the avatar when a UI needs a small representation of a person, organization, object, or account, such as a profile image, initials, or an icon. Keep a consistent avatar strategy within the same UI region so repeated identities are easy to scan.

**When not to use:** Use the [Badge](../inputs/badge.md) component when you need to show a count, status, or notification indicator instead of representing an entity. Badges can also decorate avatars when both identity and status need to appear together.

<div class="table-responsive">
<table class="table" style="width: 100%; max-width: 720px; table-layout: fixed; border-collapse: collapse; border: 1px solid #d3d3d3; margin: 0 auto 24px;">
<thead>
<tr>
<th style="width: 50%; background-color: #d3d3d3; text-align: left; padding: 16px 20px; font-size: 18px; font-weight: 500;">Do</th>
<th style="width: 50%; background-color: #d3d3d3; text-align: left; padding: 16px 20px; font-size: 18px; font-weight: 500;">Don't</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
<td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
</tr>
</tbody>
</table>
</div>

## Properties

The avatar exposes a small set of inputs for its content and shape.

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| [`Alt`](mcp:get_api_reference?platform=blazor&component=IgbAvatar&member=alt) | `string` | n/a | Sets alternative text for the image avatar. |
| [`Initials`](mcp:get_api_reference?platform=blazor&component=IgbAvatar&member=initials) | `string` | n/a | Sets text initials rendered when no image is displayed. |
| [`Shape`](mcp:get_api_reference?platform=blazor&component=IgbAvatar&member=shape) | `"square" \| "rounded" \| "circle"` | `"square"` | Sets the avatar shape. |
| [`Src`](mcp:get_api_reference?platform=blazor&component=IgbAvatar&member=src) | `string` | n/a | Sets the image source URL. |

## Styling

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

The avatar appearance is controlled through theme variables and platform-specific styling hooks.

Use the avatar CSS variables for token-level changes and CSS parts when you need to target the rendered wrapper, image, icon, or initials.

| Variable | What it changes |
| -- | -- |
| `--ig-avatar-background` | Avatar background color. |
| `--ig-avatar-color` | Text and initials color. |
| `--ig-avatar-icon-color` | Slotted icon color. |
| `--ig-avatar-border-radius` | Border radius used by rounded avatars. |
| `--ig-avatar-size` | Avatar width and height. |
| `--ig-size` | Shared component size token used to derive preset avatar sizes. |

| CSS Part | Description |
| -- | -- |
| `base` | The avatar wrapper. |
| `icon` | The icon wrapper. |
| `initials` | The initials wrapper. |
| `image` | The image element. |

### Sass Theming

Use the `avatar-theme` function when your application customizes Ignite UI themes through Sass.

```scss
@use "igniteui-theming/sass/themes" as *;

$custom-avatar-theme: avatar-theme(
  $background: #72da67,
  $border-radius: 16px,
  $size: 3rem
);

:root {
  @include tokens($custom-avatar-theme);
}
```

### CSS Variables

Set component CSS variables directly when you need local styling without a Sass build step.

```css
igc-avatar {
  --ig-avatar-background: var(--ig-success-500);
  --ig-avatar-color: var(--ig-success-500-contrast);
  --ig-avatar-border-radius: 20px;
}

igc-avatar::part(base) {
  border: 2px solid var(--ig-success-700);
}
```

### Styling with Tailwind

Use Tailwind utility classes with the Ignite UI for Blazor Avatar when you need utility-first layout styling together with Ignite UI component tokens.

```css
@tailwind utilities;

.sample {
    display: grid;
    grid-template-columns: repeat(auto-fit, 21.5rem);
    gap: 2.5rem;
    place-content: center;
    height: 100vh;
}

igc-card:nth-of-type(2) {
    align-self: center;
}

igc-card-header {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 100%;
    padding: 1rem;
}

igc-card-header::part(header) {
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    justify-content: center;
}

igc-card-header [slot="thumbnail"] {
    margin-inline-end: 1rem;
}

.card-sample-custom-subtitle {
    display: block;
    color: var(--ig-gray-700);
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin: 0 1rem 0.5rem;
}

.stats-title {
    color: var(--ig-gray-900);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
}

.stats-subtitle {
    color: var(--ig-gray-500);
    font-size: 0.875rem;
    line-height: 1.25rem;
}
```

## Accessibility

The avatar is a non-interactive identity visual with accessible image semantics.

### Keyboard Interaction

The avatar does not receive focus and has no keyboard interaction.

| Key | Action |
| -- | -- |
| n/a | The avatar is not keyboard interactive. |

### Screen Readers / ARIA

The avatar initializes with image semantics and a default accessible label of `avatar`.

- Set `alt` when a `src` image represents a specific person, entity, or object.
- Add an explicit `aria-label` when projected custom content needs a different accessible name.
- Treat decorative avatars as redundant when adjacent text already identifies the same entity.

### Accessibility Compliance

Infragistics documents Ignite UI for Blazor accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| -- | -- |
| [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content) | The avatar has an accessible label, and image avatars can receive specific alternative text through `alt`. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The component initializes with image semantics and exposes content-related ARIA information. |

Your responsibilities:

- Keep sufficient contrast between the avatar background and text or icon color when overriding styles.
- Avoid duplicating the same identity announcement when adjacent text already names the person or entity.

- Provide a descriptive label or `alt` text when the avatar conveys identity.

## Troubleshooting

Use this section to check boundaries and common decisions before treating Avatar as an interactive or status component.

### Known Limitations

The avatar is a visual identity primitive and does not add interaction, status, or notification behavior by itself.

- Use an interactive container, such as a button or list item, when the represented entity must be clickable.
- Use a badge with the avatar when you need to show status, counts, or notification indicators.

## API References

Use these API references for the complete avatar API surface.

[`IgbAvatar`](mcp:get_api_reference?platform=blazor&component=IgbAvatar)
[`IgbIcon`](mcp:get_api_reference?platform=blazor&component=IgbIcon)
[`IgbBadge`](mcp:get_api_reference?platform=blazor&component=IgbBadge)

## Dependencies

Slotted icons require the [`IgbIcon`](mcp:get_api_reference?platform=blazor&component=IgbIcon) component to be registered or imported.

The avatar also uses the shared theme stylesheet for its default appearance.

## Additional Resources

Use these resources for support and related Ignite UI documentation.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

## Related Components

Use these related components when identity needs to be combined with status, actions, or richer layout.

- [Badge](../inputs/badge.md) - Use Badge to show counts, status, or notification indicators. Badge can decorate Avatar when the UI needs both identity and status.

## FAQ

  **Q: When should I use Avatar instead of Badge?**

    Use Avatar when the UI needs to represent a person, account, organization, or object. Use Badge when the UI needs to show a count, status, or notification indicator.
  

  **Q: Does Avatar add keyboard interaction?**

    No. Avatar is non-interactive and does not receive focus by itself. Put it inside an interactive component when the represented entity needs an action.
  

  **Q: How should I label image avatars for screen readers?**

    Provide meaningful alternative text when the avatar image identifies a specific entity. Avoid repeating the same identity when adjacent text already names that entity.
  


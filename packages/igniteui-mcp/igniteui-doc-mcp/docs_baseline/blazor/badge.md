---
title: "Badge"
description: "The Ignite UI for Blazor Badge displays a short status, category, count, or notification indicator alongside avatars, navigation menus, and other components."
keywords: "Blazor Badge, Ignite UI for Blazor, badge indicator"
license: MIT
mentionedTypes: ["Badge"]
last_updated: "2026-07-24"
llms:
  description: "The Ignite UI for Blazor Badge component displays a short status, category, count, or notification indicator alongside avatars, navigation menus, and other components."
_tocName: Badge
---
# Badge Component

The Blazor Badge component is provided by the platform-specific Ignite UI for Blazor package and is used in conjunction with avatars, navigation menus, or other components in an application when a visual notification is needed. Badges are usually designed with predefined styles to communicate information, success, warnings, or errors.

## Live Demo

The Blazor Badge demo shows how the component can communicate a compact status or notification next to another interface element.

```razor
@using IgniteUI.Blazor.Controls


<div class="badge-overview">
    <div class="badge-example avatar-example">
        <IgbAvatar Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                   Shape="AvatarShape.Circle"
                   Size="SizableComponentSize.Small" />
        <IgbBadge Outlined="true" Variant="@StyleVariant.Success">
            <IgbIcon @ref="iconRef" IconName="check" Collection="material" />
        </IgbBadge>
    </div>
    <div class="badge-example icon-example">
        <IgbIcon IconName="mail" Collection="material" />
        <IgbBadge Outlined="true" Variant="@StyleVariant.Danger">
            2
        </IgbBadge>
    </div>
    <div class="badge-example event-example">
        <IgbChip>Events</IgbChip>
        <IgbBadge Outlined="true" Variant="@StyleVariant.Info">
            new
        </IgbBadge>
    </div>
    <div class="badge-example notification-example">
        <IgbIcon IconName="notifications" Collection="material" />
        <IgbBadge Dot="true" Outlined="true" Variant="@StyleVariant.Danger" />
    </div>
</div>

@code {
    private const string CheckIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/></svg>";
    private const string MailIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5z'/></svg>";
    private const string NotificationsIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1z'/></svg>";

    private IgbIcon iconRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && iconRef != null)
        {
            iconRef.EnsureReady().ContinueWith(_ =>
            {
                iconRef.RegisterIconFromText("check", CheckIcon, "material");
                iconRef.RegisterIconFromText("mail", MailIcon, "material");
                iconRef.RegisterIconFromText("notifications", NotificationsIcon, "material");
            });
        }
    }
}
```

## Anatomy

The Blazor Badge presents a compact label or dot indicator that decorates another interface element.

**Badge anatomy:** The Badge component is a compact label or dot indicator that decorates another interface element.

<style>{`
  .badge-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .badge-anatomy .igd-anatomy__image {
    max-width: 520px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Dot indicator:</strong> A small badge dot used to show a status or a new update.<br />
<strong>2. Icon:</strong> Represents the type of status or action.<br />
<strong>3. Container:</strong> The badge shape that holds and styles the icon or label.<br />
<strong>4. Label:</strong> Text or a number displayed inside the badge.</span>

The component renders its content inside the `base` CSS part. Use the component's default slot for text or other inline content; when `dot` is enabled, the badge renders as an indicator without content.

```text
<igc-badge>
└── ::part(base)
  └── default slot content
</igc-badge>
```

## Getting Started

To use the Blazor Badge, follow the [Ignite UI for Blazor Getting Started](../general-getting-started.md) topic for the basic project setup, then register the component for your target platform.

For Blazor using the **IgniteUI.Blazor** package, register the Badge module as follows:

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbBadgeModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbBadge`](mcp:get_api_reference?platform=blazor&component=IgbBadge) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The simplest way to start using the [`IgbBadge`](mcp:get_api_reference?platform=blazor&component=IgbBadge) is as follows:

```razor
<IgbBadge />
```

## Usage

Use the Blazor Badge to display a short status, category, count, or notification indicator alongside another component.

The following example shows a success Badge displayed on an Avatar. Import the Badge and Avatar components from the platform-specific package, then place the Badge inside a relatively positioned wrapper.

Register the Avatar and Badge modules in `Program.cs`:

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbAvatarModule), typeof(IgbBadgeModule));
```

Add the components to your Razor markup:

```razor
<div class="wrapper">
  <IgbAvatar Icon="person" Shape="AvatarShape.Circle" Size="AvatarSize.Small" />
  <IgbBadge Icon="check" Variant="@StyleVariant.Success" />
</div>
```

Use a relatively positioned wrapper to place the Badge over the Avatar:

```css
.wrapper {
  position: relative;
  margin-top: 15px;
}
```

### Type

The Ignite UI for Blazor Badge can carry different types of content, such as a number or an icon.

Use the [`value`](mcp:get_api_reference?platform=blazor&component=IgbBadge&member=value) property to display text or a numeric count inside the Badge:

```razor
<IgbBadge Variant="@StyleVariant.Primary">12</IgbBadge>
```

You can also project content directly. When projecting both an icon and text, wrap the text to keep the correct padding.

```razor
<IgbBadge>
  <IgbIcon Name="bluetooth" />
  <span>Bluetooth</span>
</IgbBadge>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="badge-type">
    <div class="badge-type-item">
        <div class="avatar-wrapper">
            <IgbAvatar Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                       Shape="AvatarShape.Circle"
                       Size="SizableComponentSize.Small" />
            <IgbBadge Dot="true" Outlined="true" Variant="@StyleVariant.Success" class="dot-badge" />
        </div>
        <span>Dot</span>
    </div>
    <div class="badge-type-item">
        <div class="avatar-wrapper">
            <IgbAvatar Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                       Shape="AvatarShape.Circle"
                       Size="SizableComponentSize.Small" />
            <IgbBadge Outlined="true" Variant="@StyleVariant.Success">
                <IgbIcon @ref="checkIconRef" IconName="check" Collection="material" />
            </IgbBadge>
        </div>
        <span>Icon</span>
    </div>
    <div class="badge-type-item">
        <div class="avatar-wrapper">
            <IgbAvatar Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                       Shape="AvatarShape.Circle"
                       Size="SizableComponentSize.Small" />
            <IgbBadge Outlined="true" Variant="@StyleVariant.Success">
                2
            </IgbBadge>
        </div>
        <span>Text</span>
    </div>
</div>

@code {
    private const string CheckIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/></svg>";

    private IgbIcon checkIconRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && checkIconRef != null)
        {
            checkIconRef.EnsureReady().ContinueWith(_ =>
            {
                checkIconRef.RegisterIconFromText("check", CheckIcon, "material");
            });
        }
    }
}
```

#### Icon

Add an icon as child content inside the Badge:

```razor
<IgbBadge Variant="@StyleVariant.Success">
  <IgbIcon Name="heart-monitor" />
</IgbBadge>
```

For custom icons, register the icon with the platform's icon service and render it as child content inside the Badge.

For example, register an SVG icon before using it in the Badge:

```razor
@code {
  private IgbIcon icon;

  protected override async Task OnAfterRenderAsync(bool firstRender)
  {
    if (firstRender && icon != null)
    {
      await icon.EnsureReady();
      await icon.RegisterIconFromTextAsync(
        "heart-monitor",
        "<svg viewBox=\"0 0 24 24\"><path d=\"M3 12h4l2-6 4 12 2-6h6\" /></svg>",
        "custom");
    }
  }
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="badge-icon">
    @foreach (var item in Badges)
    {
        <div class="badge-icon-item" @key="item.Label">
            <div class="icon-wrapper">
                <IgbBadge Variant="@item.Variant" class="@($"badge-{item.Label}")">
                    <IgbIcon IconName="@item.Icon" Collection="material" />
                </IgbBadge>
            </div>
            <span>@item.Label</span>
        </div>
    }
    <div class="badge-icon-item">
        <div class="icon-wrapper avatar-wrapper">
            <IgbAvatar Initials="AZ" Shape="AvatarShape.Circle" Size="SizableComponentSize.Small" />
            <IgbBadge Variant="@StyleVariant.Danger" Outlined="true">
                <IgbIcon @ref="iconRef" IconName="close" Collection="material" />
            </IgbBadge>
        </div>
        <span>on avatar</span>
    </div>
</div>

@code {
    private const string CheckIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/></svg>";
    private const string FavoriteBorderIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z'/></svg>";
    private const string NotificationsIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z'/></svg>";
    private const string StarBorderIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z'/></svg>";
    private const string SettingsIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z'/></svg>";
    private const string CloseIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>";

    private IgbIcon iconRef;

    private class BadgeItem
    {
        public string Icon { get; set; }
        public StyleVariant Variant { get; set; }
        public string Label { get; set; }
    }

    private static readonly BadgeItem[] Badges = new[]
    {
        new BadgeItem { Icon = "check", Variant = StyleVariant.Success, Label = "check" },
        new BadgeItem { Icon = "favorite_border", Variant = StyleVariant.Danger, Label = "favorite" },
        new BadgeItem { Icon = "notifications", Variant = StyleVariant.Info, Label = "notification" },
        new BadgeItem { Icon = "star_border", Variant = StyleVariant.Warning, Label = "star" },
        new BadgeItem { Icon = "settings", Variant = StyleVariant.Info, Label = "settings" }
    };

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && iconRef != null)
        {
            iconRef.EnsureReady().ContinueWith(_ =>
            {
                iconRef.RegisterIconFromText("check", CheckIcon, "material");
                iconRef.RegisterIconFromText("favorite_border", FavoriteBorderIcon, "material");
                iconRef.RegisterIconFromText("notifications", NotificationsIcon, "material");
                iconRef.RegisterIconFromText("star_border", StarBorderIcon, "material");
                iconRef.RegisterIconFromText("settings", SettingsIcon, "material");
                iconRef.RegisterIconFromText("close", CloseIcon, "material");
            });
        }
    }
}
```

#### Dot

The Ignite UI for Blazor Badge can also render as a minimal dot indicator for notifications by setting its [`dot`](mcp:get_api_reference?platform=blazor&component=IgbBadge&member=dot) attribute. Dot badges do not support content, but they can be outlined and can use any of the available dot types (for example, `primary`, `success`, or `info`).

Set the [`dot`](mcp:get_api_reference?platform=blazor&component=IgbBadge&member=dot) attribute to render a minimal notification indicator without content:

```razor
<IgbBadge Dot="true" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="badge-dot">
    <div class="dot-example icon-example">
        <div class="icon-circle">
            <IgbIcon @ref="iconRef" IconName="notifications" Collection="material" />
        </div>
        <IgbBadge Dot="true" Outlined="true" Variant="@StyleVariant.Danger" />
    </div>
    <div class="dot-example notifications-card">
        <div class="notification-row">
            <span class="row-indicator">
                <IgbBadge Dot="true" Variant="@StyleVariant.Info" />
            </span>
            <span class="row-title">Contract renewal</span>
            <span class="row-time unread">09:12</span>
            <IgbIcon class="row-chevron" IconName="chevron_right" Collection="material" />
        </div>
        <div class="notification-row">
            <span class="row-indicator"></span>
            <span class="row-title">Weekly digest</span>
            <span class="row-time">Yesterday</span>
            <IgbIcon class="row-chevron" IconName="chevron_right" Collection="material" />
        </div>
    </div>
    <div class="dot-example avatar-example">
        <IgbAvatar Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                   Shape="AvatarShape.Circle"
                   Size="SizableComponentSize.Small" />
        <IgbBadge Dot="true" Outlined="true" Variant="@StyleVariant.Danger" />
    </div>
    <div class="dot-example nav-card">
        <div class="nav-item active">
            <span class="nav-icon">
                <IgbIcon IconName="home" Collection="material" />
            </span>
            <span class="nav-label">Home</span>
        </div>
        <div class="nav-item">
            <span class="nav-icon">
                <IgbIcon IconName="facebookMessenger" Collection="material" />
                <IgbBadge Dot="true" Variant="@StyleVariant.Info" />
            </span>
            <span class="nav-label">Chat</span>
        </div>
        <div class="nav-item">
            <span class="nav-icon">
                <IgbIcon IconName="person" Collection="material" />
            </span>
            <span class="nav-label">Profile</span>
        </div>
    </div>
</div>

@code {
    private const string NotificationsIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1z'/></svg>";
    private const string ChevronRightIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/></svg>";
    private const string HomeIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/></svg>";
    private const string PersonIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>";
    private const string FacebookMessengerIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.19.16.15.26.35.27.57l.05 1.78c.02.57.61.94 1.13.71l1.98-.87c.17-.07.36-.09.54-.04 1 .27 2.05.42 3.14.42 5.64 0 10-4.13 10-9.7S17.64 2 12 2zm6 7.46-2.94 4.66c-.47.74-1.47.93-2.18.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.18-.69-.63l2.94-4.66c.47-.74 1.47-.93 2.18-.4l2.34 1.75c.21.16.51.16.72 0l3.16-2.4c.42-.32.97.18.69.63z'/></svg>";

    private IgbIcon iconRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && iconRef != null)
        {
            iconRef.EnsureReady().ContinueWith(_ =>
            {
                iconRef.RegisterIconFromText("notifications", NotificationsIcon, "material");
                iconRef.RegisterIconFromText("chevron_right", ChevronRightIcon, "material");
                iconRef.RegisterIconFromText("home", HomeIcon, "material");
                iconRef.RegisterIconFromText("person", PersonIcon, "material");
                iconRef.RegisterIconFromText("facebookMessenger", FacebookMessengerIcon, "material");
            });
        }
    }
}
```

### Size

Control the Badge size with the `--size` CSS variable. For text badges smaller than `16px`, also adjust the font size and line height:

```css
igc-badge {
  --size: 12px;

  font-size: calc(var(--size) / 2);
  line-height: normal;
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="badge-size">
    <div class="badge-size-row badge-small">
        <span class="row-label">Small</span>
        <IgbBadge Dot="true" Variant="@StyleVariant.Danger" />
        <IgbBadge Variant="@StyleVariant.Info">2</IgbBadge>
        <IgbBadge Variant="@StyleVariant.Success">
            <IgbIcon @ref="checkIconRef" IconName="check" Collection="material" />
        </IgbBadge>
    </div>
    <div class="badge-size-row badge-medium">
        <span class="row-label">Medium</span>
        <IgbBadge Dot="true" Variant="@StyleVariant.Danger" />
        <IgbBadge Variant="@StyleVariant.Info">2</IgbBadge>
        <IgbBadge Variant="@StyleVariant.Success">
            <IgbIcon IconName="check" Collection="material" />
        </IgbBadge>
    </div>
    <div class="badge-size-row badge-large">
        <span class="row-label">Large</span>
        <IgbBadge Dot="true" Variant="@StyleVariant.Danger" />
        <IgbBadge Variant="@StyleVariant.Info">2</IgbBadge>
        <IgbBadge Variant="@StyleVariant.Success">
            <IgbIcon IconName="check" Collection="material" />
        </IgbBadge>
    </div>
</div>

@code {
    private const string CheckIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/></svg>";

    private IgbIcon checkIconRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && checkIconRef != null)
        {
            checkIconRef.EnsureReady().ContinueWith(_ =>
            {
                checkIconRef.RegisterIconFromText("check", CheckIcon, "material");
            });
        }
    }
}
```

### Shape

The badge component supports `rounded`(default) and `square` shapes. These values can be assigned to the [`Shape`](mcp:get_api_reference?platform=blazor&component=IgbBadge&member=shape) attribute.

```razor
<IgbBadge Shape="@BadgeShape.Square" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="badge-shape">
    <div class="badge-shape-row">
        <span class="row-label">Rounded</span>
        <IgbBadge Variant="@StyleVariant.Success" Shape="@BadgeShape.Rounded">
            <IgbIcon @ref="checkIconRef" IconName="check" Collection="material" />
        </IgbBadge>
        <IgbBadge Variant="@StyleVariant.Success" Shape="@BadgeShape.Rounded">2</IgbBadge>
        <IgbBadge Variant="@StyleVariant.Success" Shape="@BadgeShape.Rounded" class="badge-small">
            <IgbIcon IconName="check" Collection="material" />
        </IgbBadge>
    </div>
    <div class="badge-shape-row">
        <span class="row-label">Square</span>
        <IgbBadge Variant="@StyleVariant.Info" Shape="@BadgeShape.Square">
            <IgbIcon IconName="check" Collection="material" />
        </IgbBadge>
        <IgbBadge Variant="@StyleVariant.Info" Shape="@BadgeShape.Square">2</IgbBadge>
        <IgbBadge Variant="@StyleVariant.Info" Shape="@BadgeShape.Square" class="badge-small">
            <IgbIcon IconName="check" Collection="material" />
        </IgbBadge>
    </div>
</div>

@code {
    private const string CheckIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/></svg>";

    private IgbIcon checkIconRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && checkIconRef != null)
        {
            checkIconRef.EnsureReady().ContinueWith(_ =>
            {
                checkIconRef.RegisterIconFromText("check", CheckIcon, "material");
            });
        }
    }
}
```

When the badge has a `square` shape, it can be further customized by setting a custom border radius using the `--border-radius` CSS variable.

### Variants

The Ignite UI for Blazor Badge supports several pre-defined stylistic variants (Primary, Info, Success, Warn, and Error). Assign one of the supported values — `primary`, `info`, `success`, `warning`, or `danger` — to the [`variant`](mcp:get_api_reference?platform=blazor&component=IgbBadge&member=variant) attribute.

```razor
<IgbBadge Variant="@StyleVariant.Success" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="badge-variants">
    <div class="variant-item">
        <div class="avatar-wrapper">
            <IgbAvatar Shape="AvatarShape.Circle">
                <IgbIcon @ref="iconRef" IconName="notifications" Collection="material" />
            </IgbAvatar>
            <IgbBadge Outlined="true" Variant="@StyleVariant.Primary">2</IgbBadge>
        </div>
        <span>Primary</span>
    </div>
    <div class="variant-item">
        <div class="avatar-wrapper">
            <IgbAvatar Initials="AZ" Shape="AvatarShape.Circle" />
            <IgbBadge Outlined="true" Variant="@StyleVariant.Info">
                <IgbIcon IconName="check" Collection="material" />
            </IgbBadge>
        </div>
        <span>Info</span>
    </div>
    <div class="variant-item">
        <div class="avatar-wrapper">
            <IgbAvatar Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                       Shape="AvatarShape.Circle" />
            <IgbBadge Outlined="true" Variant="@StyleVariant.Success">
                <IgbIcon IconName="check" Collection="material" />
            </IgbBadge>
        </div>
        <span>Success</span>
    </div>
    <div class="variant-item">
        <div class="avatar-wrapper">
            <IgbAvatar Shape="AvatarShape.Circle">
                <IgbIcon IconName="mail" Collection="material" />
            </IgbAvatar>
            <IgbBadge Outlined="true" Variant="@StyleVariant.Warning">2</IgbBadge>
        </div>
        <span>Warn</span>
    </div>
    <div class="variant-item">
        <div class="avatar-wrapper">
            <IgbAvatar Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                       Shape="AvatarShape.Circle" />
            <IgbBadge Outlined="true" Variant="@StyleVariant.Danger">
                <IgbIcon IconName="close" Collection="material" />
            </IgbBadge>
        </div>
        <span>Error</span>
    </div>
</div>

@code {
    private const string CheckIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/></svg>";
    private const string CloseIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>";
    private const string MailIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5z'/></svg>";
    private const string NotificationsIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1z'/></svg>";

    private IgbIcon iconRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && iconRef != null)
        {
            iconRef.EnsureReady().ContinueWith(_ =>
            {
                iconRef.RegisterIconFromText("check", CheckIcon, "material");
                iconRef.RegisterIconFromText("close", CloseIcon, "material");
                iconRef.RegisterIconFromText("mail", MailIcon, "material");
                iconRef.RegisterIconFromText("notifications", NotificationsIcon, "material");
            });
        }
    }
}
```

### Outlined

The badge can also have a subtle border around it when the [`outlined`](mcp:get_api_reference?platform=blazor&component=IgbBadge&member=outlined) attribute is set.

```razor
<IgbBadge Outlined="true" />
```

```razor
@using IgniteUI.Blazor.Controls


<div class="badge-outlined">
    <div class="outlined-example">
        <div class="icon-circle">
            <IgbIcon @ref="iconRef" IconName="favorite_border" Collection="material" />
        </div>
        <IgbBadge Variant="@StyleVariant.Info" Outlined="true">23</IgbBadge>
    </div>
    <div class="outlined-example">
        <IgbAvatar Initials="AZ" Shape="AvatarShape.Rounded" />
        <IgbBadge Variant="@StyleVariant.Danger" Outlined="true">
            <IgbIcon IconName="close" Collection="material" />
        </IgbBadge>
    </div>
    <div class="stepper-wrapper">
        <IgbStepper class="steps" Orientation="@StepperOrientation.Horizontal">
            <IgbStep Complete="true">
                <span slot="title">Orders</span>
            </IgbStep>
            <IgbStep Active="true">
                <span slot="title">Payment</span>
            </IgbStep>
            <IgbStep>
                <span slot="title">Shipping</span>
            </IgbStep>
        </IgbStepper>
        <IgbBadge class="flagged-badge" Dot="true" Variant="@StyleVariant.Info" Outlined="true" />
    </div>
</div>

@code {
    private const string FavoriteBorderIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z'/></svg>";
    private const string CloseIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>";

    private IgbIcon iconRef;
    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender)
        {
            if (iconRef != null)
            {
                iconRef.EnsureReady().ContinueWith(_ =>
                {
                    iconRef.RegisterIconFromText("favorite_border", FavoriteBorderIcon, "material");
                    iconRef.RegisterIconFromText("close", CloseIcon, "material");
                });
            }
        }
    }
}
```

The border color of the outlined badge can also be customized using the `--border-color` CSS variable.

### Do/Don't

**When to use:** Use a Badge to communicate a short status, category, count, or notification state alongside another component. Use `dot` when the indicator does not need visible text.

**When not to use:** Do not use a Badge as the primary control for an action, as a replacement for a form validation message, or when the status cannot be understood from the badge content, surrounding context, or accessible labeling.

<div class="table-responsive">
  <table class="table" style="width: 100%; table-layout: fixed; border-collapse: collapse; border: 1px solid #d3d3d3; margin-bottom: 24px;">
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

The Blazor Badge exposes platform-specific properties for controlling its content, appearance, and indicator behavior.

The Blazor Badge exposes the following properties.

| name | type | default | description |
| --- | --- | --- | --- |
| [`dot`](mcp:get_api_reference?platform=blazor&component=IgbBadge&member=dot) | boolean | `false` | Renders the Badge as a dot indicator. |
| [`outlined`](mcp:get_api_reference?platform=blazor&component=IgbBadge&member=outlined) | boolean | `false` | Displays an outline around the Badge. |
| [`shape`](mcp:get_api_reference?platform=blazor&component=IgbBadge&member=shape) | BadgeShape | `rounded` | Sets the Badge shape. |
| [`variant`](mcp:get_api_reference?platform=blazor&component=IgbBadge&member=variant) | StyleVariant | `primary` | Sets the Badge stylistic variant. |

## Styling

The Blazor Badge uses the [`IgbBadge`](mcp:get_api_reference?platform=blazor&component=IgbBadge) component's `base` CSS part and documented styling variables to customize its appearance.

### Sass Theming

Use the Ignite UI for Blazor theme system to style the Badge consistently with the rest of your application.

### CSS Variables

| variable | what it changes |
| --- | --- |
| `--background-color` | The badge background color. |
| `--border-color` | The badge border color. |
| `--border-radius` | The badge corner radius. |
| `--elevation` | The badge shadow. |
| `--icon-color` | The badge icon color. |
| `--text-color` | The badge text color. |
| `--size` | The badge size. |
| `--dot-size` | The size of the dot-type badge. |

### Style Parts

| part | what it styles |
| --- | --- |
| `base` | The Badge root element. |

```css
igc-badge::part(base) {
  --background-color: var(--ig-error-A100);
  --border-radius: 2px;
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="badge-styling">
    <div class="styling-item green">
        <IgbAvatar Shape="AvatarShape.Circle">
            <IgbIcon @ref="iconRef" IconName="person" Collection="material" />
        </IgbAvatar>
        <IgbBadge Outlined="true" class="badge-teal">
            <IgbIcon IconName="photo_camera" Collection="material" />
        </IgbBadge>
    </div>
    <div class="styling-item">
        <IgbAvatar Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                   Shape="AvatarShape.Circle" />
        <IgbBadge Outlined="true" class="badge-amber">
            <IgbIcon IconName="star_border" Collection="material" />
        </IgbBadge>
    </div>
    <div class="styling-item pink">
        <IgbAvatar Shape="AvatarShape.Circle">
            <IgbIcon IconName="favorite_border" Collection="material" />
        </IgbAvatar>
        <IgbBadge Outlined="true" class="badge-magenta">2</IgbBadge>
    </div>
    <div class="styling-item">
        <IgbAvatar Src="https://dl.infragistics.com/x/img/avatars/avatar6.png"
                   Shape="AvatarShape.Rounded" />
        <IgbBadge Dot="true" Outlined="true" class="badge-lime" />
    </div>
</div>

@code {
    private const string PersonIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>";
    private const string PhotoCameraIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><circle cx='12' cy='12' r='3.2'/><path d='M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z'/></svg>";
    private const string StarBorderIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z'/></svg>";
    private const string FavoriteBorderIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z'/></svg>";

    private IgbIcon iconRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && iconRef != null)
        {
            iconRef.EnsureReady().ContinueWith(_ =>
            {
                iconRef.RegisterIconFromText("person", PersonIcon, "material");
                iconRef.RegisterIconFromText("photo_camera", PhotoCameraIcon, "material");
                iconRef.RegisterIconFromText("star_border", StarBorderIcon, "material");
                iconRef.RegisterIconFromText("favorite_border", FavoriteBorderIcon, "material");
            });
        }
    }
}
```

### Styling with Tailwind

You can style the Badge with the custom Tailwind utility classes from `igniteui-theming`. Make sure to [set up Tailwind](/themes/tailwind) first, then import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

```razor
<IgbBadge Class="!light-badge ![--background:#FF4E00] ![--border-radius:4px]"></IgbBadge>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the Badge's default theme styles.

```razor
@using IgniteUI.Blazor.Controls


<div class="badge-parent">
    <div class="badge-item">
        <IgbAvatar Initials="AZ" Shape="AvatarShape.Rounded" Size="AvatarSize.Small" />
        <IgbBadge Outlined="true" class="badge-style badge-close"><IgbIcon IconName="close" Collection="material" /></IgbBadge>
    </div>
    <div class="badge-item">
        <IgbAvatar Shape="AvatarShape.Rounded" Size="AvatarSize.Small"><IgbIcon @ref="iconRef" IconName="person" Collection="material" /></IgbAvatar>
        <IgbBadge Outlined="true" class="badge-style badge-volume"><IgbIcon IconName="volume_off" Collection="material" /></IgbBadge>
    </div>
    <div class="badge-item">
        <IgbAvatar Initials="AZ" Shape="AvatarShape.Circle" Size="AvatarSize.Small" />
        <IgbBadge Outlined="true" class="badge-style badge-remove"><IgbIcon IconName="remove" Collection="material" /></IgbBadge>
    </div>
    <div class="badge-item">
        <IgbAvatar Shape="AvatarShape.Square" Size="AvatarSize.Small"><IgbIcon IconName="person" Collection="material" /></IgbAvatar>
        <IgbBadge Outlined="true" class="badge-style badge-check"><IgbIcon IconName="check" Collection="material" /></IgbBadge>
    </div>
</div>

@code {
    private const string PersonIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>";
    private const string CloseIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>";
    private const string VolumeOffIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.8 8.8 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z'/></svg>";
    private const string RemoveIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19 13H5v-2h14v2z'/></svg>";
    private const string CheckIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/></svg>";
    private IgbIcon iconRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && iconRef != null)
        {
            iconRef.EnsureReady().ContinueWith(_ =>
            {
                iconRef.RegisterIconFromText("person", PersonIcon, "material");
                iconRef.RegisterIconFromText("close", CloseIcon, "material");
                iconRef.RegisterIconFromText("volume_off", VolumeOffIcon, "material");
                iconRef.RegisterIconFromText("remove", RemoveIcon, "material");
                iconRef.RegisterIconFromText("check", CheckIcon, "material");
            });
        }
    }
}
```

## Accessibility

The Blazor Badge is a non-interactive status visual that communicates a short count, state, or notification.

### Keyboard Interaction

The Badge does not receive focus, handle keyboard input, or expose component interaction events.

| Key | Action |
| -- | -- |
| n/a | The Badge is not keyboard interactive. |

### Screen Readers / ARIA

The Badge host uses `role="status"` to expose its content as status information.

- The component sets `aria-roledescription` to identify the Badge and its current `variant`.
- Add an `aria-label` when a Badge without text, including a `dot` Badge, communicates status that is not otherwise available to assistive technology.
- Keep the Badge content or accessible label specific to the decorated item, such as `3 unread messages` rather than only `3`.

### Accessibility Compliance

Infragistics documents Ignite UI for Blazor accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| -- | -- |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) | The Badge exposes the semantic `status` role. The xplat implementation also exposes a role description based on the current variant; Angular exposes an accessible label and a role description based on its type and content. |

Your responsibilities:

- Provide an accessible name that explains the status when the Badge has no meaningful text, especially for `dot` Badges.
- Do not use Badge color as the only indication of status; pair it with text, an icon, or another accessible cue.
- Keep sufficient contrast between the Badge foreground and background when overriding theme styles.

## Troubleshooting

Use this section to check boundaries and common decisions before treating Badge as an interactive control or the only indication of status.

### Why does my custom background color not change the Badge?

The selected `variant` takes precedence over the `--background-color` CSS variable. To use a custom background color, avoid setting a variant that applies its own background color.

### Why is my dot Badge not displaying content?

The `dot` property renders the Badge as a minimal indicator and does not support content. Use a regular Badge when you need to display text or other inline content.

### Known Limitations

The Blazor Badge has the following platform-independent limitations.

- A dot Badge is an indicator only and cannot display text or an icon.
- Badge styling and variant/type names differ between Angular and the other supported frameworks. Use the platform-specific examples and API links on this page rather than copying an attribute between frameworks.
- The Badge is a visual status indicator and does not provide keyboard interaction of its own.

## API References

The Blazor Badge API reference lists the complete verified API surface for the target platform.
[`IgbBadge`](mcp:get_api_reference?platform=blazor&component=IgbBadge)

## Dependencies

The Blazor Badge requires a theme stylesheet to apply its visual styling. See the framework-specific setup in **Getting Started**.

## Additional Resources

The following resources provide additional Blazor Badge guidance and project support.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

## Related Components

The Blazor Badge is commonly used with related components such as Avatar when a status indicator belongs to another visual element.

- [Avatar](../layouts/avatar.md) — combine an Avatar with a Badge to show a status indicator.

## FAQ

  **Q: Can a Badge display both an icon and text?**

    Yes. Use the Badge's content area for the text and the supported icon content for the visual indicator. Keep the combination short so it remains a compact status or category label.
  

  **Q: How do I display a notification dot without content?**

    Set the platform-specific `dot` property or attribute. A dot Badge intentionally renders without text or other content.
  

  **Q: When should I use a dot Badge instead of a text Badge?**

    Use a dot Badge when the status is communicated by presence alone. Use a text Badge when users need the status, category, or count to be understandable without relying on color or position.
  

  **Q: Which package should I install for Badge?**

    Use `igniteui-angular` for Angular, `igniteui-react` for React, `igniteui-webcomponents` for Web Components, and `IgniteUI.Blazor` for Blazor. Keep related Ignite UI packages on the same release version.
  


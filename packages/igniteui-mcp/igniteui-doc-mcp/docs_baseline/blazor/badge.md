---
title: Blazor Badge | Infragistics
_description: Infragistics' Blazor Badge component allows you to display content in a predefined style to decorate other components anywhere in an application.
_keywords: Blazor, UI controls, web widgets, UI widgets, Web Components, Blazor Badge Components, Infragistics
_license: MIT
mentionedTypes: ["Badge"]
_tocName: Badge
---

# Blazor Badge Overview

The Ignite UI for Blazor Badge is a component used in conjunction with avatars, navigation menus, or other components in an application when a visual notification is needed. Badges are usually designed with predefined styles to communicate information, success, warnings, or errors.

## Blazor Badge Example

```razor
@using IgniteUI.Blazor.Controls

<div class="badge-outlined">
    <div class="outlined-example">
        <div class="icon-circle">
            <IgbIcon @ref="iconRef" IconName="favorite_border" Collection="material" />
        </div>
        <IgbBadge Variant="@StyleVariant.Info" Outlined="true" class="badge-info-blue">23</IgbBadge>
    </div>
    <div class="outlined-example">
        <IgbAvatar Initials="AZ" Shape="AvatarShape.Rounded" />
        <IgbBadge Variant="@StyleVariant.Danger" Outlined="true">
            <IgbIcon IconName="close" Collection="material" />
        </IgbBadge>
    </div>
    <div class="steps">
        <div class="step">
            <div class="step-marker">
                <span class="step-circle">1</span>
            </div>
            <span class="step-label">Orders</span>
        </div>
        <span class="step-connector"></span>
        <div class="step">
            <div class="step-marker">
                <span class="step-circle">2</span>
                <IgbBadge Dot="true" Variant="@StyleVariant.Info" Outlined="true" class="payment-dot-blue" />
            </div>
            <span class="step-label">Payment</span>
        </div>
        <span class="step-connector pending"></span>
        <div class="step">
            <div class="step-marker">
                <span class="step-circle pending">3</span>
            </div>
            <span class="step-label">Shipping</span>
        </div>
    </div>
</div>

@code {
    private const string FavoriteBorderIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z'/></svg>";
    private const string CloseIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>";

    private IgbIcon iconRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (firstRender && iconRef != null)
        {
            iconRef.EnsureReady().ContinueWith(_ =>
            {
                iconRef.RegisterIconFromText("favorite_border", FavoriteBorderIcon, "material");
                iconRef.RegisterIconFromText("close", CloseIcon, "material");
            });
        }
    }
}
```

<div class="divider"></div>

## Usage

Before using the [`IgbBadge`](mcp:get_api_reference?platform=blazor&component=IgbBadge), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbBadgeModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbBadge`](mcp:get_api_reference?platform=blazor&component=IgbBadge) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The simplest way to start using the [`IgbBadge`](mcp:get_api_reference?platform=blazor&component=IgbBadge) is as follows:

```razor
<IgbBadge />
```

To display a subtle border around the badge, you can set the [`Outlined`](mcp:get_api_reference?platform=blazor&component=IgbBadge&member=Outlined) attribute of the badge.

```razor
<IgbBadge Outlined="true" />
```

## Examples

### Variants

The Ignite UI for Blazor badge supports several pre-defined stylistic variants. You can change the variant by assigning one of the supported values - `primary`(default), `info`, `success`, `warning`, or `danger` to the [`Variant`](mcp:get_api_reference?platform=blazor&component=IgbBadge&member=Variant) attribute.

```razor
<IgbBadge Variant="@BadgeVariant.Success" />
```

```razor
@using IgniteUI.Blazor.Controls

<div class="badge-variants">
    <div class="variant-item">
        <div class="avatar-wrapper">
            <IgbAvatar Shape="AvatarShape.Circle">
                <IgbIcon @ref="iconRef" IconName="notifications" Collection="material" />
            </IgbAvatar>
            <IgbBadge Outlined="true" Variant="@StyleVariant.Primary" class="badge-primary-blue">2</IgbBadge>
        </div>
        <span>Primary</span>
    </div>
    <div class="variant-item">
        <div class="avatar-wrapper">
            <IgbAvatar Initials="AZ" Shape="AvatarShape.Circle" />
            <IgbBadge Outlined="true" Variant="@StyleVariant.Info" class="badge-info-blue">
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
            <IgbBadge Outlined="true" Variant="@StyleVariant.Warning" class="badge-warning-black">2</IgbBadge>
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

### Shape

The badge component supports `rounded`(default) and `square` shapes. These values can be assigned to the [`Shape`](mcp:get_api_reference?platform=blazor&component=IgbBadge&member=Shape) attribute.

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
        <IgbBadge Variant="@StyleVariant.Info" Shape="@BadgeShape.Square" class="badge-info-blue">
            <IgbIcon IconName="check" Collection="material" />
        </IgbBadge>
        <IgbBadge Variant="@StyleVariant.Info" Shape="@BadgeShape.Square" class="badge-info-blue">2</IgbBadge>
        <IgbBadge Variant="@StyleVariant.Info" Shape="@BadgeShape.Square" class="badge-small badge-info-blue">
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

### Dot

The Ignite UI for Blazor badge component can also render as a minimal dot indicator for notifications by setting its `dot` attribute. Dot badges do not support content, but they can be outlined and can use any of the available dot types (e.g., primary, success, info, etc.).

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

## Styling

The [`IgbBadge`](mcp:get_api_reference?platform=blazor&component=IgbBadge) component exposes a `base` CSS part that can be used to change all of its style properties.

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

<div class="divider--half"></div>

## API References

- [`IgbBadge`](mcp:get_api_reference?platform=blazor&component=IgbBadge)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

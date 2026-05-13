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

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbAvatar >
        <IgbIcon @ref="ChildIcon" IconName="home" Collection="material" />
    </IgbAvatar>
</div>

@code {

    public IgbIcon ChildIcon { get; set; }

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.ChildIcon != null && firstRender)
        {
            this.ChildIcon.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.ChildIcon.RegisterIcon("home", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_home_24px.svg", "material");
            }));
        }
    }
}
```

<div class="divider--half"></div>

## Usage

Before using the [`IgbAvatar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAvatar.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbAvatarModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbAvatar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAvatar.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

The [`IgbAvatar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAvatar.html) is capable of displaying images, initials, or any other content, including icons. Declaring an [`IgbAvatar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAvatar.html) is as simple as:

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

If the [`Initials`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAvatar.html#IgniteUI_Blazor_Controls_IgbAvatar_Initials) attribute is set all children elements of the avatar will be ignored and the string passed to this attribute will be displayed.

```razor
<!-- Initials("AZ") will be displayed instead of the icon. -->

<IgbAvatar Initials="AZ">
  <IgbIcon Name="home" />
</IgbAvatar>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <IgbAvatar Initials="AZ"/>
</div>

@code {


}
```

### Image

The avatar can also display an image when the [`Src`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAvatar.html#IgniteUI_Blazor_Controls_IgbAvatar_Src) attribute is assigned a valid URL to a static asset. In that case the [`Initials`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAvatar.html#IgniteUI_Blazor_Controls_IgbAvatar_Initials) value will be ignored and children elements will not be rendered.

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


<div class="container vertical">
    <IgbAvatar Shape=AvatarShape.Rounded>
        <IgbIcon @ref="ChildIcon" IconName="home" Collection="material" />
    </IgbAvatar>
</div>

@code {

    public IgbIcon ChildIcon { get; set; }

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.ChildIcon != null && firstRender)
        {
            this.ChildIcon.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.ChildIcon.RegisterIcon("home", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_home_24px.svg", "material");
            }));
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


<div class="container horizontal" style="gap: 10px;">
    <IgbAvatar Initials="L" class="size-large" />
    <IgbAvatar Initials="M" class="size-medium" />
    <IgbAvatar Initials="S" class="size-small" />
</div>

@code {

}
```

### Styling

The [`IgbAvatar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAvatar.html) component exposes several CSS parts, giving you full control over its style:

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


<div class="container horizontal" style="gap: 10px;">
    <IgbAvatar 
        src="https://dl.infragistics.com/x/img/people/men/11.png" 
        alt="A photo of a man." 
        className='size-large'/>

    <div className="sizes">
        <IgbAvatar Initials="L" class="size-large" />
        <IgbAvatar Initials="M" class="size-medium" />
        <IgbAvatar Initials="S" class="size-small" />
    </div>
</div>
@code {

}
```

<div class="divider--half"></div>

## API References

- [`IgbAvatar`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAvatar.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

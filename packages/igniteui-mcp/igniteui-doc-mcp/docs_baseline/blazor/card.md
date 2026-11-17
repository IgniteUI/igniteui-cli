---
title: "Blazor Card Component"
description: "Blazor Card organizes related media, text, and actions in one flexible content container."
keywords: "Blazor Card, card component, content container, media card, Ignite UI for Blazor, Infragistics"
license: MIT
last_updated: "2026-07-30"
mentionedTypes: ["Card", "CardActions", "CardContent", "CardHeader", "CardMedia", "Avatar", "Button", "Icon", "IconButton", "Ripple"]
relatedComponents: ["Grid", "List"]
llms:
  description: "The Ignite UI for Blazor Card organizes related media, text, and actions in one flexible content container."
_tocName: Card
---
# Card

The Ignite UI for Blazor Card organizes related media, text, and actions in one flexible content container.

Use the card to group content about a single subject, such as a product, article, contact, location, or dashboard item.

## Live Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <IgbIcon @ref="IconRef" class="icon-registrar" />

    <div class="card-options">
        <IgbSwitch LabelPosition="ToggleLabelPosition.Before" Checked="@Media"
                   Change="@(args => Media = args.Detail.Checked)">
            <span>Media</span>
        </IgbSwitch>
        <IgbSwitch LabelPosition="ToggleLabelPosition.Before" Checked="@Header"
                   Change="@(args => Header = args.Detail.Checked)">
            <span>Header</span>
        </IgbSwitch>
        <IgbSwitch LabelPosition="ToggleLabelPosition.Before" Checked="@Content"
                   Change="@(args => Content = args.Detail.Checked)">
            <span>Content</span>
        </IgbSwitch>
        <IgbSwitch LabelPosition="ToggleLabelPosition.Before" Checked="@Actions"
                   Change="@(args => Actions = args.Detail.Checked)">
            <span>Actions</span>
        </IgbSwitch>
    </div>

    <div class="card-container">
        <IgbCard>
            @if (Media)
            {
                <IgbCardMedia>
                    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50"
                         alt="Mountain range above the clouds at sunset" />
                </IgbCardMedia>
            }
            @if (Header)
            {
                <IgbCardHeader>
                    <IgbAvatar slot="thumbnail"
                               Shape="@AvatarShape.Circle"
                               Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                               Alt="profile picture" />
                    <span slot="title">Title</span>
                    <span slot="subtitle">Subtitle</span>
                </IgbCardHeader>
            }
            @if (Content)
            {
                <IgbCardContent>
                    <p>
                        A paragraph is a self-contained unit of a discourse in writing
                        dealing with a particular point or idea.
                    </p>
                </IgbCardContent>
            }
            @if (Actions)
            {
                <IgbCardActions>
                    <div class="card-actions-start" slot="start">
                        <IgbButton Variant="ButtonVariant.Flat">Button</IgbButton>
                        <IgbButton Variant="ButtonVariant.Flat">Button</IgbButton>
                    </div>
                    <div class="card-actions-end" slot="end">
                        <IgbIconButton Variant="IconButtonVariant.Flat" IconName="add" Collection="material" />
                        <IgbIconButton Variant="IconButtonVariant.Flat" IconName="add" Collection="material" />
                        <IgbIconButton Variant="IconButtonVariant.Flat" IconName="add" Collection="material" />
                    </div>
                </IgbCardActions>
            }
        </IgbCard>
    </div>
</div>

@code {
    private const string AddIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'></path></svg>";

    private bool Media { get; set; } = true;

    private bool Header { get; set; } = true;

    private bool Content { get; set; } = true;

    private bool Actions { get; set; } = true;

    private IgbIcon IconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && IconRef != null)
        {
            await IconRef.EnsureReady();
            await IconRef.RegisterIconFromTextAsync("add", AddIcon, "material");
        }
    }
}
```

## Anatomy

The card is a container whose standard building blocks are header, media, content, and actions.

**Blazor Card anatomy anatomy:** The card anatomy labels the header, media, content, and actions regions.

<div class="card-anatomy-legend ig-typography__body-2">
  <div>
    <strong>A - Media Container</strong>
    <span>1. Image (optional)</span>
  </div>
  <div>
    <strong>B - Card Header</strong>
    <span>2. Title</span>
    <span>3. Avatar (optional)</span>
    <span>4. Subtitle</span>
  </div>
  <div>
    <strong>C - Content area</strong>
    <span>5. Paragraph</span>
  </div>
  <div>
    <strong>D - Card Footer</strong>
    <span>6. Action Buttons, Icon Buttons</span>
  </div>
</div>

<style>{`
  .card-anatomy {
    --igd-anatomy-padding: 8px;
  }

  .card-anatomy .igd-anatomy__image {
    max-width: 800px;
  }

  .card-anatomy-legend {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 48px;
    margin-bottom: 24px;
  }

  .card-anatomy-legend div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .card-anatomy-legend strong {
    margin-bottom: 12px;
  }

  .card-anatomy-legend span {
    display: block;
  }

  @media (max-width: 768px) {
    .card-anatomy-legend {
      grid-template-columns: 1fr 1fr;
      row-gap: 24px;
    }
  }

  @media (max-width: 480px) {
    .card-anatomy-legend {
      grid-template-columns: 1fr;
    }
  }
`}</style>

```text
igc-card                         // host - groups related content
├─ igc-card-media                 // optional media region
│  └─ default slot                // image, video, or other media content
├─ igc-card-header                // optional header region
│  ├─ [slot="thumbnail"]          // optional avatar, icon, or small image
│  ├─ [slot="title"]              // card title
│  ├─ [slot="subtitle"]           // optional card subtitle
│  └─ default slot                // optional additional header content
├─ igc-card-content               // optional body region
│  └─ default slot                // text, lists, or custom content
└─ igc-card-actions               // optional action region
   ├─ [slot="start"]              // leading actions
   ├─ default slot                // centered actions
   └─ [slot="end"]                // trailing actions
```

## Getting Started

To use the Blazor Card, follow the [Ignite UI for Blazor Getting Started](../general-getting-started.md) topic for the basic project setup, then register the component for your target platform.

Register the Ignite UI for Blazor services:

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor();
```

Registering [`IgbCardModule`](mcp:get_api_reference?platform=blazor&component=IgbCardModule), the client resource module of the [`IgbCard`](mcp:get_api_reference?platform=blazor&component=IgbCard), is **optional**: the component loads its resources when it first renders. Listing it in `builder.Services.AddIgniteUIBlazor(typeof(IgbCardModule))` can be used to preload resources or to support elements created only on the client (see [Component Modules](../general-getting-started.md#component-modules)).

You will also need to link an additional CSS file to apply the styling to the [`IgbCard`](mcp:get_api_reference?platform=blazor&component=IgbCard) component. The following needs to be placed in the app's host page (**wwwroot/index.html** in a standalone Blazor WebAssembly or Blazor Hybrid app, **Pages/_Host.cshtml** in a Blazor Server app, **Components/App.razor** in a Blazor Web App):

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

The simplest way to start using the [`IgbCard`](mcp:get_api_reference?platform=blazor&component=IgbCard) is as follows:

```razor
<IgbCard>
  <IgbCardHeader>
    <h3 slot="title">Title</h3>
  </IgbCardHeader>
  <IgbCardContent>
    <p>Content</p>
  </IgbCardContent>
</IgbCard>
```

## Usage

Compose a card from the card container and whichever sub-components your content needs.

### Media

Use [`IgbCardMedia`](mcp:get_api_reference?platform=blazor&component=IgbCardMedia) to place images, video, or other media content in the card.

```razor
<IgbCardMedia>
  <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50" alt="New York city skyline" />
</IgbCardMedia>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample card-container">
    <IgbIcon @ref="IconRef" class="icon-registrar" />

    <IgbCard class="media-card">
        <IgbCardMedia class="media-card__media">
            <img src="https://dl.infragistics.com/x/img/card/card-2.png"
                 alt="A meeting room with a long table and chairs" />
        </IgbCardMedia>
        <IgbCardHeader>
            <span slot="title">Book your meeting room</span>
            <span slot="subtitle">Max 15 seats / 10 m2</span>
        </IgbCardHeader>
        <IgbCardActions>
            <div slot="start" class="media-card__icons">
                <IgbIcon IconName="videocam" Collection="material" />
                <IgbIcon IconName="bluetooth" Collection="material" />
                <IgbIcon IconName="volume-off" Collection="material" />
            </div>
            <IgbButton slot="end" Variant="ButtonVariant.Flat" class="media-card__action">
                Book now
            </IgbButton>
        </IgbCardActions>
    </IgbCard>

    <IgbCard class="media-card">
        <IgbCardMedia class="media-card__media">
            <img src="https://dl.infragistics.com/x/img/card/card-map-1.png"
                 alt="A street map with the event space marked" />
        </IgbCardMedia>
        <IgbCardHeader>
            <span slot="title">Main Event Space</span>
            <span slot="subtitle">Floor 4, Suite 402</span>
        </IgbCardHeader>
        <IgbCardActions>
            <div slot="start" class="media-card__icons">
                <IgbIcon IconName="directions-bus" Collection="material" />
                <IgbIcon IconName="directions-car" Collection="material" />
                <IgbIcon IconName="flight" Collection="material" />
            </div>
            <IgbButton slot="end" Variant="ButtonVariant.Flat" class="media-card__action">
                Get directions
            </IgbButton>
        </IgbCardActions>
    </IgbCard>

    <IgbCard class="media-card">
        <IgbCardMedia class="media-card__media">
            <img src="https://dl.infragistics.com/x/img/card/card-map-2.png"
                 alt="A map of Europe showing the sales region" />
        </IgbCardMedia>
        <IgbCardHeader>
            <span slot="title">View your coverage area</span>
            <span slot="subtitle">Sales region</span>
        </IgbCardHeader>
        <IgbCardActions>
            <div slot="start" class="media-card__icons">
                <IgbIcon IconName="place" Collection="material" />
                <IgbIcon IconName="pin-right" Collection="material" />
            </div>
            <IgbButton slot="end" Variant="ButtonVariant.Flat" class="media-card__action">
                See details
            </IgbButton>
        </IgbCardActions>
    </IgbCard>
</div>

@code {
    private const string VideocamIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z'></path></svg>";

    private const string BluetoothIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z'></path></svg>";

    private const string VolumeOffIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z'></path></svg>";

    private const string DirectionsBusIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z'></path></svg>";

    private const string DirectionsCarIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z'></path></svg>";

    private const string FlightIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'></path></svg>";

    private const string PlaceIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'></path></svg>";

    private const string PinRightIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><g transform='rotate(-45 12 12)'><path d='M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z'></path></g></svg>";

    private IgbIcon IconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && IconRef != null)
        {
            await IconRef.EnsureReady();
            await IconRef.RegisterIconFromTextAsync("videocam", VideocamIcon, "material");
            await IconRef.RegisterIconFromTextAsync("bluetooth", BluetoothIcon, "material");
            await IconRef.RegisterIconFromTextAsync("volume-off", VolumeOffIcon, "material");
            await IconRef.RegisterIconFromTextAsync("directions-bus", DirectionsBusIcon, "material");
            await IconRef.RegisterIconFromTextAsync("directions-car", DirectionsCarIcon, "material");
            await IconRef.RegisterIconFromTextAsync("flight", FlightIcon, "material");
            await IconRef.RegisterIconFromTextAsync("place", PlaceIcon, "material");
            await IconRef.RegisterIconFromTextAsync("pin-right", PinRightIcon, "material");
        }
    }
}
```

### Position

Place the media above or below the header. The card renders its regions in the order you add them, so the element order in your markup sets the media position.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample card-container">
    <IgbIcon @ref="IconRef" class="icon-registrar" />

    <div class="card-item">
        <span class="card-item__label">Media before header</span>

        <IgbCard class="position-card">
            <IgbCardMedia class="position-card__media">
                <img src="@RoomImage" alt="A meeting room with a long table and chairs" />
            </IgbCardMedia>
            <IgbCardHeader>
                <span slot="title">Book your meeting room</span>
                <span slot="subtitle">Max 15 seats / 10 m2</span>
            </IgbCardHeader>
            <IgbCardActions>
                <div slot="start" class="position-card__icons">
                    <IgbIcon IconName="videocam" Collection="material" />
                    <IgbIcon IconName="bluetooth" Collection="material" />
                    <IgbIcon IconName="volume-off" Collection="material" />
                </div>
                <IgbButton slot="end" Variant="ButtonVariant.Flat" class="position-card__action">
                    Book now
                </IgbButton>
            </IgbCardActions>
        </IgbCard>
    </div>

    <div class="card-item">
        <span class="card-item__label">Media after header</span>

        <IgbCard class="position-card">
            <IgbCardHeader>
                <span slot="title">Book your meeting room</span>
                <span slot="subtitle">Max 15 seats / 10 m2</span>
            </IgbCardHeader>
            <IgbCardMedia class="position-card__media">
                <img src="@RoomImage" alt="A meeting room with a long table and chairs" />
            </IgbCardMedia>
            <IgbCardActions>
                <div slot="start" class="position-card__icons">
                    <IgbIcon IconName="videocam" Collection="material" />
                    <IgbIcon IconName="bluetooth" Collection="material" />
                    <IgbIcon IconName="volume-off" Collection="material" />
                </div>
                <IgbButton slot="end" Variant="ButtonVariant.Flat" class="position-card__action">
                    Book now
                </IgbButton>
            </IgbCardActions>
        </IgbCard>
    </div>
</div>

@code {
    private const string VideocamIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z'></path></svg>";

    private const string BluetoothIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z'></path></svg>";

    private const string VolumeOffIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z'></path></svg>";

    private const string RoomImage = "https://dl.infragistics.com/x/img/card/card-2.png";

    private IgbIcon IconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && IconRef != null)
        {
            await IconRef.EnsureReady();
            await IconRef.RegisterIconFromTextAsync("videocam", VideocamIcon, "material");
            await IconRef.RegisterIconFromTextAsync("bluetooth", BluetoothIcon, "material");
            await IconRef.RegisterIconFromTextAsync("volume-off", VolumeOffIcon, "material");
        }
    }
}
```

### Header Slots

Use the header slots to define thumbnail, title, subtitle, and additional header content.

```razor
<IgbCardHeader>
  <IgbAvatar slot="thumbnail" Initials="TS" />
  <h3 slot="title">Title</h3>
  <span slot="subtitle">Subtitle</span>
</IgbCardHeader>
```

Pass a heading element, such as `<h3>`, to the `title` slot so the card takes its place in the document outline, and use a neutral inline element such as `<span>` for the `subtitle`. The header resets the margin and font of slotted content, so the heading keeps the card typography.

### Content

Use [`IgbCardContent`](mcp:get_api_reference?platform=blazor&component=IgbCardContent) for the card body text, lists, or custom content.

```razor
<IgbCardContent>
  <p>New York City comprises five boroughs where the Hudson River meets the Atlantic Ocean.</p>
</IgbCardContent>
```

### Elevated

Set [`elevated`](mcp:get_api_reference?platform=blazor&component=IgbCard&member=elevated) when the card should use the elevated visual treatment.

```razor
<IgbCard Elevated=true>
  ...
</IgbCard>
```

### Actions Slots

Use the actions slots to place leading, centered, and trailing actions in [`IgbCardActions`](mcp:get_api_reference?platform=blazor&component=IgbCardActions).

```razor
<IgbCardActions>
  <IgbButton slot="start">Like</IgbButton>
  <IgbButton>Comment</IgbButton>
  <IgbIconButton slot="end" IconName="more_vert" />
</IgbCardActions>
```

### Actions Orientation

Use the [`orientation`](mcp:get_api_reference?platform=blazor&component=IgbCardActions&member=orientation) property to arrange [`IgbCardActions`](mcp:get_api_reference?platform=blazor&component=IgbCardActions) content horizontally or vertically. The actions are horizontal by default, so set `orientation` to `vertical` to stack them.

```razor
<IgbCardActions Orientation="@ContentOrientation.Vertical">
  <IgbButton slot="start">Like</IgbButton>
  <IgbButton slot="start">Share</IgbButton>
  <IgbIconButton slot="end" IconName="more_vert" />
</IgbCardActions>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample card-container">
    <IgbIcon @ref="IconRef" class="icon-registrar" />

    <div class="card-item">
        <span class="card-item__label">Horizontal actions (default)</span>

        <IgbCard class="post-card">
            <IgbCardHeader>
                <IgbAvatar slot="thumbnail"
                           Shape="@AvatarShape.Circle"
                           Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png" />
                <span slot="title">Lena Fischer</span>
                <span slot="subtitle">@@lena &middot; 2h ago</span>
            </IgbCardHeader>
            <IgbCardContent>
                <p>
                    Just shipped our new design system &#128640; Six months of tokens,
                    components, and documentation &mdash; and it&rsquo;s finally live.
                    So proud of the team.
                </p>
            </IgbCardContent>
            <IgbCardActions Orientation="ContentOrientation.Horizontal">
                <IgbIconButton slot="end"
                               Variant="IconButtonVariant.Flat"
                               IconName="favorite"
                               Collection="material"
                               aria-label="Like" />
                <IgbIconButton slot="end"
                               Variant="IconButtonVariant.Flat"
                               IconName="bookmark"
                               Collection="material"
                               aria-label="Save" />
                <IgbIconButton slot="end"
                               Variant="IconButtonVariant.Flat"
                               IconName="linkedin"
                               Collection="material"
                               aria-label="Share on LinkedIn" />
            </IgbCardActions>
        </IgbCard>
    </div>

    <div class="card-item">
        <span class="card-item__label">Vertical actions</span>

        <IgbCard class="post-card post-card--vertical">
            <div class="post-card__body">
                <IgbCardHeader>
                    <IgbAvatar slot="thumbnail"
                               Shape="@AvatarShape.Circle"
                               Src="https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png" />
                    <span slot="title">Lena Fischer</span>
                    <span slot="subtitle">@@lena &middot; 2h ago</span>
                </IgbCardHeader>
                <IgbCardContent>
                    <p>
                        Just shipped our new design system &#128640; Six months of
                        tokens, components, and documentation &mdash; and it&rsquo;s
                        finally live. So proud of the team.
                    </p>
                </IgbCardContent>
            </div>

            <IgbCardActions Orientation="ContentOrientation.Vertical">
                <IgbIconButton Variant="IconButtonVariant.Flat"
                               IconName="favorite"
                               Collection="material"
                               aria-label="Like" />
                <IgbIconButton Variant="IconButtonVariant.Flat"
                               IconName="bookmark"
                               Collection="material"
                               aria-label="Save" />
                <IgbIconButton Variant="IconButtonVariant.Flat"
                               IconName="linkedin"
                               Collection="material"
                               aria-label="Share on LinkedIn" />
            </IgbCardActions>
        </IgbCard>
    </div>
</div>

@code {
    private const string FavoriteIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z'></path></svg>";

    private const string BookmarkIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z'></path></svg>";

    private const string LinkedinIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z'></path></svg>";

    private IgbIcon IconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && IconRef != null)
        {
            await IconRef.EnsureReady();
            await IconRef.RegisterIconFromTextAsync("favorite", FavoriteIcon, "material");
            await IconRef.RegisterIconFromTextAsync("bookmark", BookmarkIcon, "material");
            await IconRef.RegisterIconFromTextAsync("linkedin", LinkedinIcon, "material");
        }
    }
}
```

### Layout

Use layout wrappers when card sections need to be arranged horizontally or split between media and content areas.

For a horizontal card, group the header and content in one wrapper, add the actions beside that wrapper, and apply a flex row to the card content.

```razor
<IgbCard>
    <div class="card-horizontal">
        <div>
            <IgbCardHeader>
                <img slot="thumbnail" src="https://dl.infragistics.com/x/img/music/rozes.jpg" alt="Rozes album cover" />
                <span slot="title">Rozes</span>
                <span slot="subtitle">Under the Grave (2016)</span>
            </IgbCardHeader>
            <IgbCardContent>
                <p>As I have always said: I write what's real and what's true, even if it means throwing myself under the bus.</p>
            </IgbCardContent>
        </div>
        <div class="divider"></div>
        <IgbCardActions>
            <IgbIconButton Variant="IconButtonVariant.Flat" IconName="skip_previous" aria-label="Previous track" />
            <IgbIconButton Variant="IconButtonVariant.Flat" IconName="play_arrow" aria-label="Play" />
            <IgbIconButton Variant="IconButtonVariant.Flat" IconName="skip_next" aria-label="Next track" />
        </IgbCardActions>
    </div>
</IgbCard>
```

```css
.card-horizontal {
  display: flex;
  flex-direction: row;
  flex: 1 1 0%;
}

.card-horizontal igc-card-actions {
  justify-content: center;
}
```

For a semi-horizontal card, keep the header, content, and actions stacked in one column, then place the media section beside that column.

```razor
<IgbCard>
    <div class="semi-horizontal">
        <div>
            <IgbCardHeader>
                <IgbAvatar Src="https://dl.infragistics.com/x/img/music/singer_with_mic.jpg" slot="thumbnail" />
                <span slot="title">HERE</span>
                <span slot="subtitle">by Mellow D</span>
            </IgbCardHeader>
            <IgbCardContent>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </IgbCardContent>
            <IgbCardActions>
                <IgbButton>Play Album</IgbButton>
            </IgbCardActions>
        </div>
        <IgbCardMedia class="card-media">
            <img src="https://dl.infragistics.com/x/img/music/singer_female.jpg" alt="Singer" />
        </IgbCardMedia>
    </div>
</IgbCard>
```

```css
.semi-horizontal {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}

.card-media {
  width: 96px;
  min-width: 96px;
}
```

### Do/Don't

The card usually works as an overview UI and an entry point for more detailed information. Avoid clogging it with too much information, and as you create dashboards with it, size and arrange the cards consistently in order to form a layout grid with equal horizontal and vertical gaps between cards.

<div class="card-guidance">
  <figure class="card-guidance__item">
    
    <figcaption>
      <span class="card-guidance__do">Do</span>
      <span class="card-guidance__text">Keep body text brief and focused on essential information for quick readability.</span>
    </figcaption>
  </figure>
  <figure class="card-guidance__item">
    
    <figcaption>
      <span class="card-guidance__not">Don't</span>
      <span class="card-guidance__text">Avoid overloading the card body with long paragraphs or unnecessary detail.</span>
    </figcaption>
  </figure>
</div>

<style>{`
  .card-guidance {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    margin-bottom: 24px;
  }

  .card-guidance__item {
    margin: 0;
  }

  .card-guidance__item img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid #d3d3d3;
  }

  .card-guidance figcaption {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-top: 12px;
    text-align: start;
    font: inherit;
    color: inherit;
  }

  .card-guidance__do,
  .card-guidance__not {
    font-size: 18px;
    font-weight: 600;
  }

  .card-guidance__do {
    color: #0f8a3d;
  }

  .card-guidance__not {
    color: #d0273c;
  }

  @media (max-width: 600px) {
    .card-guidance {
      grid-template-columns: 1fr;
    }
  }
`}</style>

## Properties

The card API exposes container appearance and action-layout controls.

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| [`elevated`](mcp:get_api_reference?platform=blazor&component=IgbCard&member=elevated) | `boolean` | `false` | Sets the card to use an elevated appearance with shadow. |
| [`orientation`](mcp:get_api_reference?platform=blazor&component=IgbCardActions&member=orientation) | `"horizontal" \| "vertical"` | `"horizontal"` | Sets the layout orientation of [`IgbCardActions`](mcp:get_api_reference?platform=blazor&component=IgbCardActions). |

## Styling

The card appearance is controlled through theme variables.

| Variable | What it changes |
| -- | -- |
| `--ig-card-background` | Card background color. |
| `--ig-card-outline-color` | Card outline color. |
| `--ig-card-header-text-color` | Card title text color. |
| `--ig-card-subtitle-text-color` | Card subtitle text color. |
| `--ig-card-content-text-color` | Card content text color. |
| `--ig-card-actions-text-color` | Card actions text color. |
| `--ig-card-resting-shadow` | Card shadow in its resting state. |
| `--ig-card-hover-shadow` | Card shadow in its hover state. |
| `--ig-card-border-radius` | Card border radius. |

The card header also exposes CSS parts for its text containers.

| CSS Part | Description |
| -- | -- |
| `header` | Card header text container. |
| `title` | Title slot wrapper. |
| `subtitle` | Subtitle slot wrapper. |

### Sass Theming

Use the `card-theme` function when your application customizes Ignite UI themes through Sass.

```scss
@use "igniteui-theming/sass/themes" as *;

$custom-card-theme: card-theme(
  $background: #1f2937,
  $border-radius: 12px,
  $header-text-color: #ffffff,
  $content-text-color: #e5e7eb
);

:root {
  @include tokens($custom-card-theme);
}
```

### CSS Variables

Set component CSS variables directly when you need local styling without a Sass build step.

```css
igc-card {
  --ig-card-background: var(--ig-secondary-900);
  --ig-card-header-text-color: var(--ig-secondary-900-contrast);
  --ig-card-content-text-color: var(--ig-secondary-900-contrast);
}

igc-card-header::part(subtitle) {
  color: var(--ig-warn-500);
}
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample">
    <IgbIcon @ref="IconRef" class="icon-registrar" />

    <IgbCard class="balance-card">
        <IgbChip class="trend-chip">
            <IgbIcon slot="prefix" IconName="trending-up" Collection="material" />
            <span>+12.4%</span>
        </IgbChip>
        <IgbCardHeader>
            <span slot="title">Total balance</span>
        </IgbCardHeader>
        <IgbCardContent>
            <span class="balance-amount">$24,860</span>
        </IgbCardContent>
        <IgbCardActions>
            <div slot="end" class="balance-actions">
                <IgbIconButton Variant="IconButtonVariant.Flat"
                               IconName="link"
                               Collection="material"
                               aria-label="Copy account link" />
                <IgbIconButton Variant="IconButtonVariant.Flat"
                               IconName="more-vert"
                               Collection="material"
                               aria-label="More options" />
            </div>
        </IgbCardActions>
    </IgbCard>

    <IgbCard class="support-card">
        <IgbChip class="support-tag">Support</IgbChip>
        <IgbCardMedia class="support-media">
            <img src="https://dl.infragistics.com/x/img/card/card-3.png"
                 alt="Support agent reviewing system dashboards on a laptop" />
        </IgbCardMedia>
        <IgbCardHeader>
            <span slot="title">Review the issue and check system logs</span>
        </IgbCardHeader>
        <IgbCardActions>
            <span class="support-link">Find out more</span>
        </IgbCardActions>
    </IgbCard>
</div>

@code {
    private const string TrendingUpIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z'></path></svg>";

    private const string LinkIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'></path></svg>";

    private const string MoreVertIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'></path></svg>";

    private IgbIcon IconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && IconRef != null)
        {
            await IconRef.EnsureReady();
            await IconRef.RegisterIconFromTextAsync("trending-up", TrendingUpIcon, "material");
            await IconRef.RegisterIconFromTextAsync("link", LinkIcon, "material");
            await IconRef.RegisterIconFromTextAsync("more-vert", MoreVertIcon, "material");
        }
    }
}
```

### Styling with Tailwind

Use Tailwind utility classes when your application already uses Tailwind and you want the card layout and local color choices to stay in the component markup.

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

The card is a container. Grouping and media semantics come from the card regions, while keyboard operability and accessible names come from the content you place inside them.

### Keyboard Interaction

The card and its header, media, content, and actions regions declare no key handlers and are not in the tab order. Focus moves through the focusable content you place inside them, in DOM order.

| Key | Action |
| -- | -- |
| <kbd>Tab</kbd> | Moves focus to the next focusable element inside the card, such as a button or link in the content or actions area. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves focus to the previous focusable element inside the card. |

The actions area always renders its leading region, then its centered content, then its trailing region. Switching the actions to a vertical layout restyles them without reordering the DOM, so keyboard and screen reader order stay the same.

### Screen Readers / ARIA

- The card and every card region render plain slots and set no `role` or `aria-*` attributes. The wrapper elements inside the header have no accessible name and create no landmarks. Add a role and an accessible name on the card host yourself when your information architecture needs one.
- The `title` and `subtitle` slots render whatever element you pass and do not impose a heading level.
- Add `alt` text to images in the media region.
- Give icon-only buttons in the actions area an accessible name; the icon alone provides none.
- Use a single interactive element when the whole card triggers one action, rather than attaching a click handler to the container, so the action keeps a role and a name.

### Accessibility Compliance

Infragistics documents Ignite UI for Blazor accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| -- | -- |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) | The card regions project slotted content without rewriting it, so headings, text, lists, media, and controls keep their native semantics. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) | The card adds no key handling and no focus traps of its own, so keyboard-operable content inside it stays operable. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html) | The actions area renders its `start` slot, default slot, and `end` slot in a fixed DOM order that the vertical orientation does not change. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) | The card sets no implicit role, which leaves the name, role, and value of every control to the content you supply. |

Your responsibilities:

- Pass a real heading element to the title so the card takes its place in the document outline, and keep the subtitle as plain text.
- Provide alternative text for meaningful media, and give the media region an accessible name wherever it is exposed as an image.
- Give icon-only action buttons an accessible name.
- Keep DOM order and visual order aligned when you build horizontal or split card layouts with CSS.
- Keep sufficient contrast when overriding card colors.

## API References

Use these API references for the complete card, card section, and supporting component APIs.

[`IgbCard`](mcp:get_api_reference?platform=blazor&component=IgbCard)
[`IgbCardActions`](mcp:get_api_reference?platform=blazor&component=IgbCardActions)
[`IgbCardContent`](mcp:get_api_reference?platform=blazor&component=IgbCardContent)
[`IgbCardHeader`](mcp:get_api_reference?platform=blazor&component=IgbCardHeader)
[`IgbCardMedia`](mcp:get_api_reference?platform=blazor&component=IgbCardMedia)
[`IgbAvatar`](mcp:get_api_reference?platform=blazor&component=IgbAvatar)
[`IgbButton`](mcp:get_api_reference?platform=blazor&component=IgbButton)
[`IgbIconButton`](mcp:get_api_reference?platform=blazor&component=IgbIconButton)
[`IgbIcon`](mcp:get_api_reference?platform=blazor&component=IgbIcon)
[`IgbRipple`](mcp:get_api_reference?platform=blazor&component=IgbRipple)

## Dependencies

The card uses its own header, media, content, and actions sub-components. Cards that include thumbnails, actions, icons, or ripples also depend on the corresponding [`IgbAvatar`](mcp:get_api_reference?platform=blazor&component=IgbAvatar), [`IgbButton`](mcp:get_api_reference?platform=blazor&component=IgbButton), [`IgbIconButton`](mcp:get_api_reference?platform=blazor&component=IgbIconButton), [`IgbIcon`](mcp:get_api_reference?platform=blazor&component=IgbIcon), and [`IgbRipple`](mcp:get_api_reference?platform=blazor&component=IgbRipple) components.

Register the card module and any supporting modules that your card content uses. Include a Ignite UI for Blazor theme stylesheet once in your application.

## Additional Resources

Use these resources to continue with Ignite UI for Blazor Card support, source, and related layout guidance.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

## Related Components

Use the [Grid](../grids/data-grid.md) when users need dense tabular data with sorting, filtering, and column-level interaction. Use the [List](../grids/list.md) when repeated items should remain compact and primarily vertical.

## FAQ

  **Q: How do I make an entire card clickable without breaking screen readers?**

    The card is a plain container and adds no interactive behavior, so wrapping the whole card in a link is a common but harmful shortcut: the accessible name of that link becomes every piece of text in the card. Put a real link or button on the card title instead, then stretch it over the card with an absolutely positioned pseudo-element that covers the card box. The title stays the accessible name, the whole rectangle stays clickable, and text selection and middle-click keep working.
  
  **Q: How do I make cards in a row or grid the same height?**

    The card sizes itself from its content and does not equalize heights across siblings. Lay the cards out in a CSS grid or a flex row so each card stretches to the row height, give the media region a fixed height or `aspect-ratio`, and clamp the title and body to a set number of lines with `-webkit-line-clamp`. Unequal card heights almost always come from letting each image and each paragraph decide its own height.
  
  **Q: Why is my card image cropped, and how do I control its size?**

    The card media region stretches its content to the full width and height of the region and applies `object-fit: cover`, so the image is cropped rather than distorted. Size the media region itself with CSS `height` or `aspect-ratio`; changing the dimensions of the image inside has no effect.
  
  **Q: Why do my card actions appear in a different region than the one I placed them in?**

    Content in the `end` slot of the card actions takes an automatic leading margin so it aligns with the opposite edge of the actions area, which makes a single trailing action look detached from the rest. Move the element to the `start` slot or to the default slot when it belongs with the other actions. The three regions always render in `start`, default, `end` order regardless of the orientation.
  
  **Q: When should I use Grid or List instead of Card?**

    Use Grid when the data is dense and tabular and readers need to scan, sort, or compare across columns, and use List when many short, uniform rows must fit in a small space. Use Card when each item deserves its own media, longer text, and its own actions. A long scroll of cards is usually a list in disguise.
  


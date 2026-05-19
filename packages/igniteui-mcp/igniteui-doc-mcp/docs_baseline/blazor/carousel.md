---
title: Blazor Carousel | Infragistics
_description: Use Ignite UI for Blazor Carousel component to navigate through a collection of slides, cards or page-based interfaces with endless programmatic features. Try it now
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Carousel component, Blazor Carousel control
_license: MIT
mentionedTypes: ["Carousel"]
_tocName: Carousel
---

# Blazor Carousel Overview

The Ignite UI for Blazor Carousel is a responsive, lightweight component that provides the most flexible way to create slideshow-like web experience for users who navigate back and forth through a collection of images with text slides, links, and other html elements.

The Blazor Carousel component allows you to use animations, slide transitions, and customization so you can easily tweak the interface and build Blazor custom carousel.

## Blazor Carousel Example

The Blazor Carousel demo you see below shows slides containing only images.

```razor
@using IgniteUI.Blazor.Controls

<style>
    .carousel-container {
        padding: 16px;
    }

    .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        object-fit: fill;
        max-width: 90%;
    }

    igc-carousel {
        margin-inline: auto;
        max-width: 75%;
        height: 400px;
    }

    igc-carousel-slide::part(base) {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 75%;
        margin-inline: auto;
    }
</style>

<div class="carousel-container">
  <IgbCarousel>
    <IgbCarouselSlide>
      <div class="image-container">
        <img src="https://dl.infragistics.com/x/img/carousel/ignite-ui-angular-indigo-design.png" />
      </div>
    </IgbCarouselSlide>
    <IgbCarouselSlide>
      <div class="image-container">
        <img src="https://dl.infragistics.com/x/img/carousel/slider-image-chart.png" />
      </div>
    </IgbCarouselSlide>
    <IgbCarouselSlide >
      <div class="image-container">
        <img src="https://dl.infragistics.com/x/img/carousel/ignite-ui-angular-charts.png" />
      </div>
    </IgbCarouselSlide>
  </IgbCarousel>
</div>

@code {

}
```

## Usage

Before using the [`IgbCarousel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbCarouselModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbCarousel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

Now that you have the Ignite UI for Blazor Carousel imported, you can start with a basic configuration of the [`IgbCarousel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html) and its slides.

Use the [`IgbCarousel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html) selector to wrap your slides. The slides may feature any valid html content inside, including other components.

```razor
<IgbCarousel>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/ignite-ui-angular-indigo-design.png" alt="ignite-ui-angular-indigo-design" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/slider-image-chart.png" alt="slider-image-chart" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/ignite-ui-angular-charts.png" alt="ignite-ui-angular-charts" />
    </IgbCarouselSlide>
</IgbCarousel>
```

If you want a slide to be active by default, use the `Active` attribute:

```razor
<IgbCarousel>
    ...
    <IgbCarouselSlide>
        ...
    </IgbCarouselSlide>
    <IgbCarouselSlide Active="true">
        ...
    </IgbCarouselSlide>
</IgbCarousel>
```

> [!NOTE]
> If no active slide is set, the first one will be set by default. If there are multiple active slides on initial rendering or subsequent updates, only the last one will be taken into account.

## Examples

### Carousel Configuration

By default, the [`IgbCarousel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html) has its [`DisableLoop`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html#IgniteUI_Blazor_Controls_IgbCarousel_DisableLoop) property set to **false** (looping occurs when the first slide comes after the last by navigating using the Next action, or when the last slide comes after the first by using the Previous action). The looping behavior can be disabled by setting the value of the [`DisableLoop`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html#IgniteUI_Blazor_Controls_IgbCarousel_DisableLoop) property to **true**.

```razor
<IgbCarousel DisableLoop="true">
    ...
</IgbCarousel>
```

To keep track of each slide index, the carousel has indicators that are positioned at the `end` of the carousel by default. In order to change this behavior, use the [`IndicatorsOrientation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html#IgniteUI_Blazor_Controls_IgbCarousel_IndicatorsOrientation) property and assign it to `start`.

```razor
<IgbCarousel IndicatorsOrientation="@CarouselIndicatorsOrientation.Start">
    ...
</IgbCarousel>
```

By default, the [`IgbCarousel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html) displays its navigation buttons and indicators. Use the [`HideIndicators`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html#IgniteUI_Blazor_Controls_IgbCarousel_HideIndicators) property to hide the indicators and the [`HideNavigation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html#IgniteUI_Blazor_Controls_IgbCarousel_HideNavigation) property to hide the navigation buttons.

```razor
<IgbCarousel HideNavigation="true" HideIndicators="true">
    ...
</IgbCarousel>
```

The [`IgbCarousel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html) supports vertical mode. Use the [`Vertical`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html#IgniteUI_Blazor_Controls_IgbCarousel_Vertical) property to enable it.

```razor
<IgbCarousel Vertical="true">
    ...
</IgbCarousel>
```

### Custom indicators

To add Blazor custom carousel indicators, use the [`IgbCarouselIndicator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarouselIndicator.html):

```razor
<IgbCarousel>
    <IgbCarouselIndicator>
        <span>🤍</span>
        <span slot="active">❤️</span>
    </IgbCarouselIndicator>
    <IgbCarouselIndicator>
        <span>🤍</span>
        <span slot="active">❤️</span>
    </IgbCarouselIndicator>

    <IgbCarouselSlide>
        <img src="assets/images/card/media/the_red_ice_forest.jpg" alt="the_red_ice_forest" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/card/media/yosemite.jpg" alt="yosemite" />
    </IgbCarouselSlide>
</IgbCarousel>
```

The Ignite UI for Blazor Carousel component allows users to use different elements for the active and inactive state of a single indicator. It is mandatory to provide two elements for each slot (empty and active) when declaring an indicator, even if they are the same.

### Custom navigation buttons

To achieve this, use the `previous-button` and `next-button` slots:

```razor
<IgbCarousel>
    <IgbIcon slot="previous-button" IconName="previous" Collection="material"></IgbIcon>
    <IgbIcon slot="next-button" IconName="next" Collection="material"></IgbIcon>
    ...
</IgbCarousel>
```

### Slide containing other components

This carousel is going to contain slides with forms and images:

```razor
<IgbCarousel>
    <IgbCarouselSlide>
        <div>
            <img src="assets/images/svg/carousel/SignUp.svg">
            <form>
                <IgbInput DisplayType="@InputType.Text" Placeholder="Username">
                    <IgbIcon slot="prefix" IconName="person" Collection="material" @ref="iconRef"></IgbIcon>
                </IgbInput>
                <IgbInput DisplayType="@InputType.Password" Placeholder="Password">
                    <IgbIcon slot="prefix" IconName="password" Collection="material"></IgbIcon>
                </IgbInput>
                <IgbButton DisplayType="@ButtonBaseType.Reset">Sign In</IgbButton>
            </form>
        </div>
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <div>
            <img src="assets/images/svg/carousel/Route.svg">
            <form>
                <IgbInput DisplayType="@InputType.Text" Placeholder="Search">
                    <IgbIcon slot="prefix" IconName="search" Collection="material"></IgbIcon>
                </IgbInput>
                <IgbButton DisplayType="@ButtonBaseType.Reset">Search</IgbButton>
            </form>
        </div>
    </IgbCarouselSlide>
</IgbCarousel>
```

#### Demo

```razor
@using IgniteUI.Blazor.Controls

<style>
    .carousel-container {
        padding: 16px;
    }

    igc-carousel {
        margin-inline: auto;
        max-width: 75%;
        height: 500px;
    }

    igc-carousel-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }

        igc-carousel-slide div {
            text-align: center;
            max-width: 40%;
            margin-inline: auto;
        }

            igc-carousel-slide div * {
                margin-block: 8px;
            }
</style>

<div class="carousel-container">
    <IgbCarousel>
        <IgbCarouselSlide>
            <div>
                <img src="https://dl.infragistics.com/x/img/carousel/SignUp.svg">
                <form>
                    <IgbInput DisplayType="@InputType.Text" Placeholder="Username">
                        <IgbIcon slot="prefix" IconName="person" Collection="material" @ref="iconRef"></IgbIcon>
                    </IgbInput>
                    <IgbInput DisplayType="@InputType.Password" Placeholder="Password">
                        <IgbIcon slot="prefix" IconName="password" Collection="material"></IgbIcon>
                    </IgbInput>
                    <IgbButton DisplayType="@ButtonBaseType.Reset">Sign In</IgbButton>
                </form>
            </div>
        </IgbCarouselSlide>
        <IgbCarouselSlide>
            <div>
                <img src="https://dl.infragistics.com/x/img/carousel/Route.svg">
                <form>
                    <IgbInput DisplayType="@InputType.Text" Placeholder="Search">
                        <IgbIcon slot="prefix" IconName="search" Collection="material"></IgbIcon>
                    </IgbInput>
                    <IgbButton DisplayType="@ButtonBaseType.Reset">Search</IgbButton>
                </form>
            </div>
        </IgbCarouselSlide>
    </IgbCarousel>
</div>

@code {

    private string person = "<svg width='24' height='24' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><path d='M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z'/></svg>";
    private string password = "<svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V10.0546C19.8648 10.1379 20.5907 10.348 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C16.867 10 16.4515 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8ZM14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16Z'/></svg>";
    private string search = "<svg width='24' height='24' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' /></svg>";

    private IgbIcon iconRef;

    protected override void OnAfterRender(bool firstRender)
    {
        if (this.iconRef != null && firstRender)
        {
            this.iconRef.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.iconRef.RegisterIconFromText("person", person, "material"); ;
                this.iconRef.RegisterIconFromText("password", password, "material"); ;
                this.iconRef.RegisterIconFromText("search", search, "material"); ;
            }));
        }
    }
}
```

## Animations

Animated slide transitions provide the end-users a nice experience when interacting with the carousel.

The carousel is configured to use the `slide` animation by default, but it also supports `fade` as an alternative animation.

Use the [`AnimationType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html#IgniteUI_Blazor_Controls_IgbCarousel_AnimationType) property to change the animation.

```razor
<IgbCarousel AnimationType="@CarouselAnimationType.Fade">
    ...
</IgbCarousel>
```

Setting `none` to the [`AnimationType`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html#IgniteUI_Blazor_Controls_IgbCarousel_AnimationType) property disables the animations.

### Demo

The demo below demonstrates the different types of animations, which the carousel supports.

```razor
@using IgniteUI.Blazor.Controls

<style>
.carousel-wrapper {
    height: 600px;
    width: 90%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.action-wrapper {
    height: 40px;
    width: 500px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.action {
    display: flex;
    align-items: center;
}

.slide-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

igc-carousel {
    border: 0.5px solid #dde0e4;
}

igc-select {
    width: 150px;
    margin-left: 10px;
    --ig-size: var(--ig-size-small);
}

igc-card {
    border: none;
}

igc-card-header {
    padding: 8px 16px;
}
</style>

<div class="carousel-wrapper">
    <div class="action-wrapper">
        <div class="action">
            <span>Animation type</span>
            <IgbSelect Change="OnSelectChange">
                <IgbSelectItem Value="slide" Selected="true">Slide</IgbSelectItem>
                <IgbSelectItem Value="fade">Fade</IgbSelectItem>
                <IgbSelectItem Value="none">None</IgbSelectItem>
            </IgbSelect>
        </div>
        <div class="action">
            <IgbSwitch Change="OnSwitchChange" LabelPosition="@ToggleLabelPosition.Before">Vertical alignment</IgbSwitch>
        </div>
    </div>
    <IgbCarousel @ref="carouselRef" HideIndicators="true">
        <IgbCarouselSlide>
            <div class="slide-wrapper">
                <IgbCard>
                    <IgbCardHeader>
                        <h3 slot="title">Ignite UI for Angular</h3>
                    </IgbCardHeader>
                    <IgbCardContent>
                        <p>30+ Material-based Angular components to code speedy web apps faster.</p>
                    </IgbCardContent>
                    <IgbCardMedia>
                        <img src="https://dl.infragistics.com/x/img/carousel/slide1-angular.png">
                    </IgbCardMedia>
                    <IgbCardActions>
                        <IgbButton slot="start" href="https://www.infragistics.com/products/ignite-ui-angular" Target="@ButtonBaseTarget._blank" Rel="noopener">
                            Visit Page
                        </IgbButton>
                    </IgbCardActions>
                </IgbCard>
            </div>
        </IgbCarouselSlide>
        <IgbCarouselSlide>
            <div class="slide-wrapper">
                <IgbCard>
                    <IgbCardHeader>
                        <h3 slot="title">Ignite UI for Javascript</h3>
                    </IgbCardHeader>
                    <IgbCardContent>
                        <p>A complete JavaScript UI library empowering you to build data-rich responsive web apps.</p>
                    </IgbCardContent>
                    <IgbCardMedia>
                        <img src="https://dl.infragistics.com/x/img/carousel/slide2-ignite.png">
                    </IgbCardMedia>
                    <IgbCardActions>
                        <IgbButton slot="start" href="https://www.infragistics.com/products/ignite-ui" Target="@ButtonBaseTarget._blank" Rel="noopener">
                            Visit Page
                        </IgbButton>
                    </IgbCardActions>
                </IgbCard>
            </div>
        </IgbCarouselSlide>
        <IgbCarouselSlide>
            <div class="slide-wrapper">
                <IgbCard>
                    <IgbCardHeader>
                        <h3 slot="title">Ultimate UI for ASP.NET</h3>
                    </IgbCardHeader>
                    <IgbCardContent>
                        <p>Build full-featured business apps with the most versatile set of ASP.NET AJAX UI controls.</p>
                    </IgbCardContent>
                    <IgbCardMedia>
                        <img src="https://dl.infragistics.com/x/img/carousel/slide3-aspnet.png">
                    </IgbCardMedia>
                    <IgbCardActions>
                        <IgbButton slot="start" href="https://www.infragistics.com/products/aspnet" Target="@ButtonBaseTarget._blank" Rel="noopener">
                            Visit Page
                        </IgbButton>
                    </IgbCardActions>
                </IgbCard>
            </div>
        </IgbCarouselSlide>
    </IgbCarousel>
</div>

@code {

    private IgbCarousel carouselRef;

    private void OnSelectChange(IgbSelectItemComponentEventArgs args)
    {
        switch (args.Detail.Value)
        {
            case "slide":
                this.carouselRef.AnimationType = HorizontalTransitionAnimation.Slide;
                break;
            case "fade":
                this.carouselRef.AnimationType = HorizontalTransitionAnimation.Fade;
                break;
            default:
                this.carouselRef.AnimationType = HorizontalTransitionAnimation.None;
                break;
        }
    }

    private void OnSwitchChange(IgbCheckboxChangeEventArgs args)
    {
        this.carouselRef.Vertical = args.Detail.Checked;
    }
}
```

## Navigation

Transition and navigation are the most important carousel features.

The navigation in the carousel can be handled by the user through navigation buttons, indicators, keyboard navigation and touch interaction on mobile devices.

### Touch gestures

By default, the carousel can be used on any touch-enabled device.

The carousel [animations](carousel.md#animations) are fully supported on touch devices, which makes the carousel consistent with any platform and great when used in progressive web applications ([PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)).

### Keyboard navigation

- Navigation buttons
  - <kbd>SPACE</kbd> or <kbd>ENTER</kbd> key - navigates to the next/previous slide.
- Indicators
  - <kbd>🡐</kbd> key - navigates to the previous (next in Right-to-Left mode) slide.
  - <kbd>🡒</kbd> key - navigates to the next (previous in Right-to-Left mode) slide.
  - <kbd>HOME</kbd> key - navigates to the first (last in Right-to-Left mode) slide.
  - <kbd>END</kbd> key - navigates to the last (first in Right-to-Left mode) slide.

### Automatic transitioning

The [`IgbCarousel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html) can be easily configured to change the slides automatically, without any user interaction. This way you can create your own slideshow by only setting a transition interval to the [`Interval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html#IgniteUI_Blazor_Controls_IgbCarousel_Interval) property, which determines the amount of time in milliseconds between slides transition.

> [!NOTE]
> Hovering the mouse over any carousel content or moving keyboard focus to any of the carousel content pauses automatic transitioning. Automatic transitioning resumes when the mouse moves away from the carousel or when keyboard focus moves out of the carousel content.
> This can be prevented by setting [`DisablePauseOnInteraction`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html#IgniteUI_Blazor_Controls_IgbCarousel_DisablePauseOnInteraction) property to **true**.

```razor
<IgbCarousel Interval="2000" DisablePauseOnInteraction="true">
    ...
</IgbCarousel>
```

## Advanced Example

Let's create a fully automated carousel with looping enabled. We will configure the indicators to be a thumbnail representation of each slide.

To achieve this goal, we have to do the following configurations to the carousel:

- enable the [`DisablePauseOnInteraction`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html#IgniteUI_Blazor_Controls_IgbCarousel_DisablePauseOnInteraction) property
- enable the [`HideNavigation`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html#IgniteUI_Blazor_Controls_IgbCarousel_HideNavigation) property
- enable the [`Vertical`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html#IgniteUI_Blazor_Controls_IgbCarousel_Vertical) property
- add transition [`Interval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html#IgniteUI_Blazor_Controls_IgbCarousel_Interval)
- add custom [`IgbCarouselIndicator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarouselIndicator.html) for each slide

Our carousel will look like this in the template:

```razor
<IgbCarousel DisablePauseOnInteraction="true"
             HideNavigation="true"
             Interval="2000"
             Vertical="true"
             AnimationType="@CarouselAnimationType.Fade">
    <IgbCarouselIndicator>
        <img class="blurred" src="assets/images/carousel/WonderfulCoastThumb.png" width="50" height="60" />
        <img slot="active" src="assets/images/carousel/WonderfulCoastThumb.png" width="50" height="60" />
    </IgbCarouselIndicator>
    <IgbCarouselIndicator>
        <img class="blurred" src="assets/images/carousel/CulturalDipThumb.png" width="50" height="60" />
        <img slot="active" src="assets/images/carousel/CulturalDipThumb.png" width="50" height="60" />
    </IgbCarouselIndicator>
    <IgbCarouselIndicator>
        <img class="blurred" src="assets/images/carousel/GoldenBeachesThumb.png" width="50" height="60" />
        <img slot="active" src="assets/images/carousel/GoldenBeachesThumb.png" width="50" height="60" />
    </IgbCarouselIndicator>
    <IgbCarouselIndicator>
        <img class="blurred" src="assets/images/carousel/IslandOfHistoryThumb.png" width="50" height="60" />
        <img slot="active" src="assets/images/carousel/IslandOfHistoryThumb.png" width="50" height="60" />
    </IgbCarouselIndicator>
    <IgbCarouselIndicator>
        <img class="blurred" src="assets/images/carousel/AmazingBridgeThumb.png" width="50" height="60" />
        <img slot="active" src="assets/images/carousel/AmazingBridgeThumb.png" width="50" height="60" />
    </IgbCarouselIndicator>

    <IgbCarouselSlide>
        <img src="assets/images/carousel/WonderfulCoast.png" alt="WonderfulCoast" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/CulturalDip.png" alt="CulturalDip" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/GoldenBeaches.png" alt="GoldenBeaches" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/IslandOfHistory.png" alt="IslandOfHistory" />
    </IgbCarouselSlide>
    <IgbCarouselSlide>
        <img src="assets/images/carousel/AmazingBridge.png" alt="AmazingBridge" />
    </IgbCarouselSlide>
</IgbCarousel>
```

These configurations will have the following result:

```razor
@using IgniteUI.Blazor.Controls

<style>
    igc-carousel {
        margin-inline: auto;
        max-width: 75%;
    }

        igc-carousel::part(indicators) {
            border-radius: 2px;
        }

    .blurred {
        filter: blur(2px);
        opacity: 0.5;
    }
</style>

<div class="container sample">
    <IgbCarousel DisablePauseOnInteraction="true"
                 HideNavigation="true"
                 Interval="2000"
                 Vertical="true"
                 AnimationType="@HorizontalTransitionAnimation.Fade">
        <IgbCarouselIndicator>
            <img class="blurred"
                 src="https://dl.infragistics.com/x/img/carousel/WonderfulCoastThumb.png"
                 alt="Wonderful Coast Thumb"
                 width="50"
                 height="60" />
            <img slot="active"
                 src="https://dl.infragistics.com/x/img/carousel/WonderfulCoastThumb.png"
                 alt="Wonderful Coast Thumb Active"
                 width="50"
                 height="60" />
        </IgbCarouselIndicator>
        <IgbCarouselIndicator>
            <img class="blurred"
                 src="https://dl.infragistics.com/x/img/carousel/CulturalDipThumb.png"
                 alt="Cultural Dip Thumb"
                 width="50"
                 height="60" />
            <img slot="active"
                 src="https://dl.infragistics.com/x/img/carousel/CulturalDipThumb.png"
                 alt="Cultural Dip Thumb Active"
                 width="50"
                 height="60" />
        </IgbCarouselIndicator>
        <IgbCarouselIndicator>
            <img class="blurred"
                 src="https://dl.infragistics.com/x/img/carousel/GoldenBeachesThumb.png"
                 alt="Golden Beaches Thumb"
                 width="50"
                 height="60" />
            <img slot="active"
                 src="https://dl.infragistics.com/x/img/carousel/GoldenBeachesThumb.png"
                 alt="Golden Beaches Thumb Active"
                 width="50"
                 height="60" />
        </IgbCarouselIndicator>
        <IgbCarouselIndicator>
            <img class="blurred"
                 src="https://dl.infragistics.com/x/img/carousel/IslandOfHistoryThumb.png"
                 alt="Island Of History Thumb"
                 width="50"
                 height="60" />
            <img slot="active"
                 src="https://dl.infragistics.com/x/img/carousel/IslandOfHistoryThumb.png"
                 alt="Island Of History Thumb Active"
                 width="50"
                 height="60" />
        </IgbCarouselIndicator>
        <IgbCarouselIndicator>
            <img class="blurred"
                 src="https://dl.infragistics.com/x/img/carousel/AmazingBridgeThumb.png"
                 alt="Amazing Bridge Thumb"
                 width="50"
                 height="60" />
            <img slot="active"
                 src="https://dl.infragistics.com/x/img/carousel/AmazingBridgeThumb.png"
                 alt="Amazing Bridge Thumb Active"
                 width="50"
                 height="60" />
        </IgbCarouselIndicator>

        <IgbCarouselSlide>
            <img src="https://dl.infragistics.com/x/img/carousel/WonderfulCoast.png"
                 alt="Wonderful Coast" />
        </IgbCarouselSlide>
        <IgbCarouselSlide>
            <img src="https://dl.infragistics.com/x/img/carousel/CulturalDip.png"
                 alt="Cultural Dip" />
        </IgbCarouselSlide>
        <IgbCarouselSlide>
            <img src="https://dl.infragistics.com/x/img/carousel/GoldenBeaches.png"
                 alt="Golden Beaches" />
        </IgbCarouselSlide>
        <IgbCarouselSlide>
            <img src="https://dl.infragistics.com/x/img/carousel/IslandOfHistory.png"
                 alt="Island Of History" />
        </IgbCarouselSlide>
        <IgbCarouselSlide>
            <img src="https://dl.infragistics.com/x/img/carousel/AmazingBridge.png"
                 alt="Amazing Bridge" />
        </IgbCarouselSlide>
    </IgbCarousel>
</div>

@code {
}
```

## Accessibility

### WAI-ARIA Roles, States, and Properties

- The Carousel base element role is [`region`](https://www.w3.org/TR/wai-aria-1.1/#region) - section containing content that is relevant to specific purpose and users will likely want to be able to navigate easily.
- Carousel indicators are with role [`tab`](https://www.w3.org/TR/wai-aria-1.1/#tab) - grouping label providing a mechanism for selecting the tab content that is to be rendered to the user
- The element that serves as the container for the set of tabs (carousel indicators) is with role [`tablist`](https://www.w3.org/TR/wai-aria-1.1/#tablist).
- Each slide element is set with role [`tabpanel`](https://www.w3.org/TR/wai-aria-1.1/#tabpanel).

### ARIA support

#### Carousel component

- **Attributes**
  - [aria-roledescription](https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription) set to "carousel".
  - [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) - used to set the priority with which screen reader should treat updates to live regions - the possible settings are: **off** and **polite**. The default setting is **polite** and is set to the element that serves as the container for the set of slides. When the [`Interval`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html#IgniteUI_Blazor_Controls_IgbCarousel_Interval) option is set and the carousel is in playing state, the **aria-live** attribute would be set to **off**.
  - [aria-label](https://www.w3.org/TR/wai-aria/states_and_properties#aria-label) (navigation buttons) - "Previous slide"/"Next slide".

#### Slide component

- **Attributes**
  - id - follows the pattern "igc-carousel-slide-${incremented_number}".
  - [aria-roledescription](https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription) set to "slide".
  - [aria-label](https://www.w3.org/TR/wai-aria/#aria-label) follows the pattern "${index + 1} of ${total}".

#### Indicator component

- **Attributes**
  - [aria-label](https://www.w3.org/TR/wai-aria/#aria-label) follows the pattern "Slide ${index + 1}"
  - [aria-selected](https://www.w3.org/TR/wai-aria-1.1/#aria-selected) set to **true** or **false** based on the active slide.

## API References

- [`IgbCarousel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarousel.html)
- [`IgbCarouselSlide`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarouselSlide.html)
- [`IgbCarouselIndicator`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCarouselIndicator.html)
- [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html)
- [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html)
- [`IgbButton`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbButton.html)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

---
title: Blazor Accordion | Accordion | Infragistics
_description: Accordion is used to build vertical expandable panels in accordion menu.
_keywords: Blazor Accordion, Ignite UI for Blazor, Infragistics
_license: MIT
mentionedTypes: ["Accordion", "Infragistics.Controls.Layouts.Implementation.ExpansionPanel"]
namespace: Infragistics.Controls
_tocName: Accordion
---

# Blazor Accordion Overview

The Ignite UI for Blazor Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page. It offers keyboard navigation and API to control the underlying panels' expansion state.

Users are enabled to interact and navigate among a list of items, such as thumbnails or labels. Each one of those items can be toggled (expanded or collapsed) in order to reveal the containing information. Depending on the configuration, there can be a single or multiple expanded items at a time.

## Blazor Accordion Example

The following is a basic Ignite UI for Blazor Accordion example of a FAQ section. It operates as an accordion, with individually working sections. You can toggle each text block with a single click, while expanding multiple panels at the same time. This way you can read information more easily, without having to go back and forth between an automatically expanding and collapsing panel, which conceals the previously opened section every time.

In it, you can see how to define an accordion and its expansion panels. The sample also demonstrates the two types of expansion behavior. The switch button sets the [`SingleExpand`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAccordion.html#IgniteUI_Blazor_Controls_IgbAccordion_SingleExpand) property to toggle between single and multiple branches to be expanded at a time.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical scrollable">
    <IgbSwitch Change="OnSwitchChange">Single Expand</IgbSwitch>
    <IgbAccordion SingleExpand="@SingleExpand">
        <IgbExpansionPanel>
            <span slot="title">What has changed about subscription and pricing model?</span>
            <span>
                We have moved to a subscription-based pricing model for all our developer tools. This makes it easier
                for you to manage your license subscriptions and allows us to provide a better level of service for you. We
                updated our pricing and packages to provide you with flexible options and the best value. This includes Ignite UI
                (formerly Ignite UI for JavaScript) which includes all of our JavaScript framework components for web development,
                including: Angular, ASP.NET (Core and MVC), Blazor, JQuery, React and Web Components), as well as Infragistics Professional,
                Infragistics Ultimate, our Ultimate UI products. We also offer multi-year subscriptions options with a built-in discount,
                so you can see the value up front. With these updates we are confident that we are providing the best platforms and the best
                price.
            </span>
        </IgbExpansionPanel>
        <IgbExpansionPanel>
            <span slot="title">Who will the updated changes impact?</span>
            <span>
                The license updates will impact all new and current customers using Ignite UI, Infragistics Professional and
                Infragistics Ultimate. Specifically, we have also made updates to our product and packaging for Ignite UI for JavaScript,
                Ignite UI for Angular, Ignite UI for React and Ignite UI for Web components. For more information, please refer to this
                blog: Announcement: Changes to Ignite UI Product & Packaging The pricing has been updated for all products and packages.
                So, all new or additional licenses will be sold based on our new pricing and packages. All existing license agreements will
                be honored and renewed based upon the current agreement.
            </span>
        </IgbExpansionPanel>
        <IgbExpansionPanel>
            <span slot="title">What is the difference between your old model and your current subscription model for Ignite UI?</span>
            <span>
                For Ignite UI customers, we are moving away from NPM for licensed packages. The current NPM packages will be replaced with
                packages that include a “Trial Version” watermark. Licensed packages for Ignite UI will be available from our cloud hosted ProGet
                server. For more information, please refer to this article: Moving from Trial to Licensed Ignite UI NPM Packages
            </span>
        </IgbExpansionPanel>
        <IgbExpansionPanel>
            <span slot="title">What happens if I don't renew my subscription?</span>
            <span>Any unlicensed or trial versions of Ignite UI for Angular, React and Web Components will now include this watermark.</span>
        </IgbExpansionPanel>
        <IgbExpansionPanel>
            <span slot="title">If I don't renew my subscription will I still have access to previous versions of Infragistics products?</span>
            <span>
                Any version of Infragistics software which you have downloaded can continue to be used perpetually. Access to download any new or
                previous versions through our customer portal and package feeds will require maintaining an active subscription by continuing
                to renew it.
            </span>
        </IgbExpansionPanel>
    </IgbAccordion>
</div>

@code {
    public bool SingleExpand { get; set; }

    public void OnSwitchChange(IgbCheckboxChangeEventArgs args)
    {
        SingleExpand = args.Detail.Checked;
    }
}
```

<div class="divider--half"></div>

## Getting Started with Blazor Accordion

Before using the [`IgbAccordion`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAccordion.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbAccordionModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbAccordion`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAccordion.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

Now you can start with a basic configuration of the [`IgbAccordion`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAccordion.html) and its panels.

## Usage

Each section in the Blazor Accordion Component is defined using an Blazor Expansion Panel.
Panels provide `Disabled` and `Open` properties, which give you the ability to configure the states of the panel as per your requirement.

### Declaring an Accordion

The accordion wraps all expansion panels declared inside it.

```razor
<IgbAccordion SingleExpand=true>
    <IgbExpansionPanel>
        <div slot="title">Title Panel 1</div>
        <div>
            Content Panel 1
        </div>
    </IgbExpansionPanel>
    <IgbExpansionPanel>
        <div slot="title">Title Panel 2</div>
        <div>
            Content Panel 2
        </div>
    </IgbExpansionPanel>
</IgbAccordion>
```

As demonstrated above, the [`SingleExpand`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAccordion.html#IgniteUI_Blazor_Controls_IgbAccordion_SingleExpand)property gives you the ability to set whether single or multiple panels can be expanded at a time.

By using the [`HideAll`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAccordion.html#IgniteUI_Blazor_Controls_IgbAccordion_HideAll) and [`ShowAll`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAccordion.html#IgniteUI_Blazor_Controls_IgbAccordion_ShowAll) methods you can respectively collapse and expand all [`IgbExpansionPanel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbExpansionPanel.html)s of the [`IgbAccordion`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAccordion.html) programmatically.

> [!Note]
> If [`SingleExpand`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAccordion.html#IgniteUI_Blazor_Controls_IgbAccordion_SingleExpand) property is set to **true** calling [`ShowAll`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAccordion.html#IgniteUI_Blazor_Controls_IgbAccordion_ShowAll) method would expand only the focused panel.

### Blazor Accordion Customization Example

With the Blazor Accordion, you can customize the header and content panel's appearance.

The sample below demonstrates how elaborate filtering options can be implemented using the built-in slots of the [`IgbExpansionPanel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbExpansionPanel.html).

```razor
@using IgniteUI.Blazor.Controls


<style>
    igc-accordion {
        width: 100%;
    }

    .sample-wrapper {
        overflow-y: auto;
        max-height: 530px;
        margin: 8px;
    }

    igc-range-slider {
        margin: 24px;
    }

    .categories-container {
        display: flex;
        flex-flow: column nowrap;
    }

    igc-checkbox,
    igc-radio {
        margin: 4px 0;
    }

    igc-expansion-panel {
        border: 1px solid rgba(174, 174, 174, 0.25);
    }

    igc-rating {
        flex-direction: row;
    }
</style>

<div class="container vertical scrollable">
    <IgbAccordion>
        <IgbExpansionPanel>
            <span slot="title" id="categories">@CategoryTitle</span>
            <div class="categories-container">
                @foreach (var category in Categories)
                {
                    <IgbCheckbox Value="@category.Id" Checked="@category.Selected" Change="OnCategoryChange">@category.Label</IgbCheckbox>
                }
            </div>
        </IgbExpansionPanel>
        <IgbExpansionPanel>
            <span slot="title">Cost: $<span id="lowerCost">@SliderLower</span> to $<span id="upperCost">@SliderUpper</span></span>
            <IgbRangeSlider Min="0" Max="1000" Lower="@SliderLower" Upper="@SliderUpper" Change="OnSliderChange"></IgbRangeSlider>
        </IgbExpansionPanel>
        <IgbExpansionPanel>
            <span slot="title" id="rating">@RatingTitle</span>
            <IgbRadioGroup>
                @foreach (var rating in Ratings)
                {
                    <IgbRadio name="rating" Value="@rating.Id" Change="OnRadioChange">
                        <IgbRating Label="@rating.Label" Value="@rating.Value" Max="5" class="size-small" ReadOnly="true"></IgbRating>
                    </IgbRadio>
                }
            </IgbRadioGroup>
        </IgbExpansionPanel>
        <IgbExpansionPanel>
            <span slot="title" id="timeTitle">@TimeTitle</span>
            <IgbDateTimeInput @ref="DateTimeInputRef" InputFormat="hh:mm tt" Label="Arrive before" class="size-small" Change="OnTimeChange">
                <IgbIcon IconName="clock" Collection="material" slot="prefix"></IgbIcon>
                <IgbIcon IconName="clear" Collection="material" slot="suffix" @onclick="OnTimeClear"></IgbIcon>
            </IgbDateTimeInput>
        </IgbExpansionPanel>
    </IgbAccordion>

    <IgbIcon @ref="@RegisterIconRef"/>
</div>

@code {
    IgbIcon? RegisterIconRef;

    IgbDateTimeInput? DateTimeInputRef;

    double SliderLower = 200;
    double SliderUpper = 800;

    string CategoryTitle = "Categories";
    List<Category> Categories = new List<Category>();

    string RatingTitle = "Rating";
    List<Rating> Ratings = new List<Rating>();

    string TimeTitle = "Time";

    protected override async Task OnInitializedAsync()
    {
        Categories.Add(new Category { Id = "0", Label = "Bike" });
        Categories.Add(new Category { Id = "1", Label = "Motorcycle" });
        Categories.Add(new Category { Id = "2", Label = "Car" });
        Categories.Add(new Category { Id = "3", Label = "Taxi" });
        Categories.Add(new Category { Id = "4", Label = "Public Transport" });

        Ratings.Add(new Rating { Id = "0", Label = "1 star or more", Value = 1.5 });
        Ratings.Add(new Rating { Id = "1", Label = "2 star or more", Value = 2.5 });
        Ratings.Add(new Rating { Id = "2", Label = "3 star or more", Value = 3.5 });
        Ratings.Add(new Rating { Id = "3", Label = "4 star or more", Value = 4.5 });
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.RegisterIconRef != null)
        {
            await this.RegisterIconRef.EnsureReady();
            string clearIcon = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'><path d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /></svg>";
            string clockIcon = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'><path d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' /></svg>";
            await this.RegisterIconRef.RegisterIconFromTextAsync("clear", clearIcon, "material");
            await this.RegisterIconRef.RegisterIconFromTextAsync("clock", clockIcon, "material");
        }
    }

    public void OnCategoryChange(IgbCheckboxChangeEventArgs args)
    {
        var id = (args.Parent as IgbCheckbox).Value;
        var category = Categories.Where(x => x.Id == id).FirstOrDefault();
        if (category != null)
            category.Selected = args.Detail.Checked;

        UpdateCheckedCategories();
    }

    private void UpdateCheckedCategories()
    {
        string checkedItems = "";
        Categories.ForEach(category =>
        {
            if (category.Selected)
            {
                checkedItems += checkedItems != "" ? ", " + category.Label : "Categories: " + category.Label;
            }
        });
        CategoryTitle = checkedItems == "" ? "Categories" : checkedItems;
        StateHasChanged();
    }

    private void OnSliderChange(IgbRangeSliderValueEventArgs args)
    {
        if (args.Detail != null)
        {
            SliderLower = args.Detail.Lower;
            SliderUpper = args.Detail.Upper;
            StateHasChanged();
        }
    }

    private void OnRadioChange(IgbRadioChangeEventArgs args)
    {
        var id = (args.Parent as IgbRadio).Value;
        var rating = Ratings.Where(x => x.Id == id).FirstOrDefault();
        if (rating != null)
        {
            RatingTitle = "Rating: " + rating.Label;
            StateHasChanged();
        }
    }

    private async Task OnTimeChange(IgbComponentDateValueChangedEventArgs args)
    {
        TimeTitle = "Time: " + (args.Parent as IgbDateTimeInput).Label + " " + args.Detail.ToShortTimeString();
        StateHasChanged();


    }

    private async Task OnTimeClear()
    {
        if (DateTimeInputRef != null)
        {
            await DateTimeInputRef.ClearAsync();
        }
        TimeTitle = "Time";
        StateHasChanged();
    }

    public class Category
    {
        public string Id { get; set; }
        public bool Selected { get; set; }
        public string Label { get; set; }
    }

    public class Rating
    {
        public string Id { get; set; }
        public string Label { get; set; }
        public double Value { get; set; }
    }
}
```

<div class="divider--half"></div>

### Nested Blazor Accordions Scenario

In the following Blazor Accordion example is created a complex FAQ section in order to illustrate how you can go about this common application scenario. In the sample nested [`IgbAccordion`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAccordion.html) is achieved by adding an accordion inside an expansion panel.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical scrollable">
    <IgbSwitch Change="OnSwitchChange">Single Expand</IgbSwitch>
    <IgbAccordion SingleExpand="@SingleExpand">
        <IgbExpansionPanel>
            <span slot="title">What has changed about subscription and pricing model?</span>
            <span>
                We have moved to a subscription-based pricing model for all our developer tools. This makes it easier
                for you to manage your license subscriptions and allows us to provide a better level of service for you. We
                updated our pricing and packages to provide you with flexible options and the best value. This includes Ignite UI
                (formerly Ignite UI for JavaScript) which includes all of our JavaScript framework components for web development,
                including: Angular, ASP.NET (Core and MVC), Blazor, JQuery, React and Web Components), as well as Infragistics Professional,
                Infragistics Ultimate, our Ultimate UI products. We also offer multi-year subscriptions options with a built-in discount,
                so you can see the value up front. With these updates we are confident that we are providing the best platforms and the best
                price.
            </span>
        </IgbExpansionPanel>
        <IgbExpansionPanel>
            <span slot="title">Who will the updated changes impact?</span>
            <span>
                The license updates will impact all new and current customers using Ignite UI, Infragistics Professional and
                Infragistics Ultimate. Specifically, we have also made updates to our product and packaging for Ignite UI for JavaScript,
                Ignite UI for Angular, Ignite UI for React and Ignite UI for Web components. For more information, please refer to this
                blog: Announcement: Changes to Ignite UI Product & Packaging The pricing has been updated for all products and packages.
                So, all new or additional licenses will be sold based on our new pricing and packages. All existing license agreements will
                be honored and renewed based upon the current agreement.
            </span>
        </IgbExpansionPanel>
        <IgbExpansionPanel>
            <span slot="title">What is the difference between your old model and your current subscription model for Ignite UI?</span>
            <span>
                For Ignite UI customers, we are moving away from NPM for licensed packages. The current NPM packages will be replaced with
                packages that include a “Trial Version” watermark. Licensed packages for Ignite UI will be available from our cloud hosted ProGet
                server. For more information, please refer to this article: Moving from Trial to Licensed Ignite UI NPM Packages
            </span>
        </IgbExpansionPanel>
        <IgbExpansionPanel>
            <span slot="title">Common questions about renewal.</span>
            <IgbAccordion SingleExpand="@SingleExpand">
                <IgbExpansionPanel>
                    <span slot="title">What happens if I don't renew my subscription?</span>
                    <span>Any unlicensed or trial versions of Ignite UI for Angular, React and Web Components will now include this watermark.</span>
                </IgbExpansionPanel>
                <IgbExpansionPanel>
                    <span slot="title">If I don't renew my subscription will I still have access to previous versions of Infragistics products?</span>
                    <span>
                        Any version of Infragistics software which you have downloaded can continue to be used perpetually. Access to download any new or
                        previous versions through our customer portal and package feeds will require maintaining an active subscription by continuing
                        to renew it.
                    </span>
                </IgbExpansionPanel>
                <IgbExpansionPanel>
                    <span slot="title">Will I be automatically charged for my renewal/ Can I be automatically charged for renewal?</span>
                    <span>
                        Any new subscriptions purchased online, via our eCommerce system, will renew automatically. Subscription renewal can be canceled,
                        at any time, before the next automatic renewal date. Subscriptions purchased directly from Infragistics or Infragistics' partners are
                        subject to the renewal terms that were agreed upon as part of that purchase.
                    </span>
                </IgbExpansionPanel>
            </IgbAccordion>
        </IgbExpansionPanel>
        <IgbExpansionPanel>
            <span slot="title">I split my work across two computers. Can I install on both using my single-user license?</span>
            <span>
                The Infragistics Ultimate license is tied to the user, and not the computer. That means you're welcome to install and use Ignite UI,
                Infragistics Professional, and Infragistics Ultimate on any computer you use. However, if we notice a large number of activations using the
                same license, we may contact you to verify this behavior.
            </span>
        </IgbExpansionPanel>
        <IgbExpansionPanel>
            <span slot="title">I used up my trial for an earlier version of Infragistics Ultimate. Can I start a new trial when a major version is released?</span>
            <span>
                Yes! If you have tried a previous version in the past, and used up your 30-day trial, you can try the next major version for another 30 days!
                You can do this in the following two ways:
                <ul>
                    <li>
                        If you have days remaining in your 30-day trial period for the current version (e.g., the
                        Version 15.1 Volume Release), use the Check for Update option inside the Platform Installer or
                        your account. You will be able to start a fresh trial for the next major version (e.g., 20.1
                        Volume Release)
                    </li>
                    <li>
                        If you have used up the 30-day trial for the previous major version (e.g., the 19.2 Volume
                        Release), simply download and install Infragistics Ultimate from our <a href="https://www.infragistics.com/products/ultimate">website</a> (This will also allow you
                        to start a new trial.)
                    </li>
                </ul>
            </span>
        </IgbExpansionPanel>
    </IgbAccordion>
</div>

@code {
    public bool SingleExpand { get; set; }

    public void OnSwitchChange(IgbCheckboxChangeEventArgs args)
    {
        SingleExpand = args.Detail.Checked;
    }
}
```

<div class="divider--half"></div>

## Keyboard Navigation

Keyboard navigation in the Blazor Accordion provides a rich variety of keyboard interactions to the end-user. This functionality is enabled by default and allows end-users to easily navigate through the panels.

The Accordion navigation is compliant with W3C accessibility standards and convenient to use.

**Key Combinations**

- <kbd>↓</kbd> - moves the focus to the panel below
- <kbd>↑</kbd> - moves the focus to the panel above
- <kbd>ALT</kbd> + <kbd>↓</kbd> - opens the focused panel in the accordion
- <kbd>ALT</kbd> + <kbd>↑</kbd> - closes the focused panel in the accordion
- <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>↓</kbd> - opens all enabled panels (if singleExpand is set to true opens the focused panel)
- <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>↑</kbd> - closes all enabled panels
- <kbd>HOME</kbd> - navigates to the FIRST enabled panel in the accordion
- <kbd>END</kbd> - navigates to the LAST enabled panel in the accordion

<div class="divider"></div>

## API References

- [`IgbAccordion`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAccordion.html)
- [`IgbExpansionPanel`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbExpansionPanel.html)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

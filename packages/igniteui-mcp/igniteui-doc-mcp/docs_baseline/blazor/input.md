---
title: Blazor Input | Data Visualization Tools | Infragistics
_description: Infragistics' Blazor input is a component where the user can enter data. Improve your application with Ignite UI for Blazor!
_keywords: Blazor input, Ignite UI for Blazor, Infragistics
_license: MIT
mentionedTypes: ["Input", "Icon", "Radio"]
_tocName: Input
---

# Blazor Input Overview

The Ignite UI for Blazor Input is a component where the user can enter data.

## Blazor Input Example

<div class="divider--half"></div>

<!-- Blazor -->

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center">
    <h1>Greetings, @userName</h1>
    <IgbInput @bind-value="userName" Label="Input Name" Placeholder="eg. John Doe">
        <span slot="prefix">User</span>
    </IgbInput>
</div>

@code {

    string userName = "Bradley";

}
```


## Dependencies

To get started with the Input component, you first need to register its module.

<!-- Blazor -->

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbInputModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

```razor
<IgbInput DisplayType="@InputType.Email" Label="Subscribe" Placeholder="john.doe@mail.com" />
```

## Prefix & Suffix

With `prefix` and `suffix` slots we can add different content before and after the main content of the Input. In the following sample we will create a new Input field with a text prefix and an icon suffix:

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center">
    <IgbInput DisplayType="@InputType.Tel" Label="Phone" Placeholder="888 123 4567">
        <span slot="prefix">+359</span>
        <IgbIcon @ref="IconRef" slot="suffix" IconName="phone" Collection="material"/>
    </IgbInput>
</div>

@code {

    private IgbIcon IconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if(firstRender && this.IconRef != null)
        {
            await this.IconRef.EnsureReady();
            string phoneIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0z' fill='none'/><path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/></svg>";
            await this.IconRef.RegisterIconFromTextAsync("phone", phoneIcon, "material");
        }
    }
}
```


## Helper Text

The `helper-text` slot provides a hint placed below the Input. Let's add some helper text to our phone Input:

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center">
    <IgbInput DisplayType="@InputType.Tel" Label="Phone">
        <span slot="prefix">+359</span>
        <IgbIcon @ref="IconRef" slot="suffix" IconName="phone" Collection="material"/>
        <span slot="helper-text">Ex.: +359 888 123 456</span>
    </IgbInput>
</div>

@code {

    private IgbIcon IconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if(firstRender && this.IconRef != null)
        {
            await this.IconRef.EnsureReady();
            string phoneIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0z' fill='none'/><path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/></svg>";
            await this.IconRef.RegisterIconFromTextAsync("phone", phoneIcon, "material");
        }
    }
}
```


## Input Sizing

We can allow the user to change the size of the [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html) using the `--ig-size` CSS variable. То do this, we will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size of the Input:

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center">

    <style>
        #radioGroup {
            display: flex;
            margin: 0 auto;
            width: 15%;
        }
    </style>

    <IgbRadioGroup id="radioGroup" Alignment="@ContentOrientation.Horizontal">
        <IgbRadio name="size" Value="Small" LabelPosition="@ToggleLabelPosition.After" Change="@OnRadioOptionClick">Small</IgbRadio>
        <IgbRadio name="size" Value="Medium" LabelPosition="@ToggleLabelPosition.After" Checked="true" Change="@OnRadioOptionClick">Medium</IgbRadio>
        <IgbRadio name="size" Value="Large" LabelPosition="@ToggleLabelPosition.After" Change="@OnRadioOptionClick">Large</IgbRadio>
    </IgbRadioGroup>

    <IgbInput class="@InputSize" DisplayType="@InputType.Text" Label="Required" Value="This input is required" Required="true" />
    <IgbInput class="@InputSize" DisplayType="@InputType.Text" Label="Disabled" Value="This input is disabled" Disabled="true" />
    <IgbInput class="@InputSize" DisplayType="@InputType.Text" Label="Readonly" Value="This input is readonly" ReadOnly="true" />
</div>

@code {

    private string InputSize { get; set; } = "size-medium";

    public void OnRadioOptionClick(IgbRadioChangeEventArgs e)
    {
        this.InputSize = $"size-{e.Detail.Value.ToLower()}";
    }
}
```


In the sample above we have demonstrated the use of the following attributes:

- `required` - Used to mark the input as required
- `disabled` - Used to disable the input
- `readonly` - Used to mark the input as readonly

## Styling

The [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `container` | The main wrapper that holds all main input elements. |
| `input` | The native input element. |
| `label` | The native label element. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |
| `helper-text` | The helper text wrapper. |

```scss
igc-input::part(input) {
  background-color: var(--ig-primary-100);
  border-color: var(--ig-secondary-500);
  box-shadow: none;
}

igc-input::part(label) {
  color: var(--ig-gray-700);
}

igc-input::part(prefix),
igc-input::part(suffix) {
  color: var(--ig-primary-600-contrast);
  background-color: var(--ig-primary-600);
  border-color: var(--ig-secondary-600);
}
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample center">
    <style>
        igc-input::part(input) {
            background-color: rgb(169, 214, 229);
            border-color: rgb(42, 111, 151);
        }

        igc-input::part(label) {
            color: rgb(1, 42, 74);
        }

        igc-input::part(prefix),
        igc-input::part(suffix) {
            color: white;
            border-color: rgb(42, 111, 151);
            background-color: rgb(70, 143, 175);
        }
    </style>

    <IgbInput DisplayType="@InputType.Tel" Label="Phone" Placeholder="888 123 4567">
        <span slot="prefix">+359</span>
        <IgbIcon @ref="IconRef" slot="suffix" IconName="phone" Collection="material"/>
    </IgbInput>
</div>

@code {

    private IgbIcon IconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if(firstRender && this.IconRef != null)
        {
            await this.IconRef.EnsureReady();
            string phoneIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0z' fill='none'/><path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/></svg>";
            await this.IconRef.RegisterIconFromTextAsync("phone", phoneIcon, "material");
        }
    }
}
```


<div class="divider"></div>

## API References

- [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html)
- [`IgbInput`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbInput.html)
- [`IgbRadio`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbRadio.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

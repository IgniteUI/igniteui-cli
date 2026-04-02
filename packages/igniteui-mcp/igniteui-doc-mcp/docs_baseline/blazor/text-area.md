---
title: Blazor Text Area | Data Visualization Tools | Infragistics
_description: Infragistics' Blazor Text Area is a component where the user can enter a sizable amount of free-form text.
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, Web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor Input, Blazor Textarea components, Blazor Textarea controls
mentionedTypes: ["Input", "Icon", "Textarea", "Toast"]
_license: MIT
_tocName: Text Area
---

# Blazor Text Area Overview

The Ignite UI for Blazor Text Area represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizable amount of free-form text, for example a comment on a review or feedback form.

## Blazor Text Area Example

<div class="divider--half"></div>

```razor
@using IgniteUI.Blazor.Controls


<div class="container center">
    <IgbTextarea Rows="3" Label="Tell us your story:">It was a dark and stormy night...</IgbTextarea>
</div>

@code {

}
```


## Dependencies

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbTextareaModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbTextarea`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTextarea.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

After we import the [`IgbTextarea`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTextarea.html) component we are ready to start using it, so let's add our first Text Area.

```razor
<IgbTextarea Rows="5" Label="Tell us your story:">It was a dark and stormy night...</IgbTextarea>
```

## Prefix, Suffix &  Helper Text

With `prefix` and `suffix` slots we can add different content before and after the main content of the Text Area. The `helper-text` slot provides a hint placed below the Text Area. In the following sample we will create a new Text Area field with a text prefix, an icon suffix and a helper text as a hint:

```razor
@using IgniteUI.Blazor.Controls


<div class="container center">
    <IgbTextarea Label="Your feedback">
       <IgbIcon @ref="RegisterIconRef" IconName="feedback" Collection="material" slot="prefix"></IgbIcon>
        <p slot="helper-text">Give us a short description of what you liked/disliked</p>
    </IgbTextarea>
</div>

@code {

    private IgbIcon RegisterIconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.RegisterIconRef != null)
        {
            await this.RegisterIconRef.EnsureReady();
            string feedback = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M480-360q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm-40-160h80v-240h-80v240ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z'/></svg>";
            await this.RegisterIconRef.RegisterIconFromTextAsync("feedback", feedback, "material");            
        }
    }
}
```


## Text Area Resizing

There are three different resize options of the [`IgbTextarea`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTextarea.html). When set to `none`, the text area does not resize and uses a scroll bar to show overflow text. When set to `vertical` (the default option), the text area lets the user resize it vertically. When set to `auto`, the text area shows all the user input at once. Overflow text wraps onto a new line and expands the text area automatically.

```razor
@using IgniteUI.Blazor.Controls

<style>
    p {
        margin: 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>

<div class="container center">
    <IgbTextarea Label="Resize: none" Resize="TextareaResize.None">
        <p slot="helper-text">This textarea does not resize and uses a scroll bar to show overflow text.</p>
    </IgbTextarea>
    <IgbTextarea Label="Resize: vertical (default)" Resize="TextareaResize.Vertical">
        <p slot="helper-text">This textarea lets the user resize vertically.</p>
    </IgbTextarea>
    <IgbTextarea Label="Resize: auto" Resize="TextareaResize.Auto">
        <p slot="helper-text">This textarea shows all the user input at once. Overflow text wraps onto a new line and expands the text area.</p>
    </IgbTextarea>
</div>

@code {

}
```


## Form Integration

The sample below shows how a [`IgbTextarea`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTextarea.html) could be integrated into a form.

```razor
@using IgniteUI.Blazor.Controls

<style>
    .controls {
        margin-top: 1rem;
    }
</style>

<div class="container center">
    <form id="form" @onsubmit="Submit">
        <IgbTextarea Rows="3" Name="user_feedback" Label="Your review" Required="true"></IgbTextarea>
        <div class="controls">
            <IgbButton Type="submit">Submit review</IgbButton>
            <IgbButton Type="reset" Variant="ButtonVariant.Outlined">Reset</IgbButton>
        </div>
        <IgbToast Id="submitted" @ref="ToastRef" Position="AbsolutePosition.Top" DisplayTime="1000">Your review was submitted</IgbToast>
    </form>
</div>

@code {

    public IgbToast ToastRef { get; set; }

    private void Submit()
    {
        this.ToastRef.Show();
    }

}
```


## Styling

The [`IgbTextarea`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTextarea.html) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `container` | The main wrapper that holds all main input elements. |
| `input` | The native input element. |
| `label` | The native label element. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |
| `helper-text` | The helper text wrapper. |

```css
igc-textarea::part(input) {
  background-color: var(--ig-info-100);
  border-color: var(--ig-primary-400);
}

igc-textarea::part(label) {
  color: var(--ig-gray-800);
}

igc-textarea::part(prefix),
igc-textarea::part(suffix) {
  color: var(--ig-primary-500-contrast);
  border-color: var(--ig-primary-500);
  background-color: var(--ig-primary-500);
}
```

```razor
@using IgniteUI.Blazor.Controls


<style>
    igc-textarea::part(input) {
        background-color: rgb(169, 214, 229);
        border-color: rgb(42, 111, 151);
    }

    igc-textarea::part(label) {
        color: rgb(1, 42, 74);
    }

    igc-textarea::part(prefix),
    igc-textarea::part(suffix) {
        color: white;
        border-color: rgb(42, 111, 151);
        background-color: rgb(70, 143, 175);
    }
</style>

<div class="container center">
    <IgbTextarea Label="Steps to reproduce">
       <IgbIcon @ref="RegisterIconRef" IconName="feedback" Collection="material" slot="prefix"></IgbIcon>
        <p slot="helper-text">Provide a detailed description of the steps that led to the issue you experienced</p>
    </IgbTextarea>
</div>

@code {

    private IgbIcon RegisterIconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && this.RegisterIconRef != null)
        {
            await this.RegisterIconRef.EnsureReady();
            string feedback = "<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M480-360q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm-40-160h80v-240h-80v240ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z'/></svg>";
            await this.RegisterIconRef.RegisterIconFromTextAsync("feedback", feedback, "material");            
        }
    }

}
```


<div class="divider"></div>

## API References

- [`IgbIcon`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbIcon.html)
- [`IgbTextarea`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTextarea.html)
- [`IgbToast`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbToast.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

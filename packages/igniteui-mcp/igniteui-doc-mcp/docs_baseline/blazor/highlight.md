---
title: Blazor Highlight | Infragistics
description: Infragistics' Blazor Highlight component allows you to search for specific text in the page content and highlight it.
keywords: Blazor, UI controls, web widgets, UI widgets, Blazor Highlight Components, Infragistics
license: MIT
mentionedTypes: ["Highlight"]
llms:
  description: "Ignite UI for Blazor Highlight is used to highlight parts of the page content to make it more noticeable for the user."
_tocName: Highlight
---
# Blazor Highlight Overview

Ignite UI for Blazor Highlight is used to highlight parts of the page content to make it more noticeable for the user. It's a lightweight component that can be used in combination with other components to create a more interactive and engaging user experience.

<igc-divider></igc-divider>

## Usage

To use the `IgbHighlight` component, all you need to do is wrap its tags around the content you want to search. The component searches the content of all nested elements within the `<IgbHighlight>` tags, and highlights all matches of the specified string.

**Note:** 
The `IgbHighlight` component searches only DOM text nodes. It does not search input values or content set via the CSS `content` property.

First, you need to install the Ignite UI for Blazor by running the following command:

```cmd
dotnet add package IgniteUI.Blazor --version 26.1.98
```

Register the `IgbHighlight` module in the `Program.cs` file as follows:

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbHighlightModule));
```

You also need to reference the corresponding styles based on your project configuration.

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

The simplest way to start using the `IgbHighlight` component is as follows:

```razor
<IgbHighlight SearchText="dolor">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
</IgbHighlight>
```

The `<IgbHighlight>` tags wrap the content in which you want to highlight the specific string.

The text to be highlighted is set via the [`search-text`](mcp:get_api_reference?platform=blazor&component=IgbBaseSearchInfo&member=searchText) attribute. In the example above, the word "dolor" will be highlighted.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbHighlight @ref="HighlightRef" SearchText="@searchText">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae doloribus
        odit id excepturi ipsum provident eaque dignissimos beatae!</p>
    </IgbHighlight>
</div>

@code {
    private IgbHighlight HighlightRef { get; set; }
    private string searchText = "dolor";
    private bool reapplySearch = true;

    protected override void OnParametersSet()
    {
        searchText = "dolor";
        reapplySearch = true;
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (reapplySearch && HighlightRef != null)
        {
            reapplySearch = false;
            await HighlightRef.EnsureReady();
            HighlightRef.SearchText = searchText;
            await HighlightRef.SearchAsync();
        }
    }

}
```

### Case Sensitive Match

The `IgbHighlight` component also exposes a [`case-sensitive`](mcp:get_api_reference?platform=blazor&component=IgbBaseSearchInfo&member=caseSensitive) attribute. Its default value is `false`, which enables case-insensitive matching. By setting it to `true`, you can enable case-sensitive matching.

The following snippet:

```razor
<IgbHighlight SearchText="lorem" CaseSensitive="true">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
</IgbHighlight>
```

This returns 0 matches because the search text "lorem" is in lowercase, while the text in the content is **Lorem** with an uppercase **L**.

### Using Highlight with a Search Input

The most common use case is binding the `IgbHighlight` component to a search [`IgbInput`](mcp:get_api_reference?platform=blazor&component=IgbInput) component, so that search matches are highlighted in real time as the user types.

To bind the two together, you can listen to the `igcInput` event of the [`IgbInput`](mcp:get_api_reference?platform=blazor&component=IgbInput) component and set the [`search-text`](mcp:get_api_reference?platform=blazor&component=IgbBaseSearchInfo&member=searchText) attribute of the `IgbHighlight` component to the input value every time the event is fired (you can also use the standard `input` event).

First, you need to add the searchText property:

```razor
private string searchText = "";
```

Then, create a function that updates the search text every time the `igcInput` event fires:

```razor
private void OnValueChanging(string newValue)
{
    searchText = newValue;
}
```

```razor
<IgbInput Label="Search" ValueChanging="OnValueChanging"></IgbInput>
<IgbHighlight SearchText="@searchText">
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae doloribus
        odit id excepturi ipsum provident eaque dignissimos beatae! Rerum vero
        distinctio libero, quasi magni quod natus nesciunt doloremque temporibus
        voluptate?
    </p>
</IgbHighlight>
```

### Methods

The component also exposes two methods for navigating the search matches. The `next()` method moves to the next match, while the `previous()` method moves to the previous one.

With them, we can make the search more interactive by adding two buttons to navigate between matches:

```razor
private IgbHighlight HighlightRef { get; set; }

private async Task Prev()
{
    if (HighlightRef != null)
        await HighlightRef.PreviousAsync(new IgbHighlightNavigation());
}

private async Task Next()
{
    if (HighlightRef != null)
        await HighlightRef.NextAsync(new IgbHighlightNavigation());
}

```

```razor
<IgbInput Label="Search" ValueChanging="OnValueChanging">
    <IgbIconButton slot="suffix" Variant="IconButtonVariant.Flat" IconName="navigate_before" Collection="internal" @onclick="Prev"></IgbIconButton>
    <IgbIconButton slot="suffix" Variant="IconButtonVariant.Flat" IconName="navigate_next" Collection="internal" @onclick="Next"></IgbIconButton>
</IgbInput>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <div class="search-bar">
        <IgbInput Label="Search" ValueChanging="OnValueChanging">
            <IgbIconButton slot="suffix" Variant="IconButtonVariant.Flat" IconName="navigate_before" Collection="internal" @onclick="Prev"></IgbIconButton>
            <IgbIconButton slot="suffix" Variant="IconButtonVariant.Flat" IconName="navigate_next" Collection="internal" @onclick="Next"></IgbIconButton>
        </IgbInput>
    </div>
    <IgbDivider></IgbDivider>
    <IgbHighlight @ref="HighlightRef" SearchText="@searchText">
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae doloribus
            odit id excepturi ipsum provident eaque dignissimos beatae! Rerum vero
            distinctio libero, quasi magni quod natus nesciunt doloremque temporibus
            voluptate?
        </p>
    </IgbHighlight>
</div>

@code {
    private IgbHighlight HighlightRef { get; set; }
    private string searchText = "";

    private void OnValueChanging(string newValue)
    {
        searchText = newValue;
    }

    private async Task Prev()
    {
        if (HighlightRef != null)
            await HighlightRef.PreviousAsync(new IgbHighlightNavigation { PreventScroll = true });
    }

    private async Task Next()
    {
        if (HighlightRef != null)
            await HighlightRef.NextAsync(new IgbHighlightNavigation { PreventScroll = true });
    }
}
```

Both the `previous()` and `next()` methods accept a `IgbHighlight.preventScroll` option that prevents the page from scrolling to the active match during navigation. By default, it is set to `false`.

```razor
private async Task Prev()
{
    if (HighlightRef != null)
        await HighlightRef.PreviousAsync(new IgbHighlightNavigation { PreventScroll = true });
}

private async Task Next()
{
    if (HighlightRef != null)
        await HighlightRef.NextAsync(new IgbHighlightNavigation { PreventScroll = true });
}

```

### Additional Features

The component also exposes two async methods for tracking match state: GetSizeAsync() returns the total number of matches, and GetCurrentAsync() returns the index of the active match.

These methods are useful for building a search status indicator that shows the user which match they are on and how many matches exist in total.

Here is a simple example of how to use these methods to create a search status:

```razor
private async Task UpdateStatus()
{
    var size = (int)await HighlightRef.GetSizeAsync();
    var current = (int)await HighlightRef.GetCurrentAsync();
    helperText = $"{current + 1} of {size} match{(size == 1 ? "" : "es")}";
}
```

We can then call `UpdateStatus()` every time the input value changes or the user clicks the next or previous buttons:

```razor
private async Task Prev()
{
    await HighlightRef.PreviousAsync(new IgbHighlightNavigation());
    await UpdateStatus();
    StateHasChanged();
}

private async Task Next()
{
    await HighlightRef.NextAsync(new IgbHighlightNavigation());
    await UpdateStatus();
    StateHasChanged();
}

```

```razor
<IgbInput Label="Search" ValueChanging="OnValueChanging">
            <IgbIconButton slot="suffix" Variant="IconButtonVariant.Flat" IconName="navigate_before" Collection="internal" @onclick="Prev"></IgbIconButton>
            <IgbIconButton slot="suffix" Variant="IconButtonVariant.Flat" IconName="navigate_next" Collection="internal" @onclick="Next"></IgbIconButton>
            <p slot="helper-text">@helperText</p>
</IgbInput>

<IgbHighlight @ref="HighlightRef">
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <div class="search-bar">
        <IgbInput Label="Search" ValueChanging="OnValueChanging">
            <IgbIconButton slot="suffix" Variant="IconButtonVariant.Flat" IconName="navigate_before" Collection="internal" @onclick="Prev"></IgbIconButton>
            <IgbIconButton slot="suffix" Variant="IconButtonVariant.Flat" IconName="navigate_next" Collection="internal" @onclick="Next"></IgbIconButton>
            <p slot="helper-text">@helperText</p>
        </IgbInput>
    </div>
    <IgbDivider></IgbDivider>
    <IgbHighlight @ref="HighlightRef" SearchText="@searchText">
        <h1>Document Object Model</h1>
        <IgbExpansionPanel Open="true">
            <h2 slot="title">Overview</h2>
            <section>
                <p>
                    The Document Object Model (DOM) is a cross-platform and
                    language-independent interface that treats an HTML or XML document
                    as a tree structure wherein each node is an object representing a
                    part of the document. The DOM represents a document with a logical
                    tree. Each branch of the tree ends in a node, and each node
                    contains objects. DOM methods allow programmatic access to the
                    tree; with them one can change the structure, style or content of
                    a document. Nodes can have event handlers (also known as event
                    listeners) attached to them. Once an event is triggered, the event
                    handlers get executed.
                </p>
                <p>
                    The principal standardization of the DOM was handled by the World
                    Wide Web Consortium (W3C), which last developed a recommendation
                    in 2004. WHATWG took over the development of the standard,
                    publishing it as a living document. The W3C now publishes stable
                    snapshots of the WHATWG standard.
                </p>
                <p>In HTML DOM (Document Object Model), every element is a node:</p>
                <ul>
                    <li>A document is a document node.</li>
                    <li>All HTML elements are element nodes.</li>
                    <li>All HTML attributes are attribute nodes.</li>
                    <li>Text inserted into HTML elements are text nodes.</li>
                    <li>Comments are comment nodes.</li>
                </ul>
            </section>
        </IgbExpansionPanel>
    </IgbHighlight>
</div>

@code {
    private IgbHighlight HighlightRef { get; set; }
    private string searchText = "";
    private string helperText = "";
    private bool reapplySearch = false;

    private void OnValueChanging(string newValue)
    {
        searchText = newValue;
        reapplySearch = true;
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (reapplySearch && HighlightRef != null)
        {
            reapplySearch = false;

            await HighlightRef.EnsureReady();
            HighlightRef.SearchText = searchText;
            await HighlightRef.SearchAsync();
            await UpdateStatus();

            StateHasChanged();
        }
    }

    private async Task UpdateStatus()
    {
        if (HighlightRef == null || string.IsNullOrWhiteSpace(searchText))
        {
            helperText = "";
            return;
        }

        var size = (int)await HighlightRef.GetSizeAsync();

        if (size == 0)
        {
            helperText = "";
            return;
        }

        var current = (int)await HighlightRef.GetCurrentAsync();
        helperText = $"{current + 1} of {size} match{(size == 1 ? "" : "es")}";
    }

    private async Task Prev()
    {
        if (HighlightRef != null)
        {
            await HighlightRef.PreviousAsync(new IgbHighlightNavigation { PreventScroll = true });
            await UpdateStatus();
            StateHasChanged();
        }
    }

    private async Task Next()
    {
        if (HighlightRef != null)
        {
            await HighlightRef.NextAsync(new IgbHighlightNavigation { PreventScroll = true });
            await UpdateStatus();
            StateHasChanged();
        }
    }
}
```

## Styling

The `IgbHighlight` component exposes four CSS variables which can be used to style the whole component:
- `--foreground` The text color for a highlighted text node.
- `--background` The background color for a highlighted text node.
- `--foreground-active` The text color for the active highlighted text node.
- `--background-active` The background color for the active highlighted text node.

```css
igc-highlight {
    --background: var(--ig-gray-700);
    --foreground: var(--ig-gray-700-contrast);
    --background-active: var(--ig-warn-500);
    --foreground-active: var(--ig-warn-500-contrast);
}
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <div class="search-bar">
        <IgbInput Label="Search" ValueChanging="OnValueChanging" Value="@inputText">
            <IgbIconButton slot="suffix" Variant="IconButtonVariant.Flat" IconName="navigate_before" Collection="internal" @onclick="Prev"></IgbIconButton>
            <IgbIconButton slot="suffix" Variant="IconButtonVariant.Flat" IconName="navigate_next" Collection="internal" @onclick="Next"></IgbIconButton>
        </IgbInput>
    </div>
    <IgbDivider></IgbDivider>
    <IgbHighlight @ref="HighlightRef" SearchText="@searchText">
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae doloribus
            odit id excepturi ipsum provident eaque dignissimos beatae! Rerum vero
            distinctio libero, quasi magni quod natus nesciunt doloremque temporibus
            voluptate?
        </p>
    </IgbHighlight>
</div>

@code {
    private IgbHighlight HighlightRef { get; set; }
    private string searchText = "ipsum";
    private string inputText = "";
    private bool reapplySearch = true;

    private void OnValueChanging(string newValue)
    {
        inputText = newValue;
        searchText = newValue;
        reapplySearch = true;
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if ((firstRender || reapplySearch) && HighlightRef != null)
        {
            reapplySearch = false;

            await HighlightRef.EnsureReady();
            HighlightRef.SearchText = searchText;
            await HighlightRef.SearchAsync();

            StateHasChanged();
        }
    }

    private async Task Prev()
    {
        if (HighlightRef != null)
            await HighlightRef.PreviousAsync(new IgbHighlightNavigation { PreventScroll = true });
    }

    private async Task Next()
    {
        if (HighlightRef != null)
            await HighlightRef.NextAsync(new IgbHighlightNavigation { PreventScroll = true });
    }
}
```

## API References

`IgbHighlight`

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

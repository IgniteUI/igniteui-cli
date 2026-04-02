---
title: Blazor Divider | Layout Controls | Infragistics
_description: Use Infragistics' Blazor divider component to easily create a horizontal/vertical rule as a break between content to better organize information on a page.
_keywords: Ignite UI for Blazor, UI controls, Blazor widgets, Web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Blazor DIvider components, Blazor Divider controls
_license: MIT
mentionedTypes: ["Divider"]
_tocName: Divider
---

# Blazor Divider

The Ignite UI for Blazor Divider allows the content author to easily create a horizontal/vertical rule as a break between content to better organize information on a page.

## Blazor Divider Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample">
    <p>First paragraph</p>
    <IgbDivider></IgbDivider>
    <p>Second paragraph</p>
</div>
```


<div class="divider--half"></div>

## Dependencies

Before using the [`IgbDivider`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDivider.html), you need to register it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbDividerModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbDivider`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDivider.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

The [`IgbDivider`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDivider.html) is capable of displaying images, initials, or any other content, including icons. Declaring an [`IgbDivider`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDivider.html) is as simple as:

```razor
<IgbDivider></IgbDivider>
```

## Usage

### Vertical Divider

If the [`Vertical`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDivider.html#IgniteUI_Blazor_Controls_IgbDivider_Vertical) attribute is set the direction of the divider would be changed from horizontal to vertical.

```razor
<igrDivider Vertical></igrDivider>
```

```razor
@using IgniteUI.Blazor.Controls

<style>
    p {
        text-align: justify;
    }

    .content {
        display: flex;
        gap: 16px;
    }
</style>

<div class="container sample center">
    <div class="content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa officiis
            suscipit veniam vitae. Ab ad, dolores iure nostrum quo ratione rerum
            sapiente ullam. Adipisci alias architecto eligendi est, expedita,
            explicabo fugiat iure laudantium minima molestiae molestias nam
            obcaecati placeat provident, quam repellendus vitae! Cupiditate eveniet,
            facere harum hic quisquam sed.
        </p>
        <IgbDivider vertical></IgbDivider>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa officiis
            suscipit veniam vitae. Ab ad, dolores iure nostrum quo ratione rerum
            sapiente ullam. Adipisci alias architecto eligendi est, expedita,
            explicabo fugiat iure laudantium minima molestiae molestias nam
            obcaecati placeat provident, quam repellendus vitae! Cupiditate eveniet,
            facere harum hic quisquam sed.
        </p>
    </div>
</div>
```


### Type

The `Type` attribute determines whether to render a `solid` or a `dashed` divider line. The default value is `solid`.

```razor
<IgbDivider Type="dashed"></igrDivider>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample">
    <p>First paragraph</p>
    <IgbDivider Type="dashed"></IgbDivider>
    <p>Second paragraph</p>
</div>
```


### Inset Divider

The [`IgbDivider`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDivider.html) can be set in on both sides. To `inset` the divider, set the [`Middle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDivider.html#IgniteUI_Blazor_Controls_IgbDivider_Middle) attribute to true in combination with the `--inset` css variable. This will shrink the divider line from both sides. The default value of the [`Middle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDivider.html#IgniteUI_Blazor_Controls_IgbDivider_Middle) attribute is false.

```css
/* DividerStyles.css */
.withInset{
    --inset: 100px;
    --color:red;
}
```

```razor
// Both side
<IgbDivider Middle="True" class="withInset"</igrDivider>
// Left side only
<IgbDivider class="withInset"</igrDivider>
```

```razor
@using IgniteUI.Blazor.Controls

<style>
    .parent {
        display: flex;
        justify-content: space-between;
    }

    .content {
        width: 45%;
        padding: 20px;
    }

    .withInset {
        --inset: 100px;
        --color: red;
    }

    h4 {
        margin-top: 0;
    }

    p {
        margin-top: 0;
    }

    .mt {
        margin-top: 16px;
        margin-bottom: 0;
    }

    .mb {
        margin-bottom: 16px;
    }
</style>

<div class="container sample center">
    <div class="parent">
        <div class="content">
            <h4 class="mb">Both sides inset.</h4>
            <IgbDivider class="withInset" Middle="true"></IgbDivider>
            <p class="mt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias at consectetur dolor magnam maiores nihil quasi quod repudiandae similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, culpa delectus eius fuga ipsa iste laborum nemo, numquam omnis perferendis soluta sunt. Animi asperiores aspernatur assumenda doloribus eligendi.</p>
        </div>
        <div class="content">
            <h4 class="mb">Left side only(default).</h4>
            <IgbDivider class="withInset"></IgbDivider>
            <p class="mt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias at consectetur dolor magnam maiores nihil quasi quod repudiandae similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, culpa delectus eius fuga ipsa iste laborum nemo, numquam omnis perferendis soluta sunt. Animi asperiores aspernatur assumenda doloribus eligendi.</p>
        </div>
    </div>
</div>
```


### Using Divider Inside Select Component

The following sample illustrates how the [`IgbDivider`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDivider.html) can be integrated within the [`IgbSelect`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSelect.html) in order to distinguish two groups of items.

```razor
<IgbSelect>
 <IgbSelectItem>Item 1</IgbSelectItem>
 <IgbSelectItem>Item 2</IgbSelectItem>
 <IgbDivider></IgbDivider>
 <IgbSelectItem>Item 2</IgbSelectItem>
</IgbSelect>
```

```razor
@using IgniteUI.Blazor.Controls


<div class="container sample">
    <IgbSelect>
        <IgbSelectItem>Item 1</IgbSelectItem>
        <IgbSelectItem>Item 2</IgbSelectItem>
        <IgbDivider></IgbDivider>
        <IgbSelectItem>Item 3</IgbSelectItem>
    </IgbSelect>
</div>
```


## CSS Variables

### Inset

The `--inset` css variable shrinks the divider by the given amount from the start. If middle is set it will shrink from both sides.

### Color

The `--color` css variable sets the color of the divider.

<div class="divider--half"></div>

## API References

- [`IgbDivider`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDivider.html)

## Additional Resources

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

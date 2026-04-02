---
title: Blazor Tile Manager Component - Ignite UI for Blazor
_description: Blazor Tile Manager component enables the display of content in individual tiles.
_keywords: Blazor Tile Manager, Ignite UI for Blazor, Infragistics, UI controls, Blazor widgets, web widgets, UI widgets, Blazor, Native Blazor Components Suite, Native Blazor Controls, Native Blazor Components Library, Layout components
_license: MIT
mentionedTypes: ["TileManager", "Tile"]
_tocName: Tile Manager
---

# Blazor Tile Manager Overview

The Ignite UI for Blazor Tile Manager component enables the display of content in individual tiles. It allows users to interact with these tiles by rearranging and resizing them, giving them the freedom to customize the layout and appearance of the content according to their preferences. This flexibility enhances the user experience by enabling a more personalized and efficient way to view and manage content.

## Blazor Tile Manager Example

The following Ignite UI for Blazor Tile Manager Example shows the component in action.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbTileManager ColumnCount="3" Gap="20px" ResizeMode="TileManagerResizeMode.Always" DragMode="TileManagerDragMode.TileHeader">
        <IgbTile RowSpan="3">
            <h3 slot="title">Order info</h3>
            <IgbList Class="list">
                <IgbListItem>
                    <IgbAvatar slot="start" Shape="AvatarShape.Circle" Class="avatar">
                        <IgbIcon @ref="IconRef" IconName="list" Collection="material" Class="material-icons"></IgbIcon>
                    </IgbAvatar>
                    <div slot="title" class="content">
                        <p>OrderID</p>
                        <p>10293</p>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Shape="AvatarShape.Circle" Class="avatar">
                        <IgbIcon @ref="IconRef" IconName="list" Collection="material" Class="material-icons"></IgbIcon>
                    </IgbAvatar>
                    <div slot="title" class="content">
                        <p>Customer Name</p>
                        <p>Tortuga Restaurante</p>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Shape="AvatarShape.Circle" Class="avatar">
                        <IgbIcon @ref="IconRef" IconName="calendar" Collection="material" Class="material-icons"></IgbIcon>
                    </IgbAvatar>
                    <div slot="title" class="content">
                        <p>Order Date</p>
                        <p>August 29, 1996</p>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Shape="AvatarShape.Circle" Class="avatar">
                        <IgbIcon @ref="IconRef" IconName="calendar" Collection="material" Class="material-icons"></IgbIcon>
                    </IgbAvatar>
                    <div slot="title" class="content">
                        <p>Shipped Date</p>
                        <p>September 11, 1996</p>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Shape="AvatarShape.Circle" Class="avatar">
                        <IgbIcon @ref="IconRef" IconName="list" Collection="material" Class="material-icons"></IgbIcon>
                    </IgbAvatar>
                    <div slot="title" class="content">
                        <p>Product Name</p>
                        <p>Carnavon Tigers</p>
                    </div>
                </IgbListItem>
                <IgbListItem>
                    <IgbAvatar slot="start" Shape="AvatarShape.Circle" Class="avatar">
                        <IgbIcon @ref="IconRef" IconName="list" Collection="material" Class="material-icons"></IgbIcon>
                    </IgbAvatar>
                    <div slot="title" class="content">
                        <p>Ship Country</p>
                        <p>Mexico</p>
                    </div>
                </IgbListItem>
            </IgbList>
        </IgbTile>
        <IgbTile ColSpan="2" RowSpan="2">
            <h3 slot="title">Order Line Items</h3>
            <div class="group">
                <IgbCard Class="card">
                    <div class="group_1">
                        <IgbCardHeader>
                            <div slot="thumbnail">
                                <IgbAvatar Shape="AvatarShape.Circle">
                                    <IgbIcon @ref="IconRef" IconName="product" Collection="material" Class="material-icons"></IgbIcon>
                                </IgbAvatar>
                            </div>
                            <h3 slot="title">Carnavon Tigers</h3>
                        </IgbCardHeader>
                        <IgbCardContent Class="column">
                            <div class="body-content">
                                <span>Quantity</span> <span>12</span>
                            </div>
                            <div class="body-content">
                                <span>Unit Price</span> <span>$50</span>
                            </div>
                        </IgbCardContent>
                    </div>
                </IgbCard>
                <IgbCard Class="card">
                    <div class="group_1">
                        <IgbCardHeader>
                            <div slot="thumbnail">
                                <IgbAvatar Shape="AvatarShape.Circle">
                                    <IgbIcon @ref="IconRef" IconName="product" Collection="material" Class="material-icons"></IgbIcon>
                                </IgbAvatar>
                            </div>
                            <h3 slot="title">Guarana Fantastica</h3>
                        </IgbCardHeader>
                        <IgbCardContent Class="column">
                            <div class="body-content">
                                <span>Quantity</span> <span>10</span>
                            </div>
                            <div class="body-content">
                                <span>Unit Price</span> <span>$4</span>
                            </div>
                        </IgbCardContent>
                    </div>
                </IgbCard>
                <IgbCard Class="card">
                    <div class="group_1">
                        <IgbCardHeader>
                            <div slot="thumbnail">
                                <IgbAvatar Shape="AvatarShape.Circle">
                                    <IgbIcon @ref="IconRef" IconName="product" Collection="material" Class="material-icons"></IgbIcon>
                                </IgbAvatar>
                            </div>
                            <h3 slot="title">Vegie-spread</h3>
                        </IgbCardHeader>
                        <IgbCardContent Class="column">
                            <div class="body-content">
                                <span>Quantity</span> <span>5</span>
                            </div>
                            <div class="body-content">
                                <span>Unit Price</span> <span>$35</span>
                            </div>
                        </IgbCardContent>
                    </div>
                </IgbCard>
                <IgbCard Class="card">
                    <div class="group_1">
                        <IgbCardHeader>
                            <div slot="thumbnail">
                                <IgbAvatar Shape="AvatarShape.Circle">
                                    <IgbIcon @ref="IconRef" IconName="product" Collection="material" Class="material-icons"></IgbIcon>
                                </IgbAvatar>
                            </div>
                            <h3 slot="title">Rhonbrau Klosterbier</h3>
                        </IgbCardHeader>
                        <IgbCardContent Class="column">
                            <div class="body-content">
                                <span>Quantity</span> <span>7</span>
                            </div>
                            <div class="body-content">
                                <span>Unit Price</span> <span>$6</span>
                            </div>
                        </IgbCardContent>
                    </div>
                </IgbCard>
            </div>
        </IgbTile>
        <IgbTile>
            <h3 slot="title">Order Value</h3>
            <div class="string">
                <h1>$8.66K</h1>
            </div>
        </IgbTile>
        <IgbTile>
            <h3 slot="title">Item quantity</h3>
            <div class="string">
                <h1>4</h1>
            </div>
        </IgbTile>
    </IgbTileManager>
</div>

@code {
    private IgbIcon IconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (this.IconRef != null && firstRender)
        {
            await this.IconRef.EnsureReady();
            const string listIcon = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#e3e3e3'><path d='M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z'/></svg>";
            const string calendarIcon = "<svg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' height='24px' viewBox='0 0 24 24' width='24px' fill='#e3e3e3'><path d='M19,4h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20 H5V10h14V20z M9,14H7v-2h2V14z M13,14h-2v-2h2V14z M17,14h-2v-2h2V14z M9,18H7v-2h2V18z M13,18h-2v-2h2V18z M17,18h-2v-2h2V18z'/></svg>";
            const string productIcon = "<svg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' height='24px' viewBox='0 0 24 24' width='24px' fill='#e3e3e3'><path d='M13,10h-2V8h2V10z M13,6h-2V1h2V6z M7,18c-1.1,0-1.99,0.9-1.99,2S5.9,22,7,22s2-0.9,2-2S8.1,18,7,18z M17,18 c-1.1,0-1.99,0.9-1.99,2s0.89,2,1.99,2s2-0.9,2-2S18.1,18,17,18z M8.1,13h7.45c0.75,0,1.41-0.41,1.75-1.03L21,4.96L19.25,4l-3.7,7 H8.53L4.27,2H1v2h2l3.6,7.59l-1.35,2.44C4.52,15.37,5.48,17,7,17h12v-2H7L8.1,13z'/></svg>";
            await this.IconRef.RegisterIconFromTextAsync("list", listIcon, "material");
            await this.IconRef.RegisterIconFromTextAsync("calendar", calendarIcon, "material");
            await this.IconRef.RegisterIconFromTextAsync("product", productIcon, "material");
        }
    }
}
```


> [!Warning]
> Due to the iframe permissions policy, the fullscreen button in this example will only work when the example is opened in standalone mode by clicking the 'Expand to fullscreen' button in the top-right corner.

## Usage

The [`IgbTileManager`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTileManager.html) provides a base tile layout behavior, managing the placement of tiles in maximized or normal state. The tiles can be sized independently of each other and used to form complex layouts. End users can reorder tiles by dragging and dropping them, providing a flexible and intuitive experience.

The Tile Manager offers two components that we can use:

- [`IgbTile`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTile.html) - This component represents an individual tile displayed within the Tile Manager.
- [`IgbTileManager`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTileManager.html) - This is the main component that contains all of the tile components, serving as the container for the entire tile layout.

### Getting Started

Before using the Tile Manager, you need to import it as follows:

```razor
// in Program.cs file

builder.Services.AddIgniteUIBlazor(typeof(IgbTileManagerModule));
```

You will also need to link an additional CSS file to apply the styling to the [`IgbTileManager`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTileManager.html) component. The following needs to be placed in the **wwwroot/index.html** file in a **Blazor Web Assembly** project or the **Pages/\_Host.cshtml** file in a **Blazor Server** project:

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

Now you can start with a basic configuration of the Blazor Tile Manager.

```razor
<IgbTileManager>
  <IgbTile>
    <p>Tile 1</p>
  </IgbTile>
  <IgbTile>
    <p>Tile 2</p>
  </IgbTile>
  <IgbTile>
    <p>Tile 3</p>
  </IgbTile>
</IgbTileManager>
```

For a complete introduction to the Ignite UI for Blazor, read the [**Getting Started**](../general-getting-started.md) topic.

## Layout

### Columns and Rows

We can specify the number of grid columns for our Tile Manager. To do this, simply set the [`ColumnCount`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTileManager.html#IgniteUI_Blazor_Controls_IgbTileManager_ColumnCount) property to the desired number of columns. If the number is less than one or the property is not set, the Tile Manager will create as many columns as can fit, with each column being at least 200px wide and expanding to equally share the available space. When the viewport dimensions change, the tiles will also rearrange themselves to maximize the use of space.

```razor
<IgbTileManager ColumnCount="2">
  <IgbTile>
    <span slot="title">Tile 1 header</span>
    <p>Tile 1 Content</p>
  </IgbTile>
  <IgbTile>
    <span slot="title">Tile 2 header</span>
    <p>Tile 2 Content</p>
  </IgbTile>
  <IgbTile>
    <span slot="title">Tile 3 header</span>
    <p>Tile 3 Content</p>
  </IgbTile>
  ...
</IgbTileManager>
```

In this code snippet, the three tiles in the Tile Manager will be arranged into 2 rows and 2 columns.

### Gap

Another property that can be used in the Tile Manager is the [`Gap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTileManager.html#IgniteUI_Blazor_Controls_IgbTileManager_Gap) property, which defines the space between tiles. The value of the [`Gap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTileManager.html#IgniteUI_Blazor_Controls_IgbTileManager_Gap) property must be a number followed by a length unit (e.g., px, rem, em, ...). This value will apply to both the horizontal gap (width) and the vertical gap (height) between tiles.

```razor
<IgbTileManager Gap="20px">
  <IgbTile>
    <span slot="title">Tile 1 header</span>
    <p>Tile 1 Content</p>
  </IgbTile>
  <IgbTile>
    <span slot="title">Tile 2 header</span>
    <p>Tile 2 Content</p>
  </IgbTile>
  ...
</IgbTileManager>
```

### Minimum width and height

We also have properties for setting the minimum width of the columns ([`MinColumnWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTileManager.html#IgniteUI_Blazor_Controls_IgbTileManager_MinColumnWidth)) and the minimum height of the rows ([`MinRowHeight`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTileManager.html#IgniteUI_Blazor_Controls_IgbTileManager_MinRowHeight)) in the Tile Manager. Similar to the gap property, the values for these properties must be a number followed by a length unit. These values will define the minimum width for all columns and the minimum height for all rows in the Tile Manager.

```razor
<IgbTileManager MinColumnWidth="200px" MinRowHeight="150px">
  <IgbTile>
    <span slot="title">Tile 1 header</span>
    <p>Tile 1 Content</p>
  </IgbTile>
  <IgbTile>
    <span slot="title">Tile 2 header</span>
    <p>Tile 2 Content</p>
  </IgbTile>
  ...
</IgbTileManager>
```

### Example

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <div class="inputWrapper">
        <IgbInput Label="Columns Number" DisplayType="InputType.Number" Value="0" Min="0" Change="OnInputChangeColumn"></IgbInput>
        <IgbInput Label="Gap Size" DisplayType="InputType.Text" Placeholder="10px" Change="OnInputChangeGap"></IgbInput>
    </div>
    <IgbTileManager @ref="TileManagerRef" Gap="@GapValue">
        <IgbTile DisableFullscreen="true" DisableMaximize="true">
            <div class="picture">
                <img src="https://picsum.photos/1048/998" alt="picture" />
            </div>
        </IgbTile>
        <IgbTile DisableFullscreen="true" DisableMaximize="true">
            <div class="picture">
                <img src="https://picsum.photos/1049/998" alt="picture" />
            </div>
        </IgbTile>
        <IgbTile DisableFullscreen="true" DisableMaximize="true">
            <div class="picture">
                <img src="https://picsum.photos/1050/998" alt="picture" />
            </div>
        </IgbTile>
        <IgbTile DisableFullscreen="true" DisableMaximize="true">
            <div class="picture">
                <img src="https://picsum.photos/1051/998" alt="picture" />
            </div>
        </IgbTile>
        <IgbTile DisableFullscreen="true" DisableMaximize="true">
            <div class="picture">
                <img src="https://picsum.photos/1052/998" alt="picture" />
            </div>
        </IgbTile>
        <IgbTile DisableFullscreen="true" DisableMaximize="true">
            <div class="picture">
                <img src="https://picsum.photos/1053/998" alt="picture" />
            </div>
        </IgbTile>
    </IgbTileManager>
</div>  

@code {
    private IgbTileManager TileManagerRef { get; set; }
    private string GapValue = "10px";

    public void OnInputChangeColumn(IgbComponentValueChangedEventArgs e)
    {
        double value;
        double.TryParse(e.Detail, out value);
        this.TileManagerRef.ColumnCount = value;
    }

    public void OnInputChangeGap(IgbComponentValueChangedEventArgs e)
    {
        GapValue = e.Detail;
    }
}
```


## Tile component

The Tile component has properties that can be set individually for each tile. Some of these properties include:

- The [`ColSpan`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTile.html#IgniteUI_Blazor_Controls_IgbTile_ColSpan) property specifies how many columns the tile will span across in the layout, allowing you to control its horizontal size.
- The [`RowSpan`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTile.html#IgniteUI_Blazor_Controls_IgbTile_RowSpan) property determines how many rows the tile will span vertically, adjusting the tile's height within the layout.
- The [`ColStart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTile.html#IgniteUI_Blazor_Controls_IgbTile_ColStart) property specifies the starting column where the tile is placed.
- The [`RowStart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTile.html#IgniteUI_Blazor_Controls_IgbTile_RowStart) property specifies the starting row where the tile is placed.
- The [`DisableFullscreen`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTile.html#IgniteUI_Blazor_Controls_IgbTile_DisableFullscreen) property hides the default fullscreen action button.
- The [`DisableMaximize`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTile.html#IgniteUI_Blazor_Controls_IgbTile_DisableMaximize) property hides the default maximize toggle action button.
- The [`DisableResize`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTile.html#IgniteUI_Blazor_Controls_IgbTile_DisableResize) property prevents the tile from being resized by the user.

```razor
<IgbTileManager>
  <IgbTile ColSpan="2" DisableResize="true">
    <span slot="title">Tile 1 header</span>
    <p>Tile 1 Content</p>
  </IgbTile>
  <IgbTile>
    <span slot="title">Tile 2 header</span>
    <p>Tile 2 Content</p>
  </IgbTile>
  ...
</IgbTileManager>
```

The Tile component also exposes several slots which you can use:

| Slot name | Description |
| ---------|------------ |
| `title` | Content for the tile header. |
| `fullscreen-action` | Overwrite the default fullscreen action content. |
| `maximize-action` | Overwrite the default maximize action content. |
| `actions` | Custom content rendered after the default actions. |
| `side-adorner` | Overwrite the default horizontal resize adorner. |
| `corner-adorner` | Overwrite the default diagonal resize adorner. |
| `bottom-adorner` | Overwrite the default vertical resize adorner. |

### Header section actions

By default, the header section includes two action buttons:

- The `maximize` button enlarges the tile's content to fill the entire width of the Tile Manager, offering a wider view of the content.
- The `fullscreen` button enables the tile to open in fullscreen mode in the user's browser.

<img src="../../images/tile-manager-actions.png" alt="tile-manager-actions"/>

If you want to display just one of the two buttons, you can set either [`DisableMaximize`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTile.html#IgniteUI_Blazor_Controls_IgbTile_DisableMaximize) or [`DisableFullscreen`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTile.html#IgniteUI_Blazor_Controls_IgbTile_DisableFullscreen) property. To customize the appearance you can use the `maximize-action` slot for the maximize button, or the `fullscreen-action` slot for the fullscreen button.

```razor
<IgbTileManager>
  <IgbTile DisableFullscreen="true">
    <IgbIconButton slot="maximize-actions" IconName="north_east" Collection="material">
    </IgbIconButton>
    <p>Tile 1 Content</p>
  </IgbTile>
</IgbTileManager>
```

You also have the option to disable both action buttons and create custom ones according to your preferences.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbIcon @ref="@RegisterIconRef" />
    <IgbTileManager ColumnCount="2" Gap="20px">
        <IgbTile>
            <h3 slot="title">Default Actions</h3>
            <p>This tile has default actions and title.</p>
        </IgbTile>
        <IgbTile DisableFullscreen="true">
            <h3 slot="title">No Fullscreen Action</h3>
            <p>Fullscreen is disabled via property.</p>
        </IgbTile>
        <IgbTile DisableFullscreen="true" DisableMaximize="true">
            <h3 slot="title">Custom Actions</h3>
            <IgbIconButton id="customOne" slot="actions" Variant="IconButtonVariant.Flat" Collection="material" onclick="customOneClick(event)"
            IconName="north_east" aria-label="north_east"></IgbIconButton>
            <p>Replace the default actions with custom ones, and include extra actions when the tile is maximized.</p>
        </IgbTile>
        <IgbTile DisableFullscreen="true" DisableMaximize="true">
            <IgbIconButton id="customTwo" slot="actions" Variant="IconButtonVariant.Flat" Collection="material" IconName="north_east" onclick="customTwoClick(event)"></IgbIconButton>
            <p>Display only custom actions in the header.</p>
        </IgbTile>
        <IgbTile DisableFullscreen="true" DisableMaximize="true">
            <h3 slot="title">Only title</h3>
            <p>Display only title in the header.</p>
        </IgbTile>
        <IgbTile DisableFullscreen="true" DisableMaximize="true">
            <p>Content only.</p>
        </IgbTile>
    </IgbTileManager>
</div>  

@code {
    private IgbIcon RegisterIconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (this.RegisterIconRef != null && firstRender)
        {
            await this.RegisterIconRef.EnsureReady();
            const string northEast = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#5f6368'><path d='m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z'/></svg>";
            await this.RegisterIconRef.RegisterIconFromTextAsync("north_east", northEast, "material");
            const string southWest = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#5f6368'><path d='M200-200v-400h80v264l464-464 56 56-464 464h264v80H200Z'/></svg>";
            await this.RegisterIconRef.RegisterIconFromTextAsync("south_west", southWest, "material");
            const string more = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#5f6368'><path d='M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z'/></svg>";
            await this.RegisterIconRef.RegisterIconFromTextAsync("more", more, "material");
            const string chart = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#5f6368'><path d='M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z'/></svg>";
            await this.RegisterIconRef.RegisterIconFromTextAsync("chart", chart, "material");
        }
    }
}
```


In this example, we created custom action buttons using the Ignite UI Icon Button component.

## Resizing

Resizing in the Tile Manager is a functionality that allows tiles to be resized using three different resize adorners.

- **Side Adorner**: Adjusts the width by modifying the column span.
- **Bottom Adorner**: Adjusts the height by modifying the row span.
- **Corner Adorner**: Adjusts both width and height simultaneously.

To ensure smooth resizing, a ghost element is used instead of directly modifying the tile’s dimensions. This element appears on top of the original tile, displaying its current dimensions when resizing begins, and it updates in real time as the user drags any of the resize handles.

> [!Note]
> If the ghost element exceeds the available grid space, it will automatically adjust to the largest possible span within the grid's limits.

The Tile Manager automatically rearranges itself when a tile changes size, ensuring that there is minimal empty space. That's why expanding a tile may push adjacent tiles into new positions, while shrinking creates gaps that other tiles may fill dynamically. This ensures that the Tile Manager stays as compact as possible, without any overlapping tiles, and that all movements remain within the defined grid structure.

We can use the [`ResizeMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTileManager.html#IgniteUI_Blazor_Controls_IgbTileManager_ResizeMode) property to control how resizing is applied in the Tile Manager. It can be set to `none`, `hover` or `always`, which determines when the resize adorners are visible. The default value is `none` and the tile could not be resized.

```razor
<IgbTileManager ResizeMode="TileManagerResizeMode.Hover">
  <IgbTile>
    <p>Tile 1</p>
  </IgbTile>
  <IgbTile>
    <p>Tile 2</p>
  </IgbTile>
</IgbTileManager>
```

You can see the difference between the three states in the example below:

```razor
@using IgniteUI.Blazor.Controls



<div class="container sample center">
    <div class="inputWrapper">
        <IgbRadioGroup Alignment="ContentOrientation.Horizontal">
            <IgbRadio name="resize" Value="Always" Checked="true" Change="OnRadioButtonClick">Always</IgbRadio>
            <IgbRadio name="resize" Value="Hover" Change="OnRadioButtonClick">Hover</IgbRadio>
            <IgbRadio name="resize" Value="None" Change="OnRadioButtonClick">None</IgbRadio>
        </IgbRadioGroup>
        <IgbInput Label="Minimum Column Width" Placeholder="200px" DisplayType="InputType.Text" Change="OnInputChangeColumnWidth"></IgbInput>
        <IgbInput Label="Minimum Row Height" Placeholder="200px" DisplayType="InputType.Text" Change="OnInputChangeRowHeight"></IgbInput>
    </div>
    <IgbTileManager @ref="TileManagerRef" ResizeMode="@ResizeMode" Gap="20px">
        <IgbTile>
            <span slot="title">Tile 1 header</span>
            <p>Content for Tile 1</p>
        </IgbTile>
        <IgbTile>
            <span slot="title">Tile 2 header</span>
            <p>Content for Tile 2</p>
        </IgbTile>
        <IgbTile>
            <span slot="title">Tile 3 header</span>
            <p>Content for Tile 3</p>
        </IgbTile>
        <IgbTile>
            <span slot="title">Tile 4 header</span>
            <p>Content for Tile 4</p>
        </IgbTile>
    </IgbTileManager>
</div>  

@code {
    private IgbTileManager TileManagerRef { get; set; }
    private TileManagerResizeMode ResizeMode = TileManagerResizeMode.Always;

    public void OnRadioButtonClick(IgbRadioChangeEventArgs e)
    {
        if (this.TileManagerRef != null)
        {
            switch (e.Detail.Value)
            {
                case "Hover":
                    this.ResizeMode = TileManagerResizeMode.Hover;
                    break;
                case "Always":
                    this.ResizeMode = TileManagerResizeMode.Always;
                    break;
                case "None":
                    this.ResizeMode = TileManagerResizeMode.None;
                    break;
            }
        }
    }

    public void OnInputChangeColumnWidth(IgbComponentValueChangedEventArgs e)
    {
        if (this.TileManagerRef != null)
        {
            this.TileManagerRef.MinColumnWidth = e.Detail;
        }
    }

    public void OnInputChangeRowHeight(IgbComponentValueChangedEventArgs e)
    {
        if (this.TileManagerRef != null)
        {
            this.TileManagerRef.MinRowHeight = e.Detail;
        }
    }
}
```


### Snapping

Tiles resize in full grid units, meaning they can only grow or shrink by whole columns or rows. The ghost element snaps to the next column or row when expanding past the halfway point and to the previous one when shrinking past the halfway mark. This applies to all adorners (bottom, side and corner), ensuring tiles always stay aligned to the grid.

Grid gaps are also considered, keeping the layout consistent during resizing.

### Limitations

There are several constraints and limitations in the resizing process:

- A tile cannot be resized smaller than its defined minimum width or height ([`MinColumnWidth`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTileManager.html#IgniteUI_Blazor_Controls_IgbTileManager_MinColumnWidth), [`MinRowHeight`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTileManager.html#IgniteUI_Blazor_Controls_IgbTileManager_MinRowHeight)).
- A tile cannot exceed the maximum available horizontal space in the grid.

## Reorder

You can reorder tiles in the Tile Manager using the drag-and-drop feature. By default, tiles are not draggable. To enable this functionality, set the [`DragMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTileManager.html#IgniteUI_Blazor_Controls_IgbTileManager_DragMode) property on the Tile Manager to either `tile` or `tile-header`.

- With the `tile` option, you can click and hold anywhere on an individual tile to start dragging it.
- With the `tile-header` option, you can only click and hold in the tile's header section to start the dragging process.

> [!Note]
> While the tile is in maximized or fullscreen state, the tile cannot be dragged.

Similar to resizing, when you initiate the drag-and-drop process, a ghost element appears beneath the tile you’ve grabbed. As you drag the tile, the ghost element moves with it, dynamically reordering the other tiles in real time. This allows you to preview how the tile grid will look when you drop the tile.

```razor
<IgbTileManager DragMode="TileManagerDragMode.TileHeader">
  <IgbTile>
    <span slot="title">Tile 1 header</span>
    <p>Tile 1 Content</p>
  </IgbTile>
  <IgbTile>
    <span slot="title">Tile 2 header</span>
    <p>Tile 2 Content</p>
  </IgbTile>
</IgbTileManager>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <div class="radioWrapper">
        <IgbRadioGroup Alignment="ContentOrientation.Horizontal">
            <IgbRadio name="dragMode" Value="TileHeader" Checked="true" Change="OnRadioButtonClick">Tile-header</IgbRadio>
            <IgbRadio name="dragMode" Value="Tile" Change="OnRadioButtonClick">Tile</IgbRadio>
            <IgbRadio name="dragMode" Value="None" Change="OnRadioButtonClick">None</IgbRadio>
        </IgbRadioGroup>
    </div>
    <IgbTileManager @ref="TileManagerRef" DragMode="@DragMode" ColumnCount="2" Gap="20px">
        <IgbTile>
            <span slot="title">Tile 1 header</span>
            <p>Content for Tile 1</p>
        </IgbTile>
        <IgbTile>
            <span slot="title">Tile 2 header</span>
            <p>Content for Tile 2</p>
        </IgbTile>
        <IgbTile>
            <span slot="title">Tile 3 header</span>
            <p>Content for Tile 3</p>
        </IgbTile>
        <IgbTile>
            <span slot="title">Tile 4 header</span>
            <p>Content for Tile 4</p>
        </IgbTile>
    </IgbTileManager>
</div>  

@code {
    private IgbTileManager TileManagerRef { get; set; }
    private TileManagerDragMode DragMode = TileManagerDragMode.TileHeader;

    public void OnRadioButtonClick(IgbRadioChangeEventArgs e)
    {
        if (this.TileManagerRef != null)
        {
            switch (e.Detail.Value)
            {
                case "TileHeader":
                    this.DragMode = TileManagerDragMode.TileHeader;
                    break;
                case "Tile":
                    this.DragMode = TileManagerDragMode.Tile;
                    break;
                case "None":
                    this.DragMode = TileManagerDragMode.None;
                    break;
            }
        }
    }
}
```


## Serialization

The Tile Manager provides methods that help manage the layout of tiles:

- The [`SaveLayout`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTileManager.html#IgniteUI_Blazor_Controls_IgbTileManager_SaveLayout) method allows you to save the current arrangement of tiles in the Tile Manager, it captures the current order, size and position of all tiles, so you can later restore it to this exact configuration.
- The [`LoadLayout`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTileManager.html#IgniteUI_Blazor_Controls_IgbTileManager_LoadLayout) method enables you to load a previously saved layout. When called, it restores the tiles to the exact state they were in when the layout was saved, including their order, size and position.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <div class="btnWrapper">
        <IgbButton @onclick="SaveLayout">Save Layout</IgbButton>
        <IgbButton @onclick="LoadLayout">Load Layout</IgbButton>
        <IgbButton onclick="addTile()">Add Tile</IgbButton>
        <IgbButton onclick="removeTile()">Remove Tile</IgbButton>
    </div>
    <IgbTileManager @ref="TileManagerRef" ResizeMode="TileManagerResizeMode.Always" DragMode="TileManagerDragMode.Tile" ColumnCount="2" Gap="20px">
        <IgbTile>
            <span slot="title">Tile 1 header</span>
            <p>Content for Tile 1</p>
        </IgbTile>
        <IgbTile>
            <span slot="title">Tile 2 header</span>
            <p>Content for Tile 2</p>
        </IgbTile>
        <IgbTile>
            <span slot="title">Tile 3 header</span>
            <p>Content for Tile 3</p>
        </IgbTile>
        <IgbTile>
            <span slot="title">Tile 4 header</span>
            <p>Content for Tile 4</p>
        </IgbTile>
    </IgbTileManager>
</div>  

@code {
    private IgbTileManager TileManagerRef { get; set; }
    private string SerializeData;

    public void SaveLayout()
    {
        this.SerializeData = this.TileManagerRef.SaveLayout();
    }

    public void LoadLayout()
    {
        this.TileManagerRef.LoadLayout(SerializeData);
    }
}
```


## Styling

You can also customize the appearance of the two components - [`IgbTileManager`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTileManager.html) and [`IgbTile`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTile.html).
The [`IgbTileManager`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTileManager.html) exposes only one CSS property - `base` which can be used for styling the base wrapper of the Tile Manager.
The [`IgbTile`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTile.html) exposes several CSS properties we can use:

| Part name | Description |
| ---------|------------ |
| `base` | The wrapping container of the tile component. |
| `header` | The header container of the tile, including title and actions parts. |
| `title` | The title container. |
| `actions` | The actions container. |
| `content-container` | The container wrapping the tile default slot. |
| `trigger-side` | The horizontal adorner. |
| `trigger` | The diagonal adorner |
| `trigger-bottom` | The vertical adorner. |

Using these CSS parts you can customize the appearance of the two components as follows:

```css
igc-tile-manager::part(base) {
  background-color: var(--ig-surface-900);
}

igc-tile::part(content-container) {
  color: var(--ig-secondary-200);
}

igc-tile::part(header) {
  background-color: var(--ig-gray-300);
}

igc-tile::part(title) {
  color: var(--ig-primary-400);
}

igc-tile:nth-child(n+2)::part(trigger-side),
igc-tile:nth-child(n+2)::part(trigger-bottom) {
  background-color: var(--ig-success-500);
}

igc-tile:nth-child(n+2)::part(trigger) {
  background-color: var(--ig-error-500);
}
```

You can also change the icon of the adorners to a custom one using the `side-adorner`, `corner-adorner`, and `bottom-adorner` slots. For instance:

```razor
<IgbTile>
  <IgbIcon slot="side-adorner" Class="side" IconName="indicator"></IgbIcon>
  <IgbIcon slot="corner-adorner" Class="corner" IconName="indicator"></IgbIcon>
  <IgbIcon slot="bottom-adorner" Class="bottom" IconName="indicator"></IgbIcon>
  <span slot="title">Tile header</span>
</IgbTile>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample center">
    <IgbTileManager ResizeMode="TileManagerResizeMode.Always" ColumnCount="2" Gap="20px">
        <IgbTile>
            <IgbIcon @ref="IconRef" slot="side-adorner" Class="side" IconName="indicator" Collection="material"></IgbIcon>
            <IgbIcon @ref="IconRef" slot="corner-adorner" Class="corner" IconName="indicator" Collection="material"></IgbIcon>
            <IgbIcon @ref="IconRef" slot="bottom-adorner" Class="bottom" IconName="indicator" Collection="material"></IgbIcon>
            <span slot="title">Tile 1 header</span>
            <p>Content for Tile 1</p>
        </IgbTile>
        <IgbTile>
            <span slot="title">Tile 2 header</span>
            <p>Content for Tile 2</p>
        </IgbTile>
        <IgbTile>
            <span slot="title">Tile 3 header</span>
            <p>Content for Tile 3</p>
        </IgbTile>
        <IgbTile>
            <span slot="title">Tile 4 header</span>
            <p>Content for Tile 4</p>
        </IgbTile>
    </IgbTileManager>
</div>  

@code {
    private IgbIcon IconRef { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (this.IconRef != null && firstRender)
        {
            await this.IconRef.EnsureReady();
            const string indicatorIcon = "<svg xmlns='http://www.w3.org/2000/svg' fill='none'><path d='M3.993 12.508V.765h-.979v11.743h.979ZM1.54 10.06V3.21H.56v6.85h.98Z' fill='#09F'/></svg>";
            await this.IconRef.RegisterIconFromTextAsync("indicator", indicatorIcon, "material");
        }
    }
}
```


## API Reference

- [`IgbTileManager`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTileManager.html)
- [`IgbTile`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTile.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [`IgbTile`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTile.html)
- [`IgbTileManager`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTileManager.html)
- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

---
title: Blazor {ComponentTitle} Customize Icons- Infragistics
_description: Configure custom icons for Blazor Grid.
_keywords: icons, custom icons, igniteui for Blazor, {ComponentKeywords}, Ignite UI for Blazor, Infragistics
_license: MIT
mentionedTypes: ["Infragistics.Controls.Grid"]
_tocName: Customize Icons
_premium: true
---

# Blazor Grid Customize Icons

The Ignite UI for Blazor [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html) icons can be customized to use custom icons from a different collection set using the exposed API methods:

- `registerIconFromText`
- `registerIcon`
- `setIconRef`

Registering an icon caches it locally, so that it can reused between components, that reference that icon by name and collection name. Setting a reference changes which icon, from which collection, will be used when referencing that icon by name.

<!-- Blazor -->

```razor
@code {
    private IgbIcon icon;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (this.icon != null && firstRender)
        {
            this.icon.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                // Add a new 'material' icon called 'filter_list' from string
                this.icon.RegisterIconFromText("filter_list", '<svg>...</svg>', "material");

                // Add a new 'material' icon called 'filter_list' from svg url
                this.icon.RegisterIcon("filter_list", "url" , "material")

                // Sets the icon reference to the new registered icon.
                this.icon.SetIconRef("filter_list", "default", new IgbIconMeta()
                {
                    Name = "filter_list",
                    Collection = "material",
                });
            }));
        }
    }
}

```

<!-- end: Blazor -->

## Blazor Customize Icons Example

The following sample demonstrates how to switch from the original material icons to custom font awesome svg icons and back to material.

```razor
@using IgniteUI.Blazor.Controls

<div class="container vertical ig-typography">
    <div class="container vertical fill">
        <IgbIcon @ref="icon" IconName="filter_list" Collection="fontAwesome" hidden></IgbIcon>
        <IgbButtonGroup Select="@((evt) => ButtonSelectionChange(evt))" style="width:fit-content;">
            <IgbToggleButton Value="material" Selected>Material Icons</IgbToggleButton>
            <IgbToggleButton Value="fontAwesome">Font Awesome Icons</IgbToggleButton>
        </IgbButtonGroup>
        <IgbGrid AutoGenerate="false"
                 Name="grid"
                 @ref="grid"
                 Data="NwindData"
                 RowEditable="true"
                 AllowFiltering="true"
                 FilterMode="FilterMode.ExcelStyleFilter"
                 PrimaryKey="ProductID">
            <IgbGridToolbar>
                <IgbGridToolbarActions>
                    <IgbGridToolbarAdvancedFiltering>
                    </IgbGridToolbarAdvancedFiltering>
                    <IgbGridToolbarHiding>
                    </IgbGridToolbarHiding>
                    <IgbGridToolbarPinning>
                    </IgbGridToolbarPinning>
                    <IgbGridToolbarExporter>
                    </IgbGridToolbarExporter>
                </IgbGridToolbarActions>

            </IgbGridToolbar>
            <IgbColumn Name="ProductName"
                       Field="ProductName"
                       Header="Product Name"
                        Sortable="true">
            </IgbColumn>

            <IgbColumn Name="UnitPrice"
                       Field="UnitPrice"
                       Header="Unit Price" Sortable="true">
            </IgbColumn>

            <IgbColumn Name="UnitsOnOrder"
                       Field="UnitsOnOrder"
                       Header="Units On Order" Sortable="true">
            </IgbColumn>

            <IgbColumn Name="UnitsInStock"
                       Field="UnitsInStock"
                       Header="Units In Stock" Sortable="true">
            </IgbColumn>

            <IgbColumn Name="QuantityPerUnit"
                       Field="QuantityPerUnit"
                       Header="Quantity Per Unit" Sortable="true">
            </IgbColumn>

            <IgbColumn Name="ReorderLevel"
                       Field="ReorderLevel"
                       Header="Reorder Level" Sortable="true">
            </IgbColumn>

            <IgbColumn Name="Discontinued"
                       Field="Discontinued"
                       Header="Discontinued" Sortable="true">
            </IgbColumn>

        </IgbGrid>

    </div>
</div>

@code {
    private IgbGrid grid;
    private IgbIcon icon;
    private string arrowDown = @"<svg xmlns=""http://www.w3.org/2000/svg"" viewBox=""0 0 576 512""><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=""M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z""/></svg>";
    private string arrowUp = @"<svg xmlns=""http://www.w3.org/2000/svg"" viewBox=""0 0 576 512""><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=""M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.7 32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 480l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32z""/></svg>";
    private string caretDown = @"<svg xmlns=""http://www.w3.org/2000/svg"" viewBox=""0 0 320 512""><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=""M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z""/></svg>";
    private string chevronRight = @"<svg xmlns=""http://www.w3.org/2000/svg"" viewBox=""0 0 320 512""><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=""M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z""/></svg>";
    private string ellipsisRight = @"<svg xmlns=""http://www.w3.org/2000/svg"" viewBox=""0 0 128 512""><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=""M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z""/></svg>";
    private string eyeSlash = @"<svg xmlns=""http://www.w3.org/2000/svg"" viewBox=""0 0 640 512""><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=""M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z""/></svg>";
    private string eye = @"<svg xmlns=""http://www.w3.org/2000/svg"" viewBox=""0 0 576 512""><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=""M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z""/></svg>";
    private string fileExport = @"<svg xmlns=""http://www.w3.org/2000/svg"" viewBox=""0 0 576 512""><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=""M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 128-168 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l168 0 0 112c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM384 336l0-48 110.1 0-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39L384 336zm0-208l-128 0L256 0 384 128z""/></svg>";
    private string magnifyGlass = @"<svg xmlns=""http://www.w3.org/2000/svg"" viewBox=""0 0 512 512""><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=""M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z""/></svg>";
    private string filter = @"<svg xmlns=""http://www.w3.org/2000/svg"" viewBox=""0 0 512 512""><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=""M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z""/></svg>";
    private string thumbtack = @"<svg xmlns=""http://www.w3.org/2000/svg"" viewBox=""0 0 384 512""><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=""M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3L32 352c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 384l64 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96z""/></svg>";
    private string thumbtackSlash = @"<svg xmlns=""http://www.w3.org/2000/svg"" viewBox=""0 0 640 512""><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=""M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L481.4 352c9.8-.4 18.9-5.3 24.6-13.3c6-8.3 7.7-19.1 4.4-28.8l-1-3c-13.8-41.5-42.8-74.8-79.5-94.7L418.5 64 448 64c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l29.5 0-6.1 79.5L38.8 5.1zM324.9 352L177.1 235.6c-20.9 18.9-37.2 43.3-46.5 71.3l-1 3c-3.3 9.8-1.6 20.5 4.4 28.8s15.7 13.3 26 13.3l164.9 0zM288 384l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96-64 0z""/></svg>";
    private string xMark = @"<svg xmlns=""http://www.w3.org/2000/svg"" viewBox=""0 0 384 512""><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=""M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z""/></svg>";

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (this.icon != null && firstRender)
        {
            this.icon.EnsureReady().ContinueWith(new Action<Task>((e) =>
            {
                this.RegisterAwesomeIcons();
            }));
        }
        
    }

    public async void ButtonSelectionChange(IgbComponentValueChangedEventArgs evt)
    {
       await this.ChangeRefs(evt.Detail);
    }
    private void RegisterAwesomeIcons()
    {
        this.icon.RegisterIconFromText("filter_list", filter, "fontAwesome");
        this.icon.RegisterIconFromText("arrow_upward", arrowUp, "fontAwesome");
        this.icon.RegisterIconFromText("arrow_downward", arrowDown, "fontAwesome");
        this.icon.RegisterIconFromText("more_vert", ellipsisRight, "fontAwesome");
        this.icon.RegisterIconFromText("unpin-left", thumbtackSlash, "fontAwesome");
        this.icon.RegisterIconFromText("pin-left", thumbtack, "fontAwesome");
        this.icon.RegisterIconFromText("visibility", eye, "fontAwesome");
        this.icon.RegisterIconFromText("visibility_off", eyeSlash, "fontAwesome");
        this.icon.RegisterIconFromText("search", magnifyGlass, "fontAwesome");
        this.icon.RegisterIconFromText("chevron_right", chevronRight, "fontAwesome");
        this.icon.RegisterIconFromText("clear", xMark, "fontAwesome");
        this.icon.RegisterIconFromText("file_download", fileExport, "fontAwesome");
        this.icon.RegisterIconFromText("arrow_drop_down", caretDown, "fontAwesome");
    }

    private async Task ChangeRefs(string collectionName)
    {
        await this.icon.SetIconRefAsync("input_expand", "default", new IgbIconMeta()
            {
                Name = "arrow_drop_down",
                Collection = collectionName,
            });
        await this.icon.SetIconRefAsync("file_download", "default", new IgbIconMeta()
            {
                Name = "file_download",
                Collection = collectionName,
            });
        await this.icon.SetIconRefAsync("clear", "default", new IgbIconMeta()
            {
                Name = "clear",
                Collection = collectionName,
            });
        await this.icon.SetIconRefAsync("arrow_next", "default", new IgbIconMeta()
            {
                Name = "chevron_right",
                Collection = collectionName,
            });

        await this.icon.SetIconRefAsync("search", "default", new IgbIconMeta()
            {
                Name = "search",
                Collection = collectionName,
            });

        await this.icon.SetIconRefAsync("hide", "default", new IgbIconMeta()
            {
                Name = "visibility_off",
                Collection = collectionName,
            });

        await this.icon.SetIconRefAsync("show", "default", new IgbIconMeta()
            {
                Name = "visibility",
                Collection = collectionName,
            });

        await this.icon.SetIconRefAsync("unpin", "default", new IgbIconMeta()
            {
                Name = "unpin-left",
                Collection = collectionName == "material" ? "imx-icons" : collectionName,
            });

        await this.icon.SetIconRefAsync("pin", "default", new IgbIconMeta()
            {
                Name = "pin-left",
                Collection = collectionName == "material" ? "imx-icons" : collectionName,
            });
        await this.icon.SetIconRefAsync("filter_list", "default", new IgbIconMeta()
            {
                Name = "filter_list",
                Collection = collectionName,
            });

        await this.icon.SetIconRefAsync("sort_asc", "default", new IgbIconMeta()
            {
                Name = "arrow_upward",
                Collection = collectionName,
            });

        await this.icon.SetIconRefAsync("sort_desc", "default", new IgbIconMeta()
            {
                Name = "arrow_downward",
                Collection = collectionName,
            });

        await this.icon.SetIconRefAsync("more_vert", "default", new IgbIconMeta()
            {
                Name = "more_vert",
                Collection = collectionName,
            });



    }

    private NwindData _nwindData = null;
    public NwindData NwindData
    {
        get
        {
            if (_nwindData == null)
            {
                _nwindData = new NwindData();
            }
            return _nwindData;
        }
    }

}
```
```csharp
using System;
using System.Collections.Generic;
public class NwindDataItem
{
    public double ProductID { get; set; }
    public string ProductName { get; set; }
    public double SupplierID { get; set; }
    public double CategoryID { get; set; }
    public string QuantityPerUnit { get; set; }
    public double UnitPrice { get; set; }
    public double UnitsInStock { get; set; }
    public double UnitsOnOrder { get; set; }
    public double ReorderLevel { get; set; }
    public bool Discontinued { get; set; }
    public string OrderDate { get; set; }
    public double Rating { get; set; }
    public List<NwindDataItem_LocationsItem> Locations { get; set; }
}
public class NwindDataItem_LocationsItem
{
    public string Shop { get; set; }
    public string LastInventory { get; set; }
}

public class NwindData
    : List<NwindDataItem>
{
    public NwindData()
    {
        this.Add(new NwindDataItem() { ProductID = 1, ProductName = @"Chai", SupplierID = 1, CategoryID = 1, QuantityPerUnit = @"10 boxes x 20 bags", UnitPrice = 18, UnitsInStock = 39, UnitsOnOrder = 30, ReorderLevel = 10, Discontinued = false, OrderDate = @"2012-02-12", Rating = 5, Locations = new List<NwindDataItem_LocationsItem>()
        {
            new NwindDataItem_LocationsItem() { Shop = @"Fun-Tasty Co.", LastInventory = @"2018-06-12" },
            new NwindDataItem_LocationsItem() { Shop = @"Farmer Market", LastInventory = @"2018-04-04" }}
            new NwindDataItem_LocationsItem() { Shop = @"Super Market", LastInventory = @"2018-09-09" }}
            // ... 3 more items
    }
}
```


## Internal Icons

The following lists all internal icons. Alias is the name of the icon by which it can be referenced. Target Icon is the internal icon name and Target Collection is the collection in which the icon is registered internally.

| Alias                            | Target Icon           | Target Collection |
|----------------------------------|-----------------------|---------------|
| **add*-                        | add                   | material      |
| **add_child*-                  | add-child             | imx-icons     |
| **add_row*-                    | add-row               | imx-icons     |
| **arrow_back*-                 | arrow_back            | material      |
| **arrow_drop_down*-            | arrow_drop_up         | material      |
| **arrow_forward*-              | arrow_forward         | material      |
| **arrow_next*-                 | chevron_right         | material      |
| **arrow_prev*-                 | chevron_left          | material      |
| **case_sensitive*-             | case-sensitive        | imx-icons     |
| **carousel_next*-              | arrow_forward         | material      |
| **carousel_prev*-              | arrow_back            | material      |
| **chevron_left*-               | chevron_left          | material      |
| **chevron_right*-              | chevron_right         | material      |
| **clock*-                      | access_time           | material      |
| **close*-                      | close                 | material      |
| **collapse*-                   | expand_less           | material      |
| **confirm*-                    | check                 | material      |
| **date_range*-                 | date_range            | material      |
| **delete*-                     | delete                | material      |
| **drag_indicator*-             | drag_indicator        | material      |
| **edit*-                       | edit                  | material      |
| **error*-                      | error                 | material      |
| **expand*-                     | expand_more           | material      |
| **expand_more*-                | expand_more           | material      |
| **file_download*-              | file_download         | material      |
| **filter_all*-                 | select-all            | imx-icons     |
| **filter_before*-              | is-before             | imx-icons     |
| **filter_contains*-            | contains              | imx-icons     |
| **filter_does_not_contain*-    | does-not-contain      | imx-icons     |
| **filter_empty*-               | is-empty              | imx-icons     |
| **filter_equal*-               | equals                | imx-icons     |
| **filter_false*-               | is-false              | imx-icons     |
| **filter_greater_than*-        | greater-than          | imx-icons     |
| **filter_greater_than_or_equal** | greater-than-or-equal | imx-icons     |
| **filter_in*-                  | is-in                 | imx-icons     |
| **filter_last_month*-          | last-month            | imx-icons     |
| **filter_last_year*-           | last-year             | imx-icons     |
| **filter_less_than*-           | less-than             | imx-icons     |
| **filter_less_than_or_equal*-  | less-than-or-equal    | imx-icons     |
| **filter_next_month*-          | next-month            | imx-icons     |
| **filter_next_year*-           | next-year             | imx-icons     |
| **filter_not_empty*-           | not-empty             | imx-icons     |
| **filter_not_equal*-           | not-equal             | imx-icons     |
| **filter_not_null*-            | is-not-null           | imx-icons     |
| **filter_null*-                | is-null               | imx-icons     |
| **filter_starts_with*-         | starts-with           | imx-icons     |
| **filter_this_month*-          | this-month            | imx-icons     |
| **filter_this_year*-           | this-year             | imx-icons     |
| **filter_today*-               | today                 | imx-icons     |
| **filter_true*-                | is-true               | imx-icons     |
| **filter_yesterday*-           | yesterday             | imx-icons     |
| **first_page*-                 | first_page            | material      |
| **group_work*-                 | group_work            | material      |
| **hide*-                       | visibility_off        | material      |
| **import_export*-              | import_export         | material      |
| **input_collapse*-             | arrow_drop_up         | material      |
| **input_clear*-                | clear                 | material      |
| **input_expand*-               | arrow_drop_down       | material      |
| **jump_down*-                  | jump-down             | imx-icons     |
| **jump_up*-                    | jump-up               | imx-icons     |
| **last_page*-                  | last_page             | material      |
| **more_vert*-                  | more_vert             | material      |
| **next*-                       | navigate_next         | material      |
| **pin*-                        | pin-left              | imx-icons     |
| **prev*-                       | navigate_before       | material      |
| **refresh*-                    | refresh               | material      |
| **remove*-                     | cancel                | material      |
| **search*-                     | search                | material      |
| **selected*-                   | done                  | material      |
| **show*-                       | visibility            | material      |
| **sort_asc*-                   | arrow_upward          | material      |
| **sort_desc*-                  | arrow_downward        | material      |
| **functions*-                  | functions             | material      |
| **table_rows*-                 | table_rows            | material      |
| **today*-                      | calendar_today        | material      |
| **tree_collapse*-              | expand_more           | material      |
| **tree_expand*-                | chevron_right         | material      |
| **unfold_less*-                | unfold_less           | material      |
| **unfold_more*-                | unfold_more           | material      |
| **unpin*-                      | unpin-left            | imx-icons     |
| **view_column*-                | view_column           | material      |

Here's a breakdown of all icons as used by component:

## Grid

| Icon                 | Description                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| **add*-            | Used in excel-filter menu to add filter entry.                                |
| **arrow_back*-     | Used in various UI elements for moving a column backwards.                    |
| **arrow_drop_down*- | Used in various buttons to indicate togglable menus.                          |
| **arrow_forward*-  | Used in various UI elements for moving a column forwards.                     |
| **cancel*-         | Used in various UI elements for canceling operations.                         |
| **chevron_right*-  | Used to indicate expandable menus, like in the excel style filtering.         |
| **close*-          | Used to close an expanded menu.                                               |
| **confirm*-        | Used to confirm an operation.                                                 |
| **drag_indicator*- | Used to show a handle to indicate an item can be dragged.                     |
| **error*-          | Used in editable cells to indicate erroneous data input.                      |
| **expand_more*-    | Used by the excel filtering menu to indicate the addition of more filters.    |
| **file_download*-  | Used by the excel filter exporter.                                            |
| **filter\_*-        | Used for various filtering operands.                                          |
| **group_work*-     | Used by the group-by drop area.                                               |
| **hide*-           | Used by various UI elements for hiding columns.                               |
| **import_export*-  | Used by the pivot data selector for moving.                                   |
| **input_clear*-    | Used by input fields for clearing input data.                                 |
| **next*-           | Used by the filtering row menu to navigate between chips.                     |
| **pin*-            | Used by various UI elements for column pinning.                               |
| **prev*-           | Used by the filtering row menu to navigate between chips.                     |
| **remove*-         | Used by various UI elements as a removal indicator.                           |
| **refresh*-        | Used by the filtering row menu to reload the filters.                         |
| **selected*-       | Used by various UI elements to indicated active selection.                    |
| **show*-           | Used by various UI elements for showing columns.                              |
| **sort_asc*-       | Used by various UI elements to indicate sorting direction.                    |
| **sort_desc*-      | Used by various UI elements to indicate sorting direction.                    |
| **functions*-      | Used by the pivot grid and data selectors.                                    |
| **table_rows*-     | Used by the pivot grid data selector.                                         |
| **tree_collapse*-  | Used by tree-like structure to show less details.                             |
| **tree_expand*-    | Used by tree-like structure to show more details.                             |
| **unpin*-          | Used by various UI elements for column pinning.                               |
| **unfold_less*-    | Used by the hierarchical grid to collapse all rows.                           |
| **unfold_more*-    | Used by the hierarchical grid to expand all rows.                             |
| **view_column*-    | Used by the pivot data selector.                                              |

## Paginator

| Icon           | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| **first_page** | Used by the button used for navigating to the first page.   |
| **last_page*- | Used by the button used for navigating to the last page.    |
| **prev*-     | Used by the button used for navigating to the previous page. |
| **next*-     | Used by the button used for navigating to the next page.    |

## Action Strip

| Icon          | Description              |
| ------------- | ------------------------ |
| **add_child** | Used by the popup menu. |
| **add_row*- | Used by the popup menu. |
| **more_vert** | Used by the popup menu. |

## API References

- [`IgbGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGrid.html)

## Additional Resources

Our community is active and always welcoming to new ideas.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

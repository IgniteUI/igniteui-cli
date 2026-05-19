---
title: Blazor Map | Data Visualization Tools | Displaying Azure Imagery | Infragistics
_description: Use Infragistics' Blazor to display imagery from Microsoft Azure Maps. View Ignite UI for Blazor map tutorials!
_keywords: Blazor map, azure maps, Ignite UI for Blazor, Infragistics, imagery tile source, map background
_license: commercial
mentionedTypes: ["XamGeographicMap", "AzureMapsImagery", "GeographicTileSeries"]
_tocName: Displaying Azure Imagery
_premium: true
---

# Blazor Imagery from Azure Maps <label class="badge badge--preview">PREVIEW</label>

The Blazor [`IgbAzureMapsImagery`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAzureMapsImagery.html) is geographic imagery mapping service provided by Microsoft®. It provides several styles of geographic imagery tiles of the world. This geographic imagery service is accessible directly on the <a href="https://azure.microsoft.com/en-us/products/azure-maps" target="_blank">www.azure.microsoft.com</a> web site. The Ignite UI for Blazor map component can display geographic imagery from Azure Maps in the map’s background content using the [`IgbAzureMapsImagery`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAzureMapsImagery.html) class.

## Blazor Displaying Imagery from Azure Maps - Overview

<img src="../images/general/AzureMapsImagery.png" alt="AzureMapsImagery" />

<div class="divider--half"></div>

```razor
@using IgniteUI.Blazor.Controls
@inject NavigationManager NavManager

<style>
igc-dialog::part(content) {
    width: 500px;
}
</style>

<div class="map-controls" style="display:flex; justify-content:center; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
    <IgbButton @onclick="OnDialogShow" Variant=@ButtonVariant.Contained>
        Click to enter your Azure key
    </IgbButton>

    <IgbPropertyEditorPanel DescriptionType="CategoryChart"
                            IsHorizontal="true"
                            IsWrappingEnabled="false"
                            Name="editor"
                            @ref="editor">
    </IgbPropertyEditorPanel>
</div>

<div class="container horizontal">
    <IgbDialog @ref="DialogRef" Title="Azure Maps" Closed="OnClosed">
        <form id="form" method="dialog">
            <IgbInput Label="An image will remain visible when no key is entered." @bind-value="AzureKey">
            </IgbInput>
        </form>
    </IgbDialog>

    @if (ShowImage)
    {
        <img src="@CurrentImage" alt="Map Imagery"
             style="width:100%; height:100%; object-fit:contain;" />
    }
    else
    {
        <IgbGeographicMap @ref="AzureMap"
                          Height="100%" Width="100%"
                          Zoomable="true"
                          BackgroundContent="@AzureImagery">
            <IgbGeographicTileSeries @ref="ImagerySeries" />
        </IgbGeographicMap>
    }
</div>

@code {
    private IgbAzureMapsImagery AzureImagery { get; set; }
    private IgbGeographicMap AzureMap;
    private IgbGeographicTileSeries ImagerySeries;
    public IgbDialog DialogRef;
    private IgbPropertyEditorPanel editor;
    private IgbPropertyEditorPropertyDescription azureImageryDropDown;

    private string CurrentImage = "https://dl.infragistics.com/x/img/maps/azure_satellite.png";
    private bool ShowImage = true;
    private string AzureKey;
    private bool _imageryAppliedAfterDialog = false;
    private string _selectedStyle = "Satellite";

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await base.OnAfterRenderAsync(firstRender);

        if (firstRender && editor != null)
        {
            editor.Target = AzureMap;

            azureImageryDropDown = new IgbPropertyEditorPropertyDescription
            {
                ValueType = PropertyEditorValueType.EnumValue,
                ShouldOverrideDefaultEditor = true,
                DropDownNames = _placeholderImages.Keys.ToArray(),
                DropDownValues = _placeholderImages.Keys.ToArray(),
                PrimitiveValue = _selectedStyle
            };

            editor.Properties.Add(azureImageryDropDown);
            azureImageryDropDown.Changed += EditorChangeAzureImagery;

            // Ensure the dialog is rendered before showing
            await InvokeAsync(async () =>
            {
                await Task.Delay(1000); // allow Blazor to complete rendering
                if (DialogRef != null)
                {
                    await DialogRef.ShowAsync();
                }
            });
        }

        if (!ShowImage && AzureMap != null && !_imageryAppliedAfterDialog)
        {
            await ApplyAzureImagery(_selectedStyle);
            _imageryAppliedAfterDialog = true;
        }
    }


    public async Task OnDialogShow()
    {
        if (DialogRef != null)
        {
            await DialogRef.ShowAsync();
        }
    }

    public IgbAzureMapsImagery CreateImagery(AzureMapsImageryStyle style)
    {
        var imagery = new IgbAzureMapsImagery
        {
            ApiKey = AzureKey,
            ImageryStyle = style
        };

        ImagerySeries.TileImagery = imagery;
        return imagery;
    }

    public void OnClosed(IgbVoidEventArgs e)
    {
        if (string.IsNullOrWhiteSpace(AzureKey))
        {
            ShowImage = true;
        }
        else
        {
            ShowImage = false;
            _imageryAppliedAfterDialog = false;
        }

        StateHasChanged();
    }

    public async void EditorChangeAzureImagery(IgbPropertyEditorPropertyDescriptionChangedEventArgs args)
    {
        _selectedStyle = args.NewValue as string;
        await ApplyAzureImagery(_selectedStyle);
    }

    private async Task ApplyAzureImagery(string styleName)
    {
        if (_placeholderImages.TryGetValue(styleName, out var image))
        {
            CurrentImage = image;
        }

        if (!string.IsNullOrWhiteSpace(AzureKey) && AzureMap != null)
        {
            var style = styleName switch
            {
                "Satellite" => AzureMapsImageryStyle.Satellite,
                "Road" => AzureMapsImageryStyle.Road,
                "DarkGrey" => AzureMapsImageryStyle.DarkGrey,
                "TerraOverlay" => AzureMapsImageryStyle.TerraOverlay,
                "HybridRoadOverlay" => AzureMapsImageryStyle.HybridRoadOverlay,
                "HybridDarkGreyOverlay" => AzureMapsImageryStyle.HybridDarkGreyOverlay,
                "LabelsRoadOverlay" => AzureMapsImageryStyle.LabelsRoadOverlay,
                "LabelsDarkGreyOverlay" => AzureMapsImageryStyle.LabelsDarkGreyOverlay,
                "TrafficDelayOverlay" => AzureMapsImageryStyle.TrafficDelayOverlay,
                "TrafficAbsoluteOverlay" => AzureMapsImageryStyle.TrafficAbsoluteOverlay,
                "TrafficReducedOverlay" => AzureMapsImageryStyle.TrafficReducedOverlay,
                "TrafficRelativeDarkOverlay" => AzureMapsImageryStyle.TrafficRelativeDarkOverlay,
                "TrafficRelativeOverlay" => AzureMapsImageryStyle.TrafficRelativeOverlay,
                "WeatherInfraredOverlay" => AzureMapsImageryStyle.WeatherInfraredOverlay,
                "WeatherRadarOverlay" => AzureMapsImageryStyle.WeatherRadarOverlay,
                _ => AzureMapsImageryStyle.Satellite
            };

            // Create the main tile imagery
            var overlay = CreateImagery(style);

            // Background handling
            if (styleName.StartsWith("Traffic") || styleName.StartsWith("Weather"))
            {
                AzureImagery = new IgbAzureMapsImagery
                {
                    ApiKey = AzureKey,
                    ImageryStyle = AzureMapsImageryStyle.DarkGrey
                };
            }
            else if (style is AzureMapsImageryStyle.Satellite or AzureMapsImageryStyle.Road or AzureMapsImageryStyle.DarkGrey)
            {
                AzureImagery = null; // no background
            }
            else
            {
                AzureImagery = new IgbAzureMapsImagery
                {
                    ApiKey = AzureKey,
                    ImageryStyle = AzureMapsImageryStyle.Satellite
                };
            }

            // wait a tiny bit to let JS interop initialize
            await Task.Delay(1);

            // Wait until map component is ready
            await InvokeAsync(() =>
            {
                AzureMap.BackgroundContent = AzureImagery;

                // Zoom rules
                Rect rect = styleName.StartsWith("Traffic")
                    ? new Rect(-74.05, 40.70, new Size(0.2, 0.2)) // NYC
                    : new Rect(-124.77, 24.52, new Size(124.77 - 66.95, 49.38 - 24.52)); // US

                AzureMap.ZoomToGeographic(rect);
                return AzureMap.FlushAsync();
            });
        }

        StateHasChanged();
    }


    private readonly Dictionary<string, string> _placeholderImages = new()
    {
        { "Satellite", "https://dl.infragistics.com/x/img/maps/azure_satellite.png" },
        { "Road", "https://dl.infragistics.com/x/img/maps/azure_road.png" },
        { "DarkGrey", "https://dl.infragistics.com/x/img/maps/azure_darkgrey.png" },
        { "TerraOverlay", "https://dl.infragistics.com/x/img/maps/azure_terra_overlay.png" },
        { "HybridRoadOverlay", "https://dl.infragistics.com/x/img/maps/AzureHybridRoad.png" },
        { "HybridDarkGreyOverlay", "https://dl.infragistics.com/x/img/maps/AzureHybridDarkGrey.png" },
        { "LabelsRoadOverlay", "https://dl.infragistics.com/x/img/maps/azure_labelsroad.png" },
        { "LabelsDarkGreyOverlay", "https://dl.infragistics.com/x/img/maps/azure_labelsdarkgrey.png" },
        { "TrafficDelayOverlay", "https://dl.infragistics.com/x/img/maps/azure_trafficdelay.png" },
        { "TrafficAbsoluteOverlay", "https://dl.infragistics.com/x/img/maps/azure_traffic_absolute.png" },
        { "TrafficReducedOverlay", "https://dl.infragistics.com/x/img/maps/azure_traffic_light.png" },
        { "TrafficRelativeOverlay", "https://dl.infragistics.com/x/img/maps/azure_traffic_relative.png" },
        { "TrafficRelativeDarkOverlay", "https://dl.infragistics.com/x/img/maps/azure_traffic_relative_dark.png" },
        { "WeatherInfraredOverlay", "https://dl.infragistics.com/x/img/maps/azure_weather_Infrared_road.png" },
        { "WeatherRadarOverlay", "https://dl.infragistics.com/x/img/maps/azure_weather_radar.png" }
    };
}
```

## Blazor Displaying Imagery from Azure Maps - Code Example

The following code snippet shows how to display geographic imagery tiles from Azure Maps in Blazor [`IgbGeographicMap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html) using [`IgbAzureMapsImagery`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAzureMapsImagery.html) class.

```razor
@using IgniteUI.Blazor.Controls

<IgbGeographicMap @ref="AzureMap"
    Height="100%" Width="100%"
    Zoomable="true"
    BackgroundContent="@AzureImagery">
</IgbGeographicMap>

@code {

    private IgbGeographicMap AzureMap;
    private IgbAzureMapsImagery AzureImagery { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await base.OnAfterRenderAsync(firstRender);

        //Update Map Background
        AzureImagery = new IgbAzureMapsImagery
        {
            ApiKey = AzureKey,
            ImageryStyle = AzureMapsImageryStyle.Satellite
        };
    }
}
```

## Blazor Overlaying Imagery from Azure Maps - Overview

When working with the [`IgbGeographicTileSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicTileSeries.html), you can combine **overlays** (traffic, weather, labels) on top of a **base map style** such as eg. **Satellite**, **Road**, or **DarkGrey**. Using **TerraOverlay** with eg. **Satellite** to visualize terrain.

- **Base Styles**: Satellite, Road, Terra, and DarkGrey provide the core background tiles.
- **Overlay Styles**: Traffic and Weather imagery (e.g., `TrafficRelativeOverlay`, `WeatherRadarOverlay`) are designed to be layered on top of a base style by assigning them to a tile series.
- **Hybrid Styles**: Variants like `HybridRoadOverlay` and `HybridDarkGreyOverlay` already combine a base style with overlays (labels, roads, etc.), so you don’t need to manage multiple layers manually.

This design allows you to build richer maps, for example:

- Displaying **Satellite imagery** with a **TrafficOverlay** to highlight congestion on real-world images.
- Using **Terra** with **WeatherRadarOverlay** to visualize terrain with precipitation.
- Applying **DarkGrey** with **LabelsRoadOverlay** for a dashboard-friendly, contrast-heavy view.

<img src="../images/general/Azure_Traffic_Tile_Series_With_Background.png" alt="Azure Traffic Tile Series With Background" />

<div class="divider--half"></div>

## Blazor Overlaying Imagery from Azure Maps - Code Example

The following code snippet shows how to display geographic imagery tiles on top of a background imagery joining eg. traffic with a dark grey map for the Blazor [`IgbGeographicMap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html) using [`IgbAzureMapsImagery`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAzureMapsImagery.html) and [`IgbGeographicTileSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicTileSeries.html) classes.

```razor
@using IgniteUI.Blazor.Controls

<IgbGeographicMap @ref="AzureMap"
                          Height="100%" Width="100%"
                          Zoomable="true"
                          BackgroundContent="@AzureImagery">
        <IgbGeographicTileSeries @ref="ImagerySeries" />
</IgbGeographicMap>

@code {

    private IgbGeographicMap AzureMap;
    private IgbAzureMapsImagery AzureImagery { get; set; }
    private IgbGeographicTileSeries ImagerySeries;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await base.OnAfterRenderAsync(firstRender);

        //Update TileSeries
        var imagery = new IgbAzureMapsImagery
        {
            ApiKey = AzureKey,
            ImageryStyle = AzureMapsImageryStyle.TrafficAbsoluteOverlay
        };

        ImagerySeries.TileImagery = imagery;

        //Update Map Background
        AzureImagery = new IgbAzureMapsImagery
        {
            ApiKey = AzureKey,
            ImageryStyle = AzureMapsImageryStyle.DarkGrey
        };
    }
}
```

## Properties

The following table summarizes properties of the [`IgbAzureMapsImagery`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAzureMapsImagery.html) class:

| Property Name  | Property Type   | Description   |
|----------------|-----------------|---------------|
|[`ApiKey`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAzureMapsImagery.html#IgniteUI_Blazor_Controls_IgbAzureMapsImagery_ApiKey)|string|Represents the property for setting an API key required for the Azure Maps imagery service. You must obtain this key from the <a href="https://azure.microsoft.com/en-us/products/azure-maps" target="_blank">azure.microsoft.com</a> website.|
|[`ImageryStyle`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAzureMapsImagery.html#IgniteUI_Blazor_Controls_IgbAzureMapsImagery_ImageryStyle)|`AzureMapsImageryStyle`|Represents the property for setting the Azure Maps imagery tiles map style. This property can be set to the following `AzureMapsImageryStyle` enumeration values:<ul><li>Satellite - Specifies the Satellite map style without road or labels overlay</li><li>Road - Specifies the Aerial map style with road and labels overlay</li><li>DarkGrey - Specifies a dark grey basemap style for contrast and highlighting overlays</li><li>TerraOverlay - Specifies a terrain map style with shaded relief to highlight elevation and landscape features</li><li>LabelsRoadOverlay - One of several overlays of city labels without an aerial overlay</li><li>HybridRoadOverlay - Satellite background combined with road and label overlays</li><li>HybridDarkGreyOverlay - Satellite background combined with dark grey label overlays</li><li>LabelsDarkGreyOverlay - One of several overlays of city labels over a dark grey basemap</li><li>TrafficDelayOverlay - Displays traffic delays and congestion areas in real time</li><li>TrafficAbsoluteOverlay - Displays current traffic speeds as absolute values</li><li>TrafficReducedOverlay - Displays reduced traffic flow with light-based visualization</li><li>TrafficRelativeOverlay - Displays traffic speeds relative to normal conditions</li><li>TrafficRelativeDarkOverlay - Displays traffic speeds relative to normal conditions over a dark basemap for enhanced contrast</li><li>WeatherRadarOverlay - Displays near real-time radar imagery of precipitation</li><li>WeatherInfraredOverlay - Displays infrared satellite imagery of cloud cover</li></ul> |

## API References

- `AzureMapsImageryStyle`
- [`IgbAzureMapsImagery`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbAzureMapsImagery.html)
- [`IgbGeographicMap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html)

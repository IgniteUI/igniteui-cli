---
title: Blazor Map | Data Visualization Tools | Binding Geographic Data Models | Infragistics
_description: Use Infragistics' Blazor JavaScript map to display geo-spatial data from shape files and/or geographic locations from data models on geographic imagery maps. View Ignite UI for Blazor map demos!
_keywords: Blazor map, binding data models, Ignite UI for Blazor, Infragistics, data binding
_license: commercial
mentionedTypes: ["XamGeographicMap", "GeographicScatterAreaSeries", "GeographicHighDensityScatterSeries", "GeographicProportionalSymbolSeries", "GeographicScatterAreaSeries", "GeographicContourLineSeries", "GeographicShapeSeries", "GeographicPolylineSeries", "Series", "GeographicShapeSeriesBase"]
namespace: Infragistics.Controls.Maps
_tocName: Binding Data Model
_premium: true
---

# Blazor Binding Geographic Data Models

The Ignite UI for Blazor map component is designed to display geo-spatial data from shape files and/or geographic locations from data models on geographic imagery maps. The [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource) property of geographic series is used for the purpose of binding to data models. This property can be bound an array of custom objects.

## Blazor Binding Geographic Data Models Example

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="container vertical">
        <IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
            @for (int i = 0; i < this.Data.Count; i++)
            {
                FlightInfo info = this.Data[i];
                List<WorldCity> symbolData = new List<WorldCity>() { info.Origin, info.Dest };

                GeoLocation geoOrigin = new GeoLocation() { Lat = info.Origin.Lat, Lon = info.Origin.Lon };
                GeoLocation geoDest = new GeoLocation() { Lat = info.Dest.Lat, Lon = info.Dest.Lon };

                List<List<Point>> geoPath = WorldUtils.CalcPaths(geoOrigin, geoDest);
                double geoDistance = WorldUtils.CalcDistance(geoOrigin, geoDest);

                FlightInfo route = new FlightInfo()
                {
                    Points =  geoPath,
                    Origin = info.Origin,
                    Dest = info.Dest,
                    Distance = geoDistance,
                    Time = geoDistance / 850
                };

                List<FlightInfo> geoRoute = new List<FlightInfo>() { route };

                <IgbGeographicSymbolSeries DataSource="symbolData" MarkerType="MarkerType.Circle"
                                        LatitudeMemberPath="Lat" LongitudeMemberPath="Lon"
                                        MarkerBrush="White" MarkerOutline="@info.Color"
                                        Thickness="1">
                </IgbGeographicSymbolSeries>

                <IgbGeographicPolylineSeries DataSource="geoRoute" ShapeMemberPath="Points"
                                          ShapeStrokeThickness="9" ShapeOpacity="0.5"
                                          ShapeStroke="@info.Color">
                </IgbGeographicPolylineSeries>
            }

        </IgbGeographicMap>
    </div>
</div>

@code {

    private List<FlightInfo> Data;

    protected override void OnInitialized()
    {
        WorldCity cityDAL = new WorldCity() { Lat = 32.763, Lon = -96.663, Country = "US", Name = "Dallas" };
        WorldCity citySYD = new WorldCity() { Lat = -33.889, Lon = 151.028, Country = "Australia", Name = "Sydney" };
        WorldCity cityNZL = new WorldCity() { Lat = -36.848, Lon = 174.763, Country = "New Zealand", Name = "Auckland" };
        WorldCity cityQTR = new WorldCity() { Lat = 25.285, Lon = 51.531, Country = "Qatar", Name = "Doha" };
        WorldCity cityPAN = new WorldCity() { Lat = 8.949, Lon = -79.400, Country = "Panama", Name = "Panama" };
        WorldCity cityCHL = new WorldCity() { Lat = -33.475, Lon = -70.647, Country = "Chile", Name = "Santiago" };
        WorldCity cityJAP = new WorldCity() { Lat = 35.683, Lon = 139.809, Country = "Japan", Name = "Tokyo" };
        WorldCity cityALT = new WorldCity() { Lat = 33.795, Lon = -84.349, Country = "US", Name = "Atlanta" };
        WorldCity cityJOH = new WorldCity() { Lat = -26.178, Lon = 28.004, Country = "South Africa", Name = "Johannesburg" };
        WorldCity cityNYC = new WorldCity() { Lat = 40.750, Lon = -74.0999, Country = "US", Name = "New York" };
        WorldCity citySNG = new WorldCity() { Lat = 1.229, Lon = 104.177, Country = "Singapore", Name = "Singapore" };
        WorldCity cityMOS = new WorldCity() { Lat = 55.750, Lon = 37.700, Country = "Russia", Name = "Moscow" };
        WorldCity cityROM = new WorldCity() { Lat = 41.880, Lon = 12.520, Country = "Italy", Name = "Roma" };
        WorldCity cityLAX = new WorldCity() { Lat = 34.000, Lon = -118.25, Country = "US", Name = "Los Angeles" };

        this.Data = new List<FlightInfo>() {
            new FlightInfo(){ Origin = cityDAL, Dest = citySNG, Color = "Green" },
            new FlightInfo(){ Origin = cityMOS, Dest = cityNZL, Color = "Red" },
            new FlightInfo(){ Origin = cityCHL, Dest = cityJAP, Color = "Blue" },
            new FlightInfo(){ Origin = cityPAN, Dest = cityROM, Color = "Orange" },
            new FlightInfo(){ Origin = cityALT, Dest = cityJOH, Color = "Black" },
            new FlightInfo(){ Origin = cityNYC, Dest = cityQTR, Color = "Purple" },
            new FlightInfo(){ Origin = cityLAX, Dest = citySYD, Color = "Gray" },
        };
    }
}
```


<div class="divider--half"></div>

The following table summarized data structures required for each type of geographic series:

| Geographic Series  | Properties   | Description   |
|--------------|---------------| ---------------|
| [`IgbGeographicSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html) | [`LongitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicSymbolSeries_LongitudeMemberPath), [`LatitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicSymbolSeries_LatitudeMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates |
| [`IgbGeographicHighDensityScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html) | [`LongitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html#IgniteUI_Blazor_Controls_IgbGeographicHighDensityScatterSeries_LongitudeMemberPath), [`LatitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html#IgniteUI_Blazor_Controls_IgbGeographicHighDensityScatterSeries_LatitudeMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates |
| [`IgbGeographicProportionalSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicProportionalSymbolSeries.html) | [`LongitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicProportionalSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicProportionalSymbolSeries_LongitudeMemberPath), [`LatitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicProportionalSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicProportionalSymbolSeries_LatitudeMemberPath), [`RadiusMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicProportionalSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicProportionalSymbolSeries_RadiusMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for size/radius of symbols |
| [`IgbGeographicScatterAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicScatterAreaSeries.html) | [`LongitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicXYTriangulatingSeries.html#IgniteUI_Blazor_Controls_IgbGeographicXYTriangulatingSeries_LongitudeMemberPath), [`LatitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicXYTriangulatingSeries.html#IgniteUI_Blazor_Controls_IgbGeographicXYTriangulatingSeries_LatitudeMemberPath), [`ColorMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicScatterAreaSeries.html#IgniteUI_Blazor_Controls_IgbGeographicScatterAreaSeries_ColorMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for triangulation of values |
| [`IgbGeographicContourLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html) | [`LongitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicXYTriangulatingSeries.html#IgniteUI_Blazor_Controls_IgbGeographicXYTriangulatingSeries_LongitudeMemberPath), [`LatitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicXYTriangulatingSeries.html#IgniteUI_Blazor_Controls_IgbGeographicXYTriangulatingSeries_LatitudeMemberPath), [`ValueMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html#IgniteUI_Blazor_Controls_IgbGeographicContourLineSeries_ValueMemberPath)   | Specifies names of 2 numeric longitude and latitude coordinates and 1 numeric column for triangulation of values |
|[`IgbGeographicShapeSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicShapeSeries.html)|[`ShapeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicShapeSeriesBase.html#IgniteUI_Blazor_Controls_IgbGeographicShapeSeriesBase_ShapeMemberPath)|Specifies the name of data column of [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource) items that contains the geographic points of shapes. This property must be mapped to an array of arrays of objects with x and y properties. |
|[`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html)|[`ShapeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicShapeSeriesBase.html#IgniteUI_Blazor_Controls_IgbGeographicShapeSeriesBase_ShapeMemberPath)|Specifies the name of data column of [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource) items that contains the geographic coordinates of lines. This property must be mapped to an array of arrays of objects with x and y properties. |

## Code Snippet

The following code shows how to bind the [`IgbGeographicSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html) to a custom data model that contains geographic locations of some cities of the world stored using longitude and latitude coordinates. Also, we use the [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html) to plot shortest geographic path between these locations using the [WorldUtility](geo-map-resources-world-util.md)

```razor
@using IgniteUI.Blazor.Controls


<IgbGeographicMap Height="100%" Width="100%" Zoomable="true">
    @for (int i = 0; i < this.DataSource.Count; i++)
    {
        FlightInfo info = this.DataSource[i];
        List<WorldCity> symbolData = new List<WorldCity>() { info.Origin, info.Dest };

        GeoLocation geoOrigin = new GeoLocation() { Lat = info.Origin.Lat, Lon = info.Origin.Lon };
        GeoLocation geoDest = new GeoLocation() { Lat = info.Dest.Lat, Lon = info.Dest.Lon };

        List<List<Point>> geoPath = WorldUtils.CalcPaths(geoOrigin, geoDest);
        double geoDistance = WorldUtils.CalcDistance(geoOrigin, geoDest);

        FlightInfo route = new FlightInfo()
        {
            Points =  geoPath,
            Origin = info.Origin,
            Dest = info.Dest,
            Distance = geoDistance,
            Time = geoDistance / 850
        };

        List<FlightInfo> geoRoute = new List<FlightInfo>() { route };

        <IgbGeographicSymbolSeries DataSource="@symbolData" MarkerType="MarkerType.Circle"
                                LatitudeMemberPath="Lat" LongitudeMemberPath="Lon"
                                MarkerBrush="White" MarkerOutline="@info.Color"
                                Thickness="1">
        </IgbGeographicSymbolSeries>
        <IgbGeographicPolylineSeries DataSource="@geoRoute" ShapeMemberPath="Points"
                                  ShapeStrokeThickness="9" ShapeOpacity="0.5"
                                  ShapeStroke="@info.Color">
        </IgbGeographicPolylineSeries>
    }
</IgbGeographicMap>

@code {

    private List<FlightInfo> DataSource;

    protected override void OnInitialized()
    {
        WorldCity cityDAL = new WorldCity() { Lat = 32.763, Lon = -96.663, Country = "US", Name = "Dallas" };
        WorldCity citySYD = new WorldCity() { Lat = -33.889, Lon = 151.028, Country = "Australia", Name = "Sydney" };
        WorldCity cityNZL = new WorldCity() { Lat = -36.848, Lon = 174.763, Country = "New Zealand", Name = "Auckland" };
        WorldCity cityQTR = new WorldCity() { Lat = 25.285, Lon = 51.531, Country = "Qatar", Name = "Doha" };
        WorldCity cityPAN = new WorldCity() { Lat = 8.949, Lon = -79.400, Country = "Panama", Name = "Panama" };
        WorldCity cityCHL = new WorldCity() { Lat = -33.475, Lon = -70.647, Country = "Chile", Name = "Santiago" };
        WorldCity cityJAP = new WorldCity() { Lat = 35.683, Lon = 139.809, Country = "Japan", Name = "Tokyo" };
        WorldCity cityALT = new WorldCity() { Lat = 33.795, Lon = -84.349, Country = "US", Name = "Atlanta" };
        WorldCity cityJOH = new WorldCity() { Lat = -26.178, Lon = 28.004, Country = "South Africa", Name = "Johannesburg" };
        WorldCity cityNYC = new WorldCity() { Lat = 40.750, Lon = -74.0999, Country = "US", Name = "New York" };
        WorldCity citySNG = new WorldCity() { Lat = 1.229, Lon = 104.177, Country = "Singapore", Name = "Singapore" };
        WorldCity cityMOS = new WorldCity() { Lat = 55.750, Lon = 37.700, Country = "Russia", Name = "Moscow" };
        WorldCity cityROM = new WorldCity() { Lat = 41.880, Lon = 12.520, Country = "Italy", Name = "Roma" };
        WorldCity cityLAX = new WorldCity() { Lat = 34.000, Lon = -118.25, Country = "US", Name = "Los Angeles" };

        this.DataSource = new List<FlightInfo>() {
            new FlightInfo() { Origin = cityDAL, Dest = citySNG, Color = "Green" },
            new FlightInfo() { Origin = cityMOS, Dest = cityNZL, Color = "Red" },
            new FlightInfo() { Origin = cityCHL, Dest = cityJAP, Color = "Blue" },
            new FlightInfo() { Origin = cityPAN, Dest = cityROM, Color = "Orange" },
            new FlightInfo() { Origin = cityALT, Dest = cityJOH, Color = "Black" },
            new FlightInfo() { Origin = cityNYC, Dest = cityQTR, Color = "Purple" },
            new FlightInfo() { Origin = cityLAX, Dest = citySYD, Color = "Gray" },
        };
    }

    public class WorldCity
    {
        public string Name { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
        public double Pop { get; set; }
        public string Country { get; set; }
        public bool Cap { get; set; }
    }

    public class FlightInfo
    {
        public string ID { get; set; }
        public WorldCity Origin { get; set; }
        public WorldCity Dest { get; set; }
        public double Time { get; set; }
        public double Passengers { get; set; }
        public double Distance { get; set; }
        public List<List<Point>> Points { get; set; }
        public string Color { get; set; }
    }
}
```

## API References

- [`ColorMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicScatterAreaSeries.html#IgniteUI_Blazor_Controls_IgbGeographicScatterAreaSeries_ColorMemberPath)
- [`IgbGeographicContourLineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html)
- [`IgbGeographicHighDensityScatterSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicHighDensityScatterSeries.html)
- [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html)
- [`IgbGeographicProportionalSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicProportionalSymbolSeries.html)
- [`IgbGeographicScatterAreaSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicScatterAreaSeries.html)
- [`IgbGeographicSymbolSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html)
- [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource)
- [`LatitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicSymbolSeries_LatitudeMemberPath)
- [`LongitudeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicSymbolSeries_LongitudeMemberPath)
- [`RadiusMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicProportionalSymbolSeries.html#IgniteUI_Blazor_Controls_IgbGeographicProportionalSymbolSeries_RadiusMemberPath)
- [`ValueMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicContourLineSeries.html#IgniteUI_Blazor_Controls_IgbGeographicContourLineSeries_ValueMemberPath)

---
title: "Blazor Map | Data Visualization Tools | Geographic Imagery | Infragistics"
description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
keywords: "Blazor map, Geographic Imagery, tiles, Ignite UI for Blazor, Infragistics"
license: commercial
mentionedTypes: ["GeographicMap"]
llms:
  description: "Blazor Geographic imagery is a detailed representation of the world from a top view perspective."
platformType: xplat
_tocName: Geographic Imagery
_premium: true
---
# Blazor Geographic Imagery

Blazor Geographic imagery is a detailed representation of the world from a top view perspective. It can consist of an aerial-satellite map or road maps in a multi-scale imagery tiles structure. The geographic map component can display geographic imagery in order to provide end-users with rich and interactive world maps and geographic context for geo-spatial data.

## Types of geographic imagery
The map component can display geographic imagery tiles from three supported mapping services or from other mapping services that can be easily implemented in an application.

The following table summarizes supported and custom geographic imagery sources for the map component.

| Imagery                    | Description   |
|----------------------------| --------------|
| Open Street Maps | Provides geographic imagery from Open Street Maps service with an option to display a road map style only in one coloring theme. |
| Bing Maps |Provides geographic imagery from Bing Maps service with configurable options to display the following map styles:<ul><li> Satellite Map Style</li><li> Satellite Map with Labels Style</li><li> Road Map Style</li></ul>|

## Map Background Content
The map component's [`BackgroundContent`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=BackgroundContent) property is used to display all supported types of geographic imagery sources. For each imagery source, there is an imagery class used for rendering corresponding geographic imagery tiles.

The following table summarizes imagery classes provided by the map component.

| Imagery Class | Description   |
|---------------|---------------|
|[`IgbGeographicMapImagery`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMapImagery)|Represents the base control for all imagery classes that display all types of supported geographic imagery tiles. This class can be extended for the purpose of implementing support for geographic imagery tiles from other geographic imagery sources such as Map Quest mapping service.|
|[`IgbOpenStreetMapImagery`](mcp:get_api_reference?platform=blazor&component=IgbOpenStreetMapImagery)|Represents the multi-scale imagery control for displaying geographic imagery tiles from the Open Street Maps service.|

By default, the [`BackgroundContent`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=BackgroundContent) property is set to [`IgbOpenStreetMapImagery`](mcp:get_api_reference?platform=blazor&component=IgbOpenStreetMapImagery) object and the map component displays geographic imagery tiles from the Open Street Maps service. In order to display different types of geographic imagery tiles, the map component must be re-configured.

In addition, the [`BackgroundContent`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=BackgroundContent) property can be set to any object that inherits the class. However, only objects that inherit the [`IgbGeographicMapImagery`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMapImagery) class will allow panning and zooming of the map background content.

In the map component, map background content is always rendered behind all geographic series. In other words, geographic imagery tiles are always rendered first and any geographic series in the map component's Series property is rendered on top of the geographic imagery tiles. This is especially important when displaying multiple geographic series in the same plot area of the map component because geographic imagery tiles can quickly get buried in the map view.

## Code Snippet

This code example explicitly sets [`BackgroundContent`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=BackgroundContent) of the map component to the [`IgbOpenStreetMapImagery`](mcp:get_api_reference?platform=blazor&component=IgbOpenStreetMapImagery) object which provides geographic imagery tile from the Open Street Maps.

```html
 TODO - ADD CODE SNIPPET
```

## API References

[`BackgroundContent`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMap&member=BackgroundContent)<br />
[`IgbGeographicMapImagery`](mcp:get_api_reference?platform=blazor&component=IgbGeographicMapImagery)<br />
[`IgbOpenStreetMapImagery`](mcp:get_api_reference?platform=blazor&component=IgbOpenStreetMapImagery)<br />

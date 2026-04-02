---
title: Blazor Map | Data Visualization Tools | Shape Files Reference | Shape Files Editing | Infragistics
_description: Learn about shape files format to use with Infragistics' Blazor map. Check out Ignite UI for Blazor map tutorials!
_keywords: Blazor map, shape files, Ignite UI for Blazor, Infragistics, shape editing
_license: commercial
mentionedTypes: ["XamGeographicMap", "GeographicShapeSeriesBase", "Series"]
_tocName: Shape Files Reference
_premium: true
---

# Blazor Shape Files Reference

## Purpose

This topic provides resources about maps and geo-spatial related material as well as information about shape files. Use these resources to learn about and obtain shape files as well as tools for their editing before starting to bind geo-spatial data to the Ignite UI for Blazor map component™ control.

## Resources

## Geo-spatial Overview

Before plotting geo-spatial data in the control, one should get familiar with the following resources which provide general information about maps and geo-spatial data.

- [Wikipedia – Cartography](http://en.wikipedia.org/wiki/Cartography)

- [National Atlas of the United States – Geographic Locations](http://nationalatlas.gov/articles/mapping/a_latlong.html)

- [National Atlas of the United States – Map Projections](http://nationalatlas.gov/articles/mapping/a_projections.html)

- [U.S. Geological Survey](http://www.usgs.gov/)

- [Wikipedia – Map Projections](http://en.wikipedia.org/wiki/Map_projection)

- [University of Colorado – Map Projections](http://www.colorado.edu/geography/gcraft/notes/mapproj/mapproj_f.html)

- [CSISS – Map Projections](http://www.csiss.org/map-projections/index.html)

## Shape Files Format

The Blazor [`IgbGeographicMap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html) control uses popular [Shape Files](http://en.wikipedia.org/wiki/Shapefile#Overview) format as one of the sources for geo-spatial data. Shape files are usually shipped with other file types, generally files with  **.shp**, **.shx**, and **.dbf** extensions.

The following table provides basic information and purpose for each type of shape files.

| File Extension | Description |
| ---------------|------------ |
| `.shp` | A shape file contains geo-spatial vector data items that describe points, polylines, and polygons. In this file, points may describe cities, polylines may describe roads, and polygons may describe shapes/borders of countries in geographic context. |
| `.shx` | A shape index file contains an index for a quick lookup of a geo-spatial vector data items. |
| `.dbf` | A shape database file contains a table in which a row corresponds to each geo-spatial data item from a shape (.shp) file. In the shape database file, string columns may describe attributes for geo-spatial data item such as strings (names of countries, regions, cities) and numeric columns (population of countries, location of cities). |

Refer to the following resources for detailed information and specifications on how geo-spatial data is stored in shape files.

- [ESRI - Shape File Technical Description](http://www.esri.com/library/whitepapers/pdfs/shapefile.pdf)

- [Wikipedia - Shape File Description](http://en.wikipedia.org/wiki/Shapefile#Overview)

## Shape File Tools

The following list provides resource tools for editing shape files.

- [MapWindow – Shape (.shp) and Database (.dbf) File Editor](http://www.mapwindow.org/)

- [Open Office – Database (.dbf) File Editor](http://openoffice.org/)

- [DBF Editor - Database (.dbf) File Editor](http://dbfeditor.com/)

- [DBF View - Database (.dbf) File Editor](http://dbfview.com/view-dbf-file.html)

- [Satellite Signals – Geo-spatial Calculator](http://www.satsig.net/degrees-minutes-seconds-calculator.htm)

- [RITA – NORTAD to Shape Files Converter](http://www.bts.gov/publications/north_american_transportation_atlas_data/html/data_converter.html)

## Shape Files Data Sources

The following list provides resources for obtaining shape files. Also, samples for the [`IgbGeographicMap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html) control are good source of shape files. These shape files are included in the installer for the Samples Browser.

- [ESRI - World Map Data](http://www.esri.com/data/download/basemap/index.html)
- [ESRI - Census 2010 Tiger/Line® - Shape Files](http://www.census.gov/geo/www/tiger/tgrshp2010/tgrshp2010.html)
- [National Atlas of the United States – Shape Files](http://www.nationalatlas.gov/atlasftp.html)
- [U.S. Census Bureau – Cartographic Boundary Files](http://www.census.gov/geo/www/cob/index.html)
- [U.S. Census Bureau - 2007 Tiger/Line® - Shape Files](http://www.census.gov/cgi-bin/geo/shapefiles/national-files)
- [U.S. Federal Executive Branch – Raw Data](https://explore.data.gov/catalog/raw/)
- [NOAA – Shape Files](http://www.nws.noaa.gov/geodata/)
- [CDC - Shape Files](http://wwwn.cdc.gov/epiinfo/script/shapefiles.aspx)
- [Massachusetts Geographic Information System](http://www.mass.gov/mgis/massgis.htm)
- [Geo Commons – Shape Files](http://geocommons.com/searches?query=shapefiles)
- [Geo Community – Shape Files](http://data.geocomm.com/catalog/)
- [RITA – NORTAD Files (Must-be converted to Shape Files)](http://www.bts.gov/publications/north_american_transportation_atlas_data/)
- [MapCruzin – Shape Files](http://www.mapcruzin.com/download-free-arcgis-shapefiles.htm)

## Additional Resources

The following topics provide additional information related to this topic.

- [Binding Shape Files](geo-map-binding-shp-file.md)

## API References

- [`IgbGeographicMap`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicMap.html)
- [`IgbGeographicPolylineSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicPolylineSeries.html)
- [`IgbGeographicShapeSeries`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicShapeSeries.html)
- [`DataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSeries.html#IgniteUI_Blazor_Controls_IgbSeries_DataSource)
- [`ShapeMemberPath`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbGeographicShapeSeriesBase.html#IgniteUI_Blazor_Controls_IgbGeographicShapeSeriesBase_ShapeMemberPath)
- [`IgbShapeDataSource`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbShapeDataSource.html)

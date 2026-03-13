---
title: Web Components Map | Data Visualization Tools | Map Navigation | Infragistics
_description: Navigate Infragistics' Web Components map by panning right and left and zooming horizontally and vertically using mouse or touch. Learn about Ignite UI for Web Components map's navigation capabilities!
_keywords: Web Components map, navigation, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["XamGeographicMap"]
_tocName: Navigating Map Content
_premium: true
---

# Web Components Navigating Map Content

Navigation in the [`IgcGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicmapcomponent.html) control is enabled by default and it allows zooming and panning of the map content. However, this behavior can be changed using the [`zoomable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicmapcomponent.html#zoomable) property. It is important to know that the map allows only synchronized zooming - scaling the map content with preserved aspect ratio. As result, it is not possible to scale the map content vertically without scaling it also horizontally and vice versa.

## Web Components Navigating Map Content Example

```typescript
import { IgcGeographicMapComponent } from 'igniteui-webcomponents-maps';

export enum MapRegion {
    Caribbean = "Caribbean",
    UnitedStates = "United States",
    UnitedKingdom = "United Kingdom",
    European = "European",
    SouthAfrica = "South Africa",
    Poland = "Poland",
    Australia = "Australia",
    Japan = "Japan",
    Uruguay = "Uruguay",
    Egypt = "Egypt",
    Hawaii = "Hawaii",
}

export class MapUtils {

    public static navigateTo(geoMap: IgcGeographicMapComponent, name: MapRegion): void {

        const geoRect = this.getRegions()[name];
        // console.log("MapUtils " + name) ;
        geoMap.zoomToGeographic(geoRect);
    }

    public static toPixel(num: number): string {
        const s = Math.abs(num).toFixed(0);
        return s + " px";
    }

    public static toLng(num: number): string {
        num = this.clamp(num, -180, 180);

        let s = Math.abs(num).toFixed(1);
        if (num < 100) {
            s = "  " + s
        }

        if (num > 0) {
            return s + "°E";
        } else  {
            return s + "°W";
        }
    }

    public static toLat(num: number): string {
        num = this.clamp(num, -90, 90);

        let s = Math.abs(num).toFixed(1);
        if (num < 100) {
            s = "  " + s
        }

        if (num > 0) {
            return s + "°N";
        } else  {
            return s + "°S";
        }
    }

    public static clamp(num: number, min: number, max: number): number {
        return Math.max(min, Math.min(max, num));
    }

    public static pad(num: number, places?: number): string {
        places = places || 20;
        let s = num.toFixed(1).toString();
        while (s.length < places) {s = " " + s};
        return s;
    }

    public static getBingKey(): string {
        return "Avlo7qsH1zZZI0XNpTwZ4XwvUJmCbd-mczMeUXVAW9kYYOKdmBIVRe8aoO02Xctq";
    }

    public static getRegions(): any {
        // create regions only once
        if (this.Regions === undefined) {
            this.createRegions();
        }
        return this.Regions;
    }

    private static Regions: any;

    private static addRegion(name: string, geoRect: any): void {
        geoRect.name = name;
        geoRect.longitude = geoRect.left + (geoRect.width / 2);
        geoRect.latitude = geoRect.top + (geoRect.height / 2);

        this.Regions[name] = geoRect;
    }

    private static createRegions(): void {
        this.Regions = {};
        this.addRegion(MapRegion.Australia, { left: 81.5, top: -52.0, width: 98.0, height: 56.0 });
        this.addRegion(MapRegion.Caribbean, { left: -92.9, top: 5.4, width: 35.1, height: 25.8 });
        this.addRegion(MapRegion.Egypt, { left: 19.3, top: 19.9, width: 19.3, height: 13.4 });
        this.addRegion(MapRegion.European, { left: -36.0, top: 31.0, width: 98.0, height: 38.0 });
        this.addRegion(MapRegion.Japan, { left: 122.7, top: 29.4, width: 27.5, height: 17.0 });
        this.addRegion(MapRegion.Hawaii, { left: -161.2, top: 18.5, width: 6.6, height: 4.8 });
        this.addRegion(MapRegion.Poland, { left: 13.0, top: 48.0, width: 11.0, height: 9.0 });
        this.addRegion(MapRegion.SouthAfrica, { left: 9.0, top: -37.1, width: 26.0, height: 17.8 });
        this.addRegion(MapRegion.UnitedStates, { left: -134.5, top: 16.0, width: 70.0, height: 37.0 });
        this.addRegion(MapRegion.UnitedKingdom, { left: -15.0, top: 49.5, width: 22.5, height: 8.0 });
        this.addRegion(MapRegion.Uruguay, { left: -62.1, top: -35.7, width: 10.6, height: 7.0 });
    }

}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Geographic Coordinates

You navigate map content within geographic region bound by these coordinates:

- horizontally from 180°E (negative) to 180°W (positive) longitudes
- vertically from 85°S (negative) to 85°N (positive) latitudes

This code snippet shows how navigate the map using geographic coordinates:

## Window Coordinates

Also, you can navigate map content within window rectangle bound by these relative coordinates:

- horizontally from 0.0 to 1.0 values
- vertically from 0.0 to 1.0 values

This code snippet shows how navigate the map using relative window coordinates:

## Properties

The following table summarizes properties that can be used in navigation of the [`IgcGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicmapcomponent.html) control:

| Property Name  | Property Type   | Description   |
|----------------|-----------------|---------------|
|[`windowRect`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#windowRect)| Rect | Sets new position and size of the navigation window in viewable area of the map content. Rect with 0, 0, 1, 1 values will zoom out the entire map content in the navigation window. |
|[`windowScale`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicmapcomponent.html#windowScale)| number | Sets new size of the navigation window in of the map control. It is equivalent smallest value of Width or Height stored in the [`windowRect`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#windowRect) property |
|[`windowPositionHorizontal`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#windowPositionHorizontal)| number | Sets new horizontal position of the navigation window’s anchor point from the left edge of the map control. It is equivalent to value stored in the Left of the [`windowRect`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#windowRect) property. |
|[`windowPositionVertical`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#windowPositionVertical)| number | Sets new vertical position of the navigation window’s anchor point from the top edge of the map control. It is equivalent to value stored in the Top of the [`windowRect`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#windowRect) property. |
|[`actualWindowRect`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#actualWindowRect)| Rect | Indicates current position and size of the navigation window in viewable area of the map content. Rect with 0, 0, 1, 1 values displays the entire map content in the navigation window. |
|[`actualWindowScale`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicmapcomponent.html#actualWindowScale)| number | Indicates current size of the navigation window in of the map control. It is equivalent to smallest value of Width or Height stored in the [`actualWindowRect`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#actualWindowRect) property |
|[`actualWindowPositionHorizontal`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#actualWindowPositionHorizontal)| number | Indicates current horizontal position of the navigation window’s anchor point from the left edge of the map control. It is equivalent to value stored in the Left of the [`actualWindowRect`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#actualWindowRect) property. |
|[`actualWindowPositionVertical`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#actualWindowPositionVertical)| number | Indicates vertical position of the navigation window’s anchor point from the top edge of the map control. It is equivalent to value stored in the Top of the [`actualWindowRect`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#actualWindowRect) property. |

## API References

- [`actualWindowRect`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#actualWindowRect)
- [`windowRect`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_charts.igcseriesviewercomponent.html#windowRect)
- [`IgcGeographicMapComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicmapcomponent.html)
- [`zoomable`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_maps.igcgeographicmapcomponent.html#zoomable)

---
title: Angular Tooltip Component | Ignite UI for Angular | MIT license
_description: The Ignite UI for Angular Tooltip and Tooltip Target directives feature the ability to create a tooltip and attach it to an element.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tooltip directives, Angular Tooltip controls, Angular Tooltip, tooltip, tooltip target
_license: MIT
_tocName: Tooltip
---

# Angular Tooltip Directive Overview

The [`igxTooltip`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltipdirective.html) and the [`igxTooltipTarget`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html) directives provide us with the ability to create a fully customizable tooltip and attach it to any element on our page.
While most tooltips have a limited number of available positions, with the [`igxTooltipTarget`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html) directive we can specify any position we want on the page while keeping it in relation to the target (anchor) and provide various other overlay settings like scroll strategies and custom animations!

## Angular Tooltip Example

```typescript
import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-tooltip-simple',
    styleUrls: ['./tooltip-simple.component.scss'],
    templateUrl: './tooltip-simple.component.html',
    imports: [IgxAvatarComponent, IgxTooltipTargetDirective, IgxTooltipDirective]
})
export class TooltipSimpleComponent { }
```
```html
<igx-avatar
    #target="tooltipTarget"
    [igxTooltipTarget]="tooltipRef"
    src="assets/images/avatar/10.jpg"
    size="medium"
    shape="circle">
</igx-avatar>

<div #tooltipRef="tooltip" igxTooltip>
    Her name is Madelyn James
</div>
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Tooltip

To get started with the Ignite UI for Angular Tooltip directive, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxTooltipModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxTooltipModule } from 'igniteui-angular/directives';
// import { IgxTooltipModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [IgxTooltipModule],
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxTooltipDirective` as a standalone dependency, or use the [`IGX_TOOLTIP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/directives/src/directives/tooltip/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_TOOLTIP_DIRECTIVES } from 'igniteui-angular/directives';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
// import { IGX_TOOLTIP_DIRECTIVES, IgxAvatarComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: `
    <igx-avatar
      class="avatar"
      #target="tooltipTarget"
      [igxTooltipTarget]="tooltipRef"
      src="assets/images/avatar/10.jpg"
      size="medium"
      shape="circle"
    >
    </igx-avatar>

    <div #tooltipRef="tooltip" igxTooltip>Her name is Madelyn James</div>
  `,
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IGX_TOOLTIP_DIRECTIVES, IgxAvatarComponent],
  /* or imports: [IgxTooltipDirective, IgxTooltipTargetDirective, IgxAvatarComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Tooltip module or directives imported, you can start using the `igxTooltip` directive.

## Using the Angular Tooltip

Let's say we want to create a simple text tooltip like the one above. In our case, we're using our awesome [`IgxAvatar`](avatar.md) as the element, so we start by importing the `IgxAvatarModule` first.

```typescript
// app.module.ts

import { IgxTooltipModule } from 'igniteui-angular/directives';
import { IgxAvatarModule } from 'igniteui-angular/avatar';
// import { IgxTooltipModule, IgxAvatarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [IgxTooltipModule, IgxAvatarModule],
})
export class AppModule {}
```

### Tooltip target

The avatar will be our target and all we have to do is set the [`igxTooltipTarget`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html) directive on it, which basically marks our element as one that has a tooltip.

- The [`igxTooltipTarget`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html) directive extends the [`igxToggleAction`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoggleactiondirective.html) directive.
- The [`igxTooltipTarget`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html) directive is exported with the name **tooltipTarget**.

```html
<!--simpleTooltip.component.html-->

<igx-avatar
  class="avatar"
  #target="tooltipTarget"
  igxTooltipTarget
  src="assets/images/avatar/10.jpg"
  size="medium"
  shape="circle">
</igx-avatar>
```

### Tooltip

Now let's create the tooltip element itself! Since we want a simple text tooltip, we will define an ordinary div element with text inside and set the [`igxTooltip`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltipdirective.html) directive on it, which marks it as a tooltip.

- The [`igxTooltip`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltipdirective.html) directive extends the [`igxToggle`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoggledirective.html) directive.
- The [`igxTooltip`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltipdirective.html) directive is exported with the name **tooltip**.

```html
<!--simpleTooltip.component.html-->

<div #tooltipRef="tooltip" igxTooltip>Her name is Madelyn James</div>
```

### Attach tooltip to target

Now that we have both our target and tooltip defined, all that's left for us to do is assign the tooltip's reference to the [`igxTooltipTarget`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html) selector of the target.

```html
<!--simpleTooltip.component.html-->

<igx-avatar
  class="avatar"
  #target="tooltipTarget"
  [igxTooltipTarget]="tooltipRef"
  src="assets/images/avatar/10.jpg"
  size="medium"
  shape="circle">
</igx-avatar>

<div #tooltipRef="tooltip" igxTooltip>Her name is Madelyn James</div>
```

If everything went well, you should see the sample shown in the [Tooltip Demo](#angular-tooltip-example) section.

### Rich tooltip

The [`igxTooltip`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltipdirective.html) content can be more than just simple text. Since the tooltip itself is a regular element in the markup, you can enhance its content by adding any elements you need and styling them accordingly.

Let's expand on the use of the [`igxTooltip`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltipdirective.html) and use it to provide more details for a specific location on a map! We'll use a simple div to represent our map, the [`IgxAvatar`](avatar.md) for a logo in our tooltip and the [`IgxIcon`](icon.md) for the location icon on our map. For this purpose, we will get their respective modules.

```typescript
// app.module.ts

import { IgxTooltipModule } from 'igniteui-angular/directives';
import { IgxAvatarModule } from 'igniteui-angular/avatar';
import { IgxIconModule } from 'igniteui-angular/icon';
// import { IgxTooltipModule, IgxAvatarModule, IgxIconModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [IgxTooltipModule, IgxAvatarModule, IgxIconModule],
})
export class AppModule {}
```

We will also use the following styles for our application:

```css
/* richTooltip.component.css */

.location:hover {
  cursor: pointer;
}

.map {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 252px;
  background-image: url(assets/images/card/media/infragisticsMap.png);
  border: 1px solid #d4d4d4;
}

.locationTooltip {
  width: 310px;
  background-color: var(--ig-grays-700);
  padding: 3px;
  font-size: 13px;
}

.locationTooltipContent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  margin-right: 10px;
  min-width: 25px;
  width: 45px;
  height: 45px;
}
```

Let's start by creating our map. We need a simple div that has for a background an image with a map. Also, we will add an icon that will indicate the position of our location! Since we want to provide more details for this location, our icon will obviously be the tooltip target.

```html
<!--richTooltip.component.html-->

<div class="map">
  <igx-icon
    class="location"
    [style.color]="'blue'"
    fontSet="material"
    [igxTooltipTarget]="locationTooltip"
    >location_on</igx-icon>
  ...
</div>
```

> [!NOTE]
> This component uses Material Icons. Add the following link to your `index.html`: `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`

Now for the tooltip! For its content, we will create a container that will be populated with some text information elements and an avatar. Then we will simply attach the tooltip to the target and include some nice CSS styling!

```html
<!--richTooltip.component.html-->

<div class="wrapper">
  <div class="map">
    <igx-icon
      class="location"
      [style.color]="'blue'"
      fontSet="material"
      [igxTooltipTarget]="locationTooltip"
      >location_on</igx-icon>

    <div class="locationTooltip" #locationTooltip="tooltip" igxTooltip>
      <div class="locationTooltipContent">
        <igx-avatar
          class="logo"
          src="assets/images/card/avatars/igLogo.png"
          size="medium"
          shape="square">
        </igx-avatar>
        <div>
          <div>Infragistics Inc. HQ</div>
          <div>2 Commerce Dr, Cranbury, NJ 08512, USA</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

If all went well, this is how our location and tooltip should look like:

```typescript
import { Component } from '@angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';

@Component({
    selector: 'app-tooltip-rich',
    styleUrls: ['./tooltip-rich.component.scss'],
    templateUrl: './tooltip-rich.component.html',
    imports: [IgxIconComponent, IgxTooltipTargetDirective, IgxTooltipDirective, IgxAvatarComponent]
})
export class TooltipRichComponent { }
```
```html
<div class="map">
    <igx-icon class="location" [style.color]="'blue'" family="material" [igxTooltipTarget]="locationTooltip">location_on</igx-icon>

    <div class="locationTooltip" #locationTooltip="tooltip" igxTooltip>
        <div class="locationTooltipContent">
            <igx-avatar class="logo" src="assets/images/card/avatars/igLogo.png" size="medium"
                shape="square"></igx-avatar>
            <div>
                <div>Infragistics Inc. HQ</div>
                <div>2 Commerce Dr, Cranbury, NJ 08512, USA</div>
            </div>
        </div>
    </div>
</div>
```
```scss
.location:hover {
    cursor: pointer;
}

.map {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 252px;
    background-image: url("../../../../assets/images/card/media/infragisticsMap.png");
    border: 1px solid #D4D4D4;
}

.locationTooltip {
    width: 310px;
    padding: 3px;
    font-size: 13px;
}

.locationTooltipContent {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo {
    margin-right: 10px;
    min-width: 25px;
    width: 45px;
    height: 45px;
}
```

<div class="divider--half"></div>

### Advanced Example

The tooltip integrates seamlessly with other components, allowing you to create advanced tooltips that contain components within them.
In the following example, you can see how we create descriptive tooltips by using the [`IgxList`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlistcomponent.html), [`IgxAvatar`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxavatarcomponent.html), [`IgxIcon`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxiconcomponent.html), [`IgxBadge`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbadgecomponent.html), [`IgxButton`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbuttondirective.html), [`IgxCard`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcardcomponent.html) and [`IgxCategoryChart`](https://www.infragistics.com/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) components.

```typescript
import { Component, inject } from "@angular/core";
import { IgxButtonDirective, IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineTitleDirective, IgxListThumbnailDirective } from 'igniteui-angular/list';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderTitleDirective } from 'igniteui-angular/card';
import { IgxOverlayOutletDirective } from 'igniteui-angular/core';
import { IgxCategoryChartModule } from "igniteui-angular-charts";
import { IncomeTaxes } from "./IncomeTaxes";

@Component({
    selector: "app-tooltip-advanced",
    styleUrls: ["./tooltip-advanced.component.scss"],
    templateUrl: "./tooltip-advanced.component.html",
    imports: [
        IgxOverlayOutletDirective,
        IgxTooltipTargetDirective,
        IgxTooltipDirective,
        IgxListComponent,
        IgxListItemComponent,
        IgxListActionDirective,
        IgxListLineTitleDirective,
        IgxListThumbnailDirective,
        IgxAvatarComponent,
        IgxIconComponent,
        IgxBadgeComponent,
        IgxButtonDirective,
        IgxCardComponent,
        IgxCardHeaderComponent,
        IgxCardHeaderTitleDirective,
        IgxCategoryChartModule
    ]
})
export class TooltipAdvancedComponent {
    private iconService = inject(IgxIconService);

    private dollarIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>';
    private filterIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z"/></svg>';
    private linkIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#999999"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/></svg>';
    private infoIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#999999"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>';
    private blockIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448Z"/></svg>';
    private btcIcon = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.339 11.5126C12.339 12.9126 9.93898 12.7486 9.17798 12.7476L9.18298 10.2676C9.94498 10.2686 12.34 10.0526 12.339 11.5126ZM11.82 8.01263C11.82 6.68463 9.82001 6.88363 9.18701 6.88363V9.13263C9.81901 9.13263 11.817 9.28463 11.82 8.01163V8.01263ZM20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10ZM12.952 9.406C13.6673 9.0676 14.0651 8.29005 13.921 7.512C13.8 6.177 12.644 5.728 11.189 5.6V3.749H10.062V5.549C9.762 5.549 9.462 5.549 9.162 5.559V3.745H8.036V5.595C7.792 5.6 7.553 5.604 7.319 5.604V5.6H5.765V6.8C5.765 6.8 6.597 6.785 6.584 6.8C6.89841 6.76025 7.18651 6.98023 7.231 7.294L7.223 12.365C7.20855 12.5849 7.01895 12.7517 6.799 12.738C6.813 12.751 5.98 12.738 5.98 12.738L5.754 14.083C6.308 14.083 7.488 14.083 8.025 14.093V15.966H9.15V14.113C9.459 14.12 9.758 14.123 10.05 14.123V15.967H11.177V14.098C13.072 13.992 14.398 13.517 14.565 11.739C14.6866 11.213 14.581 10.6602 14.274 10.2161C13.967 9.77207 13.487 9.47797 12.952 9.406Z" fill="#DF1B74"/></svg>';

    private incomeTaxes: IncomeTaxes = null;

    constructor() {
        this.iconService.addSvgIconFromText('dollar', this.dollarIcon);
        this.iconService.addSvgIconFromText('filter', this.filterIcon);
        this.iconService.addSvgIconFromText('link', this.linkIcon);
        this.iconService.addSvgIconFromText('info', this.infoIcon);
        this.iconService.addSvgIconFromText('block', this.blockIcon);
        this.iconService.addSvgIconFromText('btc', this.btcIcon);
    }

    public get incomeTaxesData(): IncomeTaxes {
        if (this.incomeTaxes === null)
        {
            this.incomeTaxes = new IncomeTaxes();
        }
        return this.incomeTaxes;
    }
}
```
```html
<div class="container" #outlet="overlay-outlet" igxOverlayOutlet>
    <igx-card class="triggerWrapper">
        <igx-card-header>
            <h3 igxCardHeaderTitle>Containing list</h3>
        </igx-card-header>
        <igx-list class="trigger" [igxTooltipTarget]="trigger1" [hideDelay]="0" [showDelay]="0">
            <igx-list-item>
                <p igxListLineTitle>Credits</p>
                <span igxListAction>($2.4T)</span>
            </igx-list-item>
        </igx-list>
    </igx-card>
    <div class="list" #trigger1="tooltip" igxTooltip>
        <igx-list>
            <h6>Credits</h6>
            <igx-list-item>
                <igx-icon name="dollar"></igx-icon>Amount - 1,678,345
            </igx-list-item>
            <div class="toolsWrapper">
                <igx-list-item [isHeader]="true">Tools</igx-list-item>
                <igx-list-item>
                    <igx-icon name="filter"></igx-icon>Filter
                </igx-list-item>
                <igx-list-item>
                    <igx-icon name="link"></igx-icon>Retail Banking
                </igx-list-item>
                <igx-list-item>
                    <igx-icon name="info"></igx-icon>More Info
                </igx-list-item>
            </div>
        </igx-list>
    </div>
    <igx-card class="triggerWrapper">
        <igx-card-header>
            <h3 igxCardHeaderTitle>Containing chart</h3>
        </igx-card-header>
        <igx-list class="trigger" [igxTooltipTarget]="trigger2" [hideDelay]="0" [showDelay]="0">
            <igx-list-item>
                <p igxListLineTitle>Individual Income Taxes</p>
                <span>($2.4T)</span>
            </igx-list-item>
        </igx-list>
    </igx-card>
    <div class="chart" #trigger2="tooltip" igxTooltip>
        <h6>Individual Income Taxes</h6>
        <igx-category-chart
            [dataSource]="incomeTaxesData"
            [chartType]="'SplineArea'"
            [includedProperties]="['year', 'revenue']"
            [yAxisTitle]="'IFT'"
            [yAxisTitleLeftMargin]="10"
            [yAxisTitleRightMargin]="5"
            [yAxisLabelLeftMargin]="0"
            [markerTypes]="'none'"
            [toolTipType]="'none'"
            [isHorizontalZoomEnabled]="false"
            [isVerticalZoomEnabled]="false"
        >
        </igx-category-chart>
        <p class="content">
            In fiscal year (FY) 2024, the largest source of federal revenue was
            Individual Income Taxes (49.3% of total revenue). So far in fiscal
            year 2025, the largest source of federal revenue is Individual
            Income Taxes (50.6% of total revenue).
        </p>
    </div>
    <igx-card class="triggerWrapper">
        <igx-card-header>
            <h3 igxCardHeaderTitle>Containing badge</h3>
        </igx-card-header>
        <igx-list class="trigger" [igxTooltipTarget]="trigger3" [hideDelay]="0" [showDelay]="0">
            <igx-list-item>
                <div class="avatarWrapper" igxListThumbnail>
                    <igx-avatar
                        id="avatar"
                        src="https://www.infragistics.com/angular-demos-lob/assets/images/avatar/10.jpg"
                        shape="circle"
                    >
                    </igx-avatar>
                    <igx-badge>
                        <igx-icon name="block"></igx-icon>
                    </igx-badge>
                </div>
                <p igxListLineTitle>Eliza Morales</p>
            </igx-list-item>
        </igx-list>
    </igx-card>
    <div class="employee" #trigger3="tooltip" igxTooltip>
        <div class="avatarWrapper">
            <igx-avatar
                id="avatar"
                src="https://www.infragistics.com/angular-demos-lob/assets/images/avatar/10.jpg"
                shape="circle"
            >
            </igx-avatar>
            <igx-badge>
                <igx-icon name="block"></igx-icon>
            </igx-badge>
        </div>
        <div class="textWrapper">
            <h6>Eliza Morales</h6>
            <p class="occupation">Software Engineer</p>
            <p class="status">In a meeting</p>
            <p class="availability">Available at 2:00 pm</p>
        </div>
    </div>
    <igx-card class="triggerWrapper">
        <igx-card-header>
            <h3 igxCardHeaderTitle>Containing icon</h3>
        </igx-card-header>
        <igx-list class="trigger" [igxTooltipTarget]="trigger4" [hideDelay]="0" [showDelay]="0" [hasArrow]="true" [igxToggleOutlet]="outlet">
            <igx-list-item>
                <div class="avatarWrapper" igxListThumbnail>
                    <igx-avatar
                        id="avatar"
                        src="https://www.infragistics.com/angular-demos-lob/assets/images/avatar/5.jpg"
                        shape="circle"
                    >
                    </igx-avatar>
                    <igx-badge>
                        <igx-icon name="block"></igx-icon>
                    </igx-badge>
                </div>
                <p igxListLineTitle>Aron Watson</p>
            </igx-list-item>
        </igx-list>
    </igx-card>
    <div class="multiline" #trigger4="tooltip" igxTooltip>
        <igx-icon name="block"></igx-icon>
        <p>
            Notifications are silenced while I focus. Please reach out only for
            urgent matters.
        </p>
    </div>

    <igx-card class="triggerWrapper">
        <igx-card-header>
            <h3 igxCardHeaderTitle>Containing buttons</h3>
        </igx-card-header>
        <igx-list class="trigger" [igxTooltipTarget]="trigger5" [hideDelay]="0" [showDelay]="0">
            <igx-list-item>
                <div class="headingWrapper" igxListLineTitle>
                    <igx-icon name="btc"></igx-icon>
                    <h6 class="heading">BTC</h6>
                </div>
                <p igxListAction class="secondary">Daily: + $45</p>
            </igx-list-item>
        </igx-list>
    </igx-card>
    <div class="btcBtn" #trigger5="tooltip" igxTooltip>
        <igx-card class="contentWrapper">
            <div class="titleWrapper">
                <h6>BTC</h6>
                <igx-icon name="btc"></igx-icon>
            </div>
            <div class="exchangeWrapper">
                <p class="detail">Exchange Balance</p>
                <p class="subtitle">USD 356.12.45</p>
            </div>
            <div class="assetsWrapper">
                <p class="detail">Assets Balance</p>
                <p class="subtitle">USD 46.28.79</p>
            </div>
        </igx-card>
        <div class="footerWrapper">
            <button igxButton="flat">Deposit</button>
            <button igxButton="flat">Withdraw</button>
        </div>
    </div>
    <igx-card class="triggerWrapper">
        <igx-card-header>
            <h3 igxCardHeaderTitle>Advanced sticky tooltip</h3>
        </igx-card-header>
        <igx-list class="trigger" [igxTooltipTarget]="trigger6" [sticky]="true" [hideDelay]="0" [showDelay]="0">
            <igx-list-item>
                <div class="headingWrapper" igxListLineTitle>
                    <igx-icon name="btc"></igx-icon>
                    <h6 class="heading">BTC</h6>
                </div>
                <p igxListAction class="secondary">Daily: + 2,6%</p>
            </igx-list-item>
        </igx-list>
    </igx-card>
    <div class="btc" #trigger6="tooltip" igxTooltip>
        <igx-card class="contentWrapper">
            <div class="titleWrapper">
                <h6>BTC</h6>
                <igx-icon name="btc"></igx-icon>
            </div>
            <div class="exchangeWrapper">
                <p class="detail">Exchange Balance</p>
                <p class="subtitle">USD 356.12.45</p>
            </div>
            <div class="assetsWrapper">
                <p class="detail">Assets Balance</p>
                <p class="subtitle">USD 46.28.79</p>
            </div>
        </igx-card>
    </div>
</div>
```
```scss
.container {
    display: flex;
    flex-wrap: wrap;
    max-height: max-content;
    max-width: 680px;
    gap: 1rem;
    padding: 1rem;
}

p {
    margin: unset;
}

.igx-tooltip {
    color: var(--ig-primary-300-contrast);
    background-color: var(--ig-surface-50);
    border: 1px solid var(--ig-gray-300);
    box-shadow: var(--ig-elevation-1);
    max-width: unset;
}

.triggerWrapper {
    border: 1px solid var(--ig-gray-200);
    border-radius: 0.25rem;
    background-color: #f5f5f5;

    h3 {
        color: #000
    }

    .trigger {
        border: 1px solid var(--ig-gray-300);
        width: 280px;
        height: max-content;
        margin: 0px 1rem 1rem;

        span {
            display: block;
            font-size: 0.8125rem;
            line-height: 1.375rem;
            letter-spacing: 0.3px;
            color: var(--ig-gray-600);
            text-decoration: underline;
        }

        .headingWrapper {
            display: flex;
            align-items: center;

            igx-icon {
                --size: 1.25rem
            }

            h6 {
                font-size: var(--ig-h6-font-size);
                font-weight: var(--ig-h6-font-weight);
                line-height: var(--ig-h6-line-height);
                letter-spacing: var(--ig-h6-letter-spacing);
                margin: unset;
                padding-left: 0.5rem;
                color: var(--ig-gray-900);
            }
        }

        .secondary {
            color: var(--ig-success-500);
            font-size: 0.875rem;
            line-height: 1.25rem;
            letter-spacing: 0.25px;
        }

        igx-avatar {
            --size: 2.5rem;
        }
    }
}

.trigger:nth-of-type(6) {
    cursor: pointer;
}

.trigger:nth-of-type(n+5) {
    margin-left: 1.5rem;
}

.list.igx-tooltip {
    padding: unset;
}

.list {

    igx-list {
        width: 300px;
        padding: 1rem;
        gap: 1rem;
        letter-spacing: 0.15px;
        border-radius: 0.25rem;

        h6 {
            font-size: var(--ig-h6-font-size);
            font-weight: var(--ig-h6-font-weight);
            line-height: var(--ig-h6-line-height);
            margin: unset;
        }

        igx-list-item {

            &:not(.igx-list__header) {
                --item-text-color: var(--ig-gray-900);
                cursor: pointer;
                font-size: 1rem;
                line-height: 1.5rem;
                font-weight: 400;
                letter-spacing: 0.15px;
            }
        }

        igx-icon {
            --size: 0.938rem;
            --ig-icon-color: var(--ig-gray-700);
            display: inline-block;
            vertical-align: middle;
            margin-right: 1rem;
        }
    }
}

.chart.igx-tooltip {
    border-radius: 0.5rem;
    padding: 1rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
}

.chart {

    h6 {
        font-size: var(--ig-h6-font-size);
        font-weight: var(--ig-h6-font-weight);
        letter-spacing: var(--ig-h6-letter-spacing);
        line-height: var(--ig-h6-line-height);
        margin: unset;
    }

    igx-category-chart {
        width: 317px;
        height: 178px;
        border: 1px solid #E0E0E0;
        border-radius: 0.375rem;
    }

    .content {
        font-size: 0.813rem;
        font-weight: 400;
        line-height: 1.125rem;
        letter-spacing: 0.3px;
        color: var(--ig-gray-700);
        width: 317px;
    }

    p {
        margin: unset;
    }
}

.employee.igx-tooltip {
    border-radius: 0.5rem;
    padding: 1rem;
    gap: 1rem;
}

.employee {

    igx-avatar {
        --size: 5.5rem
    }

    .textWrapper {
        width: 159px;

        p {
            margin: unset;
        }

        h6 {
            font-size: var(--ig-h6-font-size);
            font-weight: var(--ig-h6-font-weight);
            line-height: var(--ig-h6-line-height);
            letter-spacing: var(--ig-h6-letter-spacing);
            margin: unset;
        }

        p:not(.title) {
            font-size: 0.875rem;
            line-height: 1.25rem;
            font-weight: 400;
            letter-spacing: 0.25px;
            color: var(--ig-gray-700);
        }
    }
}

.avatarWrapper {
    line-height: 0;
    position: relative;

    igx-badge {
        --background-color: var(--ig-error-500);
        --_badge-size: 1.25rem;
        box-shadow: var(--ig-elevation-1);
        position: absolute;
        bottom: -3px;
        right: -3px;
    }
}

.multiline.igx-tooltip {
    border-radius: 0.125rem;
    gap: 0.5rem;
    background-color: var(--ig-error-50);
	border: unset;
    padding: 0.188rem 0.5rem;
}

:host ::ng-deep {
    .multiline .igx-tooltip--bottom {
        border-bottom-color: var(--ig-error-50);
    }
}

.multiline {
    igx-icon {
        color: var(--ig-error-500);
        --size: 0.938rem;
        width: 1.125rem;
        height: 1.125rem;
    }

    p {
        font-size: 0.625rem;
        width: 158px;
        line-height: 1rem;
        letter-spacing: 0.33px;
        margin: unset;
    }
}

.btcBtn.igx-tooltip {
    border-radius: 0.25rem;
    padding: 1rem 1rem 0.5rem 1rem;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
}

.btcBtn {

    igx-card {
        background-color: var(--ig-gray-50);
        padding: 0.5rem;
        border-radius: 0.125rem;
        letter-spacing: 0.15px;
        width: 268px;
        border: none;

        .titleWrapper {
            display: flex;
            width: 4.25rem;
            justify-content: space-between;

            h6 {
                font-size: var(--ig-h6-font-size);
                font-weight: var(--ig-h6-font-weight);
                line-height: var(--ig-h6-line-height);
                margin: unset;
            }

            igx-icon {
                --size: 1.25rem;
                width: 1.5rem;
            }
        }

        .detail {
            font-size: 0.75rem;
            font-weight: 600;
            line-height: 1rem;
            margin-bottom: unset;
        }

        .subtitle {
            font-size: 1rem;
            line-height: 1.5rem;
            margin-top: unset;
            margin-bottom: 1rem;
            color: var(--ig-gray-900);
        }

        .exchangeWrapper {

            .detail {
                color: var(--ig-secondary-300);
                margin: 1rem 0 0.125rem 0;
            }
        }

        .assetsWrapper {

            .detail {
                color: var(--ig-primary-300);
                margin: 0 0 0.125rem 0;
            }

            .subtitle {
                margin-bottom: unset;
            }
        }
    }

    .footerWrapper {
        width: 100%;
        gap: 0.313rem;
        display: flex;
        justify-content: flex-end;

        igx-button {
            font-size: 0.875rem;
            line-height: 1rem;
            letter-spacing: 0.75px;
        }
    }
}

.btc.igx-tooltip {
    border-radius: 0.25rem;
    padding: 1rem;
    gap: 0.5rem;
    display: flex;
    justify-content: space-between;
    width: 280px;
    --ig-icon-color: var(--ig-gray-700);
}

.btc {

    igx-card {
        padding: 0.5rem;
        letter-spacing: 0.15px;
        border: none;

        .titleWrapper {
            display: flex;
            width: 4.25rem;
            justify-content: space-between;

            h6 {
                font-size: var(--ig-h6-font-size);
                font-weight: var(--ig-h6-font-weight);
                line-height: var(--ig-h6-line-height);
                margin: unset;
            }

            igx-icon {
                --size: 1.25rem;
                width: 1.5rem;
            }
        }

        .detail {
            font-size: 0.75rem;
            font-weight: 600;
            line-height: 1rem;
            margin-bottom: unset;
        }

        .subtitle {
            font-size: 1rem;
            line-height: 1.5rem;
            margin-top: unset;
            color: var(--ig-gray-900);
        }

        .exchangeWrapper {

            .detail {
                color: var(--ig-secondary-300);
                margin: 0.5rem 0 0.125rem 0;
            }

            .subtitle {
                margin-bottom: 0.5rem;
            }
        }

        .assetsWrapper {

            .detail {
                color: var(--ig-primary-300);
                margin: 0 0 0.125rem 0;
            }

            .subtitle {
                margin-bottom: unset;
            }
        }
    }
}
```

<div class="divider--half"></div>

### Show/Hide delay settings

What if we want to control the amount of time that should pass before showing and hiding the tooltip? For this purpose we can use the [`showDelay`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#showdelay) and the [`hideDelay`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#hidedelay) properties of the [`igxTooltipTarget`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html) directive. Both properties are of type **number** and take time in milliseconds.

> [!NOTE]
> The built-in UI interaction behavior of the [`IgxTooltipTargetDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html) works by taking [`showDelay`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#showdelay) and [`hideDelay`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#hidedelay) property values into account. Showing and hiding the tooltip through the API or the API of the [`IgxTooltipDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltipdirective.html) does NOT take the [`showDelay`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#showdelay) and [`hideDelay`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#hidedelay) property values into account. If necessary, such logic would have to be implemented manually according to the application's specifics.

### Triggers

By default, the [`igxTooltip`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltipdirective.html) is triggered only while hovering over the [`igxTooltipTarget`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html). However, you can change this behavior using the [`showTriggers`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#showtriggers) and [`hideTriggers`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#hidetriggers) properties, which allow you to control when the [`igxTooltip`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltipdirective.html) appears and disappears. These properties accept event names as values—such as `click`, `focus`, or `keypress`—letting you trigger the [`igxTooltip`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltipdirective.html) in different scenarios.

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {
    IgxTooltipTargetDirective,
    IgxTooltipDirective,
    IgxButtonDirective,
    IgxCardComponent,
    IgxCardHeaderComponent,
    IgxCardHeaderTitleDirective,
    IgxCardContentDirective
} from "igniteui-angular";
import { defineComponents, IgcInputComponent } from 'igniteui-webcomponents';

defineComponents(IgcInputComponent);

@Component({
    selector: "app-tooltip-triggers",
    styleUrls: ["./tooltip-triggers.component.scss"],
    templateUrl: "./tooltip-triggers.component.html",
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
    IgxTooltipTargetDirective,
    IgxTooltipDirective,
    IgxButtonDirective,
    IgxCardComponent,
    IgxCardHeaderComponent,
    IgxCardHeaderTitleDirective,
    IgxCardContentDirective
]
})
export class TooltipTriggersComponent { }
```
```html
<div class="triggers-container">
    <igx-card>
        <igx-card-header>
            <h4 igxCardHeaderTitle>Default triggers</h4>
        </igx-card-header>
        <igx-card-content>
            <p>
                Hovering over the button below will display the tooltip using its default configuration: it appears on <strong>pointer enter</strong> and hides on <strong>pointer leave</strong> or <strong>click</strong>.
            </p>
            <button igxButton="outlined" [igxTooltipTarget]="triggersDefault">Hover over me</button>
        </igx-card-content>
    </igx-card>
    <div #triggersDefault="tooltip" igxTooltip>
        I am shown on pointer enter and hidden on pointer leave and/or click.
    </div>

    <igx-card>
        <igx-card-header>
            <h4 igxCardHeaderTitle>Focus based</h4>
        </igx-card-header>
        <igx-card-content>
            <p>
              In this instance, the tooltip is bound to show on its anchor
              <strong>focus</strong> and will hide when its anchor is
              <strong>blurred</strong>.
            </p>
            <p>Try to navigate with a Tab key to the anchor to see the effect.</p>
            <button igxButton="outlined" [igxTooltipTarget]="triggersFocusBlur" [showDelay]="0" [hideDelay]="0" [showTriggers]="'focus'" [hideTriggers]="'blur'">Focus me</button>
        </igx-card-content>
    </igx-card>
    <div #triggersFocusBlur="tooltip" igxTooltip>
        I am shown on focus and hidden on blur.
    </div>

    <igx-card>
        <igx-card-header>
            <h4 igxCardHeaderTitle>Same trigger(s) for showing and hiding</h4>
        </igx-card-header>
        <igx-card-content>
            <p>
              The same trigger can be bound to both show and hide the tooltip. The
              button below has its tooltip bound to show/hide on
              <strong>click</strong>.
            </p>
            <button igxButton="outlined" [igxTooltipTarget]="triggersClick" [showDelay]="0" [hideDelay]="0" [showTriggers]="'click'" [hideTriggers]="'click'">Click</button>
        </igx-card-content>
    </igx-card>
    <div #triggersClick="tooltip" igxTooltip>
        I am shown on click and will hide on anchor click.
    </div>

    <igx-card>
        <igx-card-header>
            <h4 igxCardHeaderTitle>Keyboard interactions</h4>
        </igx-card-header>
        <igx-card-content>
            <p>
              Keyboard interactions are also supported. The button below has its
              tooltip bound to show on a <strong>keypress</strong> and hide on a
              <strong>keypress</strong> or <strong>blur</strong>.
            </p>
            <p>Try it out by focusing the button and pressing a key.</p>
            <button igxButton="outlined" [igxTooltipTarget]="triggersKeypress" [showTriggers]="'keypress'" [hideTriggers]="'keypress,blur'">Press a key</button>
        </igx-card-content>
    </igx-card>
    <div #triggersKeypress="tooltip" igxTooltip>
        I am shown on a keypress and will hide on a keypress or blur.
    </div>

    <igx-card>
        <igx-card-header>
            <h4 igxCardHeaderTitle>Custom events</h4>
        </igx-card-header>
        <igx-card-content>
            <p>
              The tooltip supports any DOM event, including custom events. Try entering a value in the input below, then "commit" it by either <strong>blurring</strong> the input or pressing <strong>Enter</strong>.
            </p>
            <igc-input outlined label="Username" [igxTooltipTarget]="triggersCustom" [showTriggers]="'igcChange'"></igc-input>
        </igx-card-content>
    </igx-card>
    <div #triggersCustom="tooltip" igxTooltip>
        Value changed!
    </div>
</div>
```
```scss
.triggers-container {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    gap: 0.6rem;
    padding: 0.5rem 0rem 0rem 0.5rem;

    & igx-card {
        max-width: 320px;
    }

    & igx-card-header {
        min-height: 3rem;
    }

    & igx-card-content {
        display: flex;
        height: 100%;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: space-between;
    }

    & igc-input {
        --size: 36px;
    }
}

.igx-tooltip {
    max-width: 200px;
}
```

> [!NOTE]
> Setting [`showTriggers`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#showtriggers) and [`hideTriggers`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#hidetriggers) only has effect when interacting with the [`igxTooltipTarget`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html), not the [`igxTooltip`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltipdirective.html) itself. Default event triggers for the [`igxTooltip`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltipdirective.html) are `pointerenter` and `pointerleave`.

### Overlay configuration

Both the [`igxTooltip`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltipdirective.html) and [`igxTooltipTarget`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html) directives use the [`IgxOverlayService`](overlay.md) to open and close the respective tooltip element.

The [`igxTooltipTarget`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html) directive exposes a [`positionSettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#positionsettings) property, which can be used to customize the animations of our tooltip, its position in the UI and a lot more! If this property is not set, then default position settings will be used.

To further customize the tooltip, use the [`overlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#overlaysettings) property (inherited from the [`igxToggleAction`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoggleactiondirective.html)).

```html
<igx-icon [igxTooltipTarget]="tooltipRef" [positionSettings]="positionSettings" [overlaySettings]="overlaySettings">
  info
</igx-icon>

<div #tooltipRef="tooltip" igxTooltip>Her name is Madelyn James</div>
```

```ts
public positionSettings: PositionSettings = {
  horizontalDirection: HorizontalAlignment.Left,
  horizontalStartPoint: HorizontalAlignment.Left,
  verticalDirection: VerticalAlignment.Top,
  verticalStartPoint: VerticalAlignment.Bottom,
  openAnimation: useAnimation(slideInTop, { params: { duration: '2000ms' } }),
  closeAnimation: useAnimation(slideOutBottom, { params: { duration: '2000ms'} }),
  offset: 10
}

public overlaySettings: OverlaySettings = {
  closeOnEscape: false,
};
```

> [!NOTE]
> Any property that is set through the [`positionSettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#positionsettings) or [`overlaySettings`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#overlaysettings) will override the same property from the default settings and will have a direct impact on the tooltip.

### Additional Properties

Apart from the properties we've already covered, the [`igxTooltipTarget`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html) offers a variety of additional properties that allow you to further configure the tooltip's behavior and appearance.

You can make the tooltip "sticky" using the [`sticky`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#sticky) property, which adds a close button and keeps the tooltip visible until the user closes it manually - either by clicking the close button or pressing the `Esc` key. This behavior overrides the default hover behavior, preventing the tooltip from disappearing when the user stops hovering over the target element.

```html
<igx-icon [igxTooltipTarget]="tooltipRef" [sticky]="true">
  info
</igx-icon>

<div #tooltipRef="tooltip" igxTooltip>Her name is Madelyn James</div>
```

To customize the default close button, use the [`closeButtonTemplate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#closetemplate) property.

```html

<igx-icon [igxTooltipTarget]="tooltipRef" [sticky]="true" [closeButtonTemplate]="customTemplate">
  info
</igx-icon>

<ng-template #customTemplate>
  <igx-icon>cancel</igx-icon>
</ng-template>

<div #tooltipRef="tooltip" igxTooltip>Her name is Madelyn James</div>
```

> [!NOTE]
> Any custom content added via the `closeButtonTemplate` is rendered only when the tooltip is in sticky mode.

Additionally, you can add an arrow indicator to the tooltip by using the [`hasArrow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#hasarrow) property.

```html
<igx-icon [igxTooltipTarget]="tooltipRef" [hasArrow]="true">
  info
</igx-icon>

<div #tooltipRef="tooltip" igxTooltip>Her name is Madelyn James</div>
```

The arrow element is positioned based on the provided position settings. If the directions and starting points do not correspond to any of the [predefined position values](#predefined-position-values), the arrow is positioned in the top middle side of the tooltip (default tooltip position `bottom`).

#### Predefined position values

| Position     | Horizontal Direction       | Horizontal Start Point     | Vertical Direction       | Vertical Start Point     |
| :----------- | :------------------------- | :------------------------- | :----------------------- | :----------------------- |
| top          | HorizontalAlignment.Center | HorizontalAlignment.Center | VerticalAlignment.Top    | VerticalAlignment.Top    |
| top-start    | HorizontalAlignment.Right  | HorizontalAlignment.Left   | VerticalAlignment.Top    | VerticalAlignment.Top    |
| top-end      | HorizontalAlignment.Left   | HorizontalAlignment.Right  | VerticalAlignment.Top    | VerticalAlignment.Top    |
| bottom       | HorizontalAlignment.Center | HorizontalAlignment.Center | VerticalAlignment.Bottom | VerticalAlignment.Bottom |
| bottom-start | HorizontalAlignment.Right  | HorizontalAlignment.Left   | VerticalAlignment.Bottom | VerticalAlignment.Bottom |
| bottom-end   | HorizontalAlignment.Left   | HorizontalAlignment.Right  | VerticalAlignment.Bottom | VerticalAlignment.Bottom |
| right        | HorizontalAlignment.Right  | HorizontalAlignment.Right  | VerticalAlignment.Middle | VerticalAlignment.Middle |
| right-start  | HorizontalAlignment.Right  | HorizontalAlignment.Right  | VerticalAlignment.Bottom | VerticalAlignment.Top    |
| right-end    | HorizontalAlignment.Right  | HorizontalAlignment.Right  | VerticalAlignment.Top    | VerticalAlignment.Bottom |
| left         | HorizontalAlignment.Left   | HorizontalAlignment.Left   | VerticalAlignment.Middle | VerticalAlignment.Middle |
| left-start   | HorizontalAlignment.Left   | HorizontalAlignment.Left   | VerticalAlignment.Bottom | VerticalAlignment.Top    |
| left-end     | HorizontalAlignment.Left   | HorizontalAlignment.Left   | VerticalAlignment.Top    | VerticalAlignment.Bottom |


In the following example, you can see a demonstration of all position options and the arrow positioning behavior in action:

```typescript
import { Component, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { IgxButtonDirective, IgxTooltipDirective, TooltipPositionStrategy } from 'igniteui-angular/directives';
import { HorizontalAlignment, OverlaySettings, PositionSettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: "app-tooltip-placement",
    styleUrls: ["./tooltip-placement.component.scss"],
    templateUrl: "./tooltip-placement.component.html",
    imports: [IgxButtonDirective, IgxTooltipDirective, IgxIconComponent]
})
export class TooltipPlacementComponent {
    @ViewChildren(IgxTooltipDirective)
    public tooltips!: QueryList<IgxTooltipDirective>;

    @ViewChild(IgxButtonDirective, { static: true })
    public button!: IgxButtonDirective;

    public positions = Array.from(PositionsMap.keys());

    public showPositions() {
        this.tooltips.forEach((tooltip, index) => {
            const position = PositionsMap.get(this.positions[index]);
            const overlaySettings: OverlaySettings = {
                target: this.button.nativeElement,
                positionStrategy: new TooltipPositionStrategy(position),
                modal: false,
                closeOnOutsideClick: false,
                closeOnEscape: true,
                excludeFromOutsideClick: [this.button.nativeElement]
            };
            tooltip.open(overlaySettings);
        });
    }
}

export const PositionsMap = new Map<string, PositionSettings>([
    ['top', {
        horizontalDirection: HorizontalAlignment.Center,
        horizontalStartPoint: HorizontalAlignment.Center,
        verticalDirection: VerticalAlignment.Top,
        verticalStartPoint: VerticalAlignment.Top
    }],
    ['top-start', {
        horizontalDirection: HorizontalAlignment.Right,
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalDirection: VerticalAlignment.Top,
        verticalStartPoint: VerticalAlignment.Top
    }],
    ['top-end', {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalDirection: VerticalAlignment.Top,
        verticalStartPoint: VerticalAlignment.Top
    }],
    ['bottom', {
        horizontalDirection: HorizontalAlignment.Center,
        horizontalStartPoint: HorizontalAlignment.Center,
        verticalDirection: VerticalAlignment.Bottom,
        verticalStartPoint: VerticalAlignment.Bottom
    }],
    ['bottom-start', {
        horizontalDirection: HorizontalAlignment.Right,
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalDirection: VerticalAlignment.Bottom,
        verticalStartPoint: VerticalAlignment.Bottom
    }],
    ['bottom-end', {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalDirection: VerticalAlignment.Bottom,
        verticalStartPoint: VerticalAlignment.Bottom
    }],
    ['right', {
        horizontalDirection: HorizontalAlignment.Right,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalDirection: VerticalAlignment.Middle,
        verticalStartPoint: VerticalAlignment.Middle
    }],
    ['right-start', {
        horizontalDirection: HorizontalAlignment.Right,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalDirection: VerticalAlignment.Bottom,
        verticalStartPoint: VerticalAlignment.Top
    }],
    ['right-end', {
        horizontalDirection: HorizontalAlignment.Right,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalDirection: VerticalAlignment.Top,
        verticalStartPoint: VerticalAlignment.Bottom
    }],
    ['left', {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalDirection: VerticalAlignment.Middle,
        verticalStartPoint: VerticalAlignment.Middle
    }],
    ['left-start', {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalDirection: VerticalAlignment.Bottom,
        verticalStartPoint: VerticalAlignment.Top
    }],
    ['left-end', {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalDirection: VerticalAlignment.Top,
        verticalStartPoint: VerticalAlignment.Bottom
    }]
]);
```
```html
<div class="container">
    @for (position of positions; track position) {
        <div #tooltip="tooltip" igxTooltip>
            {{ position }} <igx-icon (click)="tooltip.close()">close</igx-icon>
        </div>
    }

    <button
        class="tooltip-position"
        igxButton="outlined"
        (click)="showPositions()"
    >
        Click to trigger all supported positions
    </button>
</div>
```
```scss
.container {
    padding: 0.5rem;
}

.tooltip-position {
    margin: 40px 0 0 120px;
    width: 400px;
    height: 120px;
    border-radius: 0.5rem;
}

igx-icon {
    cursor: default;
}
```

<div class="divider--half"></div>

#### Customizing the arrow's position

To customize the arrow's position, you can override the `positionArrow(arrow: HTMLElement, arrowFit: ArrowFit)` method.

For example:

```ts
export class CustomStrategy extends TooltipPositionStrategy {
  constructor(settings?: PositionSettings) {
    super(settings);
  }

  public override positionArrow(arrow: HTMLElement, arrowFit: ArrowFit): void {
    Object.assign(arrow.style, {
      left: '-0.25rem',
      transform: 'rotate(-45deg)',
      [arrowFit.direction]: '-0.25rem',
    });
  }
}

public overlaySettings: OverlaySettings = {
  positionStrategy: new CustomStrategy({
    horizontalDirection: HorizontalAlignment.Right,
    horizontalStartPoint: HorizontalAlignment.Right,
    verticalDirection: VerticalAlignment.Bottom,
    verticalStartPoint: VerticalAlignment.Bottom,
  })
};
```

```html
<igx-icon [igxTooltipTarget]="tooltipRef" [hasArrow]="true" [overlaySettings]="overlaySettings">
  info
</igx-icon>

<div #tooltipRef="tooltip" igxTooltip>Her name is Madelyn James</div>
```

## Styling

To get started with styling the tooltip, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`tooltip-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-tooltip-theme) and provide the `$text-color`, `$background` and the `$border-radius` parameters.

```scss
$dark-tooltip: tooltip-theme(
  $text-color: #ecaa53,
  $background: #011627,
  $border-radius: 6px,
);
```

> [!NOTE]
> In order to style any additional components that are used as part of the tooltip's content (such as [`IgxButton`](button.md), [`IgxSwitch`](switch.md), etc.), an additional theme should be created that is specific to the respective component and placed under the tooltip's scope only (so it does not affect the rest of the application).

Since the tooltip uses the [`IgxOverlayService`](overlay.md), in order for our custom theme to reach down the tooltip that we want to style, we will provide a specific outlet where the tooltip will be placed in the DOM when it is visible.

```html
<igx-avatar
  #target="tooltipTarget"
  [igxTooltipTarget]="tooltipRef"
  [igxToggleOutlet]="outlet"
>
</igx-avatar>

<div #outlet="overlay-outlet" igxOverlayOutlet>
  <div #tooltipRef="tooltip" igxTooltip>Her name is Madelyn James</div>
</div>
```

The last step is to **include** the component theme in our application.

```scss
:host {
  @include tokens($dark-tooltip);
}
```

So now our styled tooltip should look like this:

### Demo

```typescript
import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxOverlayOutletDirective } from 'igniteui-angular/core';

@Component({
    selector: 'app-tooltip-style',
    styleUrls: ['./tooltip-style.component.scss'],
    templateUrl: './tooltip-style.component.html',
    imports: [IgxAvatarComponent, IgxTooltipTargetDirective, IgxOverlayOutletDirective, IgxTooltipDirective]
})
export class TooltipStyleComponent { }
```
```html
<igx-avatar class="avatar" #target="tooltipTarget" [igxTooltipTarget]="tooltipRef"
    src="assets/images/avatar/10.jpg" size="medium" shape="circle"
    [igxToggleOutlet]="outlet">
</igx-avatar>

<div #outlet="overlay-outlet" igxOverlayOutlet>
    <div #tooltipRef="tooltip" igxTooltip>
        Her name is Madelyn James
    </div>
</div>
```
```scss
@use "igniteui-angular/theming" as *;

$dark-tooltip: tooltip-theme(
  $text-color: #ecaa53,
  $background: #011627,
  $border-radius: 6px,
);

:host {
    @include tokens($dark-tooltip);
}
```

### Styling with Tailwind

You can style the tooltip using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the Tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-tooltip`, `dark-tooltip`.

Once applied, these classes enable dynamic theme calculations. You can then override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [IgxTooltip Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-tooltip-theme). The syntax is as follows:

```html
<div
  class="!light-tooltip ![--background:#90B69F]"
  #tooltipRef="tooltip"
  igxTooltip>
  Her name is Madelyn James
</div>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your tooltip should look like this:

<div class="sample-container loading" style="height:100px">
    <iframe id="tooltip-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/interactions/tooltip-tailwind-style/' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

<div class="divider--half"></div>

## Accessibility

The [`igxTooltip`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltipdirective.html) is built with accessibility in mind and includes the following properties and ARIA attributes:

- [`id`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltipdirective.html#id) property - autogenerated if not set by the developer.
- [`role`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltipdirective.html#role) - When the tooltip is in its default behavior, `role="tooltip"` is applied. If the [`sticky`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#sticky) property is enabled, the role changes to `status`.
- `aria-hidden` - automatically updated depending on whether the tooltip is visible or not.

By setting the **aria-describedby** attribute of the target to its respective tooltip's [`id`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltipdirective.html#id), a reference will be provided to the tooltip element. This provides screen readers the information needed to read out the tooltip's contents when the end-user triggers the tooltip.

Extra care should be taken in the following scenarios:

- The tooltip's content is too complex to be automatically interpreted.
- The tooltip is used with a manually implemented behavior (e.g. manually show/hide) instead of the built-in one.
- The target element is unfocusable.

## Notes and Limitations

| Limitation                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Custom position strategy with arrow | The [`igxTooltipTarget`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html) directive uses the [`TooltipPositionStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/tooltippositionstrategy.html) to position the tooltip and arrow element. If a custom [`positionStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/overlaysettings.html#positionstrategy) is used and [`hasArrow`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html#hasarrow) is set to `true`, the custom strategy should extend the [`TooltipPositionStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/tooltippositionstrategy.html). Otherwise, the arrow will not be displayed. |


## API References

In this article we learned how to create, configure and style awesome tooltips for the elements on our page! We also used some additional Ignite UI for Angular components like icons and avatars to improve on the design of our application! The respective APIs are listed below:

- [IgxTooltipDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltipdirective.html)
- [IgxTooltipTargetDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtooltiptargetdirective.html)

Additional components and/or directives that were used:

- [IgxAvatarComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxavatarcomponent.html)
- [IgxIconComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxiconcomponent.html)
- [IgxToggleDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoggledirective.html)
- [IgxToggleActionDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtoggleactiondirective.html)

Styles:

- [IgxTooltipDirective Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-tooltip-theme)
- [IgxAvatarComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-avatar-theme)
- [IgxIconComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)

<div class="divider"></div>

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

---
title: Angular Accordion Component – Fully-featured collapsible panels - Infragistics - MIT license 
_description: Angular Accordion is used to build vertical expandable panels in accordion menu. Check how to do it with Ignite UI for Angular accordion component. 
_keywords: angular accordion, angular accordion component, angular accordion example, ignite ui for angular, angular UI components, infragistics
_license: MIT
_tocName: Accordion
---

# Angular Accordion Component Overview

## What is Angular Accordion?

The Angular Accordion is a GUI component for building vertical expandable panels with clickable headers and associated content sections, displayed in a single container. The accordion is commonly used to reduce the need of scrolling across multiple sections of content on a single page. It offers keyboard navigation and API to control the underlying panels' expansion state.

Users are enabled to interact and navigate among a list of items, such as thumbnails or labels. Each one of those items can be toggled (expanded or collapsed) in order to reveal the containing information. Depending on the configuration, there can be a single or multiple expanded items at a time.

## Angular Accordion Example

The following is a basic Angular Accordion example of a FAQ section. It operates as an accordion, with individually working sections. You can toggle each text block with a single click, while expanding multiple panels at the same time. This way you can read information more easily, without having to go back and forth between an automatically expanding and collapsing panel, which conceals the previously opened section every time.

In it, you can see how to define an `igx-accrodion` and its [expansion panels](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html). The sample also demonstrates the two types of expansion behavior. The switch button sets the [singleBranchExpand](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxaccordioncomponent.html#singleBranchExpand) property to toggle between single and multiple branches to be expanded at a time.

```typescript
import { Component } from '@angular/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-accordion-sample-1',
    styleUrls: ['./accordion-sample-1.component.scss'],
    templateUrl: './accordion-sample-1.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelBodyComponent]
})
export class AccordionSample1Component {
    public singleBranchExpand = false;
}
```
```html
<igx-switch [(ngModel)]="singleBranchExpand">Single Branch Expand</igx-switch>
<article class="sample-wrapper">
    <igx-accordion #accordion [singleBranchExpand]="singleBranchExpand">
        <igx-expansion-panel>
            <igx-expansion-panel-header>
                <igx-expansion-panel-title>
                    What has changed about subscription and pricing model?
                </igx-expansion-panel-title>
            </igx-expansion-panel-header>
            <igx-expansion-panel-body>
                We have moved to a subscription-based pricing model for all our developer tools. This makes it easier
                for you to manage your license subscriptions and allows us to provide a better level of service for you.

                We updated our pricing and packages to provide you with flexible options and the best value. This
                includes <a href="https://www.infragistics.com/products/ignite-ui">Ignite UI </a>(formerly Ignite UI for
                JavaScript) which includes all of our JavaScript framework
                components for web development, including: Angular, ASP.NET (Core and MVC), Blazor, JQuery, React and
                Web Components), as well as Infragistics Professional, Infragistics Ultimate, our Ultimate UI products.

                We also offer multi-year subscriptions options with a built-in discount, so you can see the value up
                front. With these updates we are confident that we are providing the best platforms and the best price.
            </igx-expansion-panel-body>
        </igx-expansion-panel>
        <igx-expansion-panel>
            <igx-expansion-panel-header>
                <igx-expansion-panel-title>Who will the updated changes impact?</igx-expansion-panel-title>
            </igx-expansion-panel-header>
            <igx-expansion-panel-body>
                <div class="body-container">
                    The license updates will impact all new and current customers using Ignite UI, Infragistics Professional
                    and Infragistics Ultimate. Specifically, we have also made updates to our product and packaging for
                    Ignite UI for JavaScript, Ignite UI for Angular, Ignite UI for React and Ignite UI for Web components.
                    For more information, please refer to this blog:

                    <a
                        href="https://www.infragistics.com/community/blogs/b/jason_beres/posts/announcement-changes-to-ignite-ui-product-packaging">Announcement:
                        Changes to Ignite UI Product & Packaging</a>

                    The pricing has been updated for all products and packages. So, all new or additional licenses will be
                    sold based on our new pricing and packages. All existing license agreements will be honored and renewed
                    based upon the current agreement.
                </div>
            </igx-expansion-panel-body>
        </igx-expansion-panel>
        <igx-expansion-panel>
            <igx-expansion-panel-header>
                <igx-expansion-panel-title>What is the difference between your old model and your current subscription
                    model
                    for Ignite UI?</igx-expansion-panel-title>
            </igx-expansion-panel-header>
            <igx-expansion-panel-body>
                For Ignite UI customers, we are moving away from NPM for licensed packages. The current NPM packages
                will be replaced with packages that include a “Trial Version” watermark. Licensed packages for Ignite UI
                will be available from our cloud hosted ProGet server.

                For more information, please refer to this article:

                <a
                    href="https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/ignite-ui-licensing">Moving
                    from Trial to Licensed Ignite UI NPM Packages
                </a>
            </igx-expansion-panel-body>
        </igx-expansion-panel>
        <igx-expansion-panel>
            <igx-expansion-panel-header>
                <igx-expansion-panel-title>What happens if I don't renew my subscription?</igx-expansion-panel-title>
            </igx-expansion-panel-header>
            <igx-expansion-panel-body>
                Any unlicensed or trial versions of Ignite UI for Angular, React and Web Components will now include
                this watermark.
            </igx-expansion-panel-body>
        </igx-expansion-panel>
        <igx-expansion-panel>
            <igx-expansion-panel-header>
                <igx-expansion-panel-title>If I don't renew my subscription will
                    I still have access to previous versions of Infragistics products?
                </igx-expansion-panel-title>
            </igx-expansion-panel-header>
            <igx-expansion-panel-body>
                Any version of Infragistics software which you have downloaded can continue to be used perpetually.
                Access to download any new or previous versions through our customer portal and package feeds will
                require maintaining an active subscription by continuing to renew it.
            </igx-expansion-panel-body>
        </igx-expansion-panel>
    </igx-accordion>
</article>
```
```scss
$ep-sample-border: 1px solid rgba(174, 174, 174, 0.25);

.sample-wrapper {
    overflow-y: auto;
    max-height: 380px;
    margin: 8px;
}

igx-switch {
    padding: 16px;
}

igx-expansion-panel {
    border: $ep-sample-border;
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Accordion

To get started with the Ignite UI for Angular Accordion component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxAccordionModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxAccordionModule } from 'igniteui-angular/accordion';
// import { IgxAccordionModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxAccordionModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxAccordionComponent` as a standalone dependency, or use the [`IGX_ACCORDION_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/accordion/src/accordion/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

...
import { IGX_ACCORDION_DIRECTIVES } from 'igniteui-angular/accordion';
// import { IGX_ACCORDION_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-accordion>
        <igx-expansion-panel>
            <igx-expansion-panel-header>
                <igx-expansion-panel-title>Title Panel 1</igx-expansion-panel-title>
            </igx-expansion-panel-header>
            <igx-expansion-panel-body>
                Content Panel 1
            </igx-expansion-panel-body>
        </igx-expansion-panel>
    </igx-accordion>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_ACCORDION_DIRECTIVES]
    /* or imports: [IgxAccordionComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Accordion module or directives imported, you can start with a basic configuration of the `igx-accordion` and its panels.

## Using the Angular Accordion Component

Each section in the [IgxAccordionComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxaccordioncomponent.html) is defined using an [expansion panel](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html).
Panels provide [disabled](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelheadercomponent.html#disabled), [collapsed](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html#collapsed) and [animationSettings](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html#animationSettings) properties, which give you the ability to configure the states of the panel as per your requirement.

### Declaring an accordion

The accordion wraps all [`igx-expansion-panel`s](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html) declared inside it.

```html
<igx-accordion #accordion [singleBranchExpand]="true">
    <igx-expansion-panel>
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 1</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Content Panel 1
        </igx-expansion-panel-body>
    </igx-expansion-panel>
    <igx-expansion-panel>
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 2</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Content Panel 2
        </igx-expansion-panel-body>
    </igx-expansion-panel>
</igx-accordion>
```

Using the [panels](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxaccordioncomponent.html#panels) accessor you can get a reference to the collection containing all [expansion panels](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html) children of the `igx-accordion`.

```typescript
@ViewChild('accordion', { static: true })
public accordion!: IgxAccordionComponent;

this.accordion.panels;
```

As demonstrated above, the [singleBranchExpand](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxaccordioncomponent.html#singleBranchExpand) property gives you the ability to set whether single or multiple panels can be expanded at a time.

### Angular Accordion Animations

Angular Accordion supports animations for both expanding and collapsing actions of the panels. Animation behavior can be customized. Normally, animations can be set for each expansion panel individually. However, it could also be applied to all panels at once on [IgxAccordionComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxaccordioncomponent.html) level. This gives users the ability to disable animations for all sections at once via the animations property of the [IgxAccordionComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxaccordioncomponent.html).

With regards to animation, you have two options. First, you could set the `animationSettings` property on the accordion component:

```typescript
import { useAnimation, slideInLeft, slideOutRight } from '@angular/animations';
// import { useAnimation, slideInLeft, slideOutRight } from '@infragistics/igniteui-angular/animations'; for licensed package

@Component({
    ...
})
export class AccordionComponent {
    public animationSettingsCustom = {
        closeAnimation: useAnimation(slideOutRight, {
            params: {
                duration: '100ms',
                toPosition: 'translateX(25px)'
            }
        }),
        openAnimation: useAnimation(slideInLeft, {
            params: {
                duration: '500ms',
                fromPosition: 'translateX(-15px)',
                startOpacity: 0.1
            }
        })
    };
}
```

As you can see, we are using [`slideInLeft`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/animations#mixin-slide-in-left) and [`slideOutRight`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/animations#mixin-slide-out-right) animations from our [**inbuilt suite of animations**](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/animations) to make the component content appear from the left side and disappear to the right when collapsing the content. We further customize the animations by overriding some of the animations' parameters.

The following snippet demonstrates passing the animation settings to the component:

```html
<igx-accordion #accordion [animationSettings]="animationSettingsCustom">
    ...
</igx-accordion>
```

>[!NOTE]
> If you would like to turn off the animation for the [IgxAccordionComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxaccordioncomponent.html) the `animationSettings` could be set to `null`.

Alternatively, you have the ability to set every single [expansion panel](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html)`s [animationSettings](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html#animationSettings) input.

```html
<igx-accordion #accordion [singleBranchExpand]="true">
     <igx-expansion-panel [animationSettings]="slideLeftRightSettings">
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 1</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Content Panel 1
        </igx-expansion-panel-body>
    </igx-expansion-panel>
    <igx-expansion-panel [animationSettings]="slideTopBottomSettings">
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 2</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            Content Panel 2
        </igx-expansion-panel-body>
    </igx-expansion-panel>
</igx-accordion>
```

Using the [collapseAll](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxaccordioncomponent.html#collapseAll) and [expandAll](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxaccordioncomponent.html#expandAll) methods you can respectively collapse and expand all [IgxExpansionPanels](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html) of the [IgxAccordion](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxaccordioncomponent.html) programmatically.

>[!NOTE]
> If [singleBranchExpand](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxaccordioncomponent.html#singleBranchExpand) property is set to _true_ calling [expandAll](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxaccordioncomponent.html#expandAll) method would expand only the last [panel](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html).

### Angular Accordion Templating Example

With the Angular [Accordion component](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxaccordioncomponent.html), you can customize the header and content panel`s appearance.
The sample below demonstrates how elaborate filtering options can be implemented using the built-in templating functionality of the [IgxExpansionPanel](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html).

```typescript
import { Component } from '@angular/core';
import { IgxSliderComponent, IgxSliderType } from 'igniteui-angular/slider';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxRadioComponent } from 'igniteui-angular/radio';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxTimePickerComponent } from 'igniteui-angular/time-picker';
import { IgxLabelDirective } from 'igniteui-angular/input-group';

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-accordion-sample-3',
    styleUrls: ['./accordion-sample-3.component.scss'],
    templateUrl: './accordion-sample-3.component.html',
    imports: [IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelBodyComponent, IgxCheckboxComponent, FormsModule, IgxSliderComponent, IgxRadioComponent, IgxIconComponent, IgxTimePickerComponent, IgxLabelDirective]
})
export class AccordionSample3Component {
    public sliderType = IgxSliderType;
    public priceRange: PriceRange = new PriceRange(200, 800);
    public checkedItems = '';
    public arriveTime: Date;
    public rating: string;

    public categories = [
        { checked: false, type: 'Bike' },
        { checked: false, type: 'Motorcycle' },
        { checked: false, type: 'Car' },
        { checked: false, type: 'Taxi' },
        { checked: false, type: 'Public Transport' }
    ];

    public checkedChange() {
        this.checkedItems = '';
        this.categories.forEach(item => {
            if (item.checked) {
                this.checkedItems = this.checkedItems ? this.checkedItems + ', ' + item.type : ': ' + item.type;
            }
        });
    }

    public get time() {
        return this.arriveTime ?
            ': Arrive before ' + this.arriveTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
    }
}
class PriceRange {
    constructor(
        public lower: number,
        public upper: number
    ) {
    }
}
```
```html
<article class="sample-wrapper">
  <igx-accordion #accordion>
    <igx-expansion-panel>
      <igx-expansion-panel-header>
        <igx-expansion-panel-title>Categories{{ checkedItems }}</igx-expansion-panel-title>
      </igx-expansion-panel-header>
      <igx-expansion-panel-body>
        <div class="categories-container">
          @for (item of categories; track item) {
            <igx-checkbox [(ngModel)]="item.checked" (change)="checkedChange()">
              {{ item.type }}
            </igx-checkbox>
          }
        </div>
      </igx-expansion-panel-body>
    </igx-expansion-panel>

    <igx-expansion-panel>
      <igx-expansion-panel-header>
        <igx-expansion-panel-title>Cost: {{ '$' + slider.lowerValue + ' to ' + '$' + slider.upperValue }}</igx-expansion-panel-title>
      </igx-expansion-panel-header>
      <igx-expansion-panel-body>
        <igx-slider #slider id="slider" [type]="sliderType.RANGE" [minValue]="0" [maxValue]="1000"
        [(ngModel)]="priceRange"></igx-slider>
      </igx-expansion-panel-body>
    </igx-expansion-panel>

    <igx-expansion-panel>
      <igx-expansion-panel-header>
        <igx-expansion-panel-title>Rating@if (rating) {
          <span>{{': ' + rating }}</span>
        }</igx-expansion-panel-title>
      </igx-expansion-panel-header>
      <igx-expansion-panel-body>
        @for (item of [].constructor(4); track item; let i = $index) {
          <div style="display:flex; gap: 4px; align-items: center;">
            @if (i===0) {
              <igx-radio [(ngModel)]="rating" [value]="i+1 + ' star or more'"> {{ i + 1 }} star or more</igx-radio>
            }
            @if (i>0) {
              <igx-radio [(ngModel)]="rating" [value]="i+1 + ' stars or more'"> {{ i + 1 }} stars or more</igx-radio>
            }
            <div style="display:inline-flex; padding-top: 4px">
              @for (fillStar of [].constructor(i + 1); track fillStar) {
                <div>
                  <igx-icon>star</igx-icon>
                </div>
              }
              <igx-icon>star_half</igx-icon>
              @for (borderStar of [].constructor(3 - i); track borderStar) {
                <div>
                  <igx-icon>star_border</igx-icon>
                </div>
              }
            </div>
          </div>
        }
      </igx-expansion-panel-body>
    </igx-expansion-panel>

    <igx-expansion-panel>
      <igx-expansion-panel-header>
        <igx-expansion-panel-title>Time{{ time }}</igx-expansion-panel-title>
      </igx-expansion-panel-header>
      <igx-expansion-panel-body>
        <igx-time-picker [(ngModel)]="arriveTime" mode="dropdown" [spinLoop]='false'>
          <label igxLabel>Arrive before</label>
        </igx-time-picker>
      </igx-expansion-panel-body>
    </igx-expansion-panel>
  </igx-accordion>
</article>
```
```scss
$ep-sample-border: 1px solid rgba(174, 174, 174, 0.25);

.sample-wrapper {
    overflow-y: auto;
    max-height: 530px;
    margin: 8px;
}

igx-slider {
    margin: 24px;
}

.categories-container {
    display: flex;
    flex-flow: column nowrap;
}

igx-checkbox,
igx-radio {
    margin: 4px 0;
}

igx-expansion-panel {
    border: $ep-sample-border;
}
```

<div class="divider--half"></div>

### Nested Angular Accordions Scenario

In the following Angular accordion example, we are going to create a complex FAQ section in order to illustrate how you can go about this common application scenario. In the sample nested [IgxAccordionComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxaccordioncomponent.html) is achieved by adding an [accordion](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxaccordioncomponent.html) inside the body of an [expansion panel](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html).

```html
<igx-accordion #accordion>
     <igx-expansion-panel>
        <igx-expansion-panel-header>
            <igx-expansion-panel-title>Title Panel 1</igx-expansion-panel-title>
        </igx-expansion-panel-header>
        <igx-expansion-panel-body>
            <igx-accordion #childAccordion>
                <igx-expansion-panel>
                    <igx-expansion-panel-header>
                        <igx-expansion-panel-title>Title Nested Panel 1</igx-expansion-panel-title>
                    </igx-expansion-panel-header>
                    <igx-expansion-panel-body>
                        Content Nested Panel 1
                    </igx-expansion-panel-body>
                </igx-expansion-panel>
                ...
            </igx-accordion>
        </igx-expansion-panel-body>
    </igx-expansion-panel>
    ...
</igx-accordion>
```

You can see the result below.

```typescript
import { Component } from '@angular/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-accordion-sample-2',
    styleUrls: ['./accordion-sample-2.component.scss'],
    templateUrl: './accordion-sample-2.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelBodyComponent]
})
export class AccordionSample2Component {
    public singleBranchExpand = false;
}
```
```html
<igx-switch [(ngModel)]="singleBranchExpand">Single Branch Expand</igx-switch>
<article class="sample-wrapper">

    <igx-accordion #accordion [singleBranchExpand]="singleBranchExpand">
        <igx-expansion-panel>
            <igx-expansion-panel-header>
                <igx-expansion-panel-title>
                    What has changed about subscription and pricing model?
                </igx-expansion-panel-title>
            </igx-expansion-panel-header>
            <igx-expansion-panel-body>
                We have moved to a subscription-based pricing model for all our developer tools. This makes it easier
                for you to manage your license subscriptions and allows us to provide a better level of service for you.

                We updated our pricing and packages to provide you with flexible options and the best value. This
                includes <a href="https://www.infragistics.com/products/ignite-ui">Ignite UI </a>(formerly Ignite UI for
                JavaScript) which includes all of our JavaScript framework
                components for web development, including: Angular, ASP.NET (Core and MVC), Blazor, JQuery, React and
                Web Components), as well as Infragistics Professional, Infragistics Ultimate, our Ultimate UI products.

                We also offer multi-year subscriptions options with a built-in discount, so you can see the value up
                front. With these updates we are confident that we are providing the best platforms and the best price.
            </igx-expansion-panel-body>
        </igx-expansion-panel>
        <igx-expansion-panel>
            <igx-expansion-panel-header>
                <igx-expansion-panel-title>
                    Who will the updated changes impact?
                </igx-expansion-panel-title>
            </igx-expansion-panel-header>
            <igx-expansion-panel-body>
                The license updates will impact all new and current customers using Ignite UI, Infragistics Professional
                and Infragistics Ultimate. Specifically, we have also made updates to our product and packaging for
                Ignite UI for JavaScript, Ignite UI for Angular, Ignite UI for React and Ignite UI for Web components.
                For more information, please refer to this blog:

                <a
                    href="https://www.infragistics.com/community/blogs/b/jason_beres/posts/announcement-changes-to-ignite-ui-product-packaging">Announcement:
                    Changes to Ignite UI Product & Packaging</a>

                The pricing has been updated for all products and packages. So, all new or additional licenses will be
                sold based on our new pricing and packages. All existing license agreements will be honored and renewed
                based upon the current agreement.
            </igx-expansion-panel-body>
        </igx-expansion-panel>
        <igx-expansion-panel>
            <igx-expansion-panel-header>
                <igx-expansion-panel-title>
                    What is the difference between your old model and your current subscription model for Ignite UI?
                </igx-expansion-panel-title>
            </igx-expansion-panel-header>
            <igx-expansion-panel-body>
                For Ignite UI customers, we are moving away from NPM for licensed packages. The current NPM packages
                will be replaced with packages that include a “Trial Version” watermark. Licensed packages for Ignite UI
                will be available from our cloud hosted ProGet server.

                For more information, please refer to this article:

                <a
                    href="https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/ignite-ui-licensing">Moving
                    from Trial to Licensed Ignite UI NPM Packages</a>
            </igx-expansion-panel-body>
        </igx-expansion-panel>
        <igx-expansion-panel>
            <igx-expansion-panel-header>
                <igx-expansion-panel-title>
                    Common questions about renewal.
                </igx-expansion-panel-title>
            </igx-expansion-panel-header>
            <igx-expansion-panel-body class="nested-accordion">
                <igx-accordion #nestedAccordion>
                    <igx-expansion-panel>
                        <igx-expansion-panel-header>
                            <igx-expansion-panel-title>
                                What happens if I don't renew my subscription?
                            </igx-expansion-panel-title>
                        </igx-expansion-panel-header>
                        <igx-expansion-panel-body>
                            Any unlicensed or trial versions of Ignite UI for Angular, React and Web Components will now
                            include
                            this watermark.
                        </igx-expansion-panel-body>
                    </igx-expansion-panel>
                    <igx-expansion-panel>
                        <igx-expansion-panel-header>
                            <igx-expansion-panel-title>
                                If I don't renew my subscription will I still have access to previous versions of
                                Infragistics products?
                            </igx-expansion-panel-title>
                        </igx-expansion-panel-header>
                        <igx-expansion-panel-body>
                            Any version of Infragistics software which you have downloaded can continue to be used
                            perpetually.
                            Access to download any new or previous versions through our customer portal and package
                            feeds will
                            require maintaining an active subscription by continuing to renew it.
                        </igx-expansion-panel-body>
                    </igx-expansion-panel>
                    <igx-expansion-panel>
                        <igx-expansion-panel-header>
                            <igx-expansion-panel-title>
                                Will I be automatically charged for my renewal/ Can I be automatically charged for
                                renewal?
                            </igx-expansion-panel-title>
                        </igx-expansion-panel-header>
                        <igx-expansion-panel-body>
                            Any new subscriptions purchased online, via our eCommerce system, will renew automatically.
                            Subscription
                            renewal can be canceled, at any time, before the next automatic renewal date. Subscriptions
                            purchased
                            directly from Infragistics or Infragistics' partners are subject to the renewal terms that
                            were agreed
                            upon as part of that purchase.
                        </igx-expansion-panel-body>
                    </igx-expansion-panel>
                </igx-accordion>
            </igx-expansion-panel-body>
        </igx-expansion-panel>
        <igx-expansion-panel>
            <igx-expansion-panel-header>
                <igx-expansion-panel-title>
                    I split my work across two computers. Can I install on both using my single-user license?
                </igx-expansion-panel-title>
            </igx-expansion-panel-header>
            <igx-expansion-panel-body>
                The Infragistics Ultimate license is tied to the user, and not the computer. That means you're welcome
                to install and use Ignite UI, Infragistics Professional, and Infragistics Ultimate on any computer you
                use. However, if we notice a large number of activations using the same license, we may contact you to
                verify this behavior.
            </igx-expansion-panel-body>
        </igx-expansion-panel>
        <igx-expansion-panel>
            <igx-expansion-panel-header>
                <igx-expansion-panel-title>
                    I used up my trial for an earlier version of Infragistics Ultimate. Can I start a new trial when a
                    major
                    version is released?
                </igx-expansion-panel-title>
            </igx-expansion-panel-header>
            <igx-expansion-panel-body>
                Yes! If you have tried a previous version in the past, and used up your 30-day trial, you can try the
                next major version for another 30 days! You can do this in the following two ways:

                <ul>
                    <li>If you have days remaining in your 30-day trial period for the current version (e.g., the
                        Version 15.1 Volume Release), use the Check for Update option inside the Platform Installer or
                        your account. You will be able to start a fresh trial for the next major version (e.g., 20.1
                        Volume Release)</li>
                    <li>If you have used up the 30-day trial for the previous major version (e.g., the 19.2 Volume
                        Release), simply download and install Infragistics Ultimate from our <a
                            href="https://www.infragistics.com/products/ultimate">website</a> (This will also allow you
                        to start a new trial.)</li>
                </ul>
            </igx-expansion-panel-body>
        </igx-expansion-panel>
    </igx-accordion>
</article>
```
```scss
$ep-sample-border: 1px solid rgba(174, 174, 174, 0.25);

.sample-wrapper {
    overflow-y: auto;
    max-height: 470px;
    margin: 8px;
}

igx-switch {
    padding: 16px;
}

.nested-accordion {
    margin: 10px 16px;
}

igx-expansion-panel {
    border: $ep-sample-border;
}
```

<div class="divider--half"></div>

## Keyboard Navigation

Keyboard navigation in the Ignite UI for Angular Accordion provides a rich variety of keyboard interactions to the end-user. This functionality is enabled by default and allows end-users to easily navigate through the panels.
The [IgxAccordionComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxaccordioncomponent.html) navigation is compliant with W3C accessibility standards and convenient to use.

**Key Combinations**

- <kbd>Tab</kbd> - moves the focus to the first(if the focus is before accordion)/next panel
- <kbd>Shift + Tab</kbd> - moves the focus to the last(if the focus is after accordion)/previous panel
- <kbd>Arrow Down</kbd> - moves the focus to the panel below
- <kbd>Arrow Up</kbd> - moves the focus to the panel above
- <kbd>Alt + Arrow Down</kbd> - expands the focused panel in the accordion
- <kbd>Alt + Arrow Up</kbd> - collapses the focused panel in the accordion
- <kbd>Shift + Alt + Arrow Down</kbd> - expands all enabled panels(if singleBranchExpand is set to true expands the last enabled panel)
- <kbd>Shift + Alt + Arrow Up</kbd> - collapses all enabled panels
- <kbd>Home</kbd> - navigates to the FIRST enabled panel in the accordion
- <kbd>End</kbd> - navigates to the LAST enabled panel in the accordion

## Styling

The [`accordion`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxaccordioncomponent.html) serves only as a container for the underlying [`panels`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html). Styles can be applied directly through the panel's theme, as described in the [`styling section of the IgxExpansionPanel topic`](expansion-panel.md#styling).

By design, there is a margin set to the expanded panels, in case that they are positioned within an `igx-accordion`. In order to modify it there is a property exposed inside the igx-expansion-panel theme.
In order to take advantage of the functions exposed by the theming engine, we have to import the `index` file in our style file:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`expansion-panel-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-expansion-panel-theme) and accepts a `$header-background`, `$body-color` and `$expanded-margin` parameters. The theme automatically assigns foreground colors, either black or white, based on which provides better contrast with the specified backgrounds.

```scss
$custom-panel-theme: expansion-panel-theme(
  $header-background: #011627,
  $body-background: #f0ece7,
  $expanded-margin: 10px
);
```

The last step is to include the component's theme.

```scss
:host {
    @include tokens($custom-panel-theme);
}
```

### Demo

```typescript
import { Component } from '@angular/core';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-accordion-style',
    styleUrls: ['./accordion-style.component.scss'],
    templateUrl: './accordion-style.component.html',
    imports: [FormsModule, IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelBodyComponent]
})
export class AccordionStyleComponent {
    public singleBranchExpand = false;
}
```
```html
<article class="sample-wrapper">
    <igx-accordion #accordion >
        <igx-expansion-panel>
            <igx-expansion-panel-header>
                <igx-expansion-panel-title>
                    What has changed about subscription and pricing model?
                </igx-expansion-panel-title>
            </igx-expansion-panel-header>
            <igx-expansion-panel-body>
                We have moved to a subscription-based pricing model for all our developer tools. This makes it easier
                for you to manage your license subscriptions and allows us to provide a better level of service for you.

                We updated our pricing and packages to provide you with flexible options and the best value. This
                includes <a href="https://www.infragistics.com/products/ignite-ui">Ignite UI </a>(formerly Ignite UI for
                JavaScript) which includes all of our JavaScript framework
                components for web development, including: Angular, ASP.NET (Core and MVC), Blazor, JQuery, React and
                Web Components), as well as Infragistics Professional, Infragistics Ultimate, our Ultimate UI products.

                We also offer multi-year subscriptions options with a built-in discount, so you can see the value up
                front. With these updates we are confident that we are providing the best platforms and the best price.
            </igx-expansion-panel-body>
        </igx-expansion-panel>
        <igx-expansion-panel>
            <igx-expansion-panel-header>
                <igx-expansion-panel-title>
                    Who will the updated changes impact?
                </igx-expansion-panel-title>
            </igx-expansion-panel-header>
            <igx-expansion-panel-body>
                The license updates will impact all new and current customers using Ignite UI, Infragistics Professional
                and Infragistics Ultimate. Specifically, we have also made updates to our product and packaging for
                Ignite UI for JavaScript, Ignite UI for Angular, Ignite UI for React and Ignite UI for Web components.
                For more information, please refer to this blog:

                <a
                    href="https://www.infragistics.com/community/blogs/b/jason_beres/posts/announcement-changes-to-ignite-ui-product-packaging">Announcement:
                    Changes to Ignite UI Product & Packaging</a>

                The pricing has been updated for all products and packages. So, all new or additional licenses will be
                sold based on our new pricing and packages. All existing license agreements will be honored and renewed
                based upon the current agreement.
            </igx-expansion-panel-body>
        </igx-expansion-panel>
        <igx-expansion-panel>
            <igx-expansion-panel-header>
                <igx-expansion-panel-title>
                    What is the difference between your old model and your current subscription model for Ignite UI?
                </igx-expansion-panel-title>
            </igx-expansion-panel-header>
            <igx-expansion-panel-body>
                For Ignite UI customers, we are moving away from NPM for licensed packages. The current NPM packages
                will be replaced with packages that include a “Trial Version” watermark. Licensed packages for Ignite UI
                will be available from our cloud hosted ProGet server.

                For more information, please refer to this article:

                <a
                    href="https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/ignite-ui-licensing">Moving
                    from Trial to Licensed Ignite UI NPM Packages</a>
            </igx-expansion-panel-body>
        </igx-expansion-panel>
    </igx-accordion>
</article>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-panel-theme: expansion-panel-theme(
  $header-background: #011627,
  $body-background: #f0ece7,
  $expanded-margin: 10px
);

:host {
    @include tokens($custom-panel-theme);
}
```

## API Reference

- [IgxAccordion API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxaccordioncomponent.html)
- [IgxExpansionPanel API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html)
- [IgxExpansionPanelHeader API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelheadercomponent.html)
- [IgxExpansionPanelBody API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelbodycomponent.html)
- [IgxExpansionPanel Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-igx-expansion-panel)


## Additional Resources

Our community is active and always welcoming new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

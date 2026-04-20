---
title: Angular Slider |  Ignite UI for Angular | Infragistics | MIT license
_description: Learn how to configure a selection in a given range by using the thumb track with Angular Slider part of Ignite UI for Angular. Choose between singe and range slider types
_keywords: angular slider, angular slider component, angular range slider component, angular range input component, angular ui components, igniteui for angular, infragistics
_license: MIT
_tocName: Slider
---

# Angular Slider Component Overview

<p class="highlight">The Ignite UI for Angular Slider is a form component which allows selection in a given range by moving a thumb along a track. The track can be defined as continuous or stepped and the slider can be configured so users can choose between single value and range (lower and upper value) slider types.</p>

## Angular Slider Example

```typescript
import { Component } from '@angular/core';
import { IgxSliderComponent, IgxSliderType } from 'igniteui-angular/slider';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective } from 'igniteui-angular/input-group';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-slider-sample-1',
    styleUrls: ['./slider-sample-1.component.scss'],
    templateUrl: './slider-sample-1.component.html',
    imports: [IgxSliderComponent, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective, FormsModule, IgxInputDirective]
})
export class SliderSample1Component {

    public sliderType = IgxSliderType;
    public priceRange = {
        lower: 200,
        upper: 800
    };

    constructor() { }
}
```
```html
<div class="sample-center">
    <div class="container">
        <igx-slider id="slider"
                    [type]="sliderType.RANGE"
                    [minValue]="0"
                    [maxValue]="1000"
                    [lowerBound]="100"
                    [upperBound]="900"
                    [(lowerValue)]="priceRange.lower"
                    [(upperValue)]="priceRange.upper">
        </igx-slider>
        <div class="wrapper">
            <igx-input-group type="border">
                <label igxLabel for="lowerInput">Lower price (updates on blur):</label>
                <igx-prefix>$</igx-prefix>
                <input igxInput type="number" id="lowerInput" min="100" [max]="priceRange.upper" [(ngModel)]="priceRange.lower" [ngModelOptions]="{ updateOn: 'blur' }" />
            </igx-input-group>
            <igx-input-group type="border">
                <label igxLabel for="upperInput">Upper price (updates on blur):</label>
                <igx-prefix>$</igx-prefix>
                <input igxInput type="number" id="upperInput" [min]="priceRange.lower" max="900" [(ngModel)]="priceRange.upper" [ngModelOptions]="{ updateOn: 'blur' }" />
            </igx-input-group>
        </div>
    </div>
</div>
```
```scss
.sample-center {
    display: flex;
    align-items: center;
    height: 100%;
}

.container {
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 100%;
}

.wrapper {
    display: flex;
    > * {
        width: 100%;
        margin-left: 8px;
        &:first-of-type {
            margin-left: 0;
        }
    }
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Slider

To get started with the Ignite UI for Angular Slider component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](../general/getting-started.md) topic.

The next step is to import the `IgxSliderModule` in your **app.module.ts** file.

>[!WARNING]
>**This component can utilize the [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) **optionally**. It can be imported in the root module of the application in order for touch interactions to work as expected.**.

```typescript
// app.module.ts

import { HammerModule } from '@angular/platform-browser';
import { IgxSliderModule } from 'igniteui-angular/slider';
// import { IgxSliderModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxSliderModule, HammerModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxSliderComponent` as a standalone dependency, or use the [`IGX_SLIDER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/slider/src/slider/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { FormsModule } from '@angular/forms';
import { IGX_SLIDER_DIRECTIVES } from 'igniteui-angular/slider';
// import { IGX_SLIDER_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-slider [minValue]="0" [maxValue]="100" [step]="10" [(ngModel)]="task.completion"></igx-slider>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_SLIDER_DIRECTIVES, FormsModule]
    /* or imports: [IgxSliderComponent, FormsModule] */
})
export class HomeComponent {
    public task: Task;
}
```

When using standalone components, [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) should be imported in the `app.config` file.

```typescript
//app.config.ts

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { HammerModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HammerModule),
    provideRouter(appRoutes)
  ],
};
```

Now that you have the Ignite UI for Angular Slider module or directives imported, you can start using the `igx-slider` component.

## Using the Angular Slider

### Discrete Slider

By default, the Slider Component is set to discrete type. A discrete slider provides a visualization of the current value with a numeric label (bubble). The bubble can be shown upon hovering on the slider thumb.  
You can also use the slider with predefined steps to track only meaningful values for the user.  

In the following example, we define a discrete slider that displays values from 0% to 100% and the [`step`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#step) is set to 10% per increment/decrement.  
We also bind the slider [`value`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#value) to a property in our component called "completion", using Angular [`ngModel`](https://angular.io/guide/built-in-directives#ngModel), to allow two way binding with an input component.

```html
<!--sample.component.html-->

<igx-slider [minValue]="0" [maxValue]="100" [step]="10" [(ngModel)]="task.completion"></igx-slider>
<igx-input-group type="border">
    <input igxInput id="percentInput" type="number" [(ngModel)]="task.completion" />
    <label igxLabel for="percentInput">Task Completion</label>
    <igx-suffix>%</igx-suffix>
</igx-input-group>
```

```typescript
// sample.component.ts 
import { Component, ViewChild } from '@angular/core';
import { IgxInputDirective } from 'igniteui-angular/input-group';
import { IgxSliderComponent } from 'igniteui-angular/slider';
// import { IgxInputDirective, IgxSliderComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-sample',
    styleUrls: ['./sample.component.scss'],
    templateUrl: './sample.component.html'
})
export class SampleComponent {
    public task = {
        completion: 10
    };

    constructor() { }
}
```

We should now see two-way data binding between our two components.


```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxSliderComponent } from 'igniteui-angular/slider';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-slider-sample-3',
    styleUrls: ['./slider-sample-3.component.scss'],
    templateUrl: './slider-sample-3.component.html',
    imports: [IgxSliderComponent, FormsModule, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective, IgxSuffixDirective]
})
export class SliderSample3Component {
    @ViewChild(IgxInputDirective, { static: true })
    public input: IgxInputDirective;

    @ViewChild(IgxSliderComponent, { static: true })
    public slider: IgxSliderComponent;

    public task = {
        completion: 10
    };

    constructor() { }
}
```
```html
<div class="sample-center">
    <div class="container">
        <igx-slider [step]="10" [(ngModel)]="task.completion"></igx-slider>
        <igx-input-group type="border">
            <input igxInput id="percentInput" type="number" min="0" max="100" step="10" [(ngModel)]="task.completion" />
            <label igxLabel for="percentInput">Task Completion</label>
            <igx-suffix>%</igx-suffix>
        </igx-input-group>
    </div>
</div>
```
```scss
.container {
    display: flex;
    flex-direction: column;
    padding: 16px;
    max-width: 300px;
    width: 100%;
}

.sample-center {
    display: flex;
    align-items: center;
    height: 100%;
}
```


### Continuous Slider

First, specify the slider type by setting the [`continuous`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#continuous) input to true. Next, define the minimum and maximum values using [`minValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#minValue) and [`maxValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#maxValue).  

> [!NOTE]
> Continuous slider doesn't have step indicators over the track and visible thumb labels during interaction.

```html
<!--sample.component.html-->

<igx-slider 
    id="slider" 
    [minValue]="0" 
    [maxValue]="100" 
    [continuous]=true 
    [(ngModel)]="volume">
    </igx-slider>
<label igxLabel for="slider">Volume: {{volume}}</label>
```

Lets also bind the slider [`value`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#value) to a property in our component called "volume".

```typescript
// sample.component.ts 

// Set an initial value
public volume = 20;
```

If the sample is configured properly, dragging the slider thumb should update the label below and the slider value should be limited between the specified minimum and maximum values:


```typescript
import { Component, OnInit } from '@angular/core';
import { IgxSliderComponent } from 'igniteui-angular/slider';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-slider-sample-2',
    styleUrls: ['./slider-sample-2.component.scss'],
    templateUrl: './slider-sample-2.component.html',
    imports: [IgxSliderComponent, FormsModule]
})
export class SliderSample2Component implements OnInit {
  public volume = 20;
  public alert = '';
  constructor() { }

  public ngOnInit() {
      if (this.volume <= 10) {
          this.alert = 'min value';
      } else if (this.volume >= 90) {
          this.alert = 'max value';
      }
  }
}
```
```html
<div class="container">
    <igx-slider id="slider" [minValue]="10" [maxValue]="90" [continuous]="true" [(ngModel)]="volume" ></igx-slider>
    <p>Volume: {{volume}} <span>{{alert}}</span></p>
</div>
```
```scss
.container {
    margin: 30px 20px;
}
```


### Range Slider

First, set the slider [`type`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#type) to [`RANGE`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/slidertype.html#range). Next, we bind the slider value to an object with properties for `lower` and `upper` values.

```html
<!--sample.component.html-->

<igx-slider 
    [type]="sliderType.RANGE" 
    [minValue]="0" 
    [maxValue]="1000" 
    [(lowerValue)]="priceRange.lower"
    [(upperValue)]="priceRange.upper">
</igx-slider>

<igx-input-group type="border">
    <label igxLabel for="lowerRange">From</label>
    <igx-prefix>$</igx-prefix>
    <input igxInput id="lowerRange" type="number" [(ngModel)]="priceRange.lower" />
</igx-input-group>

<igx-input-group type="border">
    <label igxLabel for="upperRange">To</label>
    <igx-prefix>$</igx-prefix>
    <input igxInput id="upperRange" type="number" [(ngModel)]="priceRange.upper" />
</igx-input-group>
```

```typescript
// sample.component.ts
import { Component } from '@angular/core';
import { IgxSliderType } from 'igniteui-angular/slider';
// import { IgxSliderType } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-sample',
  styleUrls: ['./sample.component.scss'],
  templateUrl: './sample.component.html'
})
export class SampleComponent {
  public sliderType = IgxSliderType;
  public priceRange = {
      lower: 200,
      upper: 800
  };

  constructor() { }
}
```


```typescript
import { Component } from '@angular/core';
import { IgxSliderComponent, IgxSliderType } from 'igniteui-angular/slider';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective } from 'igniteui-angular/input-group';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-slider-sample-4',
    styleUrls: ['./slider-sample-4.component.scss'],
    templateUrl: './slider-sample-4.component.html',
    imports: [IgxSliderComponent, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective, FormsModule, IgxInputDirective]
})
export class SliderSample4Component {
  public sliderType = IgxSliderType;
  public priceRange = {
      lower: 200,
      upper: 800
  };

  constructor() { }
}
```
```html
<div class="container">
    <igx-slider id="slider" [type]="sliderType.RANGE" [minValue]="0" [maxValue]="1000" [(lowerValue)]="priceRange.lower" [(upperValue)]="priceRange.upper"></igx-slider>

    <div class="row-container">
        <igx-input-group type="border">
            <label igxLabel for="lowerRange">Lowest price (updates on blur):</label>
            <igx-prefix>$</igx-prefix>
            <input igxInput id="lowerRange" type="number" min="0" [max]="priceRange.upper" [(ngModel)]="priceRange.lower" [ngModelOptions]="{ updateOn: 'blur' }" />
        </igx-input-group>

        <igx-input-group type="border">
            <label igxLabel for="upperRange">Highest price (updates on blur):</label>
            <igx-prefix>$</igx-prefix>
            <input igxInput id="upperRange" type="number" [min]="priceRange.lower" max="1000" [(ngModel)]="priceRange.upper" [ngModelOptions]="{ updateOn: 'blur' }" />
        </igx-input-group>
    </div>
</div>
```
```scss
.container {
    margin: 55px 20px;
    min-width: 200px;
}

.row-container {
    display: grid;
    column-gap: 12px;
    grid-template-columns: 50% 50%;
}
```

>[!NOTE]
> When using a slider of type RANGE, binding to `ngModel` will work only in the direction of updating the model from the slider. In order to use two-way binding for both values, you can take advantage of the `lowerValue` and `upperValue` bindings.

In some cases, values near to the minimum and maximum are not appropriate. You can further provide a useful range to limit the user choice along with setting [`minValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#minValue) and [`maxValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#maxValue).
This can be done by setting [`lowerBound`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#lowerBound) and [`upperBound`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#upperBound). Now, the user will not be able to move the thumb in the range of 0 to 100 and in the range of 900 to 1000.

```html
<!--sample.component.html-->

<igx-slider 
    [type]="sliderType.RANGE" 
    [minValue]="0" 
    [maxValue]="1000"
    [(lowerValue)]="priceRange.lower"
    [(upperValue)]="priceRange.upper"
    [lowerBound]="100" 
    [upperBound]="900">
</igx-slider>
```


```typescript
import { Component } from '@angular/core';
import { IgxSliderComponent, IgxSliderType } from 'igniteui-angular/slider';

@Component({
    selector: 'app-slider-sample-5',
    styleUrls: ['./slider-sample-5.component.scss'],
    templateUrl: './slider-sample-5.component.html',
    imports: [IgxSliderComponent]
})
export class SliderSample5Component {
  public sliderType = IgxSliderType;
  public priceRange = {
      lower: 200,
      upper: 800
  };

  constructor() { }
}
```
```html
<div class="container">
  <igx-slider id="slider"
              [type]="sliderType.RANGE"
              [minValue]="0"
              [maxValue]="1000"
              [(lowerValue)]="priceRange.lower"
              [(upperValue)]="priceRange.upper"
              [lowerBound]="100"
              [upperBound]="900">
  </igx-slider>
</div>
```
```scss
.container {
    margin: 55px 20px;
    min-width: 200px;
}
```


### Labels mode

We've seen only numbers in the thumbs so far, although there is another approach that you could use in order to present information - by using an array of primitive values.
>[!NOTE]
> Your array of primitive values should contains at least two values, otherwise `labelsView` won't be enabled.

Once we have the definition that corresponds to the preceding rule, we are ready to give it to the `labels` **input** property, which would handle our data by spreading it equally over the `track`. Now, label values represent every primitive value we've defined in our collection. They could be accessed at any time through the API by requesting either [lowerLabel](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#lowerLabel) or [upperLabel](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#upperLabel).

>[!NOTE]
> Please take into account the fact that when [`labelsView`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#labelsView) is enabled, your control over the [`maxValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#maxValue), [`minValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#minValue) and [`step`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#step) inputs will be taken.

Another important factor is the way that the `slider` handles the update process when `labelsView` is enabled.
It simply operates with the `index(es)` of the collection, which respectively means that the `value`, `lowerBound` and `upperBound` **properties** control the `track` by following/setting them (`index(es)`).

```html
<!--sample.component.html-->
<igx-slider #slider3 [type]="sliderType" [labels]="labels" [lowerBound]="1" [upperBound]="5">
    <ng-template igxSliderThumbFrom let-value let-labels="labels">
        <span class="ellipsis">{{ labels[value.lower] }}</span>
    </ng-template>
    <ng-template igxSliderThumbTo let-value let-labels="labels">
        <span class="ellipsis">{{ labels[value.upper] }}</span>
    </ng-template>
</igx-slider>
```

```typescript
// sample.component.ts
public sliderType: SliderType = SliderType.RANGE;
public labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
```


```typescript
import { Component } from '@angular/core';
import { IgxSliderComponent, IgxSliderType, IgxThumbFromTemplateDirective, IgxThumbToTemplateDirective } from 'igniteui-angular/slider';

@Component({
    selector: 'app-slider-sample-6',
    styleUrls: ['./slider-sample-6.component.scss'],
    templateUrl: './slider-sample-6.component.html',
    imports: [IgxSliderComponent, IgxThumbFromTemplateDirective, IgxThumbToTemplateDirective]
})
export class SliderSample6Component {
    public type: IgxSliderType = IgxSliderType.RANGE;

    public labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
}
```
```html
<div class="container">
    <igx-slider [labels]="labels" [type]="type" [lowerBound]="1" [upperBound]="5">
        <ng-template igxSliderThumbFrom let-value let-labels="labels">
            <span class="ellipsis"> {{ labels[value.lower] }} </span>
        </ng-template>
        <ng-template igxSliderThumbTo let-value let-labels="labels">
            <span class="ellipsis"> {{ labels[value.upper] }} </span>
        </ng-template>
    </igx-slider>
</div>
```
```scss
.container {
    margin: 55px 20px;
    min-width: 200px;
}
```


As we see from the sample above, setting `boundaries` is still a valid operation. Addressing [`lowerBound`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#lowerbound) and [`upperBound`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#upperbound), limits the range you can slide through.

### Labels templating

During the showcase above, we've intentionally shown how we can provide our custom `label` template, by using both  [igxSliderThumbFrom](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igxSliderThumbFrom.html) and [igxSliderThumbTo](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igxSliderThumbTo.html) directives. Intuitively we can assume that [igxSliderThumbFrom](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igxSliderThumbFrom.html) corresponds to the  [lowerLabel](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#lowerLabel) and [igxSliderThumbTo](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/igxSliderThumbTo.html) to the [upperLabel](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#upperLabel). <br>
The [context](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#context) here gives us implicitly a reference to the `value` **input** property and explicitly a reference to the `labels` **input** if `labelsView` is enabled.

```html
  <ng-template igxSliderThumbFrom let-value let-labels="labels">
    <span class="ellipsis">{{ labels[value.lower] }}</span>
  </ng-template>
  <ng-template igxSliderThumbTo let-value let-labels="labels">
      <span class="ellipsis">{{ labels[value.upper] }}</span>
  </ng-template>
```

## Slider Tick Marks & labels

**Slider tick marks**, provide a new and more appealing way for data visualization, like a particular timeframe, days of the week and more. With this new functionality, the users are not obliged to interact with the Angular Slider in order to see what data range is being represented. It is extremely flexible, with regards to the control over positioning and orientation of the **tick marks** and **tick labels**. The **ticks** can be turned **on/off**, as well as can be toggled between **primary**, **secondary** or **both**. In addition, this feature provides a way to turn **on/of** **primary**, **secondary** **tick labels** or both. **Tick labels** can change their rotation form **horizontal** to **vertical** (**top to bottom** (90) or **bottom to top** (-90)).

### Enable ticks

We can enable the **ticks** of the slider by setting the [`showTicks`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#showTicks) to **true**.
Use [`primaryTicks`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#primaryTicks) to set the number of primary ticks.  
Use [`SecondaryTicks`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#secondaryTicks) to set the number of secondary ticks.

```html
<!--sample.component.html-->

<igx-slider 
    id="slider" 
    [maxValue]="100" 
    [step]="10"
    [showTicks]="true" 
    [primaryTicks]="3" 
    [secondaryTicks]="4">
</igx-slider>
```

```typescript
// sample.component.ts 

// Change slider type initial value
public type = SliderType.RANGE;
```


```typescript
import { Component } from '@angular/core';
import { IgxSliderComponent, IgxSliderType } from 'igniteui-angular/slider';

@Component({
    selector: 'app-discrete-slider-bottom-ticks',
    styleUrls: ['./discrete-slider-ticks-bottom.component.scss'],
    templateUrl: './discrete-slider-ticks-bottom.component.html',
    imports: [IgxSliderComponent]
})
export class SliderDiscreteTicksBottomComponent {
    public type: IgxSliderType = IgxSliderType.RANGE;
}
```
```html
<div class="container">
    <igx-slider [maxValue]="100" [primaryTicks]="3" [secondaryTicks]="4" [showTicks]="true" [step]="5"></igx-slider>
</div>
```
```scss
.container {
    margin: 55px 20px;
}
```


### Labels orientation and visibility

In the following sample we disable all **secondary labels** by setting [`secondaryTickLabels`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#secondaryTickLabels) to **false**.  

```html
<igx-slider
    [step]="10"
    [type]="type"
    [maxValue]="100"
    [continuous]="true"
    [showTicks]="true"
    [primaryTicks]="3"
    [secondaryTicks]="4"
    [secondaryTickLabels]="false"
    [tickLabelsOrientation]="labelsOrientation">
</igx-slider>
```

We also rotate all viable labels by setting the [`TickLabelsOrientation`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/ticklabelsorientation.html#range) to [`BottomToTop`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/ticklabelsorientation.html)

```
```typescript
... 
{
    public type = SliderType.RANGE:
    public labelsOrientation = TickLabelsOrientation.BottomToTop;
}
...
```


```typescript
import { Component } from '@angular/core';
import { IgxSliderComponent, IgxSliderType, TickLabelsOrientation } from 'igniteui-angular/slider';

@Component({
    selector: 'app-slider-ticks-bottomtotop-labels',
    styleUrls: ['./slider-ticks-bottomtotop-labels.component.scss'],
    templateUrl: './slider-ticks-bottomtotop-labels.component.html',
    imports: [IgxSliderComponent]
})
export class SliderTicksBottomtotopLabelsComponent {
    public type: IgxSliderType = IgxSliderType.RANGE;
    public labelsOrientation = TickLabelsOrientation.BottomToTop;
}

export class PriceRange {}
```
```html
<div class="container">
    <igx-slider
        [step]="10"
        [type]="type"
        [maxValue]="100"
        [continuous]="true"
        [showTicks]="true"
        [primaryTicks]="3"
        [secondaryTicks]="4"
        [secondaryTickLabels]="false"
        [tickLabelsOrientation]="labelsOrientation">
    </igx-slider>
</div>
```
```scss
.container {
    margin: 55px 20px;
}

.wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}
```


### Ticks position

Let’s move on and see how to change the position of the **ticks**.

```html
<div class="slider-container">
    <igx-slider
        [maxValue]="20"
        [showTicks]="true"
        [secondaryTicks]="21"
        [primaryTickLabels]="false"
        [ticksOrientation]="ticksOrientation">
    </igx-slider>
</div>
```

The position change has come from the [`ticksOrientation`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#ticksOrientation) input, which is changed from **Bottom**(default) to **Mirror**.
This mirrors the visualization of the **ticks** and displays them above and below the slider.

```typescript

  // The available options are: Top, Bottom and Mirror
  public ticksOrientation = TicksOrientation.Mirror;
```


```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxSliderComponent, TicksOrientation } from 'igniteui-angular/slider';

@Component({
    selector: 'app-slider-bottom-ticks',
    styleUrls: ['./slider-secondary-ticks-mirror.component.scss'],
    templateUrl: './slider-secondary-ticks-mirror.component.html',
    imports: [IgxSliderComponent]
})
export class SliderSecondaryTicksMirrorComponent {
    @ViewChild(IgxSliderComponent, { static: true })
    public slider: IgxSliderComponent;
    public ticksOrientation = TicksOrientation.Mirror;
}
```
```html
<div class="container">
    <igx-slider
        [maxValue]="20"
        [showTicks]="true"
        [secondaryTicks]="21"
        [primaryTickLabels]="false"
        [ticksOrientation]="ticksOrientation">
    </igx-slider>
</div>
```
```scss
.container {
    margin: 55px 20px;
}
```


> [!NOTE]
>
### Orientation

> When the [`ticksOrientation`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#ticksOrientation) is set to **Top** or **Mirror** and there are visible **tick labels** the **thumb label** is hidden intentionally. This prevents a bad user experience and overlapping between the two labels.

### Slider ticks with labels view

This example show how the tick labels and the thumb label works together.

```html
<igx-slider
    [labels]="labels"
    [showTicks]="true"
    [secondaryTicks]="3"
></igx-slider>
```

```typescript
  public type: SliderType = SliderType.RANGE;
  public labels = ["04:00", "08:00", "12:00", "16:00", "20:00", "00:00"];
```


```typescript
import { Component } from '@angular/core';
import { IgxSliderComponent, IgxSliderType } from 'igniteui-angular/slider';

@Component({
    selector: 'app-slider-timeframe',
    styleUrls: ['./slider-timeframe.component.scss'],
    templateUrl: './slider-timeframe.component.html',
    imports: [IgxSliderComponent]
})
export class SliderTimeframeComponent {
    public type: IgxSliderType = IgxSliderType.RANGE;
    public labels = ['04:00', '08:00', '12:00', '16:00', '20:00', '00:00'];
}
```
```html
<div class="container">
    <igx-slider
        [labels]="labels"
        [showTicks]="true"
        [secondaryTicks]="3"
    ></igx-slider>
</div>
```
```scss
.container {
    margin: 55px 20px;
}
```


Here, the [`primaryTicks`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#primaryTicks) input has not been set, because it won’t be reflected in any way. The **length** of the collection takes precedence over it. This does not mean that [`secondaryTicks`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#secondaryTicks) cannot be set. All **secondary ticks** will be empty (without any **labels**).

### Template labels

Lastly, we will see how we can provide a custom template for the **tick labels** and what the [`template context`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtickscomponent.html#context) provides.

```html
<igx-slider
    [showTicks]="true"
    [primaryTicks]="3"
    [secondaryTicks]="3">
    <ng-template igxSliderTickLabel let-value let-primary="isPrimary" let-idx="index">
        {{ tickLabel(value, primary, idx) }}
    </ng-template>
</igx-slider>
```

Applying [`IgxTickLabelTemplateDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxticklabeltemplatedirective.html) to the `ng-template` assigns the template over all **tick labels**.

> [!NOTE]
> The [`context`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtickscomponent.html#context) executes per each tick.

Which means that it provides a reference to:

- each corresponding tick **value**
- If that tick is **primary**.
- **tick** index.
- And the [`labels`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html#labels) collection if we have such one.

```typescript
  public tickLabel(value, primary, index) {
      if (primary) {
          return Math.round(value);
      }

      return value;
  }
```

In the **tickLabel** callback above, we are rounding the **value** of every **primary** tick.


```typescript
import { Component } from '@angular/core';
import { IgxSliderComponent, IgxTickLabelTemplateDirective } from 'igniteui-angular/slider';

@Component({
    selector: 'app-tick-labels-template',
    styleUrls: ['./tick-labels-template.component.scss'],
    templateUrl: './tick-labels-template.component.html',
    imports: [IgxSliderComponent, IgxTickLabelTemplateDirective]
})
export class TickLabelsTemplateComponent {
    public tickLabel(value, primary, index) {
        if (primary) {
            return Math.round(value);
        }

        return value;
    }
}
```
```html
<div class="container">
    <igx-slider #slider4
                [step]="5"
                [showTicks]="true"
                [primaryTicks]="3"
                [secondaryTicks]="4">
        <ng-template igxSliderTickLabel let-value let-primary="isPrimary" let-idx="index">
            {{ tickLabel(value, primary, idx) }}
        </ng-template>
    </igx-slider>
</div>
```
```scss
.container {
    margin: 55px 20px;
}
```

## Styling

### Slider Theme Property Map

When you modify a primary property, all related dependent properties are automatically updated to reflect the change:

<div class="theme-switcher-wrapper">
  <input type="radio" name="theme" id="material" checked>
  <label for="material" class="switch-label">Material</label>
  <input type="radio" name="theme" id="fluent">
  <label for="fluent" class="switch-label">Fluent</label>
  <input type="radio" name="theme" id="bootstrap">
  <label for="bootstrap" class="switch-label">Bootstrap</label>
  <input type="radio" name="theme" id="indigo">
  <label for="indigo" class="switch-label">Indigo</label>

  <div class="tables">
    <!-- Material Theme Table -->
    <div class="theme-table material">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-color</strong></summary></details></td>
            <td>$thumb-color</td>
            <td>The color of the thumb.</td>
          </tr>
          <tr class="dependent"><td></td><td>$base-track-color</td><td>The base background color of the track.</td></tr>
          <tr class="dependent"><td></td><td>$track-hover-color</td><td>The color of the track on hover.</td></tr>
          <tr class="dependent"><td></td><td>$disabled-fill-track-color</td><td>The base fill track color when disabled.</td></tr>
          <tr class="dependent"><td></td><td>$label-background-color</td><td>The background color of the bubble label.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$thumb-color</strong></summary></details></td>
            <td>$track-color</td>
            <td>The color of the track</td>
          </tr>
          <tr class="dependent"><td></td><td>$disabled-thumb-color</td><td>The thumb color when it is disabled.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$base-track-color</strong></summary></details></td>
            <td>$base-track-hover-color</td>
            <td>The base track color on hover.</td>
          </tr>
          <tr class="dependent"><td></td><td>$track-step-color</td><td>The color of the track steps.</td></tr>
          <tr class="dependent"><td></td><td>$disabled-base-track-color</td><td>The base track color when disabled.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="theme-table fluent">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$thumb-border-color</strong></summary></details></td>
            <td>$track-color</td>
            <td>The color of the track</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-border-hover-color</td><td>The thumb border color when hovered.</td></tr>
          <tr class="dependent"><td></td><td>$thumb-focus-color</td><td>The focus color of the thumb.</td></tr>
          <tr class="dependent"><td></td><td>$thumb-disabled-border-color</td><td>The thumb border color when disabled.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-color</strong></summary></details></td>
            <td>$thumb-border-color</td>
            <td>The thumb border color</td>
          </tr>
           <tr class="dependent"><td></td><td>$track-hover-color</td><td>The color of the track on hover.</td></tr>
          <tr class="dependent"><td></td><td>$disabled-fill-track-color</td><td>The base fill track color when disabled.</td></tr>
          <tr class="dependent"><td></td><td>$label-background-color</td><td>The background color of the bubble label.</td></tr>
          <tr class="dependent"><td></td><td>$label-text-color</td><td>The text color of the bubble label.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$base-track-color</strong></summary></details></td>
            <td>$base-track-hover-color</td>
            <td>The base track color on hover.</td>
          </tr>
          <tr class="dependent"><td></td><td>$track-step-color</td><td>The color of the track steps.</td></tr>
          <tr class="dependent"><td></td><td>$disabled-base-track-color</td><td>The base track color when disabled.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="theme-table bootstrap">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$thumb-color</strong></summary></details></td>
            <td>$thumb-border-color</td>
            <td>The thumb border color.</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-focus-color</td><td>The focus color of the thumb.</td></tr>
          <tr class="dependent"><td></td><td>$track-color</td><td>The color of the track.</td></tr>
          <tr class="dependent"><td></td><td>$label-background-color</td><td>The background color of the bubble label.</td></tr>
          <tr class="dependent"><td></td><td>$label-text-color</td><td>The text color of the bubble label.</td></tr>
          <tr class="dependent"><td></td><td>$disabled-thumb-color</td><td>The thumb color when it is disabled.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-color</strong></summary></details></td>
            <td>$track-hover-color</td>
            <td>The color of the track on hover.</td>
          </tr>
          <tr class="dependent"><td></td><td>$disabled-fill-track-color</td><td>The fill track color when disabled.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$base-track-color</strong></summary></details></td>
            <td>$base-track-hover-color</td>
            <td>The base track color on hover.</td>
          </tr>
          <tr class="dependent"><td></td><td>$track-step-color</td><td>The color of the track steps.</td></tr>
          <tr class="dependent"><td></td><td>$disabled-base-track-color</td><td>The base track color when disabled.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="theme-table indigo">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$thumb-border-color</strong></summary></details></td>
            <td>$track-color</td>
            <td>The color of the track.</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-border-hover-color</td><td>The thumb border color when hovered.</td></tr>
          <tr class="dependent"><td></td><td>$thumb-focus-color</td><td>The focus color of the thumb.</td></tr>
          <tr class="dependent"><td></td><td>$thumb-disabled-border-color</td><td>The thumb border color when disabled.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-color</strong></summary></details></td>
            <td>$thumb-border-color</td>
            <td>The thumb border color.</td>
          </tr>
          <tr class="dependent"><td></td><td>$track-hover-color</td><td>The color of the track on hover.</td></tr>
          <tr class="dependent"><td></td><td>$disabled-fill-track-color</td><td>The base fill track color when disabled.</td></tr>
          <tr class="dependent"><td></td><td>$label-background-color</td><td>The background color of the bubble label.</td></tr>
          <tr class="dependent"><td></td><td>$label-text-color</td><td>The text color of the bubble label.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$base-track-color</strong></summary></details></td>
            <td>$base-track-hover-color</td>
            <td>The base track color on hover.</td>
          </tr>
          <tr class="dependent"><td></td><td>$track-step-color</td><td>The color of the track steps.</td></tr>
          <tr class="dependent"><td></td><td>$disabled-base-track-color</td><td>The base track color when disabled.</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

To customize the Slider, you first need to import the `index` file, where all styling functions and mixins are located.

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Next, we have to create a new theme that extends the `slider-theme` and pass the parameters which we'd like to change. By providing just the `$track-color` or `$thumb-color` parameter, the theme will automatically generate all related colors for the track and thumb, and their various interaction states.

You can also override additional properties, such as tick colors and labels, for more precise control.

```scss
$custom-slider-theme: slider-theme(
  $thumb-color: #ff7400,
  $tick-label-color: #b246c2,
  $tick-color: #b246c2
);
```

The last step is to include the newly created component theme in our application.

```scss
:host {
  @include tokens($custom-slider-theme);
}
```

### Demo

This is the final result from applying our new theme.

```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxSliderComponent, TicksOrientation } from 'igniteui-angular/slider';

@Component({
    selector: 'app-slider-styling',
    styleUrls: ['./app-slider-styling.component.scss'],
    templateUrl: './app-slider-styling.component.html',
    imports: [IgxSliderComponent]
})
export class AppSliderStylingComponent {
    @ViewChild(IgxSliderComponent, { static: true })
    public slider: IgxSliderComponent;
    public ticksOrientation = TicksOrientation.Mirror;
}
```
```html
<div class="container">
    <igx-slider
        [step]="10"
        [maxValue]="100"
        [showTicks]="true"
        [primaryTicks]="3"
        [secondaryTicks]="4"
        [ticksOrientation]="ticksOrientation">
    </igx-slider>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-slider-theme: slider-theme(
  $track-color: #ff7400,
  $tick-label-color: #b246c2,
  $tick-color: #b246c2
);

:host {
    @include tokens($custom-slider-theme);
}
```

### Styling with Tailwind

You can style the `slider` using our custom Tailwind utility classes. Make sure to [set up Tailwind](../themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-slider`, `dark-slider`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [IgxSlider Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-slider-theme). The syntax is as follows:

```html
<igx-slider
class="!light-slider ![--thumb-color:#7B9E89]"
>
</igx-slider>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your slider should look like this:

<div class="sample-container loading" style="height:100px">
    <iframe id="slider-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/interactions/slider-tailwind-styling-sample/' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## API References

<div class="divider--half"></div>

- [IgxSliderComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxslidercomponent.html)
- [IgxSliderComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-slider-theme)
- [SliderType](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/variables/IgxSliderType-1.html)
- [IRangeSliderValue](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/irangeslidervalue.html)
- [TicksOrientation](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxSliderComponent.html#ticksOrientation)
- [TickLabelsOrientation](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/IgxSliderComponent.html#tickLabelsOrientation)

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

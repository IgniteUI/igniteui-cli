---
title: Angular Linear Progress Component - MIT license 
_description: Display a progress bar and customize its appearance with endless color and striping options with Ignite UI for Angular Linear Progress Bar component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library, Angular Linear Progress component, Angular Linear Progress control
_license: MIT
_tocName: Linear Progress
---

# Angular Linear Progress Component Overview

<p class="highlight">The Ignite UI for Angular Linear Progress Bar Indicator component provides a visual indicator of an application’s process as it changes. The indicator updates its appearance as its state changes. The indicator can be styled with a choice of colors in stripes or solids.</p>

## Angular Linear Progress Example

```typescript
import { Component } from '@angular/core';
import { IgxLinearProgressBarComponent } from 'igniteui-angular/progressbar';

@Component({
    selector: 'app-linear-progressbar',
    styleUrls: ['./linear-progressbar.component.scss'],
    templateUrl: './linear-progressbar.component.html',
    imports: [IgxLinearProgressBarComponent]
})
export class LinearProgressbarComponent { }
```
```html
<igx-linear-bar [value]="100"></igx-linear-bar>
```
```scss
igx-linear-bar {
    margin-top: 20px;
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Linear Progress

To get started with the Ignite UI for Angular Linear Progress component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxProgressBarModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxProgressBarModule } from 'igniteui-angular/progressbar';
// import { IgxProgressBarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxProgressBarModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxLinearProgressBarComponent` as a standalone dependency, or use the [`IGX_LINEAR_PROGRESS_BAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/progressbar/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_LINEAR_PROGRESS_BAR_DIRECTIVES } from 'igniteui-angular/progressbar';
// import { IGX_LINEAR_PROGRESS_BAR_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: '<igx-linear-bar [value]="progress"></igx-linear-bar>',
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IGX_LINEAR_PROGRESS_BAR_DIRECTIVES],
  /* or imports: [IgxLinearProgressBarComponent] */
})
export class HomeComponent {
  public progress = 50;
}
```

Now that you have the Ignite UI for Angular Progress Bar module or directives imported, you can start using the `igx-linear-bar` component.

## Using the Angular Linear Progress

To have a better understanding of how everything works, let's create a simple example, like the one in the demo:

```html
<igx-linear-bar [value]="100"></igx-linear-bar>
```

After that, you should see the demo sample in your browser.

### Progress Types

You can set the type of your bar, using the [`type`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlinearprogressbarcomponent.html#type) attribute. There are five types of linear progress bars - `default`, `error`, `success`, `info`, and `warning`.

### Striped Progress

You can make the bar striped, using the [`striped`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlinearprogressbarcomponent.html#type) property and by setting it to `true`.

Let's see how we can create different types of progress bars that can be both striped or not.

```html
<div class="linear-container">
  <igx-linear-bar [value]="100" type="default"></igx-linear-bar>
  <igx-linear-bar [value]="100" type="success" [striped]="true"></igx-linear-bar>
  <igx-linear-bar [value]="100" type="error"></igx-linear-bar>
  <igx-linear-bar [value]="100" type="info" [striped]="true"></igx-linear-bar>
  <igx-linear-bar [value]="100" type="warning"></igx-linear-bar>
</div>
```

So if we set up everything correctly, you should see the following in your browser:

```typescript
import { Component } from '@angular/core';
import { IgxLinearProgressBarComponent } from 'igniteui-angular/progressbar';

@Component({
    selector: 'app-linear-progressbar-sample-1',
    styleUrls: ['./linear-progressbar-sample-1.component.scss'],
    templateUrl: './linear-progressbar-sample-1.component.html',
    imports: [IgxLinearProgressBarComponent]
})
export class LinearProgressbarSample1Component {}
```
```html
<div class="linear-container">
    <igx-linear-bar [value]="100" type="default"></igx-linear-bar>
    <igx-linear-bar [value]="100" type="success" [striped]="true"></igx-linear-bar>
    <igx-linear-bar [value]="100" type="error"></igx-linear-bar>
    <igx-linear-bar [value]="100" type="info" [striped]="true"></igx-linear-bar>
    <igx-linear-bar [value]="100" type="warning"></igx-linear-bar>
</div>
```
```scss
.linear-container {
    margin-top: 20px;
}
```

<div class="divider--half"></div>

### Indeterminate Progress

If you want to track a process that is not determined precisely, you can set the [`indeterminate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcircularprogressbarcomponent.html#indeterminate) input property to `true`.

### Animation Duration

The [`animationDuration`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcircularprogressbarcomponent.html#animationDuration) input property is used to specify how long the animation cycle should take.

The following example specifies the animation duration set to 5 seconds.

```html
<igx-linear-bar [striped]="false" [value]="100" [animationDuration]="5000"></igx-linear-bar>
```

### Text Properties

You can align the text, using the [`textAlign`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlinearprogressbarcomponent.html#textAlign) property. Permitted values are `left`, `center`, and `right`.

To hide the text, use the [`textVisibility`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlinearprogressbarcomponent.html#textVisibility) property and set its value to `false`.

Set the [`textTop`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlinearprogressbarcomponent.html#textTop) property to `true` to move the text above the bar.

The [`text`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlinearprogressbarcomponent.html#text) property can be used to customize the value of the text itself.

Let's update our previous sample by using the aforementioned text properties. We will also throw an indeterminate progress bar in the mix.

```html
<div class="linear-container">
  <igx-linear-bar type="default" [value]="100"></igx-linear-bar>
  <igx-linear-bar
    type="success"
    [value]="100"
    class="indeterminate"
    [indeterminate]="true"
    [striped]="true"
  ></igx-linear-bar>
  <igx-linear-bar
    type="error"
    [value]="100"
    [textAlign]="positionEnd"
    [text]="'Custom text'"
  ></igx-linear-bar>
  <igx-linear-bar
    type="info"
    [value]="100"
    [textVisibility]="false"
    [striped]="true"
  ></igx-linear-bar>
  <igx-linear-bar
    type="warning"
    [value]="100"
    [textTop]="true"
  ></igx-linear-bar>
</div>
```

And do not forget to import the [`IgxTextAlign`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/igxtextalign.html) enumerator in your component if you're using the `textAlign` property.

```typescript
import { ..., IgxTextAlign } from 'igniteui-angular/progressbar';
// import { ..., IgxTextAlign } from '@infragistics/igniteui-angular'; for licensed package
...

public positionCenter: IgxTextAlign = IgxTextAlign.CENTER;
public positionEnd: IgxTextAlign = IgxTextAlign.END;
```

Let's take a look at how this turned out:

```typescript
import { Component } from '@angular/core';
import { IgxLinearProgressBarComponent, IgxTextAlign } from 'igniteui-angular/progressbar';

@Component({
    selector: 'app-linear-progressbar-sample-2',
    styleUrls: ['./linear-progressbar-sample-2.component.scss'],
    templateUrl: './linear-progressbar-sample-2.component.html',
    imports: [IgxLinearProgressBarComponent]
})
export class LinearProgressbarSample2Component {

  public positionCenter: IgxTextAlign = IgxTextAlign.CENTER;
  public positionEnd: IgxTextAlign = IgxTextAlign.END;
}
```
```html
<div class="linear-container">
    <igx-linear-bar
        type="default"
        [value]="100"
    ></igx-linear-bar>
    <igx-linear-bar
        type="success"
        [value]="100"
        class="indeterminate"
        [indeterminate]="true"
        [striped]="true"
    ></igx-linear-bar>
    <igx-linear-bar
        type="error"
        [value]="100"
        [textAlign]="positionEnd"
        [text]="'Custom text'"
    ></igx-linear-bar>
    <igx-linear-bar
        type="info"
        [value]="100"
        [textVisibility]="false"
        [striped]="true"
    ></igx-linear-bar>
    <igx-linear-bar
        type="warning"
        [value]="100"
        [textTop]="true"
    ></igx-linear-bar>
</div>
```
```scss
.linear-container {
    margin-top: 20px;
}

.indeterminate {
    margin-bottom: 20px;
}
```

<div class="divider--half"></div>

> [!NOTE]
> If the [`step`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlinearprogressbarcomponent.html#step) input value is not defined, the progress update is **1% of the [`max`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlinearprogressbarcomponent.html#max) value**. In case you want the progress to be faster, the [`step`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlinearprogressbarcomponent.html#step) value should be greater than (**[`max`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlinearprogressbarcomponent.html#max) * 1%**), respectfully for slower progress the [`step`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlinearprogressbarcomponent.html#step) should be less than the default progress update.
> [!NOTE]
> If the [`step`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlinearprogressbarcomponent.html#step) value is defined greater than the [`value`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlinearprogressbarcomponent.html#value) input, there is only one update, which gets **the value that is passed for progress update**.

<div class="divider--half"></div>

### Dynamic Progress

You can dynamically change the value of the progress bar by using external controls like buttons. To achieve this, we can bind the value to a class property:

```html
<div class="linear-container">
  <igx-linear-bar [value]="currentValue" [max]="100"></igx-linear-bar>

  <div class="button-container">
    <button igxIconButton="flat" (click)="decrementProgress()">
      <igx-icon fontSet="material">remove</igx-icon>
    </button>
    <button igxIconButton="flat" (click)="incrementProgress()">
      <igx-icon fontSet="material">add</igx-icon>
    </button>
  </div>
</div>
```

Create the methods that increment and decrement the value:

```typescript
public currentValue: number;

public ngOnInit() {
    this.currentValue = 0;
}

public incrementProgress() {
    this.currentValue += 10;
    if (this.currentValue > 100) {
        this.currentValue = 100;
    }
}

public decrementProgress() {
    this.currentValue -= 10;
    if (this.currentValue < 0) {
        this.currentValue = 0;
    }
}
```

After completing the steps above, our progress bar should look like this:

```typescript
import { Component, OnInit } from '@angular/core';
import { IgxLinearProgressBarComponent } from 'igniteui-angular/progressbar';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-linear-dynamic-sample',
    styleUrls: ['./linear-dynamic-sample.component.scss'],
    templateUrl: './linear-dynamic-sample.component.html',
    imports: [IgxLinearProgressBarComponent, IgxIconButtonDirective, IgxIconComponent]
})
export class LinearDynamicSampleComponent implements OnInit{

    public currentValue: number;

    public ngOnInit() {
        this.currentValue = 50;
    }

    public incrementProgress() {
        this.currentValue += 10;
        if (this.currentValue > 100) {
            this.currentValue = 100;
        }
    }

    public decrementProgress() {
        this.currentValue -= 10;
        if (this.currentValue < 0) {
            this.currentValue = 0;
        }
    }
}
```
```html
<div class="linear-container">
    <igx-linear-bar
        [value]="currentValue"
        [max]="100"
    ></igx-linear-bar>

    <div class="button-container">
        <button igxIconButton="flat" (click)="decrementProgress()">
            <igx-icon family="material">remove</igx-icon>
        </button>
        <button igxIconButton="flat" (click)="incrementProgress()">
            <igx-icon family="material">add</igx-icon>
        </button>
    </div>
 </div>
```
```scss
.linear-container {
    margin-top: 20px;
}
```

<div class="divider--half"></div>

## Styling

To get started with styling the linear progress bar, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`progress-linear-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-progress-linear-theme) and override the `$fill-color-default` and `$text-color` parameters.

```scss
$custom-theme: progress-linear-theme(
  $fill-color-default: #ecaa53,
  $text-color: #ecaa53,
);
```

### Including Themes

The last step is to **include** the component theme in our application.

```scss
@include css-vars($custom-theme);
```

### Demo

```typescript
import { Component } from '@angular/core';
import { IgxLinearProgressBarComponent } from 'igniteui-angular/progressbar';

@Component({
    selector: 'app-linear-progressbar-styling',
    styleUrls: ['./linear-progressbar-styling-sample.component.scss'],
    templateUrl: './linear-progressbar-styling-sample.component.html',
    imports: [IgxLinearProgressBarComponent]
})
export class LinearProgressbarStylingComponent { }
```
```html
<igx-linear-bar [value]="100"></igx-linear-bar>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-theme: progress-linear-theme(
  $fill-color-default: #ecaa53,
  $text-color: #ecaa53,
);

@include css-vars($custom-theme);
```

## API

<div class="divider--half"></div>

- [IgxLinearProgressBarComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlinearprogressbarcomponent.html)
- [IgxLinearProgressBarComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-progress-linear-theme)
- [IgxTextAlign](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/igxtextalign.html)

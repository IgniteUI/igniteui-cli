---
title: Angular Divider Component - MIT license 
_description: Ignite UI for Angular Divider component enables users to separate content both horizontally and vertically.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library, Angular Divider component, Angular Divider directive, Angular Divider control
_license: MIT
_tocName: Divider
---

# Angular Divider Component Overview

<p class="highlight">The divider component enables users to separate content both horizontally and vertically.</p>

## Angular Divider Example

By default the divider is a solid horizontal line.


```typescript
import { Component } from '@angular/core';
import { IgxDividerDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-divider-default',
    styleUrls: ['./divider-default.component.scss'],
    templateUrl: './divider-default.component.html',
    imports: [IgxDividerDirective]
})
export class DividerDefaultComponent {

    constructor() {
    }

}
```
```html
<div class="divider-sample">
  <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, culpa delectus eius fuga ipsa iste laborum nemo, numquam omnis perferendis soluta sunt. Animi asperiores aspernatur assumenda doloribus eligendi officiis veritatis.</p>
      <igx-divider></igx-divider>
      <p class="mt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, culpa delectus eius fuga ipsa iste laborum nemo, numquam omnis perferendis soluta sunt. Animi asperiores aspernatur assumenda doloribus eligendi officiis veritatis.</p>
  </div>
</div>
```
```scss
.divider-sample {
    display: flex;
    padding: 20px;
    border: 1px solid #ededed;
    p {
        margin-top: 0;
    }
    .mt {
        margin-top: 20px;
    }
}
```

## Getting Started with Ignite UI for Angular Divider

To get started with the Ignite UI for Angular Divider component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxDividerModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxDividerModule } from 'igniteui-angular/directives';
// import { IgxDividerModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxDividerModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxDividerDirective` as a standalone dependency.

```typescript
// home.component.ts

import { IgxDividerDirective } from 'igniteui-angular/directives';
// import { IgxDividerDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-divider></igx-divider>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxDividerDirective]
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Divider module or directive imported, you can start using the `igx-divider` component.

## Using the Angular Divider

### Vertical Divider

By adding the `vertical` attribute and setting its value to `true`, you can change the direction of the divider from horizontal to vertical.

```html
<igx-divider [vertical]="true"></igx-divider>
```

```typescript
import { Component } from '@angular/core';
import { IgxDividerDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-divider-vertical',
    styleUrls: ['./divider-vertical.component.scss'],
    templateUrl: './divider-vertical.component.html',
    imports: [IgxDividerDirective]
})
export class DividerVerticalComponent {

    constructor() {
    }

}
```
```html
<div class="divider-sample">
    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At facere fugit in libero nisi pariatur quo reiciendis sequi tempore vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, culpa delectus eius fuga ipsa iste laborum nemo, numquam omnis perferendis soluta sunt. Animi asperiores aspernatur assumenda doloribus eligendi officiis veritatis.</p>
    </div>
    <igx-divider [vertical]="true"></igx-divider>
    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At facere fugit in libero nisi pariatur quo reiciendis sequi tempore vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, culpa delectus eius fuga ipsa iste laborum nemo, numquam omnis perferendis soluta sunt. Animi asperiores aspernatur assumenda doloribus eligendi officiis veritatis.</p>
    </div>
</div>
```
```scss
.divider-sample {
    display: flex;
    padding: 20px;
    border: 1px solid #ededed;
    > div {
        margin-left: 20px;
        text-align: left;
        &:first-of-type {
            text-align: right;
            margin-left: 0;
            margin-right: 20px;
        }
    }
    p {
        margin: 0;
    }
    .mt {
        margin-top: 20px;
    }
}
```


### Dashed Divider

The default style of the divider is a `solid` line but it can also be `dashed`.
To change the default look simply use the `type` attribute of the divider and set its value to `dashed`.

```html
<igx-divider type="dashed"></igx-divider>
```

```typescript
import { Component } from '@angular/core';
import { IgxDividerDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-divider-dashed',
    styleUrls: ['./divider-dashed.component.scss'],
    templateUrl: './divider-dashed.component.html',
    imports: [IgxDividerDirective]
})
export class DividerDashedComponent {

    constructor() {
    }

}
```
```html
<div class="divider-sample">
    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, culpa delectus eius fuga ipsa iste laborum nemo, numquam omnis perferendis soluta sunt. Animi asperiores aspernatur assumenda doloribus eligendi officiis veritatis.</p>
        <igx-divider type="dashed"></igx-divider>
        <p class="mt mb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, culpa delectus eius fuga ipsa iste laborum nemo, numquam omnis perferendis soluta sunt. Animi asperiores aspernatur assumenda doloribus eligendi officiis veritatis.</p>
    </div>
</div>
```
```scss
.divider-sample {
    display: flex;
    padding: 20px;
    border: 1px solid #ededed;
    p {
        margin-top: 0;
    }
    .mt {
        margin-top: 16px;
    }
    .mb {
        margin-bottom: 0;
    }
}
```


### Inset Divider

The divider can be set in on both sides.
To inset the divider, set the `middle` attribute of the divider to `true` and provider the desired `inset` value, the divider will start shrinking from both ends.

**Keep in mind that you have to add unit(px,rem,%...) at the end of the value otherwise, it will not work.**

```html
// Both side
<igx-divider [middle]="true" inset="80px"></igx-divider>

// Left side only 
<igx-divider inset="40px"></igx-divider>

```

```typescript
import { Component } from '@angular/core';
import { IgxDividerDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-divider-inset',
    styleUrls: ['./divider-inset.component.scss'],
    templateUrl: './divider-inset.component.html',
    imports: [IgxDividerDirective]
})
export class DividerInsetComponent {

    constructor() {
    }

}
```
```html
<div class="divider-sample">
    <div>
        <h4 class="mb">Both sides inset.</h4>
        <igx-divider [middle]="true" inset="100px"></igx-divider>
        <p class="mt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias at consectetur dolor magnam maiores nihil quasi quod repudiandae similique.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, culpa delectus eius fuga ipsa iste laborum nemo, numquam omnis perferendis soluta sunt. Animi asperiores aspernatur assumenda doloribus eligendi.</p>
    </div>
    <div>
        <h4 class="mb">Left side only(default).</h4>
        <igx-divider inset="40px"></igx-divider>
        <p class="mt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias at consectetur dolor magnam maiores nihil quasi quod repudiandae similique.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, culpa delectus eius fuga ipsa iste laborum nemo, numquam omnis perferendis soluta sunt. Animi asperiores aspernatur assumenda doloribus eligendi.</p>
    </div>
</div>
```
```scss
.divider-sample {
    display: flex;
    padding: 20px;
    border: 1px solid #ededed;
    > div {
        margin-left: 40px;
        &:first-of-type {
            margin-left: 0;
            margin-right: 0;
        }
    }
    h4 {
        margin-top: 0;
    }
    p {
        margin-top: 0;
    }
    .mt {
        margin-top: 16px;
        margin-bottom: 0;
    }
    .mb {
        margin-bottom: 16px;
    }
}

.inset-sample {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.divider-indent-text {
    padding-left: 40px;
}
```


If the value of the `middle` attribute is set to a false value, or if the attribute is omitted altogether, the divider will set in only on the left.

## API References

<div class="divider--half"></div>

- [IgxDividerDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdividerdirective.html)
- [IgxDividerDirective Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-divider-theme)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)


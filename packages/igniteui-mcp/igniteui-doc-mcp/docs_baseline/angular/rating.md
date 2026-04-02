---
title: Angular Star Rating Component – Ignite UI for Angular - MIT license 
_description: With Angular Star Rating Component, users can view and provide feedback quickly. You can use the rating component in any angular app and angular forms. Try it Now
_keywords: Angular Rating component, Angular Rating control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
_license: MIT
_tocName: Rating
---

# Angular Star Rating Overview

Rating in Angular represents a widget enabling users to quickly provide feedback and evaluate a product or a service on a web page by using a star rating system. Simple to use, the component lets developers configure the size and the number of the displayed star rating items.

The Ignite UI Angular Star Rating component can be easily installed from the igniteui-webcomponents package. It provides an intuitive rating experience for end-users, allowing them to view products/services and rate them (usually having the option to choose from 0 to 5 stars in the most common scenarios).


## Angular Rating Example

This Angular Star Rating example demonstrates how you can use Ignite UI Angular to build simple five-star rating widget, comparing and displaying the score of different products.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { CellType, IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgcFormControlDirective } from 'igniteui-angular/directives';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-grid-rating-sample',
    styleUrls: ['./grid-with-rating.component.scss'],
    templateUrl: 'grid-with-rating.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgcFormControlDirective, FormsModule, IgxToastComponent]
})
export class GridWithRatingComponent implements OnInit {
    @ViewChild('toast', { read: IgxToastComponent, static: true })
    public toast: IgxToastComponent;

    public data: any[];

    public message: string;

    public ngOnInit(): void {
        this.data = DATA;
        this.data.map(r => r.Rating = Math.floor(Math.random() * 5) + 1)
    }

    public ratingChanged(event: CustomEvent, cell: CellType) {
        cell.value = event.detail;
        this.message = `You rated ${cell.row.data.ProductName} with score: ${event.detail}`;
        this.toast.open();
    }
}
```
```html
<div class="grid__wrapper">
    <igx-grid [igxPreventDocumentScroll]="true" #grid [data]="data" [height]="'500px'" [width]="'100%'">
        <igx-column [field]="'ProductName'"></igx-column>
        <igx-column [field]="'UnitsInStock'" [dataType]="'number'"></igx-column>
        <igx-column [field]="'UnitPrice'" [dataType]="'number'"></igx-column>
        <igx-column [field]="'Rating'" [dataType]="'number'" width="250px">
            <ng-template igxCell let-cell="cell" let-val>
                <igc-rating [ngModel]="val" min="0" max="5" (igcChange)="ratingChanged($event, cell);"></igc-rating>
            </ng-template>
        </igx-column>
        <igx-column [field]="'OrderDate'" [dataType]="'date'"></igx-column>
        <igx-toast #toast [autoHide]="true">{{ message }}</igx-toast>
    </igx-grid>

</div>
```
```scss
.grid__wrapper {
    display: flex;
    justify-content: space-between;
    margin: 16px;
    flex-flow: column;
    align-items: flex-start;
    position: relative;
}

::ng-deep {
    .activeRow {
        border: 2px solid #fc81b8;
        border-left: 3px solid #e41c77;
    }

    .toggle-section {
        width: 300px;
        height: 100px;
        background-color: white;
    }

}

.container {
    display: flex;

    igx-icon {
        margin: 20px;
    }
}
```


<div class="divider--half"></div>


## Getting Started with Ignite UI for Angular Star Rating

Ignite UI Rating is a standard [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) and as such can be used in an Angular application.

Follow the steps below to add the Ignite UI Web Components package to your Angular project and set it up in order to use the component.

First, install the `igniteui-webcomponents` package

```cmd
npm install igniteui-webcomponents --save
```

Next, you should call the `defineCustomElements()` function with `IgcRatingComponent` argument either in your `main.ts` file or in the component `.ts` file that is using `IgcRating`.

```typescript
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);
```

You also need to include the `CUSTOM_ELEMENTS_SCHEMA` schema in the `AppModule`:

```typescript
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

With these you can now add the Rating component in an Angular component template and use its inputs and outputs:

```html
<igc-rating value="ratingVal" min="1" max="5" (igcChange)="ratingChanged($event);"></igc-rating>
```

## Using Angular Star Rating in Forms

In Angular forms, components often need to be able to bind their values with `ngModel` or use `formControl` which requires an implementation of Angular's `ControlValueAccessor` interface. Ignite UI for Angular package provides such implementation in the form of a directive that uses an element selector to attach to supported web components. Currently `IgcRating` is the only component that it supports. To use the directive you just need to import `IgcFormsModule` from the library.

```typescript
import { IgcFormsModule } from 'igniteui-angular/directives';
// import { IgcFormsModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        IgcFormsModule
    ]
})
export class AppModule { }
```

>[!NOTE]
>If you are importing `IgcFormsModule` and using either `ngModel` or `formControl`, you no longer need to include `CUSTOM_ELEMENTS_SCHEMA` as Angular will recognize the `igc-rating` tag by the custom `ControlValueAccessor` directive.

Alternatively, as of `16.0.0` you can import the `IgcFormControlDirective` as a standalone dependency.

```typescript
// home.component.ts

import { FormsModule } from '@angular/forms';
import { IgcFormControlDirective } from 'igniteui-angular/directives';
// import { IgcFormControlDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igc-rating name="modelRating" [(ngModel)]="product.Rating" max="10" label="Model Rating"></igc-rating>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgcFormControlDirective, FormsModule]
})
export class HomeComponent {
    public product: Product;
}
```

Add a rating with e.g. ngModel for value and it will two-way bind with your model without issues.

```html
<igc-rating name="modelRating" [(ngModel)]="model.Rating" max="10" label="Model Rating"></igc-rating>
```

The following application shows one example of how this integration works in a real use-case with forms.

```typescript
import { Component} from '@angular/core';
import { IgcRatingComponent, defineComponents } from 'igniteui-webcomponents';
import { FormsModule } from '@angular/forms';
import { IgxCardActionsComponent, IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective, IgxCardMediaDirective } from 'igniteui-angular/card';
import { IgcFormControlDirective, IgxButtonDirective, IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { CurrencyPipe } from '@angular/common';

defineComponents(IgcRatingComponent)

@Component({
    selector: 'app-rating-sample',
    styleUrls: ['./rating-form.component.scss'],
    templateUrl: './rating-form.component.html',
    imports: [FormsModule, IgxCardComponent, IgxCardMediaDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardContentDirective, IgxCardHeaderSubtitleDirective, IgcFormControlDirective, IgxCardActionsComponent, IgxButtonDirective, IgxRippleDirective, IgxPrefixDirective, IgxIconButtonDirective, IgxSuffixDirective, IgxIconComponent, CurrencyPipe]
})
export class RatingInFormComponent {

    public product = {
        ProductID: 1,
        ProductName: "Desk",
        UnitPrice: 265.99,
        UnitsInStock: 2,
        AverageRating: 3.4,
        TotalReviews: 6,
        UserRating: 0,
        ImageURL: 'https://cdn.pixabay.com/photo/2020/08/25/18/28/workplace-5517744_960_720.jpg',
        OrderDate: new Date("2005-03-17"),
        icons: ['favorite', 'share']
    };

    public get productRating(): string {
        const rating = this.product.AverageRating +
            ((this.product.UserRating || this.product.AverageRating) - this.product.AverageRating) /
            (this.product.TotalReviews + 1);
        return rating.toFixed(1);
    }
}
```
```html
<div class="sample-column">
  <form>
    <igx-card elevated>
      <igx-card-media height="300px">
        <img [src]="product.ImageURL">
      </igx-card-media>

      <igx-card-header>
        <h4 igxCardHeaderTitle>{{ product.ProductName }}</h4>
      </igx-card-header>

      <igx-card-content>
        <span igxCardHeaderSubtitle>Price: {{ product.UnitPrice | currency:'USD' }}</span>
        <span igxCardHeaderSubtitle>
          User Rating: {{ productRating }} from {{ product.TotalReviews + (product.UserRating !== 0 ? 1 : 0) }} users
        </span>
        <igc-rating [(ngModel)]="product.UserRating" name="userRating"></igc-rating>
      </igx-card-content>
      <igx-card-actions>
        <button igxButton="outlined" igxRipple igxStart>Buy again</button>
        @for (icon of product.icons; track icon) {
          <button igxIconButton="flat"
            igxRipple
            [igxRippleCentered]="true"
            igxEnd>
            <igx-icon [style.color]="'#ECAA53'">{{icon}}</igx-icon>
          </button>
        }
      </igx-card-actions>
    </igx-card>
  </form>
</div>
```
```scss
.sample-column {
    padding-bottom: 50px;
}

.igx-card {
    flex: 1 1 0;
    margin: 5px;
    width: 500px;
}

.igx-card-header__subtitle {
    font-size: 0.999rem;
}

igx-card-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
}

span[igxCardHeaderSubtitle] {
    flex-basis: 50%;
    min-width: 50%;
    padding-left: 8px;
}
```

For further information on the usage of the Rating component, you can check out [this topic]({environment:infragisticsBaseUrl}/products/ignite-ui-web-components/web-components/components/inputs/rating.html).


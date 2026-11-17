---
title: "Angular Rating Component"
description: "The Ignite UI for Angular Rating is a form-associated input for selecting or viewing a score on a scale of stars or custom symbols, with half-star steps."
keywords: "Angular Rating, Ignite UI for Angular, star rating, half-star rating, rating symbols"
license: MIT
last_updated: "2026-10-07"
relatedComponents: ["Slider", "RadioGroup"]
mentionedTypes: ["Rating", "RatingSymbol"]
llms:
  description: "The Ignite UI for Angular Rating is a form-associated component that lets users view and select a score on a scale of stars or custom symbols."
_tocName: Rating
---
# Rating

The Ignite UI for Angular Rating is a form-associated component that lets users view and select a score on a scale of stars or custom symbols.

In Angular, the Rating is the `igc-rating` web component from `igniteui-webcomponents`. Bind it to Angular forms with the `IgcFormControlDirective`.

## Live Demo

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective } from 'igniteui-angular/card';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-rating-overview',
    styleUrls: ['./rating-overview.component.scss'],
    templateUrl: './rating-overview.component.html',
    imports: [
        IgxCardComponent,
        IgxCardHeaderComponent,
        IgxCardHeaderTitleDirective,
        IgxCardHeaderSubtitleDirective,
        IgxCardContentDirective
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RatingOverviewComponent { }
```
```html
<igx-card class="rating-card">
    <igx-card-header>
        <span igxCardHeaderTitle>Rate this product</span>
        <span igxCardHeaderSubtitle>Your opinion matters to us!</span>
    </igx-card-header>
    <igx-card-content>
        <igc-rating aria-label="Rate this product" [hoverPreview]="true"></igc-rating>
    </igx-card-content>
</igx-card>
```
```scss
:host {
    /* styles.scss asks the page for the large size; the rating keeps its own
       default medium size here. */
    --ig-size: var(--ig-size-medium);

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.rating-card {
    width: 15rem;
    box-shadow: var(--ig-elevation-2);
}

.rating-card igx-card-content {
    display: flex;
    padding-bottom: 0.5rem;
}
```

## Anatomy

The Rating is built from Label and Value, where the Value is the number of the rating scale. The label shows when you set `label`. Set `max` to change the number of symbols (5 by default).

**Rating anatomy:** The Rating component shows a label and a row of symbols that fill up to the current value.

<style>{`
  .rating-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .rating-anatomy .igd-anatomy__image {
    max-width: 257.5px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Label (optional):</strong> describes what the user is rating<br />
<strong>2. Rating Icon:</strong> indicates selected item<br />
<strong>3. Rating Icon:</strong> indicates half selected item<br />
<strong>4. Rating Icon:</strong> indicates unselected item</span>

The `igc-rating` element renders the label and a slider that holds the symbols. Without projected symbols, it renders one star for each point of `max`:

```text
igc-rating
└─ #shadow-root
   ├─ label[part="label"]                    // hidden when label isn't set
   └─ div[part="base"][role="slider"]
      ├─ div[part="symbols"]                 // aria-hidden="true"
      │  └─ slot[name="symbol"]              // projected igc-rating-symbol elements
      │     └─ igc-rating-symbol × max       // default stars when nothing is projected
      │        └─ #shadow-root
      │           ├─ div[part="symbol full"]   // star_filled icon, clipped to the value
      │           └─ div[part="symbol empty"]  // star_outlined icon, clipped to the rest
      └─ label[part="value-label"]
         └─ slot[name="value-label"]         // hidden when the slot is empty
```

Each `igc-rating-symbol` renders its default slot in the `full` part and its `empty` slot in the `empty` part.

## Getting Started

To use the Angular Rating, follow the [Ignite UI for Angular Getting Started](../general/getting-started.md) topic for the basic project setup, then add the component for your target platform.

If your project doesn't use Ignite UI for Angular yet, run `ng add igniteui-angular`. Then install the **igniteui-webcomponents** package, which provides the Rating:

```cmd
npm install igniteui-webcomponents
```

Register the `IgcRatingComponent`, and add `CUSTOM_ELEMENTS_SCHEMA` to the Angular component that renders `igc-rating`:

```ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-product-rating',
    template: '<igc-rating label="Rate this product"></igc-rating>',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductRatingComponent {}
```

The Ignite UI for Angular theme styles `igc-rating`, so the Rating follows the theme that you include with the `theme()` mixin.

The Rating renders five stars and starts with a value of 0.

## Usage

Use the Angular Rating to collect a score for a product, a service, or an experience, or to show an average score that users can't change.

### Hover Preview

Set `hoverPreview` to fill the symbols up to the value under the pointer before the user clicks. When the pointer leaves the symbols, the Angular Rating shows its value again. A read-only or disabled Rating shows no preview.

While the preview is on, the Rating emits `igcHover` with the value under the pointer:

```html
<igc-rating hover-preview label="Rate this article" (igcHover)="onHover($event)"></igc-rating>
```

```ts
public hint = '';

public onHover(event: Event) {
    this.hint = `${(event as CustomEvent<number>).detail} stars`;
}
```

### Reset

By default, a click on the current value keeps the value. Set `allowReset` to reset the Angular Rating to 0 when the user clicks the current value again.

```html
<igc-rating allow-reset label="Rate this song"></igc-rating>
```

### Read-Only

Set `readOnly` to show a score that users can't change, such as the average of all reviews. The value can be any number in the range, so a value of 4.3 fills four symbols and 30% of the fifth. A read-only Angular Rating stays in the tab order, and assistive technology announces it as read-only.

```html
<igc-rating readonly value="4.3" label="Average rating"></igc-rating>
```

### Layout

The `label` property renders a visible label above the symbols and names the Angular Rating for assistive technology. To show custom content next to the symbols, such as the current score, place it in the `value-label` slot:

```html
<igc-rating [value]="score" label="Rate this product" (igcChange)="onScoreChange($event)">
  <span slot="value-label">{{ score }} of 5</span>
</igc-rating>
```

Give every Angular Rating an accessible name, and describe its value in words that fit the scale.

When the Rating has no visible `label`, set `aria-label` on it, or, with `igniteui-webcomponents` 7.4.1 and later, associate a `<label>` element with it. Assistive technology reads the value as "3 of 5" by default. Set `valueFormat` to replace this text: the Rating replaces `{0}` with the value and `{1}` with `max`, which also lets you localize the text.

```html
<igc-rating aria-label="Delivery speed" value-format="{0} out of {1} stars"></igc-rating>
```

Leave `label` unset to hide the label, or use the `value-label` slot to show the score.

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-rating-layout',
    styleUrls: ['./rating-layout.component.scss'],
    templateUrl: './rating-layout.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RatingLayoutComponent { }
```
```html
<div class="layouts">
    <div class="layout">
        <span class="layout-label">Label / On</span>
        <igc-rating label="Rate your experience" [value]="3"></igc-rating>
    </div>
    <div class="layout">
        <span class="layout-label">Label / Off</span>
        <igc-rating aria-label="Rate your experience" [value]="3"></igc-rating>
    </div>
</div>
```
```scss
:host {
    /* styles.scss asks the page for the large size; the ratings keep their own
       default medium size here. */
    --ig-size: var(--ig-size-medium);

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.layouts {
    display: flex;
    align-items: center;
    gap: 3.75rem;
}

.layout {
    display: flex;
    align-items: center;
    gap: 1.875rem;
}

.layout-label {
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: var(--ig-gray-600);
}

igc-rating {
    --ig-rating-label-color: var(--ig-gray-700);
}
```

### Interaction States

The Angular Rating is enabled by default. Set `disabled` to turn it off:

```html
<igc-rating disabled value="3" label="Rate this product"></igc-rating>
```

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-rating-interaction-states',
    styleUrls: ['./rating-interaction-states.component.scss'],
    templateUrl: './rating-interaction-states.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RatingInteractionStatesComponent { }
```
```html
<div class="states">
    <div class="state">
        <span class="state-label">Enabled</span>
        <igc-rating label="Rate your experience" [value]="1"></igc-rating>
    </div>
    <div class="state">
        <span class="state-label">Disabled</span>
        <igc-rating label="Rate your experience" [value]="1" [disabled]="true"></igc-rating>
    </div>
</div>
```
```scss
:host {
    /* styles.scss asks the page for the large size; the ratings keep their own
       default medium size here. */
    --ig-size: var(--ig-size-medium);

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.states {
    display: flex;
    align-items: center;
    gap: 3.75rem;
}

.state {
    display: flex;
    align-items: center;
    gap: 1.875rem;
}

.state-label {
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: var(--ig-gray-600);
}

igc-rating {
    --ig-rating-label-color: var(--ig-gray-700);
    --ig-rating-disabled-label-color: var(--ig-gray-500);
}
```

### Empty/Full State

The `value` of the Angular Rating sets how full its symbols are. A value of 0, the default, shows all symbols empty, and a value equal to `max` shows all symbols full.

Bind the value as a property, and update it in the `igcChange` handler:

```html
<igc-rating [value]="score" max="10" label="Rate this movie" (igcChange)="onScoreChange($event)"></igc-rating>
```

```ts
public score = 3;

public onScoreChange(event: Event) {
    this.score = (event as CustomEvent<number>).detail;
}
```

Set `step` to `0.5` to let users select half stars:

```html
<igc-rating step="0.5" value="3.5" label="Rate your stay"></igc-rating>
```

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-rating-states',
    styleUrls: ['./rating-states.component.scss'],
    templateUrl: './rating-states.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RatingStatesComponent { }
```
```html
<div class="states">
    <div class="state">
        <span class="state-label">Empty State</span>
        <igc-rating label="Rate your experience" [value]="0" [readOnly]="true"></igc-rating>
    </div>
    <div class="state">
        <span class="state-label">Full State</span>
        <igc-rating label="Rate your experience" [value]="5" [readOnly]="true"></igc-rating>
    </div>
</div>
```
```scss
:host {
    /* styles.scss asks the page for the large size; the ratings keep their own
       default medium size here. */
    --ig-size: var(--ig-size-medium);

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.states {
    display: flex;
    align-items: center;
    gap: 3.75rem;
}

.state {
    display: flex;
    align-items: center;
    gap: 1.875rem;
}

.state-label {
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: var(--ig-gray-600);
}

igc-rating {
    --ig-rating-label-color: var(--ig-gray-700);
}
```

### Size

The Rating is available in three sizes - Small, Medium and Large. The small, medium, and large sizes render 18px, 24px, and 36px symbols, and the Angular Rating uses the medium size by default. Set the `--ig-size` CSS variable to `--ig-size-small`, `--ig-size-medium`, or `--ig-size-large` to choose a size. For a size outside these presets, set `--ig-rating-symbol-size`:

```css
.rating-small {
  --ig-size: var(--ig-size-small);
}

.rating-large {
  --ig-size: var(--ig-size-large);
}

.rating-custom {
  --ig-rating-symbol-size: 3rem;
}
```

```html
<igc-rating class="rating-large" label="Rate this product"></igc-rating>
```

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-rating-size',
    styleUrls: ['./rating-size.component.scss'],
    templateUrl: './rating-size.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RatingSizeComponent { }
```
```html
<div class="sizes">
    <div class="size">
        <span class="size-label">Small</span>
        <igc-rating class="size-small" label="Rate your experience" [value]="5"></igc-rating>
    </div>
    <div class="size">
        <span class="size-label">Medium</span>
        <igc-rating class="size-medium" label="Rate your experience" [value]="5"></igc-rating>
    </div>
    <div class="size">
        <span class="size-label">Large</span>
        <igc-rating class="size-large" label="Rate your experience" [value]="5"></igc-rating>
    </div>
</div>
```
```scss
:host {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.sizes {
    display: flex;
    align-items: center;
    gap: 3.75rem;
}

.size {
    display: flex;
    align-items: center;
    gap: 1.875rem;
}

.size-label {
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: var(--ig-gray-600);
}

igc-rating {
    --ig-rating-label-color: var(--ig-gray-700);
}

.size-small {
    --ig-size: var(--ig-size-small);
}

.size-medium {
    --ig-size: var(--ig-size-medium);
}

.size-large {
    --ig-size: var(--ig-size-large);
}
```

### Symbols

By default, the Angular Rating renders star icons. To use other symbols, place one `igc-rating-symbol` element for each point of the scale inside the Rating. Each rating symbol shows its default slot content in the part of the symbol that the value covers and its `empty` slot content in the rest, so fill both slots, even with the same content. The number of rating symbols sets `max`, and the Rating ignores the `max` that you set.

The following rating uses heart icons that you register with `registerIconFromText` from `igniteui-webcomponents`. Use `igc-icon` in the rating symbols, because the Rating sizes `igc-icon` elements to the symbol size:

```html
<igc-rating label="Rate this recipe">
  @for (i of [1, 2, 3, 4, 5]; track i) {
    <igc-rating-symbol>
      <igc-icon name="favorite" collection="material"></igc-icon>
      <igc-icon name="favorite_border" collection="material" slot="empty"></igc-icon>
    </igc-rating-symbol>
  }
</igc-rating>
```

The Rating colors icons and text with the full and empty symbol colors of the theme. It renders content other than an Icon in the `empty` slot in grayscale, so the same emoji in both slots looks selected or empty.

### Single Selection

Set `single` to show only the selected symbol as full. Use single selection with symbols that each stand for one distinct value, such as a scale of faces. In single selection, the Angular Rating uses a `step` of 1 and rounds a fractional value up.

```html
<igc-rating single label="How was your experience?">
  @for (face of faces; track face) {
    <igc-rating-symbol>
      <span>{{ face }}</span>
      <span slot="empty">{{ face }}</span>
    </igc-rating-symbol>
  }
</igc-rating>
```

```ts
public faces = ['😣', '😔', '😐', '🙂', '😆'];
```

### Forms

To bind the Rating with `ngModel` or `formControlName`, Angular needs an implementation of its `ControlValueAccessor` interface. Ignite UI for Angular provides it as the standalone `IgcFormControlDirective`, which attaches to `igc-rating` elements with `ngModel` or `formControlName`. Import it together with `FormsModule` or `ReactiveFormsModule`:

```ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgcFormControlDirective } from 'igniteui-angular/directives';
// import { IgcFormControlDirective } from '@infragistics/igniteui-angular/directives'; for licensed package

@Component({
    selector: 'app-review-form',
    template: `
        <form>
            <igc-rating name="userRating" [(ngModel)]="review.rating" label="Your rating"></igc-rating>
        </form>
    `,
    imports: [FormsModule, IgcFormControlDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReviewFormComponent {
    public review = { rating: 0 };
}
```

With reactive forms, bind the Rating with `formControlName`:

```html
<form [formGroup]="reviewForm">
  <igc-rating formControlName="rating" label="Your rating"></igc-rating>
</form>
```

The directive updates the model on `igcChange`, marks the control as touched when the Rating loses focus, and disables the Rating when you disable the form control.

The Rating has no `required` validation. To require a score, check that the value is greater than 0 before you submit the data.

### Do/Don't

The star is a very recognizable ranking symbol, and people may not associate other symbols with a rating scale. If you replace the star with a custom symbol, make sure that its purpose is clear. Avoid colors with poor contrast, like similar shades of the same color or combinations that create chromatic aberrations. The Icons selections should be emphasized and should have a good visual distinct appearance.

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin: 24px 0 16px;">
  
  
</div>

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin-bottom: 32px;">
  <div>
    <p style="color: light-dark(var(--ig-success-700), var(--ig-success-100)); font-weight: 600; margin: 0 0 8px;">Do</p>
    <p style="margin: 0;">Use stars or another symbol that users associate with a rating scale.</p>
  </div>
  <div>
    <p style="color: light-dark(var(--ig-error-700), var(--ig-error-300)); font-weight: 600; margin: 0 0 8px;">Don't</p>
    <p style="margin: 0;">Avoid symbols whose meaning as a score isn't clear.</p>
  </div>
</div>

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin: 24px 0 16px;">
  
  
</div>

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin-bottom: 32px;">
  <div>
    <p style="color: light-dark(var(--ig-success-700), var(--ig-success-100)); font-weight: 600; margin: 0 0 8px;">Do</p>
    <p style="margin: 0;">Make the selected symbols stand out from the empty ones.</p>
  </div>
  <div>
    <p style="color: light-dark(var(--ig-error-700), var(--ig-error-300)); font-weight: 600; margin: 0 0 8px;">Don't</p>
    <p style="margin: 0;">Avoid similar shades for the selected and the empty symbols.</p>
  </div>
</div>

## Properties

The Angular Rating exposes the following properties. See the API reference for the complete type definitions.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`value`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingComponent#value) | `number` | `0` | The current value, from 0 to the maximum value. |
| [`max`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingComponent#max) | `number` | `5` | The maximum value and the number of default symbols. Projected rating symbols set it to their count. |
| [`step`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingComponent#step) | `number` | `1` | The smallest change of the value, from 0.001 to 1. |
| [`label`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingComponent#label) | `string` | — | The visible label, which also names the rating. |
| [`valueFormat`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingComponent#valueFormat) | `string` | — | The format of `aria-valuetext`. `{0}` stands for the value and `{1}` for the maximum value. |
| [`hoverPreview`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingComponent#hoverPreview) | `boolean` | `false` | Whether the rating previews the value under the pointer. |
| [`readOnly`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingComponent#readOnly) | `boolean` | `false` | Whether the user can't change the value. |
| [`single`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingComponent#single) | `boolean` | `false` | Whether only the selected symbol is shown as full. |
| [`allowReset`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingComponent#allowReset) | `boolean` | `false` | Whether a click on the current value resets the rating to 0. |
| [`disabled`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingComponent#disabled) | `boolean` | `false` | Whether the rating is disabled. |
| [`invalid`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingComponent#invalid) | `boolean` | `false` | Marks the rating as invalid through the `ig-invalid` custom state. The Rating themes don't style this state. |
| [`name`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingComponent#name) | `string` | — | The name under which a form submits the value. |

## Methods

The Angular Rating exposes the following methods. The step methods change the value without emitting a change event.

| Method | Description |
| --- | --- |
| [`stepUp`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingComponent#stepUp) | Increases the value by the given number of steps. The number defaults to 1. |
| [`stepDown`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingComponent#stepDown) | Decreases the value by the given number of steps. The number defaults to 1. |
| [`checkValidity`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingComponent#checkValidity) | Returns whether the value is valid, and emits `invalid` when it isn't. |
| [`reportValidity`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingComponent#reportValidity) | Returns whether the value is valid, and shows the browser validation message when it isn't. |
| [`setCustomValidity`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingComponent#setCustomValidity) | Sets a custom validation message. The rating is invalid while the message isn't empty. |

## Events

The Angular Rating emits the following events. It doesn't emit them when you set the value or call a method.

| Name | Type | Description |
| --- | --- | --- |
| `igcChange` | `CustomEvent<number>` | Emitted when the user changes the value. The event detail holds the new value. |
| `igcHover` | `CustomEvent<number>` | Emitted when the hover preview is on and the pointer moves to another value. The event detail holds the value under the pointer. |

## Styling

The Angular Rating takes its colors and its symbol size from the theme. Change them with the following CSS variables:

| Variable | What it changes |
| --- | --- |
| `--ig-rating-symbol-full-color` | The color of the full symbols: the default stars, icons, and text. |
| `--ig-rating-symbol-empty-color` | The color of the empty symbols. |
| `--ig-rating-label-color` | The color of the label. |
| `--ig-rating-value-label` | The color of the value label. |
| `--ig-rating-symbol-size` | The size of the symbols. |
| `--ig-size` | The size preset: `--ig-size-small`, `--ig-size-medium`, or `--ig-size-large`. |
| `--ig-rating-disabled-full-symbol-color` | The color of the full symbols when the rating is disabled. |
| `--ig-rating-disabled-empty-symbol-color` | The color of the empty symbols when the rating is disabled. |
| `--ig-rating-disabled-label-color` | The color of the label and the value label when the rating is disabled. |
| `--ig-rating-symbol-full-filter` | The CSS filter of full symbols other than icons, such as emoji, when the rating is disabled. |
| `--ig-rating-symbol-empty-filter` | The CSS filter of empty symbols other than icons, such as emoji, when the rating is disabled. |

The `igc-rating` element exposes the following CSS parts:

| Part | What it styles |
| --- | --- |
| `base` | The slider that holds the symbols and the value label. |
| `label` | The label. |
| `value-label` | The container of the `value-label` slot. |
| `symbols` | The container of all symbols. |
| `symbol` | Each default symbol. |
| `full` | The full layer of each default symbol. |
| `empty` | The empty layer of each default symbol. |

The `igc-rating` element exports the `symbol`, `full`, and `empty` parts of its default stars only. To style projected rating symbols, use the `symbol`, `full`, and `empty` parts of the `igc-rating-symbol` element.

### Sass Theming

Create a theme with the `rating-theme` function and include it with the `tokens()` mixin. The function accepts parameters such as `$symbol-full-color`, `$symbol-empty-color`, `$label-color`, and `$symbol-size`, and the mixin emits the matching `--ig-rating-*` variables in the scope where you include it.

```scss
@use "igniteui-angular/theming" as *;

$custom-rating-theme: rating-theme(
  $symbol-full-color: #e41c77,
  $symbol-empty-color: #a9b8cc,
  $label-color: #344b65
);

:host {
  @include tokens($custom-rating-theme);
}
```

### CSS Variables

Set the CSS variables on a Rating or on a container when you need local styling without a Sass build step, and use the CSS parts for other styles:

```css
igc-rating {
  --ig-rating-symbol-full-color: #e41c77;
  --ig-rating-symbol-empty-color: #a9b8cc;
}

igc-rating::part(label) {
  font-weight: 600;
}

igc-rating-symbol::part(empty) {
  opacity: 0.6;
}
```

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { configureTheme, defineComponents, IgcIconComponent, IgcRatingComponent, IgcRatingSymbolComponent, registerIconFromText } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent, IgcRatingSymbolComponent, IgcIconComponent);

const icons = [
    { name: 'favorite', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>' },
    { name: 'favorite_border', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>' }
];

@Component({
    selector: 'app-rating-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./rating-styling.component.scss'],
    templateUrl: './rating-styling.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RatingStylingComponent {
    public symbols = [1, 2, 3, 4, 5];

    constructor() {
        // The sample loads the Bootstrap light theme in its styles, so the
        // ratings take the matching shadow DOM styles regardless of the theme
        // the documentation posts down before the sample renders.
        configureTheme('bootstrap', 'light');
        icons.forEach((icon) => registerIconFromText(icon.name, icon.text, 'material'));
    }
}
```
```html
<div class="examples">
    <div class="example">
        <span class="example-label">Custom icon and color</span>
        <igc-rating class="heart-rating" aria-label="Rate your experience" [value]="3">
            @for (symbol of symbols; track symbol) {
                <igc-rating-symbol>
                    <igc-icon name="favorite" collection="material"></igc-icon>
                    <igc-icon slot="empty" name="favorite_border" collection="material"></igc-icon>
                </igc-rating-symbol>
            }
        </igc-rating>
    </div>
    <div class="example">
        <span class="example-label">10 stars</span>
        <igc-rating class="star-rating" aria-label="Rate your experience" [max]="10" [value]="5"></igc-rating>
    </div>
</div>
```
```scss
@use "sass:meta";
@include meta.load-css("igniteui-angular/lib/core/styles/themes/presets/igniteui-bootstrap-light");

app-rating-styling {
    /* styles.scss asks the page for the large size; the ratings keep their own
       default medium size here. */
    --ig-size: var(--ig-size-medium);

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.examples {
    display: flex;
    align-items: center;
    gap: 3.75rem;
}

.example {
    display: flex;
    align-items: center;
    gap: 1.875rem;
}

.example-label {
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #556c86;
}

.heart-rating {
    --ig-rating-symbol-full-color: #d9357f;
    --ig-rating-symbol-empty-color: #d9357f;
}

.star-rating {
    --ig-rating-symbol-full-color: #faa419;
    --ig-rating-symbol-empty-color: #8a8a8a;
}
```

### Styling with Tailwind

You can style the Angular Rating with Tailwind arbitrary properties that set its CSS variables. Make sure to [set up Tailwind](../themes/tailwind.md) first:

```html
<igc-rating
  label="Rate this product"
  class="[--ig-rating-symbol-full-color:#7B9E89] [--ig-rating-symbol-size:2rem]"
></igc-rating>
```

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { configureTheme, defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { IgxButtonDirective } from 'igniteui-angular/directives';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-rating-tailwind-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./rating-tailwind-styling.component.scss'],
    templateUrl: './rating-tailwind-styling.component.html',
    imports: [IgxButtonDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RatingTailwindStylingComponent {
    constructor() {
        // The sample loads the Bootstrap light theme in its styles, so the
        // rating takes the matching shadow DOM styles regardless of the theme
        // the documentation posts down before the sample renders.
        configureTheme('bootstrap', 'light');
    }
}
```
```html
<div class="w-[328px] rounded-xl border border-[#d2dbe8] bg-white p-2 font-[aktiv-grotesk,sans-serif] [--ig-font-family:aktiv-grotesk,sans-serif]">
    <div class="flex items-center gap-4 px-4 py-2">
        <img class="size-10 shrink-0 rounded-lg object-cover" src="https://dl.infragistics.com/x/img/rating/rating-headphones.png" alt="Wireless headphones" />
        <div class="flex-1">
            <span class="block text-sm leading-5 font-medium text-[#00142b]">Wireless Headphones</span>
            <span class="block max-w-36 text-xs leading-4 font-semibold text-[#556c86]">Great sound quality and battery life!</span>
        </div>
        <span class="text-xl text-[#0176ff]">$89</span>
    </div>
    <div class="flex items-end justify-between border-t border-[#d2dbe8] p-2">
        <igc-rating
            class="[--ig-rating-label-color:#616161] [--ig-rating-symbol-empty-color:#8a8a8a] [--ig-rating-symbol-full-color:#faa419] [&::part(label)]:font-['Titillium_Web',sans-serif] [&::part(label)]:text-xs [&::part(label)]:leading-4 [&::part(label)]:font-normal [&::part(label)]:tracking-[0.4px]"
            label="Rate this product"
            [hoverPreview]="true">
        </igc-rating>
        <button
            igxButton="contained"
            type="button"
            class="submit-review [--ig-contained-button-active-background:#004699] [--ig-contained-button-background:#0176ff] [--ig-contained-button-border-radius:0.375rem] [--ig-contained-button-focus-background:#004699] [--ig-contained-button-focus-hover-background:#005dcc] [--ig-contained-button-focus-visible-background:#0176ff] [--ig-contained-button-hover-background:#005dcc] [--ig-contained-button-size:1.875rem]">
            Submit review
        </button>
    </div>
</div>
```
```scss
@use "sass:meta";
@import url("https://use.typekit.net/bng2zgw.css");
@include meta.load-css("igniteui-angular/lib/core/styles/themes/presets/igniteui-bootstrap-light");

app-rating-tailwind-styling {
    /* styles.scss asks the page for the large size; the rating and the button
       keep their own default medium size here. */
    --ig-size: var(--ig-size-medium);

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

/* The theme sets the button's padding and typography in a later layer than
   Tailwind's utilities, so the design's values are set here instead. */
.submit-review {
    padding-inline: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    letter-spacing: 0.1px;
    text-transform: none;
}
```

## Accessibility

The Angular Rating is a slider: users reach it with the Tab key, change its value with the arrow keys, and hear the value through its ARIA attributes.

### Keyboard Interaction

The Angular Rating is a single tab stop, because only the slider element inside it, the `base` part, receives focus. A disabled Rating leaves the tab order. A read-only Rating stays in the tab order but ignores the following keys, so they keep their default browser actions, such as page scrolling.

| Key | Action |
| --- | --- |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves the focus to the next or the previous focusable element. The Rating doesn't handle these keys, so it never traps the focus. |
| <kbd>Arrow Right</kbd> | Increases the value by one step. In a right-to-left layout, decreases it. |
| <kbd>Arrow Left</kbd> | Decreases the value by one step. In a right-to-left layout, increases it. |
| <kbd>Arrow Up</kbd> | Increases the value by one step. |
| <kbd>Arrow Down</kbd> | Decreases the value by one step. |
| <kbd>Home</kbd> | Sets the value to one step, the lowest value that a click can select. |
| <kbd>End</kbd> | Sets the value to the maximum value. |

The Angular Rating handles these keys on `keydown`:

- It prevents their default action, so the arrow keys, Home, and End don't scroll the page while the Rating has focus.
- A key that you hold repeats its action.
- A key that you press together with Shift, Ctrl, Alt, or Meta does nothing.
- The value stays between 0 and the maximum value. A key that would move the value past a bound keeps the value and emits no event.
- Each key that changes the value emits the change event.

With a pointer, a click selects the value under the pointer, rounded up to the next step. A read-only or disabled Rating ignores clicks.

### Screen Readers / ARIA

The Angular Rating renders one focusable element, the `base` part, with the `slider` role. Its `tabindex` is `0`, or `-1` when the Rating is disabled, and it carries the following value attributes:

| Attribute | Value |
| --- | --- |
| `aria-valuemin` | `0` |
| `aria-valuemax` | The maximum value |
| `aria-valuenow` | The value, including fractions such as `4.3` |
| `aria-valuetext` | "3 of 5" by default, or the `valueFormat` text |

With `igniteui-webcomponents` 7.3.0 and later, the slider also sets `aria-disabled` and `aria-readonly` to expose the disabled and read-only states. With 7.4.1 and later, the slider takes its accessible name from the first of the following:

1. The `aria-labelledby` attribute of the host.
2. A `<label>` element that is bound through `for`, or that wraps the Rating. A click on the label focuses the slider.
3. The `label` property, which renders a visible label that the slider references through `aria-labelledby`.
4. The `aria-label` attribute of the host. The slider ignores it when the `label` property is set.

The Angular Rating also behaves as follows for assistive technology:

- The `symbols` part sets `aria-hidden="true"`, so the symbols, including projected icons and emoji, are hidden and don't need text alternatives. The value reaches assistive technology only through `aria-valuenow` and `aria-valuetext`.
- The `value-label` slot renders inside the slider. Screen readers read the value from `aria-valuetext`, so describe the value with `valueFormat` rather than with the slot content.
- The Rating doesn't use a live region. A changed value reaches assistive technology only through the slider attributes.
- The Rating doesn't set `aria-invalid`, so a custom validation message isn't exposed as an invalid state.

### Accessibility Compliance

Infragistics documents Ignite UI for Angular accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| --- | --- |
| [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content) | The symbols are hidden from assistive technology, and the slider exposes the value as text through `aria-valuetext`. |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) | The visible label of the `label` property is associated with the slider through `aria-labelledby`. |
| [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color) | The default symbols show a filled star for the selected part of the scale and an outlined star for the rest, so the value doesn't depend on color alone. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The arrow keys, Home, and End change the value, so users can rate without a pointer. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap) | The Rating is a single tab stop and doesn't handle the Tab key, so Tab and Shift + Tab move the focus out of it. |
| [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible) | The Rating themes don't remove the browser focus indicator from the focused slider. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The slider exposes the `slider` role, its value through `aria-valuenow` and `aria-valuetext`, and the name that you provide. With `igniteui-webcomponents` 7.3.0 and later, it also exposes the disabled and read-only states. |

Your responsibilities:

- Name every Rating with the `label` property, an associated `<label>` element, or `aria-label`. See [Layout](#layout).
- Set `valueFormat` when "3 of 5" doesn't describe the scale, or when the page uses another language.
- With custom symbols, make the full and the empty symbols differ in shape or fill, not only in color, and keep a contrast ratio of at least 3:1 against the background, as [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast) requires.
- When you restyle the `base` part, keep a visible focus indicator.
- Keep the pointer targets large enough. Each value is a target as wide as one symbol, or half a symbol with a step of 0.5. The small size renders 18px symbols, below the 24 by 24 CSS pixels of [2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum), so prefer the medium or the large size for pointer and touch input.
- Don't put information only in the hover preview, because keyboard users don't see it.
- When you validate the rating with a custom validation message, also show the message as text next to the Rating, as [3.3.1 Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification) requires, because the Rating doesn't set `aria-invalid`.

Differences from the [WAI-ARIA slider pattern](https://www.w3.org/WAI/ARIA/apg/patterns/slider/):

- <kbd>Home</kbd> sets the value to one step instead of to `aria-valuemin`, which is 0. Use <kbd>Arrow Down</kbd> to reach 0.
- The Rating doesn't support <kbd>Page Up</kbd> and <kbd>Page Down</kbd>, which the pattern lists as optional keys.

## Troubleshooting

Use these answers when a Angular Rating doesn't behave as expected.

### Why doesn't the change event fire when I set the value?

The Angular Rating emits the change event only for user input: a click or a key. Setting the value in code, or calling the step methods, changes the value without the event, so update your own state where you set the value.

### Why doesn't a click on the current value reset the rating?

The Angular Rating keeps the value on a click on the current value, unless you set `allowReset`. Before `igniteui-webcomponents` 4.7.0, a click on the current value always reset the rating; set `allowReset` to keep that behavior after an upgrade.

### Why doesn't the hover event fire?

The Angular Rating emits the hover event only while `hoverPreview` is on, and not when the Rating is read-only or disabled. Set `hoverPreview` to receive the event.

## API References

The Angular Rating API reference lists the complete API surface for the target platform.

- [`IgcRatingComponent`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingComponent)
- [`IgcRatingSymbolComponent`](https://www.infragistics.com/api/webcomponents/igniteui-webcomponents/latest/classes/IgcRatingSymbolComponent)
- [`IgcFormControlDirective`](mcp:get_api_reference?platform=angular&component=IgcFormControlDirective)
- `rating-theme`

## Dependencies

The Angular Rating requires a theme to apply its colors and symbol sizes. See the framework-specific setup in [**Getting Started**](../general/getting-started.md).

The Rating requires the `igniteui-webcomponents` package, and Angular forms binding requires the `IgcFormControlDirective`. The `theme()` mixin of Ignite UI for Angular includes the `igc-rating` styles unless you exclude `igc-rating` through its `$exclude` parameter.

## Additional Resources

The following resources provide more Angular Rating guidance and project support:

- [Rating - Design System Component](https://www.infragistics.com/products/indigo-design/help/components/rating)
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

## Related Components

The Angular Rating collects a score on a scale of symbols. Use these components when the input needs a different form:

- [Slider](../slider/slider.md) - Use Slider when users pick a precise number from a continuous range, such as a price or a volume.
- [Radio Group](./radio.md) - Use Radio Group when each option needs a text label, such as Poor, Fair, and Good.
- [Icon](../layouts/icon.md) - Use Icon to draw the custom symbols of a Rating.

## FAQ

These questions cover common Angular Rating setup, accessibility, and usage scenarios.

  **Q: Can users select half stars?**

    Yes. Set the `step` property of the Angular Rating to `0.5`, and a click on the left half of a star selects the half value in a left-to-right layout. The arrow keys then change the value of the Angular Rating in steps of 0.5.
  
  **Q: How do I show an average rating that users can't change?**

    Set the `readOnly` property of the Angular Rating and set its value to the average, such as 4.3. The Angular Rating fills the symbols in part for a fractional value, stays focusable, and ignores clicks and keys.
  
  **Q: Is the Rating accessible to keyboard and screen reader users?**

    Yes. The Angular Rating is a single tab stop with the `slider` role, the arrow keys, Home, and End change its value, and screen readers read the value through `aria-valuetext`. Give the Angular Rating an accessible name with the `label` property or `aria-label`, and set `valueFormat` to describe the value in words.
  
  **Q: Does the Rating work with forms?**

    Yes. Import the `IgcFormControlDirective` from `igniteui-angular/directives` to bind the Angular Rating with `ngModel` or `formControlName`. The directive updates the model when the user changes the value and disables the Rating when you disable the form control.
  


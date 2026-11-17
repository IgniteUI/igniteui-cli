---
title: "React Rating Component"
description: "The Ignite UI for React Rating is a form-associated input for selecting or viewing a score on a scale of stars or custom symbols, with half-star steps."
keywords: "React Rating, Ignite UI for React, star rating, half-star rating, rating symbols"
license: MIT
last_updated: "2026-10-07"
relatedComponents: ["Slider", "RadioGroup"]
mentionedTypes: ["Rating", "RatingSymbol"]
llms:
  description: "The Ignite UI for React Rating is a form-associated component that lets users view and select a score on a scale of stars or custom symbols."
_tocName: Rating
---
# Rating

The Ignite UI for React Rating is a form-associated component that lets users view and select a score on a scale of stars or custom symbols.

The Rating supports half-star and other fractional values, a hover preview, single selection of distinct symbols, and full keyboard input.

## Live Demo

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
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

.rating-card igc-card-content {
    display: flex;
    padding-bottom: 0.5rem;
}
```
```tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCard, IgrCardContent, IgrCardHeader, IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RatingOverview() {
    return (
        <div className="sample">
            <IgrCard className="rating-card">
                <IgrCardHeader>
                    <span slot="title">Rate this product</span>
                    <span slot="subtitle">Your opinion matters to us!</span>
                </IgrCardHeader>
                <IgrCardContent>
                    <IgrRating aria-label="Rate this product" hoverPreview={true} />
                </IgrCardContent>
            </IgrCard>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RatingOverview/>);
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

To use the React Rating, follow the [Ignite UI for React Getting Started](../general-getting-started.md) topic for the basic project setup, then add the component for your target platform.

Install the **igniteui-react** package:

```cmd
npm install igniteui-react
```

Then import the [`IgrRating`](mcp:get_api_reference?platform=react&component=IgrRating) wrapper and the theme CSS:

```tsx
import { IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

After registration, render the [`IgrRating`](mcp:get_api_reference?platform=react&component=IgrRating) with a label:

```tsx
<IgrRating label="Rate this product" />
```

The Rating renders five stars and starts with a value of 0.

## Usage

Use the React Rating to collect a score for a product, a service, or an experience, or to show an average score that users can't change.

### Hover Preview

Set `hoverPreview` to fill the symbols up to the value under the pointer before the user clicks. When the pointer leaves the symbols, the React Rating shows its value again. A read-only or disabled Rating shows no preview.

While the preview is on, the Rating calls `onHover` with the value under the pointer:

```tsx
<IgrRating
  hoverPreview={true}
  label="Rate this article"
  onHover={(e: CustomEvent<number>) => setHint(`${e.detail} stars`)}
/>
```

### Reset

By default, a click on the current value keeps the value. Set `allowReset` to reset the React Rating to 0 when the user clicks the current value again.

```tsx
<IgrRating allowReset={true} label="Rate this song" />
```

### Read-Only

Set `readOnly` to show a score that users can't change, such as the average of all reviews. The value can be any number in the range, so a value of 4.3 fills four symbols and 30% of the fifth. A read-only React Rating stays in the tab order, and assistive technology announces it as read-only.

```tsx
<IgrRating readOnly={true} value={4.3} label="Average rating" />
```

### Layout

The `label` property renders a visible label above the symbols and names the React Rating for assistive technology. To show custom content next to the symbols, such as the current score, place it in the `value-label` slot:

```tsx
<IgrRating value={score} label="Rate this product" onChange={(e: CustomEvent<number>) => setScore(e.detail)}>
  <span slot="value-label">{score} of 5</span>
</IgrRating>
```

Give every React Rating an accessible name, and describe its value in words that fit the scale.

When the Rating has no visible `label`, set `aria-label` on it, or, with `igniteui-webcomponents` 7.4.1 and later, associate a `<label>` element with it. Assistive technology reads the value as "3 of 5" by default. Set `valueFormat` to replace this text: the Rating replaces `{0}` with the value and `{1}` with `max`, which also lets you localize the text.

```tsx
<IgrRating aria-label="Delivery speed" valueFormat="{0} out of {1} stars" />
```

Leave `label` unset to hide the label, or use the `value-label` slot to show the score.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
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
    font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
    letter-spacing: 0.1px;
    color: var(--ig-gray-600);
}

igc-rating {
    --ig-rating-label-color: var(--ig-gray-700);
}
```
```tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RatingLayout() {
    return (
        <div className="sample">
            <div className="layouts">
                <div className="layout">
                    <span className="layout-label">Label / On</span>
                    <IgrRating label="Rate your experience" value={3} />
                </div>
                <div className="layout">
                    <span className="layout-label">Label / Off</span>
                    <IgrRating aria-label="Rate your experience" value={3} />
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RatingLayout/>);
```

### Interaction States

The React Rating is enabled by default. Set `disabled` to turn it off:

```tsx
<IgrRating disabled={true} value={3} label="Rate this product" />
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
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
    font: 400 14px / 24px "Aktiv Grotesk", sans-serif;
    letter-spacing: 0.1px;
    color: var(--ig-gray-600);
}

igc-rating {
    --ig-rating-label-color: var(--ig-gray-700);
    --ig-rating-disabled-label-color: var(--ig-gray-500);
}
```
```tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RatingInteractionStates() {
    return (
        <div className="sample">
            <div className="states">
                <div className="state">
                    <span className="state-label">Enabled</span>
                    <IgrRating label="Rate your experience" value={1} />
                </div>
                <div className="state">
                    <span className="state-label">Disabled</span>
                    <IgrRating label="Rate your experience" value={1} disabled={true} />
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RatingInteractionStates/>);
```

### Empty/Full State

The `value` of the React Rating sets how full its symbols are. A value of 0, the default, shows all symbols empty, and a value equal to `max` shows all symbols full.

Keep the value in state and update it in the `onChange` handler:

```tsx
import { useState } from 'react';
import { IgrRating } from 'igniteui-react';

export default function MovieRating() {
  const [score, setScore] = useState(3);

  return (
    <IgrRating
      value={score}
      max={10}
      label="Rate this movie"
      onChange={(e: CustomEvent<number>) => setScore(e.detail)}
    />
  );
}
```

Set `step` to `0.5` to let users select half stars:

```tsx
<IgrRating step={0.5} value={3.5} label="Rate your stay" />
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
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
    font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
    letter-spacing: 0.1px;
    color: var(--ig-gray-600);
}

igc-rating {
    --ig-rating-label-color: var(--ig-gray-700);
}
```
```tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RatingStates() {
    return (
        <div className="sample">
            <div className="states">
                <div className="state">
                    <span className="state-label">Empty State</span>
                    <IgrRating label="Rate your experience" value={0} readOnly={true} />
                </div>
                <div className="state">
                    <span className="state-label">Full State</span>
                    <IgrRating label="Rate your experience" value={5} readOnly={true} />
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RatingStates/>);
```

### Size

The Rating is available in three sizes - Small, Medium and Large. The small, medium, and large sizes render 18px, 24px, and 36px symbols, and the React Rating uses the medium size by default. Set the `--ig-size` CSS variable to `--ig-size-small`, `--ig-size-medium`, or `--ig-size-large` to choose a size. For a size outside these presets, set `--ig-rating-symbol-size`:

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

```tsx
<IgrRating className="rating-large" label="Rate this product" />
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
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
    font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
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
```tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RatingSize() {
    return (
        <div className="sample">
            <div className="sizes">
                <div className="size">
                    <span className="size-label">Small</span>
                    <IgrRating className="size-small" label="Rate your experience" value={5} />
                </div>
                <div className="size">
                    <span className="size-label">Medium</span>
                    <IgrRating className="size-medium" label="Rate your experience" value={5} />
                </div>
                <div className="size">
                    <span className="size-label">Large</span>
                    <IgrRating className="size-large" label="Rate your experience" value={5} />
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RatingSize/>);
```

### Symbols

By default, the React Rating renders star icons. To use other symbols, place one [`IgrRatingSymbol`](mcp:get_api_reference?platform=react&component=IgrRatingSymbol) for each point of the scale inside the Rating. Each rating symbol shows its default slot content in the part of the symbol that the value covers and its `empty` slot content in the rest, so fill both slots, even with the same content. The number of rating symbols sets `max`, and the Rating ignores the `max` that you set.

The following rating uses registered heart icons. Register the icons first, as described in the [Icon](../layouts/icon.md) topic:

```tsx
import { IgrIcon, IgrRating, IgrRatingSymbol } from 'igniteui-react';

<IgrRating label="Rate this recipe">
  {[1, 2, 3, 4, 5].map((i) => (
    <IgrRatingSymbol key={i}>
      <IgrIcon name="favorite" collection="material" />
      <IgrIcon name="favorite_border" collection="material" slot="empty" />
    </IgrRatingSymbol>
  ))}
</IgrRating>
```

The Rating colors icons and text with the full and empty symbol colors of the theme. It renders content other than an Icon in the `empty` slot in grayscale, so the same emoji in both slots looks selected or empty.

### Single Selection

Set `single` to show only the selected symbol as full. Use single selection with symbols that each stand for one distinct value, such as a scale of faces. In single selection, the React Rating uses a `step` of 1 and rounds a fractional value up.

```tsx
const faces = ['😣', '😔', '😐', '🙂', '😆'];

<IgrRating single={true} label="How was your experience?">
  {faces.map((face) => (
    <IgrRatingSymbol key={face}>
      <span>{face}</span>
      <span slot="empty">{face}</span>
    </IgrRatingSymbol>
  ))}
</IgrRating>
```

### Forms

The React Rating is a form-associated element. Inside a `<form>`, it submits its value as text under its `name`.

```tsx
<form
  onSubmit={(e) => {
    e.preventDefault();
    console.log(new FormData(e.currentTarget).get('score'));
  }}
>
  <IgrRating name="score" label="Rate your stay" />
  <button type="submit">Send</button>
</form>
```

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

The React Rating exposes the following properties. See the API reference for the complete type definitions.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`value`](mcp:get_api_reference?platform=react&component=IgrRating&member=value) | `number` | `0` | The current value, from 0 to the maximum value. |
| [`max`](mcp:get_api_reference?platform=react&component=IgrRating&member=max) | `number` | `5` | The maximum value and the number of default symbols. Projected rating symbols set it to their count. |
| [`step`](mcp:get_api_reference?platform=react&component=IgrRating&member=step) | `number` | `1` | The smallest change of the value, from 0.001 to 1. |
| [`label`](mcp:get_api_reference?platform=react&component=IgrRating&member=label) | `string` | — | The visible label, which also names the rating. |
| [`valueFormat`](mcp:get_api_reference?platform=react&component=IgrRating&member=valueFormat) | `string` | — | The format of `aria-valuetext`. `{0}` stands for the value and `{1}` for the maximum value. |
| [`hoverPreview`](mcp:get_api_reference?platform=react&component=IgrRating&member=hoverPreview) | `boolean` | `false` | Whether the rating previews the value under the pointer. |
| [`readOnly`](mcp:get_api_reference?platform=react&component=IgrRating&member=readOnly) | `boolean` | `false` | Whether the user can't change the value. |
| [`single`](mcp:get_api_reference?platform=react&component=IgrRating&member=single) | `boolean` | `false` | Whether only the selected symbol is shown as full. |
| [`allowReset`](mcp:get_api_reference?platform=react&component=IgrRating&member=allowReset) | `boolean` | `false` | Whether a click on the current value resets the rating to 0. |
| `disabled` | `boolean` | `false` | Whether the rating is disabled. |
| `invalid` | `boolean` | `false` | Marks the rating as invalid through the `ig-invalid` custom state. The Rating themes don't style this state. |
| `name` | `string` | — | The name under which a form submits the value. |

## Methods

The React Rating exposes the following methods. The step methods change the value without emitting a change event.

| Method | Description |
| --- | --- |
| [`stepUp`](mcp:get_api_reference?platform=react&component=IgrRating&member=stepUp) | Increases the value by the given number of steps. The number defaults to 1. |
| [`stepDown`](mcp:get_api_reference?platform=react&component=IgrRating&member=stepDown) | Decreases the value by the given number of steps. The number defaults to 1. |
| `checkValidity` | Returns whether the value is valid, and emits `invalid` when it isn't. |
| `reportValidity` | Returns whether the value is valid, and shows the browser validation message when it isn't. |
| `setCustomValidity` | Sets a custom validation message. The rating is invalid while the message isn't empty. |

## Events

The React Rating emits the following events. It doesn't emit them when you set the value or call a method.

| Name | Type | Description |
| --- | --- | --- |
| [`onChange`](mcp:get_api_reference?platform=react&component=IgrRating&member=onChange) | `CustomEvent<number>` | Emitted when the user changes the value. The event detail holds the new value. |
| [`onHover`](mcp:get_api_reference?platform=react&component=IgrRating&member=onHover) | `CustomEvent<number>` | Emitted when the hover preview is on and the pointer moves to another value. The event detail holds the value under the pointer. |

## Styling

The React Rating takes its colors and its symbol size from the theme. Change them with the following CSS variables:

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

The Sass functions come from the `igniteui-theming` package. See the [Theming](../themes/overview.md) topic for the Sass setup.

```scss
@use "igniteui-theming" as *;

$custom-rating-theme: rating-theme(
  $symbol-full-color: #e41c77,
  $symbol-empty-color: #a9b8cc,
  $label-color: #344b65
);

:root {
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

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.sample {
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
    font: 500 14px / 24px "Aktiv Grotesk", sans-serif;
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
```tsx
import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrIcon, IgrRating, IgrRatingSymbol, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const icons = [
    { name: 'favorite', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>' },
    { name: 'favorite_border', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>' },
];

export default function RatingStyling() {
    useEffect(() => {
        icons.forEach((icon) => registerIconFromText(icon.name, icon.text, 'material'));
    }, []);

    return (
        <div className="sample">
            <div className="examples">
                <div className="example">
                    <span className="example-label">Custom icon and color</span>
                    <IgrRating className="heart-rating" aria-label="Rate your experience" value={3}>
                        {[1, 2, 3, 4, 5].map((symbol) => (
                            <IgrRatingSymbol key={symbol}>
                                <IgrIcon name="favorite" collection="material" />
                                <IgrIcon slot="empty" name="favorite_border" collection="material" />
                            </IgrRatingSymbol>
                        ))}
                    </IgrRating>
                </div>
                <div className="example">
                    <span className="example-label">10 stars</span>
                    <IgrRating className="star-rating" aria-label="Rate your experience" max={10} value={5} />
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RatingStyling/>);
```

### Styling with Tailwind

You can style the React Rating with Tailwind arbitrary properties that set its CSS variables. Make sure to [set up Tailwind](../themes/tailwind.md) first:

```tsx
<IgrRating
  label="Rate this product"
  className="[--ig-rating-symbol-full-color:#7B9E89] [--ig-rating-symbol-size:2rem]"
/>
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

/* Keep this order. An @import after the Tailwind imports is dropped, and in
   the samples browser one before the @layer statement drops the Tailwind
   imports, so Aktiv Grotesk goes between them. */
@layer theme, base, components, utilities;
@import url("https://use.typekit.net/bng2zgw.css");
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@source "./index.tsx";

@theme {
    --color-product-ink: #00142b;
    --color-product-muted: #556c86;
    --color-product-border: #d2dbe8;
    --color-product-primary: #0176ff;
    --color-product-primary-hover: #005dcc;
    --color-product-primary-active: #004699;
    --color-rating-full: #faa419;
    --color-rating-empty: #8a8a8a;
    --color-rating-label: #616161;
}
```
```tsx
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RatingTailwindStyling() {
    return (
        <div className="sample flex items-center justify-center">
            <div className="w-[328px] rounded-xl border border-product-border bg-white p-2 font-[aktiv-grotesk,sans-serif] [--ig-font-family:aktiv-grotesk,sans-serif]">
                <div className="flex items-center gap-4 px-4 py-2">
                    <img className="size-10 shrink-0 rounded-lg object-cover" src="https://dl.infragistics.com/x/img/rating/rating-headphones.png" alt="Wireless headphones" />
                    <div className="flex-1">
                        <span className="block text-sm leading-5 font-medium text-product-ink">Wireless Headphones</span>
                        <span className="block max-w-36 text-xs leading-4 font-semibold text-product-muted">Great sound quality and battery life!</span>
                    </div>
                    <span className="text-xl text-product-primary">$89</span>
                </div>
                <div className="flex items-end justify-between border-t border-product-border p-2">
                    <IgrRating
                        className="[--ig-rating-label-color:var(--color-rating-label)] [--ig-rating-symbol-empty-color:var(--color-rating-empty)] [--ig-rating-symbol-full-color:var(--color-rating-full)] [&::part(label)]:font-['Titillium_Web',sans-serif] [&::part(label)]:text-xs [&::part(label)]:leading-4 [&::part(label)]:font-normal [&::part(label)]:tracking-[0.4px]"
                        label="Rate this product"
                        hoverPreview={true}
                    />
                    <IgrButton
                        className="[--ig-contained-button-active-background:var(--color-product-primary-active)] [--ig-contained-button-background:var(--color-product-primary)] [--ig-contained-button-border-radius:0.375rem] [--ig-contained-button-focus-background:var(--color-product-primary-active)] [--ig-contained-button-focus-hover-background:var(--color-product-primary-hover)] [--ig-contained-button-focus-visible-background:var(--color-product-primary)] [--ig-contained-button-hover-background:var(--color-product-primary-hover)] [--ig-contained-button-size:1.875rem] [&::part(base)]:px-4 [&::part(base)]:text-sm [&::part(base)]:font-medium [&::part(base)]:tracking-[0.1px] [&::part(base)]:normal-case"
                        variant="contained"
                    >
                        Submit review
                    </IgrButton>
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RatingTailwindStyling/>);
```

## Accessibility

The React Rating is a slider: users reach it with the Tab key, change its value with the arrow keys, and hear the value through its ARIA attributes.

### Keyboard Interaction

The React Rating is a single tab stop, because only the slider element inside it, the `base` part, receives focus. A disabled Rating leaves the tab order. A read-only Rating stays in the tab order but ignores the following keys, so they keep their default browser actions, such as page scrolling.

| Key | Action |
| --- | --- |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves the focus to the next or the previous focusable element. The Rating doesn't handle these keys, so it never traps the focus. |
| <kbd>Arrow Right</kbd> | Increases the value by one step. In a right-to-left layout, decreases it. |
| <kbd>Arrow Left</kbd> | Decreases the value by one step. In a right-to-left layout, increases it. |
| <kbd>Arrow Up</kbd> | Increases the value by one step. |
| <kbd>Arrow Down</kbd> | Decreases the value by one step. |
| <kbd>Home</kbd> | Sets the value to one step, the lowest value that a click can select. |
| <kbd>End</kbd> | Sets the value to the maximum value. |

The React Rating handles these keys on `keydown`:

- It prevents their default action, so the arrow keys, Home, and End don't scroll the page while the Rating has focus.
- A key that you hold repeats its action.
- A key that you press together with Shift, Ctrl, Alt, or Meta does nothing.
- The value stays between 0 and the maximum value. A key that would move the value past a bound keeps the value and emits no event.
- Each key that changes the value emits the change event.

With a pointer, a click selects the value under the pointer, rounded up to the next step. A read-only or disabled Rating ignores clicks.

### Screen Readers / ARIA

The React Rating renders one focusable element, the `base` part, with the `slider` role. Its `tabindex` is `0`, or `-1` when the Rating is disabled, and it carries the following value attributes:

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

The React Rating also behaves as follows for assistive technology:

- The `symbols` part sets `aria-hidden="true"`, so the symbols, including projected icons and emoji, are hidden and don't need text alternatives. The value reaches assistive technology only through `aria-valuenow` and `aria-valuetext`.
- The `value-label` slot renders inside the slider. Screen readers read the value from `aria-valuetext`, so describe the value with `valueFormat` rather than with the slot content.
- The Rating doesn't use a live region. A changed value reaches assistive technology only through the slider attributes.
- The Rating doesn't set `aria-invalid`, so a custom validation message isn't exposed as an invalid state.

### Accessibility Compliance

Infragistics documents Ignite UI for React accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

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

Use these answers when a React Rating doesn't behave as expected.

### Why doesn't the change event fire when I set the value?

The React Rating emits the change event only for user input: a click or a key. Setting the value in code, or calling the step methods, changes the value without the event, so update your own state where you set the value.

### Why doesn't a click on the current value reset the rating?

The React Rating keeps the value on a click on the current value, unless you set `allowReset`. Before `igniteui-webcomponents` 4.7.0, a click on the current value always reset the rating; set `allowReset` to keep that behavior after an upgrade.

### Why doesn't the hover event fire?

The React Rating emits the hover event only while `hoverPreview` is on, and not when the Rating is read-only or disabled. Set `hoverPreview` to receive the event.

## API References

The React Rating API reference lists the complete API surface for the target platform.

- [`IgrRating`](mcp:get_api_reference?platform=react&component=IgrRating)
- [`IgrRatingSymbol`](mcp:get_api_reference?platform=react&component=IgrRatingSymbol)

## Dependencies

The React Rating requires a theme to apply its colors and symbol sizes. See the framework-specific setup in [**Getting Started**](../general-getting-started.md).

## Additional Resources

The following resources provide more React Rating guidance and project support:

- [Rating - Design System Component](https://www.infragistics.com/products/indigo-design/help/components/rating)
- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

## Related Components

The React Rating collects a score on a scale of symbols. Use these components when the input needs a different form:

- [Slider](./slider.md) - Use Slider when users pick a precise number from a continuous range, such as a price or a volume.
- [Radio Group](./radio.md) - Use Radio Group when each option needs a text label, such as Poor, Fair, and Good.
- [Icon](../layouts/icon.md) - Use Icon to draw the custom symbols of a Rating.

## FAQ

These questions cover common React Rating setup, accessibility, and usage scenarios.

  **Q: Can users select half stars?**

    Yes. Set the `step` property of the React Rating to `0.5`, and a click on the left half of a star selects the half value in a left-to-right layout. The arrow keys then change the value of the React Rating in steps of 0.5.
  
  **Q: How do I show an average rating that users can't change?**

    Set the `readOnly` property of the React Rating and set its value to the average, such as 4.3. The React Rating fills the symbols in part for a fractional value, stays focusable, and ignores clicks and keys.
  
  **Q: Is the Rating accessible to keyboard and screen reader users?**

    Yes. The React Rating is a single tab stop with the `slider` role, the arrow keys, Home, and End change its value, and screen readers read the value through `aria-valuetext`. Give the React Rating an accessible name with the `label` property or `aria-label`, and set `valueFormat` to describe the value in words.
  
  **Q: Does the Rating work with forms?**

    Yes. The React Rating is a form-associated element, so a `<form>` submits its value under its `name`. A disabled `<fieldset>` also disables the React Rating.
  


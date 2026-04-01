---
title: React Rating
_description: With Ignite UI for React Rating, allows users to view and provide feedback using unicode symbols, svg, or icons.
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React Rating components, React Rating controls
_license: MIT
mentionedTypes: ["Rating"]
_tocName: Rating
---

# React Rating Overview

The Ignite UI for React Rating component allows users to view and provide feedback.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.size-large {
    --ig-size: var(--ig-size-large);
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class RatingOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }       

    public render(): JSX.Element {
        return (
            <div className="container sample">                
                    <IgrRating className="size-large" label="Rate Experience" max={5} step={.5} hoverPreview={true}></IgrRating>                                    
            </div>
        );
    }  
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RatingOverview/>);
```


<!-- React -->

First, you need to the install the corresponding Ignite UI for React npm package by running the following command:

```cmd
npm install igniteui-react
```

<!-- end: React -->

Before using the [`IgrRating`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html), you need to register it as follows:

<!-- React -->

```tsx
import { IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
```

<!-- end: React -->

The simplest way to start using the [`IgrRating`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html) is as follows:

<!-- React -->

```tsx
  <IgrRating></IgrRating>
```

<!-- end: React -->

This will create a five-star rating component that can be used to input and read data from.

## Using Custom Symbols

The [`IgrRating`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html) component allows you to use custom symbols in place of the default star symbols. If you want to use a different symbol, like SVG, icon or another unicode symbol, you should place [`IgrRatingSymbol`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrratingsymbol.html) components between the opening and closing brackets of the [`IgrRating`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html):

<!-- React -->

```tsx
  <IgrRating className="size-large" label="Rate Experience" step={.5} hoverPreview={true}>
    <IgrRatingSymbol>
        <IgrIcon name='heart' collection="material"></IgrIcon>
    </IgrRatingSymbol>
    <IgrRatingSymbol>
        <IgrIcon  name='heart' collection="material"></IgrIcon>
    </IgrRatingSymbol>
    <IgrRatingSymbol>
      <IgrIcon  name='heart' collection="material"></IgrIcon>
    </IgrRatingSymbol>
    <IgrRatingSymbol>
       <IgrIcon  name='heart' collection="material"></IgrIcon>
    </IgrRatingSymbol>
    <IgrRatingSymbol>
       <IgrIcon  name='heart' collection="material"></IgrIcon>
    </IgrRatingSymbol>
</IgrRating>
```

<!-- end: React -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
.size-large {
    --ig-size: var(--ig-size-large);
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating, IgrRatingSymbol, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const emptyHeart = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 241.597 220.057' version='1.0'><path style='opacity:.98000004;fill:none;stroke:#000;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0' d='M243.452 1708.979c-26.934.23-51.58 21.476-55.081 48.293-3.114 23.844 7.33 47.4 23.968 64.215 27.515 27.805 61.227 49.794 83.447 82.547 4.39-4.689 9.278-12.066 14.227-17.529 25.23-27.85 58.166-48.013 80.865-78.155 17.175-22.806 19.103-58.113-.538-80.405-18.25-20.712-51.76-25.17-74.37-9.254-8.226 5.791-15.274 13.37-19.932 22.312-10.053-19.32-30.534-32.214-52.586-32.024z' transform='translate(-175.323 -1696.476)'/></svg>";
const heartIcon = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:svg="http://www.w3.org/2000/svg" id="svg1" viewBox="0 0 475.82 442.01" version="1.0"> <g id="layer1" transform="translate(-134.07 -225.8)"> <path id="path7" d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.75 135.93 170.08 228.56 303.3 87.57-132.4 228.56-172.85 228.56-303.3 0-66.24-53.76-120-120-120-48.05 0-89.4 28.37-108.56 69.18-19.16-40.81-60.52-69.18-108.56-69.18z" stroke="#000" stroke-width="18.7" fill="#e60000"/> </g> </svg>';

export default class RatingCustomSymbols extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        registerIconFromText("heart", heartIcon, "material");
        registerIconFromText("emptyHeart", emptyHeart, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrRating className="size-large" label="Rate Experience" step={.5} value={3} hoverPreview={true}>
                    <IgrRatingSymbol>
                        <div><IgrIcon name='heart' collection="material"></IgrIcon></div>
                        <div slot='empty'><IgrIcon name='emptyHeart' collection="material"></IgrIcon></div> 
                    </IgrRatingSymbol>
                        <IgrRatingSymbol>
                        <div><IgrIcon name='heart' collection="material"></IgrIcon></div>
                        <div slot='empty'><IgrIcon name='emptyHeart' collection="material"></IgrIcon></div>
                    </IgrRatingSymbol>
                    <IgrRatingSymbol>
                        <div><IgrIcon name='heart' collection="material"></IgrIcon></div>
                        <div slot='empty'><IgrIcon name='emptyHeart' collection="material"></IgrIcon></div>
                    </IgrRatingSymbol>
                    <IgrRatingSymbol>
                        <div><IgrIcon name='heart' collection="material"></IgrIcon></div>
                        <div slot='empty'><IgrIcon name='emptyHeart' collection="material"></IgrIcon></div>
                    </IgrRatingSymbol>
                    <IgrRatingSymbol>
                        <div><IgrIcon name='heart' collection="material"></IgrIcon></div>
                        <div slot='empty'><IgrIcon name='emptyHeart' collection="material"></IgrIcon></div>
                    </IgrRatingSymbol>
                </IgrRating>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RatingCustomSymbols/>);
```


> The number of rating symbols between the opening and closing brackets of the rating component determines the max value.

## Single Selection

The Ignite UI for React Rating component has a single selection mode that allows users to provide different icons/elements for the different rating values. In this case, only one of the icons/elements can be selected and reflect the feedback given by the user.

<!-- React -->

```tsx
<IgrRating single={true}>
  <IgrRatingSymbol>
      <div>😣</div>
      <div slot="empty">😣</div>
  </IgrRatingSymbol>
  <IgrRatingSymbol>
      <div>😣</div>
      <div slot="empty">😣</div>
  </IgrRatingSymbol>
  <IgrRatingSymbol>
      <div>😣</div>
      <div slot="empty">😣</div>
  </IgrRatingSymbol>
  <IgrRatingSymbol>
      <div>😣</div>
      <div slot="empty">😣</div>
  </IgrRatingSymbol>
  <IgrRatingSymbol>
      <div>😣</div>
      <div slot="empty">😣</div>
  </IgrRatingSymbol>
</IgrRating>
```

<!-- end: React -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating, IgrRatingSymbol } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class RatingSingleSelection extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">                
                    <IgrRating label="Rate Experience" single={true}>
                        <IgrRatingSymbol>                           
                            <div>😣</div>
                            <div slot="empty">😣</div>
                        </IgrRatingSymbol>
                        <IgrRatingSymbol>                           
                            <div>😔</div>
                            <div slot="empty">😔</div>
                        </IgrRatingSymbol>
                        <IgrRatingSymbol>                           
                            <div>😐</div>
                            <div slot="empty">😐</div>
                        </IgrRatingSymbol>
                        <IgrRatingSymbol>                           
                            <div>🙂</div>
                            <div slot="empty">🙂</div>
                        </IgrRatingSymbol>
                        <IgrRatingSymbol>                           
                            <div>😆</div>
                            <div slot="empty">😆</div>
                        </IgrRatingSymbol>                         
                    </IgrRating>                                                      
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RatingSingleSelection/>);
```


> Keep in mind that the `step` attribute doesn't work with single selection mode.

## Empty & Selected

The Ignite UI for React Rating component allows users to use different icons/elements for the empty and the selected state of a single rating value. It is mandatory to provide 2 icons for each slot (empty and full) when declaring a symbol, even if they are the same. For instance:

<!-- React -->

```tsx
<IgrRatingSymbol>
    <div><IgrIcon name='bandage' collection="material"></IgrIcon></div>
    <div slot='empty'><IgrIcon name='bacteria' collection="material"></IgrIcon></div>
</IgrRatingSymbol>
```

<!-- end: React -->

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating, IgrRatingSymbol, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const bandageIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="bdbandage-desc bdbandage-title" fit="" preserveAspectRatio="xMidYMid meet"><title id="bdbandage-title">Bandage Icon</title><desc id="bdbandage-desc">A picture depicting a bandage.</desc><path d="M3.212 10.03a3 3 0 010-4.242l2.576-2.576a3 3 0 014.242 0l.556.556-6.818 6.818zm17.5.334L10.364 20.707a4 4 0 01-5.657 0l-1.414-1.414a4 4 0 010-5.657L13.636 3.293a4 4 0 015.657 0l1.414 1.414a4 4 0 010 5.657zM14 5a1 1 0 101-1 1 1 0 00-1 1zm-2.5 2.5a1 1 0 101-1 1 1 0 00-1 1zM9 10a1 1 0 101-1 1 1 0 00-1 1zm-4 6a1 1 0 10-1-1 1 1 0 001 1zm1.75 2.25a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zm.75 3.25a1 1 0 10-1-1 1 1 0 001 1zM10 19a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zm1.75 2.25a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zM15 14a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zm1.75 2.25a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zM20 9a1 1 0 10-1 1 1 1 0 001-1zm.232 4.414l-6.818 6.818.556.556a3 3 0 004.242 0l2.576-2.576a3 3 0 000-4.242z"></path></svg>';
const bacteriaIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="bcbacteria-desc bcbacteria-title" fit="" preserveAspectRatio="xMidYMid meet"><title id="bcbacteria-title">Bacteria Icon</title><desc id="bcbacteria-desc">A picture depicting a bacteria.</desc><path d="M20.867 7.664h-1.3a4.439 4.439 0 00-.467-1.157l.914-.915a1.132 1.132 0 00-1.6-1.6l-.915.914a4.477 4.477 0 00-1.157-.478V3.133a1.133 1.133 0 10-2.265 0v1.294a4.491 4.491 0 00-1.157.478L12 3.991a1.132 1.132 0 00-1.6 1.6l.8.8L9.6 8l-.8-.8a1.133 1.133 0 10-1.6 1.6l.8.8-1.6 1.6-.8-.8A1.132 1.132 0 004 12l.914.914a4.453 4.453 0 00-.477 1.157H3.133a1.133 1.133 0 100 2.265h1.3a4.439 4.439 0 00.477 1.157l-.914.915a1.132 1.132 0 001.6 1.6l.915-.914a4.439 4.439 0 001.157.477v1.3a1.133 1.133 0 102.265 0v-1.3a4.453 4.453 0 001.157-.477l.914.914a1.132 1.132 0 001.6-1.6l-.8-.8 1.6-1.6.8.8a1.133 1.133 0 101.6-1.6l-.8-.8 1.6-1.6.8.8a1.132 1.132 0 101.6-1.6l-.914-.914a4.453 4.453 0 00.477-1.157h1.3a1.133 1.133 0 100-2.265zM15 11a2 2 0 112-2 2 2 0 01-2 2zm-5.5 5a1.5 1.5 0 111.5-1.5A1.5 1.5 0 019.5 16z"></path></svg>';

export default class RatingEmptyAndSelected extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        registerIconFromText("bandage", bandageIcon, "material");
        registerIconFromText("bacteria", bacteriaIcon,"material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">                
                    <IgrRating>
                        <IgrRatingSymbol>
                            <div><IgrIcon name='bandage' collection="material"></IgrIcon></div>
                            <div slot='empty'><IgrIcon name='bacteria' collection="material"></IgrIcon></div> 
                        </IgrRatingSymbol>
                         <IgrRatingSymbol>
                            <div><IgrIcon name='bandage' collection="material"></IgrIcon></div>
                            <div slot='empty'><IgrIcon name='bacteria' collection="material"></IgrIcon></div>                           
                        </IgrRatingSymbol>
                        <IgrRatingSymbol>
                            <div><IgrIcon name='bandage' collection="material"></IgrIcon></div>
                            <div slot='empty'><IgrIcon name='bacteria' collection="material"></IgrIcon></div>                           
                        </IgrRatingSymbol>
                        <IgrRatingSymbol>
                            <div><IgrIcon name='bandage' collection="material"></IgrIcon></div>
                            <div slot='empty'><IgrIcon name='bacteria' collection="material"></IgrIcon></div>                           
                        </IgrRatingSymbol> 
                        <IgrRatingSymbol>
                            <div><IgrIcon name='bandage' collection="material"></IgrIcon></div>
                            <div slot='empty'><IgrIcon name='bacteria' collection="material"></IgrIcon></div>                           
                        </IgrRatingSymbol>
                    </IgrRating>                                                      
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RatingEmptyAndSelected/>);
```


## Configuration

### Single

Turns on the [`single`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html#single) visual mode for the rating. Useful when using symbols that communicate unique values, like feedback emoji faces.

### Value

The [`value`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html#value) attribute sets the current value of the component.

### Label

The [`label`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html#label) attribute allows setting the label value of the rating component.

### Value Format

A format string which sets [aria-valuetext](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext). All instances of it will be replaced with the current value of the control. Important for screen-readers and useful for localization.

### Max Value

The [`max`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html#max) attribute sets the maximum allowed value of the rating component.

### Step

The [`step`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html#step) attribute sets the allowed fraction of steps between two symbols. Useful when splitting the rating symbols in halves.

### Hover Preview

<!-- React -->

The `hoverPreview` attribute makes the component show the possible outcome of user selection on hover. It is useful when you want to give instant feedback about what the selected value could be.

<!-- end: React -->

### Read-Only

The [`readOnly`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html#readOnly) attribute allows the users to set the [`IgrRating`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html) in read-only mode. This attribute is useful when you want to use the component for information purposes only.

### Disabled

The [`disabled`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html#disabled) attribute disables the component, making it impossible to select a value using the mouse or keyboard.

## Methods

### Step Up

The [`stepUp`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html#stepUp) method increments the value of the component by `n` steps. Determined by the `step` factor.

### Step Down

The [`stepDown`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html#stepDown) method decrements the value of the component by `n` steps. Determined by the `step` factor.

## Events

<!-- React -->

The [`IgrRating`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html) component emits two separate events - `hover` and `change`.

<!-- end: React -->

### Hover Event

<!-- React -->

The `hover` event is fired when hovering over a symbol. It provides the value of the symbol under the mouse cursor. Useful for creating custom value labels and readouts.

<!-- end: React -->

### Change Event

<!-- React -->

The `change` event is fired when the selected value changes.

<!-- end: React -->

## Styling

The [`IgrRating`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `base` | The main wrapper which holds all of the rating elements. |
| `label` | The label part. |
| `value-label` | The value label part. |
| `symbols` | A wrapper for all rating symbols. |
| `symbol` | The part of the encapsulated default symbol. |
| `full` | The part of the encapsulated full symbols. |
| `empty` | The part of the encapsulated empty symbols. |

```css
igc-rating::part(full) {
  color: var(--ig-primary-500)
}

igc-rating::part(empty) {
  color: var(--ig-secondary-200);
}
```

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-rating {
    --symbol-size: 44px;
    --symbol-full-color: hsla(var(--ig-warn-A400), var(--ig-warn-a));
    --symbol-empty-color: hsla(var(--ig-warn-A400), var(--ig-warn-a));
}

igc-rating[disabled] {
    --symbol-full-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
    --symbol-empty-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

igc-rating::part(label) {
    font-size: 18px;
    font-weight: 600;
    text-transform: var(--ig-overline-text-transform);
    color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

igc-rating::part(symbols) {
    gap: 8px; 
}

.size-large {
    --ig-size: var(--ig-size-large);
}
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class RatingStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }       

    public render(): JSX.Element {
        return (
            <div className="container sample">                
                <IgrRating className="size-large" label="Styled Rating" value={2.5} step={.5} hoverPreview={true}></IgrRating>                                    
            </div>
        );
    }  
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RatingStyling/>);
```


## API Reference

- [`IgrRating`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrrating.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

---
title: Web Components DateTimeInput | Infragistics
_description: Infragistics' Web Components DateTimeInput allows the user to edit date and time in an input element
_keywords: Web Components input, Ignite UI for Web Components, Infragistics
_license: MIT
mentionedTypes: ["DateTimeInput"]
_tocName: Date Time Input
---

# Web Components Date Time Input Overview

The Ignite UI for Web Components Date Time Input allows the user to set and edit the date and time in a chosen input element. The user can edit both date and time portions using an editable masked input. Additionally, one can specify a desired display and input format, as well as min and max values to utilize validation.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Usage

<!-- WebComponents -->

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

You will then need to import the [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html), its necessary CSS, and register its module, like so:

```ts
import { defineComponents, IgcDateTimeInput } from 'igniteui-webcomponents';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

defineComponents(IgcDateTimeInput);
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

<!-- end: WebComponents -->

### Value binding

The easiest way to set the value of the [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html) component is by passing a Date object to the [`value`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html#value) property:

```typescript
const input = document.querySelector('igc-date-time-input') as IgcDateTimeInputComponent;
const date = new Date();

input.value = date;
```

<!-- WebComponents, React -->

The [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html) also accepts [ISO 8601](https://tc39.es/ecma262/#sec-date-time-string-format) strings.

The string can be a full `ISO` string, in the format `YYYY-MM-DDTHH:mm:ss.sssZ` or it could be separated into date-only and time-only portions.

#### Date-only

If a date-only string is bound to the [`value`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html#value) property of the component, it needs to be in the format `YYYY-MM-DD`. The [`inputFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html#inputFormat) is still used when typing values in the input and it does not have to be in the same format. Additionally, when binding a date-only string, the directive will prevent time shifts by coercing the time to be `T00:00:00`.

#### Time-only

Time-only strings are normally not defined in the `ECMA` specification, however to allow the directive to be integrated in scenarios which require time-only solutions, it supports the 24 hour format - `HH:mm:ss`. The 12 hour format is not supported.

#### Full ISO string

If a full `ISO` string is bound, the directive will parse it only if all elements required by [Date.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#date_time_string_format) are provided.

All falsy values, including `InvalidDate` will be parsed as `null`. Incomplete date-only, time-only, or full `ISO` strings will be parsed as `InvalidDate`.

<!-- end: WebComponents, React -->

### Keyboard Navigation

The [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html) has intuitive keyboard navigation that makes it easy to increment, decrement, or jump through different `DateParts` among others without having to touch the mouse.

|Keys|Description|
|----|-----------|
| <kbd>←</kbd> | Move one character to the beginning |
| <kbd>→</kbd> | Move one character to the end |
| <kbd>HOME</kbd> | Move to the beginning |
| <kbd>END</kbd> | Move to the end |
| <kbd>CTRL</kbd> / <kbd>CMD</kbd> + <kbd>←</kbd> | Move to the beginning of the date/time section - current one or left one |
| <kbd>CTRL</kbd> / <kbd>CMD</kbd> + <kbd>→</kbd> | Move to the end of the date/time section - current on or right one |
| Focus on a date/time part + <kbd>↓</kbd> | Decrements a date/time part |
| Focus on a date/time part + <kbd>↑</kbd> | Increments a date/time part |
| <kbd>CTRL</kbd> / <kbd>CMD</kbd> + <kbd>;</kbd> | Sets the current date/time as the value of the editor |

## Setting formats

The [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html) supports different display and input formats.

It uses [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) which allows it to support predefined format options, such as `long` and `short`, `medium` and `full`. Additionally, it can also accept a custom string constructed from supported characters, such as `dd-MM-yy`. Also, if no [`displayFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html#displayFormat) is provided, the component will use the [`inputFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html#inputFormat) as such.

### Input Format

The table bellow shows formats that are supported by the component's [`inputFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html#inputFormat):

|Format|Description|
|-------|----------|
| `d` | Date, will be coerced with a leading zero while editing. |
| `dd` | Date with an explicitly set leading zero. |
| `M` | Month, will be coerced with a leading zero while editing. |
| `MM` | Month with an explicitly set leading zero. |
| `yy` | Short year format. |
| `yyyy` | Full year format. |
| `h` | Hours in 12-hour format, will be coerced with a leading zero while editing. |
| `hh` | Hours in 12-hour format with an explicitly set leading zero. |
| `H` | Hours in 24-hour format, will be coerced with a leading zero while editing. |
| `HH` | Hours in 24-hour format, with an explicitly set leading zero. |
| `m` | Minutes, will be coerced with a leading zero while editing. |
| `mm` | Minutes with an explicitly set leading zero. |
| `tt` | AM/PM section for 12-hour format. |

To set a specific input format, pass it as a string to the [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html). This will set both the expected user input format and the `mask`. Additionally, the [`inputFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html#inputFormat) is locale based, so if none is provided, the editor will default to `dd/MM/yyyy`.

```html
<igc-date-time-input input-format="dd-MM-yy" display-format="medium"/>
```

If all went well, you should see the following in your browser:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


### Display format

The date time input exposes predefined formats for displaying date/time in various manners. All of the examples below are given in en-US locale.

| Option | Example |
|:-------:|:-----------|
| `short` | 7/17/22, 12:00 AM |
| `medium` | Jul 17, 2022, 12:00:00 AM |
| `long` | July 17, 2022 at 12:00:00 AM GMT+3 |
| `full` | Sunday, July 17, 2022 at 12:00:00 AM Eastern European Summer Time |
| `shortDate` | 7/17/22 |
| `mediumDate` | Jul 17, 2022 |
| `longDate` | July 17, 2022 |
| `fullDate` | Sunday, July 17, 2022 |
| `shortTime` | 12:00 AM |
| `mediumTime` | 12:00:00 AM |
| `longTime` | 12:00:00 AM GMT+3 |
| `fullTime` | 12:00:00 AM Eastern European Summer Time |

Furthermore, users can construct a displayFormat string using the supported symbols described in the following table. <br>

| Type | Format | Description | Example |
|:---|-------:|:-----------|:--------|
| Day | `d` | Minimum digits. | 7, 17 |
|   | `dd` | Zero padded. | 07, 17 |
| Month | `M` | Minimum digits. | 3, 10 |
|   | `MM` | Zero padded. | 03, 10 |
|   | `MMM` | Abbreviated | Oct |
|   | `MMMM` | Wide | October |
|   | `MMMMM` | Narrow | O |
| Year | `y` | Numeric | 2022 |
|   | `yy` | Two digit | 22
|   | `yyy` | Numeric | 2022
|   | `yyyy` |  Numeric  | 2022
| Hour 1-12 | `h` | Minimum digits | 1, 12 |
|   | `hh` | Zero padded | 01, 12
| Hour 1-24 | `H` | Minimum digits | 1, 23 |
|   | `HH` | Zero padded | 01, 23 |
| Minute | `m` | Minimum digits | 1, 59 |
|   | `mm` | Zero padded | 01, 59 |
| Second |  `s` | Minimum digits | 1, 59 |
|   | `ss` | Zero padded | 01, 59 |
| Time Period | `t` | Abbreviated | AM, PM |
|   | `tt` | Abbreviated | AM, PM |
|   | `ttt` | Short | noon |
|   | `tttt` | Long | noon |
|   | `ttttt` | Narrow | n |

> \[!Note]
> Many locales use the same time period string, irrespective of the format specified. Also, it has an effect only if a 12-hour clock is used.

## Min/max value

You can specify [`min`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html#min) and [`max`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html#max) properties to restrict input and control the validity of the component. Just like the [`value`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html#value) property, they can be of type `string`.

```ts
const input = document.querySelector('igc-date-time-input') as IgcDateTimeInputComponent;

input.min = new Date(2021, 0, 1);
```

```html
<igc-date-time-input max="2022-01-01T21:00:00.000Z"></igc-date-time-input>
```

If all went well, the component will be `invalid` if the value is greater or lower than the given dates. Check out the example below:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Step up/down

The [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html) exposes public [`stepUp`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html#stepUp) and [`stepDown`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html#stepDown) methods. They increment or decrement a specific `DatePart` of the currently set date and time and can be used in a couple of ways.

In the first scenario, if no specific DatePart is passed to the method, a default DatePart will increment or decrement, based on the specified [`inputFormat`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html#inputFormat) and the internal component implementation. In the second scenario, you can explicitly specify what DatePart to manipulate as it may suite different requirements. Also, both methods accept an optional `delta` parameter of type number which can be used to set the stepUp/stepDown step.

<!-- WebComponents, Blazor -->

Additionally, [`spinDelta`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html#spinDelta) is a property that can be used to apply a different delta to each date time segment. It will be applied when spinning with the keyboard, mouse wheel or with the [`stepUp`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html#stepUp) and [`stepDown`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html#stepDown) methods, as long as they don't have the delta parameter provided since it will take precedence over [`spinDelta`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html#spinDelta).

<!-- end: WebComponents, Blazor -->

```ts
const input = document.getElementById('dateTimeInput') as IgcDateTimeInputComponent;

const spinDelta: DatePartDeltas = {
  date: 2,
  month: 3,
  year: 10,
};

input.spinDelta = spinDelta;
```

Try it in the example below:

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Styling

The [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html) component exposes CSS parts for almost all of its inner elements. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `container` | The main wrapper that holds all main input elements. |
| `input` | The native input element. |
| `label` | The native label element. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |
| `helper-text` | The helper text wrapper. |

```css
igc-date-time-input {
    --_background: var(--ig-primary-200);
    --_foreground: var(--ig-gray-900);

    --input-prefix-color: var(--_foreground);
    --input-suffix-color: var(--_foreground);
    --input-prefix-color--filled: var(--_foreground);
    --input-suffix-color--filled: var(--_foreground);
    --input-prefix-background: var(--_background);
    --input-suffix-background: var(--_background);
    --input-prefix-background--filled: var(--_background);
    --input-suffix-background--filled: var(--_background);
    --input-prefix-color--focused: var(--_foreground);
    --input-suffix-color--focused: var(--_foreground);
    --input-prefix-background--focused: var(--_background);
    --input-suffix-background--focused: var(--_background);
}
```

```css
igc-date-time-input {
  --_background: var(--ig-primary-200);
  --_foreground: var(--ig-gray-900);

  --input-prefix-color: var(--_foreground);
  --input-suffix-color: var(--_foreground);
  --input-prefix-color--filled: var(--_foreground);
  --input-suffix-color--filled: var(--_foreground);
  --input-prefix-background: var(--_background);
  --input-suffix-background: var(--_background);
  --input-prefix-background--filled: var(--_background);
  --input-suffix-background--filled: var(--_background);
  --input-prefix-color--focused: var(--_foreground);
  --input-suffix-color--focused: var(--_foreground);
  --input-prefix-background--focused: var(--_background);
  --input-suffix-background--focused: var(--_background);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## API References

- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html)
- [`IgcMaskInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcmaskinputcomponent.html)
- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html)
- [`IgcDateTimeInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcdatetimeinputcomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

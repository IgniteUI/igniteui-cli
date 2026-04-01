---
title: Localization (i18n) | Ignite UI for Web Components | Infragistics
_description: Use Infragistics' Web Components Localization for components to easily translate and localize fully Infragistics' Web Components components
_keywords: Ignite UI for Web Components, Infragistics, Localization, Internationalization, i18n
mentionedTypes: ["Grid"]
_tocName: Localization(i18n)
---

# Web Components Localization (i18n)

The new localization introduces more features with fewer requirements for both the localization strings and formatting for all available locales. The formatting is based on the standards introduced by the `Intl` API.

Currently, Ignite UI for Web Components ships with resource strings for the following languages: `Bulgarian`, `Czech`, `Danish`, `Dutch`, `English`, `French`, `German`, `Hungarian`, `Italian`, `Japanese`, `Korean`, `Norwegian`, `Polish`, `Portuguese`, `Romanian`, `Spanish`, `Swedish`, `Turkish`, `Traditional Chinese (zh-Hant)` and `Simplified Chinese (zh-Hans)`. These are available via the `igniteui-i18n-resources` package, except for English which comes as a default localization.

## Web Components Localization Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.grid-toolbar__title {
    font-size: 1.25rem;
}
```


> Note: Hindi (HI) included in the sample is for illustrative purposes only, to demonstrate the possibility of passing a custom localization object. In this sample, it contains only a few localized strings for the summary. For more details, see the [Custom localized resource strings](#custom-localized-resource-strings) section below.

## Locale

The term **locale** refers to the general strings defining the different languages and regions. These are based on the [BCP 47](https://developer.mozilla.org/en-US/docs/Glossary/BCP\_47\_language_tag) tag definition. Most of the basic ones are described in the [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry). For a list of languages, refer to the [ISO 639 language standard](https://www.loc.gov/standards/iso639-2/).

It affects both the formatting of dates and numbers and the localized resource strings that Ignite UI for Web Components components use. The default locale for Ignite UI for Web Components is `en-US`.

The locale can be set in several ways, either globally or per component.

### Global API

<!-- WebComponents -->

You can set the locale that will be used globally using the `setCurrentI18n` method, available from the [`igniteui-webcomponents`](https://www.npmjs.com/package/igniteui-webcomponents) or [`igniteui-webcomponents-grids`](https://www.npmjs.com/package/igniteui-webcomponents-grids) package. All types and APIs can be imported from either package. It affects both formatting and the registered resource strings used in all components. For more on resource strings, see [Localized resource strings](#localized-resource-strings).

<!-- end: WebComponents -->

```ts
setCurrentI18n('de');
```

Ignite UI for Web Components supports the full range of locales supported by `Intl`. If a provided locale is not valid or supported, the default `en-US` locale is used until a valid locale is set.

In general, resources should be registered under the languages, regions, and scripts for the tags intended for use, so that the components are properly localized. For more information, see the [Regions and Scripts](#regions-and-scripts) section.

### `lang` attribute

This approach enables setting the localization through the `lang` global attribute of the `HTML` tag. This attribute is observed, and if it changes, all rendered components update their resource strings to the currently set language. All rules regarding the tag used apply as described above.

> Note: This works only on root level and will not work for inner elements on the page.

<!-- WebComponents, Blazor -->

```html
<html lang="ja">
    <head>
        <title>My app</title>
    </head>
    <body></body>
</html>
```

### Per component

Each component also has its own `locale` property. When specified, the component is not affected by the global locale.

```html
<igc-grid locale="ja">
    <igc-column field="ProductName" header="Product Name" groupable="true"></igc-column>
    <igc-column field="QuantityPerUnit" header="Quantity Per Unit" groupable="true"></igc-column>
</igc-grid>
```

## Formatting

The locale, as mentioned previously, affects the formatting in all Ignite UI for Web Components components that render dates, numbers, and related strings, and is based on the `Intl` API. It is enabled by default.

### Date formats

Components such as the Grid or DatePicker allow specifying a date format (per column for the grid). The tables below show the available options that can be set or used to build a custom format.

Available predefined format options:

| Option | Equivalent to | Examples (given in en-US locale) |
| ------ | --------------| --------------------------------|
| 'short' | 'M/d/yy, h:mm a' | 6/15/15, 9:03 AM |
| 'medium' | 'MMM d, y, h:mm:ss a' | Jun 15, 2015, 9:03:01 AM |
| 'long' | 'MMMM d, y, h:mm:ss a z' | June 15, 2015 at 9:03:01 AM GMT+1 |
| 'full' | 'EEEE, MMMM d, y, h:mm:ss a zzzz' | Monday, June 15, 2015 at 9:03:01 AM GMT+01:00 |
| 'shortDate' | 'M/d/yy' | 6/15/15 |
| 'mediumDate' | 'MMM d, y' | Jun 15, 2015 |
| 'longDate' | 'MMMM d, y' | June 15, 2015 |
| 'fullDate' | 'EEEE, MMMM d, y' | Monday, June 15, 2015 |
| 'shortTime' | 'h:mm a' | 9:03 AM |
| 'mediumTime' | 'h:mm:ss a' | 9:03:01 AM |
| 'longTime' | 'h:mm:ss a z' | 9:03:01 AM GMT+1 |
| 'fullTime' | 'h:mm:ss a zzzz' | 9:03:01 AM GMT+01:00 |

Custom format options:

| Date field | Value | Description | Example |
|-|-|-|-|
| Weekday | c, cc, ccc, E, EE, EEE | Short version of the weekday | Tue |
| | cccc, EEEE | Long version of the weekday | Tuesday |
| | ccccc, EEEEE | Narrow version of the weekday | T |
| Day| d | Numeric display (single digit when possible) | 1, 10 |
| | dd | 2-digit always (zero padded) | 01, 10 |
| Month | M, L | Numeric display (single digit when possible) | 8, 12 |
| | MM, LL | 2-digit always (zero padded) | 08, 12 |
| | MMM, LLL | Short month name | Oct |
| | MMMM, LLLL | Long month name | October |
| | MMMMM, LLLLL | Narrow month name | O |
| Year | y, yyy, yyyy | Numeric display | 1, 24, 632, 2025 |
| | yy | 2-digit display (zero padded when possible) | 01, 24, 32, 25 |
| ISO 8601 year  | Y, YYY, YYYY | Numeric display | 1, 24, 632, 2025 |
| | YY | 2-digit display (zero padded when possible) | 01, 24, 32, 25 |
| Era | G, GG, GGG | Short display | AD, BC |
| | GGGG | Long display |  Anno Domini, Before Christ|
| | GGGGG | Narrow display | A, B |
| Minute | m | Numeric (single digit when possible) | 1, 5, 22 |
| | mm | 2-digit display (zero padded)| 01, 05, 22 |
| Hour 1-12 | h | Numeric (single digit when possible) | 8, 12 |
| | hh | 2-digit (zero padded) | 08, 13 |
| Hour 0-23 | H | Numeric (single digit when possible) | 8, 21 |
| | HH | 2-digit  (zero padded)| 08, 21 |
| Hour 0-11 | K | Numeric (single digit when possible) | 0, 11 |
| | KK | 2-digit (zero padded) | 00, 11 |
| Second | s | Numeric (single digit when possible) | 0...59 |
| | ss | 2-digit (zero padded) | 00...59 |
| Fractional seconds | S | Numeric for 1 digit | 0...9 |
| | SS | Numeric for 2 digits | 00...99 |
| | SSS | Numeric for 3 digits | 000...999 |
| Period of time - abbreviated | a, t | Lower case always | am, pm |
| | aa, aaa, tt, ttt | Upper case always | AM, PM |
| | aaaa, tttt | Case based on locale | am, pm, AM, PM |
| | aaaaa, ttttt | Narrow lower case always | a, p |
| Period of time - extended | b, bb, bbb, B, BB, BBB | Short display. Based on `Intl` locale | en-GB: at night |
| | bbbb, BBBB | Long display. Based on `Intl` locale| en-GB: at night |
| | bbbbb, BBBBB | Narrow display. Based on `Intl` locale | en-GB: at night |
| Timezone | z, zz, zzz, Z, ZZ, ZZZ, O, OO, OOO | Short display | GMT+4 |
| | zzzz, ZZZZ, OOOO | Long display | GMT+0430 |

## Localized resource strings

All Ignite UI for Web Components components render in English by default and can be rendered in any of the listed languages. There are three ways to achieve this globally and one way per component. For any language not currently available, a custom translation can be provided for each resource string available through the API.

The translations for the component strings are stored in resource strings and need to be registered in the localization system before the components can use them.

<!-- WebComponents, React -->

To achieve that, you first need to install the [`igniteui-i18n-resources`](https://www.npmjs.com/package/igniteui-i18n-resources) package, which contains the localized resource strings for all languages:

    npm install igniteui-i18n-resources --save-dev

After that, register each language to be made available. For example, German and Japanese:

```ts
import { ResourceStringsDE, ResourceStringsJA } from 'igniteui-i18n-resources';

registerI18n(ResourceStringsDE, 'de');
registerI18n(ResourceStringsJA, 'ja');
```

<!-- end: WebComponents, React -->

You also need to specify the locale to which the resource strings will apply. If an invalid tag is provided, the resources are set for the default `en-US` locale.

### Regions and scripts

The `language + region` or `language + script` portion of the locale used to register resources is taken into account, as these are the most commonly used combinations. Region and script are separated by `-` and are usually defined in the second or third position — for example, `en-US`, `en-GB`, or `en-Latn`.

If neither region nor script is specified, the registered resources apply to all locales using that base language (for example, `en`). However, if resources are also defined for specific regions or scripts, only those locales without their own defined resources fall back to the base language resources.

Script takes higher priority than region when registering resources. It is recommended to use either region or script, without mixing both simultaneously. This makes it easier to manage and identify which resources are available for a given locale.

If both region and script are used, consider the `en` language with `GB` region and `Latn` script as an example. If resources are defined for both `en-GB` and `en-Latn`, and the locale is later set to `en-Latn-GB` (specifying both region and script), the script resources take priority. If script resources are not available, the region resources are used. If neither region nor script resources are registered, the default `en` resources are used if available.

## Custom localized resource strings

If Ignite UI for Web Components does not provide resource strings for the required language, custom resource strings can always be provided.

> Note: Contributions to the [`igniteui-i18n-resources`](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources) GitHub repo with additional languages are welcome.

<!-- WebComponents -->

You can use the provided `IResourceStrings` type for all components to get typings for the resource strings used:

```ts
import { IResourceStrings } from 'igniteui-webcomponents';

export const customResourcesForAll: IResourceStrings = {
    //...
};
registerI18n(customResourcesForAll, 'custom');
```

<!-- end: WebComponents -->

Or for a specific component separately, in this case the grids:

<!-- WebComponents -->

```ts
import { IGridResourceStrings } from 'igniteui-webcomponents';

export const customGridResources: IGridResourceStrings = {
    grid_summary_count: 'गणना',
    grid_summary_min: 'न्यून',
    grid_summary_max: 'अधिक',
    grid_summary_sum: 'योग',
    grid_summary_average: 'औसत'
};

```

<!-- end: WebComponents -->

<!-- WebComponents -->

The existing resource strings can be mixed with custom strings in any combination, including for the default English language:

```ts
import { IResourceStrings, CalendarResourceStringsEN, DatePickerResourceStringsEN } from 'igniteui-webcomponents';

export const customResources: IResourceStrings = Object.assign(
    {},
    CalendarResourceStringsEN,
    DatePickerResourceStringsEN,
    {
        grid_summary_count: 'Custom count',
        grid_summary_min: 'Minium',
        grid_summary_max: 'Maximum',
        grid_summary_sum: 'Custom summary'
    }
);
registerI18n(customResources, 'en');

```

<!-- end: WebComponents -->

> Note: The last examples set only specific resource strings. The remaining strings default to English if they are not available for the components in use.

## Available resource strings

- [ResourceStringsBG](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/BG/resources.ts)
- [ResourceStringsCS](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/CS/resources.ts)
- [ResourceStringsDA](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/DA/resources.ts)
- [ResourceStringsDE](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/DE/resources.ts)
- [ResourceStringsES](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/ES/resources.ts)
- [ResourceStringsFR](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/FR/resources.ts)
- [ResourceStringsHU](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/HU/resources.ts)
- [ResourceStringsIT](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/IT/resources.ts)
- [ResourceStringsJA](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/JA/resources.ts)
- [ResourceStringsKO](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/KO/resources.ts)
- [ResourceStringsNB](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/NB/resources.ts)
- [ResourceStringsNL](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/NL/resources.ts)
- [ResourceStringsPL](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/PL/resources.ts)
- [ResourceStringsPT](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/PT/resources.ts)
- [ResourceStringsRO](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/RO/resources.ts)
- [ResourceStringsSV](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/SV/resources.ts)
- [ResourceStringsTR](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/TR/resources.ts)
- [ResourceStringsZHHANS](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/ZH-HANS/resources.ts)
- [ResourceStringsZHHANT](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources/src/i18n/ZH-HANT/resources.ts)

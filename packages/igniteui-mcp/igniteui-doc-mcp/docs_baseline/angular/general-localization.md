---
title: Localization (i18n) - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Localization mechanism provides the ability to change/localize strings in the components.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components
_tocName: Localization (i18n)
---

# Localization (i18n)

## Localization (i18n)

>Note: As of 21.1.0 this is the recommended way of applying localization to the Ignite UI for Angular components.

With our new localization we introduce more features with less requirements for both our localization strings and formatting for all available locales. The formatting is now based on the standards introduced by the `Intl` API.

Currently, Ignite UI for Angular ships with resource strings for the following languages: `Bulgarian`, `Czech`, `Danish`, `Dutch`, `English`, `French`, `German`, `Hungarian`, `Italian`, `Japanese`, `Korean`, `Norwegian`, `Polish`, `Portuguese`, `Romanian`, `Spanish`, `Swedish`, `Turkish`, `Traditional Chinese (zh-Hant)` and `Simplified Chinese (zh-Hans)`. These are available via the `igniteui-angular-i18n` package, except for English which comes as a default localization in `igniteui-angular`.

### Angular Localization Example

```typescript
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { DATA } from '../../../data/nwindData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { GridResourceStringsEN, IGridResourceStrings, registerI18n, setCurrentI18n } from 'igniteui-angular/core';
import { IgxColumnComponent, IgxGridToolbarComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { FormsModule } from '@angular/forms';
import {
    IgxResourceStringsBG, IgxResourceStringsCS, IgxResourceStringsDA, IgxResourceStringsDE,
    IgxResourceStringsES, IgxResourceStringsFR, IgxResourceStringsHU, IgxResourceStringsIT,
    IgxResourceStringsJA, IgxResourceStringsKO, IgxResourceStringsNB, IgxResourceStringsNL,
    IgxResourceStringsPL, IgxResourceStringsPT, IgxResourceStringsRO, IgxResourceStringsSV,
    IgxResourceStringsTR, IgxResourceStringsZHHANS, IgxResourceStringsZHHANT
 } from 'igniteui-angular-i18n';

@Component({
    selector: 'app-localization-all-resources',
    styleUrls: ['./localization-all-resources.component.scss'],
    templateUrl: 'localization-all-resources.component.html',
    imports: [IgxGridComponent, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxSelectComponent, FormsModule, IgxSelectItemComponent, IgxColumnComponent]
})
export class LocalizationAllResourcesComponent implements OnInit {
    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    public data: any[];
    public locale: string = 'EN';
    public locales: { type: string, resource: object }[];
    public selectLocales = [
        'HI', 'BG', 'CS', 'DA', 'DE', 'EN', 'ES', 'FR', 'HU', 'IT', 'JA', 'KO', 'NB', 'NL',
        'PL', 'PT', 'RO', 'SV', 'TR', 'zh-Hans', 'zh-Hant'
    ];
    public partialCustomHindi: IGridResourceStrings;

    constructor() { }
    public ngOnInit(): void {
        this.data = DATA;

        // Creating a custom locale (HI) for specific grid strings.
        // Similarly can localize all needed strings in a separate IgxResourceStringsHI file (feel free to contribute)
        this.partialCustomHindi = {
            igx_grid_summary_count: 'गणना',
            igx_grid_summary_min: 'न्यून',
            igx_grid_summary_max: 'अधिक',
            igx_grid_summary_sum: 'योग',
            igx_grid_summary_average: 'औसत'
        };

        registerI18n(IgxResourceStringsBG, 'bg');
        registerI18n(IgxResourceStringsCS, 'cs');
        registerI18n(IgxResourceStringsDA, 'da');
        registerI18n(IgxResourceStringsDE, 'de');
        registerI18n(IgxResourceStringsES, 'es');
        registerI18n(IgxResourceStringsFR, 'fr');
        registerI18n(IgxResourceStringsHU, 'hu');
        registerI18n(IgxResourceStringsIT, 'it');
        registerI18n(IgxResourceStringsJA, 'ja');
        registerI18n(IgxResourceStringsKO, 'ko');
        registerI18n(IgxResourceStringsNB, 'nb');
        registerI18n(IgxResourceStringsNL, 'nl');
        registerI18n(IgxResourceStringsPL, 'pl');
        registerI18n(IgxResourceStringsPT, 'pt');
        registerI18n(IgxResourceStringsRO, 'ro');
        registerI18n(IgxResourceStringsSV, 'sv');
        registerI18n(IgxResourceStringsTR, 'tr');
        registerI18n(IgxResourceStringsZHHANS, 'zh-Hans');
        registerI18n(IgxResourceStringsZHHANT, 'zh-Hant');
        registerI18n(this.partialCustomHindi, 'hi');
    }

    public updateLocale() {
        setCurrentI18n(this.locale);
    }
}
```
```html
<div class="grid__wrapper">
  <igx-grid #grid [data]="data" [autoGenerate]="false" height="520px" width="100%"
    [allowFiltering]="true" [locale]="locale" [rowEditable]="true" [primaryKey]="'ProductID'">
    <igx-grid-toolbar>
      <igx-grid-toolbar-title>Grid with Localization</igx-grid-toolbar-title>
      <igx-select [(ngModel)]="locale" (ngModelChange)="updateLocale()">
        @for (locale of selectLocales; track locale) {
          <igx-select-item [value]="locale">
            {{ locale }}
          </igx-select-item>
        }
      </igx-select>
    </igx-grid-toolbar>
    <igx-column field="ProductName" header="Product Name" [groupable]="true">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [groupable]="true">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [sortable]="true" [hasSummary]="true"
      [dataType]="'currency'" [groupable]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [groupable]="true">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [groupable]="true">
    </igx-column>
  </igx-grid>
</div>
```
```scss
:host {
    .grid__wrapper {
        margin: 16px 32px;
    }

    --ig-size: var(--ig-size-small);
}
```

>Note: Hindi (HI) included in the sample is only for illustrational purposes and to emphasize on the possibility to pass a custom localization object. In this sample, it contains only several localized strings for the summary. More details at [Custom localized resource strings](#custom-localized-resource-strings) section below.

### Locale

By locale, we will refer to the general strings defining the different languages and regions on Earth. In our case they are based on the [BCP 47](https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag) tag definition and most of the basic ones are described in the [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) and for a list of languages you can also `refer to [ISO 639 language standard](https://www.loc.gov/standards/iso639-2/).

It affects both the formatting of the dates and numbers and the localized resource strings that our components use. The default locale for the Ignite UI for Angular components is `en-US`.

There are several ways that you can set locale. Either globally or per component.

#### Global API

You can set the locale that will be used globally using the `setCurrentI18n` method, that comes from the `igniteui-angular` package. It will affect both formatting and registered resource strings used in all of our components. For more on resource strings see [Localized resource strings](#localized-resource-strings)

```ts
setCurrentI18n('de');
```

We support the full range of possible locales supported by `Intl`. If you provide a locale that is not valid or supported, it will use the default `en-US` locale for the time being, until you change it to a valid one.

In general you should register your resources under the languages, regions and scripts for the tags you plan to use, so that your components are localized as well. For more see [Regions and Scripts](#regions-and-scripts) section.

#### `lang` attribute

With this approach we have the ability to set localization through the `lang` global attribute of the `HTML` tag. This attribute is being watched and if it is changed, all rendered components will update their resource strings to the currently set language. All rules regarding the tag used apply as described above.

> Note: This works only on root level and will not work for inner elements on the page.

```html
<html lang="ja">
    <head>
        <title>My app</title>
    </head>
    <body></body>
</html>
```

#### Angular API

You can use also Angular's built in [LOCALE_ID](https://angular.dev/api/core/LOCALE_ID) token to set the locale for the whole application. The tag provided will work the same way for our components compared to how our API handles.

#### Per component

Each component will also have its own `locale` property, that you can specify and it will then not be affected by the global locale.

```html
<igx-grid [data]="data" locale="ja">
    <igx-column field="ProductName" header="Product Name" [groupable]="true"></igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [groupable]="true"></igx-column>
</igx-grid>
```

### Formatting

Locale like mentioned affects the formatting in all Ignite UI for Angular components that render dates, numbers and some strings related to them. Previously you had to import [Angular's global variants](https://angular.dev/guide/i18n/import-global-variants) of the locale data they provide in order to be able to use it in your app. This is no longer the case and this comes built in our localization by default and you won't need to import and register anything for it to work.

Since we are just introducing this feature, the Angular's way is still available and very much working as before and is still the default way, if you are already using it.

If you are just starting though, you will only need to add the `provideIgniteIntl()` method to your app config, which will make sure that you use the new formatting, even if you have the Angular's locale data imported:

```ts
export const appConfig: ApplicationConfig = {
    providers: [
        //...
        provideIgniteIntl()
    ]
};
```

#### Date formats

Components like the IgxGrid or IgxDatePicker allow for specifying date format (for the grid per column). The lists bellow show the available options that you can set or build your own custom format.

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

### Localized resource strings

All components in Ignite UI for Angular render in English by default and they can be rendered in any of the listed languages at the top as well. There are three ways you can achieve that globally and one way per component. For any language that is not currently available, custom translation can be provided for each resource string that is available through our API.

The translations for the component strings are stored in resource strings and they will need to be registered in our localization system so that the component can use them.

To achieve that, you first need to install the `igniteui-angular-i18n` package, which contains the localized resource strings for all languages:

```
npm install igniteui-angular-i18n --save-dev
```

After that you will need to register each language you would like to have available to them. Lets say German and Japanese:

```ts
import { IgxResourceStringsDE, IgxResourceStringsJA } from 'igniteui-angular-i18n';

registerI18n(IgxResourceStringsDE, 'de');
registerI18n(IgxResourceStringsJA, 'ja');
```

You will also need to provide to which locale they will apply to. If not a valid tag is provided, it will set the resources for the default 'en-US' locale.

#### Regions and scripts

We take into account the `language + region` or `language + script` from the locale you used to register your resources, since these are the most commonly used. They are separated by `-` and region/script are usually defined on a second or third position. For example, `en-US` and `en-GB` or `en-Latn`.

If you do not use region or script, the resources you register will apply to all locales that use the `en` language, for example. That is unless you define resources for the regions and scripts as well. Then only for those you have not defined, will return the resources for `en` in this case.

The script for us has higher priority than the region when registering resources. We recommend in general to use either region or script, without mixing them and using both at the same time. That way it is easier to manage and know which one you have available and should be used, based on the locale you set.

Anyway, if you happen to use them both, lets take for example the `en` language with `GB` region and `Latn` script. If you define resources for both region and script like `en-GB` and `en-Latn`, and later on you set your locale, having both region and script to `en-Latn-GB`, we will take the resources from the script one first. If it is not available, then we will return the available region, unless you explicitly set your locale to `en-Latn`, of course. If you have for none of them registered resources, we will take the default for `en` if available.

### Customize a component

If you would like to have specific component in your app use either the already registered resources globally but with different localization or completely replace the resource strings for it, you can do that the following way.

#### Language and formatting

If you would like to set different from the global localization for a component, you can do that by setting the `locale` property. This will affect the language of the resource strings used as well as the formatting, since they are tied together.

With this approach you should already have the available resource strings globally registered:

```ts
import { IgxResourceStringsJA } from 'igniteui-angular-i18n';

registerI18n(IgxResourceStringsJA, 'ja');
```

By setting the `locale` property of the component, this will override the global locale currently in use:

```html
<igx-grid [data]="data" locale="ja">
    <igx-column field="ProductName" header="Product Name" [groupable]="true"></igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [groupable]="true"></igx-column>
</igx-grid>
```

##### Language only

If you would like to change only the language of the component, without changing the locale, you can even set the resource strings of each component using the `resourceStrings` property, which will override the globally used ones:

```html
<igx-grid [data]="data" [resourceStrings]="resourcesDE">
    <igx-column field="ProductName" header="Product Name" [groupable]="true"></igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [groupable]="true"></igx-column>
</igx-grid>
```

You will need to make sure you use the correct resource string type for the component you would like to override it with. Each component has its own set of resource strings. In this case for the grid in German:

```ts
import { GridResourceStringsDE } from 'igniteui-angular-i18n';

// Inside App Component:
public resourcesDE = GridResourceStringsDE;
```

### Custom localized resource strings

If you would like to localize your app, but we do not provide resource strings for the language you use and would like to provide your own translation, you can always provide custom resource string. You can do that globally or per component(using the `resourceStrings` property).

>Note: Feel free to contribute to the [`igniteui-i18n-resources`](https://github.com/IgniteUI/igniteui-i18n/tree/master/projects/igniteui-i18n-resources) package with more languages. The `igniteui-angular-i18n` are based on them.

You can use the provided `IResourceStrings` type for all components to get typings for the resource stings used:

```ts
import { IResourceStrings } from 'igniteui-angular';

export const customResourcesForAll: IResourceStrings = {
    //...
};
registerI18n(customResourcesForAll, 'custom');
```

Or for a specific component separately, in this case the grids:

```ts
import { IGridResourceStrings } from 'igniteui-angular';

export const customGridResources: IGridResourceStrings = {
    grid_summary_count: 'गणना',
    grid_summary_min: 'न्यून',
    grid_summary_max: 'अधिक',
    grid_summary_sum: 'योग',
    grid_summary_average: 'औसत'
};

```

You can even mix however you want the already existing resource strings with the ones you want to customize, even for the default English language:

```ts
import { IResourceStrings, CalendarResourceStringsEN, DatePickerResourceStringsEN } from 'igniteui-angular';

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

>Note: The last examples set only specific resource strings. This means that the rest will default to English, if they are not available for the components in use to get.

### Available resource strings

- [IgxResourceStringsBG](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/BG/resources.ts)
- [IgxResourceStringsCS](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/CS/resources.ts)
- [IgxResourceStringsDA](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/DA/resources.ts)
- [IgxResourceStringsDE](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/DE/resources.ts)
- [IgxResourceStringsES](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/ES/resources.ts)
- [IgxResourceStringsFR](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/FR/resources.ts)
- [IgxResourceStringsHU](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/HU/resources.ts)
- [IgxResourceStringsIT](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/IT/resources.ts)
- [IgxResourceStringsJA](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/JA/resources.ts)
- [IgxResourceStringsKO](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/KO/resources.ts)
- [IgxResourceStringsNB](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/NB/resources.ts)
- [IgxResourceStringsNL](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/NL/resources.ts)
- [IgxResourceStringsPL](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/PL/resources.ts)
- [IgxResourceStringsPT](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/PT/resources.ts)
- [IgxResourceStringsRO](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/RO/resources.ts)
- [IgxResourceStringsSV](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/SV/resources.ts)
- [IgxResourceStringsTR](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/TR/resources.ts)
- [IgxResourceStringsZHHANS](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/ZH-HANS/resources.ts)
- [IgxResourceStringsZHHANT](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/ZH-HANT/resources.ts)


## Legacy Localization (i18n)

>Note: This is an old way of handling localization that was recommended until 21.0.x. We suggest using the new available way above if you are using newer versions. This will still work until further notice.

Currently, Ignite UI for Angular ships with resource strings for the following languages and scripts: Bulgarian, Czech, Danish, Dutch, English, French, German, Hungarian, Italian, Japanese, Korean, Norwegian, Polish, Portuguese, Romanian, Spanish, Swedish, Turkish, Traditional Chinese (zh-Hant) and Simplified Chinese (zh-Hans). These are available via the `igniteui-angular-i18n` package, except for English which comes as a default localization in `igniteui-angular`.

With only a few lines of code, users can easily change the localization strings in Ignite UI for Angular components.

### Angular Localization Example

```typescript
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBG from '@angular/common/locales/bg';
import localeCS from '@angular/common/locales/cs';
import localeDA from '@angular/common/locales/da';
import localeDE from '@angular/common/locales/de';
import localeEN from '@angular/common/locales/en';
import localeES from '@angular/common/locales/es';
import localeFR from '@angular/common/locales/fr';
import localeHU from '@angular/common/locales/hu';
import localeIT from '@angular/common/locales/it';
import localeJA from '@angular/common/locales/ja';
import localeKO from '@angular/common/locales/ko';
import localeNB from '@angular/common/locales/nb';
import localeNL from '@angular/common/locales/nl';
import localePL from '@angular/common/locales/pl';
import localePT from '@angular/common/locales/pt';
import localeRO from '@angular/common/locales/ro';
import localeSV from '@angular/common/locales/sv';
import localeTR from '@angular/common/locales/tr';
import localeHI from '@angular/common/locales/hi';
import localeHans from '@angular/common/locales/zh-Hans';
import localeHant from '@angular/common/locales/zh-Hant';
import { DATA } from '../../../data/nwindData';
import { IgxGridComponent, GridResourceStringsEN, IGridResourceStrings, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxSelectComponent, IgxSelectItemComponent, IgxColumnComponent } from 'igniteui-angular';
import {
    IgxResourceStringsBG, IgxResourceStringsCS, IgxResourceStringsDA, IgxResourceStringsDE,
    IgxResourceStringsES, IgxResourceStringsFR, IgxResourceStringsHU, IgxResourceStringsIT,
    IgxResourceStringsJA, IgxResourceStringsKO, IgxResourceStringsNB, IgxResourceStringsNL, IgxResourceStringsPL,
    IgxResourceStringsPT, IgxResourceStringsRO, IgxResourceStringsSV, IgxResourceStringsTR,
    IgxResourceStringsZHHANS, IgxResourceStringsZHHANT
} from 'igniteui-angular-i18n';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-localization-all-resources-old',
    styleUrls: ['./localization-all-resources.component.scss'],
    templateUrl: 'localization-all-resources.component.html',
    imports: [IgxGridComponent, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxSelectComponent, FormsModule, IgxSelectItemComponent, IgxColumnComponent]
})
export class LocalizationAllResourcesOldComponent implements OnInit {
    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    public data: any[];
    public locale: string;
    public locales: { type: string, resource: object }[];
    public selectLocales = [
        'HI', 'BG', 'CS', 'DA', 'DE', 'EN', 'ES', 'FR', 'HU', 'IT', 'JA', 'KO', 'NB', 'NL',
        'PL', 'PT', 'RO', 'SV', 'TR', 'zh-Hans', 'zh-Hant'
    ];
    public partialCustomHindi: IGridResourceStrings;

    constructor() { }
    public ngOnInit(): void {
        registerLocaleData(localeBG);
        registerLocaleData(localeCS);
        registerLocaleData(localeDA);
        registerLocaleData(localeDE);
        registerLocaleData(localeEN);
        registerLocaleData(localeES);
        registerLocaleData(localeFR);
        registerLocaleData(localeHU);
        registerLocaleData(localeIT);
        registerLocaleData(localeJA);
        registerLocaleData(localeKO);
        registerLocaleData(localeNB);
        registerLocaleData(localeNL);
        registerLocaleData(localePL);
        registerLocaleData(localePT);
        registerLocaleData(localeRO);
        registerLocaleData(localeSV);
        registerLocaleData(localeTR);
        registerLocaleData(localeHI);
        registerLocaleData(localeHans);
        registerLocaleData(localeHant);

        this.data = DATA;

        // Creating a custom locale (HI) for specific grid strings.
        // Similarly can localize all needed strings in a separate IgxResourceStringsHI file (feel free to contribute)
        this.partialCustomHindi = {
            igx_grid_summary_count: 'गणना',
            igx_grid_summary_min: 'न्यून',
            igx_grid_summary_max: 'अधिक',
            igx_grid_summary_sum: 'योग',
            igx_grid_summary_average: 'औसत'
        };

        this.locales = [
            { type: 'BG', resource: IgxResourceStringsBG },
            { type: 'CS', resource: IgxResourceStringsCS },
            { type: 'DA', resource: IgxResourceStringsDA },
            { type: 'DE', resource: IgxResourceStringsDE },
            { type: 'ES', resource: IgxResourceStringsES },
            { type: 'FR', resource: IgxResourceStringsFR },
            { type: 'HU', resource: IgxResourceStringsHU },
            { type: 'IT', resource: IgxResourceStringsIT },
            { type: 'JA', resource: IgxResourceStringsJA },
            { type: 'KO', resource: IgxResourceStringsKO },
            { type: 'EN', resource: GridResourceStringsEN },
            { type: 'HI', resource: this.partialCustomHindi },
            { type: 'NB', resource: IgxResourceStringsNB },
            { type: 'NL', resource: IgxResourceStringsNL },
            { type: 'PL', resource: IgxResourceStringsPL },
            { type: 'PT', resource: IgxResourceStringsPT },
            { type: 'RO', resource: IgxResourceStringsRO },
            { type: 'SV', resource: IgxResourceStringsSV },
            { type: 'TR', resource: IgxResourceStringsTR },
            { type: 'zh-Hans', resource: IgxResourceStringsZHHANS },
            { type: 'zh-Hant', resource: IgxResourceStringsZHHANT }
        ];
        this.locale = 'EN';
    }

    public updateLocale() {
        const newLocale = this.locales.find(x => x.type === this.locale).resource;
        this.grid.resourceStrings = newLocale;
    }
}
```
```html
<div class="grid__wrapper">
  <igx-grid #grid [data]="data" [autoGenerate]="false" height="520px" width="100%"
    [allowFiltering]="true" [locale]="locale" [rowEditable]="true" [primaryKey]="'ProductID'">
    <igx-grid-toolbar>
      <igx-grid-toolbar-title>Grid with Localization</igx-grid-toolbar-title>
      <igx-select [(ngModel)]="locale" (ngModelChange)="updateLocale()">
        @for (locale of selectLocales; track locale) {
          <igx-select-item [value]="locale">
            {{ locale }}
          </igx-select-item>
        }
      </igx-select>
    </igx-grid-toolbar>
    <igx-column field="ProductName" header="Product Name" [groupable]="true">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [groupable]="true">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [sortable]="true" [hasSummary]="true"
      [dataType]="'currency'" [groupable]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [groupable]="true">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [groupable]="true">
    </igx-column>
  </igx-grid>
</div>
```
```scss
:host {
    .grid__wrapper {
        margin: 16px 32px;
    }

    --ig-size: var(--ig-size-small);
}
```

>Note: Hindi (HI) included in the sample is only for illustrational purposes and to emphasize on the possibility to pass a custom localization object. In this sample, it contains only several localized strings for the summary. More details at [Utilize own localized resources](#utilize-own-localized-resources) section below.

### Usage

### Load localized resources from npm package

You can localize an application in one of the languages available in the `igniteui-angular-i18n` package like this:

Install the package by executing `npm install igniteui-angular-i18n --save-dev`

Import the resource strings for the desired language and either change the strings for a component instance, using the component's `resourceStrings` input.

```html
<igx-grid [data]="data" [resourceStrings]="resourcesDE" [locale]="locale">
    <igx-grid-toolbar>
        <igx-grid-toolbar-title>German Locale</igx-grid-toolbar-title>
    </igx-grid-toolbar>
    <igx-column field="ProductName" header="Product Name" [groupable]="true">
    </igx-column>
    <igx-column field="QuantityPerUnit" header="Quantity Per Unit" [groupable]="true">
    </igx-column>
    <igx-column field="UnitPrice" header="Unit Price" [sortable]="true" [hasSummary]="true"
        [dataType]="'currency'" [groupable]="true">
    </igx-column>
    <igx-column field="OrderDate" header="Order Date" [dataType]="'date'" [groupable]="true">
    </igx-column>
    <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'" [groupable]="true">
    </igx-column>
</igx-grid>
```

```typescript
import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import localeDE from '@angular/common/locales/de';
import { GridResourceStringsDE } from 'igniteui-angular-i18n';

@Component({
    selector: 'app-locale',
    styleUrls: ['./locale.component.scss'],
    templateUrl: 'locale.component.html'
})
export class LocaleComponent implements OnInit {
    public resourcesDE = GridResourceStringsDE;
    public locale = 'DE';
    public data: any[];

    constructor() {
        registerLocaleData(localeDE);
    }
}
```

Alternatively, you can call the `changei18n()` function passing the corresponding resource object to change the localization for all components.

```typescript
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { changei18n } from "igniteui-angular/core";
import { IgxResourceStringsJA } from 'igniteui-angular-i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public ngOnInit(): void {
        changei18n(IgxResourceStringsJA);
    }
}
```

>Note: Feel free to contribute to the [`igniteui-angular-i18n`](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n) package with more languages!

#### Utilize own localized resources

`changei18n` function expects an `IResourceStrings` object. If the language you want to use is not available in the `igniteui-angular-i18n` package, or simply want to change a particular string, you can pass a custom object containing your string resources for the language and components you need. This will change the global i18n for the igniteui-angular components.

```typescript
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { changei18n, IGridResourceStrings } from "igniteui-angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public partialCustomHindi: IGridResourceStrings;

    public ngOnInit(): void {
        this.partialCustomHindi = {
            igx_grid_summary_count: 'गणना',
            igx_grid_summary_min: 'न्यून',
            igx_grid_summary_max: 'अधिक',
            igx_grid_summary_sum: 'योग',
            igx_grid_summary_average: 'औसत'
        };
        // This will change all grid application instances' strings to the newly provided ones
        changei18n(this.partialCustomHindi);
    }
}
```

Alternatively, you may get all currently available component resource strings. There is objects for each component containing localizable strings. The values could be replaced in order to be localized and then the object can be passed to the `changei18n` function, as a parameter.

```typescript
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { changei18n, GridResourceStringsEN, TimePickerResourceStringsEN } from "igniteui-angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public ngOnInit(): void {
        const currentRS = {
            ...GridResourceStringsEN,
            ...TimePickerResourceStringsEN
        };

        for (const key of Object.keys(currentRS)) {
            currentRS[key] = '[Localized] '+ currentRS[key];
        }

        changei18n(currentRS);
    }
}
```

#### Localize specific strings for a specific instance of a component

If only a single `igx-grid` instance should be localized, there is a way. The `resourceStrings` property should be used and it should be set to a new instance of `IGridResourceStrings` type.

```typescript
const newGridRes: IGridResourceStrings = {
    igx_grid_filter: '[Localized]Filter',
    igx_grid_filter_row_close: '[Localized]Close'
}

this.grid.resourceStrings = newGridRes;
```

### Available resource strings

- [IgxResourceStringsBG](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/BG/resources.ts)
- [IgxResourceStringsCS](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/CS/resources.ts)
- [IgxResourceStringsDA](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/DA/resources.ts)
- [IgxResourceStringsDE](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/DE/resources.ts)
- [IgxResourceStringsES](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/ES/resources.ts)
- [IgxResourceStringsFR](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/FR/resources.ts)
- [IgxResourceStringsHU](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/HU/resources.ts)
- [IgxResourceStringsIT](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/IT/resources.ts)
- [IgxResourceStringsJA](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/JA/resources.ts)
- [IgxResourceStringsKO](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/KO/resources.ts)
- [IgxResourceStringsNB](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/NB/resources.ts)
- [IgxResourceStringsNL](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/NL/resources.ts)
- [IgxResourceStringsPL](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/PL/resources.ts)
- [IgxResourceStringsPT](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/PT/resources.ts)
- [IgxResourceStringsRO](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/RO/resources.ts)
- [IgxResourceStringsSV](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/SV/resources.ts)
- [IgxResourceStringsTR](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/TR/resources.ts)
- [IgxResourceStringsZHHANS](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/ZH-HANS/resources.ts)
- [IgxResourceStringsZHHANT](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n/src/i18n/ZH-HANT/resources.ts)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
- [Ignite UI for Angular **ResourceStrings**](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular-i18n)

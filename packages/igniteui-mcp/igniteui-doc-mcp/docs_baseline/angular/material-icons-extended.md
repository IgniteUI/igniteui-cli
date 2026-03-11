---
title: Material Icons Extended - Superset of material icons | MIT license
_description: Ignite UI for Angular extends the material icons set to provide the designers and developers a wide range of icons to choose from. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Icon components, Angular Icon controls, Material icons extended
_license: MIT
_tocName: Material Icons Extended
---

# Material Icons Extended

<p class="highlight">The Ignite UI Material Icons Extended is a subset of icons that extends the material icon set by Google.</p>

<div class="sample-container loading" style="height: 700px">
    <iframe id="material-icons-extended-iframe" seamless="" class="lazyload no-theming" width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-display/material-icons-extended" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div class="divider--half"></div>

## Installation

```sh
npm install @igniteui/material-icons-extended
```

## Usage

First, let's see how we can register a single icon in our component:

```typescript
import { Component, OnInit } from '@angular/core';
import { IgxIconService } from 'igniteui-angular/icon';
// import { IgxIconService } from '@infragistics/igniteui-angular'; for licensed package
import { github } from '@igniteui/material-icons-extended';
// ...
export class SampleComponent implements OnInit {
  constructor(private iconService: IgxIconService) {}

  ngOnInit(): void {
    // Register a single icon
    this.iconService.addSvgIconFromText(github.name, github.value, 'imx-icons');
  }
}
```

Now, let's see how to register multiple icons/categories:

```typescript
//...
import { health, programming } from '@igniteui/material-icons-extended';

export class SampleComponent implements OnInit {
  public allIcons = [
    ...health,
    ...programming,
  ];
  //...
  addIcons() {
    for (let icon of this.allIcons) {
      this.iconService.addSvgIconFromText(icon.name, icon.value, 'imx-icons');
    }
  }

  ngOnInit(): void {
    this.addIcons();
  }
}
```

To use the icons in your component template:

```html
<igx-icon family="imx-icons" name="github"></igx-icon>
```

For more information and other types of usage, go to our [GitHub Repository](https://github.com/IgniteUI/material-icons-extended).

## Additional Resources

<div class="divider--half"></div>

[`IgxIconService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxiconservice.html)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

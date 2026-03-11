---
title: Angular Card Component – Ignite UI for Angular - MIT license 
_description: With Angular Card component you can present users with dashboards and engaging text, images, icons or buttons as an entry point for detailed information. Try it now.
_keywords: Angular Card component, Angular Card control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
_license: MIT
_tocName: Card
---

# Angular Card Component Overview

<p class="highlight">
Angular Card represents a flexible container that has different elements like title text, descriptions, image styles, call to action buttons, links and others. In order to represent a given scenario/content in the best possible way, it offers various display options, headers, footers, as well as background colors, animations, and more.  

This lightweight Angular Card component is used for creating all sorts of cards, some of them can be – business cards, material flipping cards, stacked cards.
</p>

## Angular Card Example

Below you can see a basic sample of a well-crafted Ignite UI for Angular Card with main card sections like image, title, subtitle, primary card content, container for a button.

```typescript
import { Component } from '@angular/core';
import { Card } from './card.blueprint';
import { IgxCardActionsComponent, IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective, IgxCardMediaDirective } from 'igniteui-angular/card';
import { IgxButtonDirective, IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';


@Component({
    selector: 'app-card',
    styleUrls: ['./card.component.scss'],
    templateUrl: './card.component.html',
    imports: [IgxCardComponent, IgxCardMediaDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardContentDirective, IgxCardActionsComponent, IgxButtonDirective, IgxRippleDirective, IgxPrefixDirective, IgxIconButtonDirective, IgxSuffixDirective, IgxIconComponent]
})
export class CardComponent {
    public card = new Card({
        buttons: ['read more'],
        content: `New York City comprises 5 boroughs sitting where the
                  Hudson River meets the Atlantic Ocean. At its core is Manhattan,
                  a densely populated borough that's among the world's major commercial,
                  financial and cultural centers.`,
        icons: ['favorite', 'share'],
        imageUrl: 'assets/images/card/media/ny.jpg',
        subtitle: 'City in New York',
        title: 'New York City'
    });
}
```
```html
<div class="sample-column card-wrapper">
  <igx-card elevated>
    <igx-card-media height="180px">
      <img [src]="card.imageUrl">
    </igx-card-media>

    <igx-card-header>
      <h3 igxCardHeaderTitle>{{ card.title }}</h3>
      <h5 igxCardHeaderSubtitle>{{ card.subtitle }}</h5>
    </igx-card-header>

    <igx-card-content>
      <p>{{ card.content }}</p>
    </igx-card-content>

    <igx-card-actions>
      @for (button of card.buttons; track button) {
        <button igxButton igxRipple igxStart>{{ button }}</button>
      }
      @for (icon of card.icons; track icon) {
        <button igxIconButton="flat"
          igxRipple
          [igxRippleCentered]="true"
          igxEnd>
          <igx-icon>{{icon}}</igx-icon>
        </button>
      }
    </igx-card-actions>

  </igx-card>
</div>
```
```scss
.card-wrapper {
    max-width: 320px;
    min-width: 220px;
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Card

To get started with the Ignite UI for Angular Card component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxCardModule` inside your **app.module.ts** file.

```typescript
// app.module.ts
...
import { IgxCardModule } from 'igniteui-angular/card';
// import { IgxCardModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxCardModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxCardComponent` as a standalone dependency, or use the [`IGX_CARD_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/card/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_CARD_DIRECTIVES } from 'igniteui-angular/card';
// import { IGX_CARD_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-card>
        <igx-card-media height="196px">
            <img [src]="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50">
        </igx-card-media>

        <igx-card-header>
            <h3 igxCardHeaderTitle>New York</h3>
            <h5 igxCardHeaderSubtitle>City in New York</h5>
        </igx-card-header>

        <igx-card-content>
            <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.</p>
        </igx-card-content>

        <igx-card-actions>
            <button igxButton igxRipple>Read More</button>
            <button igxIconButton="flat" igxRipple igxRippleCentered="true">
                <igx-icon>favorite</igx-icon>
            </button>
            <button igxIconButton="flat" igxRipple igxRippleCentered="true">
                <igx-icon>share</igx-icon>
            </button>
        </igx-card-actions>
    </igx-card>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_CARD_DIRECTIVES]
    /* or imports: [IgxCardComponent,
        IgxCardHeaderComponent,
        IgxCardMediaDirective,
        IgxCardContentDirective,
        IgxCardActionsComponent,
        IgxCardFooterDirective,
        IgxCardHeaderTitleDirective,
        IgxCardHeaderSubtitleDirective,
        IgxCardThumbnailDirective,
        IgxButtonDirective,
        IgxRippleDirective] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Card module or directives imported, you can start using the `igx-card` component.

## Using the Angular Card Component

Then to represent the demo card template we can add the following code.

```html
<!--card.component.html>-->

<igx-card>
    <igx-card-media height="196px">
        <img [src]="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50">
    </igx-card-media>

    <igx-card-header>
        <h3 igxCardHeaderTitle>New York</h3>
        <h5 igxCardHeaderSubtitle>City in New York</h5>
    </igx-card-header>

    <igx-card-content>
        <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.</p>
    </igx-card-content>

    <igx-card-actions>
        <button igxButton igxRipple>Read More</button>
        <button igxIconButton="flat" igxRipple igxRippleCentered="true">
            <igx-icon>favorite</igx-icon>
        </button>
        <button igxIconButton="flat" igxRipple igxRippleCentered="true">
            <igx-icon>share</igx-icon>
        </button>
    </igx-card-actions>
</igx-card>
```

You will notice a few things above. First when we want to _tag_ an elements as a header title, like the `h3` heading, we place it between the `igx-card-header` tags and attach the `igxCardHeaderTitle` directive to the element. Conversely, if we wanted to make another heading element a `subtitle` we would attach the `igxCardHeaderSubtitle` to it.

Any image or video we want to show in the Angular Card, we wrap inside the `igx-card-media` tags. The `igx-card-media` allows us to size the content placed inside via the `width` and `height` attributes. In the example above we provided just `height`, which would leave the width to `auto`, thus allowing the image to stretch across the entire card surface, while maintaining the set height.

You can place anything inside the `igx-card-content` tags. Usually text goes there.

Finally, the `igx-card-actions` is where you'd place any actionable items, like buttons. If you use the `igxButton` directive on an element, it will automatically be placed correctly according to the material design spec inside the area.

### Media, Thumbs, and Avatars

If you want to show an image or icon in the card header next to the title and subtitle, you can do it by using the `igxCardThumbnail` directive.

Taking the card above as an example, we can edit the contents of the `igx-card-header` and add a `igxCardThumbnail` container to hold an icon:

```html
<igx-card-header>
    <div igxCardThumbnail>
        <igx-icon>place</igx-icon>
    </div>
    
    <h3 igxCardHeaderTitle>Title</h3>
    <h5 igxCardHeaderSubtitle>Subtitle</h5>
</igx-card-header>
```

The above example will show the icon alongside the title and subtitle in the card header.

We also automatically detect the presence of `igx-avatar` or `igx-card-media` placed in the card header. They will appear as if they were card thumbnails. So you can do:

```html
<igx-card-header>
    <igx-avatar>
        <igx-icon>place</igx-icon>
    </igx-avatar>

    <h3 igxCardHeaderTitle>Title</h3>
    <h5 igxCardHeaderSubtitle>Subtitle</h5>
</igx-card-header>
```

or, even this:

```html
<igx-card-header>
    <igx-card-media width="40px" height="40px">
        <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=50">
    </igx-card-media>

    <h3 igxCardHeaderTitle>Title</h3>
    <h5 igxCardHeaderSubtitle>Subtitle</h5>
</igx-card-header>
```

### Outlined cards

The card has a `type` attribute you can set to either `default` (set automatically if omitted), or `outlined`. The `outlined` type removes any shadows from the card, replacing them with a thin border to separate the card from the background.

### Angular Card Horizontal Layout

By default all sections of the card (header, content, media, actions) are laid out vertically. This is nice when we have a lot of vertical space. Say we wanted to lay out all the sections in the card horizontally. We can use the `horizontal` attribute of the card to set its layout.

Here's an example of an outlined horizontal card:

```html
<igx-card type="outlined" [horizontal]="horizontal">
    <div class="h-sample-column">
        <igx-card-header>
            <h5 igxCardHeaderTitle>{{card.title}}</h5>
            <h5 igxCardHeaderSubtitle>{{card.subtitle}}</h5>
            <igx-card-media width="64px" height="64px">
                <img [src]="card.imageUrl">
            </igx-card-media>
        </igx-card-header>

        <igx-card-content>
            <p>{{card.content}}</p>
        </igx-card-content>
    </div>

    <igx-divider [vertical]="horizontal"></igx-divider>

    <igx-card-actions layout="justify">
        <button *ngFor="let icon of card.icons;" igxIconButton="flat" igxRipple igxRippleCentered="true">
            <igx-icon>{{icon}}</igx-icon>
        </button>
    </igx-card-actions>
</igx-card>
```

We are using the `.h-sample-column` class to bundle the `igx-card-header` and `igx-card-content` together, keeping them aligned vertically, while other sections in the card align horizontally.

The styles that `.h-sample-column` class applies are:

```scss
.h-sample-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 0%;

  igx-card-header {
      padding-bottom: 0;
  }
}
```

Notice how the buttons in the `igx-card-actions` have now switched to a `vertical` layout. The `igx-card-actions` has an `inverse` layout relationship with its parent. So whenever the card's `horizontal` attribute is set to `true` the actions `vertical` property will be set to `true` and vice versa.

You can set the `vertical` attribute of he actions area explicitly, thus overriding this default behavior.

```html
<igx-card-actions layout="justify" [vertical]="false">
    <button *ngFor="let icon of card.icons;" igxIconButton="flat" igxRipple igxRippleCentered="true">
        <igx-icon>{{icon}}</igx-icon>
    </button>
</igx-card-actions>
```

If everything went well, our card should look like this:


```typescript
import { Component } from '@angular/core';
import { Card } from '../card.blueprint';
import { IgxCardActionsComponent, IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective, IgxCardMediaDirective } from 'igniteui-angular/card';
import { IgxDividerDirective, IgxFlexDirective, IgxIconButtonDirective, IgxLayoutDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';


@Component({
    selector: 'app-card-sample-2',
    styleUrls: ['./card-sample-2.component.scss'],
    templateUrl: './card-sample-2.component.html',
    imports: [IgxCardComponent, IgxLayoutDirective, IgxFlexDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardMediaDirective, IgxCardContentDirective, IgxDividerDirective, IgxCardActionsComponent, IgxIconButtonDirective, IgxRippleDirective, IgxSuffixDirective, IgxIconComponent]
})
export class CardSample2Component {
    public card = new Card({
        content: `As I have always said: I write what's real and what's true,
        even if it means throwing myself under the bus.`,
        icons: ['skip_previous', 'play_arrow', 'skip_next'],
        imageUrl: 'assets/images/card/media/ROZES-Under-the-Grave.jpg',
        subtitle: 'Under the Grave (2016)',
        title: 'Rozes'
    });

    public horizontal = true;
}
```
```html
<div class="sample-column card-wrapper">
  <igx-card  [horizontal]="horizontal">
    <div igxLayout igxLayoutDir="column" igxFlex [igxFlexGrow]="1">
      <igx-card-header>
        <h5 igxCardHeaderTitle>{{card.title}}</h5>
        <h5 igxCardHeaderSubtitle>{{card.subtitle}}</h5>
        <igx-card-media width="64px" height="64px">
          <img [src]="card.imageUrl">
        </igx-card-media>
      </igx-card-header>

      <igx-card-content>
        <p>{{card.content}}</p>
      </igx-card-content>
    </div>

    <igx-divider [vertical]="horizontal"></igx-divider>

    <igx-card-actions layout="justify">
      @for (icon of card.icons; track icon) {
        <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" igxEnd>
          <igx-icon>{{icon}}</igx-icon>
        </button>
      }
    </igx-card-actions>
  </igx-card>
</div>
```
```scss
.card-wrapper {
    max-width: 400px;
    min-width: 250px;
}
```


### Alternative layouts

You can get even more creative with the layout of the `igx-card`.

Below is an example showing how you can create a semi-horizontal card, where we have every section of the card laid out vertically, while the `igx-card-media` appears alongside the vertical sections of the card.

```html
<igx-card [horizontal]="horizontal">
    <div igxLayout igxLayoutDir="column" igxFlex igxFlexGrow="1">
        <igx-card-header>
            <igx-avatar [src]="card.avatarUrl"></igx-avatar>
            <h5 igxCardHeaderTitle>{{card.title}}</h5>
            <h5 igxCardHeaderSubtitle>{{card.subtitle}}</h5>
        </igx-card-header>

        <igx-card-content>
            <p>{{card.content}}</p>
        </igx-card-content>

        <igx-card-actions [vertical]="false">
            <button *ngFor="let button of card.buttons;" igxButton="flat" igxRipple>
                {{button}}
            </button>
        </igx-card-actions>
    </div>

    <igx-card-media width="96px">
        <img [src]="card.imageUrl">
    </igx-card-media>
</igx-card>
```


```typescript
import { Component } from '@angular/core';
import { Card } from '../card.blueprint';
import { IgxCardActionsComponent, IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective, IgxCardMediaDirective } from 'igniteui-angular/card';
import { IgxButtonDirective, IgxFlexDirective, IgxLayoutDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxPrefixDirective } from 'igniteui-angular/input-group';


@Component({
    selector: 'app-card-sample-3',
    styleUrls: ['./card-sample-3.component.scss'],
    templateUrl: './card-sample-3.component.html',
    imports: [IgxCardComponent, IgxLayoutDirective, IgxFlexDirective, IgxCardHeaderComponent, IgxAvatarComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardContentDirective, IgxCardActionsComponent, IgxButtonDirective, IgxRippleDirective, IgxPrefixDirective, IgxCardMediaDirective]
})
export class CardSample3Component {
    public horizontal = true;

    public card = new Card({
        avatarUrl: 'assets/images/card/avatars/mellow_d.jpg',
        buttons: ['play album'],
        content: `Far far away, behind the word mountains,
        far from the countries Vokalia and Consonantia,
        there live the blind texts.`,
        imageUrl: 'assets/images/card/media/here_media.jpg',
        subtitle: 'by Mellow D',
        title: 'HERE'
    });
}
```
```html
<div class="sample-column card-wrapper">
  <igx-card [horizontal]="horizontal" elevated>
    <div igxLayout igxLayoutDir="column" igxFlex [igxFlexGrow]="1">
      <igx-card-header>
        <igx-avatar [src]="card.avatarUrl"></igx-avatar>
        <h5 igxCardHeaderTitle>{{card.title}}</h5>
        <h5 igxCardHeaderSubtitle>{{card.subtitle}}</h5>
      </igx-card-header>

      <igx-card-content>
        <p>{{card.content}}</p>
      </igx-card-content>

      <igx-card-actions [vertical]="false">
        @for (button of card.buttons; track button) {
          <button igxButton="flat" igxRipple igxStart>
            {{button}}
          </button>
        }
      </igx-card-actions>
    </div>

    <igx-card-media width="96px">
      <img [src]="card.imageUrl">
    </igx-card-media>
  </igx-card>
</div>
```
```scss
.card-wrapper {
    max-width: 400px;
    min-width: 250px;
}
```


### Angular Card Actions

The Angular Card actions area allows additional configuration to what we have already mentioned.

You can position elements in the card actions area either in the start or the end by using the `igxStart` or `igxEnd` directives.

```html
<igx-card-actions>
    <button igxIconButton="flat" igxStart>
        <igx-icon>drag_indicator</igx-icon>
    </button>
    <button igxIconButton="flat" igxEnd>
        <igx-icon>favorite</igx-icon>
    </button>
</igx-card-actions>
```

You can justify the buttons so that they are laid out across the entire axis, not at the opposite ends. To do that, use the `layout` attribute and set its value to `justify`, like below:

```html
<igx-card-actions layout="justify">
    <button igxButton>Button</button>

    <button igxIconButton="flat">
        <igx-icon>star</igx-icon>
    </button>
</igx-card-actions>
```

## Styling

### Card Theme Property Map

Changing the `$background` property automatically updates the following dependent properties:

<table class="collapsible-table">
    <thead>
        <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody class="group">
        <tr class="primary">
            <td><strong>$background</strong></td>
            <td>$header-text-color</td>
            <td>The text color of the card title.</td>
            </tr>
            <tr>
            <td></td>
            <td>$subtitle-text-color</td>
            <td>The text color of the card subtitle.</td>
            </tr>
            <tr>
            <td></td>
            <td>$content-text-color</td>
            <td>The text color of the card content.</td>
            </tr>
            <tr>
            <td></td>
            <td>$actions-text-color</td>
            <td>The text color of the card buttons.</td>
            </tr>
        </tr>
    </tbody>
</table>

To get started with styling the card, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`card-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-card-theme) and providing just a few styling parameters. If you only specify the `$background` parameter, the appropriate foreground colors will be automatically chosen, either black or white, based on which offers better contrast with the background.

```scss
$custom-card-theme: card-theme(
    $background: #011627,
    $subtitle-text-color: #ecaa53,
);
```

As seen, the `card-theme` exposes some useful parameters for basic styling of its items.

Finally, **include** the custom theme in your application:

```scss
@include css-vars($custom-card-theme);
```

In the sample below, you can see how using the card component with customized CSS variables allows you to create a design that visually resembles the card used in the [`Ant`](https://ant.design/components/card?theme=light#card-demo-meta) design system.


```typescript
import { Component, inject, OnInit } from '@angular/core';
import { Card } from '../card.blueprint';
import { IgxCardActionsComponent, IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective, IgxCardMediaDirective } from 'igniteui-angular/card';
import { IgxDividerModule, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxChipComponent } from 'igniteui-angular/chips';

@Component({
  selector: 'app-card-styling-sample',
  templateUrl: './card-styling-sample.component.html',
  styleUrls: ['./card-styling-sample.component.scss'],
  imports: [IgxCardComponent, IgxCardMediaDirective, IgxCardHeaderComponent, 
		IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, 
		IgxCardContentDirective, IgxCardActionsComponent, IgxIconButtonDirective, 
		IgxIconComponent, IgxAvatarComponent, IgxDividerModule, IgxChipComponent]
})
export class CardStylingSampleComponent implements OnInit {
  private iconService = inject(IgxIconService)
  public ngOnInit() {
    this.iconService.addSvgIconFromText('settings-custom', '<svg viewBox="64 64 896 896" focusable="false" data-icon="setting" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"></path></svg>')
    this.iconService.addSvgIconFromText('edit-custom', '<svg viewBox="64 64 896 896" focusable="false" data-icon="edit" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path></svg>');
    this.iconService.addSvgIconFromText('dots', '<svg viewBox="64 64 896 896" focusable="false" data-icon="ellipsis" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"></path></svg>');
  };
  public card = new Card({
    icons: ['settings-custom', 'edit-custom', 'dots'],
    subtitle: 'This is the description',
    title: 'Card title'
  });
}
```
```html
<div class="sample-column card-wrapper">
  <igx-card elevated>
    <igx-card-media height="180px">
      <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png">
    </igx-card-media>
    <div class="border">
      <igx-card-header>
        <igx-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"></igx-avatar>
        <div>
          <h6 igxCardHeaderTitle>{{ card.title }}</h6>
          <p igxCardHeaderSubtitle>{{ card.subtitle }}</p>
        </div>
      </igx-card-header>
      <igx-card-content>
        <igx-chip>#artic</igx-chip>
        <igx-chip>#fox</igx-chip>
        <igx-chip>#card</igx-chip>
        <igx-divider></igx-divider>
      </igx-card-content>
      <igx-card-actions>
        @for (icon of card.icons; track icon; let i = $index) {
          <button igxIconButton="flat">
            <igx-icon name={{icon}}></igx-icon>
          </button>
          @if (i < 2) { <igx-divider [vertical]="true">
            </igx-divider>
          }
        }
      </igx-card-actions>
    </div>
  </igx-card>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

// CSS variables approach

igx-card {
    --border-radius: #{rem(8px)};
    --outline-color: #f0f0f0;
    --resting-shadow: none;
    --hover-shadow: none;
    --header-text-color: rgba(0, 0, 0, 0.88);
}

igx-avatar {
    --background: transparent;
    --size: #{rem(30px)};
}

igx-chip {
    --border-radius: #{rem(4px)};
    --background: #fafafa;
    --border-color: #d9d9d9;
    --hover-background: #d9d9d9;
    --focus-background: #d9d9d9;
}

.igx-icon-button--flat {
    --foreground: #00000073;
    --hover-foreground: #1677ff;
    --hover-background: none;
}

igx-divider {
    --color: #f0f0f0
}

// Sass theme approach

// $custom-card-theme: card-theme(
//     $border-radius: rem(8px),
//     $outline-color: #f0f0f0,
//     $resting-shadow: none,
//     $hover-shadow: none,
//     $header-text-color: #000000e0,
// );

// $custom-avatar-theme: avatar-theme(
//     $background: transparent,
//     $size: rem(30px)
// );

// $custom-chip-theme: chip-theme(
//     $border-radius: rem(4px),
//     $background: #fafafa,
//     $border-color: #d9d9d9,
//     $hover-background: #d9d9d9,
//     $focus-background: #d9d9d9,
// );

// $custom-icon-button-theme: icon-button-theme(
//     $foreground: #00000073,
//     $hover-foreground: #1677ff,
//     $hover-background: none,
//     $border-color: transparent
// );

// $custom-divider-theme: divider-theme(
//     $color: #f0f0f0
// );

// @include css-vars($custom-card-theme);
// @include css-vars($custom-avatar-theme);
// @include css-vars($custom-chip-theme);
// @include css-vars($custom-divider-theme);
// .igx-icon-button--flat {
//     @include css-vars($custom-icon-button-theme);
// };
```

### Styling with Tailwind

You can style the `card` using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-card`, `dark-card`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [card-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-card-theme). The syntax is as follows:

```html
<igx-card
class="!light-card
![--background:#193625]
![--subtitle-text-color:#ECAA53]"
elevated>
...
</igx-card>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your card should look like this:

<div class="sample-container loading" style="height:500px">
    <iframe id="card-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/layouts/card-tailwind-styling-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

### Summary

In this article we covered a lot of ground with the card component. First, we created a very simple card with text content only. Then added some images to make the card a bit more appealing. We used some additional Ignite UI for Angular components inside our card, avatar, buttons and icons, to enrich the experience and add some functionality. And finally, we changed the card's theme by setting some exposed theme colors, creating custom palettes and extending schemas.
The card component is capable of displaying more different layouts worth exploring in the Card Demo in the beginning of this article.

## API and Style References

For more detailed information regarding the card's API, refer to the following links:

- [`IgxCardComponent API`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcardcomponent.html)

The following built-in CSS styles helped us achieve this card layout:

- [`IgxCardComponent Styles`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-card-theme)

Additional components and/or directives that were used:

- [`IgxAvatarComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxavatarcomponent.html)
- [`IgxIconComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxiconcomponent.html)
- [`IgxButtonDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbuttondirective.html)
- [`IgxDividerDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdividerdirective.html)

Styles:

- [`IgxAvatarComponent Styles`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-avatar-theme)
- [`IgxIconComponent Styles`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)
- [`IgxButtonDirective Styles`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-theme)

<div class="divider"></div>

## Theming Dependencies

- [IgxButton Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-theme)
- [IgxAvatar Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-avatar-theme)
- [IgxIconTheme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

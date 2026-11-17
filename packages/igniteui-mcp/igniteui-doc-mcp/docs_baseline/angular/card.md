---
title: "Angular Card Component"
description: "Angular Card organizes related media, text, and actions in one flexible content container."
keywords: "Angular Card, card component, content container, media card, Ignite UI for Angular, Infragistics"
license: MIT
last_updated: "2026-07-30"
mentionedTypes: ["Card", "CardActions", "CardContent", "CardHeader", "CardMedia", "Avatar", "Button", "Icon", "IconButton", "Ripple"]
relatedComponents: ["Grid", "List"]
llms:
  description: "The Ignite UI for Angular Card organizes related media, text, and actions in one flexible content container."
_tocName: Card
---
# Card

The Ignite UI for Angular Card organizes related media, text, and actions in one flexible content container.

Use the card to group content about a single subject, such as a product, article, contact, location, or dashboard item.

## Live Demo

```typescript
import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import {
    IgxCardActionsComponent,
    IgxCardComponent,
    IgxCardContentDirective,
    IgxCardHeaderComponent,
    IgxCardHeaderSubtitleDirective,
    IgxCardHeaderTitleDirective,
    IgxCardMediaDirective,
    IgxCardThumbnailDirective
} from 'igniteui-angular/card';
import { IgxButtonDirective, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

@Component({
    selector: 'app-card-overview',
    styleUrls: ['./card-overview.component.scss'],
    templateUrl: './card-overview.component.html',
    imports: [
        IgxAvatarComponent,
        IgxButtonDirective,
        IgxCardActionsComponent,
        IgxCardComponent,
        IgxCardContentDirective,
        IgxCardHeaderComponent,
        IgxCardHeaderSubtitleDirective,
        IgxCardHeaderTitleDirective,
        IgxCardMediaDirective,
        IgxCardThumbnailDirective,
        IgxIconButtonDirective,
        IgxIconComponent,
        IgxPrefixDirective,
        IgxSuffixDirective,
        IgxSwitchComponent
    ]
})
export class CardOverviewComponent {
    public media = true;
    public header = true;
    public content = true;
    public actions = true;
}
```
```html
<div class="card-options">
    <igx-switch labelPosition="before" [checked]="media" (change)="media = $event.checked">
        <span>Media</span>
    </igx-switch>
    <igx-switch labelPosition="before" [checked]="header" (change)="header = $event.checked">
        <span>Header</span>
    </igx-switch>
    <igx-switch labelPosition="before" [checked]="content" (change)="content = $event.checked">
        <span>Content</span>
    </igx-switch>
    <igx-switch labelPosition="before" [checked]="actions" (change)="actions = $event.checked">
        <span>Actions</span>
    </igx-switch>
</div>

<div class="card-container">
    <igx-card>
        @if (media) {
            <igx-card-media>
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=640&amp;q=50"
                    alt="Mountain range above the clouds at sunset" />
            </igx-card-media>
        }
        @if (header) {
            <igx-card-header>
                <igx-avatar
                    igxCardThumbnail
                    shape="circle"
                    src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                    alt="profile picture">
                </igx-avatar>
                <span igxCardHeaderTitle>Title</span>
                <span igxCardHeaderSubtitle>Subtitle</span>
            </igx-card-header>
        }
        @if (content) {
            <igx-card-content>
                <p>
                    A paragraph is a self-contained unit of a discourse in writing
                    dealing with a particular point or idea.
                </p>
            </igx-card-content>
        }
        @if (actions) {
            <igx-card-actions>
                <button igxButton="flat" igxStart>Button</button>
                <button igxButton="flat" igxStart>Button</button>
                <button igxIconButton="flat" igxEnd>
                    <igx-icon>add</igx-icon>
                </button>
                <button igxIconButton="flat" igxEnd>
                    <igx-icon>add</igx-icon>
                </button>
                <button igxIconButton="flat" igxEnd>
                    <igx-icon>add</igx-icon>
                </button>
            </igx-card-actions>
        }
    </igx-card>
</div>
```
```scss
@use "igniteui-theming/sass/typography" as *;

:host {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    height: 100vh;
    gap: rem(72px);
    padding: rem(56px) rem(24px);
}

.card-options {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: rem(32px);
}

.card-container {
    --ig-size: var(--ig-size-small);

    width: 100%;
    max-width: rem(360px);
    min-width: rem(220px);

    igx-card-media img {
        width: 100%;
        aspect-ratio: 15 / 8;
        object-fit: cover;
    }

    igx-card-content p {
        @include type-style("body-2") {
            margin: 0;
        }

        font-size: rem(14px);
        line-height: 1.5;
    }
}
```

## Anatomy

The card is a container whose standard building blocks are header, media, content, and actions.

**Angular Card anatomy anatomy:** The card anatomy labels the header, media, content, and actions regions.

<div class="card-anatomy-legend ig-typography__body-2">
  <div>
    <strong>A - Media Container</strong>
    <span>1. Image (optional)</span>
  </div>
  <div>
    <strong>B - Card Header</strong>
    <span>2. Title</span>
    <span>3. Avatar (optional)</span>
    <span>4. Subtitle</span>
  </div>
  <div>
    <strong>C - Content area</strong>
    <span>5. Paragraph</span>
  </div>
  <div>
    <strong>D - Card Footer</strong>
    <span>6. Action Buttons, Icon Buttons</span>
  </div>
</div>

<style>{`
  .card-anatomy {
    --igd-anatomy-padding: 8px;
  }

  .card-anatomy .igd-anatomy__image {
    max-width: 800px;
  }

  .card-anatomy-legend {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 48px;
    margin-bottom: 24px;
  }

  .card-anatomy-legend div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .card-anatomy-legend strong {
    margin-bottom: 12px;
  }

  .card-anatomy-legend span {
    display: block;
  }

  @media (max-width: 768px) {
    .card-anatomy-legend {
      grid-template-columns: 1fr 1fr;
      row-gap: 24px;
    }
  }

  @media (max-width: 480px) {
    .card-anatomy-legend {
      grid-template-columns: 1fr;
    }
  }
`}</style>

```text
igx-card                         // host - groups related content
|- igx-card-media                 // optional media region
|  `- default content             // image, video, or other media content
|- igx-card-header                // optional header region
|  |- [igxCardThumbnail]          // optional avatar, icon, or small image
|  |- [igxCardHeaderTitle]        // card title
|  `- [igxCardHeaderSubtitle]     // optional card subtitle
|- igx-card-content               // optional body region
|  `- default content             // text, lists, or custom content
`- igx-card-actions               // optional action region
   |- [igxStart]                  // leading actions
   `- [igxEnd]                    // trailing actions
```

## Getting Started

To use the Angular Card, follow the [Ignite UI for Angular Getting Started](../general/getting-started.md) topic for the basic project setup, then register the component for your target platform.

For Angular using the **igniteui-angular** package, install the package:

```cmd
npm install igniteui-angular
```

Then import the `IGX_CARD_DIRECTIVES` token in the component `imports` collection. The token brings in the card together with all of its supporting components and directives.

```ts
import { IGX_CARD_DIRECTIVES } from 'igniteui-angular/card';
```

Import any other directives your card content uses, such as `IgxButtonDirective`, `IgxIconButtonDirective`, `IgxIconComponent`, and `IgxRippleDirective`, from `igniteui-angular`.

The simplest way to start using the [`IgxCard`](mcp:get_api_reference?platform=angular&component=IgxCardComponent) is as follows:

```html
<igx-card>
  <igx-card-header>
    <h3 igxCardHeaderTitle>Title</h3>
  </igx-card-header>
  <igx-card-content>
    <p>Content</p>
  </igx-card-content>
</igx-card>
```

## Usage

Compose a card from the card container and whichever sub-components your content needs.

### Media

Use [`IgxCardMediaDirective`](mcp:get_api_reference?platform=angular&component=IgxCardMediaDirective) to place images, video, or other media content in the card.

```html
<igx-card-media height="196px">
  <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50" alt="New York city skyline" />
</igx-card-media>
```

```typescript
import { Component, inject } from '@angular/core';
import {
    IgxCardActionsComponent,
    IgxCardComponent,
    IgxCardHeaderComponent,
    IgxCardHeaderSubtitleDirective,
    IgxCardHeaderTitleDirective,
    IgxCardMediaDirective
} from 'igniteui-angular/card';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { pinRightIcon } from './icons';

@Component({
    selector: 'app-card-media',
    styleUrls: ['./card-media.component.scss'],
    templateUrl: './card-media.component.html',
    imports: [
        IgxButtonDirective,
        IgxCardActionsComponent,
        IgxCardComponent,
        IgxCardHeaderComponent,
        IgxCardHeaderSubtitleDirective,
        IgxCardHeaderTitleDirective,
        IgxCardMediaDirective,
        IgxIconComponent,
        IgxPrefixDirective,
        IgxSuffixDirective
    ]
})
export class CardMediaComponent {
    private iconService = inject(IgxIconService);

    constructor() {
        this.iconService.addSvgIconFromText('pin-right', pinRightIcon, 'material');
    }
}
```
```html
<igx-card class="media-card">
    <igx-card-media height="6.5rem">
        <img
            src="https://dl.infragistics.com/x/img/card/card-2.png"
            alt="A meeting room with a long table and chairs" />
    </igx-card-media>
    <igx-card-header>
        <span igxCardHeaderTitle>Book your meeting room</span>
        <span igxCardHeaderSubtitle>Max 15 seats / 10 m2</span>
    </igx-card-header>
    <igx-card-actions>
        <div igxStart class="media-card__icons">
            <igx-icon>videocam</igx-icon>
            <igx-icon>bluetooth</igx-icon>
            <igx-icon>volume_off</igx-icon>
        </div>
        <button igxButton="flat" igxEnd class="media-card__action">Book now</button>
    </igx-card-actions>
</igx-card>

<igx-card class="media-card">
    <igx-card-media height="6.5rem">
        <img
            src="https://dl.infragistics.com/x/img/card/card-map-1.png"
            alt="A street map with the event space marked" />
    </igx-card-media>
    <igx-card-header>
        <span igxCardHeaderTitle>Main Event Space</span>
        <span igxCardHeaderSubtitle>Floor 4, Suite 402</span>
    </igx-card-header>
    <igx-card-actions>
        <div igxStart class="media-card__icons">
            <igx-icon>directions_bus</igx-icon>
            <igx-icon>directions_car</igx-icon>
            <igx-icon>flight</igx-icon>
        </div>
        <button igxButton="flat" igxEnd class="media-card__action">Get directions</button>
    </igx-card-actions>
</igx-card>

<igx-card class="media-card">
    <igx-card-media height="6.5rem">
        <img
            src="https://dl.infragistics.com/x/img/card/card-map-2.png"
            alt="A map of Europe showing the sales region" />
    </igx-card-media>
    <igx-card-header>
        <span igxCardHeaderTitle>View your coverage area</span>
        <span igxCardHeaderSubtitle>Sales region</span>
    </igx-card-header>
    <igx-card-actions>
        <div igxStart class="media-card__icons">
            <igx-icon>place</igx-icon>
            <igx-icon name="pin-right" family="material"></igx-icon>
        </div>
        <button igxButton="flat" igxEnd class="media-card__action">See details</button>
    </igx-card-actions>
</igx-card>
```
```scss
@use "igniteui-theming/sass/typography" as *;

:host {
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
    height: 100vh;
    gap: rem(20px);
    padding: rem(32px) rem(8px);
}

.media-card {
    --ig-card-border-radius: #{rem(4px)};

    flex: 1 1 rem(240px);
    max-width: rem(256px);

    igx-card-media img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    igx-card-header {
        padding: rem(16px) rem(16px) 0;
    }

    [igxCardHeaderTitle] {
        margin-block-end: 0;
        color: var(--ig-gray-900);
        font-size: rem(18px);
        font-weight: 600;
        line-height: rem(24px);
        letter-spacing: rem(0.15px);
    }

    [igxCardHeaderSubtitle] {
        color: var(--ig-gray-900);
        font-size: rem(14px);
        font-weight: 600;
        line-height: rem(24px);
        letter-spacing: rem(0.1px);
    }

    igx-card-actions {
        flex-wrap: nowrap;
        padding: rem(24px) rem(16px) rem(12px);
    }
}

.media-card__icons {
    display: inline-flex;
    align-items: center;
    gap: rem(4px);
    color: var(--ig-gray-900);

    igx-icon {
        --ig-icon-size: #{rem(16px)};
    }
}

.media-card__action {
    --ig-size: var(--ig-size-small);

    padding: 0;
    background: transparent;
    font-size: rem(13px);
    font-weight: 600;
    letter-spacing: rem(0.25px);
    text-transform: uppercase;
}
```

### Position

Place the media above or below the header. The card renders its regions in the order you add them, so the element order in your markup sets the media position.

```typescript
import { Component } from '@angular/core';
import {
    IgxCardActionsComponent,
    IgxCardComponent,
    IgxCardHeaderComponent,
    IgxCardHeaderSubtitleDirective,
    IgxCardHeaderTitleDirective,
    IgxCardMediaDirective
} from 'igniteui-angular/card';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-card-position',
    styleUrls: ['./card-position.component.scss'],
    templateUrl: './card-position.component.html',
    imports: [
        IgxButtonDirective,
        IgxCardActionsComponent,
        IgxCardComponent,
        IgxCardHeaderComponent,
        IgxCardHeaderSubtitleDirective,
        IgxCardHeaderTitleDirective,
        IgxCardMediaDirective,
        IgxIconComponent,
        IgxPrefixDirective,
        IgxSuffixDirective
    ]
})
export class CardPositionComponent {
    public roomImage = 'https://dl.infragistics.com/x/img/card/card-2.png';
}
```
```html
<div class="card-item">
    <span class="card-item__label">Media before header</span>

    <igx-card class="position-card">
        <igx-card-media height="6.5rem">
            <img [src]="roomImage" alt="A meeting room with a long table and chairs" />
        </igx-card-media>
        <igx-card-header>
            <span igxCardHeaderTitle>Book your meeting room</span>
            <span igxCardHeaderSubtitle>Max 15 seats / 10 m2</span>
        </igx-card-header>
        <igx-card-actions>
            <div igxStart class="position-card__icons">
                <igx-icon>videocam</igx-icon>
                <igx-icon>bluetooth</igx-icon>
                <igx-icon>volume_off</igx-icon>
            </div>
            <button igxButton="flat" igxEnd class="position-card__action">Book now</button>
        </igx-card-actions>
    </igx-card>
</div>

<div class="card-item">
    <span class="card-item__label">Media after header</span>

    <igx-card class="position-card">
        <igx-card-header>
            <span igxCardHeaderTitle>Book your meeting room</span>
            <span igxCardHeaderSubtitle>Max 15 seats / 10 m2</span>
        </igx-card-header>
        <igx-card-media height="6.5rem">
            <img [src]="roomImage" alt="A meeting room with a long table and chairs" />
        </igx-card-media>
        <igx-card-actions>
            <div igxStart class="position-card__icons">
                <igx-icon>videocam</igx-icon>
                <igx-icon>bluetooth</igx-icon>
                <igx-icon>volume_off</igx-icon>
            </div>
            <button igxButton="flat" igxEnd class="position-card__action">Book now</button>
        </igx-card-actions>
    </igx-card>
</div>
```
```scss
@use "igniteui-theming/sass/typography" as *;

:host {
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
    height: 100vh;
    gap: rem(56px);
    padding: rem(32px) rem(16px);
}

.card-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(20px);
}

.card-item__label {
    @include type-style("body-2") {
        margin: 0;
    }

    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: rem(13px);
    font-weight: 400;
    line-height: rem(20px);
    letter-spacing: rem(0.3px);
}

.position-card {
    --ig-card-border-radius: #{rem(4px)};

    width: rem(256px);

    igx-card-media img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    igx-card-header {
        padding: rem(16px) rem(16px) 0;
    }

    [igxCardHeaderTitle] {
        margin-block-end: 0;
        color: var(--ig-gray-900);
        font-size: rem(18px);
        font-weight: 600;
        line-height: rem(24px);
        letter-spacing: rem(0.15px);
    }

    [igxCardHeaderSubtitle] {
        color: var(--ig-gray-900);
        font-size: rem(14px);
        font-weight: 600;
        line-height: rem(24px);
        letter-spacing: rem(0.1px);
    }

    igx-card-actions {
        flex-wrap: nowrap;
        padding: rem(24px) rem(24px) rem(8px);
    }

    igx-card-header + igx-card-media {
        margin-block-start: rem(8px);
    }

    igx-card-media + igx-card-actions {
        padding-block-start: rem(16px);
    }
}

.position-card__icons {
    display: inline-flex;
    align-items: center;
    gap: rem(6px);
    color: var(--ig-gray-900);

    igx-icon {
        --ig-icon-size: #{rem(16px)};
    }
}

.position-card__action {
    --ig-size: var(--ig-size-small);

    padding: 0;
    background: transparent;
    font-size: rem(13px);
    font-weight: 600;
    letter-spacing: rem(0.25px);
    text-transform: uppercase;
}
```

### Header Slots

Use the header slots to define thumbnail, title, subtitle, and additional header content.

```html
<igx-card-header>
  <div igxCardThumbnail>
    <igx-icon>place</igx-icon>
  </div>
  <h3 igxCardHeaderTitle>Title</h3>
  <span igxCardHeaderSubtitle>Subtitle</span>
</igx-card-header>
```

Apply `igxCardHeaderTitle` to a heading element, such as `<h3>`, so the card takes its place in the document outline, and apply `igxCardHeaderSubtitle` to a neutral inline element such as `<span>`.

### Content

Use [`IgxCardContentDirective`](mcp:get_api_reference?platform=angular&component=IgxCardContentDirective) for the card body text, lists, or custom content.

```html
<igx-card-content>
  <p>New York City comprises five boroughs where the Hudson River meets the Atlantic Ocean.</p>
</igx-card-content>
```

### Elevated

Set [`elevated`](mcp:get_api_reference?platform=angular&component=IgxCardComponent&member=elevated) when the card should use the elevated visual treatment.

```html
<igx-card elevated>
  ...
</igx-card>
```

### Actions Slots

Use the actions slots to place leading, centered, and trailing actions in [`IgxCardActions`](mcp:get_api_reference?platform=angular&component=IgxCardActionsComponent).

```html
<igx-card-actions>
  <button igxButton igxStart>Like</button>
  <button igxButton>Comment</button>
  <button igxIconButton="flat" igxEnd>
    <igx-icon>more_vert</igx-icon>
  </button>
</igx-card-actions>
```

### Actions Orientation

Set `vertical` on `igx-card-actions` when the actions should be arranged vertically.

```html
<igx-card-actions [vertical]="true">
  <button igxButton>Like</button>
  <button igxButton>Share</button>
  <button igxIconButton="flat">
    <igx-icon>more_vert</igx-icon>
  </button>
</igx-card-actions>
```

```typescript
import { Component, inject } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import {
    IgxCardActionsComponent,
    IgxCardComponent,
    IgxCardContentDirective,
    IgxCardHeaderComponent,
    IgxCardHeaderSubtitleDirective,
    IgxCardHeaderTitleDirective,
    IgxCardThumbnailDirective
} from 'igniteui-angular/card';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxSuffixDirective } from 'igniteui-angular/input-group';
import { linkedinIcon } from './icons';

@Component({
    selector: 'app-card-actions',
    styleUrls: ['./card-actions.component.scss'],
    templateUrl: './card-actions.component.html',
    imports: [
        IgxAvatarComponent,
        IgxCardActionsComponent,
        IgxCardComponent,
        IgxCardContentDirective,
        IgxCardHeaderComponent,
        IgxCardHeaderSubtitleDirective,
        IgxCardHeaderTitleDirective,
        IgxCardThumbnailDirective,
        IgxIconButtonDirective,
        IgxIconComponent,
        IgxSuffixDirective
    ]
})
export class CardActionsComponent {
    private iconService = inject(IgxIconService);

    constructor() {
        this.iconService.addSvgIconFromText('linkedin', linkedinIcon, 'material');
    }
}
```
```html
<div class="card-item">
    <span class="card-item__label">Horizontal actions (default)</span>

    <igx-card class="post-card">
        <igx-card-header>
            <igx-avatar
                igxCardThumbnail
                shape="circle"
                src="https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png"
                alt="A profile photo of Lena Fischer.">
            </igx-avatar>
            <span igxCardHeaderTitle>Lena Fischer</span>
            <span igxCardHeaderSubtitle>&#64;lena &middot; 2h ago</span>
        </igx-card-header>
        <igx-card-content>
            <p>
                Just shipped our new design system &#128640; Six months of tokens,
                components, and documentation &mdash; and it&rsquo;s finally live.
                So proud of the team.
            </p>
        </igx-card-content>
        <igx-card-actions [vertical]="false">
            <button igxIconButton="flat" igxEnd aria-label="Like">
                <igx-icon>favorite_border</igx-icon>
            </button>
            <button igxIconButton="flat" igxEnd aria-label="Save">
                <igx-icon>bookmark</igx-icon>
            </button>
            <button igxIconButton="flat" igxEnd aria-label="Share on LinkedIn">
                <igx-icon name="linkedin" family="material"></igx-icon>
            </button>
        </igx-card-actions>
    </igx-card>
</div>

<div class="card-item">
    <span class="card-item__label">Vertical actions</span>

    <igx-card class="post-card post-card--vertical" [horizontal]="true">
        <div class="post-card__body">
            <igx-card-header>
                <igx-avatar
                    igxCardThumbnail
                    shape="circle"
                    src="https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png"
                    alt="A profile photo of Lena Fischer.">
                </igx-avatar>
                <span igxCardHeaderTitle>Lena Fischer</span>
                <span igxCardHeaderSubtitle>&#64;lena &middot; 2h ago</span>
            </igx-card-header>
            <igx-card-content>
                <p>
                    Just shipped our new design system &#128640; Six months of tokens,
                    components, and documentation &mdash; and it&rsquo;s finally live.
                    So proud of the team.
                </p>
            </igx-card-content>
        </div>

        <igx-card-actions [vertical]="true">
            <div class="post-card__actions">
                <button igxIconButton="flat" aria-label="Like">
                    <igx-icon>favorite_border</igx-icon>
                </button>
                <button igxIconButton="flat" aria-label="Save">
                    <igx-icon>bookmark</igx-icon>
                </button>
                <button igxIconButton="flat" aria-label="Share on LinkedIn">
                    <igx-icon name="linkedin" family="material"></igx-icon>
                </button>
            </div>
        </igx-card-actions>
    </igx-card>
</div>
```
```scss
@use "igniteui-theming/sass/typography" as *;

:host {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
    height: 100vh;
    gap: rem(48px);
    padding: rem(40px) rem(24px);
}

.card-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(20px);
}

.card-item__label {
    @include type-style("body-2") {
        margin: 0;
    }

    color: var(--ig-gray-600);
    font-family: "Aktiv Grotesk", sans-serif;
    font-size: rem(13px);
    font-weight: 400;
    line-height: rem(20px);
    letter-spacing: rem(0.3px);
}

.post-card {
    --ig-card-border-radius: #{rem(8px)};

    width: rem(310px);

    igx-card-header {
        padding: rem(16px) rem(16px) 0;
    }

    [igxCardHeaderTitle] {
        color: var(--ig-gray-900);
        font-size: rem(20px);
        font-weight: 600;
        line-height: rem(24px);
        letter-spacing: rem(0.15px);
    }

    [igxCardHeaderSubtitle] {
        color: var(--ig-gray-600);
        font-size: rem(14px);
        font-weight: 600;
        line-height: rem(24px);
        letter-spacing: rem(0.1px);
    }

    igx-card-content {
        padding: rem(24px) rem(16px) 0;
        overflow: visible;

        p {
            margin: 0;
            color: var(--ig-gray-700);
            font-size: rem(14px);
            font-weight: 400;
            line-height: rem(20px);
            letter-spacing: rem(0.25px);
        }
    }

    igx-card-actions {
        padding: rem(12px) rem(16px) rem(8px);
    }

    [igxIconButton] {
        --ig-size: var(--ig-size-small);
        --ig-flat-icon-button-foreground: var(--ig-gray-900);
    }
}

.post-card--vertical {
    width: rem(390px);

    igx-card-content {
        padding-block-end: rem(16px);
    }

    igx-card-actions {
        justify-content: flex-start;
        padding: rem(16px) rem(16px) rem(16px) 0;
    }
}

.post-card__body {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    min-width: 0;
}

.post-card__actions {
    display: flex;
    flex-direction: column;
    gap: rem(8px);
}
```

### Layout

Use layout wrappers when card sections need to be arranged horizontally or split between media and content areas.

For a horizontal card, group the header and content in one wrapper, add the actions beside that wrapper, and apply a flex row to the card content.

```html
<igx-card [horizontal]="true">
  <div igxLayout igxLayoutDir="column" igxFlex [igxFlexGrow]="1">
    <igx-card-header>
      <h5 igxCardHeaderTitle>Rozes</h5>
      <h5 igxCardHeaderSubtitle>Under the Grave (2016)</h5>
      <igx-card-media width="64px" height="64px">
        <img src="https://dl.infragistics.com/x/img/music/rozes.jpg" alt="Rozes album cover" />
      </igx-card-media>
    </igx-card-header>
    <igx-card-content>
      <p>As I have always said: I write what's real and what's true, even if it means throwing myself under the bus.</p>
    </igx-card-content>
  </div>
  <igx-divider [vertical]="true"></igx-divider>
  <igx-card-actions layout="justify">
    <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" igxEnd aria-label="Previous track">
      <igx-icon>skip_previous</igx-icon>
    </button>
    <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" igxEnd aria-label="Play">
      <igx-icon>play_arrow</igx-icon>
    </button>
    <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" igxEnd aria-label="Next track">
      <igx-icon>skip_next</igx-icon>
    </button>
  </igx-card-actions>
</igx-card>
```

```css
.card-wrapper {
  max-width: 400px;
  min-width: 250px;
}
```

For a semi-horizontal card, keep the header, content, and actions stacked in one column, then place the media section beside that column.

```html
<igx-card [horizontal]="true" elevated>
  <div igxLayout igxLayoutDir="column" igxFlex [igxFlexGrow]="1">
    <igx-card-header>
      <igx-avatar src="https://dl.infragistics.com/x/img/music/singer_with_mic.jpg"></igx-avatar>
      <h5 igxCardHeaderTitle>HERE</h5>
      <h5 igxCardHeaderSubtitle>by Mellow D</h5>
    </igx-card-header>
    <igx-card-content>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    </igx-card-content>
    <igx-card-actions [vertical]="false">
      <button igxButton="flat" igxRipple igxStart>Play Album</button>
    </igx-card-actions>
  </div>
  <igx-card-media width="96px">
    <img src="https://dl.infragistics.com/x/img/music/singer_female.jpg" alt="Singer" />
  </igx-card-media>
</igx-card>
```

```css
.card-wrapper {
  max-width: 400px;
  min-width: 250px;
}
```

### Do/Don't

The card usually works as an overview UI and an entry point for more detailed information. Avoid clogging it with too much information, and as you create dashboards with it, size and arrange the cards consistently in order to form a layout grid with equal horizontal and vertical gaps between cards.

<div class="card-guidance">
  <figure class="card-guidance__item">
    
    <figcaption>
      <span class="card-guidance__do">Do</span>
      <span class="card-guidance__text">Keep body text brief and focused on essential information for quick readability.</span>
    </figcaption>
  </figure>
  <figure class="card-guidance__item">
    
    <figcaption>
      <span class="card-guidance__not">Don't</span>
      <span class="card-guidance__text">Avoid overloading the card body with long paragraphs or unnecessary detail.</span>
    </figcaption>
  </figure>
</div>

<style>{`
  .card-guidance {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    margin-bottom: 24px;
  }

  .card-guidance__item {
    margin: 0;
  }

  .card-guidance__item img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid #d3d3d3;
  }

  .card-guidance figcaption {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-top: 12px;
    text-align: start;
    font: inherit;
    color: inherit;
  }

  .card-guidance__do,
  .card-guidance__not {
    font-size: 18px;
    font-weight: 600;
  }

  .card-guidance__do {
    color: #0f8a3d;
  }

  .card-guidance__not {
    color: #d0273c;
  }

  @media (max-width: 600px) {
    .card-guidance {
      grid-template-columns: 1fr;
    }
  }
`}</style>

## Properties

The card API exposes container appearance, action-layout, and media sizing controls.

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| [`elevated`](mcp:get_api_reference?platform=angular&component=IgxCardComponent&member=elevated) | `boolean` | `false` | Sets the card to use an elevated appearance with shadow. |
| [`horizontal`](mcp:get_api_reference?platform=angular&component=IgxCardComponent&member=horizontal) | `boolean` | `false` | Aligns the card sections horizontally. |
| [`vertical`](mcp:get_api_reference?platform=angular&component=IgxCardActionsComponent&member=vertical) | `boolean` | Value of the card `horizontal` input | Arranges the actions vertically. When it is not set, it follows the `horizontal` input of the parent card. |
| [`layout`](mcp:get_api_reference?platform=angular&component=IgxCardActionsComponent&member=layout) | `"start" \| "justify"` | `"start"` | Sets how the actions are distributed. `justify` spaces them evenly along the actions axis. |
| [`width`](mcp:get_api_reference?platform=angular&component=IgxCardMediaDirective&member=width) | `string` | `"auto"` | Sets the `width` and `min-width` of the media container. |
| [`height`](mcp:get_api_reference?platform=angular&component=IgxCardMediaDirective&member=height) | `string` | `"auto"` | Sets the `height` of the media container. |

## Styling

The card appearance is controlled through theme variables.

| Variable | What it changes |
| -- | -- |
| `--ig-card-background` | Card background color. |
| `--ig-card-outline-color` | Card outline color. |
| `--ig-card-header-text-color` | Card title text color. |
| `--ig-card-subtitle-text-color` | Card subtitle text color. |
| `--ig-card-content-text-color` | Card content text color. |
| `--ig-card-actions-text-color` | Card actions text color. |
| `--ig-card-resting-shadow` | Card shadow in its resting state. |
| `--ig-card-hover-shadow` | Card shadow in its hover state. |
| `--ig-card-border-radius` | Card border radius. |

### Sass Theming

Use the `card-theme` function when your application customizes Ignite UI themes through Sass.

```scss
@use "igniteui-theming/sass/themes" as *;

$custom-card-theme: card-theme(
  $background: #1f2937,
  $border-radius: 12px,
  $header-text-color: #ffffff,
  $content-text-color: #e5e7eb
);

:root {
  @include tokens($custom-card-theme);
}
```

### CSS Variables

Set component CSS variables directly when you need local styling without a Sass build step.

```css
igx-card {
  --background: var(--ig-secondary-900);
  --header-text-color: var(--ig-secondary-900-contrast);
  --content-text-color: var(--ig-secondary-900-contrast);
}

igx-card-header {
  --subtitle-text-color: var(--ig-warn-500);
}
```

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import {
    IgxCardActionsComponent,
    IgxCardComponent,
    IgxCardContentDirective,
    IgxCardHeaderComponent,
    IgxCardHeaderTitleDirective,
    IgxCardMediaDirective
} from 'igniteui-angular/card';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-card-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./card-styling.component.scss'],
    templateUrl: './card-styling.component.html',
    imports: [
        IgxCardActionsComponent,
        IgxCardComponent,
        IgxCardContentDirective,
        IgxCardHeaderComponent,
        IgxCardHeaderTitleDirective,
        IgxCardMediaDirective,
        IgxChipComponent,
        IgxIconButtonDirective,
        IgxIconComponent,
        IgxPrefixDirective,
        IgxSuffixDirective
    ]
})
export class CardStylingComponent { }
```
```html
<igx-card class="balance-card">
    <igx-chip class="trend-chip">
        <igx-icon igxPrefix>trending_up</igx-icon>
        <span>+12.4%</span>
    </igx-chip>
    <igx-card-header>
        <span igxCardHeaderTitle>Total balance</span>
    </igx-card-header>
    <igx-card-content>
        <span class="balance-amount">$24,860</span>
    </igx-card-content>
    <igx-card-actions>
        <div igxEnd class="balance-actions">
            <button igxIconButton="flat" aria-label="Copy account link">
                <igx-icon>link</igx-icon>
            </button>
            <button igxIconButton="flat" aria-label="More options">
                <igx-icon>more_vert</igx-icon>
            </button>
        </div>
    </igx-card-actions>
</igx-card>

<igx-card class="support-card">
    <igx-chip class="support-tag">Support</igx-chip>
    <igx-card-media class="support-media" height="124px">
        <img
            src="https://dl.infragistics.com/x/img/card/card-3.png"
            alt="Support agent reviewing system dashboards on a laptop" />
    </igx-card-media>
    <igx-card-header>
        <span igxCardHeaderTitle>Review the issue and check system logs</span>
    </igx-card-header>
    <igx-card-actions>
        <span class="support-link">Find out more</span>
    </igx-card-actions>
</igx-card>
```
```scss
@use "igniteui-theming/sass/typography" as *;
@import url("https://use.typekit.net/bng2zgw.css");

// The design brings its own palette and typeface, so the colors below are
// literal instead of theme tokens - the sample keeps its look in every theme.
// aktiv-grotesk is the typekit family name loaded above.
app-card-styling {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 100vh;
    gap: rem(60px);
    padding: rem(40px) rem(24px);

    .balance-card {
        --ig-card-border-radius: #{rem(16px)};
        --ig-card-outline-color: #99c9ff;

        position: relative;
        width: rem(312px);
        padding: rem(8px);
        background: #e6f2ff;

        igx-card-header {
            padding: rem(16px) rem(16px) 0;
        }

        [igxCardHeaderTitle] {
            color: #004699;
            font-family: "aktiv-grotesk", "Aktiv Grotesk", Arial, sans-serif;
            font-size: rem(14px);
            font-weight: 500;
            line-height: rem(24px);
            letter-spacing: rem(0.1px);
        }

        igx-card-content {
            padding: 0 rem(16px);
            overflow: visible;
        }

        igx-card-actions {
            padding: rem(16px);
        }
    }

    .trend-chip {
        position: absolute;
        inset-block-start: rem(24px);
        inset-inline-end: rem(24px);
        z-index: 1;

        .igx-chip__item {
            box-sizing: border-box;
            height: rem(24px);
            padding: rem(2px) rem(6px);
            border: none;
            border-radius: rem(16px);
            background: #cce4ff;
            color: #004699;
            font-family: "Titillium Web", Verdana, Tahoma, sans-serif;
            font-size: rem(14px);
            font-weight: 400;
            line-height: rem(20px);
            letter-spacing: rem(0.25px);
        }

        .igx-chip__start {
            color: #004699;
        }

        igx-icon {
            --ig-icon-size: #{rem(20px)};
        }
    }

    .balance-amount {
        display: block;
        color: #0176ff;
        font-family: "aktiv-grotesk", "Aktiv Grotesk", Arial, sans-serif;
        font-size: rem(32px);
        font-weight: 600;
        line-height: rem(40px);
        letter-spacing: 0;
    }

    .balance-actions {
        display: inline-flex;
        gap: rem(8px);

        [igxIconButton] {
            --ig-flat-icon-button-foreground: #004699;

            width: rem(36px);
            height: rem(36px);
            border-radius: 50%;
            background: #ffffff;
        }
    }

    .support-card {
        --ig-card-border-radius: #{rem(16px)};
        --ig-card-outline-color: #e5ebf3;

        position: relative;
        width: rem(246px);
        padding: rem(8px);
        background: #ffffff;

        igx-card-header {
            padding: rem(16px) rem(16px) 0;
        }

        [igxCardHeaderTitle] {
            margin-block-end: 0;
            color: #004699;
            font-family: "aktiv-grotesk", "Aktiv Grotesk", Arial, sans-serif;
            font-size: rem(16px);
            font-weight: 700;
            line-height: rem(20px);
            letter-spacing: 0;
        }

        igx-card-actions {
            padding: rem(16px) rem(16px) rem(8px);
        }
    }

    .support-media {
        box-sizing: border-box;
        padding: rem(16px);
        border-radius: rem(16px);

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .support-tag {
        position: absolute;
        inset-block-start: rem(12px);
        inset-inline-start: rem(16px);
        z-index: 1;

        .igx-chip__item {
            box-sizing: border-box;
            height: rem(24px);
            padding: rem(2px) rem(10px);
            border: none;
            border-radius: rem(16px);
            background: #e6f2ff;
            color: #004699;
            font-family: "Titillium Web", Verdana, Tahoma, sans-serif;
            font-size: rem(14px);
            font-weight: 400;
            line-height: rem(20px);
            letter-spacing: rem(0.25px);
        }
    }

    .support-link {
        color: #7d91ab;
        font-family: "aktiv-grotesk", "Aktiv Grotesk", Arial, sans-serif;
        font-size: rem(12px);
        font-weight: 600;
        line-height: rem(16px);
        letter-spacing: rem(0.15px);
    }
}
```

### Styling with Tailwind

Use Tailwind utility classes when your Angular application already styles Ignite UI components through Tailwind.

```typescript
import { Component, inject } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxButtonDirective, IgxDividerComponent, IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import {
    IgxCardActionsComponent,
    IgxCardComponent,
    IgxCardContentDirective,
    IgxCardHeaderComponent,
    IgxCardHeaderTitleDirective,
    IgxCardMediaDirective,
    IgxCardThumbnailDirective
} from 'igniteui-angular/card';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { berealIcon, instagramIcon, plusIcon, threadsIcon } from './icons';

@Component({
    selector: 'app-card-tailwind-styling',
    styleUrls: ['./card-tailwind-styling.component.scss'],
    templateUrl: './card-tailwind-styling.component.html',
    imports: [
        IgxAvatarComponent,
        IgxButtonDirective,
        IgxCardActionsComponent,
        IgxCardComponent,
        IgxCardContentDirective,
        IgxCardHeaderComponent,
        IgxCardHeaderTitleDirective,
        IgxCardMediaDirective,
        IgxCardThumbnailDirective,
        IgxDividerComponent,
        IgxIconButtonDirective,
        IgxIconComponent,
        IgxRippleDirective
    ]
})
export class CardTailwindStylingComponent {
    private iconService = inject(IgxIconService);

    public profileStats = [
        { value: '23.9K', label: 'Likes' },
        { value: '163', label: 'Posts' },
        { value: '23.9K', label: 'Views' }
    ];

    constructor() {
        this.iconService.addSvgIconFromText('instagram', instagramIcon, 'material');
        this.iconService.addSvgIconFromText('bereal', berealIcon, 'material');
        this.iconService.addSvgIconFromText('threads', threadsIcon, 'material');
        this.iconService.addSvgIconFromText('plus', plusIcon, 'material');
    }
}
```
```html
<igx-card class="[--ig-card-border-radius:30px] [--ig-card-outline-color:transparent]">
    <igx-card-media class="h-[189px]">
        <img
        class="object-cover"
        src="https://dl.infragistics.com/x/img/avatars/image-bg4.png"
        alt="Cafe interior" />
    </igx-card-media>
    <igx-card-header>
        <igx-avatar
            igxCardThumbnail
            shape="circle"
            size="medium"
            src="https://dl.infragistics.com/x/img/avatars/avatar-profile-09.png"
            alt="A profile photo of Kate Thompson.">
        </igx-avatar>
        <span igxCardHeaderTitle>Kate Thompson</span>
        <p class="card-sample-custom-subtitle">3D Artist. Turning polygons into worlds and immersive digital realities</p>

    </igx-card-header>
    <igx-card-content>
        <div class="grid grid-cols-[1fr_auto_1fr_auto_1fr]">
            @for (stat of profileStats; track stat.label; let isLast = $last) {
                <div class="flex min-w-0 flex-col items-center gap-1 px-3">
                    <span class="stats-title">{{ stat.value }}</span>
                    <span class="stats-subtitle">{{ stat.label }}</span>
                </div>
                @if (!isLast) {
                    <igx-divider class="h-12" vertical></igx-divider>
                }
            }
        </div>
    </igx-card-content>
    <igx-card-actions>
        <button
            igxButton="contained"
            class="[--ig-contained-button-active-background:var(--ig-gray-400)] [--ig-contained-button-background:var(--ig-gray-200)] [--ig-contained-button-border-radius:16px] [--ig-contained-button-focus-background:var(--ig-gray-300)] [--ig-contained-button-hover-background:var(--ig-gray-300)] [--ig-size:var(--ig-size-small)]">
            <span class="inline-flex items-center gap-1">
                FOLLOW
                <igx-icon name="plus" collection="material"></igx-icon>
            </span>
        </button>
        <div igxEnd class="inline-flex gap-1">
            <button igxIconButton="flat" igxRipple aria-label="Open Instagram profile">
                <igx-icon name="instagram" collection="material"></igx-icon>
            </button>
            <button igxIconButton="flat" igxRipple aria-label="Open BeReal profile">
                <igx-icon name="bereal" collection="material"></igx-icon>
            </button>
            <button igxIconButton="flat" igxRipple aria-label="Open Threads profile">
                <igx-icon name="threads" collection="material"></igx-icon>
            </button>
        </div>
    </igx-card-actions>
</igx-card>

<igx-card class="[--ig-card-border-radius:30px] [--ig-card-outline-color:transparent]">
    <igx-card-header>
        <span igxCardThumbnail
            class="inline-flex rounded-full p-[5px] bg-[linear-gradient(40deg,#D2F586,#A0C9FF)]">
            <igx-avatar
                size="medium"
                shape="circle"
                src="https://dl.infragistics.com/x/img/avatars/avatar-profile-09.png"
                alt="A profile photo of Kate Thompson.">
            </igx-avatar>
        </span>
        <span igxCardHeaderTitle>Kate Thompson</span>
        <p class="card-sample-custom-subtitle">3D Artist. Turning polygons into worlds and immersive digital realities</p>
    </igx-card-header>
    <igx-card-content>
        <div class="grid grid-cols-[1fr_auto_1fr_auto_1fr]">
            @for (stat of profileStats; track stat.label; let isLast = $last) {
                <div class="flex min-w-0 flex-col items-center gap-1 px-3">
                    <span class="stats-title">{{ stat.value }}</span>
                    <span class="stats-subtitle">{{ stat.label }}</span>
                </div>
                @if (!isLast) {
                    <igx-divider vertical></igx-divider>
                }
            }
        </div>
    </igx-card-content>
    <igx-card-actions >
        <button
            igxButton="contained"
            class="[--ig-contained-button-active-background:var(--ig-gray-400)] [--ig-contained-button-background:var(--ig-gray-200)] [--ig-contained-button-border-radius:16px] [--ig-contained-button-focus-background:var(--ig-gray-300)] [--ig-contained-button-hover-background:var(--ig-gray-300)] [--ig-size:var(--ig-size-small)]">
            <span class="inline-flex items-center gap-1">
                <span>FOLLOW</span>
                <igx-icon name="plus" collection="material"></igx-icon>
            </span>
        </button>
        <div igxEnd class="inline-flex items-center gap-1">
            <button igxIconButton="flat" igxRipple aria-label="Open Instagram profile">
                <igx-icon name="instagram" collection="material"></igx-icon>
            </button>
            <button igxIconButton="flat" igxRipple aria-label="Open BeReal profile">
                <igx-icon name="bereal" collection="material"></igx-icon>
            </button>
            <button igxIconButton="flat" igxRipple aria-label="Open Threads profile">
                <igx-icon name="threads" collection="material"></igx-icon>
            </button>
        </div>
    </igx-card-actions>
</igx-card>
```
```scss
@use "igniteui-theming/sass/typography" as *;

:host {
    display: grid;
    grid-template-columns: repeat(auto-fit, rem(344px));
    gap: rem(40px);
    place-content: center;
    height: 100vh;
}

igx-card:nth-of-type(2) {
    align-self: center;
}

.card-sample-custom-subtitle {
    display: block;
    color: var(--ig-gray-700);

    @include type-style("body-2") {
        margin-block-start: rem(8px);
    };
}

.stats-title {
    color: var(--ig-gray-900);

    @include type-style("subtitle-1") {
        font-weight: 600;
    };
}

.stats-subtitle {
    color: var(--ig-gray-500);

    @include type-style("body-2");
}
```

## Accessibility

The card is a container. Grouping and media semantics come from the card regions, while keyboard operability and accessible names come from the content you place inside them.

### Keyboard Interaction

The card and its header, media, content, and actions regions declare no key handlers and are not in the tab order. Focus moves through the focusable content you place inside them, in DOM order.

| Key | Action |
| -- | -- |
| <kbd>Tab</kbd> | Moves focus to the next focusable element inside the card, such as a button or link in the content or actions area. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves focus to the previous focusable element inside the card. |

The actions area always renders its leading region, then its centered content, then its trailing region. Switching the actions to a vertical layout restyles them without reordering the DOM, so keyboard and screen reader order stay the same.

### Screen Readers / ARIA

- The card host renders `role="group"` and a generated `id` in the form `igx-card-1`. Set the `role` input when a different grouping role fits your information architecture, and reference the card title with `aria-labelledby` so the group has an accessible name.
- `igx-card-media` renders `role="img"`, which exposes the whole media region as a single image and makes its children presentational, so an `alt` attribute on the inner image does not name it. Name the region itself with `aria-label` or `aria-labelledby`, or set its `role` input to `presentation` when the media is decorative.
- The header, title, subtitle, content, and actions members add styling classes only. They contribute no roles and no `aria-*` attributes.
- Give icon-only buttons in the actions area an accessible name; the icon alone provides none.
- Use a single interactive element when the whole card triggers one action, rather than attaching a click handler to the container, so the action keeps a role and a name.

### Accessibility Compliance

Infragistics documents Ignite UI for Angular accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| -- | -- |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html) | The card exposes its host as a group, and the card regions project their content without rewriting it, so headings, text, lists, media, and controls keep their native semantics. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) | The card adds no key handling and no focus traps of its own, so keyboard-operable content inside it stays operable. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html) | The actions area renders its leading, centered, and trailing regions in a fixed DOM order that the vertical layout does not change. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html) | The card host exposes `role="group"` and the media region exposes `role="img"`. Neither sets an accessible name, so name the card with `aria-labelledby` that points to its title, and name the media region with `aria-label` or `aria-labelledby`, or set its `role` to `presentation` when it is decorative. |

Your responsibilities:

- Pass a real heading element to the title so the card takes its place in the document outline, and keep the subtitle as plain text.
- Provide alternative text for meaningful media, and give the media region an accessible name wherever it is exposed as an image.
- Give icon-only action buttons an accessible name.
- Keep DOM order and visual order aligned when you build horizontal or split card layouts with CSS.
- Keep sufficient contrast when overriding card colors.

## API References

Use these API references for the complete card, card section, and supporting component APIs.

[`IgxCard`](mcp:get_api_reference?platform=angular&component=IgxCardComponent)
[`IgxCardActions`](mcp:get_api_reference?platform=angular&component=IgxCardActionsComponent)
[`IgxCardContentDirective`](mcp:get_api_reference?platform=angular&component=IgxCardContentDirective)
[`IgxCardHeader`](mcp:get_api_reference?platform=angular&component=IgxCardHeaderComponent)
[`IgxCardMediaDirective`](mcp:get_api_reference?platform=angular&component=IgxCardMediaDirective)
[`IgxAvatar`](mcp:get_api_reference?platform=angular&component=IgxAvatarComponent)
[`IgxButtonDirective`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective)
[`IgxIconButtonDirective`](mcp:get_api_reference?platform=angular&component=IgxIconButtonDirective)
[`IgxIcon`](mcp:get_api_reference?platform=angular&component=IgxIconComponent)
[`IgxRippleDirective`](mcp:get_api_reference?platform=angular&component=IgxRippleDirective)

## Dependencies

The card uses its own header, media, content, and actions sub-components. Cards that include thumbnails, actions, icons, or ripples also depend on the corresponding [`IgxAvatar`](mcp:get_api_reference?platform=angular&component=IgxAvatarComponent), [`IgxButtonDirective`](mcp:get_api_reference?platform=angular&component=IgxButtonDirective), [`IgxIconButtonDirective`](mcp:get_api_reference?platform=angular&component=IgxIconButtonDirective), [`IgxIcon`](mcp:get_api_reference?platform=angular&component=IgxIconComponent), and [`IgxRippleDirective`](mcp:get_api_reference?platform=angular&component=IgxRippleDirective) components and directives.

## Additional Resources

Use these resources to continue with Ignite UI for Angular Card support, source, and related layout guidance.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

## Related Components

Use the [Grid](../grid/grid.md) when users need dense tabular data with sorting, filtering, and column-level interaction. Use the [List](../list.md) when repeated items should remain compact and primarily vertical.

## FAQ

  **Q: How do I make an entire card clickable without breaking screen readers?**

    The card is a plain container and adds no interactive behavior, so wrapping the whole card in a link is a common but harmful shortcut: the accessible name of that link becomes every piece of text in the card. Put a real link or button on the card title instead, then stretch it over the card with an absolutely positioned pseudo-element that covers the card box. The title stays the accessible name, the whole rectangle stays clickable, and text selection and middle-click keep working.
  
  **Q: How do I make cards in a row or grid the same height?**

    The card sizes itself from its content and does not equalize heights across siblings. Lay the cards out in a CSS grid or a flex row so each card stretches to the row height, give the media region a fixed height or `aspect-ratio`, and clamp the title and body to a set number of lines with `-webkit-line-clamp`. Unequal card heights almost always come from letting each image and each paragraph decide its own height.
  
  **Q: Why is my card image cropped, and how do I control its size?**

    The card media region controls the dimensions of the media it contains, so size the region rather than the image. Set the `height` and `width` inputs on `igx-card-media`, and use a consistent aspect ratio across cards so rows of cards stay aligned.
  
  **Q: Why do my card actions appear in a different region than the one I placed them in?**

    The card actions area projects content by selector, not by author order. An element with `igxButton` and without `igxEnd` goes to the leading region, and an element with `igxIconButton`, or an `igx-icon`, without `igxStart` goes to the trailing region; only content matching neither selector stays centered. Set `igxStart` or `igxEnd` explicitly to place an action where you want it.
  
  **Q: When should I use Grid or List instead of Card?**

    Use Grid when the data is dense and tabular and readers need to scan, sort, or compare across columns, and use List when many short, uniform rows must fit in a small space. Use Card when each item deserves its own media, longer text, and its own actions. A long scroll of cards is usually a list in disguise.
  


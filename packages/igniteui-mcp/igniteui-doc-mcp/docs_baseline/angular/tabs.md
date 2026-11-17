---
title: "Angular Tabs Component"
description: "The Ignite UI for Angular Tabs component organizes related content into tabs, shows the content of the selected tab, and adds scroll buttons when the tabs don't fit."
keywords: "Angular Tabs, Ignite UI for Angular, tab header, tab panel, scroll buttons"
license: MIT
last_updated: "2026-11-11"
relatedComponents: ["Stepper", "Accordion"]
mentionedTypes: ["Tabs", "Tab"]
llms:
  description: "The Ignite UI for Angular Tabs component organizes related content at the same level of hierarchy into tabs and shows the content of the selected tab."
platformType: web-only
_tocName: Tabs
---
# Tabs

The Ignite UI for Angular Tabs component organizes related content at the same level of hierarchy into tabs and shows the content of the selected tab.

The selector of the Angular Tabs component is `igx-tabs`. Each `igx-tab-item` in it holds a tab header and the content that the Tabs component shows when the tab is selected.

## Live Demo

```typescript
import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineTitleDirective, IgxListThumbnailDirective } from 'igniteui-angular/list';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

interface Person {
    name: string;
    team: string;
    avatar: string;
}

interface Team {
    name: string;
    people: Person[];
}

const people: Person[] = [
    { name: 'Emily Carter', team: 'Finance', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png' },
    { name: 'Jose Diaz', team: 'Engineering', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png' },
    { name: 'Kira Tanaka', team: 'Finance', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-08.png' },
    { name: 'Liam Brooks', team: 'Engineering', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-03.png' }
];

@Component({
    selector: 'app-tabs-overview',
    styleUrls: ['./tabs-overview.component.scss'],
    templateUrl: './tabs-overview.component.html',
    imports: [
        IgxTabsComponent,
        IgxTabItemComponent,
        IgxTabHeaderComponent,
        IgxTabHeaderLabelDirective,
        IgxTabContentComponent,
        IgxListComponent,
        IgxListItemComponent,
        IgxListThumbnailDirective,
        IgxListLineTitleDirective,
        IgxListActionDirective,
        IgxAvatarComponent
    ]
})
export class TabsOverviewComponent {
    public teams: Team[] = ['Everyone', 'Finance', 'Engineering'].map((name) => ({
        name,
        people: people.filter((person) => name === 'Everyone' || person.team === name)
    }));
}
```
```html
<div class="team-tabs">
    <igx-tabs tabAlignment="justify">
        @for (team of teams; track team.name) {
            <igx-tab-item [selected]="$first">
                <igx-tab-header>
                    <span igxTabHeaderLabel>{{ team.name }}</span>
                </igx-tab-header>
                <igx-tab-content>
                    <igx-list>
                        @for (person of team.people; track person.name) {
                            <igx-list-item>
                                <igx-avatar igxListThumbnail [src]="person.avatar" shape="circle" [attr.aria-label]="person.name"></igx-avatar>
                                <span igxListLineTitle>{{ person.name }}</span>
                                <span igxListAction class="team-name">{{ person.team }}</span>
                            </igx-list-item>
                        }
                    </igx-list>
                </igx-tab-content>
            </igx-tab-item>
        }
    </igx-tabs>
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

.team-tabs {
    width: 23.9375rem;
    height: 17rem;
    background: var(--ig-surface-500);
}

.team-tabs igx-tabs {
    height: 100%;
}

.team-tabs igx-tab-content {
    overflow: hidden;
}

.team-tabs igx-list {
    --ig-size: var(--ig-size-large);
}

.team-name {
    font-family: var(--ig-subtitle-2-font-family, var(--ig-font-family));
    font-size: var(--ig-subtitle-2-font-size);
    font-weight: var(--ig-subtitle-2-font-weight);
    line-height: var(--ig-subtitle-2-line-height);
    letter-spacing: var(--ig-subtitle-2-letter-spacing);
    color: var(--ig-gray-900);
}
```

## Anatomy

The Angular Tabs component consists of a container with tab items, optional scroll buttons, and a content area for the selected tab.

**Tabs anatomy:** The Tabs component shows a row of tab headers above the content area of the selected tab.

<style>{`
  .tabs-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .tabs-anatomy .igd-anatomy__image {
    max-width: 701px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Tabs Container:</strong> groups and aligns all tab items<br />
<strong>2. Header Button (optional):</strong> navigation arrows appear for tabs that aren't visible in the tab container<br />
<strong>3. Label:</strong> text that names the tab and indicates what content it opens<br />
<strong>4. Active Tab Item:</strong> a single selectable tab element that is active<br />
<strong>5. Left Icon (optional):</strong> icon shown before the label to add context to the tab<br />
<strong>6. Top Icon (optional):</strong> icon shown above the label to add context to the tab<br />
<strong>7. Right Icon (optional):</strong> icon shown after the label to add context to the tab<br />
<strong>8. Content Area:</strong> the panel where content for the selected tab is displayed</span>

The `igx-tabs` element renders the header strip from the `igx-tab-header` of each tab item and the content area from the `igx-tab-content` of each tab item:

```text
igx-tabs.igx-tabs
├─ div.igx-tabs-header
│  ├─ button.igx-tabs-header-button                 // start scroll button, hidden when the headers fit
│  ├─ div.igx-tabs-header__content
│  │  └─ div.igx-tabs-header__wrapper[role="tablist"]
│  │     ├─ div.igx-tabs-header-scroll
│  │     │  └─ igx-tab-header[role="tab"]          // one for each igx-tab-item
│  │     │     ├─ [igxPrefix]
│  │     │     ├─ div.igx-tab-header__inner        // [igxTabHeaderIcon] above [igxTabHeaderLabel]
│  │     │     └─ [igxSuffix]
│  │     └─ div.igx-tabs-header__active-indicator
│  └─ button.igx-tabs-header-button                 // end scroll button, hidden when the headers fit
└─ div.igx-tabs-content
   └─ igx-tab-content[role="tabpanel"]             // one for each igx-tab-item; renders its content only when selected
```

## Getting Started

To use the Angular Tabs, follow the [Ignite UI for Angular Getting Started](../general/getting-started.md) topic for the basic project setup, then add the component for your target platform.

If your project doesn't use Ignite UI for Angular yet, run `ng add igniteui-angular`. Then import the `IGX_TABS_DIRECTIVES` token and add it to the `imports` of your component. The token holds the [`IgxTabs`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent), the tab item, header, and content components, the header label and icon directives, and the prefix and suffix directives:

```ts
import { Component } from '@angular/core';
import { IGX_TABS_DIRECTIVES } from 'igniteui-angular/tabs';
// import { IGX_TABS_DIRECTIVES } from '@infragistics/igniteui-angular/tabs'; for licensed package

@Component({
    selector: 'app-home',
    template: `
        <igx-tabs>
            <igx-tab-item>
                <igx-tab-header>
                    <span igxTabHeaderLabel>Overview</span>
                </igx-tab-header>
                <igx-tab-content>The overview content.</igx-tab-content>
            </igx-tab-item>
            <igx-tab-item>
                <igx-tab-header>
                    <span igxTabHeaderLabel>Details</span>
                </igx-tab-header>
                <igx-tab-content>The details content.</igx-tab-content>
            </igx-tab-item>
        </igx-tabs>
    `,
    imports: [IGX_TABS_DIRECTIVES]
})
export class HomeComponent {}
```

When no tab item is selected and the tab items have content, the Angular Tabs component selects the first tab item on init.

## Usage

Use the Angular Tabs to organize different views of the same information or switch between similar or related data sets.

### Type

The Tabs are available in two types - Short, showing only text by default, with the option to have prefix and suffix icons, and Tall, which also has an additional third icon on top of the text.

For a short tab, place a `<span>` with the [`igxTabHeaderLabel`](mcp:get_api_reference?platform=angular&component=IgxTabHeaderLabelDirective) directive in the `igx-tab-header`. For a tall tab, also add an `igx-icon` with the [`igxTabHeaderIcon`](mcp:get_api_reference?platform=angular&component=IgxTabHeaderIconDirective) directive, and the Tabs component shows the icon above the text. Add `IgxIconComponent` to the `imports` of your component next to `IGX_TABS_DIRECTIVES`:

```html
<igx-tabs>
  <igx-tab-item>
    <igx-tab-header>
      <igx-icon igxTabHeaderIcon>shopping_basket</igx-icon>
      <span igxTabHeaderLabel>Cart</span>
    </igx-tab-header>
    <igx-tab-content>The cart content.</igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header>
      <igx-icon igxTabHeaderIcon>local_shipping</igx-icon>
      <span igxTabHeaderLabel>Shipping</span>
    </igx-tab-header>
    <igx-tab-content>The shipping content.</igx-tab-content>
  </igx-tab-item>
</igx-tabs>
```

To show content before and after the label, such as an icon or a badge, add it to the `igx-tab-header` with the `igxPrefix` and `igxSuffix` directives. The badge below also needs `IgxBadgeComponent` in the `imports`:

```html
<igx-tab-header>
  <igx-icon igxPrefix>inbox</igx-icon>
  <span igxTabHeaderLabel>Inbox</span>
  <igx-badge igxSuffix [value]="12"></igx-badge>
</igx-tab-header>
```

```typescript
import { Component, inject } from '@angular/core';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

const shoppingBasketIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.21 8.99953L12.83 2.43953C12.64 2.15953 12.32 2.01953 12 2.01953C11.68 2.01953 11.36 2.15953 11.17 2.44953L6.79 8.99953H2C1.45 8.99953 1 9.44953 1 9.99953C1 10.0895 1.01 10.1795 1.04 10.2695L3.58 19.5395C3.81 20.3795 4.58 20.9995 5.5 20.9995H18.5C19.42 20.9995 20.19 20.3795 20.43 19.5395L22.97 10.2695L23 9.99953C23 9.44953 22.55 8.99953 22 8.99953H17.21ZM9 8.99953L12 4.59953L15 8.99953H9ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17Z"/></svg>';
const deliveryIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12L20 7H15V5H2V15H4.184C4.06556 15.3203 4.00331 15.6586 4 16C4 17.6569 5.34315 19 7 19C8.65685 19 10 17.6569 10 16C9.99669 15.6586 9.93444 15.3203 9.816 15H15.184C15.0655 15.3202 15.0032 15.6586 15 16C15 17.6569 16.3431 19 18 19C19.6569 19 21 17.6569 21 16C20.9968 15.6586 20.9345 15.3202 20.816 15H22V12ZM7 17C6.44772 17 6 16.5523 6 16C6 15.4477 6.44772 15 7 15C7.55228 15 8 15.4477 8 16C8 16.5523 7.55228 17 7 17ZM18 17C17.4477 17 17 16.5523 17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17ZM17 12V9H19L20 12H17Z"/></svg>';
const creditCardIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z"/></svg>';

interface Step {
    label: string;
    icon: string;
}

@Component({
    selector: 'app-tabs-type',
    styleUrls: ['./tabs-type.component.scss'],
    templateUrl: './tabs-type.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabHeaderIconDirective, IgxTabContentComponent, IgxIconComponent]
})
export class TabsTypeComponent {
    public steps: Step[] = [
        { label: 'Cart', icon: 'shopping_basket' },
        { label: 'Shipping', icon: 'delivery' },
        { label: 'Payment', icon: 'credit_card' }
    ];

    constructor() {
        const iconService = inject(IgxIconService);
        iconService.addSvgIconFromText('shopping_basket', shoppingBasketIcon, 'material');
        iconService.addSvgIconFromText('delivery', deliveryIcon, 'material');
        iconService.addSvgIconFromText('credit_card', creditCardIcon, 'material');
    }
}
```
```html
<div class="types">
    <span class="type-label">Short Bar</span>
    <igx-tabs tabAlignment="justify">
        @for (step of steps; track step.label) {
            <igx-tab-item [selected]="$first">
                <igx-tab-header>
                    <span igxTabHeaderLabel>{{ step.label }}</span>
                </igx-tab-header>
                <igx-tab-content></igx-tab-content>
            </igx-tab-item>
        }
    </igx-tabs>
    <span class="type-label">Tall Bar</span>
    <igx-tabs tabAlignment="justify">
        @for (step of steps; track step.label) {
            <igx-tab-item [selected]="$first">
                <igx-tab-header>
                    <igx-icon igxTabHeaderIcon family="material" [name]="step.icon"></igx-icon>
                    <span igxTabHeaderLabel>{{ step.label }}</span>
                </igx-tab-header>
                <igx-tab-content></igx-tab-content>
            </igx-tab-item>
        }
    </igx-tabs>
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

.types {
    display: grid;
    grid-template-columns: 6.1875rem 33.125rem;
    align-items: center;
    row-gap: 3.75rem;
}

.type-label {
    font: 400 13px / 20px "Aktiv Grotesk", sans-serif;
    letter-spacing: 0.3px;
    color: var(--ig-gray-600);
}
```

### Responsiveness

The Tabs can be Content Fit to fill up the available horizontal space by adapting their width, or Fixed with scrolling buttons to navigate a large number of tab items. This allows fitting more content than what is normally possible with the other mode in the same total space.

The [`tabAlignment`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent&member=tabAlignment) property sets how the Angular Tabs component arranges the tab headers:

- `start` (default): each tab header is as wide as its content, and the headers start at the start edge of the Tabs.
- `center`: each tab header is as wide as its content, and the headers are centered.
- `end`: each tab header is as wide as its content, and the headers end at the end edge of the Tabs.
- `justify`: the tab headers stretch to fill the width of the Tabs. Use it for the Content Fit mode.

```html
<igx-tabs tabAlignment="justify">
  <igx-tab-item>
    <igx-tab-header><span igxTabHeaderLabel>Podcasts</span></igx-tab-header>
    <igx-tab-content>The podcasts content.</igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header><span igxTabHeaderLabel>Playlists</span></igx-tab-header>
    <igx-tab-content>The playlists content.</igx-tab-content>
  </igx-tab-item>
</igx-tabs>
```

When the tab headers don't fit, the Angular Tabs component shows a scroll button at each end of the header strip, which is the Fixed mode. A scroll button scrolls the strip to the next tab header that is out of view in its direction, and it's disabled when the strip is scrolled to that end. When the user selects a tab, the Tabs component scrolls its header into view.

```typescript
import { Component } from '@angular/core';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

@Component({
    selector: 'app-tabs-responsiveness',
    styleUrls: ['./tabs-responsiveness.component.scss'],
    templateUrl: './tabs-responsiveness.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsResponsivenessComponent {
    public categories = ['Podcasts', 'Playlists', 'Genres'];
    public days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
}
```
```html
<div class="modes">
    <span class="mode-label">Content Fit</span>
    <igx-tabs tabAlignment="justify">
        @for (category of categories; track category) {
            <igx-tab-item [selected]="$first">
                <igx-tab-header>
                    <span igxTabHeaderLabel>{{ category }}</span>
                </igx-tab-header>
                <igx-tab-content></igx-tab-content>
            </igx-tab-item>
        }
    </igx-tabs>
    <span class="mode-label">Content Fix</span>
    <igx-tabs>
        @for (day of days; track day) {
            <igx-tab-item [selected]="$first">
                <igx-tab-header>
                    <span igxTabHeaderLabel>{{ day }}</span>
                </igx-tab-header>
                <igx-tab-content></igx-tab-content>
            </igx-tab-item>
        }
    </igx-tabs>
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

.modes {
    display: grid;
    grid-template-columns: 6.1875rem 33.125rem;
    align-items: center;
    row-gap: 3.75rem;
}

.mode-label {
    font: 400 13px / 20px "Aktiv Grotesk", sans-serif;
    letter-spacing: 0.3px;
    color: var(--ig-gray-600);
}
```

### Amount

For most scenarios, the Tabs need to contain between two and five items. If your use case requires more than five tabs, you should consider the Fixed mode explained above.

You can add and remove tab items at run time, for example with `@for`. When you remove the selected tab item, the Angular Tabs component selects the tab item that takes its index, or the last tab item when the removed one was last.

```typescript
import { Component } from '@angular/core';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

const categories = ['Podcasts', 'Playlists', 'Genres', 'Albums', 'Artists', 'Audiobooks', 'Radio'];

@Component({
    selector: 'app-tabs-amount',
    styleUrls: ['./tabs-amount.component.scss'],
    templateUrl: './tabs-amount.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsAmountComponent {
    public twoTabs = categories.slice(0, 2);
    public fiveTabs = categories.slice(0, 5);
    public moreTabs = categories;
}
```
```html
<div class="amounts">
    <span class="amount-label">Two Tabs</span>
    <igx-tabs tabAlignment="justify">
        @for (category of twoTabs; track category) {
            <igx-tab-item [selected]="$first">
                <igx-tab-header>
                    <span igxTabHeaderLabel>{{ category }}</span>
                </igx-tab-header>
                <igx-tab-content></igx-tab-content>
            </igx-tab-item>
        }
    </igx-tabs>
    <span class="amount-label">Five Tabs</span>
    <igx-tabs tabAlignment="justify">
        @for (category of fiveTabs; track category) {
            <igx-tab-item [selected]="$first">
                <igx-tab-header>
                    <span igxTabHeaderLabel>{{ category }}</span>
                </igx-tab-header>
                <igx-tab-content></igx-tab-content>
            </igx-tab-item>
        }
    </igx-tabs>
    <span class="amount-label">5+ Tabs</span>
    <igx-tabs>
        @for (category of moreTabs; track category) {
            <igx-tab-item [selected]="$first">
                <igx-tab-header>
                    <span igxTabHeaderLabel>{{ category }}</span>
                </igx-tab-header>
                <igx-tab-content></igx-tab-content>
            </igx-tab-item>
        }
    </igx-tabs>
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

.amounts {
    display: grid;
    grid-template-columns: 5.6875rem 35rem;
    align-items: center;
    row-gap: 3.75rem;
}

.amount-label {
    font: 400 13px / 20px "Aktiv Grotesk", sans-serif;
    letter-spacing: 0.3px;
    color: var(--ig-gray-600);
}
```

### States

Tab Items support Active, Inactive, Active & Hover, Inactive & Hover and Disabled states. In Tabs there is always one Active tab and an arbitrary number of Inactive and Disabled ones.

Set `selected` on a tab to make it the active tab, and `disabled` to turn it off. Users can't select a disabled tab, and the keyboard navigation skips it.

```html
<igx-tabs>
  <igx-tab-item>
    <igx-tab-header><span igxTabHeaderLabel>Overview</span></igx-tab-header>
    <igx-tab-content>The overview content.</igx-tab-content>
  </igx-tab-item>
  <igx-tab-item selected>
    <igx-tab-header><span igxTabHeaderLabel>Activity</span></igx-tab-header>
    <igx-tab-content>The activity content.</igx-tab-content>
  </igx-tab-item>
  <igx-tab-item disabled>
    <igx-tab-header><span igxTabHeaderLabel>Billing</span></igx-tab-header>
    <igx-tab-content>The billing content.</igx-tab-content>
  </igx-tab-item>
</igx-tabs>
```

```typescript
import { Component, ElementRef, inject } from '@angular/core';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

@Component({
    selector: 'app-tabs-states',
    styleUrls: ['./tabs-states.component.scss'],
    templateUrl: './tabs-states.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsStatesComponent {
    constructor() {
        // The tabs are display-only, so the keys are stopped before they reach the tab headers.
        inject<ElementRef<HTMLElement>>(ElementRef).nativeElement
            .addEventListener('keydown', (event) => event.stopPropagation(), { capture: true });
    }
}
```
```html
<div class="states">
    <span></span>
    <span class="state-label state-column">Active</span>
    <span class="state-label state-column">Inactive</span>
    <span class="state-label state-column">Disabled</span>
    <span class="state-label">Hover / Off</span>
    <igx-tabs class="state-tabs" tabAlignment="justify">
        <igx-tab-item [selected]="true">
            <igx-tab-header>
                <span igxTabHeaderLabel>Active</span>
            </igx-tab-header>
            <igx-tab-content></igx-tab-content>
        </igx-tab-item>
        <igx-tab-item>
            <igx-tab-header>
                <span igxTabHeaderLabel>Inactive</span>
            </igx-tab-header>
            <igx-tab-content></igx-tab-content>
        </igx-tab-item>
        <igx-tab-item [disabled]="true">
            <igx-tab-header>
                <span igxTabHeaderLabel>Disabled</span>
            </igx-tab-header>
            <igx-tab-content></igx-tab-content>
        </igx-tab-item>
    </igx-tabs>
    <span class="state-label">Hover / On</span>
    <igx-tabs class="state-tabs" tabAlignment="justify">
        <igx-tab-item [selected]="true">
            <igx-tab-header class="hover">
                <span igxTabHeaderLabel>Active</span>
            </igx-tab-header>
            <igx-tab-content></igx-tab-content>
        </igx-tab-item>
        <igx-tab-item>
            <igx-tab-header class="hover">
                <span igxTabHeaderLabel>Inactive</span>
            </igx-tab-header>
            <igx-tab-content></igx-tab-content>
        </igx-tab-item>
    </igx-tabs>
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

.states {
    display: grid;
    grid-template-columns: 4.5rem repeat(3, 8.875rem);
    align-items: center;
    row-gap: 1.875rem;
}

.state-label {
    font: 400 13px / 20px "Aktiv Grotesk", sans-serif;
    letter-spacing: 0.3px;
    color: var(--ig-gray-600);
}

.state-column {
    justify-self: center;
}

.state-tabs {
    grid-column: 2 / -1;
    pointer-events: none;
}

.state-tabs ::ng-deep .igx-tabs-header {
    background: transparent;
}

.state-tabs ::ng-deep .igx-tabs-header::after {
    display: none;
}

/* Each tab header sits centered in its own column, under its state label. */
.state-tabs ::ng-deep .igx-tabs-header-scroll {
    display: grid;
    grid-template-columns: repeat(3, 8.875rem);
}

.state-tabs igx-tab-header {
    justify-self: center;
}

.state-tabs igx-tab-header:not(.igx-tab-header--selected) {
    border-bottom: 1px solid var(--border-color);
}

.state-tabs igx-tab-header.hover {
    color: var(--item-hover-color);
    background: var(--item-hover-background);
}

.state-tabs igx-tab-header.hover.igx-tab-header--selected {
    color: var(--item-active-hover-color);
    background: var(--item-active-hover-background);
}
```

### Header Position

Set [`headerPosition`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent&member=headerPosition) on the Angular Tabs component to `start` or `end` for vertical tabs: a column of tab headers before or after the content in the text direction. The default, `top`, keeps them in a row above the content. The `headerPosition` input requires `igniteui-angular` 22.3.0 or later.

```html
<igx-tabs headerPosition="start" style="height: 11rem">
  <igx-tab-item>
    <igx-tab-header><span igxTabHeaderLabel>Profile</span></igx-tab-header>
    <igx-tab-content>Update your name, photo, and contact details.</igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header><span igxTabHeaderLabel>Security</span></igx-tab-header>
    <igx-tab-content>Change your password and sign-in options.</igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header><span igxTabHeaderLabel>Notifications</span></igx-tab-header>
    <igx-tab-content>Choose which updates you receive by email.</igx-tab-content>
  </igx-tab-item>
</igx-tabs>
```

With `strictTemplates`, a bound value typed as `string` doesn't compile. Type it as `IgxTabsHeaderPosition`:

```ts
import { IgxTabsHeaderPosition } from 'igniteui-angular/tabs';

public position: IgxTabsHeaderPosition = IgxTabsHeaderPosition.end;
```

```html
<igx-tabs [headerPosition]="position">...</igx-tabs>
```

Without a height, the Angular Tabs component grows with its column of tab headers or the selected tab's content, whichever is taller. To limit it, set a `height` or a `max-height` on the component. The content of a taller tab then scrolls inside the component. In a column, each tab header takes the width of the column, and `tabAlignment` applies along the height. The mouse wheel and touch don't scroll the tab headers of a column, but the scroll buttons and the keyboard do.

To show routed views beside a column of tab headers, place the Angular Tabs component and an element that holds the `router-outlet` in a container with `display: flex`, and give that element `flex: 1` and `min-width: 0`.

```typescript
import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent, IgxTabsHeaderPosition } from 'igniteui-angular/tabs';

interface Section {
    label: string;
    text: string;
}

@Component({
    selector: 'app-tabs-header-position',
    styleUrls: ['./tabs-header-position.component.scss'],
    templateUrl: './tabs-header-position.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsHeaderPositionComponent {
    public headerPosition: IgxTabsHeaderPosition = IgxTabsHeaderPosition.start;

    public positions: { label: string; value: IgxTabsHeaderPosition }[] = [
        { label: 'Top', value: IgxTabsHeaderPosition.top },
        { label: 'Start', value: IgxTabsHeaderPosition.start },
        { label: 'End', value: IgxTabsHeaderPosition.end }
    ];

    public sections: Section[] = [
        { label: 'Profile', text: 'Update your name, photo, and contact details.' },
        { label: 'Security', text: 'Change your password and sign-in options.' },
        { label: 'Notifications', text: 'Choose which updates you receive by email.' }
    ];
}
```
```html
<div class="sample">
    <igx-buttongroup selectionMode="singleRequired" aria-label="Header position">
        @for (position of positions; track position.value) {
            <button igxButton [selected]="position.value === headerPosition" (click)="headerPosition = position.value">{{ position.label }}</button>
        }
    </igx-buttongroup>
    <div class="tabs-container">
        <igx-tabs [headerPosition]="headerPosition">
            @for (section of sections; track section.label) {
                <igx-tab-item>
                    <igx-tab-header>
                        <span igxTabHeaderLabel>{{ section.label }}</span>
                    </igx-tab-header>
                    <igx-tab-content>{{ section.text }}</igx-tab-content>
                </igx-tab-item>
            }
        </igx-tabs>
    </div>
</div>
```
```scss
@use "igniteui-theming/sass/typography" as *;

.sample {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 1rem;
}

.tabs-container {
    width: 100%;
    max-width: 33.125rem;
}

igx-tabs {
    height: 11rem;
}

igx-tab-content {
    @include type-style("body-2");

    padding: 0.75rem 1rem;
    color: var(--ig-gray-900);
}
```

### Selection

Bind [`selectedIndex`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent&member=selectedIndex) to read and set the index of the selected tab. The Angular Tabs component emits [`selectedIndexChanging`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent&member=selectedIndexChanging) before the selection changes, and you can cancel the change in its handler:

```html
<igx-tabs [(selectedIndex)]="selectedIndex" (selectedIndexChanging)="onSelectedIndexChanging($event)">
  <igx-tab-item>
    <igx-tab-header><span igxTabHeaderLabel>Profile</span></igx-tab-header>
    <igx-tab-content>The profile form.</igx-tab-content>
  </igx-tab-item>
  <igx-tab-item>
    <igx-tab-header><span igxTabHeaderLabel>Billing</span></igx-tab-header>
    <igx-tab-content>The billing form.</igx-tab-content>
  </igx-tab-item>
</igx-tabs>
```

```ts
import { ITabsSelectedIndexChangingEventArgs } from 'igniteui-angular/tabs';

public selectedIndex = 0;
public hasUnsavedChanges = false;

public onSelectedIndexChanging(event: ITabsSelectedIndexChangingEventArgs) {
    if (this.hasUnsavedChanges) {
        event.cancel = true;
    }
}
```

After the selection changes, the Angular Tabs component emits [`selectedItemChange`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent&member=selectedItemChange) with the previous and the new tab item. These events also fire when you set `selectedIndex` in code.

### Activation

By default, the Angular Tabs component selects a tab as soon as the arrow keys, Home, or End move the focus to its header. Set [`activation`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent&member=activation) to `manual` to move only the focus with these keys, and to select the focused tab with Enter or Space. Use the manual activation when showing the content of a tab is slow, for example when it loads data.

```html
<igx-tabs activation="manual">
  ...
</igx-tabs>
```

### Do/Don't

The Tabs are appropriate for organizing information, and one should avoid using them as a way to design workflows and actions that come in a logical sequence, e.g. checkout process or configuration wizard. When using the short Tabs, never combine a text tab with an icon tab in the same bar. Choose one of the two content modes and use it consistently for all the items in the bar.

<Fragment slot="do">

Use tabs to organize related information.

</Fragment>
<Fragment slot="dont">

Avoid tabs for the steps of a sequential workflow, such as a checkout process.

</Fragment>

<Fragment slot="do">

Use the same content mode, text or icons, for all tabs in a bar.

</Fragment>
<Fragment slot="dont">

Avoid combining text tabs and icon tabs in the same bar.

</Fragment>

## Properties

The Angular Tabs component exposes the following properties. See the API reference for the complete type definitions.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [`selectedIndex`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent&member=selectedIndex) | `number` | `-1` | The index of the selected tab item. When no tab item is selected and the tab items have content, the Tabs component selects the first tab item. Supports two-way binding. |
| [`tabAlignment`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent&member=tabAlignment) | `'start' \| 'end' \| 'center' \| 'justify'` | `'start'` | How the tab headers are arranged in the header strip. |
| [`headerPosition`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent&member=headerPosition) | `'top' \| 'start' \| 'end'` | `'top'` | Where the tab headers are placed: a row above the content, or a column before or after it. |
| [`activation`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent&member=activation) | `'auto' \| 'manual'` | `'auto'` | Whether moving the focus to a tab header with the keyboard also selects the tab. |
| [`disableAnimation`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent&member=disableAnimation) | `boolean` | `false` | Whether the content animation on selection change is turned off. |
| [`selectedItem`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent&member=selectedItem) | `IgxTabItemDirective` | — | Read-only. The selected tab item. |
| [`items`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent&member=items) | `QueryList<IgxTabItemDirective>` | — | Read-only. The tab items of the Tabs. |
| [`TabItem.selected`](mcp:get_api_reference?platform=angular&component=IgxTabItemComponent&member=selected) | `boolean` | `false` | Whether the tab item is selected. Supports two-way binding. |
| [`TabItem.disabled`](mcp:get_api_reference?platform=angular&component=IgxTabItemComponent&member=disabled) | `boolean` | `false` | Whether the tab item is disabled. |

## Events

The Angular Tabs component emits the following events.

| Name | Description |
| --- | --- |
| [`selectedIndexChanging`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent&member=selectedIndexChanging) | Emitted with [`ITabsSelectedIndexChangingEventArgs`](mcp:get_api_reference?platform=angular&component=ITabsSelectedIndexChangingEventArgs) before the selected index changes. Set `cancel` to keep the current tab, or change `newIndex` to select another tab. |
| [`selectedIndexChange`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent&member=selectedIndexChange) | Emitted with the new index, a `number`, after the selected index changes. Enables the `[(selectedIndex)]` two-way binding. |
| [`selectedItemChange`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent&member=selectedItemChange) | Emitted with [`ITabsSelectedItemChangeEventArgs`](mcp:get_api_reference?platform=angular&component=ITabsSelectedItemChangeEventArgs), which holds the previous and the new tab item, after the selected tab item changes. |
| [`TabItem.selectedChange`](mcp:get_api_reference?platform=angular&component=IgxTabItemComponent&member=selectedChange) | Emitted with a `boolean` when the tab item is selected or deselected. Enables the `[(selected)]` two-way binding. |

## Styling

The Angular Tabs component takes its colors from the theme. Change them with the following CSS variables:

| Variable | What it changes |
| --- | --- |
| `--ig-tabs-item-background` | The background of the tab headers. |
| `--ig-tabs-item-text-color` | The text color of the tab headers. |
| `--ig-tabs-item-icon-color` | The icon color of the tab headers. |
| `--ig-tabs-item-hover-background` | The background of a hovered or focused tab header. |
| `--ig-tabs-item-hover-color` | The text color of a hovered or focused tab header. |
| `--ig-tabs-item-active-background` | The background of the selected tab header. |
| `--ig-tabs-item-active-color` | The text color of the selected tab header. |
| `--ig-tabs-item-active-icon-color` | The icon color of the selected tab header. |
| `--ig-tabs-item-disabled-color` | The text color of a disabled tab header. |
| `--ig-tabs-item-disabled-icon-color` | The icon color of a disabled tab header. |
| `--ig-tabs-indicator-color` | The color of the indicator of the selected tab header. |
| `--ig-tabs-button-background` | The background of the scroll buttons. |
| `--ig-tabs-button-color` | The icon color of the scroll buttons. |
| `--ig-tabs-button-hover-background` | The background of a hovered scroll button. |
| `--ig-tabs-button-disabled-color` | The icon color of a disabled scroll button. |
| `--ig-tabs-header-background` | The background of the header strip behind the tab headers. |

### Sass Theming

When you modify a primary property, all related dependent properties are automatically updated to reflect the change. The primary parameters of the `tabs-theme` function are `$item-background`, from which the theme derives the colors of all tab states, and `$item-active-color`, from which it derives the indicator color. Create a theme with the function and include it with the `tokens()` mixin, which emits the matching `--ig-tabs-*` variables in the scope where you include it.

```scss
@use "igniteui-angular/theming" as *;

$custom-tabs-theme: tabs-theme(
  $item-background: #292826,
  $item-active-color: #f4d45c
);

:host {
  @include tokens($custom-tabs-theme);
}
```

### CSS Variables

Set the CSS variables on a Tabs component or on a container when you need local styling without a Sass build step:

```css
.profile-tabs {
  --ig-tabs-item-active-color: #e41c77;
  --ig-tabs-indicator-color: #e41c77;
}
```

```typescript
import { Component, ViewEncapsulation } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineSubTitleDirective, IgxListLineTitleDirective, IgxListThumbnailDirective } from 'igniteui-angular/list';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

interface ProfileDetail {
    label: string;
    value: string;
}

interface ProfileSection {
    label: string;
    disabled?: boolean;
    details: ProfileDetail[];
}

@Component({
    selector: 'app-tabs-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./tabs-styling.component.scss'],
    templateUrl: './tabs-styling.component.html',
    imports: [
        IgxTabsComponent,
        IgxTabItemComponent,
        IgxTabHeaderComponent,
        IgxTabHeaderLabelDirective,
        IgxTabContentComponent,
        IgxListComponent,
        IgxListItemComponent,
        IgxListThumbnailDirective,
        IgxListLineTitleDirective,
        IgxListLineSubTitleDirective,
        IgxListActionDirective,
        IgxAvatarComponent,
        IgxChipComponent
    ]
})
export class TabsStylingComponent {
    public sections: ProfileSection[] = [
        {
            label: 'Overview',
            details: [
                { label: 'Email', value: 'emily.carter@gmail.com' },
                { label: 'Team', value: 'Finance, 8 members' },
                { label: 'Joined', value: 'March 2023' }
            ]
        },
        {
            label: 'Activity',
            details: [
                { label: 'Last login', value: 'Today, 09:24' },
                { label: 'Reports', value: '12 this month' },
                { label: 'Approvals', value: '3 pending' }
            ]
        },
        {
            label: 'Billing',
            disabled: true,
            details: []
        }
    ];
}
```
```html
<div class="profile-card">
    <igx-list class="profile-header">
        <igx-list-item>
            <igx-avatar igxListThumbnail src="https://dl.infragistics.com/x/img/avatars/avatar-profile-09.png" shape="circle" aria-label="Emily Carter"></igx-avatar>
            <span igxListLineTitle class="profile-name">Emily Carter</span>
            <span igxListLineSubTitle class="profile-role">Finance lead - Sofia</span>
            <igx-chip igxListAction class="profile-status">Active</igx-chip>
        </igx-list-item>
    </igx-list>
    <igx-tabs class="profile-tabs" tabAlignment="justify">
        @for (section of sections; track section.label) {
            <igx-tab-item [selected]="$first" [disabled]="section.disabled">
                <igx-tab-header>
                    <span igxTabHeaderLabel>{{ section.label }}</span>
                </igx-tab-header>
                <igx-tab-content>
                    <igx-list class="profile-details">
                        @for (detail of section.details; track detail.label) {
                            <igx-list-item>
                                <span igxListLineTitle class="detail-label">{{ detail.label }}</span>
                                <span igxListAction class="detail-value">{{ detail.value }}</span>
                            </igx-list-item>
                        }
                    </igx-list>
                </igx-tab-content>
            </igx-tab-item>
        }
    </igx-tabs>
</div>
```
```scss
@use "sass:meta";
@import url("https://use.typekit.net/bng2zgw.css");
@include meta.load-css("igniteui-angular/lib/core/styles/themes/presets/igniteui-bootstrap-light");

app-tabs-styling {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}

.profile-card {
    --ig-font-family: aktiv-grotesk, sans-serif;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 19.125rem;
    height: 15.25rem;
    padding: 0.5rem;
    border: 1px solid #e5ebf3;
    border-radius: 1rem;
    background: #fff;
}

.profile-card igx-list {
    --ig-size: var(--ig-size-large);
    --ig-list-background: #fff;
    --ig-list-item-background: #fff;

    border: none;
}

.profile-name {
    font: 600 16px / 24px aktiv-grotesk, sans-serif;
    letter-spacing: 0.15px;
    color: #212121;
}

.profile-role {
    font: 600 12px / 16px aktiv-grotesk, sans-serif;
    letter-spacing: 0.15px;
    color: #556c86;
}

.profile-status {
    --ig-size: var(--ig-size-small);
    --ig-chip-background: #cde6d1;
    --ig-chip-hover-background: #cde6d1;
    --ig-chip-text-color: #000;
    --ig-chip-hover-text-color: #000;
    --ig-chip-border-radius: 1rem;
}

.profile-status .igx-chip__item {
    font: 400 12px / 16px aktiv-grotesk, sans-serif;
    letter-spacing: 0.4px;
}

.profile-tabs {
    --ig-tabs-item-background: #fff;
    --ig-tabs-item-hover-background: #fff;
    --ig-tabs-item-active-background: #fff;
    --ig-tabs-item-active-hover-background: #fff;
    --ig-tabs-item-text-color: #556c86;
    --ig-tabs-item-hover-color: #344b65;
    --ig-tabs-item-active-color: #0176ff;
    --ig-tabs-item-active-hover-color: #0176ff;
    --ig-tabs-item-disabled-color: #a9b8cc;
    --ig-tabs-indicator-color: #0176ff;
    --ig-tabs-border-color: transparent;
    --ig-tabs-border-color--hover: transparent;

    flex: 1 1 0;
    min-height: 0;
}

.profile-tabs [igxTabHeaderLabel] {
    font: 500 14px / 20px aktiv-grotesk, sans-serif;
    letter-spacing: 0.25px;
    text-transform: none;
}

/* The theme draws no indicator under the selected tab, so the design's line is drawn here. */
.profile-tabs .igx-tab-header--selected::before {
    content: "";
    position: absolute;
    inset: 0;
    height: auto;
    background: none;
    box-shadow: inset 0 -2px 0 #0176ff;
    z-index: -1;
}

.profile-tabs .igx-tab-header:focus {
    box-shadow: none;
}

.profile-details {
    --ig-list-border-color: #e5ebf3;
    --ig-list-border-width: 1px;
}

.profile-details igx-list-item {
    box-sizing: border-box;
    height: 2.25rem;
}

/* The row's own padding sits on the item's content wrapper, which fills the row. */
.profile-details .igx-list-item__content {
    box-sizing: border-box;
    height: 100%;
}

.profile-details .igx-list-item__thumbnail {
    display: none;
}

/* The content wrapper paints the row's background, so the line above the
   first row is drawn on it rather than on the item. */
.profile-details igx-list-item:first-of-type .igx-list-item__content {
    box-shadow: inset 0 1px 0 #e5ebf3;
}

.detail-label {
    font: 400 13px / 20px aktiv-grotesk, sans-serif;
    letter-spacing: 0.3px;
    color: #344b65;
}

.detail-value {
    font: 600 12px / 16px "Titillium Web", sans-serif;
    letter-spacing: 0.15px;
    color: #344b65;
}
```

### Styling with Tailwind

You can style the Angular Tabs using our custom Tailwind utility classes. Make sure to [set up Tailwind](../themes/tailwind.md) first.

Import the Ignite UI utilities in your global stylesheet:

```css
@import "tailwindcss";
@import "igniteui-theming/tailwind/utilities/material.css";
```

Use the `light-tabs` or `dark-tabs` class for the corresponding theme, and override the generated CSS variables with arbitrary properties:

```html
<igx-tabs class="!light-tabs ![--item-background:#011627] ![--item-active-color:#FF8040]">
  ...
</igx-tabs>
```

The exclamation mark (`!`) gives the Tailwind utility precedence over the default theme styles of the Tabs.

```typescript
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.33333 17.5V12.5H11.6667V17.5H15.8333V10.8333H18.3333L10 3.33333L1.66667 10.8333H4.16667V17.5H8.33333Z"/></svg>';
const placeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.66667C6.775 1.66667 4.16667 4.275 4.16667 7.5C4.16667 11.875 10 18.3333 10 18.3333C10 18.3333 15.8333 11.875 15.8333 7.5C15.8333 4.275 13.225 1.66667 10 1.66667ZM10 9.58333C8.85 9.58333 7.91667 8.65 7.91667 7.5C7.91667 6.35 8.85 5.41667 10 5.41667C11.15 5.41667 12.0833 6.35 12.0833 7.5C12.0833 8.65 11.15 9.58333 10 9.58333Z"/></svg>';
const notificationsIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.9167C10.9167 17.9167 11.6667 17.1667 11.6667 16.25H8.33333C8.33333 17.1667 9.075 17.9167 10 17.9167ZM15 12.9167V8.75C15 6.19167 13.6333 4.05 11.25 3.48333V2.91667C11.25 2.225 10.6917 1.66667 10 1.66667C9.30833 1.66667 8.75 2.225 8.75 2.91667V3.48333C6.35833 4.05 5 6.18333 5 8.75V12.9167L3.33333 14.5833V15.4167H16.6667V14.5833L15 12.9167Z"/></svg>';
const messengerIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0005 1.67197C7.8104 1.59245 5.68271 2.41021 4.10963 3.9361C2.53656 5.46198 1.65438 7.56379 1.66718 9.7553C1.64133 12.0302 2.59442 14.2066 4.28385 15.7303C4.41843 15.8529 4.49927 16.0235 4.50885 16.2053V17.6803C4.51812 17.9023 4.63603 18.1055 4.82415 18.2237C5.01226 18.3419 5.2465 18.3599 5.45051 18.272L7.11718 17.547C7.2595 17.4932 7.41653 17.4932 7.55885 17.547C8.34671 17.7596 9.15945 17.8661 9.97551 17.8636C14.4467 17.8705 18.0769 14.2515 18.0838 9.7803C18.0907 5.3091 14.4717 1.67887 10.0005 1.67197ZM15.0005 7.88823L12.5589 11.7632C12.3727 12.0588 12.0713 12.263 11.7278 12.3263C11.3842 12.3897 11.0299 12.3063 10.7505 12.0966L8.80052 10.6382C8.62274 10.5049 8.3783 10.5049 8.20052 10.6382L5.56719 12.6382C5.41575 12.755 5.2021 12.7454 5.06181 12.6154C4.92152 12.4854 4.89561 12.2731 5.00052 12.1132L7.44219 8.23823C7.62836 7.94264 7.92973 7.73845 8.27328 7.67512C8.61682 7.61179 8.97119 7.69511 9.25052 7.90489L11.2005 9.36323C11.3783 9.49656 11.6227 9.49656 11.8005 9.36323L14.4339 7.37156C14.5853 7.25477 14.7989 7.26442 14.9392 7.3944C15.0795 7.52437 15.1054 7.73666 15.0005 7.89656V7.88823Z"/></svg>';
const personIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24"><path d="M10 10C11.8417 10 13.3333 8.50833 13.3333 6.66667C13.3333 4.825 11.8417 3.33333 10 3.33333C8.15833 3.33333 6.66667 4.825 6.66667 6.66667C6.66667 8.50833 8.15833 10 10 10ZM10 11.6667C7.775 11.6667 3.33333 12.7833 3.33333 15V16.6667H16.6667V15C16.6667 12.7833 12.225 11.6667 10 11.6667Z"/></svg>';

interface Destination {
    label: string;
    icon: string;
    selected?: boolean;
}

@Component({
    selector: 'app-tabs-tailwind-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./tabs-tailwind-styling.component.scss'],
    templateUrl: './tabs-tailwind-styling.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabContentComponent, IgxIconComponent]
})
export class TabsTailwindStylingComponent {
    public destinations: Destination[] = [
        { label: 'Home', icon: 'home' },
        { label: 'Location', icon: 'place', selected: true },
        { label: 'Alerts', icon: 'notifications' },
        { label: 'Chat', icon: 'messenger' },
        { label: 'Profile', icon: 'person' }
    ];

    constructor() {
        const iconService = inject(IgxIconService);
        iconService.addSvgIconFromText('home', homeIcon, 'material');
        iconService.addSvgIconFromText('place', placeIcon, 'material');
        iconService.addSvgIconFromText('notifications', notificationsIcon, 'material');
        iconService.addSvgIconFromText('messenger', messengerIcon, 'material');
        iconService.addSvgIconFromText('person', personIcon, 'material');
    }
}
```
```html
<igx-tabs
    tabAlignment="justify"
    class="h-auto w-[511px] rounded-full [--ig-font-family:aktiv-grotesk,sans-serif] [--ig-tabs-border-color--hover:transparent] [--ig-tabs-border-color:transparent] [--ig-tabs-border-radius:0] [--ig-tabs-indicator-color:transparent] [--ig-tabs-item-active-background:var(--color-nav-active)] [--ig-tabs-item-active-color:#fff] [--ig-tabs-item-active-hover-background:var(--color-nav-active)] [--ig-tabs-item-active-hover-color:#fff] [--ig-tabs-item-active-hover-icon-color:#fff] [--ig-tabs-item-active-icon-color:#fff] [--ig-tabs-item-background:var(--color-nav-surface)] [--ig-tabs-item-hover-background:var(--color-nav-hover)] [--ig-tabs-item-hover-color:var(--color-nav-ink)] [--ig-tabs-item-hover-icon-color:var(--color-nav-ink)] [--ig-tabs-item-icon-color:var(--color-nav-ink)] [--ig-tabs-item-text-color:var(--color-nav-ink)]">
    @for (destination of destinations; track destination.label) {
        <igx-tab-item [selected]="destination.selected">
            <igx-tab-header class="!py-3">
                <igx-icon igxTabHeaderIcon family="material" [name]="destination.icon" class="[--ig-icon-size:1.5rem]"></igx-icon>
                <span igxTabHeaderLabel class="!text-xs !leading-4 !font-semibold !tracking-[0.15px] !normal-case">{{ destination.label }}</span>
            </igx-tab-header>
            <igx-tab-content></igx-tab-content>
        </igx-tab-item>
    }
</igx-tabs>
```
```scss
@use "sass:meta";
@import url("https://use.typekit.net/bng2zgw.css");
@include meta.load-css("igniteui-angular/lib/core/styles/themes/presets/igniteui-bootstrap-light");

app-tabs-tailwind-styling {
    /* The navigation palette that the utilities in the template read. */
    --color-nav-surface: #112031;
    --color-nav-hover: #1a314a;
    --color-nav-active: #006ae6;
    --color-nav-ink: #3392ff;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
}
```

## Accessibility

The Angular Tabs component uses the roles of the WAI-ARIA tabs pattern: users reach the tab headers with the Tab key, move between them with the arrow keys, and select a tab to show its content.

### Keyboard Interaction

Only the selected tab header of the Angular Tabs component is in the tab order, so the header strip is a single tab stop. When no tab item is selected, no tab header is in the tab order. The content of the selected tab is the next tab stop. The following keys work while a tab header has the focus:

| Key | Action |
| --- | --- |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves the focus out of the header strip, to the content of the selected tab or to the previous focusable element. The Tabs component doesn't handle these keys. |
| <kbd>Arrow Right</kbd> | Moves the focus to the next enabled tab header, and from the last one to the first. In a right-to-left layout, moves it to the previous one. With the `auto` activation, also selects the tab. In a column of tab headers, the Tabs component doesn't handle this key. |
| <kbd>Arrow Left</kbd> | Moves the focus to the previous enabled tab header, and from the first one to the last. In a right-to-left layout, moves it to the next one. With the `auto` activation, also selects the tab. In a column of tab headers, the Tabs component doesn't handle this key. |
| <kbd>Arrow Down</kbd> | In a column of tab headers, moves the focus to the next enabled tab header, and from the last one to the first. With the `auto` activation, also selects the tab. |
| <kbd>Arrow Up</kbd> | In a column of tab headers, moves the focus to the previous enabled tab header, and from the first one to the last. With the `auto` activation, also selects the tab. |
| <kbd>Home</kbd> | Moves the focus to the first enabled tab header. With the `auto` activation, also selects the tab. |
| <kbd>End</kbd> | Moves the focus to the last enabled tab header. With the `auto` activation, also selects the tab. |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | With the `manual` activation, selects the focused tab by clicking its header. |

With a pointer, a click on a tab header selects the tab when the tab item has content. A disabled tab header ignores clicks. The scroll buttons aren't in the tab order.

### Screen Readers / ARIA

The Angular Tabs component renders the following roles and attributes:

| Element | Role | Attributes |
| --- | --- | --- |
| The `div.igx-tabs-header__wrapper` element in the header | `tablist` | `aria-orientation="horizontal"`, or `aria-orientation="vertical"` in a column of tab headers |
| `igx-tab-header` | `tab` | `aria-selected`, `aria-disabled`, and, when the tab item has content, an `id` and `aria-controls` that points to the content |
| `igx-tab-content` | `tabpanel` | `aria-labelledby` that points to the header of the tab item |

The Angular Tabs component also behaves as follows for assistive technology:

- A tab takes its accessible name from the content of its `igx-tab-header`.
- The Tabs component renders the content of the selected tab item only, so the content of the other tab items isn't in the DOM.
- Tab items without `igx-tab-content`, such as the tabs that drive the router, get no `id` and `aria-controls`.
- The Tabs component doesn't use a live region. A changed selection reaches assistive technology through the `aria-selected` state and the focus.

### Accessibility Compliance

Infragistics documents Ignite UI for Angular accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| --- | --- |
| [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) | The `tablist`, `tab`, and `tabpanel` roles expose the structure, and each tab panel is labeled by its tab header through `aria-labelledby`. |
| [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color) | In the Material, Fluent, and Indigo themes, the selected tab header shows an indicator line under it, or beside it in a column of tab headers, so the selection doesn't depend on color alone. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The arrow keys, Home, and End move between the tab headers, and Enter and Space select the focused tab with the `manual` activation. |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap) | The Tabs component doesn't handle the Tab key, so Tab and Shift + Tab move the focus out of the header strip. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order) | The header strip is a single tab stop, followed by the content of the selected tab. |
| [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible) | The focused tab header takes the hover colors of the theme, so it stands out from the other tab headers. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | Each tab header exposes the `tab` role, a name from its content, and its selected and disabled states through `aria-selected` and `aria-disabled`. |

Your responsibilities:

- Give every tab a text label that names its content. A tab takes its accessible name from its header content, so a header with an icon only needs a text alternative. See [Type](#type).
- When you override the theme colors, keep a contrast ratio of at least 3:1 between the selected indicator and the background, as [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast) requires, and keep the focused tab header distinct from the other headers.
- Don't use the Tabs for the steps of a sequential process. Use a Stepper, which communicates the order of the steps.
- Keep a tab item selected, so that keyboard users can reach the header strip, and set the `manual` activation for tabs that drive the router.

## API References

The Angular Tabs API reference lists the complete API surface for the target platform.

- [`IgxTabsComponent`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent)
- [`IgxTabsComponent.headerPosition`](mcp:get_api_reference?platform=angular&component=IgxTabsComponent&member=headerPosition)
- `IgxTabsHeaderPosition`
- [`IgxTabItemComponent`](mcp:get_api_reference?platform=angular&component=IgxTabItemComponent)
- [`IgxTabHeaderComponent`](mcp:get_api_reference?platform=angular&component=IgxTabHeaderComponent)
- [`IgxTabContentComponent`](mcp:get_api_reference?platform=angular&component=IgxTabContentComponent)
- [`IgxTabHeaderLabelDirective`](mcp:get_api_reference?platform=angular&component=IgxTabHeaderLabelDirective)
- [`IgxTabHeaderIconDirective`](mcp:get_api_reference?platform=angular&component=IgxTabHeaderIconDirective)
- `tabs-theme`

## Dependencies

The Angular Tabs component requires a theme to apply its colors and sizes. See the framework-specific setup in [**Getting Started**](../general/getting-started.md).

The scroll buttons of the Angular Tabs use the Icon Button and the Icon, and the `theme()` mixin includes their styles together with the Tabs styles.

## Additional Resources

The following resources provide more Angular Tabs guidance and project support:

- [Tabs - Design System Component](https://www.infragistics.com/products/indigo-design/help/components/tabs)
- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

## Related Components

The Angular Tabs component shows one section of related content at a time. Use these components when the content needs a different structure:

- [Stepper](../stepper.md) - Use Stepper when users complete a sequence of steps, such as a checkout process.
- [Accordion](./accordion.md) - Use Accordion when users need to expand several sections of a vertical list at the same time.
- [Bottom Navigation](../tabbar.md) - Use Bottom Navigation to switch between the top-level views of a mobile app from the bottom of the screen.

## FAQ

These questions cover common Angular Tabs setup, accessibility, and usage scenarios.

  **Q: How do I select a tab in code?**

    Set the `selectedIndex` property of the Angular Tabs, or set the `selected` input of a tab item to `true`. The Angular Tabs component emits `selectedIndexChanging` and `selectedItemChange` for these changes too.
  
  **Q: Can I prevent users from switching to another tab?**

    Yes. Handle the `selectedIndexChanging` event of the Angular Tabs and set `cancel` to `true` to keep the current tab, for example while a form in it has unsaved changes. To make a tab unavailable at all times, set `disabled` on the tab item.
  
  **Q: Does the Tabs component keep the content of hidden tabs in the DOM?**

    No. The Angular Tabs component adds the content of the selected tab item to the DOM and removes the content of the other tab items from it. Code that queries the DOM, such as `document.querySelector`, finds only the content of the selected tab item.
  
  **Q: Should I use the Tabs for a checkout or another step-by-step process?**

    No. The Angular Tabs component organizes related information that users can open in any order, and it doesn't communicate an order of steps. Use the Angular Stepper for a sequential process, such as a checkout or a configuration wizard.
  
  **Q: How do I create vertical tabs?**

    Set the `headerPosition` property of the Angular Tabs to `start` or `end` to show the tab headers in a column before or after the content. Give the Angular Tabs a height to keep its size fixed.
  


---
title: Material Icons Extended - Superset of material icons | MIT license
description: Ignite UI for Angular extends the material icons set to provide the designers and developers a wide range of icons to choose from. 
keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Icon components, Angular Icon controls, Material icons extended
license: MIT
llms:
  description: "The Ignite UI Material Icons Extended is a subset of icons that extends the material icon set by Google."
_tocName: Material Icons Extended
---
# Material Icons Extended

<div class="highlight">
The Ignite UI Material Icons Extended is a subset of icons that extends the material icon set by Google.
</div>

```typescript
/* eslint-disable @typescript-eslint/member-ordering */
import {
  Component,
  OnInit,
  Pipe,
  PipeTransform,
  Renderer2,
  forwardRef,
  inject,
  ChangeDetectionStrategy
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import fileSaver from 'file-saver';
import Fuse from 'fuse.js';
import { Subject, combineLatest, BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';

import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { ISelectionEventArgs } from 'igniteui-angular/drop-down';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import {
    IgxInputDirective,
    IgxInputGroupComponent,
    IgxLabelDirective,
    IgxPrefixDirective,
    IgxSuffixDirective
} from 'igniteui-angular/input-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';

import {
    all as imxIcons,
    IconCategory,
    IMXIcon
} from '@igniteui/material-icons-extended';

interface ICategoryOption {
    text: string;
    category?: IconCategory | 'all';
}

@Component({
    selector: 'app-material-icons-extended',
    templateUrl: './material-icons-extended.component.html',
    styleUrls: ['./material-icons-extended.component.scss'],
    imports: [
        AsyncPipe,
        IgxSelectComponent,
        IgxLabelDirective,
        IgxSelectItemComponent,
        IgxInputGroupComponent,
        IgxInputDirective,
        IgxPrefixDirective,
        IgxIconComponent,
        IgxSuffixDirective,
        IgxButtonDirective,
        forwardRef(() => CategoriesFilterPipe), forwardRef(() => FilterByName)
    ]
})
export class MaterialIconsExtendedComponent implements OnInit {
    private iconService = inject(IgxIconService);
    private renderer = inject(Renderer2);

    // Search with debounce
    private searchInput$ = new Subject<string>();
    private categorySubject$ = new BehaviorSubject<IconCategory | 'all'>('all');

    private searchTerm$ = this.searchInput$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        startWith('')
    );

    // Combine search and category filters
    public filteredResults$: Observable<IIconsGroup[]> = combineLatest([
        this.searchTerm$,
        this.categorySubject$
    ]).pipe(
        map(([searchTerm, category]) => {
            const filterByNamePipe = new FilterByName();
            const categoriesPipe = new CategoriesFilterPipe();

            const filtered = filterByNamePipe.transform(this.allIcons, searchTerm);
            return categoriesPipe.transform(filtered, category);
        })
    );

    public categories: ICategoryOption[] = [
        {
            text: 'All',
            category: 'all'
        }
    ];

    onSearchInput(value: string) {
        this.searchInput$.next(value);
    }

    clearSearch() {
        this.searchInput$.next('');
    }

    public setCategories() {
        const categories = IconCategory.values().map(
            (category) =>
            ({
                text: category
                    .split(' ')
                    .map((w) => w.replace(/^\w/, (c) => c.toUpperCase()))
                    .join(' '),
                category
            } as ICategoryOption)
        );

        this.categories = [...this.categories, ...categories];
    }

    public allIcons = imxIcons;
    public selectedCategory: IconCategory | 'all' = 'all';

    // Floating download button
    public hoveredIcon: IMXIcon | null = null;

    onIconMouseEnter(icon: IMXIcon) {
        this.hoveredIcon = icon;
    }

    onIconMouseLeave() {
        this.hoveredIcon = null;
    }

    handleSelection(event: ISelectionEventArgs) {
        this.selectedCategory = event.newSelection.value;
        this.categorySubject$.next(event.newSelection.value);
    }

    resetFilter() {
        this.selectedCategory = 'all';
        this.categorySubject$.next('all');
    }

    trackByIcon(_index: number, icon: IMXIcon): string {
        return icon.name;
    }

    trackByCategory(_index: number, group: IIconsGroup): string {
        return group.category;
    }

    addIcons() {
        for (const icon of imxIcons) {
            this.iconService.addSvgIconFromText(
                icon.name,
                icon.value,
                'imx-icons'
            );
        }
    }

    downloadFile(icon: IMXIcon) {
        const blob: any = new Blob([icon.value], { type: 'image/svg+xml' });
        fileSaver.saveAs(blob, icon.name);
    }

    async copyValue(event: Event, val: string) {
        const target = event.currentTarget as HTMLButtonElement;
        const element = target.childNodes[0] as HTMLElement;

        try {
            await navigator.clipboard.writeText(val);

            if (element.innerText !== 'done') {
                this.renderer.setProperty(element, 'innerText', 'done');
                this.renderer.addClass(
                    target,
                    'sample__grid-item-clipboard--success'
                );

                setTimeout(() => {
                    this.renderer.setProperty(element, 'innerText', 'content_copy');
                    this.renderer.removeClass(
                        target,
                        'sample__grid-item-clipboard--success'
                    );
                }, 1500);
            }
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }

    ngOnInit() {
        this.setCategories();
        this.addIcons();
    }
}

interface IIconsGroup {
    category: string;
    icons: IMXIcon[];
}

@Pipe({
    name: 'categoriesFilter',
    pure: true
})
export class CategoriesFilterPipe implements PipeTransform {
    sortIcons(acc: IIconsGroup[], icon: IMXIcon): IIconsGroup[] {
        for (const category of icon.categories) {
            const index = acc.findIndex((group) => group.category === category);

            if (index !== -1) {
                const exists = acc[index].icons.some(existingIcon => existingIcon.name === icon.name);

                if (!exists) {
                    acc[index].icons.push(icon);
                }
            } else {
                acc.push({
                    category,
                    icons: [icon]
                });
            }
        }
        return acc;
    }

    transform(icons: IMXIcon[], category: IconCategory | 'all'): IIconsGroup[] {
        if (category === 'all') {
            return icons.reduce(this.sortIcons, []);
        } else {
            return icons
                .filter((icon) => {
                    const index = icon.categories.indexOf(
                        category as IconCategory
                    );

                    if (index !== -1) {
                        return category as IconCategory;
                    }
                })
                .reduce(this.sortIcons, []);
        }
    }
}

@Pipe({
    name: 'filterByName',
    pure: true
})
export class FilterByName implements PipeTransform {
    private fuse: Fuse<IMXIcon> | null = null;
    private lastCollection: IMXIcon[] = [];

    transform(icons: IMXIcon[], keyword: string): IMXIcon[] {
        if (!keyword || keyword.trim() === '') {
            return icons;
        }

        // Initialize Fuse only if collection changed
        if (this.lastCollection !== icons) {
            this.fuse = new Fuse(icons, {
                keys: [
                    { name: 'name', weight: 0.7 },
                    { name: 'keywords', weight: 0.3 }
                ],
                threshold: 0.3,
                distance: 100,
                ignoreLocation: true,
                minMatchCharLength: 1
            });
            this.lastCollection = icons;
        }

        const results = this.fuse!.search(keyword.toLowerCase());
        return results.map(result => result.item);
    }
}
```
```html
<div class="sample">
  <div class="sample__header">
    <div class="sample__header-title">
      <igx-select
        (selectionChanging)="handleSelection($event)"
        type="box"
        [value]="selectedCategory"
        >
        <label igxLabel>Select category</label>
        @for (option of categories; track option.category) {
          <igx-select-item
            [value]="option.category"
            >
            {{ option.text }}
          </igx-select-item>
        }
      </igx-select>
    </div>
    <igx-input-group class="sample__header-search" type="search">
      <input #input igxInput placeholder="Search by icon name or keyword" (input)="onSearchInput(input.value)" />
      <igx-prefix>
        <igx-icon>search</igx-icon>
      </igx-prefix>
      @if (input.value.length > 0) {
        <igx-suffix
          (click)="input.value = ''; clearSearch()"
          >
          <igx-icon>clear</igx-icon>
        </igx-suffix>
      }
    </igx-input-group>
  </div>
  <div class="sample__body">
    @if (filteredResults$ | async; as fResults) {
      @for (group of fResults; track trackByCategory($index, group)) {
        <article class="sample__body-inner">
          <header class="sample__body-title">
            {{ group.category }}
          </header>
          <section class="sample__body-section">
            <div class="sample__grid">
              @for (icon of group.icons; track trackByIcon($index, icon)) {
                <div
                  class="sample__grid-item"
                  (mouseenter)="onIconMouseEnter(icon)"
                  (mouseleave)="onIconMouseLeave()"
                  >
                  <button
                    [value]="icon.name"
                    [title]="'Copy &quot;' + icon.name + '&quot; to clipboard'"
                    (click)="copyValue($event, icon.name)"
                    class="sample__grid-item-clipboard"
                    >
                    <igx-icon>content_copy</igx-icon>
                  </button>
                  <div class="sample__grid-item-content">
                    <igx-icon
                      class="sample__grid-icon"
                      family="imx-icons"
                      [name]="icon.name">
                    </igx-icon>
                    <span
                      class="sample__grid-icon-name"
                      [title]="icon.name">
                      {{ icon.name }}
                    </span>
                  </div>
                  @if (hoveredIcon === icon) {
                    <button
                      (click)="downloadFile(icon)"
                      class="sample__grid-item-download"
                      igxButton="contained"
                      igxRipple>
                      <igx-icon>arrow_downward</igx-icon>
                      <span>SVG</span>
                    </button>
                  }
                </div>
              }
              </div>
            </section>
          </article>
        }
        <div class="sample__body-empty">
          <span>
            No results
            {{selectedCategory !== 'all' && fResults.length !== -1 ? ' in category: ' : 'found' }}
            @if (selectedCategory !== 'all' && fResults.length !== -1) {
              <strong>{{ selectedCategory }}</strong>
            }
          </span>
          @if (selectedCategory !== 'all' && fResults.length !== -1) {
            <button igxButton (click)="resetFilter()">
              Reset the category filter
            </button>
          }
        </div>
      }
    </div>
  </div>
```
```scss
@use '../../../../variables' as *;

$sample-width: rem(850px);
$sample-height: rem(700px);
$sample-padding: rem(16px);
$sample-body-padding: rem(16px);
$sample-header-margin: rem(24px);
$sample-header-height: rem(50px);
$sample-header-height-m: rem(50px) + $sample-header-margin;
$sample-body-max-height: calc(100% - #{$sample-header-height-m});
$grid-icon-size: rem(32px);
$grid-padding: rem(24px);
$grid-item-width: rem(104px);
$grid-item-height: rem(120px);
$grid-item-padding: rem(8px);
$grid-item-margin: $grid-item-padding;
$grid-body-section-padding: $grid-padding;
$grid-item-border-width: rem(2px);

$clipboardSuccessColor: color($color: 'success');

%icon-size {
  width: $grid-icon-size;
  height: $grid-icon-size;
  font-size: $grid-icon-size;
}

%flex-row-center-center {
  display: flex;
  align-content: center;
  justify-content: center;
}

@include b(sample) {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  height: $sample-height;
  margin: 0 auto;
  padding: $sample-padding;

  @include e(header) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $sample-header-margin;
    width: 100%;
    height: $sample-header-height;
  }

  @include e(header-title) {
    display: flex;
    align-items: center;
  }
  @include e(header-search) {
    max-width: rem(300px);
    width: 100%;
    margin-left: rem(8px);
  }

  @include e(body) {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: $sample-body-max-height;
    width: 100%;
    padding: 0 0 $sample-body-padding 0;
    box-shadow:
            0 rem(1px) rem(5px) 0 rgba(0,0,0, .26),
            0 rem(1px) rem(2px) 0 rgba(0,0,0, .12);

    &-inner + &-empty {
      display: none;
    }
  }

  @include e(body-empty) {
   @extend %flex-row-center-center;
    flex-direction: column;
    text-align: center;
    padding: $grid-padding $grid-padding 0 $grid-padding;

    strong {
      text-transform: capitalize;
    }

    button {
      align-self: center;
      margin-top: rem(8px);

      igx-icon {
        margin-right: rem(4px);
      }
    }
  }

  @include e(body-section) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 $grid-body-section-padding $grid-body-section-padding $grid-body-section-padding;

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      min-height: 100%;
    }
  }

  @include e(body-title) {
    display: flex;
    align-items: center;
    border-bottom: rem(1px) solid #ddd;
    margin: rem(16px) rem(16px) (rem(16px) + $grid-item-padding) rem(16px);
    min-height: rem(37px);
    text-transform: capitalize;
    font-size: rem(16px);
    line-height: rem(24px);
  }

  @include e(grid) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax($grid-item-width, 1fr));
    grid-auto-rows: $grid-item-height;
    grid-column-gap: $grid-item-margin;
    grid-row-gap: $grid-item-margin * 2;

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin: 0 -#{$grid-item-padding};
      min-height: 100%;
    }
  }

  @include e(grid-item-content)  {
    @extend %flex-row-center-center;
    flex-direction: column;

    > igx-icon {
      @extend %icon-size;
      align-self: center;
      margin-bottom: rem(4px);
    }
  }

  @include e(grid-item) {
    @extend %flex-row-center-center;
    flex-direction: column;
    padding: $grid-item-padding;
    position: relative;
    border: $grid-item-border-width solid transparent;
    contain: layout;

    &:hover,
    &:focus {
      border-color: color($color: 'secondary');
      outline-color: transparent;
      outline-width: 0;

      .sample__grid-item-download,
      .sample__grid-item-clipboard{
        opacity: 1;
        pointer-events: auto;
      }

      .sample__grid-item-download  {
        opacity: 1;
        pointer-events: auto;
      }
    }
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      $grid-item-padding-IE: private-div($grid-item-padding, 2);
      flex: 1;
      min-width: $grid-item-width + ($grid-item-padding * 2);
      min-height: $grid-item-height;
      margin: 0 $grid-item-padding-IE $grid-item-padding $grid-item-padding-IE;
    }
  }

  @include e(grid-item-download) {
    pointer-events: none;
    display: flex;
    width: rem(100px);
    max-width: 90%;
    max-height: rem(36px);
    position: absolute;
    bottom: -#{rem(16px) + $grid-item-border-width};
    left: 0;
    right: 0;
    margin: 0 auto;
    opacity: 0;
    text-decoration: none;

    igx-icon {
      margin-right: rem(4px);
    }

    &:hover,
    &:focus {
      pointer-events: auto;
      visibility: visible;
      opacity: 1;
    }
  }

  @include e(grid-item-clipboard) {
    @extend %flex-row-center-center;
    border-radius: 50%;
    background: color($color: 'surface');
    box-shadow: none;
    border: none;
    padding: rem(4px);
    cursor: pointer;
    pointer-events: none;
    max-width: rem(32px);
    max-height: rem(32px);
    position: absolute;
    right: rem(8px);
    top: rem(8px);
    opacity: 0;
    transition: all 250ms ease-in-out;

    igx-icon {
      width: rem(16px);
      height: rem(16px);
      font-size: rem(16px);
    }

    &:focus {
      outline-color: transparent;
      outline-width: 0;
    }

    &:hover,
    &:focus {
      pointer-events: auto;
      visibility: visible;
      opacity: 1;
      color: color($color: 'secondary');
    }
  }

  @include e(grid-item-clipboard, $m: success) {
    background: $clipboardSuccessColor;
    color: contrast-color($color: 'success') !important;
  }

  @include e(grid-icon-name) {
    display: block;
    width: 100%;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
```
<div style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></div>
<hr/>

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

<hr/>

[`IgxIconService`](mcp:get_api_reference?platform=angular&component=IgxIconService)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

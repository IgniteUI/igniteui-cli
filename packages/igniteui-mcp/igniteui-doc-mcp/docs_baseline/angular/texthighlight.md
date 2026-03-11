---
title: Angular Text Highlight Directive | Ignite UI for Angular | MIT license
_description: The Ignite UI for Angular TextHighlight directive can be used to highlight parts of text and have an active highlight on one of them.
_keywords: Angular TextHighlight Directive, Angular Text Highlight Directive, IgxTextHighlight Directive, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Components, Angular UI Components, Native Angular Components Library
_license: MIT
_tocName: Text Highlight
---

# Angular Text Highlight Directive Overview

The [`IgxTextHighlightDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtexthighlightdirective.html) and `IgxTextHighlightService` in Ignite UI for Angular are used to highlight parts of a text, providing options for case sensitive searches and to highlight only exact matches. They allow the developer to keep an active highlight, which can be any of the already highlighted parts.

## Angular Text Highlight Directive Example

```typescript
/* eslint-disable max-len */
import { Component, OnDestroy, ViewChild, inject } from '@angular/core';
import { IgxIconButtonDirective, IgxRippleDirective, IgxTextHighlightDirective, IgxTextHighlightService } from 'igniteui-angular/directives';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-text-highlight-1',
    styleUrls: ['./text-highlight-sample-1.component.scss'],
    templateUrl: './text-highlight-sample-1.component.html',
    imports: [IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, FormsModule, IgxInputDirective, IgxSuffixDirective, IgxIconButtonDirective, IgxRippleDirective, IgxTextHighlightDirective]
})
export class TextHighlightSample1Component implements OnDestroy {
    private highlightService = inject(IgxTextHighlightService);

    @ViewChild(IgxTextHighlightDirective, { read: IgxTextHighlightDirective, static: true })
    public highlight: IgxTextHighlightDirective;
    // tslint:disable max-line-length
    public html = `
    Use the search box to search for a certain string in this text.
    All the results will be highlighted in the same color with the exception of the
    the first occurrence of the string, which will have a different color in order to tell it apart.
    You can use the button in the searchbox to specify if the search will be case sensitive.
    You can move the active highlight by either pressing the buttons on the searchbox or by using the Enter or the arrow keys on your keyboard.
    `;
    // tslint:enable max-line-length


    public searchText = '';
    public matchCount = 0;
    public caseSensitive = false;
    public index = 0;

    public ngOnDestroy() {
        this.highlightService.destroyGroup('group1');
    }

    public searchKeyDown(ev) {
        if (this.searchText) {
            if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
                ev.preventDefault();
                this.findNext();
            } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
                ev.preventDefault();
                this.findPrev();
            }
        }
    }

    public onTextboxChange() {
        this.index = 0;
        this.find(0);
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.find(0);
    }

    public clearSearch() {
        this.searchText = '';
        this.find(0);
    }

    public get canMoveHighlight() {
        return this.matchCount > 1;
    }

    public findNext() {
        this.find(1);
    }

    public findPrev() {
        this.find(-1);
    }

    private find(increment: number) {
        if (this.searchText) {
            this.matchCount = this.highlight.highlight(this.searchText, this.caseSensitive);
            this.index += increment;

            this.index = this.index < 0 ? this.matchCount - 1 : this.index;
            this.index = this.index > this.matchCount - 1 ? 0 : this.index;

            if (this.matchCount) {
                this.highlightService.setActiveHighlight('group1', {
                    index: this.index
                });
            }
        } else {
            this.highlight.clearHighlight();
        }
    }
}
```
```html
<igx-input-group type="search" class="input-group">
  <igx-prefix>
    @if (searchText.length === 0) {
      <igx-icon>search</igx-icon>
    }
    @if (searchText.length > 0) {
      <igx-icon (click)="clearSearch()">clear</igx-icon>
    }
  </igx-prefix>

  <input #search1 id="search1" igxInput placeholder="Search" autocomplete="off" [(ngModel)]="searchText" (ngModelChange)="onTextboxChange()"
    (keydown)="searchKeyDown($event)" />

    <igx-suffix>
      <div class="caseSensitiveButton">
        <button type="button" igxIconButton="flat" igxRipple [igxRippleCentered]="true" (click)="updateSearch()"
          [style.background]="caseSensitive ? 'rgb(73, 180, 254)' : 'transparent'" title="Match case">
          <igx-icon class="caseSensitiveIcon" family="material">text_fields</igx-icon>
        </button>
      </div>
      @if (searchText.length > 0) {
        <span>
          @if (matchCount > 0) {
            {{ index + 1 }} of {{ matchCount }} results
          }
          @if (matchCount === 0) {
            No results
          }
        </span>
        <div class="searchButtons">
          <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" (click)="findPrev()" [disabled]="!canMoveHighlight">
            <igx-icon family="material">navigate_before</igx-icon>
          </button>
          <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" (click)="findNext()" [disabled]="!canMoveHighlight">
            <igx-icon family="material">navigate_next</igx-icon>
          </button>
        </div>
      }
    </igx-suffix>
  </igx-input-group>
  <div igxTextHighlight
    [value]="html"
    [groupName]="'group1'"
    [containerClass]="'sample-text-container'"
    class="sample-text-container">
    {{html}}
  </div>
```
```scss
:host {
    display: block;
    padding: 4px;
}

.caseSensitiveIcon {
    width: 1rem;
    height: 1rem;
    font-size: 1rem;
}

.caseSensitiveButton + span {
    margin-left: 8px;
}

.searchButtons {
    margin-left: 8px;
}

.sample-text-container {
    margin-top: 16px;
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Text Highlight Directive

To get started with the Ignite UI for Angular Text Highlight directive, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxTextHighlightModule` in your **app.module.ts** file.

```typescript
// app.module.ts
...
import { IgxTextHighlightModule } from 'igniteui-angular/directives';
// import { IgxTextHighlightModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [IgxTextHighlightModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxTextHighlightDirective` as a standalone dependency.

```typescript
// home.component.ts

import { IgxTextHighlightDirective, IgxTextHighlightService } from 'igniteui-angular/directives';
// import { IgxTextHighlightDirective, IgxTextHighlightService } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: `
    <div
      igxTextHighlight
      [value]="html"
      [groupName]="'group1'"
      [containerClass]="'search-text'"
      class="search-text"
    >
      {{ html }}
    </div>
  `,
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IgxTextHighlightDirective],
})
export class HomeComponent {
  constructor(public textHighlightService: IgxTextHighlightService) {}
}
```

Now that you have the Ignite UI for Angular Text Highlight module or directive imported, you can start using the `igxTextHighlight`.

## Using the Angular Text Highlight Directive

Let's create a search box that we can use to highlight different parts of the text. We will use Ignite UI for Angular's [InputGroup](input-group.md) component in which we will add a text input with buttons for clear matches, find next, find previous, and a button for specifying whether the search will be case-sensitive or not. Also it has a label for how many matches we have found.

```html
<div class="search-container">
  <igx-input-group type="search" class="input-group">
    <igx-prefix>
      <igx-icon *ngIf="searchText.length == 0">search</igx-icon>
      <igx-icon *ngIf="searchText.length > 0" (click)="clearSearch()"
        >clear</igx-icon
      >
    </igx-prefix>

    <input
      #search1
      id="search1"
      igxInput
      placeholder="Search"
      autocomplete="off"
      [(ngModel)]="searchText"
      (ngModelChange)="onTextboxChange()"
      (keydown)="searchKeyDown($event)"/>
    <igx-suffix>
      <div class="caseSensitiveButton">
        <button
          igxIconButton="flat"
          igxRipple
          igxRippleCentered="true"
          (click)="updateSearch()"
          [style.background]="caseSensitive ? 'rgb(73, 180, 254)' : 'transparent'">
          <igx-icon class="caseSensitiveIcon" fontSet="material">text_fields</igx-icon>
        </button>
      </div>
      <ng-container *ngIf="searchText.length > 0">
        <span>
          <ng-container *ngIf="matchCount > 0">
            {{ index + 1 }} of {{ matchCount }} results
          </ng-container>
          <ng-container *ngIf="matchCount == 0"> No results </ng-container>
        </span>
      </ng-container>

      <div class="searchButtons">
        <button
          igxIconButton="flat"
          igxRipple
          igxRippleCentered="true"
          (click)="findPrev()"
          [disabled]="!canMoveHighlight">
          <igx-icon fontSet="material">navigate_before</igx-icon>
        </button>
        <button
          igIconButton="flat"
          igxRipple
          igxRippleCentered="true"
          (click)="findNext()"
          [disabled]="!canMoveHighlight">
          <igx-icon fontSet="material">navigate_next</igx-icon>
        </button>
      </div>
    </igx-suffix>
  </igx-input-group>
</div>
```

Then, we will add a div with text and the IgxTextHighlight directive. Note that, since we need to bind the value input to the text in the div, we will also use interpolation for the div's text.

```html
<div
  igxTextHighlight
  [value]="html"
  [groupName]="'group1'"
  [containerClass]="'search-text'"
  class="search-text">
   {{html}}
</div>
```

In the .ts file of our component first we need to add the following fields, that are used for bindings in our component's template:

```typescript
@Component({
    ...
})
export class HomeComponent {
    public html = '...';

    @ViewChild(IgxTextHighlightDirective, {read: IgxTextHighlightDirective})
    public highlight: IgxTextHighlightDirective;

    public searchText: string = '';
    public matchCount: number = 0;
    public caseSensitive: boolean = false;
    public index: number = 0;

    public get canMoveHighlight() {
        return this.matchCount > 1;
    }
}
```

Then we need to add the following methods which will allow the user to apply the highlights for the text they have typed in the search box and to move the active highlight around.

```typescript
@Component({
    ...
})
export class HomeComponent {
    constructor(public textHighlightService: IgxTextHighlightService) {}

    public searchKeyDown(ev) {
        if (this.searchText) {
            if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
                ev.preventDefault();
                this.findNext();
            } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
                ev.preventDefault();
                this.findPrev();
            }
        }
    }

    public onTextboxChange() {
        this.index = 0;
        this.find(0);
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.find(0);
    }

    public clearSearch() {
        this.searchText = '';
        this.find(0);
    }

    private findNext() {
        this.find(1);
    }

    private findPrev() {
        this.find(-1);
    }

    private find(increment: number) {
        if (this.searchText) {
            this.matchCount = this.highlight.highlight(this.searchText, this.caseSensitive);
            this.index += increment;

            this.index = this.index < 0 ? this.matchCount - 1 : this.index;
            this.index = this.index > this.matchCount - 1 ? 0 : this.index;

            if (this.matchCount) {
                this.textHighlightService.setActiveHighlight('group1', {
                    columnIndex: 0,
                    index: this.index,
                    page: 0,
                    rowIndex: 0
                });
            }
        } else {
            this.highlight.clearHighlight();
        }
    }
}
```

If the sample is configured properly, the final result should look like that:

```typescript
/* eslint-disable max-len */
import { Component, OnDestroy, ViewChild, inject } from '@angular/core';
import { IgxIconButtonDirective, IgxRippleDirective, IgxTextHighlightDirective, IgxTextHighlightService } from 'igniteui-angular/directives';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-text-highlight-1',
    styleUrls: ['./text-highlight-sample-1.component.scss'],
    templateUrl: './text-highlight-sample-1.component.html',
    imports: [IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, FormsModule, IgxInputDirective, IgxSuffixDirective, IgxIconButtonDirective, IgxRippleDirective, IgxTextHighlightDirective]
})
export class TextHighlightSample1Component implements OnDestroy {
    private highlightService = inject(IgxTextHighlightService);

    @ViewChild(IgxTextHighlightDirective, { read: IgxTextHighlightDirective, static: true })
    public highlight: IgxTextHighlightDirective;
    // tslint:disable max-line-length
    public html = `
    Use the search box to search for a certain string in this text.
    All the results will be highlighted in the same color with the exception of the
    the first occurrence of the string, which will have a different color in order to tell it apart.
    You can use the button in the searchbox to specify if the search will be case sensitive.
    You can move the active highlight by either pressing the buttons on the searchbox or by using the Enter or the arrow keys on your keyboard.
    `;
    // tslint:enable max-line-length


    public searchText = '';
    public matchCount = 0;
    public caseSensitive = false;
    public index = 0;

    public ngOnDestroy() {
        this.highlightService.destroyGroup('group1');
    }

    public searchKeyDown(ev) {
        if (this.searchText) {
            if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
                ev.preventDefault();
                this.findNext();
            } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
                ev.preventDefault();
                this.findPrev();
            }
        }
    }

    public onTextboxChange() {
        this.index = 0;
        this.find(0);
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.find(0);
    }

    public clearSearch() {
        this.searchText = '';
        this.find(0);
    }

    public get canMoveHighlight() {
        return this.matchCount > 1;
    }

    public findNext() {
        this.find(1);
    }

    public findPrev() {
        this.find(-1);
    }

    private find(increment: number) {
        if (this.searchText) {
            this.matchCount = this.highlight.highlight(this.searchText, this.caseSensitive);
            this.index += increment;

            this.index = this.index < 0 ? this.matchCount - 1 : this.index;
            this.index = this.index > this.matchCount - 1 ? 0 : this.index;

            if (this.matchCount) {
                this.highlightService.setActiveHighlight('group1', {
                    index: this.index
                });
            }
        } else {
            this.highlight.clearHighlight();
        }
    }
}
```
```html
<igx-input-group type="search" class="input-group">
  <igx-prefix>
    @if (searchText.length === 0) {
      <igx-icon>search</igx-icon>
    }
    @if (searchText.length > 0) {
      <igx-icon (click)="clearSearch()">clear</igx-icon>
    }
  </igx-prefix>

  <input #search1 id="search1" igxInput placeholder="Search" autocomplete="off" [(ngModel)]="searchText" (ngModelChange)="onTextboxChange()"
    (keydown)="searchKeyDown($event)" />

    <igx-suffix>
      <div class="caseSensitiveButton">
        <button type="button" igxIconButton="flat" igxRipple [igxRippleCentered]="true" (click)="updateSearch()"
          [style.background]="caseSensitive ? 'rgb(73, 180, 254)' : 'transparent'" title="Match case">
          <igx-icon class="caseSensitiveIcon" family="material">text_fields</igx-icon>
        </button>
      </div>
      @if (searchText.length > 0) {
        <span>
          @if (matchCount > 0) {
            {{ index + 1 }} of {{ matchCount }} results
          }
          @if (matchCount === 0) {
            No results
          }
        </span>
        <div class="searchButtons">
          <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" (click)="findPrev()" [disabled]="!canMoveHighlight">
            <igx-icon family="material">navigate_before</igx-icon>
          </button>
          <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" (click)="findNext()" [disabled]="!canMoveHighlight">
            <igx-icon family="material">navigate_next</igx-icon>
          </button>
        </div>
      }
    </igx-suffix>
  </igx-input-group>
  <div igxTextHighlight
    [value]="html"
    [groupName]="'group1'"
    [containerClass]="'sample-text-container'"
    class="sample-text-container">
    {{html}}
  </div>
```
```scss
:host {
    display: block;
    padding: 4px;
}

.caseSensitiveIcon {
    width: 1rem;
    height: 1rem;
    font-size: 1rem;
}

.caseSensitiveButton + span {
    margin-left: 8px;
}

.searchButtons {
    margin-left: 8px;
}

.sample-text-container {
    margin-top: 16px;
}
```

<div class="divider"></div>

## Search across multiple elements

The [`igxTextHighlight`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtexthighlightdirective.html) allows you to search across multiple elements which all share one active highlight. This is done by having the same [`groupName`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtexthighlightdirective.html#groupName) value across multiple TextHighlight directives. In order to setup the sample we will reuse the search box from the previous sample, but this time we will add two div elements. The [`column`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtexthighlightdirective.html#column) and [`row`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtexthighlightdirective.html#row) inputs are useful when you have multiple elements and in our case the second div has a different row value.

```html
<div
  igxTextHighlight
  [groupName]="'group1'"
  [row]="0"
  [containerClass]="'search-text'"
  [value]="firstParagraph"
  class="search-text">
   {{firstParagraph}}
</div>
<div
  igxTextHighlight
  [groupName]="'group1'"
  [row]="1"
  [containerClass]="'search-text'"
  [value]="secondParagraph"
  class="search-text">
   {{secondParagraph}}
</div>
```

In the .ts file we have the `firstParagraph` and `secondParagraph` fields, which are bound to the respective value inputs of the text highlight directives. Also, we will now use ViewChildren instead of ViewChild to get all the highlights in our template.

```typescript
public firstParagraph = "...";

public secondParagraph = "...";

@ViewChildren(IgxTextHighlightDirective)
public highlights;
```

All the rest of the code in the .ts file is identical to the single element example with the exception of the find method. Changes to this method are necessary since we now have multiple elements, but the code there can be used regardless of the number of TextHighlight directives you have on your page.

```typescript
@Component({
    ...
})
export class HomeComponent {
    constructor(public textHighlightService: IgxTextHighlightService) {}

    private find(increment: number) {
        if (this.searchText) {
            let count = 0;
            const matchesArray = [];

            this.highlights.forEach((h) => {
                count += h.highlight(this.searchText, this.caseSensitive);
                matchesArray.push(count);
            });

            this.matchCount = count;

            this.index += increment;
            this.index = this.index < 0 ? this.matchCount - 1 : this.index;
            this.index = this.index > this.matchCount - 1 ? 0 : this.index;

            if (this.matchCount) {
                let row;

                for (let i = 0; i < matchesArray.length; i++) {
                    if (this.index < matchesArray[i]) {
                        row = i;
                        break;
                    }
                }

                const actualIndex = row === 0 ? this.index : this.index - matchesArray[row - 1];

                this.textHighlightService.setActiveHighlight('group1', {
                    index: actualIndex,
                    rowIndex: row
                });
            }
        } else {
            this.highlights.forEach((h) => {
                h.clearHighlight();
            });
            this.matchCount = 0;
        }
    }
}
```

```typescript
/* eslint-disable max-len */
import { Component, OnDestroy, ViewChildren, inject } from '@angular/core';
import { IgxIconButtonDirective, IgxRippleDirective, IgxTextHighlightDirective, IgxTextHighlightService } from 'igniteui-angular/directives';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-text-highlight-2',
    styleUrls: ['./text-highlight-sample-2.component.scss'],
    templateUrl: './text-highlight-sample-2.component.html',
    imports: [IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, FormsModule, IgxInputDirective, IgxSuffixDirective, IgxIconButtonDirective, IgxRippleDirective, IgxTextHighlightDirective]
})
export class TextHighlightSample2Component implements OnDestroy {
    private highlightService = inject(IgxTextHighlightService);

    @ViewChildren(IgxTextHighlightDirective)
    public highlights;
    // tslint:disable max-line-length
    public firstParagraph = `
    Use the search box to search for a certain string in this text.
    All the results will be highlighted in the same color with the exception of the
    the first occurrence of the string, which will have a different color in order to tell it apart.
    You can use the button in the searchbox to specify if the search will be case sensitive.
    You can move the active highlight by either pressing the buttons on the searchbox or by using the Enter or the arrow keys on your keyboard.
    `;

    public secondParagraph = `
    On top of the functionality from the previous sample, this sample demonstrates how to implement the text highlight directive
    with several different elements. In this case, we have two div elements, each containing some text. You can see that
    they share the same active highlight and the returned match count includes both elements. The find method in this
    sample can be reused regardless of the number of elements you have in your application.
    `;


    public searchText = '';
    public matchCount = 0;
    public caseSensitive = false;
    public index = 0;

    public ngOnDestroy() {
        this.highlightService.destroyGroup('group1');
    }

    public searchKeyDown(ev) {
        if (this.searchText) {
            if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
                ev.preventDefault();
                this.findNext();
            } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
                ev.preventDefault();
                this.findPrev();
            }
        }
    }

    public onTextboxChange() {
        this.index = 0;
        this.find(0);
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.find(0);
    }

    public clearSearch() {
        this.searchText = '';
        this.find(0);
    }

    public get canMoveHighlight() {
        return this.matchCount > 1;
    }

    public findNext() {
        this.find(1);
    }

    public findPrev() {
        this.find(-1);
    }

    private find(increment: number) {
        if (this.searchText) {
            let count = 0;
            const matchesArray = [];
            this.highlights.forEach((h) => {
                count += h.highlight(this.searchText, this.caseSensitive);
                matchesArray.push(count);
            });

            this.matchCount = count;

            this.index += increment;
            this.index = this.index < 0 ? this.matchCount - 1 : this.index;
            this.index = this.index > this.matchCount - 1 ? 0 : this.index;

            if (this.matchCount) {
                let row;

                for (let i = 0; i < matchesArray.length; i++) {
                    if (this.index < matchesArray[i]) {
                        row = i;
                        break;
                    }
                }

                const actualIndex = row === 0 ? this.index : this.index - matchesArray[row - 1];

                this.highlightService.setActiveHighlight('group1', { index: actualIndex, row });
            }
        } else {
            this.highlights.forEach((h) => {
                h.clearHighlight();
            });
            this.matchCount = 0;
        }
    }
}
```
```html
<div class="search-container">
  <igx-input-group type="search" class="input-group">

    <igx-prefix>
      @if (searchText.length === 0) {
        <igx-icon>search</igx-icon>
      }
      @if (searchText.length > 0) {
        <igx-icon (click)="clearSearch()">clear</igx-icon>
      }
    </igx-prefix>

    <input #search1 id="search1" igxInput placeholder="Search" autocomplete="off" [(ngModel)]="searchText" (ngModelChange)="onTextboxChange()"
      (keydown)="searchKeyDown($event)" />

      <igx-suffix>
        <div class="caseSensitiveButton">
          <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" (click)="updateSearch()"
            [style.background]="caseSensitive ? 'rgb(73, 180, 254)' : 'transparent'">
            <igx-icon class="caseSensitiveIcon" family="material">text_fields</igx-icon>
          </button>
        </div>
        @if (searchText.length > 0) {
          <span>
            @if (matchCount > 0) {
              {{ index + 1 }} of {{ matchCount }} results
            }
            @if (matchCount === 0) {
              No results
            }
          </span>
        }
        <div class="searchButtons">
          <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" (click)="findPrev()" [disabled]="!canMoveHighlight">
            <igx-icon family="material">navigate_before</igx-icon>
          </button>
          <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" (click)="findNext()" [disabled]="!canMoveHighlight">
            <igx-icon family="material">navigate_next</igx-icon>
          </button>
        </div>
      </igx-suffix>
    </igx-input-group>
  </div>
  <div igxTextHighlight
    [groupName]="'group1'"
    [row]="0"
    [value]="firstParagraph"
    [containerClass]="'sample-text-container'"
    class="sample-text-container">
    {{firstParagraph}}
  </div>
  <div igxTextHighlight
    [groupName]="'group1'"
    [row]="1"
    [value]="secondParagraph"
    [containerClass]="'sample-text-container'"
    class="sample-text-container">
    {{secondParagraph}}
  </div>
```
```scss
:host {
    display: block;
    padding: 4px;
}

.caseSensitiveIcon {
    width: 1rem;
    height: 1rem;
    font-size: 1rem;
}

.caseSensitiveButton + span {
    margin-left: 8px;
}

.searchButtons {
    margin-left: 8px;
}

.sample-text-container {
    margin-top: 16px;
}
```

<div class="divider"></div>

## Styles

The [`IgxTextHighlight`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtexthighlightdirective.html) directive can be styled in terms of changing the color and the background of all occurrences of the given string. To get started, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`highlight-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-highlight-theme) and accepts the `$resting-background`, `$resting-color`, `$active-background` and the `$active-color` parameters.

```scss
$dark-highlight: highlight-theme(
  $resting-background: #ffcd0f,
  $resting-color: #292826,
  $active-background: #292826,
  $active-color: #ffcd0f,
);
```

The `$resting-background` and the `$resting-color` parameters will be applied to all highlighted occurrences, except for the active highlighted string, which will be styled based on the `$active-background` and the `$active-color` parameters.

The last step is to **include** the newly created theme.

```scss
:host {
  ::ng-deep {
    @include css-vars($dark-highlight);
  }
}
```

> [!NOTE]
> If the component is using an [`Emulated`](/themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep` to apply the styles.

### Custom styles

Let's say we want to provide an even richer styling to our highlighted text parts. In order to do this, we can take advantage of the [`cssClass`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtexthighlightdirective.html#cssclass) and the [`activeCssClass`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtexthighlightdirective.html#activecssclass) inputs of the [`IgxTextHighlight`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtexthighlightdirective.html) directive. We can combine these classes with the styles from the [`highlight-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-highlight-theme) and provide an awesome experience to our users!

All we have to do is create a couple of css classes with some properties and attach them by using the inputs from above:

```html
<div
  igxTextHighlight
  [cssClass]="'custom-highlight'"
  [activeCssClass]="'custom-active-highlight'">
   {{html}}
</div>
```

```scss
// cssClass
.custom-highlight {
  border: 1px solid #ffcd0f;
}
// activeCssClass
.custom-active-highlight {
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.75);
}
```

As mentioned earlier, we can even combine them with a theme:

```scss
:host {
  ::ng-deep {
    @include css-vars($dark-highlight);  
    
    .custom-highlight {
      border: 1px solid #ffcd0f;
    }  

    .custom-active-highlight {
      box-shadow: 0 0 3px 0 rgba(0,0,0, .5);
    }
  }
}
```


### Demo

```typescript
/* eslint-disable max-len */
import { Component, OnDestroy, ViewChild, inject } from '@angular/core';
import { IgxIconButtonDirective, IgxRippleDirective, IgxTextHighlightDirective, IgxTextHighlightService } from 'igniteui-angular/directives';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-text-highlight-style',
    styleUrls: ['./text-highlight-style.component.scss'],
    templateUrl: './text-highlight-style.component.html',
    imports: [IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, FormsModule, IgxInputDirective, IgxSuffixDirective, IgxIconButtonDirective, IgxRippleDirective, IgxTextHighlightDirective]
})
export class TextHighlightStyleComponent implements OnDestroy {
    private highlightService = inject(IgxTextHighlightService);

    @ViewChild(IgxTextHighlightDirective, { read: IgxTextHighlightDirective, static: true })
    public highlight: IgxTextHighlightDirective;

    public html = `
    Use the search box to search for a certain string in this text.
    All the results will be highlighted in the same color with the exception of the
    the first occurrence of the string, which will have a different color in order to tell it apart.
    You can use the button in the searchbox to specify if the search will be case sensitive.
    You can move the active highlight by either pressing the buttons on the searchbox or by using the Enter or the arrow keys on your keyboard.
    `;


    public searchText = '';
    public matchCount = 0;
    public caseSensitive = false;
    public index = 0;

    public ngOnDestroy() {
        this.highlightService.destroyGroup('group1');
    }

    public searchKeyDown(ev) {
        if (this.searchText) {
            if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
                ev.preventDefault();
                this.findNext();
            } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
                ev.preventDefault();
                this.findPrev();
            }
        }
    }

    public onTextboxChange() {
        this.index = 0;
        this.find(0);
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.find(0);
    }

    public clearSearch() {
        this.searchText = '';
        this.find(0);
    }

    public get canMoveHighlight() {
        return this.matchCount > 1;
    }

    public findNext() {
        this.find(1);
    }

    public findPrev() {
        this.find(-1);
    }

    private find(increment: number) {
        if (this.searchText) {
            this.matchCount = this.highlight.highlight(this.searchText, this.caseSensitive);
            this.index += increment;

            this.index = this.index < 0 ? this.matchCount - 1 : this.index;
            this.index = this.index > this.matchCount - 1 ? 0 : this.index;

            if (this.matchCount) {
                this.highlightService.setActiveHighlight('group1', {
                    index: this.index
                });
            }
        } else {
            this.highlight.clearHighlight();
        }
    }
}
```
```html
<div class="search-wrapper">
  <div class="search-container">
    <igx-input-group type="search" class="input-group">
      <igx-prefix>
        @if (searchText.length === 0) {
          <igx-icon>search</igx-icon>
        }
        @if (searchText.length > 0) {
          <igx-icon (click)="clearSearch()">clear</igx-icon>
        }
      </igx-prefix>

      <input #search1 id="search1" igxInput placeholder="Search" autocomplete="off" [(ngModel)]="searchText" (ngModelChange)="onTextboxChange()"
        (keydown)="searchKeyDown($event)" />

        <igx-suffix>
          <div class="caseSensitiveButton">
            <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" (click)="updateSearch()"
              [style.background]="caseSensitive ? 'rgb(73, 180, 254)' : 'transparent'">
              <igx-icon class="caseSensitiveIcon" family="material">text_fields</igx-icon>
            </button>
          </div>
          @if (searchText.length > 0) {
            <span>
              @if (matchCount > 0) {
                {{ index + 1 }} of {{ matchCount }} results
              }
              @if (matchCount === 0) {
                No results
              }
            </span>
          }
          <div class="searchButtons">
            <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" (click)="findPrev()" [disabled]="!canMoveHighlight">
              <igx-icon family="material">navigate_before</igx-icon>
            </button>
            <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" (click)="findNext()" [disabled]="!canMoveHighlight">
              <igx-icon family="material">navigate_next</igx-icon>
            </button>
          </div>
        </igx-suffix>
      </igx-input-group>
    </div>
    <div igxTextHighlight
      [value]="html"
      [groupName]="'group1'"
      [cssClass]="'custom-highlight'"
      [activeCssClass]="'custom-active-highlight'"
      [containerClass]="'sample-text-container'"
      class="sample-text-container">
      {{html}}
    </div>
  </div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$dark-highlight: highlight-theme(
  $resting-background: #ffcd0f,
  $resting-color: #292826,
  $active-background: #292826,
  $active-color: #ffcd0f,
);

:host {
  ::ng-deep {
    @include css-vars($dark-highlight);  
    
    .custom-highlight {
      border: 1px solid #ffcd0f;
    }  
    
    .custom-active-highlight {
      box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.75);
    }
  }
}
```

<div class="divider"></div>

## API References

For more detailed information regarding the TextHighlight directive's API, refer to the following link:

- [`IgxTextHighlight API`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtexthighlightdirective.html)

Additional components that were used:

- [`IgxInputGroupComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinputgroupcomponent.html)
- [`IgxInputGroupComponent Styles`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-input-group-theme)

<div class="divider"></div>

## Additional Resources

- [Grid Search](grid/search.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

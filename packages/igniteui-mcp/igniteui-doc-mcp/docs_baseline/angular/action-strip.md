---
title: Angular Action Strip Component – Ignite UI for Angular | Infragistics | MIT license 
_description: The Action Strip represents a template area for one or more actions. The Action Strip requires to be inside a relative container, as it is going to overlay it.
_keywords: Angular Action Strip component, Angular Action Strip directive, Angular Action Strip control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Angular UI Components
_license: MIT
_tocName: Action Strip
---

# Angular Action Strip Directive Overview

<p class="highlight">
The Ignite UI for Angular Action Strip component provides an overlay area containing one or more actions allowing additional UI and functionality to be shown on top of a specific target container upon user interaction e.g. hover. The container should be positioned relatively as the Action Strip attempts to overlay it and is itself positioned absolutely. Despite overlapped by an Action Strip, the main interactions and user access to the target container remain available.
</p>

## Angular Action Strip Example

```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxActionStripComponent } from 'igniteui-angular/action-strip';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-action-strip-paragraph',
    styleUrls: ['./action-strip-paragraph.component.scss'],
    templateUrl: './action-strip-paragraph.component.html',
    imports: [IgxActionStripComponent, IgxButtonGroupComponent, IgxButtonDirective, IgxIconComponent]
})
export class ActionStripParagraphComponent {
    @ViewChild('myParagraph') public paragraph;
    public result: string;
    public isVisible = false;
    public isBold = false;
    public isItalic = false;
    public isUnderlined = false;

    public makeTextBold() {
        if (!this.isBold) {
            this.paragraph.nativeElement.classList.add('font-bold');
            this.isBold = true;
        } else {
            this.paragraph.nativeElement.classList.remove('font-bold');
            this.isBold = false;
        }
    }

    public makeTextItalic() {
        if (!this.isItalic) {
            this.paragraph.nativeElement.classList.add('font-italic');
            this.isItalic = true;
        } else {
            this.paragraph.nativeElement.classList.remove('font-italic');
            this.isItalic = false;
        }
    }

    public makeTextUnderlined() {
        if (!this.isUnderlined) {
            this.paragraph.nativeElement.classList.add('font-underlined');
            this.isUnderlined = true;
        } else {
            this.paragraph.nativeElement.classList.remove('font-underlined');
            this.isUnderlined = false;
        }
    }
}
```
```html
<div class="parent" (mouseenter)="actionStrip.show()" (mouseleave)="actionStrip.hide()">
    <p #myParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non nibh eu libero commodo posuere at id augue.
        Morbi nec justo enim. Sed placerat fringilla quam in pharetra. Pellentesque imperdiet lorem quis sem bibendum
        molestie. Aliquam fringilla tellus nec convallis sodales. Suspendisse a eros accumsan, mattis mauris id,
        malesuada nibh. Maecenas eget augue faucibus, euismod arcu sit amet, tempus nisi. Sed tellus nisl, luctus vitae
        vestibulum ac, vehicula non ex. Donec condimentum rhoncus enim, et efficitur tortor faucibus sed. Integer at
        mauris facilisis mauris condimentum bibendum. Maecenas eget lacus dolor. Etiam pulvinar, sapien vitae fermentum
        interdum, nunc justo facilisis est, eu ullamcorper dolor lectus sit amet nisl. Quisque aliquam urna ut leo
        mollis luctus. Morbi lacinia orci augue, sed blandit est ornare placerat. Cras a ante nec mauris euismod aliquam
        vel pulvinar urna. Morbi tincidunt fringilla tortor, at ultricies neque rhoncus ac.
    </p>
    <igx-action-strip #actionStrip class="my-action-strip">
        <igx-buttongroup [selectionMode]="'multi'" class="buttons">
            <button igxButton (click)="makeTextBold()">
                <igx-icon>format_bold</igx-icon>
            </button>
            <button igxButton (click)="makeTextItalic()">
                <igx-icon>format_italic</igx-icon>
            </button>
            <button igxButton (click)="makeTextUnderlined()">
                <igx-icon>format_underlined</igx-icon>
            </button>
        </igx-buttongroup>
    </igx-action-strip>
</div>
```
```scss
@use '../../../../variables' as *;

$custom-strip: action-strip-theme(
    $actions-border-radius: 0
);

.my-action-strip {
    @include action-strip($custom-strip);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 1rem;
}

.parent {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    padding: 1rem;
    margin: auto;
    min-width: 700px;
    max-width: 1000px;
    height: 350px;
    position: relative;
}

.font-italic {
    font-style: italic;
}

.font-bold {
    font-weight: bold
}

.font-underlined {
    text-decoration: underline
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Action Strip

To get started with the Ignite UI for Angular Action Strip component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxActionStripModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxActionStripModule } from 'igniteui-angular/action-strip';
// import { IgxActionStripModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxActionStripModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxActionStripComponent` as a standalone dependency, or use the [`IGX_ACTION_STRIP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/action-strip/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

...
import { IGX_ACTION_STRIP_DIRECTIVES } from 'igniteui-angular/action-strip';
import { IgxButtonDirective } from 'igniteui-angular/button';
import { IgxIconComponent } from 'igniteui-angular/icon';
// import { IGX_ACTION_STRIP_DIRECTIVES, IgxButtonDirective, IgxIconComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <div style="width:100px; height:100px;">
        <igx-action-strip>
            <button igxButton (click)="makeTextBold()">
                <igx-icon>format_bold</igx-icon>
            </button>
        </igx-action-strip>
    <div>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_ACTION_STRIP_DIRECTIVES, IgxButtonDirective, IgxIconComponent]
    /* or imports: [IgxActionStripComponent, IgxButtonDirective, IgxIconComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Action Strip module or directives imported, you can start with a basic configuration of the `igx-action-strip` component.

## Using the Angular Action Strip Component

To initialize and position the Action Strip correctly, it needs to be inside a relatively positioned container:

```html
<div style="position:relative; width:100px; height:100px;">
  <igx-action-strip>
    <button igxButton (click)="makeTextBold()">
      <igx-icon>format_bold</igx-icon>
    </button>
  </igx-action-strip>
</div>
```

By default, the Action Strip will not be visible, but this can be configured via the [`hidden`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxactionstripcomponent.html#hidden) @Input property.

### Menu look and feel

For scenarios where more than three action items will be shown, it is best to use [`IgxActionStripMenuItem`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxactionstripmenuitemdirective.html) directive. Any item within the Action Strip marked with the `*igxActionStripMenuItem` structural directive will be shown in a dropdown, revealed upon toggling the more button i.e. the three dots representing the last action.

```html
<div style="position:relative; width:100px; height:100px;">
  <igx-action-strip>
    <button *igxActionStripMenuItem igxButton (click)="alignTextLeft()">
      <igx-icon>format_align_left</igx-icon>
    </button>
    <button *igxActionStripMenuItem igxButton (click)="alignTextCenter()">
      <igx-icon>format_align_center</igx-icon>
    </button>
    <button *igxActionStripMenuItem igxButton (click)="alignTextRight()">
      <igx-icon>format_align_right</igx-icon>
    </button>
  </igx-action-strip>
</div>
```

```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxActionStripComponent, IgxActionStripMenuItemDirective } from 'igniteui-angular/action-strip';
import { IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-action-strip-paragraph-menu',
    styleUrls: ['./action-strip-paragraph-menu.component.scss'],
    templateUrl: './action-strip-paragraph-menu.component.html',
    imports: [IgxActionStripComponent, IgxActionStripMenuItemDirective, IgxRippleDirective, IgxIconComponent]
})
export class ActionStripParagraphMenuComponent {
    @ViewChild('actionStrip') public actionStrip: IgxActionStripComponent;
    @ViewChild('myParagraph') public paragraph;
    public result: string;
    public isVisible = false;
    public textLeft = false;
    public textCenter = false;
    public textRight = false;

    public onMouseLeave(event?) {
        if (!event) {
            return;
        }
        if (event.relatedTarget &&
            event.relatedTarget.nodeName.toLowerCase() !== 'igx-drop-down-item' &&
            event.relatedTarget.className.indexOf('menu-button') === -1) {
            this.actionStrip.hide();
        }
    }

    public alignTextLeft() {
        this.paragraph.nativeElement.classList.add('text-align-left');
        this.paragraph.nativeElement.classList.remove('text-align-center');
        this.paragraph.nativeElement.classList.remove('text-align-right');
    }

    public alignTextCenter() {
        this.paragraph.nativeElement.classList.remove('text-align-left');
        this.paragraph.nativeElement.classList.add('text-align-center');
        this.paragraph.nativeElement.classList.remove('text-align-right');
    }

    public alignTextRight() {
        this.paragraph.nativeElement.classList.remove('text-align-left');
        this.paragraph.nativeElement.classList.remove('text-align-center');
        this.paragraph.nativeElement.classList.add('text-align-right');
    }
}
```
```html
<div class="parent" (mouseenter)="actionStrip.show()" (mouseleave)="onMouseLeave($event)">
    <p #myParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non nibh eu libero commodo posuere at id augue.
        Morbi nec justo enim. Sed placerat fringilla quam in pharetra. Pellentesque imperdiet lorem quis sem bibendum
        molestie. Aliquam fringilla tellus nec convallis sodales. Suspendisse a eros accumsan, mattis mauris id,
        malesuada nibh. Maecenas eget augue faucibus, euismod arcu sit amet, tempus nisi. Sed tellus nisl, luctus vitae
        vestibulum ac, vehicula non ex. Donec condimentum rhoncus enim, et efficitur tortor faucibus sed. Integer at
        mauris facilisis mauris condimentum bibendum. Maecenas eget lacus dolor. Etiam pulvinar, sapien vitae fermentum
        interdum, nunc justo facilisis est, eu ullamcorper dolor lectus sit amet nisl. Quisque aliquam urna ut leo
        mollis luctus. Morbi lacinia orci augue, sed blandit est ornare placerat. Cras a ante nec mauris euismod aliquam
        vel pulvinar urna. Morbi tincidunt fringilla tortor, at ultricies neque rhoncus ac.
    </p>
    <igx-action-strip class="my-action-strip" #actionStrip>
        <div *igxActionStripMenuItem class="menu-button" (click)="alignTextLeft()" igxRipple>
            <igx-icon>format_align_left</igx-icon>
            <span>Left</span>
        </div>
        <div *igxActionStripMenuItem class="menu-button" (click)="alignTextCenter()" igxRipple>
            <igx-icon>format_align_center</igx-icon>
            <span>Center</span>
        </div>
        <div *igxActionStripMenuItem class="menu-button" (click)="alignTextRight()" igxRipple>
            <igx-icon>format_align_right</igx-icon>
            <span>Right</span>
        </div>
    </igx-action-strip>
</div>
```
```scss
.parent {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin: auto;
    min-width: 700px;
    max-width: 1000px;
    height: 350px;
    position: relative;
}

.my-action-strip {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding-top: 1rem;
}

.text-align-left {
    text-align: left;
}

.text-align-center {
    text-align: center;
}

.text-align-right {
    text-align: right;
}

.menu-button {
    display: flex;

    igx-icon + span {
        margin-inline-start: 16px;
    }
}
```

### Reusing the Action Strip

The same Action Strip instance can be used in multiple places in the document as long as the actions need not be visible simultaneously for them.
The Action Strip can change its parent container, which is possible by changing the [`context`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxactionstripcomponent.html#context).
The best way to do so is via the [`show`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxactionstripcomponent.html#show) API method and passing the `context` as an argument. The `context` should be an instance of a component and should have an accessible `element` property of the `ElementRef` type.

> [!NOTE]
> The `show` API method uses [Angular Renderer2](https://angular.io/api/core/Renderer2) to append the Action Strip to that `element`.

## Usage in Grids

The Action Strip provides additional functionality and UI for the IgxGrid.
This can be utilized via grid action components and we are providing two default ones:

- [`IgxGridEditingActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgrideditingactionscomponent.html) - includes functionality and UI related to grid editing. It allows you to quickly toggle edit mode for cells or rows, depending on the value of the `rowEditable` option of the grid and whether deleting rows is allowed.
- [`IgxGridPinningActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridpinningactionscomponent.html) - includes functionality and UI related to grid row pinning. It allows you to quickly pin rows and navigate between pinned rows and their disabled counterparts.

```html
<igx-grid [data]="data" [rowEditable]="true" [primaryKey]="'ID'">
  <igx-column *ngFor="let c of columns" [field]="c.field"> </igx-column>

  <igx-action-strip #actionStrip>
    <igx-grid-pinning-actions></igx-grid-pinning-actions>
    <igx-grid-editing-actions></igx-grid-editing-actions>
  </igx-action-strip>
</igx-grid>
```

> [!NOTE]
> These components inherit [`IgxGridActionsBaseDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridactionsbasedirective.html) and when creating a custom grid action component, it should also inherit `IgxGridActionsBaseDirective`.
> [!NOTE]
> When `IgxActionStripComponent` is a child component of the grid, hovering a row will automatically show the UI.

```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent, IgxGridPinningActionsComponent, RowType } from 'igniteui-angular/grids/core';
import { Transaction } from 'igniteui-angular/core';
import { IgxActionStripComponent } from 'igniteui-angular/action-strip';
import { IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-grid-row-action-strip',
    styleUrls: [`grid-action-strip-sample.scss`],
    templateUrl: 'grid-action-strip-sample.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxActionStripComponent, IgxGridPinningActionsComponent, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class GridActionStripSampleComponent {
    @ViewChild('grid', { read: IgxGridComponent, static: true }) public grid: IgxGridComponent;

    public data: any[];
    public discardedTransactionsPerRecord: Map<number, Transaction[]> = new Map<number, Transaction[]>();

    constructor() {
        this.data = DATA;
    }

    public isDirty(rowContext: RowType) {
        const isRowEdited = this.grid.transactions.getAggregatedChanges(true).find(x => x.id === rowContext?.key);
        return rowContext && (rowContext.deleted || isRowEdited);
    }

    public isDeleted(rowContext: RowType) {
        return rowContext && rowContext.deleted;
    }

    public inEditMode(rowContext: RowType) {
        return rowContext && rowContext.inEditMode;
    }

    public startEdit(rowContext: RowType): void {
        const firstEditable = rowContext.cells.filter(cell => cell.editable)[0];
        const grid = rowContext.grid;

        if (grid.rowList.filter(r => r === rowContext).length !== 0) {
            grid.gridAPI.crudService.enterEditMode(firstEditable);
            firstEditable.activate(null);
        }
    }

    public commit(rowContext: RowType) {
        this.grid.transactions.commit(this.grid.data, rowContext.key);
        this.discardedTransactionsPerRecord.set(rowContext.key, []);
    }

    public redo(rowContext: RowType) {
        const rowID = rowContext.key;
        const lastDiscarded = this.discardedTransactionsPerRecord.get(rowID);
        lastDiscarded.forEach((transaction) => {
            const recRef = this.grid.gridAPI.get_rec_by_id(transaction.id);
            this.grid.transactions.add(transaction, recRef);
        });
        this.discardedTransactionsPerRecord.set(rowID, []);
    }

    public hasDiscardedTransactions(rowContext: RowType) {
        if (!rowContext) { return false; }
        const lastDiscarded = this.discardedTransactionsPerRecord.get(rowContext.key);
        return lastDiscarded && lastDiscarded.length > 0;
    }

    public undo(rowContext: RowType) {
        const transactionsToDiscard = this.grid.transactions.getAggregatedChanges(true)
        .filter(x => x.id === rowContext.key);
        this.discardedTransactionsPerRecord.set(rowContext.key, transactionsToDiscard);
        this.grid.transactions.clear(rowContext.key);
    }
}
```

> [!NOTE]
> More information about how to use ActionStrip in the grid component could be found in the [Grid Row Actions documentation](/components/grid/row-actions.html).

## Styling

To customize the Action Strip, you first need to import the `index` file, where all styling functions and mixins are located.

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Next, we have to create a new theme that extends the `action-strip-theme` and pass the parameters which we'd like to change:

```scss
$custom-strip: action-strip-theme(
  $background: rgba(109, 121, 147, 0.2),
  $actions-background: rgba(#011627, 0.9),
  $actions-border-radius: 0
);
```

The last step is to include the newly created component theme in our application.

```scss
:host {
  @include tokens($custom-strip);
}
```

```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxActionStripComponent } from 'igniteui-angular/action-strip';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-action-strip-paragraph-styling',
    styleUrls: ['./action-strip-paragraph-styling.component.scss'],
    templateUrl: './action-strip-paragraph-styling.component.html',
    imports: [IgxActionStripComponent, IgxButtonDirective, IgxIconComponent]
})
export class ActionStripStylingComponent {
    @ViewChild('actionstrip') public actionStrip: IgxActionStripComponent;
    @ViewChild('myParagraph') public paragraph;
    public result: string;
    public isVisible = false;
    public textLeft = false;
    public textCenter = false;
    public textRight = false;

    public textDelete() {
        this.paragraph.nativeElement.classList.add('text-strike-through');
    }

    public textRestore() {
        this.paragraph.nativeElement.classList.remove('text-strike-through');
    }

    public showActions() {
        this.isVisible = true;
    }

    public hideActions() {
        this.isVisible = false;
    }
}
```
```html
<div class="parent" (mouseenter)="actionStrip.show()" (mouseleave)="actionStrip.hide()">
    <p #myParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non nibh eu libero commodo posuere at id augue.
        Morbi nec justo enim. Sed placerat fringilla quam in pharetra. Pellentesque imperdiet lorem quis sem bibendum
        molestie. Aliquam fringilla tellus nec convallis sodales. Suspendisse a eros accumsan, mattis mauris id,
        malesuada nibh. Maecenas eget augue faucibus, euismod arcu sit amet, tempus nisi. Sed tellus nisl, luctus vitae
        vestibulum ac, vehicula non ex. Donec condimentum rhoncus enim, et efficitur tortor faucibus sed. Integer at
        mauris facilisis mauris condimentum bibendum. Maecenas eget lacus dolor. Etiam pulvinar, sapien vitae fermentum
        interdum, nunc justo facilisis est, eu ullamcorper dolor lectus sit amet nisl. Quisque aliquam urna ut leo
        mollis luctus. Morbi lacinia orci augue, sed blandit est ornare placerat. Cras a ante nec mauris euismod aliquam
        vel pulvinar urna. Morbi tincidunt fringilla tortor, at ultricies neque rhoncus ac.
    </p>
    <igx-action-strip class="my-action-strip" #actionStrip>
        <button igxButton (click)="textRestore()">
            <igx-icon>restore</igx-icon>
        </button>
        <button igxButton (click)="textDelete()">
            <igx-icon>delete</igx-icon>
        </button>
    </igx-action-strip>
</div>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$custom-strip: action-strip-theme(
  $background: rgba(109, 121, 147, 0.2),
  $actions-background: rgba(#011627, 0.9),
  $actions-border-radius: 0,
);

:host {
  @include tokens($custom-strip);
}
```

## API and Style References

For more detailed information regarding the Action Strip API, refer to the following links:

- [`IgxActionStripComponent API`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxactionstripcomponent.html)

The following built-in CSS styles helped us achieve this Action Strip layout:

- [`IgxActionStripComponent Styles`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-action-strip-theme)

Additional components and/or directives that can be used within the Action Strip:

- [`IgxGridActionsBaseDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridactionsbasedirective.html)
- [`IgxGridPinningActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridpinningactionscomponent.html)
- [`IgxGridEditingActionsComponent`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgrideditingactionscomponent.html)
- [`IgxDividerDirective`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdividerdirective.html)

<div class="divider"></div>

## Theming Dependencies

- [IgxButton Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-button-theme)
- [IgxRipple Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-ripple-theme)
- [IgxDropDown Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-drop-down-theme)
- [IgxIcon Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

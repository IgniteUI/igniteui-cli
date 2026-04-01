---
title: Angular Drag and Drop | IgniteUI for Angular | Infragistics | MIT license
_description: Learn how to use Angular drag and drop directives to perform dragging of elements around the page.
_keywords: Angular Drag and Drop, Angular Drag and Drop Directives, Angular UI components, Ignite UI for Angular, Infragistics
_license: MIT
_tocName: Drag and Drop
---

# Angular Drag and Drop Directives Overview

<p class="highlight">The Ignite UI for Angular Drag and Drop directives enable dragging of elements around the page. The supported features include free dragging, using a drag handle, drag ghost, animations and multiple drop strategies.</p>

## Angular Drag and Drop Example

Drag and drop icon to reposition it.


```typescript
import { Component } from '@angular/core';

import { IgxDragDirective, IgxDropDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-icons-sample',
    styleUrls: ['./icons-sample.component.scss'],
    templateUrl: './icons-sample.component.html',
    imports: [IgxDragDirective, IgxDropDirective]
})

export class IconsSampleComponent {
    public dragIconId: number;
    public dropTileId: number;
    public icons = [
        {
            id: 0, url: 'assets/images/drag-drop/profile.png'
        },
        {
            id: 1, url: 'assets/images/drag-drop/calendar.png'
        },
        {
            id: 2, url: 'assets/images/drag-drop/mail.png'
        },
        {
            id: 3, url: 'assets/images/drag-drop/photos.png'
        },
        {
            id: 4, url: 'assets/images/drag-drop/videos.png'
        },
        {
            id: 5, url: 'assets/images/drag-drop/cloud.png'
        },
        {
            id: 6, url: 'assets/images/drag-drop/map.png'
        },
        {
            id: 7, url: 'assets/images/drag-drop/contacts.png'
        },
        {
            id: 8, url: 'assets/images/drag-drop/chat.png'
        }
    ];

    public onIconDropped(ev) {
        ev.drag.dropFinished();
    }

    public onEnterHandler(ev): void {
        this.dropTileId = parseInt(ev.owner.element.nativeElement.id, 10);
        // the event gets raised immediately, but we want to swap only when we drag over another icon
        if (this.dragIconId === this.dropTileId) {
            return;
        }
        const dragIndex = this.icons.findIndex((iconObj) => iconObj.id === this.dragIconId);
        const dropIndex = this.icons.findIndex((iconObj) => iconObj.id === this.dropTileId);
        this.swapIcons(dragIndex, dropIndex);
    }

    public dragStartHandler(id: number): void {
        this.dragIconId = id;
    }

    public dragEndHandler(dragRef: HTMLElement) {
        dragRef.style.visibility = 'visible';
    }

    public ghostCreateHandler(dragRef: HTMLElement) {
        dragRef.style.visibility = 'hidden';
    }

    private swapIcons(dragIndex: number, dropIndex: number) {
        const tempObj = this.icons[dragIndex];
        this.icons.splice(dragIndex, 1);
        this.icons.splice(dropIndex, 0, tempObj);
    }
}
```
```html
<div class="icons_wrapper">
  @for (icon of icons; track icon) {
    <div class="drag_container"
      igxDrag
      igxDrop
      #dragRef
      id="{{icon.id}}"
      (dropped)="onIconDropped($event)"
      (dragStart)="dragStartHandler(icon.id)"
      (ghostCreate)="ghostCreateHandler(dragRef)"
      (dragEnd)="dragEndHandler(dragRef)"
      (enter)="onEnterHandler($event)"
      [ghostClass]="'drag_ghost_class'">
      <span class="icon_container" draggable="false" onmousedown="if (event.preventDefault) event.preventDefault()">
        <img [src]="icon.url"/>
      </span>
    </div>
  }
</div>
```
```scss
.icons_wrapper {
    display: flex;
    width: 300px;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 20px;
}
.drag_container {
    padding: 0px;
    width: 100px;
    height: 100px;
    display:flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.icon_container {
    -moz-user-select: none;
    padding: 1px;
    position: relative;
    & img {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 100%;
    }
    &:after {
        content: '';
        background: transparent;
        position: absolute;
        top: 50%;
        left:50%;
        width:0px;
        height:0px;
        z-index: 1;
        box-shadow: 0px 3px 30px 20px #000;
    }
}
.drag_ghost_class {
    width: 110px;
    height: 110px;
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Drag and Drop

To get started with the Ignite UI for Angular Drag and Drop directives, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxDragDropModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxDragDropModule } from 'igniteui-angular/directives';
// import { IgxDragDropModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxDragDropModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxDragDirective` and `IgxDropDirective` as standalone dependencies, or use the [`IGX_DRAG_DROP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/directives/drag-drop/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_DRAG_DROP_DIRECTIVES } from 'igniteui-angular/directives';
// import { IGX_DRAG_DROP_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <div igxDrag>Drag me</div>
    <div igxDrop>Drop here</div>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_DRAG_DROP_DIRECTIVES]
    /* or imports: [IgxDragDirective, IgxDropDirective] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Drag and Drop module or directives imported, you can start using the `igxDrag` and `igxDrop` directives.

## Using the Angular Drag Directive

When an element inside your Angular application needs to be dragged from one place to another on the page, the [`igxDrag`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html) directive is designed to help achieve this behavior. In combination with the [`igxDrop`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdirective.html) directive, the placing of the dragged element can be done as well, so you can have fully interactive application.

### Dragging Fundamentals

A drag operation starts when the end user swipes at least 5px in any direction. This is customizable and can be changed using the [`dragTolerance`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html#dragTolerance) input. Otherwise the interaction is considered as a click and a `dragClick` event is triggered.

When the dragging starts, the [`dragStart`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html#dragStart) event is triggered. To prevent any actual movement to occur, the event can be canceled by setting the [`cancel`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/idragstarteventargs.html#cancel) property to `true`.

Before any actual movement is about to be performed, the [`dragMove`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html#dragMove) event is also triggered, containing the last and next position of the pointer. It is triggered every time a movement is detected while dragging an element around.

After the user releases the mouse/touch the drag ghost element is removed from the DOM and the [`dragEnd`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html#dragEnd) event will be emitted.

> [!Note]
> Due to the nature of the [`dragMove`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html#dragMove) event, it can be triggered many times in a short period of time, which may cause performance issues for complex operations done when triggered.

### Dragging With Ghost

The [`igxDrag`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html) directive can be applied on any DOM element by just adding it to its template.

```html
<div igxDrag>Drag me</div>
```

The default behavior of `igxDrag` directive is to leave the base element unmodified and to create a ghost element when drag operation is performed by the end user.

Before the ghost is rendered on the page, a [`ghostCreate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html#ghostCreate) event is triggered containing information of the ghost element that is about to be added. The event is triggered right after the [`dragStart`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html#dragStart) event. If the [`dragStart`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html#dragStart) is canceled, no ghost will be created and the [`ghostCreate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html#ghostCreate) event will not trigger accordingly.

Right before the ghost is about to be removed, the [`ghostDestroy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html#ghostDestroy) event will be triggered.

### Customizing The Ghost

The ghost element by default is a copy of the base element the `igxDrag` is used on. It can be customized by providing a template reference to the [`ghostTemplate`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html#ghostTemplate) input directly.

```html
<div class="email-content flexlist"
 igxDrag
 [ghostTemplate]="customGhost">
 <div class="sender">
  {{email.sender}} 
 </div>
 <div class="email-title">
  {{email.title}}
 </div>
</div>
<ng-template #customGhost>
 <div class="dragGhost">
  <igx-icon fontSet="material">email</igx-icon> 
  Moving {{ draggedElements }} item{{ (draggedElements > 1 ? 's' : '')}}
 </div>
</ng-template>

```

### Dragging Without Ghost

If you would like to move the base element, to which the `igxDrag` directive is applied, you can do that by setting the [`ghost`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html#ghost) input to `false`. That way there will be no extra ghost element rendered and if you need to apply custom styling when dragging and element, you can apply it directly to the base element.

```html
<div igxDrag [ghost]="false">Drag me</div>
```

### Dragging Using a Handle

You can specify an element that is a child of the `igxDrag` by which to drag, since by default the whole element is used to perform that action. It can be done using the `igxDragHandle` directive and can be applied to multiple elements inside the `igxDrag`.

```html
<div
    igxDrag 
    [ghost]="false"
    [dragTolerance]="0"
    (dragMove)=onDragMove($event)>
    <igx-icon igxDragHandle fontSet="material" class="dialogHandle">drag_indicator</igx-icon>
    <div class="igx-dialog__window">
    </div>
</div>
```

Drag the dialog using the handle in the following demo.

```typescript
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GlobalPositionStrategy, NoOpScrollStrategy, OverlaySettings } from 'igniteui-angular/core';
import { IgxButtonDirective, IgxDragDirective, IgxDragHandleDirective, IgxDragLocation, IgxToggleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-drag-dialog-sample',
    templateUrl: './drag-dialog-sample.component.html',
    styleUrls: ['./drag-dialog-sample.component.scss'],
    imports: [IgxButtonDirective, IgxToggleDirective, IgxDragDirective, IgxIconComponent, IgxDragHandleDirective]
})
export class DragDialogSampleComponent {
    @ViewChild('toggleForm', { static: true })
    public toggleForm: IgxToggleDirective;

    @ViewChild('toggleForm', { read: IgxDragDirective, static: true })
    public toggleFormDrag: IgxDragDirective;

    @ViewChild('dialogButton', { static: true })
    public buttonElement: ElementRef;
    public toggleStartPageX;
    public toggleStartPageY;


    private overlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new NoOpScrollStrategy(),
        modal: true,
        closeOnOutsideClick: true
    };

    constructor() { }

    public openDialog() {
        this.toggleForm.open(this.overlaySettings);
        if (!this.toggleStartPageX && !this.toggleStartPageY) {
            this.toggleStartPageX = this.toggleFormDrag.pageX;
            this.toggleStartPageY = this.toggleFormDrag.pageY;
        }
        this.toggleFormDrag.setLocation(new IgxDragLocation(this.toggleStartPageX, this.toggleStartPageY));
    }

    public onDragMove(e) {
        const deltaX = e.nextPageX - e.pageX;
        const deltaY = e.nextPageY - e.pageY;
        e.cancel = true;
        this.toggleForm.setOffset(deltaX, deltaY);
    }
}
```
```html
<button #dialogButton igxButton="contained" (click)="openDialog()">Show Dialog</button>

<div class="dialog"
    igxToggle
    #toggleForm="toggle"
    igxDrag
    [ghost]="false"
    [dragTolerance]="0"
    (dragMove)=onDragMove($event)>
    <igx-icon class="dialog__icon" igxDragHandle>drag_indicator</igx-icon>
    <span class="dialog__title">Draggable Dialog</span>
    <span class="dialog__content">Grab the handle icon to drag.</span>
</div>
```
```scss
@use '../../../../variables' as *;

@include dialog(
    dialog-theme(
        $schema: $schema
    )
);

@include dialog-typography();

:host {
    display: block;
    margin: 16px;

    @include b(dialog) {
        @extend %igx-dialog-window;

        display: flex;
        flex-direction: column;
        max-width: rem(280px);

        @include e(icon) {
            position: absolute;
            right: rem(24px);
            top: rem(24px);
            cursor: move;
        }

        @include e(title) {
            @extend %igx-dialog-title;
        }

        @include e(content) {
            @extend %igx-dialog-content;
        }
    }
}
```

<div class="divider--half"></div>

### Animations

When an element is being dragged, there are no animations applied by default.

You can apply transition animation to the `igxDrag` at any time, but it is advised to use it when dragging ends or the element is not currently dragged. This can be achieved by using the [`transitionToOrigin`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html#transitionToOrigin) and the [`transitionTo`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html#transitionTo) methods.

The `transitionToOrigin` method, as the name suggests, animates the currently dragged element or its ghost to the start position, where the dragging began. The `transitionTo` method animates the element to a specific location relative to the page (i.e. `pageX` and `pageY`) or to the position of a specified element. If the element is not being currently dragged, it will animate anyway or create ghost and animate it to the desired position.

Both functions have arguments that you can set to customize the transition animation and set duration, timing function or delay. If specific start location is set it will animate the element starting from there.

When the transition animation ends, if a ghost is created, it will be removed and the `igxDrag` directive will return to its initial state. If no ghost is created, it will keep its position. In both cases, then the [`transitioned`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html#transitioned) event will be triggered, depending on how long the animation lasts. If no animation is applied, it will be triggered instantly.

You can have other types of animations that involve element transformations. That can be done like any other element either using the Angular Animations or straight CSS Animations to either the base `igxDrag` element or its ghost. If you want to apply them to the ghost, you would need to define a custom ghost and apply animations to its element.

Reorder items in the list using the drag handle. While dragging a list item other list items will re-order with animation.

```typescript
import {
    Component,
    ElementRef,
    QueryList,
    ViewChild,
    ViewChildren
} from '@angular/core';
import { IDragBaseEventArgs, IDragMoveEventArgs, IgxDragDirective, IgxDragHandleDirective, IgxDragLocation, IgxDropDirective } from 'igniteui-angular/directives';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineSubTitleDirective, IgxListLineTitleDirective } from 'igniteui-angular/list';
import { IgxIconComponent } from 'igniteui-angular/icon';


@Component({
    selector: 'app-list-reorder-sample',
    templateUrl: './list-reorder-sample.component.html',
    styleUrls: ['./list-reorder-sample.component.scss'],
    imports: [IgxListComponent, IgxListItemComponent, IgxDropDirective, IgxDragDirective, IgxListLineTitleDirective, IgxListLineSubTitleDirective, IgxIconComponent, IgxDragHandleDirective, IgxListActionDirective]
})
export class ListReorderSampleComponent {
    @ViewChildren('dragDirRef', { read: IgxDragDirective })
    public dragDirs: QueryList<IgxDragDirective>;

    @ViewChild('listContainer', { read: ElementRef })
    public listContainer: ElementRef;

    public employees = [
        { id: 0, name: 'Ivan Cornejo', title: 'Senior Product Owner' },
        { id: 1, name: 'Amish Shiravadakar', title: 'Business Tools Director' },
        { id: 2, name: 'Elsi Hansdottir', title: 'Financial Director' },
        { id: 3, name: 'Benito Noboa', title: 'Marketing Specialist' },
        { id: 4, name: 'Beth Murphy', title: 'Platform Lead for Web' }
    ];

    public newIndex = null;
    public animationDuration = 0.3;
    private listItemHeight = 55;

    public getDragDirectiveRef(id: number): IgxDragDirective {
        return this.dragDirs.find((item) => item.data.id === id);
    }

    public onDragStart(event: IDragBaseEventArgs, dragIndex: number) {
        // Record the current index as basis for moving up/down.
        this.newIndex = dragIndex;
        // Sets specific class when dragging.
        event.owner.data.dragged = true;
    }

    public onDragEnd(event: IDragBaseEventArgs, itemIndex: number) {
        if (this.newIndex !== null) {
            // When we have moved the dragged element up/down, animate it to its new location.
            const moveDown = this.newIndex > itemIndex;
            // If the new position is below add the height moved down, otherwise subtract it.
            const prefix = moveDown ? 1 : -1;
            // The height that the new position differs from the current. We know that each item is 55px height.
            const movedHeight = prefix * Math.abs(this.newIndex - itemIndex) * this.listItemHeight;
            const originLocation = event.owner.originLocation;
            event.owner.transitionTo(
                new IgxDragLocation(originLocation.pageX, originLocation.pageY + movedHeight),
                { duration: this.animationDuration }
            );
        } else {
            // Otherwise animate it to its original position, since it is unchanged.
            event.owner.transitionToOrigin({ duration: this.animationDuration });
        }
    }

    public onTransitioned(event: IDragBaseEventArgs, itemIndex: number) {
        // We can have other items transitioned when they move to free up space where the dragged element would be.
        if (event.owner.data.dragged && this.newIndex != null && this.newIndex !== itemIndex) {
            // If the element finished transitioning is the one were dragging,
            // We can update all elements their new position in the list.
            this.shiftElements(itemIndex, this.newIndex);
            event.owner.setLocation(event.owner.originLocation);
            this.newIndex = null;
        }
        // Disables the specific class when dragging.
        event.owner.data.dragged = false;
    }

    public onDragMove(event: IDragMoveEventArgs, itemIndex: number) {
        const containerPosY = this.listContainer.nativeElement.getBoundingClientRect().top;
        // Relative position of the dragged element to the list container.
        const relativePosY = event.nextPageY - containerPosY;

        let newIndex = Math.floor(relativePosY / this.listItemHeight);
        newIndex = newIndex < 0 ? 0 : (newIndex >= this.employees.length ? this.employees.length - 1 : newIndex);
        if (newIndex === this.newIndex) {
            // If the current new index is unchanged do nothing.
            return;
        }

        const movingDown = newIndex > itemIndex;
        if (movingDown && newIndex > this.newIndex ||
            (!movingDown && newIndex < this.newIndex && newIndex !== itemIndex)) {
            // If we are moving the dragged element down and the new index is bigger than the current
            // this means that the element we are stepping into is not shifted up and should be shifted.
            // Same if we moving the dragged element up and the new index is smaller than the current.
            const elementToMove = this.getDragDirectiveRef(this.employees[newIndex].id);
            const currentLocation = elementToMove.location;
            const prefix = movingDown ? -1 : 1;
            elementToMove.transitionTo(
                new IgxDragLocation(currentLocation.pageX, currentLocation.pageY + prefix * this.listItemHeight),
                { duration: this.animationDuration }
            );
        } else {
            // Otherwise if are moving up but the new index is still bigger than the current, this means that
            // the item we are stepping into is already shifted and should be returned to its original position.
            // Same if we are moving down and the new index is still smaller than the current.
            const elementToMove = this.getDragDirectiveRef(this.employees[this.newIndex].id);
            elementToMove.transitionToOrigin({ duration: this.animationDuration });
        }

        this.newIndex = newIndex;
    }

    private shiftElements(draggedIndex: number, targetIndex: number) {
        // Move the dragged element in DOM to the new position.
        const movedElem = this.employees.splice(draggedIndex, 1);
        this.employees.splice(targetIndex, 0, movedElem[0]);

        this.dragDirs.forEach((dir) => {
            if (this.employees[targetIndex].id !== dir.data.id) {
                // Reset each element its location since it will be repositioned in the DOM except the element we drag.
                dir.setLocation(dir.originLocation);
                dir.data.shifted = false;
            }
        });
    }
}
```
```html
<igx-list #listContainer>
  @for (employee of employees; track employee; let targetIndex = $index) {
    <igx-list-item
      #dragDirRef="drag"
      igxDrop
      [igxDrag]="{ id: employee.id, dragged: false }"
      (dragStart)="onDragStart($event, targetIndex)"
      (dragMove)="onDragMove($event, targetIndex)"
      (dragEnd)="onDragEnd($event, targetIndex)"
      (transitioned)="onTransitioned($event, targetIndex)"
      [ghost]="false"
      [class.dragged]="dragDirRef.data && dragDirRef.data.dragged">
      <h4 igxListLineTitle>{{employee.name}}</h4>
      <h6 igxListLineSubTitle>{{employee.title}}</h6>
      <igx-icon igxDragHandle igxListAction>drag_indicator</igx-icon>
    </igx-list-item>
  }
</igx-list>
```
```scss
@use '../../../../variables' as *;

:host {
    display: block;
    margin: 16px;

    igx-list {
        max-width: 336px;
        overflow: visible;
    }

    igx-list-item {
        z-index: 0;

        &.dragged {
            box-shadow: elevation(8);
            z-index: 1;
        }
    }

    igx-icon {
        cursor: move;
        user-select: none;
    }
}
```

<div class="divider--half"></div>

### Ignoring draggable elements

If the user wants to have interactable children of the main element which have igxDrag instanced, he can set the [`igxDragIgnore`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragignoredirective.html) directive in order to make them be ignored by the igxDrag and not perform any dragging action. This will leave these elements be fully interactable and receive all mouse events.

```html
<div [igxDrag]="myData">
    <span>Drag me!</span>
    <igx-icon igxDragIgnore fontSet="material" (click)="remove()">bin</igx-icon>
</div>
```

## Using the Angular Drop Directive

When an element that is being dragged using the [`igxDrag`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html) directive needs to be placed in an area, the [`igxDrop`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdirective.html) can be used to achieve this behavior. It provides events that you can use to determine if an element is entering the boundaries of the element it is applied to and if it is being released inside it.

The [`igxDrop`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdirective.html) directive can be applied to any DOM element just like the [`igxDrag`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html) directive.

By default, the [`igxDrop`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdirective.html) directive doesn't apply any logic for modifying the dragged element position in the DOM. That's why you need to specify a [`dropStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdirective.html#dropStrategy) or apply custom logic. Drop strategies are discussed in the next section.

### Drop Strategies

The `igxDrop` comes with 4 drop strategies which are: `Default`, `Prepend`, `Insert` and `Append`:

- `Default` - does not perform any action when an element is dropped onto an `igxDrop` element and is implemented as a class named [`IgxDefaultDropStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdefaultdropstrategy.html).

- `Append` - always inserts the dropped element as a last child  and is implemented as a class named [`IgxAppendDropStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxappenddropstrategy.html).

- `Prepend` - always inserts the dropped element as first child and is implemented as a class named [`IgxPrependDropStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxprependdropstrategy.html).

- `Insert` - inserts the dragged element at last position. If there is a child under the element when it was dropped though, the `igxDrag` instanced element will be inserted at that child's position and the other children will be shifted. It is implemented as a class named [`IgxInsertDropStrategy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinsertdropstrategy.html).

The way a strategy can be applied is by setting the `dropStrategy` input to one of the listed classes above. The value provided has to be a type and not an instance, since the `igxDrop` needs to create and manage the instance itself.

```typescript
public appendStrategy = IgxAppendDropStrategy;
```

```html
<div igxDrop [dropStrategy]="appendStrategy"></div>
```

#### Canceling a drop strategy

When using a specific drop strategy, its behavior can be canceled in the [`dropped`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdirective.html#dropped) events by setting the `cancel` property to true. The `dropped` event is specific to the `igxDrop`. If you does not have drop strategy applied to the `igxDrop` canceling the event would have no side effects.

_Example:_

```html
<div igxDrag></div>
<!-- ... -->
<div igxDrop (dropped)="onDropped($event)"></div>
```

```typescript
public onDropped(event) {
    event.cancel = true;
}
```

If you would like to implement your own drop logic, we advise binding to the `dropped` event and execute your logic there or extend the `IgxDefaultDropStrategy` class.

### Linking Drag to Drop Element

Using the [`dragChannel`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html#dragChannel) and [`dropChannel`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdirective.html#dropChannel) input on respectively `igxDrag` and `igxDrop` directives, you can link different elements to interact only between each other. For example, if an `igxDrag` element needs to be constrained so it can be dropped on specific `igxDrop` element and not all available, this can easily be achieved by assigning them the same channel.


```html
<div igxDrag [dragChannel]="['Mammals', 'Land']"> Human </div>
<div igxDrag [dragChannel]="['Mammals', 'Water']"> Dolphin </div>
<div igxDrag [dragChannel]="['Insects', 'Air']"> Butterfly </div>
<div igxDrag [dragChannel]="['Insects', 'Land']"> Ant </div>

<div igxDrop [dropChannel]="['Mammals']"> Mammals </div>
<div igxDrop [dropChannel]="['Insects']"> Insects </div>
<div igxDrop [dropChannel]="['Land']"> Land </div>
```

Drag e-mails on the right into the folders on the left.


```typescript
import { ChangeDetectorRef, Component, Input, Renderer2, inject } from '@angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxListComponent, IgxListItemComponent, IgxListLineSubTitleDirective, IgxListLineTitleDirective, IgxListThumbnailDirective } from 'igniteui-angular/list';
import { IgxDragDirective, IgxDropDirective } from 'igniteui-angular/directives';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-email-sample',
    templateUrl: './email-sample.component.html',
    styleUrls: ['./email-sample.component.scss'],
    imports: [IgxIconComponent, IgxListComponent, IgxListItemComponent, IgxDropDirective, IgxListThumbnailDirective, IgxListLineTitleDirective, IgxDragDirective, IgxListLineSubTitleDirective, IgxCheckboxComponent, FormsModule]
})

export class EmailSampleComponent {
    private cdr = inject(ChangeDetectorRef);
    private renderer = inject(Renderer2);


    @Input()
    public ghostTemplate: any;
    public hasChecked = false;
    public draggedElements = 0;

    public folders: any[] = [
        { icon: 'inbox', text: 'Inbox', dropChannel: 'inbox'},
        { icon: 'star_rate', text: 'Starred', dropChannel: 'starred'},
        { icon: 'error', text: 'Important', dropChannel: 'important'},
        { icon: 'send', text: 'Sent', dropChannel: 'sent'},
        { icon: 'label', text: 'Personal', dropChannel: 'personal'},
        { icon: 'label', text: 'Work', dropChannel: 'work'},
        { icon: 'label', text: 'Finances', dropChannel: 'finances'}
    ];

    public emails: any[] = [
        { sender: 'Ivan Cornejo', title: 'We have exciting news', checked: false},
        { sender: 'Amish Shiravadakar', title: 'RE: Document Libraries status', checked: false},
        { sender: 'Elsi Hansdottir', title: 'SEO Keywords', checked: false},
        { sender: 'Benito Noboa', title: 'Last Chance: Win an Amazon Gift Card', checked: false}
    ];

    public toggleCheck(email: any, checkbox: any): void {
        this.emails.forEach(x => x.checked = false);
        email.checked = true;
        checkbox.checked = true;
    }

    public toggleCheckbox(email: any): void {
        email.checked = !email.checked;
    }

    public stopEventPropagation(event: any): void {
        event.stopPropagation();
    }

    public dropElement(event: any): void {
        this.emails = this.emails.filter(x => x.checked !== true);
        event.dragData = {};
        event.cancel = true;
        this.leaveDropZone(event);
    }

    public enterDropZone(event: any): void {
        this.renderer.addClass(event.owner.element.nativeElement, 'drag-enter');
    }

    public leaveDropZone(event: any): void {
        this.renderer.removeClass(event.owner.element.nativeElement, 'drag-enter');
    }

    public onDragStart(event: any): void {
        this.aggressiveToggle(event);
        this.draggedElements = this.emails.filter(x => x.checked === true).length;
    }

    public onGhostCreated(): void {
        this.cdr.detectChanges();
    }

    private aggressiveToggle(event: any): void {
        const checkbox = event.owner.element.nativeElement.parentElement.querySelector('igx-checkbox');
        event.owner.data.checked = true;
        if (!this.nativeCheckboxChecked(checkbox)) {
            checkbox.click();
        }
    }

    private nativeCheckboxChecked(nativeElement: any): boolean {
        return nativeElement.classList.contains('igx-checkbox--checked');
    }

}
```
```html
<ng-template #customGhost>
  <div class="drag-ghost">
    <igx-icon>email</igx-icon>
    <span>Move {{ draggedElements }} item{{ (draggedElements > 1 ? 's' : '')}}</span>
  </div>
</ng-template>

<igx-list class="folders">
  @for (folder of folders; track folder) {
    <igx-list-item igxDrop
      (enter)="enterDropZone($event)"
      (leave)="leaveDropZone($event)"
      (dropped)="dropElement($event)"
      [dropChannel]="folder.dropChannel">
      <igx-icon igxListThumbnail>{{folder.icon}}</igx-icon>
      <h4 igxListLineTitle>{{ folder.text }}</h4>
    </igx-list-item>
  }
</igx-list>

<igx-list class="emails">
  <igx-list-item [isHeader]="true">Today</igx-list-item>

  @for (email of emails; track email) {
    <igx-list-item
      [class.email-checked]="email.checked"
      [igxDrag]="email"
      [dragChannel]="['starred', 'important', 'personal', 'work', 'finances']"
      [ghostTemplate]="customGhost"
      [ghostOffsetX]="-5"
      [ghostOffsetY]="-5"
      (dragStart)="onDragStart($event)"
      (ghostCreate)="onGhostCreated()"
      class="email-content flexlist"
      (click)="toggleCheck(email, checkbox)">
      <h4 igxListLineTitle>{{ email.sender }}</h4>
      <h6 igxListLineSubTitle>{{ email.title }}</h6>
      <igx-checkbox #checkbox
        [(ngModel)]="email.checked"
        (change)="toggleCheckbox(email)"
        (pointerdown)="stopEventPropagation($event)"
        (click)="stopEventPropagation($event)">
      </igx-checkbox>
    </igx-list-item>
  }
</igx-list>
```
```scss
@use '../../../../variables' as *;

.drag-ghost {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: rem(180px);
    color: contrast-color($color: 'secondary', $variant: 200);
    background-color: color($color: 'secondary', $variant: 200);
    font-size: rem(13px);
    padding: rem(8px);
    border-radius: rem(4px);

    igx-icon {
        margin-right: rem(8px);
    }
}

:host {
    display: flex;
    user-select: none;
	font-weight: 400;
    font-style: normal;
    height: 100%;

    .folders {
        width: rem(200px);
        padding: 8px;
        background: color($color: 'gray', $variant: 50);
        border: none;

        igx-icon {
            margin: 0;
        }

        igx-list-item {
            cursor: pointer;
            border-radius: 4px;
            background: transparent;
            transition: background .15s $ease-out-quad;

            &.drag-enter {
                background: color($color: 'secondary', $variant: 100);
            }

            &:hover {
                background: color($color: 'gray', $variant: 100);
            }

            &:nth-child(5) {
                igx-icon {
                    color: #af1159;
                }
            }

            &:nth-child(6) {
                igx-icon {
                    color: #0071bf;
                }
            }

            &:nth-child(7) {
                igx-icon {
                    color: #4eb862;
                }
            }
        }
    }

    .emails {
        flex-grow: 1;
        border: none;
        border-radius: 0;
    }

    .email-checked {
        color: contrast-color($color: 'secondary', $variant: 100);
        background: color($color: 'secondary', $variant: 100);
        transition: background .1s ease-out;
    }
}
```

<div class="divider--half"></div>

## Advanced Configuration

Since both `igxDrag` and `igxDrop` combined can be used in many different and complex application scenarios, the following example demonstrates how they can be used in an Kanban board.

The user could reorder the cards in each column. It is done by setting each card also a drop area, so we can detect when another card has entered its area and switch them around at runtime, to provide better user experience.

It won't be Kanban board without also the ability to switch cards between columns. A card can be directly moved from one column to another column at a specific position. It is achieved here with a dummy object, so it would create a visual area where the card will be position if released. The dummy object is removed once the dragging of a card ends or exits another column.

Drag items around the kanban board.


```typescript
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/naming-convention */
import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { IDropBaseEventArgs, IDropDroppedEventArgs, IgxDragDirective, IgxDropDirective } from 'igniteui-angular/directives';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective } from 'igniteui-angular/card';


enum state {
    toDo = 'toDo',
    inProgress = 'inProgress',
    done = 'done'
}
interface IListItem {
    id: string;
    text: string;
    state: state;
    hide?: boolean;
}
@Component({
    selector: 'app-kanban-sample',
    templateUrl: './kanban-sample.component.html',
    styleUrls: ['./kanban-sample.component.scss'],
    imports: [IgxDropDirective, IgxChipComponent, IgxCardComponent, IgxDragDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardContentDirective]
})
export class KanbanSampleComponent implements OnInit {
    private renderer = inject(Renderer2);
    private cdr = inject(ChangeDetectorRef);

    @ViewChild('toDo', { read: ElementRef }) public toDo: ElementRef;
    @ViewChild('inProgress', { read: ElementRef }) public inProgress: ElementRef;
    @ViewChild('done', { read: ElementRef }) public done: ElementRef;
    public toDoList: IListItem[];
    public inProgressList: IListItem[];
    public doneList: IListItem[];
    private dragObj;
    private dummyObj;
    private lastDragEnterList: string;
    private currentList: string;

    public ngOnInit(): void {
        this.toDoList = [
            { id: 'STR-000132', text: 'Implement chat bubble', state: state.toDo },
            { id: 'STR-000097', text: 'Implement sticky header', state: state.toDo },
            { id: 'STR-000191', text: 'Change trial days to credit', state: state.toDo }

        ];
        this.inProgressList = [
            { id: 'STR-000124', text: 'Implement fback widget', state: state.inProgress },
            { id: 'STR-000121', text: 'Add analytics', state: state.inProgress }
        ];
        this.doneList = [
            { id: 'STR-000129', text: 'Add SSL to account pages', state: state.done }
        ];
        this.dragObj = null;
        this.dummyObj = null;
        this.lastDragEnterList = '';
        this.currentList = '';
    }

    public onStateContainerEnter(event: IDropBaseEventArgs) {
        // If we have entered another list container, we have to remove the 'dummy' object from the previous one
        if (this.currentList !== event.owner.element.nativeElement.id) {
            this[this.currentList] = this[this.currentList].filter((item) => item.id !== 'dummy');
            this.cdr.detectChanges();
            this.currentList = event.owner.element.nativeElement.id;
            this.dummyObj = null;
        }
        // Add the blue container hightlight when an item starts being dragged
        this.renderer.addClass(event.owner.element.nativeElement, 'active');
    }

    public onStateContainerLeave(event: IDropBaseEventArgs) {
        // This event also gets raised when the user drags a task over another task tile.
        // That means we have to re-apply the 'active' class in the `onItemEnter` event handler
        this.renderer.removeClass(event.owner.element.nativeElement,  'active');
    }

    public dragStartHandler(event) {
        // We have to save the dragStartList so we could remove the dragged item from it later, when it gets dropped
        this.currentList = event.owner.element.nativeElement.dataset.state + 'List';
        this.lastDragEnterList = this.currentList;
        this.dragObj = this[this.currentList].filter((elem) => elem.id === event.owner.element.nativeElement.id)[0];
    }

    public dragEndHandler(event) {
        this.toDoList = this.toDoList.filter((x) => x.id !== 'dummy');
        this.inProgressList = this.inProgressList.filter((x) => x.id !== 'dummy');
        this.doneList = this.doneList.filter((x) => x.id !== 'dummy');
        if (this.dragObj) {
            this.dragObj.hide = false;
        }
    }

    public onItemEnter(event: IDropBaseEventArgs) {
        // Applying the container highlighting again
        const listContainer = event.owner.element.nativeElement.dataset.state;
        this.renderer.addClass(this[listContainer].nativeElement, 'active');

        const currentList = event.owner.element.nativeElement.dataset.state + 'List';
        const currentItemIndex = this[currentList].findIndex((item) => item.id === event.owner.element.nativeElement.id);
        // Checking if items in the same list are being reordered
        if (this.lastDragEnterList === currentList) {
            const draggedItemIndex = this[currentList].findIndex((item) => item.id === this.dragObj.id);
            this.swapTiles(draggedItemIndex, currentItemIndex, currentList);
        } else {
            // We need a hidden dummy object that would make an empty space for the dragged element in the list
            if (!this.dummyObj) {
                this.dummyObj = {id: 'dummy', text: '', state: event.owner.element.nativeElement.dataset.state};
                const newCurrentList = [
                    ...this[currentList].slice(0, currentItemIndex),
                    this.dummyObj,
                    ...this[currentList].slice(currentItemIndex)
                ];
                this[currentList] = newCurrentList;
                this.cdr.detectChanges();
            } else {
                const dummyObjIndex = this[currentList].findIndex((item) => item.id === 'dummy');
                if (dummyObjIndex !== -1) {
                    this.swapTiles(dummyObjIndex, currentItemIndex, currentList);
                }
            }
        }
    }

    public onItemLeave(event: IDropBaseEventArgs) {
        const listContainer = event.owner.element.nativeElement.dataset.state;
        this.renderer.removeClass(this[listContainer].nativeElement, 'active');
    }

    public onItemDropped(event: IDropDroppedEventArgs) {
        const dropListState = event.owner.element.nativeElement.id;
        const dragListState = event.drag.element.nativeElement.dataset.state + 'List';
        const dummyItemIndex = this[dropListState].findIndex((item) => item.id === 'dummy');
        if (dropListState !== dragListState) {
            // The state of the dragged object should be updated before inserting it in the dropped list
            this.dragObj.state = dropListState.substring(0, dropListState.length - 4);
            this[dragListState] = this[dragListState].filter((item) => item.id !== this.dragObj.id);
            // Check if there is a dummy item and replace it with the dragged one
            if (dummyItemIndex !== -1) {
                this[dropListState].splice(dummyItemIndex, 1, this.dragObj);
            } else {
                this[dropListState].push(this.dragObj);
            }
        }
        this.dragObj.hide = false;
        this.dragObj = null;
        // The default browser drag behavior should be cancelled
        event.cancel = true;
    }

    private swapTiles(currentIndex: number, targetIndex: number, itemList: string): void {
        const tempObj = this[itemList][currentIndex];
        this[itemList].splice(currentIndex, 1);
        this[itemList].splice(targetIndex, 0, tempObj);
        this.cdr.detectChanges();
    }
}
```
```html
<article
  #toDo
  igxDrop
  id="toDoList"
  [attr.data-state]="'ToDo'"
  (enter)="onStateContainerEnter($event)"
  (leave)="onStateContainerLeave($event)"
  (dropped)="onItemDropped($event)">

  <header>
    <h4 class="state-title">To Do</h4>
    <igx-chip>
      <span class="state-number">
        {{toDoList.length}}
      </span>
    </igx-chip>
  </header>

  <section>
    @for (item of toDoList; track item) {
      <igx-card
        igxDrag
        igxDrop
        (dragStart)="dragStartHandler($event)"
        (dragEnd)="dragEndHandler($event)"
        (enter)="onItemEnter($event)"
        (leave)="onItemLeave($event)"
        [class.invisible]="item.id === 'dummy'"
        id="{{item.id}}"
        [attr.data-state]="item.state"
        (ghostCreate)="item.hide = true"
        [style.visibility]='item.hide ? "hidden" : "visible"'
        [dragTolerance]="0"
        [ghostClass]="'drag-ghost'" elevated>
        <igx-card-header>
          <p igxCardHeaderTitle>{{ item.text }}</p>
        </igx-card-header>
        <igx-card-content>
          <p>{{ item.id }}</p>
        </igx-card-content>
      </igx-card>
    }
  </section>
</article>

<article
  #inProgress
  igxDrop
  id="inProgressList"
  [attr.data-state]="'InProgress'"
  (enter)="onStateContainerEnter($event)"
  (leave)="onStateContainerLeave($event)"
  (dropped)="onItemDropped($event)">

  <header>
    <h4 class="state-title">In Progress</h4>
    <igx-chip>
      <span class="state-number">
        {{inProgressList.length}}
      </span>
    </igx-chip>
  </header>

  <section>
    @for (item of inProgressList; track item) {
      <igx-card
        igxDrag
        igxDrop
        (dragStart)="dragStartHandler($event)"
        (dragEnd)="dragEndHandler($event)"
        (enter)="onItemEnter($event)"
        (leave)="onItemLeave($event)"
        [class.invisible]="item.id === 'dummy'"
        id="{{item.id}}"
        [attr.data-state]="item.state"
        (ghostCreate)="item.hide = true"
        [style.visibility]='item.hide ? "hidden" : "visible"'
        [dragTolerance]="0"
        [ghostClass]="'drag-ghost'" elevated>
        <igx-card-header>
          <p igxCardHeaderTitle>{{ item.text }}</p>
        </igx-card-header>
        <igx-card-content>
          <p>{{ item.id }}</p>
        </igx-card-content>
      </igx-card>
    }
  </section>
</article>

<article
  #done
  igxDrop
  id="doneList"
  [attr.data-state]="'Done'"
  (enter)="onStateContainerEnter($event)"
  (leave)="onStateContainerLeave($event)"
  (dropped)="onItemDropped($event)">

  <header>
    <h4 class="state-title">Done</h4>
    <igx-chip>
      <span class="state-number">
        {{doneList.length}}
      </span>
    </igx-chip>
  </header>

  <section>
    @for (item of doneList; track item) {
      <igx-card
        igxDrag
        igxDrop
        (dragStart)="dragStartHandler($event)"
        (dragEnd)="dragEndHandler($event)"
        (enter)="onItemEnter($event)"
        (leave)="onItemLeave($event)"
        [class.invisible]="item.id === 'dummy'"
        id="{{item.id}}"
        [attr.data-state]="item.state"
        (ghostCreate)="item.hide = true"
        [style.visibility]='item.hide ? "hidden" : "visible"'
        [dragTolerance]="0"
        [ghostClass]="'drag-ghost'" elevated>
        <igx-card-header>
          <p igxCardHeaderTitle>{{ item.text }}</p>
        </igx-card-header>
        <igx-card-content>
          <p>{{ item.id }}</p>
        </igx-card-content>
      </igx-card>
    }
  </section>
</article>
```
```scss
@use '../../../../variables' as *;

igx-card {
    width: rem(288px);
    height: rem(128px);
    margin-bottom: rem(16px);
    cursor: move;

    &.drag-ghost {
        transform: scale(1.05);
        box-shadow: elevation(24);
        color: color($color: 'secondary', $variant: 300);
    }

    &.invisible {
        visibility: hidden !important;
    }

    [igxCardHeaderTitle] {
        font-size: rem(16px);
    }

    &:last-child {
        margin-bottom: unset;
    }
}

:host {
    display: flex;
    height: 100%;
    min-height: rem(656px);
    user-select: none;
    padding: rem(16px);
    overflow: auto;

    article {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1 0 33%;
        max-width: rem(320px);
        min-width: rem(320px);
        padding: 0 rem(16px);
        background-color: color($color: 'gray', $variant: 100);
        border-radius: rem(8px);
        border: 1px solid color($color: 'gray', $variant: 200);
        margin: 0 rem(12px);
        overflow: auto;

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: rem(8px) 0;
            align-self: flex-start;

            .state-title {
                @include type-style('subtitle-1') {
                    font-weight: 600;
                    margin: 0;
                };
            }

            .state-number {
                font-size: rem(12px);
                font-weight: bold;
                padding: 4px;
            }
        }

        &.active {
            background-color: color($color: 'primary', $variant: 100);
        }
    }
}
```

<div class="divider--half"></div>

## API

- [IgxDragDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdragdirective.html)
- [IgxDropDirective](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdropdirective.html)
- [IgxDefaultDropStrategy](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdefaultdropstrategy.html)
- [IgxAppendDropStrategy](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxappenddropstrategy.html)
- [IgxPrependDropStrategy](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxprependdropstrategy.html)
- [IgxInsertDropStrategy](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxinsertdropstrategy.html)

## References

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

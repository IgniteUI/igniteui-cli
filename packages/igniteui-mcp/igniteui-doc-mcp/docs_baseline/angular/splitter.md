---
title: Angular Splitter Component | Split Panes |  Ignite UI for Angular | Infragistics | MIT license
_description: Use the Angular Splitter component to create a simple split layout splitting the view horizontally or vertically into multiple collapsible split panes.
_keywords: angular splitter, angular splitter component, angular split view component, angular ui components, igniteui for angular, infragistics
_license: MIT
_tocName: Splitter
---

# Angular Splitter Component Overview

The Ignite UI for Angular Splitter component provides the ability to create layouts, split into multiple vertically or horizontally arranged panes that may be resized, expanded and collapsed. These interactions are performed through UI exposed in the splitter bars between the panes. A simple Splitter layout is demonstrated in the demo below.

## Angular Splitter Example

```typescript
import { Component } from '@angular/core';
import { IgxSplitterComponent, IgxSplitterPaneComponent, SplitterType } from 'igniteui-angular/splitter';

@Component({
    selector: 'app-splitter-horizontal-sample',
    styleUrls: ['splitter-horizontal-sample.component.scss'],
    templateUrl: 'splitter-horizontal-sample.component.html',
    imports: [IgxSplitterComponent, IgxSplitterPaneComponent]
})
export class SplitterHorizontalSampleComponent {
    public type = SplitterType.Horizontal;
}
```
```html
<igx-splitter style='height: 100vh;' [style.width]='"100%"'>
        <igx-splitter-pane>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in lacus eget turpis congue fermentum. Aliquam sollicitudin massa vel ullamcorper bibendum. Donec sit amet augue in justo fermentum facilisis vel quis quam. Vivamus eget iaculis nisi, vitae dignissim leo. Donec eget consectetur lacus. In viverra vehicula libero, quis dictum odio varius in. Phasellus aliquam elit et lectus ornare placerat. Aliquam vitae sapien facilisis, auctor enim quis, consectetur dui. Cras elementum velit eros, ut efficitur ante pellentesque in. Proin vulputate lacus dui, vitae imperdiet dui pharetra ac. Nunc sagittis, sapien et posuere varius, mauris justo tincidunt odio, in interdum lorem libero sed enim. Nulla placerat scelerisque felis vitae accumsan.
            </p>
        </igx-splitter-pane>
        <igx-splitter-pane>
            <p>
                Duis auctor, diam id vehicula consequat, lacus tellus molestie magna, sed varius nisi quam eget nisl. Donec dignissim mi et elementum laoreet. Nam dignissim quis justo eu fermentum. Proin vestibulum, neque quis elementum tincidunt, nibh mi gravida purus, eget volutpat ipsum magna in orci. Donec id mauris vitae lectus molestie blandit. Praesent non quam interdum, efficitur lacus nec, gravida mauris. Ut ac ante maximus, ultrices turpis a, aliquam magna. Praesent blandit ante ut nulla malesuada lobortis. Praesent a lobortis justo. Morbi congue, dui sed ornare faucibus, turpis felis vulputate arcu, lobortis posuere sem leo eget risus. Duis risus augue, dignissim ac tincidunt a, ullamcorper rutrum nisl. Ut ut ipsum vel purus viverra dapibus.
            </p>
        </igx-splitter-pane>
    </igx-splitter>
```
```scss
p {
    padding: 0 16px;
}
```


<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Splitter

To get started with the Ignite UI for Angular Splitter component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxSplitterModule` in your **app.module.ts** file.

```typescript
// app.module.ts
...
import { IgxSplitterModule } from 'igniteui-angular/splitter';
// import { IgxSplitterModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxSplitterModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxSplitterComponent` as a standalone dependency, or use the [`IGX_SPLITTER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/splitter/src/splitter/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_SPLITTER_DIRECTIVES } from 'igniteui-angular/splitter';
// import { IGX_SPLITTER_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-splitter>
        <igx-splitter-pane>
            Pane 1
        </igx-splitter-pane>
        <igx-splitter-pane>
            Pane 2
        </igx-splitter-pane>
    </igx-splitter>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_SPLITTER_DIRECTIVES]
    /* or imports: [IgxSplitterComponent, IgxSplitterPaneComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Splitter module or directives imported, you can start using the `igx-splitter` component.

## Using the Angular Splitter

**igxSplitter** is initialized with the **igx-splitter** tag. Multiple splitter panes can be defined under a single **igx-splitter** component. The content of the pane is templatable and will be rendered in its own resizable container.

```html
<!-- splitter.component.html -->
<igx-splitter>
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
</igx-splitter>
```

### Orientation

The splitter can be vertical or horizontal, which is defined by the [`type`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsplittercomponent.html#type) input. The default value is Vertical.

```typescript
public type = SplitterType.Horizontal;
```

```html
<igx-splitter [type]="type">
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
</igx-splitter>
```

### Collapsible Splitter

You can make the splitter collapsible or not by showing or hiding the splitter's handle and expanders, using the [`nonCollapsible`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsplittercomponent.html#nonCollapsible) input. The default value is false, so the splitter is collapsible.

```html
<igx-splitter [nonCollapsible]="true">
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
</igx-splitter>
```

```typescript
import { Component, ViewChild } from '@angular/core';
import { IgxSplitterComponent, IgxSplitterPaneComponent } from 'igniteui-angular/splitter';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-splitter-collapsible-sample',
    styleUrls: ['splitter-collapsible-sample.component.scss'],
    templateUrl: 'splitter-collapsible-sample.component.html',
    imports: [IgxSplitterComponent, IgxSplitterPaneComponent, IgxButtonDirective]
})
export class SplitterCollapsibleSampleComponent {
    @ViewChild('splitter') public splitterComponent: IgxSplitterComponent;

    public toggleCollapsible() {
        this.splitterComponent.nonCollapsible = !this.splitterComponent.nonCollapsible;
    }
}
```
```html
<igx-splitter #splitter [nonCollapsible]='true' style='height: 100vh;' [style.width]='"100%"'>
    <igx-splitter-pane>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in lacus eget turpis congue fermentum. Aliquam sollicitudin massa vel ullamcorper bibendum. Donec sit amet augue in justo fermentum facilisis vel quis quam. Vivamus eget iaculis nisi, vitae dignissim leo. Donec eget consectetur lacus. In viverra vehicula libero, quis dictum odio varius in.
            <br>
            <button igxButton='contained' (click)="toggleCollapsible()">Toggle Collapsible</button>
        </p>
    </igx-splitter-pane>
    <igx-splitter-pane>
        <p>
            Duis auctor, diam id vehicula consequat, lacus tellus molestie magna, sed varius nisi quam eget nisl. Donec dignissim mi et elementum laoreet. Nam dignissim quis justo eu fermentum. Proin vestibulum, neque quis elementum tincidunt, nibh mi gravida purus, eget volutpat ipsum magna in orci. Donec id mauris vitae lectus molestie blandit. Praesent non quam interdum, efficitur lacus nec, gravida mauris. Ut ac ante maximus, ultrices turpis a, aliquam magna. Praesent blandit ante ut nulla malesuada lobortis. Praesent a lobortis justo. Morbi congue, dui sed ornare faucibus, turpis felis vulputate arcu, lobortis posuere sem leo eget risus. Duis risus augue, dignissim ac tincidunt a, ullamcorper rutrum nisl. Ut ut ipsum vel purus viverra dapibus.
        </p>
    </igx-splitter-pane>
</igx-splitter>
```
```scss
p {
    padding: 0 16px;
}

[igxButton] {
    margin-top: 16px;
}
```

### Configuring panes

The **igxSplitterPane** component contains several input properties. You can set the initial pane size by using the [`size`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsplitterpanecomponent.html#size) input property. The [`minSize`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsplitterpanecomponent.html#minSize) and [`maxSize`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsplitterpanecomponent.html#maxSize) input properties can be used to set the minimum or maximum allowed size of the pane. Resizing beyond `minSize` and `maxSize` is not allowed.

```html
<igx-splitter>
    <igx-splitter-pane size='300px' minSize='100px'>
        ...
    </igx-splitter-pane>
    <igx-splitter-pane size='300px' maxSize='500px'>
        ...
    </igx-splitter-pane>
</igx-splitter>
```

You can also forbid the resizing of a pane by setting its [`resizable`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsplitterpanecomponent.html#resizable) input property to **false**.

```html
<igx-splitter>
    <igx-splitter-pane [resizable]='false'>
        ...
    </igx-splitter-pane>
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
</igx-splitter>
```

### Nested panes

You can nest splitter components to create a more complex layout inside a splitter pane.

```typescript
public typeHorizontal = SplitterType.Horizontal;
public typeVertical = SplitterType.Vertical;
```

```html
<igx-splitter style='height: 30vh;' [type]='typeHorizontal' >
    <igx-splitter-pane>
        <igx-splitter [type]='typeVertical' [style.width]='"100%"'>
            <igx-splitter-pane>
                Pane1.1
            </igx-splitter-pane>
            <igx-splitter-pane>
                Pane1.2
            </igx-splitter-pane>
        </igx-splitter>
    </igx-splitter-pane>
    <igx-splitter-pane>
        <igx-splitter [type]='typeVertical' [style.width]='"100%"'>
            <igx-splitter-pane>
                Pane2.1
            </igx-splitter-pane>
            <igx-splitter-pane>
                Pane2.2
            </igx-splitter-pane>
        </igx-splitter>
    </igx-splitter-pane>
</igx-splitter>
```

### Demo

```typescript
import { Component } from '@angular/core';
import { IgxSplitterComponent, IgxSplitterPaneComponent, SplitterType } from 'igniteui-angular/splitter';

@Component({
    selector: 'app-splitter-nested-sample',
    styleUrls: ['splitter-nested-sample.component.scss'],
    templateUrl: 'splitter-nested-sample.component.html',
    imports: [IgxSplitterComponent, IgxSplitterPaneComponent]
})
export class SplitterNestedSampleComponent {
    public typeHorizontal = SplitterType.Horizontal;
    public typeVertical = SplitterType.Vertical;
}
```
```html
<igx-splitter style='height: 100vh;' [type]="typeHorizontal" >
    <igx-splitter-pane size='50%'>
        <igx-splitter [type]="typeVertical" [style.width]='"100%"'>
            <igx-splitter-pane size='50%'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in lacus eget turpis congue fermentum. Aliquam sollicitudin massa vel ullamcorper bibendum. Donec sit amet augue in justo fermentum facilisis vel quis quam. Vivamus eget iaculis nisi, vitae dignissim leo. Donec eget consectetur lacus. In viverra vehicula libero, quis dictum odio varius in. Phasellus aliquam elit et lectus ornare placerat. Aliquam vitae sapien facilisis, auctor enim quis, consectetur dui. Cras elementum velit eros, ut efficitur ante pellentesque in. Proin vulputate lacus dui, vitae imperdiet dui pharetra ac. Nunc sagittis, sapien et posuere varius, mauris justo tincidunt odio, in interdum lorem libero sed enim. Nulla placerat scelerisque felis vitae accumsan. Curabitur id tortor laoreet, luctus justo sit amet, viverra mi. Nunc laoreet auctor metus eget suscipit. Vestibulum vestibulum imperdiet pharetra. Sed ac dignissim dui. In vitae suscipit nunc. Praesent vel felis nulla. Nullam non justo elit. Ut quis eleifend libero. Morbi ut maximus dui, non tristique risus.
                </p>
            </igx-splitter-pane>
            <igx-splitter-pane size='50%'>
                <p>
                    Suspendisse potenti. Mauris vehicula neque ullamcorper tortor pulvinar gravida. Integer porttitor orci ex, ac vehicula nisi ultricies vel. Phasellus feugiat, urna eget congue sollicitudin, augue mi vulputate velit, in porttitor lacus orci sit amet eros. Donec mollis tempor mi. Ut sed justo consectetur, laoreet orci id, vestibulum velit. Aliquam ultricies arcu nec placerat eleifend. Integer ornare auctor mauris, vitae placerat est hendrerit ut.
                </p>
            </igx-splitter-pane>
        </igx-splitter>
    </igx-splitter-pane>
    <igx-splitter-pane size='49%'>
        <igx-splitter [type]="typeVertical" [style.width]='"100%"'>
            <igx-splitter-pane size='50%'>
                <p>
                    Duis auctor, diam id vehicula consequat, lacus tellus molestie magna, sed varius nisi quam eget nisl. Donec dignissim mi et elementum laoreet. Nam dignissim quis justo eu fermentum. Proin vestibulum, neque quis elementum tincidunt, nibh mi gravida purus, eget volutpat ipsum magna in orci. Donec id mauris vitae lectus molestie blandit. Praesent non quam interdum, efficitur lacus nec, gravida mauris. Ut ac ante maximus, ultrices turpis a, aliquam magna. Praesent blandit ante ut nulla malesuada lobortis. Praesent a lobortis justo. Morbi congue, dui sed ornare faucibus, turpis felis vulputate arcu, lobortis posuere sem leo eget risus. Duis risus augue, dignissim ac tincidunt a, ullamcorper rutrum nisl. Ut ut ipsum vel purus viverra dapibus. Maecenas efficitur nibh elementum, pellentesque sapien sit amet, fermentum sem. Pellentesque nisl mi, porta eget viverra a, tincidunt ac ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>
            </igx-splitter-pane>
            <igx-splitter-pane size='50%'>
                <p>
                    Suspendisse potenti. Proin faucibus venenatis purus in pellentesque. Nunc eget justo pretium massa pellentesque sodales. Phasellus orci ligula, condimentum et faucibus id, faucibus sit amet mauris. Praesent consequat cursus mauris, eget tempus lorem. Quisque vel leo nec massa aliquam pellentesque sit amet vel erat. Phasellus at mauris laoreet, egestas magna eget, dignissim nisl. Etiam non nibh nec orci elementum facilisis a vel tortor. Praesent sagittis mattis risus non tincidunt.
                </p>
            </igx-splitter-pane>
        </igx-splitter>
    </igx-splitter-pane>
</igx-splitter>
```
```scss
p {
    padding: 0 16px;
}
```


## Keyboard navigation

Keyboard navigation is available by default in the splitter component. When you focus a splitter bar and press one of the following key combinations, the described behavior is performed.

### Key combinations

- `Arrow Up` - Moves the splitter bar _up_ in a vertical splitter
- `Arrow Down` - Moves the splitter bar _down_ in a vertical splitter
- `Arrow Left` - Moves the splitter bar _left_ in a horizontal splitter
- `Arrow Right` - Moves the splitter bar _right_ in a horizontal splitter
- `Ctrl + Arrow Up` - Expands/Collapses a pane in a vertical splitter
- `Ctrl + Arrow Down` - Expands/Collapses a pane in a vertical splitter
- `Ctrl + Arrow Left` - Expands/Collapses a pane in a horizontal splitter
- `Ctrl + Arrow Right` - Expands/Collapses a pane in a horizontal splitter

## Styling

### Splitter Theme Property Map

When you modify a primary property, all related dependent properties are automatically updated to reflect the change:

<table>
    <thead>
      <tr>
        <th>Primary Property</th>
        <th>Dependent Property</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr class="primary">
        <td><strong>$bar-color</strong></td>
        <td>$handle-color</td>
        <td>The color for the bar drag handle</td>
      </tr>
      <tr class="dependent"><td></td><td>$expander-color</td><td>The color for the arrow expander</td></tr>
      <tr class="dependent"><td></td><td>$focus-color</td><td>The color used for focused splitter bar</td></tr>
    </tbody>
</table>

To get started with styling the **igxSplitter** component, you need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

You can change the default styles of the splitter by creating a new theme that extends the [`splitter-theme`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-splitter-theme). By providing just the base parameters, the theme will automatically generate all necessary styles for the interaction states.

```scss
// In splitter-styling-sample.component.scss

$splitter-theme: splitter-theme(
  $bar-color: #011627,
  $handle-color: #ecaa53,
  $expander-color: #ecaa53,
  $size: 4px
);
```

### Using CSS Variables

The next step is to pass the custom splitter theme:

```scss
:host {
    @include tokens($custom-splitter-theme);
}
```

### Demo

This is the final result from applying your new theme.


```typescript
import { Component } from '@angular/core';
import { IgxSplitterComponent, IgxSplitterPaneComponent, SplitterType } from 'igniteui-angular/splitter';

@Component({
    selector: 'app-splitter-styling-sample',
    styleUrls: ['splitter-styling-sample.component.scss'],
    templateUrl: 'splitter-styling-sample.component.html',
    imports: [IgxSplitterComponent, IgxSplitterPaneComponent]
})
export class SplitterStylingSampleComponent {
    public type = SplitterType.Horizontal;
}
```
```html
<igx-splitter style='height: 100vh;' [style.width]='"100%"'>
    <igx-splitter-pane>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in lacus eget turpis congue fermentum. Aliquam sollicitudin massa vel ullamcorper bibendum. Donec sit amet augue in justo fermentum facilisis vel quis quam. Vivamus eget iaculis nisi, vitae dignissim leo. Donec eget consectetur lacus. In viverra vehicula libero, quis dictum odio varius in. Phasellus aliquam elit et lectus ornare placerat. Aliquam vitae sapien facilisis, auctor enim quis, consectetur dui. Cras elementum velit eros, ut efficitur ante pellentesque in. Proin vulputate lacus dui, vitae imperdiet dui pharetra ac. Nunc sagittis, sapien et posuere varius, mauris justo tincidunt odio, in interdum lorem libero sed enim. Nulla placerat scelerisque felis vitae accumsan. Curabitur id tortor laoreet, luctus justo sit amet, viverra mi. Nunc laoreet auctor metus eget suscipit. Vestibulum vestibulum imperdiet pharetra. Sed ac dignissim dui. In vitae suscipit nunc. Praesent vel felis nulla. Nullam non justo elit. Ut quis eleifend libero. Morbi ut maximus dui, non tristique risus.
        </p>
    </igx-splitter-pane>
    <igx-splitter-pane>
        <p>
            Duis auctor, diam id vehicula consequat, lacus tellus molestie magna, sed varius nisi quam eget nisl. Donec dignissim mi et elementum laoreet. Nam dignissim quis justo eu fermentum. Proin vestibulum, neque quis elementum tincidunt, nibh mi gravida purus, eget volutpat ipsum magna in orci. Donec id mauris vitae lectus molestie blandit. Praesent non quam interdum, efficitur lacus nec, gravida mauris. Ut ac ante maximus, ultrices turpis a, aliquam magna. Praesent blandit ante ut nulla malesuada lobortis. Praesent a lobortis justo. Morbi congue, dui sed ornare faucibus, turpis felis vulputate arcu, lobortis posuere sem leo eget risus. Duis risus augue, dignissim ac tincidunt a, ullamcorper rutrum nisl. Ut ut ipsum vel purus viverra dapibus. Maecenas efficitur nibh elementum, pellentesque sapien sit amet, fermentum sem. Pellentesque nisl mi, porta eget viverra a, tincidunt ac ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
    </igx-splitter-pane>
</igx-splitter>
```
```scss
@use "layout.scss";
@use "igniteui-angular/theming" as *;

$splitter-theme: splitter-theme(
  $bar-color: #011627,
  $handle-color: #ecaa53,
  $expander-color: #ecaa53,
  $size: 4px
);

:host {
  @include tokens($splitter-theme);
}
```

### Styling with Tailwind

You can style the splitter using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-splitter`, `dark-splitter`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [splitter-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-splitter-theme). The syntax is as follows:

```html
<igx-splitter
  class="!light-splitter ![--bar-color:#7B9E89]">
  ...
</igx-splitter>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

### Custom sizing

You can either use the `--size` variable, targeting the `igx-splitter` directly:

```scss
igx-splitter {
  --size: 10px;
}
```

Or you can use the universal `--ig-splitter-size` variable to target all instances:

```html
<div class="my-app">
  <igx-splitter></igx-splitter>
</div>
```

```scss
.my-app {
  --ig-splitter-size: 10px;
}
```

## API References

<div class="divider--half"></div>

- [IgxSplitterComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsplittercomponent.html)
- [IgxSplitterPaneComponent](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxsplitterpanecomponent.html)
- [SplitterType](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/splittertype.html)
- [IgxSplitterComponent Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-splitter-theme)

<div class="divider--half"></div>

## Theming Dependencies

- [IgxDropDown Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-drop-down-theme)
- [IgxIcon Styles](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#function-icon-theme)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)


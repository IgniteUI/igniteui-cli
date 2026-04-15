---
title: Manage Angular Page Layout | Dock Manager | Ignite UI | Infragistics
_description: Learn how the Dock Manager lets you customize the layout of your Angular application via panes that can be pinned, resized, moved, and hidden.
_keywords: manage angular page layout, Ignite UI for Angular, Infragistics
_license: commercial
_tocName: Dock Manager
_premium: true
---

# Dock Manager

The Ignite UI Dock Manager component provides means to manage the layout of your application through panes, allowing your end-users to customize it further by pinning, resizing, moving and hiding panes.

## Angular Dock Manager Example


```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IgcDockManagerLayout,
         IgcDockManagerPaneType,
         IgcSplitPaneOrientation } from 'igniteui-dockmanager';

@Component({
    selector: 'app-dock-manager',
    styleUrls: ['./dock-manager.component.scss'],
    templateUrl: './dock-manager.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DockManagerComponent {
    public layout: IgcDockManagerLayout = {
        rootPane: {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            panes: [
                {
                    type: IgcDockManagerPaneType.splitPane,
                    orientation: IgcSplitPaneOrientation.vertical,
                    panes: [
                        {
                            type: IgcDockManagerPaneType.contentPane,
                            contentId: 'content1',
                            header: 'Content Pane 1'
                        },
                        {
                            type: IgcDockManagerPaneType.contentPane,
                            contentId: 'content2',
                            header: 'Unpinned Pane 1',
                            isPinned: false
                        }
                    ]
                },
                {
                    type: IgcDockManagerPaneType.splitPane,
                    orientation: IgcSplitPaneOrientation.vertical,
                    size: 200,
                    panes: [
                        {
                            type: IgcDockManagerPaneType.documentHost,
                            size: 200,
                            rootPane: {
                                type: IgcDockManagerPaneType.splitPane,
                                orientation: IgcSplitPaneOrientation.horizontal,
                                allowEmpty: true,
                                panes: [
                                    {
                                        type: IgcDockManagerPaneType.tabGroupPane,
                                        panes: [
                                            {
                                                type: IgcDockManagerPaneType.contentPane,
                                                header: 'Document 1',
                                                contentId: 'content3',
                                                documentOnly: true
                                            },
                                            {
                                                type: IgcDockManagerPaneType.contentPane,
                                                header: 'Document 2',
                                                contentId: 'content4',
                                                documentOnly: true
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            type: IgcDockManagerPaneType.contentPane,
                            contentId: 'content5',
                            header: 'Unpinned Pane 2',
                            isPinned: false
                        }
                    ]
                },
                {
                    type: IgcDockManagerPaneType.splitPane,
                    orientation: IgcSplitPaneOrientation.vertical,
                    panes: [
                        {
                            type: IgcDockManagerPaneType.tabGroupPane,
                            size: 200,
                            panes: [
                                {
                                    type: IgcDockManagerPaneType.contentPane,
                                    contentId: 'content6',
                                    header: 'Tab 1'
                                },
                                {
                                    type: IgcDockManagerPaneType.contentPane,
                                    contentId: 'content7',
                                    header: 'Tab 2'
                                },
                                {
                                    type: IgcDockManagerPaneType.contentPane,
                                    contentId: 'content8',
                                    header: 'Tab 3'
                                },
                                {
                                    type: IgcDockManagerPaneType.contentPane,
                                    contentId: 'content9',
                                    header: 'Tab 4'
                                },
                                {
                                    type: IgcDockManagerPaneType.contentPane,
                                    contentId: 'content10',
                                    header: 'Tab 5'
                                }
                            ]
                        },
                        {
                            type: IgcDockManagerPaneType.contentPane,
                            contentId: 'content11',
                            header: 'Content Pane 2'
                        }
                    ]
                }
            ]
        },
        floatingPanes: [
            {
                type: IgcDockManagerPaneType.splitPane,
                orientation: IgcSplitPaneOrientation.horizontal,
                floatingHeight: 150,
                floatingWidth: 250,
                floatingLocation: { x: 300, y: 200 },
                panes: [
                    {
                        type: IgcDockManagerPaneType.contentPane,
                        contentId: 'content12',
                        header: 'Floating Pane'
                    }
                ]
            }
        ]
    };
}
```
```html
<igc-dockmanager [layout]=layout style="height: 600px;">
    <div slot="content1" class="dockManagerContent">Content 1</div>
    <div slot="content2" class="dockManagerContent">Content 2</div>
    <div slot="content3" class="dockManagerContent">Content 3</div>
    <div slot="content4" class="dockManagerContent">Content 4</div>
    <div slot="content5" class="dockManagerContent">Content 5</div>
    <div slot="content6" class="dockManagerContent">Content 6</div>
    <div slot="content7" class="dockManagerContent">Content 7</div>
    <div slot="content8" class="dockManagerContent">Content 8</div>
    <div slot="content9" class="dockManagerContent">Content 9</div>
    <div slot="content10" class="dockManagerContent">Content 10</div>
    <div slot="content11" class="dockManagerContent">Content 11</div>
    <div slot="content12" class="dockManagerContent">Content 12</div>
</igc-dockmanager>
```
```scss
.dockManagerContent {
    padding: 0.5rem;
}
```


<div class="divider--half"></div>


## Usage

The Dock Manager is a standard [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) and as such can be used in an Angular application.

Follow the steps below to add the Dock Manager package to your Angular project and set it up in order to use the component.

First, install the `igniteui-dockmanager` package

```cmd
npm install igniteui-dockmanager
```

Then, include the `CUSTOM_ELEMENTS_SCHEMA` schema in the `AppModule`:

```typescript
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
    ...
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

Next, one should call the `defineComponents()` function in the `main.ts` file:

```typescript
import { AppModule } from './app/app.module';
import { defineComponents } from 'igniteui-dockmanager';
import { enableProdMode } from '@angular/core';
import { environment } from '.environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));

defineComponents(IgcDockManagerComponent);
```

This is it, you are now ready to use the Dock Manager component in an Angular component template. To do so simply use its tag name:

```html
<igc-dockmanager>
</igc-dockmanager>
```

For further information on the usage of the Dock Manager component, you can check out [this topic]({environment:infragisticsBaseUrl}/products/ignite-ui-web-components/web-components/components/dock-manager.html).

For a more advanced example of the usage of the Dock Manager component with panes hosting various Ignite UI for Angular components, see this version of the [data analysis sample](./general/data-analysis.md#data-analysis-with-dockmanager).

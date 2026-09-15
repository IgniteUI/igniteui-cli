---
title: Free Angular Data Grid (Open Source) - Ignite UI Grid Lite | MIT license
_description: Create apps with our open-source Angular Grid Lite. It’s lightweight and packed with essential features - filtering, hiding, sorting, and more. Try now.
_keywords: overview, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
_tocName: Grid Lite
---

# Free & Open-Source Angular Data Grid (Grid Lite)

The Ignite UI for Angular Grid Lite is a lightweight, high-performance Angular data grid that’s free to use, open-source, and built for modern Angular applications.

This free Angular data grid is open-source JavaScript data grid built as a Web Component, which means you can use it dependency-free with or without a web framework. It delivers essential data-display functionality with minimal overhead and the performance users expect. The Angular Grid Lite is designed for developers who need fast and lightweight data presentation.

## What You Get with our Free Angular Data Grid

Our free, open-source Angular Grid Lite comes with the following column-based features: sorting, filtering, hiding, resizing and a variety of pre-defined data types. Blazing-fast performance is delivered with the use of row virtualization. In addition, the component supports keyboard navigation and theming through the [Ignite UI Theming Framework](../themes.md).

Angular <a href="https://custom-elements-everywhere.com/#angular" target="_blank">supports</a> custom elements, so you can use Grid Lite with ease.

## Grid Lite in Action

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    defineComponents,
    IgcRatingComponent
} from 'igniteui-webcomponents';
import { GridLiteDataService, User } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective } from 'igniteui-angular/grids/lite';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxSelectComponent } from 'igniteui-angular/select';
import { IgxBadgeComponent, IgxBadgeModule } from 'igniteui-angular/badge';
import { IgxChipComponent } from 'igniteui-angular';


defineComponents(
    IgcRatingComponent
);

@Component({
    selector: 'app-grid-lite-overview',
    templateUrl: './grid-lite-overview.component.html',
    styleUrls: ['./grid-lite-overview.component.scss'],
    imports: [
        CommonModule,
        IgxGridLiteComponent,
        IgxGridLiteColumnComponent,
        IgxAvatarComponent,
        IgxGridLiteCellTemplateDirective,
        IgxCheckboxComponent,
        IgxSelectComponent,
        IgxBadgeModule,
        IgxBadgeComponent,
        IgxChipComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteOverviewComponent implements OnInit {
    private dataService = inject(GridLiteDataService);

    public data: User[] = [];

    ngOnInit() {
        this.data = this.dataService.generateUsers(1000);
    }

    public getDepartmentBadgeVariant = (status: string): string => {
        switch (status) {
            case "Engineering":
                return "primary";
            case "Marketing":
                return "warning";
            case "Sales":
                return "error";
            case "Finance":
                return "success";
            default:
                return "primary";
        }
    };

    public getEmploymentTypeOutline = (type: string): string => {
        switch (type) {
            case 'Full-Time': return 'outline-success';
            case 'Part-Time': return 'outline-warning';
            case 'Contract': return 'outline-primary';
            default: return 'outline-primary';
        }
    };
}
```
```html
<div class="grid-lite-wrapper">
    <igx-grid-lite [data]="data">

        <!-- Avatar -->
        <igx-grid-lite-column field="avatar" header="Avatar">
            <ng-template igxGridLiteCell let-value>
                <igx-avatar shape="circle" alt="User avatar" [src]="value">
                </igx-avatar>
            </ng-template>
        </igx-grid-lite-column>

        <!-- First & Last Name -->
        <igx-grid-lite-column field="firstName" header="First Name" sortable filterable
            resizable></igx-grid-lite-column>
        <igx-grid-lite-column field="lastName" header="Last Name" sortable filterable resizable></igx-grid-lite-column>

        <!-- Satisfaction Rating -->
        <igx-grid-lite-column field="satisfaction" header="Satisfaction Rating" dataType="number" sortable filterable
            resizable>
            <ng-template igxGridLiteCell let-value>
                <igc-rating [value]="value" [readonly]="true" [min]="0" [max]="5" [step]="0.01"></igc-rating>
            </ng-template>
        </igx-grid-lite-column>

        <!-- Employment Type -->
        <igx-grid-lite-column field="employmentType" header="Employment Type" sortable filterable resizable>
            <ng-template igxGridLiteCell let-value>
                <igx-chip [ngClass]="getEmploymentTypeOutline(value)">
                    {{ value }}
                </igx-chip>
            </ng-template>
        </igx-grid-lite-column>

        <!-- Email -->
        <igx-grid-lite-column field="email" header="Email Address" resizable></igx-grid-lite-column>

        <!-- Department -->
        <igx-grid-lite-column field="department" header="Department" sortable filterable resizable>
            <ng-template igxGridLiteCell let-value>
                <igx-chip [ngClass]="getDepartmentBadgeVariant(value)">
                    {{ value }}
                </igx-chip>
            </ng-template>
        </igx-grid-lite-column>

        <!-- Registered On -->
        <igx-grid-lite-column field="registeredAt" header="Registered On" sortable resizable>
            <ng-template igxGridLiteCell let-value>
                <span>{{ value | date:'medium' }}</span>
            </ng-template>
        </igx-grid-lite-column>

    </igx-grid-lite>
</div>
```
```scss
:host {
  contain: strict;
  min-height: 400px;
  --ig-size: 1;
}

.grid-lite-wrapper {
  width: 100%;
  height: 100%;
}

igx-grid-lite {
  min-height: 75vh;
}

.avatar-name {
  display: flex;
  align-items: center;
  gap: 8px;
}

.avatar-name span {
  font-weight: 500;
  font-size: 0.95rem;
}

igx-badge {
  --size: 28px;
  font-size: calc(var(--size) / 2.2);
  line-height: normal;
  font-weight: 500;
  text-transform: capitalize;
}

.badge-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;
}

igc-rating {
  display: block;
  margin: 0 auto;
}

.success {
  --background: #4caf50;
  --hover-background: #45a049;
  --focus-background: #388e3c;
}

.warning {
  --background: #ffb74d;
  --hover-background: #ffa726;
  --focus-background: #fb8c00;
}

.primary {
  --background: #64b5f6;
  --hover-background: #42a5f5;
  --focus-background: #1e88e5;
}

.error {
  --background: #e57373;
  --hover-background: #ef5350;
  --focus-background: #f44336;
}

.outline-success {
  --background: transparent;
  --border-color: #4caf50;
}

.outline-warning {
  --background: transparent;
  --border-color: #ffb74d;
}

.outline-primary {
  --background: transparent;
  --border-color: #64b5f6;
}
```

## Installation and Setup
To use Grid Lite in your application you can import it directly from `igniteui-angular` through this entry point `igniteui-angular/grids/lite`. But you also need to install the `igniteui-grid-lite` package that powers the UI. IgxGridLiteComponent provides Angular bindings (events, templates, DI, change detection, pipes), while the visual grid lite UI is rendered by `igniteui-grid-lite`. Installing both ensures the grid lite behaves natively in Angular while leveraging the full `igniteui-grid-lite` UI.

```shell
npm install igniteui-grid-lite
```

Before starting the application, make sure to import and pass the custom element schema as shown below.

```typescript
// app.component.ts

import { Component } from '@angular/core';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent } from 'igniteui-angular/grids/lite';

@Component({
  ...
  imports: [IgxGridLiteComponent, IgxGridLiteColumnComponent],
  template: `
    <div>
      <igx-grid-lite [data]="products">
        <igx-grid-lite-column field="id" header="ID" dataType="number"></igx-grid-lite-column>
        <igx-grid-lite-column field="name" header="Name"></igx-grid-lite-column>
        <!-- Additional columns -->
      </igx-grid-lite>
    </div>
  `
})
export class AppComponent {
  products: Products[] = [...];
}
```

## Features

### Performance Built In

When you use our Angular data grid for free, you are enabled to implement row-level virtualization. This allows you to render unlimited amounts of data with smooth scrolling.

### Automatic Column Types

Column types are automatically generated base on your data source with built-in filtering based on column type.

### Custom Column Templates

With our Angular data grid open-source control you can also deliver any type of UX with column templates. Anything you imagine can render in a grid column!

### Interactive Features

All the core interactive features your users expect, like column filtering, column hiding, column resizing, columns sorting, and more!

### Beautiful UX & Branding

This free Angular data grid (Grid Lite) comes with built-in theme support for Bootstrap, Material & Fluent, plus endless branding options in color palettes, fonts, elevation, display density & more.

### Rich Keyboard Navigation

Full Excel-style keyboard navigation gives user the experience they expect with high-performance keyboard navigation.

## Is Grid Lite a Free & Open-Source Angular Data Grid?

Yes. Ignite UI Grid Lite is a free, open-source Angular data grid released under the MIT license. You can use it in commercial or personal projects with no licensing fees. It is part of our initiative to make Ignite UI more open, transparent, and accessible.

- MIT-licensed

- Free for commercial use

- Community-driven development

- No feature gating

However, if your project scales and grows in complexity and functionality, and you require an enterprise-grade application, we have a seamless upgrade strategy. It will make the transitioning from the free Angular data grid (Grid Lite) to the full-featured and advanced Data Grid simpler and faster.

Angular supports custom elements, so you can use Grid Lite with ease.

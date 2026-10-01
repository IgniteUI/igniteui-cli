---
title: "Angular Accordion Component | Layouts | Infragistics"
description: "Angular Accordion is a layout component for organizing expandable and collapsible content panels in a vertical container."
keywords: "Angular Accordion, accordion component, expandable panels, Ignite UI for Angular, Infragistics"
license: MIT
last_updated: "2026-07-30"
mentionedTypes: ["Accordion", "ExpansionPanel"]
namespace: Infragistics.Controls
relatedComponents: ["ExpansionPanel"]
llms:
  description: "The Ignite UI for Angular Accordion helps developers group related content into expandable and collapsible panels inside a vertical layout."
_tocName: Accordion
---
# Accordion Component

The Ignite UI for Angular Accordion is a layout component for organizing expandable content panels in a single vertical container.

## Live Demo

```typescript
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-accordion-overview',
    styleUrls: ['./accordion-overview.component.scss'],
    templateUrl: './accordion-overview.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxSwitchComponent, FormsModule, IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent]
})
export class AccordionOverviewComponent {
    public singleBranchExpand = false;
}
```
```html
<div class="accordion-sample">
    <div class="accordion-content">
        <div class="accordion-toolbar">
            <igx-switch [(ngModel)]="singleBranchExpand">Single Expand</igx-switch>
        </div>

        <igx-accordion [singleBranchExpand]="singleBranchExpand">
            <igx-expansion-panel [collapsed]="false">
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Account</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Profile and security settings</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p>Update your profile details, password, and sign-in preferences.</p>
                </igx-expansion-panel-body>
            </igx-expansion-panel>
            <igx-expansion-panel>
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Notifications</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Email and product updates</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p>Choose which notifications you receive and how often they are delivered.</p>
                </igx-expansion-panel-body>
            </igx-expansion-panel>
            <igx-expansion-panel>
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Billing</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Payment and invoice settings</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p>Manage payment methods, billing contacts, and invoice delivery options.</p>
                </igx-expansion-panel-body>
            </igx-expansion-panel>
        </igx-accordion>
    </div>
</div>
```
```scss
.accordion-sample {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

.accordion-content {
    width: min(720px, 100%);
    margin: 0 auto;
    padding: 24px;
    box-sizing: border-box;
}

.accordion-toolbar {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 12px;
}

igx-accordion {
    display: block;
    border: 1px solid var(--ig-gray-300);
    border-radius: 4px;
}
```

## Anatomy

The accordion structure consists of an accordion container with one or more expansion panel children.

**Angular Accordion anatomy anatomy:** The accordion anatomy labels the accordion host and child expansion panel structure.

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Header:</strong> displays the section title and description and can be clicked to reveal or hide the panel's content<br />
<strong>2. Icon:</strong> indicates if the panel is open or closed. Could be placed on the left or on the right side of the header<br />
<strong>3. Panel:</strong> the section of content linked to an accordion header</span>

<style>{`
  .accordion-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .accordion-anatomy .igd-anatomy__image {
    max-width: 640px;
  }
`}</style>

```text
igx-accordion                         // host - manages a set of expansion panels
└─ igx-expansion-panel                 // child panel
   ├─ igx-expansion-panel-header       // panel header container
   │  ├─ igx-expansion-panel-title     // panel header title
   │  ├─ igx-expansion-panel-description // optional header description
   │  └─ igx-expansion-panel-icon      // optional custom expand/collapse icon
   └─ igx-expansion-panel-body         // expandable panel content
```

## Getting Started

Use the accordion with the Ignite UI for Angular version installed in your Angular application. Complete the shared [Getting Started](../general/getting-started.md) topic before importing the standalone accordion directives.

Import the standalone accordion directives before you use the component.

```ts
import { Component } from '@angular/core';
import { IGX_ACCORDION_DIRECTIVES } from 'igniteui-angular/accordion';

@Component({
  selector: 'app-accordion',
  imports: [IGX_ACCORDION_DIRECTIVES],
  templateUrl: './accordion.component.html',
})
export class AccordionComponent {}
```

## Usage

Build the accordion by placing one or more [`IgxExpansionPanel`](mcp:get_api_reference?platform=angular&component=IgxExpansionPanelComponent) components inside an [`IgxAccordion`](mcp:get_api_reference?platform=angular&component=IgxAccordionComponent) container.

### Single Expansion

Set [`singleBranchExpand`](mcp:get_api_reference?platform=angular&component=IgxAccordionComponent&member=singleBranchExpand) to switch between one-open-panel behavior and multiple-open-panel behavior.

```html
<igx-accordion [singleBranchExpand]="true">
  <igx-expansion-panel>
    <igx-expansion-panel-header>
      <igx-expansion-panel-title>Title Panel 1</igx-expansion-panel-title>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
      <p>Content Panel 1</p>
    </igx-expansion-panel-body>
  </igx-expansion-panel>
  <igx-expansion-panel>
    <igx-expansion-panel-header>
      <igx-expansion-panel-title>Title Panel 2</igx-expansion-panel-title>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
      <p>Content Panel 2</p>
    </igx-expansion-panel-body>
  </igx-expansion-panel>
</igx-accordion>
```

### Programmatic Expansion

Use [`collapseAll()`](mcp:get_api_reference?platform=angular&component=IgxAccordionComponent&member=collapseAll) and [`expandAll()`](mcp:get_api_reference?platform=angular&component=IgxAccordionComponent&member=expandAll) to collapse or expand the accordion panels programmatically.

**Note:** 
Calling [`expandAll()`](mcp:get_api_reference?platform=angular&component=IgxAccordionComponent&member=expandAll) expands only the last enabled panel when [`singleBranchExpand`](mcp:get_api_reference?platform=angular&component=IgxAccordionComponent&member=singleBranchExpand) is `true`.


```html
<button type="button" (click)="accordion.expandAll()">Show All</button>
<button type="button" (click)="accordion.collapseAll()">Hide All</button>

<igx-accordion #accordion>
  <igx-expansion-panel>
    <igx-expansion-panel-header>
      <igx-expansion-panel-title>Title Panel 1</igx-expansion-panel-title>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
      <p>Content Panel 1</p>
    </igx-expansion-panel-body>
  </igx-expansion-panel>
  <igx-expansion-panel>
    <igx-expansion-panel-header>
      <igx-expansion-panel-title>Title Panel 2</igx-expansion-panel-title>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
      <p>Content Panel 2</p>
    </igx-expansion-panel-body>
  </igx-expansion-panel>
</igx-accordion>
```

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';

@Component({
    selector: 'app-accordion-programmatic-expansion',
    styleUrls: ['./accordion-programmatic-expansion.component.scss'],
    templateUrl: './accordion-programmatic-expansion.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonDirective, IgxRippleDirective, IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent]
})
export class AccordionProgrammaticExpansionComponent {
}
```
```html
<div class="accordion-sample">
    <div class="accordion-content">
        <div class="accordion-toolbar">
            <button class="action-button" igxButton="contained" igxRipple type="button" (click)="accordion.expandAll()">Show All</button>
            <button class="action-button" igxButton="contained" igxRipple type="button" (click)="accordion.collapseAll()">Hide All</button>
        </div>

        <igx-accordion #accordion>
            <igx-expansion-panel [collapsed]="false">
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Billing</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Invoices and payment settings</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p>Review invoices, update payment methods, and manage billing contacts.</p>
                </igx-expansion-panel-body>
            </igx-expansion-panel>

            <igx-expansion-panel [collapsed]="false">
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Security</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Password and access controls</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p>Configure password rules, multi-factor authentication, and recovery options.</p>
                </igx-expansion-panel-body>
            </igx-expansion-panel>

            <igx-expansion-panel>
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Notifications</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Product updates and account alerts</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p>Choose which product updates and account alerts are sent to your team.</p>
                </igx-expansion-panel-body>
            </igx-expansion-panel>
        </igx-accordion>
    </div>
</div>
```
```scss
.accordion-sample {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

.accordion-content {
    width: min(720px, 100%);
    margin: 0 auto;
    padding: 24px;
    box-sizing: border-box;
}

.accordion-toolbar {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-bottom: 12px;
}

.action-button {
    min-width: 96px;
}

igx-accordion {
    display: block;
    border: 1px solid var(--ig-gray-300);
    border-radius: 4px;
}
```

### Customize Panel Content

Customize panel headers with title and description elements, and place expandable content inside the panel body.

```html
<igx-accordion>
  <igx-expansion-panel>
    <igx-expansion-panel-header>
      <igx-expansion-panel-title>Billing</igx-expansion-panel-title>
      <igx-expansion-panel-description>Payment and invoice settings</igx-expansion-panel-description>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
      <p>Update payment methods, billing contacts, and invoice delivery options.</p>
    </igx-expansion-panel-body>
  </igx-expansion-panel>
</igx-accordion>
```

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxRadioComponent } from 'igniteui-angular/radio';
import { IgxSliderComponent, IgxSliderType } from 'igniteui-angular/slider';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxTimePickerComponent } from 'igniteui-angular/time-picker';

@Component({
    selector: 'app-accordion-customization',
    styleUrls: ['./accordion-customization.component.scss'],
    templateUrl: './accordion-customization.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [FormsModule, IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent, IgxCheckboxComponent, IgxSliderComponent, IgxRadioComponent, IgxIconComponent, IgxTimePickerComponent, IgxLabelDirective]
})
export class AccordionCustomizationComponent {
    public readonly ratingOptions = [2, 3, 4, 5];
    public readonly sliderType = IgxSliderType;
    public priceRange = new PriceRange(200, 800);
    public rating = '';
    public arriveTime: Date | null = null;

    public categories = [
        { checked: false, type: 'Bike' },
        { checked: false, type: 'Motorcycle' },
        { checked: false, type: 'Car' },
        { checked: false, type: 'Taxi' },
        { checked: false, type: 'Public Transport' }
    ];

    public get selectedCategories(): string {
        return this.categories
            .filter(item => item.checked)
            .map(item => item.type)
            .join(', ');
    }

    public get time(): string {
        return this.arriveTime ? `: ${this.arriveTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : '';
    }
}

class PriceRange {
    constructor(
        public lower: number,
        public upper: number
    ) {
    }
}
```
```html
<div class="accordion-sample">
    <div class="accordion-content">
        <igx-accordion>
            <igx-expansion-panel [collapsed]="false">
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Transportation@if (selectedCategories) {<span>: {{ selectedCategories }}</span>}</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Choose how you want to travel</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p class="panel-description">Select one or more transportation options for your trip.</p>
                    <div class="categories-container">
                        @for (category of categories; track category.type) {
                            <igx-checkbox class="category-option" [(ngModel)]="category.checked">{{ category.type }}</igx-checkbox>
                        }
                    </div>
                </igx-expansion-panel-body>
            </igx-expansion-panel>

            <igx-expansion-panel>
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Budget: ${{ slider.lowerValue }} - ${{ slider.upperValue }}</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Set the price range</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p class="panel-description">Adjust the minimum and maximum cost for available options.</p>
                    <div class="range-summary">
                        <span>${{ slider.lowerValue }}</span>
                        <span>${{ slider.upperValue }}</span>
                    </div>
                    <igx-slider #slider class="cost-slider" [type]="sliderType.RANGE" [minValue]="0" [maxValue]="1000" [(ngModel)]="priceRange"></igx-slider>
                </igx-expansion-panel-body>
            </igx-expansion-panel>

            <igx-expansion-panel>
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Minimum Rating@if (rating) {<span>: {{ rating }}</span>}</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Filter by review score</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p class="panel-description">Choose the lowest rating you want to include in the results.</p>
                    <div class="rating-options">
                        @for (ratingOption of ratingOptions; track ratingOption) {
                            <igx-radio class="rating-option" [(ngModel)]="rating" [value]="ratingOption + ' stars or more'">
                                <span>{{ ratingOption }} stars or more</span>
                                <span class="rating-control">
                                    @for (star of [].constructor(ratingOption); track $index) {
                                        <igx-icon>star</igx-icon>
                                    }
                                </span>
                            </igx-radio>
                        }
                    </div>
                </igx-expansion-panel-body>
            </igx-expansion-panel>

            <igx-expansion-panel>
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Arrival Time{{ time }}</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Set the latest arrival time</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p class="panel-description">Pick the latest acceptable arrival time for your trip.</p>
                    <igx-time-picker class="time-input size-small" [(ngModel)]="arriveTime" mode="dropdown" [spinLoop]="false">
                        <label igxLabel>Arrive before</label>
                    </igx-time-picker>
                </igx-expansion-panel-body>
            </igx-expansion-panel>
        </igx-accordion>
    </div>
</div>
```
```scss
.accordion-sample {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

.accordion-content {
    width: min(760px, 100%);
    margin: 0 auto;
    padding: 24px;
    box-sizing: border-box;
}

igx-accordion {
    display: block;
    border: 1px solid var(--ig-gray-300);
    border-radius: 4px;
}

.panel-description {
    margin: 0 0 16px;
    color: var(--ig-gray-700);
}

.categories-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px 24px;
    max-width: 520px;
}

.category-option,
.rating-option {
    margin: 4px 0;
}

.range-summary {
    display: flex;
    justify-content: space-between;
    max-width: 560px;
    margin-bottom: 4px;
    font-weight: 600;
}

.cost-slider {
    max-width: 560px;
    margin: 8px 0 0;
}

.rating-options {
    display: grid;
    gap: 8px;
    max-width: 360px;
}

.rating-control {
    flex-direction: row;
}

.time-input {
    max-width: 260px;
}

.size-small {
    --ig-size: var(--ig-size-small);
}
```

### Nest Accordions

Nest an accordion inside an expansion panel when you need a second level of grouped disclosure.

```html
<igx-accordion>
  <igx-expansion-panel>
    <igx-expansion-panel-header>
      <igx-expansion-panel-title>Account Settings</igx-expansion-panel-title>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
      <igx-accordion>
        <igx-expansion-panel>
          <igx-expansion-panel-header>
            <igx-expansion-panel-title>Notifications</igx-expansion-panel-title>
          </igx-expansion-panel-header>
          <igx-expansion-panel-body>
            <p>Configure email and product notification preferences.</p>
          </igx-expansion-panel-body>
        </igx-expansion-panel>
      </igx-accordion>
    </igx-expansion-panel-body>
  </igx-expansion-panel>
</igx-accordion>
```

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

@Component({
    selector: 'app-accordion-nested-scenario',
    styleUrls: ['./accordion-nested-scenario.component.scss'],
    templateUrl: './accordion-nested-scenario.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [FormsModule, IgxSwitchComponent, IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent]
})
export class AccordionNestedScenarioComponent {
    public singleBranchExpand = false;
}
```
```html
<div class="accordion-sample">
    <div class="accordion-content">
        <div class="accordion-toolbar">
            <igx-switch [(ngModel)]="singleBranchExpand">Single Expand</igx-switch>
        </div>

        <igx-accordion [singleBranchExpand]="singleBranchExpand">
            <igx-expansion-panel [collapsed]="false">
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Workspace Settings</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Nested account, access, and billing options</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <igx-accordion [singleBranchExpand]="singleBranchExpand">
                        <igx-expansion-panel [collapsed]="false">
                            <igx-expansion-panel-header>
                                <igx-expansion-panel-title>Profile</igx-expansion-panel-title>
                                <igx-expansion-panel-description>Name, photo, and contact details</igx-expansion-panel-description>
                            </igx-expansion-panel-header>
                            <igx-expansion-panel-body>
                                <p>Update the public information shown to other workspace members.</p>
                            </igx-expansion-panel-body>
                        </igx-expansion-panel>

                        <igx-expansion-panel>
                            <igx-expansion-panel-header>
                                <igx-expansion-panel-title>Security</igx-expansion-panel-title>
                                <igx-expansion-panel-description>Password and sign-in preferences</igx-expansion-panel-description>
                            </igx-expansion-panel-header>
                            <igx-expansion-panel-body>
                                <p>Review active sessions, change your password, and configure sign-in requirements.</p>
                            </igx-expansion-panel-body>
                        </igx-expansion-panel>

                        <igx-expansion-panel>
                            <igx-expansion-panel-header>
                                <igx-expansion-panel-title>Notifications</igx-expansion-panel-title>
                                <igx-expansion-panel-description>Email and product updates</igx-expansion-panel-description>
                            </igx-expansion-panel-header>
                            <igx-expansion-panel-body>
                                <p>Choose the messages you receive for comments, assignments, and releases.</p>
                            </igx-expansion-panel-body>
                        </igx-expansion-panel>
                    </igx-accordion>
                </igx-expansion-panel-body>
            </igx-expansion-panel>

            <igx-expansion-panel>
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Team Access</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Members, roles, and permissions</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p>Invite teammates, assign roles, and review workspace permissions.</p>
                </igx-expansion-panel-body>
            </igx-expansion-panel>

            <igx-expansion-panel>
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Billing</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Plan, invoices, and payment method</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p>Manage subscription details, billing contacts, and invoice delivery.</p>
                </igx-expansion-panel-body>
            </igx-expansion-panel>
        </igx-accordion>
    </div>
</div>
```
```scss
.accordion-sample {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

.accordion-content {
    width: min(760px, 100%);
    margin: 0 auto;
    padding: 24px;
    box-sizing: border-box;
}

.accordion-toolbar {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 12px;
}

igx-accordion {
    display: block;
    border: 1px solid var(--ig-gray-300);
    border-radius: 4px;
}
```

### Do/Don't

**When to use:** Use the accordion when you need to organize secondary content, FAQ entries, settings groups, or other related vertical sections that users expand on demand. Keep panel titles short and descriptive, and enable single-expansion behavior when users should focus on one section at a time.

**When not to use:** Use the [Expansion Panel](../expansion-panel.md) when you need a single standalone expandable section instead of a coordinated container that manages multiple panels together. Do not use an accordion to hide essential primary content or to group unrelated sections.

<div class="table-responsive">
  <table class="table" style="width: 100%; table-layout: fixed; border-collapse: collapse; border: 1px solid #d3d3d3; margin-bottom: 24px;">
    <thead>
      <tr>
        <th style="width: 50%; background-color: #d3d3d3; text-align: left; padding: 16px 20px; font-size: 18px; font-weight: 500;">Do</th>
        <th style="width: 50%; background-color: #d3d3d3; text-align: left; padding: 16px 20px; font-size: 18px; font-weight: 500;">Don't</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
        <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
      </tr>
    </tbody>
  </table>
</div>

## Properties

The accordion exposes container-level controls; panel-specific state is configured on each [`IgxExpansionPanel`](mcp:get_api_reference?platform=angular&component=IgxExpansionPanelComponent).

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| [`singleBranchExpand`](mcp:get_api_reference?platform=angular&component=IgxAccordionComponent&member=singleBranchExpand) | `boolean` | `false` | Controls whether one or multiple panels can stay expanded at the same time. |
| [`panels`](mcp:get_api_reference?platform=angular&component=IgxAccordionComponent&member=panels) | `QueryList<IgxExpansionPanelComponent>` | n/a | Returns the collection of child expansion panels in the accordion. |

## Methods

Use the accordion methods when you need to change panel state from your code.

| Name | Description |
| -- | -- |
| [`expandAll`](mcp:get_api_reference?platform=angular&component=IgxAccordionComponent&member=expandAll) | Expands the available panels. |
| [`collapseAll`](mcp:get_api_reference?platform=angular&component=IgxAccordionComponent&member=collapseAll) | Collapses the available panels. |

## Styling

Style the Angular accordion with CSS parts and Ignite UI theme variables.

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';

@Component({
    selector: 'app-accordion-styling',
    styleUrls: ['./accordion-styling.component.scss'],
    templateUrl: './accordion-styling.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent]
})
export class AccordionStylingComponent {}
```
```html
<div class="accordion-sample">
    <div class="accordion-content">
        <igx-accordion>
            <igx-expansion-panel [collapsed]="false">
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Getting Started</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Setup and onboarding</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p>Find installation steps, project setup guidance, and resources for building your first application.</p>
                </igx-expansion-panel-body>
            </igx-expansion-panel>

            <igx-expansion-panel>
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Billing</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Invoices and payment methods</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p>Review invoices, update payment methods, and manage billing contacts for your account.</p>
                </igx-expansion-panel-body>
            </igx-expansion-panel>

            <igx-expansion-panel>
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Security</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Access and authentication</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p>Configure password rules, multi-factor authentication, and recovery options for your team.</p>
                </igx-expansion-panel-body>
            </igx-expansion-panel>
        </igx-accordion>
    </div>
</div>
```
```scss
@use "igniteui-angular/theming" as *;

.accordion-sample {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

.accordion-content {
    width: min(720px, 100%);
    margin: 0 auto;
    padding: 24px;
    box-sizing: border-box;
}

igx-accordion {
    display: block;
    border: 1px solid var(--ig-gray-300);
    border-radius: 4px;
}

$custom-panel-theme: expansion-panel-theme(
    $header-background: var(--ig-gray-100),
    $header-focus-background: var(--ig-primary-50),
    $body-background: var(--ig-gray-50),
    $body-color: var(--ig-gray-700),
    $header-title-color: var(--ig-gray-900),
    $header-description-color: var(--ig-gray-900),
    $header-icon-color: var(--ig-primary-500),
    $border-radius: 4px
);

:host {
    @include tokens($custom-panel-theme);
}

::ng-deep {
    .igx-expansion-panel--expanded .igx-expansion-panel__header-inner {
        background-color: var(--ig-primary-50);
    }

    .igx-expansion-panel--expanded .igx-expansion-panel__header-title,
    .igx-expansion-panel--expanded .igx-expansion-panel__header-description {
        color: var(--ig-primary-700);
    }

    .igx-expansion-panel__header-title {
        font-weight: 600;
    }
}
```

### Sass Theming

Use the `expansion-panel-theme` function to create a custom expansion panel theme, then include the generated tokens in the component stylesheet.

```scss
@use "igniteui-angular/theming" as *;

$custom-panel-theme: expansion-panel-theme(
  $header-background: #011627,
  $body-background: #f0ece7,
  $expanded-margin: 10px
);

:host {
  @include tokens($custom-panel-theme);
}
```

### Styling Variables

| Variable | What it changes |
| -- | -- |
| `$header-background` | The panel header background color. |
| `$header-focus-background` | The panel header background color when focused. |
| `$header-title-color` | The panel header title text color. |
| `$header-description-color` | The panel header description text color. |
| `$header-icon-color` | The panel header icon color. |
| `$body-background` | The panel body background color. |
| `$body-color` | The panel body text color. |
| `$expanded-margin` | The margin applied to expanded panels when they are placed inside an accordion. |
| `$border-radius` | The expansion panel border radius. |

### Styling with Tailwind

Use Tailwind utility classes with CSS part selectors when you want to keep the styling close to the component markup.

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';

@Component({
    selector: 'app-accordion-tailwind-styling',
    styleUrls: ['./accordion-tailwind-styling.component.scss'],
    templateUrl: './accordion-tailwind-styling.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxAccordionComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent]
})
export class AccordionTailwindStylingComponent {}
```
```html
<div class="accordion-tailwind-sample">
    <div class="accordion-tailwind-content box-border mx-auto w-[min(720px,100%)] p-6">
        <igx-accordion class="block rounded border border-[var(--ig-gray-300)]">
            <igx-expansion-panel class="rounded bg-[var(--ig-gray-50)] text-[var(--ig-gray-900)] ![--header-background:var(--ig-gray-100)] ![--body-background:var(--ig-gray-50)] ![--body-color:var(--ig-gray-700)] ![--header-description-color:var(--ig-gray-900)] ![--header-icon-color:var(--ig-primary-500)] ![--header-title-color:var(--ig-gray-900)]" [collapsed]="false">
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Getting Started</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Setup and onboarding</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p>Find installation steps, project setup guidance, and resources for building your first application.</p>
                </igx-expansion-panel-body>
            </igx-expansion-panel>

            <igx-expansion-panel class="rounded bg-[var(--ig-gray-50)] text-[var(--ig-gray-900)] ![--header-background:var(--ig-gray-100)] ![--body-background:var(--ig-gray-50)] ![--body-color:var(--ig-gray-700)] ![--header-description-color:var(--ig-gray-900)] ![--header-icon-color:var(--ig-primary-500)] ![--header-title-color:var(--ig-gray-900)]">
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Billing</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Invoices and payment methods</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p>Review invoices, update payment methods, and manage billing contacts for your account.</p>
                </igx-expansion-panel-body>
            </igx-expansion-panel>

            <igx-expansion-panel class="rounded bg-[var(--ig-gray-50)] text-[var(--ig-gray-900)] ![--header-background:var(--ig-gray-100)] ![--body-background:var(--ig-gray-50)] ![--body-color:var(--ig-gray-700)] ![--header-description-color:var(--ig-gray-900)] ![--header-icon-color:var(--ig-primary-500)] ![--header-title-color:var(--ig-gray-900)]">
                <igx-expansion-panel-header>
                    <igx-expansion-panel-title>Security</igx-expansion-panel-title>
                    <igx-expansion-panel-description>Access and authentication</igx-expansion-panel-description>
                </igx-expansion-panel-header>
                <igx-expansion-panel-body>
                    <p>Configure password rules, multi-factor authentication, and recovery options for your team.</p>
                </igx-expansion-panel-body>
            </igx-expansion-panel>
        </igx-accordion>
    </div>
</div>
```
```scss
.accordion-tailwind-sample {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

::ng-deep {
    .igx-expansion-panel--expanded .igx-expansion-panel__header-inner {
        background-color: var(--ig-primary-50);
    }

    .igx-expansion-panel--expanded .igx-expansion-panel__header-title,
    .igx-expansion-panel--expanded .igx-expansion-panel__header-description {
        color: var(--ig-primary-700);
    }

    .igx-expansion-panel__header-title {
        font-weight: 600;
    }
}
```

## Accessibility

The accordion supports keyboard interaction for moving focus between panels and changing their expanded state.

### Keyboard Interaction

Use the keyboard shortcuts below to move through the accordion and open or close panels.

| Key | Action |
| -- | -- |
| <kbd>Down Arrow</kbd> | Moves focus to the panel below. |
| <kbd>Up Arrow</kbd> | Moves focus to the panel above. |
| <kbd>Alt</kbd> + <kbd>Down Arrow</kbd> | Opens the focused panel. |
| <kbd>Alt</kbd> + <kbd>Up Arrow</kbd> | Closes the focused panel. |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Down Arrow</kbd> | Opens all enabled panels. If [`singleBranchExpand`](mcp:get_api_reference?platform=angular&component=IgxAccordionComponent&member=singleBranchExpand) is `true`, opens the last enabled panel. |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Up Arrow</kbd> | Closes all enabled panels. |
| <kbd>Home</kbd> | Moves focus to the first enabled panel. |
| <kbd>End</kbd> | Moves focus to the last enabled panel. |

### Screen Readers / ARIA

The accordion's accessibility semantics are provided through its child expansion panels and their headers.

- Each panel header exposes `role="button"`, `aria-expanded`, and `aria-controls`.
- Each panel body exposes `role="region"` and a label through `aria-labelledby` or `aria-label`.
- Use clear title text for each panel so assistive technologies can announce a meaningful label.
- Keep interactive content inside panel bodies in a logical tab order.

### Accessibility Compliance

Infragistics documents Ignite UI for Angular accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic. The accordion's compliance evidence comes from the child [`IgxExpansionPanel`](mcp:get_api_reference?platform=angular&component=IgxExpansionPanelComponent) components that provide the interactive headers and regions.

| Criterion | How the component complies |
| -- | -- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The accordion supports keyboard commands for moving focus and opening or closing panels. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order) | Focus moves through enabled panels in sequence, with shortcuts for jumping to the first and last panel. |

Your responsibilities:

- Provide panel titles that describe the content behind each disclosure area.
- Preserve a logical focus order in the surrounding page layout.
- Validate any custom styling against your application's contrast and focus-indicator requirements.

## API References

[`IgxAccordion`](mcp:get_api_reference?platform=angular&component=IgxAccordionComponent)
[`IgxExpansionPanel`](mcp:get_api_reference?platform=angular&component=IgxExpansionPanelComponent)

## Dependencies

The accordion depends on [`IgxExpansionPanel`](mcp:get_api_reference?platform=angular&component=IgxExpansionPanelComponent) for its visible sections.

## Additional Resources

Use these resources to continue with Ignite UI for Angular Accordion support, source, and related layout guidance.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

## Related Components

- [Expansion Panel](../expansion-panel.md) - The collapsible section the accordion is built from. See it for configuring individual panels.

## FAQ

  **Q: Should multiple accordion panels be open at the same time?**

    Allow multiple panels to stay open when users need to compare or cross-reference their content. Use single-expansion behavior when the workflow is clearer with one active section at a time.
  
  **Q: When should I avoid using an accordion?**

    Avoid using an accordion for essential, long, or comparison-heavy content that users need to read at once. Use clear headings, a separate page, or another layout when hiding the content would make it harder to find or compare.
  
  **Q: How should I write accordion headers?**

    Use short, descriptive headers that clearly identify the content revealed by each panel. Users should be able to scan the headers and decide which section to open.
  
  **Q: Can an accordion header contain other buttons or links?**

    Avoid placing other interactive controls inside an accordion header. Keep secondary actions outside the header so the panel trigger remains clear and does not contain nested interactive elements.
  


---
title: Bootstrap Theming
_description: 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, theming, bootstrap
_tocName: Bootstrap Theming
---

# Bootstrap Theming

<p class="highlight">

The Ignite UI for Angular theming engine provides an opportunity to be used in conjunction with other component libraries such as the popular [`NG Bootstrap`](https://ng-bootstrap.github.io/) based on Bootstrap’s markup and CSS.</p>
<div class="divider--half"></div>

## Overview

The Ignite UI for Angular is a complete set of Material-based UI Widgets, Components & Figma UI kits and supporting directives for Angular that enables developers to build modern high-performance apps. Our theming engine is easy to use and allows theming granularity on different levels from a single component, multiple components, or the entire suite. Therefore, some users want to take advantage of it not only with Ignite UI components but also with other libraries. In this article, we will look through the usage of Ignite UI together with Ng Bootstrap components.

## Demo

```typescript
import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { IgxDialogActionsDirective, IgxDialogComponent } from 'igniteui-angular/dialog';
import { IgxOverlayOutletDirective } from 'igniteui-angular/core';
import { IgxButtonDirective, IgxFlexDirective, IgxIconButtonDirective, IgxLayoutDirective } from 'igniteui-angular/directives';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxCardActionsComponent, IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective } from 'igniteui-angular/card';
import { IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineTitleDirective } from 'igniteui-angular/list';
import { NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbRating, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-bootstrap-sample',
    styleUrls: ['./bootstrap-sample.component.scss'],
    templateUrl: './bootstrap-sample.component.html',
    imports: [IgxButtonDirective, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, IgxAvatarComponent, IgxIconButtonDirective, IgxIconComponent, IgxLayoutDirective, IgxCardComponent, IgxFlexDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardContentDirective, NgbRating, IgxCardActionsComponent, IgxDialogComponent, IgxDialogActionsDirective, IgxSuffixDirective, IgxOverlayOutletDirective, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody, IgxListComponent, IgxListItemComponent, IgxListLineTitleDirective, IgxListActionDirective]
})

export class BootstrapComponent implements OnInit{

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    public outlet: IgxOverlayOutletDirective;

    @ViewChild('dialog', { read: IgxDialogComponent, static: true })
    public dialog: IgxDialogComponent;

    @HostBinding('class')
    public themesClass = 'light';

    public horizontal = true;

    public contacts = [
        {
          name: 'Sticker Mule Italy srl',
          amount: 85.23
        },
        {
            name: 'Dribbble Holdings Ltd.',
            amount: 472.99
        },
        {
            name: 'Printify Inc.',
            amount: 236.89
        }
    ];

    private _dialogOverlaySettings2;

    public lightTheme() {
        this.themesClass = 'light';
    }

    public darkTheme() {
        this.themesClass = 'dark';
    }

    public openDialog() {
        this._dialogOverlaySettings2.outlet = this.outlet;
        this.dialog.open(this._dialogOverlaySettings2);
    }

    public ngOnInit() {
        this._dialogOverlaySettings2 = {
            modal: true,
            outlet: this.outlet
        };
    }
}
```
```html
<nav class="navbar navbar-expand-sm bg-grays-200">
  <a class="navbar-brand"></a>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <button igxButton="flat">Dashboard</button>
      </li>
      <li class="nav-item dropdown" ngbDropdown>
        <button igxButton="flat" id="dropdownBasic1" ngbDropdownToggle>
          Campaigns
        </button>
        <div class="dropdown-menu" ngbDropdownMenu>
          <a class="dropdown-item" ngbDropdownItem href="#"
            >Lead generation</a
            >
            <a class="dropdown-item" ngbDropdownItem href="#"
              >Landing page visitors</a
              >
              <a class="dropdown-item" ngbDropdownItem href="#"
                >Create backlinks</a
                >
                <a class="dropdown-item" ngbDropdownItem href="#"
                  >Improve SEO</a
                  >
                  <a class="dropdown-item" ngbDropdownItem href="#"
                    >Refer a friend</a
                    >
                    <a class="dropdown-item" ngbDropdownItem href="#"
                      >Programmatic</a
                      >
                    </div>
                  </li>
                  <li class="nav-item">
                    <button igxButton="flat">Payouts</button>
                  </li>
                </ul>
                <div class="d-flex">
                  <igx-avatar
                    src="assets/images/avatar/2.jpg"
                    shape="circle"
                    size="small"
                  ></igx-avatar>
                  <div class="nav-item dropdown" ngbDropdown>
                    <button
                      igxIconButton="flat"
                      class="ml-2 mr-2 theme"
                      id="dropdownBasic2"
                      ngbDropdownToggle
                      >
                      <igx-icon>palette</igx-icon>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end" ngbDropdownMenu>
                      <a
                        class="dropdown-item"
                        ngbDropdownItem
                        (click)="lightTheme()"
                        >Light Theme</a
                        >
                        <a
                          class="dropdown-item"
                          ngbDropdownItem
                          (click)="darkTheme()"
                          >Dark Theme</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>

                <div igxLayout>
                  <div class="card-wrapper">
                    <igx-card [horizontal]="horizontal" elevated>
                      <div igxLayout igxLayoutDir="column" igxFlex [igxFlexGrow]="1">
                        <igx-card-header>
                          <igx-avatar
                            icon="group"
                            shape="circle"
                            size="medium"
                          ></igx-avatar>
                          <h5 igxCardHeaderTitle>Salaries</h5>
                          <h5 igxCardHeaderSubtitle>$ 346,692.72</h5>
                        </igx-card-header>

                        <igx-card-content>
                          <p>Compared to $ 341,053.43 last month</p>
                          <ngb-rating
                            [rate]="5"
                            [readonly]="true"
                            [max]="5"
                          ></ngb-rating>
                        </igx-card-content>

                        <igx-card-actions [vertical]="false">
                          <button
                            type="button"
                            class="btn btn-primary"
                            (click)="openDialog()"
                            >
                            More
                          </button>
                          <igx-dialog
                            #dialog
                            title="Confirmation"
                            message="Do you want to download the full report?"
                            >
                            <div igxDialogActions>
                              <button igxButton="flat" (click)="dialog.close()">
                                Cancel
                              </button>
                              <button igxButton="flat" (click)="dialog.close()">
                                OK
                              </button>
                            </div>
                          </igx-dialog>
                          <igx-icon class="success" igxEnd>trending_up</igx-icon>
                        </igx-card-actions>
                      </div>
                    </igx-card>
                  </div>
                  <div class="card-wrapper">
                    <igx-card [horizontal]="horizontal" elevated>
                      <div igxLayout igxLayoutDir="column" igxFlex [igxFlexGrow]="1">
                        <igx-card-header>
                          <igx-avatar
                            icon="local_shipping"
                            shape="circle"
                            size="medium"
                          ></igx-avatar>
                          <h5 igxCardHeaderTitle>Suppliers</h5>
                          <h5 igxCardHeaderSubtitle>$ 122,745.832</h5>
                        </igx-card-header>

                        <igx-card-content>
                          <p>Compared to $ 201,935.75 last month</p>
                          <ngb-rating
                            [rate]="5"
                            [readonly]="true"
                            [max]="5"
                          ></ngb-rating>
                        </igx-card-content>

                        <igx-card-actions [vertical]="false">
                          <button
                            type="button"
                            class="btn btn-primary"
                            (click)="openDialog()"
                            >
                            More
                          </button>
                          <igx-dialog
                            #dialog
                            title="Confirmation"
                            message="Do you want to download the full report?"
                            >
                            <div igxDialogActions>
                              <button igxButton="flat" (click)="dialog.close()">
                                Cancel
                              </button>
                              <button igxButton="flat" (click)="dialog.close()">
                                OK
                              </button>
                            </div>
                          </igx-dialog>
                          <igx-icon class="warning" igxEnd>error</igx-icon>
                          <igx-icon class="error" igxEnd>trending_down</igx-icon>
                        </igx-card-actions>
                      </div>
                    </igx-card>
                  </div>
                  <div class="card-wrapper">
                    <igx-card [horizontal]="horizontal" elevated>
                      <div igxLayout igxLayoutDir="column" igxFlex [igxFlexGrow]="1">
                        <igx-card-header>
                          <igx-avatar
                            icon="android"
                            shape="circle"
                            size="medium"
                          ></igx-avatar>
                          <h5 igxCardHeaderTitle>Ads & Marketing</h5>
                          <h5 igxCardHeaderSubtitle>$ 42,646.43</h5>
                        </igx-card-header>

                        <igx-card-content>
                          <p>Compared to $ 41,951.37 last month</p>
                          <ngb-rating
                            [rate]="4"
                            [readonly]="true"
                            [max]="5"
                          ></ngb-rating>
                        </igx-card-content>

                        <igx-card-actions [vertical]="false">
                          <div igxOverlayOutlet>
                            <button
                              type="button"
                              class="btn btn-primary"
                              (click)="openDialog()"
                              >
                              More
                            </button>
                            <igx-dialog
                              #dialog
                              title="Confirmation"
                              message="Do you want to download the full report?"
                              >
                              <div igxDialogActions>
                                <button
                                  igxButton="flat"
                                  (click)="dialog.close()"
                                  >
                                  Cancel
                                </button>
                                <button
                                  igxButton="flat"
                                  (click)="dialog.close()"
                                  >
                                  OK
                                </button>
                              </div>
                            </igx-dialog>
                          </div>
                          <igx-icon class="success" igxEnd>trending_up</igx-icon>
                        </igx-card-actions>
                      </div>
                    </igx-card>
                  </div>
                </div>
                <div class="sample-column">
                  <div ngbAccordion>
                    <div ngbAccordionItem>
                      <h2 ngbAccordionHeader class="m-0">
                        <button ngbAccordionButton>
                          <div
                            class="d-flex align-items-center justify-content-between"
                            >
                            <h5 class="m-0">Visa Gold</h5>
                            <h5 class="m-0">
                              Balance: <span class="ml-1 primary">$ 3543.51</span>
                            </h5>
                          </div>
                        </button>
                      </h2>
                      <div ngbAccordionCollapse>
                        <div ngbAccordionBody>
                          <ng-template>
                            <igx-list>
                              @for (contact of contacts; track contact) {
                                <igx-list-item>
                                  <span igxListLineTitle>{{ contact.name }}</span>
                                  <span igxListAction>{{ contact.amount }}</span>
                                </igx-list-item>
                              }
                            </igx-list>
                            <button igxButton="contained" class="mt-3">
                              Show more
                            </button>
                          </ng-template>
                        </div>
                      </div>
                    </div>

                    <div ngbAccordionItem>
                      <h2 ngbAccordionHeader class="m-0">
                        <button ngbAccordionButton>
                          <div
                            class="d-flex align-items-center justify-content-between"
                            >
                            <h5 class="m-0">Mastercard</h5>
                            <h5 class="m-0">
                              Balance:
                              <span class="ml-1 primary">$ 12,354.32</span>
                            </h5>
                          </div>
                        </button>
                      </h2>
                      <div ngbAccordionCollapse>
                        <div ngbAccordionBody>
                          <ng-template>
                            <igx-list>
                              @for (contact of contacts; track contact) {
                                <igx-list-item>
                                  <span igxListLineTitle>{{ contact.name }}</span>
                                  <span igxListAction>{{ contact.amount }}</span>
                                </igx-list-item>
                              }
                            </igx-list>
                            <button igxButton="contained" class="mt-3">
                              Show more
                            </button>
                          </ng-template>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
```
```scss
@use "../../../variables" as *;

$light-primary: color($light-bootstrap-palette, "primary");
$light-secondary: color($light-bootstrap-palette, "secondary");
$light-success: color($light-bootstrap-palette, "success");
$light-info: color($light-bootstrap-palette, "info");
$light-warning: color($light-bootstrap-palette, "warn");
$light-danger: color($light-bootstrap-palette, "error");

$custom-dark-palette: palette(
    $primary: #ecaa53,
    $secondary: #011627,
    $gray: #fff,
    $surface: #222
);

$dark-primary: color($custom-dark-palette, "primary");
$dark-secondary: color($custom-dark-palette, "secondary");

.d-flex.align-items-center {
    width: 100%;
    padding: 0 16px;
}

.card-wrapper {
    margin: 16px;
    flex: 1 0 25%;
}

.navbar {
    margin: 0 16px;
}

.navbar-brand {
    background-image: url("../../../assets/images/svg/arctic-blue.svg");
    background-repeat: no-repeat;
    width: 120px;
    height: 20px;
}

.navbar-collapse {
    justify-content: space-between;
}

:host {
    display: block;
    height: auto;
    min-height: 100%;

    @include typography($font-family: $bootstrap-typeface, $type-scale: $bootstrap-type-scale);

    &.light {
        @include color-classes(
            $prop: 'background',
            $prefix: 'bg'
        );

        background: color($light-bootstrap-palette, 'surface');

        .primary {
            color: $light-primary;
        }

        ::ng-deep {
            @include bootstrap-light-theme($light-bootstrap-palette);

            $theme-colors: (
                "primary": $light-primary,
                "secondary": $light-secondary,
                "success": $light-success,
                "info": $light-info,
                "warning": $light-warning,
                "danger": $light-danger
            );
        }
    }

    &.dark {
        @include color-classes(
            $prop: 'background',
            $prefix: 'bg'
        );

        background: color($custom-dark-palette, 'surface');

        .primary {
            color: $dark-primary;
        }

        .igx-card-actions .btn-primary {
            background-color: $dark-primary;
            border-color: $dark-primary;

            &:hover {
                background-color: color($custom-dark-palette, 'primary', 600);
            }
        }

        .navbar-brand {
            filter: invert(1);
        }

        ::ng-deep {
            @include bootstrap-dark-theme($custom-dark-palette);

            .accordion {
                .accordion-header,
                .accordion-button {
                    background-color: color($custom-dark-palette, 'gray', 200);
                    color: color($custom-dark-palette, 'gray', 900);
                }

                .accordion-item {
                    background-color: color($custom-dark-palette, 'surface');
                    border-color: color($custom-dark-palette, 'gray', 300);
                }
            }

            .dropdown .dropdown-menu {
                background-color: color($custom-dark-palette, 'surface');
                border-color: color($custom-dark-palette, 'gray', 300);

                .dropdown-item {
                    color: color($custom-dark-palette, 'gray', 800);

                    &:hover {
                        background-color: color($custom-dark-palette, 'gray', 200);
                    }
                }
            }

            $theme-colors: (
                "primary": $dark-primary,
                "secondary": $dark-secondary
            );
        }
    }

    &.light,
    &.dark {
        .success {
            color: $light-success;
        }

        .error {
            color: $light-danger;
        }

        .warning {
            color: $light-warning;
        }

        .igx-list {
            border: none;
            border-radius: 0;
        }

        .dropdown-toggle.theme::after {
            display: none;
        }
    }
}

::ng-deep{
    /* Importing Bootstrap .scss file. */
    @import "bootstrap/scss/bootstrap";
}
```

<div class="divider--half"></div>

## Basic Usage

### Add NG Bootstrap

If you are using Angular CLI and have an existing Angular project, you can install NG Bootstrap with the command below:

```cmd
ng add @ng-bootstrap/ng-bootstrap
```

Once installed, you have to import the NG Bootstrap main module into your _app.module.ts_ file:

```ts
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        ...,
        NgbModule,
        ...
    ]
)}
```

At this point your applications is ready to use the NG Bootstrap components. You can find more information about using the Bootstrap library at their [`official documentation`](https://ng-bootstrap.github.io/#/getting-started).

### Add Ignite UI for Angular

To install the Ignite UI for Angular package along with all of its dependencies, font imports, and styles references, run the following command in your project:

```cmd
ng add igniteui-angular
```

Then, you can use the Ignite UI components by importing their respective modules in your _app.module.ts_ file:

```ts
// manually addition of the Igx Avatar component 
import { IgxAvatarModule } from 'igniteui-angular/avatar';
// import { IgxAvatarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...,
        IgxAvatarModule,
        ...
    ]
)}
```

Follow our [`Getting Started`](../../general/getting-started.md) topic for a complete introduction about using Ignite UI for Angular in existing projects. Further information on how to import and use each of our components along with guided examples can be found in the component's documentation.

## Components

Let's see how our demo sample is done. It is a mixture of Ignite UI and NG Bootstrap components, styled to fit nicely in one application. The navigation in our example is created using the bootstrap [`navbar`](https://getbootstrap.com/docs/4.0/components/navbar/) together with [`igx-buttons`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbuttondirective.html) and [`igx-avatar`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxavatarcomponent.html). The [`dropdown`](https://ng-bootstrap.github.io/#/components/dropdown/examples) under the Campaigns button is also taken from the bootstrap library. Below the nav, we are using the [`igx-card`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcardcomponent.html) component to display some statistics. Within the cards, we have placed multiple items - [`igx-avatars`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxavatarcomponent.html) and [`igx-icons`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxiconcomponent.html) as well as bootstrap [`buttons`](https://getbootstrap.com/docs/4.0/components/buttons/) and [`ngb-ratings`](https://ng-bootstrap.github.io/#/components/rating/examples).

<img src="../../../images/igx-cards.png" alt="Ignite UI for Angular Cards" width="100%">

Clicking on the `More` buttons, you will see the [`igx-dialog`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdialogcomponent.html):

<img src="../../../images/igx-dialog.png" alt="Ignite UI for Angular Dialog" width="100%">

Next, we have added an [`ngb-accordion`](https://ng-bootstrap.github.io/#/components/accordion/examples) showing information about credit cards. Inside its content, there is an [`igx-list`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlistcomponent.html) and `igx-button`.

<img src="../../../images/ngb-accordion.png" alt="NG Bootstrap Accordion" width="100%">

Finally, we inserted an Ignite UI for Angular `icon button` in the top right corner, that changes the theme of the whole app:  

<img src="../../../images/dark-variant.png" alt="Dark Variant Theme" width="100%">

## Styling

To get started with styling components using the Ignite UI theming engine, create an scss file named of your choice that would be the base file for your global theme. We will call this file `_variables.scss`. Next, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
// _variables.scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

### Palettes

The Bootstrap library makes use of a Sass map called [`$theme-colors`](https://getbootstrap.com/docs/4.0/getting-started/theming/#theme-colors) to provide a palette composed of eight colors:

```scss
$theme-colors: (
    "primary":    $primary,
    "secondary":  $secondary,
    "success":    $success,
    "info":       $info,
    "warning":    $warning,
    "danger":     $danger,
    "light":      $light,
    "dark":       $dark
);
```

Ignite UI for Angular's [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) function generates a color palette map including `primary`, `secondary`, `gray`, `info`, `success`, `warn`, and `error` colors and their color variants. Our predefined bootstrap palette in turn consists of seven colors:

```scss
$bootstrap-palette: palette(
    $primary: #0d6efd,
    $secondary: #6c757d,
    $info: #0dcaf0,
    $success: #198754,
    $warn: #ffc107,
    $error: #dc3545,
    $surface: #f8f9fa
);
```

As you can see most of the colors in the Bootstrap palette overlap with the colors defined in the Bootstrap palette of Ignite UI for Angular. Hence, we can simply map the Bootstrap theme colors to our light or dark bootstrap palette colors.

First, we are going to define Sass variables that extract values from the [`$light-bootstrap-palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#variable-light-bootstrap-palette):

```scss
// Colors from the Ignite UI light bootstrap color palette
$light-primary: color($light-bootstrap-palette, "primary");
$light-secondary: color($light-bootstrap-palette, "secondary");
$light-success: color($light-bootstrap-palette, "success");
$light-info: color($light-bootstrap-palette, "info");
$light-warning: color($light-bootstrap-palette, "warn");
$light-danger: color($light-bootstrap-palette, "error");
```

After that, we will create a new color palette which will be used for the dark mode of the sample:

```scss
// Defining custom color palette
$custom-dark-palette: palette(
    $primary: #ecaa53,
    $secondary: #011627,
    $gray: #fff,
    $surface: #222
);

// Creating Sass variables for primary and secondary colors
$dark-primary: color($custom-dark-palette, "primary");
$dark-secondary: color($custom-dark-palette, "secondary");
```

>[!NOTE]
>Visit our [`palettes with Sass`](../sass/palettes.md) section to discover more about the palettes provided by Ignite UI for Angular and learn how to create a new one.

### Themes

In order to switch between `light` and `dark` mode, we are adding a custom class to the `host` element which will be changed on button click. In our stylesheet file, we are going to include different color palettes scoped to each class.

#### Light mode

Ignite UI for Angular comes with predefined themes inspired by the [Bootstrap 4](https://getbootstrap.com/) library. To use them, first, you have to include our `core` mixin and then our built-in theme mixin - [bootstrap-light-theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-bootstrap-light-theme). We will also make use of our predefined bootstrap palette - [$light-bootstrap-palette](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#variable-light-bootstrap-palette).

The background color for our application needs to be set explicitly on the host element. In our sample, we want to use the `surface` color of the passed palette.

At this point we have to modify the Bootstrap `$theme-colors` map with the Sass variables we created earlier:

```scss
// Make sure you always include thecore mixin first
@include core();

:host {
    &.light {
        // The background color of the application in light mode
        background: color($light-bootstrap-palette, 'surface');

        ::ng-deep {
            // Applying the igx predefined light bootstrap palette and theme
            @include bootstrap-light-theme($light-bootstrap-palette);

            $theme-colors: (
                "primary": $light-primary,
                "secondary": $light-secondary,
                "success": $light-success,
                "info": $light-info,
                "warning": $light-warning,
                "danger": $light-danger
            );
        }
    }
}
```

The `light` and `dark` colors from the `$theme-colors` map, which don't have corresponding values in the Ignite UI palettes, can also be replaced with values at our discretion. For instance:

```scss
$custom-light: color($light-bootstrap-palette, "gray", 100);
$custom-dark: color($light-bootstrap-palette, "gray", 800);

:host {
    &.light {
        ::ng-deep {
            $theme-colors: (
                "light": $custom-light,
                "dark": $custom-dark,
            );
        }
    }
}
```

#### Dark mode

For our dark variant, we are going to use our newly created `$custom-dark-palette`. We have to include it in the `dark` class styles and also modify the `$theme-colors` map with the new values.

All components in Ignite UI for Angular use colors from the passed palette, therefore they fit nicely in the dark mode without any additional adjustments. However, we have to do some more styling changes for the ng-bootstrap components:

```scss
:host {
    &.dark {
        // The background color of the application in dark mode
        background: color($custom-dark-palette, 'surface');

        ::ng-deep {
            // Applying our custom dark palette 
            @include bootstrap-dark-theme($custom-dark-palette);

            // Overriding bootstrap button colors with colors from the custom dark palette
            .igx-card-actions .btn-primary {
                background-color: $dark-primary;
                border-color: $dark-primary;

                &:hover {
                    background-color: color($custom-dark-palette, 'primary', 600);
                }
            }

            // Overriding ngb-accordion colors with colors from the custom dark palette
            .accordion {
                .card-header {
                    background-color: color($custom-dark-palette, 'gray', 200);
                    color: color($custom-dark-palette, 'gray', 900);
                }

                .card {
                    background-color: color($custom-dark-palette, 'surface');
                    border-color: color($custom-dark-palette, 'gray', 300);
                }
            }

            // Overriding bootstrap dropdown colors with colors from the custom dark palette
            .dropdown .dropdown-menu {
                background-color: color($custom-dark-palette, 'surface');
                border-color: color($custom-dark-palette, 'gray', 300);

                .dropdown-item {
                    color: color($custom-dark-palette, 'gray', 800);

                    &:hover {
                        background-color: color($custom-dark-palette, 'gray', 200);
                    }
                }
            }
            
            // Modifying the bootstrap color map
            $theme-colors: (
                "primary": $dark-primary,
                "secondary": $dark-secondary
            );
        }
    }
}
```

Lastly, we need to import the Bootstrap library - _always import it at the end!_

```scss
:host {
    ::ng-deep {
        // Importing Bootstrap .scss file
        // Make sure you always import it last
        @import "~bootstrap/scss/bootstrap";
    }
}
```

Once we are done with modifying the `$theme-colors` map, the bootstrap components will already use the colors from the igx `$light-bootstrap-palette` for the light mode, and `$custom-dark-palette` for the dark one.

>[!WARNING]
>Be sure to place the above code inside the `::ng-deep` selector to `penetrate` the [`Emulated`](../sass/component-themes.md#view-encapsulation) ViewEncapsulation.


### Generate class

The bootstrap `navbar` uses CSS classes for its background color. In our sample, we want that color to change according to the selected theme, hence we are going to use the `color-classes` mixin. It will generate CSS class names for all colors for a given property and color palette, with optional prefix and suffix attached to the class name. For the demo, we will include the mixin twice - once for the light mode with the respective `$light-bootstrap-palette` as a first value and second time for the dark mode with the `$custom-dark-palette`:

```scss
:host {
    &.light {
        @include color-classes(
            $palette: $light-bootstrap-palette,
            $prop: 'background',
            $prefix: 'bg'
        );
    }

    &.dark {
        @include color-classes(
            $palette: $custom-dark-palette,
            $prop: 'background',
            $prefix: 'bg'
        );
    }
}
```

Then, add a CSS class to your navbar component following the pattern "bg - color from the palette - color variant". In our sample app, we are using `bg-gray-200`.

### Typography

Ignite UI for Angular exposes four default type scales for each of its themes, which can be used inside the [`typography`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/typography#mixin-typography) mixin to define the global typography styles of an application. In our example, we are going to apply the bootstrap predefined `typeface` and `type-scale` but you can create custom ones if you wish.

```scss
:host {
    @include typography($font-family: $bootstrap-typeface, $type-scale: $bootstrap-type-scale);
}
```

## API References

<div class="divider--half"></div>

- [Light Bootstrap Palette](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#variable-light-bootstrap-palette)
- [Dark Bootstrap Palette](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#variable-dark-bootstrap-palette)
- [Light Bootstrap Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-bootstrap-light-theme)
- [Dark Bootstrap Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-bootstrap-dark-theme)
- [Palette Function](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette)
- [Typography Mixin](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/typography#mixin-typography)

Related topics:

- [Palettes](../sass/palettes.md)
- [Component Themes](../sass/component-themes.md)
- [Typography](../sass/typography.md)
- [Avatar Component](../../avatar.md)
- [Button Component](../../button.md)
- [Dialog Component](../../dialog.md)
- [Icon Component](../../icon.md)
- [List Component](../../list.md)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

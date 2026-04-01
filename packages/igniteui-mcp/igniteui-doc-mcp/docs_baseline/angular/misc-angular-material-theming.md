---
title: Angular Material Theming
_description: The Ignite UI for Angular theming engine makes it easy to be used together with external components imported from other theming libraries like the Angular Material library.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, theming, Angular Material, Material components
_tocName: Angular Material Theming
---

# Angular Material Theming

<p class="highlight">

The Ignite UI for Angular theming engine makes it easy to be used together with external components imported from other theming libraries like the [`Angular Material`](https://material.angular.io/) library.</p>
<div class="divider--half"></div>

## Ignite UI and Angular Material Overview

Angular Material is a UI component library for mobile and desktop Angular web applications. It includes several prebuilt themes and a great number of components that are based on the [`Material Design specification`](https://material.io/components).

The Ignite UI for Angular is a complete set of Material-based UI Widgets, Components & Figma UI kits and supporting directives for Angular that enables developers to build modern high-performance apps. Our theming engine is easy to use and allows theming granularity on different levels from a single component, multiple components, or the entire suite. Furthermore, it can be used to style components from other theming libraries with very little effort.

The following article demonstrates how to use both Ignite UI and Angular Material components in one application and how to style them to look similar.

## Angular Material Theming Example

```typescript
import { Component, HostBinding, OnInit, ViewChild, inject } from '@angular/core';
import { IgxDialogActionsDirective, IgxDialogComponent } from 'igniteui-angular/dialog';
import { IgxOverlayOutletDirective } from 'igniteui-angular/core';
import { IgxButtonDirective, IgxDividerDirective, IgxIconButtonDirective, IgxLayoutDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxCardActionsComponent, IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective, IgxCardMediaDirective } from 'igniteui-angular/card';
import { IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatToolbar } from '@angular/material/toolbar';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { MatStepper, MatStep, MatStepLabel, MatStepperNext, MatStepperPrevious } from '@angular/material/stepper';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'app-angular-sample',
    styleUrls: ['./angular-sample.component.scss'],
    templateUrl: './angular-sample.component.html',
    imports: [MatToolbar, IgxButtonDirective, MatMenuTrigger, IgxIconComponent, MatMenu, MatMenuItem, IgxLayoutDirective, IgxAvatarComponent, IgxIconButtonDirective, IgxCardComponent, IgxCardMediaDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardActionsComponent, MatButton, IgxDialogComponent, IgxDialogActionsDirective, IgxSuffixDirective, IgxOverlayOutletDirective, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent, MatSlider, MatSliderThumb, IgxDividerDirective, MatStepper, MatStep, FormsModule, ReactiveFormsModule, MatStepLabel, MatFormField, MatLabel, MatInput, MatStepperNext, MatStepperPrevious]
})

export class AngularMaterialComponent implements OnInit {
    private _formBuilder = inject(FormBuilder);
    private overlayContainer = inject(OverlayContainer);

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    public outlet: IgxOverlayOutletDirective;

    @ViewChild('dialog', { read: IgxDialogComponent, static: true })
    public dialog: IgxDialogComponent;

    @HostBinding('class')
    public themesClass: 'light' | 'dark' = 'light';

    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;

    private _dialogOverlaySettings2;

    constructor() {
        this.toggleOverlayClasses(this.themesClass);
    }

    public lightTheme() {
        this.themesClass = 'light';
        this.toggleOverlayClasses(this.themesClass);
    }

    public darkTheme() {
        this.themesClass = 'dark';
        this.toggleOverlayClasses(this.themesClass);
    }

    private toggleOverlayClasses(theme: 'light' | 'dark') {
        const overlayClasses = this.overlayContainer.getContainerElement().classList;
        overlayClasses.add('mat-menu');
    
        switch (theme) {
            case 'light':
                overlayClasses.remove('dark-menu-theme');
                overlayClasses.add('light-menu-theme');
                break;
            case 'dark':
                overlayClasses.remove('light-menu-theme');
                overlayClasses.add('dark-menu-theme');
                break;
        }
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

        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', Validators.required]
        });
    }
}
```
```html
<mat-toolbar class="bg-grays-100">
    <a class="navbar-brand">
        <svg width="134" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M32.594 20.747c.653 0 1.25-.09 1.792-.266a5.51 5.51 0 001.505-.763c.478-.346.91-.75 1.288-1.204.419-.503.796-1.039 1.127-1.603.345-.58.679-1.167 1-1.764.3-.56.632-1.103.995-1.624.34-.486.7-.882 1.078-1.19.35-.298.794-.461 1.253-.462.243 0 .51.009.805.028.294.018.618.028.973.028.383 0 .663-.052.84-.154.177-.103.266-.23.266-.378a.444.444 0 00-.161-.35c-.107-.094-.287-.145-.54-.154-.25-.013-.499-.027-.748-.042a73.437 73.437 0 00-2.24-.105c-.417-.014-.835-.02-1.253-.021-.439 0-.966.023-1.582.07-.616.046-1.26.126-1.932.238-.679.113-1.35.268-2.01.462a8.464 8.464 0 00-1.791.742c-.493.27-.928.633-1.281 1.07-.327.416-.49.899-.49 1.45 0 .345.065.646.196.903.13.256.3.469.51.637.21.168.454.294.729.378.275.084.553.126.833.126.485 0 .95-.084 1.393-.252.425-.157.82-.384 1.169-.672a3.35 3.35 0 00.805-.973c.2-.37.3-.754.3-1.155 0-.131-.001-.26-.006-.385a2.229 2.229 0 00-.05-.385l-.153.014c.028.205.042.41.042.616 0 .429-.105.807-.315 1.134-.21.326-.48.595-.812.805-.331.21-.695.368-1.092.476a4.412 4.412 0 01-1.155.16 3.18 3.18 0 01-.77-.097 2.691 2.691 0 01-.714-.287 1.706 1.706 0 01-.532-.483c-.14-.196-.21-.42-.21-.672 0-.383.107-.721.322-1.015.215-.294.51-.551.889-.77.378-.22.817-.406 1.316-.56.5-.154 1.034-.276 1.603-.364a20.28 20.28 0 011.764-.196 25.77 25.77 0 011.778-.063c.497 0 .993.01 1.49.028.248.009.477.02.687.035.21.014.385.03.525.049v.028c-.534.152-1.05.36-1.54.623-.42.231-.808.516-1.155.847-.34.326-.658.707-.952 1.14a24.28 24.28 0 00-.931 1.506c-.29.504-.59 1.03-.903 1.582a10.19 10.19 0 01-1.036 1.505c-.378.452-.8.826-1.267 1.12-.467.294-1.003.44-1.61.44-.625 0-1.085-.114-1.38-.342-.293-.23-.459-.577-.496-1.043a.852.852 0 00.385-.224c.098-.103.147-.248.147-.434 0-.196-.058-.35-.175-.462-.117-.112-.292-.168-.525-.168a.823.823 0 00-.651.28.986.986 0 00-.245.672c0 .364.098.667.294.91.196.242.439.436.728.58.29.145.602.248.938.309.31.058.623.089.938.091zm11.723 0a2.02 2.02 0 001.092-.336c.355-.224.784-.598 1.288-1.12.373-.383.73-.78 1.07-1.19.342-.411.633-.775.876-1.092l-.084-.084c-.336.453-.694.89-1.071 1.309-.238.266-.485.534-.742.805-.257.27-.509.513-.756.728-.247.214-.478.39-.693.525-.215.135-.392.203-.532.203-.196 0-.294-.112-.294-.336 0-.224.103-.5.308-.826.205-.327.43-.668.672-1.022.243-.355.467-.703.672-1.043.205-.341.308-.637.308-.89 0-.307-.084-.538-.252-.692-.168-.154-.401-.231-.7-.231-.364 0-.714.098-1.05.294a5.316 5.316 0 00-.96.72 8.581 8.581 0 00-.84.91 37.99 37.99 0 01-.692.848l-.028-.028 4.648-7.336-1.526.07-5.866 9.674 1.442-.042c.344-.646.735-1.266 1.169-1.855.257-.35.527-.7.812-1.05.285-.35.57-.663.854-.938.285-.276.555-.5.812-.672.257-.173.488-.26.693-.26a.36.36 0 01.252.106c.075.07.112.17.112.3 0 .206-.103.449-.308.729-.205.28-.43.578-.672.896a11.72 11.72 0 00-.672.973c-.205.33-.308.66-.308.987 0 .252.077.476.23.672.155.196.4.294.736.294zm4.555.084c.522 0 1.08-.11 1.673-.33.592-.219 1.21-.618 1.855-1.196.457-.42.851-.822 1.183-1.204.331-.383.641-.77.93-1.162l-.097-.098a19.93 19.93 0 01-1.932 2.142c-.476.448-.95.788-1.421 1.022-.472.233-.903.35-1.295.35-.402 0-.714-.126-.938-.378-.224-.252-.336-.58-.336-.98 0-.15.023-.318.07-.504.168-.038.382-.084.644-.14.261-.056.541-.126.84-.21.298-.084.6-.182.903-.294.303-.112.576-.243.819-.392.242-.15.44-.318.595-.504a.946.946 0 00.23-.616.745.745 0 00-.335-.651c-.224-.154-.537-.231-.938-.231-.439 0-.903.107-1.393.322-.49.214-.94.494-1.351.84a4.88 4.88 0 00-1.022 1.176c-.27.438-.406.882-.406 1.33 0 .504.154.914.462 1.232.308.317.728.476 1.26.476zm-.28-2.478c.056-.234.175-.507.357-.82.184-.316.395-.615.63-.895.238-.285.492-.525.763-.721.27-.196.522-.294.756-.294.112 0 .203.028.273.084.07.056.105.149.105.28 0 .224-.08.46-.238.707-.159.247-.371.48-.637.7a4.873 4.873 0 01-.917.588 4.25 4.25 0 01-1.092.37v.001zm11.756 2.478c.504 0 .989-.09 1.456-.266a6.17 6.17 0 001.323-.7c.415-.29.805-.619 1.169-.987.364-.37.695-.74.994-1.113.354.13.751.196 1.19.196.382 0 .781-.09 1.197-.266.415-.178.805-.43 1.169-.756l-.084-.098a3.292 3.292 0 01-.441.336c-.181.117-.37.22-.567.308a3.821 3.821 0 01-.637.224c-.22.056-.441.084-.665.084-.187 0-.367-.01-.54-.028a1.552 1.552 0 01-.496-.14c.524-.718.97-1.49 1.33-2.303.186-.421.338-.857.455-1.302a5.06 5.06 0 00.175-1.281c0-.654-.133-1.19-.4-1.61-.265-.42-.678-.63-1.238-.63-.224 0-.46.037-.707.112-.248.074-.52.252-.82.532a4.831 4.831 0 00-1.56.42 7.581 7.581 0 00-1.477.882 8.621 8.621 0 00-1.302 1.225 9.37 9.37 0 00-1.043 1.456 7.429 7.429 0 00-.686 1.575 5.462 5.462 0 00-.245 1.582c0 .336.04.655.119.959.079.303.214.574.406.812.191.238.443.427.756.567.312.14.702.21 1.169.21zm4.522-3.458a2.088 2.088 0 01-.693-.63 3.654 3.654 0 01-.441-.861 4.862 4.862 0 01-.238-.973 7.033 7.033 0 01-.07-.966c.003-.48.071-.959.203-1.421.067-.23.154-.456.259-.672.102-.21.224-.39.364-.54.205-.009.375.012.51.064a.784.784 0 01.511.532c.038.126.057.254.057.385 0 .084-.005.177-.014.28-.01.102-.024.182-.042.238l.154.014c.019-.076.035-.153.049-.231a1.67 1.67 0 00.02-.287c0-.14-.018-.28-.055-.42a1.022 1.022 0 00-.182-.371.901.901 0 00-.336-.26 1.372 1.372 0 00-.518-.111c.093-.094.2-.168.322-.224.121-.056.266-.084.434-.084.205 0 .378.046.518.14.14.093.252.221.336.385.084.163.144.352.182.567.037.214.056.443.056.686 0 .382-.033.781-.098 1.197a10.252 10.252 0 01-.721 2.464 8.971 8.971 0 01-.567 1.099zm-4.13 3.206c-.271 0-.497-.061-.68-.182a1.315 1.315 0 01-.433-.483 2.33 2.33 0 01-.231-.693 4.605 4.605 0 01-.07-.812c0-.44.051-.903.154-1.393a9.772 9.772 0 011.141-2.919c.275-.467.588-.89.938-1.267.35-.378.73-.7 1.14-.966.411-.266.85-.446 1.317-.54l.028.029a4.478 4.478 0 00-.861 1.35 4.09 4.09 0 00-.315 1.576 3.852 3.852 0 00.511 1.897c.326.57.803 1.037 1.379 1.35a7.737 7.737 0 01-.693 1.016 6.72 6.72 0 01-.966.987c-.36.298-.74.548-1.141.749-.402.2-.808.3-1.218.3v.001zm8.335.252c.588 0 1.145-.122 1.673-.364a7.033 7.033 0 001.484-.924 10.89 10.89 0 001.295-1.24 47.12 47.12 0 001.12-1.308l-.126-.056c-.234.28-.518.613-.854 1-.336.388-.707.761-1.113 1.12-.406.36-.836.666-1.288.918-.453.252-.908.378-1.365.378-.383 0-.682-.124-.896-.371a1.33 1.33 0 01-.322-.903c0-.448.093-.88.28-1.295.186-.416.415-.784.686-1.106.27-.322.56-.58.868-.77.308-.192.583-.287.826-.287.13 0 .233.046.308.14a.59.59 0 01.112.378c0 .224-.038.448-.112.672-.075.224-.145.443-.21.658.093.018.2.028.322.028.294 0 .577-.107.798-.301.112-.098.203-.22.273-.364.07-.145.105-.306.105-.483 0-.252-.126-.465-.378-.637-.252-.173-.593-.26-1.022-.26a3.75 3.75 0 00-1.442.309c-.49.203-.948.476-1.358.812a4.484 4.484 0 00-1.008 1.148 2.496 2.496 0 00-.392 1.316c0 .588.149 1.033.448 1.337.298.303.728.455 1.288.455zm5.73 0c.523 0 1.08-.11 1.674-.33.592-.219 1.21-.618 1.855-1.196.457-.42.851-.822 1.183-1.204.33-.383.641-.77.93-1.162l-.097-.098a19.93 19.93 0 01-1.932 2.142c-.476.448-.95.788-1.421 1.022-.472.233-.903.35-1.295.35-.402 0-.714-.126-.938-.378-.224-.252-.336-.58-.336-.98 0-.15.023-.318.07-.504.168-.038.382-.084.644-.14.26-.056.54-.126.84-.21.298-.084.6-.182.903-.294.303-.112.576-.243.819-.392.242-.15.44-.318.595-.504a.946.946 0 00.23-.616.745.745 0 00-.335-.651c-.224-.154-.537-.231-.938-.231-.44 0-.903.107-1.393.322-.49.214-.94.494-1.351.84a4.88 4.88 0 00-1.022 1.176c-.271.438-.406.882-.406 1.33 0 .504.154.914.462 1.232.308.317.727.476 1.259.476zm-.28-2.478a3.2 3.2 0 01.358-.82c.184-.316.395-.615.63-.895.238-.285.492-.525.763-.721.27-.196.522-.294.756-.294.112 0 .203.028.273.084.07.056.105.149.105.28 0 .224-.08.46-.238.707-.16.247-.371.48-.637.7a4.873 4.873 0 01-.917.588 4.25 4.25 0 01-1.092.37l-.001.001zm8.658 2.478c.429 0 .86-.143 1.295-.427.477-.32.92-.69 1.323-1.1.448-.447.83-.87 1.148-1.266.317-.397.597-.759.84-1.085l-.098-.056a15.45 15.45 0 01-.336.427 32.227 32.227 0 01-.987 1.169c-.182.205-.362.396-.54.574-.366.384-.77.73-1.203 1.036-.383.26-.686.392-.91.392-.234 0-.35-.117-.35-.35 0-.168.049-.371.147-.61.098-.237.226-.494.385-.77.158-.275.333-.56.525-.853.19-.294.38-.58.567-.854l.518-.77a5.91 5.91 0 00.364-.61l-1.456.085-.35.56c-.122-.3-.276-.518-.462-.658-.187-.14-.444-.21-.77-.21-.43 0-.88.114-1.351.343a5.157 5.157 0 00-2.233 2.135c-.252.457-.378.914-.378 1.372 0 .196.023.385.07.567.046.182.119.345.217.49.098.144.226.259.385.343.158.084.35.126.574.126.42 0 .812-.112 1.176-.336.364-.224.69-.5.98-.826h.028a.515.515 0 00-.042.154c-.01.065-.014.135-.014.21 0 .224.081.413.245.567.163.154.394.231.693.231zm-2.268-.476c-.29 0-.479-.1-.567-.301a1.736 1.736 0 01-.133-.707c0-.187.037-.409.112-.665a5.775 5.775 0 01.777-1.624c.182-.266.373-.507.574-.721.185-.201.397-.376.63-.518a1.26 1.26 0 01.65-.196c.271 0 .453.07.547.21.093.14.14.336.14.588 0 .177-.04.394-.12.65-.079.257-.186.53-.321.82-.277.59-.63 1.14-1.05 1.638a3.59 3.59 0 01-.623.58c-.215.155-.42.236-.616.246zm9.398.392a1.96 1.96 0 001.057-.322c.341-.215.754-.58 1.24-1.092.4-.42.779-.845 1.133-1.274l.49-.592.28-.336.126-.15-.14-.07-.756.917c-.336.406-.704.823-1.106 1.253-.513.54-.921.912-1.225 1.113-.303.2-.52.3-.65.3-.131 0-.225-.034-.28-.104a.424.424 0 01-.085-.273c0-.262.1-.544.301-.847.201-.304.423-.621.665-.952.243-.332.465-.663.665-.994.201-.332.301-.656.301-.973a.907.907 0 00-.238-.637c-.158-.173-.392-.26-.7-.26-.364 0-.728.113-1.092.337a6.326 6.326 0 00-1.022.784 8.945 8.945 0 00-.847.91c-.247.308-.436.546-.567.714l-.028-.028 1.82-2.548-1.596.056a82.312 82.312 0 01-1.477 2.485c-.499.807-.996 1.621-1.49 2.443l1.413-.042c.122-.234.285-.514.49-.84.206-.327.437-.665.693-1.015.257-.35.53-.7.82-1.05.289-.35.573-.663.853-.938.28-.276.546-.5.798-.672.252-.173.472-.26.658-.26.131 0 .23.033.294.099a.338.338 0 01.098.252c0 .214-.1.466-.3.756-.201.289-.423.595-.666.917-.242.322-.464.65-.665.987-.2.336-.3.662-.3.98 0 .252.083.476.251.672.168.196.43.294.784.294zm13.296.084c.775 0 1.466-.091 2.072-.273a6.193 6.193 0 001.666-.777c.504-.336.966-.74 1.386-1.211.42-.472.822-.992 1.204-1.561l-.098-.056c-.896 1.25-1.948 2.167-3.157 2.75-1.208.584-2.54.876-3.997.876a8.5 8.5 0 01-1.092-.084c-.361-.052-.72-.112-1.078-.182v-.028a5.116 5.116 0 001.974-.91 8.7 8.7 0 001.52-1.498c.452-.57.867-1.181 1.245-1.834.378-.654.756-1.298 1.134-1.932.378-.635.78-1.23 1.204-1.785a6.39 6.39 0 011.45-1.393c.27.158.459.37.566.637.108.266.161.576.161.93 0 .29-.056.605-.168.946a4.05 4.05 0 01-.455.952 3.35 3.35 0 01-.644.742c-.238.2-.483.3-.735.3a.5.5 0 01-.322-.111c-.093-.075-.14-.192-.14-.35 0-.16.05-.304.147-.434.098-.131.236-.243.413-.336a1.032 1.032 0 00-.602-.154c-.242 0-.431.067-.567.203a.658.658 0 00-.203.483c0 .242.117.448.35.616.234.168.528.252.882.252a3.66 3.66 0 001.106-.182c.383-.122.73-.294 1.043-.518.308-.22.57-.498.77-.82.201-.321.301-.683.301-1.084 0-.551-.151-1.013-.455-1.386a2.995 2.995 0 00-1.183-.868 5.78 5.78 0 01.784-.336c.271-.094.546-.164.826-.21l-.014-.112c-.337.036-.67.104-.994.203-.364.107-.69.217-.98.329a10.91 10.91 0 00-.952-.175 7.797 7.797 0 00-2.8.147c-.616.14-1.227.333-1.834.58-.606.248-1.19.542-1.75.883-.56.34-1.054.718-1.484 1.134a5.61 5.61 0 00-1.029 1.323c-.25.44-.382.936-.385 1.442 0 .252.038.492.112.72.075.23.187.435.336.617.15.182.33.326.54.434.21.107.445.16.706.16.495 0 .929-.1 1.302-.3a3.13 3.13 0 00.938-.756c.252-.304.444-.637.574-1.001.131-.364.196-.705.196-1.022 0-.196-.009-.393-.028-.588h-.168c.019.102.028.214.028.336v.294c0 .233-.051.504-.154.812a3.434 3.434 0 01-.448.882c-.196.28-.434.518-.714.714a1.622 1.622 0 01-.952.294 1.01 1.01 0 01-.546-.14 1.044 1.044 0 01-.357-.371 1.675 1.675 0 01-.189-.511 2.846 2.846 0 01-.056-.56c0-.56.112-1.083.336-1.568.224-.486.525-.93.903-1.33a6.882 6.882 0 011.295-1.071 9.335 9.335 0 013.073-1.281 6.875 6.875 0 011.45-.168c.391 0 .73.016 1.014.049.285.032.535.077.75.133v.028a7.783 7.783 0 00-2.129 1.505 13.468 13.468 0 00-1.589 1.925c-.451.663-.864 1.35-1.239 2.058-.364.69-.728 1.32-1.092 1.89a7.698 7.698 0 01-1.155 1.435c-.406.387-.88.618-1.42.693-.122 0-.292-.026-.512-.077a23.869 23.869 0 00-1.638-.322 5.738 5.738 0 00-.93-.077c-.467 0-.7.112-.7.336 0 .093.05.18.153.259.103.079.238.144.406.196.168.05.355.09.56.119.206.028.406.042.602.042.168 0 .355-.01.56-.028.206-.02.413-.045.623-.077.386-.06.767-.147 1.141-.26.234.066.493.124.777.176.285.05.577.098.875.14.299.042.593.074.882.098.29.023.556.035.798.035zm6.571 0c.523 0 1.08-.11 1.673-.33.593-.219 1.211-.618 1.855-1.196.458-.42.852-.822 1.183-1.204.332-.383.642-.77.931-1.162l-.098-.098a19.878 19.878 0 01-1.932 2.142c-.476.448-.95.788-1.42 1.022-.472.233-.904.35-1.296.35-.401 0-.714-.126-.938-.378-.224-.252-.336-.58-.336-.98 0-.15.024-.318.07-.504.168-.038.383-.084.644-.14.262-.056.542-.126.84-.21.299-.084.6-.182.903-.294a4.62 4.62 0 00.82-.392c.242-.15.44-.318.594-.504a.948.948 0 00.231-.616.75.75 0 00-.336-.651c-.224-.154-.536-.231-.938-.231-.438 0-.903.107-1.393.322-.49.214-.94.494-1.35.84a4.88 4.88 0 00-1.023 1.176c-.27.438-.406.882-.406 1.33 0 .504.154.914.462 1.232.308.317.728.476 1.26.476zm-.28-2.478c.056-.234.175-.507.357-.82.184-.316.395-.615.63-.895.238-.285.493-.525.763-.721.271-.196.523-.294.756-.294.112 0 .203.028.273.084.07.056.105.149.105.28 0 .224-.079.46-.238.707-.158.247-.37.48-.637.7a4.84 4.84 0 01-.917.588 4.258 4.258 0 01-1.092.37v.001zm8.657 2.478c.43 0 .861-.143 1.295-.427.477-.32.921-.69 1.323-1.1.448-.447.83-.87 1.148-1.266.318-.397.598-.759.84-1.085l-.098-.056a15.45 15.45 0 01-.336.427 32.227 32.227 0 01-.987 1.169c-.182.205-.361.396-.539.574-.366.384-.769.73-1.203 1.036-.382.26-.686.392-.91.392-.233 0-.35-.117-.35-.35 0-.168.05-.371.147-.61.098-.237.227-.494.385-.77.159-.275.334-.56.525-.853.192-.294.38-.58.567-.854.187-.276.36-.532.518-.77.159-.238.28-.441.364-.61l-1.456.085-.35.56c-.121-.3-.275-.518-.462-.658-.186-.14-.443-.21-.77-.21-.43 0-.88.114-1.35.343a4.951 4.951 0 00-1.282.896c-.382.368-.7.781-.952 1.239-.252.457-.378.914-.378 1.372 0 .196.024.385.07.567.047.182.12.345.217.49.098.144.227.259.385.343.159.084.35.126.574.126.42 0 .812-.112 1.176-.336.364-.224.69-.5.98-.826h.028a.515.515 0 00-.042.154c-.01.065-.014.135-.014.21a.75.75 0 00.245.567c.164.154.395.23.693.23l-.001.001zm-2.268-.476c-.29 0-.478-.1-.567-.301a1.748 1.748 0 01-.133-.707c0-.187.038-.409.112-.665a5.77 5.77 0 01.777-1.624c.182-.266.374-.507.574-.721.185-.201.397-.376.63-.518.22-.131.437-.196.651-.196.27 0 .453.07.546.21.094.14.14.336.14.588 0 .177-.04.394-.119.65-.08.257-.186.53-.322.82a7.47 7.47 0 01-1.05 1.638 3.52 3.52 0 01-.623.58c-.214.155-.42.236-.616.246zm4.205.252l1.414-.042c.206-.383.437-.777.693-1.183.257-.406.537-.8.84-1.183.304-.383.633-.747.987-1.092a7.835 7.835 0 011.12-.91l.028.028c-.14.214-.21.443-.21.686 0 .382.108.672.322.868.215.196.509.294.882.294.42 0 .808-.103 1.162-.308.355-.206.669-.477.924-.798l-.056-.07c-.084.084-.177.175-.28.273-.102.098-.21.189-.322.273-.111.083-.23.154-.357.21a.94.94 0 01-.385.084c-.401 0-.602-.201-.602-.602 0-.318.075-.614.224-.89.15-.275.313-.538.49-.79a28.91 28.91 0 00-.65.028c-.173.009-.32.03-.442.063a1.009 1.009 0 00-.315.14 2.07 2.07 0 00-.287.245 1.854 1.854 0 01-.308.23c-.18.118-.353.247-.518.386-.205.168-.445.385-.72.65-.276.267-.591.619-.946 1.058l-.028-.028 1.848-2.604-1.596.056c-.485.84-.973 1.666-1.463 2.478-.49.812-.973 1.628-1.449 2.45zm7.397.14c.448 0 .88-.136 1.295-.406.415-.271.894-.682 1.435-1.232.159-.16.32-.334.483-.525.163-.192.324-.383.483-.574.159-.192.31-.38.455-.567.145-.187.273-.355.385-.504l-.126-.042c-.327.429-.663.844-1.008 1.246-.345.4-.695.779-1.05 1.134a6.565 6.565 0 01-1.078.896c-.336.214-.602.322-.798.322-.205 0-.308-.126-.308-.378 0-.243.107-.558.322-.945.215-.388.504-.875.868-1.463l4.326-6.888-1.554.084-3.906 6.412a21.807 21.807 0 00-.889 1.603c-.191.396-.287.725-.287.987 0 .56.317.84.952.84z" fill="#000" id="Path1"/><path d="M12.199 18.413c0-2 1.6-.928 1.264-1.13-.336-.202-1.985 1.275-.904 1.275 1.082 0 1.537-.777.506-1.13-1.152-.393 2.407-.75 3.808.609.826.802 1.34 2.657.265 3.482M13.519.4c2.451 0 5.108.346 5.712 1.066.17.204.267.415.3.633.036.25-.01.507-.106.767-.305.829-1.086 1.676-1.803 2.472-1.096 1.225-1.498 3.24-1.407 6.412l.8-.02c-.047-2.248.269-4.024.971-5.303.665-1.21 1.684-1.955 3.056-2.217 2-.382 3.622.211 4.605 1.102.586.53.948 1.163.989 1.739.017.239-.023.466-.136.662-.12.197-.294.353-.502.451-1.836.784-3.773 2.803-5.905 6.162l.666.443c2.392-3.438 4.168-5.324 5.383-5.432a.726.726 0 01.541.158c.192.155.343.405.47.736.304.79.447 2.003.447 3.637v4.415c-2.088 5.002-7.659 5.533-9.37 5.55h-.178a2.56 2.56 0 01-.325-.016c1.342-.902 2.21-2.375 2.21-4.035 0-1.372-.593-2.616-1.557-3.516a5.446 5.446 0 00-3.725-1.443 5.446 5.446 0 00-3.725 1.443c-.964.9-1.557 2.144-1.557 3.516 0 1.29.524 2.467 1.388 3.351-.242.046-.487.07-.733.071a11.423 11.423 0 01-2.308-.194c-1.182-.221-2.484-.66-3.657-1.468C2.39 20.39.99 18.483.56 15.405c-.213-1.529-.222-2.663 0-3.4.088-.288.207-.509.382-.643.157-.12.354-.16.584-.138 1.338.121 3.536 1.92 6.629 5.259l.597-.533c-2.502-2.913-4.722-4.783-6.647-5.63a1.414 1.414 0 01-.57-.424 1.195 1.195 0 01-.232-.61c-.062-.578.18-1.261.599-1.935.887-1.426 2.594-2.812 4.387-3.14.84-.154 1.577-.096 2.209.192.63.287 1.148.8 1.566 1.526.908 1.575 1.343 4.107 1.342 7.585l.8.015c.134-3.56-.339-6.289-1.389-8.197-.4-.726-.894-1.27-1.33-1.747-.39-.429-.742-.786-.862-1.21-.08-.283-.03-.593.176-.977.175-.328.715-.521 1.382-.68C11.098.499 12.292.4 13.519.4z" stroke="#000" id="Path2"/></g></svg>
    </a>
    <button igxButton="flat">Dashboard</button>
    <button igxButton="flat" [matMenuTriggerFor]="campaigns">Campaigns
        <igx-icon>expand_more</igx-icon>
    </button>
    <mat-menu #campaigns="matMenu">
        <a mat-menu-item>Lead generation</a>
        <a mat-menu-item [matMenuTriggerFor]="visitors">Landing page visitors</a>
        <a mat-menu-item>Create backlinks</a>
        <a mat-menu-item>Improve SEO</a>
    </mat-menu>
    <mat-menu #visitors="matMenu">
        <a mat-menu-item>Fall 2020</a>
        <a mat-menu-item>Christmas 2020</a>
        <a mat-menu-item>Winter 2021</a>
        <a mat-menu-item>Easter 2021</a>
    </mat-menu>
    <button igxButton="flat">Payouts</button>
    <div igxLayout>
        <igx-avatar src="assets/images/avatar/2.jpg" shape="circle" size="small"></igx-avatar>
        <button igxIconButton="flat" class="theme" [matMenuTriggerFor]="menu">
            <igx-icon>palette</igx-icon>
        </button>
        <mat-menu #menu="matMenu">
            <button mat-menu-item (click)="lightTheme()">Light Theme</button>
            <button mat-menu-item (click)="darkTheme()">Dark Theme</button>
        </mat-menu>
    </div>
</mat-toolbar>

<div class="cards-container">
    <igx-card elevated>
        <igx-card-media height="180px">
            <img src="assets/images/card/media/card-image1.png">
        </igx-card-media>
        <igx-card-header>
            <igx-avatar src="assets/images/avatar/11.jpg" shape="circle" size="small"></igx-avatar>
            <h5 igxCardHeaderTitle>Salaries</h5>
            <h5 igxCardHeaderSubtitle>$ 346,692.72</h5>
        </igx-card-header>
        <igx-card-actions [vertical]="false">
            <button mat-stroked-button color="accent" (click)="openDialog()">More</button>
            <igx-dialog #dialog title="Confirmation" message="Do you want to download the full report?">
                <div igxDialogActions>
                    <button igxButton="flat" (click)="dialog.close()">Cancel</button>
                    <button igxButton="flat" (click)="dialog.close()">OK</button>
                </div>
            </igx-dialog>
            <igx-icon class="success" igxEnd>trending_up</igx-icon>
        </igx-card-actions>
    </igx-card>
    <igx-card elevated>
        <igx-card-media height="180px">
            <img src="assets/images/card/media/card-image2.png">
        </igx-card-media>
        <igx-card-header>
            <igx-avatar src="assets/images/avatar/8.jpg" shape="circle" size="small"></igx-avatar>
            <h5 igxCardHeaderTitle>Suppliers</h5>
            <h5 igxCardHeaderSubtitle>$ 122,745.832</h5>
        </igx-card-header>
        <igx-card-actions [vertical]="false">
            <button mat-stroked-button color="accent" (click)="openDialog()">More</button>
            <igx-dialog #dialog title="Confirmation" message="Do you want to download the full report?">
                <div igxDialogActions>
                    <button igxButton="flat" (click)="dialog.close()">Cancel</button>
                    <button igxButton="flat" (click)="dialog.close()">OK</button>
                </div>
            </igx-dialog>
            <igx-icon class="warning" igxEnd>error</igx-icon>
            <igx-icon class="error" igxEnd>trending_down</igx-icon>
        </igx-card-actions>
    </igx-card>
    <igx-card elevated>
        <igx-card-media height="180px">
            <img src="assets/images/card/media/card-image3.png">
        </igx-card-media>
        <igx-card-header>
            <igx-avatar src="assets/images/avatar/9.jpg" shape="circle" size="small"></igx-avatar>
            <h5 igxCardHeaderTitle>Ads & Marketing</h5>
            <h5 igxCardHeaderSubtitle>$ 42,646.43</h5>
        </igx-card-header>
        <igx-card-actions [vertical]="false">
            <div igxOverlayOutlet>
                <button mat-stroked-button color="accent" (click)="openDialog()">More</button>
                <igx-dialog #dialog title="Confirmation" message="Do you want to download the full report?">
                    <div igxDialogActions>
                        <button igxButton="flat" (click)="dialog.close()">Cancel</button>
                        <button igxButton="flat" (click)="dialog.close()">OK</button>
                    </div>
                </igx-dialog>
            </div>
            <igx-icon class="success" igxEnd>trending_up</igx-icon>
        </igx-card-actions>
    </igx-card>
</div>
<igx-expansion-panel class="card-panel">
    <igx-expansion-panel-header>
        <igx-expansion-panel-title>
            Visa Gold
        </igx-expansion-panel-title>
        <igx-expansion-panel-description>
            *4295
        </igx-expansion-panel-description>
        <h5>Balance: <span class="primary">$ 3543.51</span></h5>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
        <div igxLayout>
            <div class="slider-wrapper">
                <p>Daily withdrawal limit: ${{slider.value}}</p>
                <mat-slider min="100" max="1000" step="50" class="secondary">
                    <input matSliderThumb value="700" #slider>
                </mat-slider>
            </div>
            <div class="slider-wrapper">
                <p>Daily purchase limit: ${{slider2.value}}</p>
                <mat-slider min="100" max="1000" step="50" class="secondary">
                    <input matSliderThumb value="300" #slider2>
                </mat-slider>
            </div>
            <div class="slider-wrapper">
                <p>Total daily limit: ${{slider3.value}}</p>
                <mat-slider min="100" max="1000" step="50" class="secondary">
                    <input matSliderThumb value="1000" #slider3>
                </mat-slider>
            </div>
        </div>
        <igx-divider></igx-divider>
        <p>Block card</p>
        <mat-horizontal-stepper class="mb-1" #stepper>
            <mat-step [stepControl]="firstFormGroup">
                <form [formGroup]="firstFormGroup">
                    <ng-template matStepLabel>Confirm your name</ng-template>
                    <mat-form-field>
                        <mat-label>Name</mat-label>
                        <input matInput formControlName="firstCtrl" required>
                    </mat-form-field>
                    <div>
                        <button mat-button matStepperNext>Next</button>
                    </div>
                </form>
            </mat-step>
            <mat-step [stepControl]="secondFormGroup" label="Confirm your phone number ">
                <form [formGroup]="secondFormGroup">
                    <mat-form-field>
                        <mat-label>Phone</mat-label>
                        <input matInput formControlName="secondCtrl" required>
                    </mat-form-field>
                    <div>
                        <button mat-button matStepperPrevious>Back</button>
                        <button mat-button matStepperNext>Next</button>
                    </div>
                </form>
            </mat-step>
            <mat-step [stepControl]="thirdFormGroup" label="Authenticate with OTP">
                <form [formGroup]="thirdFormGroup">
                    <mat-form-field>
                        <mat-label>Password</mat-label>
                        <input matInput formControlName="thirdCtrl" type="password" required>
                    </mat-form-field>
                </form>
                <div>
                    <button mat-button matStepperPrevious>Back</button>
                    <button mat-button (click)="stepper.reset()">Done</button>
                </div>
            </mat-step>
        </mat-horizontal-stepper>
    </igx-expansion-panel-body>
</igx-expansion-panel>

<igx-expansion-panel class="card-panel">
    <igx-expansion-panel-header>
        <igx-expansion-panel-title>
            Mastercard
        </igx-expansion-panel-title>
        <igx-expansion-panel-description>
            *1138
        </igx-expansion-panel-description>
        <h5>Balance: <span class="primary">$ 12,354.32</span></h5>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
        <div igxLayout>
            <div class="slider-wrapper">
                <p>Daily withdrawal limit: ${{slider4.value}}</p>
                <mat-slider min="100" max="1000" step="50" class="secondary">
                    <input matSliderThumb value="200" #slider4>
                </mat-slider>
            </div>
            <div class="slider-wrapper">
                <p>Daily purchase limit: ${{slider5.value}}</p>
                <mat-slider min="100" max="1000" step="50" class="secondary">
                    <input matSliderThumb value="700" #slider5>
                </mat-slider>
            </div>
            <div class="slider-wrapper">
                <p>Total daily limit: ${{slider6.value}}</p>
                <mat-slider min="100" max="1000" step="50" class="secondary">
                    <input matSliderThumb value="900" #slider6>
                </mat-slider>
            </div>
        </div>
        <igx-divider></igx-divider>
        <p>Block card</p>
        <mat-horizontal-stepper class="mb-1" #stepper>
            <mat-step [stepControl]="firstFormGroup">
                <form [formGroup]="firstFormGroup">
                    <ng-template matStepLabel>Confirm your name</ng-template>
                    <mat-form-field>
                        <mat-label>Name</mat-label>
                        <input matInput formControlName="firstCtrl" required>
                    </mat-form-field>
                    <div>
                        <button mat-button matStepperNext>Next</button>
                    </div>
                </form>
            </mat-step>
            <mat-step [stepControl]="secondFormGroup" label="Confirm your phone number ">
                <form [formGroup]="secondFormGroup">
                    <mat-form-field>
                        <mat-label>Phone</mat-label>
                        <input matInput formControlName="secondCtrl" required>
                    </mat-form-field>
                    <div>
                        <button mat-button matStepperPrevious>Back</button>
                        <button mat-button matStepperNext>Next</button>
                    </div>
                </form>
            </mat-step>
            <mat-step [stepControl]="thirdFormGroup" label="Authenticate with OTP">
                <form [formGroup]="thirdFormGroup">
                    <mat-form-field>
                        <mat-label>Password</mat-label>
                        <input matInput formControlName="thirdCtrl" type="password" required>
                    </mat-form-field>
                </form>
                <div>
                    <button mat-button matStepperPrevious>Back</button>
                    <button mat-button (click)="stepper.reset()">Done</button>
                </div>
            </mat-step>
        </mat-horizontal-stepper>
    </igx-expansion-panel-body>
</igx-expansion-panel>
```
```scss
@use 'sass:map';
@use '@angular/material' as mat;
@use '../../../variables' as *;
@include mat.elevation-classes();
@include mat.app-background();

$custom-typography: mat.m2-define-typography-config(
    $font-family: $material-typeface,
    $button: mat.m2-define-typography-level(14px, $font-weight: 600)
);

$saturations: (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, A100, A200, A400, A700);

@function material-like-palette(
    $color,
    $saturations,
    $palette,
) {
    $shade: ();
    $contrast: ();
    $result: ();
    @each $saturation in $saturations {
        $shade: map.merge($shade, ($saturation: color($palette, $color, $saturation)));
        $contrast: map.merge($contrast, ($saturation: color($palette, $color, #{$saturation}-contrast)));
        $result: map.merge($shade, (contrast: $contrast));
    }

    @return $result;
}

$igx-light-palette: palette(
    $primary: #09f,
    $secondary: #e41c77,
    $surface: #fff,
    $info: #1377d5,
    $success: #4eb862,
    $warn: #fbb13c,
    $error: #ff134a,
);

$custom-dark-palette: palette(
    $primary: #206094,
    $secondary: #72da67,
    $surface: #222,
    $info: #1377d5,
    $success: #4eb862,
    $warn: #fbb13c,
    $error: #ff134a,
);

$light-palette-primary: mat.m2-define-palette(material-like-palette('primary', $saturations, $igx-light-palette));
$light-palette-accent: mat.m2-define-palette(material-like-palette('secondary', $saturations, $igx-light-palette));
$custom-mat-light-theme: mat.m2-define-light-theme((
    color: (
        primary: $light-palette-primary,
        accent: $light-palette-accent
    ),
    typography: $custom-typography
));

$dark-palette-primary: mat.m2-define-palette(material-like-palette('primary', $saturations, $custom-dark-palette));
$dark-palette-accent: mat.m2-define-palette(material-like-palette('secondary', $saturations, $custom-dark-palette));
$custom-mat-dark-theme: mat.m2-define-dark-theme((
    color: (
        primary: $dark-palette-primary,
        accent: $dark-palette-accent
    )
));

::ng-deep {
    @include mat.elevation-classes();
    @include mat.app-background();

    .mat-menu {
        @include mat.menu-theme($custom-mat-light-theme);
    }

    .dark-menu-theme {
        @include mat.menu-color($custom-mat-dark-theme);
    }
}

.navbar-brand {
    margin-right: 16px;
}

mat-toolbar div {
    margin-left: auto;

    igx-avatar {
        margin-right: 8px;
    }
}

.cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: rem(16px);
    gap: rem(16px);
    align-items: stretch;
}

.slider-wrapper {
    padding: 16px 0;
    flex: 1 0 25%;

    p {
        margin-bottom: 0;
        padding: 0 8px;
    }
}

.card-panel {
    margin: 8px 16px;
    box-shadow: elevation(2);
}

.mat-slider {
    width: 100%;
}

.mat-button, .mat-stroked-button {
    text-transform: uppercase;
}

igx-expansion-panel-header h5 {
    margin-top: 0;
}

igx-expansion-panel-body {
    padding: 16px;
}

:host {
    display: block;
    height: auto;
    min-height: 100%;

    @include typography($font-family: $material-typeface, $type-scale: $material-type-scale);

    &.light {
        @include color-classes($prop: "background", $prefix: "bg");

        background: color($igx-light-palette, 'surface');

        #Path1 {
            fill: color($igx-light-palette, 'secondary');
        }

        #Path2 {
            stroke: color($igx-light-palette, 'secondary');
            stroke-width: "0.8";
        }

        .primary {
            color: color($igx-light-palette, 'primary');
            margin-left: 32px;
        }
    }

    &.dark {
        @include color-classes($prop: "background", $prefix: "bg");

        background: color($custom-dark-palette, 'surface');

        #Path1 {
            fill: color($custom-dark-palette, 'secondary');
        }

        #Path2 {
            stroke: color($custom-dark-palette, 'secondary');
            stroke-width: "0.8";
        }

        ::ng-deep {
            @include dark-theme($custom-dark-palette);
            @include mat.all-component-colors($custom-mat-dark-theme);

            .primary {
                color: color($custom-dark-palette, 'primary', 100);
                margin-left: 32px;
            }

            .mat-mdc-slider.secondary .mdc-slider__track--inactive,
            .mat-mdc-slider.secondary .mdc-slider__thumb-knob {
                background-color: color($custom-mat-dark-theme, accent, default);
            }

            .mat-mdc-slider.secondary .mdc-slider__track--active_fill,
            .mat-mdc-slider.secondary .mdc-slider__thumb-knob {
                border-color: color($custom-mat-dark-theme, accent, default);
            }

            .mat-mdc-slider.secondary .mat-mdc-slider-visual-thumb .mat-ripple > * {
                background-color: color($custom-mat-dark-theme, accent, default);
                opacity: .12;
            }

            .mat-step-header .mat-step-icon-selected {
                background-color: color($custom-dark-palette, secondary);
            }

            .mat-stepper-horizontal,
            .mat-mdc-form-field-focus-overlay,
            .mdc-text-field--filled:not(.mdc-text-field--disabled) {
                background: color($custom-dark-palette, surface);
            }

            igx-expansion-panel h5 {
                color: color($custom-dark-palette, "gray", 800);
            }
        }
    }

    &.light,
    &.dark {
        .success {
            color: color($igx-light-palette, "success");
        }

        .error {
            color: color($igx-light-palette, "error");
        }

        .warning {
            color: color($igx-light-palette, "warn");
        }
    }

    ::ng-deep {
        @include theme($igx-light-palette);
        @include mat.all-component-themes($custom-mat-light-theme);

        .mat-mdc-slider.secondary .mdc-slider__track--inactive,
        .mat-mdc-slider.secondary .mdc-slider__thumb-knob {
            background-color: color($custom-mat-light-theme, accent, default);
        }

        .mat-mdc-slider.secondary .mdc-slider__track--active_fill,
        .mat-mdc-slider.secondary .mdc-slider__thumb-knob {
            border-color: color($custom-mat-light-theme, accent, default);
        }

        .mat-mdc-slider.secondary .mat-mdc-slider-visual-thumb .mat-ripple > * {
            background-color: color($custom-mat-light-theme, accent, default);
            opacity: .12;
        }

        .mat-stepper-horizontal.mb-1 .mat-horizontal-stepper-header-container {
            margin-bottom: 16px;
        }

        .mat-mdc-form-field-focus-overlay,
        .mdc-text-field--filled:not(.mdc-text-field--disabled) {
            background-color: color($igx-light-palette, 'surface');
        }
    }
}
```

<div class="divider--half"></div>

## Getting Started with Ignite UI and Angular Material

### How to install Angular Material

If you are using Angular CLI and have an existing Angular project, you can add Angular Material with the command below:

```cmd
ng add @angular/material
```

Then, you will have to choose one of the prebuilt themes and whether to set up global typography styles and browser animations for Angular Material. Once you're done with this configuration, your application is ready to use the Angular Material components.

You can find more information about using the Angular Material library at their [`official documentation`](https://material.angular.io/guide/getting-started).

### How to install Ignite UI for Angular

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

## Ignite UI and Angular Material components

Let's see how our demo sample is done. It is a mixture of Ignite UI and Angular Material components, styled to fit nicely in one application. The navigation in our example is created using the material [`mat-toolbar`](https://material.angular.io/components/toolbar/overview) together with [`igx-buttons`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbuttondirective.html) and [`igx-avatar`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxavatarcomponent.html). The [`menu`](https://material.angular.io/components/menu/overview) under the Campaigns button is also taken from the Angular Material library. Below the nav, we are using the [`igx-card`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxcardcomponent.html) component to display some statistics. Within the cards, we have placed multiple items - [`igx-avatars`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxavatarcomponent.html) and [`igx-icons`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxiconcomponent.html) as well as material [`buttons`](https://material.angular.io/components/button/overview).

<img src="../../../images/material-nav.png" alt="Angular Material Components Navigation" width="100%">

Clicking on the `More` buttons, you will see the [`igx-dialog`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdialogcomponent.html):

<img src="../../../images/igniteui-dialog.png" alt="Ignite UI for Angular Dialog" width="100%">

Next, we have added an [`igx-expansion-panel`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxexpansionpanelcomponent.html) showing information about some credit cards. Inside its content, there are [`mat-sliders`](https://material.angular.io/components/slider/overview), an [`igx-divider`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxdividerdirective.html) and a [`mat-stepper`](https://material.angular.io/components/stepper/overview) with [`mat-form-fields`](https://material.angular.io/components/form-field/overview).

<img src="../../../images/igx-expansion-panel.png" alt="Ignite UI for Angular Expansion Panel" width="100%">

Finally, we inserted an Ignite UI for Angular [`icon button`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxiconbuttondirective.html) in the top right corner, that changes the theme of the whole app:  

<img src="../../../images/material-dark.png" alt="Dark Variant Theme" width="100%">

## Styling Angular Components

To get started with styling components using the Ignite UI theming engine, create an scss file named of your choice that would be the base file for your global theme. We will call this file `_variables.scss`. Next, we need to import the Ignite UI and Angular Material `index` files:

```scss
// _variables.scss
```scss
@use "igniteui-angular/theming" as *;
@use "@angular/material" as mat;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

### Color Palettes

Ignite UI for Angular's [`palette`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#function-palette) function produces a color palette map including three sub-palettes for the `primary`, `secondary` and `gray` shades as well as five additional colors for `info`, `success`, `warn`, `error` and `surface`. For each color variant, our theming engine automatically generates text contrast colors at runtime, that are also included in the palette. Below, you can see the predefined light material palette:

```scss
$igx-light-palette: palette(
    $primary: #09f,
    $secondary: #e41c77
    $info: #1377d5,
    $success: #4eb862,
    $warn: #fbb13c,
    $error: #ff134a,
    $gray: #000,
    $surface: #fff
);
```

Unlike Ignite UI palettes, Angular Material color palette maps include shades for only one color and their corresponding contrast colors. For example, we can see the `$mat-purple` palette:

```scss
$light-primary-text: white;
$dark-primary-text: rgba(black, 0.87);

$mat-purple: (
  50: #f3e5f5,
  100: #e1bee7,
  ...,
  A700: #aa00ff,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    ...,
    A700: $light-primary-text,
  )
);
```

### Generating Theme Palettes

To define a theme palette, we will have to use the material `define-palette` function which generates a map of hues to colors. In our sample, we want to style Angular Material components with Ignite UI theme therefore we need to transform our `$light-material-palette` according to their structure.

To achieve this, we are going to create a Sass function with parameters for `$color`, `$saturations` and `$palette` that returns a map of all color variants followed by the contrast colors. The saturations we are using follow the [`Material Design color system`](https://material.io/design/color/the-color-system.html).

```scss
$saturations: (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, A100, A200, A400, A700);

@function material-like-palette(
    $color,
    $saturations,
    $palette,
) {
    $shade: ();
    $contrast: ();
    $result: ();
    @each $saturation in $saturations {
        $shade: map-merge($shade, (
            $saturation: color($palette, $color, $saturation)
        ));
        $contrast: map-merge($contrast, (
            $saturation: color($palette, $color, #{$saturation}-contrast)
        ));
        $result: map-merge($shade, (contrast: $contrast));
    }

    @return $result;
}
```

#### Light Theme Palette

We will define a light primary material theme palette using the `primary` color of the Ignite UI `$igx-light-palette` and our newly created `material-like-palette` function. The result has to be passed as a parameter to the `define-palette` function which will generate color values for the `default`, `lighter`, `darker` and `text` shades and add them to the palette map:

```scss
$light-palette-primary: mat.define-palette(
    material-like-palette('primary', $saturations, $igx-light-palette));
```

Let's do the same for the light accent palette:

```scss
$light-palette-accent: mat.define-palette(
    material-like-palette('secondary', $saturations, $igx-light-palette));
```

Finally, we are ready to pass the two color palettes to the `define-light-theme` function which will create an Angular Material theme with colors taken from the Ignite UI material color palette:

```scss
$custom-mat-light-theme: mat.define-light-theme((
    color: (
        primary: $light-palette-primary,
        accent: $light-palette-accent
    )
));
```

>[!NOTE]
>Visit our [`palettes with Sass`](../sass/palettes.md) section to discover more about the palettes provided by Ignite UI for Angular and learn how to create a new one.

#### Dark Theme Palette

Following the previous approach, we are going to create material palettes for the dark mode. This time, we are also going to define a custom `igx-palette`:

```scss
// Custom palette
$custom-dark-palette: palette(
    $primary: #206094,
    $secondary: #72da67,
    $surface: #222,
    $info: #1377d5,
    $success: #4eb862,
    $warn: #fbb13c,
    $error: #ff134a,
);

// Material dark primary palette
$dark-palette-primary: mat.define-palette(
    material-like-palette('primary', $saturations, $custom-dark-palette));
// Material dark accent palette
$dark-palette-accent: mat.define-palette(
    material-like-palette('secondary', $saturations, $custom-dark-palette));
// Material dark theme
$custom-mat-dark-theme: mat.define-dark-theme((
    color: (
        primary: $dark-palette-primary, 
        accent: $dark-palette-accent
    )
));
```

### Themes

In order to switch between `light` and `dark` mode, we are adding a custom `dark` class which will be changed on button click. In our stylesheet file, we are going to include different color palettes scoped to each class.

Ignite UI for Angular comes with predefined themes inspired by the [Material Design](https://material.io/design). To use them, first, you have to include our `core` mixin and then our built-in theme mixin - [theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-theme). We will also make use of our predefined material palettes - [$light-material-palette](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#variable-light-material-palette) and [$dark-material-palette](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#variable-dark-material-palette).

For the Angular Material components, we also need to include their `core` mixin and then the `all-component-themes` mixin with the aforementioned custom material themes.

```scss
// Make sure you always include the core mixin first
@include core();

::ng-deep {
    @include mat.core();
    @include theme($igx-light-palette);
    @include mat.all-component-themes($custom-mat-light-theme);

    .dark {
        @include dark-theme($custom-dark-palette);
        @include mat.all-component-themes($custom-mat-dark-theme);
    }
}
```

>[!WARNING]
>Be sure to place the above code inside the `::ng-deep` selector to `penetrate` the [`Emulated`](../sass/component-themes.md#view-encapsulation) ViewEncapsulation.

#### Light Mode

Once we are done configuring color palettes and themes, we can make some additional color changes to our components. The background color for our application needs to be set explicitly on the host element. In our sample, we want to use the `surface` color of the passed palette. The logo is an SVG image hence we can easily change its color using the CSS. Also, we will change some of the colors of the `mat-slider` component to `secondary` so that it can fit better in our app:

```scss
:host {
    &.light {
        // The background color of the application in light mode
        background: color($igx-light-palette, 'surface');

        // The application logo fill color
        #Path1 {
            fill: color($igx-light-palette, 'secondary');
        }

        // The application logo stroke color
        #Path2 {
            stroke: color($igx-light-palette, 'secondary');
            stroke-width: "0.8";
        }
    }

    //  Update material slider component colors for both light and dark mode
    .mat-mdc-slider.secondary .mdc-slider__track--inactive,
    .mat-mdc-slider.secondary .mdc-slider__thumb-knob {
        background-color: color($custom-mat-light-theme, 'secondary');
    }

    .mat-mdc-slider.secondary .mdc-slider__track--active_fill,
    .mat-mdc-slider.secondary .mdc-slider__thumb-knob {
        border-color: color($custom-mat-light-theme, 'secondary');
    }

    .mat-mdc-slider.secondary .mat-mdc-slider-visual-thumb .mat-ripple > * {
        background-color: color($custom-mat-light-theme, 'secondary');
        opacity: .12;
    }
}
```

#### Dark Mode

For our dark variant, we are going to apply the same CSS styles but using the `$custom-dark-palette`. In addition, we will update some of the colors of the `mat-stepper` component:

```scss
:host {
    &.dark {
        // The background color of the application in dark mode
        background: color($custom-dark-palette, 'surface');

        // The application logo fill color
        #Path1 {
            fill: color($custom-dark-palette, 'secondary');
        }

        // The application logo stroke color
        #Path2 {
            stroke: color($custom-dark-palette, 'secondary');
            stroke-width: "0.8";
        }

        ::ng-deep {
            // The background of the selected step icon inside the material stepper
            .mat-step-header .mat-step-icon-selected {
                background-color: color($custom-dark-palette, 'secondary');
            }

            // The background of the material stepper
            .mat-stepper-horizontal {
                background: color($custom-dark-palette, 'surface');
            }
        }
    }
}
```

### Generate class

The Angular Material `toolbar` uses CSS classes for its background color. In our sample, we want that color to change according to the selected theme, hence we are going to use the `color-classes` mixin. It will generate CSS class names for all colors for a given property and color palette, with optional prefix and suffix attached to the class name. For the demo, we will include the mixin twice - once for the light mode with the respective `$igx-light-palette` as a first value and second time for the dark mode with the `$custom-dark-palette`:

```scss
:host {
    &.light {
        @include color-classes(
            $palette: $igx-light-palette,
            $prop: 'background',
            $prefix: 'bg'
        );
    }

    &.dark {
        @include color-classes(
            $palette: $custom-dark-palette,
            $prop: "background",
            $prefix: "bg"
        );
    }
}
```

Then, add a CSS class to your navbar component following the pattern "bg - color from the palette - color variant". In our sample app, we are using `bg-gray-100`.

### Angular Components Typography

Ignite UI for Angular exposes four default type scales for each of its themes, which can be used inside the [`typography`](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/typography#mixin-typography) mixin to define the global typography styles of an application. In our example, we are going to apply the material predifined `typeface` and `type-scale` but you can create custom ones if you wish.

```scss
:host {
    @include typography($font-family: $material-typeface, $type-scale: $material-type-scale);
}
```

To customize the Angular Material typography, we need to use their `define-typography-config` function. We will override their `$font-family` with the Ignite UI `$material-typeface` and their `$button` styles as follows:

```scss
$custom-typography: mat.define-typography-config(
    $font-family: $material-typeface,
    $button: mat.define-typography-level(14px, $font-weight: 600)
);
```

Then, the typography config has to be passed to the `define-light-theme` mixin:

```scss
$custom-mat-light-theme: mat.define-light-theme((
    color: (
        primary: $light-palette-primary,
        accent: $light-palette-accent
    ),
    typography: $custom-typography
));
```

Check Angular Material [`Typography documentation`](https://material.angular.io/guide/typography) for more detailed information.  

## API References

<div class="divider--half"></div>

- [Light Material Palette](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#variable-light-material-palette)
- [Dark Material Palette](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/palettes#variable-dark-material-palette)
- [Light Material Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-light-theme)
- [Dark Material Theme](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/themes#mixin-dark-theme)
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
- [Expansion Panel Component](../../expansion-panel.md)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

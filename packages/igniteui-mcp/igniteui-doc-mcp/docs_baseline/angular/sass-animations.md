---
title: Animations
description: Ignite UI for Angular includes over 100+ pre-built animations specially designed for a better user experience.
keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, animations
llms:
  description: "Ignite UI for Angular includes over 100+ pre-built animations specially designed for a better user experience."
_tocName: Animations
---
# Animations

<div class="highlight">
Ignite UI for Angular includes over 100+ pre-built animations specially designed for a better user experience.
</div>
<igc-divider></igc-divider>

## Sass Animations

### Keyframes Mixin

The Ignite UI for Angular `keyframes` mixin is used to register new keyframes animations. The mixin takes the name of a keyframes animation as a parameter and adds it to the global keyframe register list. In that way, the keyframes will not be duplicated in the exported CSS when including the same keyframes animation several times.

For instance, doing this:

```scss
@include fade-in();
@include fade-in();
```

Will result in only one `@keyframes` rule added to the produced CSS:

```css
@keyframes fade-in { ... }
```

Keyframes selectors for the animation steps along with CSS styles for the keyframes are defined inside the body of the mixin.

Here's an example of creating a new animation mixin that can be used with our `animation` mixin.

```scss
@mixin fade-in-bottom {
    @include keyframes(fade-in-bottom) {
        0% {
            transform: translateY(50px);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
} 
```

<hr/>

### Animation Mixin

The `animation` mixin serves as a vessel for animating elements using a list of animation properties passed as parameters. Users can specify animation properties like `name`, `duration`, `delay`, `direction`, `iteration count`, etc. Multiple keyframe animations can be passed to the `animation` mixin.

```scss
//include the 'fade-in-top' keyframes animation mixin
@include fade-in-top();

//include the animation mixin with parameters
.my-class {
    @include animation('fade-in-top' 3s $ease-out-quad infinite);
}
```

<hr/>

### Timing Functions

We include a list of pre-baked timing functions to use with our keyframes mixins. Read the `documentation` to find the full list of timing functions.

```typescript
import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES } from 'igniteui-angular/card';
import { IgxDividerComponent, IgxFlexDirective, IgxIconButtonDirective, IgxLayoutDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
@Component({
    selector: 'app-animations-sample-2',
    styleUrls: ['./animations-sample-2.component.scss'],
    templateUrl: './animations-sample-2.component.html',
    imports: [IgxLayoutDirective, IgxFlexDirective, IgxDividerComponent, IgxIconButtonDirective, IgxRippleDirective, IgxSuffixDirective, IgxIconComponent, IGX_CARD_DIRECTIVES]
})
export class AnimationsSample2Component {
    public horizontal = true;
}
```
```html
<igx-card [horizontal]="horizontal">
    <div igxLayout igxLayoutDir="column" igxFlex [igxFlexGrow]="1">
        <igx-card-header>
            <span igxCardHeaderTitle>Rozes</span>
            <span igxCardHeaderSubtitle>Under the Grave (2016)</span>
            <igx-card-media width="64px" height="64px">
                <img src="assets/images/card/media/ROZES-Under-the-Grave.jpg">
            </igx-card-media>
        </igx-card-header>

        <igx-card-content>
            <p>As I have always said: I write what's real and what's true,
                even if it means throwing myself under the bus.</p>
        </igx-card-content>
    </div>

    <igx-divider [vertical]="horizontal"></igx-divider>

    <igx-card-actions layout="justify">
        <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" igxEnd>
            <igx-icon family="material">skip_previous</igx-icon>
        </button>
        <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" igxEnd>
            <igx-icon family="material">play_arrow</igx-icon>
        </button>
        <button igxIconButton="flat" igxRipple [igxRippleCentered]="true" igxEnd>
            <igx-icon family="material">skip_next</igx-icon>
        </button>
    </igx-card-actions>
</igx-card>
```
```scss
@use 'igniteui-angular/lib/core/styles/themes/index' as *;
@forward 'igniteui-angular/lib/core/styles/themes/index';

@include fade-in-top();

:host {
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
}

igx-card {
    @include animation('fade-in-top' 3s $ease-out-quad forwards);

    max-width: 400px;
    min-width: 250px;
}
```
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="animations-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="animations-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on stackblitz</button>
</div>
<hr/>

## Angular Animations

Apart from Sass keyframes and animations mixin, we also include pre-defined Angular animations.

<hr/>

```typescript
import { AnimationReferenceMetadata } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { AbsolutePosition, IgxOverlayService } from 'igniteui-angular/core';
import { IListItemClickEventArgs, IgxListComponent, IgxListItemComponent, IgxListModule } from 'igniteui-angular/list';
import { IgxDialogComponent, IgxDialogModule } from 'igniteui-angular/dialog';
import { blink, fadeIn, fadeOut, flipBottom, flipHorBck, flipHorFwd, flipLeft, flipRight,
    flipTop, flipVerBck, flipVerFwd, growVerIn, growVerOut, heartbeat,
    pulsateBck, pulsateFwd, rotateInBl, rotateInBottom, rotateInBr,
    rotateInCenter, rotateInDiagonal1, rotateInDiagonal2, rotateInHor,
    rotateInLeft, rotateInRight, rotateInTl, rotateInTop, rotateInTr, rotateInVer,
    rotateOutBl, rotateOutBottom, rotateOutBr, rotateOutCenter, rotateOutDiagonal1,
    rotateOutDiagonal2, rotateOutHor, rotateOutLeft, rotateOutRight, rotateOutTl,
    rotateOutTop, rotateOutTr, rotateOutVer, scaleInBl, scaleInBottom, scaleInBr,
    scaleInCenter, scaleInHorCenter, scaleInHorLeft, scaleInHorRight, scaleInLeft,
    scaleInRight, scaleInTl, scaleInTop, scaleInTr, scaleInVerBottom, scaleInVerCenter,
    scaleInVerTop, scaleOutBl, scaleOutBottom, scaleOutBr, scaleOutCenter,
    scaleOutHorCenter, scaleOutHorLeft, scaleOutHorRight, scaleOutLeft, scaleOutRight,
    scaleOutTl, scaleOutTop, scaleOutTr, scaleOutVerBottom, scaleOutVerCenter,
    scaleOutVerTop, shakeBl, shakeBottom, shakeBr, shakeCenter, shakeHor, shakeLeft,
    shakeRight, shakeTl, shakeTop, shakeTr, shakeVer, slideInBl, slideInBottom, slideInBr,
    slideInLeft, slideInRight, slideInTl, slideInTop, slideInTr, slideOutBl,
    slideOutBottom, slideOutBr, slideOutLeft, slideOutRight, slideOutTl,
    slideOutTop, slideOutTr, swingInBottomBck, swingInBottomFwd, swingInLeftBck,
    swingInLeftFwd, swingInRightBck, swingInRightFwd, swingInTopBck, swingInTopFwd,
    swingOutBottomBck, swingOutBottomFwd, swingOutLeftBck, swingOutLefttFwd,
    swingOutRightBck, swingOutRightFwd, swingOutTopBck, swingOutTopFwd } from 'igniteui-angular/animations';


@Component({
    selector: 'app-animations-sample-1',
    styleUrls: ['./animations-sample-1.component.scss'],
    templateUrl: './animations-sample-1.component.html',
    imports: [IgxListComponent, IgxListItemComponent, IgxDialogComponent]
})
export class AnimationsSampleComponent {
    @ViewChild('dialog', { static: true, read: IgxDialogComponent })
    private dialog: IgxDialogComponent;

    public animationsCategories: string[] = [
        'fade',
        'flip',
        'grow',
        'miscellaneous',
        'rotate',
        'scale',
        'slide',
        'swing'
    ];

    public animations: { name: string, animation: AnimationReferenceMetadata }[];

    private fadeAnimations: { name: string, animation: AnimationReferenceMetadata }[] = [
        { name: 'fadeIn', animation: fadeIn },
        { name: 'fadeOut', animation: fadeOut }
    ];

    private flipAnimations: { name: string, animation: AnimationReferenceMetadata }[] = [
        { name: 'flipTop', animation: flipTop },
        { name: 'flipRight', animation: flipRight },
        { name: 'flipBottom', animation: flipBottom },
        { name: 'flipLeft', animation: flipLeft },
        { name: 'flipHorFwd', animation: flipHorFwd },
        { name: 'flipHorBck', animation: flipHorBck },
        { name: 'flipVerFwd', animation: flipVerFwd },
        { name: 'flipVerBck', animation: flipVerBck }
    ];

    private growAnimations: { name: string, animation: AnimationReferenceMetadata }[] = [
        { name: 'growVerIn', animation: growVerIn },
        { name: 'growVerOut', animation: growVerOut }
    ];

    private rotateAnimations: { name: string, animation: AnimationReferenceMetadata }[] = [
        { name: 'rotateInCenter', animation: rotateInCenter },
        { name: 'rotateInTop', animation: rotateInTop },
        { name: 'rotateInRight', animation: rotateInRight },
        { name: 'rotateInLeft', animation: rotateInLeft },
        { name: 'rotateInBottom', animation: rotateInBottom },
        { name: 'rotateInTr', animation: rotateInTr },
        { name: 'rotateInBr', animation: rotateInBr },
        { name: 'rotateInBl', animation: rotateInBl },
        { name: 'rotateInTl', animation: rotateInTl },
        { name: 'rotateInDiagonal1', animation: rotateInDiagonal1 },
        { name: 'rotateInDiagonal2', animation: rotateInDiagonal2 },
        { name: 'rotateInHor', animation: rotateInHor },
        { name: 'rotateInVer', animation: rotateInVer },
        { name: 'rotateOutCenter', animation: rotateOutCenter },
        { name: 'rotateOutTop', animation: rotateOutTop },
        { name: 'rotateOutRight', animation: rotateOutRight },
        { name: 'rotateOutLeft', animation: rotateOutLeft },
        { name: 'rotateOutBottom', animation: rotateOutBottom },
        { name: 'rotateOutTr', animation: rotateOutTr },
        { name: 'rotateOutBr', animation: rotateOutBr },
        { name: 'rotateOutBl', animation: rotateOutBl },
        { name: 'rotateOutTl', animation: rotateOutTl },
        { name: 'rotateOutDiagonal1', animation: rotateOutDiagonal1 },
        { name: 'rotateOutDiagonal2', animation: rotateOutDiagonal2 },
        { name: 'rotateOutHor', animation: rotateOutHor },
        { name: 'rotateOutVer', animation: rotateOutVer }
    ];

    private scaleAnimations: { name: string, animation: AnimationReferenceMetadata }[] = [
        { name: 'scaleInTop', animation: scaleInTop },
        { name: 'scaleInRight', animation: scaleInRight },
        { name: 'scaleInBottom', animation: scaleInBottom },
        { name: 'scaleInLeft', animation: scaleInLeft },
        { name: 'scaleInCenter', animation: scaleInCenter },
        { name: 'scaleInTr', animation: scaleInTr },
        { name: 'scaleInBr', animation: scaleInBr },
        { name: 'scaleInBl', animation: scaleInBl },
        { name: 'scaleInTl', animation: scaleInTl },
        { name: 'scaleInVerTop', animation: scaleInVerTop },
        { name: 'scaleInVerBottom', animation: scaleInVerBottom },
        { name: 'scaleInVerCenter', animation: scaleInVerCenter },
        { name: 'scaleInHorCenter', animation: scaleInHorCenter },
        { name: 'scaleInHorLeft', animation: scaleInHorLeft },
        { name: 'scaleInHorRight', animation: scaleInHorRight },
        { name: 'scaleOutTop', animation: scaleOutTop },
        { name: 'scaleOutRight', animation: scaleOutRight },
        { name: 'scaleOutBottom', animation: scaleOutBottom },
        { name: 'scaleOutLeft', animation: scaleOutLeft },
        { name: 'scaleOutCenter', animation: scaleOutCenter },
        { name: 'scaleOutTr', animation: scaleOutTr },
        { name: 'scaleOutBr', animation: scaleOutBr },
        { name: 'scaleOutBl', animation: scaleOutBl },
        { name: 'scaleOutTl', animation: scaleOutTl },
        { name: 'scaleOutVerTop', animation: scaleOutVerTop },
        { name: 'scaleOutVerBottom', animation: scaleOutVerBottom },
        { name: 'scaleOutVerCenter', animation: scaleOutVerCenter },
        { name: 'scaleOutHorCenter', animation: scaleOutHorCenter },
        { name: 'scaleOutHorLeft', animation: scaleOutHorLeft },
        { name: 'scaleOutHorRight', animation: scaleOutHorRight }
    ];

    private slideAnimations: { name: string, animation: AnimationReferenceMetadata }[] = [
        { name: 'slideInTop', animation: slideInTop },
        { name: 'slideInRight', animation: slideInRight },
        { name: 'slideInBottom', animation: slideInBottom },
        { name: 'slideInLeft', animation: slideInLeft },
        { name: 'slideInTr', animation: slideInTr },
        { name: 'slideInBr', animation: slideInBr },
        { name: 'slideInBl', animation: slideInBl },
        { name: 'slideInTl', animation: slideInTl },
        { name: 'slideOutTop', animation: slideOutTop },
        { name: 'slideOutBottom', animation: slideOutBottom },
        { name: 'slideOutRight', animation: slideOutRight },
        { name: 'slideOutLeft', animation: slideOutLeft },
        { name: 'slideOutTr', animation: slideOutTr },
        { name: 'slideOutBr', animation: slideOutBr },
        { name: 'slideOutBl', animation: slideOutBl },
        { name: 'slideOutTl', animation: slideOutTl }
    ];

    private swingAnimations: { name: string, animation: AnimationReferenceMetadata }[] = [
        { name: 'swingInTopFwd', animation: swingInTopFwd },
        { name: 'swingInRightFwd', animation: swingInRightFwd },
        { name: 'swingInLeftFwd', animation: swingInLeftFwd },
        { name: 'swingInBottomFwd', animation: swingInBottomFwd },
        { name: 'swingInTopBck', animation: swingInTopBck },
        { name: 'swingInRightBck', animation: swingInRightBck },
        { name: 'swingInBottomBck', animation: swingInBottomBck },
        { name: 'swingInLeftBck', animation: swingInLeftBck },
        { name: 'swingOutTopFwd', animation: swingOutTopFwd },
        { name: 'swingOutRightFwd', animation: swingOutRightFwd },
        { name: 'swingOutBottomFwd', animation: swingOutBottomFwd },
        { name: 'swingOutLefttFwd', animation: swingOutLefttFwd },
        { name: 'swingOutTopBck', animation: swingOutTopBck },
        { name: 'swingOutRightBck', animation: swingOutRightBck },
        { name: 'swingOutBottomBck', animation: swingOutBottomBck },
        { name: 'swingOutLeftBck', animation: swingOutLeftBck }
    ];

    private miscellaneousAnimations: { name: string, animation: AnimationReferenceMetadata }[] = [
        { name: 'heartbeat', animation: heartbeat },
        { name: 'pulsateFwd', animation: pulsateFwd },
        { name: 'pulsateBck', animation: pulsateBck },
        { name: 'blink', animation: blink },
        { name: 'shakeHor', animation: shakeHor },
        { name: 'shakeVer', animation: shakeVer },
        { name: 'shakeTop', animation: shakeTop },
        { name: 'shakeBottom', animation: shakeBottom },
        { name: 'shakeRight', animation: shakeRight },
        { name: 'shakeLeft', animation: shakeLeft },
        { name: 'shakeCenter', animation: shakeCenter },
        { name: 'shakeTr', animation: shakeTr },
        { name: 'shakeBr', animation: shakeBr },
        { name: 'shakeBl', animation: shakeBl },
        { name: 'shakeTl', animation: shakeTl }
    ];

    constructor() {
        this.animations = this.fadeAnimations;
    }

    public categoryItemClicked(e: IListItemClickEventArgs): void {
        const category = this.animationsCategories[e.item.index];
        switch (category) {
            case 'fade':
                this.animations = this.fadeAnimations;
                break;
            case 'flip':
                this.animations = this.flipAnimations;
                break;
            case 'grow':
                this.animations = this.growAnimations;
                break;
            case 'miscellaneous':
                this.animations = this.miscellaneousAnimations;
                break;
            case 'rotate':
                this.animations = this.rotateAnimations;
                break;
            case 'scale':
                this.animations = this.scaleAnimations;
                break;
            case 'slide':
                this.animations = this.slideAnimations;
                break;
            case 'swing':
                this.animations = this.swingAnimations;
                break;
        }
    }

    public playAnimation(e: IListItemClickEventArgs): void {
        const animation = this.animations[e.item.index].animation;
        if (animation.options?.params?.duration && animation.options?.params?.duration !== '1000ms') {
            animation.options.params.duration = '1000ms';
        }
        const overlaySettings = IgxOverlayService.createAbsoluteOverlaySettings(AbsolutePosition.Center);
        overlaySettings.closeOnOutsideClick = true;
        overlaySettings.modal = true;
        overlaySettings.positionStrategy.settings.openAnimation = animation;
        overlaySettings.positionStrategy.settings.closeAnimation = null;
        this.dialog.open(overlaySettings);
    }
}
```
```html
<article class="sample-column">
  <h5>Category</h5>
  <div>
    <igx-list (itemClicked)="categoryItemClicked($event)">
      @for (category of animationsCategories; track category) {
        <igx-list-item>
          {{ category }}
        </igx-list-item>
      }
    </igx-list>
  </div>
</article>
<article class="sample-column">
  <h5>Animation</h5>
  <div>
    <igx-list class="animate" (itemClicked)="playAnimation($event)">
      @for (animation of animations; track animation) {
        <igx-list-item>
          {{ animation.name }}
        </igx-list-item>
      }
    </igx-list>
  </div>
</article>
<igx-dialog #dialog title="Ignite UI Angular Animations" message="Click the button or outside to close"
  class="custom-dialog" rightButtonLabel="Close" (rightButtonSelect)="dialog.close()">
</igx-dialog>
```
```scss
@use 'igniteui-angular/lib/core/styles/themes/index' as *;
@forward 'igniteui-angular/lib/core/styles/themes/index';

:host {
    display: flex;
}

h5 {
    margin: 8px;
}

igx-list {
    box-shadow: elevation(2);
    max-height: 352px;
}

.animate {
    overflow-y: scroll;
}

igx-list-item {
    border-bottom: 1px solid var(--ig-gray-100);
}
```
<div style="margin: 0; padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="animations-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="animations-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on stackblitz</button>
</div>

### Usage

The Ignite UI for Angular animations are grouped into 8 categories depending on their visual effects - `fade`, `flip`, `grow`, `miscellaneous`, `rotate`, `scale`, `slide`, and `swing`. Every group accepts a different set of parameters, allowing you to modify the behavior of any of the included animations. Each animation is an [`AnimationReferenceMetadata`](https://angular.io/api/animations/AnimationReferenceMetadata) object as produced by the [`animation`](https://angular.io/api/animations/animation) function provided by Angular.

If parameters are attached, they act as default values. When an animation is invoked via the [`useAnimation`](https://angular.io/api/animations/useAnimation) function, then parameter values are allowed to be passed in directly. If any of the passed in parameter values are missing, then the default values will be used.

``` typescript
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut } from "igniteui-angular/animations/main";

animations: [
    trigger('fadeInOut', [
            transition('void => *', [
                useAnimation(fadeIn, {
                    params: {
                        duration: '.35s',
                        easing: 'ease-out'
                    }
                })
            ]),
            transition('* => void', [
                useAnimation(fadeOut, {
                    params: {
                        duration: '.2s',
                        easing: 'ease-out'
                    }
                })
            ])
        ])
]
```

### Timing Functions

Ignite UI for Angular includes a set of timing functions that can be used to ease in or out an animation. There are three main timing function groups - `EaseIn`, `EaseOut`, and `EaseInOut`, each containing the following timings:

- quad
- cubic
- quart
- quint
- sine
- expo
- circ
- back

To use a specific timing function, import it first:

``` typescript
import { EaseOut } from "igniteui-angular/animations/easings";
```

and then use it as value for the easing param in any animation:

``` typescript
useAnimation(fadeIn, {
    params: {
        easing: EaseOut.back
    }
});
```

## API References
<igc-divider></igc-divider>
- `Animations`
- `AnimationSettings`
- `IAnimationParams`
## Additional Resources

<hr/>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

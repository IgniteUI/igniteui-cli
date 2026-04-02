# Class: IgxRippleDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/ripple/ripple.directive.ts:16](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/ripple/ripple.directive.ts#L16)

## Constructors

### Constructor

> **new IgxRippleDirective**(): `IgxRippleDirective`

#### Returns

`IgxRippleDirective`

## Properties

### elementRef

> `protected` **elementRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/ripple/ripple.directive.ts:17](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/ripple/ripple.directive.ts#L17)

***

### renderer

> `protected` **renderer**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/ripple/ripple.directive.ts:18](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/ripple/ripple.directive.ts#L18)

***

### rippleColor

> **rippleColor**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/ripple/ripple.directive.ts:56](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/ripple/ripple.directive.ts#L56)

Sets/gets the ripple color.
```html
<button type="button" #rippleContainer igxButton [igxRipple]="'red'"></button>
```
```typescript
@ViewChild('rippleContainer', {read: IgxRippleDirective})
public ripple: IgxRippleDirective;
let rippleColor = this.ripple.rippleColor;
```

#### Memberof

IgxRippleDirective

***

### rippleDisabled

> **rippleDisabled**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/ripple/ripple.directive.ts:100](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/ripple/ripple.directive.ts#L100)

Sets/gets whether the ripple is disabled.
Default value is `false`.
```html
<button type="button" #rippleContainer igxRipple [igxRippleDisabled]="true"></button>
```
```typescript
@ViewChild('rippleContainer', {read: IgxRippleDirective})
public ripple: IgxRippleDirective;
let isRippleDisabled = this.ripple.rippleDisabled;
```

#### Memberof

IgxRippleDirective

***

### rippleDuration

> **rippleDuration**: `number` = `600`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/ripple/ripple.directive.ts:72](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/ripple/ripple.directive.ts#L72)

Sets/gets the ripple duration(in milliseconds).
Default value is `600`.
```html
<button type="button" #rippleContainer igxButton igxRipple [igxRippleDuration]="800"></button>
```
```typescript
@ViewChild('rippleContainer', {read: IgxRippleDirective})
public ripple: IgxRippleDirective;
let rippleDuration = this.ripple.rippleDuration;
```

#### Memberof

IgxRippleDirective

***

### rippleTarget

> **rippleTarget**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/ripple/ripple.directive.ts:41](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/ripple/ripple.directive.ts#L41)

Sets/gets the ripple target.
```html
<div  #rippleContainer class="div-1" igxRipple [igxRippleTarget] = "'.div-1'"></div>
```
```typescript
@ViewChild('rippleContainer', {read: IgxRippleDirective})
public ripple: IgxRippleDirective;
let rippleTarget = this.ripple.rippleTarget;
```
Can set the ripple to activate on a child element inside the parent where igxRipple is defined.
```html
<div #rippleContainer [igxRippleTarget]="'#child"'>
  <button type="button" igxButton id="child">Click</button>
</div>
```

#### Memberof

IgxRippleDirective

## Accessors

### centered

#### Set Signature

> **set** **centered**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/ripple/ripple.directive.ts:82](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/ripple/ripple.directive.ts#L82)

Enables/disables the ripple to be centered.
```html
<button type="button" #rippleContainer igxButton igxRipple [igxRippleCentered]="true"></button>
```

##### Memberof

IgxRippleDirective

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### nativeElement

#### Get Signature

> **get** `protected` **nativeElement**(): `HTMLElement`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/ripple/ripple.directive.ts:102](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/ripple/ripple.directive.ts#L102)

##### Returns

`HTMLElement`

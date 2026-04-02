# Class: IgxFlexDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts:147](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts#L147)

## Constructors

### Constructor

> **new IgxFlexDirective**(): `IgxFlexDirective`

#### Returns

`IgxFlexDirective`

## Properties

### basis

> **basis**: `string` = `'auto'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts:216](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts#L216)

Applies the `flex-basis` attribute to an element that uses the directive.

Default value is `auto`.

Other possible values include `content`, `max-content`, `min-content`, `fit-content`.

```html
<div igxFlex igxFlexBasis="fit-content">Content</div>
```

***

### flex

> **flex**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts:188](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts#L188)

Applies the directive to an element.

Possible values include `igxFlexGrow`, `igxFlexShrink`, `igxFlexOrder`, `igxFlexBasis`.

```html
<div igxFlex>Content</div>
```

***

### grow

> **grow**: `number` = `1`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts:162](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts#L162)

Applies the `grow` attribute to an element that uses the directive.

Default value is `1`.

```html
<div>
   <div igxFlex igxFlexGrow="0">Content1</div>
   <div igxFlex igxFlexGrow="1">Content2</div>
   <div igxFlex igxFlexGrow="0">Content3</div>
</div>
```

***

### order

> **order**: `number` = `0`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts:203](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts#L203)

Applies the `order` attribute to an element that uses the directive.

Default value is `0`.

```html
<div>
   <div igxFlex igxFlexOrder="1">Content1</div>
   <div igxFlex igxFlexOrder="0">Content2</div>
   <div igxFlex igxFlexOrder="2">Content3</div>
</div>
```

***

### shrink

> **shrink**: `number` = `1`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts:177](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts#L177)

Applies the `shrink` attribute to an element that uses the directive.

Default value is `1`.

```html
<div>
   <div igxFlex igxFlexShrink="1">Content1</div>
   <div igxFlex igxFlexShrink="0">Content2</div>
   <div igxFlex igxFlexShrink="1">Content3</div>
</div>
```

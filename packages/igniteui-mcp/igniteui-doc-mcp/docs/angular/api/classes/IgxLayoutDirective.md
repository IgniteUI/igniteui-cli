# Class: IgxLayoutDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts:7](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts#L7)

## Constructors

### Constructor

> **new IgxLayoutDirective**(): `IgxLayoutDirective`

#### Returns

`IgxLayoutDirective`

## Properties

### dir

> **dir**: `string` = `'row'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts:23](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts#L23)

Sets the default flow direction of the container's children.

Defaults to `rows`.

```html
 <div
  igxLayout
  igxLayoutDir="row">
   <div igxFlex>1</div>
   <div igxFlex>2</div>
   <div igxFlex>3</div>
 </div>
```

***

### itemAlign

> **itemAlign**: `string` = `'stretch'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts:100](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts#L100)

Defines the default behavior for how children are laid out along the corss axis of the current line.

Defaults to `flex-start`.

Other possible values are `flex-end`, `center`, `baseline`, and `stretch`.

```html
<div
  igxLayout
  igxLayoutDir="column"
  igxLayoutItemAlign="start">
   <div igxFlex igxFlexGrow="0">1</div>
   <div igxFlex igxFlexGrow="0">2</div>
   <div igxFlex igxFlexGrow="0">3</div>
</div>
```

***

### justify

> **justify**: `string` = `'flex-start'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts:80](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts#L80)

Defines the alignment along the main axis.

Defaults to `flex-start` which packs the children toward the start line.

Other possible values are `flex-end`, `center`, `space-between`, `space-around`.

```html
<div
  igxLayout
  igxLayoutDir="column"
  igxLayoutJustify="space-between">
   <div>1</div>
   <div>2</div>
   <div>3</div>
</div>
```

***

### reverse

> **reverse**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts:40](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts#L40)

Defines the direction flex children are placed in the flex container.

When set to `true`, the `rows` direction goes right to left and `columns` goes bottom to top.

```html
<div
  igxLayout
  igxLayoutReverse="true">
   <div igxFlex>1</div>
   <div igxFlex>2</div>
   <div igxFlex>3</div>
</div>
```

***

### wrap

> **wrap**: `string` = `'nowrap'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts:60](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/layout/layout.directive.ts#L60)

By default the immediate children will all try to fit onto one line.

The default value `nowrap` sets this behavior.

Other accepted values are `wrap` and `wrap-reverse`.

```html
<div
  igxLayout
  igxLayoutDir="row"
  igxLayoutWrap="wrap">
   <div igxFlex igxFlexGrow="0">1</div>
   <div igxFlex igxFlexGrow="0">2</div>
   <div igxFlex igxFlexGrow="0">3</div>
</div>
```

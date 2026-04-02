# Class: IgcLinearProgressComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/linear-progress.ts:34](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/linear-progress.ts#L34)

A linear progress indicator used to express unspecified wait time or display
the length of a process.

## Element

igc-linear-progress

## Slot

- The text area container.

## Csspart

track - The igc-linear-progress track area.

## Csspart

fill - The igc-linear-progress indicator area.

## Csspart

striped - The igc-linear-progress striped indicator.

## Csspart

label - The igc-linear-progress label.

## Csspart

value - The igc-linear-progress label value.

## Csspart

indeterminate - The igc-linear-progress indeterminate state.

## Csspart

primary - The igc-linear-progress indicator primary state.

## Csspart

danger - The igc-linear-progress indicator error state.

## Csspart

warning - The igc-linear-progress indicator warning state.

## Csspart

info - The igc-linear-progress indicator info state.

## Csspart

success - The igc-linear-progress indicator success state.

## Extends

- `IgcProgressBaseComponent`

## Other

### animationDuration

> **animationDuration**: `number` = `500`

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/base.ts:68](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/base.ts#L68)

Animation duration in milliseconds.

#### Attr

animation-duration

#### Inherited from

`IgcProgressBaseComponent.animationDuration`

***

### hideLabel

> **hideLabel**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/base.ts:82](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/base.ts#L82)

Shows/hides the label of the control.

#### Attr

hide-label

#### Inherited from

`IgcProgressBaseComponent.hideLabel`

***

### indeterminate

> **indeterminate**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/base.ts:75](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/base.ts#L75)

The indeterminate state of the control.

#### Attr

#### Inherited from

`IgcProgressBaseComponent.indeterminate`

***

### labelAlign

> **labelAlign**: `LinearProgressLabelAlign` = `'top-start'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/linear-progress.ts:59](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/linear-progress.ts#L59)

The position for the default label of the control.

#### Attr

label-align

***

### labelFormat

> **labelFormat**: `string`

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/base.ts:92](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/base.ts#L92)

Format string for the default label of the control.
Placeholders:
 {0} - current value of the control.
 {1} - max value of the control.

#### Attr

label-format

#### Inherited from

`IgcProgressBaseComponent.labelFormat`

***

### max

> **max**: `number` = `100`

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/base.ts:47](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/base.ts#L47)

Maximum value of the control.

#### Attr

#### Inherited from

`IgcProgressBaseComponent.max`

***

### striped

> **striped**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/linear-progress.ts:52](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/linear-progress.ts#L52)

Sets the striped look of the control.

#### Attr

***

### value

> **value**: `number` = `0`

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/base.ts:54](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/base.ts#L54)

The value of the control.

#### Attr

#### Inherited from

`IgcProgressBaseComponent.value`

***

### variant

> **variant**: `StyleVariant` = `'primary'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/base.ts:61](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/base.ts#L61)

The variant of the control.

#### Attr

#### Inherited from

`IgcProgressBaseComponent.variant`

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/linear-progress.ts:36](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/linear-progress.ts#L36)

Array of styles to apply to the element. The styles should be defined
using the css tag function, via constructible stylesheets, or
imported from native CSS module scripts.

Note on Content Security Policy:

Element styles are implemented with `<style>` tags when the browser doesn't
support adopted StyleSheets. To use such `<style>` tags with the style-src
CSP directive, the style-src value must either include 'unsafe-inline' or
`nonce-<base64-value>` with `<base64-value>` replaced be a server-generated
nonce.

To provide a nonce to use on generated `<style>` elements, set
`window.litNonce` to a server-generated nonce in your page's HTML, before
loading application code:

```html
<script>
  // Generated and unique per request:
  window.litNonce = 'a1b2c3d4';
</script>
```

#### Nocollapse

#### Overrides

`IgcProgressBaseComponent.styles`

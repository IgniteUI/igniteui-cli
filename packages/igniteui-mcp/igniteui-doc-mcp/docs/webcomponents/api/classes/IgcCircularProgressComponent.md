# Class: IgcCircularProgressComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/circular-progress.ts:38](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/circular-progress.ts#L38)

A circular progress indicator used to express unspecified wait time or display
the length of a process.

## Element

igc-circular-progress

## Slot

- The text area container.

## Slot

gradient - Customize the progress bar in order to use a color gradient instead of a solid color. Accepts `igc-circular-gradient` elements.

## Csspart

svg - The igc-circular-progress SVG element.

## Csspart

gradient_start - The igc-circular-progress linear-gradient start color.

## Csspart

gradient_end - The igc-circular-progress linear-gradient end color.

## Csspart

track - The igc-circular-progress ring track area.

## Csspart

fill - The igc-circular-progress indicator area.

## Csspart

label - The igc-circular-progress label.

## Csspart

value - The igc-circular-progress label value.

## Csspart

indeterminate - The igc-circular-progress indeterminate state.

## Csspart

primary - The igc-circular-progress primary state.

## Csspart

danger - The igc-circular-progress error state.

## Csspart

warning - The igc-circular-progress warning state.

## Csspart

info - The igc-circular-progress info state.

## Csspart

success - The igc-circular-progress success state.

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

[`IgcLinearProgressComponent`](IgcLinearProgressComponent.md).[`animationDuration`](IgcLinearProgressComponent.md#animationduration)

***

### hideLabel

> **hideLabel**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/base.ts:82](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/base.ts#L82)

Shows/hides the label of the control.

#### Attr

hide-label

#### Inherited from

[`IgcLinearProgressComponent`](IgcLinearProgressComponent.md).[`hideLabel`](IgcLinearProgressComponent.md#hidelabel)

***

### indeterminate

> **indeterminate**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/base.ts:75](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/base.ts#L75)

The indeterminate state of the control.

#### Attr

#### Inherited from

[`IgcLinearProgressComponent`](IgcLinearProgressComponent.md).[`indeterminate`](IgcLinearProgressComponent.md#indeterminate)

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

[`IgcLinearProgressComponent`](IgcLinearProgressComponent.md).[`max`](IgcLinearProgressComponent.md#max)

***

### value

> **value**: `number` = `0`

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/base.ts:54](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/base.ts#L54)

The value of the control.

#### Attr

#### Inherited from

[`IgcLinearProgressComponent`](IgcLinearProgressComponent.md).[`value`](IgcLinearProgressComponent.md#value)

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

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/circular-progress.ts:40](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/circular-progress.ts#L40)

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

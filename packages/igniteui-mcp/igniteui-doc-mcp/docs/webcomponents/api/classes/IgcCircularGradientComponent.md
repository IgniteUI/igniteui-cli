# Class: IgcCircularGradientComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/circular-gradient.ts:14](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/circular-gradient.ts#L14)

Used for defining gradient stops in the igc-circular-progress.
For each `igc-circular-gradient` defined as `gradient` slot of `igc-circular-progress` element would be created a SVG stop element.
The values passed as `color`, `offset` and `opacity` would be set as
`stop-color`, `offset` and `stop-opacity` of the SVG element without further validations.

## Element

igc-circular-gradient

## Extends

- `LitElement`

## Properties

### color

> **color**: `string` = `'black'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/circular-gradient.ts:34](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/circular-gradient.ts#L34)

Defines the color of the gradient stop

#### Attr

***

### offset

> **offset**: `string` = `'0%'`

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/circular-gradient.ts:27](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/circular-gradient.ts#L27)

Defines where the gradient stop is placed along the gradient vector

#### Attr

***

### opacity

> **opacity**: `number` = `1`

Defined in: [webcomponents/igniteui-webcomponents/src/components/progress/circular-gradient.ts:41](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/progress/circular-gradient.ts#L41)

Defines the opacity of the gradient stop

#### Attr

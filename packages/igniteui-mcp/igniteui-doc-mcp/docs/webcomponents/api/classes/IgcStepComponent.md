# Class: IgcStepComponent

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/step.ts:92](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/step.ts#L92)

A step component used within an `igc-stepper` to represent an individual step in a wizard-like workflow.

## Remarks

Each step has a header (with an indicator, title, and subtitle) and a content area.
Steps can be marked as `active`, `complete`, `disabled`, `optional`, or `invalid`
to control their appearance and behavior within the stepper.

Custom indicators can be provided via the `indicator` slot, and the content area
is rendered in the default slot.

## Element

igc-step

## Slot

- Renders the content of the step.

## Slot

indicator - Renders the indicator of the step. By default, it displays the step index + 1.

## Slot

title - Renders the title of the step.

## Slot

subtitle - Renders the subtitle of the step.

## Csspart

header-container - Wrapper of the step's `header` and its separators.

## Csspart

disabled - Indicates a disabled state. Applies to `header-container`.

## Csspart

complete-start - Indicates a complete state of the current step. Applies to `header-container`.

## Csspart

complete-end - Indicates a complete state of the previous step. Applies to `header-container`.

## Csspart

optional - Indicates an optional state. Applies to `header-container`.

## Csspart

invalid - Indicates an invalid state. Applies to `header-container`.

## Csspart

top - Indicates that the title should be above the indicator. Applies to `header-container`.

## Csspart

bottom - Indicates that the title should be below the indicator. Applies to `header-container`.

## Csspart

start - Indicates that the title should be before the indicator. Applies to `header-container`.

## Csspart

end - Indicates that the title should be after the indicator. Applies to `header-container`.

## Csspart

header - Wrapper of the step's `indicator` and `text`.

## Csspart

indicator - The indicator of the step.

## Csspart

text - Wrapper of the step's `title` and `subtitle`.

## Csspart

empty - Indicates that no title and subtitle have been provided to the step. Applies to `text`.

## Csspart

title - The title of the step.

## Csspart

subtitle - The subtitle of the step.

## Csspart

body - Wrapper of the step's `content`.

## Csspart

content - The step's `content`.

## Examples

```html
<igc-step>
  <igc-icon slot="indicator" name="home"></igc-icon>
  <span slot="title">Home</span>
  <span slot="subtitle">Return to the home page</span>
  <p>Welcome! This is the first step.</p>
</igc-step>
```

```html
<igc-step complete>
  <span slot="title">Completed step</span>
  <p>This step has been completed.</p>
</igc-step>

<igc-step active invalid>
  <span slot="title">Current step</span>
  <p>This step has validation errors.</p>
</igc-step>

<igc-step disabled>
  <span slot="title">Disabled step</span>
  <p>This step is not accessible.</p>
</igc-step>
```

## Extends

- `LitElement`

## Other

### active

> **active**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/step.ts:210](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/step.ts#L210)

Whether the step is active.

Active steps are styled with an active state and their content is visible.

#### Attr

active

#### Default

```ts
false
```

***

### complete

> **complete**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/step.ts:242](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/step.ts#L242)

Whether the step is completed.

#### Attr

complete

#### Default

```ts
false
```

***

### disabled

> **disabled**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/step.ts:233](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/step.ts#L233)

Whether the step is disabled.

Disabled steps are styled with a disabled state and are not interactive.

#### Attr

disabled

#### Default

```ts
false
```

***

### invalid

> **invalid**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/step.ts:199](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/step.ts#L199)

Whether the step is invalid.

Invalid steps are styled with an error state and are not
interactive when the stepper is in linear mode.

#### Attr

invalid

#### Default

```ts
false
```

***

### optional

> **optional**: `boolean` = `false`

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/step.ts:222](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/step.ts#L222)

Whether the step is optional.

Optional steps validity does not affect the default behavior when the stepper is in linear mode i.e.
if optional step is invalid the user could still move to the next step.

#### Attr

optional

#### Default

```ts
false
```

## styles

### styles

> `static` **styles**: `CSSResult`[]

Defined in: [webcomponents/igniteui-webcomponents/src/components/stepper/step.ts:94](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/stepper/step.ts#L94)

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

`LitElement.styles`

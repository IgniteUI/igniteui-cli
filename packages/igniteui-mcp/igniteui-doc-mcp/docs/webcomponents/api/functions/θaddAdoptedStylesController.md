# Function: θaddAdoptedStylesController()

> **θaddAdoptedStylesController**(`host`): `AdoptedStylesController`

Defined in: [webcomponents/igniteui-webcomponents/src/components/common/controllers/adopt-styles.ts:213](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/common/controllers/adopt-styles.ts#L213)

Creates and attaches an AdoptedStylesController to a Lit component.

## Parameters

### host

`ReactiveControllerHost` & `LitElement`

The Lit component that will host the controller

## Returns

`AdoptedStylesController`

The created AdoptedStylesController instance

## Example

```typescript
class MyComponent extends LitElement {
  private readonly _adoptedStyles = addAdoptedStylesController(this);

  connectedCallback() {
    super.connectedCallback();
    this._adoptedStyles.shouldAdoptStyles(true);
  }
}
```

# Function: θaddThemingController()

> **θaddThemingController**(`host`, `themes`, `config?`): `ThemingController`

Defined in: [webcomponents/igniteui-webcomponents/src/theming/theming-controller.ts:250](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/theming/theming-controller.ts#L250)

Creates and attaches a ThemingController to the given host element.

This is the preferred way to add theming support to a component. The controller
is registered with the host's reactive controller lifecycle and automatically
resolves the active theme from an ancestor `<igc-theme-provider>` context or
falls back to the application-wide theme set via `configureTheme()`.

## Parameters

### host

`ReactiveControllerHost` & `ReactiveElement`

The Lit element that will host the controller.

### themes

`Themes`

The theme styles map containing `light` and `dark` variant entries,
  each keyed by theme name (`bootstrap`, `material`, `fluent`, `indigo`) and
  an optional `shared` entry applied regardless of theme.

### config?

`ThemingControllerConfig`

Optional configuration.

## Returns

`ThemingController`

The created ThemingController instance.

## Examples

Minimal setup in a component constructor:
```typescript
import { addThemingController } from '../../theming/theming-controller.js';
import { all } from './themes/themes.js';

export default class IgcMyComponent extends LitElement {
  constructor() {
    super();
    addThemingController(this, all);
  }
}
```

With a `themeChange` callback and retained controller reference:
```typescript
export default class IgcMyComponent extends LitElement {
  private readonly _themingController = addThemingController(this, all, {
    themeChange(theme) {
      // Called on `this` (the host) whenever the theme switches
      console.log(`Theme changed to: ${theme}`);
    },
  });

  protected override render() {
    return html`<span>Current variant: ${this._themingController.variant}</span>`;
  }
}
```

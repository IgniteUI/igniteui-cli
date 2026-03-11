---
title: Web Components Color Editor | Color Editor | Infragistics
_description: Color Editor component provides an easily configurable option to change colors for any desirable component or aspect of your application.
_keywords: Web Components Color Editor, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["ColorEditor"]
namespace: Infragistics.Controls
_tocName: Color Editor
_premium: true
---

# Web Components Color Editor Overview <label class="badge badge--preview">PREVIEW</label>

The Ignite UI for Web Components Color Editor is a lightweight color picker component. The Color Editor can pop open by clicking the brush icon. Both the rgba and hex values can be obtained from the desired color along the bottom. These values will update when the three sliders are modified. The center box is designed for adjusting the saturation and brightness along with two adjacent sliders for adjusting the rgb and luminance values. Rgb registers between (1-255). The lightness registers between(0-1).

## Web Components Color Editor Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider--half"></div>

## Dependencies

<!-- Angular, WebComponents, React -->

First, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents-core
npm install igniteui-webcomponents-inputs
```

Before using the `ColorEditor`, you need to register the following modules as follows:

```ts
import { IgcColorEditorModule } from "igniteui-angular-inputs";

@NgModule({
    imports: [
        IgcColorEditorModule
    ]
})
export class AppModule {}
```

```ts
import { IgcColorEditorModule, IgcColorEditorComponent } from 'igniteui-webcomponents-inputs';

ModuleManager.register(
    IgcColorEditorModule
);
```

<!-- end:Angular, WebComponents, React -->

## Usage

The simplest way to start using the `ColorEditor` is as follows:

<!-- WebComponents -->

```html
<igc-color-editor
    name="colorEditor"
    id="colorEditor">
</igc-color-editor>
```

<!-- end: WebComponents -->

## Binding to events

The Color Editor component raises the following events:

- valueChanged
- valueChanging

<!-- WebComponents -->

```ts
this.OnValueChanged = this.OnValueChanged.bind(this);
this.colorEditor = document.getElementById('colorEditor') as IgcColorEditorComponent;
this.colorEditor.valueChanged = this.OnValueChanged;
```

<!-- end: WebComponents -->

<div class="divider--half"></div>

## API References

- `ColorEditor`

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

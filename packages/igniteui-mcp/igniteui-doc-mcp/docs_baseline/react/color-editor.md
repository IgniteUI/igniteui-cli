---
title: React Color Editor | Color Editor | Infragistics
_description: Color Editor component provides an easily configurable option to change colors for any desirable component or aspect of your application.
_keywords: React Color Editor, Ignite UI for React, Infragistics
_license: commercial
mentionedTypes: ["ColorEditor"]
namespace: Infragistics.Controls
_tocName: Color Editor
_premium: true
---

# React Color Editor Overview <label class="badge badge--preview">PREVIEW</label>

The Ignite UI for React Color Editor is a lightweight color picker component. The Color Editor can pop open by clicking the brush icon. Both the rgba and hex values can be obtained from the desired color along the bottom. These values will update when the three sliders are modified. The center box is designed for adjusting the saturation and brightness along with two adjacent sliders for adjusting the rgb and luminance values. Rgb registers between (1-255). The lightness registers between(0-1).

## React Color Editor Example

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrColorEditorModule } from 'igniteui-react-inputs';
import { IgrColorEditor } from 'igniteui-react-inputs';

const mods: any[] = [
    IgrColorEditorModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private colorEditor: IgrColorEditor
    private colorEditorRef(r: IgrColorEditor) {
        this.colorEditor = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.colorEditorRef = this.colorEditorRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrColorEditor
                    ref={this.colorEditorRef}>
                </IgrColorEditor>
            </div>
        </div>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```


<div class="divider--half"></div>

## Dependencies

First, you need to install the Ignite UI for React by running the following command:

```cmd
npm install igniteui-react-core
npm install igniteui-react-inputs
```

Before using the `ColorEditor`, you need to register the following modules as follows:

```tsx
import { IgrColorEditor, IgrColorEditorModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrColorEditorModule.register();
```

## Usage

The simplest way to start using the `ColorEditor` is as follows:

```tsx
<IgrColorEditor
    ref={this.colorEditorRef}>
</IgrColorEditor>
```

## Binding to events

The Color Editor component raises the following events:

- valueChanged
- valueChanging

```tsx
<IgrColorEditor valueChanged={this.onValueChanged} />

public onValueChanged(calendar: IgrColorEditor, e: IgrColorEditorPanelSelectedValueChangedEventArgs) {

}
```

<div class="divider--half"></div>

## API References

- `ColorEditor`

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

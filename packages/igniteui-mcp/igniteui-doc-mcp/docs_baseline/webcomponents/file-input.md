---
title: Web Components File Input | Data Visualization Tools | Infragistics
_description: Infragistics' Web Components File input is a component where the user can select and upload files. Improve your application with Ignite UI for Web Components!
_keywords: Web Components File input, Ignite UI for Web Components, Infragistics
_license: MIT
mentionedTypes: ["Input", "Icon", "Button"]
_tocName: File Input
---

# Web Components File Input Overview

The Ignite UI for Web Components File Input component provides an interactive way for users to select and upload files. It extends the base [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html) functionality by adding file-specific features such as file selection, displaying selected file names, and supporting multiple file uploads.

## Web Components File Input Example

<div class="divider--half"></div>

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Usage

The [`IgcFileInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html) component allows users to select files from their device and upload them to a web application. It displays the names of selected files and offers customization options for the browse button and the "No file chosen" text. The component also provides properties, methods, and slots that can be used to further configure its behavior to suit your needs.

### Getting Started

To start using the [`IgcFileInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html), first, you need to install the Ignite UI for Web Components by running the following command:

```cmd
npm install igniteui-webcomponents
```

After that, you need to import the [`IgcFileInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html) as follows:

```ts
import { defineComponents, IgcFileInputComponent } from 'igniteui-webcomponents';

defineComponents(IgcFileInputComponent);
```

Now you can start with a basic configuration of the Web Components [`IgcFileInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html).

```html
<igc-file-input label="File Input" required=true></igc-file-input>
```

For a complete introduction to the Ignite UI for Web Components, read the [**Getting Started**](../general-getting-started.md) topic.

## Configuration

### Properties

The [`IgcFileInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html) component offers a variety of properties that allow you to configure its behavior based on specific requirements. These properties give you control over the input’s functionality, appearance, and validation.

- [`value`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html#value) - Sets the current value of the file input field.
- [`disabled`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html#disabled) - Disables the file input, preventing user interaction.
- [`required`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html#required) - Marks the input as mandatory. Form submission will be blocked unless a file is selected.
- [`invalid`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html#invalid) - Indicates that the input value is invalid, used to trigger visual error states.
- [`multiple`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html#multiple) - Allows the selection of multiple files.
- [`accept`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html#accept) - Defines the types of files that can be selected. The value for this property needs to be a comma-separated list of file formats (e.g., .jpg, .png, .gif).
- [`autofocus`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html#autofocus) - Automatically focuses the file input field when the page loads.
- [`label`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html#label) - Sets the label text associated with the file input element.
- [`placeholder`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html#placeholder) - Provides placeholder text displayed when no file is selected.

```html
<igc-file-input
  label="Files Input"
  accept=".jpg, .png, .gif"
  placeholder="Files missing"
  required
  multiple>
</igc-file-input>
```

### Methods

In addition to its configurable properties, there are four useful methods inherited from the [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html) component that you can use in the [`IgcFileInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html) component:

- [`focus`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html#focus) - Sets the focus on the file input element.
- [`blur`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html#blur) - Removes the focus from the file input element.
- [`reportValidity`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html#reportValidity) - Checks the validity of the input and displays a validation message if the input is invalid.
- [`setCustomValidity`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html#setCustomValidity) - Sets a custom validation message. If the provided message is not empty, the input will be marked as invalid.

### Slots

The [`IgcFileInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html) component also exposes several slots that can be used to customize its appearance and behavior.

- `prefix` & `suffix` - Allow you to insert content before or after the main input area.
- `helper-text` - Displays a hint or instructional message below the input. Useful for providing additional guidance, such as formatting tips or field requirements.
- `file-selector-text` - Allow you to customizes the text displayed on the file selection button.
- `file-missing-text` - Sets the text shown in the input field when no file has been selected.
- `value-missing` - Renders custom content when the required field validation fails. (i.e., when a file is required but not provided).
- `invalid` – Allows you to render custom content when the input is in an invalid state.
- `custom-error` - Displays content when a custom validation message is set using the `setCustomValidity()` method.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


## Integration

The [`IgcFileInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html) component integrates seamlessly with the HTML Form element. Using the methods and properties described above, you can effectively manage its behavior and validation within the standard HTML Forms.

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

igc-button {
  margin-top: 10px;
}
```


## Limitations

The [`IgcFileInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html) component currently has the following limitations:

- The default strings for the "Browse" button and the "No file chosen" message is not automatically localized. These strings remain the same across all locales but can be manually customized using the appropriate slots or placeholder binding.
- Files cannot be set manually through the `value` property. File selection can be done only via the file picker. You can however pass an empty string `''` to reset the field.

## Accessibility & ARIA Support

The [`IgcFileInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html) component is both focusable and interactive, ensuring full keyboard and screen reader accessibility. The component can be labeled using the [`label`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html#label) attribute, which leverages the native `<label>` element to provide a semantically correct and accessible label.

To support accessibility best practices, the component also applies relevant ARIA attributes:

- `aria-invalid` - Set to "true" when the input is in an invalid state.
- `aria-describedby` - Automatically linked to the helper text element when present, allowing assistive technologies to announce the additional information.

## Styling

The [`IgcFileInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html) component exposes CSS parts which we can use for styling. The following table lists all of the exposed CSS parts:

|Name|Description|
|--|--|
| `container` | The main wrapper that holds all main input elements. |
| `input` | The native input element. |
| `label` | The native label element. |
| `file-names` | The file names wrapper. |
| `file-selector-button` | The browse button. |
| `prefix` | The prefix wrapper. |
| `suffix` | The suffix wrapper. |
| `helper-text` | The helper text wrapper. |

```scss
igc-file-input::part(file-names) {
  background-color: var(--ig-primary-50);
  color: var(--ig-gray-400);
}

igc-file-input::part(suffix) {
  color: var(--ig-primary-700-contrast);
  background-color: var(--ig-primary-700);
}

igc-file-input::part(label) {
  color: var(--ig-gray-600);
}
```

```css
igc-file-input::part(label) {
    color: var(--ig-gray-600);
}

igc-file-input::part(suffix) {
    background: var(--ig-primary-700);
    color: var(--ig-primary-700-contrast);
}

igc-file-input::part(file-names) {
    --file-names-foreground: var(--ig-gray-400);
    --file-names-foreground--filled: var(--ig-gray-900);

    background: var(--ig-primary-50);
}

igc-file-input::part(file-selector-button) {
    --file-selector-button-foreground: var(--ig-primary-700-contrast);
    --file-selector-button-background: var(--ig-primary-700);
    --file-selector-button-foreground--focused: var(--ig-primary-900-contrast);
    --file-selector-button-background--focused: var(--ig-primary-900);
    --file-selector-button-foreground--filled: var(--ig-primary-700-contrast);
    --file-selector-button-background--filled: var(--ig-primary-700);
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```


<div class="divider"></div>

## API References

- [`IgcFileInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcfileinputcomponent.html)
- [`IgcIconComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igciconcomponent.html)
- [`IgcInputComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcinputcomponent.html)
- [`IgcButtonComponent`](https://www.infragistics.com/products/ignite-ui-web-components/docs/typescript/latest/classes/igcbuttoncomponent.html)
- [`Styling & Themes`](../themes/overview.md)

## Additional Resources

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

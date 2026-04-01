---
title: React ComboBox Component Templates – Ignite UI for React
_description: Ignite UI for React ComboBox component templates
_keywords: Ignite UI for React, UI controls, React widgets, web widgets, UI widgets, React, Native React Components Suite, Native React Controls, Native React Components Library, React ComboBox Component Templates
_license: MIT
mentionedTypes: ["Combo"]
_tocName: Templates
---

# React ComboBox Templates

The Ignite UI for React ComboBox component allows defining custom templates for different areas such as items, group headers, empty list, and icons.

## ComboBox Templates Example

```typescript
export interface City {
    id: string;
    name: string;
    country: string;
  }
  
  export const Cities: City[] = [
    { name: "London", id: "UK01", country: "UK" },
    { name: "Manchester", id: "UK02", country: "UK" },
    { name: "Birmingham", id: "UK03", country: "UK" },
    { name: "Glasgow", id: "UK04", country: "UK" },
    { name: "Liverpool", id: "UK05", country: "UK" },
    { name: "New York", id: "US01", country: "USA" },
    { name: "Miami", id: "US02", country: "USA" },
    { name: "Philadelphia", id: "US03", country: "USA" },
    { name: "Chicago", id: "US04", country: "USA" },
    { name: "Springfield", id: "US05", country: "USA" },
    { name: "Los Angeles", id: "US06", country: "USA" },
    { name: "Houston", id: "US07", country: "USA" },
    { name: "Phoenix", id: "US08", country: "USA" },
    { name: "San Diego", id: "US09", country: "USA" },
    { name: "Dallas", id: "US010", country: "USA" },
    { name: "Sofia", id: "BG01", country: "Bulgaria" },
    { name: "Plovdiv", id: "BG02", country: "Bulgaria" },
    { name: "Varna", id: "BG03", country: "Bulgaria" },
    { name: "Burgas", id: "BG04", country: "Bulgaria" },
    { name: "Rome", id: "IT01", country: "Italy" },
    { name: "Milan", id: "IT02", country: "Italy" },
    { name: "Naples", id: "IT03", country: "Italy" },
    { name: "Turin", id: "IT04", country: "Italy" },
    { name: "Palermo", id: "IT05", country: "Italy" },
    { name: "Florence", id: "IT06", country: "Italy" },
  ];
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

.combo-padding {
  padding: 12px 16px;
}
```
```tsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  IgrCombo,
  ComboTemplateProps,
  IgrIcon,
  registerIconFromText
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities, City } from "./data";
import "./index.css";

export default function ComboTemplates() {

  const downIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"/></svg>';
  const clearIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M120-280v-80h560v80H120Zm80-160v-80h560v80H200Zm80-160v-80h560v80H280Z"/></svg>';

  useEffect(() => {
    registerIconFromText("down", downIcon, "material");
    registerIconFromText("clear", clearIcon, "material");
  }, []);

  const renderGroupHeaderTemplate = (args: ComboTemplateProps<City>) => {
    return <span>Country of {args.item.country}</span>;
  };

  const renderItemTemplate = (args: ComboTemplateProps<City>) => {
    const item = args.item;
    return (
      <span>
        <b>{item.name}</b> [{item.id}] - {item.country}
      </span>
    );
  };

  return (
    <div className="sample">
      <IgrCombo
        valueKey="id"
        displayKey="name"
        groupKey="country"
        data={Cities}
        itemTemplate={renderItemTemplate}
        groupHeaderTemplate={renderGroupHeaderTemplate}
      >
        <header slot="header" className="combo-padding">
          <strong>Select a City</strong>
          <div>List of countries and their most popular cities</div>
        </header>
        <footer slot="footer" className="combo-padding">
          <em>
            Tip: Start typing to find your city if you have troubles finding it.
          </em>
        </footer>
        <span slot="toggle-icon">
          <IgrIcon name="down" collection="material"></IgrIcon>
        </span>
        <span slot="clear-icon">
          <IgrIcon name="clear" collection="material"></IgrIcon>
        </span>
      </IgrCombo>
    </div>
  );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboTemplates />);
```


## Template Types

### Item Template

The [`itemTemplate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#itemTemplate) is a custom template that if defined should be used when rendering items in the list of options.

<!-- React -->

```tsx
type City = {
  name: string;
  id: string;
  country: string;
};

const renderItemTemplate = (args: ComboTemplateProps<City>) => {
  const item = args.item;

  return (
    <span>
      <b>{item.name}</b> [{item.id}] - {item.country}
    </span>
  );
};

<IgrCombo
    valueKey="id"
    displayKey="name"
    groupKey="country"
    data={Cities}
    itemTemplate={renderItemTemplate}
></IgrCombo>
```

<!-- end: React -->

### Group Header Template

The [`groupHeaderTemplate`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html#groupHeaderTemplate) is a custom template that if defined should be used when rendering group headers in the list of options.

<!-- React -->

```tsx
<IgrCombo
    valueKey="id"
    displayKey="name"
    groupKey="country"
    data={cities}
    groupHeaderTemplate={renderGroupHeaderTemplate}
></IgrCombo>

const renderGroupHeaderTemplate = (args: ComboTemplateProps<City>) => {
  return (
  <span>Country of {args.item.country}</span>
  );
}
```

<!-- end: React -->

## Slots

Other than custom templates, the Ignite UI for React ComboBox component exposes several slots that allow users to pass custom content to different combo parts.

### Header Slot

To render a custom header above the list of options pass content to the `header` slot:

```tsx
<IgrCombo>
  <header slot="header">
        Header content goes here
  </header>
</IgrCombo>
```

### Footer Slot

To render a custom footer below the list of options pass content to the `footer` slot:

```tsx
<IgrCombo>
  <footer slot="footer">
        Footer content goes here
  </footer>
</IgrCombo>
```

### Empty List Slot

To render a custom content when the filtering operation returns no result, use the `empty` slot:

```tsx
<IgrCombo>
  <div slot="empty">¯\_(ツ)_/¯</div>
</IgrCombo>
```

### Toggle Icon Slot

The toggle icon in the combo input can also be modified via the `toggle-icon` slot:

```tsx
<IgrCombo>
  <span slot="toggle-icon">
    <IgrIcon name="down" collection="material"></IgrIcon>
  </span>
</IgrCombo>
```

### Clear Icon Slot

The clear icon can be changed via the `clear-icon` slot:

```tsx
<IgrCombo>
  <span slot="clear-icon">
    <IgrIcon name="clear" collection="material"></IgrIcon>
  </span>
</IgrCombo>
```

## Additional Resources

- [Ignite UI for React **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-react)
- [Ignite UI for React **GitHub**](https://github.com/IgniteUI/igniteui-react)

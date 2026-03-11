---
title: Update Guide | Ignite UI for React | Infragistics
_description: Check out this article on updating how to update to a newer version of the Ignite UI for React library.
_keywords: ignite ui for react, update, npm package, material components
mentionedTypes: ["Input", "Button"]
_tocName: Update guide
---

# Update Guide

In the Ignite UI for React versioning the first number always matches the major version of React the code supports and the second is dedicated for major version releases. Breaking changes may be introduced between major releases. A comprehensive list of changes for each release of Ignite UI for React can be found in the product [CHANGELOG](./general-changelog-dv-react.md).

## From 18.9.0 to 19.0.0

This release include a major rework of some of our React components internals leading to the following changes in **igniteui-react** and **igniteui-react-grids** packages:

### General

#### Breaking changes

- Ignite UI for React components are now using React Function Components, therefore references obtained from **useRef** will now be a forward of the native element instead of a class component instance. Many of the use cases could remain unchanged but there are possible changes required such as not needing an extra property to access the DOM element itself.
- Components no longer accept alternative string union on all properties types (e.g **boolean | string** or **number | string**). Additionally, string union types are no longer case-insensitive.

```tsx
<IgrColumn dataType="String" sortable="true"></IgrColumn>
```

Becomes:

```tsx
<IgrColumn dataType="string" sortable={true}></IgrColumn>
```

- Component events are now **on** prefixed, i.e:

```tsx
<IgrGrid columnPin={handlePinning}></IgrGrid>
```

Becomes

```tsx
<IgrGrid onColumnPin={handlePinning}></IgrGrid>
```

- Component events emit a single standard *CustomEvent* argument instead of the `sender` as first argument. Therefore, custom properties like *sender.nativeElement* are no longer available, but native event properties all are. Also, types for event arguments are available as aliases for the specific custom event, so usage accessing `detail` will remain the same. With the new handler signature `event.detail` is the same and `event.target` is the DOM element equivalent to the sender:

```tsx
    const handlePinning = (sender: IgrGridBaseDirective, event: IgrPinColumnCancellableEventArgs) => {};
```

Becomes:

```tsx
    const handlePinning = (event: IgrPinColumnCancellableEventArgs) => {}
    // equivalent to
    const handlePinning = (event: CustomEvent<IgrPinColumnCancellableEventArgsDetail>) => {}
```

- Components no longer have the non-functional `name` property by default. The `name` property only remains in **igniteui-react** components, mostly form inputs such as [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html) and [`IgrCombo`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrcombo.html), where it has native functionality.
- Ignite UI for React components no longer require a `key` property, unless it is necessary according to React\`s [documentation](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)
- The [IgrDataGrid](./grids/data-grid/overview.md) is no longer part of **igniteui-react-grids** package. It has been moved to **igniteui-react-data-grids**, making **igniteui-react-grids** more lightweight.
- There were several types that were exposed as classes in version **18.9.0** which is no longer the case. Those are now exported as types and can be used like this:

```tsx
const pivotConfiguration = new IgrPivotConfiguration();
```

Becomes:

```tsx
const pivotConfiguration: IgrPivotConfiguration = {
  rows: [],
  columns: [],
  values: []
}
```

- [`IgrButton`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrbutton.html)
  - **Breaking Changes**
  - `clicked` event is removed. Use native `onClick` instead.
- [`IgrInput`](https://www.infragistics.com/products/ignite-ui-react/docs/typescript/latest/classes/igniteui-react.igrinput.html)
  - **Breaking Changes**
  - `inputOccurred` event is renamed to `onInput`

# Function: registerIconFromText()

> **registerIconFromText**(`name`, `iconText`, `collection?`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/icon/icon.registry.ts:355](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/icon/icon.registry.ts#L355)

Registers an icon from SVG text content.

## Parameters

### name

`string`

The unique name for the icon

### iconText

`string`

The SVG markup as a string

### collection?

`string` = `'default'`

The collection to register the icon in (default: 'default')

## Returns

`void`

## Throws

If the SVG text is malformed or doesn't contain an SVG element

## Remarks

This is the preferred method for registering icons when you have the SVG
content directly (e.g., from a bundled asset or inline string). The icon
becomes immediately available to all icon components.

The SVG text is parsed to extract viewBox, title, and other metadata.

## Example

```typescript
const iconSvg = '<svg viewBox="0 0 24 24"><path d="..."/></svg>';
registerIconFromText('my-icon', iconSvg, 'custom');

// Use in HTML
// <igc-icon name="my-icon" collection="custom"></igc-icon>
```

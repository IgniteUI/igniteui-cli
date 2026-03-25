# Function: registerIcon()

> **registerIcon**(`name`, `url`, `collection?`): `Promise`\<`void`\>

Defined in: [webcomponents/igniteui-webcomponents/src/components/icon/icon.registry.ts:315](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/icon/icon.registry.ts#L315)

Registers an icon by fetching it from a URL.

## Parameters

### name

`string`

The unique name for the icon

### url

`string`

The URL to fetch the SVG icon from

### collection?

`string` = `'default'`

The collection to register the icon in (default: 'default')

## Returns

`Promise`\<`void`\>

A promise that resolves when the icon is registered

## Throws

If the HTTP request fails or returns a non-OK status

## Remarks

This function fetches SVG content from the provided URL and registers it
in the icon registry. The icon becomes immediately available to all icon
components in the application.

## Example

```typescript
// Register an icon from a URL
await registerIcon('custom-icon', '/assets/icons/custom.svg');

// Use in HTML
// <igc-icon name="custom-icon"></igc-icon>
```

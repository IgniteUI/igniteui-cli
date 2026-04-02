# Function: setIconRef()

> **setIconRef**(`name`, `collection`, `icon`): `void`

Defined in: [webcomponents/igniteui-webcomponents/src/components/icon/icon.registry.ts:396](https://github.com/IgniteUI/igniteui-webcomponents/blob/0b463b45419431e183c47e40c64227a73a821caf/src/components/icon/icon.registry.ts#L396)

Sets an icon reference/alias that points to another icon.

## Parameters

### name

`string`

The alias name

### collection

`string`

The collection for the alias

### icon

`IconMeta`

The target icon metadata (name and collection)

## Returns

`void`

## Remarks

Icon references allow you to create aliases that point to other icons.
This is useful for:
- Creating semantic names (e.g., 'close' → 'x')
- Overriding default icon mappings
- Providing fallbacks for missing icons

User-set references are marked as external and have higher priority than
theme-based aliases. They are also synchronized across browsing contexts.

## Example

```typescript
// Register target icon
registerIconFromText('x-mark', '<svg>...</svg>');

// Create an alias
setIconRef('close', 'default', {
  name: 'x-mark',
  collection: 'default'
});

// Both work the same way:
// <igc-icon name="close"></igc-icon>
// <igc-icon name="x-mark"></igc-icon>
```

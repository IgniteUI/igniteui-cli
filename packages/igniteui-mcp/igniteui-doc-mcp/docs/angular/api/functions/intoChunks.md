# Function: intoChunks()

> **intoChunks**\<`T`\>(`arr`, `size`): `Generator`\<`T`[], `void`, `unknown`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/core/utils.ts:615](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/core/utils.ts#L615)

Splits an array into chunks of length `size` and returns a generator
yielding each chunk.
The last chunk may contain less than `size` elements.

## Type Parameters

### T

`T`

## Parameters

### arr

`T`[]

### size

`number`

## Returns

`Generator`\<`T`[], `void`, `unknown`\>

## Example

```typescript
const arr = [0,1,2,3,4,5,6,7,8,9];

Array.from(chunk(arr, 2)) // [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]]
Array.from(chunk(arr, 3)) // [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9]]
Array.from(chunk([], 3)) // []
Array.from(chunk(arr, -3)) // Error
```

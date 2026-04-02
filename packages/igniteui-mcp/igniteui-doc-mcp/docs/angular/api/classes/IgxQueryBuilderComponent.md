# Class: IgxQueryBuilderComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:42](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L42)

A component used for operating with complex filters by creating or editing conditions
and grouping them using AND/OR logic.
It is used internally in the Advanced Filtering of the Grid.

## Example

```html
<igx-query-builder [entities]="this.entities">
</igx-query-builder>
```

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxQueryBuilderComponent**(): `IgxQueryBuilderComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:252](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L252)

#### Returns

`IgxQueryBuilderComponent`

## Properties

### disableEntityChange

> **disableEntityChange**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:189](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L189)

Disables subsequent entity changes at the root level after the initial selection.

***

### disableReturnFieldsChange

> **disableReturnFieldsChange**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:207](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L207)

Disables return fields changes at the root level.

***

### expressionTreeChange

> **expressionTreeChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:217](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L217)

Event fired as the expression tree is changed.

```html
 <igx-query-builder (expressionTreeChange)='onExpressionTreeChange()'></igx-query-builder>
```

***

### iconService

> `protected` **iconService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:43](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L43)

***

### locale

> **locale**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:167](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L167)

Gets the `locale` of the query builder.
If not set, defaults to application's locale.

***

### showEntityChangeDialog

> **showEntityChangeDialog**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:62](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L62)

Gets/sets whether the confirmation dialog should be shown when changing entity.
Default value is `true`.

## Accessors

### entities

#### Get Signature

> **get** **entities**(): [`EntityType`](../interfaces/EntityType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:72](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L72)

Gets the list of entities available for the IgxQueryBuilderComponent.

Each entity describes a logical group of fields that can be used in queries.
An entity can optionally have child entities, allowing nested sub-queries.

##### Returns

[`EntityType`](../interfaces/EntityType.md)[]

An array of [EntityType](../interfaces/EntityType.md) objects.

#### Set Signature

> **set** **entities**(`entities`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:101](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L101)

Sets the list of entities for the IgxQueryBuilderComponent.
If the `expressionTree` is defined, it will be recreated with the new entities.

Each entity should be an [EntityType](../interfaces/EntityType.md) object describing the fields and optionally child entities.

Example:
```ts
[
  {
    name: 'Orders',
    fields: [{ field: 'OrderID', dataType: 'number' }],
    childEntities: [
      {
        name: 'OrderDetails',
        fields: [{ field: 'ProductID', dataType: 'number' }]
      }
    ]
  }
]
```

##### Parameters

###### entities

[`EntityType`](../interfaces/EntityType.md)[]

The array of entities to set.

##### Returns

`void`

***

### expressionTree

#### Get Signature

> **get** **expressionTree**(): [`IExpressionTree`](../interfaces/IExpressionTree.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:144](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L144)

Returns the expression tree.

##### Returns

[`IExpressionTree`](../interfaces/IExpressionTree.md)

#### Set Signature

> **set** **expressionTree**(`expressionTree`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:152](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L152)

Sets the expression tree.

##### Parameters

###### expressionTree

[`IExpressionTree`](../interfaces/IExpressionTree.md)

##### Returns

`void`

***

### resourceStrings

#### Get Signature

> **get** **resourceStrings**(): `PrefixedResourceStrings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:181](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L181)

Returns the resource strings.

##### Returns

`PrefixedResourceStrings`

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:174](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L174)

Sets the resource strings.
By default it uses EN resources.

##### Parameters

###### value

`PrefixedResourceStrings`

##### Returns

`void`

***

### searchValueTemplate

#### Get Signature

> **get** **searchValueTemplate**(): `TemplateRef`\<`IgxQueryBuilderSearchValueContext`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:199](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L199)

##### Returns

`TemplateRef`\<`IgxQueryBuilderSearchValueContext`\>

#### Set Signature

> **set** **searchValueTemplate**(`template`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:195](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L195)

Sets/gets the search value template.

##### Parameters

###### template

`TemplateRef`\<`IgxQueryBuilderSearchValueContext`\>

##### Returns

`void`

## Methods

### canCommit()

> **canCommit**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:262](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L262)

Returns whether the expression tree can be committed in the current state.

#### Returns

`boolean`

***

### commit()

> **commit**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:269](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L269)

Commits the expression tree in the current state if it is valid. If not throws an exception.

#### Returns

`void`

***

### discard()

> **discard**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:282](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L282)

Discards all unsaved changes to the expression tree.

#### Returns

`void`

***

### onExpressionTreeChange()

> `protected` **onExpressionTreeChange**(`tree`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts:330](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.component.ts#L330)

#### Parameters

##### tree

[`IExpressionTree`](../interfaces/IExpressionTree.md)

#### Returns

`void`

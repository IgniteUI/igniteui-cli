# Class: FilteringExpressionsTree

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:42](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L42)

## Implements

- [`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

## Constructors

### Constructor

> **new FilteringExpressionsTree**(`operator`, `fieldName?`, `entity?`, `returnFields?`): `FilteringExpressionsTree`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:132](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L132)

#### Parameters

##### operator

[`FilteringLogic`](../enumerations/FilteringLogic.md)

##### fieldName?

`string`

##### entity?

`string`

##### returnFields?

`string`[]

#### Returns

`FilteringExpressionsTree`

## Properties

### entity?

> `optional` **entity?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:117](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L117)

Sets/gets the entity.
```typescript
gridExpressionsTree.entity = 'Entity A';
```
```typescript
let entity = gridExpressionsTree.entity;
```

#### Memberof

FilteringExpressionsTree

#### Implementation of

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md).[`entity`](../interfaces/IFilteringExpressionsTree.md#entity)

***

### fieldName?

> `optional` **fieldName?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:90](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L90)

Sets/gets the field name of the column where the filtering expression is placed.
```typescript
gridExpressionTree.fieldName = 'Column Field';
```
```typescript
let columnField = expressionTree.fieldName;
```

#### Memberof

FilteringExpressionsTree

#### Implementation of

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md).[`fieldName`](../interfaces/IFilteringExpressionsTree.md#fieldname)

***

### filteringOperands

> **filteringOperands**: ([`IFilteringExpression`](../interfaces/IFilteringExpression.md) \| [`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md))[] = `[]`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:64](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L64)

Sets/gets the filtering operands.
```typescript
const gridExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
const expression = [
{
  condition: IgxStringFilteringOperand.instance().condition('contains'),
  fieldName: 'Column Field',
  searchVal: 'Value',
  ignoreCase: false
}];
gridExpressionsTree.filteringOperands.push(expression);
this.grid.filteringExpressionsTree = gridExpressionsTree;
```
```typescript
let filteringOperands = gridExpressionsTree.filteringOperands;
```

#### Memberof

FilteringExpressionsTree

#### Implementation of

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md).[`filteringOperands`](../interfaces/IFilteringExpressionsTree.md#filteringoperands)

***

### operator

> **operator**: [`FilteringLogic`](../enumerations/FilteringLogic.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:77](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L77)

Sets/gets the operator.
```typescript
gridExpressionsTree.operator = FilteringLogic.And;
```
```typescript
let operator = gridExpressionsTree.operator;
```

#### Memberof

FilteringExpressionsTree

#### Implementation of

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md).[`operator`](../interfaces/IFilteringExpressionsTree.md#operator)

***

### returnFields?

> `optional` **returnFields?**: `string`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:130](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L130)

Sets/gets the return fields.
```typescript
gridExpressionsTree.returnFields = ['Column Field 1', 'Column Field 2'];
```
```typescript
let returnFields = gridExpressionsTree.returnFields;
```

#### Memberof

FilteringExpressionsTree

#### Implementation of

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md).[`returnFields`](../interfaces/IFilteringExpressionsTree.md#returnfields)

***

### type?

> `optional` **type?**: [`FilteringExpressionsTreeType`](../enumerations/FilteringExpressionsTreeType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:104](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L104)

Sets/gets the type of the filtering expressions tree.
```typescript
gridExpressionTree.type = FilteringExpressionsTree.Advanced;
```
```typescript
let type = expressionTree.type;
```

#### Memberof

FilteringExpressionsTree

#### Implementation of

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md).[`type`](../interfaces/IFilteringExpressionsTree.md#type)

## Methods

### ~~find()~~

> **find**(`fieldName`): [`IFilteringExpression`](../interfaces/IFilteringExpression.md) \| [`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:158](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L158)

Returns the filtering expression for a column with the provided fieldName.
```typescript
let filteringExpression = gridExpressionTree.find('Column Field');
```

#### Parameters

##### fieldName

`string`

#### Returns

[`IFilteringExpression`](../interfaces/IFilteringExpression.md) \| [`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

#### Memberof

FilteringExpressionsTree

#### Deprecated

in version 18.2.0. Use `ExpressionsTreeUtil.find` instead.

#### Implementation of

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md).[`find`](../interfaces/IFilteringExpressionsTree.md#find)

***

### ~~findIndex()~~

> **findIndex**(`fieldName`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:172](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L172)

Returns the index of the filtering expression for a column with the provided fieldName.
```typescript
let filteringExpressionIndex = gridExpressionTree.findIndex('Column Field');
```

#### Parameters

##### fieldName

`string`

#### Returns

`number`

#### Memberof

FilteringExpressionsTree

#### Deprecated

in version 18.2.0. Use `ExpressionsTreeUtil.findIndex` instead.

#### Implementation of

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md).[`findIndex`](../interfaces/IFilteringExpressionsTree.md#findindex)

***

### empty()

> `static` **empty**(`expressionTree`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts:144](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/filtering-expressions-tree.ts#L144)

Checks if filtering expressions tree is empty.

#### Parameters

##### expressionTree

[`IFilteringExpressionsTree`](../interfaces/IFilteringExpressionsTree.md)

filtering expressions tree.

#### Returns

`boolean`

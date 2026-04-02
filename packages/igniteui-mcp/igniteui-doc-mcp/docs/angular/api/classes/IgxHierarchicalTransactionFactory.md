# Class: IgxHierarchicalTransactionFactory

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction-factory.service.ts:49](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction-factory.service.ts#L49)

Factory service for instantiating HierarchicalTransactionServices

## Extends

- [`IgxFlatTransactionFactory`](IgxFlatTransactionFactory.md)

## Constructors

### Constructor

> **new IgxHierarchicalTransactionFactory**(): `IgxHierarchicalTransactionFactory`

#### Returns

`IgxHierarchicalTransactionFactory`

#### Inherited from

[`IgxFlatTransactionFactory`](IgxFlatTransactionFactory.md).[`constructor`](IgxFlatTransactionFactory.md#constructor)

## Methods

### create()

> **create**(`type`): [`HierarchicalTransactionService`](../interfaces/HierarchicalTransactionService.md)\<`HierarchicalTransaction`, `HierarchicalState`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction-factory.service.ts:57](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction-factory.service.ts#L57)

Creates a new HierarchialTransaction service instance depending on the specified type.

#### Parameters

##### type

[`TRANSACTION_TYPE`](../enumerations/TRANSACTION_TYPE.md)

The type of the transaction

#### Returns

[`HierarchicalTransactionService`](../interfaces/HierarchicalTransactionService.md)\<`HierarchicalTransaction`, `HierarchicalState`\>

a new instance of HierarchialTransaction<HierarchialTransaction, HierarchialState>

#### Overrides

[`IgxFlatTransactionFactory`](IgxFlatTransactionFactory.md).[`create`](IgxFlatTransactionFactory.md#create)

# Class: IgxFlatTransactionFactory

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction-factory.service.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction-factory.service.ts#L25)

Factory service for instantiating TransactionServices

## Extended by

- [`IgxHierarchicalTransactionFactory`](IgxHierarchicalTransactionFactory.md)

## Constructors

### Constructor

> **new IgxFlatTransactionFactory**(): `IgxFlatTransactionFactory`

#### Returns

`IgxFlatTransactionFactory`

## Methods

### create()

> **create**(`type`): [`TransactionService`](../interfaces/TransactionService.md)\<[`Transaction`](../interfaces/Transaction.md), [`State`](../interfaces/State.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction-factory.service.ts:33](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction-factory.service.ts#L33)

Creates a new Transaction service instance depending on the specified type.

#### Parameters

##### type

[`TRANSACTION_TYPE`](../enumerations/TRANSACTION_TYPE.md)

The type of the transaction

#### Returns

[`TransactionService`](../interfaces/TransactionService.md)\<[`Transaction`](../interfaces/Transaction.md), [`State`](../interfaces/State.md)\>

a new instance of TransactionService<Transaction, State>

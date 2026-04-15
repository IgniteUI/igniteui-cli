# Interface: HierarchicalTransactionService\<T, S\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/hierarchical-transaction.ts:3](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/hierarchical-transaction.ts#L3)

## Extends

- [`TransactionService`](TransactionService.md)\<`T`, `S`\>

## Type Parameters

### T

`T` *extends* `HierarchicalTransaction`

### S

`S` *extends* `HierarchicalState`

## Properties

### canRedo

> **canRedo**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction.ts:80](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction.ts#L80)

#### Returns

if there are any transactions in the Redo stack

#### Inherited from

[`TransactionService`](TransactionService.md).[`canRedo`](TransactionService.md#canredo)

***

### canUndo

> **canUndo**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction.ts:75](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction.ts#L75)

#### Returns

if there are any transactions in the Undo stack

#### Inherited from

[`TransactionService`](TransactionService.md).[`canUndo`](TransactionService.md#canundo)

***

### cloneStrategy

> **cloneStrategy**: [`IDataCloneStrategy`](IDataCloneStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction.ts:65](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction.ts#L65)

Gets/Sets the data clone strategy used to clone data

#### Inherited from

[`TransactionService`](TransactionService.md).[`cloneStrategy`](TransactionService.md#clonestrategy)

***

### enabled

> `readonly` **enabled**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction.ts:60](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction.ts#L60)

Returns whether transaction is enabled for this service

#### Inherited from

[`TransactionService`](TransactionService.md).[`enabled`](TransactionService.md#enabled)

***

### onStateUpdate?

> `optional` **onStateUpdate?**: `EventEmitter`\<[`StateUpdateEvent`](StateUpdateEvent.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction.ts:70](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction.ts#L70)

Event fired when transaction state has changed - add transaction, commit all transactions, undo and redo

#### Inherited from

[`TransactionService`](TransactionService.md).[`onStateUpdate`](TransactionService.md#onstateupdate)

## Methods

### add()

> **add**(`transaction`, `recordRef?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction.ts:88](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction.ts#L88)

Adds provided  transaction with recordRef if any

#### Parameters

##### transaction

`T`

Transaction to be added

##### recordRef?

`any`

Reference to the value of the record in the data source related to the changed item

#### Returns

`void`

#### Inherited from

[`TransactionService`](TransactionService.md).[`add`](TransactionService.md#add)

***

### clear()

> **clear**(`id?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction.ts:149](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction.ts#L149)

Clears all transactions

#### Parameters

##### id?

`any`

Optional record id to clear transactions for

#### Returns

`void`

#### Inherited from

[`TransactionService`](TransactionService.md).[`clear`](TransactionService.md#clear)

***

### commit()

#### Call Signature

> **commit**(`data`, `id?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/hierarchical-transaction.ts:11](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/hierarchical-transaction.ts#L11)

Applies all transactions over the provided data

##### Parameters

###### data

`any`[]

Data source to update

###### id?

`any`

Optional record id to commit transactions for

##### Returns

`void`

##### Overrides

[`TransactionService`](TransactionService.md).[`commit`](TransactionService.md#commit)

#### Call Signature

> **commit**(`data`, `primaryKey`, `childDataKey`, `id?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/hierarchical-transaction.ts:20](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/hierarchical-transaction.ts#L20)

Applies all transactions over the provided data

##### Parameters

###### data

`any`[]

Data source to update

###### primaryKey

`any`

Primary key of the hierarchical data

###### childDataKey

`any`

Key of child data collection

###### id?

`any`

Optional record id to commit transactions for

##### Returns

`void`

##### Overrides

`TransactionService.commit`

***

### endPending()

> **endPending**(`commit`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction.ts:163](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction.ts#L163)

Clears all pending transactions and aggregated pending state. If commit is set to true
commits pending states as single transaction

#### Parameters

##### commit

`boolean`

Should commit the pending states

#### Returns

`void`

#### Inherited from

[`TransactionService`](TransactionService.md).[`endPending`](TransactionService.md#endpending)

***

### getAggregatedChanges()

> **getAggregatedChanges**(`mergeChanges`): `T`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction.ts:115](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction.ts#L115)

Returns aggregated changes from all transactions

#### Parameters

##### mergeChanges

`boolean`

If set to true will merge each state's value over relate recordRef
and will record resulting value in the related transaction

#### Returns

`T`[]

Collection of aggregated transactions for each changed record

#### Inherited from

[`TransactionService`](TransactionService.md).[`getAggregatedChanges`](TransactionService.md#getaggregatedchanges)

***

### getAggregatedValue()

> **getAggregatedValue**(`id`, `mergeChanges`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction.ts:134](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction.ts#L134)

Returns value of the required id including all uncommitted changes

#### Parameters

##### id

`any`

The id of the record to return value for

##### mergeChanges

`boolean`

If set to true will merge state's value over relate recordRef
and will return merged value

#### Returns

`any`

Value with changes or **null**

#### Inherited from

[`TransactionService`](TransactionService.md).[`getAggregatedValue`](TransactionService.md#getaggregatedvalue)

***

### getState()

> **getState**(`id`, `pending?`): `S`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction.ts:124](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction.ts#L124)

Returns the state of the record with provided id

#### Parameters

##### id

`any`

The id of the record

##### pending?

`boolean`

Should get pending state

#### Returns

`S`

State of the record if any

#### Inherited from

[`TransactionService`](TransactionService.md).[`getState`](TransactionService.md#getstate)

***

### getTransactionLog()

> **getTransactionLog**(`id?`): `T`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction.ts:96](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction.ts#L96)

Returns all recorded transactions in chronological order

#### Parameters

##### id?

`any`

Optional record id to get transactions for

#### Returns

`T`[]

All transaction in the service or for the specified record

#### Inherited from

[`TransactionService`](TransactionService.md).[`getTransactionLog`](TransactionService.md#gettransactionlog)

***

### redo()

> **redo**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction.ts:106](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction.ts#L106)

Applies the last undone transaction if any

#### Returns

`void`

#### Inherited from

[`TransactionService`](TransactionService.md).[`redo`](TransactionService.md#redo)

***

### startPending()

> **startPending**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction.ts:155](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction.ts#L155)

Starts pending transactions. All transactions passed after call to startPending
will not be added to transaction log

#### Returns

`void`

#### Inherited from

[`TransactionService`](TransactionService.md).[`startPending`](TransactionService.md#startpending)

***

### undo()

> **undo**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/transaction.ts:101](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/transaction.ts#L101)

Remove the last transaction if any

#### Returns

`void`

#### Inherited from

[`TransactionService`](TransactionService.md).[`undo`](TransactionService.md#undo)

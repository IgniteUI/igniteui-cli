# Class: IgxBaseTransactionService\<T, S\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:6](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L6)

## Extended by

- [`IgxTransactionService`](IgxTransactionService.md)

## Type Parameters

### T

`T` *extends* [`Transaction`](../interfaces/Transaction.md)

### S

`S` *extends* [`State`](../interfaces/State.md)

## Implements

- [`TransactionService`](../interfaces/TransactionService.md)\<`T`, `S`\>

## Constructors

### Constructor

> **new IgxBaseTransactionService**\<`T`, `S`\>(): `IgxBaseTransactionService`\<`T`, `S`\>

#### Returns

`IgxBaseTransactionService`\<`T`, `S`\>

## Properties

### \_isPending

> `protected` **\_isPending**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L46)

***

### \_pendingStates

> `protected` **\_pendingStates**: `Map`\<`any`, `S`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:48](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L48)

***

### \_pendingTransactions

> `protected` **\_pendingTransactions**: `T`[] = `[]`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:47](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L47)

***

### onStateUpdate

> **onStateUpdate**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:44](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L44)

Event fired when transaction state has changed - add transaction, commit all transactions, undo and redo

#### Implementation of

[`TransactionService`](../interfaces/TransactionService.md).[`onStateUpdate`](../interfaces/TransactionService.md#onstateupdate)

## Accessors

### canRedo

#### Get Signature

> **get** **canRedo**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:23](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L23)

##### Returns

`boolean`

if there are any transactions in the Redo stack

#### Implementation of

[`TransactionService`](../interfaces/TransactionService.md).[`canRedo`](../interfaces/TransactionService.md#canredo)

***

### canUndo

#### Get Signature

> **get** **canUndo**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:30](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L30)

##### Returns

`boolean`

if there are any transactions in the Undo stack

#### Implementation of

[`TransactionService`](../interfaces/TransactionService.md).[`canUndo`](../interfaces/TransactionService.md#canundo)

***

### cloneStrategy

#### Get Signature

> **get** **cloneStrategy**(): [`IDataCloneStrategy`](../interfaces/IDataCloneStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:10](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L10)

Gets/Sets the data clone strategy used to clone data

##### Returns

[`IDataCloneStrategy`](../interfaces/IDataCloneStrategy.md)

#### Set Signature

> **set** **cloneStrategy**(`strategy`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:14](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L14)

Gets/Sets the data clone strategy used to clone data

##### Parameters

###### strategy

[`IDataCloneStrategy`](../interfaces/IDataCloneStrategy.md)

##### Returns

`void`

Gets/Sets the data clone strategy used to clone data

#### Implementation of

[`TransactionService`](../interfaces/TransactionService.md).[`cloneStrategy`](../interfaces/TransactionService.md#clonestrategy)

***

### enabled

#### Get Signature

> **get** **enabled**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:37](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L37)

Returns whether transaction is enabled for this service

##### Returns

`boolean`

Returns whether transaction is enabled for this service

#### Implementation of

[`TransactionService`](../interfaces/TransactionService.md).[`enabled`](../interfaces/TransactionService.md#enabled)

## Methods

### add()

> **add**(`transaction`, `recordRef?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:57](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L57)

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

#### Implementation of

[`TransactionService`](../interfaces/TransactionService.md).[`add`](../interfaces/TransactionService.md#add)

***

### cleanState()

> `protected` **cleanState**(`id`, `states`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:223](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L223)

Compares the state with recordRef and clears all duplicated values. If any state ends as
empty object removes it from states.

#### Parameters

##### id

`any`

##### states

`Map`\<`any`, `S`\>

#### Returns

`void`

***

### clear()

> **clear**(`_id?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:143](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L143)

Clears all transactions

#### Parameters

##### \_id?

`any`

#### Returns

`void`

#### Implementation of

[`TransactionService`](../interfaces/TransactionService.md).[`clear`](../interfaces/TransactionService.md#clear)

***

### commit()

> **commit**(`_data`, `_id?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:136](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L136)

Applies all transactions over the provided data

#### Parameters

##### \_data

`any`[]

##### \_id?

`any`

#### Returns

`void`

#### Implementation of

[`TransactionService`](../interfaces/TransactionService.md).[`commit`](../interfaces/TransactionService.md#commit)

***

### endPending()

> **endPending**(`_commit`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:162](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L162)

Clears all pending transactions and aggregated pending state. If commit is set to true
commits pending states as single transaction

#### Parameters

##### \_commit

`boolean`

#### Returns

`void`

#### Implementation of

[`TransactionService`](../interfaces/TransactionService.md).[`endPending`](../interfaces/TransactionService.md#endpending)

***

### getAggregatedChanges()

> **getAggregatedChanges**(`mergeChanges`): `T`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:91](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L91)

Returns aggregated changes from all transactions

#### Parameters

##### mergeChanges

`boolean`

If set to true will merge each state's value over relate recordRef
and will record resulting value in the related transaction

#### Returns

`T`[]

Collection of aggregated transactions for each changed record

#### Implementation of

[`TransactionService`](../interfaces/TransactionService.md).[`getAggregatedChanges`](../interfaces/TransactionService.md#getaggregatedchanges)

***

### getAggregatedValue()

> **getAggregatedValue**(`id`, `mergeChanges`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:119](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L119)

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

#### Implementation of

[`TransactionService`](../interfaces/TransactionService.md).[`getAggregatedValue`](../interfaces/TransactionService.md#getaggregatedvalue)

***

### getState()

> **getState**(`id`): `S`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:107](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L107)

Returns the state of the record with provided id

#### Parameters

##### id

`any`

The id of the record

#### Returns

`S`

State of the record if any

#### Implementation of

[`TransactionService`](../interfaces/TransactionService.md).[`getState`](../interfaces/TransactionService.md#getstate)

***

### getTransactionLog()

> **getTransactionLog**(`_id?`): `T`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:70](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L70)

Returns all recorded transactions in chronological order

#### Parameters

##### \_id?

`any`

#### Returns

`T`[]

All transaction in the service or for the specified record

#### Implementation of

[`TransactionService`](../interfaces/TransactionService.md).[`getTransactionLog`](../interfaces/TransactionService.md#gettransactionlog)

***

### mergeValues()

> `protected` **mergeValues**\<`U`\>(`first`, `second`): `U`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:209](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L209)

Merges second values in first value and the result in empty object. If values are primitive type
returns second value if exists, or first value.

#### Type Parameters

##### U

`U`

#### Parameters

##### first

`U`

Value to merge into

##### second

`U`

Value to merge

#### Returns

`U`

***

### redo()

> **redo**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:82](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L82)

Applies the last undone transaction if any

#### Returns

`void`

#### Implementation of

[`TransactionService`](../interfaces/TransactionService.md).[`redo`](../interfaces/TransactionService.md#redo)

***

### startPending()

> **startPending**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:152](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L152)

Starts pending transactions. All transactions passed after call to startPending
will not be added to transaction log

#### Returns

`void`

#### Implementation of

[`TransactionService`](../interfaces/TransactionService.md).[`startPending`](../interfaces/TransactionService.md#startpending)

***

### undo()

> **undo**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:77](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L77)

Remove the last transaction if any

#### Returns

`void`

#### Implementation of

[`TransactionService`](../interfaces/TransactionService.md).[`undo`](../interfaces/TransactionService.md#undo)

***

### updateState()

> `protected` **updateState**(`states`, `transaction`, `recordRef?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:176](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L176)

Updates the provided states collection according to passed transaction and recordRef

#### Parameters

##### states

`Map`\<`any`, `S`\>

States collection to apply the update to

##### transaction

`T`

Transaction to apply to the current state

##### recordRef?

`any`

Reference to the value of the record in data source, if any, where transaction should be applied

#### Returns

`void`

***

### updateValue()

> `protected` **updateValue**(`state`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:198](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L198)

Updates the recordRef of the provided state with all the changes in the state. Accepts primitive and object value types

#### Parameters

##### state

`S`

State to update value for

#### Returns

`any`

updated value including all the changes in provided state

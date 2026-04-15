# Class: IgxTransactionService\<T, S\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:5](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L5)

## Extends

- [`IgxBaseTransactionService`](IgxBaseTransactionService.md)\<`T`, `S`\>

## Type Parameters

### T

`T` *extends* [`Transaction`](../interfaces/Transaction.md)

### S

`S` *extends* [`State`](../interfaces/State.md)

## Constructors

### Constructor

> **new IgxTransactionService**\<`T`, `S`\>(): `IgxTransactionService`\<`T`, `S`\>

#### Returns

`IgxTransactionService`\<`T`, `S`\>

#### Inherited from

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`constructor`](IgxBaseTransactionService.md#constructor)

## Properties

### \_isPending

> `protected` **\_isPending**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L46)

#### Inherited from

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`_isPending`](IgxBaseTransactionService.md#_ispending)

***

### \_pendingStates

> `protected` **\_pendingStates**: `Map`\<`any`, `S`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:48](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L48)

#### Inherited from

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`_pendingStates`](IgxBaseTransactionService.md#_pendingstates)

***

### \_pendingTransactions

> `protected` **\_pendingTransactions**: `T`[] = `[]`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:47](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L47)

#### Inherited from

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`_pendingTransactions`](IgxBaseTransactionService.md#_pendingtransactions)

***

### \_redoStack

> `protected` **\_redoStack**: [`Action`](../interfaces/Action.md)\<`T`\>[][] = `[]`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:8](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L8)

***

### \_states

> `protected` **\_states**: `Map`\<`any`, `S`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:10](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L10)

***

### \_transactions

> `protected` **\_transactions**: `T`[] = `[]`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:7](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L7)

***

### \_undoStack

> `protected` **\_undoStack**: [`Action`](../interfaces/Action.md)\<`T`\>[][] = `[]`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:9](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L9)

***

### onStateUpdate

> **onStateUpdate**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:44](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L44)

Event fired when transaction state has changed - add transaction, commit all transactions, undo and redo

#### Inherited from

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`onStateUpdate`](IgxBaseTransactionService.md#onstateupdate)

## Accessors

### canRedo

#### Get Signature

> **get** **canRedo**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:22](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L22)

##### Returns

`boolean`

if there are any transactions in the Redo stack

#### Overrides

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`canRedo`](IgxBaseTransactionService.md#canredo)

***

### canUndo

#### Get Signature

> **get** **canUndo**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L15)

##### Returns

`boolean`

if there are any transactions in the Undo stack

#### Overrides

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`canUndo`](IgxBaseTransactionService.md#canundo)

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

#### Inherited from

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`cloneStrategy`](IgxBaseTransactionService.md#clonestrategy)

***

### enabled

#### Get Signature

> **get** **enabled**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:81](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L81)

Returns whether transaction is enabled for this service

##### Returns

`boolean`

Returns whether transaction is enabled for this service

#### Overrides

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`enabled`](IgxBaseTransactionService.md#enabled)

## Methods

### add()

> **add**(`transaction`, `recordRef?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:32](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L32)

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

#### Overrides

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`add`](IgxBaseTransactionService.md#add)

***

### addTransaction()

> `protected` **addTransaction**(`transaction`, `states`, `recordRef?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:219](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L219)

#### Parameters

##### transaction

`T`

##### states

`Map`\<`any`, `S`\>

##### recordRef?

`any`

#### Returns

`void`

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

#### Inherited from

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`cleanState`](IgxBaseTransactionService.md#cleanstate)

***

### clear()

> **clear**(`id?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:163](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L163)

Clears all transactions

#### Parameters

##### id?

`any`

Optional record id to clear transactions for

#### Returns

`void`

#### Overrides

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`clear`](IgxBaseTransactionService.md#clear)

***

### commit()

> **commit**(`data`, `id?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:144](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L144)

Applies all transactions over the provided data

#### Parameters

##### data

`any`[]

Data source to update

##### id?

`any`

Optional record id to commit transactions for

#### Returns

`void`

#### Overrides

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`commit`](IgxBaseTransactionService.md#commit)

***

### endPending()

> **endPending**(`commit`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:118](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L118)

Clears all pending transactions and aggregated pending state. If commit is set to true
commits pending states as single transaction

#### Parameters

##### commit

`boolean`

Should commit the pending states

#### Returns

`void`

#### Overrides

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`endPending`](IgxBaseTransactionService.md#endpending)

***

### getAggregatedChanges()

> **getAggregatedChanges**(`mergeChanges`): `T`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:58](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L58)

Returns aggregated changes from all transactions

#### Parameters

##### mergeChanges

`boolean`

If set to true will merge each state's value over relate recordRef
and will record resulting value in the related transaction

#### Returns

`T`[]

Collection of aggregated transactions for each changed record

#### Overrides

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`getAggregatedChanges`](IgxBaseTransactionService.md#getaggregatedchanges)

***

### getAggregatedValue()

> **getAggregatedValue**(`id`, `mergeChanges`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:93](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L93)

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

#### Overrides

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`getAggregatedValue`](IgxBaseTransactionService.md#getaggregatedvalue)

***

### getState()

> **getState**(`id`, `pending?`): `S`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:74](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L74)

Returns the state of the record with provided id

#### Parameters

##### id

`any`

The id of the record

##### pending?

`boolean` = `false`

Should get pending state

#### Returns

`S`

State of the record if any

#### Overrides

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`getState`](IgxBaseTransactionService.md#getstate)

***

### getTransactionLog()

> **getTransactionLog**(`id?`): `T`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:44](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L44)

Returns all recorded transactions in chronological order

#### Parameters

##### id?

`any`

Optional record id to get transactions for

#### Returns

`T`[]

All transaction in the service or for the specified record

#### Overrides

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`getTransactionLog`](IgxBaseTransactionService.md#gettransactionlog)

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

#### Inherited from

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`mergeValues`](IgxBaseTransactionService.md#mergevalues)

***

### redo()

> **redo**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:206](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L206)

Applies the last undone transaction if any

#### Returns

`void`

#### Overrides

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`redo`](IgxBaseTransactionService.md#redo)

***

### startPending()

> **startPending**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts:152](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/base-transaction.ts#L152)

Starts pending transactions. All transactions passed after call to startPending
will not be added to transaction log

#### Returns

`void`

#### Inherited from

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`startPending`](IgxBaseTransactionService.md#startpending)

***

### undo()

> **undo**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:184](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L184)

Remove the last transaction if any

#### Returns

`void`

#### Overrides

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`undo`](IgxBaseTransactionService.md#undo)

***

### updateRecord()

> `protected` **updateRecord**(`data`, `state`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:317](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L317)

Updates state related record in the provided data

#### Parameters

##### data

`any`[]

Data source to update

##### state

`S`

State to update data from

#### Returns

`void`

***

### updateState()

> `protected` **updateState**(`states`, `transaction`, `recordRef?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:269](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L269)

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

#### Overrides

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`updateState`](IgxBaseTransactionService.md#updatestate)

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

#### Inherited from

[`IgxBaseTransactionService`](IgxBaseTransactionService.md).[`updateValue`](IgxBaseTransactionService.md#updatevalue)

***

### verifyAddedTransaction()

> `protected` **verifyAddedTransaction**(`states`, `transaction`, `recordRef?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts:238](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/services/transaction/igx-transaction.ts#L238)

Verifies if the passed transaction is correct. If not throws an exception.

#### Parameters

##### states

`Map`\<`any`, `S`\>

##### transaction

`T`

Transaction to be verified

##### recordRef?

`any`

#### Returns

`void`

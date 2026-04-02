---
title: Angular Batch Editing | Transaction Service | Ignite UI for Angular | Infragistics
_description: Learn about the hierarchy of the Transaction Service class, that allows implementing batch editing when executing Angular CRUD operations on your components.
_keywords: batch editing, igniteui for angular, infragistics
_tocName: Transaction Service class hierarchy
_premium: true
---

# Transaction Service class hierarchy

## Transaction, State, Transaction Log

The Transaction is the main building block of the [Transaction service](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html). The Transaction is actually every operation that you execute on the data. The [`Transaction`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transaction.html) interface defines three properties: [`id`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transaction.html#id), [`newValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transaction.html#newValue) and [`type`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transaction.html#type).

The [`id`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transaction.html#id) of the Transaction should be unique per data record and defines the record that this transaction is affecting. The [`type`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/transactiontype.html#type) may be any of the three transaction types: `ADD`, `DELETE` and `UPDATE`, depending what operation you execute. The [`newValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transaction.html#newValue) contains the value of the new record in case you are adding an `ADD` transaction. If you are updating an existing record, the [`newValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transaction.html#newValue) would contain the changes only. You may have several transactions of `UPDATE` type with same id. If you are deleting a record, the [`newValue`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transaction.html#newValue) will contain the value of the deleted record.

You can see an example of how adding each type of transaction looks like in the [How to use the Transaction service](transaction-how-to-use.md) topic.

Every time you add a Transaction, it is added to the transaction log and undo stack. All the changes in the transaction log are then accumulated per record. From that point, the service maintains an aggregated [`State`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/state.html). The [`State`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/state.html) consists of unique records and every record may be of one of the supported transaction types, mentioned above.

While adding transactions you may turn on pending transactions by calling [`startPending`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transactionservice.html#startpending). All subsequent transactions will be accumulated in single transaction until you call [`endPending`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transactionservice.html#endpending). If you pass `true` to [`endPending`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transactionservice.html#endpending) all accumulated transactions will be added as a single transaction in the transaction log and in the undo stack.

## Using igxBaseTransaction

Our grid module provides a very basic implementation of the Transaction service ([`igxBaseTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbasetransactionservice.html)) with just pending session functionality allowing for Row Editing feature. By using [`startPending`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transactionservice.html#startpending) and [`endPending`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transactionservice.html#endpending) Row editing can combine multiple per-cell operations into a single change. This means editing multiple cells of a single record creates a single transaction and you can handle just the row edit event.

With the accumulated state being a partial object, we can also use the service to check which cell has been edited and build UI around that.

The [`igxBaseTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbasetransactionservice.html) has no undo stack so it does not provide undo/redo functionality.

A detailed example of how you may use [`igxBaseTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbasetransactionservice.html) to enable Row Editing is provided in the following topics:

- [Grid Row Editing](grid/row-editing.md)
- [Tree Grid Row Editing](treegrid/row-editing.md)
- [Hierarchical Grid Row Editing](hierarchicalgrid/row-editing.md)

## General information on igxTransactionService and igxHierarchicalTransactionService

[`igxTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html) and [`igxHierarchicalTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicaltransactionservice.html) are injectable middlewares, that implement the [`Transaction Service`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transactionservice.html) interface. A component may use those to accumulate changes without affecting the underlying data. The provider exposes API to _access_, _manipulate_ (undo and redo) and _discard or commit_ one or all changes to the data.

In a more concrete example, [`igxTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html) and [`igxHierarchicalTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicaltransactionservice.html) can work with both cell editing and row editing of the [`IgxGrid`](grid/grid.md). The transaction for the cell edit is added when the cell exits edit mode. When row editing starts the grid sets its transaction service in pending state by calling [`startPending`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transactionservice.html#startpending). Each edited cell is added to the pending transaction log and is not added to the main transaction log. When the row exits edit mode all the changes are added to the main transaction log and to the undo log as a single transaction.

In both cases (cell editing and row editing) the state of the grid edits consists of all updated, added and deleted rows and their last states. Those can later be inspected, manipulated and submitted at once or per id. Changes are collected for individual cells or rows, depending on editing mode, and accumulated per data row/record.

## Using igxTransactionService

[`igxTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html) extends [`igxBaseTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbasetransactionservice.html).

If you want your component to use transactions when making data operation, you need to define the [`igxTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html) as a provider in your component's `providers` array.

The [`igxTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html) provides an undo stack so you may get advantage of the undo/redo functionality. The Undo stack is actually an array that contains arrays of transactions. When using the [`igxTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html), you may check the [`canUndo`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html#canundo) accessor in order to understand if there are any transactions in the Undo stack. If there are - you may use the [`undo`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html#undo) method to remove the last transaction and [`redo`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html#redo) to apply the last undone transaction.

You may find a detailed example of how igxGrid with Batch Editing is implemented in the following topic:

- [Grid Batch Editing](grid/batch-editing.md)

## Using igxHierarchicalTransactionService

[`igxHierarchicalTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicaltransactionservice.html) extends [`igxTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html).

The [`igxHierarchicalTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicaltransactionservice.html) is designed to handle the relations between parents and children (use this when you have a hierarchical data structure, as in [`igxTreeGrid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html), for example). The service ensures that a new record will be added to the place you expect when adding an `ADD` transaction. When you delete a parent record, its' children will be promoted to the higher level of hierarchy, or will be deleted with their parent, depending on implementation. You can see the [`cascadeOnDelete`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html#cascadeondelete) property of the tree grid for a concrete example - depending on the value, deleting a parent record will have different effects on its children.

In your application, you may want to handle the scenario where the user tries to add a child record to a parent record that is already deleted and is waiting for the transaction to be committed. The Transaction Service will not allow adding a record to a parent that is to be deleted and an error message will be shown in the Console. However, you may check if a parent is to be deleted and implement your own alert to the user using the following code:

```typescript
    const state = this.transactions.getState(parentRecordID);
    if (state && state.type === TransactionType.DELETE) {
        // Implement your logic here
    }
```

You may find a detailed examples of how [`igxTreeGrid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) and [`igxHierarchicalGrid`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html) with Batch Editing are implemented in the following topics:

- [Tree Grid Batch Editing](treegrid/batch-editing.md)
- [Hierarchical Grid Batch Editing](hierarchicalgrid/batch-editing.md)

## Transaction Factory

In the concrete implementation of transactions inside of Ignite UI for Angular grids, a factory is used in order to instantiate the proper transaction service, depending on the value of the grid's [`batchEditing`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#batchediting). There are two separate transaction factories - the [`IgxFlatTransactionFactory`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxflatransactionfactory.html) (used for [`Grid`](grid/batch-editing.md) and [`Hierarchical Grid`](hierarchicalgrid/batch-editing.md)) and [`IgxHierarchicalTransactionFactory`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicaltransactionfactory.html) (used for [Tree Grid](treegrid/batch-editing.md)). Both classes expose only one method - `create` - which returns a new instance of the proper [type](#general-information-on-igxtransactionservice-and-igxhierarchicaltransactionservice). The parameter passed (`TRANSACTION_TYPE`) is internally used - `None` is used when `batchEditing` is **false** and `Base` - when batch editing is enabled. An `enum` is used (instead of a `true` - `false` flag), as it allows to be expanded upon.

## Using Transaction Factory

Both [`IgxFlatTransactionFactory`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxflatransactionfactory.html) and [`IgxHierarchicalTransactionFactory`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicaltransactionfactory.html) are provided in `root` and are exposed in the public API. If you want to instantiate a new instance of a transaction service, depending on some arbitrary check, you can use a transaction factory.

In the below example, you can see how you can instantiate different transaction services depending on an arbitrary (`hasUndo`) flag:

```typescript
import { IgxFlatTransactionFactory, TRANSACTION_TYPE } from 'igniteui-angular/core';
// import { IgxFlatTransactionFactory, TRANSACTION_TYPE } from '@infragistics/igniteui-angular'; for licensed package

export class MyCustomComponent {
    ...
    constructor(private transactionFactory: IgxFlatTransactionFactory) {}
    ...
    public transaction!: IgxTransactionService<Transaction, State>;

    public set hasUndo(val: boolean) {
        if (val) {
            this.transactions = this.transactionFactory.create(TRANSACTION_TYPE.Base);
        } else {
            this.transactions = this.transactionFactory.create(TRANSACTION_TYPE.None);
        }
    }
}
```

Both factory classes can be extended and overridden in the DI hierarchy (using the `providers` array) in order to provide your own, custom implementation. This, combined with the fact that all of the classes the get instantiated by the factories are also public, gives you a lot of control over what's provided to the components that use transaction implementations internally.

For example, to override the transaction service used internally by the `IgxGridComponent`, you can do the following:

First, define a custom factory class

```typescript
import { IgxFlatTransactionFactory, TRANSACTION_TYPE, IgxBaseTransactionService,
TransactionService, Transaction, State } from 'igniteui-angular/core';
// import { IgxFlatTransactionFactory, TRANSACTION_TYPE, IgxBaseTransactionService,
// TransactionService, Transaction, State } from '@infragistics/igniteui-angular'; for licensed package

class CustomTransactionService extends IgxBaseTransactionService {
    ...
}

export class CustomTransactionFactory extends IgxFlatTransactionFactory {
    ...
    create(type: TRANSACTION_TYPE): TransactionService<Transaction, State> {
        if (type === TRANSACTION_TYPE.Base) {
            return new CustomTransactionService();
        }
        super.create(type);
    }
}

```

Then, in your component's `providers` array, override the `IgxFlatTransactionFactory` (used by `igx-grid`) with your custom implementation.

```typescript
import { IgxFlatTransactionFactory } from 'igniteui-angular/core';
// import { IgxFlatTransactionFactory } from '@infragistics/igniteui-angular'; for licensed package
import { CustomTransactionFactory } from '../custom-factory.ts';

@Component({
    selector: 'app-grid-view',
    template: `<igx-grid [batchEditing]="true" [data]="data" [autoGenerate]="true"></igx-grid>`,
    providers: [{ provide: IgxFlatTransactionFactory, useClass: CustomTransactionFactory }]
})

export class GridViewComponent {
    ...
}
```

Now, when `batchEditing` is set to `true`, the grid will receive an instance of `CustomTransactionService`.

## Additional Resources

<div class="divider--half"></div>

- [Transaction Service API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transactionservice.html)
- [Transaction Service](transaction.md)
- [How to use the Transaction service](transaction-how-to-use.md)
- [Grid Batch Editing](grid/batch-editing.md)
- [Tree Grid Batch Editing](treegrid/batch-editing.md)
- [Hierarchical Grid Batch Editing](hierarchicalgrid/batch-editing.md)

---
title: Angular Batch Editing | Angular Crud | Ignite UI for Angular | Infragistics
_description: Start using Ignite UI Angular transaction service to easily implement batch editing and perform Angular CRUD operations on your components.
_keywords: batch editing, igniteui for angular, infragistics
_tocName: Transaction Service
---

# Transaction Service

The [`Transaction Service`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transactionservice.html) is an injectable middleware (through [Angular's DI](https://angular.io/guide/dependency-injection)) that a component may use to accumulate changes without immediately affecting the underlying data.
    <img class="responsive-img" src="https://cdn-images-1.medium.com/max/800/1*O-6DidcFW_XCSqgKRfXf_Q.png"
        alt="Transaction Service Architecture"
        style="display:flex;max-height:400px;margin:auto auto 20px auto;" />

> [!NOTE]
> The data transformation from the schema above is not mandatory. You do not need to use a pipe in order to use the [`Transaction Service`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transactionservice.html).

The [`Transaction Service`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transactionservice.html) allows adding transactions. After at least one transaction is added, you may commit or clear all the changes or the changes for a single record only. As it keeps a detailed log, it can also execute undo and redo operations.

Every time you execute an operation ([**transaction**](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transaction.html)), it is added to the transaction log and undo stack. All the changes in the transaction log are then accumulated per record. From that point, the service maintains an aggregated **state** that consists only of add/update/delete operations for unique records. This is based on a [`State`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/state.html) interface which has three properties: `recordRef`, `type` and `value`.

We have built three classes on top of the [`Transaction Service`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transactionservice.html) that provide users with the ability to commit all changes they have made, or only changes made to a specific record, at once. Those classes are [`igxBaseTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxbasetransactionservice.html), [`igxTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html) and [`igxHierarchicalTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicaltransactionservice.html).

The [`igxTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html) and [`igxHierarchicalTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicaltransactionservice.html) are fully integrated with our [igxGrid](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html), [igxHierarchicalGrid](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicalgridcomponent.html) and [igxTreeGrid](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtreegridcomponent.html) components. You can find detailed examples of using those components with transactions enabled in the following topics:

- [igxGrid Batch Editing and Transactions](grid/batch-editing.md)
- [igxHierarchicalGrid Batch Editing and Transactions](hierarchicalgrid/batch-editing.md)
- [igxTreeGrid Batch Editing and Transactions](treegrid/batch-editing.md)

A more detailed overview of the opportunities that the [`Transaction Service`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transactionservice.html) provides can be found in our ["Building a transaction service for managing large scale editing experiences" blog](https://blog.angular.io/building-a-transaction-service-for-managing-large-scale-editing-experiences-ded666eafd5e)

## Additional Resources

<div class="divider--half"></div>

- [Transaction Service API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transactionservice.html)
- [Transaction Service class hierarchy](transaction-classes.md)
- [How to use the Transaction service](transaction-how-to-use.md)
- [Build CRUD operations with igxGrid](general/how-to/how-to-perform-crud.md)
- [Grid Batch Editing](grid/batch-editing.md)
- [Tree Grid Batch Editing](treegrid/batch-editing.md)
- [Hierarchical Grid Batch Editing](hierarchicalgrid/batch-editing.md)
- ["Building a transaction service for managing large scale editing experiences" blog](https://blog.angular.io/building-a-transaction-service-for-managing-large-scale-editing-experiences-ded666eafd5e)

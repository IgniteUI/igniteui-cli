---
title: Angular Batch Editing | Angular Crud | Ignite UI for Angular | Infragistics
description: Start using Ignite UI Angular transaction service to easily implement batch editing and perform Angular CRUD operations on your components.
keywords: batch editing, igniteui for angular, infragistics
llms:
  description: "The Transaction Service is an injectable middleware (through Angular's DI) that a component may use to accumulate changes without immediately affecting the underlying data."
_tocName: Transaction Service
_premium: true
---
# Transaction Service

The [`Transaction Service`](mcp:get_api_reference?platform=angular&component=IgxTransactionService) is an injectable middleware (through [Angular's DI](https://angular.io/guide/dependency-injection)) that a component may use to accumulate changes without immediately affecting the underlying data.
    <img class="responsive-img" src="https://cdn-images-1.medium.com/max/800/1*O-6DidcFW_XCSqgKRfXf_Q.png"
        alt="Transaction Service Architecture"
        style="display:flex;max-height:400px;margin:auto auto 20px auto;" />

**Note:** 
The data transformation from the schema above is not mandatory. You do not need to use a pipe in order to use the [`Transaction Service`](mcp:get_api_reference?platform=angular&component=IgxTransactionService).

The [`Transaction Service`](mcp:get_api_reference?platform=angular&component=IgxTransactionService) allows adding transactions. After at least one transaction is added, you may commit or clear all the changes or the changes for a single record only. As it keeps a detailed log, it can also execute undo and redo operations.

Every time you execute an operation ([`IgxTransaction`](mcp:get_api_reference?platform=angular&component=Transaction)), it is added to the transaction log and undo stack. All the changes in the transaction log are then accumulated per record. From that point, the service maintains an aggregated **state** that consists only of add/update/delete operations for unique records. This is based on a [`IgxState`](mcp:get_api_reference?platform=angular&component=State) interface which has three properties: `recordRef`, `type` and `value`.

We have built three classes on top of the [`Transaction Service`](mcp:get_api_reference?platform=angular&component=IgxTransactionService) that provide users with the ability to commit all changes they have made, or only changes made to a specific record, at once. Those classes are [`igxBaseTransactionService`](mcp:get_api_reference?platform=angular&component=IgxBaseTransactionService), [`IgxTransactionService`](mcp:get_api_reference?platform=angular&component=IgxTransactionService) and `IgxHierarchicalTransactionService`.

The [`IgxTransactionService`](mcp:get_api_reference?platform=angular&component=IgxTransactionService) and `IgxHierarchicalTransactionService` are fully integrated with our [`igxGrid`](mcp:get_api_reference?platform=angular&component=IgxGridComponent), [`igxHierarchicalGrid`](mcp:get_api_reference?platform=angular&component=IgxHierarchicalGridComponent) and [`igxTreeGrid`](mcp:get_api_reference?platform=angular&component=IgxTreeGridComponent) components. You can find detailed examples of using those components with transactions enabled in the following topics:

- [igxGrid Batch Editing and Transactions](/grid/batch-editing)
- [igxHierarchicalGrid Batch Editing and Transactions](/hierarchicalgrid/batch-editing)
- [igxTreeGrid Batch Editing and Transactions](/treegrid/batch-editing)

A more detailed overview of the opportunities that the [`Transaction Service`](mcp:get_api_reference?platform=angular&component=IgxTransactionService) provides can be found in our ["Building a transaction service for managing large scale editing experiences" blog](https://blog.angular.io/building-a-transaction-service-for-managing-large-scale-editing-experiences-ded666eafd5e)

## Additional Resources

<hr/>

- [`Transaction Service API`](mcp:get_api_reference?platform=angular&component=IgxTransactionService)
- [Transaction Service class hierarchy](/transaction-classes)
- [How to use the Transaction service](/transaction-how-to-use)
- [Build CRUD operations with igxGrid](/general/how-to/how-to-perform-crud)
- [Grid Batch Editing](/grid/batch-editing)
- [Tree Grid Batch Editing](/treegrid/batch-editing)
- [Hierarchical Grid Batch Editing](/hierarchicalgrid/batch-editing)
- ["Building a transaction service for managing large scale editing experiences" blog](https://blog.angular.io/building-a-transaction-service-for-managing-large-scale-editing-experiences-ded666eafd5e)

---
title: Angular Batch Editing | Angular Crud | Ignite UI for Angular | Infragistics
_description: How to configure batch editing for Ignite UI Angular components and execute CRUD operations on them, using Transaction service.
_keywords: batch editing, igniteui for angular, infragistics
_tocName: How to use the Transaction Service
_premium: true
---

# How to use the Transaction service

You may get advantage of the [`Transaction Service`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transactionservice.html) when using any component that needs to preserve the state of its data source and to commit many transactions at once.

When working with the Ignite UI for Angular grid components, you may use the [`igxTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html) and [`igxHierarchicalTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicaltransactionservice.html) that are integrated with the grids and provide batch editing out of the box. However, if you need to use transactions with any other Ignite UI for Angular or custom component, you may again use the [`igxTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html) and implement similar behavior.

## Angular How to use the Transaction service Example

In this topic we will use [`igxList`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlistcomponent.html) component to demonstrate how to enable transactions. We will demonstrate how to add transactions, how to transform the data through a [pipe](https://angular.io/guide/pipes) and how to visually update the view in order to let the user see the changes that are about to be committed.


```typescript
import { Component, inject } from '@angular/core';
import { IgxTransactionService, State, Transaction, TransactionType } from 'igniteui-angular/core';
import { IgxCardComponent } from 'igniteui-angular/card';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineSubTitleDirective, IgxListLineTitleDirective } from 'igniteui-angular/list';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { WISHLIST, WishlistItem } from '../data';
import { NgClass } from '@angular/common';
import { TransactionBasePipe } from '../pipes/transaction-base.pipe';

@Component({
    providers: [IgxTransactionService],
    selector: 'app-transaction-base',
    styleUrls: ['./transaction-base.component.scss'],
    templateUrl: 'transaction-base.component.html',
    imports: [IgxCardComponent, IgxListComponent, IgxListItemComponent, NgClass, IgxListLineTitleDirective, IgxListLineSubTitleDirective, IgxIconComponent, IgxListActionDirective, TransactionBasePipe]
})
export class TransactionBaseComponent {
    transactions = inject<IgxTransactionService<Transaction, State>>(IgxTransactionService);

    public wishlist: WishlistItem[];

    /**
     * @param transactions Injected Transaction Service.
     */
    constructor() {
        this.wishlist = WISHLIST;
    }

    /** Check item for unsaved deletion */
    public isDeleted(id): boolean {
        const state = this.transactions.getState(id);
        return state && state.type === TransactionType.DELETE;
    }

    /** Check item for unsaved editing */
    public isEdited(id): boolean {
        const state = this.transactions.getState(id);
        return state && state.type === TransactionType.UPDATE;
    }

    /*********************************************************************************************
     * The below methods - `onAdd`, `onEdit`, `onDelete` demonstrate the different types of transactions
     * and what kind of data we normally pass to each of them.
     *
     * Each transaction has `id`, `type` and `newValue` properties.
     */

    /**
     * Create an `UPDATE` transaction.
     */
    public onEdit(): void {
        const newPrice = '$999';
        // there can be multiple `UPDATE` transactions for the same item `id`
        // the `newValue` property should hold only the changed properties
        const editTransaction: Transaction = {
            id: this.wishlist[0].id,
            type: TransactionType.UPDATE,
            newValue: { price: newPrice }
        };
        // provide the first wishlist item as a `recordRef` argument
        this.transactions.add(editTransaction, this.wishlist[0]);
    }

    /**
     * Create an `ADD` transaction.
     */
    public onAdd(): void {
        // it must have a unique 'id' property
        const item: WishlistItem = { id: 4, name: 'Yacht', price: 'A lot!' };

        // in an `ADD` transaction you do not need to provide a `recordRef` argument,
        // since there is nothing to refer to yet
        this.transactions.add({ id: 4, type: TransactionType.ADD, newValue: item });
    }

    /**
     * Create a `DELETE` transaction.
     */
    public onDelete(): void {
        // after a `DELETE` transaction, no further changes should be made for the same `id`
        // the `newValue` property should be set to `null` since we do not change any values,
        const deleteTransaction: Transaction = {
            id: this.wishlist[1].id,
            type: TransactionType.DELETE,
            newValue: null
        };
        // provide the second wishlist item as a `recordRef` argument
        this.transactions.add(deleteTransaction, this.wishlist[1]);
    }

    /**
     * Clear all pending transactions.
     */
    public onClear(): void {
        this.transactions.clear();
    }

    /**
     * Commit all pending transactions.
     */
    public onCommit(): void {
        // the `commit` function expects the original data array as its parameter
        this.transactions.commit(this.wishlist);
    }

    /*********************************************************************************************
     * The below methods are used for visualization purposes.
     */

    /** Check if item with ID has been added (even unsaved) */
    public itemAdded(id: number): boolean {
        const found = this.transactions.getState(id) || this.wishlist.find(x => x.id === 4);
        return !!found;
    }

    /* Get transactions, merge with wishlist data for display purposes */
    public getTransactionLog(): any[] {
        return this.transactions.getTransactionLog().map(transaction => {
            const item = this.wishlist.find(x => x.id === transaction.id);
            return Object.assign({ type: transaction.type }, item, transaction.newValue);
        });
    }
}
```
```html
<igx-card elevated>
  <igx-list>
    <igx-list-item [isHeader]="true">Wishlist</igx-list-item>
    <!-- use the transactionBasePipe to display changes to the items in the wishlist without affecting the original data -->
    @for (item of this.wishlist | transactionBasePipe; track item) {
      <igx-list-item
        [ngClass]="{ deleted: isDeleted(item.id), edited: isEdited(item.id) }">
        <p igxListLineTitle>{{item.name}}</p>
        <p igxListLineSubTitle>Costs: {{item.price}}</p>
        @if (item.id === 1 && item.price !== '$999') {
          <igx-icon igxListAction (click)="onEdit()">edit</igx-icon>
        }
        @if (item.id === 2 && !isDeleted(item.id)) {
          <igx-icon igxListAction (click)="onDelete()">delete</igx-icon>
        }
      </igx-list-item>
    }
    <button igxButton (click)="onAdd()" [disabled]="itemAdded(4)">Add New</button>
  </igx-list>
</igx-card>
<div class="buttons">
  <button igxButton="contained" (click)="onClear()" [disabled]="this.getTransactionLog().length === 0">Clear
  Transactions</button>
  <button igxButton="contained" (click)="onCommit()" [disabled]="this.getTransactionLog().length === 0">Commit
  Transactions</button>
</div>
<div class="output">
  <div>
    <h5>Transaction Log</h5>
    @for (transaction of this.getTransactionLog(); track transaction) {
      <div>
        {{transaction.type.toUpperCase()}} -> {{transaction.name}} Costs: {{transaction.price}}
      </div>
    }
  </div>
  <div>
    <h5>Data Items</h5>
    @for (item of this.wishlist; track item) {
      <div>
        <div>{{item.name}} - {{item.price}}</div>
      </div>
    }
  </div>
</div>
```
```scss
.deleted {
  text-decoration: line-through;
}

.edited {
  font-style: italic;
}

igx-icon {
  cursor: pointer;
}

:host {
  padding: 20px;
  display: block;
  max-width: 500px;
}

.output {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}

.buttons {
  padding-top: 15px;
  @extend .output;
}
```

<div class="divider--half"></div>

## Include Transaction Service

### Include Transaction Service in project

We have two options to include `IgxTransactionService` in our application. The first one is to add it to `AppModule` or other parent module in the application, as it is done in the demo above:

```typescript
@NgModule({
    ...
    providers: [
        IgxTransactionService
    ]
})
export class AppModule { }
```

The other option is to provide it in the component, where the transaction service is used:

```typescript
@Component({
    selector: 'transaction-base',
    styleUrls: ['./transaction-base.component.scss'],
    templateUrl: 'transaction-base.component.html',
    providers: [IgxTransactionService]
})
export class TransactionBaseComponent { }
```

### Inject Transaction Service in component

In our `ts` file, we should import [`igxTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html) from the `igniteui-angular` library, as well as the [`State`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/state.html) and [`Transaction`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transaction.html) interfaces and the [`TransactionType`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/enums/TransactionType.html) enum, which will be needed by our application:

```typescript
import { IgxTransactionService, State, Transaction, TransactionType } from 'igniteui-angular/core';
// import { IgxTransactionService, State, Transaction, TransactionType } from '@infragistics/igniteui-angular'; for licensed package
```

Then Transaction Service should be imported in the constructor:

```typescript
constructor(private _transactions: IgxTransactionService<Transaction, State>) { ... }
```

## Define igxList

In our html template, we define an [`igxList`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxlistcomponent.html) component with **edit**, **delete** and **add** actions, which modify the list and its items:

```html
<igx-list>
    <igx-list-item [isHeader]="true">Wishlist</igx-list-item>
    <igx-list-item *ngFor="let item of this.wishlist | transactionBasePipe"
        [ngClass]="{ deleted: isDeleted(item.id), edited: isEdited(item.id) }">
        <p igxListLineTitle>{{item.name}}</p>
        <p igxListLineSubTitle>Costs: {{item.price}}</p>
        <igx-icon igxListAction (click)="onEdit()" *ngIf="item.id === 1 && item.price !== '$999'">edit</igx-icon>
        <igx-icon igxListAction (click)="onDelete()" *ngIf="item.id === 2 && !isDeleted(item.id)">delete</igx-icon>
    </igx-list-item>
    <button igxButton (click)="onAdd()" [disabled]="itemAdded(4)">Add New</button>
</igx-list>
```

## Pipe for pending changes

The list component from above uses the `transactionBasePipe` to display changes to the items in the wishlist without affecting the original data. Here is how the pipe looks like:

```typescript
@Pipe({
    name: 'transactionBasePipe',
    pure: false
})
export class TransactionBasePipe implements PipeTransform {
    /**
     * @param transactions Injected Transaction Service.
     */
    constructor(public transactions: IgxTransactionService<Transaction, State>) { }

    public transform(data: WishlistItem[]) {
        // the pipe should NOT operate on the original dataset
        // we create a copy of the original data and then use it for visualization only
        const _data = [...data];
        const pendingStates = this.transactions.getAggregatedChanges(false);

        for (const state of pendingStates) {
            switch (state.type) {
                case TransactionType.ADD:
                    // push the newValue property of the current `ADD` state
                    _data.push(state.newValue);
                    break;
                case TransactionType.DELETE:
                    // pipe doesn't delete items because the demo displays them with a different style
                    // the record will be deleted once the state is committed
                    break;
                case TransactionType.UPDATE:
                    const index = _data.findIndex(x => x.id === state.id);
                    // merge changes with the item into a new object
                    // to avoid modifying the original data item
                    _data[index] = Object.assign({}, _data[index], state.newValue);
                    break;
                default:
                    return _data;
            }
        }

        return _data;
    }
}
```

## Edit, delete, add functionality

### Define edit functionality

The second list item contains an edit button, which updates the item's data.

```html
<igx-icon igxListAction (click)="onEdit()" *ngIf="item.id === 1 && item.price !== '$999'">edit</igx-icon>
```

When the button is pressed, inside the `onEdit` event handler, an 'UPDATE' transaction is created:

```typescript
public onEdit(): void {
    const newPrice = "$999";
    // there can be multiple `UPDATE` transactions for the same item `id`
    // the `newValue` property should hold only the changed properties
    const editTransaction: Transaction = {
        id: this.wishlist[0].id,
        type: TransactionType.UPDATE,
        newValue: { price: newPrice }
    };
    // provide the first wishlist item as a `recordRef` argument
    this.transactions.add(editTransaction, this.wishlist[0]);
}
```

Additionally, there is a function that checks items for unsaved edits:

```typescript
public isEdited(id): boolean {
    const state = this.transactions.getState(id);
    return state && state.type === TransactionType.UPDATE;
}
```

### Define delete functionality

The third list item contains a delete button, which deletes the item's data.

```html
<igx-icon igxListAction (click)="onDelete()" *ngIf="item.id === 2 && !isDeleted(item.id)">delete</igx-icon>
```


When the button is pressed, inside `onDelete` event handler, a 'DELETE' transaction is created:

```typescript
public onDelete(): void {
    // after a `DELETE` transaction, no further changes should be made for the same `id`
    // the `newValue` property should be set to `null` since we do not change any values,
    const deleteTransaction: Transaction = {
        id: this.wishlist[1].id,
        type: TransactionType.DELETE,
        newValue: null
    };
    // provide the second wishlist item as a `recordRef` argument
    this.transactions.add(deleteTransaction, this.wishlist[1]);
}
```

In addition, there is a function that checks items for unsaved deletion:

```typescript
public isDeleted(id): boolean {
    const state = this.transactions.getState(id);
    return state && state.type === TransactionType.DELETE;
}
```

### Define add functionality

At the end of the list an ADD button is added, which adds a new item to the list.

```html
<button igxButton (click)="onAdd()" [disabled]="itemAdded(4)">Add New</button>```
```

When the button is pressed, inside the `onAdd` event handler, an 'ADD' transaction is created:

```typescript
public onAdd(): void {
    // it must have a unique 'id' property
    const item: WishlistItem = { id: 4, name: 'Yacht', price: 'A lot!' };

    // in an `ADD` transaction you do not need to provide a `recordRef` argument,
    // since there is nothing to refer to yet
    this.transactions.add({ id: 4, type: TransactionType.ADD, newValue: item });
}
```

In addition, there is a function that checks items for unsaved addition:

```typescript
public itemAdded(id: number): boolean {
    const found = this.transactions.getState(id) || this.wishlist.find(x => x.id === 4);
    return !!found;
}
```

## Transaction Log

The demo demonstrates the pending transactions inside a log:

```html
<div>
    <h5>Transaction Log</h5>
    <div *ngFor="let transaction of this.getTransactionLog()">
        {{transaction.type.toUpperCase()}} -> {{transaction.name}} Costs: {{transaction.price}}
    </div>
</div>
```

```typescript
public getTransactionLog(): any[] {
    return this.transactions.getTransactionLog().map(transaction => {
        const item = this.wishlist.find(x => x.id === transaction.id);
        return Object.assign({ type: transaction.type }, item, transaction.newValue);
    });
}
```

We will also add a representation of the current state of our list. It will show how the data looks before the pending transactions are committed:

```html
<div>
    <h5>Data Items</h5>
    <div *ngFor="let item of this.wishlist">
        <div>{{item.name}} - {{item.price}}</div>
    </div>
</div>
```

## Commit pending transactions

Once we are done with all our changes, we may commit them all at once using the [`commit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html#commit) method of the [`igxTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html). It applies all transactions over the provided data:

```html
<button igxButton="contained" (click)="onCommit()" [disabled]="this.getTransactionLog().length === 0">Commit Transactions</button>
```

```typescript
public onCommit(): void {
    // the `commit` function expects the original data array as its parameter
    this.transactions.commit(this.wishlist);
}

```

If we are using the [`igxHierarchicalTransactionService`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxhierarchicaltransactionservice.html) we can also use an overload of the [`commit`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html#commit) method which expects primaryKey and childDataKey as arguments.

```typescript
public onCommit(): void {
    this.transactions.commit(this.wishlist, primaryKey, childDataKey);
}
````

## Clear pending transactions

At any point of our interaction with the list, we may clear the Transaction log, using the [`clear`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxtransactionservice.html#clear) method.

```html
<button igxButton="contained" (click)="onClear()" [disabled]="this.getTransactionLog().length === 0">Clear Transactions</button>
```

```typescript
public onClear(): void {
    this.transactions.clear();
}

```

## Additional Resources

<div class="divider--half"></div>

- [Transaction Service API](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/interfaces/transactionservice.html)
- [Transaction Service](transaction.md)
- [Transaction Service class hierarchy](transaction-classes.md)

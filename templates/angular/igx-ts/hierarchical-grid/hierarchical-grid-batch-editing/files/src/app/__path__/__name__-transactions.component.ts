import { Component } from '@angular/core';
import { IgxHierarchicalTransactionServiceFactory } from 'igniteui-angular';

@Component({
    providers: [ IgxHierarchicalTransactionServiceFactory ],
    selector: 'app-hierarchical-grid-with-transactions',
    template: '<ng-content></ng-content>'
})
export class HierarchicalGridWithTransactionsComponent { }

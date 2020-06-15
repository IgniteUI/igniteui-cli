import { Component } from '@angular/core';
import { IgxHierarchicalTransactionServiceFactory } from '<%=igxPackage%>';

@Component({
    providers: [ IgxHierarchicalTransactionServiceFactory ],
    selector: 'app-hierarchical-grid-with-transactions',
    template: '<ng-content></ng-content>'
})
export class HierarchicalGridWithTransactionsComponent { }

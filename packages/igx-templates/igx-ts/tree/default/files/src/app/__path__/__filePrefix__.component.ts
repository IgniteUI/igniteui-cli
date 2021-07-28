import { Component, OnDestroy } from '@angular/core';
import { IgxTreeNodeComponent  } from '<%=igxPackage%>';
import { DATA, NodeData, REMOTE_ROOT, SelectableNodeData } from './local-data';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-<%=filePrefix%>',
  templateUrl: './<%=filePrefix%>.component.html',
  styleUrls: ['./<%=filePrefix%>.component.scss'],
  providers: [DataService]
})

export class <%=ClassName%>Component implements OnDestroy {
  public data = DATA;
  public loading = false;
  public showRefresh = false;
  public remoteRoot = REMOTE_ROOT;
  public remoteData: SelectableNodeData[] = [];
  private destroy$ = new Subject<void>();
  constructor(private dataService: DataService) {
    this.dataService.data.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.loading = false;
      this.remoteData = data;
    });
  }

  public refreshData(node: IgxTreeNodeComponent<NodeData>) {
    this.dataService.clearData();
    this.remoteData = [];
    this.getNodeData(node, true);
    this.dataService.getData();
  }

  public getNodeData(node: IgxTreeNodeComponent<any>, evt: boolean) {
    if (this.remoteData?.length) {
      return;
    }
    if (evt) {
      this.showRefresh = true;
      this.loading = true;
      this.dataService.getData();
      this.dataService.data.pipe(take(1)).subscribe((data) => {
        if (node.selected) {
          data.forEach(e => {
            if (e.Selected === undefined) {
              e.Selected = true;
            }
          });
        }
      });
    }
  }

  public handleSelection(node: NodeData, selected: boolean) {
    this.dataService.toggleSelected(node, selected);
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

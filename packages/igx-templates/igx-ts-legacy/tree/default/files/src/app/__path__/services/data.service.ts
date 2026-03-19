import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { NodeData, REMOTE_DATA, SelectableNodeData } from '../local-data';

@Injectable()
export class DataService {
  private nodeData: SelectableNodeData[] = [];
  private selectedNode: Set<string> = new Set<string>();
  private deselectedNode: Set<string> = new Set<string>();
  private data$: ReplaySubject<SelectableNodeData[]> = new ReplaySubject();
  public get data(): Observable<SelectableNodeData[]> {
    return this.data$;
  }

  public getData(): void {
    setTimeout(() => {
      this.nodeData = REMOTE_DATA;
      const passed = this.nodeData.map(e => {
        const selectionState: Partial<SelectableNodeData> = {};
        if (this.selectedNode.has(e.Name)) {
          selectionState.Selected = true;
        }
        if (this.deselectedNode.has(e.Name)) {
          selectionState.Selected = false;
        }
        return Object.assign({}, e, selectionState);
      });
      this.data$.next(passed);
    }, 2000);
  }

  public clearData(): void {
    this.nodeData = [];
    this.data$.next(this.nodeData);
  }

  public clearSelect(): void {
    this.selectedNode = new Set<string>();
    this.deselectedNode = new Set<string>();
  }

  public toggleSelected(node: NodeData, state: boolean): void {
    if (state) {
      this.selectedNode.add(node.Name);
      this.deselectedNode.delete(node.Name);
    } else {
      this.deselectedNode.add(node.Name);
      this.selectedNode.delete(node.Name);
    }
  }
}

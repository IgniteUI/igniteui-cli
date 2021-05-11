/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { NodeData, REMOTE_DATA, SelectableNodeData } from '../local-data';

@Injectable()
export class DataService {

    private _data: SelectableNodeData[] = [];
    private _selected: Set<string> = new Set<string>();
    private _deselected: Set<string> = new Set<string>();
    private data$: ReplaySubject<SelectableNodeData[]> = new ReplaySubject();
    public get data(): Observable<SelectableNodeData[]> {
        return this.data$;
    }

    public getData() {
        setTimeout(() => {
            this._data = REMOTE_DATA;
            const passed = this._data.map(e => {
                const selectionState: Partial<SelectableNodeData> = {};
                if (this._selected.has(e.Name)) {
                    selectionState.Selected = true;
                }
                if (this._deselected.has(e.Name)) {
                    selectionState.Selected = false;
                }
                return Object.assign({}, e, selectionState);
            });
            this.data$.next(passed);
        }, 2000);
    }

    public clearData() {
        this._data = [];
        this.data$.next(this._data);
    }

    public clearSelect() {
        this._selected = new Set<string>();
        this._deselected = new Set<string>();
    }

    public toggleSelected(node: NodeData, state: boolean) {
        if (state) {
            this._selected.add(node.Name);
            this._deselected.delete(node.Name);
        } else {
            this._deselected.add(node.Name);
            this._selected.delete(node.Name);
        }
    }

}

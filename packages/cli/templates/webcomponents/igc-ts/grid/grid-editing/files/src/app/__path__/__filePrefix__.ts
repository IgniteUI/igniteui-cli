import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, type IgcCheckboxChangeEventArgs, IgcSwitchComponent } from 'igniteui-webcomponents';
import {
  IgcGridComponent
} from 'igniteui-webcomponents-grids';
import { DataGridSharedData } from './DataGridSharedData';

import gridThemeLightMaterial from 'igniteui-webcomponents-grids/grids/themes/light/material.css?inline';

defineComponents(IgcButtonComponent, IgcGridComponent, IgcSwitchComponent);

@customElement('app-$(path)')
export default class $(ClassName) extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      margin: 0px;
      padding-right: 20px;
      width: calc(100% - 600px);
      --ig-size: var(--ig-size-medium);
    }
    .actions {
      display: flex;
      gap: 8px;
      padding: 8px;
    }
    igc-grid img {
      object-fit: contain;
      height: 30px;
    }
  `;

  @state()
  data: any[] = DataGridSharedData.getEmployees();

  @query('igc-grid', true)
  grid!: IgcGridComponent & { transactions: any };

  @state()
  private batchEditingState = {
    canUndo: false,
    canRedo: false,
    hasChanges: false,
  };

  @state()
  private rowEditMode = false;

  @state()
  private batchEditing = false;

  private undoClick = () => {
    this.grid.endEdit(true);
    this.grid.transactions.undo();
  }

  private redoClick = () => {
    this.grid.endEdit(true);
    this.grid.transactions.redo();
  }

  private commitClick = () => {
    this.grid.endEdit(true);
    this.grid.transactions.commit(this.grid.data);
  }

  private async updateBatchEditing(active: boolean) {
    this.batchEditing = active;
    if (active) {
      // await for batchEditing to apply so transactions are ready:
      await this.updateComplete;
      this.grid.transactions.onStateUpdate.subscribe(() => {
        this.batchEditingState = {
          canUndo: this.grid.transactions.canUndo,
          canRedo: this.grid.transactions.canRedo,
          hasChanges: this.grid.transactions.getAggregatedChanges(false).length > 0
        };
      });
    }
  }

  render() {
    return html`
    <style>${gridThemeLightMaterial}</style>
    <div class="actions">
      <igc-switch @igcChange=${(e: CustomEvent<IgcCheckboxChangeEventArgs>) => this.rowEditMode = e.detail.checked}>
        Row Edit Mode
      </igc-switch>
      <igc-switch @igcChange=${(e: CustomEvent<IgcCheckboxChangeEventArgs>) => this.updateBatchEditing(e.detail.checked)}>
        Batch Editing
      </igc-switch>
      <igc-button @click=${this.commitClick} ?disabled=${!this.batchEditingState.hasChanges}>Commit</igc-button>
      <igc-button @click=${this.undoClick} ?disabled=${!this.batchEditingState.canUndo}>Undo</igc-button>
      <igc-button @click=${this.redoClick} ?disabled=${!this.batchEditingState.canRedo}>Redo</igc-button>
    </div>

    <igc-grid
      class="ig-typography"
      .data=${this.data}
      primary-key="ID"
      .batchEditing=${this.batchEditing}
      .rowEditable=${this.rowEditMode}
    >
      <igc-column field="Name" editable width="150px"></igc-column>
      <igc-column field="Street" header="Street" editable width="155px"></igc-column>
      <igc-column field="City" header="City" editable width="125px"></igc-column>
      <igc-column field="Salary" header="Salary" data-type="currency" editable></igc-column>
      <igc-column field="Photo" header="Photo" data-type="image" editable width="90px"></igc-column>
      <igc-column field="Birthday" header="Date of Birth" data-type="date" editable></igc-column>
      <igc-action-strip>
        <igc-grid-editing-actions></igc-grid-editing-actions>
    </igc-action-strip>
    </igc-grid>
  `;
  }
}

/* eslint-disable import/extensions */
import {
  IgcDataGridModule,
  IgcGridColumnOptionsModule,
  IgcDataGridComponent,
  IgcGridCellValueChangingEventArgs,
  IgcTemplateCellUpdatingEventArgs,
  IgcTemplateColumnComponent,
  GridActivationMode,
  GridSelectionMode,
  EditModeType,
} from 'igniteui-webcomponents-grids';
import { ModuleManager } from 'igniteui-webcomponents-core';
import { DataGridSharedData } from './DataGridSharedData';

ModuleManager.register(
  IgcDataGridModule,
  IgcGridColumnOptionsModule,
);

export default class $(ClassName) extends HTMLElement {
  data: any[] = DataGridSharedData.getEmployees();

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.innerHTML = `
    <style>
      :host {
        height: 100%;
        margin: 0px;
        padding-right: 20px;
        width: calc(100% - 600px);
      }
    </style>
    <div class="container sample">
    <div class="options horizontal">
      <button id="commitClick" disabled="true">Commit</button>
      <button id="undoClick" disabled="true">Undo</button>
      <button id="redoClick" disabled="true">Redo</button>
        <span class="options-label">Edit Mode: </span>
        <select id="editModeDropBox" class="options-label">
          <option>Cell</option>
          <option>CellBatch</option>
          <option>Row</option>
          <option>None</option>
        </select>
      <label id="excel-style-editing" >Excel Style</label>
      <span class="options-label">Edit Mode: </span>
        <select id="editModeClickActionDropBox" class="options-label">
          <option>SingleClick</option>
          <option>DoubleClick</option>
        </select>
    </div>

    <igc-data-grid
        id="grid"
        height="calc(100% - 3.5rem)"
        width="100%"
        activation-mode="Cell"
        selection-mode="SingleCell"
        default-column-min-width="125"
        is-column-options-enabled="true"
        auto-generate-columns="false"
        edit-mode-click-action="SingleClick"
        edit-mode="Cell">

        <igc-text-column field="Name" width="*>150"></igc-text-column>
        <igc-text-column field="Street" header-text="Street" width="*>155"></igc-text-column>
        <igc-text-column field="City" header-text="City" width="*>125"></igc-text-column>
        <igc-numeric-column field="Salary" header-text="Salary" positive-prefix="$" show-grouping-separator="true"></igc-numeric-column>

        <igc-image-column field="Photo" header-text="Photo" content-opacity="1"
        horizontal-alignment="center"  width="*>90"></igc-image-column>
        <igc-date-time-column field="Birthday" header-text="Date of Birth" width="*>140"></igc-date-time-column>
        <igc-template-column id="deleteRowColumn" field="Delete Row" header-text="Delete Row" width="*>140" is-column-options-enabled="false" ></igc-date-time-column>
      </igc-data-grid>
    </div>
  `;
  }

  connectedCallback() {
    const grid = document.getElementsByTagName('app-grid-editing')[0].shadowRoot!.getElementById('grid') as IgcDataGridComponent;
    const commitButton = document.getElementsByTagName('app-grid-editing')[0].shadowRoot!.getElementById('commitClick') as HTMLButtonElement;
    const undoButton = document.getElementsByTagName('app-grid-editing')[0].shadowRoot!.getElementById('undoClick') as HTMLButtonElement;
    const redoButton = document.getElementsByTagName('app-grid-editing')[0].shadowRoot!.getElementById('redoClick') as HTMLButtonElement;

    const onCommitClick = () => {
      grid.commitEdits();
      commitButton.disabled = true;
      undoButton.disabled = !grid.canUndo;
    };

    const onUndoClick = () => {
      grid.undo();
      undoButton.disabled = !grid.canUndo;
      if (!grid.canUndo) {
        commitButton.disabled = grid.canCommit;
      } else {
        commitButton.disabled = !grid.canCommit;
      }

      redoButton.disabled = !grid.canRedo;
    };

    const onRedoClick = () => {
      grid.redo();

      if (grid.editMode === EditModeType.Cell || grid.editMode === EditModeType.None) {
        commitButton.disabled = !grid.canCommit;
      }
      if (grid.editMode === EditModeType.CellBatch || grid.editMode === EditModeType.Row) {
        redoButton.disabled = !grid.canRedo;
        undoButton.disabled = !grid.canUndo;
        if (!grid.canUndo) {
          commitButton.disabled = grid.canCommit;
        } else {
          commitButton.disabled = !grid.canCommit;
        }
      }
    };

    if (commitButton !== null) {
      commitButton.onclick = onCommitClick;
    }
    if (undoButton !== null) {
      undoButton.onclick = onUndoClick;
    }

    if (redoButton !== null) {
      redoButton.onclick = onRedoClick;
    }

    const onDeleteRowClick = (e: MouseEvent) => {
      const button = e.srcElement as HTMLButtonElement;
      const viewIndex = parseInt(button.id, 10);
      const rowItem = grid.actualDataSource.getItemAtIndex(viewIndex);

      if (grid.editMode === EditModeType.CellBatch || grid.editMode === EditModeType.Row) {
        grid.removeItem(rowItem);
        commitButton.disabled = !grid.canCommit;
        redoButton.disabled = !grid.canRedo;
        undoButton.disabled = !grid.canUndo;
      } else if (grid.editMode === EditModeType.Cell) {
        // delete grid row immediately
        grid.removeItem(rowItem);
      }
    };

    const onDeleteCellUpdating = (s: IgcTemplateColumnComponent,
      e: IgcTemplateCellUpdatingEventArgs) => {
      const content = e.content as HTMLDivElement;
      if (content.childElementCount === 0) {
        const button = document.createElement('button') as HTMLButtonElement;
        button.innerText = 'Delete';
        button.onclick = onDeleteRowClick;
        content.appendChild(button);
      }

      const button = content.children[0] as HTMLButtonElement;
      button.disabled = e.cellInfo.isDeleted;
      button.id = e.cellInfo.dataRow.toString();
    };

    const editModeChanged = (event: any) => {
      grid.cancelEdits();
      grid.editMode = event.target.value;
      if (grid.editMode === EditModeType.None || grid.editMode === EditModeType.Cell) {
        commitButton.disabled = true;
        undoButton.disabled = !grid.canUndo;
        redoButton.disabled = !grid.canRedo;
      }
    };

    const editModeClickActionChanged = (event: any) => {
      grid.editModeClickAction = event.target.value;
    };

    const onCellValueChanging = (s: IgcDataGridComponent, e: IgcGridCellValueChangingEventArgs) => {
      if (s.editMode === EditModeType.CellBatch || grid.editMode === EditModeType.Row) {
        commitButton.disabled = !grid.canCommit;
        undoButton.disabled = false;
      } else if (grid.editMode === EditModeType.Cell || grid.editMode === EditModeType.None) {
        commitButton.disabled = grid.canCommit;
      }
      if (e.newValue === '') {
        commitButton.disabled = true;
        s.setEditError(e.editID, 'Error, cell is empty');
      }
    };

    if (grid !== null) {
      grid.dataSource = this.data;
      grid.activationMode = GridActivationMode.Cell;
      grid.selectionMode = GridSelectionMode.SingleCell;
      grid.editMode = EditModeType.Cell;
      grid.cellValueChanging = onCellValueChanging;
    }

    const dropDown = document.getElementsByTagName('app-grid-editing')[0].shadowRoot!.getElementById('editModeDropBox');
    if (dropDown !== null) {
      dropDown.onchange = editModeChanged;
    }

    const dropDown2 = document.getElementsByTagName('app-grid-editing')[0].shadowRoot!.getElementById('editModeClickActionDropBox');
    if (dropDown2 !== null) {
      dropDown2.onchange = editModeClickActionChanged;
    }

    const deleteRowColumn = document.getElementsByTagName('app-grid-editing')[0].shadowRoot!.getElementById('deleteRowColumn') as IgcTemplateColumnComponent;
    if (deleteRowColumn !== null) {
      deleteRowColumn.cellUpdating = onDeleteCellUpdating;
    }
  }
}

customElements.define('app-$(path)', $(ClassName));

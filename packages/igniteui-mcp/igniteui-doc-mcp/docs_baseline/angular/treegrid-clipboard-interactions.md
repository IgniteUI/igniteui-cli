---
_tocName: Clipboard Interactions
_premium: true
---
---title: Angular TreeGrid Clipboard Interactions - Ignite UI for Angular_description: The Angular TreeGrid Clipboard functionality provides fast, easy and customizable way to copy, paste and export data to Excel or other programs. Try it now!_keywords: copy data, igniteui for angular, infragistics_license: commercial_canonicalLink: grid/clipboard-interactions---# Angular Tree Grid Clipboard InteractionsCopy to clipboard operations are now available in the Tree Grid. This functionality provides a fast, easy and customizable way to copy data of the Angular Data Grid through the current multi cell data select. System Clipboard behavior gives the user ability to copy data from the Tree Grid into Excel or other external programs.## Angular Tree Grid Clipboard Interactions Example```typescript
import { Component } from '@angular/core';
import { EMPLOYEE_DATA } from './data';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxColumnComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-clipboard-operations-sample',
    styleUrls: ['tree-grid-clipboard-operations-sample.component.scss'],
    templateUrl: './tree-grid-clipboard-operations-sample.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxSwitchComponent, IgxButtonDirective, IgxRippleDirective, IgxColumnComponent]
})
export class TreeGridClipboardSampleComponent {

    public data: any[];
    public options = {
        enabled: true,
        copyHeaders: true,
        copyFormatters: true,
        separator: '\t'
    };
    private frmt: Intl.DateTimeFormat;

    constructor() {
        this.data = EMPLOYEE_DATA;
    }

    public formatter = (value: any) => `** ${value} **`;
    public formatDate = (val: Date) => {
        if (!this.frmt) {
            this.frmt = new Intl.DateTimeFormat('en-US');
        }
        return this.frmt.format(val);
    };
    public initColumn(column) {
        if (column.dataType === 'date') {
            column.formatter = this.formatDate;
        } else {
            column.formatter = this.formatter;
        }
        column.header = `🎉${column.field}`;
    }
}
```
```html
<div class="wrapper theme">
    <div class="sample-content">
        <div class="sample-column">
            <igx-input-group type="box">
                <label igxLabel>Change copy separator</label>
                <input type="text" igxInput [(ngModel)]="options.separator" />
                <igx-suffix (pointerup)="options.separator = '\t'">
                    <igx-icon>clear</igx-icon>
                </igx-suffix>
                <igx-hint>
                    The default value is a single tabulation which is shown as whitespace above.
                    Click the clear icon to reset it back to tabulation.
                </igx-hint>
            </igx-input-group>
            <div class="grid-wrapper">
                <igx-tree-grid [igxPreventDocumentScroll]="true"  #grid1 [data]="data" childDataKey="Employees" (columnInit)="initColumn($event)"
                    [autoGenerate]="false" [clipboardOptions]="options">
                    <igx-grid-toolbar>

                        <div class="tlb">
                            <igx-switch [(ngModel)]="options.enabled">Grid copy behavior</igx-switch>
                            <igx-switch [(ngModel)]="options.copyHeaders">Copying of header labels</igx-switch>
                            <igx-switch [(ngModel)]="options.copyFormatters">Copying column formatters</igx-switch>
                            <button igxButton="outlined" igxRipple [igxRippleCentered]="true" (click)="grid1.clearCellSelection()">
                                <igx-icon family="material">clear</igx-icon>
                                <span>Selection</span>
                            </button>
                        </div>

                    </igx-grid-toolbar>

                    <igx-column field="ID"></igx-column>
                    <igx-column field="HireDate" dataType="date"></igx-column>
                    <igx-column field="Age" dataType="number" ></igx-column>
                    <igx-column field="Name" dataType="string"></igx-column>

                </igx-tree-grid>
            </div>

            <div style="margin-top: 0.5rem">
                <igx-input-group type="box">
                    <label igxLabel>Paste your data here (or in Excel)</label>
                    <textarea igxInput cols="30" rows="5"></textarea>
                </igx-input-group>
            </div>
        </div>
    </div>
</div>
```
```scss
:host ::ng-deep {
    .igx-switch__label {
        line-height: 1rem;
    }
}

.tlb {
    display: flex;
    max-width: 734px;
}

.grid-wrapper {
    width: 50wh;
    height: 364px;
    margin-top: 7px;
}
```<div class="divider--half"></div>## FunctionalityCopy behavior is working with the default interaction defined by the browser and operating system. Thus for the copy and paste behaviors, these are:- Windows/Unix based
  - <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>Ctrl</kbd> + <kbd>Ins</kbd> as a keyboard shortcut
  - <kbd>Ctrl</kbd> + <kbd>V</kbd> / <kbd>Shift</kbd> + <kbd>Ins</kbd> as a keyboard shortcut
  - Copy action through the browser menu- macOS
  - <kbd>⌘ Cmd</kbd> + <kbd>C</kbd> as a keyboard shortcut
  - <kbd>⌘ Cmd</kbd> + <kbd>V</kbd> as a keyboard shortcut
  - Copy action through the browser menu## Limitations- Both the **cut** and **copy** events are not natively supported in Internet Explorer. The exception is the**paste** event (IE 11) which is emitted but does not expose the `clipboardData` property in the event.> [!NOTE]> In order to `copy` cells in IE 11, you can use the keyboard selection. Hold the `shift key` in order to make a multi-cell selection, press `Ctrl + C` in order to copy.- The copy behavior is disabled while the grid is in edit mode.- The current version of this feature covers only the `copy` from grid behavior. Later on we plan to expose `paste` within grid behavior.## API UsageWe expose [`clipboardOptions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#clipboardOptions) @Input property, which handles the following options:- [`enabled`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#clipboardoptions.enabled) Enables/disables copying of selected cells.- [`copyHeaders`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#clipboardoptions.copyHeaders) Include the associated headers when copying.- [`copyFormatters`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#clipboardoptions.copyFormatters) Apply any existing column formatters to the copied data.- [`separator`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#clipboardoptions.separator) The string separator to use the for formatting the data in the clipboard. Default is `/t`> [!NOTE]> Excel can automatically detect text that is separated by tabs (tab-delimited `/t`) and properly paste the data into separate columns. When the paste format doesn't work, and everything you paste appears in a single column, then Excel's delimiter is set to another character, or your text is using spaces instead of tabs.- [`gridCopy`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#gridCopy) Emitted when a copy operation is executed. Fired only if copy behavior is enabled through the [`clipboardOptions`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/latest/classes/igxgridcomponent.html#clipboardОptions)## Additional Resources<div class="divider--half"></div>- [Tree Grid overview](tree-grid.md)- [Paging](paging.md)- [Filtering](filtering.md)- [Sorting](sorting.md)- [Summaries](summaries.md)- [Column Pinning](column-pinning.md)- [Selection](selection.md)- [Virtualization and Performance](virtualization.md)- [Multi-column headers](multi-column-headers.md)<div class="divider--half"></div>Our community is active and always welcoming to new ideas.- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

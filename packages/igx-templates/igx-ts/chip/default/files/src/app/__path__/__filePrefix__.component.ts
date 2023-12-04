import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import {
  CloseScrollStrategy,
  ConnectedPositioningStrategy,
  HorizontalAlignment,
  IBaseChipEventArgs,
  IgxChipsAreaComponent,
  IgxDropDownComponent,
  ISelectionEventArgs,
  OverlaySettings,
  VerticalAlignment,
  IgxLayoutDirective,
  IgxChipComponent,
  IgxButtonDirective,
  IgxDropDownItemNavigationDirective,
  IgxDropDownItemComponent,
} from '<%=igxPackage%>';
import { NgFor } from '@angular/common';

interface NamedEntry {
  id: string;
  name: string;
}

@Component({
 selector: 'app-<%=filePrefix%>',
 styleUrls: ['./<%=filePrefix%>.component.scss'],
 templateUrl: './<%=filePrefix%>.component.html',
 standalone: true,
 imports: [
    IgxLayoutDirective,
    IgxChipsAreaComponent,
    NgFor,
    IgxChipComponent,
    IgxButtonDirective,
    IgxDropDownItemNavigationDirective,
    IgxDropDownComponent,
    IgxDropDownItemComponent,
  ]
})
export class <%=ClassName%>Component {
  public dropDownList: NamedEntry[] = [
    {
     id: '1',
     name: 'Bug fixing for smart devices'
    },
    {
     id: '2',
     name: 'The True Purpose of Design Systems'
    },
    {
     id: '3',
     name: 'The IoT is dead, long live the internet'
    },
    {
     id: '4',
     name: 'Micro frontends in practice'
    },
    {
     id: '5',
     name: 'Lessons about API testing'
    },
    {
     id: '6',
     name: 'Scaling big with Apache Kafka'
    },
    {
     id: '7',
     name: 'Last minute performance testing'
    },
    {
     id: '8',
     name: 'Sales Skillz for IT People'
    }
  ];

  public chipList: NamedEntry[] = [];

  @ViewChild('chipsArea', { static: true, read: IgxChipsAreaComponent })
  public chipsArea!: IgxChipsAreaComponent;

  @ViewChild(IgxDropDownComponent, { static: true })
  public igxDropDown!: IgxDropDownComponent;

  private positionSettings = {
    horizontalStartPoint: HorizontalAlignment.Left,
    verticalStartPoint: VerticalAlignment.Bottom
  };

  private overlaySettings: OverlaySettings = {
    closeOnOutsideClick: true,
    modal: false,
    positionStrategy: new ConnectedPositioningStrategy(this.positionSettings),
    scrollStrategy: new CloseScrollStrategy()
  };

  constructor(public cdr: ChangeDetectorRef) { }

  public chipRemoved(event: IBaseChipEventArgs) {
    this.chipList = this.chipList.filter((item) => {
      return item.id !== event.owner.id;
    });
    this.cdr.detectChanges();
  }

  public toggleDropDown(ev: MouseEvent) {
    this.overlaySettings.target = ev.target as HTMLButtonElement;
    this.igxDropDown.toggle(this.overlaySettings);
  }

  public itemSelection(ev: ISelectionEventArgs) {
    const item = this.dropDownList.find((val) => val.name === ev.newSelection.value);
    if (!item) {
      return;
    }
    const match = this.chipList.find((val) => val.name === item.name);
    if (!match) {
      this.chipList.push({
        id: item.id,
        name: item.name
      });
    }
  }
}

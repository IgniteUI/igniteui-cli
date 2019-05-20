import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { CloseScrollStrategy, ConnectedPositioningStrategy, HorizontalAlignment, IBaseChipEventArgs, IgxChipsAreaComponent,
 IgxDropDownComponent, VerticalAlignment
} from 'igniteui-angular';

@Component({
 selector: 'app-$(filePrefix)',
 styleUrls: ['./$(filePrefix).component.scss'],
 templateUrl: './$(filePrefix).component.html'
})

export class $(ClassName)Component {
 public dropDownList = [
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

 public chipList = [];

 @ViewChild('chipsArea', { read: IgxChipsAreaComponent })
 public chipsArea: IgxChipsAreaComponent;

 @ViewChild(IgxDropDownComponent)
 public igxDropDown: IgxDropDownComponent;

 private dropDownOpened = false;

 private _positionSettings = {
  horizontalStartPoint: HorizontalAlignment.Left,
  verticalStartPoint: VerticalAlignment.Bottom
 };

 private _overlaySettings = {
  closeOnOutsideClick: true,
  modal: false,
  positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
  scrollStrategy: new CloseScrollStrategy()
 };

    constructor(public cdr: ChangeDetectorRef) { }

    public chipRemoved(event: IBaseChipEventArgs) {
        this.chipList = this.chipList.filter((item) => {
            return item.id !== event.owner.id;
        });
        this.cdr.detectChanges();
    }

    public toggleDropDown(ev) {
        this._overlaySettings.positionStrategy.settings.target = ev.target;
        this.igxDropDown.toggle(this._overlaySettings);
    }

    public onDropDownOpen() {
        this.dropDownOpened = true;
    }

    public onDropDownClose() {
        this.dropDownOpened = false;
    }

    public itemSelection(ev) {
        const item = this.dropDownList.find((val) => val.name === ev.newSelection.elementRef.nativeElement.textContent);
        if (this.chipList.find((val) => val.name === item.name) === undefined) {
            this.chipList.push({
                id: item.id,
                name: item.name
            });
        }
    }
}

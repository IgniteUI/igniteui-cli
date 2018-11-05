import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IgxChipsAreaComponent, IgxDropDownComponent } from 'igniteui-angular';

@Component({
  selector: 'app-$(filePrefix)',
  templateUrl: './$(filePrefix).component.html',
  styleUrls: ['./$(filePrefix).component.css']
})

export class $(ClassName)Component {

	public dropDownList = [
        {
            name: "Lisa Landers"
        },
        {
            name: "Lisa Spencer"
        },
        {
            name: "Dorothy H. Spencer"
        },
        {
            name: "Dorothy Taylor"
        },
        {
            name: "Stephanie May"
        },
        {
            name: "Marianne Taylor"
        },
        {
            name: "Tammie Alvarez"
        },
        {
            name: "Tammie Flores"
        },
        {
            name: "Charlotte Flores"
        },
        {
            name: "Ward Riley"
        }
	];

	public chipList = [ ];
	
	@ViewChild("chipsArea", { read: IgxChipsAreaComponent })
	public chipsArea: IgxChipsAreaComponent;
	
	@ViewChild(IgxDropDownComponent)
	public igxDropDown: IgxDropDownComponent;
	
	private dropDownOpened = false;

  constructor(public cdr: ChangeDetectorRef) { }

  public chipRemoved(event) {
	this.chipList = this.chipList.filter((item) => {
		return item.id !== event.owner.id;
	});
	this.chipsArea.cdr.detectChanges();
}

  public toggleDropDown(ev) {
	if (!this.dropDownOpened) {
		this.igxDropDown.open({
			modal: false
		});
		}
	}

	public onDropDownOpen() {
        this.dropDownOpened = true;
    }

    public onDropDownClose() {
        this.dropDownOpened = false;
    }

    public itemSelection(ev) {
        let i;
        for (i = 0; i < this.dropDownList.length; i++) {
            if (
                ev.newSelection.elementRef.nativeElement.textContent ===
                this.dropDownList[i].name
            ) {
                this.chipList.push({
                    name: this.dropDownList[i].name
                });
                this.igxDropDown.close();
            }
        }
    }
}
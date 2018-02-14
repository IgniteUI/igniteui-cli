import { Component } from "@angular/core";
import { funnelData } from "../../assets/funnel-data";

@Component({
	selector: "$(filePrefix)",
	template: `
		<h1>$(description)</h1>
		<div style="float: left">
			<ig-funnel-chart [(options)]="normalOptions" widgetId='chartNormal'>
			</ig-funnel-chart>
		</div>

		<div style="float: left; width: 500px; height: 500px;">
			<ig-funnel-chart [(options)]="weightedOptions" widgetId='chartWeighted'>
			</ig-funnel-chart>
		</div>

			<div style="float: left; width: 500px; height: 500px;">
			<ig-funnel-chart [(options)]="invertedOptions" widgetId='chartInverted'>
			</ig-funnel-chart>

		</div>
	`
})
export class $(ClassName)Component {
	public normalOptions: IgDataChart;
	public weightedOptions: IgDataChart;
	public invertedOptions: IgDataChart;
	public data: any;

	constructor() {
		this.data = funnelData;
		this.normalOptions = {
			width: "325px",
			height: "450px",
			dataSource: this.data,
			responseDataKey: "data",	
			valueMemberPath: "Budget",
			innerLabelMemberPath: "Budget",
			innerLabelVisibility: "visible",
			outerLabelMemberPath: "Department",
			outerLabelVisibility: "visible"
		};
		this.weightedOptions = {
			width: "325px",
			height: "450px",
			leftMargin: 20,
			dataSource: this.data,
			responseDataKey: "data",	
			valueMemberPath: "Budget",
			innerLabelMemberPath: "Budget",
			innerLabelVisibility: "visible",
			outerLabelMemberPath: "Department",
			outerLabelVisibility: "visible",
			funnelSliceDisplay: "weighted"
		};
		this.invertedOptions = {
			width: "325px",
			height: "450px",
			leftMargin: 20,
			dataSource: this.data,
			responseDataKey: "data",	
			valueMemberPath: "Budget",
			innerLabelMemberPath: "Budget",
			innerLabelVisibility: "visible",
			isInverted: true
		};
	}
}
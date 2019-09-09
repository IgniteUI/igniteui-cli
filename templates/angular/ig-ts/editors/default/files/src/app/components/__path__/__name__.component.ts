import { Component } from '@angular/core';

@Component({
	selector: "$(filePrefix)",
	template: `
		<h1>$(description)</h1>
		<$(widget) [(options)]="options" widgetId='$(widget)'></$(widget)>
	`
})
export class $(ClassName)Component {
	public options: Ig$(nameMerged);

	constructor() {
		this.options = {
			width: "250px"
		};
	}
}


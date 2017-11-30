import { Component } from '@angular/core';

@Component({
	selector: "editors",
	template: `
		<h1>Angular template for $(name)</h1>
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


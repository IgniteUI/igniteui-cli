import { Component } from '@angular/core';

@Component({
	selector: "editors",
	template: `
		<$(widget) [(options)]="options" widgetId='$(widget)'></$(widget)>
	`
})
export class $(ClassName)Component {
	public options: Ig$(ClassName);
	constructor() {
		this.options = {
			width: "400px"
		}
	}
}


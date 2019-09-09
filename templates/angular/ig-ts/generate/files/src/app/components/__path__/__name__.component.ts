import { Component } from "@angular/core";

@Component({
	selector: "$(filePrefix)",
	template: `
	<div>
		<h1>Name: $(name)</h1>
		<h4>$(description)</h4>
	</div>`
})
export class $(ClassName)Component {

	constructor() {}
}
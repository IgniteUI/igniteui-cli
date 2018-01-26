import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	template: `
		<h2>$(description): $(name)</h2>
		<img src="src/app/assets/Ignite-header-apps-960.png" alt="Ignite UI" height="602" width="602" />
	`
})
export class HomeComponent {
	public projectName: string = "$(name)";
}

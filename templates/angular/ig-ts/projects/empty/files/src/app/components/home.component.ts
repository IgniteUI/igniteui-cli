import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	template: `
		<h1>$(description)</h1>
		<img src="src/app/assets/Ignite-header-apps-960.png" alt="Ignite UI" height="602" width="602" />
	`
})
export class HomeComponent {
	public projectName: string = "$(name)";
}

//in case using the routing module of angular cli..

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent, AboutHomeComponent, AboutItemComponent } from './components/about.component';
import { HomeComponent } from './components/home.component';

export const routes: Routes = [
		{ path: '', redirectTo: '/home', pathMatch: 'full'},
		{ path: 'home', component: HomeComponent, data: { text: "Home" } },
		{
		path: 'about',
		component: AboutComponent,
		data: { text: "About" },
		children: [
			{ path: '', component: AboutHomeComponent },
			{ path: 'item/:id', component: AboutItemComponent }
		]
		}

		// { path: '**', redirectTo: '/home', pathMatch: 'full'}
	];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
  })
  export class AppRoutingModule { }

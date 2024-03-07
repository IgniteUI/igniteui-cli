import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';

export const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent, data: { text: 'Home' }},
	{ path: 'error', component: UncaughtErrorComponent },
	{ path: '**', component: PageNotFoundComponent } // must always be last
];

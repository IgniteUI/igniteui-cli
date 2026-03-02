import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFound } from './error-routing/not-found/not-found';
import { UncaughtError } from './error-routing/error/uncaught-error';

export const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent, data: { text: 'Home' }},
	{ path: 'error', component: UncaughtError },
	{ path: '**', component: NotFound } // must always be last
];

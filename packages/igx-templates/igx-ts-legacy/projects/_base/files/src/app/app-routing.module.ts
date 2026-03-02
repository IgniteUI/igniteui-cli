import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFound } from './error-routing/not-found/not-found';
import { UncaughtError } from './error-routing/error/uncaught-error';
import { ErrorRoutingModule } from './error-routing/error-routing.module';

export const routes: Routes = [
	{ path: 'error', component: UncaughtError },
	{ path: '**', component: NotFound } // must always be last
];

@NgModule({
	imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
	exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule { }

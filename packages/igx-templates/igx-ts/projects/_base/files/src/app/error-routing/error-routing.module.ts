import { NgModule, ErrorHandler, Provider, isDevMode } from '@angular/core';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { UncaughtErrorComponent } from './error/uncaught-error.component';
import { GlobalErrorHandlerService } from './error/global-error-handler.service';

const providers: Provider[] = [];

if (!isDevMode()) {
  // register prod error handler
  providers.push({ provide: ErrorHandler, useClass: GlobalErrorHandlerService });
}

@NgModule({
  declarations: [
    PageNotFoundComponent,
    UncaughtErrorComponent
  ],
  providers
})
export class ErrorRoutingModule { }

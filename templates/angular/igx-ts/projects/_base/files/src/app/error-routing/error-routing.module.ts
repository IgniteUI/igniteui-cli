import { NgModule, ErrorHandler } from '@angular/core';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { UncaughtErrorComponent } from './error/uncaught-error.component';
import { GlobalErrorHandlerService } from './error/global-error-handler.service';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    UncaughtErrorComponent
  ],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandlerService }]
})
export class ErrorRoutingModule { }

import { NgModule, ErrorHandler, Provider } from '@angular/core';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { UncaughtErrorComponent } from './error/uncaught-error.component';
import { GlobalErrorHandlerService } from './error/global-error-handler.service';
import { environment } from '../../environments/environment';

const providers: Provider[] = [];

if (environment.production) {
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

import { ErrorHandler, NgModule, Provider } from '@angular/core';
import { environment } from '../../environments/environment';
import { GlobalErrorHandler } from './error/global-error-handler';
import { UncaughtError } from './error/uncaught-error';
import { NotFound } from './not-found/not-found';

const providers: Provider[] = [];

if (environment.production) {
  // register prod error handler
  providers.push({ provide: ErrorHandler, useClass: GlobalErrorHandler });
}

@NgModule({
  declarations: [
    NotFound,
    UncaughtError
  ],
  providers
})
export class ErrorRoutingModule { }

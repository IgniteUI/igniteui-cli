import { ErrorHandler, Injector, NgZone, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector, private zone: NgZone) { }

  handleError(error) {
    // handle and/or log error, for example:
    console.error(error);

    // show error page
    const router = this.injector.get(Router);
    if (router) {
      this.zone.run(() => {
        router
          .navigate(['error'])
          .catch((err) => console.error(err));
      });
    }
  }
}

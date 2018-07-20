import { ErrorHandler, EventEmitter, Injector, NgZone, Injectable, isDevMode } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  public errorEvent: EventEmitter<boolean> = new EventEmitter<boolean>(true);

  private router: Router;
  private isInErrorState: boolean;

  constructor(private injector: Injector, private zone: NgZone) { }

  handleError(error) {
    this.router = this.injector.get(Router);

    if (!this.isInErrorState) {
      this.isInErrorState = true;
      if (isDevMode()) {
        throw error;
      } else {
      this.zone.run(() => {
         this.router.navigate(['error']);
        });
      }
    }
  }
}

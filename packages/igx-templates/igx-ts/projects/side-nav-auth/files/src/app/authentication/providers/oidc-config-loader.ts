import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OpenIdConfiguration, StsConfigLoader } from 'angular-auth-oidc-client';

/**
 * Dynamic STS config loader that allows registering OIDC provider configurations at runtime.
 * Call `add()` for each provider before `checkAuth()` is invoked (e.g. via `addGoogle`, `addMicrosoft`).
 */
@Injectable({ providedIn: 'root' })
export class OidcConfigLoader extends StsConfigLoader {
  private configs: OpenIdConfiguration[] = [];

  /** Register an OIDC configuration for a provider. */
  add(config: OpenIdConfiguration): void {
    this.configs.push(config);
  }

  override loadConfigs(): Observable<OpenIdConfiguration[]> {
    return of(this.configs);
  }
}

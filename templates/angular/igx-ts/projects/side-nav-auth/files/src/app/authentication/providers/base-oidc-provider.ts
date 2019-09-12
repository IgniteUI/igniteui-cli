import { take } from 'rxjs/operators';
import {
    OidcConfigService,
    OidcSecurityService,
    AuthWellKnownEndpoints,
    OpenIDImplicitFlowConfiguration
} from 'angular-auth-oidc-client';
import { AuthProvider } from './auth-provider';
import { ExternalLogin } from '../models/login';
import { ExternalAuthConfig } from '../services/external-auth-configs';

/** Base provider for OpenID Connect (OIDC) https://openid.net/connect/ */
export abstract class BaseOidcProvider implements AuthProvider {
    constructor(protected oidcConfigService: OidcConfigService,
                protected oidcSecurityService: OidcSecurityService,
                protected externalStsConfig: ExternalAuthConfig) {}

    public config() {
        const openIDImplicitFlowConfiguration = new OpenIDImplicitFlowConfiguration();
        openIDImplicitFlowConfiguration.stsServer = this.externalStsConfig.stsServer;
        openIDImplicitFlowConfiguration.redirect_url = this.externalStsConfig.redirect_url;
        openIDImplicitFlowConfiguration.client_id = this.externalStsConfig.client_id;
        openIDImplicitFlowConfiguration.response_type = this.externalStsConfig.response_type;
        openIDImplicitFlowConfiguration.scope = this.externalStsConfig.scope;
        openIDImplicitFlowConfiguration.post_logout_redirect_uri = this.externalStsConfig.redirect_url;
        openIDImplicitFlowConfiguration.post_login_route = this.externalStsConfig.post_login_route;
        openIDImplicitFlowConfiguration.auto_userinfo = this.externalStsConfig.auto_userinfo;
        openIDImplicitFlowConfiguration.max_id_token_iat_offset_allowed_in_seconds =
            this.externalStsConfig.max_id_token_iat_offset_allowed_in_seconds;

        const authWellKnownEndpoints = new AuthWellKnownEndpoints();
        authWellKnownEndpoints.setWellKnownEndpoints(this.oidcConfigService.wellKnownEndpoints);
        this.oidcSecurityService.setupModule(openIDImplicitFlowConfiguration, authWellKnownEndpoints);
    }

    public login() {
        this.oidcConfigService.onConfigurationLoaded.pipe(take(1)).subscribe(() => {
            this.config();
            this.oidcSecurityService.authorize();
        });
        this.oidcConfigService.load_using_stsServer(this.externalStsConfig.stsServer);
    }

    public getUserInfo(): Promise<ExternalLogin> {
        let resolve: (val: ExternalLogin) => void;
        let reject: () => void;
        const user = new Promise<ExternalLogin>((res, rej) => {
            resolve = res;
            reject = rej;
        });
        this.oidcConfigService.onConfigurationLoaded.pipe(take(1)).subscribe(() => {
            this.config();
            this.oidcSecurityService.onAuthorizationResult.subscribe(() => {
                this.oidcSecurityService.getUserData().subscribe(userData => {
                    resolve(this.formatUserData(userData));
                });
            });
            this.oidcSecurityService.authorizedImplicitFlowCallback();
        });
        this.oidcConfigService.load_using_stsServer(this.externalStsConfig.stsServer);
        return user;
    }

    public logout() {
        this.oidcSecurityService.logoff();
    }

    /** Format received user data per provider claims */
    protected abstract formatUserData(userData): ExternalLogin;
}

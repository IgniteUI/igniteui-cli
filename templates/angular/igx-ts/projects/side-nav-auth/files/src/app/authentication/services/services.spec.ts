import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import * as JWTUtil from './jwt-util';
import { ExternalAuthService, ExternalAuthRedirectUrl, ExternalAuthProvider } from './external-auth.service';
import { GoogleProvider } from '../providers/google-provider';
import { FacebookProvider } from '../providers/facebook-provider';
import { MicrosoftProvider } from '../providers/microsoft-provider';

describe('Services', () => {

    describe('Authentication Service', () => {
        let mock_httpClient: any;

        beforeEach(() => {
            mock_httpClient = {
                post: () => { }
            };
        });

        it('Should properly initialize', async () => {
            const authServ = new AuthenticationService(mock_httpClient);
            expect(authServ).toBeDefined();
        });
        it(`Should properly call 'login'`, async () => {
            const authServ = new AuthenticationService(mock_httpClient);
            const loginPostSpy = spyOn<any>(authServ, 'loginPost').and.returnValue(Promise.resolve());
            const dummyData = { email: 'Dummy', password: 'Data' };
            await authServ.login(dummyData);
            expect(loginPostSpy).toHaveBeenCalled();
            expect(loginPostSpy).toHaveBeenCalledWith('/login', dummyData);
        });
        it(`Should properly call 'register'`, async () => {
            const authServ = new AuthenticationService(mock_httpClient);
            const loginPostSpy = spyOn<any>(authServ, 'loginPost').and.returnValue(Promise.resolve());
            const dummyData = { given_name: 'Testy', family_name: 'Testington', email: 'Dummy', password: 'Data' };
            await authServ.register(dummyData);
            expect(loginPostSpy).toHaveBeenCalled();
            expect(loginPostSpy).toHaveBeenCalledWith('/register', dummyData);
        });
        it(`Should properly call 'loginWith'`, async () => {
            const authServ = new AuthenticationService(mock_httpClient);
            const loginPostSpy = spyOn<any>(authServ, 'loginPost').and.returnValue(Promise.resolve());
            const dummyData = { id: 'Test', name: 'Testy', email: 'Dummy', externalToken: 'Data' };
            await authServ.loginWith(dummyData);
            expect(loginPostSpy).toHaveBeenCalled();
            expect(loginPostSpy).toHaveBeenCalledWith('/extlogin', dummyData);
        });
        it(`Should properly call 'loginPost'`, async () => {
            const authServ = new AuthenticationService(mock_httpClient);
            const loginPostSpy = spyOn<any>(authServ, 'loginPost').and.callThrough();
            const dummyData = { email: 'Dummy', password: 'Data' };
            const mockObs = { toPromise: () => { } };
            spyOn(mockObs, 'toPromise').and.returnValue('TEST DATA');
            spyOn(mock_httpClient, 'post').and.returnValue(mockObs);
            spyOn(JWTUtil, 'parseUser').and.returnValue({ user: 'Test' });
            await authServ.login(dummyData);
            expect(loginPostSpy).toHaveBeenCalledWith('/login', dummyData);
            expect(mock_httpClient.post).toHaveBeenCalledWith('/login', dummyData);
            expect(JWTUtil.parseUser).toHaveBeenCalledWith('TEST DATA');
        });
        it(`Should properly call 'loginPost' and throw error`, async () => {
            const authServ = new AuthenticationService(mock_httpClient);
            // const loginPostSpy = spyOn<any>(authServ, 'loginPost').and.callThrough();
            const dummyData = { email: 'Dummy', password: 'Data' };
            const mockObs = { toPromise: () => { } };
            spyOn(mockObs, 'toPromise').and.callFake(() => {
                throw new Error('Test Error');
            });
            spyOn(mock_httpClient, 'post').and.returnValue(mockObs);
            expect(await (<any>authServ).loginPost(dummyData)).toEqual({ error: 'Test Error' });
            expect(mock_httpClient.post).toHaveBeenCalled();
        });
    });

    describe('External Authentication Service', () => {
        let mock_OIDC_security: any, mock_OIDC_config: any, mock_router: any, mock_location: any;

        beforeEach(() => {
            mock_OIDC_security = {
            };
            mock_OIDC_config = {
            };
            mock_router = {
            };
            mock_location = {
            };
        });
        it(`Should properly initialize`, () => {
            const extAuthServ = new ExternalAuthService(mock_router, mock_OIDC_security, mock_OIDC_config, mock_location);
            expect(extAuthServ).toBeDefined();
        });
        it(`Should properly get/set 'activeProvider'`, () => {
            const extAuthServ = new ExternalAuthService(mock_router, mock_OIDC_security, mock_OIDC_config, mock_location);
            spyOn(localStorage, 'getItem').and.returnValue('test');
            const testProvider = extAuthServ.activeProvider;
            expect(localStorage.getItem).toHaveBeenCalled();
            expect(localStorage.getItem).toHaveBeenCalledWith('extActiveProvider');
            expect(testProvider).toEqual('test');
            spyOn(localStorage, 'setItem');
            extAuthServ.activeProvider = <any>'ccc';
            expect(localStorage.setItem).toHaveBeenCalled();
            expect(localStorage.setItem).toHaveBeenCalledWith('extActiveProvider', 'ccc');
        });

        it(`Should properly call 'hasProvider'`, () => {
            const extAuthServ = new ExternalAuthService(mock_router, mock_OIDC_security, mock_OIDC_config, mock_location);
            const providersMap = new Map<any, any>();
            (<any>extAuthServ).providers = providersMap;
            expect(extAuthServ.hasProvider()).toEqual(false);
            providersMap.set('0', '0');
            expect(extAuthServ.hasProvider()).toEqual(true);
            expect(extAuthServ.hasProvider(<any>'0')).toEqual(true);
            expect(extAuthServ.hasProvider(<any>'1')).toEqual(false);
        });

        it(`Should properly call 'addGoogle'`, () => {
            const extAuthServ = new ExternalAuthService(mock_router, mock_OIDC_security, mock_OIDC_config, mock_location);
            const providersSpy = spyOn<any>((<any>extAuthServ).providers, 'set');
            spyOn<any>(extAuthServ, 'getAbsoluteUrl').and.returnValue('testUrl');
            const configParams = {
                provider: ExternalAuthProvider.Google,
                stsServer: 'https://accounts.google.com',
                client_id: 'test',
                scope: 'openid email profile',
                redirect_url: 'testUrl',
                response_type: 'id_token token',
                post_logout_redirect_uri: '/',
                post_login_route: 'redirect',
                auto_userinfo: false,
                max_id_token_iat_offset_allowed_in_seconds: 30
            };
            extAuthServ.addGoogle('test');
            expect(providersSpy).toHaveBeenCalled();
            expect(providersSpy).toHaveBeenCalledWith('Google',
                new GoogleProvider(mock_OIDC_config, mock_OIDC_security, configParams));
        });

        it(`Should properly call 'addFacebook'`, () => {
            const extAuthServ = new ExternalAuthService(mock_router, mock_OIDC_security, mock_OIDC_config, mock_location);
            const providersSpy = spyOn<any>((<any>extAuthServ).providers, 'set');
            const configParams = <any>{
                client_id: 'test',
                redirect_url: ExternalAuthRedirectUrl.Facebook
            };
            extAuthServ.addFacebook('test');
            expect(providersSpy).toHaveBeenCalled();
            expect(providersSpy).toHaveBeenCalledWith('Facebook',
                new FacebookProvider(configParams, mock_router));
        });

        it(`Should properly call 'addMicrosoft'`, () => {
            const extAuthServ = new ExternalAuthService(mock_router, mock_OIDC_security, mock_OIDC_config, mock_location);
            const providersSpy = spyOn<any>((<any>extAuthServ).providers, 'set');
            spyOn<any>(extAuthServ, 'getAbsoluteUrl').and.returnValue('testUrl');
            const configParams = <any>{
                provider: ExternalAuthProvider.Microsoft,
                stsServer: 'https://login.microsoftonline.com/consumers/v2.0/',
                client_id: 'test',
                scope: 'openid email profile',
                redirect_url: 'testUrl',
                response_type: 'id_token token',
                post_logout_redirect_uri: '/',
                post_login_route: '',
                auto_userinfo: false,
                max_id_token_iat_offset_allowed_in_seconds: 1000
            };
            extAuthServ.addMicrosoft('test');
            expect(providersSpy).toHaveBeenCalled();
            expect(providersSpy).toHaveBeenCalledWith('Microsoft',
                new MicrosoftProvider(mock_OIDC_config, mock_OIDC_security, configParams));
        });

        it(`Should properly call 'getUserInfo'`, async () => {
            const extAuthServ = new ExternalAuthService(mock_router, mock_OIDC_security, mock_OIDC_config, mock_location);
            const providersMap = new Map<any, any>();
            const mockObj = {
                getUserInfo: () => {
                    return { name: 'test'};
                }
            };
            spyOn(mockObj, 'getUserInfo').and.callThrough();
            const providersGetSpy = spyOn(providersMap, 'get').and.returnValue(false);
            providersMap.set(ExternalAuthProvider.Facebook, mockObj);
            (<any>extAuthServ).providers = providersMap;
            spyOn(Promise, 'reject').and.returnValue(Promise.resolve(null));
            expect(await extAuthServ.getUserInfo(ExternalAuthProvider.Facebook)).toEqual(null);
            expect(providersGetSpy).toHaveBeenCalledTimes(1);
            providersGetSpy.and.returnValue(mockObj);
            expect(await extAuthServ.getUserInfo(ExternalAuthProvider.Facebook)).toEqual(<any>{
                name: 'test',
                externalProvider: ExternalAuthProvider.Facebook
            });
            expect(providersGetSpy).toHaveBeenCalledTimes(2);
        });

        it(`Should properly call 'getUserInfo'`, () => {
            const extAuthServ = new ExternalAuthService(mock_router, mock_OIDC_security, mock_OIDC_config, mock_location);
            const providersMap = new Map<any, any>();
            const mockObj = <any>{
                login: () => {}
            };
            spyOn(mockObj, 'login');
            const providersGetSpy = spyOn(providersMap, 'get').and.returnValue(false);
            providersMap.set(ExternalAuthProvider.Facebook, mockObj);
            (<any>extAuthServ).providers = providersMap;
            const setActiveProvider = spyOnProperty(extAuthServ, 'activeProvider', 'set');
            extAuthServ.login(ExternalAuthProvider.Facebook);
            expect(mockObj.login).not.toHaveBeenCalled();
            expect(setActiveProvider).not.toHaveBeenCalled();
            providersGetSpy.and.returnValue(mockObj);
            extAuthServ.login(ExternalAuthProvider.Facebook);
            expect(mockObj.login).toHaveBeenCalled();
            expect(setActiveProvider).toHaveBeenCalledWith(ExternalAuthProvider.Facebook);
        });
    });
});

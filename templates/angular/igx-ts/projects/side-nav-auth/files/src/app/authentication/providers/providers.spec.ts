import { FacebookProvider } from './facebook-provider';
import { GoogleProvider } from './google-provider';
import { MicrosoftProvider } from './microsoft-provider';

describe('Providers', () => {
    const mock_externalAuthConfig = <any>{
        stsServer: 'test-stsServer',
        redirect_url: 'test-redirect_url',
        client_id: 'test-client_id',
        response_type: 'test-response_type',
        scope: 'test-scope',
        post_login_route: 'test-post_login_route',
        auto_userinfo: 'test-auto_userinfo',
        max_id_token_iat_offset_allowed_in_seconds: 'test-max_id_token_iat_offset_allowed_in_seconds'
    };
    const mock_router = <any>{
        navigate: () => { }
    };
    const mock_OIDC_Config = <any>{
        wellKnownEndpoints: {
            issuer: ''
        },
        load_using_stsServer: () => { },
        onConfigurationLoaded: {
            pipe: () => { }
        }
    };
    const mock_OIDC_Security = <any>{
        setupModule: () => { },
        authorize: () => { },
        getToken: () => { },
        onAuthorizationResult: () => { },
        authorizedCallback: () => { },
        getUserData: () => { },
        logoff: () => { }
    };
    describe('Facebook Provider', () => {
        let mockResponse: any, mockAPIObj: any;
        global['FB'] = {
            login: (callback: (obj: any) => void, scope: { scope: string }) => { callback({ authResponse: mockResponse }); },
            init: () => { },
            api: (params: string, callback: (obj: any) => void) => { callback(mockAPIObj); },
            getAuthResponse: () => { },
            logout: () => { }
        };
        it('Should properly initialize', () => {
            const provider = new FacebookProvider(mock_externalAuthConfig, mock_router);
            expect(provider).toBeDefined();
        });

        it('Should properly call config', () => {
            const provider = new FacebookProvider(mock_externalAuthConfig, mock_router);
            spyOn(FB, 'init');
            provider.config();
            expect(FB.init).toHaveBeenCalled();
            expect(FB.init).toHaveBeenCalledWith({
                appId: mock_externalAuthConfig.client_id,
                xfbml: false,
                version: 'v3.1'
            });
        });

        it('Should properly call login', () => {
            const provider = new FacebookProvider(mock_externalAuthConfig, mock_router);
            spyOn(provider, 'config');
            spyOn(FB, 'login').and.callThrough();
            spyOn(console, 'log').and.callThrough();
            spyOn(FB, 'api').and.callThrough();
            mockResponse = false;
            provider.login();
            expect(provider.config).toHaveBeenCalledTimes(1);
            expect(FB.login).toHaveBeenCalledTimes(1);
            expect(FB.api).not.toHaveBeenCalled();
            expect(console.log).toHaveBeenCalledWith('User cancelled login or did not fully authorize.');
            spyOn(FB, 'getAuthResponse').and.returnValue({ accessToken: 'Fake' });
            spyOn(mock_router, 'navigate');
            mockResponse = true;
            const mockObj = {
                id: 'test id',
                name: 'test name',
                first_name: 'test first name',
                last_name: 'test family name',
                email: 'test email',
                picture: 'test picture',
                externalToken: 'Fake'
            };
            const expectedObject = {
                id: 'test id',
                name: 'test name',
                given_name: 'test first name',
                family_name: 'test family name',
                email: 'test email',
                picture: 'test picture',
                externalToken: 'Fake'
            };
            mockAPIObj = mockObj;
            provider.login();
            expect(provider.config).toHaveBeenCalledTimes(2);
            expect(FB.login).toHaveBeenCalledTimes(2);
            expect(FB.api).toHaveBeenCalled();
            expect(mock_router.navigate).toHaveBeenCalledWith([mock_externalAuthConfig.redirect_url]);
            expect((<any>provider).user).toEqual(expectedObject);
        });

        it(`Should properly call 'getUserInfo'`, () => {
            const provider = new FacebookProvider(mock_externalAuthConfig, mock_router);
            spyOn(Promise, 'resolve').and.returnValue('Mock');
            expect(provider.getUserInfo()).toEqual(<any>'Mock');
        });

        it(`Should properly call 'logout'`, () => {
            const provider = new FacebookProvider(mock_externalAuthConfig, mock_router);
            spyOn(FB, 'logout');
            provider.logout();
            expect(FB.logout).toHaveBeenCalled();
        });
    });

    describe('Google Provider', () => {

        it('Should properly initialize', () => {
            const provider = new GoogleProvider(mock_OIDC_Config, mock_OIDC_Security, mock_externalAuthConfig);
            expect(provider).toBeDefined();
        });

        it('Should properly call config', () => {
            const provider = new GoogleProvider(mock_OIDC_Config, mock_OIDC_Security, mock_externalAuthConfig);
            spyOn(mock_OIDC_Security, 'setupModule').and.callThrough();
            provider.config();
            expect(mock_OIDC_Security.setupModule).toHaveBeenCalled();
        });

        it('Should properly call login', () => {
            const provider = new GoogleProvider(mock_OIDC_Config, mock_OIDC_Security, mock_externalAuthConfig);
            const mockSub = {
                'subscribe': (fn: () => {}) => {
                    fn.apply(mock_OIDC_Security);
                }
            };
            spyOn(mockSub, 'subscribe').and.callThrough();
            spyOn(mock_OIDC_Security, 'authorize');
            spyOn(mock_OIDC_Config.onConfigurationLoaded, 'pipe').and.returnValue(mockSub);
            spyOn(mock_OIDC_Config, 'load_using_stsServer');
            const mockSpy = spyOn(provider, 'config');
            provider.login();
            expect(mockSub.subscribe).toHaveBeenCalled();
            expect(mockSpy).toHaveBeenCalled();
            expect(mock_OIDC_Security.authorize).toHaveBeenCalled();
            expect(mock_OIDC_Config.load_using_stsServer).toHaveBeenCalled();
        });

        it(`Should properly call 'formatUserData'`, () => {
            const provider = new GoogleProvider(mock_OIDC_Config, mock_OIDC_Security, mock_externalAuthConfig);
            const mockObj = {
                sub: 'test-id',
                name: 'test-name',
                email: 'test-email',
                given_name: 'test-given_name',
                family_name: 'test-family_name',
                picture: 'test-picture'
            };
            spyOn(mock_OIDC_Security, 'getToken').and.returnValue('FAKE');
            expect((<any>provider).formatUserData(mockObj)).toEqual({
                id: mockObj.sub,
                name: mockObj.name,
                email: mockObj.email,
                given_name: mockObj.given_name,
                family_name: mockObj.family_name,
                picture: mockObj.picture,
                externalToken: 'FAKE'
            });
        });

        it('Should properly call getUserInfo', () => {
            const provider = new GoogleProvider(mock_OIDC_Config, mock_OIDC_Security, mock_externalAuthConfig);
            const mockSub = {
                'subscribe': (fn: () => {}) => {
                    fn.apply(this);
                }
            };
            spyOn(mockSub, 'subscribe').and.callThrough();
            spyOn(mock_OIDC_Config.onConfigurationLoaded, 'pipe').and.returnValue(mockSub);
            spyOn(provider, 'config');
            spyOn(mock_OIDC_Config, 'load_using_stsServer');
            mock_OIDC_Security.onAuthorizationResult = mockSub;
            spyOn(mock_OIDC_Security, 'getUserData').and.returnValue(mockSub);
            spyOn(mock_OIDC_Security, 'authorizedCallback');
            const formatDataSpy = spyOn<any>(provider, 'formatUserData');
            provider.getUserInfo();
            expect(mockSub.subscribe).toHaveBeenCalled();
            expect(mockSub.subscribe).toHaveBeenCalledTimes(3);
            expect(formatDataSpy).toHaveBeenCalled();
            expect(provider.config).toHaveBeenCalled();
            expect(mock_OIDC_Security.authorizedCallback).toHaveBeenCalled();
            expect(mock_OIDC_Config.load_using_stsServer).toHaveBeenCalled();
        });

        it('Should properly call logout', () => {
            const provider = new GoogleProvider(mock_OIDC_Config, mock_OIDC_Security, mock_externalAuthConfig);
            spyOn(mock_OIDC_Security, 'logoff').and.callThrough();
            provider.logout();
            expect(mock_OIDC_Security.logoff).toHaveBeenCalled();
        });
    });

    describe('Microsoft Provider', () => {

        it('Should properly initialize', () => {
            const provider = new MicrosoftProvider(mock_OIDC_Config, mock_OIDC_Security, mock_externalAuthConfig);
            expect(provider).toBeDefined();
        });

        it('Should properly call config', () => {
            const provider = new MicrosoftProvider(mock_OIDC_Config, mock_OIDC_Security, mock_externalAuthConfig);
            spyOn(mock_OIDC_Security, 'setupModule').and.callThrough();
            provider.config();
            expect(mock_OIDC_Security.setupModule).toHaveBeenCalled();
        });

        it('Should properly call config if tenant !== consumer', () => {
            const provider = new MicrosoftProvider(mock_OIDC_Config, mock_OIDC_Security, mock_externalAuthConfig);
            provider.tenant = 'test';
            provider.tenantID = 'test_id';
            spyOn(String.prototype, 'replace');
            spyOn(mock_OIDC_Security, 'setupModule').and.callThrough();
            provider.config();
            expect(String.prototype.replace).toHaveBeenCalledWith('{tenantid}', 'test_id');
            expect(mock_OIDC_Security.setupModule).toHaveBeenCalled();
        });

        it('Should properly call login', () => {
            const provider = new MicrosoftProvider(mock_OIDC_Config, mock_OIDC_Security, mock_externalAuthConfig);
            const mockSub = {
                'subscribe': (fn: () => {}) => {
                    fn.apply(mock_OIDC_Security);
                }
            };
            spyOn(mockSub, 'subscribe').and.callThrough();
            spyOn(mock_OIDC_Security, 'authorize');
            spyOn(mock_OIDC_Config.onConfigurationLoaded, 'pipe').and.returnValue(mockSub);
            spyOn(mock_OIDC_Config, 'load_using_stsServer');
            const mockSpy = spyOn(provider, 'config');
            provider.login();
            expect(mockSub.subscribe).toHaveBeenCalled();
            expect(mockSpy).toHaveBeenCalled();
            expect(mock_OIDC_Security.authorize).toHaveBeenCalled();
            expect(mock_OIDC_Config.load_using_stsServer).toHaveBeenCalled();
        });

        it('Should properly call getUserInfo', () => {
            const provider = new MicrosoftProvider(mock_OIDC_Config, mock_OIDC_Security, mock_externalAuthConfig);
            const mockSub = {
                'subscribe': (fn: () => {}) => {
                    fn.apply(mock_OIDC_Security);
                }
            };
            spyOn(mockSub, 'subscribe').and.callThrough();
            spyOn(mock_OIDC_Config.onConfigurationLoaded, 'pipe').and.returnValue(mockSub);
            spyOn(mock_OIDC_Config, 'load_using_stsServer');
            spyOn(provider, 'config');
            spyOn(mock_OIDC_Security, 'authorizedCallback');
            mock_OIDC_Security.onAuthorizationResult = mockSub;
            spyOn(mock_OIDC_Security, 'getUserData').and.returnValue(mockSub);
            const formatDataSpy = spyOn<any>(provider, 'formatUserData');
            provider.getUserInfo();
            expect(mockSub.subscribe).toHaveBeenCalled();
            expect(mockSub.subscribe).toHaveBeenCalledTimes(3);
            expect(formatDataSpy).toHaveBeenCalled();
            expect(provider.config).toHaveBeenCalled();
            expect(mock_OIDC_Security.authorizedCallback).toHaveBeenCalled();
            expect(mock_OIDC_Config.load_using_stsServer).toHaveBeenCalled();
        });

        it(`Should properly call 'formatUserData'`, () => {
            const provider = new MicrosoftProvider(mock_OIDC_Config, mock_OIDC_Security, mock_externalAuthConfig);
            const mockObj = {
                oid: 'test-id',
                name: 'test-name',
                email: 'test-email',
            };
            spyOn(mock_OIDC_Security, 'getToken').and.returnValue('FAKE');
            expect((<any>provider).formatUserData(mockObj)).toEqual({
                id: mockObj.oid,
                name: mockObj.name,
                email: mockObj.email,
                externalToken: 'FAKE'
            });
        });
    });
});

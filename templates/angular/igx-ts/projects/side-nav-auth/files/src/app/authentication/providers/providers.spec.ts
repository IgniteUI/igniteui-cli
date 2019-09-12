import { FacebookProvider } from './facebook-provider';
import { GoogleProvider } from './google-provider';
import { MicrosoftProvider } from './microsoft-provider';

describe('Providers', () => {
    const MOCK_EXTERNAL_AUTH_CONFIG = {
        stsServer: 'test-stsServer',
        redirect_url: 'test-redirect_url',
        client_id: 'test-client_id',
        response_type: 'test-response_type',
        scope: 'test-scope',
        post_login_route: 'test-post_login_route',
        auto_userinfo: 'test-auto_userinfo',
        max_id_token_iat_offset_allowed_in_seconds: 'test-max_id_token_iat_offset_allowed_in_seconds'
    } as any;
    const MOCK_ROUTER = {
        navigate: () => { }
    } as any;
    const MOCK_OIDC_CONFIG = {
        wellKnownEndpoints: {
            issuer: ''
        },
        load_using_stsServer: () => { },
        onConfigurationLoaded: {
            pipe: () => { }
        }
    } as any;
    const MOCK_OIDC_SECURITY = {
        setupModule: () => { },
        authorize: () => { },
        getToken: () => { },
        onAuthorizationResult: () => { },
        authorizedCallback: () => { },
        getUserData: () => { },
        logoff: () => { }
    } as any;
    describe('Facebook Provider', () => {
        const facebookProviderName = 'FB';
        let mockResponse: any;
        let mockAPIObj: any;
        global[facebookProviderName] = {
            login: (callback: (obj: any) => void, scope: { scope: string }) => { callback({ authResponse: mockResponse }); },
            init: () => { },
            api: (params: string, callback: (obj: any) => void) => { callback(mockAPIObj); },
            getAuthResponse: () => { },
            logout: () => { }
        };
        it('Should properly initialize', () => {
            const provider = new FacebookProvider(MOCK_EXTERNAL_AUTH_CONFIG, MOCK_ROUTER);
            expect(provider).toBeDefined();
        });

        it('Should properly call config', () => {
            const provider = new FacebookProvider(MOCK_EXTERNAL_AUTH_CONFIG, MOCK_ROUTER);
            spyOn(FB, 'init');
            provider.config();
            expect(FB.init).toHaveBeenCalled();
            expect(FB.init).toHaveBeenCalledWith({
                appId: MOCK_EXTERNAL_AUTH_CONFIG.client_id,
                xfbml: false,
                version: 'v3.1'
            });
        });

        it('Should properly call login', () => {
            const provider = new FacebookProvider(MOCK_EXTERNAL_AUTH_CONFIG, MOCK_ROUTER);
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
            spyOn(FB, 'getAuthResponse').and.returnValue({ accessToken: 'Fake' } as any);
            spyOn(MOCK_ROUTER, 'navigate');
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
            expect(MOCK_ROUTER.navigate).toHaveBeenCalledWith([MOCK_EXTERNAL_AUTH_CONFIG.redirect_url]);
            expect((provider as any).user).toEqual(expectedObject);
        });

        it(`Should properly call 'getUserInfo'`, () => {
            const provider = new FacebookProvider(MOCK_EXTERNAL_AUTH_CONFIG, MOCK_ROUTER);
            spyOn(Promise, 'resolve').and.returnValue('Mock' as any);
            expect(provider.getUserInfo()).toEqual('Mock' as any);
        });

        it(`Should properly call 'logout'`, () => {
            const provider = new FacebookProvider(MOCK_EXTERNAL_AUTH_CONFIG, MOCK_ROUTER);
            spyOn(FB, 'logout');
            provider.logout();
            expect(FB.logout).toHaveBeenCalled();
        });
    });

    describe('Google Provider', () => {

        it('Should properly initialize', () => {
            const provider = new GoogleProvider(MOCK_OIDC_CONFIG, MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG);
            expect(provider).toBeDefined();
        });

        it('Should properly call config', () => {
            const provider = new GoogleProvider(MOCK_OIDC_CONFIG, MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG);
            spyOn(MOCK_OIDC_SECURITY, 'setupModule').and.callThrough();
            provider.config();
            expect(MOCK_OIDC_SECURITY.setupModule).toHaveBeenCalled();
        });

        it('Should properly call login', () => {
            const provider = new GoogleProvider(MOCK_OIDC_CONFIG, MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG);
            const mockSub = {
                subscribe: (fn: () => {}) => {
                    fn.apply(MOCK_OIDC_SECURITY);
                }
            };
            spyOn(mockSub, 'subscribe').and.callThrough();
            spyOn(MOCK_OIDC_SECURITY, 'authorize');
            spyOn(MOCK_OIDC_CONFIG.onConfigurationLoaded, 'pipe').and.returnValue(mockSub);
            spyOn(MOCK_OIDC_CONFIG, 'load_using_stsServer');
            const mockSpy = spyOn(provider, 'config');
            provider.login();
            expect(mockSub.subscribe).toHaveBeenCalled();
            expect(mockSpy).toHaveBeenCalled();
            expect(MOCK_OIDC_SECURITY.authorize).toHaveBeenCalled();
            expect(MOCK_OIDC_CONFIG.load_using_stsServer).toHaveBeenCalled();
        });

        it(`Should properly call 'formatUserData'`, () => {
            const provider = new GoogleProvider(MOCK_OIDC_CONFIG, MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG);
            const mockObj = {
                sub: 'test-id',
                name: 'test-name',
                email: 'test-email',
                given_name: 'test-given_name',
                family_name: 'test-family_name',
                picture: 'test-picture'
            };
            spyOn(MOCK_OIDC_SECURITY, 'getToken').and.returnValue('FAKE');
            expect((provider as any).formatUserData(mockObj)).toEqual({
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
            const provider = new GoogleProvider(MOCK_OIDC_CONFIG, MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG);
            const mockSub = {
                subscribe: (fn: () => {}) => {
                    fn.apply(this);
                }
            };
            spyOn(mockSub, 'subscribe').and.callThrough();
            spyOn(MOCK_OIDC_CONFIG.onConfigurationLoaded, 'pipe').and.returnValue(mockSub);
            spyOn(provider, 'config');
            spyOn(MOCK_OIDC_CONFIG, 'load_using_stsServer');
            MOCK_OIDC_SECURITY.onAuthorizationResult = mockSub;
            spyOn(MOCK_OIDC_SECURITY, 'getUserData').and.returnValue(mockSub);
            spyOn(MOCK_OIDC_SECURITY, 'authorizedCallback');
            const formatDataSpy = spyOn<any>(provider, 'formatUserData');
            provider.getUserInfo();
            expect(mockSub.subscribe).toHaveBeenCalled();
            expect(mockSub.subscribe).toHaveBeenCalledTimes(3);
            expect(formatDataSpy).toHaveBeenCalled();
            expect(provider.config).toHaveBeenCalled();
            expect(MOCK_OIDC_SECURITY.authorizedCallback).toHaveBeenCalled();
            expect(MOCK_OIDC_CONFIG.load_using_stsServer).toHaveBeenCalled();
        });

        it('Should properly call logout', () => {
            const provider = new GoogleProvider(MOCK_OIDC_CONFIG, MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG);
            spyOn(MOCK_OIDC_SECURITY, 'logoff').and.callThrough();
            provider.logout();
            expect(MOCK_OIDC_SECURITY.logoff).toHaveBeenCalled();
        });
    });

    describe('Microsoft Provider', () => {

        it('Should properly initialize', () => {
            const provider = new MicrosoftProvider(MOCK_OIDC_CONFIG, MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG);
            expect(provider).toBeDefined();
        });

        it('Should properly call config', () => {
            const provider = new MicrosoftProvider(MOCK_OIDC_CONFIG, MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG);
            spyOn(MOCK_OIDC_SECURITY, 'setupModule').and.callThrough();
            provider.config();
            expect(MOCK_OIDC_SECURITY.setupModule).toHaveBeenCalled();
        });

        it('Should properly call config if tenant !== consumer', () => {
            const provider = new MicrosoftProvider(MOCK_OIDC_CONFIG, MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG);
            provider.tenant = 'test';
            provider.tenantID = 'test_id';
            spyOn(String.prototype, 'replace');
            spyOn(MOCK_OIDC_SECURITY, 'setupModule').and.callThrough();
            provider.config();
            expect(String.prototype.replace).toHaveBeenCalledWith('{tenantid}', 'test_id');
            expect(MOCK_OIDC_SECURITY.setupModule).toHaveBeenCalled();
        });

        it('Should properly call login', () => {
            const provider = new MicrosoftProvider(MOCK_OIDC_CONFIG, MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG);
            const mockSub = {
                subscribe: (fn: () => {}) => {
                    fn.apply(MOCK_OIDC_SECURITY);
                }
            };
            spyOn(mockSub, 'subscribe').and.callThrough();
            spyOn(MOCK_OIDC_SECURITY, 'authorize');
            spyOn(MOCK_OIDC_CONFIG.onConfigurationLoaded, 'pipe').and.returnValue(mockSub);
            spyOn(MOCK_OIDC_CONFIG, 'load_using_stsServer');
            const mockSpy = spyOn(provider, 'config');
            provider.login();
            expect(mockSub.subscribe).toHaveBeenCalled();
            expect(mockSpy).toHaveBeenCalled();
            expect(MOCK_OIDC_SECURITY.authorize).toHaveBeenCalled();
            expect(MOCK_OIDC_CONFIG.load_using_stsServer).toHaveBeenCalled();
        });

        it('Should properly call getUserInfo', () => {
            const provider = new MicrosoftProvider(MOCK_OIDC_CONFIG, MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG);
            const mockSub = {
                subscribe: (fn: () => {}) => {
                    fn.apply(MOCK_OIDC_SECURITY);
                }
            };
            spyOn(mockSub, 'subscribe').and.callThrough();
            spyOn(MOCK_OIDC_CONFIG.onConfigurationLoaded, 'pipe').and.returnValue(mockSub);
            spyOn(MOCK_OIDC_CONFIG, 'load_using_stsServer');
            spyOn(provider, 'config');
            spyOn(MOCK_OIDC_SECURITY, 'authorizedCallback');
            MOCK_OIDC_SECURITY.onAuthorizationResult = mockSub;
            spyOn(MOCK_OIDC_SECURITY, 'getUserData').and.returnValue(mockSub);
            const formatDataSpy = spyOn<any>(provider, 'formatUserData');
            provider.getUserInfo();
            expect(mockSub.subscribe).toHaveBeenCalled();
            expect(mockSub.subscribe).toHaveBeenCalledTimes(3);
            expect(formatDataSpy).toHaveBeenCalled();
            expect(provider.config).toHaveBeenCalled();
            expect(MOCK_OIDC_SECURITY.authorizedCallback).toHaveBeenCalled();
            expect(MOCK_OIDC_CONFIG.load_using_stsServer).toHaveBeenCalled();
        });

        it(`Should properly call 'formatUserData'`, () => {
            const provider = new MicrosoftProvider(MOCK_OIDC_CONFIG, MOCK_OIDC_SECURITY, MOCK_EXTERNAL_AUTH_CONFIG);
            const mockObj = {
                oid: 'test-id',
                name: 'test-name',
                email: 'test-email',
            };
            spyOn(MOCK_OIDC_SECURITY, 'getToken').and.returnValue('FAKE');
            expect((provider as any).formatUserData(mockObj)).toEqual({
                id: mockObj.oid,
                name: mockObj.name,
                email: mockObj.email,
                externalToken: 'FAKE'
            });
        });
    });
});

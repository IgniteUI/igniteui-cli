import { FacebookProvider } from './facebook-provider';
import { GoogleProvider } from './google-provider';
import { MicrosoftProvider } from './microsoft-provider';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { ExternalAuthService } from '../services/external-auth.service';

fdescribe('Providers', () => {
    class MockFB {
        init() { }
        login() { }
    }
    // TestBed.configureTestingModule({
    //     providers: [{
    //         provider: FB,
    //         useClass: MockFB
    //     }]
    // });
    const mock_externalAuthConfig = jasmine.createSpyObj('mockExtAuthService', [
        'stsServer',
        'redirect_url',
        'client_id',
        'response_type',
        'scope',
        'redirect_url',
        'post_login_route',
        'auto_userinfo',
        'max_id_token_iat_offset_allowed_in_seconds'
    ]);
    const mock_router = jasmine.createSpyObj('mockRouter', ['navigate']);
    const mock_OIDCConfigService = <any>{
        'wellKnownEndpoints': jasmine.createSpy('wellKnownEndpoints'),
        'load_using_stsServer': jasmine.createSpy('load_using_stsServer'),
        'onConfigurationLoaded': {
            pipe: () => { }
        }
    };
    const mock_OIDC_Security = jasmine.createSpyObj('oidcSecurity', ['setupModule', 'authorize',
    'onAuthorizationResult', 'authorizedCallback', 'getUserData']);

    xdescribe('Facebook Provider', () => {
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
            const mockProp = jasmine.createSpyObj('mockObj', ['mockFn']);
            provider.login();
            // spyOn(FB, 'login').and.callFake(mockProp.mockFn);
            expect(provider.config).toHaveBeenCalled();
            expect(mockProp.mockFn).toHaveBeenCalled();
            expect(mockProp.mockFn).toHaveBeenCalledWith({ scope: 'public_profile' });
        });
    });
    fdescribe('Google Provider', () => {
        it('Should properly initialize', () => {
            const provider = new GoogleProvider(mock_OIDCConfigService, mock_OIDC_Security, mock_externalAuthConfig);
            expect(provider).toBeDefined();
        });

        it('Should properly call config', () => {
            const provider = new GoogleProvider(mock_OIDCConfigService, mock_OIDC_Security, mock_externalAuthConfig);
            provider.config();
            expect(mock_OIDC_Security.setupModule).toHaveBeenCalled();
        });

        it('Should properly call login', () => {
            const provider = new GoogleProvider(mock_OIDCConfigService, mock_OIDC_Security, mock_externalAuthConfig);
            const mockSub = {
                'subscribe': (fn: () => {}) => {
                    fn.apply(this);
                }
            };
            spyOn(mockSub, 'subscribe').and.callThrough();
            spyOn(mock_OIDCConfigService.onConfigurationLoaded, 'pipe').and.returnValue(mockSub);
            const mockSpy = spyOn(provider, 'config');
            provider.login();
            expect(mockSub.subscribe).toHaveBeenCalled();
            expect(mockSpy).toHaveBeenCalled();
            expect(mock_OIDC_Security.authorize).toHaveBeenCalled();
            expect(mock_OIDCConfigService.load_using_stsServer).toHaveBeenCalled();
        });

        it('Should properly call getUserInfo', () => {
            const provider = new GoogleProvider(mock_OIDCConfigService, mock_OIDC_Security, mock_externalAuthConfig);
            const mockSub = {
                'subscribe': (fn: () => {}) => {
                    fn.apply(this);
                }
            };
            spyOn(mockSub, 'subscribe').and.callThrough();
            spyOn(mock_OIDCConfigService.onConfigurationLoaded, 'pipe').and.returnValue(mockSub);
            const mockSpy = spyOn(provider, 'config');
            mock_OIDC_Security.onAuthorizationResult = mockSub;
            mock_OIDC_Security.getUserData.and.returnValue(mockSub);
            const formatDataSpy = spyOn<any>(provider, 'formatUserData');
            provider.getUserInfo();
            expect(mockSub.subscribe).toHaveBeenCalled();
            expect(mockSub.subscribe).toHaveBeenCalledTimes(3);
            expect(formatDataSpy).toHaveBeenCalled();
            expect(provider.config).toHaveBeenCalled();
            expect(mock_OIDC_Security.authorizedCallback).toHaveBeenCalled();
            expect(mock_OIDCConfigService.load_using_stsServer).toHaveBeenCalled();
        });
    });
    describe('Microsoft Provider', () => {

    });
});

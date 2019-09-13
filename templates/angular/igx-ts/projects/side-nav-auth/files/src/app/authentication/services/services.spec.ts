import { AuthenticationService } from './authentication.service';
import * as JWTUtil from './jwt-util';
import { ExternalAuthService, ExternalAuthRedirectUrl } from './external-auth.service';
import { ExternalAuthProvider } from './external-auth-configs';
import { GoogleProvider } from '../providers/google-provider';
import { FacebookProvider } from '../providers/facebook-provider';
import { MicrosoftProvider } from '../providers/microsoft-provider';
import { BackendInterceptor } from './fake-backend.service';
import { HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { take } from 'rxjs/operators';
import msKeys from './microsoft-keys';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

describe('Services', () => {

    describe('Authentication Service', () => {
        const MOCK_HTTP_CLIENT = {
            post: () => { }
        } as any;

        const authServ = new AuthenticationService(MOCK_HTTP_CLIENT);
        it('Should properly initialize', async () => {
            expect(authServ).toBeDefined();
        });
        it(`Should properly call 'login'`, async () => {
            const loginPostSpy = spyOn<any>(authServ, 'loginPost').and.returnValue(Promise.resolve());
            const dummyData = { email: 'Dummy', password: 'Data' };
            await authServ.login(dummyData);
            expect(loginPostSpy).toHaveBeenCalled();
            expect(loginPostSpy).toHaveBeenCalledWith('/login', dummyData);
        });
        it(`Should properly call 'register'`, async () => {
            const loginPostSpy = spyOn<any>(authServ, 'loginPost').and.returnValue(Promise.resolve());
            const dummyData = { given_name: 'Testy', family_name: 'Testington', email: 'Dummy', password: 'Data' };
            await authServ.register(dummyData);
            expect(loginPostSpy).toHaveBeenCalled();
            expect(loginPostSpy).toHaveBeenCalledWith('/register', dummyData);
        });
        it(`Should properly call 'loginWith'`, async () => {
            const loginPostSpy = spyOn<any>(authServ, 'loginPost').and.returnValue(Promise.resolve());
            const dummyData = { id: 'Test', name: 'Testy', email: 'Dummy', externalToken: 'Data' };
            await authServ.loginWith(dummyData);
            expect(loginPostSpy).toHaveBeenCalled();
            expect(loginPostSpy).toHaveBeenCalledWith('/extlogin', dummyData);
        });
        it(`Should properly call 'loginPost'`, async () => {
            const loginPostSpy = spyOn<any>(authServ, 'loginPost').and.callThrough();
            const dummyData = { email: 'Dummy', password: 'Data' };
            const mockObs = { toPromise: () => { } };
            spyOn(mockObs, 'toPromise').and.returnValue('TEST DATA' as any);
            spyOn(MOCK_HTTP_CLIENT, 'post').and.returnValue(mockObs);
            spyOn(JWTUtil, 'parseUser').and.returnValue({ user: 'Test' } as any);
            await authServ.login(dummyData);
            expect(loginPostSpy).toHaveBeenCalledWith('/login', dummyData);
            expect(MOCK_HTTP_CLIENT.post).toHaveBeenCalledWith('/login', dummyData);
            expect(JWTUtil.parseUser).toHaveBeenCalledWith('TEST DATA');
        });
        it(`Should properly call 'loginPost' and throw error`, async () => {
            const dummyData = { email: 'Dummy', password: 'Data' };
            const mockObs = { toPromise: () => { } };
            spyOn(mockObs, 'toPromise').and.callFake(() => {
                throw new Error('Test Error');
            });
            spyOn(MOCK_HTTP_CLIENT, 'post').and.returnValue(mockObs);
            expect(await (authServ as any).loginPost(dummyData)).toEqual({ error: 'Test Error' });
            expect(MOCK_HTTP_CLIENT.post).toHaveBeenCalled();
        });
    });

    describe('External Authentication Service', () => {
        const MOCK_OIDC_SECURITY = {} as any;
        const MOCK_OIDC_CONFIG = {} as any;
        const MOCK_ROUTER = {} as any;
        const MOCK_LOCATION = {
            prepareExternalUrl: () => { }
        } as any;

        const extAuthServ = new ExternalAuthService(MOCK_ROUTER, MOCK_OIDC_SECURITY, MOCK_OIDC_CONFIG, MOCK_LOCATION);
        it(`Should properly initialize`, () => {
            expect(extAuthServ).toBeDefined();
        });
        it(`Should properly get/set 'activeProvider'`, () => {
            spyOn(localStorage, 'getItem').and.returnValue('test');
            const testProvider = extAuthServ.activeProvider;
            expect(localStorage.getItem).toHaveBeenCalled();
            expect(localStorage.getItem).toHaveBeenCalledWith('extActiveProvider');
            expect(testProvider).toEqual('test');
            spyOn(localStorage, 'setItem');
            extAuthServ.activeProvider = 'ccc' as any;
            expect(localStorage.setItem).toHaveBeenCalled();
            expect(localStorage.setItem).toHaveBeenCalledWith('extActiveProvider', 'ccc');
        });

        it(`Should properly call 'hasProvider'`, () => {
            const providersMap = new Map<any, any>();
            (extAuthServ as any).providers = providersMap;
            expect(extAuthServ.hasProvider()).toEqual(false);
            providersMap.set('0', '0');
            expect(extAuthServ.hasProvider()).toEqual(true);
            expect(extAuthServ.hasProvider('0' as any)).toEqual(true);
            expect(extAuthServ.hasProvider('1' as any)).toEqual(false);
        });

        it(`Should properly call 'addGoogle'`, () => {
            const providersSpy = spyOn<any>((extAuthServ as any).providers, 'set');
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
                new GoogleProvider(MOCK_OIDC_CONFIG, MOCK_OIDC_SECURITY, configParams));
        });

        it(`Should properly call 'addFacebook'`, () => {
            const providersSpy = spyOn<any>((extAuthServ as any).providers, 'set');
            const configParams = {
                client_id: 'test',
                redirect_url: ExternalAuthRedirectUrl.Facebook
            } as any;
            extAuthServ.addFacebook('test');
            expect(providersSpy).toHaveBeenCalled();
            expect(providersSpy).toHaveBeenCalledWith('Facebook',
                new FacebookProvider(configParams, MOCK_ROUTER));
        });

        it(`Should properly call 'addMicrosoft'`, () => {
            const providersSpy = spyOn<any>((extAuthServ as any).providers, 'set');
            spyOn<any>(extAuthServ, 'getAbsoluteUrl').and.returnValue('testUrl');
            const configParams = {
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
            } as any;
            extAuthServ.addMicrosoft('test');
            expect(providersSpy).toHaveBeenCalled();
            expect(providersSpy).toHaveBeenCalledWith('Microsoft',
                new MicrosoftProvider(MOCK_OIDC_CONFIG, MOCK_OIDC_SECURITY, configParams));
        });

        it(`Should properly call 'getUserInfo'`, async () => {
            const providersMap = new Map<any, any>();
            const mockObj = {
                getUserInfo: () => {
                    return { name: 'test' };
                }
            };
            spyOn(mockObj, 'getUserInfo').and.callThrough();
            const providersGetSpy = spyOn(providersMap, 'get').and.returnValue(false);
            providersMap.set(ExternalAuthProvider.Facebook, mockObj);
            (extAuthServ as any).providers = providersMap;
            spyOn(Promise, 'reject').and.returnValue(Promise.resolve(null));
            expect(await extAuthServ.getUserInfo(ExternalAuthProvider.Facebook)).toEqual(null);
            expect(providersGetSpy).toHaveBeenCalledTimes(1);
            providersGetSpy.and.returnValue(mockObj);
            expect(await extAuthServ.getUserInfo(ExternalAuthProvider.Facebook)).toEqual({
                name: 'test',
                externalProvider: ExternalAuthProvider.Facebook
            } as any);
            expect(providersGetSpy).toHaveBeenCalledTimes(2);
        });

        it(`Should properly call 'login'`, () => {
            const providersMap = new Map<any, any>();
            const mockObj = {
                login: () => { }
            } as any;
            spyOn(mockObj, 'login');
            const providersGetSpy = spyOn(providersMap, 'get').and.returnValue(false);
            providersMap.set(ExternalAuthProvider.Facebook, mockObj);
            (extAuthServ as any).providers = providersMap;
            const setActiveProvider = spyOnProperty(extAuthServ, 'activeProvider', 'set');
            extAuthServ.login(ExternalAuthProvider.Facebook);
            expect(mockObj.login).not.toHaveBeenCalled();
            expect(setActiveProvider).not.toHaveBeenCalled();
            providersGetSpy.and.returnValue(mockObj);
            extAuthServ.login(ExternalAuthProvider.Facebook);
            expect(mockObj.login).toHaveBeenCalled();
            expect(setActiveProvider).toHaveBeenCalledWith(ExternalAuthProvider.Facebook);
        });

        it(`Should properly call 'logout'`, () => {
            const providersMap = new Map<any, any>();
            const mockObj = {
                logout: () => { }
            } as any;
            spyOn(mockObj, 'logout');
            providersMap.set(ExternalAuthProvider.Facebook, mockObj);
            spyOn(providersMap, 'get').and.returnValue(mockObj);
            (extAuthServ as any).providers = providersMap;
            const setActiveProviderSpy = spyOnProperty(extAuthServ, 'activeProvider', 'get').and.returnValue(false);
            extAuthServ.logout();
            expect(mockObj.logout).not.toHaveBeenCalled();
            expect(providersMap.get).not.toHaveBeenCalled();
            expect(setActiveProviderSpy).toHaveBeenCalledTimes(1);
            setActiveProviderSpy.and.returnValue('MOCK TOKEN');
            extAuthServ.logout();
            expect(mockObj.logout).toHaveBeenCalled();
            expect(providersMap.get).toHaveBeenCalled();
            expect(providersMap.get).toHaveBeenCalledWith('MOCK TOKEN');
            expect(setActiveProviderSpy).toHaveBeenCalledTimes(3);
        });

        it(`Should properly call 'getAbsoluteUrl'`, () => {
            const currentOrigin = window.location.origin;
            spyOn(MOCK_LOCATION, 'prepareExternalUrl').and.returnValue('test_href_2');
            expect((extAuthServ as any).getAbsoluteUrl('mock_path')).toEqual(`${currentOrigin}test_href_2`);
            expect(MOCK_LOCATION.prepareExternalUrl).toHaveBeenCalledWith('mock_path');
        });
    });

    describe(`MOCK Backend Service`, () => {
        const provider = new BackendInterceptor();
        describe(`public`, () => {
            it(`Should properly call 'intercept'`, () => {
                const mockRequest = {
                    method: 'POST',
                    url: '/login',
                    version: 'test'
                } as any;
                const mockUsers = [];
                const mockNext = {
                    handle: () => new Observable<any>()
                } as HttpHandler;
                // endpoint /login

                // mocked method in intercept still need to return observable, otherwise rxjs pipe throws
                spyOn(provider, 'loginHandle').and.returnValue(new Observable());
                spyOn(JSON, 'parse').and.returnValue(mockUsers);
                provider.intercept(mockRequest, mockNext).pipe(take(1)).subscribe(() => { });
                expect(JSON.parse).toHaveBeenCalledWith(null);
                expect(JSON.parse).toHaveBeenCalledTimes(1);
                expect(provider.loginHandle).toHaveBeenCalledWith(mockRequest);
                expect(provider.loginHandle).toHaveBeenCalledTimes(1);
                // endpoint /register
                mockRequest.url = '/register';
                const getStorageUserSpy = spyOn<any>(provider, 'getStorageUser').and.returnValue({ name: 'Mock user' });
                spyOn(provider, 'registerHandle').and.returnValue(new Observable());
                provider.intercept(mockRequest, mockNext).pipe(take(1)).subscribe(() => { });
                expect(JSON.parse).toHaveBeenCalledTimes(2);
                expect(getStorageUserSpy).toHaveBeenCalledWith(mockRequest);
                expect(getStorageUserSpy).toHaveBeenCalledTimes(1);
                expect(provider.registerHandle).toHaveBeenCalledWith({ name: 'Mock user' });
                expect(provider.registerHandle).toHaveBeenCalledTimes(1);
                // endpoint /register
                mockRequest.url = '/extlogin';
                const getStorageExtUserSpy = spyOn<any>(provider, 'getStorageExtUser').and.returnValue({ name: 'Mock user' });
                provider.intercept(mockRequest, mockNext).pipe(take(1)).subscribe(() => { });
                expect(JSON.parse).toHaveBeenCalledTimes(3);
                expect(getStorageExtUserSpy).toHaveBeenCalledWith(mockRequest);
                expect(getStorageExtUserSpy).toHaveBeenCalledTimes(1);
                expect(provider.registerHandle).toHaveBeenCalledWith({ name: 'Mock user' }, true);
                expect(provider.registerHandle).toHaveBeenCalledTimes(2);
                // microsoft keys
                mockRequest.method = 'GET';
                mockRequest.url = '/ms-discovery/keys';
                const expectedOutput = new HttpResponse({ status: 200, body: msKeys });
                let output: any;
                provider.intercept(mockRequest, mockNext).pipe(take(1)).subscribe((e) => { output = e; });
                expect(output).toEqual(expectedOutput);
                expect(JSON.parse).toHaveBeenCalledTimes(4);
                // no change in number of calls
                expect(getStorageUserSpy).toHaveBeenCalledTimes(1);
                expect(getStorageExtUserSpy).toHaveBeenCalledTimes(1);
                expect(provider.registerHandle).toHaveBeenCalledTimes(2);
                // no intercept scenario
                mockRequest.method = 'POST';
                mockRequest.url = '/test';
                spyOn(mockNext, 'handle').and.callThrough();
                provider.intercept(mockRequest, mockNext).pipe(take(1)).subscribe(() => { });
                expect(mockNext.handle).toHaveBeenCalledWith(mockRequest);
                expect(mockNext.handle).toHaveBeenCalledTimes(1);
                // test invalid case combiantions
                mockRequest.method = 'GET';
                mockRequest.url = '/register';
                provider.intercept(mockRequest, mockNext).pipe(take(1)).subscribe(() => { });
                mockRequest.url = '/login';
                provider.intercept(mockRequest, mockNext).pipe(take(1)).subscribe(() => { });
                mockRequest.url = '/extlogin';
                provider.intercept(mockRequest, mockNext).pipe(take(1)).subscribe(() => { });
                mockRequest.method = 'POST';
                mockRequest.url = '/ms-discovery/keys';
                provider.intercept(mockRequest, mockNext).pipe(take(1)).subscribe(() => { });
                expect(mockNext.handle).toHaveBeenCalledTimes(5);
                // no change in number of calls
                expect(getStorageUserSpy).toHaveBeenCalledTimes(1);
                expect(getStorageExtUserSpy).toHaveBeenCalledTimes(1);
                expect(provider.registerHandle).toHaveBeenCalledTimes(2);
            });

            it(`Should properly call 'registerHandle'`, () => {
                const mockUser = {
                    email: 'test_user'
                } as any;
                provider.users = [mockUser];
                let output;
                let expectedOutput = { error: { message: 'Account with email "test_user" already exists' } } as any;
                provider.registerHandle(mockUser, false).pipe(take(1)).subscribe(() => { }, (e) => { output = e; });
                expect(output).toEqual(expectedOutput);
                spyOn(localStorage, 'setItem');
                spyOn(JSON, 'stringify').and.returnValue('MOCK OBJ');
                const generateBodySpy = spyOn<any>(provider, 'getUserJWT').and.returnValue('MOCK BODY');
                const tokenSpy = spyOn<any>(provider, 'generateToken').and.returnValue('MOCK TOKEN');
                expectedOutput = new HttpResponse({ status: 200, body: 'MOCK TOKEN' });
                provider.registerHandle({ email: 'test_user', customProp: 'very_custom ' } as any, true)
                    .pipe(take(1)).subscribe((e) => { output = e; });
                expect(output).toEqual(expectedOutput);
                expect(generateBodySpy).toHaveBeenCalledWith(mockUser);
                expect(generateBodySpy).toHaveBeenCalledTimes(1);
                expect(tokenSpy).toHaveBeenCalledWith('MOCK BODY');
                expect(tokenSpy).toHaveBeenCalledTimes(1);
                expect(localStorage.setItem).toHaveBeenCalledTimes(1);
                expect(localStorage.setItem).toHaveBeenCalledWith('users', 'MOCK OBJ');
                expect(JSON.stringify).toHaveBeenCalledTimes(1);
                expect(JSON.stringify).toHaveBeenCalledWith([{ email: 'test_user', customProp: 'very_custom ' }]);
                expect(provider.users).toEqual([{ email: 'test_user', customProp: 'very_custom ' }] as any);
                output = '';
                provider.registerHandle({ email: 'new_user', customProp: 'test' } as any)
                    .pipe(take(1)).subscribe((e) => { output = e; });
                expect(output).toEqual(expectedOutput);
                expect(generateBodySpy).toHaveBeenCalledWith({ email: 'new_user', customProp: 'test' });
                expect(generateBodySpy).toHaveBeenCalledTimes(2);
                expect(tokenSpy).toHaveBeenCalledWith('MOCK BODY');
                expect(tokenSpy).toHaveBeenCalledTimes(2);
                expect(localStorage.setItem).toHaveBeenCalledTimes(2);
                expect(localStorage.setItem).toHaveBeenCalledWith('users', 'MOCK OBJ');
                expect(JSON.stringify).toHaveBeenCalledTimes(2);
                expect(JSON.stringify)
                    .toHaveBeenCalledWith([{ email: 'test_user', customProp: 'very_custom ' }, { email: 'new_user', customProp: 'test' }]);
                expect(provider.users)
                    .toEqual([{ email: 'test_user', customProp: 'very_custom ' }, { email: 'new_user', customProp: 'test' }] as any);
            });

            it(`Should properly call 'loginHandle'`, () => {
                const mockUser = {
                    email: 'test_email'
                } as any;
                provider.users = [mockUser];
                const mockRequest = {
                    body: {
                        email: 'test_email'
                    }
                } as any;
                spyOn(Array.prototype, 'find').and.callThrough();
                const jwtSpy = spyOn<any>(provider, 'getUserJWT').and.returnValue('MOCK BODY');
                const tokenSpy = spyOn<any>(provider, 'generateToken').and.returnValue('MOCK TOKEN');
                const expectedOutput = new HttpResponse({ status: 200, body: 'MOCK TOKEN' });
                let output;
                provider.loginHandle(mockRequest).pipe(take(1)).subscribe((e) => { output = e; });
                expect(output).toEqual(expectedOutput);
                expect(jwtSpy).toHaveBeenCalledWith(mockUser);
                expect(tokenSpy).toHaveBeenCalledWith('MOCK BODY');

                const expectedError = { status: 401, error: { message: 'User does not exist!' } };
                let emittedResult;
                (provider.loginHandle({ body: { email: 'missing user' } } as any) as any).pipe(take(1))
                    .subscribe(() => { }, (e: any) => { emittedResult = e; }, () => { });
                expect(emittedResult).toEqual(expectedError);
            });
        });

        describe(`private`, () => {
            it(`Should properly call 'getStorageUser'`, () => {
                const mockInput = {
                    body: {
                        name: 'test_name',
                        email: 'test_email',
                        given_name: 'test_giver_name',
                        family_name: 'test_family_name',
                    }
                };
                provider.users = [];
                expect((provider as any).getStorageUser(mockInput)).toEqual({
                    id: `1`,
                    name: mockInput.body.given_name + ' ' + mockInput.body.family_name,
                    email: mockInput.body.email,
                    given_name: mockInput.body.given_name,
                    family_name: mockInput.body.family_name,
                    picture: '',
                });
            });

            it(`Should properly call 'getStorageExtUser'`, () => {
                const mockInput = {
                    body: {
                        id: 'test_id',
                        name: 'test_name',
                        email: 'test_email',
                        given_name: 'test_giver_name',
                        family_name: 'test_family_name',
                        picture: 'test_picture',
                        externalToken: 'test_externalToken',
                        externalProvider: 'test_externalProvider'
                    }
                };
                expect((provider as any).getStorageExtUser(mockInput)).toEqual({
                    id: mockInput.body.id,
                    name: mockInput.body.name,
                    email: mockInput.body.email,
                    given_name: mockInput.body.given_name,
                    family_name: mockInput.body.family_name,
                    picture: mockInput.body.picture,
                    externalToken: mockInput.body.externalToken,
                    externalProvider: mockInput.body.externalProvider
                });
            });

            it(`Should properly call 'getUserJWT'`, () => {
                const mockInput = {
                    name: 'test_name',
                    given_name: 'test_given_name',
                    family_name: 'test_family_name',
                    email: 'test_email',
                    picture: 'test_picture'
                };
                spyOn(Math, 'floor').and.returnValue(1000);
                spyOn(Date.prototype, 'getTime').and.returnValue(1000);
                const expectedExp = 1000 + (7 * 24 * 60 * 60);
                expect((provider as any).getUserJWT(mockInput)).toEqual({
                    exp: expectedExp,
                    name: mockInput.name,
                    given_name: mockInput.given_name,
                    family_name: mockInput.family_name,
                    email: mockInput.email,
                    picture: mockInput.picture
                });
                expect(Date.prototype.getTime).toHaveBeenCalled();
                expect(Math.floor).toHaveBeenCalledWith(1);
            });

            it(`Should properly call 'generateToken'`, () => {
                const inputString = 'testString1';
                const headerString = JSON.stringify({
                    alg: 'Mock',
                    typ: 'JWT'
                });
                const expectedOutput = btoa(JSON.stringify(headerString)) + '.' + btoa(JSON.stringify(inputString)) + '.mockSignature';
                spyOn(JSON, 'stringify').and.callThrough();
                expect((provider as any).generateToken(inputString)).toEqual(expectedOutput);
                expect(JSON.stringify).toHaveBeenCalledTimes(3);
            });
        });
    });

    describe(`User Service`, () => {
        const mockUser = {
            exp: 111,
            name: 'Testy Testington',
            given_name: 'Testy',
            family_name: 'Testington',
            email: 't-testing@test.test',
            picture: `testy-boy.png`,
            token: `mock token`,
            externalToken: `mock token`
        };

        beforeEach(() => {
            spyOn(JSON, 'parse').and.returnValue(mockUser);
            spyOn(localStorage, 'getItem').and.returnValue('MOCK JSON');
        });

        it(`Should properly initialize`, () => {
            const userServ = new UserService();
            expect(userServ).toBeDefined();
            expect(localStorage.getItem).toHaveBeenCalledWith('currentUser');
            expect(JSON.parse).toHaveBeenCalledWith('MOCK JSON');
            // get current user
            expect(userServ.currentUser).toEqual(mockUser);
        });

        it(`Should properly get 'initials'`, () => {
            const userServ = new UserService();
            const currentUserSpy = spyOnProperty(userServ, 'currentUser', 'get').and.returnValue(null);
            expect(userServ.initials).toEqual(null);
            currentUserSpy.and.returnValue({ given_name: '' });
            expect(userServ.initials).toEqual('');
            currentUserSpy.and.returnValue({ given_name: '', family_name: '' });
            expect(userServ.initials).toEqual('');
            currentUserSpy.and.returnValue({ given_name: '', family_name: 'g' });
            expect(userServ.initials).toEqual('g');
            currentUserSpy.and.returnValue({ given_name: 'h3ll0' });
            expect(userServ.initials).toEqual('h');
            currentUserSpy.and.returnValue({ given_name: 'h3ll0', family_name: 'g' });
            expect(userServ.initials).toEqual('hg');
            currentUserSpy.and.returnValue({ given_name: 'h3ll0', family_name: '' });
            expect(userServ.initials).toEqual('h');
        });

        it(`Should properly 'setCurrentUser'`, () => {
            const userServ = new UserService();
            const mockUser2 = {
                exp: 111,
                name: 'Qually T',
                given_name: 'Qually',
                family_name: 'Testington',
                email: 'q-t@test.test',
                picture: `qt-pie.png`,
                token: `mock token`,
                externalToken: `mock token 2`
            };
            spyOn(JSON, 'stringify').and.returnValue('MOCK STRING');
            spyOn(localStorage, 'setItem');
            userServ.setCurrentUser(mockUser2);
            expect(userServ.currentUser).toEqual(mockUser2);
            expect(JSON.stringify).toHaveBeenCalledWith(mockUser2);
            expect(localStorage.setItem).toHaveBeenCalledWith('currentUser', 'MOCK STRING');
            userServ.setCurrentUser(mockUser);
            expect(userServ.currentUser).toEqual(mockUser);
        });

        it(`Should properly call 'clearCurrentUser'`, () => {
            const userServ = new UserService();
            spyOn(localStorage, 'removeItem');
            expect(userServ.currentUser).toBeTruthy();
            userServ.clearCurrentUser();
            expect(localStorage.removeItem).toHaveBeenCalledWith('currentUser');
            expect(userServ.currentUser).toEqual(null);
        });
    });
});
